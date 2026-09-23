# Estado del enriquecimiento · todo el catálogo

**Cierre medido contra Neon el 2026-09-22** con `tablero.mjs --guardar`
(`content/editorial/tablero/tablero-2026-09-22.json`). Las secciones desde la
§1 son la foto del 2026-09-21, antes del cierre; se conservan como registro
de dónde se partió.

El proceso lo gobiernan
[`spec-reescritura-y-fuentes.md`](spec-reescritura-y-fuentes.md) para las
comunidades, [`spec-mestizos-y-mixtos.md`](spec-mestizos-y-mixtos.md) +
[`brief-mestizos-y-mixtos.md`](brief-mestizos-y-mixtos.md) para el bloque
mestizo-mixto y [`spec-cierre-del-catalogo.md`](spec-cierre-del-catalogo.md)
para el cierre.

## 0. El cierre, 2026-09-22/23

**Las 596 fichas tienen los cinco campos redactados con el mismo contrato y
fuentes abiertas.** Ninguna queda abierta. Tablero en
`content/editorial/tablero/tablero-2026-09-23.json`.

| | fichas |
|---|---:|
| **Cerradas** (acta, cinco campos, ≥8 fuentes o `fuentesAgotadas` con piso de 3, cotejo 1:1, auditoría sin bloqueos, `verificar --vivo`) | **555** |
| · comunidades indígenas y afro | 342 |
| · bloque mestizo y mixto | 213 |
| **Bloqueadas con acta, reescritas** | **41** |
| Abiertas | 0 |

Las 342 de comunidad: 322 con ≥8 fuentes y 20 con `fuentesAgotadas` (D15).

**Las 41 bloqueadas** también se reescribieron el 2026-09-23 (decisión del
director: todas al mismo nivel de redacción). Cuentan el relato que ya estaba
publicado, sin añadir nada, y la Historia dice en su primera oración que no
tiene un registro publicado que se pueda consultar y qué se buscó; Versiones y
Similitudes tratan el motivo documentado, con fuentes reales. Siguen
bloqueadas porque su texto no está anclado a una obra: Piedecuesta 27 (los
libros de Valenzuela 2004 y 2009 y de Arenas Mantilla no están en abierto),
Bogotá 2 (López Orozco 2008), Amazonas y ticuna 6 (Rodríguez de Montes 1981,
Solarte Lindo 1980, Hugo Niño 1976), Taik (duplicado), el Sombrerón, la Casa
de la Tradición, la Yesca, el Silbo de Quinunchú y el Hada de los cañaverales.

Ocho bloqueadas se **desbloquearon** al aparecer su texto: el Bus fantasma, el
Mandingas, la Niña de la carta, el Gritón y el Ermitaño iracundo (láminas del
libro de 2004, ficción de autor declarada), Dioses lares (Piedrahita 1688 vía
Izquierdo Gallo), Esperanza en el Oriente (ensayo de Izquierdo Gallo) y la
Mancarita (Arias 1954).

**Lo que queda es del director**, en
[`content/editorial/DECISIONES-cierre.md`](../content/editorial/DECISIONES-cierre.md):
despublicar o no las bloqueadas (D19), títulos propuestos (D17), cajones
dudosos (D18: La Llorona y los Duendes proponen mestizo; Chiles y Cumbal es
mito pasto; Guagua Rayo y Taita Galeras son quillasingas de Jenoy; el Riviel
es afro), el Hada sin comunidad (D1) y las 13 fichas que están en módulo y no
en Neon (D10, D13).

Las secciones §1 a §7 son la foto del 2026-09-21.

---

## 1. La cuenta, de una

Medido con una sola consulta sobre `myths` × `editorial_myths`:

| | fichas | de 596 |
|---|---:|---:|
| **Con los cinco campos** (`mito`, `historia`, `versiones`, `similitudes`, `leccion`) | **431** | 72 % |
| Con **≥ 5 fuentes** en Neon | 450 | 76 % |
| Con **≥ 8 fuentes** (el mínimo del bloque mestizo) | 364 | 61 % |
| **Sin ninguna fuente** | 146 | 24 % |

Las 596 se reparten en **40 comunidades con fichas** (la tabla
`communities` tiene 51 filas; once no tienen ninguna) más **un mito
huérfano**: `el-hada-de-los-canaverales` **no tiene comunidad asignada**.
Tiene región (andina) y tiene los cinco campos, pero no aparece en ningún
recuento por comunidad, ni en el bloque mestizo, ni en ningún ciclo. Es el
único del catálogo en esa situación y hay que ubicarlo.

El reparto grueso:

