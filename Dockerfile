FROM node:latest
ENV NODE_ENV=development

# Create directory for the app
RUN mkdir /app
WORKDIR /app

# Install app dependencies
COPY package.json package-lock.json /app/
RUN npm install

# Bundle app source
COPY . /app

EXPOSE 3001
CMD [ "npm", "run", "server" ]
