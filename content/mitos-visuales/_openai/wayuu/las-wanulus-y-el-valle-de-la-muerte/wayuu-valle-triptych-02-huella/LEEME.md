# OpenAI · tríptico · Las Wanurü y el valle de la muerte

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

# huella · 1:1 · medium · images.generate
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py generate \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/wayuu/las-wanulus-y-el-valle-de-la-muerte/wayuu-valle-triptych-02-huella/prompts/huella.prompt.txt \
  --size 1024x1024 --quality medium --output-format jpeg --no-augment \
  --out output/imagegen/wayuu/triptychs/wayuu-valle-triptych-02-huella/huella.jpeg

```

Lote de corrección parcial: huella. Sustituye sólo las piezas aprobadas explícitamente; no sobrescribe lotes anteriores.
