
export default {
    state: {
        username: "",
        isLoggedIn: null,
        isAdmin: null,
        showNavbar: true,
    },
    getters: {

    },
    actions: {
        async login(ctx, userDetails) {
            console.log(userDetails)
            const response = await fetch('http://localhost:4000/api/admin/login', {
                method: 'POST',
                body: JSON.stringify(userDetails),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();
            console.log(data)
            ctx.commit('UPDATE_ISADMIN', data.isAdmin, { module: 'admin' });
            ctx.commit('UPDATE_USERNAME', data.username, { module: 'admin' });
            ctx.commit('UPDATE_ISLOGGEDIN', true, { module: 'admin' });
            ctx.commit('UPDATE_NAVBAR', false, { module: 'admin' });
            // after geeting response from server, token has to be stored in localstorage
            localStorage.setItem("token", data.Token)

        },

        logout({ commit },) {
            commit('UPDATE_ISADMIN', false, { module: 'admin' });
            commit('UPDATE_USERNAME', '', { module: 'admin' });
            commit('UPDATE_ISLOGGEDIN', false, { module: 'admin' });
            commit('UPDATE_NAVBAR', true, { module: 'admin' });
            localStorage.removeItem('token')
        }

    },
    mutations: {
        // after geeting response from server, token has to be stored in localstorage
        UPDATE_ISLOGGEDIN(state, isLoggedIn) {
            state.isLoggedIn = isLoggedIn
        },
        UPDATE_USERNAME(state, username) {
            state.username = username
        },
        UPDATE_ISADMIN(state, value) {
            state.isAdmin = value
        },
        UPDATE_NAVBAR(state, value) {
            state.showNavbar = value
        }


    }, namespaced: true
}