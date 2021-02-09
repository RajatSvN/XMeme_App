/* 
This file is essentially the Rest API where all the api logic is written
*/

const express = require('express')
const router = express.Router()
const Memes = require('../models/memes')

/* 
Swagger comments to setup Swagger UI, Swagger is a tool to document APIs 

Refer the docs of this API at: <url>/xmeme-api-docs/

Refer the Swagger docs at: https://swagger.io/docs/
*/ 

/**
 * @swagger
 * definitions:
 *  Meme:
 *   type: object
 *   properties:
 *    name:
 *     type: string
 *     description: Name of meme owner containing only letters, character limit of 70
 *     example: 'John Doe'
 *    caption:
 *     type: string
 *     description: A sweet caption for your meme with a character limit of 155
 *     example: 'Something witty!'
 *    url:
 *     type: string
 *     description: A Url to your meme image
 *     example: 'https://i.redd.it/irw82kkn7v821.jpg'
 */

/**
 * @swagger
 *  tags:
 *   name: Memes
 *   description: The XMeme meme stream API
 */

 /** 
 * @swagger
 *  /memes:
 *   post:
 *    summary: Create a new meme
 *    description: Create a meme to be loaded in XMeme application
 *    tags: [Memes]
 *    requestBody:
 *     description: Request Payload 
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        $ref: '#/definitions/Meme'  
 *    responses:
 *     201:
 *      description: Meme created and added in database successfully
 *      content:
 *       application/json:
 *        schema:
 *         type: object
 *         example: { "id" : "601ee048c7b58804a03e7ec1" }
 *        
 *     409:
 *      description: A duplicate meme already exists in the database
 *      content:
 *       application/json:
 *        schema:
 *         type: object
 *         example : { "error" : "Resource already exists" }
 * 
 *     400:
 *      description: Invalid request parameters fails validation
 *      content:
 *       application/json:
 *        schema:
 *         type: object
 *         example: { "error" : "Bad Request" }
 */

// route to add meme to the database
router.post('/memes', async (req, res) => {

    // function to check if given object already exists
    if(await Memes.findIfExists(req.body)){
        return res.status(409).send({ error: 'Resource already exists'})
    }

    // this line creates a meme object to be saved in the database
    const meme = new Memes(req.body)

    try{

        // meme object is saved after execution of this line 
        await meme.save()
        res.status(201).send({ "id" : meme._id } )

    }catch (e){

        res.status(400).send({error : 'Bad Request' })

    }

})

/**
 * @swagger
 * /memes:
 *  get:
 *   summary: Returns the list of the 100 latest memes
 *   tags: [Memes]
 *   responses:
 *    200:
 *     description: list of 100 latest memes, Note that example only has one meme object for simplicity
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#/definitions/Meme'
 *    500:
 *     description: Internal Server Error
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        example: { "error": "Database Error, Unable to fetch memes" }
 */

// route 
router.get('/memes', async (req, res) => {

    try{

        // query to sort on decreasing order by id and limiting total response to 100
        const docs = await Memes.find({}).sort([[ '_id' , -1 ]]).limit(100)

        const response = []

        // taking required fields from meme objects and adding them into array 
        docs.forEach(doc => {
            const {_id:id , name, caption, url} = doc
            response.push({id , name, caption, url})
        })

        res.status(200).send(response)

    }catch (e){

        res.status(500).send({ error: 'Database Error, Unable to fetch memes' })

    }

})

/**
 * @swagger
 * /memes/{id}:
 *  get:
 *   summary: Get meme by id
 *   tags: [Memes]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: string
 *      required: true 
 *      description: The Meme id
 *   responses:
 *    200:
 *     description: The Meme Object by id
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        example: { "id": "601ee048c7b58804a03e7ec1", "name": "Rajat Sharma", "caption": "True That", "url": "https://i.redd.it/irw82kkn7v821.jpg"}
 *    404: 
 *     description: Meme with given id not found
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        example: { "error": "Meme with the given id does not exist" }
 *    500:
 *     description: Internal Server Error
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        example: { "error": "Database Error" }
 */ 

// route to find given meme object by id
router.get('/memes/:id', async (req, res) => {

    try{

        let meme = await Memes.findById(req.params.id)

        // if meme is not found
        if(!meme){
            return res.status(404).send({ error : 'Meme with the given id does not exist' })
        }

        const {_id:id, name, caption, url} = meme

        return res.status(200).send({id, name, caption, url})

    }catch (e) {

        res.status(500).send({ error : 'Database Error' })

    }

})

/**
 * @swagger
 * /memes/{id}:
 *  patch:
 *   summary: Update meme by id
 *   tags: [Memes]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: string
 *      required: true 
 *      description: The Meme id
 *   requestBody:
 *     description: You can update caption or url or both of them
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        example: {"caption": "Corona Meme", "url":"https://i.pinimg.com/736x/e6/88/31/e688315fef92e3573558439be6b3f0a5.jpg"}
 *   responses:
 *    200:
 *     description: Updated meme object for the given id
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        example: { "id": "601ee048c7b58804a03e7ec1", "name": "John Doe", "caption": "Something Witty!", "url": "https://i.redd.it/irw82kkn7v821.jpg"}
 *    400: 
 *     description: trying to update non exsisting fields for eg. updating password field even though it soes not exist
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        example: { "error": "Invalid Updates" }
 *    500:
 *     description: Internal Server Error
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        example: { "error": "Database Error" }
 */ 

// updating a meme object with a given id 
router.patch('/memes/:id', async (req, res) => {

    // logic to check that no invalid fields are provided
    const updates = Object.keys(req.body)
    const allowedUpdates = ['url', 'caption']
    const isValidUpdate = updates.every(update => allowedUpdates.includes(update))

    // if some field is invalid then send 400 Bad Request
    if(!isValidUpdate){
        return res.status(400).send({ error: 'Invalid Updates' })
    }

    try{

        const meme = await Memes.findById(req.params.id)

        if(!meme){
            return res.status(404).send({ error : 'Meme with the given id does not exist' })
        }

        // update only the fields provided in the request payload
        updates.forEach(update => meme[update] = req.body[update])

        await meme.save()

        const {_id:id, name, caption, url} = meme

        res.status(200).send({id, name, caption, url})

    }catch (e){

        res.status(500).send({ error: 'Database Error' })

    }

})

module.exports = router