import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'


import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import KundStartSidan from '../views/KundStartsidan.vue'
import KundOrderSidan from '../views/KundOrderSidan.vue'
import KundBestallsidan from '../views/KundBestallsidan.vue'
import ForetagStartsida from '../views/ForetagStartsida'
import TestStartsidan from '../views/TestStartsidan.vue'
import AnalysKatalog from '../views/Analyskatalog.vue'
import KontaktSidan from '../views/KontaktSidan.vue'
import RegistreraKund from '../views/RegistreraKund.vue'
import PaymentInfo from '../components/CardDetails/PaymentInfo.vue'
import LostLogin from '../views/LostLogin.vue'
import BestallSidan from '../views/BestallSidan.vue'
import InstruktionOchBlanketter from '../views/InstruktionOchBlanketter.vue'
import OmLab from '../views/OmLab.vue'
import HjalpMedDittVatten from '../views/HjalpMedDittVatten.vue'
import EnsikltDricksVatten from '../views/EnsikltDricksVatten.vue'
import AvloppsAnalyser from '../views/AvloppsAnalyser.vue'
import BygglovTillstand from '../views/BygglovTillstand.vue'
import VerksamhetSamfallighet from '../views/VerksamhetSamfallighet.vue'
import AdminLogin from '../views/AdminLogin.vue'
import AdminStartsidan from '../views/AdminStartsidan.vue'
import Tests from '../components/adminStuff/tests.vue'
import PrivateCustomer from '../components/adminStuff/PrivateCustomer.vue'
import PrivateCustomerOrders from '../components/adminStuff/PrivateCustomerOrders.vue'
// import AllInfo from '../components/adminStuff/AllInfo.vue'
import ScrollHome from "../views/ScrollHome.vue";
import ScrollAnalys from "../views/ScrollAnalys.vue";
import ForetagCustomer from '../components/adminStuff/ForetagCustomer.vue'
import ForetagOrders from '../components/adminStuff/ForetagOrders.vue'
import CompanyLoginHomePage from '../components/company/CompanyLoginHomePage.vue'
import KassaSida from '../views/KassaSida.vue'
import LabbTjanster from '../views/LabbTjanster.vue'
import VattenGuide from '../views/VattenGuide.vue'
import answer1 from '../components/guiden/answer1'
import answer2 from '../components/guiden/answer2'
import answer3 from '../components/guiden/answer3'
import answer4 from '../components/guiden/answer4'



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
        path: '/login/comapny',
        name: 'CompanyLoginHomePage',
        component: CompanyLoginHomePage
    },
    {
        path: '/test/scrolltest',
        name: 'ScrollHome',
        component: ScrollHome
    },
    {
        path: '/test/ScrollAnalys',
        name: 'ScrollAnalys',
        component: ScrollAnalys
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

            },
            {
                path: 'Foretagorders',
                component: ForetagOrders

            },
            {
                path: 'privatecustomerorders',
                component: PrivateCustomerOrders

            },
        ]
    },
    {
        path: '/login/userpage',
        name: 'KundStartSidan',
        component: KundStartSidan
    },
    {
        path: '/ordernumber',
        name: 'KundOrderSidan',
        component: KundOrderSidan
    },
    {
        path: '/foretag',
        name: 'ForetagStartsida',
        component: ForetagStartsida
    },

    // Old "omlab" now "tjanster" as of 2021-05-11 
    // is it still needed? -Patrick
    {
        path: '/tjanster',
        name: 'LabbTjanster',
        component: LabbTjanster
    },
    {
        path: '/bestallanalys',
        name: 'BestallSidan',
        component: BestallSidan
    },
    {
        path: '/kassa',
        name: 'KassaSida',
        component: KassaSida
    },
    {
        path: '/blanketter',
        name: 'InstruktionOchBlanketter',
        component: InstruktionOchBlanketter
    },

    // Current about page as of 2021-05-11
    {
        path: '/omlab',
        name: 'OmLab',
        component: OmLab
    },
    {
        path: '/help',
        name: 'HjalpMedDittVatten',
        component: HjalpMedDittVatten
    },
    {
        path: '/analyskatalog/enskiltdricksvatten/',
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
        path: '/kundstart',
        name: 'KundStartSidan',
        component: KundStartSidan
    },
    {
        path: '/vattenguide',
        name: 'VattenGuide',
        component: VattenGuide,
    },
    {
        path: '/answer1',
        name: 'answer1',
        component: answer1,
    },
    {
        path: '/answer2',
        name: 'answer2',
        component: answer2,
    }, {
        path: '/answer3',
        name: 'answer3',
        component: answer3,
    }, {
        path: '/answer4',
        name: 'answer4',
        component: answer4,
    },
    {
        path: '/*',
        alias: '/'
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(_, _2, savedPosition) {
        // console.log(to, from, savedPosition)
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})

router.beforeEach(function (to, from, next) {
    console.log('global route')
    console.log(to, from)
    next()
})

export default router
