import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

import { put } from "@vercel/blob";
import dotenv from "dotenv";
import OpenAI from "openai";
import sharp from "sharp";

import {
  buildCraftImagePrompt,
  buildImageGenerationParams,
  getImageDataBuffer,
  IMAGE_GENERATION_MODEL,
  IMAGE_GENERATION_QUALITY,
  IMAGE_PRESETS,
} from "../../../src/lib/image-generation.js";

function parseArgs(argv) {
  const options = {
    apply: false,
    confirmation: "",
    envFile: ".env",
    only: new Set(),
    force: false,
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

function requiredConfig(config) {
  for (const key of [
    "communitySlug",
    "communityName",
    "regionName",
    "confirmationPhrase",
  ]) {
    if (!String(config[key] || "").trim()) {
      throw new Error(`Falta configuración de imágenes: ${key}.`);
    }
  }
  if (!Array.isArray(config.records) || !config.records.length) {
    throw new Error("La generación requiere al menos un expediente.");
  }
}

function pathsFor(config) {
  const outputDir = path.resolve(
    "artifacts",
    "generated-images",
    config.communitySlug,
  );
  return {
    outputDir,
    manifestPath: path.join(outputDir, "provenance-manifest.json"),
  };
}

async function readManifest(config) {
  const { manifestPath } = pathsFor(config);
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
      community: config.communityName,
      items: {},
    };
  }
}

async function writeManifest(config, manifest) {
  const { outputDir, manifestPath } = pathsFor(config);
  manifest.updatedAt = new Date().toISOString();
  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(
    manifestPath,
    `${JSON.stringify(manifest, null, 2)}\n`,
  );
}

