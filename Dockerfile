FROM node:14.17.6 AS base-node
WORKDIR /app
COPY ./package.json .
RUN yarn install

FROM base-node AS dev
COPY . .
CMD [ "yarn", "start:dev" ]

# FROM base-node AS build
# COPY . .
# RUN yarn tsc

# FROM base-node as production
# WORKDIR /build
# COPY --from=build /app/dist /build
# COPY --from=build /app/node_modules /build/node_modules
# CMD [ "node", "app.js" ]

# EXPOSE 9000
# ENV PORT 9000