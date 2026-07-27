const SHARED_CRAFT_DIRECTION =
  "Estilo studioPaperMaquette aprobado: maqueta física hecha a mano con papel cortado, cartón y fibras naturales, fotografiada de frente; relieve bajo, bordes visibles, pequeñas imperfecciones humanas, micro-sombras reales e iluminación sobria. Fantasía anclada en el paisaje del altiplano cundiboyacense";

const SHARED_EXCLUSIONS =
  "Sin texto ni logotipos; sin CGI, render digital ni apariencia de 3D sintético; sin coronas, tronos o templos europeos; sin pirámides, penachos ni iconografía mesoamericana; sin símbolos espirituales inventados";

function horizontalPrompt(scene, avoid) {
  return `Fotografía editorial horizontal exacta 16:9. Escena principal: ${scene}. ${SHARED_CRAFT_DIRECTION}. Composición panorámica de un solo tableau; los personajes y objetos esenciales permanecen dentro del 80 % central. ${SHARED_EXCLUSIONS}${avoid ? `; sin ${avoid}` : ""}.`;
}

function verticalPrompt(scene, avoid) {
  return `Fotografía editorial vertical exacta 9:16. Segunda escena narrativa distinta de la principal: ${scene}. ${SHARED_CRAFT_DIRECTION}. Composición vertical diseñada desde cero, no un recorte ni una repetición; la acción esencial ocupa el eje central y conserva aire arriba y abajo. ${SHARED_EXCLUSIONS}${avoid ? `; sin ${avoid}` : ""}.`;
}

