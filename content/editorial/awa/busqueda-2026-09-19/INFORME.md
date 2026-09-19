# Informe de investigación y reescritura — Pacífico sur y Chocó

**Fecha:** 2026-09-19
**Alcance:** 5 fichas en 3 comunidades — `awa` (2), `eperara-siapidara` (2), `embera` (1).
**Entregables:** un JSON de reescritura por mito en `content/editorial/<módulo>/reescritura-2026-09-19/<slug>.json` y un JSON de fuentes estructuradas en `content/editorial/<módulo>/fuentes-2026-09-19/<slug>.json`.
**Restricciones cumplidas:** cero llamadas a la API de OpenAI. Toda la investigación se hizo con búsqueda y descarga web, y con extracción de texto local (`pdftotext`) sobre los PDF originales.

---

## 1. Qué se hizo

Se descargaron y se extrajeron a texto **17 documentos** (15 PDF más 2 páginas HTML de texto completo) y se leyeron directamente los pasajes que sostienen cada relato, en lugar de confiar en resúmenes. Eso permitió:

- nombrar a **quién narra** y a **quién recoge** en cada versión, con fecha y lugar cuando la fuente los da;
- detectar **una atribución equivocada** que arrastraban las fichas awá;
- descubrir **una fuente intermedia** que ninguna ficha citaba y que es la verdadera recopiladora del texto más difundido del origen awá;
- encontrar **tres paralelos documentados nuevos** que reemplazan comparaciones genéricas;
- documentar **una inversión de papeles** entre dos colecciones que reencuadra por completo el problema editorial de la ficha emberá.

### Documentos verificados (abiertos y leídos, no sólo consultados)

| # | Fuente | URL | Estado |
|---|---|---|---|
| 1 | Arcos Meza 2018, tesis doctoral, U. de Nariño | sired.udenar.edu.co/7875/1/92632.pdf | OK, 744 KB de texto |
| 2 | Mora Pedreros 2012, maestría en Etnoliteratura, U. de Nariño | sired.udenar.edu.co/732/1/90666.pdf | OK |
| 3 | Sinsajoa Mambuscay 2022, maestría, U. de Nariño | sired.udenar.edu.co/8175/1/2022306.pdf | OK, 684 KB |
| 4 | Plan de Vida Resguardo Pialapí Pueblo Viejo 2021 | reservalaplanada.com | OK, 113 pp. |
| 5 | Gualti 3, Pialapí / U. de Nariño / Humboldt | reservalaplanada.com | OK |
| 6 | Botero Villegas 2011, Gazeta de Antropología 27(2) | gazeta-antropologia.es | OK |
| 7 | ACIESNA, Plan de Vida Eperara 2005 | centrodocumental.corape.org.ec | OK, 56 pp. |
| 8 | ONIC, Documento madre de Leyes de Origen 2023 | smt-onic.com | OK, 234 pp. |
| 9 | Carrasco 2010, Cuadernos de Antropología PUCE | cuadernosdeantropologia-puce.edu.ec | OK |
| 10 | ACIESNA / Minjusticia 2020 | minjusticia.gov.co | OK, 9 pp. |
| 11 | Artesanías de Colombia 2017, *Guapi: Filigrana* | artesaniasdecolombia.com.co | OK |
| 12 | Sanabria Diago y Argueta Villamar 2015, *Etnobiología* 13(2) | revistaetnobiologia.mx/…/76/74 | OK (el PDF está en `/76/74`, no en `/76`) |
| 13 | Vasco Uribe 1986, reseña, Boletín Museo del Oro | publicaciones.banrepcultural.org | OK, 2 pp. |
| 14 | Pardo Rojas 1987, *Regionalización de indígenas Chocó* | publicaciones.banrepcultural.org | OK |
| 15 | Chaves Ch. 1945, *Mitos, tradiciones y cuentos de los indios Chamí* | publicaciones.icanh.gov.co/…/download/235/257/1568 | OK (ver nota técnica) |
| 16 | Ministerio de Cultura, *Caracterización del pueblo Embera-Dóbida* | mng.mincultura.gov.co | OK, 11 pp. |
| 17 | Odilia Dogiramá / Pardo, «Los Burumia», relato 19 | pueblosoriginarios.com/textos/embera/burumia.html | OK, texto íntegro |

