import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";
import { validateNarrativePlan, buildStoryFirstPrompt, isStoryFirstProfile, STORY_MAGIC_PROFILE, STORY_SYMBOLIC_PROFILE } from "./triptych-story-direction.mjs";
import { buildNarrativeMagicLines, MAGIC_IN_THE_ORDINARY_LINES, PAPER_CHARACTER_LINES } from "../../src/lib/narrative-magic.js";
import { buildPrompt, buildVideoKeyframePrompt, buildVisualModelPromptV2, TECNICA, ACTOS } from "./art-direction.mjs";

const root = resolve(import.meta.dirname, "../..");
const plan = JSON.parse(readFileSync(resolve(root, "content/mitos-visuales/wayuu.tripticos.v1.2.json"), "utf8"));
const myth = plan.mitos.aramai;
const snapshot = JSON.parse(readFileSync(resolve(root, myth.narrative_contract.target_snapshot), "utf8"));

test("se prepara contra el relato de la página y una instantánea íntegra", () => {
  assert.doesNotThrow(() => validateNarrativePlan(plan, myth, snapshot));
  const changed = { ...snapshot, content: snapshot.content + " Texto posterior." };
  assert.throws(() => validateNarrativePlan(plan, myth, changed), /relato objetivo cambió/);
});

test("no se puede eliminar el desenlace humano para cumplir una fórmula de paisaje vacío", () => {
  const changed = structuredClone(myth);
  changed.escenas.huella.narrative_event_ids = ["recorrido"];
  assert.throws(() => validateNarrativePlan(plan, changed, snapshot), /acción narrativa omitida: reproche/);
});

test("un evento nuevo debe tener procedencia y no puede entrar como tradición anónima", () => {
  const changed = structuredClone(myth);
  changed.escenas.acto.narrative_event_ids.push("la_tierra_se_dobla");
  assert.throws(() => validateNarrativePlan(plan, changed, snapshot), /evento sin procedencia/);
});

test("no se etiqueta 2:3 como 9:16 al preparar una pieza nueva", () => {
  const changed = structuredClone(plan);
  changed.output_sizes.acto = "1024x1536";
  assert.throws(() => validateNarrativePlan(changed, myth, snapshot), /tamaño incompatible/);
});

const current = JSON.parse(readFileSync(resolve(root, "content/mitos-visuales/wayuu.tripticos.v1.5.json"), "utf8"));
const currentMyth = current.mitos.aramai;

test("el perfil nuevo valida un tríptico completo y conserva el perfil histórico", () => {
  assert.equal(current.prompt_profile, STORY_MAGIC_PROFILE);
  assert.ok(isStoryFirstProfile("story_first_v1"));
  assert.ok(isStoryFirstProfile(STORY_MAGIC_PROFILE));
  assert.equal(isStoryFirstProfile("desconocido"), false);
  assert.deepEqual(Object.keys(currentMyth.escenas), ["entrada", "acto", "huella"]);
  assert.doesNotThrow(() => validateNarrativePlan(current, currentMyth, snapshot));
  assert.deepEqual(current.quality_policy, { entrada: "high", acto: "medium", huella: "medium" });
});

test("decir mágico no sustituye un ancla, una acción o una prueba visible", () => {
  for (const field of ["ordinary_anchor", "impossible_behavior", "narrative_effect", "physical_translation", "visible_test", "agency"]) {
    const changed = structuredClone(currentMyth);
    changed.escenas.acto.magic_in_the_ordinary[field] = " ";
    assert.throws(() => validateNarrativePlan(current, changed, snapshot), new RegExp(field));
  }
});

test("la magia tiene procedencia, función temporal y una acción de su propia escena", () => {
  const changed = structuredClone(currentMyth);
  changed.escenas.entrada.magic_in_the_ordinary.event_ids = ["cuidado"];
  assert.throws(() => validateNarrativePlan(current, changed, snapshot), /magia desligada/);
  for (const [field, value, message] of [
    ["provenance", "tradicion_asumida", /procedencia/],
    ["temporal_role", "indistinta", /función temporal/],
    ["event_ids", [], /faltan acciones/],
  ]) {
    const contract = { ...currentMyth.escenas.entrada.magic_in_the_ordinary, [field]: value };
    assert.throws(() => buildNarrativeMagicLines(contract), message);
  }
  assert.equal(currentMyth.escenas.huella.magic_in_the_ordinary.temporal_role, "memory");
});

