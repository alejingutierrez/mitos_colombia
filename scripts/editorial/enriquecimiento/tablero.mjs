/**
 * El tablero de todo el catálogo, medido: dónde está cada una de las fichas.
 *
 *   node scripts/editorial/enriquecimiento/tablero.mjs [--env=.env] [--json] [--guardar]
 *
 * Es la consulta con la que se escribió `docs/spec-cierre-del-catalogo.md`, para
 * que cada fase del plan se mida igual y nadie vuelva a citar el denominador de
 * memoria. Cruza tres cosas:
 *
 *  - **Neon**: `myths` × `editorial_myths` por `slug` (no hay `myth_id`). Los
 *    cinco campos se leen de `myths`, que es lo que pinta la página; las fuentes
 *    son `sources_json` + `key_sources_json`, que son texto y hay que castear.
 *  - **Los módulos**: qué carpeta de `editorial/` compone cada slug, y los slugs
 *    que un módulo tiene y Neon no.
 *  - **El repo**: si la ficha tiene acta y si el acta la declara bloqueada.
 *
 * Una ficha del bloque está **cerrada** con acta, cinco campos, ≥ 8 fuentes y el
 * Relato de su reescritura ya publicado: tener acta en el repo no basta, porque
 * las vallenatas la tenían y en Neon seguía el texto viejo con Wikipedia y
 * Scribd. **Bloqueada** si su acta lo dice. Una de comunidad está cerrada con cinco campos
 * y ≥ 8 fuentes: las de < 8 son la Fase B del carril C7.
 *
 * Con `--guardar` escribe `content/editorial/tablero/tablero-<fecha>.json`.
 */
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { pathToFileURL } from "node:url";
import { connect, parseArgs } from "./lib.mjs";

const options = parseArgs(process.argv.slice(2));
const BLOQUE = new Set(["mestizo", "mixto"]);

// Qué ciclo va en qué carril del spec §2. Lo que no está aquí se asigna por su
// estado: con los cinco campos es C6 (forma sin verificar), sin ellos C5.
const CARRIL_POR_MODULO = [
  [/^bogota-mestizo-/, "C1"],
  [/^cesar-mestizo-residual$/, "C1"],
  [/^(piedecuesta|santander)-/, "C2"],
  [/^(orinoquia-mestizo-final|amazonas-mixto-residual|huitoto-residual|ticuna-residual)$/, "C3"],
  [/^(antioquia|caldas|tolima|boyaca|andina-varios)-/, "C4"],
];

async function slugsPorModulo() {
  const porSlug = new Map();
  const carpetas = await fs.readdir("editorial");
  for (const carpeta of carpetas.sort()) {
    const ruta = path.resolve("editorial", carpeta, "records.mjs");
    try {
      await fs.access(ruta);
    } catch {
      continue;
    }
    let lista = [];
    try {
      const mod = await import(pathToFileURL(ruta).href);
      lista = Array.isArray(mod.default) ? mod.default : Object.values(mod).find(Array.isArray) || [];
    } catch (error) {
      console.error(`  ! ${carpeta}: no carga (${error.message.slice(0, 100)})`);
      continue;
    }
    for (const r of lista) if (r?.slug) porSlug.set(r.slug, [...(porSlug.get(r.slug) || []), carpeta]);
  }
  return { porSlug };
}

// El Relato de la reescritura más reciente de cada slug, para saber si lo que
// hay en Neon es ya el texto rehecho.
async function reescriturasDelRepo() {
  const relatos = new Map();
  const raiz = path.resolve("content", "editorial");
  for (const ciclo of (await fs.readdir(raiz)).sort()) {
    const dirCiclo = path.join(raiz, ciclo);
    if (!(await fs.stat(dirCiclo)).isDirectory()) continue;
    for (const sub of (await fs.readdir(dirCiclo)).sort()) {
      if (!sub.startsWith("reescritura-")) continue;
      for (const f of await fs.readdir(path.join(dirCiclo, sub))) {
        if (!f.endsWith(".json")) continue;
        try {
          const r = JSON.parse(await fs.readFile(path.join(dirCiclo, sub, f), "utf8"));
          if (r.mito) relatos.set(f.replace(/\.json$/, ""), r.mito);
        } catch {}
      }
    }
  }
  return relatos;
}

// Se compara el arranque del Relato, sin espacios ni puntuación: el módulo
// puede recomponer saltos de línea, pero no cambia las primeras frases.
const huella = (t) => String(t || "").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, "").slice(0, 400);

