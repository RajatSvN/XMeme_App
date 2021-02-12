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

- now run the following commands to install Node.js, MongoDB, This will aslo start the app

```sh
$ chmod +x setup_server.sh
$ sudo ./setup_server.sh
```

- New to AWS? See [AWS_Help](https://medium.com/serverlessguru/creating-an-aws-ec2-instance-d5cf332fdb0c)

 # Testing the REST API
 
 **Please consider the following points before configuring your tests**

 **APP DOES NOT RUN ON LOCALHOST ❌**

 **The APP Runs on http://public_ipv4:8081/ and swagger on http://public_ipv4:8080/swagger-ui/**

 **public_ipv4 ip is what you used during ssh**

 **It will also be visible in the console as below:**

 ![App Status](https://devrajat.com/XMeme-Readme-Assets/app_status.JPG)

**App running on Public IP using Port 8081**

 ![App on Public IP](https://devrajat.com/XMeme-Readme-Assets/app_publicip.JPG)

**Swagger docs on Public IP using Port 8080**

 ![Swagger Docs on Public IP](https://devrajat.com/XMeme-Readme-Assets/swagger_public_ip.JPG)

 **Your tests should look like this**

 ![Test Script](https://devrajat.com/XMeme-Readme-Assets/test_server.JPG)


 That is all to testing! You can check the app on public ip of instance as mentioned above and **test the API through swagger** too if you want.

 [Tailwindcss]: <https://tailwindcss.com/>
 [handlebars]: <https://www.npmjs.com/package/hbs>
 [Node.js]: <https://nodejs.org/en/>
 [Express]: <https://expressjs.com/>
 [MongoDB]: <https://www.mongodb.com/>
 [Swagger]: <https://swagger.io/>
 [Here]: <https://xmeme-memestream.herokuapp.com/>