// Añade (o refresca) los 27 mitos wayúu en .qa-staging/datos.json, leyendo su
// guion, su acta y —si ya existe— su spec de escenas.
//
//   node scripts/videos/seed-wayuu-datos.mjs
//
// La parte editorial la ponen el guion y el acta; el conteo de imágenes lo
// recalcula después build-qa-panel.mjs mirando el disco. Los mitos muiscas que
// ya están en el archivo no se tocan: sólo se les marca la comunidad y su
// directorio de keyframes, que antes estaba implícito en el código.
import fs from "node:fs"; import path from "node:path";
import { pathToFileURL } from "node:url";

const STAGE = ".qa-staging";
const G = "docs/videos/wayuu/mvp-guiones", A = "docs/videos/wayuu/actas";
const SPECS = "scripts/videos/specs";
const datos = JSON.parse(fs.readFileSync(path.join(STAGE, "datos.json"), "utf8"));

// Los muiscas heredan lo que antes se daba por supuesto.
for (const m of datos.mitos) {
  m.comunidad ??= "muiscas";
  m.dir ??= `content/videos/muiscas/videos/${m.slug}/keyframes`;
  m.img ??= `${m.comunidad}-${m.slug}`;
}

// Un spec por mito, localizado por su OUT_DIR para no depender del nombre.
const specs = new Map();
for (const f of fs.readdirSync(SPECS).filter((x) => x.startsWith("wayuu-") && x.endsWith(".mjs"))) {
  const s = await import(pathToFileURL(path.resolve(SPECS, f)).href);
  if (!s.OUT_DIR) continue;
  specs.set(s.OUT_DIR.replace(/^wayuu\/videos\//, "").replace(/\/keyframes$/, ""), s);
}

const camp = JSON.parse(fs.readFileSync("content/videos/wayuu/campaign.v1.json", "utf8")).myths;
const porSlug = new Map(datos.mitos.map((m) => [`${m.comunidad}:${m.slug}`, m]));
let nuevos = 0;

for (const { slug } of camp) {
  const gs = fs.readdirSync(G).filter((f) => f.startsWith(`guion-${slug}-v`)).sort();
  const g = JSON.parse(fs.readFileSync(path.join(G, gs.at(-1)), "utf8"));
  const a = JSON.parse(fs.readFileSync(path.join(A, `acta-${slug}.json`), "utf8"));
  const spec = specs.get(slug);
  // Sin spec todavía, los ids de escena se derivan de la convención del corpus:
  // cada bloque del guion da dos escenas, «a» y «b».
  const ids = spec
    ? [...new Set(spec.ITEMS.map((i) => i.id.replace(/-[AB]$/, "")))]
    : g.lines.map((_, i) => [`b${i + 1}a`, `b${i + 1}b`]).flat();

  const bloques = g.lines.map((l, i) => ({
    n: i + 1,
    bloque: l.bloque || `b${i + 1}`,
    texto: l.text,
    cubre: l.cubre || [],
    escenas: ids.filter((id) => new RegExp(`^b${i + 1}[ab]$`).test(id)).map((id) => ({ id, hay: false, i: -1 })),
  }));

  const clave = `wayuu:${slug}`;
  const base = porSlug.get(clave) || {};
  const mito = {
    ...base,
    comunidad: "wayuu",
    slug,
    img: `wayuu-${slug}`,
    dir: `content/videos/wayuu/videos/${slug}/keyframes`,
    titulo: g.titulo,
    N: g.lines.length,
    nudos: a.nudos.length,
    cita: g.nota_cita || "",
    deslindes: a.deslindes || [],
    necesita: bloques.reduce((n, b) => n + b.escenas.length * 2, 0),
    imagenes: base.imagenes ?? 0,
    estado: base.estado ?? "pendiente",
    producido: false,      // los 496 keyframes viejos son de otra tuberia
    bloques,
  };
  if (!porSlug.has(clave)) { datos.mitos.push(mito); nuevos += 1; }
  else Object.assign(porSlug.get(clave), mito);
}

fs.writeFileSync(path.join(STAGE, "datos.json"), JSON.stringify(datos), "utf8");
const n = (c) => datos.mitos.filter((m) => m.comunidad === c).length;
console.log(`[seed-wayuu] ${nuevos} nuevos · muiscas ${n("muiscas")} · wayuu ${n("wayuu")} · specs encontrados ${specs.size}`);
