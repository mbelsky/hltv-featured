FROM node:12.18.2-alpine3.11
ENV NODE_ENV production

WORKDIR /app
COPY ["package.json", "yarn.lock", "./"]
COPY src src

RUN touch .env  && \
    find src \! -name "package.json" -mindepth 2 -maxdepth 2 -print | xargs rm -rf

FROM node:12.18.2-alpine3.11

WORKDIR /app
COPY --from=0 /app .

RUN yarn install --frozen-lockfile --production=true

COPY . .

# To restore workspaces symlinks
RUN yarn install --frozen-lockfile --production=true && \
    chmod -R 755 scripts src && \
    cat crond/crontab >> /var/spool/cron/crontabs/root

CMD scripts/start.sh
