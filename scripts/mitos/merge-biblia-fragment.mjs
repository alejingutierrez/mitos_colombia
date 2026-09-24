#!/usr/bin/env node
/**
 * Mete un lote de mitos y entidades en el plan V3 sin reescribirlo entero.
 *
 * Un inventario de trescientas entidades no cabe en una sola escritura, y
 * rehacer el archivo completo en cada tanda es la forma mas facil de perder lo
 * anterior. El fragmento trae `{ myths, entities, visual_system?, research? }`
 * y este script lo funde, avisando de lo que pisa.
 *
 *   node scripts/mitos/merge-biblia-fragment.mjs --plan <plan.json> --fragment <frag.json>
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

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

const args = parseArgs(process.argv.slice(2));
const planPath = resolve(String(args.plan || ""));
const fragmentPath = resolve(String(args.fragment || ""));
if (!existsSync(planPath)) throw new Error(`no existe el plan: ${planPath}`);
if (!existsSync(fragmentPath)) throw new Error(`no existe el fragmento: ${fragmentPath}`);

const plan = JSON.parse(readFileSync(planPath, "utf8"));
const fragment = JSON.parse(readFileSync(fragmentPath, "utf8"));

const frozen = new Set(plan.corpus?.myth_slugs || []);
const unknown = Object.keys(fragment.myths || {}).filter((slug) => !frozen.has(slug));
if (unknown.length) throw new Error(`mitos fuera del corpus congelado: ${unknown.join(", ")}`);

let addedMyths = 0;
let replacedMyths = 0;
for (const [slug, myth] of Object.entries(fragment.myths || {})) {
  const previous = plan.myths[slug];
  if (previous?.extraction) replacedMyths += 1;
  else addedMyths += 1;
  // El titulo y la categoria vienen del congelado, no del fragmento.
  plan.myths[slug] = { ...previous, ...myth, title: previous?.title ?? myth.title, category_path: previous?.category_path ?? myth.category_path };
}

let addedEntities = 0;
let replacedEntities = 0;
for (const [id, entity] of Object.entries(fragment.entities || {})) {
  if (plan.entities[id]) replacedEntities += 1;
  else addedEntities += 1;
  plan.entities[id] = { ...plan.entities[id], ...entity };
}

for (const key of ["visual_system", "research", "editorial_authorization", "material_culture_protocol"]) {
  if (fragment[key]) plan[key] = { ...(plan[key] || {}), ...fragment[key] };
}
if (fragment.inventory) plan.inventory = { ...plan.inventory, ...fragment.inventory };

writeFileSync(planPath, `${JSON.stringify(plan, null, 2)}\n`);

const pending = (plan.corpus?.myth_slugs || []).filter((slug) => !plan.myths[slug]?.extraction);
console.log(`fundido - ${plan.community}`);
console.log(`  mitos: +${addedMyths} nuevos, ${replacedMyths} reemplazados - faltan ${pending.length}`);
console.log(`  entidades: +${addedEntities} nuevas, ${replacedEntities} reemplazadas - total ${Object.keys(plan.entities).length}`);
if (pending.length && pending.length <= 12) console.log(`  pendientes: ${pending.join(", ")}`);
