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

# huella · 1:1 · medium · images.generate
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py generate \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/wayuu/aramai/wayuu-aramai-triptych-15-huella-03/prompts/huella.prompt.txt \
  --size 1024x1024 --quality medium --output-format jpeg --no-augment \
  --out output/imagegen/wayuu/triptychs/wayuu-aramai-triptych-15-huella-03/huella.jpeg

```

Lote de corrección parcial: huella. Sustituye sólo las piezas aprobadas explícitamente; no sobrescribe lotes anteriores.
