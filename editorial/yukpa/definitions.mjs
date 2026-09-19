import { defineYukpaMyth } from "./define-editorial-myth.mjs";

const records = [
  defineYukpaMyth({
    slug: "los-dos-caminos-del-cielo",
    sourceKeys: [
      {
        key: "halbmayerTecendo2016",
        summary:
          "Es la fuente del episodio central. En las versiones irapa y sokorpa el firmamento estaba cerca de la tierra, hacía tanto calor que hervía el agua de ríos y lagunas y había dos soles en el cielo, de modo que nunca oscurecía; Amoricha disparó flechas de punta roma hechas con cera de abeja negra, el firmamento empezó a subir, y de un tiro en el ojo de uno de los soles ese sol se oscureció y se volvió la luna. Trae también la variante sokorpa, donde el relato se cuenta desde arriba y el propio dios-sol se dispara en el ojo con la flecha de mapicha, y la iroka, donde el héroe no dispara sino que teje las montañas, los árboles y las hojas para dar sombra. Da además la etimología de Amoricha y sus otros nombres: Otompa, Maipore, Aponto, Papsh tyos.",
        limitation:
          "Está escrito en portugués, con versión inglesa en la misma ficha del artículo. El campo es irapa, en Venezuela, e iroka y sokorpa, en Colombia, y el autor no nombra a los narradores de ninguna de las tres versiones que compara, de modo que la atribución individual falta.",
      },
      {
        key: "halbmayermundo2025",
        summary:
          "Sostiene la segunda mitad del relato: la diferencia entre el Sol y la Luna como personas, el Sol isope —agresivo, antropófago, enemigo— frente a la Luna kowaso —gentil, que alimenta, esconde y se vuelve suegro—, el cazador perdido escondido en una de las vasijas de barro donde las hijas de la Luna se recogen en su primera sangre, y el primer eclipse cuando el Sol las destapa. Cita literalmente al autor irapa yukpa Javier Armato, de quien son los ríos hirviendo y la frase «porque el sol no respetó a las señoritas». Explica el eclipse como owaya inipi, el apagado del mundo, y la respuesta de gritar, golpear machetes y ollas y disparar contra el Sol y la Luna.",
        limitation:
          "Vecindad declarada: el material irapa es venezolano y los autores escriben desde Marburg. Armato 1988 y Wilbert 1974, que son las fuentes primarias de estos dos episodios, se citan con página pero no están digitalizados ni se pudieron abrir. El artículo trata de los daños del mundo, no del ciclo de origen, de modo que el episodio de los dos soles aparece de pasada.",
      },
      "mauriOfrendas2020",
      {
        key: "minCulturaYukpa",
        summary:
          "Publica un cuadro del cielo yukpa distinto del de las etnografías y por eso está en Versiones: dos soles que ascienden en el universo, Paphs como creador, sópasha como guardián del territorio, Tumanke como divinidad de la salud y de la vida y Yuwanano como deidad de las plantas medicinales; el Sol gobierna las estrellas y tiene de aliada a la gente jaguar, y la Luna vive con sus hijos, siembra batatas y yuca y juzga las almas camino de la tumba.",
        limitation:
          "Ninguno de esos nombres aparece en las versiones irapa, iroka o sokorpa recogidas en campo, y no se han podido contrastar: la síntesis procede de Jaramillo 1992 y del Consejo Superior de la Judicatura. Se cita atribuida y no se mezcla con el Relato.",
      },
      {
        key: "planVidaYukpa",
        summary:
          "Confirma desde el lado colombiano que Aponto es el nombre actual del creador y recoge el episodio en que hace al hombre y a la mujer de madera y les da movimiento con la risa. Es el mismo héroe que aquí dispara al sol, bajo el nombre que usan los iroka y los sokorpa.",
        limitation:
          "Es un artículo de trabajo social sobre el plan de vida, no una etnografía del ciclo de origen: da el nombre y el episodio de la gente de madera, y nada sobre los dos soles ni sobre el eclipse.",
      },
      {
        key: "goletzRecibiendo2020",
        summary:
          "Describe Sokorpa, la unidad territorial de la que procede la variante en que es el propio sol quien se dispara en el ojo, y el modo reservado en que allí se trata con lo que no es humano. Permite entender por qué esa versión se cuenta desde la perspectiva del dios-sol y no desde la tierra.",
        limitation:
          "No contiene el relato de los dos soles ni el del eclipse: se usa para situar la variante sokorpa y su manera de narrar, en una sola comunidad del municipio de Becerril. SciELO Colombia sirve este artículo sólo por http: la versión https no responde, y se prefiere el enlace que funciona al que se ve mejor.",
      },
      {
        key: "correayukpa2023",
        summary:
          "Da el presente del territorio iroka, del que proceden algunas de las versiones comparadas, y está firmado también por dos personas yukpa del resguardo. Sirve para que el relato no se lea como pasado cerrado.",
        limitation:
          "Su objeto es el confinamiento durante la pandemia y el gobierno propio; no aporta material mítico ni discute los nombres del héroe cultural.",
      },
      {
        key: "lecHisYup",
        summary:
          "Documenta el proceso de fijar por escrito la lengua yukpa y las decisiones ortográficas que las publicaciones actuales siguen. Se usa como control de las grafías de los nombres del relato, no como fuente narrativa.",
        limitation:
          "Es un documento de metodología de alfabetización y no contiene ninguna versión del ciclo de los soles ni de ningún otro. El módulo lo describía como «Lecturas históricas Yukpa» con una adaptación breve del ciclo de Mé: no es eso.",
      },
    ],
    title: "Los dos Soles y el nacimiento de la noche",
    excerpt:
      "Dos hermanos alumbran sin descanso hasta que el engaño de Kopeco transforma a uno en Luna y abre un tiempo de oscuridad.",
    tags: ["sol y luna", "noche", "transformación", "origen"],
    mito: `Había dos soles en el cielo y el cielo estaba bajo. Tan bajo que el calor no tenía por dónde escaparse: el agua de los ríos y de las lagunas hervía, y como los dos soles se turnaban sin dejar hueco, nunca oscurecía. No había noche, no había frío, no había una hora en que el cuerpo pudiera descansar. La tierra era angosta y era inhabitable.

El que vino a arreglarlo se llama Amoricha entre los irapa. Tomó el arco y se puso a disparar hacia arriba. No eran flechas de matar: las puntas eran romas, hechas con cera de abeja negra, hechas para tocar y no para herir. Disparaba contra el cielo, y el cielo empezó a subir. Cada flecha lo empujaba un poco más, y entre la tierra y el firmamento se fue abriendo el espacio en el que después se podría vivir.

Después apuntó a uno de los dos soles y le dio en el ojo. El sol herido se oscureció. No se apagó del todo ni cayó: se quedó arriba, con una luz distinta, fría, y desde entonces es la luna. Con esa puntería quedaron hechas de golpe todas las diferencias que faltaban: el día y la noche, el calor y el frío, lo seco y lo húmedo. Se pudo sembrar, se pudo dormir, se pudo contar el tiempo.

Pero los dos que quedaron arriba no se hicieron iguales ni amigos. El Sol es bravo y come gente; anda de cacería y lo que persigue son personas. La Luna es mansa, da de comer y esconde. Un cazador que se perdió llegó a la casa de la Luna, y la Luna lo acogió, lo alimentó y lo escondió en una de las vasijas de barro donde sus hijas se recogen cuando les llega la primera sangre. El Sol vino detrás, olfateando, y se puso a destapar las vasijas una por una buscando al hombre. Las muchachas quedaron a la intemperie, descubiertas cuando nadie debía verlas.

Entonces ellas le echaron las mantas encima a la cara de la Luna. Y así apareció el primer eclipse sobre la tierra, porque el Sol no respetó a las señoritas.

Desde ese día las dos cosas están juntas. La noche existe porque una flecha oscureció un ojo, y el mundo se apaga cada vez que el Sol vuelve a abrir lo que no debía abrir. Cuando eso pasa, abajo la gente grita, golpea los machetes y las ollas y dispara hacia arriba: se está repitiendo el tiro que hizo la noche, y se está exigiendo que el mundo vuelva a quedar separado como quedó aquella vez.`,
    historia: `El héroe que dispara no tiene un solo nombre, y eso no es un descuido de las fuentes. Los irapa lo llaman Amoricha; los iroka, Otompa. Hoy se lo nombra también Maipore entre los irapa, Aponto entre los iroka y los sokorpa, y Papsh tyos, Dios-padre, en un uso que muchos yukpa entienden como el mismo del Dios cristiano. Ernst Halbmayer, que analizó el conjunto en la Revista de Antropologia de la Universidad de São Paulo en 2016, muestra que Amoricha viene del verbo -amó-, con el sufijo -cha que marca a una persona fallecida: es el que tuvo el conocimiento para transformar, no una fuerza que engendra. Es también, en varias versiones, una araña y un aspecto del sol, que bajó a la tierra como un rayo en la neblina, en forma de hilo.

Halbmayer ordena la mitología yukpa publicada en cuatro complejos. El primero, del que sale esta página, cuenta la transformación del mundo y el establecimiento de la vida humana y animal. Los otros tres son el ciclo de los gemelos y el cielo nocturno, el origen de las plantas cultivadas y los relatos sobre los blancos y su tecnología. El material viene de campo en Irapa, en Venezuela, y en Iroka y Sokorpa, en el Cesar.

Los dos episodios que aquí se juntan, la transformación de un sol en luna y el eclipse en casa de la Luna, los publicó Javier Armato, autor irapa yukpa, en Maracaibo en 1988: suyas son la descripción de los ríos hirviendo y la frase sobre el Sol que no respetó a las señoritas, que Halbmayer y Goletz citan literalmente en 2025. El episodio del cazador perdido está registrado además por Johannes Wilbert en el corpus que publicó en la Universidad de California en 1974. Conviene decirlo: la mayor parte de este ciclo se documentó del lado venezolano de la Serranía del Perijá, y llega al español a través de investigaciones escritas en inglés, alemán y portugués.

El episodio pertenece a lo que los yukpa llaman owaya tamorhiya, el tiempo en que el mundo todavía estaba en formación. Halbmayer propone leer estas escenas no como creación desde la nada ni como apropiación de saberes ajenos, sino como transcreaciones: manipulaciones intencionadas que ajustan un mundo que ya existe. Disparar, aquí, no es matar. Es establecer contacto, transformar al otro y abrir la distancia que hace falta para que se pueda vivir.`,
    versiones: `Los subgrupos no cuentan lo mismo ni se interesan por lo mismo. Las versiones irapa y, en parte, las sokorpa insisten en cómo unas condiciones hostiles se volvieron habitables. Las iroka insisten en cómo llegaron a existir los elementos básicos del mundo y cómo se hizo posible la reproducción.

El mecanismo cambia con el subgrupo, y el cambio no es un detalle. En la versión irapa es Amoricha quien dispara y acierta en el ojo de uno de los soles. En la sokorpa, el mismo episodio se cuenta desde arriba y desde el otro lado: es el dios-sol quien habla, cansado de que le disparen desde la tierra, y termina disparándose él mismo en el ojo con la flecha de punta de mapicha; los sokorpa dicen que el sol era el ojo de Dios. En las versiones iroka no hay flecha: el héroe teje las montañas, los árboles y las hojas para dar sombra, y así le va formando al mundo sus contornos. Disparar y tejer no son la misma manera de hacer que algo ocurra, y las tres se dejan como están.

La caracterización que publica el Ministerio de Cultura de Colombia ofrece un cuadro distinto del cielo: dos soles que ascienden en el universo, Paphs como creador, sópasha como guardián del territorio, Tumanke como divinidad de la salud y Yuwanano como deidad de las plantas medicinales. Allí el Sol gobierna las estrellas y tiene de aliada a la gente jaguar, y la Luna vive con sus hijos, siembra batatas y yuca y juzga las almas de los yukpa camino de la tumba. Ninguno de esos nombres aparece en las versiones irapa, iroka o sokorpa recogidas en campo, y no se mezclan con ellas.

Hoy conviven dos lecturas del eclipse que las fuentes no dan por excluyentes: la que lo entiende como continuación de la pelea entre el Sol y la Luna, y la que, en contexto cristianizado, lo lee como castigo del dios creador ante una transgresión humana.`,
    similitudes: `El primer paralelo está documentado por los propios etnógrafos del caso. Halbmayer y Goletz señalan que la reacción yukpa ante un eclipse —gritar, golpear machetes y ollas, disparar flechas contra el Sol y la Luna— es comparable a la de otros pueblos indígenas del continente, y remiten para ello al análisis que Lévi-Strauss hizo de ese conjunto de conductas. Lo que distingue al caso yukpa no es el ruido, sino que el ruido repite un gesto fundador: se vuelve a disparar lo que una vez hizo la noche.

El segundo paralelo es una diferencia de fondo con la Amazonía. Halbmayer sostiene que estos relatos no son creaciones desde la nada ni apropiaciones de saberes ajenos, los dos modelos frecuentes en las narraciones amazónicas, sino transcreaciones: manipulaciones intencionadas que ajustan un mundo que ya existe. Ese rasgo es prominente entre los pueblos de habla chibcha del área istmo-colombiana, vecinos de los yukpa, y coloca este relato más cerca de ellos que de los pueblos caribes del sur con los que comparte lengua.

Dentro del propio universo yukpa, la separación del Sol y la Luna es la misma operación que el diluvio deshace. Una establece diferencias y el otro las disuelve; el eclipse está en medio, como recaída. Conviene no confundir esta historia con cualquier explicación de las manchas lunares ni con un relato de eclipse sin más: aquí la luna no es un astro observado, es un hermano herido en el ojo, y el eclipse es una falta de respeto con consecuencias.`,
    leccion:
      "La diferencia entre el día y la noche no estaba dada: alguien tuvo que abrir la distancia.",
    sceneHorizontal:
      "dos discos solares hermanos recorren un cielo continuo sobre montañas recalentadas; en primer plano Kopeco señala un círculo de brasas estilizadas y una franja azul anuncia la futura noche",
    sceneVertical:
      "un astro de luz fría asciende como Luna sobre una laguna donde una pequeña rana forma ondas, mientras el Sol queda al otro lado del horizonte",
    researchNotes:
      "CORRECCIÓN DE FICCIÓN HEREDADA: elimina el narrador y la expansión sin fuente; conserva Kopeco, los dos Soles, las brasas y la diferenciación entre día y noche.",
    seoTitle: "Los dos Soles y la noche | Mito Yukpa",
    seoDescription:
      "Mito Yukpa documentado sobre dos hermanos solares, el engaño de Kopeco, la transformación de uno en Luna y el nacimiento de la noche.",
    focusKeywords: [
      "dos Soles Yukpa",
      "origen de la noche Yukpa",
      "Kopeco",
      "Sol y Luna Yukpa",
      "mitología Yukpa",
    ],
  }),
  defineYukpaMyth({
    slug: "la-piedra-que-flota",
    sourceKeys: [
      "halbmayermundo2025",
      "goletzRecibiendo2020",
      {
        key: "minCulturaYukpa",
        summary:
          "Aporta una versión distinta y por eso está en Versiones. Ordena la historia yukpa en ocho etapas y coloca el diluvio en la cuarta; en su síntesis del episodio del agua no son los armadillos los que resuelven, sino el pájaro carpintero, el tapir, el caimán, el cangrejo y la tortuga, que construyen muros para que las inundaciones no acaben con la gente. Da además territorio, lengua y cifras de población.",
        limitation:
          "Es un perfil institucional sin trabajo de campo propio: la síntesis mitológica la toma de Jaramillo 1992 y del Consejo Superior de la Judicatura, y no se ha podido contrastar con ninguna etnografía. Se cita como versión atribuida y no entra en el Relato.",
      },
      "halbmayerTecendo2016",
      "correayukpa2023",
      "halbmayerBailando2020",
      {
        key: "planVidaYukpa",
        summary:
          "Sitúa el territorio en el que ocurre el relato y lo que significa rehacerlo. Nombra los asentamientos yukpa de la Serranía del Perijá —El Kozo, Sokorpa, Caño Padilla, entre otros— y expone la relación entre territorio y buen vivir desde la que se entiende la reconstrucción del mundo después de la inundación.",
        limitation:
          "Es un artículo de trabajo social sobre el plan de vida, hecho con investigación acción participante; su único material narrativo es el origen de la gente de madera, que pertenece a otro ciclo. El módulo lo atribuía a «María Franco», que no es la autora.",
      },
    ],
    title: "El gran diluvio y las montañas del Perijá",
    excerpt:
      "La lluvia oscurece el mundo; quienes alcanzan las cumbres del Perijá sobreviven y los armadillos ayudan a retirar las aguas.",
    tags: ["diluvio", "agua", "montaña", "armadillo"],
    mito: `La lluvia empezó y no paró. No fue una tarde de agua ni una crecida de invierno: cayó durante semanas y después durante meses, y con ella vino una oscuridad larga, una noche que no cedía. Los arroyos se volvieron ríos, los ríos se salieron, y el agua fue tapando los conucos, los caminos y las casas. Murieron muchas personas. Murieron también los árboles y los animales, y el mundo que con tanto trabajo había quedado repartido en tierra firme, monte y cauce volvió a ser una sola cosa revuelta.

En la Serranía del Perijá hay dos montañas que están por encima de todas las demás: Shkhimo y Tʉtarhi. En aquel tiempo no eran sólo piedra y niebla. Eran personas, y hablaron. Avisaron que subieran, y dijeron a cuál de las dos había que subir. Algunos oyeron y treparon hasta donde les dijeron. Otros no creyeron, o creyeron a medias, y se quedaron abajo, o escogieron por su cuenta el cerro que les quedaba más cerca y que no era el más alto. El agua los alcanzó allí.

Arriba, los que subieron esperaron. Vieron el agua debajo, quieta y sin orilla, sin saber cuánto duraría ni qué quedaría cuando bajara. Y no bajaba. La lluvia terminó y el agua siguió donde estaba, borrando la diferencia entre el monte y la sabana, entre lo que se siembra y lo que se navega.

Entonces trabajaron los armadillos. En aquel tiempo los armadillos todavía no eran del todo animales: eran yukpapi, gente como la gente, y por eso podían hacer lo que hicieron. Cavaron. Abrieron por debajo el camino del agua y la hicieron hundirse. Donde pasó la garra apareció otra vez el suelo, y con el suelo volvió a haber una parte que es río y otra que es bosque, una que es sitio de vivir y otra que es sitio de sembrar. Sólo después de que la tierra quedó otra vez separada del agua los armadillos y los demás tomaron la forma de animales que hoy tienen.

Lo que quedó no era lo mismo que había. No había qué comer. Hubo hambre. En algunos relatos, detrás de la inundación vino un incendio y una sequía que terminaron de castigar lo poco que se había salvado, y dejaron la tierra en pura roca, pelada, sin monte y sin dónde hacer conuco. Hubo que volver a empezar la siembra y volver a poner en su sitio cada cosa que el agua había mezclado.

Por eso no se cuenta como un final. Se cuenta como un daño: el mundo no se acabó ni se hizo de nuevo desde cero. Se estropeó, se deshizo en parte, y hubo que rehacerlo encima de lo que había quedado. El agua se acuerda, y la gente también.`,
    historia: `Las versiones que sostienen esta página vienen de tres territorios yukpa distintos y de investigaciones largas: Irapa, en Venezuela, donde Ernst Halbmayer trabajó entre 1991 y 2009; Iroka, en el Cesar, entre 2009 y 2023; y Sokorhpa, en el municipio de Becerril, entre 2014 y 2022, donde trabajó Anne Goletz. Las dos montañas Shkhimo y Tʉtarhi, la instrucción de subir y la intervención de los armadillos aparecen comparadas en el artículo que ambos publicaron en 2025 en la Revista Española de Antropología Americana.

Hay nombres detrás de cada pieza. La frase que cierra el episodio la dice un narrador irapa, Kumateta: «Ovaya nüpünmanak, nopa nükünni prak oran ka psek ok ka nech kamashru» —se salvó la tierra, y quien lo arregló era el armadillo—. La transcripción del material en lengua yukpa la hizo Diomedes de Jesús Bernal Fernández, llamado Tintin, de la comunidad Los Granados, en Sokorhpa. De Sokorhpa son también Darwin Pérez Restrepo, Luka, que aportó las encuestas sobre el daño del mundo, y Ángel Pérez Restrepo, que expuso el tema en la Universidad del Magdalena el 28 de febrero de 2023. En 2015, los estudiantes de la escuela bilingüe Santa Teresita de Sokorhpa dibujaron la inundación en un taller dirigido por Gilberto Rodríguez López.

Detrás de ese trabajo reciente hay un corpus anterior, casi todo venezolano y casi todo en inglés o alemán: las narraciones que Johannes Wilbert publicó en 1974 en la Universidad de California, las que reunió el autor irapa yukpa Javier Armato en Maracaibo en 1988, la compilación de Vannini y Armato de 2001, la etnografía de Ángel Acuña Delgado de 1998 y el estudio de Dionisio Castillo de 2016. Esa vecindad importa: buena parte del ciclo se documentó del lado venezolano de la Serranía, y lo que aquí se lee llega traducido dos veces.

El diluvio no es en este corpus un episodio suelto. Los yukpa distinguen owaya tamorhiya, el tiempo en que el mundo todavía estaba en formación, de owaya akayi, el mundo que se daña: la disolución parcial de las diferencias que costó trabajo establecer. La inundación es la manifestación más completa de lo segundo, y por eso el relato no termina con la salvación de unos pocos sino con la obligación de volver a separar lo que el agua mezcló. En Sokorhpa, hoy, esa misma clave se aplica a las lluvias que llegan a destiempo y a las inundaciones de las zonas bajas, atribuidas a la deforestación, las quemas, la minería, el desvío de ríos y la agricultura industrial.`,
    versiones: `Las versiones no coinciden en quién avisa. En algunas regiones, y sobre todo en Sokorhpa, son las propias montañas Shkhimo y Tʉtarhi, pensadas como personas, las que instruyen. En otras avisa un tuwancha, uno de los especialistas yukpa que saben tratar con lo que no es humano. En otras es el creador deificado. La página narra la primera y no las funde.

Tampoco coinciden en la causa, y el desacuerdo es de fondo. En muchas versiones sencillamente no se menciona ninguna. Ángel Acuña Delgado subraya en 1998 que la inundación yukpa, a diferencia de la bíblica, no se entiende como castigo divino. Las pocas versiones que sí dan una causa la atribuyen al quebrantamiento de la prohibición del incesto, según registran Ruddle y Wilbert y también Castillo, lo que enlaza el diluvio con el eclipse. Y hay versiones cristianizadas donde el reparto es moral: los buenos son llevados al cerro más alto y los que pelean o roban, al más bajo, donde se ahogan.

Cuál de las dos montañas es la más alta depende de dónde esté el territorio desde el que se cuenta: en unos relatos es Shkhimo, en otros Tʉtarhi.

La caracterización que publica el Ministerio de Cultura de Colombia ordena la historia yukpa en ocho etapas y coloca el diluvio en la cuarta; en la síntesis que recoge de Jaramillo no son los armadillos quienes resuelven, sino el pájaro carpintero, el tapir, el caimán, el cangrejo y la tortuga, que levantan muros para que las inundaciones no acaben con la gente. Es otra versión, y se registra como tal.

El incendio y la sequía que siguen a la inundación aparecen sólo en algunas narraciones. Se marcan como tales y no se convierten en parte obligatoria del ciclo.`,
    similitudes: `El paralelo más instructivo es también el más cercano, y es de contraste. Halbmayer y Goletz sitúan a los yukpa en el área istmo-colombiana y los comparan con sus vecinos de habla chibcha de la Sierra Nevada de Santa Marta, que sí se sienten responsables de sostener el equilibrio del mundo mediante rituales en los que se transfiere vitalidad a los padres originales para evitar su fin. Entre los yukpa no hay ese encargo ni hay un fin del mundo general: hay daños parciales y selectivos. El diluvio es el más grande de esos daños, no un apocalipsis.

El segundo paralelo documentado es el diluvio bíblico, y Acuña Delgado lo trae precisamente para separarlos: la inundación yukpa no funciona como sanción de una divinidad ofendida. Que dos relatos tengan agua, montaña y sobrevivientes no los vuelve la misma historia, y la versión cristianizada que reparte buenos y malos entre dos cerros se reconoce como préstamo tardío, no como núcleo.

Dentro de la propia tradición yukpa, el diluvio se enlaza con el eclipse: las pocas versiones que le atribuyen una causa la ponen en la transgresión de la prohibición del incesto, la misma que se invoca cuando el mundo se apaga. Los dos episodios describen lo mismo desde ángulos distintos, la disolución de diferencias que costó trabajo establecer, y por eso se leen juntos sin confundirse.`,
    leccion:
      "Un mundo dañado no vuelve a empezar de cero: se rehace encima de lo que quedó.",
    sceneHorizontal:
      "lluvias densas cubren los valles mientras dos cumbres verdes del Perijá emergen sobre un mar de capas azules y pequeños grupos permanecen protegidos en lo alto",
    sceneVertical:
      "varios armadillos excavan canales curvos por los que el agua desciende y reaparecen parcelas, senderos y árboles después de la tormenta",
    researchNotes:
      "CORRECCIÓN DE FICCIÓN HEREDADA: retira piedra, pareja encerrada, venado y animales empujando; restituye el diluvio comparado por Halbmayer y Goletz.",
    seoTitle: "El diluvio Yukpa y el Perijá",
    seoDescription:
      "Versiones Yukpa del gran diluvio: lluvia y oscuridad, refugio en las montañas del Perijá y armadillos que ayudan a retirar el agua.",
    focusKeywords: [
      "diluvio Yukpa",
      "montañas del Perijá",
      "Shkhimo y Tütarhi",
      "armadillos del diluvio",
      "mito Yukpa del agua",
    ],
  }),
  defineYukpaMyth({
    slug: "aponto-y-el-arbol-manurhacha",
    title: "Aponto y el árbol Manurhacha",
    excerpt:
      "Un pájaro carpintero descubre personas dentro de Manurhacha; Aponto las libera y transforma su rigidez en movimiento y habla.",
    tags: ["creación", "árbol", "origen humano", "transformación"],
    mito: `Aponto recorrió un mundo en el que humanos y animales todavía no estaban separados como ahora. Una versión cuenta que transformó en animales a muchos seres que encontraba. Quedaba por aparecer la gente capaz de hablar, caminar y reconocerse.

Sakurharhsh, el pájaro carpintero, llegó hasta Manurhacha. Al golpear el tronco vio que del árbol salía sangre. Aquel signo indicaba que la madera no estaba vacía. Dentro había tres personas Yukpa, encerradas en una forma que todavía no podía moverse libremente.

El pájaro llevó la noticia a Aponto. Juntos abrieron el árbol y sacaron a quienes estaban allí. Sus cuerpos eran rígidos. No tenían articulaciones y permanecían mudos, como figuras enteras de madera que no podían doblar brazos ni piernas.

Aponto trabajó sobre ellos. Formó las uniones de sus miembros para que pudieran sentarse, levantarse y caminar. Una versión del plan de vida cuenta que rompió o marcó la madera en partes para crear articulaciones. Después los tocó o hizo cosquillas. La risa abrió movimiento y vida.

La exposición etnográfica resume el cambio de otra manera: Aponto dio movilidad y habla a las personas liberadas de Manurhacha. Las dos versiones coinciden en que la humanidad no surge como una obra terminada. Aparece mediante transformaciones sucesivas: descubrimiento, apertura, articulación, movimiento y palabra.

El pájaro carpintero cumple una función decisiva. No fabrica a las personas, pero reconoce la señal del árbol y permite que su existencia sea conocida. Aponto tampoco crea desde la nada. Trabaja con seres y materiales que ya están en el mundo y hace posible una diferencia nueva.

Cuando las primeras personas pudieron moverse y comunicarse, dejaron de ser presencias inmóviles dentro del tronco. El mundo también cambió con ellas, porque hablar y desplazarse abrían relaciones, descendencia y territorio.

Esta ficha reúne únicamente las escenas públicas que las fuentes permiten relacionar. No decide si Manurhacha y las figuras de madera son dos momentos obligatorios de una misma narración larga. Presenta sus coincidencias y su diferencia: en una, Sakurharhsh descubre a las personas en el árbol sangrante; en otra, Aponto fabrica y articula cuerpos de madera. Ambas comprenden el origen humano como trabajo de transformación.`,
    historyCore:
      "NUEVA FICHA CENTRAL: incorpora un ciclo de origen humano ausente del sitio y distingue la adaptación de la exposición, el análisis comparativo y la versión recogida en el plan de vida.",
    versionCore:
      "La exposición nombra Manurhacha, Sakurharhsh y tres personas rígidas y mudas. El plan de vida enfatiza madera, articulaciones, cosquillas y risa. Se comparan sin redactar una falsa transcripción completa.",
    similarityCore:
      "La aparición de personas desde árboles o madera tiene paralelos en Colombia y otras regiones, pero esta versión se identifica por Aponto, el árbol Manurhacha, la sangre que descubre Sakurharhsh y el paso de rigidez a movimiento y habla. Su lógica transformacional también aparece en ciclos Yukpa donde seres humanos y animales cambian de condición. No es equivalente al Árbol de la Abundancia Huitoto ni a los árboles amazónicos que contienen agua o frutos: aquí el tronco guarda o proporciona cuerpos humanos y el pájaro carpintero actúa como descubridor.",
    leccion:
      "La vida humana aparece como relación y transformación: descubrir, articular, reír y hablar hacen posible un mundo compartido.",
    sceneHorizontal:
      "Sakurharhsh, un pájaro carpintero estilizado, golpea Manurhacha y tres siluetas humanas aparecen como formas internas entre vetas rojas no gráficas, mientras Aponto se acerca",
    sceneVertical:
      "tres figuras de madera inicialmente rígidas doblan brazos y piernas y abren gestos de risa, rodeadas por curvas de voz y hojas del árbol",
    researchNotes:
      "NUEVA FICHA: conserva dos versiones relacionadas sin convertirlas en una transcripción única y evita anatomía gráfica o iconografía ceremonial inventada.",
    seoTitle: "Aponto y Manurhacha | Origen Yukpa",
    seoDescription:
      "Relato Yukpa sobre Aponto, el árbol Manurhacha y el pájaro carpintero que descubre a las primeras personas rígidas y sin habla.",
    focusKeywords: [
      "Aponto Yukpa",
      "árbol Manurhacha",
      "origen humano Yukpa",
      "Sakurharhsh",
      "mitología Yukpa de creación",
    ],
  }),
  defineYukpaMyth({
    slug: "los-gemelos-yirhwach-y-las-constelaciones",
    title: "Los gemelos Yirhwach y las constelaciones",
    excerpt:
      "Dos gemelos nacidos de huevos descubren a los jaguares responsables de su origen y ascienden con sus aliados al cielo lluvioso.",
    tags: ["estrellas", "jaguar", "lluvia", "transformación"],
    mito: `Una mujer embarazada fue asesinada por jaguares. De aquello que quedó surgieron dos huevos. Note, una abuela sapo, los encontró y decidió protegerlos. Guardó los huevos hasta que nacieron dos gemelos: los Yirhwach.

Note crió a los hermanos con ayuda de Motorsh. Durante su infancia, los gemelos crecieron sin conocer por completo lo ocurrido a su madre. Cazaban, aprendían y preguntaban. Poco a poco encontraron señales que revelaban que los jaguares no eran solo animales del monte, sino responsables de la pérdida que había marcado su nacimiento.

Cuando supieron la verdad, los Yirhwach prepararon su respuesta. El ciclo narrado en la exposición incluye enfrentamientos y transformaciones que la versión breve no desarrolla como una transcripción total. Los hermanos lograron vencer a los jaguares culpables y romper el poder que estos ejercían sobre su historia.

Después debían atravesar un paso difícil. Sakucha hizo posible el cruce al extenderse como puente. Los gemelos avanzaron junto con quienes los habían acompañado. Ese trayecto no los devolvió simplemente a la vida anterior: abrió el camino hacia el cielo.

Los Yirhwach ascendieron y quedaron visibles como figuras celestes. La comparación etnográfica relaciona a los gemelos con Taurus; Motorsh, con Aldebarán; y Sakucha, con Orión. Los nombres astronómicos sirven para que lectores externos ubiquen conjuntos de estrellas, no para sustituir las categorías Yukpa.

Desde arriba, los personajes mantienen una relación con el ciclo de lluvias. Su aparición y movimiento acompañan cambios estacionales importantes para las personas, los cultivos y el territorio. El cielo nocturno no funciona como un mapa separado de la vida terrestre: conserva parentesco, pérdida, alianza y agua.

Note ocupa el comienzo del relato porque reconoce vida donde otros habrían visto restos. Motorsh y Sakucha también son indispensables: uno participa en la crianza y el otro ofrece el paso. La ascensión no es logro de dos héroes aislados.

La ficha adapta la secuencia pública disponible: huevos, crianza, descubrimiento, confrontación, puente y cielo. No rellena los tramos que una narración oral extensa desarrollaría con mayor detalle. Su cierre conserva la transformación principal: quienes resolvieron un conflicto en la tierra se vuelven constelaciones capaces de anunciar lluvia y recordar relaciones cada noche.`,
    historyCore:
      "NUEVA FICHA CENTRAL: adapta la ventana bilingüe publicada por Halbmayer y Goletz, reconoce que condensa una narración oral extensa y evita completar por imaginación los combates abreviados.",
    versionCore:
      "Los nombres y equivalencias estelares proceden de una exposición comparativa. Taurus, Aldebarán y Orión son referencias para lectores externos; no reemplazan las categorías celestes ni las variaciones Iroka, Irapa y Sokorpa.",
    similarityCore:
      "Gemelos que enfrentan jaguares y ascienden al cielo aparecen en varios complejos sudamericanos. La versión Yukpa se distingue por Note, los dos huevos, Motorsh, el puente de Sakucha y la relación específica con conjuntos que la publicación compara con Taurus, Aldebarán y Orión. Dentro del universo Yukpa dialoga con el nacimiento de la noche y con las estaciones, pero no es otra versión de los dos Soles. La presencia de aliados impide reducirlo a una aventura de venganza: crianza, puente, constelaciones y lluvia organizan el ciclo completo.",
    leccion:
      "La memoria de una pérdida se transforma cuando crianza, alianza y camino compartido abren una nueva relación con el mundo.",
    sceneHorizontal:
      "Note, representada como un pequeño sapo protector, observa dos huevos luminosos entre hojas mientras Motorsh vigila y sombras de jaguar quedan lejos en el bosque",
    sceneVertical:
      "dos figuras gemelas ascienden por un puente curvo formado por Sakucha hacia grupos de estrellas, mientras líneas de lluvia caen sobre las montañas del Perijá",
    researchNotes:
      "NUEVA FICHA: adaptación acotada de una exposición bilingüe; declara la condensación, evita violencia gráfica y no convierte equivalencias occidentales en nombres Yukpa.",
    seoTitle: "Gemelos Yirhwach y constelaciones Yukpa",
    seoDescription:
      "Ciclo Yukpa de los gemelos Yirhwach: Note los cría, enfrentan jaguares, cruzan con Sakucha y ascienden como constelaciones de lluvia.",
    focusKeywords: [
      "gemelos Yirhwach",
      "constelaciones Yukpa",
      "Note y Motorsh",
      "Sakucha",
      "mito Yukpa de la lluvia",
    ],
  }),
  defineYukpaMyth({
    slug: "me-el-dueno-del-maiz",
    title: "Mé, el dueño del maíz",
    excerpt:
      "La ardilla lleva maíz al hijo de Mé; Atántocha reconoce el alimento y comienza un intercambio que termina en siembra y fiesta.",
    tags: ["maíz", "agricultura", "alimentos", "semillas"],
    mito: `Mé vivía apartado y era dueño del maíz cariaco. Su hijo Mésh necesitaba alimento. Una ardilla llevaba hasta él lo que su padre enviaba, atravesando el monte con una carga que las demás personas todavía no reconocían.

Un grupo de cazadores Yukpa encontró rastros de aquel alimento. Al verlo, algunos lo rechazaron porque no sabían qué era ni de dónde venía. Atántocha prestó atención. Comprendió que la ardilla no transportaba una cosa inútil y siguió la señal hasta acercarse al lugar de Mé.

El encuentro no produjo una entrega inmediata. Mé observó la conducta de quienes llegaban y la manera en que trataban a Mésh. El maíz no aparece como objeto abandonado que cualquiera toma: pasa mediante reconocimiento, cuidado y relación entre personas.

Atántocha probó el alimento y confirmó que podía sostener la vida. Regresó con la noticia. Quienes antes lo habían despreciado quisieron conocerlo, pero debieron reconocer su error y aprender cómo recibirlo. Mé permitió entonces que el maíz llegara a la comunidad.

La distribución era solo el comienzo. Las semillas debían seleccionarse y sembrarse. Mé explicó que no se podía consumir todo: los mejores granos debían guardarse para una nueva siembra. De esa previsión dependía que el alimento no desapareciera después de una sola cosecha.

Las familias aprendieron a cultivar, preparar y compartir el maíz. El libro comunitario relaciona el don con chicha, bollos y otras comidas, y también con baile. La cosecha reunía trabajo y celebración; recibir una planta significaba aprender una responsabilidad que continuaba año tras año.

Mé indicó que cada cosecha debía recordarse con fiesta y que la semilla debía volver a la tierra. Después se retiró. No quedó como propietario que impide cultivar, sino como figura cuyo conocimiento acompaña el cuidado del maíz.

La historia fue publicada en yukpa y español dentro de Territorios Narrados. Sus mayores autorizaron que se escribiera para que niñas, niños y nuevas generaciones pudieran leerla. Esta adaptación conserva los personajes y la secuencia del libro sin hablar en nombre de todas las comunidades Yukpa.

El cierre no separa mito y práctica. La ardilla, Mésh, Atántocha, la semilla elegida y la fiesta muestran que un alimento llega por relaciones. El maíz continúa cuando alguien reconoce su valor, comparte la cosecha y reserva futuro dentro de ella.`,
    historyCore:
      "NUEVA FICHA COMUNITARIA: prioriza el libro bilingüe de Territorios Narrados, producido con comunidades Yukpa y autorización de mayores, y usa materiales lingüísticos e institucionales solo como controles.",
    versionCore:
      "El libro extenso conserva a Mé, Mésh, la ardilla, Atántocha, el rechazo inicial, la distribución y la fiesta. La lectura pedagógica breve resume el ciclo. La ficha sigue la primera y no añade otros dueños de cultivos.",
    similarityCore:
      "Relatos sobre dueños de semillas y animales que revelan alimentos son frecuentes en América, pero esta historia se distingue por Mé, su hijo Mésh, la ardilla mensajera, el cazador Atántocha y el maíz cariaco. Dentro de la mitología Yukpa pertenece al complejo de plantas cultivadas identificado por Halbmayer. No se fusiona con Moniya Amena, el Árbol de la Abundancia Huitoto-Muinane, ni con relatos donde el maíz nace del cuerpo de una figura. Aquí el eje es reconocer, recibir, guardar semilla, volver a sembrar y celebrar la cosecha.",
    leccion:
      "Compartir una cosecha también significa reservar su mejor semilla y sostener la relación que hará posible la siguiente.",
    sceneHorizontal:
      "una ardilla atraviesa el monte llevando mazorcas de maíz cariaco hacia Mésh, mientras Atántocha reconoce el rastro y Mé observa desde una parcela",
    sceneVertical:
      "manos adultas seleccionan los mejores granos sobre una espiral gráfica que une siembra, mazorcas, alimentos y una ronda festiva sin vestuario ceremonial",
    researchNotes:
      "NUEVA FICHA DE FUENTE COMUNITARIA: sigue el libro bilingüe autorizado, distingue la versión pedagógica resumida y evita generalizar prácticas a todos los subgrupos.",
    seoTitle: "Mé, el dueño del maíz | Mito Yukpa",
    seoDescription:
      "Historia Yukpa bilingüe de Mé, Mésh, la ardilla y Atántocha sobre la llegada del maíz cariaco, la siembra, la semilla y la fiesta.",
    focusKeywords: [
      "Mé dueño del maíz",
      "maíz cariaco Yukpa",
      "Mésh y la ardilla",
      "Atántocha",
      "mito Yukpa del maíz",
    ],
  }),
];

export default records;
