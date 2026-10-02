import {
  pacificoNarinoSourceKeysBySlug,
  pacificoNarinoSources,
} from "./sources.mjs";

export const pacificoNarinoEvidenceMatrix = {
  "chiles-y-cumbal": [
    {
      claim:
        "Embilpud y Embilquer forman un ciclo Pasto asociado con Chiles y Cumbal.",
      evidenceClass: "núcleo documentado",
      sourceKeys: ["boellEmbilpud", "lahoraEmbilpud", "tulcanEmbilpud"],
    },
    {
      claim:
        "Los dos volcanes son rasgos geológicos fronterizos distintos.",
      evidenceClass: "contexto territorial",
      sourceKeys: ["geologiaChilesCumbal", "sgcChiles", "sgcCumbal"],
    },
    {
      claim:
        "El origen por una alianza abstracta de agua y fuego no tiene respaldo en el expediente.",
      evidenceClass: "exclusión editorial",
      sourceKeys: ["boellEmbilpud", "lahoraEmbilpud"],
    },
  ],
  "el-diablo-chivo-de-rumichaca": [
    {
      claim:
        "Una versión local enfrenta a Dios y al Diablo en la construcción de dos puentes.",
      evidenceClass: "núcleo documentado",
      sourceKeys: ["lahoraRumichaca", "tengananRumichaca", "utnRumichaca"],
    },
    {
      claim:
        "El chivo aparece en otra circulación asociada con aguas termales, cuevas o recodos.",
      evidenceClass: "variante separada",
      sourceKeys: ["banrepRumichaca", "osejoRumichaca", "telegrafoRumichaca"],
    },
  ],
  "guagua-rayo": [
    {
      claim:
        "Juan Rayo o Guagua Rayo pertenece a memorias territoriales de Jenoy.",
      evidenceClass: "núcleo comunitario",
      sourceKeys: [
        "andeanGuagua",
        "corponarinoJuanambu",
        "udenarGuagua",
        "redalycJenoy",
      ],
    },
    {
      claim:
        "Pascuala Criollo atribuye una versión donde Juan y Telma capturan, adoptan y luego pierden al niño.",
      evidenceClass: "versión atribuida",
      sourceKeys: ["salvaguardaJenoy", "goconqrGuagua"],
    },
    {
      claim:
        "Otra memoria relaciona al niño nacido del rayo con trabajo forzado, territorio y Galeras.",
      evidenceClass: "versión separada",
      sourceKeys: ["udenarGuagua", "redalycJenoy", "andeanGuagua"],
    },
  ],
  "la-totuma-de-la-cocha": [
    {
      claim:
        "La versión popular narra el vínculo entre Pucara, Tamia y Munani y el derrame de un pilche.",
      evidenceClass: "versión divulgada",
      sourceKeys: [
        "secretariaCocha",
        "udenarEncantamiento",
        "artesaniasCocha",
      ],
    },
    {
      claim:
        "Las versiones directas del Refugio del Sol difieren y permanecen en la ficha Cualanquizan.",
      evidenceClass: "frontera de versión",
      sourceKeys: ["refugioQuillacinga", "udenarEncano"],
    },
    {
      claim:
        "La Cocha es un humedal real y La Corota es un santuario insular.",
      evidenceClass: "contexto territorial",
      sourceKeys: ["ramsarCocha", "parquesCorota"],
    },
  ],
  "la-sirena-del-arco": [
    {
      claim:
        "Una publicación institucional atribuye a gente de Tumaco una reina marina de cuerpo compuesto, máscara, canto y baile lunar.",
      evidenceClass: "núcleo documentado",
      sourceKeys: ["secretariaSirena", "ericSirena"],
    },
    {
      claim:
        "El relato circula en repertorios regionales y nacionales con grados distintos de ornamentación.",
      evidenceClass: "circulación mediada",
      sourceKeys: [
        "corponarinoSirena",
        "kienykeSirena",
        "semanaFolclor",
        "bibliotecaOcampo",
      ],
    },
    {
      claim:
        "Antonio, una explicación psicológica y una trama de asesinatos industriales carecen de respaldo en el expediente.",
      evidenceClass: "exclusión editorial",
      sourceKeys: ["secretariaSirena", "ericSirena"],
    },
  ],
  "taita-galeras": [
    {
      claim:
        "Jenoy mantiene una relación territorial con Taita Galeras, recordado como ser benévolo o irascible.",
      evidenceClass: "núcleo comunitario",
      sourceKeys: [
        "redalycJenoy",
        "andeanGuagua",
        "corponarinoJuanambu",
        "flacsoGaleras",
        "senadoJenoy",
      ],
    },
    {
      claim:
        "Una memoria local dice que la procesión de la Virgen del Rosario Chiquita calma a Taita Galeras cuando se enoja.",
      evidenceClass: "versión atribuida",
      sourceKeys: ["redalycJenoy", "udenarGuagua"],
    },
    {
      claim:
        "La geología de Galeras y los saberes territoriales de Jenoy son contextos distintos que no deben confundirse.",
      evidenceClass: "contexto con frontera",
      sourceKeys: ["esapJenoy", "ucrGaleras"],
    },
  ],
  "el-padre-mera": [
    {
      claim:
        "Manuel María Mera circula en memorias del Pacífico sur como sacerdote milagroso, santo o dios-diablo.",
      evidenceClass: "memoria ambivalente",
      sourceKeys: ["flacsoMera", "agierMera", "gonzalezMera"],
    },
    {
      claim:
        "Otras memorias lo recuerdan prohibiendo y destruyendo marimbas, cununos y bombos.",
      evidenceClass: "memoria de violencia cultural",
      sourceKeys: ["flacsoMera", "comisionMera", "rayaMarimba"],
    },
    {
      claim:
        "La música de marimba forma parte del patrimonio vivo del Pacífico sur.",
      evidenceClass: "contexto cultural",
      sourceKeys: ["unescoMarimba"],
    },
  ],
};

export function assertPacificoNarinoEvidenceMatrix() {
  for (const [slug, rows] of Object.entries(pacificoNarinoEvidenceMatrix)) {
    if (!rows.length) throw new Error(`${slug}: matriz vacía.`);
    const allowed = new Set(pacificoNarinoSourceKeysBySlug[slug]);
    for (const row of rows) {
      if (!row.claim || !row.evidenceClass || !row.sourceKeys.length) {
        throw new Error(`${slug}: fila de evidencia incompleta.`);
      }
      for (const key of row.sourceKeys) {
        if (!allowed.has(key) || !pacificoNarinoSources[key]) {
          throw new Error(`${slug}: evidencia fuera del expediente: ${key}.`);
        }
      }
    }
  }
  return true;
}
