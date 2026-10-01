FROM node:24-bookworm-slim AS dependencies
WORKDIR /app
RUN apt-get update && apt-get install -y --no-install-recommends python3 make g++ ca-certificates && rm -rf /var/lib/apt/lists/*
COPY package.json package-lock.json ./
RUN npm ci

FROM node:24-bookworm-slim AS runtime_dependencies
WORKDIR /runtime
COPY runtime/package.json runtime/package-lock.json ./
RUN npm ci --omit=dev

FROM dependencies AS build
COPY . .
ARG MITOS_DEPLOYMENT_SHA
ARG NEXT_PUBLIC_GA_ID
ARG NEXT_PUBLIC_GTM_ID
ENV NEXT_TELEMETRY_DISABLED=1 NEXT_PUBLIC_SITE_URL=https://www.mitosdecolombia.com
ENV MITOS_AWS_BUILD=1 MITOS_AWS_ASSETS=1 MITOS_DEPLOYMENT_SHA=$MITOS_DEPLOYMENT_SHA NEXT_PUBLIC_GA_ID=$NEXT_PUBLIC_GA_ID NEXT_PUBLIC_GTM_ID=$NEXT_PUBLIC_GTM_ID
ENV MITOS_DB_PATH=/app/build-input/catalog.sqlite MITOS_SNAPSHOT_BUILD=1
RUN test -s build-input/catalog.sqlite && npm run build && node scripts/aws/audit-package.mjs

FROM node:24-bookworm-slim AS prod
WORKDIR /app
ARG MITOS_DEPLOYMENT_SHA
ARG MITOS_SNAPSHOT_SHA256
ARG MITOS_SOURCE_VERIFIED
ARG NEXT_PUBLIC_GA_ID
ARG NEXT_PUBLIC_GTM_ID
LABEL org.opencontainers.image.revision=$MITOS_DEPLOYMENT_SHA com.mitos.snapshot.sha256=$MITOS_SNAPSHOT_SHA256 com.mitos.snapshot.verified=$MITOS_SOURCE_VERIFIED com.mitos.public.ga=$NEXT_PUBLIC_GA_ID com.mitos.public.gtm=$NEXT_PUBLIC_GTM_ID
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1 HOSTNAME=0.0.0.0 PORT=3000
RUN groupadd --gid 1001 nextjs && useradd --uid 1001 --gid nextjs --no-create-home nextjs
COPY --from=build --chown=nextjs:nextjs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nextjs /app/.next/static ./.next/static
COPY --from=build --chown=nextjs:nextjs /app/public ./public
COPY --chown=nextjs:nextjs runtime ./runtime
COPY --chown=nextjs:nextjs cache-handler.cjs ./cache-handler.cjs
COPY --from=runtime_dependencies --chown=nextjs:nextjs /runtime/node_modules ./runtime/node_modules
COPY --chown=nextjs:nextjs infra/aws/certs/us-east-1-bundle.pem /app/certs/rds.pem
ENV PGSSLROOTCERT=/app/certs/rds.pem MITOS_RUNTIME=aws AWS_REGION=us-east-1
RUN mkdir -p /app/.next/cache /var/lib/mitos/cache && chown -R nextjs:nextjs /app/.next /var/lib/mitos/cache
USER nextjs
EXPOSE 3000
ENTRYPOINT ["node", "/app/runtime/entrypoint.mjs"]
CMD ["web"]

FROM dependencies AS dev
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev", "--", "-H", "0.0.0.0", "-p", "3000"]
