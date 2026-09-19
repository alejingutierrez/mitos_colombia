# Dossier de investigación visual · Emberá Chamí

**Comunidad:** **Emberá Chamí**, rama andina del complejo emberá (familia lingüística chocó,
lengua **emberá bedea**). Su territorio es **Risaralda** —Mistrató, Pueblo Rico, Guática,
Marsella—, **Antioquia** —Cristianía/Karmata Rúa, Jardín—, **Caldas**, **Quindío**, **Valle** y
**Chocó**. Pero **los relatos de este corpus no salen de ahí**: salen de la vereda **Corozal**,
municipio de **Río Frío**, **Valle del Cauca**, de un asentamiento migrante de unas sesenta
personas en cinco casas, llegadas hacia 1930 desde la hoya del San Juan, Antioquia y Caldas.
**Corpus:** 22 páginas publicadas, congeladas el 19 de septiembre de 2026 · sha256 `5e1d6d4e3ea43ab4…`
**Biblia existente:** **118 fichas en cuatro capas**, V1 cerrada el 17 de septiembre de 2026;
`documented_exception` aprobada por el editor, **no** `approved`; ninguna persona emberá chamí la
ha revisado. Inventario en `content/mitos-visuales/chami.v1.inventario.json` (en `main`, no en esta
rama); documentos de cierre en `<sp>/chami-biblia-v1/`.
**Etapa:** 0 **tardía** — esta investigación llega después de la biblia. Su mitad útil es el §14.

**Esta comunidad tiene la mejor base de las cuatro** y por eso el listón es más alto: sus dos
primarios están en texto completo en `<sp>/editorial-prestado/chami/primarias/`, y existe ya un
expediente de etapa 0 de once documentos en `docs/chami-investigacion-2026-09-17/` (en `main`).
**Este dossier no lo repite: lo verifica contra los primarios, lo corrige donde falla, y audita la
biblia que salió de él.** Tres de sus afirmaciones no sobreviven a la lectura del impreso, y una de
ellas fijó mal el denominador entero de la biblia.

---

## 0 · El corpus no son 22 mitos — y tampoco son 14

Ésta es la primera página porque es la decisión que gobierna todas las demás: **cuántos relatos
hay, cuáles son primarios y qué autoridad tiene cada página.**

Las **22 páginas** publicadas son cinco cosas distintas:

| tipo | cuántas | cuáles | autoridad |
|---|---|---|---|
| **relato primario · Reichel-Dolmatoff 1953** | **14** | los catorce relatos numerados de Corozal, uno por página, sin duplicar | primaria, **narrador desconocido** |
| **relato primario · Chaves 1945, narrado por Nicolás Henao** | **1** | `el-gusano-gigante` (Surranabe) | primaria, **narrador con nombre** |
| **página editorial** | 5 | `jinopotabar`, `el-origen-de-los-animales`, `las-transformaciones`, `el-universo`, `el-origen-del-agua` | síntesis del sitio: **no hay una narración única que ilustrar** |
| **mediación mestiza de Caldas** | 2 | `la-culebra-de-las-siete-cabezas` (El Salado), `los-guardianes-vengadores-de-la-naturaleza` (Lomaprieta) | recogidas por Bueno Rodríguez 1988; **la segunda es explícitamente cristiana** —Dios se lava las manos y de cada gota sale un ángel— y ninguna tiene narrador acreditado |

**Y el corpus primario chamí es mayor que el publicado.** Chaves 1945 trae nueve relatos y dice en
su página 134 quién narró cada uno: **los cuatro primeros son de Nicolás Henao, chamí**; los cinco
últimos, de **Rafael Bailarín, katío**. De los cuatro de Henao, uno (`Erubidá y Siebidá`) es la
misma historia que el relato 6 de Reichel, y otro (`Surranabe`) es una página del sitio. Quedan
**dos relatos primarios chamí que el sitio no publica**: **`Arrumía`** (la hormiga arriera que se
vuelve mujer, con su viaje al mundo de abajo y los Aremuko) y **`Kurijía`** (el conejo de monte que
pide plata prestada, vende los cueros y bebe quince días).

**El recuento correcto, entonces: 17 relatos primarios chamí distintos** — 14 de
Reichel-Dolmatoff 1953 y 3 más de Chaves 1945 (Arrumía, Surranabe, Kurijía), más una segunda
versión de Erubidá y Siebidá. De ellos, **15 están publicados y 2 no**. Catorce no tienen narrador
conocido; **tres lo tienen y se llama Nicolás Henao**, de unos treinta años, hermano del cacique
del grupo y cuñado del brujo curandero, llegado de Balboa (Caldas), que tradujo él mismo al
castellano las palabras que decía en su lengua.

**Por qué esto importa y no es contabilidad.** El expediente de 2026-09-17 fijó el denominador de
la biblia en **14** y, en su tabla de procedencia, clasificó `el-gusano-gigante` como *«relato
katío transferido, atribuido a chamí pero katío en la fuente»*. **Es exactamente al revés.** La
nota de la propia ficha del canon lo dice —*«FRONTERA: transferido de Katío a Chamí por atribución
explícita de Chaves 1945»*— y el dossier H del mismo expediente lo confirma en su §4. La tabla de
la primera página invirtió la dirección del traslado, y **esa inversión sacó del inventario el
único relato primario chamí con narrador conocido que el sitio publica**. Sus entidades
—**Surranabe** el gusano grande, **los cuatro mellizos** que «sabían mucha cosa; eran como gente de
médico», y **la laguna** que quedó donde murió— no están en las 118 ni como ficha, ni embebidas, ni
excluidas. El editor lo detectó por su cuenta durante la producción; el inventario nunca se
rehizo.

**La advertencia del propio recopilador, que ninguna lámina puede disimular.** Reichel-Dolmatoff
escribe que, «por carecer de una perspectiva del contexto cultural del cual forman parte estos
mitos», se limita a presentar el material; y que fue **narrado en castellano** y transcrito «sin
cambio alguno». Sus **notas al pie son suyas, de 1953**: identifican especies en latín y proponen
comparaciones. Son hipótesis del recopilador y **no entran al Relato** — regla que este dossier
aplica también hacia dentro de la biblia, donde una de esas notas se convirtió en una decisión de
especie cerrada (§14.1, guatín).

Y una última frontera, en la otra dirección: el corpus chamí actual es en buena parte el residuo de
una limpieza de frontera en la que, de 26 slugs del bucket `embera`, **veinte pasaron a Chamí** y
cuatro a Katío. El dossier dóbida (`docs/investigacion/embera.md`, §9) cierra la puerta en sentido
contrario y con razón: *«Meter “Los Burumia” en Chamí sería la falta grave»*. **La reubicación de
ese relato dentro del expediente katío sigue abierta y no se resuelve aquí.**

---

## 1 · Lo que esta investigación corrige de lo que se habría dibujado sin ella

La biblia se hizo con un expediente delante, y es el mejor de las cuatro comunidades de este lote.
Lo que sigue no son huecos de investigación: son **catorce lecturas del impreso** que cambian lo
que hay en una lámina.

1. **La marca de los dos pueblos está repartida al revés, y es el error más visible de la biblia.**
   La biblia se enorgullece de que «quien mire las dos láminas puede decir cuál es cuál sin leer el
   título»: el **siebidá** con *majagua blanca y el andea* en la cabeza, el **erubidá** con
   *chaquira blanca en la cabeza y en las manos* y la *pinta de jagua*. Pero Chaves no describe dos
   atuendos: describe **uno solo, dos veces, y es el de los Erubidá**. Primero: «Los Siebidá, que se
   habían **disfrazado de Erubidá, con majagua blanca, andea en la cabeza**, sacaron sus lanzas».
   Después: «el muchacho […] que se había **vestido como los Erubidá, con chaquira blanca en la
   cabeza y en las manos, con la pinta de jagua de los Erubidá**». **Los cuatro rasgos son
   erubidá.** De la indumentaria siebidá el archivo no dice una palabra, y no la dice porque el
   mecanismo entero del relato es que el disfraz funciona: si los Siebidá tuvieran una marca propia
   reconocible, no habría relato. **La biblia partió en dos la ropa de un solo pueblo y le dio la
   mitad al otro.**
2. **No hay «el mundo de abajo azul» chamí.** La ficha lo cierra como *plano, sólo chontaduro,
   piedras azules*. Esos tres rasgos salen textualmente de **el Padre Rochereau describiendo a los
   **catíos** del occidente de Antioquia**, citado dentro de una nota comparativa de Chaves: «Son
   esas tierras perfectamente planas, sembradas de chonta-duros (no se conoce otra vegetación) y las
   piedras son azules, de amolar». En los catorce relatos, el mundo de abajo tiene **indios muy
   bajitos que comen humo** (relato 2) y gente que se llama **aramúko dohurá** y come sólo jugo
   (relato 13): ni llanura, ni chontaduro exclusivo, ni piedras azules. La única piedra azul chamí
   está en **Arrumía** (Chaves II), es una piedra *«bien pintadita de azul»* puesta **en un camino
   de este mundo** para borrarlo, y no es de amolar. **El paisaje ancla de la capa 4 se construyó
   con material katío.**
3. **Héntserá no es una hormiga en la fuente, y la biblia prohibió lo único que la fuente
   permite.** Reichel anota al pie, entero: *«Un ser mítico»*. La identificación como **hormiga
   conga** viene de la raíz *je-* y de Vasco, cuarenta años después y en otra región: es una
   hipótesis buena y vale como `variant`. La biblia la elevó a `documented_core` y, en el mismo
   renglón, marcó `do_not_visualize` «Héntserá con figura humana o de deidad». Es decir: **obligó a
   la forma que la fuente no da y prohibió la que la fuente deja abierta.**
4. **El guatín se cerró sobre una nota al pie de 1953, contra la palabra del narrador.** El texto
   dice **guatín** treinta y tres veces. Reichel apunta al pie *«Coelogynis paca sp.»* —grafía antigua y
   errada de *Coelogenys/Cuniculus paca*, la guagua— y Chaves glosa «conejo de monte». En el español
   de Colombia *guatín* es normalmente el ñeque (*Dasyprocta*): delgado, patilargo, pardo uniforme;
   la guagua es maciza, baja y con **hileras de manchas**. Son dos siluetas incompatibles. La biblia
   declaró la duda **resuelta** —«guagua o paca, con cuatro hileras de manchas»— y bajó la matriz de
   cuatro `consult_required` a tres. Pero el propio LEEME de los primarios dice que **las notas al
   pie son hipótesis del recopilador y no entran al Relato**. Es `variant`, no resuelto.
5. **Tatabro y zahíno son el mismo animal, y tienen dos fichas.** Reichel pone *«Dycotilus
   torcuatus»* al pie de **zahino**; Chaves pone *«dycotyles torquatus»* al lado de **tatabro**.
   Los dos recopiladores glosan el mismo pecarí de collar con dos nombres regionales. La biblia
   produjo **dos láminas de animal para una sola especie**, y además una tercera dependiente
   —«el colibrí que se vuelve zahíno»—.
6. **La única criatura del corpus con descripción física es la que la ficha declara «sin
   nombre».** El segundo animal acuático del relato 2 **sí tiene nombre**, *nusi urú*, glosado al
   pie «Tiburón», y es el único ser de los catorce relatos del que se dice cómo se ve: *«la boca del
   animal, que era muy bonita, **como una flor de granadilla**. Las aletas del animal eran **como
   hoja de palma real** y muy bonitas»*. Dos símiles, los únicos de todo el corpus, y la ficha los
   tiró.
7. **Hay una criatura mítica nombrada y glosada que no tiene ninguna decisión: `tíumía`.** Relato
   3, nota 16: *«Animal mítico, armado con una lanza y que come gente»*. Ensarta a uno de los dos
   hermanos. Tiene dueño —el perseguidor que la biblia excluyó— y tiene arma. No es ficha, no está
   embebida, no está excluida.