**Nota técnica:** la página de catálogo del ICANH (`/catalog/book/235`) y la de visualización (`/catalog/view/235/257/1568`) devuelven HTML. El PDF sólo se obtiene en `/catalog/download/235/257/1568`. Lo mismo ocurre con *Etnobiología*: la vista de artículo es HTML y el PDF está un nivel más abajo.

### URLs retiradas

| URL | Módulo | Razón |
|---|---|---|
| `mitosyleyendasawa.blogspot.com/2015/11/…` | awa | Blog. Prohibido por el encargo. Su contenido coincide con material ya documentado en las tesis de la U. de Nariño, de modo que no se pierde nada. |
| `repository.iom.int/handle/20.500.11788/394` | awa | Ficha de catálogo institucional, sin texto consultable. Consecuencia: la atribución a Pedro Fidencio Nastacuaz no pudo verificarse (ver § 2.2). |
| `books.google.com/books/about/Los_embera_y_los_cuna…` | embera | Entrada de catálogo de Google Books, sin texto. |
| `onic.org.co/pueblos` | embera | Índice general de pueblos, sin contenido específico sobre Emberá Dóbida. |

`colecciones.icanh.gov.co/articulos/pueblos/EMBERA.php` se conservó pero rebajado: abre y distingue Dóbida / Eperara Siapidara de Chamí / Katío, pero es una puerta de entrada a una colección de objetos, no un texto etnográfico. Se cita sólo para esa distinción.

---

## 2. Awá — dos fichas, dos registros distintos

### 2.1 El error de atribución que arrastraba la ficha de la barbacha

La ficha publicada decía que Arcos atribuye la versión de la barbacha «a una entrevista realizada en 2007». **No es así.** En el texto de Arcos:

- la **barbacha** lleva la firma `(P. Pai, entrevista. 2014, Abril 30)`;
- el **armadillo** lleva `(D.Pai 1, entrevista. 2007, Octubre 19)`.

La fecha de 2007 pertenecía a la otra ficha. Corregido en ambas.

### 2.2 La recopiladora que faltaba: María Clara Llano Restrepo

Mora Pedreros (2012) **no recogió** el relato de la barbacha: lo reproduce, y su nota al pie 87 dice de dónde:

> LLANO RESTREPO, María Clara. *La ley de la Montaña*. Informe para el plan de ordenamiento cultural y ambiental del territorio indígena Awá. Municipios de Barbacoas y Tumaco, Nariño, Colombia. Documento elaborado para la Unidad Indígena del Pueblo Awá-UNIPA en convenio con Critical Ecosystem Partnership Fund-CEPF. 2005, p. 29.

Es decir: la versión más difundida de La Barbacha —la que usó UNIPA para su ordenamiento territorial y la que este catálogo venía publicando— la recogió una investigadora contratada dentro de un convenio de conservación ambiental en 2005. Eso es exactamente el tipo de dato que el encargo pedía («comunidad, río, resguardo, año, recopilador, publicación») y que ninguna ficha tenía. **El informe de Llano no se localizó en línea**; queda anotado en `dudas`.

Dato relacionado: la fórmula «los awá somos hijos de la montaña; nuestros padres son dos barbachas, una blanca y una negra» Mora la atribuye a **Gabriel Bisbicus**, presidente de UNIPA (2009), remitiéndola al *Mandato del Pueblo Awá* (UNIPA, 2011, p. 12), y reaparece casi literal en el Plan de Vida de Pialapí. La ficha anterior la atribuía a Pedro Fidencio Nastacuaz vía el plan del Putumayo, atribución que **no se pudo verificar** porque el enlace de la OIM es sólo catálogo.

### 2.3 Narradores nombrados en Sinsajoa 2022

