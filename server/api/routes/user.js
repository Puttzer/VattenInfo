const User = require('../../models/user')
const bcrypt = require('../../Lib/Bcrypt.password')
const JWT = require('../../Lib/Auth.token')

module.exports = function (router) {
    router.post('/user/login', async function (req, res, next) {
        const reqUser = {
            email: req.body.email,
            password: req.body.password
        }
        console.log(reqUser)

        // check whether there is a user with email
        const findUser = await User.findOne({ email: reqUser.email }).exec()
        console.log(findUser)

        if (!findUser) {
            res.status(404),
                res.json({
                    message: 'Invalid credentials'
                })
            return
        }
        //user exists and check the password is matched
        if (findUser.email = reqUser.email) {

            const isMatched = await bcrypt.verifyPassword(reqUser.password, findUser.password)
            console.log(isMatched)

            //payload for jwt token
            const payload = {
                _id: findUser._id,
                email: findUser.email
            }
            if (isMatched) {
                // generate jwt token
                const token = await JWT.generateToken(payload)
                res.status(200)
                res.json({
                    message: `User is logged in as ${reqUser.email}`,
                    Token: token,
                })
            } else {
                res.status(404)
                res.json({
                    message: 'Credentials password does not match'
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


    router.get('/user/:id', async function (req, res) {
        console.log(req.params['id'])
        await User.findById({ _id: req.params['id'] }).exec()
            .then(docs => res.status(200)
                .json(docs))
            .catch(err => res.status(500)
                .json({
                    message: 'Error finding user',
                    error: err
                }))
    })

    router.get('/', function (req, res) {
        res.status(200).json({
            user: 'krishna',
            email: 'paruchurikris@gmail.com'
        })
    })
    router.post('/user/create', async function (req, res) {

        const findUser = await User.findOne({ email: req.body.email }).exec()
        console.log(findUser)

        if (findUser) {
            res.status(404),
                res.json({
                    message: 'User with this email already exists'
                })
            return
        } else {
            const { firstname, lastname, email, password, streetname, postcode, city, phonenumber } = req.body;

            const hashedpassword = await bcrypt.haschPassword(password)
            console.log(hashedpassword)

            let user = {}

            user.firstname = firstname
            user.lastname = lastname
            user.email = email
            user.password = hashedpassword
            user.streetname = streetname
            user.city = city
            user.postcode = parseInt(postcode)
            user.phonenumber = parseInt(phonenumber)

            let newUser = new User(user)
            console.log(newUser)
            try {
                await newUser.save()
                res.status(200).json({ message: 'user is inserted', _id: newUser._id })
            } catch (e) {
                res.status(500).json('unable to insert the newuser')
            }
        }
    })
    router.get('/user_admin', async function (req, res) {

        await User.find({}).exec()
            .then(docs =>
                res.status(200).json(docs))
            .catch(err => res.status(500)
                .json({
                    message: 'Error finding user',
                    error: err
                }))
    })


    router.get('/user', async function (req, res) {

        await User.findOne({ _id: req.body.id }).exec()
            .then(docs =>
                res.status(200).json(docs))
            .catch(err => res.status(500)
                .json({
                    message: 'Error finding user',
                    error: err
                }))
    })
    router.get('/user/email/:email', async function (req, res) {
        await User.findOne({ email: req.params.email }).exec()
            .then(docs => res.status(200)
                .json(docs))
            .catch(err => res.status(500)
                .json({
                    message: 'Error finding user',
                    error: err
                }))
    })



    // router.get('/user/lastname', function (req, res) {
    //     console.log(req.body)

    //     User.findOne({ lastName: req.body.lastName }).exec()
    //         .then(docs =>
    //             res.status(200).json(docs))
    //         .catch(err => res.status(500)
    //             .json({
    //                 message: 'Error finding user',
    //                 error: err
    //             }))
    // })
}