test("el prompt nuevo usa sólo el vehículo mágico de su escena", () => {
  const prompt = buildStoryFirstPrompt({ myth: currentMyth, act: "entrada" });
  assert.match(prompt, /ANCLA COTIDIANA:/);
  assert.match(prompt, /COMPORTAMIENTO IMPOSIBLE:/);
  assert.match(prompt, /EL INTERIOR ESTÁ COMPLETAMENTE DESHABITADO/);
  assert.doesNotMatch(prompt, /El jagüey escaso, el cuenco compartido/);
  assert.doesNotMatch(buildStoryFirstPrompt({ myth, act: "entrada" }), /ANCLA COTIDIANA:/);
});

test("la regla general no copia los vehículos de Arámai a otros mitos", () => {
  assert.doesNotMatch(MAGIC_IN_THE_ORDINARY_LINES.join(" "), /Arámai|Wayúu|jagüey|enramada/);
  assert.match(PAPER_CHARACTER_LINES.join(" "), /recortes casi planos/);
  assert.doesNotMatch(TECNICA, /cinco y nueve|pómulos, cejas/);
  assert.doesNotMatch(ACTOS.entrada.lines.join(" "), /figura manda|ÚNICA luz/);
  assert.doesNotMatch(ACTOS.huella.lines.join(" "), /Normalmente sin personas/);
});

test("tríptico y keyframe reciben la misma regla concreta sin apilar la dirección antigua", () => {
  const args = { comunidad: "Wayúu", region: "Caribe", acto: "entrada", composicion: "figura_pequena", escena: "Escena de prueba.", paleta: "arena", eraOverride: "mitico_wayuu", narrativeMagic: currentMyth.escenas.entrada.magic_in_the_ordinary, mythicImagination: { dominant_impossible_image: "PRESCRIPCION_ANTIGUA_NO_APILAR" } };
  for (const prompt of [buildPrompt(args), buildVideoKeyframePrompt(args)]) {
    assert.match(prompt, /ANCLA COTIDIANA: La enramada doméstica/);
    assert.doesNotMatch(prompt, /PRESCRIPCION_ANTIGUA_NO_APILAR/);
  }
});

test("una ficha de ancla sin prodigio no recibe la magia de una escena", () => {
  const prompt = buildVisualModelPromptV2({ comunidad: "Wayúu", region: "Caribe", modeloId: "prueba", modelo: {kind:"objeto",layer:"ancla",description:"cuenco"}, vista:{id:"frente",state:"ordinario",aspect:"1:1",magic_intensity:"absent",purpose:"identidad",description:"cuenco",magic_in_the_ordinary:currentMyth.escenas.huella.magic_in_the_ordinary}, mythicGrammar:{ordinary_world:"patio",limit_or_cost:"escasez"}, paleta:"arena",eraOverride:"mitico_wayuu" });
  assert.match(prompt, /SIN REPRESENTAR EL PRODIGIO/);
  assert.doesNotMatch(prompt, /ANCLA COTIDIANA:|COMPORTAMIENTO IMPOSIBLE:/);
});

const symbolic = JSON.parse(readFileSync(resolve(root, "content/mitos-visuales/wayuu.tripticos.v1.6.json"), "utf8"));
const symbolicMyth = symbolic.mitos.aramai;

test("V3 exige escenas narrativas y una huella simbólica con el mismo relato trazable", () => {
  assert.equal(symbolic.prompt_profile, STORY_SYMBOLIC_PROFILE);
  assert.ok(isStoryFirstProfile(STORY_SYMBOLIC_PROFILE));
  assert.doesNotThrow(() => validateNarrativePlan(symbolic, symbolicMyth, snapshot));
  for (const act of ["entrada", "acto", "huella"]) {
    const changed = structuredClone(symbolicMyth);
    changed.escenas[act].visual_function = "sin_funcion";
    assert.throws(() => validateNarrativePlan(symbolic, changed, snapshot), /función editorial/);
  }
});

