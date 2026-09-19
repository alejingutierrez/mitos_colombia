# Barí (motilón-barí) · búsqueda y reescritura · 2026-09-19

Seis mitos. Se investigó con WebSearch y WebFetch; no se usó la API de OpenAI ni
ningún modelo. Todas las URL que aparecen en los entregables se abrieron, se
descargaron y se leyeron: no hay ninguna que sólo responda 200.

## Punto de partida

El módulo `editorial/bari/` traía 8 URL para 6 fichas (1,3 por ficha). De esas 8,
una era una ficha de catálogo de la Biblioteca Virtual Miguel de Cervantes y otra
un PDF alojado en el sitio personal de un periodista. El texto no estaba
plantillado —0 % de oraciones repetidas—, así que la reescritura era de mejora y
de procedencia, no de desmontaje.

El pool pasa de 8 a 9 obras, todas leídas íntegras, y la media sube a 7,2 fuentes
por ficha (mínimo 7, máximo 8).

## Lo que se encontró y no estaba

**1. Dionisio Castillo Caballero, «Los barí. Su mundo social y religioso»
(Naturaleza y Gracia XXVII/3, 1980, pp. 413-708).** Es la fuente que faltaba y es
la que manda. 296 páginas, con los relatos grabados en cinta magnetofónica en
Saimadoyi y Bokshí y traducidos con intérpretes barí. Nombra a sus diecisiete
informantes y traductores uno por uno: Adolfo Akairagdóu, Fernando Akuéro,
Emiliano Ukschurí, Luis Asebo Koronbará, Arturo Akokdakái, José Akírikdá, Basá
Iktobarí, Alirio Okiáno, Francisco Akogdakágda (Atáida), Juana Addò, Israel
Ayibáschki, Agustín Abusánki, José Okshabí, y como traductores Jesús Bakéki,
Daniel Arurí, Flory Ashundubá, Josefina Anbiá, Florentina Abigyá, Daniel
Karebadóu y Octavio Abaktuséba. Está en la Biblioteca Digital Capuchina
(bidicap.org), abierta y sin registro. Toda la bibliografía posterior que el
módulo usaba —Jaramillo 1993, «Mundo Barí», Sánchez Pirela 2006, Hernández Gómez
2015, Fernández Soto y González 2012— depende de esta obra, casi siempre sin
decirlo.

**2. Orlando Jaramillo Gómez, «Los Barí», en Geografía humana de Colombia,
Nordeste indígena, tomo II (ICCH, 1993).** La copia HTML de la Biblioteca Luis
Ángel Arango está bloqueada por Radware Bot Manager, pero el tomo completo se
descarga sin problema por la API de CONTENTdm de Babel
(`.../p17054coll10/id/2809/download`). Trae la nómina de saimadoyi, los nombres
de los primeros ñatubái y el mapa de los siete cielos con sus nombres barí. Es el
original colombiano del que «Mundo Barí» es un resumen.

**3. Zaidy Fernández Soto y Asmery González, «Los barí: historia, sociedad y
cultura» (Fundación Editorial El perro y la rana, Caracas, 2012).** La entrada
venezolana. Escrito tras quince años de convivencia en el Zulia, cita a ancianos
con nombre (Bernardo Ychiriyera, Daniel Santos) y da la versión venezolana del
mito de la ceniza.

## Correcciones de dato

- **El autor de «Somos barí» es Hortensia Galvis Ramírez, no «Luis Galvis».** Es
  periodista santandereana y el libro es de Editorial Presencia, Bogotá, 1995,
  escrito en defensa de la labor del misionero Bruce Olson. Cinco de los ocho
  textos barí que Rocha antologa salen de ese libro. El módulo debe corregir el
  nombre de pila.
- **Sibabió no es un nombre propio.** Tres fuentes independientes lo dicen:
  Castillo afirma que en sus grabaciones nunca apareció el nombre de la viejecita
  y que sibabió quiere decir viejecita; Fernández Soto y González anotan que
  todas las ancianas barí son llamadas así; y el propio Mandato de Justicia de
  2021 usa «shibabio» como título de las sabias de la comunidad. Hay además, en
  la tesis de Hernández Gómez, una segunda sibabió distinta, la saimadoyi
  encargada de la lluvia. El título de la ficha se ajustó a «La sibabió y las
  cenizas del mundo»; el slug se deja para no romper enlaces y la decisión queda
  planteada.
- **Los «cóndor y buitre» de la versión de Galvis son los zamuros.** En el corpus
  grabado son los bachirugdú (zamuro de cabeza blanca) y los bagchíba (zamuro
  negro), que Hernández Gómez sitúa en Barún Aschuá, el mismo cielo donde vive la
  Luna. El emparejamiento no lo hace ninguna fuente: sale de cotejar Castillo con
  Hernández y con el texto de Galvis.
