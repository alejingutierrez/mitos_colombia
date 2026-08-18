# Registro de Instagram

La metodología completa está en
[`docs/instagram-editorial-methodology.md`](../../docs/instagram-editorial-methodology.md).

`template-history.jsonl` se actualiza al aprobar o publicar un carrusel. Cada línea debe
tener esta forma:

```json
{"composed_at":"2026-08-05T18:00:00-05:00","myth_slug":"bachue","seed":"bachue-v12","narrative_template_id":"retrato_en_capas","narrative_motif":"layers","template_ids":["cover-01-immersive","type-03-oral-quote"],"graphic_ids":["divider-water","frame-archive"]}
```

No registrar borradores: el historial representa una composición aprobada o
publicada y alimenta la rotación antirrepetición de plantillas y elementos
gráficos. El flag `--record` se usa sólo después de aprobar el contact sheet. El
registro es idempotente para la misma combinación de mito, semilla y plantillas.

Los briefs generales de comunidad viven en `community-briefs/`. El productor
masivo los usa para abrir el lote con una introducción y después asigna un
índice estable a cada mito, con el que varía orden de familias, colores y
posiciones sin romper el sistema compartido.
