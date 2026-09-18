# QA · wayuu-foundation-03-medium

## territorio_alta_guajira--canon

- Estado: `REJECTED_V3`.
- Archivo de prueba: `output/imagegen/wayuu/wayuu-foundation-03-medium/territorio_alta_guajira--canon.jpeg`.
- Calidad: pasa; fue generado con `gpt-image-2` en `medium`.
- Encuadre exterior: pasa; la escena llena los cuatro límites y no aparecen
  base, mesa, marco o fondo negro de estudio.
- Geografía y botánica: pasan en esta revisión; costa, planicie y serranía son
  legibles sin cactus saguaro.
- Hard fail de profundidad: al retirar el soporte visible, la corrección dejó
  la escena demasiado cercana a un collage plano. No hay suficiente distancia
  física entre primer plano, plano medio y fondo, ni oclusión o aire real para
  sentir un diorama tridimensional.
- Decisión: no ingerir, no publicar y no usar como referencia.

## Corrección V4

La tanda `wayuu-foundation-04-medium-layered-depth` conserva `medium` y el
encuadre inmersivo. Vuelve obligatorias las capas físicas a distintas
distancias —con cantos internos, aire, oclusiones y sombras proyectadas— pero
mantiene fuera del cuadro el perímetro, la base y el cartón soporte.
