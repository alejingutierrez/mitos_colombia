# Bibliografía de la ronda 4 — llano y río (31 fichas)

**Paso 1 del brief `docs/brief-mestizos-y-mixtos.md`. En curso — se amplía por tandas.**
Fecha de levantamiento: 2026-09-20.

Ciclos:

| carpeta | fichas | comunidad / región en Neon |
|---|---|---|
| `editorial/orinoquia-mestizo-final` | 19 | `mestizo`, orinoquia |
| `editorial/amazonas-mixto-residual` | 12 | `mixto`, amazonas |

## Estado del módulo antes de tocar nada

**Corrección al diagnóstico de partida.** El diagnóstico dice «Orinoquía: 19
fichas sin una sola URL». Eso es cierto **en Neon**, no en el repo: el módulo
`editorial/orinoquia-mestizo-final` sí tiene un `sources.mjs` con 36 URLs
distintas y un `evidence.mjs` que reparte por slug. Lo que nunca se aplicó es
ese módulo. El trabajo, entonces, no es levantar una cantera desde cero sino
**auditar la que ya existe y sustituir lo que no pasa la escalera del §4**.

El módulo de Orinoquía tiene además el defecto que la memoria del proyecto
llama «plantilla compartida»: `definition-helpers.mjs` compone `mito`,
`historia` y `versiones` de las 17 fichas de Vargas y Baquero con **seis
párrafos idénticos** (`vargasMitoFrame`, `vargasHistoryFrame`,
`vargasVersionsFrame`, `baqueroMitoFrame`, `baqueroHistoryFrame`,
`baqueroVersionsFrame`). Once fichas comparten literalmente el mismo párrafo de
`historia`. Eso es lo que hay que desmontar en el paso 3, y es la razón de que
este documento reparta **por obra y por página**, no por ciclo.

(secciones en construcción)

## Barrido de las 75 URLs heredadas (curl con user-agent de navegador, 2026-09-20)

**Muertas de verdad (404 / dominio que no resuelve) — 8:**

| URL | clave en el módulo | qué se pierde |
|---|---|---|
| `bibliotecanacional.gov.co/.../ABC%20del%20Bibliotecario.pdf` | `abcBibliotecario` | 404. Sostenía 4 fichas amazónicas |
| `florestas.ufam.edu.br/amazoniali/2023/11/30/honorato-a-cobra-grande/` | `ufamHonorato` | 404. Era la única fuente brasileña directa de Honorato |
| `publicaciones.banrepcultural.org/index.php/bmo/article/view/7421` | `ufaina1975` | 404. **La pérdida más grave**: es el ciclo Ufaina de von Hildebrand con narradores nombrados |
| `www2.cifor.org/.../Numero%204.pdf` | `airumakuchi` | 404. Relato comunitario con autor identificado (Milton Jesús Pinto Linares) |
| `bicentenario.gob.pe` (2 URLs) | `vocesperu`, `bicentenarioChullachaqui` | el dominio no resuelve. Sostenían 7 fichas |
| `portalbiblioteca.ufra.edu.br/.../geografiadosmitosbrasileiros.pdf` | `cascudoCurupira` | no resuelve |
| `musigrafia.org/acontratiempo/...Parte1.pdf` | `contratiempo` | no resuelve. **Aparece en 11 de las 12 fichas amazónicas**: es el relleno estructural del ciclo |

**Pendientes de comprobar en navegador (403 de antibot, no caídas) — 7:**
`africa.si.edu` (Mami Wata), `butantan.gov.br` y `serpentesegentes.butantan.gov.br`,
`formacionenservicio.minedu.gob.pe`, `portaldoprofessor.mec.gov.br`, y las tres de
`cervantesvirtual.com`. Ninguna se declara muerta.

**Vivas y legítimas (200, abiertas y leídas): ver las fichas de obra más abajo.**

**Vivas pero fuera por regla del §4.2 — 6:** `es.scribd.com` (`galante2018`, en
4 fichas), `books.google.com` (`vargasGoogleBooks`, `hugoNino`, `solartelibro`),
`search.worldcat.org` (2). Y los cuatro blogspot de Orinoquía
(`canalllanero`, `casanareantigua`, `casanaretierradeencantos`,
`villanueva-casanare1962`), que son agregadores sin firma ni fecha de registro.

---

# I. LA CANTERA — obras abiertas y leídas

## A. Orinoquía: el registro que fija el relato

### A1. Miguel Ángel Martín, *Del folclor llanero* (1979) — **hallazgo nuevo, y el más importante**

- **Autor:** Miguel Ángel Martín (el autor de *Carmentea*), folclorólogo llanero.
- **Edición:** Villavicencio, Litografía Juan XXIII, 1979. Digitalizado íntegro por la
  Biblioteca Virtual del Banco de la República y servido desde el repositorio de la
  Universidad Nacional.
- **Tipo:** monografía folclórica regional de autor, con aparato de campo.
- **URL abierta y verificada (200, 97 pp., texto extraído):**
  `https://bffrepositorio.unal.edu.co/server/api/core/bitstreams/df7fd3f6-ad07-489b-aac8-da8cba07cecf/content`
- **Qué contiene exactamente.** Índice en 30 secciones: Folclor, La Orinoquia,
  Poblamiento, El Llanero, La Vivienda, El Vestido, Las Comidas, **Creencias**,
  Plantas Medicinales, La Música Popular y la Música Llanera, Los Velorios y Otros
  Cantos, El Joropo, El Fandango, El Galerón y el Torbellino, El Bambuco, **La Trova
  y el Contrapunteo**, La Copla, El Poema, El Corrío, El Pasaje, Instrumentos, El
  Baile, El Coleo, Fiestas Patronales, Las Cuadrillas de San Martín, Vocabulario,
  Dichos, **Florentino y el Diablo**, y siete capítulos departamentales —**Arauca,
  Casanare, Meta, Guainía, Guaviare, Vaupés, Vichada**— con historia de fundación
  pueblo por pueblo. Bibliografía final.
- **Los tres pasajes que anclan fichas nuestras:**
  1. Sección *Folclor*: «hay que tener presente los mitos, donde aparecen los duendes
     y espantos como **la Bola de Fuego, el Silbón, la Mancarita**». Es el enunciado
     que fija las tres como repertorio llanero de 1979 —y el que introduce la
     Mancarita, que no está en nuestro catálogo.
  2. Sección *Creencias*: «Quien entierra tesoros, al morir quedará su espíritu vagando
     alrededor del sitio donde escondió los valores». Ancla directa de
     `el-tesoro-de-caribare`: la figura del guardián no es invención de la ficha, es
     creencia registrada.
  3. Sección *El pacto con el diablo*: «cambian su alma al diablo por dinero,
     representado éste en fincas ganaderas donde habrá **un toro negro que es el
     vigilante del amo**. Un viernes santo, el hombre vende su alma al diablo». Ancla
     doble: `el-toro-negro-patorreal` y el motivo de **Juan Machete**.
  4. Capítulo Casanare, entrada *Hato Corozal*: «Antes La Yegüera, fundación que formaba
     parte de la **hacienda de los jesuitas Caribabare, en 1664**». Segunda fuente
     independiente para la grafía *Caribabare* y para la existencia histórica del hato.
- **Limitación:** es folclor de autor sin fichas de informante; Martín no nombra a
  quién oyó cada creencia, y su libro mezcla registro, ensayo y antología de coplas.
  Sirve para fechar y documentar el repertorio, no para atribuir un relato a un narrador.
- **Corrección al encargo:** el brief pedía buscar a «**Miguel Ángel Ospino**,
  *Leyendas del Llano*». Esa obra no existe con ese nombre. Lo que existe, y es la obra
  que el encargo describe, es **Miguel Ángel Martín, *Del folclor llanero*, 1979**.

### A2. Getulio Vargas Barón, *Cuentos, mitos y leyendas del llano* (1996) — índice verificado

- **Edición:** CORPES Orinoquía, Villavicencio, 1996. Autor nacido en 1933.
- **URLs verificadas (200, texto extraído, 2.435 líneas):**
  - `https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2797/` (ficha)
  - `https://babel.banrepcultural.org/digital/api/collection/p17054coll10/id/2797/download` (PDF)
  - espejo abierto en UNAL: `https://bffrepositorio.unal.edu.co/server/api/core/bitstreams/d38bbc0e-4fd1-495c-a678-48e5d7c78bfd/content`
- **Índice real, leído: doce relatos**, no once. En orden:
  Amanecer Llanero · El toro negro patorreal · Los delfines dorados · La culebra
  cascabel · El Llano, ayer y hoy · **La leyenda del silbón** · Los tres luceros ·
  El Llano cobra sus cuentas · Las chanzas de don Felipe · El brujo de la costa del
  Pauto · Leal hasta la muerte · La tertulia de la italiana. Más Dedicatoria,
  Presentación y Glosario.
