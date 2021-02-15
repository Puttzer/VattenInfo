const mongoose = require('mongoose')
const Schema = mongoose.Schema

let newTest = new Schema({
    testName: { type: String, required: true },
    testType: { type: String, required: true },
    testKlass: { type: String, required: true },
    short_description: { type: String, required: true },
    long_description: { type: String },
    price: { type: String, required: true }
})

const Test = mongoose.model('Test', newTest)

module.exports = Test