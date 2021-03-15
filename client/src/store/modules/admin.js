
export default {
    state: {
        username: "",
        isLoggedIn: null,
        isAdmin: null,
        token: ""
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
            ctx.commit('UPDATE_TOKEN', data.Token, { module: 'admin' });
            ctx.commit('UPDATE_ISLOGGEDIN', true, { module: 'admin' });

        },

    },
    mutations: {
        // after geeting response from server, token has to be stored in localstorage
        UPDATE_TOKEN(state, token) {
            localStorage.setItem("token", token)
            state.token = token
        },
        UPDATE_ISLOGGEDIN(state, isLoggedIn) {
            state.isLoggedIn = isLoggedIn
        },
        UPDATE_USERNAME(state, username) {
            state.username = username
        },
        UPDATE_ISADMIN(state, value) {
            state.isAdmin = value
        }

    }, namespaced: true
}