- **Dos consecuencias fuertes.**
  1. **El módulo tiene 11 de los 12.** Falta `la-leyenda-del-silbon`. Y la ficha que sí
     tenemos de la Bola de Fuego (`la-bola-de-fuego`) está en
     `definitions-independent.mjs`, sostenida por un blogspot, cuando el propio Vargas
     la nombra en su Presentación. Ver DECISIONES.
  2. **«Once cuentos» es un dato heredado de la reseña de *El Tiempo*, no del libro.**
     El `vargasHistoryFrame` del módulo repite «un conjunto de once cuentos» en las once
     fichas. Está mal contado y mal repetido.
- **Lo que dice su Presentación, y que ninguna ficha usa:** el autor se declara «testigo
  presencial y actor de los hechos» y dice haber escudriñado «entre charlas informales,
  reuniones de familia e investigación». Nombra como repertorio llanero «la Bola de
  fuego, el Silbón, **la Sombrerona**». La Sombrerona tampoco está en nuestro catálogo.
- **Limitación:** obra literaria firmada, sin informantes fichados. No prueba hechos
  internos. El módulo ya lo dice bien; el problema es que lo dice once veces igual.

### A3. Carmen Pérez Montero, *Mitos y leyendas del estado Portuguesa* (2014) — **el mejor hallazgo del encargo**

- **Autora:** Carmen Pérez Montero.
- **Edición:** Caracas, **Fundación Empresas Polar**, 2014. ISBN 978-980-379-348-7.
  Depósito Legal lf25920143982750.
- **Tipo:** investigación testimonial de campo, publicada por una fundación editorial
  seria, con capítulos independientes en PDF y **bibliografía general propia**.
- **URLs abiertas y verificadas (200, PDF, texto extraído):**
  - índice del libro: `https://bibliofep.fundacionempresaspolar.org/publicaciones/libros/mitos-y-leyendas-del-estado-portuguesa/`
  - presentación y aspectos generales: `.../media/1377933/presentacion-introduccion-y-aspectos-generales.pdf`
  - El Silbón: `.../media/1377934/mitos_portuguesa_c_01_el-silbon.pdf`
  - La Bola de Fuego: `.../media/1377945/mitos_portuguesa_c_12_la-bola-de-fuego.pdf`
  - La Sayona: `.../media/1377961/mitos_portuguesa_c_28_la-sayona.pdf`
  - bibliografía general: `.../media/1377963/mitos_portuguesa_e_bibliografia.pdf`
  (el prefijo es `https://bibliofep.fundacionempresaspolar.org`)
- **Qué contiene exactamente:** 31 capítulos. Presentación e introducción · El Silbón ·
  El Hachador o Hachero · La Cochina Parida · El tigrito · Las brujas · **El diablo y
  otros espantos de Camburito** · El Encadenado de Píritu · La Culeca · Juan de El Morro ·
  **El familiar o los pactos con el diablo** · El Venado de Piedra y otros cuentos de
  cazadores · **La Bola de Fuego** · El Carretón · **El amo del agua** · El espanto del
  mango o la brisa que manea · Las ánimas del Purgatorio · La historia de Bárbara
  Hernández · **Los duendes** · La Vaca Esocada · El espíritu de Eugenio Báez · Pelayo ·
  El Salvaje · El espanto de El Bajío · El ánima de Ño Silvestre o Ño Quemao · El cura de
  Barrancón · El Guarurero de Boconoíto · **La Llorona o la Gritona** · **La Sayona** ·
  Análisis y conclusiones · Bibliografía general.
- **Y trae lo que a nuestro corpus le falta por completo: narradores con nombre, edad,
  vereda y ruta.** Ver la sección NARRADORES.
- **Su propia bibliografía nos abre la escalera venezolana clásica**, citada en el
  cuerpo del libro: Isabel Aretz, *Manual de folklore venezolano*, Caracas: Monte Ávila,
  1976 · Miguel Acosta Saignes, *Estudios de folklore venezolano*, Caracas: UCV, 1962 ·
  Luis Arturo Domínguez, *Encuentro con el folklore en Venezuela*, Caracas: Cincel
  Kapelusz, 1992 · Juan Pablo Rojas Hidalgo, *El Silbón: mito o realidad*, Guanare:
  Coordinación de Cultura del Estado Portuguesa, 1990 (folleto).
- **Limitación:** es Portuguesa, Cojedes y Barinas, no Casanare ni Arauca. Documenta el
  lado venezolano de un repertorio compartido; no autoriza a trasladar sus nombres
  propios ni sus lugares a la versión colombiana. Se cita para versiones y similitudes,
  no para el `mito` de una ficha llanera colombiana.

### A4. Alberto Baquero Nariño, *Los cuentos de Pascual: mitos y leyendas del piedemonte llanero* — índice, páginas y **narrador nombrado**

- **Edición:** Villavicencio, Editorial Siglo XX. El módulo la fecha en 1988; **el
  preámbulo del propio ejemplar está firmado «A.B.N. Villavicencio, Meta / Vereda de El
  Carmen / Enero de 1991 / Finca Hato Chico»**. La fecha de 1988 hay que comprobarla
  contra la portada; el texto interno apunta a 1991 o posterior.
- **URLs abiertas y verificadas (200, PDF, texto extraído):**
  - ficha: `https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2818/`
  - PDF: `https://babel.banrepcultural.org/digital/api/collection/p17054coll10/id/2818/download`
- **Índice real, con páginas:** Dedicatoria p. 3 · *Corrio de duendes y brujas* («Golpe
  del Silbón», poema) p. 3 · Preámbulo: la imaginería popular p. 6 · **El Tirapiedra
  p. 26** · **Los monstruos de Paratebueno p. 29** · **El Centauro p. 33** · **El
  Domínguez p. 36** · **La madre río o la Mohana p. 42** · **La bruja de los ojos miel
  p. 47** · **El silbón p. 52** · **El domador de brujas p. 56**. Ocho narraciones.
- **El módulo tiene seis de las ocho.** Faltan **El Centauro** (p. 33) y **El silbón**
  (p. 52).
- **La corrección de fondo.** El `baqueroHistoryFrame` que las seis fichas repiten dice
  que Baquero «no publica fichas de informantes para cada argumento». **Es falso, y es
  la afirmación más costosa del módulo.** El libro nombra a su narrador tres veces:
  - Dedicatoria: «A mi amigo **Víctor Pascual Herrera** quien tiene la culpa de estos
    escritos».
  - Preámbulo: «Nuestro cuentero es Pascual, **Pascual Herrera**, campesino fatuto,
    hombre de trabajo, servicial, afectivo, inteligente. Conocedor del campo y de la
    naturaleza, **hijo de una vereda de Quetame en el Oriente de Cundinamarca**.»
  - Preámbulo, sección *La vereda*: «**La vereda del Carmen en Villavicencio** es el
    punto de referencia en el cual se conocieron las narraciones de Pascual, luego de
    entrabar con él una entrañable amistad y obtener su confianza.» Y sitúa el lugar
    entre **el caño Maizaro y el caño Buque**.
  - Y se fecha: «Estos cuentos son también versiones de **los finales del siglo XX**,
    transcritos atextualmente de **un narrador con 40 años en el piedemonte**.»

  Es decir: **este ciclo sí tiene narrador, vereda, municipio y fecha aproximada de
  recolección**, y las seis fichas publicadas no lo dicen. Con esto solo, la meta 2 del
  spec §3 («cada ficha nombra de dónde sale el relato: narrador y lugar cuando la fuente
  los dé») pasa de 0 a 6 en la Orinoquía.
- **Limitación, la real:** el propio Baquero declara la mediación y hay que citarla tal
  cual: «Las versiones que contiene el libro pertenecen a **la interpretación que el
  autor hizo** de las narraciones originales de Pascual y a ciertos componentes que se
  creyeron dignos de realzar el sentido del relato». No es transcripción; es reescritura
  declarada sobre un informante identificado. Eso es mejor que lo que dice el módulo, y
  al mismo tiempo obliga a no atribuir a Pascual los detalles añadidos.

### A5. CINEP, *Colombia país de regiones*, tomo 4, cap. 4 «Vida y cultura del llano»

- **Editor:** Fabio Zambrano Pantoja; CINEP con financiación de Colciencias.
- **URLs verificadas (200, PDF):**
  `https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2817/` y
  `.../api/collection/p17054coll10/id/2817/download`
- **Qué contiene:** el tomo cubre Pacífico, **Orinoquía (cap. 4, «Vida y cultura del
  llano», pp. 79-97)**, Amazonia (caps. 5-6, pp. 99-133) y región/regionalismo.
- **A qué sirve:** es el **segundo escalón** —territorio e historia— para las 19 fichas
  llaneras y, de paso, para las 12 amazónicas. Ya está en el módulo, bien usada.
- **Limitación:** es geografía histórica y social; no contiene ningún relato.

### A6. Tres fuentes del módulo que están **mal etiquetadas** (abiertas y leídas, 2026-09-20)

