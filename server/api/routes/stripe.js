const Test = require('../../models/test')
require('dotenv').config()
const stripe = require('stripe')(`${process.env.STRIPE_SECRET_KEY}`);
const YOUR_DOMAIN = 'http://localhost:8080';

const stripe_keys = {
    secret_key: process.env.STRIPE_SECRET_KEY,
    publishable_key: process.env.STRIPE_PUBLISHABLE_KEY
}
module.exports = function (router) {

    router.get('/config', async function (req, res, next) {
        const stripe_publishable_key = stripe_keys.publishable_key
        const price = await stripe.prices.retrieve(process.env.PRICE);
        console.log(price)
        res.json({
            stripe_config: {
                publishableKey: stripe_publishable_key,
                unitAmount: price.unit_amount,
                currency: price.currency,
            }
        })
    })

    // Fetch the Checkout Session to display the JSON result on the success page
    router.get('/checkout-session', async (req, res) => {
        const { sessionId } = req.query;
        console.log('check sessionId', sessionId)
        const session = await stripe.checkout.sessions.retrieve(sessionId);
        res.send(session);
    });

    router.post('/stripe/products', async (req, res) => {
        let productsList = req.body.orderTests
        console.log(productsList)

        let updatedProductList = []
        await productsList.map(async (test) => {
            console.log('price', parseInt(`${test.price}`) * 100)

            let product = await stripe.prices.create({
                product_data: {
                    name: test.testname
                },
                unit_amount: parseInt(`${test.price}`) * 100,
                currency: 'sek',
                metadata: {
                    _id: test._id,
                    slug: test.slug
                }
            });

            console.log('product', product)
            updatedProductList.push(product)
            console.log('new products', updatedProductList)
            return updatedProductList
        }
        )
        console.log('after loop', updatedProductList)
        res.json({ products: updatedProductList })
    });


    router.post('/createproduct', async (req, res) => {

        // we need to create a user intially with email

        const { test, email } = req.body
        // stage 2: we need to create a product in the stripe
        const product = await stripe.products.create({
            name: test.testname,
            description: test.description
        })
        if (!product) {
            res.status(500).json({
                message: 'unable to insert product in stripe'
            })
        }

        const productID = product.id

        // stage 2: we need to create a price tag for the product

        const productWithPrice = await stripe.prices.create({
            product: productID,
            unit_amount: parseInt(test.price) * 100,
            currency: 'sek',
            metadata: {
                _id: test._id,
                slug: test.slug
            }
        })

        // console.log('Generated product with price details from stripe', productWithPrice)

        if (!productWithPrice) {
            res.status(500).json({
                message: 'unable to insert price for the product in stripe'
            })
        }

        // assigning the priceID and ProductID from the stripe to mongodbObject
        let newTestSample = test
        newTestSample.productId = productWithPrice.product
        newTestSample.priceId = productWithPrice.id

        let qry = { _id: test._id }
        let doc = newTestSample
        console.log('updated test details', doc)
        await Test.findByIdAndUpdate(qry, doc, function (err, newResp) {
            if (err) return console.log(err)
            console.log(newResp)
            res.status(200).json({
                message: 'test details has been updated',
                updatedTest: {
                    _id: req.params.id,
                    updatedTestInfo: doc
                }

            })
        })
    })

    router.post('/create-checkout-session', async (req, res) => {

        const { orderTests, email, _id, } = req.body

        const testsList = req.body.orderTests.map(test => test)

        try {

            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items: testsList,
                mode: 'payment',
                success_url: `${YOUR_DOMAIN}/paymentSucess?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${YOUR_DOMAIN}/paymentCancel`,
            });
            res.json({ sessionId: session.id });
        } catch (error) {
            res.status(400);
            return res.send({
                error: {
                    message: error.message,
                }
            });

        }

    });

    router.post("/webhook", async (req, res) => {
        let data;
        let eventType;
        // Check if webhook signing is configured.
        const webhookSecret = process.env.WEB_HOOK_SECRET
        if (webhookSecret) {
            // Retrieve the event by verifying the signature using the raw body and secret.
            let event;
            let signature = req.headers["stripe-signature"];

            try {
                event = stripe.webhooks.constructEvent(
                    req.body,
                    signature,
                    webhookSecret
                );
            } catch (err) {
                console.log(`⚠️  Webhook signature verification failed.`);
                return res.sendStatus(400);
            }
            // Extract the object from the event.
            data = event.data;
            eventType = event.type;
        } else {
            // Webhook signing is recommended, but if the secret is not configured in `config.js`,
            // retrieve the event data directly from the request body.
            data = req.body.data;
            eventType = req.body.type;
        }

        switch (eventType) {
            case 'checkout.session.completed':
                // Payment is successful and the subscription is created.
                // You should provision the subscription and save the customer ID to your database.
                break;
            case 'invoice.paid':
                // Continue to provision the subscription as payments continue to be made.
                // Store the status in your database and check when a user accesses your service.
                // This approach helps you avoid hitting rate limits.
                break;
            case 'invoice.payment_failed':
                // The payment failed or the customer does not have a valid payment method.
                // The subscription becomes past_due. Notify your customer and send them to the
                // customer portal to update their payment information.
                break;
            default:
            // Unhandled event type
        }

        res.sendStatus(200);
    });
}
