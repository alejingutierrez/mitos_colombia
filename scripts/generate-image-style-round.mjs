import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath, pathToFileURL } from "node:url";

import dotenv from "dotenv";
import OpenAI from "openai";
import pg from "pg";

import {
  APPROVED_IMAGE_STYLE_PROFILE,
  buildCraftImagePrompt,
  buildImageGenerationParams,
  getImageDataBuffer,
  IMAGE_GENERATION_FORMAT,
  IMAGE_GENERATION_MODEL,
  IMAGE_GENERATION_QUALITY,
  IMAGE_PRESETS,
  IMAGE_STYLE_PROFILES,
} from "../src/lib/image-generation.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const outRoot = path.join(rootDir, "artifacts", "image-style-review");

dotenv.config({ path: path.join(rootDir, ".env") });

const { Client } = pg;
const args = process.argv.slice(2);

function getFlag(name, fallback = null) {
  const index = args.indexOf(name);
  if (index === -1) return fallback;
  const value = args[index + 1];
  if (!value || value.startsWith("--")) return true;
  return value;
}

function safeSlug(value) {
  return String(value || "image")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function getDailySeed() {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor((now - startOfYear) / oneDay);
}

const styleProfile = String(getFlag("--style-profile", APPROVED_IMAGE_STYLE_PROFILE));
const count = Math.min(Math.max(Number.parseInt(getFlag("--count", "5"), 10), 1), 9);
const seed = Number.parseInt(getFlag("--seed", `${getDailySeed()}`), 10);
const roundId = String(getFlag("--round-id", `round-${Date.now()}`));
const note = String(
  getFlag(
    "--note",
    "Taller local: fotografia frontal de maqueta artesanal en papel, mas fisica y menos ilustrativa."
  )
);
const ids = String(getFlag("--ids", "") || "")
  .split(",")
  .map((value) => Number.parseInt(value.trim(), 10))
  .filter(Number.isFinite);
const dryRun = args.includes("--dry-run");

const postgresUrl =
  process.env.POSTGRES_URL_NON_POOLING ||
  process.env.DATABASE_URL_UNPOOLED ||
  process.env.POSTGRES_URL ||
  process.env.DATABASE_URL;

function ensureConfig() {
  if (!IMAGE_STYLE_PROFILES[styleProfile]) {
    throw new Error(
      `--style-profile invalido. Usa uno de: ${Object.keys(IMAGE_STYLE_PROFILES).join(", ")}`
    );
  }
  if (!Number.isFinite(seed)) {
    throw new Error("--seed debe ser un numero entero");
  }
  if (!postgresUrl) {
    throw new Error("POSTGRES_URL o DATABASE_URL es requerido para seleccionar mitos.");
  }
  if (!dryRun && !process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY es requerido para generar imagenes.");
  }
}

async function fetchHomeMyths(client) {
  const params = [seed];
  let idClause = "";
  if (ids.length) {
    params.push(ids);
    idClause = `AND m.id = ANY($${params.length}::int[])`;
  }
  params.push(count);

  const result = await client.query(
    `
    SELECT
      m.id,
      m.title AS name,
      m.slug,
      m.excerpt,
      m.image_prompt,
      m.image_url,
      r.name AS region,
      COALESCE(c.name, '') AS community,
      'myth' AS type
    FROM myths m
    JOIN regions r ON r.id = m.region_id
    LEFT JOIN communities c ON c.id = m.community_id
    WHERE m.image_url IS NOT NULL
      ${idClause}
    ORDER BY (m.id + $1) % 23, m.id
    LIMIT $${params.length}
    `,
    params
  );

  return result.rows.map((row) => ({
    id: row.id,
    type: "myth",
    name: row.name,
    slug: row.slug,
    prompt: row.image_prompt || "",
    excerpt: row.excerpt || "",
    region: row.region || "",
    community: row.community || "",
    source_image_url: row.image_url || null,
  }));
}

export async function loadHomeMythsForRound({
  createClient = () => new Client({ connectionString: postgresUrl }),
} = {}) {
  const client = createClient();
  await client.connect();

  try {
    return await fetchHomeMyths(client);
  } finally {
    await client.end();
  }
}

async function writeManifest(roundDir, manifest) {
  await fs.mkdir(roundDir, { recursive: true });
  await fs.writeFile(
    path.join(roundDir, "round.json"),
    `${JSON.stringify(manifest, null, 2)}\n`
  );
}

async function main() {
  ensureConfig();

  const profileDir = safeSlug(styleProfile);
  const roundDir = path.join(outRoot, profileDir, roundId);
  const manifest = {
    roundId,
    status: dryRun ? "dry-run" : "running",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    localOnly: true,
    seed,
    styleProfile,
    note,
    model: IMAGE_GENERATION_MODEL,
    quality: IMAGE_GENERATION_QUALITY,
    format: IMAGE_GENERATION_FORMAT,
    preset: "horizontal",
    items: [],
  };

  try {
    const entities = await loadHomeMythsForRound();
    const openai = dryRun ? null : new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    console.log(
      `[style-round] round=${roundId} profile=${styleProfile} seed=${seed} count=${entities.length} dryRun=${dryRun}`
    );

    manifest.items = entities.map((entity) => ({
      id: entity.id,
      type: entity.type,
      title: entity.name,
      slug: entity.slug,
      region: entity.region,
      community: entity.community,
      status: dryRun ? "planned" : "pending",
      sourceImageUrl: entity.source_image_url,
    }));
    await writeManifest(roundDir, manifest);

    for (const entity of entities) {
      console.log(`[style-round] ${entity.id} ${entity.slug}`);
      const prompt = buildCraftImagePrompt({
        entity,
        orientation: "horizontal",
        styleProfile,
      });
      const item = manifest.items.find((candidate) => candidate.id === entity.id);
      item.prompt = prompt;

      if (dryRun) {
        item.status = "planned";
        await writeManifest(roundDir, manifest);
        continue;
      }

      item.status = "generating";
      manifest.updatedAt = new Date().toISOString();
      await writeManifest(roundDir, manifest);

      const response = await openai.images.generate(
        buildImageGenerationParams({ prompt, preset: "horizontal" })
      );
      const imageBuffer = getImageDataBuffer(response);
      const filename = `myth-${entity.id}-${safeSlug(entity.slug)}-${Date.now()}.${
        IMAGE_PRESETS.horizontal.extension
      }`;
      const fullPath = path.join(roundDir, filename);
      await fs.writeFile(fullPath, imageBuffer);

      item.status = "complete";
      item.filename = filename;
      item.localPath = path.relative(rootDir, fullPath);
      item.imageUrl = `/api/admin/image-style-review?asset=${encodeURIComponent(
        `${profileDir}/${roundId}/${filename}`
      )}`;
      item.generatedAt = new Date().toISOString();
      manifest.updatedAt = new Date().toISOString();
      await writeManifest(roundDir, manifest);
      console.log(`[style-round] ok ${item.localPath}`);
    }

    manifest.status = dryRun ? "dry-run" : "complete";
    manifest.updatedAt = new Date().toISOString();
    await writeManifest(roundDir, manifest);
    console.log(`[style-round] manifest ${path.relative(rootDir, path.join(roundDir, "round.json"))}`);
  } catch (error) {
    manifest.status = "error";
    manifest.error = error.message;
    manifest.updatedAt = new Date().toISOString();
    await writeManifest(roundDir, manifest).catch(() => {});
    throw error;
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    console.error("[style-round] error:", error.message);
    process.exitCode = 1;
  });
}