test("el símbolo necesita tesis, motivo, operación, vínculo y prueba, no sólo menos personajes", () => {
  for (const field of ["thesis", "carrier", "operation", "story_connection", "visible_test"]) {
    const changed = structuredClone(symbolicMyth);
    changed.escenas.huella.symbolic_contract[field] = " ";
    assert.throws(() => validateNarrativePlan(symbolic, changed, snapshot), new RegExp(field));
  }
});

test("la huella no hereda reparto, vestuario ni acciones de los otros planos", () => {
  const prompt = buildStoryFirstPrompt({ myth: symbolicMyth, act: "huella" });
  assert.match(prompt, /SÍNTESIS SIMBÓLICA/);
  assert.match(prompt, /TESIS SIMBÓLICA: La ausencia/);
  assert.doesNotMatch(prompt, /Kemiisa|Wayuushein|VIERTE AGUA|Relato objetivo:|Momento y emoción:|Escena:/);
  assert.match(prompt, /no representar otra escena/);
  assert.match(prompt, /metáfora editorial/);
});

test("el símbolo exige continuidad propia y no altera los prompts de entrada y acto", () => {
  for (const field of ["material_direction", "continuity_contract"]) {
    const changed = structuredClone(symbolicMyth);
    delete changed.escenas.huella[field];
    assert.throws(() => validateNarrativePlan(symbolic, changed, snapshot), /materialidad y continuidad/);
  }
  for (const act of ["entrada", "acto"]) {
    assert.equal(buildStoryFirstPrompt({ myth: symbolicMyth, act }), buildStoryFirstPrompt({ myth: currentMyth, act }));
  }
});

test("el compositor general de trípticos conserva la función simbólica, sin exportarla a keyframes", () => {
  const args = { comunidad: "Wayúu", region: "Caribe", acto: "huella", composicion: "cenital", escena: "Un motivo de prueba.", paleta: "arena", eraOverride: "mitico_wayuu" };
  assert.match(buildPrompt(args), /HUELLA 1:1 — SÍNTESIS SIMBÓLICA/);
  assert.doesNotMatch(buildVideoKeyframePrompt(args), /HUELLA 1:1 — SÍNTESIS SIMBÓLICA/);
});

test("una escena puede aislar resumen y continuidad sin importar el reparto del resto", () => {
  const own = structuredClone(currentMyth);
  own.narrative_contract.summary = "OTRO_EPISODIO_CON_AVES";
  own.continuity_contract = ["VESTUARIO_DE_OTRO_REPARTO"];
  own.escenas.acto.narrative_summary = "Sólo tierra seca y piedras enterradas.";
  own.escenas.acto.continuity_contract = ["Seis piedras coral bajo raíces."];
  const prompt = buildStoryFirstPrompt({ myth: own, act: "acto" });
  assert.match(prompt, /Sólo tierra seca y piedras enterradas/);
  assert.match(prompt, /Seis piedras coral bajo raíces/);
  assert.doesNotMatch(prompt, /OTRO_EPISODIO_CON_AVES|VESTUARIO_DE_OTRO_REPARTO/);
  assert.match(buildStoryFirstPrompt({ myth: own, act: "entrada" }), /OTRO_EPISODIO_CON_AVES/);
  assert.equal(own.narrative_contract.summary, "OTRO_EPISODIO_CON_AVES");
});

test("resumen o continuidad propios no admiten valores vacíos", () => {
  for (const [field, value, error] of [["narrative_summary", " ", /resumen narrativo/], ["continuity_contract", [], /continuidad propia/], ["continuity_contract", [" "], /continuidad propia/]]) {
    const own = structuredClone(currentMyth);
    own.escenas.acto[field] = value;
    assert.throws(() => validateNarrativePlan(current, own, snapshot), error);
  }
});
