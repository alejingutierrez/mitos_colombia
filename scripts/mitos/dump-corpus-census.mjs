#!/usr/bin/env node
/**
 * Volcado de corpus para el censo de entidades.
 *
 * Distinto del congelado de la compuerta 0 en una cosa importante: aqui
 * tambien entran las paginas **sin `mito`**. Son 242 en el corpus mestizo,
 * mixto y afro, con unos 7.000 caracteres de `content` cada una, y el
 * inventario de entidades las barre igual: el tipo de pagina decide si hay
 * triptico, nunca si aporta entidades a la biblia.
 *
 * Cada pagina sale marcada como `canon` (tiene `mito`) o `pagina` (solo
 * `content`), porque no valen lo mismo: sobre una pagina sin `mito` no se
 * escribe guion ni se hace video.
 *
 *   node scripts/mitos/dump-corpus-census.mjs --community koguis --out <ruta.md>
 *   node scripts/mitos/dump-corpus-census.mjs --slugs a,b,c --id <bucket> --out <ruta.md>
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import pg from "../../runtime/workshop-postgres.mjs";

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

function loadEnv() {
  for (const file of [
    resolve(".env"),
    resolve(".env.local"),
    "/Users/alegut/MyApps/Personal/mitos_colombia/.env",
    "/Users/alegut/MyApps/Personal/mitos_colombia/.env.local",
  ]) {
    if (!existsSync(file)) continue;
    for (const line of readFileSync(file, "utf8").split("\n")) {
      const match = line.match(/^([A-Z0-9_]+)=(.*)$/);
      if (match && !process.env[match[1]]) process.env[match[1]] = match[2].replace(/^["']|["']$/g, "");
    }
  }
}

/** El `content` es HTML del editor; para leerlo se quitan las etiquetas. */
function stripHtml(value) {
  return String(value || "")
    .replace(/<(script|style)[\s\S]*?<\/\1>/gi, " ")
    .replace(/<\/(p|div|h[1-6]|li|br)>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
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
  const param = bySlugs
    ? String(args.slugs).split(",").map((slug) => slug.trim()).filter(Boolean)
    : String(args.community || "");
  const where = bySlugs ? "m.slug = ANY($1)" : "co.slug = $1";

  const { rows } = await client.query(
    `SELECT m.slug, m.title, m.category_path, co.name AS community_name,
            m.mito, m.content, em.historia, em.versiones, em.research_notes
       FROM myths m
       LEFT JOIN communities co ON co.id = m.community_id
       LEFT JOIN editorial_myths em ON em.source_myth_id = m.id
      WHERE ${where}
      ORDER BY m.slug`,
    [param],
  );
  await client.end();
  if (!rows.length) throw new Error(`sin paginas para ${bySlugs ? param.join(",") : param}`);

  const id = String(args.id || args.community);
  let canon = 0;
  let pageOnly = 0;
  const body = rows
    .map((row) => {
      const hasMito = Boolean(row.mito && row.mito.trim());
      if (hasMito) canon += 1;
      else pageOnly += 1;
      const narrative = hasMito ? row.mito.trim() : stripHtml(row.content);
      const head =
        `# ${row.title}\n\n` +
        `slug: \`${row.slug}\`\n` +
        `categoria: ${row.category_path}\n` +
        `tipo: **${hasMito ? "canon (tiene mito)" : "pagina (solo content, NO narrable)"}**\n`;
      const parts = [`\n## relato\n\n${narrative || "(vacio)"}\n`];
      for (const [label, value] of [
        ["historia", row.historia],
        ["versiones", row.versiones],
        ["research_notes", row.research_notes],
      ]) {
        if (value && String(value).trim()) parts.push(`\n## ${label}\n\n${String(value).trim()}\n`);
      }
      return head + parts.join("");
    })
    .join("\n---\n\n");

  const outPath = resolve(String(args.out || `censo-${id}.md`));
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(
    outPath,
    `<!-- censo ${id} - ${rows.length} paginas: ${canon} con canon narrable, ${pageOnly} solo pagina -->\n\n${body}`,
  );

  const chars = body.length;
  console.log(`${id}: ${rows.length} paginas (${canon} canon, ${pageOnly} solo pagina) - ${chars.toLocaleString("es-CO")} caracteres -> ${outPath}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
