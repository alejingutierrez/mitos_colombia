import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

import { del, put } from "@vercel/blob";
import dotenv from "dotenv";
import pg from "pg";
import sharp from "sharp";

import dossier from "../../editorial/embera/myths/los-burumias-y-carautas.mjs";

const { Client } = pg;
const rootDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../..",
);
const confirmationPhrase = "embera-burumia-two-images";
const slug = "los-burumias-y-carautas";

const assets = [
  {
    orientation: "horizontal",
    width: 1536,
    height: 864,
    relativePath:
      "output/imagegen/embera/los-burumias-y-carautas-horizontal.jpg",
  },
  {
    orientation: "vertical",
    width: 864,
    height: 1536,
    relativePath:
      "output/imagegen/embera/los-burumias-y-carautas-vertical.jpg",
  },
];

function parseArgs(argv) {
  const options = { apply: false, confirmation: "", envFile: ".env" };
  for (const arg of argv) {
    if (arg === "--apply") {
      options.apply = true;
    } else if (arg.startsWith("--confirm=")) {
      options.confirmation = arg.slice("--confirm=".length);
    } else if (arg.startsWith("--env=")) {
      options.envFile = arg.slice("--env=".length);
    } else {
      throw new Error(`Argumento no reconocido: ${arg}`);
    }
  }
  return options;
}

function connectionString() {
  return (
    process.env.POSTGRES_URL_NON_POOLING ||
    process.env.DATABASE_URL_UNPOOLED ||
    process.env.POSTGRES_URL ||
    process.env.DATABASE_URL
  );
}

async function validateAssets() {
  const validated = [];
  for (const asset of assets) {
    const absolutePath = path.join(rootDir, asset.relativePath);
    const [buffer, metadata] = await Promise.all([
      fs.readFile(absolutePath),
      sharp(absolutePath).metadata(),
    ]);
    if (
      metadata.format !== "jpeg" ||
      metadata.width !== asset.width ||
      metadata.height !== asset.height
    ) {
      throw new Error(
        `${asset.orientation}: se esperaba JPEG ${asset.width}x${asset.height}; ` +
          `se obtuvo ${metadata.format} ${metadata.width}x${metadata.height}.`,
      );
    }
    validated.push({
      ...asset,
      absolutePath,
      bytes: buffer.length,
      sha256: createHash("sha256").update(buffer).digest("hex"),
    });
  }
  if (validated[0].sha256 === validated[1].sha256) {
    throw new Error("La portada y la segunda escena no pueden ser idénticas.");
  }
  if (
    !dossier.image_prompt_horizontal ||
    !dossier.image_prompt_vertical ||
    dossier.image_prompt_horizontal === dossier.image_prompt_vertical
  ) {
    throw new Error("El expediente no tiene dos prompts narrativos distintos.");
  }
  const prompts =
    `${dossier.image_prompt_horizontal} ${dossier.image_prompt_vertical}`;
  if (!/full paper cut/i.test(prompts)) {
    throw new Error("Los prompts no declaran el estilo full paper cut.");
  }
  if (/fotografiada de frente|maqueta física|pieza física/i.test(prompts)) {
    throw new Error("Los prompts conservan vocabulario de maqueta fotografiada.");
  }
  return validated;
}

async function loadBefore(client) {
  const mythResult = await client.query(
    `SELECT m.id, m.slug, m.title, m.image_url, m.image_prompt,
            e.id AS editorial_id, e.image_url AS editorial_image_url,
            e.image_prompt AS editorial_image_prompt,
            e.image_prompt_horizontal, e.image_prompt_vertical
     FROM myths m
     LEFT JOIN editorial_myths e ON e.source_myth_id = m.id
     WHERE m.slug = $1
     LIMIT 1`,
    [slug],
  );
  if (mythResult.rowCount !== 1) {
    throw new Error(`No existe el mito ${slug}.`);
  }
  const myth = mythResult.rows[0];
  const verticalResult = await client.query(
    `SELECT id, entity_id, entity_name, entity_slug, base_prompt,
            custom_prompt, image_url
     FROM vertical_images
     WHERE entity_type = 'myth' AND entity_id = $1
     ORDER BY id`,
    [myth.id],
  );
  if (verticalResult.rowCount !== 1) {
    throw new Error(
      `${slug}: se esperaba una vertical publicada y se encontraron ${verticalResult.rowCount}.`,
    );
  }
  return { myth, vertical: verticalResult.rows[0] };
}

