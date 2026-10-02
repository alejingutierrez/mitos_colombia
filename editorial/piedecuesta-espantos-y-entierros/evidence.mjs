import {
  piedecuestaEspantosSourceKeysBySlug,
  piedecuestaEspantosSources,
} from "./sources.mjs";

export const piedecuestaEspantosEvidenceMatrix = {
  "la-hilandera": [
    {
      claim:
        "Valenzuela narra a Oliva dentro de un taller de fique, el hallazgo de una criatura fallecida, su prisión y sonidos posteriores de torno y llanto.",
      evidenceClass: "relato literario atribuido con escena testimonial",
      sourceKeys: ["valenzuelaFullText", "perezBookFullText"],
    },
    {
      claim:
        "Fique, hilazas y empaques pertenecen a la historia productiva de Piedecuesta.",
      evidenceClass: "contexto económico independiente",
      sourceKeys: ["ambPiedecuesta", "piedecuestaIndustryStudy"],
    },
    {
      claim:
        "La Máncara de San Francisco es otro capítulo del corpus y no una segunda versión de Oliva.",
      evidenceClass: "desfusión editorial",
      sourceKeys: [
        "valenzuelaFullText",
        "perezBookFullText",
        "educoasProject",
      ],
    },
  ],
  "el-doctor-galeacer": [
    {
      claim:
        "La versión publicada conserva pacto, transformación en caballo negro y sonidos de perro, gallo y gato en veredas de Loma Baja.",
      evidenceClass: "leyenda oral compilada",
      sourceKeys: ["valenzuelaFullText", "perezBookFullText"],
    },
    {
      claim:
        "José de la Cruz cree que el caballo derriba una cerca de arrayanes, pero al amanecer la encuentra intacta.",
      evidenceClass: "episodio narrativo directo",
      sourceKeys: ["valenzuelaFullText", "perezBookFullText"],
    },
    {
      claim:
        "Curaciones, control del tiempo, criaturas obedientes y estrellas en la piel no aparecen en la cadena consultada.",
      evidenceClass: "retiro de expansión sintética",
      sourceKeys: [
        "valenzuelaFullText",
        "perezBookFullText",
        "perezBookMetadata",
      ],
    },
  ],
  "el-carriazo-de-vereda-san-isidro": [
    {
      claim:
        "Carriazo puede nombrar un punto, un espanto en forma de chivo o un conde legendario asociado con tres cargas de oro.",
      evidenceClass: "variantes internas de una compilación",
      sourceKeys: ["valenzuelaFullText", "perezBookFullText"],
    },
    {
      claim:
        "Las pruebas son enfrentar al Carriazo, una cascabel y un toro bajo lunas llenas; Silvio, Reyes y Carmelo ocupan episodios distintos.",
      evidenceClass: "secuencia narrativa directa",
      sourceKeys: ["valenzuelaFullText", "educoasProject"],
    },
    {
      claim:
        "La cartografía actual ubica San Isidro dentro de Piedecuesta, pero no demuestra al conde, el roble ni el entierro.",
      evidenceClass: "contexto territorial con límite",
      sourceKeys: ["municipalTerritoryPlan", "ambPiedecuesta"],
    },
  ],
  "el-reventon-de-jacobo": [
    {
      claim:
        "Jacobo entra a una casa abandonada, asa carne y escucha a un animal que lo llama por su nombre desde una ventana.",
      evidenceClass: "relato literario atribuido",
      sourceKeys: ["valenzuelaFullText", "perezBookFullText"],
    },
    {
      claim:
        "Un hombre alto le entrega huesos, Jacobo encuentra monedas, queda ciego y adquiere tierras según la versión compilada.",
      evidenceClass: "núcleo narrativo publicado",
      sourceKeys: ["valenzuelaFullText", "educoasProject"],
    },
    {
      claim:
        "La obra no prueba un entierro histórico ni que una fuerza sobrenatural causara la ceguera.",
      evidenceClass: "límite de atribución",
      sourceKeys: [
        "valenzuelaFullText",
        "perezBookMetadata",
        "ambPiedecuesta",
      ],
    },
  ],
  "la-cueva-de-la-pisca": [
    {
      claim:
        "En Colombia, pisca significa hembra del pisco o pavo, no una especie mítica.",
      evidenceClass: "aclaración lexicográfica",
      sourceKeys: ["asalePisca", "valenzuelaFullText"],
    },
    {
      claim:
        "La pava y sus polluelos amarillos salen de la cueva en luna llena y señalan un supuesto tesoro.",
      evidenceClass: "leyenda compensatoria compilada",
      sourceKeys: ["valenzuelaFullText", "perezBookFullText"],
    },
    {
      claim:
        "Blanquiscal pertenece al territorio rural, pero ni la cueva ni el tesoro quedan fijados por cartografía pública.",
      evidenceClass: "contexto territorial con límite",
      sourceKeys: ["municipalTerritoryPlan", "educoasProject"],
    },
  ],
  "la-monedita-en-la-alcancia": [
    {
      claim:
        "Valenzuela atribuye a Alberto Díaz el hallazgo infantil de pequeños huesos y los sonidos posteriores de llanto y moneda.",
      evidenceClass: "testimonio publicado de segunda mano",
      sourceKeys: ["valenzuelaFullText", "perezBookFullText"],
    },
    {
      claim:
        "La luz, la guaca hallada tras la venta y el efecto de la noticia sobre José Vicente aparecen como recuerdos y rumores familiares.",
      evidenceClass: "memoria familiar no corroborada",
      sourceKeys: ["valenzuelaFullText", "educoasProject"],
    },
    {
      claim:
        "No hay expediente forense que permita afirmar identidad, causa de muerte, ocultamiento por honra ni causalidad sobrenatural.",
      evidenceClass: "límite ético y probatorio",
      sourceKeys: [
        "valenzuelaFullText",
        "perezBookMetadata",
        "piedecuestaIndustryStudy",
      ],
    },
  ],
  "la-diabla-castigadora": [
    {
      claim:
        "La fuente revela que Rebeca se vistió como Tenorio, esperó a Maribella y la agredió mientras el esposo dormía.",
      evidenceClass: "desenlace humano dentro del relato",
      sourceKeys: ["valenzuelaFullText", "perezBookFullText"],
    },
    {
      claim:
        "El nombre de diabla surge después como rumor del barrio Villanueva y no designa una entidad sobrenatural.",
      evidenceClass: "transformación de violencia en leyenda",
      sourceKeys: ["valenzuelaFullText", "educoasProject"],
    },
    {
      claim:
        "La agresión no puede presentarse como defensa legítima del honor ni como reparación de una infidelidad.",
      evidenceClass: "corrección ética",
      sourceKeys: ["upbFamilyViolence", "perezBookFullText"],
    },
  ],
  "la-lampara-de-petroleo": [
    {
      claim:
        "La fuente atribuye la aparición al periodo de violencia y sitúa su recorrido entre el Cáscaro, La Urgua y el río Umpalá.",
      evidenceClass: "memoria legendaria territorial",
      sourceKeys: ["valenzuelaFullText", "santanderViolenceStudy"],
    },
    {
      claim:
        "Una familia observa bajo un aguacero una luz amarillenta que no se apaga y otros moradores dicen verla río abajo.",
      evidenceClass: "cadena testimonial compilada",
      sourceKeys: ["valenzuelaFullText", "perezBookFullText"],
    },
    {
      claim:
        "No se identifica una víctima, un alma, un delito concreto o la finalidad de la luz.",
      evidenceClass: "límite contra personificación inventada",
      sourceKeys: [
        "valenzuelaFullText",
        "educoasProject",
        "ambPiedecuesta",
      ],
    },
  ],
};

export function assertPiedecuestaEspantosEvidenceMatrix() {
  for (const [slug, rows] of Object.entries(
    piedecuestaEspantosEvidenceMatrix,
  )) {
    if (!rows.length) throw new Error(`${slug}: matriz vacía.`);
    const allowed = new Set(piedecuestaEspantosSourceKeysBySlug[slug]);
    for (const row of rows) {
      if (!row.claim || !row.evidenceClass || !row.sourceKeys.length) {
        throw new Error(`${slug}: fila de evidencia incompleta.`);
      }
      for (const key of row.sourceKeys) {
        if (!allowed.has(key) || !piedecuestaEspantosSources[key]) {
          throw new Error(`${slug}: evidencia fuera del expediente: ${key}.`);
        }
      }
    }
  }
  return true;
}
