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

export const bariSources = {
  mandatoJusticia: source({
    title:
      "Ruta metodológica para la construcción del Ibakaina – Mandato de Justicia del Pueblo Barí",
    author: "Asociación de Autoridades Tradicionales del Pueblo Barí Ñatubaiyibarí",
    year: 2021,
    type: "mandato y memoria comunitaria",
    url: "https://www.minjusticia.gov.co/programas-co/fortalecimiento-etnico/Documents/banco2021/IniciativasApoyadas/35.%20Ruta%20Metodol%C3%B3gica%20CONSTRUCCION%20DEL%20IBAKAINA%20%E2%80%93%20MANDATO%20DE%20JUSTICIA%20DEL%20PUEBLO%20BAR%C3%8D.pdf",
    summary:
      "Expone con voz organizativa Barí la ley de origen de Sabaseba, la salida de la gente de las piñas, las transformaciones animales, Sibabió, el bejuco de la Luna y el árbol que formó las cuencas del Catatumbo y del Río de Oro.",
    limitation:
      "Comparte deliberadamente solo una parte del conocimiento que las autoridades consideran comunicable al público no Barí; esta edición respeta ese límite.",
  }),
  memoriaHistorica: source({
    title: "Documento preliminar de memoria histórica del Pueblo Barí",
    author: "Asociación de Autoridades Tradicionales del Pueblo Barí Ñatubaiyibarí",
    year: 2016,
    type: "memoria histórica comunitaria",
    url: "https://www.centrodememoriahistorica.gov.co/micrositios/comunidades-etnicas/assets/pdf/Informe-de-Memoria-Pueblo_Bari.pdf",
    summary:
      "Recoge la autodenominación Barí, el nombre Ishtana, el ordenamiento de Sabaseba y testimonios de mayores del resguardo Motilón Barí.",
    limitation:
      "Es un documento preliminar de memoria y reparación, no una edición filológica completa de cada relato.",
  }),
  cnmhHijosSabaseba: source({
    title: "Los hijos de Sabaseba: Ishtana resiste, voces del pueblo Barí",
    author: "Pueblo Barí y Centro Nacional de Memoria Histórica",
    year: 2017,
    type: "micrositio de memoria comunitaria",
    url: "https://centrodememoriahistorica.gov.co/micrositios/catatumbo/bari.html",
    summary:
      "Sitúa a Sabaseba como ordenador y maestro, el territorio transfronterizo, el bohío y siete mundos alrededor de Ishtana.",
    limitation:
      "Es una síntesis pública multimedia; no contiene las transcripciones extensas ni toda la variación local.",
  }),
  rocha2010: source({
    title:
      "El Sol babea jugo de piña: Antología de las literaturas indígenas del Atlántico, el Pacífico y la Serranía del Perijá",
    author: "Selección, introducción y notas de Miguel Rocha Vivas",
    year: 2010,
    type: "antología crítica de oraliteraturas indígenas",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll8/id/3/download",
    summary:
      "Reúne el corpus Barí publicado sobre el bejuco celeste, Sabaseba, la piña, Sibabió, el árbol de los ríos, el nacimiento del Sol y el viaje de Caminar liviano, con procedencias bibliográficas.",
    limitation:
      "Es una compilación y estudio de registros anteriores; varias narraciones llegaron mediante traducciones, misioneros y editores no Barí.",
  }),
  cervantesRocha: source({
    title: "Ficha bibliográfica de El Sol babea jugo de piña",
    author: "Biblioteca Virtual Miguel de Cervantes",
    year: 2010,
    type: "registro bibliográfico institucional",
    url: "https://www.cervantesvirtual.com/obra/el-sol-babea-jugo-de-pina-antologia-de-las-literaturas-indigenas-del-atlantico-el-pacifico-y-la-serrania-del-perija-882849/",
    summary:
      "Confirma autoría, edición, sello institucional y alcance de la antología de Miguel Rocha Vivas.",
    limitation:
      "Acredita la publicación, pero no funciona como testimonio narrativo independiente.",
  }),
  mundoBari: source({
    title: "Mundo Barí: un pueblo que se niega a desaparecer",
    author: "David Alonso Páez Quintero, Orlando Diago Rodríguez y otros",
    type: "monografía regional de divulgación",
    url: "https://mariojavierpacheco.net/wp-content/uploads/2015/12/MUNDO-BARI-bb-2.pdf",
    summary:
      "Sistematiza a Sabaseba, los Saimadoyi, Ñandóu, Chibáig, el origen de los ríos, Sibabió, los oficios y el ordenamiento del cosmos.",
    limitation:
      "No siempre identifica narradores, fechas o comunidades para cada pasaje y resume trabajos previos de distinta mediación.",
  }),
  familiaBari: source({
    title: "La familia Barí",
    author: "José Ricardo Hernández Gómez",
    year: 2015,
    type: "tesis doctoral en antropología",
    url: "https://gredos.usal.es/bitstream/handle/10366/128357/III_Hern%C3%A1ndezFuentesJR_FamiliaBar%C3%AD.pdf?isAllowed=y&sequence=1",
    summary:
      "Documenta organización familiar, cosmogonía, Sabaseba, Chibáig, Ñandóu, Sibabió, muerte y vocabulario con un amplio aparato bibliográfico.",
    limitation:
      "Integra materiales colombianos y venezolanos y debe leerse como interpretación académica, no como versión única de todas las comunidades.",
  }),
  sanchezPirela: source({
    title: "Filosofía amerindia: wayuu y barí",
    author: "Beatriz Sánchez Pirela",
    year: 2006,
    type: "artículo académico",
    url: "https://produccioncientificaluz.org/index.php/rlh/article/download/18954/18937/",
    summary:
      "Analiza el pensamiento mítico Wayuu y Barí, incluido el papel ordenador de Sabaseba, desde una lectura filosófica del lenguaje simbólico.",
    limitation:
      "Su énfasis es filosófico y ético; no publica por sí solo un corpus narrativo completo.",
  }),

  // ——— Búsqueda profunda 2026-09-19 ———
  caballerobari1980: source({
    title: "Los barí. Su mundo social y religioso",
    author: "Dionisio Castillo Caballero",
    year: 1980,
    type: "etnografía misionera con relatos grabados en lengua barí",
    url: "http://www.bidicap.org/doai/PS_NyG_1980v027n003p0413_0708/HTML//files/assets/common/downloads/publication.pdf",
    summary:
      "Describe la escatología grabada en lengua barí: la salida del bosobokú por nariz, oídos y boca, los basunchimba que salen al encuentro, la antesala, el camino blando dibóuriboúske, el juicio de Sabaséba sobre matar, robar, mentir y chismear, los tres destinos y el baño del aboo.",
    limitation:
      "Registro venezolano del Zulia; el autor discute abiertamente a Alcácer y su exposición es sistemática, no narrativa, de modo que reconstruye un modelo a partir de varias narraciones y no reproduce un relato único.",
  }),
  gomezBari1993: source({
    title: "Los Barí, en Geografía humana de Colombia. Nordeste indígena, tomo II",
    author: "Orlando Jaramillo Gómez",
    year: 1993,
    type: "capítulo de etnografía institucional",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll10/id/2809/download",
    summary:
      "Ubica en el mapa de cielos el lugar del encuentro de los muertos con sus familiares, en el kokda sada, y a los basunchimba en el barún, y resume la idea barí de la muerte como paso a un mundo nuevo.",
    limitation:
      "Capítulo colombiano de 1993 que no recoge ningún relato de viaje al más allá; sólo aporta la cartografía, tomada de Castillo.",
  }),
  sotobari2012: source({
    title: "Los barí: historia, sociedad y cultura",
    author: "Zaidy Fernández Soto y Asmery González",
    year: 2012,
    type: "monografía etnográfica de divulgación",
    url: "https://albaciudad.org/wp-content/uploads/2021/05/los_bari_historia_sociedad_y_cultura.pdf",
    summary:
      "Describe a los ichigbarí como seres del aire que pueden matar a los niños y a los que se teme de noche, lo que precisa qué clase de ser es el guía del viaje.",
    limitation:
      "Registro venezolano del Zulia que no recoge relato alguno de viaje al más allá; el PDF verificado está alojado en el sitio de un medio de comunicación.",
  }),

  // ——— Búsqueda profunda 2026-09-22 ———
  velasquezLiteratura2014: source({
    title: "Literatura barí, una lengua de origen chibcha",
    author: "Ronny Velásquez",
    year: 2014,
    type: "artículo académico (Estudios de Lingüística Chibcha 33: 181-208)",
    url: "https://archivo.revistas.ucr.ac.cr/2/index.php/chibcha/article/download/17575/17074/36063",
    summary:
      "Resume, en su apartado sobre los viajes al inframundo y a los «cielos intermedios», el mismo esquema narrativo del relato: espíritus del origen como los chigbarí y los basunchimba conocen dimensiones vedadas a los humanos; quien llega al mundo de la muerte ve a hombres, mujeres, niños y ancianos desnudos, ellos haciendo flechas de caña brava y ellas cestas; allí recibe a los visitantes un jefe guerrero; si alguien hace daño se desatan enfermedades, epidemias y terremotos; y hay sembrados de yuca que ningún visitante debe tocar. Lo lee como viaje chamánico y lo compara con el viaje de Medatia de los ye'kwana (Civrieux 1978). Cierra con el mapa de cielos: el kokda sada como lugar de encuentro de los basunchimba con sus familiares.",
    limitation:
      "Autor venezolano; el artículo es una síntesis de la literatura barí sin narrador ni comunidad para este pasaje y sin decir de dónde toma el episodio, que coincide punto por punto con el texto de De Armellada y Bentivenga: no es un testimonio independiente, sino una segunda lectura del mismo material. No nombra a Taigda Chigbana ni al yácura (habla de un «jefe guerrero» y de terremotos) y convierte al joven en chamán. El mapa de cielos lo toma de Jaramillo (1987).",
  }),
  aSOCBARICultura: source({
    title: "Cultura – Cosmovisión («Chibara – El Canto»)",
    author: "Asociación de Comunidades Motilón Barí de Colombia (ASOCBARI)",
    type: "sitio institucional de la organización indígena",
    url: "https://asocbari.org/espanol/pueblobari.cosmovision",
    summary:
      "Al describir el canto barí, dice que se le canta «a la luna que era visitada a través de una cuerda por los Barí» y que ilumina los senderos de cada hombre o mujer: es la única mención de la organización colombiana al camino hacia la Luna, y lo sitúa en la práctica viva del canto. En la misma página nombra a la Luna Chigbayra entre lo primero que Sabaseba creó.",
    limitation:
      "Colombiana, del Catatumbo, pero de una sola frase: no narra la subida, ni el corte, ni a los zamuros, ni da narrador o fecha (sólo una marca de 2007). Habla de «cuerda», no de bejuco. Sostiene la vigencia del motivo, no la trama.",
  }),
  aSOCBARICultura2: source({
    title: "Cultura – Cosmovisión («La Creación»)",
    author: "Asociación de Comunidades Motilón Barí de Colombia (ASOCBARI)",
    type: "sitio institucional de la organización indígena",
    url: "https://asocbari.org/espanol/pueblobari.cosmovision",
    summary:
      "Publica, en voz de la organización barí colombiana, el relato de la creación del agua: después de crear el Sol, Sabaseba convoca a todos para hallar a un barí capaz de partir con una parte de su cuerpo el árbol Majumba Asára; el elegido, pequeño, delgado y con aspecto de ave, lo derriba con el pico, y de sus ramas brotan los ríos y afluentes, entre ellos el Iquiboqui o Río de Oro y el Daboqui o Río Catatumbo. Sigue con los bisoura (jabalíes) que aplanan las montañas.",
    limitation:
      "Versión colombiana, del Catatumbo, sin narrador ni comunidad identificados y sin fecha visible más allá de una marca de 2007 en la página. Difiere del corpus grabado: quien tumba el árbol no es Kokébadóu con machete por orden de Sabaséba, sino un barí con aspecto de ave que lo parte con el pico en una prueba; el nombre Majumba Asára no aparece en Castillo (que habla de árboles asá). El mismo texto se reproduce en el informe Ishtana de 2005, así que no son dos testimonios independientes.",
  }),
  jIshtana2005: source({
    title: "Ishtana, el territorio tradicional barí. Informe final sobre territorio tradicional del Pueblo Indígena Barí, región del Catatumbo, Norte de Santander",
    author: "Carlos Augusto Salazar J., para ASOCBARI, CECOIN y Oxfam",
    year: 2005,
    type: "informe técnico de territorio con relatos del Plan de Vida barí",
    url: "https://www.historiadecucuta.com/wp-content/uploads/2021/01/informe_final_ishtana_y_mapas-Motilon-Bari..pdf",
    summary:
      "En el apartado 3.3, «La creación del mundo Barí, según relatos tradicionales del Plan de Vida», trae dos versiones una al lado de la otra: la de Jaramillo (1992), en que el saimadoyi Kokebadou corta un gran tronco del que salían ruidos y brotan las aguas, y la del Plan de Vida Ichidjí ya ababí, en que un barí con aspecto de ave derriba con el pico el árbol Majumba Asára y de sus ramas nacen el Iquiboqui o Río de Oro y el Daboqui o Río Catatumbo. Su cuadro de toponimia da Iki Boki = Río de Oro y Da Boki = Río Grande o Catatumbo.",
    limitation:
      "Informe colombiano elaborado con talleres de caciques en Tibú (agosto de 2005) y revisado por ASOCBARI. El PDF sólo se encontró alojado en historiadecucuta.com, sitio de historia local y no de las entidades autoras. La versión de Kokebadou la toma de Jaramillo, ya en el pool; su aporte propio es el texto del Plan de Vida.",
  }),
  dEmpaireIntroduccion1966: source({
    title: "Introducción al estudio de la cultura barí. Capítulo tercero. Estructura social (sección «Cosmovisión»)",
    author: "Oswaldo D'Empaire",
    year: 1966,
    type: "artículo etnográfico en revista universitaria",
    url: "https://produccioncientificaluz.org/index.php/kasmera/article/download/4266/4263",
    summary:
      "En la sección «Cosmovisión» (pp. 272-273) afirma que la génesis de los barí está en los saimadoyi, habitantes del sol, que bajaron a la tierra por una liana hasta la confluencia del Tukuku y el Santa Rosa, y recoge una explicación de las estrellas distinta de las de Castillo: los planetas son «estrellas de verdad» y las estrellas corrientes, «de mentira», nacidas de planetas que murieron. Abre además el capítulo diciendo que los barí tienen «el Sol por origen».",
    limitation:
      "Registro venezolano (Zulia, Kasmera 2/2, Universidad del Zulia) de un médico que convivió en un bohío barí; no narra la prueba de los collares ni nombra a Ñandóu ni a Chibáig. Es el pasaje (p. 272) que Castillo (1980) señala como error al hacer descender a los barí del sol por una liana. Sirve como la versión contraria documentada, no como apoyo del relato publicado.",
  }),
  alterProduccion2008: source({
    title: "Producción de un documental cinematográfico sobre los yakuikuibái de la etnia barí de la Sierra de Perijá. Fase III: Culminación",
    author: "Anya Alter, Yureny Atencio y Patricia Ramírez",
    year: 2008,
    type: "trabajo de grado con entrevista de campo",
    url: "https://virtual.urbe.edu/tesispub/0085425/fase03.pdf",
    summary:
      "Transcribe en paráfrasis la entrevista al sagdou José Akrikdá, de la comunidad de Kumanda: antes no había sol y todo estaba oscuro; Sabaseba juntó a un grupo de hombres, les hizo ponerse sombreros con plumas de distintas aves para que alumbraran, y al salir el sol se oyó un viento fuerte y les dijo que vivirían siempre con la luz del día. En otra respuesta dice que Sabaseba enseñó a los barí a hacer el sol con una corona de plumas. Recoge también, de Lusbi Portillo, el mapa de nueve niveles con Barún Ashúa y Barúnnora, y de José Quintero Weir la definición de Ñanbobikorai como fuerza vital de la que proceden Sabaseba y los saimadoyi.",
    limitation:
      "Trabajo de pregrado venezolano (Universidad Rafael Belloso Chacín, Maracaibo) de comunicación social, no de antropología; la entrevista se da resumida en tercera persona y no en lengua barí. No nombra a Ñandóu ni a Chibáig ni cuenta la selección del ganador: la prueba se reduce a hombres con sombreros de plumas. El informante es probablemente el mismo José Akírikdá que Castillo lista entre sus narradores de los setenta, de modo que no es del todo independiente de su corpus. Ñanbobikorai aparece aquí fuera de Castillo y Jaramillo, lo que corrobora el término.",
  }),
};

/**
 * Acepta una clave suelta o una clave con resumen y límite propios del mito
 * (`{ key, summary, limitation }`). La ficha bibliográfica la fija el pool; lo
 * que cambia por mito es qué dice esa obra sobre ese relato.
 */
export function pickBariSources(...entries) {
  const entradas = entries;
  const vistas = new Set();
  const salida = [];
  for (const entrada of entradas) {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = bariSources[key];
    if (!selected) {
      const visto = typeof entrada === "string" ? entrada : JSON.stringify(entrada);
      throw new Error(`Fuente Barí desconocida: ${visto}`);
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
