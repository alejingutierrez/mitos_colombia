#!/usr/bin/env node
/**
 * Prepara una tanda de biblia V3, una capa a la vez y en el orden del taller.
 *
 * El orden lo fijo el editor (wayuu V4, 2026-09-17; chami V1) y aqui no se
 * negocia: primero la GENTE de la comunidad —los seis tipos base, que fijan la
 * cara, el cuerpo y el vestido—, despues los mortales con nombre, despues los
 * miticos y al final los colectivos. Luego animales, atrezo y mundo. Si el
 * paisaje o el dios salen antes, la persona se acomoda a un mundo decidido sin
 * ella. El piloto 01 del 2026-09-24 mezclo deidades y colectivos sin tipos y se
 * rechazo por eso.
 *
 * Tres compuertas antes de escribir nada, por corpus:
 *   1. la capa anterior esta aprobada por el editor en
 *      content/mitos-visuales/_openai/<corpus>/biblia-v3/APROBACIONES.json
 *   2. el canon de Neon es el que el plan congelo (misma huella)
 *   3. el inventario esta congelado y `--stage design` da PASS
 *
 *   node scripts/mitos/prepare-biblia-tanda-v3.mjs --corpus koguis,katios --capa tipos
 *   node scripts/mitos/prepare-biblia-tanda-v3.mjs --corpus koguis --capa mortales --maximo 14
 *   node scripts/mitos/prepare-biblia-tanda-v3.mjs --aprobar koguis --capa tipos --tanda tanda-01-tipos
 *
 * Una capa grande se parte con --maximo: cada llamada toma las fichas de la
 * capa que ninguna tanda anterior preparo. Emite, sin sobrescribir nunca:
 *   content/mitos-visuales/_openai/<corpus>/biblia-v3/<tanda>/
 *     freeze.json  requests.jsonl  prompts/<modelo>--<vista>.prompt.txt
 * y la salida de imagen en output/imagegen/<corpus>/biblia-v3/<tanda>/.
 */
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import pg from "pg";
import { validateBibleV3 } from "./biblia-v3.mjs";
import { ensamblar } from "./prepare-biblia-probe-v3.mjs";

const PLANES = "content/mitos-visuales";
const SIZE = { "1:1": "1024x1024", "16:9": "1536x1024", "9:16": "1024x1536", "2:3": "1024x1536", "3:2": "1536x1024" };
const MODELO = "gpt-image-2.5-sunburst";
const FIELD_SEPARATOR = "\n@@campo@@\n";
const RECORD_SEPARATOR = "\n@@mito@@\n";

const esTipo = (id) => id.startsWith("tipo_");

/** Las capas, en su orden. Cada una decide que fichas le tocan. */
export const CAPAS = [
  { id: "tipos", titulo: "personas · la gente de la comunidad", toma: (e, id) => e.kind === "personaje" && esTipo(id) },
  { id: "mortales", titulo: "personas · mortales con nombre", toma: (e, id) => e.kind === "personaje" && !esTipo(id) },
  { id: "miticos", titulo: "personas · miticos y fuerzas", toma: (e) => e.kind === "deidad_fuerza" },
  { id: "colectivos", titulo: "personas · colectivos", toma: (e) => e.kind === "colectivo" },
  // `criatura` va con los animales: el cuerpo no humano es donde el pelaje y
  // la anatomia tiran del volumen, y ahi se aplica la regla invertida.
  { id: "animales", titulo: "animales y criaturas", toma: (e) => e.kind === "animal" || e.kind === "criatura" },
  { id: "atrezo", titulo: "atrezo, objetos y plantas", toma: (e) => e.kind === "objeto" || e.kind === "planta" },
  { id: "mundo", titulo: "arquitectura, lugares, paisajes y fenomenos", toma: (e) => ["arquitectura", "lugar", "paisaje", "fenomeno"].includes(e.kind) },
];

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

const baseDir = (corpus) => resolve(PLANES, "_openai", corpus, "biblia-v3");
const aprobacionesPath = (corpus) => join(baseDir(corpus), "APROBACIONES.json");

function aprobaciones(corpus) {
  return existsSync(aprobacionesPath(corpus)) ? JSON.parse(readFileSync(aprobacionesPath(corpus), "utf8")) : {};
}

