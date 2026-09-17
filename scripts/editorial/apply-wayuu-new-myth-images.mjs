import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

import { del, put } from "@vercel/blob";
import dotenv from "dotenv";
import pg from "pg";
import sharp from "sharp";

import mellizos from "../../editorial/wayuu/myths/los-mellizos-transformadores.mjs";
import waleker from "../../editorial/wayuu/myths/waleker-el-origen-del-tejido.mjs";

const { Client } = pg;
const rootDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../..",
);
const confirmationPhrase = "wayuu-new-myths-four-images";
const manifestPath = path.join(
  rootDir,
  "artifacts",
  "generated-images",
  "wayuu-new-myths",
  "provenance-manifest.json",
);
const provenancePath = path.join(
  rootDir,
  "editorial",
  "wayuu",
  "provenance.json",
);

const assets = [
  {
    slug: "los-mellizos-transformadores",
    orientation: "horizontal",
    width: 1536,
    height: 864,
    relativePath:
      "output/imagegen/wayuu/los-mellizos-transformadores-horizontal.jpg",
  },
  {
    slug: "los-mellizos-transformadores",
    orientation: "vertical",
    width: 864,
    height: 1536,
    relativePath:
      "output/imagegen/wayuu/los-mellizos-transformadores-vertical.jpg",
  },
  {
    slug: "waleker-el-origen-del-tejido",
    orientation: "horizontal",
    width: 1536,
    height: 864,
    relativePath:
      "output/imagegen/wayuu/waleker-el-origen-del-tejido-horizontal.jpg",
  },
  {
    slug: "waleker-el-origen-del-tejido",
    orientation: "vertical",
    width: 864,
    height: 1536,
    relativePath:
      "output/imagegen/wayuu/waleker-el-origen-del-tejido-vertical.jpg",
  },
];

const dossiers = new Map([
  [mellizos.slug, mellizos],
  [waleker.slug, waleker],
]);

function digest(value) {
  return createHash("sha256").update(value).digest("hex");
}

function parseArgs(argv) {
  const options = {
    apply: false,
    confirmation: null,
    envFile: ".env",
  };
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
        `${asset.slug}:${asset.orientation} debe ser JPEG ${asset.width}x${asset.height}; ` +
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

  for (const [slug, dossier] of dossiers) {
    if (
      !dossier.image_prompt_horizontal ||
      !dossier.image_prompt_vertical ||
      dossier.image_prompt_horizontal === dossier.image_prompt_vertical
    ) {
      throw new Error(`${slug}: los prompts de portada y segunda escena deben diferir.`);
    }
    const pair = validated.filter((asset) => asset.slug === slug);
    if (pair.length !== 2 || pair[0].sha256 === pair[1].sha256) {
      throw new Error(`${slug}: falta una pareja visual realmente distinta.`);
    }
  }

  return validated;
}

async function loadApprovedManifest(validated) {
  const manifest = JSON.parse(await fs.readFile(manifestPath, "utf8"));
  if (
    manifest.provider !== "openai" ||
    manifest.model !== "gpt-image-2" ||
    manifest.quality !== "high" ||
    manifest.visualQa?.status !== "approved"
  ) {
    throw new Error(
      "El manifiesto Wayuu no tiene proveedor, modelo, calidad y QA aprobados.",
    );
  }
  const expectedKeys = assets
    .map(({ slug, orientation }) => `${slug}:${orientation}`)
    .sort();
  const actualKeys = Object.keys(manifest.items || {}).sort();
  if (JSON.stringify(expectedKeys) !== JSON.stringify(actualKeys)) {
    throw new Error("El manifiesto Wayuu no contiene exactamente cuatro imágenes.");
  }

  for (const asset of validated) {
    const key = `${asset.slug}:${asset.orientation}`;
    const item = manifest.items[key];
    const dossier = dossiers.get(asset.slug);
    const editorialPrompt =
      asset.orientation === "horizontal"
        ? dossier.image_prompt_horizontal
        : dossier.image_prompt_vertical;
    if (
      item.provider !== "openai" ||
      item.model !== "gpt-image-2" ||
      item.quality !== "high" ||
      item.visualQa !== "approved" ||
      item.sha256 !== asset.sha256 ||
      path.resolve(item.localPath) !== asset.absolutePath ||
      item.editorialPrompt !== editorialPrompt ||
      item.editorialPromptSha256 !== digest(editorialPrompt) ||
      item.generationPromptSha256 !== digest(item.generationPrompt) ||
      item.outputDimensions?.width !== asset.width ||
      item.outputDimensions?.height !== asset.height ||
      item.outputFormat !== "jpeg" ||
      item.sourceUrls?.length !== 7 ||
      new Set(item.sourceUrls).size !== 7
    ) {
      throw new Error(`${key}: el manifiesto aprobado no coincide con el activo.`);
    }
  }
  return manifest;
}

