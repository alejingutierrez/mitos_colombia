# Deploy en Vercel

## 1) Base de datos (Vercel Postgres)
1. En el dashboard de Vercel, crea un Postgres y conéctalo al proyecto.
2. Copia el valor de `POSTGRES_URL`.
3. Exporta la variable localmente para el seed:

```bash
export POSTGRES_URL="postgres://..."
```

## 2) Seed de datos
Ejecuta el importador hacia Postgres:

```bash
npm run db:import:pg
```

## 3) Variables de entorno
Configura en Vercel (Project Settings > Environment Variables):
- `POSTGRES_URL`
- (opcional) `MITOS_DB_PATH` para fallback local

## 4) Deploy
1. Conecta el repositorio a Vercel.
2. Usa los defaults de Next.js.
3. Despliega y valida `/mitos` y `/mitos/[slug]`.

## Notas
- En produccion, la app usa Postgres automaticamente cuando `POSTGRES_URL` esta presente.
- En local, la app usa SQLite (`data/mitos.sqlite`) si no hay `POSTGRES_URL`.
