// El cuarto escondite del reparto en bloque, con un módulo de prueba en la
// disposición del bloque mestizo: `pick…Sources(slug)` con un mapa por slug y
// un `define` que lo llama con `input.slug`. Así estaban los dos módulos de
// Bogotá, que publicaban sus fuentes viejas aunque la ficha declarara otras.
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { pathToFileURL } from "node:url";

const kit = import.meta.dirname;

const pool = Array.from({ length: 10 }, (_, i) => `  obra${i}: { title: "Obra ${i}", url: "https://ejemplo.org/${i}", summary: "s${i}", limitation: "l${i}" },`).join("\n");

const FIXTURE = {
  "sources.mjs": `export const pruebaSources = {
${pool}
};

export const pruebaSourceKeysBySlug = {
  "vieja": ["obra0", "obra1", "obra2", "obra3", "obra4"],
  "nueva": ["obra0", "obra1", "obra2", "obra3", "obra4"],
};

export function pickPruebaSources(slug) {
  const keys = pruebaSourceKeysBySlug[slug];
  if (!keys) throw new Error(\`\${slug}: falta selección de fuentes.\`);
  return keys.map((key) => {
    const selected = pruebaSources[key];
    if (!selected) throw new Error(\`\${slug}: fuente desconocida \${key}.\`);
    return selected;
  });
}
`,
  "define-editorial-myth.mjs": `import { pickPruebaSources } from "./sources.mjs";

export function definePruebaMyth(input) {
  const selectedSources = pickPruebaSources(input.slug);
  if (
    selectedSources.length < 5 ||
    new Set(selectedSources.map(({ url }) => url)).size !==
      selectedSources.length
  ) {
    throw new Error(\`\${input.slug}: se esperaban al menos cinco fuentes únicas.\`);
  }
  return { ...input, keySources: selectedSources.slice(0, 3), sources: selectedSources.slice(3) };
}
`,
  "records.mjs": `import { definePruebaMyth } from "./define-editorial-myth.mjs";

export default [
  definePruebaMyth({ slug: "vieja" }),
  definePruebaMyth({
    slug: "nueva",
    sourceKeys: [
      "obra9",
      { key: "obra8", summary: "lo que dice de este relato", limitation: "hasta dónde llega" },
      "obra7", "obra6", "obra5", "obra4", "obra3", "obra2",
    ],
  }),
];
`,
};

function crearFixture() {
  const raiz = fs.mkdtempSync(path.join(os.tmpdir(), "abrir-modulo-"));
  const dir = path.join(raiz, "editorial", "prueba");
  fs.mkdirSync(dir, { recursive: true });
  for (const [f, src] of Object.entries(FIXTURE)) fs.writeFileSync(path.join(dir, f), src);
  return { raiz, dir };
}

const correr = (script, args, cwd) =>
  spawnSync(process.execPath, [path.join(kit, script), ...args], { cwd, encoding: "utf8" });

test("antes de abrir, el módulo ignora las sourceKeys de la ficha", async () => {
  const { dir } = crearFixture();
  const { default: records } = await import(pathToFileURL(path.join(dir, "records.mjs")).href);
  const nueva = records.find((r) => r.slug === "nueva");
  assert.equal(nueva.keySources[0].url, "https://ejemplo.org/0");
});

test("abrir-modulo hace que el define lea sourceKeys y deja igual lo heredado", async () => {
  const { raiz, dir } = crearFixture();
  const r = correr("abrir-modulo.mjs", ["--modulos=prueba", "--apply"], raiz);
  assert.equal(r.status, 0, r.stderr);
  const { default: records } = await import(pathToFileURL(path.join(dir, "records.mjs")).href + "?abierto");
  const nueva = records.find((x) => x.slug === "nueva");
  const vieja = records.find((x) => x.slug === "vieja");
  const urls = (x) => [...x.keySources, ...x.sources].map(({ url }) => url);
  // La ficha con sourceKeys recibe las suyas, en su orden, con su resumen.
  assert.deepEqual(urls(nueva), [9, 8, 7, 6, 5, 4, 3, 2].map((i) => `https://ejemplo.org/${i}`));
  assert.equal(nueva.keySources[1].summary, "lo que dice de este relato");
  assert.equal(nueva.keySources[1].limitation, "hasta dónde llega");
  // La heredada sigue en el reparto por slug.
  assert.deepEqual(urls(vieja), [0, 1, 2, 3, 4].map((i) => `https://ejemplo.org/${i}`));
});

