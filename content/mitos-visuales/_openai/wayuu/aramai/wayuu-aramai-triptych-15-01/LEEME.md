# OpenAI · tríptico · Arámai

Paquete inmutable. No llama la API y no contiene la clave.

- Modelo: `gpt-image-2`.
- Entrada horizontal 16:9: `high`.
- Acto vertical 9:16: `medium`.
- Huella cuadrada 1:1: `medium`.
- Generación: desde texto, sin subir imágenes locales.
- Puerta editorial: El usuario eligió las direcciones 1 y 5 y autorizó el tríptico completo del primer mito. Se presentan las tres piezas para revisión conjunta; esta autorización no publica ni habilita los demás mitos..
- Encuadre: dentro del diorama, sin perímetro/base/cartón soporte visibles.
- Profundidad: capas internas a distintas distancias, con aire, oclusiones y sombras.

```bash
export IMAGEGEN_PYTHON=/tmp/mitos-imagegen/bin/python
set -a
source .env
set +a

# entrada · 16:9 · high · images.generate
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py generate \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/wayuu/aramai/wayuu-aramai-triptych-15-01/prompts/entrada.prompt.txt \
  --size 1536x864 --quality high --output-format jpeg --no-augment \
  --out output/imagegen/wayuu/triptychs/wayuu-aramai-triptych-15-01/entrada.jpeg

# acto · 9:16 · medium · images.generate
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py generate \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/wayuu/aramai/wayuu-aramai-triptych-15-01/prompts/acto.prompt.txt \
  --size 864x1536 --quality medium --output-format jpeg --no-augment \
  --out output/imagegen/wayuu/triptychs/wayuu-aramai-triptych-15-01/acto.jpeg

# huella · 1:1 · medium · images.generate
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py generate \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/wayuu/aramai/wayuu-aramai-triptych-15-01/prompts/huella.prompt.txt \
  --size 1024x1024 --quality medium --output-format jpeg --no-augment \
  --out output/imagegen/wayuu/triptychs/wayuu-aramai-triptych-15-01/huella.jpeg

```

Revisar las tres piezas juntas antes de ingerir. Una pieza fallida abre un paquete nuevo; no se sobrescribe éste.
