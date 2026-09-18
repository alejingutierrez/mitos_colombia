# Kit de biblia: las 33 comunidades pendientes

**Abierto el 18 de septiembre de 2026.** Este archivo es el encargo exacto que
sigue quien produce una biblia nueva. La doctrina completa está en
[`biblia-visual-v2.md`](biblia-visual-v2.md) y [`biblia-visual-v3.md`](biblia-visual-v3.md);
aquí sólo está lo que hay que hacer, en el orden en que hay que hacerlo, y las
trampas que ya costaron caro.

## El encargo

Seis comunidades tienen biblia —muiscas, wayúu, nasa, ette ennaka, huitoto y
chamí—. Faltan **33 biblias sobre 194 mitos narrables**: 27 comunidades con
nombre propio y 6 agrupamientos del corpus sin comunidad. El censo y el tamaño
objetivo de cada una viven en
[`scripts/mitos/biblias-pendientes.mjs`](../scripts/mitos/biblias-pendientes.mjs).

**El tamaño no es libre: es proporcional al corpus.** Sale de lo que ya tienen
las biblias cerradas —wayúu 431 entidades sobre 27 mitos, muiscas 304 láminas
sobre 41, huitoto 196 sobre 21—:

| | por mito |
|---|---|
| entidades inventariadas | **12 a 18** (objetivo 15) |
| fichas con modelo propio | **7 a 9** (objetivo 8) |
| piso para corpus de uno o dos relatos | **10 fichas** |

Por debajo de esa banda la biblia no sostiene un tríptico ni un keyframe. Por
encima, se está inflando con entidades que otra ficha ya cubre: eso se resuelve
con `embedded`, no con una lámina más.

## Lo que ya está hecho

La **compuerta 0 está cerrada para las 33**. `scripts/mitos/freeze-corpus-biblia.mjs`
leyó de Neon los cuatro campos editoriales de cada mito —`mito`, `historia`,
`versiones`, `research_notes`—, calculó la huella SHA-256 y dejó:

- el esqueleto del plan en `content/mitos-visuales/<id>.v3.json`, con `corpus`
  y `source_snapshot` congelados;
- el canon legible en el directorio de trabajo de la sesión, que es lo que se
  lee para hacer las siete pasadas.

Si el canon cambia en la base, la huella deja de coincidir y el inventario
caduca. Es lo que le pasó a la biblia wayúu V3 y por eso hubo que rehacerla.

## Las cuatro entregas

Para cada comunidad, en este orden:

1. **Dossier de investigación** en `docs/investigacion/<id>.md`
2. **Bitácora de las siete pasadas**, dentro del plan, mito por mito
3. **Inventario de entidades** con decisión visual declarada para todas
4. **Contratos de modelo**, derivados con el script

Termina cuando `--stage design` da **PASS**. El piloto y las tandas de imagen
son una compuerta aparte: cuestan dinero y las aprueba el editor.

## 1 · El dossier de investigación

No se investiga el mito desde cero: ya hay expediente editorial. Se parte de
`editorial/<comunidad>/sources.mjs` —fuentes primarias con autor, año,
localizador, qué sostienen y qué limitación tienen— y de los cuatro campos del
canon. Lo que falta es la **dimensión visual**, que ninguna ficha editorial
tiene.

Siete dimensiones, todas obligatorias y ninguna deducible de otra:

| dimensión | qué resuelve |
|---|---|
| visual | qué se ve: materia, color, luz, textura del territorio real |
| simbólica | qué significa lo que se ve, y qué no se puede mostrar |
| histórica | qué está documentado de ese pueblo en ese siglo |
| arquitectónica | vivienda, planta, materiales, relación con el cuerpo |
| de época | qué existía y qué no cuando pasa el relato |
| de personajes | edad, porte, oficio, vestuario, pintura, adorno |
| de criaturas | anatomía, escala, qué la hace ella y no otra |

