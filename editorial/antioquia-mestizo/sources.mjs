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

  // ——— Búsqueda profunda 2026-09-22 ———
  correaMitos1997: source({
    title: "Mitos, espantos y leyendas de Caldas",
    author: "Fabio Vélez Correa",
    year: 1997,
    type: "libro (1.ª ed. Imprenta Departamental de Caldas, 1997; se lee la edición ampliada, posterior a 2007, en El Libro Total)",
    url: "https://www.ellibrototal.com/ltotal/?d=4731&t=1",
    summary:
      "Capítulo «La Dama Verde» de los mitos menores, con la cita de Iván Salazar Duque (Mitos y mensajes, 1990, p. 104) y la versión de Molina Uribe (1967) en que se destapa y es calavera; en el mismo libro, María la Larga y la Madrelagua de Similitudes.",
    limitation:
      "Se lee la edición ampliada de El Libro Total (cita prensa de 2005-2007), no la de 1997; el visor no da folios del impreso y se cita por capítulo.",
  }),
  tiempoCuentos2004: source({
    title: "Cuentos de espantos y otros seres fantásticos del folclor colombiano",
    author: "Casa Editorial El Tiempo, dir. Juan Torres Mantilla",
    year: 2004,
    type: "libro ilustrado de ficción declarada",
    url: "https://archive.org/details/CuentosDeEspantosYOtrosSeresFantasticosDelFolclorColombiano..compressed",
    summary:
      "Trae la Dama Verde en sus pp. 11-12.",
    limitation:
      "El libro se declara «recopilación de documentos imaginarios»; su entrada es composición de autor y sólo sirve como testigo de circulación en 2004.",
  }),
  toledoRemembranzas2022: source({
    title: "Remembranzas de mis abuelos: memoria oral y ambiental del alto oriente caldense",
    author: "Useche Toledo, González González, Guzmán Ruiz y Tunarrosa Echeverría (SENA)",
    year: 2022,
    type: "libro de memoria oral (SENA, La Dorada)",
    url: "https://repositorio.sena.edu.co/bitstream/handle/11404/8024/Remembranzas_de_mis_abuelos.pdf?sequence=4&isAllowed=y",
    summary:
      "Recoge en Marquetalia, en voz de Jorge Echeverry, a María la Parda, que enterró sus mulas cargadas de oro junto al camino a Samaná (p. 58), el paralelo que nombra Similitudes.",
    limitation:
      "No trae la Dama Verde; sirve para la comparación.",
  }),
  antioquiaAndes2019: source({
    title: "Andes: identidad y memoria / sostenibilidad y resiliencia",
    author: "Alcaldía de Andes (Antioquia)",
    year: 2019,
    type: "publicación municipal",
    url: "https://www.andes-antioquia.gov.co/MiMunicipio/HistoriaVeredas/Andes%2C%20identidad%20y%20memoria%20%20sostenibilidad%20y%20resiliencia.pdf",
    summary:
      "Cita textualmente a Escobar Uribe (Mitos de Antioquia, 1950) sobre María la Larga (p. 58), el espanto que Similitudes pone junto a la Dama Verde.",
    limitation:
      "No menciona a la Dama Verde.",
  }),
  duranDesarrollo2007: source({
    title: "Desarrollo de competencias lectoras a partir de un programa de acompañamiento en estudiantes de educación básica del municipio de Galapa, Atlántico",
    author: "José Gregorio Durán, Emiluz Jaraba de Naissir y Liliana Garrido (Universidad del Norte)",
    year: 2007,
    type: "trabajo de grado (Maestría en Educación)",
    url: "https://manglar.uninorte.edu.co/bitstream/handle/10584/695/1/9143154.pdf",
    summary:
      "Usa un texto de la Rodillona como lectura en su programa escolar y lo reproduce en el anexo.",
    limitation:
      "Es una tesis de pedagogía de la lectura en el Atlántico: el texto no trae procedencia ni narrador y sólo prueba que circula como material escolar.",
  }),
  tiempoMedellin1990: source({
    title: "En Medellín: desfile de danzas, mitos y leyendas. Una noche a la colombiana",
    author: "El Tiempo",
    year: 1990,
    type: "prensa (6 de diciembre de 1990)",
    url: "https://www.eltiempo.com/archivo/documento/MAM-30929",
    summary:
      "Nombra al Patetarro, que Similitudes compara con la Rodillona, entre las comparsas de un desfile de mitos en Medellín en 1990.",
    limitation:
      "Prensa de época; sólo fecha la circulación pública de los espantos.",
  }),
  carrasquillamarquesa1928: source({
    title: "La marquesa de Yolombó",
    author: "Tomás Carrasquilla",
    year: 1928,
    type: "novela (edición digital de la Biblioteca Básica de Cultura Colombiana, Biblioteca Nacional)",
    url: "https://siise.bibliotecanacional.gov.co/BBCC/Documents/View/208",
    summary:
      "En el catálogo de «la corte infernal y selvática» de la novela describe a «los ilusiones», duendecillos incorpóreos que se van a las orejas de los inocentes, junto al Bracamonte que nombra Similitudes.",
    limitation:
      "Es novela; testimonio literario temprano, en masculino, de lo que Escobar recogerá después.",
  }),
  contartesoros2024: source({
    title: "Los tesoros de María Centeno, en Con los pelos de punta",
    author: "Fundación Secretos para Contar",
    year: 2024,
    type: "libro de divulgación",
    url: "https://secretosparacontar.org/wp-content/uploads/2024/01/CON-LOS-PELOS-DE-PUNTA_18-a51-1.pdf",
    summary:
      "Adaptación contemporánea de «Los tesoros de María Centeno», nacida en Santa Fe de Antioquia hace 450 años.",
    limitation:
      "Recreación para lectores campesinos, no registro.",
  }),
  polarMitossf: source({
    title: "Mitos y leyendas del estado Portuguesa, cap. 28: La Sayona",
    author: "Fundación Empresas Polar",
    year: "s. f.",
    type: "recopilación regional venezolana",
    url: "https://bibliofep.fundacionempresaspolar.org/media/1377961/mitos_portuguesa_c_28_la-sayona.pdf",
    summary:
      "Recoge a la Sayona del estado Portuguesa, la mujer que se deja seguir por los hombres de noche y se revela muerta, el paralelo venezolano de Similitudes.",
    limitation:
      "Es la tradición llanera venezolana; comparación de estructura.",
  }),

  // ——— Búsqueda profunda 2026-09-22 ———
  mejiaDiseno2012: source({
    title: "Diseño de pruebas objetivas para evaluar competencias en el área de castellano para el grado tercero de la educación básica primaria",
    author: "Luis Arturo Aguilar Mejía y Silvia Rosa Sierra Calvo (Universidad del Norte)",
    year: 2012,
    type: "trabajo de grado (Maestría en Educación)",
    url: "https://manglar.uninorte.edu.co/bitstream/handle/10584/7607/luis%20arturo.pdf",
    summary:
      "Reproduce el texto escolar «Patón», firmado «Leyenda popular»: el ser que tumba árboles en las montañas, la trampa del lazo, los campesinos que esperan tres horas y el hombre de pies enormes que parece una ele.",
    limitation:
      "Tesis de evaluación escolar (Barranquilla, 2012): el texto no tiene procedencia ni narrador.",
  }),
  grilloteGuia2021: source({
    title: "Guía de Lengua Castellana, grado tercero, «Tema: la leyenda»",
    author: "Centro Educativo El Grillote",
    year: 2021,
    type: "material escolar",
    url: "https://www.webcolegios.com/file/2360bb.pdf",
    summary:
      "Guía de grado tercero de 2021 con la misma leyenda, situada en Antioquia, con patas de un metro y el cierre «no es un monstruo, pero hace mucho daño».",
    limitation:
      "Material de aula sin procedencia; variante del mismo texto escolar.",
  }),
  compiladoraInforme1997: source({
    title: "Informe Fulbright-Hays 1997 con «Niños de las regiones de Colombia» (Esmeralda Van Vliet, ICAN)",
    author: "Ana María Alfaro (compiladora), ERIC ED430849",
    year: 1997,
    type: "informe educativo",
    url: "https://files.eric.ed.gov/fulltext/ED430849.pdf",
    summary:
      "Incluye la página infantil «Niños de las regiones de Colombia» de Esmeralda Van Vliet (ICAN), donde Mauricio, un niño de la región cafetera, cuenta que el Patón son «unos pies muy grandes que pasan por los caminos, solos, sin el cuerpo», junto a los Meneses que nombra Similitudes.",
    limitation:
      "Es una página infantil de divulgación impresa en un informe de 1997; no da narrador ni lugar exacto.",
  }),
  lopezpueblo1977: source({
    title: "El pueblo boyacense y su folclor",
    author: "Javier Ocampo López",
    year: 1977,
    type: "libro (cap. 8, pp. 120-126)",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll10/id/2782/download",
    summary:
      "Recoge en Tunja el espanto del perro de San Francisco, con aullidos, arrastre de cadenas y ojos con luces fuertes, el paralelo de Similitudes.",
    limitation:
      "Es un espanto urbano de Boyacá.",
  }),
  noticiasAntioquenidad2023: source({
    title: "(Antioqueñidad III) Mitos y leyendas de Antioquia",
    author: "IFM Noticias, con información del SINIC",
    year: 2023,
    type: "prensa regional",
    url: "https://ifmnoticias.com/antioquenidad-iii-mitos-y-leyendas-de-antioquia/",
    summary:
      "Reproduce la ficha del Sistema Nacional de Información Cultural: la Cabellona es un espanto rural vespertino y de tiempos lluviosos, de Liborina a Pavarandocito.",
    limitation:
      "Nota de prensa regional que reproduce una ficha institucional hoy caída; una línea.",
  }),
  compiladoraMitos1993: source({
    title: "Mitos y leyendas de Colombia, tomo II",
    author: "Eugenia Villa Posse (compiladora)",
    year: 1993,
    type: "antología (IADAP, Quito)",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620",
    summary:
      "Texto del cuento de Otero D'Costa (Leyendas, 1936) en la sección 17, pp. 53-56: el perulero Damián Vásquez Montiel en la Villa de Arma, el pacto contado por doña Mónica y el jinete de la mula de fuego del viernes santo.",
    limitation:
      "Villa Posse lo presenta como leyenda oída y reelaborada; es un cuento firmado.",
  }),
  hernandezAnimas2012: source({
    title: "Ánimas y pactos diabólicos: un regaño platónico a los borrachos e idólatras de Santander desde la mitología en prosa",
    author: "Farouk Caballero Hernández",
    year: 2012,
    type: "artículo (Rastros Rostros 14 (27), pp. 69-74, Universidad Cooperativa de Colombia)",
    url: "https://revistas.ucc.edu.co/index.php/ra/article/download/445/450",
    summary:
      "Recuerda el pacto diabólico de don David Puyana en Bucaramanga, que nunca perdía en el juego, recreado por Gómez Valderrama, el paralelo de Similitudes, y analiza «Cuento de ánimas» del mismo libro de Otero.",
    limitation:
      "No trata este cuento.",
  }),
  camargoHacia2015: source({
    title: "Hacia una nueva comprensión de la historiografía colombiana: breve historia intelectual de Enrique Otero D'Costa (1883-1964)",
    author: "Daniel Mauricio Preciado Camargo",
    year: 2015,
    type: "trabajo de grado (Universidad del Rosario)",
    url: "https://repository.urosario.edu.co/handle/10336/10607",
    summary:
      "Estudio de la obra de Otero D'Costa que lee sus leyendas como historiografía de la vida cotidiana colonial.",
    limitation:
      "No analiza este cuento.",
  }),
  republicacoleccionsf: source({
    title: "La colección de Enrique Otero D'Costa",
    author: "Credencial Historia n.º 375 (Banco de la República)",
    year: "s. f.",
    type: "artículo de divulgación histórica",
    url: "https://www.banrepcultural.org/biblioteca-virtual/credencial-historia/numero-375/la-coleccion-de-enrique-otero-dcosta",
    summary:
      "Presenta al autor como historiador y coleccionista de documentos coloniales, de donde vienen el maese de campo, el licenciado vicario y la dueña del cuento.",
    limitation:
      "No menciona este cuento.",
  }),
  caldasconquistasf: source({
    title: "La conquista o encuentro de dos culturas",
    author: "Gobernación de Caldas",
    year: "s. f.",
    type: "síntesis histórica institucional",
    url: "https://www.caldas.gov.co/index.php/historia-caldas/10044-la-conquista-o-encuentro-de-dos-culturas",
    summary:
      "Síntesis de la conquista del antiguo Caldas, con la fundación de las primeras poblaciones, entre ellas Arma, escenario del cuento.",
    limitation:
      "Síntesis institucional; no trata el cuento.",
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
