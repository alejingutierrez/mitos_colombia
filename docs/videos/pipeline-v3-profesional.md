# Pipeline v3 profesional — mitos → video (2026-08-31)

El runbook end-to-end de producción de videos del canal. Sustituye el flujo operativo de
`proceso-mitos-a-video.md` (que queda como referencia histórica de v2 y de las lecciones
verificadas); las doctrinas de detalle viven en sus docs y aquí solo se citan.

## 0. Qué define a v3 (decisiones)

1. **Video con Seedance 2.5 unlimited 1080p vía la WEB de Higgsfield** (automatización de
   navegador con el arnés heredado de imágenes) — cero créditos por clip. El MCP queda solo
   para pruebas puntuales por créditos.
2. **Solo cortes secos** — se eliminan los crossfades entre bloques. El ensamblador ya lo
   soporta: los planes v3 **no llevan `xfade` ni `transition_dur`** (`validate-plan.mjs
   --secos` lo vigila). Sobreviven: fade global de entrada/salida y el fade alpha de títulos.
3. **Guiones de hasta ~2 minutos** (doctrina de guion 2.0, §2) con el narrador oficial
   **alejandro** (`bNziytBsHtCSsgcPplG9`, familia v2, st .5 / sim .8 / sp .97 — ver §3).
4. **Prompts de movimiento por la doctrina v2** (`doctrina-movimiento-v2.md`): plantilla de
   7 líneas, beats cronometrados, amplitud declarada, cero órdenes de quietud.
5. Todo lo demás se hereda de v2: biblia manda, gasto escalonado, checklist anti-nsfw,
   guardarraíles editoriales del sitio, manifests reproducibles, channel-dna por pueblo.

Mapa de documentos: guion y dirección → `direccion-cinematografica.md` + plantillas §3a ·
movimiento → `doctrina-movimiento-v2.md` (+ anexo de investigación) · prompts de keyframe →
`plantillas-prompts.md` §1 · navegador → `docs/mitos-produccion-imagenes.md` §8-12 + §5 de
este doc · lecciones v2 → `proceso-mitos-a-video.md` §6.

## 1. Estado de la biblioteca (inventario 2026-08-31)

- **Biblia muisca: 89 fichas en main** (las nuevas a 2K 1520×2688), con `manifest.json` de
  prompts y `higgsfield-ids.json` (13 medias ya subidas, anti-resubida). Cubre de sobra
  El Dorado (laguna_guatavita, cacica, heredero, moja, balsa, templo, cercado, mercado),
  Chibchacum (chibchacum_dios, sabana_anegada, valle_anegado_arco…) y Huitaca
  (huitaca_mujer, lechuza_huitaca, plaza_fiesta_noche).
- **Keyframes listos**: Bachué 17 + Bochica 17 (1024×1536 + crop 1080×1920, manifest con
  prompt completo) y **la-aparicion-del-hombre 17 a 2K** (con guion en `bloques.json`; le
  faltan voces, clips y plan — es el mito nuevo más avanzado).
- **Audio**: cama andina 95 s (`musica-muisca-andina.mp3`) + 4 SFX loopeables de 10 s
  (laguna, fogón, lluvia, cascada). ⚠️ un video de 2 min necesita cama nueva o loop (§7).
- **Voces**: Bachué y Bochica ya narradas por alejandro bloque a bloque (9 tomas c/u).
- **Planes**: EDL probados 2 veces; para re-generar clips solo se reemplazan `clips/cNN.mp4`.
- ⚠️ **Higiene de git pendiente** (todo vive solo en el worktree `myth-mobile-design-c8ea4f`):
  `voces-alejandro/` de Bachué, las voces alejandro de Bochica (modificadas sin commit),
  `plan.json` de Bachué actualizado, `plan-comp-*.json`, srt regenerados. Commitear antes
  de producir sobre ellos.
- Los `media_id` de `media-map.json` **expiran** — para la web se re-suben los keyframes
  de todos modos (el navegador usa upload propio, no medias del MCP).

## 2. Paso 1 — Guion (doctrina 2.0: hasta 2 minutos)

**REGLA MADRE (usuario, 2026-08-31): las imágenes ya producidas son la base del video.**
El guion se escribe SOBRE la biblioteca existente (keyframes del mito + placas de biblia),
nunca al revés: si un bloque del guion exige un plano que no existe, se reescribe el
bloque — generar keyframes nuevos requiere aprobación explícita del usuario. Un beat
canónico sin imagen puede entrar como NARRACIÓN sobre una imagen existente que lo
soporte (la causa de Chibchacum sobre los planos de lluvia), o queda fuera (la coda de
los temblores). Corolario: el largo real del video lo fija la biblioteca — 2 minutos es
el techo, no la meta.

