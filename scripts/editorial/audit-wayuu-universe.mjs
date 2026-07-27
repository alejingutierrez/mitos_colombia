import path from "node:path";
import process from "node:process";
import dotenv from "dotenv";
import pg from "pg";
import {
  WAYUU_CATEGORY_PATH,
  canonicalWayuuSlugs,
  existingWayuuSlugs,
  newWayuuSlugs,
} from "../../editorial/wayuu/universe.mjs";

const { Client } = pg;

function parseArgs(argv) {
  const options = { envFile: ".env" };
  for (const arg of argv) {
    if (arg.startsWith("--env=")) {
      options.envFile = arg.slice("--env=".length);
    } else {
      throw new Error(`Argumento no reconocido: ${arg}`);
    }
  }
  return options;
}

function parseArray(value) {
  try {
    const parsed = JSON.parse(value || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function hasFiveSections(row) {
  return (
    ["mito", "historia", "versiones", "leccion", "similitudes"].every(
      (field) => String(row[field] || "").trim(),
    ) &&
    ["Mito", "Historia", "Versiones", "Lección", "Similitudes"].every(
      (heading) => String(row.content || "").includes(`${heading}\n`),
    )
  );
}

async function run() {
  const { envFile } = parseArgs(process.argv.slice(2));
  dotenv.config({ path: path.resolve(envFile), quiet: true });
  const connectionString =
    process.env.POSTGRES_URL_NON_POOLING ||
    process.env.DATABASE_URL_UNPOOLED ||
    process.env.POSTGRES_URL ||
    process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error(`No se encontró una conexión Postgres en ${envFile}.`);
  }

  const client = new Client({
    connectionString,
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();
  try {
    const result = await client.query(
      `SELECT m.id, m.slug, m.title, m.category_path, m.image_url,
              m.latitude, m.longitude,
              e.id AS editorial_id, e.mito, e.historia, e.versiones,
              e.leccion, e.similitudes, e.content,
              e.sources_json, e.key_sources_json, e.research_notes
       FROM myths m
       LEFT JOIN editorial_myths e ON e.source_myth_id = m.id
       WHERE m.category_path = $1
       ORDER BY m.slug`,
      [WAYUU_CATEGORY_PATH],
    );
    const rowsBySlug = new Map(result.rows.map((row) => [row.slug, row]));
    const missing = canonicalWayuuSlugs.filter((slug) => !rowsBySlug.has(slug));
    const unexpected = result.rows
      .map(({ slug }) => slug)
      .filter((slug) => !canonicalWayuuSlugs.includes(slug));
    const pending = [];
    let withEditorialDossier = 0;
    let withAtLeastFiveSources = 0;
    let withFiveSections = 0;
    let withCoordinates = 0;
    let withImage = 0;

    for (const slug of canonicalWayuuSlugs) {
      const row = rowsBySlug.get(slug);
      if (!row) continue;
      const sourceCount =
        parseArray(row.key_sources_json).length +
        parseArray(row.sources_json).length;
      const dossier = Boolean(
        row.editorial_id && String(row.research_notes || "").trim(),
      );
      const fiveSections = hasFiveSections(row);
      const coordinates =
        Number.isFinite(Number(row.latitude)) &&
        Number.isFinite(Number(row.longitude));
      if (dossier) withEditorialDossier += 1;
      if (sourceCount >= 5) withAtLeastFiveSources += 1;
      if (fiveSections) withFiveSections += 1;
      if (coordinates) withCoordinates += 1;
      if (row.image_url) withImage += 1;
      if (!dossier || sourceCount < 5 || !fiveSections || !coordinates) {
        pending.push({
          slug,
          dossier,
          sourceCount,
          fiveSections,
          coordinates,
        });
      }
    }

    const imageExceptions = newWayuuSlugs.filter(
      (slug) => rowsBySlug.get(slug)?.image_url,
    );
    const missingPreservedImages = existingWayuuSlugs.filter(
      (slug) => rowsBySlug.has(slug) && !rowsBySlug.get(slug).image_url,
    );
    const report = {
      universe: {
        categoryPath: WAYUU_CATEGORY_PATH,
        existingReviewed: existingWayuuSlugs.length,
        documentedAdditions: newWayuuSlugs,
        expectedTotal: canonicalWayuuSlugs.length,
        databaseTotal: result.rowCount,
      },
      coverage: {
        withEditorialDossier,
        withAtLeastFiveSources,
        withFiveSections,
        withCoordinates,
        withImage,
        withoutImageByDecision: newWayuuSlugs.length,
      },
      missing,
      unexpected,
      pending,
      imageExceptions,
      missingPreservedImages,
    };
    console.log(JSON.stringify(report, null, 2));
    if (
      missing.length ||
      unexpected.length ||
      pending.length ||
      imageExceptions.length ||
      missingPreservedImages.length
    ) {
      throw new Error("La auditoría Wayuu encontró diferencias pendientes.");
    }
  } finally {
    await client.end();
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
