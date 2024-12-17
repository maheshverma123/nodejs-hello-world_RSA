FROM node:16

WORKDIR /app
COPY . /app
RUN npm install
RUN npm install -g sonar-scanner  # Install SonarScanner globally
CMD ["node", "index.js"]
EXPOSE 8080
