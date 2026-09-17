# Anexo: informes de investigación (2026-08-31)

Cinco informes que alimentaron . Investigación con agentes web + el manual interno del MCP de Higgsfield (workflow faceless-video v2.4, tipo Fairy Tale & Myth).


---

# INFORME: seedance-oficial

# Informe: mejores prácticas oficiales de prompting para Seedance (foco: i2v 2.0/2.5, más dinamismo sin perder estilo)

## 0. Estado de las fuentes oficiales

Las guías oficiales existen y están localizadas, pero las páginas de docs de BytePlus/Volcano se renderizan con JS y no se pudieron extraer en crudo; su contenido se recuperó vía espejos e interpretaciones fieles (citadas en cada sección):

- **Guía oficial Seedance 1.0 pro**: https://docs.byteplus.com/en/docs/ModelArk/1631633
- **Guía oficial "Dreamina Seedance 2.0 series prompt guide"**: https://docs.byteplus.com/en/docs/ModelArk/2222480 — espejo chino oficial: https://docs.volcengine.com/docs/82379/2222480?lang=zh ("Doubao Seedance 2.0 系列提示词指南")
- **Artículo oficial Volcano Engine** (guía de escritura t2v 2.0): https://www.volcengine.com/article/40840
- Copia íntegra del oficial 2.0 en Zhihu (bloqueada 403 para fetch, existe): https://zhuanlan.zhihu.com/p/2050274027709768829

---

## 1. Estructura de prompt recomendada oficialmente

