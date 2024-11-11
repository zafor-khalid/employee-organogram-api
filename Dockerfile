# Stage 1: Build
FROM node:16 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Run
FROM node:16
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3000
CMD ["node", "dist/main.js"]
