const jwt = require('jsonwebtoken')
const jwtSettings = {
    expiresIn: '5 days'
}

const generateToken = async (payload) => {

    const token = await jwt.sign(payload, process.env.JWT_SECRET_KEY, jwtSettings)
    console.log(token)
    return token
}

const verifyToken = async (token) => {

    return new Promise((resolve, reject) => {

        jwt.verify(token, process.env.JWT_SECRET_KEY, jwtSettings, function (err, decoded) {
            if (err) {
                reject(err)
                return
            }

            resolve(decoded)
            console.log(decoded)
        })


    })
}

module.exports = {
    generateToken,
    verifyToken

}