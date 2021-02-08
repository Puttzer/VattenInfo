import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Login from '../views/Login.vue'

import PrivatePerson from '../views/PrivatePerson.vue'
import CompanyPage from '../views/CompanyPage.vue'
// import PriceDetails from '../views/PriceDetails.vue
import ContactUs from '../views/ContactUs.vue'
import RegisterAccount from '../views/RegisterAccount.vue'
import HomeEnglish from '../views/englishversion/HomeEnglish.vue'
import PaymentInfo from '../components/CardDetails/PaymentInfo.vue'
import Test from '../views/Test.vue'
import TestExpansion from '../components/testpages/TestExpansion.vue'
import AddNyheter from '../views/addNyheter.vue'
import LostLogin from '../views/LostLogin.vue'


Vue.use(VueRouter)

const routes = [

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
        path: '/test',
        name: 'Test',
        component: Test
    },

    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/en',
        name: 'HomeEnglish',
        component: HomeEnglish
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/login/user',
        name: 'PrivateAccount',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/PrivateAccount.vue')
    },
    {
        path: '/private',
        name: 'PrivatePerson',
        component: PrivatePerson
    },
    {
        path: '/company',
        name: 'CompanyPage',
        component: CompanyPage
    },
    {
        path: '/priser',
        name: 'TestExpansion',
        component: TestExpansion
    },
    {
        path: '/contact',
        name: 'ContactUs',
        component: ContactUs
    },
    {
        path: '/register',
        name: 'RegisterAccount',
        component: RegisterAccount
    },
    {
        path: '/payment',
        name: 'PaymentInfo',
        component: PaymentInfo
    },
    {
        path: '/addnews',
        name: 'addNews',
        component: AddNyheter
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
