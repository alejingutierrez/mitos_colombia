// El mundo viaja como imagen, nunca sólo como prosa (decisión D8).
//
// Una hoja de lookdev con los cuatro decorados del video y una ficha de
// producción por personaje (tres vistas + atrezo, sobre gris). Todas las anclas
// A y B del video las reciben como referencia. En v1, 6 de 18 maestras se
// pidieron sin ninguna imagen y salieron de otro mundo.
//
//   node scripts/videos/stopmotion/v2/lookdev.mjs --comun <planos/_comun.json> --out <dir>
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { genImage, rootDir } from "../img.mjs";
import { promptLookdev, promptFicha } from "./comun.mjs";

const args = process.argv.slice(2);
const flag = (n, d = null) => (args.indexOf(n) === -1 ? d : args[args.indexOf(n) + 1]);
const comun = JSON.parse(await fs.readFile(path.resolve(rootDir, flag("--comun")), "utf8"));
const out = path.resolve(rootDir, flag("--out"));
await fs.mkdir(out, { recursive: true });
const B = path.join(rootDir, "content/videos/muiscas/biblia");
const existe = (p) => fs.access(p).then(() => true).catch(() => false);

const CELDAS = [
  "PLAZA: la plaza de tierra apisonada de noche con dos bohíos de techo cónico, la hilera de vasijas de chicha contra un muro bajo y un fogón encendido fuera de centro.",
  "CAMINO: un camino de tierra visto de lado que cruza el cuadro, con una cerca baja de piedra apilada al fondo, matas de paja seca delante y dos bohíos lejanos.",
  "UMBRAL: el vano de una puerta de un bohío visto de frente y de cerca, con el marco de un telar apoyado dentro y un banco bajo vacío, la penumbra del interior detrás.",
  "TECHO: el borde de un techo cónico de paja recortado contra el cielo, en contrapicado suave, con las casas dormidas del poblado pequeñas al fondo y un solo fogón lejos.",
];
const FICHAS = [
  { id: "huitaca", ref: "huitaca_mujer.jpg", desc: ["Huitaca: mujer muisca de unos treinta años, piel morena, cabello negro suelto y abundante, manta de algodón crudo casi lunar con dos franjas tejidas en ocre y rojo apagado echada sobre un hombro, descalza. En la mano izquierda, contra el costado, una OLLA DE BARRO GRIS baja y panzuda: siempre la misma olla, en las tres vistas."] },
  { id: "lechuza", ref: "lechuza_huitaca.jpg", desc: ["Lechuza de papel de tamaño mediano: búho moteado de cara REDONDA marrón (nunca cara blanca en forma de corazón), plumaje marrón moteado de crema con plumas recortadas una a una, ojos grandes y oscuros, garras cerradas sobre una rama corta."], extra: "En la celda 3, junto al ave y a la misma distancia de cámara, una VASIJA DE CHICHA grande de la plaza, para fijar la escala: la lechuza mide como la mitad de la altura de la vasija." },
  { id: "bochica", ref: "bochica_anciano.jpg", desc: ["Bochica anciano: hombre muisca muy mayor, barba blanca corta, manta parda sobre los hombros, descalzo, con una VARA de madera larga en la mano derecha (siempre la misma vara)."] },
];

const tareas = [];
const lookdev = path.join(out, "lookdev.jpg");
if (!(await existe(lookdev))) tareas.push(async () => {
  const r = await genImage({ prompt: promptLookdev(comun, CELDAS), refs: [path.join(B, "plaza_fiesta_noche.jpg")], outPath: lookdev, quality: "high", size: "2160x3840", tag: "v2/lookdev" });
  const nombres = ["plaza", "camino", "umbral", "techo"];
  for (let i = 0; i < 4; i++) await sharp(lookdev).extract({ left: (i % 2) * 1080, top: Math.floor(i / 2) * 1920, width: 1080, height: 1920 }).jpeg({ quality: 95 }).toFile(path.join(out, `lookdev-${nombres[i]}.jpg`));
  console.log(`lookdev  ${(r.ms / 1000).toFixed(0)}s  $${r.usd.toFixed(3)}`);
});
for (const f of FICHAS) {
  const dest = path.join(out, `ficha-${f.id}.jpg`);
  if (await existe(dest)) continue;
  tareas.push(async () => {
    const r = await genImage({ prompt: promptFicha(comun, f), refs: [path.join(B, f.ref)], outPath: dest, quality: "high", size: "3264x1920", tag: `v2/ficha-${f.id}` });
    console.log(`ficha ${f.id}  ${(r.ms / 1000).toFixed(0)}s  $${r.usd.toFixed(3)}`);
  });
}
await Promise.all(tareas.map((t) => t()));
console.log(`mundo en ${path.relative(rootDir, out)}`);
