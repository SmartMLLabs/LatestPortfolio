# Stage 1: Build the Vite app
FROM node:14 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vite app
RUN npm run build

# Verify the build directory contents (optional)
RUN ls -al /app/dist || { echo '/app/dist directory not found'; exit 1; }

# Stage 2: Serve the Vite app with Nginx
FROM nginx:alpine

# Copy the build output to the Nginx HTML directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
