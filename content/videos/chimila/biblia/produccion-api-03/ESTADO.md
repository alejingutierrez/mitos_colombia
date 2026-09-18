# Segunda tanda de biblia · API03

**6/6 nuevas láminas producidas y revisadas. Avance acumulado 12/54; faltan 42.**

Modelo exacto `gpt-image-2.5-sunburst`, API OpenAI por CLI oficial incluido en la habilidad de generación; misma clave local previamente confirmada, sin exposición ni rotación. JPEG 1024×1536 medium, compresión 92, prompts completos con `--no-augment`.

[Galería actual](/Users/alegut/MyApps/Personal/mitos_colombia/content/videos/chimila/biblia/BIBLIA-ETTE.md) · [Criterio y referentes](/Users/alegut/MyApps/Personal/mitos_colombia/content/videos/chimila/biblia/produccion-api-03/CRITERIO-Y-REFERENTES.md) · [Selección y hashes](/Users/alegut/MyApps/Personal/mitos_colombia/content/videos/chimila/biblia/produccion-api-03/selection.v1.json) · [Revisión e intermedios](/Users/alegut/MyApps/Personal/mitos_colombia/content/videos/chimila/biblia/produccion-api-03/review.v1.json).

## Originales y prompts efectivos finales

- P01 · Papá Grande: [original](/Users/alegut/MyApps/Personal/mitos_colombia/output/imagegen/chimila/biblia/produccion-api-03/p01-papa-grande-master-v1.jpeg) · [prompt](/Users/alegut/MyApps/Personal/mitos_colombia/content/videos/chimila/biblia/produccion-api-03/p01.prompt.txt).
- H03 · Cazadores y viajeros: [original](/Users/alegut/MyApps/Personal/mitos_colombia/output/imagegen/chimila/biblia/produccion-api-03/h03-cazadores-viajeros-bows-only-v1.jpeg) · [prompt](/Users/alegut/MyApps/Personal/mitos_colombia/content/videos/chimila/biblia/produccion-api-03/h03.bows-only.prompt.txt).
- A02 · Felino: [original](/Users/alegut/MyApps/Personal/mitos_colombia/output/imagegen/chimila/biblia/produccion-api-03/a02-felino-master-v1.jpeg) · [prompt](/Users/alegut/MyApps/Personal/mitos_colombia/content/videos/chimila/biblia/produccion-api-03/a02.prompt.txt).
- L05 · Roza y tronco de reserva: [original](/Users/alegut/MyApps/Personal/mitos_colombia/output/imagegen/chimila/biblia/produccion-api-03/l05-roza-tronco-reserva-master-v1.jpeg) · [prompt](/Users/alegut/MyApps/Personal/mitos_colombia/content/videos/chimila/biblia/produccion-api-03/l05.prompt.txt).
- U02 · Arcos, flechas y maná: [original](/Users/alegut/MyApps/Personal/mitos_colombia/output/imagegen/chimila/biblia/produccion-api-03/u02-arcos-flechas-mana-master-v1.jpeg) · [prompt](/Users/alegut/MyApps/Personal/mitos_colombia/content/videos/chimila/biblia/produccion-api-03/u02.prompt.txt).
- V02 · Roza en sequía: [original](/Users/alegut/MyApps/Personal/mitos_colombia/output/imagegen/chimila/biblia/produccion-api-03/v02-roza-sequia-v1.jpeg) · [prompt](/Users/alegut/MyApps/Personal/mitos_colombia/content/videos/chimila/biblia/produccion-api-03/v02.prompt.txt).

## Ejecución y QA

Cuatro generaciones independientes con concurrencia 3; después H03 con imágenes propias de H01 (estilo) y U02 (equipo), y V02 por edición del L05 inspeccionado. H03 necesitó tres solicitudes de corrección: las dos primeras no resolvieron restos de puntas de flechas; final limpio con arcos solamente, utilería de flechas separada en U02. **9 respuestas exitosas con imagen**, seis finales y tres intermedios H03 conservados no seleccionados. No fallos de transporte. No se facturan/infieren costes desde latencias; no prueba del máximo de la cuenta.

Tiempos CLI en segundos: A02: 16.6; P01: 20.5; L05: 22; U02: 17.1; H03: 18.7 / 21.3 / 19 / 16.9; V02: 21.1. Cero fotografías documentales subidas; siete entradas de referencia de imágenes propias sumadas entre las cinco ediciones.

La habilidad de generación fijó el material de papel y los invariantes, inspeccionó individualmente los resultados y separó equipo/elenco para resolver artefactos sin propagarlos. Ocho referentes pertinentes releídos; [registro](/Users/alegut/MyApps/Personal/mitos_colombia/content/videos/chimila/biblia/produccion-api-03/reference-evidence.v1.json).

Diseños editoriales pendientes de revisión del usuario, no certificación comunitaria. Apariencia de Papá Grande, especie del tigre, botánica de maná y geometría de roza/tronco siguen siendo adaptación/provisionales. V02 cubre sólo L05. Inventario/corpus y versiones anteriores intactos. Trípticos/keyframes Ette y publicación del catálogo no iniciados.
