import path from "node:path";
import process from "node:process";

import dotenv from "dotenv";
import pg from "pg";

import {
  emberaCommunitySeo,
} from "../../editorial/embera/community.mjs";
import { emberaMedia } from "../../editorial/embera/media.mjs";
import burumia from "../../editorial/embera/myths/los-burumias-y-carautas.mjs";
import {
  EMBERA_CATEGORY_PATH,
  canonicalEmberaSlugs,
  emberaBoundaryMoves,
  sourceEmberaSlugs,
} from "../../editorial/embera/universe.mjs";

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

function compare(scope, field, actual, expected, issues) {
  if (stable(actual) !== stable(expected)) {
    issues.push({ scope, field, actual, expected });
  }
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
    const sourceResult = await client.query(
      `SELECT m.id, m.slug,
              r.slug AS region_slug,
              c.slug AS community_slug,
              m.category_path,
              e.id AS editorial_id,
              er.slug AS editorial_region_slug,
              ec.slug AS editorial_community_slug,
              e.category_path AS editorial_category_path
       FROM myths m
       JOIN regions r ON r.id = m.region_id
       JOIN communities c ON c.id = m.community_id
       LEFT JOIN editorial_myths e ON e.source_myth_id = m.id
       LEFT JOIN regions er ON er.id = e.region_id
       LEFT JOIN communities ec ON ec.id = e.community_id
       WHERE m.slug = ANY($1::text[])
       ORDER BY m.slug`,
      [sourceEmberaSlugs],
    );
    const emberaResult = await client.query(
      `SELECT m.id, m.slug
       FROM myths m
       JOIN communities c ON c.id = m.community_id
       WHERE c.slug = 'embera'
       ORDER BY m.slug`,
    );
    const burumiaResult = await client.query(
      `SELECT m.slug,
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
              e.key_sources_json,
              e.sources_json,
              e.research_notes,
              vertical.vertical_count,
              vertical.vertical_image_url,
              vertical.vertical_custom_prompt,
              s.meta_title,
              s.meta_description,
              s.meta_keywords,
              s.og_title,
              s.og_description,
              s.twitter_title,
              s.twitter_description,
              s.canonical_path
       FROM myths m
       LEFT JOIN editorial_myths e ON e.source_myth_id = m.id
       LEFT JOIN LATERAL (
         SELECT COUNT(*)::int AS vertical_count,
                MAX(vi.image_url) AS vertical_image_url,
                MAX(vi.custom_prompt) AS vertical_custom_prompt
         FROM vertical_images vi
         WHERE vi.entity_type = 'myth' AND vi.entity_id = m.id
       ) vertical ON TRUE
       LEFT JOIN seo_pages s
         ON s.page_type = 'myth' AND s.slug = m.slug
       WHERE m.slug = $1
       LIMIT 1`,
      [burumia.slug],
    );
    const communitySeoResult = await client.query(
      `SELECT meta_title, meta_description, meta_keywords,
              og_title, og_description,
              twitter_title, twitter_description,
              canonical_path, summary
       FROM seo_pages
       WHERE page_type = 'community' AND slug = 'embera'
       LIMIT 1`,
    );

    const issues = [];
    const sourceBySlug = new Map(
      sourceResult.rows.map((row) => [row.slug, row]),
    );
    compare(
      "universe",
      "source_count",
      sourceResult.rowCount,
      sourceEmberaSlugs.length,
      issues,
    );
    compare(
      "community",
      "canonical_slugs",
      emberaResult.rows.map(({ slug }) => slug),
      canonicalEmberaSlugs,
      issues,
    );

    for (const slug of canonicalEmberaSlugs) {
      const row = sourceBySlug.get(slug);
      if (!row) continue;
      compare(slug, "region_slug", row.region_slug, "pacifico", issues);
      compare(slug, "community_slug", row.community_slug, "embera", issues);
      compare(slug, "category_path", row.category_path, EMBERA_CATEGORY_PATH, issues);
    }

    for (const [slug, move] of Object.entries(emberaBoundaryMoves)) {
      const row = sourceBySlug.get(slug);
      if (!row) {
        issues.push({ scope: slug, field: "missing" });
        continue;
      }
      compare(slug, "region_slug", row.region_slug, move.targetRegion, issues);
      compare(
        slug,
        "community_slug",
        row.community_slug,
        move.targetCommunity,
        issues,
      );
      compare(
        slug,
        "category_path",
        row.category_path,
        move.targetCategoryPath,
        issues,
      );
      if (row.editorial_id) {
        compare(
          slug,
          "editorial_region_slug",
          row.editorial_region_slug,
          move.targetRegion,
          issues,
        );
        compare(
          slug,
          "editorial_community_slug",
          row.editorial_community_slug,
          move.targetCommunity,
          issues,
        );
        compare(
          slug,
          "editorial_category_path",
          row.editorial_category_path,
          move.targetCategoryPath,
          issues,
        );
      }
    }

    const row = burumiaResult.rows[0];
    if (!row) {
      issues.push({ scope: burumia.slug, field: "missing" });
    } else {
      const expected = expectedEditorial(burumia);
      compare(
        burumia.slug,
        "myths",
        actualEditorial(row, "myth"),
        expected,
        issues,
      );
      compare(
        burumia.slug,
        "editorial_myths",
        actualEditorial(row, "editorial"),
        expected,
        issues,
      );
      compare(
        burumia.slug,
        "image_prompt_horizontal",
        row.image_prompt_horizontal,
        burumia.image_prompt_horizontal,
        issues,
      );
      compare(
        burumia.slug,
        "image_prompt_vertical",
        row.image_prompt_vertical,
        burumia.image_prompt_vertical,
        issues,
      );
      compare(
        burumia.slug,
        "vertical_count",
        Number(row.vertical_count),
        1,
        issues,
      );
      compare(
        burumia.slug,
        "vertical_image_url",
        row.vertical_image_url,
        emberaMedia[burumia.slug].vertical,
        issues,
      );
      compare(
        burumia.slug,
        "vertical_custom_prompt",
        row.vertical_custom_prompt,
        burumia.image_prompt_vertical,
        issues,
      );
      compare(
        burumia.slug,
        "key_sources_json",
        parseJson(row.key_sources_json),
        burumia.keySources,
        issues,
      );
      compare(
        burumia.slug,
        "sources_json",
        parseJson(row.sources_json),
        burumia.sources,
        issues,
      );
      compare(
        burumia.slug,
        "research_notes",
        row.research_notes,
        burumia.researchNotes,
        issues,
      );
      compare(
        burumia.slug,
        "seo",
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
        burumia.seo,
        issues,
      );
    }

    const communitySeo = communitySeoResult.rows[0];
    if (!communitySeo) {
      issues.push({ scope: "community", field: "seo_missing" });
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
        compare(
          "community",
          field,
          communitySeo[field],
          emberaCommunitySeo[field],
          issues,
        );
      }
    }

    const summary = {
      sourceUniverse: sourceEmberaSlugs.length,
      canonicalEmbera: canonicalEmberaSlugs.length,
      movedToChami: Object.values(emberaBoundaryMoves).filter(
        ({ targetCommunity }) => targetCommunity === "chami",
      ).length,
      movedToKatios: Object.values(emberaBoundaryMoves).filter(
        ({ targetCommunity }) => targetCommunity === "katios",
      ).length,
      movedToMestizo: Object.values(emberaBoundaryMoves).filter(
        ({ targetCommunity }) => targetCommunity === "mestizo",
      ).length,
      editorialTaxonomiesChecked: sourceResult.rows.filter(
        ({ editorial_id }) => editorial_id,
      ).length,
      burumiaHorizontal: row?.myth_image_url || null,
      burumiaVertical: row?.vertical_image_url || null,
      issueCount: issues.length,
      issues,
    };
    console.log(JSON.stringify(summary, null, 2));
    if (issues.length) {
      throw new Error("La auditoría Emberá encontró desincronizaciones.");
    }
  } finally {
    await client.end();
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
