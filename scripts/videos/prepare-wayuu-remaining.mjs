#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const root = path.resolve(import.meta.dirname, "../..");
process.chdir(root);
const sha = (value) => crypto.createHash("sha256").update(value).digest("hex");
const read = (file) => JSON.parse(fs.readFileSync(file, "utf8"));
const stylePath = "content/videos/wayuu/channel-dna.v3.json";
const generation = read(stylePath).generation;

const bibleFiles = {
  hermanos: "content/mitos-visuales/_openai/wayuu/biblia-v3-production/wayuu-v3-production-06-los-dos-hermanos-medium/selection.json",
  mellizos: "content/mitos-visuales/_openai/wayuu/biblia-v3-production/wayuu-v3-production-09-los-mellizos-transformadores-medium/selection.json",
  mareiwa: "content/mitos-visuales/_openai/wayuu/biblia-v3-production/wayuu-v3-production-10-maleiwa-medium/selection.json",
  ulepala: "content/mitos-visuales/_openai/wayuu/biblia-v3-production/wayuu-v3-production-19-ulepala-medium/selection.json",
  umarala: "content/mitos-visuales/_openai/wayuu/biblia-v3-production/wayuu-v3-production-22-umarala-medium/selection.json",
  serranias: "content/mitos-visuales/_openai/wayuu/biblia-v3-production/wayuu-v3-production-25-serranias-de-la-guajira-medium/selection.json",
  waleker: "content/mitos-visuales/_openai/wayuu/biblia-v3-production/wayuu-v3-production-26-waleker-el-origen-del-tejido-medium/selection.json"
};
const bible = Object.fromEntries(Object.entries(bibleFiles).map(([key, file]) => [key, read(file).selections]));

const cameras = [
  ["elevada oblicua desde una ladera", "gran plano general territorial", ["papel cercano", "sujetos pequeños", "sendero diagonal", "territorio medio", "cielo recortado"]],
  ["lateral a la altura de manos u objeto", "macro narrativo sin rostro", ["borde cercano", "manos u objeto", "ropa parcial", "suelo medio", "fondo desenfocado"]],
  ["contrapicado extremo desde el suelo", "plano general bajo", ["materia rasante", "pies o base", "cuerpos completos", "relieve", "cielo amplio"]],
  ["cenital verdadero de 90 grados", "detalle gráfico de suelo", ["borde superior", "acción central", "huellas u objetos", "sombras planas", "estratos inferiores"]],
  ["lateral teleobjetivo sin cielo", "plano general comprimido", ["franja cercana", "sujeto uno", "acción media", "sujeto dos", "bandas comprimidas"]],
  ["rasante a través de una grieta o vegetación", "gran plano general de fuga", ["recorte extremo", "vacío cercano", "acción distante", "territorio", "franja de salida"]],
  ["alta diagonal de 60 grados", "plano conjunto arquitectónico", ["trama cercana", "acción uno", "estructura central", "acción dos", "horizonte mínimo"]],
  ["sobre el hombro con primer término dominante", "plano medio ambiental", ["hombro o marco", "gesto", "objeto o sujeto central", "fondo activo", "territorio"]],
  ["subjetiva baja desde la sombra", "plano general con primer término oscuro", ["sombra cercana", "señal", "acción media", "figuras", "arquitectura o paisaje"]],
  ["perfil distante con horizonte desplazado", "plano general lateral", ["materia cercana", "sujeto lateral", "acción", "segundo sujeto", "horizonte alto"]],
  ["cenital diagonal amplio", "plano de consecuencia", ["sombra", "objeto central", "figuras parciales", "trama territorial", "borde de salida"]],
  ["macro frontal de materia", "primerísimo plano de objeto", ["fibra cercana", "objeto", "cambio material", "sombra interna", "fondo abstracto"]],
  ["contrapicado enmarcado entre postes o rocas", "plano general enmarcado", ["marco cercano", "umbral", "sujetos pequeños", "acción", "paisaje estrecho"]],
  ["teleobjetivo profundo a través de una abertura", "plano largo comprimido", ["abertura cercana", "vacío", "acción lejana", "capas medias", "fondo comprimido"]],
  ["aérea oblicua desde atrás", "gran plano general de relación", ["estructura cercana", "sujetos", "trayectoria", "territorio amplio", "cielo mínimo"]],
  ["a ras del suelo mirando hacia la distancia", "plano final de fuga", ["materia muy cercana", "sendero", "figuras pequeñas", "paisaje", "horizonte"]]
];

