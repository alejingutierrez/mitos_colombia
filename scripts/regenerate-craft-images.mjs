import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath, pathToFileURL } from "node:url";

import { del, put } from "@vercel/blob";
import dotenv from "dotenv";
import OpenAI from "openai";
import pg from "pg";

import {
  APPROVED_IMAGE_STYLE_PROFILE,
  buildBlobFilename,
  buildCraftImagePrompt,
  buildImageGenerationParams,
  getImageDataBuffer,
  IMAGE_PRESETS,
  IMAGE_STYLE_PROFILES,
} from "../src/lib/image-generation.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

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

function hasFlag(name) {
  return args.includes(name);
}

const target = getFlag("--target", "home");
const limit = Number.parseInt(getFlag("--limit", "5"), 10);
const offset = Number.parseInt(getFlag("--offset", "0"), 10);
const seedArg = getFlag("--seed", "");
const ids = String(getFlag("--ids", "") || "")
  .split(",")
  .map((value) => Number.parseInt(value.trim(), 10))
  .filter(Number.isFinite);
const styleProfile = String(getFlag("--style-profile", APPROVED_IMAGE_STYLE_PROFILE));
const force = hasFlag("--force");
const dryRun = hasFlag("--dry-run");
const deleteOld = hasFlag("--delete-old");

const postgresUrl =
  process.env.POSTGRES_URL_NON_POOLING ||
  process.env.DATABASE_URL_UNPOOLED ||
  process.env.POSTGRES_URL ||
  process.env.DATABASE_URL;

const TARGETS = new Set([
  "home",
  "home-current",
  "myths",
  "communities",
  "categories",
  "regions",
  "vertical",
]);

function getDailySeed() {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor((now - startOfYear) / oneDay);
}

function getHomeSeed() {
  const parsed = Number.parseInt(seedArg, 10);
  return Number.isFinite(parsed) ? parsed : getDailySeed();
}

function usage() {
  return `Uso:
  node scripts/regenerate-craft-images.mjs --target home --limit 5
  node scripts/regenerate-craft-images.mjs --target home-current --seed 190 --force --style-profile documentaryPaperArtifact
  node scripts/regenerate-craft-images.mjs --target myths --limit 20 --offset 0 --force --style-profile ${APPROVED_IMAGE_STYLE_PROFILE}
  node scripts/regenerate-craft-images.mjs --target myths --ids 1,2,3 --force --style-profile documentaryPaperArtifact
  node scripts/regenerate-craft-images.mjs --target vertical --limit 10 --force

Targets: ${Array.from(TARGETS).join(", ")}
Flags:
  --ids         Lista de IDs separada por comas para home, myths, communities, categories o regions.
  --seed        Seed diario que usa el home; recomendado para --target home-current.
  --style-profile  Perfil aprobado: ${Object.keys(IMAGE_STYLE_PROFILES).join(", ")}.
  --force       Regenera aunque ya haya image_url.
  --dry-run     Lista entidades y prompts, no llama OpenAI ni escribe DB.
  --delete-old  Borra el Blob anterior despues de guardar la URL nueva.`;
}

function ensureConfig() {
  if (!TARGETS.has(target)) {
    throw new Error(`Target invalido: ${target}\n${usage()}`);
  }
  if (!Number.isFinite(limit) || limit < 1 || limit > 100) {
    throw new Error("--limit debe estar entre 1 y 100");
  }
  if (!Number.isFinite(offset) || offset < 0) {
    throw new Error("--offset debe ser 0 o mayor");
  }
  if (seedArg && !Number.isFinite(Number.parseInt(seedArg, 10))) {
    throw new Error("--seed debe ser un numero entero");
  }
  if (!IMAGE_STYLE_PROFILES[styleProfile]) {
    throw new Error(`--style-profile invalido: ${styleProfile}\n${usage()}`);
  }
  if (target === "home-current" && ids.length) {
    throw new Error("--target home-current calcula sus IDs desde el seed; no acepta --ids.");
  }
  if (target === "home-current" && !force && !dryRun) {
    throw new Error("--target home-current requiere --force para actualizar las piezas visibles.");
  }
  if (!postgresUrl) {
    throw new Error("POSTGRES_URL o DATABASE_URL es requerido para regenerar produccion.");
  }
  if (!process.env.OPENAI_API_KEY && !dryRun) {
    throw new Error("OPENAI_API_KEY es requerido.");
  }
  if (!process.env.BLOB_READ_WRITE_TOKEN && !dryRun) {
    throw new Error("BLOB_READ_WRITE_TOKEN es requerido.");
  }
}

