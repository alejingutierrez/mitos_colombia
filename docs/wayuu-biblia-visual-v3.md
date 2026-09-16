# Biblia visual Wayúu V3 · estado real

**Corte:** 2026-09-04.  
**Estado:** Biblia cerrada con QA; 435/435 modelos seleccionados y 27/27 mitos cubiertos.  
**Generación:** habilitada por lotes narrativos congelados, siempre en `medium`.

Desde el lote 08 rige además una compuerta prospectiva de cultura material:
toda figura humana o criatura humanoide debe comparar conjuntos completos y resolver explícitamente
registro temporal, actividad, ocasión, indumentaria, calzado, accesorios y
pintura facial. Los 60 modelos ya aceptados no se rehacen.

Se leyó el contenido editorial completo de los 27 mitos Wayúu en Neon, no sólo
sus títulos o resúmenes. El snapshot incluye `mito`, `historia`, `versiones` y
`research_notes` y quedó fijado con SHA-256
`6b5b1c5ebdb2524a7524b065d96c6d33ad6f5694db239a0d722ded8485f435f5`.

## Resultado de la excavación

| categoría | entidades |
|---|---:|
| personajes | 85 |
| colectivos | 61 |
| objetos | 64 |
| animales | 52 |
| lugares | 43 |
| criaturas | 20 |
| deidades o fuerzas | 15 |
| fenómenos | 53 |
| plantas | 19 |
| arquitectura | 15 |
| paisajes | 4 |
| **total** | **431** |

De las 431 entidades:

- 357 necesitan modelo propio;
- 55 quedan embebidas en otra ficha con justificación explícita;
- 19 quedan excluidas con razón documentada;
- 78 de las requeridas tienen varios estados o varios contratos visuales;
- el denominador reconciliado es 435 activos de modelo.

El detalle por mito, incluido cada nombre, rol, estado y decisión visual, está
en `docs/wayuu-biblia-visual-v3-inventario.md`.

## Qué pasó con las 58 imágenes anteriores

No se borraron. Se reclasificaron como activos heredados pendientes de
reauditoría:

- cuatro candidatos de cimientos territoriales;
- 27 tableros o anclas narrativas;
- 27 reglas de magia.

La V2 demostró dirección visual, magia situada, materialidad y muchas buenas
decisiones de seguridad. No demostró una Biblia exhaustiva porque había fijado
de antemano un ancla y una regla de magia por mito. Una escena de José Juan, por
ejemplo, no cubre automáticamente a su madre, Juramía, Jujía, los peones, las
jóvenes, la hija de Jujía, las serpientes, el caballo y los tres espacios del
relato.

Por eso V3 separa cobertura de diseño y cobertura de producción. Los 357
requerimientos de entidad ya tienen contratos, pero un activo sólo cuenta como
producido después de generación, inspección visual, selección con SHA-256 y QA.
Una promoción no es administrativa: exige mapear el activo, asignar su
finalidad, completar contrato y vistas, y superar QA de identidad.

## Decisiones sensibles ya conservadas

La autorización editorial anterior sigue vigente bajo las restricciones
acordadas: producir con investigación disponible, sin violencia o sexualidad
explícitas, sin anatomía cultural inventada presentada como hecho, sin
ceremonias restringidas reconstruidas y sin copiar o inventar kanas o marcas
claniles.

V3 añade tres exclusiones explícitas para no convertir dudas en imágenes:

- marcas claniles de Arachí sin diseños y autorización específicos;
- una segunda presencia no sustentada en *Las wanülüs y el valle de la muerte*;
- un “tercer viajero” compuesto para *Los dominios de Juyá*, porque el texto
  editorial reúne episodios de Ulépala y del viudo de otra versión.

Otros papeles menores no desaparecen: aparecen como `embedded`, con la entidad
que los cubre y el motivo.

## Corrección prospectiva: cultura material y pintura facial

La prohibición de inventar kanas o marcas claniles se estaba interpretando con
demasiada cautela. Evitó falsificaciones, pero también empujó varios personajes
hacia ropa lisa y neutra aunque sí existe evidencia de indumentaria y pintura
facial Wayuu. La corrección no consiste en vestir ni pintar a todas las figuras
de la misma manera. Consiste en decidir por persona, estado y momento.

Desde el lote 08, cada modelo humano debe registrar y justificar cuatro
dimensiones visibles antes de preparar el prompt:

