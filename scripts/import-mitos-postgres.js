const fs = require("fs");
const path = require("path");
const xlsx = require("xlsx");
const { Client } = require("pg");

const rootDir = path.resolve(__dirname, "..");
const excelPath = path.join(rootDir, "docs", "base_mitos.xlsx");
const schemaPath = path.join(rootDir, "scripts", "schema.pg.sql");

const postgresUrl =
  process.env.POSTGRES_URL_NON_POOLING ||
  process.env.DATABASE_URL_UNPOOLED ||
  process.env.POSTGRES_URL ||
  process.env.DATABASE_URL;

if (!postgresUrl) {
  console.error(
    "POSTGRES_URL (or DATABASE_URL) is required to import into Postgres."
  );
  process.exit(1);
}

if (!fs.existsSync(excelPath)) {
  console.error(`Missing Excel file: ${excelPath}`);
  process.exit(1);
}

if (!fs.existsSync(schemaPath)) {
  console.error(`Missing schema file: ${schemaPath}`);
  process.exit(1);
}

const workbook = xlsx.readFile(excelPath);
const sheet = workbook.Sheets.Mitos;

if (!sheet) {
  console.error("Sheet 'Mitos' not found in the Excel file.");
  process.exit(1);
}

const rows = xlsx.utils.sheet_to_json(sheet, { defval: "" });

function slugify(value) {
  return value
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .trim();
}

function splitList(value, delimiter) {
  if (!value) {
    return [];
  }
  return value
    .split(delimiter)
    .map((item) => item.trim())
    .filter(Boolean);
}

const usedSlugs = new Set();

function buildSlug(base, region, community, index) {
  const baseSlug = slugify(base) || `mito-${index + 1}`;
  const candidates = [baseSlug];

  if (community) {
    candidates.push(`${baseSlug}-${slugify(community)}`);
  }
  if (region) {
    candidates.push(`${baseSlug}-${slugify(region)}`);
  }

  for (const candidate of candidates) {
    if (!usedSlugs.has(candidate)) {
      usedSlugs.add(candidate);
      return candidate;
    }
  }

  let counter = 2;
  while (usedSlugs.has(`${baseSlug}-${counter}`)) {
    counter += 1;
  }

  const finalSlug = `${baseSlug}-${counter}`;
  usedSlugs.add(finalSlug);
  return finalSlug;
}

