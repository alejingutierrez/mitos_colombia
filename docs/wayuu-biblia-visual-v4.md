# Biblia visual Wayúu V4 · auditoría de la V3 y denominador nuevo

**Corte:** 17 de septiembre de 2026.
**Estado:** propuesto. Ni el inventario está congelado ni hay arte aprobado.
**Reemplaza a:** `wayuu-biblia-visual-v3.md` y `wayuu-biblia-visual-v3-inventario.md`.

Este documento hace tres cosas: demuestra por qué la biblia V3 quedó huérfana,
fija el denominador nuevo contra el canon vigente, y deja escrito lo que la
investigación del 17 de septiembre corrige de la doctrina anterior.

---

## 1 · Por qué la V3 no se puede parchar

La V3 se congeló contra un snapshot de `editorial_myths` con
`max_source_updated_at: 2026-07-29`. El canon narrable de los 27 mitos se
reescribió íntegro el **2026-09-17 entre las 13:17 y las 13:19 UTC**, sobre
fuentes primarias, en la Fase A de enriquecimiento.

El texto viejo sigue disponible en `editorial/wayuu/myths/*.mjs`, así que la
comparación es reproducible:

| medida | resultado |
|---|---|
| Jaccard medio de palabras de contenido, viejo contra nuevo | **0,142** |
| largo medio del `mito` | 2.167 → **2.768** caracteres |
| nombres propios perdidos | **32** |
| nombres propios nuevos | **75** |
| nombres propios del canon nuevo **sin ficha** en la V3 | **33 de 127** |
| entidades V3 sin apoyo léxico en el canon nuevo | **98 de 431** |
| modelos V3 colgando de esas entidades | **81 de 435** |

Los tres casos que rompen el marco en vez de estirarlo:

- **`maleiwa`** — jaccard **0,048**. El canon vigente no es una cosmogonía: es
  el ciclo del Jaguar, con Kulirapata, la Paloma Vieja, Fulera el caracol,
  Cachicamo y Jorolamatu. Seis de sus ocho nombres propios no tienen ficha. Los
  veinte modelos del lote 10 ilustran otra historia.
- **`creacion-wayuu`** — el canon vigente **no contiene a Juyá, Mma, Kaí ni
  Kashi**, y la V3 les hizo modelo propio aquí. Estrena en cambio Tsitsi, la
  honda, Kasuto, el sojoo, las dieciocho castas nombradas y el acto de pintar
  los hierros en la roca de Arachí.
- **`el-viaje-del-mas-alla`** — estrenan **Pulowi** y **Alekerü**, dos
  personajes centrales, sin ficha ninguno.

### El defecto que no depende del canon

La densidad de la V3 iba de **18,5 entidades por 1000 caracteres en `ulepala` a
2,7 en `el-indio-kuriruputa` — 6,8×**, con una correlación de sólo **0,449**
contra el largo del mito. El denominador lo fijó el orden en que se hicieron
las reauditorías, no los mitos. Es la misma patología que la regla del largo
del guion destapó en los videos: lo que decide el tamaño es el troceo, no la
obra.

En la V4 esa dispersión baja a **2,2×** con correlación **0,726**.

---

## 2 · El frío estaba en la regla

La `palette_logic` de la V3 decía:

> Arena, sal, barro y sombra forman la base; verde y azul aparecen localizados
> con agua; rojo coral, carbón y blanco mineral sólo pertenecen a relatos que
> los documentan.

Trata el color como un permiso que hay que ganarse y por defecto cae en neutro.
El problema es que falló su propia prueba: el canon documenta el calor de
sobra y la regla no fue a mirar.

| término en los 27 `mito` | apariciones | mitos |
|---|---:|---:|
| fuego · brasa · fogata · lumbre | **52** | 14 |
| sed · seco · verano | 27 | 13 |
| polvo · arena · tolvanera | 25 | 13 |
| calor · sol · mediodía | 23 | 11 |
| rojo · colorado · palo brasil | 9 | 3 |
| **azul** | **0** | **0** |

La palabra «azul» no aparece ni una vez en el corpus.

---

## 3 · Denominador V4

Siete pasadas sobre el canon vigente
(sha256 `f05c2561b15a97eb6a79d6fc851abca80115682c0ed23fb797a990be26039a18`),
los 27 mitos, las once categorías.

