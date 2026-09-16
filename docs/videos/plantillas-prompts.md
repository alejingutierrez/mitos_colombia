# Plantillas de prompts del pipeline mitos→video

Fórmulas probadas en producción (Bachué, 2026-08-20). Cada tipo de prompt tiene una
estructura fija: se rellena, se pasa por el linter cuando aplica, y no se improvisa.

---

## 1. Keyframes (gpt-image-2, vía `generate-keyframes.mjs`)

El script arma el prompt automáticamente desde la spec (estilo `studioPaperMaquette`
del sitio + encabezado por `kind` + escena + paleta + avoids). **Lo único que se
escribe a mano es `scene` y `avoid`** — reglas para `scene`:

1. **Anclar identidad a las referencias**: todo lo que venga de la biblia se nombra
   `LA MISMA Bachué de la referencia`, `EL MISMO valle`, `LAS MISMAS familias`.
   Sin ese anclaje, el modelo inventa caras/lugares nuevos.
2. **Una acción esencial por keyframe** (es el primer fotograma de un clip de 5-6 s):
   sujeto + verbo + objeto + 1 detalle atmosférico. Menos de ~500 caracteres.
3. **Checklist anti-moderación** (la aplica `lint-spec.mjs`, correr SIEMPRE antes de generar):
   - menor + agua/fuego/noche → de espaldas, a media distancia, o plano sin personas
   - salida del agua → "ya en la orilla, mantas secas"
   - multitudes → "adultos, de espaldas, bultos tejidos AL HOMBRO"
   - serpientes → "SIN aletas, SIN cola de pez, no son peces" (y en `avoid`: peces, koi)
4. **Zonas seguras**: nada crítico en el 15% inferior (subtítulos) ni el 20% superior
   (título). Ya está en el encabezado `keyframe` del generador.
5. `avoid` corto y específico del plano; lo genérico ya vive en `SHARED_AVOID`.

```bash
node scripts/videos/lint-spec.mjs --spec scripts/videos/specs/<spec>.mjs
```

```bash
node scripts/videos/generate-keyframes.mjs --spec scripts/videos/specs/<spec>.mjs --concurrency 4
```

---

## 2. Prompts de movimiento (image-to-video — doctrina v2)

**Doctrina completa, vocabulario y 3 ejemplos de producción: `doctrina-movimiento-v2.md`**
(investigación 2026-08-31: guía oficial de Seedance + manual interno de Higgsfield +
comunidad + animación profesional; anexo con los 5 informes al lado). Desarrollada y
validada sobre Seedance 2.5; los anti-patrones aplican también a grok. La sintaxis de
beats `[0-2s]` y `@Image 1` es de Seedance.

**Regla madre: el modelo lee TODO como instrucción positiva.** Un "negativo" que
describe movimiento ("only breathe and gesture softly", "subtle motion only") es una
orden literal de quietud — fue el asesino de la animación en Bachué/Bochica v1.
Negativos SOLO de estética/material, nunca de cantidad o suavidad de movimiento.

Estructura fija de 7 líneas, un bloque, 100-150 palabras. Las líneas 1, 6 y 7 van
**byte-idénticas** en todos los clips del canal (mecanismo de consistencia); se
rellenan 3 (beats), 4 (cámara) y 5 (física):

