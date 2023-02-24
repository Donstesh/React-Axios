FROM node:16-alpine

WORKDIR /app

COPY . /app/

RUN npm install

EXPOSE 3000

ENV NODE_ENV=production

CMD [ "npm", "start" ]