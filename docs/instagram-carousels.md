# Carruseles de Instagram

La metodología completa y canónica de producción, revisión, aprobación,
registro y expansión está en
[`docs/instagram-editorial-methodology.md`](./instagram-editorial-methodology.md).

## Referencias ejecutables

- Biblioteca de 85 plantillas: `src/lib/instagram-editorial-library.js`.
- Biblioteca de 100 piezas gráficas: `src/lib/instagram-iconography.js`.
- Compositor: `scripts/instagram/lib/editorial-composer.mjs`.
- Validación editorial: `scripts/instagram/lib/plan-schema.mjs`.
- Render: `scripts/instagram/render-editorial-composition.mjs`.
- QA: `scripts/instagram/qa-editorial-carousel.mjs`.
- Historial aprobado: `content/instagram/template-history.jsonl`.

## Comandos principales

```bash
npm run instagram:plan -- --slug <slug>
npm run instagram:assets -- --plan artifacts/instagram/<slug>/plan.json
npm run instagram:compose -- \
  --plan artifacts/instagram/<slug>/plan.json \
  --assets artifacts/instagram/<slug>/media.json \
  --output artifacts/instagram/<slug>/composition-v1.json \
  --seed <slug>-v1-1
npm run instagram:render:editorial -- --slug <slug> --edition v1
npm run instagram:qa:editorial -- \
  --plan artifacts/instagram/<slug>/plan.json \
  --composition artifacts/instagram/<slug>/composition-v1.json \
  --slides artifacts/instagram/<slug>/editorial-v1
npm run instagram:iconography:coverage
npm run instagram:produce:community -- \
  --community Muiscas \
  --edition v16 \
  --provider local \
  --base-url http://localhost:3003
npm run instagram:produce:community -- \
  --community Muiscas \
  --edition v16 \
  --provider local \
  --base-url http://localhost:3003 \
  --resume
npm run instagram:package:community -- --community Muiscas --edition v16
```

`--record` se añade al comando de composición únicamente después de aprobar el
contact sheet. Los borradores no forman parte del historial de uso.

La producción comunitaria fija una instantánea única del universo, integra el
carrusel introductorio definido en `content/instagram/community-briefs/` y
mantiene un historial de borrador separado. Cada plan recibe un índice de feed
que rota arquetipo y orden cromático. `--resume` conserva los aprobados del
reporte y procesa sólo los pendientes; no cambia la instantánea ni el historial
canónico.

## Sistema v10 · acabado A+C (producción actual)

Aprobado el 2026-08-28. Seis tipos de pantalla × diez variaciones (60 plantillas),
modo por carrusel (5 Revista · 3 Archivo · 2 Cartel), capacidad por variante y
papel recortado en `public/motifs/carousel/v3/`.

- Registro y reglas: `src/lib/instagram-v10.js`
- Render: `src/components/instagram/SlideV10.js` + `/design-system/instagram-v10`
- Compositor: `scripts/instagram/lib/composer-v10.mjs`

```bash
npm run instagram:v10:compose -- --slug <slug> [--feed-index N] [--mode A|B|C] [--record]
npm run instagram:v10:render -- --slug <slug> --base-url http://localhost:3111
```

### Guion v10 (las 7 reglas)

El planificador con modelo escribe bajo las 7 reglas del guion (`--guion v10`);
las reglas 1-4 y 6 se verifican por código y rechazan el plan con hasta dos
reparaciones automáticas. El planificador local queda excluido de v10.

```bash
npm run instagram:v10:plan -- --slug <slug> --require-third [--model-id <bedrock-id>] --out artifacts/instagram/<slug>/plan-current.json
npm run instagram:v10:qa:guion -- --plan artifacts/instagram/<slug>/plan-current.json
```

El guion aprobado de Bachué vive como fixture en
`scripts/instagram/fixtures/plan-guion-v10-bachue.json` (pasa las 7 reglas y
sirve para probar la cadena sin proveedor).

El historial de uso vive en `content/instagram/template-history-v10.jsonl`.
El sistema anterior (85 plantillas) queda intacto para comparación y reversa.
