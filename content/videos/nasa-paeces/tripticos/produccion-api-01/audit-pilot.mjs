import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";

// Offline audit and derived manifests only. No credentials, SDK, network or publication.
const root = process.cwd();
const run = path.join(root,"content/videos/nasa-paeces/tripticos/produccion-api-01");
const output = path.join(root,"output/imagegen/nasa-paeces/tripticos/produccion-api-01/el-trueno");
const read = file => JSON.parse(fs.readFileSync(file,"utf8"));
const sha = data => crypto.createHash("sha256").update(data).digest("hex");
const plan = read(path.join(run,"pilot-plan.v1.json"));
const review = read(path.join(run,"review.v1.json"));
const bible = read(path.join(root,plan.bible_selection));
const snapshot = read(path.join(root,plan.source_snapshot));
const myth = snapshot.rows.find(x=>x.id===429);
assert.equal(plan.current_myth_id,429);
assert.equal(plan.jobs.length,3);
assert.equal(review.status,"complete_editorial_pilot_pending_user_review");
assert.equal(new Set(plan.jobs.map(j=>j.role)).size,3);
const dimensions = {entrada:"1536 1024",acto:"1024 1536",huella:"1024 1024"};
const records = plan.jobs.map(job=>{
  assert.equal(job.model,"gpt-image-2.5-sunburst");
  const filename = review.selected[job.role];
  const file = path.join(output,filename);
  const qa = review.qa.find(x=>x.role===job.role && x.file===filename && x.status==="accepted");
  assert.ok(qa?.checks?.length>30);
  const dims = execFileSync("/opt/homebrew/bin/magick",["identify","-format","%w %h",file],{encoding:"utf8"}).trim();
  assert.equal(dims,dimensions[job.role]);
  const refs = job.refs.map(id=>{
    assert.ok(review.authorized_reference_ids.includes(id));
    const ref = bible.records.find(x=>x.id===id);
    assert.ok(ref);
    assert.equal(sha(fs.readFileSync(path.join(root,ref.file))),ref.sha256);
    return {unit_id:id,file:ref.file,sha256:ref.sha256};
  });
  const prompt = job.role==="acto"?path.join(run,"prompts/el-trueno-acto-v2.txt"):job.prompt_file;
  const text = fs.readFileSync(prompt,"utf8");
  assert.ok(text.includes("MATERIAL LOCK:") && text.includes("ZERO text"));
  const [width,height] = dims.split(" ").map(Number);
  return {role:job.role,file:path.relative(root,file),sha256:sha(fs.readFileSync(file)),width,height,
    requested_model:job.model,planned_quality:job.quality,prompt_file:path.relative(root,prompt),prompt_sha256:sha(fs.readFileSync(prompt)),
    references:refs,qa:qa.checks,
    execution_origin:job.role==="acto"?"successful_current_call_acto_v2":"retained_earlier_pilot_candidate_original_success_log_unavailable"};
});
const rejected = review.qa.filter(x=>x.status==="rejected").map(x=>({...x,
  file:path.relative(root,path.join(output,x.file)),sha256:sha(fs.readFileSync(path.join(output,x.file))),allowed_as_future_reference:false}));
const selection = {schema_version:1,date:"2026-09-12",status:review.status,community:"Nasa–Paeces",myth_id:429,slug:myth.slug,title:myth.title,
  variant:plan.variant,narrative_sha256:sha(myth.mito),source_snapshot:plan.source_snapshot,
  source_snapshot_sha256:sha(fs.readFileSync(path.join(root,plan.source_snapshot))),
  model_requested:plan.model,selected_count:3,records,rejected,execution_notes:review.execution_notes,
  generation_mode:"official_cli_multi_reference_api_edit",publication:false,cultural_certification:false,keyframes:false,
  campaign_status:"1_of_26_triptychs_produced_not_full_campaign_completion"};
fs.writeFileSync(path.join(run,"el-trueno.selection.v1.json"),JSON.stringify(selection,null,2)+"\n");
let md = "# El Trueno — primer tríptico Nasa–Paeces\n\nTres piezas seleccionadas editorialmente, pendientes de revisión del usuario. Primer relato atribuido a Martín Kuskue, registrado por Bernal y reproducido por Villa Posse. No se funde con las voces del cultivo inundado.\n\n";
md += "API OpenAI y modelo solicitado gpt-image-2.5-sunburst mediante CLI oficial. Seis referencias de la biblia autorizadas explícitamente. Maestros completos: horizontal 3:2, vertical 2:3, cuadrado 1:1; no recortes a 16:9 o 9:16.\n\n";
const titles = {entrada:"Entrada — consejo desde la peña",acto:"Acto — las varas en la laguna",huella:"Huella — la fuerza contenida por el agua"};
for(const r of records){
  md += "## "+titles[r.role]+"\n\n"+r.qa+"\n\n!["+titles[r.role]+"]("+path.join(root,r.file)+")\n\n";
}
md += "## Registro y límites\n\nPrompts, referencias y hashes: [selección](el-trueno.selection.v1.json), [plan](pilot-plan.v1.json), [revisión y ejecución](review.v1.json). La vertical inicial se conserva como rechazo por apoyo ambiguo de un pie. Entrada y huella conservan archivos del piloto anterior; dos nuevas llamadas completaron API pero no guardaron otra salida al encontrar destinos existentes. No se atribuyen esos bytes a las llamadas que colisionaron, ni se inventa su coste o un log original ausente.\n\n";
md += "Las nubes en relación con la capa y la huella de vara/agua son interpretaciones editoriales, no símbolos rituales tradicionales certificados. Geografía orientativa y ropa de adaptación. Sin modificación de texto/base de datos, app web, publicación ni keyframes. Solo este primer tríptico se produjo: 1/26, tres piezas seleccionadas de 78 previstas.\n";
fs.writeFileSync(path.join(run,"EL-TRUENO.md"),md);
const result = {status:"PASS",selected_images:records.length,reference_ids:[...new Set(records.flatMap(r=>r.references.map(x=>x.unit_id)))],rejected_images:rejected.length,
  narrative_sha256:selection.narrative_sha256,publication:false};
fs.writeFileSync(path.join(run,"audit-result.v1.json"),JSON.stringify(result,null,2)+"\n");
console.log(JSON.stringify(result,null,2));