| | |
|---|---:|
| entidades del elenco compartido | **52** |
| entidades propias de mito | **321** |
| **entidades únicas** | **373** |
| con modelo propio | 329 |
| como estado de otra ficha | 35 |
| embebidas con ficha que las cubre | 3 |
| **excluidas con razón declarada** | **5** |

### Las capas de producción · 225 fichas

Detectar 329 entidades no significa producir 329 láminas. La regla del editor es
una ficha por personaje, una por animal o criatura y una por escenario; lo
demás se agrupa o se escribe dentro del contrato de otra ficha.

| capa | fichas |
|---|---:|
| elenco vivo — personaje · criatura · animal · deidad | **116** |
| escenarios — lugar · arquitectura · paisaje | **54** |
| objetos de firma | **18** |
| gramática de grupo — colectivos que quedan | **17** |
| hojas de utilería — 61 piezas agrupadas de a cinco | **13** |
| fenómenos que son imagen en sí mismos | **7** |
| **total a producir** | **225** |

Nada desaparece en silencio. Los traslados quedan declarados:

- **38 fenómenos pasan a cláusula** del contrato de otra ficha. «El cielo blanco
  del mediodía», «la primera luz por las rendijas», «la niebla que baja por la
  tarde» o «las huellas a la luz de la luna» no son cosas: son condiciones de
  luz, y su sitio es el contrato de la lámina donde ocurren, no una lámina
  propia. Ahí estaba la mitad de la inflación.
- **18 colectivos y estados quedan cubiertos** por una ficha de elenco o por su
  escenario, cada uno nombrando cuál lo cubre.
- **61 objetos y plantas menores se agrupan** en trece hojas de utilería de a
  cinco piezas, sobre suelo guajiro. Una hoja con cinco objetos bien observados
  da más material que cinco láminas de un objeto solo.

Sólo siete fenómenos sobreviven como lámina porque son imagen en sí mismos: los
presagios de lluvia, la caza que es gente, las constelaciones, la yonna con sus
tres estados, el chubasco que borra las huellas, el verdor que brota y se borra,
y el reto de flechar el disco de la luna.

Cobertura por mito entre 14 y 32 entidades, media 20,5. El detalle completo
—nombre, categoría, estados, evidencia literal del canon, certeza,
sensibilidad y decisión visual— está en
[`content/mitos-visuales/wayuu.v4.inventario.json`](../content/mitos-visuales/wayuu.v4.inventario.json).

Las cinco exclusiones, para que ninguna desaparezca en silencio:

| entidad | mito | razón |
|---|---|---|
| Malinot, el más soberbio de los wanülüü | ulepala | nombrado una vez, sin un solo rasgo |
| Saiñ-Ma, el Corazón de la Tierra | los-mellizos | filiación sin descripción; lo cubre Manna |
| Mannuuya, el Rocío de las Nieblas | los-mellizos | igual que Saiñ-Ma |
| El árbol del ahorcamiento | el-incesto | representarlo es representar el suicidio; lo cubre Katetamana |
| El cuerpo extendido sin cabeza | ipuana | mutilación; lo cubre el cardón vacío |

Y los diseños de los **hierros claniles** quedan excluidos dentro de la ficha
`castas`: el canon dice que existen y que son distintos entre sí, no cómo son.

---

## 4 · Lo que la investigación corrige

Seis dossiers, el 17 de septiembre de 2026, en
[`docs/wayuu-investigacion-2026-09-17/`](wayuu-investigacion-2026-09-17/), con
los textos primarios extraídos en `fuentes/`.

### 4.1 Mareiwa · el hallazgo que le da la razón al canon nuevo

El *Diccionario de mitología wayuu* (Riohacha 2021, Proyecto Kuyama ·
MinCultura) dice que llamarlo «ser supremo» «corresponde más a la influencia
evangelizadora que buscó encontrar nombres equivalentes a los principios
cristianos de Dios y el Diablo». El lingüista wayúu Gabriel Iguarán sostiene
que MALEIWA es adaptación capuchina de la fórmula temporal *«Sumaleiwa,
nnojolüiwa kasa…»* —«antiguamente, antes de la existencia de las cosas»— y que
desplazó el nombre de **Tumajule**, uno de los mellizos. Perrin registró
desinterés y silencio wayúu ante el personaje.

