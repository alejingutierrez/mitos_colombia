#!/usr/bin/env node
/**
 * Compuerta 0 de la Biblia visual V3: congelar el corpus de una comunidad.
 *
 * Lee de Neon los cuatro campos editoriales de cada mito narrable
 * (`mito`, `historia`, `versiones`, `research_notes`), calcula la huella
 * SHA-256 de lo leido y emite dos cosas:
 *
 *   1. el esqueleto del plan V3 en `content/mitos-visuales/<id>.v3.json`,
 *      con `corpus` y `source_snapshot` ya congelados;
 *   2. un volcado legible del canon en `--canon-out`, que es lo que lee
 *      quien hace las siete pasadas. No va a git: la huella lo reproduce.
 *
 * Si el corpus cambia en la base, la huella deja de coincidir y el
 * inventario queda obsoleto. Eso es justamente lo que debe pasar.
 *
 *   node scripts/mitos/freeze-corpus-biblia.mjs --community koguis
 *   node scripts/mitos/freeze-corpus-biblia.mjs --id pacifico-choco-afro \
 *     --name "Pacifico chocoano afrodescendiente" \
 *     --slugs chimbilaco,kijimba-de-las-animas,la-sierpe-de-bete,la-yesca
 */
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import pg from "pg";

const FIELDS = ["mito", "historia", "versiones", "research_notes"];
/** El relato de una pagina sin fila editorial vive aqui y en ningun otro sitio. */
const PAGE_FIELDS = ["content", "mito", "historia", "versiones", "research_notes"];
const SCHEMA = "mitos-colombia-biblia-visual/v3";
const FIELD_SEPARATOR = "\n@@campo@@\n";
const RECORD_SEPARATOR = "\n@@mito@@\n";

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i += 1) {
    if (!argv[i].startsWith("--")) continue;
    const key = argv[i].slice(2);
    const next = argv[i + 1];
    out[key] = !next || next.startsWith("--") ? true : next;
  }
  return out;
}