/** Los tipos solo se saltan si el inventario declara por que no existen. */
const tiposDeclaradosAusentes = (plan) =>
  JSON.stringify(plan.inventory?.declared_absences || "").toLowerCase().includes("tipo");

/**
 * Una capa sin fichas en el corpus no bloquea la siguiente, salvo los tipos:
 * sin la gente de la comunidad no hay capa de personas.
 */
function capaAnteriorPendiente(plan, corpus, capaId) {
  const aprobadas = aprobaciones(corpus);
  const indice = CAPAS.findIndex((c) => c.id === capaId);
  for (const capa of CAPAS.slice(0, indice)) {
    const tiene = (capa.id === "tipos" && !tiposDeclaradosAusentes(plan)) || Object.entries(plan.models || {}).some(([, m]) => {
      const id = m.entity_refs[0];
      return capa.toma(plan.entities[id] || {}, id);
    });
    if (tiene && !aprobadas[capa.id]) return capa.id;
  }
  return null;
}

async function huellaVigente(client, plan) {
  const fields = plan.source_snapshot.fields;
  const { rows } = await client.query(
    `SELECT m.slug, m.mito, m.content, em.historia, em.versiones, em.research_notes
       FROM myths m LEFT JOIN editorial_myths em ON em.source_myth_id = m.id
      WHERE m.slug = ANY($1) ORDER BY m.slug`,
    [plan.corpus.myth_slugs],
  );
  const canonical = rows
    .map((row) => [row.slug, ...fields.map((field) => String(row[field] ?? ""))].join(FIELD_SEPARATOR))
    .join(RECORD_SEPARATOR);
  return createHash("sha256").update(canonical, "utf8").digest("hex");
}

/** Los modelos que alguna tanda anterior de este corpus ya preparo. */
function yaPreparados(corpus) {
  const dir = baseDir(corpus);
  if (!existsSync(dir)) return new Set();
  const hechos = new Set();
  for (const tanda of readdirSync(dir)) {
    const freeze = join(dir, tanda, "freeze.json");
    if (!existsSync(freeze) || existsSync(join(dir, tanda, "RECHAZADO.md"))) continue;
    for (const f of JSON.parse(readFileSync(freeze, "utf8")).fichas || []) hechos.add(f.modelo);
  }
  return hechos;
}

/** Lo central primero: la entidad que mas relatos sostiene. */
function peso(plan, model) {
  return (plan.entities[model.entity_refs[0]]?.myth_refs || []).length;
}

/**
 * El modelo esculpe por defecto, y cuerpo y cara se arreglan en pasos
 * distintos: chami V1 necesito tres pilotos para aprenderlo (v1 esculpido, v2
 * arreglo el cuerpo, v3 la cara). Los planes V3 ya nombran el rostro plano,
 * pero no el cuerpo. Esta es la regla aprobada, con las cuentas de piezas de
 * `refuerzo-papel-v3.md`, y va justo despues del bloque de tecnica.
 */
export const CUERPO_Y_CARA = [
  "CUERPO Y CARA, DENTRO DE ESA TECNICA:",
  "- El cuerpo NO se esculpe: torso, brazos y piernas son dos o tres RECORTES PLANOS grandes de cartulina mate, con el canto del corte visible y sin degradado ni modelado dentro de la pieza. La profundidad la da la sombra nitida entre capas, no el volumen.",
  "- La cara es un OVALO PLANO de un solo tono parejo, sin luz ni sombra dentro; encima, como piezas recortadas aparte, el pelo en dos o tres formas, dos cejas, dos ojos minimos y una boca. La nariz se insinua por el borde del recorte, nunca sombreada. La edad se lee por proporcion, postura y pelo, no por arrugas pintadas.",
  "- Una mano es una sola pieza. Si alguien mira la lamina y piensa «lo esculpieron», esta mal: tiene que pensar «lo recortaron y lo pegaron por capas».",
].join("\n");

const CAPAS_CON_CUERPO = new Set(["tipos", "mortales", "miticos", "colectivos"]);

