import { variosMixtoFinalSources } from "./sources.mjs";

export const variosMixtoFinalEvidenceMatrix = {
  "el-cura-sin-cabeza": [
    {
      claim:
        "Una versión pastusa sitúa la aparición nocturna en el templo de Santiago sin identificar a un sacerdote histórico.",
      evidenceClass: "circulación local documentada",
      sourceKeys: ["diarioSurCura", "udenarTransmediaCura"],
    },
    {
      claim:
        "La versión citada por la Universidad de Nariño explica la condena por misas gregorianas pagadas y no celebradas.",
      evidenceClass: "variante bibliográfica atribuida",
      sourceKeys: ["udenarRural"],
    },
    {
      claim:
        "Misa espectral, culpa clerical y muerte injusta son explicaciones distintas que circulan en ciudades coloniales colombianas.",
      evidenceClass: "variación comparada",
      sourceKeys: ["rinconCura", "uisOralidadRural"],
    },
    {
      claim:
        "Bogotá y Medellín mantienen al personaje mediante turismo nocturno y representación festiva contemporánea.",
      evidenceClass: "recepción pública documentada",
      sourceKeys: ["bogotaTourCura", "elColombianoParade"],
    },
    {
      claim:
        "Mariano Narváez, el Amazonas, la monja calavera y una biografía transcontinental no aparecen en las fuentes seleccionadas.",
      evidenceClass: "descarte editorial",
      sourceKeys: ["udenarRural", "diarioSurCura", "rinconCura"],
    },
    {
      claim:
        "La ruta se transfiere a Andina > Nariño > Mestizo y conserva como centro la versión pastusa sin negar circulación nacional.",
      evidenceClass: "decisión editorial",
      sourceKeys: ["diarioSurCura", "udenarTransmediaCura", "cultureOverview"],
    },
  ],
  "el-jinete-negro": [
    {
      claim:
        "Radio Nacional registra en Cundinamarca y Boyacá un jinete negro que aparece, desaparece y persigue por caminos.",
      evidenceClass: "variante regional documentada",
      sourceKeys: ["radioNacionalSombreron", "colombiaAprendeSombreron"],
    },
    {
      claim:
        "Caballo, ropa negra, perros y cadenas pertenecen a formas ecuestres colombianas del Sombrerón.",
      evidenceClass: "relación narrativa documentada",
      sourceKeys: ["menMunicipio", "espantosScan", "radioNacionalSombreron"],
    },
    {
      claim:
        "Lérida conserva un Sombrerón caminante y sin caballo, por lo que la forma ecuestre es variante y no definición total.",
      evidenceClass: "frontera narrativa documentada",
      sourceKeys: ["leridaSombreron", "modulemaTolima"],
    },
    {
      claim:
        "La carta a Alcohólicos Anónimos de 2004 es un montaje de literatura fantástica y no un expediente verificable.",
      evidenceClass: "marco literario atribuido",
      sourceKeys: ["espantosScan"],
    },
    {
      claim:
        "El Sombrerón guatemalteco diminuto y músico pertenece a otra tradición pese al nombre compartido.",
      evidenceClass: "desambiguación internacional",
      sourceKeys: ["guatemalaMcd", "laChicaSombreron"],
    },
    {
      claim:
        "Don Roque, Minas del Silencio, el cigarrillo y la deuda minera se retiran por falta de procedencia independiente.",
      evidenceClass: "descarte editorial",
      sourceKeys: ["espantosScan", "menMunicipio", "radioNacionalSombreron"],
    },
    {
      claim:
        "La URL se conserva en Andina > Mestizo para explicar la variante ecuestre sin duplicar el expediente del Sombrerón tolimense.",
      evidenceClass: "decisión editorial",
      sourceKeys: ["radioNacionalSombreron", "leridaSombreron"],
    },
  ],
  "el-mandingas": [
    {
      claim:
        "El Atlas Lingüístico-Etnográfico de Colombia registra mandingas como equivalente de demonio.",
      evidenceClass: "uso lexical documentado",
      sourceKeys: ["caroCuervoMandinga"],
    },
    {
      claim:
        "Mandinga es también el nombre histórico de pueblos de África occidental y circuló como clasificación colonial de personas africanas.",
      evidenceClass: "contexto histórico documentado",
      sourceKeys: ["caroCuervoMandinga", "unalAfricanArchive"],
    },
    {
      claim:
        "El maldingas y Las mandingas constan como títulos en repertorios colombianos, pero las fichas no publican sus argumentos.",
      evidenceClass: "circulación bibliográfica documentada",
      sourceKeys: ["udeaOralitura", "uscoCatalog"],
    },
    {
      claim:
        "El Carnaval de Barranquilla combina máscaras, tambores, sátira y herencias africanas, europeas y amerindias.",
      evidenceClass: "contexto patrimonial documentado",
      sourceKeys: ["unescoCarnival", "unescoAfricanCaribbean"],
    },
    {
      claim:
        "El plan de salvaguardia exige inventario, campo y portadores para atribuir expresiones concretas del carnaval.",
      evidenceClass: "límite metodológico institucional",
      sourceKeys: ["unescoCarnivalSafeguarding", "minculturaOralidad"],
    },
    {
      claim:
        "Pamba Ahumé, Lina, Santiago y el duelo de tamboras no aparecen en las ocho fuentes y se retiran.",
      evidenceClass: "descarte editorial",
      sourceKeys: ["caroCuervoMandinga", "udeaOralitura", "unescoCarnival"],
    },
    {
      claim:
        "La ficha explica la acepción demoníaca sin reproducir la equiparación colonial entre un pueblo africano y el mal.",
      evidenceClass: "corrección ética documentada",
      sourceKeys: ["caroCuervoMandinga", "unalAfricanArchive", "unescoAfricanCaribbean"],
    },
  ],
  "el-mohan": [
    {
      claim:
        "Devia registra múltiples formas locales del Mohán en Ambalema, Piedras, Coyaima, Chenche y otros lugares del Tolima.",
      evidenceClass: "variación territorial documentada",
      sourceKeys: ["villaPosseFolklore", "deviaCatalog"],
    },
    {
      claim:
        "Rocha Castilla relaciona al Poira con el Mohán de los ríos Magdalena y Saldaña.",
      evidenceClass: "relación narrativa documentada",
      sourceKeys: ["villaPosseFolklore", "rochaPatronato"],
    },
    {
      claim:
        "Pesca, música, tabaco, moyas y transformación continúan en síntesis institucionales y memorias regionales.",
      evidenceClass: "circulación regional documentada",
      sourceKeys: ["culturaMohan", "radioNacionalMohan", "despiertaTolima"],
    },
    {
      claim:
        "La encuesta de Ibagué y la cartilla patrimonial prueban reconocimiento contemporáneo, no antigüedad de cada rasgo.",
      evidenceClass: "recepción pública documentada",
      sourceKeys: ["modulemaTolima", "minculturaTolima"],
    },
    {
      claim:
        "Las persecuciones y raptos se nombran como coerción y no como romance consentido.",
      evidenceClass: "relectura ética de fuente",
      sourceKeys: ["villaPosseFolklore", "culturaMohan"],
    },
    {
      claim:
        "Sacerdote, oráculo y gobernante pijao quedan como atribuciones de recopiladores, no institución histórica probada.",
      evidenceClass: "límite documental",
      sourceKeys: ["villaPosseFolklore", "modulemaTolima"],
    },
    {
      claim:
        "La ruta general del Mohán conserva separados los expedientes focales del Poira y del Chenche.",
      evidenceClass: "decisión editorial",
      sourceKeys: ["villaPosseFolklore", "culturaMohan", "radioNacionalMohan"],
    },
  ],
  "la-llorona": [
    {
      claim:
        "El módulo de Colombia Aprende sitúa su análisis en Purificación durante guerras civiles y reproduce una madre despojada de tres hijos.",
      evidenceClass: "versión pedagógica documentada",
      sourceKeys: ["colombiaAprendeLlorona"],
    },
    {
      claim:
        "El comentario moral de infidelidad contradice el relato posterior de violencia conyugal dentro del mismo módulo.",
      evidenceClass: "contradicción editorial documentada",
      sourceKeys: ["colombiaAprendeLlorona"],
    },
    {
      claim:
        "La Alcaldía de San Martín publica una variante llanera en la que la mujer ahoga a un bebé.",
      evidenceClass: "variante regional documentada",
      sourceKeys: ["sanMartinLlorona"],
    },
    {
      claim:
        "Tolima, Lérida y Chicamocha mantienen el lamento, la búsqueda de hijos y el paisaje de agua con diferencias locales.",
      evidenceClass: "circulación regional documentada",
      sourceKeys: ["minculturaTolima", "tolimaLerida", "uisChicamochaLlorona"],
    },
    {
      claim:
        "Cihuacóatl es una comparación mesoamericana y no un origen único demostrado para todas las Lloronas.",
      evidenceClass: "frontera cultural documentada",
      sourceKeys: ["colombiaAprendeGuide22", "udenarLlorona"],
    },
    {
      claim:
        "La ficha distingue madre despojada, comentario de adulterio y versiones filicidas sin fabricar una biografía continental.",
      evidenceClass: "límite de unificación",
      sourceKeys: ["colombiaAprendeLlorona", "sanMartinLlorona", "cultureOverview"],
    },
    {
      claim:
        "Beatriz, Arturo Escobar Uribe y una identidad indígena-mestiza fija se retiran por falta de procedencia en el expediente.",
      evidenceClass: "descarte editorial",
      sourceKeys: ["colombiaAprendeLlorona", "minculturaTolima", "udenarLlorona"],
    },
  ],
  "la-madremonte": [
    {
      claim:
        "La tradición Coyaima describe una protectora del bosque que sanciona la extracción excesiva de leña.",
      evidenceClass: "contexto cultural documentado",
      sourceKeys: ["coyaimaTradition"],
    },
    {
      claim:
        "El registro de Tumaco vincula a la Madremonte con lluvia, viento, animales, cazadores y leñadores.",
      evidenceClass: "variante regional documentada",
      sourceKeys: ["minculturaMadremontePacifico"],
    },
    {
      claim:
        "Tolima conserva a Madremonte entre sus mujeres de espanto y relatos de bosque y agua.",
      evidenceClass: "circulación regional documentada",
      sourceKeys: ["minculturaWomenFright", "minculturaTolima"],
    },
    {
      claim:
        "La Biblioteca Nacional atribuye una versión de Caldas a María del Carmen Cardona y a su transmisión local.",
      evidenceClass: "voz narradora atribuida",
      sourceKeys: ["bncMadremonte"],
    },
    {
      claim:
        "Mujer musgosa, dama verde, zarza móvil, tempestades y nacimientos de agua son descripciones campesinas heterogéneas.",
      evidenceClass: "variación comparada",
      sourceKeys: ["esapMadremonte", "cultureOverview"],
    },
    {
      claim:
        "La escultura indigenista prueba recepción artística del siglo XX y no una apariencia etnográfica ancestral.",
      evidenceClass: "recepción artística documentada",
      sourceKeys: ["itmMadremonte"],
    },
    {
      claim:
        "Gerardo, creación con residuos de ángeles, cueva de niños y equivalencia automática con Dabeiba se retiran.",
      evidenceClass: "descarte editorial",
      sourceKeys: ["coyaimaTradition", "minculturaMadremontePacifico", "esapMadremonte"],
    },
  ],
  "los-duendes": [
    {
      claim:
        "El corpus de Devia incluye duendes con travesuras domésticas, música y explicaciones cristianas mediadas por el folclorólogo.",
      evidenceClass: "núcleo regional documentado",
      sourceKeys: ["villaPosseFolklore", "deviaCatalog"],
    },
    {
      claim:
        "La ficha institucional conserva objetos movidos, terrones y el tiple desafinado como recurso para alejar al duende.",
      evidenceClass: "variante institucional documentada",
      sourceKeys: ["culturaDuende"],
    },
    {
      claim:
        "Mitos del Huila cataloga una pista Los duendes, pero la reseña no transcribe su argumento.",
      evidenceClass: "circulación bibliográfica documentada",
      sourceKeys: ["udeaOralitura"],
    },
    {
      claim:
        "Nariño, Piedecuesta, Ibagué y Lérida muestran descripciones y recepciones regionales que no forman una biografía única.",
      evidenceClass: "circulación regional documentada",
      sourceKeys: ["udenarRural", "uisPiedecuestaOral", "modulemaTolima", "tolimaLerida"],
    },
    {
      claim:
        "Ángeles caídos, niños sin bautizar y seres invisibles son explicaciones religiosas distintas, no una cosmogonía uniforme.",
      evidenceClass: "frontera narrativa documentada",
      sourceKeys: ["villaPosseFolklore", "culturaDuende", "udenarRural"],
    },
    {
      claim:
        "Claudia Patricia, sus lesiones y el supuesto expediente de Clínica Minerva solo aparecen en la expansión heredada y se retiran.",
      evidenceClass: "descarte editorial",
      sourceKeys: ["villaPosseFolklore", "udeaOralitura", "tolimaLerida"],
    },
    {
      claim:
        "La ruta se traslada a Tolima > Mestizo y no presenta daño físico o diagnóstico como hecho sobrenatural.",
      evidenceClass: "decisión editorial",
      sourceKeys: ["villaPosseFolklore", "modulemaTolima", "tolimaLerida"],
    },
  ],
};