El anexo A de Sinsajoa («Mayores, mayoras y sabedores») permite descodificar los códigos de cita. Confirmados:

- **`Cánticus, E. 1` = Eduardo Cánticus**, mayor del Resguardo El Gran Sábalo (entrevistas del 3 y del 5 de junio de 2022). Es el narrador de la barbacha y de una de las versiones del armadillo.
- **`Pai, A.` = Alberto Pai**, mayor curandero del Resguardo Gran Rosario (23 de junio de 2022).
- **`Cruz, M.` = María Cruz Moreno**, profesora del Resguardo Inda Sabaleta (5 de junio de 2022). Suya es la versión del armadillo con la hormiga culona y el pago de *una arroba*.
- **`García, S.` = Santiago García**, mayor del Resguardo Sábalo (13 de abril de 2022).
- `Cánticus, O.` aparece en el cuerpo del trabajo pero no en ese anexo: nombra a los dos hijos de la primera pareja (*painkul* y *Pachu*). Queda con menos respaldo y así se anotó.

El trabajo de campo de Arcos, en cambio, está en el **cabildo de Chimbagal**, vereda del mismo nombre en **Barbacoas**, formado por familias venidas del resguardo de Cuambi Yaslambí y en trámite de reconocimiento. Eso hace que las dos fichas awá tengan registros territoriales distintos y comprobables.

### 2.4 Anclaje geográfico nuevo

Sinsajoa recoge de Eduardo Cánticus que el río **Chatanalpí** «está en Altaquer abajo en Nembi, donde surgió el origen del hombre Awá». Es la primera ubicación concreta del lugar del relato en todo el expediente. No se contrastó contra cartografía oficial y así queda anotado.

### 2.5 La contradicción del cangrejo — y por qué no se funde

Tres versiones, tres desenlaces incompatibles:

| Fuente | Qué pasa con el cangrejo | Qué pasa con el agua |
|---|---|---|
| Arcos 2018 (P. Pai) | La mujer lo persigue, lo saca de la cueva y **se lo come** | «esa quebrada seca quedó» |
| Llano 2005 vía Mora 2012 | La mujer **ordena al hombre** cogerlo en Chatanalpí | «La quebrada se secó» |
| Sinsajoa 2022 (E. Cánticus) | Aparece un **hombre alto**: «yo soy el hombre de cangrejo, soy el dueño del agua» | Anuncia que mañana **sí va a haber agua** |

En dos versiones el agua se pierde; en la tercera llega. La ficha publicada decía «las versiones difieren» *dentro del relato*. Ahora el `mito` sigue una sola línea (la del texto awapit de Arcos) y la divergencia está en `versiones`, con quién dice cada cosa.

### 2.6 Lo que el relato del armadillo había perdido

La ficha publicada suavizaba el mecanismo central. En el texto awapit de Arcos:

- la gente del mundo de abajo **no tiene ano** — por eso sólo aspira el vapor. El dibujo de los niños de la escuela Encajonado que Arcos reproduce rotula ese mundo como el de «los que alimenta el humo que no tiene ano»;
- un hombre chiquito prueba a comer por la boca «y como no habían tenido culo, se murió»;
- la gente de abajo **se niega** a llevarlos a la cueva por donde cayeron;
- la mujer le advierte al hermano que **no tiene vagina**; él insiste, muere, y ella lo saca hecho carbón y lo barre diciendo que se quemó; **un mes después** las hormigas lo sacan arrastrando «como un insecto»;
- la mata de rascadera del mundo de abajo se llama **Pulgande**.

Sin el ano no hay relato: es lo que explica la comida de vapor, la muerte del hombre chiquito y la muerte del hermano. Restituido.

### 2.7 Paralelo nuevo y verificable para el armadillo

Botero (2011) llama a los habitantes del mundo de abajo **«tapaculos» o «pilmeas»**. En la cosmogonía **eperara siapidaara**, documentada por ACIESNA ante el Ministerio de Justicia y por Carrasco citando a ACIESNA-ACIESCA-OZBESCAC (1997), el tercer mundo es el de los **«tápanos» (seres sin ano, mito del Biripoto)**.

