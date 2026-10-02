import {
  amazonasMixtoResidualSourceKeysBySlug,
  amazonasMixtoResidualSources,
} from "./sources.mjs";

export const amazonasMixtoResidualEvidenceMatrix = {
  "el-bufeo": [
    {
      claim:
        "La encuesta de 1975 conserva voces infantiles y cinco adultos identificados con versiones distintas sobre juego, transformación, dientes, perros y sombrero.",
      evidenceClass: "transcripciones directas plurales",
      sourceKeys: ["caro1975", "rodriguez1981", "galante2018"],
    },
    {
      claim:
        "Raimundo Curico distingue el delfín que vio de la transformación que escuchó a los mayores.",
      evidenceClass: "frontera entre observación y tradición",
      sourceKeys: ["caro1975", "omachaDolphins", "contratiempo"],
    },
    {
      claim:
        "La seducción no se romantiza porque el motivo puede encubrir coerción, abuso o paternidad no reconocida.",
      evidenceClass: "lectura crítica de género",
      sourceKeys: ["caro1975", "scieloBufeo", "galante2018"],
    },
  ],
  "el-cotomachaco": [
    {
      claim:
        "Gladys de Bolívar y Manuel Curitima describen una serpiente de dos cabezas que imita al mono coto.",
      evidenceClass: "núcleo testimonial directo",
      sourceKeys: ["caro1975", "rodriguez1981", "galante2018"],
    },
    {
      claim:
        "Perú, cananguchal, cincuenta metros y escopeta abandonada pertenecen a testimonios específicos, no a datos zoológicos.",
      evidenceClass: "variante y escala narrada",
      sourceKeys: ["caro1975", "contratiempo", "vocesperu"],
    },
    {
      claim:
        "La amphisbaena y el ser tragador son comparaciones formales que no completan la versión leticiana.",
      evidenceClass: "comparación con frontera",
      sourceKeys: ["plinyAmphisbaena", "genesisJonah", "caro1975"],
    },
  ],
  "el-chuy-achaque": [
    {
      claim:
        "El inventario institucional conserva pies desiguales, imitación y riesgo de extravío para niños.",
      evidenceClass: "resumen institucional mediado",
      sourceKeys: ["abcBibliotecario", "rodriguez1981", "contratiempo"],
    },
    {
      claim:
        "Las descripciones peruanas de Chullachaqui se usan para reconocer variación regional, no para atribuir todos sus rasgos a Leticia.",
      evidenceClass: "variante transfronteriza",
      sourceKeys: ["mineduAmazonicos", "bicentenarioChullachaqui", "hugoNino"],
    },
    {
      claim:
        "La ruta breve no duplica el episodio de Ahuanari y falso maguaré escrito por Hugo Niño.",
      evidenceClass: "decisión de no fusión",
      sourceKeys: ["abcBibliotecario", "hugoNino", "grimmHansel"],
    },
  ],
  "madre-de-playa": [
    {
      claim:
        "La atribución heredada a Angélica Lucas y el corpus leticiano sostienen playa, guitarra, medianoche y cuerpo mitad pez con acceso limitado al original.",
      evidenceClass: "atribución heredada con duda",
      sourceKeys: ["rodriguez1981", "contratiempo", "galante2018"],
    },
    {
      claim:
        "La escena pertenece a playa fluvial amazónica y no autoriza océano, costa, runas o biografía trágica.",
      evidenceClass: "corrección geográfica y exclusión",
      sourceKeys: ["rodriguez1981", "abcBibliotecario", "vocesperu"],
    },
    {
      claim:
        "Sirenas y Mami Wata son comparaciones de voz y agua, no identidades alternativas de Madre de Playa.",
      evidenceClass: "comparación con frontera",
      sourceKeys: ["homerOdyssey", "smithsonianMamiWata", "mineduYacuruna"],
    },
  ],
  "la-cobra-grande": [
    {
      claim:
        "Pedro Roque narra a Honorato y su hermana como personas encantadas en serpientes; él la vence, pierde un ojo y busca desencantarse.",
      evidenceClass: "núcleo testimonial citado",
      sourceKeys: ["rodriguez1981", "galante2018", "caro1975"],
    },
    {
      claim:
        "Las versiones brasileñas de Honorato o Cobra Norato cambian nacimiento, nombre de la hermana y procedimiento de desencantamiento.",
      evidenceClass: "variantes transfronterizas",
      sourceKeys: ["ufamHonorato", "multiRioBoiuna", "butantanSnakes"],
    },
    {
      claim:
        "Escape del Vientre Serpiente y José Sangam fueron registros separados y no una biografía continua de Honorato.",
      evidenceClass: "desfusión del inventario",
      sourceKeys: ["galante2018", "genesisJonah", "rodriguez1981"],
    },
  ],
  petapeta: [
    {
      claim:
        "Milton Jesús Pinto Linares firma la versión donde Petapeta lleva semillas por mandato de Yoí y Jau las roba disfrazado.",
      evidenceClass: "voz comunitaria atribuida",
      sourceKeys: ["airumakuchi", "icanhTicuna", "goulard2009"],
    },
    {
      claim:
        "La canasta de trabajadores mágicos no aparece en las versiones consultadas y se reemplaza por material de siembra.",
      evidenceClass: "corrección del núcleo narrativo",
      sourceKeys: ["airumakuchi", "omachaRaices", "visionPetapeta"],
    },
    {
      claim:
        "El nombre Petapeta mantiene uso contemporáneo en un territorio multiétnico sin volver idénticas todas las tradiciones.",
      evidenceClass: "continuidad contemporánea con límite",
      sourceKeys: ["visionPetapeta", "omachaRaices", "azcaita"],
    },
  ],
  "la-curupira": [
    {
      claim:
        "Fuentes brasileñas documentan pies invertidos y protección del monte como rasgos difundidos, no universales.",
      evidenceClass: "historia regional impresa",
      sourceKeys: ["butantanCurupira", "cascudoCurupira", "mecCurupira"],
    },
    {
      claim:
        "Relatos orales contemporáneos de Boa Vista pueden omitir los pies invertidos, demostrando variación local.",
      evidenceClass: "variación oral contemporánea",
      sourceKeys: ["curupiraOral2025", "butantanCurupira", "cascudoCurupira"],
    },
    {
      claim:
        "La recepción leticiana se mantiene mixta y no inventa personajes, avistamientos ni una doctrina ecológica panamazónica.",
      evidenceClass: "límite de atribución fronteriza",
      sourceKeys: ["caro1975", "rodriguez1981", "mineduAmazonicos"],
    },
  ],
  "ngutapa-y-chimuiyae": [
    {
      claim:
        "The Tukuna conserva una odisea identificable de Chimuya-e con monos, tortuga, mariposa Morpho, libélula y regreso familiar.",
      evidenceClass: "relato etnográfico traducido",
      sourceKeys: ["nimuendaju1952", "goulard2009", "icanhTicuna"],
    },
    {
      claim:
        "Ngutapa y los hijos nacidos de las rodillas pertenecen a otro ciclo Ticuna y se retiran de esta ruta.",
      evidenceClass: "desfusión de ciclos",
      sourceKeys: ["azcaita", "goulard2009", "nimuendaju1952"],
    },
    {
      claim:
        "Cimidyue, Chimuiyaé y Chimuya-e son grafías de una transmisión mediada; el título corrige protagonista sin romper el slug.",
      evidenceClass: "corrección de identidad y título",
      sourceKeys: ["nimuendaju1952", "goulard2009", "vocesperu"],
    },
  ],
  yacuruna: [
    {
      claim:
        "La versión de Iquitos conserva figura humana, mundo subacuático, caimán negro y boa.",
      evidenceClass: "versión pedagógica localizada",
      sourceKeys: ["mineduYacuruna", "vocesperu", "hugoNino"],
    },
    {
      claim:
        "La evidencia no permite atribuir la ruta a un pueblo colombiano ni definir a Yacuruna como dios universal del agua.",
      evidenceClass: "duda de atribución",
      sourceKeys: ["mineduYacuruna", "hugoNino", "contratiempo"],
    },
    {
      claim:
        "La prohibición menstrual de la fuente escolar se omite por su carga de estigma y victimización.",
      evidenceClass: "exclusión ética",
      sourceKeys: ["mineduYacuruna", "smithsonianMamiWata", "vocesperu"],
    },
  ],
  "chuya-chaqui": [
    {
      claim:
        "Hugo Niño firma una reescritura con Ahuanari, cazadores, tormenta y falso maguaré.",
      evidenceClass: "obra literaria primaria",
      sourceKeys: ["hugoNino", "vocesperu", "contratiempo"],
    },
    {
      claim:
        "Los repertorios peruanos permiten reconocer a Chullachaqui, pero no convierten la versión de Niño en transcripción oral literal.",
      evidenceClass: "mediación y contraste regional",
      sourceKeys: ["mineduAmazonicos", "bicentenarioChullachaqui", "hugoNino"],
    },
    {
      claim:
        "La ruta se relaciona con El Chuyachaque breve sin fusionarse porque conserva argumento, localización y forma de autor propios.",
      evidenceClass: "decisión de no fusión",
      sourceKeys: ["hugoNino", "abcBibliotecario", "grimmHansel"],
    },
  ],
  "el-hijo-de-tuhixana": [
    {
      claim:
        "La cadena conocida es una reescritura de Fernando Solarte clasificada académicamente como cultura Vaupés.",
      evidenceClass: "literatura mediada y clasificación",
      sourceKeys: ["solartelibro", "utpSolarte", "vocesperu"],
    },
    {
      claim:
        "Tronco flotante, balsa, deriva, alimento en la palma y retorno forman el núcleo de la obra.",
      evidenceClass: "núcleo literario",
      sourceKeys: ["solartelibro", "utpSolarte", "contratiempo"],
    },
    {
      claim:
        "Vaupés no identifica por sí solo una comunidad; Tuhixana tampoco se demuestra como etnónimo.",
      evidenceClass: "límite taxonómico",
      sourceKeys: ["utpSolarte", "tanimucaProfile", "vocesperu"],
    },
  ],
  "el-descubrimiento-del-agua-y-los-peces": [
    {
      claim:
        "La Tía aparece clasificada Tainimuka en el análisis de la obra de Fernando Solarte.",
      evidenceClass: "corrección de atribución mediada",
      sourceKeys: ["solartelibro", "utpSolarte", "tanimucaProfile"],
    },
    {
      claim:
        "Cuatro recipientes, joven-pájaro, agua, peces y río liberado forman el núcleo de la reescritura.",
      evidenceClass: "núcleo literario",
      sourceKeys: ["solartelibro", "utpSolarte", "genesisWaters"],
    },
    {
      claim:
        "El ciclo atribuido de Guaraná Tanimuka sobre el Apaporis es contextual y no se fusiona con La Tía.",
      evidenceClass: "separación de versiones",
      sourceKeys: ["ufaina1975", "tanimucaProfile", "prometheus"],
    },
  ],
};

export function assertAmazonasMixtoResidualEvidenceMatrix() {
  for (const [slug, rows] of Object.entries(
    amazonasMixtoResidualEvidenceMatrix,
  )) {
    if (rows.length < 3) throw new Error(`${slug}: matriz incompleta.`);
    const allowed = new Set(amazonasMixtoResidualSourceKeysBySlug[slug]);
    for (const row of rows) {
      if (!row.claim || !row.evidenceClass || !row.sourceKeys.length) {
        throw new Error(`${slug}: fila de evidencia incompleta.`);
      }
      for (const key of row.sourceKeys) {
        if (!allowed.has(key) || !amazonasMixtoResidualSources[key]) {
          throw new Error(`${slug}: evidencia fuera del expediente: ${key}.`);
        }
      }
    }
  }
  return true;
}