Se conserva TODO de la doctrina vigente (registro **fogón-visual-coloquial**, 2 frases y
**≤19 palabras por bloque**, fiel al canon sin alargar, gancho con giro en el bloque 1,
cita directa ÚNICA en el clímax, bookend de objeto, última línea con el agua quieta,
nada de moralejas). Lo que cambia es el conteo y el arco:

- **Presupuesto**: alejandro narra a 2,4-2,6 palabras/s y la narración ocupa ~65-70% del
  video → **2 minutos = 190-215 palabras** (no el doble del guion de 90 s: +25-30%).
- **12 bloques × ≤19 palabras** (~10 s de ventana c/u + cola ≈ 120-125 s). Alternativa: 11
  bloques (~110 s) si el canon no da; **no estirar jamás** — Huitaca, p. ej., pide 9-10.
- **Arco extendido**: hook 1 · causa 2-3 · build 4-6 · bisagra 7 · clímax 8-9 · payoff 10 ·
  **segunda revelación canónica 11** (el beat que el guion de 90 s dejaba fuera: los
  temblores de Chibchacum, la coda del culto de Bachué) · cierre quieto 12.
- **El canon manda el largo**: leerlo de `data/mitos.sqlite` (readonly) ANTES de decidir
  bloques. Veredictos 2026-08-31: Bochica-remake y El Dorado dan 2 min sobrados; Bachué
  extendida sí; Chibchacum 100-110 s (centrado en el dios, no en repetir la inundación);
  Huitaca 95-105 s.
- Cada ventana de guion se planifica para **2 clips de 5 s con corte seco** (clímax: 3).
  Con cortes secos no hay recorte-al-aire del ensamblador: el aire post-frase (≥0,3 s)
  se planifica en la ventana, no se improvisa.

Ejemplo de referencia: `docs/videos/muiscas/mvp-guiones/guion-bochica-v4-2min.json`
(remake de Bochica en 12 bloques: incorpora la causa canónica —las quejas y el castigo de
Chibchacum— y la coda de los temblores). Nota editorial: lleva 3 nombres propios
(Chibchacum, Bochica, Tequendama) — excepción deliberada a la regla de 2, el mito canónico
nombra a ambos dioses en su propio título.

## 3. Paso 2 — Voz (alejandro)

```bash
node scripts/videos/generate-voice-el.mjs --lines docs/videos/muiscas/mvp-guiones/<guion>.json --out-dir content/videos/muiscas/videos/<mito>/voces/
```

- **Modelo DEFINITIVO del canal: `eleven_flash_v2_5`** (decisión del usuario 2026-08-31
  tras A/B contra multilingual_v2 — "para las voces vamos a usar 2.5").
- **`eleven_v3` DESCARTADO para el canal (decisión del usuario, 2026-08-31)**: aunque
  genera con la voz sin fine-tuning y al mismo ritmo (~2,47 wps), el clon pierde el
  parecido con la voz real — en una professional voice clone la fidelidad al timbre
  manda sobre la expresividad. No revisitar salvo que ElevenLabs saque fine-tuning
  de professional clones para v3.
- JSON de tomas: `voice_id` alejandro + `model_id` + settings del DNA (st .5 / sim .8 /
  sp .97); `previous_text`/`next_text` dan la prosodia continua (soportados en toda la
  familia v2); `window` = tope de habla por toma.
- El script mide cada toma con silencedetect y reporta `SE PASA` → esa línea se REESCRIBE
  (nunca `atempo`). `--only N,M` regenera tomas sueltas.
- 12 tomas ≈ 12 llamadas; cuota ElevenLabs plan Creator (300k chars/mes) sobra.

## 4. Paso 3 — Keyframes (imagen)

Sin cambios de herramienta (specs → `lint-spec.mjs` → `generate-keyframes.mjs
--concurrency 4`), con dos endurecimientos:

1. **`lint-spec.mjs` en verde es PRECONDICIÓN DURA, no ahorro**: el filtro de Seedance
   reacciona a la IMAGEN de inicio (verificado: bloqueó 3/3 la escena madre-niño en el
   agua que grok y kling pasaron). Checklist anti-nsfw de `proceso-mitos-a-video.md` §5b
   desde la spec, siempre.
2. Un guion de 12 bloques = **~24 keyframes** (2 por bloque, convención `bNa`/`bNb`) ≈
   USD 5-6 de OpenAI por mito. Reusar biblia y keyframes existentes donde el plano lo
   permita (el manifest dice de qué está hecho cada uno).

## 5. Paso 4 — Prompts de movimiento (uno por clip)

