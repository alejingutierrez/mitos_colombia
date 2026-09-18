# El viaje del más allá — cierre de guion y keyframes

Estado: **guion y 28 keyframes terminados con selección editorial y notas**.

## Entrega

- Guion técnico: `preproduccion-01/GUION-TECNICO.md`.
- Plan narrativo vigente: `preproduccion-01/plan.json`.
- Selección verificable: `produccion-01/selection.json`.
- Galería y cinco láminas: `output/imagegen/wayuu/keyframes/el-viaje-del-mas-alla-review-01/`.
- Formato: 28 JPEG, 864×1536, calidad `medium`, `gpt-image-2`, generación sólo desde texto.
- Duración estimada: 252 s para 478 palabras. No hay todavía medición de voz.

## Producción y QA

Se produjeron 49 imágenes: 28 bases y 21 correcciones. La selección conserva 28 y mantiene las 21 versiones superadas para auditoría. Se revisaron los 28 originales elegidos y las cinco láminas de secuencia; los SHA, formato y dimensiones quedaron verificados en `verification.json`.

El arco visual mantiene papercut V2 desde el duelo nocturno hasta el regreso: hojas mate casi planas, bordes internos visibles, aire y sombras entre capas. El realismo mágico procede del relato: camino que se alarga, mar transitable, lluvia anfitriona, boa-banco, sombras animales, equivalencias con conejos y frutos, límite de Pülowi y sombra final hacia Jepira.

## Error detectado y aprendizaje consolidado

La ficha original del viudo reunía dos estados incompatibles —joven y envejecido— y el generador adelantó canas y barba larga en planos tempranos. La corrección no fue estética sino estructural: se creó `viudo_joven` como entidad exclusiva para los planos anteriores al regreso. El estado envejecido sólo aparece desde b16a.

Regla permanente: antes de congelar prompts, separar como entidades o descripciones mutuamente excluyentes cualquier cambio de edad, vestuario, materia o forma. Cada keyframe recibe únicamente el estado vigente. La misma revisión detectó y corrigió una flecha que se leía como lanza, su transferencia accidental al viudo, conejos vestidos y humanos convertidos en cuerpos-ahuyama.

## Alcance

Este cierre incluye guion, storyboard, prompts, keyframes y QA editorial. No incluye voz, música, animación, montaje ni publicación. El usuario todavía debe aprobar el conjunto mostrado.

Balance de campaña al cierre: **11/27 paquetes completos, 212 keyframes seleccionados y 313 generaciones nuevas**. Próximo mito: **Guanurú**. `El incesto` conserva b5a y b5b pendientes de revisión del proveedor.
