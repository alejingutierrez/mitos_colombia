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

export const bogotaMestizoMemorySources = {
  bogotanitosBobo: source({
    title: "El bobo del tranvía",
    author: "Secretaría de Cultura, Recreación y Deporte de Bogotá",
    type: "versión institucional de leyenda urbana",
    url: "https://culturarecreacionydeporte.gov.co/es/bogotanitos/cuenta-la-leyenda/el-bobo-del-tranvia",
    summary:
      "Conserva a Antonín, su uniforme multicolor, el papel de agente de tránsito, la hermana, el accidente y la muerte en Sibaté.",
    limitation:
      "Presenta una narración tardía sin autor, archivo biográfico, fecha de recolección ni testimonios identificados.",
  }),
  archivoTransporte: source({
    title: "Historia del transporte en Bogotá",
    author: "Archivo de Bogotá",
    year: 2020,
    type: "historia urbana institucional",
    url: "https://archivobogota.secretariageneral.gov.co/node/2168",
    summary:
      "Documenta el tranvía de mulas desde 1884, la electrificación en 1910, sus rutas y el cierre del sistema en 1951.",
    limitation:
      "Aporta contexto verificable del transporte, pero no menciona ni prueba la biografía de Antonín.",
  }),
  cuatroLocosStudy: source({
    title:
      "La prosocialidad en Bogotá a través de Los 4 locos de Bogotá",
    author: "Fundación Universitaria San Mateo",
    year: 2026,
    type: "artículo académico contemporáneo de diseño y memoria",
    url: "https://cipres.sanmateo.edu.co/ojs/index.php/designio/article/download/1120/950",
    summary:
      "Estudia la representación contemporánea de Margarita, Pomponio, el Negro Chivas y el Bobo del Tranvía como memoria urbana.",
    limitation:
      "Es muy posterior a los personajes y sus biografías dependen de repertorios secundarios, no de nuevos archivos primarios.",
  }),
  locotaBogota: source({
    title: "Locotá, años 40",
    author: "Alcaldía Mayor de Bogotá",
    type: "memoria cultural y exposición pública",
    url: "https://bogota.gov.co/historico-alcaldia/locota-anos-40",
    summary:
      "Registra la recepción pública de cuatro personajes callejeros y muestra cómo sus figuras se convirtieron en iconos culturales.",
    limitation:
      "La exposición recrea relatos conocidos y no permite confirmar cada detalle biográfico ni diagnóstico atribuido.",
  }),
  fugaCuandoAmanezca: source({
    title: "Cuando amanezca: memorias de La Candelaria",
    author: "Fundación Gilberto Alzate Avendaño",
    type: "publicación distrital de memoria local",
    url: "https://fuga.gov.co/sites/default/files/2022-08/cuando_amanezca_1-compressed.pdf",
    summary:
      "Reúne reseñas sobre personajes de la memoria bogotana, entre ellos Margarita Villaquirá y José Raimundo Russi.",
    limitation:
      "Sus semblanzas son divulgativas y pueden reproducir como hechos detalles disputados en otras cadenas documentales.",
  }),
  bogotanitosArias: source({
    title: "El loco Arias",
    author: "Secretaría de Cultura, Recreación y Deporte de Bogotá",
    type: "versión institucional de leyenda urbana",
    url: "https://culturarecreacionydeporte.gov.co/es/bogotanitos/cuenta-la-leyenda/el-loco-arias",
    summary:
      "Presenta a Eduardo Arias Jiménez como autodidacta, orador y actor callejero que usaba disfraces y pedía chicha.",
    limitation:
      "Formula sus afirmaciones como leyenda y no publica fuentes primarias, fechas vitales ni diagnóstico clínico.",
  }),
  canalArias: source({
    title: "¿Sabe usted quién era el Loco Arias de la antigua Bogotá?",
    author: "Canal Capital",
    type: "divulgación cultural pública",
    url: "https://www.canalcapital.gov.co/general/sabe-usted-quien-era-el-loco-arias-de-la-antigua-bogota/",
    summary:
      "Confirma la circulación contemporánea del repertorio de disfraces, oratoria y recepción popular de Eduardo Arias.",
    limitation:
      "Depende de compilaciones recientes y no constituye una cadena biográfica independiente.",
  }),
  monoUniandes: source({
    title:
      "¡Vaya a quejarse al Mono de la pila! Un relato sobre la primera fuente pública de agua en Bogotá",
    author: "Rosa Eliana del Pilar Ortiz Castro, Universidad de los Andes",
    year: 2014,
    type: "artículo académico de patrimonio y memoria",
    url: "https://cienciassociales.uniandes.edu.co/opca/en/articulo/vaya-a-quejarse-al-mono-de-la-pila-un-relato-sobre-la-primera-fuente-publica-de-agua-en-bogota/",
    summary:
      "Reconstruye las transformaciones y traslados de la fuente, su función cotidiana y una explicación de la frase popular.",
    limitation:
      "La autora identifica como probable parte de la historia material y atribuye el origen de la frase a una fuente institucional tardía.",
  }),
  idpcMuseoCielo: source({
    title: "Museo a cielo abierto: guía del patrimonio de Bogotá",
    author: "Instituto Distrital de Patrimonio Cultural",
    type: "guía patrimonial institucional",
    url: "https://centrodocumentacion.idpc.gov.co/opac-tmpl/cendoc/apariencia%20cendoc/site/images/descargas/museoacielo.pdf",
    summary:
      "Distingue la conducción inicial de agua, la figura añadida en 1775, los traslados del original y la réplica de San Diego.",
    limitation:
      "Resume una historia material compleja y no resuelve por sí sola todas las discrepancias de fecha entre fuentes.",
  }),
  acueductoHistory: source({
    title: "Historia del Acueducto de Bogotá",
    author: "Empresa de Acueducto y Alcantarillado de Bogotá",
    type: "historia institucional del servicio de agua",
    url: "https://www.acueducto.com.co/wps/portal/EAB2/Home/la-empresa/historia",
    summary:
      "Sitúa la orden de conducir agua a la Plaza Mayor en 1584 y permite separar el servicio temprano de la fuente ornamentada posterior.",
    limitation:
      "No estudia la frase popular ni demuestra que la pieza conocida hoy existiera completa desde el primer sistema.",
  }),
  bogotanitosMono: source({
    title: "El Mono de la Pila",
    author: "Secretaría de Cultura, Recreación y Deporte de Bogotá",
    type: "leyenda urbana para divulgación infantil",
    url: "https://culturarecreacionydeporte.gov.co/es/bogotanitos/cuenta-la-leyenda/el-mono-de-la-pila",
    summary:
      "Difunde la explicación según la cual niños enviados por agua recibían la respuesta de ir a quejarse al Mono de la Pila.",
    limitation:
      "No identifica testimonio temprano y no debe convertir una explicación proverbial en biografía sobrenatural del monumento.",
  }),
  museoBogota: source({
    title: "Historia de la capital vista desde el Museo de Bogotá",
    author: "Alcaldía Mayor de Bogotá",
    type: "recorrido museal institucional",
    url: "https://bogota.gov.co/mi-ciudad/bogota-en-historias/historia-de-la-capital-vista-desde-un-recorrido-por-el-museo-de-bogota",
    summary:
      "Contextualiza fuentes, plazas y transformaciones materiales de la ciudad dentro de la memoria urbana distrital.",
    limitation:
      "Es una síntesis museal general y no sustituye el estudio monográfico del Mono de la Pila.",
  }),
  margaritaChronicle: source({
    title: "Crónica sobre Margarita Villaquirá en el Asilo de Locas",
    author: "Mario Ibero; reedición de El Espectador",
    year: 1924,
    type: "crónica periodística temprana reeditada",
    url: "https://www.elespectador.com/el-magazin-cultural/cronica-sobre-margarita-villaquira-en-el-asilo-de-locas/",
    summary:
      "Registra su vestido rojo, su voz liberal, el encierro y una entrevista en la que pide salir y preserva un pétalo como bandera.",
    limitation:
      "La mirada masculina usa lenguaje estigmatizante, busca espectáculo y no permite inferir un diagnóstico ni toda su biografía.",
  }),
  bogotanitosMargarita: source({
    title: "La Loca Margarita",
    author: "Secretaría de Cultura, Recreación y Deporte de Bogotá",
    type: "biografía legendaria institucional",
    url: "https://www.culturarecreacionydeporte.gov.co/es/bogotanitos/cuenta-la-leyenda/la-loca-margarita",
    summary:
      "Reúne la versión difundida sobre Margarita Villaquirá, sus recorridos religiosos y su presencia en las calles de Bogotá.",
    limitation:
      "Funde memoria, leyenda y biografía sin publicar la procedencia de todos los episodios familiares.",
  }),
  radioMargarita: source({
    title: "El detrás de cámaras de la Loca Margarita",
    author: "Radio Nacional de Colombia",
    type: "divulgación sobre adaptación audiovisual",
    url: "https://www.radionacional.co/cultura/el-detras-de-camaras-de-la-loca-margarita",
    summary:
      "Explica cómo una miniserie interpretó a Margarita como profesora, viuda, madre y desplazada para dialogar con violencias contemporáneas.",
    limitation:
      "Describe decisiones de una producción dramática y no demuestra por sí sola esposo, hijo, persecución ni causalidad clínica.",
  }),
  asiloMujeres: source({
    title:
      "Con notable daño del buen servicio: sobre la locura femenina en la primera mitad del siglo XX en Bogotá",
    author: "Investigación publicada en Antípoda, Universidad de los Andes",
    year: 2006,
    type: "artículo académico de historia de la psiquiatría y género",
    url: "https://www.scielo.org.co/scielo.php?pid=S1900-54072006000100016&script=sci_arttext",
    summary:
      "Analiza cómo género, orden social y discursos médicos condicionaron la institucionalización de mujeres en Bogotá.",
    limitation:
      "Aporta contexto estructural y no ofrece una historia clínica individual de Margarita Villaquirá.",
  }),
  elTiempoMargarita: source({
    title: "¿Quién fue la Loca Margarita?",
    author: "El Tiempo",
    type: "perfil periodístico histórico",
    url: "https://www.eltiempo.com/justicia/servicios/quien-fue-la-loca-margarita-579585",
    summary:
      "Documenta la persistencia de Margarita como personaje público y reúne versiones sobre su vida, política y muerte.",
    limitation:
      "Es una síntesis muy posterior que depende de memorias y perfiles secundarios con discrepancias.",
  }),
  russiTerritorio: source({
    title:
      "La causa artesana y el video mapping: investigación-creación sobre José Raimundo Russi",
    author: "Hansbleidy Lancheros Guerrero",
    year: 2020,
    type: "investigación documental y creación teatral",
    url: "https://territorioteatral.org.ar/numero/21/dossiers/la-causa-artesana-y-el-video-mapping-propuestas-interdisciplinares-de-investigacion-creacion-en-teatro-de-titeres-y-objetos-hansbleidy-lancheros-guerrero",
    summary:
      "Revisa documentos sobre Russi, la causa artesana, el asesinato de Manuel Ferro, el juicio y las interpretaciones contrapuestas.",
    limitation:
      "Su resultado es investigación-creación escénica; la ficción teatral no puede usarse como transcripción del proceso.",
  }),
  museoRussi: source({
    title: "Cuadernos de Curaduría 15",
    author: "Museo Nacional de Colombia",
    year: 2019,
    type: "investigación curatorial e historia urbana",
    url: "https://www.museonacional.gov.co/Publicaciones/cuadernos-de-curaduria/Documents/2019/Cuadernos_de_curaduria_15.pdf",
    summary:
      "Sitúa el juicio y ejecución del llamado abogado de los pobres dentro de la política, los artesanos y la marginalización urbana.",
    limitation:
      "No vuelve incontrovertible ninguna reconstrucción de culpabilidad y lee el caso dentro de un problema curatorial más amplio.",
  }),
  signalRussiStreets: source({
    title: "Las calles de La Candelaria: entre tradiciones y crímenes",
    author: "Señal Memoria",
    year: 2023,
    type: "divulgación archivística y audiovisual",
    url: "https://www.senalmemoria.co/articulos/las-calles-de-la-candelaria-entre-tradiciones-y-crimenes",
    summary:
      "Localiza la casa, el asesinato de Manuel Ferro y el juicio según Cordovez Moure, señalando modificaciones de dramatizaciones posteriores.",
    limitation:
      "Depende en buena medida de una crónica tardía y una serie televisiva; conserva expresiones de duda sobre hechos atribuidos.",
  }),
  signalCordovez: source({
    title: "José María Cordovez Moure y el enigmático doctor Russi",
    author: "Señal Memoria",
    year: 2025,
    type: "archivo audiovisual y lectura de crónica histórica",
    url: "https://www.senalmemoria.co/articulos/jose-maria-cordovez-moure",
    summary:
      "Distingue el proceso narrado por Cordovez, la defensa impresa de Russi y la dramatización televisiva de los años ochenta.",
    limitation:
      "La serie es ficción histórica y Cordovez escribió después de los hechos; ambos requieren distancia crítica.",
  }),
  idartesRussi: source({
    title: "El Espectro del Dr. Russi",
    author: "Idartes y Croché Títeres",
    type: "registro de adaptación teatral contemporánea",
    url: "https://ant.idartes.gov.co/es/agenda/presentacion-de-danza/el-espectro-del-dr-russi",
    summary:
      "Demuestra la transformación contemporánea del caso en un espectro que cuenta su versión desde La Candelaria.",
    limitation:
      "La obra adopta una perspectiva de inocencia para fines dramáticos y no resuelve historiográficamente el juicio.",
  }),
  fantasmasBook: source({
    title: "Fantasmas de ciudad / fantasmas en La Candelaria",
    author: "Stella Monsalve Gaitán y Alcaldía Mayor de Bogotá",
    year: 2008,
    type: "libro institucional de memoria oral urbana",
    url: "https://www.bibliotecadigitaldebogota.gov.co/resources/4157989/",
    summary:
      "Reúne relatos de la Calle del Fantasma, la Casaca Verde, Russi y otras apariciones a partir de años de recorridos y escucha local.",
    limitation:
      "Preserva tradición oral y experiencia personal; no verifica apariciones ni garantiza precisión histórica de cada identificación.",
  }),
  fantasmagoriasStudy: source({
    title:
      "Fantasmagorías bogotanas: invención y producción de fantasmas en La Candelaria",
    author: "Revista de Estudios Colombianos",
    year: 2019,
    type: "artículo académico de crítica cultural",
    url: "https://colombianistas.org/ojs/index.php/rec/article/view/61/59",
    summary:
      "Analiza cómo rutas, esculturas y relatos producen un mapa fantasmal, y advierte errores o exclusiones en ciertas atribuciones históricas.",
    limitation:
      "Su objetivo es interpretar la producción cultural de fantasmas, no probar ni refutar experiencias sobrenaturales individuales.",
  }),
  acaracuy: source({
    title: "Acaracuy: espíritus de La Candelaria",
    author: "Luisa María Franco Perilla y Plaza Capital",
    year: 2019,
    type: "proyecto periodístico y cómic de memoria urbana",
    url: "https://plazacapital.co/especiales/3444-acaracuy-espiritus-de-la-candelaria",
    summary:
      "Documenta la circulación contemporánea del Duende Baltazar, la Lavandera, la Casaca Verde, Russi y la Calle del Fantasma.",
    limitation:
      "Es una adaptación multimedia estudiantil que selecciona y recrea relatos anteriores.",
  }),
  idpcCasas: source({
    title: "Las casas que hablan",
    author: "Instituto Distrital de Patrimonio Cultural",
    year: 2023,
    type: "guía histórica del barrio La Candelaria",
    url: "https://idpc.gov.co/publicaciones/producto/las-casas-que-hablan-guia-historica-del-barrio-de-la-candelaria-de-santa-fe-de-bogota/",
    summary:
      "Sitúa inmuebles, calles, usos y transformaciones del barrio para no reducirlo a un decorado sobrenatural sin historia.",
    limitation:
      "Es una guía patrimonial y no un catálogo exhaustivo de tradición oral.",
  }),
  monserrateAcademic: source({
    title:
      "De la Virgen de Monserrat al Señor Caído de Monserrate. Misterio, fe y lugar",
    author: "Marcela Cristina Cuéllar Sánchez",
    year: 2012,
    type: "artículo académico de historia del arte y devoción",
    url: "https://www.upo.es/revistas/index.php/atrio/article/download/557/391/999",
    summary:
      "Reconstruye el tránsito de la advocación mariana a la centralidad del Señor Caído y la formación histórica del lugar de peregrinación.",
    limitation:
      "Estudia culto, arte y espacio; no certifica milagros ni todas las leyendas contemporáneas.",
  }),
  monserrateOfficial: source({
    title: "Historia del Cerro de Monserrate",
    author: "Santuario de Monserrate",
    type: "cronología institucional del santuario",
    url: "https://monserrate.co/es/sobre-monserrate/history/",
    summary:
      "Fecha la ermita de 1640, la talla de 1656, el templo posterior, los sistemas de acceso y descensos históricos de la imagen.",
    limitation:
      "Es la voz de la institución religiosa y presenta milagros como parte de su memoria devocional.",
  }),
  monserrateLegend: source({
    title: "Leyenda del Santuario de Monserrate",
    author: "Secretaría de Cultura, Recreación y Deporte de Bogotá",
    type: "repertorio institucional de leyendas",
    url: "https://culturarecreacionydeporte.gov.co/es/bogotanitos/cuenta-la-leyenda/leyenda-del-santuario-de-monserrate",
    summary:
      "Registra creencias sobre cabello, peso, promesas, novios y la historia fabulosa del equilibrista Harry Warner.",
    limitation:
      "Agrupa motivos de grados documentales distintos y reproduce sin prueba un volcán y presencias muiscas.",
  }),
  monserrateIdpc: source({
    title: "Estudio técnico del patrimonio cultural inmaterial de Bogotá",
    author: "Instituto Distrital de Patrimonio Cultural",
    type: "documento técnico de patrimonio inmaterial",
    url: "https://idpc.gov.co/wp-content/uploads/2018/10/5-ET_INMATERIAL.pdf",
    summary:
      "Reconoce Monserrate como referencia visual, lugar de historia oral y escenario de leyendas sobre peso, lluvia y enamorados.",
    limitation:
      "Inventariar una creencia como patrimonio no convierte su contenido sobrenatural en acontecimiento comprobado.",
  }),
  monserrateBic: source({
    title: "Ficha de inventario y valoración: Santuario de Monserrate",
    author: "Instituto Distrital de Patrimonio Cultural",
    type: "ficha oficial de bien de interés cultural",
    url: "https://sisbic.idpc.gov.co/Fichas_CH/FV_101405000041.pdf",
    summary:
      "Verifica localización, etapas del inmueble, la ermita mariana y el encargo de la talla a Pedro de Lugo y Albarracín.",
    limitation:
      "Su propósito es valorar el inmueble y no estudiar la transmisión de cada leyenda.",
  }),
  radioMonserrate: source({
    title: "Cerro de Monserrate: historia, mitos y curiosidades",
    author: "Radio Nacional de Colombia",
    year: 2022,
    type: "divulgación cultural pública",
    url: "https://www.radionacional.co/cultura/historia-colombiana/cerro-de-monserrate-historia-mitos-y-curiosidades",
    summary:
      "Distingue la talla histórica de Pedro de Lugo y las creencias actuales sobre peso, cabello, sanaciones y parejas.",
    limitation:
      "Es divulgación contemporánea y depende de repertorios institucionales para las leyendas.",
  }),
  puenteOcampo: source({
    title: "Puente del Común: historia y leyenda",
    author: "Javier Ocampo López, texto reproducido en Wikimedia Commons",
    type: "reproducción de compilación folclórica e histórica",
    url: "https://upload.wikimedia.org/wikipedia/commons/3/31/PUENTE_DEL_COMUN.pdf",
    summary:
      "Separa la construcción por Domingo Esquiaqui del pacto legendario de Florentino, el canto del gallo y la huella del diablo.",
    limitation:
      "La reproducción combina fuentes y ofrece fechas discrepantes; la leyenda no demuestra que Florentino dirigiera la obra real.",
  }),
  puenteLegend: source({
    title: "El diablo en el Puente del Común",
    author: "Secretaría de Cultura, Recreación y Deporte de Bogotá",
    type: "versión institucional de leyenda cundinamarquesa",
    url: "https://culturarecreacionydeporte.gov.co/es/bogotanitos/cuenta-la-leyenda/el-diablo-en-el-puente-del-comun",
    summary:
      "Conserva a Florentino, el pacto, la fila de diablos, el sacerdote, el gallo, la última piedra y la marca de la pata.",
    limitation:
      "No distingue por sí sola al personaje legendario del ingeniero documentado y no aporta procedencia oral temprana.",
  }),
  puenteIcomos: source({
    title: "Puente del Común",
    author: "ICOMOS Colombia",
    type: "registro oficial de bien de interés cultural",
    url: "https://www.icomoscolombia.org/bic/675",
    summary:
      "Verifica que el bien se encuentra en Chía, Cundinamarca, sobre el río Bogotá en la vía Bogotá-Chía.",
    limitation:
      "El registro patrimonial no aborda la leyenda ni resuelve la cronología constructiva completa.",
  }),
  puenteRestoration: source({
    title: "Están restaurando el Puente del Común",
    author: "El Tiempo",
    type: "hemerografía patrimonial",
    url: "https://www.eltiempo.com/archivo/documento/mam-799453",
    summary:
      "Describe la restauración, materiales, valor histórico y atribución de la obra al ingeniero Domingo Esquiaqui.",
    limitation:
      "Es una nota periodística posterior y no una edición de los documentos de obra originales.",
  }),
  puenteTransport: source({
    title: "Historia del transporte y la infraestructura en Colombia",
    author: "Ministerio de Transporte de Colombia",
    type: "historia institucional de infraestructura",
    url: "https://web.mintransporte.gov.co/jspui/bitstream/001/10409/1/Historia%20del%20transporte%20y%20la%20infraestructura%20en%20Colombia_compressed.pdf",
    summary:
      "Contextualiza la construcción de caminos y puentes coloniales y el papel de Esquiaqui en la infraestructura del virreinato.",
    limitation:
      "Su escala nacional no permite reconstruir cada episodio local ni documenta a Florentino.",
  }),
  chiaPot: source({
    title: "Dimensión funcional del Plan de Ordenamiento Territorial de Chía",
    author: "Alcaldía Municipal de Chía",
    type: "documento territorial oficial",
    url: "https://www.chia-cundinamarca.gov.co/2020/POT/4.%20DIMENSI%C3%93N%20FUNCIONAL.pdf",
    summary:
      "Ubica el Puente del Común dentro del territorio, sistema vial y patrimonio del municipio de Chía.",
    limitation:
      "No investiga tradición oral ni autoría constructiva y sirve principalmente para corregir la clasificación territorial.",
  }),
  flacsoOtero: source({
    title: "Mitos y leyendas de Colombia, volumen II",
    author: "Eugenia Villa Posse, compiladora",
    year: 1993,
    type: "antología digital de leyendas colombianas",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620",
    summary:
      "Ofrece un paralelo colombiano directo de pactos y cobros diabólicos mediante las leyendas firmadas de Enrique Otero D’Costa.",
    limitation:
      "Los textos de Otero son elaboraciones literarias y no establecen parentesco histórico con el relato del puente.",
  }),
};

