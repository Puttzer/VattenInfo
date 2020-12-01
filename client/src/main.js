import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Toolbar from 'vue-js-toolbar'

Vue.config.productionTip = false
Vue.use(Toolbar)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
