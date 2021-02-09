const mongoose = require('mongoose')
const validator = require('validator')

// setting up the collection schema (equivalent to SQL DB Schema)
const memeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxLength: 70,
        // validation you want before the data gets stored in the database 
        validate(value){
            if(!/^[a-zA-Z\s]+$/.test(value)){
                throw new Error('Name can only have letters and spaces')
            }
        }
    },
    caption:{
        type: String,
        required: true,
        maxLength: 155,
        trim:true
    },
    url:{
        type: String,
        require: true,
        validate(value){
            if(!validator.isURL(value)){
                throw new Error('Invalid URL')
            }
        }
    }
},
{
    // also store the timestamps as a utility field, this field never appears in the API response 
    timestamps: true
})

// defining a user defined method on Schema to be used in the API
memeSchema.statics.findIfExists = async function (memeObject) {

    return await Meme.exists(memeObject)

}

// this line initialises the Model for the given Schema 
const Meme = mongoose.model('Meme', memeSchema)

module.exports = Meme

/* 

Note that I have defined the schema separately as at times we need to use pre and post hooks and middlewares
provided by mongoose. 

We can only use the above mentioned features when we define schema separately.

*/