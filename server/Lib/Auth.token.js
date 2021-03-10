const jwt = require('jsonwebtoken')
const jwtSettings = {
    expiresIn: '5 days'
}

const generateToken = async (payload) => {

    const token = await jwt.sign(payload, process.env.JWT_SECRET_KEY, jwtSettings)
    console.log(token)
    return token
}

module.exports = {
    generateToken
}