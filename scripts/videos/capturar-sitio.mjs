// Fotos del SITIO REAL en móvil, para el cierre de canal.
//
// Son el insumo más importante del clip: la pantalla del teléfono no la dibuja
// el modelo de video (pinta texto inventado), se compone encima con estas
// capturas. Ver docs/videos/cierre-de-canal.md.
//
// EL USER-AGENT DE IPHONE ES OBLIGATORIO. Sin él, Chrome headless pide el sitio
// como escritorio, el layout se maqueta a un ancho mayor que la ventana y el
// titular del hero sale cortado por el borde derecho. Con él, el resultado es
// idéntico a lo que ve un iPhone.
//
// Se captura la PÁGINA ENTERA (ventana de 2600 CSS px de alto) y no sólo el
// primer pantallazo, porque el scroll del clip corre sobre esa tira.
//
// Uso:
//   node scripts/videos/capturar-sitio.mjs
//   node scripts/videos/capturar-sitio.mjs --ruta /mitos/bachue --nombre mito
//   node scripts/videos/capturar-sitio.mjs --base https://staging.example.com

import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "../..");
const D = path.join(root, "content/videos/muiscas/cierre");

const args = process.argv.slice(2);
const flag = (n, d = null) => { const i = args.indexOf(n); return i === -1 || !args[i + 1] || args[i + 1].startsWith("--") ? d : args[i + 1]; };

const BASE = flag("--base", "https://www.mitosdecolombia.com");
const CHROME = flag("--chrome", "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome");
const UA = "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1";
const ANCHO_CSS = 393;      // ancho lógico de un iPhone moderno
const ALTO_CSS = 2600;      // ventana alta = captura de página completa
const DPR = 3;

// Las páginas que se capturan. `pantalla` es la que va al teléfono del clip.
const PAGINAS = flag("--ruta")
  ? [{ ruta: flag("--ruta"), nombre: flag("--nombre", "pagina") }]
  : [
      { ruta: "/mitos/bachue", nombre: "mito" },   // la del clip: wordmark, ilustración, título y relato
      { ruta: "/", nombre: "home" },
      { ruta: "/mitos", nombre: "archivo" },
    ];

const tmp = fs.mkdtempSync(path.join(process.env.TMPDIR || "/tmp", "capt-"));

// Secuencial y con tope de tiempo: tres Chrome headless a la vez se quedaron
// colgados sin escribir nada (6 min sin salida), y `--virtual-time-budget` no
// siempre basta para que el proceso termine solo.
function capturar(url, out, perfil, topeMs = 90000) {
  return new Promise((resolve, reject) => {
    const p = spawn(CHROME, [
      "--headless=new", "--disable-gpu", "--hide-scrollbars",
      "--no-first-run", "--no-default-browser-check",
      `--force-device-scale-factor=${DPR}`,
      `--window-size=${ANCHO_CSS},${ALTO_CSS}`,
      "--virtual-time-budget=15000",
      `--user-agent=${UA}`,
      `--user-data-dir=${perfil}`,
      `--screenshot=${out}`,
      url,
    ], { stdio: "ignore" });
    const reloj = setTimeout(() => { p.kill("SIGKILL"); }, topeMs);
    p.on("error", (e) => { clearTimeout(reloj); reject(e); });
    p.on("exit", () => {
      clearTimeout(reloj);
      fs.existsSync(out) ? resolve() : reject(new Error(`no salió captura de ${url} (¿Chrome colgado?)`));
    });
  });
}

if (!fs.existsSync(CHROME)) {
  console.error(`[sitio] no encuentro Chrome en ${CHROME} (pásalo con --chrome)`);
  process.exit(1);
}

fs.mkdirSync(path.join(D, "refs"), { recursive: true });
fs.mkdirSync(path.join(D, "pantalla"), { recursive: true });

for (const [i, p] of PAGINAS.entries()) {
  process.stdout.write(`[sitio] capturando ${p.ruta}… `);
  await capturar(BASE + p.ruta, path.join(tmp, `${p.nombre}.png`), path.join(tmp, `perfil-${i}`));
  console.log("ok");
}

const VENTANA = { w: ANCHO_CSS * DPR, h: 852 * DPR };   // una pantalla de iPhone
for (const p of PAGINAS) {
  const src = path.join(tmp, `${p.nombre}.png`);
  const m = await sharp(src).metadata();
  // Referencia para gpt-image-2: el primer pantallazo tal cual.
  await sharp(src).extract({ left: 0, top: 0, width: VENTANA.w, height: VENTANA.h })
    .jpeg({ quality: 95 }).toFile(path.join(D, "refs", `pantalla-${p.nombre}.jpg`));
  // Tira de scroll: sólo para la página que va en el teléfono.
  if (p.nombre === "mito") {
    const alto = Math.min(m.height, 5400);
    await sharp(src).extract({ left: 0, top: 0, width: VENTANA.w, height: alto })
      .png().toFile(path.join(D, "pantalla", "mito-scroll.png"));
    console.log(`[sitio] tira de scroll ${VENTANA.w}x${alto} → pantalla/mito-scroll.png`);
  }
  console.log(`[sitio] ${BASE}${p.ruta} → ${m.width}x${m.height} · refs/pantalla-${p.nombre}.jpg`);
}

fs.rmSync(tmp, { recursive: true, force: true });
console.log("[sitio] listo. Si cambió el diseño, vuelve a correr build-cierre.mjs: los clips sirven igual.");
