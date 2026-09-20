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
