# Doctrina de prompts de movimiento v2 (Seedance 2.5)

Canal "Mitos de Colombia" · pipeline: keyframe gpt-image-2 → Seedance 2.5 en Higgsfield (omni_reference, start_image, 5s, 9:16) → ensamblaje local. Reemplaza la plantilla de 4 partes.

---

## 1. Qué aprendimos (resumen ejecutivo)

- **Nuestro "negativo" era una orden positiva de quietud.** Seedance no tiene arquitectura de negative-embeddings: cada token se lee como instrucción positiva. "The characters only breathe and gesture softly" es una dirección de actuación literal que el modelo obedece — es el asesino identificado de la animación. La cláusula equivalente correcta en la doctrina oficial de Higgsfield es un candado anti-lip-sync ("Characters only emote and gesture, they do NOT talk"), nunca un limitador de energía. *(Fuentes: skill OSideMedia seedance; informe comunidad §1; doctrina-local §6.7)*

- **En i2v el modelo no infiere intensidad de movimiento desde la imagen: hay que declararla.** El keyframe es papel quieto; si el prompt no declara amplitud ("large", "burst", "erupts", niveles micro/media/grande), el modelo elige la mínima. Ese es el diagnóstico de fondo de v1/v2. La tríada que enciende el dinamismo: verbo de cámara + palabra de amplitud + verbo de acción, los tres juntos. *(Guía oficial Seedance 1.0 vía AIMLAPI; guía CN dexhunter)*

- **El presupuesto de palabras debe irse en verbos y en lo que CAMBIA, no en re-describir la imagen.** "The model sees the image… your prompt tokens go on what changes over time." Nuestra parte [3] entera de materia estática competía con el start_image y robaba atención a la acción. La materia se nombra pegada a su movimiento ("cotton-fiber mist *billowing*", nunca "cotton-fiber mist"). *(Our Code World; fórmula i2v oficial: "subject + movement, background + movement, camera + movement")*

- **La física necesita causa→consecuencia y estados finales.** "Physics needs a consequence to chase: leaves scatter on each impact." Escribir la causa antes de la reacción (primero el golpe del agua, luego el espanto de las aves) y nombrar el estado final observable de cada beat. Por eso v3 (ráfagas al golpear la roca) fue el mejor: generaliza ese patrón. *(fal.ai 2.0/2.5; skill OSideMedia 2.5)*

- **Sin timeline, el modelo amontona o rellena con quietud.** Bloques temporales `[0-2s][2-4s][4-5s]` con UNA acción dominante + 1-2 secundarias por beat distribuyen el movimiento a lo largo del clip; un frame sostenido >2.5s "reads as a slideshow" — exactamente nuestro síntoma. Movimiento desde el frame 1, cierre "settled ≠ frozen". *(mindstudio timeline prompting; doctrina-local Higgsfield, ley de ~2s y regla 21)*

- **Una sola conducta de cámara, motivada y con endpoint.** Un movimiento primario (más, como mucho, un modificador de textura tipo "slightly handheld"); apilar dolly+pan+orbit = jitter/"AI soup". La cámara se ancla a un evento visible ("the crane-up begins as the first mist puff rises") y se nombra dónde termina el encuadre. Velocidad con palabras rítmicas, nunca "fast" (el keyword que más degrada). *(apiyi/oficial 2.0; skill OSideMedia; doctrina-local §2d)*

- **El estilo se preserva nombrando el material DE cada efecto en movimiento, no frenando el movimiento.** Patrón documentado para craft/claymation: "fire is sculpted from orange-red clay ribbons" → nuestras cintas de agua de papel y niebla de algodón. Más el candado ON TWOS: "animated on twos (~12 fps), deliberate STEPPED motion with tiny holds, NOT smooth, NOT fluid interpolation" — que además esconde el over-smoothing de la IA. Amplitud grande + cadencia stepped es la combinación que resuelve "el papel debe moverse sin perder el estilo". *(Higgsfield animation library 2.0; doctrina-local §5, mecanismo on-twos verificado en su testing)*

- **Por MCP nadie "mejora" nuestro prompt.** La web de Higgsfield aplica Enhance + selectores (genre, physics, motion control) que el MCP no aplica; el propio blog de Higgsfield asume que el agente hace de enhancer. Tenemos que entregar el prompt ya expandido con toda esta estructura. *(informe higgsfield-generate §4)*

