import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

import dotenv from "dotenv";
import OpenAI from "openai";
import sharp from "sharp";

import mellizos from "../../editorial/wayuu/myths/los-mellizos-transformadores.mjs";
import waleker from "../../editorial/wayuu/myths/waleker-el-origen-del-tejido.mjs";
import {
  buildCraftImagePrompt,
  buildImageGenerationParams,
  getImageDataBuffer,
  IMAGE_GENERATION_MODEL,
  IMAGE_GENERATION_QUALITY,
  IMAGE_PRESETS,
} from "../../src/lib/image-generation.js";

const confirmationPhrase = "generate-four-wayuu-openai-images";
const manifestDir = path.resolve(
  "artifacts",
  "generated-images",
  "wayuu-new-myths",
);
const manifestPath = path.join(manifestDir, "provenance-manifest.json");
const outputDir = path.resolve("output", "imagegen", "wayuu");
const records = [mellizos, waleker];

function parseArgs(argv) {
  const options = {
    apply: false,
    confirmation: "",
    envFile: ".env",
    force: false,
    only: new Set(),
  };
  for (const arg of argv) {
    if (arg === "--apply") options.apply = true;
    else if (arg === "--force") options.force = true;
    else if (arg.startsWith("--confirm=")) {
      options.confirmation = arg.slice("--confirm=".length);
    } else if (arg.startsWith("--env=")) {
      options.envFile = arg.slice("--env=".length);
    } else if (arg.startsWith("--only=")) {
      options.only = new Set(
        arg
          .slice("--only=".length)
          .split(",")
          .map((value) => value.trim())
          .filter(Boolean),
      );
    } else {
      throw new Error(`Argumento no reconocido: ${arg}`);
    }
  }
  return options;
}

