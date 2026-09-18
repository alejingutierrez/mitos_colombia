# PRODUCCIÓN DE VIDEOS — PLAYBOOK END-TO-END PARA AGENTES

**Este es el documento maestro.** Describe el proceso completo de producción de un video
del canal "Mitos de Colombia" — de mito elegido a video entregado — escrito para que
CUALQUIER agente pueda ejecutar su fase sin contexto previo. Cada fase es un contrato:
entrada → trabajo → salida → criterio de aceptación. Si tu fase referencia otro doc,
ese doc es LECTURA OBLIGATORIA antes de tocar nada.

Versión 1.5 · 2026-09-16 · **Pipeline v4: generación por el MCP de Higgsfield, estándar Seedance 2.5 1080p** (v1.1 =
auditada por panel de críticos: ejecutabilidad + consistencia + completitud; v1.2 = las
leyes 3, 4 y 8 cambian por decisión del usuario del 2026-09-09 y el carril operativo pasa a
`pipeline-v4-mcp.md`; el carril web-unlimited de v3 queda como alternativa sin créditos;
v1.3 = la ley 4 se ratifica con el bake-off contra Gemini Omni Flash 1.1 y se corrige el
tope de concurrencia a ~10; tres videos entregados; v1.4 = entra la ley 5, el cierre de
canal al final de todos los videos, y las leyes 5-8 corren un número;
**v1.5 · 2026-09-16 = auditoría contra el repo**: se reescribe la ley 4, se marca §7 como
histórico y se corrigen §1, §2, §3, §6, §8, §10 y §11 — ver el aviso de abajo).

> **AUDITADO Y CORREGIDO EL 2026-09-16 CONTRA EL REPO.** Este playbook se quedó atrás en
> varias secciones; lo corregible se corrigió en el sitio y lo muerto va marcado. **La
> descripción completa, medida y vigente del proceso vive en
> `docs/videos/MANUAL-DE-PRODUCCION.md`** — cuando este doc y el manual se contradigan,
> manda el manual, que está medido contra el disco. Lo que sigue siendo de este playbook
> sin reservas: **las leyes de §0, el protocolo de aprobación §0b y la cola §9**.
> **§7 entero es HISTÓRICO** (carril web "unlimited", muerto desde septiembre);
> §1, §2, §3, §6, §8, §10 y §11 llevan correcciones puntuales fechadas hoy.

**Alcance (usuario, 2026-09-09): los 41 mitos muiscas deben quedar completos con todo** —
fichas, tríptico, narración del sitio y video. Ningún mito se da por hecho a medias.

**Precedencia entre documentos** (habrá contradicciones — son 8+ docs vivos):
(1) las Leyes de §0 · (1b, desde 2026-09-16) **`MANUAL-DE-PRODUCCION.md`**, que está medido
contra el disco y corrige a todos los runbooks, incluido este playbook fuera de §0, §0b y
§9 · (2) este playbook · (3) las doctrinas específicas EN SU DOMINIO
(`pipeline-v4-mcp.md` §2.5 para prompts de video por MCP — `doctrina-movimiento-v2.md`
nunca llegó a git, sus reglas viven resumidas ahí y en `videos/bochica/movimiento-v4.json`;
`direccion-cinematografica.md` para cámara/escena/guion visual;
`docs/mitos-produccion-imagenes.md` para el navegador) ·
(4) `pipeline-v4-mcp.md` como runbook operativo, `pipeline-v3-profesional.md` y el resto. Ante contradicción: gana el de mayor
rango; si el rango empata, se hace lo CONSERVADOR (lo que no gasta ni publica) y se
reporta en Notas de la cola (§9) — el agente NO edita el doc ajeno para "arreglarlo".
De `plantillas-prompts.md` rigen §1 (keyframes), §2 (movimiento), el registro de §3a y
§4-§5 (música/sfx); sus §3b (voces viejas) y §6 (crossfades, flujo MCP) son v2
superseded. De `proceso-mitos-a-video.md` rigen solo el checklist anti-nsfw (§5b) y las
lecciones de moderación/ffmpeg/entregas (§6); sus apartados de montaje y modelo son v2.

---

## 0. LO QUE ES ESTE CANAL Y LAS LEYES INNEGOCIABLES

**El producto**: videos verticales 9:16 (~1:30-2:00) que narran mitos indígenas
colombianos, en estilo visual **maqueta de papel hecha a mano** (paper-maquette
stop-motion), narrados en español colombiano por UNA voz (la del usuario, la misma de las
narraciones del sitio), **sin subtítulos quemados** (usuario, 2026-09-09), con el título en
la fuente de títulos del sitio (Asimovian, renderizada por CoreText: ver ley 9) y música de
cama tomada del catálogo de lechos de las narraciones.

**Las leyes — violarlas invalida el trabajo, no importa lo demás:**

1. **Las imágenes ya producidas son la base del video.** El guion se escribe SOBRE la
   biblioteca existente (keyframes del mito + placas de biblia), nunca al revés.
   Generar keyframes o fichas nuevas requiere aprobación EXPLÍCITA del usuario. Un beat
   canónico sin imagen: se narra sobre una imagen existente que lo soporte, o queda fuera.
2. **Solo cortes secos.** Ningún plan lleva `xfade` ni `transition_dur`. Corte limpio
   entre todos los clips. (Sobreviven: fade global de entrada/salida y el fade del título.)
3. **La voz del canal es la MISMA de las narraciones del sitio** (usuario, 2026-09-09):
   `alejandro_narracion` `9EHAKExD4lT2G6hPG74L` (clon profesional de la voz del usuario en
   la cuenta actual de ElevenLabs) en **`eleven_multilingual_v2`**, settings `stability .35 /
   similarity_boost .9 / style .3 / speaker_boost / speed 1.05` = `DEFAULT_VOICE` de
   `src/lib/narration.js` (si cambia allí, cambia aquí). Máster WAV (`--format wav`).
   Los ids de voz son por cuenta: `bNziytBsHtCSsgcPplG9` ya NO existe. `eleven_v3` sigue
   DESCARTADO (pierde el parecido). La línea que no cabe en su ventana se REESCRIBE —
   `atempo` está PROHIBIDO.
4. **El video se genera con Seedance 2.5 por el MCP de Higgsfield** (usuario, 2026-09-09,
   tras comparar ambas versiones de la-aparicion-del-hombre): `seedance_2_5`,
   `mode: "omni_reference"`, `resolution: "1080p"`, `generate_audio: false`,
   `bitrate_mode: "high"`, **5 s por keyframe**, 9:16, un `start_image` por clip =
   **45 cr por clip** (verificado con `get_cost`; ≈855 cr por video con una regeneración).
   Prompts en el formato de la doctrina v2 (8 párrafos, `@Image 1`, y siempre "ONE
   continuous take, no cuts, no close-up inserts"). Tope real ~10 clips en vuelo (el 11.º
   da `429 rate_limit_reached`). ⚠ **Ese «~10» está en disputa y este documento se
   contradice a sí mismo**: §9 recoge las tres cifras que circulan en los docs (7-8, 10 y
   12) y prescribe **olas de ~8** como envolvente segura; `generate_video_batch` acepta
   como mucho **12 `requests[]`** por llamada (límite del esquema, no del rate limit).
   Hasta que alguien lo mida, manda el ~8 de §9. **Un intento
   por keyframe**: piloto de 1-2 clips antes de la tanda. Kling 3.0 pro (`kling3_0`, 8,75
   cr/clip) queda como alternativa barata; el carril web-unlimited de v3
   (`pipeline-v3-profesional.md`) está **MUERTO** — ya no es alternativa a 0 cr (ver §7).
   **No se mezclan modelos dentro de una misma TANDA de generación** (si se mezclan no se
   puede comparar el modelo, que es para lo que se encola una tanda). *Corregido
   2026-09-16: lo que este punto decía antes —«no se mezclan modelos dentro de un mismo
   video»— lo rompió el máster vigente de Bachué por elección explícita del usuario:*
   `bachue-final-v7-seleccion.mp4` *mezcla tres modelos (9 tomas grok de agosto + 5
   Seedance 2.5 + 4 Gemini Omni Flash 1.1) escogidos toma a toma en la mesa de montaje.*
   **El montaje final SÍ puede escoger la mejor toma de cada tanda**, siempre que las tomas
   queden normalizadas al mismo formato (1080×1920, SAR 1:1, 24 fps, 5 s) y la elección
   quede registrada (`seleccion-usuario.json` + el `_notas` del plan). Ver
   `MANUAL-DE-PRODUCCION.md` §5.9. **RATIFICADO 2026-09-12** en el bake-off de Bachué contra
   `gemini_omni_flash_1_1` (1080p, `start_image`, la mitad de precio): Seedance 18/18 a la
   primera contra 13/18 de Gemini, que además cambia escenario u hora a mitad del clip. La
   mitad de precio con regeneraciones y un rechazo sale más caro (§9d del runbook).
