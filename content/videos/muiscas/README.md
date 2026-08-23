# Biblioteca muisca — assets reutilizables de video e imagen

Todo el material generado para el canal de mitos muiscas, organizado para que cada
producción nueva parta de aquí en vez de regenerar. Estilo: `studioPaperMaquette`
del sitio (maqueta de papel artesanal). Los prompts exactos con que se creó cada
asset están en `biblia/manifest.json` y `videos/bachue/keyframes/manifest.json`.

Documentación del proceso: `docs/videos/proceso-mitos-a-video.md` ·
Plantillas de prompts: `docs/videos/plantillas-prompts.md` ·
ADN del canal: `docs/videos/muiscas/channel-dna.json`

## Qué se versiona y qué no

La regla: **si perderlo obliga a volver a gastar créditos o rompe la continuidad
visual del canal, va a git.** Si se rehace sin costo desde lo versionado, no.
Las reglas viven en `content/videos/.gitignore`.

| va a git | queda fuera |
|---|---|
| fichas de `biblia/` — regenerarlas daría otra cara | másters, clips y previews (`*.mp4`, ~2,9 GB) |
| keyframes de cada video | `.png` de los trípticos: al lado está el `.jpg` a la misma resolución nativa |
| trípticos de `mitos/` (jpg + manifiesto) | `pruebas/`: bake-off de una decisión ya tomada |
| música y sfx del canal, y las voces por bloque — rehacerlas gasta cuota de ElevenLabs | |
| manifiestos, planes, guiones, docs y el pipeline (`scripts/videos/`) | |

Son ~78 MB de las 3 GB del árbol. Todo lo excluido se reconstruye desde lo que
sí está: los clips desde los keyframes y `plan.json`, y los `.png` desde su `.jpg` hermano.

## Cómo reusar

- **En videos nuevos**: referenciar desde una spec como `muiscas/biblia/<id>`
  (los generadores resuelven contra `content/videos/`). Los personajes anclan
  identidad con "LA MISMA / EL MISMO ... de la referencia".
- **En imágenes del sitio** (ilustraciones de mitos, OG images, redes): pasar el
  jpg como imagen de referencia en `images.edit` de OpenAI (igual que hace
  `scripts/videos/generate-keyframes.mjs`) para heredar rostro/lugar/objeto exactos.
- **Audio**: `audio/musica-cama.m4a` es la identidad sonora del canal (se reusa tal
  cual); las camas de `audio/sfx/` se loopean por bloque desde `plan.json`.

## biblia/ — personajes, paisajes y props canónicos

Cada asset tiene `<id>.jpg` (nativo 1024×1536 o 1024×1024) y, si es vertical,
`<id>.crop-9x16.jpg` (1080×1920 listo para video).

### Personajes
| id | qué es |
|---|---|
| `bachue_adulta` | Bachué adulta: manta cruda anudada al hombro, franja ocre/verde, trenza negra. La madre del mito. |
| `bachue_anciana` | La MISMA Bachué envejecida (trenza gris, mismas mantas) — continuidad facial con la adulta. |
| `companero_nino` | El niño del mito (~3 años), manta corta cruda. |
| `companero_adulto` | El compañero adulto, manta al hombro izquierdo, franja ocre. |
| `companero_anciano` | El MISMO compañero envejecido. |
| `familias_muiscas` | Grupo de 6 descendientes (2 mujeres, 2 hombres, 2 jóvenes) con mochilas y vasija. |

### Paisajes
| id | qué es |
|---|---|
| `laguna_iguaque_A` | Laguna de Iguaque al amanecer, frontal desde la orilla, piedra ancla en primer plano. El plano-madre del canal. |
| `laguna_iguaque_B` | La MISMA laguna desde el pajonal alto (picado suave) — segundo ángulo consistente. |
| `casa_tierras_llanas` | Valle llano con bohío de techo cónico y fogón de tres piedras. |
| `sendero_territorio` | Camino entre lomas con arroyo de papel cruzando en primer plano. |
| `poblado_nuevo` | Poblado muisca: casas circulares, patio, telar de marco como ancla. |

### Props
| id | qué es |
|---|---|
| `semillas_bolsita` | Bolsita tejida con semillas de maíz, fríjol y quinua (hilo narrativo del canal). |
| `serpientes_laguna` | Las dos serpientes de agua (verde y ocre) — versión corregida SIN rasgos de pez. |
| `bachue_salida_agua` | Bachué saliendo del agua con el niño, 9:16. Reciclada del tríptico (fue su acto v1). |
| `kf_b2_emerge` | Keyframe canónico de la emergencia (Bachué + niño en la laguna). ⚠️ Su composición dispara filtros de moderación en algunos modelos de video; para clips usar re-encuadres (ver checklist en proceso §5b). |

