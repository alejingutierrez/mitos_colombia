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
    String.raw`export function (pick\w*Sources)\(\.\.\.keys\) \{\s*return (?:\[\.\.\.new Set\(keys\)\]|keys)` +
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
    String.raw`export function (pick\w*Sources)\(\) \{\s*const keys = \[([\s\S]*?)\];\s*return keys` +
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

  // D: el pick devuelve el pool entero con `Object.values`. Es la forma más
  // extrema del reparto en bloque —la ficha no elige nada— y la usaba el
  // dossier de Juan Lara.
  const reTodo = new RegExp(
    String.raw`export function (pick\w*Sources)\(\) \{\s*return Object\.values\((\w+)\);\s*\}`,
    "g",
  );
  src = src.replace(reTodo, (_todo, nombre, pool) => {
    cambios += 1;
    const claves = Object.keys({}).length; // sin lista escrita: el defecto es el pool entero
    void claves;
    return nuevoPick(nombre, pool, `Fuente desconocida en ${pool}: `, null).replace(
      "  const entradas = entries;\n",
      "  // Antes devolvía el pool entero, sin que la ficha eligiera nada. Se\n" +
        "  // conserva ese comportamiento cuando no se le pasa nada.\n" +
        `  const entradas = entries.length ? entries : Object.keys(${pool});\n`,
    );
  });

  for (const _ of src.matchAll(/typeof entrada === "string"/g)) yaEstaban += 1;
  if (cambios) return { src, hecho: `abierto (${cambios})` };
  if (yaEstaban) return { src, hecho: "ya estaba" };
  return { src, hecho: "no reconozco el pick" };
}

