# Ette Ennaka · primera tanda de biblia por API

**Resultado: 6/6 láminas de la tanda producidas y revisadas. Avance de la biblia: 6/54; faltan 48.**
Son candidatos editoriales para revisión del usuario, no diseños certificados por la comunidad. No se publicó ni se modificó el catálogo.

| ID | Categoría | Lámina | Original | Prompt efectivo |
| --- | --- | --- | --- | --- |
| P07 | P | Gran Cacica | [JPEG](/Users/alegut/MyApps/Personal/mitos_colombia/output/imagegen/chimila/biblia/produccion-api-01/p07-gran-cacica-master-v1.jpeg) | [Prompt](/Users/alegut/MyApps/Personal/mitos_colombia/content/videos/chimila/biblia/produccion-api-01/p07.prompt.txt) |
| H01 | H | Cuatro adultos de apoyo | [JPEG](/Users/alegut/MyApps/Personal/mitos_colombia/output/imagegen/chimila/biblia/produccion-api-01/h01-cuatro-adultos-master-v1.jpeg) | [Prompt](/Users/alegut/MyApps/Personal/mitos_colombia/content/videos/chimila/biblia/produccion-api-01/h01.prompt.txt) |
| A09 | A | Morrocoyo con caparazón | [JPEG](/Users/alegut/MyApps/Personal/mitos_colombia/output/imagegen/chimila/biblia/produccion-api-01/a09-morrocoyo-master-v1.jpeg) | [Prompt](/Users/alegut/MyApps/Personal/mitos_colombia/content/videos/chimila/biblia/produccion-api-01/a09.prompt.txt) |
| L01 | L | Monte, camino y claro | [JPEG](/Users/alegut/MyApps/Personal/mitos_colombia/output/imagegen/chimila/biblia/produccion-api-01/l01-monte-camino-claro-master-v1.jpeg) | [Prompt](/Users/alegut/MyApps/Personal/mitos_colombia/content/videos/chimila/biblia/produccion-api-01/l01.prompt.txt) |
| U07 | U | Mochilas: algodón y fique | [JPEG](/Users/alegut/MyApps/Personal/mitos_colombia/output/imagegen/chimila/biblia/produccion-api-01/u07-mochilas-algodon-fique-master-v1.jpeg) | [Prompt](/Users/alegut/MyApps/Personal/mitos_colombia/content/videos/chimila/biblia/produccion-api-01/u07.prompt.txt) |
| V01 | V | Monte inundado | [JPEG](/Users/alegut/MyApps/Personal/mitos_colombia/output/imagegen/chimila/biblia/produccion-api-01/v01-monte-inundado-v1.jpeg) | [Prompt](/Users/alegut/MyApps/Personal/mitos_colombia/content/videos/chimila/biblia/produccion-api-01/v01.prompt.txt) |

## Producción y revisión

Modelo exacto `gpt-image-2.5-sunburst`, API OpenAI por CLI incluido en la habilidad de generación. JPEG medium, 1024×1536, compresión 92. Cinco maestros independientes con concurrencia 3 y después una edición de L01 para V01. Seis respuestas exitosas con imagen; ninguna corrección visual. Un primer intento sandbox falló por transporte en los cinco trabajos: el lote llegó correctamente a la API después de habilitar red. No se rotó ni se mostró la clave.

Tiempos reportados por el CLI: P07 17,0 s; H01 15,9 s; A09 16,8 s; L01 18,9 s; U07 15,2 s; V01 19,2 s. La concurrencia 3 funcionó en este lote; no se midió el máximo de la cuenta ni un A/B controlado.

Se revisaron individualmente los seis originales y la continuidad L01 → V01. Los referentes documentales se consultaron localmente para observaciones parciales: **ninguno se subió a la API**. La única imagen enviada como entrada fue el paisaje L01 propio y revisado. Las etiquetas de la hoja de contacto sólo existen en el derivado de revisión; los originales no contienen texto.

## Límites explícitos

- P07: edad, peinado y corte exacto del atuendo son adaptación; no se afirma que la fuente describa esa apariencia.
- H01: cuatro prototipos de adultos, no una familia fija ni identidades compartidas por todos los cuentos.
- A09: morrocoyo general; especie concreta pendiente, sin mezcla con Wuacha o Jacinto.
- U07: se distinguen algodón y fique, pero la forma/cierre de fique es provisional por falta de referencia histórica atribuida.
- L01: geografía ficticia coherente basada en morfología regional, no mapa de un lugar sagrado.
- V01: primera lámina de inundación basada únicamente en L01; otros escenarios aún no producidos no se declaran cubiertos.

## Archivos y seguimiento

[Vista conjunta](/Users/alegut/MyApps/Personal/mitos_colombia/output/imagegen/chimila/biblia/produccion-api-01/review-contact-sheet-v1.png).
[Galería de la biblia](../BIBLIA-ETTE.md).
[Inventario editorial congelado](../inventory.v1.json).
[Selección y hashes](selection.v1.json).
[Revisión individual](review.v1.json).
[Prompts del lote de maestros](wave-01.jsonl).
[Prompt de la variante](v01.prompt.txt).
[Registro de ejecución](execution.log).

La siguiente tanda debe respetar las identidades y las bases aceptadas. Los detalles culturales abiertos no se presentan como hechos documentados.
