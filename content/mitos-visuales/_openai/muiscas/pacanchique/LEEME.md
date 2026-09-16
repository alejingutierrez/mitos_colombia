# OpenAI · Pacanchique y Azay

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
# b1a · figura_pequena · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/pacanchique/b1a.prompt.txt \
  --image content/videos/muiscas/mitos/pacanchique/entrada.jpg \
  --image content/videos/muiscas/biblia/refugio_huertos.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/pacanchique/generated/b1a.jpeg

# b1b · enfrentados · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/pacanchique/b1b.prompt.txt \
  --image content/videos/muiscas/mitos/pacanchique/entrada.jpg \
  --image content/videos/muiscas/biblia/refugio_huertos.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/pacanchique/generated/b1b.jpeg

# b2a · diagonal · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/pacanchique/b2a.prompt.txt \
  --image content/videos/muiscas/mitos/pacanchique/entrada.jpg \
  --image content/videos/muiscas/biblia/cercado_bacata.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/pacanchique/generated/b2a.jpeg

# b2b · peso_contrario · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/pacanchique/b2b.prompt.txt \
  --image content/videos/muiscas/biblia/azay_joven.jpg \
  --image content/videos/muiscas/biblia/cercado_bacata.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/pacanchique/generated/b2b.jpeg

# b3b · primer_plano · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/pacanchique/b3b.prompt.txt \
  --image content/videos/muiscas/biblia/planta_hojas_palidas.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/pacanchique/generated/b3b.jpeg

# b4a · diagonal · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/pacanchique/b4a.prompt.txt \
  --image content/videos/muiscas/biblia/azay_joven.jpg \
  --image content/videos/muiscas/biblia/cercado_bacata.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/pacanchique/generated/b4a.jpeg

# b4b · diagonal · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/pacanchique/b4b.prompt.txt \
  --image content/videos/muiscas/mitos/pacanchique/entrada.jpg \
  --image content/videos/muiscas/biblia/cercado_bacata.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/pacanchique/generated/b4b.jpeg

# b5a · primer_plano · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/pacanchique/b5a.prompt.txt \
  --image content/videos/muiscas/biblia/planta_hojas_palidas.jpg \
  --image content/videos/muiscas/biblia/azay_joven.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/pacanchique/generated/b5a.jpeg

# b5b · diagonal · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/pacanchique/b5b.prompt.txt \
  --image content/videos/muiscas/mitos/pacanchique/entrada.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/pacanchique/generated/b5b.jpeg

# b6a · enfrentados · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/pacanchique/b6a.prompt.txt \
  --image content/videos/muiscas/mitos/pacanchique/entrada.jpg \
  --image content/videos/muiscas/biblia/refugio_huertos.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/pacanchique/generated/b6a.jpeg

# b6b · paisaje_abierto · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/pacanchique/b6b.prompt.txt \
  --image content/videos/muiscas/biblia/refugio_huertos.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/pacanchique/generated/b6b.jpeg

# b7a · paisaje_abierto · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/pacanchique/b7a.prompt.txt \
  --image content/videos/muiscas/biblia/refugio_huertos.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/pacanchique/generated/b7a.jpeg

# b7b · diagonal · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/pacanchique/b7b.prompt.txt \
  --image content/videos/muiscas/biblia/pacanchique_joven.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/pacanchique/generated/b7b.jpeg

# b8b · cenital · images.generate
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py generate \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/pacanchique/b8b.prompt.txt \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/pacanchique/generated/b8b.jpeg

# b9a · paisaje_abierto · images.generate
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py generate \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/pacanchique/b9a.prompt.txt \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/pacanchique/generated/b9a.jpeg

```

## Revisar e ingerir

Después de generar y revisar:

```bash
npm run mitos:ingest:keyframes -- --comunidad muiscas --slug pacanchique --local-dir content/mitos-visuales/_openai/muiscas/pacanchique/generated --jobs content/mitos-visuales/_openai/muiscas/pacanchique/jobs.json
npm run mitos:estado -- --comunidad muiscas --detalle
```