1. **`caribabareBanrepHistory`.** El módulo la titula «Historia regional de los Llanos y
   la hacienda Caribabare, Boletín Cultural y Bibliográfico». **No es eso.** Los
   metadatos del artículo dicen: **Jane M. Rausch, «Los comuneros olvidados: la
   insurrección de 1781 en los llanos del Casanare», *Boletín Cultural y Bibliográfico*
   vol. 33, n.º 41 (15-01-1996), pp. 3-27.** ISSN 2590-6275.
   URL verificada: `https://publicaciones.banrepcultural.org/index.php/boletin_cultural/article/view/1815`
   (PDF: `.../article/download/1815/1869`, 4,8 MB, escaneado **sin capa OCR**).
   No habla de Caribabare ni de ningún tesoro: es la insurrección comunera de 1781.
   **Pero el hallazgo sirve igual**, porque revela a **Jane M. Rausch**, la historiadora
   de referencia de los llanos de Casanare, que el módulo no conocía. Su obra es el
   segundo escalón que le falta al ciclo.
2. **`baqueroOrinoquia`.** El módulo la titula «Cultura, poblamiento e identidad de la
   Orinoquía». Lo que hay en esa URL es **Alberto Baquero Nariño, «El desarrollo
   regional de Colombia: Selva y Llanos, modelos contrapuestos», revista *Orinoquia*,
   Universidad de los Llanos, recibido 13-07-2009, aceptado 30-09-2009**. Es un artículo
   de reflexión sobre economía política y el concepto de «Amazorinoquia», sin una línea
   sobre mitos.
   URL verificada, **pero el servidor devuelve HTML, no PDF**, pese al `/download`:
   `https://orinoquia.unillanos.edu.co/index.php/orinoquia/article/download/211/659`
   Sirve **sólo** para una cosa, y hay que decirla así: acredita la identidad del autor
   —«Escritor e historiador, Asesor de Planeación de la Universidad de los Llanos»—.
   Como fuente de *contexto regional* de un espanto, es relleno.
3. **`bolaEsap`.** El módulo la titula «Leyenda de la Bola de Fuego, repositorio CDIM de
   la ESAP». Es el **Esquema de Ordenamiento Territorial del municipio de Campohermoso**
   —que está en **Boyacá**, provincia de Lengupá, no en la Orinoquía—, levantado
   vereda por vereda con sus habitantes.
   URL verificada (200, PDF con texto): `https://repositoriocdim.esap.edu.co/bitstream/handle/20.500.14471/11011/5957-8.pdf?isAllowed=y&sequence=8`
   **Y aun así es una de las mejores fuentes del ciclo**, por lo que dice literalmente:
   «Esta es una leyenda tradicional de **los Llanos Orientales que se ha ido incorporando
   a la región de piedemonte**. Se dice de un pequeño punto de candela que se va acercando
   cada vez más hasta que se ve una gran bola de fuego. La persona que la vea debe tener
   un látigo para que no se pueda acercar y evitar ser quemado.» Es un documento oficial
   municipal que **fecha y localiza el préstamo del relato**, que es exactamente lo que
   `la-bola-de-fuego` necesita para su campo `versiones`.
   El mismo EOT trae dos entradas más que nos sirven: **Los Mohanes** («hombres muy
   pequeños que habitan en las laderas de las quebradas y siempre están cargados de oro…
   se ven mucho por la **Quebrada Blanca en la vereda de Macanalito**»), que es un
   paralelo documentado para `madre-rio-o-mohana`; y una figura sin nombre que
   «relinchaba como una mula, enamoraba y se robaba a los hombres mujeriegos y adúlteros»,
   que es **la Sayona sin su nombre** y ancla la comparativa colombiana del §4.1.

### A7. José Eduardo Rueda Enciso, *Campos de Dios y campos del hombre* (2018) — el segundo escalón que le faltaba a Caribabare

- **Obra:** José Eduardo Rueda Enciso, *Campos de Dios y campos del hombre. Actividades
  económicas y políticas de los jesuitas en el Casanare*, Bogotá, Editorial Universidad
  del Rosario, 2018 (ISBN 9789587841572). **No está en acceso abierto.**
- **Lo que sí está abierto y verificado (200, leído):** la reseña de **Ismael Jiménez
  Gómez** en *Estudios de Historia Novohispana* n.º 63 (julio-diciembre 2020), pp. 157 y ss.
  `https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S0185-25232020000200157`
- **Qué aporta, y es exactamente lo que `el-tesoro-de-caribare` necesitaba:** Caribabare
  fue «la principal de estas haciendas» y pionera en ganadería vacuna; **abastecía de
  carne a Santafé de Bogotá y Tunja desde 1749, por concesión del virrey Sebastián de
  Eslava**; y tras 1767 **las haciendas «fueron rematadas y vendidas a particulares»**,
  manteniendo el abasto hasta fines del siglo XVIII, mientras las misiones pasaban a
  otras órdenes y luego al clero secular. Es decir: **el archivo sí dice qué pasó con los
  bienes**, y no fue enterrarlos. Con esto la ficha puede escribir su `historia` sin
  decir «no se sabe» y sin legitimar la búsqueda de una bóveda.
- **Limitación:** es una reseña, no el libro. Se cita como reseña y se declara así. El
  libro mismo hay que conseguirlo en biblioteca.
- **Pista abierta, no verificada:** *Quirón. Revista de Estudiantes de Historia* (UNAL
  Medellín) publicó «Transcripción de los bienes secuestrados a los padres jesuitas de
  los pueblos de Casanare y llevados a la hacienda de Caribabare»
  (`revistafche.medellin.unal.edu.co/ojs/index.php/quiron/article/view/378`). Sería
  **la fuente primaria de archivo** del inventario. **El servidor da timeout por curl y
  por WebFetch: pendiente de comprobar en navegador**, no declarada muerta.
- **Jane M. Rausch**, a partir del hallazgo de A6.1: *A Tropical Plains Frontier: The
  Llanos of Colombia, 1531-1831* (1984) y *La frontera de los Llanos en la historia de
  Colombia (1830-1930)*, más sus artículos en el *Boletín Cultural y Bibliográfico*
  («La doma de un llanero: Juan Nepomuceno Moreno, de Casanare», vol. 26 n.º 20, 1989,
  pp. 17-31; «Los comuneros olvidados», vol. 33 n.º 41, 1996, pp. 3-27). Es la
  historiografía de referencia del segundo escalón para las 19 fichas. Los dos artículos
  del Boletín están en abierto; **los PDF son escaneos sin capa OCR**, hay que leerlos
  como imagen.

---

## B. Amazonas: el registro que fija el relato

### B1. Instituto Caro y Cuervo, *Noticias Culturales* n.º 179 (1975) — **verificado, y contiene menos de lo que el módulo dice**

- **Referencia exacta, leída:** José Joaquín Montes Giraldo (firma la sección),
  «Folclor: versiones de algunas leyendas», en *Noticias Culturales* n.º **179**,
  Bogotá, Instituto Caro y Cuervo, **19 de diciembre de 1975**, pp. 6-9, dentro del
  reportaje «El español hablado en el Amazonas: encuesta en Leticia para el **Atlas
  Lingüístico-Etnográfico de Colombia**».
- **URL abierta y verificada (200, PDF con texto, 2.519 líneas):**
  `https://bibliotecadigital.caroycuervo.gov.co/id/eprint/1634/1/NC_1E_179_1975.pdf`
- **El trabajo de campo, fechado y con equipo nombrado:** la comisión viajó a Leticia el
  **17 de septiembre de 1975** y permaneció una semana. La integraban **Luis Flórez**
  (jefe del Departamento de Dialectología), **Jennie Figueroa**, **Marina Dueñas**,
  **María Luisa R. de Montes**, **José Joaquín Montes**, acompañados del dialectólogo
  español **Manuel Alvar**. Trabajaron en Leticia y en **Nazareth**.
- **LA CORRECCIÓN QUE MÁS PESA DE TODO EL CICLO AMAZÓNICO.** La sección de folclor de
  ese número **contiene exactamente dos leyendas: El Cotomachaco y El Bufeo.** Nada más.
  El módulo cita `caro1975` en cuatro fichas: `el-bufeo`, `el-cotomachaco`,
  `la-cobra-grande` y `la-curupira`. **En las dos últimas la fuente no dice nada del
  relato.** Hay que retirarla de esas dos.
- **Limitación:** es una nota de divulgación de cuatro páginas dentro de un boletín
  institucional, no la monografía del Atlas. Transcribe habla, no analiza el relato, y
  no da edad ni oficio de los informantes (sólo nombre, y en un caso la franja de edad).

### B2. María Luisa Rodríguez de Montes, *Muestra de literatura oral en Leticia, Amazonas* (1981)

- **Referencia fijada por su editor:** Rodríguez de Montes, María Luisa (1981),
  *Muestra de literatura oral en Leticia, Amazonas*, Bogotá, **Instituto Caro y Cuervo,
  262 pp.**
