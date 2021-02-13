/* 
file to setup connection with the Mongo DB database by using Mongoose ODM
*/

const mongoose = require('mongoose')

const mongoURL = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost:27017/XMeme-api'

console.log(mongoURL)

mongoose.connect(mongoURL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
})
