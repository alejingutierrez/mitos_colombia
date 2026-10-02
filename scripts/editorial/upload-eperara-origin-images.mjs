import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

import { del, put } from "@vercel/blob";
import dotenv from "dotenv";
import sharp from "sharp";

import origin from "../../editorial/eperara/myths/origen-del-pueblo-eperara.mjs";

const confirmationPhrase = "upload-eperara-origin-full-paper-cut-pair";
const definitions = [
  {
    orientation: "horizontal",
    path: "artifacts/generated-images/eperara/origen-eperara-horizontal.png",
    width: 1672,
    height: 941,
  },
  {
    orientation: "vertical",
    path: "artifacts/generated-images/eperara/origen-eperara-vertical.png",
    width: 941,
    height: 1672,
  },
];

function parseArgs(argv) {
  const options = { apply: false, confirmation: "", envFile: ".env" };
  for (const arg of argv) {
    if (arg === "--apply") options.apply = true;
    else if (arg.startsWith("--confirm=")) {
      options.confirmation = arg.slice("--confirm=".length);
    } else if (arg.startsWith("--env=")) {
      options.envFile = arg.slice("--env=".length);
    } else throw new Error(`Argumento no reconocido: ${arg}`);
  }
  return options;
}

async function validateAssets() {
  const assets = [];
  for (const definition of definitions) {
    const absolutePath = path.resolve(definition.path);
    const [buffer, metadata] = await Promise.all([
      fs.readFile(absolutePath),
      sharp(absolutePath).metadata(),
    ]);
    if (
      metadata.format !== "png" ||
      metadata.width !== definition.width ||
      metadata.height !== definition.height
    ) {
      throw new Error(
        `${definition.orientation}: se esperaba PNG ${definition.width}x${definition.height}; se obtuvo ${metadata.format} ${metadata.width}x${metadata.height}.`,
      );
    }
    const prompt =
      definition.orientation === "horizontal"
        ? origin.image_prompt_horizontal
        : origin.image_prompt_vertical;
    if (
      !/full paper cut/i.test(prompt) ||
      !/paper quilling/i.test(prompt) ||
      !/sin fotograf[ií]a/i.test(prompt) ||
      !/maqueta/i.test(prompt) ||
      !/diorama/i.test(prompt) ||
      !/CGI|render 3D/i.test(prompt)
    ) {
      throw new Error(
        `${definition.orientation}: dirección full paper cut incompleta.`,
      );
    }
    assets.push({
      ...definition,
      absolutePath,
      bytes: buffer.length,
      sha256: createHash("sha256").update(buffer).digest("hex"),
    });
  }
  if (assets[0].sha256 === assets[1].sha256) {
    throw new Error("La horizontal y la vertical no pueden ser idénticas.");
  }
  return assets;
}

function blobPath(asset, runEpoch) {
  const folder =
    asset.orientation === "horizontal" ? "mitos" : "vertical/myth";
  return `${folder}/origen-del-pueblo-eperara-${runEpoch}.png`;
}

async function run() {
  const options = parseArgs(process.argv.slice(2));
  const assets = await validateAssets();
  console.log(
    JSON.stringify(
      {
        mode: options.apply ? "apply" : "dry-run",
        assets: assets.map(
          ({ orientation, width, height, bytes, sha256 }) => ({
            orientation,
            width,
            height,
            bytes,
            sha256,
          }),
        ),
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
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    throw new Error(`Falta BLOB_READ_WRITE_TOKEN en ${options.envFile}.`);
  }
  const uploaded = [];
  const runEpoch = Date.now();
  try {
    for (const asset of assets) {
      const body = await fs.readFile(asset.absolutePath);
      const blob = await put(blobPath(asset, runEpoch), body, {
        access: "public",
        contentType: "image/png",
      });
      uploaded.push({ orientation: asset.orientation, url: blob.url });
    }
  } catch (error) {
    await Promise.allSettled(uploaded.map(({ url }) => del(url)));
    throw error;
  }
  console.log(JSON.stringify({ status: "uploaded", images: uploaded }, null, 2));
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