- **El yácura no existe fuera de un solo libro.** El causante de los terremotos
  en «Caminar liviano» sólo aparece en el texto venezolano de De Armellada y
  Bentivenga. El corpus grabado en lengua barí llama ñankú a esos seres y explica
  el temblor por la persecución de los basunchimba.
- **De Armellada y Bentivenga, «Literaturas indígenas venezolanas», es de 1975**
  (Monte Ávila, Caracas), cuarta edición 1991. El módulo decía «1991 a partir de
  una edición de 1974».
- **La obra de Castillo circula con tres datos**: monográfico de 1980, libro de
  1981 (así la citan Jaramillo y Hernández) y segunda edición de 1989 con el
  título «Mito y sociedad en los barí» (Amaru, Salamanca; así la cita Fernández
  Soto). El ejemplar verificado y leído es el de 1980.

## Contradicciones documentadas que ahora van en `versiones`

No se fundieron. Cada una queda con quién dice qué.

1. **Castillo contra De Alcácer**, sobre el bejuco: «No hemos encontrado tampoco
   narración alguna en la que se diga que los bejucos los cortaron los zamuros,
   como él indica», y añade que Alcácer entremezcla mitos de ascensión con mitos
   de ultratumba y que hacer vivir a los barí en el cielo antes que en la tierra
   carece de coherencia interna. Es exactamente la versión que el módulo
   heredado presentaba como segunda variante legítima.
2. **Castillo contra De Alcácer**, sobre el más allá: rechaza por «arbitraria» la
   afirmación de que la existencia del motilón es tan material que el más allá
   está casi ausente de su conciencia.
3. **Castillo contra Villamañán**: el niño comido no era hijo de Sabaséba, y la
   viuda «Oséndou» a la que Urundóu esparce las cenizas desvirtúa el sentido del
   mito.
4. **Castillo contra Jaulin**: el nombre «Oséshibabio» y la lectura del episodio
   como memoria de antropofagia barí no tienen base.
5. **Castillo contra D'Empaire**: hacer descender a los barí del sol por una
   liana (Kasmera 2, 1966, p. 272) es un error.
6. **Hernández Gómez contra Castillo**: que Sabaséba acompañe a Ñandóu en su
   recorrido diario contradice la delegación de funciones; en su versión sólo
   viaja Ñandóu.
7. **Rocha contra sí mismo**: cita el texto de De Alcácer como «citado por De
   Villamañán» en la introducción y como «citado en Neglia y Olson» al pie del
   relato.

## Lo que quedó fuera y por qué

- **Ficha de la Biblioteca Virtual Miguel de Cervantes** sobre la antología de
  Rocha: es un registro de catálogo. Acredita la publicación, no sostiene ningún
  relato. Retirada.
- **«Mundo Barí. Un pueblo que se niega a desaparecer»**: monografía de
  divulgación alojada en `mariojavierpacheco.net`, sitio personal de uno de sus
  colaboradores. Su capítulo mitológico es un resumen casi literal del de
  Jaramillo Gómez de 1993, que ahora está en el pool. Retirada; los datos que
  aportaba se reatribuyeron a Castillo y a Jaramillo.
- **academia.edu, Scribd, blogspot, Tumblr, todacolombia, ONIC, Joshua Project,
  over-blog**: aparecieron en las búsquedas de «Sabaseba» y de «mito barí». No se
  usaron.
- **Beckerman y Lizarralde**: existen y son la etnografía seria de referencia
  («The Ecology of the Barí», University of Texas Press, 2013; «Historia
  contemporánea de los barí», Antropológica 58, 1982; «Barí settlement patterns»,
  Human Ecology). No entran porque son ecología, demografía y etnohistoria: no
  publican corpus mítico, y los textos accesibles están tras muro de pago o en
  academia.edu.
- **Antropológica (Fundación La Salle) y Boletín Antropológico (ULA)**: se buscó
  el archivo digital de ambas. El número 42 (1975) con «Cosmovisión y
  religiosidad de los barí», de Adolfo de Villamañán, que es la fuente que
  Castillo discute una y otra vez, **no está en línea**. Es el hueco más grande
  que queda.
- **Venezuela Misionera 31 (1969)**, con «Misión y antropología. Origen de los
  hombres y cosas del otro mundo según la tradición de los motilones barí», del
  mismo Villamañán: tampoco está en línea. Las dos variantes que trae —los
  nombres Yogbaságda y Nakendóu para los que subieron a la Luna, y Oséndou para la
  viejecita— se citan a través de Castillo.
- **Jaulin, «La paz blanca» (1973)**, y **Alcácer, «El indio motilón y su
  historia» (1962) y «Los barí, cultura del pueblo motilón» (1964)**: sólo
  disponibles en catálogos. Se citan a través de Castillo y de Rocha.
- **«Somos barí» de Hortensia Galvis (1995)**: el libro no está en línea. Sus
  textos se leen a través de la antología de Rocha, que los reproduce íntegros.

