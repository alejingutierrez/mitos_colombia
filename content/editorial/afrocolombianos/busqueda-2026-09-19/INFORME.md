# Informe de investigación — cinco fichas AFRICANO / AFROCOLOMBIANOS

**Fecha:** 2026-09-19
**Encargo:** investigar y reescribir `anansi`, `tulavieja-tunda`, `chimbilaco`, `kijimba-de-las-animas`, `la-sierpe-de-bete`.
**Entregables:** `content/editorial/afrocolombianos/reescritura-2026-09-19/<slug>.json` (5) y `content/editorial/afrocolombianos/fuentes-2026-09-19/<slug>.json` (5).
**Restricciones cumplidas:** no se usó la API de OpenAI ni ningún modelo externo. No se escribió en Neon. No se tocaron los `.mjs`. No se ejecutó ningún script de aplicar. Toda URL citada se abrió y se leyó.

---

## 1. De qué se partía

| slug | comunidad Neon | estado en Neon | palabras |
|---|---|---|---|
| `anansi` | Africano | sólo `content`, cinco campos vacíos | mito 0 |
| `tulavieja-tunda` | Africano | sólo `content`, cinco campos vacíos | mito 0 |
| `chimbilaco` | Africano | cinco campos | mito 623 / sim. 67 |
| `kijimba-de-las-animas` | Afrocolombianos | cinco campos | mito 487 / sim. 102 |
| `la-sierpe-de-bete` | Afrocolombianos | cinco campos | mito 565 / sim. 84 |

Lo publicado en los cinco casos es prosa inventada. No es una cuestión de estilo: son hechos que no existen en ninguna fuente. Ejemplos verificados por búsqueda directa:

- **anansi**: la araña sacristana «de Istmina» que se emborracha con el vino consagrado y teje una escalera de seda. Nada de esto está en la única versión colombiana documentada.
- **tulavieja-tunda**: Adriano Lemos, el río Mecana, los perros, la pava, el grito «¡icoz!», el árbol jigua-rastrojo. **«Adriano Lemos» no devuelve un solo resultado fuera de este sitio.**
- **chimbilaco**: el pacto entre el río y la selva para crear un guardián alado que castigue el barequeo y la tala. Inexistente.
- **kijimba-de-las-animas**: la llave hecha de una hebra de tambor, una gota del Atrato y una palabra bien dicha; la cantadora; el altar de cinco velas; San Pacho. En la fuente, **Kijimba es una persona, no un objeto**.
- **la-sierpe-de-bete**: las tres cabezas que cantan, ríen y miran; el valiente de la atarraya nueva; la fiebre al mentir; las velas que ahuyentan. La fuente tiene dos frases y ninguna dice eso.

Los módulos del repo (`editorial/afrocolombianos/definitions.mjs` y `editorial/yagua/definitions.mjs`) ya traían una reescritura anterior, mejor que Neon pero no aplicada. Esta pasada no la toca; la sustituye con material verificado y con más detalle de primera mano.

---

## 2. Hallazgos por ficha

### 2.1 Anansi — el relato existe, y su cadena de transmisión está completa

El episodio está transcrito en **Friedemann y Vanín, «Chocó: magia y leyenda» (1991), pp. 189-190**, y reproducido palabra por palabra por **Jaime Arocha, «Ombligados de Ananse» (1999)**, que sí está digitalizado en Babel (Banrepcultural) y se leyó completo.

La cadena es: **Don Pío Perea**, director de la Defensa Civil en el Chocó → **Nina S. de Friedemann** → publicación de 1991 → Arocha 1999. Perea contó el episodio en una reunión con dirigentes cimarrones del Baudó, entre ellos **Rudecindo Castro**.

