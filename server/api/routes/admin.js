const User = require('../../models/user')
const Company = require('../../models/company')
const Test = require('../../models/test')
const Admin = require('../../models/admin')

module.exports = function (router) {
    router.get('/admin/login/:id', async function (req, res) {
        console.log(req.params['id'])
        await Admin.findById({ _id: req.params['id'] }).exec()
            .then(docs => res.status(200)
                .json({
                    message: `admin has been logged in as ${docs.firstName}`
                }))
            .catch(err => res.status(500)
                .json({
                    message: 'Error finding user',
                    error: err
                }))
    })

    router.post('/admin/register', async function (req, res) {
        console.log(req.body.email)
        const adminFind = await Admin.findOne({ email: req.body.email })
        if (adminFind) {
            res.json({
                message: 'Admin with email already exists, Create with other email'
            })
        } else {
            const { firstName, lastName, email, password } = req.body;
            let admin = {}
            admin.firstName = firstName
            admin.lastName = lastName
            admin.email = email
            admin.password = password
            let newAdmin = new Admin(req.body)
            try {

                await newAdmin.save()
                res.status(200).json({ message: 'new admin is inserted', _id: newAdmin._id })
            } catch (e) {
                res.status(500).json('unable to insert the new admin user')
            }
        }
    })
    router.get('/admin/users', async function (req, res) {

        await User.find({}).exec()
            .then(docs =>
                res.status(200).json(docs))
            .catch(err => res.status(500)
                .json({
                    message: 'Error finding user',
                    error: err
                }))
    })

    router.get('/admin/company', async function (req, res) {

        await Company.find({}).exec()
            .then(docs =>
                res.status(200).json(docs))
            .catch(err => res.status(500)
                .json({
                    message: 'Error finding company',
                    error: err
                }))
    })

    router.get('/admin/tests', async function (req, res) {

        await Test.find({}).exec()
            .then(docs =>
                res.status(200).json(docs))
            .catch(err => res.status(500)
                .json({
                    message: 'Error finding test',
                    error: err
                }))
    })
}