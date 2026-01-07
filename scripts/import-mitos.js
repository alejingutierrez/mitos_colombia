const fs = require("fs");
const path = require("path");
const xlsx = require("xlsx");
const Database = require("better-sqlite3");

const rootDir = path.resolve(__dirname, "..");
const excelPath = path.join(rootDir, "docs", "base_mitos.xlsx");
const dbPath = path.join(rootDir, "data", "mitos.sqlite");
const schemaPath = path.join(rootDir, "scripts", "schema.sql");

if (!fs.existsSync(excelPath)) {
  console.error(`Missing Excel file: ${excelPath}`);
  process.exit(1);
}

if (!fs.existsSync(schemaPath)) {
  console.error(`Missing schema file: ${schemaPath}`);
  process.exit(1);
}

fs.mkdirSync(path.dirname(dbPath), { recursive: true });

const workbook = xlsx.readFile(excelPath);
const sheet = workbook.Sheets.Mitos;

if (!sheet) {
  console.error("Sheet 'Mitos' not found in the Excel file.");
  process.exit(1);
}

const rows = xlsx.utils.sheet_to_json(sheet, { defval: "" });

if (fs.existsSync(dbPath)) {
  fs.unlinkSync(dbPath);
}

const db = new Database(dbPath);
db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");

const schemaSql = fs.readFileSync(schemaPath, "utf8");
db.exec(schemaSql);

db.exec(
  [
    "DELETE FROM myth_tags;",
    "DELETE FROM myth_keywords;",
    "DELETE FROM myths;",
    "DELETE FROM tags;",
    "DELETE FROM communities;",
    "DELETE FROM regions;",
  ].join("\n")
);

const insertRegion = db.prepare(
  "INSERT OR IGNORE INTO regions (name, slug) VALUES (?, ?)"
);
const getRegion = db.prepare("SELECT id FROM regions WHERE name = ?");

const insertCommunity = db.prepare(
  "INSERT OR IGNORE INTO communities (region_id, name, slug) VALUES (?, ?, ?)"
);
const getCommunity = db.prepare(
  "SELECT id FROM communities WHERE region_id = ? AND name = ?"
);

const insertTag = db.prepare(
  "INSERT OR IGNORE INTO tags (name, slug) VALUES (?, ?)"
);
const getTagByName = db.prepare("SELECT id FROM tags WHERE name = ?");
const getTagBySlug = db.prepare("SELECT id FROM tags WHERE slug = ?");

const insertMyth = db.prepare(
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
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
);

const insertMythTag = db.prepare(
  "INSERT OR IGNORE INTO myth_tags (myth_id, tag_id) VALUES (?, ?)"
);
const insertMythKeyword = db.prepare(
  "INSERT OR IGNORE INTO myth_keywords (myth_id, keyword) VALUES (?, ?)"
);

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

const importRows = db.transaction((dataRows) => {
  dataRows.forEach((row, index) => {
    const categoryPath = String(row.CATEGORIA || "").trim();
    const parts = categoryPath
      .split(">")
      .map((part) => part.trim())
      .filter(Boolean);

    const regionName = parts[0] || "Varios";
    const communityName = parts.length > 1 ? parts.slice(1).join(" > ") : "";

    insertRegion.run(regionName, slugify(regionName));
    const regionId = getRegion.get(regionName).id;

    let communityId = null;
    if (communityName) {
      insertCommunity.run(regionId, communityName, slugify(communityName));
      communityId = getCommunity.get(regionId, communityName).id;
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

    const result = insertMyth.run(
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
      index + 2
    );

    const mythId = result.lastInsertRowid;

    tags.forEach((tag) => {
      const tagSlug = slugify(tag);
      if (!tagSlug) {
        return;
      }

      insertTag.run(tag, tagSlug);
      const tagRow = getTagByName.get(tag) || getTagBySlug.get(tagSlug);
      if (!tagRow) {
        return;
      }
      insertMythTag.run(mythId, tagRow.id);
    });

    const keywords = new Set(splitList(focusKeywordsRaw, "|"));

    keywords.forEach((keyword) => {
      insertMythKeyword.run(mythId, keyword);
    });
  });
});

importRows(rows);

const counts = {
  myths: db.prepare("SELECT COUNT(*) AS count FROM myths").get().count,
  regions: db.prepare("SELECT COUNT(*) AS count FROM regions").get().count,
  communities: db
    .prepare("SELECT COUNT(*) AS count FROM communities")
    .get().count,
  tags: db.prepare("SELECT COUNT(*) AS count FROM tags").get().count,
  keywords: db
    .prepare("SELECT COUNT(*) AS count FROM myth_keywords")
    .get().count,
};

console.log("Import complete.");
console.log(counts);
