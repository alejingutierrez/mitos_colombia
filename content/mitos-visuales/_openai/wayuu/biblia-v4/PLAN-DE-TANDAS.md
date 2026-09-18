# Biblia visual Wayúu V4 · plan de tandas

**225 fichas · 17 tandas.** Orden fijado por el editor el 2026-09-17: personas →
animales → atrezo → paisajes. Entre tanda y tanda hay revisión.

Todas se emiten con el contrato del repo —`buildFicha()` de
`scripts/mitos/art-direction.mjs`, `FICHAS.personaje` en 9:16, `FICHAS.paisaje`
en 16:9, `FICHAS.prop` en 1:1— con la API de pago de OpenAI,
`gpt-image-2.5-sunburst`, calidad `high`.

## Capa 1 · personas — 116 fichas

| tanda | qué | fichas | estado |
|---|---|---:|---|
| **01** | personas mortales, primer grupo | 14 | **aprobada** 2026-09-17 |
| **02** | personajes míticos | 14 | emitida · correcciones pendientes |
| **03** | mortales, segundo grupo | 14 | emitida · correcciones pendientes |
| **04** | mortales, tercer grupo — los siete caminantes | 14 | emitida |
| 05–06 | resto de personas mortales | 23 | pendiente |
| 07 | colectivos · gramática de grupo | 17 | pendiente |
| 08 | criaturas restantes | 2 | pendiente |

### Correcciones acumuladas de la capa de personas

Se aplican todas juntas en una pasada al cerrar la capa, por decisión del editor.

1. **Torso desnudo en los míticos varones** (Simirriuu, hombres-tigres, Maleiwa
   muchacho). Escribir «wayuco y si'ira» hace que el modelo entienda taparrabo y
   nada más. Toda ficha masculina debe nombrar su prenda superior. Corregido
   desde la tanda 03.
2. **El jaguar sale leopardo o tigre de bengala** (Kulirapata, tercera forma de
   la Chama). Hay que decir *jaguar americano, rosetas con punto interior*.
3. **El estado quemado de Kulirapata no se distingue** del cazador: las manchas
   negras tienen que ir como piezas de papel carbón superpuestas.
4. **Alekerü se quedó sin hilo**, que es lo único que la separa de Waleker.
5. **El elenco masculino tiende al monocromo crema.** Corregido desde la tanda
   04 abriendo el repertorio: franela, saco, chaleco, camisa a rayas, camisa
   oscura, manta de color.
6. **El jirón de telaraña de Irunúu no se lee.**
7. **La madre de los tres no se ve embarazada.**
8. **La mano constante de la Chama no se lee**, y es su único recurso de
   continuidad.

### Nota de moderación

La ficha `m10-majayura-puro` fue rechazada por el filtro de seguridad de OpenAI
en etapa de salida, categoría `other`. Se reescribió quitando todo adjetivo
sobre el cuerpo y trasladando la distinción al vestuario —que es lo que el canon
documenta— y pasó. El rechazo, el ID de la petición y el motivo quedan en
`tanda-04-miticos/freeze.v1.json`; la v1 no se borró.

### Los que NO llevan ficha de cuerpo

Cuatro seres del inventario tienen modelo propio pero **no pueden ir a una ficha
de personaje**, porque el propio canon o las fuentes lo impiden. Su
representación es por efecto y pertenece a otra capa. Queda declarado aquí para
que ninguno desaparezca en silencio:

- **Wanurü · Wanülüü** — «No se lo veía; se lo oía en la voz de la piache». Las
  únicas formas visibles que el canon autoriza son la serpiente grande y el
  aliento. Además no es un demonio: puede ser el auxiliar bueno de la outsü.
- **Pulowi** — el canon prohíbe verla: verla mata. Se representa por su umbral
  —la enramada, la ventana, el hombre caído— nunca su cuerpo.
- **Jirairaí, el espíritu de allá** — invocado en el canto, sin una sola
  descripción física.
- **Jumajule, espíritu bueno** — igual: invocado y sin descripción.

