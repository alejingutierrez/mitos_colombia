# Pipeline v4 — mito → video por el MCP de Higgsfield (2026-09-09) — default del canal: Seedance 2.5 1080p (ratificado 2026-09-16)

Runbook operativo del carril de producción vigente. Se estrenó con **la-aparicion-del-hombre**
(video 1 del carril; ver §9 con lo medido). Está escrito para que cualquier agente o persona
produzca el siguiente mito muisca sin contexto previo. El contrato general (leyes, aprobación,
cola) sigue en `PRODUCCION-END-TO-END.md`; este doc es el "cómo" paso a paso.

> **Corregido el 2026-09-16 contra el código y los artefactos.** Este documento se escribió
> el 9-sep con Kling como modelo del paso a paso y se le fue añadiendo Seedance encima; los
> precios, la concurrencia y el QC quedaron con cifras de dos carriles mezcladas. Lo que sigue
> ya está corregido, pero **la versión completa y unificada de todo el proceso vive en
> `docs/videos/MANUAL-DE-PRODUCCION.md`** (modelos §3.1 · preflight §3.2 · subida §3.3 ·
> concurrencia §3.5 · QC §6 · costes §7). Este runbook conserva lo que el manual no repite:
> el detalle corrida a corrida de los cuatro videos (§9–§11) y del remontaje del 16-sep (§12).

**Alcance decidido por el usuario (2026-09-09): los 41 mitos muiscas deben quedar completos
con todo** — fichas de biblia, tríptico, narración del sitio y video. Este carril es el que
produce el video; el estado de lo demás se lee del disco con
`npm run mitos:estado -- --comunidad muiscas`.

## 0. Decisiones fijas del carril (no se negocian por video)

| Qué | Decisión | Verificado |
|---|---|---|
| Modelo de video | **DEFAULT DEL CANAL — Seedance 2.5** (estándar desde 2026-09-09, **ratificado como default por el usuario el 2026-09-16**): `seedance_2_5` con el **bloque canónico de params de abajo**, un start_image por clip. **Kling 3.0 queda como alternativa acotada** (`kling3_0`, `mode:"pro"`, `sound:"off"`), con la que se estrenó el carril y se escribió este paso a paso: se usa por decisión explícita para un caso concreto (presupuesto agotado, prueba comparativa), **no es una opción que se sopese en cada video** | Seedance **45 cr/clip** (preflight 2026-09-09, revalidado el 16-sep); Kling **8,75 cr/clip** (preflight 2026-09-09, ⚠ no revalidado) |
| Un clip por keyframe, 5 s | 9 bloques × 2 keyframes = 18 clips = 90 s + placa de cierre still (4 s) | plan-v1.json |
| Un intento por keyframe | Seedance: 18 × 45 = **810 cr** por video + 45 por regeneración (aquí 855). Kling: 18 × 8,75 = 157,5. Preflight antes de encolar: **precio y saldo, en ese orden** (ver el aviso de abajo) | balance MCP |
| Voz | **La misma voz de las narraciones del sitio**: `alejandro_narracion` `9EHAKExD4lT2G6hPG74L`, `eleven_multilingual_v2`, stability .35 / similarity .9 / style .3 / speaker_boost / speed 1.05 (= `DEFAULT_VOICE` de `src/lib/narration.js`). Máster WAV (pcm_48000) | voces-v1/ |
| Música | **Los lechos de las narraciones** (`narration_beds`, **40** piezas de 30 s a −24 LUFS en Blob desde la cuarta tanda del 2026-09-12; el doc decía 24, que era el catálogo de la segunda) encadenados como en la web: tramos iguales, `acrossfade` 4 s, fade in 2 s / out 3 s, a la duración exacta del video (`build-lecho.mjs`) | lecho-v1.wav.json |
| Mezcla | `mix: "narracion"` en el plan: voz a −16 LUFS, lecho a −34 LUFS (18 dB abajo), **sin ducking**, limitador −1,5 dBTP. Receta idéntica a la del reproductor del sitio | assemble-video.mjs §4 |
| SFX aparte | No (salvo que el mito lo pida): el ambiente viene dentro de los lechos | — |
| Título | **Asimovian de verdad**, renderizada con **CoreText** (`scripts/videos/render-text.swift`, compilado al vuelo a `.bin/`): kicker "MITOS DE COLOMBIA · MUISCAS" arriba (uppercase, tracking 0.2em, como el `atlas-kicker` del hero) y el título en caja de frase, 104 px, tracking −0.03em, como el h1 del sitio (6.4rem). El ensamblador comprueba la familia devuelta y aborta si no es la pedida | frame del máster (2ª ronda) |
| Subtítulos | **NO** (usuario 2026-09-09: "no quiero subtítulos"): `burn_subtitles false`, `write_srt false`. Los campos `subtitle` se conservan en el plan por si vuelven | — |
| Montaje | **Sólo cortes secos** (`validate-plan.mjs --secos`); fade global de entrada/salida; título con fade 0,8 s en el bloque 1 | — |
| Cierre | Placa still con Ken Burns "out": recorte 9:16 de la **huella del tríptico** (lo que quedó después) | kf-9x16/cola-huella.jpg |

### 0a. El bloque canónico de params (ratificado por el usuario el 2026-09-16)

> **Palabras del usuario (2026-09-16):** «por ahora vamos a dejar que el modelo de video definido
> como default es seedance 2.5 pro 1080». **No es un cambio de modelo** —Seedance 2.5 es el estándar
> del carril desde el 9-sep, cuando el usuario comparó los dos másters de *la-aparición-del-hombre*
> hechos la misma noche (§9 vs §9b)—: lo nuevo es el **rango** de la decisión. Queda declarado
> **default del canal** y se cierra la puerta a seguir sopesando modelos video por video.
>
> ⚠ **"pro" no es un modo de Seedance 2.5.** `models_explore action:"get" model_id:"seedance_2_5"`
> (16-sep-2026) da como modos `t2v`, `omni_reference`, `video_edit` y `video_extension`; `pro` es un
> modo de **`kling3_0`**, otro modelo. Lo que el usuario llama "pro 1080" es esta configuración
> completa a máxima calidad, que es exactamente la que el carril ya venía usando:

```jsonc
// Bloque canónico del carril. Va idéntico en `generate_video` y en CADA request de
// `generate_video_batch`. Éste es el único sitio del documento donde está escrito
// entero: §0b y §2.8 se refieren aquí.
{
  "model":          "seedance_2_5",
  "mode":           "omni_reference",   // obligatorio con start_image (el default del modelo es t2v)
  "resolution":     "1080p",            // ⚠ NO OMITIR — default del modelo: 720p
  "bitrate_mode":   "high",             // ⚠ NO OMITIR — default del modelo: standard
  "generate_audio": false,              // ⚠ NO OMITIR — default del modelo: true
  "duration":       5,                  // el modelo admite 4-30 s; el canal usa 5
  "aspect_ratio":   "9:16"
}
// + por clip: "medias":[{"value":<media_id>,"role":"start_image"}]
// + por clip: "declined_preset_id":<el id EXACTO que devuelva ese request> (§2.8)
```