async function run() {
  const client = new Client({ connectionString: postgresUrl });
  await client.connect();

  const schemaSql = fs.readFileSync(schemaPath, "utf8");
  await client.query(schemaSql);

  await client.query(
    "TRUNCATE TABLE myth_tags, myth_keywords, myths, tags, communities, regions RESTART IDENTITY CASCADE"
  );

  try {
    await client.query("BEGIN");
    await client.query("SET synchronous_commit TO OFF");

    const regionCache = new Map();
    const communityCache = new Map();
    const tagCache = new Map();

    for (const [index, row] of rows.entries()) {
      const categoryPath = String(row.CATEGORIA || "").trim();
      const parts = categoryPath
        .split(">")
        .map((part) => part.trim())
        .filter(Boolean);

      const regionName = parts[0] || "Varios";
      const communityName = parts.length > 1 ? parts.slice(1).join(" > ") : "";

      let regionId = regionCache.get(regionName);
      if (!regionId) {
        const regionSlug = slugify(regionName);
        const regionResult = await client.query(
          `INSERT INTO regions (name, slug)
           VALUES ($1, $2)
           ON CONFLICT (name)
           DO UPDATE SET slug = EXCLUDED.slug
           RETURNING id`,
          [regionName, regionSlug]
        );
        regionId = regionResult.rows[0].id;
        regionCache.set(regionName, regionId);
      }

      let communityId = null;
      if (communityName) {
        const communityKey = `${regionId}:${communityName}`;
        communityId = communityCache.get(communityKey);
        if (!communityId) {
          const communitySlug = slugify(communityName);
          const communityResult = await client.query(
            `INSERT INTO communities (region_id, name, slug)
             VALUES ($1, $2, $3)
             ON CONFLICT (region_id, name)
             DO UPDATE SET slug = EXCLUDED.slug
             RETURNING id`,
            [regionId, communityName, communitySlug]
          );
          communityId = communityResult.rows[0].id;
          communityCache.set(communityKey, communityId);
        }
      }

      const title = String(row.TITULO || "").trim();
      const slug = buildSlug(title, regionName, communityName, index);

      const tags = splitList(String(row.TAGS || ""), ",");
      const tagsRaw = tags.join(", ");

      const content = String(row["Contenido 2"] || "").trim();
      const excerpt = String(row.post_excerpt || "").trim();
      const seoTitle = String(row.post_title_seo || "").trim();
      const seoDescription = String(row.meta_desc || "").trim();
      const focusKeyword = String(row.focus_keyword || "").trim();
      const focusKeywordsRaw = String(row.focuskeywords || "").trim();
      const imagePrompt = String(row.MIDJOURNEY || "").trim();

      const mythResult = await client.query(
        `INSERT INTO myths (
          title,
          slug,
          region_id,
          community_id,
          category_path,
          tags_raw,
          content,
          excerpt,
          seo_title,
          seo_description,
          focus_keyword,
          focus_keywords_raw,
          image_prompt,
          source_row
        ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)
        RETURNING id`,
        [
          title,
          slug,
          regionId,
          communityId,
          categoryPath || regionName,
          tagsRaw,
          content,
          excerpt,
          seoTitle,
          seoDescription,
          focusKeyword,
          focusKeywordsRaw,
          imagePrompt,
          index + 2,
        ]
      );
      const mythId = mythResult.rows[0].id;

      const tagIds = [];
      for (const tag of tags) {
        const tagSlug = slugify(tag);
        if (!tagSlug) {
          continue;
        }

        let tagId = tagCache.get(tagSlug);
        if (!tagId) {
          const tagResult = await client.query(
            `INSERT INTO tags (name, slug)
             VALUES ($1, $2)
             ON CONFLICT (slug)
             DO UPDATE SET name = EXCLUDED.name
             RETURNING id`,
            [tag, tagSlug]
          );
          tagId = tagResult.rows[0].id;
          tagCache.set(tagSlug, tagId);
        }
        tagIds.push(tagId);
      }

      if (tagIds.length) {
        const values = [];
        const placeholders = tagIds.map((tagId) => {
          values.push(mythId, tagId);
          const idx = values.length;
          return `($${idx - 1}, $${idx})`;
        });

        await client.query(
          `INSERT INTO myth_tags (myth_id, tag_id)
           VALUES ${placeholders.join(", ")}
           ON CONFLICT DO NOTHING`,
          values
        );
      }

      const keywords = Array.from(new Set(splitList(focusKeywordsRaw, "|")));
      if (keywords.length) {
        const values = [];
        const placeholders = keywords.map((keyword) => {
          values.push(mythId, keyword);
          const idx = values.length;
          return `($${idx - 1}, $${idx})`;
        });

        await client.query(
          `INSERT INTO myth_keywords (myth_id, keyword)
           VALUES ${placeholders.join(", ")}
           ON CONFLICT DO NOTHING`,
          values
        );
      }
    }

    await client.query("COMMIT");

    const counts = await client.query(
      `SELECT
        (SELECT COUNT(*) FROM myths) AS myths,
        (SELECT COUNT(*) FROM regions) AS regions,
        (SELECT COUNT(*) FROM communities) AS communities,
        (SELECT COUNT(*) FROM tags) AS tags,
        (SELECT COUNT(*) FROM myth_keywords) AS keywords`
    );

    console.log("Import complete.");
    console.log(counts.rows[0]);
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    await client.end();
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
