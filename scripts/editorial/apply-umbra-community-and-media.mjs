import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

import dotenv from "dotenv";
import pg from "pg";

import {
  umbraCommunityPage,
  umbraCommunitySeo,
  umbraCommunitySeoPayload,
} from "../../editorial/umbra/community.mjs";
import { umbraMedia } from "../../editorial/umbra/media.mjs";
import { umbraMythsBySlug } from "../../editorial/umbra/records.mjs";
import { canonicalUmbraSlugs } from "../../editorial/umbra/universe.mjs";

const { Client } = pg;
const confirmationPhrase = "sync-umbra-community-seo-and-four-images";
const verticalBasePrompt =
  "Segunda escena vertical 9:16 de un relato Umbra como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.";

function parseArgs(argv) {
  const options = { envFile: ".env", apply: false, confirmation: "" };
  for (const arg of argv) {
    if (arg === "--apply") options.apply = true;
    else if (arg.startsWith("--confirm=")) {
      options.confirmation = arg.slice("--confirm=".length);
    } else if (arg.startsWith("--env=")) {
      options.envFile = arg.slice("--env=".length);
    } else throw new Error(`Argumento no reconocido: ${arg}`);
  }
  return options;
}

function validate() {
  for (const slug of canonicalUmbraSlugs) {
    const record = umbraMythsBySlug[slug];
    const media = umbraMedia[slug];
    if (
      !record ||
      !/^https:\/\//.test(media?.horizontal || "") ||
      !/^https:\/\//.test(media?.vertical || "") ||
      media.horizontal === media.vertical ||
      /pending\.invalid/.test(media.horizontal + media.vertical)
    ) {
      throw new Error(`${slug}: inventario visual inválido.`);
    }
  }
}

