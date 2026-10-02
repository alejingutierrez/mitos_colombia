import { defineNukakMyth } from "./define-editorial-myth.mjs";

const narrativeBoundary =
  "Esta versión editorial parafrasea la narración publicada de Embe. No añade diálogos, vestuario, ceremonias, coordenadas precisas ni explicaciones espirituales ausentes; tampoco presenta la traducción académica como la única voz Nɨkak.";

const records = [
  defineNukakMyth({
    slug: "creacion-nukak-maku",
    sourceKeys: [
      {
        key: "franky2011",
        summary:
          "Es la fuente primaria del relato. Publica en las pp. 72-75 la versión narrada por Embe' —Machoroko como mujer que escarba con uñas de oso hormiguero, el hueco en Kein inbe', los kawéni' yore que los flechaban para comérselos, la resina resbalosa en la boca del paso, Aukurɨbo que se calienta con hojas de maíz y se devuelve vuelto oruga y mariposa, los mayores y sus grupos, el baile baap en la confluencia, los caños escogidos y las semillas traídas en canastos de yaré—, y en las pp. 75-77 las variantes contradictorias. En las pp. 71-72 sitúa a Mauro y los cataclismos. Da además quién es Embe': Meu muno, unos cuarenta y cinco años en 2011, conocimientos chamanísticos profundos.",
        limitation:
          "El texto publicado es un resumen editado por el investigador de una entrevista grabada en 2007 y traducida, no una transcripción íntegra en lengua nɨkak; se revisó con Embe' y Noube' en San José del Guaviare en febrero de 2008. La tesis está escrita para un tribunal neerlandés y su ortografía —Nükak, yee, Aukurübo, kawene— difiere de la que usa la lingüística actual. Franky advierte que no busca «la» versión canónica.",
      },
      {
        key: "mahecha2024",
        summary:
          "Reproduce el relato de Embe' segmentado en trece momentos, en las pp. 80-84, con notas etimológicas y glosas propias, y fija las grafías Nɨkak, yê, Aukurɨbo, kawéni', Wɨkɨ i mena. En las pp. 71-72 establece la distinción que obligó a rehacer esta ficha: los kakua vienen de los raudales de Kat-tsa-pa en el río de Leche y su héroe es Idn Kamni, mientras que el héroe nɨkak es Mauro, y son diferentes. Registra también que el consejo de autoridades actual se llama Mauro Muno.",
        limitation:
          "No es un registro independiente: cita a Franky 2011. Los trece momentos son segmentación de Mahecha y no de Embe', que en la publicación de 2011 aparece numerado del uno al nueve. El encuadre de la autora sitúa una gran inundación antes del nacimiento, cosa que el relato de Embe' no dice.",
      },
      "herreranukak2016",
      {
        key: "upperRioNegro",
        summary:
          "En las pp. 163-196 explica los tres mundos —jéa arriba, yê el nuestro, bak abajo— entre los que ocurre el relato, y los takueyi, los parientes no humanos que habitan jéa y bak. En la introducción de las editoras, pp. 26-27, están los dos paralelos que usa Similitudes: los hup, que dicen haber llegado a pie desde el oriente pero cuyos relatos actuales incorporan la canoa-anaconda, y los pueblos arawak del alto Río Negro, originados en los raudales de Uaupuí sobre el río Aiarí.",
        limitation:
          "Aporta cosmología y comparación regional, no una segunda transcripción del ciclo de Machoroko. Es un volumen en inglés publicado en Brasil, y la URL del módulo apuntaba por error al informe de IWGIA en vez de a este libro.",
      },
      "colombiaAuto2009",
      {
        key: "overview2011",
        summary:
          "Reúne en cuarenta y ocho páginas el contexto de territorio, organización y transformaciones posteriores al contacto que la ficha necesita para hablar en presente del pueblo, incluida la historia de la Reserva Nacional Natural Nukak de 1989 y del resguardo de 1993 ampliado en 1997.",
        limitation:
          "Mahecha y Franky son los editores de un informe colectivo, no los autores de una síntesis, como consignaba el módulo. Es un escaneo con reconocimiento óptico parcial y no contiene el mito.",
      },
      {
        key: "minCultura",
        summary:
          "Acredita que formar personas nɨkak baka' es un proceso vivo y con medidas de salvaguardia: da unas 650 personas, el contacto oficial de 1988, el interfluvio Guaviare-Inírida y el plan especial de salvaguardia de urgencia iniciado en 2010.",
        limitation:
          "No menciona el mito de origen, ni Machoroko, ni Mauro, ni bak, yê o jea. El resumen que el módulo le atribuía —«relaciona tradición oral, territorio y manejo del mundo»— le daba más de lo que dice.",
      },
      {
        key: "resolution2013",
        summary:
          "Incluye en su artículo primero el proceso de formar y vivir como nükak baka' en la Lista Representativa de Patrimonio Cultural Inmaterial del ámbito nacional, y con ello fija el alcance del plan especial de salvaguardia que la ficha invoca.",
        limitation:
          "Es un acto administrativo: define una manifestación y sus medidas, y no narra ni autoriza a publicar conocimiento reservado.",
      },
    ],
    title: "Machoroko y el nacimiento Nɨkak",
    summary:
      "Machoroko abre un paso desde bak; Aukurɨbo y los grupos Nɨkak salen, se separan junto a los grandes ríos y vuelven a formar territorio.",
    excerpt:
      "Machoroko abre un paso desde bak; Aukurɨbo y los grupos Nɨkak salen, se separan junto a los grandes ríos y vuelven a formar territorio.",
    tags: ["Machoroko", "Aukurɨbo", "bak", "nacimiento Nɨkak"],
    mito: `Antes de estar aquí, los Nɨkak vivían en bak, el mundo de abajo. No estaban solos: allí también estaban los kawéni' yore, gente que no es Nɨkak, que bailaba un baap cantando «nañure, nañure, nañure», jugaba y se flechaba entre sí. Andaban con la cara pintada, sin ropa y sin escopetas, y a los Nɨkak los perseguían y los flechaban para comérselos. Cuando uno caía herido se le oía gritar: «yüai yüai, eehh eehh».

Machoroko era una mujer y estaba en yee, este mundo. Oyó esa algarabía que venía de abajo y se puso a buscar de dónde salía. Escarbó con uñas de oso hormiguero en una playa por el lado de Kein inbe', una laguna que queda un poco antes de donde se juntan el Wayari y el Mipa. Cavó tres o cuatro metros hasta que el hueco atravesó.

Los Nɨkak no subieron de una vez. Primero echaron en la boca del hueco una resina resbalosa, para que los kawéni' yore que quisieran seguirlos se rodaran hacia abajo.

El primero que salió fue Aukurɨbo, un viejo que era jefe verdadero. Arriba sintió frío y le prendieron un fogón con hojas de maíz para que se calentara. Mientras estaba ahí cantó un pajarito wayo, y al oírlo se acordó: allá es mi hogar, el lugar que me gusta, donde está el caño que me gusta. No tuvo fuerza para seguir el camino. Se volvió oruga y después mariposa, y así pudo devolverse a bak con parte de su familia. Sus hijos viven todavía por donde queda el Cerro de las Cerbatanas.

Después fueron saliendo los demás, en grupos pequeños y cada uno con su mayor. Salieron Yauda' y Jioro wün, salieron las señoras Pugna y Yuredoa, salieron Nepna bitui y Tai'a' bitui con los suyos. Algunos se quedaron abajo. La Gente Tucán abrió el camino y fue orientando el avance.

Cerca de donde los dos ríos se juntan descansaron todos y bailaron un baile baap. Y ahí mismo se separaron: unos siguieron subiendo por el Mipa y otros se fueron por el Wayari. Cada mayor llevó a su gente por donde le pareció, escogiendo caños y lagunas para detenerse —el caño Wana' a müj, Jabebü, Tugpe, Joo'ni inbe', la sabana, Wipai—, y en esos lugares quedaron los nombres de sus pasos.

Traían las semillas desde abajo, en canastos grandes tejidos con bejuco yaré: chontaduro, tabaco, caña, muji, plátano, yuca dulce y yuca amarga, maíz, mamo. Donde decidían quedarse, sembraban. Salir a este mundo no fue entonces un acto instantáneo. Fue abrir un paso, cubrirlo detrás, cuidar a la familia, separarse sin dejar de reconocerse, escoger dónde vivir y sembrar lo que se había traído.

Más adelante llegaron los kawéni' jeñe, los mayores de los que no son Nɨkak, y llegaron con escopetas. Los abuelos se retiraron a lugares donde pudieran vivir tranquilos, y duplicaron los hijos, porque ya les habían matado parientes y había que recuperar la familia.`,
    historia: `Esta versión la narró Embe', hombre de unos cuarenta y cinco años en 2011, del grupo Meu muno —la gente de las cabeceras de los caños—, residente en Villa Leonor, reconocido entre los suyos como alguien que ha desarrollado conocimientos chamanísticos profundos. La grabación es de 2007; Carlos Eduardo Franky revisó la transcripción con Embe' y con Noube' en San José del Guaviare en febrero de 2008, y la publicó en 2011 en su tesis doctoral hecha con Wageningen y Tropenbos. Dany Mahecha Rubio la reprodujo en 2024 en su tesis de lingüística y etnohistoria, segmentada en trece momentos y con notas etimológicas propias.

Hay una segunda versión. Kerayi, del grupo Wayari muno, la contó la noche del 17 de junio de 2007, cuando un aguacero obligó a varias familias a refugiarse en su casa; estaban presentes Wembe, Jetena, Manuel y Yolanda, cuñada de Kerayi. Yorena tradujo las grabaciones y se revisaron con Dugupé, Wembe y Kurui. Ruth Gutiérrez Herrera la publicó en 2016 en el fondo editorial del ICANH. Franky dice expresamente que no busca «la» versión canónica, y esta página tampoco.

Nɨkak y kakua hablan lenguas estrechamente emparentadas y comparten ancestros, pero sitúan su nacimiento en lugares distintos y nombran héroes distintos: los kakua vienen de los raudales de Kat-tsa-pa, en el río de Leche, y su héroe es Idn Kamni; el héroe nɨkak es Mauro, que eliminó, transformó y creó seres como el sol, el zancudo y la palma de moriche, reordenó el cosmos y creó los cantos y los pasos del baap. La proximidad de las dos lenguas ha hecho que los dos orígenes se confundan con frecuencia, y la revisión de 2024 los separa de forma expresa. Mauro sigue nombrando el presente: el consejo de autoridades del pueblo se llama Mauro Muno.

Lo narrado no es sólo la aparición de unos seres humanos. Es un movimiento: familias que abren un paso, escogen territorio, siembran y vuelven a formarse. Esa dimensión pesa. En 1988, cuando se produjo el contacto oficial, llegaron a Calamar cuarenta y tres personas nɨkak —cuatro hombres, doce mujeres y veintiséis niños— con una epidemia de gripa; la población cayó después a unas cuatrocientas, y la Corte Constitucional documentó en 2009 una cadena de éxodos forzados que no ha terminado. El proceso de formar y vivir como nükak baka' está inscrito desde 2013 en la lista representativa de patrimonio inmaterial y tiene un plan de salvaguardia de urgencia. Esto se cuenta en presente porque en presente ocurre.`,
    versiones: `Las dos versiones publicadas difieren en casi todos los detalles gruesos y no se funden aquí.

Quién abre el paso. Para Embe', Machoroko es una mujer que estaba en yee y escarbó con uñas de oso hormiguero. Para Kerayi es Matchoroco, mitad humano y mitad animal, parecido además a una mariposa de manos largas.

Cómo se protegen. Embe' cuenta la resina resbalosa en la boca del hueco. Kerayi cuenta que rompieron la puerta con nemet chat, hachas de piedra. Una tercera variante recogida por Franky dice que taparon el hueco con lanzas y que fue la hija de Aukurübo quien mandó dispersarse y borrar las huellas con hojas de piña de monte.

Quién es Aukurɨbo. En Embe' es un mayor que se cansa, se transforma y se devuelve. En Kerayi, Aukeribo es un héroe activo que veía con eoro, enseñó a abrir trochas y a preparar el baap. Y Mauro, que no aparece en el relato de Embe', en el de Kerayi sale del hueco entre los primeros.

Dónde queda el hueco. Embe' lo pone en Kein inbe', una laguna anterior a la confluencia de los dos ríos. Kerayi lo pone en el lago Ké Inbé, en las postrimerías del bajo Inírida. Kerayi añade además que Meabu jumat dio un alarido y que su garganta inflamada formó las montañas, entre ellas el cerro Cerbatana.

Cuántos son los momentos. Los trece momentos con que suele presentarse el relato son la segmentación de la edición de 2024; en la publicación de 2011 el mismo texto va numerado del uno al nueve. Franky llama a algunas de estas discrepancias, expresamente, planteamientos contradictorios.

Las grafías también cambian de una publicación a otra: Nükak, Nɨkak y nükak; yee, yê y Yé; Aukurübo, Aukurɨbo y Aukeribo; kawene, kawéni' y kawene hupu. La categoría del sitio conserva «Nukak Makú» para no romper la navegación heredada, aunque las fuentes contemporáneas prefieren Nɨkak y cuestionan el uso de Makú.`,
    similitudes: `Los kakua son el paralelo más cercano y también el que impide la confusión. Hablan una lengua estrechamente emparentada con el nɨkak y comparten ancestros, pero cuentan que vienen de los raudales de Kat-tsa-pa, en el río de Leche, y que de allí ascendieron hasta el lugar donde están; su héroe cultural es Idn Kamni. El origen kakua es un raudal y un viaje río arriba; el nɨkak es un hueco vertical entre dos mundos y sólo después un viaje por los ríos. La edición de 2024 lo dice sin rodeos: son diferentes.

Los hup, del mismo conjunto naduhup, dicen haber llegado a pie desde el oriente, pero sus relatos de origen actuales incorporan la canoa-anaconda de los pueblos tucano orientales, con quienes se emparentan como hermanos mayores. El desplazamiento hup es horizontal y acuático; el nɨkak empieza siendo vertical.

Los pueblos arawak del alto Río Negro se originan en los raudales de Uaupuí, sobre el río Aiarí. El dato importa porque de esa zona migraron los Tsáse —la Gente Tucán que en el relato abre el camino— y probablemente parte de los ancestros nɨkak. Aun compartiendo historia, el origen se recuerda como raudal y no como hueco.

Las tres semejanzas sirven para estudiar contactos históricos y no autorizan a intercambiar héroes, lugares ni pueblos. Lo propio de esta versión es la combinación: una mujer que escarba desde arriba, un mayor que sale primero y se devuelve transformado, la salida cerca de donde se juntan dos ríos grandes, la separación en dos cursos y las semillas traídas en canastos.`,
    leccion:
      "Un pueblo nace cuando alguien abre el paso y los demás deciden por dónde seguir.",
    sceneHorizontal:
      "familias avanzan desde una abertura entre capas de mundo hacia dos ríos que se separan",
    sceneVertical:
      "Aukurɨbo pasa de figura humana a oruga y mariposa entre bak y yê mientras Machoroko abre el camino",
    researchNotes:
      "CORRECCIÓN INTEGRAL: se conserva el slug histórico, se retira la atribución Kakua a Idn Kamni y se reemplazan las dos imágenes físicas y semánticamente incorrectas.",
    seoTitle: "Machoroko y el nacimiento Nɨkak | Guaviare",
    seoDescription:
      "Relato Nɨkak documentado sobre Machoroko, Aukurɨbo, la salida desde bak y los caminos por los ríos Guaviare e Inírida.",
    focusKeywords: [
      "Machoroko y el nacimiento Nɨkak",
      "mito Nɨkak",
      "Aukurɨbo",
      "mundo bak",
      "Guaviare e Inírida",
    ],
  }),
];

for (const record of records) {
  record.mito = `${record.mito}\n\n${narrativeBoundary}`;
  record.content = [
    `Mito\n${record.mito}`,
    `Historia\n${record.historia}`,
    `Versiones\n${record.versiones}`,
    `Lección\n${record.leccion}`,
    `Similitudes\n${record.similitudes}`,
  ].join("\n\n");
}

export default records;