async function loadBefore(client) {
  const slugs = [...dossiers.keys()];
  const mythsResult = await client.query(
    `
    SELECT m.id, m.slug, m.title, m.image_url, m.image_prompt,
           e.id AS editorial_id, e.image_url AS editorial_image_url,
           e.image_prompt AS editorial_image_prompt,
           e.image_prompt_horizontal, e.image_prompt_vertical
    FROM myths m
    LEFT JOIN editorial_myths e ON e.source_myth_id = m.id
    WHERE m.slug = ANY($1::text[])
    ORDER BY m.slug
    `,
    [slugs],
  );
  if (mythsResult.rowCount !== slugs.length) {
    throw new Error(
      `Se esperaban ${slugs.length} mitos y se encontraron ${mythsResult.rowCount}.`,
    );
  }
  for (const row of mythsResult.rows) {
    if (!row.editorial_id) {
      throw new Error(`${row.slug}: falta el expediente editorial en Neon.`);
    }
  }

  const ids = mythsResult.rows.map((row) => row.id);
  const verticalResult = await client.query(
    `
    SELECT id, entity_id, entity_name, entity_slug, base_prompt,
           custom_prompt, image_url
    FROM vertical_images
    WHERE entity_type = 'myth' AND entity_id = ANY($1::int[])
    ORDER BY entity_id, id
    `,
    [ids],
  );
  const counts = new Map();
  for (const row of verticalResult.rows) {
    counts.set(row.entity_id, (counts.get(row.entity_id) || 0) + 1);
  }
  const duplicated = mythsResult.rows.filter((row) => (counts.get(row.id) || 0) > 1);
  if (duplicated.length) {
    throw new Error(
      `Hay verticales duplicadas para: ${duplicated.map((row) => row.slug).join(", ")}.`,
    );
  }

  return {
    myths: mythsResult.rows,
    verticalImages: verticalResult.rows,
  };
}

function blobPath(asset, runEpoch) {
  const folder =
    asset.orientation === "horizontal" ? "mitos" : "vertical/myth";
  return `${folder}/${asset.slug}-wayuu-openai-${runEpoch}.jpg`;
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
      uploaded.push({
        ...asset,
        url: blob.url,
      });
    }
    return uploaded;
  } catch (error) {
    await Promise.allSettled(uploaded.map((asset) => del(asset.url)));
    throw error;
  }
}

async function writeDatabase(client, before, uploaded) {
  const bySlug = new Map(before.myths.map((row) => [row.slug, row]));
  const verticalByMythId = new Map(
    before.verticalImages.map((row) => [row.entity_id, row]),
  );

  await client.query("BEGIN");
  try {
    for (const [slug, dossier] of dossiers) {
      const row = bySlug.get(slug);
      const horizontal = uploaded.find(
        (asset) => asset.slug === slug && asset.orientation === "horizontal",
      );
      const vertical = uploaded.find(
        (asset) => asset.slug === slug && asset.orientation === "vertical",
      );
      if (!horizontal || !vertical) {
        throw new Error(`${slug}: faltan URLs cargadas.`);
      }

      await client.query(
        `
        UPDATE myths
        SET image_url = $1, image_prompt = $2, updated_at = NOW()
        WHERE id = $3
        `,
        [horizontal.url, dossier.image_prompt_horizontal, row.id],
      );
      await client.query(
        `
        UPDATE editorial_myths
        SET image_url = $1,
            image_prompt = $2,
            image_prompt_horizontal = $2,
            image_prompt_vertical = $3,
            updated_at = NOW()
        WHERE source_myth_id = $4
        `,
        [
          horizontal.url,
          dossier.image_prompt_horizontal,
          dossier.image_prompt_vertical,
          row.id,
        ],
      );

      const currentVertical = verticalByMythId.get(row.id);
      const basePrompt =
        "Segunda escena vertical 9:16 de un mito Wayuu como ilustración editorial completa full paper cut y paper quilling; sin fotografía, maqueta física, diorama ni render 3D.";
      if (currentVertical) {
        await client.query(
          `
          UPDATE vertical_images
          SET entity_name = $1,
              entity_slug = $2,
              base_prompt = $3,
              custom_prompt = $4,
              image_url = $5,
              updated_at = NOW()
          WHERE id = $6
          `,
          [
            row.title,
            slug,
            basePrompt,
            dossier.image_prompt_vertical,
            vertical.url,
            currentVertical.id,
          ],
        );
      } else {
        await client.query(
          `
          INSERT INTO vertical_images (
            entity_type, entity_id, entity_name, entity_slug,
            base_prompt, custom_prompt, image_url
          )
          VALUES ('myth', $1, $2, $3, $4, $5, $6)
          `,
          [
            row.id,
            row.title,
            slug,
            basePrompt,
            dossier.image_prompt_vertical,
            vertical.url,
          ],
        );
      }
    }
    await client.query("COMMIT");
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  }
}

