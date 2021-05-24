const User = require('../../models/user')
const Company = require('../../models/company')
const Test = require('../../models/test')
const Admin = require('../../models/admin')
const AuthMiddleware = require('../../Middleware/Auth.middleware')
const bcrypt = require('../../Lib/Bcrypt.password')
const JWT = require('../../Lib/Auth.token')

module.exports = function (router) {
    router.post('/admin/login/', async function (req, res, next) {
        const reqUser = {
            userName: req.body.userName,
            password: req.body.password
        }
        console.log(reqUser)

        // check whether there is a user with username
        const findAdmin = await Admin.findOne({ userName: req.userName }).exec()
        console.log(findAdmin)

        if (!findAdmin) {
            res.status(404),
                res.json({
                    message: 'Invalid credentials'
                })
            return
        }
        //user exists and check the password is matched!
        // just atest
        if (findAdmin.userName = reqUser.userName) {

            const isMatched = await bcrypt.verifyPassword(reqUser.password, findAdmin.password)
            console.log(isMatched)

            //generate jwt token
            const payload = {
                _id: findAdmin._id,
                userName: findAdmin.userName
            }

            if (isMatched) {

                const token = await JWT.generateToken(payload)
                res.status(200)
                res.json({
                    message: `User is logged in as ${reqUser.userName}`,
                    Token: token,
                    username: reqUser.userName,
                    isAdmin: true
                })
            } else {
                res.status(404)
                res.json({
                    message: 'Credentials password does not match',
                    isAdmin: false,
                })
                return
            }

        } else {
            res.status(404)
            res.json({
                message: 'Username does'
            })
            return
        }
    })

    router.post('/admin/register', async function (req, res) {


        const adminFind = await Admin.findOne({ email: req.body.email })
        if (adminFind) {
            res.json({
                message: 'Admin with email already exists, Create with other email'
            })
        } else {
            const { firstName, lastName, email, password, username } = req.body;

            const hashPassword = await bcrypt.haschPassword(password)
            console.log(hashPassword)
            let admin = {}
            admin.firstName = firstName
            admin.lastName = lastName
            admin.email = email
            admin.password = hashPassword
            admin.username = username
            let newAdmin = new Admin(admin)

            console.log(newAdmin)
            try {

                await newAdmin.save()
                res.status(200).json({ message: 'new admin is inserted', _id: newAdmin._id })
            } catch (e) {
                res.status(500).json('unable to insert the new admin user')
            }
        }
    })

    router.get('/admin/users', AuthMiddleware.isAdminLoggedIn, async function (req, res) {

        await User.find({}).exec()
            .then(async (docs) => {
                let listOfUsers = []
                await docs.map((user) => {
                    let newUser = {}

                    newUser.name = user.name,
                        newUser.email = user.email,
                        newUser._id = user._id
                    newUser.phonenumber = user.phonenumber
                    newUser.isActive = user.isActive
                    newUser.userRole = user.userRole

                    return listOfUsers.push(newUser)
                })
                console.log(listOfUsers)
                res.status(200).json({
                    message: 'List of all private users',
                    users: listOfUsers
                })
            })
            .catch(err => res.status(500)
                .json({
                    message: 'Error finding user',
                    error: err
                }))
    })

    router.get('/admin/companys', AuthMiddleware.isAdminLoggedIn, async function (req, res) {

        await Company.find({}).exec()
            .then(docs =>
                res.status(200).json({
                    message: 'List of all foretag users',
                    companys: docs
                }))
            .catch(err => res.status(500)
                .json({
                    message: 'Error finding company',
                    error: err
                }))
    })

    router.get('/admin/tests', AuthMiddleware.isAdminLoggedIn, async function (req, res) {

        await Test.find({}).exec()
            .then(docs =>
                res.status(200).json(docs))
            .catch(err => res.status(500)
                .json({
                    message: 'Error finding test',
                    error: err
                }))
    })

    router.post('/admin/validatetoken', AuthMiddleware.isAdminLoggedIn, (req, res) => {
        res.status(200)
        res.json({
            message: 'token is valid',
            username: req.username,
            isAdmin: true,
            isLoggedIn: true,
        })
    })

	router.post('/admin/testanswer', AuthMiddleware.isAdminLoggedIn,(res,req)=>{
		
	})
}