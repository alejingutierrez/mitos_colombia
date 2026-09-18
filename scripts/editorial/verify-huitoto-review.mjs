import path from "node:path";
import process from "node:process";

import dotenv from "dotenv";
import pg from "pg";

import {
  huitotoCommunityImageUrl,
  huitotoCommunitySeo,
} from "../../editorial/huitoto/community.mjs";
import { huitotoMedia } from "../../editorial/huitoto/media.mjs";
import { huitotoMythsBySlug } from "../../editorial/huitoto/records.mjs";
import {
  assertHuitotoUniverse,
  canonicalHuitotoSlugs,
  huitotoCategoryBySlug,
} from "../../editorial/huitoto/universe.mjs";

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

function strictPaperCut(prompt) {
  return (
    /2D full paper cut/i.test(prompt) &&
    /paper quilling/i.test(prompt) &&
    /acabado gr[aá]fico plano|capas planas/i.test(prompt) &&
    /sin fotograf[ií]a/i.test(prompt) &&
    /objeto físico/i.test(prompt) &&
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
              e.sources_json, e.key_sources_json, e.research_notes,
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
      [canonicalHuitotoSlugs],
    );
    assert(
      result.rowCount === canonicalHuitotoSlugs.length,
      `Se esperaban ${canonicalHuitotoSlugs.length} expedientes y hay ${result.rowCount}.`,
    );
    const sourceCounts = [];
    const horizontal = new Set();
    const vertical = new Set();
    for (const row of result.rows) {
      const dossier = huitotoMythsBySlug[row.slug];
      const media = huitotoMedia[row.slug];
      assert(dossier && media, `${row.slug}: inventario incompleto.`);
      assert(
        row.community_slug === "huitotos",
        `${row.slug}: comunidad incorrecta.`,
      );
      assert(row.title === dossier.title, `${row.slug}: título desincronizado.`);
      assert(
        row.category_path === huitotoCategoryBySlug[row.slug],
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
        `${row.slug}: ${row.keyword_count} palabras clave.`,
      );
      assert(row.seo_count === 1, `${row.slug}: ${row.seo_count} filas SEO.`);
      assert(
        row.editorial_id && row.vertical_id,
        `${row.slug}: falta media o expediente.`,
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
        row.image_url !== row.vertical_image_url &&
          !horizontal.has(row.image_url) &&
          !vertical.has(row.vertical_image_url) &&
          !/pending\.invalid/.test(row.image_url + row.vertical_image_url),
        `${row.slug}: pareja visual inválida o duplicada.`,
      );
      horizontal.add(row.image_url);
      vertical.add(row.vertical_image_url);
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
      assert(sourceCount === 7, `${row.slug}: ${sourceCount} fuentes.`);
      sourceCounts.push(sourceCount);
    }
    const bySlug = new Map(result.rows.map((row) => [row.slug, row]));
    assert(
      bySlug.get("jirayauma").title ===
        "Jirayauma y la Mujer-Jaguar",
      "Jirayauma no quedó corregido.",
    );
    assert(
      bySlug.get("jobiya-jitoma").title ===
        "Jitoma y Nokaido, la contienda del Sol y el Tucán",
      "Jitoma y Nokaido no quedó corregido.",
    );
    assert(
      bySlug.get("el-origen-del-maguare").title ===
        "Yiida Buinama y el origen del maguaré",
      "Yiida Buinama no quedó corregido.",
    );
    assert(
      /UNIFICACIÓN DECLARADA/i.test(
        bySlug.get("yarokamena").research_notes,
      ) &&
        /UNIFICACIÓN DECLARADA/i.test(
          bySlug.get("de-como-se-crio-yarocomena").research_notes,
        ),
      "El ciclo Yarokamena no quedó declarado.",
    );
    assert(
      /ATRIBUCIÓN NO CONFIRMADA/i.test(
        bySlug.get(
          "peleas-y-aventuras-entre-el-sobrino-conejo-y-el-tio-tigre",
        ).research_notes,
      ),
      "Conejo y Tigre perdió su límite de atribución.",
    );
    const community = await client.query(
      `SELECT m.slug
       FROM myths m
       JOIN communities c ON c.id = m.community_id
       WHERE c.slug = 'huitotos'
       ORDER BY m.slug`,
    );
    assert(
      JSON.stringify(community.rows.map(({ slug }) => slug)) ===
        JSON.stringify([...canonicalHuitotoSlugs].sort()),
      `Universo Huitoto distinto: ${community.rowCount}.`,
    );
    const profile = await client.query(
      `SELECT name, image_prompt, image_url
       FROM communities
       WHERE slug = 'huitotos'
       LIMIT 1`,
    );
    assert(profile.rowCount === 1, "Falta el perfil Huitoto.");
    assert(
      profile.rows[0].name === "Huitoto / Murui-Muina",
      "Nombre comunitario incorrecto.",
    );
    assert(
      strictPaperCut(profile.rows[0].image_prompt),
      "El prompt comunitario no cumple la dirección visual.",
    );
    assert(
      profile.rows[0].image_url === huitotoCommunityImageUrl,
      "El héroe comunitario no usa la ilustración flat 2D aprobada.",
    );
    const communitySeo = await client.query(
      `SELECT meta_title, canonical_path
       FROM seo_pages
       WHERE page_type = 'community' AND slug = 'huitotos'
       LIMIT 1`,
    );
    assert(communitySeo.rowCount === 1, "Falta SEO de landing Huitoto.");
    assert(
      communitySeo.rows[0].meta_title === huitotoCommunitySeo.meta_title &&
        communitySeo.rows[0].canonical_path === "/comunidades/huitotos",
      "SEO de landing Huitoto incorrecto.",
    );
    const generatedPairs = Object.values(huitotoMedia).filter(
      ({ reusedFrom }) => !reusedFrom,
    ).length;
    const reusedPairs = Object.values(huitotoMedia).filter(
      ({ reusedFrom }) => reusedFrom,
    ).length;
    assert(generatedPairs === 0, `Pares nuevos inesperados: ${generatedPairs}.`);
    assert(
      reusedPairs === 22,
      `Pares reutilizados inesperados: ${reusedPairs}.`,
    );
    console.log(
      JSON.stringify(
        {
          status: "verified",
          universe: assertHuitotoUniverse(),
          canonicalHuitotoMyths: community.rowCount,
          editorialDossiers: result.rows.filter(({ editorial_id }) => editorial_id)
            .length,
          seoRows: result.rows.reduce((sum, row) => sum + row.seo_count, 0),
          verticalImages: result.rows.filter(({ vertical_id }) => vertical_id)
            .length,
          sourceRange: [Math.min(...sourceCounts), Math.max(...sourceCounts)],
          media: { generatedPairs, reusedPairs },
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
