const express = require('express')
const router = express.Router()

require('./routes/user')(router)

module.exports = router