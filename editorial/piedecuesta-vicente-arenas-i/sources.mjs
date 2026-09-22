function source({ title, author, year, type, url, summary, limitation }) {
  return {
    title,
    author,
    ...(year ? { year } : {}),
    type,
    url,
    summary,
    limitation,
  };
}

export const piedecuestaVicenteArenasISources = {
  perezBookFullText: source({
    title: "Literatura folclórica: leyendas y relatos legendarios de Piedecuesta",
    author: "Luis Rubén Pérez Pinzón, editor",
    year: 2016,
    type: "libro de investigación formativa y compilación folclórica",
    url: "https://es.scribd.com/document/427463771/LiteraturaFolclricaPiedecuesta2016-pdf",
    summary:
      "Reproduce y adapta estos relatos de Vicente Arenas, señala las páginas de sus obras y propone clasificaciones históricas, identitarias, ecoambientales y negras.",
    limitation:
      "Es la principal cadena textual disponible, pero sus adaptaciones no sustituyen archivos de entrevista, expedientes civiles o corroboración independiente de cada episodio.",
  }),
  perezBookMetadata: source({
    title: "Literatura folclórica: leyendas y relatos legendarios de Piedecuesta",
    author: "Luis Rubén Pérez Pinzón",
    year: 2016,
    type: "registro académico y resumen de publicación",
    url: "https://www.researchgate.net/publication/305682356_Literatura_folclorica_Leyendas_y_relatos_legendarios_de_Piedecuesta",
    summary:
      "Confirma autor, proyecto Gen_Ondas-Unab 585, primera edición e ISBN 978-958-46-9297-9.",
    limitation:
      "Es una ficha depositada por el autor y no una evaluación independiente de los capítulos atribuidos a Vicente Arenas.",
  }),
  cerlalcBook: source({
    title: "Registro de Literatura folclórica de Piedecuesta",
    author: "Cerlalc",
    type: "registro bibliográfico regional",
    url: "https://cerlalc.org/rilvi/literatura-folclorica-leyendas-y-relatos-legendarios-de-piedecuesta-14873/",
    summary:
      "Registra la compilación de 2016 dentro del repertorio iberoamericano y respalda su existencia editorial.",
    limitation:
      "No prueba la antigüedad oral, la factualidad de las escenas ni la identidad histórica de sus personajes.",
  }),
  uisCronicas: source({
    title: "Crónicas y romances",
    author: "Vicente Arenas Mantilla; Ediciones UIS",
    year: 2023,
    type: "catálogo oficial de reedición universitaria",
    url: "https://ediciones.uis.edu.co/index.php/publicacionesuis/catalog/book/128",
    summary:
      "Documenta la reedición de la obra de 1960 que contiene los romances de La Mula Maneada y La Mechuda.",
    limitation:
      "El catálogo respalda la obra y su autoría, pero no verifica como hechos las acusaciones, apariciones o diálogos contenidos en los poemas.",
  }),
  ciniiEstampas: source({
    title: "Estampas de mi tierra",
    author: "Vicente Arenas Mantilla",
    year: 1941,
    type: "registro bibliográfico internacional",
    url: "https://ci.nii.ac.jp/ncid/BA91868368",
    summary:
      "Registra la obra de 1941 de la que proceden las versiones adaptadas de Mula del Diablo, Llorona del Molino, Fantasma, Puerta, Sayona y Pollo.",
    limitation:
      "El registro confirma la publicación, no cada detalle narrativo ni la historicidad de personas, muertes, curaciones o delitos.",
  }),
  educoasProject: source({
    title:
      "Digitalizar la memoria oral colectiva: el rescate de leyendas como estrategia formativa",
    author: "Luis Rubén Pérez Pinzón y Claudia Patricia Serrano",
    year: 2017,
    type: "ponencia de investigación formativa",
    url: "https://recursos.educoas.org/sites/default/files/5134.pdf",
    summary:
      "Describe el proyecto mediante el cual estudiantes, docentes y familias clasificaron y digitalizaron leyendas de Piedecuesta.",
    limitation:
      "Explica el proceso pedagógico; no aporta transcripciones independientes de las escenas atribuidas a Arenas.",
  }),
  ambPiedecuesta: source({
    title: "Piedecuesta: historia, economía y división territorial",
    author: "Área Metropolitana de Bucaramanga",
    type: "perfil institucional municipal",
    url: "https://www.amb.gov.co/piedecuesta/",
    summary:
      "Documenta contexto histórico y territorial de Piedecuesta, sus caminos y la relación entre centro urbano y áreas rurales.",
    limitation:
      "No menciona apariciones, testigos, transformaciones, curaciones ni delitos del corpus.",
  }),
  religiousTourismStudy: source({
    title:
      "Turismo cultural religioso de Piedecuesta: orígenes y atributos",
    author: "Universidad Autónoma de Bucaramanga",
    year: 2023,
    type: "estudio académico de patrimonio religioso local",
    url: "https://es.scribd.com/document/936919479/2023TurismoCultural-ReligiosodePiedecuesta-OrigenesyatributosUNAB",
    summary:
      "Aporta contexto sobre templos, devociones y patrimonio religioso material de Piedecuesta.",
    limitation:
      "El estudio patrimonial no demuestra milagros, castigos, curaciones ni coerciones narradas alrededor de la Puerta del Perdón.",
  }),
  ohchrDisability: source({
    title: "Convención sobre los derechos de las personas con discapacidad",
    author: "Oficina del Alto Comisionado de las Naciones Unidas para los Derechos Humanos",
    year: 2006,
    type: "instrumento internacional de derechos humanos",
    url: "https://www.ohchr.org/en/instruments-mechanisms/instruments/convention-rights-persons-disabilities",
    summary:
      "Establece respeto por la dignidad, autonomía, no discriminación e inclusión de las personas con discapacidad.",
    limitation:
      "No es una fuente del relato; solo orienta el tratamiento editorial contemporáneo y no autoriza diagnosticar a Ritornelio.",
  }),
};

