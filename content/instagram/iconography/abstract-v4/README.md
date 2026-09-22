# Colección abstracta v4

50 originales generados el 19 de septiembre de 2026 mediante la API de OpenAI,
modelo `gpt-image-2.5-sunburst`, calidad `medium`, PNG de 1024 × 1024 y
`background=transparent`. Tanda piloto de 4 y tanda restante de 46, concurrencia 5.

Formas de papel plegado y recortado, verde selva, ocre y arcilla. La colección
sirve a varias comunidades: no representa personajes, objetos rituales ni
emblemas culturales. Los nombres indican funciones narrativas, no significados
tradicionales. El marco visual es el papel recortado de la dirección compartida.

- `brief.json`: intención, nombres, familias y prompts completos.
- `jobs.jsonl`: 50 trabajos; `pilot.jsonl` y `remaining.jsonl`: partición ejecutada.
- `manifest.json`: parámetros, SHA-256 de originales y prompts, alfa y márgenes.
- `public/motifs/carousel/abstract-v4/`: originales pagados, conservar en git.
- `output/instagram/iconography/abstract-v4/`: índice visual y ZIP regenerables.

Se utilizó `image_gen.py generate-batch` de la skill imagegen, con la clave local
en `OPENAI_API_KEY`. No se adjuntaron actas, guiones ni imágenes del archivo.
Repetir la generación consume créditos y no produce los mismos bytes.

Para verificar los archivos de la tanda, archivarlos sin sustituir originales
distintos y reconstruir el índice y ZIP:

```bash
node scripts/instagram/abstract-icons.mjs
```

El script lee `output/imagegen/instagram-abstract-v4/`. Comprueba 50 PNG distintos,
alfa real, resolución y margen antes de archivar. El taller puede usar una
máscara CSS para mostrar la forma con tinta de la paleta; no altera el original.
