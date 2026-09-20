# Textos primarios del corpus kogui (kággaba)

Verificación de URL: **17–18 de septiembre de 2026**. El código de respuesta
anotado en cada ficha es el que devolvió la petición ese día, siguiendo
redirecciones, con agente de navegador.

Las veinte fichas kogui del sitio citan siete fuentes en nueve URL. Este trabajo
salió a buscar los textos de verdad detrás de esas URL y encontró, de entrada,
que **la fuente más citada del corpus estaba mal identificada**. Eso condiciona
todo lo demás, así que va primero.

---

## 0. Lo primero: el PDF de FLACSO **no es** Reichel-Dolmatoff

Las diecinueve fichas que citan

> `https://biblio.flacsoandes.edu.ec/libros/digital/58546.pdf` —
> «Los Kogi: una tribu de la Sierra Nevada de Santa Marta, tomo II»

están citando otro libro. Ese PDF —recuperado y leído entero— es:

> Villa Posse, Eugenia (investigación y compilación). *Mitos y leyendas de
> Colombia*. **Tomo I: Mitología indígena**. Quito: Instituto Andino de Artes
> Populares del Convenio Andrés Bello (IADAP), colección «Integración cultural».
> Primera edición, agosto de 1993, 1.000 ejemplares. ISBN 9978-60-003-5 (obra),
> 9978-60-004-3 (tomo I).

Ni Reichel-Dolmatoff ni su tomo II aparecen ahí: en los 807.854 caracteres
extraídos, `Kogi` aparece **0 veces** y `Preuss` **0 veces**. Lo que sí hay, y es
lo que el sitio realmente está usando, es el capítulo 2 de la antología:

> «2. MITOLOGÍA — INDÍGENAS KOGUI. SIERRA NEVADA DE SANTA MARTA», que reproduce
> a **Chaves, Milciades, «Mitología Kogui», Boletín de Arqueología nº 6,
> pp. 80-92, Bogotá, 1947**.

Los títulos de esa sección son, uno por uno, los slugs del sitio: LA CREACIÓN
(dos versiones), EL PRIMER HOMBRE Y LA PRIMERA MUJER, MADRE WASTORA, KIMAKU,
INCESTO DE PADRE—HIJA, SEISKWISBUCHE Y YANGAUKI, EL SOL - MAMA, NAMAKU,
KASAUGUE, KASHINDUKWE, NUNKASHA Y KASHINDUKWE, CANIBALISMO, NAOWA ENTREGA EL
GOBIERNO A SU HIJO, MADRE DE AGUA, LOS PRIMEROS INDIOS, EL ALGODÓN, EL MAÍZ,
EL ARCO IRIS - SUSABANKA, LA ENFERMEDAD - HIWIHA, LA CANDELA - GOTZE.

De los veinte slugs kogui, **diecinueve salen de aquí**. El único que no aparece
ni en la antología ni en el original es `guateovan`; el módulo del repo ya lo
tiene marcado como `retain-with-source-warning`.

**URL canónica viva para ese PDF** (misma obra, mismos 1.684.838 bytes, servidor
que sí responde):
<https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=58546> — **200**,
`application/pdf`.
La URL que hoy citan las fichas, `biblio.flacsoandes.edu.ec/libros/digital/58546.pdf`,
devuelve **403** y redirige a la portada de `repositorio.flacsoandes.edu.ec`:
la biblioteca migró de plataforma y todo el dominio viejo quedó tras un muro
anti-bots. La copia archivada aquí se recuperó del Wayback Machine
(`http://web.archive.org/web/20240516161834id_/…`, **200**) y luego se comprobó
byte a byte contra la ruta viva de `flacso.edu.ec`.

---

## 1. Chaves 1947, «Mitología kágaba» — **el original de lo que publica el sitio**

`chaves-1947-mitologia-kagaba.txt` (el artículo solo)
`boletin-de-arqueologia-1947-ii-5-6-completo.txt` (el número entero)

> Chaves Ch., Milciades. «Mitología kágaba». En *Boletín de Arqueología*,
> Volumen II, números 5 y 6. Bogotá: Servicio Arqueológico Nacional, 1947,
> pp. 421-506 (paginación continua del volumen). Capítulos I-III (generalidades,
> ciclo vital, mitología) y IV (comentarios), más bibliografía y láminas.

**URL canónica viva:**
<https://publicaciones.icanh.gov.co/index.php/picanh/catalog/book/244> — **200**.
Descarga directa del volumen:
<https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/244/267/1580>
— **200**, `application/pdf`, 4.087.095 bytes, 253 páginas.
Licencia declarada por el ICANH: **Creative Commons Atribución-NoComercial-SinDerivadas 4.0**.

