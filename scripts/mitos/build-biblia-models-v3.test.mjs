import assert from "node:assert/strict";
import test from "node:test";
import { narrowEra, splitEra } from "./build-biblia-models-v3.mjs";

/** Un `era` real, el de santander, con tres estratos y una regla de cierre. */
const ERA_TRES = "Tres estratos que no se mezclan, y el objeto que decide es el alumbrado. "
  + "Colonial, siglos XVI a XVIII: armadura y arcabuz de entrada, plaza de doctrina con palenque, casona de tapia pisada. "
  + "Republicano del XIX, que es el grueso: empedrado y camino de herradura, recua aparejada, vela de sebo y candil, alpargata. "
  + "Siglo XX: lampara de petroleo, techo de zinc, radio, sombrero de fieltro, luz electrica y bus. "
  + "La crinolina de aros no existe antes de 1856 y no entra en la escena de 1828.";

const ficha = (design) => ({ description: "", design });

test("un era de un solo estrato no se toca", () => {
  const era = "Tiempo de los padres, antes del amanecer. Sin objeto industrial en cuadro.";
  const { strata } = splitEra(era);
  assert.equal(strata.length, 0);
  assert.equal(narrowEra(era, ficha({ silhouette: "cualquiera" })).text, era);
});

test("la ficha se queda con su estrato y pierde los otros dos", () => {
  const out = narrowEra(ERA_TRES, ficha({
    silhouette: "figura con arcabuz junto al palenque de la plaza de doctrina",
    materials: ["tapia pisada", "armadura"],
    continuity: ["casona colonial"],
    documented: [],
  }));
  assert.match(out.basis, /^Colonial/);
  assert.match(out.text, /arcabuz/);
  assert.doesNotMatch(out.text, /techo de zinc/);
  assert.doesNotMatch(out.text, /camino de herradura/);
});

test("el preambulo sobrevive porque es la regla que ordena los estratos", () => {
  const out = narrowEra(ERA_TRES, ficha({
    silhouette: "lampara de petroleo sobre techo de zinc", materials: ["radio"], continuity: [], documented: [],
  }));
  assert.match(out.basis, /^Siglo XX/);
  assert.match(out.text, /el objeto que decide es el alumbrado/);
});

test("una prohibicion absoluta viaja aunque su estrato se descarte", () => {
  // «La crinolina de aros no existe antes de 1856» cierra el ultimo estrato y
  // vale para toda la biblia: perderla al quedarse en el colonial seria
  // cambiar peso de prompt por un anacronismo.
  const out = narrowEra(ERA_TRES, ficha({
    silhouette: "figura con arcabuz junto al palenque", materials: ["adarga"], continuity: [], documented: [],
  }));
  assert.match(out.text, /crinolina de aros no existe/);
});

test("sin estrato dominante se conservan todos, y se dice", () => {
  const out = narrowEra(ERA_TRES, ficha({
    silhouette: "una nube", materials: [], continuity: [], documented: [],
  }));
  assert.match(out.basis, /sin estrato dominante/);
  assert.match(out.text, /techo de zinc/);
  assert.match(out.text, /arcabuz/);
});

test("un empate no estrecha: la desambiguacion tiene que ser clara", () => {
  // Reparte senales entre dos estratos a partes iguales. Recortar aqui seria
  // adivinar, y la defensa contra el anacronismo no se negocia por ahorrar.
  const out = narrowEra(ERA_TRES, ficha({
    silhouette: "arcabuz y candil", materials: ["armadura", "empedrado"], continuity: [], documented: [],
  }));
  assert.match(out.basis, /sin estrato dominante/);
});