El relato: la araña era sacristán; por comerse unas hostias la iban a matar; subió a la torre más alta de la iglesia y, repicando las campanas, gritó con una voz delgadita que si Anansi muere se acaba el mundo, la candela se apaga para siempre y la gente se acaba; el cura salió a ver quién tocaba y, como Anansi era tan liviana y de cuerpo tan chiquito, no la vio y creyó que era una voz del cielo; la condena quedó suspendida porque la multitud lo pidió, con la condición de que dejara las malas mañas y trabajara.

Arocha añade material chocoano que el sitio no tenía:
- la **oración de Anansi** para andar sobre el agua, que Perea y sus amigos rezaban zambullidos en el **río San Juan** al mediodía y a medianoche en Semana Santa;
- que en el **alto Baudó** no se mata a la araña porque acarrea desgracias (episodio de 1992 con un estudiante y su sombrero);
- la **ombligada** con Ananse;
- la frase de la historiadora **Adriana Maya**: la araña del Baudó es «la araña de San Andrés, la araña de los fanti».

**De dónde viene y por dónde entró** (Pochet Rodríguez, *Cuadernos de Antropología* 21, 2011): akán del sur de Ghana y zonas vecinas de Costa de Marfil y Togo; lengua twi; los **asante** son a quienes se atribuye la invención de los cuentos de la araña; compañías navieras inglesas; **Jamaica** como plataforma de distribución; de ahí al archipiélago.

**Lo que circula en San Andrés y Providencia** (Botero Mejía, *Universitas Humanística* 64, 2007; Patiño Mejía, *Estudios de Literatura Colombiana* 21, 2007):
- nombres: **Anancy, Nansi, Anansi, Old Anancy, Bredda Anancy, Hemano Nansi**;
- **Lolia Pomare Myles** publicó veintidós relatos en **«Anancy Stories. Cuentos de Anancy», Fabio Eusse (ed.), Fondo Mixto para la Promoción de la Cultura y las Artes del Archipiélago, 2001, pp. 113-155**; en todos aparece el **hermano Tigre**, y Anancy no siempre sale bien librado ni es el más sabio;
- el mismo volumen recoge las compilaciones que **Bill y Cathy Washabaugh** hicieron en Vieja Providencia en los años setenta, «Las costumbres de la vieja Providencia», en inglés y español, con adivinanzas que no son traducción una de otra;
- en las islas «historias de Anancy» es un nombre genérico que cubre adivinanzas, leyendas, fábulas y canciones.

