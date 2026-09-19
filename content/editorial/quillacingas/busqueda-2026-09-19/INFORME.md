# Quillacingas — investigación y reescritura de los 6 mitos

Fecha: 19 de septiembre de 2026
Comunidad en Neon: `quillacingas` · Módulo: `editorial/quillacingas/`
Entregables:
- `content/editorial/quillacingas/reescritura-2026-09-19/<slug>.json` (6 archivos)
- `content/editorial/quillacingas/fuentes-2026-09-19/<slug>.json` (6 archivos, fuentes estructuradas)

No se escribió en Neon, no se tocó ningún `.mjs` del módulo y no se ejecutó ningún script de aplicar.
No se usó la API de OpenAI en ninguna parte del trabajo. La investigación se hizo con WebSearch, WebFetch
y descarga directa de PDFs, extraídos localmente con `pdftotext`.

---

## 1. Punto de partida

El lote quillacinga llegaba con 13 URLs para 6 fichas (2,2 por ficha) repartidas **en bloque**: cinco de las
seis fichas usaban la misma lista `commonSources` con variaciones mínimas. Lo bueno del lote era que las 6
fichas nombraban narrador. Lo malo era que todo el peso documental recaía sobre un único trabajo de grado
(el de 2023) del que solo se había leído la transcripción, no el aparato analítico, y que las capas
`historia` estaban ocupadas por metacomentario editorial (URLs heredadas, imágenes retiradas, decisiones de
la revisión anterior) en vez de por contexto etnográfico.

## 2. Lo que se abrió y se confirmó

Se abrió y leyó completo:

| Fuente | Estado | Qué aportó |
|---|---|---|
| Benavides, Muñoz Araujo y Muñoz Botina 2023 (UdeNar) | PDF completo, 16.006 palabras | Las 6 transcripciones **y** los capítulos 6 y 7, que el lote anterior no había usado |
| Sarasty Guerrero y Ramírez Barco 2009 (UdeNar, Etnoliteratura) | PDF completo, 37.159 palabras | **Siete versiones más** de la creación de La Cocha, con narradores, edades y parentescos |
| Gutiérrez y Palacios 2011 (UdeNar) | PDF completo, 25.598 palabras | Entrevista fechada a Milena Jacanamejoy; petroglifos de Casapamba; la tesis que niega el poblamiento quillacinga |
| Chávez Hernández, Chiripua Valencia y Salazar Montenegro 2019 (UNAD) | PDF completo, 15.688 palabras | 1997 como año de la organización; taitas Camilo Rodríguez Quispe y Cristóbal; veredas |
| Perugache Salas 2017, *Maguaré* 31(1) UNAL | PDF completo | La reetnización del valle de Atriz; Refugio del Sol como el primer cabildo |
| Jojoa-Botina y Cerón-Rengifo 2022, *Sociedad y Economía* 46 | Artículo completo | El Proyecto Multipropósito Guamués y la Ramsar de 2000 |
| Cárdenas-Arroyo 1996, IFEA | Capítulo | Frontera arqueológica ≠ frontera etnohistórica |
| Hofmann 2016, *Indiana* 33(1) | Artículo completo | Las sirenas andinas surperuanas, paralelo documentado |
| MinJusticia 2019, Guía de justicia propia del resguardo | PDF completo | **Resolución 1610 de 1999** y **Acuerdo 200 de 2009**, en el membrete del propio resguardo |
| MinCultura, Caracterización Quillacinga | PDF completo | Decreto-ley 1421 de 1940; las tres hipótesis lingüísticas |
| PNN, ficha del Santuario Isla de La Corota | Página | 16,20 ha; «sitio sagrado de creación ancestral» |
| PNN, preconsulta 2018 | Página | La declaración de Zambrano contra la figura de sitio sagrado |
| Alcaldía de Pasto, 28-09-2023 | Página | Fecha exacta; Patricia Jojoa gobernadora en 2023; lema «Salvemos La Cocha» |
| UAO, Guaguas Quilla, 28-10-2020 | Página | Cuatro autoridades nombradas; el Despertar Quillasinga |
| Maguaré, ficha de *El llamado de Inti* | Página | Sinopsis oficial |
| elllamadodeinti.co, **8 capítulos** | Texto extraído de los `data.js` | Créditos completos y el texto íntegro de la obra |
| Ovidio, *Met.* I 452 (Perseus) | Página | Paralelo de contraste |
| Homero, *Od.* XII 39 (Perseus) | Página | Paralelo de contraste |

