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

// Las cinco obras con las que se escribió el corpus tucano el 2026-09-19, cada
// una con la URL que se abrió y se cotejó contra el PDF en disco. Las ocho
// URLs heredadas —Icesi, Socioambiental (Gentil), Museu do Índio, FUNAI, Povos
// Indígenas, SAG-SSA, Cambridge— se retiraron: no eran las obras que la ficha
// usó, y el propio expediente de la reescritura pidió sacarlas.
export const tucanoSources = {
  fulop1954: source({
    title: "Aspectos de la cultura Tukana: Cosmogonía",
    author: "Marcos Fulop",
    year: 1954,
    type: "transcripción etnográfica de una narración tucano",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/view/1865",
    summary:
      "Revista Colombiana de Antropología 3, pp. 99-137. Es la fuente madre: el ciclo de Yepá Huáke tal como lo narró Marcos Sierra, payé del caserío de Guadalajara sobre el río Paca, afluente del Papurí, con su hermano Manuel de intérprete, en la campaña del 13 de junio al 9 de julio de 1953 por comisión del Instituto Colombiano de Antropología.",
    limitation:
      "Fulop lo escribió de frente en la entrada: por el corto tiempo de la investigación y por haber consultado un solo informante, no se permitía asegurar la exactitud de la versión dada por Marcos Sierra. Es una versión, la de un hombre y un caserío, no la cosmogonía del pueblo tucano.",
  }),
  fulop1956: source({
    title: "Aspectos de la cultura Tukana: Mitología, parte I",
    author: "Marcos Fulop",
    year: 1956,
    type: "colección etnográfica de relatos tucano",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/view/1801",
    summary:
      "Revista Colombiana de Antropología 5, pp. 337-373. Nueve conjuntos narrativos —entre ellos Boraró y Boraró Numió, Wejké y el pito, y la semilla de la yuca— recogidos en Guadalajara entre el 11 de junio y el 9 de septiembre de 1954, con los mismos Marcos Sierra de informante y Manuel Sierra de intérprete.",
    limitation:
      "El propio autor advierte en la nota preliminar que lo publicado es una porción muy pequeña de la mitología tucana total, y aplaza el análisis a que esté recogida entera. Arrastra además la reserva de 1954: un solo informante. El escaneo confunde u con v, y de ahí «Vejké» por Wejké.",
  }),
  maiaAndrello2019: source({
    title: "Ye'pâ-Di'iro-Mahsã, gente de carne da terra: os Tukano do rio Vaupés",
    author: "Arlindo Maia (Ye'pârã Oyé) y Geraldo Andrello",
    year: 2019,
    type: "artículo con coautoría tucano en revista arbitrada",
    url: "https://revistas.unal.edu.co/index.php/imanimundo/article/view/74221",
    summary:
      "Mundo Amazónico 10(1), pp. 53-81. Un autor tucano y un antropólogo cuentan juntos el orden del mundo, la Canoa de Transformación y el reparto de los clanes desde el Vaupés de hoy. Es lo que permite leer a Fulop con nombres y términos que los propios tucano usan.",
    limitation:
      "Es del lado brasileño del Vaupés: vecindad documentada, no la misma comunidad de Guadalajara. «Canoa de transformación» es término suyo; Fulop sólo registra «barco del güío» y el nombre Pameriyekése, y no se le atribuye a Marcos Sierra.",
  }),
  lanaLana1995: source({
    title:
      "Antes o mundo não existia. Mitologia dos antigos Desana-Kẽhíripõrã",
    author:
      "Umusĩ Pãrõkumu (Firmiano Arantes Lana) y Tõrãmũ Kẽhíri (Luiz Gomes Lana)",
    year: 1995,
    type: "libro de autoría indígena, segunda edición",
    url: "https://acervo.socioambiental.org/acervo/livros/antes-o-mundo-nao-existia-mitologia-dos-antigos-desana-kehiripora-2a-ed-rev-ampl",
    summary:
      "Primer volumen de la colección Narradores Indígenas do Rio Negro: la mitología dictada por el kumu Umusĩ Pãrõkumu a su hijo, que la escribió en cuadernos desde 1968. Sirve para cotejar la canoa que sube el río, el Lago de Leche y la salida de los pueblos.",
    limitation:
      "Es desana, no tucano, y del lado brasileño: es la versión del clan Kẽhíripõrã en el Tiquié. Vecindad documentada dos veces —de pueblo y de frontera—: se usa para contrastar, nunca para completar lo que Fulop no trae.",
  }),
  hughJonesDominguez1981: source({
    title: "Historia del Vaupés",
    author:
      "Stephen Hugh-Jones; traducción de Camilo Domínguez y revisión de Julián Arturo",
    year: 1981,
    type: "artículo de historia regional",
    url: "https://revistas.unal.edu.co/index.php/maguare/article/view/29-51",
    summary:
      "Maguaré 1, Departamento de Antropología, Universidad Nacional de Colombia. Desmonta la idea del aislamiento prístino y reconstruye siglos de misión, caucho, comercio y escuela en el Vaupés. Es el marco que explica por qué en el ciclo aparecen el papel, el libro y los cargos de la república.",
    limitation:
      "Es historia regional de un área multiétnica, no etnografía tucano ni mitología: no aporta ninguna escena y no habla por la comunidad de Guadalajara.",
  }),

  // ——— Búsqueda profunda 2026-09-22 ———
  azevedoDahsea2003: source({
    title: "Dahsea Hausirõ Porã ukushe wiophesase merã bueri turi. Mitologia sagrada dos Tukano Hausirõ Porã",
    author: "Ñahuri (Miguel Azevedo) y Kumarõ (Antenor Nascimento Azevedo)",
    year: 2003,
    type: "libro de autoría indígena tucano (Coleção Narradores Indígenas do Rio Negro, vol. 5, UNIRT/FOIRN)",
    url: "https://acervo.socioambiental.org/sites/default/files/documents/tkl00003.pdf",
    summary:
      "Mitología dictada por el kumu Akuto (Joanico Azevedo) a su hijo y a su nieto. En pp. 143-147 la Anta es «compañera de los Yepá Mahsã» con mucho espíritu y poder: se apropia a escondidas del carozo de luz del umarí, se hace su única dueña, canta en el dabucurí que las semillas que ofrece son «feas y huecas», y Oãkü, convertido en garrapata, la sigue, oye su fanfarronería y le quita la semilla madre, que esconde en la Serra de Acutivaia. La danta aparece como un ser del tiempo de los orígenes que retiene un poder y lo pierde por su propia boca.",
    limitation:
      "Tucano, pero del lado brasileño (medio Tiquié, clan Hausirõ Porã): vecindad de frontera. No es el episodio del pito de Wejké que dictó Marcos Sierra, sino otro episodio con el mismo personaje; sirve para situar a la danta en la mitología tucana, no para completar la escena de Fulop.",
  }),
  fulopNotas1955: source({
    title: "Notas sobre los términos y el sistema de parentesco de los Tukano",
    author: "Marcos Fulop",
    year: 1955,
    type: "artículo etnográfico en revista arbitrada (Revista Colombiana de Antropología 4, pp. 123-164)",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/view/1812",
    summary:
      "Recogido en Guadalajara entre el 11 de junio y el 9 de septiembre de 1954 con los mismos Marcos Sierra (informante) y Manuel Sierra (intérprete), de quienes dice que son del sib patrilineal Urémiri Sáraro de la fratría Yepá Bajuári Majsá. En pp. 146-147 da la lista de los cincuenta sibs de esa fratría «en orden numérico y descendiendo cronológicamente», que es el orden de la salida de Diaojpekowí: Yúpuri Baúro, Yepára Oakajpeá, Yepára Oyé, Yepára Suí, Yepára Merú, Yúpuri Pamó, Doétiro Mimisipé, Urémiri Sáraro, Yúpuri Búbera y el resto, cada uno marcado según viva hoy en Colombia (C), en Brasil (B) o haya desaparecido (+). Convierte los nombres que el mito hace salir con su cargo en los grupos de descendencia reales que en 1954 se trataban por esos términos de parentesco.",
    limitation:
      "Es un estudio de parentesco, no un relato: no narra la salida, la hechura de la mujer ni la canoa. Arrastra la reserva de Fulop —un solo informante, el propio Marcos Sierra— y la lista es la de su sib y su fratría. El PDF es un escaneo sin capa de texto.",
  }),
  brunoBahsariwii2007: source({
    title: "Bahsariwii – A Casa de Danças",
    author: "Gabriel Gentil (con Ana Carla Bruno)",
    year: 2007,
    type: "texto de autoría indígena tucano en revista arbitrada (História, Ciências, Saúde – Manguinhos 14, supl., pp. 213-255)",
    url: "https://www.scielo.br/j/hcsm/a/sC4jD9zZbP9YsNz3thVYYZy/?lang=pt",
    summary:
      "El pajé tucano Gabriel Gentil da gracias a Yepá Õakhë, «nuestro padre creador de los Tukano que emergieron en la superficie de la Tierra», y cuenta que los antepasados «vinieron del Lago de Leche, con la Canoa de Cobra Grande, Pamëri pirõ Yuhkësë, o Canoa de Juruparis», subiendo por varios ríos hasta la cachoeira de Ipanoré en el Vaupés; y que las generaciones Oákahpea y Oyépõrã levantaron luego las malocas del Papurí. Es el Pameriyekése del dictado de 1953 con otra grafía, y dos de los sibs de la salida (Yepára Oakajpeá, Yepára Oyé) con sus malocas en el mismo Papurí donde Fulop recogió el relato.",
    limitation:
      "Tucano del lado brasileño: vecindad de frontera. Es una exégesis personal, mezclada con historias de incas, Andes y aruak, y no un relato transcrito; no trae la hechura de la mujer, el caimo ni la torre de las lenguas.",
  }),
  lamusarquitectura1958: source({
    title: "La arquitectura de los Tukano",
    author: "Luis Raúl Rodríguez Lamus",
    year: 1958,
    type: "artículo etnográfico en revista arbitrada (Revista Colombiana de Antropología 7, pp. 251-270)",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/view/1783",
    summary:
      "Estudio de las malocas del mismo caserío de Guadalajara, sobre el río Paca, donde Fulop recogió la cosmogonía, con el capitán Javier Sierra y su familia como anfitriones. En pp. 262-263 lee la maloca a través del relato de Marcos Sierra: cita que «de Diaopejkowí eran los primeros Tukanos que llegaron aquí» y que su jefe «se llama Yúpuri Bauro»; que Yúpuri Bauro llegó a una maloca y cogió un banquito pintado de todos los colores, a otra y sacó una horqueta para fumar tabaco, a otra y cogió un pedazo de yuca brava; y concluye que «de malocas mitológicas salieron los elementos más importantes de su cultura». Es la única lectura colombiana, casi contemporánea al dictado, del viaje de maloca en maloca como origen de los objetos.",
    limitation:
      "Es un estudio de arquitectura, no de mitología: toma los pasajes de la transcripción de Fulop, no recoge una versión propia. Sirve para ver el relato leído en su propio caserío, no como fuente independiente del episodio. El PDF es un escaneo sin capa de texto.",
  }),
  yupuriFormacao2018: source({
    title: "Formação e transformação de coletivos indígenas do noroeste amazônico: do mito à sociologia das comunidades",
    author: "João Rivelino Rezende Barreto (Yúpuri, tukano del sib Yúpuri Sararó Búbera)",
    year: 2018,
    type: "libro de autoría indígena tucano (EDUA, Colección Reflexividades Indígenas)",
    url: "https://acervo.socioambiental.org/sites/default/files/documents/tkl00010.pdf",
    summary:
      "En pp. 110-120 un antropólogo tucano cuenta la formación de los grupos tucano desde la Canoa de Transformación: los ancestros salen a tierra «siguiendo una fila» en la que el primero en salir ocupa el primer rango y así sucesivamente, y la cachoeira de Ipanoré queda como el lugar donde emergieron. Cita la transcripción de Fulop —los ancestros de los sibs tucano surgieron todos en el Lago de Leche «ya establecidos con sus debidos nombres»— y precisa que los descendientes del grupo de Urémiri Sararó «viven hoy en territorio colombiano», que su apellido es la familia Sierra y que fue con ellos con quienes Fulop hizo su investigación. Es la lectura tucana del propio inventario de nombres que dictó Marcos Sierra.",
    limitation:
      "Del lado brasileño del Vaupés (vecindad de frontera) y escrito desde otro sib; lee a Fulop en la traducción portuguesa de 2009 y no narra la hechura de la mujer, el caimo ni la torre. Agrupa los sibs en «turmas» de hermanos y pone la de Urémiri Sararó en segundo lugar; en la lista numerada de Fulop 1955 Urémiri Sáraro es el decimoctavo: son dos maneras de contar el rango que no se deben mezclar.",
  }),
  menendezLiteratura2014: source({
    title: "Literatura indígena, memória e resistência: a Casa-universo na obra de Gabriel Gentil e Luís Lana",
    author: "Larissa Lacerda Menendez",
    year: 2014,
    type: "artículo en revista arbitrada (Polifonia 21, n. 30, pp. 133-150, UFMT)",
    url: "https://periodicoscientificos.ufmt.br/ojs/index.php/polifonia/article/view/1355",
    summary:
      "Analiza la cosmogonía tucano de Gabriel Gentil y la desana de Luís Lana. Cita en extenso la apertura de «Mito Tukano. Quatro tempos de antiguidades» (Gentil 2000, p. 21): en la oscuridad había una voz, la flauta sagrada; la creadora Ye'pa «primero tenía el cuerpo en forma de viento, invisible», y apareció «en medio de los sonidos musicales, en medio de nube brillante». Explica que con el universo surgieron los truenos en cada punto cardinal. Es el acceso abierto a un texto tucano de primera mano, que no está en abierto, donde el viento es la primera forma del mundo.",
    limitation:
      "Estudio literario de segunda mano sobre autores del lado brasileño (vecindad de frontera); cita a Gentil sin completar la cosmogonía. En Gentil la creadora Yepá es femenina y es la Tierra, mientras en el dictado de Marcos Sierra Yepá Huáke es un hombre que hace aparecer el sol: el nombre coincide, el personaje no.",
  }),
  oliveiraMulheres2024: source({
    title: "Mulheres, manivas e artefatos: corpo, gênero e socialidades no noroeste amazônico",
    author: "Melissa Santana de Oliveira",
    year: 2024,
    type: "artículo etnográfico en revista arbitrada (acceso abierto)",
    url: "https://www.scielo.br/j/bgoeldi/a/RTC3bL7xccVDy6drCzGpmQK/",
    summary:
      "Boletim do Museu Paraense Emílio Goeldi, Ciências Humanas 19(1), 2024. Trabaja con mujeres tukano orientales del Tiquié y toma como referencia el mito tukano del origen de la chagra y de la yuca en la versión de los clanes Hausirõ Porã (Ñahuri y Kumarõ 2003, pp. 83-98): Basebo, «gente-yuca» y dueño de las plantaciones, entrega las estacas primordiales y transfiere a las mujeres la capacidad de cultivar; la chagra nacía limpia y la yuca sin cáscara, y la perfección se pierde porque las mujeres desobedecen sus consejos —miran la chagra cuando aún se quema, entre otras faltas—, de modo que las chagras quedan llenas de maleza y el trabajo femenino se vuelve más duro (pp. 93-94). Es el mismo núcleo que el relato de Marcos Sierra: la yuca como gente, una mirada prohibida y la maleza como condición humana del trabajo.",
    limitation:
      "Bibliografía del lado brasileño (Terra Indígena Alto Rio Negro, río Tiquié): vecindad documentada, no la comunidad de Guadalajara ni la versión de Fulop, a la que no cita. El demiurgo es Basebo, no Yepá Uejkeó; se usa para contrastar, nunca para completar escenas de la ficha.",
  }),
  iphanSistema2019: source({
    title: "Sistema Agrícola Tradicional do Rio Negro (Dossiê Iphan 19)",
    author: "Instituto do Patrimônio Histórico e Artístico Nacional (Iphan), con ACIMRN, ISA y otros",
    year: 2019,
    type: "dossier de registro de patrimonio inmaterial",
    url: "https://bcr.iphan.gov.br/wp-content/uploads/tainacan-items/65968/67260/Sistema-Agricola-Tradicional-do-Rio-Negro_de_dossie_19__sistema_agricola__web___12jul19_.pdf",
    summary:
      "Documenta el sistema de chagra del río Negro, del que forman parte los tukano, con el nombre de cada variedad de yuca, la roza y quema, el desyerbe y el cuidado femenino de la huerta. Transcribe la versión desana del origen de las estacas de yuca en la que Baaribó, enojado con su hijo, esconde cada variedad dentro de un árbol distinto antes de irse (Galvão y Galvão 2004, p. 433), y registra una investigación escolar tukano en curso, de la Associação Escola Indígena Tukano Yepapirõporã, sobre Basebo y la historia del origen de la chagra y de sus cultivos.",
    limitation:
      "Es brasileño y regional: el relato de origen que transcribe es desana —el paralelo Baaribo que ya nombra el campo similitudes—, no tucano de Guadalajara. Sirve de marco etnográfico sobre la yuca como patrimonio vivo; no dice nada de Yepá Uejkeó ni de la versión de Fulop.",
  }),
  bidouTrois1996: source({
    title: "Trois mythes de l'origine du manioc (Nord-Ouest de l'Amazonie)",
    author: "Patrice Bidou",
    year: 1996,
    type: "artículo de análisis mitológico comparado en revista arbitrada",
    url: "https://www.persee.fr/doc/hom_0439-4216_1996_num_36_140_370156",
    summary:
      "L'Homme 36(140), 1996. Analiza tres mitos de origen de la yuca brava de pueblos tukano y arawak del noroeste amazónico —entre ellos la versión desana de Baaribo recogida por Dominique Buchillet en el Tiquié— y propone que su esquema fundador es el de los celos y el intercambio: el alimento lo tiene un dueño cuyo cuerpo es la chagra y se entrega bajo condiciones. Oliveira (2024) lo cita por ese análisis (pp. 65-69) y por la lectura del nombre Baaribo como «yo ser alimento».",
    limitation:
      "Comparativo y del lado brasileño; el paralelo desana de Baaribo es el que ya nombra el campo similitudes, pero no trata la versión de Fulop ni a Yepá Uejkeó. Persée no deja descargar el PDF por curl: se leyó la primera página en el visor de Persée, y el contenido de pp. 65-69 se confirma por la cita de Oliveira (2024).",
  }),
  hughJonesBow1988: source({
    title: "The Gun and the Bow: Myths of White Men and Indians",
    author: "Stephen Hugh-Jones",
    year: 1988,
    type: "artículo de análisis mitológico en revista arbitrada",
    url: "https://www.persee.fr/doc/hom_0439-4216_1988_num_28_106_368974",
    summary:
      "L'Homme 106-107, XXVIII (2-3), pp. 138-155. Estudia cómo los barasana y otros tukano del Vaupés colombiano incorporaron a los blancos, sus bienes y su escritura a la mitología. Resume la versión barasana del mismo episodio (p. 144): el héroe manda bañarse a la gente, el ancestro de los blancos se zambulle primero y sale blanco, el indio tiene miedo del agua y no se baña; luego se ofrecen escopeta, arco y adornos rituales, y el indio escoge el arco. Cita de frente la versión tukano de Fulop 1954 (p. 132, la profecía de la humillación tras la llegada de colombianos y brasileros; p. 131, «aprenderán a leer y escribir y después se acabarán las malocas») y Fulop 1956 (p. 367), y la lista de otras versiones remite a Fulop 1954: 112 y ss. Anota además (p. 146) que los indígenas subrayan la mala memoria de los blancos frente al carácter reflexivo del chamán: es el mismo contraste entre papel y memoria que cierra el reparto de esta ficha.",
    limitation:
      "La versión que narra en detalle es barasana (Pirá-Paraná), no la de Marcos Sierra: vecindad documentada dentro del Vaupés colombiano. Su lectura —la elección del arco como elección de un modo de vida y el fatalismo del mito— es interpretación del autor. Persée no deja descargar el PDF por curl; se leyó página a página en el visor del propio Persée (pp. 138-155).",
  }),
  buchilletContas2002: source({
    title: "Contas de vidro, enfeites de branco e «potes de malária». Epidemiologia e representações de doenças infecciosas entre os Desana do alto Rio Negro",
    author: "Dominique Buchillet, en Bruce Albert y Alcida Rita Ramos (orgs.), Pacificando o branco: cosmologias do contato no norte-amazônico",
    year: 2002,
    type: "capítulo de libro colectivo (edición abierta del IRD)",
    url: "https://horizon.documentation.ird.fr/exl-doc/pleins_textes/divers20-06/010044874.pdf",
    summary:
      "Editora UNESP / Imprensa Oficial / IRD, pp. 113 y ss. Explica que las enfermedades de los blancos se llaman «enfermedades contagiosas de la Gente de la Escopeta» porque la mitología desana, «como la de los demás grupos tukano orientales», liga la identidad del blanco a la adquisición del arma de fuego (pp. 121-122), y recoge mitos —uno de ellos en variante de un narrador tukano del Tiquié— en los que los bienes del ancestro de los blancos y de las primeras mujeres blancas se vuelven sarampión y viruela sólo para los indígenas (pp. 122-123). La introducción de Albert al mismo volumen sitúa el tema: mitos amazónicos sobre por qué un demiurgo atribuyó los objetos de los blancos sólo a ellos, con remisión a Hugh-Jones 1988.",
    limitation:
      "Es desana y del lado brasileño: sirve de contraste para el paralelo desana del blanco con la escopeta que ya nombra el campo similitudes. No trata el baño, el reparto de papeles ni la memoria de Yúpuri Baúro, y no cita a Fulop.",
  }),
  andrelloFalas2010: source({
    title: "Falas, objetos e corpos: autores indígenas no alto rio Negro",
    author: "Geraldo Andrello",
    year: 2010,
    type: "artículo en revista arbitrada (SciELO)",
    url: "https://www.scielo.br/j/rbcsoc/a/MbwQY8nZxJ6M4Kq9LbmQ9dD/?lang=pt",
    summary:
      "Revista Brasileira de Ciências Sociais 25(73), 2010. Analiza por qué clanes tukano y tariano del Uaupés publican hoy sus mitos en libros de la colección Narradores Indígenas do Rio Negro: papel y escritura como objetos nuevos en manos indígenas que actualizan intercambios rituales antes orales. Sitúa expresamente a Fulop (1954) entre los antropólogos que trabajaron con informantes letrados interesados en dejar registrados los mitos tukano, lo que toca de lleno la escena de esta ficha: un relato que opone memoria y cuaderno dictado a un etnógrafo que lo escribe.",
    limitation:
      "No analiza el episodio del baño ni del reparto; trata de la escritura indígena contemporánea, del lado brasileño (Iauaretê). Se cita para el contraste memoria/papel, nunca como fuente de una escena.",
  }),
  azevedoDahsea20032: source({
    title: "Dahsea Hausirõ Porã ukushe wiophesase merã bueri turi. Mitologia sagrada dos Tukano Hausirõ Porã",
    author: "Ñahuri (Miguel Azevedo) y Kumarõ (Antenor Nascimento Azevedo)",
    year: 2003,
    type: "libro de autoría tukano (Coleção Narradores Indígenas do Rio Negro, vol. 5, FOIRN/UNIRT)",
    url: "https://acervo.socioambiental.org/acervo/livros/dahsea-hausiro-pora-ukushe-wiophesase-mera-bueri-turi-mitologia-sagrada-dos-tukano",
    summary:
      "Trae, en el capítulo «Origem da noite / Ñamiri akaro naa miikaro» (pp. 188-191), la versión tukano del mismo episodio: el dueño de la noche se llama Ñamirisota —el Sotá de la ficha— y vive en la serra Ñamiriwi; lo visitan Doetiro, Yupuri y Yepasuria, les entrega una caja con todos los ornamentos de danza, tan pesada que la cargan entre seis con un palo; por curiosidad la abren antes de tiempo, sale una nube oscura, llega la oscuridad con llovizna y temporal, y sólo el menor, que aprendió la ceremonia, deshace los ganchos de la noche y trae el día. Los grillos e insectos que cantan al caer la noche y callan a medianoche están en el relato, como el Namiribejké de Fulop.",
    limitation:
      "Es del lado brasileño (medio Tiquié, São José I) y del sib Hausirõ Porã, no la comunidad de Guadalajara: vecindad documentada. En esta versión los portadores son los hermanos-jefe y no Serítia y Patáro, no hay pepitas del sueño ni reparto en Diawí, y la partida de Yepá Huáke no aparece en el capítulo. La ficha del ISA da el PDF completo (tkl00003.pdf); el portal respondió una vez con error de servidor y a la segunda cargó.",
  }),
  piedadeMusica1997: source({
    title: "Música Ye'pâ-masa: por uma antropologia da música no alto Rio Negro",
    author: "Acácio Tadeu de Camargo Piedade",
    year: 1997,
    type: "disertación de maestría en antropología social (Universidade Federal de Santa Catarina)",
    url: "https://repositorio.ufsc.br/xmlui/handle/123456789/77236",
    summary:
      "En el anexo de mitos, «A origem da noite e do sono» (pp. 166-168 de la numeración impresa), recogido del bayá Euzébio Freitas (Su'egi), cacique de São Pedro: Ye'pâ-Õ'âkihi manda dos mensajeros a buscar la noche al hombre de la noche, que la mete en una caja con todos los bichitos nocturnos y les pide no abrirla en el camino; la caja pesa muchísimo, la abren para ver por qué, salen los bichos, se hace oscuro y llovizna. Luego separa el sueño de la noche: el dueño del sueño, Uâ-masa, vive «numa serra perto de Bogotá», la misma geografía de la cordillera que la ficha da a Sotá. El mismo anexo narra una comida mágica que rejuvenece y hace inmortal a quien la come y que se pierde por un retraso, variante de la prueba fallida del final.",
    limitation:
      "Es del lado brasileño (Uaupés, São Pedro) y de un solo narrador principal; es una tesis de etnomusicología y los mitos van en anexo, sin análisis. En esta versión los mensajeros se vuelven monos y la caja del sueño queda amarrada en el mundo de los muertos: no trae el reparto de las pepitas ni la partida de Yepá. El PDF es un escaneo con OCR imperfecto. El propio Piedade advierte que Fulop trabajó con un único informante.",
  }),
  barretoWaiMahsa2013: source({
    title: "Wai-Mahsã: peixes e humanos. Um ensaio de Antropologia Indígena",
    author: "João Paulo Lima Barreto",
    year: 2013,
    type: "disertación de maestría en antropología social de autor tukano (Yepamahsã), Universidade Federal do Amazonas",
    url: "https://acervo.socioambiental.org/acervo/tesesdissertacoes/wai-mahsa-peixes-e-humanos-um-ensaio-de-antropologia-indigena",
    summary:
      "En el kihti de origen que resume (pp. 56-57), Yepa-oãku y su hermana Yepalio rezan una totuma de ipadu (coca) para la transformación y esperan a que la coman los futuros humanos; en su lugar «apareceram pequenos lagartos e serpentes para comer o ipadu», y los demiurgos concluyen que la gente tendrá vida corta. Es, contada por un autor tukano, la prueba fallida del final de la ficha: la totuma de coca que la gente no come y cuya consecuencia es la muerte.",
    limitation:
      "Es del lado brasileño (São Gabriel da Cachoeira) y resume el kihti sin transcribirlo; no trae la entrega de la noche, la escena de Diawí ni la partida de Yepá. En la edición en libro de 2018 (EDUA, colección Reflexividades Indígenas) el rezo se precisa como «renovação de pele e de órgãos humanos»; la disertación de 2013 dice sólo «bahsesse de transformação». La ficha del ISA da el PDF completo (TKT00003.pdf).",
  }),
  hughJonesorigem2015: source({
    title: "A origem da noite e por que o sol é chamado de «folha de caraná»",
    author: "Stephen Hugh-Jones",
    year: 2015,
    type: "artículo académico (Sociologia & Antropologia, UFRJ, v. 5, n. 3, pp. 659-698)",
    url: "https://www.scielo.br/j/sant/a/PGN6HrRSsC8ybV4QJgjHM6S/?lang=pt",
    summary:
      "Estudio comparado de las historias del origen de la noche en el noroeste amazónico que usa expresamente la versión tukano de Fulop (cita la traducción portuguesa de 2009, «Sem título, p. 46-51 (Tukano)»), además de Azevedo y Azevedo 2003 y Piedade 1997, entre las que guardan la noche en una caja. Da el nombre tukano del Dueño de la Noche y del Sueño, «Ñamiri Sota», y explica que sota es una rana no identificada de ojos grandes y dorados de aspecto soñoliento. Recoge además, citando a Fulop 2009: 49-51, la totuma de coca infestada de criaturas venenosas que los antepasados se negaron a comer —por eso la gente es mortal y las culebras, arañas e insectos cambian de piel— y dice que esa historia está «íntimamente ligada al origen de la noche».",
    limitation:
      "Es comparativo y regional (arawak, tukano y makú, con peso barasana): no reproduce la versión de Marcos Sierra, sólo la cita, y su lectura de la noche como hojas de caraná del techo es interpretación del autor. Lee a Fulop por la traducción portuguesa de Casimiro Beksta (Manaus, EDUA, 2009), no por la edición de 1954.",
  }),
  negroAstronomia: source({
    title: "Astronomia tukano",
    author: "Melissa Oliveira (Programa Rio Negro, ISA)",
    type: "artículo de divulgación en la enciclopedia Povos Indígenas no Brasil (ISA)",
    url: "https://pib.socioambiental.org/pt/Astronomia_tukano",
    summary:
      "Resume, a partir de la investigación de las escuelas tukano del medio Tiquié (AEITY/ACIMET), el mito del origen de la noche: los Pamuri mahsã van a la Ñamiriwi a pedir al Dueño de la Noche, Ñamirisota, la caja de la noche, que es una caja de adornos ceremoniales; la abren antes de lo convenido y sale una nube oscura con llovizna y temporal, y sólo Yepasuria logra deshacer los ganchos de la noche a medianoche. Lo usa para leer la caja de la noche como caja de adornos y relacionarla con las constelaciones.",
    limitation:
      "Es divulgación y del lado brasileño: condensa la versión Hausirõ Porã de 2003, no aporta una versión independiente ni habla de Guadalajara, y la lectura astronómica es de la autora. Sin fecha visible en la página.",
  }),
};

/**
 * Vía por entradas: cada mito declara su propia lista de claves, o de
 * `{ key, summary, limitation }` cuando quiere decir qué aporta esa obra a él
 * en particular. Sustituyó a `pickTucanoSources`, que armaba un reparto fijo de
 * siete con un solo interruptor —el primario— y por eso las siete fichas
 * citaban lo mismo.
 */
export function entradasPropias(...entries) {
  const vistas = new Set();
  const salida = [];
  for (const entrada of entries) {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = tucanoSources[key];
    if (!selected) {
      const visto = typeof entrada === "string" ? entrada : JSON.stringify(entrada);
      throw new Error(`Fuente desconocida en tucano: ${visto}`);
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
