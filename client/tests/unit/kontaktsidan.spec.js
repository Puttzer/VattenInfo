import Vue from 'vue'
import Vuetify from 'vuetify'

// Components
import KontaktSidan from '../../src/views/KontaktSidan'

// Utilities
import { createLocalVue, shallowMount, } from '@vue/test-utils'
import Vuex from 'vuex'
// import tests from '../../src/store/modules/tests'

const localVue = createLocalVue()
localVue.use(Vuex)


describe('KontaktSidan.vue', () => {
	let vuetify
	let actions, state, store, mutations, methods
	// const postMessage = jest.fn()
	beforeEach(() => {
		vuetify = new Vuetify()
		state = {
			// tests: [],

		}
		mutations = {
			// increaseThecounterValue: jest.fn()
		},
			

		// methods={
		// 	postMessage = jest.fn()
		// }

		store = new Vuex.Store({
			modules: {
				tests: {
					state,
					actions,
					mutations,
					namespaced: true
				}
			}
		})

	})
	test('is it a contact', async () => {
		const wrapper = shallowMount(KontaktSidan)
		const resText = 'Kontakta oss'
		const h1Text = wrapper.find('h1')
		expect(h1Text.text()).toBe(resText)
	})

	test('is it a contact', async () => {
		const wrapper = shallowMount(KontaktSidan)
		const resText = 'Skriv gärna ett mail till oss om du har några frågor eller problem'
		const pText = wrapper.find('p')
		expect(pText.text()).toBe(resText)
	})

	// it('calls store action "moduleActionClick" when button is clicked', () => {
	// 	const wrapper = shallowMount(KontaktSidan, { localVue, vuetify })
	// 	expect(postMessage).toHaveBeenCalled(0)

	// 	const button = wrapper.find('v-btn')

	// 	button.trigger('click')
	// 	expect(postMessage).toHaveBeenCalled(1)
	// })

	it('calls store action "bajs" when button is clicked', () => {
		const wrapper = shallowMount(KontaktSidan, {  localVue, vuetify })
		const button = wrapper.find('v-btn')
		button.trigger('click')
		// expect(methods.postMessage).toHaveBeenCalled()
	})


})
