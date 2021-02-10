/* 
This router is used to render the UI i.e the frontend of the application
*/
const express = require('express')
const router = express.Router()
const Memes = require('../models/memes')
const { ec2PublicIP } = require('../utils/ec2IP.js').ec2PublicIP
console.log( ec2PublicIP )

router.get('/', async (req, res) => {

    try{

    // logic to get latest memes from backend and pass it as context to frontend
    const memes = await Memes.find({}).sort([[ '_id' , -1 ]]).limit(100)

    const memeList = []

    memes.forEach(meme => {
        
        // generate an extra field date time to be displayed in frontend
        const dateTime = new Date(meme.updatedAt).toLocaleString()
        
        const {_id:id, name, caption, url} = meme

        memeList.push({id, name, caption, url, dateTime})

    })

    res.render('index',{
        title : "XMeme",
        memeList,
        ec2PublicIP
    })

    } catch (e){

        res.status(500).send()

    }


})

module.exports = router