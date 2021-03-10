const mongoose = require('mongoose')
const Schema = mongoose.Schema

let newUser = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phonenumber: { type: Number, required: true },
    isActive: { type: Boolean, default: true },
    streetname: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    postcode: {
        type: Number,
        required: true
    }
    ,
    userRole: { type: String, default: 'Private person' }
}, { timestamps: true })

const User = mongoose.model('User', newUser)

module.exports = User