import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import sharp from 'sharp';
const root='content/videos/nasa-paeces/tripticos';
const base=`${root}/maqueta-3d-20260913`;
const out='output/imagegen/nasa-paeces/tripticos/maqueta-3d-20260913';
const read=p=>JSON.parse(fs.readFileSync(p));
const hash=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const write=(p,v)=>{fs.mkdirSync(path.dirname(p),{recursive:true});assert(!fs.existsSync(p),`Already exists: ${p}`);fs.writeFileSync(p,JSON.stringify(v,null,2)+'\n');};
const args=process.argv.slice(2),cmd=args.shift();
const roles=['entrada','acto','huella'];
const formats={entrada:'horizontal',acto:'vertical',huella:'cuadrada'};
if(cmd==='init'){
 const groups=['existing-six','next-five','remaining-first-five','remaining-second-five','remaining-last-five'];
 const myths=groups.flatMap(g=>fs.readdirSync(`${root}/publication-selection/${g}`).filter(n=>n.endsWith('.json')&&!n.startsWith('production-')).map(n=>{
  const file=`${root}/publication-selection/${g}/${n}`,s=read(file);
  return {id:s.myth_id,slug:s.myth,source_selection:file,source_selection_sha256:hash(file),narrative_target_sha256:s.narrative_target_sha256,selected:s.selected};
 })).sort((a,b)=>a.id-b.id);
 assert.deepEqual(myths.map(m=>m.id),[...Array.from({length:25},(_,i)=>429+i),553]);
 for(const m of myths){assert.equal(m.selected.length,3);for(const a of m.selected){assert.equal(hash(a.path),a.sha256);assert.equal(hash(a.prompt_file),a.prompt_sha256);}}
 const style=['b1a','b1b'].map(id=>{const p=`output/imagegen/nasa-paeces/keyframes/el-trueno-produccion-01/${id}-maqueta-v2.png`;return{path:p,sha256:hash(p)};});
 write(`${base}/manifest.json`,{schema:'nasa-triptychs-paper-maquette/v1',created_at:new Date().toISOString(),expected_myths:26,expected_images:78,scope:myths.map(m=>m.id),generation_tool:'image_gen.imagegen',exact_model:'not_exposed_by_tool',quality:'not_exposed_by_tool',publication_authorized:true,style,myths});
 console.log(JSON.stringify({myths:myths.length,images:78,manifest:`${base}/manifest.json`}));
}else if(cmd==='request'){
 const [slug,role,version='1']=args;assert(roles.includes(role));assert(/^\d+$/.test(version));
 const manifest=read(`${base}/manifest.json`),m=manifest.myths.find(m=>m.slug===slug);assert(m);
 const source=m.selected.find(a=>a.act===role);assert.equal(hash(source.path),source.sha256);
 const prev=role==='entrada'?[]:roles.slice(0,roles.indexOf(role)).map(r=>read(`${base}/accepted/${slug}-${r}.json`).path);
 const refs=[source.path,...manifest.style.map(s=>s.path),...prev].map(p=>path.resolve(p));
 const aspect=role==='entrada'?'LANDSCAPE 3:2':role==='acto'?'PORTRAIT 2:3':'SQUARE 1:1';
 const prompt=`Use case: style-transfer. Asset: ONE ${aspect} image for the Nasa myth "${slug}". This is a material and photographic reconstruction of image 1, preserving its story, characters, props, framing and palette. NOT a collage or a sheet.\n\nINPUT ROLES: Image 1 is the EDIT TARGET and sole authority for scene, composition, cast, ages, clothes and essential objects. Images 2 and 3 are ONLY references for physically folded paper construction and photographed miniature depth: NEVER import their hands, staffs, lagoon, people or plants unless already in image 1. ${prev.length?'Remaining images are earlier rebuilt panels of this SAME myth for material and matching identities only; do not copy their distinct action.':''}\n\nSCENE INVARIANTS FROM THE REVIEWED ORIGINAL: ${source.editorial_qa}\nPreserve exactly the number of visible people, animals and essential objects in image 1. Preserve identities, ages, modest clothing, camera angle, bodily actions and gaze direction. All subjects are handmade paper figures, never real people. Do not add cultural motifs or new narrative events. ${role==='huella'?'This square is a MATERIAL SYMBOLIC SYNTHESIS of the original, not another landscape or third story episode. Keep its few large symbolic shapes and original background color; do not add people, vistas, logos, emblems or labels.':'Keep the original relationship of figures to the environment, with complete bodies and clear footing where shown. Preserve the original location and time of day.'}\n\nNEW MATERIAL DIRECTION, DOMINANT OVER IMAGE 1: A convincing close-focus PHOTOGRAPH OF AN ACTUAL HAND-BUILT THREE-DIMENSIONAL CUT-PAPER AND CARDBOARD MAQUETTE. User specifically rejected an illustrated appearance. Physical construction must be immediately obvious, not merely a paper texture applied to digital art. All surfaces are unprinted matte colored paper. Fold, cut, stack and bend every element into a tangible sculpture. Clothes are 3–6 broad folded cardstock panels with open hems, air gaps and small dark contact shadows. Faces are simple angular folded ochre paper planes, with layered noses; fingers are bent cut strips, not realistic skin or clay. Distinct lit thickness along paper edges. Hair, hats, woven-looking bands and ropes are ALSO assembled paper; no real wool, thread or cloth.\nTerrain is stacked thick die-cut paper terraces with exposed layer edges and a few large folded cardboard rock volumes; NO engraved stone stippling, dense tiny painted pebbles or printed contour lines. Plants, if present, are individually cut leaves bent away from stems and casting shadows. Water, if present, is wide raised overlapping blue paper shapes with visible thickness and cast edge shadows, never realistic liquid or drawn zigzags. Clouds, mist, flames and lightning, if present in image 1, are shaped paper pieces positioned at separate depths, never smoke or cotton.\n\nPHOTOGRAPHY: camera immersed inside the model, no outer plinth/table/display box/studio gear. Raking soft light from the existing scene's main light direction reveals relief: bright cut edges, deep contact shadows and shadows from protruding parts. Match original day/night and color palette, with restrained cinematic illumination. Close-focus macro lens, focus clearly on the main action/material relationship. Near corner details softly out of focus, main figures/objects sharply focused, background pieces increasingly optically blurred. The background must be physical cardstock scenery, not a blurred painting. ${role==='huella'?'For this square, show sculptural relief and clean paper shadows around the symbolic shapes; keep the entire core symbolic relationship legible, avoid excessive blur.':''}\nNo digital illustration, drawing, vector, painted shading, outline strokes, photoreal skin, clay, plastic, ceramic, wood grain, fabric weave, glitter, ornamental embossing or CGI gloss. NO words, numbers, lettering, title, captions, watermark, logos, border, composite panels or contact sheet. Entire frame is the paper artwork. Output ${aspect}, preserve full composition without cropping important subjects.`;
 const promptFile=`${base}/prompts/${slug}-${role}-v${version}.txt`,requestFile=`${base}/requests/${slug}-${role}-v${version}.json`;
 fs.mkdirSync(path.dirname(promptFile),{recursive:true});assert(!fs.existsSync(promptFile));fs.writeFileSync(promptFile,prompt+'\n');
 const req={myth_id:m.id,slug,role,version:Number(version),source:source.path,prompt_file:promptFile,prompt_sha256:hash(promptFile),references:refs.map(p=>({path:p,sha256:hash(p)})),request:{referenced_image_paths:refs,prompt}};
 write(requestFile,req);console.log(JSON.stringify({request_file:requestFile,...req}));
}else if(cmd==='accept'){
 const [slug,role,version,generated,qa]=args;assert(qa?.length>25);assert(roles.includes(role));
 const reqFile=`${base}/requests/${slug}-${role}-v${version}.json`,req=read(reqFile);
 const p=`${out}/${slug}/${role}-v${version}.png`;assert(!fs.existsSync(p));fs.mkdirSync(path.dirname(p),{recursive:true});fs.copyFileSync(generated,p,fs.constants.COPYFILE_EXCL);
 const meta=await sharp(p).metadata(),ratio={entrada:3/2,acto:2/3,huella:1}[role];
 assert.equal(meta.format,'png');assert(Math.abs(meta.width/meta.height-ratio)<.012,`Wrong aspect ${meta.width}x${meta.height}`);
 const jpeg=`${out}/${slug}/${role}-${formats[role]}.jpeg`;assert(!fs.existsSync(jpeg));await sharp(p).jpeg({quality:96,chromaSubsampling:'4:4:4'}).toFile(jpeg);
 const record={myth_id:req.myth_id,slug,role,path:p,sha256:hash(p),width:meta.width,height:meta.height,generated_source:generated,request_file:reqFile,request_sha256:hash(reqFile),prompt_file:req.prompt_file,prompt_sha256:req.prompt_sha256,reviewed_at:new Date().toISOString(),review:'editorial',qa,provider:'image_gen.imagegen',exact_model:'not_exposed_by_tool',quality:'not_exposed_by_tool',publication_derivative:{path:jpeg,sha256:hash(jpeg),format:'jpeg',quality:96,resized:false,cropped:false}};
 write(`${base}/accepted/${slug}-${role}.json`,record);
 console.log(JSON.stringify({accepted:`${slug}/${role}`,path:p,dimensions:[meta.width,meta.height]}));
}else if(cmd==='status'){
 const manifest=read(`${base}/manifest.json`);console.log(JSON.stringify(manifest.myths.map(m=>({id:m.id,slug:m.slug,accepted:roles.filter(r=>fs.existsSync(`${base}/accepted/${m.slug}-${r}.json`))})),null,2));
}else throw Error('Unknown command');
