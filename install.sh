#!/bin/bash

# Any installation related commands

sudo su

echo 'wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -'

echo 'echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-4.2.list'

apt update

apt install -y mongodb-org

systemctl start mongod

systemctl enable mongod


echo 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash'

. ~/.nvm/nvm.sh

nvm install node

nvm install 13.14.0

nvm use 13.14.0

echo '{ echo -n "IP_ADDRESS="; curl "http://169.254.169.254/latest/meta-data/public-ipv4"; } >> .env'

# Any configuration related commands

npm install 

npm run start