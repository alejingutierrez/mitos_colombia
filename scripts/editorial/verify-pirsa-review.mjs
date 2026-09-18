import path from "node:path";
import process from "node:process";

import dotenv from "dotenv";
import pg from "pg";

import { pirsaMedia } from "../../editorial/pirsa/media.mjs";
import { pirsaMythsBySlug } from "../../editorial/pirsa/records.mjs";
import {
  assertPirsaUniverse,
  canonicalPirsaSlugs,
  pirsaCategoryBySlug,
} from "../../editorial/pirsa/universe.mjs";

const { Client } = pg;
const oldHorizontal =
  "https://c5htob7za0dl3b5x.public.blob.vercel-storage.com/mitos/el-exorcismo-de-tamaracunga-1784764946284.jpg";
const oldVertical =
  "https://c5htob7za0dl3b5x.public.blob.vercel-storage.com/vertical/myth/el-exorcismo-de-tamaracunga-1784812444192.jpg";

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

function strictPaperCut(prompt) {
  return (
    /2D full paper cut/i.test(prompt) &&
    /paper quilling/i.test(prompt) &&
    /acabado gr[aá]fico plano|capas planas/i.test(prompt) &&
    /sin fotograf[ií]a/i.test(prompt) &&
    /objeto f[ií]sico/i.test(prompt) &&
    /maqueta/i.test(prompt) &&
    /diorama/i.test(prompt) &&
    /CGI|render 3D/i.test(prompt)
  );
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
      [canonicalPirsaSlugs],
    );
    assert(
      result.rowCount === canonicalPirsaSlugs.length,
      `Se esperaba ${canonicalPirsaSlugs.length} expediente y hay ${result.rowCount}.`,
    );
    const sourceCounts = [];
    for (const row of result.rows) {
      const dossier = pirsaMythsBySlug[row.slug];
      const media = pirsaMedia[row.slug];
      assert(dossier && media, `${row.slug}: inventario incompleto.`);
      assert(row.community_slug === "pirsa", `${row.slug}: comunidad incorrecta.`);
      assert(row.title === dossier.title, `${row.slug}: título desincronizado.`);
      assert(
        row.category_path === pirsaCategoryBySlug[row.slug],
        `${row.slug}: categoría desincronizada.`,
      );
      assert(
        row.content === dossier.content &&
          row.editorial_content === dossier.content,
        `${row.slug}: contenido desincronizado.`,
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
        row.image_url !== oldHorizontal && row.vertical_image_url !== oldVertical,
        `${row.slug}: persiste una imagen heredada de maqueta.`,
      );
      assert(
        row.image_prompt === dossier.image_prompt_horizontal &&
          row.image_prompt_horizontal === dossier.image_prompt_horizontal &&
          row.image_prompt_vertical === dossier.image_prompt_vertical &&
          row.vertical_custom_prompt === dossier.image_prompt_vertical,
        `${row.slug}: prompts desincronizados.`,
      );
      assert(
        strictPaperCut(row.vertical_base_prompt),
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
      assert(sourceCount === 9, `${row.slug}: ${sourceCount} fuentes.`);
      sourceCounts.push(sourceCount);
    }

    const community = await client.query(
      `SELECT m.slug
       FROM myths m
       JOIN communities c ON c.id = m.community_id
       WHERE c.slug = 'pirsa'
       ORDER BY m.slug`,
    );
    assert(
      JSON.stringify(community.rows.map(({ slug }) => slug)) ===
        JSON.stringify([...canonicalPirsaSlugs].sort()),
      `Universo Pirsa distinto: ${community.rowCount}.`,
    );
    const profile = await client.query(
      `SELECT name, image_prompt
       FROM communities
       WHERE slug = 'pirsa'
       LIMIT 1`,
    );
    assert(profile.rowCount === 1, "Falta el perfil Pirsa.");
    assert(profile.rows[0].name === "Pirsa", "Nombre comunitario incorrecto.");
    assert(
      strictPaperCut(profile.rows[0].image_prompt),
      "El prompt comunitario no cumple la dirección visual.",
    );
    const communitySeo = await client.query(
      `SELECT meta_title, canonical_path
       FROM seo_pages
       WHERE page_type = 'community' AND slug = 'pirsa'
       LIMIT 1`,
    );
    assert(communitySeo.rowCount === 1, "Falta SEO de landing Pirsa.");
    assert(
      communitySeo.rows[0].canonical_path === "/comunidades/pirsa",
      "Canonical de landing Pirsa incorrecto.",
    );
    const content = result.rows.map((row) => row.content).join("\n");
    assert(
      !/Tamaracunga (?:era|fue) (?:el )?cacique|(?:el )?fraile (?:era |fue )?franciscano|recibi[oó] (?:el )?nombre (?:de bautismo )?Sebastián|aparecieron cuervos|una luz celestial (?:lo|ilumin[oó])/i.test(
        content,
      ),
      "Persisten afirmaciones heredadas sin respaldo.",
    );
    console.log(
      JSON.stringify(
        {
          status: "verified",
          universe: assertPirsaUniverse(),
          canonicalPirsaMyths: community.rowCount,
          editorialDossiers: result.rows.filter(({ editorial_id }) => editorial_id)
            .length,
          seoRows: result.rows.reduce((sum, row) => sum + row.seo_count, 0),
          verticalImages: result.rows.filter(({ vertical_id }) => vertical_id)
            .length,
          sourceRange: [Math.min(...sourceCounts), Math.max(...sourceCounts)],
          communityProfile: profile.rows[0],
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
