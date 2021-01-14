import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user';
import company from './modules/comapny'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    company
  }
})
