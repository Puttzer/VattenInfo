export default {
    state: {
        users: [],
        userIsloggedIn: false,
        user: {
            email: '',
            _id: ''
        }
    },
    getters: {

    },
    actions: {
        async getUsers({ commit }) {
            console.log('move to dispatch')
            const token = localStorage.getItem('token')
            const response = await fetch('http://localhost:4000/api/admin/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': token,
                }
            })

            const data = await response.json()
            console.log(data.users)
            commit('UPDATE_USERS', data.users, { module: 'user' })

        },
        async deleteUser({ commit }, id) {
            console.log('move to dispatch')
            const token = localStorage.getItem('token')
            const response = await fetch(`http://localhost:4000/api/user/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': token,
                }
            })

            const data = await response.json()
            console.log(data)
            commit('DELETE_USER', data.user._id, { module: 'user' })

        },
        async loginUser({ commit }, payload) {
            console.log(payload)

            const response = await fetch(`http://localhost:4000/api/user/login`, {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const data = await response.json()
            console.log(data)
            localStorage.setItem('userToken', data.Token)
            commit('UPDATE_USER_EMAIL', data.email, { module: 'user' })
            commit('UPDATE_USER_ID', data._id, { module: 'user' })
            commit('UPDATE_USER_ISLOGGEDIN', true, { module: 'user' })

        }
    },
    mutations: {
        UPDATE_USERS(state, value) {
            state.users = value
        },
        DELETE_USER(state, _id) {
            const remainingUsers = state.users.filter(user => user._id !== _id)
            // console.log(remainingUsers)
            state.users = remainingUsers
        },
        UPDATE_USER_EMAIL(state, email) {
            state.user.email = email
        },
        UPDATE_USER_ID(state, id) {
            state.user._id = id
        },
        UPDATE_USER_ISLOGGEDIN(state, value) {
            state.userIsloggedIn = value
        }

    },
    namespaced: true
}