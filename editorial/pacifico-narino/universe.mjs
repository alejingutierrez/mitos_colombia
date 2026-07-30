export const inheritedPacificoNarinoSlugs = [
  "chiles-y-cumbal",
  "el-diablo-chivo-de-rumichaca",
  "el-riviel-del-rosario",
  "guagua-rayo",
  "la-totuma-de-la-cocha",
  "la-sirena-del-arco",
  "taita-galeras",
].sort();

export const importedFromPacificoMestizoSlugs = [
  "el-padre-mera",
].sort();

export const preservedExternalTransferSlugs = [
  "el-riviel-del-rosario",
].sort();

export const canonicalPacificoMixtoNarinoSlugs = [
  "chiles-y-cumbal",
  "el-diablo-chivo-de-rumichaca",
  "la-sirena-del-arco",
].sort();

export const transferredToAfrocolombianosSlugs = [
  "el-padre-mera",
].sort();

export const transferredToQuillacingasSlugs = [
  "guagua-rayo",
  "la-totuma-de-la-cocha",
  "taita-galeras",
].sort();

export const reviewedPacificoNarinoSlugs = [
  ...canonicalPacificoMixtoNarinoSlugs,
  ...transferredToAfrocolombianosSlugs,
  ...transferredToQuillacingasSlugs,
].sort();

export const pacificoNarinoCategoryBySlug = {
  "el-padre-mera": "Pacífico > Cauca > Afrocolombianos",
  "chiles-y-cumbal": "Pacífico > Nariño > Mixto",
  "el-diablo-chivo-de-rumichaca": "Pacífico > Nariño > Mixto",
  "guagua-rayo": "Pacífico > Nariño > Quillacingas",
  "la-totuma-de-la-cocha": "Pacífico > Nariño > Quillacingas",
  "la-sirena-del-arco": "Pacífico > Nariño > Mixto",
  "taita-galeras": "Pacífico > Nariño > Quillacingas",
};

export const pacificoNarinoTargetTaxonomyBySlug = {
  "el-padre-mera": {
    regionSlug: "pacifico",
    communitySlug: "afrocolombianos",
  },
  "chiles-y-cumbal": {
    regionSlug: "pacifico",
    communitySlug: "mixto",
  },
  "el-diablo-chivo-de-rumichaca": {
    regionSlug: "pacifico",
    communitySlug: "mixto",
  },
  "guagua-rayo": {
    regionSlug: "pacifico",
    communitySlug: "quillacingas",
  },
  "la-totuma-de-la-cocha": {
    regionSlug: "pacifico",
    communitySlug: "quillacingas",
  },
  "la-sirena-del-arco": {
    regionSlug: "pacifico",
    communitySlug: "mixto",
  },
  "taita-galeras": {
    regionSlug: "pacifico",
    communitySlug: "quillacingas",
  },
};

export const pacificoNarinoEditorialDecisions = {
  "el-padre-mera": {
    action: "transfer-to-afrocolombianos-and-balance-memory",
    reason:
      "Los testimonios de Guapi y del Pacífico sur recuerdan simultáneamente al sacerdote milagroso y al perseguidor de marimbas; ninguna de las dos memorias debe borrar la otra.",
  },
  "chiles-y-cumbal": {
    action: "replace-original-fusion-with-embilpud-cycle",
    reason:
      "La creación heredada de agua y fuego no tiene expediente. Se conserva la URL para el ciclo Pasto de Embilpud y Embilquer, vinculado con Chiles y Cumbal.",
  },
  "el-diablo-chivo-de-rumichaca": {
    action: "restore-bridge-contest-and-goat-variant",
    reason:
      "Se elimina la expansión de pacto, contrabando y sombra. La ficha separa la competencia entre Dios y el Diablo de la aparición del chivo en las aguas termales.",
  },
  "guagua-rayo": {
    action: "transfer-to-quillacingas-and-separate-jenoy-versions",
    reason:
      "Las fuentes sitúan a Juan Rayo o Guagua Rayo en Jenoy. La adopción por Juan y Telma y la memoria del niño surgido del rayo se conservan como versiones atribuidas.",
  },
  "la-totuma-de-la-cocha": {
    action: "transfer-to-quillacingas-and-preserve-popular-version",
    reason:
      "Pucara, Tamia y Munani forman una versión popular claramente diferenciada de las dos versiones directas del Refugio del Sol ya reunidas en Cualanquizan.",
  },
  "la-sirena-del-arco": {
    action: "restore-documented-tumaco-core",
    reason:
      "Se restituye la reina marina de cuerpo compuesto, máscara, canto y baile lunar; se retiran personajes modernos y una trama ambiental no documentada.",
  },
  "taita-galeras": {
    action: "transfer-to-quillacingas-and-restore-jenoy-relationship",
    reason:
      "La ficha deja de presentar cuatro ojos de agua inventados y conserva la relación de Jenoy con Taita Galeras y la Virgen del Rosario Chiquita.",
  },
  media: {
    action: "generate-fourteen-new-openai-images-with-provenance",
    reason:
      "Las siete rutas necesitan portada horizontal y escena vertical propias, generadas con gpt-image-2 en estilo digital plano paper cut y con trazabilidad durable.",
  },
};

export function assertPacificoNarinoUniverse() {
  if (inheritedPacificoNarinoSlugs.length !== 7) {
    throw new Error("El universo heredado debe tener siete rutas.");
  }
  if (canonicalPacificoMixtoNarinoSlugs.length !== 3) {
    throw new Error("El remanente Pacífico Mixto debe tener tres rutas.");
  }
  if (reviewedPacificoNarinoSlugs.length !== 7) {
    throw new Error("La revisión debe conservar las siete URL.");
  }
  if (
    new Set(reviewedPacificoNarinoSlugs).size !==
    reviewedPacificoNarinoSlugs.length
  ) {
    throw new Error("El frente Pacífico Nariño contiene slugs duplicados.");
  }
  return {
    inheritedMixto: 7,
    importedFromMestizo: 1,
    preservedForAfroTransfer: 1,
    canonicalMixto: 3,
    transferredToAfrocolombianos: 1,
    transferredToQuillacingas: 3,
    reviewedRoutes: 7,
    unpublished: 0,
  };
}
