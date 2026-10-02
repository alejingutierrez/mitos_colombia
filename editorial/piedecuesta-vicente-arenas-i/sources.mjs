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

export const piedecuestaVicenteArenasISources = {
  perezBookFullText: source({
    title: "Literatura folclórica: leyendas y relatos legendarios de Piedecuesta",
    author: "Luis Rubén Pérez Pinzón, editor",
    year: 2016,
    type: "libro de investigación formativa y compilación folclórica",
    url: "https://es.scribd.com/document/427463771/LiteraturaFolclricaPiedecuesta2016-pdf",
    summary:
      "Reproduce y adapta estos relatos de Vicente Arenas, señala las páginas de sus obras y propone clasificaciones históricas, identitarias, ecoambientales y negras.",
    limitation:
      "Es la principal cadena textual disponible, pero sus adaptaciones no sustituyen archivos de entrevista, expedientes civiles o corroboración independiente de cada episodio.",
  }),
  perezBookMetadata: source({
    title: "Literatura folclórica: leyendas y relatos legendarios de Piedecuesta",
    author: "Luis Rubén Pérez Pinzón",
    year: 2016,
    type: "registro académico y resumen de publicación",
    url: "https://www.researchgate.net/publication/305682356_Literatura_folclorica_Leyendas_y_relatos_legendarios_de_Piedecuesta",
    summary:
      "Confirma autor, proyecto Gen_Ondas-Unab 585, primera edición e ISBN 978-958-46-9297-9.",
    limitation:
      "Es una ficha depositada por el autor y no una evaluación independiente de los capítulos atribuidos a Vicente Arenas.",
  }),
  cerlalcBook: source({
    title: "Registro de Literatura folclórica de Piedecuesta",
    author: "Cerlalc",
    type: "registro bibliográfico regional",
    url: "https://cerlalc.org/rilvi/literatura-folclorica-leyendas-y-relatos-legendarios-de-piedecuesta-14873/",
    summary:
      "Registra la compilación de 2016 dentro del repertorio iberoamericano y respalda su existencia editorial.",
    limitation:
      "No prueba la antigüedad oral, la factualidad de las escenas ni la identidad histórica de sus personajes.",
  }),
  uisCronicas: source({
    title: "Crónicas y romances",
    author: "Vicente Arenas Mantilla; Ediciones UIS",
    year: 2023,
    type: "catálogo oficial de reedición universitaria",
    url: "https://ediciones.uis.edu.co/index.php/publicacionesuis/catalog/book/128",
    summary:
      "Documenta la reedición de la obra de 1960 que contiene los romances de La Mula Maneada y La Mechuda.",
    limitation:
      "El catálogo respalda la obra y su autoría, pero no verifica como hechos las acusaciones, apariciones o diálogos contenidos en los poemas.",
  }),
  ciniiEstampas: source({
    title: "Estampas de mi tierra",
    author: "Vicente Arenas Mantilla",
    year: 1941,
    type: "registro bibliográfico internacional",
    url: "https://ci.nii.ac.jp/ncid/BA91868368",
    summary:
      "Registra la obra de 1941 de la que proceden las versiones adaptadas de Mula del Diablo, Llorona del Molino, Fantasma, Puerta, Sayona y Pollo.",
    limitation:
      "El registro confirma la publicación, no cada detalle narrativo ni la historicidad de personas, muertes, curaciones o delitos.",
  }),
  educoasProject: source({
    title:
      "Digitalizar la memoria oral colectiva: el rescate de leyendas como estrategia formativa",
    author: "Luis Rubén Pérez Pinzón y Claudia Patricia Serrano",
    year: 2017,
    type: "ponencia de investigación formativa",
    url: "https://recursos.educoas.org/sites/default/files/5134.pdf",
    summary:
      "Describe el proyecto mediante el cual estudiantes, docentes y familias clasificaron y digitalizaron leyendas de Piedecuesta.",
    limitation:
      "Explica el proceso pedagógico; no aporta transcripciones independientes de las escenas atribuidas a Arenas.",
  }),
  ambPiedecuesta: source({
    title: "Piedecuesta: historia, economía y división territorial",
    author: "Área Metropolitana de Bucaramanga",
    type: "perfil institucional municipal",
    url: "https://www.amb.gov.co/piedecuesta/",
    summary:
      "Documenta contexto histórico y territorial de Piedecuesta, sus caminos y la relación entre centro urbano y áreas rurales.",
    limitation:
      "No menciona apariciones, testigos, transformaciones, curaciones ni delitos del corpus.",
  }),
  religiousTourismStudy: source({
    title:
      "Turismo cultural religioso de Piedecuesta: orígenes y atributos",
    author: "Universidad Autónoma de Bucaramanga",
    year: 2023,
    type: "estudio académico de patrimonio religioso local",
    url: "https://es.scribd.com/document/936919479/2023TurismoCultural-ReligiosodePiedecuesta-OrigenesyatributosUNAB",
    summary:
      "Aporta contexto sobre templos, devociones y patrimonio religioso material de Piedecuesta.",
    limitation:
      "El estudio patrimonial no demuestra milagros, castigos, curaciones ni coerciones narradas alrededor de la Puerta del Perdón.",
  }),
  ohchrDisability: source({
    title: "Convención sobre los derechos de las personas con discapacidad",
    author: "Oficina del Alto Comisionado de las Naciones Unidas para los Derechos Humanos",
    year: 2006,
    type: "instrumento internacional de derechos humanos",
    url: "https://www.ohchr.org/en/instruments-mechanisms/instruments/convention-rights-persons-disabilities",
    summary:
      "Establece respeto por la dignidad, autonomía, no discriminación e inclusión de las personas con discapacidad.",
    limitation:
      "No es una fuente del relato; solo orienta el tratamiento editorial contemporáneo y no autoriza diagnosticar a Ritornelio.",
  }),

  // ——— Búsqueda profunda 2026-09-23 ———
  lopezpueblo1977: source({
    title: "El pueblo boyacense y su folclor, cap. 8 «Mitos, leyendas y creencias populares en Boyacá», pp. 121-122",
    author: "Javier Ocampo López",
    year: 1977,
    type: "monografía de folclor regional",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll10/id/2782/download",
    summary:
      "Registra el espanto de convento que el fantasma de El Horizonte imita: en las casonas coloniales de Tunja, monjes que recorren piezas y corredores y se detienen a dar golpes, con gran terror de quienes los oyen; el monje del Panóptico con la calavera bajo la capucha; y el Toque de las Ánimas, espanto que sólo cede cuando un lego se atreve a acercarse.",
    limitation:
      "Son espantos de Tunja, verdaderos dentro del relato, sin burro ni desengaño. Trata el motivo, no este relato.",
  }),
  compiladoraMitos1993: source({
    title: "Mitos y leyendas de Colombia, tomo II, sección 17: Enrique Otero D'Costa, «Cuento de ánimas», pp. 56-60 (de Leyendas, Minerva, 1936)",
    author: "Eugenia Villa Posse (compiladora), IADAP, Quito",
    year: 1993,
    type: "antología institucional con leyendas de autor",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620#page=54",
    summary:
      "Da la imagen santandereana del penitente con rosario: la procesión de ánimas que ña Ulogia ve salir del cacaotal, envueltas en mortajas blancas, con un grueso rosario en una mano y un cirio en la otra, rezando con mucha pausa. Es el espanto que los muchachos creían oír en El Horizonte cuando el rosario golpeaba los muros.",
    limitation:
      "Es leyenda literaria de autor y sus ánimas son verdaderas: el relato no desmiente nada. Trata el motivo, no este relato. El número de página del PDF va dos por detrás del folio.",
  }),
  compiladoraMitos19932: source({
    title: "Mitos y leyendas de Colombia, tomo II, sección 19: Juan de Dios Arias, «Folclor santandereano» (1954), «Lagunas encantadas», con el diálogo de Manuel Ancízar en Los Santos, folios 137-138",
    author: "Eugenia Villa Posse (compiladora), IADAP, Quito",
    year: 1993,
    type: "antología institucional con obra de folclor regional",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620#page=131",
    summary:
      "Es el antecedente santandereano del desengaño que hace don Vicente: Ancízar, ante un campesino de Los Santos que atribuye al diablo los prodigios de una laguna, responde que detrás de esas consejas suele haber hombres interesados en propagarlas, y Arias copia el diálogo como parte de las leyendas de la región.",
    limitation:
      "Trata una laguna encantada y el diablo, no un aparecido de calle, y la explicación de Ancízar es una sospecha, no un hallazgo. Trata el motivo, no este relato.",
  }),
  albarracinalma2023: source({
    title: "Un alma en pena aparece entre los vivos: purgatorio y devoción en la segunda mitad del siglo XIX en Colombia (Anuario Colombiano de Historia Social y de la Cultura, vol. 50, n.º 2)",
    author: "Ana María Henao Albarracín",
    year: 2023,
    type: "artículo arbitrado de historia cultural",
    url: "https://revistas.unal.edu.co/index.php/achsc/article/view/103741",
    summary:
      "Explica por qué un penitente nocturno podía aterrar a un pueblo entero y sobrevivir a su desmentido: el artículo reconstruye la aparición de un difunto en una parroquia rural del siglo XIX y muestra cómo la devoción por las almas del purgatorio mantenía a los muertos en la vida afectiva de los vivos y servía para inculcar normas.",
    limitation:
      "Estudia un caso de aparición tomado en serio por la parroquia, no un desengaño, y no trata Santander. Trata el motivo, no este relato.",
  }),
  mantillaCronicas2012: source({
    title: "Crónicas y romances (ficha editorial con sumario)",
    author: "Vicente Arenas Mantilla",
    year: 2012,
    type: "libro de crónicas costumbristas; sólo ficha de catálogo",
    url: "https://ediciones.uis.edu.co/index.php/publicacionesuis/catalog/book/128",
    summary:
      "Es la obra del cronista y periodista piedecuestano que más probablemente está detrás del «don Vicente» del relato. La sinopsis la define como escenas de costumbres y hechos curiosos de Piedecuesta, humorismo y caricatura del alma del pueblo, que es exactamente el registro de este desengaño.",
    limitation:
      "La página dice «Disponible: No» y no hay texto; el sumario de quince crónicas no incluye el fantasma de El Horizonte. La atribución es una conjetura. Requiere curl -k.",
  }),
  tiempoCuentos2004: source({
    title: "Cuentos de espantos y otros seres fantásticos del folclor colombiano, «El Ánima Sola», pp. 53-54",
    author: "Casa Editorial El Tiempo, con el periódico HOY y la Universidad Autónoma de Colombia",
    year: 2004,
    type: "libro ilustrado de ficción de autor (documentos imaginarios)",
    url: "https://archive.org/details/CuentosDeEspantosYOtrosSeresFantasticosDelFolclorColombiano..compressed",
    summary:
      "Trae la figura del vecino que presta su voz a las ánimas: el animero del pueblo, de capa negra y sombrero alón, que cada noche de noviembre recorre las casas con un farol y una campanilla pidiendo un padrenuestro por las benditas ánimas. La lámina, en forma de nota hallada en un cementerio, lo hace encontrarse con el Ánima Sola envuelta en llamas.",
    limitation:
      "El libro se declara ficción y sus láminas son documentos imaginarios; el animero es de buena fe y la acción ocurre en el occidente del país. Trata el motivo, no este relato.",
  }),
  compiladoraMitos19933: source({
    title: "Mitos y leyendas de Colombia, tomo II, sección 19: Juan de Dios Arias, «Folclor santandereano» (1954), «La Mancarita», folios 127-128",
    author: "Eugenia Villa Posse (compiladora), IADAP, Quito",
    year: 1993,
    type: "antología institucional con obra de folclor regional",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620#page=121",
    summary:
      "Da el espanto santandereano más próximo a la mechuda: la Mancarita de la provincia de Guanentá, mujer salvaje de cabellera larga y desgreñada y cuerpo peludo, que por las noches grita en tono lúgubre y prolongado y a veces se acerca a las viviendas. Añade la versión de Ancízar (imita voces para atraer a la gente) y la de Samuel Ortiz (una mujer manca llamada Rita, del Río Frío).",
    limitation:
      "Es un espanto de selvas y páramos, no de una quebrada de pueblo, y nadie la llama mechuda. Trata el motivo, no este relato. El número de página del PDF va seis por detrás del folio.",
  }),
  compiladoraMitos19934: source({
    title: "Mitos y leyendas de Colombia, tomo II, sección 20: Misael Devia Morales, «Folclor tolimense» (1962), «El Mohán», folio 145",
    author: "Eugenia Villa Posse (compiladora), IADAP, Quito",
    year: 1993,
    type: "antología institucional con obra de folclor regional",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620#page=138",
    summary:
      "Documenta la palabra «mechudo» como nombre popular de un espanto de las aguas: cuando el Mohán tomaba la forma de un pescador conocido y se mezclaba en las faenas, los campesinos caían en la cuenta con la fórmula «el mechudo estuvo con nosotros anoche, compadre». En Coyaima lo describen con espesa y larga pelambrera negra.",
    limitation:
      "Es del Tolima, y el mechudo es varón y dueño de los charcos del Magdalena, no una aparición de quebrada. Trata el motivo y el nombre, no este relato.",
  }),
  moralesFolclor2013: source({
    title: "Folclor tolimense (reedición de la Universidad de Ibagué), capítulo de mitos, pp. 57-84",
    author: "Misael Devia Morales",
    year: 2013,
    type: "monografía de folclor regional (reedición universitaria)",
    url: "https://repositorio.unibague.edu.co/server/api/core/bitstreams/7ecf7fde-a143-4744-a6bd-6f8618d50e2a/content",
    summary:
      "Es la edición completa y abierta del texto de Devia que Villa Posse extracta; permite leer en su contexto el pasaje del Mohán: además de la fórmula «el mechudo estuvo con nosotros anoche», cuenta que el pescador solitario que oye de noche el chapoteo de la atarraya del «Mechudo», «como lo llaman familiarmente», huye aterrado rezando el Credo (pp. 60-61).",
    limitation:
      "Tolima, no Santander. Trata el motivo, no este relato.",
  }),
  lopezpueblo19772: source({
    title: "El pueblo boyacense y su folclor, cap. 8 «Mitos, leyendas y creencias populares en Boyacá», p. 122",
    author: "Javier Ocampo López",
    year: 1977,
    type: "monografía de folclor regional",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll10/id/2782/download",
    summary:
      "Registra en el altiplano vecino a Santander dos espantos definidos por el pelo: la cabellona y la dama peluda, que Ocampo cuenta entre los mitos estudiados en Boyacá.",
    limitation:
      "Sólo los nombra en una enumeración, sin descripción ni relato. Trata el motivo, no este relato.",
  }),
  tiempoCuentos20042: source({
    title: "Cuentos de espantos y otros seres fantásticos del folclor colombiano, ficha técnica de «La Llorona» (pp. 3-4) y «La Cabellona» (pp. 65-66)",
    author: "Casa Editorial El Tiempo, con el periódico HOY y la Universidad Autónoma de Colombia",
    year: 2004,
    type: "libro ilustrado de ficción de autor (documentos imaginarios)",
    url: "https://archive.org/details/CuentosDeEspantosYOtrosSeresFantasticosDelFolclorColombiano..compressed",
    summary:
      "El recuadro técnico de la Llorona es el retrato más cercano a lo que vieron Antoninito y Balbino: figura de mujer con cabellera muy larga y desordenada, que habita quebradas, pozos y orillas de los montes y espanta a borrachos e infieles con llanto y gritos que dan escalofríos, sin agredir. La lámina de la Cabellona, una carta fechada en Frontino en 1971, la presenta como espectro que aterroriza a los caminantes.",
    limitation:
      "El libro se declara ficción y sus láminas son documentos imaginarios. Trata el motivo, no este relato.",
  }),
  obregonMexico1909: source({
    title: "México viejo y anecdótico, «La casa de la mujer herrada», pp. 15-20",
    author: "Luis González Obregón",
    year: 1909,
    type: "crónica histórica y tradición urbana",
    url: "https://archive.org/details/mxicoviejoyane00gonz",
    summary:
      "Es el registro más antiguo que se puede leer del núcleo del relato: un herrador despertado de noche hierra una mula que traen dos desconocidos, y a la mañana siguiente la mujer del clérigo amancebado aparece muerta con las mismas herraduras y los mismos clavos en manos y pies, freno en la boca y marcas de golpes. González Obregón lo toma de la vida del P. José Vidal (1752) y de las Noticias de México de Sedano.",
    limitation:
      "Es una tradición de la ciudad de México, no de Santander, y la culpa recae en el amancebamiento de un clérigo, no en la codicia del herrero. Trata el motivo, no este relato.",
  }),
  pastoEspantos2024: source({
    title: "Espantos que todavía asustan en las semanas santas (sección «La mula herrada»)",
    author: "Diario del Sur (Pasto), sin firma",
    year: 2024,
    type: "prensa regional",
    url: "https://www.diariodelsur.com.co/espantos-que-todavia-asustan-en-las-semanas-santas/",
    summary:
      "Da la forma colombiana corriente del espanto: la mula herrada es una mujer que sostuvo relaciones con un sacerdote y de noche se transforma en mula, recorre desbocada las calles de Pasto y saca chispas del pavimento con las herraduras. Trae el testimonio de un vecino de la avenida Boyacá que oyó el galope y el resoplido bajo su ventana un Viernes Santo.",
    limitation:
      "Nota de prensa sin firma ni aparato, con testimonios de nombre marcado con asterisco. Es de Pasto, no de Santander, y no tiene herrero ni clavos en la mujer. Trata el motivo, no este relato.",
  }),
  compiladoraMitos19935: source({
    title: "Mitos y leyendas de Colombia, tomo II, sección 17: Enrique Otero D'Costa, «No hay deuda que no se pague…», pp. 53-56 (de Leyendas, Minerva, 1936)",
    author: "Eugenia Villa Posse (compiladora), IADAP, Quito",
    year: 1993,
    type: "antología institucional con leyendas de autor",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620#page=51",
    summary:
      "Trae la mula negra como montura del cobro diabólico: el perulero Damián Vásquez Montiel, que según las comadres de la Villa de Arma había cambiado su alma por riqueza, suerte y fortuna con las mujeres, es subido un Viernes Santo a la grupa de un jinete en una mula negrísima que echa fuego por ojos, boca y nariz, y nunca vuelve a saberse de él.",
    limitation:
      "Es leyenda literaria de autor, situada en la Villa de Arma (Antioquia colonial), sin herrero ni mujer transformada. Trata el motivo de la mula del diablo, no este relato. El número de página del PDF va dos por detrás del folio.",
  }),
  tiempoCuentos20043: source({
    title: "Cuentos de espantos y otros seres fantásticos del folclor colombiano, índice («La Mula Herrada», pp. 75-76) y «El Jinete Negro», pp. 23-24",
    author: "Casa Editorial El Tiempo, con el periódico HOY y la Universidad Autónoma de Colombia",
    year: 2004,
    type: "libro ilustrado de ficción de autor (documentos imaginarios)",
    url: "https://archive.org/details/CuentosDeEspantosYOtrosSeresFantasticosDelFolclorColombiano..compressed",
    summary:
      "Prueba que la mula herrada circulaba como espanto nacional a comienzos de este siglo: el índice le dedica una lámina. Y la lámina del Jinete Negro da la imagen de las chispas que el relato atribuye a los hombres de Umpalá: un caballero de luto que rastrilla los empedrados con la herradura, situado en Antioquia y los Santanderes.",
    limitation:
      "El libro se declara ficción. La copia digital salta de la p. 74 a la 77 y no conserva la lámina de la Mula Herrada, así que su contenido no se pudo leer. Trata el motivo, no este relato.",
  }),
  hOYCuentos2004: source({
    title: "Cuentos de espantos y otros seres fantásticos del folclor colombiano",
    author: "Casa Editorial El Tiempo (Proyectos Especiales) / Periódico HOY, con patrocinio de la Universidad Autónoma de Colombia",
    year: 2004,
    type: "libro de ficción declarada («documentos imaginarios»)",
    url: "https://archive.org/details/CuentosDeEspantosYOtrosSeresFantasticosDelFolclorColombiano..compressed",
    summary:
      "Es la obra que se revisó primero, porque otras tres fichas del ciclo resultaron ser láminas casi literales de ella. Su índice anuncia «La Muía Herrada» en las pp. 75-76, la única entrada cercana al título; en el resto del libro no aparecen Petra Agudelo, Blas Plata, Juan Barbas, la mostaza ni el cuervo.",
    limitation:
      "Las pp. 75-76 faltan en la copia digital (el PDF pasa de «El Bus Fantasma», p. 74, a «La Barbacoa del Muerto», p. 77), así que no se puede descartar ni confirmar que la lámina sea el origen. Es ficción de autor, no registro oral.",
  }),
  lopezpueblo19773: source({
    title: "El pueblo boyacense y su folclor, cap. 8 «Mitos, leyendas y creencias populares en Boyacá», pp. 126-127",
    author: "Javier Ocampo López",
    year: 1977,
    type: "monografía de folclor regional",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll10/id/2782/download",
    summary:
      "Documenta el oficio de bruja que el relato atribuye a doña Petra: la creencia llegó con los españoles, fue una profesión «muy socorrida» en la Colonia y se repartía entre maleficios, enyerbamientos, bebidas («la dulce toma», «la tonga») y negocios de amor. Pone a Juana García en el origen de las brujas colombianas. Las novias engañadas con bebidas y los jóvenes enloquecidos del relato caben en ese repertorio.",
    limitation:
      "Trata la brujería en Boyacá y en las ciudades coloniales, no Piedecuesta. Trata el motivo, no este relato.",
  }),
  lopezbrujas1989: source({
    title: "Las brujas criollas",
    author: "Redacción de la revista Semana (a partir de Javier Ocampo López, «Supersticiones y agüeros colombianos»)",
    year: 1989,
    type: "artículo de prensa nacional",
    url: "https://www.semana.com/las-brujas-criollas/12541-3/",
    summary:
      "Da las contras que usa don Juan Barbas: las brujas se transforman en gallinazos, burras, mariposas y otros animales, y se las atrapa regando «granos diminutos de mostaza», dejando un terrón de sal o clavando agujas en las puertas. Nombra a las brujas de Floridablanca, en Santander, vecina de Piedecuesta, y resume el caso de Juana García según El Carnero.",
    limitation:
      "Es un resumen periodístico de un libro de Ocampo, sin firma individual y con OCR defectuoso en la versión web. Trata el motivo, no este relato.",
  }),
  moureReminiscencias1899: source({
    title: "Reminiscencias de Santafé y Bogotá, serie tercera, p. 313",
    author: "José María Cordovez Moure",
    year: 1899,
    type: "crónica costumbrista",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2854/",
    summary:
      "Registra la mula nocturna como espanto urbano andino: entre las conversaciones de atrio de la Santafé colonial nombra «el espanto de la mula herrada que recorría las calles en altas horas de la noche y nadie veía». Es el antecedente fechado de la bestia que ronda la calle empedrada a medianoche en el relato de Piedecuesta.",
    limitation:
      "Una sola frase, sin relato ni bruja; es Bogotá, no Santander. Trata el motivo, no este relato.",
  }),
  posadaFantasmas2008: source({
    title: "Fantasmas de ciudad: fantasmas en La Candelaria (Memorias de la Ciudad, n.º 1), pp. 18 y 30-31",
    author: "Stella Monsalve Gaitán; transcribe a Jorge Bayona Posada, «Los fantasmas de Santafé»",
    year: 2008,
    type: "publicación del Archivo de Bogotá con transcripción de un texto anterior",
    url: "https://repositorio.biblored.gov.co/server/api/core/bitstreams/f5763725-1882-4b6e-a17a-1710a7497891/content",
    summary:
      "Sostiene el paralelo de la mujer convertida en mula: en el texto de Bayona Posada la mula sin jinete que corre de noche por el empedrado desaparece cuando se encuentra muerta, tras la ermita de Belén, a una mujer de oficio celestinesco con herraduras clavadas en manos y pies. Recoge además la variante del jugador cuya mula va sola a buscarlo.",
    limitation:
      "Bogotá, sin fecha de recolección ni informantes; el texto de Bayona Posada llega de segunda mano. Trata el motivo, no este relato.",
  }),
  colaborativoPuerta2026: source({
    title: "Puerta del Perdón",
    author: "Wikipedia en español (artículo colaborativo)",
    year: 2026,
    type: "enciclopedia colaborativa (sólo como paralelo)",
    url: "https://es.wikipedia.org/wiki/Puerta_del_Perd%C3%B3n",
    summary:
      "Define el nombre que lleva la puerta piedecuestana: en España es uno de los accesos de catedrales e iglesias ligado a devociones que conceden indulgencias en peregrinaciones y romerías. Enumera ejemplos (Santiago de Compostela, que sólo se abre en año jacobeo; Santo Toribio de Liébana; Burgos, Sevilla, Córdoba, León) y uno americano, la catedral de Puebla.",
    limitation:
      "Fuente terciaria, admitida sólo como paralelo. No menciona Colombia ni Piedecuesta. Trata el motivo, no este relato.",
  }),
  artencordobaDoor2026: source({
    title: "The Door of Forgiveness (Puerta del Perdón), Mosque-Cathedral of Córdoba",
    author: "Artencordoba",
    year: 2026,
    type: "guía patrimonial especializada",
    url: "https://www.artencordoba.com/en/mosque-cordoba/door-of-forgiveness/",
    summary:
      "Da el ejemplo fechado del paralelo: la Puerta del Perdón de Córdoba se construyó en marzo de 1377 por orden de Enrique II de Castilla, según la inscripción del arco, con dos arcos de herradura y hojas de casi diez metros; se reformó en el siglo XVII. Sirve para contrastar la puerta monumental con el portón de madera azul del relato.",
    limitation:
      "Guía sin autor individual; no explica el origen del nombre. Trata el motivo, no este relato.",
  }),
  plazasComo2025: source({
    title: "¿Cómo obtener el perdón de los pecados en el Jubileo? Conozca las condiciones de la Iglesia",
    author: "Alejandra López Plazas, El Tiempo",
    year: 2025,
    type: "artículo de prensa nacional",
    url: "https://www.eltiempo.com/vida/religion/como-obtener-el-perdon-de-los-pecados-en-el-jubileo-conozca-las-condiciones-de-la-iglesia-3415801",
    summary:
      "Muestra que el perdón ligado a una puerta sigue vigente en Colombia: en el Jubileo de 2025 se abrieron puertas santas en templos del mundo, entre ellos la Catedral Primada de Bogotá. Enumera las condiciones de la indulgencia (arrepentimiento verdadero, confesión, comunión, oración por el papa), que permiten comparar con el perdón que la puerta de Piedecuesta da a la oración sincera.",
    limitation:
      "Es doctrina contemporánea, no folclor. Trata el motivo, no este relato.",
  }),
  parradebe2024: source({
    title: "Lo que debe saber sobre la Capilla de la Porciúncula, lugar donde se encuentra ‘la puerta de la vida eterna’",
    author: "Pamela Andrea Avendaño Parra, El Tiempo",
    year: 2024,
    type: "artículo de prensa nacional",
    url: "https://www.eltiempo.com/vida/religion/siete-datos-sobre-la-capilla-de-la-porciuncula-lugar-donde-se-encuentra-la-puerta-de-la-vida-eterna-3368537",
    summary:
      "Explica el Perdón de Asís, que los franciscanos de Colombia celebran cada 2 de agosto: la indulgencia que Honorio III concedió en 1216 a quien visitara la Porciúncula, en cuya puerta se lee «Haec est porta vitae aeternae». Es el tercer paralelo de un perdón atado a un umbral concreto.",
    limitation:
      "Trata una capilla de Asís y una indulgencia franciscana; no hay curaciones ni tradición oral. Trata el motivo, no este relato.",
  }),
  lopezpueblo19774: source({
    title: "El pueblo boyacense y su folclor, cap. 8 «Mitos, leyendas y creencias populares en Boyacá», p. 126",
    author: "Javier Ocampo López",
    year: 1977,
    type: "monografía de folclor regional",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll10/id/2782/download",
    summary:
      "Documenta la curación por contacto con un objeto venerado en la región vecina: en Onzaga, según contaban los españoles, los campesinos adoraban un hueso de mohán colocado bajo un santo crucifijo y creían que así tendrían salud y buena cosecha. Es el paralelo más cercano a la astilla, la piedra y la cerradura que curan en Piedecuesta.",
    limitation:
      "Es un dato colonial dentro de un capítulo sobre Boyacá, sin puerta ni perdón. Trata el motivo, no este relato.",
  }),
  tovarMitos2015: source({
    title: "Mitos y leyendas del estado Portuguesa, cap. 28: La Sayona",
    author: "Fundación Empresas Polar (testimonios de Juan Francisco Tovar, Francisco Ignacio Pérez, Antonio Angulo y otros)",
    year: 2015,
    type: "compilación de testimonios orales con narrador nombrado",
    url: "https://bibliofep.fundacionempresaspolar.org/media/1377961/mitos_portuguesa_c_28_la-sayona.pdf",
    summary:
      "Es el registro de la figura con voces identificadas: Juan Francisco Tovar la describe como una mujer muy bonita y celosa que mató a su marido por sospechas de infidelidad, llamada Sayona por la saya blanca, que asusta sólo a infieles, parranderos y enamorados; cuenta que su hermano Pedro la siguió hasta la quebrada de Araure y le vio los colmillos largos y los ojos en candela. Antonio Angulo narra la mujer que se subía a los carros en Los Palmares y que sólo él veía transformarse. Sostiene los dos primeros paralelos de similitudes.",
    limitation:
      "Es tradición venezolana del estado Portuguesa; el año es aproximado, inferido del archivo de imprenta del PDF (tripa fechada 12-05-2015); el capítulo no lo trae. Trata el motivo, no este relato.",
  }),
  pastoleyenda2024: source({
    title: "La leyenda de la Sayona. Leyendas y folklore venezolanos",
    author: "Diario del Sur (Pasto), sin firma",
    year: 2024,
    type: "artículo de prensa regional colombiana",
    url: "https://www.diariodelsur.com.co/la-leyenda-de-la-sayona-leyendas-y-folklore-venezolanos-la-sayona/",
    summary:
      "Documenta la circulación de la Sayona en Colombia: la presenta como leyenda venezolana extendida a la frontera y a los llanos, con Casilda, la mujer celosa que mató a su esposo y a su madre y fue maldecida por ésta, y con el grito lejano que eriza a quien lo oye. Es la versión que el texto publicado sobre Piedecuesta resumía y que aquí se deja fuera del relato.",
    limitation:
      "Nota de prensa sin firma ni fuentes, de divulgación. Trata el motivo, no este relato.",
  }),
};