/** El `.env` vive en la raiz del repo, no dentro del worktree. */
function loadEnv() {
  const candidates = [
    resolve(".env"),
    resolve(".env.local"),
    "/Users/alegut/MyApps/Personal/mitos_colombia/.env",
    "/Users/alegut/MyApps/Personal/mitos_colombia/.env.local",
  ];
  for (const file of candidates) {
    if (!existsSync(file)) continue;
    for (const line of readFileSync(file, "utf8").split("\n")) {
      const match = line.match(/^([A-Z0-9_]+)=(.*)$/);
      if (match && !process.env[match[1]]) process.env[match[1]] = match[2].replace(/^["']|["']$/g, "");
    }
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  loadEnv();

  const connectionString =
    process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL || process.env.POSTGRES_URL;
  if (!connectionString) throw new Error("falta DATABASE_URL en el entorno");

  const client = new pg.Client({ connectionString, ssl: { rejectUnauthorized: false } });
  await client.connect();

  const bySlugs = typeof args.slugs === "string";
  const where = bySlugs ? "m.slug = ANY($1)" : "co.slug = $1";
  const param = bySlugs
    ? String(args.slugs).split(",").map((slug) => slug.trim()).filter(Boolean)
    : String(args.community || "");
  if (!bySlugs && !param) throw new Error("usa --community <slug> o --slugs a,b,c");

  const { rows } = await client.query(
    `SELECT m.slug, m.title, m.category_path, co.name AS community_name, co.slug AS community_slug,
            m.mito, m.content, em.historia, em.versiones, em.research_notes,
            em.sources_json, em.key_sources_json,
            em.updated_at AS editorial_updated_at, m.updated_at
       FROM myths m
       LEFT JOIN communities co ON co.id = m.community_id
       LEFT JOIN editorial_myths em ON em.source_myth_id = m.id
      WHERE ${where}${args.pages ? "" : " AND m.mito IS NOT NULL AND length(trim(m.mito)) > 0"}
      ORDER BY m.slug`,
    [param],
  );
  await client.end();

  if (!rows.length) throw new Error(`sin mitos narrables para ${bySlugs ? param.join(",") : param}`);
  if (bySlugs) {
    const missing = param.filter((slug) => !rows.some((row) => row.slug === slug));
    if (missing.length) throw new Error(`slugs sin mito narrable: ${missing.join(", ")}`);
  }

  const id = String(args.id || args.community);
  const label = String(args.name || rows[0].community_name || id);
  const retrievedAt = new Date().toISOString().slice(0, 10);

  // La huella cubre exactamente lo que se leyo: los cuatro campos, por slug
  // ordenado. Cualquier reescritura editorial la mueve y el inventario caduca.
  // Un corpus de paginas se congela sobre lo que de verdad tiene. 218 de las
  // 240 paginas mestizas no tienen fila editorial: pedirles los cuatro campos
  // obligaria a declarar que se leyo algo que no existe.
  const fields = args.pages ? PAGE_FIELDS : FIELDS;
  const canonical = rows
    .map((row) => [row.slug, ...fields.map((field) => String(row[field] ?? ""))].join(FIELD_SEPARATOR))
    .join(RECORD_SEPARATOR);
  const sha256 = createHash("sha256").update(canonical, "utf8").digest("hex");

  const maxUpdated = rows
    .flatMap((row) =>
      [row.updated_at, row.editorial_updated_at].filter(Boolean).map((date) => new Date(date).toISOString()),
    )
    .sort()
    .pop();

  const plan = {
    schema: SCHEMA,
    status: "research",
    generation_locked: true,
    community: label,
    community_slug: rows[0].community_slug || id,
    region: [...new Set(rows.map((row) => String(row.category_path || "").split(">")[0].trim()))]
      .filter(Boolean)
      .join(" / "),
    corpus: {
      frozen: true,
      frozen_at: retrievedAt,
      source: bySlugs
        ? `Neon, seleccion explicita de slugs para el agrupamiento ${id}`
        : `Neon, comunidad exacta ${label} (communities.slug = ${param})`,
      grouping: bySlugs ? "epoca_y_territorio" : "comunidad",
      myth_slugs: rows.map((row) => row.slug),
      ...(args.pages
        ? {
            required_fields: ["content"],
            fields_note: `Corpus de paginas: ${rows.filter((row) => row.mito && row.mito.trim()).length} de ${rows.length} tienen canon en \`mito\`; el resto no tiene fila editorial y su relato vive solo en \`content\`. Se exige leer el relato, y los cuatro campos editoriales alli donde existen.`,
          }
        : {}),
    },
    source_snapshot: {
      source: "Neon myths.mito/content + editorial_myths.historia/versiones/research_notes",
      retrieved_at: retrievedAt,
      record_count: rows.length,
      fields,
      sha256,
      max_source_updated_at: maxUpdated || null,
    },
    research: { sources: [], dossier: null, evidence_matrix: null, cultural_review: null },
    inventory: {
      status: "pending",
      frozen: false,
      method: "Lectura completa de los cuatro campos por mito y siete pasadas independientes de extraccion.",
      inclusion_rule:
        "Se incluye toda identidad, ser, animal, colectivo, objeto, planta, arquitectura, lugar, paisaje o fenomeno que conduzca una accion, cambie de estado, reaparezca o sea necesario para continuidad visual.",
      exclusion_rule:
        "Una entidad detectada solo se excluye de modelo propio con razon explicita; los elementos embebidos declaran que otra ficha los cubre.",
    },
    myths: Object.fromEntries(
      rows.map((row) => [
        row.slug,
        {
          title: row.title,
          category_path: row.category_path,
          canon: Boolean(row.mito && row.mito.trim()),
          extraction: null,
          entity_refs: [],
        },
      ]),
    ),
    entities: {},
    models: {},
    pilot: null,
    generation_batch: null,
    completion: null,
  };

  const planPath = resolve(String(args.out || `content/mitos-visuales/${id}.v3.json`));
  mkdirSync(dirname(planPath), { recursive: true });
  if (existsSync(planPath) && !args.force) throw new Error(`ya existe ${planPath}; usa --force para rehacerlo`);
  writeFileSync(planPath, `${JSON.stringify(plan, null, 2)}\n`);

  if (args["canon-out"]) {
    const canonPath = resolve(String(args["canon-out"]));
    mkdirSync(dirname(canonPath), { recursive: true });
    const body = rows
      .map((row) => {
        const head = `# ${row.title}\n\nslug: \`${row.slug}\`\ncategoria: ${row.category_path}\n`;
        const fields = FIELDS.map(
          (field) => `\n## ${field}\n\n${String(row[field] ?? "").trim() || "(vacio)"}\n`,
        ).join("");
        const sources = [row.key_sources_json, row.sources_json]
          .filter(Boolean)
          .map((value) => `\n## fuentes declaradas\n\n\`\`\`json\n${JSON.stringify(value, null, 1)}\n\`\`\`\n`)
          .join("");
        return `${head}${fields}${sources}`;
      })
      .join("\n---\n\n");
    writeFileSync(
      canonPath,
      `<!-- corpus congelado ${id} - ${retrievedAt} - sha256 ${sha256} - ${rows.length} mitos -->\n\n${body}`,
    );
  }

  const chars = rows.reduce(
    (total, row) => total + fields.reduce((sum, field) => sum + String(row[field] ?? "").length, 0),
    0,
  );
  console.log(`corpus congelado - ${id}`);
  console.log(`  mitos: ${rows.length} - caracteres leidos: ${chars.toLocaleString("es-CO")}`);
  console.log(`  sha256: ${sha256}`);
  console.log(`  plan: ${planPath}`);
  if (args["canon-out"]) console.log(`  canon: ${resolve(String(args["canon-out"]))}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