function rowToEntity(row, type) {
  return {
    id: row.id,
    type,
    name: row.name || row.title || row.slug,
    slug: row.slug,
    prompt: row.image_prompt || row.base_prompt || "",
    excerpt: row.excerpt || row.description || "",
    region: row.region || "Varios",
    community: row.community || "",
    image_url: row.image_url || row.vertical_image_url || null,
    vertical_image_id: row.vertical_image_id || null,
    base_prompt: row.base_prompt || null,
    custom_prompt: row.custom_prompt || null,
    preset: row.preset || null,
  };
}

function idFilterClause(alias = "") {
  if (!ids.length) return "";
  const prefix = alias ? `${alias}.` : "";
  return `AND ${prefix}id = ANY($4)`;
}

function entityFetchParams() {
  return ids.length ? [force, ids.length, offset, ids] : [force, limit, offset];
}

async function fetchEntities(client) {
  if (target === "home") {
    const result = await client.query(
      `
      SELECT
        id,
        slug,
        title as name,
        description,
        image_prompt,
        image_url,
        'Varios' as region,
        '' as community
      FROM home_banners
      WHERE is_active = TRUE
        AND ($1::boolean OR image_url IS NULL)
        ${idFilterClause()}
      ORDER BY order_index ASC, id ASC
      LIMIT $2 OFFSET $3
      `,
      entityFetchParams()
    );
    return result.rows.map((row) => rowToEntity(row, "homeBanner"));
  }

  if (target === "home-current") {
    const seed = getHomeSeed();
    const [mythsResult, regionsResult, bannersResult] = await Promise.all([
      client.query(
        `
        SELECT
          m.id,
          m.title as name,
          m.slug,
          m.excerpt,
          m.image_prompt,
          m.image_url,
          r.name as region,
          COALESCE(c.name, '') as community,
          'horizontal' as preset
        FROM myths m
        JOIN regions r ON r.id = m.region_id
        LEFT JOIN communities c ON c.id = m.community_id
        WHERE m.image_url IS NOT NULL
        ORDER BY (m.id + $1) % 23, m.id
        LIMIT 9
        `,
        [seed]
      ),
      client.query(
        `
        SELECT
          r.id,
          r.name,
          r.slug,
          r.image_prompt,
          r.image_url,
          r.name as region,
          '' as community,
          'horizontal' as preset,
          COUNT(m.id) AS myth_count
        FROM regions r
        LEFT JOIN myths m ON m.region_id = r.id
        GROUP BY r.id
        ORDER BY COUNT(m.id) DESC, r.name ASC
        LIMIT 6
        `
      ),
      client.query(
        `
        SELECT
          id,
          slug,
          title as name,
          description,
          image_prompt,
          image_url,
          'Varios' as region,
          '' as community,
          'homeBanner' as preset
        FROM home_banners
        WHERE is_active = TRUE
        ORDER BY order_index ASC, id ASC
        `
      ),
    ]);

    return [
      ...mythsResult.rows.map((row) => rowToEntity(row, "myth")),
      ...regionsResult.rows.map((row) => rowToEntity(row, "region")),
      ...bannersResult.rows.map((row) => rowToEntity(row, "homeBanner")),
    ];
  }

  if (target === "myths") {
    const result = await client.query(
      `
      SELECT
        m.id,
        m.title as name,
        m.slug,
        m.excerpt,
        m.image_prompt,
        m.image_url,
        r.name as region,
        COALESCE(c.name, '') as community
      FROM myths m
      JOIN regions r ON r.id = m.region_id
      LEFT JOIN communities c ON c.id = m.community_id
      WHERE m.image_prompt IS NOT NULL
        AND ($1::boolean OR m.image_url IS NULL)
        ${idFilterClause("m")}
      ORDER BY m.id
      LIMIT $2 OFFSET $3
      `,
      entityFetchParams()
    );
    return result.rows.map((row) => rowToEntity(row, "myth"));
  }

  if (target === "communities") {
    const result = await client.query(
      `
      SELECT
        c.id,
        c.name,
        c.slug,
        c.image_prompt,
        c.image_url,
        r.name as region,
        c.name as community
      FROM communities c
      JOIN regions r ON r.id = c.region_id
      WHERE c.image_prompt IS NOT NULL
        AND ($1::boolean OR c.image_url IS NULL)
        ${idFilterClause("c")}
      ORDER BY c.id
      LIMIT $2 OFFSET $3
      `,
      entityFetchParams()
    );
    return result.rows.map((row) => rowToEntity(row, "community"));
  }

  if (target === "categories") {
    const result = await client.query(
      `
      SELECT
        id,
        name,
        slug,
        image_prompt,
        image_url,
        description,
        'Varios' as region,
        '' as community
      FROM tags
      WHERE image_prompt IS NOT NULL
        AND ($1::boolean OR image_url IS NULL)
        ${idFilterClause()}
      ORDER BY id
      LIMIT $2 OFFSET $3
      `,
      entityFetchParams()
    );
    return result.rows.map((row) => rowToEntity(row, "category"));
  }

  if (target === "regions") {
    const result = await client.query(
      `
      SELECT
        id,
        name,
        slug,
        image_prompt,
        image_url,
        name as region,
        '' as community
      FROM regions
      WHERE image_prompt IS NOT NULL
        AND ($1::boolean OR image_url IS NULL)
        ${idFilterClause()}
      ORDER BY id
      LIMIT $2 OFFSET $3
      `,
      entityFetchParams()
    );
    return result.rows.map((row) => rowToEntity(row, "region"));
  }

  const result = await client.query(
    `
    SELECT
      m.id,
      m.title as name,
      m.slug,
      m.excerpt,
      m.image_prompt,
      r.name as region,
      COALESCE(c.name, '') as community,
      vi.id as vertical_image_id,
      vi.base_prompt,
      vi.custom_prompt,
      vi.image_url as vertical_image_url
    FROM myths m
    JOIN regions r ON r.id = m.region_id
    LEFT JOIN communities c ON c.id = m.community_id
    LEFT JOIN vertical_images vi ON vi.entity_type = 'myth' AND vi.entity_id = m.id
    WHERE m.image_prompt IS NOT NULL
      AND ($1::boolean OR vi.image_url IS NULL)
    ORDER BY m.id
    LIMIT $2 OFFSET $3
    `,
    [force, limit, offset]
  );
  return result.rows.map((row) => rowToEntity(row, "myth"));
}

