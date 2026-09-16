import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { execFileSync } from "node:child_process";
import assert from "node:assert/strict";

// Offline verification only: no network, SDK, credentials, publication or app changes.
const root = process.cwd();
const bible = path.join(root, "content/videos/nasa-paeces/biblia");
const run = path.join(bible, "produccion-api-02");
const output = path.join(root, "output/imagegen/nasa-paeces/biblia/produccion-api-02");
const json = p => JSON.parse(fs.readFileSync(p, "utf8"));
const hash = b => crypto.createHash("sha256").update(b).digest("hex");
const inventory = json(path.join(bible, "inventory.v2.json"));
const frozen = json(path.join(bible, "corpus-manifest.v1.json"));
const snapshot = json(path.join(bible, "research/corpus-snapshot-20260912.json"));
const jobs = json(path.join(run, "jobs.v2.json"));
const review = json(path.join(run, "review.v1.json"));
assert.equal(inventory.units.length, 60);
assert.equal(new Set(inventory.units.map(x => x.id)).size, 60);
assert.equal(jobs.length, 60);
assert.deepEqual(snapshot.rows.map(x => x.id), frozen.myths.map(x => x.id));
assert.deepEqual(inventory.corpus_ids, frozen.myths.map(x => x.id));
const digest = hash(JSON.stringify(snapshot.rows.map(r => ({
  id:r.id, slug:r.slug, title:r.title, updated_at:r.updated_at, mito_sha256:hash(r.mito)
}))));
assert.equal(digest, frozen.corpus_digest, "Frozen corpus has drifted");
const expected = {personajes:17,entidades:7,paisajes_maestros:10,variaciones:8,utilerias:12,elencos:6};
const categoryKeys = {personajes:"personaje",entidades:"entidad",paisajes_maestros:"paisaje",variaciones:"variacion",utilerias:"utileria",elencos:"elenco"};
const counts = Object.fromEntries(Object.keys(expected).map(k => [k,inventory.units.filter(u => u.category===categoryKeys[k]).length]));
assert.deepEqual(counts, expected);
const accepted = review.qa.filter(x => x.status === "accepted");
const selected = review.selected;
assert.equal(Object.keys(selected).length, 60, "Missing selected units");
const sources = new Set(inventory.sources.filter(x => x.status === "consulted").map(x => x.id));
const records = inventory.units.map(u => {
  const file = selected[u.id];
  assert.match(file,/^[a-z]\d{2}-master-v\d+\.jpeg$/);
  const img = path.join(output,file);
  const decision = accepted.find(x => x.unit_id===u.id && x.file===file);
  assert.ok(decision?.checks?.length>30, "No individual manual QA: "+u.id);
  assert.ok(u.source_ids.every(id=>sources.has(id)), "Unconsulted source used: "+u.id);
  const job = jobs.find(x=>x.unit_id===u.id);
  assert.equal(job.model,"gpt-image-2.5-sunburst");
  assert.ok(job.prompt.includes("MATERIAL LOCK:") && job.prompt.includes("ZERO text"));
  const primaryPrompt = path.join(run,"prompts",u.id.toLowerCase()+".txt");
  const primaryText = fs.readFileSync(primaryPrompt,"utf8");
  assert.equal(primaryText.trim(),job.prompt.trim(),"Prompt file differs from job: "+u.id);
  const dims = execFileSync("/opt/homebrew/bin/magick",["identify","-format","%w %h",img],{encoding:"utf8"}).trim();
  assert.equal(dims,"1024 1536", "Unexpected dimensions: "+u.id);
  const record = {...u,file:path.relative(root,img),sha256:hash(fs.readFileSync(img)),width:1024,height:1536,
    model:job.model,quality:job.quality,prompt_file:path.relative(root,path.join(run,"prompts",u.id.toLowerCase()+".txt")),
    prompt_sha256:hash(fs.readFileSync(primaryPrompt)),
    qa:decision.checks,selection:"editorial_production_reference_not_cultural_certification"};
  record.correction_prompts = fs.readdirSync(path.join(run,"prompts"))
    .filter(name=>name.startsWith(u.id.toLowerCase()+"-correction-v") && name.endsWith(".txt"))
    .sort().map(name=>({file:path.relative(root,path.join(run,"prompts",name)),sha256:hash(fs.readFileSync(path.join(run,"prompts",name))),role:"targeted_repair_with_previous_candidate_reference"}));
  record.retained_predecessors = review.qa.filter(x=>x.unit_id===u.id && x.status==="rejected")
    .map(x=>({file:path.relative(root,path.join(output,x.file)),sha256:hash(fs.readFileSync(path.join(output,x.file))),reason:x.checks,allowed_as_future_reference:false}));
  if (u.base_unit) {
    assert.equal(job.method,"edit");
    const reference = review.references.find(x=>x.unit_id===u.id);
    assert.ok(reference, "Missing actual reference lineage: "+u.id);
    assert.equal(reference.base_unit,u.base_unit);
    assert.equal(reference.base_file,selected[u.base_unit]);
    const base = path.join(output,reference.base_file);
    record.reference = {unit_id:u.base_unit,file:path.relative(root,base),sha256:hash(fs.readFileSync(base)),role:"approved_material_palette_depth",
      effective_prompt:path.relative(root,path.join(run,"prompts",u.id.toLowerCase()+"-edit-v2.txt")),
      effective_prompt_sha256:hash(fs.readFileSync(path.join(run,"prompts",u.id.toLowerCase()+"-edit-v2.txt")))};
  }
  return record;
});
const coverage = snapshot.rows.map(r => {
  const assets = records.filter(u=>u.myth_ids.includes(r.id));
  assert.ok(assets.some(u=>u.category==="paisaje" || u.category==="variacion"), "No landscape: "+r.id);
  assert.ok(assets.some(u=>u.category==="personaje" || u.category==="entidad" || u.category==="elenco"), "No cast: "+r.id);
  return {myth_id:r.id,title:r.title,units:assets.map(u=>u.id),
    staging_note:r.id===443?"L06 es escenario opcional de adaptación; el fragmento no documenta lugar. Fondo neutro igualmente válido.":null};
});
const manifest = {schema_version:2,status:"complete_editorial_bible",date:"2026-09-12",
  community:"Nasa–Paeces",model:"gpt-image-2.5-sunburst",count:60,counts,corpus_count:26,corpus_digest:digest,
  cultural_certification:false,publication:false,triptychs_included:false,keyframes_included:false,
  manual_review: true,records,coverage,rejected_candidates:review.qa.filter(x=>x.status==="rejected"),
  concurrency:review.concurrency};
