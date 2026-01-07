# Deploy en Vercel

## 1) Base de datos (Neon / Postgres)
1. Usa Neon como base principal y copia el connection string.
2. Configura `POSTGRES_URL` en Vercel (puede ser el mismo que `DATABASE_URL`).
3. Si tienes URLs sin pooler, usa `POSTGRES_URL_NON_POOLING` para el import.
3. Exporta la variable localmente para el seed:

```bash
export POSTGRES_URL="postgres://..."
```

## 2) Seed de datos
Ejecuta el importador hacia Postgres (usa `POSTGRES_URL` o `DATABASE_URL`):

```bash
npm run db:import:pg
```

## 3) Variables de entorno
Configura en Vercel (Project Settings > Environment Variables):
- `POSTGRES_URL`
- (opcional) `POSTGRES_URL_NON_POOLING`
- (opcional) `MITOS_DB_PATH` para fallback local

## 4) Deploy
1. Conecta el repositorio a Vercel.
2. Usa los defaults de Next.js.
3. Despliega y valida `/mitos` y `/mitos/[slug]`.

## Notas
- En produccion, la app usa Postgres automaticamente cuando `POSTGRES_URL` esta presente.
- En local, la app usa SQLite (`data/mitos.sqlite`) si no hay `POSTGRES_URL`.
- Usa Vercel CLI con `VERCEL_TOKEN` en tu shell (no lo commitees).
