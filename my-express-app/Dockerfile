FROM node:16-slim

WORKDIR /usr/src/app

COPY packagefail*.json ./

RUN npm install --only=production

COPY . .

CMD [ "node", "app.js" ]

