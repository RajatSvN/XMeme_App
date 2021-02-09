/* 
file to setup connection with the Mongo DB database by using Mongoose ODM
*/

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/XMeme-api', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
})