- **URL abierta y verificada (200, leída):** ficha institucional del propio Caro y Cuervo,
  `https://lenguasyliteraturasnativas.caroycuervo.gov.co/el-bufeo-muestra-de-literatura-oral-en-leticia/`
- **Qué contiene según su editor:** el corpus recoge **ocho versiones distintas de El
  Bufeo**, además de mitos uitoto y ticuna y narraciones de la población
  hispanohablante de Leticia. Es **el corpus del que sale la mitad del ciclo amazónico**.
- **Y esto sustituye dos fuentes ilegítimas del módulo de golpe:**
  - `rodriguez1981` apuntaba al catálogo Koha del CAAAP de Perú
    (`cendoc.caaap.org.pe/cgi-bin/koha/opac-detail.pl?biblionumber=2824`), que es un
    catálogo y no contiene el relato. Vive, pero es del segundo cajón del §4.2.
  - `galante2018` («Análisis crítico de *Muestra de literatura oral*») apuntaba a
    **Scribd**, prohibido, y estaba en cuatro fichas. La ficha del Caro y Cuervo lo
    reemplaza con mejor autoridad.
- **Limitación:** la página institucional describe el corpus pero **no reproduce los
  textos**, y el libro de 262 pp. no está digitalizado en abierto. Para citar página y
  narrador de cada versión hay que conseguir el impreso. **Es la pieza que falta y hay
  que ir a buscarla a una biblioteca.**

### B3. Martín von Hildebrand, «Origen del mundo según los Ufaina» (1975) — **recuperada**

- **Referencia exacta:** Martín von Hildebrand, «Origen del mundo según los Ufaina»,
  *Revista Colombiana de Antropología*, vol. 18 (1975), **pp. 323-382**.
  ISSN 2539-472X. DOI **10.22380/2539472X.1609**. Editor: ICANH.
- **URLs verificadas (200):**
  ficha `https://revistas.icanh.gov.co/index.php/rca/article/view/1609` ·
  PDF `https://revistas.icanh.gov.co/index.php/rca/article/download/1609/1184` (9,3 MB).
- **Por qué importa:** el módulo la citaba como `ufaina1975` en el *Boletín Museo del
  Oro* (`bmo/article/view/7421`), que **da 404**. La revista real es la *Revista
  Colombiana de Antropología* y el artículo está vivo y en abierto. Sostiene
  `el-descubrimiento-del-agua-y-los-peces` y la atribución tanimuka/ufaina.
- **En el mismo número y la misma búsqueda:** «La manufactura del budare entre la tribu
  Tanimuka (Amazonía, Colombia)», `https://revistas.icanh.gov.co/index.php/rca/article/view/1729`.
- **Limitación grave:** el PDF es **un escaneo sin capa de texto**. No se puede citar
  literalmente sin OCR o sin leerlo como imagen página a página. Y el módulo atribuye la
  narración a «Guaraná Tanimuka, Ñaki Tanimuka y Martín von Hildebrand»: **eso hay que
  comprobarlo dentro del escaneo antes de repetirlo**, porque los metadatos sólo firman
  a von Hildebrand.

### B4. Paulo Maués Corrêa, «Anotações sobre a lenda da Cobra Norato» — **sustituye a la fuente muerta de Honorato**

- **Referencia:** Paulo Maués Corrêa (Universidade Federal do Pará), «Anotações sobre a
  lenda da Cobra Norato», *Revista Sentidos da Cultura*, Universidade do Estado do Pará.
  Presentado en el Simpósio Poéticas Amazônicas, 5.º Seminário Brasileiro de Poéticas
  Orais, noviembre de 2019.
- **URL verificada (200, PDF con texto):**
  `https://periodicos.uepa.br/index.php/sentidos/article/download/3673/1917/13707`
- **Qué aporta, y es lo que faltaba:** **las referencias escritas más antiguas de la
  Cobra Norato**, que el módulo no tenía: **Hygama, *Contos e Lendas Paraenses*, 1900**,
  e **Ignácio Moura, *De Belém a S. João do Araguaia, Vale do Rio Tocantins*, 1910**.
  Remite además al libro del propio autor, *Cobra Grande: terror e encantamento na
  Amazônia* (2016), y a la recepción en Dalcídio Jurandir y João Vianna.
- **Limitación:** es Pará, no Leticia. Documenta el origen y la antigüedad del relato en
  Brasil; la versión de Leticia sigue dependiendo de Rodríguez de Montes 1981.

### B5. Marcos Henrique de Oliveira Zanotti Rosi, *O silvo da serpente* (2021)

- **Referencia:** disertación de maestría, Programa de Pós-Graduação em Educação,
  **Universidade do Estado do Pará**, Belém, 2021. Línea «Saberes culturais e educação
  na Amazônia». Subtítulo: *saberes poéticos em narrativas indígenas sobre a Cobra
  Grande*.
- **URL verificada (200, 2,1 MB, PDF con texto):**
  `https://propesp.uepa.br/ppged/wp-content/uploads/2024/03/ROSI-Marcos-H.-O.-Z.-O-SILVO-DA-SERPENTE-saberes-poeticos-em-narrativas-indigenas-sobre-a-Cobra-Grande.-PDF.pdf`
- **A qué sirve:** es la fuente para distinguir la Cobra Grande **en narrativa indígena**
  de la Cobra Norato del folclore ribereño, distinción que `la-cobra-grande` hoy no hace.
- **Limitación:** tesis brasileña sobre Pará; no habla de Leticia ni de Colombia.

---

# II. REPARTO REAL — los 31 slugs y de qué obra sale cada uno

Confianza: **alta** = obra abierta y leída que contiene el relato, con página o capítulo ·
**media** = obra abierta que lo nombra o lo resume, sin texto completo localizado ·
**baja** = sólo fuente de tercera mano, o sin registro localizado.

## Orinoquía (19)

### El subciclo Vargas Barón, 1996 — 11 fichas

Todas salen de la misma obra abierta (§A2). **El índice no numera páginas**, así que cada
ficha tendrá que citar por título de relato y por posición, no por página, hasta que se
pagine el impreso. Confianza **alta** en la atribución; **media** en la localización.

| slug | relato en el libro | posición |
|---|---|---|
| `amanecer-llanero` | Amanecer Llanero | 1.º |
| `el-toro-negro-patorreal` | El toro negro patorreal | 2.º |
| `los-delfines-dorados` | Los delfines dorados | 3.º |
| `la-culebra-cascabel` | La culebra cascabel | 4.º |
| `el-llano-ayer-hoy` | El Llano, ayer y hoy | 5.º |
| — **falta** — | **La leyenda del silbón** | **6.º** |
| `los-tres-luceros` | Los tres luceros | 7.º |
| `el-llano-cobra-sus-deudas` | El Llano cobra sus cuentas | 8.º |
| `las-chanzas-de-don-felipe` | Las chanzas de don Felipe | 9.º |
| `el-brujo-de-la-costa-del-pauto` | El brujo de la costa del Pauto | 10.º |
| `leal-hasta-la-muerte` | Leal hasta la muerte | 11.º |
| `la-tertulia-de-la-italiana` | La tertulia de la italiana | 12.º |

### El subciclo Baquero Nariño — 6 fichas, **con página y con narrador**

Narrador único y nombrado: **Víctor Pascual Herrera**, vereda de El Carmen,
Villavicencio (Meta). Confianza **alta** en las seis.

| slug | relato | página |
|---|---|---|
| `el-tirapiedra` | El Tirapiedra | 26 |
| `los-monstruos-de-paratebueno` | Los monstruos de Paratebueno | 29 |
| — **falta** — | **El Centauro** | **33** |
| `el-dominguez` | El Domínguez | 36 |
| `madre-rio-o-mohana` | La madre río o la Mohana | 42 |
| `la-bruja-de-los-ojos-miel` | La bruja de los ojos miel | 47 |
| — **falta** — | **El silbón** | **52** |
| `el-domador-de-brujas` | El domador de brujas | 56 |

### Las dos independientes

| slug | de dónde sale | confianza |
|---|---|---|
| `el-tesoro-de-caribare` | **historia**: Rueda Enciso 2018 vía reseña SciELO (alta) + Martín 1979, Casanare/Hato Corozal (alta). **leyenda**: Temis Perea Pedroza en Llanera.com (**baja**, sin edición ni fecha de registro comprobables) + la creencia genérica de Martín 1979 sobre el espíritu del que entierra (media). **Registro del relato: no localizado.** Pendiente: Quirón/UNAL Medellín | **baja** en la leyenda, **alta** en la historia |
| `la-bola-de-fuego` | Martín 1979, sección Folclor (media) + Vargas Barón 1996, Presentación (media) + **EOT de Campohermoso, ESAP (alta, versión con látigo, préstamo fechado del Llano al piedemonte)** + Carmen Pérez Montero 2014, cap. 12 (alta, versión venezolana con tres testigos) | **alta**, repartida |

## Amazonas (12)

