import {
  piedecuestaClasicosFinalSourceKeysBySlug,
  piedecuestaClasicosFinalSources,
} from "./sources.mjs";

export const piedecuestaClasicosFinalEvidenceMatrix = {
  "el-anima-coy": [
    {
      claim:
        "El Romance del Ánima Coy de Crónicas y romances nombra a Benedicta Rovira y sitúa su paso por San Antonio.",
      evidenceClass: "romance literario publicado",
      sourceKeys: ["perezBookFullText", "uisCronicas", "laEskinaAnima"],
    },
    {
      claim:
        "Policarpo identifica la voz y el poema acusa a Benedicta de la muerte de Rosario, sin corroboración independiente.",
      evidenceClass: "acusación poética atribuida",
      sourceKeys: ["perezBookFullText", "laEskinaAnima"],
    },
    {
      claim:
        "La alternancia entre bulto, mula, ave y cabro permanece como variantes del poema, no transformaciones históricas.",
      evidenceClass: "variantes internas con límite",
      sourceKeys: ["perezBookFullText", "perezBookMetadata"],
    },
  ],
  "la-luz-del-limonal": [
    {
      claim:
        "La adaptación remite a Estampas de mi tierra, páginas 104 a 109, y sitúa a Luz y Baldomero en la hacienda El Limonal.",
      evidenceClass: "adaptación literaria atribuida",
      sourceKeys: ["perezBookFullText", "ciniiEstampas"],
    },
    {
      claim:
        "Reclutamiento, relación, muerte infantil y muerte de Luz pertenecen al relato, no a expedientes independientes localizados.",
      evidenceClass: "límite histórico y sensible",
      sourceKeys: ["perezBookFullText", "perezBookMetadata"],
    },
    {
      claim:
        "La versión de Arenas y la nueva versión de Valenzuela difieren en personajes, cronología y fórmulas de distancia.",
      evidenceClass: "separación de variantes",
      sourceKeys: ["perezBookFullText", "educoasProject", "municipalPlan"],
    },
  ],
  "el-silbon": [
    {
      claim:
        "La adaptación atribuye el ciclo del trapiche y Silvestre a José del Carmen Rivera y a su texto premiado en 1969.",
      evidenceClass: "autoría y recepción documentadas",
      sourceKeys: ["perezBookFullText", "riveraBiography"],
    },
    {
      claim:
        "El silbido cambia de intensidad, aparece un saco de huesos y una voz pide oraciones dentro del relato.",
      evidenceClass: "núcleo narrativo publicado",
      sourceKeys: ["perezBookFullText", "educoasProject"],
    },
    {
      claim:
        "La versión no contiene padre asesinado, abuelo, perro, látigo, seis metros ni castigo específico a infieles o bebedores.",
      evidenceClass: "desfusión regional",
      sourceKeys: ["perezBookFullText", "alcaldiaSilbon"],
    },
  ],
  "los-tunjos-de-la-cantera": [
    {
      claim:
        "La historia compensatoria de Rivera sigue a Silvestre desde la pobreza hasta la captura literaria de un tunjo en Viernes Santo.",
      evidenceClass: "leyenda literaria premiada",
      sourceKeys: ["perezBookFullText", "riveraBiography"],
    },
    {
      claim:
        "El tunjo viviente, su captura y las escamas de oro son ficción narrativa y no descripción arqueológica.",
      evidenceClass: "distinción folclor-arqueología",
      sourceKeys: ["perezBookFullText", "museoTunjo"],
    },
    {
      claim:
        "La página no ofrece instrucciones de excavación, captura o extracción y recuerda la protección del patrimonio.",
      evidenceClass: "límite patrimonial",
      sourceKeys: ["icanhProtection", "museoTunjo"],
    },
  ],
  "duende-del-salto": [
    {
      claim:
        "El Salto del Duende es un paisaje y cascada estacional reconocido por la escuela rural y la cartografía social.",
      evidenceClass: "territorio comunitario documentado",
      sourceKeys: ["schoolDuende", "rederRisk"],
    },
    {
      claim:
        "La versión de Muki integra múltiples autores, monografías, blog escolar y vivencias del editor en 2016.",
      evidenceClass: "composición híbrida moderna",
      sourceKeys: ["perezBookFullText", "educoasProject"],
    },
    {
      claim:
        "No se corroboran Muki como divinidad Guane, sacrificios, suicidios, conversiones en tunjo, violencia sexual o una caverna visitable.",
      evidenceClass: "límite cultural, histórico y de seguridad",
      sourceKeys: [
        "perezBookFullText",
        "rederRisk",
        "formalArtResearch",
      ],
    },
  ],
};

export function assertPiedecuestaClasicosFinalEvidenceMatrix() {
  for (const [slug, rows] of Object.entries(
    piedecuestaClasicosFinalEvidenceMatrix,
  )) {
    if (!rows.length) throw new Error(`${slug}: matriz vacía.`);
    const allowed = new Set(piedecuestaClasicosFinalSourceKeysBySlug[slug]);
    for (const row of rows) {
      if (!row.claim || !row.evidenceClass || !row.sourceKeys.length) {
        throw new Error(`${slug}: fila de evidencia incompleta.`);
      }
      for (const key of row.sourceKeys) {
        if (!allowed.has(key) || !piedecuestaClasicosFinalSources[key]) {
          throw new Error(`${slug}: evidencia fuera del expediente: ${key}.`);
        }
      }
    }
  }
  return true;
}
