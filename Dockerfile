FROM node:16
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy only application source files
COPY src/ /app/src/
COPY public/ /app/public/

# Start the application
CMD ["node", "src/index.js"]
