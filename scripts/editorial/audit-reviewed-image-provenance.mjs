import path from "node:path";
import process from "node:process";

import dotenv from "dotenv";
import pg from "pg";

const { Client } = pg;
const strict = process.argv.includes("--strict");
const highQualityNonSquareImageCostUsd = 0.165;

const reviewedCommunityIds = [
  26, 28, 36, 40, 16, 25, 49, 47, 46, 45, 39, 23, 24, 14, 15, 17, 20, 21,
  22, 29, 30, 32, 33, 34, 1, 9, 10, 3, 7, 4,
];

function connectionString() {
  return (
    process.env.POSTGRES_URL_NON_POOLING ||
    process.env.DATABASE_URL_UNPOOLED ||
    process.env.POSTGRES_URL ||
    process.env.DATABASE_URL
  );
}

function pairKey(row) {
  return `${row.horizontal_url || ""}\n${row.vertical_url || ""}`;
}

function matches(value, pattern) {
  return pattern.test(String(value || ""));
}

dotenv.config({ path: path.resolve(".env"), quiet: true });
if (!connectionString()) throw new Error("No hay conexión Postgres.");

const client = new Client({
  connectionString: connectionString(),
  ssl: { rejectUnauthorized: false },
});

await client.connect();
try {
  const result = await client.query(
    `SELECT
       m.id,
       m.slug,
       m.title,
       c.name AS community,
       c.slug AS community_slug,
       m.image_url AS horizontal_url,
       vi.image_url AS vertical_url,
       em.research_notes,
       em.image_prompt_horizontal,
       em.image_prompt_vertical
     FROM myths m
     JOIN communities c ON c.id = m.community_id
     LEFT JOIN editorial_myths em ON em.source_myth_id = m.id
     LEFT JOIN LATERAL (
       SELECT image_url
       FROM vertical_images
       WHERE entity_type = 'myth' AND entity_id = m.id
       ORDER BY id DESC
       LIMIT 1
     ) vi ON TRUE
     WHERE m.community_id = ANY($1::int[])
     ORDER BY c.id, m.slug`,
    [reviewedCommunityIds],
  );

  const rows = result.rows;
  const groups = new Map();
  for (const row of rows) {
    const key = pairKey(row);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(row);
  }

  const duplicateGroups = [...groups.values()]
    .filter((group) => group.length > 1)
    .sort((left, right) => right.length - left.length);
  const mythsUsingDuplicatedPair = new Set(
    duplicateGroups.flatMap((group) => group.map(({ id }) => id)),
  );
  const pairsToRegenerateForUniqueness =
    mythsUsingDuplicatedPair.size - duplicateGroups.length;
  const imagesToRegenerateForUniqueness =
    pairsToRegenerateForUniqueness * 2;
  const reuseMarked = rows.filter(({ research_notes }) =>
    matches(
      research_notes,
      /reutilizad|reused|pareja de [a-z0-9'’ -]+\/[a-z0-9-]+/i,
    ),
  );
  const inheritedOrPreserved = rows.filter(({ research_notes }) =>
    matches(
      research_notes,
      /conserva|preserva|heredad|existente|sin regeneraci[oó]n|no se generaron/i,
    ),
  );
  const reuseIds = new Set(reuseMarked.map(({ id }) => id));
  const inheritedIds = new Set(inheritedOrPreserved.map(({ id }) => id));
  const uncertainOrNonSpecificIds = new Set([
    ...reuseIds,
    ...inheritedIds,
  ]);
  const strictPromptPairs = rows.filter(
    ({ image_prompt_horizontal: horizontal, image_prompt_vertical: vertical }) =>
      matches(horizontal, /2D full paper cut/i) &&
      matches(horizontal, /sin fotograf/i) &&
      matches(vertical, /2D full paper cut/i) &&
      matches(vertical, /sin fotograf/i),
  );
  const byCommunity = new Map();
  for (const row of rows) {
    const entry = byCommunity.get(row.community) || {
      myths: 0,
      duplicated: 0,
      reuseMarked: 0,
      inheritedOrPreserved: 0,
      uncertainOrNonSpecific: 0,
      strictPrompts: 0,
    };
    entry.myths += 1;
    if (mythsUsingDuplicatedPair.has(row.id)) entry.duplicated += 1;
    if (reuseIds.has(row.id)) entry.reuseMarked += 1;
    if (inheritedIds.has(row.id)) entry.inheritedOrPreserved += 1;
    if (uncertainOrNonSpecificIds.has(row.id)) {
      entry.uncertainOrNonSpecific += 1;
    }
    if (strictPromptPairs.some(({ id }) => id === row.id)) {
      entry.strictPrompts += 1;
    }
    byCommunity.set(row.community, entry);
  }

  console.log(
    JSON.stringify(
      {
        reviewedCommunities: reviewedCommunityIds.length,
        totalMyths: rows.length,
        totalImages: rows.length * 2,
        missingHorizontal: rows.filter(({ horizontal_url }) => !horizontal_url)
          .length,
        missingVertical: rows.filter(({ vertical_url }) => !vertical_url).length,
        distinctPairs: groups.size,
        duplicatePairGroups: duplicateGroups.length,
        mythsUsingDuplicatedPair: mythsUsingDuplicatedPair.size,
        pairsToRegenerateForUniqueness,
        imagesToRegenerateForUniqueness,
        estimatedOpenAiCostUsd: {
          onePass: Number(
            (
              imagesToRegenerateForUniqueness *
              highQualityNonSquareImageCostUsd
            ).toFixed(2),
          ),
          with20PercentRetries: Number(
            (
              imagesToRegenerateForUniqueness *
              highQualityNonSquareImageCostUsd *
              1.2
            ).toFixed(2),
          ),
          with30PercentRetries: Number(
            (
              imagesToRegenerateForUniqueness *
              highQualityNonSquareImageCostUsd *
              1.3
            ).toFixed(2),
          ),
        },
        reuseMarkedInNotes: reuseMarked.length,
        inheritedOrPreservedMarked: inheritedOrPreserved.length,
        overlapReuseAndInherited: rows.filter(
          ({ id }) => reuseIds.has(id) && inheritedIds.has(id),
        ).length,
        unionReuseOrInherited: uncertainOrNonSpecificIds.size,
        strictPromptPairs: strictPromptPairs.length,
        noEditorialRow: rows.filter(({ research_notes }) => !research_notes)
          .length,
        topDuplicateGroups: duplicateGroups.slice(0, 30).map((group) => ({
          count: group.length,
          myths: group.map(
            ({ community, slug }) => `${community}/${slug}`,
          ),
        })),
        byCommunity: Object.fromEntries(byCommunity),
      },
      null,
      2,
    ),
  );
  if (strict && duplicateGroups.length > 0) {
    process.exitCode = 1;
  }
} finally {
  await client.end();
}
