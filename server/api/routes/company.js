const Company = require('../../models/company')
const bcrypt = require('../../Lib/Bcrypt.password')
const JWT = require('../../Lib/Auth.token')
const AuthMiddleware = require('../../Middleware/Auth.middleware')


module.exports = function (router) {
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
            const { companyname, fullname, email, password, organizationnumber, phonenumber, alternatenumber } = req.body;


            const hashedpassword = await bcrypt.haschPassword(password)
            console.log(hashedpassword)

            let company = {}
            company.companyname = companyname
            company.fullname = fullname
            company.email = email
            company.password = hashedpassword
            company.organizationnumber = organizationnumber
            company.phonenumber = phonenumber,
                company.alternatenumber = alternatenumber

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