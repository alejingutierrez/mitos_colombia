import { andinaVariosMixtoResidualSources } from "./sources.mjs";

export const andinaVariosMixtoResidualEvidenceMatrix = {
  "la-mano-peluda": [
    {
      claim:
        "La variante cundiboyacense es una mano peluda e incorpórea asociada con La Candelaria y casas antiguas de Tunja.",
      evidenceClass: "núcleo regional documentado",
      sourceKeys: ["tunjaMano", "senalMano", "boyacaRadioMano"],
    },
    {
      claim:
        "La compilación de Ocampo conserva otra variante en la que la Mano Peluda es la garra del Viejo del Costal.",
      evidenceClass: "variante documentada",
      sourceKeys: ["ocampoAntioquia", "ocampoColombia"],
    },
    {
      claim:
        "Las dos filas 826 y 842 del Excel reescriben el mismo campo narrativo y quedan reunidas en una ruta.",
      evidenceClass: "unificación editorial",
      sourceKeys: ["ocampoAntioquia", "tunjaMano"],
    },
    {
      claim:
        "Pistola de ácido, dimensiones celestes y atribuciones personales no corroboradas se eliminan del relato.",
      evidenceClass: "descarte editorial",
      sourceKeys: ["ocampoAntioquia", "tunjaMano", "senalMano"],
    },
    {
      claim:
        "Coco y Hombre del Saco se comparan por su función disciplinaria sin afirmar una genealogía única.",
      evidenceClass: "comparación funcional",
      sourceKeys: ["raeCoco", "cervantesSaco"],
    },
  ],
  "el-hojarasquin-del-monte": [
    {
      claim:
        "El Hojarasquín protege bosque y fauna y circula como hombre-árbol, mico gigante velludo o ser híbrido.",
      evidenceClass: "núcleo regional documentado",
      sourceKeys: ["ocampoAntioquia", "esapHojarasquin", "redalycProtectores"],
    },
    {
      claim:
        "Puede desorientar cazadores con huellas engañosas, perder viajeros o guiarlos fuera del monte.",
      evidenceClass: "variante documentada",
      sourceKeys: ["esapHojarasquin", "caldasHojarasquin"],
    },
    {
      claim:
        "La versión del leñador que corta un guayacán y es juzgado por la Madremonte se conserva con atribución a Ocampo.",
      evidenceClass: "versión etiológica atribuida",
      sourceKeys: ["colombiaAprendeHojarasquin", "ocampoAntioquia"],
    },
    {
      claim:
        "Joaquín Romero, un diario botánico de 1928 y una biografía cerrada se eliminan por falta de respaldo en el expediente.",
      evidenceClass: "descarte editorial",
      sourceKeys: ["ocampoAntioquia", "esapHojarasquin", "banrepFolclor"],
    },
    {
      claim:
        "El cuento homónimo de Tío Conejo se separa del guardián forestal para no convertir recepción literaria en variante mítica.",
      evidenceClass: "desambiguación documental",
      sourceKeys: ["samanaTioConejo", "esapHojarasquin"],
    },
    {
      claim:
        "Madremonte y Curupira se comparan por protección ambiental con diferencias explícitas de forma y contexto.",
      evidenceClass: "comparación funcional",
      sourceKeys: ["colombiaAprendeHojarasquin", "curupiraInstituto"],
    },
  ],
  "esperanza-en-el-oriente": [
    {
      claim:
        "Esperanza en el Oriente es una sección comparativa de Mariano Izquierdo Gallo publicada en 1956 y reproducida por Villa Posse.",
      evidenceClass: "núcleo ensayístico atribuido",
      sourceKeys: ["izquierdoVilla"],
    },
    {
      claim:
        "El propio autor admite que no puede demostrar una creencia común y propone su lectura funeraria de manera conjetural.",
      evidenceClass: "límite autoral explícito",
      sourceKeys: ["izquierdoVilla"],
    },
    {
      claim:
        "Tácito relata un oráculo político sobre gobernantes salidos de Judea, no una religión universal de salvación oriental.",
      evidenceClass: "corrección historiográfica",
      sourceKeys: ["tacitoPerseus", "uvaWorldLeader"],
    },
    {
      claim:
        "La orientación de entierros zenúes es un dato histórico separado de la inferencia sobre resurrección.",
      evidenceClass: "separación dato inferencia",
      sourceKeys: ["izquierdoVilla", "acostaCementerio"],
    },
    {
      claim:
        "Bochica, Quetzalcóatl y Kukulcán pertenecen a tradiciones diferentes que no deben fundirse en un único héroe venido del este.",
      evidenceClass: "corrección cultural",
      sourceKeys: ["banrepMuiscas", "inahSerpiente", "inahQuetzalcoatl"],
    },
    {
      claim:
        "Las comparaciones se conservan como historia intelectual y no como prueba de difusión, contacto o doctrina panamericana.",
      evidenceClass: "comparación historiográfica",
      sourceKeys: ["izquierdoVilla", "banrepArqueologia"],
    },
  ],
};

const allowedClasses = new Set([
  "núcleo regional documentado",
  "variante documentada",
  "unificación editorial",
  "descarte editorial",
  "comparación funcional",
  "versión etiológica atribuida",
  "desambiguación documental",
  "núcleo ensayístico atribuido",
  "límite autoral explícito",
  "corrección historiográfica",
  "separación dato inferencia",
  "corrección cultural",
  "comparación historiográfica",
]);

export function assertAndinaVariosMixtoResidualEvidenceMatrix() {
  for (const [slug, claims] of Object.entries(
    andinaVariosMixtoResidualEvidenceMatrix,
  )) {
    if (claims.length < 4) throw new Error(`${slug}: faltan decisiones.`);
    for (const { claim, evidenceClass, sourceKeys } of claims) {
      if (
        !claim ||
        !allowedClasses.has(evidenceClass) ||
        !sourceKeys.length ||
        new Set(sourceKeys).size !== sourceKeys.length
      ) {
        throw new Error(`${slug}: evidencia incompleta.`);
      }
      for (const key of sourceKeys) {
        if (!andinaVariosMixtoResidualSources[key]) {
          throw new Error(`${slug}: fuente desconocida ${key}.`);
        }
      }
    }
  }
  return true;
}
