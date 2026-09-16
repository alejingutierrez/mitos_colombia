import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const plan = JSON.parse(await fs.readFile(path.resolve(process.argv[2]), "utf8"));
const destination = path.resolve(process.argv[3]);
try { await fs.access(destination); throw new Error("Refusing existing review output"); }
catch (error) { if (error.code !== "ENOENT") throw error; }
const gap = 20, imageHeight = 480, captionHeight = 42;
const layers = [];
let left = gap;
for (const job of plan.jobs) {
  const metadata = await sharp(job.file).metadata();
  const width = Math.round(imageHeight * metadata.width / metadata.height);
  const caption = job.caption || {entrada:"Entrada · pozos secos",acto:"Acto · llamada nocturna",huella:"Huella · agua al amanecer"}[job.piece];
  const svg = Buffer.from(`<svg width="${width}" height="${captionHeight}"><rect width="100%" height="100%" fill="#eee5d5"/><text x="12" y="28" font-family="Arial" font-size="18" fill="#263629">${caption}</text></svg>`);
  layers.push({input:svg,left,top:gap});
  layers.push({input:await sharp(job.file).resize(width,imageHeight,{fit:"contain",background:"#eee5d5"}).png().toBuffer(),left,top:gap+captionHeight});
  left += width + gap;
}
await sharp({create:{width:left,height:2*gap+captionHeight+imageHeight,channels:3,background:"#eee5d5"}}).composite(layers).png().toFile(destination);
console.log(JSON.stringify({file:destination,note:"Review assembly only; three full artworks without cropping, originals unmodified."}));
