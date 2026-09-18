# El indio Pushaina — tríptico

Estado: publicado y verificado; tres archivos principales nuevos, dos anteriores preservados. Fecha: 2026-09-06.
Slug estable: `el-indio-pushalna`.

## Relato, Biblia y límites

Se leyó íntegro el snapshot público congelado en
`content/mitos-visuales/production/wayuu-2026-09-05/narratives/el-indio-pushalna.json`.
SHA: `0168590b318aac963533e1814489c443d01bcd6e7b85d517c103f7bf5213dc79`.

[Chaves, páginas 315–316](https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/243/266/1579?inline=1)
vincula retorno, voz sin cuerpo, comida, anillo y metamorfosis. La edición
pública añade una presencia acompañante, una prueba familiar con el anillo
y una liberación final. El tríptico usa motivos compartidos y registra las
ampliaciones: no retrata una entidad externa, no ilustra el rito final y no
reescribe el texto público. La fuente no da un retrato ni ropa exacta.

Siete modelos vigentes de la selección global fueron inspeccionados y sus SHA
verificados: identidad/estados de Pushaina, gallinazo, anillo, alimento,
casa grande y presencia invisible. Véase `docs/wayuu-lote-14-pushaina-v3.md`.

Se conserva kemüsa azul humo sobre rodillas, dos paneles estrechos de wayuco
ocre con una si'ira, womu, cabello negro corto y waireñas. Se aplanan rostros
y se transforma toda la arquitectura/suelo en papel, sin heredar realismo de
arena o madera de las fichas. No se añaden pintura facial, marcas o joyas.
La elección de vestuario es editorial contextual, no restitución literal.

## Memoria visual

Se inspeccionaron las dos imágenes actuales:
`9701031d494beb7d5e57` y `77b3ab809a966962ee88`.
Capturas: `output/playwright/wayuu-campaign/pushaina-before-0.png` y
`pushaina-before-1.png`.

Se rescatan índigo/ocre y profundidad. Se descartan el jinete heroico gigante,
tocado, pelo largo, pecho descubierto y arneses ornamentados, además de
vegetación exuberante, rosetas y discos celestes decorativos. Las dos imágenes
se preservan; la tercera versión almacenada no se marca como inspeccionada.

Búsquedas externas: `"Pushaina" "Chaves" ilustración` y
`"El indio Pushiana" imagen`. Resultados sobre transcripciones y personas
actuales con ese apellido no se convierten en retratos del personaje. No se
incorporó iconografía histórica independiente con atribución comprobada; no
se declara búsqueda exhaustiva.

## Dirección y procedimiento

| Pieza | Acción o símbolo | Tamaño/calidad |
| --- | --- | --- |
| H | Sombra unida a Pushaina se eleva como gallinazo | 1536×864 / high |
| V | Escucha junto a una pared que revela el anillo oculto | 864×1536 / medium |
| S | Un único plato vacío con profundidad interior imposible | 1024×1024 / medium |

Sombra que se vuelve ave, pared desplegada y hambre profunda son traducciones
editoriales, no nuevos episodios atribuidos a la comunidad. La pared no se
abre por un gesto del hombre. El plato no es portal ni objeto ritual.
Se omiten muerte, violencia y prueba sexualizada.

Plan: `content/mitos-visuales/wayuu.pushaina.triptico.v1.json`.
Paquete inmutable:
`content/mitos-visuales/_openai/wayuu/el-indio-pushalna/wayuu-pushaina-triptych-01/`.

Skill imagegen: CLI oficial, API OpenAI autorizada, modelo `gpt-image-2`,
JPEG nativo, `--no-augment`, cuenta ya elegida en `.env`; sólo se verifica
presencia de credencial. Sin subir referencias locales. Los prompts y
solicitudes JSONL se conservan byte a byte. Playwright aporta inspección de
referencias y QA público; Vercel Storage orienta preservación aditiva sobre
la infraestructura existente, sin crear recursos nuevos.