Se descartó:

- **FLACSO Andes, ficha «Cualanquizán»** (`resGet.php?resId=44622`): devuelve **403**. Además es una ficha de
  catálogo, y una ficha de catálogo no sostiene un relato. Anotado en `dudas`.
- **Módulo 1 de Visión Amazonía** (el que el lote llamaba «Mandato de Vida»): se abrió y se leyó. **Está mal
  descrito en el módulo actual.** Es un módulo formativo de 2026 del Instituto Universitario del Putumayo
  sobre mujeres indígenas de cabildos **del Putumayo** (Quillasinga Inti Wasi, Pastos, Siona, Misak). *Cita*
  el «Mandato de Vida: Refugio del Sol» (2022), pero no lo reproduce y sus informantes no son de El Encano.
  Se retira de las seis fichas. El Mandato de Vida real no se encontró en abierto.
- **Revista Nómade 8 (2025), Rodríguez Rosales, «Resguardo Indígena Quillacinga Refugio del Sol»**: existe y
  es pertinente, pero el PDF (15 MB) es un escaneo sin capa de texto. Solo se pudo leer el resumen. No se cita.
- Todo blogspot, Scribd, Wikipedia, prensa turística y notas de agencias de viaje sobre La Cocha.

## 3. Hallazgos que cambian el texto publicado

### 3.1 Faltaba un tercio del mito de La Cocha

La versión del taita Carlos Erazo publicada hasta ahora **omitía el episodio del Bordoncillo**, que ocupa el
último tercio de la transcripción: la sirena no quiere ni a su esposo ni a su amante, quiere al Bordoncillo;
él la soñó, ella le pidió tres canciones compuestas para su belleza y una serenata; al verla salir y sentarse
en una piedra se le olvidó el repertorio y solo se acordó de una canción de olvido y desprecio; ella se perdió
en el horizonte y él se quedó mirándola hasta volverse montaña. Es lo único que explica por qué ese cerro
mira la laguna desde lejos, y estaba fuera.

También faltaban: los **siete pueblos** obligatorios (el texto decía «varios»), la **maldición** explícita al
primer pueblo, la espera del **día del juicio** para el desencantamiento (marco escatológico católico
explícito), las **posiciones cardinales** de los cuatro cerros y que lo que asoma entre la totora son las
**iglesias** más altas de las siete ciudades sumergidas.

### 3.2 Casapamba decía otra cosa

Tres divergencias entre lo publicado y la fuente:

- Publicado: «pierden el camino o enferman». Transcripción: «**desaparece o queda atrapado**». (El resumen
  analítico sí dice «se pierden o se enferman», y el cuadro de rasgos identitarios dice «la enfermedad y la
  muerte». Tres formulaciones incompatibles en el mismo trabajo: ahora están las tres en `versiones`.)
- Publicado: «humildad, honradez y **verdad**». Transcripción: «**nobles**, humildes y honrados». «Verdad»
  era invención; «noble» se había caído.
- Faltaba por completo: «**las personas que conocen la medicina de páramo tienen que realizar esta prueba**».
  Es la frase que convierte el relato en una regla sobre quién puede ejercer un oficio, y no estaba.

Se añade además un anclaje material que nadie había conectado: en 2011, Milena Jacanamejoy nombró entre los
lugares representativos del territorio «la piedra, los **petroglifos de San José, en Casapamba**». El camino
del saber pasa por un sector de piedras grabadas.

### 3.3 La sirena tenía una frase inventada

«El don no puede convertirse en motivo de alarde ni usarse para separarse de los demás» no está en ninguna
fuente. Retirada, y anotada en `dudas`. En cambio se recupera del capítulo 6 del trabajo de 2023 que la sirena
escoge a quienes «poseen la capacidad de compartir y transmitir los dones otorgados por ella»: no premia la
necesidad, premia la disposición a repartir. Y aparece una divergencia real: la transcripción dice que hay que
ocultar **de quién o de dónde viene** el don; el resumen analítico dice que hay que ocultar **el don**. No es
lo mismo en un relato que además obliga a usarlo en público.

