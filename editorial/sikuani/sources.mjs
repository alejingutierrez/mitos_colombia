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

// Las dieciséis obras que la reescritura del 2026-09-19 usó de verdad, cada una
// con la URL que se abrió y se cotejó. El reparto viejo —ONIC, ICBF-ENSANI,
// CNMH, FLACSO, la ficha de venta de UCLA y el blogspot que reproducía a
// Baquero— se retiró entero: el informe de esa pasada dice por qué.
export const sikuaniSources = {
  baquero1989: source({
    title:
      "La tradición oral de los guahibos, como fuente histórica para la investigación arqueológica en los Llanos Orientales",
    author: "Álvaro Baquero Montoya",
    year: 1989,
    type: "artículo etnográfico en revista arbitrada",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/view/6964",
    summary:
      "Boletín Museo del Oro 23, pp. 77-93. Recorre los ciclos de Kuwei o Phurnaminali, Kuemi, los intentos de creación humana, Kaliwirnae, Tsamani y el rito funerario Itomo. Baquero acredita a sus informantes: Trejas Salcedo y el Viejo Rubiano, de Mamiyare, Bernardo Gaitán, de Guacome, y un informante de San Vicente del Cadá, en trabajo de 1983, con los mitos recogidos en guahibo y en español.",
    limitation:
      "Es un artículo arqueológico que usa la tradición oral como fuente histórica, no una colección de relatos: resume ciclos enteros en pocas líneas y no publica el texto completo de ninguno. La copia que circulaba antes en el blogspot «armonicosdeconciencia» reproduce el ensayo sin acreditarlo; esta cita vuelve al artículo del Boletín.",
  }),
  queixalos1985: source({
    title: "Maduedani, héroe cultural sikuani",
    author: "Francisco Queixalós",
    year: 1985,
    type: "edición bilingüe de un texto oral con análisis",
    url: "https://amerindia.cnrs.fr/wp-content/uploads/2021/02/maduedani-he%CC%81roe-cultural-sikuani-Francisco-QUEIXALOS-.pdf",
    summary:
      "Amerindia 10, CNRS, París. El texto lo narró en 1971 María, madre de Tiberio —alias Nusalia— y en esa época la mujer más anciana de Kotsipá, poblado del clan del Caribe en la margen izquierda del Vichada. Es el PDF que la propia revista publica en abierto.",
    limitation:
      "Es una sola versión, de una sola narradora y de un solo poblado del Vichada; Queixalós advierte que el ciclo de Maduedani varía de una región sikuani a otra.",
  }),
  queixalos1978: source({
    title:
      "L'arbre à nourriture, mythe sikwani (guahibo) sur l'origine de l'agriculture",
    author: "Francisco Queixalós",
    year: 1979,
    type: "edición bilingüe sikuani/francés con análisis línea a línea",
    url: "https://amerindia.cnrs.fr/wp-content/uploads/2021/02/larbre-a%CC%80-nourriture-mythe-sikwani-guahibo-sur-lorigine-de-lagriculture-par-Francisco-QUEIXALOS-.pdf",
    summary:
      "Amerindia 4. El relato lo narró en 1972 Tiberio, alias Nusalia, jefe de Kotsipá, hoy abandonado. Trae el texto sikuani, la notación fonológica, la traducción y las notas, y es la versión más detallada del árbol de los alimentos que hay en abierto.",
    limitation:
      "El expediente de la reescritura lo cita como 1978; el índice de la propia revista fecha el número 4 en 1979. El análisis está en francés y la traducción es literal, no literaria: el texto publicable hay que rehacerlo desde ella.",
  }),
  men2015: source({
    title: "Sikuani pe-liwaisianü. Relatos de la tradición sikuani",
    author:
      "Docentes y estudiantes sikuani de Awariba y Domoplanas; compilación de Milton Alberto Guzmán y traducción de Jorge Enrique Flores Cortés",
    year: 2015,
    type: "colección bilingüe de autoría comunitaria",
    url: "https://colombiaaprende.edu.co/sites/default/files/files_public/plan-lectura-2021/territorios-narrados-parte-2/Sikuani_pe-liwaisianu__Relatos_del_pueblo_sikuani.pdf",
    summary:
      "Ministerio de Educación Nacional, serie Río de Letras / Territorios Narrados, Bogotá, febrero de 2015. Diez relatos bilingües de la Institución Educativa Indígena Unuma, en el Meta, escritos por los docentes bilingües con el apoyo de los ancianos y los médicos tradicionales. Es la única obra del juego firmada por los propios sikuani.",
    limitation:
      "Es material escolar de dos comunidades del Meta, Awariba y Domoplanas: recoge la versión que allí se enseña, no un canon del pueblo, y adapta el registro a lectores jóvenes.",
  }),
  ortizRezo1988: source({
    title:
      "El rezo del pescado, ritual de pubertad femenina entre los sikuani y cuiba",
    author: "Francisco Ortiz G.",
    year: 1988,
    type: "artículo etnográfico con transcripción ritual",
    url: "https://revistas.unal.edu.co/index.php/maguare/article/view/14222",
    summary:
      "Maguaré 6-7, Departamento de Antropología, Universidad Nacional de Colombia. Observaciones en la comunidad cuiba de Mochuelo y en comunidades sikuani del Casanare, con el rezo transcrito a don Pedro Antonio en Getsemaní. Es la fuente del vocabulario ritual y de la relación entre el rezo, la comida y el cuerpo.",
    limitation:
      "Está a caballo entre dos pueblos de la familia guahibo: el artículo distingue tramo por tramo lo cuiba de lo sikuani, y esa frontera hay que respetarla al citarlo. Sikuani no es cuiba.",
  }),
  ortizCesteria1988: source({
    title: "El simbolismo de la cestería sikuani",
    author: "Francisco Ortiz Gómez",
    year: 1988,
    type: "artículo etnográfico sobre cultura material",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/view/7151",
    summary:
      "Boletín Museo del Oro 21, pp. 25-37. Lee los diseños del cesto como una escritura del mundo sikuani y da los nombres de objetos, técnicas y figuras que aparecen en los relatos.",
    limitation:
      "Trata de cultura material y de simbolismo, no de narración: sirve para nombrar bien los objetos, nunca para completar una escena.",
  }),
  torres1994: source({
    title: "Waji: «rezo» chamanístico sikuani",
    author: "William Torres C.",
    year: 1994,
    type: "artículo etnográfico escrito bajo enseñanza chamánica",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/view/6946",
    summary:
      "Boletín Museo del Oro 37, julio-diciembre de 1994, pp. 35-51. Escrito desde abril de 1993 bajo la enseñanza de don Rafael Vicente Yepes Kasulú, chamán y capitán de Walabó 1, y de su hermano don José Antonio Kasulú, chamán principal del resguardo Wakoyo, en Puerto Gaitán, Meta.",
    limitation:
      "Es la doctrina de dos chamanes hermanos de un resguardo del Meta, transmitida a un aprendiz externo; no describe la práctica de todas las regiones sikuani y guarda materia que no se publica.",
  }),
  villaPosse1993: source({
    title: "Mitos y leyendas de Colombia, sección sikuani",
    author: "Eugenia Villa Posse, compiladora",
    year: 1993,
    type: "compilación editorial, citada por su ficha de catálogo",
    url: "https://biblioteca.casadelacultura.gob.ec/cgi-bin/koha/opac-detail.pl?biblionumber=54951",
    summary:
      "Editorial IADAP, Quito, 1993, dos tomos. En las pp. 279-288 reproduce siete piezas del corpus de Ortiz, registradas en sikuani y en español: Pedro Martínez narró tres y Rita Gaitán cuatro, entre 1972 y 1980. El enlace es el registro catalográfico de la Biblioteca de la Casa de la Cultura Ecuatoriana.",
    limitation:
      "No se pudo cotejar contra el impreso. El enlace es una ficha de catálogo, no el texto: las dos copias de FLACSO Andes que el módulo citaba antes están tras un muro anti-bot y devuelven 403. La atribución a Pedro Martínez, los años y las páginas vienen del expediente heredado.",
  }),
  ortiz1982: source({
    title: "Literatura oral sikuani",
    author: "Francisco Ortiz Gómez",
    year: 1982,
    type: "libro de relatos, citado por la reseña institucional que lo describe",
    url: "https://cvc.cervantes.es/lengua/thesaurus/pdf/38/TH_38_001_168_0.pdf",
    summary:
      "Centro Cultural Jorge Eliécer Gaitán y Universidad Pedagógica y Tecnológica de Colombia, Ediciones La Rana y el Águila, Tunja, 223 pp. Reúne 58 relatos y es la fuente primera de los siete cuentos que Villa Posse reprodujo después. El enlace es la reseña del Instituto Caro y Cuervo en Thesaurus XXXVIII (1983), en el Centro Virtual Cervantes.",
    limitation:
      "No se pudo cotejar contra el impreso: no hay edición digital libre y el enlace es la reseña, no el libro. Lo que la reseña permite afirmar es el alcance del volumen, no el texto de un relato concreto.",
  }),
  ortiz1976: source({
    title: "Taxonomía de los grupos guahibo",
    author: "Francisco Ortiz",
    year: 1976,
    type: "artículo de etnografía descriptiva",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/view/1731",
    summary:
      "Revista Colombiana de Antropología 20, pp. 282-293. Información recogida en 1972 en Mochuelo, bajo Casanare. Describe el sistema de emblemas momowi de las bandas regionales, que es lo que permite leer los nombres de animales de los relatos como nombres de grupo.",
    limitation:
      "Es un artículo sobre la familia guahibo entera —sikuani, cuiba, makaguán, hitnü— y buena parte de su material de campo es cuiba: los emblemas que describe no son automáticamente sikuani.",
  }),
  agudelo2015: source({
    title: "Itane: letra, palabra y escritura. Literacidades vivas",
    author: "Edwin Nelson Agudelo Blandón",
    year: 2015,
    type: "artículo académico con dos relatos recogidos en campo",
    url: "https://dialnet.unirioja.es/servlet/articulo?codigo=9171697",
    summary:
      "Lenguas y Literaturas Indoamericanas 17, pp. 1-23. Incluye dos relatos recogidos al pie del abuelo José Antonio Kasulúa, en abril de 2004 y en enero de 2005, y discute cómo la escritura entra en una tradición oral viva.",
    limitation:
      "El OJS de la Universidad de La Frontera, que es la revista editora, devuelve la página vacía; el enlace es el registro de Dialnet, que sí sirve el texto completo. Los dos relatos son de un solo abuelo y llegan traducidos.",
  }),
  queixalos1991: source({
    title: "Entre cantos y llantos. Tradición oral sikuani",
    author: "Francisco Queixalós, compilador",
    year: 1991,
    type: "compilación de tradición oral, citada por su reseña arbitrada",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/view/7044",
    summary:
      "Fundación Etnollano, Bogotá. Reúne cerca de cien relatos sikuani grabados, transcritos y traducidos por Queixalós desde 1971. El enlace es la reseña que William Torres C. publicó en el Boletín Museo del Oro 29 (1990), pp. 153-154, que es lo que describe el volumen en una fuente institucional.",
    limitation:
      "El libro no está en digital libre y no se pudo cotejar contra el impreso: el enlace es la reseña, no la obra. De ella sale el alcance del corpus, nunca la letra de un relato.",
  }),
  icbfKaliwirnae: source({
    title: "Kaliwirnae, el árbol de los alimentos",
    author:
      "Carmen Rojas Amaya, narradora; José Quintero Campo, traductor",
    type: "registro oral comunitario con narradora acreditada",
    url: "https://audiotecadigital.icbf.gov.co/adultos/articulo/332",
    summary:
      "Audioteca Digital del ICBF, colección De agua, viento y verdor. Comunidad de Corocito, resguardo Caño Ovejas, Meta. Narra el hallazgo del árbol que contenía los alimentos y las acciones del mono nocturno, el picure y la lapa, en sikuani y en español.",
    limitation:
      "El certificado SSL del sitio está caducado: el navegador avisa y las herramientas que verifican el certificado no abren la página. La narradora declara además que cuenta sólo una parte de una historia extensa, y la ficha conserva ese corte.",
  }),
  icbfTsamani: source({
    title: "Canto de la familia Tsamani",
    author:
      "Jairo Chipiaje Cavares, intérprete; José Quintero Campo, traductor",
    type: "registro sonoro comunitario con intérprete acreditado",
    url: "https://audiotecadigital.icbf.gov.co/adultos/articulo/304",
    summary:
      "Audioteca Digital del ICBF, colección De agua, viento y verdor, resguardo Caño Ovejas, Meta. Canto sobre Tsamani y sus cinco hermanos, que danzan años alimentándose sólo de danana, se vuelven livianos y ocupan su sitio entre las estrellas.",
    limitation:
      "El certificado SSL del sitio está caducado. Es una interpretación de Caño Ovejas y un canto, no una narración: no se extiende a las demás variantes regionales ni se lee como relato completo.",
  }),
  vargasKondo1974: source({
    title: "Guahibo, en Folclor indígena de Colombia, tomo I",
    author:
      "Eutimio Vargas, sikuani, con Victor F. Kondo y Riena W. Kondo",
    year: 1974,
    type: "texto bilingüe con traducción literal y libre",
    url: "https://colombia.sil.org/resources/archives/19038",
    summary:
      "Ministerio de Gobierno e Instituto Lingüístico de Verano, Editorial Townsend, Meta, pp. 202-206. Eutimio Vargas firma como autor sikuani del texto guahibo, que va con traducción literal y traducción libre. El enlace es el registro del propio ILV en su archivo de Colombia, con el PDF del volumen.",
    limitation:
      "Es una publicación misionera de 1974: la ortografía, la segmentación y el aparato de traducción son los del Instituto Lingüístico de Verano, y el volumen mezcla ocho lenguas sin aparato comparativo.",
  }),
  ortizQueixalosOrnitologia: source({
    title: "Ornitología cuiva-guahibo",
    author: "Francisco Ortiz y Francisco Queixalós",
    year: 1981,
    type: "vocabulario etnozoológico comentado",
    url: "https://amerindia.cnrs.fr/wp-content/uploads/2021/02/ornitologi%CC%81a-cuiva-guahibo-Francisco-ORTIZ-y-Francisco-QUEIXALOS.pdf",
    summary:
      "Amerindia 6. Vocablos cuiba y guahibo de Kurkoto y Tsamani, en el bajo Casanare, con términos macaguane y de los llamados guahibos playeros del alto Arauca. Discute la frontera dialectal dentro de la familia guahibo y es lo que permite nombrar bien a los animales de los relatos.",
    limitation:
      "Es sobre todo cuiba: los datos base son de F. Ortiz en poblados cuiba, y los propios autores ubican a los «guahibos playeros» en el grupo cuiba por el habla y la mitología. Sikuani no es cuiba, ni makaguán, ni hitnü.",
  }),

  // ——— Búsqueda profunda 2026-09-22 ———
  escobarConocimiento2017: source({
    title: "Conocimiento, trayectoria y habitar en la transformación del mundo sikuani",
    author: "Flor Angela Buitrago Escobar",
    year: 2017,
    type: "tesis doctoral en antropología con testimonios de campo",
    url: "https://hdl.handle.net/1992/38685",
    summary:
      "Universidad de los Andes, Departamento de Antropología, Bogotá. Trabajo de campo en el resguardo Wacoyo (Puerto Gaitán, Meta), dedicado a la memoria de José Antonio Casolúa. En el apartado «Seres celestes» (hacia la p. 109) da el conjunto de dioses de las historias sikuani —Liwinei, Kajuyali, Furunaminali, Tsamani, Ibaruawa, Kaweinaluwa y Matsuludani— con Kuwei o Kuwai como su «jefe», según don Clemente Gaitán y según los relatos de Queixalós y Jiménez; nombra a Kuemeinü como «la serpiente gigante que al ser expulsada del mundo formó la Vía Láctea» y a Yaniluawa como la anciana dueña del yopo. En la entrevista transcrita, don Clemente dice que «cuando Matsuludani formó el mundo, dejó animalitos para cazar». Anota además que las grafías fluctúan (Liwinei/Íwinai, Kajuyali/Cájuyali).",
    limitation:
      "No narra el ciclo de la creación: lo nombra desde los rezos (waji) y la conversación con una sola familia de Wacoyo. Hace a Matsuludani hijo de Tsamani, no de Kuwei como la ficha; lo anota como variante, no como corrección. Es una tesis sobre trayectorias de vida y educación, no una monografía de mitología. La página del repositorio de Uniandes pasa por un reto anti-bot antes de mostrar el PDF.",
  }),
  barbosavoluntad2020: source({
    title: "La voluntad de potencia, el cuerpo y las fuerzas en la cosmovisión del pueblo Sikuani",
    author: "William Gutiérrez Barbosa",
    year: 2020,
    type: "trabajo de grado con testimonios de campo",
    url: "https://hdl.handle.net/20.500.12209/12519",
    summary:
      "Universidad Pedagógica Nacional, Licenciatura en Filosofía, Bogotá, dirigido por Consuelo Pabón. Hecho con la familia del abuelo Clemente Gaitán y la abuela Isabel Quintero en el resguardo Wacoyo. Dice que «el dios Kuwei o Phurnaminali es el líder de un grupo de dioses o “héroes culturales” secundarios creadores y civilizadores» y que «a partir de los pensamientos y de su fuerza creó el mundo y todo lo que habitan en él», que es el Kuwei que piensa el mundo del Relato. Recoge de Hermes Gaitán que Kuwei «llevaba las ideas» del grupo de dioses y de Leonel la «danza del camino de los dioses», con Kuwei como dios mayor y seis dioses menores nacidos de huevos; y un episodio en que Furnamilani ofrece a los jiwi fumar un gusano y los que lo fuman se vuelven los blancos que hablan otras lenguas, eco del reparto de lenguas con que cierra la ficha.",
    limitation:
      "Es una tesis de pregrado en filosofía cuyo marco es la comparación con Nietzsche y lo apolíneo-dionisíaco; su valor está en las citas de los abuelos, no en el análisis. Sus informantes son la misma familia de Wacoyo que la tesis de Buitrago. Contradice a Baquero en un nombre: aquí Yanilouava es la esposa de Kuwei y la primera mujer, que trajo el yopo en un caracol, mientras que la ficha, siguiendo a Baquero, la da como mujer de Kuemi; y hace de Phurnaminali un solo dios con Kuwei en un pasaje y uno de los dioses menores en otro.",
  }),
  wrightKuwai2018: source({
    title: "The Kuwai Religions of Northern Arawak-Speaking Peoples: Initiation, Shamanism, and Nature Religions of the Amazon and Orinoco",
    author: "Robin M. Wright",
    year: 2018,
    type: "artículo arbitrado de etnología comparada",
    url: "https://revistas.udea.edu.co/index.php/boletin/article/view/331149",
    summary:
      "Boletín de Antropología 33 (55), Universidad de Antioquia, enero-junio de 2018, pp. 123-150. Es el trabajo de Wright sobre los baniwa que la sección de similitudes nombra a través de Baquero. Mapea las tradiciones de Kuwai entre los pueblos arawak del norte, desde el Vaupés hasta el Guaviare y el Inírida; cuenta que en Hipana nace Kuwai, hijo del creador Nhiaperikuli y de Amaru, y que de los agujeros de la tierra de Hipana salieron los sibs ancestrales en el tiempo de la creación; trata el cruce de esta tradición con la de los cubeo (la «era de los Kuwaiwa»), y cita a Gilij para el dato de que los maipure, avane, guaipunave y otros arawak del Orinoco llamaban al ser supremo «Purrúnaminári», nombre emparentado con el Phurnaminali de la ficha.",
    limitation:
      "No es sikuani ni menciona a los sikuani: es comparativa, y entra sólo porque la ficha ya nombra el paralelo baniwa, a Wright y a los cubeo. Matiza lo que la ficha le atribuye vía Baquero: en Wright, Kuwai es hijo del creador Nhiaperikuli y no un creador con tres hijos que hacen a los hombres. Bibliografía del lado brasileño y venezolano de la frontera.",
  }),
  reichelDolmatoffcultura1944: source({
    title: "La cultura material de los indios Guahibo",
    author: "Gerardo Reichel-Dolmatoff",
    year: 1944,
    type: "monografía etnográfica en revista institucional",
    url: "https://publicaciones.icanh.gov.co/index.php/picanh/catalog/book/246",
    summary:
      "Revista del Instituto Etnológico Nacional I (1943-1944), pp. 437-506, en la edición digital abierta del volumen que publica el Fondo Editorial del ICANH. En «Pueblo y casa» (pp. 445-446) describe los cuatro tipos de construcción de un poblado guahibo, y uno es la casa «mosquitero»: techo que baja hasta el suelo, sin distinción entre techo y paredes, cubierta entera de hojas de palma, sin puerta —para entrar hay que abrirse paso por uno de los frentes—, levantada para protegerse de las plagas y donde varias familias se reúnen a dormir; entre los sikuani del río Tuparro es redonda y las hamacas se cuelgan una encima de otra. Es la casa cerrada contra los insectos en la que el cuento pone al tigre. En «Totemismo y creencias» (pp. 477-478) anota además que para los sikuani del Tuparro el tigre es el antepasado de clan, al que el chamán hace imitar en las ceremonias.",
    limitation:
      "No trae el relato ni el nombre Tsorueto, ni la traducción «casa de sueño»: corrobora el tipo de vivienda que el cuento describe, no su nombre. Es la etnografía de 1943 de un autor externo, sobre la familia guahibo entera; el tramo del Tuparro es el único que dice «sikuani». El enlace es la ficha del volumen completo (615 páginas, un solo PDF de unos 60 MB).",
  }),
  salmoralNotas1970: source({
    title: "Notas sobre la magia de los Guahibo",
    author: "Manuel Lucena Salmoral",
    year: 1970,
    type: "artículo etnográfico en revista arbitrada",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/view/1487",
    summary:
      "Revista Colombiana de Antropología 15 (1970-1971), pp. 130-169, con notas de campo de 1964 y 1965 en el Vichada medio. Registra lo que los guahibo decían del tigre: que antiguamente las almas de los muertos se volvían tigres; que cuando un difunto no se enterraba bien o no se guardaba la dieta venía el tigre del monte, sacaba el cadáver del hoyo y se lo llevaba; que el canto de los chamanes pedía «para que no vengan los tigres, para que no se caigan las casas», y que se «reza» a los tigres para alejarlos. Es el fondo de creencia en el que un tigre dentro de una casa de dormir no necesita explicación.",
    limitation:
      "No contiene este cuento. El propio autor califica de «bastante confusa» la información sobre almas vueltas tigres y no pudo confirmar los tótems que había anotado Reichel-Dolmatoff; dice «guahibo» sin separar sikuani de los demás grupos. El PDF es un escaneo sin capa de texto.",
  }),
  cLiana2000: source({
    title: "Liana del ver, cordón del universo: el yagé",
    author: "William Torres C.",
    year: 2000,
    type: "artículo etnográfico comparativo",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/view/4852",
    summary:
      "Boletín Museo del Oro 46, enero-abril de 2000, pp. 77-91. En el apartado sikuani cuenta por qué los sikuani sólo usan la raíz del capi (juipa): al tumbar el árbol kaliwirnae, las arditas cortaron los bejucos que lo sostenían y del bejuco del yagé sólo quedó la raíz. Describe cómo se lava, se asa y se masca la corteza de esa raíz para embriagar el cuerpo antes de inhalar el dopa, el yopo, y así acceder a la potencia chamanística; es la secuencia de capi y yopo que el brujo del cuento usa antes de meterse a la laguna y que vuelve en la reunión del final.",
    limitation:
      "No menciona este relato. Es un artículo comparativo entre seis pueblos (siona, tucano, uitoto, inga, desana y sikuani) y el tramo sikuani ocupa unos pocos párrafos, apoyados en la misma enseñanza de Wakoyo que Torres publicó en 1994; es obra distinta del «Waji» ya citado, del mismo autor.",
  }),
  agudeloGuahiboSukani1993: source({
    title: "Guahibo-Sukani, en Geografía humana de Colombia. Región Orinoquia, tomo III, volumen I",
    author: "Luz Marina Castro Agudelo",
    year: 1993,
    type: "capítulo etnográfico en obra institucional, con trabajo de campo en resguardos del Vichada (1984-1985)",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2786",
    summary:
      "Instituto Colombiano de Cultura Hispánica, Santafé de Bogotá, 1993; capítulo sikuani desde la p. 168. Documenta los dos objetos que el marido del relato sale a cambiar: la lanceta, kuererebo, «hecha de madera dura en la que se inserta una punta de acero», para pesca y caza (p. 194), y el yopo o dopa con su inhalador tsiripo, de uso masculino (pp. 195 y 214), además de que los sikuani «han favorecido el intercambio en los Llanos» con las demás etnias (p. 199). Registra también el clan Nebutomomobi, «gente del Tigre», de carácter agresivo (p. 207), que es lo que Versiones anota sobre el tigre como emblema de grupo.",
    limitation:
      "No trata este relato: es una monografía del pueblo y se cita sólo por esos pasajes sobre los objetos del intercambio, el comercio interétnico y el clan del tigre. Los datos son de resguardos del Vichada en 1984-1985. El enlace es la ficha de la Biblioteca Virtual del Banco de la República, que sirve el PDF completo; las páginas son las impresas en el volumen.",
  }),
  cubillosCuadradoFish2019: source({
    title: "Fish consumption during menarche, menstruation, pregnancy and postpartum in Sikuani women from Meta, Colombia",
    author: "Luis Fernando Cubillos-Cuadrado, Diana Sofía Muñoz-Hernández y Carlos Alberto Vásquez-Londoño",
    year: 2019,
    type: "artículo etnobiológico en revista arbitrada, trabajo de campo en el resguardo Wacoyo",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6785850/",
    summary:
      "Journal of Ethnobiology and Ethnomedicine 15. Entrevistas y observación participante con mujeres sikuani de Wacoyo (Puerto Gaitán, Meta). Documenta el régimen del puerperio en que arranca el relato: en los primeros días después del parto la mujer y su marido no comen pescado hasta que se hace el rezo del pescado, el padre no caza ni trabaja y la mujer deja el oficio de la casa a otras mujeres. Explica que la vulnerabilidad de esos días es frente a los ainawi, y recoge como relato vivo el de Bakatsolowa, la muchacha que se vuelve sirena, leído por la comunidad como aviso de que las muchachas pueden ser capturadas y llevadas al mundo de abajo o de los peces: es el mismo paralelo que la ficha usa en Similitudes.",
    limitation:
      "No trata el relato de Kawiri Monae ni nombra a los kawiri: sostiene la situación inicial (la mujer recién parida y el peligro de rapto en esos días) y el paralelo de Bakatsoloba, no la trama. Tampoco describe una casa aparte para el puerperio: la reclusión que describe es de conducta y de dieta. Es la práctica de un solo resguardo del Meta en 2019. Se cita en la copia de PubMed Central, abierta y en https.",
  }),
  joyamirada2024: source({
    title: "Una mirada desde la epistemología del sur del territorio de las comunidades indígenas sikuani de Puerto Gaitán",
    author: "Zulma Stella Patarroyo Joya y Angela Patricia Pérez González",
    year: 2024,
    type: "artículo de investigación en revista arbitrada",
    url: "https://www.redalyc.org/journal/396/39680026010/",
    summary:
      "Tabula Rasa 50, Universidad Colegio Mayor de Cundinamarca, pp. 225-241 (DOI 10.25058/20112742.n50.10). Resume, citando la p. 17 del Plan de Salvaguarda Sikuani de 2013, el relato de origen de los clanes momowi que salen del pozo de Unianto-iboto, cerca del Orinoco: descendientes «del carpintero, del mono, del tigre, del caimán y de los comedores de carne (los kawirI)». Es la única fuente abierta que nombra a los kawiri por esa grafía como grupo de origen dentro del propio sistema sikuani, y sostiene lo que Versiones dice de la ambigüedad del nombre.",
    limitation:
      "Es un artículo sobre conflicto territorial en Puerto Gaitán y dice de los kawiri una sola frase, de segunda mano: el Plan de Salvaguarda que cita (ONIC y Ministerio del Interior, 2013) ya no está en la URL del ministerio, que devuelve 404, y no se pudo abrir en otra copia. No trata el relato de la mujer raptada.",
  }),
  rodriguezCanto: source({
    title: "Canto de la familia de Tsamani (Tsamanimonae waji)",
    author: "Adelina Rodríguez, intérprete; Juan Carlos Torres, traductor",
    type: "registro sonoro comunitario con intérprete acreditada",
    url: "https://audiotecadigital.icbf.gov.co/adultos/articulo/319",
    summary:
      "Audioteca Digital del ICBF, colección De agua, viento y verdor, resguardo Caño Negro, Guaviare. Es un canto distinto del de Jairo Chipiaje (artículo 304, ya citado): Adelina Rodríguez recuerda a los seis hermanos Tsamani —Liwinai, Kajuyali, Furnaminali, Tsamani, Ibaruwa y Kawinaruba— y la danza con que subieron al cielo y se volvieron la constelación Tsamanimonae, la Familia de Tsamani, «que brilla en el occidente». Trae el texto sikuani y la traducción, con notas: matakabi ilata, la tierra del amanecer, es el lugar al que según la historia de la danza de Tsamani «subieron para no morir», y danana es el maná celeste que el canto reparte.",
    limitation:
      "El certificado SSL del sitio está caducado, igual que en las otras dos piezas del ICBF del pool. Es un canto, no una narración, y de otra región (Guaviare) que la de Caño Ovejas. Su lista de seis hermanos coincide con la de Agudelo (Kasulúa) y no con los cinco de Torres.",
  }),
  barbosavoluntad20202: source({
    title: "La voluntad de potencia, el cuerpo y las fuerzas en la cosmovisión del pueblo sikuani",
    author: "William Gutiérrez Barbosa",
    year: 2020,
    type: "trabajo de grado con testimonios de campo",
    url: "https://repositorio.upn.edu.co/handle/20.500.12209/12519",
    summary:
      "Licenciatura en Filosofía, Universidad Pedagógica Nacional, Bogotá. Trabajo en el resguardo Wacoyo, Puerto Gaitán, con el abuelo Clemente Gaitán y el cantor Leonel Estrada. Describe la danza Tsamanimonae Petajunamuto, «Camino de los Dioses», que narra en sus cantos cómo los dioses danzaron muchos años en la tierra y subieron al cielo; recoge de Leonel Estrada la historia «La danza del camino de los Dioses»: siete dioses, Kuwei el mayor y seis nacidos de huevos —dos mujeres, Ibaruwa y Kaweinaruwa, y cuatro hombres, Tsamani, Furnaminali, Kajuyali y Liwinei—, que inhalaron yopo y danzaron doce años antes de subir al mundo de los astros, y que al irse dejaron la danza, los cantos y las herramientas del chamán para los jiwi. Cita además el pasaje de Torres sobre los doce años de danza con capi y yopo.",
    limitation:
      "Es una monografía de pregrado en filosofía, no una etnografía especializada; su marco es la comparación con Nietzsche. El testimonio es de un solo resguardo, Wacoyo, el mismo de los Kasulú que enseñaron a Torres, así que no es una cadena independiente. Su lista de hermanos y su destino celeste (las Pléyades) difieren de Torres y de Agudelo: es otra versión, no una corrección. El enlace es el registro del repositorio institucional, con el PDF abierto.",
  }),
  escobarKnowledge2016: source({
    title: "Knowledge Embodiment through Dance: A Study Case among the Colombian Sikuani",
    author: "Flor Ángela Buitrago Escobar y Hermes Gaitán Quintero",
    year: 2016,
    type: "artículo académico en revista arbitrada",
    url: "https://addletonacademicpublishers.com/contents-kc/859-volume-4-3-2016/2842-knowledge-embodiment-through-dance-a-study-case-among-the-colombian-sikuani",
    summary:
      "Knowledge Cultures 4(3), pp. 15-30, Addleton Academic Publishers. Presenta el testimonio del chamán sikuani Clemente Gaitán sobre la danza Tsamanimonae Petajunamuto, el «Camino de los Dioses», la danza de la familia de Tsamani, y la distingue expresamente de las danzas de fiesta de las cosechas y de las que se bailan en el itomo, el segundo entierro: es la fuente que separa la danza del ascenso del baile funerario que Baquero les asocia.",
    limitation:
      "Sólo el resumen está en abierto en la página del editor; el texto completo está tras suscripción (las copias de academia.edu y ResearchGate están vetadas) y no se pudo cotejar. Lo que se afirma sale del resumen. El informante, Clemente Gaitán, es el mismo abuelo de Wacoyo que habla en la monografía de Gutiérrez Barbosa: no son dos testimonios independientes.",
  }),
  jilgueroCuando: source({
    title: "Cuando cazábamos una danta (Wakena peliwaisi)",
    author: "Carmen Enciso Jilguero, explicación; Juan Carlos Torres, traductor",
    type: "registro oral comunitario con narradora acreditada",
    url: "https://audiotecadigital.icbf.gov.co/adultos/articulo/315",
    summary:
      "Audioteca Digital del ICBF, colección De agua, viento y verdor, resguardo Caño Negro, Guaviare. En sikuani y en español, Carmen Enciso Jilguero recuerda la costumbre de invitar a toda la comunidad cuando se cazaba una danta grande: se la cortaba por partes, se repartía, y se volvía en fila, con quien cargaba la cabeza adelante y quien cargaba la cola atrás. Es la pieza que la sección Versiones de la ficha nombra expresamente para que no se confunda con este relato; con este enlace esa mención queda sostenida.",
    limitation:
      "No es este relato ni una variante suya: es un testimonio sobre la cacería y el reparto de la danta, sin terecay y sin anciana. Sirve para el lugar de la danta en la vida sikuani y para la frase de Versiones que lo nombra, no para el argumento. El certificado SSL del sitio está caducado.",
  }),
};

/**
 * Acepta una clave suelta o una clave con resumen y límite propios del mito
 * (`{ key, summary, limitation }`). La ficha bibliográfica la fija el pool; lo
 * que cambia por mito es qué dice esa obra sobre ese relato.
 */
export function pickSikuaniSources(...entries) {
  const vistas = new Set();
  const salida = [];
  for (const entrada of entries) {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = sikuaniSources[key];
    if (!selected) {
      const visto = typeof entrada === "string" ? entrada : JSON.stringify(entrada);
      throw new Error(`Fuente Sikuani desconocida: ${visto}`);
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
