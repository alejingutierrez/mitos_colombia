#!/usr/bin/env node
/**
 * Prepara una tanda de biblia V3 para los 42 corpus, una capa a la vez.
 *
 * El orden lo fijo el editor el 2026-09-17: personas -> animales -> atrezo ->
 * mundo, con revision entre capas. La cara es lo que todo lo demas respeta; si
 * el paisaje sale antes, la figura se acomoda a un mundo decidido sin ella.
 * Por eso aqui no existe una tanda "de todo": --capa es obligatoria.
 *
 * Tampoco existe una tanda sobre un canon que ya no es el que se inventario.
 * Antes de escribir nada se relee `mito` en Neon y se compara con la huella
 * que cada acta guardo al congelarse. Un corpus con relatos reescritos queda
 * fuera de la tanda hasta que su inventario se reconcilie: dibujar las
 * entidades de un texto que ya no existe es el error de la biblia wayuu V3.
 *
 *   node scripts/mitos/prepare-biblia-tanda-v3.mjs --corpus koguis,katios \
 *     --capa personas --tanda piloto-personas --por-corpus 3
 *   node scripts/mitos/prepare-biblia-tanda-v3.mjs --corpus koguis \
 *     --capa personas --tanda tanda-01-personas
 *
 * Emite, por corpus y sin sobrescribir nunca:
 *   content/mitos-visuales/_openai/<corpus>/biblia-v3/<tanda>/
 *     freeze.json  requests.jsonl  prompts/<modelo>--<vista>.prompt.txt
 * y la salida de imagen en output/imagegen/<corpus>/biblia-v3/<tanda>/.
 */
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import pg from "pg";
import { ensamblar } from "./prepare-biblia-probe-v3.mjs";

const PLANES = "content/mitos-visuales";
const ACTAS = "content/mitos-visuales/actas";
const SIZE = { "1:1": "1024x1024", "16:9": "1536x1024", "9:16": "1024x1536", "2:3": "1024x1536", "3:2": "1536x1024" };
const MODELO = "gpt-image-2.5-sunburst";

/**
 * Las once categorias en las cuatro capas. `criatura` va con los animales:
 * es donde el cuerpo no humano tira del volumen, y ahi se aplica la regla
 * invertida del pelaje. Un ser humanoide que el corpus llama criatura se
 * mueve de capa en el plan, no aqui.
 */
export const CAPAS = {
  personas: ["personaje", "deidad_fuerza", "colectivo"],
  animales: ["animal", "criatura"],
  atrezo: ["objeto", "planta"],
  mundo: ["arquitectura", "lugar", "paisaje", "fenomeno"],
};

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

/** Mitos del corpus cuyo canon ya no es el que el acta congelo. */
async function derivaDelCanon(client, corpus) {
  const dir = join(ACTAS, corpus);
  if (!existsSync(dir)) return { actas: 0, cambiados: ["(sin actas)"] };
  const cambiados = [];
  const files = readdirSync(dir).filter((f) => f.endsWith(".json"));
  for (const f of files) {
    const acta = JSON.parse(readFileSync(join(dir, f), "utf8"));
    const field = acta.canon_field === "content" ? "content" : "mito";
    const { rows } = await client.query(`SELECT ${field} AS t FROM myths WHERE slug = $1`, [acta.canon_slug || acta.mito]);
    const sha = createHash("sha256").update(String(rows[0]?.t ?? ""), "utf8").digest("hex");
    if (sha !== acta.canon_sha256) cambiados.push(acta.mito);
  }
  return { actas: files.length, cambiados };
}

/** Lo central primero: la entidad que mas relatos sostiene. */
function peso(plan, model) {
  const entity = plan.entities[model.entity_refs[0]] || {};
  return (entity.myth_refs || []).length;
}

