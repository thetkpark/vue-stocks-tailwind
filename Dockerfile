FROM node:alpine as builder
WORKDIR /app
COPY ./package.json ./
RUN yarn
COPY ./ ./
RUN yarn build


FROM nginx:stable-alpine as production-stage
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
