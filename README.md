# XMeme: The Meme Stream App

XMeme is a simple meme stream app in which you can 

 - add a meme
 - edit your meme
 - watch a full meme stream
 - the app is publicly available and deployed [Here]

 # Tech

 XMeme was made with ❤️ using the following technologies:

 * [Tailwindcss] - A utility-first css frameworks with css classes to be directly used in markup
 * [Handlebars] - An awesome templating engine
 * [Node.js] - Evented I/O for backend
 * [Express] - Fast Node.js network app framework
 * [MongoDB] - General purpose, document based NoSQL Database
 * [Swagger] - Document your Rest APIs seamlessly with Swagger Docs

 # Tools

 These tools came in very handy while developing the application

 * [Postman] - Industry standard for everything to do with APIs
 * [Robo 3T] - GUI to connect to MongoDB database, formerly Robomongo

 # Installation on AWS EC2 Ubuntu 18.04 x86

- Deploy an AWS EC2 Ubuntu 18.04 x86 VM from AWS Console

- Go to EC2 Instances Dashboard and add rules to enable port 8080 and 8081

- The Security group configuration should look like below:

![Security Groups](https://devrajat.com/XMeme-Readme-Assets/Security_Group_Config.png)

- ssh into the ec2 instance 

- git clone this repo using the following command

```sh
$ git clone repo_url_here
```

- cd into the cloned repo

- Setup the Server and run basic tests using the test_server.sh by typing the following command

```sh
$ chmod +x test_server.sh
$ sudo ./test_server.sh
```

- New to AWS? See [AWS_Help](https://medium.com/serverlessguru/creating-an-aws-ec2-instance-d5cf332fdb0c)

# Creating the Docker 🐳 Image

- You can simply spin up the application using Docker locally by issuing this command from root of repo, 

```sh
$ docker-compose up -d # Start as background process
$ # add sleep script , sleep 300 would be a good estimate
$ # add test script below 
```

**Note:** Please make sure you have docker and docker-compose installed on your system.

- New to Docker? See [Docker_Install](https://k21academy.com/docker-kubernetes/docker-installation-overview/),  [Docker_Compose_Install](https://docs.docker.com/compose/install/), 
[Docker_Compose](https://docs.docker.com/compose/gettingstarted/)

 
 [Tailwindcss]: <https://tailwindcss.com/>
 [handlebars]: <https://www.npmjs.com/package/hbs>
 [Node.js]: <https://nodejs.org/en/>
 [Express]: <https://expressjs.com/>
 [MongoDB]: <https://www.mongodb.com/>
 [Swagger]: <https://swagger.io/>
 [Postman]: <https://www.postman.com/>
 [Robo 3T]: <https://robomongo.org/>
 [Here]: <https://xmeme-memestream.herokuapp.com/>