const stories = {
  "los-dominios-de-juya": {
    title: "Los dominios de Juyá", bible: "ulepala", triptych: "wayuu-juya-final-selection",
    thesis: "Cruzar al dominio de Juyá obliga a reconocer que la apariencia no agota la identidad ni concede derecho ilimitado sobre otros seres.",
    palette: "Azul lluvia, verde húmedo mate, ocre de estancia, carbón profundo, rojo contenido y crema de frutos; sin neón, sangre ni brillo divino.",
    limitation: "Esta ficha es un episodio focal de Ulépala y El viaje del más allá, no una tercera versión independiente.",
    models: ["ulepala__identity_sheet","aparicion_juya_ulepala__identity_sheet","estancia_juya_ulepala__spatial_model","banco_jabali_ulepala__state_sheet","armas_caceria_juya_ulepala__object_sheet","tunas_conejos_ulepala__state_sheet","majayuras_ahuyamas_ulepala__state_sheet","jovenes_venados_ulepala__state_sheet","aprendizajes_juya_ulepala__phenomenon_rule"],
    inventory: {
      viajero: ["person","Un viajero adulto de la versión enfocada, vestido de forma completa y sobria; identidad guiada por la ficha de Ulépala sin fabricar un tercer testigo.",["ulepala__identity_sheet"]],
      juya: ["person","Juyá como anfitrión y lluvia con agencia, figura adulta de papel guiada por su modelo; no rey occidental ni dios con corona.",["aparicion_juya_ulepala__identity_sheet"]],
      dominio: ["setting","Estancia húmeda y descomunal de Juyá, con senderos, cultivos y corrales de papel; abundancia con límites.",["estancia_juya_ulepala__spatial_model"]],
      banco: ["object","Un asiento cuya apariencia animal cambia según la versión; sin ataque ni monstruo.",["banco_jabali_ulepala__state_sheet"]],
      frutos: ["object","Patilla y auyama de papel, abundantes pero concretas; una tajada basta sin banquete ostentoso.",["majayuras_ahuyamas_ulepala__state_sheet"]],
      presas: ["animal","Corzo, venado y conejos vistos primero como personas; transformaciones no gráficas y sin impacto visible.",["tunas_conejos_ulepala__state_sheet","jovenes_venados_ulepala__state_sheet"]],
      armas: ["object","Arco y flechas de caza entregados para el aprendizaje; nunca apuntados al espectador ni usados con sangre.",["armas_caceria_juya_ulepala__object_sheet"]],
      pulowi: ["magic_subject","Límite territorial de Pülowi como ausencia o umbral material, sin cuerpo inventado ni demonización.",[]],
      oficios: ["object","Lazos, fibras, tejido e instrumentos como prácticas aprendidas, no tesoro instantáneo.",["aprendizajes_juya_ulepala__phenomenon_rule"]]
    },
    voices: [
      "Después de cruzar Jepira, un viajero tomó el camino equivocado. Caminó durante una luna hasta llegar al dominio de Juyá, la lluvia.",
      "Juyá lo recibió como pariente. El visitante temió al asiento que parecía animal, pero al sentarse descubrió que podía sostenerlo sin hacerle daño.",
      "Una sola tajada de patilla bastó para saciarlo. Allí la abundancia no obedecía las medidas que el viajero conocía.",
      "Cuando Juyá pidió un corzo, el viajero sólo vio a un hombre con arco y corona vegetal. Debía aprender que las apariencias cambiaban entre dominios.",
      "También vio jóvenes elegantes, jugadores y familias donde Juyá reconocía venados, conejos y frutos. La transformación no justificaba tratar personas reales como presas.",
      "El aprendizaje resultaba inquietante: para obtener alimento debía herir figuras primero humanas. El relato cambia categorías, pero no concede una licencia moral ilimitada.",
      "Juyá le enseñó caza, pastoreo, lazos, tejidos e instrumentos. La abundancia requería prácticas y Pülowi marcaba aquello que no podía tomarse sin límite.",
      "Al regresar, las cosas recuperaron su apariencia habitual. El viajero ya no pudo creer que una forma visible agotara la identidad de un ser."
    ],
    shots: [
      ["Camino equivocado","El viajero, muy pequeño, cruza una ruta diagonal que se separa de Jepira hacia un territorio húmedo desconocido.",["viajero","dominio"],false],
      ["Una luna de camino","Detalle de sandalias gastadas y una pequeña reserva de agua junto a una sombra de luna recortada; ningún rostro.",["viajero","dominio"],false],
      ["Juyá recibe al visitante","Juyá espera al fondo de la estancia y señala un lugar; el viajero entra pequeño desde abajo.",["viajero","juya","dominio"],false],
      ["El asiento cambia de sentido","Vista cenital del asiento: un extremo conserva curva animal y el otro se lee como banco estable; no ataque.",["viajero","banco","dominio"],true],
      ["Una tajada basta","Juyá ofrece una única tajada de patilla; ambos adultos quedan separados por la mesa baja, sin banquete.",["viajero","juya","frutos","dominio"],false],
      ["La medida imposible","La tajada pequeña ocupa primer término y el viajero satisfecho queda muy lejos; escala alterada sin gigantismo.",["viajero","frutos","dominio"],true],
      ["El hombre que era corzo","El viajero observa desde arriba a una figura adulta con arco y corona vegetal en un claro; aún no ve animal.",["viajero","presas","armas","dominio"],false],
      ["Juyá corrige la mirada","Sobre el hombro de Juyá, la silueta humana y la sombra de un corzo se superponen sin impacto ni herida.",["viajero","juya","presas","armas"],true],
      ["El rico y el venado","Desde la sombra, un hombre de ropa completa cruza mientras su reflejo de papel adopta forma de venado.",["viajero","presas","dominio"],true],
      ["El juego y los conejos","Jugadores distantes entre lianas; pequeñas sombras de conejo aparecen separadas en el suelo, sin reemplazo gráfico brusco.",["viajero","presas","dominio"],true],
      ["Familias y cultivos","Desde arriba, figuras humanas rodean patillas y auyamas cuyos contornos comparten sólo partes de sus siluetas.",["viajero","frutos","dominio"],true],
      ["La flecha se detiene","Macro de una flecha suspendida antes de salir del arco; la mano del viajero duda, sin blanco humano visible.",["viajero","armas"],false],
      ["Aprender prácticas","A través de postes, el viajero practica un lazo mientras fibras e instrumentos reposan separados; Juyá observa lejos.",["viajero","juya","oficios","dominio"],false],
      ["El límite de Pülowi","Una abertura profunda conduce a una franja oscura que corta el sendero; el viajero se detiene antes del umbral.",["viajero","pulowi","dominio"],true],
      ["Regreso al mundo humano","El viajero sale del territorio húmedo hacia la península seca; objetos y animales recuperan proporciones ordinarias.",["viajero","dominio","presas","frutos"],false],
      ["La forma no basta","El viajero se aleja por el sendero; una sola sombra animal queda desfasada de su silueta como memoria editorial.",["viajero","dominio","presas"],true]
    ]
  },
  "los-dos-hermanos": {
    title: "Los dos hermanos", bible: "hermanos", triptych: "wayuu-hermanos-final-selection",
    thesis: "La destreza de la hermana no vuelve justa toda represalia ni puede devolver la vida perdida.",
    palette: "Azul noche, terracota, crudo, carbón y verde seco; ámbar sólo en el velorio, sin rojo de sangre ni victoria dorada.",
    limitation: "La violencia se mantiene fuera de campo; la mediación final es una señal editorial y no inserta un palabrero no presente en la fuente.",
    models: ["hermana_arquera__identity_sheet","hermana_arquera__state_sheet","hermano_arquera__identity_sheet","perro_hermanos__identity_sheet","mula_hermanos__identity_sheet","chinchorro__object_sheet"],
    inventory: {
      hermana: ["person","Hermana adulta, arquera precisa, ropa completa según modelo y postura digna; no guerrera fantástica.",["hermana_arquera__identity_sheet","hermana_arquera__state_sheet"]],
      hermano: ["person","Hermano adulto de la arquera, vestido según modelo; vivo sólo antes de la elipsis y cubierto durante el duelo.",["hermano_arquera__identity_sheet"]],
      arco: ["object","Arco y flechas sencillos de caza y práctica; nunca sangre, impacto o pose celebratoria.",[]],
      rebano: ["animal","Rebaño mixto de animales domésticos como bien familiar y motivo del conflicto; conteo no censal.",[]],
      ladrones: ["supporting_people","Grupo distante de adultos con ropa completa, sin rasgos étnicos inventados ni muerte visible.",[]],
      perro: ["animal","Perro doméstico leal que regresa y permanece durante el duelo.",["perro_hermanos__identity_sheet"]],
      mula: ["animal","Mula que devuelve el cuerpo cubierto, sin carga gráfica.",["mula_hermanos__identity_sheet"]],
      rancheria: ["setting","Patio familiar y viviendas sencillas de papel, corral y sendero; no fortaleza.",[]],
      chinchorro: ["object","Chinchorro del duelo con cuerpo completamente cubierto o vacío según el plano.",["chinchorro__object_sheet"]],
      familias: ["supporting_people","Dos pequeños grupos familiares frente a frente con espacio para palabra y reparación; sin ceremonia inventada.",[]]
    },
    voices: [
      "Una hermana y un hermano practicaban con arco. Ella acertaba con mayor frecuencia, aunque en público algunos preferían elogiarlo a él.",
      "Un grupo robó parte del rebaño. El hermano salió a perseguirlo y pidió a su hermana quedarse para proteger la casa.",
      "Al anochecer regresaron el perro y la mula. El joven no caminaba con ellos: la mula llevaba su cuerpo de vuelta a la familia.",
      "La hermana preparó sus armas y siguió las huellas. Su puntería le permitió recuperar animales, pero el dolor amplió la persecución más allá de los responsables inmediatos.",
      "No mostramos las muertes. La flecha, las sombras y el ganado que vuelve bastan para señalar una represalia que creció sin reparar la pérdida.",
      "En la ranchería recibieron al hermano y prepararon el duelo. Algunos admiraron a la arquera; otros vieron nuevas deudas junto a los bienes recuperados.",
      "El perro permaneció cerca del chinchorro y la mula descansó. Su lealtad sostuvo la memoria mientras parientes de ambos lados tuvieron que hablar.",
      "La hermana fue la mejor arquera y defendió la memoria de su hermano. Su victoria, sin embargo, no lo devolvió ni cerró por sí sola el conflicto."
    ],
    shots: [
      ["La mejor puntería","Los dos hermanos practican separados ante un blanco lejano; la flecha de ella ocupa el centro exacto.",["hermana","hermano","arco","rancheria"],false],
      ["La flecha en el blanco","Macro lateral del blanco y dos flechas: la de la hermana centrada, la otra ligeramente apartada; sólo manos parciales.",["hermana","hermano","arco"],false],
      ["El robo del rebaño","Desde el suelo, animales cruzan el horizonte guiados por figuras adultas muy distantes; la casa queda atrás.",["rebano","ladrones","rancheria"],false],
      ["El hermano parte","Cenital del sendero: huellas del rebaño salen y las sandalias del hermano las siguen; la hermana queda en el umbral.",["hermana","hermano","rebano","rancheria"],false],
      ["Regresan sin él","La mula y el perro entran de noche; una carga completamente cubierta descansa sobre la mula, sin anatomía visible.",["hermana","perro","mula","rancheria"],false],
      ["La ausencia se entiende","A ras del suelo, la hermana ve las sandalias del hermano junto al sendero; mula y perro quedan muy lejos.",["hermana","perro","mula","rancheria"],false],
      ["Seguir las huellas","Vista alta diagonal de la hermana tomando arco y carcaj mientras las huellas se alejan en zigzag.",["hermana","arco","rancheria"],false],
      ["Esperar antes de actuar","Sobre el hombro de la hermana, el campamento distante aparece entre rocas; nadie herido, ninguna flecha lanzada.",["hermana","arco","ladrones"],false],
      ["La puntería desde la sombra","Subjetiva baja detrás de hojas: una única flecha sale hacia fuera de cuadro; los adultos quedan como siluetas lejanas.",["hermana","arco","ladrones"],false],
      ["El ganado vuelve","Perfil distante: la hermana guía el rebaño recuperado mientras el sendero enemigo queda vacío al fondo.",["hermana","rebano"],false],
      ["Riqueza y ausencia","Cenital diagonal del patio: animales y bienes ocupan un lado; el chinchorro cubierto queda aislado en el otro.",["hermana","rebano","chinchorro","rancheria"],false],
      ["La flecha se curva","Macro de una flecha de papel cuya punta gira hacia sus propias plumas, metáfora editorial de la represalia.",["arco"],true],
      ["El duelo","Entre postes, la familia se reúne lejos alrededor del chinchorro cubierto; la hermana permanece separada.",["hermana","chinchorro","familias","rancheria"],false],
      ["Perro y mula permanecen","A través del umbral, perro y mula descansan junto al patio vacío; el chinchorro queda al fondo.",["perro","mula","chinchorro","rancheria"],false],
      ["Hablar entre familias","Dos grupos pequeños se enfrentan sin armas, separados por una franja vacía; la hermana está a un costado.",["hermana","familias","rancheria"],false],
      ["Dos verdades","La hermana se aleja del corral; su arco baja hacia el suelo y la sombra de la flecha curva permanece detrás.",["hermana","arco","rebano","rancheria"],true]
    ]
  },
  "los-mellizos-transformadores": {
    title: "Los mellizos transformadores", bible: "mellizos", triptych: "wayuu-mellizos-final-selection",
    thesis: "Los mellizos reorganizan el mundo sin borrar el daño de origen ni dividir sus acciones en bondad y crueldad simples.",
    palette: "Azul marino, niebla gris, arena cálida, verde Macuira, terracota y blanco nube; índigo para Wanurü, sin sangre ni naranja de espectáculo.",
    limitation: "Las versiones de Paz Ipuana y Perrin se distinguen; que un mellizo reciba el nombre Maleiwa en otra versión no fija una genealogía única.",
    models: ["manna__identity_sheet","manna__state_sheet","kalamantuunay__identity_sheet","hombres_tigre__group_grammar","tumajule__identity_sheet","tumajule__state_sheet","peeliyuu__identity_sheet","peeliyuu__state_sheet","aaner__identity_sheet","tinaja_manna__object_sheet","costa_mar_guajira__environment_model"],
    inventory: {
      manna: ["person","Manna adulta, madre en huida, vestida completamente y nunca sexualizada ni mostrada herida.",["manna__identity_sheet","manna__state_sheet"]],
      mellizos: ["person","Tumaju’le y Peeliyuu como dos niños diferenciados, vestidos y pequeños; ingenio sin caricatura corporal.",["tumajule__identity_sheet","tumajule__state_sheet","peeliyuu__identity_sheet","peeliyuu__state_sheet"]],
      kalamantuunay: ["person","Anciana Kalamantuunay con identidad aprobada; cuidadora ambigua y adversaria, sin bruja europea.",["kalamantuunay__identity_sheet"]],
      tigres: ["supporting_people","Hombres-tigre adultos en ropa completa con rasgos felinos materiales contenidos; sin gore.",["hombres_tigre__group_grammar"]],
      aaner: ["animal","Aáner, una paloma de papel que revela el origen sin hablar mediante texto.",["aaner__identity_sheet"]],
      tinaja: ["object","Tinaja ensamblada de papel usada como escondite; nunca cerámica realista.",["tinaja_manna__object_sheet"]],
      territorio: ["setting","Morros, costa y mar de Alta Guajira como marco aproximado del ciclo.",["costa_mar_guajira__environment_model"]],
      nube: ["magic_subject","Transformación de uno de los mellizos en nube de hojas blancas separadas; el otro sigue visible como niño.",[]],
      wanuru: ["magic_subject","Pérdida de forma de los perseguidores asociada con Wanurü como cortes índigo sin cuerpos monstruosos nuevos.",[]],
      memoria: ["object","Restos no anatómicos de manta, fibra y huellas que permiten comprender la ausencia de Manna sin representar violencia.",[]]
    },
    voices: [
      "Manna, hija de la Tierra y del Rocío de las Nieblas, vivía cerca de los morros y el mar. Tras un encuentro narrado de formas distintas, huyó embarazada.",
      "Llegó a la casa de Kalamantuunay. La anciana intentó ocultarla en una tinaja cuando regresaron sus hijos, hombres-tigre que percibían una presencia extraña.",
      "Manna no sobrevivió. El relato describe que los mellizos Tumaju’le y Peeliyuu persistieron mediante restos y transformación; aquí la violencia permanece fuera de campo.",
      "Kalamantuunay los crió como nietos. Los niños aprendieron a cazar y superaron a los hombres-tigre por rapidez e ingenio, no por fuerza espectacular.",
      "Aáner y otras aves hicieron dudar a los mellizos. Al buscar pruebas, comprendieron que la historia sobre su madre ocultaba la responsabilidad de aquella casa.",
      "Los mellizos prepararon una venganza. No mostramos cuerpos ni antropofagia: la mesa vacía y la persecución señalan el descubrimiento y sus consecuencias.",
      "Durante la huida, uno se volvió nube. Los perseguidores perdieron su forma y quedaron relacionados con Wanurü, fuerzas dañinas que acompañarían el mundo humano.",
      "La victoria no restauró a Manna. Los mellizos siguieron transformando la península; en otra versión uno recibe el nombre Maleiwa y se acerca al origen humano."
    ],
    shots: [
      ["Manna entre morros y mar","Manna camina pequeña entre costa y morros; dos capas abstractas de tierra y niebla enmarcan su origen sin cuerpos divinos.",["manna","territorio"],false],
      ["Habla con quienes lleva dentro","Macro de sus manos sobre la manta cerrada; dos pequeños pliegues internos responden sin anatomía ni sexualización.",["manna","territorio"],true],
      ["La casa de Kalamantuunay","Manna se acerca a la casa mientras la anciana abre el umbral y la tinaja queda visible dentro.",["manna","kalamantuunay","tinaja","territorio"],false],
      ["El escondite","Cenital de la tinaja cerrada y tres sombras felinas entrando desde bordes distintos; ningún cuerpo dentro visible.",["manna","kalamantuunay","tigres","tinaja"],false],
      ["Después de la violencia","La casa queda sin Manna; dos pequeños envoltorios de fibra reposan separados junto a un jirón de manta, sin restos anatómicos.",["mellizos","memoria","kalamantuunay"],false],
      ["La anciana los encuentra","Desde una grieta baja, Kalamantuunay se inclina a distancia hacia los dos envoltorios que comienzan a abrirse.",["mellizos","kalamantuunay","memoria"],true],
      ["Criados como nietos","Vista alta de los dos niños diferenciados aprendiendo a tender una pequeña trampa mientras la anciana observa.",["mellizos","kalamantuunay","territorio"],false],
      ["Aáner contradice la historia","Sobre el hombro de un mellizo, Aáner ocupa una rama baja y señala con el vuelo un jirón de la manta de Manna.",["mellizos","aaner","memoria"],false],
      ["Buscar pruebas","Desde la sombra de la casa, los mellizos levantan dos fibras iguales a la manta, sin abrir recipientes ni mostrar restos.",["mellizos","memoria","kalamantuunay"],false],
      ["Preparar la respuesta","Perfil distante de los dos niños organizando una mesa y una salida; la anciana queda fuera de cuadro.",["mellizos","kalamantuunay"],false],
      ["La mesa revela la ausencia","Cenital diagonal de una mesa vacía con un asiento de la anciana y tres sombras de hombres-tigre que se detienen.",["kalamantuunay","tigres","memoria"],false],
      ["La persecución empieza","Macro de huellas pequeñas que se bifurcan mientras huellas felinas adultas llegan detrás; ninguna persona visible.",["mellizos","tigres","territorio"],false],
      ["Uno se vuelve nube","Entre rocas, un niño permanece visible y el otro se desarma en hojas blancas de nube que cruzan el paso.",["mellizos","nube","territorio"],true],
      ["Los perseguidores pierden forma","A través de una abertura, las siluetas adultas se fragmentan en cortes índigo sin formar nuevas criaturas.",["tigres","wanuru","territorio"],true],
      ["Recorrer la península","Los dos mellizos vuelven a verse como niños y atraviesan un territorio amplio con huellas de cambios materiales detrás.",["mellizos","territorio","memoria"],false],
      ["Figuras de paso","Desde el suelo, los mellizos se alejan entre una franja humana distante y nubes; no se identifica a uno definitivamente con Mareiwa.",["mellizos","territorio","nube"],true]
    ]
  },
  "maleiwa": {
    title: "Mareiwa", bible: "mareiwa", triptych: "wayuu-mareiwa-final-selection",
    thesis: "Mareiwa vuelve habitable una península de agua intermitente mediante transformación, dispersión y acuerdos, no como creador inmóvil.",
    palette: "Azul mar y tormenta, carbón de serranía, arena clara, verde cardón, amarillo turpial y blanco lluvia; sin oro divino ni bandera literal.",
    limitation: "Las versiones de nacimiento y creación permanecen como variantes y no se funden en una biografía única.",
    models: ["olivo_mareiwa__botanical_sheet","tormenta_nacimiento_mareiwa__phenomenon_rule","honda_piedra_mareiwa__object_sheet","pozos_salados_mareiwa__spatial_model","pava_semillera__identity_sheet","turpial_semillero__identity_sheet","paloma_semillera__identity_sheet","tuna_higo__botanical_sheet","primeros_wayuu__group_grammar","outsu_lluvia_mareiwa__group_grammar"],
    inventory: {
      mareiwa: ["person","Mareiwa como figura adulta cambiante guiada por los trípticos; ropa completa, sin corona, halo o anatomía gigantesca.",[]],
      olivo: ["plant","Olivo resistente de una versión de nacimiento, plano y botánicamente sobrio.",["olivo_mareiwa__botanical_sheet"]],
      tormenta: ["magic_subject","Tormenta de otra versión de llegada; hojas de nube y lluvia, no rayos heroicos.",["tormenta_nacimiento_mareiwa__phenomenon_rule"]],
      mar: ["setting","Península parcialmente cubierta por mar de capas azules; costa y serranías reconocibles sin mapa literal.",[]],
      honda: ["object","Honda y una piedra de papel usadas para retirar el mar; no arma contra seres vivos.",["honda_piedra_mareiwa__object_sheet"]],
      pozos: ["setting","Pozos salados dejados por el mar retirado, sin convertirlos en abundancia dulce.",["pozos_salados_mareiwa__spatial_model"]],
      aves: ["animal","Pava, turpial y paloma sembradoras diferenciadas y naturales.",["pava_semillera__identity_sheet","turpial_semillero__identity_sheet","paloma_semillera__identity_sheet"]],
      plantas: ["plant","Cardones, tunas e iguarayas en manchas contenidas, no selva.",["tuna_higo__botanical_sheet"]],
      primeros: ["supporting_people","Primeros Wayuu como grupo de adultos y familias con ropa completa; sin marcas claniles inventadas.",["primeros_wayuu__group_grammar"]],
      piaches: ["supporting_people","Especialistas rituales adultos que llaman la lluvia en grupo sobrio; sin espectáculo ceremonial.",["outsu_lluvia_mareiwa__group_grammar"]]
    },
    voices: [
      "Mareiwa no aparece siempre del mismo modo. Unas versiones lo sitúan bajo un olivo resistente; otras relacionan su llegada con una tormenta.",
      "También se cuenta que encontró la península cubierta por el mar. Subió a una altura, tensó la honda y lanzó una piedra.",
      "El agua retrocedió. La tierra apareció entre serranías y en los huecos quedaron pozos salados, memoria material de la antigua extensión del mar.",
      "Todavía faltaba alimento. Mareiwa reunió a las aves y les pidió volar lejos, comer frutos y regresar sobre la nueva tierra.",
      "Pavas, turpiales y palomas dispersaron semillas. Nacieron cardones, tunas e iguarayas en manchas, esperando la lluvia en vez de cubrir toda la península.",
      "Mareiwa reunió después a los primeros Wayuu. Entregó animales y territorios y ordenó relaciones entre grupos, sin que esta imagen invente marcas claniles.",
      "Llegaron sequías. Los piaches cantaron por lluvia y las nubes se formaron sobre las serranías. El agua tocó primero los cerros y despertó las plantas.",
      "Juyá siguió su viaje y el verano volvió. Lo constante no era una figura inmóvil, sino la tarea de hacer habitable un mundo de agua intermitente."
    ],
    shots: [
      ["Bajo el olivo","Mareiwa aparece pequeño bajo un olivo que conserva hojas durante el verano; esta es una variante, no la única escena de origen.",["mareiwa","olivo"],false],
      ["La versión de la tormenta","Macro de lluvia de papel sobre una huella que comienza bajo nubes; Mareiwa no aparece dos veces.",["mareiwa","tormenta"],true],
      ["La península cubierta","Desde el suelo de un cerro, Mareiwa contempla agua extendida entre picos apenas visibles.",["mareiwa","mar"],false],
      ["Una piedra en la honda","Cenital de manos adultas tensando la honda con una única piedra; el mar ocupa bordes opuestos.",["mareiwa","honda","mar"],false],
      ["El lanzamiento","Perfil teleobjetivo de Mareiwa en la cima; la piedra cruza un cielo estrecho y nadie está en su trayectoria.",["mareiwa","honda","mar"],false],
      ["El mar retrocede","A ras del relieve, bandas de agua se pliegan hacia el horizonte y dejan tierra seca detrás.",["mareiwa","mar","pozos"],true],
      ["Pozos de memoria","Vista alta diagonal de varios pozos salados separados sobre la tierra nueva; Mareiwa queda diminuto arriba.",["mareiwa","pozos","mar"],false],
      ["Reunir a las aves","Sobre el hombro de Mareiwa, pava, turpial y paloma ocupan ramas distintas y miran hacia la península.",["mareiwa","aves","plantas"],false],
      ["Volar lejos","Subjetiva baja bajo una bandada: las tres especies cruzan capas de cielo con semillas pequeñas en el pico.",["aves","plantas","mar"],false],
      ["Caen las semillas","Perfil distante de semillas que descienden y primeros brotes que aparecen en puntos separados.",["aves","plantas"],true],
      ["La península reverdece por manchas","Cenital diagonal de cardones, tunas e iguarayas distribuidos en islas verdes sobre terreno mayormente seco.",["plantas","mar","pozos"],true],
      ["Un fruto resistente","Macro frontal de una iguaraya de papel entre espinas planas; gotas escasas permanecen entre hojas.",["plantas"],false],
      ["Reunir a los primeros Wayuu","Entre piedras, Mareiwa recibe a grupos familiares pequeños con animales separados; no hay signos pintados.",["mareiwa","primeros"],false],
      ["Territorios y relaciones","A través de dos rocas, familias y rebaños se distribuyen por senderos distintos sin fronteras dibujadas.",["mareiwa","primeros"],false],
      ["Llamar la lluvia","Vista aérea oblicua: especialistas cantan pequeños en un patio mientras nubes se reúnen sobre serranías lejanas.",["piaches","tormenta","plantas"],true],
      ["Agua que llega y se va","Desde el suelo, lluvia toca cerros y una franja verde despierta; Mareiwa queda como silueta distante, no dueño inmóvil.",["mareiwa","tormenta","plantas","pozos"],true]
    ]
  },
  "serranias-de-la-guajira": {
    title: "Serranías de La Guajira", bible: "serranias", triptych: "wayuu-serranias-final-selection",
    thesis: "Los viajeros detenidos permanecen como serranías, memoria territorial de una marcha incompleta y de la tarea creadora de Mareiwa.",
    palette: "Arena ceniza, carbón, azul mar, verde ita, ocre caminante y blanco ave; transformación mineral sobria, sin monumentos humanos realistas.",
    limitation: "Los nombres y lugares siguen la versión reauditorada de Juancito Iguarán; no se inventan especies, marcas claniles o fronteras.",
    models: ["wojoro__identity_sheet","epits__identity_sheet","wososopo__identity_sheet","juyouira__identity_sheet","tsitsi__identity_sheet","itojoro__identity_sheet","guarapu__identity_sheet","monkii__group_grammar","transformacion_viajeros_serranias__phenomenon_rule","retiro_mar_serranias__phenomenon_rule","dispersion_semillas_aves_serranias__phenomenon_rule","organizacion_vida_serranias__phenomenon_rule","uchi_juroteka__spatial_model","akuwa__spatial_model"],
    inventory: {
      viajeros: ["supporting_people","Grupo de viajeros adultos diferenciados, con ropa completa y reservas pequeñas; cansancio sin agonía gráfica.",["wojoro__identity_sheet","epits__identity_sheet","wososopo__identity_sheet","juyouira__identity_sheet","tsitsi__identity_sheet","itojoro__identity_sheet","guarapu__identity_sheet","monkii__group_grammar"]],
      itojoro: ["person","Itojoro como guía adulto que avanza delante y también queda en el paisaje.",["itojoro__identity_sheet"]],
      mareiwa: ["person","Mareiwa adulto y pequeño frente al territorio; sin corona ni escala divina.",[]],
      ruta: ["setting","Ruta desde Uchi Juroteka hacia norte, con Maiceo, Akuwa y mar como referencias aproximadas.",["uchi_juroteka__spatial_model","akuwa__spatial_model"]],
      serranias: ["magic_subject","Transformación de figuras en lomas mediante capas minerales, sin estatuas anatómicas.",["transformacion_viajeros_serranias__phenomenon_rule"]],
      mar: ["setting","Mar que retrocede y deja pozos salados; agua de papel, no mapa.",["retiro_mar_serranias__phenomenon_rule"]],
      honda: ["object","Honda y una piedra de Mareiwa, usadas hacia el horizonte vacío.",[]],
      aves: ["animal","Bandadas de aves sembradoras naturales, sin especies adicionales afirmadas.",["dispersion_semillas_aves_serranias__phenomenon_rule"]],
      plantas: ["plant","Cardones, iguarayas, ita y plantas resistentes según modelos; no selva.",[]],
      primeros: ["supporting_people","Primeros Wayuu reunidos entre piedras, vestidos, sin marcas claniles inventadas.",["organizacion_vida_serranias__phenomenon_rule"]]
    },
    voices: [
      "Varios hombres salieron de Uchi Juroteka hacia el norte por encargo de Mareiwa. Llevaban agua, sandalias y la confianza de quienes aún no conocían aquella sed.",
      "Wojoro fue el primero en detenerse. Después cedieron Epits, Wososopo, Juyouirá y Tsitsi, cada uno en un punto distinto del camino.",
      "Itojoro seguía delante y prometía una tierra mejor. Los Monkii alcanzaron el mar; Guarapú se tendió a descansar y quedó dormido.",
      "Al final Itojoro también se detuvo, con los pies heridos cerca de una mata de ita. La marcha no alcanzó el destino anunciado.",
      "Mareiwa contempló el camino incompleto. Los viajeros no serían borrados: sus cuerpos dejaron de ser figuras y levantaron un sistema de cerros y morros.",
      "Desde Tsitsi, Mareiwa lanzó una piedra hacia Kasuto. El mar retrocedió, descubrió la península y dejó pozos salados como memoria.",
      "Luego envió aves a buscar frutos. Las semillas dispersas hicieron nacer cardones, iguarayas y plantas capaces de resistir el verano.",
      "Entre las piedras de Arachí reunió a los primeros Wayuu. Desde entonces las serranías son relieve, nombres y viajeros que aprendieron a permanecer."
    ],
    shots: [
      ["Salida de Uchi Juroteka","Un grupo de viajeros sale en diagonal desde un asentamiento mínimo; Itojoro abre la marcha y todos llevan ropa completa.",["viajeros","itojoro","ruta"],false],
      ["Agua y sandalias","Macro lateral de una reserva pequeña y varias sandalias distintas; ninguna herida o gesto de agonía.",["viajeros","ruta"],false],
      ["Wojoro se detiene","Desde el suelo, un viajero queda sentado junto al camino mientras el grupo continúa pequeño hacia el horizonte.",["viajeros","ruta"],false],
      ["Otros puntos del camino","Cenital del sendero con cuatro pausas separadas marcadas por sandalias, sombra y recipientes vacíos, sin cuerpos caídos.",["viajeros","ruta"],false],
      ["Itojoro sigue delante","Perfil teleobjetivo: Itojoro llama desde una cresta y el grupo queda distribuido en cinco planos, sin amontonarse.",["viajeros","itojoro","ruta"],false],
      ["Los Monkii llegan al mar","Rasante entre rocas hacia varias figuras pequeñas que alcanzan la costa; el agua ocupa una franja distante.",["viajeros","mar","ruta"],false],
      ["El sueño de Guarapú","Vista alta de un viajero que descansa bajo una sombra plana mientras las huellas del grupo continúan.",["viajeros","ruta","plantas"],false],
      ["Itojoro junto a la ita","Sobre el hombro del guía, una mata de ita y Akuwa cierran el trayecto; su mano baja hacia la sandalia.",["itojoro","ruta","plantas"],false],
      ["Mareiwa mira la marcha","Desde una sombra mineral, Mareiwa observa todos los puntos detenidos como pequeñas formas distribuidas.",["mareiwa","viajeros","ruta"],false],
      ["Los cuerpos dejan de ser cuerpos","Perfil distante: siluetas sentadas se pliegan en estratos de cerro sin rostros de piedra ni monumentos.",["viajeros","serranias","ruta"],true],
      ["Un sistema de alturas","Cenital diagonal de lomas nuevas conectadas por el antiguo sendero; las figuras humanas ya no están presentes.",["serranias","ruta"],true],
      ["La piedra hacia Kasuto","Macro de la honda tensada sobre la cima de Tsitsi, con una piedra y horizonte vacío.",["mareiwa","serranias","honda","mar"],false],
      ["El mar deja la tierra","Entre dos morros, las bandas de agua se retiran y revelan pozos salados separados.",["mareiwa","serranias","mar"],true],
      ["Aves con semillas","A través de una abertura rocosa, una bandada cruza en profundidad llevando semillas pequeñas.",["aves","plantas","serranias"],false],
      ["Arachí reúne la vida","Vista aérea de familias y animales reunidos entre grandes piedras; no hay marcas o fronteras dibujadas.",["mareiwa","primeros","serranias"],false],
      ["Viajeros que permanecen","Desde el suelo, una cadena de serranías ocupa el horizonte y el viejo sendero termina en ellas; ningún cuerpo humano visible.",["serranias","ruta","plantas"],true]
    ]
  },
  "ulepala": {
    title: "Ulépala", bible: "ulepala", triptych: "wayuu-ulepala-final-selection",
    thesis: "Atravesar la muerte transforma relaciones y permisos; ni el viaje ni el aprendizaje conceden derecho sobre quien ya cambió.",
    palette: "Azul Jepira, blanco nube, algodón crudo, verde Juyá, carbón de caverna y rojo cardenal; sin erotización, sangre o paraíso dorado.",
    limitation: "El guion conserva la agencia de la compañera y no romantiza rapto, insistencia ni violencia; distingue las versiones de Paz Ipuana y Perrin.",
    models: ["ulepala__identity_sheet","ulepala__state_sheet","companera_muerta_ulepala__identity_sheet","companera_muerta_ulepala__state_sheet","companeros_dote_ulepala__group_grammar","familia_muerta_ulepala__group_grammar","caballo_blanco_nube_ulepala__state_sheet","mansiones_jepira_ulepala__spatial_model","campo_algodon_ulepala__spatial_model","aparicion_juya_ulepala__identity_sheet","estancia_juya_ulepala__spatial_model","anciana_amiga_ulepala__identity_sheet","ruta_sombras_regreso_ulepala__spatial_model","cardenal_ulepala__state_sheet","secreto_ulepala__phenomenon_rule"],
    inventory: {
      ulepala: ["person","Ulépala adulto en estados de pretendiente, viajero, aprendiz y retornado; ropa completa según modelos.",["ulepala__identity_sheet","ulepala__state_sheet"]],
      companera: ["person","Compañera adulta con agencia propia, luego yolujaa; vestuario completo, distancia corporal y negativa visibles.",["companera_muerta_ulepala__identity_sheet","companera_muerta_ulepala__state_sheet"]],
      companeros: ["supporting_people","Seis compañeros adultos exactos para reunir la dote; no escolta armada.",["companeros_dote_ulepala__group_grammar"]],
      jepira: ["setting","Jepira de colinas azules, mar, caverna y residencias de muertos; no paraíso cristiano.",["mansiones_jepira_ulepala__spatial_model"]],
      familia_muerta: ["supporting_people","Parientes muertos de la compañera como adultos vestidos y sobrios, sin horror.",["familia_muerta_ulepala__group_grammar"]],
      algodon: ["setting","Sembrado de algodón donde Ulépala trabaja y aprende otras apariencias.",["campo_algodon_ulepala__spatial_model"]],
      juya: ["person","Juyá como anfitrión adulto y lluvia, no rey con corona.",["aparicion_juya_ulepala__identity_sheet"]],
      dominio: ["setting","Estancia de Juyá con cultivos, senderos y abundancia condicionada.",["estancia_juya_ulepala__spatial_model"]],
      anciana: ["person","Anciana araña protectora de esta versión, diferenciada de Waleker.",["anciana_amiga_ulepala__identity_sheet"]],
      regreso: ["magic_subject","Ruta de sombras y secreto de dos lluvias; no persecución monstruosa.",["ruta_sombras_regreso_ulepala__spatial_model","secreto_ulepala__phenomenon_rule"]],
      cardenal: ["animal","Cardenal rojo surgido del corazón por transformación no anatómica, sin extracción ni sangre.",["cardenal_ulepala__state_sheet"]],
      caballo: ["animal","Corcel blanco semejante a nube que lleva la pareja hacia Jepira y se disuelve sin daño.",["caballo_blanco_nube_ulepala__state_sheet"]]
    },
    voices: [
      "Ulépala se llevó a una joven y partió con seis compañeros para reunir la dote. Durante su ausencia, la muchacha murió.",
      "Al volver la encontró convertida en yolujaa. Intentó retenerla, pero ella ya pertenecía al mundo de los muertos y pidió viajar hacia Jepira.",
      "La familia muerta recibió al visitante. Ulépala insistió en recuperar la relación; su compañera se negó porque la muerte había cambiado su cuerpo y sus posibilidades.",
      "Una abuela le propuso trabajar en un sembrado de algodón. Allí comenzó a comprender que las cosas del otro mundo no conservaban siempre su apariencia conocida.",
      "Después llegó al dominio de Juyá. Veía personas donde Juyá reconocía venados, conejos y frutos, y tuvo que aprender prácticas y límites.",
      "Pülowi marcaba aquello que no podía tomarse. Una anciana araña ayudó a Ulépala a regresar y le exigió guardar silencio durante dos ciclos de lluvia.",
      "En casa, un amigo y su mujer insistieron hasta que habló. Antes de terminar, una flecha de Mareiwa cerró el relato; no mostramos el impacto ni los cuerpos.",
      "Juyá pidió el corazón de su protegido y éste se volvió cardenal rojo. El canto del ave quedó asociado con la proximidad de las lluvias."
    ],
    shots: [
      ["Partir por la dote","Ulépala sale con exactamente seis compañeros por un sendero; la joven permanece separada en el umbral.",["ulepala","companera","companeros"],false],
      ["Bienes reunidos","Macro lateral de fibras, collares y cuerdas de animales sobre una estera; siete pares de manos no aparecen, sólo dos gestos.",["ulepala","companeros"],false],
      ["El regreso cambia la casa","Ulépala vuelve desde el suelo hacia una vivienda silenciosa; una silueta tenue espera lejos en el umbral.",["ulepala","companera"],true],
      ["Ella ya es yolujaa","Cenital de dos sombras que no llegan a tocarse: una humana y otra desfasada junto a la compañera.",["ulepala","companera"],true],
      ["Camino a Jepira","Perfil teleobjetivo de la pareja montada en el corcel blanco, con distancia clara entre sus cuerpos.",["ulepala","companera","caballo","jepira"],false],
      ["El caballo se vuelve nube","A ras de una caverna, el corcel se desarma en hojas blancas mientras ambos viajeros siguen completos a pie.",["ulepala","companera","caballo","jepira"],true],
      ["La familia de los muertos","Vista alta de parientes recibiendo a la compañera; Ulépala ocupa un borde y no domina la reunión.",["ulepala","companera","familia_muerta","jepira"],false],
      ["La negativa","Sobre el hombro de la compañera, su mano abierta mantiene distancia; Ulépala permanece sentado lejos junto a un chinchorro.",["ulepala","companera","jepira"],false],
      ["Trabajar el algodón","Desde la sombra de plantas, Ulépala deshierba entre surcos blancos mientras una abuela señala la tarea.",["ulepala","algodon","familia_muerta"],false],
      ["Llegar al dominio de Juyá","Perfil distante: Juyá recibe a Ulépala frente a cultivos y corrales de escala inusual.",["ulepala","juya","dominio"],false],
      ["Aprender otras apariencias","Cenital diagonal: sombras de venado y conejo se separan de figuras humanas, sin flecha ni impacto.",["ulepala","juya","dominio"],true],
      ["El límite","Macro de una fibra tensada como frontera delante del pie de Ulépala; el sendero húmedo continúa más allá.",["ulepala","dominio","regreso"],true],
      ["La anciana del regreso","Entre postes, la anciana entrega un ovillo a Ulépala y señala una ruta oscura; no se transforma en Waleker.",["ulepala","anciana","regreso"],false],
      ["Dos ciclos de lluvia","A través de la puerta, Ulépala calla mientras dos bandas de lluvia pasan en planos sucesivos sobre el patio.",["ulepala","regreso"],true],
      ["La palabra interrumpida","Vista aérea: Ulépala habla ante dos adultos; una sombra de flecha cruza fuera de los cuerpos, sin impacto.",["ulepala","regreso"],false],
      ["El corazón se vuelve canto","Un pliegue rojo no anatómico sale de un círculo de fibras y adopta forma de cardenal que vuela hacia lluvia distante.",["cardenal","juya","regreso"],true]
    ]
  },
  "umarala": {
    title: "Umaralá", bible: "umarala", triptych: "wayuu-umarala-final-selection",
    thesis: "Sobrevivir y recibir un saber heredado obliga a cuidar, no autoriza a reclamar poder personal sobre la vida de otros.",
    palette: "Índigo de canto, crudo de chinchorro, terracota, verde Jarara, ámbar de fuego y azul lluvia; sin aura médica, sangre o santidad dorada.",
    limitation: "La curación se presenta según la lógica del relato y no como resultado médico comprobado; Jirairay es nombre de invocación y no un antagonista independiente.",
    models: ["umarala__identity_sheet","umarala__state_sheet","tia_outsu_umarala__identity_sheet","tia_outsu_umarala__state_sheet","paciente_umarala__identity_sheet","paciente_umarala__state_sheet","jumajule_umarala__presence_model","capote_umarala__object_sheet","servidor_umarala__identity_sheet","maiceo__spatial_model","jarara__spatial_model","transmision_vida_nombre_umarala__phenomenon_rule","curacion_nocturna_umarala__phenomenon_rule","partida_occidente_umarala__phenomenon_rule","jururiana__state_sheet"],
    inventory: {
      umarala: ["person","Umaralá adulto en estados joven, aprendiz, especialista mayor y viajero final; ropa completa según modelos.",["umarala__identity_sheet","umarala__state_sheet"]],
      tia: ["person","Tía piache adulta, maestra y cuidadora; autoridad propia, vestuario completo y sin cuerpo inerte mostrado.",["tia_outsu_umarala__identity_sheet","tia_outsu_umarala__state_sheet"]],
      paciente: ["person","Mujer adulta enferma representada en reposo digno y luego con respiración calma; no diagnóstico visual.",["paciente_umarala__identity_sheet","paciente_umarala__state_sheet"]],
      canto: ["magic_subject","Jirairay como pulso dentro del canto y auxiliares como cortes de presencia; nunca criatura enemiga.",["jumajule_umarala__presence_model","transmision_vida_nombre_umarala__phenomenon_rule"]],
      instrumentos: ["object","Maraca y capote heredados como objetos concretos, no credencial automática de poder.",["capote_umarala__object_sheet"]],
      chinchorro: ["object","Chinchorro de reposo y cuidado, tejido de papel con separación entre fibras.",[]],
      territorio: ["setting","Maiceo y Jarara como lugares aproximados de crianza, entierro y aprendizaje.",["maiceo__spatial_model","jarara__spatial_model"]],
      curacion: ["magic_subject","Noche de canto seguida por calma al amanecer, sin promesa clínica ni espectáculo.",["curacion_nocturna_umarala__phenomenon_rule"]],
      viajeros: ["supporting_people","Umaralá mayor, Jururiana y un hombre vestido con piel de venado: exactamente tres viajeros adultos.",["jururiana__state_sheet"]],
      servidor: ["person","Servidor adulto que observa la partida y obedece no seguir; sin castigo visual.",["servidor_umarala__identity_sheet"]],
      partida: ["magic_subject","Ausencia final de Umaralá y transformación abierta de sus compañeros, sin ascensión literal.",["partida_occidente_umarala__phenomenon_rule"]]
    },
    voices: [
      "Durante una epidemia, Umaralá enfermó con gravedad. Su tía, una piache reconocida, cantó junto al chinchorro y llamó a sus auxiliares con la maraca.",
      "Dentro del canto apareció el nombre Jirairay. No era otro espíritu combatiente, sino una forma histórica de invocar a Wanurü durante la ceremonia.",
      "La tía comprendió que salvar al sobrino exigía una pérdida. Puso maraca y capote sobre él, continuó cantando y entregó su propia vida.",
      "Umaralá despertó y encontró la ausencia de quien lo había criado. La enterró cerca de Maiceo y encendió fuego junto a la sepultura.",
      "En sueño, la tía le ordenó ir a Jarara, tomar sus instrumentos y atender a quienes lo buscaran. También le dio el nombre Umaralá.",
      "Una familia pidió ayuda para una mujer grave. Umaralá caminó hasta la casa, cantó durante la noche y al amanecer ella respiraba con más calma.",
      "Con los años advirtió que imitar una maraca no reproduce una relación de aprendizaje. Su autoridad permanecía ligada a la tía y al deber de cuidado.",
      "Al final partió con Jururiana y otro compañero. No volvió como antes. Su nombre quedó en algunos cantos y cada curación recordó una deuda heredada."
    ],
    shots: [
      ["La tía junto al chinchorro","La tía canta pequeña junto al joven en reposo; patio y familia quedan fuera, concentrando el cuidado.",["umarala","tia","chinchorro","instrumentos","territorio"],false],
      ["Maraca y capote","Macro lateral de la maraca y el capote suspendidos sobre el chinchorro, sin tocar el rostro ni mostrar síntomas.",["umarala","tia","instrumentos","chinchorro"],false],
      ["Jirairay dentro del canto","Desde el suelo, pulsos índigo de papel recorren las fibras del chinchorro y vuelven a la maraca; sin cuerpo enemigo.",["umarala","tia","canto","instrumentos"],true],
      ["Una vida sostiene otra","Cenital: dos sombras humanas se conectan por maraca y capote; una se vuelve tenue mientras la otra recupera densidad.",["umarala","tia","canto","instrumentos"],true],
      ["Umaralá despierta","Plano tele lateral sin cielo: el joven se incorpora y el lugar de la tía queda vacío junto a los instrumentos.",["umarala","tia","chinchorro","instrumentos"],false],
      ["Fuego junto a Maiceo","A ras del suelo, un fuego doméstico pequeño arde junto a una sepultura cerrada; Umaralá queda distante y no hay cuerpo.",["umarala","tia","territorio"],false],
      ["La maestra vuelve en sueño","Vista alta diagonal del joven dormido y la tía como silueta de fibras que señala un sendero hacia Jarara.",["umarala","tia","canto","territorio"],true],
      ["Recibir nombre e instrumentos","Sobre el hombro de la visión, Umaralá toma maraca y capote; el sendero se abre al fondo, sin texto escrito.",["umarala","tia","instrumentos","territorio"],true],
      ["Caminar hacia quien lo busca","Desde una sombra, Umaralá adulto camina con los instrumentos hacia otra casa; rechaza una montura fuera de cuadro.",["umarala","instrumentos","paciente","territorio"],false],
      ["La noche de cuidado","Perfil distante: Umaralá canta fuera del círculo del chinchorro de la paciente; la familia queda detrás de una pared.",["umarala","paciente","instrumentos","chinchorro","curacion"],false],
      ["Respirar con más calma","Cenital diagonal de la paciente en reposo al amanecer; fibras del chinchorro se abren regularmente, sin aura o diagnóstico.",["paciente","chinchorro","curacion"],true],
      ["Una maraca no basta","Macro de dos maracas: una unida por fibras a la memoria de la tía y otra aislada; no juzgar especialistas actuales.",["tia","instrumentos","canto"],true],
      ["Preparar el viaje final","Entre postes, Umaralá mayor reúne una manta y maraca mientras dos compañeros esperan en el exterior.",["umarala","viajeros","instrumentos","partida"],false],
      ["Tres viajeros","A través del umbral, exactamente tres adultos parten en profundidad; uno es Jururiana y otro lleva piel de venado.",["umarala","viajeros","servidor","territorio"],false],
      ["El servidor no los sigue","Vista aérea desde atrás del servidor: los tres viajeros se alejan por rutas que comienzan a separarse.",["viajeros","servidor","partida","territorio"],false],
      ["El nombre permanece","Desde el suelo, lluvia y raíces aparecen lejos donde estuvo Jururiana; el sendero de Umaralá queda vacío, sin ascensión.",["umarala","viajeros","canto","partida","territorio"],true]
    ]
  },
  "waleker-el-origen-del-tejido": {
    title: "Waleker, el origen del tejido", bible: "waleker", triptych: "wayuu-waleker-final-selection",
    thesis: "El don de Waleker permanece cuando se convierte en práctica, memoria y enseñanza compartida, no cuando alguien intenta poseer su secreto.",
    palette: "Azul noche, terracota, crudo algodón, magenta contenido, amarillo mariposa, verde monte y plata de telaraña; sin neón ni patrones inventados como claniles.",
    limitation: "Las variantes de cuidador y traición no se funden; la araña protectora de Ulépala no se identifica automáticamente con Waleker.",
    models: ["waleker__identity_sheet","waleker__state_sheet","irunuu__identity_sheet","irunuu__state_sheet","kulamia_waleker__identity_sheet","servidores_wanuru_waleker__group_grammar","tejedoras_herederas__group_grammar","hermanas_irunuu_waleker__group_grammar","hormigas_waleker__group_grammar","tejidos_waleker__object_sheet","telar_wayuu__object_sheet","jiron_telarana_waleker__object_sheet","isashii_waleker__spatial_model","suumain_yolujaa_waleker__spatial_model","transformacion_nocturna_waleker__phenomenon_rule","tejido_nocturno_waleker__phenomenon_rule","revelacion_secreto_waleker__phenomenon_rule","legado_textil_waleker__phenomenon_rule"],
    inventory: {
      waleker: ["person","Wokoloonat como niña y Waleker como joven adulta y araña en estados separados; ropa completa, sin sexualización.",["waleker__identity_sheet","waleker__state_sheet"]],
      irunuu: ["person","Irunúu adulto como cuidador, receptor de tejidos y persona que rompe la promesa; vestuario completo.",["irunuu__identity_sheet","irunuu__state_sheet"]],
      kulamia: ["person","Kulami'a adulta que recibe piezas, observa e inicia una cadena de aprendizaje.",["kulamia_waleker__identity_sheet"]],
      servidores: ["supporting_people","Servidores adultos de Wanurü en una casa que parece velorio; sin demonización ni embriaguez visual.",["servidores_wanuru_waleker__group_grammar"]],
      tejedoras: ["supporting_people","Mujeres adultas de varias generaciones que aprenden y corrigen juntas, no retratos de personas reales.",["tejedoras_herederas__group_grammar","hermanas_irunuu_waleker__group_grammar"]],
      hormigas: ["animal","Pequeño grupo de hormigas de papel junto a la niña; no plaga.",["hormigas_waleker__group_grammar"]],
      tejidos: ["object","Fajas, chinchorros y telas diferenciadas en papel; diseños inspirados en formas narradas sin inventar signos claniles.",["tejidos_waleker__object_sheet","telar_wayuu__object_sheet"]],
      hilos: ["magic_subject","Hilos de colores que salen de la boca sin anatomía grotesca y se ordenan en el telar.",["tejido_nocturno_waleker__phenomenon_rule"]],
      telarana: ["magic_subject","Jirón de manta que se vuelve telaraña y conduce a una araña natural pequeña.",["jiron_telarana_waleker__object_sheet","transformacion_nocturna_waleker__phenomenon_rule"]],
      lugares: ["setting","Isashii, casa de Irunúu y Suumain Yolujaa como espacios diferenciados de encuentro, tejido y revelación.",["isashii_waleker__spatial_model","suumain_yolujaa_waleker__spatial_model"]],
      legado: ["magic_subject","Transmisión material de piezas y técnicas desde Waleker hacia Kulami'a y tejedoras; aprendizaje visible.",["revelacion_secreto_waleker__phenomenon_rule","legado_textil_waleker__phenomenon_rule"]]
    },
    voices: [
      "Irunúu encontró a una niña abandonada que jugaba entre hormigas. Otras personas la rechazaban; él la llevó a su casa y la llamó Wokoloonat.",
      "De día permanecía callada. De noche se convertía en la joven Waleker y de su boca salían hilos de colores con los que tejía.",
      "Waleker pidió a Irunúu guardar el secreto. Si callaba, ella seguiría a su lado y continuaría enseñando aquello que sabía.",
      "Irunúu recibió tejidos desconocidos. En una reunión le preguntaron quién los hacía y protegió el nombre durante un tiempo.",
      "Luego entró en una casa que parecía velorio. Rodeado por servidores de Wanurü, reveló el nombre de Waleker a cambio de reconocimiento y caza.",
      "Waleker ya conocía la traición. Se alejó hacia el monte; cuando Irunúu tomó su manta, sólo conservó un jirón de telaraña.",
      "Waleker adoptó forma de araña y desapareció. Antes dejó tejidos que Irunúu llevó a Kulami'a y a mujeres capaces de observar, imitar y enseñar.",
      "Las tejedoras contaron diseños y corrigieron hilo por hilo. El don se volvió práctica compartida, y la araña permaneció como memoria, no como sustituta humana."
    ],
    shots: [
      ["La niña entre hormigas","Irunúu descubre a Wokoloonat pequeña en un claro de Isashii; las hormigas forman una línea, no un círculo ceremonial.",["waleker","irunuu","hormigas","lugares"],false],
      ["Una mano ofrecida","Macro lateral de la mano de Irunúu abierta y la mano infantil que se acerca; hormigas quedan abajo, sin rostros.",["waleker","irunuu","hormigas"],false],
      ["La casa cambia de noche","Desde el suelo, la silueta infantil entra y una silueta joven sale en otra capa de sombra; no aparecen juntas como dos personas.",["waleker","lugares","legado"],true],
      ["Hilos que encuentran el telar","Cenital de hilos de colores saliendo desde fuera de cuadro y ordenándose en el telar; boca no visible.",["waleker","hilos","tejidos"],true],
      ["La condición del secreto","Perfil teleobjetivo: Waleker e Irunúu conversan separados por un telar; ella señala los tejidos y él baja la mirada.",["waleker","irunuu","tejidos","lugares"],false],
      ["Vestido por el tejido","A ras del suelo, Irunúu atraviesa el patio con una pieza nueva; Waleker trabaja muy lejos al fondo.",["waleker","irunuu","tejidos","lugares"],false],
      ["Las preguntas","Vista alta de una reunión pequeña alrededor de tejidos; Irunúu ocupa un borde y nadie toca a Waleker, ausente.",["irunuu","tejidos","lugares"],false],
      ["Guardar el nombre","Sobre el hombro de Irunúu, un hilo cerrado sobre la estera simboliza el secreto sin letras ni boca.",["irunuu","tejidos","legado"],true],
      ["La casa que parecía velorio","Desde una sombra, Irunúu entra a Suumain Yolujaa donde servidores adultos lo reciben alrededor de una estera vacía.",["irunuu","servidores","lugares"],false],
      ["La promesa se rompe","Perfil distante: Irunúu habla y un único hilo de color se corta entre él y la puerta; sin texto ni presencia corporal de Wanurü.",["irunuu","servidores","legado","lugares"],true],
      ["Waleker ya lo sabe","Cenital diagonal de Waleker recogiendo sólo su manta mientras Irunúu llega tarde por el sendero.",["waleker","irunuu","tejidos","lugares"],false],
      ["El jirón","Macro de la mano de Irunúu sujetando un borde de manta que se abre en fibras de telaraña.",["irunuu","telarana","tejidos"],true],
      ["La araña se aleja","Entre ramas, una araña pequeña de papel sigue un hilo mientras Waleker deja de tener forma humana, sin duplicación.",["waleker","telarana","lugares"],true],
      ["Los tejidos quedan","A través del umbral, Irunúu entrega varias piezas a Kulami'a; ambos completos y separados por el telar.",["irunuu","kulamia","tejidos","legado"],false],
      ["Aprender entre mujeres","Vista aérea oblicua de varias tejedoras trabajando en telares distintos; Kulami'a corrige un hilo, sin uniformar diseños.",["kulamia","tejedoras","tejidos","legado"],false],
      ["Memoria y práctica","Desde el suelo del taller, los telares continúan hacia el fondo y una araña pequeña permanece en una esquina, no como maestra humana.",["tejedoras","tejidos","telarana","legado"],true]
    ]
  }
};