async function actasDelRepo() {
  const actas = new Map();
  const raiz = path.resolve("content", "editorial");
  for (const ciclo of (await fs.readdir(raiz)).sort()) {
    const dirCiclo = path.join(raiz, ciclo);
    if (!(await fs.stat(dirCiclo)).isDirectory()) continue;
    for (const sub of (await fs.readdir(dirCiclo)).sort()) {
      if (!sub.startsWith("actas-")) continue;
      for (const f of await fs.readdir(path.join(dirCiclo, sub))) {
        if (!f.endsWith(".json")) continue;
        let bloqueada = false;
        try {
          const acta = JSON.parse(await fs.readFile(path.join(dirCiclo, sub, f), "utf8"));
          bloqueada = acta.bloqueada === true || (Array.isArray(acta.nudos) && acta.nudos.length === 0);
        } catch {}
        // La más reciente manda: las carpetas llevan fecha y se leen en orden.
        actas.set(f.replace(/\.json$/, ""), { ciclo, carpeta: sub, bloqueada });
      }
    }
  }
  return actas;
}

/**
 * Fichas que declaran `fuentesAgotadas` en su módulo: la investigación no dio
 * para ocho sin relleno y lo dejó razonado. Para el spec valen como cerradas en
 * el criterio de fuentes (≥8 o agotadas). Se lee del texto de los módulos
 * porque el constructor no siempre propaga el campo al expediente.
 */
async function agotadasDelRepo() {
  const slugs = new Set();
  const raiz = path.resolve("editorial");
  const recorrer = async (dir) => {
    for (const e of await fs.readdir(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) await recorrer(p);
      else if (e.name.endsWith(".mjs")) {
        const src = await fs.readFile(p, "utf8");
        if (!src.includes("fuentesAgotadas:")) continue;
        for (const m of src.matchAll(/slug: "([^"]+)",\s*\n\s*fuentesAgotadas:/g)) slugs.add(m[1]);
        if (path.basename(dir) === "myths" && /\n  fuentesAgotadas:/.test(src)) {
          const m = src.match(/\n  slug: "([^"]+)"/);
          if (m) slugs.add(m[1]);
        }
      }
    }
  };
  await recorrer(raiz);
  return slugs;
}

const client = await connect(options);
const { rows } = await client.query(`
  SELECT m.slug, m.title, co.slug AS comunidad, r.slug AS region,
    (nullif(m.mito,'') IS NOT NULL AND nullif(m.historia,'') IS NOT NULL AND nullif(m.versiones,'') IS NOT NULL
     AND nullif(m.similitudes,'') IS NOT NULL AND nullif(m.leccion,'') IS NOT NULL) AS cinco,
    coalesce(jsonb_array_length(nullif(e.sources_json,'')::jsonb),0)
      + coalesce(jsonb_array_length(nullif(e.key_sources_json,'')::jsonb),0) AS fuentes,
    m.mito
  FROM myths m
  LEFT JOIN communities co ON co.id = m.community_id
  LEFT JOIN regions r ON r.id = m.region_id
  LEFT JOIN editorial_myths e ON e.source_myth_id = m.id
  ORDER BY co.slug NULLS FIRST, m.slug`);
await client.end();

const { porSlug } = await slugsPorModulo();
const actas = await actasDelRepo();
const reescrituras = await reescriturasDelRepo();
const agotadas = await agotadasDelRepo();
const enNeon = new Set(rows.map((r) => r.slug));

const fichas = rows.map((r) => {
  const modulos = porSlug.get(r.slug) || [];
  const acta = actas.get(r.slug) || null;
  const bloque = !r.comunidad || BLOQUE.has(r.comunidad);
  const rehecho = reescrituras.get(r.slug);
  const publicada = Boolean(rehecho) && huella(rehecho) === huella(r.mito);
  const fuentesOk = r.fuentes >= 8 || agotadas.has(r.slug);
  let estado;
  let carril = null;
  if (bloque) {
    if (acta?.bloqueada) estado = "bloqueada";
    else if (acta && r.cinco && fuentesOk && publicada) estado = "cerrada";
    else estado = "abierta";
    if (estado === "abierta") {
      const mod = modulos[0] || "";
      carril = (CARRIL_POR_MODULO.find(([re]) => re.test(mod)) || [])[1] || (r.cinco ? "C6" : "C5");
    }
  } else {
    estado = r.cinco && fuentesOk ? "cerrada" : "abierta";
    if (estado === "abierta") carril = r.cinco ? "C7c" : "C7a";
  }
  return {
    slug: r.slug,
    titulo: r.title,
    comunidad: r.comunidad,
    region: r.region,
    bloque,
    modulo: modulos.join("+") || null,
    cinco: r.cinco,
    fuentes: r.fuentes,
    acta: acta ? `${acta.ciclo}/${acta.carpeta}` : null,
    reescritura: rehecho ? (publicada ? "publicada" : "sin publicar") : null,
    estado,
    carril,
  };
});