function digest(value) {
  return createHash("sha256").update(value).digest("hex");
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

async function readManifest() {
  try {
    return JSON.parse(await fs.readFile(manifestPath, "utf8"));
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
    return {
      schemaVersion: 1,
      createdAt: new Date().toISOString(),
      provider: "openai",
      model: "gpt-image-2",
      quality: "high",
      style:
        "digital 2D full paper cut and paper quilling illustration; no photography, physical object, maquette, diorama, CGI or 3D render",
      items: {},
    };
  }
}

async function writeManifest(manifest) {
  manifest.updatedAt = new Date().toISOString();
  await fs.mkdir(manifestDir, { recursive: true });
  await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
}

function allDefinitions() {
  return records.flatMap((record) =>
    ["horizontal", "vertical"].map((orientation) => {
      const preset = IMAGE_PRESETS[orientation];
      const editorialPrompt =
        orientation === "horizontal"
          ? record.image_prompt_horizontal
          : record.image_prompt_vertical;
      const generationPrompt = buildCraftImagePrompt({
        entity: {
          type: "myth",
          name: record.title,
          slug: record.slug,
          prompt: editorialPrompt,
          excerpt: record.excerpt,
          region: "Caribe",
          community: "Wayuu",
        },
        orientation,
        styleProfile: "fullPaperCutIllustration",
      });
      return {
        key: `${record.slug}:${orientation}`,
        slug: record.slug,
        title: record.title,
        orientation,
        editorialPrompt,
        generationPrompt,
        sourceUrls: [...record.keySources, ...record.sources].map(
          ({ url }) => url,
        ),
        localPath: path.join(
          outputDir,
          `${record.slug}-${orientation}.jpg`,
        ),
        requestedSize: preset.size,
        outputWidth: preset.outputWidth,
        outputHeight: preset.outputHeight,
      };
    }),
  );
}

function selectedDefinitions(options) {
  return allDefinitions().filter(
    ({ key, slug }) =>
      !options.only.size || options.only.has(key) || options.only.has(slug),
  );
}

function validateDefinition(definition) {
  for (const pattern of [
    /digital 2D full paper cut/i,
    /paper quilling/i,
    /acabado gr[aá]fico plano/i,
    /nunca fotograf[ií]a/i,
    /objeto f[ií]sico/i,
    /maqueta/i,
    /diorama/i,
    /CGI/i,
    /render 3D/i,
  ]) {
    if (!pattern.test(definition.editorialPrompt)) {
      throw new Error(
        `${definition.key}: dirección visual incompleta (${pattern}).`,
      );
    }
  }
  if (
    definition.sourceUrls.length !== 7 ||
    new Set(definition.sourceUrls).size !== 7
  ) {
    throw new Error(`${definition.key}: se requieren siete fuentes únicas.`);
  }
}

async function localIsValid(definition) {
  try {
    const metadata = await sharp(definition.localPath).metadata();
    return (
      metadata.format === "jpeg" &&
      metadata.width === definition.outputWidth &&
      metadata.height === definition.outputHeight
    );
  } catch {
    return false;
  }
}

async function generateLocal(openai, definition) {
  const params = buildImageGenerationParams({
    prompt: definition.generationPrompt,
    preset: definition.orientation,
  });
  if (
    params.model !== "gpt-image-2" ||
    params.quality !== "high" ||
    IMAGE_GENERATION_MODEL !== "gpt-image-2" ||
    IMAGE_GENERATION_QUALITY !== "high"
  ) {
    throw new Error(
      `Configuración no aprobada: ${params.model}/${params.quality}.`,
    );
  }
  const response = await openai.images.generate(params);
  const source = getImageDataBuffer(response);
  const image = await sharp(source)
    .rotate()
    .resize(definition.outputWidth, definition.outputHeight, {
      fit: "cover",
      position: "centre",
    })
    .jpeg({ quality: 92, mozjpeg: true })
    .toBuffer();
  await fs.writeFile(definition.localPath, image);
}

function labelSvg(width, title, orientation) {
  return Buffer.from(`
    <svg width="${width}" height="54">
      <rect width="100%" height="100%" fill="#17211d"/>
      <text x="18" y="34" fill="#f6f1e7" font-family="Arial, sans-serif"
            font-size="21">${escapeXml(title)} · ${orientation}</text>
    </svg>
  `);
}

async function buildContactSheets(definitions) {
  const horizontal = definitions.filter(
    ({ orientation }) => orientation === "horizontal",
  );
  const horizontalComposites = [];
  for (let index = 0; index < horizontal.length; index += 1) {
    const item = horizontal[index];
    const image = await sharp(item.localPath)
      .resize(1152, 648, { fit: "contain", background: "#e8e1d4" })
      .jpeg({ quality: 88 })
      .toBuffer();
    const top = index * 720;
    horizontalComposites.push(
      { input: labelSvg(1200, item.title, "horizontal"), left: 0, top },
      { input: image, left: 24, top: top + 54 },
    );
  }
  await sharp({
    create: {
      width: 1200,
      height: horizontal.length * 720,
      channels: 3,
      background: "#d8d0c3",
    },
  })
    .composite(horizontalComposites)
    .jpeg({ quality: 90 })
    .toFile(path.join(manifestDir, "contact-sheet-horizontal.jpg"));

  const vertical = definitions.filter(
    ({ orientation }) => orientation === "vertical",
  );
  const verticalComposites = [];
  for (let index = 0; index < vertical.length; index += 1) {
    const item = vertical[index];
    const image = await sharp(item.localPath)
      .resize(405, 720, { fit: "contain", background: "#e8e1d4" })
      .jpeg({ quality: 88 })
      .toBuffer();
    const left = index * 450;
    verticalComposites.push(
      { input: labelSvg(450, item.title, "vertical"), left, top: 0 },
      { input: image, left: left + 22, top: 54 },
    );
  }
  await sharp({
    create: {
      width: vertical.length * 450,
      height: 774,
      channels: 3,
      background: "#d8d0c3",
    },
  })
    .composite(verticalComposites)
    .jpeg({ quality: 90 })
    .toFile(path.join(manifestDir, "contact-sheet-vertical.jpg"));
}

async function run() {
  const options = parseArgs(process.argv.slice(2));
  const selected = selectedDefinitions(options);
  const definitions = allDefinitions();
  for (const definition of definitions) validateDefinition(definition);
  console.log(
    JSON.stringify(
      {
        mode: options.apply ? "apply" : "dry-run",
        provider: "openai",
        model: "gpt-image-2",
        quality: "high",
        images: selected.length,
        estimatedOutputCostUsd: Number((selected.length * 0.165).toFixed(2)),
        keys: selected.map(({ key }) => key),
      },
      null,
      2,
    ),
  );
  if (!options.apply) return;
  if (options.confirmation !== confirmationPhrase) {
    throw new Error(`Para aplicar usa --confirm=${confirmationPhrase}.`);
  }

  dotenv.config({ path: path.resolve(options.envFile), quiet: true });
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("Falta OPENAI_API_KEY.");
  }

  await Promise.all([
    fs.mkdir(outputDir, { recursive: true }),
    fs.mkdir(manifestDir, { recursive: true }),
  ]);
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const manifest = await readManifest();
  for (let index = 0; index < selected.length; index += 1) {
    const definition = selected[index];
    const existing = manifest.items[definition.key];
    if (!options.force && existing && (await localIsValid(definition))) {
      console.log(
        `[wayuu-openai-images] ${index + 1}/${selected.length} existing ${definition.key}`,
      );
      continue;
    }
    const attempt = Number(existing?.attempt || 0) + 1;
    console.log(
      `[wayuu-openai-images] ${index + 1}/${selected.length} generate ${definition.key} attempt ${attempt}`,
    );
    await generateLocal(openai, definition);
    const body = await fs.readFile(definition.localPath);
    manifest.items[definition.key] = {
      slug: definition.slug,
      title: definition.title,
      orientation: definition.orientation,
      provider: "openai",
      model: "gpt-image-2",
      quality: "high",
      requestedSize: definition.requestedSize,
      outputDimensions: {
        width: definition.outputWidth,
        height: definition.outputHeight,
      },
      outputFormat: "jpeg",
      localPath: path.relative(process.cwd(), definition.localPath),
      sha256: digest(body),
      editorialPrompt: definition.editorialPrompt,
      editorialPromptSha256: digest(definition.editorialPrompt),
      generationPrompt: definition.generationPrompt,
      generationPromptSha256: digest(definition.generationPrompt),
      sourceUrls: definition.sourceUrls,
      attempt,
      visualQa: "pending",
      generatedAt: new Date().toISOString(),
    };
    await writeManifest(manifest);
    console.log(`[wayuu-openai-images] ok ${definition.key}`);
  }

  const allValid = (
    await Promise.all(definitions.map((definition) => localIsValid(definition)))
  ).every(Boolean);
  if (allValid) {
    await buildContactSheets(definitions);
  }
  await writeManifest(manifest);
  console.log(
    JSON.stringify(
      {
        status: "generated-awaiting-visual-qa",
        manifestPath,
        contactSheets: [
          path.join(manifestDir, "contact-sheet-horizontal.jpg"),
          path.join(manifestDir, "contact-sheet-vertical.jpg"),
        ],
      },
      null,
      2,
    ),
  );
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