**Los tres campos señalados no se pueden omitir nunca.** Los defaults del modelo son otros
(`resolution:"720p"`, `bitrate_mode:"standard"`, `generate_audio:true`, `mode:"t2v"`), así que un
encolado que los deje fuera **sale en 720p, con menos bitrate y con un audio que el canal no quiere**
— y ya pagado. `unlim.available: false` para `seedance_2_5` (16-sep): no hay generaciones ilimitadas
por MCP, cada clip se paga a 45 cr. Capacidad disponible y sin estrenar: `end_image` (ver §0b).

> **`get_cost` NO es una herramienta del MCP** (corregido 2026-09-16; este doc lo citaba como si
> fuera un comando suelto). Es un **booleano dentro de los `params` de `generate_video`**: se manda
> una llamada suelta con los parámetros exactos del lote y `"get_cost": true`, y devuelve el precio
> sin encolar nada. **`generate_video_batch` lo prohíbe explícitamente** en su esquema («Cost
> preflight is not supported inside a batch submission»): **no se puede preflightear un lote**. El
> orden es: (1) `generate_video` con `get_cost:true` y los params del lote, (2) `balance`, (3)
> encolar. Receta completa en `MANUAL-DE-PRODUCCION.md` §3.2.

### 0b. Ficha del default: Seedance 2.5 por MCP (nació como variante el 2026-09-09; default del canal desde §0a)

El usuario pidió recrear el video 1 con Seedance 2.5 a 1080p y recargó créditos para
hacerlo por MCP. Todo el carril es idéntico (mismos keyframes subidos, mismas voces, lecho,
plan y ensamblador); cambian el modelo, el precio y el formato del prompt:

| Qué | Seedance 2.5 por MCP |
|---|---|
| Request | **El bloque canónico del §0a tal cual** (incluidos los tres campos que no se pueden omitir; `bitrate_mode:"high"` cuesta lo mismo que standard) + `medias` con el `start_image` del clip + `declined_preset_id` como en Kling |
| Costo | **45 cr por clip** (preflight con `get_cost:true` el 2026-09-09, revalidado el 2026-09-16; 720p = 32,5) → 18 clips = **810 cr**, 5,1× Kling |
| Prompt | `movimiento-vN-seedance.json`: doctrina-movimiento-v2, **8 párrafos** (estilo "on twos" + `@Image 1` lock · beats `[0-2s][2-4s][4-5s]` · cámara única con endpoint y paralaje · invariantes físicos positivos · materia + identidad · NOT-list estética + candado del plano). Seedance lee TODO como instrucción positiva: la quietud se escribe como conducta ("stays bent over…"), nunca como orden de no moverse |
| Artefactos | `clips-v1-seedance/` (jobs.json, import-map.json), `plan-v1-seedance.json`, máster `-final-v1-seedance.mp4` — versión paralela a la de Kling para comparar |
| Concurrencia | **Regla del carril: olas de ~8 en vuelo y reponer a medida que terminan** (envolvente segura de lo medido, fijada el 2026-09-16). El tope real no es estable: en esta corrida entraron 12 y rebotaron los cuatro siguientes (`c15`-`c18`, nota en `clips-v1-seedance/jobs.json`); Bachué rebotó uno con 9 en la ola; Bochica dos con 11; El Dorado dio 429 con 7 en vuelo. **El `429 rate_limit_reached` puede rebotar request a request, no siempre el lote entero**: en Bachué entraron 8 de 9 y en Bochica 9 de 11, y se reenvía sólo el rebotado. (Como `generate_video_batch` admite 12 requests por llamada, los cuatro del video 1 fueron un segundo envío que rebotó completo; los otros dos casos sí son rechazos parciales dentro de una misma llamada.) Kling aceptó 17 a la vez sin 429. Detalle por tanda en `MANUAL-DE-PRODUCCION.md` §3.5 |
| Render | ~6-7 min por clip a 1080p (los dos pilotos: 6,5 min). Salida **HEVC 10-bit** (`yuv420p10le`) 1080×1920 24 fps ~25 Mb/s; el ensamblador la pasa a h264 8-bit sin problema |
| Web Unlimited | la alternativa a 0 cr sigue documentada en `pipeline-v3-profesional.md` (harness `emit-bootstrap-video.mjs`, 1 en vuelo, ~3,5 min/clip); no se usó aquí porque el usuario prefirió créditos |

**Capacidad disponible y sin usar: el fotograma FINAL.** `models_explore action:"get" model_id:"seedance_2_5"`
(16-sep-2026) devuelve `medias.roles = [start_image, end_image, image_references, video_references,
audio_references]` y `duration` **4-30 s** (no sólo 5). Es decir: **el fotograma final no es un
diferenciador de Kling** —que también lo tiene (`models_explore`, 12-sep, anotado en
`stopmotion-v2-rediseno.md` §0)—, sino una capacidad del estándar que **ninguno de los cuatro videos
ha probado**. Donde algún doc diga que "Kling es el único que acepta inicial Y final", está
desactualizado. El `MANUAL-DE-PRODUCCION.md` commiteado en `6acd5dfa` (§3.1) daba estos roles por
"sin verificar" porque no se había llamado a `models_explore`; **esta línea es esa llamada**, y el
manual ya la cita como fuente. ⚠ Verificado sólo para `seedance_2_5`: `gemini_omni_flash_1_1` sigue
sin consultarse.

**Mejoras pendientes (v4.1):** ver `retrospectiva-carril-v4-video-1.md` §4–5 — gate de QC automático, bucle de generación sin manos, prompts desde `beats`, cache de la placa, orquestador `video:mito`. ⚠ **Nada de eso se construyó**: `qc-clips.mjs` con `scene_score` sigue siendo una propuesta, no una herramienta (`scripts/videos/` sólo tiene `qc-sheet.mjs`); ver §2.9.

## 1. Precondiciones (se leen del disco, no de un doc)

1. Keyframes del mito listos: `content/videos/muiscas/videos/<mito>/keyframes/bNa.jpg … bNb.jpg`
   (2K 1520×2688) + `bloques.json` con las 9 líneas, y el tríptico en
   `content/videos/muiscas/mitos/<mito>/{entrada,acto,huella}.jpg`. `npm run mitos:estado` debe
   marcar `17/17 ✔` en la columna video. **Si faltan keyframes, no hay video**: se generan por el
   carril de imágenes (`docs/mitos-produccion-imagenes.md`), nunca a mano en este paso.
2. `.env` del repo principal con `ELEVENLABS_API_KEY`, `POSTGRES_URL`/`DATABASE_URL` (lechos),
   `BLOB_READ_WRITE_TOKEN` no hace falta (los lechos se LEEN del blob).
3. Saldo Higgsfield ≥ **18 × 45 = 810 cr** con el estándar (Seedance 2.5) **más** colchón para 2-3
   reintentos (945 cr en total). Con la alternativa Kling: 18 × 8,75 = 157,5 + colchón. Se comprueba
   con `balance`, y el precio con `generate_video` + `get_cost:true` (ver el aviso de §0).
4. `ffmpeg`/`ffprobe` locales; `sharp` del repo principal (`node_modules` vive en el repo padre,
   los worktrees resuelven hacia arriba); fuente `content/videos/fonts/Asimovian-Regular.ttf`.

