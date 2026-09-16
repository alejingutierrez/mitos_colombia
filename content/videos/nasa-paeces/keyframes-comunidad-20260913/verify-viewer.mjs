import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';

const base='content/videos/nasa-paeces/keyframes-comunidad-20260913';
const root='output/imagegen/nasa-paeces/keyframes/el-trueno-produccion-01';
const origin='http://127.0.0.1:8897/';
const read=p=>JSON.parse(fs.readFileSync(p));
const manifest=read(`${base}/manifest.json`),production=read(`${base}/verification.json`);
const get=async url=>{const r=await fetch(url,{signal:AbortSignal.timeout(30000)});assert.equal(r.status,200,url);return r;};
const home=await (await get(`${origin}comunidad-nasa/`)).text();
assert(home.includes(`${production.selected_frames} / 270 cuadros`),'Viewer progress must match persisted selection');
assert.equal((home.match(/class="card myth"/g)||[]).length,26);
const originals=[];let storyboards=0;
for(const myth of manifest.scope){
 const retained=myth.id===429;
 const selection=read(retained?manifest.retained.selection:`${base}/myths/${myth.slug}/selection.json`);
 const url=retained?origin:`${origin}comunidad-nasa/${myth.slug}/`;
 const html=await (await get(url)).text();
 if(!retained){
  assert.equal((html.match(/class="frame-button"/g)||[]).length,selection.selected.length,`${myth.slug}: selected frame buttons`);
  await get(`${url}guion.md`);
  if(selection.selected.length)await get(`${url}secuencia.jpeg`);
 }
 for(const frame of selection.selected){
  const relative=path.relative(root,frame.path);assert(!relative.startsWith('..'));
  originals.push({url:new URL(relative,origin).href,sha256:frame.sha256,id:frame.id,slug:myth.slug});
 }
 storyboards++;
}
let cursor=0;
await Promise.all(Array.from({length:6},async()=>{
 while(cursor<originals.length){
  const frame=originals[cursor++];
  const response=await get(frame.url);
  assert(response.headers.get('content-type')?.startsWith('image/png'),frame.url);
  const bytes=Buffer.from(await response.arrayBuffer());
  assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),frame.sha256,`${frame.slug}/${frame.id}: served original`);
 }
}));
if(process.argv.includes('--complete'))assert.equal(originals.length,270);
let archives=0,combinedHash=null;
if(fs.existsSync(`${base}/packages.json`)){
 const packages=read(`${base}/packages.json`);
 assert.equal(packages.myths.length,26);
 for(const archive of [...packages.myths,packages.combined]){
  const relative=path.relative(root,archive.path);assert(!relative.startsWith('..'));
  const url=new URL(relative,origin).href;
  const response=await fetch(url,{method:'HEAD',signal:AbortSignal.timeout(30000)});
  assert.equal(response.status,200,url);
  assert.equal(Number(response.headers.get('content-length')),archive.bytes,`${url}: archive length`);
  archives++;
 }
 assert(home.includes('nasa-26-mitos-270-keyframes.zip'),'Combined download must be visible');
 const response=await get(new URL(path.relative(root,packages.combined.path),origin).href);
 const digest=crypto.createHash('sha256');
 for await(const chunk of response.body)digest.update(chunk);
 combinedHash=digest.digest('hex');assert.equal(combinedHash,packages.combined.sha256,'Served combined archive hash');
}
if(process.argv.includes('--complete'))assert.equal(archives,27,'Export all archives before final HTTP verification');
const result={checked_at:new Date().toISOString(),status:'PASS',origin,storyboards,original_pngs_served_and_hash_verified:originals.length,archives_served_and_size_verified:archives,combined_archive_sha256_verified:combinedHash,persisted_selected:production.selected_frames,production_status:production.production_status};
fs.writeFileSync(`${base}/http-verification.json`,JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify(result));
