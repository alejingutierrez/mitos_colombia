import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

import { del, put } from "@vercel/blob";
import dotenv from "dotenv";
import pg from "pg";
import sharp from "sharp";

import { chamiMythsBySlug } from "../../editorial/chami/records.mjs";

const { Client } = pg;
const confirmationPhrase = "chami-six-paper-cut-replacements";
const replacements = [
  "horchibari",
  "el-origen-del-agua",
  "los-guardianes-vengadores-de-la-naturaleza",
];
const assets = replacements.flatMap((slug) => [
  {
    slug,
    orientation: "horizontal",
    width: 1536,
    height: 864,
    relativePath: `output/imagegen/chami/${slug}-horizontal.jpg`,
  },
  {
    slug,
    orientation: "vertical",
    width: 864,
    height: 1536,
    relativePath: `output/imagegen/chami/${slug}-vertical.jpg`,
  },
]);

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
    const absolutePath = path.resolve(asset.relativePath);
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
        `${asset.slug}/${asset.orientation}: se esperaba JPEG ` +
          `${asset.width}x${asset.height}; se obtuvo ${metadata.format} ` +
          `${metadata.width}x${metadata.height}.`,
      );
    }
    const dossier = chamiMythsBySlug[asset.slug];
    const prompt =
      asset.orientation === "horizontal"
        ? dossier.image_prompt_horizontal
        : dossier.image_prompt_vertical;
    if (!/full paper cut/i.test(prompt) || !/paper quilling/i.test(prompt)) {
      throw new Error(`${asset.slug}: el prompt no fija full paper cut.`);
    }
    validated.push({
      ...asset,
      absolutePath,
      bytes: buffer.length,
      sha256: createHash("sha256").update(buffer).digest("hex"),
    });
  }
  for (const slug of replacements) {
    const [horizontal, vertical] = validated.filter(
      (asset) => asset.slug === slug,
    );
    if (horizontal.sha256 === vertical.sha256) {
      throw new Error(`${slug}: las dos escenas son idénticas.`);
    }
  }
  return validated;
}

async function loadBefore(client) {
  const result = [];
  for (const slug of replacements) {
    const mythResult = await client.query(
      `SELECT m.id, m.slug, m.title, m.image_url,
              e.id AS editorial_id, e.image_url AS editorial_image_url
       FROM myths m
       LEFT JOIN editorial_myths e ON e.source_myth_id = m.id
       WHERE m.slug = $1
       LIMIT 1`,
      [slug],
    );
    if (mythResult.rowCount !== 1) throw new Error(`No existe ${slug}.`);
    const myth = mythResult.rows[0];
    if (!myth.editorial_id) {
      throw new Error(`${slug}: falta aplicar primero el expediente editorial.`);
    }
    const verticalResult = await client.query(
      `SELECT id, image_url
       FROM vertical_images
       WHERE entity_type = 'myth' AND entity_id = $1
       ORDER BY id`,
      [myth.id],
    );
    if (verticalResult.rowCount !== 1) {
      throw new Error(
        `${slug}: se esperaba una vertical y hay ${verticalResult.rowCount}.`,
      );
    }
    result.push({ myth, vertical: verticalResult.rows[0] });
  }
  return result;
}

function blobPath(asset, runEpoch) {
  const folder =
    asset.orientation === "horizontal" ? "mitos" : "vertical/myth";
  return `${folder}/${asset.slug}-${runEpoch}.jpg`;
}

async function uploadAssets(validated, runEpoch) {
  const uploaded = [];
  try {
    for (const asset of validated) {
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

async function saveBackup(before, validated) {
  const backupDir = path.resolve("artifacts", "editorial-backups");
  await fs.mkdir(backupDir, { recursive: true });
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const backupPath = path.join(
    backupDir,
    `chami-replacement-images-${timestamp}.json`,
  );
  await fs.writeFile(
    backupPath,
    `${JSON.stringify(
      {
        createdAt: new Date().toISOString(),
        before,
        replacements: validated.map(
          ({ slug, orientation, relativePath, width, height, bytes, sha256 }) => ({
            slug,
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
  const verticalBasePrompt =
    "Segunda escena vertical de un relato Emberá Chamí como ilustración full paper cut y paper quilling; sin fotografía, maqueta física ni diorama.";
  await client.query("BEGIN");
  try {
    for (const entry of before) {
      const dossier = chamiMythsBySlug[entry.myth.slug];
      const horizontal = uploaded.find(
        ({ slug, orientation }) =>
          slug === entry.myth.slug && orientation === "horizontal",
      );
      const vertical = uploaded.find(
        ({ slug, orientation }) =>
          slug === entry.myth.slug && orientation === "vertical",
      );
      await client.query(
        `UPDATE myths
         SET image_url = $1, image_prompt = $2, updated_at = NOW()
         WHERE id = $3`,
        [horizontal.url, dossier.image_prompt_horizontal, entry.myth.id],
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
          entry.myth.id,
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
          dossier.slug,
          verticalBasePrompt,
          dossier.image_prompt_vertical,
          vertical.url,
          entry.vertical.id,
        ],
      );
    }
    await client.query("COMMIT");
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  }
}

async function run() {
  const options = parseArgs(process.argv.slice(2));
  dotenv.config({ path: path.resolve(options.envFile), quiet: true });
  if (!connectionString()) throw new Error("No hay conexión Postgres.");
  if (options.apply && !process.env.BLOB_READ_WRITE_TOKEN) {
    throw new Error("Falta BLOB_READ_WRITE_TOKEN.");
  }
  if (options.apply && options.confirmation !== confirmationPhrase) {
    throw new Error(`Para aplicar usa --confirm=${confirmationPhrase}.`);
  }

  const validated = await validateAssets();
  const client = new Client({
    connectionString: connectionString(),
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
          slugs: replacements,
          before,
          assets: validated.map(
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
  } finally {
    await client.end();
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
