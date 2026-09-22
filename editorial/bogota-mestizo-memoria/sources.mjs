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

  // ——— Búsqueda profunda 2026-09-22 ———
  culturabobo2020: source({
    title: "El bobo del tranvía (Bogotanitos · Cuenta la leyenda)",
    author: "Secretaría de Cultura, Recreación y Deporte de Bogotá",
    year: 2020,
    type: "ficha de divulgación infantil del Distrito",
    url: "https://culturarecreacionydeporte.gov.co/es/bogotanitos/cuenta-la-leyenda/el-bobo-del-tranvia",
    summary:
      "Es el texto más antiguo localizado que fija el relato completo, y por eso se cita primero aunque no sea un registro. Trae el uniforme pieza por pieza —gorra roja, camisa verde, correa negra, pantalón amarillo, botas azules— con las dos señales, «Pare» y «Siga», y el pito. Dice que quienes lo nombraron «jefe comandante de la circulación» fueron universitarios, no estudiantes en general, y que lo tenían por «inteligente, buen ciudadano, honorable, respetable, sociable y excelente hermano»: no hay burla en el nombramiento. Precisa que el trabajo era gratuito y que multaba por igual a peatones, pasajeros y conductores. Da causa a la escena de la hermana —los silbidos y los piropos de los pasajeros cuando ella subía—, y da la pérdida como fuga y no como muerte, con el aislamiento y la distracción del duelo como explicación del atropello. Y cierra donde la ficha heredada se había ablandado: «lo llevaron al hospital de Sibaté, donde murió esperando que su hermana lo fuera a visitar». Fecha además el tranvía eléctrico, pone precio al pasaje y describe la tripulación de tres.",
    limitation:
      "No es un registro de primer escalón: divulgación infantil sin firma, sin fecha de publicación y sin una sola referencia. El nombre «Antonín» no aparece en ninguna fuente anterior a 2007, y en las doscientas veintiséis páginas de la tesis que documenta el tranvía sale cero veces. Mientras no aparezca un registro anterior, la ficha queda bloqueada en el sentido del spec: existe el texto, no el testimonio. Su año se consigna por la aparición de la sección.",
  }),
  colombiaTranvia2009: source({
    title: "Tranvía municipal de Bogotá. Desarrollo y transición al sistema de buses municipal, 1884-1951",
    author: "Juan Ignacio Baquero Mora (tesis de maestría en Historia de Colombia, dirigida por Fabio Zambrano Pantoja, Universidad Nacional de Colombia)",
    year: 2009,
    type: "tesis de maestría en historia urbana con cartografía de rutas",
    url: "https://bffrepositorio.unal.edu.co/server/api/core/bitstreams/ca64573f-6e3d-4e0f-990c-831bbfc6c4df/content",
    summary:
      "Es la máquina del relato, documentada. Fecha el arranque del sistema en 1884 con dieciséis coches de tracción animal comprados a una casa estadounidense, la mitad abiertos y la mitad cerrados, y describe el coche de mulas como un vagón de madera abierto con cinco bancas de cinco plazas: eso es lo que atropella a un hombre distraído, y es una escala distinta de la que sugiere la palabra tranvía. Sigue el sistema por sus dos tracciones hasta 1951, con los planos de las rutas de 1940 a abril de 1948 y la superposición de tranvías y buses de ese año, y cierra con la quema de vehículos del 9 de abril de 1948 y el desmonte posterior. Da, en suma, el escenario entero con fechas: cuándo había cruces que dirigir, por dónde pasaban y cuándo dejó de haberlos.",
    limitation:
      "«Antonín» no aparece ni una vez en sus doscientas veintiséis páginas, y el personaje tampoco: es una historia de la empresa y de la infraestructura, no de la vida de la calle. No documenta ningún accidente con nombre, ninguna figura que dirigiera el tránsito ni ningún uso informal de los cruces. Es territorio, no registro. Tesis de maestría sin publicación posterior.",
  }),
  restrepotranvia2017: source({
    title: "El tranvía de Bogotá, 1882-1951",
    author: "Juan Santiago Correa Restrepo, Santiago Jimeno León y Marianela Villamizar Bacca",
    year: 2017,
    type: "artículo arbitrado de historia económica (Revista de Economía Institucional, vol. 19, n.º 36, pp. 203-229)",
    url: "http://www.scielo.org.co/pdf/rei/v19n36/0124-5996-rei-19-36-00203.pdf",
    summary:
      "Da la cronología empresarial que permite fechar el relato sin depender de la divulgación. Sigue el negocio del tranvía desde la concesión de los años ochenta del siglo XIX hasta el cierre de 1951: la propiedad extranjera y después municipal, la electrificación, la expansión de líneas, las tarifas y los conflictos con el Concejo. Con eso se puede decir en qué décadas el tranvía era efectivamente el organizador del tránsito del centro, y por tanto en qué ventana cabe un hombre dirigiendo cruces con dos paletas y un pito. Corrige además el arranque del sistema a 1882 frente al 1884 de la tesis, discrepancia que conviene nombrar y no ocultar.",
    limitation:
      "Es historia económica: no toca leyendas, personajes ni accidentes, y de la calle sólo le interesa el trazado y la tarifa. No menciona al bobo del tranvía. La URL con que el módulo lo citaba antes —la ruta `scielo.php` del mismo servidor— no conecta; sólo funciona la ruta del PDF, y SciELO Colombia sólo publica por http.",
  }),
  tiempoHistoria2007: source({
    title: "Historia de cuatro locos que hacen parte de la historia de los años 40 en Bogotá",
    author: "Redacción El Tiempo",
    year: 2007,
    type: "nota de prensa de memoria urbana",
    url: "https://www.eltiempo.com/archivo/documento/CMS-3669359",
    summary:
      "Es la aparición impresa más antigua que se ha podido localizar del personaje, y por eso importa aunque sea tardía: del 6 de agosto de 2007. Reúne a los cuatro personajes de calle con los que el ciclo bogotano lo agrupa —la Loca Margarita, Pomponio, el Negro Chivas y el bobo del tranvía—, y es aquí donde el nombre «Antonín» empieza a circular con su mínima ficha biográfica. Sirve para lo contrario de lo que suele usarse: no para probar nada, sino para fechar el origen de lo que hoy se repite, y para mostrar que la única fuente que la nota invoca son «relatos de la época», sin citar ninguno. Registra además la vacilación sobre el apellido del Negro Chivas, que muestra el estado real del expediente de estos cuatro.",
    limitation:
      "Nota sin firma individual, sin archivo, sin entrevista y sin una sola referencia verificable: trata a los cuatro personajes como leyenda local y lo dice. Es de 2007, sesenta años después de los hechos que narra, y todo lo posterior sobre «Antonín» desciende de aquí o de la ficha distrital. No puede sostener ningún dato.",
  }),
  grigoliUnselfish2023: source({
    title: "The Unselfish Ruler: Norton I, Emperor of the United States",
    author: "Leland Renato Grigoli",
    year: 2023,
    type: "artículo de la revista profesional de la American Historical Association (Perspectives on History, diciembre de 2023)",
    url: "https://www.historians.org/perspectives-article/the-unselfish-ruler-norton-i-emperor-of-the-united-states-december-2023/",
    summary:
      "Sostiene el paralelo del cargo que no existe y lo hace con expediente. Documenta que el 17 de septiembre de 1859 Joshua Norton envió una carta al San Francisco Daily Evening Bulletin declarándose emperador, que emitió más de quinientos decretos publicados sobre todo en el Pacific Appeal —un periódico de propiedad afroamericana—, y que la ciudad lo trató con familiaridad: uniforme, inspecciones a las obras públicas y moneda propia aceptada en los comercios del barrio. Registra el episodio que más se parece al caso bogotano: cuando lo detuvieron por demencia, la reacción pública obligó a soltarlo. Y da el final: murió el 8 de enero de 1880 y a su entierro fueron más de diez mil personas. La mecánica es idéntica —una ciudad reconoce un cargo inexistente, lo respeta mientras dura y lo incorpora al paisaje—, con la diferencia de que allá los decretos quedaron impresos y aquí no quedó nada.",
    limitation:
      "Es un artículo de divulgación profesional, no un estudio con aparato: se apoya en la prensa contemporánea y en referencias literarias, y no en archivo inédito. Es de San Francisco y no menciona Bogotá: el paralelo lo establece esta ficha. Y la asimetría es grande, porque Norton dejó quinientos documentos publicados y del personaje bogotano no hay un solo papel.",
  }),
  martinezCon2006: source({
    title: "«Con notable daño del buen servicio»: sobre la locura femenina en la primera mitad del siglo XX en Bogotá",
    author: "María Angélica Ospina Martínez",
    year: 2006,
    type: "artículo arbitrado de antropología histórica (Antípoda, n.º 2, Universidad de los Andes)",
    url: "http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S1900-54072006000100016",
    summary:
      "Documenta el destino institucional con que el relato termina y que suele leerse como un detalle de color. Reconstruye, sobre documentos institucionales e informes médicos, el sistema asilar del centro del país administrado por la Junta General de la Beneficencia de Cundinamarca desde 1870, y muestra que el internamiento por decisión administrativa —no judicial ni médica— era el procedimiento ordinario para las personas que estorbaban en la vía pública. Eso convierte el final del relato, el traslado a un hospital de Sibaté y la espera de una visita que no llega, en algo verificable como práctica aunque el caso concreto no lo sea: los establecimientos de la Beneficencia se construyeron fuera de la ciudad, y salir de ellos dependía de que alguien viniera a reclamarte.",
    limitation:
      "Su objeto es la locura femenina y el Asilo de Locas de Bogotá: no trata pacientes varones, no menciona Sibaté y su ventana son los años treinta y cuarenta. No documenta nada de este caso. Es contexto institucional y por eso no va como fuente clave. SciELO Colombia sólo publica por http.",
  }),
  rosaCalles1938: source({
    title: "Calles de Santafé de Bogotá: homenaje en su IV centenario, 1938",
    author: "Moisés de la Rosa",
    year: 1938,
    type: "topografía histórica de la ciudad, calle por calle",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2554/",
    summary:
      "Da los cruces. Recorre el casco donde el relato transcurre —Catedral p. 33, Palacio 137, Las Nieves oriental 163 y occidental 211, San Victorino 245— con los nombres viejos de las calles por las que corrían los rieles, y permite ver la dimensión real del centro que un solo hombre podía cubrir a pie en una jornada. Publicado en el mismo decenio en que la versión distrital sitúa al personaje, es el documento contemporáneo que describe ese espacio sin mitificarlo: esquinas estrechas, tráfico mezclado de peatones, coches y tranvías, y una cuadrícula lo bastante pequeña para que la misma gente pasara todos los días por el mismo cruce.",
    limitation:
      "No menciona al personaje ni a ninguno de los cuatro de los años cuarenta: es una topografía de nomenclatura y su interés es histórico, no social. Tampoco describe el tránsito ni su regulación. Es contexto, no registro. Erudición de concejo municipal sin archivo citado. Mismo aviso de certificado que los demás volúmenes de Banrep.",
  }),
  ibanezCronicas1951: source({
    title: "Crónicas de Bogotá, tomo II",
    author: "Pedro María Ibáñez",
    year: 1951,
    type: "historia urbana erudita que transcribe las inscripciones del monumento (1.ª ed. 1913-1923; ed. consultada A B C, 1951)",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2396/",
    summary:
      "Es la fuente de primera mano de la obra real, porque copia lo que está grabado en la piedra. En la p. 92 transcribe la inscripción de las columnas del nordeste y del sudeste: «SE CONSTRUYO ESTA OBRA DE EL PUENTE, Y SUS CAMELLONES EN 31 DE DICIEMBRE DE 1792», bajo Carlos IV y el virrey Ezpeleta, y una segunda inscripción que nombra al director de la obra con su grado militar y su plaza de origen. Con eso queda zanjada la discrepancia de fechas que la ficha arrastraba: el 1796 que circula es un error del propio cuerpo narrativo de Ibáñez, contradicho cuatro párrafos después por el monumento que él mismo describe. Añade la descripción material —ladrillo sólo en los arcos y piedra en todo lo demás, doce pilastras rematadas en pirámides con globos, una plazuela en herradura en cada extremo— y el dato económico que explica la obra: se pagó con un peaje sobre las recuas que iban y venían de los pueblos del norte (p. 91).",
    limitation:
      "Ibáñez no conoce ni recoge la leyenda: en sus ocho menciones del puente no hay pacto, ni diablo, ni huella en la piedra. Y se contradice a sí mismo sobre la fecha sin advertirlo, de modo que quien lo cite por el cuerpo del texto y no por la transcripción se equivocará. El dato del peaje choca además con la etimología que da la divulgación, según la cual el puente se llamó «del Común» por estar exento de peaje. Certificado TLS incompleto en el servidor.",
  }),
  culturadiablo2020: source({
    title: "El diablo en el Puente del Común (Bogotanitos · Cuenta la leyenda)",
    author: "Secretaría de Cultura, Recreación y Deporte de Bogotá, reproduciendo a Javier Ocampo López, «Leyendas populares colombianas»",
    year: 2020,
    type: "reproducción distrital, casi palabra por palabra, del capítulo de un recopilador identificado",
    url: "https://culturarecreacionydeporte.gov.co/es/bogotanitos/cuenta-la-leyenda/el-diablo-en-el-puente-del-comun",
    summary:
      "Es el único texto abierto que trae el relato entero, y conserva sus articulaciones, que es lo que importa: el relato se atribuye a la gente de Cundinamarca —no de Bogotá— y sitúa la obra en la vía de Bogotá a Zipaquirá; el motivo del pacto es financiero y contractual, porque Florentino tiene el negocio con el gobierno y no tiene dinero ni quien se lo preste; la condición que salva el alma está enunciada como cláusula, en lenguaje de escritura; Satanás vacía el infierno y deja un solo centinela, con razón explícita; los diablos trabajan en fila india para ahorrar tiempo y él dirige en persona; la astucia de Florentino consiste en esconder a un sacerdote antes de empezar y pedir la absolución en el último instante; el diablo canta su derrota en una copla de cuatro versos, que es la pieza más fijada del relato; y el desenlace es simultáneo —el gallo canta antes de la última piedra y el cura bendice en el mismo momento—, con la marca en la piedra como venganza y la bendición como lo que impide que el puente caiga. Un apartado previo, «Historia», da el nombre del puente por su exención de peaje y explica que el virrey trajo a Esquiaqui desde Cartagena por considerarlo el único capaz.",
    limitation:
      "No es un registro: es una reproducción distrital, sin firma ni fecha, de un libro del que no hay ejemplar abierto —la única copia íntegra localizada es una subida de usuario a Wikimedia Commons cuyo pie declara en cada página que el texto sale de «Leyendas populares colombianas» de Javier Ocampo López—, de modo que ni el año de edición ni la paginación se pueden confirmar. Ocampo es un historiador que reelabora literariamente: no declara narrador, ni vereda, ni fecha de recolección. Y su apartado histórico da la declaratoria de monumento en 1967, que el acto administrativo desmiente.",
  }),
  colombiaLista2024: source({
    title: "Lista de bienes declarados bien de interés cultural del ámbito nacional (registro 675: Puente del Común, Chía)",
    author: "Ministerio de Cultura de Colombia, Dirección de Patrimonio y Memoria",
    year: 2024,
    type: "listado oficial de declaratorias, con código, localización y acto administrativo",
    url: "https://www.mincultura.gov.co/direcciones/patrimonio-y-memoria/Documents/BICNAL-LICBIC/LISTA-DE-BIENES-DECLARADOS-BIEN-DE-INTER%C3%89S-CULTURAL-DEL-%C3%81MBITO-NACIONAL_octubre_2024.pdf",
    summary:
      "Cierra con documento las dos cosas que la ficha llevaba mal. La primera es dónde está el bien: el registro 675, con código 01-01-01-09-25-175-000001, lo inscribe en el departamento de Cundinamarca, municipio de Chía, «La Caro. Vía Bogotá - Chía. Sobre el Río Bogotá». No está en Bogotá, y lo dice el Estado. La segunda es cuándo se declaró: el acto administrativo es el Decreto 1584 del 11 de agosto de 1975, con una Resolución 019 de 1992 que fija su zona de influencia; ni 1967, que da la divulgación, ni 1968, que da la prensa. Es también el único lugar donde el puente aparece con su vecino de ficha, la Hacienda Yerbabuena, lo que sitúa el bien en el corredor patrimonial del camino del norte.",
    limitation:
      "Es un listado administrativo: da el código, la dirección y el decreto, y no una sola línea de historia, de descripción ni de valoración del puente. No menciona al ingeniero, ni la fecha de construcción, ni por supuesto la leyenda. Y es un documento vivo que se reedita: la versión citada es la de octubre de 2024, y las anteriores y posteriores pueden numerar distinto.",
  }),
  martinezSupersticion2021: source({
    title: "Superstición, creencias, leyendas y rituales. Facetas del imaginario popular barakaldarra, cap. 9.1 «El Puente del Diablo»",
    author: "José Ignacio Homobono Martínez",
    year: 2021,
    type: "monografía etnográfica en serie científica institucional (Kobie, Serie Anejo n.º 22, Diputación Foral de Bizkaia)",
    url: "https://www.bizkaia.eus/fitxategiak/04/ondarea/Kobie/PDF/6/KOBIE_Anejo22_web-9.pdf",
    summary:
      "Describe la familia entera a la que pertenece este relato y lo hace con la mecánica idéntica. Define el tipo legendario de los «puentes del Diablo» como un «ciclo narrativo folclórico común al acervo cultural de todo el occidente europeo y de Hispanoamérica», con su ficha en la clasificación internacional de cuentos, y enuncia la estructura: el diablo ofrece construir la obra a cambio del alma del peticionario, «debía finalizar su trabajo durante la noche, antes del canto del gallo o al amanecer», y el mortal siempre se las ingenia para engañarle consiguiendo que el Maligno termine la obra. En el caso de Kastrexana la falla es exactamente la del Puente del Común: el diablo no alcanza a concluir antes del primer canto del gallo y deja la obra «a falta de una piedra». Explica además por qué el motivo se pega a los puentes y no a otras obras —la construcción sobre un curso de agua exigía un tributo a los númenes acuáticos, y el puente es de suyo un lugar de paso entre esta vida y la otra— y recoge la hipótesis de Sébillot de que el cristianismo redujo a un solo diablo la multitud de númenes antiguos a los que antes se pedía la obra.",
    limitation:
      "Es un estudio del País Vasco: cita la extensión del ciclo a Hispanoamérica con un solo ejemplo mexicano y no menciona Colombia, Chía ni el Puente del Común. El parentesco lo establece esta ficha. Y su variante vasca no tiene la pieza que distingue a la colombiana: allí el engaño es del tipo del animal enviado a cruzar o del gallo provocado, y no hay cura escondido ni absolución en el último instante.",
  }),
  bogotaFantasmas2008: source({
    title: "Fantasmas de ciudad: fantasmas en La Candelaria (colección «Memorias de la Ciudad», n.º 1)",
    author: "Stella Monsalve Gaitán; Archivo de Bogotá, Secretaría General de la Alcaldía Mayor",
    year: 2008,
    type: "transcripción de tradición oral de barrio publicada por un archivo público",
    url: "https://repositorio.biblored.gov.co/items/8bb2dbdc-15de-44f9-b5cd-ac1568fa2bc8",
    summary:
      "Trae el gemelo urbano del pacto, a treinta kilómetros del puente y contado con las mismas piezas. En las pp. 49-50, el relato de la Calle del Fantasma: al ingeniero Alex Mogollón el alcalde le encarga empedrar La Candelaria «en 6 meses y 6 días, de lo contrario, la pena que debía cumplir el Ingeniero era el destierro»; vencido el plazo, lo llama y le propone que le acabe el trabajo en esa noche «pero que no le faltara ni una sola piedra», y esa cláusula es la que lo salva, porque falta una y «el Diablo, muerto de ira, tuvo que irse sin su alma». Lo que cambia es la prueba que queda: en el camino del norte, una huella sobre la piedra; en el barrio, un hueco en el empedrado y una cuenta exacta —665 piedras— que cualquiera puede verificar agachándose. Sostiene la afirmación de la ficha de que no se trata de una leyenda aislada sino de un motivo que circulaba en la Sabana con el mismo lenguaje de contrato.",
    limitation:
      "Es divulgación de tradición oral sin aparato crítico, transcrita de una sola vecina y sin fecha de recolección; no cita documentación municipal para el ingeniero ni para el contrato de empedrado, y el conteo de piedras pertenece al relato y no a una medición. Nada en el libro relaciona ese pacto con el del puente: la comparación la establece esta ficha.",
  }),
  tiempopuente1998: source({
    title: "Un puente no tan común",
    author: "Redacción El Tiempo",
    year: 1998,
    type: "reportaje de prensa sobre la restauración del monumento",
    url: "https://www.eltiempo.com/archivo/documento/MAM-736723",
    summary:
      "Es la pieza que muestra el puente como obra viva y como problema, no como escenario. Documenta la restauración de un año con más de ciento sesenta trabajadores, la retirada de siete mil metros cúbicos de escombros, la reconstrucción de más de noventa metros de pretiles, el hallazgo bajo tierra de un muro de piedra que servía de embarcadero de ganado y las fisuras que el tráfico de vehículos abrió en los arcos principales. Da sus medidas —31,86 metros de ancho y dos camellones de acceso de 123 y 109 metros— y confirma a Domingo Esquiaqui como autor y diciembre de 1792 como fecha de terminación bajo el virrey Ezpeleta. Y aporta la etimología que compite con la de la divulgación: se llamó del Común porque lo usaba la gente común que comerciaba ganado y productos del campo, a diferencia de otros puentes reservados a personajes principales.",
    limitation:
      "Es una nota de prensa sin firma individual y sin fuentes citadas: no dice de dónde saca la etimología ni las medidas. Da la declaratoria de monumento nacional en 1968, tercera fecha en circulación y desmentida por el decreto de 1975. Y no menciona la leyenda ni la huella en la piedra: documenta la obra pública, no el relato.",
  }),
  casadoIngenieros2019: source({
    title: "Ingenieros militares en la Nueva Granada durante el siglo XVIII. Movilidad, proyectos y expediciones",
    author: "Manuel Gámez Casado",
    year: 2019,
    type: "artículo arbitrado de historia de la ingeniería colonial (Revista de Indias, vol. 79, n.º 277, CSIC)",
    url: "https://revistadeindias.revistas.csic.es/index.php/revistadeindias/article/view/1113",
    summary:
      "Explica el detalle más raro de la historia real: que el director de la obra viniera de Cartagena y que su inscripción consigne el grado militar y la plaza antes que el oficio. Analiza el grado de movilidad de los ingenieros militares entre las principales ciudades del litoral caribeño del virreinato de la Nueva Granada durante el siglo XVIII, y muestra que esos oficiales eran el único cuerpo técnico disponible de la Corona: se los desplazaba de plaza en plaza según la comisión, y de ellos salían los proyectos y las expediciones que el virreinato necesitaba. Es el sistema que hace posible que un teniente coronel del Real Cuerpo de Artillería, comandante de la plaza y provincia de Cartagena de Indias, acabe dirigiendo un puente sobre el río Bogotá por decisión del virrey, que es lo que la inscripción del monumento consigna y lo que la divulgación traduce diciendo que lo trajeron por ser el único capaz.",
    limitation:
      "Su objeto es el litoral caribeño, no la Sabana: no estudia el Puente del Común, no menciona la obra y sólo da el marco profesional del que su director procedía. No es una monografía sobre Esquiaqui. El servidor del CSIC sirve una cadena TLS incompleta y los clientes que verifican certificado rechazan la conexión, aunque el artículo carga entero en navegador. Y nada tiene que decir sobre la leyenda.",
  }),
  moureReminiscencias1899: source({
    title: "Reminiscencias de Santafé y Bogotá, Serie primera (3.ª ed. corregida y aumentada)",
    author: "José María Cordovez Moure",
    year: 1899,
    type: "crónica costumbrista de un contemporáneo, con tres capítulos dedicados al caso",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2917/",
    summary:
      "Es el registro que fija el relato y de aquí sale casi todo lo que la ficha afirma. Dentro del bloque «Crímenes célebres», que abre en la p. 112, tres capítulos siguen el expediente: «Asalto al convento de San Agustín por la Compañía de Russi» (pp. 123-130), «Asesinato de Manuel Ferro» (pp. 154-172) y «Juicio y ejecución de José Raimundo Russi y sus compañeros» (pp. 173-203; la copia digitalizada lo abre en la 173, no en la 178 que daba el informe previo). De ahí vienen la ciudad atrincherada de 1850-1851 —«cada casa de la ciudad se convirtió en una fortaleza»—, la cita de Ferro en la esquina del Molino del Cubo la tarde del 24 de abril de 1851 frente a una chichería, las diez onzas de oro que le tocaron como «socio honorario» en el reparto del robo a Alcina, la pregunta que lo pierde —«¿Luégo habló?»—, el reconocimiento del cadáver, el diario cifrado con puntos en lugar de vocales, la autodefensa ante el jurado, la capilla del 15 de julio a las cinco de la tarde, los banquillos frente a las columnas del Capitolio con el cartel de nombre, origen y delito, los papeles impresos que reparte antes de sentarse, la descarga que no mata y la autopsia en el anfiteatro del Hospital de San Juan de Dios. Y es esta obra, no una posterior, la que admite que «si no se obtuvo la plena prueba exigida en Derecho respecto de Russi, fue tal el cúmulo de indicios, coincidencias y sospechas […] que el Jurado no pudo menos de condenarlo»: la duda que la ficha convierte en eje está en el propio testigo de cargo.",
    limitation:
      "Cordovez escribe de memoria y de oídas décadas después, sin declarar narrador ni fecha para ninguna escena, y no separa el rumor del hecho: reconstruye diálogos enteros que nadie pudo taquigrafiar. Su prosa lleva los juicios morales de su clase y de su época sobre los procesados, y su simpatía está del lado del veredicto. La edición de Banrep es además una selección de cuatro volúmenes, no las ocho series completas, y el servidor sirve una cadena TLS incompleta: el visor devuelve 403 y el certificado no valida, aunque el PDF se descarga entero.",
  }),
  castroabogado2020: source({
    title: "El abogado de la criminalidad: José Raimundo Russi",
    author: "Valentina Mena Castro",
    year: 2020,
    type: "artículo de microhistoria en revista de programa universitario",
    url: "https://sociales.uexternado.edu.co/wp-content/uploads/sites/11/2020/06/El-abogado-de-la-criminalidad.pdf",
    summary:
      "Es el único trabajo abierto que vuelve sobre el caso con aparato y no lo repite: declara que su propósito es «reanudar la narración de José María Cordovez Moure» y explicarla «no solamente como una reminiscencia, sino como un hecho histórico». Trabaja sobre el juicio de Russi y de la banda del Molino del Cubo, sobre el escrito de defensa y sobre las notas de prensa, y de ahí salen dos cosas que la ficha usa: que la culpabilidad se construyó con indicios y coincidencias, y que el escrito de defensa sólo circuló impreso después de la ejecución, de modo que su texto no puede cotejarse con lo que se dijo en la sala. Sitúa el terror de Santafé entre septiembre de 1850 y junio de 1851, pone el asalto a San Agustín bajo el padre Salavarrieta —hermano de Policarpa— y cierra conectando el proceso con el aparecido que después recorre La Candelaria, que es exactamente la costura entre las dos capas de esta ficha.",
    limitation:
      "Es un artículo de estudiante de pregrado en la revista de su propio programa: tiene notas y fuentes primarias, pero no revisión por pares equivalente a la de una revista indexada. Cita a Cordovez por la edición BBCC de 2015, cuya paginación no coincide con la de la Serie primera digitalizada, y no reproduce el expediente: lo resume. WebFetch declara el PDF corrupto; el fichero baja bien y se extrae sin pérdida.",
  }),
  colombiaPieza2005: source({
    title: "Pieza del mes, octubre de 2005: cráneo del «doctor Russi», registro 942",
    author: "Museo Nacional de Colombia",
    year: 2005,
    type: "ficha de pieza de museo nacional, con número de inventario",
    url: "https://www.museonacional.gov.co/colecciones/Pieza_del_mes/colecciones-pieza-del-mes-2005/Paginas/Octubre%2005.aspx",
    summary:
      "Convierte en dato institucional lo que en el barrio se cuenta de oídas: el cráneo existe, tiene número —registro 942—, pertenece a la colección de Historia, área de objetos testimoniales, y se exhibió en la sala Federalismo y centralismo (1830-1886), en el segundo piso. Es también la única ficha oficial que traza una biografía del personaje: lo da nacido hacia 1815 en Villa de Leyva, abogado conocido como «doctor Russi», defensor de gente pobre, juez de parroquia y secretario de la Sociedad de Artesanos, acusado por las autoridades de encabezar una banda de ladrones y de matar a un herrero. Y aporta lo que ninguna otra fuente tiene: la trazabilidad del hueso, que «ingresó en algún momento del siglo XX, probablemente en la segunda mitad» y desde entonces permanece en reserva. Es la pieza que permite hablar del cráneo sin citar a nadie de oídas.",
    limitation:
      "Es una ficha divulgativa de museo sin firma de autor y sin bibliografía: no dice de qué documento sale ninguno de sus datos biográficos, y su propio texto admite que la fecha de ingreso de la pieza es una conjetura. El cargo de secretario de la Sociedad de Artesanos, que aquí aparece como hecho, no consta en la crónica de época ni en el estudio de 2020, de modo que el museo sostiene por su cuenta el retrato que el expediente no da. El lugar de nacimiento que ofrece, Villa de Leyva hacia 1815, difiere del que da el repertorio oral y del cartel del banquillo.",
  }),
  posseLeyendas1993: source({
    title: "Leyendas (Biblioteca Aldeana de Colombia, Minerva, 1936), reproducidas en Mitos y leyendas de Colombia, tomo II, sección 17",
    author: "Enrique Otero D'Costa; compilación de Eugenia Villa Posse",
    year: 1993,
    type: "conjunto de leyendas históricas de autor, reeditado en antología institucional",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620",
    summary:
      "Es el paralelo colombiano del ajusticiado que grita su inocencia, y el único que tiene el documento que aquí falta. En las pp. 44-49 del tomo II está «El hombre del farol»: un hombre fusilado por un crimen que no cometió, con las declaraciones de Manuel Llanos y un auto de 1828 que, al aparecer la prueba que lo desmentía todo, ordena «publíquese su inocencia»; desde entonces, según el relato, alumbra de noche las calles por donde lo llevaron. La estructura es la misma que la del abogado de 1851 —sentencia sin prueba plena, protesta pública en el patíbulo, aparecido que devuelve el caso al lugar del agravio—, y la diferencia es exactamente la que la ficha señala: allá la rehabilitación quedó escrita en un auto y aquí sigue en disputa.",
    limitation:
      "Es literatura de autor sobre materia histórica, no recolección con narrador ni fecha: Otero D'Costa no cita el expediente del que saca el auto de 1828. El texto llega aquí en una reedición de 1993 dentro de una antología cuyo índice no nombra a Bogotá en esa sección —se titula «Varias regiones»—, lo que lo ha dejado invisible en búsquedas anteriores. Y el parentesco entre los dos casos es de estructura, establecido por esta ficha: ninguna fuente los relaciona.",
  }),
  torinoMuseo2009: source({
    title: "Museo di Antropologia Criminale «Cesare Lombroso» (Sistema Museale di Ateneo, Università di Torino)",
    author: "Università degli Studi di Torino",
    year: 2009,
    type: "sitio institucional del museo universitario que conserva la colección",
    url: "https://www.museolombroso.unito.it/en/",
    summary:
      "Documenta la idea de época que explica por qué se guarda la cabeza de un condenado. El museo que Cesare Lombroso fundó en 1876 y que la Universidad de Turín reabrió al público en 2009 conserva unas 7.200 piezas, entre ellas 684 cráneos, 183 cerebros humanos, 27 restos esqueléticos y 502 objetos relacionados con delitos, además de máscaras mortuorias, fotografías y maquetas de cárceles, expuestos en las vitrinas originales del siglo XIX. Esa colección se reunió para demostrar que el delito se leía en el hueso: es el marco científico en el que el cráneo baleado de un ajusticiado deja de ser un resto y pasa a ser prueba con número de inventario. El museo exhibe hoy la colección junto con el relato de su propio error, que es el detalle que la ficha usa.",
    limitation:
      "Es la página institucional del propio museo, no un estudio crítico de la frenología ni de la antropología criminal, y no menciona Colombia ni el caso de 1851. No hay relación documentada entre la colección turinesa y el cráneo del Museo Nacional: el paralelo es de mentalidad de época y lo establece esta ficha. Las cifras de la colección proceden del museo y no de un inventario publicado.",
  }),
  caicedoanfiteatro2015: source({
    title: "El anfiteatro de la Facultad de Medicina. Una visita guiada",
    author: "Carlos Arturo Florido Caicedo",
    year: 2015,
    type: "ensayo en revista universitaria de morfología (Morfolia, vol. 7, n.º 2, Universidad Nacional de Colombia)",
    url: "https://revistas.unal.edu.co/index.php/morfolia/article/download/52871/52538/259709",
    summary:
      "Documenta el otro extremo de la misma cadena: qué se hacía en Bogotá con el cuerpo de un muerto sin dolientes. Describe la ceremonia por la que el estudiante de anatomía iba con una carta al administrador del Cementerio Central para que le entregaran un esqueleto —sacado de fosa común de NN o de contratos vencidos— y el proceso de hervido en agua de cal hasta dejar el hueso limpio. Explica por qué la autopsia de los fusilados en el anfiteatro del Hospital de San Juan de Dios, que la crónica de época menciona al pasar, no era un trámite excepcional sino la puerta ordinaria por la que los cuerpos de los ajusticiados pasaban a la enseñanza y a las colecciones. Es el sustrato material de que un cráneo con el agujero del tiro acabara en un museo.",
    limitation:
      "Es un ensayo de opinión escrito en primera persona por un profesor, no un estudio con archivo: no documenta ningún caso concreto, ni el de 1851, y la práctica que describe es del siglo XX. No menciona a Russi ni el ingreso de su cráneo al Museo Nacional, de modo que sostiene el contexto y no el hecho. WebFetch lo declara ilegible; el fichero baja bien.",
  }),
  eljaiekRodriguezFantasmagorias2019: source({
    title: "Fantasmagorías bogotanas: invención y producción de fantasmas en la Candelaria",
    author: "Gabriel Eljaiek-Rodríguez",
    year: 2019,
    type: "artículo arbitrado de estudios culturales (Revista de Estudios Colombianos, vol. 54)",
    url: "https://colombianistas.org/ojs/index.php/rec/article/view/61",
    summary:
      "Explica por qué de todos los ajusticiados del siglo XIX sólo este volvió. Estudia el mapa fantasmal de La Candelaria como una construcción hecha de inclusiones y exclusiones, y trata al doctor Russi entre sus casos: el fantasma como forma de persistencia de una memoria y, a la vez, como representación capturada y puesta a circular, que desplaza a los sucesos y las personas que quedan fuera del recorrido. Es lo que permite afirmar en la ficha que el aparecido no es un residuo del proceso sino una producción posterior con reglas propias, y sostener la distancia entre el expediente de 1851 y el personaje de capa y sombrero de copa que hoy se señala en la carrera 2.ª.",
    limitation:
      "Es un ensayo de estudios culturales: no aporta ningún dato nuevo sobre el proceso ni sobre el personaje histórico, y da por conocidos los relatos que analiza. Su objeto es la circulación de los fantasmas, no su origen, y su corte temporal es reciente: describe el estado del repertorio en 2019, no su formación. Del caso judicial no dice nada.",
  }),
  culturaloco2020: source({
    title: "El loco Arias (Bogotanitos · Cuenta la leyenda)",
    author: "Secretaría de Cultura, Recreación y Deporte de Bogotá, sobre Asdrúbal López Orozco",
    year: 2020,
    type: "ficha de divulgación infantil del Distrito, con procedencia declarada",
    url: "https://culturarecreacionydeporte.gov.co/es/bogotanitos/cuenta-la-leyenda/el-loco-arias",
    summary:
      "Es el texto más antiguo localizado que fija el relato entero, y el único que trae sus piezas. Da la genealogía —Eduardo Arias Jiménez, hijo del alcalde Bruno Arias y de Paulina Jiménez, hacia 1870— y acto seguido marca que lo que sigue es leyenda y no biografía, advertencia que la ficha heredada había borrado. Trae el repertorio de discursos como una lista cerrada de siete nombres recitados de memoria —Homero, Cicerón, Demóstenes, Julio César, Napoleón, Washington y Bolívar—, el disfraz de Merlín atado a un lugar preciso, la vía pública y los establecimientos de comercio, con su pausa de chicha; un segundo repertorio de disfraces, religioso, acompañado de sermones; la explicación que él mismo daba de su elocuencia, que era una posesión por los libros leídos y no una erudición; el apelativo con que se dirigía a su público, fijado literalmente; la moraleja como propósito declarado; y el cierre, una frase suya que reivindica el apodo y lo extiende a la ciudad, al país y al mundo.",
    limitation:
      "No es un registro y no puede sostener ningún hecho: divulgación infantil sin firma, sin fecha de publicación y sin bibliografía, cuya procedencia declarada es «Asdrúbal López Orozco», es decir, el libro de 2008 del que no hay ejemplar consultable. Ni el alcalde Bruno Arias ni la familia aparecen en las obras que reconstruyen la Bogotá decimonónica gobierno por gobierno. Mientras no aparezca un registro anterior, la ficha queda bloqueada en el sentido del spec. Su año se consigna por la aparición de la sección.",
  }),
  rodriguezBogota2020: source({
    title: "Bogotá etílica: chicha, cerveza, aguardiente y otras",
    author: "Luis Enrique Rodríguez, Grupo de Investigaciones del Archivo de Bogotá",
    year: 2020,
    type: "artículo de investigación de un archivo público, con fuentes estadísticas municipales",
    url: "https://archivobogota.secretariageneral.gov.co/noticias/bogota-etilica-chicha-cerveza-aguardiente-y-otras",
    summary:
      "Documenta el detalle que en la ficha parece color local y es en realidad el punto más político del relato: la pausa de chicha. Reconstruye la campaña contra el consumo de chicha en Bogotá desde finales del siglo XIX y los recursos con que se hizo —detención policial de consumidores, cierre temporal de las chicherías, destrucción del producto decomisado— y describe la operación simbólica que la acompañaba: campañas de estigmatización que representaban a los bebedores como animales, señaladamente como burros, para desacreditarlos y deshumanizarlos. Es exactamente la misma maquinaria que produce la palabra «loco» aplicada a un orador de calle: el consumidor de chicha y el hombre que habla en la esquina son estigmatizados por el mismo aparato y en las mismas décadas. Y añade el desenlace largo: la chicha no desapareció, se reconvirtió en tradición cultural rural y urbana.",
    limitation:
      "No menciona al personaje ni a ningún orador de calle: su objeto son las bebidas, su consumo y su regulación. No cubre con detalle la reglamentación del Concejo de los años veinte ni la prohibición de 1948-1949, y el propio autor reconoce la ausencia de cifras oficiales de producción de chicha para el periodo que documenta con anuarios estadísticos. Es contexto, no registro.",
  }),
  gomezvalor2019: source({
    title: "El valor filosófico de la anaideia en Diógenes de Sinope",
    author: "Víctor Hugo Vásquez Gómez",
    year: 2019,
    type: "artículo arbitrado de filosofía antigua (Praxis Filosófica, n.º 49, pp. 107-128, Universidad del Valle)",
    url: "https://www.redalyc.org/journal/2090/209061135006/html/",
    summary:
      "Sostiene el primer paralelo y lo precisa mejor de lo que la comparación sugiere. Leyendo el libro VI de Diógenes Laercio, muestra que la desvergüenza del cínico no es un rasgo de carácter sino un método: una transgresión deliberada del nómos que saca al espacio público lo que la norma relega a lo privado, y que funciona como condición de la parresía, la libertad de palabra. Subraya que los cínicos practicaban la prédica crítica en teatros y lugares públicos precisamente para alcanzar a la gente común y no sólo a las élites filosóficas, y que la crítica se ejerce desde una posición de inferioridad respecto del poder establecido. Ese es el dispositivo del caso bogotano: tomar el espacio donde la gente ya está, hablar sin permiso y hacerlo desde un lugar que no tiene nada que perder.",
    limitation:
      "Es un estudio de filosofía antigua y no menciona Colombia, Bogotá ni ninguna figura moderna: el paralelo lo establece esta ficha. Y matiza el punto que la comparación da por hecho, porque no habla de impunidad sino de riesgo asumido: para el cínico la franqueza es valiente porque cuesta, no porque salga gratis. La diferencia con el orador bogotano —que quedaba impune por la fama de loco— no está documentada por esta fuente.",
  }),
  ibanezCronicas19512: source({
    title: "Crónicas de Bogotá, tomo I",
    author: "Pedro María Ibáñez",
    year: 1951,
    type: "historia urbana erudita (1.ª ed. 1913-1923; ed. consultada A B C, 1951)",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2400/",
    summary:
      "Es el registro que fija el objeto, y la p. 50 lo dice todo. Atribuye la fuente a un acto de gobierno del oidor Alonso Pérez de Salazar, «quien quitó el rollo o picota, de que tanto uso había hecho, del centro de la plaza, y colocó allí una fuente pública de piedra, ornamentada con escudos de armas de España, Santafé y su blasón, y coronada con una estatua de San Juan Bautista». La misma página da la figura rota —«una tosca escultura, cuyo brazo izquierdo está roto»— y el bautizo popular: «fue conocida en Santafé con el nombre de mono de la pila». Enumera los cuatro blasones por su orientación: Pérez de Salazar al sur, que era el frente, la granada del Nuevo Reino al oriente, España al norte y Santafé al occidente. Y cierra el paradero: «hoy se conservan las ornamentaciones y la estatua en el Museo Nacional». Con esto se caen de la ficha heredada la fecha de 1775 y el Museo Colonial.",
    limitation:
      "Es historia de la ciudad, no recolección de leyendas: Ibáñez da el edificio, el escudo y el acto administrativo, y no recoge un solo dicho, una queja ni una escena de las que hacen del objeto un relato. No fecha la instalación de la fuente —se deduce del periodo del oidor, hacia 1579-1580— ni cita el libro capitular que la ordenaría. Escribe entre 1913 y 1923, casi tres siglos y medio después, y la paginación de esta edición de 1951 no coincide con la que el propio tomo II remite. Certificado TLS incompleto en el servidor.",
  }),
  bogotaMemorias2011: source({
    title: "Memorias del agua en Bogotá: antología",
    author: "Talleres de Crónicas del Agua; Alcaldía Mayor de Bogotá",
    year: 2011,
    type: "memoria oral compilada en talleres comunitarios",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2155/",
    summary:
      "Es el único testimonio localizado de la función social de la figura, que es lo que la convierte en relato y no en pieza de museo. Su crónica introductoria registra al Mono de la Pila como «depositario de quejas y reclamos durante años» y sitúa el origen de la fuente «cuatro siglos atrás», cifra que concuerda con el oidor del siglo XVI y desmiente la fecha de 1775 que arrastraba la ficha. La antología incluye un capítulo titulado «La pila» dentro de un índice que va de «El agua en la historia bogotana» a «Batallas por la cuenca del Tunjuelo», y por tanto documenta la pila como pieza del abastecimiento de la ciudad y no como monumento.",
    limitation:
      "Es memoria comunitaria de taller, sin aparato crítico, sin narrador nombrado y sin fecha de recolección: dice que la figura recibía quejas, y no dice de quién, desde cuándo ni cómo lo sabe. Es además material de 2011, tardío, y la propia crónica reconoce que la historia quedó fuera del cuerpo de la antología. No sostiene la escena de las madres que mandaban a los niños a quejarse ante el Mono, que es posterior y de divulgación.",
  }),
  castroVaya2014: source({
    title: "¡Vaya a quejarse al Mono de la pila! Un relato sobre la primera fuente pública de agua en Bogotá",
    author: "Rosa Eliana del Pilar Ortiz Castro",
    year: 2014,
    type: "artículo de boletín universitario sobre patrimonio (OPCA n.º 8, Universidad de los Andes)",
    url: "https://cienciassociales.uniandes.edu.co/opca/articulo/vaya-a-quejarse-al-mono-de-la-pila-un-relato-sobre-la-primera-fuente-publica-de-agua-en-bogota/",
    summary:
      "Es el texto que sostiene, con nombre y año, todas las afirmaciones que la ficha manda a «versiones» y no puede dar por ciertas. Aquí está el origen de la fecha de 1775: sostiene que una taza pequeña de sesenta centímetros, de 1538, fue reemplazada ese año por una estructura mayor y ornamentada que recibió el apodo. Aquí está también la cadena de traslados que las crónicas de época no traen completa —1846 a la plazuela de San Carlos, 1890 al Museo Nacional, 1922 a la sede del edificio Pedro A. López y 1942 al patio principal del Museo de Arte Colonial, recién inaugurado— y la réplica que la Sociedad de Mejoras y Ornato gestionó en 1960 en el costado norte de la iglesia de San Diego. Y aquí está la explicación del dicho por las madres que mandaban a los hijos a cargar agua. Es decir: es la fuente de la versión hoy dominante, y por eso hay que citarla aunque su cronología no coincida con la del siglo XVI que dan Ibáñez y De la Rosa.",
    limitation:
      "Es un boletín de observatorio universitario, no un artículo arbitrado, y no documenta con archivo ninguna de sus fechas: se apoya en informes del IDPC de 2007-2008 y en dos trabajos de divulgación, no en libros capitulares ni en actas de traslado. Su 1775 contradice directamente la atribución de la fuente al oidor Alonso Pérez de Salazar en los años 1580, y no discute esa contradicción. El artículo cambió de dirección web: la URL con que se citaba antes devuelve 404 y ésta es su ubicación actual.",
  }),
  autorpicota2013: source({
    title: "De picota pública a fuente de agua",
    author: "Alcaldía Mayor de Bogotá (sin firma de autor)",
    year: 2013,
    type: "nota de divulgación histórica en el portal distrital",
    url: "https://bogota.gov.co/historico-alcaldia/de-picota-publica-fuente-de-agua",
    summary:
      "Es la pieza que muestra cómo la administración distrital cuenta hoy el episodio, y coincide con las crónicas de época en el punto que más importa: que la fuente ocupa el sitio de la picota por orden del oidor Alonso Pérez de Salazar, y subraya la paradoja de que fuera él, que tanto uso había hecho del rollo, quien lo mandara quitar. Fecha en 1583 la petición vecinal de agua, sitúa el traslado de 1846 al abrirse paso la estatua de Bolívar y nombra la plazuela de San Carlos —hoy plazoleta Rufino José Cuervo—, que es la misma estación intermedia que De la Rosa documenta en la p. 318. Y da la lectura del dicho que la ficha recoge sin suscribir: el Mono como emblema de la inutilidad de las quejas ante los funcionarios del Nuevo Reino.",
    limitation:
      "Nota institucional sin firma de autor y sin una sola referencia bibliográfica: narra sin decir de dónde saca nada. Cierra el paradero en el Museo de Arte Colonial «donde aún permanece», afirmación que ninguna de las tres obras de época sostiene y para la que no aporta acta ni número de inventario. Está en el archivo histórico del portal, de modo que ni siquiera es la versión vigente del Distrito.",
  }),
  culturaMono2020: source({
    title: "El Mono de la Pila (Bogotanitos · Cuenta la leyenda)",
    author: "Secretaría de Cultura, Recreación y Deporte de Bogotá",
    year: 2020,
    type: "ficha de divulgación infantil del Distrito",
    url: "https://www.culturarecreacionydeporte.gov.co/es/bogotanitos/cuenta-la-leyenda/el-mono-de-la-pila",
    summary:
      "Sirve para una sola cosa, y es exactamente la que la ficha necesita: fija qué versión difunde hoy el Distrito entre los niños de la ciudad. Cuenta la fuente como atajo que evitaba el viaje hasta los ríos San Agustín y San Francisco, data su construcción en 1583, y desarrolla la escena que ninguna obra de época trae —los hijos que se quejan de cargar agua desde la Plaza Mayor y las madres que responden «vaya a quejarse al Mono de la Pila»—, con lo que permite atribuir esa escena a la divulgación reciente y no al registro. A diferencia de las demás piezas distritales, deja el paradero en el Museo Nacional desde 1922, sin pasar por el Museo Colonial: el propio Distrito no se pone de acuerdo consigo mismo.",
    limitation:
      "Es divulgación infantil sin autor, sin fecha visible de publicación y sin una sola referencia: presenta todo con «dicen que» y «cuentan que». No puede sostener ningún hecho y no va como fuente clave; vale como testimonio de la versión que hoy circula desde el Estado. Su año se consigna por la fecha de aparición de la sección, no por la de la ficha.",
  }),
  rivasplataVarillasagua2013: source({
    title: "El agua de manantial a la fuente de la Plaza Mayor de la Ciudad de los Reyes: sanidad y tecnología en el Virreinato del Perú en el siglo XVI",
    author: "Paula E. Rivasplata-Varillas",
    year: 2013,
    type: "artículo arbitrado de historia colonial (Agua y Territorio n.º 2, Universidad de Jaén)",
    url: "https://dialnet.unirioja.es/descarga/articulo/5181995.pdf",
    summary:
      "Es el paralelo que explica por qué una pila en la plaza no es un adorno. Reconstruye el sistema que Lima levantó en el mismo siglo y con la misma lógica que Santafé: la captación en un manantial alejado, un acueducto troncal, los caños derivados y «una pila en la Plaza Mayor» como punto final del reparto, todo financiado con sisas, es decir, con impuestos, y todo inaugurado por intervención directa del virrey Toledo en 1578. Muestra que la fuente central era una obra de salubridad pública nacida del agua contaminada del río al pie de la ciudad —el mismo problema que en Bogotá empujaba a la gente hasta el San Francisco y el San Agustín—, y que la escasez se administraba con reparto tasado, que es lo que en Santafé mide De la Rosa cuando cuenta las ocho pajas de agua. Y documenta el desvío del caudal público hacia casas de particulares: la pila como objeto político antes que como monumento.",
    limitation:
      "Es de Lima y del siglo XVI: no menciona Bogotá ni el Mono de la Pila, y el paralelo es de institución y de técnica, no de filiación. Se ocupa del sistema hidráulico y no de la escultura ni del apodo, de modo que no sostiene nada del relato, sólo su marco. La fuente limeña que la ficha nombra —la pila de bronce de 1651 sobre diseño de Pedro de Noguera— es posterior al periodo que este artículo estudia y no aparece en él.",
  }),
  aBstatue2023: source({
    title: "Le statue parlanti: gli «eroi» che divennero la voce del popolo",
    author: "Roma Capitale (firmado «A.B.»)",
    year: 2023,
    type: "nota institucional del ayuntamiento de Roma sobre patrimonio urbano",
    url: "https://www.comune.roma.it/web/it/notizia.page?contentId=NWS1081637",
    summary:
      "Documenta el antecedente romano del que la ficha se sirve. Sitúa la estatua de Pasquino desde 1501 junto a la Piazza Navona, en la esquina entre la via di San Pantaleo y la via di Pasquino, e identifica el mármol como un fragmento helenístico, probablemente Menelao sosteniendo el cuerpo de Patroclo: una escultura antigua y mutilada, igual que la figura santafereña del brazo roto. Y establece lo que importa: que de esa piedra «deriva il termine pasquinate», los escritos anónimos que los romanos le pegaban para satirizar al poder, con el ejemplo célebre contra Urbano VIII —«quod non fecerunt barbari, fecerunt Barberini»—, y que Pasquino no estaba solo, sino en compañía de otras estatuas parlantes de la ciudad. La función es la que empareja los dos casos: una escultura rota en el sitio de más paso convertida en destinatario de lo que no tiene despacho donde radicarse.",
    limitation:
      "Es una nota divulgativa de ayuntamiento, firmada con iniciales y sin bibliografía, sobre un tema que tiene literatura erudita abundante que aquí no se cita. Reconoce que el origen del nombre «Pasquino» no se conoce y ofrece tres conjeturas. Y no hay ninguna relación documentada entre Pasquino y el Mono de la Pila: el paralelo es de función y fue establecido por esta ficha, no por una fuente.",
  }),
  salazarConflictos2019: source({
    title: "Conflictos eclesiásticos en torno a la administración del cerro de Monserrate, Nuevo Reino de Granada, siglo XVII",
    author: "Carlos Arnulfo Rojas Salazar",
    year: 2019,
    type: "artículo arbitrado de historia colonial con fuentes de archivo (Boletín Americanista n.º 79, Universitat de Barcelona, pp. 29-46)",
    url: "https://revistes.ub.edu/index.php/BoletinAmericanista/article/download/21445/31119/71464",
    summary:
      "Es lo único que documenta con archivo el hecho central de la ficha: cómo y cuándo apareció la talla, y por qué la montaña se llama de una virgen y se sube por un Cristo. Trabajando sobre el Archivo General de la Nación, el Archivo Histórico Javeriano y el de la Provincia de la Candelaria, establece que el padre Bernardino de Rojas, siendo administrador de la ermita, encargó al escultor santafereño Pedro de Lugo Albarracín un Cristo y un Señor Caído, y que pagó por las dos tallas 105 patacones, «tal como consta en el certificado que se expidió el 15 de febrero de 1656». Añade lo que ninguna divulgación dice: que al principio las imágenes ocuparon un lugar secundario de la ermita, y que la del Señor Caído sólo con el tiempo desplazó del patronazgo a la Virgen de Montserrat —en 1693 aparece nombrada por primera vez la ermita como del Señor, y todavía en 1858 se la vuelve a llamar Santa María de la Cruz—. Explica el desplazamiento por la competencia de la iglesia jesuita de la ciudad, que desde 1657 promovía la misma advocación mariana con acceso mucho más fácil. Y describe la técnica del tallador —cabellos artificiales, ojos de pasta vítrea, sangre que mana—, que es el sustrato material de la creencia del cabello que crece. Registra también la hipótesis, tomada de la historiografía previa, de que las ermitas de Santafé se levantaron sobre antiguos santuarios indígenas.",
    limitation:
      "Su objeto es la administración eclesiástica del cerro, no la creencia: no documenta ni una sola vez el peso de la imagen, el cabello que crece, los novios que no se casan ni el volcán, que son las cuatro cosas que la ficha cuenta. La explicación del cambio de patronazgo la presenta el propio autor como hipótesis, no como conclusión. Y se detiene en el siglo XVII: nada dice de la peregrinación moderna ni del santuario que hoy se visita.",
  }),
  culturalFicha2019: source({
    title: "Ficha de inventario y valoración de bienes culturales inmuebles: Santuario de Monserrate (código 101405000041)",
    author: "Instituto Distrital de Patrimonio Cultural, PEMP Patrimonio Inmueble",
    year: 2019,
    type: "ficha oficial de inventario patrimonial, con reseña histórica y valoración",
    url: "https://sisbic.idpc.gov.co/Fichas_CH/FV_101405000041.pdf",
    summary:
      "Es el documento que impide contar el santuario como una construcción colonial, porque dice con todas las letras que del edificio antiguo no queda nada. Su reseña histórica traza la cadena entera: en 1650 el lugar lo ocupaba la ermita dedicada a la Virgen de Montserrat, patrona de Cataluña, levantada por la devoción de Pedro Solís y Valenzuela; un año después llegó el presbítero Bernardino de Rojas, que inició el convento y en 1656 encargó la talla del Cristo Caído al imaginero santafereño Pedro Lugo y Albarracín; el 3 de mayo de 1915 se autorizó al padre Gregorio Nacianceno sustituir la ermita por una iglesia mayor; esa obra colapsó en 1917 por un terremoto; Arturo Jaramillo Concha terminó otra en 1925; y entre 1949 y 1955 monseñor Carlos Vargas Umaña la reformó del todo hasta dejar la que hoy se ve, obra de los arquitectos José María González y Vicente Nasi. En su apartado de valor histórico lo declara sin rodeos: «de la ermita original, como lo narra su reseña histórica, no se conserva nada». Y su valoración simbólica reconoce la función de intercesión atribuida a la escultura sin afirmar ni un solo prodigio.",
    limitation:
      "Es una ficha de inventario: describe el inmueble, no la creencia, y no recoge ninguno de los relatos que la ficha trata. Su cronología se apoya en el libro «Iglesias coloniales, conventos y ermitas Santa Fe» de la Arquidiócesis de Bogotá (2013) y no en archivo propio, y su fecha de 1650 para la ermita y su atribución a Pedro Solís y Valenzuela contradicen a Ibáñez, que fecha el permiso en 1620 y lo da a don Pedro de Valenzuela. La ficha no advierte la discrepancia.",
  }),
  culturaLeyenda2020: source({
    title: "Leyenda del Santuario de Monserrate (Bogotanitos · Cuenta la leyenda)",
    author: "Secretaría de Cultura, Recreación y Deporte de Bogotá",
    year: 2020,
    type: "ficha de divulgación infantil del Distrito",
    url: "https://culturarecreacionydeporte.gov.co/es/bogotanitos/cuenta-la-leyenda/leyenda-del-santuario-de-monserrate",
    summary:
      "Es el único texto localizado que reúne en un solo lugar todas las creencias que la ficha trata, y por eso hay que citarlo aunque no sea un registro: el cabello que le crece a la imagen, el peso que aumenta cuando intentan bajarla, las parejas de novios que después no se casan, los espíritus chibchas y muiscas que habitan los cerros orientales, el punto por donde sale el sol marcando el camino de El Dorado y el volcán dormido bajo el santuario que causará terremotos. Enumera además las promesas de los peregrinos como formas de esfuerzo del cuerpo a cambio de sanación —subir de rodillas, subir con los ojos vendados, subir temprano el domingo— y cierra con el equilibrista: Harry Warner, que en 1895 tendió una cuerda entre Guadalupe y Monserrate y atribuyó su hazaña a un escapulario del Señor Caído que lo sostenía «con hilos invisibles». Fija, en suma, la versión que el Estado difunde hoy.",
    limitation:
      "No es un registro de primer escalón y no puede sostener ningún hecho: es divulgación infantil sin firma, sin fecha de publicación y sin una sola referencia bibliográfica, y presenta las creencias como habladurías sin decir quién las cuenta ni desde cuándo. Su año se consigna por la aparición de la sección. Mientras la creencia del peso y del cabello no tenga registro propio, esta ficha queda declarada bloqueada en el sentido del spec: el texto existe, el testimonio no.",
  }),
  archivoHarry2013: source({
    title: "Harry Warner, el equilibrista que «caminó» sobre Bogotá",
    author: "El Tiempo (archivo)",
    year: 2013,
    type: "reportaje de prensa sobre fuentes hemerográficas de 1895",
    url: "https://www.eltiempo.com/archivo/documento/CMS-12305453",
    summary:
      "Saca al equilibrista del terreno de la leyenda y lo devuelve al de la crónica fechada. Reconstruye la travesía del 20 de diciembre de 1895 sobre la cuerda tendida entre Monserrate y Guadalupe —más de ochocientos noventa metros, con banda de música tocando mientras el funámbulo avanzaba con los ojos vendados— citando la nota que El Correo Nacional publicó al día siguiente: «en medio de ese mundo de abismos […] se detiene, se sienta […] Warner continúa, se arrodilla y de pronto se levanta y cruza la cuerda caminando hacia atrás». Cita también a El Sol del 29 de noviembre de 1895, que lo presentaba como alguien que llevaba más de veinte años en el oficio de romperse el cuello de todas las maneras imaginables, y da su origen —Toronto, 3 de enero de 1860— y su desaparición posterior sin rastro. Permite separar el hecho, que está documentado en la prensa de la semana, de la explicación devota que la versión distrital le añade.",
    limitation:
      "Es una nota de prensa de 2013 que reelabora las crónicas de 1895 sin reproducirlas enteras ni dar la signatura de la hemeroteca, de modo que el registro de época sigue llegando de segunda mano. No menciona el escapulario ni ninguna atribución religiosa de la hazaña, que es justo lo que la versión distrital añade: el reportaje documenta la travesía, no el milagro. Y difiere de otras piezas en la nacionalidad del funámbulo.",
  }),
  montserratMare2020: source({
    title: "La Mare de Déu de Montserrat (santuario de Santa Maria de Montserrat)",
    author: "Abadia de Montserrat",
    year: 2020,
    type: "página institucional de la abadía benedictina",
    url: "https://abadiamontserrat.cat/es/santuari/la-mare-de-deu-de-montserrat",
    summary:
      "Documenta el original del que el cerro bogotano tomó el nombre y sostiene el paralelo entero. La abadía describe la Moreneta como una talla románica de finales del siglo XII, en madera de álamo, de unos noventa y cinco centímetros, que representa a la Virgen con el Niño sentado en su regazo, y explica que el color oscuro del rostro y las manos procede de la transformación del barniz con el tiempo y no del humo de las velas. Da también la cadena de la devoción desde el hallazgo de la imagen en la montaña y la declaración de la Virgen como patrona de Cataluña por León XIII en 1881, y describe el santuario como destino de peregrinación por caminos de subida a pie. Es exactamente el trasplante que Santafé hizo: advocación, altura, camino y promesa cumplida con las piernas; y hace visible lo único que cambió, que allá la titular sigue siendo la virgen.",
    limitation:
      "Es la página de la propia abadía, escrita en clave devocional y sin aparato crítico ni autor, y no menciona Bogotá ni el cerro americano en ninguna parte. El paralelo lo establece esta ficha a partir del nombre y del trasplante documentado por el artículo de 2019, no la fuente. Las fechas del hallazgo de la imagen que la tradición da no están sostenidas aquí con documento.",
  }),
  indianosSenor2021: source({
    title: "Señor de los Milagros (glosario de Estudios Indianos)",
    author: "Centro de Estudios Indianos, Universidad del Pacífico",
    year: 2021,
    type: "entrada de glosario académico sobre religiosidad virreinal",
    url: "https://estudiosindianos.up.edu.pe/en/indias-glossary/senor-de-los-milagros/",
    summary:
      "Sostiene el segundo paralelo, el que explica el volcán. Da el origen de la devoción limeña: un Cristo crucificado pintado hacia 1651 por un esclavizado de casta angoleña sobre un muro de adobe del barrio de Pachacamilla, y la razón por la que la ciudad lo adoptó: el muro quedó en pie cuando el terremoto de 1655 derribó cuanto había alrededor, y desde entonces los milagros que se le atribuyen son sísmicos. Documenta que en el terremoto de 1746, el más destructivo de la historia de Lima, la réplica salió en procesión, y que de ahí viene la salida anual de octubre. Es la misma lógica que en el cerro bogotano —una capital sobre suelo que se mueve pone en el punto más visible una figura encargada de sostenerlo—, con la diferencia que la ficha señala: allá la creencia se formula como protección ya probada por un sismo concreto, y aquí como amenaza dormida.",
    limitation:
      "Es una entrada de glosario, breve y sin aparato de notas, y no menciona Bogotá ni Monserrate: el paralelo lo establece esta ficha. Trata una imagen pintada sobre muro y no una talla, y una devoción de origen afrodescendiente y urbano frente a una de origen criollo y de cumbre, de modo que el parentesco es de función frente al terremoto y no de forma ni de historia.",
  }),
  iberoCronica1924: source({
    title: "Crónica del Magazín dominical de El Espectador del domingo 20 de julio de 1924 (reeditada el 26 de julio de 2024)",
    author: "Mario Ibero",
    year: 1924,
    type: "crónica de prensa con entrevista a la protagonista, reeditada por el propio periódico",
    url: "https://www.elespectador.com/el-magazin-cultural/cronica-sobre-margarita-villaquira-en-el-asilo-de-locas/",
    summary:
      "Es el único registro de época de esta ficha y el mejor testimonio de todo el ciclo bogotano, porque trae narrador, lugar, fecha y la voz de la protagonista en primera persona. Sus dos mil ciento setenta palabras cuentan que Margarita desapareció de las calles quince días antes, después de que unas beatas la sacaran de San Ignacio y un policía se la llevara por orden del alcalde mayor; que el cronista fue a buscarla al asilo de locas de El Aserrío y le negaron la entrada por ser hombre; que no estaba allí, sino en el asilo de mujeres desamparadas, donde el fotógrafo del periódico le indicó la dirección; que dentro le habían quitado el rojo y le habían puesto un hábito gris con capucha, y que de la ropa roja sólo le quedaba la cinta de la cabeza. Guarda en la manga un pétalo de rosa roja al que llama su bandera y al que le reza de noche. Preguntada por su nombre responde «yo soy María Margarita Josefa Mogollón Leiva del Carmen y Santander, reina de Colombia, pa servirle». Y cuando el cronista le ofrece la libertad a cambio de gritar por el partido contrario, se niega, le devuelve la moneda y se retira indignada, aunque siga pidiendo salir. La crónica se cierra con una pregunta que el propio cronista deja abierta, sin diagnosticarla.",
    limitation:
      "Es la pieza que desmiente el título de la ficha: en sus dos mil ciento setenta palabras el apellido «Villaquirá» no aparece ni una sola vez —sólo está en el titular que el periódico puso a la reedición de 2024—, y el único nombre que consta es el que ella misma da, que es parte de su delirio y no un dato civil. «Mario Ibero» es un seudónimo y la foto se acredita al periódico, de modo que no hay autor identificable. El cronista escribe con intención política declarada, mide a Margarita contra los políticos en campaña y no disimula de qué lado está. Y es una sola visita: no hay seguimiento ni verificación de nada de lo que ella cuenta.",
  }),
  culturaLoca2020: source({
    title: "La Loca Margarita (Bogotanitos · Cuenta la leyenda)",
    author: "Secretaría de Cultura, Recreación y Deporte de Bogotá, acreditando en cabecera «versión tomada de Asdrúbal López Orozco»",
    year: 2020,
    type: "ficha de divulgación infantil del Distrito, con crédito de procedencia",
    url: "https://www.culturarecreacionydeporte.gov.co/es/bogotanitos/cuenta-la-leyenda/la-loca-margarita",
    summary:
      "Es la fuente de la biografía que todo el mundo repite y la única que dice de dónde viene. Aquí está la maestra de Fusagasugá, el hijo asesinado por conservadores, el periodo de circulación callejera, el retrato físico detallado y la atribución de la rumba criolla a su figura con el nombre del compositor. Y aquí está, en cabecera, el crédito que convierte esas afirmaciones en una cadena y no en una convergencia de fuentes: «versión tomada de Asdrúbal López Orozco», es decir, del libro de 2008 del que no hay ejemplar consultable. Sirve, por tanto, para dos cosas: fijar la versión que el Estado difunde hoy, y demostrar que lo que parecían dos testimonios independientes —el del Distrito y el del recopilador— son una sola mano contada dos veces.",
    limitation:
      "No es un registro y no puede sostener ningún hecho biográfico: es divulgación infantil sin autor, sin fecha y sin bibliografía, que acredita como fuente un libro sin ejemplar abierto. Ninguno de sus datos —la maestra, el hijo, las fechas— aparece en el único registro de época localizado. Su año se consigna por la aparición de la sección.",
  }),
  collectionLoca1940: source({
    title: "La Loca Margarita (Orquesta Garavito, con Gabriel Viña G. y María del C. Garavito W.), disco Victor 83275-B",
    author: "Milcíades Garavito (compositor); Strachwitz Frontera Collection, UCLA Chicano Studies Research Center, Arhoolie Foundation y UCLA Digital Library",
    year: 1940,
    type: "grabación sonora de 78 rpm catalogada y digitalizada por un archivo universitario",
    url: "https://frontera.library.ucla.edu/es/recordings/la-loca-margarita-0",
    summary:
      "Es el objeto material que prueba que el personaje pasó de la calle a la industria mientras aún vivía. El archivo cataloga el disco con su sello y su número —Victor 83275-B—, su formato de 78 revoluciones, su género, rumba criolla, su compositor, Milcíades Garavito, y sus voces, y da el audio completo en línea. Los temas con que la colección indexa la pieza son «queja» y «mujer», que es una descripción exacta de lo que la canción hace con ella. Sirve para lo que ninguna fuente escrita da: que la figura circulaba fuera de Bogotá, prensada y vendida, y que el apodo con que hoy la nombramos es el título comercial de una rumba, no el nombre de una persona.",
    limitation:
      "Es una ficha de catálogo sonoro: da sello, número y género, y no la fecha exacta de grabación —el año se consigna por el periodo del sello y de la orquesta— ni el número de matriz, que el propio archivo declara desconocido. No documenta nada de la biografía de la mujer, y la canción no es un testimonio sobre ella sino una pieza de baile. El vínculo entre la rumba y la persona lo establece la divulgación posterior, no la etiqueta del disco.",
  }),
  civiltaMadres2012: source({
    title: "Madres de Plaza de Mayo",
    author: "Storicamente (Dipartimento di Storia Culture Civiltà, Università di Bologna); entrada de Califano",
    year: 2012,
    type: "ficha de revista universitaria con revisión por pares sobre historia argentina reciente",
    url: "https://storicamente.org/califano_link11",
    summary:
      "Documenta el segundo paralelo con la palabra exacta. Reconstruye la formación del grupo —las mujeres que se buscaban en los pasillos del Ministerio del Interior y en la capilla Stella Maris, la propuesta de Azucena Villaflor de ir a la plaza, las catorce madres del 30 de abril de 1977 con una carta para Videla, el cambio del sábado al viernes y luego al jueves— y consigna el epíteto con el que el régimen intentó desactivarlas: «divennero l'incubo del regime, che le chiamò las locas de Plaza de Mayo». Es la misma operación que en la calle bogotana: una mujer o un grupo de mujeres, una consigna repetida a diario en un espacio público, y un mote que convierte la insistencia política en síntoma. Y registra el desenlace que marca la diferencia: allá el grupo sobrevivió al apodo y lo hizo suyo.",
    limitation:
      "Es una ficha breve de contexto dentro de un aparato mayor, escrita en italiano y sin notas propias, y su objeto es Argentina: no menciona Colombia ni a Margarita, y el paralelo lo establece esta ficha. Es además medio siglo posterior y de otra escala —una dictadura y una desaparición forzada masiva frente a una orden de alcaldía contra una sola mujer—, de modo que la comparación vale por el mecanismo del mote y no por los hechos.",
  }),
  bogotaQuien2021: source({
    title: "¿Quién fue la «Loca Margarita»?",
    author: "Alcaldía Mayor de Bogotá, localidad de Santa Fe",
    year: 2021,
    type: "nota de divulgación histórica en el portal distrital",
    url: "https://bogota.gov.co/mi-ciudad/santa-fe/quien-fue-la-loca-margarita",
    summary:
      "Reúne la biografía consolidada que circula hoy y permite fecharla y atribuirla sin suscribirla: Margarita Villaquirá Aya, nacida en Fusagasugá en 1860 y muerta en Bogotá en enero de 1942, a los ochenta y dos años, de neumonía; la Dirección Nacional Liberal, agradecida por su apoyo incondicional, le pagó los gastos del entierro, que se hizo en el Cementerio Central; y los periódicos cubrieron su muerte como si hubiera sido la de un dirigente nacional. Es también donde consta la clasificación que el ciclo bogotano hereda —Margarita como una de los cuatro «locos» que recorrieron la ciudad entre los años veinte y los cuarenta—, y por tanto la fuente de que esta ficha comparta cajón con las de los otros tres.",
    limitation:
      "Nota institucional sin firma de autor y sin una sola referencia: da fechas, apellidos y circunstancias del entierro sin decir de dónde salen, y ninguno de esos datos se ha podido cotejar contra partida, esquela o padrón. Es la vía por la que el apellido «Villaquirá Aya» se ha vuelto oficial pese a no aparecer en el único registro de época localizado. Y su afirmación de que los periódicos cubrieron la muerte no viene acompañada de ninguna cita hemerográfica.",
  }),
  brazlegende1912: source({
    title: "La légende de la mort chez les Bretons armoricains, avec des notes sur les croyances analogues chez les autres peuples celtiques",
    author: "Anatole Le Braz",
    year: 1912,
    type: "recolección folclórica con notas comparadas (edición aumentada de la obra de 1893)",
    url: "https://archive.org/details/lalgendedelamo00lebruoft",
    summary:
      "Sostiene el paralelo de la lavandera y lo hace con más precisión de la que la ficha necesita. En el tomo I, a partir de la p. 54, reúne las lavandières de nuit bretonas y, en sus notas comparadas, recoge la explicación de Le Men: son «des lavandières, qui pendant leur vie, ont, par négligence ou par avarice, gâté le linge ou les vêtements de pauvres gens», y lavan de noche una ropa misteriosa «en châtiment de leurs fautes». El castigo es exactamente el de Filomena: la falta de oficio se paga con el oficio, repetido sin término. Añade la variante peligrosa que marca la diferencia de escala —quien se acerca a ayudarlas tiene que torcer la ropa con ellas toda la noche, y quien las rechaza corre peligro— y extiende el motivo a las Hébridas y a Escocia, con lo que demuestra que no es una ocurrencia local sino una familia europea bien registrada.",
    limitation:
      "Es Bretaña de finales del siglo XIX y no tiene relación documentada alguna con Bogotá: el parentesco es de motivo y lo establece esta ficha, no una fuente. El ejemplar consultable en abierto es la edición aumentada con notas, no la primera de 1893 que suele citarse, y su paginación no coincide con la de aquélla. El texto llega por OCR de un escaneo antiguo, con erratas visibles en las palabras bretonas, y Le Braz traduce del bretón sin dejar el original.",
  }),
  investigacionCandelaria1994: source({
    title: "La Candelaria: el centro histórico de Santafé de Bogotá",
    author: "Alberto Saldarriaga Roa (investigación y textos); Fabio Zambrano P.; Corporación La Candelaria",
    year: 1994,
    type: "monografía urbana institucional",
    url: "https://idpc.gov.co/publicaciones/descargas/candelariacentro.pdf",
    summary:
      "Es el territorio del repertorio contado por quien administra el barrio. Trabaja la formación del tejido urbano, los edificios simbólicos, los espacios para la vida ciudadana, los espacios domésticos y «las gentes de La Candelaria», que es la escala exacta de los relatos: casas de patio, zaguanes y cuadras con nombre propio. Permite comprobar qué calles, qué tipologías de casa y qué usos existían donde la transcripción de 2008 sitúa cada aparición, y da el marco del despoblamiento —la moda que se va a San Victorino, La Merced, Teusaquillo, Chapinero— que explica por qué un barrio de casas viejas vacías se volvió el lugar de los fantasmas de la ciudad. Su bibliografía señala además una pieza que sigue sin localizarse en abierto: Julio Barriga Alarcón, «Leyendas e historias santafereñas», Tercer Mundo, 1981.",
    limitation:
      "Es un libro conmemorativo de la corporación que gestiona el centro histórico: su mirada es patrimonial y arquitectónica, y los fantasmas aparecen una sola vez, en la evocación literaria del prólogo de María Mercedes Carranza, no como objeto de estudio. No recoge ni un relato ni un informante. El PDF pesa cuarenta megabytes y su OCR arrastra erratas en nombres y cifras.",
  }),
  culturafantasmas2020: source({
    title: "Los fantasmas del sector de La Candelaria (Bogotanitos · Cuenta la leyenda)",
    author: "Secretaría de Cultura, Recreación y Deporte de Bogotá",
    year: 2020,
    type: "ficha de divulgación infantil del Distrito",
    url: "https://www.culturarecreacionydeporte.gov.co/es/bogotanitos/cuenta-la-leyenda/los-fantasmas-del-sector-de-la-candelaria",
    summary:
      "Vale por lo que deja ver, que es la versión que el Distrito difunde hoy y contra la cual esta ficha se corrige. Presenta el conjunto como un repertorio de apariciones sueltas y sin cláusula, que es justo la forma en que la Calle del Fantasma pierde su relato: donde la transcripción de 2008 tiene un pacto con plazo, piedra faltante y conteo, la divulgación deja un lugar donde se aparecen cosas. Permite fechar y atribuir esa simplificación, y medir la distancia entre lo que el Archivo de Bogotá publicó y lo que llega al público general de la ciudad.",
    limitation:
      "Es divulgación infantil sin autor, sin fecha de publicación visible y sin una sola referencia bibliográfica: no puede sostener ningún hecho y no va como fuente clave. Su año se consigna por la aparición de la sección, no por la de la ficha. Y es parte del mismo circuito de producción turística que el artículo de 2019 estudia, de modo que no es un testigo independiente del barrio.",
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

/**
 * Resuelve las fuentes de una ficha. Con una lista —la `sourceKeys` que la
 * ficha declara— devuelve esas obras en ese orden, y cada entrada puede ser una
 * clave suelta o `{ key, summary, limitation }` con lo que esa obra dice de
 * ESE relato. Con un slug cae en el reparto heredado, que se conserva tal cual
 * para las fichas que todavía no se han rehecho.
 */
export function pickBogotaMestizoMemorySources(slugOrEntries) {
  if (!Array.isArray(slugOrEntries)) return pickBogotaMestizoMemorySourcesHeredadas(slugOrEntries);
  return slugOrEntries.map((entrada) => {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = bogotaMestizoMemorySources[key];
    if (!selected) throw new Error(`Fuente desconocida: ${JSON.stringify(entrada)}.`);
    return {
      ...selected,
      ...(typeof entrada === "object" && entrada.summary ? { summary: entrada.summary } : {}),
      ...(typeof entrada === "object" && entrada.limitation ? { limitation: entrada.limitation } : {}),
    };
  });
}

// El reparto heredado, por slug. Sólo lo usan las fichas sin `sourceKeys`.
function pickBogotaMestizoMemorySourcesHeredadas(slug) {
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
