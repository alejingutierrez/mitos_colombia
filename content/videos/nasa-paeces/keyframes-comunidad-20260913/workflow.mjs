import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import sharp from 'sharp';
import {plans} from './plans.mjs';
export const base='content/videos/nasa-paeces/keyframes-comunidad-20260913';
export const out='output/imagegen/nasa-paeces/keyframes/el-trueno-produccion-01/comunidad-nasa';
const corpusPath='content/videos/nasa-paeces/biblia/research/corpus-snapshot-20260912.json';
const trip='content/videos/nasa-paeces/tripticos/maqueta-3d-20260913';
const anchor='output/imagegen/nasa-paeces/keyframes/el-trueno-produccion-01/b1b-maqueta-v2.png';
const read=p=>JSON.parse(fs.readFileSync(p));
const hash=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const digest=s=>crypto.createHash('sha256').update(s).digest('hex');
const write=(p,d,replace=false)=>{assert(replace||!fs.existsSync(p),`Exists: ${p}`);fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,JSON.stringify(d,null,2)+'\n');};
const corpus=read(corpusPath),rows=corpus.rows;
const [cmd,...args]=process.argv.slice(2);
if(cmd==='prepare'){
 if(!fs.existsSync(`${base}/manifest.json`))write(`${base}/manifest.json`,{schema:'nasa-community-keyframes/v1',created_at:new Date().toISOString(),scope:rows.map(r=>({id:r.id,slug:r.slug,title:r.title})),expected_myths:26,retained:{myth:429,frames:14,selection:'content/videos/nasa-paeces/videos/el-trueno/revision-maqueta-03/selection.json',sha256:hash('content/videos/nasa-paeces/videos/el-trueno/revision-maqueta-03/selection.json')},corpus:{path:corpusPath,sha256:hash(corpusPath)},style:{path:anchor,sha256:hash(anchor)},provider:'image_gen.imagegen',exact_model:'not_exposed_by_tool',quality:'not_exposed_by_tool',scope_notes:'All keyframes for the 26 frozen Nasa myths; new scripts/storyboards for 25. Original narratives and all earlier selections preserved. No voice, animation or audiovisual publication.'});
 for(const p of plans){
  const row=rows.find(r=>r.id===p.id);assert(row);const dir=`${base}/myths/${row.slug}`;
  if(fs.existsSync(`${dir}/plan.json`))continue;
  const refs=Object.fromEntries(['entrada','acto'].map(role=>{const r=read(`${trip}/accepted/${row.slug}-${role}.json`);assert.equal(hash(r.path),r.sha256);return[role,{path:r.path,sha256:r.sha256}];}));
  let time=0;const blocks=p.blocks.map((b,bi)=>{const words=b.voice.trim().split(/\s+/).length;const duration=Math.max(8,Math.ceil(words/1.95)+2);const start=time;time+=duration;return {id:`b${bi+1}`,voice_over:b.voice,word_count:words,time_seconds:[start,time],shots:b.shots.map((scene,i)=>({id:`k${String(bi*2+i+1).padStart(2,'0')}`,time_seconds:[start+Math.round(i*duration/2),start+Math.round((i+1)*duration/2)],scene,refs:b.refs}))};});
  write(`${dir}/source.snapshot.json`,row);
  write(`${dir}/plan.json`,{myth_id:p.id,slug:row.slug,title:row.title,variant:p.variant,rules:p.rules,source:{path:`${dir}/source.snapshot.json`,sha256:hash(`${dir}/source.snapshot.json`),narrative_sha256:digest(row.mito)},references:refs,expected_frames:blocks.length*2,estimated_seconds:time,timing_status:'provisional_pending_recorded_voice',voice_words:blocks.reduce((n,b)=>n+b.word_count,0),blocks});
  write(`${dir}/selection.json`,{status:'in_progress',selected:[],rejected:[]});
  fs.writeFileSync(`${dir}/GUION.md`,`# ${row.title}\n\nVersión: ${p.variant}\n\n${blocks.map(b=>`## ${b.time_seconds.join('–')} s\n\n${b.voice_over}\n\n${b.shots.map(s=>`- ${s.id}: ${s.scene}`).join('\n')}`).join('\n\n')}\n\nTiempos provisionales. La puesta en escena es una adaptación editorial.\n`);
 }
 console.log(JSON.stringify({prepared:plans.length,planned_frames:plans.reduce((n,p)=>n+p.blocks.length*2,0),retained:14}));
}else if(cmd==='request'){
 const row=rows.find(r=>r.slug===args[0]||String(r.id)===args[0]);assert(row);const dir=`${base}/myths/${row.slug}`;
 const plan=read(`${dir}/plan.json`),selection=read(`${dir}/selection.json`),shots=plan.blocks.flatMap(b=>b.shots);
 const shot=shots.find(s=>!selection.selected.some(a=>a.id===s.id));if(!shot){console.log(JSON.stringify({complete:row.slug}));process.exit(0);}
 const version=Number(args[1]||(Math.max(0,...selection.rejected.filter(a=>a.id===shot.id).map(a=>a.version))+1)),file=`${dir}/requests/${shot.id}-v${version}.json`;
 if(fs.existsSync(file)){console.log(JSON.stringify(read(file)));process.exit(0);}
 const frozen=read(`${base}/manifest.json`);assert.equal(hash(frozen.corpus.path),frozen.corpus.sha256);assert.equal(hash(plan.source.path),plan.source.sha256);
 const previousCount=args[4]===undefined?2:Number(args[4]);assert(Number.isInteger(previousCount)&&previousCount>=0&&previousCount<=2);
 const previous=previousCount?selection.selected.slice(-previousCount):[];
 const referenceRoles=args[3]==='none'?[]:args[3]?args[3].split(','):shot.refs;
 const refs=[...referenceRoles.map(role=>({...plan.references[role],role:`Tríptico ${role}: identidades, vestuario y escenario de ESTE mito; NO copia de composición.`})),{...frozen.style,role:'SOLO material físico de papel: no transferir personas, ropa, varas, laguna ni iluminación nocturna.'},...previous.map(a=>({path:a.path,sha256:a.sha256,role:`Keyframe anterior ${a.id}: continuidad de identidades y lugares que coincidan, nunca importar acción u objetos ausentes en el nuevo plano.`}))];
 if([436,442].includes(row.id)&&/Chautéh/.test(shot.scene)){
  const character=read(`${trip}/accepted/formacion-del-rio-paez-entrada.json`);
  if(refs.length===5)refs.splice(referenceRoles.length+1,1);
  refs.push({path:character.path,sha256:character.sha256,role:'SOLO identidad y vestuario de Chautéh: cabello negro LARGO en capas, ruana VERDE OSCURA irregular, pantalón GRIS, SIN bolsa blanca. El estado del ojo depende del plano. No importar agua ni carrizo ni cambiar a los otros personajes.'});
 }
 if([441,453].includes(row.id)&&/Santo Tomás/.test(shot.scene)){
  const character=read(`${base}/myths/santo-tomas/selection.json`).selected.find(a=>a.id==='k03');assert(character);
  if(refs.length===5)refs.splice(referenceRoles.length+1,1);
  refs.push({path:character.path,sha256:character.sha256,role:'SOLO identidad de Santo Tomás: barba negra, cabello negro largo irregular, ropa GRIS VERDOSA raída y bufanda CREMA LARGA. No importar acciones ni objetos del otro relato.'});
 }
 assert(refs.length<=5);refs.forEach(r=>assert.equal(hash(r.path),r.sha256));
 const prompt=`Use case: illustration-story. Produce ONE portrait 9:16 cinematic KEYFRAME, a real-looking miniature built ENTIRELY from CUT AND FOLDED PAPER, photographed from INSIDE the set. Myth: ${row.title}. Frame ${shot.id}.\n\nREFERENCE ROLES:\n${refs.map((r,i)=>`Image ${i+1}: ${r.role}`).join('\n')}\n\nEXACT NEW SHOT, render only this moment, not an entire story or multi-panel sheet:\n${shot.scene}\n\nVISIBLE CONTENT RULE: The exact new shot above is the complete inventory for this one image. Later events, other characters and other props of the myth are absent unless explicitly named in this shot.\n\nPHYSICAL MATERIAL IS MANDATORY: separately cut, thick matte cardstock planes; deep air gaps and actual cast contact shadows; lifted edges, paper tabs, crisp folds and visibly attached garment panels. People are handmade folded-paper puppets with flat cut face planes, folded limbs and layered hands, never rounded dolls or illustrated skin. Rocks are angular folded cardstock, plants individual cut leaves bent from stems. Water is broad overlapping blue cardstock sheets, mist and clouds suspended paper cutouts. No painted textures pretending to be relief.\nCINEMATOGRAPHY: obey the shot's exact camera and time of day. Foreground paper edge/leaf/rock creates depth without hiding the main action; focal plane on action, optical miniature depth of field in near/far layers. Maintain identities, ages and clothes from the SAME myth references. Borderless immersive scene, no box, plinth, table, studio or collage. Frame extends edge to edge. Do NOT carry background objects from a previous scene into a new location.\nNo text, lettering, logo, watermark, symbols, sacred patterns, pan-Indigenous headdresses, golden jewelry, invented ritual, extra people or props. No brushwork, drawing outlines, flat illustration, realistic fabric/skin/liquid, plastic, clay or smooth CGI. Exactly ONE finished vertical 9:16 image. This is a new composition, not a crop of the reference.`;
 const promptFile=`${dir}/prompts/${shot.id}-v${version}.txt`;fs.mkdirSync(path.dirname(promptFile),{recursive:true});fs.writeFileSync(promptFile,prompt+'\n');
 const adjustmentsFile=`${base}/direction-adjustments.json`;
 const adjustment=fs.existsSync(adjustmentsFile)?read(adjustmentsFile)[row.slug]||'':'';
 const camera=/^Detalle/i.test(shot.scene)?'CAMERA LOCK: This is a CLOSE-UP INSERT. The specifically named hands, object, or head must fill at least 65% of the image. Do not turn it into a full-body group portrait or wide landscape. Only show the body parts explicitly needed for the insert.':/^Gran general/i.test(shot.scene)?'CAMERA LOCK: EXTREME WIDE ESTABLISHING SHOT. Environment occupies at least 85% of the image; any requested people are small, at most 15% of image height. Do not make a full-body portrait.':'';
 const finalPrompt=prompt+`\n\nFINAL COMPOSITION OVERRIDE: Character names in continuity rules are NOT a cast list. Show ONLY the people/animals explicitly requested in THIS single shot. Do not add any reference person, animal, lake or staff just because it appears in a reference. Render precisely: ${shot.scene}\n${camera}\n${adjustment}\n${args[2]||''}`;
 fs.writeFileSync(promptFile,finalPrompt+'\n');
 const record={slug:row.slug,id:shot.id,version,created_at:new Date().toISOString(),plan_sha256:hash(`${dir}/plan.json`),prompt_file:promptFile,prompt_sha256:digest(finalPrompt),references:refs,request:{prompt:finalPrompt,referenced_image_paths:refs.map(r=>path.resolve(r.path))}};write(file,record);console.log(JSON.stringify(record));
}else if(cmd==='candidate'){
 const [slug,id,version,generated]=args;const dir=`${base}/myths/${slug}`;const reqfile=`${dir}/requests/${id}-v${version}.json`;const req=read(reqfile);assert.equal(hash(`${dir}/plan.json`),req.plan_sha256);req.references.forEach(r=>assert.equal(hash(r.path),r.sha256));
 const dest=`${out}/${slug}/${id}-v${version}.png`;assert(!fs.existsSync(dest));fs.mkdirSync(path.dirname(dest),{recursive:true});fs.copyFileSync(generated,dest,fs.constants.COPYFILE_EXCL);const m=await sharp(dest).metadata();assert(m.width&&m.height);assert(Math.abs(m.width/m.height-9/16)<.01,'portrait aspect');
 const record={id,path:dest,sha256:hash(dest),width:m.width,height:m.height,request_file:reqfile,request_sha256:hash(reqfile),generated_source:generated,version:Number(version),status:'pending_visual_review'};write(`${dir}/candidates/${id}-v${version}.json`,record);console.log(JSON.stringify(record));
}else if(cmd==='review'){
 const [slug,id,version,decision,...notes]=args;assert(['accept','reject'].includes(decision));const qa=notes.join(' ');assert(qa.length>20);const dir=`${base}/myths/${slug}`,file=`${dir}/candidates/${id}-v${version}.json`;const r=read(file),s=read(`${dir}/selection.json`),p=read(`${dir}/plan.json`);assert.equal(hash(r.path),r.sha256);assert(!s.selected.some(a=>a.id===id));r.reviewed_at=new Date().toISOString();r.review='editorial_not_user_approval';r.qa=qa;r.status=decision==='accept'?'selected':'rejected';
 if(decision==='accept'){s.selected.push(r);s.selected.sort((a,b)=>a.id.localeCompare(b.id));}else{s.rejected.push(r);}s.status=s.selected.length===p.expected_frames?'ready_for_user_review':'in_progress';write(`${dir}/selection.json`,s,true);console.log(JSON.stringify({slug,decision,id,selected:s.selected.length,expected:p.expected_frames}));
}else if(cmd==='status'){
 const state=rows.map(r=>{const dir=`${base}/myths/${r.slug}`;if(r.id===429)return{...r,id:r.id,slug:r.slug,title:r.title,selected:14,expected:14,status:'retained'};if(!fs.existsSync(`${dir}/plan.json`))return{id:r.id,slug:r.slug,title:r.title,selected:0,status:'awaiting_preproduction'};const p=read(`${dir}/plan.json`),s=read(`${dir}/selection.json`);return{id:r.id,slug:r.slug,title:r.title,selected:s.selected.length,expected:p.expected_frames,rejected:s.rejected.length,status:s.status};}).map(({id,slug,title,selected,expected,status,rejected})=>({id,slug,title,selected,expected,status,rejected}));console.log(JSON.stringify({myths:state,selected:state.reduce((n,m)=>n+m.selected,0),expected:state.reduce((n,m)=>n+(m.expected||0),0)}));
}else throw Error('Unknown command');
