# Textos primarios del corpus emberá katío

Dos textos archivados aquí, más un tercero que vive en `../../chami/primarias/`
y que también es primario para esta comunidad. Y una atribución corregida que
afecta a 18 fichas.

---

## La atribución equivocada de las 18 fichas

`editorial/katio/sources.mjs`, clave `severino1924`, cita la obra de 1924 con
esta URL:

> https://www.luguiva.net/libros/detalle1.aspx?id=291&l=3

La URL responde **HTTP 200**, pero no sirve esa obra. Sirve una página del
sitio personal de Luis Guillermo Vasco Uribe titulada:

> **GUÍA BIBLIOGRÁFICA. NACIONALIDADES INDÍGENAS EMBERA Y WAUNAAN R - T**

Es un repertorio bibliográfico comentado, ordenado alfabéticamente por autor,
del tramo R–T. Dentro de él hay, efectivamente, una **ficha de catálogo** de la
obra de Severino —«Imprenta San Bernardo, Bogotá, 1924, 136 págs.», con un
resumen de tres líneas y los descriptores «Embera-catío; Dabeiba; Frontino;
Murindó; …»—. Pero es la ficha, no el libro. La página no contiene ni una línea
del texto de 1924.

El patrón alterno que se sugirió probar no existe: `/articulos/detalle.aspx?id=291`
(y los ids vecinos 290, 292) devuelve 200 con una **página de error** del sitio
(«Ha ocurrido un error»). No hay otra página de luguiva.net que sirva la obra.

### La obra de 1924 no está en abierto

Rastreada en: archive.org (búsqueda por texto y por autor: sin resultados),
Google Books (registro `Yk400AEACAAJ`, **sin vista previa**, sin descarga),
HathiTrust (403 a peticiones automatizadas), Biblioteca Nacional y repositorios.

El registro más prometedor —Repositorio Institucional de la Universidad de
Caldas, `https://repositorio.ucaldas.edu.co/handle/ucaldas/17424`, marcado
`openAccess`— resultó ser **la misma trampa que luguiva**: consultado por la API
REST de DSpace (la web tiene muro anti-bots), su `dc.type` es
`['Libro', 'Referencia bibliográfica']` y el único archivo adjunto en el paquete
ORIGINAL es `Logo archivo emberá.pdf`, un **logotipo** de 843 KB cuya capa de
texto tiene 81 bytes y dice «Jenené / Archivo Digital Emberá / Repositorio
Institucional / Universidad de Caldas». Es una ficha de catálogo con el logo del
archivo pegado, no el libro digitalizado.

**Conclusión: la primera edición de 1924 no es consultable en línea.**

### Lo que sí resuelve el problema

La segunda edición **sí** está en abierto, y no es «otra obra» sino *la misma*.
El volumen de 1959 abre así:

> LIBRO PRIMERO — LOS INDIOS CATIOS — CREENCIAS, RITOS, USOS Y COSTUMBRES DE LOS
> INDIOS CATIOS DE LA PREFECTURA APOSTOLICA DE URABA, COLOMBIA.
> **RAZON DE ESTA SEGUNDA EDICION**

y el propio Severino explica en esa página que «la primera edición de Creencias,
ritos, usos y costumbre de los indios Catíos de Urabá, se hizo en Bogotá el año
de 1924, para el Año Santo y la Exposición Misional Vaticana de 1925».

Es decir: **el Libro Primero del volumen de 1959 es la reedición de la obra de
1924**. Esa es la URL que deben llevar las 18 fichas (ver más abajo la
advertencia de que no es un facsímil exacto).

### Y dos motivos que nunca fueron de Severino

El `summary` de `severino1924` en `sources.mjs` le atribuye un corpus que incluye
«…Ancastor y los Bibidigomia». Ninguno de los dos está en el texto de Severino:
buscados en los 610.154 caracteres del volumen de 1959, `Ancastor` aparece **0
veces** y `Bibidigom*` **0 veces**.

