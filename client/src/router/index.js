import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'


import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import KundBestallsidan from '../views/KundBestallsidan.vue'
import ForetagStartsida from '../views/ForetagStartsida'
import KundStartSidan from '../views/KundStartSidan.vue'
import TestStartsidan from '../views/TestStartsidan.vue'

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
import AdminStartsidan from '../views/AdminStartsidan.vue'
import Tests from '../components/adminStuff/tests.vue'
import PrivateCustomer from '../components/adminStuff/PrivateCustomer.vue'
import ScrollHome from "../views/ScrollHome.vue";
import ForetagCustomer from '../components/adminStuff/ForetagCustomer.vue'
import KassaSida from '../views/KassaSida.vue'


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
        component: KundBestallsidan
    },
    {
        path: '/login/admin',
        name: 'AdminLogin',
        component: AdminLogin
    },
    {
        path: '/test/scrolltest',
        name: 'ScrollHome',
        component: ScrollHome
    },
    {
        path: '/test/:id',
        name: 'TestStartsidan',
        component: TestStartsidan
    },
    // {
    //     path: '/adminpage',
    //     name: 'AdminStartsidan',
    //     component: AdminStartsidan,
    //     beforeEnter: (to, from, next) => {
    //         console.log(store.state.admin.isLoggedIn)
    //         if (store.state.admin.isAdmin && store.state.admin.isLoggedIn) {
    //             next()
    //         } else {
    //             next('/')
    //         }
    //     }
    // },
    {
        path: '/adminpage',
        // You could also have named views at the top
        component: AdminStartsidan,
        beforeEnter: (to, from, next) => {
            console.log(store.state.admin.isLoggedIn)
            if (store.state.admin.isAdmin && store.state.admin.isLoggedIn) {
                next()
            } else {
                next('/')
            }
        },
        children: [
            {
                path: 'tests',
                component: Tests
            }, {
                path: 'privatecustomer',
                component: PrivateCustomer

            },
            {
                path: 'ForetagCustomer',
                component: ForetagCustomer

            }]
    },
    {
        path: '/login/userpage',
        name: 'KundStartSidan',
        component: KundStartSidan
    },

    {
        path: '/foretag',
        name: 'ForetagStartsida',
        component: ForetagStartsida
    },
    {
        path: '/bestall',
        name: 'BestallSidan',
        component: BestallSidan
    },
    {
        path: '/kassasida',
        name: 'KassaSida',
        component: KassaSida
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