---

## 2. La fórmula nueva

**Plantilla v2 — 7 líneas, un solo bloque, orden fijo. Objetivo total: 100–150 palabras** (Seedance lee de izquierda a derecha con peso de atención decreciente; el sweet spot oficial es 60–100 palabras para el contenido útil, y las líneas de invariantes finales son baratas porque son cortas y formulaicas).

| # | Línea | Qué va | Longitud |
|---|---|---|---|
| 1 | **STYLE + CADENCE** (byte-idéntica en todos los clips del canal) | `Handcrafted paper-maquette stop-motion, animated on twos (~12 fps): deliberate stepped motion with tiny holds and slight rebounds, as if repositioned by hand between exposures.` Es el "medium lock" + el carácter temporal. Corta: el look ya viene del start_image. | ~25 palabras |
| 2 | **FIRST FRAME** | `@Image 1 is the first frame: composition, palette, materials and lighting stay locked to it. Motion starts on frame 1, no opening freeze.` NO re-describir el contenido de la imagen. | ~22 palabras |
| 3 | **BEATS cronometrados** `[0-2s] [2-4s] [4-5s]` | Pura coreografía: 1 acción dominante + 1-2 secundarias en todo el clip, repartidas por beat; cada beat con causa→consecuencia, verbo de aterrizaje (slams, whumps, snaps, settles) y estado final observable. Amplitud declarada (bursts, large stepped drops). Sin palabras de estilo/color/material dentro del beat salvo el material del elemento móvil ("paper ribbon", "cotton puff"). Un impact beat nombrado por clip. | 50–70 palabras |
| 4 | **CAMERA** | UNA conducta, dicha una vez, motivada por un evento visible, con endpoint nombrado. Opcional: un modificador de textura ("slightly handheld"). Velocidad: slow/gradual/controlled. | ~18 palabras |
| 5 | **PHYSICS** (órdenes con consecuencia) | 1-2 invariantes de comportamiento material: "foam only accumulates, never resets; fibers tremble on every impact; edges shiver slightly between frames." | ~15 palabras |
| 6 | **INVARIANTES en positivo** | `Every surface remains visibly cut paper, cardboard and natural fiber, raised edges and real contact shadows. Motion is large and continuous; forms stay stable, never freeze.` | ~25 palabras |
| 7 | **NEGATIVE (solo estilo, formato NOT)** | `NOT smooth motion, NOT fluid interpolation, NOT slow-motion, NOT motion blur, NOT liquid simulation, NOT photorealism, no morphing, no melting, no text, no extra people.` Nunca negativos que describan cantidad o suavidad de movimiento deseada. | ~25 palabras |

**Qué cambia respecto a la plantilla de 4 partes y por qué:**

1. **[1] apertura de estilo** → se encoge y absorbe la cadencia (on twos, stepped). Antes gastaba el tramo de máxima atención en describir un look que el start_image ya impone. *(invideo: primeras 20-30 palabras pesan más; OSideMedia: style prefix corto e idéntico)*
2. **[2] acción** → se convierte en **beats con timestamps**, causa→consecuencia y verbos de aterrizaje. "1 principal + 1-2 secundarias" se mantiene pero ahora **repartidas en el tiempo**, no listadas: es lo que evita tanto el amontonamiento como el relleno con quietud. v3 superó el presupuesto (5 acciones simultáneas en 5s → ejecución aleatoria según heyuan). *(mindstudio; doctrina-local action grammar: "A, then B, then C — never simultaneously")*
3. **[3] materia** → deja de ser una sección estática: cada material vive pegado a su verbo dentro de los beats, y queda una línea corta de invariante al final. Re-describir materia quieta creaba "competing inputs" con el keyframe. *(Our Code World; OSideMedia i2v = motion + camera only)*
4. **[4] negativos** → se parten en dos: invariantes positivos (línea 6) + NOT-list solo de estética (línea 7). Se elimina para siempre "The characters only breathe and gesture softly" y todo "slow/gently/softly" no intencional. **Ojo**: NO incluir "no 3D render" — para estilos dimensionales de papel choca con el bajo relieve real; "photorealism" sí se mantiene siempre. *(doctrina-local §3.4)*
5. **Multi-shot: NO por defecto.** Aquí los informes se contradicen: la doctrina Higgsfield local usa 5 hard cuts por bloque, pero sobre minimax_h3 a 10s y sin start_image estricto; la guía Seedance dice que en 5s los cortes no caben y que los beats en corchetes no disparan cortes. **Decisión: oner de 5s con 3 beats.** El start_image ancla el primer frame; un corte abandona esa ancla y arriesga drift de estilo. La variante de 2 shots con `HARD CUT` a los 2.5s (borrador del informe doctrina-local) queda como **experimento B** para escenas que pidan cambio de escala (macro→wide), nunca como default. El paralaje se pide dentro del único movimiento ("foreground fronds drift faster than the background cliff"), que la doctrina Disney-multiplane respalda.
6. **Cámara compuesta: rebajada.** v3 (grúa+tilt+paralaje) funcionó pero roza el límite documentado. Decisión: un movimiento compuesto *coherente* (crane-up con tilt es una sola trayectoria) es legal; dos gramáticas distintas (locked-off + orbit, dolly + whip-pan) no. Nunca un tercer movimiento.

