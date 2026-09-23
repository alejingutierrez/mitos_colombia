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

export const pacificoRestanteSources = {
  caliBuziraco: source({
    title:
      "400 mil personas subieron a los cerros de Cristo Rey y Tres Cruces",
    author: "Alcaldía de Santiago de Cali",
    year: 2014,
    type: "publicación institucional con leyenda urbana",
    url: "https://web1.cali.gov.co/planeacion/publicaciones/mil_personas_subieron_a_los_cerros_de_cristo_rey_y_tres_cruces_el_jueves_santo_pub",
    summary:
      "Registra calamidades desde 1825, la figura del murciélago Buziraco, los hermanos Cuesta, las cruces de guadua de 1837 y los episodios de 1876 y 1925.",
    limitation:
      "Reproduce estereotipos raciales y religiosos que la ficha identifica críticamente y no presenta como descripción neutral de población afrodescendiente.",
  }),
  caliTresCruces: source({
    title: "Las Tres Cruces, historia de un monumento caleño",
    author: "Alcaldía de Santiago de Cali",
    year: 2014,
    type: "reseña institucional de patrimonio urbano",
    url: "https://web1.cali.gov.co/planeacion/publicaciones.php?dPrint=1&id=110027",
    summary:
      "Relaciona a Vicente y Juan Cuesta con las cruces de guadua de 1837 y sitúa la terminación del monumento de concreto en 1938.",
    limitation:
      "Sirve para cronología de circulación y monumento; no demuestra hechos sobrenaturales.",
  }),
  tiempoTresCruces: source({
    title: "Las Tres Cruces, ruta de peregrinos y caminantes",
    author: "El Tiempo",
    year: 2013,
    type: "crónica periodística regional",
    url: "https://www.eltiempo.com/archivo/documento/CMS-12715190",
    summary:
      "Documenta la peregrinación contemporánea y la asociación popular entre Buziraco, Cartagena y las cruces de 1837.",
    limitation:
      "Es una síntesis periodística y no una transcripción oral con narrador identificado.",
  }),
  sismoCali1925: source({
    title:
      "Contribución al análisis macrosísmico del terremoto del 7 de junio de 1925",
    author: "Revista de la Academia Colombiana de Ciencias",
    year: 2024,
    type: "artículo científico de contexto histórico",
    url: "https://raccefyn.co/index.php/raccefyn/article/view/2347",
    summary:
      "Verifica el terremoto de 1925 como acontecimiento físico e histórico independiente de la explicación legendaria.",
    limitation:
      "No atribuye el sismo a Buziraco ni sostiene la caída de las cruces como causalidad sobrenatural.",
  }),
  universalBuziraco: source({
    title: "La historia mal contada de Buziraco, el dios de La Popa",
    author: "El Universal",
    year: 2024,
    type: "relectura periodística crítica",
    url: "https://www.eluniversal.com.co/cartagena/2024/02/03/la-historia-mal-contada-de-buziraco-el-dios-que-aparecia-en-la-popa/",
    summary:
      "Cuestiona la demonización colonial de Buziraco y aporta contexto para no naturalizar una lectura cristiana y racializada.",
    limitation:
      "Es una reinterpretación reciente centrada en Cartagena, no prueba que toda versión caleña comparta su explicación.",
  }),
  caliPatrimonioCruces: source({
    title: "Recurso turístico Cerro de las Tres Cruces",
    author: "Infraestructura de Datos Espaciales de Cali",
    type: "ficha institucional territorial",
    url: "https://idesc.cali.gov.co/download/turismo/recursos_zonas/RT-73-C65p.pdf",
    summary:
      "Ubica el cerro y el monumento dentro del inventario turístico y territorial de Cali.",
    limitation:
      "Se usa para geografía y patrimonio, no para completar la trama de Buziraco.",
  }),

  valenciaCaballo: source({
    title: "El caballo de los caballos",
    author: "Marco Antonio Valencia Calle",
    year: 2014,
    type: "cuento literario firmado",
    url: "https://valenciacalle.blogspot.com/2014/04/estatua-de-sebastian-de-belalcazar-foto.html",
    summary:
      "Publica la ficción donde Victorio Macho lleva a Popayán restos de Babieca para inspirar y sostener el caballo de la estatua.",
    limitation:
      "El propio autor anuncia que contará un cuento; sus hechos fantásticos no son historia documental ni tradición ancestral.",
  }),
  proclamaLeyendasPopayan: source({
    title: "Leyendas extraordinarias de Popayán",
    author: "Proclama del Cauca y Valle",
    type: "reseña literaria regional",
    url: "https://proclamadelpacifico.com/leyendas-extraordinarias-de-popayan/",
    summary:
      "Identifica el relato del caballo y el Morro como una de las historias contemporáneas de Marco Antonio Valencia Calle.",
    limitation:
      "Es reseña de una obra literaria, no fuente independiente de una cadena oral antigua.",
  }),
  icanhMorro: source({
    title: "El Morro de Tulcán: arqueología de Popayán",
    author: "Revista Colombiana de Antropología, ICANH",
    type: "artículo arqueológico",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/view/1768",
    summary:
      "Documenta el Morro como sitio prehispánico y permite separar su historia arqueológica del cuento sobre la estatua.",
    limitation:
      "No registra el traslado de Babieca ni valida la ficción de Valencia Calle.",
  }),
  banrepBelalcazar: source({
    title: "Monumento a Sebastián de Belalcázar en Popayán",
    author: "Biblioteca Digital de Bogotá y Banco de la República",
    type: "registro fotográfico patrimonial",
    url: "https://www.bibliotecadigitaldebogota.gov.co/resources/2090131/",
    summary:
      "Conserva el registro visual e histórico del monumento emplazado en el Morro.",
    limitation:
      "El registro no atribuye identidad histórica al caballo ni prueba restos bajo la escultura.",
  }),
  memoriaMisakMorro: source({
    title: "El pueblo Misak quiere resignificar el Morro del Tulcán",
    author: "Hacemos Memoria",
    year: 2021,
    type: "periodismo de memoria con voces Misak",
    url: "https://hacemosmemoria.org/2021/08/24/el-pueblo-misak-quiere-resignificar-el-morro-del-tulcan-tras-derrumbar-la-estatua-de-belalcazar/",
    summary:
      "Explica la disputa memorial y la propuesta Misak de resignificar el Morro tras el derribo de la estatua.",
    limitation:
      "Contextualiza el lugar en el presente; no forma parte de la trama fantástica del caballo.",
  }),
  espectadorMorro: source({
    title: "La estatua de Belalcázar no regresará al Morro del Tulcán",
    author: "El Espectador",
    year: 2021,
    type: "reporte periodístico sobre memoria pública",
    url: "https://www.elespectador.com/colombia/mas-regiones/estatua-de-sebastian-de-belalcazar-no-regresara-al-morro-del-tulcan-en-popayan-article/",
    summary:
      "Registra la decisión contemporánea sobre la estatua y la necesidad de distinguir monumento, sitio arqueológico y ficción.",
    limitation:
      "No aporta evidencia narrativa sobre Babieca.",
  }),

  valenciaQuijotePage: source({
    title: "Muerte y entierro del Quijote en Popayán",
    author: "Marco Antonio Valencia Calle",
    year: 2020,
    type: "página oficial del autor",
    url: "https://marcoantoniovalencia.com/muerte-y-entierro-del-quijote-en-popayan/",
    summary:
      "Identifica el cuento, su autoría y su pertenencia a Leyendas extraordinarias de Popayán.",
    limitation:
      "La ficha comercial no sustituye el texto completo ni demuestra tradición oral previa.",
  }),
  valenciaQuijoteText: source({
    title: "Muerte y entierro del Quijote en Popayán, edición trilingüe",
    author: "Marco Antonio Valencia Calle",
    year: 2020,
    type: "texto literario primario",
    url: "https://marcoantoniovalencia.com/wp-content/uploads/woocommerce_uploads/2021/12/Muerte-y-entierro-del-Quijote-en-Popayan-tipaeu.pdf",
    summary:
      "Contiene la secuencia de Cervantes, el viaje del Quijote, la velación, el cortejo, la discusión sobre el entierro y la Torre del Reloj.",
    limitation:
      "Es ficción firmada y satírica; sus afirmaciones médicas, genealógicas e históricas pertenecen al juego literario.",
  }),
  proclamaQuijote: source({
    title: "El Quijote en Popayán",
    author: "Proclama del Cauca y Valle",
    type: "reseña y circulación literaria regional",
    url: "https://www.proclamadelpacifico.com/el-quijote-en-popayan/",
    summary:
      "Muestra la recepción regional de la ficción del Quijote en Popayán.",
    limitation:
      "No es una segunda cadena oral independiente del texto de Valencia Calle.",
  }),
  portafolioPopayan: source({
    title: "Un canto a Popayán",
    author: "Portafolio",
    type: "crónica cultural",
    url: "https://www.portafolio.co/economia/finanzas/canto-popayan-416380",
    summary:
      "Aporta contexto sobre la ciudad letrada, sus poetas y sus lugares culturales.",
    limitation:
      "No valida el entierro del personaje ficticio ni los diálogos narrados.",
  }),
  alcaldiaPopayan: source({
    title: "Historia de Popayán",
    author: "Alcaldía de Popayán",
    type: "síntesis histórica institucional",
    url: "https://www.popayan.gov.co/MiMunicipio/Paginas/Historia.aspx",
    summary:
      "Proporciona contexto histórico municipal para separar cronología real y anacronismos deliberados del cuento.",
    limitation:
      "No es fuente de la leyenda literaria.",
  }),
  unicaucaArchivo: source({
    title: "Archivo Histórico de la Universidad del Cauca",
    author: "Universidad del Cauca",
    type: "recurso institucional de contexto",
    url: "https://portal.unicauca.edu.co/versionP/Servicios/Archivo-Hist%C3%B3rico",
    summary:
      "Sitúa la memoria documental de Popayán y la Universidad del Cauca mencionada en el relato.",
    limitation:
      "No contiene prueba del velorio del Quijote; se usa solo como contexto.",
  }),

  guiaChocoYesca: source({
    title: "Guía turística del Chocó",
    author: "Ministerio de Comercio, Industria y Turismo y Fondo de Promoción Turística",
    type: "guía institucional con repertorio de mitos",
    url: "https://cdn.colombia.com/docs/turismo/sitios-turisticos/pacifico/choco.pdf",
    summary:
      "Define brevemente La Yesca como imaginario asociado con brujo o chinango y con bejucos o ramas que abrazan y ahogan.",
    limitation:
      "La formulación es muy corta, no identifica narrador y deja ambigua la dirección moral del daño.",
  }),
  turismoChocoYesca: source({
    title: "Cultura y tradiciones del Chocó",
    author: "El Turismo en Colombia",
    type: "divulgación turística derivada",
    url: "https://elturismoencolombia.com/a-donde-ir/turismo-en-choco/cultura-choco-tradiciones-colombia/",
    summary:
      "Reproduce el motivo breve de La Yesca dentro de un repertorio de relatos chocoanos.",
    limitation:
      "Depende de materiales turísticos previos y no aporta una narración completa independiente.",
  }),
  blogGuiaChoco: source({
    title: "Chocó, Colombia: guía turística, mitos y leyendas",
    author: "Oscurve Diverse",
    year: 2013,
    type: "reproducción digital de guía turística",
    url: "https://oscurve-diverse.blogspot.com/2013/06/choco-colombia-guia-turistica-mitos-y.html",
    summary:
      "Confirma la circulación digital de la misma descripción mínima de La Yesca.",
    limitation:
      "Es una fuente derivada; su coincidencia no equivale a un testimonio oral adicional.",
  }),
  scieloLianas: source({
    title: "Composición de lianas y bejucos en el Chocó Biogeográfico",
    author: "Rodriguésia",
    type: "artículo científico botánico",
    url: "https://www.scielo.br/j/rod/a/JJBkyZYPwbTKDQR9z83vzxv/",
    summary:
      "Documenta lianas y bejucos del paisaje biogeográfico asociado con la imagen de La Yesca.",
    limitation:
      "No es fuente narrativa y no prueba que una planta concreta corresponda al motivo.",
  }),
  iiapChoco: source({
    title: "Instituto de Investigaciones Ambientales del Pacífico",
    author: "IIAP",
    type: "contexto institucional biocultural",
    url: "https://iiap.org.co/",
    summary:
      "Aporta el marco regional del Chocó Biogeográfico y el valor de integrar conocimiento comunitario y científico.",
    limitation:
      "No registra La Yesca ni autoriza atribuirla a una comunidad étnica específica.",
  }),
  minambienteAtrato: source({
    title: "Sentencia T-622 de 2016: río Atrato",
    author: "Ministerio de Ambiente y Desarrollo Sostenible",
    year: 2016,
    type: "contexto institucional territorial",
    url: "https://atrato.minambiente.gov.co/",
    summary:
      "Sitúa el río Atrato y las comunidades de su cuenca en un marco contemporáneo de protección territorial.",
    limitation:
      "No sostiene el mito ni permite ubicarlo exclusivamente en el Atrato.",
  }),

  colombiaDagua: source({
    title: "Vallecaucanos aseguran que un duende se roba niños",
    author: "Colombia.com",
    year: 2019,
    type: "reporte periodístico de atribución comunitaria",
    url: "https://www.colombia.com/tecnologia/paranormal/aterrados-vallecaucanos-aseguran-que-duende-se-roba-ninos-de-la-comunidad-222133",
    summary:
      "Registra la búsqueda y hallazgo de una niña en Dagua, la mención de 'un niño' y la atribución comunitaria a un duende; añade crines trenzadas y objetos movidos.",
    limitation:
      "La menor fue hallada sana y la fuente no demuestra intervención sobrenatural; protege su identidad y trata la explicación como creencia.",
  }),
  tiempoDagua: source({
    title: "Aseguran que un duende peluquero secuestró a una niña",
    author: "Tiempo de San Juan",
    year: 2019,
    type: "republicación periodística internacional",
    url: "https://www.tiempodesanjuan.com/elmundo/2019/9/6/una-locura-aseguran-que-un-duende-peluquero-secuestro-una-nena-265483.html",
    summary:
      "Reproduce declaraciones policiales de Dagua y el motivo local de duendes que trenzan crines.",
    limitation:
      "El titular es sensacionalista y la nota depende del mismo episodio, no de una segunda investigación independiente.",
  }),
  culturaDuende: source({
    title: "El Duende",
    author: "Secretaría de Cultura, Recreación y Deporte",
    type: "divulgación institucional de leyenda colombiana",
    url: "https://ant.culturarecreacionydeporte.gov.co/es/bogotanitos/cuenta-la-leyenda/el-duende",
    summary:
      "Registra motivos colombianos más amplios: fincas y guaduales, música, travesuras domésticas y niños invitados a internarse en el bosque.",
    limitation:
      "No está localizada en Dagua y no debe usarse para completar la biografía del supuesto duende del reporte.",
  }),
  flacsoBuga: source({
    title: "Historias y leyendas de Colombia: encuentros regionales de Buga",
    author: "Instituto Colombiano de Cultura, catálogo FLACSO Andes",
    type: "registro bibliográfico de recopilación regional",
    url: "https://repositorio.flacsoandes.edu.ec/handle/10469/23141",
    summary:
      "Documenta la existencia de encuentros y recopilaciones de narración regional en Buga.",
    limitation:
      "El registro no identifica un Duende Peluquero ni permite trasladar el caso de Dagua a Buga.",
  }),
  bugaNarradores: source({
    title: "Encuentro de contadores de historias y leyendas",
    author: "Buga Travel",
    year: 2025,
    type: "agenda cultural institucional",
    url: "https://www.bugatravel.gov.co/site/39-encuentro-de-historias-y-leyendas/",
    summary:
      "Verifica continuidad contemporánea de espacios de narración oral en Buga.",
    limitation:
      "Es contexto cultural y no menciona el personaje revisado.",
  }),
  rcnTrenzas: source({
    title: "Creencias sobre duendes que hacen nudos a los animales",
    author: "RCN Radio",
    type: "divulgación periodística de motivo folclórico",
    url: "https://elsol.rcnradio.com/noticias/paranormal/historia-de-lo-paranormal-de-donde-viene-la-creencia-sobre-los-duendes-que-le-hacen-nudos-los-animales/51181",
    summary:
      "Muestra la circulación amplia del motivo de trenzas o nudos atribuidos a duendes.",
    limitation:
      "No prueba que ese motivo naciera en Dagua ni que explique un caso real.",
  }),

  visitCaliCasa: source({
    title: "Leyendas y mitos de Cali",
    author: "Secretaría de Turismo de Cali",
    type: "divulgación turística institucional",
    url: "https://www.visitcali.travel/leyendas-y-mitos-de-cali/",
    summary:
      "Menciona una Casa de la Tradición en San Antonio donde se oyen pasos y voces de antiguos moradores.",
    limitation:
      "No ofrece dirección, fecha, narrador, identidad de moradores ni secuencia de acontecimientos.",
  }),
  idescSanAntonio: source({
    title: "Infraestructura física cultural: San Antonio",
    author: "Alcaldía de Santiago de Cali",
    type: "ficha institucional histórica",
    url: "https://idesc.cali.gov.co/download/bibliotecas/hitos/san_antonio.pdf",
    summary:
      "Describe la formación, arquitectura, casas, calles y actividad cultural de San Antonio.",
    limitation:
      "No identifica la casa ni documenta voces o pasos.",
  }),
  planPatrimonioCali: source({
    title: "Plan especial de protección del patrimonio inmueble de Cali",
    author: "Departamento Administrativo de Planeación Municipal",
    year: 2003,
    type: "documento técnico de patrimonio urbano",
    url: "https://idesc.cali.gov.co/download/pot_2000/patrimonio_inmueble/1_Diagnostico_Plan_Especial/plan_especial_manejo_patrimonio_cultural_inmueble.pdf",
    summary:
      "Estudia las tipologías de casas y el valor histórico, popular y sociocultural de San Antonio.",
    limitation:
      "Aporta contexto arquitectónico, no evidencia paranormal.",
  }),
  pempCali: source({
    title: "Plan especial de manejo y protección del centro histórico",
    author: "Alcaldía de Santiago de Cali",
    year: 2024,
    type: "instrumento institucional de patrimonio",
    url: "https://www.cali.gov.co/planeacion/publicaciones/181211/plan-especial-de-manejo-y-proteccion-pemp/",
    summary:
      "Incluye a San Antonio por sus valores históricos y simbólicos dentro de la revisión del área patrimonial.",
    limitation:
      "No confirma la existencia de una casa conocida oficialmente con ese nombre.",
  }),
  visitCaliSanAntonio: source({
    title: "San Antonio, barrio patrimonial de Cali",
    author: "Visit Cali",
    type: "guía turística institucional",
    url: "https://www.visitcali.travel/hello-world-3/",
    summary:
      "Sitúa casas antiguas, galerías, artesanos y vida cultural en el barrio.",
    limitation:
      "Es contexto turístico general y no aporta una variante del relato.",
  }),
  acuerdoPatrimonioCali: source({
    title: "Protección del patrimonio urbano-arquitectónico de Cali",
    author: "Concejo de Santiago de Cali",
    year: 2007,
    type: "documento normativo",
    url: "https://idesc.cali.gov.co/download/pot_2000/patrimonio_inmueble/3_Acuerdo_232_2007.pdf",
    summary:
      "Define criterios de conservación para San Antonio y su conjunto arquitectónico.",
    limitation:
      "No identifica la residencia del relato ni autoriza divulgar una dirección privada.",
  }),

  besamePiramide: source({
    title: "La antigua y misteriosa pirámide escondida en Valle del Cauca",
    author: "Bésame",
    year: 2025,
    type: "reporte periodístico de rumor local",
    url: "https://www.besame.fm/2025/la-antigua-y-misteriosa-piramide-escondida-en-valle-del-cauca-cual-seria-su-origen-212427.html/amp",
    summary:
      "Ubica la estructura de casi 25 metros en Chontaduro y recoge la versión del hijo del dueño que sueña con construirla para honrar a Dios.",
    limitation:
      "Es una nota reciente sin entrevista identificada; la explicación se atribuye a habitantes cercanos.",
  }),
  paisPiramide: source({
    title: "La enigmática pirámide oculta en el Valle del Cauca",
    author: "El País",
    year: 2025,
    type: "periodismo turístico",
    url: "https://www.elpais.com.co/turismo/la-enigmatica-piramide-oculta-en-el-valle-del-cauca-que-fascina-a-visitantes-posible-significado-religioso-y-conexion-con-leyendas-ancestrales-2709.html",
    summary:
      "Difunde la explicación donde Carlos Bernal sueña una pirámide y un número de lotería, gana y construye como agradecimiento.",
    limitation:
      "No aporta documentos de propiedad, obra o premio y usa lenguaje especulativo sobre energías y leyendas.",
  }),
  tubarcoPiramide: source({
    title: "La pirámide escondida que habría construido un ganador de lotería",
    author: "TuBarco",
    year: 2025,
    type: "crónica regional de leyenda local",
    url: "https://tubarco.news/la-antigua-piramide-escondida-en-el-valle-fue-construida-por-un-hombre-que-segun-la-leyenda-local-gano-la-loteria/",
    summary:
      "Conserva otra circulación de la versión del sueño y la lotería.",
    limitation:
      "Depende de memoria local reciente y no demuestra un hecho histórico verificable.",
  }),
  palmiraChontaduro: source({
    title: "Intervenciones públicas en el corregimiento Chontaduro",
    author: "Alcaldía de Palmira",
    type: "contexto territorial institucional",
    url: "https://palmira.gov.co/alcalde-entrego-planta-de-tratamiento-de-aguas-residuales-y-otras-intervenciones-en-el-corregimiento-chontaduro/",
    summary:
      "Verifica el corregimiento y su localización administrativa en Palmira.",
    limitation:
      "No menciona la pirámide ni sus supuestos orígenes.",
  }),
  cvcChontaduro: source({
    title: "Medida preventiva ambiental en la vereda Chontaduro",
    author: "Corporación Autónoma Regional del Valle del Cauca",
    year: 2023,
    type: "contexto ambiental institucional",
    url: "https://www.cvc.gov.co/boletin-prensa-156-2023",
    summary:
      "Aporta contexto rural y ambiental de la vereda Chontaduro.",
    limitation:
      "No es fuente narrativa ni prueba visitantes extraterrestres, rituales o energía especial.",
  }),
  univalleChontaduro: source({
    title: "El Chontapower: secretos de la fruta que le da sabor a Cali",
    author: "Universidad del Valle",
    type: "crónica cultural de contexto",
    url: "https://www.univalle.edu.co/arte-y-cultura/el-chontapower-secretos-de-la-fruta-que-le-da-un-sabor-unico-a-cali/",
    summary:
      "Contextualiza el significado regional del nombre chontaduro sin confundir el fruto con el origen de la estructura.",
    limitation:
      "No documenta la construcción ni constituye evidencia de la leyenda.",
  }),

  univalleMaravelly: source({
    title:
      "Análisis del entorno de una organización del sector portuario de Buenaventura",
    author: "Carlos Armando Oviedo Arroyo, Universidad del Valle",
    year: 2015,
    type: "trabajo de grado con repertorio cultural regional",
    url: "https://bibliotecadigital.univalle.edu.co/entities/publication/06558f67-2db4-49ac-8894-71c86e054919",
    summary:
      "Registra la grafía Maravelly y la secuencia de apariciones por proa y costados, desorientación e inutilidad de brújula y carta.",
    limitation:
      "El relato aparece como contexto cultural dentro de un trabajo de administración portuaria y no identifica la recopilación oral de origen.",
  }),
  preziMaravelly: source({
    title: "Mitos y leyendas de la Costa Pacífica",
    author: "Óscar Iván Muñoz Feo",
    year: 2016,
    type: "síntesis educativa secundaria",
    url: "https://prezi.com/d4xqcz0-srph/mitos-y-leyendas-costa-pacifica/",
    summary:
      "Reproduce el núcleo del Maravelly: aparición cambiante, pérdida de orientación e instrumentos inútiles hasta el día siguiente.",
    limitation:
      "Es una fuente derivada y no constituye una segunda cadena oral independiente.",
  }),
  espectadorMaraveli: source({
    title: "La reencarnación chocoana del barco fantasma",
    author: "El Espectador",
    year: 2015,
    type: "crónica cultural",
    url: "https://www.elespectador.com/especiales/la-reencarnacion-chocoana-del-barco-fantasma-552251/",
    summary:
      "Identifica el nombre Maravelí, la condena a navegar eternamente y una variante donde instrumentos antiguos acompañan el lamento de la tripulación.",
    limitation:
      "La nota presenta una reinterpretación musical contemporánea y no transcribe una cadena oral completa.",
  }),
  rtvcBarco: source({
    title: "Mitos y leyendas de la región Pacífica",
    author: "RTVCPlay y Diana Uribe",
    type: "programa público de divulgación cultural",
    url: "https://rtvcplay.co/series-al-oido/las-historias-de-diana-uribe/region-pacifica",
    summary:
      "Incluye el barco fantasma dentro de un repertorio de relatos de la región Pacífica.",
    limitation:
      "La ficha web no transcribe el episodio ni especifica todas sus variantes.",
  }),
  panamericanaMaraveli: source({
    title: "Mi amigo el griot, contador de historias",
    author: "Panamericana Editorial",
    type: "descripción editorial de adaptación literaria",
    url: "https://www.panamericanaeditorial.com.co/mi-amigo-el-griot-contador-de-historias-634836/p",
    summary:
      "Presenta al Maravelí como barco fantasma del Pacífico que transporta almas atribuladas.",
    limitation:
      "Describe una obra infantil contemporánea y no prueba que esa carga aparezca en todas las versiones.",
  }),
  maguareBarco: source({
    title: "Guillermina y Candelario: El barco fantasma",
    author: "Maguaré, Ministerio de Cultura",
    type: "adaptación audiovisual infantil",
    url: "https://maguare.gov.co/tag/pacifico-colombiano/",
    summary:
      "Muestra la circulación pública contemporánea del motivo del barco fantasma en contenidos del Pacífico.",
    limitation:
      "Es una adaptación y puede reorganizar personajes; no se usa para fusionar Maravelí y Riviel.",
  }),

  // ——— Búsqueda profunda 2026-09-22 ———
  republicamirada2016: source({
    title: "Una mirada a la tradición oral del Pacífico",
    author: "Alfredo Vanín Romero (Banco de la República)",
    year: 2016,
    type: "folleto de antología sonora",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll18/id/330/download",
    summary:
      "María Raquel Riascos (López de Micay, 1952) recuerda «la del Maravelí, un barco de demonios».",
    limitation:
      "El relato completo está en la grabación.",
  }),
  valleAnalisis2015: source({
    title: "Análisis del entorno de una organización del sector portuario de Buenaventura",
    author: "Oviedo Arroyo (Universidad del Valle)",
    year: 2015,
    type: "trabajo de grado",
    url: "https://bibliotecadigital.univalle.edu.co/server/api/core/bitstreams/0a2e9862-89eb-4777-bc1b-77d86f83950b/content",
    summary:
      "§3.7.2.4 «El Barco Fantasma» (Maravelly): proa, babor, estribor, brújula inútil, tripulación endeudada con el diablo.",
    limitation:
      "Copia una página personal de Galeon (nota 32).",
  }),
  tiempoCuentos2004: source({
    title: "Cuentos de espantos y otros seres fantásticos del folclor colombiano",
    author: "Casa Editorial El Tiempo y Universidad Autónoma de Colombia, dir. Juan Torres Mantilla",
    year: 2004,
    type: "libro ilustrado de ficción declarada",
    url: "https://archive.org/details/CuentosDeEspantosYOtrosSeresFantasticosDelFolclorColombiano..compressed",
    summary:
      "Ficha del Buque o Barco Fantasma (pp. 53-54): lámparas en el palo mayor, medidas descomunales, cadenas; enloquece a quien no ha comulgado.",
    limitation:
      "Se declara «recopilación de documentos imaginarios»: sus relatos son composición de autor.",
  }),
  investigacionMitos1993: source({
    title: "Mitos y leyendas de Colombia, tomo II",
    author: "Eugenia Villa Posse (investigación y compilación)",
    year: 1993,
    type: "antología con textos reproducidos",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620",
    summary:
      "Otero D'Costa: el perulero de la Villa de Arma que se lleva una mula de fuego, paralelo del pacto con el diablo en Similitudes.",
    limitation:
      "Otro relato.",
  }),
  ibagueFolclor2013: source({
    title: "Folclor tolimense",
    author: "Misael Devia Morales (Universidad de Ibagué)",
    year: 2013,
    type: "libro de folclor regional",
    url: "https://repositorio.unibague.edu.co/server/api/core/bitstreams/7ecf7fde-a143-4744-a6bd-6f8618d50e2a/content",
    summary:
      "El Mohán, dueño de los charcos del río que desorienta a los pescadores: paralelo de Similitudes.",
    limitation:
      "Otra región.",
  }),
  gutenbergPhantom1839: source({
    title: "The Phantom Ship",
    author: "Frederick Marryat (Project Gutenberg)",
    year: 1839,
    type: "novela",
    url: "https://www.gutenberg.org/ebooks/12954",
    summary:
      "La novela que fijó en la literatura europea la leyenda del Holandés Errante: paralelo de Similitudes.",
    limitation:
      "Ficción europea.",
  }),

  // ——— Búsqueda profunda 2026-09-22 ———
  palabracaras2015: source({
    title: "Las dos caras de Buziraco. Héroe del negro y demonio del blanco",
    author: "Oscar Obando (La Palabra, Universidad del Valle)",
    year: 2015,
    type: "crónica en periódico universitario",
    url: "https://lapalabra.univalle.edu.co/las-dos-caras-de-buziraco-heroe-del-negro-y-demonio-del-blanco/",
    summary:
      "La narración más completa: los dos orígenes (demonio español o espíritu de los esclavizados), la derrota en La Popa ante fray Alonso de la Cruz Paredes, el camino por Buenaventura, las cruces de guadua de 1837, la voz de 1876, el cambio trienal de cruces el 3 de mayo, el temblor de 1925 y la obra de Collazos terminada en 1937.",
    limitation:
      "Crónica de estudiante con voz de autor, sin informantes; toma de Silva Holguín episodios sin dar edición ni página, y escribe «Costa» por Cuesta.",
  }),
  calipersonas2014: source({
    title: "400 mil personas subieron a los cerros de Cristo Rey y Tres Cruces el jueves santo",
    author: "Alcaldía de Santiago de Cali",
    year: 2014,
    type: "crónica institucional",
    url: "https://web1.cali.gov.co/planeacion/publicaciones/mil_personas_subieron_a_los_cerros_de_cristo_rey_y_tres_cruces_el_jueves_santo_pub",
    summary:
      "Resume la leyenda con fechas: desgracias y langosta desde 1825, el murciélago gigante en noches de lluvia, los misioneros Vicente y Juan Cuesta enviados desde Popayán, las cruces de guadua de 1837, la maldición de 1876, el temblor de 1925 y las cruces de ferroconcreto de 1937.",
    limitation:
      "Texto de comunicaciones municipales sin fuente declarada; reproduce sin distancia la ronda de «hombres y mujeres de color negro» alrededor del demonio.",
  }),
  sanchezTres2015: source({
    title: "Las Tres Cruces, historia de un monumento caleño (reseña en «Tres hitos de Cali brillarán…»)",
    author: "Gustavo Sánchez, Comunicaciones Alcaldía de Cali",
    year: 2015,
    type: "reseña institucional",
    url: "https://web1.cali.gov.co/planeacion/publicaciones.php?dPrint=1&id=110027",
    summary:
      "Reseña del monumento: los frailes Vicente y Juan Cuesta y las cruces de guadua de 1837 contra el demonio que un agustino había sacado de La Popa; las cruces de hierro y concreto terminadas el 6 de enero de 1938 por impulso del padre Marco Tulio Collazos; la subida de cada 3 de mayo.",
    limitation:
      "Dice apoyarse en «la bibliografía» sin nombrarla; da 1938 donde otras fuentes dan 1937.",
  }),
  aSESMitos2017: source({
    title: "Mitos, leyendas e historias",
    author: "Estrategia ASES, Universidad del Valle",
    year: 2017,
    type: "página institucional universitaria",
    url: "https://ases.univalle.edu.co/mitos-leyendas-e-historias",
    summary:
      "Versión breve: el murciélago rodeado de bailarines al son de tambores, los misioneros «Vicente y Juan de la Cuesta» con tres cruces de guadua, el temblor de 1925 y las cruces de concreto doce años después; muchos aseguran que el demonio quedó sepultado bajo ellas.",
    limitation:
      "Página de acompañamiento estudiantil sin autor ni fecha (el pie dice 2016-2017); texto divulgativo.",
  }),
  caliUna2023: source({
    title: "¿Una maldición? La historia detrás de las tres cruces en Cali",
    author: "El País (Cali)",
    year: 2023,
    type: "prensa regional",
    url: "https://www.elpais.com.co/cali/una-maldicion-la-historia-detras-de-las-tres-cruces-en-cali-2422.html",
    summary:
      "Identifica al Buziraco con Changó y lo hace llegar a Cartagena con los africanos esclavizados; atribuye la caída de las cruces de madera al terremoto de 1925 y recoge la leyenda urbana del bailarín de discoteca que pide no mirarle los pies.",
    limitation:
      "Prensa reciente sin fuentes; la equivalencia con Changó y el bailarín no aparecen en registros anteriores.",
  }),
  tiempoCerro2023: source({
    title: "Cerro de las Tres Cruces en Cali: el mito de Buziraco que aterra a caminantes",
    author: "El Tiempo",
    year: 2023,
    type: "prensa nacional",
    url: "https://www.eltiempo.com/cultura/gente/cerro-de-las-tres-cruces-en-cali-el-mito-de-buziraco-que-aterra-a-caminantes-790266",
    summary:
      "Añade que el nombre juntaría «brujo» y «diablo», describe al murciélago gigante con cuernos y risa, y sitúa la «celda» del demonio entre la segunda y la tercera cruz; fecha en 1937 la orden de Collazos.",
    limitation:
      "Reempaqueta la página de Univalle y testimonios sin nombre; la etimología no tiene respaldo.",
  }),
  calinacieron2021: source({
    title: "Así nacieron las tres cruces en Cali",
    author: "Q'hubo Cali",
    year: 2021,
    type: "prensa popular regional",
    url: "https://www.qhubocali.com/asi-paso/asi-nacieron-las-tres-cruces-en-cali/",
    summary:
      "Cuenta el envío de Vicente y Juan Cuesta por la curia de Popayán en 1837, la caída de las cruces con el terremoto de 1925 y el papel de Marco Tulio Collazos, primer párroco de Santa Rosa, en las cruces de 1937.",
    limitation:
      "Nota breve de diario popular, sin fuentes citadas.",
  }),
  universalhistoria2024: source({
    title: "La historia mal contada de Buziraco, el dios que aparecía en La Popa",
    author: "Lía Miranda Batista (El Universal, Cartagena)",
    year: 2024,
    type: "prensa regional",
    url: "https://www.eluniversal.com.co/cartagena/2024/02/03/la-historia-mal-contada-de-buziraco-el-dios-que-aparecia-en-la-popa/",
    summary:
      "El Buziraco cartagenero: con Rodrigo Alfaro y Ubaldo Elles Quintana lo presenta como deidad indígena protectora de la bahía, con adoratorio en La Popa y un sacerdote mestizo, Luis Andrea, condenado por la Inquisición; menciona la leyenda caleña del murciélago y las cruces.",
    limitation:
      "Es la versión de Cartagena; las afirmaciones históricas descansan en dos historiadores locales sin referencias de archivo en la nota.",
  }),
  infobaeBuziraco2024: source({
    title: "Buziraco: la historia del demonio español que llegó a Cartagena y fue ahuyentado en Cali por el cerro de las Tres Cruces",
    author: "Infobae",
    year: 2024,
    type: "prensa digital",
    url: "https://www.infobae.com/colombia/2024/03/26/buziraco-la-historia-del-demonio-espanol-que-llego-a-cartagena-y-fue-ahuyentado-en-cali-por-el-cerro-de-las-tres-cruces/",
    summary:
      "Une las dos orillas del relato: el culto de La Popa según El Universal y la reclusión del demonio con las cruces de Collazos; describe el murciélago con cuernos como la forma más citada.",
    limitation:
      "Reempaqueta El Universal y El Tiempo; no aporta registro propio.",
  }),
  hurtadoContribucion2007: source({
    title: "Contribución al análisis macrosísmico del terremoto del 7 de junio de 1925: principales efectos en la ciudad de Cali",
    author: "Elkin de Jesús Salcedo Hurtado, Mario Diego Romero Vergara y María Alexandra Vallejo Chocué",
    year: 2007,
    type: "artículo científico (Revista de la Academia Colombiana de Ciencias Exactas, Físicas y Naturales 31 (120): 379-394)",
    url: "https://raccefyn.co/index.php/raccefyn/article/view/2347",
    summary:
      "Fija con archivos y prensa el terremoto de 1925 que la leyenda hace responsable de la caída de las cruces de guadua: magnitud cercana a 6,8 y daños importantes en Cali, con mapa de la zona más afectada.",
    limitation:
      "No menciona las cruces ni a Buziraco: sostiene sólo el hecho sísmico que la leyenda incorpora.",
  }),
  mendozaLeyendas2015: source({
    title: "Leyendas extraordinarias de Popayán (reseña)",
    author: "Donaldo Mendoza, Proclama del Pacífico",
    year: 2015,
    type: "reseña en prensa regional",
    url: "https://proclamadelpacifico.com/leyendas-extraordinarias-de-popayan/",
    summary:
      "Reseña del libro (Editorial SIC, 2015, 125 páginas, ilustraciones de Rodrigo Valencia Quijano); resume la segunda historia como las fábulas que costó erigir el caballo del Morro.",
    limitation:
      "Reseña elogiosa; no cita el texto del cuento.",
  }),
  pardoLeyendas2015: source({
    title: "Leyendas extraordinarias de Popayán (reseña)",
    author: "Carlos Orlando Pardo, Proclama del Pacífico",
    year: 2015,
    type: "reseña en prensa regional",
    url: "https://proclamadelpacifico.com/leyendas-extraordinarias-de-popayan-2/",
    summary:
      "Sitúa el libro entre las antologías de leyendas colombianas y menciona «el asombroso relato sobre el caballo del conquistador Sebastián de Belalcázar».",
    limitation:
      "Menciona el relato sin resumirlo.",
  }),
  calleleyendas2016: source({
    title: "Las leyendas Extraordinarias de Popayán / Reseña",
    author: "Álvaro Grijalba Gómez (reproducida por Marco Antonio Valencia Calle)",
    year: 2016,
    type: "reseña reproducida en el blog del autor",
    url: "https://marcoantoniovalenciacalle.blogspot.com/2016/04/las-leyendas-extraordinarias-de-popayan.html",
    summary:
      "Llama «ficticia» a la historia de Babieca sepultado bajo la estatua de Victorio Macho en el Morro de Tulcán.",
    limitation:
      "Reproducida por el propio autor; no se ha localizado la publicación original; solo http.",
  }),
  ciddescanso2019: source({
    title: "El descanso eterno de Babieca",
    author: "Consorcio Camino del Cid",
    year: 2019,
    type: "ficha de patrimonio institucional",
    url: "https://www.caminodelcid.org/servicios/el-descanso-eterno-de-babieca-2344024",
    summary:
      "La tradición entierra a Babieca a las puertas de San Pedro de Cardeña bajo dos olmos, con un monolito; el duque de Alba excavó en 1949 sin resultado: el hecho real sobre el que se monta el cuento.",
    limitation:
      "Ficha turística breve; no cita estudio arqueológico.",
  }),
  espanolMonasterio2026: source({
    title: "Monasterio de San Pedro de Cardeña",
    author: "Wikipedia en español",
    year: 2026,
    type: "enciclopedia colaborativa",
    url: "https://es.wikipedia.org/wiki/Monasterio_de_San_Pedro_de_Carde%C3%B1a",
    summary:
      "Resume, citando a Richard Fletcher, el culto de reliquias cidianas del monasterio a fines del siglo XIII, incluidos los olmos de la tumba de Babieca: paralelo de Similitudes.",
    limitation:
      "Fuente terciaria de relleno; se usa sólo para el paralelo.",
  }),
  tiempoAbuelo2020: source({
    title: "Abuelo de Paloma Valencia pedía otro sitio para estatua en Popayán",
    author: "El Tiempo",
    year: 2020,
    type: "prensa nacional",
    url: "https://www.eltiempo.com/colombia/cali/abuelo-de-paloma-valencia-pedia-otro-sitio-para-estatua-en-popayan-538845",
    summary:
      "La estatua de Macho iba a la plaza de San Francisco y al Morro un cacique Pubén de Rómulo Rozo; Guillermo Valencia no quiso a Belalcázar en el Morro y no dio el discurso: contraste con el papel que el cuento da a Maya.",
    limitation:
      "Recoge un trino de 2020 como «información histórica básica», sin documento.",
  }),
  antioquiapueblo2021: source({
    title: "El pueblo Misak quiere resignificar el Morro del Tulcán tras derrumbar la estatua de Belalcázar",
    author: "Hacemos Memoria (Universidad de Antioquia)",
    year: 2021,
    type: "periodismo universitario",
    url: "https://hacemosmemoria.org/2021/08/24/el-pueblo-misak-quiere-resignificar-el-morro-del-tulcan-tras-derrumbar-la-estatua-de-belalcazar/",
    summary:
      "La Junta Cívica planeó en 1936 un cacique Pubén para la cima y la estatua de Macho para San Francisco; el derribo misak y la resignificación del Morro.",
    limitation:
      "Contexto de la estatua real; no trata el cuento.",
  }),
  ultimanueva2021: source({
    title: "La nueva cara del pedestal del Morro de Tulcán en Popayán",
    author: "Periódico La Última",
    year: 2021,
    type: "prensa regional",
    url: "https://periodicolaultima.com/2021/06/16/la-nueva-cara-del-pedestal-del-morro-de-tulcan-en-popayan/",
    summary:
      "En 1940 se destruyó la cúspide de la pirámide para el pedestal; atribuye a Guillermo Valencia la frase «de una obra de arte hicieron un pisa papel»; derribo del 16 de septiembre de 2020.",
    limitation:
      "Nota breve sin firma ni fuentes citadas.",
  }),
  rojasBajar2018: source({
    title: "¿Bajar a Belalcázar de Tulcán?",
    author: "Álvaro Jesús Urbano Rojas, Proclama del Pacífico",
    year: 2018,
    type: "columna en prensa regional",
    url: "https://proclamadelpacifico.com/bajar-a-belalcazar-de-tulcan/",
    summary:
      "Dice que Macho, asesorado por Valencia, se inspiró en el Colleoni de Verrocchio: otra genealogía del caballo, sin Babieca.",
    limitation:
      "Columna de opinión.",
  }),
  chaparroMorro1959: source({
    title: "El Morro de Tulcán (pirámide prehispánica). Arqueología de Popayán, Cauca",
    author: "Julio César Cubillos Chaparro, Revista Colombiana de Antropología, vol. 8",
    year: 1959,
    type: "artículo académico",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/view/1768",
    summary:
      "Estudio arqueológico del Morro como pirámide prehispánica: el lugar real donde el cuento entierra a Babieca.",
    limitation:
      "No trata la estatua ni el cuento; la página abre el registro y el PDF.",
  }),
  espectadorEstatua2020: source({
    title: "Estatua de Sebastián de Belalcázar no regresará al Morro del Tulcán en Popayán",
    author: "El Espectador, Redacción Colombia",
    year: 2020,
    type: "prensa nacional",
    url: "https://www.elespectador.com/colombia/mas-regiones/estatua-de-sebastian-de-belalcazar-no-regresara-al-morro-del-tulcan-en-popayan-article/",
    summary:
      "El juicio misak y el derribo del 16 de septiembre de 2020; el Ministerio de Cultura anuncia que la estatua no vuelve al Morro.",
    limitation:
      "Contexto de la estatua; no trata el cuento.",
  }),
  valenciaMuerte2014: source({
    title: "Muerte y entierro del Quijote en Popayán",
    author: "Marco Antonio Valencia, Proclama del Pacífico",
    year: 2014,
    type: "cuento de autor en prensa regional",
    url: "https://proclamadelpacifico.com/muerte-y-entierro-del-quijote-en-popayan/",
    summary:
      "Cuento hermano del mismo libro: el Quijote muere en Popayán y queda en la Torre del Reloj; paralelo de Similitudes.",
    limitation:
      "Ficción firmada; otro relato.",
  }),
  negretpoesia1987: source({
    title: "La poesía en Popayán: el hacerse de un paratexto poético",
    author: "Betty Osorio de Negret, Thesaurus XLII (Instituto Caro y Cuervo)",
    year: 1987,
    type: "artículo académico",
    url: "https://cvc.cervantes.es/lengua/thesaurus/pdf/42/TH_42_002_117_0.pdf",
    summary:
      "Estudia cómo Guillermo Valencia hizo de Popayán la «tumba de Don Quijote»: la tradición letrada de apropiarse de héroes castellanos que el cuento del caballo prolonga.",
    limitation:
      "No menciona a Babieca ni la estatua.",
  }),
  radioAseguran2019: source({
    title: "Aseguran que un duende mantuvo retenida a una niña por cuatro horas en Dagua, Valle",
    author: "Redacción Blu Radio",
    year: 2019,
    type: "prensa radial",
    url: "https://www.bluradio.com/nacion/aseguran-que-un-duende-mantuvo-retenida-a-una-nina-por-cuatro-horas-en-dagua-valle",
    summary:
      "La desaparición y el hallazgo de la niña en Dagua, con la voz del capitán Paulo Perdomo Gálvis; los campesinos cuentan que los duendes trenzan a los caballos.",
    limitation:
      "Nota breve de prensa.",
  }),
  caracolFue2019: source({
    title: "¿Fue un duende? Afirman que uno de estos seres fantásticos se habría llevado a niña de cuatro años",
    author: "Noticias Caracol",
    year: 2019,
    type: "prensa televisiva",
    url: "https://www.noticiascaracol.com/valle/fue-un-duende-afirman-que-uno-de-estos-seres-fantasticos-se-habria-llevado-a-nina-de-cuatro-anos",
    summary:
      "La búsqueda con Policía y bomberos, el llanto en la zona boscosa y la frase «Es que el niño, el niño».",
    limitation:
      "Nota breve de prensa.",
  }),
  pulzoCulpan2019: source({
    title: "Culpan a duende de llevarse a niña de 4 años en Dagua, Valle del Cauca",
    author: "Pulzo",
    year: 2019,
    type: "prensa digital",
    url: "https://www.pulzo.com/nacion/culpan-duende-llevarse-nina-4-anos-dagua-valle-cauca-PP656514",
    summary:
      "Resume la entrevista de Blu Radio y cita la foto del rescate publicada por el medio regional Tu Barco.",
    limitation:
      "Reproduce a Blu Radio.",
  }),
  colombiacomAterrados2019: source({
    title: "¡Aterrados! Vallecaucanos aseguran que duende se roba niños de la comunidad",
    author: "Colombia.com",
    year: 2019,
    type: "prensa digital",
    url: "https://www.colombia.com/tecnologia/paranormal/aterrados-vallecaucanos-aseguran-que-duende-se-roba-ninos-de-la-comunidad-222133",
    summary:
      "Añade lo que cuentan los vecinos: animales alterados, crines trenzadas, cosas apiñadas en los cultivos.",
    limitation:
      "Sección de temas paranormales.",
  }),
  airesMisterio2019: source({
    title: "Misterio en Colombia: aterrador duende peluquero habría secuestrado a nena",
    author: "Crónica (Buenos Aires)",
    year: 2019,
    type: "prensa",
    url: "https://www.cronica.com.ar/cosa-de-locos/Misterio-en-Colombia-aterrador-duende-peluquero-habria-secuestrado-a-nena-20190905-0015.html",
    summary:
      "El diario argentino que retoma el caso en septiembre y le da el nombre de duende peluquero.",
    limitation:
      "Nota de rarezas, derivada de la prensa colombiana.",
  }),
  culturaDuende2: source({
    title: "El Duende",
    author: "Secretaría de Cultura, Recreación y Deporte de Bogotá (Bogotanitos)",
    type: "página divulgativa infantil",
    url: "https://www2.culturarecreacionydeporte.gov.co/es/bogotanitos/cuenta-la-leyenda/el-duende",
    summary:
      "El duende que invita a los niños a jugar en el bosque y los devuelve arañados y con fiebre: paralelo de Similitudes.",
    limitation:
      "Sin firma ni fuente declarada.",
  }),
  vlietColombia1997: source({
    title: "Colombia, Many Countries in One (Fulbright-Hays 1997), con las páginas «Niños de las regiones de Colombia» de Esmeralda Van Vliet (ICAN)",
    author: "Ana María Alfaro; Esmeralda Van Vliet",
    year: 1997,
    type: "unidad didáctica con páginas web impresas",
    url: "https://files.eric.ed.gov/fulltext/ED430849.pdf",
    summary:
      "El duende malo de Pasto que le hace trenzas a los caballos: paralelo de Similitudes.",
    limitation:
      "Una frase de divulgación infantil.",
  }),
  polarMitos2014: source({
    title: "Mitos y leyendas del estado Portuguesa, cap. 18 «Los duendes»",
    author: "Carmen Pérez Montero (Fundación Empresas Polar)",
    year: 2014,
    type: "libro de tradición oral venezolana",
    url: "https://bibliofep.fundacionempresaspolar.org/media/1377951/mitos_portuguesa_c_18_los-duendes.pdf",
    summary:
      "Los duendes llaneros como niños muertos sin bautizo que quedaron en el limbo: paralelo de Similitudes.",
    limitation:
      "Tradición venezolana.",
  }),
  nicolasMuerte2020: source({
    title: "Muerte y entierro del Quijote en Popayán. Edición trilingüe español-inglés-francés",
    author: "Marco Antonio Valencia Calle; trad. Nicolás y Laura Lobatón, María Isabel Zamora Yusti y Laure Rocher",
    year: 2020,
    type: "cuento de autor, edición digital (Unikids Colombia)",
    url: "https://marcoantoniovalencia.com/wp-content/uploads/woocommerce_uploads/2021/12/Muerte-y-entierro-del-Quijote-en-Popayan-tipaeu.pdf",
    summary:
      "Texto completo (pp. 7-11 en español): las niguas de Cervantes, la cuarta salida, la muerte en Santo Domingo, la velación con Dulcinea, las honras en la Ermita y el entierro en la Torre del Reloj; el árbol propuesto es de corcho.",
    limitation:
      "Ficción literaria firmada; el marco de la revista Semana y el Príncipe de Asturias no se ha verificado.",
  }),
  calleMuerte2026: source({
    title: "Muerte y entierro del Quijote en Popayán (página del libro)",
    author: "Marco Antonio Valencia Calle",
    year: 2026,
    type: "página del autor",
    url: "https://marcoantoniovalencia.com/muerte-y-entierro-del-quijote-en-popayan/",
    summary:
      "El autor dice que con este cuento «reescribe una de las leyendas más originales» de Popayán y lo ubica en Leyendas extraordinarias de Popayán, traducido al inglés.",
    limitation:
      "Página promocional del autor.",
  }),
  vecinosfunerales1987: source({
    title: "Los funerales de Don Quijote",
    author: "Octavio Hernández Jiménez; reseña de Vicente Pérez Silva (Espacios Vecinos)",
    year: 1987,
    type: "ensayo-cuento reseñado en revista cultural digital",
    url: "https://www.espaciosvecinos.com/publicaciones/libros-y-comentarios/los-funerales-de-don-quijote/",
    summary:
      "Funerales de Don Quijote, leído en Popayán en 1987, ya trae la Ermita, el miércoles de ceniza a las cinco, la velación en el Paraninfo y la ñapanga Dulcinea; cita Don Quijote muere en Popayán de Rafael Maya (1974).",
    limitation:
      "Se conoce por fragmentos y reseñas; el texto íntegro no está abierto.",
  }),
  valencianariz2017: source({
    title: "La nariz de Popayán",
    author: "Marco Antonio Valencia, blog La Casa Encendida (El Espectador)",
    year: 2017,
    type: "columna en blog de prensa nacional",
    url: "https://blogs.elespectador.com/actualidad/la-casa-encendida/la-nariz-popayan-2/",
    summary:
      "Leyendas de la Torre del Reloj: allí reposan los huesos del Quijote y quien aspire a ser poeta debe tocar sus paredes.",
    limitation:
      "Del mismo autor del cuento: no es testigo independiente.",
  }),
  pacificoTorre2020: source({
    title: "La Torre del Reloj y la Llorona",
    author: "Proclama del Pacífico",
    year: 2020,
    type: "nota en prensa regional",
    url: "https://www.proclamadelpacifico.com/la-torre-del-reloj-y-la-llorona/",
    summary:
      "Historia de la torre (1673, noventa y seis mil ladrillos) y, citando a Valencia Calle, la creencia de que encubre los restos del Quijote.",
    limitation:
      "Sin firma visible; repite al autor del cuento.",
  }),
  popayanMunicipio2026: source({
    title: "Mi Municipio: Historia",
    author: "Alcaldía de Popayán",
    year: 2026,
    type: "página institucional",
    url: "https://www.popayan.gov.co/MiMunicipio/Paginas/Historia.aspx",
    summary:
      "La Torre del Reloj, «la nariz de Popayán» según Guillermo Valencia, construida entre 1673 y 1682: el lugar real del entierro imaginario.",
    limitation:
      "No menciona la leyenda.",
  }),
  buenoescritor2021: source({
    title: "El escritor Marco Antonio Valencia presentó su obra «Leyendas Extraordinarias de Popayán» en la UDES",
    author: "Fredy Armando Herrera Bueno, Universidad de Santander",
    year: 2021,
    type: "nota institucional universitaria",
    url: "https://bucaramanga.udes.edu.co/extension/noticias/el-escritor-marco-antonio-valencia-presento-su-obra-leyendas-extraordinarias-de-popayan-en-la-udes",
    summary:
      "El autor cuenta en voz propia el episodio de las niguas de Cervantes.",
    limitation:
      "Nota de difusión.",
  }),
  parraperros2025: source({
    title: "Si los perros ladran: seis encuentros con don Quijote",
    author: "Juan Pablo Parra, Casa Macondo",
    year: 2025,
    type: "testimonio periodístico",
    url: "https://casamacondo.co/testimonio/quijote-literatura-testimonio-parra/",
    summary:
      "Un guía de la casa museo le contó que en Popayán se decía que Cervantes visitó la ciudad y que los restos del Quijote estaban allí.",
    limitation:
      "Recuerdo personal sin fecha exacta de la visita.",
  }),
  acesQuijote: source({
    title: "Don Quijote está enterrado en Bogotá",
    author: "Maruja Vieira (Revista Aces)",
    type: "crónica literaria",
    url: "https://marujavieira.com/obra/cronicas/114-don-quijote-esta-enterrado-en-bogota",
    summary:
      "Menciona la leyenda payanesa y le opone la tesis de Germán Arciniegas: el Quijote pudo inspirarse en Gonzalo Jiménez de Quesada; paralelo de Similitudes.",
    limitation:
      "Sin fecha visible en la página.",
  }),
  tiempopiramide2025: source({
    title: "La pirámide oculta en el Valle del Cauca que sorprende a los visitantes: podría tener un significado religioso y su origen se relaciona con leyendas",
    author: "El Tiempo",
    year: 2025,
    type: "prensa nacional",
    url: "https://www.eltiempo.com/cultura/gente/la-piramide-oculta-en-el-valle-del-cauca-que-sorprende-a-los-visitantes-podria-tener-un-significado-religioso-y-su-origen-se-relaciona-con-leyendas-3470807",
    summary:
      "Cuenta el sueño con la pirámide y el número de lotería según el canal de Alex Villotravel, el premio invertido en la obra, los diez años de construcción y el cuarzo según «De Viaje con Jenni», y la atribución a Carlos Bernal en 1986.",
    limitation:
      "Reempaqueta dos videos de redes y a TuBarco; no habla con vecinos ni con los dueños del predio.",
  }),
  fMantigua2025: source({
    title: "La antigua y misteriosa pirámide escondida en Valle del Cauca: ¿cuál sería su origen?",
    author: "Bésame FM",
    year: 2025,
    type: "portal de emisora",
    url: "https://www.besame.fm/2025/la-antigua-y-misteriosa-piramide-escondida-en-valle-del-cauca-cual-seria-su-origen-212427.html/amp",
    summary:
      "Única nota con otra explicación atribuida a los vecinos: el hijo del dueño del terreno soñó que debía construirla para honrar a Dios; da casi 25 metros, la media luna, la frase «Gracias Dios» en cuatro idiomas y el interior con humedad y murciélagos.",
    limitation:
      "Nota de entretenimiento de una emisora musical; los vecinos no tienen nombre y el resto del texto es guía de ruta.",
  }),
  calienigmatica2025: source({
    title: "La enigmática pirámide oculta en el Valle del Cauca que fascina a visitantes: posible significado religioso y conexión con leyendas ancestrales",
    author: "El País (Cali)",
    year: 2025,
    type: "prensa regional",
    url: "https://www.elpais.com.co/turismo/la-enigmatica-piramide-oculta-en-el-valle-del-cauca-que-fascina-a-visitantes-posible-significado-religioso-y-conexion-con-leyendas-ancestrales-2709.html",
    summary:
      "Da los tres nombres de la estructura (Chontaduro, Buitrera, Luna), atribuye la obra al arquitecto Carlos Bernal en 1986 tras ganar la lotería con el número soñado, y recoge los 30 metros y los diez años de obra.",
    limitation:
      "Sección de turismo; el titular promete «leyendas ancestrales» que el cuerpo no trae.",
  }),
  tuBarcoantigua2025: source({
    title: "La antigua pirámide escondida en el Valle: fue construida por un hombre que, según la leyenda local, ganó la lotería",
    author: "TuBarco",
    year: 2025,
    type: "prensa digital regional",
    url: "https://tubarco.news/la-antigua-piramide-escondida-en-el-valle-fue-construida-por-un-hombre-que-segun-la-leyenda-local-gano-la-loteria/",
    summary:
      "Primera nota de la serie: el constructor anónimo que soñó la pirámide y un número de lotería, el premio usado en la obra y las inscripciones de gratitud a Dios; insiste en que no se conoce al constructor.",
    limitation:
      "Toma el relato del canal de YouTube de Alex Villotravel; buena parte de la nota promociona la cascada cercana.",
  }),
  lasorillasmisteriosa2025: source({
    title: "La misteriosa y antigua pirámide escondida en Palmira; habría sido construida por un millonario",
    author: "Las2orillas",
    year: 2025,
    type: "prensa digital",
    url: "https://www.las2orillas.co/la-misteriosa-y-antigua-piramide-escondida-en-palmira-habria-sido-construida-por-un-millonario/",
    summary:
      "Cuenta el sueño premonitorio con el número de lotería, el hombre que se volvió millonario y decidió construir la pirámide en lugar de gastar en lujos, y el misterio de su identidad.",
    limitation:
      "Parafrasea a TuBarco casi frase por frase; «millonario» es adorno de la nota.",
  }),
  infobaeColombia2025: source({
    title: "En Colombia también hay una pirámide: está escondida en el Valle del Cauca y la relacionan con leyendas",
    author: "Infobae",
    year: 2025,
    type: "prensa digital",
    url: "https://www.infobae.com/colombia/2025/07/10/en-colombia-tambien-hay-una-piramide-esta-escondida-en-el-valle-del-cauca-y-la-relacionan-con-leyendas/",
    summary:
      "Cita textualmente a la creadora «De Viaje con Jenni»: el arquitecto Carlos Bernal, 1986, gratitud a Dios «por un sueño cumplido», el cuarzo de la punta y los 30 metros.",
    limitation:
      "Confunde la ubicación (Jamundí y Palmira a la vez) y depende de un video de TikTok.",
  }),
  ocanaLeyendas2011: source({
    title: "Leyendas de Ocaña",
    author: "Academia de Historia de Ocaña",
    year: 2011,
    type: "blog institucional",
    url: "https://academiaocana.blogspot.com/2011/09/leyendas-de-ocana.html",
    summary:
      "Paralelo citado en similitudes: la promesa a Santa Rita que don Antón García de Bonilla no cumplió y que lo condenó a galopar de noche, reverso de la promesa pagada con una obra.",
    limitation:
      "No trata de la pirámide; es otra región (Norte de Santander) y otro tipo de relato.",
  }),

  // ——— Búsqueda profunda 2026-09-23 ———
  paisCali2023: source({
    title: "Cali paranormal: historias de fantasmas, avistamientos de otros mundos y hechos inexplicables en la Sucursal del Cielo",
    author: "Luis Carlos Bermeo Gamboa (El País, Cali)",
    year: 2023,
    type: "reportaje de prensa",
    url: "https://www.elpais.com.co/cultura/cali-paranormal-historias-de-fantasmas-avistamientos-de-otros-mundos-y-hechos-inexplicables-en-la-sucursal-del-cielo-2800.html",
    summary:
      "Testimonios de edificios caleños con presencias: gritos y aplausos en el Teatro Municipal vacío (luminotécnico Álvaro Muñoz), el bombero de los años cincuenta y la niña del Muli en la antigua estación del ferrocarril, la Loma de la Cruz según Brandon Aragón.",
    limitation:
      "Trata el motivo de los edificios con sonidos y presencias en Cali, no esta casa: no nombra ninguna Casa de la Tradición en San Antonio.",
  }),
  caliMano2026: source({
    title: "La Mano Negra: la leyenda que todavía aterra a los caminantes de la colina de San Antonio en Cali",
    author: "Semana (sección Cali)",
    year: 2026,
    type: "artículo de prensa",
    url: "https://www.semana.com/nacion/cali/articulo/la-mano-negra-leyenda-que-todavia-aterra-a-los-caminantes-de-la-colina-de-san-antonio-en-cali/202659/",
    summary:
      "La leyenda de la cruz de la Loma de la Cruz, junto a San Antonio (calle 5 con carrera 16), en sus dos versiones: el joven matricida cuya mano salía de la tierra y el esclavo Crescencio mutilado por su patrón; caminantes que oyen lamentos de noche.",
    limitation:
      "Prensa reciente sin informantes nombrados; trata otra leyenda del mismo barrio, no la casa de los pasos y las voces.",
  }),
  iDESCInfraestructura: source({
    title: "Infraestructura física cultural del municipio de Santiago de Cali: San Antonio",
    author: "Alcaldía de Santiago de Cali (IDESC)",
    type: "ficha patrimonial municipal",
    url: "https://idesc.cali.gov.co/download/bibliotecas/hitos/san_antonio.pdf",
    summary:
      "Historia del barrio: Cali de menos de cinco mil habitantes hasta la colina a mediados del XVIII, la viceparroquia pedida por José de Alegría en 1742, la capilla erigida en 1747 y el barrio como el más importante de la ciudad en lo artístico, cultural y arquitectónico.",
    limitation:
      "Documenta el escenario del relato; no menciona apariciones ni una Casa de la Tradición.",
  }),
  vallePlan2003: source({
    title: "Plan Especial de Manejo del Patrimonio Cultural Inmueble de Santiago de Cali. Diagnóstico",
    author: "Departamento Administrativo de Planeación Municipal; Universidad del Valle, CITCE (coord. Francisco Ramírez Potes)",
    year: 2003,
    type: "diagnóstico patrimonial",
    url: "https://idesc.cali.gov.co/download/pot_2000/patrimonio_inmueble/1_Diagnostico_Plan_Especial/plan_especial_manejo_patrimonio_cultural_inmueble.pdf",
    summary:
      "Estudia los barrios San Antonio, San Cayetano y Libertadores y describe el trazado colonial de Cali que se estrecha contra la colina de San Antonio.",
    limitation:
      "Documento de arquitectura y urbanismo; no trata leyendas ni identifica una casa encantada. Comparte dominio con la ficha IDESC.",
  }),
  velasquezmedicina1957: source({
    title: "La medicina popular en la costa colombiana del Pacífico",
    author: "Rogerio Velásquez",
    year: 1957,
    type: "artículo etnográfico (Revista Colombiana de Antropología, vol. 6, pp. 195-241)",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/view/1792",
    summary:
      "En «Prácticas mágico-religiosas» (pp. 213-214): en el Alto y Bajo Chocó las enfermedades se atribuyen a las influencias de un enemigo; el curandero-brujo, la novena con el muñeco de balso enterrado en el bosque para matar despacio al envidiado, y el ruego al brujo para que cure.",
    limitation:
      "Trata el daño puesto por brujo en el Chocó, no la Yesca: no nombra bejucos que ahogan ni usa la palabra chinango. Escaneo sin texto, leído por OCR.",
  }),
  salazarCuando2022: source({
    title: "Cuando las brujas vuelan y hacen daño. Esquemas culturales sobre la brujería del campesinado en Colombia",
    author: "Alejandro Munévar Salazar, Laura Andrea Chaparro Rojas y Julio Alexander Bernal Chávez",
    year: 2022,
    type: "artículo académico (LiminaR, vol. 20, núm. 1)",
    url: "https://www.scielo.org.mx/scielo.php?pid=S1665-80272022000100314&script=sci_arttext&tlng=es",
    summary:
      "Sobre el Atlas Lingüístico-Etnográfico de Colombia: registra en el Chocó «hacer maldad» y «hacer brujería (maleficio)», el testimonio de Aquilina Córdoba en Coredó (1975) y el embrujo como encierro o pérdida del rumbo.",
    limitation:
      "Trata la brujería campesina en todo el país y las brujas voladoras, no la Yesca ni el daño en forma de bejucos.",
  }),
  colombiacomChoco: source({
    title: "Chocó (guía turística, sección de mitos y leyendas)",
    author: "Colombia.com",
    type: "guía turística en PDF",
    url: "https://cdn.colombia.com/docs/turismo/sitios-turisticos/pacifico/choco.pdf",
    summary:
      "Única forma escrita del nombre: «La Yesca: imaginario de un brujo o chinango que se pone a una persona malévola», representada en algunas partes con bejucos y ramas que abrazan a la víctima y la ahogan.",
    limitation:
      "Portal turístico sin fecha, autor ni informante; dos líneas sin relato. Se incluye sólo porque es el único registro del nombre.",
  }),
  vlietColombia19972: source({
    title: "Colombia, Many Countries in One (incluye «Niños de las regiones de Colombia», de Esmeralda Van Vliet, ICAN)",
    author: "Ana María Alfaro; Esmeralda Van Vliet",
    year: 1997,
    type: "material educativo (ERIC)",
    url: "https://files.eric.ed.gov/fulltext/ED430849.pdf",
    summary:
      "La Madremonte de la región cafetera con cabellos de helechos y lianas y brazos de bejucos, guardiana que desata tempestades cuando talan un árbol.",
    limitation:
      "Trata la Madremonte cafetera, no la Yesca; texto divulgativo para niños.",
  }),
  eSAPInventario: source({
    title: "Inventario turístico de Viterbo (Caldas): mitos, leyendas y tradición oral",
    author: "Municipio de Viterbo (repositorio ESAP)",
    type: "inventario municipal",
    url: "https://repositoriocdim.esap.edu.co/bitstreams/e2157446-5cb0-4e99-afa6-f31ad7ee56b6/download",
    summary:
      "§1.4.1: la Madremonte vestida de chamizos, hojas y bejucos, o convertida en los rastrojos en una zarza tupida en movimiento que mira con rabia a quienes pasan.",
    limitation:
      "Trata la Madremonte de Caldas, no la Yesca; inventario sin informantes nombrados.",
  }),
};

