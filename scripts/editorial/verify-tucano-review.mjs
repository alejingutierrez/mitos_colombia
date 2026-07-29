import fs from "node:fs";
import path from "node:path";
import process from "node:process";

import dotenv from "dotenv";
import pg from "pg";

import {
  tucanoCommunityImageUrl,
  tucanoCommunitySeo,
} from "../../editorial/tucano/community.mjs";
import { tucanoMedia } from "../../editorial/tucano/media.mjs";
import { tucanoMythsBySlug } from "../../editorial/tucano/records.mjs";
import {
  assertTucanoUniverse,
  canonicalTucanoSlugs,
  transferredFromTucanoSlugs,
  tucanoCategoryBySlug,
} from "../../editorial/tucano/universe.mjs";

const { Client } = pg;
const provenance = JSON.parse(
  fs.readFileSync(
    new URL("../../editorial/tucano/provenance.json", import.meta.url),
    "utf8",
  ),
);

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
      `SELECT m.id, m.slug, m.title, m.category_path, m.mito, m.historia,
              m.versiones, m.content, m.image_url, m.image_prompt,
              m.latitude, m.longitude, c.slug AS community_slug,
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
      [canonicalTucanoSlugs],
    );
    assert(
      result.rowCount === canonicalTucanoSlugs.length,
      `Se esperaban ${canonicalTucanoSlugs.length} expedientes y hay ${result.rowCount}.`,
    );
    const sourceCounts = [];
    for (const row of result.rows) {
      const dossier = tucanoMythsBySlug[row.slug];
      const media = tucanoMedia[row.slug];
      assert(dossier && media, `${row.slug}: inventario incompleto.`);
      assert(
        row.community_slug === "tucano",
        `${row.slug}: comunidad incorrecta.`,
      );
      assert(row.title === dossier.title, `${row.slug}: título desincronizado.`);
      assert(
        row.category_path === tucanoCategoryBySlug[row.slug],
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
          !/pending\.invalid/.test(row.image_url + row.vertical_image_url),
        `${row.slug}: pareja visual inválida.`,
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
      assert(sourceCount === 7, `${row.slug}: ${sourceCount} fuentes.`);
      sourceCounts.push(sourceCount);
    }
    const bySlug = new Map(result.rows.map((row) => [row.slug, row]));
    assert(
      bySlug.get("cuando-la-danta-perdio-su-hegemonia").title ===
        "Boraró y Boraró Numió",
      "La URL duplicada de la danta no fue reasignada.",
    );
    assert(
      bySlug.get("el-origen-del-hombre").title ===
        "La Canoa de Transformación y el origen de los pueblos" &&
        bySlug.get("los-blancos-dominan-a-los-indios").title ===
          "La memoria y el papel en el ciclo de Yepá Huáke" &&
        bySlug.get("yepa-castiaga-a-los-animales").title ===
          "Yepá Huáke y la transformación de los animales",
      "Falta una corrección central del corpus heredado.",
    );
    assert(
      bySlug.get("la-semilla-de-la-yuca-tucano").title ===
        "Yepá Vejkeó y la semilla de la yuca",
      "Falta la adición documentada sobre la semilla de la yuca.",
    );
    assert(
      !/\bPaola\b|\bBeatriz\b|\bZabulón\b/.test(
        bySlug.get("la-aparicion-del-sol-del-viento-y-los-mares").mito,
      ) &&
        !/\breina\b|\bhegemonía\b/i.test(
          bySlug.get("cuando-la-danta-perdio-su-hegemonia").mito,
        ),
      "Persisten elementos heredados sin respaldo.",
    );
    const transferred = await client.query(
      `SELECT m.slug, m.category_path, c.slug AS community_slug, r.slug AS region_slug
       FROM myths m
       JOIN communities c ON c.id = m.community_id
       JOIN regions r ON r.id = c.region_id
       WHERE m.slug = ANY($1::text[])
       ORDER BY m.slug`,
      [transferredFromTucanoSlugs],
    );
    assert(
      transferred.rowCount === 2 &&
        transferred.rows.every(
          ({ community_slug, region_slug, category_path }) =>
            community_slug === "mixto" &&
            region_slug === "amazonas" &&
            category_path === "Amazonas > Amazonas > Mixto",
        ),
      "Las dos atribuciones dudosas no quedaron en Amazonas > Mixto.",
    );
    const community = await client.query(
      `SELECT m.slug
       FROM myths m
       JOIN communities c ON c.id = m.community_id
       WHERE c.slug = 'tucano'
       ORDER BY m.slug`,
    );
    assert(
      JSON.stringify(community.rows.map(({ slug }) => slug)) ===
        JSON.stringify([...canonicalTucanoSlugs].sort()),
      `Universo Tucano distinto: ${community.rowCount}.`,
    );
    const profile = await client.query(
      `SELECT name, image_prompt, image_url
       FROM communities
       WHERE slug = 'tucano'
       LIMIT 1`,
    );
    assert(profile.rowCount === 1, "Falta el perfil Tucano.");
    assert(
      profile.rows[0].name === "Tucano",
      "Nombre comunitario incorrecto.",
    );
    assert(
      strictPaperCut(profile.rows[0].image_prompt),
      "El prompt comunitario no cumple la dirección visual.",
    );
    assert(
      profile.rows[0].image_url === tucanoCommunityImageUrl,
      "El héroe comunitario no usa la ilustración flat 2D aprobada.",
    );
    const communitySeo = await client.query(
      `SELECT meta_title, canonical_path
       FROM seo_pages
       WHERE page_type = 'community' AND slug = 'tucano'
       LIMIT 1`,
    );
    assert(communitySeo.rowCount === 1, "Falta SEO de landing Tucano.");
    assert(
      communitySeo.rows[0].meta_title === tucanoCommunitySeo.meta_title &&
        communitySeo.rows[0].canonical_path === "/comunidades/tucano",
      "SEO de landing Tucano incorrecto.",
    );
    const generatedPairs = Object.values(tucanoMedia).filter(
      ({ reusedFrom }) => !reusedFrom,
    ).length;
    const reusedPairs = Object.values(tucanoMedia).filter(
      ({ reusedFrom }) => reusedFrom,
    ).length;
    assert(generatedPairs === 7, `Pares propios inesperados: ${generatedPairs}.`);
    assert(reusedPairs === 0, `Pares reutilizados: ${reusedPairs}.`);
    assert(
      Object.values(tucanoMedia).every(
        ({ provenanceStatus, provider, model }) =>
          provenanceStatus === "approved" &&
          provider === "openai" &&
          model === "gpt-image-2",
      ),
      "El inventario visual no acredita OpenAI gpt-image-2.",
    );
    assert(
      provenance.visualQa?.status === "approved" &&
        provenance.visualQa?.finalImages === 14 &&
        provenance.visualQa?.generationAttempts >= 14 &&
        Object.keys(provenance.items || {}).length === 14,
      "El manifiesto durable no acredita las catorce imágenes finales.",
    );
    const imageUrls = result.rows.flatMap((row) => [
      row.image_url,
      row.vertical_image_url,
    ]);
    assert(
      new Set(imageUrls).size === imageUrls.length,
      "Hay URLs repetidas dentro de Tucano.",
    );
    const collisions = await client.query(
      `SELECT 'horizontal' AS orientation, m.slug, m.image_url AS image_url
       FROM myths m
       JOIN communities c ON c.id = m.community_id
       WHERE c.slug <> 'tucano' AND m.image_url = ANY($1::text[])
       UNION ALL
       SELECT 'vertical' AS orientation, m.slug, vi.image_url AS image_url
       FROM vertical_images vi
       JOIN myths m
         ON vi.entity_type = 'myth' AND vi.entity_id = m.id
       JOIN communities c ON c.id = m.community_id
       WHERE c.slug <> 'tucano' AND vi.image_url = ANY($1::text[])`,
      [imageUrls],
    );
    assert(
      collisions.rowCount === 0,
      `Hay imágenes Tucano reutilizadas fuera de la comunidad: ${JSON.stringify(collisions.rows)}.`,
    );
    console.log(
      JSON.stringify(
        {
          status: "verified",
          universe: assertTucanoUniverse(),
          canonicalTucanoMyths: community.rowCount,
          editorialDossiers: result.rows.filter(({ editorial_id }) => editorial_id)
            .length,
          seoRows: result.rows.reduce((sum, row) => sum + row.seo_count, 0),
          verticalImages: result.rows.filter(({ vertical_id }) => vertical_id)
            .length,
          sourceRange: [Math.min(...sourceCounts), Math.max(...sourceCounts)],
          media: {
            generatedPairs,
            reusedPairs,
            finalImages: provenance.visualQa.finalImages,
            generationAttempts: provenance.visualQa.generationAttempts,
            estimatedOutputCostUsd:
              provenance.visualQa.estimatedOutputCostUsd,
            externalCollisions: collisions.rowCount,
          },
          communityProfile: profile.rows[0],
          communitySeo: communitySeo.rows[0],
          transferredAttributions: transferred.rows,
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