Los dos vienen de **Chaves 1945**, y del lado katío de ese artículo:

- **Ancastor**, el ave blanca que se vuelve hombre y sube a las mujeres al Bajía,
  es de «El maíz y el chontaduro» (relato V, *Cómo consiguieron los indios el
  maíz*), narrado por **Rafael Bailarín, katío**.
- **Bibidigomia** es el título del relato VIII, también de Bailarín; la mención
  que circula («los Bibidigomia o indios caníbales viven en los grandes
  árboles…») es además **comentario comparativo de Chaves**, no relato.

---

## `severino-de-santa-teresa-1959-los-indios-catios-los-indios-cunas.txt`

> Severino de Santa Teresa, Fray (O.C.D.). *Los indios catíos, los indios cunas:
> ensayo etnográfico de dos razas de indios de la América Española.* Biblioteca
> de Autores Antioqueños, vol. 7. Medellín, Imprenta Departamental de Antioquia,
> 1959, 317 págs.
>
> Su **Libro Primero** es la segunda edición de: *Creencias, ritos, usos y
> costumbres de los indios catíos de la Prefectura Apostólica de Urabá*, Bogotá,
> Imprenta de San Bernardo, 1924, 136 págs.

**URL canónica viva:** https://archive.org/details/losindioscatiosl00seve — 200.
Texto descargado de
`https://archive.org/download/losindioscatiosl00seve/losindioscatiosl00seve_djvu.txt`
— 200, 620.192 bytes.

**Cómo se obtuvo:** el PDF de archive.org es un escaneo sin capa de texto de
editor; lo que hay es **OCR (ABBYY) generado por Internet Archive** sobre el
ejemplar del Princeton Theological Seminary. No es transcripción humana.

**Estado de los caracteres: bueno.** Los diacríticos sobrevivieron
(á 1.790 · é 1.024 · í 2.663 · ó 2.209 · ú 536 · ñ 998) y los nombres propios
salen estables y bien acentuados: `Caragabí` 123, `Tutruicá` 39, `Antomiá` 32,
`Domicó` 23, `Séver` 28, `Genené` 12, `Herupotoarra` 7, `Aribamia` 2. Sólo se
degradan los pasajes en cursiva —las cartas de etnólogos que Severino cita en el
prólogo—, donde la f se lee como j: «me hizo *jaita*» por *falta*, «no debe
*jaltar*» por *faltar*, «el *Projesor* Nordenskiold». Es un puñado de casos, todos
dentro del aparato prologal, ninguno dentro de los relatos.

### Advertencias de lectura

- **No es un facsímil de 1924.** Severino dice en el mismo prólogo que le
  propusieron publicarlo «tal cual salió en 1924, toda vez que los indios no han
  cambiado su modo de ser y de obrar, salvo la rehabilitación cristiana, obra de
  los Misioneros» —y que él, sin embargo, añadió cosas. Así que 1959 reproduce
  1924 **más añadidos de 1959**, y el texto no marca la costura. Cualquier frase
  de aquí puede citarse como «Severino, 1924/1959», nunca como «Severino, 1924»
  a secas.
- **Qué parte es voz de quien narró.** Muy poca, y nunca identificada. Severino
  no nombra narradores, ni lugares de recolección, ni fechas de cada relato; no
  distingue lo que oyó de lo que le pasaron otros misioneros. Los relatos llegan
  ya refundidos en tercera persona por él.
- **Qué parte es comentario del misionero.** Casi todo el marco. Severino escribe
  como Prefecto Apostólico de Urabá evaluando una religión rival: el jaibanismo
  es para él «un conjunto de supersticiones», un arte «diabólico», «un pacto,
  trato e intimidad con el demonio». Los juicios sobre la capacidad intelectual
  de los katío, sobre la «menguada cultura la de un pueblo sin escritura» y sobre
  la «rehabilitación cristiana» son suyos y de su época.
