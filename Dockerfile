FROM node:latest

COPY . ./home/expressApp
WORKDIR /home/expressApp

EXPOSE 3000

ENTRYPOINT [ "node", "./dist/app.js" ]