---

## 3. Vocabulario que funciona

**Leyenda**: ✅ evidencia fuerte (multi-fuente/oficial) · ⚠️ especulativo o de una sola fuente.

### Cámara — movimientos y planos

| Término (inglés) | Uso | Evidencia |
|---|---|---|
| `slow dolly in / dolly out`, `push-in`, `pull back wide` | acercamiento/alejamiento estable | ✅ oficial + Higgsfield + fal.ai |
| `slow crane up / crane down`, `jib` | ascenso revelador (ideal cascada) | ✅ |
| `slow tilt up from [base] to [crest]` | plantilla literal documentada | ✅ seedance.tv |
| `pan`, `truck left/right`, `tracking follow` | lateral / seguimiento | ✅ |
| `slow quarter-orbit around [subject]` | nunca 360 completos en este estilo | ✅ (360 prohibido: MiniMax papercraft) |
| `locked-off frame` + escena dinámica ("static camera + steam, fabric, mist") | combinación ganadora documentada | ✅ |
| `slightly handheld`, `slight handheld camera movement` | modificador de textura, máx. uno | ✅ OpusClip + OSideMedia |
| `rack focus: shift focus smoothly from [fg] to [bg], the [fg] gradually blurs` | siempre traducido a resultado observable | ✅ |
| `macro miniature photography, shallow depth of field`, `macro push` | vende la escala de maqueta | ✅ MiniMax + doctrina-local |
| **Cámara motivada**: `the crane-up begins only as [event]` / `ending on [encuadre final]` | ancla + endpoint, ambos obligatorios | ✅ fal.ai 2.5 + OSideMedia |
| `whip pan`, `dolly zoom` | ⚠️ existen como presets DoP; en texto para nuestro estilo, riesgo de perder textura — evitar |
| Ángulos sin personaje: `overhead / top-down, low angle, high angle, lateral, macro detail` | nunca OTS sin personaje nombrado (inventa gente) | ✅ doctrina-local |

Velocidades: `imperceptible → slow/gentle/gradual → smooth/controlled` ✅. `dynamic/swift` degrada; `fast` es el keyword que más degrada ✅.

### Intensidad / amplitud de movimiento

| Recurso | Ejemplo | Evidencia |
|---|---|---|
| Adverbios de grado oficiales | `intense, large, strong, high frequency` (i2v oficial 1.0) | ✅ |
| Escala de 3 amplitudes | micro (breeze sway) / media (turns, steps, lifts) / **grande (leaps, tumbles, bursts, sweeping arcs)** — pedir grande explícitamente | ✅ guía CN |
| Verbos de erupción con consecuencia | `bursts, erupts, slams, whumps, collapses, scatters, snaps taut` + qué provocan | ✅ fal.ai + doctrina-local |
| Verbos de aterrizaje | `snaps into place, stamps down, drops with a bounce, settles, overshoots and rocks back` | ✅ doctrina-local action grammar |
| Física de velocidad en vez de "fast" | `each stride at full extension`, `twice its height` | ✅ OSideMedia |
| Presente continuo activo | `tumbles, billows, flaps, climbs` — nunca estados ("standing", "misty") | ✅ OpenArt |
| `violently, explosively` | ⚠️ una fuente (higgsfield-motion skill); usar con moderación en este estilo |

