#!/bin/bash

# Any installation related commands

wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -

echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list

sudo apt update

sudo apt install -y mongodb-org

sudo systemctl start mongod

sudo systemctl status mongod

sudo systemctl enable mongod

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

. ~/.nvm/nvm.sh

nvm install node

nvm install 13.14.0

nvm use 13.14.0

# Any configuration related commands
{ echo -n "IP_ADDRESS="; curl "http://169.254.169.254/latest/meta-data/public-ipv4"; } >> .env

npm install 

npm run start