Dos pueblos vecinos del Pacífico sur, con lenguas distintas, nombran a los habitantes del mundo inferior **por lo que les falta**, no por dónde viven. Es un paralelo documentado en ambos corpus, no una semejanza temática genérica. Se declara explícitamente que son pueblos distintos y que el parecido léxico no prueba parentesco (regla 9).

### 2.8 Paralelo nuevo para la barbacha

Arcos documenta el árbol **wantɨra** o guandera (*Clusia flaviflora*), «árboles que crecen juntos»: en la adultez deja colgar raíces aéreas desde las ramas hasta tocar el suelo, y donde tocan brotan árboles hijos. Es **el mismo movimiento** del relato, en los mismos bosques de niebla, y el propio Arcos lo señala. Sustituye a la comparación genérica con «relatos donde la humanidad nace de una materia del territorio».

---

## 3. Eperara Siapidaara — el aparato sale del relato

### 3.1 El problema señalado en el diagnóstico, resuelto

La ficha `origen-del-pueblo-eperara` tenía dentro del campo `mito` frases como «una gran playa que **el relato identifica** con Pizarro», «los grupos que **la versión de Fabriciano Obispo** nombra como…» y un párrafo final que hablaba de «**esta página**». Todo eso se movió a `historia` y a `versiones`. El `mito` es ahora relato puro y sigue el texto de ACIESNA 2005 de principio a fin, incluidos el diluvio, la iguana con las marcas del agua, la pareja convertida en piedra, el chicao que vuelve con una hoja y la escalera de oro.

### 3.2 Correcciones de atribución

- **Fabriciano Obispo estaba muerto al publicarse el Plan de Vida**: el documento lo encabeza «Versión del compañero Fabriciano Obispo **(qdep)**». La ficha lo trataba como autor vivo sin matiz.
- **«El árbol del agua» NO está atribuido a Obispo en el Plan de Vida.** Aparece en el capítulo «¿Cómo concebimos nuestro territorio?», con el rótulo neutro «Relato de la mitología Eperara», **sin narrador**, a diferencia del mito de origen, que en el mismo documento sí lo lleva. La atribución a Obispo viene **sólo** de la publicación bilingüe de 2019. La ficha publicada afirmaba lo contrario. Corregido.
- **La ONIC no copia del Plan de Vida.** Su nota remite a *Hernández, E. (comp.) (2004). Naturaleza y territorio. Cosmovisión, sistemas productivos y medicina tradicional Eperara Siapidaara. Bogotá: ACIESNA, p. 18*. Eso explica por qué su versión difiere en detalles concretos, y es una fuente que ninguna ficha citaba. No se localizó en línea (anotado en `dudas`).
- **Artesanías de Colombia (2017) no es un testimonio independiente**: copia el texto de ACIESNA 2005 y lo cita como tal. Ahora se dice así en `historia`.

### 3.3 Las divergencias, ordenadas

| Elemento | ACIESNA 2005 (Obispo) | ONIC 2023 (vía Hernández 2004) |
|---|---|---|
| Consejo de la madre | «que no fuera a odiar a la gente» | «si alguien no obedece tus consejos, no los castigues» |
| Preparación | estacas puntiagudas + tripa de palma | **figuras talladas** |
| Disposición | «en hilera» | **tres hileras** |
| Llamado | arrodillarse, orar, **cuatro golpes** con rejo de yaré | **gritar tres veces**, sin rejo |
| Color | no se menciona | **todos nacen negros**; el color llega después, en una laguna de agua bendita |
| Los cinco grupos | Siapidaara, Sitarapidara, Nukhipidaara, Nonamapidaara, Werrepidara | Siapidara, **Nobitapidara**, Werrepidara, **Nonamaara**, **Sitapidara** |

### 3.4 Paralelo interno fuerte: el baño que reparte los colores