export async function loadCraftRegenerationEntities({
  createClient = () => new Client({ connectionString: postgresUrl }),
} = {}) {
  const client = createClient();
  await client.connect();

  try {
    return await fetchEntities(client);
  } finally {
    await client.end();
  }
}

async function saveImageUrl(client, entity, imageUrl) {
  if (entity.type === "homeBanner") {
    await client.query(
      "UPDATE home_banners SET image_url = $1, updated_at = NOW() WHERE id = $2",
      [imageUrl, entity.id]
    );
    return;
  }
  if (entity.type === "myth" && target !== "vertical") {
    await client.query(
      "UPDATE myths SET image_url = $1, updated_at = NOW() WHERE id = $2",
      [imageUrl, entity.id]
    );
    return;
  }
  if (entity.type === "community") {
    await client.query("UPDATE communities SET image_url = $1 WHERE id = $2", [
      imageUrl,
      entity.id,
    ]);
    return;
  }
  if (entity.type === "category") {
    await client.query("UPDATE tags SET image_url = $1 WHERE id = $2", [
      imageUrl,
      entity.id,
    ]);
    return;
  }
  if (entity.type === "region") {
    await client.query("UPDATE regions SET image_url = $1 WHERE id = $2", [
      imageUrl,
      entity.id,
    ]);
    return;
  }

  const basePrompt =
    entity.base_prompt ||
    "Imagen vertical editorial de mito colombiano como fotografia frontal de una pieza fisica de papel artesanal.";
  const customPrompt = entity.custom_prompt || entity.prompt;

  if (entity.vertical_image_id) {
    await client.query(
      `
      UPDATE vertical_images
      SET image_url = $1, base_prompt = $2, custom_prompt = $3, updated_at = NOW()
      WHERE id = $4
      `,
      [imageUrl, basePrompt, customPrompt, entity.vertical_image_id]
    );
    return;
  }

  await client.query(
    `
    INSERT INTO vertical_images (
      entity_type, entity_id, entity_name, entity_slug, base_prompt, custom_prompt, image_url
    ) VALUES ('myth', $1, $2, $3, $4, $5, $6)
    `,
    [entity.id, entity.name, entity.slug, basePrompt, customPrompt, imageUrl]
  );
}

