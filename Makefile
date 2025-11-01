# Makefile for PokemonPGC (Docker workflow)

SHELL := /bin/bash
COMPOSE ?= docker compose
SERVICE ?= app

.PHONY: fresh rebuild up down logs ps shell migrate db-push seed

## Full clean build + up + follow logs (your 4 commands)
clean:
	$(COMPOSE) down -v --remove-orphans
	$(COMPOSE) build --no-cache
	$(COMPOSE) up -d
	$(COMPOSE) logs -f $(SERVICE)

## Rebuild without nuking volumes, then follow logs
rebuild:
	$(COMPOSE) build --no-cache
	$(COMPOSE) up -d
	$(COMPOSE) logs -f $(SERVICE)

## Start/stop helpers
up:
	$(COMPOSE) up -d

down:
	$(COMPOSE) down --remove-orphans

logs:
	$(COMPOSE) logs -f $(SERVICE)

ps:
	$(COMPOSE) ps -a

shell:
	$(COMPOSE) run --rm $(SERVICE) bash

## Prisma helpers (run inside the container image)
db-push:
	$(COMPOSE) run --rm $(SERVICE) npx prisma db push

migrate:
	$(COMPOSE) run --rm $(SERVICE) npx prisma migrate deploy

seed:
	$(COMPOSE) run --rm $(SERVICE) npm run seed

dev:
	COMPOSE_PROFILES=dev docker compose up -d
	COMPOSE_PROFILES=dev docker compose logs -f app-dev

stop:
	docker compose down --remove-orphans

prod:
	COMPOSE_PROFILES=prod docker compose up -d
	COMPOSE_PROFILES=prod docker compose logs -f app
