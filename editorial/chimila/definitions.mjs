function myth({
  title,
  summary,
  tags,
  sourceMode = "corpus",
  ...definition
}) {
  const seoTitle = `${title} | Ette Ennaka`;
  const focusKeywords = [
    title,
    "mitos Ette Ennaka",
    ...tags.slice(0, 3),
  ];
  return {
    ...definition,
    title,
    summary,
    tags,
    sourceMode,
    excerpt: summary,
    seoTitle,
    seoDescription: summary,
    focusKeywords,
  };
}

export const chimilaDefinitions = [
  myth({
    slug: "creacion-chimila",
    sourceKeys: [
      "reichel1945",
      "rocha2010",
      "mincultura2024",
      "buitRago2020",
      "onic2023",
      "nino2008",
      "uninorte2023",
      "vargasBajo2025",
      "vargastejido2014",
      "reichelDolmatoffEtnografia1946",
      "vargasdivision2020",
      "vargastravesia2013",
    ],
    title: "La creación de la tierra y los Paretare",
    summary:
      "Papá Grande forma la tierra con greda, crea al tigre y envía a la primera pareja Ette cerca de San Ángel, donde el pueblo era llamado Paretare.",
    tags: ["creación", "Papá Grande", "tigre", "Paretare"],
    mito: `Papá Grande tomó un pedazo de greda y lo amasó como se amasa la greda cuando se va a moldear loza. Le dio forma con las manos, lo miró y lo encontró muy pequeño. Entonces tomó otro pedazo, se lo añadió al primero y siguió añadiendo: un pedazo, y otro pedazo, y otro más, hasta que tuvo un pedazo grande. Así hizo la tierra.

Sobre esa tierra no había nada todavía. No había árboles. No había maíz. No había yuca. El suelo estaba hecho, pero encima no crecía nada y no andaba nadie. Papá Grande vio que no había nada en la tierra y entonces hizo un tigre grande y lo soltó. Así hizo al tigre, y todavía hay tigre de ese mismo.

Después Papá Grande hizo a los hombres, y todos eran Aruacos, Guajiros y Motilones. Así hubo muchos hombres en la tierra. Pero Papá Grande vio que los hombres no podían vivir sólo de guerra y de palabras, y por eso hizo una mujer para cada uno: hizo mujeres aruacas, mujeres guajiras, mujeres motilonas. Así hubo muchos indios en la tierra.

Mucho más tarde, mucho después de todos los otros, Papá Grande hizo al primer Ette y a su mujer, y les dio nombre. Al hombre lo llamó Huhun Krukroring Merana. A la mujer la llamó Soving Kranyaring Ovokeya.

Entonces Papá Grande le dijo al hombre: «¡Vete a la tierra!». El hombre miraba la tierra desde el cielo, y como no le gustó nada, no quiso bajarse. Se quedó arriba, mirando. Entonces Papá Grande lo empujó, y el hombre cayó. Cayó por allá, cerca de San Ángel.

Pronto hubo muchos Ette en la tierra. Se multiplicaron en ese lugar donde había caído el primero. En aquel tiempo no llevaban todavía el nombre de Chimila, que es el de hoy: se llamaban Paretare.

Así fue como Papá Grande hizo la tierra y los indios.`,
    historia: `Este es el primer relato del corpus chimila que Gerardo Reichel-Dolmatoff publicó en 1945 en el Boletín de Arqueología, y el que fija el marco de los veinte que vienen detrás: Papá Grande, la greda, el tigre, una primera pareja con nombre propio, la caída cerca de San Ángel y un nombre antiguo, Paretare. Ninguno de esos cinco elementos reaparece, hasta donde puede comprobarse, fuera de esa publicación y de las que la reproducen.

Las condiciones en que fue dicho importan. Lo narró el cacique Tangrutaya Mutsu, anciano de unos setenta años, a quien el recopilador presenta como el último buen narrador que quedaba en el grupo. Hablaba de noche, recostado en su hamaca, en voz baja y despacio, en un castellano que a veces se volvía confuso. Insistía en contar sólo ante hombres e interrumpía el relato cada vez que una mujer entraba a la casa, y estos cuentos no se referían nunca a los niños. El origen del mundo llega, por tanto, en una sola voz, en una lengua que no era la del narrador y bajo una restricción de auditorio.

Reichel-Dolmatoff acompañó el texto con notas propias. Sostuvo que los mitos de creación son relativamente escasos porque el universo suele imaginarse ya existente; alineó la materia prima del hombre con casos de barro entre los chocó y los miránya de Colombia, y de madera entre los muzo, los bakaïrí del Xingú y los kiché de Guatemala; y marcó como de sumo interés tres cosas de este cuento: el nombre del primer Ette, el nombre antiguo del pueblo y la idea del tigre legendario como primer animal del mundo. Son lecturas suyas, fechadas en 1945.

El volumen hermano, la Etnografía chimila de 1946, no vuelve sobre la creación, pero sitúa al grupo en El Difícil, La Peña, San Ángel y Monterrubio, es decir en la región donde cae el primer hombre, y recoge la creencia de que los shamanes llevan una doble vida convirtiéndose en tigres y de que después de muertos se manifiestan en forma de esos animales.

Miguel Rocha Vivas reeditó el conjunto en 2010 dentro de una antología del Ministerio de Cultura: misma cadena documental, no un segundo testimonio. Y conviene saber cuán corta es esa cadena. Juan Camilo Niño Vargas contó en 2013 que sólo existían tres trabajos publicados sobre mitología ette: los veintiún relatos de 1945, sus propias veinticuatro narraciones reunidas bajo quince títulos, y una compilación del propio pueblo ette de 2013 que, advierte, reabsorbió cuentos recogidos por Reichel-Dolmatoff y retransmitidos después en la escuela por misioneros. Una coincidencia posterior con este texto puede ser, entonces, un eco suyo y no una confirmación.

Lo que ninguna de las fuentes consultadas ofrece: el relato en ette taara, un registro independiente de los dos nombres propios, o cualquier mención del nombre Paretare fuera de esta publicación.`,
    versiones: `El recopilador dejó escrito, sobre este mismo cuento, que en la idea del barro como materia prima tal vez podía advertirse una «influencia cristiana», y que la creencia en un hombre hecho de madera le parecía más antigua. Es su interpretación de 1945, no una palabra del narrador, y conviene leerla como lo que es: una hipótesis difusionista de su época. Además no se ajusta del todo al texto, porque aquí la greda no hace cuerpos humanos, hace el suelo.

Dentro del propio corpus hay un cruce que el mismo recopilador señaló: el nombre del primer Ette coincide con el del brujo legendario del cuento del fuego, donde un brujo llamado Huhum se convierte en el sapo Mamu, cruza el Gran Río y trae una braza en la boca. Para él eso indicaba un héroe cultural del pueblo. El relato de la creación, por su parte, no menciona ni fuego ni sapos.

La versión que se cuenta hoy es otra y no debe fundirse con esta. En 2024, César Rozo narró para el Ministerio de las Culturas que Yaau bajó del cielo con Numirinta a la sabana de San Ángel, que Yaau miró hacia el oriente por donde sale el sol y Numirinta hacia el occidente por donde se oculta, y que con dos mazorcas de maíz cariaco hicieron a los Ette Ennaka. Juan Camilo Niño Vargas sitúa ese relato dentro de un patrón regional: entre varios pueblos chibchas los dioses modelaron la tierra como si fuera un cultivo, y los ette provienen del maíz que sembró Yaau, después de la aparición y la desaparición de humanidades anteriores.

Los dos relatos comparten dos cosas: el descenso desde el cielo y el lugar, San Ángel. Se separan en la materia, greda para la tierra frente a maíz para la gente, y sobre todo en la identidad. En el corpus de 1945 los primeros se llamaban Paretare y son los antepasados directos de quien narra. En la etnografía de Niño Vargas los ette de hoy se llaman ette takke, «gente nueva», y rechazan abiertamente descender de los pueblos que habitaron antes el área.

Fuera de eso no hay variantes documentadas de este cuento. Hay un solo testimonio, el de 1945, y todas las publicaciones posteriores que lo traen lo reproducen. Eso quiere decir que no hay manera de saber qué partes eran fijas y cuáles dependían de esa noche, de ese auditorio y de ese castellano.

Esta revisión corrige además dos cosas del texto heredado. Sacó del relato el aparato crítico que lo interrumpía y trasladó aquí lo que era comentario. Y retira la afirmación de que el nombre Merana aparece también como Merama: esa grafía no se encontró en ninguna de las fuentes consultadas.`,
    similitudes: `El paralelo más cercano está dentro del mismo corpus. En «Cómo los Chimila consiguieron el fuego», el brujo Huhum se convierte en el sapo Mamu para cruzar el Gran Río, se traga una braza y la escupe al otro lado, y desde entonces los sapos son gente y no se matan. El primer hombre de la creación lleva ese mismo nombre. La diferencia es de posición: en la creación el nombre está en el origen del pueblo y su portador no hace nada salvo resistirse a bajar, mientras que en el cuento del fuego actúa, consigue algo y paga quedándose sapo para siempre.

El recopilador puso el relato al lado de otros dos grupos. Entre los chocó y los miránya de Colombia registró la idea del barro como materia del hombre; entre los muzo de Colombia, los bakaïrí del Xingú y los kiché de Guatemala, la del hombre hecho de madera, que es la humanidad fallida del Popol Vuh; y entre los taulipáng, la de un hombre primero de cera y después de barro. La diferencia con todos ellos es la misma: aquí la greda no hace cuerpos, hace el suelo, y la gente viene después.

Un tercer paralelo viene del área chibcha. Entre los bribrí y los cabécar de Talamanca la gente proviene del maíz que sembró Sibo, entre los u'wa de calabazos al cuidado de Sira y entre los barí de piñas cortadas por Sabaseba; los ette, en la etnografía contemporánea, del maíz que sembró Yaau. En todos esos casos el pueblo brota de una planta puesta en tierra por un dios agricultor. En el relato de 1945 no brota de nada: el primer Ette es hecho aparte, recibe nombre propio y llega al mundo de un empujón.`,
    leccion:
      "Un mundo puede empezar por acumulación, pedazo sobre pedazo, y aun así no gustarle a quien debe habitarlo.",
    sceneHorizontal:
      "Papá Grande modela con greda una tierra creciente mientras un tigre aparece como primer animal y la primera pareja observa desde el cielo",
    sceneVertical:
      "la primera pareja Paretare desciende cerca de San Ángel entre sabanas, bosque y una pequeña corriente de agua",
    researchNotes:
      "CORRECCIÓN: se retira el vacío cósmico, el tono épico y la psicología inventada. NOMBRES: se conservan las grafías documentadas con nota de variación.",
  }),
  myth({
    slug: "sol-y-luna",
    sourceKeys: [
      "reichel1945",
      "rocha2010",
      "mincultura2024",
      "onic2023",
      "nino2008",
      {
        key: "vargastravesia2013",
        summary:
          "Documenta que hoy los ette dan nombre masculino al Sol y femenino a la Luna, y advierte expresamente que esos sexos están invertidos respecto a los mitos recogidos a mediados del siglo XX, donde el Sol figura como mujer y la Luna como varón.",
        limitation:
          "Analiza otro relato y no explica las hermanas solares, la duración de los días ni la enfermedad del Sol.",
      },
      {
        key: "vargastejido2014",
        summary:
          "Registra que el sol ette surge de las estribaciones surorientales de la Sierra Nevada y se oculta en las llanuras occidentales, y que los únicos puntos cardinales reconocidos son el levante y el poniente: un marco preciso para los cambios del punto de salida en el cuento.",
        limitation:
          "Describe el recorrido solar actual como dato etnográfico, sin referirse a la sucesión de soles ni al parentesco entre los astros.",
      },
      {
        key: "vargasBajo2025",
        summary:
          "Explica que en la mitología chibcha, los ette incluidos, la salida del sol marca el fin de los procesos de creación y humanización: el amanecer cierra el tiempo del origen y abre el mundo humano.",
        limitation:
          "Es un planteamiento comparativo del área: no describe al Sol enfermo, las hermanas anteriores ni la Luna como hermano mayor.",
      },
      "mauriOfrendas2020",
    ],
    title: "Sol y Luna",
    summary:
      "Luna es el hermano mayor y la actual Sol es la tercera hermana: dos soles anteriores marcaron días larguísimos antes del orden celeste presente.",
    tags: ["Sol", "Luna", "ciclos", "cielo"],
    mito: `Sol y Luna son hermanos. Luna es el hermano y es mucho más viejo. Sol es la hermana y es mucho más joven: hace poco que nació. Y no es la primera. Es ya la tercera hermana.

Antes de ella hubo otros dos soles. Los dos sirvieron mientras estuvieron nuevos y ya no sirvieron cuando estuvieron viejos. Se acabó su familia y entonces se murieron. De esos dos no queda nada en el cielo: cada uno tuvo su tiempo y cada uno se acabó.

El primer Sol salía por allá, por donde ahora se acaba el día. Mientras ese Sol anduvo por el cielo, los días duraban cuatro años. Todo ese tiempo había día. Así los indios podían trabajar todo el tiempo con día.

Más tarde, Papá Grande hizo salir al segundo Sol por otra parte: por allá, detrás de la Sierra Nevada. Con ese Sol los días ya no duraban cuatro años sino uno. Por fin ese Sol también cambió, y desde entonces el sol sale por donde lo vemos salir hoy.

Tres veces, entonces, ha salido el sol por lugares distintos. Salió por donde ahora se acaba el día. Salió detrás de la Sierra Nevada. Sale ahora por donde lo vemos. Y cada vez que cambió el lugar de la salida cambió también lo que duraba un día: primero cuatro años, después un año.

Allá por el norte el Sol no sirve. No sirve porque por allá se acaba la tierra. Por el sur es distinto: por el sur hay tierra y tierra, y mucho monte, y mucho indio.

De noche el Sol no anda por el cielo. De noche el Sol duerme, porque es mujer. Y a veces está enferma y no quiere salir. No sale, y entonces no llega el día. Mientras la hermana no sale, los indios tienen mucho miedo.

Así dijeron y así es.`,
    historia: `Es el segundo relato del corpus y ocupa la página 5 de la publicación de Gerardo Reichel-Dolmatoff de 1945. Esa página tiene una importancia que ningún otro texto del conjunto tiene: es la referencia exacta que la antropología posterior cita cuando necesita decir cómo eran el Sol y la Luna ette a mediados del siglo XX.

Lo narró el cacique Tangrutaya Mutsu, y lo narró de noche, recostado en su hamaca, despacio y en voz baja, en un castellano que a veces se enredaba. El dato no es decorativo tratándose de un cuento cuyo asunto es una hermana que duerme mientras dura la noche y una gente que se asusta cuando no amanece. El recopilador añade que el anciano exigía contar sólo ante hombres y que interrumpía cada vez que una mujer entraba a la casa: el único testimonio conservado sobre el sexo de los astros se dijo, además, bajo esa condición de auditorio.

Reichel-Dolmatoff lo encontró a primera vista confuso y enigmático, y resolvió la extrañeza por comparación. Puso al lado un cuento matako sobre una noche que duró tres semanas, propuso que «cuatro años» y «tres semanas» significan en ambos casos simplemente mucho tiempo, sumó testimonios okaina, kariri y mundurukú, y llegó a preguntarse si la tradición no sería la memoria antiquísima del paso de los indios por el Estrecho de Behring. Sobre el final del texto sugirió que el Sol enfermo aludía probablemente a un eclipse. Todo eso es suyo, no del narrador, y ninguna de esas hipótesis se apoya en otra cosa que en el parecido.

La etnografía posterior no reedita este cuento, pero sí describe el cielo del que habla. Juan Camilo Niño Vargas documentó que el sol ette surge de las estribaciones surorientales de la Sierra Nevada y se esconde en las llanuras occidentales, y que los únicos puntos cardinales reconocidos son el levante y el poniente. También registró la explicación actual de la noche: en el extremo oriental del universo hay una gran puerta por donde el astro empieza su marcha hacia el occidente, y al terminarla pasa por un pasaje a la Tierra de Arriba, donde la reanuda en sentido inverso, de modo que el día de una tierra es la noche de la otra. En un trabajo comparativo de 2025 añade que, en la mitología chibcha, la salida del sol es lo que marca el fin de los procesos de creación y humanización. Mònica Martínez Mauri y Ernst Halbmayer, por su parte, ligan ese cielo al calendario agrícola: cuando las estrellas aparecen por oriente a mediados de junio, los ette celebran la llegada de las mazorcas verdes.

Ninguna de esas fuentes menciona las tres hermanas solares, el día de cuatro años, la muerte de los soles viejos ni la Sol enferma. De todo eso hay un solo registro.`,
    versiones: `El dato que más cambia la lectura de este relato es una inversión documentada. Juan Camilo Niño Vargas registró en 2013 que los ette actuales le dan al Sol un nombre masculino, Peenatitoro, construido sobre peenari, el término con que se designa a los ancianos varones y en particular al abuelo, y que lo describen como un hombre extranjero, de tez blanca, montado a caballo y con un enorme espejo atado al cuello con el que alumbra la tierra; su hermana es Luna, Maamasu, una mujer indígena que se desplaza en burro. Y advierte de manera expresa que los sexos que los ette de hoy les asignan a los astros están invertidos respecto a los mitos recogidos a mediados del siglo XX, en los que el Sol figura como mujer y la Luna como varón. La referencia que da para esa comparación es la página 5 de la publicación de 1945, es decir, exactamente este texto. La inversión no es una impresión general: está medida contra este relato.

Hay que precisar qué se invierte y qué no. El parentesco se conserva, porque en ambos casos Sol y Luna son hermanos. Lo que cambia es quién es la mujer. Y eso arrastra una consecuencia, porque en 1945 el sexo de Sol es la causa de la noche: duerme porque es mujer. Esa explicación no tiene equivalente en la versión contemporánea, donde la noche se explica por el recorrido del astro a través de la puerta oriental y de la Tierra de Arriba.

Hay además un desajuste que conviene no disimular. El relato pone la salida del segundo Sol detrás de la Sierra Nevada y dice que el Sol actual, en cambio, sale por otra parte. La etnografía de 2014 del mismo autor sitúa la salida del sol ette justamente en las estribaciones surorientales de la Sierra Nevada. Dicho de otro modo: el punto que el texto de 1945 le asigna a un Sol anterior es el que hoy se describe como el del Sol de ahora. Ninguna fuente consultada explica esa diferencia, y esta página no la resuelve.

Del lado de las versiones contemporáneas difundidas por entidades públicas, el único dato astral que aparece es de orientación y no de sexo: en el relato de creación que César Rozo narró en 2024, Yaau mira hacia el oriente por donde sale el sol y Numirinta hacia el occidente por donde se oculta. No hay allí soles sucesivos.

Fuera de esto no hay más versiones documentadas de este cuento. Hay una sola, de 1945, y lo que se publicó después la reproduce. Tener un único testimonio significa que no puede saberse si las tres hermanas eran una fórmula estable o el modo de contar de aquella noche.

Esta revisión, por último, saca del relato el comentario que lo interrumpía y sustituye por esto la sección genérica que la ficha compartía con el resto del corpus.`,
    similitudes: `El primero en buscarle parientes a este cuento fue el propio recopilador, y el que puso más cerca es matako, del Chaco: allí la noche duró tres semanas, nadie pudo ver, la gente comió cueros, siguió cuerdas para llegar al río y murió mucha por las tempestades y el granizo. La simetría es clara, pero la diferencia también: entre los matako la duración anormal es una catástrofe, mientras que aquí el día de cuatro años es una comodidad, porque permite trabajar todo el tiempo con día.

El segundo paralelo es okaina, de Colombia, y dice que el sol que nos alumbra no es el primer sol y que el primero era el hermano del actual. Es la misma idea de un sol reemplazado, pero repartida de otro modo: entre los ette la sucesión es de tres hermanas y el hermano es Luna, que no se reemplaza nunca.

El tercero es mundurukú: en el principio no hubo noche, el día era continuo y la noche dormía en el fondo de las aguas. Allí falta la noche y hay que traerla de abajo; aquí la noche existe desde siempre y lo que cambia, de un sol a otro, es cuánto dura el día.

El cuarto está dentro del mismo corpus y lo contó el mismo hombre. En «El diluvio», cuando empieza a llover, el Sol y la Luna se ahogan. Es el único otro lugar donde los dos hermanos aparecen, y allí mueren los dos juntos, sin que se diga cuál de las hermanas solares era ni cómo llegó después la que alumbra ahora. Los dos relatos hablan de un cielo que puede acabarse, pero no encajan uno con otro: este cuenta relevos y aquel cuenta un ahogo.`,
    leccion:
      "Los astros que hoy ordenan el día pueden ser los terceros en hacerlo, y no los últimos.",
    sceneHorizontal:
      "una Sol femenina y una Luna masculina ocupan lados opuestos del cielo, con dos discos solares anteriores desvaneciéndose tras la Sierra Nevada",
    sceneVertical:
      "la tercera hermana Sol despierta sobre las sabanas mientras la Luna mayor se retira y tres franjas muestran los antiguos días prolongados",
    researchNotes:
      "CORRECCIÓN: se elimina la danza cósmica, el ciclo heroico y la simbología añadida. GÉNERO: Sol es hermana; Luna, hermano.",
  }),
  myth({
    slug: "el-poblamiento",
    sourceKeys: [
      "reichel1945",
      "rocha2010",
      "mincultura2024",
      "onic2023",
      "nino2008",
      {
        key: "reichelDolmatoffEtnografia1946",
        summary:
          "Describe el arco tallado en madera de palma y las tres formas de flecha, distinguiendo la vereda de la punta, y sitúa a la gente en El Difícil, La Peña, San Ángel y Monterrubio.",
        limitation:
          "Es descripción material: no recoge el mito ni identifica botánicamente la caña del relato.",
      },
      {
        key: "vargastejido2014",
        summary:
          "Sostiene que el territorio ette fue definido intencionalmente por el padre creador, que delimitó el espacio habitable con un acto deliberado, y que el mundo se ordena entre levante y poniente: el marco cosmológico del lanzamiento de las flechas.",
        limitation:
          "No menciona las tres flechas ni sus destinos: describe la delimitación del territorio en términos generales.",
      },
      {
        key: "vargastravesia2013",
        summary:
          "Registra que una misma palabra ette nombra a la vez las flechas, la palma gallinazo y el cinturón de Orión, un vínculo lingüístico entre el material de las flechas y el cielo.",
        limitation:
          "El dato aparece en una nota etimológica dentro del análisis de otro mito: no identifica la caña del relato ni comenta el poblamiento.",
      },
      "sinningResistencia2009",
    ],
    title: "Las tres flechas del poblamiento",
    summary:
      "Papá Grande usa el arco iris y tres flechas de caña maná para señalar San Ángel, el río Cesar y Cartagena como caminos del poblamiento Ette.",
    tags: ["poblamiento", "arco iris", "caña maná", "territorio"],
    mito: `Cuando los primeros Ette bajaron del cielo, no sabían a dónde ir. Bajaron todos y quedaron en la tierra sin camino. Habían llegado a una tierra que no conocían. Estaban abajo y no sabían para dónde coger ni dónde quedarse.

En esa tierra había mucha agua entonces. Agua por todas partes. Y había mucho monte, monte por todas partes. Pero ni el agua ni el monte servían: en el monte no había comida, y las aguas que había no eran buenas para beber.

Entonces Papá Grande tomó el Arco Iris. Ese fue su arco. Y cogió sus tres flechas, que eran todas de la misma caña, de la caña maná: de esa caña y no de otra. Con ese arco disparó las tres flechas sobre la tierra, una detrás de otra, para mostrarles a los Ette el camino por donde debían seguir. Tres flechas disparó, y tres caminos quedaron señalados.

La primera flecha cayó allá, en San Ángel. Allá se quedó una parte de la gente, y todavía hay mucho indio allá.

La segunda flecha cayó allá, en el río Cesar. Y para allá se fue una parte de los Ette, siguiendo la flecha.

La tercera flecha voló mucho más lejos que las otras dos. Cayó allá, lejos, donde está hoy el gran pueblo que llaman Cartagena. Y para allá se fueron los otros Ette.

Tres flechas cayeron y en tres lugares se quedó la gente. Así los Ette encontraron el camino que no tenían cuando bajaron. Siguieron las flechas y así quedaron en toda esta tierra, unos en un lugar y otros en otro.

Desde entonces la caña maná sirve para hacer flechas. Sirve porque es de la familia del Sol. Y por eso, cuando uno se chuza con la caña maná en el monte, de noche, puede ver al Sol.`,
    historia: `Es el tercer relato del corpus de 1945 y va pegado al primero: allí el primer hombre es empujado desde el cielo y cae cerca de San Ángel, y aquí los primeros bajan del cielo y la primera flecha cae en San Ángel. Ese topónimo aparece dos veces en las tres páginas iniciales del conjunto, lo que lo convierte en el punto fijo de la memoria territorial que el corpus conserva.

Como el resto, lo narró el cacique Tangrutaya Mutsu de noche, en su hamaca, en castellano y sólo ante hombres. Conviene tenerlo presente porque este es, de los cuatro primeros, el relato que más se parece a un saber práctico: nombra tres lugares reales, un material de flechas y un uso de ese material.

La nota que Reichel-Dolmatoff le dedicó es la más corta de todo su aparato y es de orden lingüístico. Observa que el arco iris suele ser en América una fuerza más o menos benévola, mientras que aquí es simplemente el arco con que Papá Grande dispara, y añade un dato de lengua: en chimila se emplea la misma palabra para el arco iris y para el arco como arma. No comenta las tres flechas ni sus destinos.

Su monografía del año siguiente, la Etnografía chimila de 1946, describe el arma en detalle: un arco tallado de una sola pieza de madera de palma, de un metro veinte a un metro treinta, con una sección transversal rectangular que el autor consideraba única entre los grupos de Colombia; y flechas de tres formas, compuestas únicamente de dos partes, la verada y la punta, sin emplumado. En ninguna parte identifica botánicamente la caña del relato. El mismo volumen describe el terreno como de formación geológica muy reciente, casi perfectamente plano, inundable en la época lluviosa y salpicado de lagunas y pozos de agua salada, y sitúa a la gente sobre todo en El Difícil, La Peña, San Ángel y Monterrubio, en medio de la selva que se extendía entre el Magdalena, el Ariguaní y el Cesar.

Niño Vargas aporta un dato de lengua que corre en paralelo al del recopilador: entre los ette una misma palabra, kaggra, nombra a la vez las flechas, la palma gallinazo y el cinturón de la constelación de Orión. Son dos superposiciones léxicas distintas —arco iris y arco por un lado, flechas y cielo por el otro— y no deben confundirse, pero las dos muestran que el vínculo entre las flechas y lo celeste que afirma el relato tiene compañía en la lengua.

Edgar Rey Sinning delimita el territorio anterior a la ocupación española entre las estribaciones de la Sierra Nevada, el brazo de Mompox y la ciénaga de Zapatosa, y entre la ribera derecha del Magdalena y los ríos Ariguaní y Cesar. Ninguna fuente consultada, en cambio, documenta la práctica de chuzarse con caña maná de noche ni vuelve a contar las tres flechas.`,
    versiones: `No hay una segunda versión de este cuento. Hay una sola, la de 1945, y las publicaciones posteriores que la traen la reproducen. Tener un único testimonio implica aquí algo concreto: los tres destinos que la narración nombra no pueden contrastarse con ninguna otra lista, y no hay manera de saber si eran siempre tres ni si eran siempre esos.

Lo que sí hay son desplazamientos. El más notorio es el tercer destino. Cartagena es una ciudad de fundación española, y el propio texto la marca como referencia del presente, no del tiempo del descenso: dice que la flecha cayó donde está hoy el gran pueblo que llaman así. Además, el territorio que la historiografía documenta para este pueblo, según la delimitación de Rey Sinning, queda del lado derecho del Magdalena y no alcanza Cartagena, que está al otro lado del río. El relato, por tanto, extiende el poblamiento más allá de donde llega el archivo.

El segundo desplazamiento está en la versión que se cuenta hoy. En 2024, César Rozo narró que Yaau bajó del cielo con Numirinta a la sabana de San Ángel y que con dos mazorcas de maíz cariaco hicieron a los Ette Ennaka. El descenso desde el cielo se conserva y el lugar también es San Ángel, pero desaparecen el arco iris, las tres flechas y los otros dos destinos, y el instrumento del origen pasa a ser el maíz. Son dos relatos distintos sobre el mismo suelo y no deben fundirse.

En la etnografía de Niño Vargas la clave del descenso es otra: los ette actuales se llaman ette takke, gente nueva, y se entienden como un pueblo que bajó sobre el fango que dejaron los incendios y las inundaciones enviados por las deidades. Ese marco explica por qué se baja, cosa que el relato de 1945 no explica, pero no dice hacia dónde. El mismo autor registra que el espacio habitable fue delimitado de manera intencional por el padre creador y que los únicos puntos cardinales reconocidos son el levante y el poniente, mientras que las tres flechas no se orientan por direcciones sino por nombres de lugar.

La lectura del recopilador sobre el arco iris —que aquí no es una fuerza benévola sino un arma— es suya y de 1945, y no está dicha en el relato.

Esta revisión retira del relato el párrafo final que comentaba la versión anterior de la página y reemplaza por este texto la sección que la ficha compartía, palabra por palabra, con los demás mitos del corpus.`,
    similitudes: `El paralelo inmediato está dentro del mismo corpus. En «La creación», el primer Ette mira la tierra desde el cielo, no le gusta, se niega a bajar y Papá Grande lo empuja; cae cerca de San Ángel. Aquí no cae un hombre sino que baja un pueblo entero, y no lo empujan: lo guían. Los dos relatos ponen el origen en el cielo y el aterrizaje en el mismo lugar, pero uno cuenta una caída forzada y el otro un reparto dirigido.

El segundo paralelo es la versión que los propios Ette Ennaka cuentan hoy, recogida en 2024 de boca de César Rozo: Yaau y Numirinta bajan del cielo a la sabana de San Ángel, uno mirando al oriente por donde sale el sol y la otra al occidente por donde se oculta, y con dos mazorcas de maíz cariaco hacen a la gente. Coinciden el descenso y el lugar; se separan en el instrumento, porque allí lo que funda es una planta sembrada y aquí lo que orienta es un arma disparada.

El tercero conecta este cuento con el cielo por la vía de la lengua. En el mito astral ette de la travesía de la joven, estudiado por Niño Vargas, una banda de marimondas se identifica con la constelación de Orión, y la palabra kaggra nombra al mismo tiempo las flechas, la palma gallinazo y el cinturón de esa constelación. La diferencia importa: allí las flechas comparten nombre con un grupo de estrellas, mientras que en el poblamiento la caña de las flechas se declara pariente del Sol y no de una constelación, y su virtud es que alumbra de noche a quien se chuza con ella.`,
    leccion:
      "Un territorio se aprende de memoria, por los pocos lugares donde algo cayó y la gente se quedó.",
    sceneHorizontal:
      "Papá Grande tensa el arco iris y lanza tres flechas de caña maná sobre un paisaje que conecta San Ángel, el río Cesar y el litoral",
    sceneVertical:
      "una flecha luminosa de caña maná marca un sendero nocturno mientras familias Ette avanzan entre sabana, río y bosque",
    researchNotes:
      "CORRECCIÓN: se eliminan emociones y personificaciones inventadas. TERRITORIO: los tres lugares se conservan como geografía narrativa, no como prueba cartográfica.",
  }),
  myth({
    slug: "primeras-guerras",
    relatoCorto:
      "La fuente primaria son setenta y cuatro palabras sin episodios, sin fechas y sin nombres de lugar. Llegar a trescientas sólo se consigue repitiendo lo mismo con otras palabras, que es menos fiel que un relato corto.",
    sourceKeys: [
      "reichel1945",
      "rocha2010",
      "mincultura2024",
      "nino2008",
      "uninorte2023",
      {
        key: "reichelDolmatoffEtnografia1946",
        summary:
          "Corrobora los dos núcleos del relato con trabajo de campo: los chimila insistían en que las piedras de moler no eran suyas sino de otros indios, y el autor recoge la tradición de que su territorio estaba antes habitado por ellos, vencidos y desalojados después.",
        limitation:
          "No documenta ninguna guerra con el otro pueblo que nombra el relato ni la frase final del narrador sobre la amistad posterior.",
      },
      {
        key: "sinningResistencia2009",
        summary:
          "Reconstruye con archivos y crónicas la respuesta chimila a la usurpación de su territorio y recuerda que los españoles los reseñaron como belicosos desde el primer contacto, sosteniendo que no fueron ni aniquilados ni vencidos.",
        limitation:
          "Trata el conflicto con los colonizadores, no las guerras previas que narra el informante.",
      },
      "zuluagaEntre2015",
      "vargasinmediaciones2010",
      "bolinderultimos1987",
    ],
    title: "Memoria de las primeras guerras",
    summary:
      "Tangrutaya Mutsu recordó conflictos con Aruacos y Karíbi; la ficha conserva su testimonio sin presentar la conquista como reconciliación benéfica.",
    tags: ["guerra", "memoria", "Aruacos", "Karíbi"],
    mito: `En esta tierra vivían antes los Aruacos. De ellos quedaron las piedras de moler que todavía aparecen en el monte.

Cuando los Ette se encontraron con los Aruacos, los sacaron con guerra. Los Aruacos eran muy ricos y los Ette muy pobres. Los ricos salieron de esta tierra y los pobres se quedaron en ella, y con ellos se quedaron las piedras que los otros habían dejado.

También con los Karíbi hubo mucha guerra. Esa no terminó con una salida: donde hay Karíbi, los Ette no pueden vivir. Siempre nos matamos.

Ahora ya no. Ahora somos amigos, y hace mucho tiempo que lo somos. Desde que llegaron los Blancos a esta tierra.`,
    historia: `Es el cuarto texto del corpus y el más corto de los que abren el conjunto: setenta y cuatro palabras en el impreso de 1945. No es una cosmogonía sino una memoria de vecinos, y todo lo que contiene cabe en cinco datos: los Aruacos vivían antes aquí, dejaron piedras de moler, fueron sacados con guerra, con los Karíbi la convivencia era imposible, y eso se acabó cuando llegaron los blancos.

Lo dijo el cacique Tangrutaya Mutsu en las mismas condiciones que el resto: de noche, en la hamaca, en castellano y sólo delante de hombres. Aquí la restricción pesa de otro modo, porque el texto pasa del pasado remoto al presente del propio narrador en la última frase y habla en primera del plural. Lo que se conserva no es sólo un relato: es la posición de un hombre de los años cuarenta sobre la historia de su pueblo.

Reichel-Dolmatoff encontró muy interesante la tradición de guerra contra los grupos de la Sierra Nevada, casi todos de origen chibcha, y contra grupos karib. Sobre las piedras de moler fue más lejos y en dirección contraria al relato: las consideró un elemento cultural evidentemente andino que no corresponde al conjunto de la cultura material del grupo, señaló que en muchas partes están reemplazadas por el pilón de madera, que le parecía el utensilio más antiguo, y escribió que es dudoso que procedan verdaderamente de los Aruacos, suponiendo más bien que son vestigios de una civilización arcaica de la región.

Su Etnografía chimila de 1946 corrobora con trabajo de campo los dos núcleos del cuento. Registra que en todos los casos observados los chimila insistían en que esas piedras no eran de ellos sino encontradas en el terreno y fabricadas por otros indios, tal vez aruacos, y que esa insistencia se volvía a veces desprecio abierto; recoge la frase que le repitieron varias veces, según la cual los antiguos no tenían piedra de moler porque no tenían maíz, y las buscaron cuando recibieron el maíz; y anota que todas las piedras que vio tenían carácter arqueológico. En el mismo volumen escribe que la tradición de que su territorio estaba antes habitado por los Aruacos, vencidos y desalojados por ellos, puede corresponder a la realidad histórica. En cambio no documenta ninguna guerra con los Karíbi ni la frase final del narrador.

La otra guerra, la que el relato no cuenta, está documentada por separado. Marcela Quiroga Zuluaga estudia la formación de los pueblos de misión tras la derrota militar de finales del siglo XVIII en la gobernación de Santa Marta. Edgar Rey Sinning reconstruye la resistencia frente a la usurpación del territorio. Y Juan Camilo Niño Vargas, al revisar los encuentros de Gustaf Bolinder en 1915 y 1920, muestra que la imagen del chimila desintegrado y al borde de la extinción resulta en buena parte de prácticas indígenas de aislamiento y rechazo del contacto, lo que obliga a leer con cautela cualquier retrato de enemistad con los vecinos.`,
    versiones: `El desplazamiento más fuerte lo documentó Niño Vargas en 2008 y afecta al sujeto mismo del relato. Los ette actuales cuentan que la tercera tierra estaba poblada por los ette chorinda, «la gente de antes», un pueblo extremadamente belicoso cuyos hombres se entrenaban desde niños con la macana, el arco y las flechas envenenadas, y cuyos jefes podían transformarse en bestias y lanzar dardos invisibles; vivían en guerra permanente con poblaciones indígenas y no indígenas. Y afirman que esas personas, y no ellos, eran los verdaderos chimilas. Ellos se llaman ette takke, gente nueva, rechazan abiertamente esa identificación y sostienen que el material arqueológico que aparece en su territorio no tiene relación con su cultura: un anciano lo dijo diciendo que por ahí se ven sus cosas, huesos y múcuras que salen de la tierra, todos destruidos porque Yaau los acabó.

El gesto de 1945 sobrevive, entonces, pero cambia de destinatario. En el relato antiguo lo que sale de la tierra pertenece a un pueblo vecino con nombre, los Aruacos, y quien lo sacó con guerra es «nosotros». En la etnografía contemporánea lo que sale de la tierra pertenece a una humanidad anterior destruida por las deidades, y el «nosotros» actual niega ser el que peleó esas guerras.

Contra la imagen de una enemistad simple con los Aruacos hay además un registro histórico que conviene poner al lado. Enio Armando Hernández Agüirre y sus coautores anotan que en la guerra contra los españoles participaron también otras comunidades indígenas, entre ellas orejones, algunos arahuacos y personas negras esclavizadas que habían escapado, y que esas coaliciones fueron importantes para la supervivencia del grupo. Es decir, la documentación conserva a los arhuacos como aliados y no sólo como expulsados.

La frase final del narrador exige el mismo cuidado. Decir que son amigos desde que llegaron los blancos es su testimonio y se queda en el relato porque es lo que la fuente trae, pero no puede leerse como un juicio sobre la conquista. Lo documentado apunta en otra dirección: derrota militar y pueblos de misión a finales del siglo XVIII, entrega de territorios a criollos como pago en la época republicana, la invasión de los años veinte para extraer bálsamo que tumbó las selvas donde vivían, el desplazamiento hacia Santa Marta bajo la violencia paramilitar y un reencuentro institucional sólo a finales de los años ochenta, cuando funcionarios del Incora hallaron al grupo en las Sabanas de San Ángel.

También hay que decir lo que no hay: una sola versión, setenta y cuatro palabras, ningún episodio, ninguna fecha, ningún nombre propio y ningún lugar preciso de batalla. Los Karíbi no se identifican en ninguna fuente consultada con un pueblo actual determinado.

Esta revisión conserva la frase final dentro del relato, saca de él todo el comentario que antes la rodeaba y lo trae aquí, que es donde corresponde.`,
    similitudes: `El paralelo más cercano está en el mismo corpus y lo dijo el mismo hombre. En «Cómo los Chimila consiguieron el maíz», los Aruacos tienen mucho maíz y son gordos mientras los Ette comen sólo yuca, hierbas y animales del monte, hasta que tumban la ceiba donde estaba guardada la semilla. La asimetría es idéntica a la de este relato —ellos ricos, nosotros pobres— y el trabajo de campo de 1946 ata los dos textos, porque allí los chimila explicaron que los antiguos no tenían piedra de moler porque no tenían maíz. La diferencia está en el remedio: en el cuento del maíz lo que resuelve la carencia es un árbol derribado de noche, no una guerra.

El segundo paralelo es la versión que los ette cuentan hoy, recogida por Niño Vargas: los belicosos eran los ette chorinda, la gente de antes, y de ellos quedan huesos y múcuras que salen de la tierra. La estructura se repite —hubo otros aquí, y lo que aparece en el suelo es de ellos— pero el reparto cambia por completo, porque aquellos otros ya no son un pueblo vecino sino una humanidad anterior, y el pueblo que narra ya no se reconoce como su heredero.

El tercero es de escala regional. Varios pueblos chibchas refieren la aparición y desaparición de humanidades previas, cada una más ajustada a lo que los dioses querían: así lo cuentan los bribrí y los cabécar de Talamanca, los iku de la Sierra Nevada y los ngäbe. En todos ellos la ruptura entre una humanidad y la siguiente la deciden las divinidades. En el relato de 1945 no hay divinidad ninguna: la ruptura la deciden los hombres, y se llama guerra.`,
    leccion:
      "Atribuir a otros las piedras que uno usa es también una manera de contar quién estuvo antes.",
    sceneHorizontal:
      "grupos humanos separados por un corredor de sabana observan antiguas piedras de moler, sin batalla explícita ni vencedores heroicos",
    sceneVertical:
      "un sendero antiguo atraviesa piedras de moler abandonadas y conduce hacia comunidades distantes bajo un cielo sobrio",
    researchNotes:
      "CORRECCIÓN MAYOR: se retira la idea de que la llegada blanca trajo alivio y alianza. GÉNERO: se presenta como memoria histórica atribuida.",
  }),
  myth({
    slug: "el-diluvio",
    sourceKeys: [
      "reichel1945",
      "rocha2010",
      "buitRago2020",
      "onic2023",
      "nino2008",
      {
        key: "vargasinmediaciones2010",
        summary:
          "Documenta que en los relatos ette los dioses acabaron el mundo anterior con incendios, diluvios y ventiscas colosales, y que sólo en pocas ocasiones se sostiene que un grupo pudo sobrevivir ocultándose en una guarida subterránea: el mismo par de catástrofes y el refugio bajo tierra de este relato.",
        limitation:
          "Su tema central es la historia del contacto con un etnólogo sueco; las referencias al diluvio remiten a la tradición viva reciente, no a la versión de 1945.",
      },
      {
        key: "vargastejido2014",
        summary:
          "Afirma que el fuego y el agua que exterminaron a los antiguos también prepararon el advenimiento de una nueva tierra, describe un mundo subterráneo oscuro y lleno de agua, y señala que a los antiguos se les reservó perecer bajo el lodo o ser convertidos en fieras y animales.",
        limitation:
          "Su objeto es la hamaca como materialización del cosmos: el diluvio aparece como marco general y no comenta los episodios del relato.",
      },
      {
        key: "reichelDolmatoffEtnografia1946",
        summary:
          "El propio recopilador, un año después de publicar los mitos, describe una casa chimila de construcción redonda levantada alrededor de un gran poste central y añade que las alusiones a una gran casa redonda en los cuentos tradicionales hacen pensar que ese fue el tipo de vivienda común.",
        limitation:
          "No dice nada de un piso subterráneo ni de cuartos superpuestos: sostiene la forma redonda del refugio, no su arquitectura excepcional.",
      },
      "vargascasa2024",
      {
        key: "vargasBajo2025",
        summary:
          "Explica que en un mundo asimilado a un gran campo de roza y quema los dioses incendian, inundan y limpian periódicamente la tierra, acabando con antiguas humanidades y sembrando otras nuevas, lo que da sentido a que el diluvio vaya seguido de un incendio.",
        limitation:
          "Es un ensayo comparativo sobre los pueblos chibchas: el caso ette ocupa pocos párrafos y no glosa ningún episodio de 1945.",
      },
    ],
    title: "El diluvio, la lechuza y el totumo",
    summary:
      "Una familia sobrevive bajo tierra; una mujer se vuelve lechuza, el karau y el rabipelado resisten en un totumo y el fuego casi destruye la tierra otra vez.",
    tags: ["diluvio", "lechuza", "totumo", "animales"],
    mito: `Una vez empezó a llover y llovió y llovió, más y más, de día y de noche. El Sol y la Luna se ahogaron.

Entonces todo el monte se inundó y ya no hubo ríos ni cañadas. El agua creció y creció y por fin cubrió toda esta tierra. No quedó sembrado y no hubo comida, y así fue que todos los indios se murieron.

Una sola familia quedó viva. El hombre había hecho una gran casa de piedra bajo la tierra, redonda como las casas de nosotros pero con muchos cuartos, uno encima de otro. Allá arriba, en el cuarto de más arriba, estaba sentado el hombre con su familia. Afuera llovía mucho y adentro no entró nada de agua.

Entonces un día dijo una mujer: “Hace años ya que no veo el Sol y estoy ya muy cansada. Quiero ver un poco de luz”. Así dijo, y se subió y abrió un hueco en el techo. Pero como el techo no era de hoja de palma sino también de piedra, tuvo que sacar una piedra grande. Entonces un chorro de agua entró en la casa y todos casi se ahogaron.

Entonces dijo el hombre: “¡Maldita mujer! Así uno se muere por tu culpa. Ahora, cuando termine de llover, vete afuera y vuélvete lechuza”. Así fue, y cuando terminó la lluvia la mujer se volvió lechuza. Desde entonces la lechuza canta de noche y quiere ver al sol, pero no puede verlo nunca.

Entonces el hombre y las otras mujeres bajaron al otro cuarto y esperaron allí el fin de la lluvia. Esperaron muchos años y por fin salieron.

Entonces dijo el hombre: “Ahora sí se murieron todos los animales. ¿Qué vamos a hacer sin animales?”. Pero no fue así. En una loma muy alta había un árbol de totumo, y ese árbol creció mucho cuando empezó a llover. A ese árbol se subieron el pájaro karau y el rabipelado nuti. El pájaro tenía mucho miedo, y desde entonces grita en el monte: karau, karau, cada vez que va a llover. Al rabipelado también le daba mucho miedo y se le cansaban las patas, y así se enganchó con la cola; pero como estuvo colgado así muchos años, se le peló la cola. Así es que el rabipelado tiene la cola pelada.

Cuando terminó la lluvia, los dos bajaron del totumo, y de esos dos vienen todos los animales.

Así pasó la gran lluvia, pero en muchas partes la tierra no se secó. Entonces dijeron los hombres: “¡Vamos a secar la tierra!”. Hicieron candela en el monte, pero como hubo mucho viento se quemó el monte y se quemaron todos los sembrados y todas las casas. Así fue como casi se murieron otra vez los indios.

Por fin se apagó la candela y todos se fueron a sembrar y a hacer casas nuevas. Todo eso fue así y no es embuste.`,
    historia: `Este es el quinto relato de Mitos y cuentos de los indios Chimila, que Gerardo Reichel-Dolmatoff publicó en el Boletín de Arqueología en 1945 y que ocupa allí las páginas 6 y 7. Es el más largo de la primera parte del corpus, y todo él proviene de un solo narrador: el cacique Tangrutaya Mutsu, un anciano septuagenario a quien el recopilador llama el último buen narrador de cuentos y tradiciones que quedaba. Contaba de noche, recostado en su hamaca, en voz baja, despacio y en un castellano que el mismo recopilador describe como a veces confuso. Aunque varias mujeres conocían estos cuentos, el cacique insistía en contarlos sólo ante hombres e interrumpía el relato cada vez que una mujer entraba a la casa, y ninguno de ellos se narraba a los niños. Esa condición pesa aquí más que en otras páginas: el giro del relato es el acto de una mujer y el castigo que le cae encima, y lo único que conservamos es la versión que un hombre le contó a otro hombre en una pieza de la que ellas habían salido.

El comentario que el recopilador escribió a continuación es suyo y no del narrador. Le llamó la atención la casa subterránea de piedra y la puso al lado de una versión cuna según la cual, cuando vino la oscuridad, hicieron una enorme olla de greda que enterraron en la tierra, con huecos en la parte alta para que pudiese entrar el aire. Anotó que el motivo de la mujer convertida en ave por castigo es bastante común, lo mismo que la salvación de unos pocos animales, y observó que aquí el diluvio aparece combinado con el incendio del mundo, del que citó dos casos colombianos: entre los miránya el incendio lo causa el sol, y entre los huitoto se dice que Tioya, el primer hombre, quemó la tierra. Sugirió por último que el árbol donde se salvan los animales podría pertenecer al ciclo del árbol de la vida.

Un año después, en Etnografía chimila, el mismo autor describió una casa chimila de construcción redonda levantada alrededor de un gran poste central, de unos ocho metros de diámetro, y escribió que las alusiones a una gran casa redonda en los cuentos tradicionales hacen pensar que ese fue el tipo de vivienda común. Eso sostiene la forma del refugio; no dice nada de un piso bajo tierra ni de cuartos superpuestos. Un estudio reciente sobre la casa ette reconstruye las grandes viviendas de los siglos XVIII y XIX como edificaciones de planta redonda y cónica alrededor de un poste central, con una base circular de dieciocho metros, y tampoco menciona refugios enterrados.

Las fuentes contemporáneas no glosan estos episodios, pero documentan el marco. Juan Camilo Niño Vargas, que trabajó en el territorio ette en los años dos mil, registra que en los relatos actuales incendios, diluvios y ventiscas colosales acabaron el mundo anterior y que sólo en pocas ocasiones se sostiene que un grupo pequeño alcanzó a sobrevivir escondido en una guarida subterránea. En otro trabajo describe el fuego y el agua que exterminaron a los antiguos como los mismos que prepararon una tierra nueva, y sitúa el mundo de abajo como una región oscura, llena de agua y poblada por criaturas monstruosas. Un ensayo comparativo reciente sobre los pueblos chibchas explica por qué agua y fuego van juntos: el mundo se piensa como un gran campo de roza y quema que los dioses incendian, inundan y limpian por turnos para acabar con humanidades viejas y sembrar otras.`,
    versiones: `De este relato existe un solo testimonio oral documentado: el que Tangrutaya Mutsu dio en castellano y Reichel-Dolmatoff fijó por escrito en 1945. La antología El sol babea jugo de piña, que Miguel Rocha Vivas compiló en 2010, reúne literatura ette y declara sus fuentes, pero pertenece a esa misma cadena y no aporta un segundo narrador.

Lo que sí existe es un conjunto de versiones ette recientes del fin del mundo, recogidas en el territorio a comienzos de los años dos mil, que cuentan la catástrofe de otro modo. Allí el cataclismo tiene causa: la guerra entre los ette chorinda y los que los relatos llaman españoles dejó la espalda de Yunari Krari manchada de sangre, y Yaau decidió preparar la llegada de un mundo nuevo. Y tiene otro orden. En el canto que Carlos Sánchez Purusu Takiassu Yaau dictó en Narakajmanta en septiembre de 2003, Yaau mandó fuego, agua y viento uno detrás de otro: prendió fuego hasta que todo quedó quemado, después vertió agua hasta que todo quedó inundado, más tarde sopló viento hasta que todo quedó tumbado. En el texto de 1945 la secuencia es la inversa, primero el agua y después el fuego, y el incendio no lo manda ningún dios: lo encienden los hombres para secar el barro y se les va de las manos con el viento.

También cambia quién se salva. En 1945 es una familia a la que un hombre metió en una casa de piedra bajo la tierra. En lo que Luisa Granados Diiñato contó en Ette Butteriya en octubre de 2003, Yaau salvó una pareja de cada grupo de indios en pensamiento, como cuando uno salva una semilla para la próxima cosecha, y sólo después mandó el fuego y el agua. Y en la mayoría de las historias actuales la destrucción es total: apenas en unas pocas un grupo pequeño sobrevive escondido en un hoyo cavado en el suelo. Son versiones distintas y no deben fundirse. La de 1945 no nombra a Yaau, ni a Yunari, ni a los españoles, ni al viento, y no explica por qué empezó a llover.

Frente al texto heredado, esta revisión corrige dos cosas. El refugio no es una pirámide: la fuente dice casa redonda de piedra bajo la tierra, con cuartos uno encima de otro, y eso es lo que se conserva. Y el relato ya no lleva por dentro las marcas del aparato crítico que lo interrumpían cada pocas líneas.`,
    similitudes: `Hay al menos tres paralelos que pueden sostenerse con documento a la vista.

El primero lo trajo el propio recopilador en 1945: entre los cuna, cuando vino la oscuridad, hicieron una enorme olla de greda que enterraron en la tierra y a la que dejaron huecos en la parte alta para que pudiese entrar el aire. El refugio bajo tierra es el mismo y el detalle se invierte. En la olla cuna los huecos son la condición de sobrevivir; en la casa ette el techo es de piedra maciza y la desgracia empieza justamente cuando alguien abre uno.

El segundo es el incendio. Reichel-Dolmatoff citó dos casos colombianos: entre los miránya el incendio del mundo lo causa el sol, y entre los huitoto se dice que Tioya, el primer hombre, quemó la tierra. En el relato ette no hay sol vengativo ni primer hombre. El fuego lo prenden los sobrevivientes con una intención práctica, secar la tierra que no acababa de secarse, y es el viento el que convierte esa faena en desastre.

El tercero está en la propia tradición ette de hoy, documentada por Juan Camilo Niño Vargas entre narradores que dio por su nombre. Allí el fuego, el agua y el viento los manda Yaau en ese orden para acabar con el mundo de los ette chorinda y de los españoles, y lo que queda debajo son huesos y fragmentos de cerámica. La distancia con 1945 es completa: la versión de Tangrutaya Mutsu no da causa, no nombra dioses ni enemigos y pone el agua antes que el fuego.

Conviene marcar además una ausencia. En este diluvio no hay embarcación, ni pareja escogida de antemano, ni promesa posterior. Lo que salva es una obra de albañilería bajo tierra y un árbol de totumo en una loma alta, y quienes vuelven a poblar el monte no son animales embarcados sino dos que aguantaron encaramados: el pájaro karau y el rabipelado nuti.`,
    leccion:
      "Quien sobrevive al agua puede morir por el fuego que enciende para secar lo que quedó.",
    sceneHorizontal:
      "la casa redonda de piedra emerge entre aguas del diluvio, una lechuza vuela y un totumo alto sostiene al karau y al rabipelado",
    sceneVertical:
      "después de la lluvia, una pequeña comunidad apaga el fuego que secaba la tierra y vuelve a sembrar junto al totumo",
    researchNotes:
      "CORRECCIÓN: casa subterránea, no pirámide; no se moraliza la curiosidad de la mujer. ESTRUCTURA: se conservan agua y fuego como dos peligros consecutivos.",
  }),
  myth({
    slug: "el-fuego",
    sourceKeys: [
      "reichel1945",
      "rocha2010",
      "buitRago2020",
      "nino2008",
      {
        key: "reichelDolmatoffEtnografia1946",
        summary:
          "Describe el fogón siempre fuera de la casa, formado por tres piedras, propio de cada familia y cuyo fuego se mantiene continuamente, y consigna la creencia de que hay médicos buenos y malos y de que pueden llevar doble vida convirtiéndose en animales.",
        limitation:
          "No recoge este mito ni el nombre de sus personajes, y la transformación que documenta es en tigre, no en sapo.",
      },
      {
        key: "vargasdivision2020",
        summary:
          "Registra el término ette para el fuego y explica que al incendiar el campo las llamas se siembran y los hombres ocupan el papel de los dioses primigenios: el fuego no es un utensilio sino una potencia que se trae, se siembra y se cuida.",
        limitation:
          "Su objeto es el ciclo agrícola contemporáneo, no el mito de origen del fuego.",
      },
      {
        key: "vargascasa2024",
        summary:
          "Confirma el nombre ette del fogón y muestra que la autonomía de cada familia se define por tener fogón propio, cultivos propios y caminos propios: el cuidado cotidiano del fuego es el criterio que define una casa ette.",
        limitation:
          "Es un estudio de arquitectura doméstica: el fuego aparece en el vocabulario y la organización del espacio, sin referencia mítica.",
      },
      {
        key: "vargastejido2014",
        summary:
          "Sitúa el fuego, junto con el agua, como agente cosmológico que exterminó a los antiguos y preparó una nueva tierra, y describe un universo donde los seres cambian de condición entre humanos, animales y dioses.",
        limitation:
          "No narra ni analiza el episodio del robo de la brasa: el fuego aparece en escala cósmica y no doméstica.",
      },
    ],
    title: "Huhum, el sapo que trajo el fuego",
    summary:
      "El brujo Huhum se vuelve sapo, cruza el Gran Río, guarda una brasa en la boca y entrega a los Ette el fuego que debe permanecer encendido.",
    tags: ["fuego", "sapo", "Huhum", "transformación"],
    mito: `Antes los Chimila no conocían el fuego. No había candela en el fogón ni en el monte, y tampoco había humo.

Entonces comían todo crudo. Al mediodía las mujeres ponían la comida sobre una gran piedra y el sol la tostaba un poco; entonces le daban una vuelta y se tostaba un poco por el otro lado. Así fue que los Chimila sufrieron mucho y eran muy flacos.

Al otro lado del Gran Río había otros indios que sí tenían fuego. Comían carne asada y pescado frito y cocinaban bollos. Pero ellos eran enemigos de los Chimila.

Una noche los Chimila iban por la ribera del Gran Río y veían al otro lado a los indios comiendo pescado. Estaban allá sentados alrededor de la candela y comían muy sabroso.

Entonces dijeron los Chimila: “¿Qué vamos a hacer para conseguir candela? Si uno de nosotros va al otro lado lo matarán los enemigos, y además se apagará la candela en el agua si vuelve nadando”.

Entonces dijo el brujo Huhum: “Yo voy a conseguir candela. Y aunque me cueste la vida, voy a traerla”. Entonces el brujo se cambió en el sapo Mamu y saltó al agua. Nadó a través del Gran Río, y cuando vino a la playa saltó entre los indios que estaban allá sentados comiendo pescado. Cuando vieron al gran sapo se asustaron, gritaron y corrieron.

Entonces el sapo se tragó una brasa y saltó al río y nadó al otro lado. No se quemó ni se apagó la candela. Cuando vino a la playa, el sapo escupió la candela y dijo: “¡Mis hijos, aquí está la candela! Ahora hay que guardarla bien para que no se apague nunca”.

Pero el brujo se quedó sapo. Desde entonces los sapos son gente como nosotros y no se deben matar. Los sapos son buenos.

A veces, de noche, el sapo canta en la selva, y entonces las mujeres se levantan a poner más leña al fogón para que no se apague.

Así fue como los Chimila consiguieron el fuego.`,
    historia: `Es el sexto relato del corpus que Gerardo Reichel-Dolmatoff publicó en 1945 con el título Mitos y cuentos de los indios Chimila, en el Boletín de Arqueología, y ocupa allí la página 8. Todos los cuentos del volumen vienen de un mismo narrador, el cacique Tangrutaya Mutsu, anciano septuagenario, que los contaba de noche, recostado en su hamaca, en voz baja y despacio, en un castellano que el recopilador describe como a veces confuso. El cacique insistía en contarlos sólo ante hombres e interrumpía el relato cuando entraba una mujer. La advertencia importa aquí por una razón concreta: el cierre del cuento describe lo que hacen las mujeres cuando el sapo canta de noche, y ese dato nos llega desde una situación de la que ellas estaban excluidas.

El comentario que el recopilador puso a continuación es suyo, no del narrador. Llama al cuento clásico en la mitología americana, ve en Huhum un brujo legendario, tal vez personificación de un héroe cultural, y subraya la importancia del sapo como animal mítico en todo el continente. Transcribe entero el cuento cuna del fuego, en el que sólo el Tigre tenía candela y la Lagartija cruza el río crecido, se ofrece a cuidarle el fuego mientras duerme, le coge una chispa y huye. Lista después quién roba el fuego en otros pueblos: el colibrí entre los jívaros y los okaima, el ratón entre los matako, el buitre negro entre los tapieté, el sapo entre los chiriguano, los gemelos míticos entre los bakairi.

El mismo autor publicó un año más tarde Etnografía chimila, y allí está el respaldo doméstico de este cuento. Escribe que el fogón donde se preparan los alimentos se encuentra siempre fuera de la casa, que cada familia tiene su propio hogar formado por tres piedras sobre las cuales se coloca el recipiente, que la consecución de la leña está a cargo de los hombres, y que entre comidas se asan mazorcas inclinándolas contra una piedra del fogón cuyo fuego se mantiene continuamente. La orden con que termina el relato, guardar bien la candela para que no se apague nunca, describe entonces una práctica que el recopilador vio funcionando. En ese mismo libro anota que un cuento chimila dice que hay buenos brujos y hay malos, y que los shamanes pueden llevar una doble vida convirtiéndose en tigres: hay transformación, pero en tigre, no en sapo.

Entre los estudios recientes, los de Juan Camilo Niño Vargas describen el fuego ette como potencia y no como utensilio. Registra priimu’ como nombre del fogón y llama priimu kajgawe’enisa al periodo de quemas, en el que los hombres siembran las llamas en puntos estratégicos del campo repitiendo lo que las divinidades hicieron al principio de los tiempos. Anota además que la autarquía de cada familia se reconoce en tener fogón propio, cultivos propios y una red propia de caminos. Ninguna de esas fuentes narra el episodio de la brasa, y ninguna publica el relato en ette taara: fuera del corpus de 1945 no se halló otro registro de Huhum ni del sapo Mamu.`,
    versiones: `De este relato hay un solo testimonio documentado: el que Tangrutaya Mutsu dio en castellano y Reichel-Dolmatoff publicó en 1945. La antología de Miguel Rocha Vivas reúne literatura ette y la contextualiza, pero reedita y no aporta un segundo narrador. Tener un testimonio único significa que no hay manera de saber qué partes del cuento eran fijas y cuáles cambiaban de una noche a otra, ni cómo lo contaban las mujeres que, según el propio recopilador, también lo conocían.

Los paralelos que el recopilador acumuló en sus notas no son versiones de este cuento sino cuentos de otros pueblos, y conviene no confundirlos. Que entre los chiriguano el ladrón del fuego sea un sapo no convierte el episodio ette en una variante del chiriguano.

Las fuentes contemporáneas no vuelven a narrar el episodio, pero desplazan el marco. En los trabajos de Juan Camilo Niño Vargas el fuego es un agente cosmológico: junto con el agua exterminó a los antiguos y preparó la tierra nueva, y hoy se siembra en el campo de cultivo como lo hicieron los dioses. En el canto de Yunari que Andrea Paola Buitrago Rojas reproduce de la antología de Rocha Vivas se dice que Yaau limpió la espalda de Yunari con agua y con fuego y la dejó sin manchas, nueva, joven. En el texto de 1945 el fuego no tiene origen divino ni función de limpieza: es un bien que ya existe en la orilla de enfrente, en manos de un pueblo enemigo, y se consigue con una transformación y un riesgo.

Queda abierto un asunto de nombres. El relato no dice cuál es el Gran Río ni quiénes son los enemigos de la otra orilla. Niño Vargas documenta que los ette de hoy tienen por límite de su mundo el mar y los ríos Magdalena y César, entendidos como un solo cuerpo de agua que rodea la tierra y amenaza con inundarla. Es un dato de hoy y no autoriza a poner un nombre propio donde la fuente dejó sólo el Gran Río.

Frente al texto heredado, esta revisión sacó del relato las frases que lo comentaban desde dentro y retiró lo que la fuente no tiene: una tierra sin estrellas, un sacrificio heroico y un dilema psicológico. También devolvió al lugar que les corresponde los dos nombres que el texto distingue y que la versión anterior tendía a mezclar: Huhum es el brujo, Mamu es el sapo en que se cambia.`,
    similitudes: `El paralelo mejor documentado es el cuna, porque el propio recopilador lo transcribió entero en 1945. Allí sólo el Tigre tenía fuego y los demás comían la carne cruda; para robárselo llamaron a la Lagartija, que atravesó el río en medio de la lluvia, se ofreció a cuidar el fuego mientras el Tigre dormía, cogió para sí una chispa y huyó cruzando otra vez; el Tigre, que no sabía nadar y tenía el río crecido, amaneció sin fuego y le tocó comer carne cruda como antes les había tocado a los otros. La arquitectura es la misma: un río de por medio, un mediador que cruza dos veces, una inversión de quién come crudo. Lo que cambia es el mediador. En el cuento ette quien cruza no es un animal sino el brujo Huhum, que se hace sapo y ya no vuelve a ser hombre, y la brasa cruza dentro de la boca.

El segundo paralelo está en la misma lista del recopilador: entre los chiriguano el ladrón del fuego es un sapo. Coincide el animal y se separa el sentido. En el relato ette el sapo es una persona transformada, y por eso el cuento termina con una prohibición que los otros no traen: los sapos son gente, son buenos y no se deben matar.

Un tercero, también de esa lista, sirve para marcar un contraste: entre los matako del Gran Chaco, como los nombra esa etnografía, el ratón le roba la candela al tigre, y en otra variante lo hace el conejo, que de paso provoca el incendio del mundo. En el corpus chimila esas dos cosas están separadas. El incendio del mundo es otro relato, el del diluvio, y allí el fuego no lo trae nadie de ninguna parte: lo prenden los hombres para secar la tierra.

Vale anotar, por último, que este cuento no explica de dónde salió el fuego de la otra orilla. No cuenta un origen sino un traslado.`,
    leccion:
      "Quien cruza el agua por una brasa deja a otros el trabajo diario de no dejarla apagar.",
    sceneHorizontal:
      "el gran sapo Mamu cruza el Gran Río con una brasa luminosa dentro de la boca mientras un fogón espera en la ribera Ette",
    sceneVertical:
      "un sapo canta de noche junto a un fogón y una mujer añade leña para impedir que la candela se apague",
    researchNotes:
      "CORRECCIÓN: se elimina el heroísmo genérico y se conserva el vínculo entre canto del sapo y cuidado del fogón. NOMBRE: Huhum/Mamu.",
  }),
  myth({
    slug: "el-agua",
    sourceKeys: [
      "reichel1945",
      "rocha2010",
      "buitRago2020",
      "onic2023",
      "nino2008",
      {
        key: "reichelDolmatoffEtnografia1946",
        summary:
          "Ancla etnográficamente a la protagonista: informa que el cacicazgo chimila es matrilineal y puede ejercerlo una mujer, dice haber encontrado varias mujeres cacicas y remite expresamente a una leyenda donde la Gran Cacica aparece como héroe cultural; describe además que la falta de agua potable es tremenda y que la vida depende de pozos y cañadas.",
        limitation:
          "La remisión al mito es una nota de una línea que reenvía a la publicación de 1945, sin analizar los pozos, y su autor es el mismo recopilador.",
      },
      {
        key: "vargasdivision2020",
        summary:
          "Muestra que entre los ette el agua es trabajo de otro orden de seres: un dios se encarga de las lluvias suaves del primer semestre y la diosa de las fuertes del segundo, y los manantiales son morada de espíritus, de modo que los humanos cavan pero sólo otra autoridad hace aparecer el agua.",
        limitation:
          "No menciona a la Gran Cacica ni el episodio de los pozos: describe el régimen contemporáneo de lluvias agrícolas.",
      },
      {
        key: "vargastejido2014",
        summary:
          "Describe el mundo de abajo como una región oscura, llena de agua y poblada por criaturas monstruosas, y transcribe un canto territorial donde las tierras propias se delimitan por las aguas explayadas: el agua que sube al fondo de un pozo viene de una región marcada.",
        limitation:
          "No comenta el relato de los pozos ni la figura de la Gran Cacica: el agua aparece como componente del cosmos.",
      },
      {
        key: "vargascasa2024",
        summary:
          "Documenta que la autarquía de cada casa se organiza alrededor de una red propia de caminos hacia los lugares de trabajo y las fuentes de agua, y que las viviendas se levantan sobre colinas flanqueadas por arroyos: el acceso al agua ordena el poblamiento.",
        limitation:
          "No trata el mito ni la excavación de pozos: el agua aparece como condición del emplazamiento.",
      },
    ],
    title: "La Gran Cacica y el origen del agua",
    summary:
      "La Gran Cacica manda cavar pozos y, durante la noche, llama al agua con su palabra y su saliva hasta llenarlos de agua dulce.",
    tags: ["agua", "Gran Cacica", "pozos", "saliva"],
    mito: `Cuando los Chimila llegaron a esta tierra montañosa, no encontraron agua para tomar. Buscaron y buscaron. Buscaron río y no había río. Buscaron cañada y no había cañada. En toda esa tierra montañosa no hallaron de dónde beber, y sufrieron mucho.

Entonces la Gran Cacica mandó cavar un pozo hondo, y más allá otro pozo, y más allá otro. Los hombres cavaron en un lugar, y más allá cavaron el otro, y más allá el otro. Cavaron hondo y siguieron cavando. Cuando los pozos ya estaban bien hondos, la Gran Cacica se puso a dormir.

Cuando se despertó, preguntó: “¿Ya hay agua?”. Los hombres dijeron: “No, todavía no hay agua”. Los pozos estaban bien hondos y estaban secos. En el fondo no había ni una gota.

Entonces la Gran Cacica durmió otra vez. Cuando se despertó, volvió a preguntar: “¿Ya hay agua?”. “No —dijeron los hombres—, todavía no hay”. Los pozos seguían lo mismo, hondos y secos.

Entonces, por la noche, la Gran Cacica se fue sola a un pozo. Se fue de noche y se fue sola, y nadie fue con ella. Allá estaba ella y miraba hacia el fondo. Entonces dijo: “¡Venga, agua!”, y dejó caer un poco de saliva en el pozo.

De ese pozo se fue al otro, y del otro al otro. En cada uno miró hacia el fondo, llamó al agua y dejó caer un poco de saliva. Así lo hizo con todos los pozos, y entonces regresó y se puso a dormir.

Por la mañana los hombres fueron a los pozos y los encontraron llenos de agua buena y dulce. Estaban llenos todos los pozos que ellos habían cavado, hasta el que quedaba más allá. “¡Aquí está el agua!”, dijo la Gran Cacica.

Así es que los Chimila tienen buen agua. Buen agua y agua dulce, la de los pozos que la Gran Cacica mandó cavar.`,
    historia: `Es el séptimo relato de Mitos y cuentos de los indios Chimila, publicado por Gerardo Reichel-Dolmatoff en el Boletín de Arqueología en 1945. Como el resto del corpus, viene del cacique Tangrutaya Mutsu, anciano septuagenario, que narraba de noche, recostado en su hamaca, en voz baja, despacio y en un castellano a veces confuso, sólo ante hombres y cortando el relato cuando entraba una mujer. Vale detenerse en la ironía de la procedencia: el único relato del grupo cuya protagonista es una mujer con mando nos llega desde una situación en la que las mujeres no podían estar.

El comentario que el recopilador añadió es suyo. Encontró el mito muy interesante porque habla de la Gran Cacica, figura legendaria que, escribió, hace pensar en un matriarcado antiguo entre los Chimila, evidentemente de origen arawak. Leyó la fórmula se puso a dormir como indicación probable de una actitud mágica, y anotó que la creación mítica de elementos por el acto de escupir es muy común. Son hipótesis de la antropología difusionista de su momento, no palabra del narrador.

El respaldo más sólido está en su propio trabajo de campo, publicado un año después en Etnografía chimila. Allí escribe que el cacicazgo se hereda siempre por línea materna, que puede desempeñarlo un hombre o una mujer, y que entre los Chimila encontró varias mujeres cacicas que ejercieron esa posición, tal vez con más energía que los hombres; que donde los habitantes vivían relativamente en paz eran las mujeres las que ejercían el mando; y remite expresamente a una leyenda chimila en la cual se habla de la Gran Cacica, figura que en esa tradición aparece como héroe cultural, enviando al lector a la página 9 del Boletín, es decir a este mismo relato. La figura, entonces, no es sólo literaria.

El mismo libro describe el problema que el relato resuelve. El territorio es de superficie plana, inundable en la época lluviosa, con grandes lagunas y pozos de agua salada; los pozos y cañadas que no se secan en el corto verano son criaderos de plagas, y el autor escribe que la falta de agua potable es tremenda. El párrafo termina, eso sí, con un juicio evolucionista sobre la región y sus habitantes que hoy no se sostiene y que conviene leer como lo que es: la voz de su disciplina en 1946.

Las fuentes contemporáneas no comentan el episodio de los pozos, pero enmarcan el agua. El Documento madre de la ONIC recoge que la tierra de abajo es oscura, poblada por criaturas monstruosas que habitan en lo más profundo del agua, y que a ese lugar sólo se puede acceder por algunos pozos de agua, en su mayoría desconocidos; consigna también que el cacicazgo puede ser ejercido por un hombre o por una mujer. Juan Camilo Niño Vargas describe los manantiales como morada de espíritus dedicados a la cosecha de peces y reparte las lluvias entre Yaau, en la primera mitad del año, y Numirinta, en la segunda: los humanos cavan, pero hacer aparecer el agua es trabajo de otro orden de seres.`,
    versiones: `De este relato existe un solo testimonio documentado, y hay que decirlo con esas palabras: una sola versión, de un solo narrador, en una sola noche de la que no sabemos la fecha. La antología de Miguel Rocha Vivas reedita literatura ette y la contextualiza, pero pertenece a la misma cadena. Tener un testimonio único tiene consecuencias concretas aquí: no sabemos cuántos pozos eran, no sabemos si la Gran Cacica tenía nombre, y no sabemos si otras versiones explicaban por qué duerme antes de actuar.

El texto es avaro y esta revisión respeta esa avaricia. Dice mandó cavar, dice se puso a dormir, dice se fue sola, dice “¡Venga, agua!”, dice dejó caer un poco de saliva. No hay ceremonia, no hay canto, no hay ayudantes ni objetos. La versión anterior de esta página añadía montañas rebeldes, sabiduría abstracta y un recorrido heroico; nada de eso está en la fuente y se retiró, junto con las frases que comentaban el texto desde dentro del relato.

Las fuentes contemporáneas no traen otra versión de este episodio, pero sí nombran figuras con las que es tentador confundir a la Gran Cacica. Está Yunari Kraari, la Tierra Madre de cuyo canto se dice que los arroyos son sus venas y las aguas su sangre, en el texto que Andrea Paola Buitrago Rojas reproduce de la antología de Rocha Vivas. Y están Yaau y Numirinta, responsables de las lluvias. Ninguna fuente identifica a la Gran Cacica con Yunari ni con ninguna diosa, y esta revisión tampoco lo hace. En 1945 la Gran Cacica ordena, duerme, pregunta, sale sola de noche y escupe: es una autoridad humana, y el relato no la llama diosa en ningún momento.

Conviene además distinguir lo que el propio recopilador propuso de lo que documentó. El matriarcado antiguo de origen arawak es una hipótesis suya de 1945. Lo que sí queda verificado en su etnografía de 1946 es más modesto y más útil: cacicazgo heredado por línea materna y mujeres cacicas efectivamente observadas en el terreno.`,
    similitudes: `Un paralelo cercano y documentado está entre los misak, en el relato de Teresita de la Estrella que Andrea Paola Buitrago Rojas reproduce de la compilación de Miguel Rocha Vivas. Allí caen luces sobre una laguna hasta que sale una niña, y esa niña será la primera cacica, la primera autoridad, venida de la laguna de Ñimpi. Agua y cacica aparecen atados en los dos casos, y en direcciones opuestas: entre los misak la autoridad sale del agua, entre los ette el agua acude a la autoridad y llena huecos que otros cavaron.

El segundo paralelo lo trajo el propio recopilador al comentar otro cuento del corpus. Entre los katío, según el texto que transcribe de Rochereau, tampoco había agua; mandaron mensajeros a buscarla por todas partes y no la encontraron, hasta que un colibrí descubrió que una mujer llamada Gentsera entraba por una puerta invisible a un árbol colosal, el jenené, dentro del cual había una inmensidad de agua. Caragabí mandó fabricar hachas y derribar el árbol; al caer, el tronco se volvió el mar y los brazos los ríos, y Gentsera quedó convertida en hormiga. El punto de partida es igual, un pueblo sin agua que la busca; el desenlace es el contrario. Allá el agua estaba escondida y se libera destruyendo; acá no hay nada escondido ni nada que derribar, y el agua sube desde abajo cuando la llaman.

Dentro del mismo corpus chimila hay una tercera pieza que conviene leer al lado. En El palo de agua, un hombre clava un palo en la tierra y reta a sus tres hijos a sacarlo; el tercero lo arranca y con el palo sale al mismo tiempo un chorro de agua. La tradición ette guarda entonces las dos imágenes: el agua que brota cuando se saca algo de la tierra y el agua que sube cuando se abre un hueco y se la llama.`,
    leccion:
      "El pozo más hondo sigue seco hasta que alguien sabe qué decirle al agua.",
    sceneHorizontal:
      "la Gran Cacica se inclina sobre varios pozos secos mientras la comunidad termina de cavarlos en una sabana montañosa",
    sceneVertical:
      "al amanecer, uno de los pozos rebosa agua dulce y la comunidad se reúne alrededor de la Gran Cacica",
    researchNotes:
      "CORRECCIÓN: no se inventa una diosa, rito o genealogía. AUTORIDAD: se conserva explícitamente el título Gran Cacica.",
  }),
  myth({
    slug: "el-maiz",
    sourceKeys: [
      "reichel1945",
      "rocha2010",
      "mincultura2024",
      "onic2023",
      "nino2008",
      "vargasmotivo2022",
      {
        key: "reichelDolmatoffEtnografia1946",
        summary:
          "Recoge en el terreno el eco doméstico del mito: los chimila insistían en que las piedras de moler no eran suyas y le repitieron que los antiguos no tenían piedra de moler porque no tenían maíz, y que al recibirlo fueron a buscar las piedras que hallaron en la tierra.",
        limitation:
          "No narra el episodio del árbol: es un dato sobre utensilios y sobre cómo se contaba la llegada del maíz, recogido por el mismo autor del corpus.",
      },
      {
        key: "vargasdivision2020",
        summary:
          "Detalla el estatuto del maíz: cada divinidad reclama lo producido en un tipo de campo, los ette asocian las Pléyades a las variedades de maíz, y los árboles que quedan en pie dentro de los cultivos se entienden como la yuca y el maíz de las divinidades.",
        limitation:
          "No narra el mito del árbol: describe el ciclo agrícola y la relación con los dioses en la práctica contemporánea.",
      },
      {
        key: "vargascasa2024",
        summary:
          "Muestra qué se hace hoy con la semilla que el relato obtiene: el desván del techo guarda las mazorcas más bellas recolectadas, las que darán los granos de la próxima siembra, rodeadas de un aura sagrada manifiesta en los mitos que las hacen descender de ceibas primordiales.",
        limitation:
          "La referencia a las ceibas es una mención de paso dentro de un estudio de arquitectura.",
      },
      {
        key: "vargasBajo2025",
        summary:
          "Explica por qué el maíz no es un alimento más: los ette dicen ser los frutos de maíz más bellos sembrados por las divinidades y se describen como maíz recién germinado frente al maíz echado a perder de las humanidades pasadas, de modo que conseguir la semilla equivale a asegurar la propia condición humana.",
        limitation:
          "No relata el episodio del árbol y presenta el material ette dentro de una comparación amplia donde ocupa pocos párrafos.",
      },
    ],
    title: "La ceiba que guardaba el maíz",
    summary:
      "La semilla de maíz estaba en lo alto de una ceiba que se reparaba cada noche; los Ette lograron derribarla trabajando sin interrupción.",
    tags: ["maíz", "ceiba", "trabajo colectivo", "semilla"],
    mito: `Antes los Chimila no tenían maíz. Los Aruacos sí tenían mucho y eran gordos. Los Chimila no tenían ni un grano. Comían yuca, comían hierbas y comían los animales que cogían en el monte, y nada más.

Pero arriba, en lo más alto del árbol ceiba, allá había como una tusa, y allá estaba guardada la semilla del maíz. Entonces los Chimila dijeron: “¡Vamos a cortar el árbol para coger la semilla y sembrarla!”.

Así fue, y los hombres se fueron al monte para tumbar la ceiba. Cortaron y cortaron todo el día y no alcanzaron a tumbarla. Como no pudieron tumbarla el mismo día, regresaron a sus casas y volvieron por la mañana. Pero allá estaba el árbol, bueno y sano, como si nunca le hubieran cortado. No se veía dónde habían abierto la madera. No se veía nada.

Trabajaron otro día y tampoco pudieron tumbar el árbol, y así regresaron la próxima mañana. Otra vez el árbol estaba allá bien compuesto, y no hubo muestra del trabajo del día anterior.

Así siguieron los hombres mucho tiempo, muchos días seguidos. De día cortaron y cortaron, pero nunca alcanzaron a tumbarlo del todo. De noche el árbol se compuso otra vez, y crecía más y más. Cada mañana los hombres llegaban al monte y encontraban entera la madera que habían abierto el día anterior, y cada mañana había más árbol que tumbar.

Entonces dijo un hombre: “¿Por qué no vamos también a trabajar de noche?”. Así fue. Los hombres trabajaron todo el día y, cuando cayó la noche, no regresaron a sus casas sino que siguieron trabajando. Siguieron cortando en la oscuridad. A media noche tumbaron la ceiba.

Entonces cortaron la tusa y cogieron la semilla que estaba guardada allá arriba y la sembraron.

Así fue como los Chimila encontraron el maíz.`,
    historia: `Es el octavo relato de Mitos y cuentos de los indios Chimila, que Gerardo Reichel-Dolmatoff publicó en el Boletín de Arqueología en 1945, entre las páginas 8 y 9. Como todo el corpus, viene del cacique Tangrutaya Mutsu, anciano septuagenario, que narraba de noche, recostado en su hamaca, en voz baja, despacio y en un castellano a veces confuso, sólo ante hombres, interrumpiéndose cuando entraba una mujer, y sin contarlo nunca a los niños.

El comentario que el recopilador escribió a continuación es el más extenso de todo el volumen, y es suyo. Sitúa el cuento en el ciclo del árbol de la vida y reconstruye su base: un gran árbol en cuya cúspide crecían todos los frutos o semillas indispensables y en cuyo tronco estaba el agua con los pescados y las tortugas, que los indios tuvieron que tumbar contra dificultades inesperadas y con ayuda de los animales. Transcribe entonces el texto cuna del padre Adrián de Santo Tomás, la corta del Palu-úala publicada por Wassén, el cuento katío del jenené, el huitoto y el de los karib de Guayana recogido por Im Thurn; lista arekúna, taulipáng, akawoi, kariri, apinayé, chané y wapisana; recuerda la lectura de Preuss sobre el árbol luna y la de Ehrenreich sobre la Vía Láctea; y termina proponiendo un nexo con un cuento de las islas Palau, en Micronesia. También anota que el relato chimila del Palo de agua pertenece seguramente al mismo ciclo. Todo eso es aparato comparativo del recopilador, no palabra del narrador.

Conviene notar una diferencia dentro de ese mismo aparato. En la variante cuna que él transcribe, Ibelele averigua en sueños que una rana enorme va cada día a lamer la parte cortada y manda matarla. En el texto chimila nadie descubre quién compone el árbol: los hombres no encuentran culpable y simplemente dejan de irse.

El eco doméstico del relato aparece en Etnografía chimila, del mismo autor, un año después. Allí escribe que los chimila insistían en que las piedras de moler no eran de ellos sino encontradas en el terreno y fabricadas por otros indios, tal vez aruacos, y que varias veces le aseguraron: los antiguos no tenían piedra de moler pues no tenían maíz, y cuando recibieron el maíz fueron a buscar piedras y encontraron estas en la tierra. Eso explica por qué el cuento abre comparándose con los Aruacos.

Las fuentes recientes muestran qué es el maíz para los ette. Juan Camilo Niño Vargas registra que las Pléyades se identifican con variedades de maíz y que los árboles dejados en pie dentro de los cultivos se entienden como la yuca y el maíz de las divinidades; documenta que el desván del techo guarda las mazorcas más bellas, rodeadas de un aura sagrada manifiesta en los mitos que las hacen descender de ceibas primordiales; y en un ensayo comparativo recoge que los ette se dicen maíz recién germinado frente al maíz echado a perder de las humanidades pasadas. En el reportaje del Ministerio, César Rozo cuenta que Yaau y Numirinta bajaron a la laguna de la sabana de San Ángel y convirtieron dos mazorcas de maíz cariaco en los Ette Ennaka.`,
    versiones: `Aquí hay dos versiones distintas y no deben fundirse.

La de 1945 es la que narró Tangrutaya Mutsu. En ella no interviene ninguna divinidad. La semilla está guardada en algo como una tusa en lo más alto de la ceiba, los hombres deciden por su cuenta tumbar el árbol, la dificultad es que de noche se compone y crece más, la solución es no volver a casa, y al final cortan la tusa, cogen la semilla y la siembran. No hay ladrón, no se pierde nada y el cuento termina ahí.

La otra la publicó Juan Camilo Niño Vargas en 2022, en la revista Literatura: teoría, historia, crítica, a partir de su propio trabajo en el territorio ette. Allí la ceiba tenía el tronco mucho más grueso que cualquier ceiba actual y de sus ramas colgaban cientos de mazorcas, un fruto desconocido entonces; el gran dios Yaau animó a los humanos a abatir el árbol y apoderarse de esos granos; la tarea resultó mucho más dura de lo esperado y les exigió trabajar sin descanso durante muchos días; y cuando el tronco por fin cede, un oscuro personaje entra en escena, roba las más bellas mazorcas y le deja a la humanidad granos de segunda clase. Los ette remiten a ese suceso el origen del maíz y de las plantas cultivadas, la dureza de los trabajos agrícolas y el pobre rendimiento de sus cosechas. Es decir: la versión reciente explica tres cosas que la de 1945 no explica, y para hacerlo añade un dios al comienzo y un robo al final.

El mismo autor recoge además que los ancianos describen hoy la ceiba primordial como un mundo en miniatura, con agua y semillas dentro del tallo abombado y plantas y animales sobre el follaje, y que la tienen por una planta de maíz sembrada por Yaau, aunque a los ojos humanos pareciera un árbol. Nada de eso está en 1945, donde no hay agua dentro del tronco ni dios que haya sembrado la ceiba.

Frente al texto heredado, esta revisión devolvió el relato a la secuencia documentada y sacó de él las frases que lo comentaban desde dentro. La grafía Aruacos se conserva porque es la de la fuente, y corresponde a quienes hoy se nombran arhuacos o iku.`,
    similitudes: `El paralelo más cercano es el cuna, y está transcrito en las mismas notas de 1945. En La corta del Palu-úala, publicada por Wassén, Ibelele manda cortar el árbol porque en él hay muchas plantas comestibles; los hombres cortan un jeme y vuelven a la casa; a la mañana siguiente encuentran sanada la parte cortada y empiezan de nuevo, y otra vez lo mismo. La diferencia está en el desenlace. Ibelele averigua en sueños que una rana enorme llega cada día a lamer el corte, manda matarla y condena su cuerpo a ser alimento de las culebras. En el relato chimila nadie averigua nada: el obstáculo no tiene cara ni nombre ni castigo, y se vence sólo porque los hombres dejan de irse a dormir.

El segundo es katío, también transcrito por el recopilador a partir de Rochereau. Allí Caragabí manda fabricar hachas de hierro para derribar el jenené, y cada día encuentran el gran árbol sin lesión alguna, hasta que las hachas se gastan; el árbol acaba cayendo con ayuda de los animales, y al caer todo se inunda: el tronco se vuelve el mar y los brazos, los ríos. La caída ette no inunda nada ni hace geografía. Cae la ceiba, se corta la tusa, se siembra el grano y se acabó.

Un tercero, de los karib de Guayana según Im Thurn, sirve para marcar dónde está el trabajo. Allá la yuca, el plátano y todo lo útil crecían en un solo árbol enorme, y la dificultad principal es averiguar dónde queda: mandan al carpintero y luego a la rata a seguir a la danta. En el cuento chimila el lugar del árbol se sabe desde la primera línea, y la dificultad es de otro orden.

La antología que compiló Miguel Rocha Vivas señala la tala del gran árbol como uno de los dos motivos comunes a las literaturas ette, barí, yukpa, wayuu, kuna tule, embera katío, embera chamí, wounán y awá que reúne; y entre los barí, según Niño Vargas, Sabaseba tumbó uno o varios árboles, a veces identificados con ceibas, para liberar el agua que contenían.`,
    leccion:
      "Lo que se rehace cada noche solo cede ante quienes deciden no irse a dormir.",
    sceneHorizontal:
      "varias personas cortan una ceiba gigantesca durante el día mientras una tusa de maíz aparece entre las ramas más altas",
    sceneVertical:
      "a medianoche la ceiba finalmente cae y unas manos recogen las semillas de la tusa para llevarlas a la siembra",
    researchNotes:
      "CORRECCIÓN: se retiran dioses y lenguaje de hazaña no presentes. ACCIÓN CENTRAL: impedir la regeneración nocturna mediante trabajo continuo.",
  }),
  myth({
    slug: "el-gran-verano",
    sourceKeys: [
      "reichel1945",
      "rocha2010",
      "mincultura2024",
      "nino2008",
      {
        key: "vargasdivision2020",
        summary:
          "Documenta que los ette llaman gran verano a la gran estación seca y que la siembra principal ocurre entre marzo y abril, justo al final de ella, cuando hombres y mujeres se reúnen a repartir los gérmenes de una veintena de cultivos con decenas de variedades de maíz.",
        limitation:
          "Es etnografía contemporánea de los resguardos actuales: no comenta el relato ni la práctica de guardar semilla en mochila.",
      },
      {
        key: "reichelDolmatoffEtnografia1946",
        summary:
          "Del mismo trabajo de campo que produjo los relatos: describe la horticultura, con roza y limpieza en trabajo común de los hombres y cosecha por familias, el predominio de yuca dulce y maíz, y un medio de pozos y cañadas que durante el corto verano no se secan, con una falta de agua potable tremenda.",
        limitation:
          "El autor nunca enlaza esas observaciones con este cuento ni registra almacenamiento de semilla.",
      },
      {
        key: "vargasmotivo2022",
        summary:
          "Reúne el testimonio de ancianos ette sobre la ceiba primordial como un mundo en miniatura que guardaba agua y semillas dentro del tallo, y explica que de su tala se derivan el origen del maíz, la dureza del trabajo agrícola y el pobre rendimiento de las cosechas.",
        limitation:
          "Trata el mito de la ceiba y el origen del maíz, no la sequía prolongada ni la semilla rescatada después.",
      },
      {
        key: "zuluagaEntre2015",
        summary:
          "Transcribe testimonios de 1778 y 1779 sobre los parajes asignados a los chimila: el visitador exige comprobar antes de fundar si el paraje tiene buenas aguas y terreno para las rozas, y denuncia uno tan árido que en verano no da agua sino a costa de gran trabajo.",
        limitation:
          "Es documentación colonial escrita por misioneros y visitadores, sobre los pueblos de misión y no sobre la tradición oral.",
      },
      {
        key: "bolinderultimos1987",
        summary:
          "Registro de las visitas de 1915 y 1920 al Ariguaní: los chimila vivían sobre todo del maíz y la yuca dulce, sembraban con coa en un bosque mal desmontado y el cultivo tenía apariencia muy miserable, con escasez de alimentos declarada.",
        limitation:
          "Son dos visitas muy cortas de un viajero europeo, publicadas en traducción décadas después, que no describen sequías largas ni reservas de semilla.",
      },
    ],
    title: "La semilla guardada durante el gran verano",
    summary:
      "Tras años de sequía, una semilla de maíz conservada en una mochila de fique permite reiniciar el cultivo sobre un tronco todavía húmedo.",
    tags: ["sequía", "maíz", "semilla", "fique"],
    mito: `Hace mucho tiempo hubo un gran verano. No fue uno de esos veranos que llegan y se van cuando les toca: duró años y años, y en todos esos años no cayó lluvia.

Los ríos se secaron. Las cañadas se secaron también. Donde antes bajaba el agua quedó el cauce seco, y en el cauce no quedó nada para tomar.

Hubo gran hambre y muchos indios murieron. Los que quedaron vivos pasaron ese tiempo sin sembrar y sin cosechar.

La tierra se quemó. Con la tierra se quemaron los sembrados, y al perderse los sembrados no hubo maíz ni yuca, que era de lo que vivía la gente.

Por fin pasó el gran verano. Pero cuando pasó y llegó el momento de volver a sembrar, apareció el otro daño: con los sembrados se había perdido también toda la semilla del maíz. No quedaba grano guardado en ninguna casa.

Entonces los hombres se lo preguntaron en voz alta unos a otros: «Qué vamos a hacer sin maíz? Se perdió la semilla y no tenemos para sembrar».

Pero un hombre había guardado un poco de semilla en una mochila de fique. La había guardado antes, y ahí estuvo el maíz todo el tiempo que duró el gran verano, adentro de la mochila tejida de fibra, sin sembrarse y sin comerse. Ahora el hombre sacó la mochila y dijo: «Aquí está la semilla».

Había semilla otra vez, pero no había dónde ponerla. La roza, que es el pedazo de monte tumbado y quemado donde se siembra, estaba tan seca y tan caliente como la había dejado el verano. En la roza no podían sembrar.

Así que no sembraron en la roza. Tuvieron que sembrar la semilla en otra parte, y la sembraron en un tronco de árbol.

Pronto creció el maíz ahí, en el tronco. Dio buena cosecha y así hubo otra vez comida.`,
    historia: `Este es el noveno de los veintiún relatos que el cacique Tangrutaya Mutsu, anciano septuagenario, le contó a Gerardo Reichel-Dolmatoff y que se publicaron en 1945 en «Mitos y cuentos de los indios Chimila». El propio recopilador describe cómo los recibió: de noche, con el cacique recostado en su hamaca, en voz baja, en forma lenta y en un castellano a veces confuso. Anota además que el anciano insistía en narrar sólo ante hombres, que interrumpía cuando una mujer entraba a la casa y que estos cuentos no se relatan a los niños. En un cuento sobre la pérdida y la recuperación del maíz, esa condición importa porque conocemos la versión de un solo hombre, dicha en una lengua que no era la suya y escrita por otro.

Del comentario del propio Reichel-Dolmatoff a este número sale una lectura que conviene no confundir con lo narrado: él supone que el cuento «se relaciona con las leyendas del Incendio Mundial» y que sembrar el maíz en un tronco lo emparenta con el mito del «árbol de la vida». Es su comparación, no algo que diga el narrador.

La «Etnografía chimila» de 1946, salida del mismo trabajo de campo, describe la horticultura que el cuento presupone: los cultivos en grandes deshechos circulares alrededor de los poblados, la roza y la limpieza hechas en común por los hombres, el cuidado y la cosecha a cargo de cada familia, el predominio de la yuca dulce y el maíz, y la siembra como privilegio de los hombres. En ese mismo volumen se lee que los pozos y cañadas que no se secan durante el corto verano son criaderos de plagas y que «la falta de agua potable es tremenda», y que en tiempos de sequía es el shamán quien llama la lluvia. Reichel-Dolmatoff nunca enlaza esas páginas con este cuento ni registra en ninguna parte que se guardara semilla.

Las demás fuentes rodean el relato sin tocarlo. La etnografía contemporánea de los campos ette publicada en 2020 documenta que hoy se llama gran verano a la larga estación seca y que la siembra principal ocurre entre marzo y abril, al final de ella, cuando hombres y mujeres se reúnen a repartir los gérmenes de una veintena de cultivos con decenas de variedades de maíz. Los documentos coloniales transcritos en 2015 muestran que el acceso al agua decidía dónde podía fundarse un pueblo: el visitador de 1778 exige comprobar si el paraje tiene buenas aguas y terreno para las rozas, y denuncia uno tan árido que en verano no da agua sino a costa de gran trabajo. Las visitas de 1915 y 1920 al Ariguaní publicadas en 1987 describen un cultivo de maíz y yuca dulce de apariencia muy miserable y escasez de alimentos declarada. El estudio de 2008 sobre ciclos de destrucción y regeneración entre los ette da el marco en el que una catástrofe no cierra la historia sino que abre otra vuelta. La antología de Miguel Rocha Vivas reedita el corpus como literatura ette, y el reportaje del Ministerio de las Culturas de 2024 recoge voces de Luis Eduardo Granados y César Rozo y emplea el nombre con el que el pueblo se nombra hoy, Ette Ennaka.

Nada de eso alcanza a decir de qué árbol era el tronco, cuándo ocurrió la sequía ni si alguien más contó este cuento.`,
    versiones: `De este relato existe una sola versión documentada: la que Tangrutaya Mutsu narró en castellano y Reichel-Dolmatoff publicó en 1945. La antología de Miguel Rocha Vivas la reproduce, de modo que pertenece a la misma cadena y no cuenta como un segundo testimonio. Tener un solo testimonio significa que no hay con qué contrastar lo que el narrador incluyó o dejó por fuera: no sabemos si otras casas contaban un gran verano más largo o más corto, si el hombre de la mochila tenía nombre, ni si alguna versión explicaba por qué el tronco sirvió y la roza no.

Lo que sí cambia entre 1945 y hoy es el sentido de la expresión que da título al cuento. En la etnografía de los campos ette de 2020, gran verano es el nombre corriente de la estación seca larga, la que termina en marzo o abril justo cuando se siembra. Leído contra ese uso, el cuento no habla de un fenómeno sin nombre sino de la estación conocida estirada hasta volverse mortal.

Hay también una divergencia entre las dos descripciones del trabajo agrícola. La «Etnografía chimila» de 1946 afirma que la siembra es privilegio de los hombres; la etnografía de 2020 describe a hombres y mujeres reunidos repartiendo los gérmenes de los cultivos antes de sembrar. En el cuento sólo hablan los hombres, y quien guardó la semilla es un hombre.

Frente al texto heredado, esta revisión corrige varias cosas. El relato anterior convertía el episodio en una historia de resiliencia individual, hacía que «la comunidad» eligiera el tronco cuando el texto de 1945 no dice quién lo decidió, y explicaba que allí se conservaba «la humedad necesaria», explicación que tampoco está. También metía dentro del relato frases sobre el relato mismo —que no hay premio, que la semilla no es mágica, que la ficha heredada exageraba—, y comparaciones con el cuento de la ceiba. Todo eso sale del Relato y, cuando corresponde, queda aquí.`,
    similitudes: `Dentro del mismo corpus hay dos relatos que tocan este de cerca. En «El diluvio», después de que el agua cubre la tierra y mata a casi todos, los sobrevivientes deciden secar el monte con candela, el viento la propaga y se queman los sembrados y las casas; el cuento termina con la gente yéndose a sembrar y a hacer casas nuevas. La diferencia está en quién causa el segundo desastre: allí lo causan los propios sobrevivientes y el reinicio no depende de ninguna reserva, mientras que aquí nadie provoca nada y todo depende de una mochila. En «Cómo los Chimila consiguieron el maíz», la semilla está arriba, en una tusa en la copa de la ceiba, y hay que tumbar el árbol de noche para bajarla. Allí la madera guarda la semilla; aquí la madera la recibe. Esa inversión es la que llevó al recopilador a emparentar los dos cuentos con el ciclo del «árbol de la vida».

Ese ciclo está documentado en el mismo volumen de 1945 con textos de otros pueblos. En el relato karib de Guayana que allí se transcribe, la yuca y todas las plantas útiles crecían en un solo árbol enorme, descubierto por la danta y derribado con hachas de piedra tras meses de trabajo; cada hombre se llevó pedazos y los sembró en su propio campo. La diferencia con el cuento ette es de escala y de dirección: allí la abundancia se reparte al derribar un árbol único y del reparto nace la agricultura entera, mientras que aquí la agricultura ya existía, se perdió, y vuelve por un puñado de granos que alguien había apartado.

Hay además un testimonio ette posterior que conviene no confundir con este cuento. En el estudio de 2022 sobre el motivo del gran árbol, ancianos ette describen la ceiba primordial como un mundo en miniatura que guardaba agua y semillas dentro del tallo, y explican que de su tala vienen el origen del maíz, la dureza del trabajo agrícola y el pobre rendimiento de las cosechas. Es el mismo pueblo y una madera que contiene, pero es otro relato: allí se explica por qué cuesta tanto cultivar, y aquí por qué, después de que todo se perdió, todavía hubo con qué empezar.`,
    leccion:
      "Lo que salva no siempre es lo más grande sino lo poco que alguien pensó en guardar.",
    sceneHorizontal:
      "una sabana seca con ríos vacíos y una persona que abre una mochila de fique donde permanecen unas pocas semillas de maíz",
    sceneVertical:
      "el primer maíz vuelve a crecer sobre un tronco húmedo mientras la comunidad prepara una nueva siembra",
    researchNotes:
      "CORRECCIÓN: no se individualiza una gesta heroica ni se inventa especie de árbol. DISTINCIÓN: no duplica el origen del maíz.",
  }),
  myth({
    slug: "el-algodon",
    sourceKeys: [
      "reichel1945",
      "rocha2010",
      "mincultura2024",
      {
        key: "reichelDolmatoffEtnografia1946",
        summary:
          "Describe el intenso cultivo del algodón y todo su proceso: las mujeres lo recogen y lo apalean con un bastón tallado, hilan torciendo sobre el muslo y tejen telas y hamacas, y señala que las hamacas de algodón son un elemento más antiguo que las telas.",
        limitation:
          "No recoge el episodio del algodón entregado a otro pueblo ni discute intercambios de semilla entre grupos.",
      },
      {
        key: "bolinderultimos1987",
        summary:
          "Contrapunto exacto del relato: en 1915 sólo vio entre los chimila hamacas de algodón teñidas, mientras anota que los vecinos de la Sierra sólo tienen hamacas de fibra de corteza y los guajiros, más lejos, de ambas clases.",
        limitation:
          "Es observación de dos visitas breves, y el gentilicio que usa en 1915 no coincide exactamente con el pueblo que nombra el relato.",
      },
      {
        key: "vargastejido2014",
        summary:
          "Muestra qué significa hoy el algodón entre los ette: las hamacas se hacen con una especie concreta, con dos hilos de patrón contrario, y su confección es de principio a fin asunto femenino, al punto de que el tejido materializa el modelo del cosmos.",
        limitation:
          "Trata la hamaca y la cosmología, no el origen de la semilla ni su paso a otro pueblo.",
      },
      "villamilMemorias2020",
      "thurnAmong1883",
    ],
    title: "La semilla de algodón compartida",
    summary:
      "Papá Grande entrega algodón a la primera persona Ette; después, un hombre comparte semillas con un Aruaco pese a la enemistad entre los pueblos.",
    tags: ["algodón", "semilla", "intercambio", "Aruacos"],
    mito: `Cuando los primeros Ette bajaron a la tierra ya tenían el algodón. No lo buscaron después ni lo encontraron por ahí: bajó con ellos. Papá Grande le había dado al primer Ette una mochilita con semilla, y esa mochilita hizo el viaje con él. Así que el algodón no llegó a esta tierra después de la gente, sino al mismo tiempo que la gente y en manos suyas.

Los Aruacos no tenían algodón. No tenían la mata sembrada ni tenían el grano con que sembrarla. Tampoco tenían cómo conseguirlo, porque los Ette eran sus enemigos, y del otro lado de una enemistad no se consigue semilla.

Entonces, un día, un Aruaco vino a la casa de un Ette. Llegó hasta la casa misma, que era la casa de un enemigo suyo, y pidió lo que había venido a pedir: «Regálame un poco de semilla para sembrar algodón».

El Ette le dijo que no. No le dijo que la semilla fuera poca ni que fuera suya. Le dijo lo que iba a pasar después: «No puedo regalártela porque somos enemigos y si tú siembras algodón, los otros Aruacos sabrán que tú viniste aquí y van a matarte». Lo que delataba al visitante no era la visita sino la mata: un algodonal creciendo donde antes no crecía ninguno, en tierra de gente que no tenía la semilla.

El Aruaco no retiró la petición y no discutió la advertencia. Volvió a decir lo mismo, ahora sin explicación y sin trato: «Regálamela!».

Así el Ette le regaló un poco de semilla. Un poco fue lo que pidió y un poco fue lo que le dieron.

El Aruaco se llevó el poco de semilla, se fue con ella de vuelta y la sembró. Sembró algodón en tierra de Aruacos, donde antes no había algodón. Y no lo mataron.

Así fue como los Ette les regalaron el algodón a los Aruacos.`,
    historia: `Este es el décimo de los veintiún relatos que el cacique Tangrutaya Mutsu le narró a Gerardo Reichel-Dolmatoff y que se publicaron en 1945 con el título «Cómo los Chimila regalaron el algodón a los Aruacos». El recopilador anota que los recibió de noche, con el cacique recostado en su hamaca, en voz baja y lenta y en un castellano a veces confuso, y que el anciano insistía en contarlos sólo ante hombres. Conviene tenerlo presente en este caso, porque el algodón que el cuento hace circular es materia de trabajo femenino: en la «Etnografía chimila» de 1946, del mismo trabajo de campo, son las mujeres quienes recogen el algodón en los cultivos, lo apalean con un bastón largo y aguzado, lo hilan torciéndolo sobre el muslo derecho y tejen con él telas y hamacas. Quien cuenta el origen de esa semilla, en el registro que tenemos, es un hombre que narraba sin mujeres delante.

El propio Reichel-Dolmatoff comentó este número, y su comentario es una hipótesis de difusión, no una glosa del narrador: sostiene que el maíz entró a Suramérica desde México y Centroamérica y que el algodón, propagado sobre todo por los Tupi-Guaraní, debió llegar mucho antes a manos chimila, y añade que «es sin embargo interesante ver la comprobación de esta teoría en las tradiciones». Es decir, lee el cuento como confirmación de una cronología arqueológica.

La misma etnografía de 1946 aporta el dato que vuelve reconocible la jactancia del relato: los chimila parecían ser entonces el único pueblo indígena de Colombia que seguía tejiendo sus hamacas enteramente de algodón, mientras la gran mayoría las hacía de fibra de palma, y las hamacas de algodón resultaban un elemento más antiguo que las telas. El registro de las visitas de 1915 y 1920 publicado en 1987 es el contrapunto exacto: el viajero sólo vio entre los chimila hamacas de algodón teñidas, y anotó que los vecinos de la Sierra sólo tenían hamacas de fibra de corteza y que los guajiros, más lejos, tenían de ambas clases. Ese mismo registro advierte que el gentilicio que usó en 1915 no coincide exactamente con el pueblo que el cuento llama Aruacos.

Las fuentes contemporáneas muestran qué pesa hoy ese material. El estudio de 2014 sobre la hamaca ette documenta que se teje con una especie concreta de algodón, con dos hilos de patrón contrario, y que su confección es de principio a fin asunto de mujeres, al punto de que el tejido materializa el modelo del cosmos. El registro del oficio publicado en 2020 afirma que el algodón y la fibra de majagua fueron esenciales en el desarrollo artesanal ette y que con ellos se hicieron mochilas, chinchorros y prendas. La antología de Miguel Rocha Vivas reedita el corpus como literatura ette, y el reportaje del Ministerio de las Culturas de 2024 recoge voces de Luis Eduardo Granados y César Rozo y usa el nombre con que el pueblo se nombra hoy, Ette Ennaka.

Ninguna de esas fuentes recoge el episodio del algodón entregado a otro pueblo, ni discute intercambios de semilla entre grupos vecinos.`,
    versiones: `De este relato hay una sola versión documentada, la de 1945, y la reedición de Miguel Rocha Vivas la reproduce sin añadir un testimonio nuevo. Un solo testimonio deja abiertas preguntas que el cuento no responde y nadie más responde: ni el Ette ni el Aruaco tienen nombre, no se dice de dónde venía el visitante ni a dónde volvió, y no se sabe si la donación se contaba también del otro lado de la Sierra.

El punto más resbaladizo es el nombre Aruacos. En el corpus de 1945 designa a los vecinos con los que hubo guerra —en «Primeras guerras» son los que habitaban antes esta tierra, eran muy ricos y fueron sacados por los chimila—, y en la «Etnografía chimila» de 1946 el recopilador recoge esa misma tradición y la considera posiblemente histórica. Pero el registro de 1915 publicado en 1987 advierte que el gentilicio de entonces no corresponde con exactitud al pueblo que el relato nombra, de modo que identificar sin más a los Aruacos del cuento con un pueblo actual de la Sierra Nevada sería ir más allá de lo que la documentación sostiene.

Las dos capas del relato tampoco se dejan fundir. La primera frase entrega el algodón por creación, en una mochilita que Papá Grande da al primer Ette; el resto lo hace circular por una transacción entre dos hombres que ni siquiera son amigos. El cuento pone las dos cosas seguidas sin explicarlas, y esta ficha las deja seguidas.

Frente al texto heredado, esta revisión corrige lo siguiente. El relato anterior afirmaba que el dueño de la semilla «no dijo que quisiera conservar un monopolio», atribuía la decisión final a un acto de generosidad y cerraba con párrafos sobre el propio relato: que el episodio es breve, que no hay tratado, que la versión anterior añadía campos prósperos, que las fuentes contemporáneas documentan el tejido. También nombraba al narrador dentro del cuento. Todo ese aparato sale del Relato. Lo que queda es lo que pasa: una semilla que bajó del cielo, una enemistad, una petición repetida, una advertencia que no se cumplió y un algodonal nuevo.`,
    similitudes: `El paralelo más cercano está en el mismo corpus, tres cuentos atrás. En «Cómo los Chimila consiguieron el fuego», el bien que falta lo tienen unos indios del otro lado del Gran Río que también son enemigos, y la manera de obtenerlo es el brujo Huhum convertido en el sapo Mamu, que cruza a nado, espanta a la gente sentada alrededor de la candela, se traga una braza y la escupe en la otra orilla. Las dos historias cruzan una enemistad con un bien de primera necesidad, pero en direcciones opuestas y con costos opuestos: allí el bien se toma con engaño y el brujo paga quedándose sapo para siempre; aquí el bien se da de frente, en la puerta de la casa, y el riesgo no lo corre quien da sino quien pide.

El segundo paralelo está aún más cerca, en el cuento del maíz. En «Cómo los Chimila consiguieron el maíz», los Aruacos son los que tienen de sobra —tenían mucho maíz y eran gordos— y los chimila los que comen sólo yuca, hierbas y animales del monte. Este relato invierte exactamente esa relación: el pueblo que en el cuento del maíz mira con hambre lo ajeno es aquí el que tiene lo que al vecino le falta, y lo entrega. La diferencia también está en el modo: el maíz hay que arrancárselo a un árbol que se cura de noche, y el algodón sólo hay que pedirlo dos veces.

Fuera del corpus ette, el mismo volumen de 1945 transcribe un relato karib de Guayana en el que, derribado el gran árbol donde crecían la yuca y todas las plantas útiles, cada hombre se lleva pedazos y los siembra en su propio campo, y desde ese día cada quien tiene su yucal. Allí el reparto ocurre hacia adentro, entre los del mismo pueblo, y funda la agricultura de todos. Aquí el reparto cruza una frontera hostil, beneficia a un solo hombre y no funda nada: sólo hace que en adelante los Aruacos también tengan algodón.`,
    leccion:
      "Una enemistad puede seguir en pie y aun así dejar pasar un puñado de semillas.",
    sceneHorizontal:
      "dos hombres adultos de comunidades distintas intercambian discretamente semillas de algodón junto a una pequeña parcela",
    sceneVertical:
      "una planta de algodón crece desde semillas guardadas en una mochila mientras unas manos preparan la fibra",
    researchNotes:
      "CORRECCIÓN: no se presenta una reconciliación total. CONTEXTO: el algodón vivo del pueblo se documenta fuera del relato.",
  }),
  myth({
    slug: "el-palo-de-agua",
    sourceKeys: [
      "reichel1945",
      "rocha2010",
      "mincultura2024",
      {
        key: "reichelDolmatoffEtnografia1946",
        summary:
          "Da el marco hídrico del relato: un terreno plano con lagunas y pozos de agua salada, donde los pozos y cañadas que no se secan durante el corto verano son criaderos de plagas y donde la falta de agua potable es tremenda.",
        limitation:
          "No menciona este cuento ni identifica ninguna especie con el nombre del título.",
      },
      {
        key: "vargasmotivo2022",
        summary:
          "Registra que los ancianos ette describen la ceiba primordial como un mundo en miniatura con agua y semillas dentro del tallo, y lo compara con el árbol de otra tradición vecina que guardaba agua dulce dentro del tronco: el motivo de la madera que contiene agua está documentado.",
        limitation:
          "El árbol que analiza es el del origen del maíz, no el palo clavado y arrancado de este relato.",
      },
      {
        key: "zuluagaEntre2015",
        summary:
          "Aporta la dimensión histórica del acceso al agua: el visitador de 1778 exige examinar si el paraje tiene buenas aguas antes de fundar un pueblo, y denuncia sitios donde en verano no hay agua sino a costa de gran trabajo.",
        limitation:
          "Son fuentes coloniales sobre los pueblos de misión: no recogen relatos ni prácticas propias de búsqueda de agua.",
      },
      {
        key: "vargasdivision2020",
        summary:
          "Explica quién manda sobre el agua en el mundo ette: la diosa desencadena las lluvias, que salen de sus movimientos al bailar, y el calendario de dos temporadas secas y dos lluviosas ordena todo el trabajo agrícola.",
        limitation:
          "Se ocupa del agua que cae del cielo sobre los campos, no del agua subterránea ni de manantiales.",
      },
      "teresaindios1959",
      "historicaCaragabi",
    ],
    title: "El palo que abrió el agua",
    summary:
      "Un padre prueba la fuerza de sus tres hijos; cuando el tercero arranca un palo clavado en la tierra, un chorro de agua surge del hueco.",
    tags: ["agua", "palo", "tres hermanos", "fuerza"],
    mito: `Un día, un hombre que tenía tres hijos se fue al monte y cortó un palo. Lo cortó él mismo, allá donde estaba, y volvió con el palo.

Ya de vuelta, clavó el palo en la tierra. Lo clavó bien clavado, hundido y derecho, hasta que quedó firme y no se movía para ningún lado. Lo dejó ahí parado, solo, en mitad de la tierra.

Entonces llamó a sus tres hijos. Los puso delante del palo y les dijo: «Vamos a ver cuál es el más fuerte de ustedes. Saquen este palo!». Esa era toda la prueba. Los tres estaban ahí, los tres oyeron lo mismo y a los tres les tocaba lo mismo: un palo metido en la tierra y las manos con que sacarlo.

El primero se acercó y lo agarró. Tiró de él con lo que tenía y no pudo sacarlo. El palo estaba bien clavado y no se movió.

Después lo intentó el segundo. Agarró el mismo palo, en la misma tierra, en el mismo hueco, y tampoco pudo sacarlo. El palo siguió ahí, parado, tal como lo había dejado el padre.

Entonces le tocó el turno al tercero. Hizo lo que habían hecho sus dos hermanos: cogió el palo y tiró. Y el palo salió.

En el mismo momento en que el palo salió de la tierra, por el hueco que quedó abierto salió también un chorro de agua. No hubo que cavar ni que esperar: salió el palo y salió el agua, al mismo tiempo.

El agua salió por donde había estado el palo. Antes de que el tercer hijo tirara, ahí no se veía agua: se veía un palo clavado en la tierra.

Por eso a este palo lo llaman Palo de Agua, con ese nombre y no con otro. Y no fue sólo aquella vez: cuando lo sacan de la tierra, sale mucha agua.

Así lo cuentan y así fue.`,
    historia: `Este es el undécimo de los veintiún relatos que el cacique Tangrutaya Mutsu, anciano septuagenario, le contó a Gerardo Reichel-Dolmatoff y que se publicaron en 1945. Es de los más cortos del corpus: ciento quince palabras en el original, con una prueba, dos fracasos, un acierto y una fórmula de cierre. El recopilador anota que el cacique narraba de noche, recostado en su hamaca, en voz baja y lenta y en un castellano a veces confuso, y que le repitió varias veces que creía en la verdad literal de lo contado: «Mis cuentos parecen mentira a mucha gente. La gente no sabe». Este cuento termina precisamente con esa afirmación de veracidad, «Así lo cuentan y así fue», y con un dato en presente: que cuando sacan ese palo, sale agua. No es sólo un origen, es una indicación.

El comentario del recopilador a este número es una sola línea remitiendo al número 8, el del maíz. Allí escribe que el cuento del «Palo de agua» «tiene nexos seguramente con el ciclo de los cuentos del árbol de la vida», y desarrolla ese ciclo con textos cuna, katío, huitoto y karib. Es su comparación, no algo que el narrador haya dicho.

La «Etnografía chimila» de 1946 no menciona este cuento ni identifica ninguna especie con el nombre del título, pero da el marco hídrico que lo hace legible: un terreno plano y muy reciente, inundable en la época lluviosa, con grandes lagunas y pozos de agua salada, donde los pozos y cañadas que no se secan durante el corto verano son criaderos de plagas y donde «la falta de agua potable es tremenda». En un lugar así, un palo que al arrancarse deja salir agua buena no es un adorno del relato: es lo que hacía falta.

Los documentos coloniales transcritos en 2015 confirman esa escasez desde otra orilla: el visitador de 1778 exige comprobar si el paraje tiene buenas aguas antes de fundar un pueblo para los chimila, y denuncia sitios donde en verano no hay agua sino a costa de gran trabajo. La etnografía de los campos ette publicada en 2020 describe en cambio la otra agua, la que cae: es la diosa quien desencadena las lluvias, que salen de sus movimientos al bailar, y el calendario de dos temporadas secas y dos lluviosas ordena el trabajo agrícola. El estudio de 2022 sobre el motivo del gran árbol recoge el testimonio de ancianos ette sobre la ceiba primordial como un mundo en miniatura con agua y semillas dentro del tallo, y muestra que la idea de madera que contiene agua está documentada en la región. La antología de Miguel Rocha Vivas reedita el corpus como literatura ette, y el reportaje del Ministerio de las Culturas de 2024 recoge voces de Luis Eduardo Granados y César Rozo y emplea el nombre Ette Ennaka.

Lo que ninguna fuente alcanza a decir es cuál es esa planta, si el nombre sigue vivo y si alguien la usó alguna vez para sacar agua.`,
    versiones: `De este relato existe una sola versión documentada: la de 1945. La antología de Miguel Rocha Vivas la reproduce y por tanto pertenece a la misma cadena, no a un segundo testimonio. Que haya un solo registro tiene consecuencias concretas aquí: los tres hijos no tienen nombre, el padre tampoco, no se dice dónde quedaba el monte ni si el chorro siguió corriendo después, y no hay manera de saber si otra casa contaba la prueba con otro número de hijos o con otro ganador.

Queda además una ambigüedad que el texto de 1945 no resuelve. El título va entre comillas, «Palo de Agua», y las dos últimas frases hablan en presente y en plural impersonal: «cuando lo sacan de la tierra, sale mucha agua». Eso puede leerse como el nombre de una planta que existe y se usa, o como la fórmula con que se cierra el origen de un nombre. Ninguna de las fuentes consultadas identifica esa especie: la «Etnografía chimila» de 1946, hecha en el mismo campo y el mismo año, no registra ningún palo con ese nombre.

La única lectura comparativa disponible es la del propio recopilador, que remite este cuento al ciclo del «árbol de la vida» y lo empareja con el del maíz. Conviene decir en qué falla el emparejamiento: en ese ciclo el agua está dentro de un árbol enorme que hay que derribar, y aquí el agua está debajo de la tierra y el palo es pequeño, cortado esa misma mañana y clavado por un padre. El palo no contiene el agua: la tapa.

Frente al texto heredado, esta revisión corrige varias adiciones. La ficha anterior hacía que el padre llevara el palo «hasta un lugar donde pudiera clavarlo profundamente», señalaba que no hubo burlas ni castigo, discutía si el tercer hijo era héroe o gobernante y comparaba el cuento con el de la Gran Cacica, todo dentro del Relato. Esas observaciones no están en el texto de 1945 o son comentario sobre el texto. Lo que queda es la secuencia: monte, palo, tierra, tres intentos, chorro y nombre.`,
    similitudes: `Dentro del mismo corpus, el otro relato del agua es «Cómo los Chimila consiguieron el agua». Allí no hay prueba ni palo: la Gran Cacica manda cavar varios pozos hondos, se pone a dormir dos veces, va sola de noche a cada pozo, dice «Vénga, agua!» y deja caer un poco de saliva, y por la mañana los pozos amanecen llenos de agua buena y dulce. Las diferencias son todas: allí el agua llega por autoridad femenina, palabra y saliva, después de trabajo colectivo y de espera; aquí llega por la fuerza de un muchacho en una competencia entre hermanos, sin que nadie la pida y sin que nadie la espere.

Fuera del corpus ette, el propio volumen de 1945 transcribe los relatos con los que el recopilador emparentó este. En «La corta del Palu-úala», de los cuna del Darién, los hombres cortan día tras día un árbol que amanece sano hasta que descubren quién lo cura de noche; y en el relato katío de Caragabí, dentro del árbol colosal llamado jenené había una inmensidad de agua con peces, y al derribarlo el tronco quedó convertido en el mar y sus brazos en los ríos. El mismo volumen cita además, siguiendo a Wassén, un cuento de las islas Palau en el que al caer el árbol sale del tronco un torrente que inunda la isla entera. En los tres casos el agua está dentro de la madera, la madera es enorme y sacarla cuesta meses de trabajo colectivo; el resultado es un mar, unos ríos o una inundación. En el cuento ette, el agua está debajo de la tierra, la madera es un palo recién cortado que sólo la estaba tapando, el trabajo es el tirón de un hijo, y el resultado es un chorro.

Hay también un testimonio ette posterior en el que la madera sí contiene el agua: en el estudio de 2022, ancianos ette describen la ceiba primordial como un mundo en miniatura que guardaba agua y semillas dentro del tallo. Es el mismo pueblo, pero es el árbol del maíz, no el palo clavado y arrancado de este relato.`,
    leccion:
      "Lo que parecía una prueba de fuerza terminó mostrando lo que el suelo tenía guardado.",
    sceneHorizontal:
      "un padre observa a tres hijos adultos junto a un palo profundamente clavado en el suelo de la sabana",
    sceneVertical:
      "el tercer hijo retira el palo y un chorro de agua azul se eleva desde la abertura mientras los demás observan",
    researchNotes:
      "CORRECCIÓN: no se inventan nombre del hijo, especie del palo, pueblo ni poderes del padre. NO UNIFICAR: tiene mecanismo distinto al relato de la Gran Cacica.",
  }),
  myth({
    slug: "la-mala-mujer",
    sourceKeys: [
      "reichel1945",
      "rocha2010",
      "mincultura2024",
      {
        key: "reichelDolmatoffEtnografia1946",
        summary:
          "Es la glosa que el propio recopilador escribió sobre este cuento: dice que es de tanta importancia porque da la descripción detallada de un hombre adornado para una fiesta, y documenta cada pieza, las plumas pegadas al antebrazo con cera, la diadema del cacique, la pintura de achiote, el penacho del arco y la macana, además del entierro y de la creencia de que el difunto vaga cuatro días buscando el camino al otro mundo.",
        limitation:
          "Lo dice de pasada y en clave comparativa: usa el relato como prueba del atavío ceremonial, sin comentar el desenlace ni el juicio sobre la mujer.",
      },
      {
        key: "bolinderultimos1987",
        summary:
          "Confirma desde 1915 los rasgos con que los hijos reconocen al padre: los chimila se atan fuertemente brazos y piernas con hilo para conservar la fuerza, los hombres se pintan el cuerpo con achiote y en el pasado usaban coronas de plumas.",
        limitation:
          "Registro de un viajero en visitas muy breves, publicado en traducción tardía, que no conoce el relato ni presencia ceremonia alguna.",
      },
      "vargasanatomia2016",
      {
        key: "vargasdivision2020",
        summary:
          "Da el trasfondo del conflicto que abre el cuento: el mundo ette se ordena en anillos donde el centro son las casas y los huertos de las mujeres, el anillo intermedio los campos de los hombres y la periferia la selva de las divinidades, y abrir la roza es oficio masculino, penoso y expuesto.",
        limitation:
          "Describe la organización actual del trabajo agrícola y no analiza el relato ni la exigencia al anciano enfermo.",
      },
      "reichelDolmatofflengua1947",
    ],
    title: "La llamada «mala mujer»",
    summary:
      "Un anciano muere después de ser obligado a trabajar y ordena a sus hijos matar a su madre; la ficha conserva el relato sin justificar la violencia.",
    tags: ["familia", "muerte", "violencia", "memoria"],
    mito: `Un hombre tenía su mujer y dos hijos. Cuando ya estaba muy viejo y enfermo, los hijos se fueron al monte para cazar danta y dejaron al padre en la casa.

Entonces dijo la mujer: «Véte a trabajar!». «No puedo trabajar porque estoy ya muy viejo y enfermo!», dijo el hombre. «Tienes que trabajar!», dijo la mujer.

Así el padre se fue y empezó a trabajar en la roza. Pero el sol estaba muy bravo y el viejo se cansó mucho. Se sentó bajo un árbol y pronto se murió.

Los hijos no sabían nada de eso. Iban por el monte buscando danta. Entonces encontraron un deshecho muy bonito y planito, sin ninguna hierba ni maleza. En medio del plano estaba parado un hombre.

Entonces dijo uno de los hijos: «Quién es este hombre? Lo conozco!». Entonces dijo el otro hijo: «Yo también lo conozco; será nuestro padre!».

Cuando se acercaban, veían que el padre tenía la cara y todo el cuerpo pintados de achiote. Tenía muchos hilos enrollados en los tobillos y en las rodillas, también en los brazos. Tenía falda nueva y cinta sobre el pecho, y en la cabeza tenía una corona de plumas amarillas y rojas. En la espalda le colgaba la cola de una guacamaya. En los brazos tenía además pegadas muchas plumas pequeñas. Así estaba el hombre, parado como para ir a fiesta, con arco y flechas y macana.

Entonces los hijos preguntaron: «Te vas a fiesta, padre?».

Pero hubo un gran viento y no veían más al padre.

Después de un rato lo vieron otra vez y preguntaron de nuevo: «Padre, te vas a fiesta?».

Entonces dijo el padre: «Me voy a fiesta. Ustedes váyanse a la casa. Tomen mi macana y en la casa busquen a mi mujer que es madre de ustedes. Dénle dos golpes de macana en la cabeza!».

Entonces hubo un gran viento y los hijos no vieron más al padre.

Tomaron la macana y se fueron a la casa y dijeron: «Nuestro padre ha muerto».

Cuando llegaron buscaron a la mujer, y cuando la encontraron, la mataron con macana.

Era una mala mujer.`,
    historia: `Este es el duodécimo de los veintiún relatos que el cacique Tangrutaya Mutsu, anciano septuagenario, le contó a Gerardo Reichel-Dolmatoff y que se publicaron en 1945. Es el que más depende de sus condiciones de registro. El recopilador anota que el cacique narraba de noche, recostado en su hamaca, en voz baja y lenta y en un castellano a veces confuso. Anota también que varios de los cuentos eran familiares a las mujeres, pero que el cacique insistía en contarlos sólo ante hombres e interrumpía el relato cuantas veces una mujer entraba a la casa. Y que estos cuentos no se relatan a los niños en ningún caso. La única versión que existe de un relato que termina con el asesinato de una madre fue dicha ante un auditorio del que las mujeres estaban excluidas, a un hombre de fuera y en una lengua que no era la del narrador. No sabemos cómo lo contaban ellas, ni si lo contaban.

En la «Etnografía chimila» de 1946, salida del mismo trabajo de campo, Reichel-Dolmatoff nombra este cuento y dice que es «de tanta importancia» porque da la descripción detallada de un hombre adornado para una fiesta. Y ahí documenta, pieza por pieza, el atavío por el que los hijos reconocen al padre: las plumas pequeñas que los hombres se pegan al antebrazo con cera para ciertas ceremonias; la corona, insignia del cacique, una diadema de madera flexible con tubitos de caña, hilo de algodón de colores y largas plumas de guacamaya; las ligaduras apretadas bajo la rodilla y sobre el tobillo, que veía sobre todo entre los ancianos; y el achiote, usado sólo en ceremonias y en grandes manchas. Precisa algo que el relato no dice: los adornos de plumas se llevan sólo en ceremonias de la vida mágica y por hombres iniciados.

El mismo volumen describe qué se hace con los muertos: el cuerpo se pinta de rojo con achiote, se pone en cuclillas y se envuelve en su hamaca; se entierran con él sus objetos personales, entre ellos las armas; y el difunto vaga cuatro días buscando el camino hacia otro mundo, ruta que va hacia el Sur, sobre el río Magdalena, hasta un país «donde le va muy bien». El recopilador no enlaza esa creencia con este cuento, pero es lo único escrito que explica qué hace un hombre recién muerto, vestido de fiesta, parado en mitad del monte.

Las demás fuentes tocan los bordes. El registro de las visitas de 1915 y 1920 publicado en 1987 confirma desde afuera esos rasgos: los chimila se ataban brazos y piernas con hilo, se pintaban con achiote y antes usaban coronas de plumas. La etnografía de los campos ette de 2020 da el trasfondo de la orden que abre el cuento: el mundo se ordena en anillos, con las casas y los huertos de las mujeres en el centro y los campos de los hombres más afuera, y abrir la roza es oficio masculino, penoso y expuesto. El estudio de 2016 sobre la casa ette explica que la vivienda se abandona cuando muere uno de sus dueños: una sola palabra nombra la muerte de la persona y la de la casa. La antología de Miguel Rocha Vivas lo reedita como literatura ette y el reportaje del Ministerio de las Culturas de 2024, con voces de Luis Eduardo Granados y César Rozo, usa el nombre Ette Ennaka.

Ninguna de ellas comenta el desenlace. Quien escribió páginas sobre las plumas no escribió una línea sobre las dos muertes.`,
    versiones: `De este relato existe una sola versión documentada, la de 1945, y la antología de Miguel Rocha Vivas la reproduce sin añadir un testimonio nuevo. Con un solo registro no hay manera de saber si el desenlace era fijo, si en otras casas se contaba sin la orden final, ni qué versión tenían las mujeres que, según el propio recopilador, conocían varios de estos cuentos. La condición del registro forma parte del testimonio: lo contó un hombre que se callaba cuando entraba una mujer.

Entre el texto de 1945 y la glosa que el mismo autor publicó un año después hay diferencias de detalle que conviene no borrar. El relato dice corona de plumas amarillas y rojas; la etnografía describe la diadema del cacique con largas plumas de guacamaya. El relato dice muchas plumas pequeñas pegadas en los brazos; la etnografía precisa que son plumas rojas y verdes de varias clases de Psittacus y que se pegan al antebrazo con cera. El relato dice que el hombre tenía arco, flechas y macana; la etnografía atribuye al arco del cacique un penacho de plumas que el relato no menciona. Y la etnografía identifica la corona como insignia del cacique y reserva los adornos de plumas a los hombres iniciados, mientras que el texto de 1945 no llama cacique al muerto ni lo distingue de ningún otro hombre. Quien quiera leer al padre como un cacique estará apoyándose en el segundo libro, no en el primero.

El juicio del título tampoco es un añadido editorial. «La mala mujer» encabeza el número 12 en la edición de 1945, y la sentencia está además dentro del texto narrado, en su última frase. Esta ficha conserva las dos cosas y entrecomilla el título para dejar claro de quién es la frase.

Frente al texto heredado, esta revisión repone lo que se había comprimido y retira lo que sobraba. Vuelven la segunda pregunta de los hijos y el segundo viento, que antes se habían fundido en una sola aparición. Vuelve la orden literal de dar dos golpes de macana en la cabeza, que se había vuelto un genérico «golpearan a su madre». Vuelve el anuncio de los hijos al llegar a la casa. Sale del Relato, en cambio, el párrafo que hablaba del propio relato: que la página no convierte el desenlace en justicia, que la violencia no se celebra ni se representa, que el título nuevo pone distancia. Eso es criterio editorial y va aquí, no adentro de la historia.`,
    similitudes: `Tres relatos del mismo corpus alumbran este, y los tres marcan una diferencia.

El primero es el que viene inmediatamente después, «Los muertos en el monte». Allí los muertos se van al monte, encuentran un deshecho y dicen «Aquí está bien. Vamos a hacer casa!»; un hombre perdido llega a preguntar por el camino y ellos lo miran y le contestan, pero él no entiende nada porque hablan otra lengua, la lengua de los muertos, y se va corriendo. El lugar es el mismo, un deshecho en mitad del monte, que en la etnografía de 1946 es el nombre del claro circular donde se siembra. El encuentro, en cambio, es el opuesto: allí el muerto resulta ininteligible y el vivo huye, y aquí el padre habla claro, da una instrucción y los hijos la cumplen.

El segundo es «El diluvio». Una mujer encerrada con su familia en la casa de piedra dice que hace años no ve el sol, saca una piedra del techo para ver un poco de luz y entra un chorro de agua que casi los ahoga; el hombre le grita «Maldita mujer! Así uno se muere por tu culpa!» y le ordena volverse lechuza cuando termine la lluvia. Los dos relatos culpan a una mujer de una muerte y los dos terminan con su castigo, pero allí la condena la pronuncia el marido vivo y ella sobrevive convertida en pájaro que quiere ver el sol y nunca puede, mientras que aquí la orden la da el marido muerto y la ejecutan los hijos con la macana del padre.

El tercero desactiva la lectura más fácil. «El hombre que soñó con danta» cuenta que un hombre soñó que un árbol caído había matado una danta, salió a buscarla, le cayó un árbol encima y murió; los compañeros hallaron el cuerpo, buscaron la danta y la mataron con tres flechas. Ese cuento cierra con una frase: «Era una danta mala». Es la misma fórmula con que cierra este, cambiando sólo quién la recibe. En este corpus el remate declara malo a quien quedó del lado de una muerte, sea una mujer o un animal, y eso se parece más a un hábito de cierre que a una tesis sobre las mujeres.`,
    leccion:
      "Quien cuenta el final también reparte la culpa y esa repartición viaja con el relato.",
    sceneHorizontal:
      "dos hijos adultos encuentran en un claro a su padre fallecido, vestido para una fiesta y parcialmente oculto por el viento",
    sceneVertical:
      "la macana permanece apoyada sin usarse mientras el padre desaparece entre capas de viento y los hijos regresan pensativos",
    researchNotes:
      "TRATAMIENTO SENSIBLE: no se justifica el matricidio ni se representa. TÍTULO: se conserva la denominación histórica entre comillas críticas.",
  }),
  myth({
    slug: "los-muertos-en-el-monte",
    sourceKeys: [
      "reichel1945",
      "rocha2010",
      {
        key: "reichelDolmatoffEtnografia1946",
        summary:
          "El mismo recopilador describe, un año después de publicar los cuentos, que en casi todos los poblados chimila había una casa de los muertos: una construcción comunal de techo cónico donde se enterraba a los difuntos del poblado, y anota que tras el fallecimiento el muerto vaga cuatro días buscando el camino hacia el otro mundo, ruta que va hacia el sur sobre el Magdalena.",
        limitation:
          "Es la etnografía del propio Reichel-Dolmatoff, con el vocabulario y las comparaciones evolucionistas de 1946, basada en una estancia corta y en informantes que no siempre nombra; describe una práctica funeraria, no una versión del cuento.",
      },
      "vargasSueno2007",
      {
        key: "vargastejido2014",
        summary:
          "Describe qué se hace con el difunto ette: el cadáver reposa colgado mientras la familia planea el entierro, se le envuelve en su hamaca con sus posesiones, los hombres orientados al este y las mujeres al oeste, y sostiene que tras una muerte tranquila las almas se dirigen a los confines del mundo.",
        limitation:
          "Su eje es la hamaca y la estructura del cosmos, no el episodio del hombre perdido; el destino que describe está en los confines del mundo, no en una casa levantada en un claro del monte.",
      },
      {
        key: "vargasdivision2020",
        summary:
          "Muestra que los lugares destinados a los muertos ette son rastrojos, campos abandonados o terrenos que se dejan volver monte, costumbre que el autor liga a concebir la muerte como un proceso irreversible de transformación animal, y sitúa la selva como dominio de espíritus dueños.",
        limitation:
          "Trata de agricultura y de relaciones con no-humanos en el presente; el terreno despejado del cuento de 1945 no es el mismo objeto que el rastrojo etnográfico y la equivalencia no debe darse por probada.",
      },
      {
        key: "vargasanatomia2016",
        summary:
          "Explica que para los ette una casa tiene cuerpo y alma y muere como una persona, pues una sola palabra nombra ambos hechos, de modo que levantar una casa y habitarla es un acto de humanización del espacio.",
        limitation:
          "El artículo advierte que la vivienda ette pertenece a lo profano y rara vez figura en el discurso mítico, así que no autoriza a atribuir carga ritual a la casa del cuento.",
      },
      "ortegaEntre2015",
      "finolMito2007",
      {
        key: "simonNoticias1892",
        summary:
          "En las pp. 283-284 de la Cuarta noticia registra que los muiscas tenían las almas por inmortales, que al salir del cuerpo bajaban al centro de la tierra por caminos y barrancas de tierra amarilla y negra, pasando antes un gran río en barcas o balsas de telas de araña, y que por eso no osaban matar las arañas: es el relato muisca del camino de los muertos que la ficha pone frente al ette.",
        limitation:
          "Es una crónica franciscana de 1627 sobre los muiscas, leída por su autor como vestigio del Evangelio; no dice nada de los chimila y sólo sostiene el contraste que la ficha declara. La obra ya está en el pool del módulo muisca con esta misma URL, no en el de chimila.",
      },
    ],
    title: "La casa de los muertos en el monte",
    summary:
      "Un hombre perdido llega a una casa levantada por los muertos; no comprende su lengua, reconoce el peligro y logra regresar con los vivos.",
    tags: ["muertos", "monte", "lengua", "casa"],
    mito: `Un día los muertos dijeron: «¡Vámonos al monte!».

Así se fueron. Se fueron todos al monte y caminaron, y siguieron caminando entre los árboles hasta que encontraron un deshecho, un trecho de monte ya abierto. Allí se detuvieron y dijeron: «Aquí está bien. ¡Vamos a hacer casa!». Así fue y así hicieron casa. La levantaron en ese claro y se quedaron dentro, sentados en el suelo.

Un día un hombre se perdió en el monte. Anduvo y anduvo buscando por dónde salir y no daba con la salida, y el monte se le cerraba por todos lados. Entonces, entre los árboles, vio la casa. Estaba allí, en el deshecho, hecha y en pie, con gente adentro. El hombre fue allá a preguntar por el camino.

Los muertos estaban sentados en el suelo. El hombre les preguntó por dónde se salía. Ellos lo miraron y le contestaron. El hombre preguntó otra vez, y otra vez lo miraron y otra vez le contestaron. Cada vez que preguntaba, ellos lo miraban y le contestaban.

Pero el hombre no entendía nada de lo que ellos decían. No era que callaran ni que le negaran la respuesta: hablaban con él y le respondían cada vez. Lo que salía de sus bocas no se parecía a ninguna palabra que el hombre conociera, porque hablaban otra lengua, la lengua de los muertos.

Entonces el hombre tuvo mucho miedo y se fue corriendo. Corrió por el monte apartando ramas, sin saber para dónde iba, hasta que por fin encontró el camino. Por el camino llegó a su casa.

Allá contó lo que le había pasado: que se había perdido, que había dado con una casa levantada en un deshecho del monte, que adentro había gente sentada en el suelo, que les preguntó por el camino y le contestaron, y que no les entendió nada de nada.

Sus compañeros se asustaron mucho cuando lo oyeron.

«Fuiste a la casa de los muertos», dijeron.`,
    historia: `Es el número trece de los veintiún relatos que Gerardo Reichel-Dolmatoff publicó en 1945 como «Mitos y cuentos de los indios Chimila», todos narrados por el cacique Tangrutaya Mutsu, un anciano de más de setenta años a quien el investigador llamó el último buen narrador que quedaba en la tribu. Las condiciones del registro están anotadas por el propio recopilador: el cacique contaba de noche, recostado en su hamaca, en voz baja, despacio y en un castellano a veces confuso; insistía en hablar sólo ante hombres e interrumpía el relato cada vez que una mujer entraba a la casa; estos cuentos no se contaban nunca a los niños. Un relato sobre muertos llega, entonces, filtrado dos veces: por la lengua en que se dijo y por el círculo que podía oírlo.

Hay un detalle que conviene mirar. En las notas comparativas con que cierra el libro de 1945, Reichel-Dolmatoff glosó casi todos los relatos, pero entre la nota al número doce y la del número catorce no hay nada: el trece quedó sin comentario. De modo que este es uno de los pocos textos del corpus que llega sin la interpretación de quien lo publicó, sin paralelos amazónicos y sin veredictos sobre influencias ajenas.

Un año después, en la «Etnografía chimila» de 1946, el mismo autor describió aquello que el relato nombra. En casi todos los poblados había una casa de los muertos: una construcción comunal más grande y mejor hecha que las viviendas, de techo cónico sobre seis u ocho horcones, vacía por dentro, donde se enterraba a todos los difuntos del poblado y frente a la cual se depositaban sus piedras de moler. Donde no había casa cementerio, el difunto se enterraba dentro de su propia vivienda, bajo el sitio en que colgaba su hamaca, y la casa se abandonaba. En esa misma monografía anotó que después de la muerte el difunto vaga cuatro días buscando el camino hacia otro mundo, y que la ruta lleva hacia el sur, sobre el Magdalena, siguiendo la margen derecha.

Las fuentes recientes de Juan Camilo Niño Vargas aportan el trasfondo y marcan el límite. En 2007 explica que la persona ette se compone de cuerpo y de un principio inmaterial llamado too, que sobrevive a la muerte y actúa con autonomía, y que por eso se teme a los muertos que no fueron bien sepultados. En 2014 describe el entierro ette y sitúa el destino de las almas en los confines del mundo tras una muerte tranquila, y anota que hoy la mayoría se entierra en un sector del resguardo alejado de las casas e invadido de vegetación. En 2016 muestra que para los ette una casa tiene cuerpo y alma y muere como una persona, aunque advierte que la vivienda pertenece a lo profano y rara vez figura en el discurso mítico. Ninguna de ellas documenta una casa de muertos levantada en un claro del monte, ni una lengua propia de los difuntos. La antología de Miguel Rocha Vivas reedita el texto de 1945 y lo sitúa como literatura ette, pero no añade otro testimonio oral.`,
    versiones: `No hay más de una versión documentada de este relato. Con esas palabras: una sola. Todo lo que se conoce proviene de las noches de trabajo de campo en que Tangrutaya Mutsu lo dijo en castellano, y de la página que lo fijó en 1945. La antología de 2010 reproduce ese mismo texto, de modo que las dos publicaciones son un solo eslabón. Tener un único testimonio significa que no hay manera de saber qué partes eran la manera de contar de este narrador, cuáles eran fórmulas fijas y qué habría contado una mujer, que según el propio recopilador conocía varios de estos relatos pero no podía oírlos allí.

Hay una palabra que importa. El impreso de 1945 dice que los muertos caminaron «y como encontraron un deshecho», dijeron que allí estaba bien. El texto heredado de esta página convirtió eso en un terreno «desechado», que es otra cosa: un deshecho es un trecho de monte ya abierto, no un lugar descartado. Aquí se conserva lo que el impreso dice.

El relato tampoco explica qué es la lengua de los muertos. No dice que sea ette taara invertido, ni habla secreta, ni ruido sin sentido. Dice únicamente que el hombre no entendía y que ellos le contestaban.

Las fuentes etnográficas desplazan el lugar de los muertos, y conviene no confundir ese desplazamiento con una variante. En 1946 la ruta del difunto va hacia el sur sobre el Magdalena; en 2014 las almas se alejan a los confines del mundo; en 2020 los lugares destinados a los muertos son rastrojos y campos abandonados que se dejan volver monte. Ninguna de esas tres cosas es una casa hecha en un claro. Hay además una inversión que salta a la vista: en la etnografía son los muertos quienes vagan buscando el camino, y en el relato es un vivo quien se lo pregunta a ellos. Es una resonancia, no una glosa del texto.

Esta revisión sacó del relato el aparato crítico que se le había añadido: las figuras fantasmales, la clasificación del episodio como viaje de ida y regreso, y las frases sobre el texto antiguo y la versión corregida que estaban metidas dentro de la narración.`,
    similitudes: `El relato wayuu del viaje al más allá cuenta otro cruce al dominio de los muertos. Un viudo que no deja de llorar es cargado sobre la espalda por su esposa muerta, que camina sobre el mar hacia Jepira; en la otra orilla bebe el agua que guarda el alcaraván, reconoce parientes y asiste a reuniones cuya apariencia no coincide con la del mundo de los vivos, y tiene que aprender otra manera de ver. La diferencia es entera: allá el vivo entra invitado, se queda y aprende; aquí entra por error, no aprende nada y sale corriendo. Y en Jepira los muertos son parientes reconocibles, mientras que en el deshecho del monte son gente que contesta y no se deja entender.

El relato muisca de los campos elíseos recorre el camino desde el otro lado. Una tejedora recién muerta baja por un sendero entre tierras amarillas y negras hasta un río tan ancho que la otra orilla apenas se adivina, sin puente ni canoa, y lo cruza sobre una balsa de tela de araña tendida por la araña que su gente no mata. Allí hay camino y hay quien lo tienda, y el paso se completa. En el relato ette el camino es justamente lo que el hombre viene a preguntar, y lo que no consigue.

Dentro del mismo corpus de 1945 vale mirar el diluvio, donde un hombre levanta una gran casa de piedra bajo la tierra, «así como una casa redonda de nosotros pero con muchos cuartos», y con ella salva a su familia del agua. También allí una casa aparece donde no debería haberla y decide quién queda dentro. La diferencia está en quién la habita: aquella guarda a los vivos, esta guarda a los muertos.`,
    leccion:
      "Recibir respuesta no es lo mismo que entender, y esa distancia basta para marcar un límite.",
    sceneHorizontal:
      "un caminante adulto llega a una casa sobria en un claro nocturno y ve dentro varias siluetas conversando sin rasgos terroríficos",
    sceneVertical:
      "el hombre encuentra de nuevo el sendero mientras la casa de los muertos queda atrás entre árboles y palabras abstractas incomprensibles",
    researchNotes:
      "CORRECCIÓN: se reemplaza el falso aviso de historia desconocida. TONO: sin fantasmas estereotipados, persecución ni mensaje inventado.",
  }),
  myth({
    slug: "los-brujos",
    sourceKeys: [
      "reichel1945",
      "rocha2010",
      {
        key: "reichelDolmatoffEtnografia1946",
        summary:
          "Contiene el apartado sobre el shamán-tigre, donde el propio recopilador cita este cuento y registra la creencia de que los shamanes pueden llevar una doble vida convirtiéndose en tigres y de que después de morir se manifiestan bajo la forma de esos animales, además de describir al shamán que llama la lluvia y ahuyenta las enfermedades.",
        limitation:
          "Reichel-Dolmatoff encaja el dato en un mapa comparativo amazónico (kobeua, tukano, huitoto): ese marco es suyo, de 1946, y no del narrador.",
      },
      {
        key: "vargastejido2014",
        summary:
          "Registra en etnografía reciente la clave del relato: si el fallecimiento fue trágico, uno de los componentes anímicos permanece en la tierra transformado en un jaguar agresivo, mientras que tras una muerte tranquila las almas se alejan a los confines del mundo.",
        limitation:
          "Aquí lo que decide la permanencia como jaguar es la muerte trágica, no el haber sido brujo malo: es un paralelo cercano, no la misma explicación que dio el narrador de 1945.",
      },
      {
        key: "vargasanatomia2016",
        summary:
          "Documenta la norma que vuelve inteligible la advertencia del cuento: los jefes de hogar fallecidos deben ser enterrados en el centro de la habitación y enseguida la construcción se abandona, de modo que una casa en pie con un muerto dentro es un lugar que la gente sabe que hay que dejar.",
        limitation:
          "Describe la vivienda familiar contemporánea y no la casa redonda del relato; tampoco vincula esa práctica con brujos ni con tigres.",
      },
      {
        key: "vargasSueno2007",
        summary:
          "Aporta la razón por la que un muerto puede ser peligroso: separado del cuerpo, el too puede comportarse en franca oposición a las normas sociales, es irreflexivo e impulsivo, y por eso se teme a los muertos que no han sido adecuadamente sepultados.",
        limitation:
          "No habla de brujos buenos y malos ni de tigres: ofrece el trasfondo de la peligrosidad del muerto, no la tipología moral que propone el relato.",
      },
      {
        key: "vargasdivision2020",
        summary:
          "Registra que de vez en cuando entran espíritus malignos en los hogares trayendo enfermedades y desgracias, seres que adquieren siluetas antropomorfas y luego se transforman en animales: el mismo mecanismo de indistinción entre persona y animal que hace peligroso encontrar un tigre en el monte.",
        limitation:
          "Esos espíritus no son muertos ni brujos, sino entidades del mundo no-humano; el texto no los identifica con difuntos que regresan.",
      },
      "wavrinFolklore1932",
      {
        key: "kochGrunbergZwei1909",
        summary:
          "Es el pasaje que Reichel-Dolmatoff tradujo en su nota al cuento de los brujos y que la ficha cita en Similitudes. En la p. 156, entre los kobeua del río Querary, Koch-Grünberg anota que hay «buenos payé» y «malos payé»; que cuando un chamán envejece tanto que sólo camina con trabajo se vuelve jaguar, va al monte, mata y come venados, agutíes y también gente, y regresa hombre; que al morir se entierra con él su piel de jaguar; y que su alma no pasa al más allá sino que vaga para siempre por el monte como «jaguar muy malo». Añade que en kobeua y en la mayoría de las lenguas tukano la palabra para jaguar y para chamán es la misma (kobeua yaui, tukano yai).",
        limitation:
          "Paralelo tukano oriental del Vaupés, en alemán y con la etiqueta de «creencia de hombre lobo» del autor; no dice nada de los chimila. Reichel-Dolmatoff cita la 2.ª edición de 1923, p. 317; en esta edición de 1909 el pasaje está en el tomo 2, p. 156. El río Querary queda en el Vaupés colombiano, aunque la obra se titula por el noroeste del Brasil. Coincide con el relato en la tipología de chamanes buenos y malos y en el alma que no se va, pero allí la transformación empieza en vida con la vejez.",
      },
      {
        key: "reichelDolmatofflengua1947",
        summary:
          "El vocabulario del mismo trabajo de campo registra en ette taara los elementos del cuento de los brujos: la «casa redonda» como entrada propia, distinta de la casa en general (p. 31); el shamán entre los términos de relación social con prefijo ta- (p. 24), junto a «cacique», ta-ngrúta-ya (pp. 16, 25); y el tigre, kón:ne, con nombre científico en la fauna (p. 34) y como ejemplo recurrente de la gramática, en el paradigma completo de «temo al tigre» (p. 22) y en frases como «el tigre es bravo», «el tigre vendrá» y «los hombres mataron al tigre» (pp. 46-48). No hay en la lista una palabra para «brujo» distinta de la del shamán.",
        limitation:
          "Es del mismo autor y la misma estancia, así que sirve de procedencia y no de confirmación independiente; no cita el cuento. Que el paradigma gramatical elegido para ilustrar la conjugación sea precisamente el miedo al tigre es un dato del cuaderno de campo, no una interpretación del recopilador.",
      },
    ],
    title: "Los buenos y los malos brujos",
    summary:
      "Los buenos brujos curan y llaman la lluvia; los malos pueden volver como tigres, como descubre un viajero que duerme en una casa funeraria.",
    tags: ["brujos", "tigre", "curación", "lluvia"],
    mito: `Hay buenos brujos y hay malos. No todos son iguales. Así dice la gente y así es.

Los buenos curan. Cuando alguien se enferma, ellos curan, y cuando hay sequía y la tierra se seca, ellos llaman la lluvia. Y cuando se mueren son como nosotros cuando nos morimos: se mueren y se van, igual que se va cualquiera, y no vuelven más.

Pero los malos brujos no son así. Ellos no se van cuando mueren. Vuelven, y vuelven para hacer daño. Y no pueden volver en forma de hombre, porque uno los reconoce: cualquiera les vería la cara, sabría quiénes son y sabría que ya se habían muerto. Por eso se vuelven como tigre. Así uno va por el monte y encuentra tigre, y uno no sabe: es tigre o es brujo. Puede ser un tigre del monte, un animal como cualquier otro, o puede ser un brujo malo que volvió. Uno lo tiene ahí delante y no puede saber cuál de los dos es.

Un día unos hombres iban por el monte. Iban caminando y se les hizo tarde, y cuando ya caía la noche encontraron una gran casa redonda allí en el monte.

«¡Vamos a dormir aquí!», dijo uno de ellos.

«Aquí no se puede dormir», dijeron los otros. «En esta casa hay un muerto enterrado».

Pero el hombre no les hizo caso. Se entró en la casa redonda y se acostó a dormir adentro. Los otros no entraron. Se quedaron afuera, en el monte, y allá se quedaron toda la noche.

Entonces, por la noche, vino un gran tigre. Vino del monte hasta la casa redonda, entró donde estaba el hombre y lo mató mientras dormía. Al hombre que dormía en la casa lo mató el tigre, y los que estaban afuera no pudieron hacer nada.

«El que está enterrado aquí era un brujo malo», dijeron los otros.

Se fueron corriendo por el monte.`,
    historia: `Es el número catorce de los veintiún relatos publicados por Gerardo Reichel-Dolmatoff en 1945, narrados todos por el cacique Tangrutaya Mutsu. Viene en dos piezas: primero una declaración general sobre los brujos y después un caso que la pone a prueba. Las condiciones en que se registró pesan aquí más que en otros textos. El propio recopilador anotó que el cacique contaba de noche, recostado en su hamaca, en voz baja y en un castellano a veces confuso, que insistía en hablar sólo ante hombres y cortaba el relato cuando entraba una mujer, y que estos relatos no se contaban a los niños. Un texto sobre muertos que vuelven y sobre un hombre al que matan mientras duerme llega desde ese círculo y desde esa hora.

Este es además uno de los pocos relatos del corpus que su recopilador volvió a usar como prueba. En la «Etnografía chimila» de 1946, dentro del apartado sobre el shamán-tigre, Reichel-Dolmatoff escribe que un cuento de los chimila dice así, y cita la frase inicial sobre los buenos brujos y los malos. En esas mismas páginas separa dos oficios que el relato junta bajo una sola palabra castellana. Al cacique le corresponden funciones sacerdotales: dirige los ritos de siembra y cosecha, los de iniciación y los de entierro, y el día anterior a una ceremonia queda intocable y en ayuno. Al shamán le corresponde el mundo mágico: en tiempos de sequía llama la lluvia, conversa con el trueno durante las tempestades, ahuyenta las enfermedades y conjura maldiciones sobre los enemigos. Curar y llamar la lluvia, las dos cosas que el relato atribuye a los brujos buenos, son en esa monografía el oficio del shamán y no el del cacique.

De ahí sale también el dato que más cambia la lectura. Reichel-Dolmatoff anota que en varias poblaciones había shamanes y que la posición estaba casi siempre ocupada por una mujer anciana, más temida en sus funciones mágicas que el cacique como sacerdote, y que al elegir sucesora escogía siempre a una muchacha de su familia, a veces su hija. En un rancherío del alto río Ariguaní compró el equipo mágico de una de ellas, una anciana septuagenaria, contra la oposición del resto de la población: una mochila de algodón con más de dos docenas de cristales de roca, fragmentos de vidrio, cuentas europeas y un cascabel de serpiente amarrado al cabrestillo.

El marco comparativo con que el recopilador explica el tigre es suyo, de 1946 y de 1945, y no del narrador: atribuye la creencia a la región amazónica y la rastrea entre kobeua, tukano, guayupe, koreguaxe, tama, huitoto y roucouyenne, y sugiere un origen arawak. De su propia cosecha es también el cierre de la nota de 1945, donde dice que lo interesante del relato es además la tradición de la casa redonda y del entierro dentro de ésta.`,
    versiones: `No hay más de una versión documentada de este relato. La página de 1945 y la antología que la reedita en 2010 son un solo eslabón, no dos testimonios orales.

La divergencia más fuerte no está entre versiones del relato sino entre el relato y la etnografía del mismo autor. El texto dice «brujos» en masculino y se contó sólo entre hombres; la monografía de 1946 registra que el oficio estaba casi siempre en manos de una mujer anciana. La palabra castellana cubre un cargo que en el terreno era mayoritariamente femenino, y no permite reconstruir por sí sola los términos de ette taara. Eso no corrige el relato: muestra qué esconde su traducción.

La etnografía reciente desplaza la explicación. Juan Camilo Niño Vargas registró en 2014 que si el fallecimiento fue tranquilo las almas se alejan a los confines del mundo, y que si fue trágico uno de los componentes anímicos permanece en la tierra transformado en un jaguar agresivo. Allí lo que decide la permanencia como fiera es la manera de morir, no haber sido brujo malo. Es un paralelo cercano y no la misma explicación.

El mismo autor recogió además relatos ette de sentido inverso, protagonizados por un jaguar que disimula sus rasgos bestiales bajo figura humana y se presenta ante quienes se han quedado solos, hasta que su animalidad se hace evidente porque ronca sin mesura, despide un hedor fétido o muestra un temor excesivo frente a los perros. En el relato de 1945 el recorrido va al revés: es el muerto quien no puede volver como hombre y por eso toma forma de tigre.

La advertencia de los compañeros deja de sonar supersticiosa cuando se la coloca junto a dos hechos documentados. En 1946 el recopilador anotó que, donde faltaba casa cementerio, el difunto se enterraba dentro de su propia vivienda y la casa se abandonaba en seguida; Niño Vargas confirma en 2016 y en 2014 que el jefe de hogar fallecido se enterraba en el centro de la habitación y que la construcción se dejaba. Una casa en pie con un muerto adentro es, en ese marco, un lugar que la gente sabe que hay que dejar. La casa redonda tampoco es un adorno del relato: el mismo recopilador observó una abandonada de unos ocho metros de diámetro entre Caracolicito y el paso del río Ariguaní, y concluyó que ese había sido el tipo común de vivienda en tiempos anteriores.

Esta revisión retiró del relato la jerarquía moral completa y el tigre convertido en monstruo que traía el texto heredado, y sacó de la narración las frases sobre la expansión anterior y sobre la propia revisión.`,
    similitudes: `El relato nasa del hombre tigre trabaja la misma materia y llega a otro sitio. Allí la gente tigre existe entre los vivos y se la convida: cuando un tigre de monte se lleva las ovejas y los hombres regresan del rastrojo con las escopetas frías, llaman a un hombre tigre, que se mete al monte con una peinilla y nada más, juega un rato con el tigre verdadero antes de matarlo y luego lo tiende en la mitad del camino para que se vea desde lejos. Ser tigre es allá una condición conocida, con oficio y hasta con dirección, pues se dice que todavía hay hombres tigres y que en Cali hay. En el relato ette el tigre es un muerto, y toda la fuerza está en que nadie puede saberlo a tiempo.

Los otros dos paralelos los trajo el propio recopilador, y hay que leerlos como lo que son: su mapa comparativo de 1945 y 1946, no la voz del narrador. Entre los huitoto de Colombia registró que el alma de los brujos se transforma en jaguar que hace mucho daño y que el brujo continúa después de su muerte. De los tukano del río Querary citó a Koch-Grünberg: cuando un brujo ya está tan viejo que sólo camina con trabajo, se convierte en tigre, va al monte, mata y come venados y otros animales, también gente, y su alma no entra en el más allá sino que vaga por siempre como un tigre muy malo; en varias lenguas tukano la palabra para tigre y la palabra para brujo son la misma.

La diferencia con el relato ette es precisa. En esos casos la transformación empieza en vida y la trae la vejez. Aquí empieza después de morir y obedece a un cálculo: el brujo malo no puede volver como hombre porque lo reconocerían.`,
    leccion:
      "Quien no puede volver con su propia cara vuelve con otra, y entonces ningún encuentro resulta seguro.",
    sceneHorizontal:
      "varios viajeros se detienen ante una casa redonda de noche mientras un tigre aparece a distancia entre el bosque",
    sceneVertical:
      "un curador llama la lluvia sobre cultivos secos mientras una silueta de tigre queda separada en el monte oscuro",
    researchNotes:
      "CAUTELA: no se identifica brujo con médico tradicional contemporáneo. IMAGEN: sin ataque, cadáver, monstruo ni terror explícito.",
  }),
  myth({
    slug: "los-canibales",
    sourceKeys: [
      "reichel1945",
      "rocha2010",
      {
        key: "reichelDolmatoffEtnografia1946",
        summary:
          "Describe el arma del crimen y la autoridad que los homicidas temen: la macana, tallada en madera dura de palma, es atributo exclusivo de los guerreros, y el cacique posee además otra ceremonial que lleva sobre el hombro izquierdo y que acompaña sus funciones rituales en entierros e iniciaciones.",
        limitation:
          "El mismo autor que tituló el cuento Los caníbales no menciona antropofagia chimila en su etnografía, lo que confirma que el título generalizador no se apoyaba en una costumbre observada; escribe además desde categorías de 1946.",
      },
      "angelChimilas2002",
      {
        key: "bolinderultimos1987",
        summary:
          "El viajero sueco que visitó a los chimila entre 1914 y 1920 confirma los dos elementos materiales del relato: que en caso de guerra usaban una maza achatada llamada macana, y que fiestas como la imposición del nombre y los entierros se celebraban con bebida y baile, el marco de la reunión de chicha con que abre el cuento.",
        limitation:
          "Bolinder recoge además tópicos coloniales sobre los chimila, incluidos gritos de guerra y monstruos con dobles filas de dientes, que hay que leer como estereotipo de sus fuentes y no como dato; sus estancias fueron muy breves.",
      },
      "vargaslegado2019",
      {
        key: "zuluagaEntre2015",
        summary:
          "Documenta que la Corona pasó de una guerra defensiva a una guerra ofensiva contra los indios tratados como enemigos internos, con milicias y capitanes a guerra: el clima de criminalización que explica por qué un relato chimila sobre un homicidio llegó a publicarse bajo el rótulo Los caníbales.",
        limitation:
          "Es historia colonial de misiones y campañas militares; no toca el cuento, ni la antropofagia, ni la etnografía del siglo XX.",
      },
      "simonNoticias1892",
    ],
    title: "El crimen ocultado",
    summary:
      "Después de una fiesta, dos hombres matan a un viajero y comen el cuerpo para ocultar el delito al cacique; no es un relato sobre un pueblo caníbal.",
    tags: ["crimen", "cacique", "chicha", "violencia"],
    mito: `Un día prepararon chicha allá en un pueblo. Se fueron allá los hombres de otros pueblos y así hubo mucha gente: gente de un pueblo y gente de otro, todos en el mismo sitio. Tomaron mucho y bailaron, y volvieron a tomar y volvieron a bailar, y siguieron tomando y bailando hasta que cayó la noche.

Cuando ya todos estaban cansados, dos hombres dijeron: «¡Vámonos a casa!». Así se fueron, por el monte, de noche.

Allá, en el camino, encontraron a otro hombre. Era de un pueblo vecino e iba por el mismo camino que ellos. Entonces los dos se pusieron a pelear con él. Eran dos y él era uno solo, y lo mataron con macana. Con un golpe le trozaron la cara y se le cayó un gran pedazo de carne del lado del ojo izquierdo.

Entonces los dos hombres se quedaron mirando al muerto que habían dejado en el camino y dijeron: «¿Qué vamos a hacer con el muerto? Si el cacique sabe esto, nos va a castigar».

Pensaron en enterrarlo allí mismo y seguir para su casa. Pero dijeron: «Si lo enterramos y lo encuentran, lo reconocerán por el golpe que le dimos». El golpe estaba en la cara, del lado del ojo izquierdo, y cualquiera que levantara ese cuerpo iba a saber de qué macana venía y quién la cargaba.

Así que dijeron: «¡Vámonos a comerlo!».

Así lo hicieron. Hicieron fuego allá en el monte, lo asaron y se lo comieron. Cuando terminaron ya no quedaba cuerpo que enterrar ni cara que reconocer, y los dos hombres siguieron su camino para la casa como si vinieran de la fiesta y nada más.

De ese hombre del pueblo vecino no se volvió a saber, y del golpe que le dieron tampoco.

El cacique nunca supo así que ellos habían matado a un hombre.`,
    historia: `Es el número quince de los veintiún relatos que Gerardo Reichel-Dolmatoff publicó en 1945, narrados por el cacique Tangrutaya Mutsu de noche, en su hamaca, en un castellano a veces confuso y sólo ante hombres. Este texto trae algo que casi ningún otro del corpus tiene: su propia cadena de transmisión, dicha por el narrador al cerrar. Dice que se lo contó su padre y que así fue. No da nombre ni fecha, pero deja constancia de que el relato venía de una generación anterior a la suya.

El rótulo con que se publicó es otra cosa. «Los caníbales» es el título que le puso el recopilador, y en su nota comparativa explica por qué: dice que en este relato y en el del morrocoyo, el número veintiuno, se encuentran recuerdos de la antropofagia, y añade que por los historiadores de la Conquista se sabe que los chimila eran caníbales. Las dos mitades de esa frase se sostienen mal. La primera se apoya en un relato donde un hombre pela, asa y come a un morrocoyo que antes era gente como nosotros, y donde el final funda una regla de cocina, no un recuerdo de guerra. La segunda remite a crónicas que el propio autor no cita.

Un año después, en su «Etnografía chimila» de 1946, Reichel-Dolmatoff describió con detalle armas, entierros, vida mágica y organización social, y no mencionó en ninguna parte antropofagia chimila. El rótulo no descansaba sobre nada que él hubiera observado.

De dónde venía la acusación lo muestra Gustaf Bolinder, el viajero sueco que visitó a los chimila entre 1914 y 1920. Rastrea el origen hasta 1514, cuando Oviedo describió a los indígenas de la costa de la región de Santa Marta, que tenían varios rasgos culturales en común con los chimila pero no eran ellos, y los culpó de ser caníbales porque en sus chozas se tropezó repetidas veces con fragmentos de cuerpo humano colgados y manos humanas saladas, y porque les vio collares hechos con dientes humanos ensartados. El propio Bolinder añade en seguida que se puede suponer que se trataba de trofeos o quizá simplemente de extremidades de simios. En esas mismas páginas reproduce sin distancia otros tópicos coloniales sobre los chimila, incluidos los gritos de guerra y unos monstruos con dobles filas de dientes. Marta Herrera Ángel estudió cómo se construyeron y usaron políticamente esos estereotipos raciales en la Nueva Granada del siglo XVIII, y Marcela Quiroga Zuluaga documenta con archivo que desde 1763 la Corona pasó de las incursiones esporádicas a una guerra ofensiva contra los chimila como enemigos internos, con milicias al mando de capitanes a guerra.

Lo que la etnografía sí sostiene son los objetos del relato. La macana está tallada en madera dura y pesada de palma, y la grande es atributo exclusivo de los guerreros. El poblado lo forman de cinco a diez casas bajo un cacique local, dispuestas en círculo alrededor de una placita, con casi ningún contacto entre poblaciones y con enemistades entre vecinos. Bolinder registra que fiestas como la imposición del nombre y los entierros se celebraban con bebida y baile.`,
    versiones: `No hay más de una versión documentada de este relato, y la antología de 2010 reproduce la de 1945 sin añadir testimonio.

Lo que sí cambió es el rótulo. El título impreso en 1945 es «Los caníbales». Esta página conserva el slug por estabilidad y muestra el título «El crimen ocultado», porque lo que el texto narra son dos hombres que borran un homicidio, no una costumbre ni el rasgo de un pueblo. La antropofagia aparece una sola vez y como recurso: sirve para que no quede cuerpo que reconocer. La revisión no adopta la conclusión del recopilador sobre unos recuerdos de antropofagia, pero tampoco la esconde, porque de ella viene el nombre con que el relato circuló durante ochenta años.

La frase final del impreso, «a mí me lo contó mi padre y así fue», es una fórmula de procedencia y no parte de la acción. Por eso queda fuera de la narración y se reporta aquí.

El desenlace es otro punto que el texto heredado había movido. El impreso dice que el cacique nunca supo que ellos habían matado a un hombre, y ahí se detiene. No hay confesión, no hay castigo y no hay arrepentimiento. La expansión anterior añadía remordimiento y convertía el título en identidad colectiva; esta revisión limita la acción a dos homicidas y deja la impunidad tal como está documentada.

Tampoco se puede decir qué habría hecho el cacique. En la monografía de 1946 no aparecen las palabras castigo, justicia ni delito, y las funciones que allí se le atribuyen son sacerdotales: dirige los ritos de siembra y cosecha, los de iniciación y los de entierro. El obituario del último kraanti explica que el término que los ette traducen como cacique nombra a los ancianos encargados de mantener en equilibrio el conjunto cósmico, y que su etimología remite a sabiduría, ancestralidad, árbol primordial y columna universal, pero no documenta funciones penales. El miedo de los dos hombres está en el relato; el procedimiento que temían, no.`,
    similitudes: `Dentro del mismo corpus de 1945 el paralelo obligado es el del morrocoyo, porque el recopilador juntó los dos relatos bajo la misma etiqueta. Allí un morrocoyo que antes era gente como nosotros es flechado en una pata, descolado, apaleado y finalmente muerto, y un hombre se lo lleva a la casa, lo pela, lo asa y se lo come contra el consejo de los demás, y dice que es muy sabroso. Ese final funda cosas: desde entonces los morrocoyos tienen las patas traseras tiesas y la cola corta, se hicieron una concha dura y son comida muy buena. La diferencia es de función. En el morrocoyo comer explica el mundo; en este relato comer no explica nada y sólo sirve para que no haya cuerpo.

El relato muisca de Nemequene ofrece el contraste del otro lado, el de la autoridad. Allí el zipa dedica cada mañana, antes de recibir noticias de guerra, a escuchar disputas: un lindero movido durante la noche, una manta tomada sin permiso, una familia que no entregó lo acordado. Hace preguntas, oye testigos y dicta una respuesta, y sus decisiones viajan de boca en boca hasta que la gente habla de ellas como si siempre hubieran existido. Frente a eso, en el relato ette la autoridad no es un procedimiento sino un riesgo, y la única diligencia que hacen los dos hombres es destruir la prueba antes de que alguien pregunte.

Queda un paralelo que esta página no hace. Existen relatos de otros pueblos sobre comer gente como práctica, y ninguno sirve aquí, porque el texto no describe una práctica: describe a dos hombres una noche en el monte.`,
    leccion:
      "Lo que la autoridad nunca supo siguió sabiéndose en otra parte, contado de padre a hijo.",
    sceneHorizontal:
      "una fiesta comunitaria con chicha termina al anochecer mientras dos viajeros se alejan por un sendero, sin mostrar homicidio ni consumo humano",
    sceneVertical:
      "el cacique permanece en el pueblo junto a una macana abandonada y un sendero oscuro que guarda el crimen fuera de escena",
    researchNotes:
      "CORRECCIÓN DE TÍTULO: no es un pueblo caníbal. TRATAMIENTO SENSIBLE: homicidio y consumo se narran sin detalle gráfico y no se ilustran.",
  }),
  myth({
    slug: "el-castigo",
    relatoCorto:
      "La fuente primaria son noventa palabras: una decisión, una sentencia y su cumplimiento. Estirarla hasta trescientas obligaba a repetir la cuenta del cacique tres veces, y la sentencia pierde fuerza al repetirse.",
    sourceKeys: [
      "reichel1945",
      "rocha2010",
      "nino2008",
      {
        key: "zuluagaEntre2015",
        summary:
          "Documenta con archivo el mismo enlace que anuda el cuento, guerra y enfermedad: los chimila depusieron las armas no sólo por la presión militar sino también por las epidemias que los azotaban, con brotes repetidos de viruela y cerca del setenta por ciento de la población desaparecida entre fugas y enfermedad.",
        limitation:
          "Es historia colonial del siglo XVIII y no permite identificar el brote concreto ni el Gran Río del relato; no autoriza a leer el cuento como crónica de un episodio fechable.",
      },
      {
        key: "reichelDolmatoffEtnografia1946",
        summary:
          "Registra el armamento de la expedición del cuento, arco, flecha y macana de guerra, y sobre todo que entre los chimila le corresponde al shamán ahuyentar las enfermedades y conjurar maldiciones y desgracias sobre los enemigos: el oficio exacto que el relato pone en boca del cacique del Gran Río.",
        limitation:
          "Es la etnografía del propio recopilador, con su vocabulario de 1946, y atribuye ese poder al shamán y no al cacique, cuyas funciones separa: la correspondencia con el relato es de motivo, no de cargo.",
      },
      {
        key: "vargastejido2014",
        summary:
          "Sitúa la guerra dentro del relato de origen ette, con los enfrentamientos entre ette chorida y waacha chorida en las narraciones de creación, y contrasta ese mundo con el firmamento, habitado por seres libres de todo mal corporal, incluidas la enfermedad y la muerte.",
        limitation:
          "Trata de guerras primordiales entre poblaciones ancestrales, no de la expedición contra la gente del Gran Río, y no menciona correspondencia alguna entre muertos y enfermos.",
      },
      {
        key: "bolinderultimos1987",
        summary:
          "Da un testimonio directo del vínculo entre población chimila y epidemia: al hallar sólo siete personas donde las chozas indicaban más habitantes, el viajero anota que tal vez los otros habían muerto en epidemias de sarampión o de gripa, brotes que el año anterior habían causado muchas víctimas en el Magdalena.",
        limitation:
          "Es una inferencia del viajero, no un registro sanitario, y sus estancias fueron muy breves; además reproduce sin distancia los tópicos coloniales sobre los chimila.",
      },
      {
        key: "vargaslegado2019",
        summary:
          "Explica el peso que tiene la palabra del cacique en el relato: kraanti, el término que los ette traducen como cacique, nombra a los ancianos encargados de impedir que el cielo se desplome y de mantener en equilibrio el conjunto cósmico.",
        limitation:
          "Habla de una autoridad ette del siglo XXI y de la revitalización cultural, no de la guerra; no documenta que un kraanti pueda anunciar enfermedades.",
      },
    ],
    title: "La enfermedad después de la guerra",
    summary:
      "El cacique del Gran Río anuncia que cada muerte causada en el ataque volverá como enfermedad contra un hombre o un niño Ette.",
    tags: ["guerra", "enfermedad", "Gran Río", "retribución"],
    mito: `Un día dijeron los hombres: «¡Vámonos a matar la gente del Gran Río!». Se fueron todos y llevaron mucha flecha y macana.

El cacique de los indios del Gran Río oyó eso. Entonces dijo: «Por cada hombre que maten los Ette aquí, les va a morir uno de los suyos de enfermedad, y por cada niño que ellos maten aquí, va a morir uno de sus niños».

No dijo cuándo, ni de qué enfermedad, ni a quiénes les iba a tocar. Dijo la cuenta.

Así fue. Cuando volvieron de la guerra, muchos se murieron de enfermedad, hombres y niños.`,
    historia: `Es el número dieciséis de los veintiún relatos publicados por Gerardo Reichel-Dolmatoff en 1945 y narrados por el cacique Tangrutaya Mutsu de noche, en su hamaca, en un castellano a veces confuso y sólo ante hombres. Ocupa noventa palabras, y es de los textos más breves del corpus. En esas noventa palabras no se dice por qué salió la expedición, ni qué pueblo es la gente del Gran Río, ni qué enfermedad fue, ni cuántos murieron.

El recopilador le puso encima su hipótesis. En la nota comparativa escribe que en este cuento de la guerra contra los indios del Gran Río, probablemente el río Magdalena, se trata seguramente de la memoria de una gran epidemia atribuida a la fuerza mágica del cacique enemigo. Las dos cautelas son suyas y conviene conservarlas: probablemente y seguramente. Ni el río ni la epidemia están en el texto del narrador.

Su propia etnografía de 1946 complica además un detalle de cargo. Entre los chimila es al shamán, y no al cacique, a quien le corresponde ahuyentar las enfermedades y conjurar maldiciones y toda clase de desgracias sobre los enemigos; las funciones que allí describe del cacique son sacerdotales, ligadas a la siembra, la cosecha, la iniciación y el entierro. El relato pone el oficio del shamán en boca de un cacique. En esa misma monografía anota que el cacicazgo podía ser desempeñado por un hombre o por una mujer, que encontró varias mujeres cacicas, y que las poblaciones con cacique masculino estaban en regiones aisladas y peligrosas, donde el hombre parecía haber asumido la posición por su calidad de jefe de los guerreros. También registra el armamento que el relato nombra: el arco, la flecha y la macana de guerra, atributo exclusivo de los guerreros.

El enlace entre guerra y enfermedad está documentado fuera del relato, aunque no para este episodio. Marcela Quiroga Zuluaga muestra con archivo que desde 1763 la Corona dejó las incursiones esporádicas y emprendió una guerra ofensiva contra los chimila como enemigos internos, y que las parcialidades depusieron las armas no sólo por la presión militar sino también por las epidemias que las azotaban; un informe de 1786 dice que de los siete pueblos fundados, donde habitaban más de mil personas, sólo quedaban tres, con trescientas seis almas, por los muchos que murieron de la última peste de viruelas y por los que andaban fugitivos. Gustaf Bolinder, que viajó por el Ariguaní entre 1914 y 1920, encontró sólo siete personas donde las chozas indicaban más habitantes y anotó que tal vez los otros habían muerto en epidemias de sarampión o de gripa, brotes que el año anterior habían causado muchas víctimas en el Magdalena. Ninguno de esos datos fecha el relato ni identifica su río.`,
    versiones: `No hay más de una versión documentada de este relato. Con esas palabras: una sola, de noventa palabras, recogida de un solo narrador y reeditada después sin nuevo testimonio. Tener un único testimonio tan breve significa que casi todo lo que quisiéramos saber queda fuera: no sabemos si el ataque tuvo éxito, ni cuánto tiempo pasó entre el regreso y las muertes, ni si la gente del Gran Río sufrió también.

El único otro marco bélico del corpus está en el relato cuarto, sobre las primeras guerras, donde se dice que en esta tierra vivían antes los aruacos, que dejaron las piedras de moler y fueron sacados con guerra, y que con los karibí hubo mucha guerra porque donde hay karibí los chimila no pueden vivir, y que ahora ya son amigos desde que llegaron los blancos. La gente del Gran Río no se identifica allí con ninguno de los dos. Son dos relatos de guerra que no se tocan.

La etnografía reciente sitúa la guerra en otro plano. Juan Camilo Niño Vargas registra en 2014 que varios mitos cuentan cómo la tierra estuvo habitada por dos pueblos belicosos, los ette chorida y los waacha chorida, y que la dureza con que se describen esos enfrentamientos sólo es comparable con los testimonios documentales del siglo XVIII; y contrasta ese mundo con el firmamento, habitado por seres libres de todo mal corporal, incluidas la enfermedad y la muerte. No es la expedición contra el Gran Río y no aparece allí ninguna correspondencia entre muertos y enfermos.

El relato se narra con el nombre que usa el impreso de 1945, chimila, porque la correspondencia que anuncia el cacique enemigo está dicha en esos términos. Las fuentes contemporáneas y el propio pueblo prefieren Ette Ennaka, y ese es el nombre que usan las demás capas de esta página.

Esta revisión cambió el título visible, que antes reducía el episodio a una maldición, y sacó de la narración el comentario sobre la ficha antigua y sobre la propia corrección. Conserva la equivalencia uno a uno tal como está dicha y no la traduce a diagnóstico epidemiológico.`,
    similitudes: `El relato muisca de Chibchacum pone en escena otro daño colectivo anunciado desde arriba. Cuando los suyos murmuraron de él, Chibchacum trajo dos ríos sobre la sabana de Bacatá; el agua cubrió los surcos, apagó los fuegos de los plateros y subió alrededor de las casas, y la gente se refugió en las alturas a ver hundirse su sustento. La diferencia está en quién manda y quién repara: allí el castigo viene de una deidad del propio pueblo y otra lo revierte abriendo las peñas del Tequendama, y hasta queda légamo fértil sobre los campos. En el relato ette el anuncio viene de la autoridad del pueblo atacado, se cumple contando uno por uno y nadie lo revierte.

El relato wayuu de Umaralá trabaja la enfermedad desde el otro extremo. Durante una epidemia un muchacho enferma de gravedad y su tía, una piache reconocida, canta junto al chinchorro, mueve la maraca para llamar a sus auxiliares, comprende que la vida del sobrino exige una pérdida y entrega la suya. Allí la enfermedad tiene nombre, se le puede cantar y se paga con una vida por otra, mediada por alguien que sabe hacerlo. En el relato ette la correspondencia queda dicha de antemano por un enemigo y no hay quien la medie ni quien la cante.

Lo que distingue a este relato de los dos es la aritmética. No es una calamidad que cae sobre un pueblo entero, ni un intercambio de una vida por una vida: es una cuenta abierta antes de la guerra, hombre por hombre y niño por niño, que se cobra después y en el otro lado.`,
    leccion:
      "Quien va a matar lejos regresa con la cuenta abierta y la paga en su propia casa.",
    sceneHorizontal:
      "un cacique del Gran Río levanta la mano frente a dos grupos separados por el agua, con armas bajas y sin combate",
    sceneVertical:
      "flechas y macanas quedan abandonadas junto al río mientras varias casas guardan silencio después del regreso",
    researchNotes:
      "CAUTELA: no se identifica enfermedad ni evento histórico. IMAGEN: sin víctimas, batalla ni niños enfermos.",
  }),
  myth({
    slug: "los-animales-hablan",
    sourceKeys: [
      "reichel1945",
      "rocha2010",
      {
        key: "vargasdivision2020",
        summary:
          "Explica que entre los ette las categorías que definen la humanidad se reencuentran más allá de la esfera humana, pero de forma escalar: la mayoría de los animales tiene una faceta humana tan recóndita que puede ignorarse en la vida diaria, el matiz exacto de decir que son gente sin volverlos personas disfrazadas.",
        limitation:
          "Se centra en los campos de cultivo y no comenta el relato ni la capacidad de habla de los animales que enumera el cuento.",
      },
      {
        key: "vargastejido2014",
        summary:
          "Documenta la tripartición ette entre un presente humano ligado al medio, un pasado animal vinculado a lo bajo y un futuro divino asociado a lo alto, y reúne relatos de humanos convertidos en oso hormiguero, armadillo o jaguar: el fondo del que depende la afirmación de que los animales son gente.",
        limitation:
          "Su objeto es la hamaca y la metamorfosis descendente, no la voz ni la comunicación de los animales.",
      },
      {
        key: "reichelDolmatoffEtnografia1946",
        summary:
          "Monografía del propio recopilador publicada un año después de los mitos, que enumera con nombre científico la fauna que el relato pone a hablar, dantas, zainos, tatabros, monos aulladores, pavas y tortugas, y registra la creencia en médicos que llevan una doble vida convirtiéndose en tigres.",
        limitation:
          "No vuelve sobre el texto del cuento ni discute la frase sobre los animales: aporta el entorno faunístico y una creencia paralela.",
      },
      {
        key: "vargastravesia2013",
        summary:
          "Muestra que los ette tienen todo un género de historias centradas en humanos adoptados por animales, las más ricas y largas de su mitología, lo que sitúa esta declaración dentro de una literatura oral viva y no en un archivo aislado de 1945.",
        limitation:
          "Analiza un mito distinto y su lectura astral: sirve como contexto de género, no como versión de este cuento.",
      },
      {
        key: "reichelDolmatofflengua1947",
        summary:
          "Es el vocabulario que el mismo recopilador levantó en el trabajo de campo de 1944 y que deja oír en ette taara las palabras del cuento. Registra el verbo «hablar», tá:ra-, con la misma raíz de tárasa, el nombre de la lengua («yo hablo chimila»), y ejemplos como «oigo como ellos hablan» y «el niño no sabe hablar» (pp. 45-46). Da la frase «el mono canta» (úru:úru krá:ui, p. 43), la misma construcción que para el oropéndola y el gallo. Y en las fórmulas de conversación (p. 27) anota que al escuchar a otro hablar se responde de vez en cuando hati:rata é:e, «¡así es!»: exactamente la respuesta que en el cuento los monos se dan de un lado a otro. Nombra además con nombre científico la ardilla, el tapir, el tigre y el venado que el cuento pone a hablar (pp. 34-35).",
        limitation:
          "No es un testimonio independiente: es el mismo autor y la misma estancia de 1944, y no cita el cuento. La correspondencia entre la fórmula de conversación y el «¡Así es!» de los monos la establece esta ficha, no Reichel-Dolmatoff. Contradice en parte la última frase de la Historia publicada («nadie registró qué palabra del ette taara tradujo el recopilador como “hablar”»): la palabra general sí quedó registrada por él mismo en 1947, aunque no sabemos cuál usó Mutsu esa noche.",
      },
      "kochGrunbergZwei1909",
    ],
    title: "Los animales hablan",
    summary:
      "Dantas, monos, tigres, tortugas, venados y pájaros hablan porque son gente; la ardilla también lo hace, aunque cuesta entenderla.",
    tags: ["animales", "lenguaje", "danta", "monte"],
    mito: `Todos los animales saben hablar.

La danta anda por el monte buscando de comer. Cuando encuentra comida no se queda callada: lo dice en voz alta y lo repite, “Sí, sí, aquí hay comida, sí, sí!”. Entonces vienen las otras dantas, porque la oyeron, y llegan hasta donde está el alimento y comen. Lo que una encontró sola termina siendo comida de todas, y lo que hace pasar el hallazgo de una a las demás es que la danta lo diga.

Los monos hablan por la mañana. Apenas amanece cantan: “Ho-ho, qué buen día!”. Y desde otro lado, sin que nadie se lo pida, los otros monos contestan: “Así es! Es un buen día!”. Uno dice cómo está el día y los demás responden que en efecto así está. No cantan cada uno por su cuenta: se responden.

El tigre habla también. Habla la tortuga. Habla el venado. Habla el pájaro. El que ronca en el monte y el que camina despacio y el que vuela, todos tienen palabra donde viven.

Ardita habla poco. Cuando habla, los otros casi no la entienden. No queda por eso fuera de los que tienen palabra: está entre ellos, hablando poco y siendo entendida a medias.

Entre los animales, entonces, hablar sirve para decir dónde hay comida, para decir cómo amaneció el día y para contestarle a otro lo que acaba de decir. Sirve para llamar y para responder al llamado.

Hay quienes dicen lo contrario. Dicen que los animales del monte no saben hablar. ¿Que no saben? Embuste. Habla la danta que llama a las otras dantas, hablan los monos que se saludan el día, habla el tigre y habla la tortuga y habla el venado y habla el pájaro, y habla Ardita aunque casi no se le entienda. Hablan porque son gente como nosotros.`,
    historia: `Este es el texto diecisiete del conjunto que Gerardo Reichel-Dolmatoff recogió a mediados de 1944 entre los chimila del departamento del Magdalena, por encargo del Instituto Etnológico Nacional y por iniciativa de Paul Rivet, y publicó en febrero de 1945 en el primer número del Boletín de Arqueología. Allí escribe que los cuentos aparecen “en la misma forma como me han sido referidos, sin alteración alguna”, y que se los refirió el cacique Tangrutaya Mutsu, anciano septuagenario, en un castellano a veces confuso, de noche, recostado en su hamaca, en voz baja y lenta, sólo ante hombres y interrumpiendo cada vez que entraba una mujer a la casa.

De todos los textos del conjunto, este es el que el propio narrador usó como prueba de que decía verdad. Para responder a quienes tomaban sus cuentos por mentira, Mutsu decía que los que saben cómo ronca el tigre en el monte y cómo canta el mono por las mañanas dirían que el Capitán Mutsu dijo la verdad. El tigre y el mono de esa frase son dos de los que hablan aquí: el criterio de veracidad del narrador y el contenido de este texto son la misma cosa.

El recopilador agrupó los textos diecisiete a veintiuno como cuentos de animales y comentó que “para el primitivo se borra el límite entre animal y hombre”, señalando la frase “son gente como nosotros” como la clara expresión de esa concepción. Ese vocabulario y esa interpretación son suyos, de 1945, y no del narrador.

Su propia monografía del año siguiente, la Etnografía chimila de 1946, permite ver el monte del que se habla: dantas, zainos, tatabros y monos aulladores “se encuentran a cada paso”, así como pavas y guacharacas. En ella consigna además la creencia de que los shamanes llevan una doble vida convirtiéndose en tigres. Pero no vuelve sobre este texto ni discute la frase final.

La antología El sol babea jugo de piña, compilada por Miguel Rocha Vivas, reedita el conjunto como literatura ette y no constituye un registro oral nuevo. Del lado contemporáneo, Juan Camilo Niño Vargas aporta el fondo que falta: en su trabajo sobre los campos de cultivo ette explica que la mayoría de los animales tiene una faceta humana “tan recóndita que bien puede ser ignorada en la vida diaria”; en su estudio sobre la hamaca describe un pasado animal vinculado a lo bajo y reúne relatos de personas convertidas en oso hormiguero, armadillo o jaguar; y en su análisis de un mito astral señala que los ette poseen todo un género de historias sobre humanos adoptados por animales, las más ricas y largas de su mitología. Ninguno de esos trabajos comenta esta declaración ni recoge una versión suya.

Nadie registró qué palabra del ette taara tradujo el recopilador como “hablar”, ni si la fórmula final era de Mutsu o de uso general.`,
    versiones: `De este texto existe un solo testimonio documentado: el que Tangrutaya Mutsu dictó en castellano en 1944 y que se imprimió en 1945. La antología de Rocha Vivas lo reproduce, de modo que no hay dos registros orales sino uno solo con dos publicaciones. Tener un único testimonio significa que no se puede saber qué animales nombraban otros narradores, si la lista era siempre la misma ni si el cierre variaba; lo que hoy existe es una lista fijada por escrito en una noche de 1944.

Las grafías cambian. El impreso escribe “Ardita”, nombre con que se designa a la ardilla en la costa; “tigre” es el jaguar en el castellano regional, y el pueblo que allí se llama chimila hoy se nombra Ette Ennaka.

La divergencia mayor no está entre dos versiones del texto, sino entre el texto y la etnografía posterior. La fórmula de 1945 dice sin matices que los animales son gente como nosotros. El trabajo de Niño Vargas de 2020 describe una humanidad escalar: los animales encarnan lo infrahumano y, en consonancia, “se crían y cazan sin mayores consideraciones morales”, con una faceta humana que puede ignorarse en la vida diaria. Las dos afirmaciones no se anulan, pero la segunda impide leer la primera como si declarara una igualdad entre especies o una prohibición de cazar. El cierre de 1945 afirma que hablan; no afirma que no se maten.

Esta revisión corrige el texto heredado por dos vías. Sacó del relato el aparato crítico, que discutía dentro de la historia lo que había hecho una versión anterior. Y retiró las expansiones que convertían la enumeración en un bosque simbólico, en una asamblea de animales o en un tiempo mítico en el que los humanos habrían perdido la facultad de entenderlos: nada de eso está en las diez líneas impresas. Se conservaron, en cambio, los ejemplos concretos, el orden en que se nombran las especies, la ardilla que casi no se entiende y la réplica final a quienes lo niegan.`,
    similitudes: `El mismo conjunto de 1944 permite ver que la frase final no significa siempre lo mismo. En El morrocoyo, el texto veintiuno, se dice que antes los morrocoyos eran gente como nosotros, que no tenían concha y vivían en los árboles: allí ser gente es un pasado que terminó y que dejó marcas en el cuerpo del animal, las patas traseras tiesas y la cola corta. Aquí, en cambio, no hay antes: los animales hablan ahora y no se explica ningún origen.

En Cómo los Chimila consiguieron el fuego, el texto seis, el brujo Huhum se cambia en el sapo Mamu, cruza el Gran Río con una braza en la boca y se queda sapo; el cierre dice que desde entonces los sapos son gente como nosotros y no se deben matar. Ser gente tiene allí una consecuencia práctica, una prohibición. En esta enumeración no la tiene: la danta, el venado y la tortuga que hablan son también las presas que la gente caza.

El contraste más exacto está en Los muertos en el monte, el texto trece: un hombre perdido encuentra la casa de los muertos, les pregunta por el camino y ellos lo miran y le contestan, pero él no entiende nada porque hablan otra lengua, la lengua de los muertos. Es el reverso de Ardita, a quien tampoco se le entiende del todo y que sin embargo sigue siendo de los que hablan.

Fuera del corpus, la creencia en el tigre que es otra cosa no es sólo chimila. El propio recopilador anotó en 1946 que la idea de que los shamanes llevan doble vida convirtiéndose en tigres se encuentra también entre los kobeua, los tukano del Vaupés, los guayupe, los koreguaje y tama, los huitoto y los roucouyenne. La diferencia importa: allá el tigre es un hombre transformado y por eso inquieta; aquí el tigre no es nadie transformado, simplemente habla, como habla la tortuga.`,
    leccion:
      "Quien niega que el monte hable suele estar midiendo el habla con su propio oído.",
    sceneHorizontal:
      "dantas, monos, un tigre, una tortuga, un venado, pájaros y una ardilla ocupan distintos planos del bosque y se responden mediante cintas gráficas sin texto",
    sceneVertical:
      "una danta encuentra frutos y llama a otras mientras monos saludan el amanecer desde las ramas",
    researchNotes:
      "NO UNIFICAR: la afirmación general se distingue del episodio de la flecha en Los monos. LENGUAJE: no se inventan palabras animales.",
  }),
  myth({
    slug: "los-monos",
    fuentesAgotadas: "El relato de los monos que son gente sólo está en Reichel-Dolmatoff, Mitos y cuentos de los indios Chimila (1946), que la ficha ya cita con la antología de Banrep y los estudios ette de Estudios de Lingüística Chibcha (UCR), Tabula Rasa y el Journal de la Société des Américanistes. Se buscó en el ICANH (sólo ficha de catálogo), Banrep («Cómo los chimila consiguieron agua», otro mito), Scribd y blogs (vetados): no hay otro registro del relato.",
    sourceKeys: [
      "reichel1945",
      "rocha2010",
      {
        key: "vargastravesia2013",
        summary:
          "Transcribe, traduce y analiza un mito ette protagonizado por primates, una niña raptada por monos que debe volver a casa de sus padres, y demuestra que los monos ocupan un lugar propio y elaborado en la mitología ette.",
        limitation:
          "No es el episodio de la flecha devuelta: es otro relato del mismo pueblo, recogido casi setenta años después y leído en clave astral.",
      },
      {
        key: "vargasdivision2020",
        summary:
          "Distingue dos cacerías ette: la que se hace desplazándose por el monte, que implica penetrar un dominio divino para apropiarse de una criatura ajena observando preceptos y tabúes, frente a la de emboscada en rastrojos, con muchas menos restricciones morales.",
        limitation:
          "No comenta el relato ni describe una regla concreta sobre los monos: el marco general hay que aplicarlo al episodio.",
      },
      {
        key: "vargastejido2014",
        summary:
          "Reúne los relatos ette de tránsito entre humanidad y animalidad, incluido el jaguar que se hace pasar por humano hasta ser flechado en la hamaca, y sitúa a los animales en un pasado animal vinculado a lo bajo.",
        limitation:
          "No trata a los monos en particular ni la inversión de la cacería: sus ejemplos son oso hormiguero, armadillo y jaguar.",
      },
      {
        key: "reichelDolmatoffEtnografia1946",
        summary:
          "Describe el arco y la flecha con detalle técnico, con puntas distintas para caza mayor y para pájaros, y consigna que los monos aulladores se encuentran a cada paso en la región: el arma y el animal exactos del episodio.",
        limitation:
          "Es etnografía material y de subsistencia: no vuelve sobre el cuento del mono que devuelve la flecha.",
      },
    ],
    title: "El mono que devolvió la flecha",
    summary:
      "Los monos cantan y salen a montear como gente; uno toma la flecha disparada por un cazador, la devuelve y mata al atacante.",
    tags: ["monos", "flecha", "caza", "reciprocidad"],
    mito: `Los monos son gente.

Por la mañana, cuando el día apenas está empezando, los monos van hacia la quebrada. Van cantando, y lo que cantan es esto: “Ho, ho, está bien el día! Vamos a montear!”. Primero dicen cómo amaneció el día y enseguida dicen qué van a hacer con él. Lo dicen en voz alta, camino de la quebrada, cuando el monte apenas está aclarando.

No es cosa de una mañana sola. Todas las mañanas bajan a la quebrada y todas las mañanas va con ellos ese canto, que anuncia el día y anuncia la salida.

Y así van monteando, como monteamos nosotros. Salen temprano, se meten por el monte, buscan de comer y se pasan el día en esa busca, y vuelven cuando han encontrado. No es que parezcan gente cuando lo hacen. Es que lo hacen porque son gente.

Un día un hombre disparó su flecha contra un mono. La flecha llegó y casi lo mató. Casi, pero no lo mató: el mono quedó vivo, y la flecha que iba a matarlo quedó ahí, al alcance de su mano.

El tiro había salido de detrás de un árbol. El hombre se había escondido detrás de ese árbol para disparar y allí seguía, tapado por el tronco, mirando lo que había hecho su flecha.

El mono no salió huyendo. Cogió la flecha. Cogió esa misma flecha, la que acababan de dispararle a él, y la lanzó contra el hombre que estaba escondido detrás del árbol. El tronco no alcanzó a taparlo. La flecha le dio y lo mató.

Así quedó la cosa esa mañana en el monte: el mono vivo, con la flecha ya lanzada, y el hombre muerto detrás del árbol donde se había escondido para tirarle.

Los monos son gente y son como nosotros. Así es.`,
    historia: `Este es el texto dieciocho del conjunto que Gerardo Reichel-Dolmatoff recogió a mediados de 1944 entre los chimila, entre los ríos Magdalena y Ariguaní, y publicó en febrero de 1945 en el Boletín de Arqueología. Ocupa nueve líneas y va inmediatamente después de la declaración general de que todos los animales hablan, a la que repite y pone a prueba: abre diciendo que los monos son gente, cuenta un caso y cierra repitiendo la misma frase. La estructura es la de una afirmación seguida de su comprobación.

El canto de los monos por la mañana no es un detalle de ambiente. Es lo que el propio narrador, el cacique Tangrutaya Mutsu, invocaba como prueba de que decía verdad: quienes saben cómo canta el mono por las mañanas, decía, reconocerían que el Capitán Mutsu no mentía. El texto empieza justamente por ahí.

El recopilador archivó este cuento dentro de su nota conjunta sobre los relatos de animales, pero no le dedicó ni una línea propia. Sus comparaciones de esa nota, el monstruo que se traga a un hombre y el sueño clarividente, corresponden a los textos veinte y diecinueve. El episodio de la flecha devuelta quedó sin comentario alguno.

La monografía del mismo autor, la Etnografía chimila de 1946, permite ver con precisión lo que ocurre en la escena. Describe tres formas de flecha, dos de punta lanzoide con garfios para caza mayor y guerra y una de punta roma para pájaros, flechas de alrededor de metro y medio y sin emplumado; consigna que la caza “se efectúa sólo con arco y flecha” y que él no vio emplear trampas en ningún caso; y aclara que en la caza nunca se usan flechas envenenadas, porque el veneno actúa con lentitud y mataría sólo horas o días después. La flecha que el mono devuelve es, entonces, un arma que mata de inmediato y que mata igual en manos de un hombre o de un mono. La misma monografía anota que los micos abundan en la región pero que nunca los vio domesticados.

Del lado contemporáneo, Juan Camilo Niño Vargas transcribió y analizó otro relato ette de primates, el de una niña raptada por monos que debe hacer un penoso viaje de regreso a la casa de sus padres, y mostró que las historias de humanos adoptados por animales son las más ricas y largas de la mitología ette. No es este episodio ni una variante suya: es otro relato, recogido casi setenta años después. En su estudio sobre los campos de cultivo distingue además dos cacerías ette, que ayudan a pesar la escena sin nombrarla.

Nada dice de dónde ocurrió, si el hombre cazaba solo, si había roto alguna regla ni qué hicieron los suyos al encontrarlo.`,
    versiones: `De este episodio no hay más de una versión documentada. Existe un solo testimonio, el que Mutsu dictó en 1944 y que se imprimió en 1945, reproducido después por la antología de Rocha Vivas sin volver a preguntar a nadie. Con un solo testimonio no se puede saber si el cuento se contaba más largo, si el hombre tenía nombre o si había un desenlace que la noche de la grabación quedó fuera: lo que se conserva son nueve líneas, y todo lo que exceda esas nueve líneas es añadido.

El encabezado impreso es “Los monos”, en plural y sin anécdota. El título con que hoy se presenta, el del mono que devolvió la flecha, es editorial: escoge el episodio como lo más memorable de un texto que en su origen se anunciaba como una afirmación sobre una especie.

Hay una variación interna que conviene no confundir con dos mitos distintos. En el texto diecisiete los monos cantan “Ho-ho, qué buen día!” y otros contestan; aquí cantan “Ho, ho, está bien el día! Vamos a montear!”. Es el mismo canto dicho dos veces en la misma noche y por el mismo narrador, con palabras algo distintas: una huella de oralidad, no una variante mítica. Por eso los dos textos se mantienen separados, tal como los numeró el impreso, pero no se leen como versiones rivales.

La revisión retira lo que el texto heredado había agregado: el río, la bruma, una cacería colectiva y un mono convertido en embaucador. El mono no engaña ni roba un arma. Recibe una flecha y devuelve esa misma flecha, sin astucia y sin demora.

También corrige el sentido que se le daba al cierre. La etnografía contemporánea advierte que entre los ette los animales se cazan sin mayores consideraciones morales, de modo que decir que los monos son gente no equivale a decir que no se cazan. El final repite la afirmación inicial después de una muerte humana; no proclama una regla nueva.`,
    similitudes: `En el mismo conjunto de 1944 hay otro animal que toma las armas de la gente. En El morrocoyo, el texto veintiuno, dos hombres discuten y uno se niega a disparar diciendo “es gente como tú y yo”, pero el otro insiste y le da al morrocoyo en una pata; el animal escapa al agua y a la mañana siguiente coge su arco y su flecha y mata a una mujer que iba por agua. Las diferencias son grandes: allí la agresión del animal llega al día siguiente y contra alguien que no disparó, tiene explicación en la ofensa recibida, deja marcas en el cuerpo del morrocoyo que explican su forma actual y termina con los hombres matándolo y comiéndolo. Aquí todo ocurre en el mismo instante, con la flecha del propio cazador, y no ocurre nada después.

Entre los mismos ette, Niño Vargas recogió el relato del jaguar que se hace pasar por humano hasta que lo delatan sus ronquidos, su hedor y su miedo a los perros, y termina flechado en la hamaca. Ese animal esconde su condición y por eso lo matan. Los monos de este episodio hacen lo contrario: la anuncian cantando cada mañana, y aun así les disparan.

El paralelo más cercano fuera del país es yaqui. En el texto “U yoeme maasom aamu”, recogido en 2010 en Estación Vícam, Sonora, y publicado por Lilián Guerrero y Paola Gutiérrez Aranda, un hombre muy buen cazador convierte la caza en obsesión y caza a diario sin respetar a los venados; entonces un venado negro caza al hombre, que no muere sino que queda convertido en mitad venado y mitad humano, obligado a vivir en el bosque. El relato yaqui nombra la falta y castiga con una transformación. El episodio ette no dice que el cazador hubiera hecho nada indebido, y no lo transforma: lo mata.`,
    leccion:
      "Tratar a otro como presa supone que nunca sabrá qué hacer con el arma que se le lanza.",
    sceneHorizontal:
      "un mono sobre una rama sostiene la flecha que acaba de caer mientras un cazador adulto permanece detrás de un árbol, sin impacto ni herida",
    sceneVertical:
      "varios monos cantan al amanecer junto a una quebrada y uno lleva una flecha sin usar entre las manos",
    researchNotes:
      "CORRECCIÓN: no es trickster ni animal humanizado por sorpresa. IMAGEN: se excluye la muerte y se conserva la inversión de la caza.",
  }),
  myth({
    slug: "el-hombre-que-sono-con-danta",
    sourceKeys: [
      "reichel1945",
      "rocha2010",
      "nino2008",
      {
        key: "vargasSueno2007",
        summary:
          "Documenta que para los ette el sueño es un acontecimiento real del componente anímico que se desliga del cuerpo, y que para propiciar una cacería exitosa el joven cazador debe concentrarse en su presa mucho antes de salir al bosque: la lógica misma por la que los compañeros mandan al soñador tras la danta.",
        limitation:
          "Trabajo de campo reciente que no menciona este relato ni su desenlace: documenta la concepción del sueño, no su cumplimiento fallido.",
      },
      "vargasOoyoriyasa2007",
      {
        key: "vargasdivision2020",
        summary:
          "Define la caza en la selva como penetrar un dominio divino para apropiarse de una criatura ajena, bajo estrictos preceptos y tabúes, lo que da sentido a que salir tras la danta soñada termine en una muerte y no en un accidente neutro.",
        limitation:
          "No menciona sueños ni el episodio del árbol caído: su materia son los campos de cultivo.",
      },
      {
        key: "reichelDolmatoffEtnografia1946",
        summary:
          "Registra que la abundancia de animales de presa es grande en la región y que las dantas se encuentran a cada paso, y detalla el arco y las flechas de caza mayor: el equipo con que el grupo mata al animal del relato.",
        limitation:
          "No comenta el relato ni la expresión con que se califica a la danta: aporta el entorno de caza y la cultura material.",
      },
      "reverolHacer2017",
    ],
    title: "El hombre que soñó con una danta",
    summary:
      "Un hombre sigue un sueño donde un árbol mata a una danta, pero el árbol cae sobre él; sus compañeros encuentran después a la llamada danta mala.",
    tags: ["sueño", "danta", "árbol", "muerte"],
    mito: `Un día, por la mañana, un hombre dijo: “Me soñé con danta!”.

Los otros le preguntaron: “¿Cómo te soñaste con danta?”. Y entonces dijeron: “Cuéntanos!”.

El hombre contó: “Me soñé que yo iba monteando y que me encontré un gran árbol que se había caído, matando la danta. La saqué y comí mucho”. En el sueño iba por el monte como va cualquiera a buscar comida, y había un árbol grande caído en el suelo, y debajo del árbol estaba la danta muerta, y él la sacaba de ahí y comía mucho, hasta quedar lleno.

Los otros oyeron y le dijeron: “¿Por qué no vas por el monte a ver si encuentras la danta?”. El hombre dijo: “Es verdad!” y se fue. Se fue solo, esa misma mañana, a buscar por el monte el árbol caído y la danta que debía estar debajo.

Entonces, cuando él iba por allá, se levantó mucho viento en el monte. Y de golpe se cayó un gran árbol. El árbol no cayó sobre ninguna danta: cayó sobre el hombre y lo mató. Quedó él debajo del tronco, como en el sueño había quedado la danta.

Los otros se quedaron donde estaban, esperándolo. Pasó el tiempo y el hombre no regresaba. Como no regresaba, dijeron: “Vámos a buscarlo!”. Así se fueron al monte por donde él había entrado, y lo buscaron, y lo encontraron muerto.

Ahí mismo, junto al muerto, dijeron: “Vámos a buscar la danta”.

Y la buscaron. Buscaron por allí y buscaron por allá, por un lado del monte y por el otro, y siguieron buscando hasta que por fin la encontraron. La danta estaba viva y andaba suelta por ahí, lejos del tronco que había matado al hombre. Le clavaron tres flechas y con esas tres la mataron.

Era una danta mala.`,
    historia: `Este es el texto diecinueve del conjunto que Gerardo Reichel-Dolmatoff recogió a mediados de 1944 entre los chimila del Magdalena y publicó en febrero de 1945 en el Boletín de Arqueología. El narrador fue el cacique Tangrutaya Mutsu, que contaba de noche, recostado en su hamaca, en un castellano a veces confuso, sólo ante hombres, y que interrumpía cada vez que una mujer entraba a la casa. El cuento es de hombres que salen a montear juntos, que oyen juntos un sueño y que juntos deciden qué hacer con él.

En sus notas, el recopilador no comentó este texto uno por uno: lo agrupó con los otros cuentos de animales y se limitó a observar que “con el sueño clarividente se inician varios cuentos como el de la Danta y el del Caimán”. La expresión sueño clarividente es suya, de 1945, y clasifica el episodio antes de explicarlo.

Su propia monografía del año siguiente permite medir lo que ocurre al final. Allí anota que la caza “se efectúa sólo con arco y flecha” y que no vio emplear trampas en ningún caso; que hay tres formas de flecha, dos con garfios para caza mayor y guerra; y que en la cacería nunca se usan flechas envenenadas, porque ese tóxico actúa con lentitud y mata sólo horas o días después. Tres flechas para derribar una danta es, entonces, lo que cuesta matar sin veneno al animal más grande del monte, un animal que según esa misma monografía se encontraba “a cada paso” en la región.

Lo que esa monografía no trae, en cambio, es una sola línea sobre los sueños. Toda la capa documental sobre el soñar ette proviene de un trabajo de campo posterior en más de medio siglo: el de Juan Camilo Niño Vargas en Issa Oristunna. Según él, el sueño ette no es una imagen sino un acto, ooyori, protagonizado por too, el componente anímico, que abandona el cuerpo y se aventura por parajes conocidos y desconocidos; la experiencia es “tan real como cualquier otro suceso acaecido en la vigilia” y ocurre en un mundo compartido, al que todos tienen acceso. De ahí que se pueda asegurar, escribe, que “con el fin de propiciar una faena exitosa, el joven cazador debe concentrarse en su presa mucho antes de abandonar el hogar y dirigirse al bosque”, y que lo pensado de día oriente lo que too hace de noche, hasta el punto de revelar dónde quedó un objeto perdido. Con ese marco, lo que los compañeros proponen deja de ser un capricho: una danta soñada es una danta que está en alguna parte. En su estudio sobre los ciclos de destrucción, el mismo autor muestra además que las imágenes oníricas sirven a los ette para saber hacia dónde van las cosas. Y en su trabajo sobre los campos de cultivo distingue dos maneras de cazar: la del monte, yu'ma, “cazar desplazándose”, que implica entrar en un dominio divino para apropiarse de una criatura ajena observando estrictos preceptos y tabúes, frente a la emboscada en los rastrojos, donde no hay espíritus dueños de la fauna. Salir tras una danta soñada pertenece a la primera clase, aunque el cuento no nombre ninguna regla.

Ninguno de esos trabajos cita este cuento. Tampoco pudo comprobarse si lo comenta Ooyoriyasa, su libro de 2007 sobre interpretación onírica, que está impreso y del que en línea sólo hay ficha editorial.`,
    versiones: `De este cuento no hay más de una versión documentada. El único testimonio es el que Mutsu dictó en 1944 y que se imprimió en 1945; la antología de Rocha Vivas lo reproduce sin volver a recoger nada. Con un solo testimonio no se puede saber si otros narradores explicaban qué hacía mala a la danta, ni si el desenlace era siempre ese.

Hay además un problema de letra impresa. En 1945 la frase dice: “hubo muchos viendo y de golpe se cayó un gran árbol”. En el mismo conjunto, el cuento de la mala mujer usa dos veces la fórmula “hubo un gran viento” para marcar el momento en que algo aparece o desaparece en el monte. Todo indica que “muchos viendo” es una errata por “mucho viento”, y así se ha leído aquí. Queda constancia por si alguien prefiere el literal, que dejaría al hombre rodeado de testigos en el momento de morir.

El texto heredado afirmaba que el sueño anunciaba la muerte del soñador. No es lo que el sueño mostraba. En el sueño hay un árbol caído, una danta muerta debajo y un hombre que come; en la vigilia hay un árbol caído, un hombre muerto debajo y una danta viva. No se cumple el sueño: se intercambian los lugares. Esa inversión es el cuento, y borrarla lo convierte en una advertencia contra los deseos.

La lectura contemporánea del soñar ette, que vuelve inteligible la salida al monte, es un marco de otro tiempo y no está en el cuento: aquí nadie interpreta nada, sólo se pregunta “¿Cómo te soñaste?” y se propone ir a ver.

Se conserva la expresión final, “era una danta mala”, sin convertir al animal en demonio ni explicar que hubiera derribado el árbol. Vale la pena notar que el corpus cierra así otras veces: el cuento doce termina diciendo de una mujer que mandó a trabajar a un viejo enfermo “era una mala mujer”. Es una sentencia dictada después del muerto, no la descripción de una especie.`,
    similitudes: `El paralelo más cercano está pegado a este cuento en el mismo conjunto: el del hombre que soñó con caimán, el texto veinte. Los dos empiezan igual, con un hombre que amanece anunciando su sueño y con los otros preguntándole cómo fue. Ahí se separan. Allá el sueño asusta al que lo tuvo y es el hermano quien no lo cree, y el sueño se cumple contra la voluntad del soñador; aquí el sueño promete comida, los otros lo creen antes que él y son ellos quienes lo empujan al monte. Allá el hombre entra al animal y sale vivo; aquí sale de su casa y no vuelve.

Otro cruce ocurre en el cuento doce del mismo conjunto. Dos hijos van por el monte buscando danta y lo que encuentran no es el animal sino a su padre, muerto esa mañana en la roza, pintado de achiote y con corona de plumas, que les habla, les da una orden y desaparece en medio de un gran viento. En los dos casos el monte devuelve algo distinto de lo que se salió a buscar, pero allá lo que espera es un muerto que habla, y aquí es un árbol que cae.

Entre los wayuu, vecinos del norte, el sueño tiene dueño y obliga. Carmen Laura Paz Reverol documenta que Lapü es la deidad que transmite mensajes mientras se duerme, que el aa'in deambula de noche y se encuentra con seres que le dan razones, que un sueño puede llegar “como si fuera un aviso” de que algo malo va a pasar, y que lo propio es escuchar y hacer los sueños, es decir, cumplirlos. La diferencia con este cuento es precisa: allá quien manda es una deidad nombrada y el soñador queda obligado; aquí no aparece ninguna deidad, la presión de cumplir el sueño viene de los compañeros que lo oyeron contar, y el resultado no confirma a nadie.`,
    leccion:
      "Un sueño puede señalar hacia dónde ir sin decir a quién le espera lo que muestra.",
    sceneHorizontal:
      "un hombre duerme y sueña con una danta junto a un árbol caído, mientras otro plano muestra el mismo árbol movido por el viento",
    sceneVertical:
      "los compañeros encuentran el gran tronco en el monte y distinguen una danta viva a distancia, sin cadáver ni caza explícita",
    researchNotes:
      "CORRECCIÓN: el sueño no muestra la muerte del soñador. CAUTELA: la danta mala se conserva como frase de la fuente, sin demonización visual.",
  }),
  myth({
    slug: "el-hombre-que-sono-con-caiman",
    sourceKeys: [
      "reichel1945",
      "rocha2010",
      "nino2008",
      "toroentranas2013",
      {
        key: "vargasSueno2007",
        summary:
          "Sostiene que los ette conciben el sueño como un evento real en el que el componente anímico se desliga del cuerpo y puede aventurarse por el bosque o entrar en contacto con entidades sobrenaturales, y que de esa experiencia el soñante obtiene conocimientos culturalmente avalados.",
        limitation:
          "No cita este relato ni describe la técnica con que se llama a la caza: documenta la teoría ette del sueño.",
      },
      {
        key: "vargasOoyoriyasa2007",
        summary:
          "Única monografía dedicada a la cosmología y a la interpretación onírica ette, el marco donde cobra sentido que un sueño produzca miedo, sea desestimado por otro y se cumpla en la vigilia.",
        limitation:
          "Libro impreso: sólo su ficha editorial está en línea.",
      },
      {
        key: "reichelDolmatoffEtnografia1946",
        summary:
          "Del mismo recopilador y un año posterior, describe el arco y las flechas, la vida junto a ríos y ciénagas y las especies que el hombre trae después, además de la creencia en médicos que llevan una doble vida animal.",
        limitation:
          "No reproduce ni comenta el cuento: es la descripción material y de creencias que lo rodea.",
      },
      "ehrenreichMythen1905",
      {
        key: "thurnAmong1883",
        summary:
          "Contiene el relato que la ficha y el recopilador de 1945 invocan como paralelo de Guayana (pp. 385-386): un piache akawaio envuelve dos palos de hacer fuego para que no se mojen, se zambulle en el raudal de Ouropocari, entra en el vientre del omar que hundía las canoas, prende fuego a la madera podrida que hay dentro y el monstruo, dolorido, sube a la superficie, lo eructa y muere. El autor lo agrupa con Jonás y la ballena como caso del hombre que entra en el vientre de un animal y sale a salvo.",
        limitation:
          "Es akawaio de la Guayana británica, no karib en sentido estricto, y no menciona caimán, flecha ni tranca: el piache sale porque el omar lo eructa, no porque le atranque la boca. Contradice, por tanto, la afirmación de Ehrenreich que recoge el comentario de 1945 y que la ficha reproduce.",
      },
      "gillMyths1876",
      "rothInquiry1915",
    ],
    title: "El hombre que soñó con un caimán",
    summary:
      "Un caimán traga al soñador; él escapa con una flecha y, tras recuperarse en el monte, aprende del animal a llamar la caza con un silbido.",
    tags: ["sueño", "caimán", "caza", "transformación"],
    mito: `Un día, por la mañana, un hombre dijo: “Me soñé con caimán!”. Los otros le preguntaron: “¿Cómo te soñaste con caimán?”.

El hombre contó: “Me soñé que yo andaba en la playa y me encontré un huevo grande de caimán. Me lo comí. Ahora tengo miedo que el caimán me va a comer a mí!”.

Su hermano le dijo: “Tu eres muy bobo! El caimán es gente como nosotros y no te va a comer!”.

Por la tarde el hermano dijo: “Vámos a pescar!”. El otro contestó: “No voy al río porque tengo miedo del caimán!”. “Vámonos”, dijo el hermano. Así los dos se fueron al río y se pusieron a pescar en la playa.

Entonces salió un caimán grande, cogió al hombre que se había soñado así y se lo tragó. Como el hombre llevaba su arco y su flecha, el caimán se los tragó también.

Adentro del caimán, el hombre dijo: “Tengo mucha hambre y no hay comida; tengo sed y no hay bebida: quiero ver la luz y aquí estoy en la obscuridad”.

Entonces oyó que afuera cantaba un mono. “Será de día si cantan los monos!”, dijo. Y cogió su flecha y chuzó al caimán en la barriga, por dentro.

El caimán salió de su cueva y dijo: “¿Quién me está chuzando?”. El hombre lo chuzó otra vez, y más, y más, hasta que el caimán iba casi loco por arriba y por abajo en el río.

Entonces al caimán le dio mucha tos y abrió la boca. El hombre le puso la flecha trancándole la jeta para que no la pudiera cerrar, y salió corriendo. Saltó y cayó en la playa como muerto.

Por la noche se despertó y se fue a su casa. Cuando llegó, la gente estaba tomando chicha, y su hermano se levantó y lo saludó. Entonces el hombre le dijo: “Así es cuando uno se sueña con caimán. Pero tú no quisiste creerlo!”.

El hombre se sentía muy enfermo, y dijo: “Estoy enfermo y no quiero quedarme con mi familia. Iré al monte y cuando esté mejor, volveré”. Así fue. Después de algún tiempo el hombre volvió y estuvo otra vez gordo.

Un día se fue al monte a cazar y cuando volvió, por la noche, traía en su mochila mono y tatabro y guatinaja. “Eres un buen cazador”, le dijeron los otros. Al día siguiente se fue a cazar y trajo por la noche danta. Al día siguiente trajo zaino.

Entonces los hombres dijeron: “¿Cómo hace él para conseguir tanta comida? Vámos a seguirlo mañana y a escondernos para ver si consigue comida”. Así fue: al día siguiente los hombres se escondieron en el monte para ver cómo conseguía tanta presa.

Entonces vino el hombre y silbó, y vino mono; el hombre lo mató y lo puso en la mochila. Entonces el hombre silbó, y vino tatabro; el hombre lo mató y lo puso en la mochila. Entonces el hombre silbó, y vino zaino; el hombre lo mató y lo puso en la mochila. Entonces regresó a su casa.

Por la noche los hombres le preguntaron: “¿Cómo haces para conseguir tanta comida?”.

“Lo aprendí del caimán!”, dijo el hombre. Y así fue.`,
    historia: `Este es el texto veinte del conjunto recogido a mediados de 1944 entre los chimila, entre los ríos Magdalena y Ariguaní, y publicado en febrero de 1945 por Gerardo Reichel-Dolmatoff en el Boletín de Arqueología. Es el más largo de los cinco cuentos de animales y el único del conjunto con una secuencia completa de sueño, peligro, fuga, enfermedad, retiro y aprendizaje. El narrador, el cacique Tangrutaya Mutsu, lo contó de noche, en su hamaca, sólo ante hombres; el cuento es de dos hermanos y termina con una partida de hombres escondidos en el monte espiando a uno de los suyos.

Es también el cuento que más comentó el recopilador, y donde reconoció su límite. Situó el motivo del monstruo que se traga a un hombre en Polinesia y en América, entre los chocó, los cuna, los akawoí y los warrau de la boca del Orinoco; recordó, siguiendo a Ehrenreich, que en el mito polinésico de Ratham de Aututaki el héroe sale del monstruo poniéndole su lanza como tranca en la jeta, y que Im Thurn registró ese mismo rasgo en un cuento karib de Guayana. Pero sobre lo que el cuento tiene de propio, que el héroe aprendiera del caimán el arte de la cacería, escribió que seguramente tiene paralelos en la mitología americana “pero el material comparativo no está a mi disposición”. El silbido que llama la presa se quedó, desde 1945, sin una sola fuente que lo documente.

Su monografía de 1946 describe el entorno: la pesca con arpón de tres puntas y con jugo de corteza, y la fauna que el hombre trae después, dantas, zainos, tatabros y monos aulladores, que se encontraban “a cada paso”. No vuelve sobre el caimán ni sobre el cuento.

Este es, además, el único texto del conjunto que otro autor volvió a contar. Arturo Cifuentes Toro lo resume paso a paso en 2013, citando la página 16 de la edición de 1945, dentro de un artículo sobre la iconografía del caimán en la estatuaria de San Agustín; y añade que el propio Reichel-Dolmatoff, en Orfebrería y chamanismo, lo relacionó con los chamanes esqueleteados y con la figura del hombre tragado por un monstruo acuático que regresa purificado y sabio. Esa lectura es de 1988 y del recopilador, no del narrador de 1944.

Del lado contemporáneo, el trabajo de Juan Camilo Niño Vargas sobre el soñar ette describe el sueño como un acto de too, el componente anímico, que abandona el cuerpo y se aventura por espesos bosques, puede devorar alimentos nocivos y entrar en contacto con entidades asociadas con la enfermedad, sin que el soñante quede del todo libre de responsabilidad por lo que too hizo. Comerse en sueños un huevo de caimán deja de ser, con ese marco, una imagen: es algo que alguien hizo. Pero ese trabajo es de sesenta años después y no cita este cuento. Lo mismo vale para su estudio sobre los ciclos de destrucción, donde las imágenes oníricas sirven para saber qué se viene encima, y para Ooyoriyasa, su libro sobre interpretación onírica ette, del que en línea sólo hay ficha editorial y que por tanto no pudo consultarse.`,
    versiones: `El testimonio oral sigue siendo uno solo, el de Mutsu en 1944, y la antología de Rocha Vivas lo reproduce sin añadir registro nuevo. La diferencia con los demás cuentos del conjunto es que este sí tiene un segundo relato impreso: el resumen que publicó Arturo Cifuentes Toro en 2013, y que se aparta del original en varios puntos.

Allí la playa pasa a ser la playa del río Magdalena, cuando el texto de 1945 dice sólo “la playa” y el río sin nombre. El huevo ya no se encuentra y se come, sino que se le quita al caimán. Quien tranquiliza al soñador ya no es su hermano, sino “la gente”, con lo que se pierde el reproche final, que es del hermano y sólo tiene sentido contra él. La enfermedad y el retiro al monte quedan reducidos a una línea. Y el conjunto se lee a través de los chamanes esqueleteados y de un arquetipo de purificación. Ninguna de esas cosas está en el impreso de 1945.

Esta revisión sigue el impreso. El hombre no se lleva un huevo: encuentra uno grande y se lo come, y de ahí sale su miedo. La secuencia final se conserva entera y en su orden, porque el orden es el sentido: primero la fuga, después la casa con la gente tomando chicha, después el reproche al hermano, después la enfermedad y la decisión de irse del lado de la familia, después el tiempo en el monte, después el regreso gordo, y sólo entonces la cacería abundante. El texto heredado en esta página comprimía ese tramo y presentaba el silbido como un premio inmediato.

Se conservan las palabras del impreso: chuzar, trancarle la jeta, tatabro, guatinaja, zaino, mochila. Y se conserva lo que el cuento no explica: no hay ninguna escena de enseñanza dentro del vientre, nadie le dice nada al hombre allá adentro, y la única explicación del silbido es la frase con que él responde a los suyos.`,
    similitudes: `El primero en buscar parecidos fue quien publicó el cuento. En 1945 anotó que el motivo del hombre tragado por un monstruo se encuentra en Polinesia y, en América, entre los chocó, los cuna, los akawoí y los warrau de la boca del Orinoco, y recogió de Ehrenreich una coincidencia exacta: en el mito polinésico de Ratham de Aututaki el héroe se libra poniéndole su lanza como tranca en la jeta al monstruo, y el mismo rasgo aparece en un cuento karib de Guayana citado por Im Thurn. La diferencia está en el arma y en lo que se saca de adentro: aquí la tranca no es una lanza sino la flecha de cacería que fue tragada junto con el hombre, y lo que el hombre trae del vientre no es sólo su vida, sino una manera de llamar a los animales.

Cifuentes Toro suma un paralelo americano tomado de Lévi-Strauss: entre los kayapó se cuenta de un hombre encolerizado con el fuego que se acuesta sobre las piedras ardientes del horno, marcha al río, desaparece en el agua convertido en caimán y regresa después indemne, con pececillos atrapados en la cabellera, enseñando los cantos rituales que aprendió entre los peces y repartiendo nombres ceremoniales. El movimiento es inverso: allá el hombre se vuelve caimán y vuelve con cantos; aquí sigue siendo hombre, es tragado por el caimán y vuelve con un silbido.

Dentro del mismo conjunto de 1944 hay otro cuerpo que entra al agua y saca de ella algo que cambia la vida en tierra. En el texto seis, el brujo Huhum se cambia en el sapo Mamu, cruza el Gran Río, se traga una braza de candela entre los enemigos y la escupe en la otra orilla para que los chimila tengan fuego. Allí el que traga es el héroe y lo hace por su pueblo, y se queda sapo para siempre. Aquí el tragado es el hombre, nadie lo manda, y lo que gana lo gana solo.`,
    leccion:
      "Sobrevivir a lo que casi lo devora deja a alguien enfermo mucho antes de dejarlo sabio.",
    sceneHorizontal:
      "un caimán visto en corte gráfico contiene a un hombre adulto con arco y flecha, junto a un río del Caribe sin herida ni violencia explícita",
    sceneVertical:
      "el hombre ya recuperado silba en el monte y varios animales aparecen a distancia como respuesta, sin mostrar su muerte",
    researchNotes:
      "CORRECCIÓN: se restituye la enfermedad y el retiro antes del aprendizaje. CAIMÁN: peligro y maestro, no monstruo.",
  }),
  myth({
    slug: "el-morrocoyo",
    sourceKeys: [
      "reichel1945",
      "rocha2010",
      "nino2008",
      "roldanTortugas2024",
      {
        key: "reichelDolmatoffEtnografia1946",
        summary:
          "Documenta la cría chimila de morrocoyos en corrales junto a las casas y explica que, cuando se busca uno para comer, el cacique examina la concha y las patas detalladamente y escoge un macho ya prescindible para la reproducción: ancla en la práctica los mismos rasgos, caparazón, patas y condición de alimento, que el relato explica.",
        limitation:
          "No narra el cuento y está escrito con el vocabulario y el marco de extinción de 1946, que hoy exige advertencia.",
      },
      "vargasOniromancia2006",
      {
        key: "vargastejido2014",
        summary:
          "Propone un modelo del universo ette en el que lo bajo corresponde a un pasado animal, y afirma que el destino de una humanidad anterior fue perecer bajo el lodo y las cenizas o ser convertida en fieras y animales: la lógica por la cual los morrocoyos son gente antigua transformada.",
        limitation:
          "Se centra en la hamaca y la estructura del cosmos; no cita al morrocoyo ni a ninguna especie en concreto.",
      },
      {
        key: "vargasdivision2020",
        summary:
          "Describe las dos cacerías ette: yu'ma, cazar desplazándose por la selva, sujeta a preceptos y tabúes, y kwrannari, cazar emboscando en los rastrojos, donde la ausencia de espíritus dueños de la fauna permite matar sin mayores consideraciones morales. Es el marco práctico de la ambigüedad del relato entre agresión y alimento.",
        limitation:
          "Su tema es la agricultura y la relación con las deidades; no menciona morrocoyos ni relatos etiológicos sobre animales.",
      },
    ],
    title: "El morrocoyo que antes era gente",
    summary:
      "Un morrocoyo herido responde contra una mujer; después de su muerte, los de su especie forman caparazones de corteza para protegerse.",
    tags: ["morrocoyo", "transformación", "caparazón", "caza"],
    mito: `Antes los morrocoyos eran gente como nosotros. Entonces no tenían concha y vivían en los árboles.

Un día dos hombres iban monteando y encontraron un morrocoyo arriba, en un árbol. «¡Mátelo!», dijo uno de los hombres. «No voy a matarlo», dijo el otro, «es gente como tú y yo». Pero el primero volvió a decir: «¡Mátelo!».

Así el hombre disparó su flecha y le pegó al morrocoyo en una pata de atrás. Por eso es por lo que el morrocoyo todavía tiene las patas de atrás como tiesas.

El morrocoyo no se vino abajo: se enganchó con la cola en el árbol y allí quedó. Entonces dijo el hombre: «Voy a trepar al árbol para bajarlo». Así fue, y el hombre trepó al árbol y cortó la rama. Pero al mismo tiempo le cortó la cola al morrocoyo, y por eso es por lo que los morrocoyos tienen todavía la cola tan cortica.

Entonces el morrocoyo se cayó a la tierra y los dos hombres le pegaron duro. Entonces dijo el morrocoyo: «¡Ahora sí las cosas van mal!», pero empezó a correr, y corrió mucho, y por fin se botó al agua para escapar de los hombres. Así fue, y los hombres lo dejaron porque no quisieron seguirlo al agua.

Por la mañana vino una mujer a coger agua, y cuando el morrocoyo la vio, dijo: «Ayer casi me mataron; hoy yo voy a matar a esta mujer». Entonces cogió su arco y su flecha, disparó y mató a la mujer.

Cuando la mujer no volvió a la casa, los hombres fueron a buscarla. Fueron al agua y allá la encontraron muerta.

Entonces dijeron los hombres: «¿Quién mató a la mujer? Sería el morrocoyo». Así dijeron, y entonces fueron a buscar al morrocoyo. Lo encontraron en el agua y lo mataron.

Un hombre se llevó al morrocoyo muerto a la casa y dijo: «¡Voy a comérmelo!». Los otros dijeron: «No hagas eso». Pero el hombre peló al morrocoyo, lo asó y se lo comió. «Es muy sabroso», dijo el hombre.

Desde entonces los morrocoyos están siempre cerca del agua para matar a las mujeres, pero ya no pueden porque no tienen arco ni flecha.

Desde entonces los morrocoyos se hicieron una concha dura de corteza de árbol porque tienen miedo de los hombres.

Desde entonces los morrocoyos se comen y es comida muy buena.

Pero antes los morrocoyos eran gente como nosotros.`,
    historia: `Es el número veintiuno y último del corpus que Gerardo Reichel-Dolmatoff publicó en 1945 en el Boletín de Arqueología, y ocupa las páginas 16 y 17: el salto cae en mitad de la frase «Pero el», y entre las dos mitades la edición intercaló cuatro láminas fotográficas, una de ellas el retrato del narrador. Lo contó el cacique Tangrutaya Mutsu, anciano de unos setenta años. El recopilador anota que narraba de noche, recostado en su hamaca, en voz baja y en un castellano a veces confuso; que insistía en contar sólo ante hombres e interrumpía el relato cada vez que entraba una mujer; y que estos cuentos no se relatan a los niños. Aquí eso pesa: el episodio central es el de una mujer que sale sola a coger agua y no vuelve, y lo conocemos por alguien que se negaba a contarlo delante de mujeres.

El recopilador agrupó los números 17 a 21 como cuentos de animales y los explicó con su propio vocabulario: dijo que «para el primitivo se borra el límite entre animal y hombre» y señaló la frase repetida «son gente como nosotros» como expresión de esa concepción. Es su lectura, no la de Mutsu, y venía con la convicción de que el cacique era el último de la tradición.

La «Etnografía chimila» de 1946, del mismo trabajo de campo, da el contexto material. Documenta que al lado de las casas se construía un corral redondo de maderos enterrados, de cerca de un metro de alto, con piedras cubiertas por una laja plana como abrigo, y que allí se encerraban las tortugas del monte, a veces cincuenta o sesenta. Cuando se buscaba una para la comida, el cacique entraba y escogía un macho de cierta edad, examinando la concha y las patas detalladamente y tomando uno que ya no fuera indispensable para la reproducción. Las tres cosas que el relato explica —la concha, las patas y la condición de comida— son las tres que el cacique miraba.

Los trabajos de Juan Camilo Niño Vargas sostienen la premisa, no los episodios. El artículo de 2006 sobre oniromancia afirma que cualquier animal se ve a sí mismo como humano, ve su madriguera como una casa y a sus depredadores como los de los seres humanos, y cita como apoyo las páginas 5-6, 13-14 y 16-17 de la edición de 1945: entre ellas, éstas. El de 2014 dice que a la humanidad anterior le tocó perecer bajo el lodo y las cenizas o volverse fieras y animales. El de 2020 añade que las deidades decidieron convertir en animales a los pueblos violentos de antes y que los animales se crían y se cazan sin mayores consideraciones morales, y distingue dos cacerías: yu'ma, desplazándose por la selva ajena con preceptos y tabúes, y kwrannari, emboscando en los rastrojos, donde se mata sin ellos. El de 2008 describe la Tierra de Abajo como un mundo de agua y tinieblas al que sólo se entra por grutas y pozos.

El artículo de 2024 sobre tortugas continentales del Caribe es la única fuente que nombra este relato desde fuera: dice que para los ette estos animales son seres preliminares al hombre que habitan el inframundo y que el morrocoy hace parte de un mito de este pueblo sobre el origen de los animales del monte y la cacería; registra el nombre sagkwa' en ette taara y remite, para el mito, a la antología de Miguel Rocha Vivas de 2010, reedición del mismo texto. Ninguna vuelve a narrarlo, ninguna lo recogió en ette taara, ninguna dice en qué noche fue contado.`,
    versiones: `De este relato hay un solo testimonio documentado. No existe una segunda versión: la antología de Miguel Rocha Vivas reproduce el texto de 1945 y el artículo sobre tortugas del Caribe remite a esa antología, de modo que las tres referencias son un solo eslabón repetido. Tener un solo testimonio significa que no sabemos qué partes eran fijas y cuáles variaban de una noche a otra, y que la triple fórmula «Desde entonces», que aquí cierra el cuento, no se puede contrastar con otra boca.

La ficha heredada presentaba como parte del mito a una persona llamada Wuacha convertida en morrocoya y a un abuelo Jacinto que se lo contaba a sus nietos. No hay procedencia para ninguno de los dos. Además, waacha no es un nombre propio: en ette taara designa a las personas de ascendencia no indígena, según la caracterización oficial del pueblo Ette Ennaka de 2010, que reproduce el relato en verso de los dos Yaau, Yaau ette y Yaau waacha. El personaje inventado era un etnónimo mal leído. Se retira entero.

También cambian las lecturas desde fuera. El artículo de 2024 clasifica este mito como uno «sobre el origen de los animales del monte y la cacería», pero el texto de 1945 no explica el origen de los animales del monte ni de la cacería: explica una especie, el morrocoyo, y tres rasgos suyos. La ampliación es de quien resume, no del relato. Ese mismo artículo identifica al morrocoy como Chelonoidis carbonaria, mientras la etnografía de 1946 escribía Testudo tabulata para las tortugas criadas en corral; son nomenclaturas de épocas distintas y esta ficha no las da por equivalentes.

Dentro del propio corpus hay una variante del mismo arranque con desenlace opuesto. En «Los monos», un hombre dispara y casi mata a un mono; el mono coge la flecha, se la lanza al hombre escondido detrás de un árbol y lo mata, y el cuento termina ahí, sin transformación ni caparazón. La represalia del animal existe en los dos, pero allí cae sobre el agresor y aquí sobre una tercera persona que no estuvo en la cacería.

Frente al texto heredado, esta revisión devuelve al Relato los episodios y el orden de 1945, restituye las tres fórmulas de cierre y la frase final, y saca del Relato el aparato crítico que traía: las menciones a «el relato», «la narración», «la ficha heredada» y los párrafos que discutían qué se retiraba y por qué.`,
    similitudes: `El paralelo más ajustado viene de los emberá, que explican con un relato por qué el peto de los morrocoyos machos es cóncavo: una pelea entre una tortuga y un mono aullador por el amor de una venada joven. Es el mismo animal y el mismo interés por el caparazón, pero la marca queda de una rivalidad entre animales, sin humanos de por medio; aquí la concha no es una cicatriz sino una defensa que los morrocoyos se fabrican después, de corteza de árbol, porque le tienen miedo a la gente.

El segundo está entre los wayuu, donde el morrocoy, molokoona, aparece en el mito de origen «La capa del morrocoy», que se baila en la yonna, y donde los patrones de su caparazón se tejen en el kaanás llamado molokonoutaya. Allí la capa del animal se vuelve figura que se danza y se teje; aquí sigue siendo un escudo hecho con miedo, y lo que el relato deja en herencia no es un diseño sino una distancia.

Dentro del mismo corpus, el mecanismo se repite en «El diluvio»: al rabipelado, colgado de la cola durante años en un árbol de totumo, se le peló la cola, y desde entonces la tiene así; a la mujer que abrió el hueco en el techo de piedra la volvieron lechuza, y desde entonces canta de noche y nunca alcanza a ver el sol. La misma fórmula, el mismo tipo de causa y hasta la misma parte del cuerpo. La diferencia está en quién paga: allí el castigo recae sobre quien cometió la falta, y aquí el que resulta marcado para siempre es el que recibió la flecha.`,
    leccion:
      "Reconocer al otro como semejante no impide matarlo, y lo que viene después ya no tiene regreso.",
    sceneHorizontal:
      "un morrocoyo sin caparazón se sostiene de una rama mientras dos cazadores adultos dudan abajo, sin flecha impactando ni golpes",
    sceneVertical:
      "un morrocoyo junto al agua se cubre con capas planas de corteza que forman el primer caparazón",
    researchNotes:
      "CORRECCIÓN MAYOR: se elimina por completo la historia sintética de Wuacha y el abuelo Jacinto. IMAGEN: sin homicidio, consumo ni animal herido.",
  }),
  myth({
    slug: "yunari-y-las-cinco-tierras",
    sourceKeys: [
      "nino2008",
      "buitRago2020",
      "onic2023",
      "uninorte2023",
      "rocha2010",
      "reichel1945",
      {
        key: "vargastejido2014",
        summary:
          "Expone el modelo ette del universo como regiones contiguas que cambian periódicamente por obra de catástrofes que destruyen regiones completas y aniquilan a todos sus habitantes, y anuncia que el último cielo se desplomará para que el mundo celeste descienda sobre la humanidad actual: el mismo descenso que anuncia la quinta tierra.",
        limitation:
          "Describe un cosmos tripartito y no usa las palabras Yunari, Ette Kooronda ni cinco tierras, de modo que no confirma la numeración que emplean las fuentes comunitarias.",
      },
      {
        key: "vargasBajo2025",
        summary:
          "Usa el caso ette como ejemplo central: los dioses incendian, inundan y limpian periódicamente la tierra, acabando con antiguas humanidades y sembrando otras nuevas, y los ette se saben maíz recién germinado frente al maíz tostado de las humanidades pasadas, de modo que tratan de prolongar su mundo cuidando la creación.",
        limitation:
          "Es un estudio comparativo de varios pueblos chibchas; lo ette aparece como caso ejemplar y no nombra a Yunari ni detalla las cinco tierras.",
      },
      {
        key: "vargasOoyoriyasa2007",
        summary:
          "Es la monografía de referencia sobre cómo los ette conciben el universo y la obra que la bibliografía posterior cita para la diosa asociada a la tierra y confundida con el paisaje, y para la sucesión de humanidades anteriores.",
        limitation:
          "No es de acceso abierto: la ficha editorial confirma la obra, el año y el ISBN, pero no permite leer ni citar textualmente los pasajes sobre Yunari y las tierras.",
      },
      {
        key: "vargasOniromancia2006",
        summary:
          "Muestra que el firmamento ette se concibe como una región habitada por seres animados y que el sueño abre una perspectiva llamada jaatinikki, del lado de arriba, lo que sostiene la idea de que la región superior está poblada y de que soñar es la vía para percibir lo que allí ocurre.",
        limitation:
          "No enumera las tierras superpuestas ni menciona a Yunari; su objeto es la interpretación onírica, no la cosmogonía de los ciclos.",
      },
    ],
    title: "Yunari y las cinco tierras",
    summary:
      "Yunari Kraari es la Tierra Madre; cuatro tierras han transcurrido y una quinta espera en el cielo, donde no habrá violencia ni muerte.",
    tags: ["Yunari", "cinco tierras", "ciclos", "Tierra Madre"],
    sourceMode: "living",
    mito: `Yunari Kraari es la Tierra del Medio. No vive sobre ella: es ella. Los arroyos son sus venas y las aguas su sangre, la vegetación es su piel, y en su espalda y en su pecho están los ette. Su nombre dice edad y tamaño: yunari es «anciana» o «abuela», kraari es «extenso» o «grande». También se la llama Narakajmanta, «nuestra madre». Su ombligo está en un pozo de agua cerca de Sabanas de San Ángel: ése es el centro del universo.

Encima está la Tierra de Arriba, cuyo suelo es el cielo de acá. Allá viven los ette kooronda, «la gente con caparazón», «la gente de pieles gruesas»; fuera del grosor de la piel no se diferencian de cualquier ette, y su mundo tiene selvas, ríos y llanuras. Cuando las nubes se juntan en círculo es que han abierto una ventana para mirar abajo. El sol sale por una gran puerta en el oriente y sigue por un pasaje hasta la de arriba: cuando aquí es de día, allá es de noche. Debajo está la Tierra de Abajo, un mundo de agua y tinieblas al que sólo se entra por grutas y pozos, con armadillos y caracoles inmensos.

Los niveles se sostienen sobre postes clavados en los límites de la Tierra del Medio, como el techo de una casa descansa sobre horcones. Cada poste es un hombre ette que lleva el firmamento en los hombros, y cada vez que uno se acomoda tiemblan el cielo y la tierra.

No siempre fue así. Al principio, sobre Yunari Kraari había cinco tierras superpuestas. La primera destrucción desplomó las cuatro de arriba sobre la de abajo y acabó con todos sus habitantes. Eso volvió a pasar dos veces más, y cada caída dejó ruinas y escombros.

La tercera tierra la habitaban los ette chorinda, «la gente de antes». Eran muy guerreros: se entrenaban desde niños con la macana, el arco y la flecha envenenada, y sus jefes podían volverse bestias asesinas y lanzar dardos invisibles. Vivían peleando, y sus enemigos más grandes eran los españoles. Había mucha muerte y mucha guerra, y la espalda de Yunari Kraari quedó manchada de sangre. Yaau no soportó el sufrimiento que sus hijos se causaban entre ellos. Antes de acabar el mundo salvó en pensamiento una pareja de cada grupo de indios, como quien guarda semilla para la próxima cosecha. Después mandó fuego, agua y viento, uno detrás de otro, hasta que todo quedó quemado, inundado y tumbado.

Cuando el agua y el fuego terminaron de limpiar el cuerpo de Yunari Kraari, la cuarta tierra pudo bajar. El mundo de los ette chorinda y de los españoles quedó bajo capas de barro, y de allí salen todavía huesos y múcuras. La tierra bajó nueva, como semilla recién germinada, y los que bajaron con ella son ette takke, gente nueva.

Arriba queda una sola tierra, la quinta, esperando. Cuando baje, la cuarta se acaba, y el mundo de los ette kooronda no tendrá violencia ni una sexta tierra que le caiga encima. Los signos de que se acerca se conocen: la sangre otra vez en la espalda de la madre, el bosque que desaparece, los jóvenes que dejan la vida de antes, los sueños en que la tierra cruje y los ette kooronda están apurando para bajar.

Contra eso se hace lo que se puede. Hubo héroes que retrasaron el descenso congelando a los ette kooronda y volviéndolos constelaciones. Cuando tiembla, los mayores abrazan los postes del techo y rezan para que los pilares aguanten. Cuando el verano se alarga, se hacen fiestas y se ofrecen bebidas fermentadas. Cuando estalla la violencia se rezan plegarias y ensalmos largos y se aconseja a los jóvenes apartarse de las agresiones. Los ette sostienen la tierra con su pensamiento, y el día en que muera el último no quedará nadie que prevea la catástrofe: ese día todo se acaba.`,
    historia: `Este relato no está en el corpus de 1945. Las veintiuna narraciones que el cacique Tangrutaya Mutsu le contó a Gerardo Reichel-Dolmatoff no incluyen ninguna que enumere las tierras ni que nombre a Yunari. Sí traen dos huellas del mismo armazón: en «La creación», el primer chimila mira la tierra desde el cielo, no le gusta, Papá Grande lo empuja y cae cerca de San Ángel; y en «El diluvio», una familia se salva en una casa de piedra bajo la tierra. Juan Camilo Niño Vargas cita exactamente esas páginas, la 6 y la 7 de la edición de 1945, como el registro más antiguo de que los chimila «bajaron» desde una región superior y de que unos indios se salvaron bajo tierra.

El núcleo documentado viene del trabajo de campo de Niño Vargas y está publicado en acceso abierto en «Ciclos de destrucción y regeneración», de 2008. Ese artículo es la única fuente de la lista que da nombres, lugares y fechas de quienes hablaron. Los versos sobre Yunari como la misma tierra, y la secuencia de fuego, agua y viento, son de Carlos Sánchez Purusu Takiassu Yaau, en Narakajmanta, en septiembre de 2003. La sucesión de los antiguos y los huesos y múcuras que salen del suelo son de Luciano Mora Juurananta, en Issa Oristunna, en noviembre de 2003. La pareja salvada en pensamiento como semilla es de Luisa Granados Diiñato y la frase «somos ette takke» es de Rafael Mendinueta Diitu, ambos en Ette Butteriya, en octubre de 2003. El sueño de la tierra que cruje es de Pablo Masías Yaaude Kraanti, en octubre de 2003. Es más procedencia de la que tiene cualquier ficha del corpus histórico.

El «Documento madre» de la ONIC reproduce una variante de los mismos versos, atribuida a «un anciano Ette Ennaka», y describe las tres tierras, los cuatro postes y el acceso a la de abajo por pozos de agua. Andrea Buitrago Rojas también cita los versos, pero los toma de la antología de Miguel Rocha Vivas de 2010, página 82, no de trabajo propio: su interés es filosófico y comparado. El artículo de Uninorte de 2023 es el que enumera las cinco tierras con esas palabras y atribuye la cuenta a Niño Vargas.

Las otras piezas confirman el armazón sin usar los mismos nombres. El estudio de 2014 sobre la hamaca describe un cosmos de regiones contiguas y anuncia que el último cielo se desplomará, pero no dice «Yunari» ni «cinco tierras». El artículo de 2025 sobre creación y destrucción entre los chibchas presenta el caso ette como ejemplo y recoge la frase de que los ette se precian de ser «maíz recién germinado», distinto del «maíz tostado y echado a perder» de las humanidades pasadas. El de 2006 sobre oniromancia sostiene que el firmamento es una región poblada y que soñar abre una perspectiva llamada jaatinikki, «del lado de arriba»: por ahí se ven los avisos.

Lo que falta es una transcripción continua en ette taara. Nadie ha publicado esta cosmogonía como una sola narración seguida; lo que hay son versos citados, esquemas y síntesis. La monografía de referencia, «Ooyoriyasa», de 2007, no es de acceso abierto, y por eso aquí no se le atribuye ninguna frase: se la nombra porque la bibliografía posterior la cita.`,
    versiones: `No hay una versión canónica de esto, sino testimonios que coinciden en el armazón y difieren en los detalles.

Las grafías cambian de una fuente a otra: Yunari Kraari, Yunari Krari y Yunnari Kraari; Narakajmanta y Narakajamanta; ette kooronda y ette koronda; Ette Ennaka y Ette Enaka. Esta ficha no decreta una ortografía que las fuentes no han resuelto.

Los versos también cambian. En la versión de 2003 publicada por Niño Vargas, «los arroyos son sus venas y las aguas son su sangre»; en la que reproduce la ONIC, «las lagunas son su sangre». Y la versión de la ONIC añade cuatro líneas que la otra no trae: que los ette sostienen la tierra, que lo hacen con su pensamiento, que cuando haya muerto el último ette ese día todo se acabará y que cuando los ette se acaben la Tierra de Arriba bajará. La responsabilidad humana sobre el fin del mundo está explícita en un testimonio y sólo implícita en el otro.

El parentesco de Yunari con las deidades no está resuelto. El artículo de Uninorte dice que es la abuela de Yaau y de Numirinta. Niño Vargas describe en cambio una cohabitación simbólica en la que Yaau fertiliza a Yunari, la tierra, para que baje el mundo nuevo. El artículo de 2025 anota que esta misma diosa, entre los pueblos vecinos, se desdobla en dos divinidades y lleva unas veces el título de madre y otras el de abuela. Son lecturas distintas y no se funden aquí en una sola.

Los postes tampoco coinciden. Niño Vargas habla de postes emplazados en los límites de la Tierra del Medio, cada uno comparado con un individuo ette, sin fijar cuántos; la ONIC dice cuatro, en los cuatro extremos, y que son cuatro hombres chimila.

La cuenta de cinco depende de la fuente. El artículo de 2008 la sostiene diciendo que «muchos están de acuerdo» en que al principio hubo cinco tierras sobre Yunari, y el de 2014, del mismo autor, describe el mismo proceso sin numerarlo. La numeración circula sobre todo en los documentos comunitarios y en las síntesis.

Sobre las causas, el artículo de Uninorte intercala entre paréntesis «¿volcán?» y «¿tsunami?» al resumir las destrucciones. Esa conjetura es de quienes escriben, no de los ette, y no entra aquí. Frente al texto heredado, esta revisión saca del Relato las menciones a «las fuentes», «las versiones citadas» y «la página», que no van dentro de la historia.`,
    similitudes: `El primer paralelo está entre los vecinos chibchas y lo señala la misma investigación que documenta este relato. Los kogi de la Sierra Nevada piensan el cosmos como un huevo enorme dividido en nueve secciones; los cuna del Darién, como doce capas superpuestas; los barí de la Serranía del Perijá ponen la tierra habitada justo en medio de un submundo acuático y seis cielos; los u'wa de los Andes orientales y los bribri y cabécar de Talamanca comparten un universo de tres pisos. El armazón se repite, pero en todos esos casos es un edificio quieto. Lo propio de los ette es que el edificio se mueve: el número de regiones baja de seis a dos a lo largo de la historia, y la tierra que hoy está en el medio no siempre estuvo ahí.

El segundo paralelo está en la condición del fin. Entre los kogi el mundo se acaba «si el código moral y religioso se olvidara o no se obedeciera»; entre los iku, «si a los ritos antiguos no se les da continuidad»; entre los u'wa, si se dejara de cantar y de mantener el orden de las cosas mediante las ceremonias. La frase ette se le parece mucho: cuando muera el último ette, ese día todo se acaba. La diferencia es de tiempo verbal. En los otros tres casos la ceremonia mantiene el mundo indefinidamente y el descuido lo destruye; aquí la destrucción ya está fijada y lo único que la ceremonia consigue es aplazarla.

El tercero lo apunta el propio investigador: en esto los ette se parecen menos a sus parientes chibchas que a los pueblos mesoamericanos y a los yukuna-matapí del Mirití-Paraná, donde las edades destruidas se suceden. La diferencia es que aquí cada destrucción se explica por la sangre derramada sobre el cuerpo de una diosa concreta, y no por el agotamiento de un ciclo.`,
    leccion:
      "El fin del mundo no se evita, pero quien recuerda y cuida alcanza a retrasarlo.",
    sceneHorizontal:
      "Yunari aparece como gran contorno femenino integrado a ríos y sabanas, con cuatro capas terrestres y una quinta tierra luminosa esperando en el cielo",
    sceneVertical:
      "las venas de Yunari se convierten en arroyos mientras pequeñas figuras Ette sostienen cuatro postes bajo la Tierra del Medio",
    researchNotes:
      "INCORPORACIÓN NUEVA: cosmogonía contemporánea ausente del corpus de 1945. CAUTELA: se excluyen equivalencias con volcán, tsunami o planeta.",
  }),
  myth({
    slug: "yaau-numirinta-y-las-dos-mazorcas",
    sourceKeys: [
      "mincultura2024",
      "nino2008",
      "uninorte2023",
      "rocha2010",
      "reichel1945",
      {
        key: "vargasdivision2020",
        summary:
          "Llama a Yaau y Numirinta sus progenitores míticos y reparte entre ambos el año y la cosecha: él reclama lo producido en los campos kañña, ella lo cosechado en las palizadas kajbragga y desencadena las lluvias que pudren la vegetación, de modo que las mazorcas sirven para renovar la reciprocidad con la diosa.",
        limitation:
          "No narra el descenso a la laguna de San Ángel ni las dos mazorcas de maíz cariaco: documenta a la pareja como deidades agrícolas del calendario, no como escena de creación.",
      },
      {
        key: "vargasBajo2025",
        summary:
          "Afirma que la última humanidad brotó de la tierra bajo formas vegetales por obra de las labores agrícolas de los dioses y que los bribrí, los cabécar y los ette provienen del maíz sembrado por Sibö y Yaau, y añade que los ette se dicen los más bellos frutos de maíz sembrados por las divinidades.",
        limitation:
          "Es un texto comparativo chibcha: confirma el origen de maíz y la autoría de Yaau, pero no menciona a Numirinta en esa escena ni las dos mazorcas.",
      },
      "colombiaCaracterizacion2010",
      "atencionMujeres2024",
    ],
    title: "Yaau, Numirinta y las dos mazorcas",
    summary:
      "Yaau y Numirinta bajan a la laguna de San Ángel y transforman dos mazorcas de maíz cariaco en la nueva generación Ette Ennaka.",
    tags: ["Yaau", "Numirinta", "maíz cariaco", "creación"],
    sourceMode: "living",
    mito: `Las deidades se cansaron del comportamiento violento de los pueblos antiguos. Decidieron convertirlos en animales y limpiaron la tierra con incendios e inundaciones. Los ette, que hasta ese momento vivían tranquilos en el cielo, bajaron al espacio recién hecho para empezar allí una vida verdaderamente humana.

Yaau y Numirinta bajaron del cielo a una laguna de la sabana de San Ángel. Yaau miró hacia el oriente, por donde sale el sol. Numirinta miró hacia el occidente, por donde se oculta. Ambos cogieron dos mazorcas de maíz cariaco y las convirtieron en los Ette Ennaka.

Ésa es la gente nueva, ette takke. De ahí viene que se digan maíz recién germinado, distinto del maíz tostado y echado a perder de las humanidades pasadas y del maíz seco que espera ser sembrado; y de ahí viene que se precien de ser los frutos de maíz más bellos que las divinidades hayan sembrado nunca, los que habría que guardar para la próxima siembra.

Yaau hizo también los animales, los árboles y las plantas, y enseñó a sembrar. Numirinta enseñó a cocinar y a tejer. Ella fue la primera mujer en recibir el mandato, y es la que da el conocimiento a las mujeres; ese conocimiento llega por los sueños.

Desde entonces el año se reparte entre los dos. La jornada de Yaau es la primera mitad y trae lluvias suaves; el turno de Numirinta es la segunda y trae tormentas fuertes. Cada uno tiene su falta. La de Yaau es demorarse y dejar que los cultivos se mueran de sed: entonces hay que hacer fiestas con bebidas fermentadas y rogarle que se emborrache y suelte su agua. La de Numirinta es bailar desenfrenada hasta inundar la tierra: para corregirla las ceremonias se hacen sin licor, porque no se trata de llenar una carencia sino de rebajar un exceso.

En la cosecha, lo que las deidades miran es el maíz. Yaau reclama lo que dan los campos de tumba y quema, los kañña. Numirinta exige lo que se recoge en las palizadas, los kajbragga. Una parte se les entrega en rezos pequeños, donde hombres y mujeres de prestigio se identifican con ellos y comen los frutos crudos en verde, en maduro y en seco. La entrega grande se hace a mitad y a fin de año, en fiestas a las que se invita a las deidades con rezos y ensalmos.

Lo mismo se ve arriba. Las Pléyades son un grupo de mujeres de fiesta y se identifican con las variedades del maíz; su brillo de noche es señal de que las deidades están presentes. La constelación aparece a mediados de junio, cuando salen las mazorcas verdes de los kañña; llega a lo más alto en diciembre, cuando se recogen las mazorcas secas de las palizadas y empiezan las grandes fiestas; y desaparece a principios de mayo, cuando empieza la época de escasez.

Así quedaron atados el cielo y la tierra: por dos mazorcas que se volvieron gente y por una cosecha que se hace entre las deidades y los suyos.`,
    historia: `Este relato no viene del corpus de 1945. Ninguna de las veintiuna narraciones del cacique Tangrutaya Mutsu menciona a Yaau ni a Numirinta. El primero de ese corpus, «La creación», cuenta otra cosa: Papá Grande amasa un pedazo de greda como quien hace loza, hace el tigre, hace hombres que eran Aruacos, Guajiros y Motilones, les hace una mujer a cada uno, y mucho más tarde hace al primer chimila y a su mujer, con nombres propios, Huhun Krukroring Merana y Soving Kranyaring Ovokeya. El hombre mira la tierra desde el cielo, no le gusta y no quiere bajar; Papá Grande lo empuja y cae cerca de San Ángel. Entonces no se llamaban Chimila sino Paretare. Es otro agente, otra materia y otro gesto, y se deja aparte: no se funden.

La frase que sostiene el núcleo de esta ficha es una sola y está publicada por el Ministerio de las Culturas en 2024, en un reportaje que también recoge a Luis Eduardo Granados, médico tradicional, y a César Rozo, director de la Asociación Tejeteje. Dice que Yaau y Numirinta bajaron del cielo a una laguna de la sabana de San Ángel, que Yaau miró al oriente y Numirinta al occidente, y que ambos cogieron dos mazorcas de maíz cariaco y las convirtieron en los Ette Ennaka, deidades consagradas en las ceremonias de bautizo, cosecha y actos mortuorios. No hay transcripción en ette taara, no se dice quién narró esa escena ni en qué circunstancias.

El artículo de Uninorte de 2023 dice lo mismo con otras palabras —«Yaau bajó del cielo con Numirinta y con dos mazorcas crearon a los Ette Enaka o Takke»— y añade que Yaau creó animales, árboles y plantas y enseñó a sembrar, y que Numirinta enseñó el arte de cocinar y tejer. Su capítulo cosmogónico es contexto de un estudio biomédico y remite a Juan Camilo Niño Vargas.

Los trabajos de Niño Vargas confirman la pareja, no la escena. El de 2020 los llama «sus progenitores míticos, el padre Yaau y la diosa Numirinta», documenta el reparto del año y de la cosecha entre kañña y kajbragga, las fiestas con bebidas fermentadas, las Pléyades identificadas con variedades de maíz y la bajada de los ette desde el cielo después de que las deidades convirtieran en animales a los pueblos violentos. El de 2025 afirma que los ette provienen del maíz sembrado por Yaau y que se precian de ser los frutos de maíz más bellos. El de 2008 describe la regeneración como fertilización de Yunari por Yaau y sitúa el ombligo de la madre en un pozo de agua cerca de Sabanas de San Ángel. Ninguno narra el descenso a la laguna ni las dos mazorcas.

La caracterización oficial del pueblo, de 2010, aporta a Yaau como creador con quien se conversa, y reproduce en verso el relato de los dos Yaau. La nota de la Unidad para las Víctimas de 2024 documenta que Numirinta sigue vigente: es la primera mujer en obtener el mandato y la encargada de dar conocimiento a las mujeres, y ese conocimiento llega por los sueños. Ninguna de las dos menciona las mazorcas.`,
    versiones: `No hay dos narraciones completas de esto que puedan compararse. Lo que hay son cuatro repartos distintos de quién hace la creación, y conviene no aplanarlos.

En el reportaje ministerial de 2024 y en el artículo de Uninorte de 2023 actúa la pareja: bajan los dos, miran cada uno hacia un lado y toman las dos mazorcas. En el artículo de 2025 de Niño Vargas sólo aparece Yaau, que siembra el maíz del que provienen los ette, sin Numirinta y sin mazorcas contadas. En el de 2008, del mismo autor, quien acompaña a Yaau no es Numirinta sino Yunari, la tierra, a la que fertiliza para que baje el mundo nuevo. Y en la caracterización oficial de 2010, Yaau actúa solo y frente a su propio doble. Tres deidades femeninas distintas ocupan por turnos el mismo lugar en el relato.

Cambia también qué clase de relato es. Los textos institucionales lo presentan como escena de creación en una laguna; el estudio etnográfico de 2020 presenta a la misma pareja como deidades agrícolas que se reparten el año y la cosecha. Las dos cosas pueden convivir, pero la fuente de campo no narra la laguna y la fuente institucional no describe el calendario.

El nombre de la gente creada varía: Ette Ennaka en 2024, Ette Enaka o Takke en 2023, ette takke, «gente nueva», en 2008. Ette Ennaka se glosa como «gente verdadera». La variedad del maíz, cariaco, sólo aparece en el texto ministerial; el inventario de cultivos ette de 2020 registra once variedades de maíz con nombre en ette taara y ninguna se llama así.

Circula además otra narración sobre Yaau que no es una variante de ésta y no se mezcla con ella: la de los dos Yaau, recogida a Luciano Mora en 2003 y reproducida en la caracterización de 2010. Dice que siempre han estado dos, Yaau ette y Yaau waacha; que al hijo del segundo lo llaman Jesucristo; que al repartirse la gente Yaau volteó a su hermano, le torció la lengua y le sopló mascada de tabaco en los oídos, y que desde entonces el waacha no entiende ni pronuncia la lengua. Explica la separación entre los ette y los que no lo son, no el origen de la gente.

Frente al texto heredado, esta revisión saca del Relato las menciones a «las fuentes contemporáneas», «otros resúmenes» y «esta ficha», y deja de presentar como contenido del relato lo que era una decisión editorial.`,
    similitudes: `El paralelo más firme está en la cordillera de Talamanca. Los bribrí y los cabécar dicen provenir del maíz sembrado por el dios Sibö, y sobre esos mitos distinguen sus clanes: cada uno viene de una variedad «pura» o «impura» y del lugar donde el dios puso por primera vez sus semillas. El grano es el mismo y el gesto de sembrar también, pero allí el maíz sirve para separar a la gente en linajes, y aquí dos mazorcas hacen un solo pueblo. La separación, entre los ette, se cuenta en otra parte y no tiene que ver con el maíz.

El segundo paralelo cambia el fruto. Los u'wa de los Andes orientales vienen de calabazos al cuidado del gran Sira, y los barí de la Serranía del Perijá, de piñas cortadas por el héroe Sabaseba. Los tres pueblos hacen brotar la humanidad de una planta cultivada, pero el gesto no es el mismo: uno corta, otro cuida, aquí se siembra y se cosecha, y por eso el calendario agrícola entero queda amarrado al origen.

Un tercero está muy cerca, entre los iku de la Sierra Nevada, que se llaman a sí mismos «maíz de la tierra» y comparan su cuerpo con una mazorca. La figura es casi idéntica, pero la afirmación ette es más específica y más orgullosa: no dicen ser maíz, dicen ser el maíz más bello jamás cosechado, el que debería guardarse para la próxima siembra.

Dentro del mismo corpus ette hay un contraste que vale más que un parecido. En la creación de 1945 el primer chimila es hecho de greda, no quiere bajar y lo empujan; cae cerca de San Ángel. Aquí, en la misma sabana, los que bajan lo hacen por su cuenta y lo que traen no es un cuerpo amasado sino dos mazorcas.`,
    leccion:
      "La gente nueva nace del maíz que la alimenta, y por eso cada cosecha repite su origen.",
    sceneHorizontal:
      "Yaau y Numirinta adultos se sitúan junto a una laguna de San Ángel, uno mirando al oriente y otra al occidente, con dos mazorcas de maíz cariaco entre ambos",
    sceneVertical:
      "dos mazorcas abiertas se transforman simbólicamente en una comunidad Ette junto a la laguna, bajo el amanecer y el ocaso unidos",
    researchNotes:
      "INCORPORACIÓN NUEVA: relato publicado con voces comunitarias en 2024 y apoyado por fuentes académicas. NO FUSIONAR: se mantiene separado de Papá Grande.",
  }),
];

export default chimilaDefinitions;
