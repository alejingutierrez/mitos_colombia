# Huitaca · b1a · dos segundos con storyboard

Encargo: aplicar el storyboard y crear dos segundos de video. Guion original: «Después del paso del maestro llegó una mujer que caminaba de noche».

La secuencia extiende el paso planeado a dos pasos alternos. Primer segundo: B avanza mientras A sostiene el peso. Segundo segundo: A avanza mientras B sostiene el peso. A identifica el pie inicialmente adelantado a la izquierda de pantalla, B el inicialmente retrasado a la derecha. Es una identificación visual desde el keyframe, no un cambio de identidad cuando las piernas cambian su orden de profundidad.

## Técnica aplicada

El cuadro 01 es el keyframe original `b1a.crop-9x16.jpg`, convertido a PNG. No se regenera. El encuadre final sigue siendo 1080×1920.

Se utiliza un recorte fijo de 256×384 píxeles en (408,896), ampliado a 1024×1536 para que GPT pueda editar la figura y sus pies. Cada solicitud utiliza el último recorte aceptado como destino de edición y, en los cuadros 03 a 08, el recorte original como referencia adicional de identidad y decorado. Desde el cuadro 09 se usa solo el anterior aceptado: dos intentos con ambas referencias no lograron adelantar el apoyo. El original sigue siendo referencia de revisión visual.

Modelo: `gpt-image-2.5-sunburst`, ejecutado mediante el CLI oficial de la skill imagegen. La primera prueba local con máscara y calidad medium se rechazó por reconstruir y agrandar la figura. La secuencia aceptada utiliza calidad high y edición sin máscara de generación, con prompts cortos y guías de apoyo.

Después de inspeccionar un candidato, se conserva solamente la región local de movimiento y se recompone sobre el original. Una máscara de composición fija, con borde suavizado, contiene la figura, el recorrido y la sombra de contacto. Para la entrega se estrecha la máscara al contorno de movimiento y se limita el área de suelo bajo los pies. También se reduce el exceso de rojo medido en dos franjas estáticas del camino, conservando los píxeles oscuros y evitando invertir colores neutros. Los píxeles fuera de la máscara final se conservan exactamente en los PNG finales. La zona interior aún depende de lo que generó GPT y de la revisión visual.

La edición local y la recomposición son la contingencia prevista en el storyboard para proteger el fondo. No se presentan como una salida de GPT sin procesamiento. No se utiliza interpolación temporal, deformación sintética para inventar pasos, cámara móvil ni un modelo de video. Cada nueva pose procede de una solicitud de imagen.

## Archivos

- `manifest.json`: fuente y hashes, extensión del storyboard, prompts, entradas, candidatos aceptados/rechazados y notas de revisión.
- `guion.json`: frase y distribución de los dos pasos.
- `prompts/`: prompts exactos usados y sus revisiones.
- `candidates/`: respuestas del modelo, incluidos intentos rechazados que nunca alimentan el cuadro siguiente.
- `accepted-crops/`: recortes aceptados y recompuestos, usados en la cadena siguiente.
- `frames/`: 24 exposiciones finales, incluido el original.
- `huitaca-b1a-2s-12fps.mp4`: encuadre completo, 24 fotogramas a 12 fps, duración de dos segundos.
- `huitaca-b1a-2s-detalle.mp4`: ampliación fija de la zona de movimiento para revisar.
- `index.html`: visor con avance por cuadro, velocidad real o lenta, comparación con el original y notas de revisión.
- `contact-sheet-24.jpg`: hoja de los 24 cuadros.
- `qa.json` y `video-verification.json`: controles técnicos.
- `composition.json` y `compose-final.py`: composición final, máscaras y ajuste local de color. Las entradas aceptadas de la cadena se conservan sin esta corrección para mantener la trazabilidad.

`accept-frame.py` recompone y registra una aceptación ya decidida mediante revisión visual. No genera ni aprueba imágenes por sí mismo. `assemble.sh` monta únicamente las imágenes existentes; `finalize.py` comprueba conteo, duración, unicidad, integridad del original y estabilidad de los píxeles fuera de la máscara.

El video no contiene voz: esta frase contextualiza la escena, pero no se comprime una locución completa en dos segundos. La repetición del reproductor vuelve a la posición inicial y no constituye un bucle de marcha sin salto.

## Lectura visual de la prueba

La alternancia de pies es el objetivo observable del storyboard. Las coordenadas de pose son guías, no mediciones garantizadas: el modelo desplaza menos el torso de lo planeado. Persisten pequeñas variaciones en mirada, textura y pliegues de la manta. La prueba permite evaluar estas limitaciones sin atribuir al modelo una marcha perfecta.