export const pacificoRestanteSourceKeysBySlug = {
  buziraco: [
    "caliBuziraco",
    "caliTresCruces",
    "tiempoTresCruces",
    "sismoCali1925",
    "universalBuziraco",
    "caliPatrimonioCruces",
  ],
  "el-caballo-del-morro": [
    "valenciaCaballo",
    "proclamaLeyendasPopayan",
    "icanhMorro",
    "banrepBelalcazar",
    "memoriaMisakMorro",
    "espectadorMorro",
  ],
  "el-roble-del-caballero": [
    "valenciaQuijoteText",
    "valenciaQuijotePage",
    "proclamaQuijote",
    "portafolioPopayan",
    "alcaldiaPopayan",
    "unicaucaArchivo",
  ],
  "la-yesca": [
    "guiaChocoYesca",
    "turismoChocoYesca",
    "blogGuiaChoco",
    "scieloLianas",
    "iiapChoco",
    "minambienteAtrato",
  ],
  "el-duende-peluquero": [
    "colombiaDagua",
    "tiempoDagua",
    "culturaDuende",
    "flacsoBuga",
    "bugaNarradores",
    "rcnTrenzas",
  ],
  "la-casa-de-la-tradicion": [
    "visitCaliCasa",
    "idescSanAntonio",
    "planPatrimonioCali",
    "pempCali",
    "visitCaliSanAntonio",
    "acuerdoPatrimonioCali",
  ],
  "la-piramide-del-chontaduro": [
    "besamePiramide",
    "paisPiramide",
    "tubarcoPiramide",
    "palmiraChontaduro",
    "cvcChontaduro",
    "univalleChontaduro",
  ],
  "el-barco-fantasma": [
    "univalleMaravelly",
    "preziMaravelly",
    "espectadorMaraveli",
    "rtvcBarco",
    "panamericanaMaraveli",
    "maguareBarco",
  ],
};

