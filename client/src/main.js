import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import vuetify from './plugins/vuetify';
import VueToastify from "vue-toastify";
const toastifySettings = {
    position: 'bottom-right',
    theme: 'dark',
    duration: '1000',
    backdrop: "rgba('129,212,250')",
    singular: true,
    iconEnabled: false
}

Vue.use(VueToastify, toastifySettings);


Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
