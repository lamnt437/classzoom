# BASE IMAGE
FROM node:16-alpine
# WORKDIR
WORKDIR /var/app

# COPY PACKAGE MANAGER
COPY package*.json .

# RUN npm install
RUN npm i

# copy full code
COPY . .

# command run product\
CMD ["node", "index.js"]