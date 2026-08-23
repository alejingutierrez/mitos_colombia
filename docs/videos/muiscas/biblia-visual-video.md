# Biblia visual — videos del universo muisca

Canon visual para TODOS los videos de mitos muiscas. Se define una vez, se reutiliza
siempre. Complementa (no reemplaza) el canon editorial de `editorial/muisca/` y hereda
sus exclusiones. Primer video: Bachué (`bachue-guion.md`).

## 1. El mundo

Altiplano cundiboyacense prehispánico: páramos con frailejones y niebla baja, lagunas de
agua oscura y quieta (Iguaque, Guatavita, Tota), sabanas frías con lomas suaves, valles
con cultivos jóvenes de maíz, papa y quinua, senderos de tierra que conectan poblados.
Clima frío y húmedo; el cielo casi siempre con nubes bajas o niebla. El agua es el motivo
central del corpus: contiene y entrega la vida.

**Paleta bloqueada** (la del sitio): verde frío de páramo, azul-gris del agua, ocres de
tierra y cerámica, crema del algodón crudo, blanco de niebla. Nada de neones ni primarios
brillantes; el dorado solo como luz (amanecer, fogón), nunca como oro/joyas.

**Luz:** amaneceres fríos con niebla, tardes doradas suaves, noches de fogón y cielo
estrellado. Volumétrica y sobria, sin dramatismo de blockbuster.

## 2. Exclusiones duras (heredadas del canon editorial + fichas)

Sin texto ni logotipos en pantalla · sin coronas, tronos o templos europeos · sin
pirámides, penachos ni iconografía mesoamericana · sin símbolos espirituales inventados ·
sin desnudez ni sexualización · sin maternidad cristiana, halos ni estatuas · sin
joyería inventada (nada de oro en el cuerpo salvo que el mito lo documente, p. ej.
El Dorado) · sin nombres propios no documentados · personajes leen como adultos salvo
que el mito exija un menor (siempre vestido, protegido, junto a su familia).

## 3. Personajes (descripciones bloqueadas)

