// Reconstruye el panel de QA de keyframes: mira el disco, actualiza qué
// escenas ya tienen sus dos cuadros, rehace las miniaturas y vuelve a
// embeber los datos en el HTML.
//
//   node scripts/videos/build-qa-panel.mjs
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
// 480 px con mozjpeg deja cada miniatura en ~29 KB. No es capricho: el
// artefacto admite 64 MB por version y 255 archivos por publicacion, y los
// 41 mitos completos son ~1.700 cuadros. A 720 px no cabrian.
const ANCHO_THUMB = 480;
const CALIDAD_THUMB = 68;

const datos = JSON.parse(fs.readFileSync(path.join(STAGE, "datos.json"), "utf8"));
fs.mkdirSync(IMG, { recursive: true });

const vigentes = new Set();
let totalImgs = 0;

for (const mito of datos.mitos) {
  const dir = path.join(VIDEOS, mito.slug, "keyframes");
  const enDisco = new Set(
    fs.existsSync(dir)
      ? fs.readdirSync(dir).filter((f) => f.endsWith(".jpg") && !f.includes("crop"))
      : [],
  );

  let n = 0;
  for (const bloque of mito.bloques) {
    for (const escena of bloque.escenas) {
      for (const lado of ["A", "B"]) {
        const archivo = `${escena.id}-${lado}.jpg`;
        const hay = enDisco.has(archivo);
        if (lado === "A") escena.hay = hay;
        if (hay) {
          n++;
          const destino = `${mito.slug}__${archivo}`;
          vigentes.add(destino);
          const src = path.join(dir, archivo);
          const dst = path.join(IMG, destino);
          const necesita =
            !fs.existsSync(dst) || fs.statSync(dst).mtimeMs < fs.statSync(src).mtimeMs;
          if (necesita) {
            await sharp(src).resize({ width: ANCHO_THUMB }).jpeg({ quality: CALIDAD_THUMB, mozjpeg: true }).toFile(dst);
          }
        }
      }
      // la escena cuenta como hecha sólo si tiene sus DOS cuadros
      escena.hay = enDisco.has(`${escena.id}-A.jpg`) && enDisco.has(`${escena.id}-B.jpg`);
    }
  }
  mito.imagenes = n;
  if (mito.estado !== "producido") {
    mito.estado = n === 0 ? "pendiente" : n >= mito.necesita ? "listo" : "parcial";
  }
  totalImgs += n;
}

// Miniaturas huérfanas (escenas renombradas o mitos rehechos).
let borradas = 0;
for (const f of fs.readdirSync(IMG)) {
  if (!vigentes.has(f)) {
    fs.unlinkSync(path.join(IMG, f));
    borradas++;
  }
}

fs.writeFileSync(path.join(STAGE, "datos.json"), JSON.stringify(datos), "utf8");

// Re-embeber en el HTML.
const htmlPath = path.join(STAGE, "qa.html");
const html = fs.readFileSync(htmlPath, "utf8");
const marca = '<script type="application/json" id="datos">';
const i = html.indexOf(marca);
const j = html.indexOf("</script>", i);
if (i < 0 || j < 0) throw new Error("no encuentro el bloque #datos en qa.html");
const nuevo = html.slice(0, i + marca.length) + JSON.stringify(datos) + html.slice(j);
fs.writeFileSync(htmlPath, nuevo, "utf8");

const listos = datos.mitos.filter((m) => m.estado === "listo").length;
console.log(
  `[qa] ${totalImgs} cuadros en disco · ${listos}/${datos.mitos.length} mitos completos · ` +
    `${borradas} miniaturas huérfanas borradas · html ${(nuevo.length / 1024).toFixed(1)} KB`,
);
