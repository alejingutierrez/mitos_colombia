import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

import { del, put } from "@vercel/blob";
import dotenv from "dotenv";
import sharp from "sharp";

import { katioMythsBySlug } from "../../editorial/katio/records.mjs";

const confirmationPhrase = "upload-katio-thirteen-paper-cut-images";
const assetDirectory = "artifacts/generated-images/katio";
const definitions = [
  ["baha", "horizontal"],
  ["baha", "vertical"],
  ["ancastor", "horizontal"],
  ["ancastor", "vertical"],
  ["la-escalera-del-cielo", "horizontal"],
  ["la-escalera-del-cielo", "vertical"],
  ["dobaida", "horizontal"],
  ["dobaida", "vertical"],
  ["el-tesoro-de-dabeiba", "horizontal"],
  ["el-tesoro-de-dabeiba", "vertical"],
  ["tradiciones-relativas-a-la-conquista", "horizontal"],
  ["tradiciones-relativas-a-la-conquista", "vertical"],
  ["dabeiba", "horizontal"],
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
  for (const [slug, orientation] of definitions) {
    const width = orientation === "horizontal" ? 1536 : 864;
    const height = orientation === "horizontal" ? 864 : 1536;
    const absolutePath = path.resolve(
      assetDirectory,
      `${slug}-${orientation}.jpg`,
    );
    const [buffer, metadata] = await Promise.all([
      fs.readFile(absolutePath),
      sharp(absolutePath).metadata(),
    ]);
    if (
      metadata.format !== "jpeg" ||
      metadata.width !== width ||
      metadata.height !== height
    ) {
      throw new Error(
        `${slug}/${orientation}: se esperaba JPEG ${width}x${height}; ` +
          `se obtuvo ${metadata.format} ${metadata.width}x${metadata.height}.`,
      );
    }
    const dossier = katioMythsBySlug[slug];
    if (!dossier) throw new Error(`${slug}: falta expediente.`);
    const prompt =
      orientation === "horizontal"
        ? dossier.image_prompt_horizontal
        : dossier.image_prompt_vertical;
    if (
      !/full paper cut/i.test(prompt) ||
      !/paper quilling/i.test(prompt) ||
      !/sin fotograf[ií]a|no fotograf[ií]a/i.test(prompt)
    ) {
      throw new Error(`${slug}/${orientation}: dirección visual incompleta.`);
    }
    assets.push({
      slug,
      orientation,
      width,
      height,
      absolutePath,
      bytes: buffer.length,
      sha256: createHash("sha256").update(buffer).digest("hex"),
    });
  }
  for (const slug of [
    "baha",
    "ancastor",
    "la-escalera-del-cielo",
    "dobaida",
    "el-tesoro-de-dabeiba",
    "tradiciones-relativas-a-la-conquista",
  ]) {
    const pair = assets.filter((asset) => asset.slug === slug);
    if (pair.length !== 2 || pair[0].sha256 === pair[1].sha256) {
      throw new Error(`${slug}: la pareja visual no es válida.`);
    }
  }
  return assets;
}

function blobPath(asset, runEpoch) {
  const folder =
    asset.orientation === "horizontal" ? "mitos" : "vertical/myth";
  return `${folder}/${asset.slug}-${runEpoch}.jpg`;
}

async function uploadAssets(assets, runEpoch) {
  const uploaded = [];
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
  const manifestPath = path.resolve(assetDirectory, "uploaded.json");
  await fs.writeFile(
    manifestPath,
    `${JSON.stringify(
      {
        createdAt: new Date().toISOString(),
        style:
          "full paper cut and paper quilling illustration; no photography, physical maquette, diorama or 3D render",
        assets: uploaded.map(
          ({ slug, orientation, width, height, bytes, sha256, url }) => ({
            slug,
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
          ({ slug, orientation, width, height, bytes, sha256 }) => ({
            slug,
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
  const uploaded = await uploadAssets(assets, Date.now());
  const manifestPath = await saveManifest(uploaded);
  console.log(
    JSON.stringify(
      {
        status: "uploaded",
        manifestPath,
        images: uploaded.map(({ slug, orientation, url }) => ({
          slug,
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
