
export default {
    state: {
        username: "",
        isLoggedIn: false,
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
            ctx.commit('UPDATE_TOKEN', data.Token);
        },

    },
    mutations: {
        UPDATE_TOKEN(state, token) {
            localStorage.setItem("token", token)
            this.state.token = token
        }

    }, namespaced: true
}