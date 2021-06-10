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
            count: 0,
            tests: [{
                "quantity": 1,
                "_id": "60a3eb54a5a44363b4ad3737",
                "testname": "ALUMINIUM",
                "testtype": "Styck Prov",
                "short_description": "AL",
                "description": "Aluminium kan i grundvatten indikera aluminiumutlösning från marken på grund av surt vatten (pH <5,5). Kan medföra slambildning i ledningar och installationer.\nHalter över 0,50 mg/l bedöms som tjänligt med teknisk anmärkning.",
                "category": "Ackrediterade analyser",
                "price": "350",
                "shortname": "aluminium ackrediterade analyser",
                "slug": "Aluminium_Ackrediterade_Analyser",
                "image": "uploads\\water5.jpg",
                "__v": 0
            },]
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
        const wrapper = shallowMount(EnsikltDricksVatten, { store, localVue, vuetify, mutations, state })
        const increaseThecounterValue = jest.fn()
        const button = wrapper.find('.v-btn')
        expect(increaseThecounterValue.value).toHaveBeenCalled(0)
        button.trigger('click')
        expect(increaseThecounterValue.value).toHaveBeenCalled(1)
    })

    // it('check how many v-btn are available', () => {
    //     const wrapper = shallowMount(EnsikltDricksVatten, { store, localVue, vuetify, mutations, state })
    //    const increaseThecounterValue = jest.fn()
    //     const button = wrapper.find('v-btn')
    //     console.log(button)
    //     expect(button.name()).toBe('v-btn')
    // })

})