Ojo con la referencia que trae la antología: Villa Posse cita «Boletín de
Arqueología, No. 6, p. 80-92, Bogotá, 1947». En el ejemplar digitalizado por el
ICANH el artículo abre en la página **421** del volumen II números 5 y 6. Las dos
paginaciones existen (la del fascículo y la del volumen encuadernado); al citar
conviene dar las dos o dar la del ICANH, que es la que se puede abrir.

**Cómo se obtuvo el texto: capa de texto del PDF del ICANH.** Se extrajo con
`pdftotext -layout`. No se corrigió nada.

### Lo que esta fuente cambia respecto de lo que hoy publica el sitio

**Chaves nombra a quién le contó cada mito. La antología borra esos nombres.**
En el original hay una línea `Informador:` bajo el título de **los 22 mitos**:
doce dicen **Seye Ababi Makó** y diez dicen **Benito Sontinkama** (a veces
«Sontincama»). En la reimpresión de Villa Posse que el sitio cita, la palabra
`Informador` aparece **0 veces**: las 22 atribuciones quedan sustituidas por la
frase genérica «Textos, narrados en español por indígenas bilingües». Es decir:
el sitio está publicando como anónimo un corpus cuyo original sí tiene autores
declarados.

Chaves además identifica a uno de ellos en el pie de la lámina XI y en el cuerpo
del texto: **Miguel Antonio Niño = Seye Ababi Makó, Cabo del Mama de Tucurinca**.
El otro, Benito Sontinkama, aparece solo por su nombre.

### Advertencias de lectura de Chaves

- **El propio autor dice que el material está deformado.** Primera página:
  «La dificultad de no hablar el idioma Kogui y el tener que verificar los
  interrogatorios en castellano, lengua que ellos no manejan con destreza, hace
  que haya ideas confusas y que muchas veces los conceptos vertidos al castellano
  hayan sido deformados». No es una lectura crítica de hoy: es la advertencia del
  recopilador en 1947.
- **La palabra que él usa es «interrogatorios».** No entrevista, no conversación.
- **El marco es evolucionista y hoy es insostenible.** Todo el capítulo I y el
  capítulo IV («Comentarios a la mitología kágaba») están construidos sobre
  «el primitivo», «etapas» de magia → mitología → monoteísmo, y citas de Baudouin,
  Caillois y Tello. Esa armazón es de Chaves, no de sus interlocutores. Los mitos
  numerados 1-22 son el dictado; el capítulo IV es su interpretación.
- **Chaves prefiere «kágaba» a «kogui» y explica por qué**, en nota al pie:
  «Aunque en varias encuestas ellos mismos se denominaban Kogui preferimos
  utilizar el nombre Kágaba porque algunos investigadores de esta cultura los han
  designado con este nombre». Es decir: la comunidad se nombraba de una manera y
  el etnógrafo eligió la otra por comodidad académica. Hoy la organización propia
  escribe **Kággaba**.
- **El trabajo se hizo en un solo pueblo y en un solo mes**: San Andrés, vertiente
  occidental de la Sierra, noviembre de 1946, en compañía de Gerardo Reichel-
  Dolmatoff y Alicia Dussán de Reichel. No es «la mitología kogui»: es lo que dos
  hombres de San Andrés contaron en castellano durante cuatro semanas.
- **Pérdida en la extracción: no faltan caracteres, sobran espacios.** En los
  202.116 caracteres del artículo hay **0** caracteres de reemplazo (U+FFFD) y las
  vocales acentuadas (3.262) y las eñes (274) están intactas. Pero el 2,7 % de los
  tokens (894 de 33.451) son letras sueltas: el PDF trae varios titulares
  compuestos con interletraje abierto y la extracción los parte. Cinco de los 22
  títulos quedaron así: `4 . – M A D R E WA S T O R A`,
  `6 . – I N C E S T O D E PA D R E H I J A`,
  `7 . – S E I S K W I S B U C H E Y YA N G A U K I`,
  `1 4 . – N A O WA E N T R E G A E L G O B I E R N O A S U H I J O`,
  `1 8 . – E L A L GO D Ó N`. El cuerpo de los relatos está bien; **los titulares
  no se pueden buscar con grep normal y no se pueden citar como grafía**.
- El original es inconsistente consigo mismo en las grafías: el título del mito 11
  dice `KASHINDUKWE` y el 12 dice `KASHINDUKUE` (12 y 23 apariciones
  respectivamente en el artículo). Eso es del impreso, no de la extracción.