| slug | de dónde sale | confianza |
|---|---|---|
| `el-bufeo` | Montes Giraldo, *Noticias Culturales* 179 (1975), pp. 6-9: cinco informantes nombrados + Rodríguez de Montes 1981 (ocho versiones) | **alta** |
| `el-cotomachaco` | Montes Giraldo 1975, misma sección: Gladys de Bolívar y Manuel Curitima, textos íntegros | **alta** |
| `la-cobra-grande` | Rodríguez de Montes 1981 (versión de Pedro Roque en Leticia, **no verificada: el impreso no está en abierto**) + Maués Corrêa, orígenes de 1900 y 1910 (alta para Brasil) | **media** |
| `la-curupira` | Câmara Cascudo 1947 (**host muerto**) + Revista Entre Parênteses 2025, cinco relatos orales de Boa Vista, Pará (viva, 200) + Butantan y MEC (403, pendientes) | **media** |
| `el-chuy-achaque` | ninguna fuente abierta localizada que contenga la versión leticiana. `abcBibliotecario` da 404 | **baja** |
| `chuya-chaqui` | Hugo Niño, *Primitivos relatos contados otra vez* (1979): **sólo hay ficha de Google Books, prohibida**. El texto no está en abierto | **baja** |
| `madre-de-playa` | Rodríguez de Montes 1981, no verificada. El nombre «Angélica Lucas» que la ficha conserva **no aparece en ninguna fuente abierta** | **baja** |
| `yacuruna` | cuaderno oficial del MINEDU Perú (403, pendiente navegador) + antología MINEDU (200, viva) | **media** |
| `petapeta` | Milton Jesús Pinto Linares / Airumaküchi en CIFOR (**404**) + Visión Amazonía-ATICOYA (200) + Omacha, *Raíces sumergidas* 2025 (200) | **media** |
| `ngutapa-y-chimuiyae` | **Nimuendajú, *The Tukuna*, 1952 (200, PDF con texto): la fuente más sólida del ciclo** + Goulard 2009 en OpenEdition (200) | **alta** |
| `el-hijo-de-tuhixana` | Fernando Solarte Lindo, *El hombre con cola de león* (1980): **sólo Google Books, prohibido** + tesis UTP sobre Solarte (200) | **baja** |
| `el-descubrimiento-del-agua-y-los-peces` | Solarte 1980 (misma carencia) + **von Hildebrand 1975, RCA 18: 323-382, recuperada y viva** (escaneo sin OCR) | **media** |

---

# III. EL CAJÓN — ¿se sostiene «mixto» en las doce de `amazonas-mixto-residual`?

El spec §1 es explícito: «mixto» es una tesis, no una etiqueta. La pregunta concreta es
**quién dice que este relato mezcla tradiciones, y dónde**.

**La buena noticia es que para una parte del ciclo hay una frase de fuente que lo
sostiene, y nadie la había usado.** El reportaje del Instituto Caro y Cuervo de 1975
describe Leticia así: una población «heterogénea en la que, **sobre el primitivo fondo
peruano**, se ha injertado luego una cantidad de **indígenas aculturados de las tribus
circundantes**, una porción considerable de **brasileños** y muchos **inmigrantes del
interior de Colombia**». Eso, dicho por el equipo que recogió los relatos, en el mismo
texto donde los recogió, **es la prueba documental de la mezcla** para todo lo que se
recogió en Leticia. No es una inferencia nuestra: es la descripción del registro.

| slug | ¿se sostiene «mixto»? | con qué fuente, o por qué no |
|---|---|---|
| `el-bufeo` | **Sí, y bien** | Recogido en Leticia de cinco informantes con apellidos de tres tradiciones (Curitima, Cachique, Curico son apellidos kukama-cocama), en la ciudad que el propio Caro y Cuervo describe como fondo peruano + indígenas + brasileños + andinos. Un informante habla de soles peruanos como moneda; los niños «hablan portugués y español». El mestizaje está **en el texto**, no en la etiqueta |
| `el-cotomachaco` | **Sí** | Gladys de Bolívar lo sitúa «por el Perú, en la selva, en cananguchal»; Manuel Curitima lo cuenta en castellano amazónico con préstamos. Relato peruano contado en Leticia por hablantes de castellano regional: es la definición de mixto |
| `la-curupira` | **Sí, y es el caso más claro** | Figura brasileña (Cascudo, Butantan, MEC, Entre Parênteses) que circula en Leticia. El propio módulo lo llama «recepción transfronteriza». Sostenido por la bibliografía brasileña abierta |
| `la-cobra-grande` | **Sí** | Honorato/Norato es paraense, con registro escrito desde 1900 (Hygama) y 1910 (Ignácio Moura), recogido en Leticia por Rodríguez de Montes. Brasil → Colombia, documentado en los dos extremos |
| `el-chuy-achaque` | **Sí en el principio, pero hoy sin fuente** | «Chullachaqui» es quechua (*chulla chaki*, pie desigual): préstamo quechua-peruano en el castellano amazónico colombiano. El argumento es bueno; **el problema es que la fuente que lo sostenía (`abcBibliotecario`) da 404 y la peruana (`bicentenarioChullachaqui`) tiene el dominio caído**. Queda sin sostén abierto |
| `chuya-chaqui` | **No como ficha separada** | Es el mismo Chullachaqui, en la reescritura literaria firmada de Hugo Niño (1979). No es un relato mixto distinto: es una obra de autor sobre el mismo motivo. Y su única fuente es Google Books |
| `yacuruna` | **No. Es peruano, no mixto** | El módulo lo dice en su propia nota: «RECEPCIÓN PERUANA DECLARADA… centra la versión escolar de Iquitos… no fuerza atribución Yagua o colombiana». Un relato de Iquitos citado desde un cuaderno escolar del MINEDU peruano no es un relato mixto colombiano: es un relato peruano. **Nadie sostiene el cajón** |
| `madre-de-playa` | **No sostenido hoy** | Sólo la tenemos por Rodríguez de Montes 1981, que no está en abierto. Y arrastra un nombre propio, «Angélica Lucas», que la propia nota del módulo llama «dato heredado del corpus» — es decir, sin fuente. **Sospechoso del mismo modo que el caso `chimbilaco`** |
| `petapeta` | **No: es ticuna** | Yoí y Jau son los héroes ticuna. El propio módulo titula su nota «TRANSFERENCIA TICUNA». Las fuentes son ATICOYA, AZCAITA, el perfil Tikuna del ICANH y un relato firmado por Milton Jesús Pinto Linares. Nada de eso dice «mezcla»: todo dice «ticuna» |
| `ngutapa-y-chimuiyae` | **No: es ticuna, y de la etnografía clásica** | Nimuendajú, *The Tukuna* (1952), «The Errors of Cimidyue». Es mitología ticuna registrada por un etnógrafo. La nota del módulo ya dice «TRANSFERENCIA TICUNA» |
| `el-hijo-de-tuhixana` | **No sostenido, y además mal ubicado** | Reescritura de Fernando Solarte Lindo ambientada **en el Vaupés**, que no es la región amazonas de este ciclo. El módulo declara «solo cultura Vaupés» y evita atribuir comunidad. Es literatura infantil de 1980 sin registro detrás |
| `el-descubrimiento-del-agua-y-los-peces` | **No: es tanimuka/ufaina** | La fuente fuerte recuperada es von Hildebrand 1975 sobre los Ufaina, con el perfil lingüístico tanimuka del Ministerio de Cultura. Es un mito de un pueblo con nombre |

**El recuento:** de las doce, **cinco sostienen «mixto» con fuente** (`el-bufeo`,
`el-cotomachaco`, `la-curupira`, `la-cobra-grande`, y `el-chuy-achaque` en el argumento
aunque no en la URL). **Siete no lo sostienen**: cuatro son de un pueblo identificado
(`petapeta`, `ngutapa-y-chimuiyae`, `el-descubrimiento-del-agua-y-los-peces` y, si se
acepta el Vaupés, `el-hijo-de-tuhixana`), uno es peruano (`yacuruna`), uno es una obra
literaria firmada duplicada (`chuya-chaqui`) y uno está sin registro (`madre-de-playa`).

**Y el aviso del encargo se cumple.** «Ya pasó una vez que una ficha catalogada como
africana resultó ser un rumor amazónico contemporáneo». Aquí el equivalente es
`madre-de-playa`: una sirena de playa fluvial con nombre propio inventado y ninguna
fuente abierta. Es el candidato número uno a no existir.

---

# IV. LO COMPARTIDO CON VENEZUELA

El encargo acertó: varias piezas del llano son binacionales y **existe bibliografía
venezolana seria que el módulo no tenía**. Lo que sigue está abierto y leído.

## La obra madre

**Carmen Pérez Montero, *Mitos y leyendas del estado Portuguesa*, Caracas, Fundación
Empresas Polar, 2014** (§A3). Capítulos independientes en PDF, con testimonios firmados.
El patrón de URL es `https://bibliofep.fundacionempresaspolar.org/media/<1377933+N>/mitos_portuguesa_c_<NN>_<slug>.pdf`.
Verificados uno a uno con 200:

