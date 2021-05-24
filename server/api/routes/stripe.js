require('dotenv').config()
const stripe = require('stripe')(`${process.env.STRIPE_SECRET_KEY}`);
const YOUR_DOMAIN = 'http://localhost:4000';

const stripe_keys = {
    secret_key: process.env.STRIPE_SECRET_KEY,
    publishable_key: process.env.STRIPE_PUBLISHABLE_KEY
}
module.exports = function (router) {

    router.get('/stripe/config', async function (req, res, next) {
        const stripe_publishable_key = stripe_keys.publishable_key
        res.json({
            stripe_config: {
                publishableKey: stripe_publishable_key
            }
        })
    })
    router.post('/create-checkout-session', async (req, res) => {
        console.log(req.body)

        const { orderTests } = req.body

        const testsList = req.body.orderTests.map(test => test)
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'sek',
                        product_data: {
                            name: testsList[0].testname,
                            // images: [`${YOUR_DOMAIN}/${testsList[0].image}`],
                        },
                        unit_amount: testsList[0].price,
                    },
                    quantity: testsList[0].quantity,
                },
            ],
            mode: 'payment',
            success_url: `${YOUR_DOMAIN}/paymentSucess`,
            cancel_url: `${YOUR_DOMAIN}/paymentCancel`,
        });
        res.json({ id: session.id });
    });
}
