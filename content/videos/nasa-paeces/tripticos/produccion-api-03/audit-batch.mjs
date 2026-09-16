import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';

// Offline mechanical derivation from completed manual review. No network or SDK.
const root=process.cwd(), run='content/videos/nasa-paeces/tripticos/produccion-api-03';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const plan=read(run+'/plan.v1.json'), review=read(run+'/review.v1.json');
const bible=read(plan.bible_selection), snapshot=read(plan.source_snapshot);
assert.deepEqual(plan.myth_ids,[435,436,437,438,439]);
assert.equal(plan.jobs.length,15);
assert.equal(Object.keys(review.selected).length,15);
assert.equal(new Set(plan.jobs.map(j=>j.myth_id+'_'+j.role)).size,15);
const digest=sha(JSON.stringify(snapshot.rows.map(r=>({id:r.id,slug:r.slug,title:r.title,updated_at:r.updated_at,mito_sha256:sha(r.mito)}))));
assert.equal(digest,bible.corpus_digest);
const records=plan.jobs.map(j=>{
  const key=j.myth_id+'_'+j.role, filename=review.selected[key];
  assert.match(filename,new RegExp('^'+j.role+'-v[0-9]+\\.jpeg$'));
  const file='output/imagegen/nasa-paeces/tripticos/produccion-api-03/'+j.slug+'/'+filename;
  const qa=review.qa.find(q=>q.key===key&&q.file===filename&&q.status==='accepted');
  assert.ok(qa?.checks?.length>30,'Missing visual review: '+key);
  const dimensions=execFileSync('/opt/homebrew/bin/magick',['identify','-format','%w %h',file],{encoding:'utf8'}).trim();
  assert.equal(dimensions,{entrada:'1536 1024',acto:'1024 1536',huella:'1024 1024'}[j.role]);
  assert.equal(fs.readFileSync(j.prompt_file,'utf8').trim(),j.prompt.trim());
  assert.equal(j.model,'gpt-image-2.5-sunburst');
  const version=filename.match(/-v([0-9]+)\./)[1];
  const prompt_file=run+'/prompts/'+j.slug+'-'+j.role+'-v'+version+'.txt';
  const references=j.refs.map(id=>{
    const r=bible.records.find(r=>r.id===id); assert.ok(r);
    assert.equal(sha(fs.readFileSync(r.file)),r.sha256,'Bible drift '+id);
    return {unit_id:id,file:r.file,sha256:r.sha256};
  });
  const [width,height]=dimensions.split(' ').map(Number);
  return {myth_id:j.myth_id,slug:j.slug,title:j.title,variant:j.variant,role:j.role,label:j.label,file,
    sha256:sha(fs.readFileSync(file)),width,height,model_requested:j.model,quality_requested:j.quality,
    prompt_file,prompt_sha256:sha(fs.readFileSync(prompt_file)),references,qa:qa.checks};
});
const previous_paths=['content/videos/nasa-paeces/tripticos/produccion-api-01/el-trueno.selection.v1.json','content/videos/nasa-paeces/tripticos/produccion-api-02/selection.v1.json'];
let previousImages=0;
for(const p of previous_paths)for(const r of read(p).records){assert.equal(sha(fs.readFileSync(r.file)),r.sha256,'Previous image overwritten');previousImages++;}
assert.equal(previousImages,18);
const myths=plan.myth_ids.map(id=>{const r=snapshot.rows.find(r=>r.id===id), assets=records.filter(a=>a.myth_id===id);
  assert.deepEqual(assets.map(a=>a.role),['entrada','acto','huella']);
  return {myth_id:id,slug:r.slug,title:r.title,narrative_sha256:sha(r.mito),variant:assets[0].variant,assets:assets.map(a=>a.file)};
});
const selection={schema_version:1,date:'2026-09-12',status:'five_triptychs_complete_editorial_selection_ready_for_authorized_publication',
  community:'Nasa–Paeces',new_triptychs:5,new_selected_images:15,total_triptychs_with_previous:11,total_selected_images_with_previous:33,
  corpus_digest:digest,source_snapshot:plan.source_snapshot,source_snapshot_sha256:sha(fs.readFileSync(plan.source_snapshot)),
  previous_selections:previous_paths,myths,records,execution:review.runs,max_concurrency_requested:4,
  publication_authorized:true,publication:false,keyframes:false,cultural_certification:false};
fs.writeFileSync(run+'/selection.v1.json',JSON.stringify(selection,null,2)+'\n');
const result={status:'PASS',myths:5,new_images:15,total_triptychs:11,total_selected_images:33,
  previous_images_preserved:previousImages,verified_reference_ids:[...new Set(records.flatMap(r=>r.references.map(x=>x.unit_id)))],
  publication_authorized:true,publication:false};
fs.writeFileSync(run+'/audit-result.v1.json',JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify(result,null,2));
