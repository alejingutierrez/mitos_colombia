# OpenAI · El Bermejo aspira a gobernar

Paquete reproducible de 9 keyframe(s). La clave se lee sólo desde el `.env` ignorado.

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
# b1a · simetria
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/el-bermejo-aspira-a-ser-rey/b1a.prompt.txt \
  --image content/videos/muiscas/mitos/el-bermejo-aspira-a-ser-rey/entrada.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/el-bermejo-aspira-a-ser-rey/generated/b1a.jpeg

# b5a · primer_plano
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/el-bermejo-aspira-a-ser-rey/b5a.prompt.txt \
  --image content/videos/muiscas/videos/el-bermejo-aspira-a-ser-rey/keyframes/b4b.jpg \
  --image content/videos/muiscas/biblia/regalos_devueltos.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/el-bermejo-aspira-a-ser-rey/generated/b5a.jpeg

# b5b · figura_pequena
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/el-bermejo-aspira-a-ser-rey/b5b.prompt.txt \
  --image content/videos/muiscas/biblia/regalos_devueltos.jpg \
  --image content/videos/muiscas/mitos/el-bermejo-aspira-a-ser-rey/entrada.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/el-bermejo-aspira-a-ser-rey/generated/b5b.jpeg

# b6b · diagonal
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/el-bermejo-aspira-a-ser-rey/b6b.prompt.txt \
  --image content/videos/muiscas/biblia/gameza_cacique.jpg \
  --image content/videos/muiscas/mitos/el-bermejo-aspira-a-ser-rey/acto.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/el-bermejo-aspira-a-ser-rey/generated/b6b.jpeg

# b7a · peso_contrario
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/el-bermejo-aspira-a-ser-rey/b7a.prompt.txt \
  --image content/videos/muiscas/biblia/bermejo_forastero.jpg \
  --image content/videos/muiscas/mitos/el-bermejo-aspira-a-ser-rey/acto.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/el-bermejo-aspira-a-ser-rey/generated/b7a.jpeg

# b7b · peso_contrario
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/el-bermejo-aspira-a-ser-rey/b7b.prompt.txt \
  --image content/videos/muiscas/biblia/gameza_cacique.jpg \
  --image content/videos/muiscas/mitos/el-bermejo-aspira-a-ser-rey/acto.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/el-bermejo-aspira-a-ser-rey/generated/b7b.jpeg

# b8a · peso_contrario
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/el-bermejo-aspira-a-ser-rey/b8a.prompt.txt \
  --image content/videos/muiscas/biblia/bermejo_forastero.jpg \
  --image content/videos/muiscas/mitos/el-bermejo-aspira-a-ser-rey/entrada.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/el-bermejo-aspira-a-ser-rey/generated/b8a.jpeg

# b8b · peso_contrario
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/el-bermejo-aspira-a-ser-rey/b8b.prompt.txt \
  --image content/videos/muiscas/biblia/bermejo_forastero.jpg \
  --image content/videos/muiscas/mitos/el-bermejo-aspira-a-ser-rey/acto.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/el-bermejo-aspira-a-ser-rey/generated/b8b.jpeg

# b9a · figura_pequena
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/el-bermejo-aspira-a-ser-rey/b9a.prompt.txt \
  --image content/videos/muiscas/biblia/bermejo_forastero.jpg \
  --image content/videos/muiscas/mitos/el-bermejo-aspira-a-ser-rey/entrada.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/el-bermejo-aspira-a-ser-rey/generated/b9a.jpeg

```

## Revisar e ingerir

Después de generar y revisar:

```bash
npm run mitos:ingest:keyframes -- --comunidad muiscas --slug el-bermejo-aspira-a-ser-rey --local-dir content/mitos-visuales/_openai/muiscas/el-bermejo-aspira-a-ser-rey/generated --jobs content/mitos-visuales/_openai/muiscas/el-bermejo-aspira-a-ser-rey/jobs.json
npm run mitos:estado -- --comunidad muiscas --detalle
```