5. **Todo video cierra con el CIERRE DE CANAL** (usuario, 2026-09-12): el clip fijo
   de 8,42 s de `content/videos/muiscas/cierre/` que invita a leer los mitos completos
   en mitosdecolombia.com. Va como UN bloque más del plan
   (`clip: "../../cierre/cierre-canal-v1-mudo.mp4"`, `duration: 8.42`,
   `voice: "../../cierre/voces-v1/voz-cierre.wav"`), nunca concatenado aparte, y el
   lecho se construye con la duración total INCLUYENDO el cierre para que no haya
   costura de audio. Se produjo una vez y se reusa: `docs/videos/cierre-de-canal.md`.
   **La pantalla del celular es el sitio real compuesto en post, no lo que pinta el
   modelo**; si cambia el diseño del sitio se recaptura y se reensambla, sin gastar
   créditos.
6. **Fiel al canon, sin alargar.** El canon vive en la DB del sitio (ruta en §1). Nada
   de moralejas, nombres no documentados ni inventos. Guardarraíles visuales del sitio:
   sin texto en pantalla (salvo el título del bloque 1), sin coronas/templos europeos ni cruces, sin
   iconografía mesoamericana, sin desnudez, sin joyería u oro corporal (salvo que el
   mito lo documente, p. ej. El Dorado), rasgos SIEMPRE indígenas andinos, personajes de
   espaldas o a media distancia por defecto.
7. **`lint-spec.mjs` y el checklist anti-moderación son precondición dura** en todo lo
   visual: el filtro de Seedance reacciona a la IMAGEN de inicio (verificado 3/3).
8. **Los personajes nunca hablan en pantalla** (narración en off). En video, el candado
   es `no lip-sync, no talking` en el NEGATIVE — jamás una orden de quietud.
9. **Sonido y título como en el sitio** (usuario, 2026-09-09): la música del video son los
   **lechos de las narraciones** (`narration_beds`, elegidos por acto y encadenados con
   `scripts/videos/build-lecho.mjs`), mezclados con la receta del reproductor
   (`mix: "narracion"`: voz −16 LUFS, lecho −34 LUFS, sin ducking); el **título va en
   Asimovian** (`--font-display`, "todos los títulos") con la composición del hero del
   sitio (kicker uppercase arriba, título en caja de frase, tracking −0.03em) y se
   renderiza con **CoreText** (`scripts/videos/render-text.swift`): el libvips de sharp en
   macOS sólo trae el backend CoreText de Pango, así que `fontfile`/fontconfig se ignoran y
   cualquier fuente no instalada cae a Helvetica sin avisar (pasó dos veces). El ensamblador
   compara la familia devuelta con la pedida y aborta si no coincide. **Sin subtítulos
   quemados** (`burn_subtitles false`, `write_srt false`).

### 0b. Protocolo de aprobación del usuario

Puntos donde SE PARA y se pregunta (todo lo demás es autónomo): **(a)** el guion de
cada mito, ANTES de la fase 2 (voces) · **(b)** cualquier imagen nueva (ley 1) ·
**(c)** el video final antes de darlo por cerrado · **(d)** cualquier gasto fuera del
presupuesto (§10).

Formato y registro (sin esto, la aprobación NO existe para los demás agentes):
- **Guion**: se presenta en chat como texto legible bloque a bloque (nunca JSON crudo) +
  el mapeo visual (bloque → keyframes) + duración estimada. Aprobado ⇒ se escribe
  `"aprobado": "<fecha> por usuario"` en el JSON del guion y SE COMMITEA. Para
  cualquier agente: **guion sin campo `aprobado` = borrador; la fase 2 no arranca.**
- **Video**: se entrega el `-preview.mp4` como archivo + las observaciones de QC.
  Aprobado ⇒ `"aprobado_video": "<fecha>"` en `_notas` del plan, commiteado, y ✅ en §9.
- **Sin respuesta del usuario**: el mito queda `esperando aprobación` en Notas de §9 y
  el agente sigue con OTRO mito. Nunca asumir aprobación por silencio.

⚠ **La ley se saltó una vez y queda registrado** (auditoría 2026-09-16):
`guion-el-dorado-v1.json` **no tiene campo `aprobado`** y aun así el mito llegó hasta el
final (17/17 clips, 765 cr gastados, máster ensamblado — §9 fila 4). Nadie anotó
aprobación retroactiva, así que no la hay: **el precedente no autoriza a repetirlo**. Los
cinco guiones que sí lo llevan: `bachue-v4`, `bochica-v4-2min`, `bochica-v5`, `huitaca-v1`,
`la-aparicion-del-hombre-v1` (verificado con `grep`).

---

## 1. MAPA DEL REPO Y CONVENCIONES

```
docs/videos/
  MANUAL-DE-PRODUCCION.md         ← EL MANUAL VIGENTE (2026-09-16): proceso completo, medido contra el disco
  BITACORA.md                     ← bitácora de corridas
  PRODUCCION-END-TO-END.md        ← este playbook (el contrato: leyes §0, aprobación §0b, cola §9)
  pipeline-v4-mcp.md        ← runbook v4 por MCP (estándar Seedance 2.5), paso a paso
  retrospectiva-carril-v4-video-1.md ← qué pasó en el video 1, fricciones medidas y plan v4.1
  pipeline-v3-profesional.md      ← runbook v3 (web unlimited Seedance; alternativa sin créditos)
  (doctrina-movimiento-v2.md nunca se commiteó: sus reglas están en pipeline-v4 §2.5 y en movimiento-v4.json)
  direccion-cinematografica.md    ← cámara, escalas, luz, narrativa (LEY fases 1, 3, 4)
  plantillas-prompts.md           ← vigente: §1, §2, registro §3a, §4-§5 (ver Precedencia)
  proceso-mitos-a-video.md        ← histórico v2 (vigente: anti-nsfw §5b y lecciones §6)
  muiscas/
    channel-dna.json              ← decisiones bloqueadas del canal (actualizado 2026-08-31)
    biblia-visual-video.md        ← el mundo muisca, exclusiones, personajes bloqueados
    mvp-guiones/guion-<mito>*.json
docs/mitos-produccion-imagenes.md ← doctrina del navegador Higgsfield (LEY para fase 6)
scripts/videos/
  generate-voice-el.mjs (--format wav) · generate-keyframes.mjs · lint-spec.mjs
  build-lecho.mjs (lecho desde narration_beds) · validate-plan.mjs (--secos)
  import-mcp-clips.mjs (VIGENTE: clips del MCP → clips-vN + import-map) · qc-sheet.mjs (hoja de contacto)
  import-clips.mjs (⚠ carril web MUERTO — no usar; ver §7 y §8)
  assemble-video.mjs (mix narracion, title_font TTF) · specs/*.mjs
content/videos/fonts/Asimovian-Regular.ttf ← fuente de títulos (OFL, la del sitio)
content/videos/muiscas/
  biblia/                         ← 89 fichas (jpg + crop-9x16) + manifest.json + higgsfield-ids.json
  audio/musica-muisca-andina.mp3  ← cama muisca de v2/v3 (95 s) · sfx/ (4 sfx de 10 s) — en v4 la música son los lechos
  videos/<mito>/                  ← keyframes/, kf-9x16/ (recortes exactos + higgsfield-media.json),
                                     voces-vN/, lecho-vN.wav(.json), clips-vN/ (jobs.json, import-map.json),
                                     plan-vN.json, movimiento-vN.json, másters
```

**La DB del canon** es **Postgres**, y la columna narrable es **`myths.mito`**
(`scripts/schema.pg.sql:28` y `:52`); la consulta viva es la de las narraciones del sitio,
`SELECT id, slug, title, mito FROM myths WHERE slug = $1`
(`scripts/mitos/generar-narracion.mjs:401`). **Corregido 2026-09-16:** este párrafo mandaba
antes leer el canon de `data/mitos.sqlite` con `SELECT title, slug, content`. Ese sqlite del
repo principal (`/Users/alegut/MyApps/Personal/mitos_colombia/data/mitos.sqlite`, desde un
worktree `sqlite3 -readonly "$(git rev-parse --git-common-dir)/../data/mitos.sqlite"`) es un
**snapshot viejo**: verificado que su `.schema myths` **no tiene columna `mito`** y que sus
slugs son los largos de SEO (`bachue-madre-primigenia-de-iguaque`,
`huitaca-deidad-oscura-y-diluvio`), no los cortos que usan los guiones. **Sirve para
inventariar slugs, no para escribir el guion.** Detalle en `MANUAL-DE-PRODUCCION.md` §2.1.
Ojo con `editorial/`: el pueblo va en singular (`editorial/muisca/myths/`) y sus slugs
son cortos (`bachue.mjs`), distintos de los slugs largos del sqlite.

