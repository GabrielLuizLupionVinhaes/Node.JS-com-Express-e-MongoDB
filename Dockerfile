FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

ENV MONGODB_URI="mongodb://localhost:27017/Estudando"

EXPOSE 3000

CMD ["node", "app.js"]

