function source({
  title,
  author,
  year,
  type,
  url,
  summary,
  limitation,
}) {
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

export const chamiSources = {
  reichel1953: source({
    title: "Algunos mitos de los indios Chamí (Colombia)",
    author: "Gerardo Reichel-Dolmatoff",
    year: 1953,
    type: "recolección etnográfica primaria",
    url: "https://redaprende.colombiaaprende.edu.co/recursos/colecciones/34UDQKC25D1/T5RZEZ6LF62/1226",
    summary:
      "Transcribe catorce relatos narrados en castellano por integrantes de un grupo Chamí asentado en Corozal, municipio de Río Frío, Valle del Cauca, durante el reconocimiento de 1945.",
    limitation:
      "El propio autor advierte que no pudo estudiar el contexto cultural de las narraciones; la transcripción en castellano tampoco conserva la ejecución oral en emberá bedea.",
  }),
  redAprendeMetadata: source({
    title: "Ficha de Algunos mitos de los indios chamí",
    author: "Ministerio de Educación Nacional y Biblioteca Nacional de Colombia",
    type: "ficha archivística institucional",
    url: "https://redaprende.colombiaaprende.edu.co/metadatos/recurso/algunos-mitos-de-los-indios-chami/",
    summary:
      "Acredita autoría, rango de páginas, procedencia en Río Frío y licencia del facsímil conservado por la Biblioteca Nacional.",
    limitation:
      "Describe y da acceso al artículo de Reichel-Dolmatoff; no constituye un testimonio narrativo independiente.",
  }),
  chaves1945: source({
    title: "Mitos, tradiciones y cuentos de los indios Chamí",
    author: "Milcíades Chaves Ch.",
    year: 1945,
    type: "recolección etnográfica primaria con informantes identificados",
    url: "https://publicaciones.icanh.gov.co/index.php/picanh/catalog/book/235",
    summary:
      "Publica nueve relatos de la expedición de 1945 e identifica por separado cuatro narraciones de Nicolás Henao, Chamí de Balboa, y cinco de Rafael Bailarín, narrador Katío.",
    limitation:
      "El título del artículo puede inducir a atribuir los nueve relatos a Chamí; la introducción obliga a conservar la frontera explícita entre los dos narradores.",
  }),
  onicChami: source({
    title: "Embera Chamí",
    author: "Organización Nacional Indígena de Colombia",
    type: "perfil de organización indígena",
    url: "https://www.onic.org.co/embera-chami/",
    summary:
      "Perfil del pueblo en el sitio de la organización: el nombre propio, «habitante de montaña», la ubicación sobre el río San Juan y en Pueblo Rico y Mistrató, el segundo núcleo en los ríos Garrapatas y Sanquininí, y la lengua, de la familia Chocó.",
    limitation:
      "Es un perfil panorámico y contemporáneo; no fija una versión canónica ni prueba detalles de cada relato local.",
  }),
  procuraduriaChami: source({
    title: "Caracterización del pueblo Emberá Chamí",
    author: "Procuraduría General de la Nación",
    type: "caracterización institucional",
    url: "https://www.procuraduria.gov.co/portal/media/docs/CaracterizacionCHAMI.pdf",
    summary:
      "Describe asentamientos, organización, lengua y la relación entre los mundos de arriba, humano y subterráneo en una síntesis institucional.",
    limitation:
      "Resume bibliografía previa y no reemplaza las voces localizadas ni las transcripciones primarias.",
  }),
  minInteriorPlan: source({
    title:
      "Diagnóstico unificado de los pueblos Emberá Chamí, Katío, Dóbida y Eperara Siapidara",
    author: "Ministerio del Interior de Colombia y organizaciones Emberá",
    type: "diagnóstico y plan de salvaguarda",
    url: "https://www.mininterior.gov.co/wp-content/uploads/2022/08/pueblos_embera_chami_katio_dobida_eperara_siapidara_-_diagnostico_unificado.pdf",
    summary:
      "Recoge territorio, diferenciación interna, memoria, riesgos y propuestas de salvaguarda construidas en espacios de participación Emberá.",
    limitation:
      "Su escala es interregional y política; sirve para contexto y límites, no como fuente primaria de todos los episodios narrativos.",
  }),
  vascoChami: source({
    title:
      "Algunos relatos de los embera chamí de Risaralda, contados por Clemente Nengarabe Siágama",
    author:
      "Clemente Nengarabe Siágama, narrador; recogidos por Luis Guillermo Vasco Uribe",
    year: 1978,
    type: "relatos recogidos de un narrador nombrado, republicados con su autoría restituida",
    url: "https://www.luguiva.net/articulos/detalle.aspx?id=88",
    summary:
      "Relatos que Vasco recogió de Clemente Nengarabe en el Chamí y que se publicaron en 1978 sin su nombre. Al republicarlos, Vasco explica que su papel fue el de simple recolector y devuelve la autoría al narrador, porque en aquel momento fue impensable que un indígena figurara como autor.",
    limitation:
      "Los relatos pasaron por el castellano y por la transcripción del recolector, y la restitución de autoría es de décadas después de la escucha. Es una selección de un solo narrador de Risaralda, no el canon del pueblo.",
  }),
  cardona2026: source({
    title:
      "Tejidos de transformación: oraliteratura y oralitegrafía en la memoria emberá chamí",
    author: "Ana Lucía Cardona Colorado",
    year: 2026,
    type: "investigación académica contemporánea",
    url: "https://revistas.udea.edu.co/index.php/elc/article/view/361435",
    summary:
      "Analiza relatos Chamí del Eje Cafetero y explica la transformación como principio relacional, además de rastrear mediaciones coloniales, cristianas y patriarcales.",
    limitation:
      "Es un estudio interpretativo desde una posición externa y trabaja también fuentes Katío y Emberá de otras regiones con diferencias declaradas.",
  }),
  fernandezJepa: source({
    title: "Matemáticas en la cosmovisión de los indígenas Emberá-Chamí",
    author: "Oscar Fernández Sánchez",
    type: "investigación académica con relato Chamí acreditado",
    url: "https://repositorio.utp.edu.co/bitstreams/05e6f0e7-9219-46da-8847-5552251144bc/download",
    summary:
      "Reproduce la versión de la culebra Jepá narrada por Jaime Wasorna en Santa Cecilia y publicada por Víctor Zuluaga, además de contextualizar universo y territorio Chamí.",
    limitation:
      "Depende de la publicación de Zuluaga de 1991 para el relato de Jaime Wasorna y no contiene el registro sonoro original.",
  }),
  oralitecaJepa2025: source({
    title: "Jepá, historia tradicional Emberá de Mistrató",
    author:
      "Oraliteca de Risaralda, con narración y traducción de Jhon Jairo Siágama",
    year: 2025,
    type: "registro sonoro contemporáneo de voz comunitaria",
    url: "https://www.ivoox.com/jepa-historia-tradicional-embera-de-mistrato-audios-mp3_rf_161732241_1.html",
    summary:
      "Conserva una narración y traducción del docente Jhon Jairo Siágama, de la vereda Jeguadas de Mistrató, y sitúa a Jepá en los ríos y parajes de Alto Jebanía y Jeguadas.",
    limitation:
      "La ficha pública no ofrece una transcripción crítica completa y el audio debe escucharse como una versión local contemporánea, no como sustituto de la narración de Jaime Wasorna.",
  }),
  kienykeUniverse2015: source({
    title:
      "El origen del universo, actuado y narrado por indígenas Embera-Chamí",
    author: "KienyKe, con Alicia Guasorna, Noralba Siagama y Delfina Wazorna",
    year: 2015,
    type: "memoria periodística de una obra en emberá bedea",
    url: "https://www.kienyke.com/entretenimiento/el-origen-del-universo-actuado-y-narrado-por-indigenas-embera-chami",
    summary:
      "Acredita a tres sabedoras de Pueblo Rico y Mistrató y registra el comienzo de una versión en la que Dachicore crea ocho mundos y a Karabi.",
    limitation:
      "La nota resume una puesta en escena y no publica la obra completa ni una transcripción crítica.",
  }),
  acunaSevenHeads2015: source({
    title:
      "De la conservación del suelo al cuidado de la tierra: una propuesta ético-afectiva",
    author:
      "Isaías Tobasura Acuña, Franco Humberto Obando Moncayo, Fred Alberto Moreno Chávez, Carmen Soledad Morales Londoño y Angélica María Henao Castaño",
    year: 2015,
    type: "artículo académico con transcripción territorial",
    url: "https://doi.org/10.1590/1809-4422ASOC802V1832015",
    summary:
      "Publica la leyenda de la serpiente de siete cabezas conservada por Emberá Chamí de La Montaña, Caldas, y la relaciona con la erosión de El Salado.",
    limitation:
      "La narración se reproduce desde Julián Bueno Rodríguez (1988); la lectura ecológica posterior pertenece a los autores del artículo.",
  }),
  improntaLomaprieta2009: source({
    title:
      "Occidente de Caldas: su composición étnica y su presencia en la formación de la República",
    author: "Jorge Eliécer Zapata Bonilla",
    year: 2009,
    type: "historia regional con tradición de Lomaprieta",
    url: "https://filedn.com/ld7H5po5QNfB2tIYyyCQhm7/Gonzalo-public/Repositorio%20Revista%20Impronta%20ACH/Academia%20Caldense%20de%20Historia-%20Revista%20Impronta%2007%20de%202009.pdf",
    summary:
      "Reproduce desde Bueno Rodríguez (1988) la leyenda de Lomaprieta en la que gotas de las manos de Dios se vuelven ángeles y espíritus terrestres, acuáticos, aéreos y selváticos. Presenta el pasaje diciendo que cuenta «cómo surgieron las deidades tutelares o los guardianes tutelares de la naturaleza»: ahí está la palabra guardianes, y no está la palabra vengadores.",
    limitation:
      "Es una fuente regional secundaria; conserva una versión cristianizada y no acredita el nombre de la persona que la narró originalmente.",
  }),

  // ——— Búsqueda profunda 2026-09-18 ———
  gutierrezpensamiento2017: source({
    title: "El pensamiento Embera Chamí: un análisis filosófico",
    author: "Leonardo Fabio Siagama Gutiérrez",
    year: 2017,
    type: "tesis",
    url: "https://repository.unad.edu.co/handle/10596/13777",
    summary:
      "Trabajo de grado de un autor emberá chamí, escrito en Pueblo Rico (Risaralda), que recoge de la mayora Guillermina Gutiérrez Arcila (14 de abril de 2017) el relato «El hijo de la pantorrilla (Jirupotawar)»: una mujer quedó embarazada en la pantorrilla y no en el vientre, parió allí y murió, y por ver ese sufrimiento la divinidad decidió que en adelante el bebé se formara en el vientre. Es la pieza que a la ficha le falta: da una explicación chamí, recogida hoy y con narradora nombrada, de por qué terminó la generación que criaba «en la pantorrilla» —el mismo motivo que Reichel transcribe como híno-pota uára sin explicar—.",
    limitation:
      "No es la misma narración: aquí no hay palma barrigona, ni cortes tapados con rascadera, ni segunda creación de Karagabí; el nacimiento por la pantorrilla es individual y abre el ciclo del héroe, no el de una primera humanidad colectiva. El texto es un ejercicio filosófico de grado que a ratos alinea a Karagabí con el Dios cristiano; la grafía Jirupotawar/Dachiakore es la del autor y no coincide con las de Reichel.",
  }),
  gomezMitos1997: source({
    title: "Mitos y leyendas de los Embera-chamí",
    author: "Víctor Zuluaga Gómez",
    year: 1997,
    type: "libro",
    url: "https://repositorio.utp.edu.co/handle/11059/4877",
    summary:
      "El capítulo «Los mitos de origen» reúne dos versiones del origen de la gente que compiten con la de Río Frío: en la primera, Karaví modela dos muñecos de piedra fina (mompahuará) y Tutriaka dos de barro, y los de barro salen mejores —de ahí que nuestros cuerpos sean flojos, se envejezcan y se pudran—; en la segunda, que el padre Pinto consideraba más antigua, Karaví produce una gota de agua, la tapa con una totuma nueva y al día siguiente encuentra un hombre, repite con otra gota y obtiene la mujer, y una sacudida descuidada de la primera mujer esparce gotitas de las que salen los demás pueblos. Sirve para leer el hueco de la ficha —Karagabí «tuvo que hacer nueva gente» sin decir cómo— contra dos procedimientos chamí sí descritos: modelado y gota tapada.",
    limitation:
      "Zuluaga publica estas dos versiones como emberá-chamí pero las toma de reconstrucciones de Luis Fernando Vélez y del padre Constancio Pinto hechas sobre material katío —el propio texto dice «se halló convertida en un indio catio»—, y el autor advierte que el barro y la costilla pueden venir de la predicación misionera. Ninguna de las dos menciona la palma barrigona ni la fragilidad ante la picadura de hormiga. El PDF del repositorio es un escaneo sin capa de texto (hubo que reconocerlo ópticamente) y el sitio interpone una verificación antirrobot antes de servir la ficha.",
  }),
  mantillamito2020: source({
    title: "El mito del maíz de los Embera-Chamí: una interpretación del «ser mítico» a partir del concepto de habitar en Heidegger",
    author: "Elizabeth García Mantilla",
    year: 2020,
    type: "tesis",
    url: "https://noesis.uis.edu.co/handle/20.500.14071/39722",
    summary:
      "Trabajo de grado en filosofía de la Universidad Industrial de Santander que trabaja con comunidades emberá-chamí y registra, cruzando la recopilación de Reichel-Dolmatoff con las narraciones de Lisardo Domicó Yagarí, una variante del origen de la gente en la que «los primeros Embera fueron creados a partir de barro mezclado con agua, hombre y mujer, e incrustados en el tronco de una palma para crecer», y Karagabí les dio el soplo para poblar el alto San Juan. Es la única fuente localizada que conserva la palma como matriz de la primera humanidad, igual que el relato 12 de Río Frío, pero con materia y procedimiento distintos.",
    limitation:
      "La variante llega mediada por un narrador emberá de Antioquia (Yagarí) y por la lectura de la autora, que la usa para argumentar sobre Heidegger y no para editar el relato; no distingue qué parte viene de Reichel y cuál de Yagarí. No conserva ni la primera humanidad frágil, ni los híno-pota uára, ni la segunda creación. Su centro es el maíz y Betata, no la creación de la gente.",
  }),
  cardonaMitologia2013: source({
    title: "Mitología Embera. Principales mitos, características y funciones",
    author: "Antonio María Cardona y Jairo Miguel Guerra Gutiérrez",
    year: 2013,
    type: "articulo",
    url: "https://bioetnia.iiap.org.co/index.php/bioetnia/article/view/130",
    summary:
      "Bajo el epígrafe «Creación del hombre» y «Edades humanas. Fracaso y nuevas generaciones» expone una secuencia que responde punto por punto al silencio de la ficha: Ankoré talla un muñeco en palo de oquendo queriendo que el hombre durara siempre, se corta un dedo y deja la obra inconclusa —«es por esto que el hombre no es completo ni tampoco inmortal»—, y luego modela con barro y agua la primera pareja. Sigue con cuatro generaciones humanas fallidas, la primera convertida en animales y la segunda ahogada en ollas de barro. Da un armazón comparativo para la pregunta que la versión de Río Frío no contesta: por qué la primera gente no duraba y por qué hubo que hacer otra.",
    limitation:
      "El trabajo de campo es de 2012 en Jawa (río Chorí), Tandó, Nuquí arriba y Yucal (río Panguí), costa pacífica chocoana, más experiencias de los años ochenta en Chocó y Córdoba: no es material chamí. Los propios autores registran que en esas comunidades «Karagabí y Tutruika tienen poco peso» y que algunos afirman que «Karagabí es un dios de los katíos». La materia prima es madera y barro, nunca una palma abierta a hachazos, y no aparecen los hijos de la pantorrilla.",
  }),
  campoperdida2024: source({
    title: "La pérdida de la riqueza: un mito embera sobre el origen de las razas y la desigualdad social",
    author: "Andrés Ricardo Restrepo Campo y Sandra Turbay",
    year: 2024,
    type: "articulo",
    url: "https://revistas.uniandes.edu.co/index.php/antipoda/article/view/8777",
    summary:
      "Analiza un mito recogido con técnicas etnográficas en Jaikerazabi (Mutatá, Antioquia) en el que Karagabí reparte capacidades y bienes y así funda la diferencia entre indígenas, blancos y mestizos. Para esta ficha vale como el otro extremo del mismo gesto: el relato de Río Frío dice sin explicar que Karagabí tuvo que hacer gente nueva «de estos venimos nosotros», y este artículo muestra un ciclo emberá donde la decisión de Karagabí sobre qué humanidad queda y con qué destino sí se narra, y donde los autores demuestran que esas explicaciones de origen se reacomodan históricamente.",
    limitation:
      "Es otro episodio, no una variante del relato 12: no hay palma, ni primera humanidad frágil, ni hijos de la pantorrilla. El material es emberá eyábida de Mutatá (Antioquia), no chamí, y el mito analizado es explícitamente poscolonial —organiza la relación con «los blancos»—, de modo que no puede usarse para llenar el silencio de la segunda creación sino solo para contrastar cómo otros grupos emberá narran la decisión de Karagabí sobre la humanidad.",
  }),
  rosiqueGraciaTodos2020: source({
    title: "«Todos en el mismo pensamiento»: las relaciones del pueblo embera con los sitios sagrados de los resguardos de Polines y Yaberaradó en Chigorodó (Antioquia)",
    author: "Javier Rosique-Gracia, Aída Gálvez-Abadía, Sandra Turbay, Nataly Domicó, Arnulfo Domicó, Plinio Chavarí, Justico Domicó, Fernando A. Alzate, José Fernando Navarro y Sneider Rojas-Mora",
    year: 2020,
    type: "articulo",
    url: "https://doi.org/10.25058/20112742.n36.08",
    summary:
      "Investigación hecha con el Cabildo Mayor de Chigorodó que describe el cosmos emberá «compuesto por tres niveles interrelacionados y poblados por distintos tipos de seres» y, lo que más importa aquí, muestra cómo esos niveles se vuelven lugares concretos: cuevas, rocas, pozas, cabeceras y cascadas funcionan como tránsito entre los mundos de arriba, del medio y de abajo. Documenta además el retiro de los dioses —Karagabí al mundo de arriba tras la caída del jenené, Trutruicá al inframundo— como la razón de que hoy la relación con el cosmos pase por el jaibaná. Es la mejor fuente para lo que la ficha llama «quién puede atravesarlos y qué debe respetar en cada uno».",
    limitation:
      "Es emberá eyábida de Chigorodó (Antioquia), no chamí: los nombres, los sitios sagrados y la entidad Pãkðré/drua wãndra son de ese territorio y no deben trasladarse al alto San Juan. No cuenta el origen de los mundos ni da cifras (no hay ocho ni nueve), y su interés es ambiental y jurídico —la protección de sitios sagrados—, no cosmogónico.",
  }),
  risaraldaHistoria2025: source({
    title: "Historia embera de creación del sol y la luna",
    author: "Oraliteca de Risaralda, con narración y traducción de Aider Borocuara y Carolina Borocuara",
    year: 2025,
    type: "audio",
    url: "https://www.ivoox.com/historia-embera-de-creacion-del-sol-y-la-audios-mp3_rf_161731387_1.html",
    summary:
      "Relato de origen emberá chamí sobre el nacimiento del sol y la luna, umada y jedeko, narrado y traducido por los hermanos Aider y Carolina Borocuara en la vereda Alto Cielo, Pueblo Rico, dentro del Resguardo Unificado Emberá Chamí; grabado en 2025 por Sebastián Orrego (Corporación Oshún). Es la contraparte viva y localizada de esta ficha: una explicación chamí contemporánea, en lengua y con narradores nombrados, de cómo quedó establecida la alternancia de luz que el relato de Río Frío da por perdida y recuperada dos veces.",
    limitation:
      "No es una versión de este relato: no hay oscuridad total, ni piedras rotas, ni muertes, ni agricultura sin herramientas. Es audio en emberá bedea con traducción de los propios narradores y no hay transcripción publicada, de modo que solo puede citarse por su ficha y su descripción; no pude escuchar el contenido íntegro ni cotejar la traducción. Procede de Pueblo Rico y no de Río Frío.",
  }),
  vargasDevenir2014: source({
    title: "Devenir pueblo embera: el mito del agua",
    author: "Carolina Castañeda Vargas",
    year: 2014,
    type: "ponencia",
    url: "https://www.aacademica.org/000-081/504",
    summary:
      "Resume la versión del Alto Sinú —un emberá descubre una laguna llena de peces y la esconde; el pueblo exige a Karagabí que revele el secreto; el hombre convierte la laguna en un jenené «inmenso y espeso que oculta la luz del sol», impenetrable a cualquier hacha; y el centro del relato es la lucha por derribarlo, cada vez más resistente— y muestra después cómo ese mito fue releído por los líderes de CAMAEMKA durante la lucha contra Urrá: las cuatro raíces del jenené pasaron a ser los horcones del tambo y las bases del pueblo emberá. Para esta ficha aporta la lectura que ninguna otra fuente da: qué hace hoy el relato, y por qué el trabajo colectivo de ocho días alrededor del tronco es lo que la gente retiene.",
    limitation:
      "Es emberá katío del Alto Sinú, no chamí: el árbol libera ríos de ese territorio y no el Cauca y el Magdalena, no hay Héntserá ni muchacho espía ni ardillas con narigueras, y el acaparador es un emberá anónimo, no un ser mítico dueño del agua. La autora no recogió el mito de un narrador sino que lo resume de fuentes previas y de entrevistas con el asesor Efraín Jaramillo; su objeto es el proceso organizativo, y el propio texto muestra que esa versión fue reelaborada políticamente en los años noventa.",
  }),
  domicomito2006: source({
    title: "El mito sobre el origen del agua",
    author: "Kimy Pernía Domicó, Luis Ángel Domicó y Efraín Jaramillo",
    year: 2006,
    type: "articulo",
    url: "https://www.semillas.org.co/es/el-mito-sobre-el-origen-del-agua",
    summary:
      "Narración firmada, publicada en la Revista Semillas 28/29, en la que Karagabí reparte cada mañana el hilito de agua que brota al golpear una varita contra dos piedras, hasta que descubre a un indio que tiene agua y pescado en abundancia; tras cuatro negativas lo convierte en Jenzerá —«es por eso que las hormigas no pueden tomar agua y tienen que cargarla en gotas sobre el pico»— y encuentra la laguna transformada en un jenené «inmenso que llegaba hasta el cielo y oscurecía todo». El derribo ocupa el resto: hachas de piedra que rebotan, el corte que amanece cerrado porque el sapo bocorró cura el árbol de noche, un hacha de oro para llegar al corazón, y los micos que fracasan uno tras otro hasta que «le tocó el turno a la ardita, esta sí pudo cortar el bejuco». Es la única versión hallada donde la ardilla es quien resuelve la caída, lo que da profundidad a las ocho ardillas de Río Frío, que Reichel registra sin explicar.",
    limitation:
      "Es emberá katío del Alto Sinú y llega por la voz de Kimy Pernía Domicó en el contexto de la lucha contra Urrá, publicada por una ONG en una revista de divulgación sin arbitraje; no hay indicación de quién transcribió ni cuándo se recogió. Su desenlace territorial nombra ríos del Sinú y del Chocó, no el Cauca ni el Magdalena, y no aparecen ni Héntserá como dueño previo que comparte un poco de agua, ni el muchacho espía, ni las narigueras monsimá que se revientan al caer el árbol.",
  }),
  turbayNotas2021: source({
    title: "Notas sobre los nombres personales embera",
    author: "Sandra Turbay y José Joaquín Domicó",
    year: 2021,
    type: "articulo",
    url: "https://www.scielo.cl/scielo.php?pid=S0717-73562021000100131&script=sci_arttext",
    summary:
      "Documenta que el árbol del agua sigue operando como referencia viva en la nominación: el artículo registra que «el mito cuenta que el dios Karagabí tuvo que cortar este árbol para liberar el agua y formar los océanos y los ríos», y lo conecta con la atribución de apellidos por Karagabí «para prevenir el incesto». Sirve a esta ficha para mostrar que la caída del jenené no se recuerda solo como explicación hidrográfica sino como el acto de un creador que al mismo tiempo ordena la sociedad, que es justamente la dimensión que la versión escueta de Río Frío no desarrolla.",
    limitation:
      "Es una mención de una sola frase dentro de un artículo cuyo tema son los nombres personales: no transcribe el mito ni discute sus variantes. El material es emberá eyábida de Murindó y Mutatá (Antioquia), no chamí. No aparecen Héntserá, el muchacho espía, las ocho ardillas ni las narigueras monsimá, y el reparto de las aguas no se detalla.",
  }),
  rojasescalera1986: source({
    title: "La escalera de cristal: términos y conceptos cosmológicos de los indígenas Emberá",
    author: "Mauricio Pardo Rojas",
    year: 1986,
    type: "artículo de revista académica",
    url: "https://revistas.unal.edu.co/index.php/maguare/article/view/21-46",
    summary:
      "Trae la única versión publicada que narra el episodio completo del engaño y el castigo: Karagabí vivía con una mujer y estaba cubierto de llagas; ella dejó de quererlo, se iba sola a las fiestas y le era infiel —en unas versiones con Trítuku (variante dialectal de Tutruiká), que algunas hacen su hermano—. Cuando Karagabí «puso a la mujer en evidencia», la castigó convirtiéndola en /barákoko/, que Pardo identifica como el pájaro luna, sacaparado o gallina ciega (Nyctibius griseus), y como Trítuku llevaba la luna en la cabeza a manera de flor blanca, la mujer quedó condenada a mirarla eternamente. Da además el vocabulario cosmológico comparado (sol, luna, fases lunares) en varios dialectos emberá, útil para situar el detalle «grita cuando hay luna llena» de Río Frío.",
    limitation:
      "El trabajo de campo de Pardo es del alto río Baudó (Santa María de Condoto, Miácora, La Felicia) y de la quebrada Guangul, en Timbiquí (Cauca): no es chamí, y lo chamí entra solo citado de Chaves y Reichel. La estructura del episodio difiere de la de Río Frío: aquí el amante es un rival identificado y no Karagabí disfrazado y rejuvenecido, no hay tres bailes, y el ave es un nictibio que mira la luna, no la lorita que grita con luna llena. La identificación zoológica (Nyctibius griseus) es de Pardo, no de los narradores. El PDF es una digitalización con OCR sucio y el nombre Karagabí aparece a veces como «Karagabl».",
  }),
  uribeJaibanas1985: source({
    title: "Jaibanás. Los verdaderos hombres",
    author: "Luis Guillermo Vasco Uribe",
    year: 1985,
    type: "libro (PDF completo en el sitio del autor)",
    url: "http://www.luguiva.net/libros/detalle.aspx?id=7",
    summary:
      "Reúne y coteja las versiones del episodio. Cita el mito anotado por Chaves (1945: 154): después de convertir en lechuza (borokoko) a su mujer y unirse con su cuñada —castigándola por haberlo engañado en las fiestas, a las que él no podía asistir por las llagas que le cubrían el cuerpo—, Caragabí reunió a todos los indios, los hizo gritar y los convirtió en animales, empezando por el capitán Imamá (tigre). Añade la clave de lectura de Wassén (1933: 111): Carabí es la luna y las llagas «estaban en su camisa», es decir, eran una cubierta que se quitaba; por eso la mujer-lechuza llora de noche cuando sale la luna. Eso explica el vínculo entre el ave y la luna que la versión de Río Frío conserva sin explicar.",
    limitation:
      "Es una obra de síntesis y análisis, no una transcripción: Vasco lee la versión de Chaves —la que la ficha identifica como katío, del narrador Rafael Bailarín— y la de Wassén, recogida entre chocoes del istmo de Panamá por Nordenskiöld. No discute la versión chamí de Río Frío ni la lorita; ni siquiera la menciona en este pasaje. El marco interpretativo (equilibrio, apertura/cierre, humanización) es del autor y es explícitamente estructuralista. La grafía del ave oscila entre borokoko y barákoko según la fuente.",
  }),
  kreutzercruces2001: source({
    title: "Los cruces del sendero: cosmovisiones y sistema jurídico de los Emberá-Chamí",
    author: "Guillermo D'Abbraccio Kreutzer",
    year: 2001,
    type: "artículo de revista académica",
    url: "https://repositorio.pucp.edu.pe/handle/20.500.14657/113974",
    summary:
      "Único artículo consultable en línea dedicado específicamente a la cosmovisión chamí del alto San Juan (Mistrató, Pueblo Rico, Santa Cecilia) que explica la lógica del castigo por transformación que rige esta historia: entre los chamí, Karaví convierte en animales o astros a quienes rompen la norma —el sol y la luna, hermanos, son castigados por incesto y de ahí salen los apellidos que impiden repetirlo—, y los burumiáes antropófagos son quemados dentro de los árboles que habitaban. Sitúa así la conversión de la mujer en lorita dentro de un repertorio chamí de sanciones, y no como un juicio moral aislado sobre la fidelidad conyugal.",
    limitation:
      "No narra el episodio de la mujer de Karagabí: ni el baile, ni los tres regresos, ni el ave. Los pasajes cosmogónicos van entrecomillados y proceden de compilaciones previas (Pardo 1987, Vasco 1978, Zuluaga 1997), no de trabajo de campo propio del autor, que escribe desde el derecho y la filosofía política. Usa la grafía Karaví, distinta de la de las demás fuentes. El PDF es un escaneo con OCR defectuoso (aparecen «Carabagl», «challlÍ»).",
  }),
  uribeemberachami1993: source({
    title: "Los embera-chamí en guerra contra los cangrejos",
    author: "Luis Guillermo Vasco Uribe",
    year: 1993,
    type: "capítulo de libro (texto completo en el sitio del autor)",
    url: "https://www.luguiva.net/libros/detalle1.aspx?id=227&l=3",
    summary:
      "Recoge, entre los chamí del alto río Garrapatas (norte del Valle del Cauca), la cosmología de Rosa Elvira, maestra chamí originaria del alto San Juan: tres mundos, el de arriba (bajía), donde están Carabí —la luna— y Ba, el trueno; el nuestro, la tierra (egoró); y el de abajo, «aremuko o chiapera», al que se llega por el agua y donde viven los dojura, Tutruica, Jinopotabar y los antepasados, y donde se originan los jaibaná. Y es allí donde la misma narradora dice que «su papá es Carabí»: en esta versión chamí el visitante del mundo de abajo es a la vez Jinopotabar y el hijo de Karagabí, lo que contradice la separación tajante que la ficha establece entre los dos personajes.",
    limitation:
      "Atención: esta URL ya está citada en las veintidós fichas, pero bajo un título equivocado («Chamí: Literatura de Colombia aborigen, en pos de la palabra», Nengarabe y Vasco, 1978). Lo que la página sirve en realidad es este capítulo, publicado en Correa Rubio (ed.), «Encrucijadas de Colombia amerindia» (ICAN, 1993) y reimpreso en «Entre selva y páramo» (ICANH, 2002). En cuanto al contenido: Rosa Elvira no narra la operación del ano —ese episodio no aparece aquí—, sino el mapa cosmológico y la filiación; el esquema de los tres mundos está redactado por Vasco resumiendo lo que ella piensa, no citado en su voz; y son chamí de Garrapatas, migrantes desde el Chamí hace unos sesenta años, no de Río Frío.",
  }),
  ferrariletteratura2025: source({
    title: "La letteratura orale embera: inquietudini e oscillazioni enunciative nel mito contemporaneo",
    author: "Simone Ferrari",
    year: 2025,
    type: "artículo de revista académica",
    url: "https://confluenze.unibo.it/article/view/19008",
    summary:
      "Compara motifema por motifema dos narraciones emberá dóbida recogidas en 2022 y muestra que «il mondo degli esseri senza ano» es uno de los elementos fijos que ambas comparten, junto con la serpiente, el desafío a la luna y la intervención del pájaro carpintero. Documenta además que los dos narradores evalúan de manera opuesta lo que ocurre allí abajo: Graciliano subraya la función reguladora del protagonista, mientras Lizandro se detiene precisamente en «las consecuencias trágicas de la incapacidad de controlar la propia fuerza» en el mundo de abajo —una lectura interna que respalda, desde la propia tradición, leer la operación como catástrofe y no como hazaña.",
    limitation:
      "Es una versión ampliada en italiano del artículo de Ferrari de 2023 que las fichas ya citan, de modo que aporta análisis nuevo pero sobre el mismo material. Las comunidades son emberá dóbida de Yucal (río Panguí) y Boca de Jagua (río Chorí), Chocó, en contexto de desplazamiento forzado: no son chamí. El protagonista es Jinu Potó, no el hijo de Karagabí, y el artículo no cita la transcripción de Río Frío.",
  }),
  ferrarimito2025: source({
    title: "El mito embera de Jinu Potó [conjunto de datos]",
    author: "Simone Ferrari",
    year: 2025,
    type: "conjunto de datos de acceso abierto (Zenodo)",
    url: "https://zenodo.org/records/15517597",
    summary:
      "Publicación abierta y citable (DOI 10.5281/zenodo.15517597, licencia CC BY 4.0) de las transcripciones completas en castellano de las dos narraciones orales de Jinu Potó que Ferrari analiza en el artículo de Confluenze: es decir, la vía para leer el texto entero de las versiones de Graciliano y Lizandro sin depender del resumen del investigador. Permite comparar palabra por palabra la secuencia dóbida con la transcripción de Río Frío en vez de comparar dos síntesis.",
    limitation:
      "Sólo pude verificar la ficha del depósito —título, autor, fecha, DOI, licencia y la descripción «Dos versiones del relato oral embera de Jinu Potó»— y no el contenido del archivo: la descarga del .docx devolvió un 403 por restricción de tráfico, de modo que no he leído las transcripciones. La identificación de los narradores y las comunidades procede del artículo de Confluenze, no de la ficha del depósito. Es material dóbida del Chocó, no chamí, y el archivo es un .docx, no un formato de archivo estable.",
  }),
  seleccionbabea2010: source({
    title: "El Sol babea jugo de piña. Antología de las literaturas indígenas del Atlántico, el Pacífico y la Serranía del Perijá (Biblioteca Básica de los Pueblos Indígenas de Colombia, tomo 3)",
    author: "Miguel Rocha Vivas (selección, introducción y notas), Ministerio de Cultura",
    year: 2010,
    type: "antología comentada",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll8/id/3",
    summary:
      "Incluye «El ñeque y el tigre» en la sección «Cuento de animales» de la literatura emberá katío, con narrador y lugar declarados: Joaquín Conde, Miácora. El texto encadena, en este orden, los mismos motivos que la versión chamí de Río Frío: el ñeque mata y cocina a las crías del tigre y se las sirve a los padres; huye a un hueco en la raíz de un choibá; hace que el perseguidor engarce una raíz creyendo que es su pata («Ahí lo que tiene agarrado es una raíz, afloje un momento»); y termina convenciendo al tigre de machucarse los testículos con una piedra para comer «táparo». La introducción de Rocha Vivas es lo más útil para la ficha: explica que la separación editorial entre textos katío y chamí «no responde a diferencias de raíz sino de ramas», y que ambos «comparten numerosos relatos»; cita también la clasificación de Pardo, que sitúa las historias de animales como las que «pueden representar facultades o comportamientos sociales».",
    limitation:
      "La versión concreta es emberá katío del alto Baudó (recogida por Mauricio Pardo para Zrõarã Nẽburã, 1984), no chamí: el trío perseguidor, la fiesta con chicha y el tambor, la ardita y el disfraz de miel y hojas que trae el relato de Río Frío no están aquí. La antología es una selección literaria con notas del compilador, no una edición crítica, y advierte que a los textos se les dio «la forma de expresión que pensamos necesaria para la unidad del trabajo». El volumen solo se consulta como PDF de 768 páginas en la biblioteca digital del Banco de la República.",
  }),
  iNDEITradicion2006: source({
    title: "La Tradición Oral Embera en la Enseñanza de la Lengua Castellana. Un aporte en la recuperación de la cultura para la conservación y la educación ambiental",
    author: "INDEI, Organización Indígena de Antioquia y WWF Colombia; maestros de los resguardos de Yaberaradó y Polines (Chigorodó)",
    year: 2006,
    type: "recopilación comunitaria",
    url: "https://awsassets.panda.org/downloads/web_embera_final_2.pdf",
    summary:
      "Trae «Tigre con su mujer», narrado por Ezequiel Domicó y recogido por la maestra Ligia Domicó Bailarín, donde el embaucador no es el guatín sino el conejo. Contiene dos episodios que la ficha chamí da por sueltos: el conejo le tira una bola de tierra en el ojo al guardián que el tigre dejó cuidando la cueva —una lechuza, donde el relato chamí pone una ardita— y, al final, «cogió tierra… se la tiró a la lechuza pegándole en el ojo» y hace que el tigre se golpee el testículo con una piedra creyendo que come «tonaba». Sirve para mostrar que la cadena de engaños circula entre los emberá con distintos animales en el papel del pequeño.",
    limitation:
      "Esta versión es emberá eyábida (katío) del Urabá antioqueño; el libro identifica por separado a los maestros chamí que participaron, y ninguno firma este relato. Es material escolar bilingüe hecho para el aula, con reescritura de los maestros y sin transcripción en lengua, así que no puede citarse como registro etnográfico. El nombre «conejo» en lugar de ñeque o guatín puede venir tanto de la variante local como de la traducción al castellano; el libro no lo aclara.",
  }),
  uribeFloresmiro1986: source({
    title: "Floresmiro Dogirama: «Zroara Nebura. Historia de los Antiguos. Literatura oral emberá» [reseña]",
    author: "Luis Guillermo Vasco Uribe",
    year: 1986,
    type: "reseña académica",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/view/7263",
    summary:
      "Discute la colección donde se publicó «El ñeque y el tigre» y ataca justamente la etiqueta bajo la que aparece. Vasco objeta que agrupar los relatos por el tipo de protagonista no sirve, «dado el papel que las transformaciones de unos seres en otros y la antropomorfización de la naturaleza juegan en el pensamiento emberá», y recuerda que en el mito los personajes son «materializaciones narrativas de conceptos muy abstractos». Es el argumento que impide leer al guatín como fábula de animales con moraleja: da el contrapeso interno para la capa de Lección.",
    limitation:
      "Es una reseña de dos páginas (Boletín Museo del Oro 16, 1986, pp. 92-93), no un análisis del relato del ñeque: no lo resume ni lo comenta punto por punto. Vasco discute una obra recogida en el alto Baudó, emberá de río, y su reparo de fondo —que convertir mito en «literatura» lo «desnaturaliza»— es una postura suya en polémica con el compilador, no un consenso; conviene citarla como posición, no como dato.",
  }),
  raceroCasarrubiaReconocimiento2023: source({
    title: "Reconocimiento y usos tradicionales de medianos y grandes mamíferos por comunidades del resguardo indígena Jaikerazavi (Embera Katíos), Mutatá, Antioquia, Colombia",
    author: "Javier Racero-Casarrubia, Arnold Argel-Fernández, Yobani Dogari-Carupia y Katia Reyes-Cogollo",
    year: 2023,
    type: "artículo de revista",
    url: "https://dialnet.unirioja.es/servlet/articulo?codigo=10699049",
    summary:
      "Fija quién es el animal del relato. Registra Dasyprocta punctata con su nombre castellano local, «ñeque», y su nombre en lengua emberá, «Kuriwa» —la misma palabra que Cardona y Guerra escriben «Kuriva» para el personaje—, y lo sitúa entre las presas de cacería más reconocidas y consumidas del resguardo. Permite decir en la ficha, con respaldo, que el guatín del relato es un roedor de monte que la gente caza y come, y no una figura exótica.",
    limitation:
      "No es una fuente narrativa: es un estudio de uso de fauna con encuestas y cámaras trampa, y no menciona relato alguno. El trabajo es con emberá katío (eyábida) de la serranía de Abibe, Mutatá, Antioquia, no con chamí, así que la equivalencia del nombre en la variante chamí queda por confirmar. Publicado en Revista Etnobiología 21(2), 2023, pp. 18-35; el sitio de la revista pide registro para navegar el archivo, de modo que solo pude leerlo por el PDF que sirve Dialnet.",
  }),
  ferrariJinu2023: source({
    title: "Jinu Potó, ¿mito o historia? Desplazamientos del saber y cuestionamientos epistémicos en la narración oral del pueblo embera dóbida",
    author: "Simone Ferrari",
    year: 2023,
    type: "artículo de revista",
    url: "https://editorial.ucatolica.edu.co/index.php/RevClat/article/view/5439",
    summary:
      "Es el estudio comparativo del ciclo que la ficha ya invoca por el apellido del autor sin citarlo. Ferrari declara que las aventuras de Jinu Potó «integran la mitopoiética de distintos pueblos embera, entre ellos los embera dóbida, los embera catío y los embera chamí», y desarma la variación en motifemas: el padre cambia según la versión —«otros como una nutria o un murciélago», también Picario el primer jaibaná, un espíritu o la luna—; el desenlace cambia (una fiera, un aberrojo, un tronco de guayacán, un «indio brujo»); y el juicio ético sobre el protagonista cambia con él. Confirma dos rasgos del texto de Río Frío como parte del ciclo y no como adornos: el mundo de abajo de los seres sin ano «quienes se nutren por medio del olfato», y el mérito de «dejando viva una pareja de cada una de las especies de animales asesinadas». Cierra con una fórmula útil para la Lección: los héroes emberá «favorecen y al tiempo incomodan a la comunidad».",
    limitation:
      "Las dos versiones que el artículo transcribe y analiza en detalle son emberá dóbida del Chocó —Graciliano, de Yucal, y Lizandro, de Boca de Jagua, grabadas en 2022—, no chamí; lo chamí entra solo por el listado bibliográfico. El interés central de Ferrari es metodológico (qué ocurre «entre» la narración, en contextos de desplazamiento forzado), de modo que el resumen del ciclo es un marco y no un cotejo verso a verso. Publicado en Cultura Latinoamericana 37(2), pp. 148-173.",
  }),
  riosAdaza2020: source({
    title: "Aɨdaɨza y baa wa waljai wa wa: relatos, visiones y entramados sobre «discapacidad» desde dos mundos indígenas en Colombia",
    author: "Alexander Yarza de los Ríos",
    year: 2020,
    type: "artículo de revista",
    url: "https://doi.org/10.30578/nomadas.n52a5",
    summary:
      "Se detiene en el mundo al que cae el protagonista. Reconoce «Juro potowar» como uno de los tres relatos emberá que analiza y desarrolla Do Karrá, «la raíz del río» (do, río; karrá, raíz), «el lugar de la gente incompleta que se forma al lavarse la gente después del acto sexual», citando a Pardo. Reproduce la voz de Floresmiro Dogiramá: «hallaron gente chiquitica… unos con los brazos mochos, otros con las patas mochas, otros con la nariz mocha, otros con un sólo ojo». Da un marco para leer los cuerpos incompletos del mundo de abajo sin convertirlos en monstruos ni en castigo: para el autor el cuerpo «es energía y espíritu, y puede transformarse y ser transformada… como castigo, voluntad propia o consecuencia ecogénica».",
    limitation:
      "El trabajo de campo es de septiembre de 2019 en Frontino, Antioquia, con comunidades êbêra eyábida del resguardo Chaquenodá, y el material de Do Karrá viene de la traducción de Pardo (1984, 1987): no hay aporte chamí. El artículo elige ocuparse de Do Karrá y no de Juro potowar, al que solo nombra. Además distingue Do Karrá del mundo de los seres sin ano, que es el que visita el protagonista en Río Frío: son dos lugares, y la ficha no debe fundirlos. Nómadas 52 (2020), pp. 81-95.",
  }),
  rojasIntercambios2020: source({
    title: "Intercambios y resiliencia entre los embera del Chocó, Colombia",
    author: "Mauricio Pardo Rojas",
    year: 2020,
    type: "artículo de revista",
    url: "https://doi.org/10.25058/20112742.n36.07",
    summary:
      "Formula en una frase lo que la ficha necesita como premisa: «Como en otras sociedades indígenas, en tiempos míticos los animales eran gente», y explica que por acción de una deidad primordial humanos y animales adquirieron su diferenciación actual. Desarrolla después lo que sostiene la capa de reciprocidad: las presas de cacería y pesca «están bajo el poder de los uãdra, o madres de los animales», los animales portan sustancias místicas en el cuerpo, hay restricciones dietarias por persona y presagios según cómo se comporte tal o cual animal. Es el respaldo académico para decir que el animal no es un recurso sino un término de intercambio.",
    limitation:
      "Es etnografía del Chocó —emberá de río, dóbida— y no chamí; los nombres (uãdra, jai) son de esa variante y no deben trasladarse sin más al vocabulario chamí. El artículo es de antropología económica: su tema son los intercambios y la resiliencia, y la cosmología entra como marco, sin análisis de relatos concretos. Tabula Rasa 36 (2020), pp. 177-200; el sitio de la revista responde con una verificación antirrobots, así que leí el texto por la copia que sirve Redalyc.",
  }),
  camachoPalabras2025: source({
    title: "Palabras para antes y después de leer Transformaciones de eternidad: gente y cosmos en el pensamiento embera (Isacsson, 2022) [reseña]",
    author: "Alejandro Alzate Camacho",
    year: 2025,
    type: "reseña académica",
    url: "https://doi.org/10.17151/rasv.2025.27.2.13",
    summary:
      "Es la puerta consultable a la única monografía que hace de la transformación el eje del pensamiento emberá: la tesis doctoral de Sven-Erik Isacsson, escrita en 1993 y publicada en castellano por la Universidad del Cauca en 2022. La reseña resume el argumento —el corte y la aniquilación como operación que produce y transfigura, el pecho como interior inmenso, el rostro verdadero del asesino, el mundo que se hace cortando «una y otra vez»— y menciona expresamente el episodio en que personas se vuelven animales distintos bajo las órdenes de Karagabí. Nombra también el terreno del libro, «entre los ríos Atrato, Baudó y San Juan», y hace una observación de parentesco chamí que sirve a la ficha.",
    limitation:
      "Es una reseña, no el libro: da la línea del argumento y un puñado de capítulos, no los datos ni los relatos. El libro de Isacsson no está en acceso abierto —solo se vende en papel—, así que no pude verificar sus pasajes; la ficha debe citar la reseña como reseña y no atribuir a Isacsson nada que no aparezca aquí. Además, el material de Isacsson es de los ríos del Chocó, no del Chamí. Virajes 27(2), 2025, pp. 303-315.",
  }),
  uribeEmbera: source({
    title: "Embera: etnónimos, localización, historia y organización social",
    author: "Luis Guillermo Vasco Uribe",
    type: "entrada de enciclopedia de culturas del mundo, texto completo en el sitio del autor",
    url: "http://www.luguiva.net/articulos/detalle.aspx?id=87",
    summary:
      "Fija quién es el personaje que roba la candela: «Los mitos remiten a Carabí, la luna, como el dador de la cultura; algunos lo presentan como un ser creador, pero que no desempeña ningún papel en la vida de hoy». Explica además el marco de los jai —fuerzas invisibles que son la esencia de animales y personas y que sólo el jaibaná percibe y controla—, que es lo que hace inteligible que Karagabí pueda volverse pez y volver hormiga a Hímo sin que el relato lo comente.",
    limitation:
      "Es una síntesis enciclopédica para el conjunto emberá, no un estudio del chamí ni del relato de la candela; no menciona a Hímo ni el fuego. La identificación de Carabí con la luna es una de varias que circulan y el propio texto señala que otras versiones lo presentan como creador.",
  }),
  jardinProceso2015: source({
    title: "Proceso de formulación participativa del Plan Integral de Vida «Construyendo el tambo para nuestros hijos». Resguardo Indígena Karmata Rúa - Cristianía",
    author: "Cabildo de Karmata Rúa (Jardín y Andes, Antioquia)",
    year: 2015,
    type: "documento propio de cabildo",
    url: "https://www.antioquia.gov.co/images/PDF2/gerencia-indigena/Documentos_juridicos/PLAN%20DE%20VIDA%20KARMATA%20RUA.pdf",
    summary:
      "Es la comunidad chamí hablando hoy del personaje del relato: el plan de vida dice «Nuestro Dios, Karagabí, transmite gran parte de su conocimiento en el jaibaná y permite que este actúe para regular» la vida de la comunidad, y sitúa los mitos de origen y el jaibanismo entre los rasgos que definen la identidad chamí. Permite sostener que Karagabí no es sólo un nombre de 1945 sino una figura viva, y que su papel es el de dar conocimiento, que es exactamente lo que hace al quitarle la candela a Hímo.",
    limitation:
      "Es un documento de planeación, no un corpus de relatos: no narra el mito de la candela ni menciona a Hímo. Karmata Rúa es chamí del suroeste antioqueño, cuyos primeros pobladores vinieron de San Antonio del Chamí (Risaralda), no de Río Frío (Valle), donde se recogió la versión de esta ficha.",
  }),
  carvajalReichelDolmatoff2023: source({
    title: "Reichel-Dolmatoff y el chamanismo chocó, una mirada desde los embera-chamí",
    author: "Juan Carlos Rubiano Carvajal",
    year: 2023,
    type: "artículo de revista universitaria (Boletín de Antropología 38(66): 111-129, Universidad de Antioquia)",
    url: "https://revistas.udea.edu.co/index.php/boletin/article/view/352719",
    summary:
      "Relee a Reichel-Dolmatoff —el etnógrafo que firma la transcripción de control de esta ficha— desde etnografía chamí actual, y lo hace sobre tres ejes, uno de los cuales es «el vestido chamánico como incorporación de cualidades ajenas». Ese eje da una lectura no decorativa de la metamorfosis de Karagabí en pescado: convertirse en otro es apropiarse de sus capacidades, no disfrazarse. Es la única fuente localizada que discute críticamente, desde el chamí, la obra del recopilador de 1953.",
    limitation:
      "No analiza «Algunos mitos de los indios Chamí» (1953) ni ningún relato del fuego; discute la obra chamanológica de Reichel-Dolmatoff sobre el Chocó. Es un aporte interpretativo, no una versión del mito: no puede usarse para afirmar nada sobre la secuencia de Hímo.",
  }),
  uribeplata2001: source({
    title: "El oro y la plata entre los embera y waunaan",
    author: "Luis Guillermo Vasco Uribe",
    year: 2001,
    type: "artículo de revista científica (Boletín Museo del Oro 48: 1-37, Banco de la República)",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/view/4861",
    summary:
      "Explica por qué el relato empieza hablando de oro. Retoma la historia —«recogida por Reichel-Dolmatoff (1953) entre los chamí de Riofrío, Valle... la del sol fue preparada con maíz caliente y así fue apresado y guardado dentro de un talego rojo»— y la inserta en una tesis: el oro tiene su «lugar natural» en el mundo de arriba y en el de abajo, no en éste, y por eso quienes lo tienen son la gente del sol, la gente de la luna, el trueno en su bohío de oro y los muertos. La riqueza de los astros deja de ser un adorno del comienzo y pasa a ser la razón por la que su encierro apaga el mundo.",
    limitation:
      "El artículo es sobre metales, no sobre astronomía: el mito aparece como un ejemplo dentro de un argumento más amplio y Vasco no discute el final (la emboscada, el suicidio del jefe, la sucesión). Mezcla material chamí, emberá del Chocó y waunaan, y buena parte de sus ejemplos vienen de campo propio en Risaralda (Villa Claret, Santa Cecilia) y no de Río Frío.",
  }),
  teresaindios1959: source({
    title: "Los indios catíos, los indios cunas. Ensayo etnográfico de dos razas de indios de la América Española",
    author: "Fray Severino de Santa Teresa, O.C.D.",
    year: 1959,
    type: "monografía etnográfica misionera, texto completo digitalizado",
    url: "https://archive.org/details/losindioscatiosl00seve",
    summary:
      "Conserva la versión emberá en que el sol y la luna no son objetos sino personas con voluntad y con quien negociar: «Después pensó arreglar el sol y la luna. Llamó al primero y le ordenó dónde había de situarse», y ambos replican y consiguen que se los ponga más lejos. Y registra la variante de parentesco: «El sol y la luna eran dos hermanos que por incesto los convirtió Caragabí en astros», con los nombres Humántahu (sol) y Gedeco (luna). Sostiene que los astros tratan, discuten y desobedecen: la premisa que hace posible que puedan ser atraídos con comida y encerrados.",
    limitation:
      "Es emberá katío de la Prefectura Apostólica de Urabá, no chamí, y el autor es un misionero carmelita que escribe para justificar la evangelización: su vocabulario («metempsicosis», «pecados», «castigo») es suyo y no de los narradores. El ejemplar digitalizado es la edición de Medellín de 1959; la primera versión de estos materiales se publicó en Bogotá en 1924. No contiene nada sobre encerrar a los astros en talegos.",
  }),
  historicaCaragabi2018: source({
    title: "Caragabí (micrositio «Dachi Chiuu, Nuestra Lucha»)",
    author: "Centro Nacional de Memoria Histórica, con la comunidad emberá katío del resguardo Tahamí-Alto Andágueda",
    year: 2018,
    type: "micrositio documental de entidad estatal, con contenido de la comunidad",
    url: "https://micrositios.centrodememoriahistorica.gov.co/dachichiuu/caragabi/",
    summary:
      "Es la versión que una comunidad emberá autoriza hoy sobre el mismo episodio: el árbol Jenené y la transformación de Gentserá en hormigas, junto con el origen del agua —«Del tronco del árbol Jenené se crearon los mares Atlántico y Pacífico, de las ramas más grandes surgieron ríos caudalosos como el Atrato y el San Juan»—. Muestra que el paso de persona a hormiga sigue siendo un episodio contado y reivindicado, y no un dato de archivo de 1945.",
    limitation:
      "Es emberá katío del Alto Andágueda (Chocó), no chamí, y el micrositio está montado por el CNMH (coordinación de Edinso Culma Vargas, investigación de Mauricio Cañón): la voz comunitaria llega editada, sin narrador individual identificado y sin indicación de cuándo se recogió. No narra nada parecido a la mujer embijada ni a los tambos que aparecen y desaparecen.",
  }),
  loaizaoralidad2002: source({
    title: "La oralidad y la escritura entre los Embera-Chamí: aspectos educativos",
    author: "Fernando Romero Loaiza",
    year: 2002,
    type: "ponencia académica con transcripciones de relatos (III Congreso Virtual de Antropología y Arqueología)",
    url: "https://www.equiponaya.com.ar/congreso2002/ponencias/fernando_romero_loaiza3.htm",
    summary:
      "Es la única fuente localizada donde el oso aparece como personaje en un texto chamí contemporáneo: dentro de un relato escrito por un maestro indígena del resguardo de Purembará (Risaralda) en los talleres etnolingüísticos de la Licenciatura Indígena de la Universidad Tecnológica de Pereira, «el oso le golpeaba muy fuerte a la mujana con un palo», en una pelea por el cuidado de un sembrado que termina con la muerte de ambos. Confirma que el oso es un antagonista físico y violento en la narración chamí —golpea con palo, como en Río Frío—, y no una figura romántica.",
    limitation:
      "No es el mito de la mujer raptada: es otro relato, sobre un sembrado y un ser llamado mujana, sin mujer cautiva ni hijo híbrido. El texto está transcrito tal como lo escribió el maestro, con la ortografía del original, y la ponencia lo usa como ejemplo de transferencia de la oralidad a la escritura, no como documento mitológico.",
  }),
  arnoldJukumarinti2001: source({
    title: "Jukumarinti sawurinti: el oso-guerrero y la tejedora. Un repertorio literario de lo masculino y lo femenino en los Andes",
    author: "Denise Y. Arnold y Ricardo López",
    year: 2001,
    type: "artículo de revista científica (Revista Ciencia y Cultura 9, Universidad Católica Boliviana)",
    url: "http://www.scielo.org.bo/scielo.php?script=sci_arttext&pid=S2077-33232001000100002",
    summary:
      "Trata el motivo completo —oso que rapta a una mujer, hijo híbrido de fuerza descomunal, regreso al poblado— como un repertorio con función social precisa: «Los cuentos de Juan el oso se narran en la estación lluviosa y se dirigen a los adolescentes de ambos sexos», es decir, como rito de paso y no como entretenimiento. Ofrece el contrapeso exacto a la lectura sentimental que la ficha corrige, y explica por qué el hijo, y no la madre ni el padre, es quien decide el desenlace.",
    limitation:
      "Es andino (provincias Carangas y Avaroa, Oruro, Bolivia), aymara y quechua: no es emberá ni chamí, y no hay ninguna relación histórica demostrada con Río Frío. La comparación vale como motivo, y la propia ficha advierte que compartir un motivo no prueba parentesco. Además el análisis está orientado a la oposición masculino/femenino en los Andes, que no es la del relato chamí.",
  }),
  gonzalezJuan2009: source({
    title: "Juan Oso y la redención del salvaje",
    author: "Roberto Martínez González y Francisco Lugo Silva",
    year: 2009,
    type: "artículo de revista científica (Desacatos 29, CIESAS, México)",
    url: "https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S1607-050X2009000100009",
    summary:
      "Documenta la circulación americana del motivo —«Lo encontramos, por ejemplo en Cuba... Colombia... Perú... Puerto Rico»— y, sobre todo, advierte de su historia colonial: el cuento sirvió como figura de la domesticación del salvaje por el matrimonio cristiano y por el bautismo. Es la advertencia que la ficha necesita para no tomar la semejanza como prueba de antigüedad indígena: la versión de Río Frío puede estar en contacto con un relato de difusión europea, y hay que decirlo sin cerrarlo.",
    limitation:
      "Es un estudio mesoamericano, centrado en nahuas, huaves, tepecanos y tepehuanes; Colombia sólo aparece en la lista de difusión, sin ninguna versión emberá. No demuestra que la versión chamí venga de ahí, ni lo contrario: sirve para plantear la duda, no para resolverla.",
  }),
  isacssonGentilicios1980: source({
    title: "Gentilicios y desplazamientos de la población aborigen en el noroeste colombiano (1500-1700)",
    author: "Sven-Erik Isacsson",
    year: 1980,
    type: "artículo de revista científica (INDIANA 6: 209-224, Ibero-Amerikanisches Institut, Berlín)",
    url: "https://journals.iai.spk-berlin.de/index.php/indiana/article/download/1677/1315/3635",
    summary:
      "Demuestra que los relatos emberá de guerra entre pueblos conservan memoria histórica verificable. Reconstruye con documentación española del siglo XVII la enemistad entre los citará (emberá) y los burumiá, «cuya ferocidad y canibalismo dieron origen a varias leyendas que se mantienen vivas entre los emberá hasta hoy día», y señala que en todos esos relatos los temas comunes son el engorde de los prisioneros y «la aniquilación de éstos en las llamas». La quema de las casas enemigas por los Siebidá deja de ser un detalle de color y pasa a ser el motivo estable con que los emberá cierran una guerra.",
    limitation:
      "No menciona a los Erubidá ni a los Siebidá: trata del Atrato, el Baudó y el Darién, y de emberá katío y waunana, no del Chamí. Es un informe preliminar —el propio autor advierte que el espacio no le permite presentar todos los datos— y su objeto es la etnohistoria de los gentilicios, no el análisis de los relatos, que aparecen como indicio.",
  }),
  ogariHistoria2018: source({
    title: "Historia del Aribada",
    author: "Mario Ogarí y David Marulanda",
    year: 2018,
    type: "artículo de revista de etnografía (PAI. Revista de etnografía, núm. 4, «Terrores tropicales»)",
    url: "https://pairevistaetnografia.wordpress.com/numeros-anteriores/numero-actual/historia-del-aribada/",
    summary:
      "Explica el episodio más oscuro de la ficha: el hijo del sobreviviente, brujo, que no se entierra sino que se deja en un hueco bajo la casa, del que a veces salen ruidos. El artículo describe el aribada como un muerto —típicamente un jaibaná— que «no se muere, sino que se transforma, se revive», y precisa que para que eso ocurra se requiere que «el muerto haya sido enterrado bajo tierra cerca de las viviendas», desde donde cava con uñas enormes hasta salir. El hueco bajo la casa deja de ser un dato inexplicado y pasa a ser la condición del aribada.",
    limitation:
      "Es de tradición emberá chamí pero de la zona de La Virginia y la hacienda Bohemia (Risaralda), no de Río Frío, y es un texto breve de revista de etnografía, no una edición crítica. No dice nada sobre la guerra entre Erubidá y Siebidá: ilumina un episodio, no el relato completo.",
  }),
  guamuezjaibana2015: source({
    title: "Chi jaibana aribada ome / El jaibaná y el mohán",
    author: "Docentes de la comunidad emberá chamí de Argelia (Institución Etnoeducativa Rural Santa Rosa del Guamuez)",
    year: 2015,
    type: "libro bilingüe emberá-castellano publicado por el Ministerio de Educación Nacional (serie Río de Letras, Territorios Narrados PNLE, núm. 14)",
    url: "https://colombiaaprende.edu.co/sites/default/files/files_public/plan-lectura-2021/territorios-narrados-parte-2/Chi_jaibana_aribada_ome_El_jaibana_y_el_mohan.pdf",
    summary:
      "Es el aribada contado y escrito por chamís, en lengua y en castellano. La presentación del libro define que «El mohán emberá chamí es conocido como el terrorífico aribada, un animal mitad hombre mitad» jaguar, y desarrolla la relación entre el jaibaná y ese ser, incluido el poder de enviar plagas al territorio de otro jaibaná. Permite escribir sobre el brujo muerto bajo la casa con vocabulario chamí propio y no con el de la brujería castellana, y respalda el nombre Aribadá que Chaves conserva en su versión extensa.",
    limitation:
      "La comunidad autora es emberá chamí del resguardo de Argelia, Valle del Guamuez (Putumayo), es decir chamís desplazados muy lejos de Risaralda y del Valle del Cauca: su repertorio pasó por otro territorio y por la escuela etnoeducativa. Es un libro de lectura escolar con edición del Ministerio, no un registro etnográfico, y no narra la guerra entre los dos pueblos.",
  }),
  vargasemberas1991: source({
    title: "Los emberas y los cunas en frontera con el imperio español. Una propuesta para el trabajo complementario de la historia oral y de la historia documental",
    author: "Patricia Vargas",
    year: 1991,
    type: "artículo de revista científica (Boletín Museo del Oro 29: 75-101, Banco de la República)",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/view/7040",
    summary:
      "Es el método que esta ficha necesita para tratar una guerra contada como mito. Vargas sostiene que la historia oral y la documental construyen ambas representaciones del pasado y que «cada sociedad que se relaciona con otra conserva memoria de ella según su propia concepción cultural», y trabaja con relatos emberá y cuna sobre la ocupación española de los siglos XVI y XVII mostrando cómo los relatos míticos remiten a hechos y territorios concretos. Autoriza a leer Erubidá y Siebidá como memoria de un conflicto real sin convertirla en crónica.",
    limitation:
      "Trata la frontera emberá-cuna del Darién y el Atrato, no el Chamí, y no menciona a los Erubidá ni a los Siebidá. Es una propuesta metodológica: aporta el criterio de lectura, no una versión del relato ni una fecha para él.",
  }),
  uribeAlgunas1986: source({
    title: "Algunas notas sobre historia chamí",
    author: "Luis Guillermo Vasco Uribe",
    year: 1986,
    type: "ponencia en el Seminario Regional de Historia Indígena, Secretaría de Desarrollo de Antioquia (Medellín), disponible en el sitio del autor",
    url: "http://www.luguiva.net/articulos/detalle.aspx?id=32",
    summary:
      "Documenta que la guerra no es sólo un tema de los relatos chamí sino de su historia: sublevaciones, destrucción de fundaciones españolas y huidas masivas a las cabeceras de los ríos, y una memoria oral chamí sobre el ataque y la destrucción del pueblo de San Juan de Chamí hacia 1798, con muchos muertos atrapados en la capilla durante una reunión religiosa. Ofrece el precedente exacto del episodio en que los Siebidá caen sobre los Erubidá mientras están de fiesta cantando, y quema parte de las casas.",
    limitation:
      "Los conflictos que documenta son con los españoles y con los colonos, no entre dos grupos emberá, y su tema es el despojo de tierras y el poblamiento chamí, no la mitología. Es una ponencia de 1986 sin aparato de notas en la versión en línea; la memoria oral del ataque de 1798 se contrasta con archivos españoles pero Vasco no reproduce el relato.",
  }),
  gomezDioses1991: source({
    title: "Dioses, demonios y brujos de la comunidad indígena Chamí",
    author: "Víctor Zuluaga Gómez",
    year: 1991,
    type: "libro",
    url: "https://drive.google.com/file/d/1ZBywKyqL_C6feD33HQCCZY13bySORGxd/view",
    summary:
      "Es la única reaparición impresa del relato fuera de la publicación de origen. En el capítulo «Mitos de los Chamí de Río Frío» (p. 147 y ss.) Zuluaga reproduce entero el número 3 con la grafía Hórchibarí y añade glosas de clasificación que no están en el original: Hórchibarí es «caníbal mítico», Dumío y Kojoró/Kokoró son «seres míticos», tiumía es «animal armado que come gente». Además, en «Animales míticos o fabulosos» (p. 126 y ss.) da una entrada propia a TIUMIA, recogida por su cuenta cerca de Puerto de Oro (corregimiento de Mistrató, Risaralda): un animal con arpón que atrae y devora a quien pasa por el río y al que los indios matan lanzándole un muñeco de balso. Eso confirma que tiumía existe como figura chamí viva en Risaralda, independiente del texto de Río Frío, y explica por qué el joven del relato se salva justamente detrás de un balso.",
    limitation:
      "El texto del relato es transcripción, no versión nueva: no hay segundo narrador ni segundo lugar. Zuluaga lo atribuye a Reichel-Dolmatoff pero da como referencia «Boletín de Arqueología Vol. I, No. 3, pp. 133-159», que es la ficha de Chaves 1945, no la de Reichel-Dolmatoff 1953; la confusión es suya y no debe heredarse. El libro no tiene bibliografía. El enlace es la edición digital de la Colección VZG (2021) del autor, alojada en Drive: el repositorio de la UTP (handle 11059/4878) responde con un muro antibots y no se pudo abrir.",
  }),
  uribeResena1993: source({
    title: "Reseña: Dioses, demonios y brujos de la comunidad indígena Chamí",
    author: "Luis Guillermo Vasco Uribe",
    year: 1993,
    type: "reseña en revista",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/view/7009",
    summary:
      "Boletín Museo del Oro 34-35, pp. 199-200. Es la pieza que permite leer con reservas la única reaparición del relato: Vasco documenta que «Víctor Zuluaga transcribe en toda su extensión, sin ningún comentario ni análisis, varios de los relatos que publicaron los antropólogos Milcíades Chávez y Gerardo Reichel-Dolmatoff en los años 40, contados por los chamí que habitaban en Riofrío, Valle del Cauca». También señala que la obra carece de bibliografía, que Zuluaga pone versiones frente a frente pero no confronta semejanzas y diferencias, y que carga el vocabulario de prejuicios etnocéntricos («brujos», «dioses», «leyendas indígenas»). PDF abierto.",
    limitation:
      "No nombra a Horchíbarí ni discute este relato en particular: es una reseña de dos páginas sobre el libro entero. Sirve para calificar la fuente, no para ampliar el contenido del mito.",
  }),
  caviedesMitos2010: source({
    title: "Mitos y tradiciones Chamí: la visión del mundo de los indígenas Chamí",
    author: "Héctor Castrillón Caviedes, C.M.F.",
    year: 2010,
    type: "libro (monografía misionera)",
    url: "https://librosypublicaciones.uniclaretiana.edu.co/index.php/Librosypublicaciones/catalog/book/34",
    summary:
      "Recopilación hecha durante treinta años de convivencia con los chamí de Purembará, dedicada «al pueblo Chamí y a la memoria de Clemente Nengarabe». Su tabla de contenido (PDF abierto en la ficha) muestra que la primera parte abre con «El mundo de los espantos», cuyo apartado 1 es «Las entidades maléficas agresivas» (pp. 25-42), seguido de «Entidades benéficas» (p. 74), y que la segunda parte, «Narraciones y mitos Chamí», empieza en la p. 167. Es la clasificación chamí de los seres agresivos más extensa que existe y el lugar donde cabría un anfitrión caníbal como Horchíbarí.",
    limitation:
      "No se pudo verificar que Horchíbarí esté en el libro. El editor sólo publica en línea prefacio, nota introductoria, comentarios de recopilación y tabla de contenido; el archivo del texto completo devuelve un aviso que remite a las bibliotecas físicas de Uniclaretiana en Quibdó y Medellín. Cítese como pista de clasificación, nunca como confirmación.",
  }),
  gomezHistoria1988: source({
    title: "Historia de la comunidad indígena Chamí",
    author: "Víctor Zuluaga Gómez",
    year: 1988,
    type: "libro de historia regional",
    url: "https://drive.google.com/file/d/1lVSmydcwDiKmrvr8wAK9D8HX1A2PIdH1/view",
    summary:
      "Ancla la leyenda de la culebra en un sitio real y verificable: al describir un hallazgo arqueológico el autor escribe que encontró «una tumba en la vereda de Jeguadas, cerca de La Batea (sitio en donde según una leyenda, existió una laguna y vivía una gran culebra, llamada Jepa)», con nariguera de oro, ollas, alcarrazas y hachas de piedra. Es el modelo de lo que la ficha de El Salado hace con los huesos de la culebra: una memoria serpentina que la comunidad amarra a un punto del terreno y a restos materiales.",
    limitation:
      "Otro lugar y otro departamento; el libro es historia de archivo, no folclor, y la mención de la leyenda es incidental, de una línea. No dice nada del Salado ni valida los huesos que menciona la versión de Caldas.",
  }),
  caldasInformacion2014: source({
    title: "Información básica del municipio de Riosucio (Caldas)",
    author: "Gobernación de Caldas",
    year: 2014,
    type: "documento institucional municipal",
    url: "https://caldas.gov.co/media/pdf/2014/infomunicipios/INFORMACION%20DE%20RIOSUCIO.pdf",
    summary:
      "Sirve para dos cosas concretas. Primera, sitúa el lugar: certifica que El Salado es la sede del resguardo indígena Nuestra Señora Candelaria de La Montaña, uno de los cuatro de Riosucio, y que el territorio prehispánico lo ocuparon turzagas, chamíes y pirzas. Segunda, y más útil para la duda sobre el préstamo: su inventario oficial de «Mitos, leyendas y/o tradición oral» del municipio (apartado 1.4) lista Duende, Patasola, Mohán, Llorona, Piedra Herrada y la Mula de Quiebralomo, todas figuras del repertorio hispano-mestizo minero, y no incluye la culebra de siete cabezas. Riosucio es zona de mestizaje minero colonial y su folclor registrado lo refleja.",
    limitation:
      "Es una ficha administrativa sin autoría individual ni aparato crítico; los textos de las leyendas están copiados de repertorios generales colombianos. Que la culebra no figure en el inventario no prueba que no exista en la tradición local: prueba que no está en el registro oficial del municipio.",
  }),
  paulinoleyenda2018: source({
    title: "La leyenda de la culebra de agua protectora del pueblo de San Bernardo (Oaxaca, México): sustrato mítico zapoteco y dispersión pluricultural",
    author: "Carlos Gerardo Hernández Paulino",
    year: 2018,
    type: "artículo en revista académica",
    url: "https://revistaselectronicas.ujaen.es/index.php/blo/article/view/3791",
    summary:
      "Boletín de Literatura Oral 8, pp. 165-176 (DOI 10.17561/blo.v8.9). Es el método aplicado al mismo problema: transcribe siete relatos de serpientes de agua recogidos en campo en 2017, uno de los cuales dice literalmente «cuando revisó los canastos vio salir tres culebras. Esas culebras tenían siete cabezas», y muestra cómo un sustrato mítico indígena convive con «relatos de estrato cultural panhispánico e incluso europeo» sin que uno anule al otro. Da a la ficha la manera correcta de decirlo: el número siete es capa hispana, la culebra que hace el paisaje es sustrato local, y la leyenda es las dos cosas a la vez.",
    limitation:
      "Es Oaxaca, zapoteco, no Colombia ni emberá. Sólo vale como precedente metodológico y comparativo del motivo; no puede citarse como si hablara de El Salado.",
  }),
  uNEPWCMCResguardo2023: source({
    title: "Resguardo Indígena de Origen Colonial Cañamomo Lomaprieta (ficha del ICCA Registry)",
    author: "Custodios del resguardo Cañamomo Lomaprieta / UNEP-WCMC",
    year: 2023,
    type: "ficha de registro internacional con información aportada por la comunidad",
    url: "https://www.iccaregistry.org/en/explore/colombia/resguardo-indigena-de-origen-colonial-canamomo-lomaprieta",
    summary:
      "La única voz actual y verificable del propio Lomaprieta sobre su territorio y su espiritualidad. Describe el resguardo entre Riosucio y Supía (4.837 hectáreas, 32 comunidades, 21.894 habitantes emberá chamí), su gobierno propio (gobernador, alcaldes, alguaciles, consejo de exgobernadores, guardia indígena) y, en el apartado espiritual, recoge que para los médicos tradicionales el territorio es principio y fin de la vida en ciclo, donde coexisten agua (pureza), tierra (cuerpo), aire (energía) y fuego (vibración). Es exactamente el reparto por ámbitos que la ficha atribuye a las gotas, dicho hoy por la comunidad y sin la mediación del relato cristianizado.",
    limitation:
      "Ficha de registro, no estudio: el contenido lo aporta la propia comunidad y pasa una revisión de pares del registro, pero no cita fuentes ni narradores. Habla de agua, tierra, aire y fuego, no de monte ni de selva, y en ningún momento de gotas, ángeles ni guardianes. Publicada en inglés.",
  }),
};

export const defaultChamiSourceKeys = [
  "reichel1953",
  "redAprendeMetadata",
  "chaves1945",
  "cardona2026",
  "onicChami",
  "procuraduriaChami",
  "vascoChami",
];

export function pickChamiSources(...entries) {
  const seen = new Set();
  const picked = [];
  for (const entry of entries) {
    const key = typeof entry === "string" ? entry : entry?.key;
    const selected = chamiSources[key];
    if (!selected) {
      throw new Error(`Fuente Chamí desconocida: ${key}`);
    }
    if (seen.has(key)) continue;
    seen.add(key);
    if (typeof entry === "string") {
      picked.push(selected);
      continue;
    }
    picked.push({
      ...selected,
      ...(entry.summary ? { summary: entry.summary } : {}),
      ...(entry.limitation ? { limitation: entry.limitation } : {}),
    });
  }
  return picked;
}