const triptychSelectionFiles = Object.fromEntries(Object.keys(stories).map((slug) => {
  const name = stories[slug].triptych;
  return [slug, `content/mitos-visuales/_openai/wayuu/${slug}/${name}/selection.json`];
}));

function materializeModels(spec) {
  return spec.models.map((modelId) => {
    const selection = bible[spec.bible][modelId];
    if (!selection) throw new Error(`${spec.title}: missing model ${modelId}`);
    if (!fs.existsSync(selection.path) || sha(fs.readFileSync(selection.path)) !== selection.sha256) throw new Error(`${spec.title}: invalid model ${modelId}`);
    return { model_id: modelId, path: selection.path, sha256: selection.sha256 };
  });
}

function makePlan(slug, spec) {
  if (spec.shots.length !== 16 || spec.voices.length !== 8) throw new Error(`${slug}: expected 16 shots and 8 voices`);
  const narrativePath = `content/mitos-visuales/production/wayuu-2026-09-05/narratives/${slug}.json`;
  const narrative = read(narrativePath);
  const triptychSelection = read(triptychSelectionFiles[slug]);
  const references = triptychSelection.selected.map((item) => ({ path: item.path, sha256: item.sha256, reviewed: true, role: "same_myth_direction_reference" }));
  const canonicalModels = materializeModels(spec);
  const modelMap = Object.fromEntries(canonicalModels.map((model) => [model.model_id, model]));
  const inventory = Object.entries(spec.inventory).map(([id, [type, desc, modelIds]]) => {
    for (const modelId of modelIds) if (!modelMap[modelId]) throw new Error(`${slug}: inventory model missing ${modelId}`);
    return { id, type, desc, model_ids: modelIds };
  });
  const events = spec.voices.map((voice, index) => ({ id: `e${index + 1}`, description: voice, required: true, provenance: "historical_core", source: `Narración pública congelada y expediente editorial del mito; ${spec.limitation}` }));
  let priorId = null;
  const blocks = spec.voices.map((voice, blockIndex) => {
    const blockStart = blockIndex * 16;
    const keyframes = spec.shots.slice(blockIndex * 2, blockIndex * 2 + 2).map(([title, visual, entityIds, magic], localIndex) => {
      const frameIndex = blockIndex * 2 + localIndex;
      const [angle, scale, depth] = cameras[frameIndex];
      const id = `b${blockIndex + 1}${localIndex === 0 ? "a" : "b"}`;
      const frame = {
        id, title,
        visual: `${visual} COMPOSICIÓN OBLIGATORIA: ${angle}, ${scale}; no copiar la altura, horizonte ni distribución del keyframe anterior.`,
        time_seconds: [blockStart + localIndex * 8, blockStart + (localIndex + 1) * 8],
        entity_ids: entityIds,
        event_ids: [`e${blockIndex + 1}`],
        angle,
        shot_scale: scale,
        depth_planes: depth,
        continuity_from: priorId,
        transition_to_next: "Corte de eje, altura y escala hacia el siguiente instante.",
        scene_role: magic ? "visible_magic" : "ordinary_consequence",
        magic_in_the_ordinary: magic ? {
          ordinary_anchor: `Los elementos cotidianos inventariados en ${title}.`,
          impossible_behavior: visual,
          narrative_effect: `Hace visible el cambio de relación narrado en el evento e${blockIndex + 1}.`,
          agency: "La transformación pertenece al relato o a su traducción editorial; las personas no la controlan como superpoder.",
          physical_translation: "Hojas mate separadas cambian de silueta, posición o continuidad mediante pliegues y vacíos; sin partículas CGI.",
          visible_test: "La contradicción material debe entenderse en una sola imagen sin texto ni duplicación de personajes.",
          provenance: "narrated_fact",
          temporal_role: "present",
          event_ids: [`e${blockIndex + 1}`]
        } : null,
        motion_contract: {
          camera: `Movimiento mínimo compatible con ${angle}.`,
          allowed: "Sólo el gesto o cambio material descrito en este instante.",
          forbidden: "Repetir la composición anterior, añadir reparto, texto, sangre, ceremonia o utilería no inventariada."
        },
        asset: { status: "not_generated" },
        generation_inputs: []
      };
      priorId = id;
      return frame;
    });
    return {
      id: `b${blockIndex + 1}`,
      voice_over: voice,
      voice_provenance: `Síntesis audiovisual fiel a la narración congelada; ${spec.limitation}`,
      word_count: voice.trim().split(/\s+/u).length,
      time_seconds: [blockStart, blockStart + 16],
      event_ids: [`e${blockIndex + 1}`],
      keyframes
    };
  });
  const voiceWords = spec.voices.reduce((total, voice) => total + voice.trim().split(/\s+/u).length, 0);
  const first = blocks[0].keyframes[0];
  first.generation_inputs = references.slice(0, 2).map((ref, index) => ({ kind: "triptych", myth: slug, path: ref.path, sha256: ref.sha256, approved: true, role: `Fijar identidad, paleta y material del mito desde la referencia ${index + 1}; prohibido copiar su composición.` }));
  return {
    schema: "wayuu-video-preproduction/v1",
    version: "preproduccion-01",
    slug,
    title: spec.title,
    status: "ready_for_sunburst_16_keyframes",
    duration: { target_seconds: 128, voice_words: voiceWords, measured: false },
    narrative: {
      snapshot: narrativePath,
      content_sha256: sha(narrative.content),
      source_url: null,
      source_locator: `Relato público y expediente editorial existentes. ${spec.limitation}`,
      live_hash_verified: false,
      events
    },
    story_thesis: spec.thesis,
    style: stylePath,
    palette: spec.palette,
    generation,
    shared_scene_continuity: [
      "Todo visible está construido con hojas mate recortadas, cantos internos, aire y sombras físicas; nunca suelo realista ni personajes modelados.",
      "Las referencias fijan identidad, vestuario, paleta y materia, pero jamás autorizan copiar su cámara o distribución.",
      "No repetir en keyframes adyacentes altura, escala, horizonte ni ubicación de sujetos; cada bloque cambia al menos dos variables.",
      spec.limitation,
      "Violencia, enfermedad, duelo y transformación se muestran sin sangre, heridas, cadáveres expuestos, sexualización o triunfo espectacular."
    ],
    continuity_rules: [
      "Usar exactamente el reparto inventariado por toma y conservar identidades desde los modelos aprobados.",
      "Desde el tercer frame, los dos antecedentes aprobados inmediatos entran primero y en orden.",
      "Macros sólo para manos, objetos, fibras, huellas o materia; nunca para rostros.",
      "Un descarte no alimenta ningún frame posterior; toda corrección obliga a rehacer sus descendientes si cambiaron los antecedentes.",
      spec.limitation
    ],
    reference_review: { sources: references, notes: ["Tríptico final y modelos de Biblia V3 reutilizados con sus hashes de selección.", spec.limitation, "La composición se rediseña para video y variedad de cámara; no replica los trípticos."] },
    canonical_models: canonicalModels,
    inventory,
    blocks
  };
}

