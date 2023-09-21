FROM node:latest

COPY . ./home/expressApp
WORKDIR /home/expressApp

#ßRUN "npm install express"
#RUN "npm install typescript"

EXPOSE 3000

ENTRYPOINT [ "node", "./dist/app.js" ]