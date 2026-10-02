import {
  santanderClassicFolkloreSourceKeysBySlug,
  santanderClassicFolkloreSources,
} from "./sources.mjs";

export const santanderClassicFolkloreEvidenceMatrix = {
  "la-piedra-del-muerto": [
    {
      claim:
        "Arias sitúa una roca basáltica semejante a un cuerpo amortajado junto al Mogoticos, cerca de la quebrada del Bosque, en la vía Mogotes-San Gil.",
      evidenceClass: "núcleo documentado en compilación folclórica",
      sourceKeys: ["villaPosseFullText", "elLibroTotalArias"],
    },
    {
      claim:
        "El propietario cruel, el viajero atacado, la maldición, la tormenta y la petrificación pertenecen a la leyenda publicada, no a una crónica factual.",
      evidenceClass: "atribución narrativa y límite histórico",
      sourceKeys: ["villaPosseFullText", "santanderLiteratureStudy"],
    },
    {
      claim:
        "La memoria oral continúa viva en el territorio mogotano, pero las voces actuales consultadas no repiten esta leyenda concreta.",
      evidenceClass: "memoria contemporánea con frontera",
      sourceKeys: ["cauchosLivingMemory", "mogoticosTerritory"],
    },
    {
      claim:
        "Baucis y Filemón y la esposa de Lot son paralelos temáticos de hospitalidad, catástrofe y transformación, sin demostrar influencia.",
      evidenceClass: "comparación directa limitada",
      sourceKeys: ["ovidBaucis", "genesisLot"],
    },
  ],
  "el-trapiche-ardiendo": [
    {
      claim:
        "Arias enmarca la visión en El Volcán: una familia desgrana maíz, observa una luz lejana y don Crisanto la identifica como el trapiche desaparecido de Nazario.",
      evidenceClass: "memoria infantil publicada",
      sourceKeys: ["villaPosseFullText", "elLibroTotalArias"],
    },
    {
      claim:
        "El propio Arias declara que relatos semejantes circulaban con variantes, autor imprecisable y función moralizadora.",
      evidenceClass: "límite de transmisión explícito",
      sourceKeys: [
        "villaPosseFullText",
        "santanderLiteratureStudy",
        "regionalLibrariesStudy",
      ],
    },
    {
      claim:
        "La Barbacoa antecede al episodio y La Mancarita aparece después como tema de conversación; ninguna es parte del trapiche de Nazario.",
      evidenceClass: "desfusión de relatos",
      sourceKeys: ["villaPosseFullText", "cauchosLivingMemory"],
    },
    {
      claim:
        "El rico y Lázaro y A Christmas Carol permiten comparar indiferencia y advertencia espectral, con desenlaces distintos.",
      evidenceClass: "comparación directa limitada",
      sourceKeys: ["lukeRichMan", "dickensChristmasCarol"],
    },
  ],
  "lagunas-encantadas": [
    {
      claim:
        "La obra enumera variantes separadas de Bucaramanga, Galán, Socorro, Girón, Bolívar, Mogotes, San Andrés y Los Santos.",
      evidenceClass: "ciclo regional documentado",
      sourceKeys: ["villaPosseFullText", "elLibroTotalArias"],
    },
    {
      claim:
        "La laguna del monte procede de un diálogo de Peregrinación de Alpha que Arias reproduce y no de un único narrador del ciclo completo.",
      evidenceClass: "variante histórica atribuida",
      sourceKeys: ["villaPosseFullText", "ancizarProfile"],
    },
    {
      claim:
        "Una investigación contemporánea en Vetas documenta lagunas bravas como agentes de lluvia y cuidado, pero no prueba continuidad con todos los municipios de Arias.",
      evidenceClass: "memoria contemporánea localizada",
      sourceKeys: ["vetasLagunasStudy", "santanderLiteratureStudy"],
    },
    {
      claim:
        "Guatavita y Titicaca son historias específicas de agua sagrada y ofrenda; no autorizan una cosmología indígena continental única.",
      evidenceClass: "comparación arqueológica y mítica limitada",
      sourceKeys: ["museoDelOroMuisca", "unescoTiticaca"],
    },
  ],
  "lo-que-ensenan-las-cuevas": [
    {
      claim:
        "Arias presenta una serie: El Colmenero, Cenicero, Calentana, Biato, Cueva del Indio y Cachalú, no una aventura continua.",
      evidenceClass: "ciclo regional documentado",
      sourceKeys: ["villaPosseFullText", "elLibroTotalArias"],
    },
    {
      claim:
        "El Colmenero fue puesto por escrito por un maestro y explica una forma rocosa visible mediante una narración de castigo religioso.",
      evidenceClass: "variante con cadena de transmisión identificada",
      sourceKeys: ["villaPosseFullText", "elLibroTotalArias"],
    },
    {
      claim:
        "Los restos humanos, cerámicos y textiles en cuevas pertenecen al patrimonio arqueológico y no deben tratarse como botín ni invitación a excavar.",
      evidenceClass: "límite patrimonial contemporáneo",
      sourceKeys: [
        "uisGuaneArchaeology",
        "icanhArchaeologyFaq",
        "unabChicamochaArchaeology",
      ],
    },
    {
      claim:
        "Alí Babá y Midas iluminan la fórmula de apertura y el oro peligroso, sin demostrar que las consejas santandereanas deriven de esas obras.",
      evidenceClass: "comparación directa limitada",
      sourceKeys: ["aliBaba", "ovidMidas"],
    },
  ],
  "el-cacique-salomon": [
    {
      claim:
        "El título El cacique Salomón pertenece a Otero D’Costa y reúne una viñeta de Sugamuxi con otra de Andrés Guatesique.",
      evidenceClass: "obra literaria publicada",
      sourceKeys: ["villaPosseFullText", "oteroUpbReprint"],
    },
    {
      claim:
        "Salomón funciona como alusión a la sabiduría judicial y no como nombre propio de Sugamuxi, Guatesique o un tercer cacique.",
      evidenceClass: "corrección de identidad y título",
      sourceKeys: ["villaPosseFullText", "kingsSolomon"],
    },
    {
      claim:
        "La historia regional contextualiza a Sugamuxi y los cacicazgos guane, pero no confirma el río, Pirinoche, la deuda ni la sentencia de Otero.",
      evidenceClass: "contexto histórico con frontera",
      sourceKeys: ["uptcSugamuxi", "uisGuaneHistory", "oteroCollection"],
    },
    {
      claim:
        "La jurisdicción racial, el castigo corporal y el vocabulario despectivo son elementos de la sátira de 1936 y no una doctrina indígena.",
      evidenceClass: "límite colonial y ético",
      sourceKeys: ["villaPosseFullText", "oteroUpbReprint"],
    },
    {
      claim:
        "El juicio de Salomón y La hija lista del campesino son paralelos de agudeza ante el poder, no fuentes genealógicas del cuento.",
      evidenceClass: "comparación directa limitada",
      sourceKeys: ["kingsSolomon", "grimmCleverDaughter"],
    },
  ],
  "tal-para-cual": [
    {
      claim:
        "Tal para cual es una obra de Otero D’Costa publicada en Leyendas en 1936 y ambientada en San Juan de Girón.",
      evidenceClass: "cuento literario publicado",
      sourceKeys: ["villaPosseFullText", "oteroCatalog"],
    },
    {
      claim:
        "Anselmo promete medio cacaotal si Cirilo asume sus pecados pasados y futuros; una escritura sella el trato y Anselmo luego se niega a anularlo.",
      evidenceClass: "núcleo narrativo documentado",
      sourceKeys: ["villaPosseFullText", "oteroCollection"],
    },
    {
      claim:
        "La asociación entre bocio y falta de inteligencia es un prejuicio cómico del texto y no una relación médica válida.",
      evidenceClass: "límite de estigma corporal",
      sourceKeys: ["villaPosseFullText", "medlineGoiter"],
    },
    {
      claim:
        "El rito del chivo expiatorio y Fausto permiten comparar transferencia de culpa y pacto escrito, con propósitos y agentes diferentes.",
      evidenceClass: "comparación directa limitada",
      sourceKeys: ["leviticusScapegoat", "goetheFaust"],
    },
    {
      claim:
        "Girón y el río de Oro respaldan el marco territorial, pero no la existencia histórica de los compadres o su contrato.",
      evidenceClass: "territorio con frontera biográfica",
      sourceKeys: ["gironOfficialHistory", "villaPosseFullText"],
    },
  ],
};

export function assertSantanderClassicFolkloreEvidenceMatrix() {
  for (const [slug, rows] of Object.entries(
    santanderClassicFolkloreEvidenceMatrix,
  )) {
    if (!rows.length) throw new Error(`${slug}: matriz vacía.`);
    const allowed = new Set(
      santanderClassicFolkloreSourceKeysBySlug[slug],
    );
    for (const row of rows) {
      if (!row.claim || !row.evidenceClass || !row.sourceKeys.length) {
        throw new Error(`${slug}: fila de evidencia incompleta.`);
      }
      for (const key of row.sourceKeys) {
        if (!allowed.has(key) || !santanderClassicFolkloreSources[key]) {
          throw new Error(`${slug}: evidencia fuera del expediente: ${key}.`);
        }
      }
    }
  }
  return true;
}
