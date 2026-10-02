import { boyacaMixtoResidualSources } from "./sources.mjs";

export const boyacaMixtoResidualEvidenceMatrix = {
  "los-mensajeros-de-los-dioses": [
    {
      claim:
        "La versión consultable de Mongatá, Mayavita y las guacamayas se atribuye a Lilia Montaña de Silva Celis y a su libro de 1970.",
      evidenceClass: "núcleo atribuido",
      sourceKeys: ["liliaJbb", "elTiempoMayavita", "caroLilia"],
    },
    {
      claim:
        "La guía Loros de Colombia y la novela Los hijos del agua documentan recepción posterior, no fuentes orales independientes.",
      evidenceClass: "recepción documentada",
      sourceKeys: ["lorosJbb", "hijosAgua"],
    },
    {
      claim:
        "Las nueve filas 478–486 del Excel son fragmentos de una secuencia continua y quedan reunidas en una sola ruta.",
      evidenceClass: "unificación editorial",
      sourceKeys: ["elTiempoMayavita", "liliaJbb"],
    },
    {
      claim:
        "No se afirma una conexión maya ni que Sua sea traducción comprobada de guacamaya; el alcance lingüístico queda declarado.",
      evidenceClass: "límite documental",
      sourceKeys: ["elTiempoMayavita", "ocampoMitos"],
    },
    {
      claim:
        "Las mojas muiscas y el cuervo de Apolo se comparan por función mensajera, sin parentesco cultural supuesto.",
      evidenceClass: "comparación funcional",
      sourceKeys: ["ocampoMitos", "ovidRaven"],
    },
  ],
  "el-cucacuy": [
    {
      claim:
        "El Valle de Tenza conserva una figura humana desnuda, silbadora y asociada con fogones, molienda y tesoros.",
      evidenceClass: "núcleo regional documentado",
      sourceKeys: [
        "puebloBoyacense",
        "uptcLexicon",
        "uptcInventory",
        "corpoboyacaPomca",
      ],
    },
    {
      claim:
        "Miraflores y Lengupá transmiten una variante animal: cerdo, a veces dorado, que carga a un duende silbador.",
      evidenceClass: "variante regional documentada",
      sourceKeys: ["uptcMincho", "boyaca7Dias"],
    },
    {
      claim:
        "El uso colonial de cocacuyes no demuestra por sí solo continuidad con el espanto moderno.",
      evidenceClass: "límite documental",
      sourceKeys: ["muyscaCucacuy", "uptcLexicon"],
    },
    {
      claim:
        "Antonio Bustamante y su diálogo moral se eliminan porque no aparecen en las fuentes regionales seleccionadas.",
      evidenceClass: "descarte editorial",
      sourceKeys: ["puebloBoyacense", "uptcInventory", "sanEduardoPot"],
    },
    {
      claim:
        "Yato y Mohán se comparan como custodios o riquezas móviles, manteniendo diferencias de forma y territorio.",
      evidenceClass: "comparación funcional",
      sourceKeys: ["uptcLexicon", "uptcMincho"],
    },
  ],
  "la-sombra-creadora": [
    {
      claim:
        "Are aparece como una gran sombra antropomorfa que talla figuras de madera y les da vida junto al agua.",
      evidenceClass: "núcleo etnohistórico",
      sourceKeys: ["ocampoMitos", "piedrahitaBanrep", "bha05"],
    },
    {
      claim:
        "El relato se atribuye al pueblo muzo y no al muisca, aunque la URL conserve el bucket editorial Mixto.",
      evidenceClass: "corrección cultural",
      sourceKeys: ["piedrahitaBanrep", "perezBarradas", "locFuratena"],
    },
    {
      claim:
        "Las teorías de migración caribe de la historiografía temprana se registran como historia de interpretación, no como certeza.",
      evidenceClass: "límite historiográfico",
      sourceKeys: ["bha05", "bha36", "perezBarradas"],
    },
    {
      claim:
        "Tales, Cicerón y Anaximandro se retiran del relato porque son digresiones comparativas del compilador.",
      evidenceClass: "descarte editorial",
      sourceKeys: ["ocampoMitos"],
    },
    {
      claim:
        "Bachué y el Popol Vuh se comparan por creación, agua o madera, sin convertirlos en versiones de Are.",
      evidenceClass: "comparación funcional",
      sourceKeys: ["banrepBachue", "popolVuh"],
    },
  ],
  furatena: [
    {
      claim:
        "Una versión local contemporánea enlaza a Are, Fura, Tena, Zarbi, los peñones, el río, las esmeraldas y las mariposas.",
      evidenceClass: "núcleo regional atribuido",
      sourceKeys: ["boyapazFuratena", "eanFuratena"],
    },
    {
      claim:
        "La compilación de Ocampo difiere en quién mata a quién y qué cuerpo carga Fura; la divergencia se conserva explícita.",
      evidenceClass: "variante documentada",
      sourceKeys: ["ocampoMitos", "boyapazFuratena"],
    },
    {
      claim:
        "La noticia colonial de Furatena como mujer encumbrada, el cerro menor como hijo y el adoratorio no contiene por sí sola el romance moderno.",
      evidenceClass: "límite documental",
      sourceKeys: ["rosarioFuratena", "piedrahitaBanrep"],
    },
    {
      claim:
        "La cacica Furatena de las crónicas y la Fura del ciclo de Are se mantienen diferenciadas.",
      evidenceClass: "corrección histórica",
      sourceKeys: ["piedrahitaBanrep", "rosarioFuratena"],
    },
    {
      claim:
        "Iztaccíhuatl y la cacica de Guatavita se comparan por paisaje trágico, sin proponer parentesco ni omitir diferencias.",
      evidenceClass: "comparación funcional",
      sourceKeys: ["inahIztaccihuatl", "ocampoMitos"],
    },
    {
      claim:
        "Los testimonios contemporáneos con Furatena y Pitisoque muestran variación viva y desaconsejan una versión única.",
      evidenceClass: "recepción documentada",
      sourceKeys: ["rioMinero", "rosarioFuratena"],
    },
  ],
};

const allowedClasses = new Set([
  "núcleo atribuido",
  "recepción documentada",
  "unificación editorial",
  "límite documental",
  "comparación funcional",
  "núcleo regional documentado",
  "variante regional documentada",
  "descarte editorial",
  "núcleo etnohistórico",
  "corrección cultural",
  "límite historiográfico",
  "núcleo regional atribuido",
  "variante documentada",
  "corrección histórica",
]);

export function assertBoyacaMixtoResidualEvidenceMatrix() {
  for (const [slug, claims] of Object.entries(
    boyacaMixtoResidualEvidenceMatrix,
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
        if (!boyacaMixtoResidualSources[key]) {
          throw new Error(`${slug}: fuente desconocida ${key}.`);
        }
      }
    }
  }
  return true;
}
