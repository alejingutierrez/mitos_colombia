import { boyacaMestizoResidualSources } from "./sources.mjs";

export const boyacaMestizoResidualEvidenceMatrix = {
  "el-tesoro-de-buzaga": [
    {
      claim:
        "La narración consultable es la elaboración de Enrique Otero D’Costa publicada en Leyendas y reproducida por Villa Posse.",
      evidenceClass: "núcleo literario atribuido",
      sourceKeys: ["villaPosseBuzaga", "oteroCatalog", "historietasCatalog"],
    },
    {
      claim:
        "Las cinco filas 288–292 del Excel son fragmentos continuos y no dos versiones con moralejas incompatibles.",
      evidenceClass: "unificación editorial",
      sourceKeys: ["villaPosseBuzaga"],
    },
    {
      claim:
        "La circulación turística, escolar y estatal documenta recepción, no una tradición oral independiente de Otero.",
      evidenceClass: "recepción documentada",
      sourceKeys: ["tunjaTreasures", "uisPedagogy", "bibliotecaAldeana"],
    },
    {
      claim:
        "Lope, Laserna y Buzagá no se presentan como personas o santuario históricamente comprobados sin archivo independiente.",
      evidenceClass: "límite documental",
      sourceKeys: ["villaPosseBuzaga", "uisPedagogy"],
    },
    {
      claim:
        "La demonización del mohán se atribuye a la voz colonial y cristiana del texto, no a una definición neutral de especialistas indígenas.",
      evidenceClass: "corrección de encuadre",
      sourceKeys: ["villaPosseBuzaga"],
    },
    {
      claim:
        "San Cristóbal y El Dorado se comparan por carga creciente y tesoro evasivo sin proponer genealogía cultural.",
      evidenceClass: "comparación funcional",
      sourceKeys: ["saintChristopher", "elDoradoBanrep"],
    },
  ],
};

export function assertBoyacaMestizoResidualEvidenceMatrix() {
  const allowed = new Set([
    "núcleo literario atribuido",
    "unificación editorial",
    "recepción documentada",
    "límite documental",
    "corrección de encuadre",
    "comparación funcional",
  ]);
  for (const [slug, claims] of Object.entries(boyacaMestizoResidualEvidenceMatrix)) {
    if (claims.length < 4) throw new Error(`${slug}: faltan decisiones.`);
    for (const { claim, evidenceClass, sourceKeys } of claims) {
      if (!claim || !allowed.has(evidenceClass) || !sourceKeys.length) {
        throw new Error(`${slug}: evidencia incompleta.`);
      }
      for (const key of sourceKeys) {
        if (!boyacaMestizoResidualSources[key]) {
          throw new Error(`${slug}: fuente desconocida ${key}.`);
        }
      }
    }
  }
  return true;
}