## 2. Paso a paso (lo que se hizo, en orden)

```bash
M=la-aparicion-del-hombre; D=content/videos/muiscas/videos/$M
```

### 2.1 Guion JSON (0 cr)
`docs/videos/muiscas/mvp-guiones/guion-<mito>-v1.json` con las 9 líneas de `bloques.json`
(regla madre: se escribe sobre las imágenes que existen), `voice_id`/`model_id`/`voice_settings`
de las narraciones, `window: 9.5` (2 clips × 5 s − 0,5 de offset) y el campo `aprobado`.
Sin `aprobado` la fase de voces no arranca (protocolo de PRODUCCION-END-TO-END §0b).

### 2.2 Voces en WAV (cuota ElevenLabs, 660-970 caracteres por mito — medido en §3)
```bash
node scripts/videos/generate-voice-el.mjs --lines docs/videos/muiscas/mvp-guiones/guion-$M-v1.json --out-dir $D/voces-v1 --format wav
```
Reporta habla real por toma (silencedetect) y palabras/s. `SE PASA` ⇒ reescribir la línea
(nunca `atempo`). Con esta voz y `speed 1.05` el ritmo medido fue 2,4–3,6 pal/s.

### 2.3 Recortes 9:16 exactos para subir (0 cr)
Los keyframes 2K miden 1520×2688 (no es 9:16 exacto). Se recortan al centro a **1512×2688**
(2688·9/16) en JPEG q95 4:4:4 → `$D/kf-9x16/cNN-<tag>.jpg` + `manifest.json`. La placa de cierre:
`cola-huella.jpg` = recorte 9:16 de la huella 1:1 del tríptico (elegir el recorte mirando la
imagen: aquí x 430→1582 de 2048 para conservar las huellas 1-4). Ver el bloque de código en
`git log -p` de este doc o rehacerlo con sharp (`extract` centrado + `jpeg({quality:95})`).

Mapeo fijo bloque → clips: `bN → c(2N−1), c(2N)`; el `acto` del tríptico ocupa el hueco que
`bloques.json` marca en `reusadas` (aquí b4b = c08).

### 2.4 Lecho musical desde el catálogo de las narraciones (0 cr)
```bash
node scripts/videos/build-lecho.mjs --guion docs/videos/muiscas/mvp-guiones/guion-$M-v1.json \
  --duration 94 --slug $M --out $D/lecho-v1.wav \
  --lecho 24-piedra-que-recuerda,18-manos-de-barro,04-viento-de-paramo
```
`--duration` = 18×5 + cola (4) = 94. Sin `--lecho` elige por carácter del texto (igual que la
narración) — **pero en un guion de ~110 palabras el léxico se dispara con una sola palabra**:
aquí trajo "Río que baja" y "Canoa en el río" a un mito sin ríos. Regla del carril: **elegir
los lechos por ACTO mirando los títulos** (`npm run mitos:lechos -- --listar`) y fijarlos con
`--lecho`; el `.json` al lado deja el porqué. Con 3 lechos y 94 s los relevos caen en 30 s y
60 s: alinearlos con los cambios de acto del guion (b4 = empieza el barro, b7 = el aliento).

El catálogo son **40 piezas** desde la cuarta tanda (2026-09-12), no 24. ⚠ **Trampa de ESTE
worktree:** su `scripts/mitos/generar-lechos.mjs` sólo llega a la tercera tanda (26 prompts, slugs
`07`…`32`); los ocho de la cuarta (`33`…`40`) están en el commit `b784d3c7` de la rama
`claude/elevenlabs-myth-narration-8de8a2`. No afecta a `build-lecho.mjs` —que lee la tabla, no el
catálogo del script—, pero sí a quien intente generar lechos nuevos (`--nuevos N`) desde aquí.
⚠ Sin verificar: que la tabla `narration_beds` tenga hoy exactamente 40 filas (comprobarlo exige
abrir Postgres con `--listar`).

### 2.5 Prompts de movimiento (0 cr) — `$D/movimiento-v1.json`

> **Este bloque describe la doctrina de KLING**, con la que se escribió el paso a paso. Para el
> estándar vigente (Seedance 2.5) la forma del prompt es la de §0b: doctrina-movimiento-v2, ocho
> párrafos, con el candado `@Image 1`. Las dos diferencias que más importan están marcadas abajo.

Un prompt por clip, **escrito mirando el keyframe** (Read de la imagen), con:
- `estilo_prefijo` byte-idéntico: `Handmade paper-maquette stop-motion animation with a slightly stepped cadence. `
- cuerpo: UNA acción principal + 1-2 secundarias (viento, tela, polvo) + **UNA cámara** motivada
  (`push-in` retratos/objetos · `tracking` lateral L→R viajes · `tilt up` contrapicados ·
  `overhead drift`/`locked` cenitales · `follow from behind` marchas). Caras: "calm and identical,
  mouth closed". Conteo de figuras: "their number stays exactly as in the image".
- `invariantes_sufijo` byte-idéntico (papel/cartón/fibra/arcilla, composición y luz fijas,
  "motion begins on the first frame", `No text, no lip-sync, no new characters.`)
- ~700-820 caracteres. En los prompts de Kling no se usó `@Image 1`.
  ⚠ **Corregido 2026-09-16:** este doc afirmaba que `@Image 1` «es sintaxis del editor web, no del
  MCP». **Es falso para Seedance por MCP**: `bachue/movimiento-v5-seedance.json` (37 apariciones) y
  `el-dorado/movimiento-v1-seedance.json` (35) lo usan como candado de plano —
  `background, light and hour identical to @Image 1 for all 5 seconds` — y esas tandas dieron 18/18 y
  17/17 a la primera. En los prompts de Seedance el candado `@Image 1` es **obligatorio**; la vieja
  advertencia sólo vale para el bloque de Kling en el que está escrita.
Kling lee bien la instrucción positiva; los negativos van cortos y al final.
- **Personaje solo en plano medio con acción física** (lección c09): si el prompt no lo
  ata, Kling tiende a que el personaje se ENDERECE y MIRE A CÁMARA al final (y al girar la
  cara pierde identidad). Candado positivo obligatorio: "stays bent over … for the whole
  clip, seen in three-quarter profile, eyes fixed on <objeto>, head never turning toward
  the camera". En dúos frente a frente (c04, c15) y en planos de manos no hizo falta.

### 2.6 Plan de armado (0 cr) — `$D/plan-v1.json`
Copiar `content/videos/muiscas/videos/la-aparicion-del-hombre/plan-v1.json` y cambiar rutas/textos.
Raíz: `mix "narracion"`, `music lecho-v1.wav`, `music_fade_out 0` (el lecho ya trae su fade),
`title_font ../../../fonts/Asimovian-Regular.ttf`, `title_y 280` (la spec de keyframes deja libre
el 20 % superior), `burn_subtitles false`, `write_srt false` (sin subtítulos desde 2026-09-09). Bloques: voz + `subtitle` en el PRIMER
clip de cada bloque; `title`/`title_sub` sólo en el bloque 1; placa still al final.
```bash
node scripts/videos/validate-plan.mjs --plan $D/plan-v1.json --secos --suggest   # 0 errores (avisos de aire = normales aquí)
```