### Animación de personajes (el bloque "cobrar vida")

| Principio | Cómo se escribe (el modelo NO entiende la etiqueta, sí la física) | Evidencia |
|---|---|---|
| Estados, no transiciones | personaje **ya EN acción**: `mid-stride, arms mid-swing`, `mid-turn` — nunca "standing" ni el proceso de llegar | ✅ acting skill |
| Anticipación | `she gathers herself for a beat, THEN springs` / `dips its head BEFORE taking off` | ✅ |
| Follow-through / drag | `his paper cloak keeps swinging one beat longer and settles`, `shoulders follow a beat behind the head` | ✅ |
| Arcos | `sweeps its arm in a wide arc`, `climbs in a curved path` | ✅ |
| Walk stop-motion | `deliberate stop-motion gait, each step a distinct held pose, weight rocking foot to foot` | ✅ |
| Mecánica de puppet (la vía anti-morphing) | `hinged gestures`, `jointed limbs pivot at paper hinges`, `built from separate overlapping parts` — movimiento amplio legitimado por la mecánica real del recorte | ✅ MiniMax + Reiniger |
| Ojo/rostro vivo | `eyes blink and dart in small saccades; thought readable in the eyes` ("dead eyes are the number-one AI tell") | ✅ acting skill |
| Reacciones con verbo | `turns, waves, gasps, points, recoils, claps, presses a finger to lips` — escritas en el beat, cronometradas | ✅ doctrina-local kids interplay |
| Física, no emoción | `jaw clenches`, `fingers tighten on the staff` — no "looks solemn" | ✅ |
| Squash & stretch | ⚠️ solo vía material (`the ribbon compresses at impact, springs back`) — es el principio que más pelea con "no morphing" |
| Escala de detalle por plano | micro-detalle (dedos, mandíbula) en CU; arcos amplios en WIDE | ✅ |

### Materiales vivos (papel / fibra / agua)

| Elemento | Frases probadas | Evidencia |
|---|---|---|
| Agua | `tiered paper water ribbons slide downward at different speeds like pull-tab strips`, `tumble in large stepped frame-by-frame drops` | ✅ MiniMax (mecanismos pull-tab) + nuestro v3 |
| Espuma | `torn-paper foam bursts outward on impact, settles with a tiny rebound`, `foam blocks buckle and collapse one after another` | ✅ |
| Niebla | `cotton-fiber mist advances in stepped puffs — each swells, holds a beat, releases; a lateral gust drags the top sideways` | ✅ |
| Vida de superficie ("boil" de papel) | `paper edges tremble slightly between frames; fibers ripple as if blown between exposures` | ✅ BFI (imperfección stop-motion) — describir, nunca la jerga "boil" |
| Estructura | `layered cardboard cutouts with visible thickness, faint card-stock core at cut edges, real contact shadows between layers` | ✅ |
| Mecanismos escénicos | `paper clouds on rails`, `layered scenery shifting in parallax`, `pop-up unfold`, `rotating paper disc` | ✅ MiniMax |
| Tela/ropa | `the paper cloak lags half a beat and snaps behind him`, `mantle swings past the turn and settles` | ✅ |

### Atmósfera / ambiente

| Frase | Evidencia |
|---|---|
| `paper dust motes drifting through the light shaft` | ✅ doctrina-local (Paper Diorama: "dust drifting through a tungsten beam") |
| `parallax separation: foreground paper fronds drift faster than the midground; the background cliff barely moves` | ✅ multiplane |
| `foreground occlusion: paper leaves brush past the lens edge` | ✅ Naviya |
| `warm tabletop lighting with deep real shadows` | ✅ |
| `slightly stuttery 12fps stop-motion feel` / `animated on twos` | ✅ OpusClip + doctrina-local (verificado con testing) |
| `Aardman style`, `Laika aesthetic` | ⚠️ token útil en claymation según OpusClip; en papel, mejor la descripción |

---

## 4. Anti-patrones

