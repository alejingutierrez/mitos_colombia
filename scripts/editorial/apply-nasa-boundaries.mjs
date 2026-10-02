import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

import dotenv from "dotenv";
import pg from "pg";

const { Client } = pg;
const envDefault = ".env";
const confirmationPhrase = "move-cumanday-from-nasa-to-caldas-mestizo";
const staleKeyword = "Nasa - Paeces";
const replacementKeyword = "Mestizo";

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
    const currentKeywordResult = await client.query(
      `SELECT keyword
       FROM myth_keywords
       WHERE myth_id = $1
       ORDER BY keyword`,
      [current.id],
    );
    const currentKeywords = currentKeywordResult.rows.map(({ keyword }) => keyword);

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
    const taxonomyAlreadyApplied =
      Number(current.region_id) === Number(destination.region_id) &&
      Number(current.community_id) === Number(destination.community_id) &&
      current.category_path === destination.category_path;
    const focusKeywords = String(current.focus_keywords_raw || "")
      .split("|")
      .map((keyword) => keyword.trim())
      .filter(Boolean);
    const nextFocusKeywords = [
      ...focusKeywords.filter((keyword) => keyword !== staleKeyword),
      replacementKeyword,
    ].filter((keyword, index, values) => values.indexOf(keyword) === index);
    const keywordBoundaryAlreadyApplied =
      !focusKeywords.includes(staleKeyword) &&
      !currentKeywords.includes(staleKeyword) &&
      focusKeywords.includes(replacementKeyword) &&
      currentKeywords.includes(replacementKeyword);
    const alreadyApplied =
      taxonomyAlreadyApplied && keywordBoundaryAlreadyApplied;

    const backupPath = await saveBackup({
      createdAt: new Date().toISOString(),
      action: "reclassify_without_unpublishing",
      reason:
        "La adscripción Nasa depende de una inferencia tardía; el relato pertenece al complejo regional de Caldas y queda para revisión mestiza.",
      before: { myth: current, keywords: currentKeywords },
      after: {
        ...destination,
        focus_keywords_raw: nextFocusKeywords.join("|"),
        removeKeyword: staleKeyword,
        addKeyword: replacementKeyword,
      },
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
          keywords: {
            before: currentKeywords,
            remove: staleKeyword,
            add: replacementKeyword,
          },
          taxonomyAlreadyApplied,
          keywordBoundaryAlreadyApplied,
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
      if (!taxonomyAlreadyApplied) {
        const taxonomyUpdate = await client.query(
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
            destination.region_id,
            destination.community_id,
            destination.category_path,
            current.id,
            current.region_id,
            current.community_id,
            current.category_path,
          ],
        );
        if (taxonomyUpdate.rowCount !== 1) {
          throw new Error("La fila cambió desde el preflight; no se aplicó.");
        }
      }

      await client.query(
        `UPDATE myths
         SET focus_keywords_raw = $1,
             updated_at = NOW()
         WHERE id = $2`,
        [
          nextFocusKeywords.join("|"),
          current.id,
        ],
      );
      await client.query(
        `DELETE FROM myth_keywords
         WHERE myth_id = $1 AND keyword = $2`,
        [current.id, staleKeyword],
      );
      await client.query(
        `INSERT INTO myth_keywords (myth_id, keyword)
         VALUES ($1, $2)
         ON CONFLICT (myth_id, keyword) DO NOTHING`,
        [current.id, replacementKeyword],
      );
      await client.query(
        `UPDATE editorial_myths
         SET region_id = $1,
             community_id = $2,
             category_path = $3,
             focus_keywords_raw = $4,
             updated_at = NOW()
         WHERE source_myth_id = $5`,
        [
          destination.region_id,
          destination.community_id,
          destination.category_path,
          nextFocusKeywords.join("|"),
          current.id,
        ],
      );
      await client.query(
        `DELETE FROM editorial_myth_keywords
         WHERE editorial_myth_id IN (
           SELECT id FROM editorial_myths WHERE source_myth_id = $1
         )
           AND keyword = $2`,
        [current.id, staleKeyword],
      );
      await client.query(
        `INSERT INTO editorial_myth_keywords (editorial_myth_id, keyword)
         SELECT id, $2
         FROM editorial_myths
         WHERE source_myth_id = $1
         ON CONFLICT (editorial_myth_id, keyword) DO NOTHING`,
        [current.id, replacementKeyword],
      );
      const finalResult = await client.query(
        `SELECT id, slug, region_id, community_id, category_path,
                focus_keywords_raw
         FROM myths
         WHERE id = $1`,
        [current.id],
      );
      await client.query("COMMIT");
      console.log(
        JSON.stringify(
          { status: "applied", row: finalResult.rows[0], backupPath },
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
