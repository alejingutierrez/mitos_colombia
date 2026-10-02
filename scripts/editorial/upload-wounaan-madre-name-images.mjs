import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

import { del, put } from "@vercel/blob";
import dotenv from "dotenv";
import sharp from "sharp";

import madreName from "../../editorial/wounaan/myths/madre-name.mjs";

const confirmationPhrase = "upload-wounaan-madre-name-full-paper-cut-pair";
const definitions = [
  {
    orientation: "horizontal",
    path: "artifacts/generated-images/wounaan/madre-name-horizontal.jpg",
    width: 1536,
    height: 864,
  },
  {
    orientation: "vertical",
    path: "artifacts/generated-images/wounaan/madre-name-vertical.jpg",
    width: 864,
    height: 1536,
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
      metadata.format !== "jpeg" ||
      metadata.width !== definition.width ||
      metadata.height !== definition.height
    ) {
      throw new Error(
        `${definition.orientation}: se esperaba JPEG ${definition.width}x${definition.height}; ` +
          `se obtuvo ${metadata.format} ${metadata.width}x${metadata.height}.`,
      );
    }
    const prompt =
      definition.orientation === "horizontal"
        ? madreName.image_prompt_horizontal
        : madreName.image_prompt_vertical;
    if (
      !/full paper cut/i.test(prompt) ||
      !/paper quilling/i.test(prompt) ||
      !/sin fotograf[ií]a/i.test(prompt) ||
      !/maqueta/i.test(prompt) ||
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
  return `${folder}/madre-name-${runEpoch}.jpg`;
}

async function uploadAssets(assets) {
  const uploaded = [];
  const runEpoch = Date.now();
  try {
    for (const asset of assets) {
      const buffer = await fs.readFile(asset.absolutePath);
      const blob = await put(blobPath(asset, runEpoch), buffer, {
        access: "public",
        contentType: "image/jpeg",
      });
      uploaded.push({ ...asset, url: blob.url });
    }
    return uploaded;
  } catch (error) {
    await Promise.allSettled(uploaded.map(({ url }) => del(url)));
    throw error;
  }
}

async function saveManifest(uploaded) {
  const manifestPath = path.resolve(
    "artifacts/generated-images/wounaan/madre-name-uploaded.json",
  );
  await fs.writeFile(
    manifestPath,
    `${JSON.stringify(
      {
        createdAt: new Date().toISOString(),
        style:
          "full paper cut and paper quilling illustration; no photography, physical maquette, diorama, CGI or 3D render",
        assets: uploaded.map(
          ({ orientation, width, height, bytes, sha256, url }) => ({
            orientation,
            width,
            height,
            bytes,
            sha256,
            url,
          }),
        ),
      },
      null,
      2,
    )}\n`,
    "utf8",
  );
  return manifestPath;
}

async function run() {
  const options = parseArgs(process.argv.slice(2));
  const assets = await validateAssets();
  console.log(
    JSON.stringify(
      {
        mode: options.apply ? "apply" : "dry-run",
        count: assets.length,
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
  const uploaded = await uploadAssets(assets);
  const manifestPath = await saveManifest(uploaded);
  console.log(
    JSON.stringify(
      {
        status: "uploaded",
        manifestPath,
        images: uploaded.map(({ orientation, url }) => ({
          orientation,
          url,
        })),
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