Regla: estas descripciones se pegan tal cual en los prompts. Un personaje que envejece
usa cadena de identidad (la variante mayor referencia la imagen de la menor: "the SAME
person, now aged").

### Bachué (la madre) — 3 edades
- **bachue_adulta** · Mujer andina de ~30 años, rostro sereno y fuerte, piel morena,
  cabello negro liso en trenza suelta. Manta rectangular de algodón crudo envuelta del
  pecho a la pantorrilla, anudada en un hombro (sin alfileres ni joyas); manta pequeña
  sobre los hombros con una franja tejida geométrica sobria en ocre y verde oscuro.
  Descalza. Porte de guía: calma, atenta, nunca solemne en exceso.
  - EN prompt: *serene Andean woman in her early thirties, brown skin, long straight
    black hair in a loose braid, wrapped in a plain raw-cotton manta knotted at one
    shoulder, a small shoulder cloth with one sober geometric woven band in ochre and
    dark green, barefoot, calm guiding presence, no jewelry*
- **bachue_anciana** · La MISMA mujer, ~70 años: cabello gris trenzado, rostro surcado y
  sereno, misma manta con la misma franja, paso lento y digno.
- (Bachué emerge del agua ya adulta; no hay variante joven separada.)

### El compañero (sin nombre — las fuentes no lo nombran) — 3 edades
- **companero_nino** · Niño pequeño (~3 años), manta corta de algodón crudo anudada al
  hombro, cabello negro corto, expresión curiosa y tranquila. SIEMPRE de la mano de
  Bachué o junto a ella. (En prompts: *a small young boy*, nunca la palabra "child".)
- **companero_adulto** · Hombre andino fornido y calmado, ~30 años, manta de algodón
  crudo anudada al hombro dejando un brazo libre, franja ocre sencilla, cabello negro
  recogido. Presencia de apoyo, nunca dominante (el mito centra a Bachué).
- **companero_anciano** · El MISMO hombre, ~70 años, cabello gris, misma manta.

### Los descendientes (coro)
- **familias_muiscas** · Familias andinas diversas (edades mezcladas, hombres y
  mujeres), mantas de algodón crudo con franjas tejidas en ocres, verdes y azules
  apagados, mochilas tejidas al hombro, vasijas de cerámica en las manos. Leen como
  comunidad, nunca como multitud arrodillada ni ejército.

### Las serpientes (forma final de Bachué y su compañero)
- **serpientes_laguna** · Dos grandes serpientes de agua, serenas y majestuosas, una en
  tonos verde oscuro y otra en ocres profundos, escamas con el tratamiento del estilo
  elegido. NUNCA amenazantes ni monstruosas: son un regreso, no un castigo.

### Panteón para próximos videos (definir al llegar su video)
Bochica (viajero mayor de manta sencilla, sin rasgos de apóstol), Chía / Huitaca (sin
diosa europea, sin luna con rostro), Chiminigagua (la primera luz: aves negras, nunca
figura humana), Chibchacum (cargador, sin Atlas griego). Sus "avoid" ya están en
`editorial/muisca/image-prompts.mjs`.

## 4. Paisajes (assets de locación)

- **laguna_iguaque** (2 ángulos) · Laguna de páramo de agua oscura y quieta, orilla de
  pajonal con frailejones, niebla baja, cumbres suaves al fondo; objeto ancla: una piedra
  ancha y plana en la orilla. Ángulo A: frontal desde la orilla. Ángulo B: desde el
  pajonal alto, picado suave hacia el agua.
- **casa_tierras_llanas** · Valle verde y llano; un bohío circular de bahareque con techo
  cónico de paja, fogón de tres piedras con humo fino; objeto ancla: el fogón.
- **sendero_territorio** · Camino de tierra entre lomas verdes y cultivos jóvenes, cielo
  de nubes bajas, un arroyo pequeño que cruza; objeto ancla: el cruce del arroyo.
- **poblado_nuevo** · Varias casas circulares de paja alrededor de un patio de tierra,
  un telar de marco apoyado contra una casa, cultivos al fondo; objeto ancla: el telar.

## 5. Props

- **semillas_bolsita** · Bolsita tejida sobria (fibra cruda con franja ocre) con semillas
  de maíz, fríjol y quinua. **Through-line de Bachué**: aparece en los 9 bloques.
- **vasija_ceramica** · Vasija de cerámica ocre sencilla, sin decoración figurativa.

## 6. Estilo de render

Tres candidatos evaluados (decisión del 2026-08-19, ver conversación):

- **A · Maqueta de papel del sitio (custom)** — la identidad `studioPaperMaquette` del
  sitio llevada a video: maqueta física artesanal de papel cortado, cartón y fibras
  naturales, relieve bajo, bordes visibles, imperfecciones humanas, micro-sombras
  reales, iluminación sobria, paleta del altiplano; movimiento tipo stop-motion suave.
  Donantes de estilo: las imágenes ya publicadas del sitio (p. ej. la de
  la-madre-de-los-hombres). Coherencia total web ↔ Instagram ↔ video.
- **B · Cinematic Storybook (default del canal de mitos)** — 2D pintado a mano tipo
  largometraje animado, animado "on twos" (~12 dibujos/s), luz volumétrica cálida y
  sombra profunda. El camino más probado del pipeline; menos ligado a la marca.
- **C · Paper Diorama (carta oficial)** — diorama documental de papel sepia envejecido
  con UN solo color de acento; figuras anónimas de rostros ocultos. Elegante pero
  monocromo y sin rostros: mejor para mitos de poder que para un mito de origen.

**Estilo bloqueado (2026-08-19): A — Maqueta de papel del sitio.** Las imágenes se
generan con OpenAI `gpt-image-2` heredando el perfil `studioPaperMaquette` de
`src/lib/image-generation.js`; la spec y los prompts exactos viven en
`scripts/videos/specs/muisca-bachue-biblia.mjs` y el manifiesto reproducible en
`content/videos/muiscas/biblia/manifest.json`. Formato del canal: **9:16**.

## 7. Sonido

- **Narración:** una sola voz para todo el canal muisca, español contemporáneo, registro
  de contador de leyendas: pausado, cálido, misterioso, sin chistes. Voz elegida con la
  galería (preview) + 1 toma de prueba en español antes de fijarla en el DNA.
- **Música:** cama instrumental misteriosa-calma a la duración exacta del video
  (cuerdas sostenidas suaves, arpa lejana, pad grave; NUNCA percusión alegre). Sugerencia
  de color andino sutil (quena/ocarina lejana), sin caer en "world music" genérica.
  Volumen 0.09, ducked bajo la voz.
- **SFX:** diegéticos dentro de los clips (agua, viento, fuego); nada añadido a mano.

## 8. Subtítulos

Activados por defecto, look `paper` (etiqueta de papel crema — coherente con la marca).
Los tiempos los pone el pipeline (Whisper sobre las tomas limpias); nunca a mano.
