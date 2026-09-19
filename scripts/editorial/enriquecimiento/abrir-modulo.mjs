/**
 * Paso cero de cada comunidad: abrir su módulo antes de reescribir.
 *
 *   node scripts/editorial/enriquecimiento/abrir-modulo.mjs --modulos=desana[,tucano] [--apply]
 *
 * Cinco comunidades seguidas fallaron en el mismo punto y siempre por las
 * mismas tres razones, así que va de script y no de memoria:
 *
 *  1. El constructor compone Historia, Versiones y Similitudes como
 *     `${input.historyCore}\n\n${sharedHistory}` — un párrafo propio más los
 *     mismos para toda la comunidad. Se le enseña a aceptar el campo entero y
 *     se deja el camino viejo como respaldo.
 *  2. `pick<Comunidad>Sources` sólo acepta claves sueltas, así que un mito no
 *     puede dar su propio `summary` ni su propia `limitation` a una obra que
 *     comparte con los demás.
 *  3. `define<Comunidad>Myth` exige un número exacto de fuentes —siempre
 *     siete—, que era el reparto en bloque escrito como aserción.
 *
 * Y el constructor tiene que dejar pasar `relatoCorto`, la excepción declarada
 * al mínimo del Relato.
 *
 * Es idempotente: lo que ya está abierto se informa y no se toca.
 */
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { parseArgs } from "./lib.mjs";

const options = parseArgs(process.argv.slice(2));
if (!options.modulos) throw new Error("Falta --modulos=a,b");
const apply = Boolean(options.apply);

function abrirConstructor(src) {
  if (src.includes("input.historia ??")) return { src, hecho: "ya estaba" };
  const viejo = /  const historia = `\$\{input\.historyCore\}\\n\\n\$\{sharedHistory\}`;\n  const versiones = `\$\{input\.versionCore\}\\n\\n\$\{sharedVersions\}`;\n  const similitudes = `\$\{input\.similarityCore\}\\n\\n\$\{sharedSimilarities\}`;\n/;
  if (!viejo.test(src)) return { src, hecho: "no reconozco la composición" };
  const nuevo =
    "  // Las fichas reescritas entregan el campo entero. `historyCore` y los tres\n" +
    "  // bloques compartidos son el camino viejo: daban un párrafo propio y el\n" +
    "  // resto idéntico para toda la comunidad, que es la razón de que todas\n" +
    "  // midieran lo mismo y se leyeran igual.\n" +
    "  const historia = input.historia ?? `${input.historyCore}\\n\\n${sharedHistory}`;\n" +
    "  const versiones = input.versiones ?? `${input.versionCore}\\n\\n${sharedVersions}`;\n" +
    "  const similitudes =\n    input.similitudes ?? `${input.similarityCore}\\n\\n${sharedSimilarities}`;\n";
  let out = src.replace(viejo, nuevo);
  if (!out.includes("input.relatoCorto")) {
    out = out.replace(
      /(\n    mito: input\.mito,\n)/,
      "$1    ...(input.relatoCorto ? { relatoCorto: input.relatoCorto } : {}),\n",
    );
  }
  return { src: out, hecho: "abierto" };
}

function abrirPick(src) {
  if (src.includes("typeof entrada === \"string\"")) return { src, hecho: "ya estaba" };
  const re = /export function (pick\w+Sources)\(\.\.\.keys\) \{\n  return \[\.\.\.new Set\(keys\)\]\.map\(\(key\) => \{\n    const selected = (\w+)\[key\];\n    if \(!selected\) throw new Error\(`([^`]*)\$\{key\}`\);\n    return selected;\n  \}\);\n\}/;
  const m = src.match(re);
  if (!m) return { src, hecho: "no reconozco el pick" };
  const [, nombre, pool, mensaje] = m;
  const nuevo = `/**
 * Acepta una clave suelta o una clave con resumen y límite propios del mito
 * (\`{ key, summary, limitation }\`). La ficha bibliográfica la fija el pool; lo
 * que cambia por mito es qué dice esa obra sobre ese relato.
 */
export function ${nombre}(...entries) {
  const vistas = new Set();
  const salida = [];
  for (const entrada of entries) {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = ${pool}[key];
    if (!selected) {
      const visto = typeof entrada === "string" ? entrada : JSON.stringify(entrada);
      throw new Error(\`${messageSafe(mensaje)}\${visto}\`);
    }
    if (vistas.has(key)) continue;
    vistas.add(key);
    salida.push(
      typeof entrada === "string"
        ? selected
        : {
            ...selected,
            ...(entrada.summary ? { summary: entrada.summary } : {}),
            ...(entrada.limitation ? { limitation: entrada.limitation } : {}),
          },
    );
  }
  return salida;
}`;
  return { src: src.replace(re, nuevo), hecho: "abierto" };
}

function messageSafe(m) {
  return m.replace(/`/g, "\\`");
}

function abrirDefine(src) {
  const re = /  if \(selectedSources\.length !== (\d+)\) \{\n    throw new Error\(`\$\{input\.slug\}: [^`]*`\);\n  \}/;
  const m = src.match(re);
  if (!m) return { src, hecho: src.includes("< 5") ? "ya estaba" : "no reconozco el tope" };
  const nuevo =
    "  // Antes exigía exactamente " + m[1] + ": el reparto en bloque escrito como\n" +
    "  // aserción. Lo que importa es que haya fuentes suficientes.\n" +
    "  if (selectedSources.length < 5) {\n" +
    "    throw new Error(\n" +
    "      `${input.slug}: ${selectedSources.length} fuentes únicas, el mínimo son cinco.`,\n" +
    "    );\n  }";
  let out = src.replace(re, nuevo);
  if (!/\n  sourceKeys,/.test(out) && /\n  narrativeSource,/.test(out)) {
    out = out
      .replace(/\n  narrativeSource,/, "\n  narrativeSource,\n  // Fuentes propias del mito; sustituyen al reparto compartido cuando existen.\n  sourceKeys,")
      .replace(
        /(\n  const selectedSources = pick\w+Sources\()/,
        "\n  const selectedSources = sourceKeys\n    ? pick_NOMBRE_(...sourceKeys)\n    : pick_NOMBRE_(",
      );
    const nombre = (out.match(/export function (pick\w+Sources)/) || out.match(/pick(\w+)Sources/) || [])[0];
    if (nombre) out = out.replace(/pick_NOMBRE_/g, nombre.replace("export function ", ""));
  }
  return { src: out, hecho: "abierto" };
}

for (const modulo of String(options.modulos).split(",").map((s) => s.trim())) {
  const root = path.resolve("editorial", modulo);
  console.log(`\n### ${modulo}`);
  for (const [archivo, abrir] of [
    ["build-editorial-myth.mjs", abrirConstructor],
    ["sources.mjs", abrirPick],
    ["define-editorial-myth.mjs", abrirDefine],
  ]) {
    const ruta = path.join(root, archivo);
    let src;
    try {
      src = await fs.readFile(ruta, "utf8");
    } catch {
      console.log(`  ${archivo.padEnd(26)} no existe`);
      continue;
    }
    const { src: out, hecho } = abrir(src);
    console.log(`  ${archivo.padEnd(26)} ${hecho}`);
    if (apply && out !== src) await fs.writeFile(ruta, out);
  }
}
console.log(apply ? "\nEscrito." : "\nDry-run. Añade --apply para escribir.");
