# QA · wayuu-foundation-02

## territorio_alta_guajira--canon

- Estado: `REJECTED_V2`.
- Archivo de prueba: `output/imagegen/wayuu/wayuu-foundation-02/territorio_alta_guajira--canon.jpeg`.
- Botánica/geografía: corrige la deriva a cactus saguaro y conserva la relación planicie–costa–serranía.
- Hard fail de encuadre: muestra el borde físico y las capas del soporte en la parte inferior, además de un fondo negro de estudio detrás de la maqueta.
- Hard fail de calidad contractual: se produjo en `high`; toda la Biblia debe producirse en `medium`.
- Decisión: no ingerir, no publicar, no usar como referencia y conservar sólo como evidencia de QA.

## Otras tres llamadas

Las generaciones de `macuira_ecotono`, `piichipala_arquitectura` y
`flora_sequia` se interrumpieron antes de escribir archivos cuando cambió la
regla de calidad. No existe una salida aprobable de esas llamadas.

## Corrección V3

La tanda `wayuu-foundation-03-medium` fija `quality: medium` y
`framing: immersive_full_bleed`. Sus prompts prohíben borde exterior, base,
cartón crudo, hojas sueltas, mesa, estudio, ciclorama, marco y vacío fuera del
mundo narrativo.
