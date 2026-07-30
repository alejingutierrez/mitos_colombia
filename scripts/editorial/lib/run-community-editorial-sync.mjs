import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

import dotenv from "dotenv";
import pg from "pg";

const { Client } = pg;

function parseArgs(argv) {
  const options = { envFile: ".env", apply: false, confirmation: "" };
  for (const arg of argv) {
    if (arg === "--apply") options.apply = true;
    else if (arg.startsWith("--confirm=")) {
      options.confirmation = arg.slice("--confirm=".length);
    } else if (arg.startsWith("--env=")) {
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

function slugify(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function digest(value) {
  return createHash("sha256").update(value).digest("hex");
}

function sameSet(left, right) {
  return (
    JSON.stringify([...left].sort()) === JSON.stringify([...right].sort())
  );
}

function connectionString() {
  return (
    process.env.POSTGRES_URL_NON_POOLING ||
    process.env.DATABASE_URL_UNPOOLED ||
    process.env.POSTGRES_URL ||
    process.env.DATABASE_URL
  );
}

function assertConfig(config) {
  for (const key of [
    "communitySlug",
    "confirmationPhrase",
    "provenancePath",
    "verticalBasePrompt",
  ]) {
    if (!String(config[key] || "").trim()) {
      throw new Error(`Falta configuración de sincronización: ${key}.`);
    }
  }
  for (const key of ["records", "inheritedSlugs", "canonicalSlugs"]) {
    if (!Array.isArray(config[key]) || !config[key].length) {
      throw new Error(`Falta configuración de sincronización: ${key}.`);
    }
  }
  if (config.records.length !== config.canonicalSlugs.length) {
    throw new Error("Expedientes y universo canónico no coinciden.");
  }
}

function validateRecords(config, provenance, requireVisuals) {
  const ranges = {
    mito: [300, 650],
    historia: [220, 600],
    versiones: [170, 550],
    leccion: [8, 22],
    similitudes: [80, 450],
  };
  const expectedImages = config.records.length * 2;
  if (requireVisuals) {
    if (
      provenance?.provider !== "openai" ||
      provenance?.model !== "gpt-image-2" ||
      provenance?.quality !== "high" ||
      provenance?.visualQa?.status !== "approved" ||
      provenance?.visualQa?.finalImages !== expectedImages ||
      Object.keys(provenance?.items || {}).length !== expectedImages
    ) {
      throw new Error(
        `La procedencia visual ${config.communitySlug} no está completa y aprobada.`,
      );
    }
  }
  const imageUrls = new Set();
  for (const record of config.records) {
    for (const [field, [min, max]] of Object.entries(ranges)) {
      const count = words(record[field]);
      if (count < min || count > max) {
        throw new Error(
          `${record.slug}: ${field} tiene ${count} palabras; ` +
            `se esperaban ${min}-${max}.`,
        );
      }
    }
    if (record.tags.length !== 4 || record.focus_keywords.length !== 5) {
      throw new Error(`${record.slug}: taxonomía o palabras clave inválidas.`);
    }
    const sources = [...record.keySources, ...record.sources];
    const expectedSources = Number(config.expectedSourceCount || 0);
    if (
      sources.length < 5 ||
      (expectedSources > 0 && sources.length !== expectedSources) ||
      new Set(sources.map(({ url }) => url)).size !== sources.length
    ) {
      throw new Error(`${record.slug}: fuentes incompletas o duplicadas.`);
    }
    if (!requireVisuals) continue;
    if (
      !/^https:\/\//.test(record.image_url) ||
      !/^https:\/\//.test(record.vertical_image_url) ||
      record.image_url === record.vertical_image_url
    ) {
      throw new Error(`${record.slug}: pareja visual inválida.`);
    }
    if (
      imageUrls.has(record.image_url) ||
      imageUrls.has(record.vertical_image_url)
    ) {
      throw new Error(`${record.slug}: URL visual reutilizada en el lote.`);
    }
    imageUrls.add(record.image_url);
    imageUrls.add(record.vertical_image_url);
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
      if (
        !item ||
        item.provider !== "openai" ||
        item.model !== "gpt-image-2" ||
        item.quality !== "high" ||
        item.visualQa !== "approved" ||
        !item.visualReviewNote ||
        item.editorialPrompt !== prompt ||
        item.editorialPromptSha256 !== digest(prompt) ||
        item.generationPromptSha256 !== digest(item.generationPrompt) ||
        item.url !== url ||
        item.sourceUrls.length !== sources.length ||
        new Set(item.sourceUrls).size !== sources.length
      ) {
        throw new Error(
          `${record.slug}:${orientation}: procedencia visual inválida.`,
        );
      }
    }
  }
}

async function readProvenance(config) {
  try {
    return JSON.parse(
      await fs.readFile(path.resolve(config.provenancePath), "utf8"),
    );
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
    return null;
  }
}

async function saveBackup(client, config, community, mythRows) {
  const mythIds = mythRows.map(({ id }) => id);
  const slugs = [
    ...new Set([
      ...mythRows.map(({ slug }) => slug),
      ...config.canonicalSlugs,
    ]),
  ];
  const safeIds = mythIds.length ? mythIds : [-1];
  const [
    editorial,
    vertical,
    seo,
    mythTags,
    editorialTags,
    mythKeywords,
    editorialKeywords,
  ] = await Promise.all([
    client.query(
      "SELECT * FROM editorial_myths WHERE source_myth_id = ANY($1::int[]) ORDER BY source_myth_id",
      [safeIds],
    ),
    client.query(
      "SELECT * FROM vertical_images WHERE entity_type = 'myth' AND entity_id = ANY($1::int[]) ORDER BY entity_id, id",
      [safeIds],
    ),
    client.query(
      `SELECT * FROM seo_pages
       WHERE (page_type = 'myth' AND slug = ANY($1::text[]))
          OR (page_type = 'community' AND slug = $2)
          OR (page_type = 'page' AND slug = 'metodologia')
       ORDER BY page_type, slug`,
      [slugs, config.communitySlug],
    ),
    client.query(
      "SELECT * FROM myth_tags WHERE myth_id = ANY($1::int[]) ORDER BY myth_id, tag_id",
      [safeIds],
    ),
    client.query(
      `SELECT emt.*
       FROM editorial_myth_tags emt
       JOIN editorial_myths em ON em.id = emt.editorial_myth_id
       WHERE em.source_myth_id = ANY($1::int[])
       ORDER BY emt.editorial_myth_id, emt.tag_id`,
      [safeIds],
    ),
    client.query(
      "SELECT * FROM myth_keywords WHERE myth_id = ANY($1::int[]) ORDER BY myth_id, keyword",
      [safeIds],
    ),
    client.query(
      `SELECT emk.*
       FROM editorial_myth_keywords emk
       JOIN editorial_myths em ON em.id = emk.editorial_myth_id
       WHERE em.source_myth_id = ANY($1::int[])
       ORDER BY emk.editorial_myth_id, emk.keyword`,
      [safeIds],
    ),
  ]);
  const directory = path.resolve("artifacts", "editorial-backups");
  await fs.mkdir(directory, { recursive: true });
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const backupPath = path.join(
    directory,
    `${config.communitySlug}-review-${timestamp}.json`,
  );
  await fs.writeFile(
    backupPath,
    `${JSON.stringify(
      {
        createdAt: new Date().toISOString(),
        community,
        myths: mythRows,
        editorial: editorial.rows,
        vertical: vertical.rows,
        seo: seo.rows,
        mythTags: mythTags.rows,
        editorialTags: editorialTags.rows,
        mythKeywords: mythKeywords.rows,
        editorialKeywords: editorialKeywords.rows,
      },
      null,
      2,
    )}\n`,
    "utf8",
  );
  return backupPath;
}

async function resolveTag(client, name) {
  const slug = slugify(name);
  const existing = await client.query(
    `SELECT id, name, slug
     FROM tags
     WHERE name = $1 OR slug = $2
     ORDER BY CASE WHEN name = $1 THEN 0 ELSE 1 END
     LIMIT 1`,
    [name, slug],
  );
  if (existing.rowCount) return existing.rows[0];
  return { id: null, name, slug, missing: true };
}

async function upsertSeo(client, pageType, slug, seo, extras = {}) {
  await client.query(
    `INSERT INTO seo_pages (
       page_type, slug, meta_title, meta_description, meta_keywords,
       og_title, og_description, twitter_title, twitter_description,
       canonical_path, summary, payload, updated_at
     )
     VALUES (
       $1, $2, $3, $4, $5,
       $6, $7, $8, $9,
       $10, $11, $12, NOW()
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
       summary = COALESCE(EXCLUDED.summary, seo_pages.summary),
       payload = COALESCE(EXCLUDED.payload, seo_pages.payload),
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
      extras.summary ?? null,
      extras.payload ? JSON.stringify(extras.payload) : null,
    ],
  );
}

async function createMyth(client, record, taxonomy, sourceRow) {
  const result = await client.query(
    `INSERT INTO myths (
       title, slug, region_id, community_id, category_path, tags_raw,
       mito, historia, versiones, leccion, similitudes, content, excerpt,
       seo_title, seo_description, focus_keyword, focus_keywords_raw,
       image_prompt, image_url, latitude, longitude, content_formatted,
       source_row, updated_at
     )
     VALUES (
       $1, $2, $3, $4, $5, $6,
       $7, $8, $9, $10, $11, $12, $13,
       $14, $15, $16, $17,
       $18, $19, $20, $21, TRUE,
       $22, NOW()
     )
     RETURNING *`,
    [
      record.title,
      record.slug,
      taxonomy.regionId,
      taxonomy.communityId,
      record.category_path,
      record.tags.join(", "),
      record.mito,
      record.historia,
      record.versiones,
      record.leccion,
      record.similitudes,
      record.content,
      record.excerpt,
      record.seo_title,
      record.seo_description,
      record.focus_keyword,
      record.focus_keywords.join("|"),
      record.image_prompt_horizontal,
      record.image_url,
      record.latitude,
      record.longitude,
      sourceRow,
    ],
  );
  return result.rows[0];
}

async function updateMyth(client, current, record) {
  const result = await client.query(
    `UPDATE myths
     SET title = $2, category_path = $3, tags_raw = $4,
         mito = $5, historia = $6, versiones = $7, leccion = $8,
         similitudes = $9, content = $10, excerpt = $11,
         seo_title = $12, seo_description = $13,
         focus_keyword = $14, focus_keywords_raw = $15,
         image_prompt = $16, image_url = $17,
         latitude = $18, longitude = $19,
         content_formatted = TRUE, updated_at = NOW()
     WHERE id = $1
     RETURNING *`,
    [
      current.id,
      record.title,
      record.category_path,
      record.tags.join(", "),
      record.mito,
      record.historia,
      record.versiones,
      record.leccion,
      record.similitudes,
      record.content,
      record.excerpt,
      record.seo_title,
      record.seo_description,
      record.focus_keyword,
      record.focus_keywords.join("|"),
      record.image_prompt_horizontal,
      record.image_url,
      record.latitude,
      record.longitude,
    ],
  );
  return result.rows[0];
}

async function upsertEditorial(client, myth, record) {
  const result = await client.query(
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
       title = EXCLUDED.title, slug = EXCLUDED.slug,
       region_id = EXCLUDED.region_id,
       community_id = EXCLUDED.community_id,
       category_path = EXCLUDED.category_path,
       tags_raw = EXCLUDED.tags_raw, mito = EXCLUDED.mito,
       historia = EXCLUDED.historia, versiones = EXCLUDED.versiones,
       leccion = EXCLUDED.leccion, similitudes = EXCLUDED.similitudes,
       content = EXCLUDED.content, excerpt = EXCLUDED.excerpt,
       seo_title = EXCLUDED.seo_title,
       seo_description = EXCLUDED.seo_description,
       focus_keyword = EXCLUDED.focus_keyword,
       focus_keywords_raw = EXCLUDED.focus_keywords_raw,
       image_prompt = EXCLUDED.image_prompt,
       image_prompt_horizontal = EXCLUDED.image_prompt_horizontal,
       image_prompt_vertical = EXCLUDED.image_prompt_vertical,
       image_url = EXCLUDED.image_url, latitude = EXCLUDED.latitude,
       longitude = EXCLUDED.longitude, content_formatted = TRUE,
       source_row = EXCLUDED.source_row,
       sources_json = EXCLUDED.sources_json,
       key_sources_json = EXCLUDED.key_sources_json,
       research_notes = EXCLUDED.research_notes, updated_at = NOW()
     RETURNING id`,
    [
      myth.id,
      record.title,
      record.slug,
      myth.region_id,
      myth.community_id,
      record.category_path,
      record.tags.join(", "),
      record.mito,
      record.historia,
      record.versiones,
      record.leccion,
      record.similitudes,
      record.content,
      record.excerpt,
      record.seo_title,
      record.seo_description,
      record.focus_keyword,
      record.focus_keywords.join("|"),
      record.image_prompt_horizontal,
      record.image_prompt_horizontal,
      record.image_prompt_vertical,
      record.image_url,
      record.latitude,
      record.longitude,
      myth.source_row,
      JSON.stringify(record.sources),
      JSON.stringify(record.keySources),
      record.researchNotes,
    ],
  );
  return Number(result.rows[0].id);
}

async function syncRelations(client, mythId, editorialId, record, tagIds) {
  await client.query("DELETE FROM myth_tags WHERE myth_id = $1", [mythId]);
  await client.query(
    `INSERT INTO myth_tags (myth_id, tag_id)
     SELECT $1, tag_id FROM unnest($2::int[]) AS tag_id`,
    [mythId, tagIds],
  );
  await client.query(
    "DELETE FROM editorial_myth_tags WHERE editorial_myth_id = $1",
    [editorialId],
  );
  await client.query(
    `INSERT INTO editorial_myth_tags (editorial_myth_id, tag_id)
     SELECT $1, tag_id FROM unnest($2::int[]) AS tag_id`,
    [editorialId, tagIds],
  );
  await client.query("DELETE FROM myth_keywords WHERE myth_id = $1", [
    mythId,
  ]);
  await client.query(
    `INSERT INTO myth_keywords (myth_id, keyword)
     SELECT $1, keyword FROM unnest($2::text[]) AS keyword`,
    [mythId, record.focus_keywords],
  );
  await client.query(
    "DELETE FROM editorial_myth_keywords WHERE editorial_myth_id = $1",
    [editorialId],
  );
  await client.query(
    `INSERT INTO editorial_myth_keywords (editorial_myth_id, keyword)
     SELECT $1, keyword FROM unnest($2::text[]) AS keyword`,
    [editorialId, record.focus_keywords],
  );
}

async function syncVertical(client, config, myth, record) {
  const current = await client.query(
    `SELECT id FROM vertical_images
     WHERE entity_type = 'myth' AND entity_id = $1
     ORDER BY id`,
    [myth.id],
  );
  if (current.rowCount > 1) {
    throw new Error(`${record.slug}: hay más de una fila vertical.`);
  }
  if (current.rowCount) {
    await client.query(
      `UPDATE vertical_images
       SET entity_name = $2, entity_slug = $3, base_prompt = $4,
           custom_prompt = $5, image_url = $6, updated_at = NOW()
       WHERE id = $1`,
      [
        current.rows[0].id,
        record.title,
        record.slug,
        config.verticalBasePrompt,
        record.image_prompt_vertical,
        record.vertical_image_url,
      ],
    );
  } else {
    await client.query(
      `INSERT INTO vertical_images (
         entity_type, entity_id, entity_name, entity_slug,
         base_prompt, custom_prompt, image_url
       )
       VALUES ('myth', $1, $2, $3, $4, $5, $6)`,
      [
        myth.id,
        record.title,
        record.slug,
        config.verticalBasePrompt,
        record.image_prompt_vertical,
        record.vertical_image_url,
      ],
    );
  }
}

export async function runCommunityEditorialSync(
  config,
  argv = process.argv.slice(2),
) {
  assertConfig(config);
  const options = parseArgs(argv);
  const provenance = await readProvenance(config);
  validateRecords(config, provenance, options.apply);
  if (options.apply && options.confirmation !== config.confirmationPhrase) {
    throw new Error(`Para aplicar usa --confirm=${config.confirmationPhrase}.`);
  }
  dotenv.config({ path: path.resolve(options.envFile), quiet: true });
  if (!connectionString()) throw new Error("No hay conexión Postgres.");
  const client = new Client({
    connectionString: connectionString(),
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();
  try {
    const communityResult = await client.query(
      `SELECT c.*, r.id AS region_id, r.name AS region_name
       FROM communities c
       JOIN regions r ON r.id = c.region_id
       WHERE c.slug = $1
       LIMIT 1`,
      [config.communitySlug],
    );
    if (communityResult.rowCount !== 1) {
      throw new Error(`No existe la comunidad ${config.communitySlug}.`);
    }
    const community = communityResult.rows[0];
    const mythResult = await client.query(
      "SELECT * FROM myths WHERE community_id = $1 ORDER BY source_row, slug",
      [community.id],
    );
    const currentSlugs = mythResult.rows.map(({ slug }) => slug).sort();
    if (
      !sameSet(currentSlugs, config.inheritedSlugs) &&
      !sameSet(currentSlugs, config.canonicalSlugs)
    ) {
      throw new Error(
        `El universo ${config.communitySlug} no es heredado ni canónico: ` +
          currentSlugs.join(", "),
      );
    }
    const currentBySlug = new Map(
      mythResult.rows.map((row) => [row.slug, row]),
    );
    const tagNames = [
      ...new Set(config.records.flatMap(({ tags }) => tags)),
    ];
    const resolvedTags = [];
    for (const name of tagNames) {
      resolvedTags.push(await resolveTag(client, name));
    }
    const missingTags = resolvedTags.filter(({ missing }) => missing);
    if (missingTags.length) {
      throw new Error(
        "La metodología prohíbe crear etiquetas; faltan: " +
          missingTags.map(({ name }) => name).join(", "),
      );
    }
    let imageCollisions = { rows: [], rowCount: 0 };
    if (options.apply) {
      const imageUrls = config.records.flatMap((record) => [
        record.image_url,
        record.vertical_image_url,
      ]);
      imageCollisions = await client.query(
        `SELECT 'horizontal' AS orientation, m.slug, m.image_url
         FROM myths m
         WHERE m.community_id <> $1 AND m.image_url = ANY($2::text[])
         UNION ALL
         SELECT 'vertical' AS orientation, m.slug, vi.image_url
         FROM vertical_images vi
         JOIN myths m
           ON vi.entity_type = 'myth' AND vi.entity_id = m.id
         WHERE m.community_id <> $1 AND vi.image_url = ANY($2::text[])`,
        [community.id, imageUrls],
      );
      if (imageCollisions.rowCount) {
        throw new Error(
          `Hay imágenes reutilizadas fuera de ${config.communitySlug}: ` +
            JSON.stringify(imageCollisions.rows),
        );
      }
    }
    const summary = {
      mode: options.apply ? "apply" : "dry-run",
      community: {
        id: Number(community.id),
        before: community.name,
        after: config.communityPage.title,
      },
      universe: {
        current: currentSlugs.length,
        inherited: config.inheritedSlugs.length,
        canonical: config.canonicalSlugs.length,
        toCreate: config.canonicalSlugs.filter(
          (slug) => !currentBySlug.has(slug),
        ),
        toUpdate: config.canonicalSlugs.filter((slug) =>
          currentBySlug.has(slug),
        ).length,
        toDelete: [],
      },
      dossiers: config.records.length,
      imagePairs: config.records.length,
      sourcesPerMyth: Number(config.expectedSourceCount || 0),
      tags: {
        requested: tagNames.length,
        existing: tagNames.length,
        toCreate: [],
      },
      imageProvenance: provenance?.visualQa || { status: "pending" },
      externalImageCollisions: imageCollisions.rows,
    };
    console.log(JSON.stringify(summary, null, 2));
    if (!options.apply) return summary;

    const backupPath = await saveBackup(
      client,
      config,
      community,
      mythResult.rows,
    );
    await client.query("BEGIN");
    try {
      await client.query("LOCK TABLE myths IN SHARE ROW EXCLUSIVE MODE");
      const tagsByRequestedName = new Map();
      for (const name of tagNames) {
        const tag = await resolveTag(client, name);
        if (tag.missing) {
          throw new Error(`Etiqueta desaparecida: ${name}.`);
        }
        tagsByRequestedName.set(name, Number(tag.id));
      }
      let nextSourceRow = Number(
        (
          await client.query(
            "SELECT COALESCE(MAX(source_row), 0) + 1 AS next_source_row FROM myths",
          )
        ).rows[0].next_source_row,
      );
      const synced = [];
      for (const record of config.records) {
        const current = currentBySlug.get(record.slug);
        const myth = current
          ? await updateMyth(client, current, record)
          : await createMyth(
              client,
              record,
              {
                regionId: Number(community.region_id),
                communityId: Number(community.id),
              },
              nextSourceRow++,
            );
        const editorialId = await upsertEditorial(client, myth, record);
        await syncRelations(
          client,
          Number(myth.id),
          editorialId,
          record,
          record.tags.map((name) => tagsByRequestedName.get(name)),
        );
        await syncVertical(client, config, myth, record);
        await upsertSeo(client, "myth", record.slug, record.seo);
        synced.push({
          slug: record.slug,
          action: current ? "updated" : "created",
          mythId: Number(myth.id),
          editorialId,
        });
      }
      await client.query(
        `UPDATE communities
         SET name = $2, image_prompt = $3, image_url = $4
         WHERE id = $1`,
        [
          community.id,
          config.communityPage.title,
          config.communityPage.imagePrompt,
          config.communityImageUrl,
        ],
      );
      await upsertSeo(
        client,
        "community",
        config.communitySlug,
        config.communitySeo,
        {
          summary: config.communitySeo.summary,
          payload: config.communitySeoPayload(),
        },
      );
      await upsertSeo(
        client,
        "page",
        "metodologia",
        config.records[0].methodologySeo,
      );
      await client.query("COMMIT");
      const applied = {
        status: "applied",
        backupPath,
        synced,
        tagsCreated: 0,
        imageProvenance: provenance.visualQa,
      };
      console.log(JSON.stringify(applied, null, 2));
      return applied;
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    }
  } finally {
    await client.end();
  }
}
