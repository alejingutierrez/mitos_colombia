// Hoja de contactos: pega N fotogramas en una rejilla para mirarlos juntos.
//   node scripts/videos/stopmotion/hoja.mjs --out hoja.jpg --cols 4 --alto 420 f1.jpg f2.jpg ...
import path from "node:path";
import sharp from "sharp";

const args = process.argv.slice(2);
const flag = (n, d = null) => (args.indexOf(n) === -1 ? d : args[args.indexOf(n) + 1]);
const out = path.resolve(flag("--out", "hoja.jpg"));
const cols = Number(flag("--cols", 4));
const alto = Number(flag("--alto", 420));
const files = args.filter((a) => /\.(jpg|jpeg|png)$/i.test(a) && path.resolve(a) !== out);
const tiles = await Promise.all(
  files.map(async (f, i) => {
    const buf = await sharp(f).resize({ height: alto }).toBuffer();
    const { width } = await sharp(buf).metadata();
    return { buf, width, i };
  })
);
const w = Math.max(...tiles.map((t) => t.width));
const filas = Math.ceil(tiles.length / cols);
const canvas = sharp({
  create: { width: w * cols, height: alto * filas, channels: 3, background: "#101418" },
});
await canvas
  .composite(tiles.map((t) => ({ input: t.buf, left: (t.i % cols) * w, top: Math.floor(t.i / cols) * alto })))
  .jpeg({ quality: 88 })
  .toFile(out);
console.log(`${files.length} fotogramas → ${out}`);
