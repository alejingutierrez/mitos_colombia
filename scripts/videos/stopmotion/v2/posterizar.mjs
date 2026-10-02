// Ley única de tiempo: "a dos". 12 dibujos por segundo, cada uno sostenido
// exactamente 2 fotogramas a 24 fps, con grano NUEVO por dibujo (no por
// fotograma) para que todo el video lea como una sola emulsión.
//
//   node scripts/videos/stopmotion/v2/posterizar.mjs --in clip.mp4 --out clip-a2.mp4 [--cadencia 12|8|24] [--grano 6]
import path from "node:path";
import { spawnSync } from "node:child_process";
const args = process.argv.slice(2);
const flag = (n, d = null) => (args.indexOf(n) === -1 ? d : args[args.indexOf(n) + 1]);
const cad = Number(flag("--cadencia", 12));
const grano = Number(flag("--grano", 6));
// fps=cad deja un dibujo por paso; el ruido se añade a ESA cadencia (un grano
// por dibujo) y fps=24 duplica: los fotogramas de cada pareja son idénticos.
const vf = cad >= 24
  ? `fps=24,noise=alls=${grano}:allf=t+u,setsar=1`
  : `fps=${cad},noise=alls=${grano}:allf=t+u,fps=24,setsar=1`;
const r = spawnSync("ffmpeg", ["-y", "-v", "error", "-i", path.resolve(flag("--in")), "-vf", vf, "-c:v", "libx264", "-preset", "slow", "-crf", "18", "-pix_fmt", "yuv420p", "-an", path.resolve(flag("--out"))], { encoding: "utf8" });
if (r.status !== 0) throw new Error(r.stderr.slice(-1200));
console.log(`posterizado a ${cad} dibujos/s → ${flag("--out")}`);
