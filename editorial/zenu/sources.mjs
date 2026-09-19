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

export const zenuSources = {
  onicLeyOrigen: source({
    title: "Documento madre: Leyes de origen de los pueblos indígenas de Colombia",
    author:
      "Consejo Mayor de Gobierno y Sistema de Monitoreo Territorial de la ONIC",
    year: 2023,
    type: "documento colectivo indígena e institucional",
    url: "https://smt-onic.com/media/pdf/DOCUMENTO_MADRE_Leyes_de_Origen_vf_SMT-ONIC.pdf",
    summary:
      "La sección Zenú registra a Ixitoco, Mexión y Manexka, el poblamiento por sus descendientes y el relato de Tarra, Mexión y el sombrero como orden del universo.",
    limitation:
      "La síntesis remite a un Plan de Vida y a Ordenando el Universo Zenú; no se presenta como transcripción literal ni como única versión de todos los cabildos.",
  }),
  communityCreation: source({
    title: "Mitos indígenas Zenúes: el mito de la creación Zenú",
    author:
      "Recopilación educativa del resguardo indígena de San Andrés de Sotavento",
    year: 2020,
    type: "material comunitario y pedagógico de tradición oral",
    url: "https://tribuzenucolombia.wordpress.com/wp-content/uploads/2020/07/mitos_indigenas_zenues.pdf",
    summary:
      "Publica la secuencia de oscuridad y frío, Mexión y Manexca, sus descendientes, Ninha como Sol, Thi como Luna y la primera noche.",
    limitation:
      "No identifica narradores individuales ni fecha del registro. La adaptación omite material sacrificial y no generaliza todas sus afirmaciones al presente.",
  }),
  drexler2002: source({
    title:
      "¡En los montes, sí, aquí no!: cosmología y medicina tradicional de los Zenúes",
    author:
      "Josef Drexler, con familias, médicos tradicionales y narradores del resguardo",
    year: 2002,
    type: "etnografía extensa con testimonios y contexto atribuidos",
    url: "https://digitalrepository.unm.edu/abya_yala/222/",
    summary:
      "Documenta la organización de tres niveles del cosmos, el caimán de oro bajo el resguardo, montes con agua viva y relaciones entre territorio y curación.",
    limitation:
      "Incluye conocimientos medicinales, mortuorios y rituales sensibles. Solo se usan pasajes narrativos públicos necesarios y no instrucciones operativas.",
  }),
  banrepZenu: source({
    title: "Zenú: la gente y el oro en las llanuras del Caribe",
    author: "Museo del Oro, Banco de la República",
    type: "síntesis curatorial con bibliografía arqueológica y etnohistórica",
    url: "https://enciclopedia.banrepcultural.org/index.php?title=Zen%C3%BA",
    summary:
      "Explica la larga tradición hidráulica, el universo como tejido, la fauna acuática, los señoríos del Gran Zenú y la figura ancestral de Zenufana.",
    limitation:
      "La evidencia arqueológica no prueba por sí sola episodios orales actuales; se usa para contexto histórico, material y territorial.",
  }),
  defensoria2022: source({
    title:
      "Comunidades indígenas y afrocolombianas de San Andrés de Sotavento, Tuchín y San Antero",
    author: "Defensoría del Pueblo de Colombia",
    year: 2022,
    type: "cartilla institucional con patrimonio oral y territorial",
    url: "https://repositorio.defensoria.gov.co/bitstreams/6d49be2f-8913-446e-9389-8488217d6246/download",
    summary:
      "Recoge contexto del resguardo y una versión de Tofeme o Mocán, guardián del Corcovao, del totumo de oro y de señales de tormenta.",
    limitation:
      "Es una cartilla de divulgación y no una transcripción crítica; sus episodios se controlan con materiales comunitarios y educativos.",
  }),
  minCulturaZenu: source({
    title: "Caracterización del pueblo Zenú",
    author: "Ministerio de Cultura de Colombia",
    type: "perfil institucional histórico, territorial y cultural",
    url: "https://mng.mincultura.gov.co/prensa/noticias/Documents/Poblaciones/PUEBLO%20ZEN%C3%9A.pdf",
    summary:
      "Sitúa territorio, resguardo, memoria histórica, organización y continuidad cultural del pueblo Zenú en Córdoba y Sucre.",
    limitation:
      "Resume fuentes anteriores y no ofrece una narración completa de cada mito; no se usa para inventar diálogos o desenlaces.",
  }),
  faoAgriculturaAnfibia: source({
    title:
      "Agricultura anfibia Zenú: recuperación de conocimientos y prácticas tradicionales",
    author:
      "FAO, Ministerio de Agricultura y Desarrollo Rural y Ministerio de Relaciones Exteriores",
    year: 2021,
    type: "investigación técnica y comunitaria sobre memoria biocultural",
    url: "https://sembrandocapacidades.fao.org.co/wp-content/uploads/2021/11/V-FINAL-DOCUMENTO-TRADICIONAL-ZENU-V-WEB.pdf",
    summary:
      "Documenta la continuidad del manejo de aguas, canales, camellones, semillas y producción en el territorio Zenú.",
    limitation:
      "Es una fuente de contexto y prácticas contemporáneas, no una fuente para convertir ingeniería hidráulica en episodios míticos ausentes.",
  }),
  artesaniasCanaFlecha: source({
    title: "Caña flecha",
    author: "Artesanías de Colombia",
    type: "ficha institucional de oficio y materia prima",
    url: "https://artesaniasdecolombia.com.co/PortalAC/C_sector/cana-flecha_183",
    summary:
      "Describe la preparación y el trenzado de caña flecha y su lugar en la producción artesanal Zenú.",
    limitation:
      "No es una narración de origen; se usa para evitar representar el trenzado con materiales, técnicas o símbolos inventados.",
  }),
  artesaniasHeritage: source({
    title:
      "El trenzado Zenú en caña flecha es Patrimonio Cultural Inmaterial de Colombia",
    author: "Artesanías de Colombia y Ministerio de Cultura",
    year: 2022,
    type: "nota institucional sobre el Plan Especial de Salvaguardia",
    url: "https://www.artesaniasdecolombia.com.co/PortalAC/Noticia/el-trenzado-zen-en-cana-flecha-es-patrimonio-cultural-inmaterial-de-colombia_15083",
    summary:
      "Explica que el trenzado reúne conocimientos, identidad, relaciones comunitarias y lectura del universo en el resguardo.",
    limitation:
      "La declaratoria patrimonial no convierte cualquier trenza en símbolo ritual ni autoriza a añadirla a relatos sin evidencia.",
  }),
  communityCuentos: source({
    title: "Leyendas y cuentos de la tradición oral Zenú",
    author:
      "Comunidad de aprendizaje de la Institución Educativa Indígena Bossa Navarro",
    year: 2014,
    type: "recopilación escolar comunitaria de tradición oral",
    url: "https://reencuentroconloscuentoszenu.wordpress.com/",
    summary:
      "Publica versiones del caimán de oro, el encanto de Tofeme, el totumo y otros relatos identificados como tradición oral Zenú.",
    limitation:
      "No identifica a cada narrador ni ofrece aparato crítico. Se conserva su escala breve y se evitan ampliaciones noveladas.",
  }),
  torcoraCommunity: source({
    title: "Torcorá y la canoa de La Sierpe",
    author: "Proyecto educativo Identidad Cultural Zenú",
    type: "compilación digital comunitaria de mitos y leyendas",
    url: "https://identidadculturalzenu.blogspot.com/p/leyenda-de-las-mohanas-segun-laleyenda.html",
    summary:
      "Recoge el relato de Torcorá, la entidad serpiente, la canoa encantada de La Sierpe y el ojo sellado por un limón de acero.",
    limitation:
      "La página reúne distintos relatos sin ficha de narrador. La adaptación declara esa procedencia y no completa vacíos con comparaciones externas.",
  }),
  goldenTotumo: source({
    title: "Figuras que nacen de un fruto de oro",
    author: "Artesanías de Colombia",
    type: "divulgación institucional de oficio y tradición regional",
    url: "https://artesaniasdecolombia.com.co/PortalAC/Publicacion/figuras-que-nacen-de-un-fruto-de-oro_1399",
    summary:
      "Relaciona el trabajo artesanal del totumo con la leyenda regional de un fruto de oro que debe devolverse para recuperar el camino.",
    limitation:
      "Es una versión breve de divulgación; no se amplía como testimonio individual ni se confunde con todo el ciclo de Corcovao.",
  }),

  // ——— Búsqueda profunda 2026-09-19 ———
  zenuPlan: source({
    title: "Plan Especial de Salvaguardia: trenzado en caña flecha, prácticas y conocimientos ancestrales artesanales de la identidad zenú",
    author: "Cabildo Mayor Regional del Pueblo Zenú, Resguardo de San Andrés de Sotavento",
    type: "plan de salvaguardia presentado por la autoridad indígena",
    url: "https://patrimonio.mincultura.gov.co/salvaguardiapci/Lista-Representativa/Documents/PES%20Trenzado%20en%20can%CC%83a%20flecha,%20pra%CC%81cticas%20y%20conocimiento%20artesanales%20de%20la%20identidad%20Zenu%CC%81.pdf",
    summary:
      "Reproduce el mapa que el propio pueblo zenú dibujó del resguardo con el caimán de oro encima, rotulado como interpretación mítica, con San Andrés en el corazón del animal y los oficios artesanales repartidos por las extremidades, y resume que sacar al caimán significaría la destrucción del mundo zenú.",
    limitation:
      "El caimán aparece como ilustración territorial dentro de un expediente sobre el trenzado: no hay relato, ni narradores, ni variantes, y los rótulos del mapa no son legibles en el texto extraíble del PDF.",
  }),
  nietoCambios1988: source({
    title: "Cambios ambientales y desarrollo cultural en el bajo río San Jorge",
    author: "Clemencia Plazas de Nieto, Ana María Falchetti, Thomas van der Hammen, Pedro Botero, Juanita Sáenz Samper y Sonia Archila",
    year: 1988,
    type: "artículo de Boletín Museo del Oro",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/view/7167",
    summary:
      "Explica por qué el cuerpo del caimán enlaza lugares que hoy parecen inconexos: la llanura entre el bajo San Jorge y la depresión momposina fue un sistema continuo de canales, camellones y asentamientos zenúes que cubrió más de quinientas mil hectáreas.",
    limitation:
      "Es arqueología y paleoambiente de la cuenca del San Jorge, no del resguardo de San Andrés: no toca el mito y no puede usarse para fechar el relato.",
  }),
  bordaResistencia2002: source({
    title: "Resistencia en el San Jorge. Historia doble de la Costa 3",
    author: "Orlando Fals Borda",
    year: 2002,
    type: "historia regional con testimonios",
    url: "https://repositorio.unal.edu.co/bitstreams/8f017138-80f3-4f40-8c86-17efa29e9d7b/download",
    summary:
      "Ofrece el contrapunto necesario del otro caimán de la costa: el hombre-caimán del bajo Magdalena, que él usó como tótem de la cultura anfibia en el primer tomo de Historia doble y que aquí discute al preguntarse si el exterminio del saurio lo redujo al hombre-hicotea.",
    limitation:
      "El ejemplar del repositorio es una selección de 55 páginas de la Serie Maestros de la Sede, no el libro completo; el hombre-caimán es un tótem literario del autor y no un relato zenú.",
  }),
  larrainRelaciones2024: source({
    title: "Relaciones interétnicas en el caribe colombiano. Una aproximación etnográfica al caso zenú",
    author: "América Larraín",
    year: 2024,
    type: "artículo de revista académica",
    url: "https://revistas.unimagdalena.edu.co/index.php/jangwapana/article/view/5703",
    summary:
      "Describe etnográficamente la relación entre los indígenas zenú y la población blanca y mestiza circundante en términos de reciprocidad negativa, celos y envidia: el marco social del «chumpo» que en el relato viene a sacar el oro.",
    limitation:
      "Etnografía contemporánea sobre relaciones interétnicas: no trata el mito del caimán ni la cosmología, y sus resultados no se pueden proyectar a 1920.",
  }),
  colombiaResguardo2013: source({
    title: "Resguardo indígena Zenú de San Andrés de Sotavento (informe INST-D 2013.43)",
    author: "Artesanías de Colombia, repositorio institucional",
    year: 2013,
    type: "informe técnico de repositorio institucional",
    url: "https://repositorio.artesaniasdecolombia.com.co/bitstream/handle/001/1797/INST-D%202013.%2043.pdf?sequence=1",
    summary:
      "Enumera los municipios del resguardo entre los que el relato reparte el cuerpo del animal —Sincelejo, Palmito, Sampués y las veredas artesanales de San Antonio de Palmito— y describe los talleres y viviendas de esas localidades.",
    limitation:
      "Informe técnico de un proyecto artesanal de 2013: no menciona el caimán ni la mitología, y su cobertura es de unas pocas comunidades, no del resguardo entero.",
  }),
  sINICColombia: source({
    title: "Colombia Cultural: mitos y leyendas – Sucre (acopio de Zully Torres y Oswaldo Villera)",
    author: "Sistema Nacional de Información Cultural (SINIC), Ministerio de Cultura",
    type: "registro oficial de tradición oral departamental (copia archivada)",
    url: "https://web.archive.org/web/20230417204328/https://www.sinic.gov.co/SINIC/ColombiaCultural/ColCulturalBusca.aspx?AREID=3&SECID=8&IdDep=70&COLTEM=212",
    summary:
      "Es el único registro narrativo: en la ciénaga de La Sierpe aparece de pronto la canoa con el tesoro que cuida el mocán del Corcovao; quien la ve está perdido si quita el limón de acero que está en el ojo de esa canoa, porque la serpiente Torcerá, que es una bruja y duerme sobre el tesoro, despierta y ataca; tiene patas y plumas en las orejas. Publicado por el Ministerio de Cultura dentro del acopio de Zully Torres y Oswaldo Villera.",
    limitation:
      "Son cinco renglones, con el nombre escrito Torcorá en el título y Torcerá en el cuerpo, sin narrador, sin fecha, sin municipio y sin adscripción étnica; la página está retirada del portal y se consulta por copia archivada.",
  }),
  severichecanales2022: source({
    title: "Los canales zenúes en Colombia: un desaparecido en el territorio y un desconocido en el bolsillo",
    author: "César Olmos Severiche, Elvia María González-Agudelo, Fabio de Jesús Vélez-Macías y Néstor Jaime Aguirre-Ramírez",
    year: 2022,
    type: "artículo de revisión académica",
    url: "https://revistas.unimagdalena.edu.co/index.php/intropica/article/view/4052",
    summary:
      "Revisa los canales ancestrales de la depresión momposina y su desaparición del paisaje y de la memoria pública: el mismo sistema cenagoso en el que se sitúa la canoa y que explica la inestabilidad del agua.",
    limitation:
      "Artículo de revisión sobre hidráulica y cambio climático, sin ninguna referencia a la tradición oral de la ciénaga.",
  }),
  fernandezLiteratura2015: source({
    title: "Literatura y política en la «reconstrucción» de Jegua en Resistencia en el San Jorge: una lectura de los archivos personales de Orlando Fals Borda",
    author: "Nohora Alejandra Arrieta Fernández",
    year: 2015,
    type: "artículo de revista académica",
    url: "https://www.revistatabularasa.org/numero-23/06Arrieta.pdf",
    summary:
      "Muestra hasta qué punto los habitantes de la ribera del San Jorge han naturalizado lo extraordinario: no se inmutan si los muertos bogan inundados en el cementerio o si unas brasas señalan un enterramiento indígena.",
    limitation:
      "Lectura crítica de archivos y no recolección de tradición oral; sus ejemplos son de Jegua y no de La Sierpe.",
  }),
  sINICColombia2: source({
    title: "Colombia Cultural: mitos y leyendas – Córdoba",
    author: "Sistema Nacional de Información Cultural (SINIC), Ministerio de Cultura",
    type: "registro oficial de tradición oral departamental (copia archivada)",
    url: "https://web.archive.org/web/20240519043115/https://www.sinic.gov.co/SINIC/ColombiaCultural/ColCulturalBusca.aspx?AREID=3&SECID=8&IdDep=23&COLTEM=212",
    summary:
      "Funciona como control negativo: la lista oficial de mitos y leyendas de Córdoba del mismo organismo no incluye a Juan Lara. Registra el Gritón, el duende, la Llorona, el agüero del yacabó, los animes, el niño en cruz y la aguja del muerto.",
    limitation:
      "Una ausencia en un inventario no prueba que el personaje no circule en Córdoba: prueba que el Ministerio de Cultura no lo registró allí. También está retirada del portal.",
  }),
  villadiegosombrero1984: source({
    title: "El sombrero vueltiao zenú",
    author: "Benjamín Puche Villadiego",
    year: 1984,
    type: "conferencia publicada en revista universitaria",
    url: "https://medellin.unal.edu.co/revista-extension-cultural/images/revista/rec60/REC_60-95-108.pdf",
    summary:
      "Describe el sombrero pieza por pieza —plantilla, copa, vueltas, pies, rombos, pintas, ala— y explica que las pintas se colocan en vueltas determinadas siguiendo reglas de conteo; es la contraprueba técnica de la correspondencia que el relato establece entre partes del sombrero y partes del mundo.",
    limitation:
      "Conferencia de 1984 de un investigador aficionado, centrada en defender el origen colombiano del sombrero: no recoge el mito ni cita narradores del resguardo.",
  }),
  argelFortalecimiento2026: source({
    title: "Fortalecimiento de la identidad cultural desde la cosmovisión étnica a través del Museo Zenú",
    author: "E. Ruiz Argel y A. M. Posada",
    year: 2026,
    type: "artículo de revista académica",
    url: "https://revistavitalia.org/index.php/vitalia/article/view/965",
    summary:
      "Es el registro bibliográfico vivo de la obra que sostiene este relato: cita «Mendoza, W. (2011). Ordenando el Universo Zenú: ORUZEN. Tuchín: CMRPZ» como fuente de la cosmogonía que la institución educativa trabaja en su museo escolar.",
    limitation:
      "Sólo consta en la bibliografía: el artículo no resume ni cita el contenido de ORUZEN, y fecha el libro en 2011 mientras la ONIC lo fecha en 2010.",
  }),
  sotaventoPlan2020: source({
    title: "Plan de Desarrollo Territorial 2020-2023 del municipio de San Andrés de Sotavento",
    author: "Alcaldía de San Andrés de Sotavento",
    year: 2020,
    type: "plan de desarrollo municipal",
    url: "https://sanandresdesotaventocordoba.micolombiadigital.gov.co/sites/sanandresdesotaventocordoba/content/files/000122/6083_pdt-sas-v7-1.pdf",
    summary:
      "Registra que San Andrés de Sotavento reconoce oficialmente «la leyenda del cerro Tofeme» entre los rasgos de su riqueza cultural ancestral, junto al tejido trenzado y al festival del pito atravesao.",
    limitation:
      "Documento de planeación municipal: menciona la leyenda por su nombre en una línea y no la reproduce.",
  }),
};

