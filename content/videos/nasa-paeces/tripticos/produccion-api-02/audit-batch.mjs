import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import assert from "node:assert/strict";
import {execFileSync} from "node:child_process";

// Offline review verification and mechanical manifest/document derivation only.
// No SDK, credentials, network, publication, database or app mutation.
const root = process.cwd();
const relativeRun = "content/videos/nasa-paeces/tripticos/produccion-api-02";
const run = path.join(root,relativeRun);
const output = path.join(root,"output/imagegen/nasa-paeces/tripticos/produccion-api-02");
const read = p => JSON.parse(fs.readFileSync(p,"utf8"));
const sha = b => crypto.createHash("sha256").update(b).digest("hex");
const plan = read(path.join(run,"plan.v1.json"));
const review = read(path.join(run,"review.v1.json"));
const bible = read(path.join(root,plan.bible_selection));
const snapshot = read(path.join(root,plan.source_snapshot));
assert.deepEqual(plan.myth_ids,[430,431,432,433,434]);
assert.equal(plan.jobs.length,15);
assert.equal(new Set(plan.jobs.map(j=>j.myth_id+"_"+j.role)).size,15);
assert.equal(Object.keys(review.selected).length,15);
const corpusDigest = sha(JSON.stringify(snapshot.rows.map(r=>({id:r.id,slug:r.slug,title:r.title,updated_at:r.updated_at,mito_sha256:sha(r.mito)}))));
assert.equal(corpusDigest,bible.corpus_digest,"Source corpus drift");
const expected = {entrada:"1536 1024",acto:"1024 1536",huella:"1024 1024"};
const records = plan.jobs.map(job=>{
  const key = job.myth_id+"_"+job.role;
  const filename = review.selected[key];
  assert.match(filename,new RegExp("^"+job.role+"-v[0-9]+\\.jpeg$"));
  const file = path.join(output,job.slug,filename);
  const qa = review.qa.find(q=>q.key===key && q.file===filename && q.status==="accepted");
  assert.ok(qa?.checks?.length>30,"Missing selected QA "+key);
  const dimensions = execFileSync("/opt/homebrew/bin/magick",["identify","-format","%w %h",file],{encoding:"utf8"}).trim();
  assert.equal(dimensions,expected[job.role]);
  const version = filename.match(/-v([0-9]+)\./)[1];
  const prompt = path.join(run,"prompts",job.slug+"-"+job.role+"-v"+version+".txt");
  const primaryPrompt = fs.readFileSync(job.prompt_file,"utf8");
  assert.equal(primaryPrompt.trim(),job.prompt.trim(),"Primary prompt drift "+key);
  const effective = fs.readFileSync(prompt,"utf8");
  assert.ok(effective.includes("MATERIAL LOCK:") && effective.includes("ZERO text"));
  assert.equal(job.model,"gpt-image-2.5-sunburst");
  const references = job.refs.map(id=>{
    const ref = bible.records.find(r=>r.id===id);
    assert.ok(ref);
    assert.equal(sha(fs.readFileSync(path.join(root,ref.file))),ref.sha256,"Reference drift "+id);
    return {unit_id:id,file:ref.file,sha256:ref.sha256,role:"specified_identity_prop_or_environment_from_accepted_bible"};
  });
  const [width,height] = dimensions.split(" ").map(Number);
  const predecessors = review.qa.filter(q=>q.key===key && q.status==="rejected").map(q=>({
    file:path.relative(root,path.join(output,job.slug,q.file)),sha256:sha(fs.readFileSync(path.join(output,job.slug,q.file))),reason:q.checks,allowed_as_future_reference:false}));
  return {myth_id:job.myth_id,slug:job.slug,title:job.title,variant:job.variant,role:job.role,label:job.label,
    file:path.relative(root,file),sha256:sha(fs.readFileSync(file)),width,height,model_requested:job.model,quality_requested:job.quality,
    prompt_file:path.relative(root,prompt),prompt_sha256:sha(fs.readFileSync(prompt)),references,qa:qa.checks,retained_predecessors:predecessors};
});
const myths = plan.myth_ids.map(id=>{
  const row = snapshot.rows.find(r=>r.id===id);
  const assets = records.filter(r=>r.myth_id===id);
  assert.deepEqual(assets.map(r=>r.role),["entrada","acto","huella"]);
  return {myth_id:id,slug:row.slug,title:row.title,narrative_sha256:sha(row.mito),variant:assets[0].variant,assets:assets.map(r=>r.file)};
});
const previousPath = "content/videos/nasa-paeces/tripticos/produccion-api-01/el-trueno.selection.v1.json";
const previous = read(path.join(root,previousPath));
for(const r of previous.records)assert.equal(sha(fs.readFileSync(path.join(root,r.file))),r.sha256,"Previous triptych overwritten");
const selection = {schema_version:1,date:"2026-09-12",status:"five_triptychs_complete_editorial_selection_pending_user_review",
  community:"Nasa–Paeces",new_triptychs:5,new_selected_images:15,total_triptychs_with_previous:6,total_selected_images_with_previous:18,
  corpus_digest:corpusDigest,source_snapshot:plan.source_snapshot,source_snapshot_sha256:sha(fs.readFileSync(path.join(root,plan.source_snapshot))),
  previous_selection:previousPath,previous_selection_sha256:sha(fs.readFileSync(path.join(root,previousPath))),myths,records,
  execution:review.runs,max_concurrency_requested:4,cost_available:false,request_ids_available:false,
  publication:false,keyframes:false,cultural_certification:false};
