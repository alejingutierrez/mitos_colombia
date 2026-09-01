# PRODUCCIÓN DE VIDEOS — PLAYBOOK END-TO-END PARA AGENTES

**Este es el documento maestro.** Describe el proceso completo de producción de un video
del canal "Mitos de Colombia" — de mito elegido a video entregado — escrito para que
CUALQUIER agente pueda ejecutar su fase sin contexto previo. Cada fase es un contrato:
entrada → trabajo → salida → criterio de aceptación. Si tu fase referencia otro doc,
ese doc es LECTURA OBLIGATORIA antes de tocar nada.

Versión 1.1 · 2026-08-31 · Pipeline v3 profesional (v1.1 = auditada por panel de
críticos: ejecutabilidad + consistencia + completitud).

**Precedencia entre documentos** (habrá contradicciones — son 8+ docs vivos):
(1) las Leyes de §0 · (2) este playbook · (3) las doctrinas específicas EN SU DOMINIO
(`doctrina-movimiento-v2.md` para prompts de video, `direccion-cinematografica.md` para
cámara/escena/guion visual, `docs/mitos-produccion-imagenes.md` para el navegador) ·
(4) `pipeline-v3-profesional.md` y el resto. Ante contradicción: gana el de mayor
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
stop-motion), narrados en español colombiano por UNA voz, con subtítulos quemados,
música de cama cultural y SFX diegéticos.

**Las leyes — violarlas invalida el trabajo, no importa lo demás:**

1. **Las imágenes ya producidas son la base del video.** El guion se escribe SOBRE la
   biblioteca existente (keyframes del mito + placas de biblia), nunca al revés.
   Generar keyframes o fichas nuevas requiere aprobación EXPLÍCITA del usuario. Un beat
   canónico sin imagen: se narra sobre una imagen existente que lo soporte, o queda fuera.
2. **Solo cortes secos.** Ningún plan lleva `xfade` ni `transition_dur`. Corte limpio
   entre todos los clips. (Sobreviven: fade global de entrada/salida y el fade del título.)
3. **La voz del canal es «alejandro»** (`bNziytBsHtCSsgcPplG9`, clon de la voz del
   usuario) en **`eleven_flash_v2_5`**, settings `stability .5 / similarity_boost .8 /
   speed .97`. `eleven_v3` está DESCARTADO (pierde el parecido con la voz real). La
   línea que no cabe en su ventana se REESCRIBE — `atempo` está PROHIBIDO.
4. **El video se genera en la WEB de Higgsfield con Seedance 2.5 unlimited** (objetivo
   1080p; si la primera sesión confirma que 2.5 no expone 1080p en web, el fallback es
   720p + upscale local). Automatización de navegador, 1 pieza en vuelo, jamás por
   créditos del MCP salvo prueba puntual autorizada. Imagen y video comparten UN cupo.
5. **Fiel al canon, sin alargar.** El canon vive en la DB del sitio (ruta en §1). Nada
   de moralejas, nombres no documentados ni inventos. Guardarraíles visuales del sitio:
   sin texto en pantalla (salvo subtítulos), sin coronas/templos europeos ni cruces, sin
   iconografía mesoamericana, sin desnudez, sin joyería u oro corporal (salvo que el
   mito lo documente, p. ej. El Dorado), rasgos SIEMPRE indígenas andinos, personajes de
   espaldas o a media distancia por defecto.
6. **`lint-spec.mjs` y el checklist anti-moderación son precondición dura** en todo lo
   visual: el filtro de Seedance reacciona a la IMAGEN de inicio (verificado 3/3).
7. **Los personajes nunca hablan en pantalla** (narración en off). En video, el candado
   es `no lip-sync, no talking` en el NEGATIVE — jamás una orden de quietud.

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

---

## 1. MAPA DEL REPO Y CONVENCIONES