El episodio del baño que explica el color de la piel según el orden de llegada aparece **dos veces, en dos países y en dos registros independientes**: como *laguna de agua bendita* en la ONIC (Colombia) y como *piscina* en Carrasco (Ecuador), con el mismo desenlace —los últimos sólo alcanzan a mojarse manos y pies. Es un paralelo documentado real, no una afirmación sobre «motivos universales».

### 3.5 El mejor hallazgo del lote: el katsa tɨ awá

Para `Pania Pak'uru` el catálogo comparaba con «relatos amazónicos y del Pacífico» en abstracto y con un relato wounaan sobre salar el mar que no tenía fuente verificada. Se reemplazó por dos paralelos leídos y fechados, ambos awá:

**a) El katsa tɨ.** Arcos 2018, de D. Pai 1, entrevista del 17 de octubre de 2011:

> «Antes no había comida, pero había un árbol grande que tenía de toda comida, yucas, papas, ají, piña, maíz, frijol, todo, pero estaba en manos de la vieja y ella era egoísta, no compartía su secreto. Cuando se pudo tumbar aquel árbol la vida cambió, porque la gente aprendió a sembrar…»

Un árbol contiene un bien escaso → lo retiene una dueña mezquina → hay que derribarlo → al caer el bien se reparte y cambia el régimen del mundo. Es la estructura completa de Pania Pak'uru, en el pueblo vecino.

**b) La amparengua.** Sinsajoa 2022, de Eduardo Cánticus (5 de junio de 2022): la *amparengua*, dueña del árbol grande, impedía tumbarlo y bajaba con una espada a matar gente, hasta que la hicieron resbalar por una escalera untada de brea. Otra vez: dueña hostil del árbol, y caída sólo por acción organizada.

### 3.6 Etimología confirmada

Sanabria y Argueta (2015), trabajando con eperara del **resguardo de Guanguí** (Timbiquí y López de Micay), registran el vocabulario del territorio sagrado: **pania = agua, pakuru = plantas**. *Pania Pak'uru* es literalmente «la planta del agua». Ninguna ficha lo decía.

### 3.7 Otros narradores nombrados que el expediente no tenía

- **Lina Quiroz** (2001) y **Belarmino Chitipúa** (enero de 2003), en Carrasco.
- **Leticia Pauma**, Tachi Nawe de la comunidad Sia (Carrasco).
- **Pola Malaga** (mayora) y **Mauricio Quintero** (mayor), en el documento de ACIESNA ante Minjusticia.
- **Francisco Chiripúa Tovar** y **Florín Mejía Obispo**, en el Plan de Vida, sobre el poblamiento de los ríos Satinga y Sanquianga (no sobre el mito; anotado como tal).
- La genealogía de las Tachi Naweera: **Dura → Isiderio Dura → las tres hijas de Isiderio** (Carrasco); ACIESNA confirma que hoy son **tres**, que las escoge Tachi Akhore por sueños y que viven en la ribera del **río Saija**.

---

## 4. Emberá — el hallazgo que reencuadra la ficha

### 4.1 El nombre «burumía» aparece en otra colección, con los papeles invertidos

Este es el resultado más importante del lote. Chaves (1945), en la nota comparativa a su relato *Bibidigomia*, cita al padre Rochereau (recogido entre los **Katío**):

> «Un bibidi cogió de prisioneros a **dos burumías** y los volvieron eunucos para que engordaran para comérselos. Uno de ellos escapó, reunió un ejército de burumías a atacar a los Bibidi, pero ya se habían comido al otro burumía. **Una vieja Bibidi** indignada por la mala ración que le había tocado en suerte […] **ayudó para que los burumías triunfasen** de los Bibidi. Estos quedaron aniquilados.»

Compárese con el relato de Odilia Dogiramá:

| | Rochereau, vía Chaves 1945 (Katío) | Odilia Dogiramá, 1984 (Alto Baudó) |
|---|---|---|
| Captores | Bibidi | **Burumiá** |
| Cautivos | **dos burumías** | dos niños emberá |
| Engorde de cautivos | sí (eunucos) | sí (chiquero + mata de primitivo) |
| Quién ayuda a escapar | una **vieja Bibidi** (del bando captor) | una **vieja cautiva** |
| Desenlace | los Bibidi quedan aniquilados | los Burumiá quedan aniquilados, menos una casa |

