/* 
file to setup connection with the Mongo DB database by using Mongoose ODM
*/

const mongoose = require('mongoose')

const dockerURL = 'mongodb://mongo:27017/XMeme-api'

mongoose.connect('mongodb://localhost:27017/XMeme-api' || dockerURL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
})