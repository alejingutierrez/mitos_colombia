import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import dotenv from "dotenv";
import pg from "pg";

const { Client } = pg;

const RECOVERED_SLUGS = [
  "chiminigagua",
  "creacion-muiscas",
  "el-sol-y-la-luna",
  "la-aparicion-del-hombre",
  "la-madre-de-los-hombres",
  "bochica",
  "el-tequendama",
  "chibchacum",
  "cuchavira",
  "huitaca",
  "chia",
  "chaquon",
  "campos-eliseos",
  "hunzahua",
  "el-pozo-de-hunzahua",
  "los-cojines-del-zaque",
  "idacanzas",
  "nompanem",
  "tomagata",
  "el-hijo-del-sol-goranchacha",
  "el-primero-de-los-reyes",
  "veneracion-a-los-soberanos",
  "la-cacica-de-guatavita",
  "el-dorado",
  "los-mojas",
];

function parseJson(value, label, slug) {
  try {
    return JSON.parse(value || "[]");
  } catch {
    throw new Error(`${slug}: ${label} no contiene JSON válido.`);
  }
}

function split(value, delimiter) {
  return String(value || "")
    .split(delimiter)
    .map((item) => item.trim())
    .filter(Boolean);
}

function buildModule(row) {
  const data = {
    slug: row.slug,
    title: row.title,
    category_path: row.category_path,
    tags: split(row.tags_raw, ","),
    latitude: row.latitude,
    longitude: row.longitude,
    mito: row.mito,
    historia: row.historia,
    versiones: row.versiones,
    leccion: row.leccion,
    similitudes: row.similitudes,
    content: row.content,
    excerpt: row.excerpt,
    seo_title: row.seo_title,
    seo_description: row.seo_description,
    seo: {
      meta_title: row.meta_title,
      meta_description: row.meta_description,
      meta_keywords: row.meta_keywords,
      og_title: row.og_title,
      og_description: row.og_description,
      twitter_title: row.twitter_title,
      twitter_description: row.twitter_description,
      canonical_path: row.canonical_path,
    },
    focus_keyword: row.focus_keyword,
    focus_keywords: split(row.focus_keywords_raw, "|"),
    image_prompt: row.image_prompt,
    image_prompt_horizontal: row.image_prompt_horizontal,
    image_prompt_vertical: row.image_prompt_vertical,
    image_url: row.image_url,
    keySources: parseJson(row.key_sources_json, "key_sources_json", row.slug),
    sources: parseJson(row.sources_json, "sources_json", row.slug),
    researchNotes: row.research_notes,
  };

  return `import bachue from "../../myths/bachue.mjs";

const editorialMyth = {
  ...${JSON.stringify(data, null, 2)},
  methodologySeo: bachue.methodologySeo,
};

export default editorialMyth;
`;
}

async function run() {
  dotenv.config({ path: path.resolve(".env"), quiet: true });
  const connectionString =
    process.env.POSTGRES_URL_NON_POOLING ||
    process.env.DATABASE_URL_UNPOOLED ||
    process.env.POSTGRES_URL ||
    process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("No se encontró una conexión Postgres.");
  }

  const client = new Client({
    connectionString,
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();

  try {
    const result = await client.query(
      `SELECT e.*,
              s.meta_title, s.meta_description, s.meta_keywords,
              s.og_title, s.og_description,
              s.twitter_title, s.twitter_description, s.canonical_path
       FROM editorial_myths e
       JOIN seo_pages s
         ON s.page_type = 'myth' AND s.slug = e.slug
       WHERE e.slug = ANY($1::text[])
       ORDER BY e.slug`,
      [RECOVERED_SLUGS]
    );

    const found = new Set(result.rows.map((row) => row.slug));
    const missing = RECOVERED_SLUGS.filter((slug) => !found.has(slug));
    if (missing.length) {
      throw new Error(`Faltan expedientes por recuperar: ${missing.join(", ")}`);
    }
    if (result.rows.length !== RECOVERED_SLUGS.length) {
      throw new Error(
        `Se esperaban ${RECOVERED_SLUGS.length} filas y llegaron ${result.rows.length}.`
      );
    }

    const outputDir = path.resolve("editorial", "muisca", "myths");
    await fs.mkdir(outputDir, { recursive: true });
    for (const row of result.rows) {
      await fs.writeFile(
        path.join(outputDir, `${row.slug}.mjs`),
        buildModule(row),
        "utf8"
      );
    }

    console.log(
      JSON.stringify(
        {
          recovered: result.rows.length,
          outputDir,
          slugs: result.rows.map((row) => row.slug),
        },
        null,
        2
      )
    );
  } finally {
    await client.end();
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
