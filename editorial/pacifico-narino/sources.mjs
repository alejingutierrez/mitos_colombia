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

export const pacificoNarinoSources = {
  boellEmbilpud: source({
    title: "Ecofeminismos y defensa del territorio",
    author: "Fundación Heinrich Böll Colombia",
    year: 2025,
    type: "crónica con voz comunitaria de Muellamués",
    url: "https://co.boell.org/es/2025/03/06/ecofeminismos-y-defensa-del-territorio",
    summary:
      "Recoge una formulación contemporánea del origen Pasto ligada a Embilpud, Embilquer, Chiles, Cumbal y la defensa territorial.",
    limitation:
      "Es una crónica reciente y no permite fijar una única versión ancestral para todos los Pastos.",
  }),
  lahoraEmbilpud: source({
    title: "Leyenda Pasto: Embilput y Embilquer",
    author: "Diario La Hora",
    year: 2003,
    type: "divulgación regional de tradición oral",
    url: "https://www.lahora.com.ec/archivo/Leyenda-Pasto-Embilput-y-Embilquer-20031119-0177.html",
    summary:
      "Narra el nacimiento de los dos hermanos y su relación con los volcanes Chiles y Cumbal.",
    limitation:
      "La publicación no identifica con detalle la cadena oral ni resuelve variaciones ortográficas.",
  }),
  tulcanEmbilpud: source({
    title: "Leyenda Pasto: Embilput y Embilquer",
    author: "Tulcán Online",
    type: "divulgación cultural fronteriza",
    url: "https://www.tulcanonline.com/index.php/cultura/leyendas/200-leyenda-pasto-embilput-y-embilquer.html",
    summary:
      "Conserva otra circulación escrita del ciclo de los hermanos y los dos volcanes en el territorio Pasto.",
    limitation:
      "Es una fuente secundaria y puede depender de versiones impresas anteriores.",
  }),
  geologiaChilesCumbal: source({
    title: "Volcanes Chiles y Cerro Negro: evolución geológica",
    author: "Boletín de Geología, Universidad Industrial de Santander",
    year: 2016,
    type: "artículo científico de contexto territorial",
    url: "https://www.scielo.org.co/scielo.php?pid=S0120-02832016000400004&script=sci_arttext",
    summary:
      "Describe el complejo volcánico fronterizo y permite evitar una geografía fantástica presentada como dato físico.",
    limitation:
      "No es fuente narrativa y no prueba ninguna secuencia del mito.",
  }),
  sgcChiles: source({
    title: "Generalidades del volcán Chiles",
    author: "Servicio Geológico Colombiano",
    type: "ficha científica institucional",
    url: "https://www2.sgc.gov.co/sgc/volcanes/VolcanChiles/Paginas/generalidades-volcan-chiles.aspx",
    summary:
      "Aporta ubicación, rasgos y vigilancia oficial del Chiles.",
    limitation:
      "Se usa exclusivamente para contexto geográfico.",
  }),
  sgcCumbal: source({
    title: "Generalidades del volcán Cumbal",
    author: "Servicio Geológico Colombiano",
    type: "ficha científica institucional",
    url: "https://www2.sgc.gov.co/sgc/volcanes/VolcanCumbal/Paginas/generalidades-volcan-cumbal.aspx",
    summary:
      "Aporta ubicación y características institucionales del Cumbal.",
    limitation:
      "No registra el relato de Embilpud y Embilquer.",
  }),
  banrepRumichaca: source({
    title: "Rumichaca",
    author: "Enciclopedia del Banco de la República",
    type: "síntesis histórica y territorial",
    url: "https://enciclopedia.banrepcultural.org/index.php/Rumichaca",
    summary:
      "Describe el puente natural, las aguas termales y la leyenda del chivo asociado con el Diablo.",
    limitation:
      "Resume motivos sin atribuir un narrador individual.",
  }),
  lahoraRumichaca: source({
    title: "Mitos: El Diablo desafió a Dios en Rumichaca",
    author: "Diario La Hora",
    year: 2006,
    type: "relato regional con cadena familiar identificada",
    url: "https://www.lahora.com.ec/imbaburacarchi/Mitos--El-Diablo-desafio-a-Dios-en-Rumichaca-20060814-0205.html",
    summary:
      "Conserva el desafío para construir dos puentes y una transmisión atribuida a Miche Higuera y sus descendientes.",
    limitation:
      "Es una mediación periodística de memoria familiar y no una versión total de Rumichaca.",
  }),
  telegrafoRumichaca: source({
    title: "El balneario de Rumichaca, en el olvido",
    author: "El Telégrafo",
    type: "crónica territorial y memoria local",
    url: "https://www.eltelegrafo.com.ec/noticias/regional-norte/205/el-balneario-de-rumichaca-en-el-olvido",
    summary:
      "Relaciona el balneario y las aguas termales con recuerdos locales de Rumichaca.",
    limitation:
      "No sostiene por sí sola la competencia entre Dios y el Diablo.",
  }),
  osejoRumichaca: source({
    title: "Rituales y sincretismo en el resguardo indígena de Ipiales",
    author: "Osejo y Flores",
    type: "investigación académica regional",
    url: "https://museoelchalguar.com/wp-content/uploads/2021/07/4.-Rituales-y-sincretismo-en-el-resguardo-indigena-de-Ipiales.pdf",
    summary:
      "Registra la aparición del chivo en cuevas y recodos y su intercambio de riquezas por almas.",
    limitation:
      "Ese motivo se conserva como variante y no se injerta en la construcción de los puentes.",
  }),
  utnRumichaca: source({
    title: "Patrimonio cultural y natural de Rumichaca",
    author: "Universidad Técnica del Norte",
    type: "tesis de investigación territorial",
    url: "https://repositorio.utn.edu.ec/bitstream/123456789/7677/1/PG%20564%20TESIS.pdf",
    summary:
      "Documenta la denominación popular de Puente de Dios y Puente del Diablo.",
    limitation:
      "No ofrece una transcripción oral completa para cada variante.",
  }),
  tengananRumichaca: source({
    title: "Rumichaca: más que un punto en el límite cero",
    author: "Carchi al Día, testimonio de Dimas Tenganán",
    year: 2016,
    type: "testimonio local publicado",
    url: "https://carchialdia.wordpress.com/2016/11/19/rumichaca-mas-que-un-punto-en-el-limite-cero/",
    summary:
      "Cuenta el desafío, el arrume de piedra y el canto del gallo que interrumpe la obra del Diablo.",
    limitation:
      "Es una publicación local digital; la ficha atribuye el motivo y no lo universaliza.",
  }),
  andeanGuagua: source({
    title: "Volcanic risk, cultural memory and the Galeras volcano",
    author: "Andean Geology",
    year: 2024,
    type: "artículo científico interdisciplinario",
    url: "https://www.scielo.cl/scielo.php?lng=en&nrm=iso&pid=S0718-71062024000100086&script=sci_arttext&tlng=en",
    summary:
      "Relaciona a Juan Rayo o Guagua Rayo con Jenoy, Galeras y memorias territoriales, y advierte límites interpretativos.",
    limitation:
      "Sintetiza fuentes comunitarias y académicas; no sustituye sus cadenas de narración.",
  }),
  corponarinoJuanambu: source({
    title: "Documento étnico de la cuenca del río Juanambú",
    author: "Corponariño",
    year: 2018,
    type: "planificación territorial con memoria étnica",
    url: "https://corponarino.gov.co/wp-content/uploads/2018/08/1-Documento_%C3%A9tnico_Juanamb%C3%BA.pdf",
    summary:
      "Sitúa al Guagua Rayo, el Mantel de la Vida, Jenoy y Taita Galeras dentro del territorio.",
    limitation:
      "Reúne varios pueblos y asuntos; no convierte todos sus elementos en una sola narración.",
  }),
  udenarGuagua: source({
    title: "El espíritu de la naturaleza indómita",
    author: "Universidad de Nariño",
    type: "investigación etnoliteraria sobre Jenoy",
    url: "https://sired.udenar.edu.co/16295/1/16295.pdf",
    summary:
      "Recoge memorias sobre el nacimiento del Guagua Rayo en Jenoy y menciona Aguapamba, Riopamba y a Dioselina Criollo.",
    limitation:
      "Las evocaciones no se funden con la versión de adopción como si fueran una sola escena.",
  }),
  redalycJenoy: source({
    title: "Los mayores y el territorio de Jenoy",
    author: "Revista académica con memoria comunitaria de Jenoy",
    type: "artículo con voces locales",
    url: "https://www.redalyc.org/journal/791/79158036009/html/",
    summary:
      "Conserva vínculos entre Juan Rayo, los mayores, Taita Galeras, la Virgen del Rosario y el territorio de Jenoy.",
    limitation:
      "No toda mención constituye una secuencia narrativa completa.",
  }),
  salvaguardaJenoy: source({
    title: "Plan de salvaguarda de Jenoy",
    author: "Comunidad de Jenoy",
    type: "documento comunitario de salvaguardia cultural",
    url: "https://es.scribd.com/document/950472858/2-PLAN-SALVAGUARDA-JENOY",
    summary:
      "Atribuye a Pascuala Criollo la versión de Juan y Telma que capturan y adoptan al Guagua Rayo.",
    limitation:
      "La copia consultada está mediada por Scribd; se conserva la atribución y no se completan vacíos.",
  }),
  goconqrGuagua: source({
    title: "Elementos narrativos: El Guagua Rayo",
    author: "Recurso educativo GoConqr",
    type: "síntesis pedagógica secundaria",
    url: "https://www.goconqr.com/en/mindmap/35809402/elementos-narrativos-el-guagua-rayo",
    summary:
      "Resume la secuencia de Juan, Telma, la sábana, las tijeras, la adopción y el regreso del niño.",
    limitation:
      "Es una derivación educativa; solo apoya lectura de la versión comunitaria, no su atribución.",
  }),
  flacsoGaleras: source({
    title: "Taita Galeras y el pueblo de Jenoy",
    author: "FLACSO Ecuador",
    year: 2020,
    type: "tesis antropológica sobre territorio y riesgo",
    url: "https://repositorio.flacsoandes.edu.ec/bitstream/10469/16519/5/TFLACSO-2020IARV.pdf",
    summary:
      "Analiza la relación territorial, política y afectiva de Jenoy con Taita Galeras.",
    limitation:
      "La tesis interpreta procesos contemporáneos y no transforma cada declaración en una leyenda antigua.",
  }),
  senadoJenoy: source({
    title: "Carta de la comunidad de Jenoy sobre Taita Galeras",
    author: "Comunidad de Jenoy, publicada en la Gaceta del Congreso",
    year: 2013,
    type: "declaración comunitaria en documento público",
    url: "https://leyes.senado.gov.co/proyectos/images/documentos/textos%20radicados/ponencias/2013/gaceta_739.pdf",
    summary:
      "Nombra a Taita Galeras como fuente de vida colectiva, fertilidad y una fuerza capaz de enojo y benevolencia.",
    limitation:
      "Es una declaración política y territorial; no ofrece por sí sola una secuencia narrativa completa.",
  }),
  esapJenoy: source({
    title: "Saberes ancestrales y territorio de Jenoy",
    author: "Escuela Superior de Administración Pública",
    type: "investigación académica y territorial",
    url: "https://repositoriocdim.esap.edu.co/bitstreams/54a4142b-7e1c-4b84-86e1-b72f65932b86/download",
    summary:
      "Aporta contexto sobre saberes, organización y vínculos territoriales de Jenoy.",
    limitation:
      "No se usa para inventar escenas de procesión ni acciones del volcán.",
  }),
  ucrGaleras: source({
    title: "Galeras: actividad volcánica y contexto geológico",
    author: "Revista Geológica de América Central, Universidad de Costa Rica",
    type: "artículo científico",
    url: "https://archivo.revistas.ucr.ac.cr/index.php/geologica/article/download/50061/50641",
    summary:
      "Proporciona contexto geológico sobre Galeras sin confundir conocimiento científico y memoria cultural.",
    limitation:
      "No es fuente narrativa y no prueba atributos espirituales.",
  }),
  secretariaCocha: source({
    title: "Leyenda de la laguna de La Cocha, Nariño",
    author: "Secretaría de Cultura, Recreación y Deporte",
    type: "divulgación institucional",
    url: "https://www.culturarecreacionydeporte.gov.co/es/bogotanitos/cuenta-la-leyenda/leyenda-de-la-laguna-la-cocha-narino",
    summary:
      "Publica la secuencia popular de Pucara, Tamia, Munani y el pilche que derrama el agua.",
    limitation:
      "No identifica narrador ni comunidad de registro; se trata como versión popular mediada.",
  }),
  udenarEncantamiento: source({
    title: "El encantamiento de La Cocha",
    author: "Universidad de Nariño",
    type: "investigación etnoliteraria",
    url: "https://sired.udenar.edu.co/248/1/63632.pdf",
    summary:
      "Estudia relatos, memoria y sentidos culturales asociados con la laguna.",
    limitation:
      "La interpretación académica no autoriza a armonizar versiones incompatibles.",
  }),
  refugioQuillacinga: source({
    title: "Memoria oral del Refugio del Sol",
    author: "Universidad de Nariño y comunidad Quillacinga",
    year: 2023,
    type: "investigación con versiones comunitarias directas",
    url: "https://sired.udenar.edu.co/16185/1/2023284.pdf",
    summary:
      "Registra dos versiones directas Quillacingas sobre la creación de La Cocha, ya conservadas en la ficha Cualanquizan.",
    limitation:
      "Sus secuencias difieren de Pucara y Tamia; se usan para marcar la frontera, no para validar esa trama.",
  }),
  udenarEncano: source({
    title: "Memoria cultural de El Encano y La Cocha",
    author: "Universidad de Nariño",
    year: 2009,
    type: "investigación territorial",
    url: "https://sired.udenar.edu.co/361/1/81610.pdf",
    summary:
      "Sitúa la laguna dentro de memorias y prácticas locales de El Encano.",
    limitation:
      "No toda descripción territorial forma parte del relato de Pucara y Tamia.",
  }),
  artesaniasCocha: source({
    title: "Laguna de La Cocha",
    author: "Artesanías de Pasto",
    type: "divulgación cultural regional",
    url: "https://www.artesaniasdepasto.com/colecciones/leyendas-regionales/laguna-de-la-cocha/",
    summary:
      "Presenta la versión de Pucara y Tamia como relato Quillacinga de circulación regional.",
    limitation:
      "Es una adaptación comercial y no una transcripción oral primaria.",
  }),
  ramsarCocha: source({
    title: "Laguna de La Cocha",
    author: "Servicio de Información sobre Sitios Ramsar",
    type: "ficha ambiental internacional",
    url: "https://rsis.ramsar.org/es/ris/1047",
    summary:
      "Aporta contexto ambiental verificado del humedal.",
    limitation:
      "No es fuente narrativa y no respalda personajes ni acciones.",
  }),
  parquesCorota: source({
    title: "Santuario de Flora Isla de La Corota",
    author: "Parques Nacionales Naturales de Colombia",
    type: "ficha institucional territorial",
    url: "https://www.parquesnacionales.gov.co/nuestros-parques/sf-isla-corota/",
    summary:
      "Describe el santuario insular dentro de La Cocha.",
    limitation:
      "Sirve como contexto geográfico y no completa el mito.",
  }),
  secretariaSirena: source({
    title: "Leyenda de la Sirena del Arco",
    author: "Secretaría de Cultura, Recreación y Deporte",
    type: "divulgación institucional de tradición oral",
    url: "https://ant.culturarecreacionydeporte.gov.co/es/bogotanitos/cuenta-la-leyenda/leyenda-de-la-sirena-del-arco",
    summary:
      "Atribuye a gente de Tumaco una reina del mar con cuerpo de mujer, pez y ave, máscara, daga o cetro, canto y baile lunar.",
    limitation:
      "No identifica narrador ni fecha de recolección para cada detalle.",
  }),
  ericSirena: source({
    title: "Cuentos y leyendas de Colombia para la escuela",
    author: "Educational Resources Information Center",
    year: 1997,
    type: "material educativo con versión breve regional",
    url: "https://files.eric.ed.gov/fulltext/ED430849.pdf",
    summary:
      "Conserva un núcleo más breve de la Sirena del Arco y su relación con marineros y el litoral.",
    limitation:
      "Es material pedagógico y no una transcripción de campo completa.",
  }),
  corponarinoSirena: source({
    title: "Caracterización cultural del Pacífico nariñense",
    author: "Corponariño",
    year: 2024,
    type: "caracterización institucional regional",
    url: "https://corponarino.gov.co/wp-content/uploads/2024/09/2.-Caracterizacion-cultural.pdf",
    summary:
      "Sitúa relatos y prácticas culturales de Tumaco en su territorio costero.",
    limitation:
      "No confirma cada detalle iconográfico de la Sirena.",
  }),
  kienykeSirena: source({
    title: "Barcos fantasmas, piratas y otras leyendas del océano",
    author: "KienyKe",
    type: "divulgación periodística",
    url: "https://www.kienyke.com/historias/barcos-fantasmas-piratas-y-otras-leyendas-del-oceano-0",
    summary:
      "Registra la circulación contemporánea de relatos marinos colombianos, incluida la Sirena del Arco.",
    limitation:
      "Es una síntesis secundaria y no se usa para añadir una trama nueva.",
  }),
  semanaFolclor: source({
    title: "Relatos de terror y misterio",
    author: "Revista Semana",
    type: "panorama periodístico de folclor colombiano",
    url: "https://www.semana.com/especiales/articulo/relatos-terror-misterio/73421-3/",
    summary:
      "Muestra la divulgación nacional de relatos regionales de misterio.",
    limitation:
      "Su alcance panorámico no prueba la antigüedad ni la exclusividad de motivos.",
  }),
  bibliotecaOcampo: source({
    title: "Mitos colombianos",
    author: "Javier Ocampo López, registro de catálogo bibliográfico",
    type: "referencia bibliográfica de recopilación",
    url: "https://biblioteca.apps-mosquera.gov.co/cgi-bin/koha/opac-detail.pl?biblionumber=13522",
    summary:
      "Identifica una recopilación colombiana usada para rastrear la circulación impresa del relato.",
    limitation:
      "El catálogo no ofrece el texto completo ni una cadena oral verificable.",
  }),
  flacsoMera: source({
    title: "Estudios afrocolombianos: Manuel María Mera, el terror desatado",
    author: "Memorias del I Coloquio Nacional de Estudios Afrocolombianos",
    type: "investigación académica con testimonios del Pacífico",
    url: "https://repositorio.flacsoandes.edu.ec/server/api/core/bitstreams/1c12116f-4b25-4612-acbe-655bfe18502a/content",
    summary:
      "Reúne testimonios que recuerdan a Manuel María Mera como santo o dios-diablo y como perseguidor de bailes e instrumentos.",
    limitation:
      "Las voces expresan memorias divergentes; no deben convertirse en una biografía hagiográfica uniforme.",
  }),
  agierMera: source({
    title: "La religion dans les communautés noires du Pacifique colombien",
    author: "Michel Agier",
    type: "artículo antropológico e histórico",
    url: "https://journals.openedition.org/lhomme/97?file=1",
    summary:
      "Sitúa la vida de Mera entre 1872 y 1926 y su paso por comunidades negras del Pacífico sur.",
    limitation:
      "Su reconstrucción histórica no resuelve la verdad factual de cada milagro recordado.",
  }),
  comisionMera: source({
    title: "La herencia de nuestros mayores",
    author: "Comisión para el Esclarecimiento de la Verdad",
    type: "material comunitario y educativo de memoria",
    url: "https://web.comisiondelaverdad.co/images/zoo/publicaciones/archivos/La_Herencia_de_Nuestros_Mayores.pdf",
    summary:
      "Recuerda la prohibición y destrucción de marimbas, cununos y bombos atribuida al Padre Mera.",
    limitation:
      "Es memoria histórica comunitaria, no inventario exhaustivo de todas sus actuaciones.",
  }),
  unescoMarimba: source({
    title: "Música de marimba y cantos y bailes tradicionales del Pacífico sur",
    author: "UNESCO",
    year: 2015,
    type: "expediente de patrimonio cultural inmaterial",
    url: "https://ich.unesco.org/es/RL/musica-de-marimba-y-cantos-y-bailes-tradicionales-de-la-region-colombiana-del-pacifico-sur-y-de-la-provincia-ecuatoriana-de-esmeraldas-01099",
    summary:
      "Documenta la importancia comunitaria de la marimba, los cantos y los bailes del Pacífico sur.",
    limitation:
      "No narra al Padre Mera; contextualiza aquello que sus prohibiciones afectaron.",
  }),
  rayaMarimba: source({
    title: "La marimba: de instrumento prohibido a identidad del Pacífico",
    author: "Revista Raya",
    type: "periodismo histórico y cultural",
    url: "https://www.revistaraya.com/la-marimba-de-instrumento-prohibido-por-la-iglesia-a-representar-la-identidad-del-pacifico.html",
    summary:
      "Reconstruye la persecución eclesiástica de la marimba y menciona la memoria del Padre Mera.",
    limitation:
      "Es una síntesis reciente y se contrasta con testimonios y estudios académicos.",
  }),
  gonzalezMera: source({
    title: "Actores sociales y dinámicas culturales de la religiosidad popular negra",
    author: "Julián González",
    year: 1995,
    type: "investigación sobre testimonios del Pacífico colombiano",
    url: "https://www.researchgate.net/publication/298090477_Actores_sociales_y_dinamicas_culturales_de_la_religiosidad_popular_negra_en_algunas_localidades_del_Pacifico_Colombiano_analisis_de_testimonios",
    summary:
      "Analiza testimonios sobre religiosidad popular, incluido el recuerdo ambivalente de Mera.",
    limitation:
      "La copia disponible está mediada por ResearchGate y se usa con cautela.",
  }),

  // ——— Búsqueda profunda 2026-09-22 ———
  investigacionMitos1993: source({
    title: "Mitos y leyendas de Colombia, tomo II",
    author: "Eugenia Villa Posse (investigación y compilación)",
    year: 1993,
    type: "antología con textos reproducidos",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620",
    summary:
      "Sección 27: José Miguel Garrido, «La leyenda viva del padre Mera», de Tras el alma de un pueblo (1980, pp. 191-201): testimonios, alabaos y partidas parroquiales de Jesús María Mera.",
    limitation:
      "Antología: reproduce el capítulo, no el libro completo.",
  }),
  uNESCOMusica2015: source({
    title: "Música de marimba y cantos y bailes tradicionales de la región colombiana del Pacífico sur y de la provincia ecuatoriana de Esmeraldas",
    author: "UNESCO, Patrimonio Cultural Inmaterial",
    year: 2015,
    type: "inscripción en la Lista Representativa",
    url: "https://ich.unesco.org/es/RL/musica-de-marimba-y-cantos-y-bailes-tradicionales-de-la-region-colombiana-del-pacifico-sur-y-de-la-provincia-ecuatoriana-de-esmeraldas-01099",
    summary:
      "La inscripción de la marimba y los cantos del Pacífico sur, que nombra Similitudes.",
    limitation:
      "No trata al padre Mera.",
  }),

  // ——— Búsqueda profunda 2026-09-22 ———
  vlietColombia1997: source({
    title: "Colombia, Many Countries in One (Fulbright-Hays 1997), con las páginas «Niños de las regiones de Colombia» de Esmeralda Van Vliet (ICAN)",
    author: "Ana María Alfaro; Esmeralda Van Vliet",
    year: 1997,
    type: "unidad didáctica con páginas web impresas",
    url: "https://files.eric.ed.gov/fulltext/ED430849.pdf",
    summary:
      "La Sirena del Arco de Tumaco, contada por Anita: reina del mar que sale de noche de su palacio y se deja ver sola en la playa.",
    limitation:
      "Divulgación infantil de pocas frases.",
  }),
  culturaLeyenda: source({
    title: "Leyenda de la Sirena del Arco",
    author: "Secretaría de Cultura, Recreación y Deporte de Bogotá (Bogotanitos)",
    type: "página divulgativa infantil",
    url: "https://www.culturarecreacionydeporte.gov.co/es/bogotanitos/cuenta-la-leyenda/leyenda-de-la-sirena-del-arco",
    summary:
      "La descripción larga: cola de ave, máscara, puñal y cetro, lapidario de once piedras, cantos, ballenas jorobadas.",
    limitation:
      "Sin firma ni fecha; amplía la ficha de 1997.",
  }),
  tiempoCuentos2004: source({
    title: "Cuentos de espantos y otros seres fantásticos del folclor colombiano",
    author: "Casa Editorial El Tiempo y Universidad Autónoma de Colombia, dir. Juan Torres Mantilla",
    year: 2004,
    type: "libro ilustrado de ficción declarada",
    url: "https://archive.org/details/CuentosDeEspantosYOtrosSeresFantasticosDelFolclorColombiano..compressed",
    summary:
      "Ficha de la Sirena del Arco (pp. 49-50): costa Pacífica, cola de delfín, palacios submarinos y la carta del biólogo cerca de la isla del Gallo.",
    limitation:
      "Se declara «recopilación de documentos imaginarios»: sus relatos son composición de autor.",
  }),
  caroNoticias1975: source({
    title: "Noticias Culturales n.º 179: folclor, el bufeo en Leticia",
    author: "José Joaquín Montes Giraldo (Instituto Caro y Cuervo)",
    year: 1975,
    type: "boletín",
    url: "https://bibliotecadigital.caroycuervo.gov.co/id/eprint/1634/1/NC_1E_179_1975.pdf",
    summary:
      "El bufeo de Leticia que toma figura de hombre para llevarse a las mujeres: paralelo de Similitudes.",
    limitation:
      "Otra región.",
  }),
  ibagueFolclor2013: source({
    title: "Folclor tolimense",
    author: "Misael Devia Morales (Universidad de Ibagué)",
    year: 2013,
    type: "libro de folclor regional",
    url: "https://repositorio.unibague.edu.co/server/api/core/bitstreams/7ecf7fde-a143-4744-a6bd-6f8618d50e2a/content",
    summary:
      "La Madre de Agua del Tolima, que llama a los niños desde la orilla: paralelo de Similitudes.",
    limitation:
      "Otra región.",
  }),
  homeroOdyssey1900: source({
    title: "The Odyssey",
    author: "Homero, trad. Samuel Butler (Project Gutenberg)",
    year: 1900,
    type: "poema épico",
    url: "https://www.gutenberg.org/ebooks/1727",
    summary:
      "Canto XII: las sirenas que atraen a los navegantes con su canto: paralelo de Similitudes.",
    limitation:
      "Obra clásica.",
  }),
};

