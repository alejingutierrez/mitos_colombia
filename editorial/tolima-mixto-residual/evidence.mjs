import { tolimaMixtoResidualSources } from "./sources.mjs";

export const tolimaMixtoResidualEvidenceMatrix = {
  "la-madre-agua": [
    {
      claim:
        "Devia presenta a la Madre de Agua como niña de cabellos claros, ojos grises y pies invertidos que atrae a niños hacia lagunas y ríos.",
      evidenceClass: "núcleo regional documentado",
      sourceKeys: ["villaPosseFolklore", "deviaCatalog"],
    },
    {
      claim:
        "El lenguaje de enfermedad, predisposición, bendiciones y amuletos pertenece a la mediación católica y médica del folclorólogo, no a un diagnóstico vigente.",
      evidenceClass: "límite de mediación",
      sourceKeys: ["villaPosseFolklore", "cultureOverview"],
    },
    {
      claim:
        "La mujer que pierde a su hijo es una versión posterior registrada por MODULEMA y no el origen narrado por Devia.",
      evidenceClass: "variante atribuida",
      sourceKeys: ["modulemaTolima", "spreadsheetCorpus"],
    },
    {
      claim:
        "La doncella luminosa de divulgación nacional amplifica rasgos físicos y se conserva como recepción atribuida.",
      evidenceClass: "circulación contemporánea",
      sourceKeys: ["culturaMotherWater", "cultureOverview"],
    },
    {
      claim:
        "Madre de Agua, Madremonte y Mohana comparten paisaje y atracción, pero son personajes distintos dentro del propio corpus regional.",
      evidenceClass: "desambiguación de personaje",
      sourceKeys: ["villaPosseFolklore", "culturaMohan"],
    },
    {
      claim:
        "La biografía amorosa y los nombres añadidos por la ficha heredada se retiran del relato principal al no aparecer en la fuente temprana.",
      evidenceClass: "descarte editorial",
      sourceKeys: ["villaPosseFolklore", "spreadsheetCorpus"],
    },
  ],
  "la-candileja": [
    {
      claim:
        "Devia documenta una abuela indulgente y dos nietos convertidos en tres hachones rojizos que recorren caminos, ríos, cerros y ruinas.",
      evidenceClass: "núcleo regional documentado",
      sourceKeys: ["villaPosseFolklore", "deviaCatalog"],
    },
    {
      claim:
        "Rocha Castilla ofrece una luz culpable más breve, sin desarrollar necesariamente los tres cuerpos.",
      evidenceClass: "variante atribuida",
      sourceKeys: ["villaPosseFolklore", "rochaPatronato"],
    },
    {
      claim:
        "La versión de tres llamaradas circula también como leyenda de los Llanos Orientales y no fija un origen regional exclusivo.",
      evidenceClass: "circulación contemporánea",
      sourceKeys: ["culturaCandileja", "modulemaTolima"],
    },
    {
      claim:
        "El castigo a la abuela pertenece a una pedagogía religiosa de límites y no justifica violencia educativa.",
      evidenceClass: "interpretación editorial acotada",
      sourceKeys: ["villaPosseFolklore", "colombiaRegiones"],
    },
    {
      claim:
        "Devia distingue la luz rojiza e inquieta de la Candileja de la luz serena atribuida a una guaca.",
      evidenceClass: "desambiguación de personaje",
      sourceKeys: ["villaPosseFolklore"],
    },
    {
      claim:
        "Las capas de Devia, Rocha y la recepción llanera se mantienen separadas sin fabricar una versión única.",
      evidenceClass: "límite de unificación",
      sourceKeys: [
        "villaPosseFolklore",
        "culturaCandileja",
        "spreadsheetCorpus",
      ],
    },
  ],
  "la-muelona": [
    {
      claim:
        "La entrada de Devia define a la Muelona como mujer hermosa de dentadura enorme que aparta y devora viajeros.",
      evidenceClass: "núcleo regional documentado",
      sourceKeys: ["villaPosseFolklore", "deviaCatalog"],
    },
    {
      claim:
        "La biografía de La Maga no aparece en Devia y se conserva como versión institucional posterior.",
      evidenceClass: "variante atribuida",
      sourceKeys: ["culturaMuelona", "radioNacionalMitos"],
    },
    {
      claim:
        "Muelona y Patasola comparten engaño mediante belleza, pero se distinguen por dentadura, metamorfosis y territorio.",
      evidenceClass: "desambiguación de personaje",
      sourceKeys: ["villaPosseFolklore", "modulemaTolima"],
    },
    {
      claim:
        "La Vieja Colmillona de 2004 tiene diario, hábitos y localización propios y no se fusiona con la Muelona.",
      evidenceClass: "límite de unificación",
      sourceKeys: ["espantosScan", "radioNacionalMitos"],
    },
    {
      claim:
        "La selección moral de víctimas expresa un orden de género de las fuentes y no una culpa factual de quien sufre violencia.",
      evidenceClass: "límite de mediación",
      sourceKeys: ["villaPosseFolklore", "colombiaRegiones"],
    },
    {
      claim:
        "La ficha heredada fusionaba origen, venganza e infidelidad; la revisión devuelve esos elementos a versiones atribuidas.",
      evidenceClass: "descarte editorial",
      sourceKeys: ["spreadsheetCorpus", "villaPosseFolklore"],
    },
  ],
  "el-cazador": [
    {
      claim:
        "El Cazador de Devia es un espíritu invisible reconocido por grito, perro y viento después de perseguir un venado hasta perderse.",
      evidenceClass: "núcleo regional documentado",
      sourceKeys: ["villaPosseFolklore", "deviaCatalog"],
    },
    {
      claim:
        "La salida de la capilla en Viernes Santo organiza la moral católica del relato y no convierte toda caza de subsistencia en culpa.",
      evidenceClass: "interpretación editorial acotada",
      sourceKeys: ["villaPosseFolklore", "colombiaRegiones"],
    },
    {
      claim:
        "El Cazador Fantasma visible y protector de fauna es una recepción nacional posterior.",
      evidenceClass: "variante atribuida",
      sourceKeys: ["culturaCazador", "cultureOverview"],
    },
    {
      claim:
        "La carta de Roncesvalles, la escopeta y las municiones de 2004 forman un montaje literario, no un archivo de 1960.",
      evidenceClass: "marco literario atribuido",
      sourceKeys: ["espantosScan", "espantosCatalog"],
    },
    {
      claim:
        "Río Grande no queda georreferenciado y Roncesvalles solo sirve como ancla de la reescritura literaria.",
      evidenceClass: "límite de mediación",
      sourceKeys: ["villaPosseFolklore", "espantosScan"],
    },
    {
      claim:
        "La ficha separa el espíritu invisible, el guardián ecológico y el cazador epistolar sin crear tres rutas duplicadas.",
      evidenceClass: "límite de unificación",
      sourceKeys: [
        "villaPosseFolklore",
        "culturaCazador",
        "spreadsheetCorpus",
      ],
    },
  ],
  "el-tunjo": [
    {
      claim:
        "Devia narra un bebé que llora, muestra dientes y fuego y puede convertirse en figura de oro al ser bautizado.",
      evidenceClass: "núcleo regional documentado",
      sourceKeys: ["villaPosseFolklore", "deviaCatalog"],
    },
    {
      claim:
        "Don Venancio y los Moncaleano pierden el Tunjo y su riqueza cuando los herederos interrumpen el cuidado.",
      evidenceClass: "caracterización documentada",
      sourceKeys: ["villaPosseFolklore", "spreadsheetCorpus"],
    },
    {
      claim:
        "Rocha Castilla registra Tunjitos en plural como otra forma de la misma familia folclórica.",
      evidenceClass: "variante atribuida",
      sourceKeys: ["villaPosseFolklore", "rochaPatronato"],
    },
    {
      claim:
        "El diálogo sacerdotal grabado de 2004 es una reelaboración fantástica y no un acta eclesiástica.",
      evidenceClass: "marco literario atribuido",
      sourceKeys: ["espantosScan"],
    },
    {
      claim:
        "Los tunjos arqueológicos muiscas son objetos con contextos e interpretaciones debatidas y no prueban el espanto infantil.",
      evidenceClass: "contexto arqueológico",
      sourceKeys: ["museoOroOfrenda", "tunjosGenero"],
    },
    {
      claim:
        "La atribución de los muñecos a dioses u ofrendas pijao permanece como especulación de Devia sin corroboración arqueológica en este dossier.",
      evidenceClass: "atribución histórica no corroborada",
      sourceKeys: ["villaPosseFolklore", "tunjosGenero"],
    },
  ],
  "el-guango": [
    {
      claim:
        "Devia define guango o guando como camilla de guadua cargada por cuatro personas durante entierros rurales.",
      evidenceClass: "núcleo regional documentado",
      sourceKeys: ["villaPosseFolklore", "deviaCatalog"],
    },
    {
      claim:
        "El hombre insolidario, el cuerpo pesado, el puente roto y la procesión forman una sola cadena narrativa.",
      evidenceClass: "caracterización documentada",
      sourceKeys: ["villaPosseFolklore", "modulemaTolima"],
    },
    {
      claim:
        "El convite, los relevos y la frase 'meta el hombro' muestran una infraestructura comunitaria del duelo.",
      evidenceClass: "interpretación editorial acotada",
      sourceKeys: ["villaPosseFolklore", "colombiaRegiones"],
    },
    {
      claim:
        "Guango y Guando son grafías documentadas por Devia y la URL heredada no se cambia.",
      evidenceClass: "límite de mediación",
      sourceKeys: ["villaPosseFolklore", "spreadsheetCorpus"],
    },
    {
      claim:
        "La Barbacoa del Muerto de 2004 comparte el núcleo, pero mantiene su ruta y su marco literario propios.",
      evidenceClass: "límite de unificación",
      sourceKeys: ["espantosScan", "espantosCatalog"],
    },
    {
      claim:
        "La circulación contemporánea en medios regionales no demuestra una etimología precolombina del término.",
      evidenceClass: "atribución histórica no corroborada",
      sourceKeys: ["radioNacionalMohan", "modulemaTolima"],
    },
  ],
  "el-silbador": [
    {
      claim:
        "Devia registra un pájaro gris o invisible del sur del Tolima cuyos tres silbidos anuncian desgracia o muerte familiar.",
      evidenceClass: "núcleo regional documentado",
      sourceKeys: ["villaPosseFolklore", "deviaCatalog"],
    },
    {
      claim:
        "Baltasar Cabrera y Timoteo Guarnizo aportan dos recuerdos de pérdida dentro de un diálogo literariamente mediado.",
      evidenceClass: "límite de mediación",
      sourceKeys: ["villaPosseFolklore", "spreadsheetCorpus"],
    },
    {
      claim:
        "MODULEMA mantiene al Silbador entre las figuras zoomorfas reconocidas en Ibagué.",
      evidenceClass: "circulación contemporánea",
      sourceKeys: ["modulemaTolima"],
    },
    {
      claim:
        "Dodó, Río Bello, Edilberto Triana y la masacre de 1950 forman el montaje de 2004 y no un hecho corroborado.",
      evidenceClass: "marco literario atribuido",
      sourceKeys: ["espantosScan", "espantosCatalog"],
    },
    {
      claim:
        "El Silbador no se fusiona con El Silbón parricida de los Santanderes y los Llanos.",
      evidenceClass: "desambiguación de personaje",
      sourceKeys: ["villaPosseFolklore", "radioNacionalMitos"],
    },
    {
      claim:
        "La banshee irlandesa funciona como comparación directa de presagio auditivo, sin implicar difusión histórica.",
      evidenceClass: "comparación directa",
      sourceKeys: ["duchasBanshee", "villaPosseFolklore"],
    },
  ],
  "brujas-y-duendes": [
    {
      claim:
        "Devia reúne las figuras bajo un encabezado, pero diferencia bruja-pisca voladora y duende doméstico que esconde objetos.",
      evidenceClass: "núcleo regional documentado",
      sourceKeys: ["villaPosseFolklore", "deviaCatalog"],
    },
    {
      claim:
        "El tiplecito de ocho cuerdas y el son de las vacas pertenecen al repertorio del duende.",
      evidenceClass: "caracterización documentada",
      sourceKeys: ["villaPosseFolklore", "culturaDuende"],
    },
    {
      claim:
        "Las acusaciones de pacto, adulterio y perversión son misoginia de la fuente y no identifican a mujeres reales.",
      evidenceClass: "límite de mediación",
      sourceKeys: ["villaPosseFolklore", "cultureOverview"],
    },
    {
      claim:
        "Pesadillas, convulsiones y sufrimiento no se publican como prueba de posesión sobrenatural.",
      evidenceClass: "interpretación editorial acotada",
      sourceKeys: ["villaPosseFolklore", "modulemaTolima"],
    },
    {
      claim:
        "La Bruja del Cortijo y Juana García son comparaciones bogotanas con transmisión y contextos diferentes.",
      evidenceClass: "frontera cultural",
      sourceKeys: ["culturaBrujaCortijo", "culturaJuanaGarcia"],
    },
    {
      claim:
        "La ruta combinada se conserva por fidelidad al encabezado fuente, sin reducir las dos figuras a una sola entidad maligna.",
      evidenceClass: "límite de unificación",
      sourceKeys: ["villaPosseFolklore", "spreadsheetCorpus"],
    },
  ],
  "la-tarasca": [
    {
      claim:
        "La historia detallada de mineralogista, Saulo y bestia del bosque se publica en un volumen fantástico de 2004.",
      evidenceClass: "marco literario atribuido",
      sourceKeys: ["espantosScan", "espantosCatalog"],
    },
    {
      claim:
        "Carta de 1825, compañía minera, Museo Nacional, cráneo y esqueleto son piezas del diseño narrativo y no archivos corroborados.",
      evidenceClass: "descarte editorial",
      sourceKeys: ["espantosScan", "espantosCatalog"],
    },
    {
      claim:
        "MODULEMA registra una criatura rural de Tolima y Antioquia que amenaza niños y animales, sin los personajes epistolares.",
      evidenceClass: "circulación contemporánea",
      sourceKeys: ["modulemaTolima", "colombiaRegiones"],
    },
    {
      claim:
        "La hoja del proyecto conserva la recepción colombiana, pero no puede usarse como fuente independiente del libro.",
      evidenceClass: "límite de mediación",
      sourceKeys: ["spreadsheetCorpus", "espantosScan"],
    },
    {
      claim:
        "La Tarasque provenzal es una efigie procesional europea documentada y no una versión colombiana demostrada.",
      evidenceClass: "frontera cultural",
      sourceKeys: ["unescoTarasque", "bnfTarasque"],
    },
    {
      claim:
        "El nombre compartido permite comparar bestiarios, pero la influencia colonial directa permanece sin evidencia.",
      evidenceClass: "atribución histórica no corroborada",
      sourceKeys: ["unescoTarasque", "espantosScan"],
    },
  ],
  "el-chenche": [
    {
      claim:
        "Servio, Gerardo, el hombre del río y la promesa de joyas forman el relato de 2004.",
      evidenceClass: "marco literario atribuido",
      sourceKeys: ["espantosScan", "espantosCatalog"],
    },
    {
      claim:
        "Fotograma, Teatro Miramar, testamento y joya rescatada no tienen corroboración externa y pertenecen al montaje.",
      evidenceClass: "descarte editorial",
      sourceKeys: ["espantosScan", "espantosCatalog"],
    },
    {
      claim:
        "La apariencia y acción fluvial se parecen al Mohán, que sí posee múltiples registros regionales en el Tolima.",
      evidenceClass: "hipótesis editorial",
      sourceKeys: ["villaPosseFolklore", "culturaMohan", "radioNacionalMohan"],
    },
    {
      claim:
        "Devia menciona un Mohán de Chenche, pero no demuestra una entidad autónoma llamada El Chenche.",
      evidenceClass: "atribución histórica no corroborada",
      sourceKeys: ["villaPosseFolklore"],
    },
    {
      claim:
        "Chenche es también territorio Pijao vivo y el cuento no se atribuye a toda la comunidad.",
      evidenceClass: "contexto territorial contemporáneo",
      sourceKeys: ["minculturaPijao", "onicPijao"],
    },
    {
      claim:
        "La URL se preserva como cuento literario con procedencia explícita y no como testimonio histórico.",
      evidenceClass: "reclasificación historiográfica",
      sourceKeys: ["spreadsheetCorpus", "espantosCatalog"],
    },
  ],
  "dioses-lares": [
    {
      claim:
        "'Dioses lares' es el rótulo comparativo usado por Mariano Izquierdo Gallo en 1956 y no un nombre indígena documentado.",
      evidenceClass: "reclasificación historiográfica",
      sourceKeys: ["flacsoVolume3", "izquierdoCatalog", "britishMuseumLares"],
    },
    {
      claim:
        "El pasaje atribuye a Pijao, Coyaima y Natagaima protectores obtenidos mediante muertes sin identificar una fuente suficiente para toda la escena.",
      evidenceClass: "atribución histórica no corroborada",
      sourceKeys: ["flacsoVolume3", "izquierdoCatalog"],
    },
    {
      claim:
        "La piedra y la sombra pertenecen al fragmento Lache de Boyacá y no a una variante del sur del Tolima.",
      evidenceClass: "frontera cultural",
      sourceKeys: ["flacsoVolume3"],
    },
    {
      claim:
        "La analogía cristiana y el lenguaje deshumanizante del autor no se tratan como voz transparente de los pueblos descritos.",
      evidenceClass: "límite de mediación",
      sourceKeys: ["flacsoVolume3", "coyaimaNatagaimaEthnography"],
    },
    {
      claim:
        "Pijao, Coyaima y Natagaima son comunidades contemporáneas organizadas y no restos de un panteón extinto.",
      evidenceClass: "contexto territorial contemporáneo",
      sourceKeys: ["minculturaPijao", "onicPijao", "onicCrit"],
    },
    {
      claim:
        "La arqueología regional documenta múltiples sociedades y prácticas funerarias sin probar una religión única llamada lares.",
      evidenceClass: "contexto arqueológico",
      sourceKeys: ["tolimaArchaeology", "flacsoVolume3"],
    },
  ],
};

const allowedClasses = new Set([
  "núcleo regional documentado",
  "caracterización documentada",
  "variante atribuida",
  "marco literario atribuido",
  "límite de mediación",
  "desambiguación de personaje",
  "descarte editorial",
  "interpretación editorial acotada",
  "circulación contemporánea",
  "atribución histórica no corroborada",
  "frontera cultural",
  "reclasificación historiográfica",
  "hipótesis editorial",
  "límite de unificación",
  "contexto territorial contemporáneo",
  "contexto arqueológico",
  "comparación directa",
]);

export function assertTolimaMixtoResidualEvidenceMatrix() {
  for (const [slug, claims] of Object.entries(
    tolimaMixtoResidualEvidenceMatrix,
  )) {
    if (claims.length !== 6) throw new Error(`${slug}: se esperaban seis decisiones.`);
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
        if (!tolimaMixtoResidualSources[key]) {
          throw new Error(`${slug}: fuente desconocida ${key}.`);
        }
      }
    }
  }
  return true;
}
