ARG NODE_VERSION=21.6.1

# Stage 1: Build environment
FROM node:${NODE_VERSION}-alpine AS build-env
WORKDIR /dist
COPY package*.json .
RUN npm install
COPY src src

# Stage 2: Production environment
FROM node:${NODE_VERSION}-alpine
WORKDIR /dist
COPY --from=build-env /dist .

ARG PORT_ARG=4000
ARG PORT=$PORT_ARG
EXPOSE $PORT_ARG
ENTRYPOINT [ "npm" ]
CMD ["run","prod"]