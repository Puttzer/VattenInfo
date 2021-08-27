// import Vue from 'vue'
// import Stripe from 'stripe'
export default {
    state: {
        publishableKey: null,
        sessionId: null,
        paymentId: '',
        responseData: {}
    },
    mutations: {
        UPDATE_STRIPE_PUBLISHABLEKEY(state, value) {
            state.publishableKey = value
            console.log(state.publishableKey)
        },
        UPDATE_STRIPE_SESSION_ID(state, value) {
            state.sessionId = value

            console.log(state.publishableKey)
        },
        UPDATE_STRIPE_PAYMENT_ID(state, value) {
            state.paymentId = value

        },
        UPDATE_RESPONSE(state, value) {
            state.responseData = value
        }
    },
    actions: {

        async getOrderInfo({ commit, dispatch }) {

            console.log('display session value', localStorage.getItem('session_stripe_id'))
            const sessionId = window.localStorage.getItem('session_stripe_id')
            console.log('parameter', sessionId)
            const response = await fetch(`${process.env.VUE_APP_BACKEND_URL}/api/checkout-session?sessionId=${sessionId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
            const data = await response.json();
            console.log('json parse data', data)

            if (response.status === 200) {
                commit('UPDATE_RESPONSE', data, { module: 'stripe' });

                const orderTests = JSON.parse(localStorage.getItem('selectedTests'));
                const totalAmount = localStorage.getItem('total_amount');
                const id = localStorage.getItem('USER_ASSIGN_ID')
                    ? localStorage.getItem('USER_ASSIGN_ID')
                    : localStorage.getItem('COMPANY_ASSIGN_ID');
                const payload = {
                    orderTests: orderTests,
                    totalAmount: totalAmount,
                    id: id,
                };
                console.log(payload);
                dispatch("order/generateCompanyOrder", payload, { root: true });

            } else {
                commit('UPDATE_ERROR_MESSAGE', { message: data.message }, { root: true })
            }


        },
        async getStripePublishableKey({ commit }) {
            const response = await fetch(`${process.env.VUE_APP_BACKEND_URL}/api/config`, {
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

        async stripeCheckOut({ commit }, { payload, publishableKey }) {
            console.log('inside actions', { payload, publishableKey })

            const stripe = window.Stripe(`${publishableKey}`)
            fetch(`${process.env.VUE_APP_BACKEND_URL}/api/create-checkout-session`, {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(async function (response) {
                    const data = await response.json();
                    console.log(data)
                    window.localStorage.setItem('session_stripe_id', `${data.sessionId}`);
                    commit('UPDATE_STRIPE_SESSION_ID', data.sessionId, { module: 'stripe' });
                    console.log('local storage ', window.localStorage)
                    return data.sessionId;
                })
                .then(function (id) {
                    // window.localStorage.clear();
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