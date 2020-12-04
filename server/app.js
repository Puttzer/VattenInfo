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
// async function databaseConnection() {

//     const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@test-cluster.15htl.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`

//     const uri1 = `mongodb+srv://vatteninfo_krishna:${process.env.MONGODB_PASSWORD}@test-cluster.15htl.mongodb.net/vatteninfo?retryWrites=true&w=majority`

//     const { MongoClient } = require('mongodb')

//     const client = new MongoClient(uri1, { useUnifiedTopology: true, useNewUrlParser: true })
//     try {

//         await client.connect();
//         await listDatabases(client)
//     } catch (e) {
//         console.log(e);
//     } finally {
//         await client.close()
//     }
// }

// async function listDatabases(client) {
//     databasesList = await client.db().admin().listDatabases();

//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };

// databaseConnection().catch(console.error);

app.listen(app.get('port'), function () {
    console.log('API Server Listening on port ' + app.get('port') + '!')
})

// const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost:27017/vatteninfo', { useNewUrlParser: true, useUnifiedTopology: true })
// const db = mongoose.connection

// //error information
// db.on('error', console.error.bind(console, 'connection error:'))

// //connection is open
// db.once('open', function () {
//     console.log('Connected to MongoDB')

//     app.listen(app.get('port'), function () {
//         console.log('API Server Listening on port ' + app.get('port') + '!')
//     })
// })