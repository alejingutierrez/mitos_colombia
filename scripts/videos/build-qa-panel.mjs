// Reconstruye el panel de QA de keyframes: mira el disco, actualiza qué
// escenas ya tienen sus dos cuadros, compone un SPRITE por mito y vuelve a
// embeber los datos en el HTML.
//
//   node scripts/videos/build-qa-panel.mjs
//
// ── POR QUÉ SPRITES ────────────────────────────────────────────────────────
// La primera versión subía una miniatura por cuadro. Con 41 mitos eso son
// ~1.700 archivos y el artefacto tiene un tope DURO de 512 por versión: a los
// 30 mitos la publicación empezó a devolver 422. Empaquetar los cuadros de
// cada mito en una sola imagen baja el conteo a 41 archivos sin cambiar los
// bytes totales, que siguen debajo del tope de 64 MB.
//
// Cada sprite es una rejilla de CELDAS de 384×576 en COLUMNAS columnas. El
// índice de cada cuadro es estable —orden de bloques del guion, y dentro de
// cada escena primero A y luego B— y va guardado en datos.json, así que el
// HTML puede calcular el background-position sin adivinar nada.
//
// La parte editorial de `.qa-staging/datos.json` (título, N, cita, deslindes,
// bloques del guion) se conserva tal cual: aquí sólo se recalcula lo que
// depende de los archivos generados.

import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const RAIZ = process.cwd();
const STAGE = path.join(RAIZ, ".qa-staging");
const IMG = path.join(STAGE, "img");
const VIDEOS = path.join(RAIZ, "content/videos/muiscas/videos");

export const CELDA_W = 384;
export const CELDA_H = 576;
export const COLUMNAS = 6;
const CALIDAD = 70;

const datos = JSON.parse(fs.readFileSync(path.join(STAGE, "datos.json"), "utf8"));
fs.rmSync(IMG, { recursive: true, force: true });
fs.mkdirSync(IMG, { recursive: true });

datos.sprite = { w: CELDA_W, h: CELDA_H, cols: COLUMNAS };

let totalImgs = 0;
for (const mito of datos.mitos) {
  const dir = path.join(VIDEOS, mito.slug, "keyframes");
  const enDisco = new Set(
    fs.existsSync(dir)
      ? fs.readdirSync(dir).filter((f) => f.endsWith(".jpg") && !f.includes("crop"))
      : [],
  );

  // Índice estable: recorre los bloques en el orden del guion y, dentro de
  // cada escena, primero el cuadro inicial y después el final.
  const celdas = [];
  let n = 0;
  for (const bloque of mito.bloques) {
    for (const escena of bloque.escenas) {
      const hayA = enDisco.has(`${escena.id}-A.jpg`);
      const hayB = enDisco.has(`${escena.id}-B.jpg`);
      escena.hay = hayA && hayB;
      escena.i = escena.hay ? celdas.length : -1;
      if (escena.hay) {
        celdas.push(path.join(dir, `${escena.id}-A.jpg`));
        celdas.push(path.join(dir, `${escena.id}-B.jpg`));
        n += 2;
      }
    }
  }

  mito.imagenes = n;
  // `producido` deja de ser un estado y pasa a ser una ETIQUETA. Antes bloqueaba
  // el recalculo, asi que los cuatro mitos con video v3 publicado se quedaban
  // fuera de la mesa aunque ya tuvieran sus cuadros v4 en disco: 180 imagenes
  // invisibles. El estado ahora sale siempre de los archivos.
  if (mito.producido === undefined) mito.producido = mito.estado === "producido";
  mito.estado = n === 0 ? "pendiente" : n >= mito.necesita ? "listo" : "parcial";
  totalImgs += n;
  if (!celdas.length) {
    mito.filas = 0;
    continue;
  }

  const filas = Math.ceil(celdas.length / COLUMNAS);
  mito.filas = filas;
  const capas = await Promise.all(
    celdas.map(async (src, i) => ({
      input: await sharp(src).resize(CELDA_W, CELDA_H, { fit: "cover" }).toBuffer(),
      left: (i % COLUMNAS) * CELDA_W,
      top: Math.floor(i / COLUMNAS) * CELDA_H,
    })),
  );
  await sharp({
    create: {
      width: COLUMNAS * CELDA_W,
      height: filas * CELDA_H,
      channels: 3,
      background: { r: 27, g: 24, b: 21 },
    },
  })
    .composite(capas)
    .jpeg({ quality: CALIDAD, mozjpeg: true })
    .toFile(path.join(IMG, `${mito.slug}.jpg`));
}

fs.writeFileSync(path.join(STAGE, "datos.json"), JSON.stringify(datos), "utf8");

// Re-embeber en el HTML.
// mesa.html es el artefacto vivo; qa.html quedo con el manifiesto viejo lleno.
const htmlPath = path.join(STAGE, "mesa.html");
const html = fs.readFileSync(htmlPath, "utf8");
const marca = '<script type="application/json" id="datos">';
const i = html.indexOf(marca);
const j = html.indexOf("</script>", i);
if (i < 0 || j < 0) throw new Error("no encuentro el bloque #datos en qa.html");
const nuevo = html.slice(0, i + marca.length) + JSON.stringify(datos) + html.slice(j);
fs.writeFileSync(htmlPath, nuevo, "utf8");

const sprites = fs.readdirSync(IMG).length;
const bytes = fs.readdirSync(IMG).reduce((a, f) => a + fs.statSync(path.join(IMG, f)).size, 0);
const listos = datos.mitos.filter((m) => m.estado === "listo").length;
console.log(
  `[qa] ${totalImgs} cuadros · ${listos}/${datos.mitos.length} mitos completos · ` +
    `${sprites} sprites (${(bytes / 1048576).toFixed(1)} MB) · html ${(nuevo.length / 1024).toFixed(1)} KB`,
);