const soloEnModulo = [...porSlug.entries()]
  .filter(([slug]) => !enNeon.has(slug))
  .map(([slug, modulos]) => ({ slug, modulo: modulos.join("+") }));

const cuenta = (f) => fichas.filter(f).length;
const bloque = fichas.filter((f) => f.bloque);
const comunidades = fichas.filter((f) => !f.bloque);
const resumen = {
  fecha: new Date().toISOString().slice(0, 10),
  total: fichas.length,
  cincoCampos: cuenta((f) => f.cinco),
  conCincoFuentes: cuenta((f) => f.fuentes >= 5),
  conOchoFuentes: cuenta((f) => f.fuentes >= 8),
  sinFuentes: cuenta((f) => f.fuentes === 0),
  sinComunidad: cuenta((f) => !f.comunidad),
  bloque: {
    fichas: bloque.length,
    cerradas: bloque.filter((f) => f.estado === "cerrada").length,
    bloqueadas: bloque.filter((f) => f.estado === "bloqueada").length,
    abiertas: bloque.filter((f) => f.estado === "abierta").length,
    conActa: bloque.filter((f) => f.acta).length,
    conOchoFuentes: bloque.filter((f) => f.fuentes >= 8).length,
  },
  comunidades: {
    fichas: comunidades.length,
    cerradas: comunidades.filter((f) => f.estado === "cerrada").length,
    sinCincoCampos: comunidades.filter((f) => !f.cinco).length,
    bajoOchoFuentes: comunidades.filter((f) => f.fuentes < 8).length,
    agotadasDeclaradas: comunidades.filter((f) => f.fuentes < 8 && agotadas.has(f.slug)).length,
  },
  porCarril: Object.fromEntries(
    ["C1", "C2", "C3", "C4", "C5", "C6", "C7a", "C7c"].map((c) => [c, cuenta((f) => f.carril === c)]),
  ),
  soloEnModulo: soloEnModulo.length,
};

if (options.json) {
  console.log(JSON.stringify({ resumen, fichas, soloEnModulo }, null, 2));
} else {
  console.log(`Tablero · ${resumen.fecha} · ${resumen.total} mitos`);
  console.table({
    "con los cinco campos": resumen.cincoCampos,
    "con ≥ 5 fuentes": resumen.conCincoFuentes,
    "con ≥ 8 fuentes": resumen.conOchoFuentes,
    "sin ninguna fuente": resumen.sinFuentes,
    "sin comunidad": resumen.sinComunidad,
    "slugs en módulo y no en Neon": resumen.soloEnModulo,
  });
  console.log("Bloque mestizo y mixto:");
  console.table(resumen.bloque);
  console.log("Comunidades:");
  console.table(resumen.comunidades);
  console.log("Abiertas por carril (spec §2):");
  console.table(resumen.porCarril);
  const porModulo = {};
  for (const f of bloque) {
    const k = f.modulo || "(sin módulo)";
    porModulo[k] ||= { fichas: 0, cerradas: 0, bloqueadas: 0, abiertas: 0, carril: "" };
    porModulo[k].fichas += 1;
    porModulo[k][f.estado === "cerrada" ? "cerradas" : f.estado === "bloqueada" ? "bloqueadas" : "abiertas"] += 1;
    if (f.carril && !porModulo[k].carril.includes(f.carril)) porModulo[k].carril += (porModulo[k].carril ? "+" : "") + f.carril;
  }
  console.log("Bloque, por ciclo:");
  console.table(porModulo);
  if (soloEnModulo.length) {
    console.log("En módulo y no en Neon:");
    for (const s of soloEnModulo) console.log(`  · ${s.slug} (${s.modulo})`);
  }
}

if (options.guardar) {
  const dir = path.resolve("content", "editorial", "tablero");
  await fs.mkdir(dir, { recursive: true });
  const archivo = path.join(dir, `tablero-${resumen.fecha}.json`);
  await fs.writeFile(archivo, `${JSON.stringify({ resumen, fichas, soloEnModulo }, null, 2)}\n`);
  console.log(`\nGuardado: ${path.relative(process.cwd(), archivo)}`);
}