Por cada clip se escribe el prompt con la **plantilla de 7 líneas** de
`doctrina-movimiento-v2.md` (líneas 1/6/7 byte-idénticas del canal; beats `[0-2s][2-4s]
[4-5s]` con causa→consecuencia y amplitud declarada; cámara única motivada con endpoint;
identidad por invariante positivo). Ejemplos de producción listos en la doctrina §5.

**Artefacto nuevo por video**: `movimiento.json` junto al plan —
`{ "c01": { "keyframe": "keyframes/b1a_… .crop-9x16.jpg", "prompt": "…8 párrafos físicos…" }, … }`.
Es la fuente que consume la sesión de navegador (§6) y queda versionado como el manifest
de keyframes. Gates de guion de movimiento: **verb test** (beat sin verbo = decoración) y
**before/after** (cada clip muestra un cambio de estado visible). La doctrina conserva siete
secciones lógicas; los tres beats temporales ocupan párrafos separados, por lo que el manifest
de Bochica v4 tiene ocho párrafos físicos por prompt.

## 6. Paso 5 — Generación web (Seedance 2.5 unlimited 1080p)

La doctrina completa heredada de imágenes está en `docs/mitos-produccion-imagenes.md`
(§8 arnés, §9 Lexical, §12 bloqueos) — TODA aplica: **1 en vuelo** (el banner de la web ya
nombra al video: imagen y video COMPARTEN el cupo unlimited), respiro 6-7 s, un solo
reintento, confirmar aceptación (no suponerla), abortar la tanda si el botón deja de decir
`Unlimited` (un Seedance 2.5 cobrado en silencio son ≈45 cr/clip a 1080p/5s, 32,5 a 720p), toggle que se apaga al
recargar, estado desde disco, jamás sesiones paralelas.

Adaptación a video (arnés por escribir tras la primera sesión):
- Montaje: página de video con **Seedance 2.5 + 1080p + 9:16 + 5 s** + toggle Unlimited;
  subir el keyframe del clip como start frame (crop 1080×1920, máxima calidad);
  prompt de `movimiento.json` vía `hfSetText` (verificar igualdad exacta contra el manifest;
  Bochica v4 usa 8 párrafos físicos).
- Timeouts nuevos: aceptación hasta 2 min se queda; terminación pasa de 15 a **30-45 min**
  parametrizables (render de video en cola unlimited).
- Descarga: nombre determinista `hf_<YYYYMMDD>_<HHMMSS>_<job>.mp4` esperado en el CDN
  conocido; `hfIds()` debe extender su regex a `video[src]`/`source`/`poster`.
- **Moderación**: el rechazo por contenido NO es el banner de concurrencia — identificar
  su forma en la web y tratarlo como categoría propia (re-escenificar keyframe, no
  reintentar en bucle).
- **Enhance APAGADO** si existe el toggle: nuestros prompts ya van expandidos por la
  doctrina v2; un enhancer encima la reescribiría.
- Volumen: ~24 clips/mito a render de minutos con 1 en vuelo = una tarde de cola por mito.
  Tanda de fondo + `hfEstado()` + ingesta por partes.

**Checklist de la primera sesión con la licencia** (verificar y anotar en este doc):
toggle/botón y su texto exacto · si se apaga al recargar · qué combos modelo×duración×
resolución cubre el unlimited (¿1080p nativo? ¿5 y 10 s?) · selector 9:16 · que la caja
sea Lexical · geometría del slot de start frame (¿56×56/24×24?) · ¿hay end frame? (no lo
usamos) · ¿toggle Enhance? · textos de badge en vuelo (¿`Generating|Processing|Queued`
alcanza?) · tiempo real de render de un clip · forma del rechazo por moderación · nombre y
descarga del .mp4 resultante. Primera tanda corta (2-3 clips) y a mitad de ritmo.

### VERIFICADO 2026-08-31 — primera sesión Seedance 2.5

- La web ofrece 1080p nativo, 9:16 y duraciones de 5 s y 10 s dentro de Unlimited. El toggle
  se apaga después de recargar; el botón válido dice exactamente `Generate Unlimited`.
- El audio nativo se representa con el checkbox `Off` y se dejó apagado. No apareció un toggle
  `Enhance`; `Elements` es un control distinto.
- El prompt usa Lexical (`contenteditable` + `data-lexical-editor`). Al escribir `@Image 1`, el
  selector contextual debe cerrarse con Escape antes de enviar. Cada mención queda enlazada como
  `data-beautiful-mention="@image_1"`; algunos prompts mencionan el mismo keyframe más de una vez,
  así que se valida contra el número de ocurrencias del manifest, no contra uno fijo.
- El slot de referencia visible mide 252×86 px vacío; tras adjuntar muestra miniatura y control de
  retiro. El selector de Assets pasa por `Upload file`, `Uploading` y `Checking content` antes de
  habilitar el asset nuevo. Se usa un único archivo/keyframe por clip y no se usa end frame.