| | fichas | cinco campos | ≥5 fuentes | sin fuentes |
|---|---:|---:|---:|---:|
| **38 comunidades indígenas y afro** | 342 | 341 | 342 | 0 |
| **Bloque mestizo y mixto** | 253 | 89 | 107 | 146 |
| Huérfano sin comunidad | 1 | 1 | 1 | 0 |

**Todo lo que falta está en el bloque mestizo-mixto.** Las 342 fichas de
comunidad tienen fuentes sin excepción, y sólo una de las 342 (una huitoto)
no tiene los cinco campos.

---

## 2. Lo cerrado · las comunidades indígenas y afro, 342 fichas

Cerradas en las sesiones de julio y del 16 al 19 de septiembre de 2026. El
detalle comunidad por comunidad —qué primario, qué se corrigió, cuántas
obras— está en el §5 de
[`spec-reescritura-y-fuentes.md`](spec-reescritura-y-fuentes.md); aquí va el
resumen.

| comunidad | fichas | cinco campos | ≥8 fuentes |
|---|---:|---:|---:|
| muiscas | 41 | 41 | 38 |
| wayúu | 27 | 27 | 27 |
| nasa-paeces | 26 | 26 | 26 |
| chimila (ette ennaka) | 23 | 23 | 13 |
| huitotos | 23 | **22** | 21 |
| chamí | 22 | 22 | 20 |
| koguis | 20 | 20 | 18 |
| katíos | 19 | 19 | 13 |
| panán | 16 | 16 | 15 |
| andoque | 14 | 14 | 14 |
| u'wa | 11 | 11 | 11 |
| guahibo-sikuani | 10 | 10 | **1** |
| desana | 8 | 8 | **0** |
| misak, tucano, zenú | 7 c/u | 7 | 7 / **0** / 6 |
| barasana, motilón-barí, quillacingas, ticuna | 6 c/u | 6 | **0** / **1** / 6 / **0** |
| wounaan | 5 | 5 | 5 |
| 19 comunidades de 1 a 3 fichas | 33 | 33 | 15 |

**El cierre fue de fondo, no de forma.** En la ronda de septiembre se
reescribieron **298 fichas sobre el texto primario** y se verificaron en las
rutas públicas, en 35 comunidades; las 41 muiscas se habían cerrado en julio
bajo el proceso anterior y su expediente no se reabre. Lo que apareció al
abrir los primarios da la medida de por qué valía la pena: once de las
catorce andoque citaban **la portada de Google Books** de un libro que nadie
había abierto; las veinte kogui no eran de Reichel-Dolmatoff sino de Chaves
1947, y sólo una nombraba a su narrador (ahora lo hacen diecinueve); los
dieciséis slugs panán **eran el índice de un capítulo de tesis**, con sus
erratas incluidas; las repetidas entre fichas bajaron del 61 % al 0,3 % en
andoque y del 43 % al 3 % en katío.

**Lo que queda pendiente aquí, y es técnico, no editorial:**

1. **Muiscas: deriva módulo ↔ Neon.** Sus fuentes viven sólo en Neon; los
   módulos de `editorial/muisca/` no las tienen, así que `verificar` marca
   deriva y un `sync --apply` las borraría sin aviso. Hay que bajarlas al
   módulo.
2. **Una huitoto sin los cinco campos** (23 fichas, 22 completas).
3. **Seis comunidades por debajo del piso de 8 fuentes** en buena parte de
   sus fichas: desana (0 de 8), tucano (0 de 7), barasana (0 de 6), ticuna
   (0 de 6), guahibo-sikuani (1 de 10), motilón-barí (1 de 6). Cumplen el
   mínimo de 5 del proceso de comunidades, no la meta de 8. Es una ronda de
   Fase B, no una reescritura.

---

## 3. El bloque mestizo y mixto · 253 fichas

184 mestizas y 69 mixtas. No son comunidades: son dos cajones
administrativos, sin pueblo, sin territorio y sin corpus cerrado. La unidad
de trabajo es **el ciclo** —un municipio, un recopilador, un libro—, la
prensa local antigua sí cuenta como fuente, el mínimo sube de 5 a 8, y hay
un gate nuevo antes de redactar: **el acta de procedencia**.

Por región, medido:

| cajón | región | fichas | cinco campos | ≥8 fuentes |
|---|---|---:|---:|---:|
| mestizo | andina | 81 | 2 | 2 |
| mestizo | **caribe** | **72** | **72** | **72** |
| mestizo | orinoquía | 19 | 0 | 0 |
| mestizo | pacífico | 9 | 7 | 7 |
| mestizo | varios | 3 | 0 | 0 |
| mixto | andina | 25 | 2 | 0 |
| mixto | amazonas | 23 | 0 | **19** |
| mixto | varios | 8 | 0 | 0 |
| mixto | pacífico | 7 | 6 | 5 |
| mixto | caribe | 6 | 0 | 0 |

