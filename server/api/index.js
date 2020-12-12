const express = require('express')
const router = express.Router()

require('./routes/user')(router)
require('./routes/company')(router)
require('./routes/test')(router)

module.exports = router