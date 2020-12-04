const mongoose = require('mongoose')
const Schema = mongoose.Schema

let newUser = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    createdOn: { type: Date, default: Date.now },
    userRole: { type: String, required: true }
})

const User = mongoose.model('User', newUser)

module.exports = User