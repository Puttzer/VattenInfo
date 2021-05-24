require('dotenv').config()

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
}