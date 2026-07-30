import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import dotenv from "dotenv";
import { planCarouselWithBedrock } from "./lib/bedrock-planner.mjs";
import { planCarouselWithOpenAI } from "./lib/openai-planner.mjs";
import { planCarouselLocally } from "./lib/local-planner.mjs";
import {
  eligibleTemplates,
  resolveSlideLayout,
} from "./lib/templates.mjs";
import {
  fetchVisualAsset,
  loadMythForInstagram,
} from "./lib/myth-source.mjs";

dotenv.config({ path: path.resolve(process.cwd(), ".env") });
dotenv.config({ path: path.resolve(process.cwd(), ".env.local"), override: true });

function arg(name, fallback) {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : fallback;
}

async function readHistory(historyPath) {
  const text = await readFile(historyPath, "utf8").catch(() => "");
  return text
    .split(/\r?\n/)
    .filter(Boolean)
    .map((line) => {
      try {
        return JSON.parse(line);
      } catch {
        return null;
      }
    })
    .filter(Boolean);
}

const slug = arg("--slug");
const requireThirdImage = process.argv.includes("--require-third");
const allowOpenAIFallback = process.argv.includes("--allow-openai-fallback");
const provider = arg("--provider", "bedrock");
if (!slug) {
  throw new Error(
    "Uso: npm run instagram:plan -- --slug <slug> [--require-third] [--provider bedrock|local] [--allow-openai-fallback]"
  );
}

const outputPath = path.resolve(
  arg(
    "--out",
    path.join(process.cwd(), "artifacts/instagram", slug, "plan.json")
  )
);
const historyPath = path.resolve(
  arg(
    "--history",
    path.join(process.cwd(), "content/instagram/history.jsonl")
  )
);

const [myth, history] = await Promise.all([
  loadMythForInstagram(slug),
  readHistory(historyPath),
]);
const templates = eligibleTemplates(history).map((item) => ({
  id: item.id,
  name: item.name,
  concept: item.concept,
  palette: item.palette,
  motif: item.motif,
  minSlides: item.minSlides,
  maxSlides: item.maxSlides,
}));
const assets =
  provider === "local"
    ? []
    : await Promise.all([
        fetchVisualAsset({
          id: "existing_landscape",
          role: "canonical landscape",
          description:
            "Escena horizontal canónica del mito. Debe aparecer exactamente una vez.",
          url: myth.images.landscape,
        }),
        fetchVisualAsset({
          id: "existing_portrait",
          role: "canonical portrait",
          description:
            "Escena vertical canónica del mito. Debe aparecer exactamente una vez.",
          url: myth.images.portrait,
        }),
      ]);
let result;
if (provider === "local") {
  result = planCarouselLocally({
    myth,
    templates,
    requireThirdImage,
  });
} else {
  try {
    result = await planCarouselWithBedrock({
      myth,
      assets,
      templates,
      requireThirdImage,
    });
  } catch (error) {
    if (!allowOpenAIFallback) throw error;
    result = await planCarouselWithOpenAI({
      myth,
      assets,
      templates,
      requireThirdImage,
    });
  }
}
const counters = {};
const resolvedSlides = result.plan.slides.map((slide) => ({
  ...slide,
  layout: resolveSlideLayout(result.plan.template_id, slide, counters),
}));
const payload = {
  schema_version: 1,
  created_at: new Date().toISOString(),
  myth: {
    id: myth.id,
    title: myth.title,
    slug: myth.slug,
    region: myth.region,
    community: myth.community,
    latitude: myth.latitude,
    longitude: myth.longitude,
    updated_at: myth.updatedAt,
  },
  provider: result.provider,
  model_id: result.model_id,
  usage: result.usage,
  source_assets: {
    existing_landscape: myth.images.landscape,
    existing_portrait: myth.images.portrait,
  },
  production_policy: {
    require_third_image: requireThirdImage,
  },
  plan: { ...result.plan, slides: resolvedSlides },
};

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(payload, null, 2)}\n`);
console.log(
  JSON.stringify({
    status: "planned",
    slug,
    provider: payload.provider,
    model_id: payload.model_id,
    template_id: payload.plan.template_id,
    sequence_count: payload.plan.sequence_count,
    require_third_image: requireThirdImage,
    output: outputPath,
  })
);