En las fuentes, lo que Mareiwa crea son **clanes, hierros, normas y reparto
territorial — nunca el cosmos**. Que es exactamente lo que hace en nuestro
`creacion-wayuu`. Y el `maleiwa` del canon vigente —el menor de tres nacidos de
la carne que escupió Jaguar— es la versión que recogió Perrin y que Finol
transcribe completa.

**El canon reescrito es el etnográficamente sólido. La V3 modeló la lectura
cristianizada.** Tumajule, el nombre desplazado, sigue vivo dos veces en el
corpus: Tumajü'le en los mellizos y Jumajule en Umaralá.

### 4.2 Tres prohibiciones de la V3 que borraban evidencia real

- **El penacho no era invención.** Gutiérrez de Pineda 1950, Mincultura y
  Carrasquero-Finol 2010 documentan la *karrátse/kiára*: diadema ceñida con
  borlas de lana de colores. Pasa a regla de ocasión —sólo adulto, sólo fiesta
  o yonna— y con la regla regalada de Gutiérrez: **plumas vedadas a los
  niños**. Resuelve los «casquetes empenachados» que pide el canon de Juyá.
- **La outsü sí tiene repertorio nombrado**: maraca —dos para curar humanos—,
  corona de lana, kiára fabricada en su propio encierro, capote heredado,
  manilla de tabaco. La V3 lo prohibía en bloque por miedo al chamán genérico.
  El capote heredado que pide el canon de Umaralá era etnografía, no licencia.