- `attire`: prenda, corte, volumen, material y relación con el momento;
- `footwear`: presencia, tipo y pertinencia territorial;
- `accessories`: sólo los funcionales o narrativamente respaldados;
- `face_paint`: inclusión u omisión, función, material, ocasión y fuente.

Esas cuatro dimensiones ya no se evalúan aisladas. Antes debe declararse el
registro temporal, la actividad y la ocasión; luego se comparan al menos dos
conjuntos completos respaldados y se escoge uno con sus capas legibles. Camisa,
camiseta, camisilla, gorra o pantalón pueden coexistir históricamente con
wayuco, si'ira, waireñas, sombrero o bolsas funcionales. «Más tradicional» no
significa menos ropa, torso descubierto ni mayor acumulación de accesorios.

La investigación institucional y la obra de Ramón Paz Ipuana permiten trabajar
con estas tipologías, sin volverlas obligatorias ni atemporales:

- la manta o `wayuushe'in/ashein` como vestido tradicional femenino; la manta
  tradicional se distingue de desarrollos bordados o pintados posteriores;
- el wayuco masculino sostenido por la faja `si'ira`, con manta larga de los
  ancianos en la caracterización consultada;
- repertorios masculinos más amplios: `She'etébé`, `Kotin` y
  `Asheinpalajanaa`; camisa, franela o saco; y coberturas de cabeza como
  `Kuratse`, `Kotsi` o `Tekialijiu`, cada una limitada a la edad, el rango y la
  ocasión descritos por su fuente;
- las waireñas para mujeres y hombres, con diferencias de acabado que deben
  usarse sólo cuando la fuente y el personaje lo justifiquen;
- el womu como sombrero tradicional de uso posible para mujeres y hombres, no
  como accesorio automático;
- la pintura facial o `acheepa/süchepa` para contextos diferenciados. La
  pintura de yonna, visita, sueño, viaje, protección solar y funeraria no es
  intercambiable.

Regla de diseño: si una fuente no respalda el motivo facial exacto y su
ocasión, se puede representar una aplicación funcional documentada —por
ejemplo paipai protector en un viaje al sol—, pero no inventar una espiral,
línea o símbolo con supuesto significado. La ausencia también debe justificarse;
ya no se acepta ropa neutra o rostro sin pintura por defecto.

La investigación, matriz de evidencia, conflictos terminológicos y aplicación
a los lotes 08 y 09 están documentados en
`docs/wayuu-indumentaria-y-pintura-v3.md`.

La compuerta ejecutable está en
`editorial/wayuu/material-culture-v3.mjs`. El preparador bloquea cualquier
personaje, colectivo o criatura de apariencia humana de los lotes 08 en adelante que no lleve su
decisión y sus fuentes. Los marcadores aprobados pasan además al control de
continuidad del personaje.

Desde el lote 10, los colectivos humanos tienen una segunda compuerta: deben
declarar variación interna por edad, rol, actividad y ocasión. Dos colores de un
mismo corte no cuentan como dos atuendos, y un grupo masculino repetido en
wayuco o torso descubierto queda bloqueado antes de generar.

Desde el lote 15, la indumentaria deja además de depender de palabras libres:
cada figura humana referencia un repertorio tipológico verificado. El
`Wusi/Aichee` puede ser capa base, pero no completa por sí solo un perfil
masculino; el preflight exige una camisa/franela, manta de cuerpo entero,
envolvente sustancial u otra capa superior contextual, además de componentes
funcionales legibles. Esta corrección incorpora la sección de indumentaria
masculina de Ramón Paz Ipuana y evita que «tradicional» vuelva a significar
menos ropa.

Desde el lote 17 se añade una compuerta de silueta. La investigación confirmó
que el vestuario masculino no puede organizarse visualmente alrededor de una
sola pieza inferior: camisa o franela, `She'etébé/She'ewe`, `Kotin`,
`Asheinpalajanaa`, saco, faja, calzado, sombrero y cargas funcionales forman
conjuntos distintos según persona y ocasión. Cada ficha debe declarar cómo se
lee la prenda dominante de frente y de perfil o espalda. Nombrarla en el prompt
ya no basta; si desaparece o se funde en una sola pieza inferior, el QA rechaza
la imagen. También se retiró `loincloth/taparrabo` como ancla negativa de los
prompts.

## Aprobaciones y producción

