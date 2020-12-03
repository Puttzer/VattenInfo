//intializing the express
const express = require('express')
const app = express()

// morgan for devtools
const morgan = require('morgan')
const bodyParser = require('body-parser')
// allowing cross origin allow access
const cors = require('cors')

// assigning the port to 3000
app.set('port', (process.env.PORT || 3000))
//making the api folder for routing
const api = require('./api')

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

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/vatteninfo', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

//error information
db.on('error', console.error.bind(console, 'connection error:'))

//connection is open
db.once('open', function () {
    console.log('Connected to MongoDB')

    app.listen(app.get('port'), function () {
        console.log('API Server Listening on port ' + app.get('port') + '!')
    })
})