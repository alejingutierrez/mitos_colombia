# Lote 12 Wayuu V3: El incesto

Estado: 8/8 modelos nuevos seleccionados después de investigación, QA y correcciones; 4 modelos aprobados se reutilizan  
Fecha: 2026-09-03  
Mito: `el-incesto`  
Calidad: `medium`  
Modo: texto sin referencias locales, paper craft 3D full bleed

## Regla editorial central

El lote mantiene separados dos episodios registrados en la fuente histórica y
evita convertirlos en una escena de violencia o castigo ejemplarizante:

- en el primero, una hermana sale del encierro y Mareiwa le asigna una
  transformación litoral; la fuente no afirma una segunda petrificación del
  hermano;
- en el segundo, una relación padre-hija asimétrica antecede la muerte de la
  joven y su transformación territorial en el cerro Katetamana.

No se representa sexualidad, embarazo enfatizado, escarnio, autolesión, cuerpo
suspendido, cadáver ni culpabilización visual. El parentesco se reconoce en el
contrato narrativo, no mediante una reconstrucción explícita del abuso.

## Fuentes y alcance

- Milcíades Chaves registra los dos episodios y atribuye a Mareiwa la
  transformación de la hermana en piedra y de la hija en Katetamana. La
  continuidad del hermano no queda resuelta en ese pasaje.
  https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/243/266/1579?inline=1
- Roberto Pineda Giraldo conserva una variante de Katetamana. Su texto, como el
  de Chaves, contiene juicios y generalizaciones de época que no se trasladan a
  la voz editorial ni a la imagen.
  https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/248/272/1634?inline=1
- Dary Marcela Ángel Rodríguez estudia parentesco y relaciones Wayuu. Se usa
  para no reducir el encierro y la transición de la majayura a aislamiento o
  disponibilidad matrimonial; no se presenta como prueba del corte exacto de
  una prenda mítica.
  https://ciesas.repositorioinstitucional.mx/jspui/bitstream/1015/917/1/TE%20A.R.%202019%20Dary%20Marcela%20Angel%20Rodriguez.pdf
- El registro de CLACSO sobre el encierro Wayuu lo contextualiza como rito de
  paso y transmisión entre mujeres. Su alcance es contemporáneo y contextual,
  no una reconstrucción literal de los episodios míticos.
  https://biblioteca-repositorio.clacso.edu.ar/handle/CLACSO/43225

Las fuentes históricas preservan relatos relevantes, pero su lenguaje
victimizante o colonial no se adopta como verdad cultural vigente.

## Corrección del inventario

Antes de producir se detectó que `hermano_litoral` había heredado un segundo
estado `forma_litoral` no afirmado por la fuente. Se corrigió a
`continuidad_no_resuelta`, se registró la auditoría y se mantuvo el denominador
congelado: cambia la semántica del estado, no el número de modelos.

## Denominador

El mito requiere 12 modelos. Cuatro ya estaban aprobados y se reutilizan:

- `mareiwa__presence_model`
- `mareiwa__state_sheet`
- `costa_mar_guajira__environment_model`
- `territorio_alta_guajira__environment_model`

El lote genera exactamente ocho modelos:

| Modelo | Decisión de diseño |
| --- | --- |
| `hermana_litoral__identity_sheet` | joven con manta cerrada verde mar, womu bajo y presencia humana no erotizada |
| `hermana_litoral__state_sheet` | continuidad cromática hacia roca litoral abstracta, sin cuerpo petrificado |
| `hermano_litoral__identity_sheet` | conjunto masculino completo con camisilla, wayuco angosto, si'ira, waireñas y womu |
| `hermano_litoral__state_sheet` | sendero ocluido hacia costa vacía: hace visible el límite de la fuente sin inventar destino |
| `padre_katetamana__identity_sheet` | figura adulta sin emblema, arma, joya ni autoridad heroica |
| `hija_katetamana__identity_sheet` | joven con manta cerrada ocre rojiza y trenza baja, sin marcadores de víctima |
| `hija_katetamana__state_sheet` | eco de color en una geología no humana, sin cuerda, árbol ni cuerpo |
| `cerro_katetamana__spatial_model` | cresta, collado y tres cauces en estratos físicos; sin antropomorfismo ni coordenada inventada |

## Cultura material

- La hermana usa manta/ashein cerrada verde mar, pechera visible sólo en el
  cuello, waireñas y womu bajo. La versión de abrigo abierto fue descartada.
- El hermano usa camisilla cruda, wayuco índigo opaco de dos paneles angostos,
  si'ira ocre, waireñas y womu; identidad y estado conservan el conjunto.
- El padre usa camisa larga carbón violáceo, wayuco arena de dos paneles,
  si'ira, waireñas y womu. No se lo reduce a taparrabo ni torso desnudo.
- La hija usa manta/ashein ocre rojiza cerrada, pechera carbón, waireñas y trenza
  baja continua entre identidad y estado.
- Ninguna persona lleva pintura facial: estos momentos no documentan yonna,
  viaje solar, visita, sueño o ritual con un motivo exacto respaldado.
- No hay kanas, marcas claniles, joyería, símbolos, uniformes o patrones
  inventados.

## Magia e imaginación

La seguridad no aplana el mito:

- una veta verde migra desde la ropa de la hermana hacia una roca litoral y
  conserva identidad sin esculpir un cuerpo en piedra;
- el sendero del hermano desaparece por oclusión entre capas hacia una costa
  vacía, dando forma al silencio documental;
- la hija y Katetamana comparten una capa ocre dentro de la geología, sin
  reconstruir su muerte;
- el cerro se reconoce por una gramática de cresta, collado y cauces, no por un
  rostro o anatomía humana.

## QA de salida

- calidad `medium` y generación desde texto;
- cuatro imágenes `1536x1024` y cuatro `1024x1024`;
- full bleed; nunca base, cartón soporte, mesa, pedestal, marco o estudio;
- paper craft 3D inequívoco con aire, oclusiones, cantos internos y sombras;
- conjuntos Wayuu completos, diferenciados y continuos;
- ninguna sexualidad, violencia, autolesión, embarazo enfatizado, cuerpo
  vulnerado o culpabilización;
- ninguna marca clanil, kana, glifo, pintura facial o símbolo inventado;
- generación, selección, QA, ingestión, canon y publicación permanecen estados
  separados.

## Cierre de producción

Los ocho modelos pasaron QA. Dos se seleccionaron del lote base, cuatro de
`corrections-01` y dos de `corrections-02`. Ocho iteraciones rechazadas se
conservan con causa y SHA-256: manta abierta, pérdida del womu, faja inventada,
wayucos convertidos en falda o shorts, rosetas de agave impropias y ribetes
decorativos sin respaldo.

- Cobertura de `el-incesto`: 12/12 modelos.
- Cobertura acumulada: 109/265 modelos y 12/27 mitos completos.
- Selección: `content/mitos-visuales/_openai/wayuu/biblia-v3-production/wayuu-v3-production-12-el-incesto-medium/selection.json`.
- QA: `content/mitos-visuales/_openai/wayuu/biblia-v3-production/wayuu-v3-production-12-el-incesto-medium/QA.md`.
- Tablero: `output/imagegen/wayuu-v3-production/el-incesto-selected-contact-sheet.jpeg`.
