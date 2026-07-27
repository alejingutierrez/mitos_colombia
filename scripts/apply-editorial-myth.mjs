import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { pathToFileURL } from "node:url";
import dotenv from "dotenv";
import pg from "pg";

const { Client } = pg;

function usage() {
  console.log(
    "Uso: node scripts/apply-editorial-myth.mjs <archivo.mjs> [--env=.env] [--apply]"
  );
}

function parseArgs(argv) {
  const options = {
    file: "",
    envFile: ".env",
    apply: false,
  };

  for (const arg of argv) {
    if (arg === "--apply") {
      options.apply = true;
    } else if (arg.startsWith("--env=")) {
      options.envFile = arg.slice("--env=".length);
    } else if (!arg.startsWith("-") && !options.file) {
      options.file = arg;
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

function assertRange(label, value, min, max) {
  const count = words(value);
  if (count < min || count > max) {
    throw new Error(`${label}: ${count} palabras; se esperaban ${min}-${max}.`);
  }
  return count;
}

function validateLesson(value) {
  const lesson = String(value || "").trim();
  const count = words(lesson);
  const terminalMarks = lesson.match(/[.!?…](?=\s|$)/g) || [];

  if (lesson.includes("\n")) {
    throw new Error("Lección debe ser una sola frase, sin párrafos.");
  }
  if (count < 8 || count > 22) {
    throw new Error(
      `Lección: ${count} palabras; se esperaban 8-22 para una frase breve.`,
    );
  }
  if (terminalMarks.length !== 1 || !/[.!?…]$/.test(lesson)) {
    throw new Error("Lección debe contener exactamente una oración completa.");
  }

  return count;
}

function validateSources(data) {
  const combined = [...(data.keySources || []), ...(data.sources || [])];
  if (combined.length < 5) {
    throw new Error("La metodología exige al menos cinco fuentes publicables.");
  }

  const urls = new Set();
  for (const source of combined) {
    if (!source?.title || !source?.summary || !source?.url) {
      throw new Error("Cada fuente requiere title, summary y url.");
    }
    const parsed = new URL(source.url);
    if (!["https:", "http:"].includes(parsed.protocol)) {
      throw new Error(`Protocolo de fuente no permitido: ${source.url}`);
    }
    if (urls.has(parsed.toString())) {
      throw new Error(`Fuente duplicada: ${source.url}`);
    }
    urls.add(parsed.toString());
  }

  return combined.length;
}

function validateSeo(label, seo) {
  const required = [
    "meta_title",
    "meta_description",
    "meta_keywords",
    "og_title",
    "og_description",
    "twitter_title",
    "twitter_description",
    "canonical_path",
  ];
  for (const field of required) {
    if (!String(seo?.[field] || "").trim()) {
      throw new Error(`${label}: falta ${field}.`);
    }
  }
  if (!String(seo.canonical_path).startsWith("/")) {
    throw new Error(`${label}: canonical_path debe comenzar con /.`);
  }
}

function validateTaxonomy(data) {
  if (!String(data.category_path || "").trim()) {
    throw new Error("Falta category_path.");
  }
  if (!Array.isArray(data.tags) || data.tags.length < 3) {
    throw new Error("tags debe contener al menos tres etiquetas existentes.");
  }
  const normalizedTags = data.tags.map((tag) => String(tag || "").trim());
  if (normalizedTags.some((tag) => !tag)) {
    throw new Error("tags no puede contener etiquetas vacías.");
  }
  if (new Set(normalizedTags).size !== normalizedTags.length) {
    throw new Error("tags contiene etiquetas duplicadas.");
  }
  return normalizedTags.length;
}

function validateCoordinates(data) {
  const latitude = Number(data.latitude);
  const longitude = Number(data.longitude);
  if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
    throw new Error("latitude y longitude deben ser números.");
  }
  if (latitude < -5 || latitude > 14 || longitude < -82 || longitude > -66) {
    throw new Error("Las coordenadas quedan fuera del territorio colombiano.");
  }
}

function validateImageUrl(data) {
  if (!data.image_url) {
    return;
  }
  const parsed = new URL(data.image_url);
  if (parsed.protocol !== "https:") {
    throw new Error("image_url debe usar HTTPS.");
  }
}

function validate(data) {
  const required = [
    "slug",
    "title",
    "mito",
    "historia",
    "versiones",
    "leccion",
    "similitudes",
    "content",
    "excerpt",
    "seo_title",
    "seo_description",
    "focus_keyword",
    "image_prompt",
    "researchNotes",
    "seo",
    "methodologySeo",
  ];
  for (const field of required) {
    if (!String(data[field] || "").trim()) {
      throw new Error(`Falta el campo obligatorio: ${field}`);
    }
  }

  const expectedContent = [
    ["Mito", data.mito],
    ["Historia", data.historia],
    ["Versiones", data.versiones],
    ["Lección", data.leccion],
    ["Similitudes", data.similitudes],
  ]
    .map(([heading, body]) => `${heading}\n${body}`)
    .join("\n\n");
  if (data.content !== expectedContent) {
    throw new Error("content no coincide con los cinco campos editoriales.");
  }

  if (!Array.isArray(data.focus_keywords) || data.focus_keywords.length < 5) {
    throw new Error("focus_keywords debe contener al menos cinco términos.");
  }

  const counts = {
    mito: assertRange("mito", data.mito, 300, 650),
    historia: assertRange("historia", data.historia, 220, 600),
    versiones: assertRange("versiones", data.versiones, 170, 550),
    leccion: validateLesson(data.leccion),
    similitudes: assertRange("similitudes", data.similitudes, 150, 450),
    sources: validateSources(data),
    tags: validateTaxonomy(data),
  };
  validateCoordinates(data);
  validateImageUrl(data);
  validateSeo("seo", data.seo);
  validateSeo("methodologySeo", data.methodologySeo);

  if (String(data.excerpt).length > 180) {
    throw new Error("excerpt supera 180 caracteres.");
  }
  if (String(data.seo_title).length > 60) {
    throw new Error("seo_title supera 60 caracteres.");
  }
  if (String(data.seo_description).length > 165) {
    throw new Error("seo_description supera 165 caracteres.");
  }

  return counts;
}

async function saveBackup(data, myth, editorial, seoEntries, mythTags) {
  const backupDir = path.resolve("artifacts", "editorial-backups");
  await fs.mkdir(backupDir, { recursive: true });
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const backupPath = path.join(backupDir, `${data.slug}-${timestamp}.json`);
  await fs.writeFile(
    backupPath,
    `${JSON.stringify({ myth, editorial, seoEntries, mythTags }, null, 2)}\n`,
    "utf8"
  );
  return backupPath;
}

async function run() {
  let options;
  try {
    options = parseArgs(process.argv.slice(2));
  } catch (error) {
    usage();
    throw error;
  }
  if (!options.file) {
    usage();
    process.exitCode = 1;
    return;
  }

  const modulePath = path.resolve(options.file);
  const { default: data } = await import(pathToFileURL(modulePath).href);
  const counts = validate(data);
  console.log(
    JSON.stringify(
      {
        mode: options.apply ? "apply" : "dry-run",
        slug: data.slug,
        title: data.title,
        counts,
        excerptCharacters: data.excerpt.length,
        seoTitleCharacters: data.seo_title.length,
        seoDescriptionCharacters: data.seo_description.length,
      },
      null,
      2
    )
  );

  dotenv.config({ path: path.resolve(options.envFile), quiet: true });
  const connectionString =
    process.env.POSTGRES_URL_NON_POOLING ||
    process.env.DATABASE_URL_UNPOOLED ||
    process.env.POSTGRES_URL ||
    process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error(
      `No se encontró una conexión Postgres en ${options.envFile}.`
    );
  }

  const client = new Client({
    connectionString,
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();

  try {
    const currentResult = await client.query(
      `SELECT m.*, r.name AS region, c.name AS community
       FROM myths m
       JOIN regions r ON r.id = m.region_id
       LEFT JOIN communities c ON c.id = m.community_id
       WHERE m.slug = $1
       LIMIT 1`,
      [data.slug]
    );
    const current = currentResult.rows[0];
    if (!current) {
      throw new Error(`No existe el mito con slug ${data.slug}.`);
    }

    const editorialResult = await client.query(
      `SELECT * FROM editorial_myths WHERE source_myth_id = $1 LIMIT 1`,
      [current.id]
    );
    const currentEditorial = editorialResult.rows[0] || null;
    const seoResult = await client.query(
      `SELECT *
       FROM seo_pages
       WHERE (page_type = 'myth' AND slug = $1)
          OR (page_type = 'page' AND slug = 'metodologia')
       ORDER BY page_type, slug`,
      [data.slug]
    );
    const currentSeoEntries = seoResult.rows;
    const currentTagResult = await client.query(
      `SELECT t.id, t.name, t.slug
       FROM tags t
       JOIN myth_tags mt ON mt.tag_id = t.id
       WHERE mt.myth_id = $1
       ORDER BY t.name`,
      [current.id]
    );
    const categoryResult = await client.query(
      `SELECT 1
       FROM myths
       WHERE category_path = $1
       LIMIT 1`,
      [data.category_path]
    );
    if (!categoryResult.rowCount) {
      throw new Error(
        `La categoría no existe y no se puede crear: ${data.category_path}`
      );
    }

    const tagResult = await client.query(
      `SELECT id, name, slug
       FROM tags
       WHERE name = ANY($1::text[])`,
      [data.tags]
    );
    const tagsByName = new Map(tagResult.rows.map((tag) => [tag.name, tag]));
    const missingTags = data.tags.filter((tag) => !tagsByName.has(tag));
    if (missingTags.length) {
      throw new Error(
        `Estas etiquetas no existen y no se pueden crear: ${missingTags.join(", ")}`
      );
    }
    const selectedTagIds = data.tags.map((tag) => tagsByName.get(tag).id);

    console.log(
      JSON.stringify(
        {
          target: {
            id: current.id,
            slug: current.slug,
            title: current.title,
            region: current.region,
            community: current.community,
          },
          before: {
            contentCharacters: String(current.content || "").length,
            mitoCharacters: String(current.mito || "").length,
            hasEditorialRecord: Boolean(currentEditorial),
            categoryPath: current.category_path,
            tags: currentTagResult.rows.map((tag) => tag.name),
            coordinates: [current.latitude, current.longitude],
            hasImage: Boolean(current.image_url),
          },
          after: {
            contentCharacters: data.content.length,
            mitoCharacters: data.mito.length,
            sourceCount: counts.sources,
            categoryPath: data.category_path,
            tags: data.tags,
            coordinates: [data.latitude, data.longitude],
            imageAction: data.image_url ? "replace" : "preserve",
            imageUrl: data.image_url || current.image_url || null,
          },
        },
        null,
        2
      )
    );

    if (!options.apply) {
      console.log("Dry-run correcto. Añade --apply para persistir el cambio.");
      return;
    }

    const backupPath = await saveBackup(
      data,
      current,
      currentEditorial,
      currentSeoEntries,
      currentTagResult.rows
    );
    await client.query("BEGIN");
    try {
      await client.query(
        `UPDATE myths
         SET title = $2,
             mito = $3,
             historia = $4,
             versiones = $5,
             leccion = $6,
             similitudes = $7,
             content = $8,
             excerpt = $9,
             seo_title = $10,
             seo_description = $11,
             focus_keyword = $12,
             focus_keywords_raw = $13,
             image_prompt = $14,
             category_path = $15,
             tags_raw = $16,
             latitude = $17,
             longitude = $18,
             image_url = $19,
             content_formatted = TRUE,
             updated_at = NOW()
         WHERE id = $1`,
        [
          current.id,
          data.title,
          data.mito,
          data.historia,
          data.versiones,
          data.leccion,
          data.similitudes,
          data.content,
          data.excerpt,
          data.seo_title,
          data.seo_description,
          data.focus_keyword,
          data.focus_keywords.join("|"),
          data.image_prompt,
          data.category_path,
          data.tags.join(", "),
          data.latitude,
          data.longitude,
          data.image_url || current.image_url || null,
        ]
      );

      const editorialUpsert = await client.query(
        `INSERT INTO editorial_myths (
           source_myth_id, title, slug, region_id, community_id,
           category_path, tags_raw, mito, historia, versiones, leccion,
           similitudes, content, excerpt, seo_title, seo_description,
           focus_keyword, focus_keywords_raw, image_prompt,
           image_prompt_horizontal, image_prompt_vertical, image_url,
           latitude, longitude, content_formatted, source_row,
           sources_json, key_sources_json, research_notes, updated_at
         )
         VALUES (
           $1, $2, $3, $4, $5,
           $6, $7, $8, $9, $10, $11,
           $12, $13, $14, $15, $16,
           $17, $18, $19,
           $20, $21, $22,
           $23, $24, TRUE, $25,
           $26, $27, $28, NOW()
         )
         ON CONFLICT (source_myth_id) DO UPDATE SET
           title = EXCLUDED.title,
           slug = EXCLUDED.slug,
           region_id = EXCLUDED.region_id,
           community_id = EXCLUDED.community_id,
           category_path = EXCLUDED.category_path,
           tags_raw = EXCLUDED.tags_raw,
           mito = EXCLUDED.mito,
           historia = EXCLUDED.historia,
           versiones = EXCLUDED.versiones,
           leccion = EXCLUDED.leccion,
           similitudes = EXCLUDED.similitudes,
           content = EXCLUDED.content,
           excerpt = EXCLUDED.excerpt,
           seo_title = EXCLUDED.seo_title,
           seo_description = EXCLUDED.seo_description,
           focus_keyword = EXCLUDED.focus_keyword,
           focus_keywords_raw = EXCLUDED.focus_keywords_raw,
           image_prompt = EXCLUDED.image_prompt,
           image_prompt_horizontal = EXCLUDED.image_prompt_horizontal,
           image_prompt_vertical = EXCLUDED.image_prompt_vertical,
           image_url = EXCLUDED.image_url,
           latitude = EXCLUDED.latitude,
           longitude = EXCLUDED.longitude,
           content_formatted = TRUE,
           source_row = EXCLUDED.source_row,
           sources_json = EXCLUDED.sources_json,
           key_sources_json = EXCLUDED.key_sources_json,
           research_notes = EXCLUDED.research_notes,
           updated_at = NOW()
         RETURNING id`,
        [
          current.id,
          data.title,
          current.slug,
          current.region_id,
          current.community_id,
          data.category_path,
          data.tags.join(", "),
          data.mito,
          data.historia,
          data.versiones,
          data.leccion,
          data.similitudes,
          data.content,
          data.excerpt,
          data.seo_title,
          data.seo_description,
          data.focus_keyword,
          data.focus_keywords.join("|"),
          data.image_prompt,
          data.image_prompt_horizontal || null,
          data.image_prompt_vertical || null,
          data.image_url || current.image_url || null,
          data.latitude,
          data.longitude,
          current.source_row,
          JSON.stringify(data.sources),
          JSON.stringify(data.keySources),
          data.researchNotes,
        ]
      );
      const editorialId = editorialUpsert.rows[0].id;

      await client.query("DELETE FROM myth_tags WHERE myth_id = $1", [
        current.id,
      ]);
      await client.query(
        `INSERT INTO myth_tags (myth_id, tag_id)
         SELECT $1, tag_id
         FROM unnest($2::int[]) AS tag_id`,
        [current.id, selectedTagIds]
      );

      await client.query("DELETE FROM myth_keywords WHERE myth_id = $1", [
        current.id,
      ]);
      await client.query(
        `INSERT INTO myth_keywords (myth_id, keyword)
         SELECT $1, keyword
         FROM unnest($2::text[]) AS keyword`,
        [current.id, data.focus_keywords]
      );

      await client.query(
        "DELETE FROM editorial_myth_keywords WHERE editorial_myth_id = $1",
        [editorialId]
      );
      await client.query(
        `INSERT INTO editorial_myth_keywords (editorial_myth_id, keyword)
         SELECT $1, keyword
         FROM unnest($2::text[]) AS keyword`,
        [editorialId, data.focus_keywords]
      );

      await client.query(
        "DELETE FROM editorial_myth_tags WHERE editorial_myth_id = $1",
        [editorialId]
      );
      await client.query(
        `INSERT INTO editorial_myth_tags (editorial_myth_id, tag_id)
         SELECT $1, tag_id FROM myth_tags WHERE myth_id = $2`,
        [editorialId, current.id]
      );

      const upsertSeo = async (pageType, slug, seo) => {
        await client.query(
          `INSERT INTO seo_pages (
             page_type, slug, meta_title, meta_description, meta_keywords,
             og_title, og_description, twitter_title, twitter_description,
             canonical_path, updated_at
           )
           VALUES (
             $1, $2, $3, $4, $5,
             $6, $7, $8, $9,
             $10, NOW()
           )
           ON CONFLICT (page_type, slug) DO UPDATE SET
             meta_title = EXCLUDED.meta_title,
             meta_description = EXCLUDED.meta_description,
             meta_keywords = EXCLUDED.meta_keywords,
             og_title = EXCLUDED.og_title,
             og_description = EXCLUDED.og_description,
             twitter_title = EXCLUDED.twitter_title,
             twitter_description = EXCLUDED.twitter_description,
             canonical_path = EXCLUDED.canonical_path,
             updated_at = NOW()`,
          [
            pageType,
            slug,
            seo.meta_title,
            seo.meta_description,
            seo.meta_keywords,
            seo.og_title,
            seo.og_description,
            seo.twitter_title,
            seo.twitter_description,
            seo.canonical_path,
          ]
        );
      };

      await upsertSeo("myth", data.slug, data.seo);
      await upsertSeo("page", "metodologia", data.methodologySeo);

      await client.query("COMMIT");
      console.log(
        JSON.stringify(
          {
            applied: true,
            mythId: current.id,
            editorialMythId: editorialId,
            backupPath,
          },
          null,
          2
        )
      );
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    }
  } finally {
    await client.end();
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
