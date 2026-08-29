import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import dotenv from "dotenv";
import { planCarouselWithBedrock } from "./lib/bedrock-planner.mjs";
import { planCarouselWithOpenAI } from "./lib/openai-planner.mjs";
import { planCarouselLocally } from "./lib/local-planner.mjs";
import {
  buildGuionV10SystemPrompt,
  validateGuionV10,
} from "./lib/guion-v10.mjs";
import {
  eligibleTemplates,
  resolveSlideLayout,
} from "./lib/templates.mjs";
import {
  fetchVisualAsset,
  loadMythForInstagram,
  loadMythSnapshot,
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
const guion = arg("--guion", "");
const modelIdOverride = arg("--model-id", "");
const plannerEnv = modelIdOverride
  ? { ...process.env, INSTAGRAM_BEDROCK_MODEL_ID: modelIdOverride }
  : process.env;
const snapshotPath = arg("--snapshot", "");
const feedIndexArgument = arg("--feed-index", "");
const feedIndex = /^\d+$/.test(feedIndexArgument)
  ? Number(feedIndexArgument)
  : undefined;
if (!slug) {
  throw new Error(
    "Uso: npm run instagram:plan -- --slug <slug> [--require-third] [--provider bedrock|local] [--allow-openai-fallback] [--guion v10]"
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
    path.join(process.cwd(), "content/instagram/template-history.jsonl")
  )
);

const [myth, history] = await Promise.all([
  snapshotPath
    ? loadMythSnapshot(path.resolve(snapshotPath), slug)
    : loadMythForInstagram(slug),
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
if (guion && guion !== "v10") {
  throw new Error(`Guion desconocido: ${guion}. El único disponible es v10.`);
}
if (guion === "v10" && provider === "local") {
  throw new Error(
    "El planificador local escribe cortando oraciones y no puede cumplir las 7 reglas del guion v10; usa --provider bedrock u openai."
  );
}

const THROTTLE_PATTERN = /too many tokens|throttl|rate.?limit|429/i;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function planOnce(systemPrompt) {
  for (let espera = 1; espera <= 4; espera += 1) {
    try {
      return await planOnceInner(systemPrompt);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      if (espera === 4 || !THROTTLE_PATTERN.test(message)) throw error;
      const seconds = espera * 30;
      console.warn(`proveedor estrangulado; reintento en ${seconds}s…`);
      await sleep(seconds * 1000);
    }
  }
  throw new Error("planOnce: sin intentos restantes");
}

async function planOnceInner(systemPrompt) {
  try {
    return await planCarouselWithBedrock({
      myth,
      assets,
      templates,
      requireThirdImage,
      env: plannerEnv,
      systemPrompt,
    });
  } catch (error) {
    // El guion v10 no cae a OpenAI: las imágenes ya existen para todos los mitos
    // y el fallback sólo escribía texto, así que no aporta nada que Bedrock no dé.
    if (!allowOpenAIFallback || guion === "v10") throw error;
    return await planCarouselWithOpenAI({
      myth,
      assets,
      templates,
      requireThirdImage,
      env: plannerEnv,
      systemPrompt,
    });
  }
}

let result;
let guionReport = null;
if (provider === "local") {
  result = planCarouselLocally({
    myth,
    templates,
    requireThirdImage,
    feedIndex,
  });
} else if (guion === "v10") {
  let repairNotes = [];
  for (let intento = 1; intento <= 3; intento += 1) {
    result = await planOnce(
      buildGuionV10SystemPrompt({ requireThirdImage, repairNotes })
    );
    guionReport = validateGuionV10(result.plan);
    if (guionReport.ok) break;
    repairNotes = guionReport.errors;
    console.warn(
      `guion v10 · intento ${intento}: ${guionReport.errors.length} incumplimientos` +
        (intento < 3 ? " → reparando" : "")
    );
  }
  if (!guionReport.ok) {
    throw new Error(
      `El plan no cumple el guion v10 tras 3 intentos:\n- ${guionReport.errors.join("\n- ")}`
    );
  }
} else {
  result = await planOnce(null);
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
  guion: guion || null,
  production_policy: {
    require_third_image: requireThirdImage,
    source_snapshot: snapshotPath ? path.resolve(snapshotPath) : null,
    feed_design: result.feed_design || null,
  },
  plan: { ...result.plan, slides: resolvedSlides },
};

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(payload, null, 2)}\n`);

if (guionReport) {
  const reportPath = path.join(path.dirname(outputPath), "plan-guion-report.json");
  await writeFile(
    reportPath,
    `${JSON.stringify({ guion: "v10", ...guionReport }, null, 2)}\n`
  );
  console.log(
    `guion v10 · reglas verificadas · ${guionReport.warnings.length} avisos` +
      (guionReport.warnings.length ? `:\n  - ${guionReport.warnings.join("\n  - ")}` : "")
  );
}
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
