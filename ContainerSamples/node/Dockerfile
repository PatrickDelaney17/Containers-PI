FROM node:19-alpine3.16

WORKDIR /usr/src/app
COPY package.json yarn.lock ./

RUN yarn install
COPY ./ .

RUN apk add dumb-init

USER node

CMD ["dumb-init", "node", "server.js"]