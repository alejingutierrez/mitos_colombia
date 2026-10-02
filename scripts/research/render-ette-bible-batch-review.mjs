import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const selectionPath = path.resolve(root, process.argv[2] || "content/videos/chimila/biblia/produccion-api-01/selection.v1.json");
const selection = JSON.parse(await fs.readFile(selectionPath, "utf8"));
if (selection.entries.length !== 6) throw new Error("Expected six batch entries.");
const width = 400, height = 600, titleHeight = 40, gap = 16, columns = 3;
const canvasWidth = gap + columns * (width + gap);
const canvasHeight = gap + 2 * (height + titleHeight + gap);
const escape = text => text.replaceAll("&", "&amp;").replaceAll("<", "&lt;");
const layers = [];
for (const [index, entry] of selection.entries.entries()) {
  const left = gap + (index % columns) * (width + gap);
  const top = gap + Math.floor(index / columns) * (height + titleHeight + gap);
  const title = Buffer.from(`<svg width="${width}" height="${titleHeight}"><rect width="100%" height="100%" fill="#eee5d5"/><text x="12" y="26" font-family="Arial, sans-serif" font-size="18" fill="#263629">${escape(entry.unit_id + " · " + entry.label)}</text></svg>`);
  layers.push({ input: title, left, top });
  const image = await sharp(entry.file).resize(width, height, { fit: "contain", background: "#eee5d5" }).png().toBuffer();
  layers.push({ input: image, left, top: top + titleHeight });
}
const out = path.resolve(root, process.argv[3] || "output/imagegen/chimila/biblia/produccion-api-01/review-contact-sheet-v1.png");
await sharp({ create: { width: canvasWidth, height: canvasHeight, channels: 3, background: "#eee5d5" } }).composite(layers).png().toFile(out);
console.log(JSON.stringify({ out, note: "Review derivative only: labels added here, never to originals. Six original JPEGs unchanged." }));