export const pacificoNarinoSourceKeysBySlug = {
  "chiles-y-cumbal": [
    "boellEmbilpud",
    "lahoraEmbilpud",
    "tulcanEmbilpud",
    "geologiaChilesCumbal",
    "sgcChiles",
    "sgcCumbal",
  ],
  "el-diablo-chivo-de-rumichaca": [
    "banrepRumichaca",
    "lahoraRumichaca",
    "telegrafoRumichaca",
    "osejoRumichaca",
    "utnRumichaca",
    "tengananRumichaca",
  ],
  "guagua-rayo": [
    "andeanGuagua",
    "corponarinoJuanambu",
    "udenarGuagua",
    "redalycJenoy",
    "salvaguardaJenoy",
    "goconqrGuagua",
  ],
  "la-totuma-de-la-cocha": [
    "secretariaCocha",
    "udenarEncantamiento",
    "refugioQuillacinga",
    "udenarEncano",
    "artesaniasCocha",
    "ramsarCocha",
    "parquesCorota",
  ],
  "la-sirena-del-arco": [
    "secretariaSirena",
    "ericSirena",
    "corponarinoSirena",
    "kienykeSirena",
    "semanaFolclor",
    "bibliotecaOcampo",
  ],
  "taita-galeras": [
    "andeanGuagua",
    "corponarinoJuanambu",
    "redalycJenoy",
    "udenarGuagua",
    "flacsoGaleras",
    "senadoJenoy",
    "esapJenoy",
    "ucrGaleras",
  ],
  "el-padre-mera": [
    "flacsoMera",
    "agierMera",
    "comisionMera",
    "unescoMarimba",
    "rayaMarimba",
    "gonzalezMera",
  ],
};