8. **La bodoquera del corpus no dispara dardos: dispara cuerdas, y va con un baño.** La ficha
   «dardos y carcaj» trae chonta, cono de lana de balso, medida del codo a la muñeca, carcaj de
   guadua y dardos punta arriba: **todo eso es Vasco, en Risaralda, cuarenta años después**. Lo que
   el relato 3 describe es una escena de aprendizaje: *«Dumío se torció **pitas** delgadas y a una
   cuadra las tiró con bodoquera. El hombre también tiró pero no pudo. […] Entonces el hombre **se
   bañó con pita** y casi tiró entonces la pita. “¡Otro baño!” dijo el viejo. Entonces el hombre sí
   pegó la pita»*. Cuerdas torcidas, un baño de la misma fibra, y sólo después *«ahora necesitas
   sólo dos flechas»*. **La única secuencia técnica completa del corpus no está en ninguna ficha.**
9. **La única prenda que nombran los catorce relatos son unas «mantas», y no tiene ficha.** Relato
   3: la madre *«les dio comida y **mantas** para el camino»*. Es la única palabra de textil en
   34.000 caracteres. La segunda cosa más cercana es la **«ropita»** que el oso **roba a la gente**
   y le lleva a la mujer raptada (relato 5) — el único cambio de vestuario que ocurre en el corpus, y
   ocurre por robo. Ninguna de las dos está en el inventario. Toda la ropa que llevan las 36 fichas
   de personas viene de otra parte.
10. **El único adorno del corpus con nombre en emberá lo llevan ocho ardillas.** Relato 11: *«Las
    arditas tenían todas **narigueras (monsimá)**. Y cuando cayó el árbol, éstas se reventaron»*. La
    biblia hizo bien en excluir la nariguera de las personas; conviene decir en voz alta que la
    nariguera documentada existe, y que es de animales.
11. **El motivo central del relato 2 no está declarado ni siquiera como prohibición.** El hijo de la
    nutria *«todo alimento que quiso […] era la sangre menstrual»*; de noche va al pueblo a buscar
    entre las mujeres dormidas y *«se puso a beber su sangre menstrual»*; más adelante *«agarró a
    todas para beber la sangre de ellas»*. Tres pasajes. Es lo que explica por qué **la gente lo
    odiaba** y por qué sólo lo aguantaban por buen cazador. En el inventario la palabra «sangre»
    aparece una sola vez, en «el río rojo de sangre». **No hay ficha, no hay embebido y no hay
    `do_not_visualize`.** Sin esa decisión, la ficha del héroe no dice de qué es la historia.
12. **La escala del único poblado del corpus es de sesenta casas.** Relato 6: los Siebidá *«quemaron
    **diez de las sesenta casas** del pueblo de los Erubidá»*. No es una aldea: es el asentamiento
    más grande que el corpus nombra, y contrasta con las **cinco casas** de Corozal en 1945. La
    ficha «pueblo erubidá» dice «casas quemadas» y no lleva el número.
13. **Hay dos ríos reales nombrados y ninguna decisión sobre ellos.** Relato 11: al caer el jenené,
    la raíz se volvió el mar y *«las ramas quebradas, las más grandes **el Cauca y el Magdalena**»*.
    El relato ancla su geografía en dos ríos mapeables. No están en el inventario.
14. **El metal está dentro del relato, y la biblia lo resolvió bien.** Karagabí abre la palma con
    **hacha**; hay **muchas hachas** para tumbar el jenené; el zorro lleva **hacha**; Karagabí
    intenta hacer fuego con un **serrucho** a mediodía; el hijo de Hímo parte el pescado con
    **machete**; el hijo de Karagabí corta con **cuchillo**; y en Kurijía corren **pesos y
    centavos**. La época `prehispanico` del repo prohibía todo eso y habría amputado el corpus. Que
    se añadiera **`mitico_chami`** antes de generar es la decisión más acertada de la producción y
    hay que conservarla.

Y una que no cambia una lámina sino la manera de leer el archivo: **Chaves levantó 22 fichas
antropométricas con 62 datos cada una** en ese mismo grupo de sesenta personas. Ese material es
antropología física de su época, **es `do_not_visualize`**, y no se usa para «verificar» un rostro.

---

## 2 · Dimensión de época — cuatro estratos que no se mezclan

**El corpus chamí tiene cuatro tiempos y la biblia los trata como uno.**

- **Estrato A · tiempo mítico narrado (`mitico_chami`).** Los catorce relatos y Surranabe. Karagabí
  hace gente; la gente rompe piedras dentro de la casa para romper la oscuridad; el jenené cae y
  hace el mar. **Tiene hacha, machete, serrucho y cuchillo**, y no es un anacronismo: es lo que el
  narrador dijo. No tiene arma de fuego, ni canoa en Reichel (sí cinco canoas en Chaves I), ni
  animal doméstico salvo el **burro** del relato 1, que es parte del chiste.
- **Estrato A′ · el mismo tiempo mítico con dinero.** Kurijía pide diez centavos al sapo, cuarenta
  al tigre, un peso al cazador, y le vende los cueros. **Limpiarlo para que «parezca más indígena»
  falsifica la fuente**, igual que emplumarlos. No está publicado, pero si alguna vez se ilustra,
  va en su propio estrato.
- **Estrato B · el presente de la recolección, Corozal 1945.** Sesenta personas en cinco casas,
  «relativamente aculturados y generalmente bilingües», que **ya vestían indumentaria europea**.
  Ése es el estrato de los narradores, no el de los personajes. Una lámina que quisiera mostrar la
  expedición de Chaves y Reichel iría con ropa de campesino, y ninguna de las 118 lo hace ni debe.
- **Estrato C · la memoria viva, Risaralda y alto San Juan, 1978-2025.** Vasco con Rosa Elvira,
  Celso, Benito y Rafael; Clemente Nengarabe; Jhon Jairo Siágama; Alicia Guasorna, Noralba Siagama
  y Delfina Wazorna. Es de donde salen el **tambo con corredor y cuartico**, la **bodoquera paso a
  paso**, el **chokó**, la **jemenede**, los **tres mundos** y el **okama**. **Es otro siglo y otra
  cordillera**, y la biblia lo usó sin declararlo lámina por lámina.

**La regla.** Cada ficha declara su estrato. El estrato A admite hierro y prohíbe raso, encaje,
chaquira de anilina, okama contemporáneo y diseño facial fotografiado. El estrato C admite todo eso
y **no puede vestir a un personaje del A**. La biblia escribió esa regla en su propia matriz de
evidencia —«poner okama o diseño facial contemporáneos a un personaje de los catorce relatos:
`editorial_interpretation` · `do_not_visualize` · anacronismo»— **y después generó cuatro láminas
que la rompen** (§14.1).

---

## 3 · Dimensión visual — la trampa del verde, medida contra el impreso

**Comprobada.** Recuento propio sobre el cuerpo narrativo de Reichel-Dolmatoff 1953 (34.397
caracteres, sin el preámbulo), con límites de palabra y grafías de época (`obscuro`):

| campo | veces |
|---|---|
| sol · día · mañana · mediodía · amanecer · luz | **50** |
| casa · tambo · rancho · pueblo | **56** |
| agua · río · charco · mar · quebrada · lago | **49** |
| maíz · chicha · comida · comer | 24 |
| monte · árbol · palma | 25 |
| noche · oscuridad | 20 |
| piedra · montaña · derrumbe | 19 |
| luna | 13 |
| fuego · candela · humo | 10 |
| sangre | 5 |
| **lluvia · nube · niebla · aguacero** | **1** |
| **azul** | **1** |
| **rojo** | **2** |
| **verde** | **0** |
| **blanco** | **0** |
| **amarillo** | **0** |
| **frío · calor · sed · seco** | **0** |
| **selva** | **0** |

**Qué sostiene de verdad la paleta, entonces.**

- **El corpus no es un corpus de selva: es un corpus de la casa, el agua y el día.** Lo más
  nombrado es la casa; lo segundo el día; lo tercero el agua. El monte es **adonde se sale**, no la
  atmósfera que envuelve. Una selva esmeralda goteando niebla sería el error del azul wayuu con
  otro color, y la fuente para negarlo es aritmética, no gusto.
- **Los únicos colores nombrados son tres y los tres son narrativos**: el **talego rojo** del Sol,
  el **talego azul** de la Luna (relato 7) y **el río que corre rojo de sangre** cuando muere la
  ballena (relato 2). Nada más tiene color en los catorce relatos.
- **Y un hallazgo que el expediente anterior no registró: `blanco` aparece cero veces.** Toda la
  ropa blanca de la biblia —majagua blanca, chaquira blanca— viene de **Chaves**, no de Reichel, y
  viene además del atuendo de un solo pueblo (§1.1). El blanco del corpus primario es prestado.
- **`negro` aparece ocho veces y las ocho son el mismo personaje**, el perseguidor del relato 3 que
  la biblia excluyó con razón. Es decir: **la única densidad cromática de los catorce relatos está
  sobre una figura que no se dibuja.**
- **La oscuridad es acontecimiento, no ambiente.** Veinte menciones, casi todas en el relato 10,
  donde el mundo se oscurece **dos veces** y la gente rompe piedras **dentro de la casa** para
  romperla. Oscurecer una lámina «para dar ambiente» le quita fuerza a la única vez que la
  oscuridad significa algo.
- **La hora está casi siempre dicha**: el Sol cogido **a mediodía** y la Luna **de noche**; el
  serrucho de Karagabí **a mediodía**; la pesca **con luna llena**; el ataque **a las cinco de la
  tarde** y la matanza **a las once de la noche** (Chaves I); Karagabí que vuelve **al amanecer**.
  Una lámina chamí sin hora declarada está mal iluminada.

**La materia, que sí está documentada.** Balso (asientos, balsa, muñeco, palo tras el que se
esconde el hermano), guadua (escalera al camino de la luna), chonta, bejuco (riendas, cama),
majagua, pita, barro (chokó y olla), **brea** —que es a la vez la comida y el cuerpo de Horchíbarí,
y lo único que queda de él al morir—, miel y hojas (el disfraz del guatín), harina de maíz chiquito
con agua, y oro: **la Gente del Sol tenía mucho oro y la de la Luna también**, y en Chaves I el
viejo Erubidá regala **un cacique de oro** como señal de amistad. El oro es el único material
precioso del corpus y es signo de paz, no de adorno personal.

---

## 4 · Dimensión histórica y territorial — un corpus migrante que no es su pueblo

**Dos geografías que no se pueden confundir, y la biblia las mezcla sin decirlo.**

**Corozal, Río Frío, Valle del Cauca, 1945.** Unas sesenta personas en cinco casas, en la vertiente
de la **Cordillera Occidental** sobre el valle del Cauca, llegadas **hacia 1930** desde la hoya del
río San Juan y desde Antioquia y Caldas. Es un asentamiento pequeño, reciente y de frontera. **De
aquí salen los diecisiete relatos primarios.**

**Risaralda y el alto San Juan.** El territorio del pueblo: Mistrató, Pueblo Rico, Guática,
Marsella; Karmata Rúa y Jardín en Antioquia; y el río Azul, donde trabajó Vasco con narradores con
nombre. **De aquí sale casi toda la cultura material que la biblia dibujó** —tambo, bodoquera,
chokó, jemenede, los tres mundos— y **no es el mismo paisaje, ni la misma altura, ni el mismo
siglo**.

Hay una tercera, menor y real: **el occidente de Caldas**, de donde vino Nicolás Henao (Balboa) y
donde ocurren las dos mediaciones mestizas, El Salado y Lomaprieta, y el par gusano-laguna de
Jeguadas y La Batea. La página de Surranabe lleva coordenadas de Caldas (5.4539, −75.7419) mientras
las otras veintiuna llevan las de Río Frío (4.1561, −76.2878): **la única página con narrador
conocido es también la única que el sitio sitúa en otro departamento.**

