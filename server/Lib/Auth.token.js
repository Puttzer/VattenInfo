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

    return await jwt.verify(token, process.env.JWT_SECRET_KEY, jwtSettings)
}

module.exports = {
    generateToken,
    verifyToken

}