fs.writeFileSync(path.join(run,"selection.v2.json"),JSON.stringify(manifest,null,2)+"\n");
const labels = {personajes:"Personajes",entidades:"Entidades y animales",paisajes_maestros:"Paisajes maestros",
 variaciones:"Variantes de paisaje",utilerias:"Packs de utilería",elencos:"Packs de reparto"};
let md = "# Biblia visual Nasa–Paeces\n\n60/60 unidades seleccionadas editorialmente para los 26 mitos. API OpenAI, gpt-image-2.5-sunburst, calidad medium, 1024×1536. No app web. No publicación ni certificación comunitaria.\n\n"
+"La selección se conserva con hash, fuente, reglas de estado y referencias en [selection.v2.json](produccion-api-02/selection.v2.json). Investigación: [dossiers](DOSSIERS-20260912.md), [fuentes/inventario](inventory.v2.json), [corpus congelado](research/corpus-snapshot-20260912.json).\n\n"
+"## Contrato de continuidad\n\nPapel recortado mate con cantos, solapes y sombras entre planos. Agua y niebla también son papel. Sin texto dentro de las imágenes. Indumentaria sobria es propuesta editorial, no uniforme Nasa universal. No copiar patrones sagrados ni trasladar signos de otras comunidades. Mantener separados nombres, lugares y versiones.\n\n"
+"Para trípticos: elegir primero versión e informante; después 1–3 protagonistas, un ambiente y utilería necesaria. Para keyframes: heredar identidad, edad, estado, escala, material, archivo/hash seleccionado y atribución; cambiar cámara/gesto, no reinterpretar el personaje desde cero. Cabeza E01 una oreja/un diente; Chautéh solo pierde ojo derecho después de la captura; P12 cabeza/cola azules y dos orejas de burro; P16 dalo separado del jinete.\n\n";
for(const [category,label] of Object.entries(labels)){
 md += "## "+label+"\n\n";
 for(const r of records.filter(x=>x.category===categoryKeys[category])){
   md += "### "+r.id+" — "+r.label+"\n\n"+r.evidence_note+"\n\nEstados/vistas: "+r.states.join("; ")+".\n\n"
     +"Mitos: "+r.myth_ids.join(", ")+". Fuentes: "+r.source_ids.join(", ")+".\n\n"
     +"QA: "+r.qa+"\n\n!["+r.id+" — "+r.label+"]("+path.join(root,r.file)+")\n\n";
 }
}
md += "## Cobertura de los 26 mitos\n\n| ID | Mito | Referencias |\n|---|---|---|\n";
for(const c of coverage)md += "| "+c.myth_id+" | "+c.title+" | "+c.units.join(", ")+" |\n";
md += "\n## Límites pendientes fuera de producción\n\nNo existe validación externa comunitaria de esta propuesta. Topónimos son adaptaciones visuales, no cartografía. El corpus histórico traducido no documenta todos los detalles de vestuario. No convertir la inferencia del jinete en demonología universal, ni El dalo en mapa teológico Nasa. Estados raros pueden derivarse del texto atribuido sin multiplicar identidades (p. ej., advertencia del erizo en El dalo). Trípticos, keyframes, vídeo y publicación son etapas posteriores y no se incluyen en estas 60 unidades.\n";
fs.writeFileSync(path.join(bible,"BIBLIA-NASA.md"),md);
const result = {status:"PASS",units:records.length,myths:coverage.length,counts,digest,variant_references:records.filter(r=>r.reference).length,rejected:manifest.rejected_candidates.length};
fs.writeFileSync(path.join(run,"audit-result.v1.json"),JSON.stringify(result,null,2)+"\n");
console.log(JSON.stringify(result,null,2));