/** Una vista de estado nombra su estado; la ficha canonica no dice nada mas. */
function promptDeVista(model, view) {
  const base = ensamblar(model.prompt_spec);
  if (view.id === "canon" || !view.states?.length) return base;
  const linea = `Estado que muestra esta lamina: ${view.states.join(", ")}. Es la misma figura de su hoja canonica, con la misma cara, proporcion y paleta; cambia solo lo que el estado cambia.`;
  return base.replace(/\nPrimary request: /, `\n${linea}\nPrimary request: `);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const corpora = String(args.corpus || "").split(",").map((s) => s.trim()).filter(Boolean);
  const capa = String(args.capa || "");
  const tanda = String(args.tanda || "");
  const porCorpus = args["por-corpus"] ? Number(args["por-corpus"]) : Infinity;
  const calidad = String(args.calidad || "high");
  if (!corpora.length) throw new Error("usa --corpus a,b,c");
  if (!CAPAS[capa]) throw new Error(`--capa debe ser una de: ${Object.keys(CAPAS).join(", ")}`);
  if (!/^[a-z0-9-]+$/.test(tanda)) throw new Error("--tanda <nombre-en-kebab> es obligatoria");

  loadEnv();
  const client = new pg.Client({
    connectionString: process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL || process.env.POSTGRES_URL,
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();

  const resumen = [];
  const todas = [];
  for (const corpus of corpora) {
    const planPath = join(PLANES, `${corpus}.v3.json`);
    if (!existsSync(planPath)) throw new Error(`no existe ${planPath}`);
    const plan = JSON.parse(readFileSync(planPath, "utf8"));

    const deriva = await derivaDelCanon(client, corpus);
    if (deriva.cambiados.length) {
      resumen.push({ corpus, laminas: 0, nota: `FUERA: ${deriva.cambiados.length}/${deriva.actas} relatos reescritos desde el inventario` });
      continue;
    }

    const dir = resolve(PLANES, "_openai", corpus, "biblia-v3", tanda);
    if (existsSync(dir)) throw new Error(`ya existe ${dir}: cada preparacion va a una carpeta nueva`);
    const salida = resolve("output/imagegen", corpus, "biblia-v3", tanda);

    const modelos = Object.entries(plan.models || {})
      .filter(([, m]) => m.prompt_spec && CAPAS[capa].includes(plan.entities[m.entity_refs[0]]?.kind))
      .filter(([, m]) => plan.entities[m.entity_refs[0]]?.sensitivity !== "consult_required")
      .sort(([ia, a], [ib, b]) => peso(plan, b) - peso(plan, a) || ia.localeCompare(ib));

    // En un piloto se reparte entre categorias antes de repetir ninguna.
    let elegidos = modelos;
    if (Number.isFinite(porCorpus)) {
      elegidos = [];
      const colas = CAPAS[capa].map((k) => modelos.filter(([, m]) => plan.entities[m.entity_refs[0]].kind === k));
      while (elegidos.length < porCorpus && colas.some((c) => c.length)) {
        for (const c of colas) if (c.length && elegidos.length < porCorpus) elegidos.push(c.shift());
      }
    }
    if (!elegidos.length) {
      resumen.push({ corpus, laminas: 0, nota: `sin fichas de la capa ${capa}` });
      continue;
    }

    mkdirSync(join(dir, "prompts"), { recursive: true });
    mkdirSync(salida, { recursive: true });
    const requests = [];
    const fichas = [];
    for (const [id, m] of elegidos) {
      const entity = plan.entities[m.entity_refs[0]];
      for (const view of m.views) {
        const job = `${id}--${view.id}`;
        const prompt = promptDeVista(m, view);
        writeFileSync(join(dir, "prompts", `${job}.prompt.txt`), `${prompt}\n`);
        // Sin `out` los lotes paralelos se pisan: se pagan y no quedan en disco.
        requests.push({
          prompt, model: MODELO, size: SIZE[view.aspect] || "1024x1024",
          quality: calidad, output_format: "jpeg", out: join(salida, `${job}.jpeg`),
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
      corpus, comunidad: plan.community, tanda, capa, categorias: CAPAS[capa],
      piloto: Number.isFinite(porCorpus), fecha: new Date().toISOString().slice(0, 10),
      modelo: MODELO, calidad, generador: "prepare-biblia-tanda-v3.mjs · ensamblar() de prepare-biblia-probe-v3.mjs",
      plan: { ruta: planPath, sha256: createHash("sha256").update(readFileSync(planPath)).digest("hex") },
      canon: { actas_verificadas: deriva.actas, relatos_reescritos: 0, verificado_en: new Date().toISOString() },
      fichas_en_capa: modelos.length, fichas,
    };
    writeFileSync(join(dir, "freeze.json"), `${JSON.stringify(freeze, null, 2)}\n`);
    writeFileSync(join(dir, "requests.jsonl"), `${requests.map((r) => JSON.stringify(r)).join("\n")}\n`);
    todas.push(...requests);
    resumen.push({ corpus, laminas: requests.length, nota: `${elegidos.length} de ${modelos.length} fichas de la capa · ${dir}` });
  }
  await client.end();

  for (const r of resumen) console.log(String(r.corpus).padEnd(28), String(r.laminas).padStart(4), " ", r.nota);
  console.log(`\n${todas.length} laminas en total`);
  // image_gen.py exige --out-dir y de `out` solo conserva el nombre de
  // archivo: una tanda de varios corpus se lanza un corpus por vez.
  console.log("\nlanzar (un corpus por proceso, cada uno con su --out-dir):");
  for (const r of resumen.filter((x) => x.laminas)) {
    console.log(`  /usr/bin/python3 ~/.codex/skills/.system/imagegen/scripts/image_gen.py generate-batch --no-augment --concurrency 3 --max-attempts 2 \\
    --input content/mitos-visuales/_openai/${r.corpus}/biblia-v3/${tanda}/requests.jsonl \\
    --out-dir output/imagegen/${r.corpus}/biblia-v3/${tanda}`);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) main().catch((e) => { console.error(e.message); process.exit(1); });
