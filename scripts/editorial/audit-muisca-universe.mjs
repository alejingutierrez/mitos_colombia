import path from "node:path";
import process from "node:process";
import dotenv from "dotenv";
import pg from "pg";
import {
  MUISCA_CATEGORY_PATH,
  boundaryExclusions,
  boundaryInclusions,
  canonicalMuiscaSlugs,
  classifiedMuiscaSlugs,
} from "../../editorial/muisca/universe.mjs";

const { Client } = pg;

function parseArray(value) {
  try {
    const parsed = JSON.parse(value || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function hasSeparatedNarrative(row) {
  return (
    ["mito", "historia", "versiones", "leccion", "similitudes"].every(
      (field) => String(row[field] || "").trim().length > 0
    ) &&
    ["Mito", "Historia", "Versiones", "Lección", "Similitudes"].every(
      (heading) => String(row.content || "").includes(`${heading}\n`)
    )
  );
}

async function run() {
  dotenv.config({ path: path.resolve(".env"), quiet: true });
  const connectionString =
    process.env.POSTGRES_URL_NON_POOLING ||
    process.env.DATABASE_URL_UNPOOLED ||
    process.env.POSTGRES_URL ||
    process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("No se encontró una conexión Postgres.");
  }

  const client = new Client({
    connectionString,
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();

  try {
    const result = await client.query(
      `SELECT m.slug, m.title, m.category_path, m.image_url,
              m.latitude, m.longitude,
              e.id AS editorial_id, e.mito, e.historia, e.versiones,
              e.leccion, e.similitudes, e.content,
              e.sources_json, e.key_sources_json, e.research_notes
       FROM myths m
       LEFT JOIN editorial_myths e ON e.source_myth_id = m.id
       WHERE m.slug = ANY($1::text[])
       ORDER BY m.slug`,
      [canonicalMuiscaSlugs]
    );

    const rowsBySlug = new Map(result.rows.map((row) => [row.slug, row]));
    const missingFromDatabase = canonicalMuiscaSlugs.filter(
      (slug) => !rowsBySlug.has(slug)
    );
    const pending = [];
    let withEditorialDossier = 0;
    let withAtLeastFiveSources = 0;
    let withImage = 0;
    let withCoordinates = 0;
    let withSeparatedNarrative = 0;

    for (const slug of canonicalMuiscaSlugs) {
      const row = rowsBySlug.get(slug);
      if (!row) {
        continue;
      }
      const sourceCount =
        parseArray(row.sources_json).length +
        parseArray(row.key_sources_json).length;
      const dossier = Boolean(
        row.editorial_id && String(row.research_notes || "").trim()
      );
      const separated = hasSeparatedNarrative(row);
      if (dossier) withEditorialDossier += 1;
      if (sourceCount >= 5) withAtLeastFiveSources += 1;
      if (row.image_url) withImage += 1;
      if (
        Number.isFinite(Number(row.latitude)) &&
        Number.isFinite(Number(row.longitude))
      ) {
        withCoordinates += 1;
      }
      if (separated) withSeparatedNarrative += 1;
      if (!dossier || sourceCount < 5 || !separated) {
        pending.push({
          slug,
          dossier,
          sourceCount,
          separatedNarrative: separated,
        });
      }
    }

    const categoryState = [
      ...boundaryExclusions.map((item) => ({
        kind: "exclusion",
        slug: item.slug,
        expected: item.targetCategoryPath,
      })),
      ...boundaryInclusions.map((item) => ({
        kind: "inclusion",
        slug: item.slug,
        expected: item.targetCategoryPath,
      })),
    ];
    const categoryResult = await client.query(
      `SELECT slug, category_path
       FROM myths
       WHERE slug = ANY($1::text[])`,
      [categoryState.map(({ slug }) => slug)]
    );
    const pathsBySlug = new Map(
      categoryResult.rows.map((row) => [row.slug, row.category_path])
    );
    const taxonomyPending = categoryState
      .filter(({ slug, expected }) => pathsBySlug.get(slug) !== expected)
      .map((item) => ({
        ...item,
        current: pathsBySlug.get(item.slug) || null,
      }));

    console.log(
      JSON.stringify(
        {
          databaseUniverse: {
            classifiedAsMuisca: classifiedMuiscaSlugs.length,
            canonicalAfterBoundaryReview: canonicalMuiscaSlugs.length,
            inclusionsFromOtherTaxonomies: boundaryInclusions.length,
            exclusionsFromMuisca: boundaryExclusions.length,
            categoryPath: MUISCA_CATEGORY_PATH,
          },
          coverage: {
            withEditorialDossier,
            withAtLeastFiveSources,
            withImage,
            withCoordinates,
            withSeparatedNarrative,
          },
          missingFromDatabase,
          pending,
          taxonomyPending,
        },
        null,
        2
      )
    );
  } finally {
    await client.end();
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

