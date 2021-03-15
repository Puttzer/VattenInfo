import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import KundStartsidan from '../views/KundStartsidan.vue'
import AnalysKatalog from '../views/Analyskatalog.vue'
import KontaktSidan from '../views/KontaktSidan.vue'
import RegistreraKund from '../views/RegistreraKund.vue'
import PaymentInfo from '../components/CardDetails/PaymentInfo.vue'
import LostLogin from '../views/LostLogin.vue'
import BestallSidan from '../views/BestallSidan.vue'
import InstruktionOchBlanketter from '../views/InstruktionOchBlanketter.vue'
import OmLaboratiet from '../views/OmLaboratiet.vue'
import HjalpMedDittVatten from '../views/HjalpMedDittVatten.vue'
import EnsikltDricksVatten from '../views/EnsikltDricksVatten.vue'
import AvloppsAnalyser from '../views/AvloppsAnalyser.vue'
import BygglovTillstand from '../views/BygglovTillstand.vue'
import VerksamhetSamfallighet from '../views/VerksamhetSamfallighet.vue'
import AdminLogin from '../views/AdminLogin.vue'


Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/lostlogin',
        name: 'LostLogin',
        component: LostLogin
    },
    {
        path: '/analyskatalog',
        name: 'AnalysKatalog',
        component: AnalysKatalog
    },
    {
        path: '/login/user',
        name: 'PrivateAccount',
        component: KundStartsidan
    },
    {
        path: '/admin',
        name: 'AdminLogin',
        component: AdminLogin
    },
    {
        path: '/private',
        name: 'KundStartsidan',
        component: KundStartsidan
    },
    {
        path: '/bestall',
        name: 'BestallSidan',
        component: BestallSidan
    },
    {
        path: '/blanketter',
        name: 'InstruktionOchBlanketter',
        component: InstruktionOchBlanketter
    },
    {
        path: '/omlab',
        name: 'OmLaboratiet',
        component: OmLaboratiet
    },
    {
        path: '/help',
        name: 'HjalpMedDittVatten',
        component: HjalpMedDittVatten
    },
    {
        path: '/enskilt_vatten',
        name: 'EnsikltDricksVatten',
        component: EnsikltDricksVatten
    },
    {
        path: '/avlopp_analyser',
        name: 'AvloppsAnalyser',
        component: AvloppsAnalyser

    },
    {
        path: '/bygglov_tillstand',
        name: 'BygglovTillstand',
        component: BygglovTillstand
    },
    {
        path: '/verksamhet',
        name: 'VerksamhetSamfallighet',
        component: VerksamhetSamfallighet
    },
    {
        path: '/kontakt',
        name: 'KontaktSidan',
        component: KontaktSidan
    },
    {
        path: '/registrera',
        name: 'RegistreraKund',
        component: RegistreraKund
    },
    {
        path: '/payment',
        name: 'PaymentInfo',
        component: PaymentInfo
    },
    {
        path: '/*',
        alias: '/'
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
