const mongoose = require('mongoose')
const Schema = mongoose.Schema

let newTest = new Schema({
    testname: { type: String, required: true },
    category: { type: String, required: true },
    testtype: { type: String, required: true },
    description: { type: String, required: true },
    short_description: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
    quantity: { type: Number, default: 1 }
})

const Test = mongoose.model('Test', newTest)

module.exports = Test