**Fórmula oficial 2.0 (6 pasos)** — vía interpretación de la guía oficial ([apiyi](https://help.apiyi.com/en/seedance-2-0-prompt-guide-video-generation-camera-style-tips-en.html)):

> "[Subject], [Action], in [Environment], camera [Camera Movement], style [Style], avoid [Constraints]" — **60–100 palabras**; "excessive length degrades quality" y "Use only one primary camera instruction".

**Fórmula avanzada china oficial** ([Volcano Engine](https://www.volcengine.com/article/40840)):

> "精准主体 + 动作细节 + 场景环境 + 光影色调 + 镜头运镜 + 视觉风格 + 画质 + 约束条件" (sujeto preciso + detalle de acción + entorno + luz/tono + movimiento de cámara + estilo visual + calidad + restricciones). Advierte: "过长冗余的信息可能干扰模型判断" (la información redundante y excesiva puede interferir el juicio del modelo).

**Fórmula i2v oficial de Seedance 1.0** (la más citada, sigue vigente en 2.x) — vía [AIMLAPI](https://aimlapi.com/blog/master-your-video-creations-with-seedance-1-0-lite-a-comprehensive-prompt-guide):

> "Prompt = subject + movement, background + movement, camera + movement"

Es decir: en i2v **cada elemento del prompt debe llevar un movimiento pegado**. **Aplica directo a tu caso**: tu plantilla actual dedica la parte [3] entera a materia estática (papel/cartón/fibras) — según esto, cada mención de materia debería ir acompañada de su verbo de movimiento ("cotton-fiber mist *billowing*", no "cotton-fiber mist").

**Peso de atención**: "Seedance reads the prompt left-to-right with diminishing attention weight" — sweet spot 50–80 palabras para un solo plano ([skill Seedance 2.0 de OSideMedia](https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/main/skills/higgsfield-seedance/SKILL.md)). **Aplica**: tu "apertura de estilo" ([1]) consume el tramo de máxima atención; la acción debería ir antes o fundida con el estilo.

---

## 2. Vocabulario de cámara que el modelo entiende de verdad

- [fal.ai (guía 2.0)](https://fal.ai/learn/tools/seedance-2-0-prompting-guide): "Dolly, pan, tilt, crane, push-in, rack focus, locked-off, the model reads all of these cleanly" + arc (around a subject), tracking (alongside action), handheld.
- [Higgsfield](https://higgsfield.ai/blog/seedance-2-5-on-higgsfield-2026) (vía búsqueda): "dolly in, truck left, arc shot, push in, pull back wide, handheld follow, crane up, orbital move".
- Los 8 tipos oficiales (apiyi): dolly in / dolly out / pan / tracking-follow / orbit-arc / aerial-drone / handheld / locked-off.
- Velocidad: palabras rítmicas, no parámetros técnicos. Escala oficial: imperceptible/barely → slow/gentle/gradual → smooth/controlled → dynamic/swift (esta última "often degrades quality"). "Fast" es "the highest-degradation keyword" (skill OSideMedia): en vez de rápido, **describe la física de la velocidad**.

**Reglas clave para pedir MÁS dinamismo sin romper**:
1. **Un solo movimiento primario de cámara + un modificador de textura** ("slightly handheld"). "A dolly+pan together produces jitter" (skill OSideMedia). Tu v3 (grúa+tilt) roza el límite; funciona porque es un movimiento compuesto coherente, pero no añadas un tercero.
2. **"Name the camera endpoint"** — di qué muestra el encuadre al terminar el movimiento, no solo el nombre del movimiento (skill OSideMedia).
3. **Ancla la cámara a un evento visible**, no a adjetivos: "The camera does not pan until the ball has fully left both hands" ([fal.ai guía 2.5](https://fal.ai/learn/devs/seedance-2-5-prompting-guide)).
4. Términos nicho tradúcelos a resultado observable: "Rack focus: shift focus smoothly from the leaves in the foreground to the person in the background. The leaves gradually blur while…" ([skill 2.5 OSideMedia](https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/main/skills/higgsfield-seedance-2-5/SKILL.md)).

---

## 3. Image-to-video: cómo hacer que el start_image cobre vida

**Hallazgo central (oficial 1.0, confirmado en 2.x)** — [AIMLAPI](https://aimlapi.com/blog/master-your-video-creations-with-seedance-1-0-lite-a-comprehensive-prompt-guide):

> "The model cannot infer motion intensity from an image, so explicitly state it in your text prompt." Adverbios de grado oficiales: **fast, intense, large, high frequency, strong, crazy** — y "Minimize Static Descriptions: since the video already has a scene, focus on describing the moving parts."

**Aplica directo**: tu keyframe de cascada es una foto de papel quieto; si el prompt no declara amplitud, el modelo elige la mínima. Ese es el diagnóstico de fondo de tus v1/v2.

**Tres niveles de amplitud (guía china)** — [seedance2-skill zh](https://github.com/dexhunter/seedance2-skill/blob/main/zh/SKILL.md):

> "微幅度：微风吹动、轻微呼吸般晃动、缓缓流动 / 中幅度：转身、迈步、抬头 / 大幅度：跳跃、翻滚、奔跑、环绕旋转" (micro: brisa, vaivén como respiración, fluir lento / media: girarse, dar un paso, alzar la vista / grande: saltar, rodar, correr, rotación envolvente). Y la clave: "运镜词+幅度词+动作词三位一体才能激发动感" (verbo de cámara + palabra de amplitud + verbo de acción, los tres juntos, es lo que enciende el dinamismo).

**No re-describas la imagen** — [Our Code World](https://ourcodeworld.com/articles/read/3199/a-developer-s-guide-to-writing-image-to-video-prompts-for-seedance-2-0): "The model sees the image… Your prompt tokens go on what changes over time, not what exists." El skill de OSideMedia lo endurece: prompts i2v = "motion + camera only"; re-describir crea inputs en competencia y drift. **Aplica**: tu parte [3] de materia debería encogerse a una cláusula de preservación ("every surface remains visibly cut paper…") y ceder sus palabras a acción.

**Sin instrucción de cámara el modelo se apaga** — [PromeAI cheat sheet](https://www.promeai.pro/blog/seedance-2-0-camera-movement-cheat-sheet/) (vía snippet, página 403): "without a camera instruction the model usually adds minimal drift and calls it done".

**Mecanismo antes que intensidad (2.5)** — [fal.ai 2.5](https://fal.ai/learn/devs/seedance-2-5-prompting-guide): en vez de "gentle movement", "the butter softens slightly and slides only a few millimeters before stopping". Y **la física necesita consecuencia**: "Physics needs a consequence to chase: 'Leaves scatter on each impact'… gives the model something concrete to resolve toward" ([fal.ai 2.0](https://fal.ai/learn/tools/seedance-2-0-prompting-guide)). **Aplica directo a la cascada**: tus ráfagas de espuma de v3 funcionan porque son causa→consecuencia; generaliza el patrón (contacto → salpicadura → asentamiento).

**Escribe la causa antes de la reacción** (fal 2.5): "The cup tips only after contact, strikes the counter, and coffee begins spreading…". Para tus aves de papel: primero el golpe de agua en la roca, luego el espanto.

**Sintaxis Higgsfield 2.5 (omni_reference)** — el start frame es una frase de rol, no un modo: "@Image 1 is the first frame. It defines the opening composition, subject position, pose, prop state, scene, and camera direction" + exclusión explícita de lo que NO debe copiar ([skill 2.5 OSideMedia](https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/main/skills/higgsfield-seedance-2-5/SKILL.md)). Nota: ese skill afirma que 2.5 en Higgsfield solo expone 480p/720p (1080p/4K serían de 2.0) — contrasta con vuestros params; verificadlo en la UI.

---

## 4. Multi-shot dentro del clip (2.x)

- Cortes: escribir literalmente **"cut to"** / etiquetas **"Shot 1 / Shot 2"**; el modelo mantiene consistencia entre cortes ([fal.ai 2.0](https://fal.ai/learn/tools/seedance-2-0-prompting-guide), [Morphic](https://morphic.com/resources/how-to/seedance-2-guide)).
- Beats SIN corte: corchetes por segundos — "[0-3s subject enters], [3-7s camera pushes in]" no dispara cortes; los cortes requieren etiquetas Shot N (skill OSideMedia 2.0). En 2.5, bloques de tiempo donde "each block picks up the physical state left by the one before it" (fal 2.5).
- **Aritmética de duración**: las acciones deben caber en el tiempo; "内容过载 — 4秒内塞入太多场景" (sobrecarga: demasiadas escenas en 4 s) es error listado (seedance2-skill zh).

**Aplica**: en clips de 5 s NO uses cortes; usa un "oner" con 2–3 beats en corchetes de segundos, movimientos **unidireccionales** ("Unidirectional motion only… reversals occur when action finishes early and the model fills remaining clip time" — skill OSideMedia). Tus tilts lentos que sobran tiempo explican clips que "rellenan" con quietud.

---

## 5. Errores documentados que producen video estático (checklist)

1. **Adjetivos vacíos** ("cinematic, epic, amazing", "lots of movement" — oficial 2.0 lo marca como "too ambiguous"). Sustituir por referentes concretos (apiyi; skill OSideMedia).
2. **Negativos en el cuerpo del prompt**: "Seedance has no negative-embedding architecture. Use positive constraint statements: 'Face stable. Limbs anatomically natural.'" (skill OSideMedia). **Aplica directo**: tu bloque [4] de negativos ("No morphing, no melting…") es débil como negación y, peor, tu frase "The characters only breathe and gesture softly" es una **instrucción positiva de quietud** que el modelo obedece — es el asesino identificado de la animación. Reemplázala por verbos de acción concretos por personaje.
3. **Verbos débiles**: "'A stunning dancer' fails; 'a dancer dropping into a low spin, the skirt flaring, then snapping upright' succeeds" (fal 2.0).
4. **Cámara múltiple/conflictiva** y "fast" sin constreñir el resto (oficial vía apiyi).
5. **Un solo verbo de acción principal por clip**; varias acciones → clips separados ([sagnikbhattacharya](https://sagnikbhattacharya.com/blog/fix-bad-motion-seedance)); jitter con intensidad muy baja o duración corta → subir amplitud levemente.
6. **Falta de dimensión temporal**: "忽视时间维度 — 不按时间线安排动作节奏" (ignorar la línea de tiempo del ritmo de acción) (seedance2-skill zh).
7. **Calidad del start image**: "source image quality directly affects motion quality" — máxima resolución, sujeto separado del fondo (sagnikbhattacharya).

---

## 6. Preservar el estilo maqueta mientras todo se mueve

- [Higgsfield, biblioteca de animación 2.0](https://higgsfield.ai/blog/guide-animation-seedance2.0): el patrón para claymation/craft es **describir el material DEL efecto en movimiento**: "fire is sculpted from orange-red clay ribbons, smoke is grey clay wisps", "visible fingerprint and tool marks on clay forms". **Aplica directo**: es exactamente tu v3 (cintas de agua de papel, niebla de algodón) — la doc confirma que el estilo se sostiene nombrando el material de cada elemento móvil, no frenando el movimiento.
- Registro estilizado: "stylized work (anime, stop-motion) drops PHYSICS/skin realism and keeps SHOT beats + continuity + medium lock" — usa un **Style Prefix idéntico pegado a cada prompt** de la serie (skill OSideMedia 2.0). Tu parte [1] cumple ese rol: mantenla corta, idéntica y al frente, y pon el "medium lock" como constraint positivo al final.
- Cadencia stop-motion como descriptor temporal explícito funciona ("frame-by-frame", "stepped increments" de tu v2 van en la dirección documentada; combínalos con amplitud grande, no en su lugar).

---

## 7. Receta v4 sugerida para la cascada (síntesis de todo lo anterior, 5 s, oner)

Estructura: estilo breve → beats con causa→consecuencia y amplitud declarada → cámara única con endpoint → constraints positivos.

> Handcrafted paper-maquette stop-motion. [0-2s] The newborn waterfall bursts through the opened rocks: tall paper ribbons tumble downward in large, stepped frame-by-frame drops, each ribbon at a different rhythm. [2-4s] Where water strikes the rock shelf, cotton-fiber foam erupts upward in thick puffs; two cut-paper birds startle from the ledge and flap out of frame left. [4-5s] Crane up with slow tilt, ending on the crest framed against the mist — paper mist drifting laterally in gusts, moss fibers trembling. Every surface remains visibly cut paper, cardboard and natural fiber with raised edges and real micro-shadows. Composition and palette stay locked to the start image. Motion is large and continuous; surfaces stay stable.

---

## Fuentes

- https://docs.byteplus.com/en/docs/ModelArk/2222480 (oficial 2.0, JS)
- https://docs.byteplus.com/en/docs/ModelArk/1631633 (oficial 1.0 pro, JS)
- https://docs.volcengine.com/docs/82379/2222480?lang=zh (oficial CN, JS)
- https://www.volcengine.com/article/40840 (oficial Volcano Engine)
- https://help.apiyi.com/en/seedance-2-0-prompt-guide-video-generation-camera-style-tips-en.html (interpretación guía oficial 2.0)
- https://fal.ai/learn/tools/seedance-2-0-prompting-guide
- https://fal.ai/learn/devs/seedance-2-5-prompting-guide
- https://aimlapi.com/blog/master-your-video-creations-with-seedance-1-0-lite-a-comprehensive-prompt-guide (fórmula i2v oficial 1.0)
- https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/main/skills/higgsfield-seedance-2-5/SKILL.md (Higgsfield 2.5 / omni_reference)
- https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/main/skills/higgsfield-seedance/SKILL.md (reglas de motor 2.0)
- https://higgsfield.ai/blog/guide-animation-seedance2.0 (estilos craft/claymation)
- https://higgsfield.ai/blog/seedance-prompting-guide
- https://github.com/dexhunter/seedance2-skill/blob/main/zh/SKILL.md (guía CN, amplitudes 微/中/大)
- https://ourcodeworld.com/articles/read/3199/a-developer-s-guide-to-writing-image-to-video-prompts-for-seedance-2-0
- https://sagnikbhattacharya.com/blog/fix-bad-motion-seedance
- https://morphic.com/resources/how-to/seedance-2-guide
- https://www.seedance.tv/blog/seedance-2-0-prompt
- https://www.cnblogs.com/hogwarts/p/19636288
- https://www.promeai.pro/blog/seedance-2-0-camera-movement-cheat-sheet/ (403; citado vía snippet)
- https://zhuanlan.zhihu.com/p/2050274027709768829 (copia del oficial 2.0; 403)

---

# INFORME: higgsfield-generate

# Informe: Higgsfield /generate, cámara y prompting de Seedance 2.5 (para clips con más "vida" sin romper el estilo papel)

## 1. Cómo funciona /generate en la web de Higgsfield

**Flujo base** (help center oficial): eliges medio (Image/Video) → modelo → prompt → referencias → ajustes (duration, aspect ratio, resolution) → Generate. Fuente: [How do I create my first generation](https://higgsfield.ai/creator-hub/help-center/getting-started/how-do-i-create-my-first-generation).

**Campos que expone el flujo Seedance en la web** ([How do I use Seedance](https://higgsfield.ai/creator-hub/help-center/ai-models/how-do-i-use-seedance), [Seedance 2.5 on Higgsfield 2026](https://higgsfield.ai/blog/seedance-2-5-on-higgsfield-2026), [product page 2.5](https://higgsfield.ai/seedance/2.5)):
- Prompt + referencias (2.0: hasta 9 imágenes / 3 videos / 3 audios; 2.5: hasta 50 materiales), duración (hasta 30 s), aspect ratio (incluye "Auto"), resolución 480p/720p/1080p + upscale 4K, bitrate.
- **Selectores previos al prompt (2.5, solo web)**: *era* (década 1960s–2020s), *genre* (fija pacing/contraste/comportamiento de cámara), *Soul Hex* (paleta por hex), *lighting* (fuente + ángulo manual), *camera/lens* (24mm, anamórfico, macro) + *emotional tone* ("calm to dread"), *physics* ("realistic, superhero, hyperbolic"), *Seedance motion control* ("set a camera path and subject movement; the model executes it frame by frame"), pacing de montaje. **Estos selectores son condicionamiento extra que el MCP no aplica.**
- Sintaxis de referencias: `@character`, `@style`, `@motion` (replica el comportamiento de cámara de un clip de video), `@audio`.

**El prompt enhancer**: existe como botón **"Enhance"** en la caja de prompt (opt-in, no silencioso) y "convierte tu prompt en una versión AI-friendly que incluye detalles relevantes al tipo de movimiento seleccionado" — es decir, inyecta descripciones elaboradas de flotación, viento, atmósfera, etc. ([Kapwing walkthrough](https://www.kapwing.com/resources/how-to-use-higgsfield-ai-video-generator/)). Además hay un flujo "Supercomputer" que toma ideas vagas y "fills in the details, checks the plan with you" ([How do I write a good prompt](https://higgsfield.ai/creator-hub/help-center/getting-started/how-do-i-write-a-good-prompt)). La estructura a la que reescribe es la misma que Higgsfield predica en sus guías: **el prompt de video es un shot list por bloques** — estilo/mood, cinematografía/cámara, luz/color, acción beat a beat, audio, lista de shots con duraciones.

## 2. Camera controls: los 50+ presets y si sirven como vocabulario en Seedance

- El catálogo ([higgsfield.ai/camera-controls](https://higgsfield.ai/camera-controls), [cheat sheet Memons](https://memons.ai/higgsfield-prompt-cheat-sheet)): Crash Zoom In/Out, Rapid Zoom, YoYo Zoom, Dolly In/Out/Left/Right, Super Dolly, Double Dolly, Dolly Zoom (vértigo), 360 Orbit, Arc Left/Right, Lazy Susan, Crane Up/Down/Overhead, Jib, FPV Drone, Whip Pan, Bullet Time, Snorricam, Robo Arm, Through Object In/Out, Object POV, Handheld, Head Tracking, Dutch Angle, Fisheye, Low Shutter, Hyperlapse, Timelapse, Focus Change, Static, etc.
- **Son presets seleccionables del producto DoP/click-to-video (botones "Change"/"Mix"), no parámetros de Seedance.** Pero el vocabulario sí funciona como texto dentro del prompt de Seedance: la propia guía de Higgsfield para Seedance usa `dolly in, truck left, arc shot, crane up, orbital move, whip-pan, orbit, handheld, locked-off, rack focus`, y Memons confirma que "the engine reads camera language directly" y recomienda **repetir el nombre del movimiento en el prompt** aun habiendo seleccionado preset.
- Regla oficial: **un movimiento principal por segmento de 5 s** ("Choose one principal move. Remove style terms that imply a different camera grammar" — [Elser prompt guide](https://www.elser.ai/news/seedance-2-5-prompt-guide)). Para términos raros, tradúcelos a resultado observable: "Rack focus: shift focus smoothly from foreground leaves to background person…".
- "Motion strength" como slider **no existe en Seedance 2.5 de Higgsfield**; existió en la API image2video antigua de Higgsfield vía Segmind (`motion_strength` 0.3–1.0) y en otras plataformas Seedance. En 2.5 la intensidad se controla 100 % por prompt. ([Segmind](https://www.segmind.com/models/higgsfield-image2video))

## 3. Recomendaciones oficiales de Higgsfield para Seedance 2.0/2.5

De la [guía 2.5](https://higgsfield.ai/blog/seedance-2-5-prompting-guide) y la [guía 2.0](https://higgsfield.ai/blog/seedance-prompting-guide):

1. **Estructura por secciones etiquetadas en un solo bloque**: GLOBAL STYLE → SCENE → CHARACTERS → LOCATION → FIRST FRAME AND BLOCKING → Shot 1..N (con "Hard cut") → OPTICS → PHYSICS → LIGHTING → AUDIO. "Skip a section and the output tends to fail in a specific, predictable way."
2. **Event tracks con timing sub-segundo**: "0.0s, mid swell rolling in; 1.2s, WAVE 1 strikes". Esto es lo que sustituye a la "acción principal + secundarias" de tu plantilla: se cronometra cada beat.
3. **La física se escribe como órdenes con consecuencia**: "Hair strands whip, tangle and release, never static"; "wetness only accumulates, never resets". fal.ai lo formula igual: "Motion is what the model animates, so spend your words on verbs" y "Physics needs a consequence to chase: 'Leaves scatter on each impact'" ([fal.ai guide](https://fal.ai/learn/tools/seedance-2-0-prompting-guide)).
4. **Negativos estilo "NOT"**: "NOT 3D-render, NOT plastic CGI sheen, NOT glossy synthetic, NOT video-game look" — exactamente el escudo que tu estilo papel necesita.
5. **2.0**: declarar arriba nº de shots, duración total y aspect ratio; cerrar POV con "No cuts, no zoom"; notación VFX inline `[VFX: …]`; para animación, dividir en segmentos cronometrados (0–3s, 3–6s…).
6. **Fixes documentados para movimiento tímido/estático** ([skill comunitaria basada en docs de Higgsfield](https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/main/skills/higgsfield-seedance-2-5/SKILL.md)): causa raíz = pareja sujeto+acción vaga. En vez de "the man runs" → "the man accelerates into a sprint while his jacket reacts to airflow". Un evento primario por etapa con **estado final observable** (`Initial state / Primary event / End state`). Si necesitas un ritmo concreto, adjunta un **video de referencia declarado explícitamente como guía de motion/pacing** (no de identidad) — Seedance 2.5 lo soporta.
7. En 2.5 los keyframes son **declaraciones de prompt, no un modo**: "@Image 1 is the first frame. It defines opening composition, subject position, pose, prop state, scene, and camera direction."
8. Debug de terceros coincide: 1 motion primario + 1 secundario y congela el resto; **no re-describas lo que ya está en el keyframe, describe solo el movimiento**; nunca mezcles gramáticas de cámara contradictorias ("static locked-off + fast orbit") ([promptzone](https://www.promptzone.com/videoweb_ai_f12213e577911/seedance-20-prompt-debugger-4-fixes-for-more-stable-ai-videos-1jk0), [fix-bad-motion](https://sagnikbhattacharya.com/blog/fix-bad-motion-seedance)).

## 4. Web /generate vs API/MCP — por qué la web sale "más viva"

- Higgsfield **no tiene REST API pública general**; las superficies programáticas son el MCP y el CLI ([flaq.ai](https://flaq.ai/blog/detail/Seedance-2-0-API-Higgsfield-AI-vs-Flaq-AI-for-Automated-Video-Generation-67ba92a0f444/)). El MCP expone para video: prompt, model, duration, aspect ratio, genre, frame controls — **sin parámetro de enhance ni selectores de era/lighting/physics/lens/tone** ([mcp.directory guide](https://mcp.directory/blog/higgsfield-mcp-guide), [blog oficial MCP](https://higgsfield.ai/blog/Generate-AI-Videos-From-Claude-with-Higgsfield-MCP)).
- La diferencia de vitalidad se explica por **tres capas de la web que el MCP no aplica**: (a) el botón Enhance que expande el prompt con detalle de movimiento; (b) los selectores 2.5 (genre fija *comportamiento de cámara y pacing*; physics "hyperbolic" amplifica; Seedance motion control traza ruta de cámara + movimiento de sujeto ejecutado frame a frame); (c) presets de motion en flujos DoP. El propio blog de Higgsfield asume que por MCP **el agente hace de enhancer**: "Claude interprets your intent… writes prompts in the specific format each model expects".
- **Conclusión operativa**: por MCP/pipeline, nadie reescribe tu prompt — tienes que entregar tú el prompt ya "enhanced" con la estructura completa de la sección 3. Tu plantilla de 4 partes es más corta que lo que la web genera tras Enhance; eso explica los clips tímidos tanto o más que el negativo "only breathe and gesture softly" (que además contradice frontalmente la regla "spend your words on verbs").

## Acciones concretas para la plantilla del canal (v4)

1. **Eliminar** "The characters only breathe and gesture softly" y cualquier "slow/gently/softly" no intencional — son anti-verbos.
2. **Reestructurar la plantilla de 4 partes a secciones etiquetadas**: GLOBAL STYLE (aquí vive el estilo papel + cadencia stop-motion como *shutter behavior*: "animated at 12 fps stop-motion cadence, visible frame-by-frame steps") · FIRST FRAME (referencia al keyframe: "@Image 1 is the first frame" y NO re-describir su contenido) · ACTION como **event track cronometrado** (0.0s–5.0s con 3–5 beats: "0.8s the crest strip buckles and tips over; 1.4s foam puffs burst on first rock impact; 3.2s two paper birds startle off the ledge") · OPTICS (un movimiento principal con inicio y fin: "crane up from base to crest, starting 2 m from the pool, ending level with the crest; light handheld tremor") · PHYSICS (órdenes con consecuencia: "paper water strips advance in stepped increments, never smooth; cotton mist only accumulates, never resets; moss fibers shiver on every impact") · NEGATIVOS estilo NOT ("NOT 3D render, NOT fluid simulation, NOT smooth interpolation, no morphing, no melting, no text, no people, no rainbow").
3. **Para personajes**: dirección emocional con 2–4 señales visibles y acciones con reacción de materia ("the paper cloak lags and snaps behind him") — es la receta oficial anti-estatismo.
4. **Considerar probar en la web** el selector physics="hyperbolic" y genre de acción en la escena de cascada, y adjuntar un clip corto de referencia declarado como "motion/pacing guide only" para imponer cadencia.
5. Tu v3 ya iba en esta dirección (paralaje + ritmos distintos + fauna reactiva); v4 = v3 + timing sub-segundo + estados finales por beat + un solo movimiento de cámara con origen/destino explícitos.

**Fuentes**: [Seedance 2.5 Prompting Guide (Higgsfield)](https://higgsfield.ai/blog/seedance-2-5-prompting-guide) · [Seedance 2.0 Prompting Guide (Higgsfield)](https://higgsfield.ai/blog/seedance-prompting-guide) · [Seedance 2.5 on Higgsfield 2026](https://higgsfield.ai/blog/seedance-2-5-on-higgsfield-2026) · [How do I use Seedance (help center)](https://higgsfield.ai/creator-hub/help-center/ai-models/how-do-i-use-seedance) · [How do I write a good prompt (help center)](https://higgsfield.ai/creator-hub/help-center/getting-started/how-do-i-write-a-good-prompt) · [How do I create my first generation (help center)](https://higgsfield.ai/creator-hub/help-center/getting-started/how-do-i-create-my-first-generation) · [Camera Controls (Higgsfield)](https://higgsfield.ai/camera-controls) · [Seedance 2.5 product page](https://higgsfield.ai/seedance/2.5) · [Higgsfield MCP blog (oficial)](https://higgsfield.ai/blog/Generate-AI-Videos-From-Claude-with-Higgsfield-MCP) · [OSideMedia higgsfield-ai-prompt-skill (Seedance 2.5 SKILL.md)](https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/main/skills/higgsfield-seedance-2-5/SKILL.md) · [Kapwing: How to Use Higgsfield](https://www.kapwing.com/resources/how-to-use-higgsfield-ai-video-generator/) · [Memons cheat sheet](https://memons.ai/higgsfield-prompt-cheat-sheet) · [Elser Seedance 2.5 guide](https://www.elser.ai/news/seedance-2-5-prompt-guide) · [fal.ai Seedance guide](https://fal.ai/learn/tools/seedance-2-0-prompting-guide) · [mcp.directory Higgsfield MCP](https://mcp.directory/blog/higgsfield-mcp-guide) · [flaq.ai API comparison](https://flaq.ai/blog/detail/Seedance-2-0-API-Higgsfield-AI-vs-Flaq-AI-for-Automated-Video-Generation-67ba92a0f444/) · [Segmind higgsfield-image2video (motion_strength)](https://www.segmind.com/models/higgsfield-image2video) · [Fix Bad Motion in Seedance](https://sagnikbhattacharya.com/blog/fix-bad-motion-seedance) · [Seedance Prompt Debugger](https://www.promptzone.com/videoweb_ai_f12213e577911/seedance-20-prompt-debugger-4-fixes-for-more-stable-ai-videos-1jk0)

---

# INFORME: comunidad

# Informe: técnicas probadas para movimiento vivo y expresivo en Seedance 2.x i2v (estilo maqueta de papel)

Investigación sobre guías oficiales (ByteDance/Dreamina), la documentación de Higgsfield, el skill-repo comunitario más completo de Seedance (OSideMedia, 32 sub-skills), guías de creadores (invideo, OpenArt, apiyi, heyuan, mindstudio) y recursos específicos de stop-motion/papercraft (OpusClip, MiniMax H3, Morphic). Nota: las búsquedas directas en Reddit no devolvieron hilos indexados accesibles; los hallazgos comunitarios provienen de repos de GitHub y blogs de creadores que consolidan esa experiencia.

---

## 1. El hallazgo más importante: tus "negativos" están matando la animación

El director-skill comunitario de Seedance 2.0 (OSideMedia) es categórico:

> "Seedance has **no negative-embedding architecture** — every token reads as positive instruction. Don't write `negative: jitter, bent limbs`. Instead, use positive constraint statements: 'Face stable. Limbs anatomically natural. Consistent lighting, no flicker.'"

Esto explica exactamente el problema de la plantilla del canal: **"The characters only breathe and gesture softly" no es un negativo — es una dirección de actuación literal que Seedance ejecuta**. Le estás pidiendo un clip donde los personajes solo respiran. Igual con "slowly", "softly", "gently" repetidos: cada uno reduce amplitud.

Regla derivada: los negativos de *estilo* cortos ("no photorealism, no text") aparecen incluso en la librería oficial de prompts de Higgsfield 2.5 ("NOT a clean CGI render… NOT plastic CGI sheen, NOT glossy synthetic") y funcionan; los negativos que *describen movimiento* son veneno. Reescribir la parte [4] de la plantilla como afirmaciones positivas: "Characters stay anatomically consistent paper puppets; edges and textures remain visible in every frame."

## 2. Cómo hacen los creadores que los personajes cobren vida (sin morphing)

Del acting-system de OSideMedia (`higgsfield-acting/SKILL.md`, aplicable a Seedance en Higgsfield):

- **Principio central**: "acting is BEHAVIOR under pressure, not a display of emotion." Se prompta un *objetivo* + *táctica* + *beats*, no un adjetivo emocional.
- **Estados, no transiciones**: "Describe characters **already IN** action states (mid-throw, mid-pace, mid-argument), never the process of arriving. Chain states beat by beat." Un personaje "mid-stride, arms mid-swing" se anima; uno "standing" se queda quieto.
- **Física observable en vez de emoción**: "Describe physics, not emotion ('jaw clenches' not 'looks angry')". Y del guía heyuan: en vez de "stunning dancer" → **"dancer dropping into a low spin, the skirt flaring, then snapping upright"** — "this gives concrete animation targets."
- **Ojo vivo obligatorio**: "Dead eyes are the number-one AI tell" — pedir micro-saccades, parpadeo, "eyes lead head; thought readable in eyes before words".
- **Escala de detalle según plano** (director-skill 2.0): "Micro-detail (finger tightening, jaw flex) for close-ups; broad arcs (crossing courtyards, crowds parting) for wides."
- **Movimiento unidireccional**: "Complete actions in one direction; a there-and-back is two shots."
- **Identidad sin morphing**: se separa identidad (imagen de referencia con rol explícito) de movimiento (texto o video de referencia). Guía oficial 2.5: "Use image 1 as the main character reference…" + "Preserve [identity, wardrobe]" repetido en cada beat. El guía de Higgsfield 2.5 lo repite por segmento: "Everything about her, face, skin, hair, armor… comes from the reference image and must stay the same in every shot."

## 3. Trucos de "motion intensity" (amplitud)

- **Los primeros 20–30 palabras pesan más** (invideo): poner la acción principal al frente, no la cláusula de estilo. Tu v1 abre con "Handcrafted paper-maquette stop-motion animation" — la apertura de estilo se come el presupuesto de atención. Meter el estilo como una "global style line" al final (mindstudio) o en la sección Look.
- **Presupuesto de beats** (higgsfield-motion skill): "1–2 distinct action beats every 5 seconds" (3–5s: 1–2 beats; 5–8s: 2–3). Tu v3 (grúa+cintas+ráfagas+aves+musgo en 5s) supera el presupuesto → el modelo ejecuta al azar 4–5 de 8 instrucciones (heyuan: "Instruction Overflow: too many requirements → random execution"). Mejor: 1 acción principal grande + 1 secundaria, y repartir el resto entre clips.
- **Secuencia temporal sí funciona, con timestamps más que con "first/then"**: timeline prompting (mindstudio) — `[0s] [2s] [4s]` con "one action and one camera instruction" por marca — "significantly increases the chance the model distributes elements across the clip" en vez de amontonarlas en un frame estático. En 2.5 los rangos "0-3s…" son "a budget the model approximates", no cortes exactos. OpenArt: "Describe scene change, not frozen moments… using present-continuous action verbs ('walks,' 'pulls,' 'drizzles')." El presente activo/continuo es el consenso.
- **Palabras que degradan**: "fast" es "the highest-degradation keyword" (director-skill 2.0); apiyi añade "lots of movement" (genera jitter) y adjetivos vacíos ("epic", "dramatic"). Solo UN elemento puede ser rápido por clip (issastash).
- **Lo que sí sube amplitud**: adverbios de grado ("violently, explosively") + **consecuencias físicas**: "dust erupts, sparks fly, debris scatters" (higgsfield-motion); "feet striking hard, each stride at full extension, arms pumping at 90 degrees" produce percepción de velocidad sin degradar (director-skill 2.0). Física con inercia (guía Higgsfield 2.5): "Real ground contact and weight transfer on every step… hair and cloth lag on spins and whips" — traducible a papel: "paper streamers lag half a beat behind the falling water".
- **Anti-estático explícito**: la librería 2.5 de Higgsfield exige por plano "moving camera and hard motion, no static holds", y usa "constant aggressive motion… kinetic movement" cuando el clip sale tímido.

## 4. Estilo artesanal (stop-motion / papercraft / claymation) en i2v — prompts reales

**Fórmula claymation de OpusClip** (la más citada, verbatim):

> "Stop-motion claymation [character or scene], [setting], [character action], visible clay texture and thumbprints, warm soft lighting, slight handheld camera movement, slightly stuttery 12fps animation feel, Aardman Animations style, miniature handcrafted set, [aspect ratio]."

Ejemplo completo:

> "Stop-motion claymation chef with oversized eyes and a white apron, kneading clay-textured bread dough on a tiny wooden kitchen counter, miniature handcrafted kitchen set with felt rugs and paper plants, warm afternoon window light, visible clay texture and thumbprints, slight handheld camera movement, slightly stuttery 12fps stop-motion feel, Aardman Animations style. 9:16 vertical."

Claves transferibles: **"slightly stuttery 12fps stop-motion feel"** (cadencia nombrada como frame-rate, no como "stop-motion cadence" vaga), referencia de estudio ("Aardman", "Laika studio aesthetic"), y el dato de que **Seedance es el mejor modelo para animar stills claymation/artesanales preservando textura** ("Seedance 2.0 — best for animating still claymation images").

**Vocabulario de movimiento papercraft del skill MiniMax H3** (el catálogo más útil que encontré para tu caso):

- Movimiento: "stepped movement, tiny pauses, slight rebounds, hinged gestures", "small stop-motion-like puppet gestures", "sliding paper mechanisms, page flips, pull-tab reveals", "paper pieces settling", fondos como mecanismos: "paper clouds on rails… layered scenery shifting in parallax".
- Materia: "layered cardboard cutouts with visible thickness", "visible paper fibers, folds, seams, cut edges", "real physical drop shadows between layers", puppets "built from separate overlapping parts" con "joints, tabs, brads".
- Cámara: "macro miniature photography, slight depth of field"; permitidos: slow push-in, lateral pan con "multi-plane parallax"; prohibidos: órbitas 360, vuelos rápidos, "liquid morphing".
- Prohibido (esto es lo que evita el drift a 3D): "smooth CG transformation, melting, plastic surfaces".

**Morphic** (prompts cortos con personaje andando): "Felt puppet wandering a handmade miniature village, tactile sets, soft stop-motion stutter"; y nombra "the slight stutter of frame-by-frame motion" como descriptor clave.

**El truco de las bisagras**: la comunidad papercraft anima marionetas como piezas articuladas ("hinged gestures", "separate overlapping parts pivoting at brad joints") — pedir que el brazo *pivote en su unión de papel* da movimiento amplio sin invitar morphing, porque describe la mecánica real de un puppet de recorte.

## 5. Fallos comunes reportados y sus soluciones

| Fallo | Solución probada | Fuente |
|---|---|---|
| Clip estático | Timeline con timestamps + una acción por beat; verbos presentes continuos; "no static holds"; poner acción antes que estilo | mindstudio, OpenArt, Higgsfield 2.5 |
| Cámara desobedece | UNA instrucción primaria de cámara; nombrar el *endpoint* ("slow dolly-in, **ending on** her hands wrapped around the cup"); incrustar la cámara en la frase de acción ("Camera shakes from impacts"); poner cámara antes que lighting/mood | apiyi, director-skill 2.0, Higgsfield blog, dreamina |
| Estilo deriva a 3D render | Especificar textura físicamente ("Skin, metal, fabric and paper carry real-world micro-detail"); lista NOT de estilo ("NOT 3D-render, NOT plastic CGI sheen, NOT glossy synthetic, NOT video-game look"); un solo estilo dominante, reforzado | Higgsfield 2.5 guide, Scenario |
| Exceso de instrucciones → ejecución aleatoria | 60–100 palabras de presupuesto útil (2.0); "one variable at a time" entre iteraciones | heyuan, apiyi |
| Morphing/identidad | Referencias con rol + exclusión ("@Image 1 defines the puppet's construction only. Do not take the backdrop"); "maintain consistent facial features and clothing from @Image1 throughout" | OSideMedia 2.5 skill, issastash |
| Jitter | No apilar movimientos de cámara; evitar "fast"/"lots of movement"; constraints positivos de estabilidad | apiyi, director-skill 2.0 |
| Dos trabajos incompatibles en un prompt (física de agua + micro-actuación de personaje) | "Two incompatible jobs in one generation… need separate prompts stitched in edit" — separa el clip-cascada del clip-personajes | OSideMedia 2.5 skill |

## 6. Seedance vs Kling/Veo — cómo promptearlo distinto

- **Seedance** = dirección y narrativa: obedece prompts estructurados tipo "job assignment" (heyuan: "a Seedance 2.0 prompt is a job assignment, not a description") y su ventaja única es el sistema multirreferencia: "For maximum creative control, Seedance 2.0's multimodal reference system is unmatched, allowing you to replicate specific motion styles" (wavespeed/kapwing). **El desbloqueo mayor para tu problema**: en `omni_reference` puedes añadir un **@Video como referencia de movimiento** — "A reference clip doesn't describe the move; it contains it" (invideo). Graba 5s de una cascada real (o de ti moviendo tiras de papel a mano, o un clip stop-motion de Aardman-like de stock) y escribe: "Use @Video 1 only for the water's motion rhythm and camera move; take no visual style from it. Identity and materials come from @Image 1." La guía oficial de Dreamina confirma el patrón: "Use this motion reference video to guide body action and timing while preserving the uploaded character identity."
- **Kling** = física con prompts simples, pero "limited prompt-following"; **Veo** = acabado/textura (mejor render de huellas y fibras según OpusClip). Con Seedance conviene sobre-especificar dirección; con Kling conviene sub-especificar.

## 7. Plantilla v4 propuesta para el canal (síntesis aplicada)

Cambios sobre la plantilla de 4 partes:

1. **Abrir con la acción, no con el estilo** (las primeras 20–30 palabras son las que más pesan). El estilo va en una línea "Look" posterior.
2. **Estructura por timestamps** (`0-2s / 2-4s / 4-5s`), una acción + una instrucción de cámara por beat, cámara con endpoint nombrado.
3. **Física con consecuencias**: cada movimiento nombra su efecto material ("foam bursts scatter torn-paper flecks; mist ribbons lag behind the gust").
4. **Materia como mecánica de puppet**: "hinged gestures", "separate overlapping parts", "stepped movement, tiny pauses, slight rebounds", "slightly stuttery 12fps stop-motion feel".
5. **Negativos → solo de estilo, cortos, y constraints positivos para todo lo demás**. Eliminar para siempre "The characters only breathe and gesture softly"; sustituir por dirección de actuación positiva (objetivo + táctica + estado ya-en-acción).
6. Cuando haya personajes + entorno complejo: **dos generaciones** (física del entorno / actuación del personaje) y montar en edición.

Borrador para la cascada (5s, un solo trabajo: física del agua):

> 0-2s: The newborn waterfall bursts between the split rocks — tall paper water-ribbons tumble downward in stepped 12fps increments, each ribbon dropping at a different rhythm, torn-edge foam flecks scattering where they strike the lower rock shelf. Camera: low crane-up along the fall, ending level with the crest. 2-4s: cotton-fiber mist billows upward in two visible puffs and drifts sideways on a gust; the layered rock planes separate in parallax as the camera rises. 4-5s: the tallest ribbon snaps taut and settles, paper pieces settling with slight rebounds. Look: handcrafted paper maquette, macro miniature photography, visible cut edges, paper fibers and real drop shadows between layers, warm tabletop lighting. Water ribbons and mist remain visibly paper and cotton in every frame; slightly stuttery stop-motion feel throughout. NOT smooth CG water, NOT plastic 3D, NOT photorealism, no text, no people.

## URLs

- https://higgsfield.ai/blog/seedance-prompting-guide — librería de prompts 2.0 con fixes anti-estático
- https://higgsfield.ai/blog/seedance-2-5-prompting-guide — guía 2.5 (secciones GLOBAL STYLE→…→AUDIO, physics rules, NOT-lists)
- https://github.com/OSideMedia/higgsfield-ai-prompt-skill — repo de 32 skills; claves: `skills/higgsfield-seedance/SKILL.md` (sin negative embeddings, "fast" degrada, física en vez de emoción), `skills/higgsfield-acting/SKILL.md` (sistema de actuación completo), `skills/higgsfield-motion/SKILL.md` (presupuesto de beats), `skills/higgsfield-seedance-2-5/SKILL.md` (roles @Image/@Video con exclusiones, stages con end-states)
- https://github.com/MiniMax-AI/MiniMax-H3/blob/main/skills/papercraft-stop-motion-explainer/SKILL.md — vocabulario papercraft i2v completo
- https://www.opus.pro/blog/claymation-ai — fórmula claymation + comparativa de modelos para stop-motion
- https://www.mindstudio.ai/blog/timeline-prompting-seedance-2-cinematic-ai-video — timeline prompting
- https://invideo.io/blog/seedance-2-0-prompt-guide/ — peso de las primeras 20-30 palabras, arrow-notation de beats
- https://help.apiyi.com/en/seedance-2-0-prompt-guide-video-generation-camera-style-tips-en.html — fórmula 6 pasos, keywords peligrosos
- https://www.heyuan110.com/posts/ai/2026-07-11-seedance-2-prompt-guide/ — 6 failure modes, verbos con consecuencia física
- https://openart.ai/blog/seedance-2-5-prompt-guide/ — presente continuo, timestamps, labels con "only"
- https://github.com/issastash/AI_Complete_Prompting_Guides/blob/main/Seedance_2.0_Complete_Prompting_Guide.md — speed tiers, i2v first-frame, tabla de fixes
- https://dreamina.capcut.com/seedance/seedance-2-5-prompt y https://dreamina.capcut.com/seedance/seedance-2-5-motion-reference-guide — fórmula oficial 8 partes y guía de motion reference
- https://heymarmot.com/blog/seedance-2-prompting-guide — asignación de referencias, cámara desde video ref
- https://morphic.com/resources/videos/stop-motion-videos — prompts stop-motion con personajes
- https://www.kapwing.com/resources/seedance-vs-veo-vs-kling-text-to-video-comparison-2026/ y https://wavespeed.ai/blog/posts/seedance-2-0-vs-kling-3-0-sora-2-veo-3-1-video-generation-comparison-2026/ — comparativas de prompteo entre modelos

---

# INFORME: animacion-stopmotion

# Informe: movimiento de animación profesional en prompts i2v (Seedance 2.5 / estilo paper-maquette)

## 0. Hallazgo central (síntesis de toda la evidencia)

Los modelos i2v actuales **no responden a la jerga de los 12 principios como etiquetas** ("add anticipation", "use follow-through" apenas aparecen en guías y no hay evidencia de que funcionen como palabras mágicas). Lo que sí funciona, documentado repetidamente en las guías de Seedance 2.5 (fal.ai, RunDiffusion, Higgsfield) y de Kling/Runway, es **describir la física de esos principios como beats verbales concretos**: el modelo ejecuta "the rear foot snaps the tail, the board rises, the front foot slides forward" mucho mejor que "jumps dynamically". Es decir: los 12 principios funcionan **traducidos a cadenas de causa→contacto→fuerza→recuperación**, no nombrados. La segunda clave: la cámara debe estar **motivada por un evento visible** ("the camera begins a slow push-in only after the cup tips"), no ser un verbo suelto. Y la tercera, específica del problema del canal: los negativos que limitan movimiento ("only breathe and gesture softly") **matan la animación** — las guías recomiendan reemplazar negativos de movimiento por **positivos de invariantes** ("preserve the paper texture, cut edges and layout" + movimiento explícito).

---

## 1. Vocabulario recomendado (inglés), por categoría

### A. Principios de animación clásica → como los entiende un modelo i2v

| Principio | NO escribir | SÍ escribir (lenguaje que el modelo ejecuta) |
|---|---|---|
| Anticipation | "with anticipation" | "she crouches and gathers herself for a beat, **then** springs upward" / "the bird dips its head **before** taking off" |
| Follow-through / overlapping | "follow-through" | "after he stops, his paper cloak keeps swinging one beat longer and settles"; "the fringe trails behind the movement" |
| Secondary action | "secondary action" | "one dominant action plus two or three supporting reactions": "as she turns, her braid swings and a loose paper leaf is knocked from her shoulder" |
| Squash & stretch | "squash and stretch" (riesgo de morphing en estilo papel) | mejor vía material: "the paper water ribbon compresses at the impact, then springs back" — usar con moderación, es el principio que más pelea con "no morphing" |
| Arcs | "arcs" | "sweeps its arm in a wide arc"; "the bird climbs in a curved path across the frame" |
| Timing / beats | "good timing" | bloques temporales explícitos: "0–2s: … 2–4s: …" y "hold for a beat, then…" (Seedance 2.5 soporta timeline prompting) |
| Staging | "well staged" | posición en el encuadre: "keep the shaman in the left third of frame, the falls visible on the right" |
| Exaggeration | "exaggerated" | intensificadores físicos: "a sudden burst of foam", "the mist surges upward twice its height" |

Evidencia: la guía de fal.ai para Seedance 2.5 ("approach, contact, transfer of force, and recovery give the model a path it can follow"; "establish cause before reaction"), y la comparativa Runway/Kling/Veo ("prompts that describe the physics explicitly land better than prompts that describe the emotional payoff").

### B. Stop-motion real (vocabulario que los modelos SÍ reconocen)

- **Cadencia**: `stop-motion animation, animated on twos, 12 fps cadence`, `visible stepped increments`, `frame-by-frame`, `hand-manipulated`, `slight stutter of frame-by-frame motion`. La skill de MiniMax para papercraft lo formula como: **"stop-motion motion language: stepped movement, tiny pauses, slight rebounds"** — esa tríada es oro para vuestra plantilla.
- **Vida/imperfección** (del artículo del BFI sobre por qué el stop-motion se siente vivo): `twitchiness`, `the fabric jumps around slightly between frames`, `fur/fibers ripple`, `visible seams`, `fingerprints`, `the poking and prodding of unseen hands`. Traducido a prompt: **"paper edges tremble slightly between frames, cotton fibers ripple as if blown between exposures"** — es el equivalente papel del "boil".
- **Boil / chatter**: no aparecen como términos en guías i2v (jerga demasiado interna); descríbelo: `surfaces shimmer with tiny frame-to-frame irregularities, like hand-placed paper reshot every frame`.
- **Mecánica de puppet**: `hinged gestures`, `jointed limbs pivot at paper hinges`, `replacement animation: the mouth/pose swaps between cut-paper positions` (útil para personajes: legitima cambios de pose discretos sin morphing).
- **Settle/rebound** (física stop-motion): `settles with a tiny rebound`, `overshoots and rocks back into place`, `paper pieces settling`.

### C. Cutout / paper animation (Reiniger, South Park, pop-up)

- `cutout animation`, `jointed paper puppet with wire-hinge articulation` (técnica literal de Lotte Reiniger: extremidades cortadas por separado y unidas con bisagras de alambre — describirlo da al modelo un motivo mecánico para mover partes sin derretirlas).
- Mecanismos de papel con verbos propios (MiniMax skill): `pull-tab slide`, `rotating paper disc`, `page flip`, `pop-up-book unfold`, `paper layers shifting in parallax`, `sliding paper mechanisms`.
- Para el agua/niebla en papel: `tiered paper water ribbons slide downward at different speeds like pull-tab strips`, `rotating spiral discs of foam`, `cotton-fiber mist puffs advance in stepped bursts`.
- Profundidad: `layered planes like a diorama`, `soft contact shadows under each layer`, `faint white card-stock core at every cut edge`, `visible paper thickness`.

### D. Cinematografía de naturaleza/documental (aplicable a la cascada)

- Tipos de plano con propósito: `establishing wide`, `reveal`, `macro close-up on texture`, `slow tilt upward from base to crest`, `slow crane-up revealing`, `slow pull-back from macro detail to full scene`, `locked-off frame` (con la escena moviéndose).
- **Cámara motivada**: atar el movimiento a un evento — "the camera tilts up **following** a puff of mist rising"; "the crane-up **begins when** the birds take off". (fal.ai: "tie each camera move to an event the model can see".)
- **Paralaje multiplano** (herencia directa de la multiplane camera de Disney, y frase-plantilla documentada): `parallax separation between foreground, mid-ground and background layers`, `foreground paper fronds drift faster than the midground falls; the background cliff barely moves`, `foreground occlusion: paper leaves brush past the lens edge`.
- Regla clave de las guías de cámara Seedance: **un movimiento de cámara + una acción dominante**; "static camera + dynamic scene motion (steam, fabric, reflections)" es una combinación ganadora — y la velocidad siempre `slow / subtle / controlled` (la cámara lenta deja presupuesto de movimiento para la escena).
- Plantillas literales: "slow tilt upward from [base] to [top]", "slow crane-up from [lower level] revealing [scene element]", "slow pull-back from [close detail] to [wider scene]", "slow quarter-orbit around [subject]" (nunca 360 rápidos).

### E. Toma de personaje (walk, turn, kneel, reach)

- Descomponer en **beats con puntos de contacto**: no "she kneels" sino "she plants one knee on the stone, her weight shifts forward, her woven mantle swings and settles a beat later".
- Walk: `walks with a deliberate stop-motion gait, each step landing as a distinct pose, weight rocking from foot to foot` (evita el paseo flotante).
- Turn: `turns her head toward the falls in three stepped increments, shoulders following a beat behind` (drag/overlap explícito).
- Reach: `reaches out, fingers opening at the end of the gesture; the sleeve slides back` (acción + reacción material).
- **Causa antes que reacción** (fal.ai): escribir primero el evento físico, luego la respuesta: "the spray bursts against the rock **first**; **then** the two paper birds startle and scatter upward".
- Estado inicial y final: "begin with the figure kneeling at the edge; end with her arm fully extended toward the mist" (RunDiffusion: los start/end testables superan a las pilas de verbos).

---

## 2. Qué evitar (documentado)

1. **Negativos que describen movimiento tímido** — vuestro "The characters only breathe and gesture softly" es exactamente el anti-patrón; las guías piden invariantes de identidad/material en positivo, no limitadores de acción.
2. **Redescribir la imagen** en i2v: la imagen ya da la apariencia; el prompt debe decir **qué cambia en el tiempo** ("describe the change, not the scene").
3. **Todo se mueve a la vez**: más de 1 acción dominante + 2-3 secundarias = caos o parálisis; más de un movimiento de cámara (o cámara compuesta dolly+pan+orbit) = inestabilidad.
4. **Verbos vagos**: "make it move", "dynamic", "cinematic motion" producen el clip tímido genérico.
5. **Cámara rápida + detalle fino** = pérdida de textura de papel; zoom rápido = warping (preferir dolly push-in).
6. **Vocabulario prohibido para este estilo** (MiniMax): "high-speed flying camera", "full 360-degree orbit", "liquid morphing", "digital glitch".
7. Jerga sin traducir: "boil", "shooting on twos" a secas, "ease-in/ease-out", nombres propios ("PES style", "Lotte Reiniger style") — funcionan mejor sus *descripciones* que sus nombres (excepto `stop-motion` y `cutout animation`, que sí son tokens fuertes).

---

## 3. Frases listas para usar (bloques copiables)

**Apertura de estilo (sustituto de la parte 1):**
> Handcrafted paper-maquette stop-motion animation, animated on twos with a visible 12 fps cadence — every element moves in small stepped increments with tiny pauses and slight rebounds, as if repositioned by hand between exposures.

**Cascada (acción principal):**
> Tiered paper water ribbons slide downward at three different speeds like pull-tab strips — the center ribbon fastest, the outer ribbons a beat behind; where each tier strikes the rock shelf, a burst of cotton foam pops outward, then settles with a tiny rebound.

**Niebla / atmósfera (secundaria):**
> Cotton-fiber mist advances in stepped puffs from the base, each puff swelling, holding for a beat, then releasing; a lateral gust drags the top of the mist sideways so it trails behind the waterfall's rhythm.

**Aves (causa→reacción):**
> The spray bursts against the ledge first; then two hinged paper birds startle, scatter upward in curved arcs at different speeds, wings flapping in stepped beats, and exit frame left.

**Paralaje / cámara motivada:**
> Camera: one slow crane-up with tilt, beginning only as the first mist puff rises, ending at the crest; foreground paper fronds drift past the lens faster than the midground falls, while the background cliff barely moves — clear parallax separation between the three paper planes.

**Personaje — giro:**
> She turns toward the falls in three stepped increments — head first, shoulders a beat behind, her woven paper mantle swinging past the turn and settling with a small rebound.

**Personaje — caminar/arrodillarse/alcanzar:**
> He walks with a deliberate stop-motion gait, each step a distinct held pose, weight rocking foot to foot; he plants one knee on the stone, leans forward, and reaches out — fingers opening at the very end of the gesture as his sleeve slides back.

**Materia (parte 3, ahora con materia EN movimiento):**
> Everything visibly cut paper, cardboard and natural fiber: hard scissor-cut edges with a faint card-stock core, real contact shadows between layers; edges tremble slightly between frames and fibers ripple as if blown between exposures.

**Invariantes + negativos reformulados (parte 4 nueva):**
> Preserve the composition, palette, paper texture and character design from the start image. No morphing, no melting, no liquid physics, no photorealism, no 3D render look, no text, no people, no rainbow. No camera shake faster than the stop-motion cadence.

**Plantilla de 5 partes sugerida** (evolución de vuestra plantilla de 4): [1] apertura de estilo con cadencia · [2] beats temporales (0–2s / 2–4s / 4–5s: causa→reacción, 1 dominante + 2 secundarias) · [3] cámara motivada por un evento + paralaje + estado inicial/final del encuadre · [4] materia en movimiento · [5] invariantes en positivo + negativos solo de material/estética (nunca de cantidad de movimiento).

---

## 4. Casos de estudio y flujos comprobados

- **MiniMax papercraft-stop-motion skill** (el hallazgo más directamente reutilizable: una "biblia de prompt" completa para explainers papercraft, con vocabulario de transiciones — page flip, pop-up unfold, pull-tab, cross-section split — y cámaras permitidas/prohibidas): [github.com/MiniMax-AI/MiniMax-H3 — papercraft-stop-motion-explainer/SKILL.md](https://github.com/MiniMax-AI/MiniMax-H3/blob/main/skills/papercraft-stop-motion-explainer/SKILL.md)
- **Framesail — AI paper cutout animation**: flujo idéntico al vuestro (GPT-image → Seedance para movimiento stop-motion), recomienda 12 fps y "character lineup" para consistencia: [framesail.com/ai-paper-cutout-animation](https://framesail.com/ai-paper-cutout-animation) y [framesail.com/blog/how-to-make-stop-motion-animation-with-ai](https://framesail.com/blog/how-to-make-stop-motion-animation-with-ai)
- **Morphic** — galerías de paper cutout / stop motion AI con patrones de prompt ("visible paper edges and fold lines… whimsical animation style"): [morphic.com/resources/videos/paper-cutout-animation-videos](https://morphic.com/resources/videos/paper-cutout-animation-videos), [morphic.com/resources/videos/stop-motion-videos](https://morphic.com/resources/videos/stop-motion-videos)
- **BFI — por qué la imperfección stop-motion se siente viva** (fuente del vocabulario twitchiness/rippling/seams): [bfi.org.uk/features/stop-motion-imperfection…](https://www.bfi.org.uk/features/stop-motion-imperfection-why-animation-needs-human-touch)

## 5. URLs principales

- fal.ai — Seedance 2.5 prompting guide (beats, causa→reacción, cámara motivada, invariantes): https://fal.ai/learn/devs/seedance-2-5-prompting-guide
- RunDiffusion — Seedance 2.5 guide (orden del prompt, start/end testables, verbos de movimiento fuertes, 1+2-3 acciones): https://www.rundiffusion.com/seedance-2-5-prompt-guide
- Higgsfield — Seedance prompting guide oficial (estructura, ramping, negativos de estilo): https://higgsfield.ai/blog/seedance-prompting-guide y https://higgsfield.ai/blog/Seedance-1.5-Pro-on-Higgsfield-A-Practical-Creator-Guide
- Seedance.tv — 35 camera movement prompts (plantillas literales de tilt/crane/pull-back, reglas de combinación): https://www.seedance.tv/blog/seedance-camera-movement-prompts-2026
- Elser — 50 i2v prompts (fórmula animate/preserve, parallax, personajes): https://www.elser.ai/blog/50-image-to-video-prompts-for-ai-animation-a-practical-prompt-system-for-2026
- Naviya — foreground occlusion + parallax: https://www.naviya.chat/en/blog/foreground-occlusion-ai-image-video-prompts
- invideo — prompting por modelo (física explícita > payoff emocional): https://invideo.io/faq/how-do-you-write-ai-video-prompts-differently-for-runway/
- 12 principios (referencia base): https://www.animationmentor.com/blog/tutorial-12-principles-of-animation/ · https://www.cgspectrum.com/blog/12-principles-of-animation
- Reiniger / cutout (bisagras de alambre, técnica): https://en.wikipedia.org/wiki/Cutout_animation · https://www.bfi.org.uk/sight-and-sound/features/scissors-make-films-lotte-reiniger-creating-her-magical-animations
- On twos / cadencia: https://en.wikipedia.org/wiki/Stop_motion · https://digicel.net/how-to-animate-on-twos-without-stiff-motion/
- LBBOnline — stop motion en la era de la IA (403 al fetch, accesible en navegador): https://lbbonline.com/news/Frame-by-Frame-Not-Prompt-by-Prompt-Stop-Motion-in-the-Age-of-AI

---

# INFORME: doctrina-local-higgsfield

# Informe: guía oficial Higgsfield "faceless-video" (v2.4) — todo lo aplicable a nuestro problema de movimiento

Fuente: `instructions_markdown` completo (120 KB, workflow `faceless-video` v2.4) + 5 archivos del bundle leídos con `get_workflow_bundle_file`: `references/prompts.md`, `references/style-cinematic-storybook.md`, `references/style-paper-diorama.md`, `references/channel-styles.md`, `references/kids-styles.md`, `references/style-editorial-collage.md`.

Hallazgo clave inmediato: **la guía NO usa Seedance en ningún punto** (0 menciones). Su modelo de video está bloqueado a `minimax_h3` (10s, 2K, 16:9/9:16, hasta 7 `image_references`, audio nativo). Aun así, casi todo su método de prompt es agnóstico al modelo y ataca exactamente nuestro problema ("clips tímidos"). Además tienen un estilo house **Paper Diorama** que es casi nuestro estilo, con vocabulario de movimiento propio.

---

## 1. Su fórmula oficial de prompt de video (la plantilla núcleo, VERBATIM)

De `references/prompts.md §3` — un clip = un bloque de 10s con CINCO cortes duros internos escritos en UN solo prompt:

```
Style: {STYLE}; {MOTION} — the visual style is EXACTLY as in the reference images, same rendering, same surface treatment.
PALETTE LOCK: use ONLY the colors and the background treatment of the reference images ({e.g. flat off-white/clean webcomic background}). Do NOT introduce any new or foreign colors, no colored/gradient/painted backgrounds that aren't in the references, no recoloring of characters or objects.
A single 10-second scene of FIVE hard-cut shots. Do NOT open the video on any reference image or show a sheet/swatch — stage everything fresh, matching characters, room, colors and background to their references. Characters only emote and gesture, they do NOT talk. Motion starts on frame 1 (no opening freeze).
REFERENCES (look, identity, palette): @Image1 = LOCATION ({desc}). @Image2 = {CHARACTER A} ({desc}). @Image3 = {CHARACTER B}. @Image4 = {PROP}.
SHOT 1 — 0.0s to 2.0s — {SIZE+ANGLE}: {beat}.
HARD CUT.
SHOT 2 — 2.0s to 4.0s — {DIFFERENT SIZE+ANGLE}: {beat}.
HARD CUT.
SHOT 3 — 4.0s to 6.0s — {DIFFERENT SIZE+ANGLE}: {beat}.
HARD CUT.
SHOT 4 — 6.0s to 8.0s — {DIFFERENT SIZE+ANGLE}: {beat}.
HARD CUT.
SHOT 5 — 8.0s to 10.0s — {DIFFERENT SIZE+ANGLE}: {payoff}.
Five hard-cut shots at 2.0s, 4.0s, 6.0s and 8.0s, no dissolves, no fades. {MOTION}, continuous motion within each shot, never freezes.
```

Y el bloque de cierre que aplica a todas las plantillas:

```
AUDIO: {diegetic SFX only} — no voice, no narration, no music.
NEGATIVE: opening on a reference image, a sheet/swatch or a static first frame, leading freeze, dissolves or fades, NEW or foreign colors, colored/gradient/painted background not in the references, recolored characters, style drift, extra people, cloned characters, characters talking, lip-sync, on-screen text, captions, photorealism{2D-ONLY: , 3D render}, watermark.
```

**Orden de elementos** (su estructura fija): (1) línea de estilo + {MOTION}, (2) PALETTE LOCK, (3) contrato de escena (nº de cortes, no-talk, motion desde frame 1), (4) mapeo de referencias @ImageN, (5) shots con TIMECODES explícitos y tamaño+ángulo distintos cada uno, (6) línea de refuerzo del ritmo, (7) AUDIO, (8) NEGATIVE. La fórmula {STYLE} son 80–100 palabras pegadas **byte-idénticas** en todos los prompts del video.

**Ley de duración de shot** (verbatim): *"~2s per shot is the LAW: no shot longer than 2.5s — a frame hanging 3–5s reads as a slideshow, and every shot needs visible ACTION, not a held pose."*

---

## 2. Cómo piden movimiento VIVO (esto es la respuesta directa a nuestro feedback)

### 2a. La "action grammar" oficial (verbatim, `prompts.md §3`)

> "**Action grammar (all styles):** write SHOT beats as pure CHOREOGRAPHY — the {STYLE} formula owns the look, so no style/color/material words inside beats; elements enter STAGGERED (\"A, then B, then C\" — never simultaneously) with landing verbs (snaps into place, stamps down, drops with a bounce, settles); exactly ONE camera behavior per shot, stated once (slow push-in / static / gentle drift / whip) — two moves in one cut reads as AI soup; the FINAL shot eases into a stable, still micro-moving final frame (settled ≠ frozen — rule 21 holds)."

### 2b. El "impact beat" obligatorio

> "**Every block carries at least ONE impact beat** (a slam, stamp, snap, whip-pan hit, collapse) — name it in a SHOT line and echo it in AUDIO; reference-grade explainers land an accent roughly every 3 seconds."

### 2c. Movimiento desde el frame 1 y prohibición de congelados (GOLDEN RULE 21)

> "**No leading freeze.** Every block prompt demands motion from frame 1; the assembler adds no head padding and WARNS when a block's opening looks static — on that warning REGENERATE the block (never ship a still that 'starts playing' a second later)."

### 2d. Vocabulario de cámara y variedad (GOLDEN RULE 22 + reglas de shot)

> "**No samey footage.** Vary shot SIZE and ANGLE on EVERY cut (WIDE / MEDIUM / CU / OTS / low / high) — do NOT reopen every block on the same establishing WIDE."
> "OTS is valid only when a named on-screen character's shoulder/head is intentionally visible in the foreground. … use overhead/top-down, low/high, macro, lateral, or another coverage angle instead. OTS without a referenced character makes the model invent a person."
> "Only the FIRST block of a new location may open on a full establishing WIDE; later blocks in the same location open on a fresh close/medium/coverage angle — never re-establish the same wide. **≤2 consecutive blocks per location**."

Verbos de cámara que usan en todo el bundle: `slow push-in / static / gentle drift / whip / whip-pan / macro push / top-down tilt / push-ins, orbits, crane pull-backs / slow graceful dreamlike camera moves`. Nótese: **UNA sola conducta de cámara por shot** — nuestro v3 (grúa+tilt+paralaje en una toma) viola su regla anti-"AI soup".

### 2e. Personajes que "cobran vida" (del interplay Kids — el vocabulario de reacciones)

> "the character turns to camera and WAVES, nods, gasps, claps, points, presses a finger to lips. Write the reaction INTO the shot text, timed to the line's beat. Mouths never move with speech — reactions are gesture and face only."

Y la regla de storytelling visual (aplica a nuestro problema tal cual):

> "Every block shows a CHANGE, never a tableau: **One visible action per block, with a before and an after** — the lid comes off, the seed cracks, the water climbs the stem, the balloon leaves the hand."
> "**Forbidden:** a character standing and gesturing at an unchanged scene, 'atmosphere' establishing beats with nothing happening in them."
> "**The verb test:** if a block's shot text can be written without a verb, it is decoration — rewrite it with something happening."

### 2f. SFX acoplado a la coreografía (aunque nuestro clip sea mudo, ordena el movimiento)

> "AUDIO line per block: **SFX follows choreography 1:1** — every motion verb gets at most ONE cue, 2–4 cues per block + one room-tone bed (whooshes on moves, a stamp hit on the impact beat, ticks on data steps, …); nothing sounds that didn't move; percussive, never musical."

### 2g. Naturaleza / ambiente en movimiento

No hay una sección "nature" per se; el ambiente se anima igual que los personajes (entradas escalonadas, impact beats). Lo más cercano, del shot language de Paper Diorama (verbatim):

> "Macro push along a paper canyon · top-down tilt from figures onto a document · detail crop of the orange prop → HARD CUT → wide of the whole miniature · **dust drifting through a tungsten beam** · a scale shock from letterpress texture to the full diorama landscape. … **Every block lands at least ONE impact beat** — a stamp PUNCHES the letterpress, **a paper structure COLLAPSES, dust WHUMPS off a slammed document** — named in the SHOT text and echoed in the AUDIO line."

Y de Cinematic Storybook, cómo transmiten atmósfera oscura con entorno (también su truco de moderación): *"Convey the dark/underworld mood through ARCHITECTURE, LIGHT and NATURE instead — gateways, torches, mist, asphodel flowers, ruins, moonlight (these passed first try)."*

---

## 3. Su "style lock" (consistencia no-fotorreal entre escenas)

Mecanismo en 4 capas:

1. **STYLE FORMULA byte-idéntica**: *"Embed the ONE style formula BYTE-IDENTICAL in every asset prompt (this is the entire consistency mechanism)."* 80–100 palabras, ≤2 frases: *"line/surface work · shading · palette · one signature accent · background treatment · motion timing · render discipline (positive form). Always non-photorealistic."*
2. **Cadena de referencias de imagen**: style key (imagen ancla) → todos los assets se generan con el key como `image_references` → todos los clips se generan con los assets (`location → characters → props`, máx 7). *"NEVER generate a clip/still from the style key alone."* Regla 19: *"clips MUST match the asset sheets 1:1. Same character design, same palette, same background treatment … no per-shot restyle, no object drift, no style scatter."*
3. **PALETTE LOCK como línea propia** en cada prompt + apertura *"the visual style is EXACTLY as in the reference images, same rendering, same surface treatment"*.
4. **NEGATIVE anti-drift estándar** (ver bloque en §1: `NEW or foreign colors … recolored characters, style drift, extra people, cloned characters … photorealism`). Para estilos DIMENSIONALES (papel incluido): *"DROP `3D render` from the NEGATIVE (it fights the look; the photorealism ban always stays)."*

El slot **{MOTION} por familia de estilo** (verbatim): *"Flat 2D styles … `simple limited animation on twos`. Dimensional styles (Paper Diorama, 3D Papercraft, Fluffy Toy, claymation…): **`smooth simple handcrafted motion, subtle stop-motion feel`**."*

QC anti-drift: GATE 4 — *"open block 1 and compare it to the asset sheet, character by character. Block 1 is generated with the least context and drifts most often."*

---

## 4. Modelos y parámetros

- Imagen/estilo/assets: `seedream_v5_pro`, siempre `resolution:"1k"`; personajes 2:3, locaciones en el aspect elegido, props 1:1.
- Video: **`minimax_h3`** — `duration:10`, `resolution:"2K"`, `aspect_ratio` explícito en cada llamada (solo 16:9/9:16), `medias` = location→characters→props como `image_references` (máx 7), audio nativo. *"Models are LOCKED. Never substitute."*
- Voz: `text2speech_v2` variant `elevenlabs`; música: `sonilo_music` instrumental.
- **Seedance 2.5: cero menciones en toda la guía y sus referencias.** Su enfoque es multi-image-reference (no start_image estricto): por eso su plantilla dice *"Do NOT open the video on any reference image"* — en nuestro pipeline start_image esa cláusula no aplica; la que sí aplica es *"Motion starts on frame 1 (no opening freeze)"*.

---

## 5. El tipo "Fairy Tale & Myth" — todas sus reglas

- Estilo único por defecto: **Cinematic Storybook** (card `de5b38ca-…`). Ritmo: *"slower, atmospheric; 2–3 min default (12–18 blocks); 5 ~2s cuts per block"*. VO: *"enchanting storyteller — hushed, warm, mysterious, unhurried, mythic (no jokes)"*; cold open ≤8 palabras. Música obligatoria: *"dark-enchanted ambient: mysterious, calm, hushed, dreamlike — soft sustained strings, distant harp, faint music-box, low choir pad, a far-off bell; instrumental, no drums, no vocals"*, `--music-vol 0.09` con ducking sidechain bajo la voz. Subtítulos look `paper`. Duración de línea 20–23 palabras por bloque de 10s, ventana de habla 7.8–9.5s centrada en el bloque.
- **Su firma de animación — ON TWOS, en dos capas (verbatim, oro puro para nosotros):**

> "1. **In every block prompt** put: `TRADITIONAL HAND-DRAWN 2D ANIMATION, animated ON TWOS (~12 drawings per second) — deliberate STEPPED / staggered motion with tiny holds between poses, snappy pose-to-pose keyframe animation, NOT smooth, NOT fluid interpolation, NOT slow-motion`; slow graceful dreamlike camera moves are fine. ADD to the NEGATIVE: `smooth motion, fluid interpolation, slow-motion, motion blur, 60fps look`.
> 2. **In assembly** pass **`--stepped 12`** to `assemble_final.sh` — it re-times every block to update the image ~12×/sec (mathematically exact on-twos) while keeping the container fps and the audio untouched. The prompt sets the character of motion; `--stepped` guarantees the cadence. (Verified in test: prompt + `--stepped 12` together give the cleanest cartoon look.)"

  Y el porqué: *"This both sells the 2D-animation feel and **hides AI over-smoothness/morphing**."*
- Insertos opcionales de libro abierto (book-spread) para apertura/cambio de capítulo/moraleja; *"Faint illegible decorative script only, never readable text."*
- Moderación aprendida en testing: evitar `hooded figure / cloaked ferryman`, `souls of the dead`, `corpses`, `river of the dead`; ambientar lo oscuro con arquitectura/luz/naturaleza.
- Mecánica de video = idéntica al resto: *"It is a look + tone + music profile on the standard motion pipeline, not a new mechanic."*

## 5b. Bonus: la fórmula Paper Diorama (nuestro estilo hermano, VERBATIM)

> "cinematic vintage paper-diorama documentary: miniature table-top worlds built from aged sepia newsprint and cardboard, torn layered paper edges, monochrome halftone print texture, anonymous halftone cutout figures with obscured faces, one single {ACCENT} paper accent, distressed letterpress texture on props, warm tungsten documentary lighting with deep shadows, macro tilt-shift shallow depth of field, film grain and floating paper dust, **smooth handcrafted stop-motion motion**, non-photorealistic handcrafted paper materials only."

Nótese que la fórmula de estilo incluye **motion timing como parte del estilo** ("smooth handcrafted stop-motion motion", "floating paper dust") — el look y la cadencia viajan juntos.

---

## 6. Análisis: qué adoptar (recomendaciones concretas)

1. **Reestructurar la plantilla del canal al orden de 8 líneas de Higgsfield** (Style+{MOTION} → PALETTE LOCK → contrato de escena → referencias → SHOTS con timecodes → refuerzo → AUDIO → NEGATIVE). Nuestra plantilla de 4 partes mezcla materia y acción; la de ellos separa "el look lo lleva la fórmula, el beat es solo coreografía": *"no style/color/material words inside beats"*. Nuestros v1–v3 gastan el presupuesto del beat en describir papel y algodón — eso va a la línea Style, una sola vez.
2. **Timecodes explícitos + multi-shot**: para 5s de Seedance, 2 shots de ~2.5s con `HARD CUT` (o mantener 1 shot pero jamás >2.5s "de pose sostenida" — cada tramo con ACCIÓN visible nueva). Su ley: un frame que aguanta 3–5s "reads as a slideshow" — exactamente nuestro síntoma.
3. **Un impact beat nombrado por clip, eco en la física del agua**: para la cascada — "the water column SLAMS into the rock shelf, a burst of cotton-fiber spray WHUMPS upward". Un acento cada ~3s.
4. **Entradas escalonadas + verbos de aterrizaje**: "A, then B, then C — never simultaneously"; verbos tipo snaps/stamps/drops with a bounce/settles/collapses/whumps. Es el antídoto directo a la timidez: cada elemento del cuadro recibe SU verbo y SU turno.
5. **UNA conducta de cámara por shot, dicha una vez.** Nuestro v3 (grúa+tilt+paralaje) es "two moves in one cut = AI soup" según su libro. Mejor: shot A "slow crane up", CUT, shot B "static macro". El paralaje se gana cortando, no apilando movimientos.
6. **Adoptar el mecanismo ON TWOS adaptado a stop-motion de papel** — el hallazgo más valioso. En prompt: `HANDCRAFTED PAPER STOP-MOTION, animated ON TWOS (~12 frames per second) — deliberate STEPPED motion with tiny holds between poses, snappy pose-to-pose animation, NOT smooth, NOT fluid interpolation, NOT slow-motion` + NEGATIVE: `smooth motion, fluid interpolation, slow-motion, motion blur, 60fps look`. Y en el ensamblaje local replicar su `--stepped 12` con ffmpeg (retimear a ~12 actualizaciones/s manteniendo el fps del contenedor, p. ej. `-vf "fps=12,fps=30"` o select+setpts): el prompt da el carácter, el post garantiza la cadencia. Esto resuelve "el papel debe moverse… sin perder el estilo": más amplitud de movimiento SIN look CGI, porque lo stepped esconde el over-smoothing.
7. **Arreglar el negativo asesino de la plantilla**: la cláusula oficial es *"Characters only emote and gesture, they do NOT talk"* — es un candado anti-lip-sync, NO un limitador de energía. Nuestro "The characters only breathe and gesture softly" invierte el sentido y apaga la animación. Sustituir por la de ellos, y en el beat escribir reacciones concretas con verbo: turns, waves, gasps, points, recoils, claps.
8. **"Motion starts on frame 1 (no opening freeze)"** como línea fija, y cierre "settled ≠ frozen": *"the FINAL shot eases into a stable, still micro-moving final frame"*. Además QC objetivo: probe de apertura estática y (como ya vimos con v1 vs v3) el peso del archivo/conteo de cortes como proxy de movimiento real — ellos literalmente cuentan cortes con `ffprobe scene>0.3` (umbral 0.15 para looks planos).
9. **El verb test + before/after** como gate de guion visual: cada clip muestra un CAMBIO (la niebla sube Y cubre la cresta; el ave se espanta Y sale de cuadro). Si el beat se puede escribir sin verbo, es decoración.
10. **PALETTE LOCK propio + "EXACTLY as in the reference images, same rendering, same surface treatment"** al inicio, y el NEGATIVE anti-drift completo (`style drift, extra people, cloned characters, recolored…`). Para nuestro estilo dimensional: NO poner "3D render" en el negativo (choca con el bajo relieve de papel); mantener siempre "photorealism".
11. **Para la cascada (naturaleza)**: tratar agua/niebla/aves como elementos coreografiados con turnos e impact beat; ángulos legales sin personaje: overhead/top-down, macro, lateral, low/high — nunca OTS (inventa personas). Vocabulario ambiental de ellos aplicable: "dust drifting through a tungsten beam" → "paper dust motes drifting through the light shaft", "a paper structure COLLAPSES" → bloques de espuma que colapsan escalonados, "scale shock" cut de macro-textura a wide de la maqueta.

**Borrador v4 sugerido (síntesis, no verbatim de la guía)** — cascada, 5s, 9:16, start_image:

```
Style: handcrafted paper-maquette stop-motion — [fórmula de materia del canal, byte-idéntica]; HANDCRAFTED PAPER STOP-MOTION, animated ON TWOS (~12 frames per second) — deliberate STEPPED motion with tiny holds between poses, snappy pose-to-pose animation, NOT smooth, NOT fluid interpolation, NOT slow-motion — the visual style is EXACTLY as in the start image, same rendering, same surface treatment.
PALETTE LOCK: use ONLY the colors and background treatment of the start image. No new or foreign colors, no recoloring.
A single 5-second scene of TWO hard-cut shots. Motion starts on frame 1 (no opening freeze).
SHOT 1 — 0.0s to 2.5s — LOW WIDE, slow crane up (one move only): the tall paper water-ribbons tumble in stepped increments — first the near ribbon, then the far one, then the thin side rivulet — and SLAM into the rock shelf; a burst of cotton-fiber spray WHUMPS upward and paper dust motes drift through the light shaft.
HARD CUT.
SHOT 2 — 2.5s to 5.0s — MACRO DETAIL at the crest, static camera: torn-paper foam blocks buckle and COLLAPSE one after another over the lip, mist ribbons crawl laterally across the rocks, moss fibers tremble; two paper birds startle and exit frame; the shot eases into a settled, still micro-moving final frame.
Two hard-cut shots at 2.5s, no dissolves, no fades. Stepped handcrafted motion, continuous motion within each shot, never freezes.
NEGATIVE: leading freeze, static first frame, dissolves or fades, smooth motion, fluid interpolation, slow-motion, motion blur, 60fps look, new or foreign colors, style drift, morphing, melting, photorealism, extra people, on-screen text, captions, watermark, rainbow.
```

Archivos locales relevantes: instrucciones completas extraídas en `/private/tmp/claude-501/-Users-alegut-MyApps-Personal-mitos-colombia--claude-worktrees-higgs-field-gpt2-2k-value-ef422e/33df5485-d341-4e20-9973-c12d542fd542/scratchpad/instructions.md`; JSON original en `/Users/alegut/.claude/projects/-Users-alegut-MyApps-Personal-mitos-colombia--claude-worktrees-higgs-field-gpt2-2k-value-ef422e/33df5485-d341-4e20-9973-c12d542fd542/tool-results/mcp-b97b8de5-e72b-415c-8e91-d80216453242-get_workflow_instructions-1788217646676.txt`.