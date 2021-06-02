
const Product = require('../../models/test')
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
    router.post('/create-checkout-session', async (req, res) => {
        console.log(req.body)

        const { orderTests } = req.body
        console.log(orderTests)

        const testsList = req.body.orderTests.map(test => test)

        let newTestData = []
        testsList.map(async (test) => {
            const product = await stripe.products.create({
                name: req.body
            })
        })

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],

            line_items: testsList,
            mode: 'payment',
            success_url: `${YOUR_DOMAIN}/paymentSucess`,
            cancel_url: `${YOUR_DOMAIN}/paymentCancel`,
        });
        res.json({ id: session.id });
    });
}
