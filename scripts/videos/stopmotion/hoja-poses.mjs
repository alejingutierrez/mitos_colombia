// Hoja de poses (sprite sheet): las 9 poses de un plano en UNA sola llamada.
//
// Técnica tomada del caso de gregschoeninger / Higgsfield (2026-09): una imagen
// MAESTRA manda sobre identidad, materiales, set, cámara y luz; la hoja se pide
// como rejilla exacta sin canales ni bordes; y cada celda lleva su pose
// NUMERADA Y MEDIDA ("se inclina unos 5 grados"), no una fracción abstracta.
//
// Dos ventajas sobre generar fotograma a fotograma:
//  - las 9 poses nacen en la MISMA pasada, así que comparten grano, luz y
//    decorado por construcción: el hervor entre fotogramas no puede aparecer;
//  - una llamada de 8,3 Mpx cuesta menos que nueve de 2,1 Mpx.
// A cambio, cada celda sale a 720x1280 y hay que subirla a 1080x1920.
//
//   node scripts/videos/stopmotion/hoja-poses.mjs --plano p.json --master A.jpg --out <dir> [--size 2160x3840]
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { genImage, rootDir } from "./img.mjs";
import { promptHoja, promptHojaRecorte } from "./prompts.mjs";

const args = process.argv.slice(2);
const flag = (n, d = null) => (args.indexOf(n) === -1 ? d : args[args.indexOf(n) + 1]);
const plano = JSON.parse(await fs.readFile(path.resolve(rootDir, flag("--plano")), "utf8"));
const master = path.resolve(rootDir, flag("--master"));
const dir = path.resolve(rootDir, flag("--out"));
const size = flag("--size", "2160x3840"); // el máximo que admite la API: 8,29 Mpx
const [W, H] = size.split("x").map(Number);
const filas = Number(flag("--filas", 3));
const cols = Number(flag("--cols", 3));
const recorte = args.includes("--recorte");
const desde = Number(flag("--desde", 0));
const hasta = Number(flag("--hasta", 0)) || null;
const celdas = (plano.poses.hoja || []).slice(desde, hasta ?? undefined);
if (!celdas || celdas.length !== filas * cols) throw new Error(`el plano necesita poses.hoja con ${filas * cols} celdas`);

await fs.mkdir(dir, { recursive: true });
const hojaPath = path.join(dir, `hoja-${String(desde).padStart(4, "0")}.${recorte ? "png" : "jpg"}`);
const r = await genImage({
  prompt: (recorte ? promptHojaRecorte : promptHoja)(plano, {
    filas, cols, celdas,
    antes: desde > 0 ? plano.poses.hoja[desde - 1] : "",
    despues: plano.poses.hoja[(hasta ?? 0)] || "",
  }),
  refs: [master],
  outPath: hojaPath,
  quality: flag("--quality", "high"),
  size,
  ...(recorte ? { background: "transparent", formato: "png" } : {}),
  tag: `${plano.plano}/hoja-poses${recorte ? "-recorte" : ""}`,
});
console.log(`hoja ${size}  ${(r.ms / 1000).toFixed(0)}s  $${r.usd.toFixed(4)}  →  $${(r.usd / celdas.length).toFixed(4)} por pose`);

// Recortar la rejilla y subir cada celda al tamaño de entrega.
const cw = Math.floor(W / cols);
const ch = Math.floor(H / filas);
for (let i = 0; i < celdas.length; i++) {
  const cx = (i % cols) * cw;
  const cy = Math.floor(i / cols) * ch;
  const celda = sharp(hojaPath)
    .extract({ left: cx, top: cy, width: cw, height: ch })
    .resize(1088, 1920, { fit: "fill", kernel: "lanczos3" });
  const idx = String(desde + i).padStart(4, "0");
  await (recorte
    ? celda.png().toFile(path.join(dir, `f${idx}.png`))
    : celda.jpeg({ quality: 95 }).toFile(path.join(dir, `f${idx}.jpg`)));
}
console.log(`${celdas.length} celdas de ${cw}×${ch} → f0000…f${String(celdas.length - 1).padStart(4, "0")} a 1088×1920`);
