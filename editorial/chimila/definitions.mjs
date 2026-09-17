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
    title: "La creación de la tierra y los Paretare",
    summary:
      "Papá Grande forma la tierra con greda, crea al tigre y envía a la primera pareja Ette cerca de San Ángel, donde el pueblo era llamado Paretare.",
    tags: ["creación", "Papá Grande", "tigre", "Paretare"],
    mito: `Papá Grande comenzó con un pedazo de greda. Lo trabajó como se moldea el barro para hacer una vasija, pero la porción le pareció demasiado pequeña. Añadió otro pedazo y después otro, hasta reunir una masa extensa. Así quedó formada la tierra. Todavía no había árboles, maíz ni yuca: el suelo existía, pero estaba vacío de los seres y alimentos que más adelante lo habitarían.

Al ver aquel espacio sin vida, Papá Grande hizo un tigre grande y lo soltó. El felino fue el primer animal que la versión de Tangrutaya Mutsu sitúa sobre la tierra. El cuento afirma que los tigres conocidos después proceden de ese comienzo. No describe una lucha contra el animal ni lo convierte en enemigo del creador; su presencia inaugura el mundo vivo.

Después Papá Grande hizo personas pertenecientes a pueblos que el relato llama Aruacos, Guajiros y Motilones. Como estaban solos y la vida se reducía a guerra y palabras, creó mujeres para ellos. Mucho más tarde formó al primer hombre del pueblo hoy conocido como Ette Ennaka y a su compañera. La transcripción registra sus nombres como Huhun Krukroring Merana y Soving Kranyaring Ovokeya.

Papá Grande ordenó al hombre que bajara a la tierra. Desde el cielo, él miró el lugar y no quiso descender. Entonces el creador lo empujó. El hombre cayó cerca de San Ángel y allí empezó a multiplicarse su gente. En ese tiempo, concluye la narración, todavía no se llamaban Chimila: su nombre era Paretare.

La página mantiene la secuencia sin fundirla con otra cosmogonía contemporánea. Algunas fuentes Ette actuales hablan de Yaau, Numirinta, Yunari y la creación mediante mazorcas; esos relatos también forman parte de la colección, pero se publican en fichas separadas. Aquí Papá Grande, la greda, el tigre, la primera pareja y la caída cerca de San Ángel son los elementos que conserva el corpus de 1945.`,
    historyCore:
      "La ficha corresponde al primer relato del corpus histórico. Su valor principal está en la atribución a Tangrutaya Mutsu y en los nombres de la primera pareja y del antiguo pueblo Paretare, no en una supuesta versión definitiva de toda la creación Ette.",
    versionCore:
      "La grafía de los nombres cambia levemente entre ediciones: Merana aparece también como Merama. Papá Grande puede relacionarse con Yaau en lecturas posteriores, pero esta página no declara que ambos nombres sean intercambiables en todos los contextos.",
    similarityCore:
      "La tierra modelada con barro tiene paralelos en muchas cosmogonías. Aquí la greda forma el territorio y no directamente los cuerpos humanos; además, el tigre antecede a la primera pareja Ette, una secuencia específica que conviene conservar.",
    leccion:
      "Un pueblo recuerda su origen al nombrar la tierra, sus primeros seres y su antiguo nombre.",
    sceneHorizontal:
      "Papá Grande modela con greda una tierra creciente mientras un tigre aparece como primer animal y la primera pareja observa desde el cielo",
    sceneVertical:
      "la primera pareja Paretare desciende cerca de San Ángel entre sabanas, bosque y una pequeña corriente de agua",
    researchNotes:
      "CORRECCIÓN: se retira el vacío cósmico, el tono épico y la psicología inventada. NOMBRES: se conservan las grafías documentadas con nota de variación.",
  }),
  myth({
    slug: "sol-y-luna",
    title: "Sol y Luna",
    summary:
      "Luna es el hermano mayor y la actual Sol es la tercera hermana: dos soles anteriores marcaron días larguísimos antes del orden celeste presente.",
    tags: ["Sol", "Luna", "ciclos", "cielo"],
    mito: `Sol y Luna son hermanos. En el relato de Tangrutaya Mutsu, Luna es el hermano mayor. Sol es una hermana mucho más joven y no es la primera que ha ocupado el cielo: la luz actual corresponde a la tercera hermana. Los dos soles anteriores envejecieron y murieron cuando se acabó su familia. El cuento presenta así el orden celeste como una sucesión, no como una pareja inmóvil desde el comienzo del tiempo.

El primer Sol salía por el lugar donde ahora termina el día. Mientras recorrió el cielo, cada día duraba cuatro años. La gente podía trabajar durante aquel tiempo prolongado sin que llegara la noche según el ritmo conocido hoy. La expresión no necesita entenderse como una medida astronómica exacta; dentro del relato comunica una duración extraordinaria.

Después Papá Grande dispuso un segundo Sol. Este aparecía detrás de la Sierra Nevada y sus días duraban un año. También ese orden cambió. Finalmente llegó el Sol que se ve ahora y comenzó a salir por el lugar actual. La narración no explica la transición mediante una batalla ni describe cómo murieron las hermanas anteriores. Solo marca tres edades de la luz y tres orientaciones del amanecer.

El texto añade una geografía breve. Hacia el norte, dice, el Sol ya no sirve porque allí termina la tierra; hacia el sur se extienden tierra, monte y gente. De noche, la hermana Sol duerme. A veces se enferma y no quiere salir. Cuando eso sucede, los Ette sienten miedo ante la ausencia de la luz.

La ficha antigua convirtió esta secuencia en una “danza cósmica”, añadió fragilidad, renovación heroica y explicaciones que no estaban en el cuento. La versión revisada conserva lo que sí fue registrado: el parentesco entre una Luna masculina y una Sol femenina, las dos hermanas solares anteriores, los días larguísimos, los cambios del punto de salida y el temor cuando la Sol enferma.`,
    historyCore:
      "Es el segundo relato del corpus de 1945. El propio Reichel-Dolmatoff lo llamó enigmático y propuso comparaciones externas; esta revisión separa ese comentario antropológico de las palabras atribuidas a Tangrutaya Mutsu.",
    versionCore:
      "Las síntesis actuales suelen reducir el cuento a Sol y Luna como hermanos. La versión completa añade tres soles sucesivos, duraciones cambiantes del día, la Sierra Nevada y la enfermedad de la Sol, elementos que aquí se restituyen.",
    similarityCore:
      "Los soles sucesivos recuerdan relatos de edades del mundo, mientras la Sol femenina y la Luna masculina invierten el género más común en castellano. Esas comparaciones orientan, pero no convierten la narración en astronomía literal.",
    leccion:
      "El cielo también guarda memoria de órdenes anteriores y de cambios que alteraron el tiempo.",
    sceneHorizontal:
      "una Sol femenina y una Luna masculina ocupan lados opuestos del cielo, con dos discos solares anteriores desvaneciéndose tras la Sierra Nevada",
    sceneVertical:
      "la tercera hermana Sol despierta sobre las sabanas mientras la Luna mayor se retira y tres franjas muestran los antiguos días prolongados",
    researchNotes:
      "CORRECCIÓN: se elimina la danza cósmica, el ciclo heroico y la simbología añadida. GÉNERO: Sol es hermana; Luna, hermano.",
  }),
  myth({
    slug: "el-poblamiento",
    title: "Las tres flechas del poblamiento",
    summary:
      "Papá Grande usa el arco iris y tres flechas de caña maná para señalar San Ángel, el río Cesar y Cartagena como caminos del poblamiento Ette.",
    tags: ["poblamiento", "arco iris", "caña maná", "territorio"],
    mito: `Cuando los primeros Ette bajaron del cielo, no sabían qué rumbo tomar. La tierra tenía mucha agua y mucho monte, pero no ofrecía todavía alimentos ni aguas buenas para beber. El problema del comienzo no era la ausencia total de mundo, sino la dificultad de orientarse y encontrar lugares donde la gente pudiera permanecer.

Papá Grande tomó el arco iris como arco y preparó tres flechas hechas de caña maná. Las lanzó sobre la tierra para mostrar los caminos. La primera cayó en San Ángel. La narración afirma que allí siguió viviendo mucha gente. La segunda llegó al río Cesar y una parte del pueblo se dirigió hacia ese lugar. La tercera voló mucho más lejos, hasta el sitio donde se encuentra Cartagena, y otro grupo siguió su señal.

Las tres flechas no fundan ciudades ni conceden propiedad exclusiva. Funcionan como marcas de orientación dentro de una memoria territorial amplia: una se queda en las sabanas de San Ángel, otra alcanza la cuenca del Cesar y otra abre un trayecto hacia el litoral. Después de seguirlas, los Ette quedaron distribuidos por esa tierra.

El relato termina explicando la relación entre la caña maná y el Sol. Desde aquel lanzamiento, la planta sirve para fabricar flechas porque pertenece a la familia solar. Si una persona se pincha con ella de noche en el monte, puede ver al Sol. La imagen une orientación, materia vegetal y luz: el mismo tallo que marca caminos conserva una claridad capaz de aparecer en la oscuridad.

La versión publicada antes en el sitio añadió un paisaje sin destino, una compasión divina, “flechas hijas del arcano” y otros recursos literarios. Esta revisión los retira. El núcleo es preciso y suficiente: un pueblo recién descendido, tres direcciones señaladas por el arco iris, tres lugares nombrados y una caña vinculada con la luz.`,
    historyCore:
      "El tercer relato del corpus relaciona la memoria del poblamiento con San Ángel, el río Cesar y Cartagena. Esos topónimos deben leerse como parte de la narración registrada, no como mapa arqueológico que demuestre cada desplazamiento.",
    versionCore:
      "Fuentes actuales describen un territorio ancestral mucho más amplio entre el Magdalena, el Cesar, la Ciénaga Grande y Zapatosa. Ese marco histórico dialoga con las tres flechas, pero no sustituye la geografía propia del cuento.",
    similarityCore:
      "Flechas, bastones o semillas que señalan un lugar aparecen en otros relatos de poblamiento. Aquí el arco es el arco iris y el material es caña maná, cuya relación con el Sol prolonga la orientación incluso de noche.",
    leccion:
      "El territorio se aprende siguiendo señales que enlazan caminos, plantas y memoria colectiva.",
    sceneHorizontal:
      "Papá Grande tensa el arco iris y lanza tres flechas de caña maná sobre un paisaje que conecta San Ángel, el río Cesar y el litoral",
    sceneVertical:
      "una flecha luminosa de caña maná marca un sendero nocturno mientras familias Ette avanzan entre sabana, río y bosque",
    researchNotes:
      "CORRECCIÓN: se eliminan emociones y personificaciones inventadas. TERRITORIO: los tres lugares se conservan como geografía narrativa, no como prueba cartográfica.",
  }),
  myth({
    slug: "primeras-guerras",
    title: "Memoria de las primeras guerras",
    summary:
      "Tangrutaya Mutsu recordó conflictos con Aruacos y Karíbi; la ficha conserva su testimonio sin presentar la conquista como reconciliación benéfica.",
    tags: ["guerra", "memoria", "Aruacos", "Karíbi"],
    mito: `Tangrutaya Mutsu situó a los Aruacos en la misma tierra antes de la llegada de los Ette. Como señal de aquella presencia mencionó las piedras de moler que habían dejado. Cuando ambos pueblos se encontraron, contó, los Ette expulsaron a los Aruacos mediante la guerra. El relato resume la diferencia diciendo que los Aruacos eran ricos y los Ette pobres, sin explicar qué bienes medían esa riqueza ni presentar una causa detallada del conflicto.

También hubo guerra con un pueblo nombrado Karíbi. La versión registrada afirma que Ette y Karíbi no podían vivir en el mismo lugar porque se mataban. No identifica una batalla concreta, héroes individuales, fechas ni un territorio delimitado. Es una memoria muy breve de fronteras, enemistades y desplazamientos entre grupos.

Al final, el narrador cambia del pasado remoto a su propio presente. Dice que ya no ocurría así y que hacía mucho tiempo eran amigos, desde la llegada de los blancos. Esa frase pertenece al testimonio que un anciano pronunció en la década de 1940. No puede convertirse, como hacía la expansión anterior, en una escena de alivio, alianza y reconciliación producida por los colonizadores.

La historia documentada del pueblo Ette incluye siglos de invasión territorial, violencia, reducción de la población, explotación de las selvas y desplazamiento. Presentar la conquista como solución objetiva de las guerras indígenas borraría ese proceso. La página conserva la frase porque forma parte de la fuente y, al mismo tiempo, la sitúa dentro de las condiciones en que fue contada.

Por eso el título habla de memoria y no de una crónica militar comprobada. Las piedras de moler, la desigualdad atribuida a los grupos, la expulsión de los Aruacos, el conflicto con los Karíbi y el comentario final son los cinco elementos que contiene la narración. No se añaden discursos de paz ni una escena heroica inexistente.`,
    historyCore:
      "El cuarto texto de 1945 se acerca más a una memoria histórica que a un mito cosmogónico. Su vocabulario y sus categorías étnicas corresponden a la transcripción de la época y requieren contexto sobre la violencia colonial posterior.",
    versionCore:
      "La expansión heredada convirtió la última frase en reconciliación promovida por los blancos. Se corrige esa lectura: el comentario queda atribuido al narrador, mientras las fuentes históricas recientes documentan conquista, despojo y resistencia Ette.",
    similarityCore:
      "Las memorias de conflictos entre pueblos suelen explicar piedras, fronteras o abandonos. Esta ficha se distingue porque la evidencia narrativa es mínima y porque el desenlace debe leerse junto a la historia colonial, no como moraleja pacificadora.",
    leccion:
      "Una memoria difícil debe conservarse con atribución y contexto, nunca como elogio de la conquista.",
    sceneHorizontal:
      "grupos humanos separados por un corredor de sabana observan antiguas piedras de moler, sin batalla explícita ni vencedores heroicos",
    sceneVertical:
      "un sendero antiguo atraviesa piedras de moler abandonadas y conduce hacia comunidades distantes bajo un cielo sobrio",
    researchNotes:
      "CORRECCIÓN MAYOR: se retira la idea de que la llegada blanca trajo alivio y alianza. GÉNERO: se presenta como memoria histórica atribuida.",
  }),
  myth({
    slug: "el-diluvio",
    title: "El diluvio, la lechuza y el totumo",
    summary:
      "Una familia sobrevive bajo tierra; una mujer se vuelve lechuza, el karau y el rabipelado resisten en un totumo y el fuego casi destruye la tierra otra vez.",
    tags: ["diluvio", "lechuza", "totumo", "animales"],
    mito: `Una lluvia interminable cayó de día y de noche. El agua cubrió el monte hasta borrar ríos y cañadas, destruyó los sembrados y dejó al mundo sin comida. El relato dice incluso que Sol y Luna se ahogaron. Casi toda la gente murió y solo una familia permaneció con vida.

El hombre de esa familia había construido bajo tierra una gran casa de piedra. Era redonda y tenía cuartos colocados unos sobre otros. La familia se refugió en el nivel superior mientras afuera continuaba el diluvio. Después de años sin ver la luz, una mujer se cansó. Subió al techo y retiró una piedra para mirar el Sol. Por la abertura entró un chorro que casi los ahogó.

El hombre la maldijo: cuando terminara la lluvia tendría que salir convertida en lechuza. Así ocurrió. Desde entonces, cuenta la narración, la lechuza canta de noche y desea ver el Sol, pero no puede. Los demás bajaron a otro cuarto y siguieron esperando hasta que las aguas disminuyeron.

Al salir temieron que todos los animales hubieran desaparecido. Sin embargo, en una loma alta había crecido un árbol de totumo. En sus ramas sobrevivieron el pájaro karau y el rabipelado llamado nuti. El karau pasó tanto miedo que todavía anuncia la lluvia con su canto. Al rabipelado se le cansaron las patas y tuvo que colgarse de la cola; después de tantos años, quedó pelada. Cuando bajaron, de ellos procedieron los demás animales según el cuento.

La tierra seguía empapada. La gente encendió fuego en el monte para secarla, pero el viento extendió las llamas y quemó casas y cultivos. Por segunda vez estuvieron cerca de morir. Finalmente el incendio se apagó y pudieron volver a sembrar y construir.

La versión no menciona una pirámide, un arca ni una lección sobre la curiosidad femenina. Reúne dos catástrofes consecutivas —agua y fuego—, un refugio subterráneo, una transformación, dos animales sobrevivientes y la reconstrucción del mundo habitado.`,
    historyCore:
      "El quinto relato es el más extenso de la primera parte del corpus. Reichel-Dolmatoff lo comparó con diluvios de otras regiones, pero el texto Ette conserva motivos propios como la casa subterránea, el totumo y el doble peligro del agua y el fuego.",
    versionCore:
      "La ficha antigua llamó pirámide a la casa de cuartos superpuestos y convirtió a la mujer en símbolo abstracto. La fuente dice casa redonda de piedra bajo tierra; esta revisión mantiene esa descripción y evita arquitectura inventada.",
    similarityCore:
      "Comparte con otros diluvios la supervivencia de una familia y de animales, pero no usa una embarcación. El refugio está bajo tierra, el karau y el rabipelado viven en un totumo y la restauración provoca un incendio.",
    leccion:
      "Sobrevivir una catástrofe exige cuidar también las acciones con las que se intenta reparar el mundo.",
    sceneHorizontal:
      "la casa redonda de piedra emerge entre aguas del diluvio, una lechuza vuela y un totumo alto sostiene al karau y al rabipelado",
    sceneVertical:
      "después de la lluvia, una pequeña comunidad apaga el fuego que secaba la tierra y vuelve a sembrar junto al totumo",
    researchNotes:
      "CORRECCIÓN: casa subterránea, no pirámide; no se moraliza la curiosidad de la mujer. ESTRUCTURA: se conservan agua y fuego como dos peligros consecutivos.",
  }),
  myth({
    slug: "el-fuego",
    title: "Huhum, el sapo que trajo el fuego",
    summary:
      "El brujo Huhum se vuelve sapo, cruza el Gran Río, guarda una brasa en la boca y entrega a los Ette el fuego que debe permanecer encendido.",
    tags: ["fuego", "sapo", "Huhum", "transformación"],
    mito: `Antes de tener fuego, los Ette no conocían la candela ni el humo. Comían crudos sus alimentos. Al mediodía, las mujeres colocaban la comida sobre una piedra grande para que el Sol tostara un lado; después la giraban para calentar el otro. Aun así, la alimentación era difícil y la gente sufría.

Al otro lado del Gran Río vivía un pueblo enemigo que sí tenía fuego. Allí asaban carne, freían pescado y cocinaban bollos. Una noche, desde la ribera opuesta, los Ette vieron a esas personas sentadas alrededor de la candela y quisieron conseguir una brasa. El río hacía imposible llevarla nadando y acercarse como persona significaba exponerse a la muerte.

El brujo Huhum decidió intentarlo aunque pudiera perder la vida. Se transformó en el sapo Mamu, saltó al agua y cruzó el Gran Río. Al llegar a la otra playa se metió entre quienes comían. La aparición del gran sapo los asustó; gritaron y corrieron. Entonces Mamu tragó una brasa.

El sapo regresó por el río. El fuego no lo quemó por dentro ni se apagó en el agua. En la playa de su pueblo escupió la candela y pidió que la cuidaran para que nunca volviera a extinguirse. El don no deshizo la transformación: Huhum permaneció convertido en sapo.

Desde entonces, concluye la narración, los sapos son gente como los Ette, son buenos y no deben matarse. Cuando uno canta de noche en la selva, las mujeres se levantan para añadir leña al fogón. El canto recuerda que el fuego llegó atravesando el agua y que su continuidad depende del cuidado cotidiano.

La ficha no presenta a Huhum como ladrón triunfal ni añade una persecución. El relato vincula necesidad, transformación, riesgo, una brasa transportada en la boca y una obligación concreta: mantener vivo aquello que el sapo consiguió para la comunidad.`,
    historyCore:
      "El sexto relato identifica a Huhum con un nombre cercano al de la primera persona del mito de creación. Reichel-Dolmatoff sugirió que podía tratarse de un héroe cultural; la ficha conserva esa hipótesis como comentario, no como certeza.",
    versionCore:
      "La expansión anterior añadió una tierra sin estrellas, un sacrificio heroico y un dilema psicológico. El texto documentado es más directo: ausencia de fuego, enemigos al otro lado del río, transformación en Mamu, brasa tragada y cuidado del fogón.",
    similarityCore:
      "El robo o traslado del fuego por un animal aparece en muchas tradiciones americanas. Aquí el mediador es un brujo que queda convertido en sapo y el fuego cruza el agua dentro de su boca, rasgos que definen la versión Ette.",
    leccion:
      "Un bien conseguido con riesgo colectivo solo perdura cuando alguien lo cuida cada noche.",
    sceneHorizontal:
      "el gran sapo Mamu cruza el Gran Río con una brasa luminosa dentro de la boca mientras un fogón espera en la ribera Ette",
    sceneVertical:
      "un sapo canta de noche junto a un fogón y una mujer añade leña para impedir que la candela se apague",
    researchNotes:
      "CORRECCIÓN: se elimina el heroísmo genérico y se conserva el vínculo entre canto del sapo y cuidado del fogón. NOMBRE: Huhum/Mamu.",
  }),
  myth({
    slug: "el-agua",
    title: "La Gran Cacica y el origen del agua",
    summary:
      "La Gran Cacica manda cavar pozos y, durante la noche, llama al agua con su palabra y su saliva hasta llenarlos de agua dulce.",
    tags: ["agua", "Gran Cacica", "pozos", "saliva"],
    mito: `Cuando los Ette llegaron a una tierra montañosa, no encontraron agua para beber. Buscaron ríos y cañadas, pero no hallaron ninguna corriente. La falta de agua hizo sufrir a la gente y obligó a organizar un trabajo común.

La Gran Cacica mandó cavar un pozo profundo. Más lejos hizo abrir otro y después otro. Los hombres excavaron hasta que los huecos quedaron hondos. Ella durmió y, al despertar, preguntó si ya había agua. Le respondieron que no. Volvió a dormir y repitió la pregunta. Los pozos seguían secos.

Durante la noche, la Gran Cacica salió sola. Se acercó al primer pozo, miró hacia el fondo y llamó al agua. Dejó caer un poco de saliva en la abertura. Hizo lo mismo con cada uno de los pozos que la comunidad había cavado. Después regresó a descansar sin anunciar otro trabajo.

Por la mañana, los hombres encontraron los pozos llenos de agua buena y dulce. La Gran Cacica les mostró que el agua ya estaba allí. El cuento concluye que desde entonces el pueblo cuenta con buena agua.

La acción une dos capacidades diferentes. La comunidad prepara la profundidad mediante el esfuerzo de cavar, pero los huecos no bastan. La Cacica completa la tarea con palabra y saliva, elementos que salen de su cuerpo y establecen una relación con el agua. La fuente no la llama diosa ni describe un ritual secreto; la presenta como autoridad capaz de ordenar el trabajo y actuar cuando los pozos permanecen vacíos.

La versión anterior añadió montañas rebeldes, sabiduría abstracta y un recorrido heroico. Esta reconstrucción conserva la forma breve del relato: llegada a un territorio seco, pozos colectivos, dos comprobaciones fallidas, una intervención nocturna y agua dulce al amanecer.

La palabra de la Cacica no reemplaza el trabajo previo: actúa sobre los pozos que la gente ya había abierto.`,
    historyCore:
      "El séptimo relato destaca una autoridad femenina nombrada Gran Cacica. El corpus no proporciona su nombre propio, genealogía ni ceremonia; añadirlos convertiría una acción precisa en un sistema religioso no documentado.",
    versionCore:
      "Las fuentes contemporáneas relacionan territorio, salud y agua con Yunari, pero no identifican a la Gran Cacica con la Tierra Madre. Las dos figuras permanecen separadas mientras no aparezca una fuente que establezca esa equivalencia.",
    similarityCore:
      "Muchos relatos de origen del agua combinan excavación y acción creadora. En este caso la saliva no es contaminación: activa los pozos preparados por la gente y muestra una continuidad entre cuerpo, palabra, autoridad y territorio.",
    leccion:
      "El trabajo compartido abre el camino, pero el conocimiento sabe cuándo y cómo llamar al agua.",
    sceneHorizontal:
      "la Gran Cacica se inclina sobre varios pozos secos mientras la comunidad termina de cavarlos en una sabana montañosa",
    sceneVertical:
      "al amanecer, uno de los pozos rebosa agua dulce y la comunidad se reúne alrededor de la Gran Cacica",
    researchNotes:
      "CORRECCIÓN: no se inventa una diosa, rito o genealogía. AUTORIDAD: se conserva explícitamente el título Gran Cacica.",
  }),
  myth({
    slug: "el-maiz",
    title: "La ceiba que guardaba el maíz",
    summary:
      "La semilla de maíz estaba en lo alto de una ceiba que se reparaba cada noche; los Ette lograron derribarla trabajando sin interrupción.",
    tags: ["maíz", "ceiba", "trabajo colectivo", "semilla"],
    mito: `Antes de conseguir el maíz, los Ette se alimentaban con yuca, hierbas y animales del monte. Los Aruacos, en cambio, tenían maíz abundante. La narración contrasta esa diferencia sin explicar cómo lo habían obtenido ellos.

La semilla que necesitaban estaba guardada en forma de tusa en lo más alto de una gran ceiba. Los hombres decidieron tumbar el árbol para recogerla y sembrarla. Trabajaron durante el día, pero la ceiba era tan grande que no pudieron terminar. Volvieron a sus casas con la intención de continuar a la mañana siguiente.

Cuando regresaron, encontraron el tronco entero y sano. No quedaba señal de los cortes. Trabajaron otra jornada y ocurrió lo mismo: durante la noche, la ceiba recompuso la madera herida. El ciclo se repitió durante mucho tiempo. Cada día los hombres abrían una parte del tronco y cada noche el árbol recuperaba lo perdido y seguía creciendo.

Uno de ellos propuso no abandonar la tarea al caer el Sol. Ese día siguieron cortando después de la oscuridad. Como no dieron a la ceiba el tiempo nocturno para cerrarse, lograron derribarla a medianoche. Alcanzaron la tusa, sacaron las semillas y las sembraron. Así, según el cuento, el pueblo obtuvo el maíz.

La fuente no identifica a la ceiba como enemiga ni dice que el árbol muriera para siempre. Tampoco presenta la obtención del alimento como robo a los Aruacos: el maíz está en un árbol y la dificultad consiste en sostener el trabajo más allá del ciclo que restaura el tronco.

La revisión conserva esa lógica material. La comunidad aprende observando por qué fracasa el esfuerzo diurno y modifica su ritmo. No se añaden dioses, pruebas individuales ni una recompensa mágica. La semilla se alcanza porque varias personas trabajan sin interrumpirse hasta que la ceiba cae.

El alimento queda ligado tanto a la observación como a la labor compartida.`,
    historyCore:
      "El octavo relato pertenece a una familia americana de árboles de alimentos, pero su versión Ette es muy concisa. El corpus no nombra al hombre que propone trabajar de noche ni describe una ceremonia de siembra.",
    versionCore:
      "La expansión del Excel añadió secretos de los dioses y una victoria épica. Esta ficha vuelve a la secuencia documentada: diferencia alimentaria, tusa en la ceiba, regeneración nocturna, trabajo continuo y siembra.",
    similarityCore:
      "El gran árbol que guarda alimentos aparece en relatos Barí, Emberá y de otros pueblos. En la versión Ette la ceiba se repara por la noche, de modo que el problema no es solo cortarla sino comprender y vencer su ritmo.",
    leccion:
      "La perseverancia se vuelve conocimiento cuando una comunidad comprende el ritmo de aquello que enfrenta.",
    sceneHorizontal:
      "varias personas cortan una ceiba gigantesca durante el día mientras una tusa de maíz aparece entre las ramas más altas",
    sceneVertical:
      "a medianoche la ceiba finalmente cae y unas manos recogen las semillas de la tusa para llevarlas a la siembra",
    researchNotes:
      "CORRECCIÓN: se retiran dioses y lenguaje de hazaña no presentes. ACCIÓN CENTRAL: impedir la regeneración nocturna mediante trabajo continuo.",
  }),
  myth({
    slug: "el-gran-verano",
    title: "La semilla guardada durante el gran verano",
    summary:
      "Tras años de sequía, una semilla de maíz conservada en una mochila de fique permite reiniciar el cultivo sobre un tronco todavía húmedo.",
    tags: ["sequía", "maíz", "semilla", "fique"],
    mito: `Un verano extraordinario duró años. La lluvia dejó de caer, los ríos y las cañadas se secaron y la tierra se quemó. Muchas personas murieron por el hambre. Se perdieron las rozas y con ellas desaparecieron el maíz y la yuca que alimentaban a la gente.

Cuando por fin terminó la sequía, apareció otro problema. No quedaba semilla de maíz para comenzar de nuevo. Los hombres se preguntaron qué podrían sembrar después de que el calor hubiera consumido la cosecha anterior. La llegada de un tiempo menos seco no bastaba para recuperar lo perdido.

Entonces un hombre recordó que había guardado una pequeña cantidad de semilla en una mochila de fique. La sacó y la mostró a los demás. Aquella reserva era suficiente para intentar una nueva siembra, pero el suelo seguía demasiado caliente y reseco. Poner los granos directamente en la roza habría significado perderlos.

La comunidad encontró un lugar distinto: sembró la semilla sobre un tronco de árbol. Allí pudo conservar la humedad necesaria. El maíz creció, produjo una buena cosecha y devolvió la comida al pueblo. La narración no dice que el hombre recibiera un premio ni que la semilla fuera mágica. Su valor estaba en haber sido preservada y en usarla con cuidado cuando las condiciones cambiaron.

La ficha heredada convirtió el episodio en una aventura de resiliencia individual y añadió imágenes de un mundo olvidado. El relato de Tangrutaya Mutsu es más concreto. Nombra años sin lluvia, pérdida de cultivos, hambre, una mochila de fique, un tronco y una cosecha. La salvación no llega mediante una deidad ni mediante abundancia repentina: depende de una reserva pequeña y de no exponerla al suelo todavía hostil.

El cuento queda conectado con el relato de la ceiba que guardaba el maíz, pero no es un duplicado. Uno explica cómo se obtuvo la semilla por primera vez; este muestra cómo pudo recuperarse la agricultura después de una catástrofe climática.`,
    historyCore:
      "El noveno relato del corpus conserva una tecnología de supervivencia: guardar semilla en fique y adaptar el lugar de siembra. No se ha encontrado una identificación botánica del tronco ni una duración histórica comprobable de la sequía.",
    versionCore:
      "El resumen del Excel era relativamente fiel, pero la expansión publicada añadió un héroe solitario y simbolismo abstracto. La revisión devuelve el protagonismo a la semilla conservada y a la adaptación colectiva.",
    similarityCore:
      "Las reservas de semillas después de sequías o incendios aparecen en muchas memorias agrícolas. Esta versión destaca una solución específica: no sembrar en la roza caliente sino usar un tronco como primer soporte.",
    leccion:
      "Una reserva pequeña puede sostener el futuro cuando se protege y se usa en el momento adecuado.",
    sceneHorizontal:
      "una sabana seca con ríos vacíos y una persona que abre una mochila de fique donde permanecen unas pocas semillas de maíz",
    sceneVertical:
      "el primer maíz vuelve a crecer sobre un tronco húmedo mientras la comunidad prepara una nueva siembra",
    researchNotes:
      "CORRECCIÓN: no se individualiza una gesta heroica ni se inventa especie de árbol. DISTINCIÓN: no duplica el origen del maíz.",
  }),
  myth({
    slug: "el-algodon",
    title: "La semilla de algodón compartida",
    summary:
      "Papá Grande entrega algodón a la primera persona Ette; después, un hombre comparte semillas con un Aruaco pese a la enemistad entre los pueblos.",
    tags: ["algodón", "semilla", "intercambio", "Aruacos"],
    mito: `Cuando los primeros Ette bajaron a la tierra ya tenían algodón. Papá Grande había entregado al primer hombre una mochila pequeña con semillas. El relato presenta así la fibra como parte de los bienes que acompañaron el comienzo del pueblo, no como algo descubierto por accidente.

Los Aruacos no tenían algodón y las relaciones entre ambos grupos eran hostiles. Esa enemistad hacía difícil conseguir semillas mediante visita o intercambio. Un día, sin embargo, un hombre Aruaco llegó a la casa de un Ette y le pidió una porción para sembrar.

El dueño de la semilla se negó al principio. No dijo que quisiera conservar un monopolio. Le advirtió al visitante que, si los otros Aruacos veían su cultivo, sabrían de dónde lo había obtenido y podrían matarlo por haber acudido a territorio enemigo. El peligro recaía sobre quien cruzaba la frontera entre los grupos.

El Aruaco insistió. Finalmente el hombre Ette le regaló algunas semillas. El visitante las llevó, las sembró y no fue asesinado. Con esa acción, cuenta Tangrutaya Mutsu, el algodón pasó también a los Aruacos.

El episodio es breve y no narra una reconciliación general. Los pueblos no celebran un tratado ni desaparecen las guerras mencionadas en otra ficha. Una persona decide compartir y otra acepta el riesgo. El desenlace solo confirma que la semilla pudo cultivarse sin el castigo temido.

La versión anterior añadió campos prósperos, valentía heroica y una fraternidad completa. Esta revisión mantiene una escala menor. La mochila de Papá Grande explica la procedencia del algodón; la visita muestra que un bien puede atravesar una enemistad mediante un gesto concreto. La historia no identifica a los dos hombres ni describe cómo se hiló después la fibra.

Fuentes contemporáneas documentan que el algodón y el tejido siguen siendo importantes entre los Ette Ennaka. Ese contexto ayuda a comprender el material, pero no se inserta como si Tangrutaya Mutsu lo hubiera dicho dentro del cuento.`,
    historyCore:
      "El décimo relato conecta el algodón con la creación y con una relación interétnica. La foto del propio artículo de 1945 muestra a una mujer hilando, pero la página no usa esa imagen histórica como prueba de cada detalle narrativo.",
    versionCore:
      "La versión de 1945 solo dice que el Aruaco sembró y no fue muerto. No afirma que la donación terminara la enemistad ni que iniciara una alianza; esas conclusiones añadidas se eliminan.",
    similarityCore:
      "Las semillas compartidas entre pueblos pueden explicar la circulación de cultivos y técnicas. A diferencia de relatos de robo, aquí el intercambio ocurre después de una petición insistente y bajo una advertencia de peligro.",
    leccion:
      "Compartir una semilla puede abrir un paso limitado incluso cuando la desconfianza aún permanece.",
    sceneHorizontal:
      "dos hombres adultos de comunidades distintas intercambian discretamente semillas de algodón junto a una pequeña parcela",
    sceneVertical:
      "una planta de algodón crece desde semillas guardadas en una mochila mientras unas manos preparan la fibra",
    researchNotes:
      "CORRECCIÓN: no se presenta una reconciliación total. CONTEXTO: el algodón vivo del pueblo se documenta fuera del relato.",
  }),
  myth({
    slug: "el-palo-de-agua",
    title: "El palo que abrió el agua",
    summary:
      "Un padre prueba la fuerza de sus tres hijos; cuando el tercero arranca un palo clavado en la tierra, un chorro de agua surge del hueco.",
    tags: ["agua", "palo", "tres hermanos", "fuerza"],
    mito: `Un hombre que tenía tres hijos fue al monte, cortó un palo y lo llevó hasta un lugar donde pudiera clavarlo profundamente en la tierra. Después llamó a los jóvenes y propuso una prueba para saber cuál era el más fuerte. Cada uno debía intentar sacar el palo.

El primer hijo lo sujetó y tiró, pero no logró moverlo. El segundo hizo su intento y tampoco pudo arrancarlo. El relato no describe burlas, rivalidad ni castigo para quienes fallaron. Solo establece que el palo estaba tan firmemente clavado que la fuerza de los dos primeros no bastó.

El tercer hijo tomó el palo y consiguió sacarlo. En el mismo instante en que la madera abandonó la tierra, un chorro de agua brotó por la abertura. La prueba familiar reveló así algo que estaba contenido debajo del suelo. Desde entonces, afirma la narración, ese palo recibe el nombre de Palo de Agua porque al retirarlo deja salir mucha agua.

La historia no explica si el padre sabía de antemano lo que ocurriría, si el palo era una especie determinada o si el manantial continuó corriendo para formar un río. Tampoco identifica al tercer hijo como gobernante o héroe. Su fuerza completa una acción preparada por el padre y transforma una competencia doméstica en origen de agua.

La ficha anterior rodeó la escena con un pueblo entre montañas, una relación extraordinaria del padre con la naturaleza y secretos heredados. Ninguno de esos elementos aparece en el texto de Tangrutaya Mutsu. La versión revisada conserva la estructura mínima: monte, palo, padre, tres hijos, dos intentos fallidos y un brote repentino.

Aunque este relato y el de la Gran Cacica explican el acceso al agua, no son duplicados. En uno, la comunidad cava pozos y una autoridad femenina llama al agua con saliva. En el otro, un padre organiza una prueba y el agua aparece cuando el tercer hijo retira un palo. Mantenerlos separados permite ver dos relaciones distintas entre esfuerzo humano y agua oculta.`,
    historyCore:
      "El undécimo relato es uno de los más breves del corpus. Su título entre comillas en la edición de 1945 indica el nombre del palo, no una especie botánica identificada.",
    versionCore:
      "No se encontraron variantes independientes que nombren a los tres hijos o localicen el manantial. La ficha evita completar esos vacíos y distingue este cuento del origen del agua por la Gran Cacica.",
    similarityCore:
      "Objetos que tapan o liberan agua aparecen en relatos de muchas regiones. Aquí la apertura depende de una prueba entre hermanos y no de romper una prohibición o vencer a un guardián.",
    leccion:
      "Una acción sencilla puede revelar que bajo la tierra esperaba una fuerza capaz de sostener la vida.",
    sceneHorizontal:
      "un padre observa a tres hijos adultos junto a un palo profundamente clavado en el suelo de la sabana",
    sceneVertical:
      "el tercer hijo retira el palo y un chorro de agua azul se eleva desde la abertura mientras los demás observan",
    researchNotes:
      "CORRECCIÓN: no se inventan nombre del hijo, especie del palo, pueblo ni poderes del padre. NO UNIFICAR: tiene mecanismo distinto al relato de la Gran Cacica.",
  }),
  myth({
    slug: "la-mala-mujer",
    title: "La llamada «mala mujer»",
    summary:
      "Un anciano muere después de ser obligado a trabajar y ordena a sus hijos matar a su madre; la ficha conserva el relato sin justificar la violencia.",
    tags: ["familia", "muerte", "violencia", "memoria"],
    mito: `Un hombre anciano y enfermo vivía con su esposa y dos hijos. Un día, los hijos salieron al monte para cazar danta. Mientras estaban lejos, la mujer exigió que el anciano fuera a trabajar. Él respondió que no podía porque la edad y la enfermedad le habían quitado las fuerzas. Ella insistió.

El hombre llegó a la roza y comenzó la labor bajo un Sol muy fuerte. Se cansó, buscó la sombra de un árbol y murió allí. Sus hijos todavía no sabían lo ocurrido. Mientras recorrían el monte encontraron un claro limpio, sin maleza, y vieron a un hombre de pie en el centro.

Al acercarse reconocieron a su padre. Ya no aparecía como el enfermo que habían dejado en casa. Tenía el cuerpo pintado con achiote, hilos en tobillos, rodillas y brazos, una falda nueva, una cinta sobre el pecho y una corona de plumas amarillas y rojas. Llevaba además plumas pequeñas, cola de guacamaya, arco, flechas y macana, como alguien preparado para una fiesta.

Los hijos le preguntaron si iba a celebrar. Un viento fuerte lo ocultó y volvió a mostrarlo. El padre confirmó que se marchaba a una fiesta. Les entregó la macana y ordenó que fueran a la casa y golpearan a su madre en la cabeza.

Otro viento se llevó definitivamente su figura. Los hijos regresaron, anunciaron que el padre había muerto y cumplieron la orden: mataron a la mujer. El texto termina llamándola “mala mujer”.

La página no convierte ese desenlace en justicia ni en enseñanza obligatoria. Conserva una narración histórica que naturaliza una orden de matricidio y la contextualiza como producto de una voz, un momento y una mediación concretos. La violencia es indispensable para explicar el final, pero no se celebra ni se representa gráficamente. El nuevo título pone distancia frente al juicio heredado sin ocultar cómo fue nombrado el cuento.`,
    historyCore:
      "El duodécimo relato exige una cautela adicional: la fuente atribuye la culpa únicamente a la mujer y termina legitimando su muerte. Publicarlo con contexto permite documentar el corpus sin transformar ese juicio en norma Ette actual.",
    versionCore:
      "La expansión anterior amplificó la crueldad de la esposa y describió la venganza como justicia. Se retiran esas valoraciones. La ficha mantiene la orden y el homicidio porque forman el desenlace, pero señala su violencia.",
    similarityCore:
      "Los encuentros con una persona muerta que aparece vestida para otra fiesta son comunes en relatos sobre tránsito al más allá. Aquí ese motivo se cruza con una venganza familiar que no debe universalizarse.",
    leccion:
      "Conservar una historia violenta no obliga a repetir como verdad el juicio con que fue contada.",
    sceneHorizontal:
      "dos hijos adultos encuentran en un claro a su padre fallecido, vestido para una fiesta y parcialmente oculto por el viento",
    sceneVertical:
      "la macana permanece apoyada sin usarse mientras el padre desaparece entre capas de viento y los hijos regresan pensativos",
    researchNotes:
      "TRATAMIENTO SENSIBLE: no se justifica el matricidio ni se representa. TÍTULO: se conserva la denominación histórica entre comillas críticas.",
  }),
  myth({
    slug: "los-muertos-en-el-monte",
    title: "La casa de los muertos en el monte",
    summary:
      "Un hombre perdido llega a una casa levantada por los muertos; no comprende su lengua, reconoce el peligro y logra regresar con los vivos.",
    tags: ["muertos", "monte", "lengua", "casa"],
    mito: `Un día, los muertos decidieron ir al monte. Caminaron hasta encontrar un terreno despejado y consideraron que era un buen lugar para quedarse. Allí construyeron una casa y se sentaron dentro.

Tiempo después, un hombre vivo se perdió mientras recorría el monte. Al encontrar la vivienda creyó que podría preguntar cómo volver al camino. Entró y vio a sus habitantes sentados en el suelo. Les habló y ellos contestaron, pero ninguna de sus palabras le resultó comprensible.

La dificultad no era que los muertos guardaran silencio. Tenían una lengua propia. El hombre los veía responder y, sin embargo, no podía entender lo que decían. Esa diferencia le permitió reconocer que estaba en un lugar ajeno al mundo cotidiano.

Sintió miedo y salió corriendo. Después de buscar entre el monte, encontró el camino correcto y regresó a su casa. Contó a sus compañeros lo que había sucedido. Ellos también se asustaron y le explicaron que había llegado a la casa de los muertos.

El relato termina allí. Los muertos no persiguen al visitante, no intentan retenerlo y no le entregan un mensaje sobre el futuro. La amenaza se encuentra en haber cruzado sin saberlo una frontera y en escuchar una lengua que separa a quienes murieron de quienes todavía viven.

La ficha antigua añadió figuras fantasmales, una casa de terreno “desechado” y una aventura de ida y regreso. La versión de Tangrutaya Mutsu es más sobria: los muertos escogen un claro, levantan una casa, conversan en su lengua y un hombre perdido comprende demasiado tarde dónde está.

La escena también muestra que hablar no garantiza entender. La casa se parece lo suficiente a una vivienda para invitar a preguntar, pero la lengua revela otra comunidad. Por eso la página no clasifica el cuento como viaje heroico. Es un encuentro breve con un límite que el protagonista logra abandonar.`,
    historyCore:
      "El decimotercer relato carecía de historia contextual en el Excel pese a estar completo en la fuente de 1945. La revisión recupera el episodio y elimina la fórmula que decía que todavía no se conocía.",
    versionCore:
      "No se encontraron otras versiones atribuidas que expliquen la lengua de los muertos. El texto no afirma que sea ette taara invertido, habla secreta o ruido; simplemente dice que el visitante no la comprendía.",
    similarityCore:
      "Casas de muertos o aldeas invisibles aparecen en relatos de múltiples pueblos. Esta versión se distingue porque la frontera se reconoce mediante la incomprensión lingüística y no por esqueletos, sombras o apariciones.",
    leccion:
      "La lengua puede señalar una frontera aun cuando el lugar parezca una casa conocida.",
    sceneHorizontal:
      "un caminante adulto llega a una casa sobria en un claro nocturno y ve dentro varias siluetas conversando sin rasgos terroríficos",
    sceneVertical:
      "el hombre encuentra de nuevo el sendero mientras la casa de los muertos queda atrás entre árboles y palabras abstractas incomprensibles",
    researchNotes:
      "CORRECCIÓN: se reemplaza el falso aviso de historia desconocida. TONO: sin fantasmas estereotipados, persecución ni mensaje inventado.",
  }),
  myth({
    slug: "los-brujos",
    title: "Los buenos y los malos brujos",
    summary:
      "Los buenos brujos curan y llaman la lluvia; los malos pueden volver como tigres, como descubre un viajero que duerme en una casa funeraria.",
    tags: ["brujos", "tigre", "curación", "lluvia"],
    mito: `Tangrutaya Mutsu distinguió entre brujos buenos y malos. Los buenos curan enfermedades y llaman la lluvia cuando llega la sequía. Al morir siguen el mismo camino que las demás personas. Su conocimiento beneficia a la comunidad y no altera su condición después de la muerte.

Los malos brujos tienen otro destino. No se marchan cuando mueren. Regresan para causar daño y, como serían reconocidos si conservaran forma humana, se transforman en tigres. Por eso, cuando alguien encuentra un felino en el monte, no siempre puede saber si está ante un animal o ante un muerto que ha vuelto ocultando su identidad.

El cuento lleva esa creencia a una escena concreta. Un grupo de hombres caminaba por el monte cuando comenzó la noche. Encontraron una casa redonda y uno propuso dormir allí. Sus compañeros le advirtieron que dentro había un muerto enterrado y que no era un lugar seguro.

El hombre ignoró la advertencia, entró en la casa y se acostó. Los demás prefirieron permanecer afuera. Durante la noche llegó un tigre grande y mató a quien dormía. Sus compañeros concluyeron que la persona enterrada allí había sido un brujo malo. Huyeron por el monte.

La historia no relata un combate contra el tigre ni una ceremonia para destruirlo. La consecuencia nace de no escuchar a quienes conocían el lugar. Tampoco afirma que todos los tigres sean brujos: la incertidumbre es parte del motivo. Una persona en el monte puede encontrarse con uno u otro sin distinguirlos a simple vista.

La expansión publicada antes convirtió al tigre en monstruo y a los brujos en una jerarquía moral completa. Esta revisión mantiene el contraste funcional de la fuente: curar y traer lluvia frente a regresar para dañar; aceptar una advertencia frente a dormir en una casa vinculada con un muerto.

El monte conserva la duda entre ambas presencias.`,
    historyCore:
      "El decimocuarto relato combina una explicación general de los brujos con un cuento ejemplar. La palabra histórica “brujo” es la del texto castellano y no permite reconstruir por sí sola los términos ni cargos de ette taara.",
    versionCore:
      "Las fuentes contemporáneas hablan de médicos tradicionales y ceremonias de salud, pero no autorizan a equiparar automáticamente esos roles con los “brujos buenos” de la traducción de 1945.",
    similarityCore:
      "Personas que adoptan forma de jaguar o tigre aparecen en muchas cosmologías americanas. Aquí el rasgo decisivo es el regreso después de la muerte y la imposibilidad de reconocer con certeza qué se encuentra en el monte.",
    leccion:
      "Conocer un lugar incluye escuchar las advertencias de quienes recuerdan lo ocurrido allí.",
    sceneHorizontal:
      "varios viajeros se detienen ante una casa redonda de noche mientras un tigre aparece a distancia entre el bosque",
    sceneVertical:
      "un curador llama la lluvia sobre cultivos secos mientras una silueta de tigre queda separada en el monte oscuro",
    researchNotes:
      "CAUTELA: no se identifica brujo con médico tradicional contemporáneo. IMAGEN: sin ataque, cadáver, monstruo ni terror explícito.",
  }),
  myth({
    slug: "los-canibales",
    title: "El crimen ocultado",
    summary:
      "Después de una fiesta, dos hombres matan a un viajero y comen el cuerpo para ocultar el delito al cacique; no es un relato sobre un pueblo caníbal.",
    tags: ["crimen", "cacique", "chicha", "violencia"],
    mito: `En un pueblo prepararon chicha y llegaron personas de otros lugares para beber y bailar. La reunión duró hasta la noche. Cuando la gente estaba cansada, dos hombres decidieron regresar a su casa por el camino del monte.

Durante el trayecto encontraron a un hombre de un pueblo vecino que avanzaba por la misma ruta. Los dos viajeros comenzaron a pelear con él y lo mataron con una macana. Uno de los golpes le había herido la cara de una manera que permitiría reconocer el cuerpo.

Después del homicidio, los responsables temieron el castigo del cacique. Si enterraban al hombre y alguien lo encontraba, la lesión mostraría quién era y ayudaría a reconstruir lo sucedido. Para evitar que el crimen se descubriera, resolvieron asar el cuerpo y comerlo.

El plan consiguió ocultar la muerte. La versión termina diciendo que el cacique nunca supo que los dos hombres habían matado a una persona. Tangrutaya Mutsu añadió que su padre le había contado el episodio. Esa cadena familiar de transmisión es uno de los pocos comentarios de procedencia interna incluidos dentro de los veintiún relatos.

El título histórico “Los caníbales” puede sugerir falsamente que el cuento describe una costumbre colectiva o define a un pueblo. No es así. La acción corresponde a dos individuos que intentan borrar un homicidio. El canibalismo aparece como estrategia extrema de encubrimiento, no como alimentación ritual ni rasgo étnico.

La ficha revisada cambia el título visible para no convertir un delito narrado en etiqueta cultural. Mantiene el slug por estabilidad y conserva el desenlace porque es indispensable para entender por qué el cacique no descubrió el crimen. No recrea el consumo con detalle, no lo representa en la imagen y no añade culpa, confesión o castigo que la fuente no registra.

La historia es incómoda precisamente porque los responsables quedan impunes. Publicarla con atribución permite mostrar esa forma sin presentarla como enseñanza positiva ni como descripción general de los Ette Ennaka.`,
    historyCore:
      "El decimoquinto relato incluye una atribución del propio Tangrutaya Mutsu a su padre. Esa indicación fortalece la procedencia familiar del cuento, aunque no ofrece nombre, fecha ni otra versión independiente.",
    versionCore:
      "La expansión antigua convirtió el título en identidad colectiva y añadió remordimiento. La revisión lo renombra, limita la acción a dos homicidas y mantiene la impunidad documentada sin inventar consecuencias.",
    similarityCore:
      "Relatos de crímenes ocultos suelen terminar en descubrimiento o castigo. Este no: el cacique nunca sabe. Esa ausencia de cierre lo diferencia y evita convertirlo en fábula de justicia automática.",
    leccion:
      "Nombrar con precisión evita que el delito de dos personas se vuelva estigma de un pueblo.",
    sceneHorizontal:
      "una fiesta comunitaria con chicha termina al anochecer mientras dos viajeros se alejan por un sendero, sin mostrar homicidio ni consumo humano",
    sceneVertical:
      "el cacique permanece en el pueblo junto a una macana abandonada y un sendero oscuro que guarda el crimen fuera de escena",
    researchNotes:
      "CORRECCIÓN DE TÍTULO: no es un pueblo caníbal. TRATAMIENTO SENSIBLE: homicidio y consumo se narran sin detalle gráfico y no se ilustran.",
  }),
  myth({
    slug: "el-castigo",
    title: "La enfermedad después de la guerra",
    summary:
      "El cacique del Gran Río anuncia que cada muerte causada en el ataque volverá como enfermedad contra un hombre o un niño Ette.",
    tags: ["guerra", "enfermedad", "Gran Río", "retribución"],
    mito: `Un grupo de hombres Ette decidió atacar a la gente del Gran Río. Prepararon flechas y macanas y emprendieron el camino con la intención de matar. El cuento no identifica el río con un nombre actual ni explica qué conflicto había provocado la expedición.

El cacique del pueblo amenazado supo lo que se preparaba. Antes de que ocurriera el ataque pronunció una correspondencia: por cada hombre que los Ette mataran entre su gente, moriría de enfermedad uno de los hombres atacantes; por cada niño asesinado, enfermaría y moriría un niño del otro pueblo.

Los Ette llevaron a cabo la guerra y regresaron. Después comenzaron las muertes por enfermedad. Fallecieron hombres y niños, tal como había anunciado el cacique del Gran Río. La narración no describe síntomas, curación, arrepentimiento ni una segunda batalla. La equivalencia entre daño causado y pérdida sufrida constituye todo el desenlace.

La ficha antigua habló de una “maldición” como si se tratara de un poder fantástico aislado. El texto puede leerse así, pero también conserva una memoria donde guerra y epidemia quedan enlazadas. No hay información suficiente para identificar un brote histórico ni para demostrar una relación causal fuera del relato. La página mantiene ambas capas sin convertir ninguna en explicación médica.

El título revisado evita sugerir que la enfermedad sea un castigo merecido para cualquier comunidad. Dentro del cuento, el anuncio responde a una agresión concreta y reproduce sus víctimas una por una. Los niños aparecen en la amenaza porque también fueron objeto del ataque; su muerte no se presenta como daño lateral ni se utiliza para exaltar la guerra.

La versión no necesita un héroe. Tampoco termina con victoria. Quienes marchan armados vuelven llevando la consecuencia de sus acciones. El Gran Río, la palabra del cacique y la enfermedad bastan para cerrar una historia breve sobre violencia recíproca.`,
    historyCore:
      "El decimosexto relato puede reflejar la memoria de epidemias asociadas con conflictos, pero la fuente no permite fijar fecha, enfermedad ni grupo del Gran Río. Cualquier identificación histórica sería especulativa.",
    versionCore:
      "La revisión reemplaza la etiqueta simple de maldición por una descripción atribuida. Conserva la correspondencia uno a uno del relato sin presentarla como diagnóstico epidemiológico.",
    similarityCore:
      "La retribución proporcional aparece en relatos jurídicos y bélicos de muchas sociedades. Aquí no llega mediante juicio humano: la palabra del cacique enlaza cada muerte violenta con una enfermedad posterior.",
    leccion:
      "La violencia que alcanza a otra comunidad también regresa y multiplica las pérdidas propias.",
    sceneHorizontal:
      "un cacique del Gran Río levanta la mano frente a dos grupos separados por el agua, con armas bajas y sin combate",
    sceneVertical:
      "flechas y macanas quedan abandonadas junto al río mientras varias casas guardan silencio después del regreso",
    researchNotes:
      "CAUTELA: no se identifica enfermedad ni evento histórico. IMAGEN: sin víctimas, batalla ni niños enfermos.",
  }),
  myth({
    slug: "los-animales-hablan",
    title: "Los animales hablan",
    summary:
      "Dantas, monos, tigres, tortugas, venados y pájaros hablan porque son gente; la ardilla también lo hace, aunque cuesta entenderla.",
    tags: ["animales", "lenguaje", "danta", "monte"],
    mito: `Todos los animales saben hablar. Así comienza el relato atribuido a Tangrutaya Mutsu, sin explicar una época anterior en la que hubieran recibido el lenguaje. La capacidad de comunicarse no es una transformación extraordinaria: pertenece a su manera de vivir en el monte.

Cuando una danta encuentra comida, llama a las demás. Su voz anuncia que hay alimento y las otras dantas acuden para compartirlo. Los monos cantan por la mañana que el día está bueno y otros monos les responden confirmando el mensaje. El canto no es ruido interpretado desde afuera; dentro del cuento constituye una conversación.

También hablan el tigre, la tortuga, el venado y los pájaros. La ardilla se comunica menos y su voz resulta difícil de entender para otros seres, pero no queda fuera del mundo de quienes poseen palabra.

La narración reconoce que algunas personas niegan esa posibilidad. Frente a quienes dicen que los animales del monte no hablan, responde que esa afirmación es un embuste. La razón es directa: los animales son gente como los Ette.

La ficha antigua convirtió esta declaración en un bosque simbólico lleno de rumores y presentó a los animales como extensiones de una humanidad abstracta. La versión revisada conserva los ejemplos concretos. Hablar sirve para localizar comida, saludar el día, responder y habitar una comunidad de especies. No se añade una asamblea animal ni un tiempo mítico en el que los humanos perdieron la capacidad de entender.

“Gente como nosotros” tampoco significa que cada animal sea una persona disfrazada. El texto no borra las diferencias: una danta llama como danta, un mono canta como mono y la ardilla casi no se entiende. La semejanza está en poseer intención y comunicación.

Esta ficha y “Los monos” permanecen separadas. La primera formula la idea general y enumera especies; la segunda cuenta un episodio donde un mono devuelve una flecha. Unificarlas eliminaría la acción particular que Tangrutaya Mutsu presentó como otro relato.`,
    historyCore:
      "El decimoséptimo texto es una afirmación cosmológica breve apoyada en ejemplos de voces animales. El término castellano “hablar” procede de la traducción y no permite reconstruir las palabras o categorías de ette taara.",
    versionCore:
      "El Excel decía que faltaba contexto, aunque la fuente contiene el núcleo completo. No se añaden teorías animistas ni una lengua universal; se conservan especies, acciones y la frase que reconoce a los animales como gente.",
    similarityCore:
      "Muchos relatos americanos atribuyen lenguaje y agencia a animales. En esta versión el énfasis está en la vida cotidiana: encontrar comida, cantar el día y responder, no en una edad fabulosa perdida.",
    leccion:
      "Escuchar el monte exige reconocer que otras especies también comunican intención, alimento y presencia.",
    sceneHorizontal:
      "dantas, monos, un tigre, una tortuga, un venado, pájaros y una ardilla ocupan distintos planos del bosque y se responden mediante cintas gráficas sin texto",
    sceneVertical:
      "una danta encuentra frutos y llama a otras mientras monos saludan el amanecer desde las ramas",
    researchNotes:
      "NO UNIFICAR: la afirmación general se distingue del episodio de la flecha en Los monos. LENGUAJE: no se inventan palabras animales.",
  }),
  myth({
    slug: "los-monos",
    title: "El mono que devolvió la flecha",
    summary:
      "Los monos cantan y salen a montear como gente; uno toma la flecha disparada por un cazador, la devuelve y mata al atacante.",
    tags: ["monos", "flecha", "caza", "reciprocidad"],
    mito: `Los monos son gente. Por la mañana van hacia la quebrada, cantan que el día está bueno y anuncian que saldrán a montear. El relato atribuye a sus desplazamientos y cantos una organización comparable con la de las personas, sin decir que antes hubieran tenido forma humana.

Un día, un hombre vio a un mono y le disparó una flecha. El proyectil casi alcanzó al animal. En vez de huir, el mono recogió la misma flecha. El cazador trató de protegerse escondiéndose detrás de un árbol, pero el mono lanzó el arma de regreso y lo mató.

Tangrutaya Mutsu termina repitiendo que los monos son gente y son como los Ette. La conclusión no convierte al animal en monstruo ni celebra la muerte del hombre. La escena invierte una cacería: quien iba a ser presa comprende el arma, apunta y devuelve la agresión.

La ficha anterior llamó al mono trickster y añadió inteligencia humana como si fuera una sorpresa externa al relato. Ese arquetipo no corresponde a la fuente. El mono no engaña mediante un truco ni roba una herramienta; responde de forma directa con la flecha que acaba de recibir.

La narración tampoco explica por qué el hombre decidió cazarlo, si conocía la condición de los monos o qué hicieron sus compañeros después. Completar esas preguntas produciría otra historia. La forma documentada consta de una afirmación, un canto matutino, un disparo fallido y una devolución mortal.

Aunque comparte el principio de que los animales hablan, no se unifica con la ficha anterior. “Los animales hablan” reúne voces de varias especies y describe comunicación. “El mono que devolvió la flecha” muestra las consecuencias de tratar como objeto de caza a un ser que conoce las mismas herramientas.

La imagen evita representar la muerte. Puede mostrar el instante en que el mono sostiene la flecha y el cazador permanece oculto, dejando fuera el impacto final.`,
    historyCore:
      "El decimoctavo relato ocupa pocas líneas y depende del principio enunciado inmediatamente antes: los animales son gente. Mantener dos fichas sigue la división explícita del narrador y del corpus.",
    versionCore:
      "La expansión añadió río, bruma, caza colectiva y un mono arquetípico. La revisión vuelve al único episodio documentado y no convierte la devolución de la flecha en una prueba de superioridad humana.",
    similarityCore:
      "Animales que devuelven armas aparecen en cuentos de inversión de la caza. Aquí la respuesta tiene sentido porque el mono ya fue presentado como gente que canta y sale a montear.",
    leccion:
      "Quien reconoce al otro solo como presa puede recibir de vuelta la misma violencia que lanzó.",
    sceneHorizontal:
      "un mono sobre una rama sostiene la flecha que acaba de caer mientras un cazador adulto permanece detrás de un árbol, sin impacto ni herida",
    sceneVertical:
      "varios monos cantan al amanecer junto a una quebrada y uno lleva una flecha sin usar entre las manos",
    researchNotes:
      "CORRECCIÓN: no es trickster ni animal humanizado por sorpresa. IMAGEN: se excluye la muerte y se conserva la inversión de la caza.",
  }),
  myth({
    slug: "el-hombre-que-sono-con-danta",
    title: "El hombre que soñó con una danta",
    summary:
      "Un hombre sigue un sueño donde un árbol mata a una danta, pero el árbol cae sobre él; sus compañeros encuentran después a la llamada danta mala.",
    tags: ["sueño", "danta", "árbol", "muerte"],
    mito: `Una mañana, un hombre contó que había soñado con una danta. Sus compañeros le pidieron explicar el sueño. Él dijo que se veía caminando por el monte cuando encontraba un árbol grande que había caído sobre el animal. En la visión sacaba a la danta de debajo del tronco y comía mucha carne.

Los otros lo animaron a comprobar si el sueño anunciaba una presa real. El hombre aceptó la idea y salió al monte. Mientras caminaba se levantó mucho viento. De repente cayó un árbol grande, pero no golpeó a la danta soñada: mató al propio soñador.

Sus compañeros esperaron el regreso. Cuando pasó el tiempo y no apareció, fueron a buscarlo. Encontraron su cuerpo debajo del árbol. Después decidieron continuar buscando la danta relacionada con el sueño. Recorrieron los alrededores hasta hallarla y la mataron con tres flechas.

El relato termina calificando al animal como una “danta mala”. No explica si ella derribó el árbol, si el sueño había cambiado de sujeto o si la muerte del hombre exigía venganza. La secuencia deja esa relación abierta: el árbol que en la visión aplastaba a la presa cae en la vigilia sobre el cazador, y la danta aparece viva después.

La ficha antigua transformó el sueño en una advertencia clara sobre no perseguir deseos y afirmó que el hombre había visto exactamente su destino. Esa lectura borra la inversión central. Él no soñó su propia muerte; soñó la muerte de la danta. El acontecimiento posterior desplaza la imagen del animal al soñador.

En la cosmología Ette, investigaciones contemporáneas muestran que los sueños pueden anticipar peligros y orientar acciones, pero su interpretación no es una clave automática. Esta historia confirma esa dificultad: quienes oyen el sueño lo toman como promesa de alimento y la salida termina en muerte.

La página conserva las tres flechas y la expresión histórica sobre la danta, pero no convierte al animal en demonio. La imagen evita mostrar el cadáver y puede representar el árbol caído, el sueño y la búsqueda como planos distintos.`,
    historyCore:
      "El decimonoveno relato enlaza el corpus antiguo con la importancia contemporánea de los sueños entre los Ette. Juan Camilo Niño Vargas documenta su interpretación social, pero no ofrece esta escena como fórmula de significado fijo.",
    versionCore:
      "La expansión heredada dijo que el sueño presagiaba directamente la muerte del hombre. Se corrige: la visión mostraba una danta muerta; la vigilia invierte las posiciones y conserva una ambigüedad esencial.",
    similarityCore:
      "Sueños de caza que anuncian éxito o peligro aparecen en muchas tradiciones. Esta versión se distingue por la inversión del árbol y por la decisión colectiva de buscar al animal después de encontrar al soñador.",
    leccion:
      "Un sueño puede orientar una búsqueda sin revelar de manera simple quién será alcanzado por su imagen.",
    sceneHorizontal:
      "un hombre duerme y sueña con una danta junto a un árbol caído, mientras otro plano muestra el mismo árbol movido por el viento",
    sceneVertical:
      "los compañeros encuentran el gran tronco en el monte y distinguen una danta viva a distancia, sin cadáver ni caza explícita",
    researchNotes:
      "CORRECCIÓN: el sueño no muestra la muerte del soñador. CAUTELA: la danta mala se conserva como frase de la fuente, sin demonización visual.",
  }),
  myth({
    slug: "el-hombre-que-sono-con-caiman",
    title: "El hombre que soñó con un caimán",
    summary:
      "Un caimán traga al soñador; él escapa con una flecha y, tras recuperarse en el monte, aprende del animal a llamar la caza con un silbido.",
    tags: ["sueño", "caimán", "caza", "transformación"],
    mito: `Un hombre contó que había soñado con un caimán. En la visión caminaba por la playa, encontraba un huevo grande y se lo comía. Al despertar temió que el animal lo comiera a él. Su hermano se burló del miedo y afirmó que el caimán era gente como ellos.

Esa tarde, el hermano lo invitó a pescar. El soñador no quería acercarse al río, pero finalmente fue. Mientras ambos estaban en la playa, apareció un caimán grande, lo atrapó y se lo tragó junto con su arco y sus flechas.

Dentro del animal, el hombre sufrió hambre, sed y oscuridad. Oyó cantar a un mono afuera y comprendió que había llegado el día. Tomó una flecha y comenzó a punzar al caimán desde el interior. El animal nadó desesperado y preguntó quién lo hería. Después le dio tos y abrió la boca. El hombre atravesó una flecha entre las mandíbulas para impedir que se cerraran y salió.

Cayó en la playa como muerto, pero despertó por la noche y volvió a su casa. Allí la gente bebía chicha. Recordó a su hermano que el sueño había advertido el encuentro. Como se sentía enfermo y no quería permanecer con su familia, se retiró al monte hasta recuperar el cuerpo.

Cuando regresó estaba nuevamente fuerte. Empezó a traer cada noche abundante caza: mono, tatabro, guatinaja, danta y zaino. Los demás quisieron saber cómo lo lograba y lo siguieron a escondidas. Vieron que silbaba; cada animal acudía al llamado y él lo cazaba.

Al preguntarle por ese conocimiento, respondió que lo había aprendido del caimán. La historia no explica una enseñanza verbal dentro del vientre ni una alianza ceremonial. El aprendizaje aparece después de sobrevivir, enfermar y aislarse.

La ficha antigua redujo el final a una habilidad mágica obtenida como premio heroico. La versión completa muestra un proceso más incierto: el sueño produce miedo, el miedo es ignorado, la imagen se cumple, la fuga deja enfermedad y solo tras un tiempo en el monte surge una capacidad nueva. El caimán es a la vez peligro, persona no humana y fuente de conocimiento.`,
    historyCore:
      "El vigésimo relato es uno de los cuentos oníricos más completos del corpus. Su relación entre sueño, enfermedad, retiro y aprendizaje coincide con la importancia social de la interpretación onírica documentada entre los Ette actuales.",
    versionCore:
      "La expansión publicada acortó la recuperación y presentó el silbido como poder instantáneo. La fuente distingue la fuga, el regreso enfermo, el retiro al monte y la aparición posterior de la habilidad para cazar.",
    similarityCore:
      "Ser tragado por un animal y salir usando una herramienta tiene paralelos muy amplios. Esta versión añade un sueño de huevo, el canto del mono como señal de día y una técnica de caza aprendida después del aislamiento.",
    leccion:
      "Sobrevivir a un peligro puede transformar el miedo en conocimiento, pero no borra la advertencia inicial.",
    sceneHorizontal:
      "un caimán visto en corte gráfico contiene a un hombre adulto con arco y flecha, junto a un río del Caribe sin herida ni violencia explícita",
    sceneVertical:
      "el hombre ya recuperado silba en el monte y varios animales aparecen a distancia como respuesta, sin mostrar su muerte",
    researchNotes:
      "CORRECCIÓN: se restituye la enfermedad y el retiro antes del aprendizaje. CAIMÁN: peligro y maestro, no monstruo.",
  }),
  myth({
    slug: "el-morrocoyo",
    title: "El morrocoyo que antes era gente",
    summary:
      "Un morrocoyo herido responde contra una mujer; después de su muerte, los de su especie forman caparazones de corteza para protegerse.",
    tags: ["morrocoyo", "transformación", "caparazón", "caza"],
    mito: `Antes, los morrocoyos eran gente como los Ette. No tenían caparazón y vivían en los árboles. Un día, dos hombres que recorrían el monte encontraron a uno en una rama. Uno pidió matarlo. El otro se resistió porque reconocía que era gente, pero terminó disparando.

La flecha alcanzó una pata trasera. El relato explica así la rigidez que todavía se observa en esa parte del cuerpo. El morrocoyo se sostuvo del árbol con la cola. Uno de los cazadores trepó para cortar la rama y, al hacerlo, también cortó la cola del animal; por eso quedó corta.

Al caer, los hombres lo golpearon. El morrocoyo logró correr y se lanzó al agua, donde ellos no quisieron seguirlo. A la mañana siguiente llegó una mujer a recoger agua. El animal, resentido por el ataque del día anterior, tomó arco y flecha y la mató.

Cuando la mujer no regresó, los hombres fueron a buscarla. Encontraron su cuerpo junto al agua, atribuyeron la muerte al morrocoyo, lo persiguieron y lo mataron. Uno llevó el animal a casa, lo asó y lo comió pese a la advertencia de los demás.

Desde entonces, concluye la narración, los morrocoyos permanecen cerca del agua pero ya no pueden atacar con arco y flecha. Para protegerse de los seres humanos, formaron una concha dura hecha de corteza de árbol. También desde ese episodio comenzaron a ser considerados alimento.

La ficha heredada mezcló este relato con una segunda historia sobre una persona llamada Wuacha transformada en morrocoya y con un anciano Jacinto que la contaba a sus nietos. Ninguna de esas figuras aparece en el corpus de Tangrutaya Mutsu ni en las fuentes Ette contemporáneas revisadas. Se retiran por completo.

La versión conservada es difícil: incluye caza, represalia, homicidio y consumo. La página no los convierte en justicia ni los representa gráficamente. Su núcleo etiológico explica patas, cola, cercanía al agua y caparazón mediante una cadena de agresiones que cambia para siempre la relación entre humanos y morrocoyos.`,
    historyCore:
      "El vigesimoprimer y último relato del corpus fue separado de las notas comparativas por varias láminas fotográficas en la edición, pero forma una sola narración completa atribuida a Tangrutaya Mutsu.",
    versionCore:
      "No hay dos versiones dentro de la fuente de 1945. La historia de Wuacha y el marco del abuelo Jacinto fueron añadidos durante la expansión del Excel; al no encontrarse procedencia, se eliminan en vez de presentarlos como variante.",
    similarityCore:
      "Los relatos etiológicos explican rasgos animales mediante acontecimientos antiguos. Este encadena la pata rígida, la cola corta y el caparazón de corteza, además de explicar una relación ambigua de caza y alimento.",
    leccion:
      "Una cadena de agresiones puede convertir cercanía y semejanza en miedo, defensa y distancia duradera.",
    sceneHorizontal:
      "un morrocoyo sin caparazón se sostiene de una rama mientras dos cazadores adultos dudan abajo, sin flecha impactando ni golpes",
    sceneVertical:
      "un morrocoyo junto al agua se cubre con capas planas de corteza que forman el primer caparazón",
    researchNotes:
      "CORRECCIÓN MAYOR: se elimina por completo la historia sintética de Wuacha y el abuelo Jacinto. IMAGEN: sin homicidio, consumo ni animal herido.",
  }),
  myth({
    slug: "yunari-y-las-cinco-tierras",
    title: "Yunari y las cinco tierras",
    summary:
      "Yunari Kraari es la Tierra Madre; cuatro tierras han transcurrido y una quinta espera en el cielo, donde no habrá violencia ni muerte.",
    tags: ["Yunari", "cinco tierras", "ciclos", "Tierra Madre"],
    sourceMode: "living",
    mito: `Yunari Kraari es la Tierra Madre. Las fuentes Ette contemporáneas la describen como una anciana anterior a Sol y Luna y como abuela de Yaau y Numirinta. Su extensión es la misma de la tierra: los arroyos son sus venas, las aguas son su sangre y la gente vive sobre su espalda y su pecho.

El mundo habitado no es el único. Los Ette explican que han existido varias tierras. Las anteriores fueron destruidas y renovadas después de que la violencia y la sangre ensuciaran el cuerpo de Yunari. El fuego y el agua aparecen como fuerzas que la limpian para que una nueva generación pueda vivir.

La humanidad actual ocupa la cuarta tierra, también llamada Tierra del Medio. Arriba existe otra región habitada y debajo hay agua y un mundo oscuro. La quinta tierra permanece en el cielo. Allí viven los Ette Kooronda, “gente con caparazón” o piel gruesa según algunas traducciones.

La cuarta y la quinta tierra mantienen una relación inversa. Cuando aquí es de día, allí es de noche. Los sonidos de animales que se escuchan en ciertos momentos pueden pertenecer a la gente y los seres de arriba. Las puertas del cielo anuncian que quienes esperan desean bajar.

Cuando la quinta tierra descienda, la cuarta terminará. Las versiones citadas afirman que en el nuevo mundo no habrá violencia ni muerte. Ese cambio no es simplemente una promesa lejana: los sueños, las ceremonias y el cuidado del territorio permiten reconocer el peligro y retrasar la destrucción. Mientras haya personas Ette que mantengan su pensamiento y sostengan a Yunari, los pilares de la Tierra del Medio pueden permanecer.

La historia no describe cinco planetas ni una catástrofe científica. Fuego, agua, suciedad, cuerpo y descenso pertenecen a una memoria cosmológica donde la historia humana afecta a la Tierra Madre. La página conserva esa relación sin interpretar las destrucciones como volcanes, tsunamis o fechas geológicas, hipótesis añadidas por algunos comentaristas.`,
    historyCore:
      "El núcleo se documenta en el trabajo etnográfico de Juan Camilo Niño Vargas, en citas reunidas por Andrea Buitrago, en documentos de la ONIC y en síntesis recientes sobre Narakajmanta. No aparece como relato autónomo en 1945.",
    versionCore:
      "Las fuentes alternan Yunari y Yunnari, Tierra del Medio y cuarta tierra, así como traducciones distintas de Ette Kooronda. Coinciden en el cuerpo terrestre, los ciclos anteriores y una quinta tierra que espera descender.",
    similarityCore:
      "Los mundos sucesivos recuerdan edades destruidas por agua o fuego en otras cosmologías. La particularidad Ette está en Yunari como cuerpo vivo sostenido por el pensamiento y en la relación inversa entre cuarta y quinta tierra.",
    leccion:
      "Cuidar la memoria y el territorio ayuda a sostener el mundo presente frente a la violencia.",
    sceneHorizontal:
      "Yunari aparece como gran contorno femenino integrado a ríos y sabanas, con cuatro capas terrestres y una quinta tierra luminosa esperando en el cielo",
    sceneVertical:
      "las venas de Yunari se convierten en arroyos mientras pequeñas figuras Ette sostienen cuatro postes bajo la Tierra del Medio",
    researchNotes:
      "INCORPORACIÓN NUEVA: cosmogonía contemporánea ausente del corpus de 1945. CAUTELA: se excluyen equivalencias con volcán, tsunami o planeta.",
  }),
  myth({
    slug: "yaau-numirinta-y-las-dos-mazorcas",
    title: "Yaau, Numirinta y las dos mazorcas",
    summary:
      "Yaau y Numirinta bajan a la laguna de San Ángel y transforman dos mazorcas de maíz cariaco en la nueva generación Ette Ennaka.",
    tags: ["Yaau", "Numirinta", "maíz cariaco", "creación"],
    sourceMode: "living",
    mito: `Después de que una tierra anterior quedó sin gente, Yaau y Numirinta descendieron del cielo hasta una laguna de las sabanas de San Ángel. Las fuentes contemporáneas los nombran como creador y creadora, asociados también con ceremonias, cosecha y continuidad de la vida Ette.

Al llegar, Yaau miró hacia el oriente, el lugar por donde nace el Sol. Numirinta dirigió la mirada hacia el occidente, donde la luz se oculta. Entre ambas orientaciones tomaron dos mazorcas de maíz cariaco.

Con esas mazorcas formaron a los Ette Ennaka de la generación actual, llamados también Ette Takke o gente nueva en algunas fuentes. El pueblo no surge aquí de greda ni cae empujado desde el cielo. Nace de un alimento cultivado y de la acción conjunta de dos figuras creadoras situadas en lados complementarios del día.

Otros resúmenes añaden que Yaau creó animales, árboles y plantas y enseñó a sembrar, mientras Numirinta enseñó a cocinar y a tejer mochilas y chinchorros. La división no establece que una figura sea secundaria: ambos conocimientos permiten que la nueva gente habite la tierra. Las fuentes sitúan a Yaau hacia la salida del Sol y a Numirinta hacia su ocaso.

El relato pertenece al mismo universo donde Yunari es Tierra Madre y donde varias tierras han sido destruidas y renovadas. Las dos mazorcas aparecen después de una limpieza del mundo mediante agua y fuego. Esta ficha, sin embargo, se concentra en el descenso, la laguna, las orientaciones y la creación de la gente; la secuencia de las cinco tierras se explica por separado.

La narración tampoco se funde con el cuento de Papá Grande publicado en 1945. Las dos versiones pueden convivir dentro de una tradición que no está obligada a ofrecer un único comienzo. Mantenerlas separadas permite ver el cambio de nombres, agentes y materiales: greda y caída en una; maíz, complementariedad y laguna en la otra.`,
    historyCore:
      "El Ministerio de las Culturas publicó en 2024 una síntesis basada en voces de Luis Eduardo Granados y César Rozo. El artículo de Uninorte y otros estudios respaldan el núcleo de Yaau, Numirinta y las mazorcas.",
    versionCore:
      "Algunas fuentes escriben Numirinta y otras conservan variantes de transliteración; Ette Takke se traduce como gente nueva. La cantidad de dos mazorcas y las orientaciones este-oeste aparecen de forma consistente en la síntesis reciente.",
    similarityCore:
      "Crear personas a partir de maíz tiene amplias resonancias americanas. La versión Ette se distingue por dos mazorcas de maíz cariaco, una laguna de San Ángel y la acción complementaria de Yaau y Numirinta.",
    leccion:
      "La nueva gente nace cuando alimento, orientación y conocimientos complementarios se encuentran en el territorio.",
    sceneHorizontal:
      "Yaau y Numirinta adultos se sitúan junto a una laguna de San Ángel, uno mirando al oriente y otra al occidente, con dos mazorcas de maíz cariaco entre ambos",
    sceneVertical:
      "dos mazorcas abiertas se transforman simbólicamente en una comunidad Ette junto a la laguna, bajo el amanecer y el ocaso unidos",
    researchNotes:
      "INCORPORACIÓN NUEVA: relato publicado con voces comunitarias en 2024 y apoyado por fuentes académicas. NO FUSIONAR: se mantiene separado de Papá Grande.",
  }),
];

export default chimilaDefinitions;
