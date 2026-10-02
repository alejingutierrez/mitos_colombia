#!/usr/bin/env node
/**
 * Cataloga el material visual que la investigacion descargo.
 *
 * El dossier cita lo que vio —«Severino 1924 describe el bohio en forma de
 * kiosco», «dos dibujos de Tumina de 1947-49»— pero el que dibuje no va a
 * tener esa pagina delante: va a tener la ecfrasis. Y una ecfrasis es
 * exactamente lo que este proyecto intenta no convertir en canon.
 *
 * El reparto sigue la regla del repo —se versiona el conocimiento, no los
 * rushes—: **el binario vive en `output/`, que esta ignorado**, y lo que va a
 * git es este manifiesto, que dice de donde salio cada archivo, su sha256 y,
 * lo que de verdad importa, **para que se puede mirar**.
 *
 * Porque aqui hay una tension real: una referencia sube la fidelidad y sube el
 * riesgo de copiar el ejemplar. La foto de un okama o de una pinta de cana
 * flecha ayuda a entender la forma y es justo lo que no se puede reproducir.
 * Por eso cada archivo lleva una clase de uso y no solo una procedencia.
 *
 *   node scripts/mitos/catalogar-referencias.mjs --dir output/referencias-2026-09-18
 */
import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { extname, join, relative, resolve } from "node:path";

/**
 * Para que sirve mirar un archivo. Es el campo que decide si una referencia
 * ayuda o hace dano, y ninguno se cataloga sin el.
 */
export const USE_CLASSES = {
  // Se puede tomar la forma documentada: proporcion, hechura, estructura.
  form_reference: "la forma sí se usa",
  // Se mira para entender, nunca se reproduce: es identidad y es sustento.
  study_only: "el lenguaje sí, el ejemplar no",
  // Territorio, luz, materia, vegetacion. Lo mas libre.
  context: "contexto de territorio y materia",
  // Bajado por error o cubierto por una restriccion: no entra a ninguna lamina.
  do_not_use: "no entra a ninguna lámina",
  // Todavia sin clasificar por una persona.
  unclassified: "sin clasificar — no usar hasta que el editor lo mire",
};

const MEDIA = new Set([".jpg", ".jpeg", ".png", ".webp", ".tif", ".tiff", ".pdf", ".gif"]);

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i += 1) {
    if (!argv[i].startsWith("--")) continue;
    const key = argv[i].slice(2);
    const next = argv[i + 1];
    out[key] = !next || next.startsWith("--") ? true : next;
  }
  return out;
}

function walk(dir, base = dir, found = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full, base, found);
    else if (MEDIA.has(extname(entry.name).toLowerCase())) found.push(relative(base, full));
  }
  return found;
}

/** El titulo interno de un PDF suele decir de que obra salio; vale mas que el nombre del archivo. */
function pdfTitle(buffer) {
  const head = buffer.subarray(0, 40000).toString("latin1");
  const match = head.match(/\/Title\s*\(([^)]{3,200})\)/);
  if (!match) return null;
  return match[1].replace(/\\(.)/g, "$1").replace(/\s+/g, " ").trim() || null;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const dir = resolve(String(args.dir || "output/referencias-2026-09-18"));
  if (!existsSync(dir)) throw new Error(`no existe: ${dir}`);

  const outPath = resolve(String(args.out || "content/mitos-visuales/referencias-2026-09-18.json"));
  const previous = existsSync(outPath) ? JSON.parse(readFileSync(outPath, "utf8")) : { files: [] };
  const known = new Map((previous.files || []).map((file) => [file.sha256, file]));

  const files = walk(dir).sort();
  const entries = [];
  let bytes = 0;
  for (const relativePath of files) {
    const full = join(dir, relativePath);
    const buffer = readFileSync(full);
    const sha256 = createHash("sha256").update(buffer).digest("hex");
    bytes += buffer.length;
    // Lo que una persona ya clasifico no se pisa: el catalogo se reejecuta.
    const before = known.get(sha256) || {};
    entries.push({
      path: relativePath,
      bytes: statSync(full).size,
      sha256,
      kind: extname(relativePath).toLowerCase() === ".pdf" ? "documento" : "imagen",
      title: before.title ?? pdfTitle(buffer),
      community: before.community ?? null,
      source_id: before.source_id ?? null,
      locator: before.locator ?? null,
      shows: before.shows ?? null,
      rights: before.rights ?? null,
      use_class: before.use_class ?? "unclassified",
    });
  }

  const byClass = {};
  for (const entry of entries) byClass[entry.use_class] = (byClass[entry.use_class] || 0) + 1;

  writeFileSync(
    outPath,
    `${JSON.stringify(
      {
        catalogued_at: new Date().toISOString().slice(0, 10),
        store: relative(process.cwd(), dir),
        note: "Los binarios viven en output/, que git ignora. Este manifiesto es lo que se versiona: procedencia, huella y clase de uso. Se regenera con scripts/mitos/catalogar-referencias.mjs.",
        use_classes: USE_CLASSES,
        totals: { files: entries.length, megabytes: Math.round(bytes / 1e5) / 10, by_use_class: byClass },
        files: entries,
      },
      null,
      2,
    )}\n`,
  );

  console.log(`catalogadas ${entries.length} referencias · ${(bytes / 1e6).toFixed(0)} MB`);
  for (const [name, count] of Object.entries(byClass).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${String(count).padStart(4)}  ${name.padEnd(16)} ${USE_CLASSES[name] || ""}`);
  }
  console.log(`manifiesto: ${relative(process.cwd(), outPath)}`);
  if (byClass.unclassified) {
    console.log(
      `\n${byClass.unclassified} sin clasificar. Una referencia sin clase de uso no se mira:\nla foto de un okama o de una pinta de caña flecha ayuda a entender la forma y es\njusto lo que no se puede reproducir.`,
    );
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  try {
    main();
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
