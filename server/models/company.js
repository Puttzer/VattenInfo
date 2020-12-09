const mongoose = require('mongoose')
const Schema = mongoose.Schema

let newCompany = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    createdOn: { type: Date, default: Date.now },
    userRole: { type: String, required: true },
    organizationNummer: { type: String, required: true }
})

const Company = mongoose.model('Company', newCompany)

module.exports = Company