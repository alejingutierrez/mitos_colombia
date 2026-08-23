#!/usr/bin/env node
/**
 * Emite la llamada `hfStart([...])` de un paso de un mito, lista para ejecutar
 * en la pestaña de higgsfield.ai.
 *
 * El plan es la fuente de verdad; esto sólo lo traduce. Evita el error caro de
 * esta operación: escribir a mano la escena que se va a generar y que termine
 * distinta de la que quedó registrada en el manifiesto.
 *
 *   node scripts/mitos/emit-tanda.mjs --slug la-aparicion-del-hombre --paso video
 *   pasos: personajes | paisajes | props | triptico | video
 */
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const args = Object.fromEntries(
  process.argv.slice(2).reduce((acc, a, i, arr) => {
    if (a.startsWith("--")) acc.push([a.slice(2), arr[i + 1]?.startsWith("--") ? true : arr[i + 1]]);
    return acc;
  }, [])
);
const comunidad = args.comunidad || "muiscas";
const slug = args.slug;
const paso = args.paso;
const plan = JSON.parse(readFileSync(`content/mitos-visuales/${comunidad}.json`, "utf8"));
// `biblia-libre` recorre todos los mitos, así que no exige --slug.
const mito = plan.mitos[slug];
if (paso !== "biblia-libre" && !mito) throw new Error(`mito no está en el plan: ${slug}`);
const bibliaDir = join("content/videos", comunidad, "biblia");

const KIND = { personajes: "personaje", paisajes: "paisaje", props: "prop" };
// El orden de producción es por mito, pero las fichas que NO llevan referencia
// no dependen de nada previo: se pueden encolar todas juntas y de varios mitos,
// que es lo único que aprovecha bien una cola de 2,5 min por imagen. Salen en
// orden de personaje → paisaje → prop, que sigue siendo el orden de la doctrina.
const ORDEN_KIND = { personaje: 0, paisaje: 1, prop: 2 };
const ASP = { entrada: "16:9", acto: "9:16", huella: "1:1" };
const items = [];
const refs = new Set();

if (paso === "biblia-libre") {
  const pend = [];
  for (const [s2, m2] of Object.entries(plan.mitos)) {
    for (const [nombre, f] of Object.entries(m2.biblia || {})) {
      if ((f.refs || []).length) continue;            // ésas van con su mito
      if (existsSync(join(bibliaDir, `${nombre}.jpg`))) continue;
      pend.push({ slug: s2, nombre, f, paleta: m2.paleta });
    }
  }
  pend.sort((a, b) => (ORDEN_KIND[a.f.kind] - ORDEN_KIND[b.f.kind]) || a.nombre.localeCompare(b.nombre));
  for (const x of pend) {
    // La época viaja con la ficha: Donato es colonial dentro de un mito muisca,
    // y sin esto el bloque por defecto le prohibiría las botas de cuero.
    items.push({ tag: x.nombre, tipo: "ficha", kind: x.f.kind, aspect: x.f.aspect, texto: x.f.desc, paleta: x.f.paleta || x.paleta, _slug: x.slug, ...(x.f.era ? { era: x.f.era } : {}) });
  }
} else if (KIND[paso]) {
  for (const [nombre, f] of Object.entries(mito.biblia || {})) {
    if (f.kind !== KIND[paso]) continue;
    // Ya hecha: no se regenera. Es lo que hace reanudable la tanda.
    if (existsSync(join(bibliaDir, `${nombre}.jpg`))) continue;
    (f.refs || []).forEach((r) => refs.add(r));
    items.push({ tag: nombre, tipo: "ficha", kind: f.kind, aspect: f.aspect, texto: f.desc, paleta: f.paleta || mito.paleta });
  }
} else if (paso === "triptico") {
  const dir = join("content/videos", comunidad, "mitos", slug);
  for (const [acto, e] of Object.entries(mito.escenas || {})) {
    if (existsSync(join(dir, `${acto}.jpg`))) continue;
    (e.refs || []).forEach((r) => refs.add(r));
    items.push({ tag: acto, tipo: "escena", acto, comp: e.composicion, aspect: ASP[acto], texto: e.escena, paleta: mito.paleta });
  }
} else if (paso === "video") {
  const kfDir = join("content/videos", comunidad, "videos", slug, "keyframes");
  for (const [n, bloque] of Object.entries(mito.video?.bloques || {})) {
    for (const cual of ["a", "b"]) {
      const e = bloque[cual];
      if (!e || e.reusa) continue;
      const tag = `${n}${cual}`;
      if (existsSync(join(kfDir, `${tag}.jpg`))) continue;
      items.push({
        tag, tipo: "escena", acto: "acto", comp: e.comp, aspect: mito.video.aspect || "9:16",
        // Un keyframe no es el acto del tríptico: no debe pelear por ser LA
        // escena del mito, sólo un plano dentro de la secuencia.
        texto: e.desc + " Es un plano dentro de la secuencia del video, no la escena principal del mito.",
        paleta: mito.paleta,
        ...(e.era ? { era: e.era } : {}),
      });
    }
  }
} else {
  throw new Error(`paso desconocido: ${paso}`);
}

if (args.formato === "refs") {
  console.log([...refs].join("\n"));
} else {
  console.error(`# ${slug} · ${paso} · ${items.length} piezas` + (refs.size ? ` · referencias: ${[...refs].join(", ")}` : ""));
  // La paleta y el sufijo son idénticos en toda la tanda: se izan a opciones en
  // vez de repetirse por pieza. Con 17 escenas ya recorta la mitad del payload,
  // y el corpus entero son ~13.000 piezas.
  // En `biblia-libre` conviven mitos con paletas distintas, así que sólo se iza
  // la paleta cuando todas coinciden; si no, cada pieza carga la suya.
  const paletas = new Set(items.map((i) => i.paleta));
  const paleta = paletas.size === 1 ? items[0]?.paleta : null;
  const sufijo = paso === "video"
    ? " Es un plano dentro de la secuencia del video, no la escena principal del mito."
    : "";
  const compactos = items.map((it) => {
    const o = { ...it };
    delete o._slug;
    if (paleta) delete o.paleta;
    if (sufijo && o.texto.endsWith(sufijo)) o.texto = o.texto.slice(0, -sufijo.length);
    return o;
  });
  const opts = { pausa: Number(args.pausa || 5000), maxVuelo: Number(args.maxVuelo || 1), ...(paleta ? { paleta } : {}), sufijo };
  console.log(`window.hfStart(${JSON.stringify(compactos)},${JSON.stringify(opts)})`);
}
