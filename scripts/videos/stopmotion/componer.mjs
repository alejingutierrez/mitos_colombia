// Composición de papel recortado: la figura suelta sobre un plató que no se mueve.
//
// Es el método real del stop-motion de recortes, y resuelve de un golpe los dos
// límites que medimos: el decorado ya no puede hervir ni saltar (es UNA sola
// imagen fija) y el desplazamiento por el cuadro lo decidimos nosotros, no el
// modelo — que se negaba a trasladar a la figura aunque se le pidiera con
// medidas.
//
// Cada recorte se normaliza por su canal alfa: misma ALTURA en todos los
// fotogramas y mismos pies a la misma línea. El anclaje horizontal NO es el
// centro de la caja alfa (al extender el brazo la caja crece y el cuerpo se
// iría hacia el otro lado) sino el centroide de la parte baja de la silueta,
// que son las piernas y no se mueven.
//
//   node scripts/videos/stopmotion/componer.mjs --plato plato.jpg --recortes <dir> --out <dir>
//     [--alto 0.62] [--base 0.93] [--x 0.42] [--x-fin 0.42] [--sombra 0.35]
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const args = process.argv.slice(2);
const flag = (n, d = null) => (args.indexOf(n) === -1 ? d : args[args.indexOf(n) + 1]);
const platoPath = path.resolve(flag("--plato"));
const recortes = path.resolve(flag("--recortes"));
const out = path.resolve(flag("--out"));
const altoRel = Number(flag("--alto", 0.62));    // altura de la figura sobre el alto del cuadro
const baseRel = Number(flag("--base", 0.93));    // línea del suelo donde apoyan los pies
const x0 = Number(flag("--x", 0.42));
const x1 = Number(flag("--x-fin", flag("--x", 0.42)));
const sombra = Number(flag("--sombra", 0.35));

const { width: W, height: H } = await sharp(platoPath).metadata();
const files = (await fs.readdir(recortes)).filter((f) => /^f\d{4}\.png$/.test(f)).sort();
await fs.mkdir(out, { recursive: true });
const suave = (t) => t * t * (3 - 2 * t); // arranque y frenada, no rampa lineal

for (const [k, file] of files.entries()) {
  const src = path.join(recortes, file);
  const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width: iw, height: ih, channels } = info;

  // Caja alfa de la silueta.
  let x0b = iw, y0b = ih, x1b = -1, y1b = -1;
  for (let y = 0; y < ih; y++) {
    for (let x = 0; x < iw; x++) {
      if (data[(y * iw + x) * channels + 3] > 24) {
        if (x < x0b) x0b = x; if (x > x1b) x1b = x;
        if (y < y0b) y0b = y; if (y > y1b) y1b = y;
      }
    }
  }
  if (x1b < 0) throw new Error(`${file}: recorte vacío`);
  const bw = x1b - x0b + 1, bh = y1b - y0b + 1;
  // Si la silueta toca el borde, la caja alfa miente: la figura viene cortada y
  // al normalizar por altura saldría más grande que las demás. Vale más avisar
  // que dejar que el clip crezca sin que nadie sepa por qué.
  if (x0b <= 1 || y0b <= 1 || x1b >= iw - 2 || y1b >= ih - 2) {
    console.warn(`\n  aviso: ${file} toca el borde de su celda (figura recortada) — se escalará mal`);
  }

  // Ancla horizontal: centroide del tercio inferior (piernas), no de la caja.
  let sx = 0, sn = 0;
  for (let y = Math.round(y1b - bh * 0.33); y <= y1b; y++) {
    for (let x = x0b; x <= x1b; x++) {
      const a = data[(y * iw + x) * channels + 3];
      if (a > 24) { sx += x * a; sn += a; }
    }
  }
  const anclaX = sn ? sx / sn : (x0b + x1b) / 2;

  const escala = (altoRel * H) / bh;
  const destW = Math.round(bw * escala), destH = Math.round(bh * escala);
  const figura = await sharp(src)
    .extract({ left: x0b, top: y0b, width: bw, height: bh })
    .resize(destW, destH, { kernel: "lanczos3" })
    .png()
    .toBuffer();

  const t = files.length > 1 ? suave(k / (files.length - 1)) : 0;
  const cx = (x0 + (x1 - x0) * t) * W;
  const left = Math.round(cx - (anclaX - x0b) * escala);
  const top = Math.round(baseRel * H - destH);

  // Sombra de contacto: la propia silueta aplastada contra el suelo, en negro
  // y con el alfa bajado. Se construye como canal alfa, no como recorte con
  // fondo: un `composite` de una máscara de un canal deja un rectángulo opaco.
  const sw = Math.round(destW * 1.04);
  const sh = Math.max(8, Math.round(destH * 0.09));
  const alfaSombra = await sharp(figura)
    .extractChannel("alpha")
    .resize(sw, sh, { fit: "fill" })
    .blur(Math.max(2, sh / 3))
    .linear(sombra, 0)
    .raw()
    .toBuffer();
  const sombraPng = await sharp({ create: { width: sw, height: sh, channels: 3, background: "#000000" } })
    .joinChannel(alfaSombra, { raw: { width: sw, height: sh, channels: 1 } })
    .png()
    .toBuffer();

  const capas = [];
  if (sombra > 0) {
    capas.push({
      input: sombraPng,
      left: Math.max(0, left - Math.round(destW * 0.02)),
      top: Math.min(H - sh, Math.round(baseRel * H - sh * 0.55)),
    });
  }
  capas.push({ input: figura, left: Math.max(0, left), top: Math.max(0, top) });

  await sharp(platoPath).composite(capas).jpeg({ quality: 95 }).toFile(path.join(out, file.replace(".png", ".jpg")));
  process.stdout.write(`\r  compuestos ${k + 1}/${files.length}`);
}
console.log(`\n${files.length} fotogramas sobre plató fijo → ${path.relative(process.cwd(), out)}`);
