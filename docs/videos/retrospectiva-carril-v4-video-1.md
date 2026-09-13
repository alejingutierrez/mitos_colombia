# Retrospectiva del carril v4 — video 1, «La aparición del hombre» (2026-09-09/10)

Qué hicimos, cómo lo hicimos, qué costó, dónde se perdió tiempo y qué cambiar antes del
video 2. Los números salen de los registros de la producción (`clips-v1*/jobs.json`,
`import-map.json`, los WAV de voces y los logs de ensamblaje), no de memoria.

Documentos hermanos: `PRODUCCION-END-TO-END.md` (las leyes), `pipeline-v4-mcp.md` (el paso a
paso), `muiscas/channel-dna.json` (decisiones y estado por mito).

---

## 1. El proceso tal como se ejecutó

Dos versiones del mismo video en la misma noche: primero Kling 3.0 pro (carril estrenado),
luego Seedance 2.5 1080p (elegido como estándar al compararlas).

| # | Fase | Herramienta | Atención (min) | Pared (min) | Créditos | Salida |
|---|---|---|---|---|---|---|
| 0 | Leer contexto: memoria, docs vivos, DB, estado de los 41 mitos | Read/Bash | 30 | 30 | 0 | decisión de mito (único con 17 keyframes) |
| 1 | Guion JSON con la voz de las narraciones + campo `aprobado` | a mano | 5 | 5 | 0 | `guion-…-v1.json` |
| 2 | Voces en WAV (pcm_48000) | `generate-voice-el.mjs --format wav` | 2 | 3 | 664 caracteres EL | `voces-v1/voz01..09.wav` |
| 3 | Recortes 9:16 exactos (1512×2688) + placa de cierre | sharp, script inline | 5 | 5 | 0 | `kf-9x16/` + manifest |
| 4 | Lecho musical desde `narration_beds` | `build-lecho.mjs --lecho a,b,c` | 10 | 5 | 0 | `lecho-v1.wav(.json)` |
| 5 | 18 prompts de movimiento, mirando cada keyframe | a mano (×2 formatos) | 25 + 30 | 55 | 0 | `movimiento-v1(-seedance).json` |
| 6 | Plan de armado | a mano (copia de Bochica v4) | 5 | 5 | 0 | `plan-v1(-seedance).json` |
| 7 | Subida de keyframes al MCP (presigned PUT + confirm) | `media_upload` + curl + `media_confirm` | 10 | 10 | 0 | `kf-9x16/higgsfield-media.json` |
| 8a | Generación Kling: piloto → 17 en paralelo → QC → 2 regen | `generate_video_batch` + `jobs_wait` | 25 | 35 | 175 | `clips-v1/` |
| 8b | Generación Seedance: 2 pilotos → 12 → 4 (tras 429) → 1 regen | ídem | 25 | 40 | 855 | `clips-v1-seedance/` |
| 9 | QC visual: hojas de 5 fotogramas + zooms | `qc-sheet.mjs` + ffmpeg | 20 + 15 | 35 | 0 | 3 defectos hallados |
| 10 | Ensamblaje + social + preview (×6 corridas en total) | `assemble-video.mjs` | 15 | 6 × ~2,5 | 0 | másters, sociales, previews |
| 11 | Título: diagnóstico Helvetica → CoreText | render-text.swift | 45 | 45 | 0 | corrección + 2 reensamblajes |
| 12 | Docs, DNA, memoria, 3 commits | — | 40 | 40 | 0 | este carril documentado |

**Totales**: ~4,5 h de atención y ~5,5 h de pared para dos versiones, incluyendo la
construcción de herramientas que no existían (build-lecho, import-mcp-clips, qc-sheet,
render-text, cambios del ensamblador). **Un mito nuevo con las herramientas ya hechas y un
solo modelo: ≈ 2,5 h de atención / 3 h de pared.** El objetivo de la v4.1 es bajarlo a ≈ 1 h.

### Resultado por modelo

| | Kling 3.0 pro | Seedance 2.5 1080p |
|---|---|---|
| cr/clip · cr/video | 8,75 · 175 | 45 · 855 |
| a la primera | 16/18 | 17/18 |
| regeneraciones | c09 (miró a cámara), c17 (mantas como alas) | c15 (corte interno a primer plano) |
| render por clip | 2–3 min | 6–7 min |
| concurrencia | 17 a la vez | 12; el 13.º da `429 rate_limit_reached` |
| tamaño medio del clip | 12,3 MB h264 8 bits | 18,4 MB HEVC 10 bits |
| energía de movimiento (YDIF medio, mismo plano c15) | 1,8 | 6,6 |
| decisión | alternativa barata | **estándar** |