**Convenciones**: keyframes `b<bloque><a|b>[_descripcion]` (ambas formas existen:
Bochica con descripción, la-aparición sin ella) con `.crop-9x16.jpg` = lo que se anima ·
clips `cNN.mp4` (orden = bloques del plan) · voces `vozNN.mp3` (índice = línea del
guion) · TODAS las rutas de un plan.json son relativas a su carpeta · si un mito no
tiene `keyframes/manifest.json` (Bochica no lo tiene), la descripción de cada escena
está en `scripts/videos/specs/<pueblo>-<mito>-escenas.mjs`.

**Versionado `vN`**: N es la versión del GUION y arrastra todo. Un cambio de texto o
ventanas crea `guion-…-vN+1` y obliga a regenerar/renombrar voces, movimiento y plan a
vN+1. PROHIBIDO mezclar versiones en un ensamblaje (plan, voces y clips comparten N —
lo verifica el agente, el ensamblador no). Regenerar CLIPS no sube la versión (§8).

**Env**: `ELEVENLABS_API_KEY` y `OPENAI_API_KEY` en el `.env` del repo principal
(gitignored); los scripts lo cargan solos vía dotenv desde cualquier worktree.

⚠ **Lo que NO existe en este worktree** (`next-muisca-video-3e07cd`, verificado 2026-09-16):
`scripts/mitos/prepare-openai-keyframes.mjs` y `prepare-openai-triptych.mjs`, y por tanto
tampoco los scripts de `package.json` `mitos:prepare:keyframes:openai` ni
`mitos:prepare:triptych:openai` que manda usar `docs/mitos-produccion-imagenes.md` §5.
**Sólo están en el repo principal.** Quien produzca imágenes desde aquí siguiendo ese doc
se choca con un comando inexistente: o se trabaja desde el repo principal, o se copian los
scripts primero. También falta el material: este worktree tiene **5** carpetas en
`content/videos/muiscas/videos/` y **1** `bloques.json`, contra **41** y **39** en el repo
principal.

### 1b. Git para agentes

- **Rama por mito**: `video/<mito>` desde la rama de origen (hoy
  `claude/video-tests-search-ae3b0e`; tras el merge, `main`). Los artefactos del mito
  se committean ahí; PR contra la rama de origen AL CERRAR CADA FASE con salida, no al
  final del mito.
- **La cola §9 y los claims** se committean DIRECTO a la rama de origen, en commits
  atómicos que SOLO tocan este archivo (pull → editar → commit → push; conflicto =
  re-pull y reaplicar).
- **Qué va a git**: guiones, voces (gastan cuota), planes, movimiento.json, import-map,
  manifests, srt, docs. **Los `.mp4` y `descargas/` NO.** Regla: "si perderlo obliga a
  volver a gastar o rompe la continuidad del canal, va a git".
- ⚠️ **Higiene pendiente** (ver pipeline §1): voces alejandro de Bachué/Bochica v2 y
  planes actualizados viven SIN COMMIT en el worktree `myth-mobile-design-c8ea4f`.
  Antes de producir sobre esos videos: verificar que ya se rescataron; si no, rescatar
  primero (o parar y reportar). Los artefactos del Bochica v4 (§9) ya están en la rama
  de origen y NO dependen de eso.

---

## 2. FASE 1 — GUION (agente guionista)

**Entrada**: mito asignado (claim en §9). **Lectura obligatoria**:
`direccion-cinematografica.md` (entera) · `plantillas-prompts.md` §3a ·
`pipeline-v3-profesional.md` §2.

**Trabajo**:
1. Leer el canon COMPLETO **de Postgres**: `SELECT id, slug, title, mito FROM myths WHERE
   slug = $1` (la misma consulta que alimenta las narraciones del sitio,
   `scripts/mitos/generar-narracion.mjs:401`). Se narra **sólo el título y la columna
   `mito`**; `historia`, `versiones`, `leccion` y `similitudes` son expediente editorial,
   no canon narrable. Si `mito` está vacía, el mito no se narra ni se videa.
   **Corregido 2026-09-16:** este paso mandaba `sqlite3 <DB> "SELECT title, slug, content
   …"`; ese sqlite no tiene columna `mito` y usa los slugs largos de SEO (§1). Úsalo sólo
   para inventariar slugs. La cola §9 trae el slug exacto; si
   hay variantes listadas, leerlas todas y quedarse con la más completa. La sección
   "Interpretación" del sitio NO es canon. Si existe ficha editorial
   (`editorial/muisca/myths/<slug-corto>.mjs`), leer sus `researchNotes`.
2. **Inventariar las imágenes disponibles ANTES de escribir** (ley 1): keyframes del
   mito (con su manifest o su spec, §1) y placas de biblia utilizables (paisajes/
   tableaus; las fichas de personaje sobre fondo crema NO sirven como escena). Armar la
   lista de planos reales.
