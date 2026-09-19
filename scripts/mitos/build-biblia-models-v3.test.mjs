import assert from "node:assert/strict";
import test from "node:test";

import { tecnicaSeContradice } from "./build-biblia-models-v3.mjs";

const MAQUETA = "Papel recortado y quilling fotografiados como una maqueta tridimensional inmersiva, con sombra fisica entre capas.";

test("la tecnica del sitio dentro de la biblia se detecta como contradiccion", () => {
  // Son dos productos: las imagenes de las paginas de mito son papel recortado
  // 2D; la biblia, los tripticos y los keyframes son maqueta 3D fotografiada.
  // Esta cadena exacta aparecia identica en siete corpus.
  assert.equal(tecnicaSeContradice(MAQUETA,
    "Ilustracion editorial 2D full paper cut y paper quilling de acabado grafico plano."), true);
});

test("«nunca ilustracion plana» pide la maqueta y no la contradice", () => {
  // Falso positivo que costo tres corpus en la primera pasada: el termino 2D
  // estaba dentro de una prohibicion, que es exactamente lo contrario.
  assert.equal(tecnicaSeContradice(MAQUETA,
    "Maqueta artesanal de paper craft fotografiada, con aire entre capas; nunca ilustracion plana, collage pegado ni render."), false);
});

test("un style_medium que solo describe el papel no contradice nada", () => {
  assert.equal(tecnicaSeContradice(MAQUETA,
    "Papel de fibra mate, grueso y sin brillo, en gramajes distintos segun la capa; capas escalonadas en profundidad."), false);
});
