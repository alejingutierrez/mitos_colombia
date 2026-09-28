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
 *   node scripts/mitos/prepare-biblia-tanda-v3.mjs --corpus pirsa --capa tipos --modelos tipo_nino__identity_sheet
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
  { id: "mundo", titulo: "arquitectura y fenomenos, sobre papel", toma: (e) => ["arquitectura", "fenomeno"].includes(e.kind) },
  // Paisajes y lugares cierran la biblia: son lo unico a fondo completo.
  { id: "paisajes", titulo: "paisajes y lugares, a fondo completo", toma: (e) => ["paisaje", "lugar"].includes(e.kind) },
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
  "- NADA DE CARA DE ANIMACION (el editor la rechazo en los ninos kogui, 2026-09-26): ni ojos grandes y redondos, ni brillo o reflejo en la pupila, ni pestañas marcadas, ni mejillas infladas, ni cabeza de muñeco, ni sonrisa de personaje de pelicula; nada de Pixar, Disney ni anime. Los ojos son dos piezas minimas de papel oscuro, pequeñas y almendradas, sin brillo. Un niño o una muchacha se leen por la talla y la proporcion del cuerpo, no por una cara aniñada de caricatura.",
  "- Una mano es una sola pieza. Si alguien mira la lamina y piensa «lo esculpieron», esta mal: tiene que pensar «lo recortaron y lo pegaron por capas».",
].join("\n");

const CAPAS_CON_CUERPO = new Set(["tipos", "mortales", "miticos", "colectivos"]);

/**
 * Una hoja de una sola figura no se parte. Cuando la ficha declara dos
 * estratos de epoca, el modelo los dibuja lado a lado en el mismo cuadro —la
 * trampa de cuycuyes, repetida en los tipos makaguan— o arma una hoja de
 * referencia con rotulos, como el anciano sikuani. El otro estrato tiene su
 * propia lamina de estado.
 */
export const UNA_SOLA_FIGURA = "UNA SOLA LAMINA: una sola figura, de cuerpo entero, en un solo tiempo y un solo lugar. Sin panel dividido, sin segunda version de la misma persona, sin vistas multiples y sin rotulos, letras ni texto de ninguna clase.";
const CAPAS_DE_UNA_FIGURA = new Set(["tipos", "mortales", "miticos"]);

/**
 * El atrezo kogui salio como hoja de museo: rotulos, cotas, reglas de medida,
 * una silueta humana de «1,70 m» y vinetas de detalle. El proposito de la ficha
 * de objeto («hechura, escala y uso») lo empuja al diagrama. La escala se dice
 * con una mano o con el objeto mismo, nunca con una cota.
 */
export const SIN_LAMINA_TECNICA = "NO ES UNA LAMINA TECNICA NI UNA FICHA DE MUSEO: una sola composicion de papel, sin rotulos, titulos, letras, numeros, cotas, flechas de medida, reglas, siluetas de escala ni vinetas de detalle. Si la escala importa, se lee por una mano o un cuerpo de papel junto al objeto, nunca por una medida escrita.";

/**
 * 23 siluetas describen en la misma frase la forma canonica y la de otro
 * estado («En su estado contemporaneo, el mismo cuerpo con camiseta…»). En la
 * lamina canonica el modelo las dibuja las dos, lado a lado. La canonica se
 * queda sin esas frases; la de estado las conserva, porque son su descripcion.
 */
export function sinOtrosEstados(texto) {
  return String(texto)
    .split(/(?<=[.;])\s+(?=En (?:su |el )?estado\b)/)
    .filter((frase) => !/^En (?:su |el )?estado\b(?! can[oó]nico)/i.test(frase))
    .join(" ");
}

