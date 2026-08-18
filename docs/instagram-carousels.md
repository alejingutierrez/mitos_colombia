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