| capítulo | URL |
|---|---|
| presentación e introducción | `.../media/1377933/presentacion-introduccion-y-aspectos-generales.pdf` |
| c_01 El Silbón | `.../media/1377934/mitos_portuguesa_c_01_el-silbon.pdf` |
| c_12 La Bola de Fuego | `.../media/1377945/mitos_portuguesa_c_12_la-bola-de-fuego.pdf` |
| c_18 Los duendes | `.../media/1377951/mitos_portuguesa_c_18_los-duendes.pdf` |
| c_27 La Llorona o la Gritona | `.../media/1377960/mitos_portuguesa_c_27_la-llorona.pdf` |
| c_28 La Sayona | `.../media/1377961/mitos_portuguesa_c_28_la-sayona.pdf` |
| bibliografía general | `.../media/1377963/mitos_portuguesa_e_bibliografia.pdf` |

Quedan sin resolver los nombres de archivo de **c_11 «El familiar o los pactos con el
diablo»** (= la familia de Juan Machete) y **c_14 «El amo del agua»** (= la familia del
Mohán). El número de media está calculado; falta el *slug*. **Pendiente de abrir la
página índice en navegador y copiar los enlaces.**

## Pieza por pieza

**La Bola de Fuego.** Compartida, y de las dos orillas hay registro. Colombia:
Martín 1979 la nombra entre los espantos llaneros; el EOT de Campohermoso registra la
versión de piedemonte con el látigo como defensa y **dice explícitamente que viene de los
Llanos Orientales**. Venezuela: Pérez Montero 2014 c_12, con tres testimonios y un
abanico de orígenes que Colombia no tiene —«el alma en pena de un obispo pecador, de un
hijo que maldijo a su madre, de **dos comadres que pelearon un jueves santo**, del judío
errante, **del tirano Aguirre**, o del espíritu vagante de una pareja enamorada que hizo
el amor en los días de Semana Santa». Esa lista es material nuevo para `versiones`.

**El Silbón.** **La pieza que más nos falta.** Está en los dos libros colombianos del
ciclo —Vargas Barón, relato 6.º; Baquero Nariño, p. 52; y Baquero abre su libro con un
«Corrio de duendes y brujas / Golpe del Silbón»— y **no tiene ficha en el catálogo**.
Del lado venezolano, Pérez Montero c_01 lo documenta con densidad: nace en **El Vijao
(distrito Rojas, Barinas)** o en **Guanarito (Portuguesa)**, según quién cuente; se
llamaría **Joaquín Flores**; mató a su padre por un venado y le llevó la asadura a su
madre. Y aporta el dato bibliográfico que explica su difusión: el compositor
**Dámaso Delgado** lo proyectó nacional e internacionalmente con su copla, y hay un
folleto anterior, **Juan Pablo Rojas Hidalgo, *El Silbón: mito o realidad*, Guanare,
Coordinación de Cultura del Estado Portuguesa, 1990**.

**La Sayona.** No tenemos ficha. Pérez Montero c_28 la documenta con testimonios
(quebrada de Araure; carretera vía San Carlos; urbanización Mamanico). **Y el eco
colombiano existe y está documentado en fuente oficial**: el EOT de Campohermoso
describe, sin nombrarla, a la mujer bella que «relinchaba como una mula» y se llevaba a
«los hombres mujeriegos y adúlteros», con el tiple como defensa. Ese par
—Portuguesa contra Campohermoso— es exactamente la comparativa que el spec §4.1 pide:
el mismo motivo en otro municipio, no Medea.

**La Llorona llanera.** No tenemos ficha llanera. Pérez Montero c_27 da la versión de
Portuguesa con su explicación colonial —una española «de mucho abolengo» que mata al
hijo tenido con un nativo— y tres testimonios.

**Juan Machete.** No tenemos ficha. Del lado colombiano, **Martín 1979 trae el motivo
completo sin el nombre**, en su sección «El pacto con el diablo»: el hombre que vende su
alma un Viernes Santo a cambio de fincas ganaderas, con **un toro negro que vigila al
amo**, y que muere una noche de relámpagos. Del lado venezolano, el capítulo 11 de Pérez
Montero, «El familiar o los pactos con el diablo». Ese cruce es el mejor material sin
usar de todo el encargo, y de paso reencuadra `el-toro-negro-patorreal`: el toro negro
de Vargas Barón no es una invención literaria suelta, **es la figura del «familiar»**.

**El Espanto del Río / el amo del agua.** Cap. 14 de Pérez Montero. Emparienta con
`madre-rio-o-mohana` (Baquero, p. 42) y con los Mohanes del EOT de Campohermoso.

## La escalera venezolana de segundo nivel

Citada dentro de Pérez Montero 2014 y por tanto verificada como existente, aunque **no
localizada en abierto**: Isabel Aretz, *Manual de folklore venezolano*, Caracas, Monte
Ávila, 1976 · Miguel Acosta Saignes, *Estudios de folklore venezolano*, Caracas, UCV,
1962 · Luis Arturo Domínguez, *Encuentro con el folklore en Venezuela*, Caracas, Cincel
Kapelusz, 1992.

---

# V. NARRADORES — todo nombre, hato, vereda y fecha encontrados

Hoy el corpus mestizo y mixto tiene **0 de 253 fichas que nombren a quien narra**
(spec §2). Esto es lo que este levantamiento encontró. Todo está en fuente abierta y leída.

## Orinoquía

| nombre | qué narró | lugar | fecha | fuente |
|---|---|---|---|---|
| **Víctor Pascual Herrera**, «Pascual», campesino, nacido en una vereda de **Quetame** (Oriente de Cundinamarca), con **40 años en el piedemonte** | las ocho narraciones de *Los cuentos de Pascual* | **vereda de El Carmen, Villavicencio (Meta)**, entre el **caño Maizaro** y el **caño Buque** | recogidas «a finales del siglo XX»; preámbulo firmado en **enero de 1991**, en la **finca Hato Chico** | Baquero Nariño, *Los cuentos de Pascual*, dedicatoria y preámbulo pp. 3-25 |
| **Alberto Baquero Nariño** | recopilador y reescritor declarado; «escritor e historiador, asesor de Planeación de la Universidad de los Llanos» | Villavicencio | 1991 / 2009 | el propio libro; revista *Orinoquia*, Unillanos, 2009 |
| **Getulio Vargas Barón** (n. 1933) | autor de los doce relatos; se declara «testigo presencial y actor de los hechos» y dice haber trabajado «entre charlas informales, reuniones de familia e investigación» | Meta / Villavicencio | 1996 | *Cuentos, mitos y leyendas del llano*, presentación |
| **Nacianceno Parra** y su hermano | mencionados como personas reales en el relato de Paratebueno, residentes en **Cumaral** y **Paratebueno** | Cumaral, Paratebueno | — | Baquero, p. 29 y ss. |
| **«el Pollo de Oro»** | entrevistado por Baquero «por esos días» | Villavicencio | c. 1990 | Baquero, p. 29 y ss. |
| **Miguel Ángel Martín** | folclorólogo; recopila creencias, coplas y el pacto con el diablo | Villavicencio | 1979 | *Del folclor llanero* |
| **Temis Perea Pedroza** | firma la versión del tesoro de Caribabare reproducida por Llanera.com | Casanare | c. 2010 | Llanera.com (fuente **baja**) |

Lugares citables con nombre y ya verificados: vereda de **El Carmen** y vereda de
**El Calvario** (Villavicencio), **Cumaral**, **Paratebueno**, **Hato Corozal** (antes
**La Yegüera**, parte de la hacienda jesuita **Caribabare**, 1664), **San Salvador del
Puerto de Casanare**, **Nunchía**, **Yopal** (antes **La Estancia**, posada ganadera de
**Elías Granados**, 1915), **Aguazul** (antes el caserío **Sevilla**; fundador **Efraín
Morales**), **Chámeza** (1629), **La Salina** (c. 1537), **Maní**, **Monterrey** (antes
**La Finca**, de **don Víctor Manuel Fernández**).

## Amazonas — la encuesta de Leticia, septiembre de 1975

Comisión del Instituto Caro y Cuervo llegada a Leticia el **17 de septiembre de 1975**,
una semana de trabajo: **Luis Flórez** (jefe de Dialectología), **Jennie Figueroa**,
**Marina Dueñas**, **María Luisa R. de Montes**, **José Joaquín Montes**, con el
dialectólogo español **Manuel Alvar**. Trabajaron en **Leticia** y en **Nazareth**.

