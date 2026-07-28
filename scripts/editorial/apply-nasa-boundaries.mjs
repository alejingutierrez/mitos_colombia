import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

import dotenv from "dotenv";
import pg from "pg";

const { Client } = pg;
const envDefault = ".env";
const confirmationPhrase = "move-cumanday-from-nasa-to-caldas-mestizo";

function parseArgs(argv) {
  const options = { apply: false, confirmation: "", envFile: envDefault };
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

async function saveBackup(payload) {
  const outputDir = path.resolve("artifacts", "editorial-backups");
  await fs.mkdir(outputDir, { recursive: true });
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const outputPath = path.join(
    outputDir,
    `nasa-boundary-cumanday-${timestamp}.json`,
  );
  await fs.writeFile(
    outputPath,
    `${JSON.stringify(payload, null, 2)}\n`,
    "utf8",
  );
  return outputPath;
}

async function run() {
  const options = parseArgs(process.argv.slice(2));
  dotenv.config({ path: path.resolve(options.envFile), quiet: true });
  if (!connectionString()) {
    throw new Error(`No se encontró conexión Postgres en ${options.envFile}.`);
  }

  const client = new Client({
    connectionString: connectionString(),
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();
  try {
    const currentResult = await client.query(
      `SELECT m.*, r.name AS region, c.name AS community, c.slug AS community_slug
       FROM myths m
       JOIN regions r ON r.id = m.region_id
       LEFT JOIN communities c ON c.id = m.community_id
       WHERE m.slug = 'el-cacique-cumanday'
       LIMIT 1`,
    );
    if (!currentResult.rowCount) {
      throw new Error("No existe el-cacique-cumanday.");
    }
    const current = currentResult.rows[0];

    const destinationResult = await client.query(
      `SELECT r.id AS region_id, r.name AS region,
              c.id AS community_id, c.name AS community, c.slug AS community_slug
       FROM regions r
       JOIN communities c ON c.region_id = r.id
       WHERE r.name = 'Andina' AND c.name = 'Mestizo'
       ORDER BY c.id
       LIMIT 1`,
    );
    if (!destinationResult.rowCount) {
      throw new Error("No existe la taxonomía Andina > Mestizo.");
    }
    const destination = {
      ...destinationResult.rows[0],
      category_path: "Andina > Caldas > Mestizo",
    };
    const alreadyApplied =
      Number(current.region_id) === Number(destination.region_id) &&
      Number(current.community_id) === Number(destination.community_id) &&
      current.category_path === destination.category_path;

    const backupPath = await saveBackup({
      createdAt: new Date().toISOString(),
      action: "reclassify_without_unpublishing",
      reason:
        "La adscripción Nasa depende de una inferencia tardía; el relato pertenece al complejo regional de Caldas y queda para revisión mestiza.",
      before: current,
      after: destination,
    });
    console.log(
      JSON.stringify(
        {
          mode: options.apply ? "apply" : "dry-run",
          slug: current.slug,
          before: {
            region_id: current.region_id,
            community_id: current.community_id,
            category_path: current.category_path,
          },
          after: destination,
          alreadyApplied,
          backupPath,
        },
        null,
        2,
      ),
    );

    if (alreadyApplied) {
      console.log("La reclasificación ya estaba aplicada.");
      return;
    }
    if (!options.apply) {
      console.log(
        `Dry-run completo. Para aplicar: --apply --confirm=${confirmationPhrase}`,
      );
      return;
    }
    if (options.confirmation !== confirmationPhrase) {
      throw new Error(
        `Confirmación inválida. Use --confirm=${confirmationPhrase}`,
      );
    }

    await client.query("BEGIN");
    try {
      const updateResult = await client.query(
        `UPDATE myths
         SET region_id = $1,
             community_id = $2,
             category_path = $3,
             updated_at = NOW()
         WHERE id = $4
           AND region_id = $5
           AND community_id = $6
           AND category_path = $7
         RETURNING id, slug, region_id, community_id, category_path`,
        [
          destination.region_id,
          destination.community_id,
          destination.category_path,
          current.id,
          current.region_id,
          current.community_id,
          current.category_path,
        ],
      );
      if (updateResult.rowCount !== 1) {
        throw new Error("La fila cambió desde el preflight; no se aplicó.");
      }
      await client.query("COMMIT");
      console.log(
        JSON.stringify(
          { status: "applied", row: updateResult.rows[0], backupPath },
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