---

## 2. Villa Posse 1993, *Mitos y leyendas de Colombia*, tomo I

`villa-posse-1993-mitos-kogui-seleccion.txt` (solo el capítulo kogui)
`villa-posse-1993-mitos-y-leyendas-de-colombia-tomo-i.txt` (el tomo entero)

Referencia completa y URL, arriba en §0.

**Cómo se obtuvo el texto: OCR de ABBYY FineReader 9.0** (así lo declara el PDF),
sobre un impreso de 1993, 349 páginas, con cifrado RC4 que permite copiar.
Extraído con `pdftotext -layout`.

### Advertencias de lectura

- **Es una reimpresión, no una fuente.** Villa Posse recorta, reordena y
  desatribuye a Chaves (§1). Para citar hay que ir al Boletín de 1947.
- **El OCR come letras y las cambia por signos.** En el tomo completo hay **44**
  caracteres de reemplazo (U+FFFD) y **14,8 %** de tokens de una sola letra
  (22.450 de 152.029). En el capítulo kogui la cosa va mucho mejor —0 U+FFFD,
  0,3 % de letras sueltas en 7.105 tokens— pero el defecto está: la nota
  introductoria dice «los ¡jkas» donde el papel dice «los ijkas», porque ABBYY
  leyó la `i` como `¡`. La diéresis de `Nukaki-Süka` se perdió: `Süka` **0 veces**,
  `Suka` **1**, cuando el original de Chaves sí la trae.
- El tomo I de la antología cubre mucho más que a los kogui (Guajira, Vaupés,
  Chocó, Chamí…) y trae al final la bibliografía general de los tres tomos. Se
  archiva entero porque la bibliografía es útil para rastrear de dónde salió cada
  selección.
- Derechos: «Derechos reservados conforme a la ley», IADAP / Convenio Andrés
  Bello. Copia para consulta editorial interna, no para republicar.

---

## 3. Reichel-Dolmatoff 1950, *Los Kogi*, **tomo I** (que ninguna ficha citaba)

`reichel-dolmatoff-1950-los-kogi-tomo-i.txt`

> Reichel-Dolmatoff, Gerardo. *Los Kogi: una tribu de la Sierra Nevada de Santa
> Marta - Colombia*. **Primera parte**. En *Revista del Instituto Etnológico
> Nacional*, Volumen IV, entregas 1.ª y 2.ª, 1949-1950. Bogotá: Editorial Iqueima.
> 319 pp. + ilustraciones + índice analítico + fe de erratas.

**URL canónica viva:**
<https://publicaciones.icanh.gov.co/index.php/picanh/catalog/book/256> — **200**.
Descarga directa:
<https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/256/278/1910>
— **200**, `application/pdf`, 28.419.780 bytes, 182 páginas de PDF (el escaneo va
a doble página, por eso 182 imágenes para ~360 páginas impresas).
Licencia declarada por el ICANH: **CC BY-NC-ND 4.0**.

Contenido: I Datos generales · II Cultura material y tecnología · III Estética,
recreación y contacto · IV Economía · V Organización política · VI Organización
social · VII El mundo kogi. Termina con «FIN DE LA PRIMERA PARTE».

**Cómo se obtuvo el texto: OCR de Adobe Acrobat «Paper Capture Plug-in»** sobre
un escaneo de 2020. Extraído con `pdftotext -layout`.

### Advertencias de lectura

- **Las dos columnas del escaneo se entrelazan.** Como cada imagen trae dos
  páginas impresas, `pdftotext -layout` intercala las líneas de una página con
  las de la siguiente. Se lee, pero **ningún párrafo se puede citar sin volver al
  PDF a comprobar dónde empieza y dónde acaba**.
- **Los acentos de los nombres kogi sobreviven, pero no del todo.** Cuenta
  concreta sobre 890.658 caracteres / 108.537 palabras: `Kógi` 368 veces frente a
  `Kogi` 54 (12,8 % perdió la tilde), `Sintána` 31 frente a `Sintana` 2,
  `Kashindúkua` 10 frente a `Kashindukua` 1, y el peor caso, `Séi` 18 frente a
  `Sei` 16 — casi la mitad. **No sirve para fijar grafías**; para eso hay que ir a
  la página impresa. Hay además 117 signos `¡` espurios (OCR leyendo `l`/`i`), 2
  caracteres de reemplazo y un 5,4 % de tokens de una sola letra.
- **El tomo I no trae los mitos**: los trae el tomo II. Aquí están la etnografía y
  el capítulo VII, que es interpretación del autor.
