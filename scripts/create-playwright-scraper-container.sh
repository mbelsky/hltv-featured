#! /bin/sh

docker create \
  --name=hltv-featured-playwright-scraper \
  --env-file /???/.env \
  --env FIREBASE_CONFIG=/data/cert.json \
  --mount type=bind,src=/???/cert.json,dst=/data/cert.json,ro \
  --ipc=host --user pwuser --security-opt seccomp=/???/seccomp_profile.json \
  mbelsky/hltv-featured-playwright:v??? \
  node /app/src/playwright-scraper/playwright-scraper.js