async function saveGeneratedImageUrl(entity, imageUrl) {
  const client = new Client({ connectionString: postgresUrl });
  await client.connect();

  try {
    await saveImageUrl(client, entity, imageUrl);
  } finally {
    await client.end();
  }
}

function getPresetForEntity(entity) {
  if (target === "vertical" || entity.preset === "vertical") return "vertical";
  if (target === "home" || entity.type === "homeBanner") return "homeBanner";
  if (entity.preset && IMAGE_PRESETS[entity.preset]) return entity.preset;
  return "horizontal";
}

async function generateAndUpload(openai, entity) {
  const preset = getPresetForEntity(entity);
  const prompt = buildCraftImagePrompt({
    entity,
    orientation: preset === "homeBanner" ? "homeBanner" : preset,
    styleProfile,
  });
  const response = await openai.images.generate(
    buildImageGenerationParams({ prompt, preset })
  );
  const imageBuffer = getImageDataBuffer(response);
  const filename = buildBlobFilename({
    preset,
    slug: entity.slug,
    entityType: entity.type,
  });
  const blob = await put(filename, imageBuffer, {
    access: "public",
    contentType: IMAGE_PRESETS[preset].contentType,
  });
  return { url: blob.url, prompt };
}

async function main() {
  ensureConfig();

  const openai = dryRun ? null : new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const rows = [];
  const entities = await loadCraftRegenerationEntities();

  console.log(
    `[craft] target=${target} limit=${limit} offset=${offset} styleProfile=${styleProfile} force=${force} dryRun=${dryRun}`
  );
  console.log(`[craft] entidades: ${entities.length}`);

  for (const entity of entities) {
    console.log(`[craft] ${entity.type}:${entity.id} ${entity.slug}`);
    if (dryRun) {
      const preset = getPresetForEntity(entity);
      const prompt = buildCraftImagePrompt({
        entity,
        orientation: preset === "homeBanner" ? "homeBanner" : preset,
        styleProfile,
      });
      rows.push({
        ...entity,
        preset,
        style_profile: styleProfile,
        prompt_preview: prompt.slice(0, 500),
      });
      continue;
    }

    const oldUrl = entity.image_url;
    const generated = await generateAndUpload(openai, entity);
    await saveGeneratedImageUrl(entity, generated.url);

    if (deleteOld && oldUrl && oldUrl !== generated.url) {
      await del(oldUrl).catch((error) => {
        console.error(`[craft] no se pudo borrar ${oldUrl}: ${error.message}`);
      });
    }

    rows.push({
      id: entity.id,
      type: entity.type,
      slug: entity.slug,
      old_url: oldUrl,
      new_url: generated.url,
      style_profile: styleProfile,
    });
    console.log(`[craft] ok ${generated.url}`);
  }

  const outDir = path.join(rootDir, "artifacts", "image-regeneration");
  await fs.mkdir(outDir, { recursive: true });
  const outPath = path.join(
    outDir,
    `${new Date().toISOString().replace(/[:.]/g, "-")}-${target}.json`
  );
  await fs.writeFile(outPath, `${JSON.stringify(rows, null, 2)}\n`);
  console.log(`[craft] reporte: ${outPath}`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    console.error("[craft] error:", error.message);
    process.exitCode = 1;
  });
}
