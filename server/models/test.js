const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Slug = require('../Lib/Generate.Slug')

let newTest = new Schema({
    testname: { type: String, required: true },
    shortname: { type: String, required: true, unique: true },
    slug: { type: String, unique: true },
    category: { type: String, required: true },
    testtype: { type: String, required: true },
    description: { type: String, required: true },
    short_description: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
    quantity: { type: Number, default: 1 },
    productId: { type: String },
    priceId: { type: String }
})

newTest.pre('save', function (next) {
    this.slug = Slug.slugTitle(this.shortname);
    next();
});

const Test = mongoose.model('Test', newTest)

module.exports = Test