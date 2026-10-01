#!/usr/bin/env node
/**
 * Compuerta del expediente por mito: el acta y sus escenas.
 *
 * Hereda del linter de video (`scripts/videos/lint-acta.mjs`) lo que ya se
 * habia pagado con once invenciones descubiertas: **cada nudo se ancla en una
 * frase literal del canon**, y el largo sale de los nudos y no del molde. Añade
 * lo que la biblia hace posible y nadie comprobaba: que las escenas se compongan
 * **solo con entidades que de verdad tienen lamina**, y de este corpus.
 *
 * Esa ultima regla es la misma leccion que costo 29 relatos en la Etapa 1: una
 * referencia a algo `embedded` o `excluded` deja la escena sin nada que dibujar.
 *
 *   node scripts/mitos/lint-acta-mito.mjs content/mitos-visuales/actas/katios/*.json
 *   node scripts/mitos/lint-acta-mito.mjs --corpus katios
 */
import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";
import pg from "../../runtime/workshop-postgres.mjs";
import { stripHtml } from "./freeze-acta-mito.mjs";

const PLANES = "content/mitos-visuales";
const ACTAS = "content/mitos-visuales/actas";
const PAPELES = ["entrada", "acto", "huella"];
const ENCUADRES = ["16:9", "9:16", "1:1"];

const hasText = (x) => typeof x === "string" && Boolean(x.trim());

const norm = (s) => String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
  .replace(/[^a-z0-9ñ ]/g, " ").replace(/\s+/g, " ").trim();

