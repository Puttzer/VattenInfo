const mongoose = require('mongoose')
const Schema = mongoose.Schema

let newCompany = new Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phonenumber: { type: Number, required: true },
    alternateNumber: { type: Number, required: false },
    password: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    createdOn: { type: Date, default: Date.now },
    userRole: { type: String, default: 'Company' },
    organizationNummer: { type: String, required: true }
})

const Company = mongoose.model('Company', newCompany)

module.exports = Company