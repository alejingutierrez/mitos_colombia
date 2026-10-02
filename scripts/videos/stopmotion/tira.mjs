// Recorta de la plancha de planificación la tira exacta de poses de una hoja.
//
// La plancha tiene su propia rejilla (9x4); las hojas de producción pueden ser
// de 4 poses (2x2) o de 9 (3x3). Recortar aquí las celdas que tocan, y pegarlas
// en una tira, evita pedirle al modelo que cuente celdas en una rejilla ajena.
//
//   node scripts/videos/stopmotion/tira.mjs --plancha p.png --cols 9 --filas 4 --desde 16 --hasta 20 --out tira.png
import path from "node:path";
import sharp from "sharp";

const args = process.argv.slice(2);
const flag = (n, d = null) => (args.indexOf(n) === -1 ? d : args[args.indexOf(n) + 1]);
const plancha = path.resolve(flag("--plancha"));
const cols = Number(flag("--cols", 9));
const filas = Number(flag("--filas", 4));
const desde = Number(flag("--desde", 0));
const hasta = Number(flag("--hasta", 4));
const out = path.resolve(flag("--out"));

const { width: W, height: H } = await sharp(plancha).metadata();
const cw = Math.floor(W / cols), ch = Math.floor(H / filas);
const n = hasta - desde;
const celdas = [];
for (let k = 0; k < n; k++) {
  const i = desde + k;
  celdas.push(
    await sharp(plancha)
      .extract({ left: (i % cols) * cw, top: Math.floor(i / cols) * ch, width: cw, height: ch })
      .png()
      .toBuffer()
  );
}
await sharp({ create: { width: cw * n, height: ch, channels: 3, background: "#808080" } })
  .composite(celdas.map((input, k) => ({ input, left: k * cw, top: 0 })))
  .png()
  .toFile(out);
console.log(`tira de ${n} poses (${desde}-${hasta - 1}) → ${path.relative(process.cwd(), out)}`);
