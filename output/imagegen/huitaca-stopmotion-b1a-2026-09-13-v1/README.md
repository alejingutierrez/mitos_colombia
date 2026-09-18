# Huitaca muisca · prueba stop motion · b1a

La frase original es: «Después del paso del maestro llegó una mujer que caminaba de noche».

Prueba autorizada el 13 de septiembre de 2026: primer keyframe existente + 11 ediciones sucesivas con `gpt-image-2.5-sunburst` = 12 exposiciones a 12 fps, duración exacta de 1 segundo. La frase guía la acción; no se intenta comprimir toda su locución dentro de un segundo.

Cada solicitud usa el cuadro inmediatamente anterior como imagen 1. Desde el cuadro 3, añade el cuadro original como referencia de identidad y decorado. Se conserva cada respuesta cruda del modelo en `frames/`; no se interpolan cuadros ni se usa un modelo de video.

El personaje camina con alternancia de apoyos y movimientos secundarios de brazos, cabello y manta. Cámara, luna, montañas, muros, cercas y plantas quedan definidos como invariantes. La prueba evalúa si el modelo respeta esas restricciones; no se presupone que sean garantías de píxeles idénticos.

- `manifest.json`: fuente, SHA-256, modelo, parámetros, dependencias y estado de cada cuadro.
- `guion-b1.json`: frase original, descripción del keyframe y fases de movimiento.
- `prompts/`: los 11 prompts exactos enviados al CLI oficial de la skill imagegen.
- `source-b1a.jpg`: copia idéntica de la referencia de entrada.
- `frames/frame-01.png`: conversión sin pérdida adicional del JPEG original; cuenta como primer cuadro.

Modo: CLI/API explícito para seleccionar GPT Image 2.5. Calidad medium, formato PNG, tamaño auto para conservar la composición vertical. Las credenciales se cargan del entorno local y no se guardan aquí. Los keyframes canónicos y el sitio no se modifican.

## Entrega y revisión

- `huitaca-b1a-12fps-1s.mp4`: montaje completo, 864×1536, 12 cuadros, 12 fps y 1 segundo, H.264 sin audio.
- `huitaca-b1a-detalle-12fps-1s.mp4`: recorte fijo ampliado para observar el personaje, mismos 12 cuadros y duración.
- `index.html`: visor con reproducción a 12 fps o 3 fps, avance cuadro a cuadro, comparación con el original y prompts. Incluye los datos de revisión para poder abrirlo localmente sin servidor.
- `contact-sheet-detail.jpg` y `contact-sheet-full.jpg`: hojas con las doce exposiciones.
- `delivery/`: mismos cuadros normalizados a 864×1536 para el montaje. Las salidas crudas permanecen en `frames/`.
- `video-verification.json` y `qa-metrics.json`: comprobación técnica y diferencias visuales diagnósticas.

Para reconstruir el montaje: `bash assemble.sh` desde esta carpeta. Requiere FFmpeg e ImageMagick. `verify.py` revisa conteo, duración, hashes y diferencias; utiliza Pillow y NumPy. No genera nuevas imágenes ni hace llamadas a OpenAI.

## Lectura de esta prueba

El resultado permite evaluar la idea, pero no constituye una animación final aprobada. Hay movimiento en extremidades, pelo y manta; el modelo también redibuja detalles del camino y cambia ligeramente la figura. El apoyo exacto de los pies y la estabilidad del decorado no quedan garantizados mediante instrucciones de texto. Se conservan esas variaciones para evaluar honestamente el método.

Las doce exposiciones no forman un bucle perfecto: al repetir el segundo, el personaje vuelve a su posición de partida. El montaje no emplea interpolación, fundidos, un modelo de video ni estabilización que oculte lo que generó GPT.
