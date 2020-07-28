#! /bin/sh

if [[ "$CRON" ]]; then
  echo cron brrr
  # crond -f -d 8
else
  # node src/backend/backend.js
  echo backend brrr
fi