**La época manda sobre el resto.** Un relato colonial no se dibuja con
geometría precolombina; uno precolombino no lleva arquitectura de cal y canto.

Cada afirmación que pueda cambiar una imagen entra en la **matriz de
evidencia** con su base y su sensibilidad:

- base: `documented_core` · `variant` · `contemporary_memory` ·
  `academic_hypothesis` · `editorial_interpretation` · `uncertain`
- sensibilidad: `public` · `contextual` · `consult_required` · `do_not_visualize`

Lo `do_not_visualize` no entra a un modelo ni a una escena aunque sea bonito.
Lo `consult_required` queda resuelto antes de generar o la entidad se declara
`excluded` con su razón.

**La revisión cultural se declara como `documented_exception`**, no como
consulta que no hubo: explica por qué no se obtuvo, limita el alcance y declara
al menos dos salvaguardas. En el corpus sin comunidad se sustituye por
**revisión histórica**: qué está documentado de ese siglo en ese territorio.

### Buscar más, no inventar menos

La trampa chamí: al no estar documentada la hechura de la ropa, la variante A
rellenó el hueco con una camisa cruda inventada y salieron figuras genéricas
que no representaban a nadie. La salida no fue dibujar menos sino **buscar
más** —Reichel documenta los cántaros con líneas incisas que representan la
pintura facial; con pintura facial y paruma las figuras se reconocen—.

Y su límite: **el lenguaje sí, el ejemplar no.** Se usa la forma documentada de
una pieza, nunca un patrón real, porque esos diseños son identidad y son
sustento. Ninguna marca clanil, ningún kanas, ningún tejido concreto se copia
ni se inventa.

### Con qué se investiga

La búsqueda web va por el **buscador propio** (`src/lib/web-search.js`, Serper o
Brave) y la escritura por **Bedrock** (`src/lib/bedrock-text.js`). **En OpenAI
sólo se paga la imagen.** El runbook está en
[`proveedores-openai-bedrock.md`](proveedores-openai-bedrock.md). Se descarta
toda URL que no venga del buscador.

## 2 · Las siete pasadas

Cada mito se lee **completo, en los cuatro campos**, y se registran siete
búsquedas independientes, cada una con su propia lectura:

1. `named_entities` — entidades con nombre propio
2. `unnamed_roles` — roles humanos sin nombre
3. `animals_and_creatures`
4. `objects_and_plants`
5. `places_and_architecture`
6. `states_and_transformations` — estados y formas sucesivas
7. `variant_differences` — diferencias entre variantes

La bitácora lista además `unresolved_mentions`, **incluso cuando está vacía**.
Cada relato necesita al menos una entidad con rol `primary`.

```json
"extraction": {
  "reviewed_fields": ["mito", "historia", "versiones", "research_notes"],
  "passes": ["named_entities", "unnamed_roles", "animals_and_creatures",
             "objects_and_plants", "places_and_architecture",
             "states_and_transformations", "variant_differences"],
  "unresolved_mentions": [],
  "review_status": "editorial_approved",
  "reviewed_at": "2026-09-18",
  "note": "Qué separó esta lectura y por qué, en una frase con sustancia."
}
```

La `note` es del mito, no de la plantilla. Si treinta notas se leen iguales, la
extracción no se hizo.

## 3 · El inventario

Once categorías: `personaje`, `deidad_fuerza`, `criatura`, `animal`,
`colectivo`, `objeto`, `planta`, `arquitectura`, `lugar`, `paisaje`,
`fenomeno`.

**Nada detectado puede desaparecer en silencio.** Tres decisiones y sólo tres:

- `required` — ficha propia
- `embedded` — declara `covered_by` (otra entidad) y `coverage_note`
- `excluded` — declara `exclusion_reason`

La relación entidad↔mito se valida en las dos direcciones: cada
`myths.<slug>.entity_refs[].entity_id` tiene retorno en
`entities.<id>.myth_refs`, y al revés. No se fusionan dos identidades porque
cumplan una función parecida, ni se duplica una por una variante ortográfica.