export const muiscaVerticalImageScenes = {
  bachue: {
    scene:
      "Bachué y su compañero, ya ancianos, regresan a la laguna de Iguaque; la comunidad espera en la orilla mientras sus siluetas empiezan a transformarse con serenidad en dos serpientes que entran al agua",
    avoid: "desnudez, erotización, joyería inventada o dramatismo de despedida",
  },
  bochica: {
    scene:
      "en la sabana inundada, Bochica aparece pequeño frente a la peña abierta del Tequendama; el agua comienza a descender y varias familias observan desde una loma con semillas y mantas a salvo",
    avoid:
      "barba de apóstol, cruz, aureola, túnica europea o gesto de conquistador",
  },
  "campos-eliseos": {
    scene:
      "antes de cruzar el río subterráneo, la tejedora se arrodilla ante una araña pequeña que tensa muchos hilos entre dos piedras y le muestra cómo convertir una red frágil en un paso firme",
    avoid:
      "calaveras, fantasmas blancos, cementerio, barquero o inframundo griego",
  },
  chaquon: {
    scene:
      "después de la carrera, la joven corredora vuelve al sembrado, levanta una piedra caída del lindero y ayuda a replantar los surcos que otro participante dañó al tomar un atajo",
    avoid:
      "estadio moderno, medallas, ídolo guerrero o castigo sobrenatural espectacular",
  },
  chia: {
    scene:
      "en la fuente de Tíquiza, el joven en formación inclina el rostro sobre el agua y ve la luna menguante mezclada con su reflejo; una mayor de su familia materna espera detrás con una manta sencilla",
    avoid:
      "diosa europea antropomorfa, corona creciente, templo grecorromano o matriarcado inventado",
  },
  chibchacum: {
    scene:
      "antes del castigo, la sabana de Bacatá está cubierta por el agua; familias refugiadas en una loma protegen semillas y mantas mientras Chibchacum contempla desde lejos los caminos que ya no puede distinguir",
    avoid:
      "globo terráqueo, Atlas griego, fisicoculturista, rayos o destrucción gráfica",
  },
  chiminigagua: {
    scene:
      "la primera claridad ya ha llegado a la tierra: lagunas, lomas frías y vegetación baja reflejan franjas suaves de luz mientras las grandes aves negras se alejan hacia el horizonte",
    avoid:
      "figura humana de creador, anciano europeo, sol con rostro, emblemas dorados o templos",
  },
  "creacion-muiscas": {
    scene:
      "después de que las aves revelan el mundo, Bachué y el niño pisan por primera vez la orilla de Iguaque bajo una luz nueva; las huellas humanas comienzan donde termina el agua",
    avoid:
      "balsa de El Dorado, vasija clásica, mezcla de panteones o escena multitudinaria",
  },
  cuchavira: {
    scene:
      "varios días después de la inundación, una mujer embarazada siembra las primeras semillas en una parcela ya drenada, la persona que recuperó sus fuerzas lleva agua y otras familias reparan un paso entre los juncos; en un charco queda apenas el reflejo pálido del arco iris",
    avoid:
      "arco iris dominante, figura humana dentro del arco, alas griegas, arco iris con rostro o saturación infantil",
  },
  "el-bermejo-aspira-a-ser-rey": {
    scene:
      "el Bermejo abandona la reunión después de que Gámeza rechaza el regalo; lleva el paquete cerrado entre las manos, Hisca camina unos pasos detrás y los electores permanecen en el cercado",
    avoid: "batalla, corona, armadura, asesinato explícito o pose heroica",
  },
  "el-castigo-de-chaquen": {
    scene:
      "tiempo después de la transformación, una franja de hierba seca marca el lindero y una planta verde crece junto a la quebrada; entre ambas queda el sendero vacío que recuerda a Tintoba y Súnuba",
    avoid:
      "pareja real romántica, alas, rayos, cuerpos atrapados o espectáculo mágico",
  },
  "el-dorado": {
    scene:
      "después de la ofrenda, la pequeña balsa vuelve hacia la orilla de Guatavita; el nuevo cacique ya no tiene polvo de oro y una persona mayor le devuelve una manta mientras la comunidad abre paso en silencio",
    avoid:
      "ciudad de oro, conquistadores, tesoro emergiendo del agua, corona o multitud monumental",
  },
  "el-hijo-del-sol-goranchacha": {
    scene:
      "Goranchacha adulto llega a Ramiriquí y es recibido al mismo nivel por autoridades y familias; la esmeralda de su nacimiento aparece solo como una pequeña pieza guardada en algodón",
    avoid:
      "trono, pedestal solar, corona, halo cristiano, bebé dorado o adoración",
  },
  "el-origen-del-lago-tota": {
    scene:
      "la cuenca seca empieza a llenarse después de la derrota de Busiraco; Monetá y varias familias observan cómo el agua cubre las grietas y refleja por primera vez las montañas",
    avoid:
      "combate repetido, dragón europeo, sacrificio humano, joyas gigantes o explosión",
  },
  "el-pozo-de-hunzahua": {
    scene:
      "al amanecer, Jerónimo Donato y los trabajadores encuentran el Pozo de Hunzahúa otra vez lleno pese a las zanjas; un joven sostiene un fragmento de cerámica y no hay oro en el barro",
    avoid:
      "maquinaria moderna, cofre, monedas visibles, maldición personificada o excavación arqueológica contemporánea",
  },
  "el-primero-de-los-reyes": {
    scene:
      "Garancheda adulto llega a Ramiriquí y conversa con la comunidad que debe reconocer su autoridad; un abuelo y dos niñas escuchan esa escena como memoria, sin separar al gobernante del resto",
    avoid:
      "pedestal, rey solar, corona, pirámide, cetro o multitud arrodillada",
  },
  "el-sol-y-la-luna": {
    scene:
      "las primeras figuras humanas permanecen sobre la tierra y descubren el paisaje ahora iluminado: unas miran el amanecer y otras reconocen la luna tenue que hará habitable la noche",
    avoid:
      "astros con rostro, coronas, deidades flotantes, templo o iconografía inca o azteca",
  },
  "el-tequendama": {
    scene:
      "cuando baja la inundación, varias familias descienden de las lomas y plantan semillas en la tierra húmeda; al fondo continúa cayendo el nuevo Salto del Tequendama entre niebla",
    avoid:
      "repetición del golpe de la vara, arca bíblica, Moisés, cadáveres o catástrofe espectacular",
  },
  "en-el-principio-fue-el-maiz": {
    scene:
      "en la primera cosecha, Piracá corta mazorcas maduras y reparte semillas entre varias familias; un ave negra observa desde una rama y Bochica ya se aleja por el camino",
    avoid:
      "emblema solar de maíz, personaje europeo, pirámides, abundancia palaciega o lluvia de oro",
  },
  "fu-el-dios-de-la-torpeza": {
    scene:
      "la piedra lanzada por Fu rebota sobre una roca plana y produce una chispa mínima; Fu, sorprendido y humano, se agacha para mirar la marca mientras el amanecer toca el boquerón de Tausa",
    avoid:
      "ídolo gigante, demonio rojo, explosión, pólvora moderna, martillo o cuerpo musculoso",
  },
  huitaca: {
    scene:
      "ya transformada, una lechuza de papel blanco y ocre observa desde una rama la celebración que continúa abajo; las personas recogen vasijas y vuelven a equilibrar música, descanso y cuidado",
    avoid:
      "bruja europea, luna con rostro, sexualización, castigo sangriento o batalla entre dioses",
  },
  hunzahua: {
    scene:
      "después de abandonar Hunza, los dos hermanos descansan separados a cada lado de un curso de agua; una flecha con pequeño cascabel marca el camino y la vasija rota queda muy lejos",
    avoid:
      "romance idealizado, boda, erotización, niño de piedra visible o dios castigador",
  },
  idacanzas: {
    scene:
      "Idacansás explica públicamente las señales del granizo; agricultores y tejedoras señalan canales, cubren cultivos y acuerdan tareas antes de que llegue la nube",
    avoid:
      "bola de cristal, rayos en las manos, cruz, hechicero europeo o personas arrodilladas",
  },
  "la-aparicion-del-hombre": {
    scene:
      "las primeras figuras de tierra amarilla y tallos huecos terminan de cobrar vida en la oscuridad; dos de ellas se levantan y se buscan con las manos mientras sus creadores observan",
    avoid:
      "Bachué, laguna de Iguaque, disfraces de barro, sol o luna prematuros o iconografía mesoamericana",
  },
  "la-cacica-de-guatavita": {
    scene:
      "tiempo después de entrar en la laguna, la hija de Guaginasie toca el agua desde la orilla y percibe bajo la superficie la silueta serena de su madre junto a una serpiente acuática discreta",
    avoid:
      "suicidio, amante, bebé muerto, sirena europea, ciudad de oro o castigo moralizante",
  },
  "la-competencia": {
    scene:
      "en un tramo empinado de la carrera, Sesquilé se detiene para ayudar a levantarse a un corredor que resbaló; los demás continúan hacia la meta y Tiniacá aún no aparece",
    avoid:
      "estadio moderno, medallas, ceremonia real, sacrificio o arquitectura mesoamericana",
  },
  "la-herencia": {
    scene:
      "después de la decisión familiar, la hermana divide una manta y entrega una parte a cada hermano; Tausa y el cacique de Chía aceptan el reparto sin ocupar un lugar superior",
    avoid:
      "ejército, trono, corona, sumisión femenina, ceremonia dinástica o palacio",
  },
  "la-historia-del-bermejo": {
    scene:
      "en Toca, el Bermejo deja el tronco en el suelo y recibe una vasija de agua de la hija mayor del cacique; ambos conversan mientras otras personas continúan el trabajo",
    avoid:
      "héroe vikingo, músculos exagerados, armadura, mujer entregada como premio o adoración",
  },
  "la-madre-de-los-hombres": {
    scene:
      "en la mañana del origen, Bachué adulta sale de Iguaque con el niño de la mano; ambos pisan la orilla fría y miran el sendero por el que descenderán",
    avoid:
      "desnudez, sexualización, maternidad cristiana, halo, estatuas o joyería inventada",
  },
  "los-cojines-del-zaque": {
    scene:
      "la niña regresa otro amanecer a los dos discos bajos de piedra y observa cómo el primer borde natural del sol aparece entre ellos; no hay gobernante ni ceremonia alrededor",
    avoid:
      "sacrificio humano, sangre, sol con rostro, altar, trono, templo o corona",
  },
  "los-dioses-civilizadores": {
    scene:
      "en otro poblado del camino, Bochica escucha a agricultores junto a una acequia dañada y trabaja con ellos para devolver el agua al cultivo; la tejedora de la escena principal no aparece",
    avoid:
      "evangelizador europeo, cruz, aureola, cascada repetida, templo o multitud adorando",
  },
  "los-mojas": {
    scene:
      "después del canto, el joven moja permanece sentado sobre una manta limpia y mira hacia los cerros orientales; las personas adultas guardan distancia y escuchan sin tocarlo",
    avoid:
      "cuchillo, sangre, altar, corazón, cuerpo atado, plumas aztecas o glorificación del sacrificio",
  },
  meicuchuca: {
    scene:
      "desde la orilla del río Funza, la esposa principal y otras mujeres ven alejarse en el agua a la gran serpiente en que se transformó la joven; Meicuchuca queda detrás de ellas, sin control de la escena",
    avoid:
      "coronas, palacio, erotización, demonio, ojos de fuego o horror corporal",
  },
  nemequene: {
    scene:
      "en un camino militar, Nemequene observa cultivos abandonados y una familia que se aparta del paso de sus guerreros; comprende el límite entre hacer cumplir una norma y extender el poder",
    avoid:
      "batalla heroica, corona, trono dorado, conquista triunfal o violencia explícita",
  },
  nencatacoa: {
    scene:
      "al final de la jornada, una pequeña figura animal cubierta con manta descansa junto a vasijas mientras las manos de constructores y tejedoras terminan la casa y comparten alimento",
    avoid:
      "dios-zorro gigante, borrachera, templo clásico, ceremonia de adoración o animal realista dominante",
  },
  nompanem: {
    scene:
      "después de la partida del viajero, Nompanem observa cómo tejedoras, agricultores y mayores enseñan entre sí lo aprendido y resuelven juntos un trabajo de riego",
    avoid:
      "anciano europeo, bastón cruciforme, Saturno, huella luminosa, oro o multitud arrodillada",
  },
  pacanchique: {
    scene:
      "en la casa familiar, Azay abre los ojos después del sueño provocado por la planta; Pacanchique sostiene una vasija vacía y sus mayores comprenden el riesgo que ambos asumieron",
    avoid:
      "huida repetida, romance idealizado, muerte, veneno brillante, palacio o violencia",
  },
  popon: {
    scene:
      "durante la noche, Popón contempla la laguna de Guatavita y ve dos luces pequeñas sobre el agua; la visión se relaciona con su advertencia al zipa, pero no muestra aún a los conquistadores",
    avoid:
      "profeta europeo, vuelo, luna con rostro, cruz, demonios o sangre explícita",
  },
  tomagata: {
    scene:
      "al amanecer, el joven de la lámpara descubre que continúa humano y observa las huellas de Tomagata alejándose por el sendero; una lagartija pequeña toma el sol sobre una piedra",
    avoid:
      "cíclope, monstruo gigante, templo, azufre, transformación grotesca o personaje europeo",
  },
  "toquecha-y-toquilla": {
    scene:
      "junto al lago de Tota, el venado pequeño de arcilla levanta una pata frente a Toquilla mientras el venado grande se interna en la niebla; Toquechá observa desde el lugar donde modeló las figuras",
    avoid:
      "cóndores, venados alados, flecha sangrienta, pareja abrazada, templo o romance principesco",
  },
  "veneracion-a-los-soberanos": {
    scene:
      "después de entregar su mensaje, el hombre sale del cercado y levanta por fin la mirada hacia el valle y el camino dañado; detrás queda la puerta sobria de la audiencia",
    avoid:
      "anciano volando, arco iris, faraón, corona, halo, oro excesivo o multitud arrodillada",
  },
};

