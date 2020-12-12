const mongoose = require('mongoose')
const Schema = mongoose.Schema

let newTest = new Schema({
    testName: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true }
})

const Test = mongoose.model('Test', newTest)

module.exports = Test