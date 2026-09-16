# Guion técnico · La majayura de Puró · preproducción 01

**Duración estimada:** 128 s  
**Keyframes:** 16 verticales 9:16  
**Modelo fijado para todo el mito:** `gpt-image-2.5-sunburst`  
**Entrega:** JPEG `medium`, 864×1536, derivado por recorte central del máster API 1024×1536.

| Tiempo | Voz | Keyframes |
|---|---|---|
| 0–16 s | Cerca de Puró, una cueva era nombrada como un lugar sagrado al que ningún ser viviente debía entrar. El relato no entrega coordenadas: conserva un límite en el territorio. | `b1a` Puró permanece a distancia · `b1b` La abertura no se ofrece |
| 16–32 s | Allí aparecía una majayura: una joven adulta, elegante y bien vestida. Podía verse de día o de noche. Majayura no es su nombre ni significa sirena o bruja. | `b2a` Una presencia diurna · `b2b` La misma mujer bajo otra luz |
| 32–48 s | Se mostraba a hombres anónimos, siempre por separado. Ellos la veían detenerse entre las piedras y comenzaban a seguirla, aunque ningún gesto convertía la aparición en una invitación. | `b3a` Un hombre la distingue · `b3b` La distancia queda entre ambos |
| 48–64 s | Al avanzar, la orientación dejaba de obedecer. Un mismo sendero reaparecía detrás de estratos que deberían quedar al lado contrario, mientras tres piedras conservaban su forma y perdían la dirección de sus sombras. | `b4a` El sendero pierde un lado · `b4b` Tres sombras ya no concuerdan |
| 64–80 s | La majayura conducía hacia Puró. La cueva no se volvía casa, templo ni tesoro: era una abertura profunda cuya escala impedía saber si estaba cerca o todavía muy lejos. | `b5a` Ella continúa hacia Puró · `b5b` La cueva altera la distancia |
| 80–96 s | El lugar guardaba secretos del territorio. Quien regresaba no debía contarlos. La imagen no inventa palabras: tres bordes arcilla se dejan ver desde un ángulo y desaparecen al cambiar de posición. | `b6a` Tres bordes llegan a verse · `b6b` El mismo relieve los guarda |
| 96–112 s | Después, algo semejante a una piedra blanca parecía retirarse hacia el mar. No se multiplica: dos hendiduras vacías conservan posiciones anteriores y una sola piedra permanece junto al agua. | `b7a` Dos vacíos marcan la retirada · `b7b` Una piedra alcanza la orilla |
| 112–128 s | El relato nombra Papach a la piedra final. No es sabedor ni cuerpo atrapado. Puró queda como relación entre deseo, conocimiento y límite: ver algo nunca significa poder tomarlo. | `b8a` Papach permanece sin rostro · `b8b` El territorio conserva su límite |

## Compuerta causal Sunburst

`b1a` se genera con dos referentes aprobados de Biblia. Tras QA y aprobación, `b1b` usa `b1a` más una referencia canónica. Desde `b2a`, cada preparación exige los dos keyframes aprobados inmediatamente anteriores, en orden y con SHA-256 congelado. Nunca se usa un descarte como memoria visual.