fs.writeFileSync(path.join(run,"selection.v1.json"),JSON.stringify(selection,null,2)+"\n");
let md = "# Cinco trípticos nuevos — Nasa–Paeces\n\n5/5 trípticos y 15/15 piezas seleccionadas editorialmente; pendientes de revisión del usuario. Con El Trueno: seis trípticos, 18 piezas. API OpenAI, modelo solicitado gpt-image-2.5-sunburst; referencias aceptadas de la biblia. Sin app web ni publicación.\n\n";
md += "Entrada horizontal 1536×1024 high; acto vertical 1024×1536 medium; huella cuadrada 1024×1024 medium. Maestros completos sin recorte. Hojas de contacto son derivados de revisión; etiquetas fuera de los originales.\n\n";
md += "[Selección, referencias y hashes](selection.v1.json), [prompts y planes](plan.v1.json), [QA y ejecuciones](review.v1.json).\n\n";
for(const myth of myths){
  md += "## "+myth.title+"\n\n"+myth.variant+"\n\n";
  for(const r of records.filter(r=>r.myth_id===myth.myth_id))md += "### "+r.role+" — "+r.label+"\n\n"+r.qa+"\n\n!["+r.title+" — "+r.role+"]("+path.join(root,r.file)+")\n\n";
}
md += "## Límites\n\nSíntesis simbólicas son interpretaciones editoriales, no iconografía ritual certificada. Ropa y puesta en escena son adaptaciones reversibles; lugares no son cartografía verificada. Se eligen momentos previos al daño sin reescribir desenlaces. No se fusionan las voces de Llíban ni sus culebras con la niña-serpiente. No se modificó la base de datos, el corpus o las imágenes publicadas. No se produjeron keyframes. Esta tanda no cierra los 26 trípticos previstos: total actual seis.\n";
fs.writeFileSync(path.join(run,"CINCO-TRIPTICOS.md"),md);
const result = {status:"PASS",myths:5,new_images:15,total_triptychs:6,total_selected_images:18,
  verified_reference_ids:[...new Set(records.flatMap(r=>r.references.map(x=>x.unit_id)))],rejected_candidates:review.qa.filter(q=>q.status==="rejected").length,
  previous_triptych_preserved:true,publication:false};
fs.writeFileSync(path.join(run,"audit-result.v1.json"),JSON.stringify(result,null,2)+"\n");
console.log(JSON.stringify(result,null,2));
