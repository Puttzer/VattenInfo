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
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();
            console.log(data)
            commit('UPDATE_STRIPE_PUBLISHABLEKEY', data.stripe_config.publishableKey, { module: 'stripe' });
        }
    },
    getters: {

    }, namespaced: true
}