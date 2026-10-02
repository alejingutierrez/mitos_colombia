// Registro de fotogramas: cuadra cada imagen contra la primera.
//
// La hoja de poses reparte el gesto mejor que ningún otro método, pero dibuja
// cada celda por separado y el decorado sale desplazado y reescalado unos
// píxeles entre celda y celda. En pantalla eso no es "hervor": es un SALTO, y
// se nota muchísimo más.
//
// Se busca —de grueso a fino— la escala y el desplazamiento que mejor cuadran
// el FONDO contra el primer fotograma. Sólo votan las franjas donde nunca está
// la figura (las dos columnas laterales y la banda de arriba): si vota el
// centro, el propio gesto arrastra el registro y lo empeora.
//
// Todo se mira con un zoom previo (>= 1) para que el recorte caiga siempre
// dentro de la imagen: ese margen es la holgura que absorbe el temblor.
//
//   node scripts/videos/stopmotion/alinear.mjs --dir <origen> --out <destino> [--margen 0.06] [--lado 0.18]
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const args = process.argv.slice(2);
const flag = (n, d = null) => (args.indexOf(n) === -1 ? d : args[args.indexOf(n) + 1]);
const dir = path.resolve(flag("--dir"));
const out = path.resolve(flag("--out"));
const margen = Number(flag("--margen", 0.06));
const lado = Number(flag("--lado", 0.18));   // ancho de las columnas laterales que votan
const alto = Number(flag("--alto", 0.16));   // banda superior que vota

const files = (await fs.readdir(dir)).filter((f) => /^f\d{4}\.jpg$/.test(f)).sort();
await fs.mkdir(out, { recursive: true });
const { width: W, height: H } = await sharp(path.join(dir, files[0])).metadata();
const w = Math.round(W / 4), h = Math.round(H / 4);
const zoom = 1 + margen * 2;

const cache = new Map();
const gris = async (file) => {
  if (!cache.has(file)) cache.set(file, await sharp(path.join(dir, file)).resize(w, h, { fit: "fill" }).greyscale().toBuffer());
  return cache.get(file);
};
const ventana = (escala, dx, dy, ww, hh) => {
  const ew = Math.round(ww * escala), eh = Math.round(hh * escala);
  return {
    ew, eh,
    left: Math.min(Math.max(0, Math.round((ew - ww) / 2 - dx)), ew - ww),
    top: Math.min(Math.max(0, Math.round((eh - hh) / 2 - dy)), eh - hh),
  };
};
const chico = async (file, escala, dx, dy) => {
  const v = ventana(escala, dx, dy, w, h);
  return sharp(await gris(file))
    .resize(v.ew, v.eh, { fit: "fill" })
    .extract({ left: v.left, top: v.top, width: w, height: h })
    .raw().toBuffer();
};

// Máscara de voto: columnas laterales enteras + banda de arriba.
const vota = new Uint8Array(w * h);
const colIzq = Math.round(w * lado), colDer = Math.round(w * (1 - lado)), bandaAlta = Math.round(h * alto);
for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) if (x < colIzq || x >= colDer || y < bandaAlta) vota[y * w + x] = 1;
const nVota = vota.reduce((a, b) => a + b, 0);
const coste = (a, b) => {
  let s = 0;
  for (let i = 0; i < w * h; i++) if (vota[i]) s += Math.abs(a[i] - b[i]);
  return s / nVota;
};

const ref = await chico(files[0], zoom, 0, 0);
const ajustes = [{ file: files[0], escala: zoom, dx: 0, dy: 0, coste: 0 }];
for (const file of files.slice(1)) {
  let mejor = { coste: Infinity, escala: zoom, dx: 0, dy: 0 };
  // Pasada gruesa y pasada fina alrededor de la ganadora.
  for (const [escalas, rango, salto] of [
    [[-0.04, -0.02, 0, 0.02, 0.04], 12, 3],
    [[-0.015, -0.01, -0.005, 0, 0.005, 0.01, 0.015], 4, 1],
  ]) {
    const base = { ...mejor };
    for (const de of escalas) {
      const escala = Math.max(1, base.escala + de);
      for (let dy = base.dy - rango; dy <= base.dy + rango; dy += salto) {
        for (let dx = base.dx - rango; dx <= base.dx + rango; dx += salto) {
          const c = coste(ref, await chico(file, escala, dx, dy));
          if (c < mejor.coste) mejor = { escala, dx, dy, coste: c };
        }
      }
    }
  }
  ajustes.push({ file, ...mejor });
  console.log(`  ${file}  escala ${mejor.escala.toFixed(3)}  dx ${mejor.dx * 4}px  dy ${mejor.dy * 4}px  coste ${mejor.coste.toFixed(2)}`);
}

for (const a of ajustes) {
  const v = ventana(a.escala, a.dx * 4, a.dy * 4, W, H);
  await sharp(path.join(dir, a.file))
    .resize(v.ew, v.eh, { fit: "fill", kernel: "lanczos3" })
    .extract({ left: v.left, top: v.top, width: W, height: H })
    .jpeg({ quality: 95 })
    .toFile(path.join(out, a.file));
}
console.log(`${ajustes.length} fotogramas alineados → ${path.relative(process.cwd(), out)}`);
