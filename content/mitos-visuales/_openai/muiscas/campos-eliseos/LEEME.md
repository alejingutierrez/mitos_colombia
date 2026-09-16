# OpenAI · El camino de las almas

Paquete reproducible de 15 keyframe(s). La clave se lee sólo desde el `.env` ignorado.

- Modelo: `gpt-image-2`
- Calidad: `medium`
- Tamaño maestro: `1024x1536`
- Método: `images.edit` con las referencias enumeradas en `jobs.json`.
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
# b1b · primer_plano
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/campos-eliseos/b1b.prompt.txt \
  --image content/videos/muiscas/biblia/tejedora_alma.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/campos-eliseos/generated/b1b.jpeg

# b2a · paisaje_abierto
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/campos-eliseos/b2a.prompt.txt \
  --image content/videos/muiscas/biblia/barranco_tenebroso.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/campos-eliseos/generated/b2a.jpeg

# b2b · primer_plano
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/campos-eliseos/b2b.prompt.txt \
  --image content/videos/muiscas/mitos/campos-eliseos/entrada.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/campos-eliseos/generated/b2b.jpeg

# b3a · paisaje_abierto
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/campos-eliseos/b3a.prompt.txt \
  --image content/videos/muiscas/biblia/barranco_tenebroso.jpg \
  --image content/videos/muiscas/biblia/rio_de_las_almas.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/campos-eliseos/generated/b3a.jpeg

# b3b · paisaje_abierto
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/campos-eliseos/b3b.prompt.txt \
  --image content/videos/muiscas/biblia/rio_de_las_almas.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/campos-eliseos/generated/b3b.jpeg

# b4a · primer_plano
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/campos-eliseos/b4a.prompt.txt \
  --image content/videos/muiscas/biblia/balsa_arana.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/campos-eliseos/generated/b4a.jpeg

# b4b · paisaje_abierto
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/campos-eliseos/b4b.prompt.txt \
  --image content/videos/muiscas/biblia/rio_de_las_almas.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/campos-eliseos/generated/b4b.jpeg

# b5b · primer_plano
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/campos-eliseos/b5b.prompt.txt \
  --image content/videos/muiscas/mitos/campos-eliseos/acto.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/campos-eliseos/generated/b5b.jpeg

# b6a · cenital
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/campos-eliseos/b6a.prompt.txt \
  --image content/videos/muiscas/biblia/rio_de_las_almas.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/campos-eliseos/generated/b6a.jpeg

# b6b · peso_contrario
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/campos-eliseos/b6b.prompt.txt \
  --image content/videos/muiscas/mitos/campos-eliseos/acto.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/campos-eliseos/generated/b6b.jpeg

# b7a · primer_plano
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/campos-eliseos/b7a.prompt.txt \
  --image content/videos/muiscas/biblia/balsa_arana.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/campos-eliseos/generated/b7a.jpeg

# b7b · diagonal
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/campos-eliseos/b7b.prompt.txt \
  --image content/videos/muiscas/mitos/campos-eliseos/acto.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/campos-eliseos/generated/b7b.jpeg

# b8a · paisaje_abierto
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/campos-eliseos/b8a.prompt.txt \
  --image content/videos/muiscas/mitos/campos-eliseos/huella.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/campos-eliseos/generated/b8a.jpeg

# b8b · diagonal
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/campos-eliseos/b8b.prompt.txt \
  --image content/videos/muiscas/biblia/tejedora_alma.jpg \
  --image content/videos/muiscas/mitos/campos-eliseos/huella.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/campos-eliseos/generated/b8b.jpeg

# b9a · peso_contrario
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/campos-eliseos/b9a.prompt.txt \
  --image content/videos/muiscas/biblia/tejedora_alma.jpg \
  --image content/videos/muiscas/mitos/campos-eliseos/huella.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/campos-eliseos/generated/b9a.jpeg

```

## Revisar e ingerir

Después de generar y revisar:

```bash
npm run mitos:ingest:keyframes -- --comunidad muiscas --slug campos-eliseos --local-dir content/mitos-visuales/_openai/muiscas/campos-eliseos/generated --jobs content/mitos-visuales/_openai/muiscas/campos-eliseos/jobs.json
npm run mitos:estado -- --comunidad muiscas --detalle
```