Cada entidad `required` lleva además un bloque `design` con lo que **sólo vale
para ella**:

```json
"design": {
  "silhouette": "una frase que la distingue de cualquier otra ficha",
  "materials": ["…"],
  "palette": "…",
  "scale": "…",
  "continuity": ["…"],
  "documented": ["cada rasgo atado a una evidencia del inventario"],
  "editorial": ["cada decisión editorial, reversible y dicha como tal"],
  "states_to_model": ["sólo los estados que cambian la imagen"]
}
```

`states_to_model` vacío significa una sola ficha. Cada estado que se declara
cuesta una lámina: se declara el que el relato realmente cambia, no el que se
podría imaginar.

## 4 · Los contratos

No se escriben a mano. `plan.visual_system` fija lo que no cambia entre
entidades y el script deriva los modelos:

```bash
node scripts/mitos/build-biblia-models-v3.mjs --plan content/mitos-visuales/<id>.v3.json
```

`visual_system` necesita `technique`, `technique_close`, `style_medium`,
`lighting`, `era`, `materials_base`, `palette_rules` (**máximo cuatro**) y
`prohibitions` (**máximo ocho**).

### Las tres trampas de técnica que ya se pagaron

1. **La técnica abre y cierra el prompt.** La tanda 01 wayúu salió
   fotorrealista pese a pedir papel recortado: el prompt tenía 6.341 caracteres
   y el bloque de técnica competía con diez reglas de color y veinte
   prohibiciones. El modelo se quedó con la escena y tiró la técnica. Con la
   técnica al frente, bajo un encabezado que dice que manda sobre todo lo
   demás, cuatro reglas de color y ocho prohibiciones —5.022 caracteres—, salió
   en papel.
2. **El modelo esculpa por defecto.** No basta con prohibir el volumen al
   final. Hay que nombrar **el cuerpo** y **la cara** por separado: se arreglan
   en pasos distintos. Rostro de óvalo plano de un solo tono, rasgos como
   piezas recortadas aparte.
3. **El pelaje es la trampa de los animales.** En wayúu, «cada pluma, cada
   escama, cada mechón como recorte independiente» produjo papel maché. La
   regla correcta es la **inversa**: pocas piezas planas grandes, con el borde
   recortado en dientes. Con ella las 24 fichas de animales chamí salieron a la
   primera, sin pilotos.

### El orden de las tandas, cuando llegue

Personas → animales → atrezo → paisajes, una tanda por capa y revisión del
editor entre capas. La cara es lo que todo lo demás tiene que respetar; si el
paisaje sale antes, la figura se acomoda a un mundo decidido sin ella.

## Verificación

```bash
node scripts/mitos/freeze-corpus-biblia.mjs --community <slug> --canon-out <ruta>
npm run mitos:preflight:biblia -- --plan content/mitos-visuales/<id>.v3.json --stage research
npm run mitos:preflight:biblia -- --plan content/mitos-visuales/<id>.v3.json --stage inventory
node scripts/mitos/build-biblia-models-v3.mjs --plan content/mitos-visuales/<id>.v3.json
npm run mitos:preflight:biblia -- --plan content/mitos-visuales/<id>.v3.json --stage design
```

`design` en PASS cierra el encargo. El preflight cierra la compuerta en el
primer fallo para que se vea la decisión que de verdad desbloquea, no
trescientos errores derivados.

## Lo que nunca se hace

- Copiar la iconografía de una comunidad en otra. El corpus sin comunidad no
  recibe iconografía indígena prestada: se agrupa por época y territorio.
- Inventar un tocado, un patrón textil, una marca clanil o un rostro.
- Dejar una entidad detectada sin decisión declarada.
- Dar una razón de exclusión sin abrir el `mito` y leerlo. Una razón falsa pasa
  la auditoría igual que una buena, y por eso es peor que el silencio.
- Generar una imagen sin que `--stage generate` haya dado PASS.
