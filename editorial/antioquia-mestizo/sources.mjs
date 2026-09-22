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

export const antioquiaMestizoSources = {
  escobarMitos: source({
    title: "Mitos de Antioquia",
    author: "Arturo Escobar Uribe",
    year: 1950,
    type: "compilación folclórica regional",
    url: "https://books.google.com.co/books/about/Mitos_de_Antioquia.html?id=gLnjAAAAMAAJ",
    summary:
      "Documenta las formas impresas del Perro Negro, Cabellona, Dama Verde, Rodillona, Ilusiones Malas y María la Larga, con lugares y rasgos diferenciados.",
    limitation:
      "La vista pública es fragmentaria y la mirada del compilador contiene vocabulario y generalizaciones propias de su época.",
  }),
  ocampoGrande: source({
    title: "Mitos y leyendas de Antioquia la grande",
    author: "Javier Ocampo López",
    year: 2001,
    type: "compilación folclórica regional",
    url: "https://books.google.com/books/about/Mitos_y_leyendas_de_Antioquia_la_grande.html?id=9DeSlEufFMEC",
    summary:
      "Confirma la inclusión editorial de los principales espantos de este frente y dedica un apartado a María Centeno.",
    limitation:
      "Compilar un motivo no verifica una aparición, una fecha de origen ni aceptación uniforme en toda Antioquia.",
  }),
  ocampoContents: source({
    title: "Contenido de Mitos y leyendas de Antioquia la grande",
    author: "Javier Ocampo López",
    year: 2001,
    type: "tabla de contenido reproducida",
    url: "https://expydoc.com/doc/6215050/mitos-y-leyendas-de-antioquia-la-grande-p%C3%A1g.-contenido",
    summary:
      "Permite verificar títulos y organización de Rodillona, Dama Verde, Cabellona, Perro Negro, Rescoldados y María Centeno dentro del volumen.",
    limitation:
      "Solo prueba presencia bibliográfica; no ofrece por sí misma el contenido completo de cada capítulo.",
  }),
  ocampoPopularScan: source({
    title: "Mitos populares de Colombia",
    author: "Javier Ocampo López",
    type: "reproducción digital mediada de compilación folclórica",
    url: "https://es.scribd.com/doc/85636566/Mitos-Populares-de-Colombia",
    summary:
      "Conserva descripciones consultables del Perro Negro, Cabellona, Dama Verde, Rodillona, Ilusiones y Rescoldaos.",
    limitation:
      "La reproducción tiene OCR defectuoso y no constituye una edición crítica ni una cadena independiente de Ocampo.",
  }),
  solorzanoCatalog: source({
    title: "Mitología y creencias populares de Colombia",
    author: "Luis Fernando Solórzano Sánchez",
    type: "catálogo bibliotecario con materias",
    url: "https://biblioteca.usco.edu.co/cgi-bin/koha/opac-ISBDdetail.pl?biblionumber=1666",
    summary:
      "Confirma la catalogación de Cabellona, Dama Verde, Ilusiones, María Centeno, María la Larga, Perro Negro, Rescoldados y Rodillona.",
    limitation:
      "El registro bibliográfico no permite reconstruir escenas ni demuestra independencia narrativa entre compilaciones.",
  }),
  rtvcDianaUribe: source({
    title: "Antioquia y el Eje Cafetero",
    author: "Diana Uribe y RTVCPlay",
    type: "programa de divulgación histórica y cultural",
    url: "https://cms.rtvcplay.co/series-al-oido/las-historias-de-diana-uribe/antioquia-eje-cafetero",
    summary:
      "Muestra recepción contemporánea de figuras regionales como la Dama Verde y María del Pardo dentro de una lectura cultural amplia.",
    limitation:
      "Es divulgación posterior y no reemplaza las fuentes narrativas ni la investigación histórica especializada.",
  }),
  ifmAntioquia: source({
    title: "Antioqueñidad III: Mitos y leyendas de Antioquia",
    author: "IFM Noticias",
    year: 2023,
    type: "divulgación regional contemporánea",
    url: "https://ifmnoticias.com/antioquia/antioquenidad-iii-mitos-y-leyendas-de-antioquia/",
    summary:
      "Resume la Rodillona y la Cabellona como figuras camineras regionales y permite observar su circulación digital actual.",
    limitation:
      "Depende de repertorios anteriores y no debe usarse como origen ni como testimonio oral independiente.",
  }),
  utpPaton: source({
    title: "La leyenda como estrategia para fortalecer la comprensión lectora",
    author: "Universidad Tecnológica de Pereira",
    type: "trabajo universitario con reproducción narrativa",
    url: "https://repositorio.utp.edu.co/server/api/core/bitstreams/5346100f-cb34-4a8f-825f-0f2170d591b5/content",
    summary:
      "Reproduce la versión pedagógica de El Patón: cultivos dañados, trampa fallida y un hombre cuyos pies enormes dificultan su marcha.",
    limitation:
      "Es una mediación educativa tardía y no identifica narrador, comunidad portadora ni fecha de recolección oral.",
  }),
  webcolegiosPaton: source({
    title: "Guía de lectura: El Patón",
    author: "WebColegios",
    type: "guía escolar de lectura",
    url: "https://www.webcolegios.com/file/2360bb.pdf",
    summary:
      "Conserva otra reproducción del relato escolar y confirma que el daño a árboles y cultivos es accidental.",
    limitation:
      "Repite la cadena pedagógica y no constituye una fuente oral o etnográfica independiente.",
  }),
  uninortePaton: source({
    title: "Diseño de una prueba de comprensión lectora",
    author: "Universidad del Norte",
    type: "trabajo universitario de educación",
    url: "https://manglar.uninorte.edu.co/bitstream/handle/10584/7607/luis%20arturo.pdf",
    summary:
      "Usa El Patón como texto de comprensión y ayuda a fijar la secuencia de espera, encuentro y reconocimiento de su torpeza.",
    limitation:
      "Su objetivo es evaluar lectura y no investigar el origen o la circulación social de la leyenda.",
  }),
  gomezCatalog: source({
    title: "Leyendas latinoamericanas y del mundo",
    author:
      "Carlos William Gómez R., Olegario Ordóñez Díaz y Biblioteca Pública San Juan Bosco",
    year: 1995,
    type: "registro bibliográfico de antología escolar",
    url: "https://biblioteca.apps-mosquera.gov.co/cgi-bin/koha/opac-detail.pl?biblionumber=1185",
    summary:
      "Identifica la antología Voluntad citada como procedencia del relato pedagógico de El Patón.",
    limitation:
      "El catálogo prueba la obra y sus datos editoriales, no el origen tradicional del personaje.",
  }),
  smithsonianBigfoot: source({
    title: "Bigfoot: The Life and Times of a Legend",
    author: "Smithsonian Institution Libraries",
    type: "registro bibliográfico comparativo",
    url: "https://www.si.edu/object/bigfoot-life-and-times-legend-joshua-blu-buhs%3Asiris_sil_925177",
    summary:
      "Aporta una referencia rigurosa para presentar a Bigfoot como comparación moderna de cultura popular, no como fuente de El Patón.",
    limitation:
      "No demuestra contacto, genealogía ni identidad entre el motivo colombiano y el criptido norteamericano.",
  }),
  blackDogStudy: source({
    title: "The Black Dog: Origins and Symbolic Meaning of the Spectral Canine",
    author: "Adam Zmarzlinski",
    type: "estudio académico comparativo",
    url: "https://www.ocf.berkeley.edu/~culturalanalysis/volume18_2/vol18_2_Zmarzlinski.html",
    summary:
      "Examina Black Shuck, Barguest y otras formas del perro espectral para comparar variación, función y apariencia.",
    limitation:
      "Estudia repertorios británicos y europeos; una semejanza formal no prueba difusión hacia Antioquia.",
  }),
  uninorteRodillona: source({
    title: "Desarrollo de competencias lectoras mediante mitos colombianos",
    author: "Universidad del Norte",
    type: "tesis educativa con reproducción narrativa",
    url: "https://manglar.uninorte.edu.co/bitstream/10584/695/1/9143154.pdf",
    summary:
      "Reproduce la apariencia, la risa, la función caminera y las personas a quienes evita la Rodillona.",
    limitation:
      "La mediación escolar no identifica un testimonio autónomo ni fecha con precisión la circulación oral.",
  }),
  andesMemory: source({
    title: "Andes: identidad y memoria, sostenibilidad y resiliencia",
    author: "Alcaldía de Andes",
    type: "libro institucional de memoria municipal",
    url: "https://www.andes-antioquia.gov.co/MiMunicipio/HistoriaVeredas/Andes%2C%20identidad%20y%20memoria%20%20sostenibilidad%20y%20resiliencia.pdf",
    summary:
      "Registra versiones locales de Dama Verde y María la Larga, incluidos el camino de Santa Rita, la Poceta de la Virgen y el sacerdote Eleázar Marulanda.",
    limitation:
      "Es memoria municipal mediada y no prueba que los encuentros ocurrieran ni que la variante de Andes sea el origen del motivo.",
  }),
  elTiempoDesfile: source({
    title: "Desfile de mitos y leyendas",
    author: "El Tiempo",
    year: 1990,
    type: "hemerografía de recepción cultural",
    url: "https://www.eltiempo.com/archivo/documento/MAM-30929",
    summary:
      "Registra a los Rescoldados entre las figuras representadas en el desfile de mitos y leyendas de Medellín.",
    limitation:
      "Prueba recepción pública a finales del siglo XX, no los detalles ni la antigüedad del relato.",
  }),
  secretosCenteno: source({
    title: "Los tesoros de María Centeno",
    author: "Fundación Secretos para Contar",
    type: "adaptación literaria contemporánea",
    url: "https://secretosparacontar.org/tema_contenido/los-tesoros-de-maria-centeno/",
    summary:
      "Publica la adaptación del becerro de oro, el túnel, la moneda y el regreso de la joven cuando su madre ha envejecido.",
    limitation:
      "Se presenta como texto basado en una leyenda colombiana; no debe confundirse con transcripción oral antigua ni biografía histórica.",
  }),
  secretosCentenoPdf: source({
    title: "Con los pelos de punta",
    author: "Fundación Secretos para Contar",
    type: "libro educativo de relatos",
    url: "https://secretosparacontar.org/wp-content/uploads/2024/01/CON-LOS-PELOS-DE-PUNTA_18-a51-1.pdf",
    summary:
      "Conserva la adaptación completa de Los tesoros de María Centeno dentro de su contexto editorial y pedagógico.",
    limitation:
      "Pertenece a la misma cadena editorial de la página web y no cuenta como testimonio independiente.",
  }),
  udeaCenteno: source({
    title: "Narrativas y lógicas de una memoria mestiza",
    author: "Carlos Mario Herrera Correa",
    year: 2005,
    type: "artículo de antropología histórica",
    url: "https://revistas.udea.edu.co/index.php/boletin/article/view/6915",
    summary:
      "Estudia la tradición de María Centeno o María del Pardo en el occidente y norte antioqueños mediante archivo y memoria oral.",
    limitation:
      "Analiza un ciclo de memorias y sus lógicas; no certifica como hechos todos los episodios legendarios.",
  }),
  redalycCenteno: source({
    title: "Narrativas y lógicas de una memoria mestiza",
    author: "Carlos Mario Herrera Correa",
    year: 2005,
    type: "copia académica de artículo",
    url: "https://www.redalyc.org/pdf/557/55703603.pdf",
    summary:
      "Da acceso al texto íntegro sobre conquista, encomiendas, minería y elaboración mestiza de la memoria de María Centeno.",
    limitation:
      "Es copia del mismo artículo de la Universidad de Antioquia y se usa para consulta, no como fuente independiente adicional.",
  }),
  antioquiaAbriaqui: source({
    title: "Decreto de reconocimiento patrimonial de Abriaquí",
    author: "Gobernación de Antioquia",
    year: 2021,
    type: "documento normativo departamental",
    url: "https://antioquia.gov.co/images/normativa/decretos/2021/2021070003699.pdf",
    summary:
      "Registra como teoría popular la asociación del nombre Abriaquí con una orden atribuida a María Centeno para ocultar oro.",
    limitation:
      "La fórmula se identifica como explicación popular, no como etimología lingüística o acontecimiento demostrado.",
  }),
  flacsoOtero: source({
    title: "Mitos y leyendas de Colombia, volumen II",
    author: "Eugenia Villa Posse, compiladora; Enrique Otero D’Costa, autor",
    year: 1993,
    type: "antología digital con texto primario",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620",
    summary:
      "Reproduce No hay deuda que no se pague y explica que Otero D’Costa elaboró literariamente relatos escuchados y materiales regionales.",
    limitation:
      "El pacto, los diálogos y la desaparición pertenecen al cuento; no son expediente biográfico de Damián Vásquez Montiel.",
  }),
  upbOtero: source({
    title: "Leyendas, por Enrique Otero D’Costa",
    author: "Enrique Otero D’Costa",
    type: "publicación universitaria de textos literarios",
    url: "https://revistas.upb.edu.co/index.php/revista-institucional/article/download/3125/2843/5578",
    summary:
      "Acredita la autoría y el repertorio literario de Otero D’Costa, útil para no presentar sus leyendas como relatos anónimos.",
    limitation:
      "La colección literaria crea verosimilitud histórica, pero no vuelve documentales sus escenas ni diálogos.",
  }),
  caldasColonial: source({
    title: "La sociedad colonial",
    author: "Gobernación de Caldas",
    type: "síntesis histórica institucional",
    url: "https://caldas.gov.co/index.php/historia-caldas/10045-la-sociedad-colonial",
    summary:
      "Ubica la fundación de Santiago de Arma en 1542 y contextualiza extracción, resistencia indígena, esclavización y trabajo minero.",
    limitation:
      "No registra a Damián ni su pacto; sirve para leer críticamente el escenario colonial del cuento.",
  }),
  banrepRionegro: source({
    title: "Rionegro: de ciudad colonial a cuna de la libertad",
    author: "Banco de la República",
    type: "historia urbana institucional",
    url: "https://www.banrepcultural.org/biblioteca-virtual/credencial-historia/numero-362/rionegro",
    summary:
      "Explica la jurisdicción de Arma y el traslado oficial de su nombre y privilegios a Rionegro en 1786.",
    limitation:
      "Aporta contexto territorial posterior a la acción del cuento y no verifica sus personajes.",
  }),
  armaTrasladoHistory: source({
    title: "La traslación de Arma para Rionegro entre 1783 y 1786",
    author: "Ricardo de los Ríos Tobón y Al Bicentenario",
    year: 1983,
    type: "estudio histórico con transcripción documental",
    url: "https://www.albicentenario.com/index_archivos/celebracion_colombiana231.html",
    summary:
      "Reproduce testimonios y documentos sobre la traslación y ayuda a distinguir la ciudad de Arma de la posterior Santiago de Arma de Rionegro.",
    limitation:
      "Es una transcripción y estudio posterior, no el repositorio archivístico original; no menciona el pacto legendario.",
  }),
};

