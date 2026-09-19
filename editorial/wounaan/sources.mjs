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

export const wounaanSources = {
  cnmhCuriche: source({
    title:
      "Rescatando la historia del Pueblo Wounaan del resguardo Santa Marta de Curiche",
    author:
      "Resguardo Santa Marta de Curiche y Centro Nacional de Memoria Histórica",
    year: 2023,
    type: "memoria comunitaria bilingüe",
    url: "https://centrodememoriahistorica.gov.co/wp-content/uploads/2023/04/Cartilla%20Rescatando%20la%20historia%20del%20Pueblo%20Wounaan%20del%20Resguardo%20Santa%20Marta%20de%20Curiche.pdf",
    summary:
      "Conserva voces de Santa Marta de Curiche sobre la creación en el Baudó, el nacimiento de la gente como muñecos de barro, el benkhuun, los sueños, la rogativa y su pequeña barca de madera.",
    limitation:
      "Es una memoria situada en una comunidad de Juradó y no debe presentarse como versión única para todo el pueblo Wounaan de Colombia y Panamá.",
  }),
  weguerCelso: source({
    title: "Capítulo cestería en Werregue: La creación del Weguer",
    author: "Narración de Celso Peña; Artesanías de Colombia",
    year: 2000,
    type: "relato tradicional con narrador identificado",
    url: "https://cendar-repositorio.metabiblioteca.org/bitstream/001/13978/1/INST-D%202019.%20377.pdf",
    summary:
      "Registra la competencia entre Ewandam y Dosat, la creación de plantas, la sal del mar y el origen del weguer en una narración atribuida a Celso Peña.",
    limitation:
      "El documento fue editado para un capítulo artesanal y emplea nombres cristianizados; no permite fechar el origen del relato ni separar todas sus capas históricas.",
  }),
  barcaArtesanias: source({
    title: "Colombia Artesanal: objetos rituales, barca de los espíritus",
    author: "Artesanías de Colombia",
    type: "documentación institucional de objeto ritual",
    url: "https://www.artesaniasdecolombia.co/PortalAC/Noticia/colombia-artesanal-objetos-rituales-barca-de-los-espiritus_8765",
    summary:
      "Describe una barca tallada en balso por un benkhuun, sus pasajeros protectores y un aprendizaje ritual guiado mediante sueños.",
    limitation:
      "Es una síntesis institucional sin transcripción completa de una ceremonia concreta; sus detalles no se mezclan en silencio con la rogativa de Curiche.",
  }),
  camawaPlan: source({
    title:
      "Maach Thumaankhun Durr: El territorio de todos nosotros, Plan de Vida del Pueblo Wounaan y Siepien del Bajo San Juan",
    author: "CAMAWA",
    year: 2005,
    type: "plan de vida comunitario",
    url: "https://studylib.es/doc/7889963/camawa---plan-de-vida---observatorio-%C3%A9tnico-cecoin",
    summary:
      "Expone territorio, lengua, memoria, rogativas, sueños, benkhuun y relación con Ewandam desde una organización del Bajo San Juan.",
    limitation:
      "La URL consultable es un espejo del plan comunitario porque el enlace histórico original no está disponible; se usa para contexto y no como facsímil garantizado.",
  }),
  minAmbienteTerritorio: source({
    title: "Función ecológica de la propiedad en los resguardos indígenas",
    author: "Ministerio de Ambiente y organizaciones indígenas",
    type: "estudio territorial e intercultural",
    url: "https://archivo.minambiente.gov.co/images/OrdenamientoAmbientalTerritorialyCoordinaciondelSIN/pdf/Funci%C3%B3n_Ecol%C3%B3gica_de_la_Propiedad/libro_funci%C3%B3n_ecol%C3%B3gica.pdf",
    summary:
      "Resume los ciclos de Maach Aai Pomaam, Ewandam y Dosat, la creación de figuras de barro, los cuatro mundos y las relaciones territoriales Wounaan.",
    limitation:
      "Es una síntesis de escala amplia y no identifica siempre narradores ni localidades para cada motivo.",
  }),
  minCulturaProfile: source({
    title: "Caracterización del pueblo Wounaan",
    author: "Ministerio de Cultura",
    type: "caracterización institucional",
    url: "https://mng.mincultura.gov.co/prensa/noticias/Documents/Poblaciones/PUEBLO%20WOUNAAN.pdf",
    summary:
      "Sitúa lengua, territorio, organización y bibliografía, incluido el plan de vida de CAMAWA.",
    limitation:
      "Aporta contexto contemporáneo y bibliográfico; no es una fuente narrativa independiente de los mitos.",
  }),
  gobiernoMayor: source({
    title: "Wounaan",
    author: "Gobierno Mayor de Autoridades Tradicionales Indígenas",
    type: "perfil de organización indígena",
    url: "https://www.gobiernomayor.org.co/wounaan/",
    summary:
      "Ubica comunidades en las cuencas del San Juan, Baudó, Curiche y otros ríos del Chocó y Valle del Cauca.",
    limitation:
      "Es un perfil panorámico y no fija una versión canónica de los relatos ni de las prácticas locales.",
  }),
  onicWounaan: source({
    title: "Waunana",
    author: "Organización Nacional Indígena de Colombia",
    type: "perfil de organización indígena",
    url: "https://www.onic.org.co/pueblos/1155-waunana",
    summary:
      "Ofrece contexto sobre identidad, lengua, territorio y continuidad contemporánea del pueblo Wounaan.",
    limitation:
      "La ficha es breve y su grafía histórica no reemplaza la autodenominación ni los testimonios comunitarios localizados.",
  }),
  cesteria2026: source({
    title: "Referencial nacional de cestería en wérregue",
    author: "Artesanías de Colombia",
    year: 2026,
    type: "referencial técnico y cultural",
    url: "https://artesaniasdecolombia.com.co/document/documentos/REF_CESTERIA_EN_WERREGUE_BOGOTA_MAYO_2026.pdf",
    summary:
      "Documenta la palma, la preparación de fibras, la cestería y su continuidad entre mujeres Wounaan en territorios y ciudades.",
    limitation:
      "Sirve para materialidad y práctica contemporánea; no sustituye la narración de Celso Peña sobre el origen del weguer.",
  }),
  madreName2016: source({
    title:
      "Aspectos da dialogia do mito Madre Ñame na cultura indígena wounaan-nonam",
    author: "Livia Mathias Simão y Hernán Sánchez Ríos",
    year: 2016,
    type: "artículo académico con narración comunitaria",
    url: "https://doi.org/10.1590/0103-6564D20160005",
    summary:
      "Publica y analiza el relato Madre Ñame narrado en woun meu por Juan Perdiz, líder de Puerto Pizario, y traducido al español antes de su versión portuguesa.",
    limitation:
      "La versión publicada atravesó dos traducciones y el artículo la analiza desde la psicología cultural; esta edición no finge recuperar palabra por palabra el relato en woun meu.",
  }),
  madreNameEducation: source({
    title:
      "Cultural practices as scenario for non-formal education of children in the Wounaan-nonam community of the Colombian Pacific Coast",
    author: "Livia Mathias Simão y Hernán Sánchez Ríos",
    year: 2017,
    type: "estudio académico de transmisión comunitaria",
    url: "https://doi.org/10.1080/02560046.2017.1300829",
    summary:
      "Estudia la circulación de relatos y prácticas culturales con niñas y niños Wounaan Nonam de Puerto Pizario.",
    limitation:
      "Analiza una situación educativa localizada y no convierte la versión de Puerto Pizario en tradición uniforme.",
  }),
  mdpiStorywork: source({
    title:
      "Wounaan Storying as Intervention: Storywork in the Crafting of a Multimodal Illustrated Story Book on People and Birds",
    author: "Rito Ismare Peña, Chenier Carpio Opua y otros",
    year: 2021,
    type: "investigación colaborativa contemporánea",
    url: "https://www.mdpi.com/2313-5778/5/4/91",
    summary:
      "Documenta un proceso dirigido con autoridades y autores Wounaan de Panamá para crear un relato infantil multimodal en woun meu, español e inglés.",
    limitation:
      "Corresponde a un proceso Wounaan de Panamá sobre personas y aves; no registra Madre Ñame ni representa la transmisión específica de Puerto Pizario.",
  }),

  // ——— Búsqueda profunda 2026-09-19 ———
  colombiaColombia2016: source({
    title: "Colombia artesanal: objetos rituales, barca de los espíritus",
    author: "Artesanías de Colombia",
    year: 2016,
    type: "nota de gremio artesanal sobre objeto ritual",
    url: "https://www.artesaniasdecolombia.com.co/PortalAC/Noticia/colombia-artesanal-objetos-rituales-barca-de-los-espiritus_8765",
    summary:
      "Describe la pieza que se percute en la ceremonia: tallada en madera de balso, con figuras protectoras llamadas páchaidáma y pintada con negro de jagua y rojo de achiote sobre el blanco de la madera.",
    limitation:
      "Habla del objeto de un especialista y de su aprendizaje mediante sueños, no de la rogativa colectiva liderada por mujeres; llega sin comunidad, sin río y sin año, y usa vocabulario emberá para un objeto wounaan.",
  }),
  salmoralNuevas1962: source({
    title: "Nuevas observaciones sobre los waunana del Chocó",
    author: "Manuel Lucena Salmoral",
    year: 1962,
    type: "etnografía",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/view/1677",
    summary:
      "Documenta que en 1962 un viaje a Noanamá, en el bajo San Juan, coincidió con una fiesta religiosa a la que habían acudido los waunana de la zona: el registro más antiguo localizable en abierto de estas reuniones ceremoniales.",
    limitation:
      "Otro lugar, otra cuenca y sesenta años de distancia respecto de la rogativa de Curiche; el propio autor califica sus notas de informales y de finalidad más lingüística que antropológica, y el facsímil es un escaneo sin capa de texto que no pudo leerse línea por línea.",
  }),
  guerreromedicina2016: source({
    title: "La medicina Wounaan en el desplazamiento: entre el olvido y el recuerdo",
    author: "Andrea González Guerrero",
    year: 2016,
    type: "artículo de revista arbitrada",
    url: "https://revistas.udistrital.edu.co/index.php/cpaz/article/view/10208",
    summary:
      "Explica el costo del desplazamiento para la práctica ritual y medicinal wounaan, que es exactamente lo que la memoria de Curiche describe al perder la casa ceremonial, los instrumentos y los materiales para fabricar el carrizo.",
    limitation:
      "Su trabajo de campo es con familias desplazadas a la ciudad: no describe la rogativa, ni la barca percutida, ni los cuatro flautistas.",
  }),
  rojasescalera1986: source({
    title: "La escalera de cristal: términos y conceptos cosmológicos de los indígenas emberá",
    author: "Mauricio Pardo Rojas",
    year: 1986,
    type: "artículo de revista arbitrada",
    url: "https://revistas.unal.edu.co/index.php/maguare/article/view/21-46",
    summary:
      "Permite medir la diferencia estructural: entre los emberá, las figuras creadoras quedan confinadas al tiempo del origen, no reciben reverencia ni se les piden favores, y la comunicación pasa por los espíritus del mundo intermedio; la rogativa wounaan, en cambio, se dirige a Ewandam.",
    limitation:
      "Fuente emberá, pueblo y lengua distintos del wounaan, con campo en el alto Baudó entre 1980 y 1983. No describe ninguna rogativa wounaan.",
  }),
  uribeplata2001: source({
    title: "El oro y la plata entre los embera y waunaan",
    author: "Luis Guillermo Vasco Uribe",
    year: 2001,
    type: "artículo de revista arbitrada",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/download/4861/5107",
    summary:
      "Registra la pintura con jagua y el adorno con chaquiras como preparación de ceremonias en el Chocó, que Esmeralda Carpio también menciona al recordar cómo se entraba a la rogativa, con guayuco los hombres y paruma blanca las mujeres.",
    limitation:
      "Trata a embera y waunaan en conjunto y la escena ceremonial que detalla, observada en el río Majecito, es emberá y panameña.",
  }),
  colombiaorigen: source({
    title: "El origen de la palma de weguer",
    author: "Celso Piña (narrador); Artesanías de Colombia",
    type: "nota de gremio artesanal con relato de narrador identificado",
    url: "https://www.artesaniasdecolombia.com.co/PortalAC/Noticia/el-origen-de-la-palma-de-weguer_11850",
    summary:
      "Publica el relato de la creación del weguer atribuido a Celso Piña, docente de la Escuela Centro Indígena La Unión de Pichimá, en el Litoral del San Juan: el plátano de Dios que libraba del trabajo, el viaje de Ewandam en busca de ropa, la llegada de Dosat con machete y hacha, la prueba de salar el mar —un barco entero de sal frente a una sola cucharada— y las parejas de plantas contrastadas, plátano y platanillo, caña de azúcar y caña brava, chontaduro y weguer.",
    limitation:
      "Es una nota de gremio artesanal y no una etnografía: no dice dónde ni cuándo narró Celso Piña, traduce a Dosat directamente como Satanás, coloca la prueba de la sal antes de la competencia de las plantas y presenta la palma dentro de un argumento sobre el oficio. La grafía del apellido difiere de la que usaba el archivo de este sitio, que escribía Celso Peña.",
  }),
  bernalBotswanan2013: source({
    title: "Botswanan palm basketry among the Wounaan of western Colombia: lessons from an intercontinental technology transfer",
    author: "Bernal, Galeano, García y Palacios",
    year: 2013,
    type: "artículo de revista arbitrada",
    url: "https://bioone.org/journals/Tropical-Conservation-Science/volume-6/issue-2/194008291300600204/Botswanan-palm-basketry-among-the-Wunaan-of-western-Colombia/10.1177/194008291300600204.full",
    summary:
      "Fecha el oficio que el relato parece explicar: antes de los años setenta los Wounaan hacían cestos enrollados simples con esa misma fibra, oscuros o del color natural, con poca o ninguna decoración y a menudo como subproducto de las palmas tumbadas para construir casas; la puntada apretada llegó a Pichimá cuando una misionera española llamada Rosa llevó muestras del delta del Okavango tejidas por los Ba Yei y los HaMbukushu, los Wounaan la adoptaron con sus propios diseños y el auge comercial del cántaro es de los ochenta y noventa.",
    limitation:
      "Es un estudio de etnobotánica y conservación centrado en la técnica, la palma y el mercado: no recoge el relato de Ewandam y Dosat, no nombra tejedoras y no discute el sentido ritual de la fibra.",
  }),
  simaoAspectos2016: source({
    title: "Aspectos da dialogia do mito Madre Ñame na cultura indígena wounaan-nonam",
    author: "Lívia Mathias Simão y Hernán Sánchez Ríos",
    year: 2016,
    type: "artículo de revista arbitrada",
    url: "https://www.scielo.br/j/pusp/a/MJz6mwWyYMmqJjyzHM9LhBF/?lang=es",
    summary:
      "Permite el contraste interno entre dos llegadas de planta: el ñame también aparece después de creada la gente, pero por una sepultura río abajo y no por una respuesta fallida en una competencia entre hacedores.",
    limitation:
      "Es un artículo sobre otro mito y otra comunidad del bajo San Juan, y su texto atravesó dos traducciones, del woun meu al español y de ahí al portugués.",
  }),
  upuaMorfosintaxis2012: source({
    title: "Morfosintaxis del waunana a partir de un texto tradicional",
    author: "José Manuel Murillo Miranda; historia tradicional narrada por Diego Upúa",
    year: 2012,
    type: "descripción lingüística con texto tradicional",
    url: "https://dialnet.unirioja.es/descarga/articulo/5476357.pdf",
    summary:
      "Permite tratar las grafías divergentes del nombre del creador como variantes de escritura y no como personajes distintos: describe el woun meu como una sola lengua hablada en el Chocó y en el Darién, cuya variación mayor corre entre tierras altas (dusĩ pien) y tierras bajas (du charpien) y no entre países.",
    limitation:
      "El corpus analizado es una historia tradicional narrada por Diego Upúa en el Darién panameño, ajena a la cosmogonía, y el trabajo es gramatical: no discute ninguna versión de la creación.",
  }),
  frenchResena2021: source({
    title: "Reseña de «Crafting Wounaan Landscapes: Identity, Art, and Environmental Governance in Panama's Darién», de Julie Velásquez Runk",
    author: "Katherine E. French",
    year: 2021,
    type: "reseña académica",
    url: "https://www.ojs.ethnobiology.org/index.php/ebl/article/download/1727/901?inline=1",
    summary:
      "Resume cómo la etnografía de Velásquez Runk describe el mundo en que despierta la gente de barro: un paisaje cargado de espíritus que habitan ecosistemas y objetos, con los ríos como eje de los intercambios sociales y como motivo recurrente del arte wounaan.",
    limitation:
      "Es una reseña y no la obra reseñada; el libro trata de los Wounaan del Darién panameño, vecinos legítimos pero de otro país, y su edición española del ICANH de 2020 no está disponible en descarga libre.",
  }),
};

/**
 * Acepta una clave suelta o una clave con resumen y límite propios del mito
 * (`{ key, summary, limitation }`). La ficha bibliográfica la fija el pool; lo
 * que cambia por mito es qué dice esa obra sobre ese relato.
 */
export function pickWounaanSources(...entries) {
  const entradas = entries;
  const vistas = new Set();
  const salida = [];
  for (const entrada of entradas) {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = wounaanSources[key];
    if (!selected) {
      const visto = typeof entrada === "string" ? entrada : JSON.stringify(entrada);
      throw new Error(`Fuente Wounaan desconocida: ${visto}`);
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