const sharedEstampasSources = [
  "perezBookFullText",
  "ciniiEstampas",
  "perezBookMetadata",
  "cerlalcBook",
  "educoasProject",
  "ambPiedecuesta",
];

const sharedRomanceSources = [
  "perezBookFullText",
  "uisCronicas",
  "perezBookMetadata",
  "cerlalcBook",
  "educoasProject",
  "ambPiedecuesta",
];

export const piedecuestaVicenteArenasISourceKeysBySlug = {
  "la-mula-del-diablo": sharedEstampasSources,
  "la-mula-maneada": sharedRomanceSources,
  "la-llorona-del-molino": sharedEstampasSources,
  "la-mechuda": sharedRomanceSources,
  "el-fantasma-de-el-horizonte": sharedEstampasSources,
  "la-puerta-del-perdon": [
    ...sharedEstampasSources,
    "religiousTourismStudy",
  ],
  "la-sayona-del-cementerio": sharedEstampasSources,
  "el-pollo-de-las-animas": [...sharedEstampasSources, "ohchrDisability"],
};

/**
 * Resuelve las fuentes de una ficha. Con una lista —la `sourceKeys` que la
 * ficha declara— devuelve esas obras en ese orden, y cada entrada puede ser una
 * clave suelta o `{ key, summary, limitation }` con lo que esa obra dice de
 * ESE relato. Con un slug cae en el reparto heredado, que se conserva tal cual
 * para las fichas que todavía no se han rehecho.
 */
export function pickPiedecuestaVicenteArenasISources(slugOrEntries) {
  if (!Array.isArray(slugOrEntries)) return pickPiedecuestaVicenteArenasISourcesHeredadas(slugOrEntries);
  return slugOrEntries.map((entrada) => {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = piedecuestaVicenteArenasISources[key];
    if (!selected) throw new Error(`Fuente desconocida: ${JSON.stringify(entrada)}.`);
    return {
      ...selected,
      ...(typeof entrada === "object" && entrada.summary ? { summary: entrada.summary } : {}),
      ...(typeof entrada === "object" && entrada.limitation ? { limitation: entrada.limitation } : {}),
    };
  });
}

// El reparto heredado, por slug. Sólo lo usan las fichas sin `sourceKeys`.
function pickPiedecuestaVicenteArenasISourcesHeredadas(slug) {
  const keys = piedecuestaVicenteArenasISourceKeysBySlug[slug];
  if (!keys) throw new Error(`${slug}: falta selección de fuentes.`);
  return keys.map((key) => {
    const selected = piedecuestaVicenteArenasISources[key];
    if (!selected) throw new Error(`${slug}: fuente desconocida ${key}.`);
    return selected;
  });
}
