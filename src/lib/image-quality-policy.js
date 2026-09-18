/**
 * Contrato único de calidad para la producción visual de mitos.
 *
 * La calidad de la API no se deduce por orientación: sólo la entrada horizontal
 * del tríptico usa `high`. Una ficha horizontal de Biblia sigue siendo Biblia y
 * por tanto usa `medium`.
 */
export const IMAGE_QUALITY_POLICY = Object.freeze({
  bible: "medium",
  keyframe: "medium",
  other: "medium",
  triptych: Object.freeze({
    entrada: "high",
    acto: "medium",
    huella: "medium",
  }),
});

export function qualityForTriptychAct(act) {
  const quality = IMAGE_QUALITY_POLICY.triptych[act];
  if (!quality) throw new Error(`acto de tríptico desconocido: ${act}`);
  return quality;
}

export function qualityForVisualAsset({ family, role } = {}) {
  if (family === "triptych") return qualityForTriptychAct(role);
  if (family === "bible") return IMAGE_QUALITY_POLICY.bible;
  if (family === "keyframe") return IMAGE_QUALITY_POLICY.keyframe;
  return IMAGE_QUALITY_POLICY.other;
}
