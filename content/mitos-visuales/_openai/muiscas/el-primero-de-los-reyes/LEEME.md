# OpenAI · Garancheda, el primero de los reyes

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
# b1b · primer_plano · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/el-primero-de-los-reyes/b1b.prompt.txt \
  --image content/videos/muiscas/biblia/chiguachi_nina.jpg \
  --image content/videos/muiscas/biblia/quiquitzua_nina.jpg \
  --image content/videos/muiscas/biblia/rio_prueba.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/el-primero-de-los-reyes/generated/b1b.jpeg

# b2a · figura_pequena · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/el-primero-de-los-reyes/b2a.prompt.txt \
  --image content/videos/muiscas/biblia/rio_prueba.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/el-primero-de-los-reyes/generated/b2a.jpeg

# b2b · peso_contrario · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/el-primero-de-los-reyes/b2b.prompt.txt \
  --image content/videos/muiscas/biblia/chiguachi_nina.jpg \
  --image content/videos/muiscas/biblia/rio_prueba.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/el-primero-de-los-reyes/generated/b2b.jpeg

# b3a · primer_plano · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/el-primero-de-los-reyes/b3a.prompt.txt \
  --image content/videos/muiscas/biblia/figura_barro_amarillo.jpg \
  --image content/videos/muiscas/biblia/figura_tallos_huecos.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/el-primero-de-los-reyes/generated/b3a.jpeg

# b3b · peso_contrario · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/el-primero-de-los-reyes/b3b.prompt.txt \
  --image content/videos/muiscas/biblia/abuelo_narrador.jpg \
  --image content/videos/muiscas/biblia/rio_prueba.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/el-primero-de-los-reyes/generated/b3b.jpeg

# b4a · paisaje_abierto · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/el-primero-de-los-reyes/b4a.prompt.txt \
  --image content/videos/muiscas/biblia/poblado_nuevo.jpg \
  --image content/videos/muiscas/biblia/rio_prueba.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/el-primero-de-los-reyes/generated/b4a.jpeg

# b4b · peso_contrario · images.generate
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py generate \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/el-primero-de-los-reyes/b4b.prompt.txt \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/el-primero-de-los-reyes/generated/b4b.jpeg

# b5a · primer_plano · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/el-primero-de-los-reyes/b5a.prompt.txt \
  --image content/videos/muiscas/biblia/esmeralda_algodones.jpg \
  --image content/videos/muiscas/biblia/copo_algodon.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/el-primero-de-los-reyes/generated/b5a.jpeg

# b5b · peso_contrario · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/el-primero-de-los-reyes/b5b.prompt.txt \
  --image content/videos/muiscas/biblia/chiguachi_nina.jpg \
  --image content/videos/muiscas/biblia/rio_prueba.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/el-primero-de-los-reyes/generated/b5b.jpeg

# b6b · primer_plano · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/el-primero-de-los-reyes/b6b.prompt.txt \
  --image content/videos/muiscas/mitos/el-primero-de-los-reyes/acto.jpg \
  --image content/videos/muiscas/biblia/copo_algodon.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/el-primero-de-los-reyes/generated/b6b.jpeg

# b7a · diagonal · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/el-primero-de-los-reyes/b7a.prompt.txt \
  --image content/videos/muiscas/mitos/el-primero-de-los-reyes/acto.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/el-primero-de-los-reyes/generated/b7a.jpeg

# b7b · peso_contrario · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/el-primero-de-los-reyes/b7b.prompt.txt \
  --image content/videos/muiscas/biblia/abuelo_narrador.jpg \
  --image content/videos/muiscas/biblia/rio_prueba.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/el-primero-de-los-reyes/generated/b7b.jpeg

# b8a · primer_plano · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/el-primero-de-los-reyes/b8a.prompt.txt \
  --image content/videos/muiscas/biblia/chiguachi_nina.jpg \
  --image content/videos/muiscas/biblia/copo_algodon.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/el-primero-de-los-reyes/generated/b8a.jpeg

# b8b · diagonal · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/el-primero-de-los-reyes/b8b.prompt.txt \
  --image content/videos/muiscas/biblia/copo_algodon.jpg \
  --image content/videos/muiscas/biblia/rio_prueba.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/el-primero-de-los-reyes/generated/b8b.jpeg

# b9a · enfrentados · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/el-primero-de-los-reyes/b9a.prompt.txt \
  --image content/videos/muiscas/biblia/chiguachi_nina.jpg \
  --image content/videos/muiscas/biblia/quiquitzua_nina.jpg \
  --image content/videos/muiscas/biblia/rio_prueba.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/el-primero-de-los-reyes/generated/b9a.jpeg

```

## Revisar e ingerir

Después de generar y revisar:

```bash
npm run mitos:ingest:keyframes -- --comunidad muiscas --slug el-primero-de-los-reyes --local-dir content/mitos-visuales/_openai/muiscas/el-primero-de-los-reyes/generated --jobs content/mitos-visuales/_openai/muiscas/el-primero-de-los-reyes/jobs.json
npm run mitos:estado -- --comunidad muiscas --detalle
```