- **Vocabulario de época.** «Catíos» (no *emberá katío*, que es el endónimo
  vigente), «razas», «tribus», «indios», «salvajes», «supersticiones»,
  «absurdos», «Prefectura Apostólica». Ninguno de esos términos puede pasar a
  una ficha como descripción, sólo como cita marcada.
- **Qué no puede darse por dicho por la comunidad.** Nada de lo evaluativo. Y
  tampoco las equivalencias que él propone —Caragabí leído como figura crística,
  Tutruicá como demonio, el Bajía como cielo cristiano—: son lecturas de un
  misionero católico traduciendo a su propio dogma, no teología katío.

---

## `rochereau-rivet-1929-nociones-sobre-creencias-usos-y-costumbres-de-los-catios.txt`

> «Nociones sobre creencias, usos y costumbres de los Catíos del occidente de
> Antioquia». *Journal de la Société des Américanistes*, nouvelle série, tome 21,
> n.º 1, París, 1929, pp. 71-105.

**Sobre la autoría, que es más enredada de lo que parece.** Persée no acredita
autor nombrado; Glottolog lo cataloga como «Rochereau, Henri J. and Paul Rivet
1929». El propio texto lo aclara en su nota 1, firmada «P.R.» (Paul Rivet):
Rochereau le envió unas notas **recogidas por las Hermanas misioneras de la
Inmaculada Concepción y de Santa Catalina de Sena, de Santa Rosa de Osos**, y
Rivet decidió publicarlas respetando la forma que les dieron sus autoras. O sea:
**las autoras son las religiosas**, Rochereau es el intermediario y Rivet el
editor. El nombre del archivo conserva el asa bibliográfica usual, pero la
atribución real es esa.

Rivet añade en la misma nota que esas notas «ya habían sido utilizadas en parte»
para el libro de Severino de 1924 —lo que convierte a este artículo y al Libro
Primero de Severino en **dos salidas del mismo fondo de notas misioneras**, no en
dos testimonios independientes. Al contrastarlos no se está corroborando nada.

**URL canónica viva:** https://www.persee.fr/doc/jsa_0037-9174_1929_num_21_1_3658
— 200 (metadatos).

**El PDF de Persée sigue cerrado.** Probadas tres rutas, todas fallan a
peticiones automatizadas incluso con cabeceras de navegador y *Referer*:
`docAsPDF/…pdf` → **403**; `renderPdf/…` → **404**; `articleAsPDF/…` → **410**.

**De dónde salió entonces el texto.** Del volumen completo de la revista en
Internet Archive, que está abierto y sin restricción de préstamo:
https://archive.org/details/journaldelasocie0021vari (tome 21, 1929, ejemplar de
la Universidad de Arizona) — 200. Descargado su OCR
`…/journaldelasocie0021vari_djvu.txt` (200; 1.450.036 bytes) y recortado el
artículo entre el titulillo «NOCIONES SOBRE CREENCIAS.» y el arranque del
artículo siguiente, «LES INDIENS WAITAKA» de Métraux. Quedan 91.290 caracteres,
las pp. 71-105 completas. *(Gallica también tiene el tomo —arks `bpt6k87094g` y
`bpt6k57351079`, localizados por la API `services/Issues`— pero su visor está
tras verificación anti-bot.)*

### La extracción SÍ perdió caracteres, y gravemente

Es el aviso más importante de este archivo. El OCR se hizo con modelo de francés
sobre un texto español, y **no queda una sola vocal acentuada correcta**:

> **á: 0 · í: 0 · ó: 0 · ú: 0** en los 91.290 caracteres del artículo.

En su lugar aparecen `ä` (308), `â` (74), `ô` (54), `ü` (67), `à` (23), 111
palabras con un **dígito** haciendo de tilde (`6` por ó, `4` por á) y 79 casos de
`Il` por `ll`. Sobreviven 772 `é`, pero muchas son falsas: el OCR convierte
sistemáticamente la **-ó final en -é**, que no es perder una tilde sino **cambiar
la persona del verbo**.

Ejemplo contado, la frase de apertura del ciclo de Caragabí (p. 86):

