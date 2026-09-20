# Informe de búsqueda · yukpa, nɨkak, pirsa y ufaina · 2026-09-19

Cinco fichas publicadas en cuatro comunidades de Neon: `yukpa` (2), `nukak-maku` (1),
`pirsa` (1) y `ufaina` (1). Ninguna tenía texto plantillado entre fichas —0 % de
oraciones repetidas—, así que la reescritura fue de mejora y no de rescate. Lo que
sí estaba roto era el **reparto de fuentes**, y en tres de los cuatro módulos la
**ficha bibliográfica** de varias obras.

Las cinco reescrituras están en
`content/editorial/<módulo>/reescritura-2026-09-19/<slug>.json`.

---

## 1. Yukpa (Serranía del Perijá, Cesar y La Guajira, y Venezuela)

### 1.1. Lo que había

`editorial/yukpa/definitions.mjs` tiene **cinco borradores** y el sitio sólo publica
**dos** de esos slugs: `la-piedra-que-flota` y `los-dos-caminos-del-cielo`. Los otros
tres —`aponto-y-el-arbol-manurhacha`, `los-gemelos-yirhwach-y-las-constelaciones`,
`me-el-dueno-del-maiz`— son propuestas que no están en Neon y quedan fuera de este
encargo.

`pickYukpaSources()` se llamaba sin argumentos. Comprobado ejecutando el módulo: las
**cinco** fichas reciben exactamente las mismas seis obras en `sources` y las mismas
tres en `keySources`. Nueve obras idénticas repartidas cinco veces.

Además, los dos textos publicados compartían **literalmente** cinco de los seis
párrafos de `historia` y cuatro de los cinco de `versiones`. El diagnóstico de
partida medía repetición *entre* fichas de comunidades distintas y por eso no lo
vio; entre estas dos, el molde estaba.

### 1.2. Las nueve obras, una por una

| obra en el módulo | estado | veredicto |
|---|---|---|
| `halbMayer2016` | abre (PDF en Marburg, 200) | **sirve**, pero la ficha bibliográfica del módulo es falsa (ver 1.3) |
| `halbMayerGoletz2025` | abre (PDF y landing, 200) | **sirve**. Es la mejor fuente del lote |
| `halbMayerGoletz2018` | **403** (ResearchGate) | **fuera**: registro de catálogo y bloqueado |
| `minCulturaYukpa` | abre (200) | **sirve** como versión institucional, con reservas |
| `meDuenoMaiz` | abre (200) | sirve, pero para la ficha del maíz, que no está publicada |
| `lecHisYup` | abre (200) | **fuera**: no es lo que el módulo dice que es (ver 1.3) |
| `planVidaYukpa` | abre (200) | **sirve**, con la autoría corregida (ver 1.3) |
| `externoYukpa2024` | abre (200) | **flojo**: divulgación institucional sin aparato. Sustituido |
| `andeanMyths` | **403** y redirige al raíz de FLACSO | **roto**. Era la única fuente del episodio de Kopeco |

### 1.3. Tres errores de ficha bibliográfica en `sources.mjs`

1. **`halbMayer2016`**. El módulo lo titula «Transformación, diferencia y relación
   entre los Yukpa: notas sobre una ontología transformacional». El PDF que hay en
   esa URL es «Tecendo o mundo e as origens da vida como a conhecemos: noções de
   crescimento, fabricação e reprodução nos mitos de origem yukpa», *Revista de
   Antropologia* (USP) 59(1): 145-179, 2016. La revista lo publica en abierto en
   portugués y en inglés: conviene citar `revistas.usp.br/ra/article/view/116915`.
2. **`planVidaYukpa`**. El módulo lo firma «María Franco». La autora es **Diana
   Esperanza Oliveros Fortiche**.
3. **`lecHisYup`**. El módulo lo titula «Lecturas históricas Yukpa» y afirma que
   «ofrece una adaptación breve del ciclo de Mé». El PDF es «De las piedras a los
   papeles. Una experiencia sobre los procesos de lectura y escritura en la lengua
   yukpa», de **Wilson Largo y Marleny Buenahora** (Proyecto LEA, Fundación para el
   Desarrollo de los Pueblos Marginados, Codazzi, 2012). Es metodología de
   alfabetización. No contiene el ciclo de Mé, ni el del diluvio, ni el de los soles.

