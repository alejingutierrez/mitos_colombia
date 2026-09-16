# Manual de producción de video — mitos de Colombia

**Canal:** video vertical 1080×1920 a 24 fps, estética de maqueta de papel artesanal, para mitosdecolombia.com.
**Documento:** único manual operativo del carril. Sustituye y corrige a los runbooks dispersos (ver el anexo final).
**Worktree de referencia:** `/Users/alegut/MyApps/Personal/mitos_colombia/.claude/worktrees/next-muisca-video-3e07cd`. Todas las rutas relativas cuelgan de ahí.

---

## Estado a 16 de septiembre de 2026

| | |
|---|---|
| **Carril vigente** | **v4 por MCP de Higgsfield**, modelo **Seedance 2.5** a 1080p, `omni_reference` desde un `start_image`. Voces de ElevenLabs (`alejandro_narracion`), lechos de las narraciones del sitio, ensamblaje local con ffmpeg. |
| **Novedad del 16-sep** | **Mesa de montaje escena por escena**: el usuario eligió toma a toma entre las variantes de tres mitos (164 tomas comparables) y salió `bachue-final-v7-seleccion.mp4`, el primer máster que **mezcla tandas** (9 tomas grok de agosto + 5 Seedance + 4 Gemini). Obliga a reescribir la ley 4. |
| **Superado (no usar)** | Carril v3 "web unlimited" de Higgsfield · grok_video como modelo del canal · Gemini Omni Flash 1.1 (rechazado por el usuario) · OpenAI TTS `gpt-4o-mini-tts` ("ash") · `eleven_v3` y `eleven_flash_v2_5` · voces `2HsKyIMt2fxFwsry7Nd6` y `bNziytBsHtCSsgcPplG9` (ya no existen en la cuenta) · subtítulos quemados y `.srt` · SFX por bloque · las camas de música de 95 s · el perfil de mezcla `canal` (ducking + `loudnorm`). |
| **Experimental, sin créditos** | Carril de stop-motion (Huitaca). Produjo un máster **rechazado** (`huitaca-final-v1.mp4`) y un rediseño v2 con ocho puertas de calidad, la mitad sin implementar. |
| **Saldo de Higgsfield** | **32 créditos**, plan `plus`, `unlim` no disponible — último `balance` registrado el **12-sep** (`stopmotion-v2-rediseno.md` §0). Desde el 11-sep 21:53 no se ha gastado un crédito: el `jobs.json` más reciente con trabajo real es el de El Dorado, y el ledger del laboratorio (387 llamadas) no tiene ni una a Higgsfield. **Con 32 cr no se puede producir nada por ninguna vía.** ⚠ Sin verificar hoy contra la cuenta: hay que llamar a `balance` antes de encolar. |
| **Regla de escritura de este manual** | Todo número, ruta, comando y precio está medido contra el disco o leído del código. Lo que no se pudo verificar va marcado **⚠ sin verificar** en la misma línea. Donde un documento viejo contradice a una medición, manda la medición. |

---

## Índice

