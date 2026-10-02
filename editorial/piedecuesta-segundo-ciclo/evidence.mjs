import {
  piedecuestaSecondCycleSourceKeysBySlug,
  piedecuestaSecondCycleSources,
} from "./sources.mjs";

export const piedecuestaSecondCycleEvidenceMatrix = {
  "la-bruja-silbona": [
    {
      claim:
        "Valenzuela describe a la Bruja Silbona como un gran chulo negro que silba y persigue jóvenes en calles oscuras de Piedecuesta.",
      evidenceClass: "leyenda urbana compilada",
      sourceKeys: ["valenzuelaFullText", "perezBookFullText"],
    },
    {
      claim:
        "El episodio individual se atribuye a Tadeo Camacho y su madre Encarnación, sin entrevista o registro independiente disponible.",
      evidenceClass: "testimonio publicado de segunda mano",
      sourceKeys: ["valenzuelaFullText", "educoasProject"],
    },
    {
      claim:
        "El estudio la clasifica como leyenda negra y la distingue de El Silbón rural.",
      evidenceClass: "clasificación y desfusión",
      sourceKeys: ["perezBookFullText", "perezBookMetadata"],
    },
  ],
  "la-mancarita": [
    {
      claim:
        "La fuente titula el relato La Máncara de San Francisco y la sitúa alrededor de una peña en esa vereda.",
      evidenceClass: "restauración de título y territorio",
      sourceKeys: ["valenzuelaFullText", "perezBookFullText"],
    },
    {
      claim:
        "La figura tiene variantes físicas incompatibles y se relaciona con desapariciones de niños dentro del relato.",
      evidenceClass: "variantes internas atribuidas",
      sourceKeys: ["valenzuelaFullText", "perezBookFullText"],
    },
    {
      claim:
        "No hay respaldo para fusionarla con Oliva, afirmar existencia en el siglo XVIII o ubicar una entrada visitable.",
      evidenceClass: "desfusión y límite histórico",
      sourceKeys: [
        "valenzuelaFullText",
        "perezBookMetadata",
        "municipalTerritoryPlan",
      ],
    },
  ],
  "cuento-fantastico": [
    {
      claim:
        "El capítulo narra una persecución que termina cuando el protagonista corta simbólicamente las aguas del río de Oro con una navaja.",
      evidenceClass: "cuento literario publicado",
      sourceKeys: ["valenzuelaFullText", "perezBookFullText"],
    },
    {
      claim:
        "No se ofrecen narrador oral, fecha, nombre del protagonista ni cadena testimonial para el episodio.",
      evidenceClass: "límite de género y atribución",
      sourceKeys: ["valenzuelaFullText", "perezBookMetadata"],
    },
    {
      claim:
        "La ubicación urbana y el río aportan escenario local, no prueba histórica del dominio de las aguas.",
      evidenceClass: "contexto territorial con límite",
      sourceKeys: ["ambPiedecuesta", "educoasProject"],
    },
  ],
  "la-campana-del-diablo": [
    {
      claim:
        "Una campana de plata colgada de un caracolí comienza a sonar sin que nadie la toque, según la compilación.",
      evidenceClass: "leyenda negra compilada",
      sourceKeys: ["valenzuelaFullText", "perezBookFullText"],
    },
    {
      claim:
        "Remigio tira piedras, huye del sonido y es atropellado por un vehículo.",
      evidenceClass: "secuencia narrativa directa",
      sourceKeys: ["valenzuelaFullText", "educoasProject"],
    },
    {
      claim:
        "La fuente propone tanto robo como intervención del Diablo para la desaparición; no prueba causalidad sobrenatural del accidente.",
      evidenceClass: "alternativas y límite causal",
      sourceKeys: [
        "valenzuelaFullText",
        "perezBookMetadata",
        "ambPiedecuesta",
      ],
    },
  ],
  "el-diablo-de-umpala": [
    {
      claim:
        "Félix María Rueda se presenta como comerciante y explica el origen humano de su apodo.",
      evidenceClass: "retrato oral atribuido",
      sourceKeys: ["valenzuelaFullText", "perezBookFullText"],
    },
    {
      claim:
        "Las chispas nocturnas procedían, según Félix, de las herraduras de su caballo sobre calles empedradas.",
      evidenceClass: "desenlace racional interno",
      sourceKeys: ["valenzuelaFullText", "educoasProject"],
    },
    {
      claim:
        "El estudio lo clasifica como leyenda histórica, pero no verifica edad, domicilio o cada anécdota biográfica.",
      evidenceClass: "clasificación con límite biográfico",
      sourceKeys: [
        "perezBookFullText",
        "perezBookMetadata",
        "municipalTerritoryPlan",
      ],
    },
  ],
  "la-cueva-del-diablo": [
    {
      claim:
        "Mateo, arriero entre San Rafael y Piedecuesta, dice encontrar una figura que ríe cerca de Chamarral o Bejucadas.",
      evidenceClass: "experiencia atribuida compilada",
      sourceKeys: ["valenzuelaFullText", "perezBookFullText"],
    },
    {
      claim:
        "Los árboles parecen caer cuando la figura baja la ladera, pero al mirar atrás el paisaje está intacto.",
      evidenceClass: "núcleo de percepción reversible",
      sourceKeys: ["valenzuelaFullText", "educoasProject"],
    },
    {
      claim:
        "El título no basta para afirmar una caverna física; el relato ubica el corredor de modo aproximado entre Piedecuesta y Los Santos.",
      evidenceClass: "límite toponímico y territorial",
      sourceKeys: [
        "valenzuelaFullText",
        "municipalTerritoryPlan",
        "ambPiedecuesta",
      ],
    },
  ],
  "nueva-version-de-la-luz-del-limonal": [
    {
      claim:
        "Valenzuela atribuye a Isabel Lizcano una versión recibida de su padre sobre un sacerdote y una luz en Río Hato.",
      evidenceClass: "memoria familiar publicada",
      sourceKeys: ["valenzuelaFullText", "perezBookFullText"],
    },
    {
      claim:
        "La escena incluye oración, liberación de una figura infantil y confinamiento de la luz.",
      evidenceClass: "secuencia religiosa atribuida",
      sourceKeys: ["valenzuelaFullText", "educoasProject"],
    },
    {
      claim:
        "Fechas, identidad del sacerdote, muerte infantil y eficacia del rito no cuentan con corroboración independiente.",
      evidenceClass: "límite histórico y sensible",
      sourceKeys: [
        "valenzuelaFullText",
        "perezBookMetadata",
        "ambPiedecuesta",
      ],
    },
  ],
  "el-griton": [
    {
      claim:
        "El Gritón se oye entre Pescadero, El Cáscaro, La Urgua y Lugencio y responde de cerca a quien imita su grito.",
      evidenceClass: "leyenda ecoambiental compilada",
      sourceKeys: ["valenzuelaFullText", "perezBookFullText"],
    },
    {
      claim:
        "La fuente lo asocia con Cuaresma, temor de personas y perros y desaparición posterior con cambios sociales.",
      evidenceClass: "memoria territorial atribuida",
      sourceKeys: ["valenzuelaFullText", "educoasProject"],
    },
    {
      claim:
        "El estudio relaciona estos relatos con ruidos y fuerzas del viento; no lo identifica con El Silbón.",
      evidenceClass: "lectura comparativa y desfusión",
      sourceKeys: [
        "perezBookFullText",
        "perezBookMetadata",
        "municipalTerritoryPlan",
      ],
    },
  ],
};

export function assertPiedecuestaSecondCycleEvidenceMatrix() {
  for (const [slug, rows] of Object.entries(
    piedecuestaSecondCycleEvidenceMatrix,
  )) {
    if (!rows.length) throw new Error(`${slug}: matriz vacía.`);
    const allowed = new Set(piedecuestaSecondCycleSourceKeysBySlug[slug]);
    for (const row of rows) {
      if (!row.claim || !row.evidenceClass || !row.sourceKeys.length) {
        throw new Error(`${slug}: fila de evidencia incompleta.`);
      }
      for (const key of row.sourceKeys) {
        if (!allowed.has(key) || !piedecuestaSecondCycleSources[key]) {
          throw new Error(`${slug}: evidencia fuera del expediente: ${key}.`);
        }
      }
    }
  }
  return true;
}
