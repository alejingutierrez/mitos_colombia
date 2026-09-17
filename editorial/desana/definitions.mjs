const narrativeBoundary = `Esta versión editorial parafrasea una narración publicada por autores Desana-Kêhíripõrã. No añade diálogos, vestuario, fórmulas, objetos ceremoniales ni ubicaciones precisas ausentes de la fuente, y no presenta la versión de un clan como doctrina total del pueblo Desana.`;

function myth({ title, summary, tags, mito, ...definition }) {
  const seoTitle = `${title} | Desana`;
  const focusKeywords = [title, "relatos Desana", ...tags.slice(0, 3)];
  return {
    ...definition,
    title,
    summary,
    tags,
    mito: `${mito}\n\n${narrativeBoundary}`,
    excerpt: summary,
    seoTitle,
    seoDescription: summary,
    focusKeywords,
  };
}

export const desanaDefinitions = [
  myth({
    slug: "creacion-desana",
    title: "Yebá Buró y la Canoa de Transformación",
    summary:
      "Yebá Buró crea el universo, el Sol y la Canoa de Transformación que conduce a la futura humanidad por los ríos.",
    tags: ["Yebá Buró", "Canoa de Transformación", "creación", "Umukomasã"],
    mito: `Antes de que existieran el mundo, la luz o las personas, estaba Yebá Buró, la Abuela del Mundo. Se creó a sí misma en medio de la oscuridad, sostenida sobre un banco de cuarzo blanco. Allí pensó cómo formar la tierra y levantó la Maloca del Universo. También hizo a cinco seres llamados Hombres Trueno o Hombres de Cuarzo, pero ellos no pudieron completar la humanidad que ella imaginaba.

Yebá Buró formó entonces a Yebá Gõãmü, un ser sin cuerpo. Él tomó un bastón ceremonial y lo alzó. La Abuela del Mundo colocó sobre el bastón uno de sus adornos luminosos y este se convirtió en Abe, el Sol. Con su luz pudieron distinguirse los espacios. La tierra comenzó a afirmarse por capas a partir de elementos que la narración relaciona con una semilla de tabaco y con leche.

La Abuela guardó los adornos del tercer Hombre Trueno. En ellos estaba la posibilidad de la futura humanidad. El tercer Trueno descendió al mundo bajo la forma de una enorme serpiente cuya cabeza parecía la proa de una canoa. Era Pamürïgahsiru, la Canoa de la Futura Humanidad o Canoa de Transformación.

La canoa-serpiente avanzó bajo el agua. Viajó desde la región nombrada como Lago de Leche y siguió por el Amazonas, el río Negro, el Uaupés y el Tiquié. En el trayecto se detuvo en casas de transformación. En cada una, quienes viajaban recibían capacidades y formas necesarias para llegar a ser personas. El viaje no fue un simple desplazamiento geográfico: fue un proceso de diferenciación.

A medida que avanzaban, las lenguas dejaron de ser una sola. Los grupos fueron recibiendo nombres y relaciones propias. La canoa llegó finalmente a Ipanoré. Allí la futura humanidad pudo salir a la superficie por una abertura en la piedra. Los distintos pueblos emergieron en un orden recordado por la narración. Umukomahsü Boreka, antepasado principal de los Desana-Kêhíripõrã, salió en segundo lugar.

La creación no termina con la aparición de seres humanos aislados. El recorrido enlaza Sol, río, lengua, parentesco y territorio. La gente surge después de atravesar casas y aguas, y lleva consigo las diferencias construidas durante el viaje.`,
    historyCore:
      "La ficha heredada conservaba la idea de una Abuela creadora y una canoa-serpiente, pero expandía el relato con prosa no rastreable. La revisión mantiene su URL y reconstruye la secuencia desde el primer capítulo del libro Kêhíripõrã.",
    versionCore:
      "La fuente identifica este origen con el clan Desana-Kêhíripõrã y registra un orden de surgimiento. Otras publicaciones Desana pueden organizar ancestros y recorridos de otro modo; la página no combina esas genealogías.",
    similarityCore:
      "Las canoas-anaconda de transformación aparecen entre varios pueblos tukano orientales. Aquí se atribuye la versión por Yebá Buró, los cinco Hombres Trueno, Pamürïgahsiru, las casas subacuáticas e Ipanoré.",
    leccion:
      "La humanidad se forma al aprender diferencias, relaciones y responsabilidades durante un viaje compartido.",
    sceneHorizontal:
      "Yebá Buró contempla una canoa-anaconda luminosa que recorre bajo el agua varias casas de transformación",
    sceneVertical:
      "la futura humanidad emerge por una abertura de piedra al amanecer mientras la canoa-serpiente queda en el río",
    researchNotes:
      "CORRECCIÓN INTEGRAL: conserva el slug histórico y reemplaza la expansión generada por la secuencia publicada de Yebá Buró y Pamürïgahsiru.",
  }),
  myth({
    slug: "el-origen-de-la-noche-desana",
    title: "Ñami y el origen de la noche",
    summary:
      "Los Desana viajan hasta Ñami para obtener la noche, pero abren antes de tiempo el recipiente que guardaba la oscuridad.",
    tags: ["Ñami", "noche", "Abe", "sabiduría"],
    mito: `Al comienzo, en el mundo solo había día. La luz de Abe, el Sol, permanecía sin pausa y la gente no conocía un tiempo para dormir. Los Desana pidieron a Yebá Gõãmü que les ayudara a conseguir la noche. Él les indicó que debían viajar hacia el norte, hasta la casa de Ñami, el Dueño de la Noche.

Los hermanos llegaron a la maloca de Ñami. Antes de entregarles aquello que buscaban, el dueño quiso mostrarles cómo era la oscuridad. Cerró la casa y abrió un recipiente pesado en el que guardaba la noche. De allí salieron sonidos de aves e insectos. La oscuridad ocupó el espacio y casi todos los visitantes quedaron dormidos.

Solo el hermano menor permaneció atento. Observó el orden con el que Ñami hacía pasar la noche y esperaba la llegada del amanecer. Cuando la demostración terminó, los hermanos recibieron el recipiente con la advertencia de no abrirlo durante el viaje. Debían transportarlo hasta su propia maloca y esperar el momento indicado.

El camino de regreso fue difícil porque la carga pesaba cada vez más. Los mayores desconfiaron del hermano menor y no quisieron escuchar su consejo. Pensaron que podían revisar lo que llevaban antes de llegar. Abrieron el recipiente en medio del trayecto.

La noche escapó de golpe. Pájaros nocturnos, grillos y otras voces se dispersaron. El cielo se oscureció, llegó una tormenta y los viajeros perdieron la orientación. Lo que debía entrar de manera ordenada apareció sin medida, lejos de la casa donde se esperaba recibirlo.

El hermano menor recordó lo que había observado junto a Ñami. A diferencia de los otros, sabía reconocer las señales de la noche y la proximidad del amanecer. Gracias a esa atención pudo conducir el proceso hasta que volvió la claridad. Desde entonces el mundo conoce la alternancia entre día y noche.

La fuente cierra el episodio con una enseñanza explícita sobre el hermano al que los demás consideraban inferior. El conocimiento no dependió de la edad ni de la posición que los mayores daban por segura. Lo obtuvo quien permaneció despierto, miró con cuidado y respetó el límite impuesto al recipiente.`,
    historyCore:
      "El segundo capítulo de la obra Kêhíripõrã presenta el origen de la noche como un viaje a la casa de Ñami. No existía una ficha heredada separada, aunque el episodio tiene personajes, conflicto y cierre propios.",
    versionCore:
      "La edición vincula a Ñami con el norte y conserva una explicación moral sobre el hermano menor. Esta ficha no convierte el recipiente en un objeto genérico ni inventa su forma material.",
    similarityCore:
      "Relatos sobre un recipiente que libera noche o sonidos circulan en la Amazonía. La secuencia Desana se reconoce por Ñami, la prueba en su maloca, el peso del regreso y la atención del hermano menor.",
    leccion:
      "La sabiduría puede estar en quien observa con cuidado, aunque otros lo consideren menor.",
    sceneHorizontal:
      "viajeros cargan el recipiente de Ñami mientras aves nocturnas y grillos se escapan sobre el río",
    sceneVertical:
      "el hermano menor permanece despierto dentro de la oscuridad y reconoce una línea de amanecer",
    researchNotes:
      "ADICIÓN DOCUMENTADA: capítulo «A origem da noite» de la obra Desana-Kêhíripõrã.",
  }),
  myth({
    slug: "guelamun-ye-el-nieto-del-trueno",
    title: "Guramüye y el primer cataclismo",
    summary:
      "Guramüye vuelve para una iniciación, retiene a quienes rompen el ayuno y su muerte desata el primer gran incendio.",
    tags: ["Guramüye", "cataclismo", "fuego", "paxiúba"],
    mito: `Después de la formación de la humanidad, una de las primeras mujeres tuvo a Guramüye. El niño fue llevado a la Maloca del Universo. Cuando regresó ya había crecido y estaba relacionado con los Hombres Trueno. Su llegada abrió un tiempo de preparación para los jóvenes.

Los muchachos fueron reunidos para una iniciación y debían respetar un periodo de ayuno. Guramüye vigilaba que la preparación se cumpliera. Los primeros grupos siguieron la regla, pero un cuarto grupo decidió comer antes del momento indicado. Guramüye los descubrió y los retuvo dentro de su propio cuerpo.

Las familias esperaron a los jóvenes y comenzaron a preguntar qué había ocurrido. Supieron que Guramüye no los había dejado regresar. Sus padres buscaron una manera de recuperar a los muchachos. Prepararon una trampa para atraer a Guramüye y, cuando lo tuvieron cerca, le prendieron fuego.

La acción no quedó limitada al cuerpo del joven. El incendio se extendió y alcanzó el mundo entero. Así ocurrió el primero de los tres cataclismos que la publicación Kêhíripõrã reúne en una misma parte del libro. Después de la destrucción, la vida humana tuvo que ser renovada.

En el lugar donde ardieron los adornos de Guramüye brotó una palma de paxiúba. La planta quedó relacionada con las flautas sagradas que aparecen en el episodio siguiente. La muerte, por lo tanto, no cierra su presencia: transforma elementos de su cuerpo y de sus adornos en una materia que vuelve a entrar en la historia colectiva.

El relato no presenta a Guramüye como un monstruo simple ni a los padres como vencedores sin consecuencias. Los jóvenes habían roto un límite de su preparación; Guramüye respondió reteniéndolos; las familias, a su vez, provocaron una devastación que superó su objetivo. Cada acción amplificó la anterior.

La ficha heredada llamaba al personaje «Guelamún Yé» y lo convertía de manera general en nieto del trueno. Esta revisión conserva la URL para no romper el acceso, pero recupera la grafía Guramüye y su función precisa dentro del primer cataclismo y del origen de la paxiúba.`,
    historyCore:
      "La URL procede del corpus inicial y es una aproximación fonética defectuosa. La tercera edición de Antes o mundo não existia escribe Guramüye y sitúa el episodio antes de los cataclismos de Nügüye y Sëpïrõ.",
    versionCore:
      "La ficha sigue el orden Kêhíripõrã: regreso de Guramüye, ayuno, jóvenes retenidos, incendio y brote de paxiúba. No completa la iniciación con instrucciones procedentes de fuentes comparativas.",
    similarityCore:
      "Seres incendiados que originan plantas aparecen en otros relatos americanos. Aquí la cadena específica une a Guramüye, el cuarto grupo de jóvenes, el primer cataclismo y la paxiúba de las flautas.",
    leccion:
      "Romper un límite y responder sin medida puede extender el daño mucho más allá del conflicto.",
    sceneHorizontal:
      "Guramüye frente a una gran maloca mientras el fuego avanza y una palma de paxiúba brota detrás",
    sceneVertical:
      "los adornos de Guramüye se transforman en una palma alta después del incendio del mundo",
    researchNotes:
      "CORRECCIÓN DE IDENTIDAD: conserva el slug «guelamun-ye», recupera Guramüye y retira la genealogía genérica no sustentada.",
  }),
  myth({
    slug: "nuguye-y-sepiro-fuego-y-creciente",
    title: "Nügüye y Sëpïrõ: fuego y creciente",
    summary:
      "Nügüye provoca el segundo incendio y Sëpïrõ desborda las aguas; dos cataclismos completan la renovación del mundo.",
    tags: ["Nügüye", "Sëpïrõ", "cataclismos", "creciente"],
    mito: `Nügüye vivía como huérfano junto a una hermana menor en la casa de Abe, el Sol. La esposa de Abe maltrataba a la niña. Cuando la hermana murió, Nügüye quedó solo con su dolor y decidió responder contra los hijos de la casa.

El joven los condujo hasta un lugar cubierto de cañas. Allí los encerró y prendió fuego al cañaveral. Para escapar de las llamas, Nügüye tomó forma de gavilán. Abe descubrió lo ocurrido y persiguió al muchacho. Cuando logró alcanzarlo, también lo quemó.

El fuego volvió a desbordar el conflicto. Se extendió por el mundo y consumió cuanto encontraba. Fue el segundo cataclismo. Como había sucedido después del incendio de Guramüye, la humanidad no permaneció igual: la narración habla de una renovación posterior a la destrucción.

El tercer cataclismo comenzó con Sëpïrõ. Yebá Gõãmü le pidió que cerrara la Puerta de las Aguas, pero le señaló un límite. Sëpïrõ, presentado como un gran ser relacionado con cobra y ave, no se detuvo en la medida indicada. Las aguas subieron hasta cubrir la tierra.

La gente buscó refugio en las montañas. Yairó y su esposa lograron sobrevivir haciendo crecer el cerro en el que estaban mediante un canto. La página conserva la acción narrativa, pero no reproduce la fórmula. Mientras el agua aumentaba, otros puntos elevados quedaron ligados al sostenimiento del cielo.

Yebá Gõãmü tuvo que detener a Sëpïrõ. Cuando el ser murió, la Puerta de las Aguas pudo abrirse de nuevo y la creciente comenzó a bajar. Los sobrevivientes descendieron; después, la humanidad fue renovada. Cuatro montañas permanecieron como pilares del cielo y memoria del nivel que habían alcanzado las aguas.

Estos dos episodios se publican juntos porque la fuente los presenta después de Guramüye como parte de una secuencia de tres cataclismos. No se afirma que Nügüye cause la creciente ni que Sëpïrõ sea responsable del incendio. La unión editorial conserva sus conflictos separados y muestra la idea común: una acción que excede la medida puede alterar el mundo entero.`,
    historyCore:
      "La obra dedica secciones sucesivas a Guramüye, Nügüye y Sëpïrõ bajo el título de tres cataclismos. Esta adición reúne el segundo y el tercero sin borrar la autonomía de sus acciones.",
    versionCore:
      "La supervivencia de Yairó incluye un canto, pero la página no lo transcribe ni lo presenta como procedimiento. Tampoco transforma a Sëpïrõ en un animal zoológico único: conserva la asociación compuesta de la fuente.",
    similarityCore:
      "Incendios universales y crecientes aparecen en muchas cosmologías. Esta versión se identifica por Nügüye en la casa de Abe, el cañaveral, la Puerta de las Aguas, Sëpïrõ, Yairó y los cuatro pilares.",
    leccion:
      "Una fuerza necesaria se vuelve destructiva cuando ignora la medida y las consecuencias compartidas.",
    sceneHorizontal:
      "un gavilán cruza sobre un cañaveral en llamas mientras al otro lado crecen las aguas y montañas",
    sceneVertical:
      "Yairó y su esposa sobre una montaña que crece por encima de la gran creciente bajo cuatro pilares celestes",
    researchNotes:
      "UNIFICACIÓN EDITORIAL: reúne el segundo y tercer cataclismo publicados, manteniendo separados sus personajes y causalidades.",
  }),
  myth({
    slug: "yurupari",
    title: "El robo de las flautas sagradas",
    summary:
      "Las hijas de Abe encuentran primero las flautas surgidas de la paxiúba y alteran la distribución de tareas en la maloca.",
    tags: ["flautas sagradas", "Abe", "paxiúba", "maloca"],
    mito: `Después de la muerte de Guramüye, una palma de paxiúba creció donde habían ardido sus adornos. Abe vio la planta y comprendió que estaba relacionada con unas flautas. Encargó a uno de sus hijos que fuera a buscarlas, pero el muchacho se demoró y se quedó dormido.

Las hijas de Abe llegaron antes. Encontraron la paxiúba y entraron en contacto con las flautas. En el río, los peces les mostraron cómo producir sus sonidos. Las mujeres llevaron los instrumentos a la maloca y asumieron el espacio y las tareas que la narración asocia con su posesión.

La distribución cotidiana cambió. Mientras las mujeres tocaban y ocupaban la casa, los hombres quedaron realizando labores que antes correspondían a ellas. La fuente describe esa inversión como el centro del conflicto. No aparece un héroe único que entregue una ley completa: el episodio se mueve entre el hallazgo, el aprendizaje, el sonido y la disputa por quién conserva los instrumentos.

Los hombres buscaron fabricar otra flauta. Cuando lograron hacerla sonar, comenzó una confrontación. Las mujeres huyeron llevando los instrumentos, y los hombres las siguieron. Finalmente ellos recuperaron las flautas y restablecieron la distribución que el relato presenta para su propio tiempo.

La página no traduce ese desenlace como una regla universal sobre mujeres y hombres Desana de hoy. Publica una versión histórica de un clan y reconoce que trata relaciones de género, trabajo y conocimiento desde su marco narrativo. Tampoco describe los instrumentos con detalle ni reproduce prácticas ceremoniales.

El slug heredado «yurupari» se mantiene porque ya forma parte de la arquitectura pública del sitio. Sin embargo, la ficha anterior mezclaba el episodio con una historia panamazónica sobre un legislador llamado Yuruparí. En Antes o mundo não existia, el capítulo se titula alrededor del robo de las flautas sagradas y continúa directamente la transformación de Guramüye en paxiúba.

Corregir el título permite conservar el enlace sin hacer pasar una etiqueta regional por el nombre del protagonista. El relato queda situado en la cadena que la fuente realmente publica: incendio, paxiúba, flautas, aprendizaje y cambio de tareas en la maloca.`,
    historyCore:
      "La ficha heredada convertía «Yuruparí» en un héroe genérico y mezclaba versiones regionales. La revisión conserva la URL, pero sigue el capítulo Kêhíripõrã sobre las hijas de Abe y las flautas de paxiúba.",
    versionCore:
      "La secuencia forma parte de un conjunto ceremonial más amplio, pero esta página resume solo las acciones impresas. No reconstruye la fabricación, el uso ni la circulación restringida de los instrumentos.",
    similarityCore:
      "Flautas llamadas de Yuruparí aparecen en varios pueblos del Vaupés. La versión aquí atribuida se distingue por la continuidad con Guramüye, las hijas de Abe, la enseñanza de los peces y la inversión de tareas.",
    leccion:
      "Quien controla un conocimiento también transforma las tareas, relaciones y disputas de la vida colectiva.",
    sceneHorizontal:
      "las hijas de Abe encuentran flautas entre una paxiúba, peces y ondas musicales junto a la maloca",
    sceneVertical:
      "dos grupos intercambian posiciones alrededor de una maloca mientras el sonido sube como cintas de papel",
    researchNotes:
      "CORRECCIÓN DE ATRIBUCIÓN: conserva el slug histórico «yurupari», retira el héroe panamazónico y restituye el capítulo de las flautas.",
  }),
  myth({
    slug: "el-origen-de-la-mandioca-desana",
    title: "Baaribo y el origen de la mandioca",
    summary:
      "Baaribo guarda plantas alimenticias en su cuerpo, abre una chagra y entrega la mandioca a una nueva generación.",
    tags: ["Baaribo", "mandioca", "chagra", "alimentos"],
    mito: `Baaribo era conocido como aquel que poseía los alimentos. Dentro de su cuerpo guardaba plantas comestibles que todavía no crecían en las chagras de la gente. La historia comienza con conflictos familiares, pérdidas y una separación entre Baaribo y su hijo. Esta versión pública no reproduce escenas íntimas que no son necesarias para seguir el origen de los cultivos.

Después de alejarse, Baaribo llegó a otra familia. Allí mostró que podía hacer aparecer comida en cantidad. Lo que para otros exigía una provisión extensa surgía de su poder sobre los alimentos. Quienes lo recibieron comenzaron a comprender que él llevaba consigo más que una reserva: contenía la posibilidad de nuevas plantas.

Baaribo decidió preparar una chagra. Marcó un espacio circular en el bosque y realizó la quema desde el interior. Cuando el terreno quedó abierto, aparecieron variedades de mandioca y otros frutos. El cultivo no fue presentado como un hallazgo casual de una raíz silvestre, sino como el despliegue de alimentos que Baaribo ya guardaba.

La narración también explica dificultades del trabajo agrícola. Una instrucción no respetada quedó asociada con la aparición de la hierba en la chagra. Otra acción se relacionó con la cáscara que protege la mandioca. Así, aquello que exige limpiar, pelar y procesar no está separado del origen de la planta: forma parte de la misma historia sobre atención y desobediencia.

Con el tiempo, Baaribo volvió a relacionarse con el hijo del que se había apartado. Transmitió lo necesario para que la mandioca y los alimentos pudieran continuar entre la gente. La ficha conserva la devolución generacional, pero no publica fórmulas ni prácticas como instrucciones.

El capítulo entrelaza familia, cultivo y responsabilidad. No ofrece una imagen idealizada de abundancia sin trabajo: incluso cuando los alimentos llegan, hay conflictos, límites y tareas. La mandioca entra en el mundo social junto con conocimientos que deben ser recibidos y sostenidos.

La edición termina vinculando el relato con el amor hacia los hijos y con el daño causado por desear la relación de otra persona. Aquí esa formulación se presenta como cierre de esta versión Kêhíripõrã, no como una norma que describa por completo a todas las familias Desana.`,
    historyCore:
      "El capítulo «A origem da mandioca» ofrece un ciclo propio centrado en Baaribo. La adición lo separa de la creación general y elimina detalles íntimos cuya abreviación sensacionalista deformaría el relato.",
    versionCore:
      "La página conserva la chagra circular, la multiplicación de alimentos, la hierba, la cáscara y la transmisión al hijo. No convierte los pasajes ceremoniales asociados con la mandioca en una guía práctica.",
    similarityCore:
      "Plantas que salen del cuerpo de un ser aparecen en distintos pueblos amazónicos. Aquí la versión se reconoce por Baaribo, la chagra quemada desde dentro y las explicaciones de hierba y cáscara.",
    leccion:
      "Recibir alimento exige cuidar los vínculos y sostener el conocimiento que hace posible cultivarlo.",
    sceneHorizontal:
      "Baaribo abre una chagra circular donde brotan mandioca, frutos y hojas en capas planas de colores",
    sceneVertical:
      "una planta de mandioca asciende desde la tierra mientras Baaribo transmite alimentos a una nueva generación",
    researchNotes:
      "ADICIÓN DOCUMENTADA: adapta el capítulo de Baaribo sin explotar sus escenas íntimas ni publicar conocimiento operativo.",
  }),
  myth({
    slug: "gainpaya-y-el-origen-del-chontaduro",
    title: "Gãïpayã y el origen del chontaduro",
    summary:
      "Gãïpayã supera pruebas bajo el agua y lleva hasta la tierra una semilla de la palma que reunía cuatro chontaduros.",
    tags: ["Gãïpayã", "chontaduro", "pupunha", "semilla"],
    mito: `Gãïpayã, recordado como abuelo de los periquitos, formó una familia con una mujer relacionada con la gente de los peces y las cobras. A través de ella supo que bajo el agua existía otra maloca. Quiso conocerla y emprendió el viaje hacia la casa de Pïrõ.

La visita no fue una entrada sencilla. Gãïpayã tuvo que enfrentar pruebas preparadas por sus anfitriones. La narración muestra cómo sobrevivió usando atención y transformaciones, sin presentar la maloca subacuática como un paisaje vacío disponible para cualquiera.

Allí vio una palma de pupunha, el fruto que en Colombia suele llamarse chontaduro. Era un solo tronco capaz de producir cuatro variedades. Los frutos diferían, pero compartían el mismo origen. Gãïpayã entendió que esa planta todavía no existía cerca de su propia casa y quiso llevar una semilla.

La familia de su esposa no autorizaba sacarla. Para transportarla, Gãïpayã la ocultó dentro de su cuerpo. Cuando regresó a la tierra, recuperó la semilla y la plantó junto a la casa. De ella creció la primera palma disponible para su gente.

La nueva planta conservó la multiplicidad observada bajo el agua. Un mismo árbol daba los distintos tipos de fruto. Por eso el episodio no explica solamente de dónde vino una especie: explica cómo varias formas del chontaduro llegaron reunidas y pudieron propagarse en otro lugar.

El relato vincula agua, afinidad familiar, prueba y cultivo. La semilla cruza una frontera entre malocas y se establece gracias a una relación que también contiene tensión. Esta ficha no convierte la obtención en una simple hazaña de robo ni decide que uno de los lados sea dueño absoluto de todo alimento.

La fuente usa la palabra portuguesa pupunha. El título adopta chontaduro para el público colombiano y mantiene ambos nombres en la narración. Así evita inventar dos plantas distintas y permite rastrear el episodio en la edición original.`,
    historyCore:
      "El capítulo de Gãïpayã fue publicado como ciclo independiente y llegó a tener una adaptación audiovisual vinculada a la obra. La ficha vuelve al texto Kêhíripõrã y usa chontaduro como equivalencia colombiana de pupunha.",
    versionCore:
      "Se conservan la maloca subacuática, las pruebas, la palma de cuatro variedades y la semilla transportada. No se detallan transformaciones rituales ni se moraliza el cruce como una conquista.",
    similarityCore:
      "Semillas obtenidas en otro mundo son un motivo extendido. La versión Desana se distingue por Gãïpayã, su parentesco con periquitos, la casa de Pïrõ y una sola palma de cuatro frutos.",
    leccion:
      "Una semilla puede llevar diversidad entre mundos, pero su traslado nace de relaciones y riesgos.",
    sceneHorizontal:
      "Gãïpayã observa bajo el agua una palma de chontaduro que produce cuatro colores de fruto",
    sceneVertical:
      "la semilla llevada por Gãïpayã brota junto a la casa y se abre en cuatro racimos",
    researchNotes:
      "ADICIÓN DOCUMENTADA: mantiene pupunha en el cuerpo y explica la equivalencia colombiana chontaduro.",
  }),
  myth({
    slug: "agamahsapu-y-el-tiempo-del-umari",
    title: "Ãgãmahsãpu y el tiempo del umarí",
    summary:
      "Ãgãmahsãpu, padre de las aves, recorre casas de transformación y vincula sus cantos con el umarí y la abundancia venidera.",
    tags: ["Ãgãmahsãpu", "umarí", "aves", "calendario"],
    mito: `Ãgãmahsãpu es presentado como jefe y padre de las aves. Sus hijos no forman una multitud sin diferencias: sus voces aparecen en momentos distintos y ayudan a reconocer cambios en el tiempo. Cuando ciertas aves cantan, la gente puede relacionar sus señales con frutos, peces, lluvias y actividades del ciclo anual.

El padre de las aves emprendió un recorrido por casas de transformación. Viajó llevando umarí, un fruto amazónico que la edición portuguesa nombra umari. Su movimiento conectaba lugares y épocas, y no era solo una migración animal observada desde afuera.

En las malocas visitadas, Ãgãmahsãpu distribuía el fruto y participaba en intercambios. La narración enlaza esas acciones con conocimientos y ceremonias que luego llegaron a los Desana. Esta página cuenta la relación publicada, pero no transcribe cantos ni procedimientos.

Las aves continuaron anunciando tiempos. Sus llamados permiten pensar el año como una secuencia de presencias: un canto aparece, un fruto madura, una especie de pez se mueve y una tarea se vuelve oportuna. No existe una separación rígida entre un calendario del cielo, otro del bosque y otro del río.

La abundancia del año siguiente también queda vinculada al recorrido. Entregar y recibir el umarí no agota el fruto en el momento del consumo; participa en una relación que proyecta vida hacia el futuro. Por eso Ãgãmahsãpu no se reduce a un personaje que inventa un alimento ni a una figura decorativa rodeada de pájaros.

El libro continúa después con ciclos extensos de Diroá y Koáyea. La ficha no los resume dentro de Ãgãmahsãpu, aunque comparten la parte final de la publicación. Mantener ese límite evita hacer de muchos episodios una sola aventura lineal.

La página se concentra en la relación más clara y comunicable públicamente: el padre de las aves, el viaje entre casas, el umarí y las voces estacionales. Presenta el calendario como memoria de relaciones ecológicas sin convertirlo en una lista universal de fechas ni en una predicción válida fuera del territorio y de la versión documentada.`,
    historyCore:
      "Ãgãmahsãpu encabeza la parte final de Antes o mundo não existia y precede ciclos más extensos. Se añade como ficha propia por su relación documentada con aves, umarí y estacionalidad.",
    versionCore:
      "La revisión se detiene antes de fundir los episodios de Diroá y Koáyea. Conserva el recorrido de Ãgãmahsãpu como núcleo y no publica cantos ni calendarios operativos.",
    similarityCore:
      "Aves que anuncian estaciones aparecen en muchas tradiciones ecológicas. Esta versión se sostiene por el nombre Ãgãmahsãpu, las casas de transformación, el reparto de umarí y su lugar antes de Diroá.",
    leccion:
      "Escuchar a las aves permite reconocer que la abundancia depende de relaciones que atraviesan el tiempo.",
    sceneHorizontal:
      "Ãgãmahsãpu recorre varias casas junto al río mientras aves de colores anuncian frutos de umarí",
    sceneVertical:
      "un árbol de umarí une peces, lluvia y aves en un calendario circular de capas planas",
    researchNotes:
      "ADICIÓN DOCUMENTADA: se publica el núcleo de Ãgãmahsãpu y se dejan fuera los ciclos posteriores que requieren tratamiento propio.",
  }),
];

export default desanaDefinitions;
