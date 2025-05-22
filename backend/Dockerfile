# Etapa 1: Build
FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Etapa 2: Runtime
FROM node:18

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/src/prisma ./prisma  
COPY --from=builder /app/.env .env

RUN npm install --only=production

EXPOSE 3001

CMD ["node", "dist/index.js"]
