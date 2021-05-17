const { model, Schema, Mongoose } = require('mongoose')

let newOrder = new Schema({
    tests: [],
    userRole: {
        type: String,
        required: true
    },
    orderNumber: {
        type: String,
        required: true
    },
    userId: Schema.Types.ObjectId,
    totalAmount: {
        type: String,
        required: true
    },
    orderStatus: {
        type: String,
        default: 'Pending'
    }

}, { timestamps: true })

const Order = model('Order', newOrder)

module.exports = Order