| informante | qué narró | fuente |
|---|---|---|
| **Gladys de Bolívar** | El Cotomachaco (boa de dos cabezas, «vive por el Perú, en la selva, en cananguchal») **y** El Bufeo (el diente, la *pusanga*, el maleficio) | *Noticias Culturales* 179, pp. 6-9 |
| **Manuel Curitima** | El Cotomachaco (la versión larga, «50 metros o más de alto») **y** El Bufeo (el perro que aúlla, los soles gastados en la noche, el huequito bajo el sombrero) | ídem |
| **María Cachique de Vega** | El Bufeo: «se trasparenta es a gente… se aparece en forma del enamorao» | ídem |
| **Pedro Rodoyc** (grafía del escaneo; probablemente *Rodóy* o *Rodoy*) | El Bufeo: el diente que se usa «pa'cer brujería» | ídem |
| **Raimundo Curico** | El Bufeo: **distingue expresamente lo que vio de lo que le contaron** —«Claro que nojotros no hemos visto, pero… si contaban»— y clasifica tres clases de bufeo | ídem |
| **niños de 10 a 12 años del puerto de Leticia**, «hablan portugués y español» | El Bufeo: el juego, la fruta, el que se lleva a la gente | ídem |
| **Antonio Hernández Venancio**, **curaca** (jefe) **ticuna** | interrogado por Alvar y Flórez | **Nazareth** | ídem, fotografías |
| **José García**, hablante de **muinane**, y **Francisco Martínez** | informantes de la encuesta lingüística | ídem |
| **Heriberto Uribe** | facilitador local de la comisión, «conectándonos con personas adecuadas» | ídem |
| **Mike Tsalickis** | prestó la lancha para el viaje **Leticia–San José** | ídem |
| **Milton Jesús Pinto Linares**, Asociación Airumaküchi | «El mito de los alimentos» (base de `petapeta`) | CIFOR, **URL muerta (404)** |
| **Pedro Roque** | Honorato y la Cobra Grande, en Leticia | Rodríguez de Montes 1981, **no verificado en abierto** |
| **Guaraná Tanimuka** y **Ñaki Tanimuka** | narradores del ciclo ufaina según el módulo | von Hildebrand 1975, **por comprobar dentro del escaneo** |

## Venezuela (para `versiones` y `similitudes`, no para el `mito`)

De Pérez Montero 2014, todos con su capítulo: **Eduardo Daza** (vecino de Guanarito;
Bola de Fuego, camino de Charco Azul por Mata Larga y Garcitas, sabanas de El Toro, con
su sobrino **Rafael Daza**) · **Mercedes de Mena** (Bola de Fuego, Semana Santa, de Las
Matas a Guanare, a los nueve años) · **Matilde Torres** (Bola de Fuego, finca de Guásimo
Mayita, límite de Portuguesa con Cojedes) · **Francisco «Pancho» Orozco**, guanariteño de
**80 años** (el Silbón sería **Joaquín Flores**, de El Vijao, distrito Rojas, Barinas) ·
**Juan Francisco Tovar** (la Sayona y su hermano **Pedro Tovar**, quebrada de Araure) ·
**Francisco Ignacio Pérez** (la Sayona, carretera vía San Carlos, hoy urbanización
Mamanico) · **Eloy Armando Molina**, vecino de **Papelón** (la Llorona y el cementerio) ·
**Freddy José Virgüez** (la Llorona, a los 14 años, en Guanarito) · y, en el capítulo del
Silbón, **José Ramón Coronado, Mario Alvarado, Pilar de Salazar, Alejandro Asís Quintana,
Alejandro Barco, Filomena Montilla, Giovanni Falcón, Gustavo Olivares, Josefa García,
Julio Hernández, Rafael Pérez Hernández, Uslar García**.

---

# V-bis. Dos fuentes más, abiertas y verificadas hoy

**Gracineia dos Santos Araújo**, «Curupira: configuración del mito en las narraciones
orales de los pueblos de la selva», *Muiraquitã* (Universidade Federal do Acre), DOI
10.29327/210932.11.1-8. Universidade Federal do Pará, Faculdade de Letras, Castanhal.
URL verificada (200, PDF con texto, **en español**):
`https://periodicos.ufac.br/index.php/mui/article/download/6343/4220`.
Analiza la configuración del Curupira en narraciones orales del interior ribereño, con
la misión de protección de la selva como elemento común a todos los relatos estudiados.
**Sustituye al `cascudoCurupira` cuyo host está caído**, y es mejor: es análisis de
relatos orales recogidos, no una síntesis de 1947. Limitación: es Pará y Acre, no Leticia.

**Carlos G. Zárate Botía y Carlos E. Franky Calvo (eds.), *IMANI Mundo: estudios en la
Amazonia colombiana*.** Instituto Amazónico de Investigaciones IMANI, Universidad
Nacional de Colombia sede Amazonia. URL verificada (200, 1,8 MB, PDF con texto):
`https://bffrepositorio.unal.edu.co/server/api/core/bitstreams/f695cf95-e7df-4c12-ab1b-911b8f3b66d5/content`.
**Limitación, y hay que decirla claro: cero apariciones de «bufeo», «curupira» o
«leyenda» en todo el volumen.** Sirve como segundo escalón de territorio para las 12
fichas amazónicas, y para nada más. No se cita en `Similitudes`.

---

# VI. LO QUE NO EXISTE — qué se buscó y no se encontró

Esta sección es larga a propósito. El encargo lo autorizaba.

## Orinoquía

1. **«Miguel Ángel Ospino, *Leyendas del Llano*». No existe.** Búsqueda por autor, por
   título y por combinación con Villavicencio: nada. Lo que sí existe, y encaja con la
   descripción del encargo, es **Miguel Ángel Martín, *Del folclor llanero*, 1979**
   (§A1). Probablemente sea una confusión de nombre arrastrada.
2. **Nepomuceno Jiménez.** Buscado por nombre con «llano», «leyendas», «Casanare»,
   «Arauca», «folclor». **Sin resultado alguno.** No aparece ni como autor ni como
   recopilador en ninguna base abierta. Puede ser otra confusión: el nombre que sí sale
   en la bibliografía llanera es **Juan Nepomuceno Moreno**, el caudillo casanareño sobre
   el que escribió Jane Rausch.
3. **Los institutos de cultura de Casanare, Meta, Arauca y Vichada.** No se localizó un
   solo repertorio de tradición oral publicado y abierto por ninguno de los cuatro. Lo
   único institucional que apareció con contenido narrativo es municipal y de otro
   departamento: el **EOT de Campohermoso (Boyacá)** en el repositorio CDIM de la ESAP.
   **Queda pendiente**: el repositorio CDIM tiene EOT y PBOT de casi todos los municipios
   del país, y muchos incluyen un capítulo cultural con leyendas. **Esa es la veta que
   hay que picar para Casanare, Meta, Arauca y Vichada**, municipio por municipio.
4. **El corpus del joropo y el contrapunteo.** Martín 1979 tiene capítulos sobre la
   trova, el contrapunteo, la copla, el corrío y «Florentino y el Diablo», pero **no se
   localizó ningún cancionero digitalizado y abierto** que fije una de nuestras 19 piezas
   como texto cantado. El *Diccionario llanero* de **Hugo Mantilla Trejos** circula en
   `musica-llanera.com`, un sitio sin editor identificable: **no se usó**.
5. **El registro de «El tesoro de Caribabare» como relato.** Es el peor caso del ciclo.
   La historia de la hacienda está bien documentada (Rueda Enciso, Martín, Rausch). **El
   relato no tiene registro localizado**: sólo la versión de Temis Perea Pedroza
   reproducida por un sitio web regional. El padre Manare, la bóveda, el riachuelo
   desviado y la sombra de plenilunio **no aparecen en ninguna fuente de primer escalón**.
6. **Prensa llanera antigua.** Se buscó hemeroteca regional de Casanare, Meta y Arauca
   de mediados del siglo XX. **No se encontró ninguna digitalizada y abierta.** Lo único
   de prensa que hay son cuatro notas de *El Tiempo* de 1997-2005, que son recepción
   contemporánea, no registro antiguo. El tercer escalón del §4.1 **está vacío para este
   ciclo**, y conviene decirlo en vez de simularlo.
7. **La paginación del libro de Vargas Barón.** El ejemplar digitalizado no numera el
   índice. Sin el impreso no se puede citar página.

## Amazonas

8. **El texto de Rodríguez de Montes 1981.** 262 páginas, ocho versiones de El Bufeo, y
   **no está digitalizado en abierto en ninguna parte**. Es la carencia más cara del
   ciclo: seis de las doce fichas dependen de ella. Lo único abierto es la ficha
   descriptiva del Caro y Cuervo.
9. **Hugo Niño, *Primitivos relatos contados otra vez* (1979)** y **Fernando Solarte
   Lindo, *El hombre con cola de león* (1980)**. Ninguno de los dos está en abierto. Las
   únicas URL que existen son fichas de **Google Books**, prohibidas por el §4.2. Tres
   fichas (`chuya-chaqui`, `el-hijo-de-tuhixana`,
   `el-descubrimiento-del-agua-y-los-peces`) **no tienen hoy fuente legítima de su
   registro**.
10. **Revista *Mundo Amazónico* (IMANI / UFAM).** Revisada. **No se localizó ningún
    artículo sobre nuestras figuras.** La revista es de antropología social y ecología
    política, no de literatura oral.
