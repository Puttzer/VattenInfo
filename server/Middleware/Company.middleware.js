const Company = require('../models/company')
const { verifyToken } = require('../Lib/Auth.token')

const isCompanyLoggedIn = async (req, res, next) => {

    let token = req.headers.authorization
    console.log(token)
    if (!token) {
        res.status(400)
        next(new Error('Bad request'))
    }
    verifyToken(token)
        .then(async ({ _id }) => {
            const dbUser = await Company.findOne({ _id: _id }).exec()
            // console.log(dbUser)
            if (!dbUser) {
                res.status(403)
                next(new Error('Bad request'))
                return
            }
            req.email = dbUser.contactEmail
            req.id = dbUser._id
            next()
        }
        )
        .catch((err) => next(new Error(err)))

}

module.exports = {
    isCompanyLoggedIn
}