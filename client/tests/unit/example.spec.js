import { shallowMount, mount } from '@vue/test-utils'
import KontaktSidan from '@/views/KontaktSidan.vue'
import Vuetify from 'vuetify'



test("KontaktSidan",()=>{
	const wrapper = mount(KontaktSidan)
	console.log(wrapper.html());
})
