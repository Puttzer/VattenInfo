const bcrypt = require('bcryptjs')
const dotenv = require('dotenv')
dotenv.config()

const haschPassword = async (password) => {

    const hashedpassword = await bcrypt.hash(password, 10)
    return hashedpassword
}

const verifyPassword = async (password, hashedpassword) => {

    const isPasswordMatch = await bcrypt.compare(password, hashedpassword)
    return isPasswordMatch
}

module.exports = {
    haschPassword,
    verifyPassword
}