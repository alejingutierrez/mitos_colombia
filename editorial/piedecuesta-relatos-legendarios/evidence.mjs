import {
  piedecuestaLegendaryAccountsSourceKeysBySlug,
  piedecuestaLegendaryAccountsSources,
} from "./sources.mjs";

export const piedecuestaLegendaryAccountsEvidenceMatrix = {
  "el-cerro-encantado": [
    {
      claim:
        "El romance El Cerro Encantado procede de Crónicas y romances, páginas 435 a 437, de Vicente Arenas.",
      evidenceClass: "romance literario publicado",
      sourceKeys: ["perezBookFullText", "uisCronicas"],
    },
    {
      claim:
        "Cantera, Bernardino, Arnefo, la catástrofe y el origen del nombre del cerro pertenecen al poema y no cuentan con corroboración independiente localizada.",
      evidenceClass: "límite histórico y toponímico",
      sourceKeys: ["perezBookFullText", "perezBookMetadata"],
    },
    {
      claim:
        "La revisión atribuye y no adopta el lenguaje racializado con que el romance opone población negra e indígena.",
      evidenceClass: "límite ético y de representación",
      sourceKeys: [
        "perezBookFullText",
        "culturalPlansStudy",
        "educoasProject",
      ],
    },
  ],
  "el-quijote-piedecuestano": [
    {
      claim:
        "El Quijote Piedecuestano se atribuye a Estampas de mi tierra, páginas 140 a 144, de Vicente Arenas.",
      evidenceClass: "relato literario publicado",
      sourceKeys: ["perezBookFullText", "ciniiEstampas"],
    },
    {
      claim:
        "La historiografía respalda la existencia de un cacicazgo Macaregua, pero no demuestra a Juan de Guarguatí, Celedonio, los Cachimbos, el túnel o la batalla narrada.",
      evidenceClass: "contexto histórico con frontera",
      sourceKeys: ["uisGuaneHistory", "perezBookFullText"],
    },
    {
      claim:
        "Insultos, rituales, etimologías y retratos violentos de los indígenas son voz colonial del texto y no descripción autorizada de tradición Guane.",
      evidenceClass: "límite cultural y de estigma",
      sourceKeys: [
        "perezBookFullText",
        "uisGuaneHistory",
        "educoasProject",
      ],
    },
  ],
  "la-vista-del-libertador": [
    {
      claim:
        "La Visita del Libertador es un romance de Crónicas y romances, páginas 519 a 522, no un itinerario documental.",
      evidenceClass: "romance histórico atribuido",
      sourceKeys: ["perezBookFullText", "uisCronicas"],
    },
    {
      claim:
        "Flores, acompañantes, banquete, baile, misa y pasos en la casa se conservan como escenas poéticas sin presentarlas como hechos verificados.",
      evidenceClass: "memoria literaria con límite",
      sourceKeys: ["perezBookFullText", "culturalPlansStudy"],
    },
    {
      claim:
        "La hipótesis sobre Margarita Camacho y Miguel Simón Camacho tiene recepción periodística, pero no se trata como parentesco probado.",
      evidenceClass: "hipótesis biográfica atribuida",
      sourceKeys: ["perezBookFullText", "vanguardiaBolivarClaim"],
    },
  ],
  "un-libertador-piedecuestano": [
    {
      claim:
        "La página deriva de la semblanza de José María Mantilla publicada por José María Baraya en 1874.",
      evidenceClass: "biografía histórica identificada",
      sourceKeys: [
        "barayaFullText",
        "openLibraryBaraya",
        "perezBookFullText",
      ],
    },
    {
      claim:
        "La carrera militar, los cargos, la controversia de 1854 y la muerte en 1860 pertenecen a una trayectoria histórica, no a un mito sobrenatural.",
      evidenceClass: "reclasificación documental",
      sourceKeys: [
        "barayaFullText",
        "academiaMantilla",
        "nationalArchiveCensus",
      ],
    },
    {
      claim:
        "Los elogios republicanos de Baraya se atribuyen a su cultura biográfica y no se repiten como evaluación neutral.",
      evidenceClass: "límite historiográfico",
      sourceKeys: ["barayaFullText", "academiaMantilla"],
    },
  ],
};

export function assertPiedecuestaLegendaryAccountsEvidenceMatrix() {
  for (const [slug, rows] of Object.entries(
    piedecuestaLegendaryAccountsEvidenceMatrix,
  )) {
    if (!rows.length) throw new Error(`${slug}: matriz vacía.`);
    const allowed = new Set(
      piedecuestaLegendaryAccountsSourceKeysBySlug[slug],
    );
    for (const row of rows) {
      if (!row.claim || !row.evidenceClass || !row.sourceKeys.length) {
        throw new Error(`${slug}: fila de evidencia incompleta.`);
      }
      for (const key of row.sourceKeys) {
        if (!allowed.has(key) || !piedecuestaLegendaryAccountsSources[key]) {
          throw new Error(`${slug}: evidencia fuera del expediente: ${key}.`);
        }
      }
    }
  }
  return true;
}
