# Proceso: de mito a video narrado (90 s)

Proceso repetible para transformar los mitos del catálogo en videos narrados de ~1:30
en 9:16. El objetivo no es un video suelto: es una **línea de producción consistente**
donde cada pueblo tiene una biblia visual reutilizable y cada video nuevo cuesta menos
que el anterior.

Primer piloto: **Bachué** (muiscas). Ver `docs/videos/muiscas/`.

---

## 1. Arquitectura (v2 — 2026-08-19)

Decisión de costos: las **imágenes se generan con OpenAI** (cuenta propia, estilo
`studioPaperMaquette` del sitio) y Higgsfield se usa solo para lo que OpenAI no hace:
**animar keyframes, narrar y componer la música**. El ensamblaje es **local con ffmpeg**
(gratis, versionado en el repo).

| Fase | Qué pasa | Herramienta | Costo |
|---|---|---|---|
| A · Guion | 9 bloques × 1 línea de VO (20–23 palabras es) + storyboard + through-line | Claude (repo) | 0 |
| B · Biblia + keyframes | Personajes/paisajes/props con cadena de identidad (`images.edit` con referencias); keyframes de escena por bloque | OpenAI `gpt-image-2` vía `scripts/videos/generate-keyframes.mjs` | ~USD 0,2/imagen (cuenta OpenAI) |
| C · Bloques motion | Image-to-video desde el keyframe (start_image) | Higgsfield: `grok_video` (1,5 cr/s) o `kling3_0` (2 cr/s, acepta start+end frame) | 15 cr por clip de 10 s (grok) |
| D · Bloques stills | Keyframe + movimiento de cámara (Ken Burns/parallax) local | ffmpeg local | 0 |
| E · Narración | 1 toma por bloque, misma voz siempre | OpenAI TTS `gpt-4o-mini-tts` vía `scripts/videos/generate-voice.mjs` | ~USD 0,02/video (cuenta OpenAI) |
| F · Música | Cama instrumental misteriosa-calma a duración exacta — **SIEMPRE lleva música** (decisión 2026-08-19) | Higgsfield: `sonilo_music` | ~5,6 cr/90 s |
| G · Ensamblaje | Concat, voz por bloque, música ducked, subtítulos | ffmpeg local (script del repo) | 0 |
| H · Publicación | Reels/TikTok/Shorts + embed | — | 0 |

Costos unitarios verificados el 2026-08-19 (preflight `get_cost`, sin gastar):
imagen Higgsfield 3 cr (no se usa) · gemini_omni 30 cr/10 s (no se usa) ·
**grok_video 7,5/15/22,5 cr por 5/10/15 s** · **kling3_0 10 cr/5 s** ·
seedance fast 35 cr/10 s · flux_3 55 cr/10 s · voz 0,9 cr/toma ·
narración continua 90 s 10,2 cr · música 90 s 5,63 cr.

### Presupuesto por video de 90 s (tres perfiles)

| Perfil | Video | Música | Total Higgsfield | Videos con 1.010 cr |
|---|---|---|---|---|
| **Full motion** (9 clips grok 10 s) | 135 cr | ~6 cr | **~155–170 cr** (con colchón de reintentos) | ~6 |
| **Híbrido** (4–5 clips motion + resto stills Ken Burns) | 60–75 cr | ~6 cr | **~80–95 cr** | ~10–12 |
| **Full stills** (Ken Burns en todo) | 0 cr | ~6 cr | **~6–10 cr** | 100+ |

(La voz salió de Higgsfield: seed_audio sonaba mal en español — se reemplazó por OpenAI
TTS con instrucciones de narrador, costo despreciable en la cuenta OpenAI.)

Más ~USD 3–5 por video en OpenAI (biblia se paga una sola vez por pueblo).
Recomendado: **híbrido** — motion en los momentos mágicos (en Bachué: la emergencia
del agua y la transformación en serpientes), stills rítmicos en el resto.

## 2. Principios

1. **La biblia manda.** Nada se genera sin descripción bloqueada en la biblia visual del
   pueblo. Personajes, vestuario, paisajes y props se definen una vez y se reutilizan.
2. **Guardarraíles editoriales del sitio aplican al video** (de
   `editorial/muisca/image-prompts.mjs` y las fichas): sin desnudez, sin coronas/templos
   europeos, sin iconografía mesoamericana, sin símbolos inventados, sin joyería
   inventada, sin nombres no documentados, sin texto en pantalla (salvo subtítulos).
3. **Gasto escalonado.** Biblia (OpenAI) → piloto de 1 bloque → video completo. Cada
   escalón se revisa antes de pagar el siguiente.
