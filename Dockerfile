FROM node:latest

COPY . ./home/expressApp
WORKDIR /home/expressApp

#RUN "npm install express"
#RUN "npm install typescript"

EXPOSE 3000

ENTRYPOINT [ "node", "app.js" ]