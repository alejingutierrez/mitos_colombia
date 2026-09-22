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

export const huitotoResidualSources = {
  preussOne: source({
    title: "Religión y mitología de los uitotos, primera parte",
    author:
      "Konrad Theodor Preuss; traducción de Ricardo Castañeda Nieto con asesoría de Gabriele Petersen de Piñeros",
    year: 1994,
    type: "edición académica de registros realizados en 1914",
    url: "https://pure.mpg.de/rest/items/item_576592_1/component/file_576590/content",
    summary:
      "Publica y analiza La vieja de la luna: la anciana llamada janai o taife, el bastón comestible, el cesto, la cueva y el humo de ají.",
    limitation:
      "La interpretación lunar es de Preuss y no se presenta como explicación definitiva de los narradores ni de comunidades actuales.",
  }),
  preussTwo: source({
    title: "Religión y mitología de los uitotos, segunda parte",
    author:
      "Konrad Theodor Preuss; transcripción y traducción revisadas por Eudocio Becerra y Gabriele Petersen de Piñeros",
    year: 1994,
    type: "corpus bilingüe y repertorio lingüístico",
    url: "https://pure.mpg.de/pubman/item/item_576592_2/component/file_576591/witoto_preuss1994_2_s.pdf",
    summary:
      "Permite contrastar nombres, vocabulario y secuencias del corpus sin tratar grafías cambiantes como personajes independientes.",
    limitation:
      "Corresponde principalmente a la variedad mika y a una situación histórica concreta; no sustituye versiones posteriores localizadas.",
  }),
  tagliani: source({
    title: "Mitología y cultura huitoto",
    author: "Lino Tagliani",
    year: 1992,
    type: "estudio etnográfico y compilación narrativa",
    url: "https://acervo.socioambiental.org/sites/default/files/documents/WIL00001.pdf",
    summary:
      "Documenta el origen donde Taife no logra salir del hueco y reproduce el ciclo de Nonuetoma con sus pruebas, transformaciones y desenlace.",
    limitation:
      "Combina trabajo de campo de 1983 a 1986 en Cuemaní con materiales anteriores; Nonuetoma se atribuye a Amazonía Peruana 7 de 1976 sin relator nombrado.",
  }),
  taglianiReview: source({
    title: "Reseña: Mitología y cultura huitoto",
    author: "William Torres; Boletín Museo del Oro",
    year: 1992,
    type: "reseña académica institucional",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/view/7024/7270",
    summary:
      "Explica el trabajo de Tagliani en Cuemaní y que el volumen mezcla relatos de estudiantes del centro Mama-Bué con textos publicados antes.",
    limitation:
      "Describe procedencia y método, pero no aporta otra versión independiente de Taife o Nonuetoma.",
  }),
  urbinaBook: source({
    title:
      "Las palabras del origen: breve compendio de la mitología de los uitotos",
    author:
      "Fernando Urbina Rangel; relato de Pablo Bigïdïma con traducción de Eudocio Becerra y Jitoma Zafiama",
    year: 2010,
    type: "compendio narrativo con relator, lugar y fecha identificados",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll8/id/4/download",
    summary:
      "Publica Kugï y Nokuerai, incluido el extravío de Joyareño y Rikoño, la persecución y la transformación final de Rikoño en lora.",
    limitation:
      "Es una edición de Fernando Urbina de un ciclo extenso; esta página conserva los créditos y no convierte sus comentarios en voz del relator.",
  }),
  cervantesUrbina: source({
    title:
      "Las palabras del origen: registro bibliográfico del compendio",
    author: "Biblioteca Virtual Miguel de Cervantes y Banco de la República",
    year: 2010,
    type: "registro bibliográfico institucional",
    url: "https://www.cervantesvirtual.com/portales/biblioteca_virtual_del_banco_de_la_republica/obra/las-palabras-del-origen-breve-compendio-de-la-mitologia-de-los-uitotos-878838/",
    summary:
      "Controla autoría, edición, institución de origen y acceso al compendio utilizado para Taik.",
    limitation:
      "No constituye una narración oral adicional ni resuelve por sí solo las diferencias entre episodios del ciclo.",
  }),
  onic: source({
    title: "Muina Murui",
    author: "Organización Nacional Indígena de Colombia",
    type: "perfil comunitario contemporáneo",
    url: "https://www.onic.org.co/pueblos/1125-muinane",
    summary:
      "Sitúa variedades lingüísticas, dispersión histórica, territorio y continuidad del pueblo Murui-Muina en Colombia.",
    limitation:
      "El perfil sintetiza identidades relacionadas y no valida por sí mismo ningún episodio narrativo de estas cuatro rutas.",
  }),
  mythEthics: source({
    title: "Mito y ética: una lectura del pensamiento mítico",
    author: "Fernando Urbina Rangel",
    year: 2010,
    type: "artículo académico de interpretación",
    url: "https://dialnet.unirioja.es/descarga/articulo/3703226.pdf",
    summary:
      "Ofrece criterios para leer perspectiva, cuidado, relaciones con animales y consecuencias sin convertir un relato en moraleja universal.",
    limitation:
      "Es una interpretación posterior y no reemplaza las narraciones ni autoriza una enseñanza total del pueblo.",
  }),
  yucaPaper: source({
    title: "La yuca como patrimonio culinario ancestral del pueblo uitoto",
    author: "Sabrina González Barbosa y Maricruz Romero Ugalde",
    year: 2024,
    type: "investigación reciente con memoria contemporánea",
    url: "https://cipres.sanmateo.edu.co/ojs/index.php/sosquua/article/download/1041/886/1732",
    summary:
      "Recoge una explicación contemporánea de Jitoma Zafiama sobre Taife, su permanencia bajo tierra y la existencia de otros taifes en el mundo.",
    limitation:
      "La comunicación se cita dentro de un estudio sobre yuca y no desarrolla La vieja de la luna ni reemplaza el texto de Preuss.",
  }),
  rodriguezBook: source({
    title: "Muestra de literatura oral en Leticia, Amazonas",
    author: "María Luisa Rodríguez de Montes; Instituto Caro y Cuervo",
    year: 1981,
    type: "monografía de recopilación y análisis",
    url: "https://libreriasiglo.com/8011-muestra-de-literatrua-oral-en-leticia-amazonas",
    summary:
      "Documenta la edición que contiene El diluvio y Guinadoma o el diluvio, además del estudio de narraciones recogidas en Leticia.",
    limitation:
      "La ficha comercial confirma la publicación, pero no muestra por sí sola el texto ni sus informantes.",
  }),
  guinadomaTranscript: source({
    title: "Guinadoma o el diluvio, transcripción de Rodríguez de Montes",
    author: "Hermanos Soto Flórez; recopilación de María Luisa Rodríguez de Montes",
    year: 1981,
    type: "reproducción consultable de la transcripción atribuida",
    url: "https://floodstories.wordpress.com/2025/07/17/16-44-b-i-rodriguez-de-montes-1981-spanish/",
    summary:
      "Reproduce las páginas 122 a 124: Anequi, el refugio sellado, los animales, Fusiñamuy, el descenso del agua y el tambor de Guinadoma.",
    limitation:
      "Es una reproducción web posterior; la ortografía y la puntuación siguen la edición de 1981, no una nueva consulta a las grabaciones.",
  }),
  contratiempo: source({
    title: "Investigación sobre músicas indígenas en Colombia, primera parte",
    author: "A Contratiempo",
    type: "revisión académica del archivo sonoro",
    url: "https://www.musigrafia.org/acontratiempo/files/ediciones/revista-13/pdf/Investigacion_sobre_musicas_indigenas_Parte1.pdf",
    summary:
      "Explica que Rodríguez de Montes grabó relatos entre 1975 y 1977 y reconoce a Lorenzo y José Soto Flórez, nacidos en La Chorrera y residentes en Leticia.",
    limitation:
      "Se concentra en música y archivo; no vuelve a narrar el diluvio completo ni determina la ubicación del cerro Anequi.",
  }),
  margeryFlood: source({
    title: "El mito del diluvio en Indoamérica",
    author: "Enrique Margery Peña",
    year: 1997,
    type: "estudio comparativo continental",
    url: "https://es.scribd.com/document/371936787/Libro-El-mito-del-diluvio-en-Indoamerica-Enrique-Margery-Pena-pdf",
    summary:
      "Indexa la versión Witoto que ordena subir al cerro Anequi y permite comparar su estructura con otros relatos americanos del agua.",
    limitation:
      "Es una síntesis comparativa y depende de Rodríguez de Montes para el testimonio Witoto; no es una línea oral independiente.",
  }),
  grimms: source({
    title: "Grimms' Fairy Tales: Hansel and Gretel",
    author: "Jacob y Wilhelm Grimm; Project Gutenberg",
    year: 1812,
    type: "fuente folclórica comparativa directa",
    url: "https://www.gutenberg.org/ebooks/2591",
    summary:
      "Conserva el extravío de dos hermanos, una casa engañosa, una anciana peligrosa y una fuga obtenida mediante atención y ayuda mutua.",
    limitation:
      "Es un cuento europeo editado durante el siglo XIX; no prueba parentesco, influencia ni equivalencia con Taife o Taik.",
  }),
  babaYaga: source({
    title: "Russian Fairy Tales: The Baba Yaga",
    author: "W. R. S. Ralston; Project Gutenberg",
    year: 1873,
    type: "fuente folclórica comparativa directa",
    url: "https://www.gutenberg.org/cache/epub/22373/pg22373-images.html",
    summary:
      "Reúne relatos de una anciana del bosque que amenaza a visitantes y cuyas pruebas pueden superarse mediante consejo y reciprocidad.",
    limitation:
      "Baba Yaga pertenece a tradiciones rusas y tiene variantes protectoras o donantes ausentes del episodio Huitoto de Taife.",
  }),
  odysseyTen: source({
    title: "Odyssey, Book 10: Circe",
    author: "Homero; Perseus Digital Library",
    type: "fuente literaria comparativa directa",
    url: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0136%3Abook%3D10",
    summary:
      "Presenta viajeros ante una casa peligrosa, transformación animal y una salida que depende de reconocer el engaño.",
    limitation:
      "Es poesía épica griega; no contiene a Joyareño, Rikoño, patos, parentesco amazónico ni transformación voluntaria en lora.",
  }),
  odysseyFour: source({
    title: "Odyssey, Book 4: Proteus",
    author: "Homero; Perseus Digital Library",
    type: "fuente literaria comparativa directa",
    url: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0136%3Abook%3D4",
    summary:
      "Narra el encuentro con Proteo, que cambia de forma repetidas veces mientras intentan obtener una respuesta.",
    limitation:
      "Las transformaciones son una defensa momentánea y no pruebas familiares, orígenes animales ni transmisión Huitoto.",
  }),
  ovidAchelous: source({
    title: "Metamorphoses, Book 9: Achelous and Hercules",
    author: "Ovidio; Perseus Digital Library",
    type: "fuente literaria comparativa directa",
    url: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.02.0028%3Abook%3D9%3Acard%3D1",
    summary:
      "Aqueloo adopta varias formas durante un enfrentamiento y cada transformación cambia la relación de fuerzas.",
    limitation:
      "Es una lucha grecorromana entre rivales; no incluye suegro, chagra, animales originados ni hijos de Nonuetoma.",
  }),
  genesisFlood: source({
    title: "Genesis 6–9: the flood",
    author: "New Revised Standard Version Updated Edition; Bible Gateway",
    type: "fuente religiosa comparativa directa",
    url: "https://www.biblegateway.com/passage/?search=Genesis%206-9&version=NRSVUE",
    summary:
      "Narra una inundación, un refugio construido por advertencia y la convivencia temporal de personas y animales.",
    limitation:
      "El arca, el pacto y la selección de animales no aparecen en Guinadoma; la mención de Noé pertenece incluso al habla del informante de 1981.",
  }),
  ovidDeucalion: source({
    title: "Metamorphoses, Book 1: Deucalion and Pyrrha",
    author: "Ovidio; Perseus Digital Library",
    type: "fuente literaria comparativa directa",
    url: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.02.0028%3Abook%3D1",
    summary:
      "Presenta a una pareja que sobrevive en una elevación y participa en la renovación del mundo después del diluvio.",
    limitation:
      "No contiene a Anequi, Fusiñamuy, el tambor ni el refugio sellado de Guinadoma y no demuestra contacto histórico.",
  }),

  // ——— Búsqueda profunda 2026-09-22 ———
  grabacionGuinadoma1981: source({
    title: "Guinadoma o el diluvio (relato 15 de Muestra de literatura oral en Leticia, Amazonas, pp. 122-124)",
    author: "Hermanos Soto Flórez (narradores); María Luisa Rodríguez de Montes (grabación y transcripción); reproducción en Flood Stories",
    year: 1981,
    type: "transcripción de relato oral, reproducida íntegra en repositorio de fuentes primarias sobre diluvios",
    url: "https://floodstories.wordpress.com/2025/07/17/16-44-b-i-rodriguez-de-montes-1981-spanish/",
    summary:
      "Es el texto completo del relato en el castellano amazónico de los narradores: el aviso de subir al cerro Ánequi donde cavó Jitoma, el horno embarrado y lleno de comida de Guinadoma, los animales que ya no pican en el cerro, el padre engañado que echa a su hijo al agua, la aparición de Fusiñamuy con su bastón encendido y la pregunta por el icarare, la tierra blanda y la selva que vuelve, y el tambor bajo tierra que suena aquí y allá hasta que el hombre muere. Firma: «Hermanos Soto Flórez».",
    limitation:
      "Es una reproducción web de 2025 de las pp. 122-124, sin facsímil; se cotejó sólo contra sí misma porque el libro de 1981 no está en abierto. Los corchetes son de la editora. El sitio es una colección de fuentes primarias sobre diluvios, no una edición crítica.",
  }),
  storiesdiluvio1981: source({
    title: "El diluvio (resumen del relato 15 en Muestra de literatura oral en Leticia, Amazonas, p. 66)",
    author: "María Luisa Rodríguez de Montes; reproducción en Flood Stories",
    year: 1981,
    type: "resumen de la editora, reproducido en repositorio de fuentes primarias",
    url: "https://floodstories.wordpress.com/2025/07/14/16-44-a-i-rodriguez-de-montes-1981-spanish/",
    summary:
      "Resume el mismo relato con palabras de la editora y permite ver cómo lo leyó: Guinadoma se fabrica «una especie de cueva bien sellada», el anciano hace bajar las aguas «con oraciones y una vara milagrosa», y el tambor sirve para llamar a sus amigos antes de morir sepultado bajo el lodo. Es de donde salía la palabra «amigos» de la ficha anterior.",
    limitation:
      "Es paráfrasis de la recopiladora, no voz de los narradores; donde difiere de las pp. 122-124 manda la transcripción. Reproducción web sin facsímil.",
  }),
  blascoInvestigacion2009: source({
    title: "Investigación sobre músicas indígenas en Colombia: campos disciplinares, institucionalización e investigación aplicada",
    author: "Carlos Miñana Blasco",
    year: 2009,
    type: "artículo de balance académico (revista A Contratiempo, nº 13)",
    url: "https://www.musigrafia.org/acontratiempo/files/ediciones/revista-13/pdf/Investigacion_sobre_musicas_indigenas_Parte1.pdf",
    summary:
      "Es la única fuente que dice quiénes eran los narradores de este diluvio: Lorenzo y José Soto Flórez, hijos de curaca, nacidos en La Chorrera en 1920 y 1924 y habitantes de Leticia desde los años cuarenta. Fecha las grabaciones de Rodríguez de Montes entre 1975 y 1977, dice que se hicieron en cinta y en castellano y que sólo los Soto Flórez cantaban pasajes en uitoto dentro de sus relatos.",
    limitation:
      "El 2026-09-22 la URL canónica devolvió 503 (y la variante sin www también); el texto se leyó en la copia en PDF alojada en https://lalenguaesespiritu.wordpress.com/wp-content/uploads/2018/03/mic3b1ana_musicas-indigenas.pdf, idéntica en título y autor. Habla de la colección entera, no de este relato.",
  }),
  samaritanapalabras2010: source({
    title: "Las palabras del origen: breve compendio de la mitología de los uitotos, cap. 7 «El diluvio y el origen de los bailes»",
    author: "Fernando Urbina Rangel; relator Jitoma Zafiama (La Samaritana, Puerto Leguízamo)",
    year: 2010,
    type: "compendio de relatos uitoto con relator identificado (Ministerio de Cultura)",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll8/id/4",
    summary:
      "Trae otro diluvio uitoto con el que éste se puede comparar: el agua sale hirviendo de los huesos de un paujil cocinado por Fïzido, Jitoma la seca inventando la arena, dos hermanos se salvan en la loma de Adokï, en La Chorrera, la única que quedó libre, y después Buinaima busca a los sobrevivientes. Nombra a Juzíñamui, la misma figura que los Soto Flórez llaman Fusiñamuy.",
    limitation:
      "El introito y la lectura del capítulo son de Urbina, no del relator. Es otro relato del diluvio, no una versión del de Guinadoma: no tiene incrédulo, horno ni tambor.",
  }),
  revisadaReligion1994: source({
    title: "Religión y mitología de los uitotos, segunda parte (caps. 2-4: el origen de la yuca y el diluvio; el diluvio como consecuencia de la mutilación de un loro coronado; el diluvio de los peces)",
    author: "Konrad Theodor Preuss; transcripción revisada y traducción de Eudocio Becerra (Bigïdïma) y Gabriele Petersen de Piñeros",
    year: 1994,
    type: "corpus bilingüe uitoto-español recogido en 1914 (Universidad Nacional de Colombia)",
    url: "https://repositorio.unal.edu.co/handle/unal/3114",
    summary:
      "Contiene los tres diluvios uitoto más antiguos que se conocen, dictados en 1914 en el Igaraparaná: uno desatado por la disputa de dos hermanos por un loro coronado, otro, el de los peces, que sigue a la historia de una muchacha que rechaza a sus pretendientes y es llevada al fondo del río, y un tercero ligado al origen de la yuca. Ninguno tiene cerro de refugio con animales pacificados ni anciano que seca el agua: sirven para mostrar lo propio del relato de Leticia.",
    limitation:
      "No nombra narradores. El PDF es un escaneo con OCR; la columna uitoto no se puede citar. Son relatos distintos, no versiones de éste.",
  }),
  mitologia1992: source({
    title: "Mitología y cultura huitoto, «I. Origen del árbol de las frutas y de las aguas»",
    author: "Lino Tagliani (compilador); texto tomado de Amazonía Peruana nº 7, 1976",
    year: 1992,
    type: "estudio etnográfico con compilación de relatos (Quito, Abya-Yala)",
    url: "https://acervo.socioambiental.org/sites/default/files/documents/WIL00001.pdf",
    summary:
      "En las pp. 206-207 publica otro origen de las aguas: un árbol de todas las frutas, lleno de agua, que al ser tumbado forma el río principal con su tronco y las quebradas con sus ramas, mientras Jusiñamuy manda animales del cielo a la gente. Documenta la forma Jusiñamuy, intermedia entre el Fusiñamuy de los Soto Flórez y el Juzíñamui de Urbina.",
    limitation:
      "No es un diluvio de refugio sino un origen de los ríos; el texto viene de una revista peruana de 1976 y no nombra narrador. OCR con muchas erratas.",
  }),
  galanteAnimalidad2018: source({
    title: "Animalidad y otredad en una muestra de literatura oral de Leticia, Amazonas",
    author: "Andrés González Galante",
    year: 2018,
    type: "monografía de grado en literatura (Universidad de los Andes)",
    url: "https://repositorio.uniandes.edu.co/server/api/core/bitstreams/73b9ac2e-6ba2-40fc-871e-5060dd4c8906/content",
    summary:
      "Estudia la misma colección de 1981 y confirma a José Soto Flórez como informante de Leticia (lo cita a propósito del bufeo). Describe la heterogeneidad de la muestra, con relatos tikuna, uitoto y de población no indígena, y la lectura estructural de la editora, lo que sitúa el diluvio de Guinadoma dentro del libro.",
    limitation:
      "No trata el relato del diluvio; sirve para el contexto de la colección y de los narradores, no para su contenido.",
  }),
  gatewayGenesis: source({
    title: "Génesis 6-9 (Reina-Valera 1960)",
    author: "Bible Gateway",
    type: "texto religioso, paralelo comparativo",
    url: "https://www.biblegateway.com/passage/?search=Genesis%206-9&version=RVR1960",
    summary:
      "Es el relato que los propios narradores tenían en mente al decir que en el cerro «estaba como cuenta en Noé»: aviso previo, refugio cerrado y animales que conviven sin dañarse. Permite marcar la inversión: allí el refugio sellado salva al justo; aquí sepulta al incrédulo.",
    limitation:
      "Paralelo, no fuente del relato. La comparación con Noé está en la voz de los narradores, pero no prueba que la trama venga de la Biblia.",
  }),
  libraryMetamorphoses: source({
    title: "Metamorphoses, libro I (Deucalión y Pirra)",
    author: "Ovidio; edición de Perseus Digital Library",
    type: "texto literario clásico, paralelo comparativo",
    url: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.02.0028%3Abook%3D1",
    summary:
      "Deucalión y Pirra se salvan en la única cumbre que el agua no cubre, el Parnaso, y bajan a una tierra devastada que debe renovarse. Comparte con Anequi la cima como único refugio y la espera hasta que el suelo vuelve a ser habitable.",
    limitation:
      "Paralelo estructural sin relación histórica con el relato uitoto; no hay incrédulo ni tambor.",
  }),
  mitologia19922: source({
    title: "Mitología y cultura huitoto, «IV. Nonuetoma y el origen de unos animales» (pp. 221-222) y su final (pp. 203-204)",
    author: "Lino Tagliani (compilador); texto tomado de Amazonía Peruana nº 7, 1976, pp. 103 y ss.",
    year: 1992,
    type: "estudio etnográfico con compilación de relatos (Quito, Abya-Yala)",
    url: "https://acervo.socioambiental.org/sites/default/files/documents/WIL00001.pdf",
    summary:
      "Es el texto que sigue el relato. En las pp. 221-222: Novuiditoma, brujo que come a sus yernos; Nonuetoma, también brujo, y el consejo del espíritu bueno de no hacer vida marital todavía; la pelea de ambos transformados en tigres, de cuya carne arrancada salen los picalones; la palma y el viento huracanado, que Nonuetoma vence hecho araña; el árbol de frutos de piedra, el techo y el tábano; la cura de la mujer, el hijo y el regreso. En las pp. 203-204, sin título: la quema de la chagra, el colibrí que no alcanza y el camaleón que sí, la segunda mujer y los dos hijos, el asesinato por gente comprada de la parentela de esa mujer y la venganza de los hijos hechos tigres.",
    limitation:
      "Tagliani no lo recogió: lo copia de una revista peruana de 1976 que no se consultó, sin narrador ni lugar. La impresión parte el texto y pega su final tras la «Historia de Diijoma», lo que deja en duda si el episodio de la culebra que lo precede es de Nonuetoma. OCR con muchas erratas («yemo», «npidez», «tiSres»).",
  }),
  revisadaReligion19942: source({
    title: "Religión y mitología de los uitotos, segunda parte, cap. 19 «Los trabajos de Nonuefeima»",
    author: "Konrad Theodor Preuss; transcripción revisada y traducción de Eudocio Becerra (Bigïdïma) y Gabriele Petersen de Piñeros",
    year: 1994,
    type: "corpus bilingüe uitoto-español recogido en 1914 (Universidad Nacional de Colombia)",
    url: "https://repositorio.unal.edu.co/handle/unal/3114",
    summary:
      "Es la versión más antigua y más larga del mismo relato, pp. 424-452. El héroe es Nonueteima, el suegro devorador Nofiniyeiki y la hija Ofaniño; el suegro lo llama Yaaneri. Trae la trampa de la puerta con avispa, el consejo de los espíritus protectores de no acostarse con la mujer, el sexo de la hija embrujado con serpientes y deshecho con barbasco, la leña hechizada, la nasa, el árbol de piedra sujeto con cuerda y el tábano que el héroe crea («Este fue el origen del tábano»), la quema en la que se vuelve colibrí y luego iguana, la palma de cananguche que crece y de la que baja hecho insecto zenarakiño, su muerte a manos de un cuñado de la Gente Enokaima bajo un almendro y la venganza de los hijos convertidos en jaguares.",
    limitation:
      "Preuss no nombra al narrador. OCR de escaneo: la columna uitoto no se puede citar. Contiene pasajes sexuales y de antropofagia que el relato publicado no reproduce.",
  }),
  cResena1992: source({
    title: "Reseña de Mitología y cultura huitoto, de Lino Tagliani",
    author: "William Torres C.",
    year: 1992,
    type: "reseña académica (Boletín Museo del Oro, Banco de la República)",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/view/7024/7270",
    summary:
      "Confirma la procedencia del texto: parte de los relatos del libro son de estudiantes uitotos del centro Mama-Bué en Cuemaní y parte los había publicado antes la revista Amazonía Peruana, nº 7, 1976. Critica que el corpus no corresponde a las versiones establecidas desde Preuss, lo que explica por qué este Nonuetoma es un resumen frente al Nonueteima de 1914.",
    limitation:
      "Reseña del libro entero; no nombra este relato.",
  }),
  nietoReligion1994: source({
    title: "Religión y mitología de los uitotos, primera parte, cap. III «Análisis de los mitos», «Los trabajos de Nonueteima (19)»",
    author: "Konrad Theodor Preuss; traducción de Ricardo Castañeda Nieto",
    year: 1994,
    type: "análisis etnográfico del recopilador (Universidad Nacional de Colombia)",
    url: "https://repositorio.unal.edu.co/handle/unal/3113",
    summary:
      "Desde la p. 135 resume el mito 19 y lo encuadra: Nofiekajítoma, «sol de piedra», se origina en el inframundo y traslada su otro yo, Nofiniyeiki, «devorador de piedras», a la tierra, donde pone la trampa con la avispa. Da el sentido de los nombres del suegro, que en Tagliani aparece sólo como brujo malo.",
    limitation:
      "Es la lectura de Preuss, cargada de su teoría astral; los significados de los nombres son suyos, no de un narrador.",
  }),
  libraryMetamorphoses2: source({
    title: "Metamorphoses, libro IX (Aqueloo y Hércules)",
    author: "Ovidio; edición de Perseus Digital Library",
    type: "texto literario clásico, paralelo comparativo",
    url: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.02.0028%3Abook%3D9%3Acard%3D1",
    summary:
      "Aqueloo cuenta cómo luchó con Hércules por Deyanira cambiando de cuerpo, de serpiente a toro. Es el paralelo de la pelea por una esposa en que los rivales se transforman, como el suegro y el yerno hechos tigres a la orilla del río.",
    limitation:
      "Paralelo estructural sin relación histórica; allí los rivales son dos pretendientes, no suegro y yerno.",
  }),
  seatonArgonautica: source({
    title: "The Argonautica (libro III)",
    author: "Apolonio de Rodas; traducción de R. C. Seaton, Project Gutenberg",
    type: "texto literario clásico, paralelo comparativo",
    url: "https://www.gutenberg.org/ebooks/830",
    summary:
      "Eetes, padre de Medea, impone a Jasón pruebas pensadas para matarlo, los toros de aliento de fuego y los guerreros nacidos de dientes sembrados; Jasón sobrevive con los remedios de la hija. Es el paralelo del suegro que pone trabajos mortales al pretendiente, citado en similitudes.",
    limitation:
      "Épica griega helenística; no hay contacto con la tradición uitoto. En el relato uitoto la ayuda no viene de la hija sino de un espíritu.",
  }),
  iCANHPueblo: source({
    title: "Pueblo Murui",
    author: "Instituto Colombiano de Antropología e Historia (ICANH), colecciones etnográficas",
    type: "perfil institucional de pueblo",
    url: "https://colecciones.icanh.gov.co/articulos/pueblos/MURUI.php",
    summary:
      "Sitúa al pueblo del relato: murui y muinane, llamados uitotos, gente del tabaco, la coca y la yuca dulce, con territorio en el Caquetá, el Putumayo, el Igaraparaná y el Caraparaná. Nombra al numáiraima, el chamán que cura con consejo, cantos y danzas: la figura del brujo que en este relato se enfrenta con otro brujo.",
    limitation:
      "Perfil general: no menciona el relato. La equivalencia entre el «brujo» de Tagliani y el numáiraima es una aproximación, no la afirma el ICANH.",
  }),
  rangelpalabras2010: source({
    title: "Las palabras del origen: breve compendio de la mitología de los uitotos",
    author: "Fernando Urbina Rangel",
    year: 2010,
    type: "compendio de relatos uitoto con relator identificado (Ministerio de Cultura)",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll8/id/4",
    summary:
      "No trae a Nonuetoma, pero explica la costumbre que está debajo de sus pruebas: al presentar el relato de Juvenal Flaviano Castilla, Urbina anota que quien forma hogar debe «contribuir con trabajo tumbando una parcela de selva para que los suegros puedan hacer una chagra nueva», como retribución por llevarse la fuerza de una mujer de la maloca. Es el servicio al suegro que en la versión de 1914 se vuelve tumbar, rozar y quemar la chagra de Nofiniyeiki, y en Tagliani la quema en que el yerno queda acorralado.",
    limitation:
      "No contiene este relato; la nota es de Urbina, no de un narrador, y la relación con Nonuetoma la establece esta ficha.",
  }),
  revisadaReligion19943: source({
    title: "Religión y mitología de los uitotos, segunda parte, cap. 11 «Damagida igai — La vieja de la luna y otras figuras», §12-50",
    author: "Konrad Theodor Preuss; transcripción revisada y traducción de Eudocio Becerra (Bigïdïma) y Gabriele Petersen de Piñeros",
    year: 1994,
    type: "corpus bilingüe uitoto-español recogido en 1914 (Universidad Nacional de Colombia)",
    url: "https://repositorio.unal.edu.co/handle/unal/3114",
    summary:
      "Es el texto del relato, en las pp. 262-272: los niños que llaman en broma a los duendes de la cueva, la vieja de ojos rojos que duerme en la hamaca sobre el fuego y pide que la despierten golpeándole la canilla, el bastón que sabe a ñame, las muescas hechas con una concha, la gente de Moneiyu Jurama que se come los pedazos, la vara de ortiga y el canasto de bambú, el niño en la cumbrera, el humo de ají, la red, los duendes vueltos guara, armadillo y boruga, y los dos sobrevivientes que se van porque quemaron su morada, Juiyama Zíkikai. La nota 2 de los traductores explica que janai o taife son los espíritus del monte y que Preuss confundió la palabra con la de luna llena; el diccionario del anexo da taife como «duende, fantasma». En el mismo capítulo, §1-2, está el episodio de Damagida que se lame la cahuana de los niños solos, citado en similitudes.",
    limitation:
      "Preuss no nombra al narrador ni el lugar exacto. El PDF es escaneo con OCR: la columna uitoto está corrompida y no se puede citar; la española se lee bien. El título «La vieja de la luna» es del etnógrafo.",
  }),
  corsinoortiga2013: source({
    title: "La ortiga «jakɨaɨ-yorebai»: uso y manejo tradicional del clan «eimenɨ» de La Chorrera (Amazonas)",
    author: "Walter Rogelio Buinaje Corsino; fragmento del mito narrado por Francisca Corsino, partera del clan mogofaɨaɨ",
    year: 2013,
    type: "trabajo de grado, Licenciatura en Biología (Universidad Pedagógica Nacional), escrito por un miembro del pueblo",
    url: "https://repositorio.upn.edu.co/items/7f3251e5-0671-4da6-906c-6d9f0bfaa6ef",
    summary:
      "Trae, en las pp. 50-51, la versión contemporánea del mismo relato como «mito del taɨfe», que el autor glosa como la madre monte: los niños cortan el canasto y un bejuco que era lombriz y parten el bastón mientras la abuela duerme; meses después ella vuelve con un canasto forrado de ortiga yorebai, llena de ortiga la puerta de la maloca, persigue a los niños picándolos y se los lleva a un hueco; dos niños se salvan colgándose del palo de la puerta. Anota también el consejo que se desprende del mito: no dejar a los niños solos en la casa.",
    limitation:
      "Es un fragmento, no el mito entero: termina cuando el niño señala el hueco. Es la versión de una narradora de un clan de La Chorrera, recogida por su pariente para un trabajo de pregrado sobre la ortiga, no un registro etnográfico. El OCR del PDF escribe ɨ como «+».",
  }),
  nietoReligion19942: source({
    title: "Religión y mitología de los uitotos, primera parte, cap. III «Análisis de los mitos»",
    author: "Konrad Theodor Preuss; traducción de Ricardo Castañeda Nieto",
    year: 1994,
    type: "análisis etnográfico del recopilador (Universidad Nacional de Colombia)",
    url: "https://repositorio.unal.edu.co/handle/unal/3113",
    summary:
      "En las pp. 116-118 resume el episodio y lo interpreta: llama a la anciana «luna llena (taife)», lee su sueño de día, el fuego debajo, el bastón comestible y el rodar tras romperse como fases de la luna, y ve en la muerte de los suyos en la cueva el perecimiento lunar. Es el origen de la lectura lunar que arrastraba el título.",
    limitation:
      "Es la teoría panlunar de Preuss, que sus propios traductores de 1994 atribuyen a una confusión de palabras. Vale como historia de la interpretación, no como significado del relato para quienes lo cuentan.",
  }),
  taglianiMitologia1992: source({
    title: "Mitología y cultura huitoto, «III. Origen de los Huitotos» y «Nofuieni: ser superior (mito de la luz)»",
    author: "Lino Tagliani",
    year: 1992,
    type: "estudio etnográfico con compilación de relatos (Quito, Abya-Yala)",
    url: "https://acervo.socioambiental.org/sites/default/files/documents/WIL00001.pdf",
    summary:
      "Muestra otros usos del nombre. En la p. 221, cuando la primera gente sale de un hueco de la tierra, el Taife-Demonio es demasiado grueso para pasar y queda adentro, aunque otros taifes sí salen al mundo. En la p. 195, en el tiempo de tinieblas anterior al sol, dice que los diablos, los taifes, llamaban a los niños y se los comían. Confirma que taife nombra a una clase de seres peligrosos para los niños, no a un solo personaje.",
    limitation:
      "No contiene el relato de la vieja del bastón. El texto es de estudiantes y de otras publicaciones, sin narrador en estos pasajes; OCR con muchas erratas.",
  }),
  barbosayuca2024: source({
    title: "La yuca como patrimonio culinario ancestral del pueblo uitoto de la Amazonia colombiana",
    author: "Sabrina González Barbosa y Maricruz Romero Ugalde",
    year: 2024,
    type: "artículo académico (Sosquua, 6(2), pp. 43-67)",
    url: "https://cipres.sanmateo.edu.co/ojs/index.php/sosquua/article/download/1041/886/1732",
    summary:
      "Recoge una comunicación personal de Jitoma Zafiama (2020) sobre el origen: el Taife-Demonio no pudo salir del hueco por ser muy grueso, pero hubo taifes más pequeños que salieron y andan por el mundo haciendo mal. Es la prueba de que la figura sigue viva en la memoria actual con ese carácter.",
    limitation:
      "La cita mezcla a Zafiama con Tagliani 1992 («como se citó en Tagiliani, 1992») y no queda claro qué es de cada uno. No trata el episodio de la vieja del bastón; el artículo es sobre la yuca.",
  }),
};

