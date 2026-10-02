import path from "node:path";
import process from "node:process";

import dotenv from "dotenv";
import pg from "pg";

import { katioMedia } from "../../editorial/katio/media.mjs";
import { katioMythsBySlug } from "../../editorial/katio/records.mjs";
import {
  canonicalKatioSlugs,
  katioReviewedSlugs,
} from "../../editorial/katio/universe.mjs";

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
         c.slug AS community_slug,
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
         vertical_counts.base_prompt AS vertical_base_prompt,
         vertical_counts.custom_prompt AS vertical_custom_prompt,
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
         SELECT
           COUNT(*) AS count,
           MIN(v.image_url) AS image_url,
           MIN(v.base_prompt) AS base_prompt,
           MIN(v.custom_prompt) AS custom_prompt
         FROM vertical_images v
         WHERE v.entity_type = 'myth' AND v.entity_id = m.id
       ) vertical_counts ON TRUE
       LEFT JOIN LATERAL (
         SELECT COUNT(*) AS count
         FROM seo_pages s
         WHERE s.page_type = 'myth' AND s.slug = m.slug
       ) seo_counts ON TRUE
       WHERE m.slug = ANY($1::text[])
       ORDER BY m.slug`,
      [katioReviewedSlugs],
    );
    const slugs = result.rows.map(({ slug }) => slug);
    assert(
      JSON.stringify(slugs) === JSON.stringify(katioReviewedSlugs),
      `Universo revisado DB distinto: ${slugs.length} filas.`,
    );

    const sourceCounts = [];
    const categoryCounts = {};
    for (const row of result.rows) {
      const dossier = katioMythsBySlug[row.slug];
      const media = katioMedia[row.slug];
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
      assert(
        row.keyword_count === 5,
        `${row.slug}: ${row.keyword_count} palabras clave.`,
      );
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
        row.image_prompt === dossier.image_prompt_horizontal &&
          row.image_prompt_horizontal === dossier.image_prompt_horizontal &&
          row.image_prompt_vertical === dossier.image_prompt_vertical &&
          row.vertical_custom_prompt === dossier.image_prompt_vertical,
        `${row.slug}: prompts desincronizados.`,
      );
      assert(
        /full paper cut/i.test(row.vertical_base_prompt) &&
          /sin fotograf[ií]a/i.test(row.vertical_base_prompt) &&
          /maqueta|maquette/i.test(row.vertical_base_prompt),
        `${row.slug}: base vertical fuera de dirección visual.`,
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
          "Andina > Varios > Katíos": 17,
          "Andina > Chocó > Katíos": 2,
          "Andina > Antioquia > Mixto": 2,
        }),
      `Distribución inesperada: ${JSON.stringify(categoryCounts)}.`,
    );

    const canonical = result.rows
      .filter(({ community_slug }) => community_slug === "katios")
      .map(({ slug }) => slug);
    assert(
      JSON.stringify(canonical) === JSON.stringify(canonicalKatioSlugs),
      `Universo Katío canónico distinto: ${canonical.length}.`,
    );
    const boundaryCommunities = Object.fromEntries(
      result.rows
        .filter(({ slug }) => ["dobaida", "el-tesoro-de-dabeiba"].includes(slug))
        .map(({ slug, community_slug }) => [slug, community_slug]),
    );
    assert(
      boundaryCommunities.dobaida === "mixto" &&
        boundaryCommunities["el-tesoro-de-dabeiba"] === "mixto",
      `Frontera Dobaida incorrecta: ${JSON.stringify(boundaryCommunities)}.`,
    );

    const surranabe = await client.query(
      `SELECT m.category_path, c.slug AS community_slug
       FROM myths m
       JOIN communities c ON c.id = m.community_id
       WHERE m.slug = 'el-gusano-gigante'
       LIMIT 1`,
    );
    assert(surranabe.rowCount === 1, "Falta Surranabe.");
    assert(
      surranabe.rows[0].community_slug === "chami" &&
        surranabe.rows[0].category_path === "Andina > Caldas > Chamí",
      "Surranabe no quedó en Chamí / Caldas.",
    );

    const chamiCount = await client.query(
      `SELECT COUNT(*)::int AS count
       FROM myths m
       JOIN communities c ON c.id = m.community_id
       WHERE c.slug = 'chami'`,
    );
    assert(chamiCount.rows[0].count === 22, "El universo Chamí no quedó en 22.");

    const communitySeo = await client.query(
      `SELECT meta_title, canonical_path
       FROM seo_pages
       WHERE page_type = 'community' AND slug = 'katios'
       LIMIT 1`,
    );
    assert(communitySeo.rowCount === 1, "Falta SEO de la landing Katío.");
    assert(
      communitySeo.rows[0].canonical_path === "/comunidades/katios",
      "Canonical de landing Katío incorrecto.",
    );

    console.log(
      JSON.stringify(
        {
          status: "verified",
          canonicalKatioMyths: canonical.length,
          reviewedDossiers: result.rowCount,
          boundaryPages: boundaryCommunities,
          chamiMyths: chamiCount.rows[0].count,
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
