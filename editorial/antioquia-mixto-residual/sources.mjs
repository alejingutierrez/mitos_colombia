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

export const antioquiaMixtoResidualSources = {
  carrasquillaMarquesa: source({
    title: "La marquesa de Yolombó",
    author: "Tomás Carrasquilla; edición digital de la Biblioteca Nacional de Colombia",
    year: 1926,
    type: "fuente literaria primaria y testimonio temprano de circulación",
    url: "https://siise.bibliotecanacional.gov.co/BBCC/Documents/View/208?AspxAutoDetectCookieSupport=1",
    summary:
      "Describe al Patetarro como un gigantón con una sola pierna de carne, un tarro de guadua, líquidos que arruinan sementeras y miedo a calaveras de vaca.",
    limitation:
      "Es una novela que recrea creencias mineras y no una transcripción oral ni prueba de que sus personajes históricos compartieran cada detalle.",
  }),
  escobarMitos: source({
    title: "Mitos de Antioquia",
    author: "Arturo Escobar Uribe",
    year: 1950,
    type: "compilación folclórica regional",
    url: "https://books.google.com.co/books/about/Mitos_de_Antioquia.html?id=gLnjAAAAMAAJ",
    summary:
      "Incluye al Patetarro dentro del repertorio antioqueño y permite controlar su presencia impresa a mediados del siglo XX.",
    limitation:
      "La vista pública es fragmentaria y la perspectiva del compilador no identifica aquí un narrador ni una fecha de recolección para cada rasgo.",
  }),
  ocampoGrande: source({
    title: "Mitos y leyendas de Antioquia la grande",
    author: "Javier Ocampo López",
    year: 2001,
    type: "compilación folclórica regional",
    url: "https://books.google.com/books/about/Mitos_y_leyendas_de_Antioquia_la_grande.html?id=9DeSlEufFMEC",
    summary:
      "Organiza al Patetarro entre los mitos populares y al Mareco en el apartado de mitos infantiles de la página 125.",
    limitation:
      "La vista es parcial; documenta una forma impresa, no un origen único, una antigüedad demostrada ni aceptación uniforme en Antioquia.",
  }),
  espantosArchive: source({
    title: "Cuentos de espantos y otros seres fantásticos del folclor colombiano",
    author:
      "Casa Editorial El Tiempo y Universidad Autónoma de Colombia; edición de Julio Orozco Vargas",
    year: 2004,
    type: "antología editorial consultable con recreaciones narrativas",
    url: "https://archive.org/details/CuentosDeEspantosYOtrosSeresFantasticosDelFolclorColombiano..compressed",
    summary:
      "Dedica las páginas 43–44 al Patetarro y 47–48 al Mareco; conserva las historias de Ernesto y Manuel junto con fichas fantásticas.",
    limitation:
      "Los expedientes y testimonios están construidos como recreación literaria; no son declaraciones notariales, clínicas, escolares ni periodísticas verificadas.",
  }),
  openLibraryEspantos: source({
    title: "Registro de Cuentos de espantos y otros seres fantásticos",
    author: "Open Library e Internet Archive",
    year: 2004,
    type: "registro bibliográfico y tabla de contenido",
    url: "https://openlibrary.org/books/OL26208262M/Cuentos_de_Espantos_y_otros_seres_fant%C3%A1sticos_del_folclor_Colombiano",
    summary:
      "Controla editor, ISBN, año, extensión y ubicación de El Patetarro en 43–44 y El Mareco en 47–48.",
    limitation:
      "Acredita la edición y sus páginas, pero no ofrece una tradición oral independiente de la antología.",
  }),
  bogotaPatetarro: source({
    title: "El Patetarro",
    author: "Secretaría Distrital de Cultura, Recreación y Deporte de Bogotá",
    type: "ficha institucional de divulgación folclórica",
    url: "https://ant.culturarecreacionydeporte.gov.co/en/node/1246",
    summary:
      "Sitúa la leyenda en zonas mineras de Antioquia, Chocó y Cundinamarca; registra el tarro de guadua, las plagas, los presagios y la variante del gallinero.",
    limitation:
      "No identifica autor, informante, fecha de recolección ni bibliografía para cada versión y contiene redacción acumulativa.",
  }),
  unalTotem: source({
    title: "Propuesta de conservación del conjunto escultórico Tótem Mítico de la Selva",
    author: "Universidad Nacional de Colombia, sede Medellín",
    year: 2019,
    type: "informe académico de conservación y lectura iconográfica",
    url: "https://www.proyectopatrimonio.info/wp-content/uploads/2020/05/15-Informe-Totem-Mitico.pdf",
    summary:
      "Estudia la Patetarro representada por Pedro Nel Gómez y reproduce una variante femenina, fluvial y vengadora vinculada con violencia impune.",
    limitation:
      "La interpretación depende de Arango et al. 2006 y de la obra artística; no reemplaza una transcripción oral ni unifica variantes regionales.",
  }),
  colaRata: source({
    title: "Mitos y leyendas, la voz del patrimonio inmaterial de Colombia",
    author: "La Cola de Rata; entrevistas a Sandra María Turbay y Jaime Andrés Peralta",
    type: "reportaje cultural con especialistas académicos",
    url: "https://www.lacoladerata.co/cultura/mitos-y-leyendas-la-voz-del-patrimonio-inmaterial-de-colombia/",
    summary:
      "Interpreta al Patetarro en la frontera entre monte y parcela y explica la mezcla, flexibilidad y contexto rural de las leyendas andinas.",
    limitation:
      "Es interpretación contemporánea y no autoriza llamar guardián ecológico al personaje ni fijar una genealogía indígena concreta.",
  }),
  culturaMitos: source({
    title: "Explora los mitos y leyendas de Colombia",
    author: "Secretaría Distrital de Cultura, Recreación y Deporte de Bogotá",
    year: 2024,
    type: "divulgación institucional comparativa",
    url: "https://mail.culturarecreacionydeporte.gov.co/es/principal/noticias/mitos-y-leyendas-de-colombia",
    summary:
      "Resume a la Patasola como aparición unípede del monte y a la Madremonte como figura ligada a vegetación, lluvias y castigo contra quienes dañan la naturaleza.",
    limitation:
      "Es una síntesis reciente y no prueba parentesco, difusión ni identidad entre esas figuras y el Patetarro.",
  }),
  marecoOcampoQuote: source({
    title: "Literatura moralizante para niños encarrilables",
    author: "Profética y Serendipística; cita de Javier Ocampo López",
    year: 2015,
    type: "análisis literario con cita localizada de fuente impresa",
    url: "https://profeticayserendipistica.wordpress.com/2015/05/03/articulo-2/",
    summary:
      "Reproduce el pasaje de Ocampo 2001, página 125: diablillo infantil que roba dulces y se vuelve ventarrón contra niños desobedientes.",
    limitation:
      "Es una mediación web y no una imagen facsimilar de la página; se usa junto con el registro bibliográfico de Ocampo.",
  }),
  mosqueraCatalog: source({
    title: "Cuentos de espantos y otros seres fantásticos: registro MARC",
    author: "Biblioteca Pública Municipal San Juan Bosco de Mosquera",
    year: 2016,
    type: "catálogo bibliotecario institucional",
    url: "https://biblioteca.apps-mosquera.gov.co/cgi-bin/koha/opac-MARCdetail.pl?biblionumber=11108",
    summary:
      "Confirma autores, editor, ISBN, extensión y la presencia separada de El Patetarro y El Mareco en la antología.",
    limitation:
      "Prueba existencia bibliográfica y no valida como testimonios reales los marcos narrativos del volumen.",
  }),
  unabMareco: source({
    title: "Secuencias didácticas basadas en los siete niveles lingüísticos",
    author: "Karina Salazar Niño; Universidad Autónoma de Bucaramanga",
    year: 2018,
    type: "tesis de educación con análisis de lectura",
    url: "https://repository.unab.edu.co/bitstream/handle/20.500.12749/2560/2018_Tesis_Salazar_Ni%C3%B1o_Karina.pdf?isAllowed=y&sequence=1",
    summary:
      "Registra el uso escolar de Mareco y la discusión de estudiantes que lo clasifican como leyenda por su estructura narrativa.",
    limitation:
      "Su objetivo es pedagógico; no aporta otra recolección oral ni determina el origen geográfico o cronológico del relato.",
  }),
  rinconMareco: source({
    title: "Leyenda del Mareco",
    author: "Revista El Rincón Colombiano",
    year: 2023,
    type: "divulgación regional contemporánea",
    url: "https://elrinconcolombiano.com/leyenda-del-mareco/",
    summary:
      "Muestra la circulación reciente del Mareco rojo, semejante a una lagartija bípeda, asociado con rincones oscuros, dulces y ventarrones.",
    limitation:
      "No ofrece bibliografía y parece heredar rasgos de la recreación de 2004; no demuestra que todos pertenezcan al núcleo oral antiguo.",
  }),
  raeCoco: source({
    title: "Coco, acepción 9",
    author: "Real Academia Española y Asociación de Academias de la Lengua Española",
    year: 2024,
    type: "fuente lexicográfica comparativa",
    url: "https://dle.rae.es/coco",
    summary:
      "Define el coco como un ser imaginario usado para meter miedo a los niños, útil para comparar función sin igualar personajes.",
    limitation:
      "La definición no describe al Mareco, su viento, los dulces ni su localización antioqueña y no prueba un origen compartido.",
  }),
};

const sourceKeysBySlug = {
  "el-patetarro": [
    "carrasquillaMarquesa",
    "escobarMitos",
    "ocampoGrande",
    "bogotaPatetarro",
    "unalTotem",
    "espantosArchive",
    "colaRata",
    "culturaMitos",
  ],
  "el-mareco": [
    "ocampoGrande",
    "marecoOcampoQuote",
    "espantosArchive",
    "openLibraryEspantos",
    "mosqueraCatalog",
    "unabMareco",
    "rinconMareco",
    "raeCoco",
  ],
};

export function pickAntioquiaMixtoResidualSources(slug) {
  const keys = sourceKeysBySlug[slug];
  if (!keys) throw new Error(`${slug}: no tiene expediente de fuentes.`);
  return keys.map((key) => {
    const selected = antioquiaMixtoResidualSources[key];
    if (!selected) throw new Error(`${slug}: fuente desconocida ${key}.`);
    return selected;
  });
}
