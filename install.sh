#!/bin/bash

# Any installation related commands

sudo su

wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -

echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list

apt update

apt install -y mongodb-org

systemctl start mongod

systemctl enable mongod

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

. ~/.nvm/nvm.sh

nvm install node

nvm install 13.14.0

nvm use 13.14.0

cd XMeme-App-Ec2

npm install

npm run start


# Any configuration related commands