> «AL principio, el dios de arriba, llamado Caragabi, **divisé** una cosa oscura,
> aqui, en donde es nuestra tierra, y **quisé** ver lo que ésto fuera. **Viné**, y
> en efecto, **vié** esta tierra…»

Son cuatro verbos en cuatro renglones: *divisó, quiso, vino, vio*, todos
volcados a primera persona. Leído literal, el dios pasa de ser narrado a narrarse
a sí mismo.

Y los nombres propios no tienen forma única. **Tutruicá** aparece 23 veces en
cinco grafías distintas y **ninguna correcta**: `Tutruicä` (12), `Tutruici` (5),
`Tutruic4` (4), `Tutruicäa` (1), `Tutruicé` (1). Igual `jaibaná` → `jaibanä` (52),
`jaiban4` (5), `jaiband`, `jaibané`; `Antomiá` → `Antomiä` (9), `Antomi4`;
`Caragabí` sale 74 veces siempre sin tilde.

**Por tanto: ninguna cita literal puede copiarse de este archivo tal cual.** Sirve
para localizar pasajes y para saber qué dice; cada frase que vaya a una ficha hay
que normalizarla a mano, y conviene cotejar el nombre propio contra la grafía del
volumen de 1959, que sí la trae bien.

### Advertencias de lectura

- **Quién habla.** El cuerpo del artículo es de las **religiosas misioneras**, no
  de personas katío: son notas de observación tomadas por las Hermanas de la
  Inmaculada Concepción y Santa Catalina de Sena. No hay narradores identificados
  ni discurso directo atribuido a nadie. Los únicos fragmentos que se acercan a
  voz katío son los **dos cantos transcritos en lengua con traducción enfrentada**
  al final (pp. 103-105): *Daira ra ra* y *Chiraria*. Ahí sí hay palabra propia,
  aunque mediada por la transcripción.
- **Qué es comentario.** El encuadre entero. Las autoras describen el jaibanismo
  como «arte que bien puede llamarse diabólico, pues ya no nos queda duda de que
  es un pacto, trato e intimidad con el demonio», hablan de «funestas enseñanzas»
  y llaman «Babilonia» a las ceremonias. La nota 1 y los criterios de edición son
  de Paul Rivet, 1929.
- **Vocabulario de época.** «Raza Catia», «tribu», «indios», «jaibaná» glosado
  como «doctor, médico», los ritos de iniciación nombrados «bautizos» y los
  trabajos colectivos «convites» —categorías católicas puestas sobre prácticas
  que no lo son—.
- **Qué no puede darse por dicho por la comunidad.** Ni los juicios ni las
  etimologías. Las glosas lingüísticas del artículo (`jai` = enfermedad, `banä`
  de `capanä` = manada) son propuestas de las religiosas, sin formación
  lingüística y sin control de hablantes; no son etimología emberá y no deben
  citarse como tal.
- **No es testimonio independiente de Severino.** Ver arriba: mismo fondo de
  notas.

---

## Un tercer primario, que está en `../../chami/primarias/`

> Chaves Ch., Milcíades. «Mitos, tradiciones y cuentos de los indios Chamí».
> *Boletín de Arqueología*, vol. I, núm. 3, Bogotá, 1945, pp. 133-159.
> → `content/editorial/chami/primarias/chaves-1945-mitos-tradiciones-y-cuentos-de-los-indios-chami.txt`

Pese al título, **cinco de sus nueve relatos son katío**, y Chaves lo dice en la
página 134: los cuatro primeros se los narró Nicolás Henao, chamí de Balboa; «los
cinco últimos los recogí de boca de **Rafael Bailarín, indio katío**».

| # | relato | narrador |
|---|---|---|
| V | Cómo consiguieron los indios el maíz | Rafael Bailarín, katío |
| VI | Awena | Rafael Bailarín, katío |
| VII | La mujer de Karagabí | Rafael Bailarín, katío |
| VIII | Bibidigomia | Rafael Bailarín, katío |
| IX | La india Pixaawina | Rafael Bailarín, katío |

