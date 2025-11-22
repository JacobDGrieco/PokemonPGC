#!/usr/bin/env bash

# Ensure all of this is installed and ran before running
# curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
# source ~/.nvm/nvm.sh
# nvm install 18
# nvm use 18
# sudo apt update
# sudo apt install postgresql postgresql-contrib
# sudo service postgresql start
# sudo -u postgres psql
# CREATE USER ppgc WITH PASSWORD 'ppgc_pw';
# 	ALTER ROLE ppgc CREATEDB;
# 	CREATE DATABASE ppgc OWNER ppgc;
# 	GRANT ALL PRIVILEGES ON DATABASE ppgc TO ppgc;
# 	\q


set -e

echo "[PPGC] Installing backend dependencies..."
npm install

echo "[PPGC] Running Prisma migrations..."
npx prisma migrate dev

echo "[PPGC] Done. You can now run: npm run dev"

# run the site using npm run dev
# run the db using npx prisma studio