for (const [slug, spec] of Object.entries(stories)) {
  const dir = `content/videos/wayuu/videos/${slug}/preproduccion-01`;
  fs.mkdirSync(dir, { recursive: true });
  const plan = makePlan(slug, spec);
  fs.writeFileSync(`${dir}/plan.json`, `${JSON.stringify(plan, null, 2)}\n`);
  const research = `# ${spec.title} · investigación audiovisual\n\nFecha: 9 de septiembre de 2026.\n\n## Base\n\nSe reutilizan el relato congelado, su expediente editorial, la selección final del tríptico y los modelos aprobados de la Biblia Wayúu V3. El contenido queda fijado por SHA-256 en \`plan.json\`. No se incorpora una versión nueva ni se usa una imagen anterior como prueba cultural.\n\n## Límite de interpretación\n\n${spec.limitation}\n\nLa adaptación conserva violencia y conflicto en la locución cuando pertenecen al relato, pero excluye sangre, heridas, cadáveres expuestos, sexualización, castigo espectacular y ceremonias no documentadas.\n\n## Decisión visual\n\nDieciséis keyframes en ocho bloques. La secuencia alterna territorial, macro de objeto, contrapicado, cenital, tele comprimido, rasante, arquitectura, sobre-hombro, subjetiva y aérea. Los dos keyframes aprobados inmediatos se usan como memoria visual desde el tercero; las referencias nunca fijan composición.\n`;
  fs.writeFileSync(`${dir}/INVESTIGACION.md`, research);
  const script = `# ${spec.title} · guion técnico\n\nEstado: listo para producción Sunburst. Duración estimada: 128 s; voz no medida.\n\nTesis: ${spec.thesis}\n\n${plan.blocks.map((block) => `## ${block.id} · ${block.time_seconds.join("–")} s\n\n**Voz:** ${block.voice_over}\n\n${block.keyframes.map((frame) => `- **${frame.id} · ${frame.title}:** ${frame.visual}`).join("\n")}`).join("\n\n")}\n\n## Límites\n\n${spec.limitation} Sin voz grabada, música, animación, montaje ni publicación.\n`;
  fs.writeFileSync(`${dir}/GUION-TECNICO.md`, script);
  console.log(`${slug}: ${plan.duration.voice_words} words, ${plan.blocks.flatMap((b) => b.keyframes).length} shots`);
}