**Por qué importa aquí, y mucho.** Es el único de los tres textos con **narrador
katío con nombre propio**. Bailarín era jaibaná, casado con Pola Henao (mujer
chamí), aprendió los relatos de su abuela y **tradujo él mismo del katío**. Frente
a Severino y a las religiosas —que no nombran a nadie y escriben desde la misión
para refutar—, aquí hay una persona identificada narrando lo suyo. Para el corpus
katío, este es el primario de mejor calidad testimonial que tenemos.

**Advertencias.** Las notas comparativas y la sección final de interpretación son
de Chaves, etnólogo de 1945, no de Bailarín; ahí es donde aparece el comentario
sobre «los Bibidigomia o indios caníbales» y las dataciones («este mito delata
una antigüedad muy grande»), que son hipótesis suyas. Y hay que sostener la
frontera al citar: existe una «La mujer de Karagabí» **chamí** (Reichel-Dolmatoff
1953, Río Frío) y esta **katío** (Bailarín); son dos narraciones distintas de dos
pueblos distintos con el mismo título, y hay bibliografía posterior que las
confunde.

---

## Resumen operativo para `sources.mjs`

| clave | qué cambiar |
|---|---|
| `severino1924` | La URL `luguiva.net/libros/detalle1.aspx?id=291&l=3` sirve una guía bibliográfica, no la obra. Sustituir por `https://archive.org/details/losindioscatiosl00seve` y reetiquetar la referencia como **1924/1959, segunda edición**. La primera edición de 1924 no es consultable en línea. Quitar del `summary` «Ancastor» y «los Bibidigomia»: no están en Severino. |
| *(nueva)* `rochereau1929` | `https://www.persee.fr/doc/jsa_0037-9174_1929_num_21_1_3658` para la referencia; texto en este directorio, tomado de archive.org. Autoría real: las Hermanas misioneras; Rochereau intermediario, Rivet editor. **No es testimonio independiente de Severino.** |
| *(nueva)* `chaves1945` | Ya archivado en `chami/primarias/`. Relatos V-IX = katío, narrador **Rafael Bailarín**. Único primario con narrador nombrado. |

### Pistas que quedaron abiertas

- **Madre Laura Montoya, «Nociones sobre usos y costumbres de los catíos en el
  Departamento de Antioquia»**, *Repertorio Histórico de la Academia Antioqueña
  de Historia* (registro U. Caldas `ucaldas/18024`, también ficha sin texto). Por
  el título y por la congregación —Madre Laura fundó las Misioneras de la
  Inmaculada Concepción y Santa Catalina de Sena, justo las autoras del texto de
  1929— es muy probablemente el **original español** de esas notas, y con
  acentuación intacta. El OJS de la Academia
  (`academiaantioquenadehistoria.org/revista/…/article/view/383`) devuelve **403
  de Cloudflare**; vale la pena reintentarlo a mano.
- El **Repositorio Institucional de la U. de Caldas** aloja un «Archivo Digital
  Emberá» con decenas de referencias del área (Wassén 1935, Loewen,
  Reichel-Dolmatoff *Notas etnográficas sobre los indios del Chocó*, Vasco
  *Jaibanás*). Su web tiene muro anti-bots, pero **la API REST de DSpace responde
  sin problema** (`/server/api/discover/search/objects?query=…`). Ojo: buena parte
  de los registros son fichas de catálogo con el logo adjunto, no digitalizaciones
  —hay que comprobar el `bundle` ORIGINAL de cada uno antes de darlo por
  descargable—.

---

## Dos lecturas del texto de 1929 que conviene no repetir mal

**«Gioró» es Lloró.** El impreso escribe «Lloró o Gioró» (el reconocimiento
óptico lo destroza como «Lord o Gioro»), de modo que Gioró es el nombre emberá
de un municipio del Chocó, no un caserío sin identificar. La ficha publicada
dice «Gioró, cerca de Quibdó», que localiza bien pero esconde que el lugar tiene
nombre en el mapa. Pardo añade que /egoró/, /jioró/ o /yoró/ es además la
palabra para «tierra» según el dialecto, así que el topónimo y el nombre común
se parecen y se confunden con facilidad.