- **La pintura facial se puede representar sin inventar forma.** Protección
  solar y visita están documentadas por dos autores como *cobertura* —paipai o
  achiote con grasa animal—, no como motivo. El umbral de cinco datos
  simultáneos produjo un silencio falso. Se parte en dos: **cobertura** exige
  persona + ocasión + material; **motivo** sigue exigiendo forma documentada.
  Los nombres y significados de motivos que circulan (*julenakia*, *juyayaa*,
  *shiliwalayaa*, *uuchi*, *et'sia*) están atestiguados en prensa regional y
  material escolar, no en etnografía: se puede saber que existen, no dibujar
  uno afirmando cuál es.

Corrección de léxico: la maraca es **ishira**. «Ma'a» no aparece en ninguna
fuente rastreable.

### 4.3 Reglas de encuadre que cambian composiciones

- **La vida no pasa dentro de la casa.** La piichi es una caja casi ciega: una
  puerta, una ventana, dos cuartos, piso de arena. El escenario es la
  **enramada**. Coincidencia fina: esa ventana única es justo la de *El viaje
  del más allá* — «por la ventana la vio como no debía verla».
- **Nunca un poblado**: cinco o seis casas dispersas, cada ranchería a minutos
  de la siguiente. Residencia matrilocal. Y **matrilineal no es matriarcal** —
  manda el linaje, no el clan, y muchas veces no hay jefe visible.
- **La casa no comparte encuadre con el agua**: las rancherías se sitúan altas
  y retiradas del jagüey porque de noche los espíritus de Pulowi rondan el
  agua.
- **La sequía no es un pozo vacío**: es gente cavando casimbas en el lecho seco
  para sacar agua turbia y salobre, sacrificando un chivo al excavar.
- **La yonna va al revés de como se ilustra**: círculo (*pioi*) de seis metros
  sobre arenal, descalzos, **la mujer avanza y el hombre retrocede** a quince o
  treinta centímetros, ella abre la manta con las dos manos, él lleva las manos
  en alto, y **el objetivo de ella es tumbarlo**. Él cae y se retira; ella, si
  se cansa, puede volver. El tamborero va **fuera** del círculo. «Chichamaya»
  es nombre impropio y las fuentes wayúu lo dicen.
- **El encierro son dos rituales**, no uno: pubertad física de tres a cinco
  días y pubertad social de meses a dos años. La imagen real de la fase corta
  es un chinchorro nuevo templado casi al techo, en penumbra, con la niña
  invisible dentro.

### 4.4 El canon confirmado por la etnografía

El **pañuelo de cuatro varas** de Kuriruputá y el **cuero de res** de Umaralá
resultaron ser etnografía exacta: mortaja de cuatro capas, pañuelo sobre el
rostro, piel de res fresca, todas las joyas puestas, y el difunto **sin
calzado**, «porque después se ata a la tierra y anda vagando».

### 4.5 Contradicciones que quedan abiertas

No se resuelven a la fuerza; se declaran.

1. **La enramada**: «techo plano sobre seis horcones» sólo lo sostiene la
   divulgación; las fuentes académicas describen una o dos aguas. Afecta a
   todas las láminas de ranchería y hay que decidirlo antes del piloto.
2. **La esposa de Juyá**: Perrin dice Pulowi, Paz Ipuana dice Saiñ-Má, Kazianka
   da dos alternativas. La variación es el dato.
3. **El yolujaa**: Perrin lo describe como invisible por definición —«como un
   pedazo de algodón blanco, como el humo. Pero nadie la puede ver»—; nuestro
   canon le da cuerpo visible. Se ilustra el canon y se declara la divergencia.
4. **Vocabulario masculino**: casi todo el repertorio de prendas del repo
   (she'etébé, kotin, asheinpalajanaa, kotsii, tekialijiu, wusi/aichee) depende
   de una sola fuente, *Ale'eya* II, cuyo PDF falla por certificado. Hay que
   versionar una copia o bajar su certeza.

---

## 4.6 · Procedencia · quién narró cada mito

Verificado contra facsímiles. **Quince de los veintisiete salen de un solo
artículo de veintisiete páginas de 1946**, ahora descargado y buscable:
Milcíades Chaves, «Mitos, leyendas y cuentos de la Guajira», *Boletín de
Arqueología* **II-4, oct–dic 1946, pp. 305–331**. Confirmado 1946 — el 1953 es
otro artículo suyo y el 1942 que circula en el *Diccionario* de 2021 es
erróneo. El texto Chamí de 1945 es emberá, no wayuu.

**No hay fichas anónimas.** Las cinco notas de informante del artículo cubren
cada una todo lo que va desde la anterior. El expediente daba cuatro de estas
por «sin informante»:

| mito | narrador |
|---|---|
| El indio Kuriruputá | Ana Isolina Ipuana, 22 años · intérprete Ana Ofelia Ortíz |
| El indio Jaichuasay | Enrique Epinayú |
| El pequeño indio Kosina | José Jusayú |
| La majayura de Puró · Serranías · El incesto · La sed · Worunka · Arámai | Juancito Iguarán Pushaina |

De Paz Ipuana 1972, que casi nadie cita:

| mito | narrador |
|---|---|
| El origen del fuego (2ª versión, la que ilustramos) | Francisco Sapuana, 77 años |
| Ulépala | Sibotta Sapuana, grabado el 17 de febrero de 1970 |
| Los mellizos transformadores | Nicanor González, clan Uliana |
| Waleker | **Josefina González Ipuana, de Jalaala** — narrado íntegramente en wayuunaiki, y por la ficha biográfica del autor, su propia madre |

La atribución de Waleker a *Ale'eya* II era falsa: el índice de ese tomo es
puramente etnográfico y no trae un solo relato.

**Sin primario localizado:** `las-wanulus-y-el-valle-de-la-muerte` no está en
Chaves, ni en *Ale'eya* I, ni en los siete textos que Finol transcribe, ni en
Pineda. No se le puede exigir a la imagen más fidelidad que la que el texto
tiene.

### La advertencia sobre `guanuru`

Pineda 1950 recoge a un capuchino que inventa **«dos diablos, Yolujá y
Guanurú»**. Es la única fuente de esa grafía y es el origen del esquema
dualista de nuestra ficha. Como la investigación de cosmología establece que
Wanülüü no es un demonio —es enfermedad *y* ser, y puede ser el auxiliar bueno
de la outsü, *wanülüü anashii*—, **la ficha `guanuru` no se dibuja como
diablo**: se representa por su efecto, y la negociación de `jirairay`, no un
exorcismo, es la lectura correcta. Pineda documenta además que los misioneros
protestantes tradujeron «Dios» por «Mareiwa» en el Evangelio de San Marcos.

### La etimología que no necesita un dios cristiano

Paz Ipuana da la suya de **Malei'wa**: de *ei* «madre» y *wa* — «nuestra madre,
la generadora, la transformadora». Va junto a la hipótesis capuchina de
Iguarán. Las dos se declaran; ninguna se impone.

### Variantes que la biblia decide y declara

- **Los mellizos** tienen cuatro nóminas de nombres. Ilustramos la de 1972
  (Tumaju'le / Peeliyuu), que es la del canon.
- **Worunka (Chaves) y Wolunka (Paz/Perrin) son dos relatos distintos**, no dos
  redacciones: cambia quién le rompe los dientes, dónde y cómo termina. Nuestro
  canon es el de Chaves.
- **Serranías** trae ocho cerros en Chaves frente a la tríada
  Epitsü–Kama'ichi–Iitujolu de la circulación actual. Ilustramos los ocho.

**Ortografía:** Kuriruputá, Jaichuasay, Jururiana, Aramai, Umaralá y Jirairay
sólo existen en castellano mediado y **no se «corrigen»** a una ortografía
wayuunaiki moderna inventada. La alternancia l/r —Maleiwa/Mareiwa,
Wanülüü/wanurú— es real y se respeta como está en el canon.

---

## 5 · Cronología material

Regla de una línea, obligatoria antes de cada ficha:

- **Mito de origen** — barro, totumo, algodón, cardón, palma, arena, casimba.
  Sin animales domésticos y sin metal.
- **Desde el siglo XVII** — ganado, caballo, corral. Jinetes ya a inicios del
  XVIII. Once mitos del corpus tienen caballo: ninguno es precolombino.
- **Republicano** — arma de fuego, panela, zaraza, machete, ron. El guerrero
  Ipuana marca el corte en una frase: «En aquel entonces no había civilizados».
- **Siglo XX tardío** — sombrero de fibra generalizado, suela de caucho en la
  waireña, zinc, alambre, pimpina. **El algodón propio muere hacia 1950**: ése
  es el corte del color del tejido.

---

## 6 · Qué pasa con las 435 imágenes de la V3

No se borran. Pasan a `legacy_v3` con su selección y sus hashes intactos. Una
pieza suya sólo vuelve a producción si su entidad existe en el denominador V4,
si su evidencia sigue en pie contra el canon vigente, y si pasa la puerta
cromática nueva. La promoción es pieza por pieza y con acta; no hay traspaso
en bloque.

---

## 7 · El orden de generación

Decidido por el editor el 17 de septiembre de 2026. Una tanda **no se emite
toda de una vez**: va por capas y en este orden exacto.

1. **Personas**
2. **Animales**
3. **Elementos de atrezo**
4. **Paisajes**

> «Es la composición lo que nos da fuerza en el proceso, no que las generes así
> de una vez todas.»

La cara es lo que todo lo demás tiene que respetar: si el paisaje sale primero,
la figura termina acomodándose a un mundo que ya se decidió sin ella. Esto
corrige el orden anterior del repo, que ponía paisajes en segundo lugar. Entre
capa y capa hay revisión del editor.

### La trampa del prompt largo

La tanda 01 —piloto multicategoría de catorce láminas— salió **fotorrealista**
pese a pedir papel recortado. Causa medida: el prompt tenía 6.341 caracteres y
el bloque de técnica competía con diez reglas de color y veinte prohibiciones.
El modelo se quedó con la escena y tiró la técnica.

Arreglo verificado en la tanda 02: la técnica **abre** el prompt bajo un
encabezado que declara que manda sobre todo lo demás y se **repite al cierre**;
las reglas de calor bajan de diez a cuatro y se dicen en vocabulario de papel;
las prohibiciones bajan de veinte a ocho. 5.022 caracteres. Salió en papel.

## 8 · Lo que falta

1. Aprobación artística de la capa de personas.
2. Resolver la contradicción de la enramada.
3. Capas 2, 3 y 4 — animales, atrezo, paisajes.
4. Congelar el inventario.
5. `npm run mitos:preflight:biblia -- --stage generate` en PASS.

Generación: API paga de OpenAI, `gpt-image-2.5-sunburst`, calidad `high`, según
la directiva del 13 de septiembre de 2026, con el CLI
`~/.codex/skills/.system/imagegen/scripts/image_gen.py generate-batch
--no-augment`. Ese CLI necesita el SDK de openai, que en esta máquina sólo tiene
`/usr/bin/python3`.
