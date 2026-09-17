// Arma content/videos/muiscas/videos/<mito>/bloques.json desde el spec + el guion
// + las imágenes ya generadas, con sha256 de prompt e imagen para trazabilidad.
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const mito = process.argv[2];
const specPath = process.argv[3];
const spec = await import(path.resolve(specPath));
const g = JSON.parse(fs.readFileSync(`docs/videos/muiscas/mvp-guiones/guion-${mito}-v${process.argv[4] || 1}.json`, "utf8"));
const acta = JSON.parse(fs.readFileSync(`docs/videos/muiscas/actas/acta-${mito}.json`, "utf8"));
const kdir = `content/videos/muiscas/videos/${mito}/keyframes`;
const man = JSON.parse(fs.readFileSync(`${kdir}/manifest.json`, "utf8"));
const sha = (p) => crypto.createHash("sha256").update(fs.readFileSync(p)).digest("hex");

const lineas = Object.fromEntries(g.lines.map((l) => [l.bloque, l.text]));
const keyframes = spec.ITEMS.map((it) => {
  const img = `${kdir}/${it.id}.jpg`;
  const entry = man.items[it.id];
  return {
    tag: it.id,
    bloque: it.id.replace(/[ab]$/, ""),
    provider: "openai",
    model: man.model,
    quality: man.quality,
    source_px: "1024x1536",
    output_px: "1080x1920",
    refs: it.refs.map((r) => r.replace("muiscas/biblia/", "")),
    desc: it.scene,
    avoid_extra: it.avoid,
    prompt_sha256: entry ? crypto.createHash("sha256").update(entry.prompt).digest("hex") : null,
    image_sha256: fs.existsSync(img) ? sha(img) : null,
    generated_at: entry?.generated_at ?? null,
  };
});

const out = {
  mito,
  comunidad: "Muiscas",
  carpeta_triptico: mito,
  guion: `docs/videos/muiscas/mvp-guiones/guion-${mito}-v${process.argv[4] || 1}.json`,
  acta: `docs/videos/muiscas/actas/acta-${mito}.json`,
  estructura: `${g.lines.length} bloques narrativos × 2 keyframes (bNa, bNb) = ${g.lines.length * 2} escenas, todas generadas nuevas contra el guion vigente`,
  nota_deslinde: acta.deslindes[0],
  reemplaza: `historico/keyframes-plan-n9-20260917 (18 escenas del plan viejo de 9 bloques, ya no corresponden al guion)`,
  generacion_actual: {
    provider: "openai", model: man.model, quality: man.quality,
    spec: `scripts/videos/specs/${path.basename(specPath)}`,
    account_source: "OPENAI_API_KEY from ignored .env",
  },
  lineas,
  keyframes,
};
fs.writeFileSync(`content/videos/muiscas/videos/${mito}/bloques.json`, JSON.stringify(out, null, 2) + "\n");
const faltan = keyframes.filter((k) => !k.image_sha256).map((k) => k.tag);
console.log(`bloques.json escrito · ${keyframes.length} cuadros · ${faltan.length ? "FALTAN: " + faltan.join(", ") : "todas las imágenes presentes"}`);
