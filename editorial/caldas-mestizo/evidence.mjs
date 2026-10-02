import {
  caldasMestizoSourceKeysBySlug,
  caldasMestizoSources,
} from "./sources.mjs";

export const caldasMestizoEvidenceMatrix = {
  "cuento-de-animas": [
    {
      claim:
        "Laurián y Ñuá Ulogia protagonizan dos relatos moralizantes de Otero D’Costa situados en Rionegro, Santander, con referencia devocional a Girón.",
      evidenceClass: "texto literario y análisis académico",
      sourceKeys: [
        "oteroAnimasAnalysis",
        "oteroAnthology",
        "banrepOtero",
      ],
    },
    {
      claim:
        "El recurso testimonial del narrador no convierte las apariciones en hechos verificados ni en tradición caldense.",
      evidenceClass: "frontera de género y territorio",
      sourceKeys: [
        "oteroAnimasAnalysis",
        "samperOtero",
        "flacsoMitosColombia",
      ],
    },
  ],
  "de-frente-al-sol": [
    {
      claim:
        "De frente al sol es una ficción firmada por Otero D’Costa sobre una encomienda de Chinchiná en 1592.",
      evidenceClass: "texto literario primario",
      sourceKeys: ["oteroDeFrente", "oteroAnthology", "banrepOtero"],
    },
    {
      claim:
        "La conquista, la encomienda y la categoría colonial de los pijaos requieren contexto crítico separado del heroísmo del cuento.",
      evidenceClass: "historia crítica",
      sourceKeys: [
        "caldasConquista",
        "ansermaTransferHistory",
        "ansermaEncomiendas",
      ],
    },
  ],
  "el-aserrador": [
    {
      claim:
        "Rafael Toro era el aserrador y la persecución se incluye dentro del apartado El Uñón, con lugares concretos de Supía la Alta.",
      evidenceClass: "núcleo narrativo directo",
      sourceKeys: ["velezReader", "velezGoogle", "supiaPlan"],
    },
    {
      claim:
        "El informante conservó la explicación alternativa de una fiera; identificar al perseguidor como criatura comprobada excede la fuente.",
      evidenceClass: "incertidumbre preservada",
      sourceKeys: ["velezReader", "unalMemoriaCaldas"],
    },
  ],
  "el-cacique-cumanday": [
    {
      claim:
        "La búsqueda de hierbas, la grieta y el encuentro posterior pertenecen a una leyenda firmada por Fabio Vélez Correa.",
      evidenceClass: "texto literario directo",
      sourceKeys: ["velezReader", "velezGoogle"],
    },
    {
      claim:
        "Cumanday o Kumanday es un nombre documentado del Nevado del Ruiz, pero las fuentes científicas no registran al cacique de la trama.",
      evidenceClass: "geografía verificada con frontera",
      sourceKeys: [
        "sgcRuizFactSheet",
        "sgcGeopark",
        "ideamGlaciares",
        "nationalAcademiesRuiz",
      ],
    },
    {
      claim:
        "La identidad páez del personaje es una conjetura del autor, no una atribución comunitaria nasa independiente.",
      evidenceClass: "límite de atribución",
      sourceKeys: ["velezReader", "sgcRuizFactSheet", "sgcGeologiaRuiz"],
    },
  ],
  "el-coco": [
    {
      claim:
        "Vélez Correa distingue al Coco incorpóreo de dos escenificaciones con calabazos en Riosucio.",
      evidenceClass: "núcleo regional directo",
      sourceKeys: ["velezReader", "velezGoogle", "unalMemoriaCaldas"],
    },
    {
      claim:
        "La tradición hispánica documenta al Coco desde el siglo XV y contradice presentar un origen africano único como hecho probado.",
      evidenceClass: "historia comparativa",
      sourceKeys: ["cervantesCoco", "cervantesNanas", "pradoCoco"],
    },
    {
      claim:
        "El uso del miedo como disciplina infantil puede estudiarse críticamente sin celebrarlo.",
      evidenceClass: "contexto cultural crítico",
      sourceKeys: ["pradoCoco", "banrepInfancia", "cervantesCoco"],
    },
  ],
  "el-cole-cabuya": [
    {
      claim:
        "Burro o perro, rebuzno, cola de cabuya, bloqueo del camino y desmayo forman el núcleo documentado en San Lorenzo y Supía la Alta.",
      evidenceClass: "núcleo regional directo",
      sourceKeys: [
        "velezReader",
        "velezGoogle",
        "ocampoAntioquiaGrande",
      ],
    },
    {
      claim:
        "La censura de uniones incestuosas es una interpretación social de los compiladores y no una acusación válida contra habitantes actuales.",
      evidenceClass: "lectura crítica y frontera ética",
      sourceKeys: ["velezReader", "unalMemoriaCaldas", "antSanLorenzo"],
    },
    {
      claim:
        "San Lorenzo es un territorio indígena contemporáneo entre Riosucio y Supía.",
      evidenceClass: "contexto territorial verificado",
      sourceKeys: ["antSanLorenzo", "supiaPlan"],
    },
  ],
  "el-viejo-del-costal": [
    {
      claim:
        "El núcleo caldense es un viejo limosnero, un costal y una mano escondida semejante a una garra llamada Mano Peluda.",
      evidenceClass: "núcleo regional directo",
      sourceKeys: ["velezReader", "velezGoogle", "riosucioEncantos"],
    },
    {
      claim:
        "Redención, peregrinación y alimentación mediante el miedo no aparecen en las fuentes consultadas.",
      evidenceClass: "exclusión editorial",
      sourceKeys: [
        "velezReader",
        "ocampoAntioquiaGrande",
        "unalMemoriaCaldas",
      ],
    },
    {
      claim:
        "La figura pertenece a un repertorio infantil reelaborado y usado para obtener obediencia.",
      evidenceClass: "contexto comparativo",
      sourceKeys: ["banrepInfancia", "riosucioEncantos"],
    },
  ],
  "in-illo-tempore": [
    {
      claim:
        "In illo tempore es una ficción firmada sobre Jerónimo de Vezga, su cambio de bando y el rechazo de Don Diego.",
      evidenceClass: "texto literario primario mediado",
      sourceKeys: ["oteroAnthology", "banrepOtero", "samperOtero"],
    },
    {
      claim:
        "La ejecución de Jorge Robledo ofrece un marco histórico, pero los diálogos y motivaciones íntimas pertenecen al cuento.",
      evidenceClass: "frontera entre historia y ficción",
      sourceKeys: [
        "oteroAnthology",
        "caldasConquista",
        "ansermaArchaeology",
        "ansermaTransferHistory",
      ],
    },
  ],
  "las-brujas": [
    {
      claim:
        "Clementina pertenece a un relato firmado por Rodrigo Jiménez Mejía y está situada junto al camino Salamina-Pácora.",
      evidenceClass: "atribución literaria directa y recepción",
      sourceKeys: ["velezReader", "patriaJimenez", "velezGoogle"],
    },
    {
      claim:
        "Aspasia o Cecilia pertenece a La bruja de las minas, de Gregorio Sánchez Gómez, y no es una versión de Clementina.",
      evidenceClass: "desfusión de obras",
      sourceKeys: ["cervantesBrujaMinas", "ceroSetentaBruja"],
    },
    {
      claim:
        "La amplitud de relatos de brujas en Caldas permite comparación, no fusión de personajes ni atribución de poderes reales.",
      evidenceClass: "contexto regional con frontera",
      sourceKeys: [
        "unalMemoriaCaldas",
        "senaMemoriaCaldas",
        "velezReader",
      ],
    },
  ],
};

export function assertCaldasMestizoEvidenceMatrix() {
  for (const [slug, rows] of Object.entries(caldasMestizoEvidenceMatrix)) {
    if (!rows.length) throw new Error(`${slug}: matriz vacía.`);
    const allowed = new Set(caldasMestizoSourceKeysBySlug[slug]);
    for (const row of rows) {
      if (!row.claim || !row.evidenceClass || !row.sourceKeys.length) {
        throw new Error(`${slug}: fila de evidencia incompleta.`);
      }
      for (const key of row.sourceKeys) {
        if (!allowed.has(key) || !caldasMestizoSources[key]) {
          throw new Error(`${slug}: evidencia fuera del expediente: ${key}.`);
        }
      }
    }
  }
  return true;
}