### 1.4. Kopeco: el episodio que sostenía media ficha y no tiene fuente

`los-dos-caminos-del-cielo` narraba que **Kopeco**, mujer asociada con la rana,
atrajo a uno de los hermanos solares hasta unas brasas; él cayó, perdió su fuerza
luminosa y ascendió convertido en Luna; después reconoció el engaño y la arrojó al
agua. La única obra del módulo que lo sostenía era `andeanMyths`, la compilación
alojada en FLACSO Andes, que **hoy devuelve 403 y redirige al raíz del repositorio**.
No se encontró ninguna fuente académica abierta que publique esa versión con
narrador, comunidad y fecha.

La versión que **sí** está documentada es incompatible con ella, y no como variante
de matiz sino como otro mecanismo. En las versiones irapa y sokorpa que Halbmayer
recogió en campo, el héroe cultural **Amoricha** dispara flechas de punta roma
hechas con cera de abeja negra: el firmamento sube y, de un tiro en el ojo de uno de
los dos soles, ese sol se oscurece y se vuelve la luna. No hay rana, no hay brasas y
no hay engaño. Se retiró Kopeco del texto publicado y se anotó en `dudas`.

### 1.5. Lo que se encontró y no estaba

- **Halbmayer y Goletz 2025** (*REAA* 55(2): 191-206) trae el ciclo del diluvio con
  un detalle que el módulo no aprovechaba: las dos montañas **Shkhimo** y **Tʉtarhi**
  son personas en Sokorhpa y son ellas las que instruyen; en otras versiones avisa un
  **tuwancha** y en otras el creador deificado; **cuál de las dos es la más alta
  depende de dónde esté el territorio desde el que se cuenta**; los armadillos podían
  hacer lo que hicieron porque todavía eran **yukpapi**, gente, y sólo se volvieron
  animales después de que la tierra quedó otra vez separada del agua; y en algunas
  versiones, detrás de la inundación vienen un incendio y una sequía que dejan la
  tierra en pura roca.
- **Nombres propios que faltaban en las fichas.** El narrador irapa **Kumateta**, de
  quien es la frase que cierra el episodio: «*Ovaya nüpünmanak, nopa nükünni prak oran
  ka psek ok ka nech kamashru*» —se salvó la tierra, y quien lo arregló era el
  armadillo—. El transcriptor **Diomedes de Jesús Bernal Fernández (Tintin)**, de la
  comunidad Los Granados, en Sokorhpa. **Darwin Pérez Restrepo (Luka)** y **Ángel
  Pérez Restrepo**, de Sokorhpa; este último expuso el tema en la Universidad del
  Magdalena el 28 de febrero de 2023. Y el taller de 2015 en la escuela bilingüe
  Santa Teresita de Sokorhpa, dirigido por **Gilberto Rodríguez López**, del que salió
  el dibujo de la inundación que publica el artículo.
- **Javier Armato es autor yukpa irapa**, no un antropólogo. Suyas son, en *Lo que
  cuentan los Yukpa* (Maracaibo, 1988), la descripción de los ríos hirviendo (p. 9) y
  la frase con la que termina el episodio del eclipse: «El sol furioso comenzó a
  destapar las pailas y salieron las señoritas. Estas botaron sus mantas sobre la cara
  de la luna. De esta manera, apareció sobre la tierra el primer eclipse de la luna.
  Porque el sol no respetó a las señoritas» (p. 50).
- **Tres versiones del mismo episodio que no se pueden fundir.** Irapa: el héroe
  dispara al ojo del sol. Sokorpa: el relato se cuenta desde arriba, es el dios-sol
  quien habla, cansado de que le disparen, y termina disparándose él mismo en el ojo
  con la flecha de punta de *mapicha*; los sokorpa dicen que el sol era el ojo de
  Dios. Iroka: no hay flecha, el héroe **teje** las montañas, los árboles y las hojas
  para dar sombra.