/**
 * Resuelve las fuentes de una ficha. Con una lista —la `sourceKeys` que la
 * ficha declara— devuelve esas obras en ese orden, y cada entrada puede ser una
 * clave suelta o `{ key, summary, limitation }` con lo que esa obra dice de
 * ESE relato. Con un slug cae en el reparto heredado, que se conserva tal cual
 * para las fichas que todavía no se han rehecho.
 */
export function pickPacificoNarinoSources(slugOrEntries) {
  if (!Array.isArray(slugOrEntries)) return pickPacificoNarinoSourcesHeredadas(slugOrEntries);
  return slugOrEntries.map((entrada) => {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = pacificoNarinoSources[key];
    if (!selected) throw new Error(`Fuente desconocida: ${JSON.stringify(entrada)}.`);
    return {
      ...selected,
      ...(typeof entrada === "object" && entrada.summary ? { summary: entrada.summary } : {}),
      ...(typeof entrada === "object" && entrada.limitation ? { limitation: entrada.limitation } : {}),
    };
  });
}

// El reparto heredado, por slug. Sólo lo usan las fichas sin `sourceKeys`.
function pickPacificoNarinoSourcesHeredadas(slug) {
  const keys = pacificoNarinoSourceKeysBySlug[slug];
  if (!keys) throw new Error(`${slug}: no tiene expediente de fuentes.`);
  return keys.map((key) => {
    const selected = pacificoNarinoSources[key];
    if (!selected) throw new Error(`${slug}: fuente desconocida ${key}.`);
    return selected;
  });
}
