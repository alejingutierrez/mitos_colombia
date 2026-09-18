import { tolimaMestizoResidualSources } from "./sources.mjs";

export const tolimaMestizoResidualEvidenceMatrix = {
  "la-patasola": [
    {
      claim:
        "Misael Devia describe una Patasola metamórfica que puede aparecer como mujer, perra negra o vaca negra en montañas apartadas.",
      evidenceClass: "núcleo regional documentado",
      sourceKeys: ["villaPosseFolklore", "deviaCatalog"],
    },
    {
      claim:
        "La amputación con hacha y la quema sobre tusas pertenecen a una explicación punitiva publicada por Devia, no a un hecho histórico comprobado.",
      evidenceClass: "variante atribuida con límite",
      sourceKeys: ["villaPosseFolklore", "modulemaTolima"],
    },
    {
      claim:
        "Aserríos, trochas, maíz, animales domésticos y fuego funcionan como marcas de frontera en esa versión sin convertirla automáticamente en una guardiana ecológica moderna.",
      evidenceClass: "interpretación editorial acotada",
      sourceKeys: ["villaPosseFolklore", "menMunicipio"],
    },
    {
      claim:
        "La grabación de Esteban y la violencia ampliada de 2004 son recursos de una reelaboración literaria, no un testimonio independiente.",
      evidenceClass: "marco literario atribuido",
      sourceKeys: ["espantosScan"],
    },
    {
      claim:
        "La infidelidad de la fila 819 se conserva como variante interna sin atribuirle prioridad ni origen regional demostrado.",
      evidenceClass: "variante de corpus atribuida",
      sourceKeys: ["spreadsheetCorpus"],
    },
    {
      claim:
        "Julián Bueno, la mariposa raptora y la procedencia en Riosucio se retiran porque no aparecen en las ocho fuentes seleccionadas.",
      evidenceClass: "descarte editorial",
      sourceKeys: [
        "villaPosseFolklore",
        "spreadsheetCorpus",
        "cultureOverview",
      ],
    },
  ],
  "la-patasola-mixto": [
    {
      claim:
        "El relato de Ñor Mica está atribuido a Ricardo Rocha G. dentro de Prehistoria y folclor del Tolima de Cesáreo Rocha Castilla.",
      evidenceClass: "núcleo regional documentado",
      sourceKeys: ["villaPosseFolklore", "rochaPatronato"],
    },
    {
      claim:
        "Nicolás Caicedo, la quebrada de los Jabalcones, la fiesta de San Juan, Juanito y el naranjo pertenecen a esa pieza narrada y no a la ficha general de Devia.",
      evidenceClass: "caracterización documentada",
      sourceKeys: ["villaPosseFolklore", "deviaCatalog"],
    },
    {
      claim:
        "La oración del monte aleja a la aparición y continúa circulando en materiales educativos con atribución a Rocha Castilla.",
      evidenceClass: "recepción pedagógica atribuida",
      sourceKeys: ["villaPosseFolklore", "menMunicipio", "modulemaTolima"],
    },
    {
      claim:
        "El diálogo conserva mediación escrita, paternalismo y tensión racial y de clase, por lo que no se presenta como voz comunitaria transparente.",
      evidenceClass: "límite de mediación",
      sourceKeys: ["villaPosseFolklore", "rochaPatronato"],
    },
    {
      claim:
        "Las filas 431 a 435 del Excel son fragmentos consecutivos del mismo relato y se integran en una sola ruta.",
      evidenceClass: "unificación de fragmentos",
      sourceKeys: ["spreadsheetCorpus", "villaPosseFolklore"],
    },
    {
      claim:
        "La ruta se diferencia de la Patasola de Devia por narrador, escena, función de la oración y cierre social, sin inventar otra criatura.",
      evidenceClass: "límite de unificación",
      sourceKeys: [
        "villaPosseFolklore",
        "deviaCatalog",
        "modulemaTolima",
      ],
    },
  ],
  "el-poira": [
    {
      claim:
        "Rocha Castilla sitúa al Poira en Magdalena y Saldaña y lo define como una configuración del Mohán.",
      evidenceClass: "núcleo regional documentado",
      sourceKeys: ["villaPosseFolklore", "rochaPatronato"],
    },
    {
      claim:
        "Devia documenta múltiples formas locales del Mohán en Ambalema, Piedras, Coyaima, Chenche y otros puntos del Tolima.",
      evidenceClass: "variación territorial documentada",
      sourceKeys: ["villaPosseFolklore", "modulemaTolima"],
    },
    {
      claim:
        "La persecución de jóvenes y el regreso como madres se atribuyen al lenguaje de 1968 y se leen como rapto y coerción, no como romance.",
      evidenceClass: "relectura ética de fuente",
      sourceKeys: ["villaPosseFolklore", "elTiempo1995"],
    },
    {
      claim:
        "Fuentes institucionales y regionales mantienen el nombre Poira como faceta traviesa o enamoradiza del Mohán y añaden música, tabaco y juego.",
      evidenceClass: "circulación contemporánea",
      sourceKeys: ["culturaBogotaMohan", "despiertaTolima"],
    },
    {
      claim:
        "Los cargos de curandero, sacerdote, brujo y oráculo de los Pijao son una atribución repetida por recopiladores, no una institución histórica demostrada por este expediente.",
      evidenceClass: "atribución histórica no corroborada",
      sourceKeys: ["villaPosseFolklore", "elTiempo1995", "modulemaTolima"],
    },
    {
      claim:
        "La función lateral de curar males del Duende y la Mula Retinta quedan separadas del núcleo acuático del Poira.",
      evidenceClass: "desambiguación de personaje",
      sourceKeys: ["villaPosseFolklore", "menMunicipio"],
    },
  ],
  "el-sombreron": [
    {
      claim:
        "La memoria de Lérida conserva un caminante del Gran Tolima con sombrero hasta las pantorrillas que persigue a borrachos y jóvenes fumadores.",
      evidenceClass: "núcleo regional documentado",
      sourceKeys: ["leridaSombreron", "modulemaTolima"],
    },
    {
      claim:
        "Caballo negro, perros, cadenas y persecución de trasnochadores pertenecen a variantes colombianas de circulación más amplia.",
      evidenceClass: "variante regional documentada",
      sourceKeys: [
        "menMunicipio",
        "colombiaAprendeSombreron",
        "radioNacionalSombreron",
      ],
    },
    {
      claim:
        "La solicitud a Alcohólicos Anónimos y la cadena ofrecida como prueba forman el dispositivo literario de la edición de 2004.",
      evidenceClass: "marco literario atribuido",
      sourceKeys: ["espantosScan"],
    },
    {
      claim:
        "El Sombrerón guatemalteco es un hombre diminuto que canta con guitarra y no debe fundirse con el espanto caminante o jinete colombiano.",
      evidenceClass: "desambiguación internacional",
      sourceKeys: ["guatemalaMcd", "laChicaSombreron"],
    },
    {
      claim:
        "La joven recluida por serenatas deriva de la familia guatemalteca y se retira del núcleo tolimense.",
      evidenceClass: "descarte editorial",
      sourceKeys: ["guatemalaMcd", "menMunicipio", "leridaSombreron"],
    },
    {
      claim:
        "La ruta conserva un solo nombre y atribuye caminante, jinete y montaje de 2004 a soportes distintos sin fabricar una biografía única.",
      evidenceClass: "límite de unificación",
      sourceKeys: [
        "espantosScan",
        "leridaSombreron",
        "radioNacionalSombreron",
      ],
    },
  ],
};

const allowedClasses = new Set([
  "núcleo regional documentado",
  "variante atribuida con límite",
  "interpretación editorial acotada",
  "marco literario atribuido",
  "variante de corpus atribuida",
  "descarte editorial",
  "caracterización documentada",
  "recepción pedagógica atribuida",
  "límite de mediación",
  "unificación de fragmentos",
  "límite de unificación",
  "variación territorial documentada",
  "relectura ética de fuente",
  "circulación contemporánea",
  "atribución histórica no corroborada",
  "desambiguación de personaje",
  "variante regional documentada",
  "desambiguación internacional",
]);

export function assertTolimaMestizoResidualEvidenceMatrix() {
  for (const [slug, claims] of Object.entries(
    tolimaMestizoResidualEvidenceMatrix,
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
        if (!tolimaMestizoResidualSources[key]) {
          throw new Error(`${slug}: fuente desconocida ${key}.`);
        }
      }
    }
  }
  return true;
}
