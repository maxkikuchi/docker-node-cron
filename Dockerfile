FROM node:18

WORKDIR /AppAluraStudies

RUN apt-get update && \
    apt-get install vim -y

RUN npm install -g sass && \
    npm install -g node-modules && \
    npm install uuidv4

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]

COPY . .