async function writeDurableProvenance(manifest, uploaded) {
  const completedAt = new Date().toISOString();
  for (const asset of uploaded) {
    const key = `${asset.slug}:${asset.orientation}`;
    const item = manifest.items[key];
    item.url = asset.url;
    item.uploadedAt = completedAt;
    item.uploadBytes = asset.bytes;
    item.uploadSha256 = asset.sha256;
  }
  manifest.appliedAt = completedAt;
  manifest.updatedAt = completedAt;
  await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);

  const durable = structuredClone(manifest);
  for (const item of Object.values(durable.items)) delete item.localPath;
  await fs.writeFile(provenancePath, `${JSON.stringify(durable, null, 2)}\n`);
}

async function run() {
  const options = parseArgs(process.argv.slice(2));
  dotenv.config({ path: path.resolve(options.envFile), quiet: true });
  const postgresUrl = connectionString();
  if (!postgresUrl) {
    throw new Error("No se encontró una conexión Postgres.");
  }
  if (options.apply && options.confirmation !== confirmationPhrase) {
    throw new Error(
      `La escritura exige --confirm=${confirmationPhrase}.`,
    );
  }
  if (options.apply && !process.env.BLOB_READ_WRITE_TOKEN) {
    throw new Error("BLOB_READ_WRITE_TOKEN es requerido para subir las imágenes.");
  }

  const validated = await validateAssets();
  const manifest = await loadApprovedManifest(validated);
  const client = new Client({
    connectionString: postgresUrl,
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();

  const runDate = new Date();
  const runEpoch = runDate.getTime();
  const runId = runDate.toISOString().replace(/[:.]/g, "-");
  const outputDir = path.join(rootDir, "artifacts", "editorial-backups");
  const reportPath = path.join(
    outputDir,
    `wayuu-new-myth-images-${runId}-${options.apply ? "apply" : "dry-run"}.json`,
  );
  await fs.mkdir(outputDir, { recursive: true });

  let uploaded = [];
  try {
    const before = await loadBefore(client);
    const report = {
      mode: options.apply ? "apply" : "dry-run",
      createdAt: runDate.toISOString(),
      expected: {
        myths: dossiers.size,
        assets: assets.length,
        horizontal: 2,
        vertical: 2,
        provider: "openai",
        model: "gpt-image-2",
        quality: "high",
        generationAttempts: manifest.visualQa.generationAttempts,
        estimatedOutputCostUsd: manifest.visualQa.estimatedOutputCostUsd,
      },
      before,
      assets: validated.map(
        ({ absolutePath, ...asset }) => asset,
      ),
      uploaded: [],
    };
    await fs.writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`);

    if (options.apply) {
      uploaded = await uploadAssets(validated, runEpoch);
      try {
        await writeDatabase(client, before, uploaded);
      } catch (error) {
        await Promise.allSettled(uploaded.map((asset) => del(asset.url)));
        throw error;
      }
      report.uploaded = uploaded.map(
        ({ absolutePath, ...asset }) => asset,
      );
      report.completedAt = new Date().toISOString();
      await fs.writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`);
      await writeDurableProvenance(manifest, uploaded);
    }

    console.log(
      JSON.stringify(
        {
          mode: report.mode,
          reportPath,
          assets: report.assets,
          uploaded: report.uploaded,
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
  console.error(`[wayuu-images] ${error.message}`);
  process.exitCode = 1;
});
