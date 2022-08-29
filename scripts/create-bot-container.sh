#! /bin/sh

docker create \
  --name=hltv-featured-bot \
  --env-file /???/.env \
  --env FIREBASE_CONFIG=/data/cert.json \
  --mount type=bind,src=/???/cert.json,dst=/data/cert.json,ro \
  mbelsky/hltv-featured:v??? \
  node /app/src/backend/backend.js