- Ver también el archivo hermano `VERIFICACIONES.md`, escrito en otra pasada de
  esta misma revisión, que contrasta pasajes concretos de este tomo contra lo que
  hoy publican las fichas.

---

## 4. Reichel-Dolmatoff 1951, *Los Kogi*, **tomo II** — NO conseguido

Es el volumen que contiene los mitos y el que las fichas creían estar citando.
**No existe en acceso abierto**, ni en repositorios colombianos, ni en FLACSO, ni
en archive.org, ni en el Wayback. Lo que hay son registros de catálogo y una
traducción de pago:

> Reichel-Dolmatoff, Gerardo. *Los Kogi: una tribu de la Sierra Nevada de Santa
> Marta, Colombia*. **Tomo II**. Bogotá: Editorial Iqueima, 1951. (Reedición:
> Procultura, Bogotá, 1985, 2 vols.)

- eHRAF, ficha bibliográfica pública con resumen:
  <https://ehrafworldcultures.yale.edu/cultures/sc07/documents/002> — **200**
  (traducción al inglés de Sydney Muirden para HRAF; el texto está tras
  suscripción institucional).
- HathiTrust: <https://catalog.hathitrust.org/Record/101015645> — **403** a
  peticiones automatizadas; el registro existe y se abre desde un navegador.
- Academia.edu tiene una selección de capítulos subida por Luis Guillermo Vasco
  Uribe, pero exige cuenta y no sirve como URL canónica.

Dato que conviene retener: según el resumen de eHRAF, **el apéndice del tomo II
es donde Reichel-Dolmatoff explica sus métodos y sus problemas de campo**. Ese
apéndice es justamente lo que haría falta para documentar el consentimiento y
sigue cerrado.

**Mientras tanto, la fuente de los mitos que el sitio publica no es este tomo
sino Chaves 1947 (§1), que sí está abierto.** Corregir la atribución es más
urgente que conseguir el tomo II.

---

## 5. Preuss 1926 / 1993, *Visita a los indígenas kágaba* — NO conseguido

Las veinte fichas citan hoy
`https://openlibrary.org/works/OL23581955W/…`, que es una ficha de catálogo sin
texto. Peor: a fecha de hoy esa URL ya no responde 200 limpio, sino que redirige
a **`openlibrary.org/verify_human`** (control anti-bot). No sirve como canónica.

Referencia correcta de la traducción castellana, tomada del catálogo de la
biblioteca del ICANH:

> Preuss, Konrad Theodor. *Visita a los indígenas Kágaba de la Sierra Nevada de
> Santa Marta: observaciones, recopilación de textos y estudios lingüísticos.
> Parte I - II*. Traducción de **María Mercedes Ortiz**; presentación de
> **Myriam Jimeno Santoyo**; prólogo de **Carlos Alberto Uribe T.** Bogotá:
> Instituto Colombiano de Antropología / Colcultura, 1993. 2 vols.
> ISBN 978-958-612-080-7. Título original: *Forschungsreise zu den Kágaba-Indianern
> der Sierra Nevada de Santa Marta in Kolumbien. Beobachtungen, Textaufnahmen und
> linguistische Studien* (Anthropos, Viena, 1919-1926).

**URL propuesta para reemplazar la de OpenLibrary** (registro con ficha completa,
índice de los dos volúmenes y resumen editorial, servido por el propio ICANH):
<https://biblioteca.icanh.gov.co/cgi-bin/koha/opac-detail.pl?biblionumber=13290>
— **200**.

**Digitalización del original alemán, en abierto pero inalcanzable por máquina:**
la Universidad de Viena tiene el libro de 1926 digitalizado y descargable en su
repositorio PHAIDRA:
<https://phaidra.univie.ac.at/detail/o:905920> — **200**, pero lo que devuelve es
la pantalla de «Anubis», una verificación anti-bot por prueba de trabajo. Lo
mismo pasa con la digitalización del Instituto Ibero-Americano de Berlín
(`digital.iai.spk-berlin.de`). **No se intentó sortear esa verificación**: el PDF
se puede bajar a mano desde un navegador, y esa es la vía. Por eso aquí no hay
`.txt` de Preuss, y **no se ha transcrito ni reconstruido nada**.

