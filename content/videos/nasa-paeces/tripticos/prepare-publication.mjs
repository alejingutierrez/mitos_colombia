import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import dotenv from 'dotenv';
import {sql} from '@vercel/postgres';
import {readTriptychSelection} from '../../../../scripts/apply-myth-triptych.mjs';

// Read-only Neon preflight; derive publisher-compatible local manifests.
dotenv.config({path:'.env.local',quiet:true});
dotenv.config({path:'.env',quiet:true});
if(!process.env.POSTGRES_URL)process.env.POSTGRES_URL=process.env.DATABASE_URL;
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const sha=s=>crypto.createHash('sha256').update(s).digest('hex');
const root='content/videos/nasa-paeces/tripticos';
const requested=process.argv[2]||'existing';
const selections=requested==='existing'
  ?[read(root+'/produccion-api-01/el-trueno.selection.v1.json'),read(root+'/produccion-api-02/selection.v1.json')]
  :[read(requested)];
const records=selections.flatMap(s=>s.records.map(r=>({...r,myth_id:r.myth_id||s.myth_id,slug:r.slug||s.slug})));
const ids=[...new Set(records.map(r=>r.myth_id))];
assert.equal(ids.length,requested==='existing'?6:5);
assert.equal(records.length,ids.length*3);
const snapshot=read('content/videos/nasa-paeces/biblia/research/corpus-snapshot-20260912.json');
const rows=(await sql.query('SELECT id,slug,title,mito,content,image_url,square_image_url,updated_at FROM myths WHERE id = ANY($1::int[]) ORDER BY id',[ids])).rows;
assert.equal(rows.length,ids.length);
const requestedOutput=process.argv[3];
if(requestedOutput)assert.match(requestedOutput,/^[a-z0-9-]+$/,'Invalid publication subdirectory');
const out=path.join(root,'publication-selection',requestedOutput||(requested==='existing'?'existing-six':'next-five'));
fs.mkdirSync(out,{recursive:true});
const baseline=path.join(out,'production-baseline.v1.json');
assert.ok(!fs.existsSync(baseline),'Preflight baseline already exists; preserve it');
for(const row of rows)assert.equal(row.mito,snapshot.rows.find(r=>r.id===row.id)?.mito,'Narrative drift '+row.slug);
fs.writeFileSync(baseline,JSON.stringify({read_only:true,date:new Date().toISOString(),ids,rows},null,2)+'\n');
for(const row of rows){
  const selected=records.filter(r=>r.myth_id===row.id).map(r=>({
    act:r.role,path:r.file,sha256:r.sha256,prompt_file:r.prompt_file,prompt_sha256:r.prompt_sha256,
    quality:r.quality_requested||r.planned_quality,
    visual_function:r.role==='huella'?'symbolic_synthesis':r.role==='entrada'?'narrative_entry':'second_narrative_scene',
    editorial_qa:r.qa,
  }));
  const file=path.join(out,row.slug+'.json');
  assert.ok(!fs.existsSync(file),'Publication selection already exists');
  fs.writeFileSync(file,JSON.stringify({myth:row.slug,myth_id:row.id,narrative_target_sha256:sha(row.content),selected,publication_authorized:true,preserve_original:true},null,2)+'\n');
  await readTriptychSelection(file,row.slug);
}
await sql.end();
console.log(JSON.stringify({status:'PASS',ids,images:records.length,publication_selection_directory:out,source_narratives_preserved:true},null,2));
