# syntax=docker/dockerfile:1
FROM node:18-alpine
RUN npm i -g pnpm
WORKDIR /app
COPY package.json pnpm-lock* ./
RUN pnpm install --prod
COPY . .
RUN pnpm run build
CMD pnpm run start