4. **La consistencia es mecánica:** cadena de identidad en OpenAI (`images.edit` con la
   imagen del personaje/paisaje como referencia), keyframes como `start_image` del video,
   una sola voz fijada por canal, y el estilo del sitio pegado en todos los prompts.

## 3. Mecanismos de consistencia

- **Cadena de identidad (OpenAI):** un personaje que envejece o cambia de escena se
  genera con `images.edit` pasando su ficha como referencia ("LA MISMA persona…").
  Los keyframes de escena reciben paisaje + personajes + props como referencias.
- **Keyframe → clip:** el video se genera desde el keyframe aprobado (`start_image`),
  no desde texto. El clip no puede desviarse mucho de un primer frame correcto.
- **Manifest reproducible:** `content/videos/<spec>/manifest.json` guarda cada prompt
  usado. La spec (`scripts/videos/specs/*.mjs`) es la fuente de verdad editable.
- **Channel DNA:** al cerrar cada video, guardar en `docs/videos/<pueblo>/channel-dna.json`
  estilo, voz (`voice_id`+`voice_type`), aspecto y rutas/URLs de assets. El siguiente
  video del pueblo reusa todo y solo cambia el guion.
- **Una sola voz por canal**, elegida escuchando pruebas reales en español (0,9 cr c/u).

## 4. Reglas duras de producción

- Bloques de ~10 s; **20–23 palabras por línea en español** (medido: ~2,15 palabras/s
  en registro de leyenda; re-medir si cambia la voz). La ventana de audio manda: línea
  que no cabe se reescribe, jamás se acelera (`atempo` prohibido).
- Variar tamaño y ángulo de plano en cada corte; máximo 2 bloques seguidos por paisaje;
  ningún plano estático >2,5 s en bloques motion.
- Personajes nunca hablan en pantalla (gestos sí); narrador externo siempre.
- Prompts sin las palabras `child`/`kid` (usar `small`/`young`), sin marcas ni estudios.
- Moderación: falsos positivos frecuentes → reintentar, luego reformular, luego
  re-encuadrar. Tope ~8 intentos por pieza y se reporta. Imaginería fúnebre/lúgubre
  dispara filtros: el tono oscuro se logra con niebla, luz y arquitectura.
- Español contemporáneo; sin arcaísmos coloniales; los nombres propios solo los
  documentados por las fuentes.

## 5. Flujo por video (checklist)

1. [ ] Releer la ficha editorial del mito (`editorial/<pueblo>/myths/<slug>.mjs`),
       en especial `researchNotes` (qué está documentado, qué es licencia).
2. [ ] Guion de 9 bloques + storyboard + through-line (`docs/videos/<pueblo>/<slug>-guion.md`).
3. [ ] Actualizar biblia/spec si hay personajes o paisajes nuevos; correr
       `node scripts/videos/generate-keyframes.mjs --spec scripts/videos/specs/<spec>.mjs`.
4. [ ] Revisar keyframes ANTES de animar (consistencia de personajes, estilo, exclusiones).
5. [ ] Elegir bloques motion vs. stills; subir keyframes a Higgsfield (`media_upload`);
       generar clips (batch) con el modelo bloqueado en el DNA.
6. [ ] Narración por bloque (misma voz del DNA), medir duraciones; música a duración exacta.
7. [ ] Ensamblaje local (ffmpeg): concat + voz + música ducked + subtítulos por bloque.
8. [ ] QC: consistencia visual contra la biblia, sync de audio, sin texto en pantalla.
9. [ ] Actualizar `channel-dna.json` + apuntar aprendizajes (§6). Publicar.

## 5b. Optimización v2 (auditoría 2026-08-20, post-Bachué)

### Bake-off de modelos de video (mismo keyframe laguna, mismo prompt, 5 s, ledger real)
| Modelo | Costo 5 s | cr/s | Veredicto |
|---|---|---|---|
| **grok_video** (actual) | 7,5 | 1,5 | Equilibrio: composición fiel, empuje suave, 24fps. **Se queda.** |
| kling3_0 (std, sound off) | 7,5 | 1,5 | El más fiel al keyframe, PERO la niebla se vuelve bolas de algodón literales. `sound off` NO abarata. Alternativa al mismo precio para planos fijos. |
| wan2_7 (720p) | 7,5 | 1,5 | Push de cámara demasiado fuerte, 30fps (menos stop-motion). Trae audio ambiente nativo. Opción para 1-2 planos "de vuelo". |
| seedance_2_0_mini | 12,5 | 2,5 | Bellísimo (ondas de papel concéntricas) pero 67% más caro y familia del filtro que nos bloqueó. Descartado. |

**Conclusión de costo: 1,5 cr/s es el piso de la plataforma para image-to-video** (triple empate verificado en transacciones). El ahorro NO está en el modelo; está en (1) segundos de clip, (2) bloques still con Ken Burns (0 cr), (3) reuso de música y SFX entre videos.

