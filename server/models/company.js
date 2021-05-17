const mongoose = require('mongoose')
const Schema = mongoose.Schema

let newCompany = new Schema({
	companyname: { type: String, required: true },
	contactPerson: { type: String, required: true },
	contactEmail: { type: String, required: true },
	password: { type: String, required: true },
	phonenumber: { type: String, required: true },
	altPhone: { type: String, required: true},
	streetname: { type: String, required: true },
	city: { type: String, required: true },
	postcode: { type: Number, required: true },
	houseNumber: { type: Number, required: true },
	isActive: { type: Boolean, default: true },
	userRole: { type: String, default: 'Company' },
	organizationnumber: { type: Number, required: true }

}, { timestamps: true })

const Company = mongoose.model('Company', newCompany)

module.exports = Company