**Mismo armazón, papeles intercambiados.** Esto significa dos cosas para el catálogo:

1. La fusión Burumia + Bibidí que hacía la página anterior **no salió de la nada**: los dos nombres sí coexisten en la bibliografía. Lo que estaba mal era resolver la coexistencia como si fuera una genealogía.
2. Ahora hay una razón *positiva* para separarlos, y no sólo la ausencia de pruebas: **en una fuente los burumías son las víctimas**. Una coincidencia de nombre en posiciones opuestas del conflicto no es una filiación.

### 4.2 Pardo dejó el problema abierto por escrito

Pardo (1987) escribe que los emberá llaman **Jurá** a los Cuna y los waunana **Juranán**, que los emberá reconocen sin ambigüedad a los Cuna contemporáneos, y que existen además relatos de guerra contra gentes con gentilicios propios: **«Burumiás, Bibidícomias, Carautas»** (remitiendo a Betania 1964, Santa Teresa 1959, Vargas 1982 y Pardo 1986). No decide qué son. La ficha ahora tampoco, y dice quién dejó la pregunta abierta.

Pardo también cita, del mismo volumen de 1984 (pp. 205-217), «una guerra de emberaes confederados de Pepé, Munguidó, Quito y Atrato contra Jurás del río Dubasa […] y de cómo los persiguieron hasta Panamá». Ese es el ciclo de los Jurá, y el **río Dubasa aparece en ambos relatos**: es un paralelo interno con anclaje fluvial, no una impresión.

### 4.3 El volumen, por fin descrito con precisión

De Vasco (1986):

- **26 narraciones**, recogidas **en su totalidad en el alto Baudó**;
- narradores: **Floresmiro, Odilia, Alipio y Joaquín**;
- ilustraciones de fauna de **César Landázabal**;
- Floresmiro Dogiramá tuvo trato prolongado con antropólogos a lo largo de su vida: el sueco **Nordenskiöld** al comenzar su vida adulta, después el inglés **Moser**, la suiza **Arianne Deluz** y finalmente **Pardo**. Vasco lo llama «un hombre de dos mundos».
- Y la objeción de fondo de Vasco: llamar «literatura oral» a estos relatos los reduce a su forma, cuando son «una sistematización del conocimiento».

Fuera del volumen: **Odilia Dogiramá es prima de Floresmiro**.

### 4.4 Lo que el relato había perdido

La ficha publicada decía en `historia` que «reduce la descripción explícita del cautiverio y la antropofagia». El resultado era un relato sin su propio reloj. En el texto de Odilia Dogiramá:

- a los cautivos los **castraban** y los encerraban **en un chiquero, como a marranos**;
- al mismo tiempo **sembraban una mata de primitivo**: cuando el primitivo cargaba y las frutas maduras **se rajaban**, la piel del cautivo se rajaba de grasa, y ésa era la señal de que era hora de matarlo;
- la guerra contra los Cuna **ya había ocurrido y fue un error**: se reunieron del Atrato, Lloró, Dubasa, Pató y Munguidó y los echaron. «Por eso los Cuna casi no quieren saludarnos a nosotros. Ellos pidieron permiso al gobierno de Panamá para venir a pelear con nosotros pero no los dejaron.»
- los emberá escondidos silbaban **como el pájaro buchelé**; eran «como cien, como doscientos»;
- los Burumiá se describen «como diablos, que tenían la cabeza pelada, así como longo, como peña»;
- el jefe dormía **en hamaca** en la casa grande y lo flecharon **cuando se paró a orinar**; atacaron **dos por cada casa**.

La mata de primitivo es el detalle que organiza todo el relato y no estaba. Restituido.

### 4.5 Un tercer paralelo, del mismo volumen de Chaves

