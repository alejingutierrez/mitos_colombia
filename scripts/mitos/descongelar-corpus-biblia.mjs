#!/usr/bin/env node
/**
 * Descongela el inventario de una biblia V3 cuando el canon cambio en Neon.
 *
 * `freeze-corpus-biblia.mjs --force` rehace el plan desde cero y tira el
 * inventario, el diseño y los contratos. Esto no: conserva todo lo escrito,
 * vuelve a leer los mismos campos, mueve la huella a `source_snapshot` y guarda
 * la anterior en `source_snapshot_history`. Despues reabre el inventario y
 * marca, relato por relato, cuales hay que volver a leer.
 *
 * Que relato cambio se sabe por el acta: cada una guardo el SHA-256 del `mito`
 * que leyo. Un relato sin acta, o un mito nuevo de la comunidad, entra como
 * cambiado: no hay forma honesta de afirmar que ya se leyo.
 *
 *   node scripts/mitos/descongelar-corpus-biblia.mjs --corpus ticuna,u-wa
 *   node scripts/mitos/descongelar-corpus-biblia.mjs --todos
 *   node scripts/mitos/descongelar-corpus-biblia.mjs --todos --canon-out <dir>
 *
 * Con --canon-out vuelca el canon vigente de cada corpus en <dir>/<id>.canon.md,
 * con los relatos reescritos marcados. No va a git: la huella lo reproduce.
 */
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import pg from "pg";

const PLANES = "content/mitos-visuales";
const ACTAS = "content/mitos-visuales/actas";
const FIELD_SEPARATOR = "\n@@campo@@\n";
const RECORD_SEPARATOR = "\n@@mito@@\n";

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i += 1) {
    if (!argv[i].startsWith("--")) continue;
    const next = argv[i + 1];
    out[argv[i].slice(2)] = !next || next.startsWith("--") ? true : next;
  }
  return out;
}

