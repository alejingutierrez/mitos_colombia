import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import OpenAI from "openai";
import path from "node:path";
import { getSqlClient, getSqliteDb, isPostgres } from "../../../../lib/db.js";
import {
  APPROVED_IMAGE_STYLE_PROFILE,
  buildCraftImagePrompt,
  buildImageGenerationParams,
  getImageDataBuffer,
  IMAGE_GENERATION_FORMAT,
  IMAGE_GENERATION_MODEL,
  IMAGE_GENERATION_QUALITY,
  IMAGE_PRESETS,
} from "../../../../lib/image-generation.js";
import {
  buildStyleApplicationScopes,
  buildStyleReviewRoundCandidates,
  STYLE_PROFILE_OPTIONS,
  STYLE_REVIEW_CRITERIA,
  STYLE_REVIEW_PRODUCTION_BATCH,
  STYLE_REVIEW_SAMPLES,
} from "../../../../lib/image-style-review-data.js";

export const runtime = "nodejs";
export const maxDuration = 300;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
const LOCAL_COMPANION_ENABLED =
  process.env.NODE_ENV !== "production" ||
  process.env.IMAGE_STYLE_REVIEW_LOCAL === "true";
const LOCAL_ROUNDS_DIR = path.join(
  process.cwd(),
  "artifacts",
  "image-style-review"
);
const LOCAL_ASSET_ROUTE = "/api/admin/image-style-review";

function disabledResponse() {
  return NextResponse.json(
    { error: "Visual companion local solamente" },
    { status: 404 }
  );
}

function checkAuth(request) {
  const authHeader = request.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return false;
  }

  const base64Credentials = authHeader.split(" ")[1];
  const credentials = Buffer.from(base64Credentials, "base64").toString("utf-8");
  const [username, password] = credentials.split(":");
  const validUsername = process.env.ADMIN_USERNAME || "admin";
  const validPassword = process.env.ADMIN_PASSWORD || "admin";

  return username === validUsername && password === validPassword;
}

function getDailySeed() {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor((now - startOfYear) / oneDay);
}

function isCraftCandidateUrl(value) {
  const url = String(value || "");
  return (
    url.includes("/api/admin/image-style-review?asset=") ||
    url.includes("/samples/image-craft/") ||
    url.includes("/samples/image-style-rounds/") ||
    /-178355\d+\.(jpe?g|png)$/i.test(url) ||
    /\.jpe?g(\?|$)/i.test(url)
  );
}

function mapImageRow(row, type) {
  return {
    id: row.id,
    type,
    title: row.title || row.name,
    name: row.name || row.title,
    slug: row.slug,
    region: row.region || "",
    community: row.community || "",
    imageUrl: row.image_url || null,
    isCraftCandidate: isCraftCandidateUrl(row.image_url),
  };
}

function getStyleProfileLabel(styleProfile) {
  return (
    STYLE_PROFILE_OPTIONS.find((profile) => profile.value === styleProfile)?.label ||
    styleProfile
  );
}

function isValidStyleProfile(styleProfile) {
  return STYLE_PROFILE_OPTIONS.some((profile) => profile.value === styleProfile);
}

function normalizeStyleProfileSlug(value) {
  return safeSlug(value).replace(/-/g, "");
}

function localAssetUrl(relativePath) {
  return `${LOCAL_ASSET_ROUTE}?asset=${encodeURIComponent(relativePath)}`;
}

function getContentType(filePath) {
  const lower = filePath.toLowerCase();
  if (lower.endsWith(".png")) return "image/png";
  if (lower.endsWith(".webp")) return "image/webp";
  return "image/jpeg";
}

async function listLocalFiles(dir, baseDir = dir) {
  let entries = [];
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }

  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listLocalFiles(fullPath, baseDir)));
    } else if (/\.(jpe?g|png|webp)$/i.test(entry.name)) {
      files.push(path.relative(baseDir, fullPath).replaceAll(path.sep, "/"));
    }
  }
  return files;
}

