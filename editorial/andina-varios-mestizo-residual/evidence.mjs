import { andinaVariosMestizoResidualSources } from "./sources.mjs";

export const andinaVariosMestizoResidualEvidenceMatrix = {
  "el-anima-sola": [
    {
      claim:
        "La nota de Marquetalia, su fecha interna de 1940 y Jairo Ocampo pertenecen al dispositivo narrativo publicado en 2004.",
      evidenceClass: "marco literario atribuido",
      sourceKeys: ["espantosScan", "openLibrary", "biblioValleCatalog"],
    },
    {
      claim:
        "El culto colombiano a almas anónimas o abandonadas existe más allá del libro, sin autenticar su episodio particular.",
      evidenceClass: "contexto antropológico",
      sourceKeys: ["losonczyAnima"],
    },
    {
      claim:
        "La doctrina católica distingue purificación y sufragios por difuntos de una entidad popular que concede favores.",
      evidenceClass: "distinción doctrinal",
      sourceKeys: ["vaticanPurgatory", "losonczyAnima"],
    },
    {
      claim:
        "El cuento de Carrasquilla comparte nombre y vocabulario funerario, pero no es la nota de Marquetalia.",
      evidenceClass: "desambiguación literaria",
      sourceKeys: ["carrasquillaAnima", "espantosScan"],
    },
    {
      claim:
        "Celestina, la versión masculina bogotana y una cadena devocional uniforme se retiran como certezas biográficas.",
      evidenceClass: "descarte editorial",
      sourceKeys: ["espantosScan", "losonczyAnima", "vaticanPurgatory"],
    },
  ],
  "la-vieja-colmillona": [
    {
      claim:
        "La Colmillona documentada visita fogones, toma comida entre las brasas y puede retirarse sin atacar.",
      evidenceClass: "núcleo regional documentado",
      sourceKeys: ["espantosScan", "ocampoAntioquia", "uniagustinianaColmillona"],
    },
    {
      claim:
        "Agustín Moreno, Justino, las fechas de agosto y la hacienda forman el diario literario de la edición de 2004.",
      evidenceClass: "marco literario atribuido",
      sourceKeys: ["espantosScan", "biblioValleCatalog", "redAcademicaCatalog"],
    },
    {
      claim:
        "Cabello largo, manos peludas, uñas, colmillos y resistencia al fuego pertenecen a las descripciones de la edición consultada.",
      evidenceClass: "caracterización documentada",
      sourceKeys: ["espantosScan", "ocampoAntioquia"],
    },
    {
      claim:
        "La mención académica y la microficha sostienen circulación del nombre, pero no autentican el supuesto diario.",
      evidenceClass: "circulación con límite",
      sourceKeys: ["uniagustinianaColmillona", "cinepColmillona"],
    },
    {
      claim:
        "Colmillona, Muelona y Cabellona quedan separadas por función y rasgo corporal.",
      evidenceClass: "desambiguación de personaje",
      sourceKeys: ["espantosScan", "mosqueraCatalog", "ocampoAntioquia"],
    },
  ],
  "la-nina-de-la-carta": [
    {
      claim:
        "La edición de 2004 fecha el supuesto informe el 1 de noviembre de 1963 y no en 1965.",
      evidenceClass: "corrección de fuente primaria",
      sourceKeys: ["espantosScan", "openLibrary"],
    },
    {
      claim:
        "Jesusita Bautista, el sindicato, el médico y la materialización pertenecen a un informe ocultista literario no corroborado.",
      evidenceClass: "marco literario atribuido",
      sourceKeys: ["espantosScan", "biblioValleCatalog", "redAcademicaCatalog"],
    },
    {
      claim:
        "La ficha del libro describe una pasajera de blanco que desaparece en carreteras de Antioquia y el Eje Cafetero.",
      evidenceClass: "núcleo regional documentado",
      sourceKeys: ["espantosScan", "mosqueraCatalog"],
    },
    {
      claim:
        "La niña que entrega en una casa una carta de mal agüero es una reelaboración literaria distinguible de la pasajera vial.",
      evidenceClass: "variante literaria documentada",
      sourceKeys: ["diazGranadosCatalog", "utpNina"],
    },
    {
      claim:
        "La versión sonora que usa la carta para localizar un cuerpo se registra como recepción reciente y no como origen.",
      evidenceClass: "recepción contemporánea",
      sourceKeys: ["ivooxNina"],
    },
    {
      claim:
        "Las tres formas conservan soportes y argumentos propios y no se convierten en expediente histórico único.",
      evidenceClass: "límite de unificación",
      sourceKeys: ["espantosScan", "utpNina", "ivooxNina"],
    },
  ],
  "la-barbacoa-del-muerto": [
    {
      claim:
        "La barbacoa o guando es una camilla funeraria de guadua convertida en procesión nocturna de cuatro cargadores.",
      evidenceClass: "núcleo regional documentado",
      sourceKeys: ["espantosScan", "unabGuando", "libertadoresGuando"],
    },
    {
      claim:
        "Anselmo Santamaría y Sara Tustra pertenecen al testimonio en trance publicado por el bestiario en 2004.",
      evidenceClass: "marco literario atribuido",
      sourceKeys: ["espantosScan", "biblioValleCatalog"],
    },
    {
      claim:
        "El facsímil permite corregir Sara Trista por Sara Tustra sin presentar a la médium como persona histórica corroborada.",
      evidenceClass: "corrección de fuente primaria",
      sourceKeys: ["espantosScan"],
    },
    {
      claim:
        "La fila 399 del Excel conserva la variante de El Calzo, la peregrinación a Chiquinquirá y cuatro portadores sin cabeza.",
      evidenceClass: "variante de corpus atribuida",
      sourceKeys: ["spreadsheetBarbacoa"],
    },
    {
      claim:
        "Las versiones del Guando explican la carga mediante falta de solidaridad, peso imposible o caída del cuerpo al río.",
      evidenceClass: "variante regional documentada",
      sourceKeys: ["unabGuando", "libertadoresGuando"],
    },
    {
      claim:
        "Remedios acredita circulación local de la barbacoa y Los Meneses sin aportar una versión completa.",
      evidenceClass: "circulación con límite",
      sourceKeys: ["remediosMunicipal"],
    },
  ],
  "los-meneses": [
    {
      claim:
        "Los Meneses son un grupo de muchachos de ropa antigua que pide y come monedas en caminos rurales.",
      evidenceClass: "núcleo regional documentado",
      sourceKeys: ["espantosScan", "ocampoAntioquia"],
    },
    {
      claim:
        "La ficha les atribuye curación del cansancio, alegría duradera y monedas antiguas como recompensa a la generosidad.",
      evidenceClass: "caracterización documentada",
      sourceKeys: ["espantosScan"],
    },
    {
      claim:
        "El vagabundo de Anserma es narrador de una nota escondida tras un cartel de circo, no el sujeto mítico.",
      evidenceClass: "marco literario atribuido",
      sourceKeys: ["espantosScan", "biblioValleCatalog", "redAcademicaCatalog"],
    },
    {
      claim:
        "El documento municipal de Remedios demuestra circulación del nombre sin confirmar poderes ni argumento.",
      evidenceClass: "circulación con límite",
      sourceKeys: ["remediosMunicipal"],
    },
    {
      claim:
        "Los duendes son comparación funcional por apariencia infantil y travesuras, pero no identidad del grupo.",
      evidenceClass: "comparación funcional",
      sourceKeys: ["raeDuende", "caroDuendes", "espantosScan"],
    },
    {
      claim:
        "No se inventa un origen familiar, una muerte previa ni una explicación etimológica para el apellido Meneses.",
      evidenceClass: "descarte editorial",
      sourceKeys: ["espantosScan", "remediosMunicipal"],
    },
  ],
};

const allowedClasses = new Set([
  "marco literario atribuido",
  "contexto antropológico",
  "distinción doctrinal",
  "desambiguación literaria",
  "descarte editorial",
  "núcleo regional documentado",
  "caracterización documentada",
  "circulación con límite",
  "desambiguación de personaje",
  "corrección de fuente primaria",
  "variante literaria documentada",
  "recepción contemporánea",
  "límite de unificación",
  "variante de corpus atribuida",
  "variante regional documentada",
  "comparación funcional",
]);

export function assertAndinaVariosMestizoResidualEvidenceMatrix() {
  for (const [slug, claims] of Object.entries(
    andinaVariosMestizoResidualEvidenceMatrix,
  )) {
    if (claims.length < 5) throw new Error(`${slug}: faltan decisiones.`);
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
        if (!andinaVariosMestizoResidualSources[key]) {
          throw new Error(`${slug}: fuente desconocida ${key}.`);
        }
      }
    }
  }
  return true;
}
