import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

import dotenv from "dotenv";
import pg from "pg";

const { Client } = pg;

function parseArgs(argv) {
  const options = { envFile: ".env", strict: false };
  for (const arg of argv) {
    if (arg === "--strict") options.strict = true;
    else if (arg.startsWith("--env=")) {
      options.envFile = arg.slice("--env=".length);
    } else {
      throw new Error(`Argumento no reconocido: ${arg}`);
    }
  }
  return options;
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function sameSet(left, right) {
  return (
    JSON.stringify([...left].sort()) === JSON.stringify([...right].sort())
  );
}

function digest(value) {
  return createHash("sha256").update(value).digest("hex");
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

function readProvenance(config) {
  try {
    return JSON.parse(
      fs.readFileSync(path.resolve(config.provenancePath), "utf8"),
    );
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
    return null;
  }
}

function verifyProvenance(config, provenance) {
  const expectedImages = config.records.length * 2;
  assert(provenance, "Falta el manifiesto durable de imágenes.");
  assert(provenance.provider === "openai", "Proveedor visual incorrecto.");
  assert(provenance.model === "gpt-image-2", "Modelo visual incorrecto.");
  assert(provenance.quality === "high", "Calidad visual incorrecta.");
  assert(
    provenance.visualQa?.status === "approved" &&
      provenance.visualQa?.finalImages === expectedImages,
    `La QA visual no está aprobada para ${expectedImages} imágenes.`,
  );
  assert(
    Object.keys(provenance.items || {}).length === expectedImages,
    `El manifiesto no contiene ${expectedImages} imágenes.`,
  );
  for (const record of config.records) {
    const sources = [...record.keySources, ...record.sources];
    for (const orientation of ["horizontal", "vertical"]) {
      const item = provenance.items[`${record.slug}:${orientation}`];
      const prompt =
        orientation === "horizontal"
          ? record.image_prompt_horizontal
          : record.image_prompt_vertical;
      const url =
        orientation === "horizontal"
          ? record.image_url
          : record.vertical_image_url;
      assert(item, `${record.slug}:${orientation}: falta procedencia.`);
      assert(
        item.provider === "openai" &&
          item.model === "gpt-image-2" &&
          item.quality === "high" &&
          item.visualQa === "approved" &&
          item.visualReviewNote,
        `${record.slug}:${orientation}: procedencia o revisión inválida.`,
      );
      assert(
        item.editorialPrompt === prompt &&
          item.editorialPromptSha256 === digest(prompt) &&
          item.generationPromptSha256 === digest(item.generationPrompt),
        `${record.slug}:${orientation}: huella de prompt inválida.`,
      );
      assert(
        item.url === url,
        `${record.slug}:${orientation}: URL fuera de inventario.`,
      );
      assert(
        item.sourceUrls.length === sources.length &&
          new Set(item.sourceUrls).size === sources.length,
        `${record.slug}:${orientation}: fuentes incompletas.`,
      );
    }
  }
}

export async function runCommunityEditorialVerifier(
  config,
  argv = process.argv.slice(2),
) {
  const options = parseArgs(argv);
  dotenv.config({ path: path.resolve(options.envFile), quiet: true });
  const connectionString =
    process.env.POSTGRES_URL_NON_POOLING ||
    process.env.DATABASE_URL_UNPOOLED ||
    process.env.POSTGRES_URL ||
    process.env.DATABASE_URL;
  if (!connectionString) throw new Error("No hay conexión Postgres.");
  const provenance = readProvenance(config);
  const client = new Client({
    connectionString,
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();
  try {
    const communityResult = await client.query(
      `SELECT c.*, r.name AS region_name
       FROM communities c
       JOIN regions r ON r.id = c.region_id
       WHERE c.slug = $1
       LIMIT 1`,
      [config.communitySlug],
    );
    assert(
      communityResult.rowCount === 1,
      `No existe la comunidad ${config.communitySlug}.`,
    );
    const community = communityResult.rows[0];
    const universeResult = await client.query(
      `SELECT m.slug
       FROM myths m
       WHERE m.community_id = $1
       ORDER BY m.slug`,
      [community.id],
    );
    const currentSlugs = universeResult.rows.map(({ slug }) => slug);
    const isInherited = sameSet(currentSlugs, config.inheritedSlugs);
    const isCanonical = sameSet(currentSlugs, config.canonicalSlugs);
    assert(
      isInherited || isCanonical,
      `Universo inesperado: ${currentSlugs.join(", ")}.`,
    );
    if (!isCanonical) {
      const pending = {
        status: "pending-sync",
        community: config.communitySlug,
        current: currentSlugs.length,
        canonical: config.canonicalSlugs.length,
        missing: config.canonicalSlugs.filter(
          (slug) => !currentSlugs.includes(slug),
        ),
        imageProvenance: provenance?.visualQa || { status: "pending" },
      };
      if (options.strict) {
        throw new Error(
          `La comunidad todavía no está sincronizada: ${JSON.stringify(pending)}.`,
        );
      }
      console.log(JSON.stringify(pending, null, 2));
      return pending;
    }

    verifyProvenance(config, provenance);
    const result = await client.query(
      `SELECT m.id, m.slug, m.title, m.category_path, m.content, m.mito,
              m.historia, m.versiones, m.leccion, m.similitudes,
              m.excerpt, m.seo_title, m.seo_description,
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
      [config.canonicalSlugs],
    );
    assert(
      result.rowCount === config.canonicalSlugs.length,
      `Se esperaban ${config.canonicalSlugs.length} expedientes.`,
    );
    const allImages = new Set();
    const sourceCounts = [];
    for (const row of result.rows) {
      const record = config.recordsBySlug[row.slug];
      assert(record, `${row.slug}: expediente ausente.`);
      assert(
        row.community_slug === config.communitySlug,
        `${row.slug}: comunidad incorrecta.`,
      );
      assert(row.title === record.title, `${row.slug}: título desincronizado.`);
      assert(
        row.category_path === record.category_path,
        `${row.slug}: categoría desincronizada.`,
      );
      for (const field of [
        "content",
        "mito",
        "historia",
        "versiones",
        "leccion",
        "similitudes",
        "excerpt",
        "seo_title",
        "seo_description",
      ]) {
        assert(
          row[field] === record[field],
          `${row.slug}: ${field} desincronizado.`,
        );
      }
      if (config.forbiddenPattern) {
        assert(
          !config.forbiddenPattern.test(
            [row.mito, row.historia, row.versiones].join("\n"),
          ),
          `${row.slug}: persiste contenido prohibido.`,
        );
      }
      assert(row.tag_count === 4, `${row.slug}: etiquetas incorrectas.`);
      assert(
        row.keyword_count === 5,
        `${row.slug}: palabras clave incorrectas.`,
      );
      assert(row.seo_count === 1, `${row.slug}: SEO duplicado o ausente.`);
      assert(
        row.editorial_id && row.vertical_id && row.vertical_count === 1,
        `${row.slug}: expediente o vertical ausente.`,
      );
      assert(
        row.content === row.editorial_content,
        `${row.slug}: contenido editorial desincronizado.`,
      );
      assert(
        row.image_url === record.image_url &&
          row.editorial_image_url === record.image_url &&
          row.vertical_image_url === record.vertical_image_url,
        `${row.slug}: pareja visual desincronizada.`,
      );
      assert(
        !allImages.has(row.image_url) &&
          !allImages.has(row.vertical_image_url) &&
          row.image_url !== row.vertical_image_url,
        `${row.slug}: imagen repetida.`,
      );
      allImages.add(row.image_url);
      allImages.add(row.vertical_image_url);
      assert(
        row.image_prompt === record.image_prompt_horizontal &&
          row.image_prompt_horizontal === record.image_prompt_horizontal &&
          row.image_prompt_vertical === record.image_prompt_vertical &&
          row.vertical_custom_prompt === record.image_prompt_vertical,
        `${row.slug}: prompts desincronizados.`,
      );
      assert(
        row.vertical_base_prompt === config.verticalBasePrompt,
        `${row.slug}: prompt base vertical incorrecto.`,
      );
      assert(
        strictPaperCut(row.image_prompt) &&
          strictPaperCut(row.image_prompt_vertical),
        `${row.slug}: dirección visual incorrecta.`,
      );
      const sources = [
        ...jsonArray(row.key_sources_json),
        ...jsonArray(row.sources_json),
      ];
      sourceCounts.push(sources.length);
      assert(
        sources.length ===
          [...record.keySources, ...record.sources].length,
        `${row.slug}: fuentes desincronizadas.`,
      );
      assert(
        String(row.research_notes || "").includes(
          `editorial/${config.communitySlug}/provenance.json`,
        ),
        `${row.slug}: falta trazabilidad visual.`,
      );
    }
    assert(
      allImages.size === config.records.length * 2,
      "No hay una pareja visual única por mito.",
    );
    assert(
      community.name === config.communityPage.title &&
        community.image_url === config.communityImageUrl &&
        strictPaperCut(community.image_prompt),
      "Perfil de comunidad desincronizado.",
    );
    const communitySeoResult = await client.query(
      `SELECT * FROM seo_pages
       WHERE page_type = 'community' AND slug = $1`,
      [config.communitySlug],
    );
    assert(
      communitySeoResult.rowCount === 1 &&
        communitySeoResult.rows[0].meta_title ===
          config.communitySeo.meta_title &&
        communitySeoResult.rows[0].canonical_path ===
          config.communitySeo.canonical_path,
      "SEO de comunidad desincronizado.",
    );
    const verified = {
      status: "verified",
      community: config.communitySlug,
      myths: result.rowCount,
      imagePairs: allImages.size / 2,
      sourcesPerMyth: [...new Set(sourceCounts)],
      tagsPerMyth: 4,
      keywordsPerMyth: 5,
      imageProvenance: provenance.visualQa,
    };
    console.log(JSON.stringify(verified, null, 2));
    return verified;
  } finally {
    await client.end();
  }
}
