ROOT_DIR:=$(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))
COMMON_RUN_ARGS:=-it --env-file ./.env --env FIREBASE_CONFIG=/data/cert.json --mount type=bind,src=$(ROOT_DIR)/cert.json,dst=/data/cert.json,ro
IMGV?=latest
IMG:=mbelsky/hltv-featured:$(IMGV)
PLAYWRIGHT_IMG:=mbelsky/hltv-featured-playwright:$(IMGV)

.PHONY: build
build:
		docker build -t $(IMG) .

.PHONY: pull
pull:
		docker pull $(IMG)

.PHONY: dev
dev: build
		docker run $(COMMON_RUN_ARGS) --env CRON=true --rm $(IMG) sh

.PHONY: bot
bot:
		docker run --name=hltv-featured-bot $(COMMON_RUN_ARGS) -d --restart on-failure:3 $(IMG)

.PHONY: cron
cron:
		docker run --name=hltv-featured-cron $(COMMON_RUN_ARGS) --env CRON=true -d --restart on-failure:3 $(IMG)

.PHONY: build-playwright
build-playwright:
		docker build --build-arg NODEIMG=mcr.microsoft.com/playwright:v1.31.0-focal -t $(PLAYWRIGHT_IMG) .

.PHONY: playwright-scraper
playwright-scraper:
		docker run $(COMMON_RUN_ARGS) --rm --ipc=host --user pwuser --security-opt seccomp=seccomp_profile.json $(PLAYWRIGHT_IMG) node /app/src/playwright-scraper/playwright-scraper.js