```
docs/videos/
  PRODUCCION-END-TO-END.md        ← este playbook (el contrato)
  pipeline-v3-profesional.md      ← runbook v3 (detalle operativo por paso)
  doctrina-movimiento-v2.md       ← doctrina de prompts de video (LEY para fase 4)
  direccion-cinematografica.md    ← cámara, escalas, luz, narrativa (LEY fases 1, 3, 4)
  plantillas-prompts.md           ← vigente: §1, §2, registro §3a, §4-§5 (ver Precedencia)
  proceso-mitos-a-video.md        ← histórico v2 (vigente: anti-nsfw §5b y lecciones §6)
  muiscas/
    channel-dna.json              ← decisiones bloqueadas del canal (actualizado 2026-08-31)
    biblia-visual-video.md        ← el mundo muisca, exclusiones, personajes bloqueados
    mvp-guiones/guion-<mito>*.json
docs/mitos-produccion-imagenes.md ← doctrina del navegador Higgsfield (LEY para fase 6)
scripts/videos/
  generate-voice-el.mjs · generate-keyframes.mjs · lint-spec.mjs
  validate-plan.mjs · import-clips.mjs · assemble-video.mjs · specs/*.mjs
content/videos/muiscas/
  biblia/                         ← 89 fichas (jpg + crop-9x16) + manifest.json + higgsfield-ids.json
  audio/musica-muisca-andina.mp3  ← LA cama muisca vigente (95 s) · sfx/ (4 sfx de 10 s)
  videos/<mito>/                  ← keyframes/, voces-vN/, clips-vN/, descargas/,
                                     plan-vN.json, movimiento-vN.json, másters
```

**La DB del canon** vive en el REPO PRINCIPAL, no en los worktrees:
`/Users/alegut/MyApps/Personal/mitos_colombia/data/mitos.sqlite` — desde un worktree:
`sqlite3 "$(git rev-parse --git-common-dir)/../data/mitos.sqlite"` (readonly SIEMPRE).
Ojo con `editorial/`: el pueblo va en singular (`editorial/muisca/myths/`) y sus slugs
son cortos (`bachue.mjs`), distintos de los slugs de la DB.

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
1. Leer el canon COMPLETO: `sqlite3 -readonly <DB de §1> "SELECT title, slug, content
   FROM myths WHERE slug = '<slug de la cola §9>'"` — la cola trae el slug exacto; si
   hay variantes listadas, leerlas todas y quedarse con la más completa. La sección
   "Interpretación" del sitio NO es canon. Si existe ficha editorial
   (`editorial/muisca/myths/<slug-corto>.mjs`), leer sus `researchNotes`.
2. **Inventariar las imágenes disponibles ANTES de escribir** (ley 1): keyframes del
   mito (con su manifest o su spec, §1) y placas de biblia utilizables (paisajes/
   tableaus; las fichas de personaje sobre fondo crema NO sirven como escena). Armar la
   lista de planos reales.
