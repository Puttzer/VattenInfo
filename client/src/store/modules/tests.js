export default {
    state: {
        tests: []

    },
    getters: {

    },
    actions: {
        async createNewTest({ commit }, formData) {
            console.log(formData)
            const token = localStorage.getItem('token')
            const response = await fetch('http://localhost:4000/api/test/create', {
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
            const response = await fetch(`http://localhost:4000/api/test/update/${id}`, {
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


        // async createNewTest({ commit }, newTest) {
        //     const token = localStorage.getItem('token')
        //     const response = await fetch('http://localhost:4000/api/test/create', {
        //         method: 'POST',
        //         body: JSON.stringify(newTest),
        //         headers: {
        //             'authorization': token,
        //             'Content-Type': 'application/json',

        //         }
        //     });
        //     const data = await response.json();
        //     console.log(data)
        //     commit('INSERT_TEST', data.newTest, { module: 'tests' })
        //     // commit('UPDATE_ISLOGGEDIN', false, { module: 'admin' });


        // },
        async getTests({ commit }) {
            const token = localStorage.getItem('token')
            const response = await fetch('http://localhost:4000/api/tests', {
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
        async deleteTest({ commit }, _id) {
            const token = localStorage.getItem('token')
            const response = await fetch(`http://localhost:4000/api/test/${_id}`, {
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
            console.log(state.tests);
        },
        DELETE_TEST(state, value) {
            const remainingTests = state.tests.filter((test) => test._id != value)
            state.tests = remainingTests
            console.log(state.tests)
        },
        INSERT_TEST(state, value) {
            return state.tests.push(value)
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

        },

    },
    namespaced: true

}