import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

import { put } from "@vercel/blob";
import dotenv from "dotenv";
import OpenAI from "openai";
import sharp from "sharp";

import ansermasDefinitions from "../../editorial/ansermas/definitions.mjs";
import {
  buildCraftImagePrompt,
  buildImageGenerationParams,
  getImageDataBuffer,
  IMAGE_PRESETS,
} from "../../src/lib/image-generation.js";

const confirmationPhrase = "generate-two-ansermas-full-paper-cut-pairs";
const outputDir = path.resolve("artifacts", "generated-images", "ansermas");
const manifestPath = path.join(outputDir, "manifest.json");

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
    } else throw new Error(`Argumento no reconocido: ${arg}`);
  }
  return options;
}

async function readManifest() {
  try {
    return JSON.parse(await fs.readFile(manifestPath, "utf8"));
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
    return {
      createdAt: new Date().toISOString(),
      style:
        "2D full paper cut and paper quilling illustration; no photography, physical object, maquette, diorama, CGI or 3D render",
      items: {},
    };
  }
}

async function writeManifest(manifest) {
  manifest.updatedAt = new Date().toISOString();
  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
}

function definitions(options) {
  return ansermasDefinitions.flatMap((record) =>
    ["horizontal", "vertical"]
      .filter(
        (orientation) =>
          !options.only.size ||
          options.only.has(record.slug) ||
          options.only.has(`${record.slug}:${orientation}`),
      )
      .map((orientation) => ({
        key: `${record.slug}:${orientation}`,
        slug: record.slug,
        title: record.title,
        orientation,
        preset: orientation,
        prompt:
          orientation === "horizontal"
            ? record.imagePromptHorizontal
            : record.imagePromptVertical,
        excerpt: record.excerpt,
        localPath: path.join(
          outputDir,
          `${record.slug}-${orientation}.jpg`,
        ),
      })),
  );
}

function validateDirection(definition) {
  if (
    !/2D full paper cut/i.test(definition.prompt) ||
    !/paper quilling/i.test(definition.prompt) ||
    !/acabado gr[aá]fico plano/i.test(definition.prompt) ||
    !/sin fotograf[ií]a/i.test(definition.prompt) ||
    !/objeto f[ií]sico/i.test(definition.prompt) ||
    !/maqueta/i.test(definition.prompt) ||
    !/diorama/i.test(definition.prompt) ||
    !/CGI|render 3D/i.test(definition.prompt)
  ) {
    throw new Error(`${definition.key}: dirección visual incompleta.`);
  }
}

async function validateLocal(definition) {
  try {
    await fs.access(definition.localPath);
  } catch (error) {
    if (error.code === "ENOENT") return false;
    throw error;
  }
  const metadata = await sharp(definition.localPath).metadata();
  const preset = IMAGE_PRESETS[definition.preset];
  return (
    metadata.format === "jpeg" &&
    metadata.width === preset.outputWidth &&
    metadata.height === preset.outputHeight
  );
}

async function generateLocal(openai, definition) {
  const preset = IMAGE_PRESETS[definition.preset];
  const prompt = buildCraftImagePrompt({
    entity: {
      type: "myth",
      name: definition.title,
      slug: definition.slug,
      prompt: definition.prompt,
      excerpt: definition.excerpt,
      region: "Territorio Anserma",
      community: "Ansermas",
    },
    orientation: definition.orientation,
    styleProfile: "fullPaperCutIllustration",
  });
  const response = await openai.images.generate(
    buildImageGenerationParams({ prompt, preset: definition.preset }),
  );
  const source = getImageDataBuffer(response);
  const image = await sharp(source)
    .rotate()
    .resize(preset.outputWidth, preset.outputHeight, {
      fit: "cover",
      position: "centre",
    })
    .jpeg({ quality: 92, mozjpeg: true })
    .toBuffer();
  await fs.writeFile(definition.localPath, image);
  return prompt;
}

async function uploadLocal(definition) {
  const body = await fs.readFile(definition.localPath);
  const folder =
    definition.orientation === "horizontal" ? "mitos" : "vertical/myth";
  const filename = `${folder}/${definition.slug}-${Date.now()}.jpg`;
  const result = await put(filename, body, {
    access: "public",
    contentType: "image/jpeg",
  });
  return result.url;
}

async function run() {
  const options = parseArgs(process.argv.slice(2));
  const selected = definitions(options);
  for (const definition of selected) validateDirection(definition);
  console.log(
    JSON.stringify(
      {
        mode: options.apply ? "apply" : "dry-run",
        force: options.force,
        images: selected.length,
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
  if (!process.env.OPENAI_API_KEY || !process.env.BLOB_READ_WRITE_TOKEN) {
    throw new Error("Faltan OPENAI_API_KEY o BLOB_READ_WRITE_TOKEN.");
  }
  await fs.mkdir(outputDir, { recursive: true });
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const manifest = await readManifest();
  for (let index = 0; index < selected.length; index += 1) {
    const definition = selected[index];
    const existing = manifest.items[definition.key];
    if (!options.force && existing?.url && (await validateLocal(definition))) {
      console.log(
        `[ansermas-images] ${index + 1}/${selected.length} reuse ${definition.key}`,
      );
      continue;
    }
    console.log(
      `[ansermas-images] ${index + 1}/${selected.length} ${definition.key}`,
    );
    let generationPrompt =
      options.force ? "" : existing?.generationPrompt || "";
    if (options.force || !(await validateLocal(definition))) {
      generationPrompt = await generateLocal(openai, definition);
    }
    const url = await uploadLocal(definition);
    manifest.items[definition.key] = {
      slug: definition.slug,
      orientation: definition.orientation,
      localPath: path.relative(process.cwd(), definition.localPath),
      url,
      editorialPrompt: definition.prompt,
      generationPrompt,
      completedAt: new Date().toISOString(),
    };
    await writeManifest(manifest);
    console.log(`[ansermas-images] ok ${definition.key}`);
  }
  console.log(JSON.stringify({ status: "complete", manifestPath }, null, 2));
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