/** Una vista de estado nombra su estado; la ficha canonica no dice nada mas. */
/**
 * Regla del editor, 2026-09-26: una ficha de biblia es una hoja de referencia.
 * Personajes, animales, criaturas, objetos, plantas, arquitectura y fenomenos
 * van SOBRE PAPEL BLANCO HUESO, la figura sola; solo `paisaje` y `lugar`
 * llevan fondo completo a sangre. Los `technique_first` de los planes V3 dicen
 * lo contrario («full bleed hasta los cuatro limites»), asi que aqui se quitan
 * esas frases, la regla de fondo abre y cierra el prompt, y la luz del
 * territorio se cambia por luz de estudio sobre el papel.
 */
export const CON_FONDO = new Set(["paisaje", "lugar"]);
const FRASE_DE_ESCENARIO = /(full bleed|cuatro l[ií]mites|a sangre|dentro del diorama|dentro de la escena|recorta su per[ií]metro|sin borde|cart[oó]n soporte|ciclorama|fondo neutro|mundo llega)/i;
export const FONDO_PAPEL = "FICHA DE REFERENCIA SOBRE PAPEL, MANDA SOBRE TODO LO DEMAS: la figura, hecha de papel recortado y quilling, esta sola sobre un pliego liso de papel blanco hueso mate que ocupa todo el cuadro, fotografiada desde el frente con luz de estudio suave; su propia sombra corta y nitida cae sobre ese papel. Sin escenario, sin paisaje, sin cielo ni horizonte, sin suelo con terreno, sin arquitectura detras y sin figuras secundarias.";
const CIERRE_PAPEL = "Fondo: pliego liso de papel blanco hueso, sin escenario; solo la figura y su sombra.";

// Una medida escrita («-25 x 53 cm-») sale dibujada como cota sobre la lamina.
const MEDIDA = /\s*[-,(]?\s*(de\s+)?\d+([.,]\d+)?\s*(x|×)\s*\d+([.,]\d+)?\s*(cm|mm|m)\b\s*[-,)]?/gi;

const frases = (texto) => String(texto || "").split(/(?<=[.!?])\s+/);
// «Inmersiva» y «esta tecnica manda sobre todo» pertenecen al escenario: en una
// ficha, lo que manda es el pliego de papel.
const sinEscenario = (texto) => frases(texto)
  .filter((f) => !FRASE_DE_ESCENARIO.test(f) && !/manda sobre todo/i.test(f))
  .map((f) => f.replace(/\s+inmersiv[ao]s?/gi, ""))
  .join(" ");

export function sobrePapel(spec) {
  return {
    ...spec,
    technique_first: `${FONDO_PAPEL}\n${sinEscenario(spec.technique_first)}`,
    // La escala de algunas fichas describe una escena («por detras del hombro
    // de otra figura fuera de foco»): en papel eso pinta figuras borrosas.
    composition_framing: String(spec.composition_framing || "")
      .replace(/mundo full bleed hasta los cuatro l[ií]mites/i, "figura sola sobre papel blanco hueso liso, con aire alrededor")
      .split(/(?<=[.;,])\s+/)
      .filter((f) => !/(otra figura|fuera de foco|primer t[ée]rmino|detr[aá]s del hombro|segundo cuadro|acotad|\bcota)/i.test(f))
      .join(" ")
      .replace(MEDIDA, ""),
    lighting_mood: "Luz de estudio suave y direccional sobre el papel, que marca el canto de cada pieza y deja una sombra corta sobre el pliego; sin luz de paisaje ni hora del dia.",
    constraints: (spec.constraints || [])
      .filter((c) => !/^El terreno|primer plano, plano medio y fondo/i.test(c) && !FRASE_DE_ESCENARIO.test(c))
      .map((c) => c.replace(MEDIDA, "")),
    avoid: [
      ...(spec.avoid || []).filter((a) => !FRASE_DE_ESCENARIO.test(a)),
      "ningun escenario, paisaje, cielo, horizonte, suelo con terreno ni figura secundaria detras de la ficha",
    ],
    technique_close: `${sinEscenario(spec.technique_close)} ${CIERRE_PAPEL}`,
  };
}