export const antioquiaMestizoSourceKeysBySlug = {
  "el-paton": [
    "utpPaton",
    "webcolegiosPaton",
    "uninortePaton",
    "gomezCatalog",
    "ocampoGrande",
    "smithsonianBigfoot",
  ],
  "el-perro-negro": [
    "escobarMitos",
    "ocampoPopularScan",
    "ocampoGrande",
    "ocampoContents",
    "solorzanoCatalog",
    "blackDogStudy",
  ],
  "la-cabellona": [
    "escobarMitos",
    "ocampoPopularScan",
    "ocampoGrande",
    "ocampoContents",
    "solorzanoCatalog",
    "ifmAntioquia",
  ],
  "la-dama-verde": [
    "escobarMitos",
    "ocampoPopularScan",
    "ocampoGrande",
    "ocampoContents",
    "solorzanoCatalog",
    "andesMemory",
    "rtvcDianaUribe",
  ],
  "la-rodillona": [
    "escobarMitos",
    "ocampoPopularScan",
    "ocampoGrande",
    "ocampoContents",
    "solorzanoCatalog",
    "uninorteRodillona",
    "ifmAntioquia",
  ],
  "las-ilusiones": [
    "escobarMitos",
    "ocampoPopularScan",
    "ocampoGrande",
    "ocampoContents",
    "solorzanoCatalog",
    "rtvcDianaUribe",
  ],
  "los-rescoldos": [
    "ocampoPopularScan",
    "ocampoGrande",
    "ocampoContents",
    "solorzanoCatalog",
    "elTiempoDesfile",
  ],
  "maria-centeno": [
    "secretosCenteno",
    "udeaCenteno",
    "antioquiaAbriaqui",
    "ocampoGrande",
    "ocampoContents",
    "secretosCentenoPdf",
    "redalycCenteno",
  ],
  "maria-la-larga": [
    "andesMemory",
    "escobarMitos",
    "ocampoGrande",
    "ocampoPopularScan",
    "solorzanoCatalog",
    "rtvcDianaUribe",
  ],
  "no-hay-deuda-que-no-se-pague": [
    "flacsoOtero",
    "upbOtero",
    "caldasColonial",
    "banrepRionegro",
    "armaTrasladoHistory",
    "escobarMitos",
    "ocampoGrande",
  ],
};

