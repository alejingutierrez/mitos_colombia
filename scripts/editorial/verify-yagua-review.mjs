import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

import dotenv from "dotenv";
import pg from "pg";

import {
  yaguaCommunityImageUrl,
  yaguaCommunitySeo,
} from "../../editorial/yagua/community.mjs";
import { yaguaMedia } from "../../editorial/yagua/media.mjs";
import { yaguaMythsBySlug } from "../../editorial/yagua/records.mjs";
import {
  assertYaguaUniverse,
  canonicalYaguaSlugs,
  yaguaCategoryBySlug,
} from "../../editorial/yagua/universe.mjs";

const { Client } = pg;
const provenancePath = path.resolve("editorial", "yagua", "provenance.json");

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

function digest(value) {
  return createHash("sha256").update(value).digest("hex");
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

function verifyProvenance(provenance) {
  assert(provenance.provider === "openai", "Proveedor visual incorrecto.");
  assert(provenance.model === "gpt-image-2", "Modelo visual incorrecto.");
  assert(provenance.quality === "high", "Calidad visual incorrecta.");
  assert(
    provenance.visualQa?.status === "approved" &&
      provenance.visualQa?.finalImages === 12,
    "La QA visual no está aprobada para doce imágenes.",
  );
  assert(
    Object.keys(provenance.items || {}).length === 12,
    "El manifiesto durable no contiene doce imágenes.",
  );
  for (const slug of canonicalYaguaSlugs) {
    const dossier = yaguaMythsBySlug[slug];
    const media = yaguaMedia[slug];
    for (const orientation of ["horizontal", "vertical"]) {
      const item = provenance.items[`${slug}:${orientation}`];
      const prompt =
        orientation === "horizontal"
          ? dossier.image_prompt_horizontal
          : dossier.image_prompt_vertical;
      assert(item, `${slug}:${orientation}: falta procedencia.`);
      assert(
        item.provider === "openai" &&
          item.model === "gpt-image-2" &&
          item.quality === "high" &&
          item.visualQa === "approved" &&
          item.visualReviewNote,
        `${slug}:${orientation}: procedencia o revisión inválida.`,
      );
      assert(
        item.editorialPrompt === prompt &&
          item.editorialPromptSha256 === digest(prompt) &&
          item.generationPromptSha256 === digest(item.generationPrompt),
        `${slug}:${orientation}: huella de prompt inválida.`,
      );
      assert(
        item.url === media[orientation],
        `${slug}:${orientation}: URL fuera de inventario.`,
      );
      assert(
        item.sourceUrls.length === 9 &&
          new Set(item.sourceUrls).size === 9,
        `${slug}:${orientation}: fuentes de procedencia incompletas.`,
      );
    }
  }
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
  const provenance = JSON.parse(fs.readFileSync(provenancePath, "utf8"));
  verifyProvenance(provenance);
  const client = new Client({
    connectionString,
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();
  try {
    const result = await client.query(
      `SELECT m.id, m.slug, m.title, m.category_path, m.content, m.mito,
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
              (SELECT COUNT(*)::int FROM vertical_images vi
                WHERE vi.entity_type = 'myth' AND vi.entity_id = m.id)
                AS vertical_count,
              v.id AS vertical_id, v.image_url AS vertical_image_url,
              v.base_prompt AS vertical_base_prompt,
              v.custom_prompt AS vertical_custom_prompt
       FROM myths m
       JOIN communities c ON c.id = m.community_id
       LEFT JOIN editorial_myths e ON e.source_myth_id = m.id
       LEFT JOIN LATERAL (
         SELECT vi.*
         FROM vertical_images vi
         WHERE vi.entity_type = 'myth' AND vi.entity_id = m.id
         ORDER BY vi.id
         LIMIT 1
       ) v ON TRUE
       WHERE m.slug = ANY($1::text[])
       ORDER BY m.slug`,
      [canonicalYaguaSlugs],
    );
    assert(
      result.rowCount === canonicalYaguaSlugs.length,
      `Se esperaban ${canonicalYaguaSlugs.length} expedientes y hay ${result.rowCount}.`,
    );
    const sourceCounts = [];
    const allImages = new Set();
    for (const row of result.rows) {
      const dossier = yaguaMythsBySlug[row.slug];
      const media = yaguaMedia[row.slug];
      assert(dossier && media, `${row.slug}: inventario incompleto.`);
      assert(
        row.community_slug === "yaguas",
        `${row.slug}: comunidad incorrecta.`,
      );
      assert(row.title === dossier.title, `${row.slug}: título desincronizado.`);
      assert(
        row.category_path === yaguaCategoryBySlug[row.slug],
        `${row.slug}: categoría desincronizada.`,
      );
      assert(
        row.content === dossier.content &&
          row.editorial_content === dossier.content,
        `${row.slug}: contenido desincronizado.`,
      );
      assert(
        !/Petita|Sairango|Yuané|Asento|pureza racial|caníbales boras/i.test(
          row.mito,
        ),
        `${row.slug}: persiste contenido sintético o degradante.`,
      );
      assert(row.tag_count === 4, `${row.slug}: ${row.tag_count} etiquetas.`);
      assert(
        row.keyword_count === 5,
        `${row.slug}: ${row.keyword_count} palabras clave.`,
      );
      assert(row.seo_count === 1, `${row.slug}: ${row.seo_count} filas SEO.`);
      assert(
        row.editorial_id && row.vertical_id && row.vertical_count === 1,
        `${row.slug}: falta expediente o pareja vertical única.`,
      );
      assert(
        row.image_url === media.horizontal &&
          row.editorial_image_url === media.horizontal &&
          row.vertical_image_url === media.vertical,
        `${row.slug}: pareja visual desincronizada.`,
      );
      assert(
        row.image_url !== row.vertical_image_url &&
          !allImages.has(row.image_url) &&
          !allImages.has(row.vertical_image_url),
        `${row.slug}: pareja visual inválida o duplicada.`,
      );
      allImages.add(row.image_url);
      allImages.add(row.vertical_image_url);
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
      assert(
        /FRONTERA EDITORIAL/i.test(row.research_notes),
        `${row.slug}: falta límite editorial durable.`,
      );
    }
    assert(allImages.size === 12, "No hay doce imágenes únicas.");

    const community = await client.query(
      `SELECT m.slug
       FROM myths m
       JOIN communities c ON c.id = m.community_id
       WHERE c.slug = 'yaguas'
       ORDER BY m.slug`,
    );
    assert(
      JSON.stringify(community.rows.map(({ slug }) => slug)) ===
        JSON.stringify([...canonicalYaguaSlugs].sort()),
      `Universo Yagua distinto: ${community.rowCount}.`,
    );
    const profile = await client.query(
      `SELECT name, image_prompt, image_url
       FROM communities
       WHERE slug = 'yaguas'
       LIMIT 1`,
    );
    assert(profile.rowCount === 1, "Falta el perfil Yagua.");
    assert(
      profile.rows[0].name === "Yagua / Ñihamwo",
      "Nombre comunitario incorrecto.",
    );
    assert(
      strictPaperCut(profile.rows[0].image_prompt),
      "El prompt comunitario no cumple la dirección visual.",
    );
    assert(
      profile.rows[0].image_url === yaguaCommunityImageUrl,
      "El héroe comunitario no usa la ilustración aprobada.",
    );
    const communitySeo = await client.query(
      `SELECT meta_title, canonical_path
       FROM seo_pages
       WHERE page_type = 'community' AND slug = 'yaguas'
       LIMIT 1`,
    );
    assert(communitySeo.rowCount === 1, "Falta SEO de landing Yagua.");
    assert(
      communitySeo.rows[0].meta_title === yaguaCommunitySeo.meta_title &&
        communitySeo.rows[0].canonical_path === "/comunidades/yaguas",
      "SEO de landing Yagua incorrecto.",
    );
    console.log(
      JSON.stringify(
        {
          status: "verified",
          universe: assertYaguaUniverse(),
          canonicalYaguaMyths: community.rowCount,
          editorialDossiers: result.rows.filter(({ editorial_id }) => editorial_id)
            .length,
          seoRows: result.rows.reduce((sum, row) => sum + row.seo_count, 0),
          verticalImages: result.rows.reduce(
            (sum, row) => sum + row.vertical_count,
            0,
          ),
          sourceRange: [Math.min(...sourceCounts), Math.max(...sourceCounts)],
          media: { generatedPairs: 6, reusedPairs: 0, uniqueImages: allImages.size },
          communityProfile: profile.rows[0],
          communitySeo: communitySeo.rows[0],
          imageProvenance: provenance.visualQa,
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
