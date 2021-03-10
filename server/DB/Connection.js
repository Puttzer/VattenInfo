const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const url = `mongodb+srv://vatteninfo_krishna:${process.env.MONGODB_PASSWORD}@test-cluster.15htl.mongodb.net/vatteninfo?retryWrites=true&w=majority`

const connectDB = async () => {
    await mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
    console.log('db connected .....')
}

module.exports = connectDB;