Los nombres que pedía el encargo (Oakley Forbes, Marcia Dittmann, Carol O'Flynn de Chaves) aparecen citados en la bibliografía de Botero Mejía y en la ficha del Instituto Caro y Cuervo, pero **sus textos no se leyeron de primera mano**: no se localizó versión abierta.

### 2.2 Tulavieja / La Tunda — veredicto

**Son dos seres distintos de dos países distintos, y el sitio los tiene fundidos en una sola ficha.**

- **La Tunda** es del Pacífico colombo-ecuatoriano. Se documenta en Tumaco, Barbacoas, Guapi, Iscuandé, el río Chagüí, Maguí Payán, y al otro lado de la frontera en Esmeraldas. Se reconoce por la **pata de molinillo**, por **entundar** (verbo y estado: ensueño y abandono, «no hay otro vocabulario», dice la crítica reciente), por los **camarones que son cucarrones**, y sobre todo por **tomar la forma de un familiar**.
- **La Tulivieja / Tulevieja / Tulavieja** es panameña. Su trama es otra: una mujer ahoga a su hijo recién nacido para esconder la falta, es castigada y queda con la cara llena de agujeros, alas de murciélago, patas de gallina y un **sombrero de tule**, condenada a buscar al hijo con los pechos llenos de leche. No entunda, no tiene pata de molinillo, no suplanta a la madre.
- Ninguna de las fuentes académicas de la Tunda menciona la Tulavieja. El artículo más reciente sobre la Tunda (Suárez Ontaneda, *Latin American Literary Review* 53/106, 2026), que rastrea sus registros desde el periodo colonial ecuatoriano, **no la nombra ni una vez**.
- La única referencia que asocia «Tulavieja» con el Chocó y con «Adriano Lemos» procede, por lo que se pudo rastrear, **de este mismo sitio**. Es circularidad.

**Propuesta:** renombrar la ficha «La Tunda» conservando el slug. Si se quiere una ficha de Tulivieja, abrirla aparte y sólo si se documenta en Colombia; la pista que quedó sin explorar es la de los **guna de Urabá** (Arquía y Caimán Nuevo), porque una de las versiones panameñas se atribuye a los guna.

**La versión que se adopta** es la de **Nelsi**, narrada por **Mónica Sánchez** en el anexo «Historias de la tunda contadas por diferentes habitantes» de la tesis de **Willian Javier Valencia Hurtado, «El mito de la Tunda en el imaginario de Tumaco»** (Maestría en Etnoliteratura, Universidad de Nariño, 2010, asesor Helmer Hernández). Corrección de precisión frente al módulo actual: **la entrada de Mónica Sánchez no lleva lugar ni fecha**; el bloque «Lugar: Chontal la Frontera / Fecha: marzo 10 de 2007» que aparece a continuación pertenece al relato siguiente, el de Jennifer Fernanda García.

El anexo, que sí se leyó entero, es un mapa fechado del litoral: Chontal la Frontera (2007), Gualajo-Gualajito (viernes de marzo de 2009, 3:45 p.m.), Guadual del río Chagüí (17 de agosto de 1994, 10:00 p.m.), Tumaco (18 de octubre de 1984, 9:30 p.m.), Pueblo Nuevo Km 41 (1997), río Rosario (1950), Maguí Payán (25 de diciembre de 2006), barrio la Florida (20 de julio de 2001), Brisas del Aeropuerto (2006), Iscuandé, El Limonar de Guapi, Caunapí, las Mercedes.

Otros narradores nombrados: Wilder Segundo (de su abuela), Yeandra Maribi Ortiz, Jennifer Torres, Leidy Vanessa Sánchez, Jennifer Fernanda García, Maby Sujei Ospina Navarrete, Cesar Augusto Garrido.

### 2.3 Chimbilaco — no es paisa, y no es chocoano

La pista antioqueña del encargo (Benigno A. Gutiérrez, Antonio José Restrepo, Tomás Carrasquilla, Javier Ocampo López) **no produjo ninguna fuente**. Lo que sí hay es un dato léxico y dos trabajos académicos:

1. **El Diccionario de americanismos (ASALE, 2010)** registra `chimbilaco` como variante de `chimbilá`, sustantivo masculino colombiano para **murciélago**, con marca de área **Co:SO** — suroccidente, no Antioquia.
2. **Lina Marcela Gallego Acevedo, *Revista Colombiana de Antropología* 47(1), 2011, pp. 113-136**, nota al pie 5: «El chimbilaco o cortacabezas es el protagonista de un relato contemporáneo en el que creen ampliamente las poblaciones indígenas de la región, especialmente las de los poblados ribereños. Se trata de un ser con figura humana y alas de ave que sobrevuela ríos y quebradas en la noche, ataca a los pescadores y les corta la cabeza.» Los **yagua de La Libertad** lo asocian con las dos grandes embarcaciones turísticas que recorren el Amazonas de noche; **unos creen que los cortacabezas son propiedad de los turistas y otros que son los turistas**.
3. **Salima Cure Valdivieso, «Cuidado te mochan la cabeza» (Maestría en Estudios Amazónicos, Universidad Nacional, Sede Amazonia, Leticia, 2005, dir. Juan Álvaro Echeverri)** — se descargó y se leyó. Aporta: las luces de colores en el cielo, el aparato silencioso con computadores que detecta si la víctima va armada, el rayo que paraliza, los laboratorios que mantienen vivas cabezas y órganos, los disfraces de bufeo, caimán, tigre, pirarucú, pintadillo, venado, vaca marina, boa y águila, siempre con aparato para respirar, y el modo de descubrirlos **por la conducta del animal** (un bufeo al que se le apunta y en vez de huir golpea la canoa; un pirarucú manso que embiste; un caimán que se arponea fácil).

**Hallazgo relevante:** en Cure, «chimbilaco» **no es el nombre del ser sino el del murciélago**. Aparece en la descripción que un muchacho de trece años, ticuna de Macedonia, hizo del cortacabezas que casi lo alcanza pescando en el lago del Pan: «era negro, grande, **cara de chimbilaco**, tenía orejas aquí, feo su cara… persona será adentro, su pecho tenía unas tijeras, patas de gavilán». Es decir: Gallego usa el nombre del murciélago para el ser; Cure lo usa como comparación. Las dos cosas se conservan en la ficha.

**Cronología documentada:** un hombre ticuna nacido en Puerto Nariño le contó a Cure que en los años sesenta su madre le decía que los motores que pasaban de noche eran **los aceiteros**, gringos que sacaban manteca para sus aviones, y que **de cortacabezas se empieza a hablar hacia 1999**. Cure traza además la genealogía: **pishtaco / sacagrasa (andino) → pelacara / sacacaras (amazónico peruano) → cortacabezas (Trapecio)**.

**Advertencia:** los nombres de los interlocutores en Cure son **pseudónimos por decisión de la autora**; en una misma página el muchacho aparece como Camilo y como Lamec.

**Circularidad:** buscando «Chimbilaco», el primer resultado de autoridad es `mitosdecolombia.com`. El sitio se está citando a sí mismo y está alimentando agregadores.

### 2.4 Kijimba — se leyó la fuente completa

«Kijimba» no devuelve resultados en la web abierta. La única fuente es **«La escuela en la tradición oral»**, accesible por vista previa parcial en Google Libros. Se abrieron y se leyeron **íntegras las páginas 44 y 45**, más el índice de la página 7.

**Texto de la fuente (pp. 44-45), narración de la señora Rosalba Cossio García:** Kijimba era una señora muy alegre a la que le gustaba ir a todo baile, a la hora y el día que fuera, «el sitio geográfico no le impedía»: **Tanguí, Guayabal, Tutunendo, Condoto, Tanando, Quito**, por lo cual era muy conocida en distintos sitios del Chocó. Un día, acostada, escuchó una tambora. Desoyó las advertencias de sus familiares, se arregló, **agarró su palanca y canalete, achicó su champa** y subió el río. Llegó a una casa llena de gente que gritaba, bailaba y cantaba, **todos vestidos de blanco**, y al verla gritaron «llegó Kijimba, llegó Kijimba». Le sirvieron el trago; al ver que era **hiel (bilis)** dijo que no quería, y en coro le respondieron: «te lo tomás Kijimba, te lo tomás, que a todo baile no se va». Se lo hicieron tomar **a la fuerza** y al otro día falleció. **El baile era una fiesta de las ánimas; por eso todos vestían de blanco.**

El índice del volumen sitúa Kijimba en una serie: El ojo secado (42), El diluvio (42), Los primeros niños (42), El castigo del diablo (43), **Kijimba (44)**, La viudita (45).

**Paralelo documentado en la página siguiente:** «La viudita», narrada por **la señora María de Jesús Ampudia Perea, nacida en Tadó en 1924**: una señora bajita de faldones, siempre de negro, con un puchito de tabaco en la mano, que sale en noches de luna llena y recorre la carrera tercera de Quibdó hasta las cuatro esquinas; un hombre que salía de una cantina se la encontró y le pidió prestado el tabaco.

**Segundo paralelo documentado:** Riaño-Alcalá y Chaparro Pacheco (*RCA* 56/2, 2020) registran en el Medio Atrato que la fuerza para invocar alabaos viene de personas «de entendimiento fuerte» con conexión especial con las ánimas, y que la alabaora mayor **Petrona**, de Pogue, aportó tres alabaos que **se los enseñaron en sueños las ánimas**.

**Corrección de fuentes:** la entrada que el módulo traía para los alabaos («Alabaos y gualíes del Chocó: patrimonio oral y prácticas mortuorias», UNAD, sin autor) **no corresponde al documento del enlace**. El documento real es: Celia Cruz Gil Serna, «Percepción que tienen los estudiantes del grado 10 de la Escuela Normal Superior de Quibdó sobre las prácticas culturales de tradición oral (alabaos y gualíes)», UNAD, 2016. Lo mismo con «Entre la muerte y los matachines», que el módulo atribuía a «Universidad del Cauca» sin autor: es un trabajo de grado de **Leydy Yaneth Romero Martínez** (2016, dir. Herinaldy Gómez Valencia).

### 2.5 La Sierpe de Beté — ficha de núcleo mínimo

Todo el respaldo documental cabe en dos frases de la **guía turística del Chocó del Ministerio de Comercio, Industria y Turismo**, que se descargó y se leyó: «La Sierpe de Beté: se refiere a una serpiente mitológica, que pasó por los pueblos durante las festividades patronales. Poseía tres cabezas y asustaba a los pescadores.»

La misma página trae el repertorio chocoano con el que comparte lista, y que se usa en `versiones` y `similitudes` porque es del mismo registro y la misma fuente: **La Yesca** (brujo o chinango que abraza y ahoga con bejucos y ramas), **El Indio de Agua** (habita todos los ríos, se posa sobre una piedra a la salida del sol, al acecho), **El Duende**, **El Rivial** (ráfaga de luz en el mar, en forma de ola, que se divide y se transforma), **La Bruja**, **La Sirena**.

No se halló ninguna otra fuente: se buscó en Rogerio Velásquez, COCOMACIA, IIAP, Diócesis de Quibdó y repositorios académicos sin resultado. El repositorio de la Unidad Nacional para la Gestión del Riesgo, que el módulo citaba para la caracterización del Medio Atrato de 2011, **sirve el PDF por el puerto 8443 y no responde**; por eso se retiró.

El paralelo de la hidra se citó con fuente primaria abierta en vez de con una ficha de museo: **Apolodoro, Biblioteca 2.5.2** (Perseus Digital Library, ed. Frazer), que da las medidas exactas — pantano de Lerna, cuerpo enorme, nueve cabezas, ocho mortales y la del medio inmortal, vencida sólo con ayuda de Yolao.

---

## 3. Reparto de fuentes

El diagnóstico de partida decía que las fichas de afrocolombianos compartían 43 URLs entre dos fichas, con seis entradas de catálogo que no sostenían nada. El reparto nuevo es por ficha y por función:

| slug | fuentes | clave (las 3 primeras) |
|---|---|---|
| `anansi` | 7 | Arocha 1999 · Botero Mejía 2007 · Pochet 2011 |
| `tulavieja-tunda` | 7 | Valencia Hurtado 2010 · Suárez Ontaneda 2026 · USC Folklore Archives 2018 |
| `chimbilaco` | 6 | Gallego 2011 · Cure 2005 · de Pribyl 2010 |
| `kijimba-de-las-animas` | 7 | La escuela en la tradición oral pp. 44-45 · Riaño-Alcalá y Chaparro 2020 · Arocha 1999 |
| `la-sierpe-de-bete` | 6 | Guía turística del Chocó (MinCIT) · Bonfá Neto y Jiménez 2024 · Riaño-Alcalá y Chaparro 2020 |

Obras compartidas por más de una ficha (misma URL canónica, `summary` y `limitation` distintos en cada una): Arocha 1999 (anansi, tulavieja-tunda, kijimba, sierpe), Riaño-Alcalá y Chaparro 2020 (kijimba, sierpe), guía del Chocó (tulavieja-tunda, kijimba, sierpe), Aristizábal 2022 (kijimba, sierpe).

### Fuentes que se retiraron y por qué

| fuente del módulo | motivo |
|---|---|
| Smithsonian, «Anansi's Journey» | 403 permanente, no se pudo abrir |
| Smithsonian Folkways, «Ashanti Folk Tales from Ghana» | 403 permanente |
| Met, «The Dance of Death» / «The Labors of Herakles» | Vercel Security Checkpoint y 429; se reemplazó la hidra por Apolodoro en Perseus |
| Enciclopedia Banrepcultural (Friedemann, Rogerio Velásquez, Cosmología y simbolismo) | CAPTCHA de Radware en todo el dominio `enciclopedia.banrepcultural.org` |
| Caracterización del riesgo, Medio Atrato 2011 | redirige al puerto 8443, sin respuesta |
| ResearchGate («Actores sociales… religiosidad popular negra») | dominio excluido por norma del encargo |
| UNESCO marimba, Mincultura viche, Mincultura Cuasimodo, Mincultura San Pacho, Mincultura «Comunidades negras», Mincultura «Lenguas y tradición oral», Unidad para las Víctimas «El río Atrato» | contexto genérico que no sostiene ningún relato; la última es además una crónica periodística alojada en sitio institucional |
| «Alabaos y gualíes del Chocó» (UNAD, sin autor) | el título no corresponde al documento del enlace; se sustituyó por la referencia real |

---

## 4. Lo que queda pendiente

1. **Cotejar el impreso** de Friedemann y Vanín, «Chocó: magia y leyenda» (1991), pp. 189-190. Hoy el relato se lee en la reproducción literal de Arocha.
2. **Confirmar el pie de imprenta** de «La escuela en la tradición oral» (¿Helena Roldán? ¿Fabio Jurado Valencia? ¿Programa RED? ¿1998?) y quién es Rosalba Cossio García. La vista previa de Google Libros no lo permite.
3. **Leer el volumen isleño** «Anancy Stories. Cuentos de Anancy» (Eusse ed., 2001) y a Oakley Forbes, Carol O'Flynn de Chaves, Marcia Dittmann y Ronald Morren en sus propios textos. Eso permitiría abrir una **ficha raizal** con un Anancy story en criollo y narrador isleño nombrado.
4. **Consultar** José Óscar Córdoba, «Resistencia festiva: fiesta de San Antonio de Padua en Tangui (Chocó)» (Ediciones Uniandes, 2009): documenta la fiesta patronal de uno de los pueblos donde bailaba Kijimba. El repositorio Séneca de la Universidad de los Andes está tras verificación antibot.
5. **Buscar en campo** una versión de la Sierpe de Beté con narrador, vía COCOMACIA o la Diócesis de Quibdó. Mientras tanto la ficha debería marcarse como de núcleo mínimo.
6. **Explorar la pista guna** para una eventual ficha de Tulivieja en Colombia (Arquía y Caimán Nuevo, Urabá chocoano).
7. **Reclasificar comunidades en Neon**: `anansi`, `tulavieja-tunda` y `chimbilaco` están hoy bajo «Africano», que no es una comunidad. Propuesta: `anansi` y `tulavieja-tunda` a afrocolombianos; `chimbilaco` al Amazonas (el módulo del repo ya lo movió a `editorial/yagua`, pero Neon no lo sabe).

## 5. Nota sobre el vocabulario de las fuentes viejas

Dos de los corpus usados registran lenguaje que hoy no se sostiene. El anexo de Valencia Hurtado recoge descripciones de la Tunda por rasgos fenotípicos, y el propio autor advierte que ese uso «se mal utiliza a veces para recrear elementos endorracistas». Nada de ese vocabulario se reprodujo: la ficha describe a la Tunda por lo que hace, no por cómo la califican. Lo mismo con el marco del folclorismo colombiano de mediados del siglo XX, que llega aquí mediado por Arocha y por la lectura crítica de Aristizábal 2022 sobre la mirada externa al Chocó. En los archivos `fuentes-2026-09-19/` ese señalamiento va en el campo `limitation` de cada obra, que es donde debe quedar y no en el texto publicado.