3. Escribir el guion: **N bloques de 2 frases y ≤19 palabras** (N = lo que la
   biblioteca soporte a 2 clips por bloque; 9-12 típico; 2 minutos es techo, no meta).
   Registro **fogón-visual-coloquial**: oralidad cercana y digna ("dicen que", "óigame
   bien", "puro agua"), imágenes sensoriales, cero slang que abarate. Reglas duras:
   gancho con giro en el bloque 1 · cada verso abre con el plano que acompaña · UNA
   cita directa del personaje, en el clímax · bookend de objeto · última línea con el
   agua quieta o su equivalente · nombres propios máx. 2 (excepción documentada si el
   canon nombra a dos dioses) · sin moralejas.
4. Presupuesto de habla: alejandro narra a **2,4-2,6 palabras/s**; 19 palabras ≈
   7-8,5 s. `window` por línea = habla estimada + 1,5-2,5 s de aire (9,35-12,0 típico).
5. Emitir `docs/videos/muiscas/mvp-guiones/guion-<mito>-vN.json`:
   ```json
   { "_notas": "<mapeo visual bloque→keyframes + decisiones>",
     "voice_id": "bNziytBsHtCSsgcPplG9", "model_id": "eleven_flash_v2_5",
     "voice_settings": { "stability": 0.5, "similarity_boost": 0.8, "speed": 0.97 },
     "lines": [ { "text": "…", "window": 9.85 }, … ] }
   ```
   En `_notas` va el MAPEO VISUAL completo (qué keyframe/placa cubre cada clip A y B).

**Aceptación**: cada bloque con sus 2 imágenes existentes asignadas · reglas duras
cumplidas · fiel al canon · **aprobación del usuario registrada en el JSON (§0b) —
sin eso no arranca la fase 2**. Ejemplo de referencia:
`guion-bochica-v4-2min.json`.

---

## 3. FASE 2 — VOCES (agente de voz)

**Entrada**: guion con campo `aprobado`. **Lectura**: `pipeline-v3-profesional.md` §3.

```bash
node scripts/videos/generate-voice-el.mjs \
  --lines docs/videos/muiscas/mvp-guiones/guion-<mito>-vN.json \
  --out-dir content/videos/muiscas/videos/<mito>/voces-vN/
```

Genera `vozNN.mp3` por línea con prosodia continua (`previous_text`/`next_text`), mide
el habla real (silencedetect −35dB/0,2s) y reporta `OK` o `SE PASA`.
- `SE PASA` → la línea SE REESCRIBE (≤19 palabras, mismo sentido, re-aprobación del
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
`doctrina-movimiento-v2.md` (plantilla de 7 líneas, vocabulario, 12 anti-patrones,
ejemplos §5) · la spec/manifest con la descripción EXACTA de cada keyframe.

**Redactor**: un prompt por clip con la plantilla de 7 líneas (líneas de estilo /
first-frame / invariantes / negativos en su forma canónica byte-idéntica; beats
`[0-2s][2-4s][4-5s]` con causa→consecuencia, amplitud declarada y verbo de aterrizaje;
UNA conducta de cámara motivada con endpoint; paralaje entre capas de papel; personajes
como marionetas articuladas que COBRAN VIDA — jamás órdenes de quietud). El prompt solo
mueve LO QUE EXISTE en el keyframe. Negativos por plano con la fórmula literal de la
doctrina: paisajes `no extra people, no rainbow` · retrato `no lip-sync, no talking` ·
multitud `no cloned or extra figures, no faces turning to camera`.

**Auditor (agente DISTINTO, siempre)**: audita CADA prompt contra los gates: verb test ·
before/after · amplitud declarada · una sola cámara sin "fast" · cero quietud · líneas
canónicas idénticas · solo mueve lo que existe · negativos del plano · riesgo de
moderación. El redactor aplica TODOS los hallazgos.

**Salida**: `content/videos/muiscas/videos/<mito>/movimiento-vN.json`:
```json
{ "_notas": "…", "clips": { "c01": { "keyframe": "<ruta relativa>", "prompt": "<7 líneas con \n>" }, … } }
```
**Aceptación**: auditoría en verde. Referencia de calidad:
`videos/bochica/movimiento-v4.json` (auditado 2026-08-31).

---

## 6. FASE 5 — PLAN DE ARMADO (agente editor)

**Entrada**: voces + mapeo. **Referencia obligada**:
`content/videos/muiscas/videos/bochica/plan-v4.json` (el plan modelo).

**Trabajo**: escribir `plan-vN.json` junto a las voces del mito:
- Raíz: `width 1080, height 1920, fps 24, voice_offset 0.5,
  music ../../audio/musica-muisca-andina.mp3, music_vol 0.12`. **SIN `transition_dur`.**
- Un bloque por clip (`type: "motion"`, `duration: 5`) + still de cola (`type: "still"`,
  `kenburns`, `duration` 3,5-5). La voz y su `subtitle` (texto exacto de la línea) van
  en el PRIMER clip del bloque narrativo. `title`/`title_sub` solo en el bloque 1:
  `"<MITO>"` / `"Mitos de Colombia · muiscas"`.
- SFX solo donde el sonido es diegético (se VE agua/fuego/lluvia): `sfx_vol` 0,2-0,3
  (0,4 si el agua es protagonista). Biblioteca en `audio/sfx/` — SE REUSA.
- **Música**: la cama del pueblo (`musica-muisca-andina.mp3`, 95 s) SE REUSA; el
  ensamblador la resuelve con fade en su final natural y el cierre queda solo con
  ambiente. **Video >105 s ⇒ cama nueva a duración exacta, PREVIA autorización del
  usuario (nunca loopear)** — prompt en `plantillas-prompts.md` §4.

```bash
node scripts/videos/validate-plan.mjs --plan <plan> --secos --suggest
```
**Aceptación**: `0 errores`. Avisos de aire muerto >3,5 s: aceptables solo como
respiración dramática deliberada, documentada en `_notas`.

---

## 7. FASE 6 — GENERACIÓN WEB (operador de navegador — ROL ÚNICO)

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

**Si algo huele a bloqueo** (cola degradada → pausas de 20-30 s por una hora / toggle
desaparece → PARAR / cuenta en revisión → PARAR y avisar al usuario): seguir
`docs/mitos-produccion-imagenes.md` §12 al pie de la letra. Nunca sesiones paralelas,
nunca rotar IP/cuenta.

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

```bash
# 1. Importar (dry-run primero, SIEMPRE):
node scripts/videos/import-clips.mjs --in content/videos/muiscas/videos/<mito>/descargas --plan <plan-vN.json>
node scripts/videos/import-clips.mjs --in ... --plan ... --apply
# (1-en-vuelo ⇒ orden de llegada = orden de envío; ante duda, --map explícito)

# 2. Validar con los clips reales:
node scripts/videos/validate-plan.mjs --plan <plan-vN.json> --secos

# 3. Ensamblar:
node scripts/videos/assemble-video.mjs --plan <plan-vN.json> --out <mito>-final.mp4

# 4. Entregas (el ensamblador produce solo el máster + .srt; estos dos son aparte):
ffmpeg -i <mito>-final.mp4 -c:v libx264 -b:v 8M -maxrate 8M -bufsize 16M \
  -pix_fmt yuv420p -c:a aac -b:a 192k -movflags +faststart <mito>-final-social.mp4
ffmpeg -i <mito>-final.mp4 -vf scale=720:1280 -c:v libx264 -crf 28 -preset medium \
  -c:a aac -b:a 128k -movflags +faststart <mito>-preview.mp4
```

**Regeneración de clips sueltos** (salida normal del QC): el clip nuevo se descarga a
`descargas/regen-<fecha>/`, se importa con `--map` explícito apuntando al MISMO `cNN`
(`import-clips.mjs` acepta mapa parcial: importa solo lo mapeado):
```bash
node scripts/videos/import-clips.mjs --in descargas/regen-<fecha> --plan <plan> \
  --map regen.json --apply     # regen.json: { "c07": "hf_…mp4" }
```
El importador actualiza `import-map.json` moviendo la entrada anterior a `replaced`.
Los `.mp4` no van a git: **el import-map es el ÚNICO historial de regeneraciones.**
El plan NO sube de versión por regenerar clips (solo por cambios de guion, §1).

**QC final (gates — cualquiera en rojo devuelve el clip a fase 6 o el plan a fase 5):**
1. Consistencia: personajes/paisajes idénticos entre clips y vs biblia; estilo papel
   intacto en todos los frames.
2. Movimiento: ninguna apertura congelada (frame 0 ≈ frame 12 → regenerar); cierres
   "settled, no frozen"; proxy: un clip vivo pesa ~2× uno tímido.
3. Audio: sync voz-plano; subtítulos calzados; música resuelve al final; SFX discretos.
4. Cortes secos exactos; escalas alternadas; sin texto en pantalla.
5. Ver el video ENTERO en 9:16 real antes de declararlo listo.

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

**Claims**: antes de trabajar, el agente escribe su claim en la fila
(`fase-N @ <id-agente> <fecha-hora>`) y lo COMMITEA antes de producir nada (§1b). Claim
ajeno de <24 h = tomado, pasar al siguiente mito sin claim. Claim >24 h sin salida
commiteada = abandonado, re-claimable anotándolo en Notas. El próximo mito es el primero
de la cola con fase pendiente sin claim; el usuario reordena la cola, los agentes no.
El operador de fase 6 anota su marcador (`clips: 12/19 (últ. HH:MM)`) cada ~5 clips.
Al usuario se le escribe proactivamente SOLO en: los puntos de §0b, sospecha de bloqueo
de cuenta, y el cierre de cada video. Todo lo demás se lee de aquí.

`OPERADOR WEB: Codex desde 2026-08-31 19:49 -05`

| # | Mito | Slug(s) DB del canon | Guion | Voces | Mapeo | Movim. | Plan | Clips | Video | Claim | Notas |
|---|------|----------------------|-------|-------|-------|--------|------|-------|-------|-------|-------|
| 1 | **Bochica v4** | `el-castigo-de-chibchachum-y-bochica` (+coda de `castigo-y-redencion-de-chibchacum`) | ✅ | ✅ | ✅ | ✅ | ✅ | 5/19 (últ. 20:20) | — | fase-6 @ codex 2026-08-31 19:49 -05 | `videos/bochica/{plan-v4,movimiento-v4}.json`, `voces-v4-2min/`. Guion aprobado en chat y campo `aprobado` estampado 2026-08-31; c01-c05 descargados y ffprobe 1080×1920/24 fps/5,041667 s |
| 2 | La aparición del hombre | confirmar contra `mitos/la-aparicion-del-hombre/manifest.json` (candidatos: `amanecer-de-chiminigagua-y-creacion`, `dioses-muiscas-y-creacion-cosmica`) | ✅ borrador: `videos/la-aparicion-del-hombre/bloques.json` | — | — | — | — | — | — | — | 17 keyframes 2K listos; el más avanzado |
| 3 | Bachué extendida | `bachue-madre-primigenia-de-iguaque` (variantes ids 652, 721, 732-737) | — | — | — | — | — | — | — | — | 17 keyframes + guion 90s (`guion-bachue-v3.json`) como base |
| 4 | El Dorado | `el-dorado-sueno-de-oro-y-esmeraldas` · variantes `dorado-sacrificio-del-cacique-dorado`, `el-dorado-y-la-diosa-sumergida`, `engano-acuatico-del-dorado` | — | — | — | — | — | — | — | — | biblia lista; decisión editorial pendiente del usuario: ritual-y-codicia vs cacica-sumergida |
| 5 | Chibchacum | `castigo-y-redencion-de-chibchacum` (variante `chibchacum-castigo-y-redencion-muisca`) | — | — | — | — | — | — | — | — | centrarlo en el dios, 100-110s; no repetir la inundación de Bochica |
| 6 | Huitaca | `huitaca-deidad-oscura-y-diluvio` (variantes `huitaca-rebelion-y-transformacion-lunar`, `huitaca-belleza-noche-y-desobediencia`) | — | — | — | — | — | — | — | — | 95-105s máx, no estirar |

**Paralelismo**: fases 1-5 de mitos distintos EN PARALELO (agentes independientes, cada
uno con su claim). Fase 6 SECUENCIAL GLOBAL (un cupo, un operador). Fases 7-8 se
disparan por mito apenas sus clips estén.

---

## 10. COSTOS Y CUOTAS (presupuesto normal — excederlo = preguntar, §0b-d)

- Clips: **0 créditos** (unlimited web). Sin licencia: NO producir clips.
- Voces: ~1,5-2k caracteres ElevenLabs por mito (plan Creator 300k/mes — sobra).
- Keyframes nuevos: **$0 — no se generan** (ley 1). Con aprobación: ~USD 0,2/imagen vía
  `generate-keyframes.mjs`, con `lint-spec.mjs` en verde antes.
- Música/SFX: se reusan. Cama nueva (>105 s) o SFX nuevo: solo con autorización.
- Higgsfield por créditos (MCP): solo pruebas puntuales autorizadas — Seedance 2.5
  1080p/5s = 45 cr (verificado); 720p/5s = 32,5 cr.

## 11. ERRORES CONOCIDOS Y QUÉ HACER

| Síntoma | Causa | Acción |
|---|---|---|
| Voz `SE PASA` | línea larga | reescribir línea, `--only N` |
| Clip estático/tímido | prompt sin amplitud o con orden de quietud | anti-patrones §4 de la doctrina; regenerar |
| Clip con morphing / estilo 3D | beats sobrecargados o cámara doble | simplificar a 1 dominante + 2 secundarias; regenerar |
| Rechazo de moderación web | la IMAGEN de inicio | no insistir; anotar en pendientes; re-escenificar con aprobación |
| Botón dice `Generate ✦ N` | toggle Unlimited apagado (recarga) | ABORTAR tanda; re-montar sesión |
| Piezas que no llegan | 2ª pieza en vuelo o llegada tardía | máquina 1-en-vuelo; "no está" ≠ "se perdió" |
| Cola lentísima | degradación por ritmo | pausas 20-30 s por una hora; jamás bucle |
| `import-clips` conteo desigual | descargas mezcladas | carpeta limpia por tanda o `--map` explícito |
| `import-clips` no ve archivos | nombre ≠ patrón `hf_*.mp4` | renombrar al patrón (§7 paso 8) |
| Referencia rota en spec | ficha inexistente | `generate-keyframes.mjs` aborta solo; corregir el ref |
| Dos docs se contradicen | docs vivos | precedencia del preámbulo; lo conservador; reportar en Notas §9 |
| Un final se ve distinto al canal | se saltó biblia/DNA | `channel-dna.json` + `biblia-visual-video.md`; el canal es UN sistema |

---

*Mantenimiento: quien cierra una fase actualiza la cola (§9) en commit atómico; quien
verifique algo nuevo en la web lo anota en `pipeline-v3-profesional.md` §6; toda lección
nueva va al doc de su dominio. Este playbook solo lo edita el mantenedor (hoy: la sesión
principal con el usuario).*
