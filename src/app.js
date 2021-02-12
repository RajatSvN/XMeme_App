/* 
This is the main file which runs and renders the whole application

Main Dependencies

express: Server
hbs: Handelbars Templating Engine 
swagger-jsdoc, swagger-ui-express: for generating Swagger Docs for API 
*/

// load environment variable
require('dotenv').config()

// load in the dependencies for the application
const express = require('express')
const cors = require('cors')
// establish connection with mongoDB
require('./db/connection')
const hbs = require('hbs')

const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')

// load in the routers for api and ui
const memeRouter = require('./routers/meme')
const uiRouter = require('./routers/ui')

const app = express()
const port = process.env.PORT || 8081

const swaggerApp = express()
const swaggerPort = process.env.PORT || 8080
app.use(cors())
swaggerApp.use(cors())

// setting up templates path for express to find the static content
const path = require("path")
const publicDirPath = path.join(__dirname, '../public/')
const viewsPath = path.join(__dirname, '../public/templates/views')
const partialsPath = path.join(__dirname, '../public/templates/partials')

const ip = process.env.IP_ADDRESS ? process.env.IP_ADDRESS : "localhost"

// meta information for swagger api docs 
const swaggerOptions = {
    definition: {
        openapi: '3.0.2',
        info:{
            title: 'XMeme API',
            description: 'Store and fetch memes with urls',
            contact:{
                name: 'Rajat Sharma',
                url: 'https://devrajat.com/contact.html',
                email: 'contact@devrajat.com'
            },
            version: '1.0.0', 
        },
        servers: [
            {
            url:'http://'+ip+':8081'
        }
    ]
        
    },
    // set up the path for Swagger to search files for Swagger Comments
    apis: ['src/routers/*.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)
swaggerApp.use('/swagger-ui', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.json())
// register static contents path with express 
app.use(express.static(publicDirPath))

// register the app routers with express
app.use(memeRouter)
app.use(uiRouter)

app.listen(port, () => {
    console.log('Server up and running on http://'+ip+':'+port)
})

swaggerApp.listen(swaggerPort, ()=> {
    console.log('Swagger Docs running on http://'+ip+':'+swaggerPort+'/swagger-ui/')
})

