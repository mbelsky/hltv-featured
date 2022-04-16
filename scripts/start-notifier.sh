#! /bin/sh

docker run \
  --name=hltv-featured-notifier \
  --env-file /???/.env \
  --env FIREBASE_CONFIG=/data/cert.json \
  --mount type=bind,src=/???/cert.json,dst=/data/cert.json,ro \
  --detach \
  mbelsky/hltv-featured:v??? \
  node /app/src/notifier/notifier.js
