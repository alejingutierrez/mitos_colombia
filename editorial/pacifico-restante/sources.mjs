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

export function pickPacificoRestanteSources(slug) {
  const keys = pacificoRestanteSourceKeysBySlug[slug];
  if (!keys) throw new Error(`${slug}: no tiene expediente de fuentes.`);
  return keys.map((key) => {
    const selected = pacificoRestanteSources[key];
    if (!selected) throw new Error(`${slug}: fuente desconocida ${key}.`);
    return selected;
  });
}
