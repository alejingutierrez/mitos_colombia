import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import sharp from 'sharp';
const base='content/videos/nasa-paeces/videos/el-trueno';
const planPath=`${base}/preproduccion-01/plan.json`;
const selectionPath=`${base}/produccion-01/selection.json`;
const output='output/imagegen/nasa-paeces/keyframes/el-trueno-produccion-01';
const plan=JSON.parse(fs.readFileSync(planPath));
const selection=JSON.parse(fs.readFileSync(selectionPath));
const shots=plan.blocks.flatMap(b=>b.keyframes);
const sha=x=>crypto.createHash('sha256').update(x).digest('hex');
const [cmd,id,arg,notes,version='v1']=process.argv.slice(2);
const shot=shots.find(s=>s.id===id);
const reqPath=`${base}/produccion-01/${id}${version==='v1'?'':'.'+version}.request.json`;
if(cmd==='request'){
 if(!shot)throw Error('Unknown shot');
 if(selection.selected.some(x=>x.id===id))throw Error('Already selected');
 const references=shot.continuity_predecessors.map(k=>{const s=selection.selected.find(x=>x.id===k);if(!s?.reviewed)throw Error('Unreviewed predecessor '+k);return {path:s.path,sha256:s.sha256,role:`approved preceding keyframe ${k}: material, palette, spatial continuity ONLY; do not import unlisted subjects/props`};});
 if(id==='b7b'){
  const anchor=selection.selected.find(x=>x.id==='b5b');
  if(!anchor?.reviewed)throw Error('Missing reviewed bookend anchor');
  references.push({path:anchor.path,sha256:anchor.sha256,role:'BOOKEND COMPOSITION ANCHOR b5b: match THIS camera, shoreline wedge and water scale, but REMOVE BOTH STAFFS, their reflections and all circular ripples. Other refs only constrain material; this image controls the closing composition.'});
 }
 for(const key of shot.canonical_refs)references.push({...plan.references[key],role:`CANONICAL ${key}: ${plan.references[key].role}`});
 for(const r of references)if(sha(fs.readFileSync(r.path))!==r.sha256)throw Error('Reference drift '+r.path);
 const prompt=fs.readFileSync(shot.prompt_file,'utf8')+'\nINPUT REFERENCES IN ORDER:\n'+references.map((r,i)=>`${i+1}. ${r.role}`).join('\n')+(notes?'\nCORRECTION, takes precedence over camera description above:\n'+notes:'');
 const request={prompt,referenced_image_paths:references.map(r=>path.resolve(r.path))};
 fs.writeFileSync(reqPath,JSON.stringify({id,created_at:new Date().toISOString(),tool:'image_gen.imagegen',request,references,prompt_sha256:sha(prompt)},null,2)+'\n',{flag:'wx'});
 console.log(JSON.stringify(request));
}else if(cmd==='accept'){
 if(selection.selected.some(x=>x.id===id))throw Error('Already selected');
 const dest=`${output}/${id}-${version}.png`;
 if(path.resolve(arg)!==path.resolve(dest))fs.copyFileSync(arg,dest,fs.constants.COPYFILE_EXCL);
 const m=await sharp(dest).metadata();
 if(m.height<=m.width||Math.abs(m.width/m.height-9/16)>.005)throw Error('Invalid portrait aspect');
 selection.selected.push({id,path:dest,sha256:sha(fs.readFileSync(dest)),width:m.width,height:m.height,format:m.format,reviewed:true,reviewed_at:new Date().toISOString(),review:'editorial_not_user_approval',notes:[notes],request_file:fs.existsSync(reqPath)?reqPath:null,provider:'built_in_image_gen',exact_model:'not_exposed_by_tool',quality:'not_exposed_by_tool'});
 selection.status=selection.selected.length===shots.length?'all_keyframes_selected_editorially':'in_production';
 fs.writeFileSync(selectionPath,JSON.stringify(selection,null,2)+'\n');
 console.log(JSON.stringify({selected:selection.selected.length,expected:shots.length,last:id}));
}else if(cmd==='reject'){
 const dest=`${output}/${id}-${version}.png`;
 fs.copyFileSync(arg,dest,fs.constants.COPYFILE_EXCL);
 selection.rejected.push({id,path:dest,sha256:sha(fs.readFileSync(dest)),request_file:reqPath,reason:notes,allowed_as_future_reference:false});
 fs.writeFileSync(selectionPath,JSON.stringify(selection,null,2)+'\n');
 console.log(JSON.stringify({rejected:id,reason:notes}));
}else throw Error('Unknown command');
