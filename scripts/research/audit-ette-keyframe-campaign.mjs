import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import sharp from 'sharp';

const folder=path.resolve(process.argv[2]);
const strict=process.argv.includes('--require-complete');
const read=f=>JSON.parse(fs.readFileSync(f,'utf8'));
const hash=f=>crypto.createHash('sha256').update(fs.readFileSync(f)).digest('hex');
const plan=read(path.join(folder,'campaign.plan.v1.json'));
const baseline=read(path.join(folder,'baseline.v1.json'));
const failures=[];
const check=(okay,message)=>{if(!okay)failures.push(message);};
for(const e of baseline.protected_files)check(hash(e.file)===e.sha256,'Protected file changed: '+e.file);
const frames=[...plan.existing_myth_selection.selected];
let completed=1;
const coverage=[];
for(const myth of plan.myths){
  const file=path.join(folder,myth.slug,'selection.v1.json');
  const selected=fs.existsSync(file)?read(file).selected:[];
  check(selected.length<=myth.frames.length,'Too many frames: '+myth.slug);
  for(let i=0;i<selected.length;i++)check(selected[i].frame_id===myth.frames[i].frame_id,'Frame order mismatch: '+myth.slug);
  frames.push(...selected);
  if(selected.length===myth.frames.length)completed++;
  coverage.push({myth_id:myth.id,slug:myth.slug,planned:myth.frames.length,selected:selected.length,pending:myth.frames.slice(selected.length).map(f=>f.frame_id)});
}
check(new Set(frames.map(e=>e.sha256)).size===frames.length,'An image was reused between keyframes');
for(const e of frames){
  check(hash(e.file)===e.sha256,'Image digest mismatch: '+e.file);
  check(hash(e.prompt_file)===e.prompt_sha256,'Prompt digest mismatch: '+e.prompt_file);
  check(fs.statSync(e.file).size===e.bytes,'Image size mismatch: '+e.file);
  const m=await sharp(e.file).metadata();
  check(m.width===1024&&m.height===1536&&m.format==='jpeg','Unexpected master format: '+e.file);
  for(const input of e.inputs)check(hash(input.file)===input.sha256,'Input digest mismatch: '+input.file);
}
check(plan.narrative_matches.every(e=>e.match),'Narrative mismatch');
if(strict){check(frames.length===157,'Expected 157 selected keyframes');check(completed===23,'Expected 23 complete myths');}
console.log(JSON.stringify({passed:failures.length===0,complete:frames.length===157&&completed===23,selected:frames.length,planned:157,completed_myths:completed,total_myths:23,protected_files_checked:baseline.protected_files.length,coverage,failures},null,2));
if(failures.length)process.exitCode=1;
