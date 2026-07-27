import path from "node:path";
import process from "node:process";
import { pathToFileURL } from "node:url";
import dotenv from "dotenv";
import pg from "pg";
import { canonicalMuiscaSlugs } from "../../editorial/muisca/universe.mjs";

const { Client } = pg;

function modulePath(slug) {
  if (slug === "bachue") {
    return path.resolve("editorial", "myths", "bachue.mjs");
  }
  return path.resolve("editorial", "muisca", "myths", `${slug}.mjs`);
}

function parseJson(value) {
  if (typeof value !== "string") {
    return value;
  }
  return JSON.parse(value || "[]");
}

function stable(value) {
  return JSON.stringify(value);
}

function compare(slug, label, actual, expected, mismatches) {
  if (stable(actual) !== stable(expected)) {
    mismatches.push({
      slug,
      field: label,
      actual,
      expected,
    });
  }
}

async function run() {
  const modules = new Map();
  for (const slug of canonicalMuiscaSlugs) {
    const imported = await import(pathToFileURL(modulePath(slug)).href);
    const data = imported.default;
    if (data.slug !== slug) {
      throw new Error(`${slug}: el módulo declara slug ${data.slug}.`);
    }
    modules.set(slug, data);
  }

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
    const result = await client.query(
      `SELECT m.id, m.slug,
              m.title AS myth_title,
              m.category_path AS myth_category_path,
              m.tags_raw AS myth_tags_raw,
              m.latitude AS myth_latitude,
              m.longitude AS myth_longitude,
              m.mito AS myth_mito,
              m.historia AS myth_historia,
              m.versiones AS myth_versiones,
              m.leccion AS myth_leccion,
              m.similitudes AS myth_similitudes,
              m.content AS myth_content,
              m.excerpt AS myth_excerpt,
              m.seo_title AS myth_seo_title,
              m.seo_description AS myth_seo_description,
              m.focus_keyword AS myth_focus_keyword,
              m.focus_keywords_raw AS myth_focus_keywords_raw,
              m.image_prompt AS myth_image_prompt,
              m.image_url AS myth_image_url,
              e.id AS editorial_id,
              e.title AS editorial_title,
              e.category_path AS editorial_category_path,
              e.tags_raw AS editorial_tags_raw,
              e.latitude AS editorial_latitude,
              e.longitude AS editorial_longitude,
              e.mito AS editorial_mito,
              e.historia AS editorial_historia,
              e.versiones AS editorial_versiones,
              e.leccion AS editorial_leccion,
              e.similitudes AS editorial_similitudes,
              e.content AS editorial_content,
              e.excerpt AS editorial_excerpt,
              e.seo_title AS editorial_seo_title,
              e.seo_description AS editorial_seo_description,
              e.focus_keyword AS editorial_focus_keyword,
              e.focus_keywords_raw AS editorial_focus_keywords_raw,
              e.image_prompt AS editorial_image_prompt,
              e.image_prompt_horizontal AS editorial_image_prompt_horizontal,
              e.image_prompt_vertical AS editorial_image_prompt_vertical,
              e.image_url AS editorial_image_url,
              e.key_sources_json,
              e.sources_json,
              e.research_notes,
              s.meta_title, s.meta_description, s.meta_keywords,
              s.og_title, s.og_description,
              s.twitter_title, s.twitter_description, s.canonical_path
       FROM myths m
       LEFT JOIN editorial_myths e ON e.source_myth_id = m.id
       LEFT JOIN seo_pages s
         ON s.page_type = 'myth' AND s.slug = m.slug
       WHERE m.slug = ANY($1::text[])
       ORDER BY m.slug`,
      [canonicalMuiscaSlugs]
    );

    const rowsBySlug = new Map(result.rows.map((row) => [row.slug, row]));
    const missing = canonicalMuiscaSlugs.filter(
      (slug) => !rowsBySlug.has(slug)
    );
    const mismatches = [];

    for (const slug of canonicalMuiscaSlugs) {
      const row = rowsBySlug.get(slug);
      if (!row) continue;
      const data = modules.get(slug);
      if (!row.editorial_id) {
        mismatches.push({
          slug,
          field: "editorial_id",
          actual: null,
          expected: "present",
        });
        continue;
      }

      const expected = {
        title: data.title,
        categoryPath: data.category_path,
        tagsRaw: data.tags.join(", "),
        latitude: Number(data.latitude),
        longitude: Number(data.longitude),
        mito: data.mito,
        historia: data.historia,
        versiones: data.versiones,
        leccion: data.leccion,
        similitudes: data.similitudes,
        content: data.content,
        excerpt: data.excerpt,
        seoTitle: data.seo_title,
        seoDescription: data.seo_description,
        focusKeyword: data.focus_keyword,
        focusKeywordsRaw: data.focus_keywords.join("|"),
        imagePrompt: data.image_prompt,
        imageUrl: data.image_url,
      };

      const mythFields = {
        title: row.myth_title,
        categoryPath: row.myth_category_path,
        tagsRaw: row.myth_tags_raw,
        latitude: Number(row.myth_latitude),
        longitude: Number(row.myth_longitude),
        mito: row.myth_mito,
        historia: row.myth_historia,
        versiones: row.myth_versiones,
        leccion: row.myth_leccion,
        similitudes: row.myth_similitudes,
        content: row.myth_content,
        excerpt: row.myth_excerpt,
        seoTitle: row.myth_seo_title,
        seoDescription: row.myth_seo_description,
        focusKeyword: row.myth_focus_keyword,
        focusKeywordsRaw: row.myth_focus_keywords_raw,
        imagePrompt: row.myth_image_prompt,
        imageUrl: row.myth_image_url,
      };
      compare(slug, "myths", mythFields, expected, mismatches);

      const editorialFields = {
        title: row.editorial_title,
        categoryPath: row.editorial_category_path,
        tagsRaw: row.editorial_tags_raw,
        latitude: Number(row.editorial_latitude),
        longitude: Number(row.editorial_longitude),
        mito: row.editorial_mito,
        historia: row.editorial_historia,
        versiones: row.editorial_versiones,
        leccion: row.editorial_leccion,
        similitudes: row.editorial_similitudes,
        content: row.editorial_content,
        excerpt: row.editorial_excerpt,
        seoTitle: row.editorial_seo_title,
        seoDescription: row.editorial_seo_description,
        focusKeyword: row.editorial_focus_keyword,
        focusKeywordsRaw: row.editorial_focus_keywords_raw,
        imagePrompt: row.editorial_image_prompt,
        imageUrl: row.editorial_image_url,
      };
      compare(slug, "editorial_myths", editorialFields, expected, mismatches);
      compare(
        slug,
        "image_prompt_horizontal",
        row.editorial_image_prompt_horizontal,
        data.image_prompt_horizontal,
        mismatches
      );
      compare(
        slug,
        "image_prompt_vertical",
        row.editorial_image_prompt_vertical,
        data.image_prompt_vertical,
        mismatches
      );
      compare(
        slug,
        "key_sources_json",
        parseJson(row.key_sources_json),
        data.keySources,
        mismatches
      );
      compare(
        slug,
        "sources_json",
        parseJson(row.sources_json),
        data.sources,
        mismatches
      );
      compare(
        slug,
        "research_notes",
        row.research_notes,
        data.researchNotes,
        mismatches
      );
      compare(
        slug,
        "seo_pages",
        {
          meta_title: row.meta_title,
          meta_description: row.meta_description,
          meta_keywords: row.meta_keywords,
          og_title: row.og_title,
          og_description: row.og_description,
          twitter_title: row.twitter_title,
          twitter_description: row.twitter_description,
          canonical_path: row.canonical_path,
        },
        data.seo,
        mismatches
      );
    }

    console.log(
      JSON.stringify(
        {
          canonical: canonicalMuiscaSlugs.length,
          loadedModules: modules.size,
          databaseRows: result.rows.length,
          missing,
          mismatchCount: mismatches.length,
          mismatches,
        },
        null,
        2
      )
    );

    if (missing.length || mismatches.length) {
      process.exitCode = 1;
    }
  } finally {
    await client.end();
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
