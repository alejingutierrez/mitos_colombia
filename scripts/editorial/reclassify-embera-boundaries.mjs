import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

import dotenv from "dotenv";
import pg from "pg";

import {
  assertEmberaBoundaryCoverage,
  emberaBoundaryMoves,
} from "../../editorial/embera/universe.mjs";

const { Client } = pg;
const confirmationPhrase = "reclassify-embera-boundaries";
const rootDir = path.resolve(new URL("../..", import.meta.url).pathname);

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

async function resolveTarget(client, move) {
  const result = await client.query(
    `SELECT c.id AS community_id, c.name AS community_name,
            r.id AS region_id, r.name AS region_name
     FROM communities c
     JOIN regions r ON r.id = c.region_id
     WHERE c.slug = $1 AND r.slug = $2`,
    [move.targetCommunity, move.targetRegion],
  );
  if (result.rowCount !== 1) {
    throw new Error(
      `Taxonomía ambigua para ${move.targetRegion}/${move.targetCommunity}: ${result.rowCount} filas.`,
    );
  }
  return result.rows[0];
}

async function buildPlan(client) {
  const slugs = Object.keys(emberaBoundaryMoves).sort();
  const current = await client.query(
    `SELECT m.*, c.name AS community_name, c.slug AS community_slug,
            r.name AS region_name, r.slug AS region_slug
     FROM myths m
     JOIN communities c ON c.id = m.community_id
     JOIN regions r ON r.id = m.region_id
     WHERE m.slug = ANY($1::text[])
     ORDER BY m.slug`,
    [slugs],
  );
  if (current.rowCount !== slugs.length) {
    const found = new Set(current.rows.map(({ slug }) => slug));
    throw new Error(
      `Faltan mitos para reclasificar: ${slugs.filter((slug) => !found.has(slug)).join(", ")}.`,
    );
  }

  const editorials = await client.query(
    `SELECT *
     FROM editorial_myths
     WHERE source_myth_id = ANY($1::int[])
     ORDER BY source_myth_id`,
    [current.rows.map(({ id }) => id)],
  );
  const editorialByMythId = new Map(
    editorials.rows.map((row) => [row.source_myth_id, row]),
  );

  const targets = new Map();
  for (const move of Object.values(emberaBoundaryMoves)) {
    const key = `${move.targetRegion}/${move.targetCommunity}`;
    if (!targets.has(key)) {
      targets.set(key, await resolveTarget(client, move));
    }
  }

  return current.rows.map((row) => {
    const move = emberaBoundaryMoves[row.slug];
    const target = targets.get(
      `${move.targetRegion}/${move.targetCommunity}`,
    );
    return {
      slug: row.slug,
      before: row,
      beforeEditorial: editorialByMythId.get(row.id) ?? null,
      after: {
        region_id: target.region_id,
        region: target.region_name,
        community_id: target.community_id,
        community: target.community_name,
        category_path: move.targetCategoryPath,
      },
      reason: move.reason,
    };
  });
}

async function saveBackup(plan) {
  const outputDir = path.join(rootDir, "artifacts", "editorial-backups");
  await fs.mkdir(outputDir, { recursive: true });
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const outputPath = path.join(
    outputDir,
    `embera-boundary-reclassification-${timestamp}.json`,
  );
  await fs.writeFile(
    outputPath,
    `${JSON.stringify(
      {
        createdAt: new Date().toISOString(),
        action: "reclassify",
        rows: plan,
      },
      null,
      2,
    )}\n`,
    "utf8",
  );
  return outputPath;
}

async function applyPlan(client, plan) {
  await client.query("BEGIN");
  try {
    for (const item of plan) {
      const result = await client.query(
        `UPDATE myths
         SET region_id = $1,
             community_id = $2,
             category_path = $3,
             updated_at = NOW()
         WHERE id = $4
           AND region_id = $5
           AND community_id = $6
           AND category_path = $7
         RETURNING id`,
        [
          item.after.region_id,
          item.after.community_id,
          item.after.category_path,
          item.before.id,
          item.before.region_id,
          item.before.community_id,
          item.before.category_path,
        ],
      );
      if (result.rowCount !== 1) {
        throw new Error(
          `${item.slug}: la fila cambió desde el preflight; se aborta toda la transacción.`,
        );
      }

      if (item.beforeEditorial) {
        const editorialResult = await client.query(
          `UPDATE editorial_myths
           SET region_id = $1,
               community_id = $2,
               category_path = $3,
               updated_at = NOW()
           WHERE id = $4
             AND source_myth_id = $5
             AND region_id IS NOT DISTINCT FROM $6
             AND community_id IS NOT DISTINCT FROM $7
             AND category_path IS NOT DISTINCT FROM $8
           RETURNING id`,
          [
            item.after.region_id,
            item.after.community_id,
            item.after.category_path,
            item.beforeEditorial.id,
            item.before.id,
            item.beforeEditorial.region_id,
            item.beforeEditorial.community_id,
            item.beforeEditorial.category_path,
          ],
        );
        if (editorialResult.rowCount !== 1) {
          throw new Error(
            `${item.slug}: el expediente editorial cambió desde el preflight; se aborta toda la transacción.`,
          );
        }
      }
    }
    await client.query("COMMIT");
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  }
}

const options = parseArgs(process.argv.slice(2));
dotenv.config({ path: path.resolve(options.envFile), quiet: true });
const postgresUrl = connectionString();
if (!postgresUrl) {
  throw new Error("Falta POSTGRES_URL o DATABASE_URL.");
}
if (options.apply && options.confirmation !== confirmationPhrase) {
  throw new Error(
    `Para aplicar usa --confirm=${confirmationPhrase}.`,
  );
}

assertEmberaBoundaryCoverage();
const client = new Client({ connectionString: postgresUrl });
await client.connect();
try {
  const plan = await buildPlan(client);
  if (!options.apply) {
    console.log(
      JSON.stringify(
        {
          mode: "dry-run",
          count: plan.length,
          moves: plan.map(({ slug, before, after, reason }) => ({
            slug,
            from: `${before.region_name}/${before.community_name}`,
            to: `${after.region}/${after.community}`,
            category_path: after.category_path,
            reason,
          })),
        },
        null,
        2,
      ),
    );
  } else {
    const backupPath = await saveBackup(plan);
    await applyPlan(client, plan);
    console.log(
      JSON.stringify(
        {
          mode: "apply",
          count: plan.length,
          backupPath,
        },
        null,
        2,
      ),
    );
  }
} finally {
  await client.end();
}