const allowedClasses = new Set([
  "circulación local documentada",
  "variante bibliográfica atribuida",
  "variación comparada",
  "recepción pública documentada",
  "descarte editorial",
  "decisión editorial",
  "variante regional documentada",
  "relación narrativa documentada",
  "frontera narrativa documentada",
  "marco literario atribuido",
  "desambiguación internacional",
  "uso lexical documentado",
  "contexto histórico documentado",
  "circulación bibliográfica documentada",
  "contexto patrimonial documentado",
  "límite metodológico institucional",
  "corrección ética documentada",
  "variación territorial documentada",
  "circulación regional documentada",
  "relectura ética de fuente",
  "límite documental",
  "versión pedagógica documentada",
  "contradicción editorial documentada",
  "frontera cultural documentada",
  "límite de unificación",
  "contexto cultural documentado",
  "voz narradora atribuida",
  "recepción artística documentada",
  "núcleo regional documentado",
  "variante institucional documentada",
]);

export function assertVariosMixtoFinalEvidenceMatrix() {
  for (const [slug, claims] of Object.entries(variosMixtoFinalEvidenceMatrix)) {
    if (claims.length < 5) throw new Error(`${slug}: matriz insuficiente.`);
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
        if (!variosMixtoFinalSources[key]) {
          throw new Error(`${slug}: fuente desconocida ${key}.`);
        }
      }
    }
  }
  return true;
}
