#!/usr/bin/env bash
# Produce la biblia V3 entera de un corpus, capa por capa y en el orden del
# taller, sin detenerse a revisar entre capas. Lo pidio el editor el
# 2026-09-28 para producir en masa las biblias que faltan y revisarlas al
# final: cada capa se registra en APROBACIONES.json como «producida en masa,
# pendiente de revision», no como aprobada a ojo.
#
#   scripts/mitos/producir-biblia-v3.sh misak-guambianos
#
# Lo que el filtro de OpenAI bloquea se reintenta UNA vez con la composicion
# recatada (--pudor); lo que vuelve a bloquearse queda en BLOQUEADAS.txt de la
# biblia. Las tandas previas sin RECHAZADO.md (tipos con escenario del
# 2026-09-25) se rechazan antes de empezar.
set -uo pipefail
cd "$(dirname "$0")/../.."
c=$1
b=content/mitos-visuales/_openai/$c/biblia-v3
mkdir -p "$b"
NOTA="Producida en masa el 2026-09-28 por pedido del editor; pendiente de su revision en hoja."

for t in $(ls "$b" 2>/dev/null | grep '^tanda-\|^piloto-'); do
  [ -f "$b/$t/RECHAZADO.md" ] && continue
  printf '%s\n' "# Rechazada por el editor el 2026-09-26" "" \
    "Generada antes de las reglas de papel hueso. La sustituye la produccion en" \
    "masa del 2026-09-28 con \`producir-biblia-v3.sh\`." > "$b/$t/RECHAZADO.md"
done

: > "$b/BLOQUEADAS.txt"
for capa in tipos mortales miticos colectivos animales atrezo mundo paisajes; do
  salida=$(node scripts/mitos/prepare-biblia-tanda-v3.mjs --corpus "$c" --capa "$capa" 2>&1 | head -1)
  echo "$c · $capa · $salida"
  case "$salida" in *FUERA*) echo "$c · DETENIDO en $capa"; exit 1;; *"sin fichas"*|*"ya preparada"*) continue;; esac
  t=$(ls "$b" | grep -- "-$capa\$" | sort | tail -1)
  scripts/mitos/generar-tanda-v3.sh "$c/$t" | sed "s/^/  /"
  node scripts/mitos/prepare-biblia-tanda-v3.mjs --aprobar "$c" --capa "$capa" --tanda "$t" --nota "$NOTA" > /dev/null

  # Reintento recatado de lo que no llego a disco.
  faltan=$(node -e '
    const f=require("./'"$b/$t"'/freeze.json"); const fs=require("fs");
    const m=new Set(f.fichas.filter(x=>!fs.existsSync("output/imagegen/'"$c"'/biblia-v3/'"$t"'/"+x.job+".jpeg")).map(x=>x.modelo));
    console.log([...m].join(","))')
  if [ -n "$faltan" ]; then
    node scripts/mitos/prepare-biblia-tanda-v3.mjs --corpus "$c" --capa "$capa" --modelos "$faltan" --pudor > /dev/null 2>&1
    r=$(ls "$b" | grep -- "-$capa-recatadas\$" | sort | tail -1)
    if [ -n "$r" ]; then
      scripts/mitos/generar-tanda-v3.sh "$c/$r" | sed "s/^/  /"
      node scripts/mitos/prepare-biblia-tanda-v3.mjs --aprobar "$c" --capa "$capa" --tanda "$r" --nota "$NOTA" > /dev/null
      node -e '
        const f=require("./'"$b/$r"'/freeze.json"); const fs=require("fs");
        for (const x of f.fichas) if(!fs.existsSync("output/imagegen/'"$c"'/biblia-v3/'"$r"'/"+x.job+".jpeg")) console.log("'"$capa"'\t"+x.entidad+"\t"+x.vista);' >> "$b/BLOQUEADAS.txt"
    fi
  fi
done
echo "$c · TERMINADO · bloqueadas: $(wc -l < "$b/BLOQUEADAS.txt" | tr -d ' ')"
