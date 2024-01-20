FROM node:21.3.0-alpine
WORKDIR /app
COPY . .
RUN npm install --onit=dev
RUN npm run build
CMD ["npm", "start"]