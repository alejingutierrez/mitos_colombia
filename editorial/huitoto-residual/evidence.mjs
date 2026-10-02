import { huitotoResidualSources } from "./sources.mjs";

export const huitotoResidualEvidenceMatrix = {
  taife: [
    {
      claim:
        "Preuss publica una anciana llamada janai o taife, su bastón comestible, el cesto, la cueva y el humo de ají.",
      evidenceClass: "núcleo documentado",
      sourceKeys: ["preussOne"],
    },
    {
      claim:
        "Tagliani registra otro Taife que no logra salir del hueco de origen; es una variante distinta, no la misma escena.",
      evidenceClass: "variante identificada",
      sourceKeys: ["tagliani", "yucaPaper"],
    },
    {
      claim:
        "La identificación de la vieja como figura lunar pertenece al análisis de Preuss y no se adopta como significado definitivo.",
      evidenceClass: "hipótesis académica",
      sourceKeys: ["preussOne"],
    },
  ],
  taik: [
    {
      claim:
        "Joyareño y Rikoño son hijas de Buynaiyarai y su extravío forma parte del capítulo Kugï y Nokuerai.",
      evidenceClass: "núcleo documentado",
      sourceKeys: ["urbinaBook"],
    },
    {
      claim:
        "Rikoño sobrevive al jaguar, regresa y se transforma en lora; Taik nombra esa ventana, no un ciclo independiente.",
      evidenceClass: "corrección de identidad y título",
      sourceKeys: ["urbinaBook", "cervantesUrbina"],
    },
    {
      claim:
        "La página conserva la URL heredada para acceso y declara su relación con kugi-y-nokuerai sin duplicar una certeza.",
      evidenceClass: "lectura editorial",
      sourceKeys: ["urbinaBook", "mythEthics"],
    },
  ],
  nonuetoma: [
    {
      claim:
        "Nonuetoma supera pruebas al transformarse en tigre, araña, colibrí y camaleón, y de la primera lucha nacen picalones.",
      evidenceClass: "núcleo documentado",
      sourceKeys: ["tagliani"],
    },
    {
      claim:
        "La versión reproducida termina con la muerte de Nonuetoma y la transformación de sus hijos en jaguares vengadores.",
      evidenceClass: "núcleo documentado",
      sourceKeys: ["tagliani"],
    },
    {
      claim:
        "Tagliani remite a Amazonía Peruana 7 de 1976, pero la reproducción consultable no identifica al relator original.",
      evidenceClass: "duda",
      sourceKeys: ["tagliani", "taglianiReview"],
    },
  ],
  "el-diluvio-guinadoma": [
    {
      claim:
        "Los hermanos Soto Flórez narran el refugio de Anequi, los animales juntos, Fusiñamuy y el descenso de las aguas.",
      evidenceClass: "núcleo documentado",
      sourceKeys: ["guinadomaTranscript", "contratiempo"],
    },
    {
      claim:
        "Guinadoma prepara un recinto sellado, queda bajo el lodo y su tambor no permite localizarlo para rescatarlo.",
      evidenceClass: "núcleo documentado",
      sourceKeys: ["guinadomaTranscript"],
    },
    {
      claim:
        "La coordenada no identifica el cerro Anequi porque las fuentes consultables no ofrecen una localización verificable.",
      evidenceClass: "duda",
      sourceKeys: ["guinadomaTranscript", "margeryFlood"],
    },
  ],
};

const allowedClasses = new Set([
  "núcleo documentado",
  "variante identificada",
  "memoria contemporánea",
  "hipótesis académica",
  "lectura editorial",
  "corrección de identidad y título",
  "duda",
]);

export function assertHuitotoResidualEvidenceMatrix() {
  for (const [slug, claims] of Object.entries(
    huitotoResidualEvidenceMatrix,
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
        if (!huitotoResidualSources[key]) {
          throw new Error(`${slug}: fuente desconocida ${key}.`);
        }
      }
    }
  }
  return true;
}
