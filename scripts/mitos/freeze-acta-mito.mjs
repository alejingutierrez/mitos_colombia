#!/usr/bin/env node
/**
 * Compuerta 0 del expediente por mito: congelar el canon de cada relato y
 * emitir el esqueleto del acta.
 *
 * Las biblias dicen **como se ve** cada entidad. No dicen que pasa en cada
 * relato, ni que escena lo muestra, ni con cuales de esas entidades se compone.
 * Esa capa existe para las cinco comunidades del carril de video —135 actas— y
 * no existe para los 463 mitos de los 42 corpus nuevos.
 *
 * El acta obliga a escribir ANTES los nudos irrenunciables, cada uno anclado en
 * una frase **literal** del canon, y a declarar que se descarta y por que. El
 * linter comprueba que el ancla existe de verdad: es lo que impide que el
 * resumen invente. Escribir las actas retroactivamente destapo once invenciones
 * que el linter de forma no veia.
 *
 * Aqui solo se congela. Los nudos y las escenas los escribe quien lee.
 *
 *   node scripts/mitos/freeze-acta-mito.mjs --corpus katios
 *   node scripts/mitos/freeze-acta-mito.mjs --all
 */
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import pg from "pg";

const PLANES = "content/mitos-visuales";
const ACTAS = "content/mitos-visuales/actas";
export const SCHEMA = "mitos-colombia-acta-y-escenas/v1";

/** El relato de una pagina sin fila editorial vive en `content` y no en `mito`. */
export const stripHtml = (s) => String(s || "")
  .replace(/<(script|style)[\s\S]*?<\/\1>/gi, " ")
  .replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&")
  .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&laquo;/g, "«").replace(/&raquo;/g, "»")
  .replace(/\s+/g, " ").trim();

function loadEnv() {
  for (const f of [resolve(".env"), "/Users/alegut/MyApps/Personal/mitos_colombia/.env"]) {
    if (!existsSync(f)) continue;
    for (const l of readFileSync(f, "utf8").split("\n")) {
      const m = l.match(/^([A-Z0-9_]+)=(.*)$/);
      if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
  }
}

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i += 1) {
    if (!argv[i].startsWith("--")) continue;
    const next = argv[i + 1];
    out[argv[i].slice(2)] = !next || next.startsWith("--") ? true : next;
  }
  return out;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  loadEnv();
  const cs = process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL || process.env.POSTGRES_URL;
  if (!cs) throw new Error("falta DATABASE_URL");

  const corpus = args.all
    ? readdirSync(PLANES).filter((n) => n.endsWith(".v3.json") && n !== "wayuu.v3.json").map((n) => n.replace(/\.v3\.json$/, ""))
    : [String(args.corpus || "")].filter(Boolean);
  if (!corpus.length) throw new Error("usa --corpus <id> o --all");

  const client = new pg.Client({ connectionString: cs, ssl: { rejectUnauthorized: false } });
  await client.connect();

  let escritos = 0, saltados = 0;
  for (const id of corpus) {
    const plan = JSON.parse(readFileSync(join(PLANES, `${id}.v3.json`), "utf8"));
    // `--only` para los corpus heredados: huitoto tiene 18 actas del carril de
    // video y solo cuatro relatos sin ninguna, y no tiene sentido sembrar
    // esqueletos que nadie va a llenar.
    const filtro = typeof args.only === "string" ? new Set(String(args.only).split(",").map((x) => x.trim())) : null;
    const slugs = Object.keys(plan.myths || {}).filter((s) => !filtro || filtro.has(s));
    const { rows } = await client.query("SELECT slug, title, mito, content FROM myths WHERE slug = ANY($1)", [slugs]);
    const porSlug = Object.fromEntries(rows.map((r) => [r.slug, r]));

    for (const slug of slugs) {
      const fila = porSlug[slug];
      if (!fila) { console.error(`  ! ${id}/${slug}: no esta en Neon`); continue; }
      // De donde sale el relato. El corpus de paginas ya lo declara en su plan.
      const usaMito = Boolean(fila.mito && fila.mito.trim());
      const texto = usaMito ? fila.mito : stripHtml(fila.content);
      const destino = join(ACTAS, id, `${slug}.json`);
      if (existsSync(destino) && !args.force) { saltados += 1; continue; }

      // Las entidades de ESTE corpus que el relato cita y que llegan a lamina:
      // son las unicas con las que se puede componer una escena.
      const disponibles = (plan.myths[slug].entity_refs || [])
        .filter((r) => plan.entities?.[r.entity_id]?.visual_status === "required")
        .map((r) => ({ entity_id: r.entity_id, role: r.role, name: plan.entities[r.entity_id].name, kind: plan.entities[r.entity_id].kind }));

      mkdirSync(dirname(destino), { recursive: true });
      writeFileSync(destino, `${JSON.stringify({
        schema: SCHEMA,
        mito: slug,
        titulo: fila.title,
        corpus: id,
        comunidad: plan.community,
        canon_slug: slug,
        canon_field: usaMito ? "mito" : "content",
        canon_sha256: createHash("sha256").update(texto, "utf8").digest("hex"),
        canon_chars: texto.length,
        nudos: null,
        deslindes: null,
        descartes: null,
        N_propuesto: null,
        razon_N: null,
        escenas: null,
        entidades_disponibles: disponibles,
      }, null, 2)}\n`);
      escritos += 1;
    }
  }
  await client.end();
  console.log(`actas esqueleto: ${escritos} escritas, ${saltados} ya existian`);
  console.log(`  en ${resolve(ACTAS)}`);
}

// Con guarda: el linter importa `stripHtml` de aqui, y sin ella cada pasada
// del linter ejecutaba el congelador —una consulta a Neon de mas y, con
// `--force`, la reescritura de los esqueletos que estaba verificando.
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((e) => { console.error(e.message); process.exitCode = 1; });
}
