import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

import dotenv from "dotenv";
import pg from "pg";

import {
  huitotoCommunitySeo,
  huitotoCommunitySeoPayload,
} from "../../editorial/huitoto/community.mjs";
import { canonicalHuitotoSlugs } from "../../editorial/huitoto/universe.mjs";
import {
  yucunaCommunityImageUrl,
  yucunaCommunityPage,
  yucunaCommunitySeo,
  yucunaCommunitySeoPayload,
} from "../../editorial/yucuna/community.mjs";
import records from "../../editorial/yucuna/records.mjs";
import {
  canonicalYucunaSlugs,
  inheritedYucunaSlugs,
  reviewedYucunaWorklistSlugs,
  transferredYucunaSlugs,
} from "../../editorial/yucuna/universe.mjs";

const { Client } = pg;
const confirmationPhrase = "sync-yucuna-4-reviewed-routes";
const provenancePath = path.resolve("editorial", "yucuna", "provenance.json");
const verticalBasePrompt =
  "Segunda escena vertical 9:16 de un ciclo amazónico como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.";

function parseArgs(argv) {
  const options = {
    envFile: ".env",
    apply: false,
    confirmation: "",
    preflight: false,
  };
  for (const arg of argv) {
    if (arg === "--apply") options.apply = true;
    else if (arg === "--preflight") options.preflight = true;
    else if (arg.startsWith("--confirm=")) {
      options.confirmation = arg.slice("--confirm=".length);
    } else if (arg.startsWith("--env=")) {
      options.envFile = arg.slice("--env=".length);
    } else throw new Error(`Argumento no reconocido: ${arg}`);
  }
  if (options.apply && options.preflight) {
    throw new Error("--preflight nunca puede combinarse con --apply.");
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

function sameSet(actual, expected) {
  return (
    JSON.stringify([...actual].sort()) === JSON.stringify([...expected].sort())
  );
}

async function readProvenance(required) {
  try {
    return JSON.parse(await fs.readFile(provenancePath, "utf8"));
  } catch (error) {
    if (!required && error?.code === "ENOENT") return null;
    throw error;
  }
}

function validateRecords(provenance, { allowPendingMedia = false } = {}) {
  const ranges = {
    mito: [300, 650],
    historia: [220, 600],
    versiones: [170, 550],
    leccion: [8, 22],
    similitudes: [80, 450],
  };
  if (records.length !== 4) {
    throw new Error("Se esperaban cuatro expedientes en el frente Yucuna.");
  }
  if (!sameSet(records.map(({ slug }) => slug), reviewedYucunaWorklistSlugs)) {
    throw new Error("Los expedientes no cubren la lista de trabajo Yucuna.");
  }
  if (!allowPendingMedia) {
    if (
      provenance?.provider !== "openai" ||
      provenance?.model !== "gpt-image-2" ||
      provenance?.quality !== "high" ||
      provenance?.visualQa?.status !== "approved" ||
      provenance?.visualQa?.finalImages !== 8 ||
      Object.keys(provenance?.items || {}).length !== 8
    ) {
      throw new Error("La procedencia visual Yucuna no está completa y aprobada.");
    }
  }

  const imageUrls = new Set();
  for (const record of records) {
    for (const [field, [min, max]] of Object.entries(ranges)) {
      const count = words(record[field]);
      if (count < min || count > max) {
        throw new Error(
          `${record.slug}: ${field} tiene ${count} palabras; se esperaban ${min}-${max}.`,
        );
      }
    }
    if (record.tags.length !== 4 || record.focus_keywords.length !== 5) {
      throw new Error(`${record.slug}: taxonomía o palabras clave inválidas.`);
    }
    // Antes fijaba nueve fuentes —siete para la ficha transferida—: el reparto
    // en bloque escrito como aserción. Ahora cada ficha cita lo que usó, así
    // que lo que se exige es el mínimo y que no haya URLs repetidas.
    const sources = [...record.keySources, ...record.sources];
    if (
      sources.length < 5 ||
      new Set(sources.map(({ url }) => url)).size !== sources.length
    ) {
      throw new Error(
        `${record.slug}: ${sources.length} fuentes, y el mínimo son cinco únicas.`,
      );
    }
    if (allowPendingMedia) {
      if (
        record.image_url !== `pending://yucuna/${record.slug}/horizontal` ||
        record.vertical_image_url !==
          `pending://yucuna/${record.slug}/vertical`
      ) {
        throw new Error(`${record.slug}: inventario visual pendiente inesperado.`);
      }
      continue;
    }
    if (
      !/^https:\/\//.test(record.image_url) ||
      !/^https:\/\//.test(record.vertical_image_url) ||
      record.image_url === record.vertical_image_url ||
      imageUrls.has(record.image_url) ||
      imageUrls.has(record.vertical_image_url)
    ) {
      throw new Error(`${record.slug}: pareja visual inválida o reutilizada.`);
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
        item.sourceUrls.length !== expectedSources ||
        new Set(item.sourceUrls).size !== expectedSources
      ) {
        throw new Error(
          `${record.slug}:${orientation}: procedencia visual inválida.`,
        );
      }
    }
  }
}

function connectionString() {
  return (
    process.env.POSTGRES_URL_NON_POOLING ||
    process.env.DATABASE_URL_UNPOOLED ||
    process.env.POSTGRES_URL ||
    process.env.DATABASE_URL
  );
}

async function saveBackup(client, communities, mythRows) {
  const mythIds = mythRows.map(({ id }) => id);
  const slugs = mythRows.map(({ slug }) => slug);
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
      [mythIds],
    ),
    client.query(
      "SELECT * FROM vertical_images WHERE entity_type = 'myth' AND entity_id = ANY($1::int[]) ORDER BY entity_id, id",
      [mythIds],
    ),
    client.query(
      `SELECT * FROM seo_pages
       WHERE (page_type = 'myth' AND slug = ANY($1::text[]))
          OR (page_type = 'community' AND slug IN ('yucuna', 'huitotos'))
          OR (page_type = 'page' AND slug = 'metodologia')
       ORDER BY page_type, slug`,
      [slugs],
    ),
    client.query(
      "SELECT * FROM myth_tags WHERE myth_id = ANY($1::int[]) ORDER BY myth_id, tag_id",
      [mythIds],
    ),
    client.query(
      `SELECT emt.*
       FROM editorial_myth_tags emt
       JOIN editorial_myths em ON em.id = emt.editorial_myth_id
       WHERE em.source_myth_id = ANY($1::int[])
       ORDER BY emt.editorial_myth_id, emt.tag_id`,
      [mythIds],
    ),
    client.query(
      "SELECT * FROM myth_keywords WHERE myth_id = ANY($1::int[]) ORDER BY myth_id, keyword",
      [mythIds],
    ),
    client.query(
      `SELECT emk.*
       FROM editorial_myth_keywords emk
       JOIN editorial_myths em ON em.id = emk.editorial_myth_id
       WHERE em.source_myth_id = ANY($1::int[])
       ORDER BY emk.editorial_myth_id, emk.keyword`,
      [mythIds],
    ),
  ]);
  const directory = path.resolve("artifacts", "editorial-backups");
  await fs.mkdir(directory, { recursive: true });
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const backupPath = path.join(directory, `yucuna-review-${timestamp}.json`);
  await fs.writeFile(
    backupPath,
    `${JSON.stringify(
      {
        createdAt: new Date().toISOString(),
        communities,
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

async function updateMyth(client, current, record, taxonomy) {
  const result = await client.query(
    `UPDATE myths
     SET title = $2, region_id = $3, community_id = $4,
         category_path = $5, tags_raw = $6,
         mito = $7, historia = $8, versiones = $9, leccion = $10,
         similitudes = $11, content = $12, excerpt = $13,
         seo_title = $14, seo_description = $15,
         focus_keyword = $16, focus_keywords_raw = $17,
         image_prompt = $18, image_url = $19,
         latitude = $20, longitude = $21,
         content_formatted = TRUE, updated_at = NOW()
     WHERE id = $1
     RETURNING *`,
    [
      current.id,
      record.title,
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
  await client.query("DELETE FROM myth_keywords WHERE myth_id = $1", [mythId]);
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

async function syncVertical(client, myth, record) {
  const current = await client.query(
    `SELECT id
     FROM vertical_images
     WHERE entity_type = 'myth' AND entity_id = $1
     ORDER BY id`,
    [myth.id],
  );
  if (current.rowCount > 1) {
    throw new Error(`${record.slug}: hay más de una fila vertical.`);
  }
  const values = [
    record.title,
    record.slug,
    verticalBasePrompt,
    record.image_prompt_vertical,
    record.vertical_image_url,
  ];
  if (current.rowCount) {
    await client.query(
      `UPDATE vertical_images
       SET entity_name = $2, entity_slug = $3, base_prompt = $4,
           custom_prompt = $5, image_url = $6, updated_at = NOW()
       WHERE id = $1`,
      [current.rows[0].id, ...values],
    );
  } else {
    await client.query(
      `INSERT INTO vertical_images (
         entity_type, entity_id, entity_name, entity_slug,
         base_prompt, custom_prompt, image_url
       )
       VALUES ('myth', $1, $2, $3, $4, $5, $6)`,
      [myth.id, ...values],
    );
  }
}

function taxonomyFor(record, yucuna, huitoto) {
  const community =
    record.editorial_scope === "abundance-transfer" ? huitoto : yucuna;
  return {
    regionId: Number(community.region_id),
    communityId: Number(community.id),
  };
}

async function run() {
  const options = parseArgs(process.argv.slice(2));
  const provenance = await readProvenance(!options.preflight);
  validateRecords(provenance, { allowPendingMedia: options.preflight });
  if (options.apply && options.confirmation !== confirmationPhrase) {
    throw new Error(`Para aplicar usa --confirm=${confirmationPhrase}.`);
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
       WHERE c.slug IN ('yucuna', 'huitotos')
       ORDER BY c.slug`,
    );
    if (communityResult.rowCount !== 2) {
      throw new Error("Deben existir exactamente las comunidades Yucuna y Huitoto.");
    }
    const communitiesBySlug = new Map(
      communityResult.rows.map((row) => [row.slug, row]),
    );
    const yucuna = communitiesBySlug.get("yucuna");
    const huitoto = communitiesBySlug.get("huitotos");
    if (!yucuna || !huitoto) {
      throw new Error("No se pudieron resolver ambas comunidades.");
    }

    const scopedMythsResult = await client.query(
      `SELECT *
       FROM myths
       WHERE community_id = ANY($1::int[])
       ORDER BY community_id, source_row, slug`,
      [[Number(yucuna.id), Number(huitoto.id)]],
    );
    const yucunaRows = scopedMythsResult.rows.filter(
      ({ community_id: id }) => Number(id) === Number(yucuna.id),
    );
    const huitotoRows = scopedMythsResult.rows.filter(
      ({ community_id: id }) => Number(id) === Number(huitoto.id),
    );
    const yucunaCurrentSlugs = yucunaRows.map(({ slug }) => slug);
    const huitotoCurrentSlugs = huitotoRows.map(({ slug }) => slug);
    const huitotoCanonicalWithTransfer = [
      ...canonicalHuitotoSlugs,
      ...transferredYucunaSlugs,
    ];
    if (
      !sameSet(yucunaCurrentSlugs, inheritedYucunaSlugs) &&
      !sameSet(yucunaCurrentSlugs, canonicalYucunaSlugs)
    ) {
      throw new Error(
        `El universo Yucuna no es heredado ni canónico: ${yucunaCurrentSlugs.join(", ")}.`,
      );
    }
    if (
      !sameSet(huitotoCurrentSlugs, canonicalHuitotoSlugs) &&
      !sameSet(huitotoCurrentSlugs, huitotoCanonicalWithTransfer)
    ) {
      throw new Error(
        `El universo Huitoto no es base ni transferido: ${huitotoCurrentSlugs.join(", ")}.`,
      );
    }
    const worklistRows = scopedMythsResult.rows.filter(({ slug }) =>
      reviewedYucunaWorklistSlugs.includes(slug),
    );
    const currentBySlug = new Map(
      worklistRows.map((row) => [row.slug, row]),
    );
    if (!currentBySlug.has("el-origen-de-las-frutas")) {
      throw new Error(
        "La transferencia debe conservar la ruta existente el-origen-de-las-frutas.",
      );
    }

    const tagNames = [...new Set(records.flatMap(({ tags }) => tags))];
    const resolvedTags = [];
    for (const name of tagNames) {
      resolvedTags.push(await resolveTag(client, name));
    }
    const missingTags = resolvedTags.filter(({ missing }) => missing);
    if (missingTags.length) {
      throw new Error(
        `La metodología prohíbe crear etiquetas; faltan: ${missingTags.map(({ name }) => name).join(", ")}.`,
      );
    }

    let imageCollisions = { rows: [], rowCount: 0 };
    if (!options.preflight) {
      const imageUrls = records.flatMap((record) => [
        record.image_url,
        record.vertical_image_url,
      ]);
      const targetIds = worklistRows.map(({ id }) => Number(id));
      imageCollisions = await client.query(
        `SELECT 'horizontal' AS orientation, m.slug, m.image_url AS image_url
         FROM myths m
         WHERE NOT (m.id = ANY($1::int[])) AND m.image_url = ANY($2::text[])
         UNION ALL
         SELECT 'vertical' AS orientation, m.slug, vi.image_url AS image_url
         FROM vertical_images vi
         JOIN myths m
           ON vi.entity_type = 'myth' AND vi.entity_id = m.id
         WHERE NOT (m.id = ANY($1::int[])) AND vi.image_url = ANY($2::text[])`,
        [targetIds, imageUrls],
      );
      if (imageCollisions.rowCount) {
        throw new Error(
          `Hay imágenes reutilizadas fuera del frente: ${JSON.stringify(imageCollisions.rows)}.`,
        );
      }
    }

    console.log(
      JSON.stringify(
        {
          mode: options.apply
            ? "apply"
            : options.preflight
              ? "preflight"
              : "dry-run",
          communities: {
            yucuna: {
              id: Number(yucuna.id),
              before: yucuna.name,
              after: yucunaCommunityPage.title,
            },
            huitoto: {
              id: Number(huitoto.id),
              name: huitoto.name,
            },
          },
          universe: {
            yucuna: {
              current: yucunaCurrentSlugs.length,
              canonical: canonicalYucunaSlugs.length,
              toCreate: canonicalYucunaSlugs.filter(
                (slug) => !currentBySlug.has(slug),
              ),
              toUpdate: canonicalYucunaSlugs.filter((slug) =>
                currentBySlug.has(slug),
              ),
            },
            huitoto: {
              current: huitotoCurrentSlugs.length,
              canonicalAfterTransfer: huitotoCanonicalWithTransfer.length,
              transferredRoute: "el-origen-de-las-frutas",
            },
          },
          reviewedRoutes: records.length,
          imagePairs: options.preflight ? "pending-4" : 4,
          sourcesPerMyth: records.map(({ slug, keySources, sources }) => ({
            slug,
            count: keySources.length + sources.length,
          })),
          tags: {
            requested: tagNames.length,
            existing: resolvedTags.length,
            toCreate: [],
          },
          imageProvenance: provenance?.visualQa ?? {
            status: "pending",
            finalImages: 0,
          },
          externalImageCollisions: imageCollisions.rows,
        },
        null,
        2,
      ),
    );
    if (!options.apply) return;

    const backupPath = await saveBackup(
      client,
      communityResult.rows,
      scopedMythsResult.rows,
    );
    await client.query("BEGIN");
    try {
      await client.query("LOCK TABLE myths IN SHARE ROW EXCLUSIVE MODE");
      const tagsByRequestedName = new Map();
      for (const name of tagNames) {
        const tag = await resolveTag(client, name);
        if (tag.missing) {
          throw new Error(`Etiqueta desaparecida durante la transacción: ${name}.`);
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
      for (const record of records) {
        const current = currentBySlug.get(record.slug);
        const taxonomy = taxonomyFor(record, yucuna, huitoto);
        const myth = current
          ? await updateMyth(client, current, record, taxonomy)
          : await createMyth(client, record, taxonomy, nextSourceRow++);
        const editorialId = await upsertEditorial(client, myth, record);
        await syncRelations(
          client,
          Number(myth.id),
          editorialId,
          record,
          record.tags.map((name) => tagsByRequestedName.get(name)),
        );
        await syncVertical(client, myth, record);
        await upsertSeo(client, "myth", record.slug, record.seo);
        synced.push({
          slug: record.slug,
          action: current
            ? record.editorial_scope === "abundance-transfer"
              ? "updated-and-transferred"
              : "updated"
            : "created",
          mythId: Number(myth.id),
          editorialId,
          communityId: Number(myth.community_id),
        });
      }
      await client.query(
        `UPDATE communities
         SET name = $2, image_prompt = $3, image_url = $4
         WHERE id = $1`,
        [
          yucuna.id,
          yucunaCommunityPage.title,
          yucunaCommunityPage.imagePrompt,
          yucunaCommunityImageUrl,
        ],
      );
      await upsertSeo(client, "community", "yucuna", yucunaCommunitySeo, {
        summary: yucunaCommunitySeo.summary,
        payload: yucunaCommunitySeoPayload(),
      });
      await upsertSeo(client, "community", "huitotos", huitotoCommunitySeo, {
        summary: huitotoCommunitySeo.summary,
        payload: huitotoCommunitySeoPayload(),
      });
      await upsertSeo(
        client,
        "page",
        "metodologia",
        records[0].methodologySeo,
      );

      const finalUniverses = await client.query(
        `SELECT c.slug AS community_slug,
                array_agg(m.slug ORDER BY m.slug) AS myth_slugs
         FROM communities c
         JOIN myths m ON m.community_id = c.id
         WHERE c.id = ANY($1::int[])
         GROUP BY c.slug`,
        [[Number(yucuna.id), Number(huitoto.id)]],
      );
      const finalByCommunity = new Map(
        finalUniverses.rows.map((row) => [row.community_slug, row.myth_slugs]),
      );
      if (!sameSet(finalByCommunity.get("yucuna") || [], canonicalYucunaSlugs)) {
        throw new Error("La transacción no dejó el universo Yucuna canónico.");
      }
      if (
        !sameSet(
          finalByCommunity.get("huitotos") || [],
          huitotoCanonicalWithTransfer,
        )
      ) {
        throw new Error("La transacción no dejó el universo Huitoto ampliado.");
      }
      await client.query("COMMIT");
      console.log(
        JSON.stringify(
          {
            status: "applied",
            backupPath,
            synced,
            universes: { yucuna: 3, huitotos: 23 },
            tagsCreated: 0,
            imageProvenance: provenance.visualQa,
          },
          null,
          2,
        ),
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
