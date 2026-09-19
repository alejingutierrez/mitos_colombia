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
  const yaEstaba = src.includes("input.historia ??");
  let out = src;
  let cambios = 0;

  // `const historia = `${input.historyCore}\n\n${…}`;` donde `…` puede ser un
  // identificador o una expresión de varias líneas. Se conserva entera como
  // camino viejo y se antepone el campo escrito.
  const reCampo = (nombre, core) =>
    new RegExp(
      String.raw`  const ${nombre} = (\x60\$\{input\.${core}\}\\n\\n\$\{[\s\S]*?\}\x60);\n`,
    );
  for (const [nombre, core] of [
    ["historia", "historyCore"],
    ["versiones", "versionCore"],
    ["similitudes", "similarityCore"],
  ]) {
    const re = reCampo(nombre, core);
    const m = out.match(re);
    if (!m) continue;
    out = out.replace(re, `  const ${nombre} = input.${nombre} ?? ${m[1]};\n`);
    cambios += 1;
  }

  // Cuando `similitudes` no se compone y entra directo desde `similarityCore`,
  // el bloque compartido no está ahí, pero el campo sigue sin poder escribirse
  // entero: hay que dejar pasar `input.similitudes`.
  if (/\n    similitudes: input\.similarityCore,\n/.test(out)) {
    out = out.replace(
      /\n    similitudes: input\.similarityCore,\n/,
      "\n    similitudes: input.similitudes ?? input.similarityCore,\n",
    );
    cambios += 1;
  }

  if (!out.includes("input.relatoCorto")) {
    const antes = out;
    out = out.replace(
      /(\n    mito: input\.mito,\n)/,
      "$1    ...(input.relatoCorto ? { relatoCorto: input.relatoCorto } : {}),\n",
    );
    if (out !== antes) cambios += 1;
  }

  if (!cambios) return { src, hecho: yaEstaba ? "ya estaba" : "no reconozco la composición" };

  // La nota va una sola vez, arriba del constructor.
  if (!out.includes("El camino viejo daba un párrafo propio")) {
    out = out.replace(
      /(export function build\w+EditorialMyth\(input\) \{\n)/,
      "// Las fichas reescritas entregan el campo entero; si no lo traen, se compone\n" +
        "// como antes. El camino viejo daba un párrafo propio y el resto idéntico para\n" +
        "// toda la comunidad: por eso todas medían lo mismo y se leían igual.\n$1",
    );
  }
  return { src: out, hecho: `abierto (${cambios})` };
}

// Tres formas de reparto conviven en los módulos:
//   A. `pickXSources(...keys)` con `[...new Set(keys)].map(...)` (wayuu y sus pares);
//   B. `pickXSources(...keys)` con `keys.map(...)` (la mayoría del bloque B/C/D);
//   C. `pickXSources()` con la lista de claves escrita dentro: todos los mitos
//      de la comunidad reciben exactamente las mismas fuentes. Ésa es la que
//      más importa abrir, porque el reparto en bloque está en el código.
// En los tres casos el resultado acepta `{ key, summary, limitation }`.
// El cuerpo del map varía en detalles que no cambian nada: la variable se llama
// `selected` o `source`, y el `throw` va con llaves o sin ellas.
const CUERPO_MAP = String.raw`\.map\(\((?:key|entrada)\) => \{\s*const (?:selected|source) = (\w+)\[key\];\s*if \(!(?:selected|source)\) \{?\s*throw new Error\(\x60([^\x60]*)\$\{key\}\.?\x60\);\s*\}?\s*return (?:selected|source);\s*\}\);`;

function nuevoPick(nombre, pool, mensaje, porDefecto) {
  const defecto = porDefecto
    ? `  // Antes esta función no recibía nada: devolvía la misma lista a todos los\n` +
      `  // mitos de la comunidad. La lista se conserva como reparto por defecto\n` +
      `  // mientras cada ficha pasa a declarar sus propias claves.\n` +
      `  const entradas = entries.length ? entries : [\n${porDefecto}\n  ];\n`
    : `  const entradas = entries;\n`;
  return `/**
 * Acepta una clave suelta o una clave con resumen y límite propios del mito
 * (\`{ key, summary, limitation }\`). La ficha bibliográfica la fija el pool; lo
 * que cambia por mito es qué dice esa obra sobre ese relato.
 */
export function ${nombre}(...entries) {
${defecto}  const vistas = new Set();
  const salida = [];
  for (const entrada of entradas) {
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
}

function abrirPick(src) {
  let cambios = 0;
  let yaEstaban = 0;

  // A y B: varargs.
  const reVarargs = new RegExp(
    String.raw`export function (pick\w+Sources)\(\.\.\.keys\) \{\s*return (?:\[\.\.\.new Set\(keys\)\]|keys)` +
      CUERPO_MAP +
      String.raw`\s*\}`,
    "g",
  );
  src = src.replace(reVarargs, (_todo, nombre, pool, mensaje) => {
    cambios += 1;
    return nuevoPick(nombre, pool, mensaje, null);
  });

  // C: lista escrita dentro, sin argumentos.
  const reLista = new RegExp(
    String.raw`export function (pick\w+Sources)\(\) \{\s*const keys = \[([\s\S]*?)\];\s*return keys` +
      CUERPO_MAP +
      String.raw`\s*\}`,
    "g",
  );
  src = src.replace(reLista, (_todo, nombre, lista, pool, mensaje) => {
    cambios += 1;
    const claves = lista
      .split(",")
      .map((x) => x.trim())
      .filter(Boolean)
      .map((x) => `    ${x},`)
      .join("\n");
    return nuevoPick(nombre, pool, mensaje, claves);
  });

  for (const _ of src.matchAll(/typeof entrada === "string"/g)) yaEstaban += 1;
  if (cambios) return { src, hecho: `abierto (${cambios})` };
  if (yaEstaban) return { src, hecho: "ya estaba" };
  return { src, hecho: "no reconozco el pick" };
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
