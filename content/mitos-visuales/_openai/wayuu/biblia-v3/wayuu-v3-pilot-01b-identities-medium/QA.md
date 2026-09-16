# QA · wayuu-v3-pilot-01b-identities-medium

Fecha: 2026-09-03

Estado: `REJECTED_BEFORE_GENERATION`.

El dry-run confirmó modelo `gpt-image-2`, calidad `medium`, tamaño cuadrado y
salidas correctas. Sin embargo, una restricción genérica todavía repetía el
resumen de acción de Juramía. Aunque el bloque `AVOID` prohibía representarla,
una ficha de identidad no debe recibir instrucciones narrativas contradictorias.
No se llamó la API; la tanda 01c elimina esa línea.
