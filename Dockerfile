#syntax=docker/dockerfile:1.2
FROM node:alpine as base

#build phase
USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY --chown=node:node ./package.json . 
RUN npm install
COPY --chown=node:node . .
RUN npm run build

#run phase

FROM nginx
COPY --from=base /home/node/app/build /usr/share/nginx/html
