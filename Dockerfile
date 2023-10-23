# Use the node 16.18 container
FROM node:16.18

# Create the application directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.js
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the application source files
COPY . .

# Build the application from the sources
RUN npm run build

# Expose the application port
EXPOSE 3000

# Start the server using the dev build
CMD [ "npm", "run", "start:dev" ]
