# Yucuna y yagua: cuatro fichas escritas desde cero · 2026-09-19

Cubre `kanuma`, `el-nacimiento-de-los-matapi` y `el-origen-de-las-frutas`
(comunidad `yucuna`, módulo `editorial/yucuna`) y `yagua` (comunidad `yaguas`,
módulo `editorial/yagua`). Los cuatro JSON de reescritura están en
`content/editorial/<comunidad>/reescritura-2026-09-19/<slug>.json` y las fuentes
estructuradas en `content/editorial/<comunidad>/fuentes-2026-09-19/<slug>.json`.
No se escribió en Neon, no se tocó ningún `.mjs`, no se ejecutó ningún script de
aplicar, y no se usó la API de OpenAI para nada: la investigación fue búsqueda
web, descarga directa y OCR local con el motor de visión del sistema.

## 1. Lo que estaba publicado

Los cuatro textos de Neon vienen del mismo molde: prosa florida en el Relato y
capas de análisis genéricas. Las cuatro Similitudes remiten a la mitología
griega —Prometeo en tres de ellas, más Loki, Pangu y Perséfone—; ninguna nombra
un paralelo amazónico. La Historia de `el-nacimiento-de-los-matapi` dice
literalmente «Por ahora no tenemos tan clara la historia de este mito». Ninguna
ficha nombra a un narrador, a un recopilador, a un río ni a una fecha.

Además hay dos errores de fondo, no de estilo:

- **`el-origen-de-las-frutas` no es un mito yucuna.** El texto publicado es «El
  origen de las frutas» de *Libro al Viento* 44 (Idartes), atribuido allí sólo a
  «Putumayo» y sin narrador: Monalla Jurama, Monalla Tirisa, Cullo Buinayma,
  Monilla Amena, Monalla Okudo. Es el ciclo uitoto-muinane de Moniya Amena.
  Se verificó abriendo el PDF de la antología.
- **`yagua` no es un mito.** Es una descripción del pueblo —origen desde Tupana,
  los «Jahuannos hijos del agua», un primer hombre llamado Ja, curaca y consejo
  de ancianos, guerras con «caníbales boras», el sacrificio de Iiñi en el fuego,
  el rito de pubertad de Petita, una doctrina de «pureza del clan»— sin relato
  y sin fuente que la sostenga.

## 2. Lo que se consiguió y se leyó entero

| Obra | Qué es | Cómo se leyó |
|---|---|---|
| Herrera Ángel 1975, «Kanuma: un mito de los Yukuna Matapí», RCA vol. 18, pp. 387-416 | registro primario | PDF de ICANH, 18 páginas escaneadas, OCR completo |
| Herrera Ángel 1976, «El nacimiento de los Matapí», RCA vol. 20, pp. 203-280 | registro primario | dos PDF de ICANH (41 páginas), OCR completo |
| van der Hammen 1992, *El manejo del mundo*, Tropenbos | monografía | PDF con capa de texto, 1,2 MB de texto |
| Chaumeil y Chaumeil 1978, «Los mellizos y la Lupuna», *Amazonía Peruana* II-3 | registro primario | PDF del CAAAP, texto íntegro |
| Powlison, *La mitología yagua*, ILV, CCP 25, 2.ª ed. 2008 | compendio mitográfico | 148 páginas escaneadas, OCR completo |
| Ministerio de Cultura de Colombia, «Ñihamwo (Yagua)» | informe institucional | PDF, texto |
| Idartes, *Mitos de creación*, Libro al Viento 44 | antología | PDF, texto (sólo para documentar el texto viejo) |

Los PDF y los volcados de texto quedan en `busqueda-2026-09-19/` de cada
comunidad. Se borraron los PNG intermedios del OCR.

El PDF de Powlison no se puede descargar de `sil.org`: el servidor devuelve un
desafío de Cloudflare. Se leyó la copia del mismo archivo guardada por el
Internet Archive. La URL canónica que se cita es la ficha de SIL Perú.

## 3. Narradores con nombre

Esto es lo que más faltaba y es lo que más cambió.

- **Horacio Matapi**, 48 años, octubre de 1974, río Mirití. Narró «El nacimiento
  de los Matapí» a Leonor Herrera y firmó su relato al terminarlo: «este cuento
  que yo oí cuando estaba niño y contó para mí mi padre […] Mi padre llamaba
  Wepána Matapi. Mi madre era Wa'ahiru Yukuna». Ese colofón está impreso en la
  página 277 del artículo y no estaba en ninguna parte del sitio.
- **Mario Matapi**, La Pedrera, 27 de enero de 2005: «Historia de Kanumá», cinco
  horas, 67 páginas de transcripción, en el corpus yucuna de la colección
  Pangloss del CNRS, grabado por Laurent Fontaine. El mismo corpus registra a
  **Milciades Yucuna**, **Arturo Je'rúriwa**, **Edilberto Yucuna**, **Kewají
  Yucuna**, **Bonifacio Matapi**, **José Yepes Yucuna**, **Fermín Je'rúriwa**,
  **Norberto Yucuna**, **José Luis Yucuna** y **Jesús Matapi**, con fecha y
  duración por relato. Es el inventario de narradores yucuna más completo que
  hay en línea.
