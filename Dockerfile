# Stage 1: Build React app
FROM node:latest AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the .env file to the working directory
COPY .env.local ./

# Copy the entire project to the working directory
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve React app with Nginx
FROM nginx:latest

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Set the working directory in the container
WORKDIR /usr/share/nginx/html

# Remove default Nginx website
RUN rm -rf ./*

# Copy the built React app from the build stage
COPY --from=build /app/build .

# Expose port 80 to allow external access
EXPOSE 80

# Command to run Nginx and serve the React app
CMD ["nginx", "-g", "daemon off;"]
