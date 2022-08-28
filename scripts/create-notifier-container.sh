#! /bin/sh

docker create \
  --name=hltv-featured-notifier \
  --env-file /???/.env \
  --env FIREBASE_CONFIG=/data/cert.json \
  --mount type=bind,src=/???/cert.json,dst=/data/cert.json,ro \
  mbelsky/hltv-featured:v??? \
  node /app/src/notifier/notifier.js
