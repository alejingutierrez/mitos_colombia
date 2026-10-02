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

test("las raíces se anclan al comienzo de palabra, no a cualquier posición", () => {
  // Regresión: sin ancla, «ard» encontraba fuego dentro de «guardaba», «ave»
  // encontraba selva dentro de «grave» y «suave», y el resultado se desviaba
  // sin dar ninguna señal.
  assert.equal(scoreCharacters("La cosa que la guardaba era grave y suave.").fuego, undefined);
  assert.equal(scoreCharacters("La cosa que la guardaba era grave y suave.").selva, undefined);
  // fuego, hogu y ard: tres raíces distintas de la misma familia
  assert.equal(scoreCharacters("El fuego ardía en la hoguera.").fuego, 3);
});

test("«nada» y «nadie» no son agua", () => {
  // En un mito de creación «no había nada» aparece a cada paso; con la raíz
  // «nad» eso convertía una cosmogonía de la noche en un relato de agua.
  assert.equal(scoreCharacters("No había nada y nadie lo vio.").agua, undefined);
  assert.equal(scoreCharacters("Nadaba en el agua.").agua, 2);
});

test("la noche del archivo se nombra tanto por la luz como por la oscuridad", () => {
  const p = scoreCharacters("Dentro de la noche estaba encerrada la luz, y el sol no existía.");
  assert.equal(p.noche, 3);
});

test("la muerte y la ultratumba puntúan como silencio", () => {
  // Faltaban casi todas: un mito sobre el viaje de las almas se puntuaba por
  // cualquier otra cosa que el texto nombrara de paso.
  const p = scoreCharacters("Al morir, el alma bajó al barranco. La tumba quedó vacía.");
  assert.ok(p.silencio >= 4, `esperaba al menos 4, dio ${p.silencio}`);
});
