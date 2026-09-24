#!/usr/bin/env node
/**
 * Sonda de peso del prompt para las 42 biblias.
 *
 * No es el piloto. El piloto es por corpus, exige `pilot.status: "approved"` y
 * termina en un contact sheet que mira el propietario editorial. Montar 42
 * pilotos antes de saber si el prompt se sostiene seria rehacerlos todos si la
 * respuesta es que no.
 *
 * Esto responde **una sola pregunta**: con 6.221 caracteres de media, ¿el
 * modelo conserva la tecnica de papel recortado o vuelve a caer en
 * fotorrealismo, como la tanda 01 con 6.341?
 *
 * Por eso la seleccion no es representativa sino **adversa**: los prompts mas
 * pesados que existen, en las categorias donde la tecnica falla de maneras
 * distintas —el rostro que el modelo esculpe, el pelaje que vuelve papel mache,
 * el paisaje que pierde el sangrado—, mas dos controles en la mediana.
 *
 *   node scripts/mitos/prepare-biblia-probe-v3.mjs
 *   node scripts/mitos/prepare-biblia-probe-v3.mjs --batch sonda-02
 */
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join, resolve } from "node:path";

const PLANES = "content/mitos-visuales";
const SIZE = { "1:1": "1024x1024", "16:9": "1536x1024", "9:16": "1024x1536" };