export const muiscaHorizontalSceneOverrides = {
  "el-bermejo-aspira-a-ser-rey": {
    scene:
      "en una reunión política sobria de Hunsa, el Bermejo de cabello cobrizo extiende un pequeño regalo envuelto y el cacique de Gámeza mantiene la mano baja en señal de rechazo; Hisca y otros electores observan la tensión",
    avoid: "batalla, corona, armadura, trono, sangre o pose heroica",
  },
  "el-castigo-de-chaquen": {
    scene:
      "junto a una quebrada de Boyacá, Tintoba y Súnuba comprenden que sus pies empiezan a convertirse respectivamente en hierba seca de lindero y planta verde de orilla; Chaquén permanece lejos y no los ataca",
    avoid:
      "pareja real romántica, alas, rayos, erotización o cuerpos atrapados",
  },
  "el-pozo-de-hunzahua": {
    scene:
      "en el Pozo de Hunzahúa de la Tunja colonial, trabajadores abren una zanja y sacan agua con cuerdas y baldes mientras Jerónimo Donato examina el barro; el pozo permanece sereno y no aparece oro",
    avoid:
      "maquinaria moderna, excavación arqueológica contemporánea, cofre, monedas o maldición visible",
  },
  "en-el-principio-fue-el-maiz": {
    scene:
      "en un campo frío del altiplano, Piracá arrodillado entierra las pequeñas cuentas doradas que recuperó; Bochica viajero espera a distancia y un ave negra se aleja sobre los tallos secos",
    avoid:
      "emblema solar de maíz, personaje europeo, pirámides, aureola o lluvia de oro",
  },
  "fu-el-dios-de-la-torpeza": {
    scene:
      "entre Fúquene y el boquerón de Tausa, Fu aparece como personaje humano fantástico y simpático intentando mover una roca demasiado grande durante la noche; su esfuerzo es torpe pero no ridículo",
    avoid:
      "ídolo gigante, demonio, cuerpo musculoso, explosión, pólvora o martillo",
  },
  "la-competencia": {
    scene:
      "una carrera comunitaria comienza en un sendero realista de Sesquilé; jóvenes diversos salen junto a los sembrados mientras Tiniacá y otras personas esperan lejos de la meta",
    avoid:
      "estadio, medallas, arquitectura mesoamericana, ceremonia real o sacrificio",
  },
  "la-herencia": {
    scene:
      "en una reunión familiar sobria de Chía, la hermana mayor extiende una manta entre Tausa y su hermano cacique y participa en la decisión; las tres personas están sentadas al mismo nivel",
    avoid:
      "ejército, trono, corona, palacio, sumisión femenina o ceremonia dinástica",
  },
  "la-historia-del-bermejo": {
    scene:
      "en el camino entre Toca y Sogamoso, el Bermejo de cabello cobrizo carga un tronco sobre los hombros como parte de una prueba de trabajo; la joven de Toca y otras personas observan sin adorarlo",
    avoid:
      "héroe vikingo, músculos exagerados, armadura, corona o mujer presentada como premio",
  },
  "los-dioses-civilizadores": {
    scene:
      "Bochica, viajero mayor de manta sencilla, se sienta al mismo nivel que una tejedora y le muestra cómo mantener pareja la tensión del telar; el camino continúa hacia otros pueblos",
    avoid:
      "piel blanca enfatizada, barba de apóstol, cruz, aureola, templo o cascada",
  },
  meicuchuca: {
    scene:
      "en la orilla del río Funza, la joven entra al agua y su mitad inferior empieza a adoptar con serenidad forma de serpiente acuática; la esposa principal y otras mujeres observan desde tierra",
    avoid:
      "coronas, palacio, erotización, demonio, ojos de fuego o horror corporal",
  },
  nemequene: {
    scene:
      "Nemequene como gobernante humano escucha a dos familias que discuten por un lindero; entre ellas hay un mapa trazado en tierra y al fondo empieza el camino militar que tensiona su idea de justicia",
    avoid:
      "corona, trono dorado, batalla heroica, sacrificio o pose de conquistador",
  },
  nencatacoa: {
    scene:
      "una jornada comunitaria de construcción y tejido avanza en el altiplano; en primer plano hay una pequeña figura animal cubierta con manta, mientras personas diversas levantan una casa",
    avoid:
      "dios-zorro gigante, borrachera, templo clásico, adoración o animal realista dominante",
  },
  popon: {
    scene:
      "Popón habla con firmeza ante el zipa en un cercado sobrio; entre ambos, una pequeña vasija refleja agua que se oscurece como imagen del sueño y obliga al gobernante a escuchar una advertencia",
    avoid:
      "profeta europeo, cruz, vuelo, demonios, conquistadores heroicos o sangre explícita",
  },
  "toquecha-y-toquilla": {
    scene:
      "en la orilla neblinosa del lago de Tota, Toquechá modela dos venados de arcilla húmeda; Toquilla todavía no está presente y una pata del venado pequeño empieza apenas a moverse",
    avoid:
      "cóndores, venados alados, flecha, pareja romántica, templo o iconografía mesoamericana",
  },
};

export function withMuiscaImagePrompts(myth) {
  const vertical = muiscaVerticalImageScenes[myth.slug];
  if (!vertical) {
    throw new Error(`${myth.slug}: falta la segunda escena visual muisca.`);
  }

  const horizontalOverride = muiscaHorizontalSceneOverrides[myth.slug];
  const horizontal = horizontalOverride
    ? horizontalPrompt(horizontalOverride.scene, horizontalOverride.avoid)
    : myth.image_prompt_horizontal || myth.image_prompt;

  if (!horizontal) {
    throw new Error(`${myth.slug}: falta el prompt horizontal principal.`);
  }

  return {
    ...myth,
    image_prompt: horizontal,
    image_prompt_horizontal: horizontal,
    image_prompt_vertical: verticalPrompt(vertical.scene, vertical.avoid),
  };
}
