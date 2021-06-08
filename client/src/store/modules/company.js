import Vue from 'vue'
export default {
    state: {

        statusMessage: "",
        companys: [],
        errorMessage: '',
        companySucessMessage: '',
        showLoginModel: false,
        showCompanyDropDown: false,
        companyUserIsloggedIn: false,
        companyUser: {
            contactEmail: '',
            _id: ''
        },
        companyInfo: {}
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
            if (response.status === 200) {

                commit('UPDATE_COMPANY_SUCCESS_MESSAGE', data.message, { module: 'company' })
                commit('user/UPDATE_SUCCESS_MESSAGE', data.message, { root: true })
            } else {
                commit('UPDATE_ERROR_MESSAGE', { message: data.message }, { root: true })
            }
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
            localStorage.setItem('COMPANY_ASSIGN_ID', data._id)
            commit('UPDATE_COMPANY_EMAIL', data.contactEmail, { module: 'company' })
            commit('UPDATE_COMPANY_ID', data._id, { module: 'company' })
            commit('UPDATE_COMPANY_ISLOGGEDIN', true, { module: 'company' })
            commit('UPDATE_CLOSE_WINDOW', false, { module: 'company' })
            commit('user/UPDATE_CLOSE_WINDOW', false, { root: true })
            commit('COMPANY_DROP_DOWN_CHANGE', false, { module: 'company' })
        },
        async validateCompany({ commit }) {
            console.log('validate company')
            const token = localStorage.getItem('companyProfileToken')
            const response = await fetch(`http://localhost:4000/api/company/validatetoken`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': token,
                }
            })

            const data = await response.json()
            console.log(data)
            // localStorage.setItem('userToken', data.Token)
            // localStorage.setItem('userLoggedIn', data.userLoggedin)

            commit('UPDATE_COMPANY_EMAIL', data.email, { module: 'company' })
            commit('UPDATE_COMPANY_ID', data.id, { module: 'company' })
            commit('UPDATE_COMPANY_ISLOGGEDIN', data.companyUserIsloggedIn, { module: 'company' })
            commit('UPDATE_CLOSE_WINDOW', false, { module: 'company' })
            commit('user/UPDATE_CLOSE_WINDOW', false, { root: true })
            commit('COMPANY_DROP_DOWN_CHANGE', false, { module: 'company' })

        },
        async getCompanyInfo({ commit }, payload) {
            console.log('get user info')
            const token = localStorage.getItem('companyProfileToken')
            const response = await fetch(`http://localhost:4000/api/company/getCompanyInfo`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': token,
                    body: JSON.stringify(payload)
                }
            })

            const data = await response.json()
            console.log(data)
            // localStorage.setItem('userToken', data.Token)
            // localStorage.setItem('userLoggedIn', data.userLoggedin)

            // commit('UPDATE_USER_EMAIL', data.email, { module: 'user' })
            // commit('UPDATE_USER_ID', data.id, { module: 'user' })
            // commit('UPDATE_USER_ISLOGGEDIN', data.userLoggedin, { module: 'user' })
            // commit('UPDATE_CLOSE_WINDOW', false, { module: 'user' })
            commit('COMPANY_INFO', data.company, { module: 'user' })
        },

        showOnlyOneDropDown() {
            console.log('hey ho!');
        }
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
        UPDATE_COMPANY_SUCCESS_MESSAGE(state, value) {
            state.companySucessMessage = value
            Vue.$vToastify.success(value)
            setTimeout(() => {
                state.companySucessMessage = ""
            }, 4000)
        },
        UPDATE_COMPANY_EMAIL(state, email) {
            state.companyUser.contactEmail = email
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
            state.companyUserIsloggedIn = false
            state.showCompanyDropDown = false
            state.showLoginModel = false
            localStorage.removeItem('COMPANY_ASSIGN_ID')
        },
        COMPANY_DROPDOWNCOPMONENT_DISABLE(state) {
            state.showCompanyDropDown = false
        },
        COMPANY_INFO(state, value) {
            state.companyInfo = { ...value }
            console.log(state.companyInfo)
        },

    },
    namespaced: true
}