export const juanLaraSources = {
  loricaTravel: source({
    title: "Mitos, sucesos y leyendas: Juan Lara",
    author: "Alcaldía de Santa Cruz de Lorica, portal Lorica Travel",
    type: "compilación pública de tradición oral local",
    url: "https://www.loricatravel.gov.co/mitos-sucesos-y-leyendas/",
    summary:
      "Describe a Juan Lara como espíritu burlón y enamorado asociado con pedradas sobre los techos y risas que se oyen en el aire.",
    limitation:
      "La ficha no identifica narrador ni adjudica el personaje a una comunidad indígena específica.",
  }),
  guiaMonteria: source({
    title: "Mitos y leyendas de Córdoba",
    author: "La Guía de Montería",
    type: "compilación periodística y turística regional",
    url: "https://www.laguiademonteria.co/mitos-y-leyendas-de-cordoba/",
    summary:
      "Confirma la circulación cordobesa de Juan Lara y los motivos de asedio, piedras y risas sin origen visible.",
    limitation:
      "Es una fuente secundaria sin transcripción oral completa; sirve para controlar el núcleo y no para añadir una biografía.",
  }),
  cordobaEducation: source({
    title: "Guía de aprendizaje de Lengua Castellana, grado quinto",
    author: "Secretaría de Educación de Córdoba",
    year: 2020,
    type: "material educativo departamental sobre tradición oral",
    url: "https://seducacion.cordoba.gov.co/_contenido/noticias/2020/Noviembre/Lengua_castellana_5.pdf",
    summary:
      "Usa leyendas de Córdoba como material de lectura y confirma su tratamiento como patrimonio oral regional.",
    limitation:
      "La adaptación pedagógica no prueba una atribución étnica ni sustituye el registro de variantes locales.",
  }),
  elUniversal: source({
    title: "Semana Santa: el misterio que flota en los días santos",
    author: "El Universal",
    year: 2019,
    type: "crónica periodística de creencias y relatos del Caribe",
    url: "https://www.eluniversal.com.co/suplementos/facetas/2019/04/17/semana-santa-el-misterio-que-flota-en-los-dias-santos/",
    summary:
      "Aporta contexto sobre la vigencia y circulación de apariciones, sonidos y relatos orales en Córdoba y el Caribe.",
    limitation:
      "No es una versión primaria de Juan Lara; se usa únicamente como contexto de recepción regional.",
  }),
  minCulturaZenu: zenuSources.minCulturaZenu,
  banrepZenu: zenuSources.banrepZenu,
};