**Lo que el repo tuvo que corregir antes de generar, y acertó.** `COMMUNITY_CRAFT.Chamí` decía «eje
cafetero», «chaquira de pechera» y «jagua en trazos geométricos»; `REGION_CRAFT.Andina` habría
inyectado «páramo altoandino, frailejones, niebla fría y geometría muisca sobria». Lo primero sitúa
mal el corpus, lo segundo es contaminación muisca por la puerta de atrás. Se añadió **«Cordillera
Occidental»**. Los catorce relatos dicen **frío y páramo cero veces**: la corrección es correcta y
está medida.

**Frontera con los hermanos, que es donde está el riesgo real.** Chamí, Katío, Dóbida, Eperara
Siapidara y Wounaan comparten lengua, tradición oral, jaibanismo y organización social. Por eso el
préstamo aquí **no es error de ignorancia sino de verosimilitud**: lo prestado *funciona*, y por eso
no se nota. Las cuatro fronteras, en corto:

- **Katío** (*eyábida*, gente de montaña, occidente de Antioquia). Es el préstamo que ya ocurrió:
  el mundo de abajo plano y de piedras azules es de Rochereau sobre los catíos (§1.2), y cinco de
  los nueve relatos del artículo «de los indios Chamí» son katío de Rafael Bailarín — **Awena y el
  temblor, Betenabe madre de los pescados, la mujer de Karagabí vuelta lechuza, Bibidigomia y el
  árbol hueco con balcón, y la india Pixaawina**. Ninguno entra.
- **Dóbida** (*gente de río*, Bojayá y Baudó). Naribamiá, el uángano y el tigre de agua son
  dóbida. Y el nombre **Jinu Potó**, que la biblia usa para titular la ficha del hijo de la nutria,
  viene de la literatura dóbida: en Río Frío ese personaje **no tiene nombre**, y la ficha hace bien
  en decirlo — pero entonces el título no debería llevarlo.
- **Eperara Siapidara** y **Wounaan** (Pacífico sur y San Juan bajo). Tienen dossier propio en
  `docs/investigacion/`. Nada suyo entra y nada chamí sale hacia ellos.
- **Y la que casi nadie vigila: el emberá genérico del Chocó de 1927.** Las nueve fotografías de la
  expedición Nordenskiöld documentan **una casa redonda, elevada, sin paredes, de techo cónico
  radial y escalera de tronco con muescas**. La matriz de la propia biblia prohíbe presentarla como
  la casa chamí — y la ficha del tambo lleva la escalera de muescas igual (§14.1).

---

## 5 · Dimensión simbólica — qué significa lo que se ve, y qué no se muestra

**El diseño no es decoración: es filiación.** Es la lección central de este corpus y vale para todo
lo demás. En Chaves I el disfraz funciona **porque se copia la pinta del otro pueblo**: la pinta de
jagua *identifica al grupo*. De ahí se sigue, sin metáfora, que **inventar un diseño de jagua es
inventar un linaje**, y que copiar uno real es atribuirle a alguien una pertenencia que no eligió.
La misma regla gobierna el **okama** y la **cestería** de hoy, con una razón añadida: esas piezas
son **el sustento** de artesanas concretas y en las fotografías del expediente están **expuestas
para la venta**. **El lenguaje sí, el ejemplar no.**

**Los tres mundos, y el agua como bisagra.** *Bajía* arriba, con **Carabí** la luna —padre de
Jinopotabar— y **Ba** el trueno; *egoró*, la tierra, donde los emberá siembran, cazan, se enferman y
se mueren; y abajo *aremuko* o *chiapera*, donde están **Tutriaka**, los **dojura**, los
antepasados, y de donde se originan los jaibaná. **Al mundo de abajo se llega por el agua.** El
relato 13 de 1945 llama a esa gente **aramúko dohurá** y Vasco, cuarenta años después y en otra
región, escribe *aremuko* y *dojura*: cuando dos fuentes independientes coinciden así, la entidad
es firme. Lo que **no** coincide es su aspecto (§1.2).

**Lo que está en los relatos y es material sensible.**

- **El muerto sin enterrar.** Relato 6: el hijo del brujo queda *«en un hueco debajo de la casa,
  pero sin enterrarlo […] y a veces se oyeron ruidos allá»*. La biblia lo resolvió por el hueco y
  el sonido, no por el cuerpo. Es la decisión correcta.
- **El cuerpo que desaparece al tercer día.** Relato 2: lo lloran dos días y al tercero el muerto
  ya no está. Se muestra la ausencia, no el cadáver.
- **El sueño como fuente de saber.** *«Ya lo sabía todo porque así me soñé»*. Se representa por su
  **efecto** —el jefe que ya está preparado—, nunca como viñeta onírica.
- **El corte de las nalgas** con que el hijo de Karagabí mata a los aramúko: mutilación explícita,
  `do_not_visualize`.
- **La sangre menstrual del relato 2**, que es el motor del personaje y hoy no tiene ninguna
  decisión declarada (§1.11). Debe declararse **`do_not_visualize`, y declararse**: la escena se
  resuelve por el rechazo de la gente, no por el acto.
- **La jemenede.** La niña **dentro** del encierro no se ve; la fiesta se representa por la
  **salida** —cántaro y niña en andas, bailando por la casa—. Y la jerarquía que fija Rosa Elvira y
  que ninguna lámina debería invertir: *el chokó es la primera princesa de la fiesta; la niña es sólo
  la segunda*.
- **El jaibaná.** Su trabajo, su vestuario, su transformación y la chicha cantada son
  `consult_required` y quedan fuera. Rubiano (2023) corrige a Reichel en dos puntos que cambian el
  dibujo: **los alucinógenos son secundarios, no fundacionales** —la imagen del chamán en trance con
  la planta es una deformación— y **la enfermedad se explica por conflicto social** antes que por
  espíritus de animales. Y añade que el jaibaná **se transforma**, no «cree transformarse»: una
  imagen que lo trate como símbolo lo falsea. §14.3 sostiene la decisión de dejarlo sin ficha y
  muestra por qué la decisión no se cumplió.

**Prohibiciones que vienen de las fuentes y no de nosotros**: una mujer viendo hacer el canal de la
bodoquera o mirando por el agujero; la rana kokoi o su veneno dentro de la casa; un cazador
anunciando que va a cazar o nombrando la presa; sembrar maíz **abriendo la tierra** —*el maíz se
riega al voleo, en abanico, de izquierda a derecha*—; y el interior del encierro.

---

## 6 · Dimensión arquitectónica — lo que el relato da y lo que hay que traer de fuera

**Lo que los catorce relatos dan es una lista de lugares, no una arquitectura.** Nombran: la casa
—47 veces—, el **tambo** (nota 27 de Reichel: *«Casas indígenas sobre pilotes»*), el **rancho**
levantado en el monte para cazar, el **pueblo** de sesenta casas, el **hueco bajo la casa**, la
**bóveda profunda** donde el padre esconde a los hijos, el **zarzo** y la **olla grande** donde se
esconde el hombre, el **fogón**, el **árbol cavado** que es ataúd con un dedo afuera, el **rancho
encima del árbol alto** con cama de bejucos, la **cueva**, la **casa grande** de la bebeta (Chaves
I) y los **tambos invisibles** que sólo se ven después del baño de flores.

**Ninguno está descrito.** No hay una medida, ni un material de techo, ni una planta, ni una
escalera en los catorce relatos. Todo lo que la biblia dibujó del tambo —corredor delantero, vigas,
zarzo, fogón, patio, el **cuartico** de la iniciación— viene de **Vasco, en Risaralda**; y la
**escalera de tronco con muescas** viene de las fotografías de **Robinson & Bridgman 1969** y del
conjunto **Chocó 1927**, que la propia matriz prohíbe presentar como chamí.

**No es un error dibujarlo así: es un error no decirlo.** La solución no es quitar el tambo, es que
la ficha declare su estrato (C) y su región (Risaralda), y que el corpus de Río Frío no quede
presentado como si lo hubiera descrito.

**Dos formas que sí son del relato y la biblia no tiene.** Los **tambos invisibles** son la única
arquitectura con una regla óptica propia —existen y no se ven hasta que uno se baña con flores del
monte, y la madre marca el suelo bajo una casa para reconocer el lugar—, y **la biblia los tiene
como ficha pero sin esa regla**. Y **la escalera de guaduas amarradas** con que el hombre sube al
camino de la luna, que el pájaro carpintero corta: es una construcción efímera, vertical y
provisional, y es lo más parecido a una obra de ingeniería que hay en el corpus.

---

## 7 · Dimensión de personajes — porte y oficio, porque de vestuario no hay

**La biblia tiene 36 fichas de personas. Los catorce relatos describen el cuerpo de tres.**

Lo que el archivo da, entero:

- **El hijo del oso**: *«el niño tenía **de la cintura para abajo mucho pelo como un oso**»*. Es su
  cuerpo, no un disfraz ni un pantalón de piel, y la biblia acertó al resolverlo con piezas planas
  recortadas en dientes largos.
- **La mujer embijada**: *«salió de golpe de la tierra una india muy bonita y **toda embijada**»*.
  Es un ser del mundo de abajo, no una chamí humana, y la bija es lo que la separa.
- **Los indios del mundo de abajo del relato 2**: *«indios **muy bajitos**»*. **Es el único dato de
  estatura de todo el corpus**, y la biblia lo perdió al fundir a esa gente con los aramúko dohurá
  del relato 13, que no son bajitos ni son los mismos.

Todo lo demás del cuerpo es de Chaves y es de un solo pueblo: **chaquira blanca en la cabeza y en
las manos** —no en el cuello—, **la pinta de jagua**, **majagua blanca** y **andea** en la cabeza,
los cuatro rasgos **erubidá** (§1.1). Y **`andea` no está glosado**: es una palabra sin traducción
en el impreso, de modo que dibujarla es inventarle forma.

**Cómo se lee entonces un personaje chamí, si no por la ropa.** Por lo que hace y por con qué:

| figura | lo que la fuente le da |
|---|---|
| **Karagabí** | «héroe cultural principal de las tribus del Chocó» (nota 30). Hacha; se vuelve pescado grande; **se arregla bien bonito** y **enjovenece** para probar a su mujer; castiga volviendo animal. **Actúa en cinco de los catorce relatos y es nombrado en un sexto**; el inventario le asigna cuatro |
| **el hijo de Karagabí** | «era un sabio»; cuchillo; encerrado en el árbol con **un dedo afuera**, y cuando lo mueve hay temblor |
| **la mujer de Karagabí** | *«ella se arregló bien y se fue»* al baile, tres veces; vuelta **lorita** que grita *huakuá* con luna llena — **no lechuza**: la lechuza es la versión katío |
| **el hijo de la nutria** | nace de una pantorrilla reventada; bebe sangre menstrual; lanza bien amolada, cuatro palos de balso, **un carrizo** para llamar a la ballena; gran cazador, y por eso lo aguantan |
| **el hombre que atrapó al Sol y a la Luna** | dos talegos, maíz caliente y hojaldres; le pegan con lanzas y no se muere |
| **el vigilante disfrazado** | «era un **brujo**»; se disfraza de Erubidá; mata a ocho con su lanza |
| **el jefe siebidá** | se llama **Sikóna** —el **único nombre propio de una persona humana en los catorce relatos**— y sabe por sueño. La ficha no lleva su nombre |
| **el hombre que cava el árbol** | hace el ataúd y Karagabí lo vuelve **pájaro carpintero** |
| **el muchacho sirviente** | el que espía a Héntserá y descubre el jenené |
| **la mujer raptada** | un año en la copa de un árbol, en cama de bejucos, con ropa robada |
| **las cuatro figuras de tipo** | no están en el relato: son andamio editorial, y deben declararlo |