El 2026-09-03 el propietario editorial aprobó empezar el proceso sobre las 237
entidades iniciales. Las 27 bitácoras y el denominador inicial de 265 activos
quedaron congelados. La reauditoría primaria de Pushaina añadió 6 activos y la
separación de las tres versiones de *El origen del fuego* añadió otros 25. La
relectura primaria de *La sed de los civilizados* retiró tres añadidos
editoriales sin fuente y dos activos requeridos, corrigió las referencias hacia
Katetamana y Mareiwa y dejó el denominador en 294. La reauditoría de *El pequeño
indio Kosina* añadió once entidades, convirtió a los dueños de carrera en
colectivo propio, corrigió la casa no descrita y llevó el denominador a 306.
La reauditoría de *El viaje del más allá* lo llevó a 329; la lectura completa
de Ulepala separó sus variantes y lo llevó a 385. Guanuru recuperó paciente,
familia y pasos sin huellas como cuatro activos omitidos y dejó el denominador
en 389. En esa misma pasada se reconcilió una deriva aritmética previa: el
archivo tenía 352 entidades antes de Guanuru, no 354; después de añadir tres
entidades reales contiene 355. La relectura directa de la página 310 de Chaves
contrajo después el episodio de Puró: retiró seis adiciones editoriales, añadió
cinco entidades requeridas correctas y dos desenlaces sensibles excluidos. El
denominador quedó entonces en 356 entidades, 316 requeridas y 388 activos. La
reauditoría completa de *Umaralá* recuperó a Jumajule, a la paciente como
persona, al hombre de Parashi con su transformación, tres reglas mágicas y los
elementos materiales del viaje; además corrigió que los imitadores pertenecen
a Jururiana. Ese corte quedó en 371 entidades, 321 requeridas y 395 activos. La
reauditoría de La Chama añadió después siete contratos; la de Worunka recuperó
ocho adicionales y dejó el corte en 401 entidades, 336 requeridas y 410
activos. Serranías añadió once activos recuperados y quedó cerrado en 421. La
reauditoría completa de Waleker corrigió las falsas tías y el padre sin fuente,
recuperó personajes, lugares, transformaciones y prendas explícitas y llevó el
denominador vigente a 431 entidades, 357 requeridas y 435 activos. Cada cambio
conserva su delta y la evidencia.

Ya existen 435 contratos V3 independientes de los 58 activos heredados. Se
produjeron once muestras desde texto, una por categoría, en `medium`. El piloto
validó personas sin placeholders, presencias sin anatomía inventada, morfología
animal y vegetal, colectivos, objetos, espacios, profundidad por capas y una
regla de magia material.

### Piloto aprobado

El piloto produjo once modelos desde texto, sin referencias locales:

- `jose_juan__identity_sheet`: candidato aprobado de dirección; primer personaje
  humano completo y no-placeholder. El vestuario liso queda registrado como
  interpretación editorial no canónica y no se reutilizará como uniforme.
- `juramia__identity_sheet`: una salida fue rechazada porque se leía como
  águila calva. Una tanda nueva corrigió cabeza y cuello desnudos, collar blanco,
  cuerpo masivo y parches alares de cóndor andino; la corrección queda como
  selección.
- Las nueve categorías restantes validaron presencia sin cuerpo inventado,
  colectivo, animal, objeto, planta, arquitectura, lugar, paisaje y fenómeno.
  Caballo, ranchería y fuego necesitaron correcciones puntuales por símbolo,
  materialidad y patrones inventados.

Estado: 11 de 11 modelos seleccionados y aprobados. La selección y los cuatro
rechazos se registran en
`content/mitos-visuales/_openai/wayuu/biblia-v3/pilot-selection.json`.

### Lote 01 · El hijo del Cóndor

El primer lote narrativo añadió 13 modelos y reutilizó cinco selecciones del
piloto. El mito queda cubierto con 18/18 modelos:

- identidades y estados de José Juan, su madre, Juramía y Jujía;
- dos peones, dos jóvenes alijuna, hija de Jujía, tres serpientes y caballo;
- cueva de Juramía, roza, dominio subterráneo, ranchería y territorio de Alta
  Guajira.

Cuatro primeras versiones fueron rechazadas y corregidas: discontinuidad de
cabello de Jujía, arquitectura subterránea inventada en la hija y el dominio,
y materialidad casi fotográfica en la roza. No se sobrescribieron; sus hashes y
causas se conservaron. El detalle está en
`content/mitos-visuales/_openai/wayuu/biblia-v3-production/wayuu-v3-production-01-el-hijo-del-condor-medium/QA.md`.

### Producción acumulada