**Y ojo con qué se apoya en esa piedra: son dos piedras, no una.** El impreso de
1929 la menciona dos veces y en pasajes distintos.

- En el de la escalera: «Aún se ven en Gioró restos de la escalera, o al menos
  sus bases, pues estaba puesta sobre **una gran piedra lisa** que aún se ve».
- En la sección «Lloró o Gioró», donde Caragabí castiga a un hermano y una
  hermana que vivían como matrimonio, pone «**una piedra enorme**» como seña del
  lugar, y los eclipses ocurren cuando logran apartarse un poco.

**El texto no identifica una con otra.** Quien las funde en un solo hito visible
es María de Betania, que recogió el material en 1918 y lo publicó en 1964, y por
ahí lo transmite la bibliografía posterior. Así que la escalera sí se apoya en
una piedra de Gioró según 1929, pero que sea la misma piedra del castigo es
lectura posterior y hay que atribuirla.

*(Corrección: una versión anterior de esta nota decía que la piedra pertenecía
sólo al relato del incesto. Era incompleta.)*

## Dabeiba no está en Severino, y de dónde sale su única cita de Uribe Ángel

Las seis apariciones de «Dabeiba» en el volumen de 1959 son la parroquia, el
municipio y sus tribus. «Cerro León» y «Mitología» aparecen **cero veces**. No
hay relato de Dabeiba en este texto, de modo que la procedencia que declara la
ficha publicada —que aparece «en la obra de 1924 mediante una cita de Ángel
Manuel Uribe»— no se sostiene aquí. Dos precisiones:

- el nombre está invertido: es **Manuel Uribe Ángel**, y su *Geografía general y
  compendio histórico del Estado de Antioquia* (1885) tiene en su capítulo II
  una sección «Mitología» que es, casi frase por frase, el texto que la ficha
  publica;
- la salvedad honesta: lo verificado es la **segunda edición de 1959**, que el
  autor declara «corregida y aumentada». Que el pasaje no esté aquí no prueba
  matemáticamente que no estuviera en 1924, pero sí que no puede citarse desde
  el único texto consultable.

Severino sí cita a Uribe Ángel **una vez**, y conviene saber para qué: le pide
el «retrato moral» de los indígenas y reproduce sin objetar que «la raza india
era apocada y débil; perezosa y holgazana por naturaleza». Eso es lo que el
misionero toma de esa fuente, y marca el encuadre desde el que escribe.

## Una salida al problema de los acentos de 1929

El archivo de 1929 no sirve para citar literal, pero **Chaves 1945 reproduce
pasajes suyos entrecomillados y con los acentos intactos**. Su transcripción del
Aribamia empieza «El padre Rochereau, en su relato sobre los Aribamias, dice:
“El Aribamia es un animal temible (mitológico) en el cual reside una alma de
Jaibaná…”», y el volumen entero conserva 3.484 vocales acentuadas frente a las
cero del archivo óptico.

De modo que, cuando haga falta una cita textual de las notas de 1929, **hay que
ir a ver si Chaves la reproduce** antes de renunciar a ella. El archivo de 1929
queda para el contenido y para lo que Chaves no copió; la letra, cuando exista
en Chaves, se toma de ahí, diciendo que se cita a través de él.

Una advertencia sobre ese mismo tramo: Chaves atribuye a Wassén la noticia de
las dos clases de Aripadá, y hay bibliografía que la mete dentro de una cita
atribuida a Rochereau «1933: 94», página donde esa frase no está. El desacuerdo
queda sin dirimir.


---

## CORRECCIÓN IMPORTANTE: la edición de 1924 sí es consultable

