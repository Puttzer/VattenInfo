export default {
	state: {
		tests: []

	},
	getters: {

	},
	actions: {
		async getTests({commit}) {
			const token = localStorage.getItem('token')
			const response = await fetch('http://localhost:4000/api/tests', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'authorization': token,
				}
			});
			const data = await response.json();
			// console.log(data)
			commit('updateTest',data.tests, {module:'tests'})
            // commit('UPDATE_ISLOGGEDIN', false, { module: 'admin' });

			
		},


	},
	mutations: {
		updateTest(state, value) {
			state.tests = value.map((test)=>test)
			console.log(state.tests);

		}

	},
	namespaced: true

}