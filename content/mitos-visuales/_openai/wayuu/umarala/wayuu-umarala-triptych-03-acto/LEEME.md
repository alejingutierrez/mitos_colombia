# OpenAI · tríptico · Umaralá

Paquete inmutable. No llama la API y no contiene la clave.

- Modelo: `gpt-image-2`.
- Entrada horizontal 16:9: `high`.
- Acto vertical 9:16: `medium`.
- Huella cuadrada 1:1: `medium`.
- Generación: desde texto, sin subir imágenes locales.
- Puerta editorial: Campaña completa autorizada; QA por orientación y publicación aditiva sin borrar versiones..
- Encuadre: dentro del diorama, sin perímetro/base/cartón soporte visibles.
- Profundidad: capas internas a distintas distancias, con aire, oclusiones y sombras.

```bash
export IMAGEGEN_PYTHON=/tmp/mitos-imagegen/bin/python
set -a
source .env
set +a

# acto · 9:16 · medium · images.generate
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py generate \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/wayuu/umarala/wayuu-umarala-triptych-03-acto/prompts/acto.prompt.txt \
  --size 864x1536 --quality medium --output-format jpeg --no-augment \
  --out output/imagegen/wayuu/triptychs/wayuu-umarala-triptych-03-acto/acto.jpeg

```

Lote de corrección parcial: acto. Sustituye sólo las piezas aprobadas explícitamente; no sobrescribe lotes anteriores.
