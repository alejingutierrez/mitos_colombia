// Monta los fotogramas de una escalera en un clip de 5 s con cadencia elegida.
//
// La cadencia (imágenes por segundo) se decide al montar, no al generar: de una
// escalera de 33 fotogramas salen versiones de 4, 8 o 16 img/s sin gastar un
// dólar más. Cada imagen se sostiene un número ENTERO de fotogramas de video
// para que el pulso sea regular (el stop-motion real se rueda "a dos" o "a tres").
//
//   node scripts/videos/stopmotion/montar.mjs --dir <carpeta> --out clip.mp4 [--img-s 8] [--fps 24] [--dur 5]
import fs from "node:fs/promises";
import path from "node:path";
import { spawnSync } from "node:child_process";

const args = process.argv.slice(2);
const flag = (n, d = null) => (args.indexOf(n) === -1 ? d : args[args.indexOf(n) + 1]);
const dir = path.resolve(flag("--dir"));
const out = path.resolve(flag("--out"));
const fps = Number(flag("--fps", 24));
const dur = Number(flag("--dur", 5));
const imgS = Number(flag("--img-s", 8));

const todos = (await fs.readdir(dir)).filter((f) => /^f\d{4}\.jpg$/.test(f)).sort();
if (!todos.length) throw new Error(`sin fotogramas f####.jpg en ${dir}`);

// Cuántos fotogramas de video sostiene cada imagen, y cuántas imágenes caben.
const hold = Math.max(1, Math.round(fps / imgS));
const nQuiero = Math.round((dur * fps) / hold);
// Repartir las imágenes disponibles a lo largo del clip sin saltos desiguales.
const elegidos = Array.from({ length: nQuiero }, (_, k) =>
  todos[Math.round((k * (todos.length - 1)) / (nQuiero - 1))]
);

const lista = elegidos.map((f) => `file '${path.join(dir, f)}'\nduration ${(hold / fps).toFixed(5)}`).join("\n");
const listaPath = path.join(dir, `.concat-${imgS}.txt`);
await fs.writeFile(listaPath, `${lista}\nfile '${path.join(dir, elegidos.at(-1))}'\n`);

const r = spawnSync("ffmpeg", [
  "-y", "-f", "concat", "-safe", "0", "-i", listaPath,
  "-vf", `scale=1080:1920:flags=lanczos,fps=${fps}`,
  "-c:v", "libx264", "-preset", "slow", "-crf", "18", "-pix_fmt", "yuv420p",
  "-t", String(dur), out,
], { encoding: "utf8" });
if (r.status !== 0) throw new Error(r.stderr.slice(-2000));
console.log(`${elegidos.length} imágenes · ${imgS} img/s (hold ${hold}) · ${dur}s → ${path.relative(process.cwd(), out)}`);
