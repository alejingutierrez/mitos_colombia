import {
  piedecuestaVicenteArenasISourceKeysBySlug,
  piedecuestaVicenteArenasISources,
} from "./sources.mjs";

export const piedecuestaVicenteArenasIEvidenceMatrix = {
  "la-mula-del-diablo": [
    {
      claim:
        "La adaptación atribuye a Arenas la historia de Eumelia, el herrero Pacho y una mula herrada por un visitante vestido de negro.",
      evidenceClass: "adaptación literaria atribuida",
      sourceKeys: ["perezBookFullText", "ciniiEstampas"],
    },
    {
      claim:
        "La muerte y las correspondencias entre heridas y clavos pertenecen al relato, sin expediente independiente localizado.",
      evidenceClass: "límite histórico y sensible",
      sourceKeys: ["perezBookFullText", "perezBookMetadata"],
    },
    {
      claim:
        "El ciclo ofrece más de una imagen final de la mula y no debe fusionarse con La Mula Maneada ni con El Diablo de Umpalá.",
      evidenceClass: "variantes internas y desfusión",
      sourceKeys: ["perezBookFullText", "educoasProject"],
    },
  ],
  "la-mula-maneada": [
    {
      claim:
        "El Romance de la Mula Maneada procede de Crónicas y romances y nombra a Petra Agudelo y Blas Plata.",
      evidenceClass: "romance literario publicado",
      sourceKeys: ["perezBookFullText", "uisCronicas"],
    },
    {
      claim:
        "Las acusaciones de brujería y daño son voces del poema, no hechos comprobados sobre una mujer histórica.",
      evidenceClass: "límite de estigma y atribución",
      sourceKeys: ["perezBookFullText", "perezBookMetadata"],
    },
    {
      claim:
        "El romance identifica el rumor con Petra, pero no describe inequívocamente una transformación corporal de mujer en mula.",
      evidenceClass: "límite narrativo",
      sourceKeys: ["perezBookFullText", "uisCronicas"],
    },
  ],
  "la-llorona-del-molino": [
    {
      claim:
        "La adaptación sitúa el relato junto a un molino movido por aguas del río de Oro y lo atribuye a Estampas de mi tierra.",
      evidenceClass: "adaptación literaria y territorio",
      sourceKeys: ["perezBookFullText", "ciniiEstampas"],
    },
    {
      claim:
        "Anselmo, Natalia, Sinforiana y los niños son personajes de la cadena publicada, no biografías o víctimas corroboradas.",
      evidenceClass: "límite histórico y sensible",
      sourceKeys: ["perezBookFullText", "perezBookMetadata"],
    },
    {
      claim:
        "La epidemia, las muertes y el llanto cuaresmal se conservan de forma atribuida y no gráfica.",
      evidenceClass: "tratamiento editorial de daño",
      sourceKeys: ["perezBookFullText", "educoasProject"],
    },
  ],
  "la-mechuda": [
    {
      claim:
        "El romance sigue a Antoninito y Balbino hacia un baile por el Puente de Plata y la zona de Villanueva.",
      evidenceClass: "romance literario publicado",
      sourceKeys: ["perezBookFullText", "uisCronicas"],
    },
    {
      claim:
        "La aparición visible se reduce a un bulto junto a una palma, acompañado por dos alaridos cada vez más cercanos.",
      evidenceClass: "núcleo textual restaurado",
      sourceKeys: ["perezBookFullText", "uisCronicas"],
    },
    {
      claim:
        "La fuente no describe cabellera, anatomía gigante, ataque físico o transformación femenina.",
      evidenceClass: "límite iconográfico y desfusión",
      sourceKeys: ["perezBookFullText", "perezBookMetadata"],
    },
  ],
  "el-fantasma-de-el-horizonte": [
    {
      claim:
        "La adaptación sitúa un supuesto penitente con sonidos semejantes a rosario y matraca en la calle El Horizonte.",
      evidenceClass: "leyenda urbana adaptada",
      sourceKeys: ["perezBookFullText", "ciniiEstampas"],
    },
    {
      claim:
        "Vicente descubre un burro cojo cubierto por una manta como explicación interna del sonido y la silueta.",
      evidenceClass: "desenlace animal interno",
      sourceKeys: ["perezBookFullText", "educoasProject"],
    },
    {
      claim:
        "Otra versión atribuye el espanto a una broma humana contra serenateros, sin demostración independiente.",
      evidenceClass: "variante racional atribuida",
      sourceKeys: ["perezBookFullText", "perezBookMetadata"],
    },
  ],
  "la-puerta-del-perdon": [
    {
      claim:
        "El relato se construye alrededor de la puerta lateral de madera y arco de piedra de la parroquia San Francisco Javier.",
      evidenceClass: "patrimonio material contextualizado",
      sourceKeys: [
        "perezBookFullText",
        "ciniiEstampas",
        "religiousTourismStudy",
      ],
    },
    {
      claim:
        "Curaciones, inmovilidad y cambios de conducta son motivos legendarios, no efectos médicos o jurídicos verificados.",
      evidenceClass: "límite de milagro y causalidad",
      sourceKeys: ["perezBookFullText", "perezBookMetadata"],
    },
    {
      claim:
        "Raspar dientes contra la piedra, comer madera y forzar a personas a arrodillarse no se recomiendan ni romantizan.",
      evidenceClass: "límite de seguridad y dignidad",
      sourceKeys: ["perezBookFullText", "religiousTourismStudy"],
    },
  ],
  "la-sayona-del-cementerio": [
    {
      claim:
        "La adaptación atribuye a Carlos Vicente Gómez una aparición de 1896 y la identificación posterior con Elvira.",
      evidenceClass: "memoria romántica atribuida",
      sourceKeys: ["perezBookFullText", "ciniiEstampas"],
    },
    {
      claim:
        "Fechas, reunión política, muerte por tuberculosis y relación juvenil no cuentan aquí con expediente independiente.",
      evidenceClass: "límite histórico y biográfico",
      sourceKeys: ["perezBookFullText", "perezBookMetadata"],
    },
    {
      claim:
        "La Sayona local es una figura de duelo y memoria, no la castigadora genérica de hombres infieles.",
      evidenceClass: "identidad local y desfusión",
      sourceKeys: ["perezBookFullText", "educoasProject"],
    },
  ],
  "el-pollo-de-las-animas": [
    {
      claim:
        "La adaptación presenta a Ritornelio trabajando sin pago para una madrastra que le promete y luego vende una gallina.",
      evidenceClass: "relato de explotación adaptado",
      sourceKeys: ["perezBookFullText", "ciniiEstampas"],
    },
    {
      claim:
        "La supuesta voz de las ánimas es una imitación de la madrastra para asustarlo y mantener el engaño.",
      evidenceClass: "explicación humana interna",
      sourceKeys: ["perezBookFullText", "educoasProject"],
    },
    {
      claim:
        "La revisión elimina insultos capacitistas, no diagnostica a Ritornelio y centra dignidad, engaño y explotación.",
      evidenceClass: "límite ético contemporáneo",
      sourceKeys: ["perezBookFullText", "ohchrDisability"],
    },
  ],
};

export function assertPiedecuestaVicenteArenasIEvidenceMatrix() {
  for (const [slug, rows] of Object.entries(
    piedecuestaVicenteArenasIEvidenceMatrix,
  )) {
    if (!rows.length) throw new Error(`${slug}: matriz vacía.`);
    const allowed = new Set(piedecuestaVicenteArenasISourceKeysBySlug[slug]);
    for (const row of rows) {
      if (!row.claim || !row.evidenceClass || !row.sourceKeys.length) {
        throw new Error(`${slug}: fila de evidencia incompleta.`);
      }
      for (const key of row.sourceKeys) {
        if (!allowed.has(key) || !piedecuestaVicenteArenasISources[key]) {
          throw new Error(`${slug}: evidencia fuera del expediente: ${key}.`);
        }
      }
    }
  }
  return true;
}
