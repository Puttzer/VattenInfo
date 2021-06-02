// import Vue from 'vue'
// import Stripe from 'stripe'
export default {
    state: {
        publishableKey: null,
        ST_SESSION_ID_TOK: null,
        paymentId: '',
    },
    mutations: {
        UPDATE_STRIPE_PUBLISHABLEKEY(state, value) {
            state.publishableKey = value
            console.log(state.publishableKey)
        },
        UPDATE_STRIPE_SESSION_ID(state, value) {
            state.ST_SESSION_ID_TOK = value

            console.log(state.publishableKey)
        },
        UPDATE_STRIPE_PAYMENT_ID(state, value) {
            state.paymentId = value

        }
    },
    actions: {
        async getStripePublishableKey({ commit }) {
            const response = await fetch('http://localhost:4000/api/config', {
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

        async stripeCheckOut({ commit }, { payload, publishableKey, orderGeneratePayload }) {
            console.log('inside actions', { payload, publishableKey, orderGeneratePayload })

            const stripe = window.Stripe(`${publishableKey}`)
            fetch('http://localhost:4000/api/create-checkout-session', {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(async function (response) {
                    const data = await response.json();
                    console.log(data)
                    window.localStorage.setItem('session_stripe_id', `${data.id}`);
                    commit('UPDATE_STRIPE_SESSION_ID', data.id, { module: 'stripe' });
                    console.log('local storage ', window.localStorage)
                    return data.id;
                })
                .then(function (id) {
                    window.localStorage.clear();
                    console.log('stripe object', stripe)
                    // dispatch('order/generateCompanyOrder', orderGeneratePayload, { root: true })
                    stripe.redirectToCheckout({ sessionId: id })

                    console.log('the stripe ID IS COMPLETED AND REDIRECT', id);

                    // save id in localStorage
                    // use id from lS
                    // delete immedieatley.


                    // await stripe.confirmCardPayment(`${publishableKey}`)
                    //     .then(function (result) {
                    //         if (result.error) {
                    //             // Inform the customer that there was an error.
                    //             console.log(result.error.message);
                    //         } else {
                    //             console.log(result)
                    //             // Handle next step based on PaymentIntent's status.
                    //             console.log("PaymentIntent ID: " + result.paymentIntent.id);
                    //             console.log("PaymentIntent status: " + result.paymentIntent.status);
                    //             commit('UPDATE_STRIPE_PAYMENT_ID', result.paymentIntent.id, { module: 'stripe' });
                    //         }
                    //     })


                })
                .then(function (result) {
                    console.log(result)

                    // console.log(orderGeneratePayload)
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