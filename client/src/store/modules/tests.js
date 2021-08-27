import Vue from 'vue'
export default {
    state: {
        tests: [],
        test: {},
        count: 0,
        selectedTests: [],
        showSelectedTests: false,
        totalAmount: 0,
        paginatedTests: [],
        numberOfPages: null

    },
    getters: {


    },
    actions: {
        async createNewTest({ commit }, formData) {
            console.log(formData)
            const token = localStorage.getItem('token')
            const response = await fetch('${process.env.VUE_APP_BACKEND_URL}/api/test/create', {
                method: 'POST',
                body: formData,
                headers: {
                    'authorization': token,
                }
            });
            const data = await response.json();
            console.log(data)
            commit('INSERT_TEST', data.newTest, { module: 'tests' })
            // commit('UPDATE_ISLOGGEDIN', false, { module: 'admin' });
        },
        async updateTest({ commit }, { formData, id }) {
            console.log('move to actions');
            console.log(formData)
            console.log(id)
            const token = localStorage.getItem('token')
            const response = await fetch(`${process.env.VUE_APP_BACKEND_URL}/api/test/update/${id}`, {
                method: 'PUT',
                body: formData,
                headers: {
                    'authorization': token,
                }
            });
            const data = await response.json();
            console.log(data)
            commit('EDIT_TEST', data.updatedTest, { module: 'tests' })
            // commit('UPDATE_ISLOGGEDIN', false, { module: 'admin' });
        },
        async getTestInfo({ commit }, id) {

            const response = await fetch(`${process.env.VUE_APP_BACKEND_URL}/api/test/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const data = await response.json();
            console.log(data)
            commit('UPDATE_TEST', data.test, { module: 'tests' })
            // commit('UPDATE_ISLOGGEDIN', false, { module: 'admin' });
        },
        async getTests({ commit }) {
            const token = localStorage.getItem('token')
            const response = await fetch('${process.env.VUE_APP_BACKEND_URL}/api/tests', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': token,
                }
            });
            const data = await response.json();
            // console.log(data)
            commit('updateTest', data.tests, { module: 'tests' })
            // commit('UPDATE_ISLOGGEDIN', false, { module: 'admin' });


        },
        async getPaginatedTests({ commit }, pageNumber) {
            console.log('get paginated tests')
            const token = localStorage.getItem('token')
            const page = pageNumber;
            const limit = 10;
            const response = await fetch(`${process.env.VUE_APP_BACKEND_URL}/api/paginated/tests?page=${page}&limit=${limit}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': token,
                }
            });
            const data = await response.json();
            console.log(data)
            commit('UPDATE_PAGINATED_TESTS', data.tests.results, { module: 'tests' })
            commit('UPDATE_PAGINATED_PAGES', data.tests.pages, { module: 'tests' })
            // commit('UPDATE_ISLOGGEDIN', false, { module: 'admin' });


        },
        async deleteTest({ commit }, _id) {
            const token = localStorage.getItem('token')
            const response = await fetch(`${process.env.VUE_APP_BACKEND_URL}/api/test/${_id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': token,
                }
            });
            const data = await response.json()
            console.log(data)
            commit('DELETE_TEST', data.test._id, { module: 'tests' })
        }


    },
    mutations: {
        updateTest(state, value) {
            state.tests = value.map((test) => test)
            // console.log(state.tests);
        },
        DELETE_TEST(state, value) {
            console.log(state)
            const findTest = state.tests.find(test => test._id === value)
            const remainingTests = state.tests.filter((test) => {
                test._id != value
            })
            state.tests = remainingTests
            Vue.$vToastify.success(`Användaren ${findTest.testname} är bortatagen`)
            // console.log(state.tests)

        },
        INSERT_TEST(state, value) {
            state.tests.push(value)
            Vue.$vToastify.success(`användaren  ${value.testname} är  tillagd i datbasen`)

        },
        EDIT_TEST(state, { updatedTestInfo, _id }) {
            console.log(_id, updatedTestInfo)
            const findTest = state.tests.find(test => test._id === _id)
            console.log(findTest)
            findTest.testname = updatedTestInfo.testname
            findTest.testtype = updatedTestInfo.testtype
            findTest.category = updatedTestInfo.category
            findTest.price = updatedTestInfo.price
            findTest.description = updatedTestInfo.description
            findTest._id = _id
            findTest.image = updatedTestInfo.image

            state.tests.filter(test => test._id === _id).push(findTest)
            Vue.$vToastify.success(` ${findTest.testname} är uppdaterad`)

        },
        UPDATE_TEST(state, value) {
            state.test = { ...value }
        },
        INCREASE_COUNT(state, _id) {
            // console.log(_id)
            let isTheTestExists = state.selectedTests.find(test => test._id === _id)
            // console.log(isTheTestExists)

            if (!isTheTestExists) {
                state.count++;
                // localStorage.setItem('seletedTests',)

                const test = state.tests.find(test => test._id === _id)
                // console.log('test', test)
                state.selectedTests.push(test)
                // const localTests = state.selectedTests.map(test => test)
                // console.log(localTests);
                localStorage.setItem('count', state.count)
                localStorage.setItem('selectedTests', JSON.stringify(state.selectedTests))
                Vue.$vToastify.success(`${test.testname} ärnu placerad i kundvageen`)

            } else {
                return
            }
        },
        SHOW_CART_COMPONENT(state) {
            console.log('show action')
            state.showSelectedTests = true;
        },
        CLOSE_CART_COMPONENT(state) {
            state.showSelectedTests = false;
        },
        TOTAL_AMOUNT(state, total) {
            state.totalAmount = total
            localStorage.setItem('total_amount', state.totalAmount)
        },
        DELETE_TEST_CART(state, id) {
            console.log('move to state')
            const testInfo = state.selectedTests.find((test) => test._id === id)
            const remainingTests = state.selectedTests.filter((test) => test._id !== id)
            state.selectedTests = remainingTests
            state.count--
            localStorage.setItem('selectedTests', JSON.stringify(state.selectedTests))
            localStorage.setItem('count', state.count)
            console.log(state.selectedTests)
            Vue.$vToastify.success(`${testInfo.testname} is removed from the cart`)
        },
        DELETE_SELECTED_TESTS(state) {
            console.log('delete selected tests')
            state.selectedTests = [],
                state.count = 0;
            Vue.$vToastify.success(` Produkten är borttagen från kundvagen `)

        },
        UPDATE_PAGINATED_TESTS(state, value) {
            state.paginatedTests = value
        },
        UPDATE_PAGINATED_PAGES(state, value) {
            state.numberOfPages = value
        },
        INCREASE_QUANTITY(state, id) {
            const findTest = state.selectedTests.find(test => test._id === id)
            // console.log(findTest)
            findTest.quantity++
            state.tests.filter(test => test._id === id).push(findTest)
        },
        DECREASE_QUANTITY(state, id) {
            const findTest = state.selectedTests.find(test => test._id === id)
            // console.log(findTest)
            findTest.quantity--
            console.log(findTest.quantity)
            if (findTest.quantity < 1) {
                state.tests.filter(test => test._id === id)
            }
            state.tests.filter(test => test._id === id).push(findTest)
        },


    },
    namespaced: true

}