function selectedDefinitions(config, options) {
  const { outputDir } = pathsFor(config);
  return config.records.flatMap((record) =>
    ["horizontal", "vertical"]
      .filter(
        (orientation) =>
          !options.only.size ||
          options.only.has(record.slug) ||
          options.only.has(`${record.slug}:${orientation}`),
      )
      .map((orientation) => {
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
            region:
              config.regionNameBySlug?.[record.slug] ||
              config.regionName,
            community:
              config.communityNameBySlug?.[record.slug] ||
              config.communityName,
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
          fuentesAgotadas: Boolean(record.fuentesAgotadas),
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

function validateDefinition(config, definition) {
  for (const pattern of [
    /2D full paper cut/i,
    /paper quilling/i,
    /acabado gr[aá]fico plano/i,
    /formas mate|sin volumen físico/i,
    /sin fotograf[ií]a/i,
    /fibras reales/i,
    /objeto físico/i,
    /maqueta/i,
    /diorama/i,
    /CGI|render 3D/i,
  ]) {
    if (!pattern.test(definition.editorialPrompt)) {
      throw new Error(
        `${definition.key}: dirección visual incompleta (${pattern}).`,
      );
    }
  }
  const expected = Number(config.expectedSourceCount || 0);
  if (
    definition.sourceUrls.length < (definition.fuentesAgotadas ? 3 : 5) ||
    (expected > 0 && definition.sourceUrls.length !== expected) ||
    new Set(definition.sourceUrls).size !== definition.sourceUrls.length
  ) {
    throw new Error(
      `${definition.key}: fuentes visuales incompletas o duplicadas.`,
    );
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

async function uploadLocal(config, definition, attempt) {
  const body = await fs.readFile(definition.localPath);
  const prefix =
    definition.orientation === "horizontal" ? "mitos" : "vertical/myth";
  const filename =
    `${prefix}/${definition.slug}-${config.communitySlug}-review-openai-` +
    `v${attempt}-${Date.now()}.jpg`;
  const result = await put(filename, body, {
    access: "public",
    contentType: "image/jpeg",
  });
  return result.url;
}

async function makeContactSheet(config, manifest, orientation) {
  const { outputDir } = pathsFor(config);
  const selected = Object.values(manifest.items)
    .filter((item) => item.orientation === orientation)
    .sort((a, b) => a.slug.localeCompare(b.slug));
  if (!selected.length) return;
  const thumbWidth = orientation === "horizontal" ? 480 : 270;
  const thumbHeight = orientation === "horizontal" ? 270 : 480;
  const gap = 20;
  const columns = orientation === "horizontal" ? 2 : 3;
  const rows = Math.ceil(selected.length / columns);
  const width = columns * thumbWidth + (columns + 1) * gap;
  const height = rows * thumbHeight + (rows + 1) * gap;
  const composites = [];
  for (let index = 0; index < selected.length; index += 1) {
    const item = selected[index];
    const buffer = await sharp(path.resolve(item.localPath))
      .resize(thumbWidth, thumbHeight, { fit: "cover" })
      .toBuffer();
    composites.push({
      input: buffer,
      left: gap + (index % columns) * (thumbWidth + gap),
      top: gap + Math.floor(index / columns) * (thumbHeight + gap),
    });
  }
  await sharp({
    create: {
      width,
      height,
      channels: 3,
      background: { r: 243, g: 238, b: 226 },
    },
  })
    .composite(composites)
    .jpeg({ quality: 90 })
    .toFile(path.join(outputDir, `contact-sheet-${orientation}.jpg`));
}

export async function runCommunityImageGeneration(
  config,
  argv = process.argv.slice(2),
) {
  requiredConfig(config);
  const options = parseArgs(argv);
  const selected = selectedDefinitions(config, options);
  for (const definition of selected) {
    validateDefinition(config, definition);
  }
  const summary = {
    mode: options.apply ? "apply" : "dry-run",
    provider: "openai",
    model: "gpt-image-2",
    quality: "high",
    community: config.communityName,
    images: selected.length,
    estimatedOutputCostUsd: Number((selected.length * 0.165).toFixed(3)),
    keys: selected.map(({ key }) => key),
  };
  console.log(JSON.stringify(summary, null, 2));
  if (!options.apply) return summary;
  if (options.confirmation !== config.confirmationPhrase) {
    throw new Error(
      `Para aplicar usa --confirm=${config.confirmationPhrase}.`,
    );
  }

  dotenv.config({ path: path.resolve(options.envFile), quiet: true });
  if (!process.env.OPENAI_API_KEY || !process.env.BLOB_READ_WRITE_TOKEN) {
    throw new Error("Faltan OPENAI_API_KEY o BLOB_READ_WRITE_TOKEN.");
  }

  const { outputDir, manifestPath } = pathsFor(config);
  await fs.mkdir(outputDir, { recursive: true });
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const manifest = await readManifest(config);
  for (let index = 0; index < selected.length; index += 1) {
    const definition = selected[index];
    const existing = manifest.items[definition.key];
    if (
      !options.force &&
      existing?.url &&
      existing?.visualQa === "approved" &&
      (await localIsValid(definition))
    ) {
      console.log(
        `[${config.communitySlug}-images] ${index + 1}/${selected.length} ` +
          `approved ${definition.key}`,
      );
      continue;
    }
    if (
      !options.force &&
      existing?.url &&
      existing?.visualQa === "pending" &&
      (await localIsValid(definition))
    ) {
      console.log(
        `[${config.communitySlug}-images] ${index + 1}/${selected.length} ` +
          `awaiting-qa ${definition.key}`,
      );
      continue;
    }
    const attempt = Number(existing?.attempt || 0) + 1;
    console.log(
      `[${config.communitySlug}-images] ${index + 1}/${selected.length} ` +
        `generate ${definition.key} attempt ${attempt}`,
    );
    if (
      options.force ||
      existing?.visualQa === "rejected" ||
      !(await localIsValid(definition))
    ) {
      await generateLocal(openai, definition);
    }
    const url = await uploadLocal(config, definition, attempt);
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
      url,
      editorialPrompt: definition.editorialPrompt,
      editorialPromptSha256: digest(definition.editorialPrompt),
      generationPrompt: definition.generationPrompt,
      generationPromptSha256: digest(definition.generationPrompt),
      sourceUrls: definition.sourceUrls,
      attempt,
      visualQa: "pending",
      generatedAt: new Date().toISOString(),
    };
    await writeManifest(config, manifest);
    await makeContactSheet(config, manifest, definition.orientation);
    console.log(`[${config.communitySlug}-images] ok ${definition.key}`);
  }
  await makeContactSheet(config, manifest, "horizontal");
  await makeContactSheet(config, manifest, "vertical");
  console.log(
    JSON.stringify(
      {
        status: "generated-awaiting-visual-qa",
        manifestPath,
        contactSheets: [
          path.join(outputDir, "contact-sheet-horizontal.jpg"),
          path.join(outputDir, "contact-sheet-vertical.jpg"),
        ],
      },
      null,
      2,
    ),
  );
  return manifest;
}
