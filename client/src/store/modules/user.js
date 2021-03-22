export default {
    state: {
        users: []

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
        }
    },
    namespaced: true
}