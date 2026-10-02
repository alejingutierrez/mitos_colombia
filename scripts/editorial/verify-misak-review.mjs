import path from "node:path";
import process from "node:process";

import dotenv from "dotenv";
import pg from "pg";

import { misakMedia } from "../../editorial/misak/media.mjs";
import { misakMythsBySlug } from "../../editorial/misak/records.mjs";
import {
  canonicalMisakSlugs,
  misakCategoryBySlug,
} from "../../editorial/misak/universe.mjs";

const { Client } = pg;

function parseArgs(argv) {
  const options = { envFile: ".env" };
  for (const arg of argv) {
    if (arg.startsWith("--env=")) options.envFile = arg.slice(6);
    else throw new Error(`Argumento no reconocido: ${arg}`);
  }
  return options;
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function jsonArray(value) {
  if (Array.isArray(value)) return value;
  return JSON.parse(value || "[]");
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
      `SELECT m.id, m.slug, m.title, m.category_path, m.content,
              m.image_url, m.image_prompt, m.latitude, m.longitude,
              c.slug AS community_slug,
              e.id AS editorial_id, e.content AS editorial_content,
              e.image_url AS editorial_image_url,
              e.image_prompt_horizontal, e.image_prompt_vertical,
              e.sources_json, e.key_sources_json,
              (SELECT COUNT(*)::int FROM myth_tags mt WHERE mt.myth_id = m.id)
                AS tag_count,
              (SELECT COUNT(*)::int FROM myth_keywords mk WHERE mk.myth_id = m.id)
                AS keyword_count,
              (SELECT COUNT(*)::int FROM seo_pages s
                WHERE s.page_type = 'myth' AND s.slug = m.slug) AS seo_count,
              v.id AS vertical_id, v.image_url AS vertical_image_url,
              v.base_prompt AS vertical_base_prompt,
              v.custom_prompt AS vertical_custom_prompt
       FROM myths m
       JOIN communities c ON c.id = m.community_id
       LEFT JOIN editorial_myths e ON e.source_myth_id = m.id
       LEFT JOIN vertical_images v
         ON v.entity_type = 'myth' AND v.entity_id = m.id
       WHERE m.slug = ANY($1::text[])
       ORDER BY m.slug, v.id`,
      [canonicalMisakSlugs],
    );
    assert(
      result.rowCount === canonicalMisakSlugs.length,
      `Se esperaban ${canonicalMisakSlugs.length} expedientes y hay ${result.rowCount}.`,
    );
    const sourceCounts = [];
    for (const row of result.rows) {
      const dossier = misakMythsBySlug[row.slug];
      const media = misakMedia[row.slug];
      assert(dossier && media, `${row.slug}: inventario incompleto.`);
      assert(
        row.community_slug === "misak-guambianos",
        `${row.slug}: comunidad incorrecta.`,
      );
      assert(row.title === dossier.title, `${row.slug}: título desincronizado.`);
      assert(
        row.category_path === misakCategoryBySlug[row.slug],
        `${row.slug}: categoría desincronizada.`,
      );
      assert(
        row.content === dossier.content,
        `${row.slug}: contenido desincronizado.`,
      );
      assert(
        row.editorial_content === dossier.content,
        `${row.slug}: expediente desincronizado.`,
      );
      assert(row.tag_count === 4, `${row.slug}: ${row.tag_count} etiquetas.`);
      assert(
        row.keyword_count === 5,
        `${row.slug}: ${row.keyword_count} keywords.`,
      );
      assert(row.seo_count === 1, `${row.slug}: ${row.seo_count} filas SEO.`);
      assert(
        row.editorial_id && row.vertical_id,
        `${row.slug}: falta media o dossier.`,
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
        /2D full paper cut/i.test(row.vertical_base_prompt) &&
          /paper quilling/i.test(row.vertical_base_prompt) &&
          /sin fotograf[ií]a/i.test(row.vertical_base_prompt) &&
          /objeto f[ií]sico/i.test(row.vertical_base_prompt) &&
          /maqueta/i.test(row.vertical_base_prompt) &&
          /diorama/i.test(row.vertical_base_prompt) &&
          /CGI|render 3D/i.test(row.vertical_base_prompt),
        `${row.slug}: base vertical fuera de dirección visual.`,
      );
      assert(
        Number(row.latitude) === dossier.latitude &&
          Number(row.longitude) === dossier.longitude,
        `${row.slug}: coordenadas desincronizadas.`,
      );
      const sourceCount =
        jsonArray(row.sources_json).length +
        jsonArray(row.key_sources_json).length;
      assert(sourceCount >= 5, `${row.slug}: ${sourceCount} fuentes.`);
      sourceCounts.push(sourceCount);
    }
    const community = await client.query(
      `SELECT m.slug
       FROM myths m
       JOIN communities c ON c.id = m.community_id
       WHERE c.slug = 'misak-guambianos'
       ORDER BY m.slug`,
    );
    assert(
      JSON.stringify(community.rows.map(({ slug }) => slug)) ===
        JSON.stringify([...canonicalMisakSlugs].sort()),
      `Universo Misak distinto: ${community.rowCount}.`,
    );
    const communityProfile = await client.query(
      `SELECT name, image_prompt
       FROM communities
       WHERE slug = 'misak-guambianos'
       LIMIT 1`,
    );
    assert(communityProfile.rowCount === 1, "Falta el perfil Misak.");
    assert(
      communityProfile.rows[0].name === "Misak",
      "El perfil aún usa el exónimo como nombre público.",
    );
    assert(
      /full paper cut/i.test(communityProfile.rows[0].image_prompt) &&
        /paper quilling/i.test(communityProfile.rows[0].image_prompt) &&
        /sin fotograf[ií]a/i.test(communityProfile.rows[0].image_prompt) &&
        /objeto f[ií]sico/i.test(communityProfile.rows[0].image_prompt) &&
        /maqueta/i.test(communityProfile.rows[0].image_prompt) &&
        /diorama/i.test(communityProfile.rows[0].image_prompt) &&
        /CGI|render 3D/i.test(communityProfile.rows[0].image_prompt),
      "El prompt comunitario no cumple la dirección visual.",
    );
    const communitySeo = await client.query(
      `SELECT meta_title, canonical_path
       FROM seo_pages
       WHERE page_type = 'community' AND slug = 'misak-guambianos'
       LIMIT 1`,
    );
    assert(communitySeo.rowCount === 1, "Falta SEO de la landing Misak.");
    assert(
      communitySeo.rows[0].canonical_path ===
        "/comunidades/misak-guambianos",
      "Canonical de landing Misak incorrecto.",
    );
    console.log(
      JSON.stringify(
        {
          status: "verified",
          canonicalMisakMyths: community.rowCount,
          editorialDossiers: result.rows.filter(({ editorial_id }) => editorial_id)
            .length,
          seoRows: result.rows.reduce((sum, row) => sum + row.seo_count, 0),
          verticalImages: result.rows.filter(({ vertical_id }) => vertical_id)
            .length,
          sourceRange: [Math.min(...sourceCounts), Math.max(...sourceCounts)],
          added: [],
          communityProfile: communityProfile.rows[0],
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