- **A. Sarko**, río Loreto Yacu, y **Alberto Prohaño**, quebrada Yurura, octubre
  de 1975: los dos narradores yagua de Chaumeil. Prohaño dibujó además el
  gráfico del mundo con forma de lupuna derribada.
- **Laureano Mozombite**, Yarinacocha, febrero de 1960: la versión que Powlison
  traduce entera, la quinta de diecisiete que transcribió. Powlison da también
  edad, clan, lugar de nacimiento y trayectoria de **Luzmina Silva**, **Jacinto
  Acipali**, **doña Agripina de Núñez**, **Rufino Macahuachi** y **Antonio
  Mozombite**.

El narrador de Kanumá (1975) sigue sin nombre: Herrera lo llama «mi informante».
En el artículo del año siguiente agradece a Horacio Matapi como informante, en
el mismo río y en el mismo periodo. Es plausible que sea el mismo, ella no lo
dice, y no se afirma en ninguna ficha.

## 4. Decisiones que cambian el sitio

### 4.1 `yagua` cambia de título y de asunto

Nuevo título propuesto: **«Los mellizos y el árbol del agua»**. El relato es el
ciclo de los mellizos míticos encadenado con el de la lupuna: la matanza, la
abuela que recoge al niño y a la placenta, el pífano arrebatado al padre muerto,
los clanes llamados uno por uno, la venganza, y después el abuelo que raciona el
agua, el picaflor que descubre la llave del árbol, los alacranes y la caída del
árbol convertido en el río y en los peces.

Es el único ciclo yagua de origen con dos registros primarios independientes y
narradores con nombre. Chaumeil dice expresamente que los dos mitos pueden
contarse por separado o encadenarse; Powlison los pone dentro de un mismo ciclo.
Encadenarlos es decisión editorial y queda declarado en `dudas`.

De los nombres del texto viejo, sólo **Há** («agua», el primer Ñihamwo venido de
Nawanchi) aparece en una fuente: la cuenta de ATICOYA recogida por el Ministerio
de Cultura. Va en `versiones` como cuenta de origen distinta, atribuida, y no
fundida con el ciclo de los mellizos. **Tupana** es un nombre tupí-guaraní de
circulación amplia en la Amazonía y no aparece en ninguna fuente yagua
consultada. **Iiñi**, **Petita** y **Ya-Tuján** no están ni en Powlison ni en
Chaumeil: se cayeron.

### 4.2 `el-origen-de-las-frutas` cambia de relato, no de comunidad

Se escribió el tramo de las frutas del ciclo de Kanumá: el ñame y la primera
olla, la chagra abierta con la macana, la gente piña y la gente chontaduro que
entran a la maloca con flauta, olla y rayador y bailan antes de quedar
convertidas en fruta, la guacamaya que queda azul, la coca nacida del hermano, y
el guacure. Está en Herrera 1975 (secciones III a VII) y en van der Hammen 1992
(versión de Puerto Córdoba), y el resumen público de la grabación de Mario
Matapi termina igual. La frase que justifica el título está en el original:
«Esta mujer hizo todas las frutas. Si Kanumá no hubiera cogido esta mujer no
había frutas».

No existe un mito yucuna titulado «el origen de las frutas» como narración
aparte. Esta ficha y la de Kanumá son dos cortes de la misma recitación,
separados donde Herrera separó sus propias secciones: `kanuma` va hasta la
captura de He'echúmeru, `el-origen-de-las-frutas` empieza cuando ella entra a la
maloca. Comparten fuentes y está declarado en `dudas` de las dos.

**La alternativa que no se tomó**: conservar el relato uitoto-muinane de Moniya
Amena y mover la ficha a una comunidad uitoto. Queda a decisión editorial. Lo
que no se podía era dejar un relato del Putumayo publicado como yucuna.

## 5. Hallazgos que corrigen los borradores del módulo

Los borradores de `definitions.mjs` (nunca publicados) sirvieron de punto de
partida y traían claves de fuentes útiles. Estos puntos no se sostuvieron:

