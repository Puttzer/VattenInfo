const Order = require('../models/order.js')


async function generateOrderNr() {
    let intialValue = 0;
    var dateObj = new Date();
    var month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
    var date = ('0' + dateObj.getDate()).slice(-2);
    var year = dateObj.getFullYear();
    var dateValue = `${year}${month}${date}`
    console.log(dateValue)

    const getOrder = await Order.findOne().sort({ _id: -1 }).limit(1).find(function (err, order) {
        console.log(order);
    });

    console.log(getOrder)
    return `V${dateValue}${intialValue + 1
        }`;
}

function generateETA() {
    let eta = 10;
    return eta + Math.floor(Math.random() * 20);
}

module.exports = { generateOrderNr, generateETA };