1. [Las leyes del canal](#1-las-leyes-del-canal)
2. [Del mito al guion y a los keyframes](#2-del-mito-al-guion-y-a-los-keyframes)
3. [Producir en Higgsfield](#3-producir-en-higgsfield)
4. [El sonido: voces, lechos y mezcla](#4-el-sonido-voces-lechos-y-mezcla)
5. [Montaje, título y entrega](#5-montaje-título-y-entrega)
6. [Control de calidad](#6-control-de-calidad)
7. [Costes y presupuesto](#7-costes-y-presupuesto)
8. [Dónde vamos](#8-dónde-vamos)
9. [Anexo · Qué documento leer para qué](#9-anexo--qué-documento-leer-para-qué)

---

## Arranque rápido

Una corrida completa, de mito a máster, en orden. Cada paso está desarrollado en su sección.

```bash
export DEVELOPER_DIR=/Library/Developer/CommandLineTools     # sin esto git falla por la licencia de Xcode
M=<mito>; D=content/videos/muiscas/videos/$M                  # cwd = raíz del worktree
#  1 canon:   SELECT mito FROM myths WHERE slug='<mito>'  (Postgres — NO data/mitos.sqlite)   §2.1
#  2 guion:   9 bloques × 17-19 palabras → docs/videos/muiscas/mvp-guiones/guion-$M-vN.json   §2.2
#             presentarlo en chat, esperar el OK, escribir "aprobado" en el JSON y commitear   ley 8
node scripts/videos/lint-spec.mjs --spec scripts/videos/specs/muisca-<mito>-escenas.mjs       # 0 rojos §2.5
node scripts/videos/generate-voice-el.mjs --lines <guion> --out-dir $D/voces-vN --format wav   # 0 "SE PASA" §4.1
node scripts/videos/build-lecho.mjs --guion <guion> --duration <clips+cola+8.42> --slug $M \
     --out $D/lecho-vN.wav --lecho <a,b,c>                                                     # 3 lechos por acto §4.2
node scripts/videos/validate-plan.mjs --plan $D/plan-vN.json --suggest                         # ventanas §5.2
#  3 preflight:  MCP balance   +   generate_video {..., "get_cost": true}  con los params exactos §3.2
#  4 subida:     media_upload (≤20) → subir-keyframes.mjs --uploads … --dir $D/kf-9x16 → media_confirm §3.3
#  5 encolar:    generate_video_batch, olas de ~8 → jobs_wait → escribir $D/clips-vN/jobs.json  §3.4-3.6
node scripts/videos/import-mcp-clips.mjs --plan $D/plan-vN.json --jobs $D/clips-vN/jobs.json   # dry-run, luego --apply §3.7
node scripts/videos/qc-sheet.mjs --plan $D/plan-vN.json --out $D/qc                            # mirar las hojas §6.3
node scripts/videos/validate-plan.mjs --plan $D/plan-vN.json --secos                           # 0 errores §5.2
node scripts/videos/assemble-video.mjs --plan $D/plan-vN.json --out $D/$M-final-vN.mp4         # §5.3
#  6 entregas -social y -preview (§5.8) · ebur128 (§6.5) · VER EL VIDEO ENTERO · mandar el preview y esperar el veredicto
#  7 anotar la corrida en docs/videos/BITACORA.md en el mismo turno, gaste o no créditos            §9
```

---

## 1. Las leyes del canal

Once reglas. Todas salen de decisiones del usuario o de un fallo medido que costó dinero o un video. Están numeradas como en `PRODUCCION-END-TO-END.md` §0 salvo donde se indica que se reescribieron.

**Ley 0 · La biblioteca manda.** Las imágenes ya producidas son la base del video. El guion se escribe SOBRE la biblioteca existente, nunca al revés. Generar keyframes o fichas nuevas exige **aprobación explícita** del usuario. Un beat canónico sin imagen se narra sobre una imagen existente que lo soporte, o queda fuera del guion.

**Ley 1 · Formato.** 1080×1920, 24 fps, clips de 5 s, 9 bloques narrativos (10 si el mito lo pide), dos clips por bloque, placa de cola opcional y cierre de canal obligatorio. Los másters vigentes van de 97,46 s a 107,46 s.

**Ley 2 · Sólo cortes secos.** Ningún plan lleva `xfade` ni `transition_dur`; `validate-plan.mjs --secos` lo comprueba y falla. Un fundido cruzado entre dos tomas generadas por modelo produce el fantasma de dos decorados superpuestos y delata que no hay cámara; y 19 uniones × 0,4 s se comen **7,6 s** de narración. Sobreviven tres fundidos de imagen (entrada global 0,6 s, salida global 0,8 s, alfa del título 0,8 s a cada lado) y uno de audio (el `afade` de 1 s con que cierra la mezcla).

**Ley 3 · Voz e identidad sonora.** La voz del canal es la del sitio: `alejandro_narracion` (`9EHAKExD4lT2G6hPG74L`) en `eleven_multilingual_v2`, con los `voice_settings` de `src/lib/narration.js:19-36`. Máster **WAV** (`--format wav`). **`atempo` está prohibido**: una línea que no cabe se reescribe, no se acelera.

**Ley 4 · Un modelo por tanda; el montaje elige entre tandas.** *(Reescrita el 16-sep-2026.)* Dentro de una **tanda de generación** no se mezclan modelos, para que la comparación sea limpia. El **montaje final sí puede escoger la mejor toma de cada tanda**, como hizo el usuario en la mesa de montaje de Bachué v7 (9 grok + 5 Seedance + 4 Gemini). Mezclar tandas está permitido; mezclar **resoluciones nativas** tiene un coste visible y hay que declararlo al entregar (§5.9).

**Ley 5 · Cierre de canal obligatorio.** Todo video termina con la pieza fija de **8,42 s** (`cierre-canal-v1-mudo.mp4`, 8,416667 s reales = 202 fotogramas), que va como **un bloque más del plan**, nunca concatenada aparte, con su `voice` en el mismo bloque. El lecho se construye con la duración **total, cierre incluido**.

**Ley 6 · El canon manda sobre los guardarraíles.** El guardarraíl "sin joyería ni oro corporal" tiene a El Dorado como excepción documentada. Lo que se mantiene es el **pudor**, que además es anti-moderación: figura de espaldas, guayuco descrito en cada prompt, rostro y torso de frente en la lista NOT.

**Ley 7 · Lint anti-nsfw, precondición dura.** `lint-spec.mjs` en 0 rojos antes de generar una imagen. El filtro de moderación de Seedance reacciona a la **imagen de inicio**, no al prompt. Hueco declarado: el linter sólo lee specs `export const ITEMS`; para un mito descrito en `content/mitos-visuales/*.json` el checklist se aplica **a mano** (§2.5).

**Ley 8 · Aprobación humana antes de gastar.** Un guion sin campo `"aprobado"` es un borrador y la fase de voces no arranca. El guion se presenta en chat como texto legible bloque a bloque, nunca JSON crudo. El silencio no es aprobación. *(Incumplimiento registrado: `guion-el-dorado-v1.json` no tiene el campo y el mito gastó 765 cr — o se anota la aprobación retroactiva con su fecha real, o queda constancia de que la ley se saltó.)*

**Ley 9 · Sonido como en el sitio.** Lechos de `narration_beds`, perfil `mix: "narracion"`, voz a −16 LUFS y lecho a −34 LUFS, sin ducking, limitador a −1,5 dBTP y **sin `loudnorm` final**. El modo `canal` (el histórico, con `sidechaincompress` y `loudnorm`) es el que corre **si olvidas el campo `mix`**: es un fallo silencioso.

**Ley 10 · Sin subtítulos quemados.** `burn_subtitles: false` y `write_srt: false` (usuario, 2026-09-09). El campo `subtitle` se sigue rellenando en cada bloque: es el guion legible dentro del plan y la fuente del `.srt` el día que se quiera como pista aparte.

**Ley 11 · Ver el video entero en movimiento antes de entregar.** Métricas verdes no son una entrega: son un permiso para mirar. Huitaca v1 pasó sus métricas, se entregó, y el usuario escribió «actualmente se ve desastroso»; un panel de 34 agentes dejó 20 defectos confirmados y 0 refutados. La compuerta humana va en **tres** puntos: hoja de contacto de las imágenes ancla antes de gastar un crédito; reel corto en movimiento cuando se cambia de método o de cadencia; y el preview entero antes de dar el mito por cerrado. El video se entrega como `-preview.mp4` y sin aprobación explícita queda «esperando aprobación».

---

## 2. Del mito al guion y a los keyframes

Todo lo de esta sección cuesta **cero créditos de Higgsfield** y es donde se decide si el video sale bien. La palanca más barata que existe es el ritmo del guion: entre el video 1 y el video 2 no cambió el ensamblador, y la narración pasó de llenar el **44 %** del metraje a llenar el **68 %**, con los avisos de aire muerto de 8 a 2. *(Ojo con sobredeterminar: eso es mérito del guion. El salto de aciertos de clip —17/18 a 19/19— no lo es: viene de derivar prompts ya auditados y del candado de toma continua, §3.4.)*

### 2.1 El canon vive en `myths.mito`, en Postgres

```sql
SELECT id, slug, title, mito FROM myths WHERE slug = $1
```

Es la consulta de `scripts/mitos/generar-narracion.mjs:401`, la misma de la que salen las narraciones de la web: por eso el sitio y el video cuentan lo mismo. Se narra **sólo el título y la columna `mito`**; `historia`, `versiones`, `leccion` y `similitudes` son expediente editorial, no canon narrable. Si `mito` está vacía, el mito no se narra ni se videa (`generar-narracion.mjs:286` lo salta).

**Trampa verificada:** `PRODUCCION-END-TO-END.md` §1 manda leer el canon de `data/mitos.sqlite` con `SELECT title, slug, content`. Ese snapshot local **no tiene columna `mito`** y usa los slugs largos de SEO (`bachue-madre-primigenia-de-iguaque`, `huitaca-deidad-oscura-y-diluvio`), no los cortos de los guiones. El esquema vigente sí declara `mito` (`scripts/schema.pg.sql:28` y `:52`). **El sqlite sirve para inventariar slugs, no para escribir el guion.** ⚠ Sin verificar: que la DB en vivo use los slugs cortos (`bachue`, `huitaca`, `el-dorado`) — lo afirman los guiones (`titulo_canon: "Huitaca (DB, slug \`huitaca\`)"`), no se consultó Postgres.

Inventario previo:

```bash
npm run mitos:estado -- --comunidad muiscas --detalle
```

**Es un semáforo aproximado, no una puerta.** `scripts/mitos/estado.mjs:44` cuenta keyframes con el regex `/^b\d[ab](_.+)?\.jpg$/` y los compara contra las escenas no reusadas del plan, que son 14-17 según el mito. Un mito con los recortes nombrados `cNN.jpg` —El Dorado— marca **0/15** con los 17 keyframes en disco. Medido hoy: `la-aparicion-del-hombre 17/17 ✔`, `el-tequendama 17/15 ✔` con tríptico `0/3`, `el-dorado 0/15`, `huitaca 0/17`. **Antes de dar el paso por verde, contar los `.jpg` del directorio a mano.**

### 2.2 La doctrina del guion: 9 líneas de 17-19 palabras

| | Video 1 · la aparición del hombre | Video 2 · el salto del Tequendama |
|---|---|---|
| Palabras por línea | 10-15 | **17-19** |
| Caracteres del guion | 664 | 967 |
| Habla / duración | 41 s de 94 s = **44 %** | 67 s de 99 s = **68 %** |
| Avisos de aire muerto | **8** | **2** |

Un guion de 10-15 palabras deja 4-6 s de silencio tras cada frase, porque la ventana la fijan los clips, no el texto. Alargar la línea no alarga el video: **rellena el hueco que ya estaba pagado.** Los guiones posteriores conservan la doctrina: `guion-huitaca-v1.json` 17-19 (854 car.), `guion-el-dorado-v1.json` 17-19 salvo la línea de cierre de 10 palabras (860 car.), `guion-bochica-v5.json` 17-19 en 10 líneas (967 car.), `guion-bachue-v4.json` 18-19 (922 car.).

**Presupuesto de habla.** Con `speed 1.05` el ritmo medido va de **2,08 a 3,53 pal/s** (nueve tomas de `bachue/voces-v4`, medidas hoy) y de 2,4 a 3,6 en La aparición: 19 palabras entran en 5,4-8,6 s. El "2,4-2,6 palabras/s" de `PRODUCCION-END-TO-END.md:223` es de agosto con la voz vieja y sobreestima la ventana.

**Reglas duras** (`PRODUCCION-END-TO-END.md` §2, `direccion-cinematografica.md` §1-2): gancho con giro en el bloque 1 · cada línea abre con el plano que la acompaña · una sola cita directa, en el clímax · bookend de objeto (el del bloque 1 vuelve transformado en el 9) · última línea con el agua quieta o su equivalente · máximo 2 nombres propios, con excepción documentada si el canon nombra a dos dioses · registro fogón-visual-coloquial · sin moralejas y sin nada que el canon no documente.

### 2.3 El JSON del guion

Se escribe en `docs/videos/muiscas/mvp-guiones/guion-<mito>-vN.json`. La forma vigente es la de `guion-huitaca-v1.json` (no la del playbook, que trae una voz muerta):

```json
{
  "_notas": "mapeo visual bloque→keyframes + deslinde del mito + decisiones",
  "mito_slug": "huitaca",
  "titulo_video": "Huitaca",
  "titulo_canon": "Huitaca (DB, slug `huitaca`)",
  "voice_id": "9EHAKExD4lT2G6hPG74L",
  "voice_name": "alejandro_narracion",
  "model_id": "eleven_multilingual_v2",
  "voice_settings": { "stability": 0.35, "similarity_boost": 0.9, "style": 0.3,
                      "use_speaker_boost": true, "speed": 1.05 },
  "aprobado": "2026-09-12 · usuario pidió el video completo con narración, título, música y cierre",
  "lines": [
    { "bloque": "b1", "clips": "c01-c02",
      "text": "Después del paso del maestro llegó una mujer que caminaba de noche y hablaba donde la gente se juntaba.",
      "window": 9.5 }
  ]
}
```

**`window` es un tope escrito a mano, no una fórmula, y quien lo lee es `generate-voice-el.mjs`** (para decir `OK` o `SE PASA`); `validate-plan.mjs` **nunca** lo mira: el validador calcula la ventana real a partir del plan. Conviven dos doctrinas en el repo — el caso plano `2 clips × 5 s − 0,5 de offset = 9,5` (la aparición, huitaca, el dorado, cuya b9 baja a **4,6** por caer sobre la placa de cola) y la del playbook `habla + 1,5-2,5 s de aire`, que dio 9,35-12,0 en `bachue-v4` y `bochica-v5`, herencia de un montaje de bloques desiguales. **Norma para lo que se produzca desde hoy: `window` = duración real del bloque en el plan menos `voice_offset`.** Comprueba que cada línea coincide con el bloque que le toca antes de generar voces.

**`aprobado` es el candado (ley 8).** Sin él la fase 2 no arranca.

### 2.4 El mapeo bloque → clips

**`bN → c(2N−1), c(2N)`**: 9 bloques × 2 clips = 18 clips de 5 s = 90 s, más la placa still de cola y el cierre de 8,42 s.

| Mito | Bloques | Clips | De dónde salen |
|---|---|---|---|
| la aparición del hombre | 9 | 18 | 17 keyframes nuevos + `c08` = el `acto` del tríptico |
| Bachué | 9 | 18 | **16 keyframes + 2 placas de biblia** (`c01 laguna_iguaque_A`, `c03 kf_b2_emerge`) |
| Bochica / el Tequendama | 10 | 19 | **17 keyframes + 2 placas de biblia** (`c01 sabana_cultivos`, `c16 salto_tequendama`) |
| El Dorado | 9 | 17 | 17 keyframes (8 bloques de 2 + 1 de 1); guion escrito para 17 |

Dentro del bloque, **el clip A plantea y el B revela o consuma: nunca dos planos equivalentes del mismo instante.** El clímax puede llevar dos tomas del mismo keyframe con movimientos distintos. Las escalas alternan: nunca dos bloques seguidos con la misma; cenital y contrapicado una vez cada uno; el primer plano de rostro se reserva a **un** momento por video. Si un bloque no tiene imagen que lo soporte, **se reescribe el bloque** (ley 0).

### 2.5 Los keyframes

Las descripciones de escena viven hoy en **cuatro formatos incompatibles**, y eso es una trampa real:

1. `content/mitos-visuales/<comunidad>.json` → `mitos.<slug>.video.bloques.bN.{a,b}.{desc,comp}`. **Es el plan editorial y la fuente de verdad**: **40 de los 41** mitos muiscas tienen los 9 bloques escritos; Bachué los tiene vacíos a propósito (`nota_deslinde: "YA PRODUCIDO … No regenerar."`).
2. `scripts/videos/specs/muisca-<mito>-escenas.mjs` → el carril de `generate-keyframes.mjs`. **Tres specs de escenas** (`bachue`, `bochica`, `eldorado`, 17 ítems cada una) y tres de biblia/cierre (`muisca-bachue-biblia` 14, `muiscas-biblia-bochica` 5, `canal-cierre` 2).
3. `content/videos/muiscas/videos/<mito>/bloques.json` → el acta de lo producido, con `tag`, `job`, `px`, `desc` y el array `reusadas`.
4. `content/videos/muiscas/videos/huitaca/planos/*.json` → el carril de stop-motion, con `_comun.json` compartido (17 fichas: falta `b2a`).

Generar con el carril de specs:

```bash
# 0 créditos: valida TODAS las referencias y aborta antes de gastar si falta una ficha
node scripts/videos/generate-keyframes.mjs --spec scripts/videos/specs/muisca-eldorado-escenas.mjs --dry-run --force

# la corrida real (SÓLO con aprobación explícita del usuario)
IMAGE_GENERATION_MODEL=gpt-image-2.5-sunburst \
node scripts/videos/generate-keyframes.mjs --spec scripts/videos/specs/muisca-eldorado-escenas.mjs
```

Detalles que sólo están en el código:

- **`--dry-run` a secas no imprime nada** si los archivos existen: el "skip (existe)" (:212) va antes del print (:232). Hace falta `--dry-run --force`, que sigue sin llamar a la API (el cliente OpenAI ni se instancia, :205).
- **El modelo por defecto es `gpt-image-2`** (:54) y **`QUALITY` ya es `"high"` por defecto** (:55): pasar `IMAGE_GENERATION_QUALITY=high` es redundante. El Dorado se hizo con `gpt-image-2.5-sunburst` vía variable de entorno, y su `manifest.json` lo registra.
- **`assertRefsExist` (:157) corre antes de la primera llamada** y aborta la corrida entera si falta una referencia. Existe porque dos keyframes de Bachué se generaron con `vasija_ceramica` roto y nadie lo vio hasta auditar la biblia meses después. `--allow-missing-refs` lo degrada a aviso: no usarlo.
- Olas por dependencias: un ítem espera sólo a sus `refs` hermanos; el resto en paralelo con `--concurrency` (4 por defecto).
- El `manifest.json` guarda el prompt exacto de cada pieza, pero **no guarda el tamaño**: para saber que El Dorado salió a 1024×1536 hubo que medir los `.jpg` con `sips`. Si se aplica la recomendación de §2.6, no habrá forma de distinguir tandas viejas de nuevas en el manifest. **Arréglese el manifest antes de cambiar el tamaño.**
- **Los keyframes sí van a git.** Lo que no se commitea es `kf-9x16/*.jpg`, los `.mp4` y el `.wav` del lecho.
- El prompt que arma el script sigue justificando la zona segura inferior con «allí se sobreimprimen subtítulos»: los subtítulos se eliminaron el 2026-09-09. La zona segura puede seguir; la razón hay que reescribirla.

**El lint anti-nsfw** (ley 7):

```bash
node scripts/videos/lint-spec.mjs --spec scripts/videos/specs/muisca-<mito>-escenas.mjs
```

Sale con código 1 si hay ROJOS. Reglas leídas del código: **ROJO** — menor (`niño`, `bebé`, `infante`, `pequeñ[oa]s de la mano`) + agua/fuego/noche sin cláusula de re-encuadre seguro (`de espaldas`, `a media distancia`, `pequeños en el encuadre`, `sin personas`) · ropa mojada explícita (arreglo canónico: *«ya en la orilla, mantas secas»*) · multitud `cargando`/`en brazos` sin precisar (arreglo: *«adultos, de espaldas, bultos tejidos AL HOMBRO»*). **AMARILLO** — noche íntima con menor · serpiente sin cláusula anti-pez (`SIN aletas, SIN cola de pez`) · escena de más de 620 caracteres (apuntar a <500) · keyframe sin `refs` · keyframe con `refs` cuya escena no ancla identidad con `LA MISMA`/`EL MISMO`. Ejecutado en esta sesión: las tres specs de escenas dan **0 rojos, 0 amarillos, 17 ítems**.

**Hueco que hay que tapar:** nada lintea `content/mitos-visuales/*.json`, que es de donde salieron los dos últimos videos. Para un mito sin spec, el checklist anti-moderación se aplica a mano.

### 2.6 El recorte 9:16, y los 200 píxeles que se tiran por costumbre

El video es 1080×1920; los keyframes no. Hay dos historias:

- **1520×2688** (la aparición del hombre, verificado con `sips`) → recorte al centro a **1512×2688** = 2688·9/16, JPEG q95 4:4:4 → `kf-9x16/cNN-<tag>.jpg`. Se pierde el **0,5 %** del ancho. Es el camino bueno.
- **1024×1536** (Bachué y El Dorado, verificados) → `generate-keyframes.mjs` hace `sharp.resize(1080,1920,{fit:"cover",position:"centre"})`, que escala ×1,25 a 1280×1920 y **corta 200 px de ancho: el 15,6 % del encuadre, siempre por los lados**, donde la doctrina pide que estén las caras y las manos lejos de los bordes. *(`stopmotion-interpolacion.md:17` dice «25 %»; el número correcto es 15,6 % y hay que corregirlo allí.)*

**Y no hace falta.** Medido el 12-sep contra la API: los tamaños son libres (múltiplos de 16, lado ≤ 3840, entre 0,65 y 8,29 Mpx) y **`1088x1920` es 9:16 nativo**. El carril sigue clavado en 2:3 en dos sitios: `SIZES.vertical = "1024x1536"` en `generate-keyframes.mjs`, y `quality:"medium", size:"1024x1536"` en `scripts/mitos/prepare-openai-keyframes.mjs` — **script que no está en git** (`?? scripts/mitos/prepare-openai-keyframes.mjs` en el repo principal): si va a ser referencia, hay que commitearlo primero.

**Recomendación para la próxima corrida:** poner `SIZES.vertical = "1088x1920"` y dejar `crop-9x16` como un `resize` sin recorte. Una línea, 200 px recuperados por keyframe, y desaparece la clase de defecto "la mano quedó cortada". Hasta que se haga, **componer sabiendo que el 15,6 % lateral se tira.** ⚠ Sin verificar: que el cambio no rompa nada aguas abajo; es una recomendación razonada, no probada.

Lo único que importa de los nombres es que **el orden alfabético sea el orden de los clips**: conviven `cNN-<tag>.jpg` (Bachué, Bochica) y `cNN.jpg` (El Dorado). La subida, nunca a mano (§3.3).

### 2.7 El tríptico y la placa de cola

El tríptico es el paso 4 de los cinco de imágenes (`docs/mitos-produccion-imagenes.md` §2), anterior al video. **Se produjo por la web, no por `generate-keyframes.mjs`**, y sus tamaños reales en disco (medidos con `sips`) son:

| Pieza | Formato | Tamaño real | Papel en el video |
|---|---|---|---|
| `entrada` | 16:9 | **2688×1520** | no entra |
| `acto` | 9:16 | **1520×2688** | **cubre uno de los 18 keyframes** |
| `huella` | 1:1 | **2048×2048** | **recorte 9:16 → placa still de cola** |

Por eso los keyframes nuevos son 17 y no 18. `la-aparicion-del-hombre/bloques.json` lo declara: `"b4b lo cubre el acto del tríptico … Por eso son 17 escenas nuevas y no 18"` + `"reusadas": [{ "tag": "b4b", "reusa": "mitos/la-aparicion-del-hombre/acto" }]` — y el reuso entra como `c08`, que es `c(2·4)` exacto.

La **placa de cola** es el recorte 9:16 de la `huella` (`kf-9x16/cola-huella.jpg`), montada como bloque `type: "still"` con Ken Burns "out". El recorte se elige **mirando la imagen**: en la aparición del hombre se tomó x 430→1582 de 2048 (= 1152 = 2048·9/16) para conservar las huellas 1-4. Idealmente hace bookend con el plano inicial. **La placa ya no va al final**: desde el cierre de canal queda en penúltimo lugar, y eso sólo es seguro por el `-frames:v` de `assemble-video.mjs:184` (§5.3). **Huitaca no lleva placa**: sus 19 bloques son todos `motion`. No es obligatoria.

### 2.8 El deslinde: lo que este mito NO puede mostrar

Dos mitos de la misma comunidad pueden compartir un personaje, **jamás una escena**. Los ciclos están marcados en el plan editorial: `deslinde_ciclo_inundacion` (**cuatro** mitos cuentan la misma crecida — Tequendama, Chibchacum, Cuchavira y Huitaca, que «no toca el agua en absoluto»; la vara de oro y las peñas son **exclusivas** del Tequendama), `deslinde_ciclo_guatavita`, `deslinde_ciclo_hunza`, `deslinde_ciclo_linderos`, `deslinde_ciclo_bermejo` y `deslinde_goranchacha`.

El deslinde no es sólo repartir escenas: es **qué no existe en este mundo**. Huitaca lo declara en el plan (*«Ni una gota de agua en este video»*) y lo repite en `_notas` del guion. **No bastó.** Dos fallos medidos: en el carril de video, `c16` metió una laguna al fondo; en stop-motion, la plaza apareció con una laguna al fondo. La conclusión del doc es literal: *«El deslinde del mito hay que meterlo en los invariantes.»*

El arreglo quedó en `huitaca/planos/_comun.json` como **ítems 6 y 7 de un array de 7 invariantes**, y es el patrón a copiar — uno prohibitivo y uno afirmativo, porque prohibir sin dar el reemplazo deja al modelo eligiendo:

```json
"NI UNA GOTA DE AGUA en ningún plano de este mito: no hay laguna, ni río, ni lago, ni charco, ni mar en el horizonte, ni reflejo de agua. El altiplano está seco.",
"Los cerros del fondo son tierra y paja secas, nunca agua ni nieve."
```

Con eso puesto, el rediseño pasó su compuerta G0 a la primera en los cuatro decorados de lookdev.

### 2.9 Lo que tiene que estar verde antes de gastar el primer crédito

1. Keyframes contados a mano en el directorio (el semáforo de `mitos:estado` miente con nombres `cNN`), tríptico completo.
2. Canon leído de `myths.mito` con el slug correcto y las variantes de la DB revisadas.
3. Guion: 9 bloques (10 si el mito lo pide), 17-19 palabras, `window` = bloque − `voice_offset`, reglas duras, deslinde en `_notas`.
4. **`"aprobado": "<fecha> por usuario"` en el JSON, commiteado.**
5. Mapeo `bN → c(2N−1), c(2N)` completo, con los reusos declarados y sin un bloque sin imagen.
6. `lint-spec.mjs` en 0 rojos (o el checklist a mano si el mito no tiene spec).
7. El deslinde copiado en los invariantes que viajan con **cada** prompt de imagen.
8. Recortes 9:16 hechos y contados: N archivos ↔ N URLs, subidos con `subir-keyframes.mjs`, todos HTTP 200, antes de `media_confirm`.
9. `validate-plan.mjs --plan … --suggest` sin errores, y **margen ≥ 0,5 s** en cada ventana (§5.2: el validador no descuenta el `voice_offset` que el ensamblador sí aplica).

---

## 3. Producir en Higgsfield

Es la única fase que cuesta dinero. Todo lo demás (guion, voces, lechos, plan, título, ensamblaje) cuesta 0 créditos. Por eso el orden no se negocia: **nada se encola hasta que el guion está aprobado, los keyframes existen, los prompts están escritos y el plan valida sin errores.** Los precios y el presupuesto están en §7.

### 3.1 Los modelos: cuál se usa, cuál no

| Modelo | `model` | Papel |
|---|---|---|
| **Seedance 2.5** | `seedance_2_5` | **Estándar del carril desde el 9-sep-2026.** 1080p, `omni_reference`, 5 s, sin audio. |
| **Kling 3.0** | `kling3_0` | Alternativa barata (`pro`, `sound:"off"`). Factura **lineal a 1,75 cr/s**. |
| **Gemini Omni Flash 1.1** | `gemini_omni_flash_1_1` | **Descartado por el usuario** («no me gusta», 11-sep). |

⚠ Verificado a medias, y en tres sitios distintos. **Kling**: `models_explore` del 12-sep, anotado en `stopmotion-v2-rediseno.md` §0 — modos `std|pro|4k`, 3-15 s, `start_image` y `end_image`, `sound on|off`. **Seedance**: `models_explore action:"get"` del 16-sep, anotado en `pipeline-v4-mcp.md` §0b — `medias.roles = [start_image, end_image, image_references, video_references, audio_references]` y `duration` **4-30 s**, no sólo 5 ⚠ *(no re-consultado al escribir esta línea)*. **Gemini**: sigue sin registro en el repo. **Antes de afirmar que un modelo no puede algo, `models_explore`.** Consecuencia ya aplicada: donde un doc dijera que «Kling es el ÚNICO que acepta fotograma inicial Y final» está desactualizado — `channel-dna.json .video.alternativas.kling3_0` lleva desde el 16-sep su propio desmentido. **Ninguna tanda de video del canal ha usado `end_image`** (ni un `movimiento-*.json` ni un `jobs.json` lo nombra): es capacidad disponible y sin probar, no un diferenciador de Kling. Y ojo: `gemini_omni` ≠ `gemini_omni_flash_1_1` — el primero es 720p máximo y no acepta `start_image`.

La razón de Seedance no es el precio, es el desperdicio: acierta a la primera casi siempre, y un clip rehecho cuesta lo mismo que uno nuevo.

| Tanda | Modelo | Clips | A la primera | Regeneraciones reales |
|---|---|---|---|---|
| `la-aparicion-del-hombre/clips-v1` | Kling 3.0 pro | 18 | 16/18 (89 %) | `c09`, `c17` |
| `la-aparicion-del-hombre/clips-v1-seedance` | Seedance 2.5 | 18 | 17/18 (94 %) | `c15` |
| `bochica/clips-v5` | Seedance 2.5 | 19 | **19/19** | ninguna |
| `bachue/clips-v4` | Gemini Omni Flash 1.1 | 18 | 13/18 (72 %) | 5 — **tanda rechazada** |
| `bachue/clips-v5-seedance` | Seedance 2.5 | 18 | **18/18** | ninguna |
| `el-dorado/clips-v1` | Seedance 2.5 | 17 | **17/17** | ninguna |
| `cierre/clips-v1` | Seedance 2.5 | 2 vigentes | 2/2 con el candado | 1 (`c01` descartado) |

*(Tasas verificadas comparando el `job_id` del clip vigente contra el de su `replaced`; contar el array `replaced` sobreestima, §3.7.)*

Los dos que Kling falló (`c09`, el personaje se endereza y mira a cámara; `c17`, las mantas se abren como alas) salieron bien a la primera con Seedance, con el mismo keyframe y el mismo beat. **Kling se usa cuando el presupuesto no da**: su carácter es más contenido —cámaras más tímidas— y pide un candado extra en los planos de un personaje solo en acción (*«stays bent over … eyes fixed on \<objeto\>, head never turning toward the camera»*). A cambio, **Kling aceptó 17 jobs a la vez sin un solo 429**: el tope de concurrencia es un problema de Seedance y Gemini, no del carril barato.

**Gemini** acumuló tres defectos medidos, todos anotados en `bachue/clips-v4/jobs.json`: deriva de plano (3 de 18 cambian escenario u hora a mitad de toma), desintegración de materia (la niebla en bolas de algodón) y **una salida en horizontal, 1920×1080, con `aspect_ratio:"9:16"` pedido**. La mitad de precio no compensa.

### 3.2 Preflight: precio y saldo, siempre en este orden

1. **Precio exacto de la configuración que vas a mandar.** `get_cost` **no es una herramienta**: es un booleano dentro de los `params` de `generate_video`, y devuelve el costo sin encolar nada. **El esquema de `generate_video_batch` lo prohíbe explícitamente** («Cost preflight is not supported inside a batch submission»), así que el preflight se hace con una llamada suelta que replica los parámetros del lote.

   ```jsonc
   { "params": { "model": "seedance_2_5", "mode": "t2v", "resolution": "1080p",
                 "duration": 5, "generate_audio": false, "bitrate_mode": "high",
                 "aspect_ratio": "9:16", "prompt": "preflight", "get_cost": true } }
   // → 45 créditos (verificado con get_cost el 16-sep-2026)
   ```

2. **Saldo.** `balance` → `{"credits": …, "subscription_plan_type": …}`. Regla: no se arranca sin **los N clips más 3 regeneraciones** (§7).

Cuando el presupuesto es exacto, **el piloto deja de ser opcional y se pilotan los planos difíciles, no los fáciles**. En El Dorado se enviaron primero los tres planos del cuerpo cubierto de polvo de oro (135 cr) para descubrir un bloqueo de moderación barato en vez de caro: pasaron 3/3. En Bochica los pilotos fueron `c12` y `c14`.

### 3.3 Subir los keyframes (0 cr)

**a) Pedir las URLs presignadas.** `media_upload` con `files: [{filename, content_type:"image/jpeg"}, …]` en el orden exacto de los archivos. **Máximo 20 archivos por llamada** (y 20 ids por `media_confirm`): con 18-19 keyframes cabe justo; con más hay que partir en dos llamadas y concatenar `uploads[]` **en orden**. La respuesta trae `media_id` y `upload_url` **y no trae `filename`: el único vínculo entre archivo y URL es la posición del array.** ⚠ Sin verificar: la caducidad de 24 h del `upload_url` y el campo `url` de CDN no están en el esquema; el script sólo consume `upload_url`, `media_id` y `content_type`.

**b) Guardar esa respuesta cruda y subir con el script, nunca con un bucle de shell.**

```bash
M=<mito>; D=content/videos/muiscas/videos/$M
# guardar la respuesta de media_upload tal cual en $D/kf-9x16/uploads.json
node scripts/videos/subir-keyframes.mjs --uploads $D/kf-9x16/uploads.json --dir $D/kf-9x16
```

`subir-keyframes.mjs` lee los archivos de `--dir` ordenados por nombre, exige que su número coincida con el de URLs (si no, **no sube nada**), empareja por índice explícito en node, hace el PUT y **aborta si alguno no devuelve HTTP 200**. Escribe `kf-9x16/higgsfield-media.json` e imprime el array de `media_id`.

**Por qué existe:** el bucle de subida a mano **falló dos veces** —`c18` del video 1 y los 19 keyframes del video 2, todos desplazados un puesto (detectado contando 18 códigos 200 + 1 vacío)— porque los arrays de zsh son 1-indexados y `uploads[]` no trae `filename`, así que un `FILES[0]` vacío corre el mapeo entero sin avisar. Una **tercera** trampa de zsh, distinta, `set -- $var` (que no separa por espacios), rompió un bucle de **descarga** y es la que produjo las 24 reimportaciones de El Dorado. **De los cuatro videos, sólo El Dorado usó el script.**

Aviso no documentado: el script cuenta **todo** `.jpg/.jpeg/.png` de `--dir`. Un archivo suelto en `kf-9x16/` (una placa, un descarte) rompe la igualdad N archivos = N URLs y aborta sin subir nada. Es el comportamiento correcto.

**c) Confirmar.** `media_confirm` `{type:"image", media_ids:[…]}`, todos de una vez y sólo si todos los PUT dieron 200. Confirmar un lote incompleto es confirmar un mapeo corrido.

**Los `media_id` expiran.** Para regenerar un clip semanas después hay que volver a subir el keyframe; por eso el mapa se commitea. ⚠ Sin verificar: si los `media_id` de septiembre siguen vivos. Desorden a unificar: `higgsfield-media.json` existe en dos formas — la del script (`{mapa:{"c01.jpg":{media_id,status,bytes}}}`, sólo El Dorado) y la escrita a mano (`{medias:[{clip,filename,media_id,put_http}]}`, los otros tres).

### 3.4 La llamada que encola los clips

Un `generate_video_batch` admite **1-12 requests**; cada uno lleva un `index` estable (el número de escena) y sus `params`:

```jsonc
{ "requests": [
  { "index": 1,
    "params": {
      "model": "seedance_2_5",
      "mode": "omni_reference",         // OBLIGATORIO con start_image (el default es t2v)
      "resolution": "1080p",            // el default es 720p
      "duration": 5,
      "aspect_ratio": "9:16",
      "generate_audio": false,          // el default es TRUE
      "bitrate_mode": "high",           // mismo precio que standard, más bitrate
      "prompt": "<texto de movimiento-vN.json#c01>",
      "medias": [ { "value": "<media_id del keyframe c01>", "role": "start_image" } ],
      "declined_preset_id": "24bae836-2c4a-48e0-89b6-49fcc0b21612"
    } }
  // … hasta 12 por llamada
] }
```

Campos que cuestan dinero si se equivocan:

- **`mode:"omni_reference"`** es lo que hace que Seedance mire la imagen. Con `t2v` el `start_image` se ignora.
- **`generate_audio:false`** y **`resolution:"1080p"`** van contra el default del modelo.
- **`prompt`**: el texto del `movimiento-vN.json` del mito, byte a byte. Los prompts Seedance del carril miden **1.283-1.897 caracteres, media 1.622** (8 párrafos: estilo "on twos" + `@Image 1` como candado · beats `[0-2s][2-4s][4-5s]` · una cámara con endpoint y paralaje · invariantes físicos · materia e identidad · NOT-list). Los de Kling, **677-818**, y ese rango ya es el prompt completo (`estilo_prefijo` + cuerpo + `invariantes_sufijo` concatenados dentro del campo). Una ola de 8 lleva unos **13 KB** de prompt (15,2 KB en el peor caso).
  - **El candado de toma continua son dos cadenas en dos sitios distintos**, no una frase: `"The whole clip is ONE continuous take from a single camera setup"` **en la línea de cámara**, y `"no cuts, no close-up inserts, no second shot"` **en la NOT-list**. Seedance es multi-shot por diseño y un endpoint de cámara ambicioso («ending with the hands centered») lo convierte en un corte. Ese candado desde el primer envío es lo que dio 19/19 en Bochica.
  - **`@Image 1` sí funciona por MCP.** `pipeline-v4-mcp.md` §2.5 dice que es sintaxis del editor web: es falso para Seedance — los 54 prompts de los videos 2, 3 y 4 lo usan y dieron 19/19, 18/18 y 17/17. La advertencia sólo vale para el bloque de Kling donde está escrita.
  - **Antes de escribir prompts nuevos, mirar si el mito ya tiene un `movimiento-vN` auditado**: Bochica derivó los 19 del v4 de agosto añadiendo sólo el candado, en minutos, sin un fallo.
  - **El archivo de movimiento refleja lo enviado, no la intención.** Si se redacta un prompt al vuelo (pasó en `c15`-`c17` de Bochica), se guarda el texto enviado en `prompt` y el auditado al lado con el motivo (`desvio`, `prompt_auditado_v4`).
- **`declined_preset_id`**: sin esto el recomendador **intercepta el request y no encola nada** (`submission_failed … Preset "<nombre>" was recommended`). Hay que declinar **el id exacto que devuelva ese request**: el recomendador elige por escena. Vistos en el carril: `24bae836-2c4a-48e0-89b6-49fcc0b21612` ("IN THE DARK", **109 de los 110 jobs registrados**), `f1821f84-945b-4cd1-9085-1f479db0028e` ("DROWN IN MUSIC", 1 job, `bochica/c07`) y `5a77643c-b6cc-4efd-bdc6-ab8ff48dfa82` ("3D RENDER", documentado, sin uso). Táctica: mandar el de IN THE DARK y reenviar con el que conteste si contesta otro. ⚠ Sin verificar: existe `presets_show`, que podría listar ids por adelantado; no se llamó.
- **`use_unlim`**: parámetro nuevo respecto a las corridas de septiembre. Si la cuenta tuviera saldo ilimitado que cubra el modelo, el MCP **no encola y devuelve `unlim_choice`** para que el usuario decida quién paga. Hoy `unlim` no está disponible, así que no debería preguntar; si preguntara, es decisión del usuario. ⚠ Sin verificar en un envío real.
- **Si una llamada se corta por timeout, el resultado del envío es desconocido: NO reenviar automáticamente.** Primero averiguar si el job existe (`show_generation_by_ids` con los ids devueltos). Reenviar a ciegas es duplicar el gasto.

### 3.5 Concurrencia, el 429 y los tiempos de pared

El tope de trabajos en vuelo **no es estable ni está documentado por la plataforma**, y los docs del repo dan cuatro cifras distintas (12, ~10, 7-8, «de a 9», «de a 5»). Lo medido en los `jobs.json`:

- Bachué/Seedance: ola de 9 → **8 encolados**, `c05` rebotó.
- Bochica: ola de 9 → **7 encolados**, `c06` y `c10` rebotaron (y `c07` fue interceptada por un preset).
- La aparición/Seedance: 12 enviados → `c15`-`c18` rebotaron los cuatro.

**El `429 rate_limit_reached` rebota request a request, no el lote**: de una llamada de 9 pueden entrar 8 y rebotar uno. Se reenvía sólo el rebotado, tal cual. Un 429 es normal, no un error de operación. ⚠ Sin verificar: que un 429 o una intercepción por preset no cobren créditos (se infiere de que «no encola nada»; no se contrastó contra `transactions`).

**Regla operativa (decisión mía a partir de esos tres lotes): mantener ~8 trabajos Seedance en vuelo y reponer a medida que terminan.** Con Kling el tope no muerde.

Sondeo: `jobs_wait` acepta **hasta 12 jobs** por llamada y hace long-poll de **máximo 15 s**; con `all_terminal:false`, esperar el `poll_after_seconds` indicado. Cuando todo el conjunto está terminal, **un solo** `show_generation_by_ids` (hasta 60 jobs) si se quiere galería — nunca `job_display` por clip.

Tiempos de pared, de los sellos `submitted`/`completed`:

| Tanda | Clips | Render por ola | Pared de generación |
|---|---|---|---|
| Bochica (Seedance 1080p) | 19 | 2,9-4,1 min | **9,5 min** (17 clips con sellos; los 2 pilotos se lanzaron antes y no quedaron anotados) |
| Bachué (Seedance 1080p) | 18 | 3,2-5,9 min | **9,2 min** |
| La aparición (Seedance 1080p) | 18 | — | **40,0 min** (incluye 4 rebotes por 429 y 1 regeneración) |
| Bachué (Gemini 1080p) | 18 | — | **14,3 min** |

*(Los sellos son manuales y por lote: dan bien el total, no el render de un clip individual. En la tanda de Gemini, 8 de 18 clips tienen `completed` idéntico a `submitted`: artefacto de anotación. Y los sellos de la tanda Kling están corruptos —6 clips con `completed` anterior a `submitted`, `c02` sin sellos—: **nadie debería citar tiempos de pared de ese archivo**.)*

Conclusión: **con los prompts escritos y los keyframes subidos, la generación de un video entero son 10-15 minutos de pared, no una hora.** Lo que tarda es todo lo demás.

### 3.6 Registrar la tanda: `jobs.json`

De la respuesta de `jobs_wait` se escribe `$D/clips-vN/jobs.json`, un objeto por clip. Es el único registro de qué se pidió:

```jsonc
{ "c05": {
    "job_id": "…", "url": "https://…/hf_20260912_….mp4",
    "model": "seedance_2_5", "mode": "omni_reference", "resolution": "1080p",
    "generate_audio": false, "bitrate_mode": "high",
    "duration": 5, "aspect_ratio": "9:16", "cost_cr": 45,
    "media_id": "…", "prompt_ref": "movimiento-v5-seedance.json#c05",
    "declined_preset_id": "24bae836-2c4a-48e0-89b6-49fcc0b21612",
    "submitted": "2026-09-12T01:18:49.119Z", "completed": "2026-09-12T01:24:45.066Z",
    "nota": "429 en el 1.er envío; se reenvía"
} }
```

`jobs.json` guarda **sólo el job vigente**, así que su suma subestima el gasto cuando hubo regeneraciones: la tanda de Gemini suma 405 cr ahí y costó 517,5. **El gasto real se lee del `import-map.json`** (vigentes + `replaced` con `job_id` distinto).

### 3.7 Importar y verificar (0 cr)

```bash
node scripts/videos/import-mcp-clips.mjs --plan $D/plan-vN.json --jobs $D/clips-vN/jobs.json          # dry-run, siempre primero
node scripts/videos/import-mcp-clips.mjs --plan $D/plan-vN.json --jobs $D/clips-vN/jobs.json --apply
```

Aborta si el `jobs.json` nombra un clip que no está en el plan; baja cada URL a la ruta `clip` del bloque; **`ffprobe`a cada archivo y avisa si no es `plan.width × plan.height` (1080×1920 por defecto) o si la duración se aleja más de 0,25 s de la del plan**; escribe `clips-vN/import-map.json` con resolución, códec, tamaño y costo, moviendo la entrada anterior a `replaced`. Sale con código 1 con cualquier aviso. Acepta mapas parciales, así que sirve para reimportar un solo clip regenerado. *(No compara fps aunque lo lea: el guardián es de resolución y duración.)*

**Ese guardián cazó el clip horizontal de Gemini: no lo vio el ojo.** `bachue/clips-v4/import-map.json`, `replaced` de `c05`: `"probe": {"width":1920,"height":1080}` con `aspect_ratio:"9:16"` pedido.

Lo que llega, medido en los cuatro `import-map.json`: **Seedance** HEVC 10-bit 1080×1920 24 fps, 5,041667 s, **9,2-34,1 MB**; **Kling** h264 1080×1920 5,041667 s, **7,5-16,3 MB**; **Gemini** h264 5,013 s, 5,1-20,0 MB. El ensamblador convierte a h264 8-bit sin problema.

**Trampa contable:** el `replaced[]` registra **reimportaciones**, no regeneraciones. El Dorado muestra 13 clips con `replaced` y 1.080 cr "reemplazados" que nunca se gastaron: todas comparten el `job_id` del vigente (son las descargas repetidas que causó el bug de `set -- $var`). **Para saber si hubo regeneración, comparar `job_id`.**

### 3.8 Cuando un clip sale mal

1. **Un fallo: se regenera el mismo par** — mismo `media_id`, prompt corregido con el candado que faltaba (toma continua, plate fijo, cabeza que no gira, oro mate). Se manda como `generate_video_batch` de un request, se anota en un `jobs.json` parcial y se reimporta con `--apply`.
2. **Dos fallos en el mismo par: no se insiste con el prompt, se rehace el par.** Si dos intentos con prompts distintos sobre el mismo keyframe no dan un clip usable, el problema es la imagen (composición imposible, encuadre que invita a un corte) y la solución está en el carril de imágenes. ⚠ **Norma de presupuesto, no hallazgo medido**: en todo el historial ningún clip necesitó un tercer intento.
3. **Rechazo por moderación**: no insistir — el filtro reacciona a la **imagen**. Se anota, se sigue con el resto de la tanda y se re-escena el keyframe con aprobación del usuario.
4. **Conservar el rechazado.** Las URLs de los jobs descartados son lo único que queda de ellos: viven en el `replaced` del `import-map`. La mesa de montaje del 16-sep demostró que un descarte es inventario (§5.9).

### 3.9 Chequeo de 10 minutos antes de encolar

1. `balance` ≥ clips × precio + 3 regeneraciones (§7).
2. `generate_video` con `get_cost:true` replicando **los parámetros exactos** del lote.
3. `higgsfield-media.json` recién escrito por `subir-keyframes.mjs`, N archivos = N media_id, todos 200, `media_confirm` respondido.
4. `movimiento-vN.json` con N prompts, el candado de toma continua en todos (en sus dos mitades), y `modelo` con los parámetros que se van a mandar. *(Aviso: `la-aparicion-del-hombre/movimiento-v1-seedance.json` miente en ese campo — declara la vía WEB Unlimited; la tanda se hizo por MCP y costó 855 cr.)*
5. `node scripts/videos/validate-plan.mjs --plan $D/plan-vN.json --secos` sin errores.
6. Piloto: 1 clip si sobra saldo, los 2-3 planos de riesgo si el saldo es justo.
7. Olas de ~8. `jobs_wait` en grupos ≤ 12. `jobs.json` escrito en el mismo turno, no después.

---

## 4. El sonido: voces, lechos y mezcla

El canal tiene **una sola identidad sonora, y es la del sitio** (ley 9): la voz que narra los mitos en mitosdecolombia.com, los mismos lechos de esas narraciones y la misma receta del reproductor web.

| Capa | De dónde sale | Herramienta | Coste |
|---|---|---|---|
| Voz | ElevenLabs, `alejandro_narracion` (clon profesional de la voz del usuario) | `scripts/videos/generate-voice-el.mjs` | caracteres de la cuota (664-922 por video) |
| Lecho | tabla `narration_beds` (Postgres) + WAV en Vercel Blob | `scripts/videos/build-lecho.mjs` | 0 (ya generados) |
| Mezcla | ffmpeg local | `assemble-video.mjs`, `mix: "narracion"` | 0 |
| SFX | `content/videos/muiscas/audio/sfx/` (4 piezas de 10,0078 s) | campo `sfx` del plan | 0 — **hoy no se usan** |
| Cierre | voz y clip ya producidos | bloque del plan | 0 (su generación costó 135 cr una vez, §7) |

**Matiz importante:** `build-lecho.mjs` sí importa constantes de `src/lib/narration.js` (`BED_CROSSFADE_S`, `BED_FADE_IN_S`, `BED_FADE_OUT_S`, `bedCountForDuration`, `bedSegmentLength`), pero **`assemble-video.mjs` no importa nada**: sus `-16` y `-34` son literales de defecto y además se repiten a mano en cada plan. **Un cambio de balance en el sitio no llega al video**; hay que tocar los planes uno a uno.

### 4.1 La voz

```
voice_id      9EHAKExD4lT2G6hPG74L      (alejandro_narracion)
model_id      eleven_multilingual_v2
voice_settings { "stability": 0.35, "similarity_boost": 0.9, "style": 0.3,
                 "use_speaker_boost": true, "speed": 1.05 }
```

Es literalmente `DEFAULT_VOICE` de `src/lib/narration.js:19-36`. Cada guion la copia en su cabecera y el script la manda tal cual. **El guion es la fuente para el video; `narration.js` es la fuente de la verdad.** Si divergen, gana `narration.js`.

Por qué esos números, con el porqué en el propio módulo:

- **`stability: 0.35`** — en ElevenLabs la voz se vuelve *más* variable cuando la estabilidad *baja*. 0,35 deja respirar el relato. No es un error de tecleo.
- **`similarity_boost: 0.9`** — es un clon profesional; la fidelidad al timbre manda sobre la expresividad. Ese criterio es el que mató a `eleven_v3`.
- **`speed: 1.05`** — medido a mano el 8-sep: `multilingual_v2`, `flash_v2_5` y `turbo_v2_5` respetan `speed` (40-47 % de variación de duración entre 0,7 y 1,2); **`eleven_v3` lo ignora** (lo acepta sin error y la duración no cambia).
- **Los ids de voz son por cuenta.** Al cambiar de cuenta el id viejo da `voice_not_found`: `2HsKyIMt2fxFwsry7Nd6` y `bNziytBsHtCSsgcPplG9` **ya no existen**.

**Generar las tomas:**

```bash
node scripts/videos/generate-voice-el.mjs \
  --lines docs/videos/muiscas/mvp-guiones/guion-$M-v4.json \
  --out-dir $D/voces-v4 --format wav
```

Banderas: `--lines`, `--out-dir`, `--format wav|mp3`, `--only 3,7`.

**`--format wav` NO es el valor por defecto: hay que escribirlo.** Sin él pide `mp3_44100_128`. Con él pide `pcm_48000` y envuelve el PCM en WAV con ffmpeg sin recodificar: mono, 48 kHz, `pcm_s16le`, el mismo formato de las narraciones del sitio, así que voz y lecho conviven sin remuestreo. Cada línea se genera con **prosodia continua** (`previous_text` / `next_text`; guardia en el código: con `eleven_v3` no se mandan). La clave se lee de `ELEVENLABS_API_KEY`: **este worktree no tiene `.env`**, así que el script usa el del repo padre, `/Users/alegut/MyApps/Personal/mitos_colombia/.env`. Funciona sin tocar nada, pero conviene saberlo.

**Qué reporta por toma:**

```
[voz-el] voz01 8.68s (habla 7.88s / tope 9.35; 19 palabras → 2.41 pal/s) OK
```

duración del archivo (incluye la cola de silencio) · **habla real** (fin del último silencio con `silencedetect=n=-35dB:d=0.2`; si el último silencio llega al final, el habla acaba donde ese silencio empieza) · **tope** = `window` de la línea · palabras ÷ habla real · `OK` / `SE PASA x,xx s`.

**`SE PASA`** significa que la voz seguiría sonando cuando el plano ya cambió. El script cuenta el fallo y **sale con código 1**. La única respuesta admitida es **reescribir la línea** (mismo sentido, ≤19 palabras) y regenerar sólo esa toma con `--only N`. `atempo` está prohibido (ley 3): acelerar adelgaza el timbre del clon y mata la cadencia de fogón. Si la reescritura cambia el *contenido*, hay que volver a pedir aprobación y anotarla en `aprobado`. Otro caso que se resuelve igual: **~1 de cada 20 tomas sale con timbre raro**; el modelo no es determinista y la segunda suele salir limpia.

**Elenco por línea** (`voice_id` y `voice_settings` por línea, como en `guion-f-duo.json`): es infraestructura del casting de agosto. Hoy no se usa; no borrarla, tampoco reinventarla.

**Las voces descartadas:**

| Cuándo | Voz / modelo | Veredicto |
|---|---|---|
| 19 ago | `seed_audio` de Higgsfield | Descartada: prosodia "mal hablada" en español |
| 20-23 ago | OpenAI TTS `gpt-4o-mini-tts` "ash" (`generate-voice.mjs`) | Superada. **1,7-1,9 pal/s** con dirección de leyenda: lenta, obligaba a bloques largos |
| 20 ago | Casting de 6 másters: Amaf `4kaLaTbziI05Jwh8zWad` y El Faraón `W1hAcdh0RNsPYUA7fkJh` | Ganó el registro **fogón-visual-coloquial**. La ronda 2 (abuelo/tía/dúo) **nunca se cerró** |
| 21 ago (máster) / **31 ago (decisión)** | Alejandro v1 `2HsKyIMt2fxFwsry7Nd6` en `eleven_v3` | **Rechazada por el usuario**: «no se parece a mi voz». En un clon profesional, v3 genera sin fine-tuning y pierde el timbre |
| 21-31 ago | `2HsKyIMt…` y después **`bNziytBsHtCSsgcPplG9`** (st .5 / sim .8 / sp .97), ambos en `eleven_flash_v2_5` | Fue "el modelo definitivo del canal" el 31-ago. Superado el 9-sep. Los dos ids están muertos |
| 22-23 ago | El usuario graba y masteriza su propia voz y con ese máster se entrena el clon nuevo | Origen de la voz vigente. **Ese material vive suelto en `~/Downloads` (4,3 GB) y no está respaldado en el proyecto** |
| 9-sep → hoy | `alejandro_narracion` en `eleven_multilingual_v2` | **Vigente.** Unifica sitio y canal |

`eleven_v3` sigue descartado; no revisitar salvo que ElevenLabs saque fine-tuning de clones profesionales para v3.

**Cuota.** Se paga en caracteres: `guion-bachue-v4.json` 9 líneas / **922**; `guion-la-aparicion-del-hombre-v1.json` 9 / **664**; `guion-cierre-v1.json` 2 / **91** (una sola vez, para siempre). Un video completo cuesta menos de mil caracteres. ⚠ Sin verificar: el plan — `PRODUCCION-END-TO-END.md:495` dice "Pro 610k/mes" y `channel-dna.json` + `pipeline-v3-profesional.md:103` dicen "Creator 300k/mes". Con cualquiera de los dos, un video es 0,15-0,3 % de la cuota mensual y **la cuota nunca es el cuello de botella**. ⚠ Tampoco se verificó el consumo facturado real (los `previous_text`/`next_text` viajan en cada petición).

### 4.2 Los lechos musicales

**Qué son.** Piezas instrumentales de **30,00 s exactos** en bucle sin costura, mundo sonoro muisca/andino precolombino (flautas de caña, ocarina de barro, zampoñas, tambor de cuero, sonajas; **sin instrumentos modernos y sin voces**), normalizadas a −24 LUFS / −1,5 dBTP — medidas, caen entre **−24,8 y −23,5 LUFS** (consulta directa a `narration_beds`, 16-sep), lo que hace variar ±0,7 dB la ganancia que aplica el ensamblador. Se generaron con `POST /v1/music` (`model_id: music_v2`, `generation_mode: "loop"`, `force_instrumental: true`) para las narraciones del sitio.

Viven en dos sitios: la tabla `narration_beds` (slug, título, `characters`, `lufs`, `duration_seconds`, `audio_url`) y el WAV en Vercel Blob. `build-lecho.mjs` consulta la tabla y **descarga los WAV**; necesita `POSTGRES_URL` (o `DATABASE_URL`) pero **no** `BLOB_READ_WRITE_TOKEN`.

**Cuántos hay: 40** (verificado con consulta directa el 16-sep), tras cuatro tandas. Trampa de este worktree: `scripts/mitos/generar-lechos.mjs` aquí sólo llega a la **tercera** tanda (26 prompts, slugs `07`-`32`); la cuarta (`33`-`40`) está en el commit `b784d3c7` de la rama `claude/elevenlabs-myth-narration-8de8a2`, que no está en `main`. **No afecta a la producción de video** (los lechos se leen de la base), sólo a quien quiera `--nuevos N` desde aquí. Los seis primeros (`01`-`06`) entraron por `--ingerir` como WAV ya hechos. ⚠ Sin verificar: de dónde salieron esos seis (la carpeta de ingesta no está en el repo; el título del `03` no aparece en ningún archivo).

Dos trampas de generación ya resueltas: (1) pese al modo `loop`, el modelo mete entrada y salida —una pieza caía de −21 a −68 dB en los últimos 4 s—, así que se piden **45 s y se recortan 30 del centro**; (2) el crossfade evita el chasquido pero no el salto de *intensidad*, así que el script **barre el punto de corte** buscando el escalón mínimo (de 8,8 dB a 0,1 dB).

**Cómo se eligen: por ACTO, a mano.**

```bash
npm run mitos:lechos -- --listar     # catálogo con títulos, duración, LUFS y caracteres
```

`build-lecho.mjs` sabe elegir solo con el motor del sitio (`chooseBedsForStory`), pero **en video no hay que dejarle elegir**. El motivo es aritmético: la narración del sitio pesa sobre 2.000-3.000 caracteres y el guion de un video son ~110 palabras; con tan poco texto **una sola palabra decide**. Medido en `la-aparicion-del-hombre`: «agua» y «recorrían» trajeron *Río que baja* y *Canoa en el río* a un mito de barro y oscuridad donde no hay ríos. El fallo no da señal: elige un lecho válido, sólo que equivocado.

La cadena de desempate real tiene **cuatro** escalones: (1) carácter dominante del tramo → (2) el lecho que lleva ese carácter **más arriba en sus etiquetas** → (3) el menos usado → (4) **FNV-1a de `${slug}:${índice}`**, que es lo que evita que los siete mitos de agua reciban los mismos tres lechos. La elección automática es determinista **por mito**, no por catálogo.

**Regla del carril: tres lechos = tres actos, fijados con `--lecho` en orden, y los relevos alineados con los cambios de acto.**

| Video | Lechos en orden | Por qué |
|---|---|---|
| La aparición del hombre | `24-piedra-que-recuerda` → `18-manos-de-barro` → `04-viento-de-paramo` | relevos en b4 (el barro) y b7 (el aliento) |
| Bachué | `01-flauta-de-niebla` → `09-telar-de-semillas` → `06-laguna-de-iguaque` | niebla → el pueblo y el oficio → la laguna del bookend |
| Bochica | `14-tormenta-en-la-sabana` → `02-tambor-ceremonial` → `11-rio-que-baja` | los tres de la narración de `el-tequendama` en la web, **en orden inverso** |
| Huitaca | `05-ronda-ritual` → `23-vela-de-la-luna` → `16-brasas-de-la-noche` | fiesta → noche → brasas |
| El Dorado | `08-lluvia-sobre-la-piedra` → `15-canoa-en-el-rio` → `13-manantial-que-brota` | los tres de la narración de `el-dorado`, en el mismo orden |

**El comando y la regla de la duración:**

```bash
node scripts/videos/build-lecho.mjs \
  --guion docs/videos/muiscas/mvp-guiones/guion-$M-v4.json \
  --duration 102.42 --slug $M --out $D/lecho-v6.wav \
  --lecho 01-flauta-de-niebla,09-telar-de-semillas,06-laguna-de-iguaque
```

Banderas: `--guion`, `--duration` (segundos), `--slug`, `--out`, `--lecho a,b,c` (fija la lista **en orden**), `--cuantos N` (sólo tiene efecto **sin** `--lecho`), `--dry-run` (imprime elección y tiempos de entrada sin descargar ni renderizar — úsalo siempre antes).

**`--duration` = la duración TOTAL del máster, cierre incluido.** El cierre es un bloque más, no un archivo que se concatena, así que el lecho tiene que llegar al final. Aritmética típica: 18 clips × 5 s + cola 4 s = 94 s; + 8,42 = **102,42**. Si el lecho queda corto, el ensamblador rellena con silencio y el cierre se queda mudo; si queda largo, lo recorta y te comes el fade programado. *(Ejemplo vivo del fallo: `huitaca/plan-v1.json` suma 98,42 s y su lecho se construyó con 98,5 — el `atrim` se come 0,08 s del fade de salida. Marginal, pero ocurrió.)*

Cómo encadena: K tramos de largo `L = (D + (K−1)·X)/K` con `X = 4 s` de `acrossfade`, cada lecho en bucle sólo dentro de su tramo, fade de entrada 2 s y de salida 3 s, y `atrim` exacto. Con D = 102,42 y K = 3 → L = 36,807 s y entradas en 0 / 32,81 / 65,61 s, exactamente lo que dice `lecho-v6.wav.json`. **Sin `--lecho`, K lo decide `bedCountForDuration(D) = round(D/55)` acotado a [2,5]: para 102,42 s daría 2, no 3.** Otra razón para fijarlos.

El WAV sale a nivel de archivo, ~−24 LUFS (medido en `lecho-v6.wav`: −24,3 LUFS, 102,42 s, PCM 48 kHz); el nivel final lo pone el ensamblador. A propósito, `build-lecho.mjs` omite el `volume=−10 dB` que sí aplica la narración del sitio.

Y deja **`<out>.json`, el manifiesto**: slug, duración, K, modo (`forzado`/`por carácter`), tramo, cruce, fades, y por cada lecho su slug, título, `characters`, URL y segundo de entrada. **Ese archivo es el acta sonora de la corrida y va a git. El `.wav` no.**

**Reusar los lechos que ya tiene el mito en la web:**

```sql
SELECT bed_slugs FROM myth_narrations WHERE myth_slug = 'el-dorado';
```

Ese array da la **terna**; **el orden se decide por acto**. En El Dorado coincidió con el de la web; en Bochica se invirtió (web `11→02→14`, video `14→02→11`) porque el video abre con la tormenta y cierra con el río. Los 41 mitos muiscas están narrados desde el 12-sep, así que para cualquier muisca la consulta devuelve algo.

**Ampliar el catálogo** (`--nuevos N` genera los N primeros prompts de `CATALOGO` que no estén en la base, los normaliza y los registra). La música **sí gasta cuota de caracteres** ⚠ (la nota de trabajo dice ~455 por pieza de 45 s; **ese número no aparece en ningún archivo del repo** y no se re-midió). La orden de tanda se decide con datos: la cuarta salió de ver que, repartidos los 126 tramos de los 41 muiscas, `camino` pedía 21 con sólo dos lechos que lo encabezaran. **Al contar cobertura hay que contar la etiqueta PRIMERA**, que es la que gana los desempates — y **`--listar` no lo hace**: cuenta todas las etiquetas, así que dirá que `camino` está cubierto mientras la demanda se concentra.

### 4.3 La mezcla

En la raíz del plan:

```jsonc
"mix": "narracion", "voice_lufs": -16, "music_lufs": -34,
"music_fade_out": 0, "music": "lecho-v6.wav", "voice_offset": 0.5
```

`music_fade_out: 0` **porque el lecho ya trae su fade de 3 s**; ponerle otro encima lo apaga dos veces.

Qué hace `assemble-video.mjs`, en orden:

1. **Voz, toma a toma.** Mide la sonoridad integrada con `ebur128` y aplica una ganancia **estática** `volume=(−16 − LUFS)dB`. Estática y no `loudnorm`: un normalizador dinámico respira con la voz y hace bombear el fondo. Luego `aformat` a 48 kHz estéreo, `adelay` a `inicio_del_bloque + voice_offset`, `apad` a la duración total, y `amix` de todas las voces con **`normalize=0`** (sin eso ffmpeg divide cada entrada entre el número de pistas: con las diez voces de un video serían ~20 dB, y 6 dB en el `amix` final de voz+lecho).
2. **Lecho.** Misma medición, ganancia estática `volume=(−34 − LUFS)dB`.
3. **Suma sin ducking.** `amix` de voz y lecho, `normalize=0`. **No hay `sidechaincompress`.** El −34 sale de `narration.js:64-75`: la voz a −16 y el lecho **18 dB por debajo**, cuando las guías de accesibilidad piden ≥10 dB. Sin ducking no hay bombeo. *(El «21,9 dB de separación habla/pausa medidos en la web» es una observación incidental de un comentario del ensamblador, no el origen del número.)*
4. **Limitador, no normalizador.** `alimiter=limit=0.84` (= −1,5 dBTP), `attack=5`, `release=60`. Sin `loudnorm` final.
5. **Fundido global** de 1 s al final y **AAC 192 kbps**.

El modo alternativo `mix: "canal"` (por defecto si falta el campo) es el histórico: voces sin nivelar, `music_vol` 0,09, SFX, todo el fondo agachado con `sidechaincompress` y `loudnorm I=-16:TP=-1.5:LRA=11`. **No usarlo.**

El ensamblador imprime lo que aplicó, y eso es el registro de la corrida:

```
[assemble] voz bloque 1: -21.4 LUFS → -16 (+5.4 dB)
[assemble] lecho: -24.3 LUFS → -34 (-9.7 dB)
[assemble] mezcla: modo narracion
```

Medido hoy sobre `bachue/voces-v4`: las nueve tomas entraron entre **−17,9 y −21,8 LUFS** → ganancias de **+1,9 a +5,8 dB**; al lecho, **−9,7 dB**. El rango de 4 dB entre tomas es normal en el modelo y es exactamente lo que la ganancia por toma corrige.

**`voice_offset: 0.5`** retrasa **todas** las voces medio segundo respecto al inicio de su bloque: el plano necesita un instante para leerse antes de que entre la palabra. Es también por lo que la ventana de un bloque de 2 clips es 9,5 s y no 10.

**Sonoridad de los másters** — la banda de aceptación y su medición están en §6.5.

> **Registro del 16-sep:** el audio de `v7` es **idéntico** al de `v6` — mismo `voces-v4/`, mismo `lecho-v6.wav`, mismos parámetros (verificado comparando `plan-v6.json`, `plan-v6-base.json` y `plan-v7-seleccion.json` campo a campo: sólo cambian las rutas de clip). Las diferencias de sonoridad, si las hay, son de recodificación.

### 4.4 Los SFX

El ensamblador sigue soportando `sfx` y `sfx_vol` por bloque (bucle con `aloop`, recorte al largo del bloque, fades de 0,4 / 0,5 s, `adelay`, suma al bus de fondo; `sfx_vol` por defecto 0,4).

**En el carril vigente no se usan.** La regla: *el ambiente viene dentro de los lechos*, que ya traen lluvia, río, fuego, insectos o viento grabados dentro del bucle y balanceados a −24 LUFS; un SFX encima duplica el ambiente y ensucia la separación de 18 dB. Verificado: **ningún plan con `mix: "narracion"` lleva un solo campo `sfx`** (los diez revisados). Los que sí lo llevan son los **doce** planes de agosto: `bachue/plan.json`, `plan-flash`, `plan-v3` y los seis `plan-mvp-a…f` (12 bloques cada uno), y `bochica/plan.json`, `plan-flash` (16) y `plan-v4` (20).

Cuándo valdría romperlo: **sólo si el sonido es diegético y protagonista** —se ve la cascada, se ve el fogón— y el lecho no lo trae. Entonces `sfx_vol` 0,2-0,3 (0,4 si el agua es la protagonista), reusando la biblioteca de cuatro piezas de **10,0078 s** (`sfx-laguna`, `sfx-cascada`, `sfx-lluvia`, `sfx-fogon`). **SFX nuevo = autorización del usuario.** Y en `narracion` el bus de ambiente **no se agacha** bajo la voz: lo que pongas se queda a volumen fijo.

Hay además **tres** camas viejas archivadas (`musica-muisca-andina.mp3` 95,01 s, `musica-cama.m4a` 95,06 s, `musica-cama-elevenlabs.mp3` 95,06 s). **No se usan y no se deben usar**: duran 95 s, no la duración del video.

### 4.5 El sonido del cierre de canal

- **Voz:** la misma voz oficial, mismos settings, en `content/videos/muiscas/cierre/guion-cierre-v1.json`. Dos líneas, 91 caracteres: «Hay cientos de mitos como este esperándote.» / «Léelos completos en mitos de colombia punto com.» Sin números que envejezcan.
- **Un solo archivo de voz:** `cierre/voces-v1/voz-cierre.wav`, 8,4167 s, PCM 24 bits. `build-cierre.mjs` monta las dos tomas dentro de él con sus tiempos puestos: la primera en **0,45 s** y la segunda en **4,35 s** — es decir, **0,35 s después del corte** (`CORTE = 4.0`), no «justo en el corte». Por eso el cierre cabe en **un** bloque del plan.
- **Sin lecho propio.** Ésa es la razón de pegarlo como bloque: **el lecho del propio video sigue sonando por encima, así que no hay costura de audio.** Existe además `cierre-canal-v1.mp4`, una versión suelta con lecho propio a −18 dB, **sólo para ver y compartir la pieza**: no es lo que se pega a un video.

**Trampa medida, y no está escrita en ningún doc:** el `voice_offset: 0.5` se aplica *también* a este bloque, pero `voz-cierre.wav` ya trae sus tiempos internos calculados para offset 0. En el máster de Bachué v7: el bloque arranca en **94,00 s** (18×5 + 4, sin traslapes porque `xfade` está prohibido), la voz entra en **94,50**, el habla termina en **101,56** y el fundido global de 1 s empieza en **101,42** — o sea que los últimos **0,14 s** de «…punto com» caen dentro del fundido (nivel medio: −21,9 dB en 101,0-101,5 s frente a −43,0 dB en 101,5-102,0 s). ⚠ Sin verificar si es audible; se midieron niveles, no se escuchó. **Si algún día se alarga la locución del cierre, hay que restar el `voice_offset` a los tiempos internos de `VOZ` en `build-cierre.mjs` o la última palabra se apagará de verdad.**

### 4.6 Qué anotar de sonido en cada corrida

1. **`<mito>/lecho-vN.wav.json`** — el manifiesto. Lo escribe el script; va a git.
2. **La salida de `generate-voice-el.mjs`** — duración, habla real, palabras/s y `OK`/`SE PASA` por toma.
3. **La salida de `assemble-video.mjs`** — las ganancias aplicadas y `mezcla: modo narracion`, más la medición del máster (§6.5).

Y una línea en la ficha del video con: voz (id + modelo + formato), caracteres consumidos, lechos en orden, duración del lecho, integrada / LRA / pico del máster, y porcentaje de habla.

**Checklist de sonido:** `--format wav` (si hay `.mp3` en la carpeta, se generó mal) · cero `SE PASA` · lechos fijados con `--lecho`, elegidos por acto, con su manifiesto · `--duration` = total **con** el cierre · plan con `mix: "narracion"`, `-16`, `-34`, `music_fade_out 0` · bloque del cierre presente con su `voice` · máster dentro de la banda de §6.5 · **escucha completa, con auriculares, hasta el último fotograma**.

---

## 5. Montaje, título y entrega

A partir de aquí todo es local, con ffmpeg y sharp: **cero créditos y cero llamadas a APIs de pago**. El contrato es un único archivo: `plan.json`. Si el plan miente, el ensamblador produce un video plausible y equivocado, que es peor.

### 5.1 El plan.json, campo por campo

Referencia viva: `content/videos/muiscas/videos/bachue/plan-v7-seleccion.json`.

| Campo | Canon | Default del código | Qué hace |
|---|---|---|---|
| `width` / `height` | `1080` / `1920` | 1080 / 1920 | Cada bloque se escala con `force_original_aspect_ratio=increase` + `crop`: una fuente de otra proporción se recorta, no se deforma |
| `fps` | `24` | 24 | Se fuerza por bloque y en la unión |
| `voice_offset` | `0.5` | 0.5 | Aire de respiración; los personajes nunca hablan en pantalla |
| `mix` | `"narracion"` | **`"canal"`** | Olvidarlo cae en el modo histórico **en silencio** |
| `voice_lufs` | `-16` | −16 | Ganancia estática por toma |
| `music_lufs` | `-34` | −34 | 18 dB por debajo de la voz |
| `music_fade_out` | `0` con lecho propio | 4 | El lecho ya trae 3 s de fade |
| `music` | `"lecho-v6.wav"` | null | Ruta relativa al plan |
| `burn_subtitles` / `write_srt` | `false` / `false` | true / true | Ley 10 |
| `title_font` | `"../../../fonts/Asimovian-Regular.ttf"` | null | **Obligatoriamente `.ttf` u `.otf`** |
| `title_font_family` | `"Asimovian"` | "Asimovian" si hay archivo | Se **compara** con la familia que devuelve CoreText; si no coinciden, el ensamblaje aborta (§5.4) |
| `title_size` | `92` | **104** | El canon está en los doce planes con `mix:"narracion"` |
| `title_color` | `"#F5F0E6"` | `#F5F0E6` | Hueso del canal |
| `title_y` | `280` | `round(H*0.2)` = **384** | Canon 280. *(Único plan con otro valor: `bochica/plan-v4.json`, `title_y: 265` y sin `title_size` — es del carril web muerto, no copiarlo)* |

Campos opcionales **que ningún plan del repo usa nunca**: `title_tracking` (−0.03 em), `title_lineheight` (0.96), `title_uppercase` (falso), `title_sub_color` (`#E4DCC8`), `title_sub_font` (`HelveticaNeue-Medium`), `title_sub_size` (28), `subtitle_font`, `subtitle_font_family` (**default `Noto Sans Display`**, no Helvetica). Campos que **ningún plan vivo** usa pero sí los de agosto: `music_vol` (0.09, 13 planes) y `transition_dur` (0.4, 11 planes; **prohibido**, §5.5).

**Campos de bloque** (`blocks[]`): `n` sólo nombra el temporal (`block07.mp4`) y los logs — **el orden del array ES el montaje** · `type` `"motion"` | `"still"` · `clip` (ruta relativa) · `image` + `kenburns` (`in`|`out`|`up`|`down`, default `in`; zoom 10 % en in/out, paneo con zoom fijo 1.08 en up/down) · `duration` (en `motion` **recorta** el clip; en `still`, si falta, `min(max(voz + 0,5 + 0,7, 6), 13)` — **ponlo siempre explícito**) · `voice` (arranca en `inicio + voice_offset`; un bloque sin `voice` es un plano mudo que prolonga la ventana anterior) · `subtitle` (se sigue escribiendo aunque no se queme; troceo de ~7 palabras por cue, resto huérfano <3 palabras fusionado) · `title` / `title_sub` sólo en el bloque 1 (la placa aparece a `inicio + 0,8 s` y se va a `inicio + 5,6 s`, con 0,8 s de alfa a cada lado: **fijo en el código**) · `sfx` / `sfx_vol` (§4.4) · `xfade` **prohibido** · `_tanda`, `_notas`, `_nota` (ignorados por el ensamblador; `_tanda` es del 16-sep y anota de qué modelo salió cada toma).

### 5.2 `validate-plan.mjs` — la puerta antes de gastar CPU

```bash
node scripts/videos/validate-plan.mjs --plan $D/plan-vN.json --suggest   # antes de generar los clips
node scripts/videos/validate-plan.mjs --plan $D/plan-vN.json --secos     # con los clips ya en disco
```

Sale con código 1 si hay errores.

**Errores (✗), ninguno negociable:**

| Comprobación | Umbral |
|---|---|
| Existe cada `clip`, `image`, `voice`, `sfx`, `music` | binario (con `--suggest` se perdonan `clip` e `image`) |
| `--secos`: ni `transition_dur` ni `xfade` | binario (ley 2) |
| `title_font` / `subtitle_font` existen y son `.ttf`/`.otf` | binario — un `woff2` caería a Helvetica en silencio |
| Ventana narrativa ≥ fin del habla + 0,3 s | error si `window < need − 0,05`, con partición sugerida en pares 5/5, 5/6, 6/6, 6/7, 7/7 |

El fin del habla se mide de verdad (`silencedetect=n=-35dB:d=0.2`), y la ventana va **del bloque con voz al siguiente bloque con voz**, no hasta el final de su propio bloque. La línea que no cabe **se reescribe**.

**Avisos (!):** aire muerto (`window − need > 3,5 s`, nunca en la última voz) · música **más de 5 s** más corta que el video · subtítulo de más de 24 palabras.

**Dos defectos del validador que hay que conocer:**

- **`voice_offset` es código muerto.** `const VOICE_OFFSET = plan.voice_offset ?? 0.5;` se declara y **no se usa**: el cálculo es `need = speechEnd + 0.3`. El ensamblador **sí** arranca la voz en `visStart + 0.5`. Es decir, el validador es **0,5 s optimista** respecto del montaje real: una línea que pasa con margen < 0,5 s se corta en el máster. **Exige margen ≥ 0,5 s, o arregla el script.** La cabecera del propio archivo dice lo contrario de lo que hace.
- **El ensamblador no valida ventanas en absoluto.** Su `VOICE_GAP = 0.25` sólo alimenta el recorte automático de `xfade`, que está prohibido. El único guardián del solape de narraciones es el validador.

Calibración: El Tequendama validó con **0 errores y 2 avisos**; el video 1 tenía **8**; Huitaca v1 tenía **0 errores y 6 avisos ignorados**. Más de 2-3 avisos significa que el guion se quedó corto de palabras, y eso se arregla en el texto.

### 5.3 `assemble-video.mjs`

```bash
node scripts/videos/assemble-video.mjs --plan $D/plan-vN.json --out $D/<mito>-final-vN.mp4
```

Con `--keep-temp` sobrevive `<dir del out>/.assemble-tmp/` (bloques sueltos, `video.mp4`, `mixed.mp4`, `subbed.mp4`, PNG de título y cues): es lo primero que hay que mirar cuando algo sale raro.

Las cinco etapas:

1. **Normalizar cada bloque.** `motion`: `scale=1080:1920:force_original_aspect_ratio=increase:flags=lanczos,crop=1080:1920,fps=24,format=yuv420p`, recortado a `duration`, x264 CRF 18 preset medium, **sin audio**. `still`: sobre-escala a 2160×3840, recorta, y **recién entonces** aplica `zoompan` (el orden importa: `zoompan` sobre la imagen a tamaño final produce jitter). Y lleva **`-frames:v <frames>`, que no es decorativo**: `zoompan` con `d=N` emite N fotogramas *por cada* fotograma de entrada, y `-loop 1 -t` ya entrega N; sin el tope, una placa de 4 s salía de **400 s**. Nunca se notó mientras la placa iba al final; desde que hay un bloque detrás —el cierre— la placa se comía el video entero.
2. **Unir.** Cada bloque por `fps=24,settb=AVTB` y `concat`. Fundido global de entrada 0,6 s y de salida 0,8 s.
3. **Mezclar el audio** (§4.3).
4. **Sobreimpresos.** PNG con alfa superpuestos con `overlay` centrado; el título a `y = title_y`, los cues (cuando se queman) a `y = H-h-150`. Reencoda a CRF 18 y copia el audio.
5. **Copiar y medir.** `[assemble] listo: <ruta> (102.46s, 20 bloques)`. **Ese número es la verificación:** si no cuadra con la suma de `duration`, algo se recortó.

Produce **sólo el máster** (y el `.srt` hermano si `write_srt` fuera `true`). El social y el preview son dos comandos aparte (§5.8).

**Cuánto tarda.** Hay dos mediciones en el repo, ambas del video 1 (94 s, **19 bloques: 18 de movimiento + 1 placa `still`**, contados en `la-aparicion-del-hombre/plan-v1.json`), ninguna re-medida hoy ⚠: **~2,5 min de pared por corrida completa** incluyendo social y preview (fila 10 de la retrospectiva, seis corridas), y **1:32 por ensamblaje**, de los cuales **casi todo se iba en el bloque `still`** — `zoompan` sobre la imagen a 2× costaba 60-90 s (fricción F5). Esa medición es **anterior** al tope `-frames:v`; nadie ha vuelto a medir el reparto después del arreglo.

### 5.4 El título en Asimovian, y la trampa que costó un video entero

El título va en **Asimovian** (`content/videos/fonts/Asimovian-Regular.ttf`, 66.136 bytes) ⚠ *(la licencia OFL es dato externo: no hay `LICENSE` ni `OFL.txt` junto al archivo; si va a documentarse, métase el `OFL.txt` al lado)*, que es la `--font-display` del sitio. La composición replica el hero: kicker arriba en versalitas con tracking +0,2 em, título debajo en caja de frase con tracking −0,03 em e interlineado 0,96, ambos con sombra suave.

**La trampa.** `sharp` acepta `{ text: { fontfile: "…" } }` y devuelve un PNG perfectamente válido… en Helvetica. El libvips que trae `sharp` en macOS usa Pango **sólo con el backend CoreText**: no hay fontconfig, así que **se ignora cualquier `fontfile` —sea `.woff2` o `.ttf`— y toda fuente no instalada en el sistema cae a Helvetica en silencio**. Sin error, sin aviso. Se verificó de dos maneras: cuatro renders con distintos `.woff2` salieron byte-idénticos, y el título "Asimovian" del primer máster resultó ser Helvetica. **Costó un video entero y dos reensamblajes** (el forense de Bochica v4: r1 con título fino → r2 con el título caído → r3 sin nada) y 45 minutos de diagnóstico: es la **segunda** fila más cara de las que no gastan créditos, sólo por detrás de los 55 min de escribir los 36 prompts de movimiento.

**La solución**: `scripts/videos/render-text.swift`, 84 líneas que cargan la fuente **por archivo** (`CTFontManagerRegisterFontsForURL` + `CTFontManagerCreateFontDescriptorsFromURL`), no por nombre. Sin búsqueda por nombre no hay fallback. Devuelve por stdout la familia y el nombre PostScript **reales**:

```
$ ./scripts/videos/.bin/render-text --text "Bachué" --font content/videos/fonts/Asimovian-Regular.ttf \
    --size 92 --width 900 --tracking -0.03 --lineheight 0.96 --color "#F5F0E6" --out /tmp/t.png
{"family":"Asimovian","postscript":"Asimovian-Regular","width":900,"height":161,"lines":1}
```

El ensamblador compila el `.swift` a `scripts/videos/.bin/render-text` con `swiftc -O` la primera vez (y recompila si el fuente es más nuevo), y después **compara**:

```js
if (titleFont.file && info.family !== titleFont.family) {
  throw new Error(`La fuente del título no cargó: pedí "${titleFont.family}" y CoreText devolvió "${info.family}" (${info.postscript})`);
}
```

Si ves ese error, el ensamblaje se detuvo antes de producir un máster equivocado. Y cada corrida deja la prueba positiva en el log: `[assemble] título en Asimovian (Asimovian-Regular), 1 línea(s)`. **Esa línea se lee en cada corrida.**

**Agujero que sigue abierto:** la guardia cubre sólo el título. Los PNG de subtítulo se rasterizan con `sharp`, así que un `subtitle_font` propio caería a Helvetica igual — el validador comprueba que el archivo exista y sea `.ttf`, pero nadie comprueba qué fuente salió. Hoy no muerde porque los subtítulos no se queman.

### 5.5 Subtítulos y cortes

**No se queman** y tampoco se escribe el `.srt` (ley 10): el canal es vertical y la franja inferior se la comen las interfaces de las redes; el texto quemado no se puede desactivar ni traducir; y el sitio ya tiene el relato escrito, que es a donde invita el cierre. Si algún día se quiere el `.srt` como pista aparte, basta `write_srt: true` y reensamblar.

**Cortes secos siempre** (ley 2). El código de `xfade` sigue en el ensamblador, con su lógica de recorte según el aire de la narración previa; no se usa, y se deja porque es la única forma de reconstruir los másters de agosto.

### 5.6 El cierre de canal como bloque

```json
{ "n": 20, "type": "motion", "clip": "../../cierre/cierre-canal-v1-mudo.mp4",
  "duration": 8.42, "voice": "../../cierre/voces-v1/voz-cierre.wav" }
```

El clip vive en `content/videos/muiscas/cierre/` —**hermano de `videos/`, no dentro**— es mudo, reusable, 1080×1920, 24 fps, **8,416667 s = 202 fotogramas** (en los planes se escribe `8.42`). El porqué de pegarlo como bloque y la aritmética del lecho están en §4.5.

Consecuencia operativa: **el cierre es el bloque que destapó el bug de `zoompan`** (§5.3). Si alguna vez un cierre "desaparece", mira el bloque `still` inmediatamente anterior.

La pantalla del celular que se ve en el cierre es **el sitio real compuesto en post**, no lo que pinta el modelo. Si cambia el diseño del sitio se recaptura con `capturar-sitio.mjs`, se rearma con `build-cierre.mjs` y se reensambla, sin gastar un crédito.

### 5.7 `setsar=1` y los píxeles 136:135

Esta es la trampa que impide concatenar y que no da un error legible. Reproducida:

```bash
# fuente del carril stop-motion: 1088x1920, no 1080x1920
ffmpeg -loop 1 -t 1 -i maestra-huitaca.jpg \
  -vf "scale=3240:5760:flags=lanczos,zoompan=…:s=1080x1920:fps=24" -frames:v 24 out.mp4
# → width=1080 height=1920 sample_aspect_ratio=136:135 display_aspect_ratio=17:30
```

La imagen medía 1088 px. Al forzar `scale=3240:5760`, el filtro conserva el aspecto de pantalla **ajustando el SAR** en vez de deformar (`1088/1080 = 136/135`), y ese SAR viaja intacto hasta el clip final, que **dice** medir 1080×1920 pero tiene píxeles no cuadrados. `concat` se niega a juntarlo con un clip de SAR 1:1.

**La regla:** cualquier cadena que termine en un clip destinado al concat lleva `setsar=1` al final. Los seis scripts del carril stop-motion lo hacen; **`assemble-video.mjs` no lo hace en ninguna parte.** Hoy no muerde porque `motion` termina en `crop` (que hereda el SAR de entradas 1:1) y `still` en `zoompan` sobre una fuente ya recortada — verificado con la placa `laguna_iguaque_A.crop-9x16.jpg`: SAR limpio. ⚠ El riesgo está razonado desde el código, no observado en el ensamblador. Comprobación barata antes de ensamblar:

```bash
for f in $D/clips-*/c*.mp4 $D/../../cierre/cierre-canal-v1-mudo.mp4; do
  printf '%s ' "$f"
  ffprobe -v error -select_streams v:0 \
    -show_entries stream=width,height,sample_aspect_ratio,r_frame_rate,nb_frames \
    -show_entries format=duration -of csv=p=0 "$f"
done
```

Todo lo que no diga `1080,1920` con SAR **`1:1` o `N/A`** (un SAR no declarado es cuadrado: así salen el cierre y la placa) y `24/1` se normaliza antes. El bucle debe incluir a mano el cierre y la placa, que viven fuera de `$D/clips-*`.

### 5.8 Las tres entregas

```bash
D=content/videos/muiscas/videos/bachue
M=$D/bachue-final-v7-seleccion

# 1. MÁSTER — ya lo produjo assemble-video.mjs: $M.mp4 (h264 CRF 18 + AAC 192k)
# 2. SOCIAL
ffmpeg -i $M.mp4 -c:v libx264 -b:v 8M -maxrate 8M -bufsize 16M \
  -pix_fmt yuv420p -c:a aac -b:a 192k -movflags +faststart $M-social.mp4
# 3. PREVIEW — el que se manda al usuario por chat
ffmpeg -i $M.mp4 -vf scale=720:1280 -c:v libx264 -crf 28 -preset medium \
  -c:a aac -b:a 128k -movflags +faststart $M-preview.mp4
```

Medido sobre Bachué v7 (los tres, 102,458333 s = 2.459 fotogramas):

| Entrega | Tamaño | Resolución | Bitrate vídeo | Para qué |
|---|---|---|---|---|
| `bachue-final-v7-seleccion.mp4` | 147.780.167 B | 1080×1920 | 11.336 kb/s | archivo, del que se deriva todo |
| `…-social.mp4` | 96.946.829 B | 1080×1920 | 7.367 kb/s | subida a redes |
| `…-preview.mp4` | 12.710.364 B | 720×1280 | 855 kb/s | aprobación del usuario |

- **`+faststart` sólo en los derivados** (verificado por orden de átomos: máster `ftyp free mdat moov`; social y preview `ftyp moov free mdat`).
- **El `-b:v 8M` del social es menor que el CRF 18 del máster**: recompresión con pérdida deliberada, al bitrate que las plataformas re-encodan igual.
- **El preview tiene que caber en un chat**: 12,7 MB. Es el archivo que se manda con `SendUserFile`.
- **Ninguno de los tres va a git** (`content/videos/.gitignore:15` = `*.mp4`). Se commitea el plan, la selección, el `import-map.json`, el `lecho-vN.wav.json` y el `.srt` si existe.
- **Nombres**: el máster lleva `-final-vN[-etiqueta]` y los derivados **repiten ese nombre completo** más `-social` / `-preview`. `PRODUCCION-END-TO-END.md` §8 escribe otra cosa; **vale el disco**. Y los tamaños que fija `proceso-mitos-a-video.md:221` (~186 MB / ~84 MB / <30 MB) son los de Bachué v1 de agosto: lo único que es especificación son los parámetros.

### 5.9 La mesa de montaje y el montaje que mezcla tandas (16-sep)

Hasta el 16 de septiembre cada máster salía de **una sola tanda**. Ese día se rompió, a petición del usuario y con buen resultado (ley 4 reescrita).

**La mesa de montaje** se publicó como artifact (`68e85cf2-6d4d-4cf6-97e6-39fe4189d7a6`): una página con tres mitos en pestañas —**Bachué 18 escenas, La aparición del hombre 18, El salto del Tequendama 19**— y **164 tomas comparables en total** (165 archivos publicados, la página incluida), una fila por escena con sus variantes lado a lado. Las 18 filas de Bachué ofrecían **cuatro** variantes: grok de agosto, Gemini, Seedance y la tanda web de v3, ésta última marcada en rojo **`OTRO GUION`** porque no calza con el guion actual. El usuario eligió toma a toma y la elección quedó en la base de la propia página; de ahí salió `bachue/seleccion-usuario.json`, con la tanda elegida, **la ruta absoluta del archivo de origen** (en otro worktree, en muchos casos) y el formato original medido.

**El reparto: 9 grok · 5 Seedance · 4 Gemini.**

| Escena | Tanda | Escena | Tanda | Escena | Tanda |
|---|---|---|---|---|---|
| c01 | gemini | c07 | grok | c13 | gemini |
| c02 | seedance | c08 | grok | c14 | gemini |
| c03 | grok | c09 | grok | c15 | grok |
| c04 | seedance | c10 | grok | c16 | gemini |
| c05 | seedance | c11 | grok | c17 | seedance |
| c06 | grok | c12 | grok | c18 | seedance |

Dos hallazgos que valen más que el video: **nueve tomas de grok del 20 de agosto, archivadas cuatro semanas, volvieron al aire**; y **cuatro salen de la tanda Gemini del 11 de septiembre, que se había rechazado entera** — el rechazo era de tomas concretas, no del modelo.

**Qué hay que normalizar para mezclar tandas.** Las 18 elegidas se copian a `clips-seleccion/` renombradas `cNN.mp4` y se igualan tres cosas: **resolución** (las nueve de grok venían a 720×1280), **duración de bloque** (cuatro de grok —c09, c10, c12, c15— duraban 6,041667 s; Seedance 5,041667; Gemini 5,013) y **fps + SAR**. El comando que deja los tres invariantes ⚠ *(reconstruido: no quedó en ningún script ni commit; se dedujo de los metadatos de salida, de la palabra «lanczos» del mensaje de commit y de un PSNR de 43,1 dB entre el primer fotograma del c09 normalizado y el del original reescalado, que sitúa el punto de entrada en t=0 con la cola cortada)*:

```bash
ffmpeg -y -i <origen>.mp4 -map 0:v:0 -t 5 \
  -vf "scale=1080:1920:force_original_aspect_ratio=increase:flags=lanczos,crop=1080:1920,fps=24,setsar=1,format=yuv420p" \
  -c:v libx264 -preset medium -crf 18 -an clips-seleccion/cNN.mp4
```

**`-map 0:v:0` no es paranoia**: los clips de grok de agosto traen **tres** streams — h264 720×1280, AAC, y un **mjpeg como `attached_pic`**. Un `-map 0:v` a secas se lleva los dos streams de vídeo y confunde a todo lo que venga detrás. Las 18 normalizadas salen idénticas: `1080,1920,1:1,24/1`, 120 fotogramas, 5,000000 s.

**El plan.** `plan-v7-seleccion.json` es `plan-v6.json` con tres cambios: la carpeta de clips, un campo `_tanda` por bloque y el `_notas` reescrito. Todo lo demás idéntico.

**La advertencia de calidad, sin adornos:** la mitad del video viene de material 720p subido a 1080. Un reescalado con lanczos recupera nitidez aparente, no información: al lado de una toma Seedance nativa se nota, sobre todo en la textura de papel, que es donde vive la identidad visual del canal. **Es una decisión editorial del usuario, no un defecto del montaje**, y hay que decirlo cada vez que se entregue este máster. ⚠ Sostenido por la resolución de los archivos de origen, no por haber visto el video en movimiento. **Regla derivada: mezclar tandas está permitido; mezclar resoluciones nativas tiene un coste visible.** La opción limpia, si se repite, es regenerar la toma elegida con el modelo vigente usando el mismo keyframe, no reescalar.

**Lo que esto cambia en el proceso.** La mesa convierte el descarte en inventario. Para que funcione hay que **dejar de borrar los clips de las tandas descartadas y anotar su ruta**: las **cuatro** carpetas de Bachué (`clips/` de agosto en `myth-mobile-design-c8ea4f`, `clips-v1/` en `higgs-field-gpt2-2k-value-ef422e`, `clips-v4/` y `clips-v5-seedance/` en `elegant-matsumoto-11a141`) son el activo que hizo posible la mesa. Y **`seleccion-usuario.json` es el equivalente del `import-map` para montajes por selección**: consérvese siempre.

### 5.10 Checklist de una corrida de montaje

```bash
D=content/videos/muiscas/videos/<mito>; P=$D/plan-vN.json; M=$D/<mito>-final-vN
# 0. invariantes de las tomas + el cierre + la placa (§5.7)
# 1. node scripts/videos/qc-sheet.mjs --plan $P --out $D/qc      ← y MIRAR las hojas (§6.3)
# 2. node scripts/videos/validate-plan.mjs --plan $P --secos     ← 0 errores, margen ≥ 0,5 s
# 3. node scripts/videos/assemble-video.mjs --plan $P --out $M.mp4
#      leer: "título en Asimovian (Asimovian-Regular)"  ← si dice Helvetica, para
#            "listo: … (XXX.XXs, N bloques)"            ← cuadrar con la suma de duration
# 4. las dos entregas derivadas (§5.8)  ·  ebur128 (§6.5)
# 5. VER EL VIDEO ENTERO en 9:16 con sonido, y recién entonces mandar el preview
```

---

## 6. Control de calidad

### 6.1 La lección que ordena todo lo demás

El 12 de septiembre se entregó `huitaca-final-v1.mp4` (98,458333 s, 18 planos, $4,37 de OpenAI y 0 créditos de Higgsfield) con **0 errores y 6 avisos de aire muerto ignorados** en el validador, y dentro de la banda de sonoridad (I −16,2 / LRA 13,8 / TP −1,3, medido hoy). El usuario lo vio **en movimiento** y escribió: «actualmente se ve desastroso». Un panel adversarial de **34 agentes** lo auditó plano a plano y dejó **20 defectos confirmados y 0 refutados** en `huitaca/qc/panel-resultado.json`, cada uno con evidencia por fotograma *(los `id` se repiten porque vienen de cinco lentes distintas: son 20 defectos, no ocho)*.

La causa raíz, escrita sin adornos en `stopmotion-v2-rediseno.md` §1.9:

> «El QC dio el visto bueno porque mide **magnitud, no orden**: `qc.mjs` calcula deriva e irregularidad, no dirección, monotonía ni periodicidad; el manifiesto se escribió a mano; `vista-todos.jpg` se hizo DESPUÉS de montar; **nadie vio un clip en movimiento**.»

Un clip donde la gota de chicha **cae y vuelve a subir** tiene la misma magnitud de cambio que uno donde sólo cae: el palíndromo es simétrico y la métrica es simétrica. Pasaron así `c10` (la gota), `c09` (la rueda de danza gira y desgira 2,5 veces, periodo exacto de 48 fotogramas, MAD a lag 48 = 0,28 frente a 6-11 en los demás lags), `c17` (parpadea 10 veces en 5 s, periodo 24), `c02` (repite pierna dos de cada tres pasos y patina: 238 px en 5 s con las puntas saltando ±80 px) y `c13` (la vasija cae, se estrella y vuelve al aire). **Quince de los 18 clips se montaron en palíndromo.**

**Las tres reglas que salen de ahí** (ley 11, más dos):

1. Ninguna entrega sin ver el video entero en movimiento.
2. La compuerta humana va en tres puntos: hoja de contacto de las anclas **antes** de gastar un crédito; reel corto en movimiento al cambiar de método o cadencia; preview entero antes de cerrar.
3. **Toda métrica nueva tiene que medir orden, no sólo cantidad**: monotonía hacia el estado final, periodicidad (MAD a lag 24 y 48), signo del desplazamiento. **Si una métrica da el mismo número para una acción y para su inversa, no sirve como puerta.**

Corolario incómodo: **el único video del repo con artefactos de QC en disco es Huitaca**, el rechazado. Los cuatro másters aceptados no tienen ni una hoja de contacto commiteada, así que no se puede auditar qué se miró. **Desde ahora la hoja de contacto se commitea** — pero antes hay que arreglar el mecanismo: `content/videos/.gitignore:22` es `*.png` para todo el árbol, y `qc-sheet.mjs` escribe `.png`, así que hoy `git add` de una hoja **no hace nada y nadie se entera**. O `qc-sheet.mjs` pasa a `.jpeg({quality:90})` (como ya hace `contacto.mjs`), o se añade `!**/qc/*.png` al `.gitignore`. Las 40 hojas de Huitaca que sí están versionadas sobrevivieron por ser `.jpg`, no por la regla.

### 6.2 Lo que hoy corre solo

Entorno verificado en este worktree: **ffmpeg 8.1 / ffprobe 8.1**, **sharp 0.33.5**. Todo cuesta 0 créditos y 0 dólares.

| Herramienta | Qué cubre | Dónde está descrita |
|---|---|---|
| `validate-plan.mjs` | Contrato del plan, ventanas de voz, cortes secos, fuentes | §5.2 |
| `import-mcp-clips.mjs` | **Guardián de resolución y duración** al importar | §3.7 |
| `qc-sheet.mjs` | Hoja de contacto de 5 fotogramas por clip | §6.3 |
| Aborto de fuente de `assemble-video.mjs` | Que el título sea Asimovian y no Helvetica | §5.4 |
| `ebur128` | Sonoridad del máster | §6.5 |
| `stopmotion/qc.mjs`, `v4/qc.mjs`, `v3/qc-flipbook.mjs` | Sondas del carril experimental | §6.6 |

### 6.3 `qc-sheet.mjs` — la hoja que se mira antes de ensamblar

```bash
node scripts/videos/qc-sheet.mjs --plan $D/plan-vN.json --out $D/qc --per 6 --width 216
```

Extrae **5 fotogramas por clip** a **t = 0 · 1,25 · 2,5 · 3,75 · 4,9 s**, en fila con la etiqueta del clip, en hojas de 6 clips (216×384 px por viñeta). Qué se busca, en orden:

1. **Apertura no congelada**: el fotograma de 0 s distinto del de 1,25 s.
2. **Estilo papel intacto** en los cinco (nada de bokeh, brillo metálico ni morphing).
3. **Sin figuras nuevas** a mitad de clip (multi-shot encubierto) ni cambios en el número de figuras.
4. **Caras iguales** entre el primero y el último.
5. **Mismo escenario y misma hora** en los cinco (deriva de plano).

Dos límites del script que hay que conocer: **(a)** los tiempos están **fijos en el código**, pensados para clips de 5 s — el **cierre de canal sí entra en la hoja** (está declarado `motion`), pero sus cinco muestras caen dentro de los primeros 4,9 s de un clip de 8,42 s, así que **los últimos 3,5 s no se miran**; en clips más cortos que 4,9 s (los A→B de 3 s) las últimas muestras repiten el último fotograma. **(b)** Sólo recorre bloques `type: "motion"` con `clip`: **la placa `still` queda fuera** y hay que mirarla aparte.

**La puerta que falta construir y cuánto vale.** La retrospectiva del video 1 propuso `qc-clips.mjs` (1 h de trabajo, «hacerlo antes del video 2») midiendo con ffmpeg tres números por clip: `scene_score` máximo (corte o giro brusco), YDIF medio (energía de movimiento) y YDIF de los 12 primeros fotogramas (apertura congelada).

| clip | scene_score máx | veredicto real |
|---|---|---|
| seedance c15 v1 | **0,159** @ 4,12 s | corte interno (defecto) |
| kling c09 v1 | **0,102** @ 4,25 s | giro brusco a cámara (defecto) |
| seedance c06 | 0,049 | push-in fuerte, bueno |
| kling c17 v1 | 0,022 | mantas como alas (defecto **semántico**: la métrica no lo ve) |
| seedance c15 v2 | 0,020 | bueno |

**Umbral: `scene_score > 0,08` ⇒ revisar.** Confirmado después a mano en tres lotes más: El Tequendama máximo **0,125** (arranque de un push-in), Bachué v5 **0,085** (un tilt-up), El Dorado **0,073** (los 17 por debajo del umbral). **Cuatro lotes sin un falso positivo, y el script sigue sin existir**: `grep -rl "scene_score\|YDIF" scripts/` no devuelve nada, y `scripts/videos/qc-clips.mjs` no está. Hoy se mide a mano (`select='gt(scene,0)',metadata=print`) y la corrida del 16-sep no lo midió. **Es la mejora de QC con mejor relación coste/beneficio pendiente.**

### 6.4 Catálogo de defectos por modelo (medidos, no supuestos)

⚠ Estos juicios vienen de las notas de los `jobs.json`, los `import-map.json` y los docs; en esta revisión no se abrió ningún clip.

| Modelo | Defecto | Evidencia | Antídoto |
|---|---|---|---|
| **Seedance 2.5** | **Corte interno.** Es multi-shot por diseño | `c15` del video 1: corte a primer plano de manos en los últimos 0,9 s; `scene_score` 0,159 | El candado en sus dos mitades (§3.4). Con él desde el primer envío: **19/19 sin un corte** |
| **Gemini Omni Flash 1.1** | **Deriva de plano** (3 de 18): cambia escenario u hora a mitad de clip | tanda de Bachué, 11-sep | `background, light and hour identical to @Image 1 for all 5 seconds`. **Se mitiga, no desaparece** |
| **Gemini** | **Salida horizontal** (1 de 18) | ídem | Lo atrapa el guardián de resolución, **no el ojo** |
| **Gemini** | Tasa de acierto | 13/18, 517,5 cr y resultado rechazado, frente a 18/18 por 810 cr | «La mitad de precio no compensa» |
| **Kling 3.0 pro** | **El personaje solo se endereza y gira a cámara** | `c09` del video 1; `scene_score` 0,102 | `head never turning toward the camera` |
| **Kling 3.0 pro** | **Lectura semántica errónea**: mantas leídas como alas | `c17`, `scene_score` 0,022 — **ninguna métrica lo ve** | Sólo ojos. Es el argumento de que la hoja de contacto no se sustituye por números |
| **Niebla de algodón** | La materia difusa se desintegra en bolas literales | bake-off de la laguna del 20-ago (kling3); reproducido por Gemini (1 de 18) | No describir niebla o humo como sujeto principal |
| **Cualquiera** | **Apertura congelada** (fotograma 0 ≈ el 12) | — | Columnas 1 y 2 de la hoja; la futura YDIF |
| **Cualquiera** | Intercepción por preset | `submission_failed … Preset "<n>" was recommended` | `declined_preset_id` **exacto** por request (§3.4) |
| **Seedance / Gemini** | `429 rate_limit_reached`, request a request | ~8 en vuelo | Olas de ~8 y reponer. **Kling aceptó 17 sin un 429** |

### 6.5 Sonoridad del máster: banda de aceptación

En `mix: "narracion"` **no hay `loudnorm` final**, así que la sonoridad es una **consecuencia**: hay que medirla.

```bash
ffmpeg -nostdin -i $D/<mito>-final-vN.mp4 -af ebur128=peak=true -f null - 2>&1 | tail -14
```

| Máster | Duración | Integrada | LRA | True peak | Habla | Origen del dato |
|---|---|---|---|---|---|---|
| `bachue-final-v7-seleccion.mp4` | 102,458 s | **−16,1 LUFS** | 17,1 LU | −1,5 dBFS | 58,05 s = 56,7 % | **medido hoy** |
| `huitaca-final-v1.mp4` (rechazado) | 98,458 s | **−16,2** | 13,8 LU | −1,3 dBFS | — | **medido hoy** |
| `la-aparicion-del-hombre` v1 (Kling) | 94 s | −16,6 | 17 LU | −1,5 dBFS | 41 s = 44 % | `pipeline-v4-mcp.md:229` |
| `el-tequendama` v5 | 99 s | −16,1 | 11,1 LU | −1,4 dBFS | 67 s = 68 % | `pipeline-v4-mcp.md:260` |
| `bachue-final-v5-seedance.mp4` | 94 s | −16,2 | — | −1,3 dBFS | — | `pipeline-v4-mcp.md:319` |

Las cuatro últimas filas **no son remedibles desde este worktree**: los `.mp4` no van a git y viven en `elegant-matsumoto-11a141`.

**Banda: integrada −16 ±0,5 LUFS y true peak ≤ −1,0 dBFS.** Fuera de ahí, el máster se rehace: algo se rompió en el plan (`mix` olvidado, lecho de otra duración, voz sin `--format wav`). Un LRA de 17 LU es normal en este canal: la narración respira mucho. Nótese que **Huitaca, el video rechazado, estaba dentro de la banda**: es exactamente el argumento de §6.1.

El **% de habla** se mide así, y hay que escribir el comando junto al número para que la corrida siguiente sea comparable: `ffmpeg -i <máster> -af silencedetect=n=-25dB:d=0.2 -f null -`, sumando `silence_duration` y restando del total. ⚠ El denominador de las filas antiguas (44 %, 68 %) es anterior al cierre de canal; las nuevas lo incluyen, así que **no son directamente comparables** — con y sin cierre la cifra cambia unos 6 puntos.

### 6.6 Las sondas del carril de stop-motion

Existen y funcionan, pero cada una mide un carril distinto y **no son comparables entre sí**:

```bash
node scripts/videos/stopmotion/qc.mjs --dir <carpeta de f####.jpg> --banda 0.28
node scripts/videos/stopmotion/v4/qc.mjs --dir <carpeta con frames/> --desde 1 --hasta 24
node scripts/videos/stopmotion/v3/qc-flipbook.mjs --dir <flipbook> --plato plato.jpg --cadencia 12
node scripts/videos/stopmotion/v2/contacto.mjs --dir <planos-out> --planos P13,P02,P14 --out <contacto.jpg>
```

- **`stopmotion/qc.mjs`** (v1/v2): movimiento medio, pico e irregularidad del cuadro, y deriva de plató en la **franja superior (28 %)**. Criterio impreso: *por debajo de ~1,5 el fondo no parpadea*. En Huitaca v1 los planos de multitud y los de 4 hojas se quedaron en **2,7-5,5**. **Ésta es la sonda que dio verde al desastre: mide magnitud, no orden.**
- **`v4/qc.mjs`**: deriva entre vecinos y **acumulada contra el primer fotograma**, más «avance hacia el último» con conteo de **retrocesos**. Define el fondo como las bandas **0-22 % y 90-100 %**: **sus números no se pueden comparar con los del `--banda 0.28`** aunque se llamen igual.
- **`v3/qc-flipbook.mjs`**: la única que mide la **silueta exacta** (`|fotograma − plató|`). Saca altura y base (pies) por fotograma —el centroide y el área se calculan pero **no se imprimen ni entran en `qc.json`**—, distancia a la pose final, salto entre vecinos, **subidas** (regresiones > 2) y **bombeo** (picos aislados > 3 %). Caso real: la hoja de 36 poses dio `subidas: 3, bombeo: 9` y fue rechazada por dos verificadores; la corregida dio `subidas: 0, bombeo: 5`; la de 16 poses, `0` y `0`.
- **`v2/contacto.mjs`**: hoja de contacto de anclas **con las métricas de G0/G1 impresas debajo** — MAD de fondo en 216×384 gris fuera de la caja del sujeto, y `nitidez_sujeto_vs_fondo` como razón de varianza del laplaciano. Escribe la hoja `.jpg` y un `.json` hermano. **Mide y rotula, pero no juzga**: no imprime umbral ni sale con código ≠ 0. Es sonda, no puerta.

### 6.7 Las ocho puertas G0-G7: umbrales y estado real

Definidas en `stopmotion-v2-rediseno.md` §5, cada una con el defecto de Huitaca v1 que habría parado. **Aviso que el documento original no da:** el script `qc-clip.mjs` del que dependen **G2 y G3 no existe** (`find` no lo encuentra; sólo aparece nombrado en ese doc, líneas 63, 73, 105, 111, 113). De los nueve scripts "nuevos" de su §3.3, **cinco sí existen** (`lookdev.mjs`, `anclas-ab.mjs`, `contacto.mjs`, `inserto.mjs`, `posterizar.mjs`, más `clavar-b.mjs` y `quieto.mjs`); faltan `cortes-por-voz.mjs`, `kling-ab.mjs`, `qc-clip.mjs` y `plan-desde-cartas.mjs`.

| Puerta | Qué mide | Umbral | Estado hoy |
|---|---|---|---|
| **G0 Mundo** | Hoja de contacto de las imágenes ancla + checklist cerrado: ¿agua o reflejo? ¿es de día? ¿la luna está del lado que toca? ¿bokeh/render? ¿mira a cámara cuando el spec pide perfil? ¿especie del ave? ¿nº de personas ≠ spec? ¿arquitectura ajena? | **cualquier «sí» bloquea el plano** | **Practicable con `lookdev.mjs` y `contacto.mjs`** + mirada. *(`qc-sheet.mjs` no aplica aquí: sólo muestrea clips.)* Ya funcionó: la hoja de lookdev (4 decorados **en una llamada**, $0,117) y las 3 fichas pasaron a la primera, y el **panel de 17 verificadores** cazó que la B de P13 era una lechuza de campanario y que P14 cambiaba de encuadre entre A y B |
| **G1 Par A\|B** | MAD del fondo entre A y B; ratio de nitidez figura/fondo; B en el estado absoluto declarado | **MAD < 2,0 · nitidez < 3×** | **Implementada como sonda** (`contacto.mjs`). Medido: «B como edición de A» dio 2,6-3,1 (falla); componer B dentro del rectángulo editable con pluma de 48 px lo bajó a **0,80 / 0,88 / 0,99** |
| **G2 Clip** | MAD(primero, A) y MAD(último, B); salto máximo entre vecinos; banda superior; energía; resolución y fps | **< 6 · < 8** (en bucle < 3) **· vecinos ≤ 20 · banda < 1,5 y < 4 · energía ≥ 0,8** | **Sólo existe la parte de resolución/duración** (`import-mcp-clips.mjs`) |
| **G3 Monotonía** | d(t) = MAD(t, B) no sube más de 2 en ningún tramo de 12 f | **0 regresiones** | Sin implementar. **Parcialmente retractada**: el criterio hermano del argmin marcó 4 falsas regresiones sobre redibujos de cuadro completo — «es ruido». **Sirve sólo la monotonía contra la pose final** |
| **G4 Textura de tiempo** | MAD a **lag 24 y 48**; holds exactos de 2 fotogramas; ≥12 imágenes distintas por segundo; paso de zoom constante | **lag 24/48 > 0,5 · zoom < 5 %** | Sin implementar — pero `posterizar.mjs` **impone** el "a dos" por construcción. Es la puerta que habría cazado los seis clips de periodo 24 y el `c09` de periodo 48 |
| **G5 Inserto dibujado** | Variación de tamaño medida sobre la **máscara alfa, no sobre la caja**; carta de exposición; nitidez; ribete; deriva del ancla | **< 3 % · ≤ 2× · < 0,5 % · ≤ 4 px/f** | Sin implementar — pero `inserto.mjs` elimina la causa por construcción («nada de normalizar por caja alfa, que es lo que hacía bombear a la lechuza»). Medido a mano: falló con **28,5 %** y el centroide reiniciándose por fila (790 → 936 → 1078 → 1013); se salvó en post con alfa endurecido y carta `[f0 12][f1..f6 ×2][f7 1][f8 36]` |
| **G6 Montaje** | Cortes a ≤0,15 s de una pausa medida o ≥0,4 s tras el remate; fin de voz ≥0,6 s antes del fin del bloque; escalas distintas entre planos contiguos; ejes; sólo cortes secos | binario | **Parcialmente en `validate-plan.mjs`**: cortes secos, fin de voz y aire muerto sí; pausas medidas, escalas, ejes y «dos quietos seguidos», no |
| **G7 Video entero** | Hoja de un fotograma por plano **en orden usada como puerta** + tira de 24 f del primer segundo de cada plano + **el preview visto entero**; grano; luna | **±30 % de alta frecuencia · luna ±10 %** | La parte humana es obligatoria y se cumple; la medida, sin implementar. **`vista-todos` no es un script**: es un archivo que se armó a mano y después de montar |

⚠ Sin verificar: ninguno de esos umbrales se ha corrido nunca contra un lote de clips buenos, así que **no se conoce su tasa de falsos positivos**. Son propuestas derivadas de mediciones ad hoc del panel.

**El criterio que resume todo: una puerta que no se puede ejecutar con un comando no es una puerta, es una intención; y un número verde sobre un video que nadie ha visto moverse no es una aprobación.**

### 6.8 Qué dejó la corrida del 16-sep, desde el QC

- **Es la forma más fuerte de compuerta humana que ha tenido el proyecto**: no un veredicto global sobre un máster, sino una decisión por escena con las alternativas a la vista. **Lección: rechazar por toma, no por tanda; y conservar siempre los descartes.**
- **Es también el punto ciego**: `bachue/clips-seleccion/` no tiene `import-map.json` ni hoja de QC. El único rastro es `seleccion-usuario.json`. ⚠ Tampoco hay prueba de que el plan v7 pasara por `validate-plan.mjs --secos` antes de ensamblar (no lleva `transition_dur` ni `xfade`, así que habría pasado).
- El proxy de movimiento del playbook («un clip vivo pesa ~2× uno tímido») **hay que retirarlo o acotarlo**: en `clips-seleccion/` los tamaños van de 5,16 MB (c13, Gemini) a 18,31 MB (c10, grok reescalado), y la diferencia es de códec y reencode, no de movimiento.

---

## 7. Costes y presupuesto

### 7.1 Precio por clip

| Configuración | cr/clip | Cómo se verificó |
|---|---|---|
| `seedance_2_5` · `omni_reference` · 1080p · 5 s · sin audio · bitrate high | **45** | `get_cost`, **16-sep-2026** |
| `seedance_2_5` · 720p · 5 s · sin audio | **32,5** | `get_cost`, 16-sep-2026 |
| `kling3_0` · `pro` · 5 s · `sound:"off"` | **8,75** | `get_cost` **9-sep**, anotado en `movimiento-v1.json` y en los 18 jobs ⚠ no re-verificado hoy |
| `kling3_0` · `std` · 5 s · `sound:"off"` | 7,5 | `get_cost` 9-sep ⚠ |
| `gemini_omni_flash_1_1` · 1080p · 5 s | 22,5 | `bachue/clips-v4/jobs.json`, 11-sep ⚠ |

**Kling factura lineal a 1,75 cr/s**: 3 s = 5,25 · 5 s = 8,75 · 7 s = 12,25. Es el dato que salva presupuestos.

### 7.2 Presupuesto por video

| Escenario | Clips | Créditos | Colchón (3 regens) | A tener en el saldo |
|---|---|---|---|---|
| Seedance 1080p (estándar) | 18 | 810 | 135 | **945** |
| Seedance 1080p, guion de 10 bloques | 19 | 855 | 135 | 990 |
| Seedance 1080p, presupuesto corto | 17 | 765 | 0 (sin margen: pasó en El Dorado) | 765 |
| Kling 3.0 pro (alternativa barata) | 18 | 157,5 | 26,25 | **183,75** |
| Stop-motion v2 híbrido (Huitaca v2) | — | **≈ 65-70** + ≈ $4-5 de OpenAI | — | ≈ 70 |

### 7.3 Lo que costó de verdad cada video

| Video / pieza | Tanda | Modelo | Clips | Aciertos | Créditos |
|---|---|---|---|---|---|
| **La aparición del hombre** | `clips-v1` | Kling 3.0 pro | 18 | 16/18 | **175** |
| | `clips-v1-seedance` | Seedance 2.5 | 18 | 17/18 | **855** |
| **El salto del Tequendama** | `clips-v5` | Seedance 2.5 | 19 | **19/19** | **855** |
| **Bachué** | `clips-v4` | Gemini Omni Flash 1.1 | 18 | 13/18 · **rechazada** | **517,5** |
| | `clips-v5-seedance` | Seedance 2.5 | 18 | **18/18** | **810** |
| **El Dorado** | `clips-v1` | Seedance 2.5 | 17 | **17/17** | **765** |
| **Cierre de canal** (una vez, reusable) | `cierre/clips-v1` | Seedance 2.5 | 2 + 1 descartado | 2/2 | **135** |
| **Huitaca** (stop-motion, máster rechazado) | — | gpt-image-2.5-sunburst | 18 planos | — | **0 cr + $4,37 de OpenAI** |
| **Bachué v7** (mesa de montaje, 16-sep) | `clips-seleccion` | 3 tandas ya pagadas | 18 | — | **0** |
| | | | | **TOTAL** | **4.112,5 cr** |

**De ese total, 3.977,5 cr son de los cuatro videos y 135 del cierre** (siete tandas, 110 jobs registrados). **517,5 se perdieron** en la tanda de Gemini rechazada. Las regeneraciones reales fueron **ocho** en todo el historial: `c09` y `c17` de Kling (8,75 c/u), `c15` de Seedance (45), las cinco de Gemini (112,5) y la del cierre (45) — **175 cr**. El coste marginal del cierre a partir del segundo video es **0**.

⚠ **El ledger no cierra por 75 cr:** `channel-dna.json:133` fija el saldo en 4.044,5 antes de la tanda Seedance de La aparición; restando lo registrado después (855 + 855 + 517,5 + 810 + 135) quedan 872, pero El Dorado arrancó documentado con 797. Faltan 75 cr por explicar.

### 7.4 Lo que no se paga en créditos

| Concepto | Coste | Fuente |
|---|---|---|
| Keyframe, `high`, sin referencias | **$0,056** | medido 12-sep **a 1088×1920** |
| Keyframe, `high`, con dos referencias | **$0,069** | ídem |
| Keyframe en `low` (sondas, no máster) | $0,0044 | ídem |
| Rehacer los 17 keyframes de un mito | **≈ $1,2** (techo) | 17 × $0,069; ⚠ la tarifa se midió a 1088×1920, un 33 % más de píxeles que el 1024×1536 que genera el carril hoy, y no hay recibo de la tanda de El Dorado |
| Voces de un video | 664-922 caracteres de la cuota de ElevenLabs | conteo de los guiones |
| Lecho nuevo | ⚠ ~455 caracteres por pieza de 45 s — **ese número no aparece en ningún archivo del repo** | nota de trabajo |
| Voces, lechos, título, ensamblaje, entregas, cierre reusado | **0** | — |

*(El «~USD 0,2/imagen» de `PRODUCCION-END-TO-END.md` §10 es ~3× más caro que lo medido: usar la cifra medida y decir que es la medida.)*

### 7.5 Tiempo

- **Generación de los 18-19 clips:** 9,2-14,3 min de pared (40 min en la tanda con cuatro 429 y una regeneración).
- **Ensamblaje:** ~2,5 min de pared por corrida completa, máster + social + preview ⚠ (fila 10 de `retrospectiva-carril-v4-video-1.md`, «6 × ~2,5», seis corridas del **video 1**; no re-medida). Cuidado al extrapolar: ese plan (`la-aparicion-del-hombre/plan-v1.json`) son **19 bloques —18 de movimiento + 1 placa `still`— y 94 s**, mientras que Bachué v7 son **20 bloques (19 + 1) y 102,46 s** — y la placa `still` es justo el bloque caro (`zoompan` a 2×, ~60-90 s por corrida: F5 de la retrospectiva). §5.3.
- **Video completo:** ≈ 2,5 h de trabajo (video 1 medido), de las cuales **55 min son escribir los prompts de movimiento mirando cada keyframe** — el paso más caro en atención.

### 7.6 Saldo y qué cabe hoy

Saldo registrado: **32 créditos**, plan `plus`, `unlim` no disponible (12-sep) ⚠ no confirmado hoy contra la cuenta. **Desde `dee51627` el saldo vive también en la cabecera de la cola §9 de `PRODUCCION-END-TO-END.md`**, que es donde hay que mantenerlo al día: estaba enterrado en un doc del carril experimental (`stopmotion-v2-rediseno.md` §0).

| Vía | Alcance con 32 cr | Falta recargar |
|---|---|---|
| Seedance 1080p, 18 clips | **0 clips** | 778-823 cr |
| Seedance 720p | 0 clips (32 < 32,5) | — |
| Kling 3.0 pro, 18 clips | 3 clips | **125,5-143 cr** |
| Stop-motion v2 híbrido (Huitaca v2) | — | **33-38 cr** |
| Rehacer `c06` y `c09` de El Dorado | 0 | 90 cr |

**Con el saldo de hoy no se puede producir ningún video por ninguna vía.** Lo más barato de todo es recargar **33-38 cr** y cerrar Huitaca v2 por la vía híbrida; para un mito nuevo, **~140 cr** y Kling 3.0 pro; el estándar aprobado exige **~850**. ⚠ **El precio en dólares del crédito no consta en ningún archivo del repo**, así que no se puede traducir la recarga a dinero.

---

## 8. Dónde vamos

### 8.1 Los másters vigentes

Cinco mitos tienen video. Todos muiscas, todos 1080×1920 24 fps, todos con el cierre pegado. Suman **508,29 s de canal: 8 min 28 s.**

| Mito | Máster vigente | Duración | Worktree | Estado |
|---|---|---|---|---|
| **Bachué** | `bachue-final-v7-seleccion.mp4` | **102,458333 s** (147.780.167 B) | `next-muisca-video-3e07cd` | montado 10:10, commit `e8f6e6b3` 10:11, copiado a `~/Downloads` 10:13 del 16-sep (md5 `0c67606e…`, byte-idéntico). La cola §9 **ya lo declara vigente** y archiva la v6 (`dee51627`, 16-sep 10:25); **sigue sin aprobación escrita del usuario** (§8.6) |
| **El salto del Tequendama** | `el-tequendama-final-v6-con-cierre.mp4` | **107,458333 s** | `elegant-matsumoto-11a141` | ENTREGADO 11-sep. El más largo del canal |
| **La aparición del hombre** | `la-aparicion-del-hombre-final-v6-con-cierre.mp4` | **102,458333 s** | `elegant-matsumoto-11a141` | APROBADO 11-sep |
| **El Dorado** | `el-dorado-final-v1.mp4` | **97,458333 s** | `elegant-matsumoto-11a141` | entregado a `~/Downloads` 11-sep 21:55, **sin aprobación registrada** |
| **Huitaca** | `huitaca-final-v1.mp4` | **98,458333 s** (47,2 MB) | `next-muisca-video-3e07cd` | **RECHAZADO**. Es el único máster del mito |
| *(transversal)* | `content/videos/muiscas/cierre/cierre-canal-v1.mp4` | **8,416667 s** | los dos worktrees (mismos bytes) | vigente |

Prefijo de los mitos: `…/<worktree>/content/videos/muiscas/videos/<mito>/`. El cierre cuelga de `…/content/videos/muiscas/cierre/`, **hermano de `videos/`**. Cada máster tiene su `-social` y su `-preview`.

**Trampa operativa:** los másters están repartidos entre dos worktrees y **ninguno existe en un remoto** (`*.mp4` ignorado). El Dorado no está en `next-muisca-video-3e07cd`; Bachué v7 no está en `elegant-matsumoto-11a141`. La única colección completa está en `~/Downloads` — menos Huitaca, que nunca se copió ahí.

```bash
cd /Users/alegut/MyApps/Personal/mitos_colombia/.claude/worktrees
for f in elegant-matsumoto-11a141/content/videos/muiscas/videos/*/*-final-v*.mp4 \
         next-muisca-video-3e07cd/content/videos/muiscas/videos/*/*-final-v*.mp4; do
  case "$f" in *-social.mp4|*-preview.mp4) continue;; esac
  printf '%-52s ' "$(basename "$f")"
  ffprobe -v error -show_entries format=duration -show_entries stream=width,height -of csv=p=0 "$f" | tr '\n' ' '; echo
done
```

### 8.2 La cola de producción y lo que no registra

La cola (`PRODUCCION-END-TO-END.md` §9, **reescrita el 16-sep en `dee51627`**) tiene **siete filas**: dos con ✅ (Tequendama, La aparición), una con ✅ y la **v7 declarada vigente** (Bachué), una con ⚠️ **«ensamblado, sin visto bueno»** (El Dorado), una con ❌ **rechazado** (Huitaca) y **dos pendientes sin claim**: la **#5, Chibchacum** («centrarlo en el dios, 100-110 s; no repetir la inundación de Bochica») y la **#7, Chía / El sol y la luna** («los dos narrados en el sitio y con la biblia completa; abrirían el arco cosmogónico»), ambas con las siete fases en `—`. Por la regla de la propia cola —el primero con fase pendiente sin claim—, **Chibchacum sigue siendo el siguiente video**. Su cabecera nueva declara además el saldo (32 cr frente a los 810-855 que cuesta un video) y remite a este manual.

Lo que la cola **ya** registra desde `dee51627`: la **v7 de Bachué y la mesa de montaje** (con la v6 archivada), el estado real de **El Dorado** —ensamblado desde el **11-sep 21:55**, sin visto bueno, corregido el «ensamblado 2026-09-12» de la fila 4— y el **rechazo de Huitaca** con sus 20 defectos y el enlace al rediseño.

Lo que **sigue sin registrar**: no hay fila para **Huitaca v2**; no hay filas para los **30 mitos muiscas con paquete preparado** (§8.3). **Mientras la cola cubra siete filas de un corpus de 41 mitos muiscas, el "reporte de avance" del playbook sigue callando el grueso del trabajo pendiente.**

Material de Chibchacum, verificado: `content/videos/muiscas/videos/chibchacum/` tiene **17 keyframes maestros** (`b1a`…`b9b` menos `b4a`) y `bloques.json` **sólo en el repo principal**; el worktree `higgs-field-gpt2-2k-value-ef422e` aporta `movimiento-v1.json`, `voz-v1.json`, `voces-v1/` y `plan-v1-no-title.json`. **Bug de datos:** su `nota_deslinde` dice «b3a lo cubre el `acto`», pero `reusadas` dice `b4a` y en disco el que falta es **b4a** (`b3a.jpg` existe). Quien produzca Chibchacum leerá la nota primero.

### 8.3 Los 30 paquetes preparados que nunca recibieron un clip

`video-batch-2026-08-31.json` (congelado el `2026-09-01T03:50:50.242Z`, sólo en el worktree `higgs-field-gpt2-2k-value-ef422e`) tiene **35 entradas**: 2 `qa_complete` y **33 `prepared`**. Tres de esos 33 se produjeron después, así que **quedan 30 paquetes listos y sin una sola toma**. `el-bermejo-aspira-a-ser-rey` quedó excluido con 6 keyframes y motivo `secuencia_incompleta`.

Verificado archivo por archivo:

- **Movimiento, voz y plan: 33 de 33 existen.** Cero faltantes.
- **Keyframes: entre 14 y 17 maestros propios** — 15 en 20 de los 33, 17 en 9, 16 en 3 y **14 en `los-cojines-del-zaque`**. El resto de los 18 planos lo cubren las placas del tríptico que `bloques.json` lista en `reusadas` (**una a tres**: `entrada`, `acto`, `huella`), presentes en `keyframes/` como `bNN.reuse.crop-9x16.jpg`. maestros + reusadas = **18 planos en 33 de los 34**; la excepción es `los-cojines-del-zaque`, un video de **17** planos (765 cr, no 810). **Ninguna referencia de los 34 `movimiento-v1.json` apunta a un archivo inexistente: no falta material.**
- **Las voces NO sirven tal cual.** Son **297 `.mp3`** (33 × 9) con `voice_id` `bNziytBsHtCSsgcPplG9` en `eleven_flash_v2_5` — una **tercera** voz, distinta de la vieja del DNA y de la oficial. Hay que regenerarlas en WAV con la voz de §4.1.
- **Los prompts NO sirven tal cual.** Los 33 declaran `"model": "Seedance 2.5 web unlimited"` (el carril muerto) y usan el esquema `{myth, shots:[{n, block, slot, keyframe, prompt, keyframe_sha256, duration_s, transition, status, job_id}]}`. El carril v4 usa `{modelo:{model, mode, resolution, …}, clips:{cNN:{keyframe, prompt}}}` — *(`papel` sólo aparece en El Dorado)* — y otra doctrina: **los dos usan `@Image 1`**, pero el de la web abre con él, mientras el de Seedance por MCP abre con «Handcrafted paper-maquette stop-motion, animated on twos (~12 fps)» y estructura la acción en beats `[0-2s][2-4s][4-5s]`.

**Traducido a trabajo:** lo caro está hecho (639 keyframes maestros, guion, planes); falta una **conversión mecánica de 0 créditos**. Para un mito, la parte de voz es literalmente cambiar tres campos de `voz-v1.json` y correr:

```bash
M=chibchacum; D=content/videos/muiscas/videos/$M
# voice_id → 9EHAKExD4lT2G6hPG74L · model_id → eleven_multilingual_v2
# voice_settings → {stability .35, similarity_boost .9, style .3, use_speaker_boost true, speed 1.05}
node scripts/videos/generate-voice-el.mjs --lines $D/voz-v1.json --out-dir $D/voces-v1 --format wav
```

*(El script lee `voice_id`, `model_id` y `voice_settings` del propio JSON: la receta funciona tal cual.)* ⚠ Sin verificar: cuánto trabajo real es el conversor de prompts (no se escribió ni se probó, y no se sabe cuántos sobrevivirían sin reescritura semántica); ni si los keyframes del worktree `higgs` son byte a byte los del repo principal (se detectó al menos un recuento distinto en `chaquon`).

**El corpus completo:** el repo principal tiene **41 carpetas** de mito muisca con **639 keyframes maestros** (1.278 archivos contando los `.crop-9x16`) y **39 `bloques.json`**. Cinco tienen video. Quedan **36 mitos muiscas con keyframes y sin video**: los 30 con paquete completo más seis sin paquete (`campos-eliseos`, `el-hijo-del-sol-goranchacha`, `el-primero-de-los-reyes`, `pacanchique`, `popon`, `el-bermejo-aspira-a-ser-rey`).

### 8.4 Las otras cuatro comunidades: cero videos

| Comunidad | Archivos en `content/videos/<c>/` | `.mp4` | Dónde se paró |
|---|---|---|---|
| **Wayúu** | 1.900 | **0** | 27 mitos con guion técnico, plan congelado y 496 keyframes canónicos (imágenes en `output/imagegen/wayuu*/`: 2.079 archivos, 2.004 JPEG). Su README: *«No hay voz, animación, montaje ni publicación de video.»* |
| **Nasa-Páez** | 1.673 | **0** | 26 mitos, 270 keyframes, 26 trípticos. `production_status: ready_for_user_review`, «Video final: No producido» |
| **Chimila / Ette Ennaka** | 779 | **0** | 23 mitos, 157 maestros a 1024×1536 (2:3): **la adaptación a 9:16 está pendiente** — ni siquiera hay keyframes rodables |
| **Huitoto** | 7 (sólo biblia) | **0** | 21 trípticos publicados en el sitio el 14-sep. Nada de video |

⚠ Las cifras de keyframes por comunidad vienen de `historia-audiovisual.md`; lo verificado es el recuento de archivos por carpeta y que hay **0 `.mp4`** en las cuatro.

El único movimiento de otra comunidad que existe son **dos tomas Seedance de 5,041667 s a 720×1280** generadas en ElevenLabs el 9-sep desde keyframes wayúu de *La india Worunka*, que viven sólo en `~/Downloads/ElevenLabs_video_seedance-2-5_*.mp4`. Sólo `historia-audiovisual.md` las explica, y nadie las documentó cuando se hicieron. No sirven para el canal.

**Consecuencia para planear:** abrir una segunda comunidad en video no es "el siguiente video", es **abrir un carril nuevo entero** —voces, lechos, prompts de movimiento y doctrina propia— sobre material que en el caso chimila hay que recortar antes.

### 8.5 Dónde vive el trabajo: nada de video desde el 31 de agosto está fusionado

`origin/main` está en `16975a59` (14-sep, PR #66).

| Rama | Worktree | Commits fuera de `origin/main` | Qué guarda |
|---|---|---|---|
| `claude/next-muisca-video-3e07cd` | `next-muisca-video-3e07cd` | **26** | **La más completa: ya lleva fusionada `muiscas-video-kling-first-161fc1`** (merge `08b5f6c5`) — carril v4 entero + laboratorio de stop-motion + Huitaca v1-v4 + Bachué v7 + `historia-audiovisual.md` (`e8f6e6b3`) + la cola al día y el ADN corregido (`dee51627`) + este manual y `BITACORA.md` (`6acd5dfa`) |
| `claude/muiscas-video-kling-first-161fc1` | `elegant-matsumoto-11a141` | 13 | Carril v4 original; sus `.mp4` sólo existen aquí en disco |
| `video/bochica` | `higgs-field-gpt2-2k-value-ef422e` | 6 | Era web "unlimited" + **el lote congelado de 35 mitos y sus 33 paquetes** |
| `claude/video-tests-search-ae3b0e` | — | 5 | Bitácora de la tanda web de Bochica v4 (31-ago), no "pruebas" |
| `claude/muisca-myths-video-mvp-834b41` | `myth-mobile-design-c8ea4f` | **0 — FUSIONADA** | Commit `1ffc0c8b` del 22-ago: la biblioteca de video. Lo único de video que llegó a `origin/main` |

Y el `main` local del repo principal está **45 commits por detrás**, arrastrando **4.348 archivos sin seguir** de wayuu (1.900), nasa (1.669) y chimila (779) —más otros 1.579 bajo `content/videos/muiscas`, dentro de **16.083 entradas sin commitear en total**. **Un `git checkout` o un `git pull` mal dado ahí se lleva semanas de trabajo que no existen en ningún remoto.** Los `.mp4` jamás llegarán a un remoto.

Recordatorio: `/usr/bin/git` falla por la licencia de Xcode. Todo lo anterior se corrió con `export DEVELOPER_DIR=/Library/Developer/CommandLineTools`; la cura real es `sudo xcodebuild -license`.

### 8.6 Decisiones abiertas que esperan al usuario

Ninguna cuesta un crédito. Todas bloquean trabajo aguas abajo. ⚠ De ninguna hay veredicto escrito en un documento o commit.

1. **La cadencia del stop-motion.** Los tres reels existen desde el 12-sep en `…/huitaca/v2/reel/`: `reel-E4-a2.mp4` (a dos, 12 dibujos/s, **8,940 s**), `reel-E4-a3.mp4` (a tres, 8 dibujos/s, **8,940 s**) y `reel-E4-continuo.mp4` (24 fps interpolados + grano, **8,917 s**). El diseño v2 dice que *sin este visto bueno no se produce el video aunque las métricas pasen*. **Mientras siga abierta, Huitaca v2 no arranca** — y Huitaca es el único mito con el máster rechazado.
2. **El Dorado: ¿aprobado o no?** Se copió a `~/Downloads` con nombre editorial como los tres aprobados, pero la cola §9 lo marca desde `dee51627` como **«ensamblado, sin visto bueno»** (sin ✅) y el ADN se puso de acuerdo con ella en la pasada de documentación del 16-sep (`channel-dna.json`, `.video_6.estado`: era «EN PRODUCCIÓN 2026-09-12», falso en las dos mitades). **Lo que sigue sin cuadrar es el guion**: `guion-el-dorado-v1.json` no tiene campo `aprobado` (verificado hoy), así que los papeles ya coinciden en que nadie decidió — pero nadie ha decidido. *(Registro relacionado: el campo `"aprobado_video"` que exige la ley 8 existe **sólo en `la-aparicion-del-hombre`**; Tequendama, Bachué y Huitaca llevan el ✅ de la cola pero no el campo. El Dorado es el único sin ninguna de las dos mitades.)*
3. **Las dos tomas desviadas de El Dorado.** `c09` (el heredero levanta más las manos de lo pedido) y `c06` (abre más oscuro que su keyframe). Rehacerlas cuesta **90 cr**: va atada a la recarga.
4. **¿Bachué v7 sustituye oficialmente a la v6?** La v7 está montada y entregada, y **la cola §9 ya la declara vigente con la v6 archivada** (`dee51627`) — pero eso es un registro de documentación, no un veredicto: **no hay ni un `aprobado_video` ni una nota de aprobación en `bachue/`**, y es el primer máster que mezcla tandas, con la mitad del metraje en 720p reescalado (§5.9). Falta que el usuario diga cuál de las dos es la buena antes de publicar nada.

Un quinto asunto, **ya resuelto**: `channel-dna.json` era la trampa más activa del repo y dejó de serlo el 16-sep. Primero `dee51627` — `.video` declara `seedance_2_5` con los precios verificados (la sección de agosto pasó íntegra a `.video_historico`), `.voz.VOZ_OFICIAL_CANAL` trae la voz vigente, `.musica.cama_actual` son los lechos de las narraciones, y su `_estado` remite a este manual, **que ya existe**. Después, la pasada de documentación del mismo día cerró el resto, y lo verifiqué leyendo el archivo: `.formato.clips_nativos` ya dice **1080×1920 @ 24 fps** (con la nota de que los 720×1280 son sólo grok de agosto), el bloque `.voz` lleva `_aviso` de HISTÓRICO y sus campos muertos renombrados (`settings_HISTORICO`, `registros_guion_HISTORICO`) con `wps_real` remedido, `.sfx.biblioteca` declara los **cuatro** archivos y su `uso` advierte de que el «ducking» sólo existe en `mix: "canal"`, y `volumen_en_mezcla` pasó a `volumen_en_mezcla_HISTORICO` explicando que en `mix: "narracion"` el `music_vol` se ignora. Esa segunda pasada quedó commiteada en `4c753541`, junto con las 75 correcciones al resto de la documentación.

### 8.7 Lo siguiente, por lo que más desbloquea

1. **Recargar créditos de Higgsfield, o decidir explícitamente que no.** Bloquea todo el carril. Cifras en §7.6. ⚠ No sé cuánto cuesta en dólares.
2. **Cerrar los cuatro veredictos de §8.6.** Cero créditos y unos minutos de mirar tres reels de 9 s y dos másters. Libera Huitaca v2, cierra El Dorado y deja de tener dos Bachués vivos.
3. **Poner el trabajo a salvo.** Fusionar `claude/next-muisca-video-3e07cd` (26 commits, contiene todo lo demás), terminar de corregir el `channel-dna` (lo que queda, en §8.6), sacar del limbo los 4.348 archivos de wayuu/nasa/chimila, respaldar `~/Downloads` (única colección completa de entregas + los **4,3 GB** de la voz grabada por el usuario, que no están en ningún otro sitio) y correr `git worktree prune` para el worktree fantasma de `/private/tmp`.
4. **Portar los 30 paquetes preparados al carril v4** (0 créditos): conversor del esquema `shots[]` al `modelo`+`clips{}` con la doctrina vigente, y 30 tandas de voz en WAV. Hecho eso, cada video cuesta sólo los créditos de sus clips y ≈ 2,5 h.
5. **Producir Chibchacum**, en cuanto 1 y 4 estén resueltos.
6. **Añadir a la cola §9** Huitaca v2 y los 30 mitos preparados. *(Bachué v7, la mesa de montaje y el estado real de El Dorado ya entraron en `dee51627`.)*
7. **No abrir todavía otra comunidad.** Abrirlas antes de terminar el corpus muisca multiplica el frente sin cerrar ninguno.

### 8.8 Arreglos pendientes en el código (0 créditos, alto retorno)

| # | Arreglo | Por qué |
|---|---|---|
| 1 | `qc-clips.mjs` con `scene_score` y YDIF, umbral 0,08 | 1 h de trabajo; cuatro lotes de datos sin un falso positivo (§6.3) |
| 2 | `validate-plan.mjs`: usar `VOICE_OFFSET` en `need` | Hoy el validador es 0,5 s optimista y una línea que pasa se corta en el máster (§5.2) |
| 3 | `qc-sheet.mjs` → `.jpeg`, o excepción en `content/videos/.gitignore` | Sin eso, "commitear las hojas de QC" es un no-op (§6.1) |
| 4 | `SIZES.vertical = "1088x1920"` y `crop-9x16` sin recorte + guardar el `size` en el manifest | Recupera el 15,6 % lateral de cada keyframe (§2.6, §2.5) |
| 5 | `setsar=1` al final de las cadenas de `assemble-video.mjs` | Blindaje contra el SAR 136:135 (§5.7) |
| 6 | Unificar `higgsfield-media.json` en la forma del script | Dos formas para lo mismo (§3.3) |
| 7 | `import-mcp-clips.mjs`: comparar `job_id` antes de escribir en `replaced` | El array cuenta reimportaciones, no regeneraciones (§3.7) |
| 8 | Un linter para `content/mitos-visuales/*.json` | La ley 7 no puede aplicarse al carril que más produce (§2.5) |
| 9 | Commitear `scripts/mitos/prepare-openai-keyframes.mjs` | Un checkout limpio no lo tiene (§2.6) |
| 10 | Deduplicar `bachue/plan-v6.json` y `plan-v6-base.json` (byte-idénticos) y actualizar el `_notas` de v6 | Duplicado sin explicación, nota de v5 en un archivo v6 |

---

## 9. Anexo · Qué documento leer para qué

⚠ **Fecha de esta tabla:** las pegas se levantaron contra el árbol en `e8f6e6b3` (16-sep 10:11) y se corrigieron en dos oleadas del mismo día: `dee51627` (10:25) puso al día la cola §9 de `PRODUCCION-END-TO-END.md` y el grueso de `channel-dna.json`, y una pasada de documentación posterior fue metiendo avisos dentro de `PRODUCCION-END-TO-END.md`, `pipeline-v3-profesional.md`, `pipeline-v4-mcp.md`, `proceso-mitos-a-video.md`, `cierre-de-canal.md`, `retrospectiva-carril-v4-video-1.md`, `stopmotion-interpolacion.md`, `stopmotion-v2-rediseno.md` y el resto de `channel-dna.json`. **Por eso la columna «Estado» describe la enfermedad, no necesariamente el enfermo de hoy**: varias de esas pegas ya llevan su ⚠ dentro del propio archivo. Antes de citar una, ábrase el archivo. La única fila de la tabla que seguía sin tocar al cerrar esta revisión es `historia-audiovisual.md`.

| Documento | Para qué sirve hoy | Estado | Sustituido por |
|---|---|---|---|
| **Este manual** (`docs/videos/MANUAL-DE-PRODUCCION.md`) | Todo el carril, de mito a máster | **Vigente. Fuente única.** | — |
| `docs/videos/BITACORA.md` | **Registro corrida a corrida**: qué se hizo, qué costó, qué falló y dónde quedó cada decisión, con plantilla de entrada | **Vigente y obligatorio** (commiteado con este manual en `6acd5dfa`): toda corrida se anota ahí al terminar, aunque no gaste un crédito | — (complementa a este manual: aquí el cómo, allí el qué pasó) |
| `docs/videos/PRODUCCION-END-TO-END.md` | **Sólo** las leyes §0, el protocolo de aprobación §0b y la cola §9 | **Parcialmente superado.** §1 manda un sqlite sin columna `mito` · §2 trae una plantilla con voz muerta, «≤19 palabras» y 2,4-2,6 pal/s · §6 manda música cama, `music_vol` y SFX y omite `mix` · §7 entero describe el carril web muerto · §8 usa `import-clips.mjs` y un proxy de peso inválido · §10 tiene el coste de imagen 3× alto y llama a `get_cost` "herramienta" · §11 es tabla de errores del navegador · ley 4 desfasada. **Su §9 sí está al día**: `dee51627` la puso en siete filas, con la v7 de Bachué vigente, El Dorado «ensamblado, sin visto bueno», Huitaca rechazado, Chía añadido y el saldo en la cabecera | §§1-7 de este manual. La cola §9 sigue siendo el sitio del estado; lo que todavía le falta son Huitaca v2 y los 30 mitos preparados (§8.2) |
| `docs/videos/pipeline-v4-mcp.md` | **Bitácora medida** de las cuatro tandas (§9, §9b, §9c, §9d): tiempos, scene_score, aciertos | **Vigente como registro; superado como instrucción.** §0/§0b tratan `get_cost` como comando · §2.5 dice que `@Image 1` no vale por MCP (falso para Seedance) · §2.8 titula el paso con 8,75 cr (precio de Kling) · §3 encabezada por Kling · §2.9 reinventa `qc-sheet.mjs` · el tope de concurrencia tiene tres cifras contradictorias · §9c da «1 h 15» de generación cuando los sellos dan 9,5 min · §2.11 y §2.7 siguen bien | §3 y §6 de este manual |
| `docs/videos/pipeline-v3-profesional.md` | Reconstruir qué se hizo en la web en septiembre | **Muerto** (carril web "unlimited"). Su §3 declara `eleven_flash_v2_5` "definitivo", superado el 9-sep | §3 (MCP) y §4 (voz) |
| `docs/videos/proceso-mitos-a-video.md` | Historia de agosto (grok, OpenAI TTS, SFX, ducking, tamaños de entrega como si fueran spec) | **Superado entero** | §4, §5 |
| `docs/videos/direccion-cinematografica.md` | Dirección de arte: escalas, alternancia, bookend, «el A plantea, el B revela» | **Vigente** | — |
| `docs/videos/plantillas-prompts.md` | Redacción de prompts | **Vigente** ⚠ no auditado en esta revisión: contrástese con §3.4 antes de copiar | §3.4 para la doctrina Seedance |
| `docs/videos/cierre-de-canal.md` | La pieza fija: desglose 4,00 + 4,42, recaptura del sitio | **Vigente con dos añadidos**: costó **135 cr** (no 0) y no advierte de la trampa del `voice_offset` | §4.5 y §5.6 |
| `docs/videos/stopmotion-interpolacion.md` | Laboratorio medido: precios de imagen, tamaños de la API, E0/E2/E4, el SAR 136:135 | **Vigente**; corregir «tiraba el 25 % del encuadre» → **15,6 %** | §2.6, §5.7, §6.7 |
| `docs/videos/stopmotion-v2-rediseno.md` | Diseño de las ocho puertas G0-G7 y del carril híbrido | **Vigente como especificación, no como manual**: `qc-clip.mjs` no existe, «12 de 17 defectos» debe decir **20**, G3 está parcialmente retractada, `vista-todos` no es un script | §6.7 para el estado real |
| `docs/videos/retrospectiva-carril-v4-video-1.md` | Fricciones medidas del video 1 (F1 título, F5 placa still, F6 prompts, F11 descartes) | **Vigente**; su tarea 1 (`qc-clips.mjs`, «antes del video 2») lleva cinco días parada y ya van cuatro videos | §6.3, §8.8 |
| `docs/videos/historia-audiovisual.md` | **Inventario: qué existe, 389 videos, 13 tandas, siete carriles, cinco comunidades** | **Vigente, fuente de verdad del inventario**; corregir «2,5 GB» de la voz → **4,3 GB**, fechar el worktree en el HEAD del día (fechaba `531d76f6`; hoy la rama va por `6acd5dfa`) y registrar que la v7 ya se entregó | §8 para el estado operativo |
| `docs/videos/muiscas/channel-dna.json` | ADN del canal: decisiones ratificadas y estado por mito | **Era la trampa más activa del repo; se saneó el 16-sep en dos pasadas** y ya no envenena. `dee51627`: `.video` declara `seedance_2_5` con los precios verificados y la sección de grok pasó a `.video_historico`; `.voz.VOZ_OFICIAL_CANAL` y `.musica.cama_actual` son los vigentes; su `_estado` remite a este manual, que ya existe. Pasada posterior (`4c753541`): `.formato.clips_nativos` a 1080×1920, `.voz` marcado HISTÓRICO con `wps_real` remedido, `.sfx` con sus **cuatro** archivos y el aviso de que el "ducking" sólo existe en `mix: "canal"`, `volumen_en_mezcla` renombrado a `_HISTORICO`, `.video_6.estado` de El Dorado corregido a «ensamblado, sin visto bueno», y el desmentido del «Kling es el ÚNICO que acepta fotograma inicial Y final» en `.video.alternativas.kling3_0` | Este manual (§3.1, §4, §5); las decisiones que siguen abiertas, en §8.6 |
| `docs/videos/muiscas/biblia-visual-video.md` | Biblia visual del mundo muisca | **Vigente** ⚠ no auditada en esta revisión | — |
| `docs/mitos-produccion-imagenes.md` | Los cinco pasos del carril de imágenes y el deslinde de escenas | **Vigente**, con un aviso: sus comandos `mitos:prepare:*:openai` **no existen en este worktree**, sólo en el repo principal | §2.5, §2.7, §2.8 |
| `content/videos/muiscas/videos/<mito>/import-map.json`, `jobs.json`, `lecho-vN.wav.json`, `seleccion-usuario.json`, `bloques.json`, `kf-9x16/manifest.json` | **El acta de cada corrida.** Es lo que se commitea y lo único auditable a posteriori | **Vigentes y obligatorios** | §3.6, §3.7, §4.2, §5.9 |
