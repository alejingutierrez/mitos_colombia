import path from "node:path";
import process from "node:process";

import dotenv from "dotenv";
import pg from "pg";

import { chamiMedia } from "../../editorial/chami/media.mjs";
import { chamiMythsBySlug } from "../../editorial/chami/records.mjs";
import { canonicalChamiSlugs } from "../../editorial/chami/universe.mjs";

const { Client } = pg;

function parseArgs(argv) {
  const options = { envFile: ".env" };
  for (const arg of argv) {
    if (arg.startsWith("--env=")) {
      options.envFile = arg.slice("--env=".length);
    } else throw new Error(`Argumento no reconocido: ${arg}`);
  }
  return options;
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function jsonArray(value) {
  const parsed = typeof value === "string" ? JSON.parse(value) : value;
  assert(Array.isArray(parsed), "Una columna JSON de fuentes no es un arreglo.");
  return parsed;
}

async function run() {
  const options = parseArgs(process.argv.slice(2));
  dotenv.config({ path: path.resolve(options.envFile), quiet: true });
  const connectionString =
    process.env.POSTGRES_URL_NON_POOLING ||
    process.env.DATABASE_URL_UNPOOLED ||
    process.env.POSTGRES_URL ||
    process.env.DATABASE_URL;
  if (!connectionString) throw new Error("No hay conexión Postgres.");

  const client = new Client({
    connectionString,
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();
  try {
    const result = await client.query(
      `SELECT
         m.id,
         m.slug,
         m.title,
         m.category_path,
         m.image_url,
         m.image_prompt,
         m.latitude,
         m.longitude,
         m.content_formatted,
         e.id AS editorial_id,
         e.title AS editorial_title,
         e.category_path AS editorial_category_path,
         e.image_url AS editorial_image_url,
         e.image_prompt_horizontal,
         e.image_prompt_vertical,
         e.sources_json,
         e.key_sources_json,
         COALESCE(tag_counts.count, 0)::int AS tag_count,
         COALESCE(keyword_counts.count, 0)::int AS keyword_count,
         COALESCE(vertical_counts.count, 0)::int AS vertical_count,
         vertical_counts.image_url AS vertical_image_url,
         COALESCE(seo_counts.count, 0)::int AS seo_count
       FROM myths m
       JOIN communities c ON c.id = m.community_id
       LEFT JOIN editorial_myths e ON e.source_myth_id = m.id
       LEFT JOIN LATERAL (
         SELECT COUNT(*) AS count FROM myth_tags mt WHERE mt.myth_id = m.id
       ) tag_counts ON TRUE
       LEFT JOIN LATERAL (
         SELECT COUNT(*) AS count
         FROM myth_keywords mk
         WHERE mk.myth_id = m.id
       ) keyword_counts ON TRUE
       LEFT JOIN LATERAL (
         SELECT COUNT(*) AS count, MIN(v.image_url) AS image_url
         FROM vertical_images v
         WHERE v.entity_type = 'myth' AND v.entity_id = m.id
       ) vertical_counts ON TRUE
       LEFT JOIN LATERAL (
         SELECT COUNT(*) AS count
         FROM seo_pages s
         WHERE s.page_type = 'myth' AND s.slug = m.slug
       ) seo_counts ON TRUE
       WHERE c.slug = 'chami'
       ORDER BY m.slug`,
    );
    const slugs = result.rows.map(({ slug }) => slug);
    assert(
      JSON.stringify(slugs) === JSON.stringify(canonicalChamiSlugs),
      `Universo DB distinto: ${slugs.length} filas.`,
    );

    const categoryCounts = {};
    const sourceCounts = [];
    for (const row of result.rows) {
      const dossier = chamiMythsBySlug[row.slug];
      const media = chamiMedia[row.slug];
      assert(dossier, `${row.slug}: falta dossier.`);
      assert(media, `${row.slug}: falta media.`);
      assert(row.title === dossier.title, `${row.slug}: título desincronizado.`);
      assert(
        row.editorial_title === dossier.title,
        `${row.slug}: título editorial desincronizado.`,
      );
      assert(
        row.category_path === dossier.category_path &&
          row.editorial_category_path === dossier.category_path,
        `${row.slug}: taxonomía desincronizada.`,
      );
      assert(row.content_formatted === true, `${row.slug}: contenido sin formato.`);
      assert(row.editorial_id, `${row.slug}: falta editorial_myths.`);
      assert(row.tag_count === 4, `${row.slug}: ${row.tag_count} etiquetas.`);
      assert(row.keyword_count === 5, `${row.slug}: ${row.keyword_count} keywords.`);
      assert(row.seo_count === 1, `${row.slug}: ${row.seo_count} filas SEO.`);
      assert(
        row.vertical_count === 1,
        `${row.slug}: ${row.vertical_count} imágenes verticales.`,
      );
      assert(
        row.image_url === media.horizontal &&
          row.editorial_image_url === media.horizontal,
        `${row.slug}: horizontal desincronizada.`,
      );
      assert(
        row.vertical_image_url === media.vertical,
        `${row.slug}: vertical desincronizada.`,
      );
      assert(
        row.image_prompt_horizontal === dossier.image_prompt_horizontal &&
          row.image_prompt_vertical === dossier.image_prompt_vertical,
        `${row.slug}: prompts desincronizados.`,
      );
      assert(
        Number(row.latitude) === dossier.latitude &&
          Number(row.longitude) === dossier.longitude,
        `${row.slug}: coordenadas desincronizadas.`,
      );
      const sourceCount =
        jsonArray(row.sources_json).length + jsonArray(row.key_sources_json).length;
      assert(sourceCount >= 5, `${row.slug}: ${sourceCount} fuentes.`);
      sourceCounts.push(sourceCount);
      categoryCounts[row.category_path] =
        (categoryCounts[row.category_path] || 0) + 1;
    }
    assert(
      JSON.stringify(categoryCounts) ===
        JSON.stringify({
          "Andina > Valle del Cauca > Chamí": 15,
          "Andina > Risaralda > Chamí": 4,
          "Andina > Caldas > Chamí": 2,
        }),
      `Distribución inesperada: ${JSON.stringify(categoryCounts)}.`,
    );

    const communitySeo = await client.query(
      `SELECT meta_title, canonical_path
       FROM seo_pages
       WHERE page_type = 'community' AND slug = 'chami'
       LIMIT 1`,
    );
    assert(communitySeo.rowCount === 1, "Falta SEO de la landing Chamí.");
    assert(
      communitySeo.rows[0].canonical_path === "/comunidades/chami",
      "Canonical de landing incorrecto.",
    );
    console.log(
      JSON.stringify(
        {
          status: "verified",
          myths: result.rowCount,
          editorialDossiers: result.rows.filter(({ editorial_id }) => editorial_id)
            .length,
          seoRows: result.rows.reduce((sum, row) => sum + row.seo_count, 0),
          verticalImages: result.rows.reduce(
            (sum, row) => sum + row.vertical_count,
            0,
          ),
          sourceRange: [Math.min(...sourceCounts), Math.max(...sourceCounts)],
          categoryCounts,
          communitySeo: communitySeo.rows[0],
        },
        null,
        2,
      ),
    );
  } finally {
    await client.end();
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
