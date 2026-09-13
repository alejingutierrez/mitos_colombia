// Plató fijo: congela lo que no se mueve y deja re-imaginado sólo lo que sí.
//
// Aunque el modelo respete el encuadre, cada fotograma se dibuja entero otra
// vez: el grano del papel, el borde de una piedra y la lumbre de un fogón
// hierven de imagen en imagen. Ese hervor es lo que delata la técnica.
//
// Aquí se saca la MEDIANA de todos los fotogramas —lo que estuvo quieto la
// mayor parte del plano— y se usa como plató fijo. Encima se pega, fotograma a
// fotograma, sólo la ZONA DE ACCIÓN.
//
// La zona de acción es la UNIÓN TEMPORAL: un píxel está vivo si se movió en
// ALGÚN fotograma del plano, no sólo en éste. Con una máscara por diferencia
// fotograma a fotograma el brazo desaparecía al pasar por delante de un muro
// del mismo tono (contraste casi nulo: la resta no lo veía). La unión, más un
// engorde generoso del borde, cubre TODO el recorrido del gesto y no depende
// del contraste local.
//
//   node scripts/videos/stopmotion/estabilizar.mjs --dir <origen> --out <destino>
//     [--umbral 6] [--arriba 18] [--engorde 24] [--vida 0.12]
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const args = process.argv.slice(2);
const flag = (n, d = null) => (args.indexOf(n) === -1 ? d : args[args.indexOf(n) + 1]);
const dir = path.resolve(flag("--dir"));
const out = path.resolve(flag("--out"));
const umbral = Number(flag("--umbral", 6));    // desviación máxima: por debajo, quieto
const arriba = Number(flag("--arriba", 18));   // por encima, acción segura
const engorde = Number(flag("--engorde", 24)); // desenfoque+ganancia que engorda la zona
// Un plató 100% congelado mata también el temblor del fogón y el grano del
// papel. `--vida` deja pasar una fracción del fotograma original en TODO el
// cuadro: la lumbre respira, el decorado no hierve.
const vida = Number(flag("--vida", 0.12));

const files = (await fs.readdir(dir)).filter((f) => /^f\d{4}\.jpg$/.test(f)).sort();
await fs.mkdir(out, { recursive: true });
const { width: W, height: H } = await sharp(path.join(dir, files[0])).metadata();
const raws = [];
for (const f of files) raws.push(await sharp(path.join(dir, f)).raw().toBuffer());
const n = raws.length;
const total = W * H * 3;
console.log(`${n} fotogramas ${W}×${H}`);

// 1. Plató = mediana por píxel y canal.
const plato = Buffer.allocUnsafe(total);
const scratch = new Uint8Array(n);
for (let p = 0; p < total; p++) {
  for (let k = 0; k < n; k++) {
    const v = raws[k][p];
    let j = k - 1;
    while (j >= 0 && scratch[j] > v) { scratch[j + 1] = scratch[j]; j--; }
    scratch[j + 1] = v;
  }
  plato[p] = scratch[n >> 1];
}
await sharp(plato, { raw: { width: W, height: H, channels: 3 } }).jpeg({ quality: 95 }).toFile(path.join(out, "plato.jpg"));

// 2. Zona de acción = desviación MÁXIMA de cualquier fotograma contra el plató.
const dev = Buffer.alloc(W * H);
for (let k = 0; k < n; k++) {
  const f = raws[k];
  for (let i = 0, p = 0; i < W * H; i++, p += 3) {
    const d = Math.max(Math.abs(f[p] - plato[p]), Math.abs(f[p + 1] - plato[p + 1]), Math.abs(f[p + 2] - plato[p + 2]));
    if (d > dev[i]) dev[i] = d;
  }
}
const zona0 = Buffer.allocUnsafe(W * H);
for (let i = 0; i < W * H; i++) {
  const d = dev[i];
  zona0[i] = d <= umbral ? 0 : d >= arriba ? 255 : Math.round(((d - umbral) / (arriba - umbral)) * 255);
}
// Engordar: desenfocar y subir ganancia deja un borde suave pero generoso, que
// se traga los flecos del pelo y de la manta sin dejar costura visible.
// sharp puede devolver 3 canales aunque la entrada sea de 1: si eso pasa, el
// índice se desalinea y la máscara queda corrida un tercio de imagen.
const zonaBuf = await sharp(zona0, { raw: { width: W, height: H, channels: 1 } })
  .blur(engorde)
  .linear(2.4, 0)
  .toColourspace("b-w")
  .raw()
  .toBuffer();
const canales = zonaBuf.length / (W * H);
let zona = zonaBuf;
if (canales !== 1) {
  zona = Buffer.allocUnsafe(W * H);
  for (let i = 0; i < W * H; i++) zona[i] = zonaBuf[i * canales];
}
await sharp(zona, { raw: { width: W, height: H, channels: 1 } }).jpeg({ quality: 90 }).toFile(path.join(out, "zona.jpg"));
let vivos = 0;
for (let i = 0; i < W * H; i++) if (zona[i] > 127) vivos++;
console.log(`zona de acción: ${((vivos / (W * H)) * 100).toFixed(1)}% del cuadro`);

// 3. Componer: plató + zona·(fotograma − plató), con un poco de vida en todo.
for (let k = 0; k < n; k++) {
  const f = raws[k];
  const res = Buffer.allocUnsafe(total);
  for (let i = 0, p = 0; i < W * H; i++, p += 3) {
    const a = Math.min(1, zona[i] / 255 + vida);
    for (let c = 0; c < 3; c++) res[p + c] = Math.round(plato[p + c] + a * (f[p + c] - plato[p + c]));
  }
  await sharp(res, { raw: { width: W, height: H, channels: 3 } }).jpeg({ quality: 95 }).toFile(path.join(out, files[k]));
  process.stdout.write(`\r  compuestos ${k + 1}/${n}`);
}
console.log(`\nplató fijo en ${path.relative(process.cwd(), out)}`);
