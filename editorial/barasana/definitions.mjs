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

// Reparto por ficha. Primero las obras que esa ficha usó de verdad —las tres
// primeras salen como fuentes clave—, después el contexto verificado que la
// enmarca. Antes las seis compartían dos listas en bloque y ninguna de las dos
// decía qué obra sostenía cada relato.

export const barasanaDefinitions = [
  myth({
    slug: "la-luna",
    sourceKeys: [
      "communityBook",
      "ilv1974",
      "palm",
      "cayon2013",
      "minCultura",
      // Torres Laborde va último a propósito: es la obra a la que la ficha
      // heredada atribuía Muyhu y Méneri-Ya sin que nadie lo corroborara, y
      // su enlace es una ficha de catálogo sin texto. No puede ser clave.
      "torres",
    ],
    title: "Muyhu, Méneri-Ya y Warimi",
    summary:
      "La marca de Méneri-Ya revela a Luna; su hijo Warimi nace entre los jaguares y transforma la pérdida en un largo ciclo de regreso.",
    tags: ["Muyhu", "Méneri-Ya", "Warimi", "Luna"],
    mito: `Luna visitaba de noche la hamaca de su hermana menor. Ella no sabía quién llegaba, y una tarde preparó pintura negra y la dejó lista junto a la hamaca. Cuando el visitante volvió, le marcó el rostro. Al amanecer Luna vio la señal, trató de quitársela y enfermó. Murió, y su cuerpo se deshizo junto al río. Más tarde la Gente del Cielo reunió sus restos y lo devolvió a la vida. Desde entonces, muere y regresa cada mes.

Méneri-Ya ya estaba embarazada. Su padre la mandó hacia un árbol de caimo, y una rama la impulsó hacia arriba hasta el cielo, donde las abejas le rodearon la cabeza. Umu, el ave que la acompañaba, vio el reflejo de la mujer en una vasija de agua, voló hasta ella y volvió por el canasto donde guardaba el hilo. Con ese hilo, Méneri-Ya bajó otra vez a la tierra y se echó a andar buscando a su familia.

El camino la llevó a la casa de los Jaguares del Trueno. La madre de los jaguares la escondió y le advirtió que no se mostrara mientras durara la danza. Méneri-Ya desoyó el aviso, bajó y participó. Al amanecer los jaguares la mataron. La anciana pidió que le dejaran las entrañas para lavarlas aparte, y al abrir el vientre encontró un niño, Warimi, que saltó al agua y escapó de quienes quisieron atraparlo.

Warimi cambiaba de forma y creció deprisa. Meni Chamán lo recibió en su casa, pero el muchacho insistió en volver donde los jaguares para saber qué había pasado con su madre. Allí escondió su nombre y se hizo llamar Amargo. Hizo peces con fragmentos de un tiesto, armó un puente y logró que los jaguares lo cruzaran durante una danza; cuando soltó las amarras, cayeron al río.

Después vinieron más viajes y más transformaciones, y por último la persecución de Rame, el águila que comía gente, a la que Warimi venció tras varios intentos. Quedaron atrás una marca hecha a oscuras, una mujer que subió y bajó del cielo colgada de un hilo, y un niño nacido en el agua que volvió años más tarde a pararse frente a los responsables de la muerte de su madre.`,
    historia: `Este ciclo corresponde a lo que Stephen Hugh-Jones publicó como M.4, «Warimi», a partir del trabajo de campo que hizo en comunidades del Pirá Paraná entre 1968 y 1970. La monografía lo ordena como un conjunto largo, con episodios encadenados que van de la muerte y el regreso de Luna hasta la caza del águila, y no como un cuento cerrado.

Del hijo de Luna sí hay narración acreditada en el Pirá Paraná, y conviene decir de quién. En Hee Yaia Godo ~Bakari, el libro que la ACAIPI y la Fundación Gaia Amazonas publicaron en 2015, se llama Wari~bi y aparece en dos capítulos narrados por el Hee Gu Ignacio Valencia, de etnia macuna, uno desde las comunidades de Santa Isabel y Puerto Inaya y otro desde Santa Isabel, con traducción de Tarsicio Vanegas, itano. Valencia abre diciendo que esa historia se la narró el propio Wari~bi, al que sus abuelos hicieron bajar durante una toma de yagé para que él pudiera preguntarle. Es una atribución macuna, no barasana, y así queda dicha.

Del nombre Meni hay una huella en lengua barasana. En 1974, el Instituto Lingüístico de Verano y el Ministerio de Gobierno publicaron «La historia de Rijocamacü», narrada por Antonio Barasana y transcrita y traducida por Richard D. y Connie Smith. Allí, las hijas de Mení bajan a bañarse y persiguen a un niño huérfano que se les escapa a una gruta sumergida y que se sienta a pintar mariposas. El texto se declara «barasano del sur», que puede no ser el mismo grupo, y de él sólo hay unas pocas páginas a mano.`,
    versiones: `La versión acreditada del hijo de Luna en el Pirá Paraná corre por otro camino. En el libro de la ACAIPI, Wari~bi vive solo en Tabotiro, hace bajar a las Garzas Grandes que pasan de noche, las hospeda y les hace una curación porque se les están desapareciendo compañeras en los rituales de la Mujer Chamán, donde vive el Jaguar de las Trampas. Ellas le prestan un disfraz de plumas, él aprende a volar y entra al dabucurí; desactiva la trampa de la puerta, sobrevive a la prueba del casabe que no se completa y al humo de ají, y al final se queda a vivir con la Mujer Chamán como padrastro de las anacondas que van a nacer. Comparte con este ciclo un hijo de Luna, una identidad escondida, una danza peligrosa y una prueba superada; no tiene madre muerta por jaguares ni nacimiento en el agua.

En el mismo libro, Luna aparece además en una genealogía distinta. El sabedor tatuyo Quintino Rodríguez, de la comunidad de Jena, cuenta que en el principio sólo existía la Anaconda Yuruparí y que sus hijos eran el Sol, la Mujer Chamán, Kahe Sawari y la Luna. Allí Luna no es un hermano incestuoso sino uno de cuatro hermanos creadores.

De la concepción de Warimi, la monografía de 1979 registra tres variantes y las analiza junto a Luna y las Pléyades; esta página sigue una sola línea y no las funde.`,
    similitudes: `La huella más cercana en lengua barasana está en el texto de 1974 sobre Rijocamacü. Un niño huérfano con poder de transformación, perseguido por las hijas de Mení, que se escapa una y otra vez y se entretiene pintando mariposas mientras el Padre Tigre se come las transparentes, hasta que las hermanas entierran a la menor en un banco de arena para atraparlo. Es otro nombre y otro desenlace, pero comparte con este ciclo la figura del niño solo que nadie logra agarrar y la casa de Mení como lugar donde va a parar.

La marca que revela al visitante nocturno es un motivo extendido en la Amazonía y no basta para identificar una versión. Lo que identifica a esta es la cadena completa: la enfermedad y el regreso mensual de Luna, el árbol de caimo que impulsa a la mujer hacia el cielo, las abejas alrededor de su cabeza, el ave que la descubre en el reflejo de una vasija, el hilo con el que baja, los Jaguares del Trueno, el nacimiento acuático y el puente cortado durante una danza.

Fuera de ese conjunto, la comparación con Orfeo y Eurídice no la sostiene ninguna de las obras citadas aquí.`,
    leccion:
      "Una marca hecha a oscuras puede cambiar el destino de tres generaciones seguidas.",
    sceneHorizontal:
      "Luna con el rostro marcado se refleja en el río mientras Méneri-Ya desciende del cielo sostenida por un hilo",
    sceneVertical:
      "Warimi surge del agua junto a mariposas, con la luna marcada y la silueta de Umu en el cielo",
    researchNotes:
      "CORRECCIÓN INTEGRAL: se conserva el slug histórico y se identifica el contenido como ciclo de Warimi, no como una fábula genérica de Luna.",
  }),
  myth({
    slug: "sol-luna-dia-y-noche",
    sourceKeys: [
      "palm",
      "communityBook",
      "pleiades",
      "minCultura",
      "planVida",
    ],
    title: "Sol y Luna: día y noche",
    summary:
      "Sol y Luna disputan el día; el brillo, los eclipses y las estaciones quedan ordenados cuando cada hermano ocupa su camino.",
    tags: ["Sol", "Luna", "día", "noche"],
    mito: `Sol y Luna eran hermanos. Luna, el mayor, anunció que sería dueño del día y que su calor secaría los vientres de las mujeres. Sol, el menor, pensó en el agua, en la comida y en el cambio de las estaciones, rechazó la propuesta, tomó el día para sí y le dejó la noche a su hermano. Después se apartó para que la disputa no siguiera.

La luz de Luna resultó débil frente al resplandor de Sol. En ciertos momentos su cuerpo se pone rojo y parece morir, y a eso se atribuyen los eclipses y la luna roja. Cuando baja, llega a una casa abandonada. La corona luminosa que lleva puesta llena el interior de claridad, pero al quitársela todo cambia: Luna toma forma de armadillo y se pone a escarbar buscando huesos debajo del piso.

Un hombre que estaba escondido en lo alto de la casa vio la escena. Cuando Luna dejó la corona en el poste central, el hombre la tapó con una vasija y la casa quedó a oscuras. Luna anduvo a tientas hasta que encontró una rendija de luz, levantó la vasija, recuperó la corona y volvió al cielo.

La aparente muerte de Luna quedó ligada a lo que la gente hace para protegerse y a la lectura de señales sobre la vida y la muerte. Y el cielo quedó como una gran vasija alrededor de la cual viaja Sol: cuando pasa alto llega el verano, y cuando su recorrido baja se reconoce la estación de lluvias.

Al principio el día y el verano estaban de un lado de la pareja y la noche y la lluvia del otro. La decisión entre los hermanos hace posible la alternancia. Sol no vence para eliminar a Luna ni Luna desaparece para siempre: cada uno conserva una luz, un tiempo y un movimiento, y el mundo puede distinguir claridad, oscuridad, estación seca y estación de lluvia.`,
    historia: `Stephen Hugh-Jones publicó esta narración como M.3, inmediatamente antes del ciclo M.4 de Warimi, a partir del trabajo de campo que hizo en comunidades del Pirá Paraná entre 1968 y 1970. El orden de la fuente importa: M.3 y M.4 son conjuntos distintos, y compartir personajes celestes no los vuelve un solo relato.

De cómo se separaron el día y la noche hay además narración acreditada en el Pirá Paraná, y toda ella es de vecinos. En Hee Yaia Godo ~Bakari, publicado en 2015 por la Asociación de Capitanes y Autoridades Tradicionales Indígenas del Río Pirá Paraná con la Fundación Gaia Amazonas, el capítulo «Origen de la Noche» lo narra el ~Kubu Miguel Turio Martínez, de etnia carapana, de la comunidad de Puerto Esperanza, con traducción de Guillermo Rodríguez, de etnia magiña. En el mismo volumen, el sabedor tatuyo Quintino Rodríguez, de la comunidad de Jena, es quien da la genealogía en la que Sol y Luna son hermanos: cuenta que en el principio sólo existía la Anaconda Yuruparí y que sus hijos eran el Sol, la Mujer Chamán, Kahe Sawari y la Luna. Y el episodio previo, el de los Ayawa que van a pedirle la noche al dueño de la noche y reciben una olla, lo narra el Hee Gu Ignacio Valencia, de etnia macuna.

Carapana, tatuyo y macuna son pueblos del mismo río y con los mismos rituales, pero no son este pueblo. Sus narraciones se citan aquí como vecindad documentada y no como versión propia.`,
    versiones: `Las versiones vecinas cuentan el día y la noche de otra manera, y vale la pena saber cómo. En el capítulo carapana, la noche no se negocia entre dos hermanos: se abre una olla. Al destaparla se abrió la Maloca de Origen de la Noche y salieron los males de las malocas de origen de la gente veneno, de los peces, de los lamentos y de las aves, y salió también el murciélago que les quitó los ojos a los Ayawa. Todo lo que existe se originó en una sola noche, y cada vez que se abría una maloca de origen se originaba al tiempo una época del año, desde que oscureció hasta la medianoche. Hacia la medianoche la noche se calma y nace la época del Yuruparí; después amanece, el sol calienta con su aliento y revive a los Ayawa, y desde entonces oscurece cuando el sol da la vuelta por debajo de la tierra.

En el capítulo macuna, los Ayawa piden la noche al abuelo que la guarda, él les entrega primero una olla de llagas y sólo después la verdadera olla de la noche, con la advertencia de no destaparla antes de tiempo. La desobedecen y se nubla el cielo.

La misma monografía de 1979 que publica M.3 contrasta este relato con el incesto del Sol registrado entre los desana y advierte que los barasana no lo cuentan así. La versión vecina no se traslada por parecido.`,
    similitudes: `La oposición entre dos hermanos celestes que se reparten las horas aparece en muchos pueblos y por sí sola no identifica nada. Lo que identifica a esta versión es la cadena: una disputa por quién será dueño del día, una luz que queda débil y se pone roja, una corona luminosa que Luna se quita al bajar, un hombre escondido que la tapa con una vasija, un armadillo escarbando huesos bajo el piso de una casa abandonada, y el cielo entendido como una vasija por cuyo borde viaja el Sol marcando verano y lluvia según la altura de su recorrido.

Entre los vecinos del mismo río hay un paralelo que no es de contenido sino de función: tanto el capítulo carapana del origen de la noche como este relato terminan explicando el calendario. Allí, cada maloca que se abre durante la noche funda una época del año; aquí, la altura del Sol sobre la vasija del cielo distingue la estación seca de la de lluvias. Dos maneras distintas de convertir un relato de oscuridad en un almanaque.

La misma monografía que publica esta narración registra, entre los desana, una versión del Sol con incesto y advierte que los barasana no la cuentan así. Ese aviso vale más que la semejanza.`,
    leccion:
      "El tiempo se vuelve habitable cuando ninguna luz ocupa sola todas las horas del mundo.",
    sceneHorizontal:
      "Sol y Luna hermanos se separan sobre un río que cambia entre estación seca y lluviosa",
    sceneVertical:
      "la corona luminosa de Luna bajo una vasija dentro de una maloca, con una rendija que vuelve a encender la noche",
    researchNotes:
      "ADICIÓN ETNOGRÁFICA: M.3 «Sun and Moon; day and night», separado por la fuente del M.4 «Warimi».",
  }),
  myth({
    slug: "kahe-sawari-kata-yai-y-el-surgimiento-barasano",
    sourceKeys: [
      "communityBook",
      "cayon2013",
      "palm",
      "minCultura",
      "planVida",
    ],
    title: "Kahe Sawari y Kata Yai",
    summary:
      "Kahe Sawari atraviesa mundos y Kata Yai completa su recorrido hasta el surgimiento, el territorio y la lengua de los Barasano.",
    tags: ["Kahe Sawari", "Kata Yai", "origen", "territorio"],
    mito: `En el origen navegaba una canoa con forma de anaconda. La conducía el Sol y en ella iban los primeros seres, que venían buscando una tierra donde sembrar; la que tenían quedaba lejos y no servía para cultivar cera de abejas, tabaco ni coca. Del Gran Chamán Anaconda nacieron Kahe Sawari y Sawa Sawa. El recorrido terminó en el Cerro-Estantillo de Leche Pura, y allí el padre les dijo a sus hijos que en ese lugar debía surgir su descendencia. El Sol se quedó con el tiempo y la luz; los dos hermanos menores se dedicaron a organizar los lugares de origen, el paso de las épocas y las normas de los rituales.

La rivalidad empezó cuando la mujer de Kahe Sawari se enamoró de Sawa Sawa. El menor invitó al mayor a cavar una trampa para danta y lo hizo bajar prendido de una palma de asaí; cuando iba por la mitad del hueco, soltó la palma. Kahe Sawari atravesó el manto de la tierra y salió al mundo de abajo. No murió: en ese tiempo no había muerte. Convertido en copo de algodón flotó hasta las ramas de unos guamos a la orilla del río Umarí. Vio pasar varias canoas y por fin una que parecía arder; en ella venía el Sol. Para saber si eran parientes hicieron una prueba: el Sol sopló fuego contra la nave y Kahe Sawari se volvió araña y se escondió bajo el casco. Aguantó cinco veces, y el Sol lo reconoció.

De vuelta en la tierra, Sawa Sawa volvió a tenderle una trampa, esta vez en un hueco de nido de guacamayas. Desde allí Kahe Sawari alcanzó a ver los Cerros-Estantillos, y la Anaconda Celeste amarró su cola y estiró el cuerpo hasta sacarlo. Después de nuevos engaños encendió una gran quema. Sawa Sawa y la mujer huyeron convertidos en guacamayas. Kahe Sawari tampoco alcanzó a rehacer su cuerpo: sus huesos se volvieron Yuruparí, su cráneo se volvió el Cuenco de Cera de la Tierra y su hígado, cera.

Mientras eso ocurría, Kata Yai, hijo de Kahe Sawari, recorría los Cerros-Estantillos y vivía en el caño Cuduyari, en territorio cubeo, cuando todas las etnias tenían aún una sola lengua. Antes de volver hizo sus curaciones y llevó consigo cera de abejas coloradas y cera de abejas pardas. Al llegar a la maloca encontró los Yuruparís puestos sobre el trípode de exprimir casabe y, en el cuartito, el cráneo de su padre. Lloró, juró terminar el ordenamiento que había quedado abierto y se convirtió en el primer curador. Sentado, reunió a los grupos, levantó los estantillos que su padre no pudo levantar y recorrió el territorio repartiendo lo que faltaba. Llegando a Yebai Bota transformó en personas los espíritus de los ~Hadera. Allí aparecieron los barasanos como gente y recibieron su Yuruparí, su plumaje, su cera de abejas y su bejuco de yagé. No hay otra historia diferente a esta.`,
    historia: `Narra el ~kubu Ricardo Marín, barasano de la comunidad de San Miguel, y empieza dejando claro por qué le corresponde a él: «soy quien la puede contar porque soy un ~Kubu de este linaje». Habla a los que están reunidos con él, a sus hermanos, sobrinos y nietos, y antes de entrar en la historia hace una comparación: el no indígena también cuenta su origen y dice que venimos de un solo ancestro y que el primer hombre fue un mico; nosotros tenemos otro conocimiento, y cuando pensamos en las historias de origen parecen muchas pero en realidad son una sola. Traducen Tarsicio Vanegas, de etnia itano, y Roberto Marín, barasano.

El capítulo se titula «Cuenco Sagrado de Cera de Abejas de la Tierra» y está en Hee Yaia Godo ~Bakari, publicado en 2015 por la Asociación de Capitanes y Autoridades Tradicionales Indígenas del Río Pirá Paraná junto con la Fundación Gaia Amazonas. El conocimiento se declara allí bien colectivo de los pueblos del río y cada capítulo acredita narrador, traductor, etnia y comunidad; los investigadores y traductores son indígenas del propio Pirá Paraná.

El texto no corre seguido: está partido en bloques con título propio —los primeros seres buscan la tierra para poblarla, Kahe Sawari reconoce a su hermano el Sol, la protección de la gente, el hijo de Kahe Sawari ordena el territorio de su padre— y avanza, vuelve atrás y pasa por muchos lugares. La edición no lo endereza en una cronología.

El cierre es del narrador y conviene citarlo entero porque marca un límite: «Eso es todo. Esta es la historia. No hay otra historia diferente a esta».`,
    versiones: `El mismo capítulo explica dos veces por qué Kahe Sawari no volvió a tener cuerpo, y las dos explicaciones no se contradicen sino que se apoyan: ni él, ni Sawa Sawa, ni sus hijos comieron las curaciones de la Mujer Chamán, y por eso tuvieron que dejar el espíritu en los elementos rituales; al descomponerse quedaron los huesos, que se volvieron Yuruparí, el cráneo, que se volvió el Cuenco de Cera, y el hígado, que se volvió cera.

El nombre del pueblo cambia dentro del propio libro. En este capítulo, Kata Yai transforma en personas a los espíritus de los ~Hadera y el narrador dice enseguida «nosotros, los Barasano, aparecimos como personas». En otro capítulo, Uriel Betancourt es acreditado como de etnia ~Hadera, y en los demás como barasano. Aquí se conserva esa doble denominación sin corregir ninguna de las dos.

El cierre territorial tampoco reparte todo a un solo grupo. El capítulo cuenta que la Anaconda Yuruparí hizo surgir al grupo Koa~Boda para entregarle los Yuruparís y cuencos que sobraban, nombra los lugares donde los dejaron y admite que dentro del territorio recibido ya vivían los ~Kobe ~Basa, llamados hermanos mayores, con los que hubo que hacer un acuerdo para compartirlo. La página conserva ese final, que reconoce una ocupación anterior, en lugar de terminar en un surgimiento limpio.`,
    similitudes: `El viaje de una anaconda-canoa y el surgimiento de la gente en las cabeceras son comunes a los pueblos del Pirá Paraná, y el propio libro lo muestra: capítulos vecinos cuentan el mismo recorrido con narradores macuna, tatuyo y eduria, y cada uno lo termina en su territorio y con sus elementos. La forma se comparte; el desenlace no.

Dos episodios de este capítulo enlazan con otro texto barasano del mismo volumen. La Anaconda Celeste saca a Kahe Sawari del hueco de guacamayas estirando el cuerpo por encima de los Cerros-Estantillos, y esos mismos cerros son el asunto del capítulo que narra Reynel Ortega, donde el Hueco de Guacamaya de Araracuara aparece como límite occidental del territorio de la Gente de Yeba. Lo que en uno es un rescate, en el otro es una frontera.

La prueba del fuego entre el Sol y Kahe Sawari funciona como reconocimiento de parentesco y no como combate: los dos se queman por turnos hasta que el Sol admite que el otro tiene poder, y sólo después lo recibe en la nave. Ese uso del duelo para verificar quiénes son parientes, y no para vencer, es lo que distingue la secuencia dentro del volumen.`,
    leccion:
      "Quien hereda una historia hereda también el trabajo que la generación anterior dejó sin terminar.",
    sceneHorizontal:
      "Kahe Sawari sobre una anaconda celeste que une un árbol de guacamayas con varios cerros del horizonte",
    sceneVertical:
      "Kata Yai encuentra los restos de su padre y abre un camino hacia la gente Barasano junto al río",
    researchNotes:
      "FUENTE COMUNITARIA DIRECTA: narración de Ricardo Marín, ~kubu Barasano, comunidad de San Miguel.",
  }),
  myth({
    slug: "la-cuerda-de-leche-y-la-anaconda-yeba",
    sourceKeys: [
      "communityBook",
      "cayon2013",
      "pleiades",
      "palm",
      "minCultura",
    ],
    title: "La Cuerda de Leche y la Anaconda Yeba",
    summary:
      "Los ríos forman una Cuerda de Leche por la que las anacondas ancestrales reciben conocimiento y llegan al territorio del Pirá Paraná.",
    tags: ["Anaconda Yeba", "Río de Leche", "Pirá Paraná", "surgimiento"],
    mito: `El río Amazonas es el Río de Leche y el río Pirá Paraná es el Río de Aguas de Yuruparí. En esos dos ríos se originó la humanidad, y juntos forman la Cuerda de Leche de la Evolución. La desembocadura del Amazonas en el Atlántico es la Puerta de las Aguas, y allí está la Maloca de Origen de Yuruparí, donde nace el Yuruparí y donde empieza la historia.

De esa maloca salieron las Anacondas Ancestrales. Durante el recorrido, en los lugares sagrados de los dos grandes ríos, fueron transformándose y recibiendo de los Jaguares de Hee los conocimientos curativos, las semillas de los alimentos, los ornamentos y los instrumentos ceremoniales. Recibieron el conocimiento de los rezos, el de las danzas rituales y el de la oratoria, y con ellos el bejuco de yagé y las semillas de tabaco y de coca.

El viaje tuvo tres grandes paradas, y el pensamiento tradicional las entiende como malocas rituales de un mismo proceso. En la segunda, que ocurrió a la vez en Biki~gubú sobre el Pirá Paraná y en Heta Gohe sobre el Vaupés y que se cuenta como un solo lugar, se volvió a reunir toda la Gente Anaconda con las voces de los Yuruparís y los cuencos sagrados, hicieron curación de enfermedades y allí dejaron la forma de anaconda y se transformaron en hombres. En la tercera, ya con forma humana, completaron los conocimientos de rezos, oratoria y danzas y recibieron los cuencos de la salud, de coca y de cera.

Con ese saber recogido, cada grupo se separó y siguió su propio camino por la senda de la evolución hasta el territorio que le correspondía. Así recibieron su tierra los hijos de la Anaconda Celeste, los de la Anaconda Remedio, los de la Anaconda Yeba y los de la Anaconda de Agua, todos en el Pirá Paraná, para cuidar ese lugar. La ruta terminó en Waiya Goheri, en las cabeceras del río, donde las Anacondas dieron por terminada su tarea de hacer amanecer a la gente: cada grupo surgió con su propia lengua y se estableció en su territorio.

La cuerda no convierte los ríos en un camino cualquiera. Los lugares por donde pasaron guardan la memoria de lo que ocurrió allí, y los sabedores de Yuruparí la recrean para nutrir la vida del entorno. Desde esas cabeceras los conocimientos se perpetúan y se expanden para beneficio del mundo.`,
    historia: `Narran dos sabedores barasanos, el ~kubu Uriel Betancour y el Hee Gu Reynel Ortega; traduce Daniel León, de etnia tatuyo; el encabezado del capítulo da como origen la comunidad ~Boawi. El capítulo se llama «La Cuerda de Leche de la Evolución» y está en Hee Yaia Godo ~Bakari, el libro que la Asociación de Capitanes y Autoridades Tradicionales Indígenas del Río Pirá Paraná publicó en 2015 con la Fundación Gaia Amazonas.

Conviene separar dos cosas que la ficha anterior juntaba. El capítulo firmado por los dos barasanos cuenta la ruta, las tres malocas rituales y el reparto final entre cuatro anacondas, pero no dice a qué pueblo corresponde cada una. Quien hace esa identificación es otro capítulo del mismo libro, «El recorrido de las Anacondas Ancestrales», narrado por el Hee Gu Ignacio Valencia, de etnia macuna, de la comunidad de Santa Isabel, con traducción de Tarsicio Vanegas, itano. Allí se dice que los Itano son el clan mayor de los descendientes de la Anaconda Yeba y que los ~Hadera —las familias ~Bedi ~Basa, Ria~tuda, Boe~Basa, ~Uba-Bayaroa y Daria— son el clan menor de esa misma descendencia, con territorio entre el Gran Travesaño y el Travesaño de Piedra, en el alto Pirá Paraná.

Es decir: la atribución de la Anaconda Yeba a barasanos e itanos existe, está publicada y tiene quien responda por ella, pero la dice un narrador macuna, no uno barasano. Esta página la conserva y deja dicho de quién es la voz.

El libro acredita a los mismos dos narradores en otros capítulos con comunidades distintas: en la lista final de autores, Uriel Betancur figura como narrador de la comunidad de Moawi y Reynel Ortega como narrador de Puerto Ortega.`,
    versiones: `Las cuentas no coinciden entre capítulos. El de la Cuerda de Leche nombra cuatro anacondas al repartir los territorios: Celeste, Remedio, Yeba y de Agua. El capítulo macuna sobre el recorrido nombra seis, porque los Ayawa recuperaron las anacondas dispersas en el mar y les pusieron nombre una por una: Celeste, Pez, de Agua, Yeba, Remedio y Metal. Ninguno de los dos corrige al otro y aquí se dejan los dos números.

La atribución tampoco es única fuera del libro. Desde la orilla makuna del Apaporis, la etnografía de Luis Cayón recoge que el ancestro de los barasana es la Anaconda Pintada y que la Anaconda Meni es el ancestro de los tatuyo, dentro de una fratría encabezada por la Anaconda Yibá. Es una fuente vecina, dicha desde el punto de vista de la gente de agua, y no coincide con la del libro del Pirá Paraná. Las dos están documentadas y se registran como lo que son: dos atribuciones distintas, una del propio río y otra de un pueblo vecino.

La forma del capítulo también importa. Lo que se publica no es una aventura sino una explicación de recorrido, y en el libro va acompañada de un mapa de doble página y de una introducción sin firma que resume la ruta antes de que empiecen a hablar los narradores. Esta página sigue la prosa y no convierte el mapa en itinerario.`,
    similitudes: `El paralelo más cercano y más incómodo está a un río de distancia. La etnografía makuna de Luis Cayón describe el mismo esquema —grupos que descienden cada uno de una anaconda ancestral, con casa de origen, lengua, territorio y bienes rituales propios— y hasta ordena a los pueblos del Pirá Paraná según las relaciones entre esas anacondas. Pero reparte los ancestros de otra manera, y lo hace desde la perspectiva de la gente de agua del Apaporis. Sirve para mostrar que el esquema es regional; no sirve para decidir cuál anaconda es la de este pueblo.

Dentro del propio libro, el capítulo macuna sobre el recorrido añade una pieza que el de la Cuerda de Leche no tiene: las anacondas fueron hijas de la Mujer Chamán, nacieron en la Puerta de las Aguas, y quien las bañaba de noche y las secaba al sol era Wari~bi, el hijo de Luna, hasta que se durmió y se le dispersaron en el mar. La ruta que aquí se cuenta arranca, en ese otro capítulo, de un descuido.

Lo que identifica a esta versión es la cuenta concreta: dos ríos leídos como una sola cuerda, tres malocas rituales de las que la segunda ocurre en dos lugares a la vez, la pérdida de la forma de anaconda en la segunda parada y un final en Waiya Goheri donde amanece la gente.`,
    leccion:
      "Un origen compartido no borra las lenguas ni las tareas propias que cada pueblo recibió después.",
    sceneHorizontal:
      "una anaconda Yeba navega como cinta de papel por el Amazonas y entra al Pirá Paraná entre tres malocas luminosas",
    sceneVertical:
      "la anaconda deja su forma y una fila de personas asciende hacia las cabeceras del Pirá bajo un amanecer",
    researchNotes:
      "FUENTE COMUNITARIA DIRECTA: Uriel Betancour y Reynel Ortega, etnia Barasano; el mapa identifica Anaconda Yeba con Barasana e Itana.",
  }),
  myth({
    slug: "los-cerros-estantillos-y-la-cera-de-abejas",
    sourceKeys: [
      "communityBook",
      "cayon2013",
      "planVida",
      "minCultura",
      "pleiades",
    ],
    title: "Cerros-Estantillos y Cera de Abejas",
    summary:
      "Los cerros son estantillos de una gran maloca territorial: guardan memoria, cera y relaciones para cuidar la vida en cada época.",
    tags: ["Cerros-Estantillos", "cera de abejas", "territorio", "maloca"],
    mito: `Los Estantillos de Yuruparí son los cerros que contienen el poder del Gran Yuruparí y de los cuencos sagrados de cera de abejas. Por esos cerros pasaron las Anacondas durante el recorrido del surgimiento de la humanidad, y allí recibieron los poderes para el manejo del territorio. Los cerros le transfieren al sabedor esos poderes cuando hace prevención del mundo; por eso el sabedor los recorre en forma de espíritu. De allí toma la fuerza para rechazar los efectos de la maldad que aparecen en el cielo en forma de largas nubes, y para calmar los relámpagos que producen enfermedades.

Los mismos cerros tienen tres nombres, y los tres dicen lo mismo de otra manera: cerros de cera de abejas donde surgió la gente, grandes cúmulos de cera de abejas del origen de la gente, antiguas murallas de cera de abejas del cuenco sagrado donde emergió la gente. Si se reza la comida, se reza a través de ellos, y se convierten en estantillos de vida para que no alcancen los venenos de los peces de Yuruparí, del bejuco de yagé, de las bancas, de la mata de tabaco y del río.

Los cerros se nombran uno por uno. El Cerro Campana, en Chiribiquete, es donde los hijos de la Anaconda Celeste reciben el conocimiento curativo para que prospere la yuca, y también el rezo para la mujer y la chagra; de ahí se pasa al cerro del padre de Yeba, que es el poste al otro lado de la puerta del territorio. En otro lugar, sobre el gran río, la Anaconda Yuruparí emerge vomitando los Yuruparís de los clanes de Yeba, y ese sitio se conoce como la maloca donde surgieron los Yuruparís. El Cerro de la Leche Pura está relacionado con la vida de todos los grupos del territorio y pertenece por igual al hijo de la Anaconda Celeste, al de la Remedio y al de la Yeba: allí se origina la cera que se usa en todas las prevenciones.

Siguen el Cerro Estantillo Trueno, que es del Yuruparí Viejo, y el Hueco de Guacamaya en Araracuara, que le corresponde a la Gente Tigre y marca el límite occidental del territorio de la Gente de Yeba. Hacia el oriente está el Estantillo de Guacamayo, de los hijos de la Anaconda Celeste y de la Gente del Cielo. Hacia el occidente, el Cerro-estantillo del Águila-Tigre, donde surgió la fuerza del tigre y el poder del trueno de la guerra. Y está el Cerro Viento del Tucán, que recuerda la tristeza de la mujer primordial que se apoderó de las flautas de curación.

Vistos juntos, los cerros sostienen el cielo, el territorio y la memoria como los postes sostienen una casa. No todos pertenecen a la misma gente ni cumplen la misma función: el mapa diferencia pueblos, ancestros y responsabilidades.`,
    historia: `Narra el Hee Gu Reynel Ortega, barasano de la comunidad de Puerto Ortega, y traduce Daniel León, de etnia tatuyo. El capítulo se titula «Los Cerros-Estantillos de Yuruparí y Cera de Abejas donde surgió la Gente» y está en Hee Yaia Godo ~Bakari, publicado en 2015 por la Asociación de Capitanes y Autoridades Tradicionales Indígenas del Río Pirá Paraná con la Fundación Gaia Amazonas, un libro hecho por investigadores indígenas del propio río en el que el conocimiento se declara bien colectivo y cada capítulo acredita narrador, traductor, etnia y comunidad.

Hay que decir qué clase de texto es, porque no es un cuento. Reynel Ortega habla en primera persona del plural de los sabedores —«si rezamos la comida, lo hacemos a través de estos cerros»— y lo que entrega es a la vez una explicación de para qué sirven los cerros y una lista georreferenciada. Cada entrada de la lista lleva el nombre del cerro en lengua, su nombre corriente en castellano, a veces su ubicación actual —Chiribiquete, Araracuara, Manaos— y un código de dos o tres caracteres que remite a una lámina cartográfica impresa en otra página del libro.

Esa mezcla de prosa, enumeración y mapa es deliberada y tiene un uso: el mismo volumen incluye después un apartado sobre los poderes de los antiguos cerros de Yuruparí y de cera de abejas, y más adelante láminas con la corona de cerros que contienen los poderes para el manejo del mundo en la parte alta del río. Esta página conserva la forma explicativa de la fuente y no reproduce ni los códigos ni las coordenadas.`,
    versiones: `La lista no es de un solo pueblo. El propio capítulo asigna el Cerro Campana a los hijos de la Anaconda Celeste, el Estantillo de Guacamayo a la Gente del Cielo, el Hueco de Guacamaya a la Gente Tigre, y deja el Cerro de la Leche Pura como propiedad compartida de tres descendencias. Un texto narrado por un sabedor barasano describe, por tanto, una geografía en la que buena parte de los soportes pertenece a otros. Esta página lo conserva así y no convierte el mapa en un patrimonio exclusivo.

El libro cuenta además el origen de esos cerros en otro capítulo y con otra voz. Allí, narrado por un sabedor macuna, son los Ayawa quienes colocan los Cerros-Estantillos del Cosmos con la ayuda de la Anaconda de Yuca, porque la tierra todavía se movía con facilidad; en esa versión los estantillos son postes del Yuruparí y se nombran uno de cera de abejas del cosmos y otro de frutos silvestres. El capítulo de Reynel Ortega no cuenta ese origen: parte de que los cerros ya están puestos y explica qué se hace con ellos.

La identificación con lugares del mapa actual varía dentro del mismo volumen. El Cerro de la Leche Pura aparece aquí como Manaos y en el capítulo de Kahe Sawari como el Pan de Azúcar de Río de Janeiro. Se registran las dos y no se elige una.`,
    similitudes: `El paralelo interno más claro es el capítulo macuna donde los Ayawa colocan los estantillos del cosmos para que la tierra deje de moverse. Comparte la imagen —cerros que hacen de postes de una casa que es el mundo— y cambia el punto de vista: uno cuenta cómo se pusieron, el otro cómo se usan. Es la misma arquitectura explicada desde el origen y desde el oficio.

Dentro del propio libro, el capítulo de Kahe Sawari y Kata Yai recorre estos mismos cerros como escenario de acción. El Cerro Estantillo de Leche Pura, el Estantillo de Loro Blanco y el Hueco de Guacamaya aparecen allí como lugares por donde alguien sube, se esconde o es rescatado. Aquí, en cambio, no pasa nada en ellos: son la condición de que algo pueda pasar.

Lo que ata esta versión a un narrador y no a una idea general de montañas sagradas son las combinaciones concretas: la cera de abejas como materia del origen y a la vez como remedio de la maloca, las nubes largas leídas como capas de maldad, el rezo de la comida hecho a través de una lista de cerros con dueño, y el hecho de que el límite occidental del territorio de un pueblo sea el hueco de un nido de guacamaya en Araracuara.`,
    leccion:
      "Cuidar un territorio exige entender las relaciones que lo sostienen, no sólo ocupar su superficie.",
    sceneHorizontal:
      "varios cerros planos sostienen un cielo como postes de una gran maloca mientras una anaconda recorre el río",
    sceneVertical:
      "un cuenco de cera de abejas se alinea con un cerro, una chagra y nubes de lluvia en capas de papel",
    researchNotes:
      "FUENTE COMUNITARIA DIRECTA: Reynel Ortega, Hee Gu Barasano, comunidad de Puerto Ortega.",
  }),
  myth({
    slug: "el-origen-de-la-gente-de-los-frutales-silvestres",
    sourceKeys: [
      "communityBook",
      "ilv1974",
      "pleiades",
      "minCultura",
      "planVida",
    ],
    title: "La Gente de los Frutales Silvestres",
    summary:
      "En Badi Serero, Kata Bahi y sus compañeros atan, distribuyen y ordenan los frutos que alimentarán a las generaciones.",
    tags: ["frutales silvestres", "Kata Bahi", "Badi Serero", "calendario"],
    mito: `«No hay frutales silvestres, queremos comer frutales silvestres», dijeron los Jaguares de Yuruparí, y miraron hacia Badi Serero. Allí quedó el Estantillo de Origen y la Casa de Origen de los Frutales Silvestres, y la palma de almidón de achiote quedó como cuna de esa gente. A la pava Kata Bahi le entregaron un territorio, tabaco, el cuenco de coca y los bastones ceremoniales, y le dijeron que sería la curadora de los frutales. La adornaron con pendientes brillantes, la pintaron con tintura de wee y le pusieron corona de plumas.

Crearon después al Torcedor de Cumare, para que los frutos tuvieran siempre de dónde colgarse, y con él llegó el Diablo de Breo. Fue el último en entrar a la maloca: saludó pidiendo tabaco puro y coca pura, le hicieron oler tabaco, le ofrecieron coca y le dieron chicha, y cuando se paró en la mitad y se frotó la cabeza, el resplandor del breo alumbró todo el recinto. Entonces el Torcedor clavó un gran manojo de cumare, todos se pusieron a torcer las fibras, las tiñeron con almidón de achiote y salieron a amarrar frutos.

El trabajo fue largo y ninguno de los que salieron era curador: el principal, la pava Kata Rihaborea, estaba encerrado bajo un balay de cernir hoja de yarumo. Mientras amarraban la ibacaba y las castañas, los Jaguares dijeron que esas semillas serían sus dientes. Ante la siringa decidieron que crecería sólo hasta la mitad de la altura de los árboles grandes. Ante el inmenso wahi dijeron que ninguno sería más alto y que ese produciría las enfermedades de los frutales. Los dos árboles empezaron a sonar «tibu, tibu, tibu», y con ese sonido todos los frutales se llenaron de enfermedad y nacieron al tiempo los animales que comen fruta.

Luego repartieron las especies. Lanzaron la palma de ibacaba con su racimo hacia el oriente. El asaí quedó en las sabanas y en las orillas de los ríos de Yuruparí. El caraná fue a las sabanas dispersas y el mojojoy recibió su color. El chontaduro quedó para la época de los frutales. Llegaron las avispas, las abejas y las culebras a comerse la fruta, los frutos maduraron y con ellos aparecieron los dolores de cuerpo, los mareos, el vómito y el dolor de muelas. Pasada la medianoche, la mujer del curador encerrado le reclamó que quería comer, y él levantó el balay, voló hasta el Estantillo de las Mujeres y después hasta la viga central, y con el batir de sus alas arrojó los bichos venenosos contra las paredes; de ahí brotaron las palmas de mirití. El último en llegar fue la danta, que traía el escudo protector de breo y con la que se originó la danza de danta.`,
    historia: `Quien narra es Baya Jaime Giraldo, barasano de la comunidad de San Miguel. Baya no es un nombre sino un cargo: en este mismo libro otro sabedor cuenta que antes fue Baya, danzador, y que después entregó ese conocimiento a un alumno. Giraldo empieza anunciando que va a contar el origen de los frutales silvestres y que es una historia que viene contándose desde los antiguos. La traducción la firman cuatro personas: Tarcisio Vanegas, de etnia itano, y Roberto Marín, Elmer Giraldo y Rubén Darío Ramírez, los tres barasanos.

El capítulo está en Hee Yaia Godo ~Bakari, el libro que la Asociación de Capitanes y Autoridades Tradicionales Indígenas del Río Pirá Paraná publicó en 2015 con la Fundación Gaia Amazonas. No es una recopilación hecha desde afuera: los investigadores son del propio río, el conocimiento se declara bien colectivo de esos pueblos y cada capítulo lleva encabezado con narrador, traductor, etnia y comunidad. Este cierra la sección del calendario ecológico dedicada a la época de frutas silvestres, Herika Oká Rodó, y viene después de dos capítulos que no son narraciones: uno sobre enfriar el tiempo de los frutales y otro sobre las relaciones entre frutales y animales.

En la página impresa el relato corre en columna y los comentarios del sabedor sobre el presente van en recuadros aparte: que por eso la siringa tiene la mitad de la altura de los árboles grandes, que el mojojoy del caraná produce males de manteca si se come sin curación, que los antiguos recogían las primeras cosechas para prevenir las enfermedades que traen los frutos. Esta página conserva esa separación y deja los recuadros como lo que son, comentario del narrador y no instrucción.`,
    versiones: `El propio capítulo nombra dos pavas y no las distingue del todo. Kata Bahi recibe el territorio, los ornamentos y el título de curadora de los frutales; más adelante aparece Kata Rihaborea como el curador principal encerrado bajo el balay, con el género alternando entre una frase y la siguiente, y al final es su mujer quien le reclama que salga a recoger los primeros frutos. Las dos figuras quedan aquí tal como están en la fuente, sin fundirse en una sola.

El orden en que se reparten los árboles tampoco es un inventario cerrado. La lista pasa de la ibacaba y la castaña a la siringa, el wahi, el asaí, el caraná, el corombolo, el cumare duro, el chontaduro y el mirití, y varias de esas paradas quedan amarradas a puntos numerados de un mapa impreso en el libro, con el primer mirití brotando en Pozo Blando, entre las cabeceras del Pirá Paraná y el caño Tatú. Esta página narra las que la prosa desarrolla y no reproduce las referencias cartográficas.

El resto del volumen tiene capítulos de origen para las otras épocas del calendario —la Gente Oruga, los cultivos, el Yuruparí—, narrados por sabedores macuna, tatuyo y eduria. Comparten la forma y no el contenido. Aquí se sigue únicamente el capítulo acreditado a un narrador barasano, sin añadirle episodios de los demás.`,
    similitudes: `Dentro del mismo libro hay un paralelo de forma. Cada época del calendario ecológico tiene su capítulo de surgimiento, y los de la Gente Oruga o los cultivos también arrancan con una decisión de los Jaguares de Yuruparí y terminan en una lista de males que hay que prevenir. Lo que cambia es quién narra y por cuál etnia responde: unos son macuna, otros tatuyo, otros eduria.

El parentesco más cercano está en otro capítulo barasano del mismo volumen. Los cerros de cera de abejas que narra Reynel Ortega sirven justamente para rezar la comida y apartar los venenos de los peces y de las frutas. Los dos textos sostienen que el alimento trae dentro su propia enfermedad y que comerlo exige un trabajo previo; uno lo sitúa en una faena de origen y el otro en una geografía de cerros.

La combinación que identifica a esta versión no se repite en los demás capítulos: Badi Serero como casa de origen, una pava investida con corona de plumas y cuenco de coca, un torcedor de fibras de cumare, un diablo que alumbra la maloca frotándose la cabeza con breo, y una repartición de palmas que sigue la misma cuenta con la que se organizan la quema, la pesca y la siembra del año.`,
    leccion:
      "La abundancia se sostiene cuando quien reparte el alimento reparte también el cuidado que exige.",
    sceneHorizontal:
      "Kata Bahi, el Torcedor de Cumare y figuras jaguar atan racimos de frutos a palmas en una selva luminosa",
    sceneVertical:
      "palmas de ibacaba, asaí y caraná ascienden en capas mientras aves, danta y frutos forman un calendario circular",
    researchNotes:
      "FUENTE COMUNITARIA DIRECTA: Jaime Giraldo, Baya Barasano, comunidad de San Miguel; traductores Barasano identificados.",
  }),
];

export default barasanaDefinitions;
