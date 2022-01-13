FROM node:alpine

WORKDIR /app/

COPY ./package.json .

RUN npm install

COPY . .

ENV DOLLAR_API_URL="https://dollar-exchange-api.herokuapp.com/api/dollar"

#Place the Bot Token here
ENV BOT_TOKEN=

CMD [ "node", "bot-cli.js" ]