const Company = require('../../models/company')

module.exports = function (router) {
    router.post('/register_company', async (req, res) => {
        // const { firstName, lastName, email, userRole, password, organizationNummer } = req.body;
        // let company = {}
        // company.firstName = firstName
        // company.lastName = lastName
        // company.email = email
        // company.password = password
        // company.userRole = userRole
        // company.organizationNummer = organizationNummer
        let newCompany = new Company(req.body)
        console.log(newCompany)
        try {

            await newCompany.save()
            res.status(200).json({ message: 'user is inserted', _id: newCompany._id })
        } catch (e) {
            res.status(500).json('unable to insert the newuser')
        }
    })

    router.get('/company/admin', async (req, res) => {

        Company.find({}).exec()
            .then(docs =>
                res.status(200).json(docs))
            .catch(err => res.status(500)
                .json({
                    message: 'Error finding user',
                    error: err
                }))
    })
}