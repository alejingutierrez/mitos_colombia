import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";
import { resolve } from "node:path";

import { qualityForTriptychAct } from "../../src/lib/image-quality-policy.js";

const root = resolve(import.meta.dirname, "../..");
const plan = JSON.parse(readFileSync(resolve(root, "content/mitos-visuales/wayuu.tripticos.v1.json"), "utf8"));
const selection = JSON.parse(readFileSync(resolve(root, plan.bible_selection), "utf8"));
const myth = plan.mitos.aramai;

test("el lote Wayúu V1 queda bloqueado en un solo piloto", () => {
  assert.equal(plan.status, "pilot_waiting_editorial_approval");
  assert.deepEqual(Object.keys(plan.mitos), ["aramai"]);
  assert.equal(myth.pilot, true);
  assert.match(plan.approval_gate, /no se produce otro tríptico Wayúu/i);
});

test("el piloto respeta high/medium/medium y no usa imágenes locales", () => {
  assert.deepEqual(plan.quality_policy, {
    entrada: qualityForTriptychAct("entrada"),
    acto: qualityForTriptychAct("acto"),
    huella: qualityForTriptychAct("huella"),
  });
  for (const act of ["entrada", "acto", "huella"]) {
    assert.deepEqual(myth.escenas[act].refs, []);
    assert.equal(myth.escenas[act].era, "mitico_wayuu");
  }
});

test("todos los modelos canónicos declarados están seleccionados y presentes", () => {
  const selected = new Map(selection.selected.map((item) => [item.model_id, item]));
  for (const modelId of myth.canon_models) {
    const item = selected.get(modelId);
    assert.ok(item, `falta selección canónica: ${modelId}`);
    assert.ok(existsSync(resolve(root, item.path)), `falta archivo canónico: ${item.path}`);
  }
});

test("el relato no hereda arrepentimiento o cuidado que la fuente primaria no narra", () => {
  const scenes = Object.values(myth.escenas).map((scene) => scene.escena).join("\n");
  assert.doesNotMatch(scenes, /arrepent|cuidador|ayuda a sobrevivientes/i);
  assert.match(myth.source_conflicts.join(" "), /no narra arrepentimiento ni cuidado/i);
});

test("las tres funciones narrativas y la magia situada quedan explícitas", () => {
  assert.match(myth.escenas.entrada.escena, /antes de la petición/i);
  assert.match(myth.escenas.acto.escena, /Wanurü/i);
  assert.match(myth.escenas.acto.escena, /exactamente una persona humana total/i);
  assert.match(myth.escenas.acto.escena, /nunca monolito/i);
  assert.match(myth.escenas.huella.escena, /sin personas/i);
  assert.match(myth.magic_signature.genericity_test, /epidemia genérica/i);
  assert.equal(myth.magic_signature.distinctive_elements.length, 4);
});

test("el proceso V1.1 exige una imagen imposible dominante y pruebas de asombro", () => {
  assert.match(myth.mythic_imagination.dominant_impossible_image, /tierra.*levanta/i);
  assert.match(myth.mythic_imagination.scale_contract, /mitad del cuadro/i);
  assert.match(myth.mythic_imagination.wonder_test, /documental de sequía/i);
  assert.match(myth.mythic_imagination.memory_test, /tierra entera se dobló/i);
  assert.deepEqual(Object.keys(myth.mythic_imagination.motif_arc), ["entrada", "acto", "huella"]);
  assert.match(myth.escenas.entrada.escena, /horizonte.*se curva/i);
  assert.match(myth.escenas.huella.escena, /sombra enorme/i);
  assert.match(myth.escenas.huella.escena, /más de la mitad del cuadro/i);
});

test("los personajes deben ser construcciones de papel cortado, no ilustraciones texturizadas", () => {
  assert.match(myth.character_art_treatment.construction, /piezas separadas de papel/i);
  assert.match(myth.character_art_treatment.reject_if, /ilustración digital con filtro de papel/i);
  assert.match(myth.escenas.acto.escena, /inequívocamente una .*física de papel cortado/i);
  assert.match(myth.escenas.acto.escena, /nada de piel fotográfica/i);
  assert.match(myth.escenas.entrada.escena, /marionetas editoriales físicas de papel cortado/i);
});
