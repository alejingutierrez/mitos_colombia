import fs from "node:fs/promises";
import path from "node:path";
import { composeEditorialCarousel } from "./lib/editorial-composer.mjs";
import { validateCarouselPlan } from "./lib/plan-schema.mjs";

function argument(name, fallback = "") {
  const index = process.argv.indexOf(`--${name}`);
  return index >= 0 ? process.argv[index + 1] : fallback;
}

const planPath = argument("plan");
const outputPath = argument("output");
const seed = argument("seed", `editorial-${new Date().toISOString()}`);
const copyPath = argument("copy");
const assetsPath = argument(
  "assets",
  planPath ? path.join(path.dirname(planPath), "media.json") : ""
);
const historyPath = argument(
  "history",
  path.join(process.cwd(), "content/instagram/template-history.jsonl")
);
const record = process.argv.includes("--record");

if (!planPath || !outputPath) {
  throw new Error(
    "Uso: node scripts/instagram/compose-editorial-carousel.mjs --plan <plan.json> --copy <copy.json> --output <composition.json> [--seed valor] [--record]"
  );
}

const planDocument = JSON.parse(await fs.readFile(planPath, "utf8"));
const plan = planDocument.plan || planDocument;
plan.myth ||= planDocument.myth || null;
const planErrors = validateCarouselPlan(plan);
if (planErrors.length) {
  throw new Error(`Plan editorial inválido: ${planErrors.join(", ")}`);
}
const copyBySequence = copyPath
  ? JSON.parse(await fs.readFile(copyPath, "utf8"))
  : {};
const assetsDocument = assetsPath
  ? JSON.parse(await fs.readFile(assetsPath, "utf8").catch(() => "{}"))
  : {};

let history = [];
try {
  history = (await fs.readFile(historyPath, "utf8"))
    .split("\n")
    .filter(Boolean)
    .map((line) => JSON.parse(line));
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}

const composition = composeEditorialCarousel({
  plan,
  seed,
  history,
  copyBySequence,
  assets: assetsDocument.web || {},
});
await fs.mkdir(path.dirname(outputPath), { recursive: true });
await fs.writeFile(outputPath, `${JSON.stringify(composition, null, 2)}\n`);

if (record) {
  await fs.mkdir(path.dirname(historyPath), { recursive: true });
  await fs.appendFile(
    historyPath,
    `${JSON.stringify({
      composed_at: composition.composed_at,
      myth_slug: composition.myth?.slug || null,
      seed: composition.seed,
      template_ids: composition.slides.map((slide) => slide.template_id),
    })}\n`
  );
}

console.log(
  JSON.stringify(
    {
      output: outputPath,
      seed: composition.seed,
      slides: composition.slides.length,
      template_ids: composition.slides.map((slide) => slide.template_id),
      recorded: record,
    },
    null,
    2
  )
);