1. **Negativos que describen movimiento.** "The characters only breathe and gesture softly", "no sudden movements", "subtle motion only" → el modelo los ejecuta como coreografía de quietud. Los negativos solo pueden ser de estética/material (NOT-list). **Esta sola cláusula explica gran parte de v1.**
2. **Adjetivos vacíos y peticiones vagas**: "cinematic, epic, dynamic, lots of movement, make it move" → o clip tímido genérico o jitter.
3. **"fast"** y cámara rápida + detalle fino → degradación y pérdida de textura de papel. La velocidad se describe con física, no con el adjetivo.
4. **Re-describir el start_image** (v1 gastaba media plantilla en materia quieta) → inputs en competencia, atención robada a la acción, drift.
5. **Amplitud no declarada** → el modelo elige la mínima. "rising slowly" (v1) es una instrucción de amplitud micro; sin "large/burst/erupts" no hay vida.
6. **Todo a la vez, sin timeline** → ejecución aleatoria de 4-5 de 8 instrucciones (v3 lo rozó); o todo amontonado en un frame. Máximo 1 dominante + 2 secundarias, repartidas por timestamps.
7. **Dos gramáticas de cámara** (locked-off + orbit; dolly + pan sueltos) → jitter/"AI soup". Una conducta, dicha una vez.
8. **Poses sostenidas >2.5s y aperturas congeladas** → "reads as a slideshow". Motion starts on frame 1; el cierre es "settled, still micro-moving", nunca frozen.
9. **Dos trabajos incompatibles en un prompt** (física de cascada + micro-actuación de personaje) → generar por separado y montar en edición.
10. **Jerga sin traducir**: "anticipation", "follow-through", "boil", "ease-in/ease-out", "PES style" como etiquetas no hacen nada; sus *descripciones físicas* sí. Excepciones-token fuertes: `stop-motion`, `cutout animation`, `on twos / 12 fps`.
11. **OTS sin personaje nombrado** → el modelo inventa una persona (fatal con nuestro "no people").
12. **"no 3D render" en el NEGATIVE** de un estilo dimensional de papel → pelea contra el bajo relieve real. Mantener solo "NOT photorealism".

**Autopsia de v1 en una frase**: abría gastando la atención máxima en estilo estático, no declaraba amplitud ("pours", "rising slowly" = micro), no tenía timeline ni causa→consecuencia, apilaba materia quieta que competía con el keyframe, y cerraba con una orden literal de que los personajes solo respiraran.

---

## 5. Tres prompts de ejemplo listos para producción

### (a) Cascada del Tequendama (5s, 9:16, start_image) — supera a v3

```
Handcrafted paper-maquette stop-motion, animated on twos (~12 fps): deliberate stepped motion with tiny holds and slight rebounds, as if repositioned by hand between exposures. @Image 1 is the first frame: composition, palette, materials and lighting stay locked to it. Motion starts on frame 1, no opening freeze.
[0-2s] The newborn waterfall bursts through the split rocks: tall paper water ribbons tumble in large stepped drops, each ribbon at a different rhythm, and SLAM into the rock shelf — torn-paper foam whumps upward on every impact.
[2-4s] The spray strikes the ledge first; then two hinged paper birds startle, flap in stepped beats along curved arcs and exit frame left; cotton-fiber mist swells in thick puffs and a lateral gust drags its crown sideways.
[4-5s] The tallest ribbon snaps taut and settles with a small rebound; mist keeps drifting — settled, still micro-moving.
Camera: one slow crane-up with tilt, beginning as the first foam burst rises, ending level with the crest; foreground paper fronds drift faster than the far cliff, clear parallax between paper planes.
Foam only accumulates, never resets; moss fibers tremble on every impact; paper edges shiver slightly between frames.
Every surface remains visibly cut paper, cardboard and natural fiber with raised edges and real contact shadows. Motion is large and continuous; forms stay stable.
NOT smooth motion, NOT fluid interpolation, NOT slow-motion, NOT motion blur, NOT liquid simulation, NOT photorealism, no morphing, no melting, no text, no extra people, no rainbow.
```

*Por qué*: conserva lo que hizo ganar a v3 (ritmos distintos, fauna reactiva, paralaje) pero cronometrado en 3 beats con causa→consecuencia (impacto→espuma→espanto), un impact beat nombrado (SLAM/whumps), amplitud declarada ("bursts", "large stepped drops"), cámara única motivada con endpoint, y cierre "settled ≠ frozen". Cero materia estática: cada material aparece pegado a su verbo.

### (b) Bochica en la roca (retrato, 5s) — cobra vida sin morphing

