import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user';
import company from './modules/company'
import admin from './modules/admin'
import tests from './modules/tests'
import order from './modules/order'
import stripe from './modules/stripe'


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        company,
        admin,
        tests,
        order,
        stripe
    }
})
