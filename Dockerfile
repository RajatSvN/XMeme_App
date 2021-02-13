FROM node:14 

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install 

Copy . .

EXPOSE 8080 8081 27017

CMD ["npm", "start"]

