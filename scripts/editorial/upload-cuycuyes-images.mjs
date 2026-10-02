import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

import { put } from "@vercel/blob";
import dotenv from "dotenv";
import sharp from "sharp";

const confirmationPhrase = "upload-four-cuycuyes-full-paper-cut-images";
const outputDir = path.resolve("artifacts", "generated-images", "cuycuyes");
const manifestPath = path.join(outputDir, "manifest.json");
const items = [
  {
    key: "el-diablo:horizontal",
    slug: "el-diablo",
    orientation: "horizontal",
    width: 1536,
    height: 864,
  },
  {
    key: "el-diablo:vertical",
    slug: "el-diablo",
    orientation: "vertical",
    width: 864,
    height: 1536,
  },
  {
    key: "el-tesoro-del-pipinta:horizontal",
    slug: "el-tesoro-del-pipinta",
    orientation: "horizontal",
    width: 1536,
    height: 864,
  },
  {
    key: "el-tesoro-del-pipinta:vertical",
    slug: "el-tesoro-del-pipinta",
    orientation: "vertical",
    width: 864,
    height: 1536,
  },
].map((item) => ({
  ...item,
  localPath: path.join(
    outputDir,
    `${item.slug}-${item.orientation}.jpg`,
  ),
}));

function parseArgs(argv) {
  const options = { envFile: ".env", apply: false, confirmation: "" };
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

async function validate(item) {
  const metadata = await sharp(item.localPath).metadata();
  if (
    metadata.format !== "jpeg" ||
    metadata.width !== item.width ||
    metadata.height !== item.height
  ) {
    throw new Error(
      `${item.key}: se esperaba JPEG ${item.width}x${item.height}.`,
    );
  }
}

async function run() {
  const options = parseArgs(process.argv.slice(2));
  for (const item of items) await validate(item);
  console.log(
    JSON.stringify(
      {
        mode: options.apply ? "apply" : "dry-run",
        images: items.map(({ key, width, height }) => ({
          key,
          size: `${width}x${height}`,
        })),
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
    throw new Error("Falta BLOB_READ_WRITE_TOKEN.");
  }
  const manifest = {
    createdAt: new Date().toISOString(),
    style:
      "2D full paper cut and paper quilling illustration; no photography, physical object, maquette, diorama, CGI or 3D render",
    items: {},
  };
  for (const item of items) {
    const folder =
      item.orientation === "horizontal" ? "mitos" : "vertical/myth";
    const body = await fs.readFile(item.localPath);
    const result = await put(
      `${folder}/${item.slug}-${Date.now()}.jpg`,
      body,
      { access: "public", contentType: "image/jpeg" },
    );
    manifest.items[item.key] = {
      slug: item.slug,
      orientation: item.orientation,
      localPath: path.relative(process.cwd(), item.localPath),
      url: result.url,
      completedAt: new Date().toISOString(),
    };
    console.log(`[cuycuyes-upload] ok ${item.key}`);
  }
  await fs.writeFile(
    manifestPath,
    `${JSON.stringify(manifest, null, 2)}\n`,
    "utf8",
  );
  console.log(JSON.stringify({ status: "complete", manifestPath }, null, 2));
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