```
[1 STYLE+CADENCE] Handcrafted paper-maquette stop-motion, animated on twos (~12 fps):
    deliberate stepped motion with tiny holds and slight rebounds, as if repositioned
    by hand between exposures.
[2 FIRST FRAME]  @Image 1 is the first frame: composition, palette, materials and
    lighting stay locked to it. Motion starts on frame 1, no opening freeze.
    (NO re-describir el contenido de la imagen: los tokens van a lo que CAMBIA.)
[3 BEATS]        [0-2s] … [2-4s] … [4-5s] — 1 acción dominante + 1-2 secundarias en
    TODO el clip, repartidas por beat; cada beat con causa→consecuencia, amplitud
    declarada (bursts, large stepped drops), un verbo de aterrizaje (slams, snaps,
    settles) y estado final observable. El material vive pegado a su verbo
    ("cotton-fiber mist swells", nunca materia quieta). Cierre: settled ≠ frozen.
[4 CAMERA]       UNA conducta, dicha una vez, motivada por un evento visible y con
    endpoint nombrado ("beginning as…, ending on…"). Opcional: "slightly handheld".
[5 PHYSICS]      1-2 invariantes de comportamiento ("foam only accumulates, never
    resets; paper edges shiver slightly between frames").
[6 INVARIANTES]  Every surface remains visibly cut paper, cardboard and natural fiber
    with raised edges and real contact shadows. Motion is large and continuous;
    forms stay stable.
[7 NEGATIVE]     NOT smooth motion, NOT fluid interpolation, NOT slow-motion, NOT
    motion blur, NOT liquid simulation, NOT photorealism, no morphing, no melting,
    no text, no extra people.
```

Reglas duras (detalle y evidencia en la doctrina):
- **Amplitud declarada o no hay vida**: en i2v el modelo no infiere intensidad desde
  la imagen; sin "large/burst/erupts" elige la mínima. "rising slowly" = orden micro.