test("con sourceKeys el piso es 8, y fuentesAgotadas lo baja", async () => {
  const { raiz, dir } = crearFixture();
  correr("abrir-modulo.mjs", ["--modulos=prueba", "--apply"], raiz);
  const { definePruebaMyth } = await import(pathToFileURL(path.join(dir, "define-editorial-myth.mjs")).href + "?piso");
  const seis = ["obra0", "obra1", "obra2", "obra3", "obra4", "obra5"];
  assert.throws(() => definePruebaMyth({ slug: "x", sourceKeys: seis }), /6 fuentes, y el piso es 8/);
  assert.doesNotThrow(() => definePruebaMyth({ slug: "x", sourceKeys: seis, fuentesAgotadas: "el relato no da más" }));
  assert.throws(() => definePruebaMyth({ slug: "x", sourceKeys: [...seis, "obra0", "obra0"] }), /URLs repetidas/);
});

test("es idempotente", () => {
  const { raiz, dir } = crearFixture();
  correr("abrir-modulo.mjs", ["--modulos=prueba", "--apply"], raiz);
  const una = fs.readFileSync(path.join(dir, "sources.mjs"), "utf8") + fs.readFileSync(path.join(dir, "define-editorial-myth.mjs"), "utf8");
  const r = correr("abrir-modulo.mjs", ["--modulos=prueba", "--apply"], raiz);
  assert.match(r.stdout, /ya estaba/);
  const dos = fs.readFileSync(path.join(dir, "sources.mjs"), "utf8") + fs.readFileSync(path.join(dir, "define-editorial-myth.mjs"), "utf8");
  assert.equal(una, dos);
});

test("comprobar-modulo marca el define por slug cuando alguna ficha declara sourceKeys", () => {
  const { raiz } = crearFixture();
  const antes = correr("comprobar-modulo.mjs", ["--comunidad=prueba", "--modulos=prueba"], raiz);
  assert.match(antes.stdout, /✗ prueba: el define resuelve las fuentes por slug/);
  correr("abrir-modulo.mjs", ["--modulos=prueba", "--apply"], raiz);
  const despues = correr("comprobar-modulo.mjs", ["--comunidad=prueba", "--modulos=prueba"], raiz);
  assert.doesNotMatch(despues.stdout, /resuelve las fuentes por slug/);
});

test("marca las aserciones sobre texto heredado en los tests del ciclo, sin borrarlas", () => {
  const { raiz } = crearFixture();
  const dirTests = path.join(raiz, "scripts", "editorial");
  fs.mkdirSync(dirTests, { recursive: true });
  const archivo = path.join(dirTests, "prueba-corpus.test.mjs");
  const original = `import records from "../../editorial/prueba/records.mjs";
test("x", () => {
  assert.match(
    bySlug.get("vieja").historia,
    /1775/,
  );
  assert.match(record.seo_title, /x/);
});
`;
  fs.writeFileSync(archivo, original);
  correr("abrir-modulo.mjs", ["--modulos=prueba", "--apply"], raiz);
  const marcado = fs.readFileSync(archivo, "utf8");
  assert.equal(marcado.match(/heredada: reescribir tras el cotejo/g)?.length, 1);
  assert.equal(marcado.replace(/^\s*\/\/ heredada: reescribir tras el cotejo\n/m, ""), original);
  correr("abrir-modulo.mjs", ["--modulos=prueba", "--apply"], raiz);
  assert.equal(fs.readFileSync(archivo, "utf8"), marcado);
});
