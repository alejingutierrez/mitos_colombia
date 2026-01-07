const fs = require("fs");
const path = require("path");
const xlsx = require("xlsx");
const Database = require("better-sqlite3");

const rootDir = path.resolve(__dirname, "..");
const excelPath = path.join(rootDir, "docs", "mitos_seo_actualizados.xlsx");
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
const sheetName = "Sheet1";
const sheet = workbook.Sheets[sheetName] || workbook.Sheets[workbook.SheetNames[0]];

if (!sheet) {
  console.error("No sheets found in the Excel file.");
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

const REGION_ALIASES = {
  "Amazonía": "Amazonas",
  Amazonia: "Amazonas",
  Varias: "Varios",
};

function normalizeRegionName(value) {
  const trimmed = String(value || "").trim();
  if (!trimmed) {
    return "Varios";
  }
  return REGION_ALIASES[trimmed] || trimmed;
}

function splitKeywords(value) {
  if (!value) {
    return [];
  }
  return String(value)
    .split(/[|,]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function addKeywords(set, value) {
  splitKeywords(value).forEach((item) => set.add(item));
}

function buildContent({ mito, historia, versiones, leccion, similitudes }) {
  const sections = [
    ["Mito", mito],
    ["Historia", historia],
    ["Versiones", versiones],
    ["Lección", leccion],
    ["Similitudes", similitudes],
  ];

  return sections
    .map(([title, value]) => {
      const text = String(value || "").trim();
      return text ? `${title}\n${text}` : null;
    })
    .filter(Boolean)
    .join("\n\n");
}

function buildImagePrompt({
  mito,
  region,
  comunidad,
  representacionVisual,
  representacionPersonaje,
  icono,
  simbolos,
  tipo,
  clasificacion,
  temaPrincipal,
  temaSecundario,
  emociones,
  geografia,
}) {
  const parts = [
    "Ilustración en estilo paper quilling que represente el siguiente mito colombiano.",
  ];

  if (representacionVisual) {
    parts.push(`Escena principal: ${representacionVisual}`);
  }
  if (representacionPersonaje) {
    parts.push(`Personaje: ${representacionPersonaje}`);
  }
  if (icono) {
    parts.push(`Icono: ${icono}`);
  }
  if (simbolos) {
    parts.push(`Símbolos: ${simbolos}`);
  }
  if (tipo || clasificacion) {
    const values = [tipo, clasificacion].filter(Boolean).join("; ");
    parts.push(`Tipo y clasificación: ${values}`);
  }
  if (temaPrincipal || temaSecundario) {
    const values = [temaPrincipal, temaSecundario].filter(Boolean).join("; ");
    parts.push(`Temas: ${values}`);
  }
  if (emociones) {
    parts.push(`Emociones: ${emociones}`);
  }
  if (geografia) {
    parts.push(`Geografía/ambiente: ${geografia}`);
  }

  const regionLabel = region || "Varios";
  const communityLabel = comunidad || "Sin comunidad";
  parts.push(`Región: ${regionLabel}. Comunidad: ${communityLabel}.`);

  if (mito) {
    parts.push(`Texto del mito:\n${mito}`);
  }

  return parts.join("\n\n");
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
    const regionName = normalizeRegionName(row.region);
    const departmentName = String(row.departamento || "").trim();
    const communityName = String(row.comunidad || "").trim();
    const categoryPath = [regionName, departmentName, communityName]
      .filter(Boolean)
      .join(" > ");

    insertRegion.run(regionName, slugify(regionName));
    const regionId = getRegion.get(regionName).id;

    let communityId = null;
    if (communityName) {
      insertCommunity.run(regionId, communityName, slugify(communityName));
      communityId = getCommunity.get(regionId, communityName).id;
    }

    const title = String(row.nombre || "").trim();
    const slug = buildSlug(title, regionName, communityName, index);

    const tags = Array.from(
      new Set(splitList(String(row.etiquetas || ""), ","))
    );
    const tagsRaw = tags.join(", ");

    const mito = String(row.mito || "").trim();
    const historia = String(row.historia || "").trim();
    const versiones = String(row.versiones || "").trim();
    const leccion = String(row["lección"] || "").trim();
    const similitudes = String(row.similitudes || "").trim();

    const content = buildContent({
      mito,
      historia,
      versiones,
      leccion,
      similitudes,
    });
    const excerpt = String(row.excerpt || "").trim();
    const seoTitle = title;
    const seoDescription = excerpt;

    const personaje = String(row.personaje || "").trim();
    const focusKeyword =
      personaje || String(row.tema_principal || "").trim() || title;

    const keywordSet = new Set();
    addKeywords(keywordSet, row.etiquetas);
    addKeywords(keywordSet, row.tema_principal);
    addKeywords(keywordSet, row.tema_secundario);
    addKeywords(keywordSet, row.tipo);
    addKeywords(keywordSet, row["clasificación"]);
    addKeywords(keywordSet, row.personaje);
    addKeywords(keywordSet, row.simbolos);
    addKeywords(keywordSet, row.emociones);
    addKeywords(keywordSet, row["geografía"]);
    addKeywords(keywordSet, regionName);
    addKeywords(keywordSet, departmentName);
    addKeywords(keywordSet, communityName);

    if (focusKeyword) {
      keywordSet.add(focusKeyword);
    }

    const focusKeywordsRaw = Array.from(keywordSet).join("|");
    const imagePrompt = buildImagePrompt({
      mito,
      region: regionName,
      comunidad: communityName,
      representacionVisual: String(row["representación_visual"] || "").trim(),
      representacionPersonaje: String(
        row.representacion_personaje || ""
      ).trim(),
      icono: String(row.icono || "").trim(),
      simbolos: String(row.simbolos || "").trim(),
      tipo: String(row.tipo || "").trim(),
      clasificacion: String(row["clasificación"] || "").trim(),
      temaPrincipal: String(row.tema_principal || "").trim(),
      temaSecundario: String(row.tema_secundario || "").trim(),
      emociones: String(row.emociones || "").trim(),
      geografia: String(row["geografía"] || "").trim(),
    });

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