### 3.4 La Corota tiene cinco orígenes, no dos

El lote anterior conocía dos (la silla de mama Lilian Munyui y el pilche del taita William Jojoa). Hay cinco:

1. **La silla** — mama Lilian Munyui, 2023.
2. **El pilche volteado** — taita William Jojoa, 2023.
3. **El pilche volteado, otra mano** — Patricia Jojoa, 2023, dentro del Rabo de Casapamba.
4. **Las piedras que corren** — Hugo Bayardo Miramag Jojoa, 67 años, vía Roland David Tulcán, 2009: una bruja
   grita «que se unan las piedras, y las que corran más ligero tendrán nombre como lo es la isla larga y La
   Isla Corota».
5. **El templo sepultado** — Clara Criollo, 78 años, vía Bayron Miramag, 2009: el dios del fuego tapó con
   rocas y tierra el templo que no alcanzó a cubrir el agua, y el oro de la ciudad sigue en sus entrañas.

Y una sexta lateral: Cristian Trejo, 14 años, cierra su versión con «esta mujer es la corota que quedó acostada».

Además, el mismo trabajo de 2023 se contradice sobre el número de bases de la isla: **cuatro** en la
transcripción, **una** en el resumen analítico.

### 3.5 Los colibríes: dos relatos distintos en el mismo documento

La transcripción y el resumen analítico de la creación de los colibríes difieren en **cuatro** puntos, no en
uno (el lote anterior había detectado solo el de la dirección del viaje):

| | Transcripción (cap. 5) | Resumen analítico (cap. 6) |
|---|---|---|
| Ruta | **Venían** del Valle de Sibundoy | **Se dirigían** al Valle de Sibundoy |
| Elección | El cacique ofrece muerte o transformación; **ambos eligen** | «Tomó medidas extremas… **para separarlos los convirtió**» |
| Sol y Luna | Invoca a los astros, pide penitencia ejemplar, tiene una revelación | Ausentes |
| Marco | «En tiempos prehispánicos» | «En tiempos prehispánicos» |

La segunda diferencia es la grave: si no hay elección, el relato deja de ser lo que es. Se sigue la
transcripción extensa y se registra la divergencia.

### 3.6 *El llamado de Inti*: se leyeron los ocho capítulos

Los capítulos 2–8 del e-book son exportaciones HTML5 de Construct sin texto en el HTML. Se extrajo el texto de
los `data.js` de cada capítulo. Resultado: el resumen publicado era correcto en lo esencial, pero le faltaba
precisión que ahora sí tiene —**pacha wasi**, **guaguaquilla** glosado por la obra como «niño de luna»,
el **Tábano como cerro sagrado**, el **Queche** explicitado como el arcoíris, los **motilones**, y sobre todo
que la comunidad se fue «**en busca de oportunidades en las grandes ciudades**»: una migración económica, no
una partida genérica.

Dos cosas nuevas:

- Los **créditos completos**, que el módulo no tenía: dirección de Roberto Niño Betancourt y Diana Moreno
  Hernández, producción de Miriam Lizcano G., ilustración de Melisa Moreno y Fernando Yela, animación de
  Andrés Huertas, **música original de la Escuela de Música Ancestral Guaguas Quilla**, narración de Camilo
  Narváez, mentoría de Fernando Guerrero, © 2017 Juanete Comunicaciones. La escuela que puso la música es la
  misma que documenta la nota de la UAO de 2020: el e-book y el Despertar Quillasinga no son dos cosas.
- La pareja del capítulo 5 lleva «**adornos en sus caras y la piel pintada**» y pide agua. Es la cita al
  episodio de los amancebados y el pilche, y estaba invisible en el resumen anterior.
- Un desajuste del propio e-book: el capítulo 6 repite la escena de los duendes del capítulo 3 y cambia los
  motilones por **moras**.

### 3.7 El corpus oral de El Encano estaba sin usar

El trabajo de 2009 se citaba como respaldo genérico. Contiene **siete versiones completas** con narrador,
edad y parentesco:

