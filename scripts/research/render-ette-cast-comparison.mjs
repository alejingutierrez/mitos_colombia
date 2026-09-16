import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const job = JSON.parse(await fs.readFile(path.resolve(process.argv[2]), "utf8"));
const destination = path.resolve(process.argv[3]);
try { await fs.access(destination); throw new Error("Refusing existing comparison output"); }
catch (error) { if (error.code !== "ENOENT") throw error; }
const gap = 16, width = 300, beforeHeight = 450, captionHeight = 40;
const canvasWidth = 4*gap+3*width;
const afterWidth = canvasWidth-2*gap, afterHeight = Math.round(afterWidth*2/3);
const layers = [];
const caption = (text,w) => Buffer.from(`<svg width="${w}" height="40"><rect width="100%" height="100%" fill="#eee5d5"/><text x="10" y="27" font-family="Arial" font-size="18" fill="#263629">${text}</text></svg>`);
const before = [
  {file:job.input_files[0],crop:{left:35,top:10,width:305,height:865},label:"Antes · Cacica"},
  {file:job.input_files[1],crop:{left:45,top:10,width:430,height:770},label:"Antes · hombre1"},
  {file:job.input_files[1],crop:{left:555,top:10,width:430,height:770},label:"Antes · hombre2"},
];
for (const [i,b] of before.entries()) {
  const left = gap+i*(width+gap);
  layers.push({input:caption(b.label,width),left,top:gap});
  layers.push({input:await sharp(b.file).extract(b.crop).resize(width,beforeHeight,{fit:"contain",background:"#eee5d5"}).png().toBuffer(),left,top:gap+captionHeight});
}
const top = 2*gap+captionHeight+beforeHeight;
layers.push({input:caption("Propuesta nueva · tres cuerpos y sus rostros",afterWidth),left:gap,top});
layers.push({input:await sharp(job.file).resize(afterWidth,afterHeight,{fit:"contain",background:"#eee5d5"}).png().toBuffer(),left:gap,top:top+captionHeight});
await sharp({create:{width:canvasWidth,height:top+captionHeight+afterHeight+gap,channels:3,background:"#eee5d5"}}).composite(layers).png().toFile(destination);
console.log(JSON.stringify({file:destination,note:"Comparison derivative only: crops of own earlier sheets and full new sheet; originals unmodified, not a new cultural master."}));
