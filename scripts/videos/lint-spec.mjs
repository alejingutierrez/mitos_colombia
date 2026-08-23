// Linter de specs de keyframes: detecta los patrones que disparan los filtros
// de moderación de los modelos de video ANTES de gastar en imágenes o clips,
// y algunos descuidos de estilo. Cero costos de API.
//
// Uso:
//   node scripts/videos/lint-spec.mjs --spec scripts/videos/specs/muisca-bachue-escenas.mjs
//
// Sale con código 1 si hay hallazgos de riesgo (rojo); los avisos (amarillo) no fallan.

import path from "node:path";
import process from "node:process";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "../..");
const args = process.argv.slice(2);
const specPath = args[args.indexOf("--spec") + 1];
if (!specPath || specPath.startsWith("--")) {
  console.error("Uso: node scripts/videos/lint-spec.mjs --spec <ruta>");
  process.exit(1);
}
const spec = await import(pathToFileURL(path.resolve(rootDir, specPath)).href);

const MINOR = /\bniñ[oa]s?\b|\bbeb[eé]s?\b|\binfante?s?\b|\bpequeñ[oa]s? de la mano\b/i;
const WATER = /\bagua\b|\blaguna\b|\barroyo\b|\brío\b|\bnadan|\bsumergi|\bemerge|\bmojad/i;
const FIRE = /\bfuego\b|\bfogón\b|\bllamas?\b|\bhoguera\b/i;
const NIGHT = /\bnocturn|\bnoche\b|\bestrellad/i;
const BEHIND = /\bde espaldas\b|\bDE ESPALDAS\b|\bespaldas\b|\blejan[oa]s?\b|\ba media distancia\b|\bpequeñ[oa]s? en el encuadre\b|\bsin personas\b|\bSIN personas\b/;

// Reglas: [nivel, test(scene) => mensaje | null]
const RULES = [
  [
    "ROJO",
    (s) =>
      MINOR.test(s) && (WATER.test(s) || FIRE.test(s) || NIGHT.test(s)) && !BEHIND.test(s)
        ? "menor + agua/fuego/noche sin re-encuadre seguro (usa: de espaldas, a media distancia, o plano sin personas)"
        : null,
  ],
  [
    "ROJO",
    (s) =>
      /\bmojad|\bempapad|\bsaliendo del agua\b/i.test(s) && /\bmanta|\brop|\bvestid/i.test(s)
        ? "ropa mojada explícita (usa: 'ya en la orilla, mantas secas')"
        : null,
  ],
  [
    "ROJO",
    (s) =>
      /\bmultitud\b|\bgrupo\b/i.test(s) && /\bcargando\b|\bcargan\b|\ben brazos\b/i.test(s) && !/\bal hombro\b|\bde espaldas\b/i.test(s)
        ? "multitud cargando sin precisión (usa: 'adultos, de espaldas, bultos tejidos AL HOMBRO')"
        : null,
  ],
  [
    "AMARILLO",
    (s) => (MINOR.test(s) && NIGHT.test(s) && !/\bexterior\b|\bde espaldas\b/i.test(s) ? "escena nocturna íntima con menor: prefiere exterior del bohío, siluetas" : null),
  ],
  [
    "AMARILLO",
    (s) => (/\bserpiente|\bculebra/i.test(s) && !/\bSIN aletas\b|\bsin aletas\b/i.test(s) ? "serpientes sin cláusula anti-pez (añade: SIN aletas, SIN cola de pez, no son peces)" : null),
  ],
  // (el anclaje LA MISMA/EL MISMO solo aplica a items con refs; ver abajo)
  [
    "AMARILLO",
    (s) => (s.length > 620 ? `escena muy larga (${s.length} chars): el modelo diluye instrucciones; apunta a <500` : null),
  ],
];

let rojos = 0;
let amarillos = 0;
for (const item of spec.ITEMS) {
  const findings = [];
  for (const [level, test] of RULES) {
    const msg = test(item.scene || "");
    if (msg) findings.push([level, msg]);
  }
  if (item.kind === "keyframe" && !(item.refs || []).length) {
    findings.push(["AMARILLO", "keyframe sin refs: perderá consistencia con la biblia"]);
  }
  if ((item.refs || []).length && !/LA MISMA|EL MISMO|LAS MISMAS|LOS MISMOS|de la referencia|de las referencias/i.test(item.scene || "")) {
    findings.push(["AMARILLO", "tiene refs pero la escena no ancla identidad (usa LA MISMA / EL MISMO ... de la referencia)"]);
  }
  for (const [level, msg] of findings) {
    if (level === "ROJO") rojos += 1;
    else amarillos += 1;
    console.log(`${level === "ROJO" ? "✗" : "!"} [${level}] ${item.id}: ${msg}`);
  }
}
console.log(`\n[lint-spec] ${spec.SPEC_NAME}: ${rojos} rojos, ${amarillos} amarillos, ${spec.ITEMS.length} items.`);
if (rojos > 0) {
  console.log("[lint-spec] Corrige los ROJOS antes de generar: cada uno es un reintento nsfw casi seguro.");
  process.exit(1);
}
