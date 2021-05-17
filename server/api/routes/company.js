const Company = require('../../models/company')
const bcrypt = require('../../Lib/Bcrypt.password')
const JWT = require('../../Lib/Auth.token')
const AuthMiddleware = require('../../Middleware/Auth.middleware')
const isCompanyLoggedIn = require('../../Middleware/Company.middleware')


module.exports = function (router) {

    router.post('/company/validatetoken', isCompanyLoggedIn.isCompanyLoggedIn, (req, res) => {
        res.status(200)
        res.json({
            message: 'token is valid',
            email: req.email,
        })
    })

    router.post('/company/login', async function (req, res, next) {
        const reqCompany = {
            email: req.body.email,
            password: req.body.password
        }
        console.log(reqCompany)

        // check whether there is a user with email
        const findCompany = await Company.findOne({ email: reqCompany.email }).exec()
        console.log(findCompany)

        if (!findCompany) {
            res.status(404),
                res.json({
                    message: 'Invalid credentials'
                })
            return
        }
        //user exists and check the password is matched
        if (findCompany.email = reqCompany.email) {

            const isMatched = await bcrypt.verifyPassword(reqCompany.password, findCompany.password)
            console.log(isMatched)

            //payload for jwt token
            const payload = {
                _id: findCompany._id,
                email: findCompany.email
            }
            if (isMatched) {
                // generate jwt token
                const token = await JWT.generateToken(payload)
                res.status(200)
                res.json({
                    message: `Company is logged in as ${reqCompany.email}`,
                    email: reqCompany.email,
                    _id: findCompany._id,
                    Token: token,
                    companyUserIsloggedIn: true
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
                message: 'Username does not exist'
            })
            return
        }
    })

    router.post('/company/register', async (req, res) => {
        console.log()
        const findCompany = await Company.findOne({
            email: req.body.email
        }).exec()
        console.log(findCompany)

        if (findCompany) {
            res.status(404),
                res.json({
                    message: 'this email already exists'
                })
            return
        } else {
            const { companyname, contactPerson, contactEmail, password, organizationnumber, phonenumber, altPhone, houseNumber, city, postcode, streetname } = req.body;


            const hashedpassword = await bcrypt.haschPassword(password)
            console.log(hashedpassword)

            let company = {}
            company.companyname = companyname
            company.contactPerson = contactPerson
            company.contactEmail = contactEmail
            company.password = hashedpassword
            company.organizationnumber = organizationnumber
            company.phonenumber = phonenumber,
            company.altPhone = altPhone
            company.city = city
            company.houseNumber = houseNumber
            company.streetname = streetname
            company.postcode = postcode

			




            let newCompany = new Company(company)
            console.log(newCompany)
            try {

                await newCompany.save()
                res.status(200).json({ message: `${newCompany.companyname} is inserted`, _id: newCompany._id })
            } catch (e) {
                res.status(500).json('unable to insert the comapny')
            }
        }
    })

    router.get('/company/login', async (req, res) => {

        await Company.find({ _id: req.body.id }).exec()
            .then(docs =>
                res.status(200).json(docs))
            .catch(err => res.status(500)
                .json({
                    message: 'Error finding user',
                    error: err
                }))
    }),

        router.delete('/company/:id', AuthMiddleware.isAdminLoggedIn, async function (req, res) {
            await Company.findByIdAndDelete(req.params.id).exec()
                .then(docs => {

                    res.status(200)
                        .json({
                            message: "Company user is deleted",
                            company: docs
                        })
                })
                .catch(err => res.status(500)
                    .json({
                        message: 'Error finding user',
                        error: err
                    }))
        })
}