## Capa 2 · animales — 33 fichas

| tanda | qué | fichas |
|---|---|---:|
| 09 | animales del rebaño y del camino: chivos, caballo, burro, vacas, perros | 7 |
| 10 | fauna del relato: venado, cóndor Juramía, gavilán, cachicamo, caracol, búho, culebras | 13 |
| 11 | aves: Isho, Sangre Toro, Carpintero, Guacamayo, Aáner, alcaraván, guaiguaya, gallinazo, wampiray, urui, mariposa nocturna, mantis, hormigas | 13 |

## Capa 3 · atrezo — 31 fichas

| tanda | qué | fichas |
|---|---|---:|
| 12 | objetos de firma, primer grupo: arco y las tres puntas, chinchorro, manta, ishira, telar, aperos, ajuar funerario, cerámica nombrada | 9 |
| 13 | objetos de firma, segundo grupo: penacho, sombrero, waireña, wayuco y si'ira, tejidos de Waleker, haz de varas, varitas de taladro, honda, caja | 9 |
| 14 | hojas de utilería: 42 piezas menores agrupadas de a cinco | 13 |

## Capa 4 · mundo — 66 fichas

| tanda | qué | fichas |
|---|---|---:|
| 15 | plantas y elementos naturales: cardón, trupillo, caujaro, palo brasil, maguey, tuna, parruluwas, morva, sojoo y el resto | 19 |
| 16 | arquitectura: piichi, enramada, ranchería, corral, casa del encierro, cerca de piedra, Jorolamatu, casa cerrada | 13 |
| 17 | lugares, primer grupo: jagüey, casimba, cueva, cementerio, Jepira, Puró, Arachí, Tsitsi, Kasuto | 18 |
| 18 | lugares, segundo grupo: topónimos del corpus — Matumuy, Kuitsá, Taiway, Wina, Patsuo, Wawari, Utta, Katetamana, Jarara, Wayantuunay, Juralii, Palaa-Puloina | 17 |
| 19 | paisajes: llanura cardonal, serranía, costa, valle, dominio de Juyá, tierra verde | 6 |

## Capa 5 · lo que el editor pidió aparte

| tanda | qué | fichas |
|---|---|---:|
| 20 | **maquillaje · acheepa** — registros de cobertura por edad, género y ocasión | 4 |
| 21 | **símbolos** — lo que sí y lo que no | 2 |
| 22 | fenómenos que son imagen: presagios, la caza que es gente, constelaciones, la yonna, el chubasco, el verdor, flechar la luna | 7 |

### Nota sobre maquillaje

Se puede representar **cobertura** —paipai o achiote con sebo de chivo, aplicado
como mancha pareja— porque está documentada dos veces y en dos autores, con
tonos por edad: negro en las mayores, tierra en las adultas, rojizo en las
jóvenes; y los hombres con trazos lineales. **No se puede representar un motivo
con nombre**: los nombres circulan (*julenakia*, *juyayaa*, *shiliwalayaa*,
*uuchi*, *et'sia*) pero su forma exacta no está documentada en etnografía.
Cuatro fichas: cobertura de anciana, de adulta, de joven, y trazo masculino.

### Nota sobre símbolos

Dos fichas, y una de ellas es una declaración de lo que no se dibuja.

- **Los hierros claniles quedan excluidos.** El canon dice que existen y que son
  distintos entre sí, no cómo son. Se representa el acto de pintarlos en la roca
  de Arachí y la marca en la piel del animal, siempre fuera de foco.
- **Los kanas** son un repertorio cerrado y contable —32, que representan 17
  «pensamientos»— y sus significados **están en disputa entre los propios
  wayúu**. El portador ancestral no es la mochila de crochet, que es un híbrido
  de los años sesenta: es el **si'ira**, la faja masculina, y por eso los kanas
  son verticales. La ficha muestra la técnica y la orientación, nunca un patrón
  con nombre. El ICANH denuncia el plagio por diseñadores, y en Colombia no
  existe instrumento legal que los proteja: el estándar es autoimpuesto.