| corte | nuevos aceptados | cobertura acumulada | mito completo | correcciones |
|---|---:|---:|---|---:|
| piloto multicategoría | 11 | 11/265 | — | 4 |
| lote 01 · El hijo del Cóndor | 13 | 24/265 | 18/18 | 4 |
| lote 02 · Arámai | 7 | 31/265 | 10/10 | 6 |
| lote 03 · El indio Kuriruputá | 5 | 36/265 | 9/9 | 1 |
| lote 04 · El guerrero Ipuana | 6 | 42/265 | 9/9 | 4 |
| lote 05 · El indio Jaichuasay | 5 | 47/265 | 7/7 | 4 |
| lote 06 · Los dos hermanos | 7 | **54/265** | 11/11 | 1 |
| lote 07 · Jirairay | 6 | **60/265** | 10/10 | 1 |
| lote 08 · Las Wanurü y el valle de la muerte | 7 | **67/265** | 10/10 | 8 |
| lote 09 · Los mellizos transformadores | 16 | **83/265** | 22/22 | 6 |
| lote 10 · Maleiwa | 10 | **93/265** | 20/20 | 4 |
| lote 11 · La creación Wayuu | 8 | **101/265** | 21/21 | 7 |
| lote 12 · El incesto | 8 | **109/265** | 12/12 | 8 |
| lote 13 · Jururiana y la gran lluvia | 8 | **117/265** | 10/10 | 5 |
| reauditoría primaria · Pushaina | — | **117/271** | — | — |
| lote 14 · El indio Pushaina | 15 | **132/271** | 17/17 | 4 |
| reauditoría · tres versiones del fuego | — | **132/296** | — | — |
| lote 15 · El origen del fuego | 32 | **164/296** | 39/39 | 18 |
| reauditoría primaria · La sed | — | **164/294** | — | — |
| lote 16 · La sed de los forasteros | 6 | **170/294** | 10/10 | 3 |
| reauditoría primaria · Kosina | — | **170/306** | — | — |
| lote 17 · El pequeño indio Kosina | 25 | **195/306** | 29/29 | 2 |
| reauditoría completa · Viaje del más allá | — | **195/329** | — | — |
| lote 18 · El viaje del más allá | 44 | **239/329** | 54/54 | 4 |
| reauditoría completa · Ulepala | — | **239/385** | — | — |
| lote 19 · Ulepala | 67 | **306/385** | 75/75 | 28 |
| reauditoría etnográfica · Guanuru | — | **306/389** | — | — |
| lote 20 · Guanuru | 13 | **319/389** | 18/18 | 11 |
| reauditoría primaria · La majayura de Puró | — | **319/388** | — | — |
| lote 21 · La majayura de Puró | 8 | **327/388** | 10/10 | 4 |
| reauditoría primaria completa · Umaralá | — | **327/395** | — | — |
| lote 22 · Umaralá | 16 netos (17 selecciones, una sustitución) | **343/395** | 23/23 | 15 |
| reauditoría primaria · La Chama | — | **343/402** | — | — |
| lote 23 · La Chama | 17 | **360/402** | 24/24 | 8 |
| reauditoría primaria completa · La India Worunka | — | **360/410** | — | — |
| lote 24 · La India Worunka | 18 | **378/410** | 23/23 | 4 |
| reauditoría primaria completa · Serranías de La Guajira | — | **378/421** | — | — |
| lote 25 · Serranías de La Guajira | 29 | **407/421** | 43/43 | 22 iteraciones descartadas |
| reauditoría completa · Waleker | — | **407/435** | — | — |
| lote 26 · Waleker, el origen del tejido | 28 | **435/435** | 42/42 propios y compartidos | 29 iteraciones descartadas |

Estado verificable al corte: **435 modelos seleccionados, 0 pendientes y 27/27
mitos con cobertura completa**. El manifiesto acumulativo recalcula hashes,
rechaza duplicados accidentales, admite sustituciones declaradas con su fuente
anterior y deriva los mitos completos desde el denominador real:
`content/mitos-visuales/_openai/wayuu/biblia-v3-production/accepted-selection.json`.

Cada lote tiene `jobs.json`, snapshot congelado, prompts inmutables, `QA.md` y
`selection.json`. Las primeras versiones rechazadas no se sobrescriben:

- lote 02: identidad/estado, presencia de Wanurü, fenómeno y jagüey necesitaron
  correcciones de continuidad, ambigüedad o arquitectura;
- lote 03: la identidad de Kuriruputá se ajustó a la paleta de sus estados;
- lote 04: se corrigieron mangas, manchas de ropa, una banda diagonal inventada
  y la materialidad del arco;