1. **«La ciudad perdida»** — Nelcy Jojoa, de su abuelo José Santos Jossa. El mate se vuelve isla, la muchacha
   sirena, la anciana «la vieja», y el niño que dio el agua se vuelve **el duende que vive en las chorreras**.
2. **«Los amancebados»** — Nelsy Jojoa, de su abuela María Jesús Erazo. Tres niños ricos; el desencantamiento
   depende de quitarle **un anillo del dedo corazón** a la muchacha del fondo.
3. **«El encanto de la Laguna de La Cocha»** — Roland David Tulcán, de su tío Hugo Bayardo Miramag Jojoa, 67.
   Una **bruja del Amazonas** que anda buscando una laguna para encantarla.
4. **«La ciudad encantada»** — Bayron Miramag, de Clara Criollo, 78. Ciudad que adora al sol, dios del fuego,
   oro bajo La Corota.
5. **«La formación de La Cocha»** — Ángela Jacanamijoy, de su padre Rafael Jacanamijoy, 63. **Ñamuy**, creador
   que trajo a los **Mocoas**, dio la yuca y, tomando forma de niño, entregó el agua contra su propio mandato.
6. **«Laguna de la Cocha»** — Aura Yomar Jossa, 15.
7. **«Historia de la Cocha»** — Cristian Trejo, 14.

Dos motivos que no estaban en ninguna ficha: el **tábano es un insecto** que pica en el cuello o en la nalga a
quien intenta beberse la creciente y lo obliga a devolverla (la etiología del nombre del cerro); y la lectura
de **Luis Manuel Montenegro**, citada allí, que ordena las variantes regionales según cuán censurada esté la
pareja, desde «una pareja mala» hasta «una pareja de hermanos», es decir hasta el incesto.

Cautela metodológica, ahora anotada: son textos **escritos por estudiantes** de la Institución Educativa El
Encano a partir de lo que oyeron en casa, y la propia tesis distingue a los estudiantes que pertenecen al
cabildo de los que no.

### 3.8 Lo prehispánico y lo contemporáneo (regla 8)

Esta era la exigencia más fuerte del encargo y ahora tiene fechas:

- **Siglo XVI**: Cieza de León registra en el valle de Atriz «indios y naciones, a quien llaman los Quillacingas».
- **Arqueología**: Cárdenas-Arroyo advierte que «los quillacinga nunca han sido asociados con complejos
  cerámicos», de modo que la frontera arqueológica no coincide con la etnohistórica.
- **1940**: el Decreto-ley 1421 declara inexistentes los resguardos; entre 1943 y 1958 se parcelan 19
  resguardos quillacingas (MinCultura).
- **1997**: arranca la organización por la tierra en Romerillo, Naranjal, El Motilón, Santa Lucía, Santa
  Teresita, Santa Clara, El Carrizo, **Casapamba**, Santa Isabel, El Puerto, El Socorro y El Encano Centro (UNAD 2019).
- **1998–1999**: proceso de reconocimiento. **Resolución 1610 del 10 de mayo de 1999** del Ministerio del
  Interior: existencia de la parcialidad indígena Refugio del Sol.
- **1995–2002**: Proyecto Multipropósito Guamués. Se pretendía desviar el río Guamués hacia el río Pasto para
  una hidroeléctrica. La oposición reunió a la ADC, a Ecovida, a la Universidad de Nariño y —textual— a los
  «indígenas que en ese momento estaban en proceso de reetnización» como quillasingas. **Ramsar en 2000**,
  licencia negada en **2001**.
- **2009**: Acuerdo 200 del INCODER, figura de resguardo.
- **2017**: Perugache documenta que Refugio del Sol fue **el primero** de los cabildos del valle de Atriz, y
  que antes de los noventa el nombre «quillasinga» lo usaban cronistas y académicos, no los habitantes, que se
  nombraban por su vereda.

**El hallazgo de fondo**: el cabildo que narra el origen de La Cocha se constituyó como quillasinga en los
mismos años y dentro de la misma lucha en que se impidió que esa laguna se drenara para una hidroeléctrica.
No es contexto de adorno: es lo que explica por qué estos seis relatos existen hoy como corpus.

### 3.9 Hay quien niega que haya habido quillacingas en El Encano

