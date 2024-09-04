FROM node:18-alpine

WORKDIR /app

COPY github-svc/package*.json ./

RUN npm install

COPY github-svc/app.js .

EXPOSE 3000

CMD ["node", "app.js"]