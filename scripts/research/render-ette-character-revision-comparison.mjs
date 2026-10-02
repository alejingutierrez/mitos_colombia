import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const selection = JSON.parse(await fs.readFile(path.resolve(process.argv[2]), "utf8"));
const destination = path.resolve(process.argv[3]);
try { await fs.access(destination); throw new Error(`Refusing existing comparison output: ${destination}`); }
catch (error) { if (error.code !== "ENOENT") throw error; }
const gap = 18, width = 480, height = 720, captionHeight = 42;
const layers = [];
const escape = s => s.replaceAll("&", "&amp;").replaceAll("<", "&lt;");
for (const [row, entry] of selection.entries.entries()) {
  for (const [column, file] of [entry.previous_file, entry.file].entries()) {
    const left = gap + column * (width + gap);
    const top = gap + row * (height + captionHeight + gap);
    const caption = `${entry.unit_id} · ${column === 0 ? "Anterior" : "Rostro y atuendo rehechos"}`;
    const svg = Buffer.from(`<svg width="${width}" height="${captionHeight}"><rect width="100%" height="100%" fill="#eee5d5"/><text x="12" y="28" font-family="Arial" font-size="19" fill="#263629">${escape(caption)}</text></svg>`);
    layers.push({input:svg,left,top});
    layers.push({input:await sharp(file).resize(width,height,{fit:"contain",background:"#eee5d5"}).png().toBuffer(),left,top:top+captionHeight});
  }
}
await sharp({create:{width:gap+2*(width+gap),height:gap+selection.entries.length*(height+captionHeight+gap),channels:3,background:"#eee5d5"}}).composite(layers).png().toFile(destination);
console.log(JSON.stringify({file:destination,units:selection.entries.map(e=>e.unit_id),note:"Review assembly only; original image pixels/files unmodified."}));