```
Handcrafted paper-maquette stop-motion, animated on twos (~12 fps): deliberate stepped motion with tiny holds and slight rebounds, as if repositioned by hand between exposures. @Image 1 is the first frame: it defines Bochica's construction — a jointed cut-paper puppet of separate overlapping parts pivoting at paper hinges — his pose, the rock, palette and lighting. Motion starts on frame 1, no opening freeze.
[0-2s] Bochica stands mid-breath, chest rising in visible stepped increments; a strong gust sweeps through — his woven paper mantle lifts, lags half a beat behind the wind and SNAPS outward; paper hair strands whip and release, never static.
[2-4s] His fingers tighten around the wooden staff one by one; he plants the staff on the rock with a firm stamp, weight shifting onto it, shoulders squaring a beat after the arm.
[4-5s] He lifts his chin toward the falls in three stepped increments, eyes blinking once and narrowing; the mantle swings past the turn and settles with a small rebound — settled, still micro-moving.
Camera: one slow push-in from waist-up to chest-up, beginning as the gust hits, ending on his face and the gripping hand.
Cloth and hair always lag the wind and settle late; fibers ripple as if blown between exposures.
Every surface remains visibly cut paper, cardboard and natural fiber with raised edges and real contact shadows; his face, garments and proportions stay exactly as in @Image 1 in every frame. Motion is large and continuous; forms stay stable.
NOT smooth motion, NOT fluid interpolation, NOT slow-motion, NOT motion blur, NOT photorealism, no morphing, no melting, no lip-sync, no talking, no text, no extra people.
```

*Por qué*: el personaje arranca **ya en estado** (mid-breath) y encadena beats de física observable (dedos que aprietan, stamp del bastón, giro en 3 incrementos con hombros en drag) — la receta oficial anti-estatismo. La mecánica de puppet articulado ("hinges, separate overlapping parts") legitima movimiento amplio sin invitar morphing, y la identidad se protege con invariante positivo por referencia ("exactly as in @Image 1"), no frenando la acción. El candado anti-habla es el de Higgsfield ("no lip-sync, no talking"), nunca un limitador de energía.

### (c) Fila de familias subiendo la loma bajo la lluvia (5s, de espaldas)

```
Handcrafted paper-maquette stop-motion, animated on twos (~12 fps): deliberate stepped motion with tiny holds and slight rebounds, as if repositioned by hand between exposures. @Image 1 is the first frame: the line of families seen from behind, the hillside, palette and rain lighting stay locked to it. Motion starts on frame 1, no opening freeze.
[0-2s] The whole line climbs with a deliberate stop-motion gait — each figure steps at a slightly different beat, staggered, never in unison — weight rocking foot to foot, bundles swaying on their backs; thin paper rain streaks slide down in stepped increments across the frame.
[2-4s] A gust drives the rain diagonally: woven paper cloaks and skirt fringes stream sideways, lagging each stride and snapping back; one child stumbles a half step and is pulled up by the hand, the pair resuming the climb.
[4-5s] The lead figures crest the hill as mist puffs roll over the top; the line keeps climbing — settled rhythm, still moving.
Camera: one slow tracking follow up the slope behind the line, slightly handheld, ending with the crest entering the top of frame; foreground grass tufts drift past faster than the far ridge, clear parallax.
Rain streaks always fall, never pause; cloak fibers ripple as if blown between exposures; every footfall lands as a distinct held pose.
Every surface remains visibly cut paper, cardboard and natural fiber with raised edges and real contact shadows. Motion is large and continuous; the number and design of figures stay exactly as in @Image 1. Forms stay stable.
NOT smooth motion, NOT fluid interpolation, NOT slow-motion, NOT motion blur, NOT photorealism, no morphing, no melting, no cloned or extra figures, no faces turning to camera, no text.
```

*Por qué*: el peligro de multitudes es el paso flotante en sincronía y la clonación — se resuelve con gait stop-motion "staggered, never in unison" + cada pisada como pose sostenida, e invariante positivo del número de figuras (más "no cloned or extra figures" como estética). El micro-evento humano (el niño que tropieza y es alzado, causa→consecuencia) da la "vida" narrativa; la lluvia es materia en movimiento perpetuo ("always fall, never pause") que garantiza que ningún frame quede muerto.

---