**La edad se lee por proporción, postura y pelo blanco**, no por arrugas pintadas: la biblia lo
corrigió en tres fichas y tenía razón. Y el **rostro** es óvalo plano de un solo tono, con el pelo,
dos cejas, dos ojos mínimos y una boca como recortes aparte: se arregla en un paso distinto del
cuerpo, y si no se nombra por separado el modelo esculpa.

---

## 8 · Dimensión de criaturas — anatomía, escala, qué la hace ella

**Horchíbarí.** *«Caníbal mítico»* (nota 18) y **humanoide, no reptil**: pelea cuerpo a cuerpo,
tiene casa y mujer, come **brea**, se ríe, y su juego es **rodarse por los derrumbes monte abajo**.
Se le mata con un **asientico**. Y al morir *«allá donde estaba él se quedó solo un montón de
brea»*, que se recoge en un canasto. **La brea es su materia y su final**: ésa es la ficha, no los
dientes.

**La ballena que come gente.** Se la llama con un **carrizo**; se traga al hombre **y a la balsa**;
dentro hay *«muchas gentes vivitas y animales y aves, y hubo ríos y quebradas; en medio hubo un río
grande»*, y el río sale **por debajo de la cola**. Su **corazón es una ahuyama** (*Cucurbita
maxima*). El hombre tranca la salida con la lanza. Al morir, **el río corre rojo de sangre**.

**`nusi urú`**, el segundo ser acuático: boca *como una flor de granadilla*, aletas *como hoja de
palma real*, glosado «tiburón», y **la gente lo lloró porque era su dios**. La única criatura
descrita del corpus (§1.6).

**`unangaramia`**: *«No era un solo animal sino eran muchos. Era **la mata de los animales**. Allí
donde estaban, salió humo»*. El hombre mata a muchos y deja viva la mitad: *«Si los mato a todos, no
habrá más animales en el mundo»*. Es una matriz de especies, no un bicho.

**`tíumía`**: animal mítico **armado con una lanza** que come gente (§1.7). Sin decisión.

**Hímo la iguana**: dueña de la candela, la esconde, ahúma pescado con ella, y Karagabí se la quita
volviéndose **pescado grande**. Castigada, **se vuelve hormiga chiquita**. El par
iguana→hormiga-chiquita es la transformación más radical del corpus: de dueña del fuego a lo más
pequeño que hay.

**Surranabe**, el gusano grande que se comía hombres y animales, muerto por **cuatro mellizos** con
lanza, y **donde lo mataron se formó una gran laguna**. Vasco lo lista entre los monstruos que los
jaibaná del alto San Juan tuvieron que vencer: tercera fuente independiente. **Sin ficha.**

**El pelaje es la trampa.** Para oso, jaguar, puma, nutria, venado, zorro, ardilla y el hijo del
oso: **pocas piezas planas grandes con el borde recortado en dientes**, nunca pelo por pelo. La
biblia aplicó la regla invertida desde la primera lámina y **las 24 salieron a la primera**: es la
lección de wayuu bien aprendida y hay que conservarla escrita.

---

## 9 · Expediente de fuentes

Los dos primarios están en texto completo en `<sp>/editorial-prestado/chami/primarias/`. Las que
cambian una lámina, primero.

| id | rol | autor · título | año | localizador | qué sostiene | limitación |
|---|---|---|---|---|---|---|
| `rd1953` | primary_or_early | G. Reichel-Dolmatoff, *Algunos mitos de los indios Chamí (Colombia)*, Revista Colombiana del Folclor, pp. 148-165 | 1953 | redaprende.colombiaaprende.edu.co · `recursos/colecciones/34UDQKC25D1/T5RZEZ6LF62/1226` | **Los catorce relatos** y todo el §3, §7 y §8 de este dossier: el recuento de color, el hijo del oso, la mujer embijada, los indios muy bajitos, `nusi urú`, `tíumía`, la bodoquera de pitas, las mantas, el carrizo, la ropita robada, Sikóna, las sesenta casas, el Cauca y el Magdalena, el hacha y el serrucho | Narrado **en castellano** por hablantes bilingües y transcrito por un forastero que declara **no haber podido estudiar el contexto cultural**. **Ningún narrador registrado.** Sus **notas al pie son suyas, de 1953**, con identificaciones latinas de época y dos errores comprobables (§12.4) |
| `chaves1945` | primary_or_early | M. Chaves Ch.; narrados por **Nicolás Henao** (I-IV, chamí) y **Rafael Bailarín** (V-IX, katío), *Mitos, tradiciones y cuentos de los indios Chamí*, Boletín de Arqueología I, tomo II, pp. 133-159 | 1945 | publicaciones.icanh.gov.co · `catalog/download/235/257/1568` | **Erubidá y Siebidá con su indumentaria** (§1.1), **Arrumía**, **Surranabe**, **Kurijía**; el `bitrú`, el `miesú`, el `neerá`, la `kuyubra`, la yerba `beké`, el `inká`, la chaquira como botín, el cacique de oro, las cinco canoas, el dinero | El título hace pasar por chamí **cinco relatos katío**, y la frontera sólo está en la p. 134. **El PDF contiene el boletín entero**: cualquier `grep` trae material muisca (§12.1) |
| `rd1945ceramica` | primary_or_early | G. Reichel-Dolmatoff, *La manufactura de cerámica entre los Chamí*, Boletín de Arqueología I, tomo V, pp. 425-430 | 1945 | publicaciones.icanh.gov.co · `catalog/download/238/261/1574` | **El estudio de cultura material de la misma expedición**: el **chokó** de cuerpo ovoidal, base aplanada, una o dos caras y tapa en forma de lenteja gruesa, con **líneas incisas que representan la pintura facial** y perforaciones en orejas y bajo los brazos; acabado rojo brillante con manchas negras de cocción; alfarería de mujeres; **pipa colectiva de cuatro boquillas**; y que en 1945 **ya vestían indumentaria europea** | **No se pudo leer en esta sesión**: no está entre los ficheros prestados. Todo lo que este dossier le atribuye llega **citado por el expediente de 2026-09-17**, no verificado contra el impreso |
| `vasco-chami` | academic | L. G. Vasco Uribe, *Los Embera-Chamí en guerra contra los cangrejos*, en *Entre selva y páramo* | — | luguiva.net · `libros/detalle1.aspx?id=227&l=3` (texto dentro del HTML, sin descarga) | **Casi toda la capa 3 y 4 de la biblia**: el tambo con corredor y cuartico, la bodoquera paso a paso, dardos y carcaj, el veneno, la roza al voleo, el chokó como ancestro, la jemenede, los tres mundos, la raíz *je-*, el jai y el jaibaná, las madres de especie, río arriba / río abajo. Y **gente con nombre**: Rosa Elvira, Celso, Benito, Rafael | **Alto San Juan y río Azul, Risaralda**, y del siglo XXI: **otra región y otra época** que Corozal 1945. Nada de aquí describe a los narradores del corpus |
| `vasco1985` | academic | L. G. Vasco Uribe, *Jaibanás. Los verdaderos hombres* | 1985 | luguiva.net · `libros/detalle.aspx?id=7` | Transcribe **Surranabe** citando «Chaves (1945: 148)» y lo integra en su análisis de la serpiente y el agua; lista *surranabe* entre los monstruos vencidos por los jaibaná del alto San Juan | No recogió el relato: lo cita. Su glosa «[es decir, jaibanás]» sobre «gente de médico» **es lectura suya y no entra al Relato** |
| `rubiano2023` | academic | J. C. Rubiano Carvajal, *Reichel-Dolmatoff y el chamanismo chocó, una mirada desde los embera-chamí*, Boletín de Antropología 38(66), pp. 111-129, U. de Antioquia | 2023 | revistas.udea.edu.co · `boletin/article` (38-66) | La corrección que cambia cómo se dibuja un jaibaná: alucinógenos **secundarios**, enfermedad por **conflicto social**, identidad sexual mixta, **cambio de vestuario** para acceder a esencias distintas, y que **se transforma**, no «cree transformarse» | **Localizada y leída de segunda mano en el expediente de 2026-09-17; no descargada ni verificada aquí** |
| `robinson1969` | primary_or_early | J. W. L. Robinson y A. R. Bridgman, *Notas sobre unos chamíes aculturados*, Revista Colombiana de Antropología 14, pp. 171-176 | 1969 | revistas.icanh.gov.co · `rca/article/download/1743/1314` | Seis fotografías de chamíes del cañón del Calima y de cerca de Pereira; **la casa elevada con escalera de muescas**; y la p. 174 de la que la biblia tomó que las mujeres escogen **colores brillantes** y se pintan con lápices rojos o azules comprados o con una tintura vegetal amarilla llamada **azafrán** | **Escaneo sin capa de texto: `pdftotext` devuelve cero bytes** y el `.txt` del expediente pesa 6 bytes. **No pude verificar una sola línea de la p. 174.** La decisión de vestuario de la Variante B se apoya en parte en una página que nadie de este lote ha leído |
| `zuluaga1991` | academic | V. Zuluaga Gómez, *Dioses, demonios y brujos de la comunidad indígena Chamí* | 1991 | Colección VZG (Drive), enlazada desde el canon | La llave lingüística: `AINSURRAKA`, «la planta sin gusanos (**ain**: fuera, sin; **surra**: gusanos)». **Surranabe lleva la palabra gusano dentro**. Y la **jepá** o boa que produce remolinos desde el asiento de los ríos | La lista de plantas está **copiada íntegra de Cayón y Aristizábal (Cespedesia)** sin notas propias: hay que atribuírsela a ellos. El libro **no trae el relato de Surranabe** |
| `zuluaga1997` | academic | V. Zuluaga Gómez, *Mitos y leyendas de los Embera-chamí* | 1997 | repositorio.utp.edu.co · `handle/11059/4877` | El paralelo gusano-laguna recogido de **Jaime Wasoma**, vereda Similitó, 1991: gusanitos «muy bonitos, como pintados» que crecen y se vuelven jepás, y La Batea queda como una laguna | **Es otro relato**: no hay mellizos ni lanza, el gusano no muere. Risaralda, no occidente de Caldas. Comparación declarada, nunca relleno |
| `zuluaga1988` | territorial | V. Zuluaga Gómez, *Historia de la comunidad indígena Chamí* | 1988 | Colección VZG (Drive), enlazada desde el canon | Que estas lagunas tienen dirección postal: la vereda de **Jeguadas, cerca de La Batea**, «sitio en donde según una leyenda existió una laguna y vivía una gran culebra llamada Jepa» | Una línea incidental dentro de un libro de archivo y arqueología |
| `ferrari2023` | comparison | S. Ferrari, *Jinu Potó, ¿mito o historia?* | 2023 | descargado en el expediente de 2026-09-17 | El nombre **Jinu Potó** con que la biblia titula la ficha del hijo de la nutria | **Sus narraciones centrales son Dóbida, no chamí.** En Río Frío el personaje no tiene nombre |
| `cardona2013` | comparison | A. M. Cardona y J. M. Guerra Gutiérrez, *Mitología Embera. Principales mitos, características y funciones*, IIAP | 2013 | bioetnia.iiap.org.co · `bioetnia/article/view/130` | La **Jepá de la laguna de Boroboro** y el árbol **jenené** de cuya caída «brotó el mar, los ríos, ciénagas, lagunas»: confirma que criatura devoradora y cuerpo de agua son dos estados de lo mismo | Campo en el **golfo de Tribugá, Nuquí**: emberá del Chocó, **no chamí** |
| `rochereau` | comparison | H. Rochereau, *Nociones sobre las creencias, usos y costumbres de los Catíos del Occidente de Antioquia*, JSA XXV, pp. 71-103 | — | citado dentro de `chaves1945`, pp. 146 y 156 | **Geru-Poto-Uarra** y las tierras de **Tutruica**: planas, sembradas sólo de chontaduros, piedras azules de amolar; los Aribamia; los Bibidi gomia | **Es katío.** Llega sólo por cita dentro del boletín. **De aquí salió el mundo de abajo de la biblia** (§1.2, §14.1) |
| `wassen1935` | comparison | H. Wassén (recogidos por E. Nordenskiöld), *Cuentos de los Indios Chocós*, JSA XXV | — | citado dentro de `chaves1945`, pp. 142 y 150 | Chiapérera, el mundo de abajo al que se baja por el agua; «La Esposa de la Luna»; los Aripadá | Chocó de Panamá, 1927. Comparación de Chaves, no fuente chamí |
| `procuraduria-chami` | institutional | Procuraduría, *Caracterización del pueblo Emberá Chamí* | — | descargado en el expediente de 2026-09-17 | El territorio: Risaralda sobre todo, luego Antioquia, Caldas, Quindío, Valle, Chocó | Síntesis institucional contemporánea, sin tradición oral propia |
| `mininterior-diagnostico` | institutional | MinInterior, *Diagnóstico unificado Chamí, Katío, Dóbida y Eperara Siapidara* | — | descargado en el expediente de 2026-09-17 | Que los cuatro comparten lengua, tradición oral, jaibanismo y organización social, separados por los contextos naturales en que se refugiaron | Agrega los cuatro pueblos: es exactamente la fuente que facilita el préstamo si se lee sin cuidado |
| `silvacelis1945` | **contaminante** | E. Silva Celis, *Investigaciones arqueológicas en Sogamoso (Continuación)*, sección «Apreciaciones generales sobre la civilización chibcha», mismo boletín, pp. 93-132 | 1945 | el mismo PDF de `chaves1945`, **pp. 120-121** | **Nada. Se cita para no citarlo** (§12.1) | **Es muisca.** Está en el mismo fichero, trece páginas antes de Chaves |

