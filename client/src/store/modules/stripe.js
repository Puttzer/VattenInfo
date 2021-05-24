// import Vue from 'vue'
// import Stripe from 'stripe'
export default {
    state: {
        publishableKey: ''
    },
    mutations: {
        UPDATE_STRIPE_PUBLISHABLEKEY(state, value) {
            state.publishableKey = value
            console.log(state.publishableKey)
        }
    },
    actions: {
        async getStripePublishableKey({ commit }) {
            const response = await fetch('http://localhost:4000/api/stripe/config', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });

            const data = await response.json();
            console.log(data)
            commit('UPDATE_STRIPE_PUBLISHABLEKEY', data.stripe_config.publishableKey, { module: 'stripe' });
        },

        async stripeCheckOut(_, { payload, publishableKey }) {
            console.log('inside actions', { payload, publishableKey })

            const stripe = window.Stripe(`${publishableKey}`)
            // console.log(stripe.redirectToCheckout())
            // const response = await fetch('http://localhost:4000/api/create-checkout-session', {
            //     method: 'POST',
            //     body: JSON.stringify(payload),
            //     headers: {
            //         'Content-Type': 'application/json'
            //     }
            // });

            // const data = await response.json();
            // console.log(data)
            // const sessionId = data.sessionId
            // console.log(sessionId)
            // console.log(stripe)
            // const stripe = Stripe(publishableKey)
            // await stripe.redirectToCheckout({ sessionId: session.id });

            // commit('UPDATE_STRIPE_PUBLISHABLEKEY', data, { module: 'stripe' });
            fetch("http://localhost:4000/api/create-checkout-session", {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(async function (response) {
                    const data = await response.json();
                    console.log(data)
                    return data.id;
                })
                .then(function (id) {
                    return stripe.redirectToCheckout({ sessionId: id })
                })
                .then(function (result) {
                    // If redirectToCheckout fails due to a browser or network
                    // error, you should display the localized error message to your
                    // customer using error.message.
                    if (result.error) {
                        alert(result.error.message);
                    }
                })
                .catch(function (error) {
                    console.error("Error:", error);
                });
        }
    },
    getters: {

    }, namespaced: true
}