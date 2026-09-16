# OpenAI · Popón y el sueño del zipa

Paquete reproducible de 15 keyframe(s). La clave se lee sólo desde el `.env` ignorado.

- Modelo: `gpt-image-2`
- Calidad: `medium`
- Tamaño maestro: `1024x1536`
- Método: `images.edit` cuando el plano tiene referencias; `images.generate` cuando no las necesita.
- Regla: nunca reemplazar un keyframe existente; todo reintento requiere revisión explícita.

## Preparar el cliente temporal

```bash
python3 -m venv /tmp/mitos-imagegen
/tmp/mitos-imagegen/bin/python -m pip install 'openai>=2.0.0'
export IMAGEGEN_PYTHON=/tmp/mitos-imagegen/bin/python
set -a
source .env
set +a
```

## Generar

Las referencias aparecen en el mismo orden que en el prompt y `jobs.json`.

```bash
# b1a · primer_plano · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/popon/b1a.prompt.txt \
  --image content/videos/muiscas/biblia/zipa_bacata.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/popon/generated/b1a.jpeg

# b1b · primer_plano · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/popon/b1b.prompt.txt \
  --image content/videos/muiscas/biblia/zipa_bacata.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/popon/generated/b1b.jpeg

# b2b · diagonal · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/popon/b2b.prompt.txt \
  --image content/videos/muiscas/mitos/popon/entrada.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/popon/generated/b2b.jpeg

# b3a · figura_pequena · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/popon/b3a.prompt.txt \
  --image content/videos/muiscas/biblia/popon_jeque.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/popon/generated/b3a.jpeg

# b3b · umbral · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/popon/b3b.prompt.txt \
  --image content/videos/muiscas/biblia/popon_jeque.jpg \
  --image content/videos/muiscas/biblia/salon_jeques.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/popon/generated/b3b.jpeg

# b4b · diagonal · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/popon/b4b.prompt.txt \
  --image content/videos/muiscas/biblia/salon_jeques.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/popon/generated/b4b.jpeg

# b5a · peso_contrario · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/popon/b5a.prompt.txt \
  --image content/videos/muiscas/biblia/popon_jeque.jpg \
  --image content/videos/muiscas/biblia/zipa_bacata.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/popon/generated/b5a.jpeg

# b5b · figura_pequena · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/popon/b5b.prompt.txt \
  --image content/videos/muiscas/biblia/popon_jeque.jpg \
  --image content/videos/muiscas/biblia/salon_jeques.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/popon/generated/b5b.jpeg

# b6a · enfrentados · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/popon/b6a.prompt.txt \
  --image content/videos/muiscas/biblia/popon_jeque.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/popon/generated/b6a.jpeg

# b6b · figura_pequena · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/popon/b6b.prompt.txt \
  --image content/videos/muiscas/biblia/popon_jeque.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/popon/generated/b6b.jpeg

# b7a · peso_contrario · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/popon/b7a.prompt.txt \
  --image content/videos/muiscas/biblia/guatavita_llamas.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/popon/generated/b7a.jpeg

# b7b · peso_contrario · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/popon/b7b.prompt.txt \
  --image content/videos/muiscas/biblia/zipa_bacata.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/popon/generated/b7b.jpeg

# b8b · diagonal · images.generate
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py generate \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/popon/b8b.prompt.txt \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/popon/generated/b8b.jpeg

# b9a · paisaje_abierto · images.generate
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py generate \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/popon/b9a.prompt.txt \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/popon/generated/b9a.jpeg

# b9b · paisaje_abierto · images.generate
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py generate \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/popon/b9b.prompt.txt \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/popon/generated/b9b.jpeg

```

## Revisar e ingerir

Después de generar y revisar:

```bash
npm run mitos:ingest:keyframes -- --comunidad muiscas --slug popon --local-dir content/mitos-visuales/_openai/muiscas/popon/generated --jobs content/mitos-visuales/_openai/muiscas/popon/jobs.json
npm run mitos:estado -- --comunidad muiscas --detalle
```