## URLs caídas o con obstáculo

- `www.banrepcultural.org/blaavirtual/geografia/geograf2/bari*.htm` — responden
  200 pero devuelven la pantalla de bloqueo de Radware Bot Manager, tanto por
  curl como por WebFetch. **Ruta alterna que sí funciona**: la API de Babel,
  `https://babel.banrepcultural.org/digital/api/collection/<coll>/id/<id>/download`.
  Así se bajaron el tomo de Geografía humana y la antología de Rocha.
- `publicaciones.banrepcultural.org` — falla la cadena de certificados TLS
  («unable to verify the first certificate»). No se pudo leer la reseña de «Somos
  barí» en el Boletín Cultural y Bibliográfico.
- Ninguna de las 8 URL heredadas está caída. Las 7 que se conservan responden 200
  y sirven el documento correcto.

## Circularidad

Se buscaron los nombres propios de las fichas fuera del sitio. «Sabaseba» tiene
resultados independientes de sobra. En cambio **«Ñanbobikorái», «Taigda
Chigbana» y «adschuguiróridóu» no arrojan resultados independientes útiles**: lo
que aparece o remite a resúmenes derivados de Jaramillo Gómez o reproduce este
mismo sitio. La corroboración real de esos tres nombres es la lectura directa de
Castillo (1980) y de Rocha (2010), no la web abierta. Queda anotado en `dudas`.

Dos términos que venían en las pistas del encargo, **«ohbabaquiyí» e
«Ichirrindiganá», no aparecen en ninguna de las nueve obras leídas ni en la web
abierta**. Lo más parecido es Ichirrindacayra, que es el nombre de una comunidad
barí del Catatumbo con 231 habitantes según el censo interno de 2016, no una
figura mítica. No se usaron.

## Vecindad de la frontera

Cinco de las nueve obras son venezolanas o se hicieron en Venezuela: Castillo
(Zulia, Saimadoyi y Bokshí), Fernández Soto y González (Zulia), Sánchez Pirela
(Maracaibo), y los textos de De Armellada y Bentivenga y de Villamañán que llegan
por la antología de Rocha. Cuatro son colombianas: Jaramillo Gómez, el Mandato de
Justicia, el documento de memoria histórica y el micrositio del CNMH. La tesis de
Hernández Gómez trabaja los dos lados. Cada entrada de `fuentes-2026-09-19/`
marca de qué lado viene, en `limitation`, en todas las fichas sin excepción.

El reparto real es incómodo y conviene decirlo aquí: **el corpus narrativo
grabado en lengua barí es venezolano**, y los documentos colombianos que lo
recogen —Jaramillo 1993, el documento de memoria de 2016— lo toman de allí. Lo
propiamente colombiano y de primera mano es el Mandato de Justicia de 2021, que
es breve y deliberadamente parcial, y el testimonio de Víctor Asabana, de la
comunidad Shubaarina, sobre los pactos sadoyi.

## Lo que sigue sin fuente

- El episodio de las **estrellas** (las luciérnagas nacidas de las frutas de
  coroso, y los coyuyos nacidos de las gotas de sangre) sólo consta en Castillo.
  Ninguna otra fuente lo recoge.
- **Taigda Chigbana** y el **yácura** sólo constan en el texto de De Armellada y
  Bentivenga. No se pudo establecer de dónde lo tomaron ellos.
- El término **adschuguiróridóu** sólo consta en Castillo.
- El pasaje de la **colmena y la hendidura de barro** aparece en Galvis (1995) y
  en el documento de memoria histórica (2016) casi con las mismas palabras. La
  coincidencia textual sugiere que el documento comunitario lo tomó de la fuente
  impresa y no de la tradición oral directa. No se pudo verificar.
- La **ortografía** no está resuelta en ningún punto: Nandu / Ñandou / Ñandóu /
  Yãdou; Chibaig / Chibáig; Sabaseba / Sabasëba / Sabaserbara / Samaydodjira;
  Ihkí / Iquibocyi / Iquiboqui. Cada fuente usa la suya y ninguna declara un
  criterio. Las fichas usan las formas acentuadas y listan las variantes en
  `versiones`.

## Entregables

- `content/editorial/bari/reescritura-2026-09-19/<slug>.json` — 6 archivos.
  Rangos cumplidos en los 30 campos medidos; conteos calculados, no estimados.
  **0 % de oraciones repetidas entre las seis fichas** (349 oraciones medidas).
- `content/editorial/bari/fuentes-2026-09-19/<slug>.json` — 6 archivos, mismas
  obras y mismo orden que el campo `fuentes` de la reescritura, verificado
  programáticamente por URL. Una obra, una URL canónica; `summary` y `limitation`
  distintos en cada uso.
- No se escribió en Neon, no se tocó `editorial/bari/*.mjs` y no se ejecutó
  ningún script de aplicar.
