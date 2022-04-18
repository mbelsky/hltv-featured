#! /bin/sh

docker create \
  --name=hltv-featured-scraper \
  --env-file /???/.env \
  --env FIREBASE_CONFIG=/data/cert.json \
  --mount type=bind,src=/???/cert.json,dst=/data/cert.json,ro \
  --detach \
  mbelsky/hltv-featured:v??? \
  node /app/src/scraper/scraper.js
