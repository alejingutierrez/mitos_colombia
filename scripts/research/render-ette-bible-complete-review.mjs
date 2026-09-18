import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const selection = JSON.parse(await fs.readFile(path.resolve(process.argv[2]), "utf8"));
const outDir = path.resolve(process.argv[3]);
const escape = value => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;");
const names = {P:"Principales",H:"Repartos",A:"Fauna",L:"Espacios",U:"Materiales",V:"Variantes"};
async function render(entries, filename, width = 400, height = 600) {
  const gap = 16, title = 40, columns = 3;
  const canvasWidth = gap + columns * (width + gap);
  const canvasHeight = gap + Math.ceil(entries.length / columns) * (height + title + gap);
  const destination = path.join(outDir, filename);
  try { await fs.access(destination); throw new Error(`Refusing existing review output: ${destination}`); }
  catch (error) { if (error.code !== "ENOENT") throw error; }
  const layers = [];
  for (const [index, entry] of entries.entries()) {
    const left = gap + index % columns * (width + gap);
    const top = gap + Math.floor(index / columns) * (height + title + gap);
    const caption = `${entry.unit_id} · ${entry.label}`;
    const svg = Buffer.from(`<svg width="${width}" height="${title}"><rect width="100%" height="100%" fill="#eee5d5"/><text x="10" y="26" font-family="Arial" font-size="16" fill="#263629">${escape(caption)}</text></svg>`);
    layers.push({input:svg,left,top});
    layers.push({input:await sharp(entry.file).resize(width,height,{fit:"contain",background:"#eee5d5"}).png().toBuffer(),left,top:top+title});
  }
  await sharp({create:{width:canvasWidth,height:canvasHeight,channels:3,background:"#eee5d5"}}).composite(layers).png().toFile(destination);
  console.log(JSON.stringify({file:destination,units:entries.map(e=>e.unit_id),note:"Review assembly only; originals unmodified."}));
}
for (const category of Object.keys(names)) {
  await render(selection.entries.filter(e=>e.category===category),`review-category-${category.toLowerCase()}-v1.png`);
}
const representativeIds = ["P08","H06","A05","L07","U08","V04"];
await render(representativeIds.map(id=>selection.entries.find(e=>e.unit_id===id)),"review-overview-v1.png");