- lote 05: se retiró arquitectura genérica, se fijó cabello y vestuario entre
  estados, se reconstruyó el umbral en papel y se corrigió escala/agua de
  Macuira;
- lote 06: se retiraron chozas redondas y techos cónicos de la identidad de la
  mula;
- lote 07: se retiró un remate arquitectónico en zigzag de la identidad del
  paciente; canto, tabaco y bienes quedaron separados y no instructivos.
- lote 08: la investigación de indumentaria se rehízo para trabajar con
  conjuntos completos; se rechazaron túnicas genéricas, torso descubierto como
  atajo, wayucos convertidos en falda, extras al fondo y un dibujo inventado en
  una wo'olu antes de aceptar a los dos hermanos.
- lote 21: se rechazaron zapatos cerrados en la majayura, flora genérica en los
  dos modelos humanos y materialidad de roca real en Papach; la corrección
  conserva waireñas abiertas, conjuntos masculinos completos, cardones sin
  brazos ni rosetas y estratos de papel inequívocos.
- lote 23: la fuente principal de La Chama se corrigió a Pineda Giraldo (1947)
  y se recuperaron sus cinco formas, el hijo, la familia, animales, carga y
  cueva-casa. Ocho primeras salidas se rechazaron por saguaros o rosetas,
  deriva de identidad y Wayuushein convertidas en túnica corta o cobija. Las
  correcciones conservan cuerpos completamente vestidos, prendas largas con
  mangas, magia material legible y cero soporte exterior visible.
- lote 24: la versión de Juancito Iguarán, traducida por Roberto Iguarán y
  publicada por Chaves, recuperó Worunka, tres aves diferenciadas, piedra,
  transformación corporal no explícita, cambio de alianzas, viajeros, frutos,
  tumas, semillas, siembra, comunidad, bebida, arroyo y clima. Todos los
  humanos usan conjuntos Wayuu completos y variados. Cuatro salidas de la
  regla climática se rechazaron por costuras de panel, objetos huecos, color
  marfil o siete tumas; la selección final conserva dos grupos de tres tumas
  coral dentro de un único relieve profundo y full bleed.
- lote 25: la marcha completa de Serranías quedó cubierta por 29 selecciones,
  incluidas nueve identidades o estados humanos con Kemiisa, Kotin,
  Asheinpalajanaa, saco, faja, calzado y cargas diferenciadas. Se conservaron
  22 iteraciones descartadas por conteos, flora, continuidad, vestuario o
  materialidad. La selección final cierra 43/43 modelos propios y compartidos.
- lote 26: Waleker cerró los 28 activos pendientes después de corregir roles,
  recuperar personajes, reglas mágicas y prendas nombradas. Se descartaron 29
  salidas por ropa o calzado incompletos, cantidades, joyería añadida, flora
  genérica y pérdida de claridad. El fenómeno de legado se normalizó para no
  repetir dentro de una sola imagen los inventarios completos de Atía,
  Kanaspi y Maawüi: sus fichas conservan los conteos; la regla muestra un
  representante por precedente y tres pares de manos.
- lote 09: la compuerta se amplió a criaturas humanoides y se aplicaron
  conjuntos completos a Manna, Kalamantuunay, los mellizos y las porciones
  humanas de los Hombres-Tigre. Se corrigieron pantalones genéricos, un Juyá
  convertido en libros, materialidad fotográfica, paipai como pañuelo o franja
  geométrica, embarazo exagerado y una omisión del paipai de viaje.
- lote 10: Maleiwa quedó cubierto sin convertir a Mareiwa, Mma, Juyá o Pulowi
  en cuerpos inventados. Los Primeros Wayuu recibieron variación interna real
  por edad, rol, actividad y ocasión; se corrigieron atuendos repetidos,
  wayucos con lectura de falda y arquitectura genérica.
- lote 11: La creación Wayuu mantuvo separadas las variantes de cavidad, barro,
  Arachí y primeros fogones. Se rechazaron materialidad fotográfica, barro con
  forma de recipiente, escaleras y vegetación en roseta impropia.
- lote 12: El incesto separó los dos episodios, evitó sexualidad, autolesión y
  culpabilización visual, y corrigió el estado del hermano a continuidad no
  resuelta. Ocho salidas se rechazaron por mantas abiertas, prendas masculinas
  con lectura de falda o shorts, pérdida de continuidad y flora genérica.