/** Las tres maneras distintas en que la tecnica se ha roto antes. */
const TRAMPAS = [
  { kind: "personaje", trampa: "el rostro que el modelo esculpe en vez de recortar" },
  { kind: "criatura", trampa: "el cuerpo no humano, donde la anatomia tira del volumen" },
  { kind: "animal", trampa: "el pelaje pieza por pieza, que produjo papel mache" },
  { kind: "paisaje", trampa: "el mundo a sangre, que se convierte en diorama sobre mesa" },
  { kind: "colectivo", trampa: "el grupo, donde se pierde el canto de cada pieza" },
  { kind: "objeto", trampa: "el objeto suelto, que se vuelve fotografia de producto" },
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

const largo = (ps) => Object.values(ps).filter((v) => v != null)
  .map((v) => (Array.isArray(v) ? v.join("; ") : String(v))).join("\n").length;

/**
 * La tecnica ABRE y CIERRA. Todo lo demas va en medio. Es la forma exacta que
 * corrigio la tanda 02, y la unica parte del ensamblado que no se negocia.
 */
export function ensamblar(ps) {
  const lista = (etiqueta, xs) => (xs?.length ? [etiqueta, ...xs.map((x) => `- ${x}${/[.!?]$/.test(x) ? "" : "."}`)] : []);
  return [
    ps.technique_first,
    "",
    `Use case: ${ps.use_case}`,
    `Asset type: ${ps.asset_type}`,
    `Primary request: ${ps.primary_request}`,
    `Composition/framing: ${ps.composition_framing}`,
    `Lighting/mood: ${ps.lighting_mood}`,
    `Materials/textures: ${ps.materials_textures}`,
    ...(ps.era ? [`Era: ${ps.era}`] : []),
    "",
    ...lista("CONSTRAINTS:", ps.constraints),
    ...lista("AVOID:", ps.avoid),
    "- Prototipo editorial interno y reversible; no afirma canon, revision comunitaria ni publicacion.",
    "",
    ps.technique_close,
  ].join("\n");
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const batch = String(args.batch || "sonda-peso-01");

  // Todos los modelos de los 42, con su peso.
  const todos = [];
  for (const f of readdirSync(PLANES).filter((n) => n.endsWith(".v3.json") && n !== "wayuu.v3.json")) {
    const plan = JSON.parse(readFileSync(join(PLANES, f), "utf8"));
    for (const [id, m] of Object.entries(plan.models || {})) {
      if (!m.prompt_spec) continue;
      const entity = plan.entities[m.entity_refs[0]];
      todos.push({ corpus: f.replace(/\.v3\.json$/, ""), id, m, entity, peso: largo(m.prompt_spec) });
    }
  }

  // Dos por trampa: el prompt mas pesado de esa categoria y el siguiente de
  // otro corpus, para no probar seis veces la misma biblia.
  const elegidos = [];
  for (const { kind, trampa } of TRAMPAS) {
    const cand = todos.filter((x) => x.entity.kind === kind).sort((a, b) => b.peso - a.peso);
    for (const c of cand) {
      if (elegidos.length && elegidos.filter((e) => e.corpus === c.corpus).length >= 2) continue;
      elegidos.push({ ...c, trampa, papel: "adverso: el mas pesado de su categoria" });
      break;
    }
  }
  // El control tiene que estar en el peso que YA salio en papel, no en la
  // mediana: un control a 6.500 esta por encima de la linea que fallo y no
  // controla nada. Se buscan dos por debajo de 5.022 contando el ensamblado,
  // y en categorias que la tanda adversa no haya tocado ya.
  const tocadas = new Set(elegidos.map((e) => e.entity.kind));
  const ligeros = [...todos].sort((a, b) => a.peso - b.peso).filter((x) => x.peso + 300 < 5022);
  for (const c of ligeros) {
    if (elegidos.length >= 8) break;
    if (tocadas.has(c.entity.kind) && ligeros.some((o) => !tocadas.has(o.entity.kind) && o.peso < 4700)) continue;
    if (elegidos.some((e) => e.corpus === c.corpus && e.entity.kind === c.entity.kind)) continue;
    tocadas.add(c.entity.kind);
    elegidos.push({ ...c, trampa: "control", papel: "control: peso que ya salio en papel" });
  }

  const dir = resolve(PLANES, "_openai/_sonda", batch);
  const salida = resolve("output/imagegen/biblias-v3", batch);
  mkdirSync(join(dir, "prompts"), { recursive: true });
  mkdirSync(salida, { recursive: true });

  const requests = [];
  const manifiesto = [];
  for (const e of elegidos) {
    const prompt = ensamblar(e.m.prompt_spec);
    const jobId = `${e.corpus}--${e.id}`;
    writeFileSync(join(dir, "prompts", `${jobId}.prompt.txt`), `${prompt}\n`);
    // Sin `out` los lotes paralelos se pisan y se pagan imagenes que no quedan.
    requests.push({
      prompt, model: "gpt-image-2.5-sunburst", size: SIZE[e.m.views[0].aspect] || "1024x1024",
      quality: "medium", output_format: "jpeg", out: join(salida, `${jobId}.jpeg`),
    });
    manifiesto.push({
      job: jobId, corpus: e.corpus, entidad: e.entity.name, categoria: e.entity.kind,
      papel: e.papel, trampa: e.trampa, peso_spec: e.peso, peso_prompt: prompt.length,
      sha256: createHash("sha256").update(prompt).digest("hex").slice(0, 16),
    });
  }
  writeFileSync(join(dir, "manifiesto.json"), `${JSON.stringify(manifiesto, null, 2)}\n`);
  writeFileSync(join(dir, "requests.jsonl"), `${requests.map((r) => JSON.stringify(r)).join("\n")}\n`);

  console.log(`sonda ${batch} - ${elegidos.length} laminas\n`);
  console.log("corpus".padEnd(24), "categoria".padEnd(12), "spec".padStart(6), "prompt".padStart(7), "  trampa");
  for (const m of manifiesto) {
    console.log(String(m.corpus).padEnd(24), String(m.categoria).padEnd(12),
      String(m.peso_spec).padStart(6), String(m.peso_prompt).padStart(7), "  " + m.trampa.slice(0, 46));
  }
  console.log(`\npaquete: ${dir}`);
  console.log(`salida:  ${salida}`);
}

if (import.meta.url === `file://${process.argv[1]}`) main();