function blobPath(orientation, runEpoch) {
  const folder = orientation === "horizontal" ? "mitos" : "vertical/myth";
  return `${folder}/${slug}-${runEpoch}.jpg`;
}

async function uploadAssets(validated, runEpoch) {
  const uploaded = [];
  try {
    for (const asset of validated) {
      const buffer = await fs.readFile(asset.absolutePath);
      const blob = await put(blobPath(asset.orientation, runEpoch), buffer, {
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

async function saveBackup(before, validated) {
  const backupDir = path.resolve("artifacts", "editorial-backups");
  await fs.mkdir(backupDir, { recursive: true });
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const backupPath = path.join(
    backupDir,
    `${slug}-images-${timestamp}.json`,
  );
  await fs.writeFile(
    backupPath,
    `${JSON.stringify(
      {
        createdAt: new Date().toISOString(),
        before,
        replacements: validated.map(
          ({ orientation, relativePath, width, height, bytes, sha256 }) => ({
            orientation,
            relativePath,
            width,
            height,
            bytes,
            sha256,
          }),
        ),
      },
      null,
      2,
    )}\n`,
    "utf8",
  );
  return backupPath;
}

async function writeDatabase(client, before, uploaded) {
  if (!before.myth.editorial_id) {
    throw new Error(
      "Falta el expediente editorial aplicado; no se escriben imágenes aisladas.",
    );
  }
  const horizontal = uploaded.find(
    ({ orientation }) => orientation === "horizontal",
  );
  const vertical = uploaded.find(({ orientation }) => orientation === "vertical");
  const verticalBasePrompt =
    "Segunda escena vertical 9:16 de un mito Emberá como ilustración full paper cut y paper quilling; no fotografía, maqueta física ni diorama.";

  await client.query("BEGIN");
  try {
    await client.query(
      `UPDATE myths
       SET image_url = $1, image_prompt = $2, updated_at = NOW()
       WHERE id = $3`,
      [horizontal.url, dossier.image_prompt_horizontal, before.myth.id],
    );
    await client.query(
      `UPDATE editorial_myths
       SET image_url = $1,
           image_prompt = $2,
           image_prompt_horizontal = $2,
           image_prompt_vertical = $3,
           updated_at = NOW()
       WHERE source_myth_id = $4`,
      [
        horizontal.url,
        dossier.image_prompt_horizontal,
        dossier.image_prompt_vertical,
        before.myth.id,
      ],
    );
    await client.query(
      `UPDATE vertical_images
       SET entity_name = $1,
           entity_slug = $2,
           base_prompt = $3,
           custom_prompt = $4,
           image_url = $5,
           updated_at = NOW()
       WHERE id = $6`,
      [
        dossier.title,
        slug,
        verticalBasePrompt,
        dossier.image_prompt_vertical,
        vertical.url,
        before.vertical.id,
      ],
    );
    await client.query("COMMIT");
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  }
}

async function run() {
  const options = parseArgs(process.argv.slice(2));
  dotenv.config({ path: path.resolve(options.envFile), quiet: true });
  const postgresUrl = connectionString();
  if (!postgresUrl) {
    throw new Error("No se encontró una conexión Postgres.");
  }
  if (!process.env.BLOB_READ_WRITE_TOKEN && options.apply) {
    throw new Error("Falta BLOB_READ_WRITE_TOKEN.");
  }
  if (options.apply && options.confirmation !== confirmationPhrase) {
    throw new Error(
      `Para aplicar usa --confirm=${confirmationPhrase}.`,
    );
  }

  const validated = await validateAssets();
  const client = new Client({
    connectionString: postgresUrl,
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();
  let uploaded = [];
  try {
    const before = await loadBefore(client);
    console.log(
      JSON.stringify(
        {
          mode: options.apply ? "apply" : "dry-run",
          slug,
          before,
          assets: validated.map(
            ({ orientation, relativePath, width, height, bytes, sha256 }) => ({
              orientation,
              relativePath,
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

    const backupPath = await saveBackup(before, validated);
    uploaded = await uploadAssets(validated, Date.now());
    try {
      await writeDatabase(client, before, uploaded);
    } catch (error) {
      await Promise.allSettled(uploaded.map(({ url }) => del(url)));
      throw error;
    }
    console.log(
      JSON.stringify(
        {
          status: "applied",
          backupPath,
          images: uploaded.map(({ orientation, url }) => ({
            orientation,
            url,
          })),
        },
        null,
        2,
      ),
    );
  } finally {
    await client.end();
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
