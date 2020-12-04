const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const uri1 = `mongodb+srv://vatteninfo_krishna:${process.env.MONGODB_PASSWORD}@test-cluster.15htl.mongodb.net/vatteninfo?retryWrites=true&w=majority`

const connectDB = async () => {
    await mongoose.connect(uri1, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log('db connected .....')
}

module.exports = connectDB;