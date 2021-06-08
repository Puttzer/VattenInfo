import Vue from 'vue'
import Vuetify from 'vuetify'

// Components
import EnsikltDricksVatten from '../../src/views/EnsikltDricksVatten'

// Utilities
import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import tests from '../../src/store/modules/tests'

const localVue = createLocalVue()
localVue.use(Vuex)


describe('EnsikltDricksVatten.vue', () => {
    let vuetify
    let actions, state, store, mutations

    beforeEach(() => {
        vuetify = new Vuetify()
        state = {
            tests: [],

        }

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


    it('should have a custom title and match snapshot', () => {
        const wrapper = shallowMount(EnsikltDricksVatten, {
            localVue,
            vuetify,
            store
        })

        // With jest we can create snapshot files of the HTML output
        // expect(wrapper.html()).toMatchSnapshot()

        // We could also verify this differently
        // by checking the text content
        const title = wrapper.find('h2.ensiklt-heading')
        const resultTitle = 'Analyser i lokalt laboratorium';

        expect(title.text()).toBe(resultTitle)
    })

    it('should have a title with h3 element', () => {
        const wrapper = shallowMount(EnsikltDricksVatten, {
            localVue,
            vuetify,
            store
        })

        // With jest we can create snapshot files of the HTML output
        // expect(wrapper.html()).toMatchSnapshot()

        // We could also verify this differently
        // by checking the text content
        const title = wrapper.find('h3.h3-heading')
        const resultTitle = 'Analyser styckvis, prisklass 2 250 kr/st';

        expect(title.text()).toBe(resultTitle)
    })
    // it('should emit an event when the action v-btn is clicked', () => {
    //     const wrapper = mount(CustomCard, {
    //         localVue,
    //         vuetify,
    //         propsData: { title: 'Foobar' },
    //     })

    //     const event = jest.fn()
    //     const button = wrapper.find('.v-btn')

    //     // Here we bind a listener to the wrapper
    //     // instance to catch our custom event
    //     // https://vuejs.org/v2/api/#Instance-Methods-Events
    //     wrapper.vm.$on('action-btn:clicked', event)

    //     expect(event).toHaveBeenCalledTimes(0)

    //     // Simulate a click on the button
    //     button.trigger('click')

    //     // Ensure that our mock event was called
    //     expect(event).toHaveBeenCalledTimes(1)
    // })

})
