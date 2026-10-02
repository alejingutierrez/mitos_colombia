// Plano QUIETO con cámara escalonada y fuego vivo.
//
// La cámara no se mueve en continuo (eso era una textura de tiempo ajena): da
// 12 pasos por segundo, cada paso sostenido 2 fotogramas, con una amplitud
// total de 4-6 % en todo el plano. El fuego, si lo hay, son los N estados de
// la plancha de fondo recorridos en orden aleatorio SIN repetir vecino (semilla
// fija), nunca en vaivén ni en bucle exacto.
//
//   node scripts/videos/stopmotion/v2/quieto.mjs --imagen A.jpg [--estados <dir con f0000..>] --dur 3.9 --out clip.mp4 [--zoom 0.05] [--sentido in|out] [--pasos 12]
import fs from "node:fs/promises";
import path from "node:path";
import { spawnSync } from "node:child_process";
import sharp from "sharp";
const args = process.argv.slice(2);
const flag = (n, d = null) => (args.indexOf(n) === -1 ? d : args[args.indexOf(n) + 1]);
const imagen = path.resolve(flag("--imagen"));
const estadosDir = flag("--estados") ? path.resolve(flag("--estados")) : null;
const dur = Number(flag("--dur", 4));
const zoom = Number(flag("--zoom", 0.05));
const sentido = flag("--sentido", "in");
const pasos = Number(flag("--pasos", 12));
const out = path.resolve(flag("--out"));
const tmp = path.join(path.dirname(out), `.quieto-${path.basename(out, ".mp4")}`);
await fs.rm(tmp, { recursive: true, force: true }); await fs.mkdir(tmp, { recursive: true });

const fuentes = estadosDir ? (await fs.readdir(estadosDir)).filter((f) => /^f\d{4}\.jpg$/.test(f)).sort().map((f) => path.join(estadosDir, f)) : [imagen];
// Orden aleatorio sin vecinos repetidos, con semilla fija (reproducible).
let semilla = 7;
const rnd = () => { semilla = (semilla * 1103515245 + 12345) & 0x7fffffff; return semilla / 0x7fffffff; };
const n = Math.round(dur * pasos);
const orden = [];
for (let k = 0; k < n; k++) {
  if (fuentes.length === 1) { orden.push(0); continue; }
  let i; do { i = Math.floor(rnd() * fuentes.length); } while (k > 0 && i === orden[k - 1]);
  orden.push(i);
}
const { width: W, height: H } = await sharp(fuentes[0]).metadata();
for (let k = 0; k < n; k++) {
  const t = n > 1 ? k / (n - 1) : 0;
  const z = sentido === "out" ? 1 + zoom * (1 - t) : 1 + zoom * t;
  const w = Math.round(W / z), h = Math.round(H / z);
  await sharp(fuentes[orden[k]]).extract({ left: Math.round((W - w) / 2), top: Math.round((H - h) / 2), width: w, height: h })
    .resize(1080, 1920, { kernel: "lanczos3" }).jpeg({ quality: 95 }).toFile(path.join(tmp, `f${String(k).padStart(4, "0")}.jpg`));
}
const r = spawnSync("ffmpeg", ["-y", "-v", "error", "-framerate", String(pasos), "-i", path.join(tmp, "f%04d.jpg"), "-vf", `fps=24,setsar=1`, "-c:v", "libx264", "-preset", "slow", "-crf", "18", "-pix_fmt", "yuv420p", out], { encoding: "utf8" });
if (r.status !== 0) throw new Error(r.stderr.slice(-1200));
await fs.rm(tmp, { recursive: true, force: true });
console.log(`quieto ${dur}s · ${n} pasos a ${pasos}/s · zoom ${sentido} ${(zoom * 100).toFixed(0)}% · ${fuentes.length} estado(s) → ${path.relative(process.cwd(), out)}`);
