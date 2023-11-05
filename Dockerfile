FROM node:18.16.1 as build

WORKDIR /app

COPY package.json .
COPY yarn.lock .
COPY packages/client ./packages/client
COPY packages/server ./packages/server

RUN yarn install --pure-lockfile --non-interactive

WORKDIR /app/packages/client
RUN yarn build

WORKDIR /app/packages/server
RUN yarn build

FROM node:18.16.1

WORKDIR /app

COPY package.json .
COPY yarn.lock .

COPY --from=build /app/packages/client/package.json /app/packages/client/package.json
COPY --from=build /app/packages/client/dist /app/packages/client/dist

COPY --from=build /app/packages/server/package.json /app/packages/server/package.json
COPY --from=build /app/packages/server/dist /app/packages/server/dist

ENV NODE_ENV production

RUN yarn install --pure-lockfile --non-interactive --production

WORKDIR /app/packages/server

CMD ["yarn", "start"]
