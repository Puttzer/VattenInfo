import Vue from 'vue'
import Vuex from 'vuex'

// import user from './modules/user';
// import company from './modules/comapny'
import admin from './modules/admin'
import tests from './modules/tests'


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        // user,
        // company,
        admin,
		tests
    }
})
