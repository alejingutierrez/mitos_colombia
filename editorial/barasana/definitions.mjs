const narrativeBoundary = `Esta versión editorial parafrasea únicamente acciones publicadas y conserva los nombres que permiten rastrearlas. No añade diálogos, vestuario, fórmulas de curación, ubicaciones precisas ni explicaciones espirituales ausentes. Cuando la fuente identifica una interpretación del investigador, la ficha no la presenta como doctrina total del pueblo Barasana.`;

function myth({ title, summary, tags, mito, ...definition }) {
  const seoTitle = `${title} | Barasana`;
  const focusKeywords = [title, "relatos Barasana", ...tags.slice(0, 3)];
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

const archivalContext = [
  "communityBook",
  "milkRiver",
  "torres",
  "pleiades",
  "minCultura",
  "planVida",
];

const communityContext = [
  "palm",
  "milkRiver",
  "torres",
  "pleiades",
  "minCultura",
  "planVida",
];

export const barasanaDefinitions = [
  myth({
    slug: "la-luna",
    title: "Muyhu, Méneri-Ya y Warimi",
    summary:
      "La marca de Méneri-Ya revela a Luna; su hijo Warimi nace entre los jaguares y transforma la pérdida en un largo ciclo de regreso.",
    tags: ["Muyhu", "Méneri-Ya", "Warimi", "Luna"],
    narrativeSource: "palm",
    contextSources: archivalContext,
    mito: `Luna, llamado Abe en la transcripción inglesa y Muyhu en otra tradición editorial, visitaba de noche la hamaca de su hermana menor Méneri-Ya. Ella ignoraba quién llegaba y preparó pintura negra para reconocerlo. Cuando volvió, marcó su rostro. Al amanecer Luna vio la señal, intentó quitarla y enfermó. Murió y su cuerpo se deshizo junto al río; más tarde la Gente del Cielo reunió sus restos y lo devolvió a la vida. El relato enlaza esa muerte y ese regreso con la periodicidad lunar.

Méneri-Ya ya estaba embarazada. Su padre la envió hacia un árbol de caimo; una rama la impulsó al cielo, donde las abejas rodearon su cabeza. Umu, su ave compañera, vio el reflejo de la mujer en una vasija de agua, voló hasta ella y regresó por el canasto donde guardaba hilo. Con ese hilo, Méneri-Ya descendió de nuevo a tierra y emprendió un camino en busca de su familia.

El recorrido la llevó a la casa de los Jaguares del Trueno. La madre de los jaguares intentó esconderla y le advirtió que no se mostrara durante la danza. Méneri-Ya desoyó el aviso, bajó y participó. Al amanecer los jaguares la mataron. La anciana pidió sus entrañas para lavarlas por separado; al abrir el vientre encontró un niño, Warimi, que saltó al agua y escapó de quienes quisieron atraparlo.

Warimi cambiaba de forma y creció con rapidez. Meni Chamán lo recibió en su casa, pero el joven insistió en volver donde los jaguares para saber qué había ocurrido con su madre. Allí escondió su identidad bajo el nombre de Amargo. Preparó peces a partir de fragmentos de un tiesto, armó un puente y logró que los jaguares lo cruzaran durante una danza. Cuando soltó las amarras, cayeron al río.

El ciclo continúa con viajes, transformaciones y la persecución de Rame, el águila que comía gente. Warimi consigue vencerla después de varios intentos. Esta página no reduce ese conjunto extenso a una aventura heroica: conserva como centro la marca de Luna, el desplazamiento de Méneri-Ya, el nacimiento acuático de Warimi y su regreso frente a los responsables de la muerte de su madre.`,
    historyCore:
      "La ficha heredada mezclaba las grafías Muyhu y Méneri-Ya con episodios del M.4 «Warimi» de Hugh-Jones. La revisión conserva la URL, cambia el título visible y elimina la invención de dos hermanas, la supuesta misión divina de los Adyába y el cierre genérico del viaje del héroe.",
    versionCore:
      "Hugh-Jones registra tres variantes de la concepción de Warimi y analiza relaciones con Luna, las Pléyades y otros ciclos del Vaupés. Aquí se sigue principalmente M.4.A y M.4.D-H; no se funden las tres concepciones como si fueran una secuencia única.",
    similarityCore:
      "La pintura que revela a un visitante nocturno recuerda otros relatos amazónicos, pero la versión se identifica por Méneri-Ya, las abejas, Umu, los Jaguares del Trueno y el nacimiento acuático de Warimi. La comparación antigua con Orfeo y Eurídice no está sostenida y se retira.",
    leccion:
      "Una marca revela lo oculto, pero sus consecuencias transforman a generaciones enteras.",
    sceneHorizontal:
      "Luna con el rostro marcado se refleja en el río mientras Méneri-Ya desciende del cielo sostenida por un hilo",
    sceneVertical:
      "Warimi surge del agua junto a mariposas, con la luna marcada y la silueta de Umu en el cielo",
    researchNotes:
      "CORRECCIÓN INTEGRAL: se conserva el slug histórico y se identifica el contenido como ciclo de Warimi, no como una fábula genérica de Luna.",
  }),
  myth({
    slug: "sol-luna-dia-y-noche",
    title: "Sol y Luna: día y noche",
    summary:
      "Sol y Luna disputan el día; el brillo, los eclipses y las estaciones quedan ordenados cuando cada hermano ocupa su camino.",
    tags: ["Sol", "Luna", "día", "noche"],
    narrativeSource: "palm",
    contextSources: archivalContext,
    mito: `Sol y Luna eran hermanos. Luna, el mayor, anunció que sería dueño del día y que su calor secaría los vientres de las mujeres. Sol, el menor, pensó en la necesidad del agua, la comida y el cambio de las estaciones. Rechazó la propuesta, tomó para sí el día y dejó la noche a su hermano. Después se apartó para evitar que la disputa continuara.

La luz de Luna resultó débil frente al resplandor de Sol. En ciertos momentos su cuerpo se vuelve rojo y parece morir; la narración relaciona esa transformación con los eclipses y con la luna roja. Cuando desciende, llega a una casa abandonada. La corona luminosa que lleva llena el interior de claridad, pero al quitársela todo cambia. Luna adopta la forma de un armadillo y busca huesos bajo el suelo.

Un hombre que permanecía escondido en lo alto de la casa observó la escena. Cuando Luna dejó la corona en el poste central, el hombre la cubrió con una vasija y la casa quedó oscura. Luna tanteó hasta descubrir una rendija de luz, levantó la vasija, recuperó la corona y regresó al cielo.

El texto no termina en una explicación simple de los astros. Relaciona la aparente muerte de Luna con acciones comunitarias de protección y con la lectura de señales sobre vida y muerte. Esta edición no reproduce esas acciones como instrucciones. Conserva la idea más amplia: el cielo es comparado con una gran vasija alrededor de la cual viaja Sol; cuando pasa alto llega el verano y cuando su recorrido baja se reconoce la estación lluviosa.

Al principio, día y verano ocupaban un lado de la pareja, mientras noche y lluvia ocupaban el otro. La decisión entre los hermanos hace posible una alternancia. Sol no vence para eliminar a Luna, ni Luna desaparece para siempre. Cada uno conserva una luz, un tiempo y un movimiento, y el mundo puede distinguir claridad, oscuridad, estación seca y estación de lluvia.`,
    historyCore:
      "Stephen Hugh-Jones publica esta narración como M.3, inmediatamente antes del ciclo M.4 de Warimi. El orden de la fuente prueba que no es una versión abreviada de la ficha heredada, aunque ambas incluyan a Luna.",
    versionCore:
      "La misma monografía contrasta este relato con el incesto del Sol registrado entre los Desana y advierte que los Barasana no cuentan esa secuencia del mismo modo. La revisión evita trasladar al corpus Barasana una versión vecina por simple semejanza.",
    similarityCore:
      "La oposición entre hermanos celestes aparece en diferentes pueblos. Aquí se reconoce por la disputa sobre quién poseerá el día, la luz tenue de Luna, la corona escondida bajo una vasija y la relación explícita entre la altura de Sol y las estaciones.",
    leccion:
      "El tiempo habitable nace cuando ninguna fuerza ocupa por sí sola todos los ritmos del mundo.",
    sceneHorizontal:
      "Sol y Luna hermanos se separan sobre un río que cambia entre estación seca y lluviosa",
    sceneVertical:
      "la corona luminosa de Luna bajo una vasija dentro de una maloca, con una rendija que vuelve a encender la noche",
    researchNotes:
      "ADICIÓN ETNOGRÁFICA: M.3 «Sun and Moon; day and night», separado por la fuente del M.4 «Warimi».",
  }),
  myth({
    slug: "kahe-sawari-kata-yai-y-el-surgimiento-barasano",
    title: "Kahe Sawari y Kata Yai",
    summary:
      "Kahe Sawari atraviesa mundos y Kata Yai completa su recorrido hasta el surgimiento, el territorio y la lengua de los Barasano.",
    tags: ["Kahe Sawari", "Kata Yai", "origen", "territorio"],
    narrativeSource: "communityBook",
    contextSources: communityContext,
    mito: `En el origen navegaba una canoa con forma de anaconda. El Sol y los primeros seres buscaban una tierra donde pudieran cultivar. Del Gran Chamán Anaconda nacieron Kahe Sawari y Sawa Sawa. El Sol quedó como dueño del tiempo y la luz; los dos hermanos menores continuaron organizando lugares, épocas y normas.

La rivalidad surgió cuando la esposa de Kahe Sawari se unió a Sawa Sawa. El hermano menor preparó una trampa y dejó caer a Kahe Sawari por una abertura hasta el mundo inferior. Allí, convertido en un copo de algodón, el viajero alcanzó un árbol de guama junto al río. Vio pasar la embarcación de fuego del Sol y pidió subir. Para demostrar que eran parientes, ambos enfrentaron el fuego del otro. Kahe Sawari se transformó en araña para resistir y, cuando llegó su turno, el Sol reconoció su poder.

Kahe Sawari volvió a la tierra, sanó a un ave atrapada y regresó a su maloca. Sawa Sawa intentó perderlo de nuevo en un árbol de guacamayas. Desde el hueco, Kahe Sawari observó los Cerros-Estantillos y llamó a Anaconda Celeste, que extendió su cuerpo para rescatarlo. El camino del rescate quedó ligado a conocimientos de protección de la gente.

Después de nuevos engaños, Kahe Sawari encendió una gran quema. Sawa Sawa y la mujer se transformaron en guacamayas y luego en elementos vinculados a la transmisión entre generaciones. Kahe Sawari tampoco desapareció sin dejar forma: sus huesos y su cuerpo quedaron asociados con los elementos que conservan memoria y cuidado.

Mientras esto ocurría, Kata Yai, hijo de Kahe Sawari, recorría los Cerros-Estantillos. Al regresar encontró los restos de su padre y asumió la tarea que había quedado abierta. Reunió a los grupos, recorrió el territorio e hizo surgir la forma propia atribuida a los Barasano. En Yebai Bota transformó sus espíritus en personas; recibieron lengua, territorio y elementos para continuar su vida.

El narrador cierra con una afirmación decisiva: esta es la historia del surgimiento Barasano y no otra. La ficha mantiene ese cierre como límite frente a resúmenes externos que intenten reemplazarlo.`,
    historyCore:
      "Ricardo Marín, ~kubu Barasano de la comunidad de San Miguel, narra el capítulo «Cuenco Sagrado de Cera de Abejas de la Tierra». Tarsicio Vanegas y Roberto Marín figuran como traductores. La autoría comunitaria guía esta página.",
    versionCore:
      "El capítulo reúne varias secuencias y reconoce que la historia avanza, vuelve y pasa por muchos lugares. La edición no endereza esa forma hasta convertirla en una cronología lineal ni publica los itinerarios como coordenadas visitables.",
    similarityCore:
      "Viajes de anacondas y canoas ancestrales recorren el Vaupés. En esta versión, Kahe Sawari, Sawa Sawa, la nave de fuego del Sol, el Hueco de Guacamaya, Kata Yai y el surgimiento de los Barasano forman una cadena específica.",
    leccion:
      "Recibir una historia también obliga a cuidar la tarea territorial que dejó la generación anterior.",
    sceneHorizontal:
      "Kahe Sawari sobre una anaconda celeste que une un árbol de guacamayas con varios cerros del horizonte",
    sceneVertical:
      "Kata Yai encuentra los restos de su padre y abre un camino hacia la gente Barasano junto al río",
    researchNotes:
      "FUENTE COMUNITARIA DIRECTA: narración de Ricardo Marín, ~kubu Barasano, comunidad de San Miguel.",
  }),
  myth({
    slug: "la-cuerda-de-leche-y-la-anaconda-yeba",
    title: "La Cuerda de Leche y la Anaconda Yeba",
    summary:
      "Los ríos forman una Cuerda de Leche por la que las anacondas ancestrales reciben conocimiento y llegan al territorio del Pirá Paraná.",
    tags: ["Anaconda Yeba", "Río de Leche", "Pirá Paraná", "surgimiento"],
    narrativeSource: "communityBook",
    contextSources: communityContext,
    mito: `El río Amazonas es nombrado Río de Leche y el Pirá Paraná, Río de Aguas de Yuruparí. Juntos forman la Cuerda de Leche de la Evolución: una ruta que une la Puerta de las Aguas, en la desembocadura del Amazonas, con las cabeceras del Pirá Paraná.

Desde la primera Maloca de Origen parten las anacondas ancestrales. No son un solo animal indiferenciado. La publicación distingue hijos de Anaconda Celeste, Anaconda Remedio, Anaconda Yeba y Anaconda de Agua. En el recorrido reciben conocimientos, semillas, ornamentos y elementos vinculados a la palabra, la danza y el cuidado. Esta ficha no reproduce sus usos ceremoniales; conserva la imagen pública de una humanidad que viaja y se transforma por el sistema de ríos.

Las anacondas se reúnen en tres grandes lugares que el pensamiento tradicional relaciona como malocas de un mismo proceso. En la primera etapa todavía cargan las voces y formas de sus orígenes. En la segunda dejan la forma de anaconda y se vuelven hombres. En la tercera, ya con forma humana, completan conocimientos y se separan para seguir caminos propios.

El viaje no termina cuando aparece una humanidad genérica. Cada grupo continúa hasta el territorio que le corresponde. El mapa publicado identifica la Anaconda Yeba con la trayectoria Barasana e Itana. Al llegar a Waiya Goheri, en las cabeceras del Pirá Paraná, las anacondas culminan la tarea de hacer amanecer a la gente. Allí cada pueblo surge con su lengua y se establece en su territorio.

La metáfora de la cuerda no convierte los ríos en simples carreteras. Leche, agua, maloca, cerros y anacondas componen un origen que relaciona movimiento, transformación y pertenencia. Los narradores explican que los conocimientos siguen contándose en sus formas propias y que cada pueblo conserva una responsabilidad distinta dentro del territorio compartido.

Por eso la Anaconda Yeba no se presenta aquí como mascota, monstruo ni creadora solitaria. Es parte de una red de ancestros y caminos. Su recorrido permite situar el surgimiento Barasana dentro del gran sistema del Pirá Paraná sin borrar las diferencias entre los pueblos que lo habitan.`,
    historyCore:
      "Uriel Betancour y Reynel Ortega, ambos identificados como sabedores Barasano, narran «La Cuerda de Leche de la Evolución» desde la comunidad ~Boawi. Daniel León, Tatuyo, figura como traductor.",
    versionCore:
      "La ficha articula ese capítulo con el mapa y la introducción inmediatamente anterior sobre el recorrido de las anacondas. No asigna a los Barasana trayectorias que el libro identifica con Anaconda Celeste, Remedio o Agua.",
    similarityCore:
      "La imagen regional de una anaconda-canoa puede parecer una sola historia repetida. Aquí la atribución se sostiene en el Río de Leche, las tres etapas de transformación, Waiya Goheri y la identificación publicada de Anaconda Yeba con Barasana e Itana.",
    leccion:
      "Un origen compartido no borra las lenguas, los caminos ni las responsabilidades propias de cada pueblo.",
    sceneHorizontal:
      "una anaconda Yeba navega como cinta de papel por el Amazonas y entra al Pirá Paraná entre tres malocas luminosas",
    sceneVertical:
      "la anaconda deja su forma y una fila de personas asciende hacia las cabeceras del Pirá bajo un amanecer",
    researchNotes:
      "FUENTE COMUNITARIA DIRECTA: Uriel Betancour y Reynel Ortega, etnia Barasano; el mapa identifica Anaconda Yeba con Barasana e Itana.",
  }),
  myth({
    slug: "los-cerros-estantillos-y-la-cera-de-abejas",
    title: "Cerros-Estantillos y Cera de Abejas",
    summary:
      "Los cerros son estantillos de una gran maloca territorial: guardan memoria, cera y relaciones para cuidar la vida en cada época.",
    tags: ["Cerros-Estantillos", "cera de abejas", "territorio", "maloca"],
    narrativeSource: "communityBook",
    contextSources: communityContext,
    mito: `Los Cerros-Estantillos no son montañas aisladas. La narración los presenta como soportes de una gran arquitectura territorial. Por ellos pasaron las anacondas durante el surgimiento de la humanidad y allí recibieron capacidades vinculadas al cuidado del mundo.

La Cera de Abejas acompaña esa geografía. Algunos cerros son nombrados como cúmulos, murallas o recipientes de cera donde surgió la gente. El sabedor recorre espiritualmente ese conjunto cuando piensa en los cambios de las épocas y en los peligros que llegan con nubes, relámpagos, alimentos o enfermedades. La página conserva esa relación sin copiar fórmulas de prevención ni convertir los lugares en un itinerario turístico.

El relato enumera cerros de distintas partes del gran territorio. Chiribiquete aparece como Cerro Campana y se relaciona con el crecimiento de la yuca y con la vida de mujeres, niños y chagras. Otro lugar, en el gran río, se recuerda como maloca donde emergieron pueblos y formas propias. El Cerro de Leche Pura se conecta con la vida de los grupos y con el origen de la cera usada para el cuidado de la maloca.

También aparecen el Cerro Estantillo Trueno, el Hueco de Guacamaya en Araracuara y otros soportes del oriente y el occidente. No todos pertenecen a la misma gente ni cumplen la misma relación. El propio texto diferencia pueblos, ancestros y responsabilidades, de modo que el mapa no es una colección de monumentos disponibles para cualquiera.

Vistos juntos, los cerros sostienen cielo, territorio y memoria como los postes de una casa. Su fuerza no se explica por una materia mágica separada del mundo cotidiano. Está relacionada con el paso de las anacondas, el surgimiento de la gente, la producción de alimentos, la salud y el calendario.

La narración fue publicada por decisión de la investigación indígena y puede leerse como una enseñanza sobre relación. Sin embargo, no entrega todo el conocimiento que permite a los sabedores actuar. La ficha respeta esa diferencia: cuenta que los estantillos conectan épocas y vida, pero no pretende enseñar a operar esa red.`,
    historyCore:
      "Hee Gu Reynel Ortega, Barasano de Puerto Ortega, figura como narrador de «Los Cerros-Estantillos de Yuruparí y Cera de Abejas donde surgió la Gente». Daniel León, Tatuyo, aparece como traductor.",
    versionCore:
      "La publicación combina prosa, listas y cartografía. Esta página no transforma la lista en una aventura ficticia: mantiene la forma de explicación territorial y omite coordenadas precisas o procedimientos ceremoniales.",
    similarityCore:
      "Montañas entendidas como pilares cósmicos existen en otros sistemas. La versión Barasano se documenta mediante la relación entre Hee Botari, cera de abejas, las rutas de anacondas y cerros concretos diferenciados por pueblo y función.",
    leccion:
      "Cuidar un territorio exige comprender las relaciones que lo sostienen, no solo ocupar su superficie.",
    sceneHorizontal:
      "varios cerros planos sostienen un cielo como postes de una gran maloca mientras una anaconda recorre el río",
    sceneVertical:
      "un cuenco de cera de abejas se alinea con un cerro, una chagra y nubes de lluvia en capas de papel",
    researchNotes:
      "FUENTE COMUNITARIA DIRECTA: Reynel Ortega, Hee Gu Barasano, comunidad de Puerto Ortega.",
  }),
  myth({
    slug: "el-origen-de-la-gente-de-los-frutales-silvestres",
    title: "La Gente de los Frutales Silvestres",
    summary:
      "En Badi Serero, Kata Bahi y sus compañeros atan, distribuyen y ordenan los frutos que alimentarán a las generaciones.",
    tags: ["frutales silvestres", "Kata Bahi", "Badi Serero", "calendario"],
    narrativeSource: "communityBook",
    contextSources: communityContext,
    mito: `En Badi Serero estaba la Casa de Origen de los Frutales Silvestres. Los Jaguares de Yuruparí pensaron que la gente necesitaría frutos y señalaron ese lugar como centro desde el cual se dispersarían por el territorio. La palma de almidón de achiote quedó como cuna de la Gente de los Frutales.

Kata Bahi, una pava, recibió un territorio y una responsabilidad sobre los frutos. La adornaron para la tarea. También crearon al Torcedor de Cumare, encargado de preparar fibras con las que los racimos pudieran permanecer unidos a los árboles. Con él llegó el Diablo de Breo. Los tres se reunieron con los Jaguares en la maloca de origen.

Torcedor de Cumare clavó las fibras y el grupo comenzó a trenzarlas. Usaron el color del achiote para marcarlas y salieron a amarrar frutos. Mientras trabajaban, relacionaron semillas, dientes, alturas de árboles, animales y enfermedades. La narración no separa una botánica material de una dimensión espiritual: crecer, alimentar y producir riesgos forman parte del mismo orden.

Cada especie encontró un lugar. La palma de ibacaba fue enviada hacia el oriente. El asaí quedó asociado con sabanas y orillas de ríos. La palma de caraná fue situada en otras sabanas, junto con relaciones que explican los mojojoyes que viven en ella. Los árboles de siringa, castaña y otros frutos recibieron alturas y características diferentes.

El trabajo continuó hasta distribuir racimos y palmas por el territorio. La danta llegó con elementos propios y se vinculó con otra danza. Las primeras cosechas exigían atención: no bastaba con tomar lo que aparecía. La producción debía renovarse para que los frutales no se agotaran y para que animales y gente siguieran encontrando alimento.

Esta historia no afirma que una sola figura plantó la selva. Presenta una labor colectiva de amarrar, colorear, distribuir y relacionar. Kata Bahi, Torcedor de Cumare, Diablo de Breo y los Jaguares convierten el bosque en una red de temporadas, alimentos, animales y cuidados destinada a las generaciones que todavía no habían llegado.`,
    historyCore:
      "Baya Jaime Giraldo, Barasano de San Miguel, narra «Surgimiento de la Gente de los Frutales Silvestres». Tarcisio Vanegas, Roberto Marín, Elmer Giraldo y Rubén Darío Ramírez figuran en la traducción.",
    versionCore:
      "El relato ocupa la sección del calendario ecológico dedicada a la época de frutas silvestres. La ficha conserva sus personajes y distribución sin presentar cada asociación como dato botánico verificable fuera de su marco narrativo.",
    similarityCore:
      "Historias sobre el origen de frutos abundan en la Amazonía. Esta versión se distingue por Badi Serero, Kata Bahi, Torcedor de Cumare, Diablo de Breo y la labor de amarrar y distribuir racimos en el calendario.",
    leccion:
      "La abundancia perdura cuando distribuir alimento incluye responsabilidades con quienes todavía no han nacido.",
    sceneHorizontal:
      "Kata Bahi, el Torcedor de Cumare y figuras jaguar atan racimos de frutos a palmas en una selva luminosa",
    sceneVertical:
      "palmas de ibacaba, asaí y caraná ascienden en capas mientras aves, danta y frutos forman un calendario circular",
    researchNotes:
      "FUENTE COMUNITARIA DIRECTA: Jaime Giraldo, Baya Barasano, comunidad de San Miguel; traductores Barasano identificados.",
  }),
];

export default barasanaDefinitions;
