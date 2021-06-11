import { createLocalVue, mount, shallowMount, } from '@vue/test-utils'

import Vue from 'vue'
// import Vuetify from 'vuetify'
import vuetify from "vuetify"

import KontaktSidan from '../../src/views/KontaktSidan'





// const localVue = createLocalVue()



describe('KontaktSidan.vue', () => {

	let wrapper;

	beforeEach(() => {
		const localVue = createLocalVue()


		Vue.use(vuetify);
		wrapper = mount(KontaktSidan, { localVue })
	})
	test('is it a contact with h1', async () => {
		// const wrapper = shallowMount(KontaktSidan)
		const resText = 'Kontakta oss'
		const h1Text = wrapper.find('h1')
		expect(h1Text.text()).toBe(resText)
	})
	it('renders a vue instance', () => {
		expect(shallowMount(KontaktSidan).isVueInstance()).toBe(true);
	})

	test('is it a p contact', async () => {
		// const wrapper = shallowMount(KontaktSidan)
		const resText = 'Skriv gärna ett mail till oss om du har några frågor eller problem'
		const pText = wrapper.find('p')
		expect(pText.text()).toBe(resText)
	})

	it('kolla inskriven text', () => {
		var email = wrapper.find('[data-test="mailText"]')
		email.setValue('test text');
		expect(wrapper.vm.email).toBe('test text')
	})

	it('klicka på save knappen o tom  input', () => {
		wrapper.find('button').trigger("click");
		var email = wrapper.find('[data-test="mailText"]')
		expect(email.text()).toMatch('')
		expect(wrapper.vm.email).toBe('')
	})





})