Y por estado real del trabajo:

| | fichas | |
|---|---:|---|
| **Cerradas con el proceso completo** | **70** | ciclo `caribe-mestizo-final`, aplicadas y verificadas el 2026-09-21 |
| **Forma cumplida, fondo sin verificar** | 19 | tienen los cinco campos de rondas anteriores, **sin acta, sin cotejo contra primario**: 13 del Pacífico, 4 de la andina, 2 del Caribe |
| Con fuentes pero sin texto | 19 | las mixtas del Amazonas: ≥8 fuentes en Neon y ningún campo editorial |
| Listas en el repo, sin publicar | 22 | Bogotá (14) · vallenato (2) · Santander con acta (8) — ver §4 |
| Bloqueadas y declaradas | 2 | sin registro consultable |
| Con bibliografía levantada, sin redactar | 64 | Piedecuesta restante (33) · llano y río (31) |
| Sin empezar | 57 | Tolima, Antioquia, Caldas, Boyacá, residuales |

**Cuidado con las 19 de «forma cumplida».** Pasan cualquier control
automático —tienen los cinco campos y sus fuentes— y son exactamente el
perfil de lo que este bloque descubrió que falla: el defecto no se ve desde
fuera. No están verificadas contra ningún primario y no deben contarse como
cerradas.

### Lo publicado · `caribe-mestizo-final`, 70 fichas

Aplicado el 2026-09-21 y verificado en las 72 rutas públicas, con respaldo
antes de cada escritura.

| medida | partida | ahora |
|---|---|---|
| oraciones repetidas entre fichas | 86,6 % | **0 %** (0 de 3.981) |
| fuentes | 42 en bloque, 12 de catálogo | **692**, de 8 a 13 por ficha |
| fichas con los cinco campos | 2 de 72 | 70 de 70 |
| narradores nombrados | 0 | los que la fuente da, con día y cinta |
| aperturas distintas | plantilla única | 34 firmas en 70 fichas |

**El subciclo que el módulo llamaba «de Martínez» eran tres obras**, de tres
autores y tres décadas, cada una con su propio límite editorial: Martínez
Fajardo (17, *Cuentos y leyendas de Cartagena*, 1948), **Judith Porto de
González** (13, *Al filo de la leyenda*, 1962, corpus declarado
afrocartagenero) y Otero D'Costa (3, *Leyendas*, 1936). Las 32 restantes
salen de Zapata Olivella, *Tradición oral y conducta en Córdoba* (1972),
incluidas las trece que el módulo daba por «sin fuente primaria localizada».

---

## 4. Lo que está listo y no publicado

### Bogotá · 16 fichas

Actas, relatos y fuentes completos para **14**; repetición 0 %, 115 fuentes,
ninguna vetada. **Dos bloqueadas y dichas** —`la-monja-vidente-y-el-taxista`
y `los-esqueletos-caminantes`— porque su único registro es un libro sin
ejemplar consultable.

Falta: importar al módulo, cotejar, auditar, aplicar y verificar. **Los dos
módulos ya están abiertos** (el bloque compartido de 277 palabras dejó de ser
obligatorio).

### Caribe vallenato · 2 fichas

Ciclo completo: bibliografía, actas, relatos y 23 fuentes donde antes había
Wikipedia, Mapcarta y un PDF en Scribd.

**Pendiente técnico:** no tienen módulo en el repo, y el kit escribe del
módulo a Neon, nunca al revés. Hay que creárselo antes de aplicar.

### Santander · 8 fichas

Actas escritas y en verde, 86 nudos. Falta relato y fuentes.

---

## 5. Decisiones que esperan al director

| # | qué | a cuántas afecta |
|---|---|---|
| 0 | **`el-hada-de-los-canaverales` no tiene comunidad**: es el único mito del catálogo sin asignar. Hay que decidir su cajón | 1 |
| 1 | **El libro de 2008** de Asdrúbal López Orozco no tiene ejemplar consultable, y su índice paginado muestra que sostiene **doce de las dieciséis** fichas bogotanas. Hay ejemplar en Fe y Alegría y probablemente en la Luis Ángel Arango | 12, de las que 2 están bloqueadas |
| 2 | **`la-mancarita` publica otra historia**: el sitio cuenta «La Máncara de San Francisco» y el único primario es la Mancarita de Arias, que no comparte un solo rasgo. Sus tres registros actuales son Scribd y ResearchGate | 1 |
| 3 | **«Villaquirá» no aparece en la fuente** de `la-loca-margarita`: sólo en el titular de una reedición de 2024 | 1 |
| 4 | **El trinche no está en el relato** de `la-bruja-del-trinche` | 1 |
| 5 | **`el-bobo-del-tranvia` no tiene registro del personaje**: «Antonín» aparece cero veces en la tesis que el módulo cita | 1 |
| 6 | **Cuatro fichas de Santander cambian de cajón a «mixto»**, con argumento del propio recopilador en una de ellas | 4 |
| 7 | **`el-tesoro-de-morgan` es raizal** y el catálogo no tiene esa comunidad (comprobado: ninguna de las 51 lo es) | 1 |

