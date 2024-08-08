# Stage 1: Build the Node.js application
FROM node:14 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Set up NGINX to serve the app
FROM nginx:alpine
COPY --from=build /app/src /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

