import Vue from 'vue'
export default {
    state: {
        orders: [],
        individualOrders: [],
        orderGenrated: false,
        order: {},
        orderNumber: null
    },
    getters: {

    },
    actions: {
        async generatePrivateOrder({ commit }, payload) {
            const token = localStorage.getItem('userToken')
            console.log(payload)
            const response = await fetch(`http://localhost:4000/api/order/private/generate`, {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': token,
                }
            })

            const data = await response.json()

            console.log(data)
            // localStorage.setItem('userToken', data.Token)
            // localStorage.setItem('userLoggedIn', data.userLoggedin)
            console.log(data)

            commit('UPDATE_ORDERNUMBER', data.orderNumber, { module: 'order' })
            commit('UPDATE_ORDER_GENERATE', true, { module: 'order' })
            // commit('UPDATE_SELECTED_TESTS', [], { module: 'tests' })
            // commit('UPDATE_USER_ISLOGGEDIN', data.userLoggedin, { module: 'user' })
            // commit('UPDATE_CLOSE_WINDOW', false, { module: 'user' })
            // commit('USER_DROP_DOWN_CHANGE', false, { module: 'user' })

        },
        async generateCompanyOrder({ commit }, payload) {
            const companyToken = localStorage.getItem('companyProfileToken')
            const userToken = localStorage.getItem('userToken')
            console.log(companyToken, payload)
            console.log(userToken, payload)
            if (companyToken) {

                const response = await fetch(`http://localhost:4000/api/order/company/generate`, {
                    method: 'POST',
                    body: JSON.stringify(payload),
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': companyToken,
                    }
                })
                const data = await response.json()
                console.log(data)

                commit('UPDATE_ORDERNUMBER', data.orderNumber, { module: 'order' })
                commit('UPDATE_ORDER_GENERATE', true, { module: 'order' })
                // commit('UPDATE_SELECTED_TESTS', [], { module: 'tests' })
                // commit('UPDATE_USER_ISLOGGEDIN', data.userLoggedin, { module: 'user' })
                // commit('UPDATE_CLOSE_WINDOW', false, { module: 'user' })
                // commit('USER_DROP_DOWN_CHANGE', false, { module: 'user' })
            } else if (userToken) {

                const response = await fetch(`http://localhost:4000/api/order/private/generate`, {
                    method: 'POST',
                    body: JSON.stringify(payload),
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': userToken,
                    }
                })

                const data = await response.json()
                console.log(data)

                commit('UPDATE_ORDERNUMBER', data.orderNumber, { module: 'order' })
                commit('UPDATE_ORDER_GENERATE', true, { module: 'order' })
            } else {
                return
            }

        },
        async getOrders({ commit }) {
            const token = localStorage.getItem('token')
            const response = await fetch('http://localhost:4000/api/orders', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': token,
                }
            });
            const data = await response.json();
            // console.log(data)
            commit('UPDATE_ORDERS', data.orders, { module: 'order' })
            // commit('UPDATE_ISLOGGEDIN', false, { module: 'admin' });


        },
        async getIndividualOrders({ commit }, userId) {
            const token = localStorage.getItem('userToken')
            const response = await fetch(`http://localhost:4000/api/order/private/${userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': token,
                }
            });
            const data = await response.json();
            console.log(data)
            commit('UPDATE_INDIVIDUAL_ORDERS', data.orders, { module: 'order' })
            // commit('UPDATE_ISLOGGEDIN', false, { module: 'admin' });


        },
        async getCompanyOrders({ commit }, companyId) {
            const token = localStorage.getItem('companyProfileToken')
            const response = await fetch(`http://localhost:4000/api/order/company/${companyId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': token,
                }
            });
            const data = await response.json();
            console.log(data)
            commit('UPDATE_INDIVIDUAL_ORDERS', data.orders, { module: 'order' })
            // commit('UPDATE_ISLOGGEDIN', false, { module: 'admin' });


        },
    },
    mutations: {
        // after geeting response from server, token has to be stored in localstorage
        UPDATE_ORDERNUMBER(state, number) {
            state.orderNumber = number
            Vue.$vToastify.success("Succesfully order is generated");
        },
        UPDATE_ORDER_GENERATE(state, value) {
            console.log(value)
            state.orderGenrated = value
        },
        UPDATE_ORDERS(state, value) {
            state.orders = value
            console.log(state.orders)
        },
        UPDATE_INDIVIDUAL_ORDERS(state, value) {
            state.individualOrders = value
            console.log(state.individualOrders)
        }



    }, namespaced: true
}