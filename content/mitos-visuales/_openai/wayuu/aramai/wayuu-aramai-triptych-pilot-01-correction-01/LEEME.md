# OpenAI · tríptico · Arámai

Paquete inmutable. No llama la API y no contiene la clave.

- Modelo: `gpt-image-2`.
- Entrada horizontal 16:9: `high`.
- Acto vertical 9:16: `medium`.
- Huella cuadrada 1:1: `medium`.
- Generación: desde texto, sin subir imágenes locales.
- Puerta editorial: Arámai se revisa como piloto; no se produce otro tríptico Wayúu sin aprobación explícita del editor.
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
  --prompt-file content/mitos-visuales/_openai/wayuu/aramai/wayuu-aramai-triptych-pilot-01-correction-01/prompts/acto.prompt.txt \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out output/imagegen/wayuu/triptychs/wayuu-aramai-triptych-pilot-01-correction-01/acto.jpeg

```

Lote de corrección parcial: acto. Sustituye sólo las piezas aprobadas explícitamente; no sobrescribe lotes anteriores.