**Fuentes localizadas y no consultadas**, que siguen siendo las que más valdrían: **Vasco Uribe y
Clemente Nengarabe, *Chamí* (1978)** —Nengarabe es coautor emberá y es lo más cercano a una voz del
pueblo en toda la bibliografía—; la **Oraliteca de Risaralda (2025)**, *Jepá*, narrada por **Jhon
Jairo Siágama**; **KienyKe 2015**, el origen del universo narrado por **Alicia Guasorna, Noralba
Siagama y Delfina Wazorna**; **Bueno Rodríguez 1988**, del que dependen las dos páginas de Caldas; y
**el estudio de los 180 objetos etnográficos** que Chaves recogió en 1945 y anunció, que sería la
fuente material exacta de este corpus y **no está localizado**.

---

## 10 · Matriz de evidencia

Se conserva la matriz del expediente de 2026-09-17 (`docs/chami-investigacion-2026-09-17/01-matriz-de-evidencia.md`,
en `main`) y **se enmienda en once renglones**. Lo que sigue es el resumen y las decisiones que
cambian una lámina.

**`documented_core` · `public`** — Karagabí como héroe cultural del Chocó; Hímo dueña de la candela
y vuelta hormiga chiquita; Horchíbarí caníbal **humanoide** que come brea y queda en brea; la
ballena con ríos y gente dentro y corazón de ahuyama; `nusi urú` con boca de flor de granadilla y
aletas de hoja de palma real; `unangaramia` como mata de las especies; `tíumía` armado con lanza;
los híno-pota uára criados en la pantorrilla y muertos de picadura de hormiga; el hijo del oso con
pelo de la cintura abajo; la mujer embijada saliendo de la tierra; los indios **muy bajitos** del
relato 2; los aramúko dohurá que comen jugo y no defecan; el árbol cavado con un dedo afuera y el
temblor; la escalera de guaduas al camino de la luna y el pájaro carpintero que la corta; el jenené
cuya raíz se vuelve el mar y sus ramas mayores el **Cauca y el Magdalena**; las ocho arditas con
narigueras **monsimá** que se revientan; las piedras rotas dentro de la casa; la harina de maíz
chiquito con agua; los asientos de balso repartidos casa por casa contra la tempestad; el muñeco de
balso; el carrizo que llama a la ballena; el chinchorro-trampa y el asientico de Dumío; la maza
grande de Horchíbarí; el talego rojo y el azul; el tambor y la chicha; el hacha, el serrucho, el
machete y el cuchillo; el disfraz de miel y hojas; la cama de bejucos en árbol alto; el hueco bajo
la casa con ruidos; el pueblo de **sesenta casas**; la roza y el maíz chiquito; el charco como
puerta; la luna llena; el cuerpo que desaparece al tercer día.

**`documented_core` · `contextual`** — que la **pinta de jagua identifica al grupo** y que por eso
el disfraz funciona; que **chaquira blanca, majagua blanca, andea y pinta de jagua son los cuatro
rasgos erubidá** y ninguno siebidá (**enmienda**); que la mujer embijada no es una chamí humana y no
autoriza embijar a las demás figuras; que en 1945 los chamí de Corozal ya vestían indumentaria
europea; que el «tigre» es jaguar americano; que los catorce relatos son de Corozal y no de
Risaralda.

**`documented_core` · `consult_required`** — el jaibaná en trabajo, su vestuario, su transformación
y la chicha cantada; la jemenede y el chokó encerrado con la niña; el banco del jaibaná que es una
jepá enrollada.

**`documented_core` · `do_not_visualize`** — el corte de las nalgas; **la sangre menstrual del
relato 2** (**enmienda: hoy no está declarada de ninguna manera**); la niña dentro del encierro; el
canal de la bodoquera visto por una mujer; la rana kokoi y su veneno dentro de la casa; el anuncio
de la cacería; sembrar abriendo la tierra; **las 22 fichas antropométricas de 62 datos** que Chaves
levantó en ese mismo grupo.

**`variant`** — **el guatín**: guagua/paca con manchas (nota de Reichel) frente a ñeque (uso
corriente de la palabra que el narrador usó). **Enmienda: se reabre; la biblia lo cerró.** — **La
operación a los hombres sin ano**: en Chaves II **funciona** y el hombre queda de médico; en Reichel
13 y en Rochereau **los mata**. Hay que declarar las dos. — **Los tres mundos frente a los ocho
mundos**: la página `el-universo` publica **tres**; la fuente de los ocho es KienyKe 2015, **sin
consultar**. — **Las dos explicaciones del temblor**: el dedo del hijo de Karagabí (chamí) y Awena
hundiéndose (katío): **no se fusionan**. — Las grafías Héntserá / jentserá, Horchíbarí / Horchibarí,
aramúko dohurá / aremuko dojura, Surranabe / surranabe.

**`academic_hypothesis`** — que **Héntserá sea la hormiga conga** (**enmienda: estaba como
`documented_core`**); que los mellizos de Surranabe sean jaibanás (glosa de Vasco entre corchetes);
la relación de los híno-pota uára con la **deformación artificial de pantorrillas karíb** (nota 38
de Reichel); que los chamí hablen «un dialecto karib» (Chaves 1945: **no se sostiene**, emberá bedea
es familia chocó); el papel fundacional de los alucinógenos en el chamanismo (Reichel, refutado por
Rubiano).

**`contemporary_memory` · `contextual`** — el **okama** de bandas concéntricas y geometría
escalonada sobre el vestido; el **repertorio facial** de hoy —líneas finas en el pómulo, marca junto
al ojo, línea vertical desde el labio inferior, motivo escalonado en la barbilla—; la **jagua
corporal** de antebrazos y manos en negro macizo; el telar de tabla con un clavo sobre las rodillas;
los dos registros del vestido, diario y de fiesta. **Todo esto documenta cómo se pinta y se adorna
HOY.** Ponerlo sobre un personaje de los relatos es anacronismo, y está `do_not_visualize` en la
propia matriz de la biblia.

**`editorial_interpretation`** — el aspecto de Karagabí, de su hijo, de su mujer, del primer hombre,
de Dumío, de Kokoró, de Héntserá, de Horchíbarí, de Surranabe y de los cuatro mellizos; el corte y el
color de cualquier prenda; las fichas de tipo; el orden cosmogónico propuesto para los catorce.

**`uncertain`** — qué es **`andea`**, palabra sin glosa en el impreso; la especie del **oso** (sin
nota de ninguno de los dos recopiladores); la del **puerco de agua**, la **nutria**, la **lorita**,
la **avispa grande** y el **pájaro** que el oso trae vivo; la botánica del **jenené**; la forma de la
**maza**; y **qué son Dumío y Kokoró**, de los que el archivo dice tres palabras: «un ser mítico».

**Enmiendas de especie, comprobables.** Reichel glosa **chontaduro** como *Socratea durissima*
(nota 14): es la palma zancona, **no** el chontaduro, que es *Bactris gasipaes*. Y escribe
*«Coelogynis paca»* (nota 2), grafía errada de *Coelogenys*, hoy *Cuniculus*. **Ninguna de las dos
identificaciones latinas puede copiarse a una ficha.**

---

## 11 · Revisión cultural — `documented_exception`

**Ninguna persona emberá chamí ha revisado este dossier ni las 118 fichas que audita.** La
excepción documentada se redactó y el editor la aprobó el 17 de septiembre de 2026; no es
`approved`, y la diferencia se declara en cada entrega.

**Por qué no se obtuvo.** No existe a la fecha un canal establecido con autoridades emberá chamí
para este proyecto y el corpus se trabajó con fuentes publicadas. **Pero la excepción pesa más
aquí que en otras comunidades del lote, por tres razones concretas.** Primera: **el pueblo es
grande, organizado y localizable** —resguardos de Mistrató, Pueblo Rico, Guática y Marsella en
Risaralda; **Karmata Rúa** (Cristianía) y Jardín en Antioquia; los cabildos mayores; el **Plan de
Salvaguarda** emberá—, y hay **personas nombradas y publicadas** con quienes ya habló otra
etnografía: **Rosa Elvira**, **Clemente Nengarabe Siágama** (coautor de un libro), **Jhon Jairo
Siágama**, **Alicia Guasorna**, **Noralba Siagama**, **Delfina Wazorna**, **Jaime Wasoma**. Segunda:
lo más sensible del expediente —el **okama**, el diseño de **jagua**, la **cestería**— es **el
sustento** de artesanas concretas cuyas piezas aparecen fotografiadas y **expuestas para la venta**.
Tercera: **el jaibanismo está vivo**, y Rubiano advierte que tratarlo como símbolo lo falsea. **La
excepción no se justifica por imposibilidad sino por no haberse intentado.**

**Límites de alcance.**

- Autoriza material únicamente para las **118 fichas** del inventario del 17 de septiembre de 2026
  sobre las **22 páginas** del snapshot `5e1d6d4e3ea43ab4…`.
- **No autoriza las veintiuna fichas que el §14.1 declara no sostenidas** hasta que se corrijan.
- **No autoriza el okama ni el diseño facial sobre ningún personaje de los relatos**, y por tanto no
  autoriza las cuatro láminas de la Variante C: es material contemporáneo y la propia matriz lo
  tiene `do_not_visualize`.
- No autoriza ninguna imagen del jaibaná en trabajo, de su vestuario, de su transformación, de la
  chicha cantada, de la niña dentro del encierro, del corte de las nalgas, ni **de la escena de la
  sangre menstrual del relato 2**.
- No autoriza tratar como resuelta la especie del **guatín**, ni cerrar **Dumío** y **Kokoró** como
  maestros aprobados.
- No autoriza extender nada de esto a katío, dóbida, eperara siapidara ni wounaan, **ni traer nada
  de ellos aquí**.

**Salvaguardas** (cinco; el mínimo es dos):

1. **Cada ficha declara su estrato y su región.** No basta con declarar la fuente: una ficha que se
   apoya en Vasco dice «Risaralda, siglo XXI», y una que se apoya en Reichel dice «Corozal 1945,
   narrador desconocido». Hoy la biblia declara fuente y nivel de evidencia pero **no región ni
   estrato**, y por eso el tambo de Risaralda y el mundo de abajo katío entraron sin resistencia.
