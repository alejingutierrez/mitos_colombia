import { access, readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import sharp from "sharp";
import { validateCarouselPlan } from "./lib/plan-schema.mjs";
import { INSTAGRAM_CANVAS } from "./lib/templates.mjs";

function arg(name, fallback) {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : fallback;
}

const planArg = arg("--plan");
if (!planArg) {
  throw new Error(
    "Uso: node scripts/instagram/qa-carousel.mjs --plan <plan.json> [--slides <dir>]"
  );
}
const planPath = path.resolve(planArg);
const slidesDir = path.resolve(
  arg("--slides", path.join(path.dirname(planPath), "slides"))
);
const payload = JSON.parse(await readFile(planPath, "utf8"));
const errors = validateCarouselPlan(payload.plan);
const expected = payload.plan.slides.map(
  (slide) => `${String(slide.sequence).padStart(2, "0")}-${slide.kind}.jpg`
);
const actual = (await readdir(slidesDir))
  .filter((name) => /^\d{2}-.+\.jpg$/.test(name))
  .sort();

if (JSON.stringify(actual) !== JSON.stringify(expected)) {
  errors.push("rendered_file_sequence_mismatch");
}

const rendered = [];
for (const filename of actual) {
  const filePath = path.join(slidesDir, filename);
  const [metadata, fileStat] = await Promise.all([
    sharp(filePath).metadata(),
    stat(filePath),
  ]);
  if (
    metadata.width !== INSTAGRAM_CANVAS.width ||
    metadata.height !== INSTAGRAM_CANVAS.height
  ) {
    errors.push(`${filename}_wrong_dimensions`);
  }
  if (metadata.format !== "jpeg") errors.push(`${filename}_wrong_format`);
  if (fileStat.size > 4_000_000) errors.push(`${filename}_too_large`);
  rendered.push({
    filename,
    width: metadata.width,
    height: metadata.height,
    format: metadata.format,
    bytes: fileStat.size,
  });
}

for (const companion of [
  "contact-sheet.jpg",
  "caption.txt",
  "alt-text.txt",
  "manifest.json",
]) {
  await access(path.join(slidesDir, companion)).catch(() => {
    errors.push(`missing_${companion}`);
  });
}

console.log(
  JSON.stringify(
    {
      status: errors.length ? "failed" : "passed",
      plan_provider: payload.provider,
      publication_status:
        payload.runtime_notes?.publication_status || "unspecified",
      template_id: payload.plan.template_id,
      sequence_count: payload.plan.sequence_count,
      canvas: INSTAGRAM_CANVAS,
      rendered,
      errors: [...new Set(errors)],
    },
    null,
    2
  )
);
if (errors.length) process.exit(1);

