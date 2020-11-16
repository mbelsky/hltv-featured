FROM node:12.18.2-alpine3.11 AS deps

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]
COPY src src

RUN find src \! -name "package.json" \
  -mindepth 2 \
  -maxdepth 2 \
  -print \
  | xargs rm -rf

FROM node:12.18.2-alpine3.11

ENV NODE_ENV production

WORKDIR /app

COPY --from=deps /app .

RUN yarn install --frozen-lockfile --production=true

COPY . .

# To restore workspaces symlinks
RUN yarn install --frozen-lockfile --production=true && \
    chmod -R 755 scripts src && \
    touch .env && \
    touch ~/.env && \
    cat crond/crontab >> /var/spool/cron/crontabs/root

CMD scripts/start.sh