11. **Instituto SINCHI.** Buscado. No se localizó material narrativo utilizable.
12. **El nombre «Angélica Lucas» de `madre-de-playa`.** Cero apariciones en fuente
    abierta. La propia nota del módulo lo llama «dato heredado del corpus».
13. **Dialnet.** Dos artículos pertinentes localizados —«Notas etnográficas sobre el
    cosmos Ufaina y su relación con la maloca» (cód. 4862345) y «Mitos y leyendas de la
    Amazonía brasileña y peruana» (cód. 7528487)—. **Las dos descargas devuelven 503
    repetido: pendientes de comprobar en navegador**, no muertas.

## Lo que hay que abrir en navegador, no dar por muerto

`revistafche.medellin.unal.edu.co` (Quirón, el inventario de bienes de Caribabare:
timeout) · `dialnet.unirioja.es/descarga/articulo/{4862345,7528487}.pdf` (503) ·
`cervantesvirtual.com` (3 URLs, 403) · `butantan.gov.br` y
`serpentesegentes.butantan.gov.br` (403) · `portaldoprofessor.mec.gov.br` (403) ·
`formacionenservicio.minedu.gob.pe` (403) · `africa.si.edu` (403) · la página índice de
`bibliofep.fundacionempresaspolar.org` para copiar los enlaces de los capítulos 11 y 14.

## Y la circularidad, que se cumplió

Buscando la Curupira, **el cuarto resultado orgánico fue
`mitosdecolombia.com/mitos/la-curupira`**. Somos, como avisaba el encargo, de los pocos
sitios que publican estos relatos. **No se usó ninguna URL nuestra ni de ningún espejo**,
y hay que contar con que volverá a pasar en `madre-de-playa`, `el-chuy-achaque` y
`petapeta`.

---

# VII. DECISIONES

Nueve decisiones. Cada una con tres opciones concretas, según la regla del proyecto.
Ninguna se ejecuta aquí: esto es el paso 1.

## D1. Faltan dos piezas de Vargas Barón y Baquero: **el Silbón, dos veces**

El Silbón está en los dos libros del ciclo (Vargas, relato 6.º; Baquero, p. 52, más el
poema de apertura) y **no tiene ficha**. Es, además, la figura llanera con mejor
bibliografía venezolana disponible.

- **A.** Crear **una sola ficha `el-silbon`** que use los dos registros colombianos como
  versiones de un mismo motivo, con Pérez Montero 2014 c_01 para el origen venezolano.
  *Ventaja:* una ficha densa y bien sostenida. *Coste:* mezcla dos obras firmadas.
- **B.** Crear **dos fichas**, `el-silbon-vargas` y `el-silbon-baquero`, siguiendo la
  lógica que el módulo ya aplica al separar subciclos por autor. *Ventaja:* coherente
  con `definitions-vargas` / `definitions-baquero`. *Coste:* dos páginas casi gemelas,
  que es justo lo que este bloque intenta evitar.
- **C.** No crear ficha y **documentar el Silbón dentro de `la-bola-de-fuego`**, como
  parte del repertorio que Martín 1979 y Vargas nombran juntos. *Ventaja:* cero páginas
  nuevas. *Coste:* se pierde la pieza mejor documentada del ciclo.
  → **Recomendación: A.**

## D2. Falta *El Centauro* (Baquero, p. 33)

- **A.** Crear `el-centauro-del-piedemonte`, con Pascual Herrera como narrador.
- **B.** Dejarlo fuera y anotarlo como decisión editorial explícita en el dossier.
- **C.** Absorberlo en `los-monstruos-de-paratebueno`, que comparte carretera y camino.
  → **Recomendación: A**, por simetría con D1: el módulo tiene 6 de 8 sin razón declarada.

## D3. `el-tesoro-de-caribare`: el slug conserva un error que ya nadie defiende

La forma documentada es **Caribabare** en Martín 1979, en Rueda Enciso 2018 y en el
inventario de Quirón. El módulo ya corrigió el título y dejó el slug «para no romper la URL».

- **A.** Mantener slug, título corregido. *(lo que hay hoy)*
- **B.** Cambiar a `el-tesoro-de-caribabare` con redirección 301 desde el viejo.
- **C.** Cambiar a `la-hacienda-caribabare` y reencuadrar la ficha como historia con
  leyenda adosada, que es lo que las fuentes sostienen.
  → **Recomendación: B.** La 301 es barata y el error ortográfico está publicado.

## D4. `el-llano-cobra-sus-deudas` no se llama así en el libro

El índice de Vargas Barón dice **«El Llano cobra sus cuentas»**, y el título del módulo
ya lo respeta. El slug dice `deudas`.

- **A.** Dejarlo. **B.** Cambiar a `el-llano-cobra-sus-cuentas` con 301.
- **C.** Cambiar slug y título a la forma del índice sin subtítulo.
  → **Recomendación: B**, en el mismo lote que D3.

## D5. `petapeta` y `ngutapa-y-chimuiyae` no son mixtos: son ticuna

Nimuendajú 1952 y el ciclo de Yoí y Jau son mitología ticuna, y la ronda 4 incluye
`ticuna-residual`.

- **A.** **Moverlas a la comunidad `ticuna`**, región amazonas, en el mismo lote.
- **B.** Dejarlas en `mixto` y declarar en la ficha que la atribución es ticuna.
- **C.** Dejarlas y abrir la pregunta al cierre de `ticuna-residual`.
  → **Recomendación: A.** El spec dice que «mixto» sin argumento no se publica, y aquí
  el argumento contrario está en la etnografía.

## D6. `el-descubrimiento-del-agua-y-los-peces`: tanimuka/ufaina

Von Hildebrand 1975 (RCA 18: 323-382), recuperado y vivo, más el perfil lingüístico
tanimuka del Ministerio de Cultura.

- **A.** Mover a la comunidad **tanimuka**.
- **B.** Dejar en mixto declarando que la versión publicada es la reescritura de Solarte
  y no el ciclo ufaina, que es lo que hoy dice la nota del módulo.
- **C.** Partir en dos: la reescritura de Solarte (mixto, literatura) y el ciclo ufaina
  (tanimuka, etnografía).
  → **Recomendación: C**, porque hoy la ficha confunde las dos cosas y las fuentes de
  cada una son distintas.

## D7. `yacuruna` es peruano, no colombiano ni mixto

- **A.** Retirarlo del catálogo colombiano.
- **B.** Mantenerlo y reencuadrarlo como **«figura amazónica de circulación peruana»**,
  con la atribución en el título y `Similitudes` apoyada en el bufeo de Leticia.
- **C.** Fundirlo con `el-bufeo` como variante del mismo motivo del hombre del agua.
  → **Recomendación: B.** La circulación transfronteriza es real; lo falso es el cajón.

## D8. `chuya-chaqui` y `el-chuy-achaque` son la misma figura, y ninguna tiene fuente viva

Dos fichas para *chulla chaki*: una es la versión breve leticiana (fuente 404), la otra
la reescritura de Hugo Niño (sólo Google Books).

- **A.** **Fusionar en una sola** `el-chullachaqui`, con la grafía quechua documentada,
  y declarar la versión de Hugo Niño dentro de `versiones`.
- **B.** Mantener las dos y buscar fuente nueva para cada una antes de escribir.
- **C.** Mantener sólo la breve y retirar la de Hugo Niño por falta de fuente citable.
  → **Recomendación: A**, y bloquear la redacción hasta que
  `bicentenario.gob.pe` o el MINEDU vuelvan a abrirse en navegador.

## D9. `madre-de-playa`: el caso sospechoso del ciclo

Sin registro abierto, con un nombre propio sin fuente y un perfil de sirena fluvial que
no aparece en el corpus de 1975.

- **A.** **Bloquear la ficha** y declararla `SIN REGISTRO` hasta conseguir el impreso de
  Rodríguez de Montes 1981.
- **B.** Reescribirla retirando «Angélica Lucas» y toda biografía, dejando sólo playa,
  guitarra y medianoche, con la fuente declarada como no verificada.
- **C.** Retirarla del catálogo, como se hizo con `chimbilaco`.
  → **Recomendación: A**, con **C** si el impreso no aparece. No **B**: publicar con la
  fuente declarada como no verificada es lo que el spec §4 prohíbe.

## Y una decisión que no es de ficha sino de módulo

**El `definition-helpers.mjs` de Orinoquía tiene que desaparecer.** Seis marcos
compartidos generan la `historia` y las `versiones` de 17 de las 19 fichas. Mientras
exista, la meta 3 del spec §3 (≤ 2 % de oraciones repetidas dentro del ciclo) es
inalcanzable por construcción. Y dos de sus afirmaciones son **falsas**, comprobado hoy:
que Vargas Barón publicó «once cuentos» (son doce) y que Baquero «no publica fichas de
informantes» (nombra a Víctor Pascual Herrera, su vereda y su origen).