const sourceKeysBySlug = {
  taife: [
    "preussOne",
    "tagliani",
    "taglianiReview",
    "yucaPaper",
    "onic",
    "mythEthics",
    "grimms",
    "babaYaga",
  ],
  taik: [
    "urbinaBook",
    "cervantesUrbina",
    "preussOne",
    "preussTwo",
    "onic",
    "mythEthics",
    "grimms",
    "odysseyTen",
  ],
  nonuetoma: [
    "tagliani",
    "taglianiReview",
    "preussOne",
    "preussTwo",
    "onic",
    "mythEthics",
    "odysseyFour",
    "ovidAchelous",
  ],
  "el-diluvio-guinadoma": [
    "guinadomaTranscript",
    "rodriguezBook",
    "contratiempo",
    "margeryFlood",
    "onic",
    "preussOne",
    "genesisFlood",
    "ovidDeucalion",
  ],
};

/**
 * Resuelve las fuentes de una ficha. Con una lista —la `sourceKeys` que la
 * ficha declara— devuelve esas obras en ese orden, y cada entrada puede ser una
 * clave suelta o `{ key, summary, limitation }` con lo que esa obra dice de
 * ESE relato. Con un slug cae en el reparto heredado, que se conserva tal cual
 * para las fichas que todavía no se han rehecho.
 */
export function pickHuitotoResidualSources(slugOrEntries) {
  if (!Array.isArray(slugOrEntries)) return pickHuitotoResidualSourcesHeredadas(slugOrEntries);
  return slugOrEntries.map((entrada) => {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = huitotoResidualSources[key];
    if (!selected) throw new Error(`Fuente desconocida: ${JSON.stringify(entrada)}.`);
    return {
      ...selected,
      ...(typeof entrada === "object" && entrada.summary ? { summary: entrada.summary } : {}),
      ...(typeof entrada === "object" && entrada.limitation ? { limitation: entrada.limitation } : {}),
    };
  });
}

// El reparto heredado, por slug. Sólo lo usan las fichas sin `sourceKeys`.
function pickHuitotoResidualSourcesHeredadas(slug) {
  const keys = sourceKeysBySlug[slug];
  if (!keys) throw new Error(`Ruta Huitoto residual desconocida: ${slug}`);
  return keys.map((key) => {
    const selected = huitotoResidualSources[key];
    if (!selected) throw new Error(`${slug}: fuente desconocida ${key}`);
    return selected;
  });
}
