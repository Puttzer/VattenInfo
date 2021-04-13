import Vue from 'vue'
export default {
    state: {
        orders: [],
        orderGenrated: false,
        order: {},
        orderNumber: null
    },
    getters: {

    },
    actions: {
        async generateOrder({ commit }, payload) {
            // const token = localStorage.getItem('userToken')
            console.log(payload)
            const response = await fetch(`http://localhost:4000/api/order/generate`, {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    'Content-Type': 'application/json',
                    // 'authorization': token,
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
        }



    }, namespaced: true
}