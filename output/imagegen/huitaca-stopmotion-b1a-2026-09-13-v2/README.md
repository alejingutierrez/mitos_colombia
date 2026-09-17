# Huitaca b1a prueba de movimiento corregida

12 cuadros a 12 fps, duración de 1 segundo, 1080×1920. El primer cuadro es el keyframe original; los otros once contienen ediciones nuevas con GPT Image 2.5 Sunburst, calidad high. Guion: «Después del paso del maestro llegó una mujer que caminaba de noche».

La prueba aplica revisión por hitos y de cada pose antes de generar descendientes, correcciones desde la última pose aceptada, máscaras locales y composición del elemento móvil sobre el decorado original. Se realizaron 17 solicitudes de imagen: 11 poses aceptadas, 5 candidatos rechazados y una placa de fondo para reconstruir el pequeño espacio oculto por las piernas. Las máscaras de contorno se extraen en el equipo; no generan nuevas poses.

El movimiento queda limitado a piernas y parte inferior de la manta. El torso, los brazos y el cabello permanecen fijos: es una prueba de marcha localizada, no una caminata completa final. No hay interpolación ni desplazamiento artificial de cámara. El cuadro 12 llega al contacto antes de lo previsto en el prompt. Al repetirlo hay un retorno al primer estado.

La comprobación de los PNG confirma 12 imágenes distintas, primer cuadro original y cero píxeles cambiados fuera de la envolvente declarada de piernas y manta. La región de fondo descubierta al mover las piernas usa una reparación fija; sus bordes pueden requerir acabado para un primer plano.

Archivos principales: `huitaca-v2-12fps-1s.mp4`, `huitaca-v2-detalle-12fps-1s.mp4`, `huitaca-v2-detalle-3fps.mp4` e `index.html`. El visor permite comparar el original, revisar cada exposición y leer su prompt.

Trazabilidad: `manifest.json`, `metadata`, `prompts`, `logs`, `raw` y `reference`. `approved` contiene las composiciones de trabajo para revisar poses; `delivery` contiene los doce cuadros del montaje tras limpiar el suelo con máscaras de contorno. `qa-final.json` registra conteo, tiempos, hashes y zonas estáticas. El CLI no guardó consumo de tokens ni IDs de respuesta; no se afirma un costo exacto.

Reconstrucción local: `bash refine-matte.sh 2 3 4 5 6 7 8 9 10 11 12`, `bash export.sh` y el Python de dependencias de Codex para `finalize.py`. Las máscaras y las imágenes ya están guardadas; estos pasos no llaman a OpenAI. El sitio y los keyframes canónicos no se modificaron.
