FROM node:18-bullseye AS builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build:dev

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
