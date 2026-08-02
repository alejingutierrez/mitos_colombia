import { ticunaResidualSources } from "./sources.mjs";

export const ticunaResidualEvidenceMatrix = {
  "origen-del-sol": [
    {
      claim:
        "El inventario institucional atribuye a los Ticuna un hombre que asciende para dar más luz y calor.",
      evidenceClass: "núcleo documentado",
      sourceKeys: ["abcBibliotecario", "rodriguezCatalog"],
    },
    {
      claim:
        "La madre quemada y restaurada distingue la ruta leticiana del relato de Dolores Noé.",
      evidenceClass: "variante identificada",
      sourceKeys: ["rodriguezCatalog", "moruapu2000"],
    },
    {
      claim:
        "El acceso abierto no permite identificar al informante de la versión leticiana.",
      evidenceClass: "duda",
      sourceKeys: ["rodriguezCatalog", "abcBibliotecario"],
    },
  ],
  "origen-de-la-luna": [
    {
      claim:
        "La síntesis Ticuna conserva visita nocturna, marca oscura, reconocimiento del hermano y ascenso lunar.",
      evidenceClass: "núcleo documentado",
      sourceKeys: ["abcBibliotecario", "rodriguezCatalog"],
    },
    {
      claim:
        "Wocha, mujer boruga, huito y ascenso por el árbol pertenecen a testimonios de Moruapü y no se funden en esta versión breve.",
      evidenceClass: "variante identificada",
      sourceKeys: ["moruapu2000"],
    },
    {
      claim:
        "Ayara y Mayari no aparecen en la cadena documental y se retiran como nombres inventados.",
      evidenceClass: "corrección de identidad y título",
      sourceKeys: ["abcBibliotecario", "moruapu2000"],
    },
  ],
  "origen-del-agua": [
    {
      claim:
        "Testimonios Ticuna atribuidos relacionan lupuna, ardilla pequeña, perezoso, ají y formación de ríos.",
      evidenceClass: "núcleo documentado",
      sourceKeys: ["contraSilencio", "santos2010"],
    },
    {
      claim:
        "La versión reproducida por la Universidad Distrital sustituye el ají eficaz por hormigas y añade peces nacidos de las salpicaduras de Yoí.",
      evidenceClass: "variante identificada",
      sourceKeys: ["arbolAgua"],
    },
    {
      claim:
        "La ruta es una ventana del ciclo Wone-Eware y no un origen independiente sin relación con la ficha canónica.",
      evidenceClass: "lectura editorial",
      sourceKeys: ["santos2010", "goulard2009"],
    },
  ],
  "origen-de-los-vegetales-cultivaldos": [
    {
      claim:
        "El inventario Ticuna conserva mujer, canasta de yuca y plátano, robo, muerte y nacimiento de vegetales.",
      evidenceClass: "núcleo documentado",
      sourceKeys: ["abcBibliotecario", "rodriguezCatalog"],
    },
    {
      claim:
        "Ariana no está documentada y la palabra santa de la transmisión castellana no prueba una identidad divina.",
      evidenceClass: "corrección de identidad y título",
      sourceKeys: ["abcBibliotecario", "galante2018"],
    },
    {
      claim:
        "El relato del venado y los alimentos de Moruapü es una versión autónoma y no se fusiona con la canasta.",
      evidenceClass: "variante identificada",
      sourceKeys: ["moruapu2000"],
    },
  ],
  "origen-del-gavilan": [
    {
      claim:
        "El resumen institucional vincula carne tomada durante la cacería de pelazón con la transformación en gavilán.",
      evidenceClass: "núcleo documentado",
      sourceKeys: ["abcBibliotecario", "rodriguezCatalog"],
    },
    {
      claim:
        "Los dos registros consecutivos de la base forman una sola continuidad y no dos mitos autónomos.",
      evidenceClass: "recomposición editorial",
      sourceKeys: ["rodriguezCatalog", "galante2018"],
    },
    {
      claim:
        "La pelazón se conserva solo como contexto y no autoriza reconstruir cantos, objetos o procedimientos.",
      evidenceClass: "duda",
      sourceKeys: ["parques2024", "icanhProfile"],
    },
  ],
  "origen-de-los-micos-boquiblancos": [
    {
      claim:
        "La cita del corpus conserva tres huérfanos, carne retenida, caldo, harina en los labios y transformación en micos.",
      evidenceClass: "núcleo documentado",
      sourceKeys: ["galante2018", "abcBibliotecario"],
    },
    {
      claim:
        "Montañas, sauce, bambú, Madre Tierra y final feliz no pertenecen al núcleo consultable y se eliminan.",
      evidenceClass: "lectura editorial",
      sourceKeys: ["galante2018", "rodriguezCatalog"],
    },
    {
      claim:
        "La especie zoológica y el informante original no pueden identificarse desde el acceso público.",
      evidenceClass: "duda",
      sourceKeys: ["rodriguezCatalog", "abcBibliotecario"],
    },
  ],
  "moe-e-ipi": [
    {
      claim:
        "Los testimonios contemporáneos identifican a Yoí, Ípi y Techi en la secuencia del umarí, tururí, huito, peces y gente.",
      evidenceClass: "núcleo documentado",
      sourceKeys: ["contraSilencio", "santos2010"],
    },
    {
      claim:
        "Moe pertenece a la historia de la canoa y no es el nombre de Yoí en este ciclo.",
      evidenceClass: "corrección de identidad y título",
      sourceKeys: ["moruapu2000", "santos2010"],
    },
    {
      claim:
        "La oposición hermano bueno contra hermano loco es una moralización heredada que no explica la relación Ticuna.",
      evidenceClass: "hipótesis académica",
      sourceKeys: ["goulard2009", "contraSilencio"],
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
  "recomposición editorial",
  "duda",
]);

export function assertTicunaResidualEvidenceMatrix() {
  for (const [slug, claims] of Object.entries(ticunaResidualEvidenceMatrix)) {
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
        if (!ticunaResidualSources[key]) {
          throw new Error(`${slug}: fuente desconocida ${key}.`);
        }
      }
    }
  }
  return true;
}