---

## 2. Qué funcionó y hay que conservar

1. **Piloto antes de la tanda, y la tanda en paralelo.** Dos pilotos (el plano más difícil de
   personaje y uno de objeto) calibran el modelo por 90 cr; el resto entra de una vez.
2. **Recortes 9:16 exactos** antes de subir: ningún clip salió con bandas ni recorte raro.
3. **Prompts escritos mirando el keyframe**, con una acción, una cámara y candados de
   identidad: 33 de 36 clips a la primera entre los dos modelos.
4. **Lechos por acto** con relevos alineados a los cambios de acto (30 s y 60 s): la música
   cambia cuando cambia la historia sin que nadie lo note.
5. **Mezcla "narracion"** (voz −16 LUFS, lecho −34, sin ducking): suena como la web.
6. **Hojas de contacto de 5 fotogramas** encontraron los tres defectos reales.
7. **Historial en `jobs.json` / `import-map.json`**: las URLs de las versiones rechazadas
   siguen vivas y permiten recuperarlas (se usó para esta retrospectiva).
8. **Un solo plan para los dos modelos**: cambiar de modelo fue cambiar una carpeta de clips.

---

## 3. Fricciones, con evidencia

| # | Fricción | Evidencia | Costo |
|---|---|---|---|
| F1 | **Título en Helvetica en silencio.** El libvips de sharp en macOS sólo trae el backend CoreText de Pango; `fontfile` y fontconfig se ignoran. | Render "Asimovian" y "Helvetica" byte-idénticos; el usuario lo notó a ojo. Ya le había pasado a Bochica v4 sin que nadie lo viera | 45 min + 2 reensamblajes. Resuelto (CoreText + verificación de familia) |
| F2 | **Subida con ids corridos.** `uploads[]` no trae `filename`, y zsh indexa arrays desde 1: `FILES[0]` vacío dejó c18 sin subir | primer PUT: 18 códigos vacíos; segundo: c01→uploads[1] … c18 sin subir | 10 min. Documentado |
| F3 | **Contabilidad manual de jobs.** Ids y URLs copiados a mano con `node -e`; un snippet falló por comillas dentro de comillas; 12 prompts (≈15 KB) pegados literalmente en cada llamada batch | 6 ediciones de jobs.json por tanda; 1 fallo | ~20 min por modelo y riesgo de error |
| F4 | **Sondeo a ciegas.** `jobs_wait` espera 15 s como máximo: ≈25 rondas por video sin nada que hacer entre medias | 45+ llamadas de espera en la sesión | tiempo de agente, no de pared |
| F5 | **La placa still domina el ensamblaje.** `zoompan` sobre la imagen a 2× tarda ~60–90 s por corrida; se ensambló 6 veces | log: 1:32 por corrida, casi todo en el bloque 19 | ~8 min acumulados |
| F6 | **36 prompts a mano** (18 por formato de modelo) | 55 min | es el paso más caro en atención |
| F7 | **Ritmo del guion.** Líneas de 10–15 palabras → 3,4–5,8 s de habla en ventanas de 10 s: narración = 44 % del video, 4–6 s de aire por bloque | `validate-plan`: 8 avisos de aire muerto | decisión editorial pendiente |
| F8 | **El léxico de lechos falla en guiones cortos**: trajo "Río que baja" y "Canoa en el río" a un mito sin ríos | `chooseBedsForStory` sobre 109 palabras | elegido a mano con `--lecho` |
| F9 | **QC sólo a ojo.** 36 clips × 5 fotogramas + zooms; los tres defectos eran detectables por máquina (ver §4.B) | 35 min | tiempo y riesgo de que algo se cuele |
| F10 | **Tope de 12 en vuelo en Seedance** no documentado: el lote de 4 rebotó dos veces | `429 rate_limit_reached` | 8 min de pared |
| F11 | **Rechazados que se pierden.** Las copias v1 vivían en el scratchpad y desaparecieron al cambiar de sesión; sobrevivieron sólo por las URLs | esta retrospectiva tuvo que volver a bajarlos | riesgo |
| F12 | **Cuatro sitios que actualizar por decisión** (playbook, runbook, DNA, memoria) con números repetidos | costos en 3 archivos | deriva futura |
| F13 | **Sin API en el bucle.** Higgsfield tiene API oficial (`cloud.higgsfield.ai`, SDK Python `higgsfield-client`) pero no REST público; con el MCP un agente tiene que pegar prompts y sondear | fuentes en §6 | es la causa raíz de F3 y F4 |