async function run() {
  const options = parseArgs(process.argv.slice(2));
  validate();
  if (options.apply && options.confirmation !== confirmationPhrase) {
    throw new Error(`Para aplicar usa --confirm=${confirmationPhrase}.`);
  }
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
    const community = await client.query(
      `SELECT * FROM communities WHERE slug = 'umbra' LIMIT 1`,
    );
    if (community.rowCount !== 1) {
      throw new Error("No existe la comunidad Umbra.");
    }
    const seo = await client.query(
      `SELECT * FROM seo_pages
       WHERE page_type = 'community' AND slug = 'umbra'
       LIMIT 1`,
    );
    const myths = await client.query(
      `SELECT m.id, m.slug, m.title, m.image_url, m.image_prompt,
              e.id AS editorial_id, e.image_url AS editorial_image_url,
              e.image_prompt_horizontal, e.image_prompt_vertical,
              v.id AS vertical_id, v.image_url AS vertical_image_url,
              v.base_prompt, v.custom_prompt
       FROM myths m
       LEFT JOIN editorial_myths e ON e.source_myth_id = m.id
       LEFT JOIN vertical_images v
         ON v.entity_type = 'myth' AND v.entity_id = m.id
       WHERE m.slug = ANY($1::text[])
       ORDER BY m.slug, v.id`,
      [canonicalUmbraSlugs],
    );
    if (myths.rowCount !== canonicalUmbraSlugs.length) {
      throw new Error(
        `Se esperaban ${canonicalUmbraSlugs.length} mitos y hay ${myths.rowCount}.`,
      );
    }
    for (const row of myths.rows) {
      if (!row.editorial_id || !row.vertical_id) {
        throw new Error(`${row.slug}: falta dossier o fila vertical.`);
      }
    }
    console.log(
      JSON.stringify(
        {
          mode: options.apply ? "apply" : "dry-run",
          community: {
            before: {
              name: community.rows[0].name,
              imagePrompt: community.rows[0].image_prompt,
            },
            after: {
              name: "Umbra",
              pageTitle: umbraCommunityPage.title,
              imagePrompt: umbraCommunityPage.imagePrompt,
            },
          },
          seo: {
            before: seo.rows[0]?.meta_title || null,
            after: umbraCommunitySeo.meta_title,
          },
          media: myths.rows.map((row) => ({
            slug: row.slug,
            before: [row.image_url, row.vertical_image_url],
            after: [
              umbraMedia[row.slug].horizontal,
              umbraMedia[row.slug].vertical,
            ],
          })),
        },
        null,
        2,
      ),
    );
    if (!options.apply) return;

    const directory = path.resolve("artifacts", "editorial-backups");
    await fs.mkdir(directory, { recursive: true });
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const backupPath = path.join(
      directory,
      `umbra-community-media-${timestamp}.json`,
    );
    await fs.writeFile(
      backupPath,
      `${JSON.stringify(
        {
          community: community.rows[0],
          seo: seo.rows[0] || null,
          myths: myths.rows,
        },
        null,
        2,
      )}\n`,
      "utf8",
    );

    await client.query("BEGIN");
    try {
      await client.query(
        `UPDATE communities
         SET name = 'Umbra', image_prompt = $1
         WHERE id = $2`,
        [umbraCommunityPage.imagePrompt, community.rows[0].id],
      );
      const seoData = umbraCommunitySeo;
      await client.query(
        `INSERT INTO seo_pages (
           page_type, slug, meta_title, meta_description, meta_keywords,
           og_title, og_description, twitter_title, twitter_description,
           canonical_path, summary, payload, updated_at
         )
         VALUES (
           'community', 'umbra', $1, $2, $3,
           $4, $5, $6, $7,
           $8, $9, $10::jsonb, NOW()
         )
         ON CONFLICT (page_type, slug)
         DO UPDATE SET
           meta_title = EXCLUDED.meta_title,
           meta_description = EXCLUDED.meta_description,
           meta_keywords = EXCLUDED.meta_keywords,
           og_title = EXCLUDED.og_title,
           og_description = EXCLUDED.og_description,
           twitter_title = EXCLUDED.twitter_title,
           twitter_description = EXCLUDED.twitter_description,
           canonical_path = EXCLUDED.canonical_path,
           summary = EXCLUDED.summary,
           payload = EXCLUDED.payload,
           updated_at = NOW()`,
        [
          seoData.meta_title,
          seoData.meta_description,
          seoData.meta_keywords,
          seoData.og_title,
          seoData.og_description,
          seoData.twitter_title,
          seoData.twitter_description,
          seoData.canonical_path,
          seoData.summary,
          JSON.stringify(umbraCommunitySeoPayload()),
        ],
      );
      for (const row of myths.rows) {
        const record = umbraMythsBySlug[row.slug];
        const media = umbraMedia[row.slug];
        await client.query(
          `UPDATE myths
           SET image_url = $2, image_prompt = $3, updated_at = NOW()
           WHERE id = $1`,
          [row.id, media.horizontal, record.image_prompt_horizontal],
        );
        await client.query(
          `UPDATE editorial_myths
           SET image_url = $2,
               image_prompt = $3,
               image_prompt_horizontal = $3,
               image_prompt_vertical = $4,
               updated_at = NOW()
           WHERE source_myth_id = $1`,
          [
            row.id,
            media.horizontal,
            record.image_prompt_horizontal,
            record.image_prompt_vertical,
          ],
        );
        const vertical = await client.query(
          `UPDATE vertical_images
           SET entity_name = $2,
               entity_slug = $3,
               base_prompt = $4,
               custom_prompt = $5,
               image_url = $6
           WHERE entity_type = 'myth' AND entity_id = $1
           RETURNING id`,
          [
            row.id,
            record.title,
            row.slug,
            verticalBasePrompt,
            record.image_prompt_vertical,
            media.vertical,
          ],
        );
        if (vertical.rowCount !== 1) {
          throw new Error(`${row.slug}: falta la fila vertical única.`);
        }
      }
      await client.query("COMMIT");
      console.log(JSON.stringify({ status: "applied", backupPath }, null, 2));
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