- **Cámara**: compuestos coherentes OK (crane-up con tilt = una trayectoria); dos
  gramáticas mezcladas = jitter. Nunca "fast" (el keyword que más degrada). Pedir
  paralaje dentro del movimiento único ("foreground fronds drift faster than the
  far cliff").
- **Personajes cobran vida** con: estado inicial en acción (mid-stride, mid-breath),
  anticipación→acción, drag/follow-through de manta y pelo, mecánica de puppet
  ("jointed limbs pivot at paper hinges") que legitima movimiento amplio sin
  morphing. Identidad por invariante positivo ("face, garments and proportions stay
  exactly as in @Image 1"), nunca frenando la acción.
- **Candado anti-habla** (narración en off): va en el NEGATIVE como "no lip-sync,
  no talking" — nunca como limitador de energía.
- **No incluir "no 3D render"** (pelea con el bajo relieve real del papel);
  "NOT photorealism" siempre.
- **Oner de 5s con 3 beats por defecto** (el start_image ancla el primer frame; un
  corte abandona el ancla). Variante 2-shots con HARD CUT solo como A/B en saltos
  de escala.
- **Dos trabajos incompatibles = dos generaciones** (física de entorno vs. actuación
  de personaje) y se montan en edición.
- Escenas nocturnas: "night scene" tras la línea 1 + describir la luz. El
  recomendador de presets puede sugerir otro preset — declinar el id exacto.
- Ajustar el NEGATIVE al plano: "no extra people, no rainbow" en paisajes; "no fish,
  no koi, no fins" con serpientes; "no cloned or extra figures, no faces turning to
  camera" en multitudes. Nunca OTS sin personaje nombrado (inventa gente).
- **Gates de QC**: verb test (beat sin verbo = decoración, reescribir);
  before/after (cada clip muestra un cambio de estado visible); apertura estática =
  regenerar. Proxy de movimiento: peso del archivo (v3 pesó 2,3× v1).

---

## 3. Guion + narración (ElevenLabs, `generate-voice-el.mjs`)

### 3a. El guion: tres registros de una misma pluma
El mito se escribe en 9 bloques (2 frases y ≤19 palabras por bloque, fiel al canon
del mito, sin alargarlo). El REGISTRO se elige por video; la pluma es siempre la
misma: sobriedad, belleza, motivos de agua y semilla, cero exotismo, cierre quieto.

**REGISTRO GANADOR (feedback usuario 2026-08-20): fogón-visual-coloquial** — la
oralidad cercana del fogón + las imágenes sensoriales del registro místico + palabras
coloquiales colombianas dignas para redes ("dicen que", "puro agua", "óigame bien",
"se vinieron", "despacito"). Nunca slang que abarate; el mito conserva su peso.
Ejemplo canónico (Bachué, guion-d/e/f): "Dicen que al principio no había caminos.
Puro agua y niebla. Una laguna quieta, allá arriba, cuidando la vida."

Registros de la ronda 1 (archivados en mvp-guiones/, útiles como colores):
fogón puro (A) · canto antiguo épico (B) · agua-que-recuerda místico (C).

Reglas duras del guion (las tres): apegado a la historia canónica; los versos abren
con el bloque visual que acompañan; la última línea siempre deja el agua quieta;
nombres propios máx. 2 por video; nada de moralejas explícitas.

### 3b. La voz — ⚠️ SUPERSEDED (2026-08-31)

> La doctrina de voz vigente está en `PRODUCCION-END-TO-END.md` ley 3 y
> `pipeline-v3-profesional.md` §3: **alejandro `bNziytBsHtCSsgcPplG9` en
> `eleven_flash_v2_5`** (st .5 / sim .8 / sp .97); eleven_v3 descartado. Lo de abajo
> es histórico (la voz "Alejandro" `2HsKyIMt…` ya no existe en la cuenta).
- Generador: `node scripts/videos/generate-voice-el.mjs --lines guion.json --out-dir voces/`
  — usa `previous_text`/`next_text` para prosodia continua entre tomas y mide el
  ajuste de cada toma contra su `window` (tope de habla por bloque).
- Modelo: `eleven_multilingual_v2` (estable y soporta `speed`).
- Voces del canal (cuenta ElevenLabs, acento colombiano): **Amaf** (femenina melódica,
  `4kaLaTbziI05Jwh8zWad`) · **El Faraon** (masculina profunda, `W1hAcdh0RNsPYUA7fkJh`).
  ⚠️ "Alejandro" está roto (fine-tuning no disponible en ningún modelo). Slots 30/30.
- **Elenco del canal** (voces reconocibles que se alternan entre videos y hasta por
  bloque — `voice_id`/`voice_settings` por línea en el JSON de tomas): el abuelo
  (El Faraon `st .5 sty .25 sp .95`) · la tía (Amaf `st .5 sty .25 sp .97`) ·
  dúo alternado (bloques impares abuelo, pares tía). Pendiente ampliar con voz de
  niño y de anciana cuando haya slot libre (Alejandro roto ocupa uno).
- Ritmo real medido: ~2,4-2,6 palabras/s → 19 palabras ≈ 7-8,5 s (cabe holgado en
  ventanas de 9,3-11,4 s; el aire restante es respiración visual).
- API key: `ELEVENLABS_API_KEY` en el `.env` del repo principal (gitignored).
- (Pipeline anterior con OpenAI ash: `generate-voice.mjs`, queda como respaldo.)

## 4. Música de cama (Eleven Music — se REUSA por canal/pueblo)

```
curl -X POST -H "xi-api-key: $ELEVENLABS_API_KEY" -H 'Content-Type: application/json' \
  -d '{"prompt": "<mood>", "music_length_ms": 95000}' \
  'https://api.elevenlabs.io/v1/music?output_format=mp3_44100_128'
```
**La música debe evocar la CULTURA y su territorio** (feedback usuario): andina para
muiscas, amazónica o caribeña según el pueblo del mito. Cama muisca actual
(`content/videos/muiscas/audio/musica-muisca-andina.mp3`, 95 s, music_vol 0.12):
```
Ancient Andean indigenous atmosphere evoking the pre-Columbian Muisca world:
breathy bamboo quena and pan flutes playing a slow, sparse, haunting melody;
clay ocarina echoes in the distance; a soft deep hand-drum heartbeat; gentle seed
rattles; deep misty highland drones beneath. Slow, ritual, warm and mysterious,
like music remembered from an ancient lakeside ceremony. Instrumental only,
NO vocals, NO modern instruments, NO nature sounds or crickets, must sit quietly
under a narrator voice.
```
(la cama ambient anterior queda en `audio/musica-cama-elevenlabs.mp3`). Los SFX van
BAJOS tras el feedback "mucho grillo": agua 0.25-0.3, fogón 0.22, cola 0.4.
- Duración ≈ duración del video; el ensamblador la resuelve con fade de 4 s y el
  cierre queda solo con ambiente (intencional).
- (La cama anterior de sonilo/Higgsfield queda archivada en `audio/musica-cama.m4a`.)

## 5. Camas de ambiente (mirelo_text_to_audio, 2,5 cr/10 s — biblioteca reusable)

```
<sonido principal>, <2 sonidos secundarios suaves>, calm <lugar> ambience,
serene and quiet, no music
```
Ejemplos ya en biblioteca (`content/videos/muiscas/audio/sfx/`):
- `sfx-laguna.mp3` — "Gentle lake water lapping softly on a muddy shore, soft cold
  highland wind through grass, sparse distant morning birds, serene misty paramo
  ambience, calm and quiet, no music"
- `sfx-fogon.mp3` — "Small hearth fire crackling softly at night, gentle wind,
  distant crickets, calm rural night ambience, intimate and serene, no music"

Pendientes de crear cuando haya presupuesto: viento-páramo puro, aldea de día
(voces lejanas SIN palabras, telar, aves). Siempre `no music` y 10 s (el
ensamblador las loopea al largo del bloque).

Asignación en `plan.json`: `"sfx": "ruta.mp3", "sfx_vol": 0.3-0.5` — 0,45 en
escenas de agua protagonista, 0,3 cuando el ambiente es contexto. Solo donde el
sonido es diegético (se VE el agua/fuego); bloques neutros van solo con música.

---

## 6. Gramática de montaje — ⚠️ SUPERSEDED (2026-08-31)

> El pipeline v3 profesional usa **SOLO CORTES SECOS** (sin `xfade` ni
> `transition_dur`; `validate-plan.mjs --secos` lo vigila) y genera los clips en la
> web de Higgsfield, no por MCP. Ver `PRODUCCION-END-TO-END.md` y
> `pipeline-v3-profesional.md` §8. Lo de abajo describe el montaje v2 (histórico).

## 6-histórico. Gramática de montaje (plan.json v2)

- **Corte seco DENTRO de cada bloque narrativo** (entre clip A y B): mantiene ritmo.
- **Crossfade ENTRE bloques** (`"xfade": true` en el primer clip del bloque): respiración
  de capítulo. El ensamblador lo recorta automático al aire que dejó la narración
  anterior (si no hay aire → corte seco, avisa en consola).
- `transition_dur` global 0,4 s; la cola acepta valor propio (`"xfade": 0.5`).
- Título de canal: `"title"` + `"title_sub"` en el bloque 1 (fade in/out automático,
  zona superior). Mantener sobrio: nombre del mito + "Mitos de Colombia · <pueblo>".
- Fundido de entrada (0,6 s), de salida (0,8 s) y resolución musical: automáticos.

Flujo completo por video:
```bash
node scripts/videos/lint-spec.mjs --spec ...            # 1. lint (gratis)
node scripts/videos/generate-keyframes.mjs --spec ...   # 2. keyframes (~7 min)
node scripts/videos/generate-voice.mjs ...              # 3. voces
node scripts/videos/validate-plan.mjs --plan ... --suggest  # 4. duraciones de clips
# 5. subir keyframes + generar clips (MCP Higgsfield, batches ≤12)
node scripts/videos/validate-plan.mjs --plan ...        # 6. validar plan completo
node scripts/videos/assemble-video.mjs --plan ... --out ...  # 7. ensamblar
```
