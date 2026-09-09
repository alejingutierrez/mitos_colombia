import assert from "node:assert/strict";
import test from "node:test";
import {
  CHARACTERS,
  LEXICON,
  chooseBedsForStory,
  normalize,
  scoreCharacters,
  splitStory,
  topCharacters,
} from "../src/lib/narration-character.js";

const lechos = [
  { slug: "04-viento-de-paramo", characters: ["viento", "camino", "montana"] },
  { slug: "06-laguna-de-iguaque", characters: ["agua", "silencio"] },
  { slug: "09-telar-de-semillas", characters: ["oficio", "comunidad"] },
  { slug: "12-silencio-de-la-sabana", characters: ["silencio", "viento"] },
  { slug: "03-aves-del-bosque", characters: ["selva"] },
];

test("todo carácter del vocabulario tiene léxico y viceversa", () => {
  for (const c of CHARACTERS) assert.ok(LEXICON[c]?.length, `sin léxico: ${c}`);
  for (const c of Object.keys(LEXICON)) assert.ok(CHARACTERS.includes(c), `fuera del vocabulario: ${c}`);
});

test("la normalización quita tildes y baja a minúscula, la eñe incluida", () => {
  // La descomposición NFD separa la virgulilla de la ene, así que «ñ» acaba en
  // «n». No es un problema: el léxico se normaliza con la MISMA función, de modo
  // que «montañ» y «montaña» siguen encontrándose.
  assert.equal(normalize("Bohío PÁRAMO Ñ"), "bohio paramo n");
});

test("texto y léxico se normalizan igual, así que la eñe no rompe el encaje", () => {
  assert.equal(scoreCharacters("La montaña y la peña").montana, 2);
  assert.equal(scoreCharacters("La montana y la pena").montana, 2);
});

test("puntúa por raíz, así que atrapa la familia de la palabra", () => {
  // Caminó, camino, caminante y caminando cuentan las cuatro por la raíz «camin»
  const p = scoreCharacters("Caminó el camino, y el caminante iba caminando.");
  assert.equal(p.camino, 4);
});

test("el carácter dominante sale del texto, no del azar", () => {
  assert.equal(topCharacters("La laguna, el río y la lluvia sobre el agua.")[0], "agua");
  assert.equal(topCharacters("Tejió la manta en el telar, hilando el algodón.")[0], "oficio");
});

test("un texto sin vocabulario reconocible no inventa carácter", () => {
  assert.deepEqual(topCharacters("xxx yyy zzz"), []);
});

test("los tramos reparten el relato sin perder ni repetir palabras", () => {
  const relato = Array.from({ length: 100 }, (_, i) => `p${i}`).join(" ");
  const tramos = splitStory(relato, 3);
  assert.equal(tramos.length, 3);
  assert.equal(tramos.join(" ").split(/\s+/).length, 100);
});

test("cada tramo recibe el lecho que le corresponde por carácter", () => {
  const relato =
    "Vino del oriente y anduvo el camino cruzando los llanos. " +
    "Después enseñó a tejer la manta en el telar, hilando el algodón. " +
    "Una mañana ya no estaba: nadie halló rastro y el resto fue silencio.";
  const elegidos = chooseBedsForStory(relato, lechos, 3).map((b) => b.slug);
  assert.deepEqual(elegidos, [
    "04-viento-de-paramo",
    "09-telar-de-semillas",
    "12-silencio-de-la-sabana",
  ]);
});

test("ningún lecho se repite dentro de una misma narración", () => {
  const relato = "El agua, la laguna, el río. El agua otra vez. Y más agua todavía.";
  const elegidos = chooseBedsForStory(relato, lechos, 3).map((b) => b.slug);
  assert.equal(new Set(elegidos).size, elegidos.length);
});

test("sin encaje temático cae al menos usado en vez de quedarse sin música", () => {
  const elegidos = chooseBedsForStory("xxx yyy zzz", lechos, 2);
  assert.equal(elegidos.length, 2);
  // `lechos` llega ordenado por uso ascendente: se toman los dos primeros
  assert.deepEqual(elegidos.map((b) => b.slug), ["04-viento-de-paramo", "06-laguna-de-iguaque"]);
});

test("no se piden más lechos de los que hay en el catálogo", () => {
  assert.equal(chooseBedsForStory("agua y camino", lechos.slice(0, 2), 5).length, 2);
});
