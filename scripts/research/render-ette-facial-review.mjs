import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

// Derived review crops only: no retouching, AI enhancement or source overwrites.
const selectionPath = process.argv[2];
const outputPath = process.argv[3];
if (!selectionPath || !outputPath) throw new Error("Pass selection JSON and a new output PNG path.");
try { await fs.access(outputPath); throw new Error("Output exists; choose a new versioned path."); }
catch (error) { if (error.code !== "ENOENT") throw error; }
const selection = JSON.parse(await fs.readFile(selectionPath, "utf8"));
const faces = [
  ["P07", "Cacica", 140, 30, 130, 160],
  ["P01", "Papá Grande", 140, 25, 130, 160],
  ["H01", "Adulto 1", 238, 25, 126, 150],
  ["H01", "Adulto 2", 670, 25, 142, 150],
  ["H01", "Adulta 1", 236, 780, 136, 145],
  ["H01", "Adulta 2", 650, 780, 154, 145],
  ["H03", "Viajero 1", 115, 240, 120, 160],
  ["H03", "Viajero 2", 430, 225, 132, 170],
  ["H03", "Viajero 3", 776, 245, 128, 160],
];
const tileWidth = 300, tileHeight = 360, labelHeight = 36, gap = 16;
const width = gap + 3 * (tileWidth + gap);
const height = gap + 3 * (tileHeight + labelHeight + gap);
const layers = [];
for (const [i, [id, label, left, top, cropWidth, cropHeight]] of faces.entries()) {
  const entry = selection.entries.find(item => item.unit_id === id);
  if (!entry) throw new Error(`Missing ${id}.`);
  const crop = await sharp(entry.file).extract({ left, top, width: cropWidth, height: cropHeight })
    .resize(tileWidth, tileHeight, { fit: "contain", background: "#eee5d5" }).png().toBuffer();
  const x = gap + (i % 3) * (tileWidth + gap);
  const y = gap + Math.floor(i / 3) * (tileHeight + labelHeight + gap);
  const title = Buffer.from(`<svg width="${tileWidth}" height="${labelHeight}"><rect width="100%" height="100%" fill="#eee5d5"/><text x="10" y="25" font-family="Arial" font-size="18" fill="#263629">${id} · ${label}</text></svg>`);
  layers.push({ input: title, left: x, top: y }, { input: crop, left: x, top: y + labelHeight });
}
await fs.mkdir(path.dirname(outputPath), { recursive: true });
await sharp({ create: { width, height, channels: 3, background: "#eee5d5" } }).composite(layers).png().toFile(outputPath);
console.log(JSON.stringify({ out: path.resolve(outputPath), faces: 9, width, height, note: "Enlarged review crops, not nine new bible units or enhanced source detail." }));
