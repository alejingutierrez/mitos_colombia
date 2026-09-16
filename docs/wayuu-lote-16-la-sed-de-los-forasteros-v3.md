# Lote 16 · La sed de los forasteros · Biblia visual Wayuu V3

Estado: `QA_PASS_AFTER_RESEARCH_AND_CORRECTIONS_01`  
Fecha: 2026-09-04  
Calidad: `medium`  
Modo: `text_only_no_local_references`

## Límite de la fuente

La transcripción primaria de Milciades Chaves, publicada por el Servicio
Arqueológico Nacional y digitalizada por el ICANH, nombra dos comerciantes
alijuna que iban a vender panela, Utta cerca de Katetamana, la sed, el cansancio,
dos formas pétreas y una frase final atribuida a Mareiwa.

La relectura retiró del inventario viajeros Wayuu, familias, jagüey y
recipientes de agua. Tampoco fija transporte, embalaje, etnia, fisonomía o ropa
de los comerciantes. `Alijuna` se conserva como relación de exterioridad, no
como raza ni como uniforme.

Fuente primaria:
https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/243/266/1579?inline=1

Contexto histórico visual, no identificación de los personajes:
https://babel.banrepcultural.org/digital/collection/p17054coll18/id/434/

## Cobertura

Se generaron seis modelos nuevos:

- `comerciante_alijuna_1__identity_sheet`;
- `comerciante_alijuna_1__state_sheet`;
- `comerciante_alijuna_2__identity_sheet`;
- `comerciante_alijuna_2__state_sheet`;
- `carga_panela__object_sheet`;
- `utta__spatial_model`.

Se reutilizaron cuatro modelos ya aprobados:

- `cerro_katetamana__spatial_model`;
- `mareiwa__presence_model`;
- `mareiwa__state_sheet`;
- `territorio_alta_guajira__environment_model`.

La cobertura final es 10/10. La Biblia queda en 170/294 modelos seleccionados,
124 pendientes y 16/27 mitos completos.

## Tamaños y calidad

- identidades y panela: `1024x1024`, `medium`;
- hojas de estado y Utta: `1536x1024`, `medium`;
- ninguna referencia visual local;
- técnica: paper craft fotografiado, profundidad por capas y full bleed sin
  cartón, base, mesa o estudio visibles.

## QA y correcciones

Hubo nueve intentos para seis selecciones. Tres salidas quedaron rechazadas y
conservadas con su causa y SHA-256:

1. la primera identidad introdujo rosetas y flora tipo agave;
2. el primer estado convirtió la forma pétrea en un cairn apilado y añadió
   flora de desierto occidental;
3. el segundo estado convirtió la forma pétrea en una pirámide monumental con
   franjas.

Las correcciones fueron nuevas generaciones desde texto. Las formas finales
son dos piedras distintas, de escala pequeña respecto al paisaje, con postura y
eco cromático de cada comerciante, sin dolor explícito, aura o cuerpo atrapado.

## Trazabilidad

- selección: `content/mitos-visuales/_openai/wayuu/biblia-v3-production/wayuu-v3-production-16-la-sed-de-los-forasteros-medium/selection.json`;
- decisiones: `content/mitos-visuales/_openai/wayuu/biblia-v3-production/wayuu-v3-production-16-la-sed-de-los-forasteros-medium/selection.decisions.json`;
- QA: `content/mitos-visuales/_openai/wayuu/biblia-v3-production/wayuu-v3-production-16-la-sed-de-los-forasteros-medium/QA.md`;
- tablero: `output/imagegen/wayuu-v3-production/la-sed-de-los-forasteros-selected-contact-sheet.jpeg`.