- lote 13: Jururiana corrigió `animales oscuros` a los chivos negros que nombra
  Chaves y separó el chubasco primario de las ampliaciones editoriales actuales.
  Jururiana lleva Kotin y paipai solar uniforme; Warir, camisa y
  Asheinpalajanaa. Se rechazaron pintura facial en bandas, wayuco con lectura de
  falda, flora tipo agave o saguaro y una primera transición de huellas poco
  legible.
- lote 14: Pushaina volvió a la transcripción primaria y separó cuerpo, voz
  invisible propia y cinco formas animales. Se añadieron su hija, casa y
  cementerios al denominador; se rechazaron wayuco convertido en falda,
  mapurito convertido en armadillo, si'ira como ligas de muslo y flora de
  lectura saguaro/agave.
- lote 15: las tres versiones de *El origen del fuego* quedaron separadas en
  Siki/Makutulain, Junuunay y Kasemashi. Se amplió el repertorio masculino para
  que Wusi/Aichee nunca funcione como traje universal: Kemiisa, Kotin, faja,
  calzado y tocado contextual se revisan como componentes distintos. Se
  conservaron dieciocho descartes por túnicas genéricas, pantalón añadido,
  patrones inventados, fauna incorrecta, ocho piedras en lugar de siete,
  paisaje genérico y pérdida del Caujaro.
- lote 16: la relectura de Chaves retiró viajeros Wayuu, familias, jagüey y
  recipientes que la fuente no nombra. Se produjeron seis activos nuevos y se
  reutilizaron Katetamana, Mareiwa y el territorio amplio. Tres primeras
  versiones se rechazaron por flora genérica y formas pétreas monumentales o
  apiladas; las seis selecciones finales conservan escala narrativa y
  materialidad de papel por capas.
- lote 17: `Kosina/Kusina` quedó como identidad histórica y relacional no
  resuelta, no como sinónimo de Wayuu. Se añadieron jefe, colectivos, burros,
  familia equina, objetos y espacios omitidos, y se retiró la ranchería Wayuu
  de una casa no descrita. Dos salidas se rechazaron: una por arco/instrumento
  ilegibles y otra por cueva fotográfica. Las correcciones conservaron trajes
  completos, materialidad de papel y profundidad real.

Los tableros visibles de avance están en:

- `output/imagegen/wayuu-v3-production/el-hijo-del-condor-selected-contact-sheet.jpeg`;
- `output/imagegen/wayuu-v3-production/aramai-selected-contact-sheet.jpeg`;
- `output/imagegen/wayuu-v3-production/el-indio-kuriruputa-selected-contact-sheet.jpeg`;
- `output/imagegen/wayuu-v3-production/el-indio-guerrero-ipuana-selected-contact-sheet.jpeg`;
- `output/imagegen/wayuu-v3-production/el-indio-jaichuasay-selected-contact-sheet.jpeg`;
- `output/imagegen/wayuu-v3-production/los-dos-hermanos-selected-contact-sheet.jpeg`.
- `output/imagegen/wayuu-v3-production/jirairay-selected-contact-sheet.jpeg`.
- `output/imagegen/wayuu-v3-production/las-wanulus-y-el-valle-de-la-muerte-selected-contact-sheet.jpeg`.
- `output/imagegen/wayuu-v3-production/los-mellizos-transformadores-selected-contact-sheet.jpeg`.
- `output/imagegen/wayuu-v3-production/maleiwa-selected-contact-sheet.jpeg`.
- `output/imagegen/wayuu-v3-production/creacion-wayuu-selected-contact-sheet.jpeg`.
- `output/imagegen/wayuu-v3-production/el-incesto-selected-contact-sheet.jpeg`.
- `output/imagegen/wayuu-v3-production/el-indio-jururiana-selected-contact-sheet.jpeg`.
- `output/imagegen/wayuu-v3-production/el-indio-pushaina-selected-contact-sheet.jpeg`.
- `output/imagegen/wayuu-v3-production/el-origen-del-fuego-selected-contact-sheet.jpeg`.
- `output/imagegen/wayuu-v3-production/la-sed-de-los-forasteros-selected-contact-sheet.jpeg`.
- `output/imagegen/wayuu-v3-production/el-pequeno-indio-kosina-selected-contact-sheet.jpeg`.
- `output/imagegen/wayuu-v3-production/el-viaje-del-mas-alla-selected-contact-sheet.jpeg`.
- `output/imagegen/wayuu-v3-production/ulepala-selected-contact-sheet.jpeg`.
- `output/imagegen/wayuu-v3-production/guanuru-selected-contact-sheet.jpeg`.
- `output/imagegen/wayuu-v3-production/la-majayura-puro-selected-contact-sheet.jpeg`.
- `output/imagegen/wayuu-v3-production/umarala-batch22-selected-contact-sheet.jpeg`.
- `output/imagegen/wayuu-v3-production/la-chama-batch23-selected-contact-sheet.jpeg`.
- `output/imagegen/wayuu-v3-production/la-india-worunka-batch24-selected-contact-sheet.jpeg`.
- `output/imagegen/wayuu-v3-production/serranias-de-la-guajira-batch25-selected-contact-sheet.jpeg`.
- `output/imagegen/wayuu-v3-production/waleker-batch26-selected-contact-sheet.jpeg`.
- `output/imagegen/wayuu-v3-production/wayuu-biblia-v3-complete-contact-sheet.jpeg`.

