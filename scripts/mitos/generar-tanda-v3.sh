#!/usr/bin/env bash
# Genera tandas de biblia V3 ya preparadas por prepare-biblia-tanda-v3.mjs.
#
#   scripts/mitos/generar-tanda-v3.sh koguis/tanda-01-tipos katios/tanda-02-tipos-rehechas
#
# Un proceso por corpus y tanda: image_gen.py exige --out-dir y de `out` solo
# conserva el nombre del archivo. La clave sale del .env de la raiz, nunca de
# la linea de comandos. Al final dice que lamina falta y, si fue el filtro de
# OpenAI, en que etapa y por que categoria: una lamina bloqueada no se
# reintenta en bucle, se corrige su diseño o se declara.
set -euo pipefail
cd "$(dirname "$0")/../.."
ENV=/Users/alegut/MyApps/Personal/mitos_colombia/.env
OPENAI_API_KEY=$(grep '^OPENAI_API_KEY=' "$ENV" | cut -d= -f2- | tr -d "\"'")
export OPENAI_API_KEY
LOGS=output/imagegen/_logs
mkdir -p "$LOGS"

for ct in "$@"; do
  c=${ct%%/*}; t=${ct##*/}
  req=content/mitos-visuales/_openai/$c/biblia-v3/$t/requests.jsonl
  [ -f "$req" ] || { echo "no existe $req" >&2; exit 1; }
  /usr/bin/python3 ~/.codex/skills/.system/imagegen/scripts/image_gen.py generate-batch \
    --no-augment --concurrency 3 --max-attempts 2 \
    --input "$req" --out-dir "output/imagegen/$c/biblia-v3/$t" > "$LOGS/$c--$t.log" 2>&1 &
done
wait

for ct in "$@"; do
  c=${ct%%/*}; t=${ct##*/}
  total=0; hechas=0
  for f in content/mitos-visuales/_openai/$c/biblia-v3/$t/prompts/*.prompt.txt; do
    j=$(basename "$f" .prompt.txt); total=$((total + 1))
    if [ -f "output/imagegen/$c/biblia-v3/$t/$j.jpeg" ]; then hechas=$((hechas + 1)); else echo "  FALTA $c $j"; fi
  done
  echo "$c/$t: $hechas de $total"
  grep -o "moderation_stage': '[a-z]*', 'categories': \[[^]]*\]" "$LOGS/$c--$t.log" | sed 's/^/  filtro: /' || true
done
