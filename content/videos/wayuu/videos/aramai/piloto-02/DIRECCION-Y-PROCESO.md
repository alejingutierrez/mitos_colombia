# Arámai · piloto 02: magia presente, riqueza con jerarquía

7 de septiembre de 2026. Nueva dirección a partir del comentario del usuario: más magia, menos minimalismo extremo, más entretenimiento y riqueza visual. Sólo se revisan los cinco keyframes iniciales; guion y VO permanecen idénticos al piloto 01. Duraciones 0–25 s propuestas, sin voz ni video renderizados.

## Qué falló y qué cambia

El piloto 01 convirtió “minimalista” en demasiada superficie vacía. Los dos primeros planos carecían de anomalía explícita, y los siguientes concentraban la magia en fondos azules rectangulares. La materia funcionó, pero no bastó para sostener asombro y relato. Es una evaluación creativa del usuario; los cinco originales se preservan.

Ahora se simplifica la forma, no la cantidad de vida. Un foco imposible dominante, una acción humana o su ausencia significativa y detalles secundarios pertinentes, distribuidos en distintas profundidades. Se elimina la cuota de 40% de vacío. Recuperamos tramas, recortes vegetales puntuales, sombras, variación cromática y diagonales; nunca caras volumétricas, Pixar, planos de retrato o cartón exterior.

No basta añadir cosas o estrellas: el prodigio debe cambiar una relación espacial visible. El agua refleja otra hora, el recipiente contiene más profundidad de la que cabe, los postes se prolongan dentro de una enramada pequeña, el chinchorro soporta noche y las casas contienen distancias imposibles.

## Los mismos cinco instantes, nuevas composiciones

### 1. El agua guarda otra noche · 0–5 s · b1a

Plano abierto del jagüey rodeado de orillas secas, vida cotidiana y vegetación puntual. Sólo su reflejo contiene noche: anticipación visual, no agua enferma.

- Ancla: Jagüey y ranchería.
- Prueba visible: El agua escasa refleja noche y casas vacías bajo un cielo diurno.
- Tiempo de la licencia: anticipation.
- Movimiento futuro: Descenso oblicuo hacia el reflejo; parallax de cardón cercano, orilla, personas y fondo.

### 2. Una noche en el cuenco · 5–10 s · b1b

Dos mujeres adultas arrodilladas reparten una medida de agua. Entre ellas, el cuenco contiene un cielo nocturno físicamente imposible; gesto cotidiano y futuro en tensión.

- Ancla: Medida compartida de agua.
- Prueba visible: Un recipiente pequeño contiene profundidad nocturna mayor que su volumen físico.
- Tiempo de la licencia: anticipation.
- Movimiento futuro: Acercamiento oblicuo al cuenco, manteniendo manos y entorno; no retrato.

### 3. La enramada escucha · 10–15 s · b2a

Arámai pide ante una enramada viva en el territorio. Su interior revela una extensión de noche sostenida por postes que se pierden en profundidad.

- Ancla: Petición de Arámai en una enramada.
- Prueba visible: Un techo bajo contiene postes y territorio nocturno que se prolongan más allá de su tamaño.
- Tiempo de la licencia: present.
- Movimiento futuro: Desplazamiento lateral desde ramas cercanas al vano; permitir descubrir múltiples distancias.

### 4. El peso de la palabra · 15–20 s · b2b

Dentro de la misma enramada, un chinchorro vacío cede bajo una noche de capas, aunque nadie esté acostado. Arámai permanece pequeño ante el día exterior.

- Ancla: Chinchorro cotidiano dentro de la enramada.
- Prueba visible: Un chinchorro vacío sostiene el peso espacial de una noche entera.
- Tiempo de la licencia: anticipation.
- Movimiento futuro: Recorrido lateral bajo la trama suspendida; la profundidad se revela con oclusiones, no destellos.

### 5. La noche llega a las casas · 20–25 s · b3a

Patio diurno en varios planos: una mujer se detiene ante una casa cuyo umbral abre un paisaje nocturno con chinchorro vacío; otro umbral distante repite la huella, sin conector.

- Ancla: Umbrales de ranchería y ausencia.
- Prueba visible: Casas pequeñas contienen patios nocturnos y distancias que no cabrían dentro de ellas.
- Tiempo de la licencia: present.
- Movimiento futuro: Travelling corto por el patio; tejado cercano y plantas revelan la segunda casa sin unir los fenómenos.

## Relato, modelos y límites

Se conserva el relato congelado a949509df6e51454154a33e3e11979dc5a236ea8065cc1af1aa3d2eba5a0db1d y la VO de 169 palabras del piloto 01. La fuente histórica y distinción entre núcleo documentado/ampliación publicada permanecen allí; esta tanda no añade nueva investigación externa ni nueva versión cultural.

Los reflejos nocturnos tempranos son ANTICIPACIÓN VISUAL para el espectador. Nadie los interpreta como profecía; no prueban contaminación ni llevan oscuridad entre casas. La causa del relato sigue siendo la petición a Mareiwa. El chinchorro vacío en el momento de la petición también anticipa ausencia: no afirma que ya hayan ocurrido las muertes. La voz sigue nombrando enfermedad y consecuencias, sin representación gráfica.

Inventario previo a prompts: Arámai según continuidad del tríptico (mayor, cabello gris, Kemiisa arcilla, Kotin carbón, faja y pantalón arena, sandalias); mujeres adultas con shein amplios azul/arcilla sin cintura ceñida; jagüey, cuenco, tinaja, chinchorro, enramada, viviendas bajas, cardón, rebaño menor. No se introducen personajes con nombre, criaturas ajenas, ritos o marcas claniles. Las figuras de apoyo escenifican la vida comunitaria del relato, no crean episodios nuevos. Las entidades invisibles no reciben cuerpos inventados.

Cinco referentes reinspeccionados se registran en reference-review.json, incluidos los dos caminos elegidos por el usuario durante el tríptico y el chinchorro simbólico. Continuidad desde texto; no se suben archivos al proveedor. Son nuevas composiciones usando lo anterior como referencia, no ediciones con preservación pixel a pixel.

## Producción y trazabilidad

Habilidad imagegen, vía API/CLI oficial previamente elegida, gpt-image-2, medium, JPEG 864×1536 (9:16), n=1 por plano. Cuenta existente autorizada en .env ignorado, sin mostrar ni cambiar secretos. Sin generación raster local, recorte, ampliación ni sobreescrituras.

plan.json y prompts/ congelan el cambio; freeze.json guarda hashes anteriores a las llamadas. qa.json registrará imágenes reales, hashes, dimensiones, observación visual y conteo. Cada ID tendrá segunda interpretación desde el comienzo del piloto; no confundir “una salida en esta ronda” con una sola iteración total. Las métricas de aprobación y generación permanecen separadas.

Prompts completos en esta carpeta. Comando por trabajo, desde raíz con entorno autorizado cargado:

```sh
/tmp/mitos-imagegen/bin/python /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py generate --model gpt-image-2 --prompt-file content/videos/wayuu/videos/aramai/piloto-02/prompts/b1a.txt --quality medium --size 864x1536 --output-format jpeg --no-augment --out output/imagegen/wayuu/keyframes/aramai-piloto-02/b1a.jpeg
```

Cambiar b1a por el ID del trabajo. No usar --force. Cada corrección posterior va a otra versión y conserva ésta. No se modifica el preparador global, no se producen otros trece keyframes, no se anima ni publica. La aprobación de esta dirección sigue pendiente.

