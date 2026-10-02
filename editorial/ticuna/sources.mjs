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

export const ticunaSources = {
  santos2010: source({
    title: "Narración tikuna del origen del territorio y de los humanos",
    author: "Abel Antonio Santos Angarita",
    year: 2010,
    type: "artículo de autoría tikuna en revista de acceso abierto",
    url: "https://revistas.unal.edu.co/index.php/imanimundo/article/view/10900",
    summary:
      "Abel Antonio Santos, lingüista tikuna, publica en Mundo Amazónico —Universidad Nacional sede Amazonia, acceso abierto— la narración del profesor Marcelino Noé y los aportes de los abuelos de Santa Lucía sobre Mowíchina, Ngutapa, Yoí, Ípi, Wone, Eware y el origen de los humanos.",
    limitation:
      "El artículo no fecha las narraciones de Marcelino Noé ni las de los abuelos de Santa Lucía: da comunidad y resguardo, pero no el año de la grabación, y el abuelo Manrique aparece sólo con ese nombre. La edición y las glosas son del autor; la ficha parafrasea episodios públicos y no reproduce fórmulas rituales.",
  }),
  moruapu2000: source({
    title: "Historias de los abuelos de Moruapü. Versión libre en castellano",
    author:
      "Hugo Armando Camacho González, Federico José Huaines Arara y Sergio Ramos del Águila (compiladores); narradores Dolores Noé, Augusto Coello y Remigio Santos",
    year: 2000,
    type: "compilación de tradición oral con narradores fechados",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/1335/",
    summary:
      "El libro que sostiene el Sol, la Luna, el friaje y la canoa de Moe. La Biblioteca Digital del Banco de la República publica el PDF completo, y cada relato lleva en el índice y en la nota al pie el nombre del narrador, la comunidad y el taller donde se grabó, entre 1993 y 1994.",
    limitation:
      "Es una versión libre en castellano, no un texto literal en tikuna. El escaneo tiene reconocimiento óptico defectuoso: hay letras cambiadas en casi todas las páginas y varios nombres propios sólo se leen por contexto. El libro alterna las grafías Moruapü y Muruapü en páginas contiguas.",
  }),
  nimuendaju1952: source({
    title: "The Tukuna",
    author:
      "Curt Nimuendajú; editado por Robert H. Lowie, traducido por William D. Hohenthal",
    year: 1952,
    type: "monografía etnográfica clásica, registro del editor",
    url: "https://www.ucpress.edu/books/the-tukuna",
    summary:
      "University of California Publications in American Archaeology and Ethnology 45: la etnografía clásica del pueblo, con una última sección de mitos de creación recogidos de narradores tikuna. Es la comparación obligada para el ciclo de Yoí e Ípi, la Luna y el origen de la humanidad.",
    limitation:
      "Es del lado brasileño: el trabajo de campo se hizo en el alto Solimões, y sus versiones se citan como variantes del mismo pueblo, no como la versión colombiana. La obra sigue en derechos —ISBN 9780520349681, edición electrónica de pago—, así que el enlace es el registro del editor; la lectura se hizo sobre el ejemplar digitalizado que hay en el expediente y en la Biblioteca Digital Curt Nimuendajú, que no ofrece TLS.",
  }),
  toruDuugu1985: source({
    title: "Torü Duü'ügü. Nosso povo",
    author:
      "Maestros tikuna de Vendaval y Campo Alegre —Reinaldo Otaviano do Carmo, Quintino Emílio Marques y Miguel Avelino Firmino— con la Organização Geral dos Professores Ticuna Bilíngues",
    year: 1985,
    type: "libro escolar bilingüe de autoría tikuna",
    url: "https://acervo.socioambiental.org/acervo/livros/toru-duuugu-nosso-povo",
    summary:
      "Ciento diez páginas en tikuna y portugués con los mitos principales del pueblo, escritas para las escuelas por maestros tikuna del alto Solimões. El acervo del Instituto Socioambiental ofrece el PDF completo.",
    limitation:
      "Fuente vecina: es del lado brasileño, del alto Solimões, y está en tikuna y portugués. Se usa para cotejar episodios, nunca como la versión colombiana de un relato.",
  }),
  faulhaber2020: source({
    title: "Sol e lua na iconografia Tikuna",
    author: "Priscila Faulhaber",
    year: 2020,
    type: "artículo de etnoastronomía en repositorio universitario",
    url: "https://sedici.unlp.edu.ar/handle/10915/132367",
    summary:
      "Cosmovisiones/Cosmovisões 1 (1), pp. 90-104: lee los dibujos tikuna donde el Sol y la Luna tuvieron existencia terrestre antes de subir al cielo, y los liga al origen de la gente, al parentesco y a las prescripciones de la ceremonia de la nueva muchacha. El repositorio SEDICI de la Universidad Nacional de La Plata publica el PDF.",
    limitation:
      "Trabaja con comunidades tikuna de Brasil y con iconografía, no con transcripción de relatos: es fuente vecina y de interpretación, no una segunda versión narrativa.",
  }),
  gomezPulgarin2011: source({
    title:
      "Dos mitos culturales de la alta Amazonia: relatos de un mundo humanizado",
    author: "W. Eduardo Gómez Pulgarín",
    year: 2011,
    type: "artículo comparativo de acceso abierto",
    url: "https://revistas.unal.edu.co/index.php/imanimundo/article/view/18912",
    summary:
      "Mundo Amazónico 2, pp. 359-364: compara los mitos de origen tikuna y uitoto y muestra la complementariedad entre los gemelos míticos y la reorganización del mundo para que la gente pueda vivir en él.",
    limitation:
      "Es un artículo comparativo de seis páginas, no una recopilación: aporta el paralelo con los uitoto y la lectura de los gemelos, no el texto de ningún relato tikuna.",
  }),
  gomezPulgarin2012: source({
    title: "Rasgos lingüísticos en relatos míticos tikuna: una caracterización",
    author: "W. Eduardo Gómez Pulgarín",
    year: 2012,
    type: "tesis de maestría en repositorio institucional",
    url: "https://repositorio.unal.edu.co/items/7c7d7491-4077-4aa2-867b-f9453a589fea",
    summary:
      "Tesis de la Maestría en Estudios Amazónicos de la Universidad Nacional en Leticia sobre cuatro narraciones orales de la frontera colombo-peruana. Su ficha de corpus es la que fecha y atribuye el relato de origen de Humberto Chetanükü —grabado por Jean-Pierre Goulard en 1989 en Santa Rosa de Loreto— y el «Ngutapachiga» de Augusto Coello.",
    limitation:
      "De esos dos relatos aquí sólo se conoce la ficha de corpus —narrador, año, lugar, número de líneas—: no se leyó el texto de ninguno. La tesis analiza prosodia y cohesión gramatical, no reconstruye argumentos.",
  }),
  men2014: source({
    title: "Bamachigà. Historias del bama",
    author:
      "Docentes de la comunidad tikuna de Macedonia y San Martín de Amacayacu; Ministerio de Educación Nacional, serie Río de Letras — Territorios Narrados",
    year: 2014,
    type: "libro bilingüe tikuna-español de autoría comunitaria",
    url: "https://redaprende.colombiaaprende.edu.co/media/recursos/alliances/reception/resources/b4490f4b-0881-410c-b1a3-48c51b633aa2/T%C3%ADtulo_7._Historias_del_Bama.pdf",
    summary:
      "Relatos escritos por docentes tikuna del Amazonas colombiano dentro del proyecto educativo comunitario Naane ru duetagu, con glosario y texto bilingüe. ISBN 978-958-691-605-9; el catálogo del Ministerio publica el PDF completo.",
    limitation:
      "Es material escolar reescrito por docentes, no la transcripción de una grabación con narrador fechado: da el lado colombiano y contemporáneo de los relatos, no la versión de un mayor identificado.",
  }),

  // ——— Búsqueda profunda 2026-09-22 ———
  goulardEntre2009: source({
    title: "Entre mortales e inmortales. El Ser según los Ticuna de la Amazonía — Anexo 1. Mito del origen (resumen)",
    author: "Jean-Pierre Goulard",
    year: 2009,
    type: "capítulo (anexo) de monografía etnográfica, edición en línea del editor",
    url: "https://books.openedition.org/ifea/3953",
    summary:
      "Instituto Francés de Estudios Andinos y CAAAP, Lima, pp. 391-410. El resumen del mito de origen abre con el mismo núcleo de la ficha: Ngutapa amarra a su mujer a un árbol para castigarla, un ser la libera, ella se vuelve avispa y le pica las dos rodillas; al reventar, de la derecha salen Yoí con su cerbatana y su hermana Mowacha con una red, y de la izquierda Ípi con una lanza y su hermana Aükü.",
    limitation:
      "Bibliografía del lado peruano: el trabajo de campo de Goulard es con los ticuna de Loreto, en la frontera con Colombia. En la edición en línea sólo queda abierto el comienzo del anexo; el resto del resumen no se leyó. El resumen no nombra a la mujer de Ngutapa, y aquí la libera un «tatatao», no el cacambro Kòu de la versión de Santos.",
  }),
  vritual2010: source({
    title: "El ritual tikuna de la pelazón en la comunidad de Arara, sur del trapecio amazónico: una experiencia etnográfica",
    author: "Hugo Andrés Ramos V.",
    year: 2010,
    type: "tesis de maestría en repositorio institucional",
    url: "https://repositorio.unal.edu.co/items/9724bcf3-2ba7-4898-986a-e9242625ac71",
    summary:
      "Maestría en Estudios Amazónicos, Universidad Nacional sede Leticia. El capítulo 2, «Contexto actual y mítico de la pelazón», resume el mito de origen tal como lo enseñó Jean-Pierre Goulard en Leticia en 2006: Ngutapa deja a su esposa amarrada en el monte, un gavilán la vuelve avispa, ella le pica las rodillas y, al golpeárselas con un palo en el puerto, nacen Yoí, Mowacha, Aiküna e Ípi, inmortales que crecen rapidísimo. Recoge además la versión de Javier José Manuel, de Arara, y remite a la narración completa de don Paulino Santos en el anexo 1.",
    limitation:
      "Es una etnografía de la pelazón, no una recopilación de mitos: el resumen es de segunda mano (clases de Goulard) y en él los cuatro hermanos salen de la rodilla izquierda por un error del texto, que repite «izquierda» dos veces. Quien auxilia a la mujer es un gavilán, no el cacambro. Lado colombiano, comunidad de Arara.",
  }),
  ortizMito2023: source({
    title: "Mito de origen de los ticunas",
    author: "Juliana Rufino (narradora); Camilo Vargas Pardo (registro); traducción del tikuna de Ruth Lorenzo; publicado por Yaty Andrea Urquijo Ortiz",
    year: 2023,
    type: "relato oral publicado en portal institucional",
    url: "https://lenguasyliteraturasnativas.caroycuervo.gov.co/mito-de-origen-de-los-ticunas/",
    summary:
      "Portal de lenguas y literaturas de Colombia del Instituto Caro y Cuervo. La abuela Juliana Rufino, nacida en Mariawaçu (Brasil) y residente en San Sebastián de los Lagos (Leticia), cuenta que a Gútapa le pica una avispa en la rodilla, que se le hincha, y que dentro están los niños: en una rodilla las mujeres y en la otra los hombres. Ya nacidos, se reparten en clanes —tigre, cascabel, paujil—, se casan entre ellos y se van al lago Eware, donde hoy son encantados y donde el abuelo Gútapa sigue vivo y cojo.",
    limitation:
      "Versión breve y contemporánea, con otra grafía (Gútapa) y sin los nombres de los cuatro hermanos: el reparto de las rodillas es por sexo, no Yoí-Mowacha e Ípi-Aüküná. Es de San Sebastián de los Lagos, la misma comunidad del abuelo Manrique que cita Santos. Página web, no edición impresa.",
  }),
  angaritaCantos2010: source({
    title: "Cantos del ritual de la pelazón tikuna",
    author: "Emilio Angarita, Roberto Vento, Javier José y Marcelino Manduca (cantores); transcripción y traducción de Abel Santos; recopilación y presentación de Baudilio Ramos y Hugo A. Ramos",
    year: 2010,
    type: "transcripción bilingüe tikuna-español de cantos rituales, revista de acceso abierto",
    url: "https://revistas.unal.edu.co/index.php/imanimundo/article/view/9992",
    summary:
      "Mundo Amazónico 1, pp. 279-301: siete cantos grabados en enero de 2008 en la pelazón de Arara, Trapecio amazónico colombiano. Los cantos invocan a Yoí como dueño de la fiesta y nombran la quebrada Eware: uno de ellos cierra con «si te rallo, con eso (huito), es así la historia de eware», y otro canta que «en la mitad de la quebrada eware es muy bonito». Es el eco ritual del rallado del huito y de la quebrada negreada donde Yoí pescó a la gente.",
    limitation:
      "Es canto ritual, no narración: alude al episodio de Eware y al huito sin contarlo, y no nombra a Wone ni la pesca con yuca. Lado colombiano. La ficha no reproduce fórmulas rituales; se cita para situar el vínculo entre Eware, el huito y la pelazón.",
  }),
  nacionalUFRJTicuna2008: source({
    title: "Ticuna — Povos Indígenas no Brasil",
    author: "Marília Facó Soares (Museu Nacional/UFRJ) y equipo de edición de la Enciclopédia Povos Indígenas no Brasil",
    year: 2008,
    type: "entrada de enciclopedia institucional en línea",
    url: "https://pib.socioambiental.org/pt/Povo:Ticuna",
    summary:
      "Instituto Socioambiental. En «Autodenominação» dice que fue Yo'i quien pescó a los primeros ticuna en el igarapé Eware, en las cabeceras del igarapé São Jerônimo, y que de ahí viene el nombre Magüta, «conjunto de personas pescadas con vara»; en la sección de organización social cita el mito de Nimuendajú en que Yo'i separa a los pescados, los suyos al este y los de Ípi al oeste, y funda la exogamia de mitades.",
    limitation:
      "Fuente del lado brasileño y de síntesis: no narra Wone ni el rallado del huito. Llama a Eware «águas vermelhas», aguas rojas, mientras la ficha, con Santos, la explica como agua negreada con huito. Publicada en 2008, modificada en 2021.",
  }),
  mindlincabeca1996: source({
    title: "A cabeça voraz",
    author: "Betty Mindlin",
    year: 1996,
    type: "ensayo en revista académica de acceso abierto",
    url: "https://www.scielo.br/j/ea/a/yMsTzmYsDHDTd3xtBpkn7Gv/?lang=pt",
    summary:
      "Estudos Avançados 10 (27), pp. 271 y ss., doi:10.1590/S0103-40141996000200015. Al reseñar las Mitológicas de Lévi-Strauss explica que el mito central de El origen de las maneras de mesa es tikuna, el que recogió Nimuendajú: un cazador se casa con sucesivas mujeres animales —rana, lombriz, guacamaya—, la madre del muchacho hace desaparecer a cada nuera, el héroe se vuelve pescador cuando las astillas del árbol que corta se transforman en peces y viaja en piragua con el cuñado en busca de la mujer que volvió a ser ave.",
    limitation:
      "Es una síntesis de segunda mano de la versión brasileña de Nimuendajú leída por Lévi-Strauss, no un relato colombiano: el héroe no se llama Moe, la mujer es guacamaya y no loro moru, y el acompañante es el cuñado —la variante que la propia edición de Moruapü anota— y no el hermano menor. Mindlin dice que la mujer se transforma en monstruo acuático; en Nimuendajú (pp. 151-152) es la canoa la que se vuelve dye'vae.",
  }),
  romeroChurichiga2025: source({
    title: "Churichiga wii arü ügü: historias de la cerámica tikuna-mägutá de San Martín de Amacayacu",
    author: "José Gabriel Dávila Romero y Claire Davigo",
    year: 2025,
    type: "artículo en revista académica de acceso abierto",
    url: "https://revistas.uniandes.edu.co/index.php/hart/article/view/10338",
    summary:
      "H-ART 20, pp. 133-161, doi:10.25025/hart20.2025.06, Universidad de los Andes. Trabajo con alfareras de San Martín de Amacayacu, la comunidad de Remigio Santos. Transcribe en tikuna y español una canción sobre el origen de la cerámica que nombra la «loma encantada moruapü» como el lugar adonde huyó con Métare la muchacha de la primera pelazón y donde vio las vasijas de barro: sitúa el cerro Moruapü, en la misma comunidad, como morada de encantados.",
    limitation:
      "No cuenta el relato de Moe: sólo sostiene el lugar de destino, Moruapü como loma encantada en la tradición de San Martín de Amacayacu, y lo hace a través de otro relato (Métare y la muchacha de la pelazón). Lado colombiano.",
  }),
  goulardColores2013: source({
    title: "Colores y olores del cuerpo tikuna",
    author: "Jean-Pierre Goulard",
    year: 2013,
    type: "artículo de investigación en revista universitaria de acceso abierto",
    url: "https://revistas.unal.edu.co/index.php/maguare/article/view/48835",
    summary:
      "Maguaré 27 (2), pp. 67-90, Universidad Nacional de Colombia. Al explicar cómo los clanes tikuna reciben su color, Goulard recoge el episodio de este relato: las aves de plumaje negro nacieron de las hojas con que la Luna se limpió la cara cubierta de genipa, el huito, después de la relación incestuosa con su hermana; y opone esa «sangre incestuosa», que marca los colores oscuros, a la sangre del caníbal que tiñó a las aves de colores vivos. Es la misma transformación de hojas en pájaros oscuros que cierra la escena del huito en la versión de Augusto Coello.",
    limitation:
      "Trabajo de campo de Goulard sobre todo en el Perú y en la frontera colombo-peruana; el episodio de la Luna ocupa un párrafo dentro de un análisis del sistema clánico, no se transcribe el relato ni se nombra narrador para él. No trae la wocha ni la boruga de la versión colombiana.",
  }),
  faulhaberestrelas2004: source({
    title: "«As estrelas eram terrenas»: antropologia do clima, da iconografia e das constelações Ticuna",
    author: "Priscila Faulhaber",
    year: 2004,
    type: "artículo de antropología en revista universitaria de acceso abierto",
    url: "https://www.scielo.br/j/ra/a/Hmktwpjvbr4BzjjgGDKw9yt/?lang=pt",
    summary:
      "Revista de Antropologia (USP) 47 (2), pp. 379-426. Reúne versiones del incesto de la Luna recogidas entre 1997 y 2002 en comunidades tikuna de Brasil y en el resguardo colombiano de Nazaré: la muchacha embarazada que, aconsejada por su abuela, deja el zumo de jenipapo junto a la hamaca y se lo unta en la cara al visitante nocturno; las hojas con que él se limpia se vuelven los pájaros negros llamados coró cachimbo, y la mancha que no se borra es la cara oscura de la luna. Resume una versión narrada por Pedro Inácio Pinheiro, registra que la compañera del incesto aparece unas veces como cuñada, otras como hermana y en otra versión como la hermana Sol, y cita la Tawemacü tchiga, la canción de la Luna, con el mismo episodio del jenipapo. Cita además las Historias de los abuelos de Moruapü.",
    limitation:
      "Fuente del lado brasileño en su mayor parte, con un solo punto de referencia colombiano (Nazaré); el interés del artículo es la iconografía y la lectura de constelaciones, y las versiones van resumidas en portugués, no transcritas. Ninguna trae la wocha ni la esposa boruga de Augusto Coello: en ellas quien aconseja el huito es la abuela, no la madre.",
  }),
  valenzuelaritual2010: source({
    title: "El ritual tikuna de la pelazón en la comunidad de Arara, sur del trapecio amazónico. Una experiencia etnográfica",
    author: "Hugo Andrés Ramos Valenzuela",
    year: 2010,
    type: "tesis de maestría en repositorio institucional (Maestría en Estudios Amazónicos, Universidad Nacional, sede Leticia)",
    url: "https://repositorio.unal.edu.co/handle/unal/9389",
    summary:
      "Transcribe la entrevista que Baudilio Ramos hizo al abuelo Jorge Manduca en Arara, Amazonas colombiano, en febrero de 2008, pocos días después de la pelazón de Gladis Manduca (pp. 310-320; traducción libre de Paulino Santos y Rusven Huaines). Allí el abuelo cuenta por qué se oscurece la luna: cuando estaba en la tierra vivía con su mismo clan y tenía relaciones con su hermana, que no sabía quién llegaba de noche; ella ralló huito, lo tuvo en una totuma junto a su toldillo, lo untó al visitante y así supo que era su hermano. Luego lo canta —«luna, luna… por eso usó huito para saberlo»— y cierra con que por eso el tigre coge a la luna: el eclipse. En otra nota (p. 99) la tesis da los nombres: la luna es Tawemakü, «de luz opaca», y va en canoa con su hermano el sol.",
    limitation:
      "Es una versión colombiana distinta de la de Augusto Coello: la muchacha le cuenta el caso a su papá, no a su madre, y no aparecen la wocha, la esposa boruga, las hojas vueltas pájaros ni el ascenso por el árbol. La tesis estudia el ritual de la pelazón y el relato entra como parte de una entrevista sobre los cantos; la traducción es libre.",
  }),
  filhoamadurecimento2017: source({
    title: "O amadurecimento dos corpos e do cosmos – mito, ritual e pessoa ticuna",
    author: "Edson Tosta Matarezio Filho",
    year: 2017,
    type: "artículo de antropología en revista universitaria de acceso abierto",
    url: "https://revistas.usp.br/ra/article/view/132073",
    summary:
      "Revista de Antropologia (USP) 60 (1), pp. 193-215. Lee el mito de la Luna a partir de las tres variantes que publica Camacho en Historias de los abuelos de Moruapü (2000): recoge que la Luna y su hermana son del clan garza y el Sol del clan guacamayo, primos que se tienen rabia; que la Luna baja cada mes a la tierra y de ahí viene la menstruación; y que sube al cielo por el tronco hueco de un árbol, y arriba se ve la luna llena. Liga el incesto primordial a la periodicidad del cuerpo femenino en la Fiesta de la Moza Nueva y nombra al hijo de la Luna y su hermana, la estrella de la mañana, Womatchi, el mismo término tikuna para el incesto.",
    limitation:
      "Trabajo de campo del lado brasileño (alto Solimões); sobre el relato colombiano no aporta un texto nuevo sino una lectura del mismo libro que ya sostiene la ficha, y mezcla sin distinguirlos rasgos de la versión de Augusto Coello y de la de Julia del Águila.",
  }),
  filhoFesta2015: source({
    title: "A Festa da Moça Nova: ritual de iniciação feminina dos índios Ticuna",
    author: "Edson Tosta Matarezio Filho",
    year: 2015,
    type: "tesis doctoral en repositorio institucional (Universidade de São Paulo)",
    url: "https://www.teses.usp.br/teses/disponiveis/8/8134/tde-16092015-164516/pt-br.html",
    summary:
      "En la p. 266 resume el origen del Sol según Historias de los abuelos de Moruapü: el Sol llega donde su suegra cocina zumo de urucum (achiote), la vasija se rompe, bebe lo que queda, vuelve de la caza con una danta, recoge el achiote del suelo y lo toma todo, y recibe el gran poder, chauaru. De ahí deduce que el urucum que se pasa por el cuerpo de la muchacha iniciada evoca esa historia: el fuego eterno del sol pasa a su cuerpo. Añade las canciones de moza nueva que invocan al «abuelo sol» y el uso ritual de la palabra cuaratchi, en vez de üacü, para nombrar al sol.",
    limitation:
      "Tesis del lado brasileño (alto Solimões); el resumen del mito lo toma del mismo libro que ya sostiene la ficha, no de un narrador propio. No menciona el árbol de algodón ni la chambira.",
  }),
};

/**
 * Entradas propias por mito: una lista de claves, o de `{ key, summary,
 * limitation }` cuando el mito quiere decir qué le aporta esa obra a él en
 * particular. Antes había además un `pickTicunaSources(primaryKey)` que
 * armaba un dossier fijo de siete con un solo interruptor: eso era el reparto
 * en bloque, y por eso las seis fichas citaban lo mismo.
 */
export function entradasPropias(...entries) {
  const vistas = new Set();
  const salida = [];
  for (const entrada of entries) {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = ticunaSources[key];
    if (!selected) {
      const visto = typeof entrada === "string" ? entrada : JSON.stringify(entrada);
      throw new Error(`Fuente desconocida en ticuna: ${visto}`);
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
