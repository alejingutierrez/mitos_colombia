# QA · lote 22 · Umaralá

**Resultado:** `PASS_AFTER_RESEARCH_AND_CORRECTIONS_02`  
**Revisión:** 2026-09-04  
**Selección:** 17/17 modelos del lote  
**Cobertura del mito:** 23/23 modelos, incluidos seis activos compartidos  
**Producción acumulada:** 343/395 modelos; 23/27 mitos.

## Selecciones

| modelo | estado | fuente seleccionada |
|---|---|---|
| `umarala__identity_sheet` | PASS | base |
| `umarala__state_sheet` | PASS | base |
| `tia_outsu_umarala__identity_sheet` | PASS_AFTER_CORRECTION_01 | corrections-01 |
| `tia_outsu_umarala__state_sheet` | PASS_AFTER_CORRECTION_02 | corrections-02 |
| `paciente_umarala__identity_sheet` | PASS | base |
| `paciente_umarala__state_sheet` | PASS | base |
| `jumajule_umarala__presence_model` | PASS | base |
| `capote_umarala__object_sheet` | PASS_AFTER_CORRECTION_01 | corrections-01 |
| `hombre_parashi_venado__identity_sheet` | PASS | base |
| `hombre_parashi_venado__state_sheet` | PASS_AFTER_CORRECTION_01 | corrections-01 |
| `servidor_umarala__identity_sheet` | PASS_AFTER_CORRECTION_01 | corrections-01 |
| `maiceo__spatial_model` | PASS_AFTER_CORRECTION_02 | corrections-02 |
| `jarara__spatial_model` | PASS_AFTER_CORRECTION_01 | corrections-01 |
| `transmision_vida_nombre_umarala__phenomenon_rule` | PASS_AFTER_CORRECTION_01 | corrections-01 |
| `curacion_nocturna_umarala__phenomenon_rule` | PASS_AFTER_CORRECTION_02 | corrections-02 |
| `partida_occidente_umarala__phenomenon_rule` | PASS_AFTER_CORRECTION_01 | corrections-01 |
| `jururiana__state_sheet` | PASS_AFTER_CORRECTION_02 | corrections-02 |

Los paths y SHA-256 exactos están en `selection.json`; la relación entre cada
selección y los 15 intentos descartados está en `selection.decisions.json`.

## Comprobaciones aprobadas

- conteos de personas, estados, mulas, botellas, elevaciones, piedras y haces;
- figuras humanas con conjuntos completos, calzado y siluetas diferenciadas;
- misma identidad, edad, rostro y ropa entre estados;
- pintura facial omitida por falta de contexto exacto, no por regla genérica;
- Jumajule sin cuerpo inventado;
- magia construida por peso, sonido, distancia, huella, oclusión y capas;
- flora sin agaves, rosetas ni cactus ramificados en las selecciones finales;
- profundidad 3D, full bleed y materialidad de papel sin base o cartón visible;
- sin violencia, sexualidad, cadáver, ceguera, procedimiento clínico, símbolos,
  kanas, marcas claniles o VFX luminosos.

## Sustitución explícita

`jururiana__state_sheet` reemplaza la selección del lote 13 porque la lectura
de Umaralá amplía al mismo personaje con viaje desde Macuira, tres haces,
lluvia localizada y anuncio. El agregador no acepta duplicados por defecto: el
reemplazo sólo se aplicó porque `selection.decisions.json` declara la fuente
anterior y su razón. `accepted-selection.json` conserva ambos hashes.

## Límite editorial

Este `PASS` aprueba selección de producción para la Biblia visual. No equivale
a ingestión, canon comunitario o publicación.
