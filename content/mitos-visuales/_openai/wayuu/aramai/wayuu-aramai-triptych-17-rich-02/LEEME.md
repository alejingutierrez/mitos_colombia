# OpenAI · tríptico · Arámai

Paquete inmutable. No llama la API y no contiene la clave.

- Modelo: `gpt-image-2`.
- Entrada horizontal 16:9: `high`.
- Acto vertical 9:16: `medium`.
- Huella cuadrada 1:1: `medium`.
- Generación: desde texto, sin subir imágenes locales.
- Puerta editorial: Mostrar el primer tríptico reproducido al usuario antes de extender la ejecución a los demás. No publicar esta muestra todavía..
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
  --prompt-file content/mitos-visuales/_openai/wayuu/aramai/wayuu-aramai-triptych-17-rich-02/prompts/entrada.prompt.txt \
  --size 1536x864 --quality high --output-format jpeg --no-augment \
  --out output/imagegen/wayuu/triptychs/wayuu-aramai-triptych-17-rich-02/entrada.jpeg

```

Lote de corrección parcial: entrada. Sustituye sólo las piezas aprobadas explícitamente; no sobrescribe lotes anteriores.
