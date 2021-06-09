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
        mutations = {
            increaseThecounterValue: jest.fn()
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
    it('calls store action "moduleActionClick" when button is clicked', () => {
        const wrapper = shallowMount(EnsikltDricksVatten, { store, localVue, vuetify })
        const button = wrapper.find('v-btn.move-button')
        button.trigger('click')
        expect(mutations.increaseThecounterValue).toHaveBeenCalled()
    })

})