«La india Pixaawina», narrado por **Rafael Bailarín**, indio **katío** casado con Pola Henao (chamí), que dijo haberlo aprendido de su abuela: captura, castración y engorde de prisioneros, una **viejita harta de su ración** que ayuda a escapar a uno, y la huida **río abajo sobre un balso para no dejar rastro**. Mismo repertorio, otro narrador, otro subgrupo, otra región. Declarado como tal (regla 9).

Contexto de campo de Chaves, ahora verificable: vereda **Corozal**, municipio de **Río Frío**, Valle del Cauca, unos 60 habitantes en cinco casas, en campaña con **Gerardo Reichel-Dolmatoff**. **Nicolás Henao** (chamí) narró los cuatro primeros relatos; **Rafael Bailarín** (katío) los cinco últimos, entre ellos *Bibidigomia* y *Pixaawina*.

---

## 5. Cumplimiento del contrato editorial

| Ficha | mito (300-650) | historia (220-600) | versiones (170-550) | similitudes (150-450) | lección (8-22) | fuentes | dudas |
|---|---|---|---|---|---|---|---|
| `barbachas-del-arbol-grande` | 426 | 338 | 384 | 280 | 15 | 7 | 6 |
| `guagaja` | 585 | 382 | 407 | 316 | 14 | 8 | 6 |
| `origen-del-pueblo-eperara` | 644 | 361 | 393 | 345 | 16 | 8 | 6 |
| `tachi-akhore-y-la-palabra-de-mangle` | 417 | 320 | 375 | 331 | 19 | 8 | 6 |
| `los-burumias-y-carautas` | 563 | 301 | 431 | 321 | 16 | 7 | 7 |

Verificado por script:

- **0** ocurrencias de «tiempos inmemoriales», «misterio ancestral», «sabiduría ancestral».
- **0** marcas de aparato de investigación dentro de ningún campo `mito` (se buscaron 13 patrones: «según el registro», «la versión de», «esta página», «publicado», «entrevista», años entre paréntesis, nombres de autores, «Plan de Vida», etc.).
- **0** nombres propios en las cinco `leccion`; las cinco son afirmaciones, no órdenes.
- **0** oraciones compartidas entre las dos fichas awá y entre las dos fichas eperara, en `mito`, `historia`, `versiones` y `similitudes`.
- Cada ficha tiene **entre 7 y 8 fuentes**, todas con URL distinta y todas abiertas y leídas.
- Cada `similitudes` contiene **al menos dos paralelos documentados**, con la fuente de cada uno.
- Donde una fuente pertenece a otro de los tres pueblos (emberá / eperara / wounaan) o a otro subgrupo emberá, se declara en el propio texto y en `dudas`.

---

## 5 bis. Fuentes estructuradas para el consolidador

Además de los JSON de reescritura se escribió, por cada mito, `content/editorial/<módulo>/fuentes-2026-09-19/<slug>.json` con las mismas obras y el mismo orden, en forma de objetos (`title`, `author`, `year`, `type`, `url`, `summary`, `limitation`).

Verificado por script:

- **5/5 archivos** con el orden y las URL **idénticos** a los del campo `fuentes` del JSON de reescritura correspondiente.
- **`limitation` presente y no vacía en las 38 entradas**; el script falla si alguna falta.
- **URL canónica única por obra**: doce obras se reutilizan entre fichas (Arcos 2018 aparece en 4, Sinsajoa 2022 y el Plan de Vida de ACIESNA en 3, y así), siempre con la URL exacta idéntica para que el consolidador reconozca la clave.
- **Ningún `summary` repetido**: cuando una obra se reutiliza, la entrada describe qué trae esa obra **sobre ese mito**, no qué es la obra. Por ejemplo, Arcos 2018 se describe en `barbachas-del-arbol-grande` por el texto awapit de la barbacha y la wantɨra, en `guagaja` por el relato del armadillo y el esquema de los cuatro mundos, en `origen-del-pueblo-eperara` por el paralelo del origen vegetal, y en `tachi-akhore-y-la-palabra-de-mangle` por el katsa tɨ.
- **La no intercambiabilidad de emberá, eperara y wounaan está marcada en `limitation`**, no en el texto publicable. Las seis entradas que cruzan pueblo —el Plan de Vida eperara y el documento de ACIESNA ante Minjusticia citados en fichas awá; Arcos y Sinsajoa citados en fichas eperara; Carrasco citada en una ficha awá— declaran expresamente «es una fuente del pueblo X, no del pueblo Y: son pueblos y lenguas distintos y se cita aquí sólo como término de comparación declarado». En la ficha emberá, Chaves 1945 declara que sus relatos son de narrador katío, de otro subgrupo y de otra región (vereda Corozal, Río Frío, Valle del Cauca), y que no pueden fundirse con el relato del Alto Baudó.
- Los `type` van en minúscula y descriptivos: «colección de narraciones recogidas en campo», «tesis doctoral con textos en awapit y traducción al castellano», «plan de vida de un resguardo», «reseña antropológica crítica», «artículo de revista arbitrada», «ficha de un sistema de monitoreo territorial», «publicación bilingüe de un cuento en prensa», «fuente cartográfica», entre otros.

