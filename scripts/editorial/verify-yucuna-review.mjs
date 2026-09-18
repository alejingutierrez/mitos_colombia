import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

import dotenv from "dotenv";
import pg from "pg";

import { huitotoCommunitySeo } from "../../editorial/huitoto/community.mjs";
import { canonicalHuitotoSlugs } from "../../editorial/huitoto/universe.mjs";
import {
  yucunaCommunityImageUrl,
  yucunaCommunityPage,
  yucunaCommunitySeo,
} from "../../editorial/yucuna/community.mjs";
import { yucunaMedia } from "../../editorial/yucuna/media.mjs";
import { yucunaReviewedMythsBySlug } from "../../editorial/yucuna/records.mjs";
import {
  assertYucunaUniverse,
  canonicalYucunaSlugs,
  reviewedYucunaWorklistSlugs,
  transferredYucunaSlugs,
  yucunaCategoryBySlug,
} from "../../editorial/yucuna/universe.mjs";

const { Client } = pg;
const provenancePath = path.resolve("editorial", "yucuna", "provenance.json");

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

function sameSet(actual, expected) {
  return (
    JSON.stringify([...actual].sort()) === JSON.stringify([...expected].sort())
  );
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
      provenance.visualQa?.finalImages === 8,
    "La QA visual no está aprobada para ocho imágenes.",
  );
  assert(
    Object.keys(provenance.items || {}).length === 8,
    "El manifiesto durable no contiene ocho imágenes.",
  );
  for (const slug of reviewedYucunaWorklistSlugs) {
    const dossier = yucunaReviewedMythsBySlug[slug];
    const media = yucunaMedia[slug];
    const expectedSources =
      dossier.editorial_scope === "abundance-transfer" ? 7 : 9;
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
        item.sourceUrls.length === expectedSources &&
          new Set(item.sourceUrls).size === expectedSources,
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
              ARRAY(
                SELECT t.name
                FROM myth_tags mt
                JOIN tags t ON t.id = mt.tag_id
                WHERE mt.myth_id = m.id
                ORDER BY t.name
              ) AS tag_names,
              ARRAY(
                SELECT mk.keyword
                FROM myth_keywords mk
                WHERE mk.myth_id = m.id
                ORDER BY mk.keyword
              ) AS keywords,
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
      [reviewedYucunaWorklistSlugs],
    );
    assert(
      result.rowCount === reviewedYucunaWorklistSlugs.length,
      `Se esperaban cuatro expedientes y hay ${result.rowCount}.`,
    );

    const sourceCounts = [];
    const allImages = new Set();
    for (const row of result.rows) {
      const dossier = yucunaReviewedMythsBySlug[row.slug];
      const media = yucunaMedia[row.slug];
      assert(dossier && media, `${row.slug}: inventario incompleto.`);
      const expectedCommunity =
        dossier.editorial_scope === "abundance-transfer"
          ? "huitotos"
          : "yucuna";
      assert(
        row.community_slug === expectedCommunity,
        `${row.slug}: comunidad incorrecta (${row.community_slug}).`,
      );
      assert(row.title === dossier.title, `${row.slug}: título desincronizado.`);
      assert(
        row.category_path === yucunaCategoryBySlug[row.slug],
        `${row.slug}: categoría desincronizada.`,
      );
      assert(
        row.content === dossier.content &&
          row.editorial_content === dossier.content,
        `${row.slug}: contenido desincronizado.`,
      );
      assert(
        row.editorial_id && row.vertical_id && row.vertical_count === 1,
        `${row.slug}: falta expediente o pareja vertical única.`,
      );
      assert(
        sameSet(row.tag_names, dossier.tags),
        `${row.slug}: etiquetas desincronizadas.`,
      );
      assert(
        sameSet(row.keywords, dossier.focus_keywords),
        `${row.slug}: palabras clave desincronizadas.`,
      );
      assert(row.seo_count === 1, `${row.slug}: ${row.seo_count} filas SEO.`);
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
      const expectedSources =
        dossier.editorial_scope === "abundance-transfer" ? 7 : 9;
      assert(
        sourceCount === expectedSources,
        `${row.slug}: ${sourceCount} fuentes; se esperaban ${expectedSources}.`,
      );
      sourceCounts.push(sourceCount);
      assert(
        /CORRECCIÓN|NUEVA FICHA|TRANSFERENCIA|RECLASIFICACIÓN/i.test(
          row.research_notes,
        ),
        `${row.slug}: falta decisión editorial durable.`,
      );
    }
    assert(allImages.size === 8, "No hay ocho imágenes únicas.");

    const imageCollisions = await client.query(
      `WITH all_media AS (
         SELECT m.id AS myth_id, m.image_url AS image_url
         FROM myths m
         WHERE m.image_url = ANY($1::text[])
         UNION ALL
         SELECT m.id AS myth_id, vi.image_url AS image_url
         FROM vertical_images vi
         JOIN myths m
           ON vi.entity_type = 'myth' AND vi.entity_id = m.id
         WHERE vi.image_url = ANY($1::text[])
       )
       SELECT image_url, COUNT(*)::int AS uses
       FROM all_media
       GROUP BY image_url
       HAVING COUNT(*) <> 1`,
      [[...allImages]],
    );
    assert(
      imageCollisions.rowCount === 0,
      `Hay imágenes reutilizadas globalmente: ${JSON.stringify(imageCollisions.rows)}.`,
    );

    const universes = await client.query(
      `SELECT c.slug AS community_slug, m.slug
       FROM communities c
       JOIN myths m ON m.community_id = c.id
       WHERE c.slug IN ('yucuna', 'huitotos')
       ORDER BY c.slug, m.slug`,
    );
    const universeByCommunity = new Map([
      ["yucuna", []],
      ["huitotos", []],
    ]);
    for (const row of universes.rows) {
      universeByCommunity.get(row.community_slug).push(row.slug);
    }
    assert(
      sameSet(universeByCommunity.get("yucuna"), canonicalYucunaSlugs),
      "El universo Yucuna no contiene exactamente tres fichas canónicas.",
    );
    assert(
      sameSet(universeByCommunity.get("huitotos"), [
        ...canonicalHuitotoSlugs,
        ...transferredYucunaSlugs,
      ]),
      "El universo Huitoto no contiene las 22 fichas base y la transferencia.",
    );

    const profiles = await client.query(
      `SELECT slug, name, image_prompt, image_url
       FROM communities
       WHERE slug IN ('yucuna', 'huitotos')
       ORDER BY slug`,
    );
    assert(profiles.rowCount === 2, "Faltan perfiles Yucuna o Huitoto.");
    const profilesBySlug = new Map(
      profiles.rows.map((row) => [row.slug, row]),
    );
    const yucunaProfile = profilesBySlug.get("yucuna");
    assert(
      yucunaProfile.name === yucunaCommunityPage.title,
      "Nombre comunitario Yucuna incorrecto.",
    );
    assert(
      strictPaperCut(yucunaProfile.image_prompt),
      "El prompt comunitario Yucuna no cumple la dirección visual.",
    );
    assert(
      yucunaProfile.image_url === yucunaCommunityImageUrl,
      "El héroe Yucuna no usa la ilustración aprobada.",
    );
    assert(
      profilesBySlug.get("huitotos").name === "Huitoto / Murui-Muina",
      "La transferencia alteró indebidamente el nombre Huitoto.",
    );

    const communitySeo = await client.query(
      `SELECT slug, meta_title, canonical_path
       FROM seo_pages
       WHERE page_type = 'community' AND slug IN ('yucuna', 'huitotos')
       ORDER BY slug`,
    );
    assert(communitySeo.rowCount === 2, "Falta SEO de una comunidad.");
    const seoBySlug = new Map(
      communitySeo.rows.map((row) => [row.slug, row]),
    );
    assert(
      seoBySlug.get("yucuna").meta_title === yucunaCommunitySeo.meta_title &&
        seoBySlug.get("yucuna").canonical_path === "/comunidades/yucuna",
      "SEO de landing Yucuna incorrecto.",
    );
    assert(
      seoBySlug.get("huitotos").meta_title ===
        huitotoCommunitySeo.meta_title &&
        seoBySlug.get("huitotos").canonical_path === "/comunidades/huitotos",
      "SEO de landing Huitoto no refleja 23 relatos.",
    );

    console.log(
      JSON.stringify(
        {
          status: "verified",
          universe: assertYucunaUniverse(),
          communities: {
            yucuna: universeByCommunity.get("yucuna").length,
            huitotos: universeByCommunity.get("huitotos").length,
          },
          reviewedRoutes: result.rowCount,
          editorialDossiers: result.rows.filter(({ editorial_id }) => editorial_id)
            .length,
          seoRows: result.rows.reduce((sum, row) => sum + row.seo_count, 0),
          verticalImages: result.rows.reduce(
            (sum, row) => sum + row.vertical_count,
            0,
          ),
          sourceRange: [Math.min(...sourceCounts), Math.max(...sourceCounts)],
          media: { generatedPairs: 4, reusedPairs: 0, uniqueImages: allImages.size },
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