/**
 * Una lamina de estado dibuja el estado. Los tigres kogui salieron como el
 * mismo hombre porque el prompt repetia la silueta humana y decia «cambia solo
 * lo que el estado cambia»; lo que el plan dice del estado vive en frases de la
 * silueta y en `continuity` («su estado de tigre parte del cuerpo del jaguar y
 * conserva la mochila»). Aqui la peticion se arma con esas frases.
 */
export function peticionDeEstado(model, view, nombre) {
  const estado = view.states.join(", ");
  const clave = estado.split(/[\s(,]/)[0].toLowerCase();
  const habla = (t) => /estado/i.test(t) || (clave.length > 3 && t.toLowerCase().includes(clave));
  const silueta = frases(model.design_contract?.distinctive_silhouette).filter(habla);
  const continuidad = (model.design_contract?.continuity_markers || []).filter(habla);
  const jaguar = /tigre|jaguar/i.test(estado + continuidad.join(" "))
    ? " El tigre es el de Colombia: jaguar americano, rosetas con punto interior; nunca tigre de bengala ni leopardo."
    : "";
  const punto = (t) => (/[.!?]$/.test(t.trim()) ? t.trim() : `${t.trim()}.`);
  return `${view.purpose}, para ${nombre}. Dibuja la forma que ese estado describe, entera, aunque ya no sea humana; de la figura canonica conserva solo lo que aqui se dice que conserva. ${[...silueta, ...continuidad].map(punto).join(" ")}${jaguar}`;
}

// Un estado «antes de» (el Sol antes de ser vestido de oro) no puede cargar
// los materiales de la ficha canonica: el Sol salio ya vestido de oro.
const ANTERIOR = /\bantes de\b/i;

function promptDeVista(model, view, capaId, kind, nombre) {
  let spec = view.id === "canon"
    ? { ...model.prompt_spec, primary_request: sinOtrosEstados(model.prompt_spec.primary_request) }
    : { ...model.prompt_spec, primary_request: peticionDeEstado(model, view, nombre) };
  if (view.id !== "canon" && ANTERIOR.test(view.states.join(" "))) {
    spec = {
      ...spec,
      materials_textures: "Todavia no lleva nada de lo que la ficha canonica le pone encima: va con lo que llevaria cualquier persona de su comunidad, en el mismo papel sin brillo.",
      // La paleta y los rasgos documentados describen la figura ya cambiada.
      constraints: (spec.constraints || []).filter((c) => !/^(paleta de esta ficha|documentado):/i.test(c)),
    };
  }
  if (!CON_FONDO.has(kind)) spec = sobrePapel(spec);
  let base = ensamblar(spec);
  if (CAPAS_CON_CUERPO.has(capaId)) {
    const extra = CAPAS_DE_UNA_FIGURA.has(capaId) ? `\n${UNA_SOLA_FIGURA}` : "";
    base = base.replace(/\n\nUse case: /, `\n\n${CUERPO_Y_CARA}${extra}\n\nUse case: `);
  } else {
    base = base.replace(/\n\nUse case: /, `\n\n${SIN_LAMINA_TECNICA}\n\nUse case: `);
  }
  return base;
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
    // --modelos rehace fichas concretas (un rechazo de moderacion, una
    // correccion del editor) aunque otra tanda ya las preparara.
    const pedidos = args.modelos ? String(args.modelos).split(",").map((s) => s.trim()) : null;
    const elegidos = pedidos
      ? modelos.filter(([id]) => pedidos.includes(id))
      : modelos.filter(([id]) => !hechos.has(id)).slice(0, maximo);
    if (!elegidos.length) {
      resumen.push({ corpus, laminas: 0, nota: modelos.length ? `capa ${capa.id} ya preparada entera` : `sin fichas de la capa ${capa.id}` });
      continue;
    }

    const tanda = String(args.tanda || `tanda-${String(siguienteNumero(corpus)).padStart(2, "0")}-${capa.id}${pedidos ? "-rehechas" : ""}`);
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
        const prompt = promptDeVista(m, view, capa.id, entity.kind, entity.name);
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
