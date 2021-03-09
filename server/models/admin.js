const mongoose = require('mongoose')
const Schema = mongoose.Schema

let createAdmin = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    userRole: { type: String, default: 'Admin_user' }
}, { timestamps: true })

const Admin = mongoose.model('Admin', createAdmin)

module.exports = Admin