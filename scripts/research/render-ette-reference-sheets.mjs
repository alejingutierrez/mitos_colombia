import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
const plan=JSON.parse(await fs.readFile(process.argv[2],"utf8"));
const refs=[...new Set(plan.jobs.flatMap(j=>j.input_files))];
const folder=path.resolve(process.argv[3]);
await fs.mkdir(folder,{recursive:true});
for(let start=0;start<refs.length;start+=6){
 const group=refs.slice(start,start+6),layers=[];
 for(let i=0;i<group.length;i++){
  const label=path.basename(group[i]).replace(/[<&]/g,"");
  layers.push({input:await sharp(group[i]).resize(600,420,{fit:"contain",background:"#eee5d5"}).png().toBuffer(),left:(i%2)*620+10,top:Math.floor(i/2)*460+36});
  layers.push({input:Buffer.from('<svg width="600" height="26"><text x="4" y="20" font-family="Arial" font-size="15">'+label+'</text></svg>'),left:(i%2)*620+10,top:Math.floor(i/2)*460+8});
 }
 const file=path.join(folder,"references-"+(Math.floor(start/6)+1)+".png");
 try{await fs.access(file);throw new Error("Refusing existing output");}catch(e){if(e.code!=="ENOENT")throw e;}
 await sharp({create:{width:1240,height:Math.ceil(group.length/2)*460,channels:3,background:"#eee5d5"}}).composite(layers).png().toFile(file);
 console.log(file);
}