3. Escribir el guion: **N bloques de 2 frases y 17-19 palabras** (N = lo que la
   biblioteca soporte a 2 clips por bloque; 9-12 típico; 2 minutos es techo, no meta).
   **Corregido 2026-09-16: es una BANDA, no un techo.** Escrito como «≤19 palabras»
   autorizaba el guion de 10-15 palabras del video 1, el que dejó la narración en el
   **44 %** del metraje y 8 avisos de aire muerto; con 17-19 el video 2 subió al **68 %**
   con 2 avisos. La ventana la fijan los clips, no el texto: alargar la línea no alarga el
   video, **rellena el hueco que ya estaba pagado** (`MANUAL-DE-PRODUCCION.md` §2.2).
   Registro **fogón-visual-coloquial**: oralidad cercana y digna ("dicen que", "óigame
   bien", "puro agua"), imágenes sensoriales, cero slang que abarate. Reglas duras:
   gancho con giro en el bloque 1 · cada verso abre con el plano que acompaña · UNA
   cita directa del personaje, en el clímax · bookend de objeto · última línea con el
   agua quieta o su equivalente · nombres propios máx. 2 (excepción documentada si el
   canon nombra a dos dioses) · sin moralejas.
4. Presupuesto de habla. **Corregido 2026-09-16:** el «2,4-2,6 palabras/s» que decía aquí
   es de agosto, con la voz vieja, y sobreestima la ventana. Con la voz oficial a
   `speed 1.05` lo **medido** va de **2,08 a 3,53 pal/s** (nueve tomas de
   `bachue/voces-v4`) y de **1,91 a 3,57** en La aparición: 19 palabras entran en
   **5,4-9,1 s** (19 ÷ 3,53 y 19 ÷ 2,08). *Re-medido el 2026-09-16 con el mismo método del
   script (`silencedetect=n=-35dB:d=0.2`, palabras ÷ habla real) sobre las nueve tomas de
   cada mito. Dos cifras que circulan se quedan cortas por abajo y hay que ignorarlas al
   presupuestar aire: el «2,4-3,6 en La aparición» de `pipeline-v4-mcp.md` §2.2 (`voz08`
   son 11 palabras en 5,75 s = 1,91 pal/s) y el «19 palabras entran en 5,4-8,6 s» de
   `MANUAL-DE-PRODUCCION.md` §2.2, que no cuadra con su propio piso de 2,08.* `window` por línea: la norma
   vigente es **duración real del bloque en el plan − `voice_offset`** (bloque de 2 clips de
   5 s ⇒ 9,5). La fórmula vieja «habla estimada + 1,5-2,5 s de aire» (9,35-12,0) sobrevive
   en `bachue-v4` y `bochica-v5`, de cuando los bloques eran desiguales.
5. Emitir `docs/videos/muiscas/mvp-guiones/guion-<mito>-vN.json`. **Corregido 2026-09-16:**
   la plantilla que estaba aquí traía `bNziytBsHtCSsgcPplG9` / `eleven_flash_v2_5` / st .5
   sim .8 sp .97, que contradice la ley 3 doce párrafos más arriba — **ese id ya no existe
   en la cuenta y copiarlo produce `voice_not_found`**. La forma vigente es la de
   `guion-huitaca-v1.json`:
   ```json
   { "_notas": "<mapeo visual bloque→keyframes + deslinde del mito + decisiones>",
     "mito_slug": "huitaca", "titulo_video": "Huitaca",
     "titulo_canon": "Huitaca (DB, slug `huitaca`)",
     "voice_id": "9EHAKExD4lT2G6hPG74L", "voice_name": "alejandro_narracion",
     "model_id": "eleven_multilingual_v2",
     "voice_settings": { "stability": 0.35, "similarity_boost": 0.9, "style": 0.3,
                         "use_speaker_boost": true, "speed": 1.05 },
     "aprobado": "<fecha> · <qué aprobó el usuario>",
     "lines": [ { "bloque": "b1", "clips": "c01-c02", "text": "…", "window": 9.5 }, … ] }
   ```
   (Los `voice_settings` son los de `DEFAULT_VOICE` en `src/lib/narration.js:19-36`: si
   cambian allí, cambian aquí.) En `_notas` va el MAPEO VISUAL completo (qué keyframe/placa
   cubre cada clip A y B).

**Aceptación**: cada bloque con sus 2 imágenes existentes asignadas · reglas duras
cumplidas · fiel al canon · **aprobación del usuario registrada en el JSON (§0b) —
sin eso no arranca la fase 2**. Ejemplo de referencia:
`guion-bochica-v4-2min.json`.

---

## 3. FASE 2 — VOCES (agente de voz)

**Entrada**: guion con campo `aprobado`. **Lectura**: `MANUAL-DE-PRODUCCION.md` §4.1.
⚠ *No leer `pipeline-v3-profesional.md` §3, que era la lectura que mandaba este párrafo:
declara `eleven_flash_v2_5` «modelo DEFINITIVO del canal» con st .5 / sim .8 / sp .97 —
superado el 2026-09-09 por la ley 3.*

```bash
node scripts/videos/generate-voice-el.mjs \
  --lines docs/videos/muiscas/mvp-guiones/guion-<mito>-vN.json \
  --out-dir content/videos/muiscas/videos/<mito>/voces-vN/ \
  --format wav
```

⚠ **`--format wav` no es opcional** (corregido 2026-09-16): el valor por defecto del script
es `mp3` (`generate-voice-el.mjs:48`), así que el comando que estaba aquí —sin la
bandera— producía MP3, contra la ley 3 («Máster WAV») y contra todo lo producido desde el
2026-09-09. **Si aparece un `.mp3` en la carpeta de voces, se generó mal.**

Genera `vozNN.wav` por línea con prosodia continua (`previous_text`/`next_text`), mide
el habla real (silencedetect −35dB/0,2s) y reporta `OK` o `SE PASA`.
- `SE PASA` → la línea SE REESCRIBE (17-19 palabras, mismo sentido, re-aprobación del
  usuario solo si cambia el contenido, no la redacción) y se regenera esa: `--only N`.
- Toma con timbre raro (~1/20): regenerar con `--only N`.

**Aceptación**: todas `OK` · escucha completa sin artefactos · carpeta commiteada.

---

## 4. FASE 3 — MAPEO VISUAL DEFINITIVO (agente director)

**Entrada**: guion aprobado (su `_notas` trae el mapeo propuesto). **Lectura**:
`direccion-cinematografica.md` · manifest/spec de los keyframes del mito.

**Trabajo**: fijar la lista ordenada `c01…cNN` (2 clips por bloque; el clímax puede
llevar 2 tomas del MISMO keyframe con movimientos distintos) + el still de cola (placa
con Ken Burns, idealmente bookend del plano inicial). Verificar doctrina: escalas
alternadas (nunca dos bloques seguidos iguales) · cenital y contrapicado 1 vez cada
uno · viajes de ida L→R y **regresos al origen R→L** · retrato en primer plano UNA
vez · capa de primer plano en los generales. Si un bloque no tiene imagen que lo
soporte → devolver a fase 1 (se reescribe el bloque), NUNCA inventar imagen (ley 1).

**Salida**: el mapeo definitivo `cNN → keyframe` (se materializa dentro de
`movimiento-vN.json` en la fase 4 y de `plan-vN.json` en la fase 5).
**Aceptación**: checklist §6 de `direccion-cinematografica.md` en verde.

---

## 5. FASE 4 — PROMPTS DE MOVIMIENTO (agente redactor + agente auditor)

**Entrada**: mapeo de fase 3. **Lectura OBLIGATORIA Y COMPLETA**:
⚠ `doctrina-movimiento-v2.md` **NO EXISTE — nunca llegó a git** (verificado 2026-09-16; ya
lo avisa el preámbulo de este doc). Sus reglas —plantilla de 8 líneas, vocabulario,
anti-patrones, ejemplos— viven hoy en `pipeline-v4-mcp.md` §2.5, en
`MANUAL-DE-PRODUCCION.md` §3.4 y, como ejemplo auditado, en
`content/videos/muiscas/videos/bochica/movimiento-v4.json`: **ésa es la lectura
obligatoria.** · Más la spec/manifest con la descripción EXACTA de cada keyframe.

**Redactor**: un prompt por clip con la plantilla de **8 líneas** (líneas de estilo /
first-frame / invariantes / negativos en su forma canónica byte-idéntica; beats
`[0-2s][2-4s][4-5s]` con causa→consecuencia, amplitud declarada y verbo de aterrizaje;
UNA conducta de cámara motivada con endpoint; paralaje entre capas de papel; personajes
como marionetas articuladas que COBRAN VIDA — jamás órdenes de quietud).
⚠ *Corregido 2026-09-16: esta sección decía «7 líneas» en tres sitios. Los prompts vivos
tienen **8** —contadas en el `c01` de `bochica/movimiento-v4.json` y de
`bachue/movimiento-v5-seedance.json`—, y la ley 4 ya dice «8 párrafos». El orden real es:
1 estilo · 2-4 los tres beats · 5 cámara · 6 invariantes del movimiento · 7 textura de
papel · 8 negativos.* El prompt solo
mueve LO QUE EXISTE en el keyframe. Negativos por plano con la fórmula literal de la
doctrina: paisajes `no extra people, no rainbow` · retrato `no lip-sync, no talking` ·
multitud `no cloned or extra figures, no faces turning to camera`.

**Auditor (agente DISTINTO, siempre)**: audita CADA prompt contra los gates: verb test ·
before/after · amplitud declarada · una sola cámara sin "fast" · cero quietud · líneas
canónicas idénticas · solo mueve lo que existe · negativos del plano · riesgo de
moderación. El redactor aplica TODOS los hallazgos.

**Salida**: `content/videos/muiscas/videos/<mito>/movimiento-vN.json`:
```json
{ "_notas": "…", "clips": { "c01": { "keyframe": "<ruta relativa>", "prompt": "<8 líneas con \n>" }, … } }
```
**Aceptación**: auditoría en verde. Referencia de calidad:
`videos/bochica/movimiento-v4.json` (auditado 2026-08-31).

---

## 6. FASE 5 — PLAN DE ARMADO (agente editor)

**Entrada**: voces + mapeo. **Referencia obligada**: ⚠ *el plan modelo ya NO es
`bochica/plan-v4.json`* (es de agosto, del carril web: lleva SFX, `music_vol` y
`title_y: 265`). Los planes modelo vigentes son
`content/videos/muiscas/videos/bochica/plan-v5.json` y
`bachue/plan-v7-seleccion.json`. Campo por campo: `MANUAL-DE-PRODUCCION.md` §5.1.

**Trabajo**: escribir `plan-vN.json` junto a las voces del mito. **Corregido 2026-09-16:
lo que decía esta sección —cama `musica-muisca-andina.mp3` con `music_vol 0.12`, SFX por
bloque y `subtitle` quemado— contradecía la ley 9 del propio documento y NINGÚN plan vivo
lo hace** (verificados: `la-aparicion-del-hombre/plan-v1`, `bachue/plan-v5…v7`,
`bochica/plan-v5`, `huitaca/plan-v1`, `el-dorado/plan-v1`):
- Raíz, la de verdad: `width 1080, height 1920, fps 24, voice_offset 0.5,`
  **`mix: "narracion"`**`, voice_lufs -16, music_lufs -34, music_fade_out 0,`
  **`music: "lecho-vN.wav"`**`, burn_subtitles false, write_srt false,`
  `title_font "../../../fonts/Asimovian-Regular.ttf", title_font_family "Asimovian",`
  `title_size 92, title_color "#F5F0E6", title_y 280`. **SIN `transition_dur`.**
  ⚠ **Omitir `mix` cae en el modo `"canal"`** (ducking + `loudnorm` + `music_vol`), que es
  el histórico y **no se usa** — y lo hace en silencio.
  `music_fade_out: 0` porque el lecho ya trae su propio fade de 3 s.
- Un bloque por clip (`type: "motion"`, `duration: 5`) + still de cola (`type: "still"`,
  `kenburns`, `duration` 3,5-5) + **el bloque del CIERRE DE CANAL** (ley 5). La voz y su
  `subtitle` (texto exacto de la línea, que se conserva como registro aunque no se queme)
  van en el PRIMER clip del bloque narrativo. `title`/`title_sub` solo en el bloque 1:
  `"<MITO>"` / `"Mitos de Colombia · muiscas"`.
- **SFX: no se usan.** El ambiente viene dentro de los lechos, que ya traen lluvia, río,
  fuego o viento balanceados; un SFX encima duplica el ambiente y ensucia la separación de
  18 dB. Verificado: ningún plan con `mix: "narracion"` lleva un solo campo `sfx`. Romperlo
  sólo si el sonido es diegético Y protagonista y el lecho no lo trae — entonces `sfx_vol`
  0,2-0,3, reusando las cuatro piezas de 10,0078 s de `audio/sfx/`. **Y ojo: en
  `narracion` el bus de ambiente NO se agacha bajo la voz** (no hay sidechain).
- **Música**: los **lechos de las narraciones** (`narration_beds`, elegidos por acto y
  encadenados con `scripts/videos/build-lecho.mjs`), construidos a la duración total
  **incluyendo el cierre**. Las tres camas viejas de 95 s
  (`musica-muisca-andina.mp3`, `musica-cama.m4a`, `musica-cama-elevenlabs.mp3`) quedan
  **archivadas: no se usan.** Detalle en `MANUAL-DE-PRODUCCION.md` §4.2 y §4.3.

```bash
node scripts/videos/validate-plan.mjs --plan <plan> --secos --suggest
```
**Aceptación**: `0 errores`. Avisos de aire muerto >3,5 s: aceptables solo como
respiración dramática deliberada, documentada en `_notas`.

---

## 7. FASE 6 — GENERACIÓN WEB (operador de navegador — ROL ÚNICO) · ⛔ HISTÓRICO

> ## ⛔ ESTA SECCIÓN DESCRIBE UN CARRIL MUERTO. NO LA EJECUTES.
>
> **Histórico: el carril "web unlimited" (navegador + toggle Unlimited) murió en
> septiembre de 2026 y no ha producido un solo clip de los cuatro videos del canal.** El
> carril **vigente** es la generación **por el MCP de Higgsfield** con Seedance 2.5 (ley 4):
> el paso a paso está en **`MANUAL-DE-PRODUCCION.md` §3** (preflight §3.2, subida de
> keyframes §3.3, `generate_video_batch` §3.4, concurrencia §3.5, `jobs.json` §3.6) y en
> `pipeline-v4-mcp.md`. Ahí va la fase 6 de hoy.
>
> Lo que queda MUERTO de lo que sigue, punto por punto: el claim `OPERADOR WEB` de §9 · el
> toggle `Unlimited ✦` (hoy `models_explore` devuelve `unlim.available:false` para los tres
> modelos) · la carpeta `descargas/` con nombres `hf_*.mp4` · **`import-clips.mjs`**
> (sustituido por `import-mcp-clips.mjs`, §8) · el checklist "PRIMERA SESIÓN CON LA
> LICENCIA" de `pipeline-v3-profesional.md` §6.
>
> **Se conserva porque sirve para reconstruir qué se hizo en agosto** y porque la doctrina
> anti-moderación (paso 7: *el filtro reacciona a la IMAGEN, no al prompt*) sigue siendo
> verdad en el MCP y es ley 7.

**La fase crítica y SECUENCIAL GLOBAL: un solo operador en toda la operación.** Antes
de abrir sesión, tomar el claim `OPERADOR WEB: <agente> desde <hora>` en §9
(commiteado); se libera al cerrar la sesión. Dos sesiones paralelas = riesgo real de
bloqueo de cuenta. Mientras la cola diga `⏳ licencia`, esta fase NO se intenta (§10).

**Entrada**: `movimiento-vN.json` + keyframes crop-9x16 del mito.
**Lectura OBLIGATORIA: `docs/mitos-produccion-imagenes.md` ENTERO** — la doctrina de
imágenes aplica completa a video (mínimo: §4-§5 montaje y helpers `hfSetText`/
`hfEstado`/`hfIds`, §8-§10 estado, tandas y "confirmar la aceptación, no suponerla",
§12 bloqueos) — más `pipeline-v3-profesional.md` §6. Resumen ejecutivo:

**Montaje de sesión** (y tras CADA recarga — el arnés y el toggle mueren al recargar):
1. higgsfield.ai → generación de video → **Seedance 2.5 · 1080p (o el fallback que haya
   fijado la primera sesión) · 9:16 · 5 s**.
2. Toggle **Unlimited** encendido → el botón debe decir `Unlimited ✦`. Si dice
   `Generate ✦ N`, esos N créditos se cobran EN SILENCIO (≈45 cr/clip a 1080p/5s,
   verificado por MCP). Verificar la etiqueta ANTES DE CADA envío; si cambia, ABORTAR.
3. Si existe toggle "Enhance"/mejorador de prompt: APAGARLO.

**Por cada clip, en orden c01→cNN, DE A UNO** (imagen y video comparten el cupo:
nada más puede estar generando en la cuenta):
1. Cerrar el banner previo si existe (quirúrgicamente, solo el botón del banner).
2. Subir el keyframe del clip como start frame (el `.crop-9x16.jpg`).
3. Prompt vía editor Lexical (`hfSetText` — JAMÁS execCommand/Range/clipboard) y
   **verificar nº de párrafos = nº de líneas**.
4. Verificar `Unlimited ✦` → clic → esperar ACEPTACIÓN (badge
   `Generating|Processing|Queued`, aparece con retraso — hasta 2 min) o RECHAZO (banner
   "1 unlimited video, image & audio generation at a time").
5. Aceptada → esperar fin del badge (timeout 30-45 min para video) → respiro 6-7 s →
   siguiente.
6. Rechazada → UN solo reintento tras ~12 s (la pausa que usa el arnés de imágenes).
   Si falla de nuevo: anotarla en `descargas/pendientes.json` (`{clip, motivo, hora,
   reintentos}`) y en Notas de §9, y SEGUIR. Nunca reintentos en bucle.
7. Rechazo por MODERACIÓN (distinto del banner): no insistir — el filtro reacciona a la
   IMAGEN. Anotar en pendientes, seguir con el resto, reportar al cierre: el keyframe se
   re-escenifica (vuelve a fase 1/3 con aprobación) o el usuario decide. Un mito con
   clips en moderación NO bloquea pasar al mito siguiente.
8. Descargar cada resultado a
   `content/videos/muiscas/videos/<mito>/descargas/` (gitignored — nunca a un Downloads
   compartido, nunca mezclar tandas). Nombre ESPERADO: `hf_<YYYYMMDD>_<HHMMSS>_<job>.mp4`
   (por confirmar en la primera sesión; `import-clips.mjs` exige ese patrón exacto —
   si la web entrega otro nombre, renombrar al patrón al descargar).
   ⛔ *Muerto: en el carril vigente no se descarga a mano. `import-mcp-clips.mjs` baja cada
   clip por la `url` que guarda `jobs.json` y verifica resolución y duración (§8).*

**Si algo huele a bloqueo** (cola degradada → pausas de 20-30 s por una hora / toggle
desaparece → PARAR / cuenta en revisión → PARAR y avisar al usuario): seguir
`docs/mitos-produccion-imagenes.md` §12 al pie de la letra. Nunca sesiones paralelas,
nunca rotar IP/cuenta.

⛔ **Ya no aplica** (2026-09-16): la marca **"VERIFICADO 2026-08-31 — primera sesión
Seedance 2.5" ya existe** en `pipeline-v3-profesional.md` §6, y el arnés
`scripts/mitos/emit-bootstrap-video.mjs` **ya está commiteado**. Nadie es "el primer
operador". Y aun así el carril está muerto: no se abre sesión de navegador para generar
clips.

**PRIMERA SESIÓN CON LA LICENCIA** (una sola vez en la vida del canal): ejecutar el
checklist de verificaciones de `pipeline-v3-profesional.md` §6 (toggle, combos del
unlimited — resolución/duración reales —, Lexical, slot de start frame, Enhance,
badges, tiempo real de render, forma del rechazo por moderación, nombre de descarga) y
escribir los resultados en ese doc bajo el título **"VERIFICADO <fecha>"**. El arnés
adaptado se crea como `scripts/mitos/emit-bootstrap-video.mjs` (base:
`emit-bootstrap.mjs`) y SE COMMITEA. **Esa marca "VERIFICADO" es la señal**: si existe,
los siguientes operadores usan el arnés y no repiten el checklist; si no existe, eres el
primer operador y el checklist es tu paso 0. Primera tanda: 2-3 clips, a mitad de ritmo.

**Aceptación**: los N clips del mito descargados y VISTOS de a uno (estilo papel
intacto, sin morphing, apertura no congelada); pendientes.json vacío o reportado.

---

## 8. FASES 7-8 — IMPORTAR + ENSAMBLAR (agente ensamblador)

**Disparo: apenas un mito tiene TODOS sus clips descargados, se arma DE INMEDIATO** —
no se espera a otros mitos. (Los defectos se descubren ensamblando; cuanto antes se vea
el video, antes se regeneran los clips malos — mientras, el operador web ya avanza con
el mito siguiente.)

**Corregido 2026-09-16:** los comandos que estaban aquí usaban `import-clips.mjs`, el
importador del carril web MUERTO (espera una carpeta `descargas/` con nombres `hf_*.mp4`).
El importador vigente es **`import-mcp-clips.mjs`**: no lee una carpeta, lee el
`jobs.json` de la tanda (el que se escribe con la respuesta de `jobs_wait`), **baja cada
clip por su `url`** y **verifica con ffprobe resolución, fps y duración**, avisando si se
desvía de 1080×1920 / 5 s. Ése es el guardián que el carril web no tenía.

```bash
M=<mito>; D=content/videos/muiscas/videos/$M; P=$D/plan-vN.json

# 1. Importar (dry-run primero, SIEMPRE):
node scripts/videos/import-mcp-clips.mjs --plan $P --jobs $D/clips-vN/jobs.json
node scripts/videos/import-mcp-clips.mjs --plan $P --jobs $D/clips-vN/jobs.json --apply
# (mapa parcial permitido: sólo se importan los cNN presentes en el jobs.json)

# 2. Hoja de contacto y MIRARLA — 5 fotogramas por clip, antes de ensamblar:
node scripts/videos/qc-sheet.mjs --plan $P --out $D/qc --per 6 --width 216

# 3. Validar con los clips reales:
node scripts/videos/validate-plan.mjs --plan $P --secos

# 4. Ensamblar (el máster lleva el nombre completo con versión y etiqueta):
node scripts/videos/assemble-video.mjs --plan $P --out $D/$M-final-vN.mp4

# 5. Entregas (el ensamblador produce solo el máster; estas dos son aparte).
#    Los derivados REPITEN el nombre completo del máster + -social / -preview:
ffmpeg -i $D/$M-final-vN.mp4 -c:v libx264 -b:v 8M -maxrate 8M -bufsize 16M \
  -pix_fmt yuv420p -c:a aac -b:a 192k -movflags +faststart $D/$M-final-vN-social.mp4
ffmpeg -i $D/$M-final-vN.mp4 -vf scale=720:1280 -c:v libx264 -crf 28 -preset medium \
  -c:a aac -b:a 128k -movflags +faststart $D/$M-final-vN-preview.mp4
```

**Nombres de entrega** (corregido 2026-09-16): este bloque era inconsistente consigo mismo
—el social conservaba el `-final` y el preview lo perdía—. **Vale el disco**: los tres
comparten el nombre completo del máster, verificado en `bachue-final-v7-seleccion.mp4` /
`-social.mp4` / `-preview.mp4`. Los **tamaños** no son especificación (dependen del
contenido y la duración); lo que es especificación son los parámetros: CRF 18 el máster,
8 Mbps el social, 720p CRF 28 el preview. Medidos en Bachué v7: 147.780.167 B /
96.946.829 B / 12.710.364 B. El preview es el que se manda al usuario por chat.

**Regeneración de clips sueltos** (salida normal del QC): se reencola ese `cNN` por el MCP,
se actualiza su entrada en `jobs.json` con el `job_id` y la `url` nuevos, y se reimporta
sólo ese clip — `import-mcp-clips.mjs` acepta mapa parcial: importa sólo los `cNN`
presentes en el `jobs.json` que se le pase.
```bash
# jobs-regen.json: { "c07": { "job_id": "…", "url": "https://…mp4", "cost_cr": 45, … } }
node scripts/videos/import-mcp-clips.mjs --plan $P --jobs $D/clips-vN/jobs-regen.json --apply
```
El importador actualiza `import-map.json` moviendo la entrada anterior a `replaced`.
Los `.mp4` no van a git: **el import-map es el único historial que queda de los clips.**
El plan NO sube de versión por regenerar clips (solo por cambios de guion, §1).

⚠ **`replaced[]` NO es un contador de regeneraciones** (corregido 2026-09-16): el script
empuja la entrada anterior **cada vez que el `cNN` ya existía, sin comparar `job_id`**, así
que registra **reimportaciones**. En `el-dorado/clips-v1/import-map.json`, `c01` tiene dos
entradas en `replaced` y **las tres comparten el mismo `job_id`**: son tres descargas del
mismo clip, cero regeneraciones. Contar `replaced` sobreestima el gasto (13 de 17 clips de
El Dorado lo tienen, con 1.080 cr en entradas que **nunca se gastaron**). El total bueno es
el que imprime el propio script sumando los vigentes. Y al revés: **`jobs.json` guarda sólo
el job vigente de cada clip, así que su suma de `cost_cr` SUBESTIMA el gasto cuando sí hubo
regeneraciones** (la tanda de Gemini suma 405 ahí y costó 517,5).

**QC final (gates — cualquiera en rojo devuelve el clip a fase 6 o el plan a fase 5).**
Los gates 1, 2 y 4 se miran en la **hoja de contacto de `qc-sheet.mjs`** (paso 2 de
arriba), que ya hace exactamente lo que este bloque describía en prosa: 5 fotogramas por
clip a t = 0 · 1,25 · 2,5 · 3,75 · 4,9 s. Dos límites suyos que hay que conocer: los
tiempos están **fijos en el código** (en el cierre de canal, de 8,42 s, los últimos 3,5 s
no se miran; en clips de menos de 4,9 s las últimas muestras repiten fotograma) y **sólo
recorre bloques `type: "motion"` con `clip`**, así que **la placa `still` queda fuera y hay
que mirarla aparte**.
1. Consistencia: personajes/paisajes idénticos entre clips y vs biblia; estilo papel
   intacto en todos los frames.
2. Movimiento: ninguna apertura congelada (frame 0 ≈ frame 12 → regenerar); cierres
   "settled, no frozen". ⚠ **Retirado 2026-09-16 el proxy «un clip vivo pesa ~2× uno
   tímido»**: no está implementado en ningún script y se rompe en cuanto se mezclan
   orígenes — en `bachue/clips-seleccion/` los tamaños van de 5,16 MB (c13, Gemini) a
   18,31 MB (c10, grok reescalado de 720p), y la diferencia es de códec y reencode, no de
   movimiento. Sólo vale **dentro de una misma tanda y mismo códec**. La medida que sí
   discrimina está propuesta y **sin construir**: `scene_score` máximo por clip, umbral
   > 0,08 (`MANUAL-DE-PRODUCCION.md` §6.3). ⚠ `qc-clips.mjs` **no existe**; hoy se mide a
   mano con `ffmpeg -vf "select='gt(scene,0)',metadata=print"`.
3. Audio: sync voz-plano; música (el lecho) resuelve al final. *No hay subtítulos que
   calzar ni SFX que dosificar: `burn_subtitles false`, `write_srt false`, cero `sfx`.*
   Sonoridad del máster con `ebur128` (`MANUAL-DE-PRODUCCION.md` §6.5).
4. Cortes secos exactos; escalas alternadas; sin texto en pantalla (salvo el título).
5. Ver el video ENTERO en 9:16 real, con sonido, antes de declararlo listo.
⚠ **Y dejar rastro**: hoy los únicos directorios `qc*` de todo `content/videos` son los
dos de Huitaca (`huitaca/qc/` y `huitaca/qc-anim/`) —el video **rechazado**—. Los cuatro
másters aceptados no tienen ni una hoja de contacto commiteada, así que no hay forma de
auditar qué se miró. La hoja del paso 2 va a git.

**Cierre del mito**: `channel-dna.json` (aprendizajes) · commitear artefactos (no mp4)
· **entregar `-preview.mp4` al usuario (§0b)** · actualizar la cola §9.

### 8b. Publicación — FUERA DE ALCANCE

Este playbook termina con el preview aprobado y el `-social.mp4` entregado. La
publicación en redes (subida, caption, hashtags, programación) la ejecuta el usuario o
un proceso aparte con instrucción explícita. **Ningún agente de este playbook publica,
programa ni conecta cuentas sociales.** La columna Video de §9 se marca ✅ con la
aprobación del usuario, no con la publicación.

---

## 9. LA COLA DE PRODUCCIÓN (estado vivo — el reporte de avance ES esta tabla)

> **Estado al 16 de septiembre de 2026.** Cinco mitos tienen máster: Tequendama, La aparición, Bachué (v7, remontado con la selección del usuario) y El Dorado — este último **sin visto bueno registrado** — más Huitaca, **rechazado**. El saldo de Higgsfield quedó en **32 créditos** el 2026-09-12: un video del estándar cuesta 810-855, así que **no hay presupuesto para otra corrida con créditos sin recargar**. Lo que sí se puede hacer hoy sin gastar: remontar con tomas existentes (mesa de montaje escena por escena) y el carril de stop-motion dibujado. El inventario completo de lo que existe está en `historia-audiovisual.md`; el proceso, en `MANUAL-DE-PRODUCCION.md`.

**Claims**: antes de trabajar, el agente escribe su claim en la fila
(`fase-N @ <id-agente> <fecha-hora>`) y lo COMMITEA antes de producir nada (§1b). Claim
ajeno de <24 h = tomado, pasar al siguiente mito sin claim. Claim >24 h sin salida
commiteada = abandonado, re-claimable anotándolo en Notas. El próximo mito es el primero
de la cola con fase pendiente sin claim; el usuario reordena la cola, los agentes no.
El operador de fase 6 anota su marcador (`clips: 12/19 (últ. HH:MM)`) cada ~5 clips.
Al usuario se le escribe proactivamente SOLO en: los puntos de §0b, sospecha de bloqueo
de cuenta, y el cierre de cada video. Todo lo demás se lee de aquí.

~~`OPERADOR WEB: Codex desde 2026-08-31 19:49 -05`~~ — ⛔ **claim LIBERADO y sin sentido
desde 2026-09-16**: el rol de operador web pertenece al carril muerto de §7. La fase 6 de
hoy es por MCP y **no tiene cupo de operador único**: los clips se encolan con
`generate_video_batch` en **olas de ~8** (las cifras de tope que circulan en los docs no
coinciden entre sí —7-8, 10 y 12—; 8 es la envolvente segura. Pasarse devuelve
`429 rate_limit_reached` y **no encola nada del lote**). Nadie debe tomar este claim.

| # | Mito | Slug(s) DB del canon | Guion | Voces | Mapeo | Movim. | Plan | Clips | Video | Claim | Notas |
|---|------|----------------------|-------|-------|-------|--------|------|-------|-------|-------|-------|
| 1 | **El salto del Tequendama** (Bochica v5 · video 2 del carril) | `el-castigo-de-chibchachum-y-bochica` (mito `el-tequendama`; +coda de `castigo-y-redencion-de-chibchacum`) | ✅ `guion-bochica-v5.json` (texto v4 aprobado 2026-08-31, revalidado 2026-09-11 al cambiar voz) | ✅ `voces-v5/` WAV, 67 s de habla en 99 s | ✅ | ✅ `movimiento-v5-seedance.json` (derivado 1:1 del v4 auditado + candado de toma continua) | ✅ `plan-v5.json` (0 errores, 2 avisos) | ✅ 19/19 a la primera, 855 cr | ✅ **ENTREGADO 2026-09-11** · **con cierre de canal desde 2026-09-12** (`-final-v6-con-cierre.mp4`, 107,4 s) | sesión principal 2026-09-11 | Desbloqueado: ya no espera licencia web, se produce por MCP. Lecho = los mismos 3 de la narración de `el-tequendama` en la web (14-tormenta → 02-tambor → 11-rio-que-baja) |
| 2 | **La aparición del hombre** (video 1 del carril v4) | `la-aparicion-del-hombre` (DB id 255, «La aparición de los primeros seres humanos») | ✅ `guion-la-aparicion-del-hombre-v1.json` (aprobado 2026-09-09) | ✅ `voces-v1/` WAV | ✅ | ✅ `movimiento-v1.json` | ✅ `plan-v1.json` | ✅ 18/18 por MCP (16 a la primera + c09/c17 regenerados) · 175 cr | ✅ **APROBADO 2026-09-11** · **con cierre de canal desde 2026-09-12** (`-final-v6-con-cierre.mp4`, 102,4 s) | sesión principal 2026-09-09 | Primer video Kling 3.0 pro por MCP (175 cr); lecho 24→18→04; placa de cierre = huella del tríptico. **Versión paralela Seedance 2.5 1080p por MCP la misma noche** (`-final-v1-seedance.mp4`, 855 cr, 17/18 a la primera, c15 regenerado por un corte interno): el usuario recargó créditos para compararla — ver `pipeline-v4-mcp.md` §0b y §9b. **Decidido 2026-09-09: Seedance 2.5 es el estándar del carril**; el máster oficial de este mito es `-final-v1-seedance.mp4` (2ª ronda: sin subtítulos, título Asimovian por CoreText) |
| 3 | **Bachué** (video 3 del carril v4) | `bachue-madre-primigenia-de-iguaque` (variantes ids 652, 721, 732-737) | ✅ `guion-bachue-v4.json` (9 líneas de 18-19 palabras) | ✅ `voces-v4/` WAV | ✅ 18 keyframes en `kf-9x16/` | ✅ `movimiento-v5-seedance.json` | ✅ `plan-v5-seedance.json` | ✅ **18/18 a la primera, 810 cr** | ✅ **VIGENTE: `bachue-final-v7-seleccion.mp4` (102,46 s, 2026-09-16)** — montado con la SELECCIÓN DEL USUARIO escena por escena (9 tomas grok de agosto reescaladas de 720p, 5 Seedance, 4 Gemini; plan-v7-seleccion.json + seleccion-usuario.json). Sustituye a `bachue-final-v6-con-cierre.mp4` (entregado 2026-09-12), que queda archivado | sesión principal 2026-09-12 | Reemplaza el video de agosto (`bachue-final.mp4`, grok). Lecho 01-flauta-de-niebla → 09-telar-de-semillas → 06-laguna-de-iguaque. **Versión previa con `gemini_omni_flash_1_1` a petición del usuario: 13/18 a la primera, 517,5 cr, RECHAZADA ("no me gusta") — ver `pipeline-v4-mcp.md` §9d**  **Copias en `~/Downloads`** (máster, social y preview). Primer máster del canal que MEZCLA TANDAS: el rechazo de Gemini del 11-sep era de tomas concretas, no del modelo (4 de sus tomas están en el máster vigente). |
| 4 | **El Dorado** (video 4 del carril v4) | `el-dorado` (DB) | ✅ `guion-el-dorado-v1.json` (9 líneas de 17-19 palabras) | ✅ `voces-v1/` WAV, 59,5 s de habla | ✅ 17 keyframes con **gpt-image-2.5-sunburst** | ✅ `movimiento-v1-seedance.json` | ✅ `plan-v1.json` (0 errores) | ✅ **17/17 a la primera, 765 cr** | ⚠️ **ENSAMBLADO, SIN VISTO BUENO** — `el-dorado-final-v1.mp4` (97,46 s, cierre incluido) existe en disco desde 2026-09-11 21:55 y NADIE registró aprobación ni rechazo. Es la decisión más vieja abierta de la cola | sesión principal 2026-09-12 | Decisión editorial resuelta por el usuario: **la investidura en Guatavita**, contada como entrega y no como tesoro. 17 clips y no 18-19 porque el saldo eran 797 cr. **Piloto de moderación de 3 clips (135 cr) antes de la tanda**: los tres planos del cuerpo cubierto de oro pasaron. Lecho = los mismos tres de la narración del sitio |
| 5 | Chibchacum | `castigo-y-redencion-de-chibchacum` (variante `chibchacum-castigo-y-redencion-muisca`) | — | — | — | — | — | — | — | — | centrarlo en el dios, 100-110s; no repetir la inundación de Bochica  · Narrado en el sitio y con la biblia 3/3 lista; 0/15 keyframes. NO repetir la inundación ya contada en el Tequendama: la imagen nueva es el hombre que sostiene la tierra |
| 6 | **Huitaca** (video 5 · PRIMERO del carril de stop-motion por imágenes) | `huitaca` (variantes `huitaca-deidad-oscura-y-diluvio`, `huitaca-rebelion-y-transformacion-lunar`) | ✅ `guion-huitaca-v1.json` (9 líneas de 17-19 palabras) | ✅ `voces-v1/` WAV, 54,6 s de habla | ✅ 18 planos en `planos/*.json` | ✅ hojas de poses por plano (3 vías) | ✅ `plan-v1.json` (0 errores, 6 avisos) | ✅ 18/18 · **0 créditos Higgsfield, $4,37 de OpenAI** | ❌ **RECHAZADO POR EL USUARIO 2026-09-12** («actualmente se ve desastroso»). `huitaca-final-v1.mp4` (98,46 s) existe pero NO se publica. Un panel adversarial de 34 agentes confirmó 20 defectos con 0 refutados; el rediseño está en `stopmotion-v2-rediseno.md` y los experimentos E0/E2/E4 en `stopmotion-interpolacion.md` §13-15. Pendiente: que el usuario elija cadencia en los tres reels E4 | sesión principal 2026-09-12 | Primer video sin modelo de video: todos los fotogramas dibujados con gpt-image-2.5 y montados como stop-motion. Tres vías por plano (figura recortada sobre plató, cuadro completo estabilizado, quieto con cámara en post). Lecho 05-ronda-ritual → 23-vela-de-la-luna → 16-brasas-de-la-noche. Deslinde cumplido: ni una gota de agua |
| 7 | Chía / El sol y la luna | `chia`, `el-sol-y-la-luna` | — | — | — | — | — | — | — | — | los dos narrados en el sitio y con la biblia completa; abrirían el arco cosmogónico |

⚠ **Alcance de esta tabla** (auditado 2026-09-16, re-verificado el mismo día):
**estas 7 filas nombran 8 mitos** (la fila 7 lleva dos) **de los 41 muiscas** que el
encargo del usuario manda dejar «completos con todo». El resto no tiene fila, y tampoco
la tiene **Huitaca v2**.

Dónde está el material de los que faltan, medido carpeta a carpeta:
- **Repo principal** (`/Users/alegut/MyApps/Personal/mitos_colombia`): **41 carpetas** bajo
  `content/videos/muiscas/videos/` y **39 `bloques.json`** (las dos sin él son `bachue/` y
  `bochica/`). Ahí **sólo hay `bloques.json` + `keyframes/`**: cero `movimiento*.json`,
  cero `voz-v1.json`, cero planes. Desde el repo principal no se puede reanudar un mito
  preparado.
- **Este worktree** (`next-muisca-video-3e07cd`): sólo **5 carpetas** y **1 `bloques.json`**
  (ver §1).
- **Los paquetes `prepared` completos viven en OTRO worktree**,
  `.claude/worktrees/higgs-field-gpt2-2k-value-ef422e`: **34 carpetas** con
  `movimiento-v1.json` + `voz-v1.json` + `voces-v1/` + plan. Y **NO son reutilizables tal
  cual**: los **34 de 34** declaran `"model": "Seedance 2.5 web unlimited"` —el carril
  muerto—, usan el esquema `{myth, shots:[…]}` en vez del `{modelo, clips:{cNN}}` del
  carril v4, y sus voces son **306 `.mp3` y 0 `.wav`** con la voz muerta
  `bNziytBsHtCSsgcPplG9` en `eleven_flash_v2_5`. Cuatro de esos 34 (`bachue`, `el-dorado`,
  `huitaca`, `la-aparicion-del-hombre`) son restos de agosto de mitos ya producidos por
  otro camino: no cuentan como pendientes.

**Mientras la cola describa 8 mitos de 41, el "reporte de avance" de este playbook oculta
el grueso del trabajo pendiente**; el inventario real está en `historia-audiovisual.md` y
en `MANUAL-DE-PRODUCCION.md` §8.

**Paralelismo**: fases 1-5 de mitos distintos EN PARALELO (agentes independientes, cada
uno con su claim). Fase 6 ya **no** es secuencial global (eso era el cupo del navegador,
§7): por MCP se encola en olas de ~8. Fases 7-8 se disparan por mito apenas sus clips
estén.

---

## 10. COSTOS Y CUOTAS (presupuesto normal — excederlo = preguntar, §0b-d)

> **SALDO HOY: 32 créditos de Higgsfield** (plan `plus`, `unlim` no disponible; último
> `balance` registrado el 2026-09-12 y sin un solo gasto desde el 11-sep 21:53). Un video
> del estándar cuesta 810-855: **no hay presupuesto para otra corrida con créditos sin
> recargar.** ⚠ Confirmar con `balance` antes de encolar nada.

- Clips (carril v4, vigente): **45 cr por clip Seedance 2.5 1080p 5 s sin audio** →
  18 clips = 810 cr por video + 45 por cada regeneración (≈855 típico). Preflight de precio
  y saldo antes de encolar; sin saldo para los 18 + 2-3 reintentos, no se arranca.
  **Corregido 2026-09-16: `get_cost` NO es una herramienta del MCP** — es un booleano
  dentro de los `params` de `generate_video`, que devuelve el costo sin encolar, y el
  esquema de **`generate_video_batch` lo PROHÍBE explícitamente** («Cost preflight is not
  supported inside a batch submission»). **Un lote no se puede preflightear**: se hace una
  llamada suelta que replique los parámetros del lote y luego `balance`
  (`MANUAL-DE-PRODUCCION.md` §3.2). Alternativa barata: Kling 3.0 pro, 8,75 cr/clip
  (157,5 por video) ⚠ precio del 9-sep, no re-verificado.
- Clips (carril v3 web unlimited): ⛔ **carril muerto, no es una alternativa** (§7).
- Voces: ~0,7-1k caracteres ElevenLabs por mito (**664-967 medidos** en los cinco guiones
  vivos: la aparición 664, huitaca 854, el dorado 860, bachué v4 922, bochica v5 967). ⚠
  **Contradicción sin resolver sobre la cuota**: este playbook decía «plan Pro 610k/mes»,
  mientras `channel-dna.json` (`.voz.api_key`) y `pipeline-v3-profesional.md:103` dicen
  «plan Creator 300k chars/mes». Nadie consultó la API para dirimirlo. Con cualquiera de
  los dos sobra para un video, pero **antes de planear una tanda grande hay que mirar la
  cuenta**.
- Keyframes nuevos: **$0 — no se generan** (ley 1). Con aprobación: **$0,056/imagen**
  (`high`, sin referencias) y **$0,069** con dos referencias, medido el 2026-09-12 a
  1088×1920 (`stopmotion-interpolacion.md` §1). **Corregido 2026-09-16: aquí decía
  «~USD 0,2/imagen», unas 3 veces más caro que lo medido.** Rehacer los 17 keyframes de un
  mito ≈ **$1,2** (techo). Vía `generate-keyframes.mjs`, con `lint-spec.mjs` en verde antes
  — ⚠ y sabiendo que `lint-spec.mjs` sólo cubre los tres mitos con spec en
  `scripts/videos/specs/`: para los que salen de `content/mitos-visuales/` o de
  `videos/<mito>/planos/` **no hay linter**, así que la ley 7 no puede cumplirse ahí.
- Música/SFX: se reusan los lechos. Lecho nuevo, cama nueva o SFX nuevo: solo con
  autorización.
- Higgsfield por créditos (MCP): solo pruebas puntuales autorizadas — Seedance 2.5
  1080p/5s = 45 cr (verificado con preflight el 16-sep-2026); 720p/5s = 32,5 cr.

## 11. ERRORES CONOCIDOS Y QUÉ HACER

**Corregido 2026-09-16:** media tabla era del carril web muerto (§7) y hoy es
inaplicable — va marcada ⛔ y se conserva sólo para leer bitácoras de agosto. El catálogo
de fallos del carril vigente está en `MANUAL-DE-PRODUCCION.md` §3.5 (429 y concurrencia),
§3.8 (clip malo) y §6.4 (defectos medidos por modelo).

| Síntoma | Causa | Acción |
|---|---|---|
| Voz `SE PASA` | línea larga | reescribir línea, `--only N` |
| Voces salen `.mp3` | falta `--format wav` (el default es mp3) | regenerar la carpeta entera con `--format wav` (§3) |
| `voice_not_found` | se copió la plantilla vieja del guion | `voice_id 9EHAKExD4lT2G6hPG74L` + `eleven_multilingual_v2` (ley 3, §2) |
| `429 rate_limit_reached` al encolar | ola demasiado grande | ⚠ **no dar por hecho que no encoló nada**: el esquema de `generate_video_batch` avisa de que «a partial failure or timeout does not make the whole batch safe to retry». Primero guardar los `job_id` devueltos y resolver los envíos de estado desconocido (`show_generation_by_ids`); sólo reenviar los `cNN` que de verdad no tengan job, en olas de ~8 |
| El fondo "bombea" bajo la voz | falta `mix: "narracion"` ⇒ cayó al modo `canal` | añadir `mix` a la raíz del plan (§6) |
| El título sale en Helvetica | sharp/Pango ignora `fontfile` en macOS | el ensamblador aborta solo; render por CoreText (ley 9) |
| Clip estático/tímido | prompt sin amplitud o con orden de quietud | anti-patrones de `pipeline-v4-mcp.md` §2.5; regenerar |
| Clip con morphing / estilo 3D | beats sobrecargados o cámara doble | simplificar a 1 dominante + 2 secundarias; regenerar |
| Rechazo de moderación | la IMAGEN de inicio (no el prompt) | no insistir; re-escenificar el keyframe con aprobación (ley 7) |
| ⛔ Botón dice `Generate ✦ N` | toggle Unlimited apagado (recarga) | *carril web muerto: ya no hay toggle* |
| ⛔ Piezas que no llegan | 2ª pieza en vuelo o llegada tardía | *carril web muerto: por MCP se espera con `jobs_wait`* |
| ⛔ Cola lentísima | degradación por ritmo | *carril web muerto* |
| ⛔ `import-clips` conteo desigual | descargas mezcladas | *importador muerto: usar `import-mcp-clips.mjs` (§8)* |
| ⛔ `import-clips` no ve archivos | nombre ≠ patrón `hf_*.mp4` | *importador muerto: el vigente baja por `url` desde `jobs.json`* |
| Clip importado no es 1080×1920 / 5 s | params mal en el batch | lo avisa `import-mcp-clips.mjs` al importar; no ensamblar así |
| Referencia rota en spec | ficha inexistente | `generate-keyframes.mjs` aborta solo; corregir el ref |
| Dos docs se contradicen | docs vivos | precedencia del preámbulo; lo conservador; reportar en Notas §9 |
| Un final se ve distinto al canal | se saltó biblia/DNA | `channel-dna.json` + `biblia-visual-video.md`; el canal es UN sistema |

---

*Mantenimiento: quien cierra una fase actualiza la cola (§9) en commit atómico; quien
verifique algo nuevo en la web lo anota en `pipeline-v3-profesional.md` §6; toda lección
nueva va al doc de su dominio. Este playbook solo lo edita el mantenedor (hoy: la sesión
principal con el usuario).*
