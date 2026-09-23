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

export const desanaSources = {
  lanaLana1995: source({
    title: "Antes o mundo não existia. Mitologia dos antigos Desana-Kẽhíripõrã",
    author: "Umusĩ Pãrõkumu (Firmiano Arantes Lana) y Tõrãmũ Kẽhíri (Luiz Gomes Lana)",
    year: 1995,
    type: "libro de autoría desana, segunda edición",
    url: "https://acervo.socioambiental.org/acervo/livros/antes-o-mundo-nao-existia-mitologia-dos-antigos-desana-kehiripora-2a-ed-rev-ampl",
    summary:
      "El primer volumen de la colección Narradores Indígenas do Rio Negro: la mitología desana dictada por el tuxaua, baya y kumu Umusĩ Pãrõkumu a su hijo Tõrãmũ Kẽhíri, que empezó a escribirla en 1968 sin grabadora, en cuadernos comprados por él. Sostiene las ocho fichas.",
    limitation:
      "Es la versión del clan Kẽhíripõrã, del Tiquié, en Brasil: una versión de clan, no la doctrina del pueblo desana, y del otro lado de la frontera. La reedición de 2019 cambió deliberadamente varios términos, así que no es intercambiable con esta.",
  }),
  dantes2019: source({
    title: "Antes o mundo não existia (reedición)",
    author: "Umusĩ Pãrõkumu y Tõrãmũ Kẽhíri",
    year: 2019,
    type: "reedición con revisión de terminología",
    url: "https://dantes.com.br/produto/antes-o-mundo-nao-existia/",
    summary:
      "La edición viva de la obra, con PDF gratuito en el sitio de la editorial.",
    limitation:
      "Su prólogo lista las sustituciones de vocabulario respecto de la edición de 1995 —firmamento por céu, demiurgo por espírito, navio por canoa—, de modo que no sirve para citar pasajes de aquella.",
  }),
  diakuruKisibi1996: source({
    title: "A mitologia sagrada dos antigos Desana do grupo Wari Dihputiro Põrã",
    author: "Diakuru (Américo Castro Fernandes) y Kisibi (Dorvalino Moura Fernandes)",
    year: 1996,
    type: "libro de autoría desana",
    url: "https://acervo.socioambiental.org/acervo/livros/mitologia-sagrada-dos-antigos-desana-do-grupo-wari-dihputiro-pora",
    summary:
      "La versión del clan Wari Dihputiro Põrã, escrita en Cucura a lo largo de cinco años, con borradores retraducidos al desana para que el padre los corrigiera.",
    limitation:
      "Es otra versión de clan y difiere de la de los Kẽhíripõrã en episodios enteros: no se funden.",
  }),
  galvao2004: source({
    title: "Livro dos antigos Desana-Guahari Diputiro Porã",
    author: "Tõrãmũ Bayaru (Wenceslau Sampaio Galvão) y Guahari Ye Ni (Raimundo Castro Galvão)",
    year: 2004,
    type: "libro de autoría desana",
    url: "https://acervo.socioambiental.org/acervo/livros/livro-dos-antigos-desana-guahari-diputiro-por%C3%A3",
    summary:
      "La versión del clan Guahari Diputiro Porã, del medio Papurí, en casi setecientas páginas. Es donde Miriá Porã Masü mata tres turmas de iniciados y por eso fracasan los tres primeros intentos de poblar el mundo.",
    limitation:
      "Tercera versión de clan, con su propio reparto de episodios; tampoco se funde con las otras dos.",
  }),
  amazonianCosmos1971: source({
    title: "Amazonian Cosmos. The Sexual and Religious Symbolism of the Tukano Indians",
    author: "Gerardo Reichel-Dolmatoff",
    year: 1971,
    type: "monografía etnográfica",
    url: "https://lccn.loc.gov/73133491",
    summary:
      "La obra que dio a conocer la cosmología desana fuera de Colombia. Se hizo en una oficina de Bogotá, en seis meses de sesiones con Antonio Guzmán, desana del sib semé-peyáru-porá del Macú-paraná.",
    limitation:
      "Antonio Guzmán figura como informante y asistente de investigación, nunca como coautor. El enlace es el registro de la Library of Congress: la editorial descatalogó el título y no tiene página, y las copias con texto que circulan están en repositorios que alojan obra en derechos sin licencia declarada.",
  }),
  bruzzi1994: source({
    title: "Crenças e lendas do Uaupés",
    author: "Alcionilio Brüzzi Alves da Silva",
    year: 1994,
    type: "compilación misionera de tradición oral",
    url: "https://www.documentation.ird.fr/hor/fdi:010020940",
    summary:
      "Recopilación salesiana de creencias y leyendas del Uaupés, útil para cotejar episodios entre pueblos del alto río Negro.",
    limitation:
      "Es obra de un misionero y del lado brasileño: vecindad documentada, no fuente desana de primera mano.",
  }),
  ribeiro1994: source({
    title: "Desana Mythology: Oral Indigenous Literature",
    author: "Berta G. Ribeiro",
    year: 1994,
    type: "artículo académico",
    url: "https://doi.org/10.1080/08873267.1994.9976945",
    summary:
      "Presentación en inglés del libro de los Lana, traducida por Stanley Krippner, con el relato de cómo se preparó aquella primera edición.",
    limitation:
      "Es un artículo de revista, no un libro, y habla sobre la obra de los Lana más que sobre la mitología misma.",
  }),
  beksta1988: source({
    title: "A maloca tukano-dessana e seu simbolismo",
    author: "Casimiro Béksta",
    year: 1988,
    type: "estudio etnográfico",
    url: "http://www.etnolinguistica.org/biblio:beksta-1988-maloca",
    summary:
      "Estudio de la maloca tukano-desana y de su simbolismo espacial, con el que se leen las casas y los recorridos que nombran los relatos.",
    limitation:
      "La ficha está completa y curada, pero la descarga del PDF falla; y es material de contexto, no narración.",
  }),
  desanaTexts1989: source({
    title: "Desana Texts and Contexts. Origin Myths and Tales of a Tukanoan Tribe of the Colombian Northwest Amazon",
    author: "Gerardo Reichel-Dolmatoff",
    year: 1989,
    type: "colección de textos con narradores acreditados",
    url: "https://lccn.loc.gov/95102090",
    summary:
      "La mejor fuente del lado colombiano: relatos del bajo Papurí y de Mitú con sus kumua acreditados, entre ellos Torame, que había visto a los misioneros de Montfort quemar los objetos sagrados de su pueblo.",
    limitation:
      "No existe ninguna copia legítima en línea: el editor austríaco no tiene presencia digital y lo que circula son archivos personales. El enlace es el registro de la Library of Congress; la lectura se hizo sobre el ejemplar digitalizado que hay en el expediente.",
  }),
  geografiaChamanistica: source({
    title: "Algunos conceptos de geografía chamanística de los indios Desana de Colombia",
    author: "Gerardo Reichel-Dolmatoff",
    year: 1981,
    type: "capítulo de libro",
    url: "http://www.etnolinguistica.org/biblio:reichel-1981-algunos",
    summary:
      "Sobre cómo los desana leen el territorio: los lugares del relato como puntos de una geografía que el chamán recorre.",
    limitation:
      "Capítulo de un homenaje académico; el volumen anfitrión no está digitalizado en ningún repositorio universitario.",
  }),

  // ——— Búsqueda profunda 2026-09-22 ———
  fernandesBueri2006: source({
    title: "Bueri Kãdiri Marĩriye. Os ensinamentos que não se esquecem",
    author: "Diakuru (Américo Castro Fernandes) y Kisibi (Dorvalino Moura Fernandes)",
    year: 2006,
    type: "libro de autoría desana (Coleção Narradores Indígenas do Rio Negro, vol. 8)",
    url: "https://acervo.socioambiental.org/sites/default/files/documents/DSL00003.pdf",
    summary:
      "Corrobora la cadena del episodio desde otro clan: la flauta de hueso masá pore gõã se hizo con el hueso de la pierna del Águia-rei que los Diroá mataron en la maloca de la abuela Micura (la chucha), a pedido de la abuela del Inambu-rei, 'muerto y devorado por los gavilanes en represalia por la muerte de Micura' (remite a 'Os Diroá matam os gaviões da avó Micura', 1996, pp. 118-122). Además fija el 'verão do umari' (mu weri bohori) en el calendario desana y describe el dabucuri de frutas del monte, con el umarí a la cabeza.",
    limitation:
      "Es del lado brasileño y es la voz del clan Wari Dihputiro Põrã de Cucura, no la del Kẽhíripõrã que narra la ficha. No es otra versión del mito sino el libro de enseñanzas —calendario, dabucuris, historia de los clanes— que remite a su volumen de 1996. Al personaje lo llama Inambu-rei, no Ãgãmahsãpu, y cuenta sólo la consecuencia (la venganza y la flauta), no el cortejo.",
  }),
  lanaChuvas1987: source({
    title: "Chuvas e constelações: calendário econômico dos índios Desana",
    author: "Tolaman Kenhíri (Luiz Gomes Lana) y Berta G. Ribeiro",
    year: 1987,
    type: "artículo de divulgación (Ciência Hoje; reeditado por Ciência & Cultura, 2024)",
    url: "https://revistacienciaecultura.org.br/?artigos=chuvas-e-constelacoes",
    summary:
      "El calendario de lluvias y constelaciones del Tiquié escrito por el mismo Luiz Lana que transcribió el capítulo: la cosecha del umarí (Poraqueiba sericea) madura a mediados de marzo y termina con la lluvia de la 'Barba del mentón del jaguar' en abril, y en mayo aparece la constelación 'Cuia con pulpa de umarí sobre soporte' (kái saninó). Nombra también el igarapé Umari del Tiquié.",
    limitation:
      "No narra el mito: es el contexto calendárico del umarí que la ficha dice implícito. Del lado brasileño. La reedición de Ciência & Cultura fecha el original en 1991; el libro de los Lana de 1995 lo cita como Ciência Hoje v. 6, n.º 36, 1987 — hay que cotejar el año.",
  }),
  buchilletMaladie1983: source({
    title: "Maladie et mémoire des origines chez les Desana du Uaupès: conceptions de la maladie et de la thérapeutique d'une société amazonienne",
    author: "Dominique Buchillet",
    year: 1983,
    type: "tesis doctoral en etnología (Université de Paris X-Nanterre)",
    url: "https://horizon.documentation.ird.fr/exl-doc/pleins_textes/pleins_textes_7/carton04/15520.pdf",
    summary:
      "Transcribe en su anexo el mito M.3, 'Histoire de Tinamou, Serpent et Sarigue', del clan Kisibi: Ãgãbogi, el inambú, va a beber a la casa de Serpiente (Bose) con su primo Oa, la chucha; hay dos hermanas; la abuela de Oa recoge la sangre de su nieto muerto y paga con un collar de dientes de jaguar a las águilas arpías para vengarlo; en el baño, las dos hermanas insisten en que cante, él cede y las arpías lo atrapan. Muestra además que los kumua usan ese pasaje en rezos para enviar sueños.",
    limitation:
      "Es del lado brasileño: campo de doce meses (1980-1981) con dos clanes desana del Tiquié y del igarapé Umari, el de Tolaman Kenhíri y el Kisibi; los mitos transcritos en el anexo son del clan Kisibi, no del Kẽhíripõrã. Texto completo en el repositorio del IRD (ficha: https://www.documentation.ird.fr/hor/fdi:15520); el escaneo tiene errores de OCR. Es una tesis sobre enfermedad y terapéutica, no una colección de mitos. En esta versión el padre de las muchachas es Serpiente y el héroe se llama Ãgãbogi, no Ãgãmahsãpu; no trae la ceremonia del umarí.",
  }),
  andrellohumanidade2022: source({
    title: "A humanidade e seu(s) gênero(s): mito, parentesco e diferença no noroeste amazônico",
    author: "Geraldo Andrello y João Vianna",
    year: 2022,
    type: "artículo académico (Revista de Antropologia, USP)",
    url: "https://revistas.usp.br/ra/article/view/192786",
    summary:
      "Analiza los relatos de origen de la humanidad del noroeste amazónico comparando explícitamente las tres colecciones desana (Pãrõkumu y Kẽhíri 1995, Diakuru y Kisibi 1996, Bayaru y Ye Ni 2004): la cobra-canoa (pamiri-yukese) que gesta la humanidad desde el Lago de Leche por el Amazonas, el Negro y el Uaupés, las casas de transformación y el nacimiento en la cachoeira de Ipanoré; y la 'gente-piedra' anterior a la canoa.",
    limitation:
      "Es del lado brasileño y es comparativo: lee juntos relatos desana, tukano y baniwa, así que no todo lo que dice de la canoa es desana. Es un artículo, no un libro.",
  }),
  angeloLivros2020: source({
    title: "Livros e Dabucuris. Continuidades e transformações nas formas de atualizações de diferenças entre os grupos Desana do Alto Rio Negro",
    author: "Samir Ricardo Figalli de Angelo",
    year: 2020,
    type: "artículo académico (Revista de Antropologia, USP)",
    url: "https://revistas.usp.br/ra/article/view/169173",
    summary:
      "Estudia la colección Narradores Indígenas do Rio Negro entre los grupos desana: describe el patrón común de los libros —el barco de transformación o cobra-canoa desde el Lago de Leche, las Casas de Transformación y el desembarco en Ipanoré—, cita el pasaje de Pãrõkumu y Kẽhíri (1995: 40) del orden de salida con el Blanco y el Padre con el libro, y explica que nadie discute la posición de Boreka como primer ancestro mítico desana.",
    limitation:
      "Es del lado brasileño y trata de cómo los libros se usan en la jerarquía entre grupos desana, no narra el mito entero. Es un artículo.",
  }),
  freireTradicao1992: source({
    title: "Tradição oral e memória indígena: a canoa do tempo",
    author: "José Ribamar Bessa Freire",
    year: 1992,
    type: "ensayo académico (versión revisada de 2008)",
    url: "https://biblioteca.funai.gov.br/media/pdf/Folheto65/FO-CX-65-4274-2011.PDF",
    summary:
      "Dedica un apartado ('Fontes amazônicas: a canoa da transformação') al relato desana de los Lana: cita el pasaje de la salida del Blanco con la escopeta, resume el viaje de la canoa por el Amazonas, el Negro y el Uaupés con sus casas de transformación y el desembarco entre las cachoeiras de Ipanoré, donde se diferencian blancos e indios, y lee la figura del Padre misionero.",
    limitation:
      "Cita la primera edición de 1980 (p. 74), no la de 1995. Es un ensayo sobre tradición oral en general, con la canoa desana como uno de sus ejemplos; publicado originalmente en un coloquio de la UERJ (Imago, 1992) y alojado en la biblioteca de la FUNAI. Del lado brasileño.",
  }),
  kehiriNosso1993: source({
    title: "“Nosso saber não está nos livros!”",
    author: "Luiz Gomes Lana (Tõrãmũ Kẽhíri), con comentario de Dominique Buchillet («Entre a bíblia e a espingarda: imagem desana do homem branco»)",
    year: 1993,
    type: "testimonio indígena publicado en la enciclopedia Povos Indígenas no Brasil (ISA)",
    url: "https://pib.socioambiental.org/pt/%22Nosso_saber_n%C3%A3o_est%C3%A1_nos_livros!%22",
    summary:
      "El mismo escritor del libro Kẽhíripõrã cuenta con su voz el final del viaje: cuando Pamiri-gasiru, la Canoa de Transformación, llegó a Diá-peragobe wi'í, la cachoeira de Ipanoré, los ancestros ya con forma humana salieron por el hueco; el ancestro de los blancos, el último, fue enviado al sur por Yebá-gõãmi. Buchillet explica a continuación esa imagen desana del blanco entre la biblia y la escopeta.",
    limitation:
      "Es del lado brasileño y es un testimonio breve, recogido en portugués en Brasilia en 1992 y publicado primero en francés en Ethnies (1993, n.º 14); cubre sólo la salida en Ipanoré y el reparto entre indios y blancos, no la creación.",
  }),
  hughJonesDesana: source({
    title: "Desana (verbete de Povos Indígenas no Brasil)",
    author: "Stephen Hugh-Jones y Aloisio Cabalzar",
    type: "entrada de enciclopedia institucional (Instituto Socioambiental)",
    url: "https://pib.socioambiental.org/pt/Povo:Desana",
    summary:
      "Resume el mito de origen clave de los pueblos del Uaupés: una Anaconda ancestral entra al universo-casa por la 'puerta del agua' del este y sube el Negro y el Uaupés con los ancestros de toda la humanidad dentro, primero como adornos de plumas, transformados en gente durante el viaje, hasta emerger por un hueco en la roca en Ipanoré, 'el centro del universo', y repartirse a sus territorios. Explica también la maloca como cuerpo-canoa del ancestro anaconda.",
    limitation:
      "Es del lado brasileño y es una entrada compartida de los pueblos tukano orientales, no una ficha sólo desana: el mito se da en su forma general, sin los nombres propios de la versión Kẽhíripõrã. Sin fecha de redacción visible.",
  }),
  bidouTrois1996: source({
    title: "Trois mythes de l'origine du manioc (Nord-Ouest de l'Amazonie)",
    author: "Patrice Bidou",
    year: 1996,
    type: "artículo académico (L'Homme 36, n.º 140, pp. 63-79)",
    url: "https://www.persee.fr/doc/hom_0439-4216_1996_num_36_140_370156",
    summary:
      "Interpreta tres mitos del origen de la yuca brava del noroeste amazónico; el primero es el desana del Tiquié recogido por Dominique Buchillet. Lee el cuerpo de Baribo como la chagra misma —la quema de su cuerpo y sus adornos es la quema de la roza— y su nombre como 'yo ser alimento'; el esquema de fondo, dice, es los celos y el intercambio que separa sexos, generaciones y afines.",
    limitation:
      "Es del lado brasileño y trabaja sobre la versión de Buchillet, no sobre el capítulo de los Lana; es comparativo (tukano y arawak) y es un artículo. Persée bloquea la descarga del PDF por curl: se leyó la primera página y el análisis de pp. 65-69 está confirmado por la cita de Oliveira (2023).",
  }),
  oliveiraMulheres2023: source({
    title: "Mulheres, manivas e artefatos: corpo, gênero e socialidades no noroeste amazônico",
    author: "Melissa Santana de Oliveira",
    year: 2023,
    type: "artículo académico (Boletim do Museu Paraense Emílio Goeldi. Ciências Humanas)",
    url: "https://www.scielo.br/j/bgoeldi/a/RTC3bL7xccVDy6drCzGpmQK/",
    summary:
      "Recoge, con mujeres tukano orientales del Tiquié, la figura del demiurgo cuyo cuerpo está hecho de manivas y da origen a las 'manivas-jefe'; resume la lectura de Bidou de la versión desana —quema del cuerpo y los adornos de Baribo igual a quema de la chagra— y el nombre Baaribo como 'el que tiene comida en abundancia', dueño de las rozas.",
    limitation:
      "Es del lado brasileño y su trabajo de campo es sobre mujeres tukano orientales en general, no sólo desana; la parte desana es de segunda mano (Bidou). Es un artículo.",
  }),
  buchilletInterpretacao1988: source({
    title: "Interpretação da doença e simbolismo ecológico entre os índios Desana",
    author: "Dominique Buchillet",
    year: 1988,
    type: "artículo académico (Boletim do Museu Paraense Emílio Goeldi, Sér. Antropologia 4 (1), pp. 27-42)",
    url: "https://horizon.documentation.ird.fr/exl-doc/pleins_textes/pleins_textes_5/b_fdi_20-21/26706.pdf",
    summary:
      "Desde la etnografía desana del Tiquié explica que las plantas silvestres y cultivadas, alimenticias y medicinales 'nacieron de las cenizas de los huesos del maestro de la comida, Baaribo', y que de ahí les viene el calor residual que causa fiebres y dolores si no se tratan con rezo: el cuerpo de Baaribo como origen de las plantas, leído desde la medicina.",
    limitation:
      "Es del lado brasileño; no narra el mito, lo usa para explicar la teoría desana de la enfermedad. Copia en texto completo del repositorio del IRD, la institución de la autora; el escaneo tiene errores de OCR.",
  }),
  coordSistema2019: source({
    title: "Sistema Agrícola Tradicional do Rio Negro (Dossiê Iphan 19)",
    author: "Laure Emperaire (coord.), Lúcia van Velthem, Manuela Carneiro da Cunha, Esther Katz y otros",
    year: 2019,
    type: "dossier de registro de patrimonio inmaterial (IPHAN)",
    url: "https://bcr.iphan.gov.br/wp-content/uploads/tainacan-items/65968/67260/Sistema-Agricola-Tradicional-do-Rio-Negro_de_dossie_19__sistema_agricola__web___12jul19_.pdf",
    summary:
      "Su capítulo 'Narrativas míticas do Rio Negro' pone la agricultura en el mito: la aparición de 'la primera roza redonda, como las de hoy', las manivas salidas del cuerpo de Baaribó, dueño de la alimentación, que no pueden maltratarse ni quemarse, y la entrega de todas las plantas a las mujeres; cita la 'História de Baaribó' del libro desana Guahari Diputiro Porã (Galvão y Galvão 2004, p. 421 y ss.).",
    limitation:
      "Es del lado brasileño y regional: trata a Baaribó como 'demiurgo tukano' y mezcla versiones de varios pueblos del río Negro. Sigue la versión Guahari (2004), no la Kẽhíripõrã de la ficha.",
  }),
  fernandesBueri20062: source({
    title: "Bueri kãdiri marĩriye. Os ensinamentos que não se esquecem",
    author: "Diakuru (Américo Castro Fernandes) y Kisibi (Dorvalino Moura Fernandes)",
    year: 2006,
    type: "libro de autoría desana (Coleção Narradores Indígenas do Rio Negro, vol. 8)",
    url: "https://acervo.socioambiental.org/acervo/livros/bueri-kadiri-maririye-os-ensinamentos-que-nao-se-esquecem",
    summary:
      "En el capítulo de los dabucuris, cuenta que Busari Gõãmu ofreció a Ñamirĩ Masú, el Dueño de la Noche, un dabucuri de tabaco para vengarse de él por haberle entregado «la maleta de la noche», tan pesada que los Umurĩ Masá se quedaron a oscuras a mitad de camino; el cigarro rezado le dio a Ñamirĩ una diarrea que casi lo mata. Remite en nota a los capítulos «Os Umurĩ Mahsã procuram a noite» y «Ñamirĩ visita os seus cunhados» del libro de 1996 (pp. 93-103).",
    limitation:
      "Es del lado brasileño (Tiquié) y del clan Wari/Wahari Diputiro Porã, no del Kẽhíripõrã que narra la ficha; trae una secuela del episodio (la venganza de Busari Gõãmu contra Ñamirĩ), no el relato completo, y en ella el que recibe la maleta es Busari Gõãmu, no Yebá Gõãmü. La página del ISA da el PDF completo (DSL00003.pdf).",
  }),
  hughJonesorigem2015: source({
    title: "A origem da noite e por que o sol é chamado de «folha de caraná»",
    author: "Stephen Hugh-Jones",
    year: 2015,
    type: "artículo académico (Sociologia & Antropologia, UFRJ, v. 5, n. 3, pp. 659-698)",
    url: "https://www.scielo.br/j/sant/a/PGN6HrRSsC8ybV4QJgjHM6S/?lang=pt",
    summary:
      "Estudio comparado de las historias del origen de la noche en el noroeste amazónico, entre ellas las desana: cita expresamente a Lana y Lana (1980), Fernandes y Fernandes (1996) y Galvão y Galvão (2004). Recoge los rasgos que la ficha narra —el Dueño de la Noche llamado «Noche» o «Noches», su cuerpo hecho de noche y de día, el sueño profundo del que se le despierta poniéndole un tiesto de olla caliente en el pecho, el recipiente que no debe abrirse antes de tiempo, los grillos que se escapan— y el detalle del libro de 1996 en que la hoja bajo la que se abrigaron los antepasados decide si el pelo de cada pueblo es liso o ensortijado. Propone que la caja de plumas es una maloca y que la noche llega con las hojas de caraná del techo.",
    limitation:
      "Es comparativo y regional (arawak, tukano y makú, con peso barasana): trata el motivo en todo el noroeste amazónico, no reproduce ninguna versión desana completa, y su lectura de la noche como hojas de caraná es interpretación del autor. Las versiones desana que usa son las del lado brasileño.",
  }),
  buchilletMaladie19832: source({
    title: "Maladie et mémoire des origines chez les Desana du Uaupès. Conceptions de la maladie et de la thérapeutique d'une société amazonienne",
    author: "Dominique Buchillet",
    year: 1983,
    type: "tesis doctoral (Université de Paris X-Nanterre)",
    url: "https://www.documentation.ird.fr/hor/fdi:15520",
    summary:
      "Transcribe y analiza como M.1 un mito de origen de la noche recogido por la autora: al principio sólo había día, los desana agotaban la comida sin descanso y mandaron a tres hermanos donde el Maestro-de-la-Noche; éste pasó una noche entera empujando una maleta con el pie y diciendo las palabras; los dos mayores se durmieron y sólo el menor, Birupu-kuiru («Birupu el de ojo grande»), aprendió gestos y palabras. De vuelta, el mayor abrió la maleta contra la advertencia —sólo debía abrirse el día en que las mujeres tuvieran caxiri y estuvieran pintadas de negro—, escaparon insectos y aves nocturnos y todo quedó a oscuras; el menor rehízo el rito en orden y volvió el día. Añade que, abierta a tiempo, las aves se habrían vuelto adornos de plumas, y lee al menor como dueño de la periodicidad cósmica.",
    limitation:
      "Es una versión recogida en el lado brasileño y de clan no identificado en el pasaje, distinta de la Kẽhíripõrã de la ficha: van tres hermanos, no Yebá Gõãmü con los Umukomahsã, y el mito cierra con los adornos de plumas. Es una tesis sobre enfermedad y terapéutica; el mito se usa para hablar del saber chamánico. El registro del IRD da el PDF escaneado completo, con OCR imperfecto.",
  }),
  saHistorias2020: source({
    title: "Histórias sem fim: perspectivismo e forma narrativa na literatura indígena da Amazônia",
    author: "Lúcia Sá",
    year: 2020,
    type: "artículo académico (Itinerários, UNESP, n. 51, pp. 157-178)",
    url: "https://periodicos.fclar.unesp.br/itinerarios/article/view/14702",
    summary:
      "Uno de sus tres objetos de análisis es «O mito de Gãipayã e a origem da pupunha» de Antes o mundo não existia. Resume el relato —el solitario Gãipayã, la esposa-culebra con pirañas, la visita a la aldea del suegro bajo el río, las tareas imposibles, el robo de la semilla de pupunha— y lo lee como una versión de la misma historia que «La visita al cielo» pemon de Koch-Grünberg (el yerno del urubú que roba el maíz). Cita el pasaje en que Pirõ pregunta qué come el yerno y le ofrece un viejo sirviente maku, y lo interpreta con el perspectivismo de Viveiros de Castro: lo que Gãipayã ve como pescado, los suegros lo ven como gente.",
    limitation:
      "Es un artículo de crítica literaria, no etnografía, y lee el libro de los Lana (edición de 1980), del lado brasileño; el paralelo pemon que propone no está nombrado en las Similitudes de la ficha. Atribuye por error a «Koch-Grünberg, 2002» las citas del texto desana. Cita episodios que la ficha no narra (el sirviente maku, los enemigos que Gãipayã lleva para alimentar al suegro, la humillación final del suegro).",
  }),
  kramerCosmologia1982: source({
    title: "Cosmología desâna: una comparación",
    author: "Ana María Gorosito Kramer",
    year: 1982,
    type: "artículo académico (Anuário Antropológico, v. 6, n. 1, Universidade de Brasília)",
    url: "https://periodicos.unb.br/index.php/anuarioantropologico/article/view/6187",
    summary:
      "Resume y analiza el episodio sobre la primera edición del libro de los Lana (1980), donde el personaje se escribe «Guelamún Yé» y se le llama «nieto del trueno» y «el pajé ancestral de las flautas sagradas»: la gente transformadora hace fumar y mascar ipadu a las dos mujeres para crear las flautas; Boléka les abre el paso del parto con la horquilla del cigarro y lleva al niño, cuyo llanto oye la madre, a la casa del tercer hombre-trueno; Guelamún baja adulto el día del azote, su cuerpo suena, vigila el ayuno de los ngamá (frutas sí, nada asado), baja del árbol atraído por el olor, abre el ano para que entren a guarecerse de la lluvia y sube con ellos en la barriga; los padres lo atraen con un ardid, él les dice cómo quemarlo, el fuego pasa de sus adornos a la humanidad, que luego resurge, y brota la paxiúba, que es su hueso. Lo lee como un «anti-creador» y un parto invertido.",
    limitation:
      "Lee la edición de 1980 (lado brasileño, clan Kẽhíripõrã), con la ortografía de Berta Ribeiro, distinta de la de 1995 que sigue la ficha; es análisis estructural, no etnografía de campo. En su resumen la que queda encinta de Guelamún es la mujer que fuma el cigarro, y el niño va a la casa del tercer trueno, no a la del Abuelo del Mundo. La misma URL se propone para la ficha «yurupari», con otro resumen.",
  }),
  barrosKapiwaya2012: source({
    title: "O Kapiwayá e seu lugar no universo músico-coreográfico-ritual em um clã Desana, alto rio Negro, Amazonas",
    author: "Líliam Cristina da Silva Barros",
    year: 2012,
    type: "artículo académico (Boletim do Museu Paraense Emílio Goeldi. Ciências Humanas, v. 7, n. 2, pp. 509-523)",
    url: "https://www.scielo.br/j/bgoeldi/a/QYy5kYbt9hgksLxPpc3t4nG/?lang=pt",
    summary:
      "Resume, según el bayá Raimundo Galvão del clan Guahari Diputiro Porã, el episodio de la ficha: Abe prepara caxiri y llama a Miriá Porã Masú a enseñar la música de las flautas; dos intentos de iniciación terminan con la muerte de los niños; en el tercero los muchachos asan fruto de uacú, el humo marea a Miriá Porã Masú, que cae del árbol desde donde los espiaba y los encierra dentro de su cuerpo; decía que sólo moría por el fuego. Escapan Ditiro, que cuenta todo al padre, y Gãe, que sale de la barriga convertido en periquito; lo emborrachan de caxiri y lo tumban al fuego, y donde su cuerpo se deshizo en cenizas brotaron las paxiúbas de las flautas, que sonaban solas como su cuerpo perforado.",
    limitation:
      "Es la versión del clan Guahari Diputiro Porã, del lado brasileño (São Gabriel da Cachoeira y el Papurí), que la ficha trata en Versiones; no la Kẽhíripõrã del relato principal, y el personaje no se llama Guramüye. Es un artículo de etnomusicología: el mito es el punto de partida para describir un repertorio de cantos, y lo resume en un párrafo.",
  }),
  barrosResena2015: source({
    title: "Reseña de Mello, Glaucia Buratto (2013), «Yurupari: o dono das flautas sagradas do Rio Negro. Mitologia e simbolismo»",
    author: "Líliam Barros",
    year: 2015,
    type: "reseña académica (El oído pensante, UBA, v. 3, n. 1)",
    url: "https://revistascientificas.filo.uba.ar/index.php/oidopensante/article/view/7458",
    summary:
      "Reseña el libro de Mello, que analiza las versiones desana y baniwa del mito del dueño de las flautas y privilegia la del clan Guahari Diputiro Porã: Miriá Porã Masú, «también conocido como Gurumuyé», entidad musical que humaniza y mata, destruye a las primeras generaciones de iniciados y muere; de las cenizas de su cuerpo sale la palma paxiúba, cuyas partes se entregan a los antepasados y dan las flautas de la iniciación masculina, que luego pasan a Kisibi y le roban las mujeres.",
    limitation:
      "Es una reseña, no el libro, y resume el mito en un párrafo; la versión que sigue es la Guahari Diputiro Porã, del lado brasileño, no la Kẽhíripõrã del relato principal. La misma URL se propone para la ficha «yurupari», con otro resumen.",
  }),
  hughJonesDesana2002: source({
    title: "Desana (Povos Indígenas no Brasil)",
    author: "Stephen Hugh-Jones y Aloisio Cabalzar (Instituto Socioambiental)",
    year: 2002,
    type: "enciclopedia institucional de pueblos indígenas",
    url: "https://pib.socioambiental.org/pt/Povo:Desana",
    summary:
      "Explica los dos lugares cósmicos de que depende el episodio de la creciente: el universo es una maloca cuyos esteios son las montañas, y su puerta del oriente, la de los hombres, es la «porta da água» por la que entró la anaconda ancestral. Es la cosmología que el relato usa cuando Sëpïrõ tapa con la cola la Puerta de las Aguas y cuando las cuatro montañas que no se hundieron quedan como pilares del cielo.",
    limitation:
      "No narra ni menciona los cataclismos: es contexto cosmológico, no fuente del relato. Síntesis regional tukano oriental firmada por un especialista en los barasana, del lado brasileño.",
  }),
  barrosMusic2015: source({
    title: "Music, Ritual and Cosmology of the Desana and Baniwa People of the Upper Rio Negro, Amazon, Brazil: a Collaborative Research",
    author: "Líliam Barros y Robin M. Wright",
    year: 2015,
    type: "artículo académico (El oído pensante, vol. 3, n.º 2, Universidad de Buenos Aires)",
    url: "https://revistascientificas.filo.uba.ar/index.php/oidopensante/article/view/7462",
    summary:
      "Trae un apartado «The Myth of the Sacred Flutes» con la versión Guahari Diputiro Porã contada por el bayá: tras la muerte de Miriá Porã Masü en el fuego brota la paxiúba; Abe prepara la iniciación de su hijo Kisibi, que debe vomitar de madrugada en el puerto; las mujeres descubren las flautas escondidas en el fondo de un caño; los peces wai-mahsã se niegan a enseñarles al verlas, hasta que obligan al jandiá; Kisibi y su primo Deyubari Gõãmu las persiguen, se hacen invisibles y recuperan las flautas sĩmiomĩ y porerõ.",
    limitation:
      "Versión del clan Guahari Diputiro Porã (Papurí brasileño, hoy en Iauaretê), basada en el libro de los Galvão y en entrevistas con el bayá; la mitad del artículo es baniwa (Kuwai), que es otro pueblo, de lengua arawak. Lado brasileño. La ficha narra la versión Kẽhíripõrã del Tiquié, donde enseña el aracú y no el jandiá.",
  }),
  silvaAnalogia2004: source({
    title: "Analogía, mito y ritual: perspectivas sobre el Yuruparí",
    author: "Carlos Luis Del Cairo Silva",
    year: 2004,
    type: "artículo académico (Virajes. Revista de Antropología y Sociología, Universidad de Caldas)",
    url: "https://revistasojs.ucaldas.edu.co/index.php/virajes/article/view/6272",
    summary:
      "Tiene un apartado «El mito del Yuruparí entre los desana (según Reichel-Dolmatoff)»: el Sol viola a su hija, un insecto testigo hace la primera flauta sagrada para denunciar el crimen, una mujer toma las flautas escondidas y seduce a los hombres de su misma fratría, y sólo tras castigos sobrenaturales las flautas vuelven a los hombres. Anota además que la flauta se llama miriá-porá en desana y discute la etimología de «yuruparí».",
    limitation:
      "Resume de segunda mano la versión desana colombiana de Reichel-Dolmatoff (edición francesa de 1973), que es otra que la Kẽhíripõrã narrada en la ficha; la otra mitad del apartado es la versión barasana de Hugh-Jones, que es de otro pueblo. Es un artículo de síntesis interpretativa, no una recolección.",
  }),
};

/**
 * Acepta una clave suelta o una clave con resumen y límite propios del mito.
 */
export function pickDesanaSources(...entries) {
  const vistas = new Set();
  const salida = [];
  for (const entrada of entries) {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = desanaSources[key];
    if (!selected) {
      const visto = typeof entrada === "string" ? entrada : JSON.stringify(entrada);
      throw new Error(`Fuente Desana desconocida: ${visto}`);
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