### Palancas de costo del próximo video (~90-100 s)
- 2-3 bloques macro/B-roll como **still + Ken Burns** en vez de clip (−15 a −22 cr).
- **Reusar la música-cama** de 95 s del canal (identidad sonora + 0 cr; regenerar solo si el mito pide otro mood).
- **Biblioteca de SFX reusable**: cada cama Mirelo (2,5 cr/10 s) sirve para todos los videos (laguna, fogón, viento-páramo, aldea). Costo marginal → 0.
- Presupuesto próximo video: **~125-145 cr** (vs 180 brutos de Bachué v1).

### Capa de ambiente (SFX) — el salto audiovisual
- `mirelo_text_to_audio` (2,5 cr/10 s): camas de ambiente por escena ("gentle lake water lapping…", "hearth fire crackling…"), sin música en el prompt.
- `assemble-video.mjs` soporta `sfx`/`sfx_vol` por bloque: loop al largo del bloque, fades 0,4/0,5 s, mezclado con la música en un solo bus que se agacha bajo la voz.
- Volumen que funcionó: `sfx_vol 0.4-0.45` con música 0.09.
- Demo A/B: `content/videos/muiscas/pruebas/demo-sfx-pipeline.mp4`.
- Camas iniciales de la biblioteca: `bakeoff/sfx-laguna.mp3`, `bakeoff/sfx-fogon.mp3`.

### Velocidad (de ~2,5 h a ~35-45 min de pared)
- `generate-keyframes.mjs` corre en **olas paralelas** (`--concurrency`, default 4) respetando dependencias de refs: 16 keyframes pasan de ~25 min a ~6-7 min.
- El ensamblador quedó depurado (etiquetas de filtro, asplit, subtítulos PNG): una sola pasada.
- La mayor pérdida de tiempo de v1 fueron los reintentos nsfw (~35 min): se previenen con el checklist de abajo.

### Pipeline v3 (optimización sin créditos, 2026-08-20 tarde)
- **Ensamblador v3** (`assemble-video.mjs`): crossfades entre capítulos (`xfade` en
  plan.json) con recorte automático al aire real de la narración previa (silencedetect;
  si no hay aire → corte seco y lo avisa), fundido global de entrada/salida, la música
  resuelve con fade en su final natural (el cierre queda solo con ambiente), títulos de
  canal (`title`/`title_sub`, versalitas espaciadas con fade), camas SFX que cruzan los
  cortes como puente sonoro, y subtítulos sin cues huérfanos.
- **Gramática de montaje**: corte seco DENTRO del bloque narrativo, crossfade ENTRE
  bloques, título solo en el bloque 1, cola con xfade 0,5 y solo ambiente.
- **`lint-spec.mjs`**: linter anti-moderación + estilo para specs (correr antes de
  generar nada; ROJO = reintento nsfw casi seguro). Auto-testeado contra Bachué:
  0 rojos en las escenas corregidas y caza el kf_b2 original.
- **`validate-plan.mjs`**: valida archivos + mide el habla real y sugiere la partición
  de clips por bloque (`--suggest`) — reemplaza el cálculo manual de duraciones.
- **Playbook de prompts**: `docs/videos/plantillas-prompts.md` (keyframes, movimiento,
  voz, música, SFX, gramática de montaje y flujo completo de 7 pasos).
- Resultado: `bachue-final-v2.mp4` (1:39, 8 crossfades, título, ambientes) — regenerado
  íntegramente de assets ya pagados, 0 créditos.

### Checklist anti-moderación al escribir specs de keyframes (previene el impuesto nsfw)
1. ¿Menor + agua, fuego o noche en primer plano? → figuras de espaldas, lejanas, o plano sin personas (huellas, objetos).
2. ¿Multitud cargando bultos? → "adultos, de espaldas, bultos tejidos AL HOMBRO" (evita lecturas de bebés en brazos).
3. ¿Ropa mojada / salida del agua? → personajes "ya en la orilla, mantas secas".
4. ¿Escena íntima nocturna? → exterior del bohío, siluetas a media distancia.
Regla general: los re-encuadres "seguros" (espaldas, distancia, sin personas) suelen quedar MÁS poéticos — usarlos desde el arranque.

## 5c. Bochica (video 2, 2026-08-21) — la doctrina en producción
- Primera corrida PERFECTA: 22 imágenes OpenAI sin error, **18/18 clips grok sin un solo
  rechazo nsfw ni reintento** (el checklist anti-moderación aplicado desde la spec) y
  ensamblaje en una pasada. Costo: **143,65 cr** (18×5s=135 + 2 sfx) + ~USD 5 OpenAI.
