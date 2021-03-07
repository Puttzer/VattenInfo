//intializing the express
const express = require('express')
const app = express()
const dotenv = require('dotenv')

// morgan for devtools
const morgan = require('morgan')
const bodyParser = require('body-parser')
// allowing cross origin allow access
const cors = require('cors')
dotenv.config()

// assigning the port to 3000
app.set('port', (process.env.PORT))
//making the api folder for routing
const api = require('./api')
const connectDB = require('./DB/Connection')

//middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(express.static('static'))
app.use(morgan('dev'))

//routing middleware
app.use('/api', api)

//error response middleware
app.use(function (req, res, next) {
    const err = new Error('Not Found')
    err.status = 404
    res.json(err)
})


//connecting the localhost:Mongodb

connectDB();

app.listen(app.get('port'), function () {
    console.log('API Server Listening on port ' + app.get('port') + '!')
})