2. **El lenguaje sí, el ejemplar no**, por escrito y en los dos sentidos: ningún patrón identificable
   de jagua, okama, balaca o cestería se copia de una pieza ni de un rostro reales; y ninguna lámina
   inventa un diseño «bonito», porque el diseño **es filiación**.
3. **Deslinde emberá en las dos direcciones.** Nada katío, dóbida, eperara ni wounaan entra a una
   lámina chamí, y nada chamí sale hacia ellos. El dossier dóbida ya cerró esa puerta desde el otro
   lado y conviene que ésta la cierre desde éste.
4. **Nada muisca entra por el fichero compartido** (§12.1). La regla operativa es que ninguna cita
   del boletín de 1945 se hace sin acotar el rango de páginas 133-159.
5. **Todo es retirable y rastreable.** Si una autoridad chamí objeta una pieza, se retira, y el
   expediente permite decir de dónde salió cada decisión.

---

## 12 · Carencias documentales

1. **La trampa del boletín compartido, comprobada y mal citada hasta ahora.** El fichero
   `chaves-1945-…txt` **no es el artículo: es el boletín entero**, 4.256 líneas, y Chaves ocupa sólo
   las líneas 1.561-2.577 (pp. 133-159). Trece páginas antes, en **pp. 120-121**, se lee: *«Era
   también común el uso de la pintura corporal con **jagua** (sustancia vegetal negra) y con **bija**
   (sustancia vegetal roja); ésta, intensa, **como señal de luto**»*, y en la página siguiente,
   propulsores, **mazas de piedra enmangadas en madera**, **macanas planas de doble filo**, hondas,
   **banquitos de arcilla para uso exclusivo de los jefes**, múcuras decoradas en rojo, anaranjado y
   blanco, y **vasijas de arcilla en forma de hombres, con un agujero en la cabeza o en el vientre,
   para depositar ofrendas**. Todo eso es **muisca**. Tres cosas que corregir: (a) el expediente
   anterior lo atribuye a *«Los Chibcha, de Félix Mejía Arango»* y **ese nombre no aparece en el
   fichero**: es una sección de *Investigaciones arqueológicas en Sogamoso*, de **Eliécer Silva
   Celis**; (b) no está «cuarenta páginas antes» sino **trece**; y (c) **la colisión peligrosa no es
   la que se nombró**. La glosa jagua=negra / bija=roja es además cierta por botánica, así que
   importarla no daña; lo que sí daña es que **la vasija antropomorfa con agujero en el vientre para
   ofrendas es muisca y el chokó chamí es una vasija antropomorfa con barriguita**, y que el
   **banquito de arcilla de jefe** colisiona con el asientico de Dumío y con el banco del jaibaná.
   **Ésas son las dos que hay que vigilar, y nadie las había nombrado.**
2. **Robinson & Bridgman 1969 no se pudo leer.** El escaneo no tiene capa de texto —`pdftotext`
   devuelve **cero bytes** y el `.txt` del expediente pesa **6 bytes**— y sus fotografías no estaban
   en este lote. **La p. 174, de la que sale que las mujeres escogen colores brillantes y se pintan
   con lápices rojos o azules o con «azafrán»**, sostiene parte de la Variante B del vestuario y
   **no ha sido verificada por nadie contra el impreso**.
3. **El tercer primario no estaba en el lote.** *La manufactura de cerámica entre los Chamí* (1945)
   es el estudio de cultura material de la misma expedición y es la única fuente de época para el
   **chokó**, la **pipa de cuatro boquillas** y la frase de que ya vestían indumentaria europea.
   Todo lo que este dossier le atribuye llega citado por el expediente anterior. **Dos fichas de la
   biblia descansan enteras sobre una fuente que este lote no pudo abrir.**
4. **Y el estudio que sería exacto no existe públicamente.** Chaves recogió **180 objetos
   etnográficos** en Corozal en 1945 y anunció un estudio de cultura material sobre ellos. **No está
   localizado.** Sería la única descripción material del sitio, el año y la gente de los catorce
   relatos, y su ausencia es la razón de fondo de que la capa 3 se haya tenido que armar con
   Risaralda.
5. **Ninguna transcripción en emberá bedea, de nada.** Los diecisiete relatos se dictaron en
   **castellano**, a veces «muy defectuoso», y se fijaron por escrito en castellano. Las únicas
   palabras en lengua que este dossier maneja son `bitrú`, `miesú`, `neerá`, `kuyubra`, `beké`,
   `inká`, `kenubise`, `eró`, `monsimá`, `jenené`, `chokó`, `jepá`, `jai`, `jaibaná`,
   `jemenede`, `aramúko dohurá`, `híno-pota uára`, `nusi urú`, `tíumía`, `andea`, `chichaké`,
   `mofódda`, `pakuru-de usi-má`, `itua do-de uái`, y de varias **no hay segunda atestiguación**. Dos
   frases del relato 8 y una del 10 están impresas **sin traducir**.
6. **No hay narradora mujer, y hay una razón registrada.** En 1945 **sólo los hombres hablaban
   castellano** en ese grupo. Cuatro de los diecisiete relatos giran sobre una mujer —la mujer embijada, la
   mujer raptada, la mujer de Karagabí y Arrumía— y en otros dos una mujer decide el desenlace: la
   hija de Dumío y la vieja Erubidá que descubre el disfraz. **De ninguna tenemos la versión de una narradora.** Es la carencia que este
   dossier no puede cerrar y la que más cambia lo que significan sus láminas.
7. **No hay un solo color de ropa documentado para el estrato A.** «Blanco» aparece cero veces en
   Reichel; el blanco de la biblia viene de Chaves y es de un pueblo (§1.1). Cualquier color de
   prenda en cualquier lámina es editorial y así debe quedar rotulado.
8. **Dos relatos primarios chamí siguen sin publicarse** —Arrumía y Kurijía— y sus entidades están
   entrando a la biblia por la puerta de atrás: la **hormiga arriera** de una ficha sale de Arrumía,
   y el guatín-como-conejo-de-monte sale de la glosa de Kurijía. **O se publican y entran, o no
   entran.**
9. **La ONIC y las fuentes comunitarias quedaron fuera.** Según la bitácora del repo su sitio se
   rehízo y los perfiles de pueblo redirigen a la portada: tratar los enlaces como caídos. La
   **Oraliteca de Risaralda** y **KienyKe 2015** —las dos únicas fuentes con narradoras chamí
   nombradas— siguen sin consultar, y la segunda es la única base de «los ocho mundos», que ya tiene
   una ficha empezada (§14.2).
10. **El inventario nunca se rehizo después de su propia corrección de método.** El editor detectó
    **dos veces** que faltaban criaturas —primero Surranabe, después la culebra de las siete
    cabezas—; se escribió la regla correcta («el barrido de entidades corre sobre **todas** las
    páginas publicadas»); se encontraron **doce entidades nuevas**; y el inventario, el `CIERRE.md`
    y el plan de tandas **siguen diciendo 118 y «no falta ninguna ficha»**.

---

## 13 · Borrador de sistema visual

**La técnica abre y cierra, y manda sobre todo lo demás.** Papel recortado fotografiado como maqueta
tridimensional inmersiva, a sangre hasta los cuatro límites, sin borde, sin cartón soporte, sin mesa
y sin marco. Va primero, bajo un encabezado que dice que gobierna lo que venga después, y vuelve al
final. **Pocas piezas, grandes y planas**: un cuerpo se arma con dos o tres formas; una cabeza con
tres o cuatro; el pelo con dos o tres; una mano con una. Canto de tijera visible, sombra nítida y
corta, color plano y mate dentro de cada pieza. **El cuerpo y la cara se nombran en cláusulas
distintas**, porque se arreglan en pasos distintos y el modelo esculpe por defecto: el rostro es
**óvalo plano de un solo tono, sin sombra ni luz dentro**, con pelo, cejas, ojos y boca como recortes
aparte y la nariz insinuada por el borde. **Para pelaje, pluma y escama, la regla inversa a la
intuitiva**: pocas piezas planas grandes con el borde recortado en dientes, nunca pelo por pelo.

**Cuatro reglas de paleta, cada una con una frase del archivo detrás.**

1. **El día manda.** Sol, día, mañana, mediodía y amanecer suman 50 menciones; frío, calor, sed y
   seco suman cero. Luz de mediodía o de tarde, abierta, sin penumbra de ambiente. **Cada lámina
   declara su hora**, porque el archivo casi siempre la dice.
2. **El verde es la capa más delgada.** El corpus dice «verde» **cero veces** y lluvia, nube o
   niebla **una**. La base del suelo se construye con pardos de madera —balso, guadua, chonta—,
   ocres de tierra y grises de agua de río; el verde va encima y es lo último, porque el monte es el
   borde adonde se sale y no la atmósfera que envuelve.
3. **Rojo y azul sólo son tres cosas.** El **talego rojo** del Sol, el **talego azul** de la Luna y
   **el río rojo de sangre** de la ballena. No hay más rojo ni más azul en los catorce relatos, y
   ningún otro objeto los usa.
4. **El negro es materia, nunca sombra.** La **brea** de Horchíbarí —que es su comida, su cuerpo y
   lo único que queda de él— y la **jagua** de los Erubidá. El blanco, cuando aparezca, se declara
   como lo que es: prestado de Chaves y perteneciente a un solo pueblo.

**Ocho prohibiciones.**

1. Selva esmeralda, niebla, lluvia o penumbra como atmósfera general; y oscurecer una lámina que no
   sea la del relato 10.
2. Okama, diseño facial fotografiado, raso, encaje, volantes o chaquira de anilina sobre un
   personaje de los relatos: son del siglo XXI.
3. Cualquier patrón identificable de jagua, okama, balaca o cestería copiado de una pieza o de un
   rostro reales; y cualquier diseño de jagua inventado, porque el diseño es filiación.
4. Tocado de plumas, corona, orejeras de disco, nariguera de aro y pectoral de plata sobre una
   persona. La única nariguera documentada la llevan ocho ardillas.
5. Nada muisca: pintura corporal «como señal de luto», propulsor, maza de piedra enmangada, macana
   plana de doble filo, honda, banquito de arcilla de jefe, múcura decorada en rojo-naranja-blanco y
   vasija antropomorfa de ofrendas.
6. Nada katío, dóbida, eperara ni wounaan: Awena y el temblor, Betenabe, Bibidigomia y el árbol
   hueco con balcón, la lechuza en lugar de la lorita, Naribamiá, el uángano, el tigre de agua, y el
   mundo de abajo plano de piedras azules de amolar.
7. El jaibaná trabajando, su vestuario, su transformación y la chicha cantada; la niña dentro del
   encierro; el corte de las nalgas; la escena de la sangre menstrual; el canal de la bodoquera
   visto por una mujer; la rana kokoi dentro de la casa; el anuncio de la cacería; y sembrar
   abriendo la tierra con palo o azadón.
8. Volumen esculpido, papel maché, fieltro, relieve modelado, degradado dentro de una pieza, pelaje
   como textura continua y miles de piezas diminutas.

---

## 14 · Auditoría de la biblia existente

Ésta es la mitad que nadie puede hacer después. La biblia se cerró el 17 de septiembre de 2026 con
**118 fichas en cuatro capas y diez tandas**, `documented_exception` aprobada por el editor y
**sin revisión cultural**.

**De las 118, veintiuna no quedan sostenidas por este dossier.** Las noventa y siete restantes sí:
sus decisiones de identidad son correctas y varias son difíciles. El problema no es que la biblia
haya inventado —casi nunca lo hace y cuando lo hace lo dice—, es que **repartió mal lo que sí tenía,
cerró como documentado lo que era hipótesis, y trajo de Risaralda, del Chocó y del occidente de
Antioquia lo que Corozal no le daba, sin declararlo en la ficha**.