**Precaución heredada del corpus uitoto.** El mismo Preuss está archivado en
`content/editorial/huitoto/primarias/`, y ahí el LEEME documenta que el
reconocimiento óptico de la traducción de 1994 destruyó la sexta vocal del uitoto
(ɨ / ï), sustituyéndola casi siempre por `k`, hasta el punto de que ninguna
palabra en lengua de esos `.txt` sirve como grafía. **El kogui (koguian) también
tiene vocales con diacríticos que el OCR pierde** —en este mismo directorio, la
`ü` de `Nukaki-Süka` ya desapareció en la antología de 1993 (§2)—, así que cuando
se consiga el PDF de Preuss hay que hacerle la misma cuenta antes de citar una
sola palabra en lengua.

### Lo único que sí se consiguió sobre Preuss

`sanmiguel-1994-resena-preuss-kagaba` — **no hay `.txt`, a propósito.**

> Sanmiguel, Inés. «Visita a los indígenas kagaba de la Sierra Nevada de Santa
> Marta de Konrad Theodor Preuss» [reseña]. *Revista Colombiana de Antropología*,
> vol. 31, 1994, pp. 273-275.

<https://revistas.icanh.gov.co/index.php/rca/article/view/1619> — **200**;
PDF en <https://revistas.icanh.gov.co/index.php/rca/article/download/1619/1194>
— **200**, `application/pdf`, 831.413 bytes, 3 páginas.
**Ese PDF no tiene capa de texto**: producido con OmniPage CSDK 16, `pdffonts` no
reporta ninguna fuente embebida y `pdftotext` devuelve 3 bytes. Es un escaneo de
imagen pura. No se transcribe y no se inventa transcripción.

---

## 6. Las dos fuentes de Yale (eHRAF): qué son y por qué no hay más

Ninguna de las dos está en abierto en ninguna parte. Se buscó y no aparece.

> Reichel-Dolmatoff, Gerardo. «The Great Mother and the Kogi Universe: A Concise
> Overview». *Journal of Latin American Lore*, 13 (1), 1987, pp. 73-113.

<https://ehrafworldcultures.yale.edu/cultures/sc07/documents/014> — **200**, pero
la página dice literalmente «You currently have limited access to eHRAF»: sirve la
ficha bibliográfica y el resumen, **no el texto**. Trabajo de campo fechado por
HRAF entre 1950 y 1980.

> Reichel-Dolmatoff, Gerardo. «The Loom of Life: A Kogi Principle of Integration».
> *Journal of Latin American Lore*, 4 (1), 1978, pp. 5-27.

La ficha kogui lo cita hoy por <https://www.loc.gov/item/hlas-bi80101238/>, que
devuelve **403** a peticiones automatizadas y que en todo caso es un registro del
Handbook of Latin American Studies, no el artículo.
**URL propuesta en su lugar:**
<https://ehrafworldcultures.yale.edu/cultures/sc07/documents/012> — **200**, con
ficha completa (revista, volumen, páginas, año) y resumen. Sigue siendo catálogo,
pero es catálogo que abre, que da la referencia exacta y que está en el mismo
sitio que la otra.

El *Journal of Latin American Lore* (UCLA Latin American Center) no tiene archivo
abierto. No hay versión legal gratuita de ninguno de los dos artículos.

---

## 7. Voz kogui contemporánea y verificable — **sí la hay, con autoría declarada**

Esto es lo que faltaba en las fichas y ahora está archivado.

### 7.1 Organización Gonawindúa Tayrona, documentos propios

`ogt-2012-lineamientos-ordenamiento-territorio-kaggaba.txt`

> Organización Gonawindúa Tayrona. *Lineamientos para el ordenamiento y manejo
> del territorio Sierra Nevada de Santa Marta, desde la visión ancestral del
> Pueblo indígena Kággaba*. OGT, 2012. 13 pp.

<https://gonawindwa.wordpress.com/wp-content/uploads/2015/07/lineamientos-para-el-ordenamiento-y-manejo-del-territorio-sierra-nevada-de-santa-marta-desde-la-visic3b3n-ancestral-del-pueblo-indc3adgena-kc3a1ggaba1.pdf>
— **200**, 706.188 bytes. Capa de texto nativa (Word 2010), sin OCR.

`ogt-2011-propuesta-auto-004-programa-de-garantias.txt`

> Organización Gonawindúa Tayrona. *Propuesta para la implementación del Programa
> de Garantías en el marco del Auto 004 de 2009 proferido por la Corte
> Constitucional*. OGT, 2011. 84 pp.

<https://gonawindwa.wordpress.com/wp-content/uploads/2015/07/propuesta-para-la-implementacic3b3n-del-programa-de-garantc3adasen-el-marco-del-auto-004-de-2009-proferido-por-la-corte-constitucional1.pdf>
— **200**, 21.887.762 bytes. Capa de texto nativa (Acrobat Distiller).