---

## 4. Mejoras propuestas

Ordenadas por impacto sobre el tiempo de atención por mito. Donde hay una decisión que
tomar van tres opciones y una recomendación.

### A. Cerrar el bucle de generación (ataca F3, F4, F10, F11)

**Opción A1 — API de Higgsfield en un script.** `produce-clips.mjs` (o Python con
`higgsfield-client`): sube keyframes, encola con los prompts del JSON, respeta el tope de
12, sondea solo, baja los clips, escribe `jobs.json`/`import-map.json` y guarda los
rechazados. Un comando por mito. Requiere: API key, verificar que expone `seedance_2_5` a
1080p con `start_image`, y **verificar el precio** (la API se cobra aparte del plan; puede
no ser 45 cr). Esfuerzo 3–4 h más la verificación.

**Opción A2 — Seguir en MCP, sin manos.** `emit-batch.mjs` (payload listo por lote de 12,
con los `declined_preset_id` y media ids), `ledger.mjs --from <respuesta de jobs_wait>`
(pega la respuesta JSON y actualiza jobs.json + importa), y sondeo por `sleep` de fondo
(una espera de ~7 min y **una** llamada a `jobs_wait`, en vez de 25). Esfuerzo 1–1,5 h.
Sigue habiendo un copia/pega por lote.

**Opción A3 — Carril web Unlimited** con el arnés `emit-bootstrap-video.mjs`: 0 cr, pero 1
en vuelo (≈65 min por mito), Chrome logueado y el riesgo de fair use ya conocido.

**Recomendación:** A2 esta semana (barata, sin dependencias nuevas) y A1 si la API confirma
precio y modelo; A3 sólo como reserva para cuando no haya créditos.

### B. Gate de calidad automático antes de ensamblar (ataca F9)

`qc-clips.mjs --plan …` que mide por clip, con ffmpeg: **`scene_score` máximo** (corte o
giro brusco), **YDIF medio** (energía de movimiento) y **YDIF de los 12 primeros fotogramas**
(apertura congelada), más resolución/duración. Sólo los marcados pasan a hoja de contactos.

Medido sobre esta producción:

| clip | scene_score máx | YDIF medio | veredicto real |
|---|---|---|---|
| seedance c15 v1 | **0,159 @ 4,12 s** | — | corte interno (defecto) |
| kling c09 v1 | **0,102 @ 4,25 s** | — | giro brusco a cámara (defecto) |
| seedance c06 | 0,049 | — | push-in fuerte, bueno |
| kling c17 v1 | 0,022 | — | mantas como alas (defecto **semántico**, no lo ve) |
| seedance c15 v2 | 0,020 | 6,6 | bueno |
| kling c15 | 0,019 | 1,8 | bueno |

Umbral propuesto: `scene_score > 0,08` ⇒ revisar. Atrapa 2 de los 3 defectos de esta
producción y ninguno de los buenos; el tercero sigue necesitando ojos. Esfuerzo 1 h.
**Recomendación: hacerlo antes del video 2.**

### C. Una sola fuente para los prompts (ataca F6)

`beats/<mito>.json`: por clip, tipo de plano (`retrato_solo`, `duo`, `manos`, `objeto`,
`multitud`, `paisaje`, `cenital`), acción principal, 1–2 secundarias, cámara con endpoint,
y candados extra. `compose-prompts.mjs --modelo seedance|kling` emite el prompt final con
los prefijos/sufijos canónicos y los **candados por tipo de plano** aprendidos aquí:
retrato solo → "stays …, eyes fixed on …, head never turning toward the camera"; multitud →
conteo fijo; manos → "no faces entering"; todos en Seedance → "ONE continuous take, no cuts,
no close-up inserts". Un linter comprueba longitud, `@Image 1`, la frase de toma continua y
que no haya órdenes de quietud. Esfuerzo 2 h. De 36 prompts a 18 fichas de tres líneas.

### D. Ritmo del guion (ataca F7) — decisión editorial

**D1 — Líneas de hasta 19 palabras** (la doctrina ya lo pide): la narración sube a ~65 % y
el costo no cambia. Requiere reescribir el guion (v2) y volver a aprobarlo.

