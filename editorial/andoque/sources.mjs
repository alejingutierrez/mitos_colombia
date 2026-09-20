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

/**
 * Fuentes andoque, revisadas el 2026-09-18. Antes de esa revisión las catorce
 * fichas citaban las mismas siete URLs, y de esas siete sólo una —el artículo de
 * 1981— contenía narración andoque: las demás eran portadas de catálogo, fichas
 * de metadatos y una página del IGAC que responde 404.
 *
 * `limitation` no se pinta en la página: vive en el expediente, para quien
 * revise, y dice hasta dónde llega cada obra.
 */
export const andoqueSources = {
  diluvio1981: source({
    title: "Cuentos del diluvio de fuego",
    author: "Jon Landaburu y Roberto Pineda Camacho",
    year: 1981,
    type: "transcripción de narración oral con notas y traducción",
    url: "https://dialnet.unirioja.es/descarga/articulo/4862280.pdf",
    summary:
      "Transcribe, numerado párrafo a párrafo, el primer ciclo de fundación del mundo andoque —la guerra del palo hablador, las aventuras de Huevo-de-chupaflor, los huerfanitos y el águila caníbal—, recogido en la comunidad del Aduche y narrado por el capitán Yiñeko, del linaje de las Águilas, y por Yiñefoque. Detrás vienen un índice temático y ciento treinta y una notas con la ortografía andoque y las variantes de los otros narradores.",
    limitation:
      "Cubre el primer ciclo de fundación; los relatos históricos y los ciclos posteriores están en otras publicaciones de los mismos autores.",
  }),
  genteDelHacha1975: source({
    title: "La gente del hacha. Breve historia de la tecnología según una tribu amazónica",
    author: "Roberto Pineda Camacho",
    year: 1975,
    type: "artículo académico con transcripción de relatos orales",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/view/1611",
    summary:
      "Recoge cuatro textos narrados por el capitán Jiñeke, del clan Gavilán, entre ellos «El nacimiento de las mercancías» y «Los presentes de la Garza de la Cabecera». Su introducción documenta el territorio tradicional andoque, los dos reagrupamientos de la comunidad —el de Trueno de Piedra en el río Meta y el del propio Jiñeke en el Aduche— y la deportación a Iquitos anterior al conflicto de 1932.",
    limitation:
      "El escaneo no trae capa de texto: se lee por imagen. Los relatos que transcribe pertenecen al ciclo de las mercancías y del hacha, no al de fundación.",
  }),
  lenguaAndoque: source({
    title: "La lengua andoque",
    author: "Jon Landaburu",
    type: "descripción lingüística con texto glosado",
    url: "https://lenguasyliteraturasnativas.caroycuervo.gov.co/andoque/",
    summary:
      "Descripción de la lengua andoque publicada por el Instituto Caro y Cuervo. Su anexo de texto libre trae «El árbol hablador» íntegro, glosado morfema a morfema y traducido: una segunda versión de la guerra del palo hablador, independiente de la transcripción de 1981.",
    limitation:
      "Es una obra lingüística: el relato va como muestra de lengua, sin el aparato etnográfico de las ediciones de mitología.",
  }),
  sanchezBotero2002: source({
    title: "Principios y procedimientos de los indígenas andoque de Colombia para vivir y crecer después del horror de la muerte",
    author: "Esther Sánchez Botero",
    year: 2002,
    type: "artículo académico con reproducción de relatos",
    url: "https://repositoriocdim.esap.edu.co/server/api/core/bitstreams/2b3e289e-0caf-413d-84b4-5c91936d0677/content",
    summary:
      "Reproduce en extenso relatos de «Tradiciones de la gente del hacha» —la guerra del palo hablador, la llegada de las boas y las dantas, la llegada de las mercancías— y los imprime como los dice el potsoa, el hombre del banquito, con la maloca repitiendo la última estrofa.",
    limitation:
      "Los textos se citan por su función en el argumento de la autora, no como edición crítica.",
  }),
  cicloDelCaucho1988: source({
    title: "El ciclo del caucho 1850-1932",
    author: "Roberto Pineda Camacho",
    year: 1988,
    type: "capítulo de historia regional",
    url: "https://www.100libroslibres.com/colombia-amazonica-el-ciclo-del-caucho-1850-1932",
    summary:
      "Historia de la explotación cauchera en el Caquetá y el Putumayo. Recoge que los andoque cuentan que linajes enteros de las riberas del Caquetá desaparecieron en el siglo XIX engañados por los delfines que simulaban ser comerciantes, y documenta la celada de 1903 contra un grupo de caucheros y el censo de 1928 que halló desocupadas las localidades de la Casa Arana.",
    limitation:
      "Es historia regional: lo andoque aparece dentro del conjunto del Caquetá y el Putumayo, y varios episodios se dan con la cautela de «según algunas fuentes».",
  }),
  guzman1971: source({
    title: "Los Andokes: historia, conciencia étnica y explotación del caucho",
    author: "Manuel José Guzmán G.",
    year: 1971,
    type: "estudio etnográfico",
    url: "https://revistas.javeriana.edu.co/index.php/univhumanistica/article/view/10599",
    summary:
      "Reconstruye el territorio antiguo de los andoque a partir de los relatos de los ancianos y de la toponimia, documenta las comisiones armadas de la época cauchera y contrasta el levantamiento de 1917 en el Igará-Paraná con narraciones de los viejos andoque sobre un hecho parecido.",
    limitation:
      "Extracto de una tesis de grado de 1971; el escaneo no trae capa de texto.",
  }),
  misionLinguistica1970: source({
    title: "Mission linguistique auprès des indiens andoke du Rio Caquetá",
    author: "Jon Landaburu",
    year: 1970,
    type: "informe de trabajo de campo",
    url: "https://www.persee.fr/doc/jsa_0037-9174_1970_num_59_1_2956",
    summary:
      "Primer informe de campo de Landaburu entre los andoke. Los sitúa en ambas orillas del Aduche, unos diez kilómetros abajo del raudal de Araracuara, y deja escrito que todos los andoke son supervivientes o hijos de supervivientes del genocidio cometido entre 1900 y 1930 por los hombres de la Casa Arana.",
    limitation:
      "Es un informe breve de misión, no un estudio de la mitología.",
  }),
  verdadAndoque1976: source({
    title: "El tratamiento gramatical de la verdad en la lengua andoque",
    author: "Jon Landaburu",
    year: 1976,
    type: "artículo de lingüística",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/view/1702",
    summary:
      "Estudia los asertivos del andoque: la palabra que toda oración afirmativa lleva obligatoriamente y que dice de dónde le viene al hablante lo que afirma —experiencia directa, testimonio de otro o inferencia—. Su nota sobre el relato mítico recoge a Fisiói, hijo del capitán Yiñeko, explicando qué sufijo usa un narrador seguro y cuál usa quien no quiere comprometerse con la verdad de lo que cuenta.",
    limitation:
      "Trata de la lengua, no de los relatos; sirve para entender cómo se narra, no qué se narra.",
  }),
  urbina1991: source({
    title: "Mitos y petroglifos en el río Caquetá",
    author: "Fernando Urbina Rangel",
    year: 1991,
    type: "estudio de campo sobre arte rupestre",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/view/7026",
    summary:
      "Cataloga unos dos mil quinientos grabados en ocho localidades entre el internado de Araracuara y el quebradón de Amefa, casi todos cubiertos por el río salvo de diciembre a marzo, y muestra que cada pueblo que llegó al Caquetá rehízo o reinterpretó los glifos anteriores y dejó esa lectura consignada en su mitología.",
    limitation:
      "Los relatos que transcribe son uitoto y muinane, no andoque.",
  }),
  vonHildebrand1975: source({
    title: "Levantamiento de los petroglifos del río Caquetá entre La Pedrera y Araracuara",
    author: "Elizabeth Reichel von Hildebrand",
    year: 1975,
    type: "levantamiento arqueológico",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/view/1666",
    summary:
      "El registro sistemático de los petroglifos del medio Caquetá: unos dos mil quinientos grabados repartidos en catorce sitios a lo largo de cuatrocientos kilómetros de río, el tramo donde vive la gente andoque.",
    limitation:
      "Registra y clasifica los grabados; no se ocupa de lo que cada pueblo cuenta sobre ellos.",
  }),
  arroyoKalin2019: source({
    title: "Entre La Pedrera y Araracuara: la arqueología del medio río Caquetá",
    author: "Manuel Arroyo-Kalin, Gaspar Morcote-Ríos, Natalia Lozada-Mendieta y Lorna Veal",
    year: 2019,
    type: "síntesis arqueológica",
    url: "https://publicaciones.fcnym.unlp.edu.ar/rmlp/article/view/2369",
    summary:
      "Síntesis del poblamiento del medio Caquetá con las dataciones disponibles. Documenta en Puerto Santander, junto a Araracuara, un taller lítico donde se fabricaban y afilaban hachas de piedra.",
    limitation:
      "Es arqueología regional y no trata de los andoque en particular.",
  }),
  tradiciones1984: source({
    title: "Tradiciones de la gente del hacha: mitología de los indios andoques del Amazonas",
    author: "Jon Landaburu y Roberto Pineda Camacho",
    year: 1984,
    type: "monografía de mitología con edición bilingüe",
    url: "https://biblioteca.icanh.gov.co/cgi-bin/koha/opac-detail.pl?biblionumber=1105",
    summary:
      "El corpus mayor de la mitología andoque, publicado por el Instituto Caro y Cuervo y la Unesco. Reúne los relatos contados en andoque por el capitán Yiñeko, Plumón-de-Fiebre, y su hermano Yiñejoke, Plumón-de-Gavilán, traducidos con Fisi, el hijo del capitán, y los ordena no por tiempo sino por el eje del río: Cabecera al occidente, Centro, Bocana al oriente, más cenit y nadir.",
    limitation:
      "Edición en papel y microficha; las páginas citadas aquí se conocen por las obras que las reproducen y las glosan, no por una edición digital.",
  }),
  arazi2024: source({
    title: "From the Cannibal Eagle to the Trading Egret (and Back Again)",
    author: "Eliran Arazi",
    year: 2024,
    type: "tesis doctoral de etnografía",
    url: "https://theses.fr/2024EHES0037",
    summary:
      "Etnografía andoque a partir de trabajo de campo entre 2018 y 2021 con Fisi Andoque Andoque, hijo del capitán Yiñeko. Su apéndice reúne veintitrés relatos con narrador y fecha, y el cuerpo cita el corpus de 1984 página por página: de ahí salen la toponimia andoque del Caquetá, los Perforadores y las Sombras, la brujería y los dos reagrupamientos con sus capitanes.",
    limitation:
      "Está en inglés y sus transcripciones son de narraciones recientes: alumbran el corpus antiguo, no lo sustituyen.",
  }),
  ortizGomez1986: source({
    title: "Mitología de los indios andoques del Amazonas",
    author: "Francisco Ortiz Gómez",
    year: 1986,
    type: "reseña académica con citas del corpus",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/view/7293",
    summary:
      "Reseña del corpus de 1984 que nombra a sus narradores y traduce sus nombres —el capitán Yiñeko, Plumón-de-Fiebre, y su hermano Yiñejoke, Plumón-de-Gavilán, ninguno hablante de castellano, con la traducción hecha con Físi, el hijo del capitán—, explica el principio espacial que ordena el libro y reproduce cuatro pasajes de los relatos.",
    limitation:
      "Son tres páginas: da el marco y algunas citas, no el texto de los relatos.",
  }),
  jara1996: source({
    title: "La miel y el aguijón: taxonomía zoológica y etnobiología entre los andoke",
    author: "Fabiola Jara",
    year: 1996,
    type: "etnografía de campo",
    url: "https://www.persee.fr/doc/jsa_0037-9174_1996_num_82_1_1637",
    summary:
      "Etnoentomología andoque recogida en Aduche con Hernando Fixioi Andoque, capitán en 1992, que enumeró treinta y cinco grupos de filiación patrilineal. Registra que los andoke y sus vecinos atribuyen los petroglifos de la angostura de Araracuara a gigantes ligados al pasado mítico andoque, y que el nombre «gente del hacha» viene del lugar que ocupaban sus hachas de piedra en el comercio regional.",
    limitation:
      "Su objeto son los insectos y las nociones de género; los mitos entran parafraseados y por su función en ese argumento.",
  }),
  guyot1979: source({
    title: "La historia del mar de Danta, el Caquetá",
    author: "Mireille Guyot",
    year: 1979,
    type: "transcripción y análisis de tradición oral vecina",
    url: "https://www.persee.fr/doc/jsa_0037-9174_1979_num_66_1_2173",
    summary:
      "Recoge de Luis Miraña, mayor del grupo de los Achiotes, la cartografía mítica del Caquetá desde Tefé hasta Araracuara, y documenta que los andoque eran los dueños del hacha de piedra y que los miraña se la cambiaban por coca y ambil.",
    limitation:
      "Los relatos son miraña. Sirven como vecindad documentada, nunca como creencia andoque.",
  }),
  genteQuemadora1979: source({
    title: "Documentos para la historia de la gente quemadora",
    author: "Roberto Pineda Camacho (comp.) y Fernando Urbina (rec.)",
    year: 1979,
    type: "testimonio oral transcrito",
    url: "https://revistacontroversia.cinep.org.co/index.php/controversia/article/view/947",
    summary:
      "Reproduce el relato de Chúumu Gúio sobre la maloca levantada en tres días, el baile convocado, la puerta cerrada y la tropa disparando: la matanza de andoques quemados dentro de la casa.",
    limitation:
      "El testimonio es muinane y de tercera mano; no hay un relato andoque del mismo episodio con el que cotejarlo.",
  }),
  minCultura: source({
    title: "Caracterización del pueblo Andoke",
    author: "Ministerio de Cultura de Colombia",
    type: "caracterización institucional",
    url: "https://mng.mincultura.gov.co/prensa/noticias/Documents/Poblaciones/PUEBLO%20ANDOKE.pdf",
    summary:
      "Ficha oficial del pueblo andoke: territorio, lengua, población, historia reciente y referencias a la obra de Landaburu y Pineda.",
    limitation:
      "No transcribe relatos y no se usa para reconstruir episodios.",
  }),
  puebloAndoke: source({
    title: "Pueblo Andoke",
    author: "Comunidad Andoke de Aduche",
    type: "sitio comunitario contemporáneo",
    url: "https://puebloandoke.org/",
    summary:
      "Sitio de la comunidad andoke del Aduche. Presenta su territorio, su gobierno propio y sus proyectos, y recoge su autodenominación, Poosíoho, y los linajes familiares que hoy la componen.",
    limitation:
      "Publica gobernanza y actualidad; no es una edición de los relatos.",
  }),
};

/**
 * Acepta una clave suelta (`"diluvio1981"`) o una clave con resumen y límite
 * propios del mito (`{ key, summary, limitation }`). La ficha bibliográfica
 * —autor, año, título, URL— la fija siempre el pool; lo que cambia por mito es
 * qué dice esa obra sobre ese relato y hasta dónde llega.
 */
export function pickAndoqueSources(...entries) {
  const vistas = new Set();
  const salida = [];
  for (const entrada of entries) {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = andoqueSources[key];
    if (!selected) {
      const visto = typeof entrada === "string" ? entrada : JSON.stringify(entrada);
      throw new Error(`Fuente Andoque desconocida: ${visto}`);
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