### 14.1 · Las veintiuna que no quedan sostenidas

| ficha | capa | qué afirma | qué dice la investigación |
|---|---|---|---|
| **Siebidá, la gente de la montaña** | 1 | «majagua blanca y **el andea** en la cabeza» como su marca propia | **Ése es el disfraz erubidá.** Chaves: *«Los Siebidá, que se habían **disfrazado de Erubidá**, con majagua blanca, andea en la cabeza…»*. El archivo **no describe indumentaria siebidá en ninguna parte**, y no la describe porque el relato depende de que el disfraz funcione. Además **`andea` no está glosado**: dibujarlo es inventarle forma a una palabra sin traducción |
| **el jefe siebidá** | 1 | el mismo atuendo, sobre la figura nombrada | Hereda el error anterior. Y pierde lo único propio que la fuente le da: **se llama Sikóna**, el único nombre de persona humana en los catorce relatos, y la ficha no lo lleva |
| **Héntserá** | 1 | «dueño del agua; la raíz *je-* lo identifica como **hormiga conga**», con «Héntserá con figura humana» marcado `do_not_visualize` | Reichel anota, entero: **«Un ser mítico»**. La conga es una etimología de Vasco, de otra región y cuarenta años después: es `academic_hypothesis` o `variant`. La biblia **obligó la forma que la fuente no da y prohibió la que la fuente deja abierta** |
| **Dumío** | 1 | ficha maestra de un personaje con casa, hija, trampa, bodoquera y asientico | La fuente dice de él exactamente tres palabras: *«Un ser mítico»*. La matriz lo tiene `uncertain` **y aun así se cerró como maestro**. Lo que sí está documentado y no está en la ficha es **cómo enseña**: pitas torcidas disparadas a una cuadra, y **dos baños de pita** antes de acertar |
| **Kokoró** | 1 | ficha maestra | Igual: *«Un ser mítico»*. Lo único que hace es enseñar el camino y decir **«no cojas la mano de tu madre»** — y esa prohibición, que es el final del relato, no está en ninguna parte del inventario |
| **los aramúko dohurá** | 1 | «comen jugo o vapor, sin ano», sirviendo a los relatos **2 y 13** | Son dos pueblos distintos en dos relatos distintos. Los del 13 se llaman aramúko dohurá y **comen jugo**; los del 2 no tienen nombre, **comen humo** y son **«indios muy bajitos»**. Al fundirlos, la biblia perdió **el único dato de estatura de todo el corpus**. Y «vapor» no es de ninguno de los dos: es de Chaves II y de Rochereau |
| **la mujer de Karagabí** | 1 | lleva **okama**, por la Variante C | El okama documentado es **contemporáneo**. La propia matriz de la biblia dice: «poner okama o diseño facial contemporáneos a un personaje de los catorce relatos · `editorial_interpretation` · **`do_not_visualize`** · anacronismo». Lo que el relato dice es que **«ella se arregló bien»**: el arreglo está documentado, **la pieza no** |
| **Karagabí rejuvenecido** | 1 | lleva **okama** | Igual. El relato dice que **«se arregló bien bonito»** y que **enjoveneció**. La firma de la lámina —cabeza y manos de papel crema nuevo sobre cuerpo de papel viejo, con la juntura visible en el cuello— es excelente y **se sostiene sola**: el okama le sobra |
| **mujer chamí joven (tipo)** | 1 | lleva **okama** | Igual, y agravado: es una ficha de tipo, es decir, la que más se va a repetir en las escenas |
| **anciano y anciana chamí (tipo)** | 1 | la anciana lleva **okama** | Igual |
| **guatín** | 2 | «**RESUELTA**: guagua/paca con cuatro hileras de manchas, siguiendo la glosa de los dos recopiladores» | La glosa latina es de **un** recopilador y está en una **nota al pie de 1953**; el otro dice «conejo de monte», que no desambigua. El narrador dijo **guatín**, que en Colombia es normalmente el ñeque. El propio LEEME de los primarios manda no meter las notas al pie en el Relato. **Es `variant`, y cerrarla bajó la matriz de cuatro `consult_required` a tres sobre una base que no aguanta** |
| **tatabro** | 2 | «*Dycotiles torquatus*» | **Es el mismo animal que el zahíno.** Reichel pone el latín sobre *zahino* y Chaves sobre *tatabro*: dos nombres regionales del pecarí de collar |
| **zahíno** | 2 | ficha propia, más «el colibrí que se vuelve zahíno» | Ídem. **Dos láminas de animal para una especie**, y la tercera depende de ellas |
| **otro ser acuático** | 2 | «**sin nombre**; la gente lo tenía por dios» | **Sí tiene nombre**: `nusi urú`, glosado «tiburón». Y es **la única criatura descrita del corpus**: boca *«muy bonita, como una flor de granadilla»*, aletas *«como hoja de palma real y muy bonitas»*. La ficha descartó los dos únicos símiles visuales que el archivo ofrece |
| **hormiga arriera / conga** | 2 | «mata a la primera humanidad; es la gente de Arrumía», sirviendo a los relatos **4 y 12** | En el relato 12 es *«una hormiga»*, sin especie; en el 4 son *«muchas hormigas»*, sin especie. **Arriera** viene de **Arrumía (Chaves II), que no está publicado**; **conga** viene de la etimología de Héntserá. Una ficha con **dos especies incompatibles**, ninguna de ellas atestiguada en los dos relatos que sirve |
| **arco y flechas** | 3 | flechas «pardas y grises de ave de monte» | Acertó al quitar las plumas rojas, azules y amarillas que el modelo inventó; pero **la fuente no describe emplumado ninguno**, de modo que el pardo y el gris son otra invención, más discreta. Y hay algo peor: **en el relato 3 el único que lleva arco y flechas es el perseguidor que la biblia excluyó**. La ficha existe sin portador |
| **dardos y carcaj** | 3 | chonta, cono de lana de balso, medida del codo a la muñeca, carcaj de guadua, dardos punta arriba | **Todo es Vasco, Risaralda, siglo XXI.** El corpus de Corozal dispara **pitas torcidas** con la bodoquera y sólo después menciona «dos flechas». La ficha no declara región ni estrato |
| **chokó (cántaro-ancestro)** | 3 | filed en **capa 3 · atrezo**, categoría **`objeto`** | La revisión cultural de la propia biblia dice, con todas las letras: *«**el chokó no es atrezo**. Es un ancestro con forma humana. Va en la capa de personas, no en la de objetos»*. **El inventario no la obedeció.** Y es la ficha con más riesgo de contaminación muisca del expediente: la vasija antropomorfa con agujero en el vientre para ofrendas está en el mismo PDF, trece páginas antes, y es chibcha (§12.1) |
| **pipa colectiva de cuatro boquillas** | 3 | «ceremonial; Reichel 1945» | Viene del tercer primario, **que este lote no pudo abrir**. No aparece en ninguna de las 22 páginas: no tiene escena, no tiene portador y no tiene relato. Es un objeto **ceremonial** puesto en una biblia cuya excepción cultural deja fuera lo ceremonial |
| **el mundo de abajo** | 4 | «plano, sólo chontaduro, piedras azules» | **Los tres rasgos son de Rochereau describiendo a los catíos**, citados dentro de una nota comparativa de Chaves. En los catorce relatos el mundo de abajo tiene indios muy bajitos que comen humo y aramúko dohurá que comen jugo, y **nada más**. La única piedra azul chamí está en Arrumía, es *«bien pintadita de azul»*, **está en un camino de este mundo** y sirve para borrarlo |
| **tambo chamí** | 4 | «casa sobre pilotes; **escalera de tronco con muescas**», más corredor, zarzo y cuartico | Los pilotes sí: es la nota 27 de Reichel. Todo lo demás es **Vasco en Risaralda** y la escalera de muescas viene además del conjunto **Chocó 1927**, que la propia matriz prohíbe presentar como la casa chamí. No es un error dibujarlo: **es un error que la ficha no diga que es de otra región y otro siglo** |

### 14.2 · Entidades sin ninguna decisión declarada

La regla del kit es que **nada detectado puede desaparecer en silencio**: `required`, `embedded` o
`excluded`, y siempre con razón. El inventario declara 147 entidades con decisión. **Faltan al menos
treinta y seis**, en tres bloques.

**Bloque 1 · dentro de los catorce relatos, es decir dentro del propio denominador declarado.**

- **`tíumía`** — animal mítico armado con lanza que come gente, nota 16. Mata a uno de los dos
  hermanos y es el único monstruo del relato 3 además de Horchíbarí.
- **La sangre menstrual** (relato 2, tres pasajes). No hay ficha, ni embebido, ni
  `do_not_visualize`. **Es el motivo que explica el personaje entero.**
- **Las mantas** (relato 3) y **la ropita robada por el oso** (relato 5): **las dos únicas menciones
  de prenda en los catorce relatos**, en una biblia con 36 fichas de personas vestidas.
- **El carrizo** con que se llama a la ballena (relato 2): el único instrumento del corpus además
  del tambor, y con función narrativa.
- **La red de Hímo** (relato 9), que casi se rompe con el pescado grande: una red de pesca distinta
  del chinchorro-trampa del relato 3, que sí tiene ficha.
- **La trampa que dispara una flecha** y **las riendas de bejuco** (relato 1).
- **La totuma** (relato 3, dos veces), **el fogón** (relato 3) y **el zarzo con la olla grande**
  donde Dumío esconde al hombre.
- **El baño de pita**, el rito de aprendizaje de la bodoquera (relato 3).
- **Sikóna**, el jefe siebidá por su nombre (relato 6).
- **El Cauca y el Magdalena** (relato 11): dos ríos reales que el relato nombra.
- **Las sesenta casas** del pueblo erubidá (relato 6): la única escala de poblado del corpus.

**Bloque 2 · Surranabe y lo que vino con él.** `el-gusano-gigante` quedó fuera del denominador por
la inversión de atribución del §0. Con él quedaron fuera **Surranabe**, **los cuatro mellizos** que
«eran como gente de médico» y **la laguna** que se formó donde murió. Es material **primario, chamí
y con narrador conocido**: de todo el expediente, lo último que debería faltar.

**Bloque 3 · las otras ocho páginas publicadas.** La corrección de método del 17 de septiembre lo
dijo bien —*«el barrido de entidades corre sobre **todas** las páginas publicadas y sobre todos los
dossiers, sin importar el tipo de página; el tipo de página decide **trípticos**, nunca el
inventario»*— y encontró doce entidades. **El inventario no se rehizo.** Siguen sin decisión, entre
otras: **Dachiakore** / **Dachisesé**, **Tutriaka**, **Carabí** la luna, **Ba** el trueno, los
**dojura**, los **jais** y **Jinopotabar** (`el-universo`); **Chokorró**, **Surrú** y **Dojura**
(`jinopotabar`); la **Jepá de Jeguada**, **Jebanía**, **Geté**, **Tatamá** y **La Batea**
(`el-origen-del-agua`); **Gentzerá**, **Karaví** y **Pocoró** (`el-origen-de-los-animales`); la
**culebra de siete cabezas**, **El Salado** y el **río Supía**; y los **espíritus terrestres,
aguales, airales y selváticos** de Lomaprieta.

**Y el denominador tampoco cuadra con lo producido.** El `CIERRE.md` afirma que «el recuento por
capa coincide exactamente con el inventario» y que «no falta ninguna ficha». No coincide: el
inventario tiene **cinco** entidades de tipo —«niño y niña chamí» y «anciano y anciana chamí» van
cada una en un solo renglón— y la tanda 01 produjo **seis** láminas de tipo, hombre, mujer, mujer
joven, niño, anciano y anciana. Seis láminas para cinco entidades quiere decir que, en algún punto
de la capa 1, **una entidad del inventario se quedó sin lámina**. La afirmación de coincidencia
exacta no se puede sostener sin un recuento lámina por lámina que hoy no existe en el expediente.