### Pipeline operativo obligatorio

1. Elegir un mito desde el manifiesto acumulado y calcular sus modelos
   requeridos, compartidos ya aceptados y faltantes reales.
2. Leer su bitácora de extracción: personajes nombrados, roles sin nombre,
   animales/criaturas, objetos/plantas, lugares/arquitectura, estados y
   variantes. Una entidad omitida bloquea diseño.
3. Contrastar elementos territoriales, materiales o rituales con fuentes
   primarias o institucionales cuando el contrato interno no sea suficiente.
4. Para cada figura humana, ejecutar la pasada de cultura material: declarar
   registro temporal, actividad y ocasión; comparar mínimo dos conjuntos
   completos; escoger y justificar uno; resolver vestuario, calzado, accesorios
   y pintura facial; citar fuentes y congelar marcadores de continuidad. Desde
   el lote 17 se agrega el contrato de silueta frontal, lateral o posterior y
   una regla explícita de rechazo si el generador colapsa las capas.
5. Redactar dirección específica por modelo: identidad antes de magia; cuerpo
   completo para individuos; estado separado para transformación; presencia
   sin cuerpo cuando no existe anatomía documentada.
   En reglas compuestas, no repetir inventarios completos que ya tienen ficha:
   usar un representante explícito de cada precedente y dejar los conteos en
   su activo propietario.
6. Congelar lote, modelos, calidad, tamaño, prompts, snapshot y SHA-256. Un
   modelo fuera de la tanda bloquea la preparación.
7. Ejecutar preflight `generate`. Todo lote de Biblia se produce en `medium`,
   con `gpt-image-2`; la regla `high` corresponde únicamente al horizontal de
   los trípticos, no a la Biblia.
8. Generar desde texto. No se incorporan referencias locales salvo que una
   corrección de continuidad resulte realmente imposible sin ellas y quede
   documentada. Hasta el cierre del lote 26 ninguna generación ejecutada usó
   referencias locales. Una edición localizada de Waleker se preparó para
   corregir un conteo, pero no se ejecutó porque el entorno no autorizó enviar
   ese archivo específico; se resolvió con regeneración nueva desde texto.
9. Inspeccionar cada archivo por identidad, anatomía, conteo, materialidad,
   profundidad, full bleed, indumentaria, pintura facial, símbolos inventados,
   arquitectura genérica, continuidad y contenido sensible. Éxito del API no
   equivale a `PASS`.
10. Regenerar sólo los fallos en una revisión nueva; conservar ruta, hash y causa
   de cada descarte. Nunca sobrescribir el original.
11. Construir tablero del mito completo, verificar hashes, registrar selección
    y reconstruir el manifiesto acumulado. No ingerir ni publicar desde este
    pipeline.

### Fuentes externas ya aplicadas

- Parques Nacionales Naturales de Colombia, ficha y Régimen Especial de Manejo
  de Macuira: ecotono de matorral espinoso, bosque seco, bosque de galería,
  agua localizada y bosque nublado de baja altitud.
- Artesanías de Colombia, *Referencial Nacional de Tejeduría Wayuu* (2024):
  cuerpo del chinchorro, cabeceras, cabuyeras e hicos. La investigación permite
  modelar estructura; no autoriza copiar o inventar kanas.
- Ministerio de Cultura, *Caracterización del pueblo Wayuu*: manta/ashein,
  wayuco, si'ira, waireñas y elementos específicos de la yonna.
- Artesanías de Colombia, *Tejeduría del pueblo indígena Wayuu* (2016): manta
  tradicional femenina y waireñas; distingue la manta tradicional de variantes
  decoradas posteriores.
