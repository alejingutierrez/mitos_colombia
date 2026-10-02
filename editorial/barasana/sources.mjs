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

export const barasanaSources = {
  communityBook: source({
    title:
      "Hee Yaia Godo ~Bakari. El territorio de los Jaguares de Yuruparí. Conocimiento tradicional de las etnias del río Pirá Paraná para el cuidado del medio ambiente",
    author:
      "ACAIPI (Asociación de Autoridades Tradicionales Indígenas del río Pirá Paraná) y Fundación Gaia Amazonas",
    year: 2015,
    type: "investigación y publicación colectiva indígena",
    url: "https://gaiaamazonas.org/wp-content/uploads/2024/04/GaiaAmazonas-Hee_yaia_Godo-bakari.pdf",
    summary:
      "La obra de cabecera: la firman los propios pueblos del Pirá Paraná y acredita capítulo por capítulo al narrador, al traductor, a su etnia y a su comunidad —Hee Gu Reynel Ortega, ~Kubu Ricardo Marín, ~Kubu Uriel Betancour y el baya Jaime Giraldo entre ellos—. De aquí salen el surgimiento barasano, la Cuerda de Leche, los cerros-estantillos y los frutales silvestres.",
    limitation:
      "Es un bien colectivo de seis pueblos del Pirá Paraná —barasano, eduria, itana, bara, macuna y tatuyo—, y varios de sus capítulos los narra un sabedor macuna, carapana o tatuyo, no barasano. Cada ficha distingue lo acreditado a narradores barasanos de lo que viene de vecinos del mismo río. El PDF está maquetado a dos columnas y la extracción automática entrelaza pasajes.",
  }),
  ilv1974: source({
    title:
      "Folclor indígena de Colombia 1. «Texto barasano del sur: la historia de Rĩjocamacʉ»",
    author:
      "Antonio Barasana, Richard D. Smith y Connie Smith; Ministerio de Gobierno e Instituto Lingüístico de Verano",
    year: 1974,
    type: "texto bilingüe con narrador indígena acreditado",
    url: "https://archive.org/details/rosettaproject_bsn_vertxt-1",
    summary:
      "La muestra de folclor barasano recogida por el ILV en 1974, con Antonio Barasana como narrador acreditado: el ciclo de Rĩjocamacʉ, el episodio de Mení y sus hijas que se bañan, y las pocas páginas de texto barasano que existen fuera del libro del Pirá Paraná.",
    limitation:
      "Es una muestra de pocas páginas y corresponde a «barasano del sur», que puede no designar al mismo grupo del Pirá Paraná. El enlace es la copia del Rosetta Project en Internet Archive, que es la que tiene el texto: la ficha del propio editor (colombia.sil.org/resources/archives/19038) está en pie, pero su PDF devuelve 403.",
  }),
  cayon2013: source({
    title: "Pienso, luego creo. La teoría makuna del mundo",
    author: "Luis Cayón",
    year: 2013,
    type: "monografía etnográfica de acceso abierto",
    url: "https://publicaciones.icanh.gov.co/index.php/picanh/catalog/book/71",
    summary:
      "La etnografía makuna del Pirá Paraná, publicada por el ICANH con PDF gratuito. Sirve para contrastar la Anaconda Yeba, los ~Hadera/hanerã y la identificación de los ancestros que hace el libro de la ACAIPI.",
    limitation:
      "Es makuna, no barasana: pueblo vecino del mismo río, documentado como tal. Y no narra mitos, es una teoría del mundo; de hecho contradice al libro del Pirá Paraná, porque para los makuna el ancestro barasana es la Anaconda Pintada. Nunca se usa como fuente de creencia barasana.",
  }),
  palm: source({
    title:
      "The Palm and the Pleiades: Initiation and Cosmology in Northwest Amazonia",
    author: "Stephen Hugh-Jones",
    year: 1979,
    type: "monografía etnográfica con textos míticos",
    url: "https://ehrafworldcultures.yale.edu/cultures/sq19/documents/010",
    summary:
      "Etnografía barasana del Pirá Paraná hecha con trabajo de campo entre septiembre de 1968 y diciembre de 1970. Cierra con una selección de textos míticos, entre ellos el ciclo de Sol y Luna y el de Warimi, que es de donde la ficha heredada tomó su atribución.",
    limitation:
      "No se consultó en esta pasada: el enlace es la ficha de publicación de eHRAF —pública, con resumen e indización—, pero el texto sólo se lee por suscripción, y cambridge.org está fuera de servicio. Los episodios que las fichas le atribuyen vienen del contenido heredado y no se verificaron contra la obra.",
  }),
  torres: source({
    title:
      "Mito y cultura entre los Barasana: un grupo indígena tukano del Vaupés",
    author: "Alfonso Torres Laborde",
    year: 1969,
    type: "ficha de catálogo institucional, sin texto",
    url: "https://repository.icesi.edu.co/items/a77d1476-97cd-4bd0-a0c4-d6502e61202f",
    summary:
      "Trabajo de grado presentado en la Universidad de los Andes en 1969 sobre el mito y la cultura barasana. Es la obra a la que la ficha heredada de Luna atribuía las grafías Muyhu y Méneri-Ya.",
    limitation:
      "Esa atribución no está corroborada. El enlace es el registro de la Biblioteca Digital Icesi —handle hdl.handle.net/10906/116167—, que es una ficha de catálogo sin archivo adjunto: la propia búsqueda del repositorio lo marca como «sin contenido». No se localizó ninguna copia con texto en Uniandes ni en el Banco de la República, y los nombres propios de aquella ficha no aparecen en ninguna otra parte de la web indexada. Se cita para que el lector pueda ir al original impreso, no como respaldo de lo narrado.",
  }),
  pleiades: source({
    title: "As Plêiades e Escorpião na Cosmologia Barasana",
    author: "Stephen Hugh-Jones",
    year: 2017,
    type: "artículo etnoastronómico revisado por el autor",
    url: "https://periodicos.ufpe.br/revistas/revistaanthropologicas/article/view/231438",
    summary:
      "Relaciona constelaciones, estaciones, ríos, lluvias, peces y ritualidad en la cosmología barasana, y revisa el artículo original de 1982 del propio autor.",
    limitation:
      "Es contexto astronómico y estacional, no una transcripción independiente de ningún episodio. Ninguna ficha lo usó como fuente narrativa.",
  }),
  minCultura: source({
    title:
      "Hee yaia keti oka, conocimiento tradicional de los Jaguares de Yuruparí",
    author: "Ministerio de Cultura de Colombia",
    type: "ficha institucional de patrimonio cultural inmaterial",
    url: "https://patrimonio.mincultura.gov.co/salvaguardiapci/Lista-Representativa/Paginas/el-conocimiento-tradicional-de-los-jaguares-de-Yurupar%C3%AD.aspx",
    summary:
      "Sitúa el sistema de conocimiento vivo de los pueblos del Pirá Paraná, el barasano entre ellos, y su relación con territorio, plantas, animales y seres visibles e invisibles.",
    limitation:
      "Resume la manifestación patrimonial: no narra ningún episodio y no reemplaza a la publicación comunitaria. Es contexto, nunca fuente clave de un relato.",
  }),
  planVida: source({
    title: "Plan de Vida del Territorio Indígena del Río Pirá Paraná",
    author: "Consejo Indígena del Territorio del Pirá Paraná",
    year: 2025,
    type: "documento contemporáneo de gobierno propio",
    url: "https://jaguaresdeyurupari.org/wp-content/uploads/2025/11/PdV-PP-V061125-_-Digital.pdf",
    summary:
      "Expone desde el gobierno propio el sentido vigente de Hee Yaia Keti Oka, el territorio, la transmisión del conocimiento y el cuidado de la vida.",
    limitation:
      "No publica versión narrativa de ningún mito. Sirve para fechar la lectura contemporánea del territorio, nunca para completar escenas.",
  }),

  // ——— Búsqueda profunda 2026-09-22 ———
  capitanesPlan2010: source({
    title: "Plan Especial de Salvaguardia de la manifestación Hee Yaia Keti Oka, el Conocimiento Tradicional (Jaguares de Yuruparí) para el Manejo del Mundo de los grupos indígenas del río Pira Paraná",
    author: "ACAIPI (Asociación de Capitanes y Autoridades Tradicionales Indígenas del Río Pirá Paraná) y Ministerio de Cultura de Colombia",
    year: 2010,
    type: "plan de salvaguardia redactado por la organización indígena",
    url: "https://patrimonio.mincultura.gov.co/SiteAssets/Paginas/Los-conocimientos-tradicionales-de-los-chamanes-jaguares-de-Yurupar%C3%AD/04-Jaguares%20de%20Yurupar%C3%AD.pdf",
    summary:
      "Documento de 90 páginas firmado por la ACAIPI en julio de 2010. Define la época de Frutales Silvestres (Herika Oka Rodo, junio a agosto) y su ritual «para propiciar la vida de los frutos del bosque, los peces, la gente»; describe a los ~kubua que «endulzan» los frutales silvestres para hacerlos aptos para el consumo y hablan de «llenar la Cuya de Coca de Frutales Silvestres». En el capítulo de sitios sagrados lista los Herika Bikia Wii —«lugares sagrados donde los dioses crearon en el Principio las diferentes especies de frutales silvestres»— y entre los del Alto Pirá nombra Badi Serero, la casa de origen que la ficha pone al centro del relato; añade los Herika Botari, estantillos de las malocas espirituales de origen de los frutales.",
    limitation:
      "No narra el episodio de la pava investida ni la repartición de palmas: sostiene la casa de origen, el calendario y el deber de curar el alimento, no la trama. Es un documento de los seis pueblos del Pirá Paraná, no sólo barasano, y es el antecedente institucional del libro de 2015 (lo menciona como «libro no publicado aún»). Es otra obra que la ficha del Ministerio ya citada en el pool: ésa es la página web de la Lista Representativa; ésta es el PES en PDF.",
  }),
  hughJonesBody2017: source({
    title: "Body Tubes and Synaesthesia",
    author: "Stephen Hugh-Jones",
    year: 2017,
    type: "artículo académico de acceso abierto",
    url: "https://revistas.unal.edu.co/index.php/imanimundo/article/view/64299",
    summary:
      "Mundo Amazónico 8(1): 27-78. Opone dos dueños del alimento en el mito del alto río Negro: el Dueño de las Plantas Cultivadas y «Yuruparí, the Owner of Forest Fruit», que impone un ayuno riguroso. Explica que los actos de creación que involucran frutos del bosque ocurren en los rituales de Yuruparí, entre hombres del mismo clan, y describe a los danzantes cargando racimos de frutos de palma. Es el marco en que la ficha pone a los Jaguares de Yuruparí decidiendo el origen de los frutales y convierte el comer fruta en un trabajo de curación previo.",
    limitation:
      "Es una síntesis regional, deliberadamente selectiva, que el autor advierte que no representa ninguna versión concreta; no menciona a la pava Kata Bahi, a Badi Serero ni la repartición de palmas. Sostiene el vínculo Yuruparí–frutos silvestres, no la trama.",
  }),
  rubiocamino1981: source({
    title: "Por el camino de la anaconda ancestral. Sobre organización social entre los Taiwano del Vaupés",
    author: "François Correa Rubio",
    year: 1981,
    type: "artículo etnográfico con mitos transcritos",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/view/1722",
    summary:
      "Revista Colombiana de Antropología 23: 39-108. Etnografía de los taiwano —los eduria del Pirá Paraná— con un apéndice que transcribe, en versión corta del chamán, el viaje de la Anaconda Remedio desde la Puerta de las Aguas hasta el Pirá Paraná, donde surgen los fundadores de los sibs. Explica que, en su Canoa de Luz, «el Sol guió a la Anaconda Ancestro por el Río de Leche» hasta las cabeceras del mundo, y que los cerros-estantillos sostienen la maloca-cosmos: la misma nave conducida por el Sol y los mismos cerros con que abre la ficha.",
    limitation:
      "Es la versión eduria (taiwano) del recorrido, no la barasana: el propio artículo dice que cada grupo le da otro nombre a su anaconda y otro final a su ruta. Entra porque las similitudes de la ficha ya nombran los capítulos vecinos «con narradores macuna, tatuyo y eduria». No menciona a Kahe Sawari ni a Kata Yai. El PDF de la revista es un escaneo sin capa de texto; se leyó con OCR.",
  }),
  colombiaNomination2011: source({
    title: "Nomination file no. 00574 for inscription on the Representative List of the Intangible Cultural Heritage in 2011: Traditional knowledge of the jaguar shamans of Yuruparí",
    author: "República de Colombia y ACAIPI, ante el Comité Intergubernamental de la UNESCO",
    year: 2011,
    type: "expediente de candidatura redactado en primera persona por la organización indígena",
    url: "https://ich.unesco.org/doc/src/00574-Nomination_form.doc",
    summary:
      "El expediente cuenta, en voz de los pueblos del Pirá Paraná, que Yuruparí era una anaconda que vivía como persona, que decidió sacrificarse para que surgiera la vida humana y que de las cenizas nació la palma de las trompetas sagradas, repartidas entre los primeros hombres; la ficha cierra con los huesos de Kahe Sawari hechos Yuruparí. Nombra a los barasana por sus grupos —«~Hadera, Yeba ~basa, ~Itada, Ria~tuda»—, que es la doble denominación que la ficha conserva, y registra la reunión de consulta en San Miguel con Ricardo Marín como «Barasano YEBA ~BASA (Hijos de Yeba)».",
    limitation:
      "Es la versión común a todos los pueblos del río, no el episodio de Kahe Sawari; no nombra a ninguno de los dos hermanos. Es un archivo .doc descargable desde la página del elemento en ich.unesco.org, en inglés.",
  }),
  santosfirmamento: source({
    title: "El firmamento al fondo del río contaminado",
    author: "Bárbara Santos",
    type: "ensayo en revista institucional de artes (ERRATA# 18, Idartes)",
    url: "https://revistaerrata.gov.co/contenido/el-firmamento-al-fondo-del-rio-contaminado",
    summary:
      "Ensayo de la coeditora del libro del Pirá Paraná. Identifica el río de Leche con el río Negro entre Manaos y São Gabriel da Cachoeira, «conocido por la gente anaconda como el río de Leche Materna», y en nota define a los barasano y ~hadera como «gente anaconda yeba», junto a la gente anaconda de agua (macuna) y la anaconda remedio (eduria).",
    limitation:
      "Es un ensayo sobre minería y contaminación, no una versión del mito; su valor está en la identificación geográfica del río de Leche y en la adscripción a Yeba, hecha por quien editó la fuente principal. Fecha el libro de la ACAIPI en 2017, no en 2015 como el pool: diferencia de edición o de reimpresión que no se resolvió. La página no trae fecha de publicación.",
  }),
  hughJonesNomes2002: source({
    title: "Nomes secretos e riqueza visível: nominação no noroeste amazônico",
    author: "Stephen Hugh-Jones",
    year: 2002,
    type: "artículo científico revisado por pares (Mana, vol. 8, n.º 2), acceso abierto",
    url: "https://www.scielo.br/j/mana/a/wXtQftVFFYSBxPVVSGxjJVC/",
    summary:
      "Hugh-Jones resume, citando su monografía de 1979 (p. 277), la sección del mito de Warimi que funda el chamanismo barasana del parto: muerta su madre por los jaguares, Warimi escapa al río en forma de espíritu; unos niños que quieren atraparlo entierran a una muchacha en la orilla arenosa, orinan sobre su pelvis, y mientras Warimi juega con las mariposas que atrae la orina, ella lo da a luz ya encarnado. Lo usa para explicar el doble nacimiento (cuerpo de la mujer, espíritu del río). Añade que Meni Kumu y Yeba Meni Hino son nombres sagrados del ancestro barasana y que Meni Masa es un clan barasana.",
    limitation:
      "Es un artículo sobre nominación, no una edición del ciclo: resume un solo episodio y remite a la monografía de 1979. No nombra a Méneri-Ya ni a Muyhu, ni el episodio de la marca en el rostro. En portugués, publicado en Brasil.",
  }),
  vazquezSouth1987: source({
    title: "South American Indian Religions: Mythic Themes (Encyclopedia of Religion)",
    author: "Juan Adolfo Vázquez",
    year: 1987,
    type: "artículo de enciclopedia académica (Macmillan/Gale), reproducido por Encyclopedia.com",
    url: "https://www.encyclopedia.com/environment/encyclopedias-almanacs-transcripts-and-maps/south-american-indian-religions-mythic-themes",
    summary:
      "En el apartado sobre mito y rito, Vázquez cuenta que los barasana del sur tienen como héroe cultural a Warimi, que de niño se llamaba Rijocamacu y siempre escapaba de las hijas del sobrenatural Meni; la menor lo atrapa, él se vuelve bebé, ella lo amamanta y Meni quema cera y sopla el humo para alejar a los espíritus de los muertos, origen del soplo del jefe sobre el fuego en cada parto. Identifica así el texto del ILV de 1974 con un episodio de la infancia de Warimi y le da a Meni el papel de primer oficiante.",
    limitation:
      "Es una síntesis continental: resume en un párrafo el episodio de Meni y no cuenta la marca en el rostro, la muerte de la madre ni el águila. Se basa en el texto del ILV, ya citado en el pool. Encyclopedia.com reproduce la obra con licencia de Gale; la bibliografía fue revisada en 2005.",
  }),
  penaVersiones1998: source({
    title: "Versiones y distribución geográfica del mito de «El origen de las manchas de la luna» en la tradición oral indoamericana",
    author: "Enrique Margery Peña",
    year: 1998,
    type: "artículo científico (Filología y Lingüística, Universidad de Costa Rica, XXIV(2): 115-146), acceso abierto",
    url: "https://revistas.ucr.ac.cr/index.php/filyling/article/view/20944",
    summary:
      "Clasifica con el índice de Thompson las versiones indoamericanas del hermano incestuoso marcado en la cara que se vuelve Luna. Registra una versión barasana entre siete amazónicas (con makuna, witoto, tanimuca y otras, tomadas de Bierhorst 1988) y transcribe en nota su contenido: Luna visitaba de noche la hamaca de su hermana, ella preparó tinte negro de corteza de inga y le pintó la cara, y por la mañana él se vio en un espejo y no pudo quitárselo. Es el motivo con que abre la ficha, situado en su distribución.",
    limitation:
      "Comparativa: la versión barasana llega de segunda mano (Bierhorst, 1988) y en pocas líneas; no cubre a Méneri-Ya ni a Warimi. Sirve porque la propia ficha declara que la marca nocturna es un motivo extendido en la Amazonía. El PDF está en archivo.revistas.ucr.ac.cr, enlazado desde la página del artículo.",
  }),
  hughJonesBarasana2002: source({
    title: "Barasana (Povos Indígenas no Brasil, versión en inglés)",
    author: "Stephen Hugh-Jones, Aloisio Cabalzar y Equipo del Programa Rio Negro del Instituto Socioambiental",
    year: 2002,
    type: "enciclopedia etnográfica institucional firmada por el etnógrafo",
    url: "https://pib.socioambiental.org/en/Povo:Barasana",
    summary:
      "Hugh-Jones explica que para los pueblos del Vaupés la maloca es el mundo: el techo es el cielo, los postes que lo sostienen son montañas y las paredes las cadenas de cerros del horizonte; añade que cerros, ríos, rocas y raudales llevan nombres que evocan los actos de creación de los ancestros, y que la cera de abejas figura entre las sustancias sagradas del grupo. Es la misma arquitectura de cerros-postes que sostiene la ficha.",
    limitation:
      "Síntesis etnográfica general del pueblo, no un capítulo sobre los Cerros-Estantillos: no nombra ninguno de los cerros de la lista de Reynel Ortega. Sitio brasileño (ISA).",
  }),
  colombiaNomination20112: source({
    title: "Nomination file No. 00574: Traditional knowledge of the jaguar shamans of Yuruparí (Hee Yaia Keti Oka)",
    author: "República de Colombia y ACAIPI, ante el Comité Intergubernamental de la UNESCO para el Patrimonio Cultural Inmaterial",
    year: 2011,
    type: "expediente de candidatura redactado con las autoridades indígenas del Pirá Paraná",
    url: "https://ich.unesco.org/en/RL/traditional-knowledge-of-the-jaguar-shamans-of-yurupari-00574",
    summary:
      "En voz de los pueblos del Pirá Paraná, el expediente dice que la sabiduría para manejar el territorio está concentrada en los sitios sagrados, que sólo el pensamiento del chamán los visita para curar el mundo y conectarse con los ancestros, y que cada lugar tiene dos polaridades que deben manejarse o la vida se acaba; lista a los eduria como descendientes de la Anaconda Remedio y a los ~Heda de la Anaconda Celeste, y prohíbe publicar cartografía de los sitios sagrados sin consulta previa a ACAIPI. Respalda el oficio del sabedor que recorre en espíritu los cerros y la decisión de la ficha de no reproducir códigos ni coordenadas.",
    limitation:
      "No nombra ningún cerro de la lista ni la cera de abejas como materia del origen: es el marco normativo y ritual de los sitios sagrados. El formulario se descarga en .doc (inglés) desde la página del elemento; se leyó completo.",
  }),
  aCAIPIPlan2010: source({
    title: "Plan Especial de Salvaguardia de la manifestación Hee Yaia Keti Oka, el Conocimiento Tradicional (Jaguares de Yuruparí) para el Manejo del Mundo de los grupos indígenas del río Pirá Paraná",
    author: "ACAIPI y Ministerio de Cultura de Colombia",
    year: 2010,
    type: "plan de salvaguardia redactado por las autoridades tradicionales indígenas",
    url: "https://patrimonio.mincultura.gov.co/SiteAssets/Paginas/Los-conocimientos-tradicionales-de-los-chamanes-jaguares-de-Yurupar%C3%AD/04-Jaguares%20de%20Yurupar%C3%AD.pdf",
    summary:
      "Nombra los Hee Botari, «Cerros de Yuruparí» o de las Trompetas Sagradas, fundamentales para los maestros oradores y danzadores y lugar donde se hallaron en el principio los elementos de danza; dice que el papel central del Baya en el ritual es narrar los nombres de esos cerros y que los lugares recorridos se volvieron canciones. Clasifica los lugares sagrados con sus políticas de manejo, entre ellos los Herika Botari, «soportes/estantillos» de las malocas espirituales de origen de los frutales, y menciona los «Estantillos de Cera de Abejas». Es la misma noción de cerro-estantillo, con cera y con lista de nombres, en un documento de gobierno propio.",
    limitation:
      "Documento normativo: no reproduce la lista de Reynel Ortega ni cuenta el paso de las Anacondas por cada cerro. Es distinto de la página de patrimonio ya citada en el pool (misma manifestación, otro documento). Bien colectivo de todos los pueblos del Pirá Paraná, no sólo barasana.",
  }),
  reichelDolmatoffDesana1973: source({
    title: "Desana. Le symbolisme universel des Indiens Tukano du Vaupès (traducción francesa de Desana. Simbolismo de los indios tukano del Vaupés, 1968)",
    author: "Gerardo Reichel-Dolmatoff",
    year: 1973,
    type: "monografía etnográfica con textos míticos (Gallimard), PDF completo en la Biblioteca Digital Curt Nimuendajú",
    url: "https://www.etnolinguistica.org/biblio:reichel-1973-desana",
    summary:
      "Es la versión desana que la ficha contrasta: el Sol comete incesto con su hija en el raudal de Wainabí, origen de la menstruación, y Luna, hermano gemelo o menor, intenta seducirla; como castigo el Sol le quita la corona de plumas del mismo tamaño que la suya y le deja una pequeña, y desde entonces viven separados en el cielo. Más adelante (pp. 95-96) cuenta que Luna, «sol de noche», baja a la tierra, se quita la corona de plumas blancas, la cuelga de un árbol y abre un hoyo para comer los cadáveres y los huesos de los muertos antes de volver a ponérsela y subir; y describe los eclipses de luna. Da así el paralelo exacto de la corona que se quita al bajar y de los huesos escarbados bajo tierra.",
    limitation:
      "Es desana, pueblo vecino tukano oriental, no barasana, y la propia monografía de Hugh-Jones advierte que los barasana no cuentan el incesto del Sol: se cita como la versión con la que la ficha se contrasta, no como fuente del relato. Traducción francesa de 1973; el original castellano de 1968 no tiene copia abierta localizada. El enlace de descarga del PDF devolvió 500 una vez y funcionó al reintentar.",
  }),
};

/**
 * Acepta una clave suelta o una clave con resumen y límite propios del mito
 * (`{ key, summary, limitation }`). La ficha bibliográfica la fija el pool; lo
 * que cambia por mito es qué dice esa obra sobre ese relato.
 */
export function pickBarasanaSources(...entries) {
  const vistas = new Set();
  const salida = [];
  for (const entrada of entries) {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = barasanaSources[key];
    if (!selected) {
      const visto = typeof entrada === "string" ? entrada : JSON.stringify(entrada);
      throw new Error(`Fuente Barasana desconocida: ${visto}`);
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