**Y una advertencia sobre cómo se está cerrando ese hueco.** El único índice de tanda que quedó en
el expediente, `<sp>/chami-biblia-v1/indice.json`, es una **tanda 17** fechada el mismo 17 de
septiembre, con dos fichas: **«La grieta de El Salado»** y **«Los ocho mundos»**. Las dos son
problemáticas y por razones distintas. La primera viene de una **mediación mestiza de Caldas sin
narrador acreditado** que explica una erosión local: convertirla en lámina maestra de la biblia
chamí le atribuye al pueblo emberá una etiología geológica regional. La segunda cuenta **ocho
mundos** cuando la página publicada `el-universo` cuenta **tres** —bajía, egoró, aremuko— y su única
fuente es **KienyKe 2015, que el propio expediente declara sin consultar**: es una `variant` cerrada
como maestra sobre una fuente no leída. Además el índice se contradice a sí mismo: se llama
`17-mundo-4` y declara `"capa": "1 · personas"`. **La regla del barrido es correcta; su aplicación a
páginas que no son chamí primarias necesita que la decisión por defecto sea `excluded` con razón, no
ficha.**

### 14.3 · El jaibaná sin ficha: la decisión se sostiene, su cumplimiento no

**La decisión es correcta y este dossier la sostiene.** El jaibaná en trabajo, su vestuario, su
transformación y la chicha cantada son `consult_required` y no se resuelven leyendo más: se
resuelven consultando. Rubiano lo dice de una manera que no admite atajo —para los emberá el
jaibaná **se transforma**, no «cree transformarse»—, de modo que una lámina que lo trate como
símbolo o como folclor lo falsea. Y hay un dato de Rubiano que hace la consulta todavía más
necesaria: **el jaibaná cambia de vestuario para acceder a esencias distintas**. El vestuario es el
instrumento, no el adorno. Inventarlo no sería un error de estilo: sería inventar su herramienta.

**Pero la exclusión es nominal, no real.** El corpus llama a este oficio **«brujo»**, y el brujo
está en tres sitios de la biblia:

- **`el vigilante disfrazado (brujo)`** tiene ficha propia y **está generada**. El relato 6 dice
  literalmente *«el hombre que se había salvado era un brujo»*, y en la versión de Chaves el
  resucitado por la yerba beké es *«hechura del brujo»*. Es el jaibaná del relato, dibujado.
- **`el jefe siebidá`** «sabe por sueño». La oniromancia es trabajo de jaibaná en toda la
  bibliografía.
- **Los cuatro mellizos de Surranabe** «eran como gente de médico» — y Vasco los glosa
  «[es decir, jaibanás]». No tienen ficha porque Surranabe quedó fuera (§14.2), no porque se
  decidiera excluirlos.

**Qué hacer con eso, sin deshacer nada.** La decisión correcta no es retirar la ficha del vigilante:
es **declararla por lo que es**. La ficha debe decir que el personaje es el **brujo del relato**,
que **no representa el oficio de jaibaná**, que no lleva ningún atributo de jaibanismo —ni banco
que sea jepá enrollada, ni bastón, ni chicha cantada, ni cambio de vestuario— y que **lo único que
la fuente le da es el disfraz erubidá y la lanza**. Escrita así, la exclusión del jaibaná se
cumple. Escrita como está, la biblia dice que no dibujó al jaibaná y dibujó al brujo.

### 14.4 · ¿Bastan las catorce primarias para las cuatro capas?

**No, y el modo en que no bastan es el que explica casi todo el §14.1.**

Los catorce relatos dan **un reparto completo y un mapa de escenas completo**, y no dan **ninguna
forma**. Capa por capa:

- **Capa 1 · personas (36).** Treinta y una de las 36 salen directamente de los relatos —veintitrés personajes
  y ocho colectivos— y eso está bien hecho. Pero el archivo describe **el cuerpo de tres figuras** —el
  hijo del oso, la mujer embijada y los indios muy bajitos— y **la ropa de ninguna**. Las dos únicas
  palabras de prenda del corpus (mantas, ropita robada) no tienen ficha. Las láminas de tipo no están en el relato en
  absoluto. **Todo el vestuario de la capa 1 viene de fuera**: de Chaves —y de
  un solo pueblo, mal repartido—, de fotografías del siglo XXI y de una página de 1969 que nadie ha
  podido leer. Es exactamente donde el corpus ya se equivocó una vez, y donde se volvió a equivocar.
- **Capa 2 · animales (24).** Como censo, alcanza: los 24 están nombrados en los relatos. Como taxonomía, no: **sólo cinco llevan identificación**, todas en notas al pie del
  recopilador, **dos de ellas erradas** (*Socratea* por chontaduro; *Coelogynis* por *Coelogenys*),
  **una duplicada** (tatabro = zahíno) y **una cerrada sin base** (guatín). El oso, la nutria, la
  lorita, la avispa y el puerco de agua no tienen especie en ninguna fuente.
- **Capa 3 · atrezo (34).** El corpus **nombra** objetos con generosidad y **no describe ninguno**:
  hacha, serrucho, machete, cuchillo, bodoquera, lanza, maza, asientico, asientos de balso, balsa,
  muñeco, red, chinchorro, talegos, tambor, chicha, escalera, cama de bejucos, carrizo, totuma,
  brea, harina. Ni una medida, ni un material de mango, ni una forma. **Dos fichas vienen de fuera
  de los relatos por completo** (chokó, pipa) y **dos se amueblaron con Risaralda** (dardos y
  carcaj, arco y flechas).
- **Capa 4 · mundo (24).** Los lugares están todos en el relato y las fichas los recogen bien. Pero
  **las dos que tenían que verse de una manera concreta se trajeron de otro pueblo o de otra
  región**: el mundo de abajo, de Rochereau sobre los catíos; el tambo, de Vasco y del Chocó de 1927.

**El veredicto.** Las catorce primarias **bastan para poblar las cuatro capas y no bastan para
dibujarlas**. Cuatro fuentes las completaron —los tres relatos de Nicolás Henao, la monografía de
cerámica de 1945, la etnografía de Vasco en Risaralda y las fotografías contemporáneas— y **sólo la
primera es la misma gente, el mismo sitio y el mismo año**. Ese es el orden de confianza que la
biblia tiene que escribir en cada ficha y hoy no escribe. Hecho eso, la mayoría de las veintiuna del
§14.1 dejan de ser errores y pasan a ser decisiones declaradas; las que no —la ropa de los Siebidá,
el mundo de abajo katío, el guatín, la duplicación del pecarí, el nombre de `nusi urú`, el okama—
hay que rehacerlas.

### 14.5 · Lo que la biblia hizo bien y conviene no perder

Para que la lista anterior no se lea como una enmienda a la totalidad. La biblia acertó en las siete
decisiones donde era más fácil equivocarse, y varias son mejores que la media del proyecto.

1. **Añadió la época `mitico_chami`** antes de generar, en vez de amputar el hacha con que Karagabí
   abre la palma. Es la decisión más importante de la producción.
2. **Corrigió las tres reglas del repo** que habrían metido eje cafetero, chaquira de pechera, jagua
   geométrica, páramo, frailejones y geometría muisca, y añadió «Cordillera Occidental».
3. **Mantuvo la lorita y no la lechuza.** La mujer de Karagabí se vuelve lorita en la versión chamí
   y lechuza en la katío; la biblia eligió bien, y ése es el deslinde más fino del expediente.
4. **Mantuvo a Horchíbarí humanoide** contra la tentación del reptil, y resolvió su ficha por la
   **brea**, que es lo que la fuente subraya.
5. **Excluyó «un hombre negro y enorme» con razón escrita.** La razón podría afinarse —la fuente le
   da dueño del animal, arco y derrota, no «seis palabras»— pero la decisión es la correcta y el
   riesgo que evita es real.
6. **Invirtió a tiempo la regla del pelaje** que en wayuu costó una tanda entera, y las 24 láminas
   de animales salieron a la primera.
7. **Resolvió ocho figuras míticas con una firma cada una y sin un solo resplandor** —el ruedo de la
   túnica de Karagabí que continúa en el tronco de la palma; la cabeza de papel nuevo sobre el
   cuerpo de papel viejo con la juntura visible en el cuello; las manos vacías que proyectan la
   sombra de un cuchillo; los diez dedos que ya son plumas—. Es el mejor trabajo plástico del
   proyecto y **ninguna de las siete correcciones de este dossier lo toca**.

Y el criterio que hay que conservar entero, porque las veintiuna correcciones del §14.1 son de la
misma familia: **buscar más, no dibujar menos.**

---

*Dossier cerrado el 19 de septiembre de 2026. No autoriza ninguna llamada de imagen: la compuerta de
generación es aparte y la aprueba el editor. Y no cierra la biblia: veintiuna de sus 118 fichas
siguen sin sostén, al menos treinta y seis entidades del canon no tienen decisión declarada, y el
único relato primario chamí con narrador conocido que el sitio publica —Surranabe, de Nicolás
Henao— quedó fuera del denominador por una atribución invertida.*

---

## 15 · Nota de verificación contra la primaria — el reparto de narradores de Chaves

Comprobado directamente en `chaves-1945-…txt`, p. 134, línea 1634. El propio
recopilador reparte sus **nueve cuentos entre dos narradores**, y eso decide
atribuciones que este expediente venía arrastrando mal en las dos direcciones:

> «Los nueve cuentos que a continuación transcribo, me fueron narrados, **los
> cuatro primeros, por Nicolás Henao, indio chamí** … Los cinco últimos los
> recogí de boca de **Rafael Bailarín, indio katío** … las palabras
> pronunciadas en idioma katío las tradujo al castellano.»

| # | cuento | narrador | pueblo |
|---|---|---|---|
| I | Erubidá y Siebidá | Nicolás Henao | **chamí** |
| II | Arrumía | Nicolás Henao | **chamí** |
| III | Surranabe (El Gusano Grande) | Nicolás Henao | **chamí** |
| IV | Kurijía (Conejo de monte) | Nicolás Henao | **chamí** |
| V | Cómo consiguieron los indios el maíz y el chontaduro | Rafael Bailarín | **katío** |
| VI | Awena | Rafael Bailarín | **katío** |
| VII | La mujer de Karagabí | Rafael Bailarín | **katío** |
| VIII | Bibidigomia | Rafael Bailarín | **katío** |
| IX | La india Pixaawina | Rafael Bailarín | **katío** |

**Tres consecuencias.**

1. **El denominador chamí son 18, no 17 ni 14**: los 14 de Reichel-Dolmatoff
   1953, de narrador desconocido, más **cuatro** de Chaves. El §0 de este
   dossier cuenta tres porque se le escapó `Erubidá y Siebidá`, que es
   justamente de donde sale el hallazgo del disfraz: **el relato que sostiene
   la corrección más importante del expediente estaba fuera de su propia
   cuenta.**
2. **`el-gusano-gigante` es chamí en la fuente**, narrado por Henao. La nota
   del expediente anterior que lo daba por «katío en la fuente» estaba
   invertida, y este dossier acierta al decirlo.
3. **Cinco de los nueve cuentos de Chaves son katío por narrador**, recogidos
   de un hombre katío que los oyó a su abuela antes de salir de su tierra y los
   tradujo del katío. No son primarias chamí y no deben entrar en ese
   denominador. Eso alcanza a **`la mujer de Karagabí`**, que la biblia tiene
   fichada y que este dossier ya listaba entre las no sostenidas: la razón es
   más dura de lo que decía — no es que le falte descripción, es que **su
   relato no es chamí**.

*Verificación hecha por la sesión coordinadora sobre el texto primario, no por
búsqueda. 2026-09-19.*