/**
 * Resuelve las fuentes de una ficha. Con una lista —la `sourceKeys` que la
 * ficha declara— devuelve esas obras en ese orden, y cada entrada puede ser una
 * clave suelta o `{ key, summary, limitation }` con lo que esa obra dice de
 * ESE relato. Con un slug cae en el reparto heredado, que se conserva tal cual
 * para las fichas que todavía no se han rehecho.
 */
export function pickAntioquiaMestizoSources(slugOrEntries) {
  if (!Array.isArray(slugOrEntries)) return pickAntioquiaMestizoSourcesHeredadas(slugOrEntries);
  return slugOrEntries.map((entrada) => {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = antioquiaMestizoSources[key];
    if (!selected) throw new Error(`Fuente desconocida: ${JSON.stringify(entrada)}.`);
    return {
      ...selected,
      ...(typeof entrada === "object" && entrada.summary ? { summary: entrada.summary } : {}),
      ...(typeof entrada === "object" && entrada.limitation ? { limitation: entrada.limitation } : {}),
    };
  });
}

// El reparto heredado, por slug. Sólo lo usan las fichas sin `sourceKeys`.
function pickAntioquiaMestizoSourcesHeredadas(slug) {
  const keys = antioquiaMestizoSourceKeysBySlug[slug];
  if (!keys) throw new Error(`${slug}: no tiene expediente de fuentes.`);
  return keys.map((key) => {
    const selected = antioquiaMestizoSources[key];
    if (!selected) throw new Error(`${slug}: fuente desconocida ${key}.`);
    return selected;
  });
}