/** Una vista de estado nombra su estado; la ficha canonica no dice nada mas. */
function promptDeVista(model, view, capaId) {
  let base = ensamblar(model.prompt_spec);
  if (CAPAS_CON_CUERPO.has(capaId)) {
    base = base.replace(/\n\nUse case: /, `\n\n${CUERPO_Y_CARA}\n\nUse case: `);
  }
  if (view.id === "canon" || !view.states?.length) return base;
  const linea = `Estado que muestra esta lamina: ${view.states.join(", ")}. Es la misma figura de su hoja canonica, con la misma cara, proporcion y paleta; cambia solo lo que el estado cambia.`;
  return base.replace(/\nPrimary request: /, `\n${linea}\nPrimary request: `);
}

function siguienteNumero(corpus) {
  const dir = baseDir(corpus);
  if (!existsSync(dir)) return 1;
  const nums = readdirSync(dir).map((n) => n.match(/^tanda-(\d+)-/)?.[1]).filter(Boolean).map(Number);
  return nums.length ? Math.max(...nums) + 1 : 1;
}

function aprobar(args) {
  const corpus = String(args.aprobar);
  const capa = String(args.capa || "");
  const tanda = String(args.tanda || "");
  if (!CAPAS.some((c) => c.id === capa)) throw new Error(`--capa debe ser una de: ${CAPAS.map((c) => c.id).join(", ")}`);
  if (!existsSync(join(baseDir(corpus), tanda, "freeze.json"))) throw new Error(`no existe la tanda ${tanda} de ${corpus}`);
  const todas = aprobaciones(corpus);
  todas[capa] = {
    tandas: [...new Set([...(todas[capa]?.tandas || []), tanda])],
    aprobada_por: String(args.por || "Propietario editorial del proyecto"),
    fecha: new Date().toISOString().slice(0, 10),
    ...(args.nota ? { nota: String(args.nota) } : {}),
  };
  mkdirSync(baseDir(corpus), { recursive: true });
  writeFileSync(aprobacionesPath(corpus), `${JSON.stringify(todas, null, 2)}\n`);
  console.log(`${corpus}: capa ${capa} aprobada (${todas[capa].tandas.join(", ")})`);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.aprobar) return aprobar(args);

  const corpora = String(args.corpus || "").split(",").map((s) => s.trim()).filter(Boolean);
  const capa = CAPAS.find((c) => c.id === String(args.capa || ""));
  const maximo = args.maximo ? Number(args.maximo) : Infinity;
  const calidad = String(args.calidad || "high");
  if (!corpora.length) throw new Error("usa --corpus a,b,c");
  if (!capa) throw new Error(`--capa debe ser una de, en este orden: ${CAPAS.map((c) => c.id).join(" -> ")}`);

  loadEnv();
  const client = new pg.Client({
    connectionString: process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL || process.env.POSTGRES_URL,
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();

  const resumen = [];
  for (const corpus of corpora) {
    const planPath = join(PLANES, `${corpus}.v3.json`);
    if (!existsSync(planPath)) throw new Error(`no existe ${planPath}`);
    const plan = JSON.parse(readFileSync(planPath, "utf8"));
    const fuera = (nota) => resumen.push({ corpus, laminas: 0, nota: `FUERA: ${nota}` });

    const pendiente = capaAnteriorPendiente(plan, corpus, capa.id);
    if (pendiente) { fuera(`la capa «${pendiente}» no esta aprobada; va antes que «${capa.id}»`); continue; }
    if (plan.inventory?.status !== "approved_frozen" || !plan.inventory?.frozen) { fuera(`inventario en «${plan.inventory?.status}», no congelado`); continue; }
    if ((await huellaVigente(client, plan)) !== plan.source_snapshot.sha256) { fuera("el canon de Neon ya no es el congelado: descongelar y releer"); continue; }
    const design = validateBibleV3(plan, { stage: "design" });
    if (!design.ok) { fuera(`--stage design BLOCKED (${design.errors[0]?.path || "?"})`); continue; }

    const hechos = yaPreparados(corpus);
    const modelos = Object.entries(plan.models || {})
      .filter(([, m]) => m.prompt_spec)
      .filter(([, m]) => capa.toma(plan.entities[m.entity_refs[0]] || {}, m.entity_refs[0]))
      .sort(([ia, a], [ib, b]) => peso(plan, b) - peso(plan, a) || ia.localeCompare(ib));
    const elegidos = modelos.filter(([id]) => !hechos.has(id)).slice(0, maximo);
    if (!elegidos.length) {
      resumen.push({ corpus, laminas: 0, nota: modelos.length ? `capa ${capa.id} ya preparada entera` : `sin fichas de la capa ${capa.id}` });
      continue;
    }

    const tanda = String(args.tanda || `tanda-${String(siguienteNumero(corpus)).padStart(2, "0")}-${capa.id}`);
    const dir = join(baseDir(corpus), tanda);
    if (existsSync(dir)) throw new Error(`ya existe ${dir}: cada preparacion va a una carpeta nueva`);
    const salida = resolve("output/imagegen", corpus, "biblia-v3", tanda);
    mkdirSync(join(dir, "prompts"), { recursive: true });
    mkdirSync(salida, { recursive: true });

    const requests = [];
    const fichas = [];
    for (const [id, m] of elegidos) {
      const entity = plan.entities[m.entity_refs[0]];
      for (const view of m.views) {
        const job = `${id}--${view.id}`;
        const prompt = promptDeVista(m, view, capa.id);
        writeFileSync(join(dir, "prompts", `${job}.prompt.txt`), `${prompt}\n`);
        requests.push({
          prompt, model: MODELO, size: SIZE[view.aspect] || "1024x1024",
          quality: calidad, output_format: "jpeg", out: `${job}.jpeg`,
        });
        fichas.push({
          job, modelo: id, entidad: entity.name, categoria: entity.kind, vista: view.id,
          estados: view.states, aspect: view.aspect, mitos: entity.myth_refs,
          sensibilidad: entity.sensitivity, largo_prompt: prompt.length,
          prompt_sha256: createHash("sha256").update(prompt).digest("hex"),
        });
      }
    }
    const freeze = {
      schema: "biblia-tanda-freeze/v3",
      corpus, comunidad: plan.community, tanda, capa: capa.id, capa_titulo: capa.titulo,
      fecha: new Date().toISOString().slice(0, 10),
      modelo: MODELO, calidad, generador: "prepare-biblia-tanda-v3.mjs · ensamblar() de prepare-biblia-probe-v3.mjs",
      plan: { ruta: planPath, sha256: createHash("sha256").update(readFileSync(planPath)).digest("hex") },
      canon: { sha256: plan.source_snapshot.sha256, verificado_en: new Date().toISOString() },
      capas_aprobadas_antes: Object.keys(aprobaciones(corpus)),
      fichas_en_capa: modelos.length, fichas_ya_preparadas: modelos.length - modelos.filter(([id]) => !hechos.has(id)).length,
      fichas,
    };
    writeFileSync(join(dir, "freeze.json"), `${JSON.stringify(freeze, null, 2)}\n`);
    writeFileSync(join(dir, "requests.jsonl"), `${requests.map((r) => JSON.stringify(r)).join("\n")}\n`);
    resumen.push({ corpus, tanda, laminas: requests.length, nota: `${elegidos.length} de ${modelos.length} fichas de la capa ${capa.id}` });
  }
  await client.end();

  for (const r of resumen) console.log(String(r.corpus).padEnd(28), String(r.laminas).padStart(4), " ", r.nota);
  const listos = resumen.filter((r) => r.laminas);
  console.log(`\n${listos.reduce((a, r) => a + r.laminas, 0)} laminas en total`);
  // image_gen.py exige --out-dir y de `out` solo conserva el nombre de
  // archivo: se lanza un corpus por proceso, cada uno con su carpeta.
  if (listos.length) console.log("\nlanzar (un corpus por proceso):");
  for (const r of listos) {
    console.log(`  /usr/bin/python3 ~/.codex/skills/.system/imagegen/scripts/image_gen.py generate-batch --no-augment --concurrency 3 --max-attempts 2 \\
    --input content/mitos-visuales/_openai/${r.corpus}/biblia-v3/${r.tanda}/requests.jsonl \\
    --out-dir output/imagegen/${r.corpus}/biblia-v3/${r.tanda}`);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) main().catch((e) => { console.error(e.message); process.exit(1); });
