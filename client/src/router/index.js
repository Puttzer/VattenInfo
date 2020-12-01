import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PrivatePerson from '../views/PrivatePerson.vue'
import CompanyPage from '../views/CompanyPage.vue'
import PriceDetails from '../views/PriceDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    name: 'PriceDetails',
    component: PriceDetails
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
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
