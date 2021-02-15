const mongoose = require('mongoose')
const Schema = mongoose.Schema

let newAdmin = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    createdOn: { type: Date, default: Date.now },
    userRole: { type: String, default: 'Admin_user' }
})

const Admin = mongoose.model('Admin', newAdmin)

module.exports = Admin