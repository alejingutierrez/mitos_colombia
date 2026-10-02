import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import dotenv from "dotenv";
import pg from "pg";
import { boundaryExclusions } from "../../editorial/muisca/universe.mjs";

const { Client } = pg;
const apply = process.argv.includes("--apply");

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
    const slugs = boundaryExclusions.map(({ slug }) => slug);
    const currentResult = await client.query(
      `SELECT m.id, m.slug, m.title, m.category_path,
              m.region_id, r.name AS region,
              m.community_id, c.name AS community,
              m.updated_at
       FROM myths m
       JOIN regions r ON r.id = m.region_id
       LEFT JOIN communities c ON c.id = m.community_id
       WHERE m.slug = ANY($1::text[])
       ORDER BY m.slug`,
      [slugs]
    );
    if (currentResult.rows.length !== boundaryExclusions.length) {
      const found = new Set(currentResult.rows.map(({ slug }) => slug));
      throw new Error(
        `Faltan mitos de borde: ${slugs
          .filter((slug) => !found.has(slug))
          .join(", ")}`
      );
    }

    const paths = [
      ...new Set(
        boundaryExclusions.map(({ targetCategoryPath }) => targetCategoryPath)
      ),
    ];
    const targetResult = await client.query(
      `SELECT DISTINCT m.category_path, m.region_id, r.name AS region,
              m.community_id, c.name AS community
       FROM myths m
       JOIN regions r ON r.id = m.region_id
       LEFT JOIN communities c ON c.id = m.community_id
       WHERE m.category_path = ANY($1::text[])
       ORDER BY m.category_path`,
      [paths]
    );

    const targetsByPath = new Map();
    for (const row of targetResult.rows) {
      const existing = targetsByPath.get(row.category_path);
      if (
        existing &&
        (existing.region_id !== row.region_id ||
          existing.community_id !== row.community_id)
      ) {
        throw new Error(
          `La categoría ${row.category_path} tiene región/comunidad ambiguas.`
        );
      }
      targetsByPath.set(row.category_path, row);
    }
    const missingPaths = paths.filter((item) => !targetsByPath.has(item));
    if (missingPaths.length) {
      throw new Error(
        `Las categorías de destino no existen: ${missingPaths.join(", ")}`
      );
    }

    const currentBySlug = new Map(
      currentResult.rows.map((row) => [row.slug, row])
    );
    const changes = boundaryExclusions.map((boundary) => {
      const before = currentBySlug.get(boundary.slug);
      const target = targetsByPath.get(boundary.targetCategoryPath);
      return {
        slug: boundary.slug,
        title: before.title,
        reason: boundary.reason,
        before: {
          categoryPath: before.category_path,
          region: before.region,
          community: before.community,
        },
        after: {
          categoryPath: target.category_path,
          region: target.region,
          community: target.community,
        },
        ids: {
          myth: before.id,
          region: target.region_id,
          community: target.community_id,
        },
      };
    });

    console.log(
      JSON.stringify(
        {
          mode: apply ? "apply" : "dry-run",
          count: changes.length,
          changes,
        },
        null,
        2
      )
    );
    if (!apply) {
      console.log("Dry-run correcto. Añade --apply para persistir los cambios.");
      return;
    }

    const backupDir = path.resolve("artifacts", "editorial-backups");
    await fs.mkdir(backupDir, { recursive: true });
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const backupPath = path.join(
      backupDir,
      `muisca-boundaries-${timestamp}.json`
    );
    await fs.writeFile(
      backupPath,
      `${JSON.stringify(
        {
          boundaryExclusions,
          myths: currentResult.rows,
        },
        null,
        2
      )}\n`,
      "utf8"
    );

    await client.query("BEGIN");
    try {
      for (const change of changes) {
        await client.query(
          `UPDATE myths
           SET category_path = $2,
               region_id = $3,
               community_id = $4,
               updated_at = NOW()
           WHERE id = $1`,
          [
            change.ids.myth,
            change.after.categoryPath,
            change.ids.region,
            change.ids.community,
          ]
        );
        await client.query(
          `UPDATE editorial_myths
           SET category_path = $2,
               updated_at = NOW()
           WHERE source_myth_id = $1`,
          [change.ids.myth, change.after.categoryPath]
        );
      }

      const verifyResult = await client.query(
        `SELECT m.slug, m.category_path, r.name AS region, c.name AS community
         FROM myths m
         JOIN regions r ON r.id = m.region_id
         LEFT JOIN communities c ON c.id = m.community_id
         WHERE m.slug = ANY($1::text[])
         ORDER BY m.slug`,
        [slugs]
      );
      const verifyBySlug = new Map(
        verifyResult.rows.map((row) => [row.slug, row])
      );
      const invalid = changes.filter((change) => {
        const row = verifyBySlug.get(change.slug);
        return (
          row?.category_path !== change.after.categoryPath ||
          row?.region !== change.after.region ||
          row?.community !== change.after.community
        );
      });
      if (invalid.length) {
        throw new Error(
          `Falló la verificación de borde: ${invalid
            .map(({ slug }) => slug)
            .join(", ")}`
        );
      }

      await client.query("COMMIT");
      console.log(
        JSON.stringify(
          {
            applied: true,
            count: changes.length,
            backupPath,
            verified: verifyResult.rows,
          },
          null,
          2
        )
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
