# QA de candidatos · El camino de las almas

## 2026-09-03 · primera ola

Los siguientes candidatos se retiraron de `generated/` antes de la ingesta y
se conservaron en `rejected/` para que la decisión sea auditable. No se
reutilizan ni se borran automáticamente.

| tag | archivo | decisión | motivo |
|---|---|---|---|
| b2a | `b2a.v1.jpeg` | rechazar | Un plano que debía mostrar sólo el sendero añadió una figura humana. |
| b3a | `b3a.v1.jpeg` | rechazar | El paisaje de llegada al río añadió una figura con vara, sin identidad ni referencia aprobada. |
| b3b | `b3b.v1.jpeg` | rechazar | El plano del río añadió una figura humana aunque el río debía sostenerse solo. |
| b4b | `b4b.v1.jpeg` | rechazar | La trama de hilos añadió una figura con vara; el plano es sólo agua y tejido. |
| b8a | `b8a.v1.jpeg` | rechazar | El territorio de llegada añadió un caminante con vara que no forma parte de la escena. |

El plan se corrigió con la composición `paisaje_abierto` y exclusiones
explícitas antes de emitir los reemplazos. Los candidatos aprobados no se
ingieren hasta que todos los tags del mito hayan pasado QA.
