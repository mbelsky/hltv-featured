ROOT_DIR:=$(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))
COMMON_RUN_ARGS:=-it --env-file ./.env --env FIREBASE_CONFIG=/data/cert.json --mount type=bind,src=$(ROOT_DIR)/cert.json,dst=/data/cert.json,ro
IMG:=mbelsky/hltv-featured:latest


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
		docker run $(COMMON_RUN_ARGS) -d --restart on-failure:3 $(IMG)

.PHONY: cron
cron:
		docker run $(COMMON_RUN_ARGS) --env CRON=true -d --restart on-failure:3 $(IMG)
