export default {
    state: {
        companys: [],
        errorMessage: '',
        sucessMessage: '',
        companyUserIsloggedIn: false,
        companyUser: {
            email: '',
            _id: ''
        }
    },
    getters: {

    },
    actions: {
        async getCompanys({ commit }) {
            console.log('move to dispatch')
            const token = localStorage.getItem('token')
            const response = await fetch('http://localhost:4000/api/admin/companys', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': token,
                }
            })

            const data = await response.json()
            console.log(data.companys)
            commit('UPDATE_SUCESS_MESSAGE', data.message, { module: 'company' })
            commit('UPDATE_COMPANYS', data.companys, { module: 'company' })

        },
        async deleteCompany({ commit }, id) {
            console.log('move to dispatch')
            const token = localStorage.getItem('token')
            const response = await fetch(`http://localhost:4000/api/company/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': token,
                }
            })

            const data = await response.json()
            console.log(data)
            commit('DELETE_COMPANY', data.company._id, { module: 'company' })

        },
        //         async loginUser({ commit }, payload) {
        //             console.log(payload)

        //             const response = await fetch(`http://localhost:4000/api/user/login`, {
        //                 method: 'POST',
        //                 body: JSON.stringify(payload),
        //                 headers: {
        //                     'Content-Type': 'application/json'
        //                 }
        //             })

        //             const data = await response.json()
        //             console.log(data)
        //             localStorage.setItem('userToken', data.Token)
        //             commit('UPDATE_USER_EMAIL', data.email, { module: 'user' })
        //             commit('UPDATE_USER_ID', data._id, { module: 'user' })
        //             commit('UPDATE_USER_ISLOGGEDIN', true, { module: 'user' })

        //         }
    },
    mutations: {
        UPDATE_COMPANYS(state, value) {
            state.companys = value
        },
        DELETE_COMPANY(state, _id) {
            const remainingUsers = state.companys.filter(company => company._id !== _id)
            console.log(remainingUsers)
            state.companys = remainingUsers
        },
        UPDATE_SUCESS_MESSAGE(state, value) {
            state.sucessMessage = value
            // this.$vToastify.success(state.sucessMessage);
        },
        // UPDATE_USER_EMAIL(state, email) {
        //     state.user.email = email
        // },
        // UPDATE_USER_ID(state, id) {
        //     state.user._id = id
        // },
        // UPDATE_USER_ISLOGGEDIN(state, value) {
        //     state.userIsloggedIn = value
        // }

    },
    namespaced: true
}