- La aceptación observada fue `Generating` (en un clip también apareció `Processing`). En la tanda
  c01-c03 no hubo rechazo de moderación ni banner de concurrencia.
- c01-c03 terminaron en aproximadamente 205 s, 199 s y 174 s. Los tres archivos resultaron HEVC,
  1080×1920, 24 fps y 5,041667 s. El nombre real coincide con
  `hf_<YYYYMMDD>_<HHMMSS>_<uuid>.mp4` en el CDN esperado.
- El control visual de cinco muestras por clip confirmó movimiento desde el arranque, continuidad
  de papel/relieve y ausencia de texto o personas espurias. El bootstrap reproducible se emite con
  `node scripts/mitos/emit-bootstrap-video.mjs`.
- En la tanda completa, `Checking content` llegó a superar 30 s: no seleccionar hasta que desaparezca.
  Assets visualmente muy cercanos pueden deduplicarse al UUID anterior y un upload puede quedar
  `Not eligible`. Verificar siempre UUID, elegibilidad y miniatura; cancelar antes del render si no
  coinciden. Una reexportación JPEG visualmente idéntica resolvió ambos casos en un único reintento.

## 7. Paso 6 — Importar clips

```bash
node scripts/videos/import-clips.mjs --in ~/Downloads --plan content/videos/muiscas/videos/<mito>/plan.json          # dry-run
node scripts/videos/import-clips.mjs --in ~/Downloads --plan ... --apply   # copia y escribe clips/import-map.json
```

Mapea los `hf_*.mp4` descargados a `clips/c01…cNN` en el orden de envío (1 en vuelo ⇒
orden de llegada = orden de envío; `--map map.json` para casos ambiguos), verifica conteo
contra los bloques motion del plan, y `ffprobe`a resolución/fps/duración avisando desvíos.
`import-map.json` queda como registro versionable (equivalente del manifest de keyframes).

## 8. Paso 7 — Ensamblaje (cortes secos)

```bash
node scripts/videos/validate-plan.mjs --plan ... --suggest   # ventanas + partición de clips
node scripts/videos/validate-plan.mjs --plan ... --secos     # plan v3: sin xfade/transition_dur
node scripts/videos/assemble-video.mjs --plan ... --out ...-final.mp4
```

- **Plan v3**: igual al v2 pero SIN `xfade` ni `transition_dur` (el ensamblador cae a
  `concat` = corte seco, ya probado). Título de canal solo en bloque 1; cola still de
  3,5 s solo ambiente; sfx bajos (0,2-0,3; 0,4 si el agua es protagonista; música 0.12).
- **Música**: la cama del pueblo (95 s) SE REUSA — el ensamblador la resuelve con fade
  en su final natural y el cierre queda solo con ambiente. **Video >105 s ⇒ cama nueva
  a duración exacta con Eleven Music (prompt de plantillas §4), PREVIA autorización del
  usuario; nunca loopear.**
- **Retimeado stepped (opcional, A/B pendiente)**: cadencia on-twos garantizada en post
  con `fps=12,fps=24` en la normalización del bloque motion (campo `"stepped": true` por
  bloque — cambio de código pendiente en assemble-video.mjs). Probar contra el clip
  v4-doctrina antes de adoptarlo como default del canal.
- **Videos de 2 min**: sin límites duros en el ensamblador; vigilar el paso de subtítulos
  (un PNG-overlay por cue: a ~40-60 cues conviene trocear en tandas — cambio pendiente si
  el primer 2-min se atasca).
- Entregas: máster CRF18 + social 1080p 8Mbps + preview 720p + .srt (igual que v2).

## 9. QC final

1. Consistencia vs biblia (personajes idénticos entre clips; estilo papel intacto).
2. **QC de movimiento** (doctrina v2): ninguna apertura congelada (frame 0 ≈ frame 12 =
   regenerar), cierre "settled ≠ frozen", peso del archivo como proxy (un clip vivo pesa
   ~2× uno tímido a igual códec).
3. Sync voz-imagen por bloque; subtítulos calzados; sin texto en pantalla.
4. Cortes: secos y en el fin de ventana; ritmo de escalas alternadas (dirección §2).
5. Actualizar `channel-dna.json` + lecciones aprendidas del video.

## 10. Cambios de código v3

Hechos (2026-08-31): `validate-plan.mjs --secos` (rechaza xfade/transition_dur, sugiere
también ternas de clips) · `import-clips.mjs` nuevo.
Pendientes: campo `stepped` en assemble-video.mjs (§8) · troceo de overlays de subtítulos
para 2 min (§8) · arnés de navegador para video (tras la primera sesión, §6) · retirar
`generate-voice.mjs` (legado OpenAI).