Índice de ambos en
<https://gonawindwa.wordpress.com/documentos/organizacion-gonawindua-tayrona/>
— **200**. Ahí figuran además, sin PDF enlazado, los *Lineamientos de los Pueblos
Indígenas de la Sierra Nevada para el manejo ambiental* (1999) y el *Acta de
Constitución de la OGT* (1987).

### 7.2 El sitio propio de la organización

`gonawindua-tayrona-sitio-propio-paginas.txt` — ocho páginas del sitio
<https://gonawindwa.wordpress.com> (todas **200** el 18/09/2026): `/pueblo/`,
`/pueblo/origen/`, `/pueblo/origen/pagamento/`,
`/pueblo/origen/trabajos-tradicionales/`, `/territorio-ancestral/orden-de-la-naturaleza/`,
`/territorio-ancestral/linea-negra/`, `/pueblo/gobierno/`,
`/organizacion/antecedentes/`.

Está escrito en primera persona del plural y encabezado como «En las palabras de
nuestros Mama mayores Kággaba». Es la única fuente del expediente donde el pueblo
habla como sujeto y no como objeto. Ahí se autodenominan **Kággaba**, no «kogui».

Cómo se obtuvo: descarga HTML y extracción del cuerpo del artículo; se quitaron
los bloques de botones de «Compartir». No es un texto impreso: es un sitio vivo y
puede cambiar. La fecha de captura está en la cabecera del archivo.

### 7.3 El Plan Especial de Salvaguardia

`pes-snsm-sistema-de-conocimiento-ancestral-ctc-mincultura.txt`

> Consejo Territorial de Cabildos Gobernadores de la Sierra Nevada de Santa Marta
> (CTC) y Ministerio de Cultura. *Plan Especial de Salvaguardia. Sistema de
> Conocimiento Ancestral de los cuatro pueblos indígenas de la Sierra Nevada de
> Santa Marta*. 122 pp. Elaborado en ciclos de trabajo entre 2013 y 2016, bajo
> coordinación de Cayetano Torres Izquierdo, con acompañamiento del Mamo Mayor
> Luntana Vacuna (kogui), Mamo Vicente Gil y Mamo José María Garavito, entre
> otros mamos de los cuatro pueblos.

<https://mincultura.gov.co/direcciones/patrimonio-y-memoria/Documents/21-sistema-de-conocimiento-ancestral-SNSM-PES.pdf>
— **200**, `application/pdf`, 1.758.915 bytes. Capa de texto nativa (Word 2013):
0 caracteres de reemplazo, 0,0 % de letras sueltas. Es el archivo más limpio de
este directorio.

Nota sobre el año: el documento no lleva fecha de publicación en portada. La
cronología interna llega a 2016 y el plan de acción es «(2016)». Por eso el
archivo no lleva año en el nombre: **no lo fijes en 2017 sin comprobarlo.**

---

## 8. Consentimiento y circulación: qué dice cada fuente sobre cómo obtuvo esto

Esta es la sección que condiciona lo que el sitio puede publicar.

### 8.1 Lo que el propio pueblo dice hoy

El PES, firmado por el Consejo Territorial de Cabildos y elaborado bajo dirección
de los mamos, lo dice sin rodeos (p. 31 del PDF):

> «Toda esa rica gama de transversalidad y particularidad cultural entre los
> cuatro pueblos de la SNSM constituyen un mapa de dimensión espiritual conservado
> a través del pensamiento indígena que guían los mamos y mayores, **motivo por el
> cual el carácter de su uso y manejo no concibe la necesidad de su divulgación
> externa**.»

Y el mismo documento explica que el conocimiento se salvaguarda entero o no se
salvaguarda: «la salvaguardia del Sistema del Conocimiento Ancestral tiene que
ser completa, no puede ser parcial». Es decir: la posición pública de los cuatro
pueblos no es que el conocimiento sea secreto y ya, sino que **su circulación
fuera no es un valor que ellos persigan**, y que trocearlo lo desvirtúa. Un sitio
que publica mitos sueltos, uno por ficha, está haciendo exactamente lo que ese
párrafo dice que no se debe hacer. Eso no obliga a borrar nada —los textos de
Chaves llevan 79 años publicados por el Estado colombiano y hoy los republica el
ICANH bajo licencia abierta— pero sí obliga a **decir de dónde viene cada relato,
quién lo contó, en qué condiciones y con qué marco**, en vez de presentarlo como
«el mito kogui».

