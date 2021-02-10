#!/bin/bash

# activate nvm
. ~/.nvm/nvm.sh

# environment variable setup, store public ip of ec2 instance to be used in application
{ echo -n "IP_ADDRESS="; curl "http://169.254.169.254/latest/meta-data/public-ipv4"; } >> .env

# install dependencies
npm install 

# start the application
npm run start