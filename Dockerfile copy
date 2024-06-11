FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

# ENV REACT_APP_API_HOST=http://localhost:3000

CMD ["npm", "start"]
