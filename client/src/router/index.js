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


//company and user routes
import ForetagCustomer from '../components/adminStuff/ForetagCustomer.vue'
import ForetagOrders from '../components/adminStuff/ForetagOrders.vue'
import CompanyLoginHomePage from '../components/company/CompanyLoginHomePage.vue'
import CompanyOrdersPage from '../components/company/CompanyOrdersPage.vue'

//bestallning
import KassaSida from '../views/KassaSida.vue'
import PaymentError from '../views/PaymentError.vue'
import PaymentSucess from '../views/PaymentSucess.vue'

// om lab och labbTjanster
import LabbTjanster from '../views/LabbTjanster.vue'
import VattenGuide from '../views/VattenGuide.vue'

// snabb guide analyser
import answer1 from '../components/guiden/answer1'
import answer1a from '../components/guiden/answer1a'
import answer1b from '../components/guiden/answer1b'

import answer2 from '../components/guiden/answer2'
import answer3 from '../components/guiden/answer3'
import answer4 from '../components/guiden/answer4'

import EtikettHowTo from '../views/EtikettHowTo.vue'


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
		path: '/Vara_analyser',
		name: 'AnalysKatalog',
		component: AnalysKatalog
	},
	{
		path: '/EtikettHowTo',
		name: 'EtikettHowTo',
		component: EtikettHowTo
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
		path: '/login/companyinfopage',
		name: 'CompanyLoginHomePage',
		component: CompanyLoginHomePage
	},
	{
		path: '/login/companyorderspage',
		name: 'CompanyOrdersPage',
		component: CompanyOrdersPage
	},
	
	{
		path: '/test/:slug',
		name: 'TestStartsidan',
		component: TestStartsidan
	},
	{
		path: '/adminpage',
		// You could also have named views at the top
		component: AdminStartsidan,
		beforeEnter: (to, from, next) => {
			// console.log(store.state.admin.isLoggedIn)
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


	{
		path: '/tjanster',
		name: 'LabbTjanster',
		component: LabbTjanster
	},
	{ path: '/paymentSucess', name: 'PaymentSucess', component: PaymentSucess },
	{ path: '/paymentCancel', name: 'PaymentError', component: PaymentError },
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
		path: '/enskiltdricksvatten/',
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
		path: '/answer1a',
		name: 'answer1a',
		component: answer1a,
	},
	{
		path: '/answer1b',
		name: 'answer1b',
		component: answer1b,
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
	// console.log('global route')
	// console.log(to, from)
	next()

})

export default router
