#!/bin/bash

. ~/.nvm/nvm.sh

{ echo -n "IP_ADDRESS="; curl "http://169.254.169.254/latest/meta-data/public-ipv4"; } >> .env

npm install 

npm run start