const sharedEstampasSources = [
  "perezBookFullText",
  "ciniiEstampas",
  "perezBookMetadata",
  "cerlalcBook",
  "educoasProject",
  "ambPiedecuesta",
];

const sharedRomanceSources = [
  "perezBookFullText",
  "uisCronicas",
  "perezBookMetadata",
  "cerlalcBook",
  "educoasProject",
  "ambPiedecuesta",
];

export const piedecuestaVicenteArenasISourceKeysBySlug = {
  "la-mula-del-diablo": sharedEstampasSources,
  "la-mula-maneada": sharedRomanceSources,
  "la-llorona-del-molino": sharedEstampasSources,
  "la-mechuda": sharedRomanceSources,
  "el-fantasma-de-el-horizonte": sharedEstampasSources,
  "la-puerta-del-perdon": [
    ...sharedEstampasSources,
    "religiousTourismStudy",
  ],
  "la-sayona-del-cementerio": sharedEstampasSources,
  "el-pollo-de-las-animas": [...sharedEstampasSources, "ohchrDisability"],
};

/**
 * Resuelve las fuentes de una ficha. Con una lista —la `sourceKeys` que la
 * ficha declara— devuelve esas obras en ese orden, y cada entrada puede ser una
 * clave suelta o `{ key, summary, limitation }` con lo que esa obra dice de
 * ESE relato. Con un slug cae en el reparto heredado, que se conserva tal cual
 * para las fichas que todavía no se han rehecho.
 */
export function pickPiedecuestaVicenteArenasISources(slugOrEntries) {
  if (!Array.isArray(slugOrEntries)) return pickPiedecuestaVicenteArenasISourcesHeredadas(slugOrEntries);
  return slugOrEntries.map((entrada) => {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = piedecuestaVicenteArenasISources[key];
    if (!selected) throw new Error(`Fuente desconocida: ${JSON.stringify(entrada)}.`);
    return {
      ...selected,
      ...(typeof entrada === "object" && entrada.summary ? { summary: entrada.summary } : {}),
      ...(typeof entrada === "object" && entrada.limitation ? { limitation: entrada.limitation } : {}),
    };
  });
}

// El reparto heredado, por slug. Sólo lo usan las fichas sin `sourceKeys`.
function pickPiedecuestaVicenteArenasISourcesHeredadas(slug) {
  const keys = piedecuestaVicenteArenasISourceKeysBySlug[slug];
  if (!keys) throw new Error(`${slug}: falta selección de fuentes.`);
  return keys.map((key) => {
    const selected = piedecuestaVicenteArenasISources[key];
    if (!selected) throw new Error(`${slug}: fuente desconocida ${key}.`);
    return selected;
  });
}