- **Un artículo con coautores yukpa**: Cano Correa *et al.* 2023 (*RCA* 59(3): 70-100)
  está firmado también por **Wilson Largo Sichacá** y **Herlinda Luisa Nieves
  Alarcón**, del resguardo Iroka. Sustituye con ventaja a la nota de divulgación del
  Externado.
- **La caracterización del Ministerio de Cultura es otra versión, no un resumen.**
  Ordena la historia yukpa en ocho etapas con el diluvio en la cuarta, y en el
  episodio del agua no son los armadillos los que resuelven sino el pájaro carpintero,
  el tapir, el caimán, el cangrejo y la tortuga, que levantan muros. Trae además un
  panteón —Paphs, sópasha, Tumanke, Yuwanano— que no aparece en ninguna de las
  etnografías de campo consultadas. Se registró como versión atribuida, en
  `versiones`, y no se usó en el Relato.

### 1.6. La vecindad, declarada

Buena parte del corpus yukpa es venezolano. Wilbert (1974, UCLA), Armato (1988,
Maracaibo), Vannini y Armato (2001) y Castillo (2016) se publicaron en Venezuela o
sobre material venezolano; el análisis de Halbmayer se escribió en alemán, inglés y
portugués. Es legítimo y está dicho en el `limitation` de cada ficha: lo que se lee en
español llega traducido dos veces.

