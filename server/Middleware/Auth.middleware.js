const Admin = require('../models/admin')
const { verifyToken } = require('../Lib/Auth.token')

const isAdminLoggedIn = async (req, res, next) => {

    let token = req.headers.authorization
    console.log(token)
    if (!token) {
        res.status(400)
        next(new Error('Bad request'))
    }
    verifyToken(token)
        .then(async ({ userName }) => {
            const dbAdmin = await Admin.findOne({ username: userName }).exec()
            console.log(dbAdmin)
            if (!dbAdmin) {
                res.status(403)
                next(new Error('Bad request'))
                return
            }
            if (dbAdmin.userRole = process.env.ADMIN_ROLE) {
                req.username = dbAdmin.username
                next()
            } else {
                res.status(403)
                next(new Error('Bad request'))
                return
            }

        })
        .catch((err) => next(new Error(err)))

}

module.exports = {
    isAdminLoggedIn
}