# Carril de agosto de 2026 — ⛔ NO USAR

Lo que hay aquí y en los `videos/<mito>/historico/` es el lote del **31 de
agosto de 2026**: el carril por navegador con `grok_video`, narración por OpenAI
TTS, música cama con *ducking* y una capa de SFX por bloque. **Está muerto
entero** desde el 9 de septiembre.

Se aparta, en vez de borrarse, porque es el registro de cómo se produjeron los
primeros másters del canal y de por qué el carril cambió.

## Por qué no sirve hoy

Los 34 `plan-v1-no-title.json` **incumplen las leyes vigentes** de
`docs/videos/PRODUCCION-END-TO-END.md` §0:

| | el plan de agosto | la ley vigente |
|---|---|---|
| Transiciones | `transition_dur: 0.45` | **Ley 2**: sólo cortes secos |
| Sonido | `sfx` por bloque + cama con ducking | **Ley 4.4**: cero campos `sfx`; la música son los lechos |
| Cierre | no lo lleva | **Ley 5**: todo video cierra con el cierre de canal |
| Video | `grok_video`, 720×1280 | **Ley 4**: Seedance 2.5 a 1080p por MCP |
| Voz | OpenAI TTS «ash» | **Ley 3**: la voz clonada del canal, la misma del sitio |

`scripts/videos/validate-plan.mjs --secos` los rechaza en la primera línea.

## Por qué estaban estorbando

Estos 34 archivos llegaron a `main` el 16 de septiembre de 2026, rescatados de un
worktree y fusionados con `video/bochica`. Cayeron **dentro de la carpeta de cada
mito, junto a los planes vivos**. En 30 de los 41 muiscas eran el *único* plan
presente: quien abriera `tomagata/` encontraba un plan y era justo el que no debe
usarse. Por eso se apartan aquí.

## Qué sí vale de este lote

- `video-batch-2026-08-31.json` congela el alcance de la tanda (35 mitos, la
  regla que se aplicó y el motivo de cada exclusión). Sus rutas se actualizaron
  al mover los planes, así que sigue siendo legible como acta.
- Los keyframes que produjo **no están aquí**: siguen en `videos/<mito>/keyframes/`
  y son material vigente. La ley 1 manda escribir el guion sobre las imágenes ya
  producidas, y esas imágenes son las mismas.

## Dónde está el carril vigente

`docs/videos/MANUAL-DE-PRODUCCION.md` es la verdad operativa;
`docs/videos/PRODUCCION-END-TO-END.md` el contrato con sus leyes y la cola.
