FROM node:12.18.2-alpine3.11
ENV NODE_ENV production

WORKDIR /app
COPY ["package.json", "yarn.lock", "./"]
COPY src src

RUN find src \! -name "package.json" -mindepth 2 -maxdepth 2 -print | xargs rm -rf

FROM node:12.18.2-alpine3.11

WORKDIR /app
COPY --from=0 /app .

RUN yarn install --frozen-lockfile && mv node_modules ../

COPY . .

RUN cat crond/crontab >> /var/spool/cron/crontabs/root

CMD scripts/start.sh
