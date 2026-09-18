import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';

const base='content/videos/nasa-paeces/keyframes-comunidad-20260913';
const out='output/imagegen/nasa-paeces/keyframes/el-trueno-produccion-01/comunidad-nasa';
const read=p=>JSON.parse(fs.readFileSync(p));
const hash=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const write=(p,d)=>fs.writeFileSync(p,JSON.stringify(d,null,2)+'\n');
const manifest=read(`${base}/manifest.json`),report=read(`${base}/verification.json`);
assert.equal(report.selected_frames,270,'Finish and validate all 270 frames before exporting');
assert.equal(report.completed_myths,26);
const visualQA=read(`${base}/sequence-qa.json`);
for(const myth of manifest.scope)assert(visualQA.reviews.some(r=>r.slug===myth.slug&&r.status==='PASS'),`Missing sequence review: ${myth.slug}`);
assert.equal(hash(manifest.retained.selection),manifest.retained.sha256);
const staging=fs.mkdtempSync(path.join(os.tmpdir(),'nasa-keyframes-delivery-'));
const run=(bin,args,options={})=>{const r=spawnSync(bin,args,{encoding:'utf8',...options});assert.equal(r.status,0,r.stderr||r.stdout);return r.stdout;};
const zip=(source,destination,frames)=>{
 const target=path.resolve(destination);fs.mkdirSync(path.dirname(target),{recursive:true});
 const temporary=target+'.building.zip';assert(!fs.existsSync(temporary),'Pending archive exists');
 run('/usr/bin/zip',['-0','-q','-r',temporary,'.'],{cwd:source});
 run('/usr/bin/unzip',['-tq',temporary]);
 const files=run('/usr/bin/unzip',['-Z','-1',temporary]).trim().split('\n');
 assert.equal(files.filter(p=>p.endsWith('.png')).length,frames);
 fs.renameSync(temporary,target);
 return {path:destination,sha256:hash(target),bytes:fs.statSync(target).size,frames,archive_crc_verified:true};
};
try{
 const packages=[];
 for(const myth of manifest.scope){
  const retained=myth.id===429;
  const dir=retained?'content/videos/nasa-paeces/videos/el-trueno/preproduccion-01':`${base}/myths/${myth.slug}`;
  const selection=read(retained?manifest.retained.selection:`${dir}/selection.json`);
  const destination=path.join(staging,myth.slug);fs.mkdirSync(destination,{recursive:true});
  fs.mkdirSync(path.join(destination,'png'));fs.mkdirSync(path.join(destination,'prompts'));
  fs.mkdirSync(path.join(destination,'requests'));
  const entries=[];
  for(const frame of selection.selected){
   assert.equal(hash(frame.path),frame.sha256);
   if(frame.request_sha256)assert.equal(hash(frame.request_file),frame.request_sha256);
   const request=read(frame.request_file);assert.equal(typeof request.request.prompt,'string');
   const imageName=`png/${frame.id}.png`,promptName=`prompts/${frame.id}.txt`;
   fs.copyFileSync(frame.path,path.join(destination,imageName));
   fs.writeFileSync(path.join(destination,promptName),request.request.prompt+'\n');
   fs.copyFileSync(frame.request_file,path.join(destination,'requests',`${frame.id}.json`));
   entries.push({id:frame.id,image:imageName,prompt:promptName,sha256:frame.sha256,original_path:frame.path,width:frame.width,height:frame.height,qa:frame.qa||frame.notes});
  }
  fs.copyFileSync(`${dir}/plan.json`,path.join(destination,'plan.json'));
  fs.copyFileSync(`${dir}/${retained?'GUION-TECNICO.md':'GUION.md'}`,path.join(destination,'GUION.md'));
  const sheet=`${out}/${myth.slug}/secuencia.jpeg`;if(fs.existsSync(sheet))fs.copyFileSync(sheet,path.join(destination,'secuencia.jpeg'));
  write(path.join(destination,'manifest.json'),{myth,retained,frames:entries,provider:'image_gen.imagegen',exact_model:'not_exposed_by_tool',quality:'not_exposed_by_tool',voice:false,animation:false});
  packages.push({...myth,...zip(destination,`${out}/${myth.slug}/keyframes.zip`,entries.length)});
 }
 fs.copyFileSync(`${base}/manifest.json`,path.join(staging,'manifest-campana.json'));
 fs.copyFileSync(`${base}/verification.json`,path.join(staging,'verificacion.json'));
 fs.copyFileSync(`${base}/sequence-qa.json`,path.join(staging,'revision-secuencias.json'));
 fs.writeFileSync(path.join(staging,'LEEME.md'),'# Keyframes Nasa\n\n26 mitos y 270 PNG originales: 14 de El Trueno conservados y 256 nuevos. Cada carpeta contiene guion, plan, prompts exactos, solicitudes y huellas SHA-256. Las imagenes representan una adaptacion editorial en maqueta de papel. Tiempos provisionales: no incluye voz, animacion ni video final.\n\nGeneracion: image_gen integrado. Modelo exacto y calidad no expuestos por la herramienta. Los descartes se conservan en el proyecto, fuera de esta seleccion.\n');
 const combined=zip(staging,`${out}/nasa-26-mitos-270-keyframes.zip`,270);
 write(`${base}/packages.json`,{created_at:new Date().toISOString(),combined,myths:packages});
 console.log(JSON.stringify({combined,myths:packages.length}));
}finally{fs.rmSync(staging,{recursive:true,force:true});}