El sitio propio de la OGT, en cambio, es material que la organización publica
deliberadamente para que circule. Esa es la diferencia operativa: **lo que la
comunidad publica se cita como voz propia; lo que un etnógrafo extrajo se cita
como extracción, con su fecha y su nombre.**

### 8.2 Chaves, 1946-1947: nombres sí, permiso no

- **Nombra a sus dos narradores en los 22 mitos** (§1). Eso es más de lo que hace
  la mayoría de la etnografía de su época y es un dato que el sitio debería
  recuperar: Seye Ababi Makó (Miguel Antonio Niño) y Benito Sontinkama.
- **No hay una sola línea sobre permiso.** No dice haber pedido autorización a los
  mamas, ni al pueblo, ni a nadie. Habla de «interrogatorios».
- **Admite que el material está deformado** por la barrera de lengua (citado en
  §1).
- No consta que ninguno de los dos narradores fuera mama. Seye Ababi Makó es
  descrito como «Cabo del Mama de Tucurinca», es decir un cargo auxiliar. Lo que
  hay en el corpus, por tanto, no es la enseñanza esotérica de los mamas sino lo
  que dos hombres de San Andrés estuvieron dispuestos a contar en castellano a
  dos forasteros. **Eso es una limitación, pero también es lo que hace el texto
  publicable:** no es el conocimiento reservado.

### 8.3 Reichel-Dolmatoff, 1946-1950: el texto admite haber mentido

El tomo I trae dos pasajes que no se pueden ignorar. **Las citas que siguen están
normalizadas**: en el `.txt` el OCR las parte con espacios espurios («efectuada /
fuéra del t erritorio Kógi… ya qu e»). Antes de publicarlas hay que cotejarlas
con la página impresa del PDF, por lo dicho en §3.

**Primero, los kogui le dicen explícitamente que no quieren que esto salga.**
Al hablar de aculturación lingüística:

> «Los "mayores" consideran indeseable que los jóvenes aprendan a hablar
> castellano, pues que temen que así divulguen los grandes "secretos" de la tribu.
> En efecto, los mámas no deberían aprenderlo nunca.»

Es decir: el etnógrafo escribe, en su propio libro, que la comunidad tenía una
política deliberada contra la divulgación, y publica igual.

**Segundo, admite haber engañado a sus anfitriones sobre el origen de objetos
arqueológicos.** Describiendo cómo los kogui reaccionaban ante sus piezas:

> «Aunque estos objetos procedían de nuestras excavaciones, efectuadas fuera del
> territorio Kógi, **tuvimos que negar eso** ya que para ellos esta actividad
> representa un sacrilegio. Explicamos que se trataba de hallazgos superficiales
> o de objetos comprados a los campesinos […] Muchas veces, sin embargo,
> insinuaron que yo enterrara los objetos de nuevo para evitar que los "Antiguos"
> se enojaran.»

**Tercero, advierte él mismo de la complacencia del informante:** las
equivalencias entre Sintána y Jesucristo, dice, «las hacen sólo informadores que
quieren complacer al investigador».

**Cuarto, parte de sus informantes eran personas rotas con su comunidad.** Dedica
páginas a individuos «aculturados o, mejor dicho, deculturados»: Trinidad Noivíta,
educado en Santa Marta por el misionero Rafael Celedón —**y que fue precisamente
el informador de Preuss en 1915**—; Gabriel Sarabáta, novicio que se fugó del
centro ceremonial «porque le quisieron obligar a ser máma» y de quien el propio
Reichel-Dolmatoff dice que «sus conocimientos esotéricos eran inferiores a los de
los otros jóvenes»; y Mamatakán, que se hacía pasar por mama en los mercados de
Ciénaga. Cuando una ficha diga «los kogui cuentan que…», conviene recordar por
qué bocas pasó eso.

### 8.4 Preuss, 1914-1915: objetos que ya volvieron

De Preuss no tenemos el texto, pero sí el expediente público de lo que hizo.

- Llegó a la Sierra a finales de 1914 y trabajó allí hasta abril de 1915, por
  encargo de los Museos Estatales de Berlín. Registró mitos y cantos en lengua
  kágaba —incluidas **grabaciones sonoras**— y los publicó con traducción en 1926.
- Según el ICANH, en ese momento los kogui «con excepción de los contactos con los
  misioneros capuchinos, no mantenía[n] mayores relaciones con el resto de la
  sociedad colombiana».
- Su informador principal fue, según Reichel-Dolmatoff, **Trinidad Noivíta**, el
  joven que el misionero Celedón se había llevado a educar a Santa Marta (§8.3).
