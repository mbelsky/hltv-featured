# HLTV Featured

[@hltvFeaturedBot](https://t.me/hltvFeaturedBot)

This is a set of nodejs applications to get data about upcoming CSGO matches and notify a Telegram bot subscribers:

- `src/backend` handles subscribers requests
- `src/notifier` deliveries data to subscribers
- `src/scraper` parses HLTV.org/matches

## Configure server

- Install lts node
- Install yarn
- `sudo adduser hltv`
- `sudo git clone https://github.com/mbelsky/hltv-featured.git /opt/hltv-featured`
- `sudo chmod -R 755 /opt/hltv-featured`
- `sudo chown -R hltv:hltv /opt/hltv-featured`
- Setup `.env` and `src/common/cert.json` files
- `sudo cp -r /opt/hltv-featured/systemd/* /etc/systemd/system/`
- `sudo systemctl enable --now hltvf-scrap.timer hltvf-notify.timer hltvf-backend.service hltvf-scrap.service hltvf-notify.service`

## License

GNU GPLv3
