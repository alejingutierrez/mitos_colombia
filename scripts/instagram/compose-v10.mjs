/**
 * Composición v10 · CLI.
 *
 * Uso:
 *   node scripts/instagram/compose-v10.mjs --slug bachue [--edition v10]
 *     [--plan ruta] [--seed bachue-v10-1] [--feed-index 0] [--mode A|B|C]
 *     [--output ruta] [--record]
 */

import fs from "node:fs/promises";
import path from "node:path";
import { buildComposition, readHistory, appendHistory } from "./lib/composer-v10.mjs";

function argument(name, fallback = "") {
  const index = process.argv.indexOf(`--${name}`);
  return index >= 0 ? process.argv[index + 1] : fallback;
}
const flag = (name) => process.argv.includes(`--${name}`);

const slug = argument("slug");
const edition = argument("edition", "v10");
if (!slug) {
  throw new Error("Uso: node scripts/instagram/compose-v10.mjs --slug <slug> [...opciones]");
}

const planPath = argument(
  "plan",
  path.join(process.cwd(), "artifacts", "instagram", slug, "plan-current.json")
);
const outputPath = argument(
  "output",
  path.join(process.cwd(), "artifacts", "instagram", slug, `composition-${edition}.json`)
);
const historyPath = path.join(process.cwd(), "content", "instagram", "template-history-v10.jsonl");

const plan = JSON.parse(await fs.readFile(planPath, "utf8"));
const usage = await readHistory(historyPath);
const composition = buildComposition({
  plan,
  seed: argument("seed", `${slug}-${edition}-1`),
  feedIndex: Number(argument("feed-index", "0")),
  modeOverride: argument("mode", "") || undefined,
  usage,
});

await fs.mkdir(path.dirname(outputPath), { recursive: true });
await fs.writeFile(outputPath, `${JSON.stringify(composition, null, 2)}\n`);

if (flag("record")) {
  await appendHistory(historyPath, composition);
}

console.log(
  [
    `composición v10 → ${path.relative(process.cwd(), outputPath)}`,
    `modo ${composition.mode} · ${composition.slides.length} láminas · motivo ${composition.semantic_motif}`,
    ...composition.slides.map(
      (slide) => `  ${String(slide.sequence).padStart(2, "0")} ${slide.screenType.padEnd(11)} ${slide.template_variant}`
    ),
    composition.warnings.length ? `AVISOS: ${composition.warnings.join(" · ")}` : "sin avisos",
  ].join("\n")
);