- **Los objetos que se llevó están siendo devueltos.** La Stiftung Preußischer
  Kulturbesitz restituyó dos máscaras rituales en junio de 2023 y, el **10 de
  febrero de 2025**, un bastón y dos cestas (inventarios V A 62644, V A 62645,
  V A 62607), ante la embajadora de Colombia Yadir Salazar Mejía. En la
  descripción del propio Preuss, las máscaras fueron «adquiridas del heredero de
  un Mama difunto».
  <https://www.preussischer-kulturbesitz.de/pressemitteilung/artikel/2025/02/10/spk-restituiert-drei-objekte-der-kogi.html>
  — **200**.

Que un Estado europeo esté devolviendo en 2023-2025 lo que Preuss sacó en 1915,
a petición del pueblo kogui, es el dato que mejor resume en qué condiciones se
recogió este material. **Lo que vale para las máscaras vale para los textos**, con
la diferencia de que los textos no se pueden devolver: solo se pueden citar
diciendo de dónde salieron.

### 8.5 Consecuencias prácticas para el sitio

1. **Corregir la atribución de la fuente principal.** Lo que publican las veinte
   fichas es Chaves 1947, no Reichel-Dolmatoff tomo II. Cambiar título y URL.
2. **Devolver los nombres.** Seye Ababi Makó y Benito Sontinkama contaron esos 22
   relatos. Están en el original y se pueden citar mito por mito.
3. **Fechar y situar.** «San Andrés, Sierra Nevada, noviembre de 1946, narrado en
   castellano» no es un adorno: es lo que impide que el texto se lea como «los
   kogui creen».
4. **No presentar ninguna de estas versiones como la versión.** Chaves recoge dos
   creaciones distintas del mismo narrador; el tomo I de Reichel-Dolmatoff
   contradice a otras fuentes en el parentesco de Kashindúkua (ver
   `VERIFICACIONES.md`).
5. **Sumar la voz propia.** La OGT publica material suyo para que circule. Citarlo
   junto a los etnógrafos cambia quién habla en la ficha.
6. **No tocar lo que el PES pone fuera.** Nada de lo archivado aquí entra en el
   terreno de lo que los mamos reservan —ni ezwamas concretos, ni pagamentos, ni
   contenidos rituales—, y nada de lo que se publique debería entrar.

---

## Inventario de este directorio

| Archivo | Qué es | Capa de texto | Estado |
|---|---|---|---|
| `chaves-1947-mitologia-kagaba.txt` | Chaves, «Mitología kágaba», Boletín de Arqueología II (5-6), 1947 | texto del PDF ICANH | fuente real de 19 de las 20 fichas |
| `boletin-de-arqueologia-1947-ii-5-6-completo.txt` | el número entero (incluye Reichel-Dolmatoff, «Aspectos económicos entre los indios de la Sierra Nevada») | texto del PDF ICANH | contexto |
| `villa-posse-1993-mitos-kogui-seleccion.txt` | capítulo kogui de la antología del IADAP | OCR ABBYY | reimpresión desatribuida |
| `villa-posse-1993-mitos-y-leyendas-de-colombia-tomo-i.txt` | la antología entera | OCR ABBYY | contexto y bibliografía |
| `reichel-dolmatoff-1950-los-kogi-tomo-i.txt` | *Los Kogi*, primera parte, 1949-1950 | OCR Acrobat | nuevo; ninguna ficha lo citaba |
| `pes-snsm-sistema-de-conocimiento-ancestral-ctc-mincultura.txt` | Plan Especial de Salvaguardia, CTC + Mincultura | nativa | voz institucional de los cuatro pueblos |
| `ogt-2012-lineamientos-ordenamiento-territorio-kaggaba.txt` | Organización Gonawindúa Tayrona, 2012 | nativa | voz propia kággaba |
| `ogt-2011-propuesta-auto-004-programa-de-garantias.txt` | Organización Gonawindúa Tayrona, 2011 | nativa | voz propia kággaba |
| `gonawindua-tayrona-sitio-propio-paginas.txt` | 8 páginas del sitio de la OGT | HTML | voz propia kággaba, sitio vivo |
| `VERIFICACIONES.md` | contrastes de pasajes contra las fichas publicadas | — | de otra pasada de esta revisión |

No conseguidos, y por qué: **Reichel-Dolmatoff tomo II** (§4, sin acceso abierto
en ninguna parte), **Preuss** en alemán o en castellano (§5, digitalizado en
abierto pero tras verificación anti-bot que no se sorteó), **los dos artículos del
Journal of Latin American Lore** (§6, sin versión libre). De ninguno de ellos hay
transcripción aquí, ni parcial ni reconstruida.
