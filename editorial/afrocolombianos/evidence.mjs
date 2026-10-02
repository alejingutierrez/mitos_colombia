import {
  afroSourceKeysBySlug,
  afrocolombianSources,
} from "./sources.mjs";

export const afrocolombianEvidenceMatrix = {
  anansi: [
    {
      claim:
        "Don Pío Perea contó que Ananse era sacristán, comía hostias, fue condenado y subió al campanario.",
      evidenceClass: "núcleo documentado",
      sourceKeys: ["arochaAnanse"],
    },
    {
      claim:
        "La voz de Ananse desde lo alto fue interpretada como voz celestial y la condena quedó suspendida bajo condición.",
      evidenceClass: "variante identificada",
      sourceKeys: ["arochaAnanse"],
    },
    {
      claim:
        "Ananse mantiene continuidades afroatlánticas, pero el episodio chocoano no se completa con cuentos ashanti o jamaiquinos.",
      evidenceClass: "lectura editorial",
      sourceKeys: [
        "bejaranoAnanse",
        "smithsonianAnansiJourney",
        "smithsonianAshanti",
      ],
    },
  ],
  "tulavieja-tunda": [
    {
      claim:
        "Una versión de Tumaco cuenta que Nelsi siguió a una figura que tenía el rostro de su madre.",
      evidenceClass: "núcleo documentado",
      sourceKeys: ["valenciaTunda"],
    },
    {
      claim:
        "Las compañeras vieron a la madre real en la casa y dieron aviso; Nelsi fue encontrada asustada y confundida.",
      evidenceClass: "variante identificada",
      sourceKeys: ["valenciaTunda"],
    },
    {
      claim:
        "La Tunda circula en múltiples versiones del Pacífico y no tiene una apariencia ni una función única.",
      evidenceClass: "memoria contemporánea",
      sourceKeys: [
        "valenciaTunda",
        "minCulturaTunda",
        "banrepPacificOral",
      ],
    },
  ],
  "kijimba-de-las-animas": [
    {
      claim:
        "Rosalba Cossio García narró que Kijimba amaba los bailes y salió hacia una tambora que parecía acercarse.",
      evidenceClass: "núcleo documentado",
      sourceKeys: ["kijimbaBook"],
    },
    {
      claim:
        "En la casa había personas vestidas de blanco; le ofrecieron hiel, la obligaron a beber y murió al día siguiente.",
      evidenceClass: "variante identificada",
      sourceKeys: ["kijimbaBook"],
    },
    {
      claim:
        "La relación entre muerte, música y comunidad puede contextualizarse sin añadir alabaos, gualíes o San Pacho a la trama.",
      evidenceClass: "lectura editorial",
      sourceKeys: [
        "unadAlabaos",
        "unicaucaDeath",
        "minCulturaViche",
      ],
    },
  ],
  "la-sierpe-de-bete": [
    {
      claim:
        "Una guía pública del Chocó describe una sierpe de tres cabezas que aparece durante fiestas patronales.",
      evidenceClass: "núcleo documentado",
      sourceKeys: ["chocoTourismSierpe"],
    },
    {
      claim:
        "La aparición atemoriza a pescadores; la fuente no documenta voces, cantos, fiebre, castigo ni curación.",
      evidenceClass: "duda",
      sourceKeys: ["chocoTourismSierpe"],
    },
    {
      claim:
        "Beté y el Medio Atrato se representan mediante río, pesca y vida municipal, sin trasladar festividades de Quibdó.",
      evidenceClass: "lectura editorial",
      sourceKeys: [
        "medioAtratoRisk",
        "unidadVictimasAtrato",
        "minCulturaCuasimodo",
      ],
    },
  ],
  "el-riviel-del-rosario": [
    {
      claim:
        "Una memoria comunitaria de Buenaventura recuerda al Riviel y la mochita que se meten en canoas y desorientan.",
      evidenceClass: "memoria contemporánea",
      sourceKeys: ["cnhmBuenaventura"],
    },
    {
      claim:
        "Cuando las personas despiertan y reconocen la confusión, la presencia vuelve al agua.",
      evidenceClass: "núcleo documentado",
      sourceKeys: ["cnhmBuenaventura"],
    },
    {
      claim:
        "El rosario, un pescador castigado y un desenlace religioso de la ficha heredada carecen de respaldo en el dossier.",
      evidenceClass: "duda",
      sourceKeys: [
        "cnhmBuenaventura",
        "opcaRiviel",
        "uasbRiviel",
      ],
    },
  ],
  "como-aparecio-la-muerte-en-el-choco": [
    {
      claim:
        "La versión de Tutunendo contrapone una piedra negra y dura con un gajo de plátanos dominicos para explicar la mortalidad.",
      evidenceClass: "variante identificada",
      sourceKeys: ["velasquezDeath"],
    },
    {
      claim:
        "La versión de Munguidó presenta al tigre demorado y a la culebra que entrega primero el mensaje contrario a la resurrección.",
      evidenceClass: "variante identificada",
      sourceKeys: ["velasquezDeath"],
    },
    {
      claim:
        "Los dos cuentos comparten una pregunta, pero pertenecen a lugares y secuencias incompatibles que deben mantenerse separadas.",
      evidenceClass: "lectura editorial",
      sourceKeys: [
        "velasquezDeath",
        "rogerioProfile",
        "vaninPacific",
      ],
    },
  ],
};

const allowedClasses = new Set([
  "núcleo documentado",
  "variante identificada",
  "memoria contemporánea",
  "hipótesis académica",
  "lectura editorial",
  "duda",
]);

export function assertAfrocolombianEvidenceMatrix() {
  if (
    new Set(Object.keys(afrocolombianEvidenceMatrix)).size !==
    Object.keys(afroSourceKeysBySlug).length
  ) {
    throw new Error("La matriz Afrocolombiana no cubre todo el dossier.");
  }
  for (const [slug, claims] of Object.entries(
    afrocolombianEvidenceMatrix,
  )) {
    if (claims.length < 3) {
      throw new Error(`${slug}: se requieren tres decisiones de evidencia.`);
    }
    for (const { claim, evidenceClass, sourceKeys } of claims) {
      if (
        !claim ||
        !allowedClasses.has(evidenceClass) ||
        !sourceKeys.length ||
        new Set(sourceKeys).size !== sourceKeys.length
      ) {
        throw new Error(`${slug}: entrada de evidencia incompleta.`);
      }
      for (const key of sourceKeys) {
        if (!afrocolombianSources[key]) {
          throw new Error(`${slug}: fuente desconocida ${key}.`);
        }
      }
    }
  }
  return true;
}
