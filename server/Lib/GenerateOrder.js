const Order = require('../models/order.js')


async function generateOrderNr(listOfProducts) {
    let intialValue = 0;
    var dateObj = new Date();
    var month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
    var date = ('0' + dateObj.getDate()).slice(-2);
    var year = dateObj.getFullYear();
    var dateValue = `${year}${month}${date}`
    // console.log(dateValue)

    const getLatestOrder = await Order.findOne().sort({ _id: -1 }).limit(1).find(function (err, order) {
        console.log(order);
    });
    console.log(getLatestOrder.length)
    if (getLatestOrder.length < 1) {
        return `V${dateValue}_${intialValue}`
    } else {
        console.log(getLatestOrder)

        const getDateString = `V${year}${month}${date}`
        const getOrderNr = getLatestOrder[0].orderNumber.pop().orderNr
        console.log(getOrderNr)
        const spliceOrderNr = getOrderNr.slice(0, 9)
        const remainigOrderNr = getOrderNr.split('_')[1]
        console.log(getOrderNr, getDateString, spliceOrderNr, remainigOrderNr)

        if (spliceOrderNr === getDateString) {
            const newOrderNr = `${spliceOrderNr}_${(parseInt(remainigOrderNr))}`;
            return newOrderNr
        } else {

            return `V${dateValue}_${intialValue}`;
        }
    }
}

function generateETA() {
    let eta = 10;
    return eta + Math.floor(Math.random() * 20);
}

module.exports = { generateOrderNr, generateETA };