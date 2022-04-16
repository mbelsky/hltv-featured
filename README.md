# HLTV Featured

[@hltvFeaturedBot](https://t.me/hltvFeaturedBot)

This is a set of nodejs applications to get data about upcoming CSGO matches and notify a Telegram bot subscribers:

- `src/backend` handles subscribers requests
- `src/notifier` deliveries data to subscribers
- `src/scraper` parses HLTV.org/matches

## Configure server

1. Install git, [docker](https://docs.docker.com/engine/install/ubuntu/)
1. Create a new sudo user
1. Switch user
1. Clone sources
1. Prepare `.env` and `cert.json` files
1. Move and update `scripts/start-*` files
1. Add crontasks to start notifier and scraper
1. Start bot app

## License

GNU GPLv3
