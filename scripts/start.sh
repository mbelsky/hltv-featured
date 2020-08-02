#! /bin/sh

if [[ "$CRON" ]]; then
  crond -f -d 8
else
  node src/backend/backend.js
fi
