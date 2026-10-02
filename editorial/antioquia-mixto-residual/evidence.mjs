import { antioquiaMixtoResidualSources } from "./sources.mjs";

export const antioquiaMixtoResidualEvidenceMatrix = {
  "el-patetarro": [
    {
      claim:
        "Carrasquilla documenta en 1926 al gigantón con una pierna de carne, tarro de guadua, líquidos que dañan sementeras y miedo a calaveras de vaca.",
      evidenceClass: "núcleo literario temprano",
      sourceKeys: ["carrasquillaMarquesa"],
    },
    {
      claim:
        "La ficha institucional conserva la asociación minera, los presagios, las plagas y una explicación independiente basada en un ladrón de gallinas.",
      evidenceClass: "variante regional identificada",
      sourceKeys: ["bogotaPatetarro"],
    },
    {
      claim:
        "La lectura del Tótem de Pedro Nel Gómez presenta una Patetarro femenina y vengadora ligada con un asesinato arrojado al río.",
      evidenceClass: "variante artística e interpretativa",
      sourceKeys: ["unalTotem"],
    },
    {
      claim:
        "Ernesto, Amalia y la finca heredada pertenecen a la recreación de horror publicada en 2004, no a un informe clínico verificable.",
      evidenceClass: "adaptación literaria moderna",
      sourceKeys: ["espantosArchive"],
    },
    {
      claim:
        "La biografía del peleador mujeriego y la caracterización como deidad ecológica no se incorporan al núcleo por falta de respaldo equivalente en las fuentes seleccionadas.",
      evidenceClass: "descarte editorial",
      sourceKeys: ["carrasquillaMarquesa", "colaRata"],
    },
  ],
  "el-mareco": [
    {
      claim:
        "Ocampo registra al Mareco como diablillo infantil que roba dulces y puede volverse ventarrón contra niños desobedientes.",
      evidenceClass: "núcleo documentado",
      sourceKeys: ["ocampoGrande", "marecoOcampoQuote"],
    },
    {
      claim:
        "Manuel, el dinero para globos, el duende rojo semejante a lagartija y la profesora pertenecen a la recreación editorial de 2004.",
      evidenceClass: "adaptación literaria moderna",
      sourceKeys: ["espantosArchive", "openLibraryEspantos"],
    },
    {
      claim:
        "Una tesis escolar reciente trata Mareco como leyenda y demuestra recepción pedagógica, no origen ni testimonio oral independiente.",
      evidenceClass: "recepción pedagógica",
      sourceKeys: ["unabMareco"],
    },
    {
      claim:
        "El color rojo, la forma de lagartija y los rincones oscuros circulan en versiones web recientes y no se presentan como rasgos universales.",
      evidenceClass: "variante digital reciente",
      sourceKeys: ["rinconMareco", "espantosArchive"],
    },
    {
      claim:
        "El agua bendita y los dulces bendecidos no aparecen en las fuentes consultadas y se eliminan como protecciones no verificadas.",
      evidenceClass: "descarte editorial",
      sourceKeys: ["ocampoGrande", "espantosArchive"],
    },
  ],
};

const allowedClasses = new Set([
  "núcleo literario temprano",
  "núcleo documentado",
  "variante regional identificada",
  "variante artística e interpretativa",
  "variante digital reciente",
  "adaptación literaria moderna",
  "recepción pedagógica",
  "descarte editorial",
]);

export function assertAntioquiaMixtoResidualEvidenceMatrix() {
  for (const [slug, claims] of Object.entries(
    antioquiaMixtoResidualEvidenceMatrix,
  )) {
    if (claims.length < 4) {
      throw new Error(`${slug}: se requieren cuatro decisiones de evidencia.`);
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
        if (!antioquiaMixtoResidualSources[key]) {
          throw new Error(`${slug}: fuente desconocida ${key}.`);
        }
      }
    }
  }
  return true;
}