export const bogotaMestizoMemorySourceKeysBySlug = {
  "el-bobo-del-tranvia": [
    "bogotanitosBobo",
    "archivoTransporte",
    "cuatroLocosStudy",
    "locotaBogota",
    "fugaCuandoAmanezca",
  ],
  "el-loco-arias": [
    "bogotanitosArias",
    "canalArias",
    "cuatroLocosStudy",
    "locotaBogota",
    "fugaCuandoAmanezca",
  ],
  "el-mono-de-la-pila": [
    "monoUniandes",
    "idpcMuseoCielo",
    "acueductoHistory",
    "bogotanitosMono",
    "museoBogota",
  ],
  "la-loca-margarita": [
    "margaritaChronicle",
    "bogotanitosMargarita",
    "radioMargarita",
    "asiloMujeres",
    "elTiempoMargarita",
    "cuatroLocosStudy",
  ],
  "el-enigmatico-abogado": [
    "russiTerritorio",
    "museoRussi",
    "signalRussiStreets",
    "signalCordovez",
    "idartesRussi",
    "fantasmasBook",
  ],
  "los-fantasmas-de-la-candelaria": [
    "fantasmasBook",
    "fantasmagoriasStudy",
    "acaracuy",
    "idpcCasas",
    "signalRussiStreets",
    "fugaCuandoAmanezca",
  ],
  "la-leyenda-del-santuario-de-monserrate": [
    "monserrateAcademic",
    "monserrateOfficial",
    "monserrateLegend",
    "monserrateIdpc",
    "monserrateBic",
    "radioMonserrate",
  ],
  "el-diablo-del-puente-del-comun": [
    "puenteOcampo",
    "puenteLegend",
    "puenteIcomos",
    "puenteRestoration",
    "puenteTransport",
    "chiaPot",
    "flacsoOtero",
  ],
};

export function pickBogotaMestizoMemorySources(slug) {
  const keys = bogotaMestizoMemorySourceKeysBySlug[slug];
  if (!keys) throw new Error(`${slug}: falta selección de fuentes.`);
  // Admite `{ key, summary, limitation }` además de la clave suelta: la ficha
  // bibliográfica la fija el pool y lo que cambia por mito es qué dice esa
  // obra sobre ESE relato.
  return keys.map((entrada) => {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = bogotaMestizoMemorySources[key];
    if (!selected) throw new Error(`${slug}: fuente desconocida ${JSON.stringify(entrada)}.`);
    if (typeof entrada === "string") return selected;
    return {
      ...selected,
      ...(entrada.summary ? { summary: entrada.summary } : {}),
      ...(entrada.limitation ? { limitation: entrada.limitation } : {}),
    };
  });
}
