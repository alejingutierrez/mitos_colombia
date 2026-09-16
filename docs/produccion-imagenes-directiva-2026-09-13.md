# Directiva de producción de imágenes · 13 de septiembre de 2026

El usuario indicó durante la primera tanda de la biblia Huitoto:

> LAS IMAGENES se generan con nuestra api paga de open ai
>
> es siempre gpt 2.5 sunburst y calidad high

Para nuevas generaciones de imágenes solicitadas en este proyecto, usar la API
paga configurada y el identificador exacto `gpt-image-2.5-sunburst`, con
`quality: high`. Esta instrucción del usuario prevalece sobre la recomendación
anterior de `gpt-image-2` / `medium` de los documentos V3 y sobre el modo
integrado predeterminado de imagegen. No cambiar de modelo o calidad sin una
instrucción posterior del usuario. No modifica archivos ya generados.

La tanda Huitoto 01 guarda la configuración efectiva en
`output/imagegen/huitotos/biblia/tanda-01-piloto/freeze.json` y sus solicitudes en
`requests-v1.jsonl`. Se usa el CLI imagegen existente, sin modificarlo.

Guardar originales API, prompts, versiones, dimensiones y hashes. Revisar el
arte y la continuidad antes de promoverlo; generación no equivale a publicación.
