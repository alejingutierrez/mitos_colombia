import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';

// Offline derivation from manual visual reviews, never an API runner.
const run=process.argv[2];
assert.match(run,/^content\/videos\/nasa-paeces\/tripticos\/produccion-api-0[456]$/);
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const plan=read(run+'/plan.v1.json'), review=read(run+'/review.v1.json');
const bible=read(plan.bible_selection), snapshot=read(plan.source_snapshot);
assert.equal(plan.myth_ids.length,5); assert.equal(plan.jobs.length,15);
assert.equal(Object.keys(review.selected).length,15);
assert.equal(new Set(plan.jobs.map(j=>j.myth_id+'_'+j.role)).size,15);
const digest=sha(JSON.stringify(snapshot.rows.map(r=>({id:r.id,slug:r.slug,title:r.title,updated_at:r.updated_at,mito_sha256:sha(r.mito)}))));
assert.equal(digest,bible.corpus_digest,'Frozen corpus drift');
let previousImages=0;
for(const p of plan.previous_selections)for(const r of read(p).records){assert.equal(sha(fs.readFileSync(r.file)),r.sha256,'Previous image overwritten');previousImages++;}
assert.equal(previousImages,(plan.total_when_complete-5)*3);
const records=plan.jobs.map(j=>{
  const key=j.myth_id+'_'+j.role, filename=review.selected[key];
  assert.match(filename,new RegExp('^'+j.role+'-v[0-9]+\\.jpeg$'));
  const file=path.relative(process.cwd(),path.join(path.dirname(j.out),filename));
  const qa=review.qa.find(q=>q.key===key&&q.file===filename&&q.status==='accepted');
  assert.ok(qa?.checks?.length>30,'Missing manual review '+key);
  const dimensions=execFileSync('/opt/homebrew/bin/magick',['identify','-format','%w %h',file],{encoding:'utf8'}).trim();
  assert.equal(dimensions,{entrada:'1536 1024',acto:'1024 1536',huella:'1024 1024'}[j.role]);
  assert.equal(fs.readFileSync(j.prompt_file,'utf8').trim(),j.prompt.trim(),'Primary prompt drift');
  assert.equal(j.model,'gpt-image-2.5-sunburst');
  const version=filename.match(/-v([0-9]+)\./)[1];
  const prompt_file=run+'/prompts/'+j.slug+'-'+j.role+'-v'+version+'.txt';
  const references=j.refs.map(id=>{const r=bible.records.find(r=>r.id===id);assert.ok(r);
    assert.equal(sha(fs.readFileSync(r.file)),r.sha256,'Bible drift '+id);return {unit_id:id,file:r.file,sha256:r.sha256};});
  const [width,height]=dimensions.split(' ').map(Number);
  const predecessors=review.qa.filter(q=>q.key===key&&q.status==='rejected').map(q=>({file:path.relative(process.cwd(),path.join(path.dirname(j.out),q.file)),reason:q.checks,allowed_as_future_reference:false}));
  return {myth_id:j.myth_id,slug:j.slug,title:j.title,variant:j.variant,role:j.role,label:j.label,file,sha256:sha(fs.readFileSync(file)),
    width,height,model_requested:j.model,quality_requested:j.quality,prompt_file,prompt_sha256:sha(fs.readFileSync(prompt_file)),references,qa:qa.checks,retained_predecessors:predecessors};
});
const myths=plan.myth_ids.map(id=>{const r=snapshot.rows.find(r=>r.id===id);assert.ok(r);const assets=records.filter(a=>a.myth_id===id);
  assert.deepEqual(assets.map(a=>a.role),['entrada','acto','huella']);return {myth_id:id,slug:r.slug,title:r.title,narrative_sha256:sha(r.mito),variant:assets[0].variant,assets:assets.map(a=>a.file)};});
const selection={schema_version:1,date:'2026-09-12',status:'complete_editorial_selection_ready_for_authorized_publication',community:'Nasa–Paeces',
  new_triptychs:5,new_selected_images:15,total_triptychs_with_previous:plan.total_when_complete,total_selected_images_with_previous:plan.total_when_complete*3,
  corpus_digest:digest,source_snapshot:plan.source_snapshot,source_snapshot_sha256:sha(fs.readFileSync(plan.source_snapshot)),previous_selections:plan.previous_selections,
  myths,records,execution:review.runs,max_concurrency_requested:4,publication_authorized:true,publication:false,keyframes:false,cultural_certification:false};
fs.writeFileSync(run+'/selection.v1.json',JSON.stringify(selection,null,2)+'\n');
const result={status:'PASS',myths:5,new_images:15,total_triptychs:plan.total_when_complete,total_selected_images:plan.total_when_complete*3,
  previous_images_preserved:previousImages,verified_reference_ids:[...new Set(records.flatMap(r=>r.references.map(x=>x.unit_id)))],publication_authorized:true,publication:false};
fs.writeFileSync(run+'/audit-result.v1.json',JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify(result,null,2));
