import path from "node:path";
import process from "node:process";
import { pathToFileURL } from "node:url";

import dotenv from "dotenv";
import pg from "pg";

import { nasaMedia } from "../../editorial/nasa/media.mjs";
import { canonicalNasaSlugs } from "../../editorial/nasa/universe.mjs";

const { Client } = pg;

function parseArgs(argv) {
  const options = { envFile: ".env" };
  for (const arg of argv) {
    if (arg.startsWith("--env=")) {
      options.envFile = arg.slice("--env=".length);
    } else {
      throw new Error(`Argumento no reconocido: ${arg}`);
    }
  }
  return options;
}

function stable(value) {
  return JSON.stringify(value);
}

function parseJson(value) {
  return typeof value === "string" ? JSON.parse(value || "[]") : value;
}

function compare(slug, field, actual, expected, mismatches) {
  if (stable(actual) !== stable(expected)) {
    mismatches.push({ slug, field, actual, expected });
  }
}

async function loadModules() {
  const modules = new Map();
  for (const slug of canonicalNasaSlugs) {
    const modulePath = path.resolve(
      "editorial",
      "nasa",
      "myths",
      `${slug}.mjs`,
    );
    const { default: data } = await import(pathToFileURL(modulePath).href);
    modules.set(slug, data);
  }
  return modules;
}

function expectedEditorial(data) {
  return {
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
}

function actualEditorial(row, prefix) {
  return {
    title: row[`${prefix}_title`],
    categoryPath: row[`${prefix}_category_path`],
    tagsRaw: row[`${prefix}_tags_raw`],
    latitude: Number(row[`${prefix}_latitude`]),
    longitude: Number(row[`${prefix}_longitude`]),
    mito: row[`${prefix}_mito`],
    historia: row[`${prefix}_historia`],
    versiones: row[`${prefix}_versiones`],
    leccion: row[`${prefix}_leccion`],
    similitudes: row[`${prefix}_similitudes`],
    content: row[`${prefix}_content`],
    excerpt: row[`${prefix}_excerpt`],
    seoTitle: row[`${prefix}_seo_title`],
    seoDescription: row[`${prefix}_seo_description`],
    focusKeyword: row[`${prefix}_focus_keyword`],
    focusKeywordsRaw: row[`${prefix}_focus_keywords_raw`],
    imagePrompt: row[`${prefix}_image_prompt`],
    imageUrl: row[`${prefix}_image_url`],
  };
}

async function run() {
  const { envFile } = parseArgs(process.argv.slice(2));
  const modules = await loadModules();
  dotenv.config({ path: path.resolve(envFile), quiet: true });
  const connectionString =
    process.env.POSTGRES_URL_NON_POOLING ||
    process.env.DATABASE_URL_UNPOOLED ||
    process.env.POSTGRES_URL ||
    process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error(`No se encontró una conexión Postgres en ${envFile}.`);
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
              e.image_url AS editorial_image_url,
              e.image_prompt_horizontal,
              e.image_prompt_vertical,
              e.key_sources_json, e.sources_json, e.research_notes,
              vertical.vertical_count,
              vertical.vertical_image_url,
              vertical.vertical_custom_prompt,
              s.meta_title, s.meta_description, s.meta_keywords,
              s.og_title, s.og_description,
              s.twitter_title, s.twitter_description, s.canonical_path
       FROM myths m
       JOIN communities c ON c.id = m.community_id
       LEFT JOIN editorial_myths e ON e.source_myth_id = m.id
       LEFT JOIN LATERAL (
         SELECT COUNT(*)::int AS vertical_count,
                MAX(vi.image_url) AS vertical_image_url,
                MAX(vi.custom_prompt) AS vertical_custom_prompt
         FROM vertical_images vi
         WHERE vi.entity_type = 'myth' AND vi.entity_id = m.id
       ) vertical ON TRUE
       LEFT JOIN seo_pages s ON s.page_type = 'myth' AND s.slug = m.slug
       WHERE c.slug = 'nasa-paeces'
       ORDER BY m.slug`,
    );

    const rowsBySlug = new Map(result.rows.map((row) => [row.slug, row]));
    const actualSlugs = [...rowsBySlug.keys()].sort();
    const missing = canonicalNasaSlugs.filter((slug) => !rowsBySlug.has(slug));
    const unexpected = actualSlugs.filter(
      (slug) => !canonicalNasaSlugs.includes(slug),
    );
    const mismatches = [];

    for (const slug of canonicalNasaSlugs) {
      const row = rowsBySlug.get(slug);
      if (!row) continue;
      const data = modules.get(slug);
      if (!row.editorial_id) {
        mismatches.push({ slug, field: "editorial_id", actual: null });
        continue;
      }

      const expected = expectedEditorial(data);
      compare(
        slug,
        "myths",
        actualEditorial(row, "myth"),
        expected,
        mismatches,
      );
      compare(
        slug,
        "editorial_myths",
        actualEditorial(row, "editorial"),
        expected,
        mismatches,
      );
      compare(
        slug,
        "image_prompt_horizontal",
        row.image_prompt_horizontal,
        data.image_prompt_horizontal,
        mismatches,
      );
      compare(
        slug,
        "image_prompt_vertical",
        row.image_prompt_vertical,
        data.image_prompt_vertical,
        mismatches,
      );
      compare(
        slug,
        "vertical_image_count",
        Number(row.vertical_count),
        1,
        mismatches,
      );
      compare(
        slug,
        "vertical_image_url",
        row.vertical_image_url,
        nasaMedia[slug].vertical,
        mismatches,
      );
      if (slug === "juan-tama") {
        compare(
          slug,
          "vertical_custom_prompt",
          row.vertical_custom_prompt,
          data.image_prompt_vertical,
          mismatches,
        );
      }
      compare(
        slug,
        "key_sources_json",
        parseJson(row.key_sources_json),
        data.keySources,
        mismatches,
      );
      compare(
        slug,
        "sources_json",
        parseJson(row.sources_json),
        data.sources,
        mismatches,
      );
      compare(
        slug,
        "research_notes",
        row.research_notes,
        data.researchNotes,
        mismatches,
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
        mismatches,
      );
    }

    console.log(
      JSON.stringify(
        {
          expected: canonicalNasaSlugs.length,
          found: result.rowCount,
          missing,
          unexpected,
          mismatchCount: mismatches.length,
          mismatches,
        },
        null,
        2,
      ),
    );
    if (missing.length || unexpected.length || mismatches.length) {
      throw new Error("La base Nasa no coincide con los módulos editoriales.");
    }
  } finally {
    await client.end();
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
