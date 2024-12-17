FROM node:16

WORKDIR /app
COPY . /app
RUN npm install
CMD ["node", "app.js"]
EXPOSE 8080
