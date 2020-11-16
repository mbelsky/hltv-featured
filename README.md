# HLTV Featured

[@hltvFeaturedBot](https://t.me/hltvFeaturedBot)

This is a set of nodejs applications to get data about upcoming CSGO matches and notify a Telegram bot subscribers:

- `src/backend` handles subscribers requests
- `src/notifier` deliveries data to subscribers
- `src/scraper` parses HLTV.org/matches

## Configure server

- Install make, git, [docker](https://docs.docker.com/engine/install/ubuntu/)
- `git clone https://github.com/mbelsky/hltv-featured.git && cd hltv-featured`
- Setup `.env` and `cert.json` files
- `make pull && make bot && make cron`

## License

GNU GPLv3
