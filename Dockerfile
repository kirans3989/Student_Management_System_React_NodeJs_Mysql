FROM node:18-alpine as frontend-build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine as backend-build

WORKDIR /app
COPY backend/package*.json ./
RUN npm install
COPY backend ./

FROM node:18-alpine

WORKDIR /app
COPY --from=backend-build /app ./backend
COPY --from=frontend-build /app/dist ./frontend/dist

ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "backend/src/index.js"]
