import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

import dotenv from "dotenv";
import pg from "pg";

import { katioBoundaryTransfers } from "../../editorial/katio/universe.mjs";

const { Client } = pg;
const confirmationPhrase = "move-three-katio-boundaries-without-unpublishing";

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

async function saveBackup(rows) {
  const directory = path.resolve("artifacts", "editorial-backups");
  await fs.mkdir(directory, { recursive: true });
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const output = path.join(directory, `katio-boundaries-${timestamp}.json`);
  await fs.writeFile(
    output,
    `${JSON.stringify(
      {
        createdAt: new Date().toISOString(),
        action: "reclassify_without_unpublishing",
        rows,
        decisions: katioBoundaryTransfers,
      },
      null,
      2,
    )}\n`,
    "utf8",
  );
  return output;
}

async function run() {
  const options = parseArgs(process.argv.slice(2));
  dotenv.config({ path: path.resolve(options.envFile), quiet: true });
  if (!connectionString()) throw new Error("No hay conexión Postgres.");
  if (options.apply && options.confirmation !== confirmationPhrase) {
    throw new Error(`Para aplicar usa --confirm=${confirmationPhrase}.`);
  }

  const client = new Client({
    connectionString: connectionString(),
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();
  try {
    const slugs = Object.keys(katioBoundaryTransfers).sort();
    const currentResult = await client.query(
      `SELECT m.*, r.name AS region, c.name AS community,
              c.slug AS community_slug, e.id AS editorial_id,
              e.region_id AS editorial_region_id,
              e.community_id AS editorial_community_id,
              e.category_path AS editorial_category_path
       FROM myths m
       JOIN regions r ON r.id = m.region_id
       JOIN communities c ON c.id = m.community_id
       LEFT JOIN editorial_myths e ON e.source_myth_id = m.id
       WHERE m.slug = ANY($1::text[])
       ORDER BY m.slug`,
      [slugs],
    );
    if (currentResult.rowCount !== slugs.length) {
      throw new Error(
        `Se esperaban ${slugs.length} fronteras y se encontraron ${currentResult.rowCount}.`,
      );
    }

    const communityNames = [
      ...new Set(
        Object.values(katioBoundaryTransfers).map(({ community }) => community),
      ),
    ];
    const destinationsResult = await client.query(
      `SELECT r.id AS region_id, r.name AS region,
              c.id AS community_id, c.name AS community, c.slug AS community_slug
       FROM regions r
       JOIN communities c ON c.region_id = r.id
       WHERE r.name = 'Andina' AND c.name = ANY($1::text[])`,
      [communityNames],
    );
    const destinations = new Map(
      destinationsResult.rows.map((row) => [row.community, row]),
    );
    const missing = communityNames.filter((name) => !destinations.has(name));
    if (missing.length) {
      throw new Error(`Faltan comunidades destino: ${missing.join(", ")}.`);
    }

    const changes = currentResult.rows.map((row) => {
      const decision = katioBoundaryTransfers[row.slug];
      const destination = destinations.get(decision.community);
      return {
        row,
        decision,
        destination,
        alreadyApplied:
          Number(row.region_id) === Number(destination.region_id) &&
          Number(row.community_id) === Number(destination.community_id) &&
          row.category_path === decision.categoryPath,
      };
    });
    console.log(
      JSON.stringify(
        {
          mode: options.apply ? "apply" : "dry-run",
          changes: changes.map(({ row, decision, destination, alreadyApplied }) => ({
            slug: row.slug,
            before: {
              region: row.region,
              community: row.community,
              categoryPath: row.category_path,
            },
            after: {
              region: destination.region,
              community: destination.community,
              categoryPath: decision.categoryPath,
            },
            reason: decision.reason,
            alreadyApplied,
            publicationAction: "preserve",
          })),
        },
        null,
        2,
      ),
    );
    if (!options.apply || changes.every(({ alreadyApplied }) => alreadyApplied)) {
      return;
    }

    const backupPath = await saveBackup(currentResult.rows);
    await client.query("BEGIN");
    try {
      for (const { row, decision, destination, alreadyApplied } of changes) {
        if (alreadyApplied) continue;
        const update = await client.query(
          `UPDATE myths
           SET region_id = $1,
               community_id = $2,
               category_path = $3,
               updated_at = NOW()
           WHERE id = $4
           RETURNING id`,
          [
            destination.region_id,
            destination.community_id,
            decision.categoryPath,
            row.id,
          ],
        );
        if (update.rowCount !== 1) throw new Error(`${row.slug}: no se actualizó.`);
        await client.query(
          `UPDATE editorial_myths
           SET region_id = $1,
               community_id = $2,
               category_path = $3,
               updated_at = NOW()
           WHERE source_myth_id = $4`,
          [
            destination.region_id,
            destination.community_id,
            decision.categoryPath,
            row.id,
          ],
        );
      }
      await client.query("COMMIT");
      console.log(
        JSON.stringify(
          {
            status: "applied",
            changed: changes.filter(({ alreadyApplied }) => !alreadyApplied)
              .length,
            backupPath,
          },
          null,
          2,
        ),
      );
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    }
  } finally {
    await client.end();
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