Cada una está escrita con tres opciones concretas en el `DECISIONES.md` de su
ciclo.

---

## 6. Lo que este bloque enseñó, y que el spec no preveía

**El defecto no era la plantilla: era la lectura.** La repetición del 86,6 %
se veía desde fuera y era lo que motivó el bloque. Lo que apareció al abrir
los primarios es peor y no se ve sin cotejar:

1. **Faltaban los finales.** En cuatro fichas el resumen conservaba el
   planteamiento y borraba el remate. Como el remate de un cuento jocoso suele
   ser corporal u obsceno, lo publicado era una moraleja abstracta sobre un
   cuento que no existe.
2. **Y luego, lo publicado contradecía a la fuente.** «El viaje al Cielo» es
   un bus que se queda sin gasolina; en «El mocho y el tigre» el cojo gana; la
   abadesa no protege los documentos, los entrega y delata a más de cien
   patriotas; la monja no deja el ramo, se lo arranca a la niña.
3. **Hubo invenciones puras.** Una «Clara» que no existe en ningún texto, una
   flor ofrecida antes de nacer, un curandero anónimo que en la fuente es un
   brujo con nombre.
4. **Y fuentes que se contaban dos y tres veces.** Libro → ficha distrital →
   televisión pública, todas acreditando al mismo libro que nadie ha abierto.

**Cuatro reglas nuevas que salieron de aquí y ya están en el kit:**

- **El gate exige que la cita exista**, no sólo que la haya. Se cotejan las
  citas literales del acta contra el primario extraído, con tolerancia a las
  erratas del OCR. Encontró tres transcripciones mal hechas, y la peor perdía
  un «no» que invertía el sentido de la frase.
- **Ningún campo publicable habla del proyecto.** El §5.4 lo prohibía en el
  Relato; el mismo defecto estaba una capa más abajo, en `historia` y
  `versiones`, en doce de quince fichas.
- **Una obra se identifica por su URL y su título.** Un PDF puede contener
  varias obras —actas de un simposio, una antología que reproduce otro libro—
  y ésas son citas distintas.
- **Un 503 no es una fuente caída.** Es un límite de peticiones, y tratarlo
  como muerta descartaba once fuentes buenas de golpe.

**Y una lección de método que ya evitó dos errores:** antes de declarar que
una fuente no existe, cruzarla contra los primarios que ya están extraídos en
el repo. Dos veces se dio algo por perdido y estaba en la sección «Varias
regiones» del mismo tomo, que no nombra la región que uno busca — tres fichas
del Caribe y «El hombre del farol» en Bogotá. El cruce de los 41 slugs de
Piedecuesta costó veinte minutos y resolvió el primario de ocho.

---

## 7. El orden que sigue

1. **Publicar Bogotá** (14). Todo hecho salvo la cadena de aplicación.
2. **Crear el módulo de las dos vallenatas** y publicarlas.
3. **Terminar Santander**: relato y fuentes de las 8 con primario, y abrir las
   33 restantes, que dependen de los 23 PDF abiertos de su recopilador real
   —que **no es el que da nombre al ciclo**.
4. **Llano y río** (31). Es donde más fichas van a cambiar de cajón: siete de
   las doce amazónicas no sostienen su «mixto», y una repite el caso
   `chimbilaco` —un nombre propio que no existe en ninguna parte.
5. **Las 57 sin empezar**, y las **19 mixtas del Amazonas** que tienen fuentes
   y ningún texto.
6. **Auditar las 19 de «forma cumplida»**: escribirles acta y cotejarlas, o
   declararlas heredadas.
7. **Los tres pendientes técnicos de las comunidades** (§2): la deriva
   muisca, la huitoto incompleta y la ronda de fuentes de las seis comunidades
   por debajo de 8.

**Coste estimado del resto**, al ritmo medido: la bibliografía de lo que falta
es una ronda de agentes; las actas, cuatro o cinco; los relatos, cinco; las
fuentes, siete a diez, que es el cuello de botella porque cada URL se abre.
Del orden de veinte rondas, dos o tres sesiones largas.

**Lo que ya no hay que rehacer:** el kit. Gate del acta con cotejo de citas,
`cotejar.mjs`, las medidas de prosa calibradas, las listas de dominios del
bloque y las cinco disposiciones de módulo que el importador entiende.
