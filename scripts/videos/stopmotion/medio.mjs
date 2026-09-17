// Un fotograma intermedio entre otros dos (la operación atómica de la bisección).
//   node scripts/videos/stopmotion/medio.mjs --plano p.json --a A.jpg --b B.jpg --out M.jpg [--ms-a 0 --ms-b 5000]
import fs from "node:fs/promises";
import path from "node:path";
import { genImage, rootDir } from "./img.mjs";
import { promptMedio } from "./prompts.mjs";

const args = process.argv.slice(2);
const flag = (n, d = null) => (args.indexOf(n) === -1 ? d : args[args.indexOf(n) + 1]);
const plano = JSON.parse(await fs.readFile(path.resolve(rootDir, flag("--plano")), "utf8"));
const a = path.resolve(rootDir, flag("--a"));
const b = path.resolve(rootDir, flag("--b"));
const out = path.resolve(rootDir, flag("--out"));
const r = await genImage({
  prompt: promptMedio(plano, { msA: Number(flag("--ms-a", 0)), msB: Number(flag("--ms-b", 5000)), nota: flag("--nota", "") }),
  refs: [a, b],
  outPath: out,
  quality: flag("--quality", "high"),
  size: flag("--size", "1088x1920"),
  tag: `${plano.plano}/medio`,
});
console.log(`M  ${(r.ms / 1000).toFixed(1)}s  $${r.usd.toFixed(4)}  ${path.relative(rootDir, out)}`);
const h = r.headers?.headers;
if (h?.get) console.log("límites:", ["x-ratelimit-limit-images","x-ratelimit-remaining-images","x-ratelimit-limit-tokens"].map(k=>`${k}=${h.get(k)}`).join(" "));
