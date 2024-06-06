# Use the official Nginx image as a parent image
FROM nginx:alpine

# Copy the build output to the Nginx HTML directory
COPY build/ /usr/share/nginx/html

# Copy custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to the outside world
EXPOSE 80

# Run Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]