## 6. Riesgos de circularidad anotados

- **`guagaja`**: el slug no aparece en ninguna fuente consultada, ni como topónimo, ni como personaje, ni como palabra awapit. Una búsqueda del término devuelve mitosdecolombia.com entre los resultados. El sitio corre el riesgo de citarse a sí mismo si alguien toma «guagaja» por un nombre tradicional. Anotado en `dudas`.
- **`tachi-akhore-y-la-palabra-de-mangle`**: el slug arrastra un relato inventado (un estero de mangle, una frase que comparaba agua y palabra) que no existe en ninguna fuente. Retirado del texto; el slug se conserva sólo por la URL.
- **`los-burumias-y-carautas`**: «Carautas» en el slug proviene de una fusión editorial y no de la narración. El nombre sí existe en Pardo 1987 como gentilicio suelto, pero no en el relato.

## 7. Qué quedó sin resolver

1. **María Clara Llano, *La ley de la montaña* (UNIPA-CEPF, 2005)** y el ***Mandato del Pueblo Awá*** (UNIPA, 2011): no localizados en línea. Se citan a través de Mora 2012, que da autoría, convenio, año y página.
2. **Hernández, E. (comp.), *Naturaleza y territorio* (ACIESNA, 2004)**: no localizado. Es la fuente real de la versión que publica la ONIC.
3. **La versión bilingüe de *Pania Pak'uru*** sólo se encontró publicada en prensa. No hay edición en libro, cartilla ni repositorio. Es la única fuente del nombre del árbol, del nombre Hesaa y del reparto tronco/ramas/hojas/raíz, y así se declara.
4. **El original del padre Rochereau** no se localizó: la cita de los burumías se leyó en la nota comparativa de Chaves 1945. Tampoco abrieron Betania 1964, Santa Teresa 1959, Vargas 1982 ni Wassén 1963, citados por Pardo.
5. **`Zrõarã Nẽburã` (1984) no está digitalizado** en repositorio institucional. El texto íntegro se leyó en pueblosoriginarios.com, que conserva capítulo, número de relato y narradora; la existencia y estructura del volumen se verificaron aparte en Vasco 1986 y Pardo 1987. No se cotejó contra el impreso.
6. **De Fabriciano Obispo** sólo se sabe lo que dice el Plan de Vida: «el compañero Fabriciano Obispo (qdep)». No se localizó comunidad, río, resguardo, año ni contexto de la narración.
7. **El repositorio de la OIM** (`repository.iom.int`) no da acceso al texto del Plan Integral de Vida del Pueblo Awá del Putumayo, de modo que la atribución a Pedro Fidencio Nastacuaz queda sin verificar.
8. **Sobre la comunidad emberá**: Bojayá y el alto Baudó corresponden a un ámbito Emberá Dóbida según el Ministerio de Cultura, pero la base del sitio no tiene comunidad Dóbida y la metodología prohíbe inventar taxonomía. La página permanece bajo la comunidad Emberá genérica, con la limitación declarada.