| Borrador decía | La fuente dice |
|---|---|
| «diecisiete secciones» en el nacimiento de los Matapí | la introducción dice «dos partes y 16 capítulos» y los impresos van de I a XVIII; el artículo abre con una fe de erratas que toca justo esa página |
| «Upichiya aparece como el nombre con que los Matapí se reconocen» | en Herrera aparece una sola vez, en boca del enemigo Kerámoa, con la glosa del narrador «Kerámoa puso nombre a nosotros»; van der Hammen lo da como nombre de una división matapí con derecho a recitar su origen |
| «al muchacho lo llamaron Wihimi» | correcto, y verificado: nació bajo un árbol *wiri* |
| «Ñamatu o Lyamátuna» | la grafía impresa es **Iyamátuna** (nombre colectivo, plural en la partícula *-na*); «Lyamátuna» es una lectura equivocada de la I mayúscula del escaneo, y es la que está publicada hoy en el sitio |
| «Ndanu y Mêna» (yagua) | Chaumeil escribe **ndano** y **mena**; Powlison, **Hermano Mayor** y **Placenta**. La grafía del borrador no se halló en ninguna de las dos |
| Powlison 1993 | el libro se fecha a sí mismo: 1.ª ed. castellana 1995, 2.ª ed. 2008, traducida del original inglés de Dallas |
| Chaumeil 1994 «Los Yagua» por ficha de FLACSO | se reemplazó por Chaumeil y Chaumeil 1978, que es el registro primario y está íntegro en línea |
| «La parole générative» de «Jean-Pierre» Jacopin | el autor es **Pierre-Yves** Jacopin; la tesis es de Neuchâtel, 1981, y no se localizó copia libre. Se usó su «Habitat et territoire yukuna» (JSA 61, 1972) sólo como contexto territorial |

Dos comprobaciones de higiene:

- La página de la ONIC sobre los yucuna responde 200 pero devuelve la portada de
  la ONIC, sin contenido yucuna. No se usó. (Coincide con lo que ya estaba
  anotado en memoria sobre la ONIC.)
- AZICATCH (La Chorrera), que venía en las pistas del encargo para yagua, es una
  organización uitoto del Putumayo. No se usó.

## 6. Contradicciones que quedaron abiertas, no fundidas

- **Quién transforma, en el ciclo yagua.** Powlison: la mayoría de sus
  narradores hacen del menor, Placenta, el que se transforma y crea los clanes.
  Chaumeil: en todas sus versiones es el mayor, ndano, y el menor sólo se
  transforma cuando el otro le sopla. Los dos recopiladores se citan y se
  contradicen. Va en `versiones`, con quién dice cada cosa.
- **Quién ofendió, en el nacimiento de los Matapí.** Herrera (versión matapí de
  Horacio Matapi): la gente de Ka'amari pasa con el yuruparí entre las mujeres
  de Himuri. Van der Hammen (memoria kamejeya, es decir yukuna, de Puerto
  Córdoba): es el hermano menor de Kajmari quien va donde la otra división, los
  murerúa, durante una exhibición de yuruparí, y muere por eso. Mismos nombres,
  ofensa invertida y final distinto: victoria en una, incorporación en la otra.
- **El abuelo yagua.** Caronu, identificado con el creador, en Powlison; krora,
  guardián avaro del agua y las semillas y rara vez asimilado al creador, en
  Chaumeil.
- **La hermana de Kanumá.** He'echúmeru, madre de las pirañas, en Herrera;
  Mairero, la mamá del pescado, en van der Hammen.

## 7. Vecindad declarada

- El corpus yagua usable es **peruano**: Loreto Yacu (1975-1976) y Yarinacocha /
  Catalán (1960). En Colombia el pueblo está documentado (Ministerio de Cultura,
  Gallego 2011 sobre La Libertad, Ramos 2021 sobre la vitalidad de la lengua),
  pero no se localizó una versión colombiana completa del ciclo. Chaumeil se
  publicó en Lima traducido del francés; Powlison, del inglés. Está declarado en
  `dudas` de la ficha y dicho en `historia`.
- Los paralelos que entran en Similitudes están sostenidos por una fuente
  citada: la versión tanimuka de von Hildebrand (RCA 18, 1975) para Kanumá y
  para el nacimiento de los Matapí; la comparación de van der Hammen con makuna,
  tanimuka y barasana; el ciclo uitoto-muinane de Moniya Amena publicado por
  Urbina para el origen de las frutas; y, para yagua, la síntesis de cuarenta
  incidentes del mito sudamericano de mellizos que arma Powlison y su nota sobre
  los amuesha. Ninguno se presenta como creencia propia.

## 8. Contrato

Los cinco campos de las cuatro fichas están dentro de rango, con conteo real:

| slug | mito | historia | versiones | similitudes | lección |
|---|---|---|---|---|---|
| kanuma | 581 | 338 | 231 | 240 | 17 |
| el-nacimiento-de-los-matapi | 535 | 306 | 287 | 241 | 16 |
| el-origen-de-las-frutas | 557 | 327 | 247 | 245 | 16 |
| yagua | 639 | 313 | 289 | 243 | 16 |

Ninguna lección lleva nombre propio ni orden moral. Ningún Relato lleva aparato
crítico dentro ni declara carencia. Ninguna de las fórmulas prohibidas aparece
en los campos que se publican; el validador de forma se corrió sobre los cuatro
antes de escribir los archivos.