## mitos/ — trípticos publicados en el sitio

Las imágenes principales de cada mito en mitosdecolombia.com. Tres escenas
distintas por mito, una por formato — nunca recortes de la misma:

| acto | formato | qué es |
|---|---|---|
| `entrada` | 16:9 | el personaje llega a su mundo. Nunca paisaje vacío, nunca de espaldas; se lleva la única luz distinta del cuadro. |
| `acto` | 9:16 | el momento por el que se cuenta el mito, en OTRO lugar y OTRA luz que la entrada. |
| `huella` | 1:1 | lo que queda cuando el personaje ya no está. Sin gente, legible a 200 px. |

| carpeta | mito del sitio | arco |
|---|---|---|
| `bachue/` | `bachue` | sale del agua · hace el mundo · vuelve al agua |
| `bochica/` | `el-tequendama` | llega a los que ofrendan · abre la roca · queda el salto |
| `bochica-maestro/` | `bochica` | llega por el oriente · muestra el hilo a la tejedora · el telar pintado en la piedra |
| `camino-de-bochica/` | `los-dioses-civilizadores` | escucha antes de enseñar · abre la acequia · la huella del pie en la piedra |

**Los tres Bochicas comparten personaje pero no comparten ni una escena.** La vara
de oro y la cascada son del Tequendama; el telar, del maestro; la acequia y la
huella del pie, del camino. Al escribir un mito nuevo del ciclo, revisar aquí antes.

### Cómo reusarlos en video

Cada carpeta trae los `.png` maestros (2688 px), su `manifest.json` con la escena
y los prompts exactos, y copias `.jpg` con el nombre del acto para que el
generador las resuelva como referencia:

```
refs: ["muiscas/mitos/bachue/acto", "muiscas/biblia/bachue_adulta"]
```

`acto.crop-9x16.jpg` es el 1080×1920 listo para animar, igual que en `biblia/`.

`generate-keyframes.mjs` resuelve un ref como `content/videos/<ref>.jpg`, así que
todo lo reusable tiene que existir como `.jpg` con ese nombre exacto. Si falta
alguno, **el generador aborta antes de gastar un crédito** y lista todas las
referencias rotas de una vez:

```
[keyframes] error fatal: 2 referencia(s) rota(s). No genero nada para no gastar
créditos con la continuidad rota:
  · b6a_ensenanza_semillas → muiscas/biblia/vasija_ceramica
```

`--allow-missing-refs` vuelve al comportamiento viejo (avisar y generar sin la
referencia), pero es una escotilla: generar sin la referencia rompe la
continuidad visual en silencio, que fue exactamente lo que pasó con
`vasija_ceramica` en dos keyframes de Bachué.

## audio/ — identidad sonora del canal

| archivo | qué es |
|---|---|
| `musica-cama.m4a` | Cama ambient del canal (95 s, sonilo): cuerdas suaves, arpa, quena lejana, sin percusión. SE REUSA en todos los videos muiscas. |
| `sfx/sfx-laguna.mp3` | Ambiente 10 s: agua de laguna + viento de páramo + aves lejanas (loopeable). |
| `sfx/sfx-fogon.mp3` | Ambiente 10 s: fogón crepitando + grillos + noche rural (loopeable). |

Pendientes de crear cuando haya presupuesto (2,5 cr c/u): viento-páramo puro,
aldea de día. Prompt-fórmula en `docs/videos/plantillas-prompts.md` §5.

## videos/bachue/ — producción completa del video 1

- `bachue-final.mp4` / `-social.mp4` / `-preview.mp4` / `.srt` — **versión oficial (v2)**:
  1:39, título de canal, crossfades, ambientes, música con resolución final.
- `bachue-v1.*` — primera versión archivada (sin pulido v3).
- `plan.json` — plan de montaje v3 (fuente de verdad del ensamblaje); `plan-v1.json` histórico.
- `keyframes/` — los 17 keyframes de escena + crops + `manifest.json` (prompts) +
  `media-map.json` (ids de Higgsfield, expiran). Reutilizables como imágenes sueltas
  (p. ej. `b9b_serpientes`, `b4b_valle_atardecer`, `b8b_entrega_semillas` funcionan
  como ilustraciones standalone).
- `clips/c01..c18.mp4` — clips grok 720×1280 originales (re-ensamblables con otro plan).
- `voces/voz01..09.wav` — narración ash por bloque (específica de Bachué).

## pruebas/ — evaluaciones de modelos (referencia)

Mismo keyframe de laguna animado por kling3 / wan2.7 / seedance-mini (bake-off de
precios 2026-08-20) + demos del pipeline de SFX. Ver veredicto en proceso §5b.
