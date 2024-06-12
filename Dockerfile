# Stage 1: Build React app
FROM node:latest AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the .env file to the working directory
COPY .env ./

# Copy the entire project to the working directory
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve React app with Nginx
FROM nginx:latest

# drop symlinks
# RUN unlink /var/log/nginx/access.log
# RUN unlink /var/log/nginx/error.log
# RUN mkdir -p /var/log/nginx && touch /var/log/nginx/access.log && touch /var/log/nginx/error.log
# RUN chown -R www-data:www-data /var/log/nginx
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