- La doctrina (`direccion-cinematografica.md`) probó sus piezas: guion de luz por acto
  (tormenta→oro→renacer), cenital antes/después (inundación/drenaje), contrapicado
  reservado a la aparición, cita directa única en el clímax, bookend mazorca→siembra.
- Con voz E todos los bloques caben en pares de 5+5 → dimensionado uniforme, video de
  1:31, mejor para redes.
- Wall-clock total de la producción: ~35 min (keyframes 12 min, clips 8 min, resto local).
- zsh no divide `$var` sin comillas en loops (SH_WORD_SPLIT): descargas en python, no bash.

## 6. Aprendizajes (documento vivo)

- 2026-08-19 · Preflights `get_cost` no gastan créditos; usarlos SIEMPRE antes de
  elegir modelo. Balance inicial del piloto: 1.010 cr (plan Plus).
- 2026-08-19 · Ritmo del español narrado (seed_audio, registro leyenda): ~2,1–2,3
  palabras/s → 20–23 palabras por bloque de 10 s (el inglés calibra a 27–32; no copiar
  esa banda).
- 2026-08-19 · **seed_audio suena mal en español** (prosodia "mal hablada") → voz
  definitiva con OpenAI TTS `gpt-4o-mini-tts` + `instructions` de contador de leyendas
  (script `generate-voice.mjs`). Ritmo medido con OpenAI TTS: ~2,0 palabras/s → mantener
  20–22 palabras por bloque.
- 2026-08-19 · La cadena de identidad con `gpt-image-2 images.edit` funciona muy bien
  (misma Bachué joven→anciana; keyframe compuesto con 3 referencias). `gpt-image-2` NO
  soporta `input_fidelity` — el script degrada parámetros automáticamente.
- 2026-08-19 · `generate_video` puede responder con una **recomendación de preset** en
  vez de encolar el job ("3D RENDER"); se reenvía de inmediato con `declined_preset_id`
  (nunca aceptar el preset: rompería el estilo propio).
- 2026-08-20 · **Seedance 2.5 descartado**: 6,5 cr/s (4,3× grok) y su filtro NSFW
  bloqueó 3/3 intentos del clip de la emergencia (madre + niño en el agua), incluso con
  prompt totalmente neutro — el filtro reacciona a la imagen de inicio. Grok y Kling
  pasaron la misma imagen sin problema.
- 2026-08-20 · La voz ash con dirección de leyenda corre a ~1,7–1,9 palabras/s (más
  lento que la prueba corta). Regla práctica: medir el fin real del habla con
  `silencedetect` y dimensionar cada bloque como pares de clips de 5–6 s
  (`blockDur ≥ finHabla + 0,3`); grok cobra lineal, así que partir bloques en 2 clips
  no cuesta extra y duplica el ritmo de cortes.
- 2026-08-20 · Truco de costo: con precio lineal por segundo, 18 clips de 5–6 s = mismo
  costo que 9 de 10–12 s, pero con un corte interno por bloque (mucho más dinámico).
- 2026-08-20 · **Producción completa de Bachué: 160,3 cr TOTALES** (piloto incluido;
  estimado era 165-180). Los jobs `nsfw` de grok/seedance no cobraron neto.
- 2026-08-20 · **Patrón de moderación de grok**: el filtro reacciona a la IMAGEN de
  inicio (niño + agua/fuego/noche; multitudes que parecen cargar menores), no al texto —
  reformular el prompt no basta. Solución que funcionó 4/4: re-escenificar el keyframe
  (figuras de espaldas, pequeñas/lejanas, o plano sin personas — p. ej. "las huellas").
  Bono: los re-encuadres quedaron MÁS poéticos que los originales.
- 2026-08-20 · grok tolera máx ~12 jobs en vuelo (429 encima; reenviar solo los fallidos).
  El recomendador de presets puede disparar un preset DISTINTO por escena (nocturnas:
  "IN THE DARK") — declinar el id exacto devuelto en cada caso.
- 2026-08-20 · El ffmpeg local (homebrew slim) no trae libass/drawtext → subtítulos como
  PNG por cue (sharp/Pango) + `overlay enable='between(t,...)'`. Implementado en
  `assemble-video.mjs`; también exporta el `.srt`.
- 2026-08-20 · Dimensionado adaptativo de bloques: medir el fin real del habla con
  `silencedetect` y dar a cada bloque `ceil(finHabla + 0,3)` en pares de clips de 5-6 s.
  Bachué quedó en 1:42 (el mito respira; "un minuto y medio" es el orden, no una jaula).
- 2026-08-20 · Entregas: máster CRF18 (~186MB) + social 1080p 8Mbps faststart (~84MB) +
  preview 720p (<30MB para compartir en chat).