### 2.7 Subir keyframes al MCP (0 cr)
1. `media_upload` con `files: [{filename, content_type:"image/jpeg"} × N]` → devuelve
   `uploads[]` con `media_id`, `upload_url` (presignada S3, 24 h), `url` (CDN).
   **No devuelve `filename`: el orden de `uploads[]` es el de `files[]`.**
   **Tope del esquema (verificado el 2026-09-16 en la definición de la herramienta): `files` admite
   1-20 entradas por llamada.** Con 18-19 keyframes cabe justo; un mito con más planos obliga a
   **partir en dos llamadas y concatenar `uploads[]` EN ORDEN** antes de dárselo al script. Los dos
   mapeos corridos del historial (punto 2) no vinieron de partir el lote —18 y 19 keyframes caben en
   una llamada— sino del bucle a mano; partir en dos añade una segunda ocasión para el mismo error,
   así que con más de 20 planos la concatenación se hace en node, no en la shell.
2. **Guardar esa respuesta en `$D/kf-9x16/uploads.json` y subir con el script, NO a mano:**

   ```bash
   node scripts/videos/subir-keyframes.mjs --uploads <dir>/kf-9x16/uploads.json --dir <dir>/kf-9x16
   ```

   El script empareja archivo ↔ URL por índice explícito en node, exige que el número de
   archivos y de URLs coincida, verifica que TODOS devuelvan HTTP 200 y aborta si alguno
   falla. Escribe `higgsfield-media.json` e imprime los `media_id` para el paso 3.

   ⚠️ **Por qué existe el script:** el bucle a mano en zsh falló DOS veces (c18 del video 1
   y los 19 keyframes del video 2, todos desplazados un puesto). Los arrays de zsh son
   1-indexados y `media_upload` no devuelve `filename`, así que un `FILES[0]` vacío corre
   el mapeo entero sin que nada avise. **No volver a hacerlo a mano.**
3. `media_confirm` `{type:"image", media_ids:[…]}` → todos `uploaded`. **Tope: 1-20 ids por llamada**
   (mismo esquema, verificado el 2026-09-16). Confirmar sólo cuando TODOS los PUT dieron 200:
   confirmar un lote incompleto es confirmar un mapeo corrido.
4. `higgsfield-media.json` queda con el mapa keyframe → media_id. **Los media_id expiran**:
   para regenerar clips meses después hay que volver a subir.

### 2.8 Generar los clips (**45 cr cada uno** con el estándar Seedance 2.5; 8,75 con Kling)

> ⚠ **Corregido 2026-09-16:** el título de este paso decía «8,75 cr cada uno», el precio de Kling,
> y hacía subestimar el presupuesto **por 5,1×**. Un video del estándar son 810 cr, no 157,5.

- **Piloto primero, y de lo DIFÍCIL** (personajes caminando con rostro; con presupuesto exacto, los
  planos con riesgo de moderación) con `generate_video_batch` de 1-3 requests; mirar 5 fotogramas
  antes de lanzar los demás.
- Request por clip **con el default del canal**: los siete campos del **bloque canónico del §0a**,
  copiados de allí tal cual (es el único sitio donde están escritos con su valor), +
  `prompt:<movimiento-vN-seedance.json>` + `medias:[{value:<media_id>, role:"start_image"}]` +
  `declined_preset_id:<el que devuelva el request>`. **No se copia de memoria: `resolution`, `bitrate_mode` y `generate_audio` van escritos
  en cada request** o el clip sale en 720p con audio (§0a). `end_image` está disponible en este
  modelo y el canal no lo ha usado nunca (§0b): si algún día se estrena, se decide por video, no por
  defecto.
- Request por clip **con la alternativa acotada Kling** (así se estrenó el carril; sólo por decisión
  explícita, no se sopesa por video):
  `{ model:"kling3_0", prompt:<movimiento-v1.json>, duration:5, aspect_ratio:"9:16",
  mode:"pro", sound:"off", medias:[{value:<media_id>, role:"start_image"}],
  declined_preset_id:"24bae836-2c4a-48e0-89b6-49fcc0b21612" }`.
- **`declined_preset_id` es obligatorio en los dos modelos.** Sin él el MCP **no encola** y responde
  recomendando un preset — "IN THE DARK" (escenas nocturnas) en el piloto del video 1. Otros vistos:
  "3D RENDER" `5a77643c-b6cc-4efd-bdc6-ab8ff48dfa82` y "DROWN IN MUSIC"
  `f1821f84-945b-4cd1-9085-1f479db0028e`. **El recomendador elige por escena: hay que declinar el id
  EXACTO que devuelva cada request, no uno fijo** (§9c).
