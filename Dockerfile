FROM node:20-bookworm-slim

ENV NODE_ENV=production
ENV HOST=0.0.0.0
WORKDIR /app

# Install OpenSSL for Prisma
RUN apt-get update -y && apt-get install -y --no-install-recommends openssl ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Copy manifests first
COPY package.json package-lock.json* ./

# Install deps
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# Copy source
COPY . .

# Generate Prisma client and build the app
RUN npx prisma generate && npm run build

# Dockerfile (only the CMD line changes)
CMD bash -lc '\
    # Create/align tables even if there are no migrations
    npx prisma db push --accept-data-loss && \
    # Seed once (guarded by a lock file)
    mkdir -p data && \
    [ -f data/seed.lock ] || (npm run seed && echo done > data/seed.lock); \
    # Start the server
    npm run start -- --port 3000 --hostname 0.0.0.0'
