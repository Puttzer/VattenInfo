export default {
	state: {
		statusMessage: "test",
		companys: [],
		errorMessage: '',
		sucessMessage: '',
		showLoginModel: false,
		showCompanyDropDown: false,
		companyUserIsloggedIn: false,
		companyUser: {
			email: '',
			_id: ''
		}
	},
	getters: {

	},
	actions: {
		async registerCompanyUser({ commit }, companyRegInfo) {
			const response = await fetch('http://localhost:4000/api/company/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(companyRegInfo)
			})
			const data = await response.json();
			console.log(data)
			commit('UPDATE_SUCCESS_MESSAGE', data.message, { module: 'user' })
		},

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
		async loginCompany({ commit }, payload) {
			console.log(payload)

			const response = await fetch(`http://localhost:4000/api/company/login`, {
				method: 'POST',
				body: JSON.stringify(payload),
				headers: {
					'Content-Type': 'application/json'
				}
			})

			const data = await response.json()
			console.log(data)
			localStorage.setItem('companyProfileToken', data.Token)
			commit('UPDATE_COMPANY_EMAIL', data.email, { module: 'company' })
			commit('UPDATE_COMPANY_ID', data._id, { module: 'company' })
			commit('UPDATE_COMPANY_ISLOGGEDIN', true, { module: 'company' })
			commit('UPDATE_CLOSE_WINDOW', false, { module: 'company' })
			commit('COMPANY_DROP_DOWN_CHANGE', false, { module: 'company' })

		}
	},
	mutations: {

		UPDATE_SUCCESS_MESSAGE(state, message) {
			state.statusMessage = message

		},
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
		UPDATE_COMPANY_EMAIL(state, email) {
			state.companyUser.email = email
		},
		UPDATE_COMPANY_ID(state, id) {
			state.companyUser._id = id
		},
		UPDATE_COMPANY_ISLOGGEDIN(state, value) {
			state.companyUserIsloggedIn = value
		},
		UPDATE_CLOSE_WINDOW(state, value) {
			state.showLoginModel = value;
		},
		COMPANY_DROP_MENU(state) {
			state.showCompanyDropDown = !state.showCompanyDropDown
		},
		COMPANY_DROP_DOWN_CHANGE(state, value) {
			state.showCompanyDropDown = value
		},
		COMPANY_LOGOUT(state) {
			state.companyUserIsloggedIn = false,
				state.showCompanyDropDown = false
		},

	},
	namespaced: true
}