## QA del primer lote

- H01: vínculo sombra–gallinazo legible, pero ave sobredimensionada y casa
  demasiado próxima; conexión entra en área potencial del título. Se conserva
  como descarte y se corrige sólo encuadre/escala y suelo material.
- V01: hombre entero de perfil casi plano, brazos bajos, prenda azul y womu;
  pared conectada revela un aro. Figura ocupa aproximadamente un tercio de
  altura, más de lo pedido, pero habitación domina. Paño que debía envolver
  el aro no se distingue; no cambia el hallazgo. No se afirma reconstrucción
  exacta de la casa ni precisión del trenzado del sombrero.
- S01: plato único vacío con capas descendentes y fondo oscuro; conserva
  lectura simbólica sin reparto, paisaje o ceremonia. Su hondura es una
  metáfora del hambre, no un objeto ancestral.

Duraciones CLI iniciales: H01 78,2 s; V01 33,6 s; S01 40,9 s.
Corrección H: `content/mitos-visuales/wayuu.pushaina.triptico.v1.1-entrada.json`,
paquete `wayuu-pushaina-triptych-02-entrada`. El contenedor local se reconstruyó
y la ruta de Pushaina respondió HTTP 200.

## Selección y cierre

**4 generaciones únicas: 2 H, 1 V, 1 S.** H02 + V01 + S01 seleccionadas.
La segunda horizontal tardó 75,9 s según CLI. Se redujeron casa y ave y se
desplazó la relación completa fuera del área del título. Figura final cerca
de 12% de altura, no exactamente 10%; sombra natural secundaria hacia derecha
coexiste con lámina transformada hacia izquierda. No se inventa otra entidad.
Se conservaron las otras dos piezas y todos los originales/prompts.

Selección: `content/mitos-visuales/_openai/wayuu/el-indio-pushalna/wayuu-pushaina-final-selection/selection.json`.
Auditoría: `content/mitos-visuales/_openai/wayuu/el-indio-pushalna/wayuu-pushaina-final-selection/iteration-audit.json`.
El campo `published: false` en selección describe el instante previo a la
publicación; el recibo posterior es la evidencia de ésta.

Publicado como [El indio Pushaina](https://www.mitosdecolombia.com/mitos/el-indio-pushalna).
Recibo aditivo: `content/mitos-visuales/production/wayuu-2026-09-05/publication-receipts/wayuu-wave-12/el-indio-pushalna.json`.
Se conservaron JPEG nativos y hashes; nueva fila vertical **669**, anterior
**353** intacta. Dos archivos anteriores disponibles y archivo remoto de
historia comprobado. La purga de caché pasó y el texto conserva su SHA.

El primer reporte `verification-wave-12.json` registró `fetch failed` sólo
para HTML. Sin nueva subida, `verification-wave-12-recheck.json` pasó base,
historial, bytes de las tres imágenes nuevas, dos archivos previos, archivo remoto
y HTML público. `browser-review-wave-12.json` registra seis cargas a 1440/390 px,
sin desbordamiento ni errores de consola. Se mantienen advertencias de
precarga CSS. Título no oculta la transformación, y anillo y símbolo siguen
legibles en móvil.

Las 66 pruebas pertinentes pasan; `git diff --check` sin incidencias.
Docker reconstruido y ruta local HTTP 200. No hubo commit, push o despliegue
de código; sí publicación de imágenes sobre los datos públicos.

## Aprendizaje de esta unidad

La escala debe definirse también para el animal y la casa, no sólo para la
persona. Una transformación conectada puede funcionar y aun fallar por su
posición frente al título. Se comprobó el vínculo en el original y en la
portada real, sin aceptar la instrucción del prompt como prueba de resultado.

Campaña: **13/27 mitos, 39/81 imágenes principales**. Quedan **14 mitos**.
Siguiente: El origen del fuego. El hijo del Cóndor también sigue dentro del
alcance pendiente. No se declara cierre de la campaña.
