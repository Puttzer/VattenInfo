const User = require('../models/user')
const { verifyToken } = require('../Lib/Auth.token')

const isUserLoggedIn = async (req, res, next) => {

    let token = req.headers.authorization
    console.log(token)
    if (!token) {
        res.status(400)
        next(new Error('Bad request'))
    }
    verifyToken(token)
        .then(async ({ _id, email }) => {
            const dbUser = await User.findOne({ _id: _id }).exec()
            console.log(dbUser)
            if (!dbUser) {
                res.status(403)
                next(new Error('Bad request'))
                return
            }
            req.email = dbUser.email
            req.id = dbUser._id
            next()
        }
        )
        .catch((err) => next(new Error(err)))

}

module.exports = {
    isUserLoggedIn
}