El dato más incómodo y el que más obligaba a separar sujetos. El trabajo de 2011 recoge, citando a **Edilberto
Hidalgo Meza**, que El Encano lo poblaron a finales del siglo XIX colonos venidos de **La Laguna, Cabrera, San
Fernando y Pejendino Reyes** en busca de madera para sus capillas y casas; nombra a los primeros habitantes
(Valerio Erazo, Ángel Zúñiga, Pedro Evangelista Jojoa, Floro Narváez, Manuel Jesús Botina); registra que **El
Encano dependía del Putumayo y más exactamente de Sibundoy, donde mandaban los jesuitas**, y que solo pasó a
ser corregimiento de Pasto por acuerdo del Concejo Municipal en **1945**.

Ese dato administrativo, de paso, le da pie de tierra al mito de los colibríes: la ruta Sibundoy–La Cocha que
recorren Ají y los viajeros era la ruta real de dependencia del corregimiento.

### 3.10 La Corota: dos posiciones institucionales incompatibles

- La ficha oficial de Parques Nacionales: «la isla representa para estas comunidades **un sitio sagrado de
  creación ancestral**».
- El jefe del área protegida, Iván Mauricio Zambrano, en la preconsulta de finales de 2018: «vamos a promover
  que se declare como **un sitio de especial sentido espiritual, más no que se declare como un sitio sagrado**
  porque las implicaciones que tiene un sitio sagrado son mucho más fuertes e incluso pueden llegar hasta
  plantearnos que no se haga turismo».

Y una capa anterior: la capilla de la Virgen de Lourdes de la isla se levantó, según el registro de 2011,
sobre un lugar de adoración atribuido a **los Mocoas**.

### 3.11 Cualanquizán

No hay base para vincularlo a Refugio del Sol. Es un topónimo del altiplano de Túquerres y Sapuyes —aparece
junto a Cunchila y Cuarrís como sitio ceremonial— al **occidente** del Guáitara, y Cárdenas-Arroyo sitúa la
frontera etnohistórica quillacinga **al oriente** de ese río. La única fuente que el módulo tenía (FLACSO) da
403 y es una ficha de catálogo. La dirección `/mitos/cualanquizan` se conserva con la creación de La Cocha,
y la razón queda registrada en `dudas`, no en el texto publicado.

---

## 4. Reparto de fuentes ficha por ficha

Se pasó de una lista en bloque a **8 fuentes por ficha, ordenadas por peso**, con las tres primeras como
fuentes clave. Ninguna ficha repite el mismo orden.

| Slug | 1.ª (clave) | 2.ª (clave) | 3.ª (clave) |
|---|---|---|---|
| `cualanquizan` | Benavides et al. 2023 | Sarasty y Ramírez 2009 | Gutiérrez y Palacios 2011 |
| `el-llamado-de-inti` | e-book Juanete 2017 | Maguaré | Gutiérrez y Palacios 2011 |
| `origen-de-la-isla-la-corota` | Benavides et al. 2023 | PNN, ficha del Santuario | Gutiérrez y Palacios 2011 |
| `el-rabo-de-casapamba` | Benavides et al. 2023 | Gutiérrez y Palacios 2011 | Chávez et al. 2019 (UNAD) |
| `creacion-de-los-colibries` | Benavides et al. 2023 | MinCultura, caracterización | Perugache 2017 |
| `sirena-de-la-laguna-de-la-cocha` | Benavides et al. 2023 | Hofmann 2016 | Sarasty y Ramírez 2009 |

Fuentes nuevas incorporadas al lote (9): Chávez Hernández, Chiripua Valencia y Salazar Montenegro 2019 (UNAD); Perugache Salas 2017;
Cárdenas-Arroyo 1996; Jojoa-Botina y Cerón-Rengifo 2022; Hofmann 2016; MinJusticia 2019 (guía de justicia
propia del resguardo); PNN ficha del Santuario. Fuentes retiradas (3): FLACSO Cualanquizán (403 y catálogo);
Módulo 1 de Visión Amazonía (mal atribuido); Ovidio y Homero se conservan solo donde el contraste es el
argumento, uno en cada ficha.

## 5. Contrato: verificación

