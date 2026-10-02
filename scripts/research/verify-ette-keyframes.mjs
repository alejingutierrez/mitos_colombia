import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import sharp from 'sharp';

const root=process.cwd();
const folder=path.resolve(process.argv[2]);
const read=name=>JSON.parse(fs.readFileSync(path.join(folder,name),'utf8'));
const hash=file=>crypto.createHash('sha256').update(fs.readFileSync(path.resolve(root,file))).digest('hex');
const selection=read('selection.complete.v1.json');
const baseline=read('baseline.v1.json');
const jobs=read('jobs.complete.v1.json');
const failures=[];
const check=(okay,message)=>{if(!okay)failures.push(message);};
const protectedFiles=baseline.protected_files || baseline.protected || [];
check(protectedFiles.length===18,'Expected 18 protected files');
for(const item of protectedFiles)check(hash(item.file)===item.sha256,'Protected file changed: '+item.file);
check(selection.selected.length===8,'Expected eight selected frames');
check(new Set(selection.selected.map(e=>e.sha256)).size===8,'Selected images must be unique');
for(let i=0;i<selection.selected.length;i++){
  const e=selection.selected[i];
  check(e.frame_id==='kf'+String(i+1).padStart(2,'0'),'Frame order mismatch');
  const m=await sharp(e.file).metadata();
  check(m.width===1024 && m.height===1536 && m.format==='jpeg','Unexpected selected image dimensions/format: '+e.frame_id);
}
const prior=JSON.parse(fs.readFileSync(jobs.previous_batch_jobs_file,'utf8'));
const all=[...prior.jobs,...jobs.jobs];
check(all.length===10,'Expected ten cumulative successful render records');
for(const e of all){
  check(hash(e.file)===e.sha256,'Image digest mismatch: '+e.file);
  check(hash(e.prompt_file)===e.prompt_sha256,'Prompt digest mismatch: '+e.prompt_file);
  check(fs.statSync(e.file).size===e.bytes,'Image size mismatch: '+e.file);
  for(const input of e.inputs)check(hash(input.file)===input.sha256,'Input digest mismatch: '+input.file);
}
for(const e of selection.selected)check(hash(e.file)===e.sha256,'Selection digest mismatch: '+e.frame_id);
console.log(JSON.stringify({passed:failures.length===0,protected_files_checked:protectedFiles.length,selected_frames_checked:selection.selected.length,cumulative_render_records_checked:all.length,masters:'1024x1536 native 2:3, uncropped',failures},null,2));
if(failures.length)process.exitCode=1;
