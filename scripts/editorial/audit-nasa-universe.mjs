import path from "node:path";
import process from "node:process";

import dotenv from "dotenv";
import pg from "pg";

import { nasaCommunitySeo } from "../../editorial/nasa/community.mjs";
import { nasaMedia } from "../../editorial/nasa/media.mjs";
import {
  NASA_CATEGORY_PATH,
  canonicalNasaSlugs,
} from "../../editorial/nasa/universe.mjs";

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

function words(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

function parseJson(value, label) {
  if (Array.isArray(value)) return value;
  try {
    return JSON.parse(value || "[]");
  } catch {
    throw new Error(`${label}: JSON inválido.`);
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
  if (!connectionString) {
    throw new Error(`No se encontró conexión Postgres en ${options.envFile}.`);
  }

  const client = new Client({
    connectionString,
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();
  try {
    const result = await client.query(
      `SELECT m.id, m.slug, m.title, m.category_path, m.image_url,
              m.mito, m.historia, m.versiones, m.leccion, m.similitudes,
              m.focus_keywords_raw,
              e.id AS editorial_id, e.sources_json, e.key_sources_json,
              e.research_notes, e.image_prompt_horizontal,
              e.image_prompt_vertical,
              s.meta_title, s.meta_description, s.canonical_path,
              vi.image_url AS vertical_image_url,
              vi.custom_prompt AS vertical_prompt,
              (
                SELECT COUNT(DISTINCT mt.tag_id)::int
                FROM myth_tags mt
                WHERE mt.myth_id = m.id
              ) AS tag_count,
              (
                SELECT COUNT(DISTINCT mk.keyword)::int
                FROM myth_keywords mk
                WHERE mk.myth_id = m.id
              ) AS keyword_count
       FROM myths m
       JOIN communities c ON c.id = m.community_id
       LEFT JOIN editorial_myths e ON e.source_myth_id = m.id
       LEFT JOIN seo_pages s ON s.page_type = 'myth' AND s.slug = m.slug
       LEFT JOIN vertical_images vi
         ON vi.entity_type = 'myth' AND vi.entity_id = m.id
       WHERE c.slug = 'nasa-paeces'
       ORDER BY m.slug`,
    );
    const communitySeoResult = await client.query(
      `SELECT meta_title, meta_description, meta_keywords,
              og_title, og_description,
              twitter_title, twitter_description,
              canonical_path, summary, payload
       FROM seo_pages
       WHERE page_type = 'community' AND slug = 'nasa-paeces'
       LIMIT 1`,
    );
    const cumandayResult = await client.query(
      `SELECT m.category_path, m.focus_keywords_raw,
              c.slug AS community_slug,
              EXISTS (
                SELECT 1
                FROM myth_keywords mk
                WHERE mk.myth_id = m.id
                  AND mk.keyword = 'Nasa - Paeces'
              ) AS has_stale_nasa_keyword,
              EXISTS (
                SELECT 1
                FROM myth_keywords mk
                WHERE mk.myth_id = m.id
                  AND mk.keyword = 'Mestizo'
              ) AS has_mestizo_keyword
       FROM myths m
       JOIN communities c ON c.id = m.community_id
       WHERE m.slug = 'el-cacique-cumanday'
       LIMIT 1`,
    );

    const rowsBySlug = new Map(result.rows.map((row) => [row.slug, row]));
    const actualSlugs = [...rowsBySlug.keys()].sort();
    const missing = canonicalNasaSlugs.filter((slug) => !rowsBySlug.has(slug));
    const unexpected = actualSlugs.filter(
      (slug) => !canonicalNasaSlugs.includes(slug),
    );
    const issues = [];
    if (missing.length) issues.push({ type: "missing", slugs: missing });
    if (unexpected.length) {
      issues.push({ type: "unexpected", slugs: unexpected });
    }
    const communitySeo = communitySeoResult.rows[0];
    if (!communitySeo) {
      issues.push({ type: "community_seo_missing" });
    } else {
      for (const field of [
        "meta_title",
        "meta_description",
        "meta_keywords",
        "og_title",
        "og_description",
        "twitter_title",
        "twitter_description",
        "canonical_path",
        "summary",
      ]) {
        if (communitySeo[field] !== nasaCommunitySeo[field]) {
          issues.push({
            type: "community_seo_mismatch",
            field,
            actual: communitySeo[field],
            expected: nasaCommunitySeo[field],
          });
        }
      }
      if (JSON.stringify(communitySeo).toLowerCase().includes("cumanday")) {
        issues.push({ type: "community_seo_stale_cumanday" });
      }
    }
    const cumanday = cumandayResult.rows[0];
    if (
      !cumanday ||
      cumanday.community_slug !== "mestizo" ||
      cumanday.category_path !== "Andina > Caldas > Mestizo" ||
      String(cumanday.focus_keywords_raw || "").includes("Nasa - Paeces") ||
      cumanday.has_stale_nasa_keyword ||
      !cumanday.has_mestizo_keyword
    ) {
      issues.push({
        type: "cumanday_boundary",
        actual: cumanday || null,
      });
    }

    for (const slug of canonicalNasaSlugs) {
      const row = rowsBySlug.get(slug);
      if (!row) continue;
      if (row.category_path !== NASA_CATEGORY_PATH) {
        issues.push({
          type: "category",
          slug,
          actual: row.category_path,
        });
      }
      const ranges = {
        mito: [300, 650],
        historia: [220, 600],
        versiones: [170, 550],
        leccion: [8, 22],
        similitudes: [150, 450],
      };
      for (const [field, [min, max]] of Object.entries(ranges)) {
        const count = words(row[field]);
        if (count < min || count > max) {
          issues.push({ type: "word_count", slug, field, count, min, max });
        }
      }
      if (!row.editorial_id || !row.research_notes) {
        issues.push({ type: "editorial", slug });
      }
      const sources = [
        ...parseJson(row.key_sources_json, `${slug}:key_sources_json`),
        ...parseJson(row.sources_json, `${slug}:sources_json`),
      ];
      const sourceUrls = sources.map(({ url }) => url);
      if (
        sourceUrls.length < 5 ||
        new Set(sourceUrls).size !== sourceUrls.length
      ) {
        issues.push({ type: "sources", slug, count: sourceUrls.length });
      }
      if (Number(row.tag_count) < 3 || Number(row.keyword_count) < 5) {
        issues.push({
          type: "taxonomy_or_keywords",
          slug,
          tags: Number(row.tag_count),
          keywords: Number(row.keyword_count),
        });
      }
      if (
        !row.meta_title ||
        !row.meta_description ||
        row.canonical_path !== `/mitos/${slug}`
      ) {
        issues.push({ type: "seo", slug });
      }
      const media = nasaMedia[slug];
      if (
        !media ||
        row.image_url !== media.horizontal ||
        row.vertical_image_url !== media.vertical ||
        media.horizontal === media.vertical
      ) {
        issues.push({
          type: "media",
          slug,
          horizontal: row.image_url,
          vertical: row.vertical_image_url,
        });
      }
      if (slug === "juan-tama") {
        if (
          !row.image_prompt_horizontal ||
          !row.image_prompt_vertical ||
          row.image_prompt_horizontal === row.image_prompt_vertical ||
          row.vertical_prompt !== row.image_prompt_vertical
        ) {
          issues.push({ type: "juan_tama_prompts", slug });
        }
      }
    }

    const summary = {
      expected: canonicalNasaSlugs.length,
      actual: actualSlugs.length,
      editorialDossiers: result.rows.filter(({ editorial_id }) => editorial_id)
        .length,
      horizontalImages: result.rows.filter(({ image_url }) => image_url).length,
      verticalImages: result.rows.filter(
        ({ vertical_image_url }) => vertical_image_url,
      ).length,
      communitySeo: Boolean(communitySeo),
      cumandayBoundary: Boolean(cumanday),
      missing,
      unexpected,
      issues,
      status: issues.length ? "fail" : "pass",
    };
    console.log(JSON.stringify(summary, null, 2));
    if (issues.length) {
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
