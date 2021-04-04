const mongoose = require('mongoose')
const Schema = mongoose.Schema

let newCompany = new Schema({
    companyname: { type: String, required: true },
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    phonenumber: { type: String, required: true },
    alternatenumber: { type: String, required: false },
    password: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    userRole: { type: String, default: 'Company' },
    organizationnumber: { type: String, required: true }

}, { timestamps: true })

const Company = mongoose.model('Company', newCompany)

module.exports = Company