function loadEnv() {
  for (const f of [resolve(".env"), "/Users/alegut/MyApps/Personal/mitos_colombia/.env"]) {
    if (!existsSync(f)) continue;
    for (const l of readFileSync(f, "utf8").split("\n")) {
      const m = l.match(/^([A-Z0-9_]+)=(.*)$/);
      if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
  }
}

export function revisarActa(acta, { canon, plan }) {
  const errs = [];
  const avisos = [];
  const add = (c) => errs.push(c);

  if (canon != null) {
    const sha = createHash("sha256").update(canon, "utf8").digest("hex");
    if (acta.canon_sha256 !== sha) add(`el canon cambio desde que se escribio el acta (sha ${sha.slice(0, 12)}...)`);
  }
  const canonNorm = norm(canon || "");

  const nudos = acta.nudos || [];
  if (!nudos.length) add("el acta no declara ningun nudo");
  const vistos = new Set();
  for (const n of nudos) {
    if (!n?.id) { add("un nudo sin id"); continue; }
    if (vistos.has(n.id)) add(`nudo repetido: ${n.id}`);
    vistos.add(n.id);
    if (!n.nudo?.trim()) add(`${n.id}: sin enunciado`);
    if (!n.evidencia?.trim()) { add(`${n.id}: sin evidencia`); continue; }
    // El ancla. Si la frase no esta en el canon, el nudo se invento.
    if (canon != null && !canonNorm.includes(norm(n.evidencia))) {
      add(`${n.id}: la evidencia no aparece literal en el canon — «${String(n.evidencia).slice(0, 60)}...»`);
    }
  }

  const N = acta.N_propuesto;
  if (!(N >= 8 && N <= 18)) add(`N_propuesto ${N} fuera de 8-18`);
  if (!acta.razon_N?.trim()) add("sin razon_N: el largo sale de los nudos, no del molde");
  // N = techo(nudos/2): cada bloque sostiene como mucho dos nudos.
  const derivado = Math.min(18, Math.max(8, Math.ceil(nudos.length / 2)));
  if (nudos.length && N !== derivado) {
    add(`N_propuesto ${N} no sale de los nudos: ${nudos.length} nudos piden N=${derivado}`);
  }

  if (!Array.isArray(acta.deslindes) || !acta.deslindes.length) add("sin deslindes declarados");
  if (!Array.isArray(acta.descartes)) add("sin lista de descartes (vacia es valida, ausente no)");

  // Una pagina que el plan declara no ilustrable se lee, se reduce a nudos y no
  // produce lamina: `esperanza-en-el-oriente` no es un relato sino una
  // hipotesis comparativa de 1956 cuyas cinco figuras pertenecen a tradiciones
  // propias. La valvula estaba en el linter de biblia y faltaba aqui.
  const noIlustrable = hasText(plan?.myths?.[acta.mito]?.not_illustrated);
  if (noIlustrable) {
    if ((acta.escenas || []).length) add("declarada no ilustrable y aun asi trae escenas");
    return { ok: !errs.length, errs, avisos };
  }

  const escenas = acta.escenas || [];
  if (escenas.length < 3) add(`${escenas.length} escenas: la doctrina entrada-acto-huella pide al menos tres`);
  const papeles = new Set(escenas.map((e) => e.papel));
  for (const p of PAPELES) if (!papeles.has(p)) add(`falta la escena de papel «${p}»`);

  // Lo que este relato cita, mas las fichas que cubren a lo citado.
  const citadas = new Set();
  for (const r of plan?.myths?.[acta.mito]?.entity_refs || []) {
    citadas.add(r.entity_id);
    const cb = plan.entities?.[r.entity_id]?.covered_by;
    if (cb) citadas.add(cb);
  }

  const cubiertos = new Set();
  for (const [i, e] of escenas.entries()) {
    const donde = e.id || `escena ${i + 1}`;
    if (!PAPELES.includes(e.papel)) add(`${donde}: papel invalido «${e.papel}»`);
    if (!ENCUADRES.includes(e.encuadre)) add(`${donde}: encuadre invalido «${e.encuadre}»`);
    if (!e.composicion?.trim()) add(`${donde}: sin composicion`);
    if (!e.momento?.trim()) add(`${donde}: sin momento`);
    for (const id of e.cubre || []) {
      if (!vistos.has(id)) add(`${donde}: cubre ${id}, que no esta en el acta`);
      cubiertos.add(id);
    }
    if (!(e.cubre || []).length) add(`${donde}: no cubre ningun nudo`);
    if (!(e.entity_refs || []).length) add(`${donde}: sin entidades: una escena se compone con fichas de la biblia`);
    for (const eid of e.entity_refs || []) {
      const ent = plan?.entities?.[eid];
      if (!ent) { add(`${donde}: ${eid} no existe en la biblia de este corpus`); continue; }
      // Misma leccion que los 29 relatos sin primaria: componer con algo que no
      // llega a lamina deja la escena sin nada que dibujar.
      if (ent.visual_status !== "required") add(`${donde}: ${eid} esta ${ent.visual_status} y no tiene lamina`);
      // Componer con la ficha que CUBRE a una figura citada es correcto y
      // necesario —el padre de la trampa vive dentro de la gente katia—, pero
      // traer una entidad que el relato ni cita ni cubre es añadir al relato.
      else if (!citadas.has(eid)) avisos.push(`${donde}: ${eid} no lo cita este relato ni cubre a nada que lo cite`);
    }
    // Regla de bloque, no de triptico. Un triptico son tres escenas y reparte
    // entre ellas TODOS los nudos: que el acto cargue nueve es lo normal, no un
    // sintoma. Solo avisa cuando alguien esta diseñando a nivel de bloque.
    if (escenas.length > 3 && (e.cubre || []).length > 3) {
      avisos.push(`${donde}: cubre ${e.cubre.length} nudos — a nivel de bloque eso señala que faltan escenas`);
    }
  }
  const sinCubrir = nudos.filter((n) => !cubiertos.has(n.id)).map((n) => n.id);
  if (sinCubrir.length) add(`nudos que ninguna escena muestra: ${sinCubrir.join(", ")}`);

  return { ok: !errs.length, errs, avisos };
}

async function main() {
  loadEnv();
  const args = process.argv.slice(2);
  const iC = args.indexOf("--corpus");
  const rutas = iC >= 0
    ? readdirSync(join(ACTAS, args[iC + 1])).filter((n) => n.endsWith(".json")).map((n) => join(ACTAS, args[iC + 1], n))
    : args.filter((a) => a.endsWith(".json"));
  if (!rutas.length) throw new Error("sin actas que revisar");

  const cs = process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL || process.env.POSTGRES_URL;
  const client = new pg.Client({ connectionString: cs, ssl: { rejectUnauthorized: false } });
  await client.connect();
  const planes = {};
  let malas = 0;
  for (const ruta of rutas) {
    const acta = JSON.parse(readFileSync(ruta, "utf8"));
    planes[acta.corpus] ||= JSON.parse(readFileSync(join(PLANES, `${acta.corpus}.v3.json`), "utf8"));
    const { rows } = await client.query("SELECT mito, content FROM myths WHERE slug = $1", [acta.canon_slug]);
    const canon = acta.canon_field === "content" ? stripHtml(rows[0]?.content) : rows[0]?.mito || "";
    const r = revisarActa(acta, { canon, plan: planes[acta.corpus] });
    if (!r.ok) {
      malas += 1;
      console.log(`✖ ${acta.corpus}/${acta.mito}`);
      for (const e of r.errs) console.log(`    ${e}`);
    } else {
      console.log(`✔ ${acta.corpus}/${acta.mito} · ${acta.nudos.length} nudos · N=${acta.N_propuesto} · ${acta.escenas.length} escenas`
        + (r.avisos.length ? `  (${r.avisos.length} avisos)` : ""));
    }
    for (const a of r.avisos) console.log(`    aviso: ${a}`);
  }
  await client.end();
  console.log(`\n${rutas.length - malas}/${rutas.length} actas en verde`);
  if (malas) process.exitCode = 1;
}

if (import.meta.url === `file://${process.argv[1]}`) main().catch((e) => { console.error(e.message); process.exitCode = 1; });
