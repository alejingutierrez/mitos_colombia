// Instala la biblia visual Wayúu V4 como referencias del generador de keyframes.
//
// El generador resuelve un ref con "/" contra content/videos/<ref>.jpg, así que
// las fichas tienen que vivir en content/videos/wayuu/biblia/<id>.jpg. Las
// originales son PNG repartidos en tandas dentro de output/imagegen/wayuu-v4.
//
// tanda-01 queda FUERA a propósito: es el piloto que salió fotorrealista —el
// prompt de 6.341 caracteres donde la técnica de papel perdió contra las reglas
// de color—, y la propia biblia lo declara fallido. Su `p10-wanuru` ni siquiera
// es Wanurú: es una enramada con un chinchorro.
//
// Convención de ids: nombre semántico. La tanda 03 (prefijo f) es la lámina de
// figura y se queda con el nombre limpio porque es el ancla de identidad; la
// tanda 02 (prefijo c) es la misma persona EN ESCENA y lleva sufijo `_escena`.
// `tsitsi` choca entre persona y lugar, así que el lugar es `tsitsi_cerro`.
import fs from "node:fs"; import path from "node:path"; import sharp from "sharp";

const B = "output/imagegen/wayuu-v4";
const OUT = "content/videos/wayuu/biblia";
const RE = /^([a-z]+)(\d+)-(.+)-v(\d+)\.(png|jpg)$/;

const mejor = new Map();
for (const t of fs.readdirSync(B).sort()) {
  if (!t.startsWith("tanda-") || t === "tanda-01-piloto") continue;
  for (const f of fs.readdirSync(path.join(B, t)).sort()) {
    const m = RE.exec(f);
    if (!m) continue;
    const [, pref, num, nombre, ver] = m;
    let id = pref === "c" ? `${nombre}_escena` : nombre;
    if (nombre === "tsitsi" && t.startsWith("tanda-17")) id = "tsitsi_cerro";
    id = id.replace(/-/g, "_");
    const prev = mejor.get(id);
    if (!prev || Number(ver) > prev.ver) mejor.set(id, { ver: Number(ver), ruta: path.join(B, t, f), t });
  }
}
fs.mkdirSync(OUT, { recursive: true });
let n = 0;
for (const [id, { ruta }] of [...mejor].sort()) {
  await sharp(ruta).jpeg({ quality: 92, mozjpeg: true }).toFile(path.join(OUT, `${id}.jpg`));
  n += 1;
}
console.log(`[biblia-wayuu] ${n} fichas instaladas en ${OUT}`);
