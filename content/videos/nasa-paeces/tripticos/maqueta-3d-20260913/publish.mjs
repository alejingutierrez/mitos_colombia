import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import dotenv from 'dotenv';
import {sql} from '@vercel/postgres';
const base='content/videos/nasa-paeces/tripticos/maqueta-3d-20260913';
const out='output/imagegen/nasa-paeces/tripticos/maqueta-3d-20260913';
const publicationId='nasa-maqueta-3d-20260913';
const read=p=>JSON.parse(fs.readFileSync(p));
const hash=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const digest=s=>crypto.createHash('sha256').update(s).digest('hex');
const manifest=read(`${base}/manifest.json`),baseline=read(`${base}/production-baseline.json`);
const dry=process.argv.includes('--dry-run'),slugs=process.argv.slice(2).filter(a=>a!=='--dry-run');assert(slugs.length);
dotenv.config({path:'.env.local',quiet:true});dotenv.config({path:'.env',quiet:true});if(!process.env.POSTGRES_URL)process.env.POSTGRES_URL=process.env.DATABASE_URL;
for(const slug of slugs){
 const m=manifest.myths.find(m=>m.slug===slug);assert(m,'Outside frozen scope');
 assert.equal(hash(m.source_selection),m.source_selection_sha256);
 const records=['entrada','acto','huella'].map(r=>read(`${base}/accepted/${slug}-${r}.json`));
 assert.equal(new Set(records.map(r=>r.role)).size,3);
 for(const r of records){assert.equal(r.slug,slug);assert.equal(r.myth_id,m.id);assert.equal(hash(r.path),r.sha256);assert.equal(hash(r.publication_derivative.path),r.publication_derivative.sha256);assert.equal(hash(r.request_file),r.request_sha256);assert.equal(hash(r.prompt_file),r.prompt_sha256);assert(r.qa&&r.review==='editorial');for(const ref of read(r.request_file).references)assert.equal(hash(ref.path),ref.sha256);}
 const receiptFile=`${base}/publication-receipts/${publicationId}/${slug}.json`;
 if(fs.existsSync(receiptFile)){assert.equal(read(receiptFile).status,'published','Existing incomplete receipt; inspect before retry');console.log(JSON.stringify({slug,status:'already_published'}));continue;}
 const row=(await sql.query('SELECT id,content,image_url,square_image_url FROM myths WHERE id=$1',[m.id])).rows[0];
 const before=baseline.rows.find(r=>r.id===m.id);assert.equal(digest(row.content),m.narrative_target_sha256);assert.equal(row.image_url,before.image_url,'Image changed since baseline');assert.equal(row.square_image_url,before.square_image_url,'Square changed since baseline');
 const items=Object.fromEntries(records.map(r=>[{entrada:'horizontal',acto:'vertical',huella:'cuadrada'}[r.role],{escena:fs.readFileSync(r.prompt_file,'utf8')} ]));
 const selection={myth_id:m.id,slug,narrative_target_sha256:m.narrative_target_sha256,generation_tool:'image_gen.imagegen',exact_model:'not_exposed_by_tool',quality:'not_exposed_by_tool',publication_authorized:true,derivative_note:'JPEG 96 4:4:4 without resizing or cropping; original generated PNG retained',selected:records};
 fs.mkdirSync(`${base}/publication-selection`,{recursive:true});
 fs.writeFileSync(`${base}/publication-selection/${slug}.json`,JSON.stringify(selection,null,2)+'\n');
 fs.writeFileSync(`${out}/${slug}/manifest.json`,JSON.stringify({myth_id:m.id,slug,items,selection:`${base}/publication-selection/${slug}.json`},null,2)+'\n');
 const args=['scripts/apply-myth-triptych.mjs','--slug',slug,'--dir',`${out}/${slug}`,'--preserve-original','--publication-id',publicationId,'--receipt-dir',`${base}/publication-receipts`,'--site','https://www.mitosdecolombia.com',...(dry?['--dry-run']:[])];
 const result=spawnSync(process.execPath,args,{encoding:'utf8',maxBuffer:10*1024*1024});
 fs.mkdirSync(`${base}/logs`,{recursive:true});fs.writeFileSync(`${base}/logs/${slug}-${dry?'dry-run':'publish'}.log`,result.stdout+'\n'+result.stderr);
 assert.equal(result.status,0,result.stderr||result.stdout);
 if(!dry)assert.equal(read(receiptFile).status,'published');
 console.log(JSON.stringify({slug,status:dry?'dry_run_pass':'published',receipt:dry?null:receiptFile}));
}
await sql.end();
