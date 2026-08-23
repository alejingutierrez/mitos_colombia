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

## 2. Prompts de movimiento (grok_video, image-to-video)

Estructura fija de 4 partes — rellenar [1] y [2], copiar [3] y [4] tal cual:

```
[1 APERTURA] Handcrafted paper-maquette stop-motion animation.
[2 ACCIÓN]   <1 acción principal en presente + 1-2 movimientos secundarios
              (niebla, humo, ondas, ropa) + 1 movimiento de cámara>
[3 MATERIA]  Everything is visibly handmade from cut paper, cardboard and natural
             fibers: low relief, visible cut edges, real micro-shadows, sober cold
             Andean highland light. Subtle stepped stop-motion cadence.
[4 NEGATIVOS] The characters only breathe and gesture softly, they do NOT talk.
             No morphing, no melting, no photorealism, no 3D render look, no text,
             no extra characters appearing.
```

Vocabulario de cámara (uno solo por clip): `slow gentle push-in` ·
`slow lateral tracking` · `very slow push-in` (retratos) · `slow tilt up` ·
`slow overhead drift` · `gentle slow arc around` · `slow follow from behind`.

Reglas aprendidas:
- **Un movimiento de cámara por clip.** Dos = deriva y morphing.
- Los personajes **nunca hablan** (la narración es en off); siempre incluir la cláusula.
- Escenas nocturnas: añadir "night scene" tras la apertura y describir la luz
  (warm firelight against the cold night). Ojo: el recomendador de presets puede
  devolver un preset distinto (p. ej. "IN THE DARK") — declinar el id exacto.
- Ajustar [4] al plano: "no people appearing" en paisajes; "no fish, no koi, no fins"
  con serpientes; "no faces needed" en planos de manos/pies.
- El prompt de movimiento debe **describir lo que ya se ve en el keyframe** y solo
  añadir tiempo (qué se mueve). No introducir elementos nuevos: el filtro y el
  morphing castigan las sorpresas.

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

### 3b. La voz (ElevenLabs, acento colombiano)
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

## 6. Gramática de montaje (plan.json v3)

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