- **El resto, en PARALELO** (usuario, 2026-09-09: "Higgsfield tiene alta concurrencia,
  se pueden generar múltiples creaciones al tiempo"): `generate_video_batch` admite 12
  requests por llamada y se pueden hacer varias llamadas seguidas (con Kling, 12 + 5 en el mismo
  turno; los 17 quedaron `in_progress`/`waiting` en paralelo). El "1 en vuelo" era una
  restricción del Unlimited de la WEB, no del MCP por créditos.
  ⚠ Ojo: **12 requests por llamada no es lo mismo que 12 en vuelo**. Con Seedance el tope real
  muerde antes — **la regla del carril es mantener ~8 en vuelo** (§0b): en la tanda Seedance de ese
  mismo video 1 entraron los 12 de la primera llamada y rebotaron con `429` los cuatro del segundo
  envío (§9b). `generate_video_batch` **no admite `get_cost`**: el preflight va
  aparte (§0). `jobs_wait` en grupos ≤12 cada 10-15 s hasta `all_terminal`, y **un solo**
  `show_generation_by_ids` al final si se quiere galería. Tiempo de render medido: ver §9.
- Guardar `$D/clips-v1/jobs.json` con `{cNN: {job_id, url, model, mode, sound, duration,
  aspect_ratio, cost_cr, media_id, prompt_ref}}` (a mano desde la respuesta de `jobs_wait`).

### 2.9 Importar + QC de clips (0 cr)
```bash
node scripts/videos/import-mcp-clips.mjs --plan $D/plan-v1.json --jobs $D/clips-v1/jobs.json --apply
```
Baja cada url a `clips-v1/cNN.mp4`, verifica 1080×1920 / 5 s con ffprobe y escribe
`clips-v1/import-map.json` (historial; los .mp4 no van a git).

**QC: la hoja de contactos ya está escrita, no se reinventa el comando** (⚠ corregido 2026-09-16:
este paso describía en prosa un `ffmpeg -vf "select=…"` a mano):

```bash
node scripts/videos/qc-sheet.mjs --plan $D/plan-v1.json --out $D/qc   # [--per 6] [--width 216]
```

Muestrea **5 fotogramas fijos por clip (0 · 1,25 · 2,5 · 3,75 · 4,9 s)** y los compone en hojas de
6 clips. Y luego **mirarlas**: apertura no congelada, papel intacto, sin figuras nuevas, caras
iguales entre el primer y el último fotograma. Dos límites del script que conviene saber: los
tiempos de muestreo están **fijos en el código** (pensados para clips de 5 s: sobre los A→B de
Kling de 3-15 s o sobre el cierre de 8,42 s las muestras se repiten o caen fuera), y sólo recorre
bloques `type:"motion"` con `clip`, así que **las placas `still` y el bloque del cierre nunca salen
en la hoja**.

⚠ **No existe ningún gate automático de QC.** El `qc-clips.mjs` con `scene_score`/YDIF que proponen
`retrospectiva-carril-v4-video-1.md` §4.B y §5 **es una propuesta, no una herramienta**: en
`scripts/videos/` sólo están `qc-sheet.mjs` y los QC del carril stop-motion. Los `scene_score` que
este doc reporta en §9c, §9d y §11 se midieron **a mano con ffmpeg** en su momento y no hay script
que los reproduzca.

Un clip malo se regenera SOLO (**45 cr** con Seedance; 8,75 con Kling) con el mismo `media_id` y un
prompt corregido, y se reimporta con un jobs.json parcial.

### 2.10 Ensamblar + entregas (0 cr)
```bash
node scripts/videos/validate-plan.mjs --plan $D/plan-v1.json --secos
node scripts/videos/assemble-video.mjs --plan $D/plan-v1.json --out $D/$M-final-v1.mp4
ffmpeg -i $D/$M-final-v1.mp4 -c:v libx264 -b:v 8M -maxrate 8M -bufsize 16M -pix_fmt yuv420p -c:a aac -b:a 192k -movflags +faststart $D/$M-final-v1-social.mp4
ffmpeg -i $D/$M-final-v1.mp4 -vf scale=720:1280 -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 128k -movflags +faststart $D/$M-final-v1-preview.mp4
```
El ensamblador imprime las ganancias aplicadas (voz → −16, lecho → −34) y la fuente del título.
La placa still tarda (zoompan sobre 2×: ~1 min por cada 5 s); es normal.

### 2.11 Cierre
`channel-dna.json` (aprendizajes) · commitear guion, voces, movimiento, plan, manifiestos,
import-map y docs (no los .mp4, no el lecho .wav, no kf-9x16/*.jpg) · entregar el preview al
usuario · marcar la cola en `PRODUCCION-END-TO-END.md` §9.

## 3. Costos y tiempos del carril

⚠ **Corregido 2026-09-16:** esta tabla venía encabezada por Kling (157,5 cr/video), que dejó de ser
el estándar el 9-sep. El presupuesto real de un video del carril es **810-855 cr**, y así lo dicen
el §0b de este mismo doc y el §10 de `PRODUCCION-END-TO-END.md`.

| Concepto | Por video (18 clips) |
|---|---|
| **DEFAULT DEL CANAL — Seedance 2.5 `omni_reference` 1080p 5 s sin audio** (ratificado 2026-09-16, §0a) | 18 × 45 = **810 cr** (+45 por cada regeneración; 19 clips = 855) |
| Alternativa acotada — Kling 3.0 pro 5 s sin sonido (barata, pero sólo por decisión explícita) | 18 × 8,75 = 157,5 cr (+8,75 por regeneración) |
| Descartado — Gemini Omni Flash 1.1 1080p | 22,5 cr/clip (⚠ precio anotado por la propia tanda del 11-sep en `bachue/movimiento-v4-gemini.json` y `clips-v4/jobs.json`, no revalidado con preflight), pero 13/18 a la primera: 405 + 5 × 22,5 = 517,5 cr **y tanda rechazada** (§9d) |
| ElevenLabs | ~660-970 caracteres (9-10 tomas): 664 en La aparición, 967 en Bochica |
| Lechos, título, recortes, ensamblaje, entregas | 0 |
| Pared | ver §9 |

## 4. Errores conocidos de este carril

| Síntoma | Causa | Acción |
|---|---|---|
| `generate_video_batch` → `submission_failed … Preset "IN THE DARK" was recommended` | recomendador de presets (escenas nocturnas) | reenviar con `declined_preset_id` del id que devuelva |
| Título en Helvetica aunque el plan diga Asimovian | **el libvips de sharp en macOS sólo trae el backend CoreText de Pango**: `fontfile`, `FONTCONFIG_FILE` y `PANGOCAIRO_BACKEND=fontconfig` se ignoran ("Available backends are: coretext") y toda fuente no instalada en el sistema cae a Helvetica sin avisar — pasó con el woff2 de Bochica v4 Y con el TTF del primer máster de este video | el título se renderiza con CoreText por archivo (`render-text.swift`), que devuelve la familia real; el ensamblador aborta si no coincide. Verificación manual: renderizar el mismo texto en Helvetica y comparar — si salen iguales, no cargó |
| Faltó un keyframe por subir / ids corridos | `uploads[]` sin `filename` + arrays 1-indexados en zsh | mapear por índice explícito y verificar 18 × HTTP 200 antes de `media_confirm` |
| Lecho de río/canoa en un mito sin agua | léxico de caracteres sobre un texto de 110 palabras | `--lecho` por acto (§2.4) |
| `SE PASA` en una toma | línea larga | reescribir, `--only N` |
| Clip devuelto en horizontal (1920×1080) con `aspect_ratio:"9:16"` pedido | defecto observado en `gemini_omni_flash_1_1` | lo detecta `import-mcp-clips.mjs` al ffprobear; regenerar. **Nunca importar clips sin el guardián de resolución** |
| Escenario u hora que cambian a mitad del clip | deriva de `gemini_omni_flash_1_1` | candado de plate fijo en el prompt (`background, light and hour identical to @Image 1 for all 5 seconds`); si reincide, cambiar de modelo |
| `429 rate_limit_reached` en uno o varios requests del lote | el tope de trabajos en vuelo de Seedance/Gemini no es estable: se midieron rebotes con 12, con 9-10 y hasta con 7 | **olas de ~8 y reponer a medida que terminan** (§0b). El 429 rebota **request a request**, no el lote: reenviar sólo los rebotados, tal cual. Es normal, no un error de operación |
| Un bloque colocado DESPUÉS de una placa `still` no aparece: la placa se estira hasta el final | **bug del ensamblador, corregido 2026-09-12**: `zoompan` con `d=N` emite N fotogramas POR CADA fotograma de entrada, y `-loop 1 -t duration` ya entrega N → una placa de 4 s salía de 400 s. Nunca se notó porque la placa siempre iba al final y el `-t totalDur` la recortaba | `assemble-video.mjs` ahora pasa `-frames:v ${frames}` al codificar la placa. Los másters ya entregados no están afectados |
| Mucho aire tras cada línea (4-6 s) | líneas de 10-15 palabras en ventanas de 10 s | aceptado en v1 (el mito respira); para tensar, líneas de ≤19 palabras en el guion vN+1 |

## 9. Resultado del video 1 — la-aparicion-del-hombre (2026-09-09)

| Medida | Valor |
|---|---|
| Video | `content/videos/muiscas/videos/la-aparicion-del-hombre/la-aparicion-del-hombre-final-v1.mp4` — 94,0 s, 1080×1920 24 fps, h264 CRF18 + AAC 192k; `-social.mp4` y `-preview.mp4` al lado; `.srt` de 18 cues |
| Clips | 18 × Kling 3.0 pro 5 s (h264 1080×1920 24 fps 5,04 s, 7,6–17 MB c/u) + 2 regeneraciones tras QC (c09: se enderezaba y miraba a cámara; c17: mantas abiertas como alas) |
| Créditos | 18 × 8,75 = 157,5 + 2 × 8,75 = **175 cr** (balance 219,5 → 44,5). Preflight `get_cost` exacto |
| Aciertos a la primera | 16/18 clips (89 %). Los dos rehechos eran planos de personaje en acción con cuerpo entero |
| Voz | 9 tomas WAV, 664 caracteres; habla 3,4–5,8 s por línea (2,4–3,6 pal/s); narración = 41 s de 94 (44 %) |
| Lecho | 24-piedra-que-recuerda (0–34 s) → 18-manos-de-barro (30–64 s) → 04-viento-de-paramo (60–94 s); relevos alineados con b4 (el barro) y b7 (el aliento) |
| Mezcla | voz −16 LUFS (ganancias +3,3 / +5,8 dB por toma), lecho −34; mezcla final I = −16,6 LUFS, LRA 17 LU, pico −1,5 dBFS |
| Tiempos de pared | subir 18 keyframes 2 min · piloto 2,5 min · tanda de 17 en paralelo ≈ 10 min (los `waiting` entraron escalonados) · regen 5-7 min c/u · ensamblaje 1:32 (placa still = casi todo) · total ≈ 2,5 h con QC y docs |
| Trampas nuevas | preset "IN THE DARK" · `uploads[]` sin filename + zsh 1-indexado · woff2 → Helvetica silenciosa · léxico de lechos sobre guion corto · personaje solo se gira a cámara |

**Cómo se ve** (2ª ronda, 2026-09-09 noche): kicker + título Asimovian real sobre el cielo de b1a
(0,8–5,6 s), sin subtítulos, cortes secos cada 5 s, placa final de la huella con Ken Burns y el
lecho de viento apagándose. (La 1ª ronda llevaba subtítulos quemados y un título que resultó ser
Helvetica: ver §4.)

### 9b. Versión Seedance 2.5 por MCP del mismo video (2026-09-09, misma noche)

| Medida | Valor |
|---|---|
| Video | `la-aparicion-del-hombre-final-v1-seedance.mp4` (+ social/preview/srt), mismo plan salvo `clips-v1-seedance/` |
| Clips | 18 × Seedance 2.5 omni_reference 1080p bitrate high (HEVC 10-bit, 11–27 MB c/u) + 1 regeneración (c15: metió un corte a primer plano de manos en el último 0,9 s — multi-shot no pedido) |
| Créditos | 18 × 45 = 810 + 45 = **855 cr** (4,9× la versión Kling) |
| Aciertos a la primera | 17/18 (94 %); c09 y c17, los que Kling falló, aquí salieron bien a la primera |
| Tiempos de pared | pilotos 6,5 min · tanda de 12 ≈ 7 min · los 4 restantes tuvieron que esperar el cupo (429) · total ≈ 45 min de generación |
| Carácter | movimiento más amplio y cámaras más decididas que Kling (push-ins que terminan en primer plano: c06, c11); mismo estilo papel; caras estables |
| Lección de prompt | a Seedance hay que decirle "ONE continuous take, no cuts, no close-up inserts": es multi-shot por diseño y un endpoint de cámara ambicioso ("ending with the hands centered") lo convierte en un corte |


## 9c. Video 2 — «El salto del Tequendama» (2026-09-11, primer video con el estándar ya fijado)

| Medida | Valor |
|---|---|
| Video | `content/videos/muiscas/videos/bochica/el-tequendama-final-v5.mp4` — 99 s, 1080×1920 24 fps (+ social y preview) |
| Clips | **19/19 Seedance 2.5 1080p a la primera, CERO regeneraciones** (video 1: 17/18) |
| Créditos | 19 × 45 = **855 cr**, sin desperdicio |
| Voz | 10 tomas WAV, 967 caracteres · 67 s de habla en 99 s = **68 % del video** (video 1: 44 %) |
| Lecho | 14-tormenta → 02-tambor → 11-rio-que-baja: **los mismos tres de la narración de `el-tequendama` en la web**, así que web y video comparten identidad sonora |
| Mezcla | I = −16,1 LUFS · LRA 11,1 · pico −1,4 dBFS |
| Plan | 0 errores, **2 avisos** de aire muerto (video 1: 8) |
| Pared | **~9,5 min de render** para las 17 tomas de las tres olas (sellos de `clips-v5/jobs.json`: primer `submitted` 2026-09-12T00:05:05Z → último `completed` 00:14:36Z; los dos pilotos, `c12` y `c14`, ya habían terminado a las 00:04:04Z y su `submitted` no quedó anotado) + ~4 min de ensamblaje. ⚠ Corregido 2026-09-16: este doc decía «~1 h 15 min de generación», que incluía la redacción de prompts y las esperas de operación y se leía como tiempo de render |

**Por qué salió mejor que el video 1, y qué conservar:**

1. **Partir de prompts ya auditados.** Los 19 prompts del `movimiento-v4.json` (escritos y
   auditados en agosto por redactor + auditor contra la doctrina de movimiento) se derivaron
   1:1 añadiendo sólo el candado de toma continua. Derivar costó minutos y rindió 19/19.
   **Regla: antes de escribir prompts nuevos, mirar si el mito ya tiene un movimiento-vN auditado.**
2. **El candado desde el primer envío.** `The whole clip is ONE continuous take from a single
   camera setup` + `no cuts, no close-up inserts, no second shot` en los 19: ni un corte interno
   (el defecto que costó una regeneración en el video 1). `scene_score` máximo del lote: 0,125,
   y era el arranque de un push-in, no un corte.
3. **Guion con líneas de 17-19 palabras** (la doctrina, que el video 1 no cumplía): la narración
   llena el 68 % del video y los avisos de aire muerto bajan de 8 a 2. **El ritmo del guion es la
   palanca más barata de calidad: cuesta 0 créditos y se decide antes de generar nada.**
4. **Lechos del mismo mito que en la web.** Si el mito ya está narrado en el sitio, reusar sus
   lechos (`SELECT bed_slugs FROM myth_narrations WHERE myth_slug = …`) da continuidad sonora
   entre las dos piezas sin trabajo extra.

**Trampas nuevas de esta corrida:**

- **Preset `DROWN IN MUSIC`** (`f1821f84-945b-4cd1-9085-1f479db0028e`) además de IN THE DARK y
  3D RENDER. El recomendador elige por escena: hay que declinar el id EXACTO que devuelva cada
  request, no uno fijo.
- **El tope de concurrencia mordió antes de 12.** En esta tanda, del primer envío entraron 9 y
  rebotaron dos con `429 rate_limit_reached` (`c06` y `c10`, con su nota en `clips-v5/jobs.json`),
  que se reenviaron solos 3 min 42 s después (00:05:05Z → 00:08:47Z). ⚠ Este bullet decía
  «el tope real es ~10» y el §11 dice «7-8»: **no hay un tope estable**; la regla del carril es
  olas de ~8 (§0b).
- **REINCIDENCIA del bucle zsh** (§2.7, fricción F2 de la retrospectiva): volví a iterar desde 0
  y los 19 keyframes se subieron desplazados un puesto. Se detectó contando códigos HTTP (18×200
  + 1 vacío) y se re-subió entero. **El patrón obligatorio es `for i in {1..N}` pidiendo
  `uploads[i-1]`, y verificar N×200 con nombre no vacío antes de `media_confirm`.**
- **Desvío de prompts en c15-c17**: se redactaron al vuelo en vez de usar el archivo. Los clips
  pasaron el QC y se aceptaron; `movimiento-v5-seedance.json` guarda el texto enviado en
  `prompt` y el auditado en `prompt_auditado_v4`, con el motivo en `desvio`. **El archivo de
  movimiento refleja lo que produjo el clip, no la intención.**

## 9d. Video 3 — «Bachué» (2026-09-12) y el bake-off contra Gemini Omni Flash 1.1

Este mito ya tenía un video de agosto (`bachue-final.mp4`, grok, voz `eleven_v3`). El v5 es su
remake con el carril v4 y lo reemplaza. El usuario pidió probar primero **Gemini Omni Flash 1.1**;
al ver el resultado dijo **«no me gusta»** y pidió rehacerlo con el estándar. Las dos versiones
se conservan porque la comparación vale más que el ahorro de disco.

| Medida | Gemini Omni Flash 1.1 (descartado) | Seedance 2.5 (máster) |
|---|---|---|
| Llamada | `mode:"image-to-video"` · `start_image` · 1080p · h264 | `mode:"omni_reference"` · 1080p · `generate_audio:false` · `bitrate_mode:"high"` · HEVC 10-bit |
| Precio | 22,5 cr/clip | 45 cr/clip |
| A la primera | **13/18** (5 regeneraciones) | **18/18, cero regeneraciones** |
| Gastado | 517,5 cr, resultado rechazado | 810 cr, resultado aceptado |
| `scene_score` máx. | — | 0,085 (c10, un tilt-up; el resto < 0,08) |
| Veredicto | la mitad de precio no compensa | **estándar ratificado** |

Todo lo demás se reusó tal cual entre las dos versiones, porque el problema era el modelo y no el
material: las 9 voces de `voces-v4/`, `lecho-v4.wav`, los 18 keyframes ya subidos (mismos
`media_id` de `kf-9x16/higgsfield-media.json`) y los mismos 18 prompts. **Cambiar de modelo en un
mito ya preparado cuesta un archivo de movimiento, un plan y la tanda: ~50 min de pared.**

**Máster de esta corrida:** `content/videos/muiscas/videos/bachue/bachue-final-v5-seedance.mp4` — 94 s,
1080×1920 24 fps, I = −16,2 LUFS, pico −1,3 dBFS, título Asimovian verificado por CoreText,
sin subtítulos. Lecho `01-flauta-de-niebla → 09-telar-de-semillas → 06-laguna-de-iguaque`.

⚠ **Ya no es el máster vigente de Bachué.** El 2026-09-16 el usuario remontó el mito escena a
escena mezclando las tres tandas: el vigente es `bachue-final-v7-seleccion.mp4` (§12). Y el
veredicto de esta sección («Gemini rechazado») hay que leerlo con lo que pasó después: **cuatro de
las tomas de esta tanda de Gemini están en el máster vigente**, así que el rechazo era de tomas
concretas, no del modelo.

**Lo que hay que saber de Gemini si algún día se vuelve a mirar:**

1. **`gemini_omni` y `gemini_omni_flash_1_1` son modelos distintos.** El primero es 720p máximo
   y **no acepta `start_image`** — por eso quedó descartado en agosto. El segundo hace 1080p y 4K
   y sí acepta imagen de inicio vía `mode:"image-to-video"`. Yo consulté el modelo equivocado dos
   veces y el usuario tuvo que corregirme dos veces. **Regla: `models_explore list` completo antes
   de afirmar que un modelo no puede algo; no fiarse de la memoria ni de una entrada del DNA.**
2. **Deriva de plano (3 de 18).** Cambia escenario u hora a mitad del clip: la noche estrellada se
   vuelve día gris, un fondo gris se vuelve lago azul con montañas nevadas. Se mitiga con candado
   de plate fijo (`background, light and hour identical to @Image 1 for all 5 seconds`) pero no
   desaparece. Seedance no tiene este defecto.
3. **Salida horizontal (1 de 18).** Devolvió 1920×1080 con `aspect_ratio:"9:16"` pedido. **Lo
   atrapó el guardián de resolución de `import-mcp-clips.mjs`, no el ojo**: la comprobación
   automática al importar paga por sí sola.
4. **Desintegración de materia (1 de 18).** La niebla se volvió bolas de algodón literales — el
   mismo defecto que ya tenía `kling3_0` en el carril v3.
5. Misma concurrencia inestable que Seedance (olas de ~8, §0b); mismo baile de `declined_preset_id`
   por escena.

## 10. El cierre de canal (2026-09-12)

Desde el 2026-09-12 **todo video termina con el cierre de canal**: 8,42 s fijos que invitan a
leer los mitos completos en mitosdecolombia.com (ley 5 del playbook). Se produjo una vez y se
reusa; el runbook completo está en **`docs/videos/cierre-de-canal.md`**.

**Los tres videos entregados ya lo llevan** (2026-09-12): cada uno tiene su `plan-v6.json` y su
`lecho-v6.wav` reconstruido a la duración total. Pegarlo cuesta 0 créditos y ~5 min de ensamblaje.

Lo único que hay que hacer por video es añadir un bloque al plan y construir el lecho con la
duración total incluyendo el cierre:

```jsonc
{ "n": 20, "type": "motion",
  "clip": "../../cierre/cierre-canal-v1-mudo.mp4",
  "duration": 8.42,
  "voice": "../../cierre/voces-v1/voz-cierre.wav" }
```

```bash
node scripts/videos/build-lecho.mjs --guion <guion> --duration <video + 8.42> --slug <slug> \
  --lecho a,b,c --out <dir>/lecho-vN.wav
```

**Lo que aporta al carril, más allá del clip:**

- **La pantalla de un dispositivo no la dibuja el modelo, se compone en post.** Seedance pinta una
  interfaz convincente de lejos y basura de cerca (el cuerpo del relato decía «Lasos de Colombia
  region obseas fiemia»). El reparto correcto es: el modelo hace el mundo físico con la cámara
  clavada, y ffmpeg pone la captura real con `perspective` sobre el cuadrilátero medido del vidrio.
- **El movimiento de cámara se puede añadir en post y sale mejor.** Pedir cámara quieta y luego
  hacer el Ken Burns con `zoompan` da un movimiento exacto y repetible, y deja el compuesto
  posible. Ojo: `crop` evalúa `w`/`h` una sola vez, un zoom escrito como `crop=w='W/z(t)'` falla.
- **Lo que se vaya a componer encima, el keyframe lo deja despejado.** El pulgar cruzando el
  vidrio obligó a un matte; como el pulgar se movía, el matte unión dejaba un hueco con el texto
  inventado del modelo, y el color no separa el pulgar del arte arenoso de la página para hacerlo
  por fotograma. Rehacer la imagen costó centavos; pelear con el matte, una hora.
- **Se le puede pedir a Seedance que un objeto no se mueva EN ABSOLUTO y lo cumple**: con el
  candado repetido en los beats, en el párrafo de cámara y en la lista NOT, el teléfono derivó
  1-2 px en 120 fotogramas y el pulgar se quedó clavado en (580, 1233).


## 11. Video 4 — «El Dorado» (2026-09-12), el primero con presupuesto exacto

| Medida | Valor |
|---|---|
| Clips | **17/17 a la primera, cero regeneraciones** |
| Créditos | 17 × 45 = **765**, de un saldo de 797. Quedaron 32: cero margen |
| Keyframes | **gpt-image-2.5-sunburst** en calidad high, primera vez en el carril |
| Voz | 9 tomas, 59,5 s de habla en 97,4 s = **61 %** |
| Lecho | 08-lluvia-sobre-la-piedra → 15-canoa-en-el-rio → 13-manantial-que-brota: **los mismos tres de la narración de `el-dorado` en el sitio** |
| `scene_score` | máximo 0,073 (c07); los 17 por debajo de 0,08 |

**Lo que este video añade al carril:**

- **Con presupuesto exacto, el piloto deja de ser opcional.** Se enviaron primero los TRES planos de
  riesgo (el cuerpo cubierto de polvo de oro) por 135 cr, para descubrir un bloqueo de moderación
  barato en vez de caro. Pasaron 3/3. **Pilotar lo difícil, no lo fácil.**
- **El canon puede contradecir un guardarraíl del sitio, y entonces manda el canon.** «Sin oro
  corporal» tiene a El Dorado como excepción explícita. Lo que sí se mantiene es el pudor, que aquí
  además es anti-moderación: figura siempre de espaldas, guayuco descrito en cada prompt, torso de
  frente y rostro en la lista NOT.
- **El oro va como POLVO MATE en todos los prompts.** El brillo metálico es lo que más rápido rompe
  el registro de papel; `never glinting, never metallic, never blooming into light` en los nueve
  clips donde aparece.
- **`gpt-image-2.5-sunburst` es un salto real** y acepta los mismos parámetros que `gpt-image-2`,
  incluida `images.edit` con referencias, así que la biblia visual vieja sigue sirviendo. Su registro
  es algo más dimensional: se nota si se compara con los videos anteriores, no dentro de este.
- **Aquí el 429 llegó con sólo 7 en vuelo.** Tercera cifra distinta en tres tandas (12 · 9-10 · 7):
  **el tope no es estable y no hay que escribirlo como si lo fuera**. Regla del carril: olas de ~8
  y reponer (§0b); el 429 rebota request a request y se reenvía sólo el rebotado.
- **Otra trampa de zsh, distinta de la del bucle:** `set -- $var` NO separa por espacios en zsh, así
  que un bucle de descarga escribió archivos con el nombre entero pegado. La descarga va con
  `import-mcp-clips.mjs`, que además verifica resolución y lleva el `import-map`.

## 12. El remontaje por selección escena a escena — Bachué v7 (2026-09-16)

La primera corrida del carril que **no generó un solo clip**: 0 créditos, 0 llamadas al MCP. El
usuario comparó las tomas de las tandas que ya existían, eligió una por escena y el máster se montó
con esa selección. La ley 4 («no se mezclan modelos dentro de un mismo video») queda acotada a lo
que siempre quiso decir: **no se mezclan modelos dentro de una TANDA de generación** —para poder
compararlas—; el montaje final sí puede escoger la mejor toma de cada tanda.

| Medida | Valor |
|---|---|
| Máster | `content/videos/muiscas/videos/bachue/bachue-final-v7-seleccion.mp4` — **102,458333 s**, 1080×1920, SAR 1:1, 24 fps (+ `-social.mp4` y `-preview.mp4` al lado) |
| Reparto de tandas | **9 grok (agosto) · 5 Seedance 2.5 · 4 Gemini Omni Flash 1.1** (`seleccion-usuario.json`, 18 entradas) |
| Créditos | **0.** Todo el material ya existía |
| Plan | `plan-v7-seleccion.json` = `plan-v6.json` con tres cambios y nada más: la carpeta de clips, un `_tanda` por bloque y el `_notas` reescrito (comprobado campo a campo) |
| Sonido | **INTACTO respecto a la v6**: mismas `voces-v4/`, mismo `lecho-v6.wav`, mismos `mix:"narracion"`, `voice_lufs −16`, `music_lufs −34`, `voice_offset 0.5`, `music_fade_out 0` |
| Bloques | 20: 18 `motion` + la placa `still` (`laguna_iguaque_A.crop-9x16.jpg`, Ken Burns "out", 4 s) + el cierre de canal (8,42 s) |

**Lo que hay que normalizar para mezclar tandas.** Las 18 elegidas se copian a `clips-seleccion/`
renombradas `cNN.mp4` y se igualan tres invariantes, porque las tandas no coinciden en ninguno:
**resolución** (las nueve de grok venían a 720×1280), **duración de bloque** (cuatro de grok —c09,
c10, c12, c15— duraban 6,041667 s; las de Seedance 5,041667; las de Gemini 5,013) y **fps + SAR**.
Verificado con ffprobe sobre las 18 normalizadas: **1080×1920, SAR 1:1, 24/1, 120 fotogramas,
5,000000 s exactos, las dieciocho**. El comando exacto que las produjo ⚠ **no quedó en ningún
script ni commit**; está reconstruido, con el detalle de cómo, en `MANUAL-DE-PRODUCCION.md` §5.9.

**Lo que este montaje añade al carril:**

- **El descarte es inventario.** Nueve tomas de grok archivadas cuatro semanas volvieron al aire, y
  cuatro salen de la tanda de Gemini que se había rechazado **entera** el 11-sep. Consecuencia
  operativa: **no borrar los clips de las tandas descartadas y anotar dónde quedaron** (los de
  Bachué viven en cuatro carpetas repartidas en tres worktrees; `seleccion-usuario.json` guarda la
  ruta absoluta de origen de cada toma elegida).
- **`seleccion-usuario.json` es el `import-map` de un montaje por selección.** En esta corrida es el
  único rastro: `clips-seleccion/` no tiene `import-map.json` porque nada se importó del MCP.
- **Mezclar tandas está permitido; mezclar resoluciones nativas tiene un coste visible.** La mitad
  del video viene de 720p subido a 1080 con lanczos, que recupera nitidez aparente y no información
  — y donde más se nota es en la textura de papel, que es la identidad del canal. Es una decisión
  editorial del usuario y hay que decirlo cada vez que se entregue este máster. La opción limpia, si
  se repite, es **regenerar la toma elegida con el modelo vigente usando el mismo keyframe**, no
  reescalarla. ⚠ Sostenido por la resolución de los archivos de origen, no por haber visto el máster
  en movimiento.