/**
 * Acepta una clave suelta o una clave con resumen y límite propios del mito
 * (`{ key, summary, limitation }`). La ficha bibliográfica la fija el pool; lo
 * que cambia por mito es qué dice esa obra sobre ese relato.
 */
export function pickZenuSources(...entries) {
  // Antes esta función no recibía nada: devolvía la misma lista a todos los
  // mitos de la comunidad. La lista se conserva como reparto por defecto
  // mientras cada ficha pasa a declarar sus propias claves.
  const entradas = entries.length ? entries : [
    "onicLeyOrigen",
    "communityCreation",
    "drexler2002",
    "banrepZenu",
    "defensoria2022",
    "minCulturaZenu",
    "faoAgriculturaAnfibia",
    "artesaniasCanaFlecha",
    "artesaniasHeritage",
    "communityCuentos",
    "torcoraCommunity",
    "goldenTotumo",
  ];
  const vistas = new Set();
  const salida = [];
  for (const entrada of entradas) {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = zenuSources[key];
    if (!selected) {
      const visto = typeof entrada === "string" ? entrada : JSON.stringify(entrada);
      throw new Error(`Fuente Zenú desconocida: ${visto}`);
    }
    if (vistas.has(key)) continue;
    vistas.add(key);
    salida.push(
      typeof entrada === "string"
        ? selected
        : {
            ...selected,
            ...(entrada.summary ? { summary: entrada.summary } : {}),
            ...(entrada.limitation ? { limitation: entrada.limitation } : {}),
          },
    );
  }
  return salida;
}

export function pickJuanLaraSources() {
  return Object.values(juanLaraSources);
}