async function listLocalManifestFiles(dir, baseDir = dir) {
  let entries = [];
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }

  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listLocalManifestFiles(fullPath, baseDir)));
    } else if (entry.name === "round.json") {
      files.push(path.relative(baseDir, fullPath).replaceAll(path.sep, "/"));
    }
  }
  return files;
}

async function serveLocalAsset(assetPath) {
  const normalized = String(assetPath || "").replace(/^\/+/, "");
  const fullPath = path.resolve(LOCAL_ROUNDS_DIR, normalized);
  const root = path.resolve(LOCAL_ROUNDS_DIR);
  if (!fullPath.startsWith(`${root}${path.sep}`)) {
    return NextResponse.json({ error: "Asset invalido" }, { status: 400 });
  }

  try {
    const bytes = await fs.readFile(fullPath);
    return new NextResponse(bytes, {
      headers: {
        "Content-Type": getContentType(fullPath),
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    return NextResponse.json({ error: "Asset no encontrado" }, { status: 404 });
  }
}

async function parseLocalRoundFile(relativePath) {
  const parts = String(relativePath || "").split("/");
  const styleSlug = parts[0] || "";
  const maybeRoundId = parts.length > 2 ? parts[1] : "";
  const filename = parts.at(-1) || "";
  const match = filename.match(/^([a-zA-Z]+)-(\d+)-(.+)-(\d+)\.(jpe?g|png|webp)$/);
  const legacyMatch = filename.match(/^([a-zA-Z]+)-(.+)-(\d+)\.(jpe?g|png|webp)$/);
  const styleProfile =
    STYLE_PROFILE_OPTIONS.find(
      (profile) => normalizeStyleProfileSlug(profile.value) === styleSlug
    )?.value || styleSlug;

  if (match) {
    return {
      id: Number.parseInt(match[2], 10),
      type: match[1],
      title: match[3].replace(/-/g, " "),
      slug: match[3],
      styleProfile,
      styleLabel: getStyleProfileLabel(styleProfile),
      imageUrl: localAssetUrl(relativePath),
      pathname: relativePath,
      roundId: maybeRoundId.startsWith("round-") ? maybeRoundId : null,
      uploadedAt: new Date(Number.parseInt(match[4], 10)).toISOString(),
      size: null,
      isPrivateRound: true,
      isCraftCandidate: true,
    };
  }

  if (legacyMatch) {
    return {
      id: null,
      type: legacyMatch[1],
      title: legacyMatch[2].replace(/-/g, " "),
      slug: legacyMatch[2],
      styleProfile,
      styleLabel: getStyleProfileLabel(styleProfile),
      imageUrl: localAssetUrl(relativePath),
      pathname: relativePath,
      roundId: maybeRoundId.startsWith("round-") ? maybeRoundId : null,
      uploadedAt: new Date(Number.parseInt(legacyMatch[3], 10)).toISOString(),
      size: null,
      isPrivateRound: true,
      isCraftCandidate: true,
    };
  }

  return null;
}

function groupPrivateRoundSets(privateRounds) {
  const groups = new Map();
  for (const item of privateRounds || []) {
    if (!item.roundId) continue;
    const current = groups.get(item.roundId) || {
      roundId: item.roundId,
      styleProfile: item.styleProfile,
      styleLabel: item.styleLabel,
      uploadedAt: item.uploadedAt,
      items: [],
    };
    current.items.push(item);
    if (new Date(item.uploadedAt || 0) > new Date(current.uploadedAt || 0)) {
      current.uploadedAt = item.uploadedAt;
    }
    groups.set(item.roundId, current);
  }

  return Array.from(groups.values())
    .map((group) => ({
      ...group,
      items: group.items.sort((a, b) => (a.id || 0) - (b.id || 0)),
    }))
    .sort((a, b) => new Date(b.uploadedAt || 0) - new Date(a.uploadedAt || 0));
}

async function getPrivateRounds() {
  try {
    const files = await listLocalFiles(LOCAL_ROUNDS_DIR);
    const parsed = await Promise.all(files.map(parseLocalRoundFile));
    return parsed
      .filter(Boolean)
      .sort((a, b) => new Date(b.uploadedAt || 0) - new Date(a.uploadedAt || 0));
  } catch (error) {
    console.error("[image-style-review] Could not list private rounds:", error);
    return [];
  }
}

async function getLocalRoundManifests() {
  try {
    const files = await listLocalManifestFiles(LOCAL_ROUNDS_DIR);
    const manifests = await Promise.all(
      files.map(async (relativePath) => {
        const fullPath = path.join(LOCAL_ROUNDS_DIR, relativePath);
        const raw = await fs.readFile(fullPath, "utf8");
        const manifest = JSON.parse(raw);
        const styleSlug = relativePath.split("/")[0] || safeSlug(manifest.styleProfile);
        return {
          roundId: manifest.roundId,
          status: manifest.status,
          styleProfile: manifest.styleProfile,
          styleLabel: getStyleProfileLabel(manifest.styleProfile),
          note: manifest.note,
          seed: manifest.seed,
          uploadedAt: manifest.updatedAt || manifest.createdAt,
          manifestPath: relativePath,
          items: (manifest.items || []).map((item) => ({
            id: item.id,
            type: item.type || "myth",
            title: item.title || item.name || item.slug,
            name: item.title || item.name || item.slug,
            slug: item.slug,
            region: item.region || "",
            community: item.community || "",
            imageUrl: item.filename
              ? localAssetUrl(`${styleSlug}/${manifest.roundId}/${item.filename}`)
              : null,
            roundId: manifest.roundId,
            styleProfile: manifest.styleProfile,
            styleLabel: getStyleProfileLabel(manifest.styleProfile),
            status: item.status,
            isPrivateRound: true,
            isCraftCandidate: Boolean(item.filename),
          })),
        };
      })
    );

    return manifests.sort(
      (a, b) => new Date(b.uploadedAt || 0) - new Date(a.uploadedAt || 0)
    );
  } catch (error) {
    console.error("[image-style-review] Could not read round manifests:", error);
    return [];
  }
}

function mergeRoundSets(manifestSets, fileSets) {
  const byId = new Map();
  for (const round of fileSets || []) {
    byId.set(round.roundId, round);
  }
  for (const round of manifestSets || []) {
    byId.set(round.roundId, round);
  }
  return Array.from(byId.values()).sort(
    (a, b) => new Date(b.uploadedAt || 0) - new Date(a.uploadedAt || 0)
  );
}

function normalizeRows(result) {
  return result?.rows || result || [];
}

async function getCurrentHomePostgres(seed) {
  const db = getSqlClient();
  const [mythsResult, regionsResult, bannersResult] = await Promise.all([
    db.query(
      `
      SELECT
        m.id,
        m.title,
        m.slug,
        m.image_url,
        r.name AS region,
        COALESCE(c.name, '') AS community
      FROM myths m
      JOIN regions r ON r.id = m.region_id
      LEFT JOIN communities c ON c.id = m.community_id
      WHERE m.image_url IS NOT NULL
      ORDER BY (m.id + $1) % 23, m.id
      LIMIT 9
      `,
      [seed]
    ),
    db.query(
      `
      SELECT
        r.id,
        r.name AS title,
        r.slug,
        r.image_url,
        r.name AS region,
        COUNT(m.id) AS myth_count
      FROM regions r
      LEFT JOIN myths m ON m.region_id = r.id
      GROUP BY r.id
      ORDER BY COUNT(m.id) DESC, r.name ASC
      LIMIT 6
      `
    ),
    db.query(
      `
      SELECT
        id,
        title,
        slug,
        image_url,
        'Varios' AS region,
        '' AS community
      FROM home_banners
      WHERE is_active = TRUE
      ORDER BY order_index ASC, id ASC
      `
    ),
  ]);

  return {
    seed,
    myths: normalizeRows(mythsResult).map((row) => mapImageRow(row, "myth")),
    regions: normalizeRows(regionsResult).map((row) => ({
      ...mapImageRow(row, "region"),
      mythCount: Number(row.myth_count || 0),
    })),
    banners: normalizeRows(bannersResult).map((row) =>
      mapImageRow(row, "homeBanner")
    ),
  };
}

function getCurrentHomeSqlite(seed) {
  const db = getSqliteDb();
  const myths = db
    .prepare(
      `
      SELECT
        m.id,
        m.title,
        m.slug,
        m.image_url,
        r.name AS region,
        COALESCE(c.name, '') AS community
      FROM myths m
      JOIN regions r ON r.id = m.region_id
      LEFT JOIN communities c ON c.id = m.community_id
      WHERE m.image_url IS NOT NULL
      ORDER BY (m.id + ?) % 23, m.id
      LIMIT 9
      `
    )
    .all(seed);
  const regions = db
    .prepare(
      `
      SELECT
        r.id,
        r.name AS title,
        r.slug,
        r.image_url,
        r.name AS region,
        COUNT(m.id) AS myth_count
      FROM regions r
      LEFT JOIN myths m ON m.region_id = r.id
      GROUP BY r.id
      ORDER BY COUNT(m.id) DESC, r.name ASC
      LIMIT 6
      `
    )
    .all();
  let banners = [];
  try {
    banners = db
      .prepare(
        `
        SELECT
          id,
          title,
          slug,
          image_url,
          'Varios' AS region,
          '' AS community
        FROM home_banners
        WHERE is_active = 1
        ORDER BY order_index ASC, id ASC
        `
      )
      .all();
  } catch (error) {
    banners = [];
  }

  return {
    seed,
    myths: myths.map((row) => mapImageRow(row, "myth")),
    regions: regions.map((row) => ({
      ...mapImageRow(row, "region"),
      mythCount: Number(row.myth_count || 0),
    })),
    banners: banners.map((row) => mapImageRow(row, "homeBanner")),
  };
}

async function getProductionBatchPostgres() {
  const db = getSqlClient();
  const [mythsResult, regionsResult, bannersResult] = await Promise.all([
    db.query(
      `
      SELECT
        m.id,
        m.title,
        m.slug,
        m.image_url,
        r.name AS region,
        COALESCE(c.name, '') AS community
      FROM myths m
      JOIN regions r ON r.id = m.region_id
      LEFT JOIN communities c ON c.id = m.community_id
      WHERE m.id = ANY($1::int[])
      ORDER BY m.id
      `,
      [STYLE_REVIEW_PRODUCTION_BATCH.mythIds]
    ),
    db.query(
      `
      SELECT
        id,
        name AS title,
        slug,
        image_url,
        name AS region,
        '' AS community
      FROM regions
      WHERE id = ANY($1::int[])
      ORDER BY id
      `,
      [STYLE_REVIEW_PRODUCTION_BATCH.regionIds]
    ),
    db.query(
      `
      SELECT
        id,
        title,
        slug,
        image_url,
        'Varios' AS region,
        '' AS community
      FROM home_banners
      WHERE id = ANY($1::int[])
      ORDER BY order_index ASC, id ASC
      `,
      [STYLE_REVIEW_PRODUCTION_BATCH.homeBannerIds]
    ),
  ]);

  return {
    myths: normalizeRows(mythsResult).map((row) => mapImageRow(row, "myth")),
    regions: normalizeRows(regionsResult).map((row) =>
      mapImageRow(row, "region")
    ),
    banners: normalizeRows(bannersResult).map((row) =>
      mapImageRow(row, "homeBanner")
    ),
  };
}

function getProductionBatchSqlite() {
  const db = getSqliteDb();
  const mythPlaceholders = STYLE_REVIEW_PRODUCTION_BATCH.mythIds
    .map(() => "?")
    .join(", ");
  const regionPlaceholders = STYLE_REVIEW_PRODUCTION_BATCH.regionIds
    .map(() => "?")
    .join(", ");
  const bannerPlaceholders = STYLE_REVIEW_PRODUCTION_BATCH.homeBannerIds
    .map(() => "?")
    .join(", ");
  const myths = db
    .prepare(
      `
      SELECT
        m.id,
        m.title,
        m.slug,
        m.image_url,
        r.name AS region,
        COALESCE(c.name, '') AS community
      FROM myths m
      JOIN regions r ON r.id = m.region_id
      LEFT JOIN communities c ON c.id = m.community_id
      WHERE m.id IN (${mythPlaceholders})
      ORDER BY m.id
      `
    )
    .all(...STYLE_REVIEW_PRODUCTION_BATCH.mythIds);
  const regions = db
    .prepare(
      `
      SELECT
        id,
        name AS title,
        slug,
        image_url,
        name AS region,
        '' AS community
      FROM regions
      WHERE id IN (${regionPlaceholders})
      ORDER BY id
      `
    )
    .all(...STYLE_REVIEW_PRODUCTION_BATCH.regionIds);
  let banners = [];
  try {
    banners = db
      .prepare(
        `
        SELECT
          id,
          title,
          slug,
          image_url,
          'Varios' AS region,
          '' AS community
        FROM home_banners
        WHERE id IN (${bannerPlaceholders})
        ORDER BY order_index ASC, id ASC
        `
      )
      .all(...STYLE_REVIEW_PRODUCTION_BATCH.homeBannerIds);
  } catch (error) {
    banners = [];
  }

  return {
    myths: myths.map((row) => mapImageRow(row, "myth")),
    regions: regions.map((row) => mapImageRow(row, "region")),
    banners: banners.map((row) => mapImageRow(row, "homeBanner")),
  };
}

async function getEntityPostgres(entityType, entityId) {
  const db = getSqlClient();
  if (entityType === "myth") {
    const result = await db.query(
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
      WHERE m.id = $1
      `,
      [entityId]
    );
    return normalizeRows(result)[0] || null;
  }
  if (entityType === "region") {
    const result = await db.query(
      `
      SELECT
        id,
        name,
        slug,
        NULL AS excerpt,
        image_prompt,
        image_url,
        name AS region,
        '' AS community,
        'region' AS type
      FROM regions
      WHERE id = $1
      `,
      [entityId]
    );
    return normalizeRows(result)[0] || null;
  }
  if (entityType === "homeBanner") {
    const result = await db.query(
      `
      SELECT
        id,
        title AS name,
        slug,
        description AS excerpt,
        image_prompt,
        image_url,
        'Varios' AS region,
        '' AS community,
        'homeBanner' AS type
      FROM home_banners
      WHERE id = $1
      `,
      [entityId]
    );
    return normalizeRows(result)[0] || null;
  }
  if (entityType === "community") {
    const result = await db.query(
      `
      SELECT
        c.id,
        c.name,
        c.slug,
        NULL AS excerpt,
        c.image_prompt,
        c.image_url,
        r.name AS region,
        c.name AS community,
        'community' AS type
      FROM communities c
      JOIN regions r ON r.id = c.region_id
      WHERE c.id = $1
      `,
      [entityId]
    );
    return normalizeRows(result)[0] || null;
  }
  if (entityType === "category") {
    const result = await db.query(
      `
      SELECT
        id,
        name,
        slug,
        description AS excerpt,
        image_prompt,
        image_url,
        'Varios' AS region,
        '' AS community,
        'category' AS type
      FROM tags
      WHERE id = $1
      `,
      [entityId]
    );
    return normalizeRows(result)[0] || null;
  }
  return null;
}

function getEntitySqlite(entityType, entityId) {
  const db = getSqliteDb();
  if (entityType === "myth") {
    return db
      .prepare(
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
        WHERE m.id = ?
        `
      )
      .get(entityId);
  }
  if (entityType === "region") {
    return db
      .prepare(
        `
        SELECT
          id,
          name,
          slug,
          NULL AS excerpt,
          image_prompt,
          image_url,
          name AS region,
          '' AS community,
          'region' AS type
        FROM regions
        WHERE id = ?
        `
      )
      .get(entityId);
  }
  if (entityType === "homeBanner") {
    try {
      return db
        .prepare(
          `
          SELECT
            id,
            title AS name,
            slug,
            description AS excerpt,
            image_prompt,
            image_url,
            'Varios' AS region,
            '' AS community,
            'homeBanner' AS type
          FROM home_banners
          WHERE id = ?
          `
        )
        .get(entityId);
    } catch (error) {
      return null;
    }
  }
  if (entityType === "community") {
    return db
      .prepare(
        `
        SELECT
          c.id,
          c.name,
          c.slug,
          NULL AS excerpt,
          c.image_prompt,
          c.image_url,
          r.name AS region,
          c.name AS community,
          'community' AS type
        FROM communities c
        JOIN regions r ON r.id = c.region_id
        WHERE c.id = ?
        `
      )
      .get(entityId);
  }
  if (entityType === "category") {
    return db
      .prepare(
        `
        SELECT
          id,
          name,
          slug,
          description AS excerpt,
          image_prompt,
          image_url,
          'Varios' AS region,
          '' AS community,
          'category' AS type
        FROM tags
        WHERE id = ?
        `
      )
      .get(entityId);
  }
  return null;
}

async function getEntity(entityType, entityId) {
  return isPostgres()
    ? getEntityPostgres(entityType, entityId)
    : getEntitySqlite(entityType, entityId);
}

function safeSlug(value) {
  return String(value || "image")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function getPresetForEntity(entityType, requestedPreset) {
  if (requestedPreset && IMAGE_PRESETS[requestedPreset]) {
    return requestedPreset;
  }
  if (entityType === "homeBanner") {
    return "homeBanner";
  }
  return "horizontal";
}

async function generatePrivateRoundImage({
  entity,
  entityType,
  preset,
  styleProfile,
  roundId = null,
}) {
  const orientation = preset === "homeBanner" ? "homeBanner" : preset;
  const prompt = buildCraftImagePrompt({
    entity,
    orientation,
    styleProfile,
  });
  const response = await openai.images.generate(
    buildImageGenerationParams({ prompt, preset })
  );
  const imageBuffer = getImageDataBuffer(response);
  const filenameParts = [
    safeSlug(styleProfile),
  ];
  if (roundId) {
    filenameParts.push(roundId);
  } else {
    filenameParts.push("single");
  }
  const relativePath = [
    ...filenameParts,
    `${entityType}-${entity.id}-${safeSlug(entity.slug)}-${Date.now()}.${
      IMAGE_PRESETS[preset].extension
    }`,
  ].join("/");
  const fullPath = path.join(LOCAL_ROUNDS_DIR, relativePath);
  await fs.mkdir(path.dirname(fullPath), { recursive: true });
  await fs.writeFile(fullPath, imageBuffer);

  return {
    imageUrl: localAssetUrl(relativePath),
    prompt,
    entity: mapImageRow(
      { ...entity, title: entity.name, image_url: localAssetUrl(relativePath) },
      entityType
    ),
    preset,
    styleProfile,
    roundId,
  };
}

async function buildReviewPayload() {
  const seed = getDailySeed();
  const [currentHome, productionBatch] = await Promise.all([
    isPostgres() ? getCurrentHomePostgres(seed) : getCurrentHomeSqlite(seed),
    isPostgres() ? getProductionBatchPostgres() : getProductionBatchSqlite(),
  ]);
  const privateRounds = await getPrivateRounds();
  const manifestRoundSets = await getLocalRoundManifests();
  const roundCandidates = buildStyleReviewRoundCandidates(currentHome);

  return {
    config: {
      model: IMAGE_GENERATION_MODEL,
      quality: IMAGE_GENERATION_QUALITY,
      format: IMAGE_GENERATION_FORMAT,
      presets: IMAGE_PRESETS,
      profiles: STYLE_PROFILE_OPTIONS,
      criteria: STYLE_REVIEW_CRITERIA,
    },
    samples: STYLE_REVIEW_SAMPLES,
    privateRounds,
    privateRoundSets: mergeRoundSets(
      manifestRoundSets,
      groupPrivateRoundSets(privateRounds)
    ),
    roundCandidates,
    currentHome,
    applicationPlan: {
      seed,
      scopes: buildStyleApplicationScopes(currentHome),
    },
    productionBatch,
  };
}

export async function GET(request) {
  const url = new URL(request.url);
  const assetPath = url.searchParams.get("asset");

  if (assetPath) {
    if (!LOCAL_COMPANION_ENABLED) {
      return disabledResponse();
    }
    return serveLocalAsset(assetPath);
  }

  if (!LOCAL_COMPANION_ENABLED) {
    return disabledResponse();
  }

  if (!checkAuth(request)) {
    return NextResponse.json(
      { error: "Unauthorized" },
      {
        status: 401,
        headers: { "WWW-Authenticate": 'Basic realm="Admin Area"' },
      }
    );
  }

  try {
    return NextResponse.json(await buildReviewPayload());
  } catch (error) {
    console.error("[image-style-review] GET error:", error);
    return NextResponse.json(
      { error: error.message || "No se pudo cargar la ronda visual" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  if (!LOCAL_COMPANION_ENABLED) {
    return disabledResponse();
  }

  if (!checkAuth(request)) {
    return NextResponse.json(
      { error: "Unauthorized" },
      {
        status: 401,
        headers: { "WWW-Authenticate": 'Basic realm="Admin Area"' },
      }
    );
  }

  try {
    const body = await request.json();
    const mode = String(body.mode || "single");
    const entityType = String(body.entityType || "myth");
    const entityId = Number.parseInt(body.entityId, 10);
    const styleProfile = String(body.styleProfile || APPROVED_IMAGE_STYLE_PROFILE);
    const preset = getPresetForEntity(entityType, body.preset);

    if (!isValidStyleProfile(styleProfile)) {
      return NextResponse.json({ error: "Perfil visual invalido" }, { status: 400 });
    }

    if (mode === "round") {
      return NextResponse.json({
        error:
          "Las rondas completas se generan con npm run images:style-round para evitar requests largos.",
      }, { status: 409 });
    }

    if (mode !== "single") {
      return NextResponse.json({ error: "Modo de ronda invalido" }, { status: 400 });
    }

    if (!["myth", "region", "homeBanner", "community", "category"].includes(entityType)) {
      return NextResponse.json({ error: "Tipo de entidad invalido" }, { status: 400 });
    }
    if (!Number.isFinite(entityId)) {
      return NextResponse.json({ error: "entityId es requerido" }, { status: 400 });
    }

    const entity = await getEntity(entityType, entityId);
    if (!entity) {
      return NextResponse.json({ error: "Entidad no encontrada" }, { status: 404 });
    }

    const generated = await generatePrivateRoundImage({
      entity,
      entityType,
      preset,
      styleProfile,
    });

    return NextResponse.json({
      success: true,
      committed: false,
      mode,
      imageUrl: generated.imageUrl,
      prompt: generated.prompt,
      entity: generated.entity,
      preset: generated.preset,
      styleProfile: generated.styleProfile,
    });
  } catch (error) {
    console.error("[image-style-review] POST error:", error);
    return NextResponse.json(
      { error: error.message || "No se pudo generar la muestra visual" },
      { status: 500 }
    );
  }
}
