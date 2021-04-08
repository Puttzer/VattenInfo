const express = require('express')
const router = express.Router()

require('./routes/user')(router)
require('./routes/company')(router)
require('./routes/test')(router)
require('./routes/admin')(router)
require('./routes/order')(router)

module.exports = router