| Slug | mito | historia | versiones | similitudes | lección | fuentes | dudas |
|---|---|---|---|---|---|---|---|
| cualanquizan | 577 | 384 | 360 | 242 | 12 | 8 | 6 |
| el-llamado-de-inti | 593 | 338 | 295 | 258 | 14 | 8 | 6 |
| origen-de-la-isla-la-corota | 344 | 337 | 338 | 255 | 12 | 8 | 6 |
| el-rabo-de-casapamba | 415 | 337 | 303 | 254 | 11 | 8 | 7 |
| creacion-de-los-colibries | 430 | 369 | 286 | 261 | 12 | 8 | 6 |
| sirena-de-la-laguna-de-la-cocha | 391 | 320 | 325 | 253 | 14 | 8 | 6 |

Rangos exigidos: mito 300–650 · historia 220–600 · versiones 170–550 · similitudes 150–450 · lección 8–22.
Las seis lecciones son una sola frase afirmativa, sin nombres propios y sin imperativos morales.
Ninguna ficha declara carencia en el texto publicado: los 37 vacíos y contradicciones detectados están en `dudas`.

## 6. Fuentes estructuradas

`fuentes-2026-09-19/<slug>.json` repite las mismas obras y el mismo orden del campo `fuentes` de la
reescritura, en forma de objetos con `title`, `author`, `year`, `type`, `url`, `summary` y `limitation`.

- **48 entradas sobre 18 obras canónicas.** Cada obra tiene una sola URL, un solo `title`, un solo `author`,
  un solo `year` y un solo `type` en los seis archivos; lo que cambia entre fichas es `summary` y `limitation`.
  Verificado: ningún metadato diverge entre ocurrencias de la misma URL.
- **Los `summary` son por mito, no por obra.** El trabajo de 2023 aparece en las seis fichas con seis
  resúmenes distintos; el de 2011, en seis; el de 2009, en cinco; el boletín de la Alcaldía, en cinco.
  Verificado: ninguna obra repetida lleva dos veces el mismo `summary`.
- **`limitation` está en las 48 entradas** y es donde se marca la distinción entre lo prehispánico y los
  cabildos de hoy: que el corpus de 2023 es registro oral de un cabildo constituido en 1999; que
  Cárdenas-Arroyo trata la entidad arqueológica y no el cabildo vivo; que las fichas de Parques Nacionales
  son documentos de gestión ambiental y no etnografías; que el e-book de Inti es obra de autor de 2017;
  que las versiones de 2009 las escribieron estudiantes de bachillerato; que Ovidio y Homero son contrastes
  formales sin filiación histórica. Nada de eso se pinta en el sitio.
- Dos `year` van en `null` por no tener fecha comprobable: la ficha del Santuario de La Corota y la Odisea.
  El año 2010 de la caracterización de MinCultura es inferido y así queda dicho en su `limitation`.

## 7. Lo que queda abierto

1. **«Mandato de Vida: Refugio del Sol» (2022)** — citado por el propio resguardo y por autos de la Corte
   Constitucional (A674-22, A2590-23), no publicado en abierto. Es la fuente primaria natural de la comunidad.
2. **Muñoz Timarán, Navia Martínez y Pardo Martínez, «Mitos, ritos y leyendas de La Cocha», Pasto, 1997** —
   el corpus más antiguo que se menciona, con «El nacimiento de la corota» y «El nacimiento de la cocha».
   No está en línea. Vale la pena pedirlo a la Universidad de Nariño o a la casa cabildo.
3. **Revista Nómade 8 (2025), Rodríguez Rosales** — escaneo de 15 MB sin OCR. Se puede OCRizar.
4. **Ninguna de las seis entrevistas de 2023 tiene fecha, vereda ni edad del narrador.** Es la carencia
   transversal del lote y la única que no se puede resolver sin ir a la fuente o a la comunidad.
5. **Hidalgo Meza** (la versión que niega el poblamiento quillacinga de El Encano) solo se conoce de segunda
   mano, por la cita de 2011.
6. **Circularidad**: los nombres «Ají» y «Flor» y el topónimo «Rabo de Casapamba» solo devuelven, fuera del
   trabajo de 2023, el propio sitio y sus derivados. Anotado en `dudas` de las fichas respectivas.
7. El e-book de Inti no identifica a ningún narrador ni acuerdo con el cabildo pese a declararse «basado en
   los relatos del pueblo indígena Quillasinga».
