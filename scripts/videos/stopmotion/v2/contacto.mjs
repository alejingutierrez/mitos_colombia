// Hoja de contacto de anclas con las métricas impresas debajo (puertas G0/G1).
//
// Por plano: A | B, y debajo el MAD de fondo entre A y B (216x384 en gris,
// fuera de la unión de lo que cambió) y la razón de nitidez sujeto/anillo
// (varianza del laplaciano). Es lo que en v1 se miró DESPUÉS de montar.
//
//   node scripts/videos/stopmotion/v2/contacto.mjs --dir <planos-out> --planos P13,P02,P14 --out <contacto.jpg>
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const args = process.argv.slice(2);
const flag = (n, d = null) => (args.indexOf(n) === -1 ? d : args[args.indexOf(n) + 1]);
const dir = path.resolve(flag("--dir"));
const planos = String(flag("--planos")).split(",");
const out = path.resolve(flag("--out"));
const W = 216, H = 384;
const existe = (f) => fs.access(f).then(() => true).catch(() => false);

const gris = async (f) => sharp(f).resize(W, H, { fit: "fill" }).greyscale().raw().toBuffer();
const lapVar = (g, x0, y0, x1, y1) => {
  let s = 0, s2 = 0, n = 0;
  for (let y = Math.max(1, y0); y < Math.min(H - 1, y1); y++) for (let x = Math.max(1, x0); x < Math.min(W - 1, x1); x++) {
    const v = 4 * g[y * W + x] - g[y * W + x - 1] - g[y * W + x + 1] - g[(y - 1) * W + x] - g[(y + 1) * W + x];
    s += v; s2 += v * v; n++;
  }
  return n ? s2 / n - (s / n) ** 2 : 0;
};

const filas = [];
const tiles = [];
const TW = 300, TH = Math.round(TW * 16 / 9), CAP = 54;
for (const pl of planos) {
  const A = path.join(dir, pl, "A.jpg"), B = path.join(dir, pl, "B.jpg");
  if (!(await existe(A))) continue;
  const gA = await gris(A);
  let info = { plano: pl, A: path.relative(process.cwd(), A) };
  if (await existe(B)) {
    const gB = await gris(B);
    // Unión de lo que cambió (|A−B| > 24), engordada 6 px: ahí está el sujeto.
    let x0 = W, y0 = H, x1 = -1, y1 = -1;
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) if (Math.abs(gA[y * W + x] - gB[y * W + x]) > 24) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
    x0 = Math.max(0, x0 - 6); y0 = Math.max(0, y0 - 6); x1 = Math.min(W - 1, x1 + 6); y1 = Math.min(H - 1, y1 + 6);
    let s = 0, n = 0;
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) if (!(x >= x0 && x <= x1 && y >= y0 && y <= y1)) { s += Math.abs(gA[y * W + x] - gB[y * W + x]); n++; }
    const madFondo = n ? s / n : 0;
    const lapSujeto = (lapVar(gA, x0, y0, x1, y1) + lapVar(gB, x0, y0, x1, y1)) / 2;
    const lapFondo = (lapVar(gA, 0, 0, W, Math.max(1, y0)) + lapVar(gA, 0, Math.min(H - 1, y1), W, H)) / 2 || 1;
    info = { ...info, B: path.relative(process.cwd(), B), mad_fondo: +madFondo.toFixed(2), area_cambio_pct: +(((x1 - x0) * (y1 - y0)) / (W * H) * 100).toFixed(1), nitidez_sujeto_vs_fondo: +(lapSujeto / lapFondo).toFixed(2) };
  }
  filas.push(info);
  for (const [f, eti] of [[A, `${pl} · A`], [B, `${pl} · B`]]) {
    if (!(await existe(f))) continue;
    const img = await sharp(f).resize(TW, TH).toBuffer();
    const texto = f === A ? eti : `${eti}   MAD fondo ${info.mad_fondo}  ·  cambio ${info.area_cambio_pct}%  ·  nitidez ${info.nitidez_sujeto_vs_fondo}×`;
    const svg = Buffer.from(`<svg width="${TW}" height="${CAP}"><rect width="100%" height="100%" fill="#101418"/><text x="6" y="22" font-family="Helvetica" font-size="13" fill="#F5F0E6">${texto.slice(0, 44)}</text><text x="6" y="42" font-family="Helvetica" font-size="12" fill="#c9c4b8">${texto.slice(44, 100)}</text></svg>`);
    tiles.push(await sharp({ create: { width: TW, height: TH + CAP, channels: 3, background: "#101418" } }).composite([{ input: img, left: 0, top: 0 }, { input: svg, left: 0, top: TH }]).jpeg({ quality: 90 }).toBuffer());
  }
}
const cols = Math.min(6, tiles.length);
const rows = Math.ceil(tiles.length / cols);
await sharp({ create: { width: TW * cols, height: (TH + CAP) * rows, channels: 3, background: "#101418" } })
  .composite(tiles.map((t, i) => ({ input: t, left: (i % cols) * TW, top: Math.floor(i / cols) * (TH + CAP) })))
  .jpeg({ quality: 90 }).toFile(out);
await fs.writeFile(out.replace(/\.jpg$/, ".json"), JSON.stringify(filas, null, 1));
for (const f of filas) console.log(JSON.stringify(f));
console.log(`hoja de contacto → ${path.relative(process.cwd(), out)}`);
