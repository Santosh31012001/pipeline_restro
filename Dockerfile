# Use an official Node.js image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy only package.json and lock files for efficient caching
COPY package.json package-lock.json ./

# Install root-level dependencies
RUN npm install

# Copy the entire monorepo, including the packages
COPY . .

# # Build the Next.js application
# RUN npm run build

# Expose the port your app will run on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "dev"]