function loadEnv() {
  for (const file of [resolve(".env"), "/Users/alegut/MyApps/Personal/mitos_colombia/.env"]) {
    if (!existsSync(file)) continue;
    for (const line of readFileSync(file, "utf8").split("\n")) {
      const match = line.match(/^([A-Z0-9_]+)=(.*)$/);
      if (match && !process.env[match[1]]) process.env[match[1]] = match[2].replace(/^["']|["']$/g, "");
    }
  }
}

const sha = (text) => createHash("sha256").update(String(text ?? ""), "utf8").digest("hex");

function actasDe(corpus) {
  const dir = join(ACTAS, corpus);
  if (!existsSync(dir)) return {};
  return Object.fromEntries(
    readdirSync(dir)
      .filter((f) => f.endsWith(".json"))
      .map((f) => JSON.parse(readFileSync(join(dir, f), "utf8")))
      .map((acta) => [acta.canon_slug || acta.mito, acta]),
  );
}

function volcarCanon(args, id, rows, fields, cambiados, nuevos) {
  if (args["canon-out"]) {
    const dir = resolve(String(args["canon-out"]));
    mkdirSync(dir, { recursive: true });
    const body = rows
      .map((row) => {
        const marca = nuevos.includes(row.slug) ? " · NUEVO" : cambiados.includes(row.slug) ? " · REESCRITO" : "";
        const campos = fields
          .map((field) => `\n## ${field}\n\n${String(row[field] ?? "").trim() || "(vacio)"}\n`)
          .join("");
        return `# ${row.title}${marca}\n\nslug: \`${row.slug}\`\ncategoria: ${row.category_path}\n${campos}`;
      })
      .join("\n---\n\n");
    writeFileSync(join(dir, `${id}.canon.md`), `${body}\n`);
  }
}

async function descongelar(client, id, args) {
  const planPath = join(PLANES, `${id}.v3.json`);
  const plan = JSON.parse(readFileSync(planPath, "utf8"));
  const fields = plan.source_snapshot.fields;
  const byCommunity = plan.corpus.grouping === "comunidad";

  // Una comunidad puede haber ganado relatos narrables desde el congelado.
  let slugs = [...plan.corpus.myth_slugs];
  if (byCommunity) {
    const { rows } = await client.query(
      `SELECT m.slug FROM myths m JOIN communities co ON co.id = m.community_id
        WHERE co.slug = $1 AND m.mito IS NOT NULL AND length(trim(m.mito)) > 0`,
      [plan.community_slug],
    );
    for (const { slug } of rows) if (!slugs.includes(slug)) slugs.push(slug);
  }

  const { rows } = await client.query(
    `SELECT m.slug, m.title, m.category_path, m.mito, m.content, em.historia, em.versiones, em.research_notes,
            em.updated_at AS editorial_updated_at, m.updated_at
       FROM myths m LEFT JOIN editorial_myths em ON em.source_myth_id = m.id
      WHERE m.slug = ANY($1) ORDER BY m.slug`,
    [slugs],
  );
  const faltan = slugs.filter((slug) => !rows.some((row) => row.slug === slug));
  if (faltan.length) throw new Error(`${id}: slugs que ya no existen en Neon: ${faltan.join(", ")}`);

  const canonical = rows
    .map((row) => [row.slug, ...fields.map((field) => String(row[field] ?? ""))].join(FIELD_SEPARATOR))
    .join(RECORD_SEPARATOR);
  const nuevaHuella = sha(canonical);
  if (nuevaHuella === plan.source_snapshot.sha256 && !args.force) {
    // Ya descongelado: el volcado conserva la marca de lo que hay que releer.
    const rec = plan.inventory?.reconciliation || {};
    volcarCanon(args, id, rows, fields, rec.rewritten_myths || [], rec.new_myths || []);
    return { id, estado: "intacto", cambiados: [], nuevos: [] };
  }

  const actas = actasDe(id);
  const nuevos = rows.filter((row) => !plan.corpus.myth_slugs.includes(row.slug)).map((row) => row.slug);
  const cambiados = rows
    .filter((row) => !nuevos.includes(row.slug))
    .filter((row) => {
      const acta = actas[row.slug];
      if (!acta) return true;
      const field = acta.canon_field === "content" ? "content" : "mito";
      return sha(row[field]) !== acta.canon_sha256;
    })
    .map((row) => row.slug);

  const hoy = new Date().toISOString().slice(0, 10);
  const maxUpdated = rows
    .flatMap((row) => [row.updated_at, row.editorial_updated_at].filter(Boolean).map((d) => new Date(d).toISOString()))
    .sort()
    .pop();

  plan.source_snapshot_history = [...(plan.source_snapshot_history || []), plan.source_snapshot];
  plan.source_snapshot = {
    ...plan.source_snapshot,
    retrieved_at: hoy,
    record_count: rows.length,
    sha256: nuevaHuella,
    max_source_updated_at: maxUpdated || null,
  };
  plan.corpus.frozen_at = hoy;
  plan.corpus.myth_slugs = rows.map((row) => row.slug);

  for (const slug of nuevos) {
    const row = rows.find((r) => r.slug === slug);
    plan.myths[slug] = {
      title: row.title,
      category_path: row.category_path,
      canon: Boolean(row.mito && row.mito.trim()),
      extraction: null,
      entity_refs: [],
    };
  }
  for (const slug of [...cambiados, ...nuevos]) {
    const myth = plan.myths[slug];
    if (myth.extraction) {
      myth.extraction.previous_note = myth.extraction.note;
      myth.extraction.review_status = "pending_reconciliation";
      myth.extraction.reviewed_at = null;
    }
  }

  // Sin cambios de relato no hay nada que releer: solo historia o versiones
  // se movieron, y el inventario lee el relato. Se re-sella y se sigue.
  const releer = cambiados.length + nuevos.length;
  if (releer) {
    plan.status = "inventory";
    plan.generation_locked = true;
    plan.inventory.frozen = false;
    plan.inventory.status = "reconciling";
    plan.inventory.reconciliation = {
      opened_at: hoy,
      reason: "El canon de Neon cambio despues del congelado (cierre del catalogo, 2026-09-22/23). Cada relato marcado pending_reconciliation se relee completo con las siete pasadas contra el inventario existente.",
      rewritten_myths: cambiados,
      new_myths: nuevos,
      unchanged_myths: rows.map((r) => r.slug).filter((s) => !cambiados.includes(s) && !nuevos.includes(s)),
    };
  }
  writeFileSync(planPath, `${JSON.stringify(plan, null, 2)}\n`);

  volcarCanon(args, id, rows, fields, cambiados, nuevos);
  return { id, estado: releer ? "reabierto" : "resellado", cambiados, nuevos };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  loadEnv();
  const ids = args.todos
    ? readdirSync(PLANES).filter((f) => f.endsWith(".v3.json") && f !== "wayuu.v3.json").map((f) => f.replace(/\.v3\.json$/, ""))
    : String(args.corpus || "").split(",").map((s) => s.trim()).filter(Boolean);
  if (!ids.length) throw new Error("usa --corpus a,b o --todos");

  const client = new pg.Client({
    connectionString: process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL || process.env.POSTGRES_URL,
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();
  const out = [];
  for (const id of ids.sort()) out.push(await descongelar(client, id, args));
  await client.end();

  for (const r of out) {
    console.log(r.id.padEnd(28), r.estado.padEnd(10), `reescritos ${String(r.cambiados.length).padStart(3)}`, `nuevos ${r.nuevos.length}`);
  }
  const reabiertos = out.filter((r) => r.estado === "reabierto");
  console.log(`\n${reabiertos.length} reabiertos · ${reabiertos.reduce((a, r) => a + r.cambiados.length + r.nuevos.length, 0)} relatos por releer`);
}

main().catch((error) => { console.error(error.message); process.exit(1); });