De esas primarias, **ninguna se pudo abrir en línea**. Wilbert y Castillo sólo
aparecen como entrada de catálogo (National Library of Australia, Google Books);
Acuña Delgado 1998 (*Yu'pas. En la frontera de la tradición y el cambio*, Abya-Yala)
está en el repositorio de la Universidad de Nuevo México detrás de un bloqueo
antibots; Armato y Vannini no están digitalizados. Se nombran en `historia` a través
de Halbmayer y Goletz 2025, que las citan con página, y **no** se declaran como fuente
propia de ninguna ficha.

Misma suerte corrió el catálogo de la exposición de Marburg («Die Wirklichkeit des
Mythos / La realidad del mito», *Veröffentlichungen der Marburger Ethnographischen
Sammlung* 1, 2018, DOI 10.17192/es2018.0014). Existe, tiene **tres** autores y no dos
—Anne Goletz, Dagmar Schweitzer de Palacios y Ernst Halbmayer—, pero el repositorio
está detrás del mismo bloqueo y no se pudo verificar. No se declara.

### 1.7. Cómo quedó el reparto

**`la-piedra-que-flota` — «El diluvio y las montañas del Perijá»** (7 obras). Clave:
Halbmayer y Goletz 2025; Goletz 2020 (el armadillo Kamashrhush y la mujer sabia
Diocelina Restrepo, en Sokorpa, Becerril); la caracterización del Ministerio de
Cultura.

**`los-dos-caminos-del-cielo` — «Los dos Soles y el nacimiento de la noche»**
(8 obras). Clave: Halbmayer 2016; Halbmayer y Goletz 2025; Martínez Mauri y Halbmayer
2020.

Comprobado: **0 % de oraciones repetidas** entre las dos fichas nuevas, sobre 60
oraciones de la primera medidas contra las cuatro capas de la segunda.

---

## 2. ¿Qué es exactamente «Pirsa»? ¿Se sostiene el nombre?

Esta era la pregunta abierta del encargo y tiene respuesta documental continua.

**«Pirsa» no está documentado como nombre de un pueblo en sentido étnico.** No hay
lengua, ni cosmología, ni autodenominación atribuibles a «los pirsas». Lo que hay es
un topónimo-señorío de la provincia de Anserma y, por metonimia, el nombre de su
señor. La cadena se puede seguir año por año:

| año | documento | qué es «Pirsa» |
|---|---|---|
| 1549 (impreso 1553) | Cieza, *Crónica del Perú*, cap. CXVIII | «casi cuatro leguas desta villa está **un pueblo llamado Pirsa**, y el señor natural del, teniendo un hermano mancebo… que se llama Tamaracunga» |
| 1552 | probanza del capitán Antonio Pimentel de Prado ante la justicia de Arma | «**el cacique Pirsa**, que es el señor principal de Anserma» — el nombre del señor |
| 1557 | lista de caciques de la provincia | «Don Francisco, señor de la **provincia de Pirsa**» |
| 1560 | Relación de Popayán y del Nuevo Reino | «**Pirsa**», 400 indios, encomendado a **Gómez Hernández** —el mismo teniente que Cieza nombra en Anserma en 1549 |
| 1627 | AGN, visita del oidor Lesmes de Espinosa Saravia | «el **repartimiento de Pirsa**, jurisdicción de la ciudad de Anserma». El 22 de marzo traslada a pirsas y umbras a la **Vega de Supía** |
| 1722 | — | los pirzas forman parte del pueblo de **Cañamomo Lomaprieta** |
| 1759 | — | indígenas **de La Montaña** repueblan el valle de Pirza **comprándole el terreno** a la española Catalina Gamonares |
| hoy | INCORA | resguardo de la «comunidad indígena **Embera Chamí** de Escopetera-Pirza», Riosucio (Caldas) y Quinchía (Risaralda) |

**Lo que se puede afirmar**: que en 1549 existía un pueblo llamado Pirsa a cuatro
leguas de Anserma con un señor natural; que fue encomienda, provincia y repartimiento;
y que el nombre sobrevivió al traslado forzoso, a la absorción y a la compra hasta
nombrar el resguardo actual. **La formulación sostenible, y la que usa la ficha, es
«la gente de Pirsa, en la provincia de Anserma».**

**Lo que no se puede afirmar**: el plural étnico «los pirzas» es uso moderno,
normalizado por la historiografía del propio Cabildo y por el nombre del resguardo.
Y la continuidad es **toponímica y territorial, no demográfica**: entre un extremo y
otro hay un destierro (1627), una absorción (1722) y una repoblación por gente de
otro pueblo mediante compra (1759). Cieza no da la lengua de Pirsa, y la filiación
lingüística de los pueblos de la provincia de Anserma en el siglo XVI sigue abierta.

Lo poco que Cieza sí anota de la región (cap. XVI) vale la pena: el sitio de la villa
lo llaman los naturales **Umbra**; *ancer* es «sal», de ahí Anserma; **al diablo lo
llaman Xixarama y a los españoles, tamaraca**; no hay ídolos ni casa de adoración; y
**el cacicazgo lo hereda el hijo de la mujer principal, y si no hay hijo, el de la
hermana**. Esa regla de sucesión coloca al hermano menor del señor en una posición
real, no decorativa.

Hay además una observación filológica que **no se publica** por falta de respaldo: la
edición de Amberes imprime «Tamaraqunga», Cieza registra que en esa provincia
*tamaraca* significa «los españoles», y la lista de 1557 incluye «Azisqunga». El
elemento *-qunga* es recurrente en la onomástica de la zona. Ninguna fuente hace esa
lectura; queda como pregunta.

### 2.1. Lo que la ficha publicada decía y era falso

El expediente anterior había publicado como **hallazgo** una afirmación equivocada:
que Cieza «no lo identifica como cacique». El encabezado del capítulo dice «**un
cacique** comarcano de la villa de Ancerma» y el cuerpo lo llama «el cacique» seis
veces. Lo correcto es: Cieza lo llama cacique, pero no señor natural de Pirsa; el
señor es su hermano mayor, a quien no nombra.

Había además cuatro desvíos respecto del texto de 1553, todos corregidos:

- «Tamaracunga intentó beber, pero encontró barro dentro de su boca» — **inventado**.
  El barro se le pone mientras está tapado con mantas para no ver; no hay intento de beber.
- «Durante la comida» — Cieza dice «estando el cacique sentado, y teniendo delante un
  vaso para beber».
- La elevación del cuerpo colocada **después** de la copa, cuando en Cieza la precede.
- «El fraile usó agua bendita y su estola» — en Cieza **la estola se le pone a
  Tamaracunga** y quienes actúan son los cristianos. Ese detalle venía de Mondragón:
  la versión tardía se había filtrado dentro de la narración temprana, que es
  exactamente lo que el aparato crítico de la ficha decía evitar.

Y un error en `versiones`: que Mondragón «hizo levitar al propio fraile». No está en
el texto transcrito; Mondragón **arma** al fraile con estola y agua bendita, y quien
sigue siendo levantado es Tamaracunga. La crónica tampoco fue «publicada en 1750»: es
un **manuscrito inédito** fechado en Lima el 6 de abril de 1750 (AGI, Indiferente,
leg. 2981, 38 folios).

### 2.2. URLs del módulo `editorial/pirsa` que hay que cambiar

| fuente | problema |
|---|---|
| `cieza1553` → `hdl.handle.net/123456789/90` | **Handle roto.** `123456789` es el prefijo por defecto de una instalación local de DSpace; nunca se registró. No resuelve a nada |
| `guazzo1608` → Wikisource | prohibido por regla. Sustituido por el facsímil de la traducción Ashwin/Summers en Internet Archive |
| `cardona2013` → blogspot | prohibido. No existe versión arbitrada (se buscó en la *Revista Impronta* de la Academia Caldense de Historia y en el repositorio de la UTP) |
| `correaDelgado2024` → `hdl.handle.net/11059/15472` | resuelve al repositorio de la UTP, detrás de un reto antibots de prueba de trabajo. **No se pudo verificar** ni título ni autores ni contenido. Sustituido por Lopera Mesa 2020 |
| `cabildo2016` y `cabildoTitulos` | abren, pero el recopilador firmado es **Luis Javier Caicedo**, y el módulo las atribuye sólo al Cabildo |

Lo que sí se salvó, contra lo previsto: **la URL de Mondragón en aciprensa no es una
entrada de enciclopedia** sino la transcripción paleográfica del manuscrito del AGI,
con ficha técnica que da signatura, folios y responsables (paleografía de Fernando de
Armas Medina, transcripción de José Gálvez Krüger). Se conserva, con la advertencia de
que está en un wiki confesional sin control de versiones.

### 2.3. Detalles del relato que la ficha se había comido

El texto publicado perdía cosas que están en Cieza y que valen: el grito «**váleme,
cristianos, váleme**» en los pasos malos; el **«hu, hu, hu»** rápido y recio de los
demonios, que Cieza compara expresamente con el grito con que los indios salen a la
guerra; los **bofetones** que le arrojan lejos el sombrero que llevaba sobre los ojos
para no ver; la **saliva podrida y hedionda** en el rostro; y el cierre, en el que
Tamaracunga sale «con gran alegría, diciendo: "cristiano soy"; y **alabando en su
lengua a Dios**». Esa última frase es el único momento del capítulo en que asoma su
voz. Ahora está en el Relato.

Y la divulgación histórica regional del siglo XX, que no se cita pero se registra en
`dudas`, fecha el episodio en **1546** y no en 1549, cambia las auras por gallinazos y
lo emparenta con el Diablo del Carnaval de Riosucio — aunque el mismo autor data la
entronización del diablo carnavalero hacia **1846**, lo que desmiente su propia
genealogía. El error de fecha probablemente viene de Mondragón, que sitúa la llegada
del padre Santa María en 1546.

---

## 3. Nɨkak (Guaviare)

Es la ficha en la que más cambió el Relato, y no por estilo.

- **Machoroko es una mujer.** Las dos fuentes lo dicen —en Embe' «una mujer que estaba
  en yee»; en Kerayi, Matchoroco «mitad humano, mitad animal y también similar a una
  mariposa de manos largas»— y la ficha publicada lo omitía. Conviene corregirlo
  también en el prompt de imagen del módulo, que no especifica.
- **Los perseguidores tienen nombre y son dos grupos distintos.** Abajo son los
  **kawéni' yore**, «no-Nɨkak indígenas», que bailaban un **baap** cantando «nañure,
  nañure, nañure» y que flechaban a los Nɨkak **para comérselos**; al final del relato
  llegan los **kawéni' jeñe**, los mayores de los no-Nɨkak, **con escopetas**. El texto
  publicado los fundía en «otros seres» y «otros pobladores».
- **«La Gente de Árbol» no es de Embe'.** Es corchete editorial de Mahecha 2024. Se retiró.
- **«mup» no existe en ninguna de las tres fuentes abiertas.** No se usa.
- **Los trece momentos son de Mahecha, no de Embe'.** En Franky 2011 el mismo relato va
  numerado del uno al nueve. La ficha lo afirmaba como propiedad del narrador.

**Lo que se ganó**: el nombre y la circunstancia de quien narra. **Embe'**, unos 45
años en 2011, del grupo **Meu muno** (gente de las cabeceras de los caños), residente
en **Villa Leonor**; grabado en **2007**, transcripción revisada con él y con
**Noube'** en San José del Guaviare en **febrero de 2008**. Y **Kerayi**, del grupo
**Wayari muno**, que narró la suya **la noche del 17 de junio de 2007**, cuando un
aguacero obligó a varias familias a refugiarse en su casa, con **Wembe, Jetena, Manuel
y Yolanda** presentes; tradujo **Yorena** y se revisó con **Dugupé, Wembe y Kurui**.

También se ganaron el detalle del **baile baap en la confluencia** —que el texto
anterior se comía—, la **resina resbalosa** echada en la boca del hueco, el **pajarito
wayo** que canta y hace que Aukurɨbo se acuerde de su caño, el **fogón de hojas de
maíz**, y las semillas con sus nombres: **muji** (totumo grande), **mamo** (ñame), en
canastos de **bejuco yaré**.

**Seis contradicciones entre Embe' y Kerayi que no se funden**: quién abre el paso;
resina contra hachas de piedra (y, en una tercera variante de Franky, lanzas y la hija
de Aukurübo mandando borrar las huellas con hojas de piña de monte); Aukurɨbo que se
devuelve agotado contra Aukeribo héroe fundador; Mauro ausente contra Mauro entre los
primeros en salir; Kein inbe' antes de la confluencia contra el lago Ké Inbé en las
postrimerías del bajo Inírida; y tres ortografías completas que el módulo mezclaba sin
decirlo. Franky llama a algunas de estas discrepancias, textualmente, «planteamientos
contradictorios», y dice que no busca «"La" versión canónica».

**Presente, no pasado etnográfico.** El Auto 004 de 2009 de la Corte Constitucional da
los números: en el contacto oficial de 1988 llegaron a Calamar **43 personas —4
hombres, 12 mujeres y 26 niños—** con epidemia de gripa; la población cayó a **unas
400**; y documenta una cadena de éxodos entre 1965 y 2005. La Reserva Nacional Natural
Nukak de 1989 quedó **al sur del Inírida, donde los nɨkak no habitan**. El héroe
cultural **Mauro** nombra hoy el consejo de autoridades del pueblo: **Mauro Muno**.

**Lo que no hay**: ningún texto publicado en acceso abierto escrito o narrado
directamente por personas nɨkak. Lo más cercano es la cartilla **«Wît déanit démuno
náuyina»** —«nosotros enseñamos la lengua Nɨkak»—, iniciada a finales de **2021** por
dinamizadores y autoridades nɨkak con **Mauro Muno**, las autoridades
**Asopamurimajsa** y el departamento del Guaviare, con acuerdo ortográfico previo; no
está en línea. Tampoco se pudo abrir la obra de referencia, **Cabrera, Franky y Mahecha
1999**: sólo hay entrada de catálogo.

**Correcciones al módulo**: la ficha de patrimonio del Ministerio **no menciona el mito
de origen, ni Machoroko, ni Mauro, ni bak/yê/jea**, contra lo que dice su `summary`;
Mahecha y Franky son **editores** y no autores del informe de IWGIA de 2011; y la URL
que el módulo daba para el capítulo de Epps y Stenzel apuntaba a ese mismo informe y no
al volumen donde está el capítulo (pp. 163-196).

---

## 4. Ufaina / Tanimuka (bajo Apaporis y Mirití-Paraná)

Aquí el hallazgo más grave es que **la ficha publicada afirmaba lo contrario de la
fuente** en el episodio final.

- **«Kayafikí subió, cortó las ataduras y se apartó antes de la caída» es una
  invención**, y una que cambia el sentido del ciclo. Hildebrand 1975 dice que el
  bejuco «del peso se reventó **y lo botó a donde nace el sol**»; que los hermanos lo
  buscaron «pero nada, con brujería, pero nada. Ahí sí quedaron tristes»; y que la hija
  del Sol dijo que creía que **habían matado al menor**. El héroe no se aparta a tiempo:
  desaparece. El árbol cae hacia donde el sol se pone y a ella se le rompe el espinazo.
- **«Una mujer mayor que guardaba agua y peces» es la tía**, y ellos son sus
  **sobrinos**. El parentesco estaba borrado.
- **«Al abrirlos con sus hermanos encontraron aguas distintas» no está en la fuente.**
  Kayafikí actúa solo; la tía lo **engaña** haciéndole poner palos «para formar la cama
  del río», y el estantillo bueno —el que tenía pescado de todas las clases y ni guío,
  ni temblón, ni raya— **cae, pasa derecho y se pierde en la tierra**. Sólo después mira
  por las ventanillas de los otros tres.
- **«El agua abrió un cauce sinuoso»** era correcto pero mutilado: es sinuoso **porque
  el estantillo era una boa**, «por eso el río parece camino de boa».
- **«El abuelo les dio una pequeña esfera negra»** borraba una elección: el abuelo tiene
  **muchas pelotas amarradas, grandes y chicas**, y les da la más chiquita **advirtiendo
  que esa no sirve**. La pelotica negra es lo que se escapa después.
- **«Una gran palma de bombona»**: las fuentes dicen «palo» (1975) y «árbol» con raíz
  aérea (Maguaré), y el propio anexo botánico de Hildebrand deja la bombona **sin
  identificar**.
- La fecha es **noviembre de 1972**, no noviembre y diciembre, y el viaje fue «entre los
  ríos Vaupés, Apaporis y Caquetá».

**Lo que se ganó**: la advertencia del abuelo, que faltaba y es el corazón moral del
episodio de la maloca —«los postes traen las enfermedades; los bejucos y la cerca traen
los chismes y las peleas»—; el nombre del abuelo, **Yaifotsirimaki**, de *yai* jaguar,
*maki* hijo y *fotsi* el conjunto; los cuatro intentos con su nombre (ranchito de
dormir, rancho de perico, casa para comer sapo, maloca); la medida tomada **entre las
tetillas** y trasladada al estómago; los cuatro postes centrales y los doce alrededor;
la caja como **caja de guardar plumas (Katóa)** con **tres amarres**; la **macana en
las canillas, tres veces**; **Madre Monte** y **Kurupira**; y la glosa que resume el
ciclo entero: **Imarika** significa «el que ya vive», «el que sabe vivir», «el que no
va a morir».

Que el abuelo sea «hijo del conjunto de lo que es jaguar» no es un detalle: los
tanimuca se distinguen de los demás tucano orientales precisamente por reclamar
**jaguares y no anacondas** como ancestros míticos, por sus **malocas circulares** en
vez de cuadradas y por usar **almidón de piña** en lugar de yagé. Ese es el paralelo
que sustituye con ventaja al de la Anaconda-Canoa.

### 4.1. El nombre: «Ufaina» es un registro de 1975, no un uso actual

Los dos Hildebrand lo consignan en 1975 y 1976 como **autoetnónimo**: «la tribu
Tanimuka, **autodenominados Ufaina**». Hoy sobrevive en las listas institucionales
—MinCultura registra «ufaina» y «ufanía» entre las denominaciones— pero **ni la
literatura académica actual ni el propio Plan de Vida del territorio lo usan**. En el
Plan de Vida que las **22 comunidades** del Yaigojé Apaporis escribieron entre 2018 y
2023 se nombran **Yairimara**, y la palabra «Ufaina» **no aparece ni una sola vez**. No
hay evidencia de que sea el nombre de un subgrupo dentro de los tanimuka. El slug se
conserva por estabilidad de enlaces y el asunto queda en `dudas`.

Ese mismo Plan de Vida da algo mejor que un nombre: empareja a los creadores como **los
Ayawaroa / Imarima'kana**, nombra a las madres originarias **Ñamatu**, y traduce *buen
vivir* como **Jia Imarika**, «saber vivir» — la misma glosa que Hildebrand recogió en
1975 para el nombre de los cuatro hermanos.

### 4.2. Un paralelo mejor, abierto y literal

El módulo sostenía la comparación con «árboles de agua y peces entre los Makuna» en la
*Etnografía Makuna* de 2004, cuya única dirección era **una ficha de catálogo del ISA**
sin autores, año, ISBN ni PDF. Se sustituyó por el **mito de los Munully** de los
kawiyerí del Cananarí y el Apaporis, recogido por **François Bourgue** entre 1974 y
1977 y publicado en la Revista Colombiana de Antropología: abierto, arbitrado y
paralelo episodio por episodio (hojas pedidas a Peri el gavilán, noche pedida a Karu el
sapo, agua guardada por Kamanatana en el hueco del palo Itchuna). Y con una coincidencia
geográfica notable: **los dos pueblos dicen que en el Pirá-Paraná casi no hay hoja de
techar, y cada uno atribuye el desvío a su propio héroe**.

También se precisó un dato que estaba mal: para los **baniwa**, Hugh-Jones documenta
**un cesto y un saco**, no un recipiente cerrado del tipo caja.

### 4.3. La tesis de Oxford no existe

La pista del encargo era incorrecta. La bibliografía de Franky 2011 registra
**«Cosmologie et mythologie tanimuka», tesis de tercer ciclo, Université de Paris VII,
1979**; y lo que suele recordarse como tesis es en realidad **«Cosmovisión y concepto de
enfermedad entre los Ufaina», capítulo en *Medicina, shamanismo y botánica*, Funcol,
Bogotá, 1983, pp. 48-63**. Ninguno de los dos está en línea. Quien sí tiene doctorado de
Oxford es Ruth Gutiérrez, del frente nɨkak.

Del artículo de Maguaré queda una discrepancia sin cerrar: el repositorio de la
Universidad Nacional lo fecha en **1983** y Hugh-Jones y Franky lo citan como **1984**.
La cita de la ficha omite el año por eso.

---

## 5. Recuento

| módulo | mito | relato | historia | versiones | similitudes | lección | obras |
|---|---|---|---|---|---|---|---|
| yukpa | `la-piedra-que-flota` | 459 | 418 | 290 | 225 | 16 | 7 |
| yukpa | `los-dos-caminos-del-cielo` | 439 | 399 | 330 | 251 | 17 | 8 |
| nukak | `creacion-nukak-maku` | 488 | 414 | 320 | 259 | 15 | 8 |
| pirsa | `el-exorcismo-de-tamaracunga` | 565 | 403 | 332 | 271 | 17 | 9 |
| ufaina | `creacion-ufaina` | 650 | 431 | 380 | 350 | 18 | 10 |

Las cinco dentro de contrato. **42 obras declaradas sobre 36 URLs distintas, todas
abiertas y confirmadas una por una**; las seis que se repiten lo hacen entre las dos
fichas yukpa, con la misma URL canónica y con `summary` y `limitation` propios de cada
ficha. **Cero oraciones repetidas entre las cinco fichas**, medido sobre las 338
oraciones de las cuatro capas.

Ninguna portada de Google Books, ninguna ficha de Open Library, ningún blogspot,
Scribd, academia.edu, Wikipedia ni prensa. **Circularidad: ninguna en los cuatro
pueblos** — todos los nombres propios de las cinco fichas aparecen en fuentes
anteriores o independientes del sitio.

No se tocó ningún `.mjs`, no se escribió en Neon y no se ejecutó ningún script de
aplicar. Tampoco se usó la API de OpenAI: toda la investigación se hizo con búsqueda
y descarga directa, y los escaneos sin capa de texto —Hildebrand 1975, Bourgue 1976,
E. von Hildebrand 1976, el facsímil de Amberes— se leyeron con reconocimiento óptico
local.

Además de los cinco JSON de reescritura hay cinco archivos de fuentes estructuradas en
`content/editorial/<módulo>/fuentes-2026-09-19/<slug>.json`, con `summary` y
`limitation` propios de cada ficha y una URL canónica por obra. La vecindad —corpus
venezolano, textos en alemán, inglés o portugués, fuentes de un solo subgrupo,
registros de los años setenta— está marcada ahí, en `limitation`, y no en la página.