- Artesanías de Colombia, *Comunidad Wayuu* y *Womu Wayuu*: faja masculina,
  tipos de mochila, manta funeraria y sombrero tradicional con usos distintos.
- Artesanías de Colombia, *Legados ancestrales*: pintura facial de mujeres y
  hombres con pigmentos ligados a contextos culturales.
- ICANH, *Aspectos de la magia en la Guajira*: paipai o achiote para protección
  solar, viaje y visita; se trata como fuente histórica contextual, no como
  descripción atemporal de toda persona Wayuu.
- Ramón Paz Ipuana, *Ale'eya*, tomo II: Wusi/Aichee, S'ira, Kemiisa,
  Piiraneeru, She'etébé, Kotin, Asheinpalajanaa, calzado, paños y sombreros se
  conservan como repertorios diferenciados por contexto, no como traje único.
- José Enrique Finol, *Mito y cultura guajira*: mantiene separadas las tres
  versiones de Siki/Makutulain, Junuunay y Kasemashi aplicadas en el lote 15.
- Milcíades Chaves, *La majayura* en *Mitos, leyendas y cuentos de la Guajira*,
  p. 310: Puró, la joven bien vestida, hombres anónimos, desorientación,
  secretos, piedra blanca móvil y Papach como piedra; también fija todo lo que
  la síntesis editorial había añadido sin respaldo.
- Milcíades Chaves, *Umaralá* en *Mitos, leyendas y cuentos de la Guajira*,
  pp. 321–325: John Paurala/Umaralá, su tía piache, Jumajule, Jarara, la
  paciente, capote y maraca, maguey, oferta de oro y mula, dos botellas, tres
  viajeros, vestuario descrito y transformación del hombre de Parashi.
- Roberto Pineda Giraldo, *La chama, un mito guajiro*, *Revista de Folklore*
  núm. 2 (1947), pp. 113–126: cinco formas de La Chama, el hombre cuidador de
  caballos, hijo, familia, persecución, carga transformada y cueva-casa. Esta
  fuente corrige la atribución anterior a Chaves y el sentido de la persecución.
- Eugenia Villa Posse, *Mitos y leyendas de Colombia*: apoyo secundario para
  localizar la caracterización atribuida a Pineda; no funciona como entrevista
  oral independiente ni autoriza añadir episodios.
- Milcíades Chaves, «La India Worunka» en *Mitos, leyendas y cuentos de la
  Guajira*: versión atribuida a Juancito Iguarán y traducida por Roberto
  Iguarán; fija Worunka, piedra, aves, alianzas, viajeros, frutos, tumas,
  semillas, cosecha, bebida, sequía y lluvia.
- Weildler Guerra Curvelo, tesis doctoral sobre ontología Wayuu: separa las
  variantes Borunka, Wootka, Worunka y Walunkáa y evita fusionar parentescos,
  lugares, actores y desenlaces incompatibles.
- Corpoguajira, documento técnico de fauna: registra Sangre Toro como
  `Ramphocelus sp.` y permite conservar la identidad regional sin cerrar una
  especie no demostrada.
- Milcíades Chaves, «Serranías de la Guajira»: versión atribuida a Juancito
  Iguarán y traducida por Roberto Iguarán; fija nueve posiciones de la marcha,
  el retiro del mar, las plantas nombradas, las aves semilleras y la
  organización de la vida sin autorizar marcas claniles o especies inventadas.
- Ramón Paz Ipuana, «Wokoloonat / Waleker» en *Mitos, leyendas y cuentos
  guajiros*: identifica a Irunúu, sus tres hermanas, Uyaaliwa/Outshi, Tool,
  Kulami'a, los servidores, Atia, Kanaspi, Maawüi y Sese; además nombra equipo
  de caza y un sistema completo de prendas masculinas. La continuidad textil
  se contrasta con *Hilos en el desierto* del ICANH y *Wale Keru* de Artesanías
  de Colombia/BanRep.

Los preflight actuales deben producir exactamente este resultado:

- `research`: `PASS`;
- `inventory`: `PASS`;
- `design`: `PASS` con 435 contratos y 357 entidades cubiertas;
- `pilot`: `PASS`;
- `generate`: `PASS` para la tanda explícita congelada.
- `complete`: `PASS` con 435/435 selecciones, hashes verificados y 27/27 mitos.

La etapa `complete` está cerrada para la Biblia visual V3. Este cierre prueba
cobertura, selección, QA y continuidad interna; no implica ingestión, canon
comunitario ni publicación.
