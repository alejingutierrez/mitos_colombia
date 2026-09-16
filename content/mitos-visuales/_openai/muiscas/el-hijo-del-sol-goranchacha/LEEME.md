# OpenAI · Goranchacha, hijo del Sol

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
# b1a · enfrentados · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/el-hijo-del-sol-goranchacha/b1a.prompt.txt \
  --image content/videos/muiscas/biblia/muchacha_guacheta.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/el-hijo-del-sol-goranchacha/generated/b1a.jpeg

# b1b · paisaje_abierto · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/el-hijo-del-sol-goranchacha/b1b.prompt.txt \
  --image content/videos/muiscas/mitos/el-hijo-del-sol-goranchacha/entrada.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/el-hijo-del-sol-goranchacha/generated/b1b.jpeg

# b2b · cenital · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/el-hijo-del-sol-goranchacha/b2b.prompt.txt \
  --image content/videos/muiscas/mitos/el-hijo-del-sol-goranchacha/entrada.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/el-hijo-del-sol-goranchacha/generated/b2b.jpeg

# b3a · peso_contrario · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/el-hijo-del-sol-goranchacha/b3a.prompt.txt \
  --image content/videos/muiscas/biblia/muchacha_guacheta.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/el-hijo-del-sol-goranchacha/generated/b3a.jpeg

# b3b · peso_contrario · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/el-hijo-del-sol-goranchacha/b3b.prompt.txt \
  --image content/videos/muiscas/mitos/el-hijo-del-sol-goranchacha/entrada.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/el-hijo-del-sol-goranchacha/generated/b3b.jpeg

# b4a · primer_plano · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/el-hijo-del-sol-goranchacha/b4a.prompt.txt \
  --image content/videos/muiscas/biblia/esmeralda_algodones.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/el-hijo-del-sol-goranchacha/generated/b4a.jpeg

# b4b · peso_contrario · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/el-hijo-del-sol-goranchacha/b4b.prompt.txt \
  --image content/videos/muiscas/biblia/muchacha_guacheta.jpg \
  --image content/videos/muiscas/biblia/esmeralda_algodones.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/el-hijo-del-sol-goranchacha/generated/b4b.jpeg

# b5a · primer_plano · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/el-hijo-del-sol-goranchacha/b5a.prompt.txt \
  --image content/videos/muiscas/biblia/esmeralda_algodones.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/el-hijo-del-sol-goranchacha/generated/b5a.jpeg

# b5b · simetria · images.generate
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py generate \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/el-hijo-del-sol-goranchacha/b5b.prompt.txt \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/el-hijo-del-sol-goranchacha/generated/b5b.jpeg

# b6a · diagonal · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/el-hijo-del-sol-goranchacha/b6a.prompt.txt \
  --image content/videos/muiscas/biblia/goranchacha_senor.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/el-hijo-del-sol-goranchacha/generated/b6a.jpeg

# b6b · peso_contrario · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/el-hijo-del-sol-goranchacha/b6b.prompt.txt \
  --image content/videos/muiscas/biblia/goranchacha_senor.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/el-hijo-del-sol-goranchacha/generated/b6b.jpeg

# b7b · primer_plano · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/el-hijo-del-sol-goranchacha/b7b.prompt.txt \
  --image content/videos/muiscas/mitos/el-hijo-del-sol-goranchacha/acto.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/el-hijo-del-sol-goranchacha/generated/b7b.jpeg

# b8a · cenital · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/el-hijo-del-sol-goranchacha/b8a.prompt.txt \
  --image content/videos/muiscas/mitos/el-hijo-del-sol-goranchacha/acto.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/el-hijo-del-sol-goranchacha/generated/b8a.jpeg

# b8b · diagonal · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/el-hijo-del-sol-goranchacha/b8b.prompt.txt \
  --image content/videos/muiscas/biblia/goranchacha_senor.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/el-hijo-del-sol-goranchacha/generated/b8b.jpeg

# b9a · peso_contrario · images.edit
"$IMAGEGEN_PYTHON" /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2 \
  --prompt-file content/mitos-visuales/_openai/muiscas/el-hijo-del-sol-goranchacha/b9a.prompt.txt \
  --image content/videos/muiscas/mitos/el-hijo-del-sol-goranchacha/acto.jpg \
  --size 1024x1536 --quality medium --output-format jpeg --no-augment \
  --out content/mitos-visuales/_openai/muiscas/el-hijo-del-sol-goranchacha/generated/b9a.jpeg

```

## Revisar e ingerir

Después de generar y revisar:

```bash
npm run mitos:ingest:keyframes -- --comunidad muiscas --slug el-hijo-del-sol-goranchacha --local-dir content/mitos-visuales/_openai/muiscas/el-hijo-del-sol-goranchacha/generated --jobs content/mitos-visuales/_openai/muiscas/el-hijo-del-sol-goranchacha/jobs.json
npm run mitos:estado -- --comunidad muiscas --detalle
```