/**
 * Resuelve las fuentes de una ficha. Con una lista —la `sourceKeys` que la
 * ficha declara— devuelve esas obras en ese orden, y cada entrada puede ser una
 * clave suelta o `{ key, summary, limitation }` con lo que esa obra dice de
 * ESE relato. Con un slug cae en el reparto heredado, que se conserva tal cual
 * para las fichas que todavía no se han rehecho.
 */
export function pickPacificoRestanteSources(slugOrEntries) {
  if (!Array.isArray(slugOrEntries)) return pickPacificoRestanteSourcesHeredadas(slugOrEntries);
  return slugOrEntries.map((entrada) => {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = pacificoRestanteSources[key];
    if (!selected) throw new Error(`Fuente desconocida: ${JSON.stringify(entrada)}.`);
    return {
      ...selected,
      ...(typeof entrada === "object" && entrada.summary ? { summary: entrada.summary } : {}),
      ...(typeof entrada === "object" && entrada.limitation ? { limitation: entrada.limitation } : {}),
    };
  });
}

// El reparto heredado, por slug. Sólo lo usan las fichas sin `sourceKeys`.
function pickPacificoRestanteSourcesHeredadas(slug) {
  const keys = pacificoRestanteSourceKeysBySlug[slug];
  if (!keys) throw new Error(`${slug}: no tiene expediente de fuentes.`);
  return keys.map((key) => {
    const selected = pacificoRestanteSources[key];
    if (!selected) throw new Error(`${slug}: fuente desconocida ${key}.`);
    return selected;
  });
}
