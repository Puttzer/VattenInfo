const express = require('express')
const router = express.Router()

require('./routes/user')(router)
require('./routes/company')(router)
require('./routes/test')(router)
require('./routes/admin')(router)

module.exports = router