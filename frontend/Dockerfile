# Use Node.js official image
FROM node:20-slim

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

EXPOSE 3000

CMD ["npm", "start"]

# # Build the app
# RUN npm run build

# # Use Nginx to serve the build
# FROM nginx:latest
# COPY --from=0 /app/build /usr/share/nginx/html

# # Expose port
# EXPOSE 80

# # Start Nginx
# CMD ["nginx", "-g", "daemon off;"]