**D2 — Clips a medida con Seedance** (`duration` admite 4–30 s): ventana = habla + 1,5 s.
Compra menos segundos y elimina el aire, pero rompe "5 s por keyframe", el montaje uniforme
y complica el plan.

**D3 — Dejar 5 s × 2 y aceptar el aire** como estilo contemplativo (lo actual).

**Recomendación:** D1 para los mitos nuevos (los guiones se escriben ya con la regla; ver
`direccion-cinematografica.md` §5) y D3 para este video, que ya está entregado.

### E. Ensamblaje más rápido (ataca F5)

Cachear el bloque de la placa still (clave = hash de imagen + duración + kenburns) y bajar el
sobre-escalado de `zoompan` de 2× a 1,5×. Esfuerzo 30 min; ahorra ~1 min por corrida.

### F. Lechos declarados en el guion (ataca F8)

`"lechos_por_acto": ["24-piedra-que-recuerda", "18-manos-de-barro", "04-viento-de-paramo"]`
en el JSON del guion, leído por `build-lecho.mjs`; el `--lecho` queda como override. Y una
comprobación opcional: si el mito ya tiene narración en la web, que el video comparta al
menos un lecho con ella (identidad sonora entre web y video). Esfuerzo 30 min.

### G. Conservar los rechazados (ataca F11)

`clips-vN/rechazados/cNN-v1.mp4` (ignorado por git) al importar una regeneración; las URLs
ya quedan en `jobs.json`. Esfuerzo 15 min.

### H. Un orquestador local (ataca todo lo repetitivo fuera del MCP)

`npm run video:mito -- --slug X --modelo seedance --paso voces|recortes|lecho|plan|payload|importar|qc|ensamblar`
sobre los scripts que ya existen. El runbook pasa de 11 pasos a 6 comandos y los pasos del
MCP quedan como los únicos manuales. Esfuerzo 2–3 h.

### I. Docs: tres fuentes vivas, no cuatro (ataca F12)

Playbook = leyes y cola; runbook = cómo; DNA = decisiones y estado por mito. Los números
(costos, tiempos) viven **sólo** en el DNA y el runbook los cita. La memoria del agente sólo
apunta. Esfuerzo 30 min de poda.

### J. El cuello de botella real de los 40 mitos que faltan no es el video

`npm run mitos:estado` marca 0/17 keyframes en los otros 40 mitos (761 imágenes por hacer en
total). El carril de imágenes va por la web Unlimited a 1 en vuelo (~3 min por pieza ⇒ ~50
min de cola por mito sólo en keyframes). Con el carril de video en ~1 h de atención, la
cadencia realista es **una sesión de imágenes de fondo por mito mientras se produce el
video del anterior**. Planear la cola así; no esperar a tener todos los keyframes.

---

## 5. Plan v4.1 (antes del video 2), en orden

| Paso | Qué | Esfuerzo | Ataca |
|---|---|---|---|
| 1 | `qc-clips.mjs` con gate `scene_score` / YDIF | 1 h | F9 |
| 2 | `emit-batch.mjs` + `ledger.mjs` + sondeo por sleep | 1,5 h | F3, F4, F10 |
| 3 | `beats` + `compose-prompts.mjs` + linter | 2 h | F6 |
| 4 | Cache de la placa still | 0,5 h | F5 |
| 5 | Rechazados a `rechazados/`; `lechos_por_acto` en el guion | 0,75 h | F8, F11 |
| 6 | Orquestador `video:mito` | 2,5 h | todo |
| 7 | Verificar API de Higgsfield (modelo, 1080p, precio, límites) y decidir A1 | 1 h | F13 |
| 8 | Poda de docs a tres fuentes | 0,5 h | F12 |

≈ 10 h de herramientas. Ahorro estimado por mito: de ~2,5 h de atención a ~1 h, y de 3
defectos vistos a ojo a 1.

**Métricas para saber si mejoró** (se apuntan en el DNA por mito): créditos, % a la primera,
regeneraciones, minutos de atención, minutos de pared, defectos atrapados por el gate vs a ojo.

---

## 6. Fuentes externas consultadas (2026-09-11)

- API oficial de Higgsfield en `cloud.higgsfield.ai` con SDK Python `higgsfield-client`:
  https://apiframe.ai/guides/higgsfield-api-guide
- Sin REST público; el acceso programático es por SDK: https://aireiter.com/blog/higgsfield-ai-reviews-pricing-vs-api
- Referencia de precios por clip en el marketplace (Seedance ≈ 3× Kling): https://www.pixazo.ai/models/higgsfield