function messageSafe(m) {
  return m.replace(/`/g, "\\`");
}

/**
 * El reparto en bloque tiene un tercer escondite, más profundo que el pool: el
 * `define`. Zenú, yucuna, yukpa, ufaina y yagua llamaban a su `pickXSources()`
 * **sin argumentos**, así que daba igual lo que la ficha declarara en
 * `sourceKeys`: el define lo ignoraba y repartía la misma lista a todos. Aquí
 * se le pasa lo que la ficha declara, dejando la lista de siempre como
 * respaldo cuando no declara nada.
 */
function abrirReparto(src) {
  if (/pick\w+Sources\(\s*\.\.\./.test(src)) return { src, hecho: "ya estaba" };
  const re = /(pick\w+Sources)\(\)/g;
  if (!re.test(src)) return { src, hecho: "no reconozco la llamada" };
  re.lastIndex = 0;
  const out = src.replace(re, "$1(...(input.sourceKeys ?? []))");
  return { src: out, hecho: "abierto" };
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

/**
 * El cuarto escondite, el del bloque mestizo y mixto: `pickXSources(slug)` lee
 * un mapa por slug escrito en `sources.mjs`, y el `define` lo llama con
 * `input.slug`. Da igual lo que la ficha declare en `sourceKeys`: nadie lo lee.
 * En Bogotá el consolidador escribió 115 fuentes nuevas y el módulo siguió
 * publicando las viejas; el cotejo encontró seis fichas sin una URL en común
 * con su investigación. Estaba en 26 de los 27 ciclos pendientes.
 *
 * El `pick` heredado tiene once formas distintas —mapa por slug, ternarias,
 * una lista fija para un solo slug—, así que no se reescribe: se conserva tal
 * cual como `…Heredadas` y se le antepone uno que resuelve la lista de la
 * ficha cuando la hay.
 */
function abrirPickPorSlug(src) {
  if (/function pick\w+SourcesHeredadas\(/.test(src)) return { src, hecho: "ya estaba" };
  const re = /export function (pick\w+Sources)\(slug\) \{([\s\S]*?)\n\}/;
  const m = src.match(re);
  if (!m) return { src, hecho: "no es pick por slug" };
  const [, nombre, cuerpo] = m;
  const pool = (cuerpo.match(/(\w+)\[key\]/) || [])[1];
  if (!pool) return { src, hecho: "no reconozco el pool" };
  // Un módulo cuyo pick heredado devuelve `{ key, ...selected }` sigue
  // devolviendo la clave también por la vía nueva.
  const conClave = /return \{ key, \.\.\.selected \}/.test(cuerpo);
  const nuevo = `/**
 * Resuelve las fuentes de una ficha. Con una lista —la \`sourceKeys\` que la
 * ficha declara— devuelve esas obras en ese orden, y cada entrada puede ser una
 * clave suelta o \`{ key, summary, limitation }\` con lo que esa obra dice de
 * ESE relato. Con un slug cae en el reparto heredado, que se conserva tal cual
 * para las fichas que todavía no se han rehecho.
 */
export function ${nombre}(slugOrEntries) {
  if (!Array.isArray(slugOrEntries)) return ${nombre}Heredadas(slugOrEntries);
  return slugOrEntries.map((entrada) => {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = ${pool}[key];
    if (!selected) throw new Error(\`Fuente desconocida: \${JSON.stringify(entrada)}.\`);
    return {
      ${conClave ? "key,\n      " : ""}...selected,
      ...(typeof entrada === "object" && entrada.summary ? { summary: entrada.summary } : {}),
      ...(typeof entrada === "object" && entrada.limitation ? { limitation: entrada.limitation } : {}),
    };
  });
}

// El reparto heredado, por slug. Sólo lo usan las fichas sin \`sourceKeys\`.
function ${nombre}Heredadas(slug) {${cuerpo}
}`;
  return { src: src.replace(re, nuevo), hecho: "abierto" };
}

/**
 * La otra mitad del cuarto escondite: el `define` pasa `input.slug` y fija un
 * piso —exacto o mínimo— pensado para el reparto en bloque. Pasa a leer
 * `sourceKeys` cuando la ficha las declara, con el piso del bloque (8, o 1 si
 * declara `fuentesAgotadas`), y conserva la comprobación de siempre para las
 * heredadas.
 */
function abrirDefinePorSlug(src) {
  if (/Sources\(input\.sourceKeys \|\| input\.slug\)/.test(src)) return { src, hecho: "ya estaba" };
  const re =
    /  const (\w+) = (pick\w+Sources)\(\s*input\.slug,?\s*\);\n  if \(([\s\S]*?)\) \{\n    throw new Error\((`[^`]*`)\);\n  \}\n/;
  const m = src.match(re);
  if (!m) return { src, hecho: "no es define por slug" };
  const [, variable, pick, condicion, mensaje] = m;
  const nuevo =
    `  // Las fuentes son las que la ficha declara en \`sourceKeys\`; sin ellas cae\n` +
    `  // en el reparto heredado por slug, con la comprobación de siempre.\n` +
    `  const ${variable} = ${pick}(input.sourceKeys || input.slug);\n` +
    `  if (input.sourceKeys) {\n` +
    `    // Piso del bloque mestizo y mixto: 8, salvo \`fuentesAgotadas\` declarado.\n` +
    `    const minimo = input.fuentesAgotadas ? 1 : 8;\n` +
    // Mientras el consolidador reescribe las fuentes, una ficha puede quedar
    // un momento bajo el piso, y el piso le impedía cargar el módulo que tiene
    // que arreglar. Lo exigen después el test del corpus y la aplicación.
    `    if (${variable}.length < minimo && !process.env.ENRIQUECER_CONSOLIDANDO) {\n` +
    `      throw new Error(\`\${input.slug}: \${${variable}.length} fuentes, y el piso es \${minimo}.\`);\n` +
    `    }\n` +
    `    if (new Set(${variable}.map(({ url }) => url)).size !== ${variable}.length) {\n` +
    `      throw new Error(\`\${input.slug}: hay URLs repetidas entre sus fuentes.\`);\n` +
    `    }\n` +
    `  } else if (${condicion.trim().replace(/\s*\n\s*/g, " ")}) {\n` +
    `    throw new Error(${mensaje});\n` +
    `  }\n`;
  return { src: src.replace(re, nuevo), hecho: "abierto" };
}

/**
 * Los tests de cada ciclo afirman frases literales del texto heredado. Cuando
 * el cotejo con el primario desmiente ese texto —el Mono «de 1775», el «hábito
 * blanco» de la monja—, aparecen en rojo el día de aplicar, todos a la vez. Al
 * abrir el ciclo se marcan, para que se reescriban sobre la sustancia en cuanto
 * llegue la reescritura. Nunca se borran.
 */
const MARCA = "// heredada: reescribir tras el cotejo";
function marcarAsercionesHeredadas(src) {
  const lineas = src.split("\n");
  const salida = [];
  let marcadas = 0;
  for (let i = 0; i < lineas.length; i += 1) {
    const linea = lineas[i];
    if (/^\s*assert\.(match|doesNotMatch)\(/.test(linea)) {
      let fin = i;
      while (fin < lineas.length - 1 && fin - i < 8 && !/\);\s*$/.test(lineas[fin])) fin += 1;
      const sentencia = lineas.slice(i, fin + 1).join("\n");
      const anterior = salida[salida.length - 1] || "";
      if (/\.(mito|historia|versiones|similitudes|leccion)\b/.test(sentencia) && !anterior.includes(MARCA)) {
        salida.push(`${linea.match(/^\s*/)[0]}${MARCA}`);
        marcadas += 1;
      }
    }
    salida.push(linea);
  }
  return { src: salida.join("\n"), marcadas };
}

async function testsDelModulo(modulo) {
  const dir = path.resolve("scripts", "editorial");
  const archivos = (await fs.readdir(dir).catch(() => [])).filter((f) => f.endsWith("-corpus.test.mjs"));
  const propios = [];
  for (const f of archivos) {
    const src = await fs.readFile(path.join(dir, f), "utf8");
    if (src.includes(`editorial/${modulo}/`)) propios.push(path.join(dir, f));
  }
  return propios;
}

for (const modulo of String(options.modulos).split(",").map((s) => s.trim())) {
  const root = path.resolve("editorial", modulo);
  console.log(`\n### ${modulo}`);
  for (const [archivo, abrir] of [
    ["build-editorial-myth.mjs", abrirConstructor],
    ["sources.mjs", abrirPick],
    ["define-editorial-myth.mjs", abrirDefine],
    ["define-editorial-myth.mjs", abrirReparto],
    ["sources.mjs", abrirPickPorSlug],
    ["define-editorial-myth.mjs", abrirDefinePorSlug],
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
  for (const ruta of await testsDelModulo(modulo)) {
    const src = await fs.readFile(ruta, "utf8");
    const { src: out, marcadas } = marcarAsercionesHeredadas(src);
    console.log(`  ${path.basename(ruta).padEnd(26)} ${marcadas ? `${marcadas} aserciones de texto marcadas` : "nada que marcar"}`);
    if (apply && out !== src) await fs.writeFile(ruta, out);
  }
}
console.log(apply ? "\nEscrito." : "\nDry-run. Añade --apply para escribir.");
