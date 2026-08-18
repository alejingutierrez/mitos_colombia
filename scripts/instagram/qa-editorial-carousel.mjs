import { access, readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import sharp from "sharp";
import { validateCarouselPlan } from "./lib/plan-schema.mjs";
import { INSTAGRAM_CANVAS } from "./lib/templates.mjs";

function argument(name, fallback = "") {
  const index = process.argv.indexOf(`--${name}`);
  return index >= 0 ? process.argv[index + 1] : fallback;
}

function normalizedWords(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLocaleLowerCase("es-CO")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

function wordCount(value) {
  return normalizedWords(value).split(/\s+/).filter(Boolean).length;
}

const planArg = argument("plan");
const compositionArg = argument("composition");
if (!planArg || !compositionArg) {
  throw new Error(
    "Uso: node scripts/instagram/qa-editorial-carousel.mjs --plan <plan.json> --composition <composition.json> [--slides <dir>]"
  );
}

const planPath = path.resolve(planArg);
const compositionPath = path.resolve(compositionArg);
const slidesDirectory = path.resolve(
  argument("slides", path.join(path.dirname(compositionPath), "editorial-v9"))
);
const [planDocument, composition] = await Promise.all([
  readFile(planPath, "utf8").then(JSON.parse),
  readFile(compositionPath, "utf8").then(JSON.parse),
]);
const plan = planDocument.plan || planDocument;
const errors = validateCarouselPlan(plan);
const slides = Array.isArray(composition.slides) ? composition.slides : [];

const finalCta = slides.at(-1)?.copy?.cta;
if (
  finalCta?.eyebrow !== "El relato continúa" ||
  finalCta?.label !== "mitosdecolombia.com" ||
  !String(finalCta?.body || "").trim() ||
  !String(finalCta?.href || "").startsWith("https://mitosdecolombia.com")
) {
  errors.push("final_slide_missing_read_more_cta");
}
if (slides.slice(0, -1).some((slide) => slide.copy?.cta)) {
  errors.push("read_more_cta_outside_final_slide");
}

if (slides.length !== plan.sequence_count) {
  errors.push("composition_sequence_count_mismatch");
}
if (!composition.selection_policy?.production_ready_only) {
  errors.push("composition_not_restricted_to_production_templates");
}
if (!composition.selection_policy?.semantic_iconography) {
  errors.push("composition_missing_semantic_iconography_policy");
}
if (composition.selection_policy?.standardized_decoration_system !== "v2") {
  errors.push("composition_missing_v2_decoration_policy");
}
if (composition.selection_policy?.max_graphic_elements_per_slide !== 1) {
  errors.push("composition_missing_single_graphic_policy");
}

const sequences = slides.map((slide) => slide.sequence);
if (new Set(sequences).size !== slides.length) {
  errors.push("composition_sequence_repeated");
}
if (sequences.some((sequence, index) => sequence !== index + 1)) {
  errors.push("composition_sequence_not_contiguous");
}

const templateIds = slides.map((slide) => slide.template_id).filter(Boolean);
if (new Set(templateIds).size !== templateIds.length) {
  errors.push("template_repeated_inside_carousel");
}
const expectedFamilyCount = plan.generated_image?.needed ? 5 : 4;
if (
  new Set(slides.map((slide) => slide.template_family)).size <
  expectedFamilyCount
) {
  errors.push("insufficient_template_family_variation");
}
if (new Set(slides.map((slide) => slide.template_palette)).size < 5) {
  errors.push("insufficient_palette_variation");
}

for (const slide of slides) {
  const title = normalizedWords(slide.copy?.title);
  const body = normalizedWords(slide.copy?.body);
  if (!title) errors.push(`slide_${slide.sequence}_missing_title`);
  if (title && body && body.startsWith(title)) {
    errors.push(`slide_${slide.sequence}_title_body_repeated`);
  }
  if (wordCount(slide.copy?.title) > 18) {
    errors.push(`slide_${slide.sequence}_title_too_long`);
  }
  if (wordCount(slide.copy?.body) > 70) {
    errors.push(`slide_${slide.sequence}_body_too_long`);
  }
  const graphicElementCount = [
    slide.graphic_motif,
    slide.graphic_decoration,
  ].filter(Boolean).length;
  if (slide.template_family === "typographic" && graphicElementCount !== 1) {
    errors.push(`slide_${slide.sequence}_graphic_element_count_invalid`);
  }
  if (slide.template_family !== "typographic" && graphicElementCount !== 0) {
    errors.push(`slide_${slide.sequence}_unexpected_graphic_element`);
  }
  if (
    slide.graphic_motif?.src &&
    !slide.graphic_motif.src.startsWith("/motifs/carousel/v2/")
  ) {
    errors.push(`slide_${slide.sequence}_invalid_graphic_motif_source`);
  }
  if (
    slide.graphic_decoration?.src &&
    !slide.graphic_decoration.src.startsWith("/motifs/carousel/v2/")
  ) {
    errors.push(`slide_${slide.sequence}_invalid_graphic_decoration_source`);
  }
}

const graphicMotifIds = slides
  .map((slide) => slide.graphic_motif?.id)
  .filter(Boolean);
if (new Set(graphicMotifIds).size !== graphicMotifIds.length) {
  errors.push("graphic_motif_repeated_inside_carousel");
}

const graphicDecorationIds = slides
  .map((slide) => slide.graphic_decoration?.id)
  .filter(Boolean);
if (new Set(graphicDecorationIds).size !== graphicDecorationIds.length) {
  errors.push("graphic_decoration_repeated_inside_carousel");
}

const allGraphicIds = [...graphicMotifIds, ...graphicDecorationIds];
if (new Set(allGraphicIds).size !== allGraphicIds.length) {
  errors.push("graphic_element_repeated_inside_carousel");
}

const expectedAssetIds = ["existing_portrait", "existing_landscape"];
if (plan.generated_image?.needed) expectedAssetIds.push("generated_third");
for (const assetId of expectedAssetIds) {
  const uses = slides.filter((slide) => slide.asset_id === assetId).length;
  if (uses !== 1) errors.push(`${assetId}_must_appear_exactly_once`);
}
if (
  !plan.generated_image?.needed &&
  slides.some((slide) => slide.asset_id === "generated_third")
) {
  errors.push("unexpected_generated_third");
}

const expectedFiles = slides
  .map(
    (slide) =>
      `${String(slide.sequence).padStart(2, "0")}-${slide.template_family}.png`
  )
  .sort();
const actualFiles = (await readdir(slidesDirectory))
  .filter((name) => /^\d{2}-.+\.png$/.test(name))
  .sort();
if (JSON.stringify(actualFiles) !== JSON.stringify(expectedFiles)) {
  errors.push("rendered_file_sequence_mismatch");
}

const rendered = [];
for (const filename of actualFiles) {
  const filePath = path.join(slidesDirectory, filename);
  const [metadata, fileStatus] = await Promise.all([
    sharp(filePath).metadata(),
    stat(filePath),
  ]);
  if (
    metadata.width !== INSTAGRAM_CANVAS.width ||
    metadata.height !== INSTAGRAM_CANVAS.height
  ) {
    errors.push(`${filename}_wrong_dimensions`);
  }
  if (metadata.format !== "png") errors.push(`${filename}_wrong_format`);
  if (fileStatus.size > 8_000_000) errors.push(`${filename}_too_large`);
  rendered.push({
    filename,
    width: metadata.width,
    height: metadata.height,
    bytes: fileStatus.size,
  });
}

for (const companion of [
  "contact-sheet.png",
  "caption.txt",
  "alt-text.txt",
  "manifest.json",
]) {
  await access(path.join(slidesDirectory, companion)).catch(() => {
    errors.push(`missing_${companion}`);
  });
}

const uniqueErrors = [...new Set(errors)];
console.log(
  JSON.stringify(
    {
      status: uniqueErrors.length ? "failed" : "passed",
      myth: composition.myth?.slug || planDocument.myth?.slug || null,
      sequence_count: slides.length,
      template_count: new Set(templateIds).size,
      family_count: new Set(slides.map((slide) => slide.template_family)).size,
      palette_count: new Set(slides.map((slide) => slide.template_palette)).size,
      canvas: INSTAGRAM_CANVAS,
      rendered,
      errors: uniqueErrors,
    },
    null,
    2
  )
);
if (uniqueErrors.length) process.exit(1);
