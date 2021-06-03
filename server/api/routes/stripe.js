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


    router.post('/stripe/createproduct', async (req, res) => {

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
        console.log(req.body)

        const { orderTests, email, _id, } = req.body
        console.log(orderTests)

        const testsList = req.body.orderTests.map(test => test)

        console.log('line items list', testsList)
        console.log('line items list', testsList[0].price)
        console.log('price_1Iy19QGN3SPsO03O0KEpiSXU')
        try {

            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],

                // line_items: {
                //     price: testsList[0].price,
                //     // For metered billing, do not pass quantity
                //     quantity: testsList[0].quantity,
                // },
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
}
