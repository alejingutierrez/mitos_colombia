import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import sharp from "sharp";
const folder=path.resolve(process.argv[2]);
const campaign=JSON.parse(await fs.readFile(path.join(folder,"plan.v1.json"),"utf8"));
const baseline=JSON.parse(await fs.readFile(path.join(folder,"baseline.v1.json"),"utf8"));
const digest=async file=>crypto.createHash("sha256").update(await fs.readFile(file)).digest("hex");
const errors=[];
for(const e of [...baseline.prior_images,...baseline.protected_manifests]){
 try{if(await digest(e.file)!==e.sha256)errors.push("Changed baseline: "+e.file);}catch{errors.push("Missing baseline: "+e.file);}
}
const entries=[],missing=[],completed=[];
for(const myth of campaign.myths){
 let selected;
 try{selected=JSON.parse(await fs.readFile(path.join(folder,myth.slug+".selected-plan.v1.json"),"utf8"));}
 catch(e){if(e.code!=="ENOENT")throw e;selected=JSON.parse(await fs.readFile(path.join(folder,myth.slug+".plan.v1.json"),"utf8"));}
 let count=0;
 for(const j of selected.jobs){
  try{
   const m=await sharp(j.file).metadata(),s=await fs.stat(j.file);
   const [width,height]=j.size.split("x").map(Number);
   if(m.width!==width||m.height!==height)errors.push("Wrong size: "+j.file);
   entries.push({myth_id:j.myth_id,piece:j.piece,file:j.file,prompt_file:j.prompt_file,size:j.size,width:m.width,height:m.height,bytes:s.size,sha256:await digest(j.file),mode:"edit",revision:j.revision||1,narrative_sha256:j.narrative_sha256});
   count++;
  }catch(e){if(e.code==="ENOENT"||String(e.message).includes("Input file is missing"))missing.push({myth_id:j.myth_id,piece:j.piece,file:j.file});else throw e;}
 }
 if(count===3)completed.push(myth.id);
}
const retained=JSON.parse(await fs.readFile(campaign.retained_selection,"utf8"));
for(const e of retained.entries){if(await digest(e.file)!==e.sha256)errors.push("Changed retained myth352: "+e.file);}
const all=[...entries,...retained.entries.map(e=>({...e,myth_id:352,mode:"retained_byte_for_byte"}))];
if(new Set(all.map(e=>e.file)).size!==all.length)errors.push("Duplicate selected file");
console.log(JSON.stringify({errors,prior_images_verified:baseline.prior_images.length,protected_manifests_verified:baseline.protected_manifests.length,new_entries:entries,retained_entries:all.filter(e=>e.myth_id===352),completed_new_myths:completed,missing,selected_count:all.length,production_complete:entries.length===66&&errors.length===0,published:false}));

