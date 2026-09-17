import { santanderMixtoResidualSources } from "./sources.mjs";

export const santanderMixtoResidualEvidenceMatrix = {
  talabad: [
    {
      claim:
        "Talabalí, María, la jaula y el duelo pertenecen a la elaboración literaria de Otero reproducida por Villa Posse.",
      evidenceClass: "núcleo literario atribuido",
      sourceKeys: ["villaPosseTalabali", "croniconSolariego"],
    },
    {
      claim:
        "Juan de Velasco, Juan de Arteaga, Bucarica y la explotación de trabajadores indígenas sí cuentan con documentación colonial independiente.",
      evidenceClass: "contexto histórico documentado",
      sourceKeys: [
        "scieloBucaramanga",
        "oteroFundacionBucaramanga",
        "uisColonialPunishment",
      ],
    },
    {
      claim:
        "Los documentos históricos seleccionados no corroboran a Talabalí ni el amor, la jaula o el duelo como hechos.",
      evidenceClass: "límite documental",
      sourceKeys: ["scieloBucaramanga", "uisColonialPunishment"],
    },
    {
      claim:
        "Las cuatro filas 311–314 del Excel son fragmentos continuos de un mismo relato y no cuatro mitos o versiones independientes.",
      evidenceClass: "unificación editorial",
      sourceKeys: ["villaPosseTalabali"],
    },
    {
      claim:
        "Orfeo y Amaterasu se retiran como comparaciones imprecisas y se reemplazan por dos romances históricos explícitamente literarios.",
      evidenceClass: "descarte editorial",
      sourceKeys: ["lastMohicans", "atala"],
    },
  ],
  "el-ermitano-iracundo": [
    {
      claim:
        "La fuente central consultable es la antología de 2004 y sus páginas 93–94, controladas por dos catálogos.",
      evidenceClass: "núcleo literario atribuido",
      sourceKeys: [
        "espantosArchive",
        "openLibraryEspantos",
        "mosqueraCatalog",
      ],
    },
    {
      claim:
        "Nicolás y los correos de Ana son capas narrativas distintas; el marco documental de los correos no se trata como testimonio real.",
      evidenceClass: "adaptación literaria moderna",
      sourceKeys: ["espantosArchive", "mitosCortosErmitano"],
    },
    {
      claim:
        "Mago de Oz es la banda que Ana menciona y no el nombre de una cueva o sitio verificable de Ocaña.",
      evidenceClass: "corrección de lectura",
      sourceKeys: ["espantosArchive"],
    },
    {
      claim:
        "Los trabajos de Ocaña respaldan un contexto de recopilación y recepción local, pero no corroboran por sí solos los poderes del personaje.",
      evidenceClass: "contexto regional documentado",
      sourceKeys: ["ufpsoOcanaTradition", "ufpsoEducationalSoftware"],
    },
    {
      claim:
        "La búsqueda de sabiduría, propósito personal y una conversación benévola en la cueva se eliminan porque contradicen la escena de amenaza e ira.",
      evidenceClass: "descarte editorial",
      sourceKeys: ["espantosArchive"],
    },
  ],
};

const allowedClasses = new Set([
  "núcleo literario atribuido",
  "contexto histórico documentado",
  "contexto regional documentado",
  "límite documental",
  "unificación editorial",
  "adaptación literaria moderna",
  "corrección de lectura",
  "descarte editorial",
]);

export function assertSantanderMixtoResidualEvidenceMatrix() {
  for (const [slug, claims] of Object.entries(
    santanderMixtoResidualEvidenceMatrix,
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
        if (!santanderMixtoResidualSources[key]) {
          throw new Error(`${slug}: fuente desconocida ${key}.`);
        }
      }
    }
  }
  return true;
}