## 6. Cambios recomendados al pipeline

**plantillas-prompts.md §2** (reescritura completa):
1. Sustituir la plantilla de 4 partes por la de 7 líneas de §2, con las líneas 1, 6 y 7 como bloques **byte-idénticos** del canal (el mecanismo entero de consistencia de la doctrina Higgsfield es la fórmula idéntica repetida).
2. Eliminar "The characters only breathe and gesture softly" y añadir a la plantilla la lista de sustitutos: candado anti-habla ("no lip-sync, no talking" en el NEGATIVE) + reacciones con verbo en los beats.
3. Quitar "no 3D render" del negativo del canal (estilo dimensional); mantener siempre "NOT photorealism". Añadir el bloque anti-suavidad: "NOT smooth motion, NOT fluid interpolation, NOT slow-motion, NOT motion blur".
4. Añadir dos "gates" de QC de guion: el **verb test** (si un beat puede escribirse sin verbo, es decoración — reescribir) y **before/after** (cada clip muestra un cambio de estado visible). Y un gate técnico: si la apertura del clip llega estática, se regenera, no se publica.
5. Documentar la regla "dos trabajos incompatibles = dos generaciones" (física de entorno vs. actuación de personaje) con montaje en edición.

**direccion-cinematografica.md §4**:
1. Regla de cámara: UNA conducta por clip, dicha una vez, **motivada por un evento visible** y **con endpoint nombrado**; opcional un modificador de textura ("slightly handheld"). Compuestos coherentes (crane-up con tilt) permitidos; gramáticas mezcladas prohibidas. Prohibidos en este estilo: 360 orbit, vuelos rápidos, whip-pan, zoom rápido.
2. Tabla de ángulos legales sin personaje (overhead, macro, lateral, low/high) y prohibición de OTS sin personaje nombrado.
3. Variedad entre clips consecutivos del mismo video: no reabrir cada clip en el mismo wide de establecimiento; alternar tamaño y ángulo (ley anti-"samey footage").
4. Paralaje como herramienta estándar: pedir siempre la separación de 3 planos de papel dentro del movimiento único.

**Parámetros del modelo y ensamblaje**:
- **Duración 5s, oner, sin cortes** como default (decisión de §2.5); variante 2-shots con `HARD CUT` solo como A/B en escenas que pidan salto de escala.
- **Verificar en la UI de Higgsfield la resolución real de Seedance 2.5**: el skill de OSideMedia afirma que 2.5 solo expone 480p/720p (1080p sería de 2.0) — contrasta con nuestros params actuales. Si 1080p no está disponible en 2.5, generar a 720p + upscale, porque la calidad del start image sí afecta la calidad del movimiento (mantener el keyframe a máxima resolución siempre).
- **generate_audio: mantener OFF** (voz/música van en el ensamblaje local; el SFX diegético de la doctrina Higgsfield no aplica a nuestro pipeline mudo).
- **end_image: no adoptar por ahora** — ningún informe aporta evidencia para 2.5 en Higgsfield; el control de estado final se logra con el "end state" del beat [4-5s]. ⚠️ especulativo, probar solo si un clip necesita empalme exacto con el siguiente.
- **Referencia de movimiento (@Video): adoptar como herramienta de rescate.** Para escenas que sigan tímidas tras v2 de la doctrina: adjuntar un clip de 5s (cascada real o stop-motion de stock) declarado con exclusión — "Use @Video 1 only for the water's motion rhythm and camera move; take no visual style from it. Materials and identity come from @Image 1." Es la ventaja única del sistema multirreferencia de Seedance.
- **Ensamblaje: añadir retimeado stepped opcional** replicando el `--stepped 12` de la doctrina Higgsfield con ffmpeg (`-vf "fps=12,fps=30"` o select+setpts): el prompt da el carácter on-twos, el post garantiza la cadencia matemáticamente y esconde el over-smoothing residual. Probar en la cascada antes de adoptarlo como default (verificado en el testing de ellos, no en el nuestro).
- **QC objetivo de movimiento**: registrar el peso del archivo por clip como proxy de movimiento real (v3 = 2.3x v1 ya lo validó) y añadir un probe de apertura estática (comparar frame 0 vs frame ~12); opcionalmente `ffprobe` con detección de escena para confirmar que un oner no metió cortes espurios.