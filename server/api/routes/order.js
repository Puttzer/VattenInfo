const Order = require('../../models/order.js')
const { generateOrderNr } = require('../../Lib/GenerateOrder.js')
const User = require('../../models/user')
const Company = require('../../models/company')
const Test = require('../../models/test')
const AuthMiddleware = require('../../Middleware/Auth.middleware')
const UserIsLoggedin = require('../../Middleware/User.middleware')
const CompanyIsLoggedin = require('../../Middleware/Company.middleware')

module.exports = function (router) {
    router.post('/order/private/generate', UserIsLoggedin.isUserLoggedIn, async (req, res) => {
        // console.log(req.body)
        const { orderAmount, id } = req.body
        const newTests = req.body.orderTests.map(test => test)
        // console.log(newTests.length)
        // console.log(newTests)
        let userRole = ''

        const FindUser = await User.findById({ _id: id })
        // console.log(FindUser)

        userRole = FindUser.userRole
        let ordersList = []
        await newTests.tests.forEach(async (test) => {
            console.log(test)
            const orderNumber = await generateOrderNr(test)
            return ordersList.push(orderNumber)
        })

        let order = {}
        order.userRole = userRole
        order.orderNumber = ordersList
        order.tests = newTests
        order.totalAmount = orderAmount
        order.userId = id

        // console.log(order)

        let newOrder = new Order(order)
        // console.log(newOrder)
        try {
            await newOrder.save()
            res.status(200).json({
                message: 'order is inserted', _id: newOrder._id,
                orderNumber: orderNumber,
                tests: newTests
            })
        } catch (e) {
            res.status(500).json('unable to process the order')
        }
    })

    router.post('/order/company/generate', CompanyIsLoggedin.isCompanyLoggedIn, async (req, res) => {
        //check whether the company is logged in with exact credentials
        // getting the data from the request object
        const { totalAmount, id } = req.body
        const newTests = req.body.orderTests.map(test => test)
        let userRole = ''
        // getting the exact user information
        const FindUser = await Company.findById({ _id: id })
        userRole = FindUser.userRole
        //generating the orderNumber for each item
        let ordersList = []

        //calling the ordergenerate function
        let getOrderNr = await generateOrderNr(newTests)
        console.log(getOrderNr)

        //looping over the products to get order for each test product
        await newTests.forEach(async (test) => {
            const spliceOrderNr = getOrderNr.slice(0, 9)
            const remainigOrderNr = getOrderNr.split('_')[1]
            console.log(getOrderNr, spliceOrderNr, remainigOrderNr)
            console.log(test)

            let newOrderNr = `${spliceOrderNr}_${(parseInt(remainigOrderNr) + 1)}`;
            console.log(newOrderNr)
            getOrderNr = newOrderNr
            let orderDetails = {}
            orderDetails.orderNr = newOrderNr
            orderDetails.orderStatus = 'pending'
            orderDetails.orderProduct = { ...test }

            return ordersList.push(orderDetails)
        })

        // assigning  a new object and saving the details in the database

        let order = {}
        order.userRole = userRole
        order.orderNumber = ordersList
        // order.tests = newTests
        order.totalAmount = totalAmount
        // order.totalAmount = test.price
        order.userId = `${id}`

        // console.log(order)

        let newOrder = new Order(order)
        console.log(newOrder)

        // inserting the order in the database
        try {
            await newOrder.save()
            res.status(200).json({
                message: 'order is inserted',
                _id: newOrder._id,
                orderNumber: order.orderNumber
            })
        } catch (e) {
            res.status(500).json('unable to process the order')
        }
    }),

        router.get('/orders', AuthMiddleware.isAdminLoggedIn, async (req, res) => {
            await Order.find({}).exec()
                .then(docs =>
                    res.status(200).json({
                        message: 'list of all orders',
                        orders: docs
                    }))
                .catch(err => res.status(500)
                    .json({
                        message: 'Error finding user',
                        error: err
                    }))
        })

    router.get('/order/private/:userId', UserIsLoggedin.isUserLoggedIn, async (req, res) => {
        if (req.id = req.params.userId) {

            await Order.find({ userId: req.params.userId }).exec()
                .then(docs =>
                    res.status(200).json({
                        message: 'list of all orders',
                        orders: docs
                    }))
                .catch(err => res.status(500)
                    .json({
                        message: 'Error finding user',
                        error: err
                    }))
        } else {
            res.status(400).json({
                message: 'Invalid Credentials'
            })
        }
    })

    router.get('/order/company/:companyId', CompanyIsLoggedin.isCompanyLoggedIn, async (req, res) => {
        if (req.id = req.params.companyId) {

            await Order.find({ userId: req.params.companyId }).sort({ createdAt: -1 }).exec()
                .then(docs =>
                    res.status(200).json({
                        message: 'list of all orders',
                        orders: docs
                    }))
                .catch(err => res.status(500)
                    .json({
                        message: 'Error finding user',
                        error: err
                    }))
        } else {
            res.status(400).json({
                message: 'Unvalid Credentials'
            })
        }
    })


}