Una versión anterior de esta nota concluyó que la primera edición de 1924 no
existe en acceso abierto, y que por eso había que citar desde la de 1959. **Es
falso, y el texto estaba a la vista en la propia lista de fuentes de las
fichas.**

La URL que las dieciocho fichas traen como «ficha de catálogo» de Villa Posse
—`flacso.edu.ec/biblio/catalog/resGet.php?resId=44622`— no devuelve una ficha:
devuelve el **PDF completo** de *Mitos y leyendas de Colombia*, volumen III, un
texto de 63.890 palabras con **5.831 vocales acentuadas intactas**. Su sección 3
transcribe piezas catías de la edición de 1924 y pone al pie, pieza por pieza,
la referencia con parte y capítulo:

> Fr. SEVERINO DE SANTA TERESA, C.D.: *Creencias, ritos, usos y costumbres de
> los indios Catíos de Urabá*, parte 1.ª, cap. III. Bogotá, año 1924.

Archivado aquí como `villa-posse-1993-mitos-y-leyendas-de-colombia-iii-seccion-catia.txt`.

### Y esto invierte la advertencia sobre las dos ediciones

No es cierto que 1959 sea 1924 más añadidos. En Herupotoarra, **1924 dice más**:
que pertenecía «por parte de madre, al linaje aristocrático de los domicoes», y
que «fué el artífice que buscó Caragabí para construirle la escalera del cielo».
También conserva que Armucurá está «no dentro de la tierra, sino debajo de
ella» y la inmortalidad de sus habitantes. La edición de 1959 borra todo eso.

De modo que **las dos ediciones se cotejan, y ninguna sustituye a la otra**. Lo
que falte en una puede estar en la otra, y en los dos sentidos.

*(Esta corrección la encontró la reescritura, no la búsqueda de primarios: la
fuente estaba citada desde el principio y clasificada como lo que no era.)*


## CORRECCIÓN: Severino sí nombra a sus narradores, y todos son Domicó

Una versión anterior de esta nota decía que Severino «no identifica de manera
sistemática narradores». Para el material mítico **sí lo hace**, y con nombre en
lengua y nombre de bautismo. Verificado en el volumen:

- «El que me refirió esta leyenda con todos sus detalles, llámase
  **Tohuratzabidá Domicó**, que, al ser bautizado, tomó el nombre de Fernando»
  — origen de los catíos y cunas;
- «El indio que con más detalles me refirió esta tradición llámase **Dobiarisá
  Domicó** (Cipriano después del bautismo), jaibaná-brujo muy temido de los
  suyos por sus embustes» — la tentación del paraíso;
- «Sobre el origen del Jaibanismo me refirió esta historia uno de ellos, llamado
  **Donungubi Domicó**, que en el bautismo tomó el nombre de Severiano».

Tres cosas se siguen de esto:

1. **Sube la calidad testimonial de varias fichas.** Lo que se citaba como
   síntesis misionera anónima tiene narradores nombrados.
2. **Todos llevan el mismo apellido.** Eso hay que leerlo junto a lo que la
   etnografía reciente documenta: Domicó no es un linaje sino una marca de
   etnicidad, y el propio Severino escribe que hay muchos del mismo apellido
   «que no tienen más parentesco que el de Adán». Que sus narradores sean todos
   Domicó dice dónde trabajó, no de qué clan recogió.
3. **Donungubi Domicó (Severiano) es el mismo narrador** del relato de la
   serpiente de siete cabezas que la revisión del corpus chamí identificó como
   el matador de dragones europeo injertado en el origen del jaibanismo. Es
   decir: es el narrador del relato, no su inventor, y el injerto viene de la
   misión que lo recogió.

Dos defectos menores de la lista de fuentes, anotados para la próxima pasada: la
octava entrada de `tradicion-del-cerro` está rotulada como un texto de Trimborn
de 1953 pero su URL sirve un artículo de Piazzini de 2009; y el PDF alojado en
CLACSO no es un artículo sobre misiones en Urabá sino un libro de aniversario de
un departamento de antropología.
