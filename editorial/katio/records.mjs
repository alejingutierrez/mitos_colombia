import { defineKatioMyth } from "./define-editorial-myth.mjs";
import {
  composeArchiveHistory,
  composeCommunityHistory,
  composeSimilarities,
  composeVersions,
} from "./compose-sections.mjs";

const archiveResearch =
  "MEDIACIÓN: el relato pasó por traducción y edición misionera; no se presenta como voz comunitaria transparente. IMÁGENES: toda generación nueva debe ser ilustración full paper cut/paper quilling, nunca fotografía, maqueta física, diorama ni 3D.";

function archiveRecord({
  sourceKeys,
  history,
  versions,
  similarities,
  ...input
}) {
  return defineKatioMyth({
    ...input,
    sourceKeys,
    historia: composeArchiveHistory(history),
    versiones: composeVersions(versions),
    similitudes: composeSimilarities(similarities),
  });
}

function communityRecord({
  sourceKeys,
  history,
  versions,
  similarities,
  ...input
}) {
  return defineKatioMyth({
    ...input,
    sourceKeys,
    historia: composeCommunityHistory(history),
    versiones: composeVersions(versions),
    similitudes: composeSimilarities(similarities),
  });
}

const records = [
  communityRecord({
    slug: "a-transformacion-del-hombre-que-no-podia-cazar",
    title: "La transformación del hombre que no podía cazar",
    mito: `Zaquidiama Domicó contó la historia de un hombre que salía al monte con los demás, pero nunca conseguía una presa. Mientras sus compañeros regresaban con alimento, él volvía sin haber disparado o después de haber perdido el rastro. La dificultad no era simple falta de destreza: el cazador estaba aprendiendo, a través de sus fracasos, que los animales no eran objetos disponibles sin límite.

Un día siguió el camino de los animales monte adentro. Se apartó de las rutas conocidas, cruzó quebradas y llegó a un ámbito en el que la relación entre cazador y presa ya no podía sostenerse como antes. Allí comprendió que los seres del bosque tenían sus propios dueños, familias y lugares. Lo que para la gente podía parecer una jornada improductiva era, desde el otro lado de la relación, una vida que no había sido tomada.

El hombre permaneció con los animales. La separación de su comunidad se volvió transformación: dejó de ocupar el lugar del cazador que no podía matar y pasó al mundo de aquellos a quienes había seguido. La historia no dice que la selva lo premiara por una virtud abstracta ni que toda cacería fuera prohibida. Señala algo más preciso: cazar exige reconocer límites, pedir y recibir, y no confundir necesidad con persecución.

Cuando la comunidad advirtió que no regresaba, su ausencia quedó unida a los sonidos y movimientos del monte. Ya no podían burlarse del hombre como si el fracaso fuera únicamente suyo. Él había encontrado otra forma de pertenecer, y su partida obligaba a mirar la cacería desde los ojos de los animales.

Desde entonces, el relato acompaña la advertencia que se hace antes de entrar al bosque. La persona que caza no entra a un espacio vacío: cruza un territorio vivo y relacionado. Si olvida esa condición, puede perder el camino humano; si la comprende, sabe que tomar alimento implica responsabilidad, medida y respeto por la continuidad de los seres que sostienen la vida.`,
    history: {
      sourceFocus:
        "El expediente se reconstruye desde “El hombre que no podía cazar”, publicado por Antonio María Cardona en las memorias del V Congreso Colombiano de Antropología.",
      evidenceDetail:
        "La guía bibliográfica acredita como narrador a Zaquidiama Domicó, principal de Río Verde, y resume el núcleo como una enseñanza sobre el respeto debido a los animales del monte.",
      editorialDecision:
        "La ficha anterior añadía una anciana profética, una diosa de cabellos largos, un túnel de siete días y una transformación en manao que el resumen verificable no sostiene.",
    },
    versions: {
      mainVariant:
        "El dato firme es la incapacidad de cazar, el seguimiento de los animales y una transformación que reordena la relación con el monte.",
      contrastVariant:
        "El texto heredado convertía la trama en una fábula extensa de destino individual. Esta revisión no presenta esos adornos como variante oral porque no pudo acreditar su procedencia.",
      boundary:
        "Río Verde y la atribución Domicó sostienen la frontera Katío, pero no autorizan a aplicar la versión a todos los territorios.",
    },
    leccion:
      "Cazar exige reconocer que los animales tienen continuidad, relaciones y límites propios.",
    similarities: {
      internalComparison:
        "la transformación del cazador conversa con Aribamia y Baha porque una persona cambia de condición, aunque aquí el eje es el respeto por los animales.",
      broaderComparison:
        "Los relatos de dueños de animales en varias tradiciones americanas también regulan la cacería, pero esta versión conserva narrador y procedencia en Río Verde.",
    },
    excerpt:
      "Un hombre incapaz de cazar sigue a los animales y aprende que el monte exige medida, relación y respeto.",
    seoTitle: "El hombre que no podía cazar: relato Katío",
    seoDescription:
      "Lee el relato de Zaquidiama Domicó sobre el cazador que sigue a los animales y transforma su relación con el monte.",
    focusKeywords: [
      "el hombre que no podía cazar",
      "Zaquidiama Domicó",
      "mito Emberá Katío",
      "animales del monte",
      "Río Verde",
    ],
    tags: ["transformación", "naturaleza", "bosque", "tradición oral"],
    sourceKeys: [
      "cardonaHunter",
      "bicanGuide",
      "gobiernoMayorKatio",
      "onicKatio",
      "minInteriorPlan",
      "clacsoRegionalization",
    ],
    researchNotes: `NARRADOR: Zaquidiama Domicó, principal de Río Verde.
FUENTE: Cardona 1990, pp. 165-168, acreditada por la guía BICAN.
DECISIÓN: retirar los episodios novelados que no aparecen en el resumen documental.
${archiveResearch}`,
  }),
  archiveRecord({
    slug: "ancastor",
    title: "Ancastor, el ave que viajó al cielo",
    mito: `Murió una mujer y su familia no encontraba consuelo. Lloraban porque pensaban que la habían perdido para siempre y porque, en aquel tiempo, todavía no había maíz en este mundo. Dos mujeres de la familia subieron a una montaña, miraron hacia el sol y hablaron de que también a ellas les llegaría la muerte.

Entonces apareció Ancastor, un ave blanca. Al acercarse tomó forma humana y preguntó por qué lloraban. Ellas respondieron que extrañaban a su hermana. Ancastor les explicó que la muerta estaba en Bajía, el cielo, y se ofreció a llevarlas. Extendió sus alas, sentó a una mujer sobre cada una y les pidió cerrar los ojos durante el vuelo.

Al llegar, caminaron hasta una casa grande. En el trayecto vieron personas extrañas y Ancastor les advirtió que no les hablaran. Más adelante encontraron a mucha gente conocida que había muerto, entre ella la hermana y un hermano asesinado. Las visitantes quisieron abrazarlos, pero el ave volvió a detenerlas: podían ver y conversar, no romper la distancia entre quienes vivían en mundos diferentes.

Pasaron dos días en Bajía. Antes de regresar encontraron maíz y chontaduro. Ancastor les ordenó no llevar frutos, porque el peso y la transgresión harían peligroso el descenso. A pesar de la advertencia, una escondió un grano de maíz en la boca y la otra guardó una fruta de chontaduro.

Ancastor volvió a convertirse en ave blanca, abrió las alas y las bajó a salvo. Ya en la tierra, las mujeres contaron que la muerte no borraba a las personas y mostraron las semillas traídas del cielo. Sembraron el maíz y el chontaduro. Las plantas crecieron, dieron nuevas semillas y la gente comenzó a cultivarlas y comerlas.

La desobediencia no termina aquí en castigo. Produce un riesgo real, pero también hace posible que dos alimentos crucen la frontera del cielo. El duelo, el viaje y la agricultura quedan unidos: quienes regresan no traen a los muertos, sino la certeza de que existen y unas semillas capaces de alimentar a los vivos.`,
    history: {
      sourceFocus:
        "La historia de Ancastor aparece en la compilación de 1993 dentro del capítulo Katío, pero su nota remite a Milcíades Chaves y no al libro de Severino.",
      evidenceDetail:
        "La atribución obliga a mantener una cautela adicional: el artículo de Chaves reunió narradores Chamí y Katío bajo un título general que puede confundir sus fronteras.",
      editorialDecision:
        "La página conserva el relato porque la tradición editorial la sitúa en el conjunto Katío, pero hace visible la cadena bibliográfica y no convierte a Ancastor en ángel cristiano.",
    },
    versions: {
      mainVariant:
        "Ancastor es un ave blanca capaz de asumir forma humana, transportar a dos mujeres y devolverlas con las semillas escondidas.",
      contrastVariant:
        "Bajía también aparece escrito como Baha en fuentes antiguas, pero aquí designa el cielo y no debe confundirse sin más con Baha, nombre del trueno y del rayo.",
      boundary:
        "La página evita decidir una frontera que la edición secundaria no resuelve por completo.",
    },
    leccion:
      "El duelo no devuelve a los muertos, pero puede traer alimento y continuidad a los vivos.",
    similarities: {
      internalComparison:
        "Ancastor dialoga con la escalera del cielo por el tránsito entre tierra y Bajía, aunque aquí el paso depende de un ave y tiene regreso.",
      broaderComparison:
        "Las semillas traídas desde otro mundo recuerdan relatos de origen agrícola, pero el maíz oculto en la boca y el chontaduro conservan esta secuencia particular.",
    },
    excerpt:
      "Un ave blanca lleva a dos mujeres a Bajía, donde ven a sus muertos y esconden semillas para traerlas a la tierra.",
    seoTitle: "Ancastor: el ave blanca del cielo",
    seoDescription:
      "Conoce el relato de Ancastor, el ave que lleva a dos mujeres a Bajía y trae con ellas maíz y chontaduro.",
    focusKeywords: [
      "Ancastor",
      "ave blanca Emberá",
      "viaje a Bajía",
      "origen del maíz",
      "mito Katío",
    ],
    tags: ["Ancastor", "ave", "muerte", "origen"],
    sourceKeys: [
      "villa1993",
      "chaves1945",
      "severino1924",
      "bicanGuide",
      "minInteriorPlan",
      "onicKatio",
    ],
    imagePromptHorizontal:
      "Ilustración panorámica full paper cut y paper quilling, no fotografía: una gran ave blanca Ancastor vuela entre montañas y cielo llevando con cuidado a dos mujeres sobre sus alas; al fondo aparece Bajía como paisaje luminoso de papel, con maíz y chontaduro discretos, sin ángel humano, sin alas pegadas a una persona, sin iconografía cristiana, sin texto, sin maqueta física, diorama ni 3D.",
    imagePromptVertical:
      "Ilustración vertical full paper cut y paper quilling, no fotografía: Ancastor como ave blanca real ocupa el centro y desciende del cielo con dos viajeras sobre sus alas; una protege un grano de maíz y otra un fruto de chontaduro, nubes y cordillera en capas recortadas, sin ángel, aureola o santo, sin texto, sin maqueta física, diorama ni 3D.",
    researchNotes: `CADENA: Villa 1993 remite a Chaves 1945.
CORRECCIÓN VISUAL: Ancastor es un ave blanca que puede volverse hombre, no un ángel con alas.
REEMPLAZO: horizontal y vertical.
${archiveResearch}`,
  }),
  archiveRecord({
    slug: "antomia",
    title: "Antomiá",
    mito: `Antomiá estaba entre los seres del comienzo. La fuente antigua dice que al principio era bueno y que vivía cerca de Caragabí. Un día Caragabí bebió hasta perder el sentido y quedó desnudo. Antomiá y algunos compañeros se burlaron de él. Cuando Caragabí despertó y supo lo ocurrido, los castigó: cambió su condición, los arrojó a Edaa, el mundo de abajo que el misionero tradujo como infierno, y cerró la entrada.

Antomiá no desapareció con el encierro. Quiso demostrar que tenía una sabiduría comparable a la de Caragabí y comenzó a formar su propia gente. Caragabí lo sorprendió mientras trabajaba y le preguntó qué hacía. Antomiá guardó silencio la primera vez. Ante la segunda pregunta respondió de mala gana que estaba haciendo perros.

La competencia terminó en enfrentamiento. Caragabí venció y convirtió en perros a Antomiá y a los seres que había formado. Los expulsó hacia Edaa mientras aullaban. La narración conserva así dos caídas: una provocada por la burla y otra por la pretensión de crear sin reconocer la diferencia de poder.

Las notas de 1929 registran además otro relato con el nombre Antomiá paima. Allí una mujer jaibaná descubre a un ladrón, prepara hojas de moindú y consigue vencerlo. Del cuerpo muerto surgen humo, fuego y piedras. Ese episodio no es continuación obligatoria de la caída de Antomiá; comparte el nombre dentro de un archivo que reconoce variantes entre grupos.

En la vida humana, los jai podían ser vinculados con enfermedad y calamidad, y los jaibanás actuaban en esa relación. Pero el relato no autoriza a describir todo jai como demonio cristiano ni a traducir Edaa sin resto como infierno. Esas palabras pertenecen al filtro de quienes escribieron.

Antomiá queda como una figura de oposición y transformación. Su historia habla de un orden disputado, de la creación como terreno de competencia y de la dificultad de separar la narración antigua de las categorías morales que la misión colocó sobre ella.`,
    history: {
      sourceFocus:
        "La síntesis de 1924 presenta dos episodios de Antomiá y los traduce de manera explícita al vocabulario de demonio e infierno.",
      evidenceDetail:
        "Las notas de 1929 añaden Antomiá paima, una mujer jaibaná que vence a un ladrón, prueba de que el nombre y sus relaciones no forman una ficha única y estable.",
      editorialDecision:
        "La revisión narra el conflicto documentado, separa la variante de la mujer jaibaná y marca como mediación las equivalencias cristianas.",
    },
    versions: {
      mainVariant:
        "El libro de 1924 reúne la burla a Caragabí, el encierro en Edaa y una competencia creadora que termina en transformación en perros.",
      contrastVariant:
        "En 1929, Antomiá paima es una mujer jaibaná y la trama gira alrededor de un robo, moindú y el origen de fuego, humo y piedras.",
      boundary:
        "Las dos piezas se comparan, pero no se funden como biografía continua.",
    },
    leccion:
      "La rivalidad por el poder transforma las relaciones y puede encerrar a todos en el conflicto.",
    similarities: {
      internalComparison:
        "Antomiá se relaciona con Aribamia por la mediación jaibaná y con Caragabí por una disputa sobre creación y autoridad.",
      broaderComparison:
        "Las caídas de antiguos colaboradores aparecen en muchos repertorios, pero traducir la trama como rebelión satánica borraría sus nombres y variantes.",
    },
    excerpt:
      "Antomiá desafía a Caragabí, intenta crear su propia gente y termina transformado y expulsado hacia Edaa.",
    seoTitle: "Antomiá: relato histórico Katío",
    seoDescription:
      "Lee los episodios de Antomiá, su conflicto con Caragabí y la variante de Antomiá paima, con mediación misionera explícita.",
    focusKeywords: [
      "Antomiá",
      "Caragabí y Antomiá",
      "Edaa",
      "jaibanismo Katío",
      "mitología Emberá Katío",
    ],
    tags: ["Antomiá", "demonios", "transformación", "orgullo"],
    researchNotes: `FUENTES: Severino 1924 y notas de 1929.
VARIANTE: Antomiá paima no se integra como continuación biográfica.
LÍMITE: “demonio” e “infierno” son traducciones misioneras.
${archiveResearch}`,
  }),
  archiveRecord({
    slug: "aribamias",
    title: "Aribamia",
    mito: `Cuando moría un jaibaná, algunas versiones decían que su relación con el mundo no terminaba en la sepultura. Pasados varios días podía aparecer sobre la tumba una espuma o neblina. La materia se elevaba poco a poco y tomaba forma hasta convertirse en Aribamia.

El libro de 1924 lo describe con cuerpo humano, cabeza y garras de tigre. Las notas de 1929, sin embargo, conservan descripciones diferentes según el grupo consultado: en unas Aribamia se asocia a la transformación del jaibaná muerto; en otras cambia el aspecto del cuerpo o la manera en que se manifiesta. Esa diferencia impide fijarlo como un monstruo zoológico idéntico en todo lugar.

La aparición podía ser temida. Si la persona muerta había dejado conflictos, se esperaba que buscara represalias o compañía. Para impedir que saliera, algunas familias sujetaban el cuerpo a la tierra con una estaca de macana. Quien deseaba para sí esa transformación, en cambio, podía prepararse tomando zumo de güibán durante determinadas fases de la luna. El mismo destino era, por tanto, miedo para unos y poder deseado para otros.

La fuente llama Peaurata al espíritu de una persona muerta que todavía vaga. No quería caminar solo hacia regiones desconocidas y podía buscar a alguien que lo acompañara. Para proteger la casa se colocaban haces de hojas de tobo, llamadas moindú, en los ángulos o frente a la escalera. Después de varios días, cuando el peligro se alejaba, las hojas podían retirarse; si la presencia regresaba, se colocaban otra vez.

Aribamia no es simplemente un “hombre tigre”. El relato sitúa la muerte dentro de relaciones que continúan: poder jaibaná, temor, memoria de agravios, deseo de compañía y protección del hogar. El cuerpo, la espuma, las plantas y la tierra intervienen en esa transición.

La página conserva la incertidumbre. No decide si todas las versiones nombran al mismo ser ni convierte el jaguar en disfraz decorativo. Reconoce que los archivos antiguos describen una transformación y que sus detalles cambian justamente porque fueron narrados en lugares y circunstancias diferentes.`,
    history: {
      sourceFocus:
        "Aribamia está documentado tanto en la síntesis de 1924 como en las notas de 1929, con diferencias corporales que la versión tardía de 1993 tendió a simplificar.",
      evidenceDetail:
        "El archivo permite comprobar la asociación con jaibanás muertos, espuma sobre la sepultura, estaca de macana, güibán, Peaurata y hojas de moindú.",
      editorialDecision:
        "La revisión usa el singular para el expediente, reconoce variantes y evita fijar una criatura híbrida como diseño canónico.",
    },
    versions: {
      mainVariant:
        "En 1924 el jaibaná muerto se vuelve una figura con rasgos humanos y de tigre, y la transformación puede impedirse sujetando el cuerpo.",
      contrastVariant:
        "Las notas de 1929 registran formas distintas entre grupos, confirmando que no existe una anatomía única de Aribamia.",
      boundary:
        "La página tampoco equipara automáticamente Aribamia con toda transformación felina Emberá.",
    },
    leccion:
      "La muerte no corta de inmediato los vínculos de poder, temor y compañía.",
    similarities: {
      internalComparison:
        "Aribamia se acerca a Herupotoarra y Baha por la transformación después de una ruptura, pero su centro es la continuidad del jaibaná muerto.",
      broaderComparison:
        "Las metamorfosis felinas aparecen en muchos pueblos, aunque aquí la tumba, la espuma, el moindú y la ambivalencia jaibaná fijan otra relación.",
    },
    excerpt:
      "Tras la muerte de un jaibaná, una espuma puede elevarse de la tumba y tomar la forma cambiante de Aribamia.",
    seoTitle: "Aribamia: transformación jaibaná Katío",
    seoDescription:
      "Conoce las variantes históricas de Aribamia, la transformación de jaibanás muertos y las protecciones con hojas de moindú.",
    focusKeywords: [
      "Aribamia",
      "transformación jaibaná",
      "Peaurata",
      "moindú",
      "mitos Katío",
    ],
    tags: ["Aribamia", "chamán", "muerte", "transformación"],
    researchNotes: `FUENTES: Severino 1924 y notas de 1929.
DECISIÓN: singular editorial; anatomía no canónica por variantes explícitas.
IMAGEN EXISTENTE: reutilizable como interpretación full paper cut, no como retrato definitivo.
${archiveResearch}`,
  }),
  archiveRecord({
    slug: "baha",
    title: "Baha, el trueno y el rayo",
    mito: `En un tiempo antiguo, el trueno había sido una persona. Se llamaba Baha y poseía un bohío de oro tan hermoso que Caragabí quiso cambiar su propia casa por aquella. Baha rechazó la propuesta. No aceptó premios ni cedió ante amenazas. Caragabí, más poderoso, lo tomó por el cabello, lo lanzó al aire y le ordenó vivir desde entonces en lo alto.

Baha llevó consigo un tambor. Cuando lo golpea, el sonido avisa que comienza la tempestad. El retumbo no es una voz distante añadida al cielo: es la acción del antiguo dueño del bohío que quedó suspendido en el aire.

La fuente también llama Baha al rayo y conserva otro episodio. Antes de ocupar las nubes, esa figura robaba niños, los mataba y llevaba sus cuerpos a lo alto de una palma para que los gallinazos comieran los restos quemados. La descripción escrita en 1924 utiliza una clasificación racial ofensiva para el personaje; esta edición no la reproduce como rasgo esencial ni como lenguaje de la comunidad.

Dos jaibanás soñaron que podrían vencerlo con una lanza llamada Miautzu. Entraron en su bohío, se protegieron detrás de uno de los postes y clavaron la lanza en su pecho. Quienes creían invencible al rayo vieron que podía ser enfrentado. Después de aquella derrota dejó de llevarse niños, aunque desde las nubes todavía podía golpear por sorpresa.

La memoria de los dos jaibanás quedó en una práctica de protección. Cuando se escuchaba el trueno, se sacaba una lanza y se colocaba sobre el techo del bohío apuntando hacia el cielo. No era un arma lanzada a ciegas contra la tormenta. Recordaba el instrumento que había detenido a Baha y convertía una victoria narrada en defensa del hogar.

Los dos Baha del archivo —trueno con tambor y rayo vencido por una lanza— pueden ser aspectos de un mismo fenómeno o relatos puestos juntos por el editor. La fuente no resuelve la relación. La página conserva ambos sin inventar una biografía que los una: uno explica el sonido de la tempestad; el otro, el peligro del relámpago y la respuesta jaibaná.`,
    history: {
      sourceFocus:
        "Baha se incorpora porque constituye un relato independiente y desarrollado en el capítulo de transformaciones de la obra de 1924.",
      evidenceDetail:
        "La fuente reúne al trueno expulsado con su tambor y al rayo vencido por dos jaibanás mediante la lanza Miautzu, pero no aclara si son una sola persona.",
      editorialDecision:
        "La edición separa las dos secuencias, retira la racialización ofensiva del personaje y conserva la práctica protectora sin presentarla como protocolo actual.",
    },
    versions: {
      mainVariant:
        "El trueno vive en el aire con un tambor después de rechazar el intercambio de bohíos propuesto por Caragabí.",
      contrastVariant:
        "El rayo roba niños, es vencido por dos jaibanás y queda recordado mediante una lanza colocada hacia el cielo durante la tormenta.",
      boundary:
        "El nombre Baha también aparece cercano a Bajía, cielo, en otras transcripciones; la coincidencia gráfica no basta para identificar los conceptos.",
    },
    leccion:
      "La memoria de una victoria puede convertir el miedo a la tormenta en protección compartida.",
    similarities: {
      internalComparison:
        "Baha se relaciona con Dabeiba por trueno y tempestad y con Antomiá por una transformación impuesta por Caragabí.",
      broaderComparison:
        "Tambores asociados al trueno aparecen en otros repertorios, pero la casa de oro, Miautzu y la lanza sobre el bohío pertenecen a esta secuencia.",
    },
    excerpt:
      "Baha, antiguo dueño de un bohío de oro, se vuelve trueno; otra secuencia cuenta cómo dos jaibanás vencen al rayo.",
    seoTitle: "Baha: mito Katío del trueno y el rayo",
    seoDescription:
      "Conoce a Baha, el trueno del tambor y el rayo vencido por dos jaibanás con la lanza Miautzu.",
    focusKeywords: [
      "Baha",
      "trueno Katío",
      "rayo y jaibanás",
      "lanza Miautzu",
      "mitología Emberá Katío",
    ],
    tags: ["tormenta", "ritual", "sobrenatural", "poder"],
    imagePromptHorizontal:
      "Ilustración panorámica full paper cut y paper quilling, no fotografía: tormenta sobre selva y río del noroccidente colombiano; Baha aparece como figura humana estilizada en las nubes tocando un tambor, mientras dos jaibanás junto a un tambo elevan una lanza Miautzu hacia el cielo, rayos hechos con tiras de papel, composición respetuosa, sin violencia explícita, sin texto, sin maqueta física, diorama ni render 3D.",
    imagePromptVertical:
      "Ilustración vertical full paper cut y paper quilling, no fotografía: una lanza protectora se eleva desde el techo de un tambo y conduce la mirada hasta Baha con su tambor entre nubes de tormenta; selva, palma y relámpago en capas recortadas, sin estereotipos, sin texto, sin maqueta física, diorama ni render 3D.",
    researchNotes: `MITO NUEVO: presente en Severino 1924 y Villa 1993.
FRONTERA: dos secuencias llamadas Baha, relación no resuelta.
IMÁGENES: requiere horizontal y vertical nuevas antes de publicación.
${archiveResearch}`,
  }),
  communityRecord({
    slug: "cobaima",
    title: "Cobaima, primer jaibaná",
    mito: `Karagabí creó a Cobaima para que fuera el primer jaibaná. No le entregó un territorio vacío, sino un mundo donde seres, animales, aguas y lugares todavía debían encontrar relaciones que permitieran vivir. Cobaima recibió conocimiento para escuchar a los jai y para intervenir cuando una fuerza impedía el paso o ponía en riesgo a la gente.

En su recorrido por el Alto Andágueda encontró animales que atacaban y espacios en los que la vida estaba fuera de medida. No los eliminó del mundo. Los condujo hacia lugares donde pudieran existir sin destruir a las comunidades. El orden no consistía en volver dócil toda la selva, sino en reconocer que distintos seres requieren distancias, límites y ámbitos propios.

Llegó luego a dos entradas de agua donde una trama retenía los peces. La corriente estaba atrapada y el alimento no podía circular. Cobaima retiró el obstáculo, abrió el paso y dejó en el nombre del lugar la memoria de aquello que había ocurrido. Más adelante reconoció la sal que brotaba de la tierra y otros sitios cuya fuerza exigía cuidado.

En un arcoíris encontró reunidos seres humanos, plantas y animales. La mezcla no era una imagen decorativa: mostraba una relación que podía desbordarse y causar daño. Cobaima volvió a separar y ordenar sin borrar la conexión entre ellos. En otra parte del camino enfrentó una piedra asociada con antiguos jaibanás, un lugar capaz de atraer y retener a quienes se acercaban sin preparación.

También vio que el oro podía volverse una amenaza cuando la ambición rompía las relaciones de la gente. Su intervención no declaró mala la materia. Contuvo el daño producido por el deseo sin medida y devolvió a cada cosa un lugar en el territorio.

Así, Cobaima aparece como primer jaibaná no por exhibir prodigios aislados, sino porque sabe leer lo que ocurre entre seres. Abre lo bloqueado, aparta lo que amenaza, reconoce fuerzas que no deben tocarse con ligereza y protege la continuidad de la vida. El recorrido queda ligado a lugares del Alto Andágueda y a una memoria que todavía puede escucharse en emberá y español.`,
    history: {
      sourceFocus:
        "Cobaima proviene de la pieza comunitaria homónima de Dachi Chiuu, no del capítulo misionero que organiza la mayoría de páginas históricas.",
      evidenceDetail:
        "El micrositio lo presenta como primer jaibaná y sitúa su recorrido en lugares del Alto Andágueda, con nombres y episodios vinculados al territorio.",
      editorialDecision:
        "La revisión reduce la prosa inventada de la ficha anterior y conserva el ordenamiento territorial sin añadir diálogos, diosas o ceremonias no acreditadas.",
    },
    versions: {
      mainVariant:
        "Cobaima ordena relaciones entre animales, aguas, lugares, seres y oro a lo largo de un recorrido territorial.",
      contrastVariant:
        "Las fuentes históricas del occidente antioqueño describen jaibanismo y jai desde otro contexto, pero no ofrecen una biografía equivalente de Cobaima.",
      boundary:
        "La versión del Alto Andágueda conserva su autoría colectiva y no se generaliza a toda comunidad Katío.",
    },
    leccion:
      "Cuidar el territorio significa reconocer relaciones, límites y lugares para cada forma de vida.",
    similarities: {
      internalComparison:
        "Cobaima dialoga con Aribamia y Antomiá por la relación con jai y jaibanás, aunque su relato es contemporáneo, territorial y comunitario.",
      broaderComparison:
        "Los recorridos de ordenamiento aparecen en relatos de muchos pueblos, pero aquí los lugares del Alto Andágueda sostienen el sentido de cada acción.",
    },
    excerpt:
      "Cobaima, primer jaibaná, recorre el Alto Andágueda y ordena relaciones entre seres, aguas, animales y lugares.",
    seoTitle: "Cobaima: primer jaibaná del Alto Andágueda",
    seoDescription:
      "Conoce el relato comunitario de Cobaima, primer jaibaná que ordena seres y lugares del territorio Emberá Katío.",
    focusKeywords: [
      "Cobaima",
      "primer jaibaná",
      "Alto Andágueda",
      "Dachi Chiuu",
      "relatos Emberá Katío",
    ],
    tags: ["chamán", "naturaleza", "ríos", "sabiduría"],
    sourceKeys: [
      "cnmhCobaima",
      "cnmhDachi",
      "gobiernoMayorKatio",
      "minInteriorPlan",
      "onicKatio",
      "clacsoRegionalization",
    ],
    researchNotes: `FUENTE PRINCIPAL: Dachi Chiuu / CNMH, Alto Andágueda.
DECISIÓN: voz comunitaria contemporánea separada del archivo misionero.
IMAGEN: par existente reutilizable.
${archiveResearch}`,
  }),
  archiveRecord({
    slug: "coste",
    title: "Costé",
    mito: `Los Costé vivían en el monte y eran dueños del oro. El registro los describe como seres peligrosos que atacaban a quienes salían de cacería. Cuando varias personas no regresaron, la comunidad dejó de interpretar las desapariciones como accidentes y organizó una búsqueda.

El primer Costé parecía imposible de herir. Las armas golpeaban su cuerpo sin detenerlo y el enfrentamiento costó vidas. Solo cuando los cazadores dirigieron sus flechas a los ojos consiguieron vencerlo. La victoria reveló una debilidad, pero no terminó con el peligro.

Tiempo después volvieron a desaparecer cazadores. Otro grupo siguió el rastro y encontró un segundo Costé. Este tampoco podía morir como una persona común: su corazón no estaba en el pecho, sino en el dedo grande del pie izquierdo. Los combatientes sufrieron nuevas pérdidas antes de descubrirlo y alcanzar el lugar donde residía su vida.

Un tercer Costé apareció en una cueva de la montaña. También fue derrotado por los ojos. La gente quemó el cuerpo para impedir que regresara, pero el fuego no cerró la historia. De las cenizas o del ser quemado surgieron cuatro tigres. Dos murieron durante la persecución y dos escaparon hacia el monte.

Una de las fieras tuvo crías bajo un árbol. Quienes las encontraron intentaron llevarlas y criarlas entre la gente. Las pequeñas parecían manejables, pero al crecer recuperaron la fuerza y la relación con el bosque. Finalmente huyeron.

La historia no presenta una sola batalla heroica. Repite un movimiento: desaparición, búsqueda, descubrimiento de una vulnerabilidad y retorno del peligro bajo otra forma. El oro que poseen los Costé no queda como recompensa de los vencedores. Su brillo pertenece al ámbito de seres que pueden matar, transformarse y sobrevivir en su descendencia.

El final tampoco anuncia exterminio. Los tigres que escapan mantienen abierta la presencia de Costé en el monte. La comunidad aprende maneras de enfrentarlo, pero no convierte la selva en un lugar completamente dominado ni el conocimiento de una debilidad en poder absoluto.`,
    history: {
      sourceFocus:
        "Costé está conservado en las notas de 1929 como un ciclo de encuentros con seres del monte asociados al oro y a desapariciones de cazadores.",
      evidenceDetail:
        "El relato documenta ojos vulnerables, un corazón ubicado en el dedo del pie, quema, transformación en cuatro tigres y crías que regresan al bosque.",
      editorialDecision:
        "La revisión retira frases sobre pureza, destino y gloria que la ficha generada añadió, y conserva la repetición sin convertirla en una saga fantástica europea.",
    },
    versions: {
      mainVariant:
        "La secuencia de 1929 reúne varios Costé con vulnerabilidades distintas y termina con una transformación felina que deja sobrevivientes.",
      contrastVariant:
        "La ficha anterior trataba cada encuentro como generación sucesiva y añadía un mensaje sobre el oro; esas conexiones no se presentan como versión oral.",
      boundary:
        "Costé permanece como expediente histórico localizado, no como definición general de seres del monte Katío.",
    },
    leccion:
      "Conocer una debilidad permite sobrevivir, pero no vuelve dominable todo el monte.",
    similarities: {
      internalComparison:
        "Costé se acerca a los Bibidigomia por las desapariciones y la respuesta colectiva, y a Aribamia por la forma felina sin ser el mismo ser.",
      broaderComparison:
        "Los corazones ocultos aparecen en cuentos de varios continentes, pero aquí los ojos, el dedo, el oro y los tigres forman una cadena localizada.",
    },
    excerpt:
      "Varios Costé atacan a los cazadores; cada uno exige descubrir una debilidad y el último sobrevive transformado en tigres.",
    seoTitle: "Costé: relato Katío de oro y tigres",
    seoDescription:
      "Lee el ciclo histórico de Costé, seres del monte asociados al oro, vulnerabilidades ocultas y transformación en tigres.",
    focusKeywords: [
      "Costé",
      "mito Katío del oro",
      "seres del monte",
      "transformación en tigres",
      "relatos de 1929",
    ],
    tags: ["Costé", "oro", "bestias", "bosque"],
    researchNotes: `FUENTE PRINCIPAL: notas de 1929.
CORRECCIÓN: se eliminan moralizaciones generadas y paralelos greconórdicos.
IMAGEN: par existente reutilizable.
${archiveResearch}`,
  }),
  archiveRecord({
    slug: "creacion-katios",
    title: "Caragabí y Tutruicá crean a la gente",
    mito: `Caragabí gobernaba la tierra sin saber que debajo existía Armucurá, un mundo regido por Tutruicá. Un día distinguió aquel ámbito en la oscuridad y descendió. Los dos se encontraron y preguntaron por sus orígenes. Caragabí dijo que había nacido de la saliva de Tatzitzetze; Tutruicá respondió que nadie lo había hecho.

Para probar quién tenía mayor poder, acordaron crear gente. Tutruicá trabajaría con barro y Caragabí con piedra mompahuará. Cada uno volvió a su mundo. Caragabí talló dos figuras y sopló sobre sus pies, manos y frente. Las estatuas abrieron los ojos y sonrieron, pero no podían levantarse ni hablar. Tutruicá modeló en barro una mujer y un hombre que caminaron, hablaron y poblaron Armucurá, donde la gente no moría.

Caragabí envió un mensajero para preguntar cómo lo había logrado. Tutruicá se burló de él y lo llamó creado. Caragabí bajó con un lazo dispuesto a vencerlo, pero Tutruicá sostuvo la cuerda con tal fuerza que ninguno pudo imponerse. Después del combate, Caragabí volvió a pedir el secreto.

Tutruicá finalmente aconsejó abandonar la piedra y usar barro. Le envió un pedazo pequeño, apenas suficiente para parecer insignificante. En las manos de Caragabí creció hasta alcanzar el tamaño necesario. El creador formó un hombre, tomó un fragmento de su propia costilla, sopló con él las extremidades y la frente, y lo introdujo en la figura. El barro perdió su pesadez y la persona pudo ver, sonreír, caminar y hablar.

Pasado un tiempo, Caragabí pidió otro poco de barro y formó una mujer. Esta vez tomó una costilla del hombre para darle vida. Las dos personas eran completas, pero mortales. Tutruicá señaló la diferencia entre ellas y los habitantes inmortales de Armucurá.

Caragabí aceptó que la gente de la tierra moriría. Prometió, sin embargo, recoger sus almas y llevarlas al cielo. La creación no resulta del triunfo de un dios aislado: nace de rivalidad, fracaso, aprendizaje, materia prestada y una diferencia que permanece entre los mundos.`,
    history: {
      sourceFocus:
        "La página separa la creación de la gente del extenso conjunto que la ficha anterior había fundido bajo un título genérico.",
      evidenceDetail:
        "El núcleo está en el capítulo de Caragabí de 1924 y tiene paralelos en 1929: encuentro con Tutruicá, prueba de piedra y barro, préstamo de materia, costillas y mortalidad.",
      editorialDecision:
        "Genené, la escalera, el fuego y otros ciclos recuperan sus propias páginas; aquí quedan Caragabí, Tutruicá y la creación humana.",
    },
    versions: {
      mainVariant:
        "En la síntesis de 1924, Tutruicá crea gente inmortal de barro y Caragabí aprende después de fracasar con piedra.",
      contrastVariant:
        "Las notas de 1929 cambian detalles y reconocen versiones entre grupos; la memoria actual del Alto Andágueda presenta a Karagabí desde otra procedencia.",
      boundary:
        "La página no convierte el relato histórico de Urabá en única cosmogonía Katío.",
    },
    leccion:
      "Crear también exige reconocer el fracaso, aprender del otro y aceptar diferencias duraderas.",
    similarities: {
      internalComparison:
        "la creación humana dialoga con Genené por el orden del mundo y con Dabeiba por conocimientos que hacen habitable la tierra.",
      broaderComparison:
        "Figuras humanas de barro aparecen en otros relatos, pero la prueba entre Caragabí y Tutruicá y la materia de Armucurá distinguen esta versión.",
    },
    excerpt:
      "Caragabí fracasa al crear con piedra y aprende de Tutruicá a dar vida al barro, aunque su gente será mortal.",
    seoTitle: "Caragabí y Tutruicá: creación Katío",
    seoDescription:
      "Lee el relato histórico Katío sobre Caragabí, Tutruicá, la prueba de piedra y barro y el origen mortal de la gente.",
    focusKeywords: [
      "Caragabí y Tutruicá",
      "creación Katío",
      "Armucurá",
      "origen de la gente",
      "mitología Emberá",
    ],
    tags: ["Caragabí", "creación", "origen del hombre", "cosmogonía"],
    researchNotes: `FOCO: creación de la gente, no antología de todos los ciclos.
FUENTES: Severino 1924 y notas de 1929.
SEPARACIÓN: Genené conserva expediente propio.
${archiveResearch}`,
  }),
  archiveRecord({
    slug: "dabeiba",
    title: "Dabeiba, maestra y protectora",
    mito: `Los antepasados recordaban a Dabeiba como una mujer joven, sabia y benéfica que vivió entre la gente. No llegó para gobernar mediante la fuerza. Enseñó trabajos necesarios para sostener la vida: cultivar la tierra, construir viviendas y poblados, fabricar tejidos y organizar el cuidado cotidiano del hogar.

El aprendizaje no ocurrió de una sola vez. Dabeiba acompañó a la gente mientras las tareas podían continuar sin ella. Cada oficio transformaba el territorio: el cultivo requería conocer suelos y tiempos; la vivienda daba forma a la vida común; el tejido convertía fibras y trabajo en protección; el manejo del hogar distribuía alimento y responsabilidad.

Cuando consideró que la obra estaba iniciada y podía seguir en manos humanas, Dabeiba caminó hacia Cerro León. Subió hasta la parte más alta y desde allí se despidió de la tierra. Después se elevó al cielo y desapareció de la vista.

La partida no significó abandono. Se decía que continuaba protegiendo a la gente y que su poder intervenía en grandes fenómenos del mundo: lluvia, granizo, trueno, rayo, huracanes, borrascas y terremotos. El cielo al que había subido seguía relacionado con las casas, los cultivos y los cuerpos que había ayudado a sostener.

Dabeiba reúne así dos dimensiones que no deben separarse. Es maestra de técnicas concretas y figura vinculada a fuerzas atmosféricas y terrestres. No es únicamente una “diosa de la tormenta”, porque su recuerdo comienza en la enseñanza; tampoco es solo una civilizadora retirada, porque después de subir continúa actuando.

Las fuentes antiguas compararon su nombre con Dobaida o Dobaiba, figura Cueva del bajo Atrato. La vecindad regional y los fenómenos compartidos explican la comparación, pero no borran las diferencias de pueblo, época y archivo. Esta página conserva a Dabeiba dentro del corpus histórico Katío.

Su ascenso cierra una etapa de aprendizaje y abre otra de responsabilidad. La gente ya sabe cultivar, construir y tejer. La protección permanece, pero los conocimientos deben seguir vivos en quienes los recibieron y los transmiten.`,
    history: {
      sourceFocus:
        "Dabeiba aparece en la obra de 1924 mediante una cita de Ángel Manuel Uribe y no como una transcripción directa con narrador identificado.",
      evidenceDetail:
        "La cadena la presenta como maestra de cultivo, vivienda, tejido y economía doméstica, seguida por ascenso desde Cerro León y dominio de fenómenos naturales.",
      editorialDecision:
        "La revisión conserva la figura Katío, acredita la fuente indirecta y la separa de Dobaida Cueva, que pasa a un expediente histórico mixto.",
    },
    versions: {
      mainVariant:
        "Dabeiba enseña oficios, sube desde Cerro León y continúa vinculada con lluvias, rayos, vientos y terremotos.",
      contrastVariant:
        "Dobaida aparece en fuentes coloniales sobre los Cueva del bajo Atrato y se relaciona con tormentas y un territorio buscado por conquistadores.",
      boundary:
        "La semejanza de nombres y atributos se presenta como comparación histórica, no como identidad resuelta.",
    },
    leccion:
      "El conocimiento recibido se vuelve responsabilidad cuando quien lo enseñó ya no está presente.",
    similarities: {
      internalComparison:
        "Dabeiba dialoga con Baha por la tormenta y con Ancastor por el tránsito al cielo, pero su centro está en enseñar a vivir.",
      broaderComparison:
        "Las figuras que enseñan agricultura y tejido existen en otros repertorios, aunque Cerro León y la continuidad atmosférica fijan esta memoria.",
    },
    excerpt:
      "Dabeiba enseña a cultivar, construir y tejer; luego sube desde Cerro León y continúa protegiendo a la gente.",
    seoTitle: "Dabeiba: maestra y protectora Katío",
    seoDescription:
      "Conoce a Dabeiba, figura histórica Katío que enseña agricultura, vivienda y tejido antes de ascender desde Cerro León.",
    focusKeywords: [
      "Dabeiba",
      "maestra Katío",
      "Cerro León",
      "diosa Dabeiba",
      "mitología Emberá Katío",
    ],
    tags: ["Dabeiba", "sabiduría", "tormentas", "civilización"],
    imagePromptHorizontal:
      "Ilustración panorámica full paper cut y paper quilling, no fotografía: Dabeiba como maestra humana acompaña una escena comunitaria con cultivo, tejido y construcción de tambo; Cerro León y nubes de tormenta al fondo sugieren su ascenso y protección, composición luminosa en capas recortadas, sin deidad mesoamericana, sin texto, sin maqueta física, diorama ni render 3D.",
    imagePromptVertical:
      "Conservar la ilustración vertical publicada de Dabeiba en estilo full paper cut/paper quilling; no regenerar, no fotografía ni maqueta física.",
    researchNotes: `CADENA: Severino 1924 cita a Ángel Manuel Uribe.
FRONTERA: Dabeiba Katío no se fusiona con Dobaida Cueva.
REEMPLAZO: solo horizontal; la vertical existente es reutilizable.
${archiveResearch}`,
  }),
  archiveRecord({
    slug: "dobaida",
    title: "Dobaida, memoria Cueva del bajo Atrato",
    mito: `Las fuentes coloniales escribieron Dobaida o Dobaiba para nombrar una figura vinculada con las tormentas y también un lugar del bajo Atrato. Los relatos llegaron a confundir territorio, poblado, santuario y persona sagrada porque quienes preguntaban buscaban riquezas y traducían lo que oían desde sus propias expectativas.

Dobaida pertenecía a la memoria de los Cueva o pueblos del Darién, vecinos históricos de otras sociedades del Atrato. Su nombre quedó asociado a lluvia, viento, trueno y a un centro que los invasores imaginaban lleno de oro. La noticia viajó por rutas fluviales y se transformó en promesa de conquista.

Los expedicionarios no se acercaron para comprender la relación entre la figura, el territorio y sus habitantes. Querían localizar un santuario y apoderarse de lo que suponían guardado allí. Cada información incompleta produjo una nueva búsqueda. Cuando no encontraban el lugar esperado, el nombre se desplazaba hacia otra montaña, otro río o una población más distante.

El expediente muestra cómo una tradición puede quedar atrapada dentro del archivo de quienes la persiguen. Dobaida aparece entre descripciones de tormenta y relatos de riquezas, pero las voces Cueva no fueron conservadas con la claridad de una narración oral completa. Lo que queda es una memoria fragmentaria, atravesada por traducciones, guerra y codicia.

Con el tiempo, Dobaida fue comparada con Dabeiba, maestra y protectora del corpus histórico Katío. La proximidad de los nombres y los fenómenos atmosféricos hizo atractiva la identificación. Sin embargo, las fuentes hablan de pueblos diferentes y construyen a cada figura mediante cadenas distintas.

Esta página no inventa una aventura para llenar los vacíos. Conserva la tradición como dossier histórico del bajo Atrato: una figura de tormenta, un nombre territorial y una memoria que la búsqueda colonial convirtió en objetivo. El límite también es contenido. Saber que no poseemos una versión comunitaria completa evita presentar la mirada conquistadora como si fuera el mito mismo.

Dobaida permanece, entonces, no como pirámide ni soberana mesoamericana, sino como nombre del Darién y del Atrato cuya historia escrita revela tanto una antigua sacralidad como la violencia con que fue perseguida.`,
    history: {
      sourceFocus:
        "Dobaida se retira del universo Katío y se conserva como tradición histórica mixta de los Cueva del bajo Atrato.",
      evidenceDetail:
        "Trimborn estudió las fuentes coloniales; la compilación de 1993 distingue Dabaiba como territorio o poblado, Dobaiba como figura Cueva y Dabeiba como nombre asociado al ámbito Katío.",
      editorialDecision:
        "La página abandona la falsa categoría Katío y la iconografía de pirámide mesoamericana, y declara que el archivo no conserva una voz Cueva completa.",
    },
    versions: {
      mainVariant:
        "Las crónicas asocian Dobaida con tormentas y con un centro del bajo Atrato perseguido por expediciones.",
      contrastVariant:
        "Dabeiba Katío enseña cultivo, vivienda y tejido antes de ascender desde Cerro León; esa secuencia no se traslada aquí.",
      boundary:
        "Dobaida queda en comunidad Mixto porque el sitio no cuenta con una taxonomía Cueva y porque su recepción es regional y colonial.",
    },
    leccion:
      "Nombrar una frontera incierta evita convertir la mirada del conquistador en voz de un pueblo.",
    similarities: {
      internalComparison:
        "Dobaida se compara con Dabeiba y Baha por tormentas, pero la primera pertenece al archivo Cueva y a búsquedas del bajo Atrato.",
      broaderComparison:
        "Los santuarios convertidos en rumores de oro se repiten en crónicas de conquista, aunque cada caso exige recuperar su territorio particular.",
    },
    excerpt:
      "Dobaida es una memoria Cueva del bajo Atrato atravesada por tormentas, territorio y búsquedas coloniales de riqueza.",
    seoTitle: "Dobaida: memoria Cueva del bajo Atrato",
    seoDescription:
      "Conoce la tradición histórica de Dobaida o Dobaiba y por qué no debe confundirse con Dabeiba Katío.",
    focusKeywords: [
      "Dobaida",
      "Dobaiba",
      "Cueva del bajo Atrato",
      "diosa de las tormentas",
      "Dabeiba y Dobaida",
    ],
    tags: ["Dobaiba", "tormentas", "río Atrato", "conquista"],
    sourceKeys: [
      "trimborn1953",
      "villa1993",
      "clacsoRegionalization",
      "restrepo2019",
      "severino1924",
      "minInteriorPlan",
    ],
    imagePromptHorizontal:
      "Ilustración panorámica full paper cut y paper quilling, no fotografía: paisaje del bajo Atrato y Darién con gran río, selva húmeda y tormenta; Dobaida sugerida como presencia humana-serena integrada a nubes, lluvia y viento, sin templo inventado, sin pirámide, sin oro ceremonial, sin tocado mesoamericano, sin texto, sin maqueta física, diorama ni render 3D.",
    imagePromptVertical:
      "Ilustración vertical full paper cut y paper quilling, no fotografía: el río Atrato asciende entre capas de selva hasta nubes de tormenta donde la presencia sutil de Dobaida se integra al viento y la lluvia; sin pirámide, plumas mesoamericanas, templo u oro, sin texto, sin maqueta física, diorama ni render 3D.",
    researchNotes: `TRANSFERENCIA: Katíos -> Mixto.
FRONTERA: Dobaida Cueva no equivale automáticamente a Dabeiba Katío.
REEMPLAZO VISUAL: par completo; la pirámide mesoamericana es ajena al expediente.
${archiveResearch}`,
  }),
  communityRecord({
    slug: "el-origen-del-sol-y-la-luna",
    title: "Humántahu y Gedeco, origen del sol y la luna",
    mito: `Humántahu y Gedeco vivían en la tierra y se amaban. Su relación no podía ser aceptada dentro del orden que sostenía a la comunidad. La historia los recuerda como una pareja unida por un amor prohibido, no como astros que hubieran existido desde siempre.

Cuando la relación fue descubierta, Karagabí intervino. No los destruyó ni borró el vínculo. Transformó a Humántahu en sol y a Gedeco en luna, y los puso en el cielo para que recorrieran caminos distintos. Desde entonces uno ilumina el día y la otra la noche.

La separación no es completa. Los dos se buscan en el firmamento y, en ciertos momentos, sus trayectorias parecen acercarse. La luz y la sombra hacen visible una relación que ya no puede realizarse como antes. El movimiento de los astros conserva la memoria de la pareja.

Gedeco cambia de aspecto durante su recorrido. A veces muestra apenas una parte de su rostro; otras veces aparece completa y luego vuelve a ocultarse. Humántahu mantiene una presencia más constante durante el día, pero también desaparece al final de su camino. La alternancia organiza el tiempo para quienes viven abajo.

El relato vincula el cielo con normas de parentesco y convivencia. La transformación impuesta por Karagabí crea distancia donde antes hubo una unión prohibida. Al mismo tiempo, el castigo produce una condición necesaria para el mundo: el día, la noche y los ciclos de luz.

Las versiones editoriales anteriores añadieron discusiones sobre pureza menstrual, lágrimas rojas, baños en el mar, guiños amorosos y estrellas convertidas en pájaros. Esta página no los incorpora como hechos del relato mientras no puedan acreditarse en la pieza comunitaria.

Humántahu y Gedeco permanecen separados y relacionados. Su historia no reduce el amor a una frase romántica ni convierte la prohibición en simple crueldad. Explica que el orden social y el orden celeste nacen juntos en una decisión difícil: transformar una relación terrestre en una distancia que todos pueden ver cada día y cada noche.`,
    history: {
      sourceFocus:
        "La revisión toma como fuente principal “El amor prohibido de Humántahu y Gedeco”, pieza comunitaria de Dachi Chiuu.",
      evidenceDetail:
        "El micrositio sitúa el relato en el Alto Andágueda y ofrece una vía de escucha en emberá y español, superior a la prosa generada que antes ocupaba la página.",
      editorialDecision:
        "Se conservan amor prohibido, transformación y separación celeste; se retiran añadidos no verificables y una comparación automática con Grecia y Japón.",
    },
    versions: {
      mainVariant:
        "Humántahu y Gedeco pasan de pareja terrestre a sol y luna por intervención de Karagabí.",
      contrastVariant:
        "El archivo misionero relaciona apellidos y prohibición de incesto con los linajes Domicó, pero no debe usarse para completar en silencio esta versión contemporánea.",
      boundary:
        "El Alto Andágueda mantiene su voz y no se funde con otros relatos Emberá sobre astros.",
    },
    leccion:
      "Una separación dolorosa puede convertirse en medida visible del tiempo y la convivencia.",
    similarities: {
      internalComparison:
        "Humántahu y Gedeco se relacionan con los Domicó por las reglas de parentesco y con Herupotoarra por el contacto conflictivo con la luna.",
      broaderComparison:
        "Parejas convertidas en astros existen en otros repertorios, pero los nombres y la mediación de Karagabí pertenecen a esta memoria del Alto Andágueda.",
    },
    excerpt:
      "Karagabí transforma a los amantes Humántahu y Gedeco en sol y luna y los separa en el cielo.",
    seoTitle: "Humántahu y Gedeco: sol y luna Katío",
    seoDescription:
      "Lee el relato comunitario del Alto Andágueda sobre Humántahu y Gedeco, amantes transformados en sol y luna.",
    focusKeywords: [
      "Humántahu y Gedeco",
      "origen del sol y la luna",
      "amor prohibido Emberá",
      "Alto Andágueda",
      "mito Katío",
    ],
    tags: ["Humántahu", "sol y luna", "amor", "separación"],
    sourceKeys: [
      "cnmhAmor",
      "cnmhDachi",
      "cnmhCaragabi",
      "gobiernoMayorKatio",
      "minInteriorPlan",
      "onicKatio",
    ],
    researchNotes: `FUENTE PRINCIPAL: Dachi Chiuu / CNMH, Alto Andágueda.
CORRECCIÓN: retirar episodios y paralelos no acreditados.
IMAGEN: par existente reutilizable.
${archiveResearch}`,
  }),
  archiveRecord({
    slug: "el-tesoro-de-dabeiba",
    title: "El tesoro de Dobaida",
    mito: `Entre las noticias que circularon durante la conquista apareció el nombre Dobaida. Algunos lo entendieron como una figura asociada a tormentas; otros, como un poblado, un santuario o un territorio del bajo Atrato. A la ambigüedad se sumó un rumor poderoso: allí habría una riqueza extraordinaria.

Los expedicionarios escuchaban relatos sobre objetos de oro y un centro venerado. En lugar de reconocer que el nombre podía tener sentidos distintos, lo convirtieron en punto sobre un mapa. Prepararon viajes, interrogaron a habitantes y avanzaron por ríos y selvas buscando un tesoro que siempre parecía quedar más lejos.

Cuando una ruta no llevaba al lugar esperado, la historia no terminaba. Dobaida se desplazaba hacia otro afluente, otra montaña o una región todavía no dominada. El tesoro crecía a medida que faltaban pruebas. Cada fracaso alimentaba la idea de que los habitantes lo habían escondido o que una expedición rival estaba más cerca.

La búsqueda transformó una memoria territorial en objetivo de saqueo. Las referencias a tormentas, autoridad y santuario quedaron subordinadas al oro que los invasores deseaban encontrar. Las voces de los Cueva aparecen fragmentadas en los escritos de quienes avanzaban sobre su territorio.

Esta historia no incluye al arriero Roque, una luz de Semana Santa, un niño con dientes de huito ni un cafetal milagroso. Esos episodios pertenecían a una leyenda paisa generada para la ficha anterior y no a la tradición colonial documentada. Tampoco afirma que el tesoro premiara a quien tuviera buen corazón.

Lo que permanece es otra clase de advertencia. El tesoro de Dobaida muestra cómo la codicia puede reorganizar el conocimiento: un nombre se vuelve promesa, una tormenta se vuelve obstáculo y un territorio habitado se vuelve escondite que alguien cree tener derecho a abrir.

Dobaida nunca aparece como una guaca lista para ser recuperada. En el archivo, el tesoro es una búsqueda repetida y una razón de violencia. Su ausencia material no hace falsa la historia; revela el mecanismo con que la conquista fabricó certezas a partir de rumores y convirtió una tradición ajena en mandato de posesión.`,
    history: {
      sourceFocus:
        "La página se reconstruye como dossier de la búsqueda colonial del tesoro de Dobaida y se transfiere de Katío a Mixto.",
      evidenceDetail:
        "Las fuentes distinguen Dobaida de Dabeiba y muestran el desplazamiento del nombre entre figura, poblado y territorio del bajo Atrato.",
      editorialDecision:
        "Se elimina la leyenda inventada de guaca paisa, río Sucio y Semana Santa; la URL se conserva para no perder circulación ni SEO.",
    },
    versions: {
      mainVariant:
        "Las fuentes coloniales presentan un centro rico que las expediciones intentan localizar y cuya posición cambia dentro de los relatos de conquista.",
      contrastVariant:
        "La ficha anterior fusionaba Dabeiba Katío con motivos campesinos de guacas y añadía personajes sin fuente; no se conserva como variante.",
      boundary:
        "El título se corrige a Dobaida y la página queda como recepción histórica regional.",
    },
    leccion:
      "La codicia puede convertir un nombre, un pueblo y un territorio en permiso imaginario de saqueo.",
    similarities: {
      internalComparison:
        "el tesoro de Dobaida acompaña el dossier Dobaida y las memorias de conquista, pero no completa la biografía de Dabeiba Katío.",
      broaderComparison:
        "Los rumores de ciudades de oro impulsaron otras expediciones americanas; compararlos sirve para estudiar la conquista, no para igualar tradiciones.",
    },
    excerpt:
      "El tesoro de Dobaida fue un rumor colonial que convirtió una memoria del bajo Atrato en objetivo repetido de conquista.",
    seoTitle: "El tesoro de Dobaida: búsqueda colonial",
    seoDescription:
      "Conoce la tradición histórica del tesoro de Dobaida y cómo la conquista convirtió un nombre del bajo Atrato en objetivo de saqueo.",
    focusKeywords: [
      "tesoro de Dobaida",
      "bajo Atrato",
      "Dobaida y Dabeiba",
      "búsquedas coloniales",
      "leyendas de conquista",
    ],
    tags: ["tesoro", "oro", "conquista", "río Atrato"],
    sourceKeys: [
      "trimborn1953",
      "villa1993",
      "clacsoRegionalization",
      "restrepo2019",
      "severino1924",
      "bicanGuide",
    ],
    imagePromptHorizontal:
      "Ilustración panorámica full paper cut y paper quilling, no fotografía: pequeña expedición colonial avanza en canoa por un inmenso bajo Atrato de selva y lluvia, guiada por un mapa incompleto mientras el horizonte permanece cerrado; el centro es el territorio, no el oro, sin guaca luminosa, arriero, Semana Santa, pirámide o templo mesoamericano, sin texto, sin maqueta física, diorama ni 3D.",
    imagePromptVertical:
      "Ilustración vertical full paper cut y paper quilling, no fotografía: río del bajo Atrato en capas profundas, una canoa colonial diminuta y un mapa que se fragmenta entre lluvia y vegetación, la supuesta riqueza apenas como rumor dorado distante, sin guaca, arriero, pirámide ni regalia indígena, sin texto, sin maqueta física, diorama ni 3D.",
    researchNotes: `TRANSFERENCIA: Katíos -> Mixto.
TÍTULO: “El Tesoro de Dabeiba” -> “El tesoro de Dobaida”; URL preservada.
REEMPLAZO VISUAL: par completo por cambio integral de expediente.
${archiveResearch}`,
  }),
  archiveRecord({
    slug: "fragmentos-de-otras-tradiciones",
    title: "El árbol Genené",
    mito: `El mundo de Caragabí era hermoso, pero no tenía agua. Caragabí soñó varias veces que el agua existía y comenzó a buscar dónde estaba guardada. Una paloma encontró agua fuera de este mundo; después, otro sueño mostró un árbol inmenso llamado Genené. Dentro de él estaba el agua que faltaba.

Caragabí decidió derribarlo. Fabricó hachas de piedra y reunió a su gente. Trabajaron todo el día, pero la noche llegó antes de que el árbol cediera. Cuando regresaron a la mañana siguiente, Genené no mostraba ninguna señal de los cortes. Volvieron a golpearlo con más fuerza. Al caer otra noche, Caragabí frotó sus manos y produjo una luz que permitió continuar.

Al tercer día cortaron el tronco. Genené, sin embargo, permaneció suspendido por bejucos que lo sujetaban. Caragabí llamó a varios animales, que entonces podían hablar y actuar como personas. Debían subir con una fruta en la boca; quien llegara abajo junto con la fruta mostraría que podía completar la tarea.

Yerre, Zruá y Amisurrá intentaron sin conseguirlo. Una ardilla subió, pero su fruta cayó primero. Finalmente Chidima, la ardilla más pequeña, trepó, cortó los bejucos y descendió al mismo tiempo que la fruta. Genené cayó.

El agua salió con tal fuerza que cubrió la tierra. Caragabí y diez personas se refugiaron sobre una peña alta. La inundación duró un año. Cuando comenzó a bajar, Caragabí envió una garza, un gallinazo y un pato de monte para buscar un lugar habitable. Cada ave encontró comida y olvidó regresar.

Caragabí escupió en el suelo, cubrió la saliva con una totuma y creó una paloma blanca. Ella sí volvió: contó lo que hacían las otras aves y señaló una tierra seca. Los sobrevivientes dejaron la peña y caminaron hacia allí.

De la gran cavidad de Genené salió el mar. Sus ramas formaron ríos; sus brotes, arroyos; sus renuevos menores, charcos. El tronco quedó en un lugar desconocido, rodeado por cuatro luces de piedra. Así, el árbol no es solo recipiente del agua: su cuerpo organiza las escalas con que el agua recorre el mundo.`,
    history: {
      sourceFocus:
        "La URL heredada “fragmentos de otras tradiciones” se recupera como expediente completo del árbol Genené.",
      evidenceDetail:
        "El relato está desarrollado en 1924 y también en las páginas de 1929: falta de agua, trabajo nocturno, animales trepadores, Chidima, inundación, aves mensajeras y origen de las aguas.",
      editorialDecision:
        "La creación humana permanece en su propia página; Genené deja de ser un fragmento sin foco y no se mezcla con la guardiana Getzerá de otros ciclos Emberá.",
    },
    versions: {
      mainVariant:
        "La síntesis de 1924 conserva una larga secuencia desde el sueño de Caragabí hasta la paloma que encuentra tierra seca.",
      contrastVariant:
        "Las notas de 1929 modifican detalles y otras tradiciones Emberá sitúan el agua en una mujer o un árbol con relaciones distintas.",
      boundary:
        "Esta página no fusiona Genené con todas las historias del origen del agua.",
    },
    leccion:
      "Hasta el ser más pequeño puede liberar aquello que sostiene la vida del mundo.",
    similarities: {
      internalComparison:
        "Genené dialoga con la creación de Caragabí y con Cobaima por el orden de las aguas, pero aquí Chidima completa el trabajo colectivo.",
      broaderComparison:
        "Árboles cósmicos y diluvios aparecen en muchas tradiciones; la fruta, las aves y la anatomía fluvial de Genené preservan esta versión.",
    },
    excerpt:
      "Caragabí y los animales derriban Genené; el agua inunda la tierra y sus ramas se convierten en ríos y arroyos.",
    seoTitle: "El árbol Genené: origen del agua Katío",
    seoDescription:
      "Lee el relato de Genené, el árbol que guardaba el agua y cayó cuando la pequeña ardilla Chidima cortó sus bejucos.",
    focusKeywords: [
      "árbol Genené",
      "origen del agua Katío",
      "Caragabí y Chidima",
      "diluvio Emberá",
      "mitología Katío",
    ],
    tags: ["árbol", "agua", "Caragabí", "origen"],
    researchNotes: `RECONSTRUCCIÓN: URL heredada reutilizada para Genené.
FUENTES: Severino 1924 y notas de 1929.
IMAGEN: par existente representa el árbol y se reutiliza.
${archiveResearch}`,
  }),
  archiveRecord({
    slug: "herupotoarra",
    title: "Herupotoarra, nacido de la pierna",
    mito: `Una mujer del linaje Domicó estaba pescando cuando tuvo un encuentro con una nutria. Después concibió en la pierna. De su pantorrilla nació Herupotoarra, cuyo nombre fue explicado como “nacido de la pierna”. La madre murió a consecuencia del nacimiento.

Cuando creció, Herupotoarra preguntó quién había causado la muerte de su madre. Le dijeron que había sido la luna. Puso dos palos en forma de escalera y pronunció palabras que los hacían crecer. Subió hasta alcanzar a la luna y la golpeó en el rostro. Las manchas que se ven desde la tierra quedaron como señal.

Un pájaro carpintero perforó la escalera. Herupotoarra comenzó a caer, pero repitió “sin peso” y descendió suavemente hasta Armucurá, el mundo situado debajo de la tierra. Allí vivían personas inmortales que se alimentaban del vapor de chontaduro y no tenían las mismas necesidades corporales que la gente de arriba.

Herupotoarra no permaneció en Armucurá. Reparó la escalera, volvió a la tierra y recibió una acusación diferente: el responsable de la muerte era Ambuima, un jaibaná temido que vivía en un hermoso bohío.

Preparó diez flechas y fue a enfrentarlo. Disparó, pero cada proyectil pasó cerca del brazo de Ambuima sin herirlo. El jaibaná tocó a Herupotoarra en un costado. A la mañana siguiente, el nacido de la pierna apareció muerto.

Al mediodía comenzaron a salir de su boca moscas, tábanos y mosquitos que no hacían daño. También murió Ambuima, pero su cuerpo se transformó en avispas venenosas. La diferencia entre los insectos conservó el desenlace del conflicto.

La historia no ofrece una venganza cumplida ni una respuesta final sobre la madre. Primero señala a la luna y luego a Ambuima. Herupotoarra atraviesa cielo, caída, mundo inferior y regreso, pero muere cuando intenta cerrar la búsqueda. Sus palabras alteran la escalera y el peso; no pueden obligar a que una acusación sea cierta.

El ciclo permanece abierto justamente por sus contradicciones. Otras versiones Emberá cambian el sexo del progenitor, el animal relacionado con el nacimiento, los adversarios y la muerte. Esta página conserva la trayectoria documentada sin convertirla en resumen de todas.`,
    history: {
      sourceFocus:
        "Herupotoarra está documentado en 1924 y 1929 dentro de un ciclo Emberá ampliamente variable sobre el nacido de la pierna.",
      evidenceDetail:
        "La versión histórica reúne linaje Domicó, nutria, nacimiento, luna, escalera, Armucurá, Ambuima y transformación final en insectos.",
      editorialDecision:
        "La revisión conserva acusaciones contradictorias y evita presentar la aventura como biografía coherente o moraleja cerrada.",
    },
    versions: {
      mainVariant:
        "Herupotoarra nace de la pantorrilla de una mujer Domicó, golpea a la luna, cae a Armucurá y muere frente a Ambuima.",
      contrastVariant:
        "Ferrari documenta versiones Katío, Chamí y Dóbida con progenitores, animales, enemigos, mundos y finales diferentes.",
      boundary:
        "La comparación reconoce el ciclo compartido sin importar escenas de otras regiones.",
    },
    leccion:
      "Una búsqueda de venganza puede atravesar mundos sin resolver la verdad que la inició.",
    similarities: {
      internalComparison:
        "Herupotoarra se conecta con la escalera del cielo, Armucurá y los Domicó, pero conserva una trayectoria propia de nacimiento y muerte.",
      broaderComparison:
        "Los viajes celestes y subterráneos aparecen en muchos relatos, aunque las palabras de ascenso y ligereza fijan esta variante Emberá.",
    },
    excerpt:
      "Nacido de una pantorrilla, Herupotoarra sube a la luna, cae en Armucurá y regresa para enfrentar a Ambuima.",
    seoTitle: "Herupotoarra: nacido de la pierna Katío",
    seoDescription:
      "Conoce la versión Katío de Herupotoarra: nacimiento de la pierna, viaje a la luna, caída en Armucurá y duelo con Ambuima.",
    focusKeywords: [
      "Herupotoarra",
      "nacido de la pierna",
      "Armucurá",
      "mito Katío de la luna",
      "Jinu Potó",
    ],
    tags: ["Herupotoarra", "luna", "muerte", "transformación"],
    sourceKeys: [
      "severino1924",
      "rochereau1929",
      "ferrari2023",
      "villa1993",
      "clacsoRegionalization",
      "minInteriorPlan",
      "onicKatio",
    ],
    researchNotes: `CICLO: nacido de la pierna con variantes regionales explícitas.
FUENTES: Severino 1924, notas de 1929 y Ferrari 2023.
IMAGEN: par existente reutilizable.
${archiveResearch}`,
  }),
  archiveRecord({
    slug: "icades-name",
    title: "Los yaedé y el origen del ñame",
    mito: `En tiempos remotos recorrían la tierra unos gigantes llamados yaedé. Entraban en los lugares donde vivía la gente y se llevaban a los niños que habían quedado sin protección. Su llegada producía miedo porque no bastaba cerrar la casa o esconder el alimento: buscaban cuerpos humanos.

Un padre decidió detenerlos. Sabía que el yaedé volvería y preparó una trampa. Colocó a su propio hijo como señuelo y esperó cerca, armado con una macana. La decisión era peligrosa: para atraer al gigante debía exponer aquello mismo que quería proteger.

El yaedé llegó como otras veces y se acercó al niño. Antes de que pudiera llevárselo, el padre salió de su escondite y descargó un golpe. No huyó después del primer ataque. Golpeó hasta despedazar al gigante y asegurarse de que no continuaría la cacería.

Entonces ocurrió la transformación. Los fragmentos del yaedé dejaron de ser cuerpo y se convirtieron en ñame. De allí procedieron los tubérculos que la gente comenzó a cultivar y comer en el territorio.

El relato une una amenaza y un alimento. El ñame no aparece por simple don de un creador ni por hallazgo casual. Nace cuando una familia enfrenta a un ser que devoraba niños. La comida conserva la memoria de aquella violencia transformada.

La fuente de 1924 colocó esta historia al final del capítulo de Antomiá y la resumió en pocas líneas. La página anterior tomó el encabezado heredado “Icades (Ñame)” y lo convirtió en un nombre propio sin sustento. Esta revisión conserva la URL por estabilidad, corrige el título y no inventa conversaciones, armas mágicas o ceremonias.

Las notas de 1929 ofrecen además un relato sobre Antomiá y el origen del ñame, con detalles que pueden variar entre grupos. La relación entre esos registros no está resuelta por una voz identificada. Por eso aquí permanece el núcleo claramente transmitido: yaedé, niño usado como trampa, macana, muerte del gigante y transformación en alimento.

El padre salva a los niños futuros, pero el costo de su estrategia no desaparece. La historia no pide imitarla; muestra que, en el tiempo narrado, proteger la comunidad exigió arriesgarse y convertir la fuente del terror en algo que pudiera sostener la vida.`,
    history: {
      sourceFocus:
        "La URL “icades-name” se recupera para el relato documentado de los yaedé y el origen del ñame.",
      evidenceDetail:
        "Severino lo publica junto a Antomiá; las notas de 1929 contienen un paralelo que confirma el motivo sin resolver todas las diferencias.",
      editorialDecision:
        "Se elimina el falso nombre Icades, se corrige título y SEO, y se conserva la brevedad de la fuente mediante una expansión literaria sin episodios añadidos.",
    },
    versions: {
      mainVariant:
        "Un padre atrae a un yaedé con su hijo, lo mata con macana y el cuerpo se transforma en ñame.",
      contrastVariant:
        "El paralelo de 1929 se relaciona con Antomiá y cambia el encuadre; se registra como variante, no como continuación.",
      boundary:
        "La ortografía heredada del slug se conserva únicamente para no romper la URL.",
    },
    leccion:
      "Una comunidad puede transformar la fuente del miedo en alimento y continuidad.",
    similarities: {
      internalComparison:
        "los yaedé se acercan a los Bibidigomia por el rapto y consumo de personas, pero su muerte explica el origen del ñame.",
      broaderComparison:
        "Alimentos nacidos del cuerpo de un adversario aparecen en otros relatos, aunque aquí el padre, la macana y el yaedé fijan la escena.",
    },
    excerpt:
      "Un padre vence con una macana al gigante yaedé y su cuerpo se transforma en los primeros ñames.",
    seoTitle: "Los yaedé y el origen del ñame Katío",
    seoDescription:
      "Lee el relato histórico Katío del padre que vence a un gigante yaedé y transforma su cuerpo en ñame.",
    focusKeywords: [
      "yaedé",
      "origen del ñame",
      "mito Katío del ñame",
      "Antomiá",
      "relatos Emberá",
    ],
    tags: ["origen", "bestias", "sacrificio", "naturaleza"],
    researchNotes: `TÍTULO: “Icades (Ñame)” -> “Los yaedé y el origen del ñame”.
URL: se preserva el slug heredado.
FUENTES: Severino 1924 y paralelo de 1929.
${archiveResearch}`,
  }),
  archiveRecord({
    slug: "la-escalera-del-cielo",
    title: "La escalera del cielo",
    mito: `Caragabí tenía una escalera que unía la tierra con el cielo. No era de madera: la describían como transparente, semejante al cristal, con barandas brillantes para que quienes subían o bajaban no sintieran vértigo. En la tierra descansaba sobre dos flores.

Gracias a ella, la gente podía visitar a Caragabí. El cielo estaba cerca y sus músicas se escuchaban desde abajo. La comunicación terminó cuando una mujer comenzó a subir llevando a un niño. La fuente misionera liga la escena con una falta sexual; esa explicación debe leerse bajo el peso de su vocabulario cristiano.

Mientras ascendían, el niño tocó una de las flores que sostenían la escalera. En ese instante la estructura se desprendió. Quienes ya habían llegado a la parte más alta alcanzaron el cielo; los demás cayeron a la tierra. El paso quedó roto.

Las notas de 1929 sitúan el apoyo de la escalera en Gioró, cerca de Quibdó, y conservan diferencias en la forma de contar la caída. El lugar importa: el vínculo entre mundos no era una figura abstracta, sino una conexión apoyada en una geografía nombrada.

Otra secuencia dice que, después de perder la escalera de Caragabí, la gente intentó construir una propia para volver a escuchar la música celeste. Caragabí se opuso. Cuando la obra ya alcanzaba gran altura, la derribó y alejó todavía más el cielo.

La distancia actual nació así de dos rupturas: el contacto involuntario con la flor y la insistencia humana en reconstruir el acceso sin permiso. Antes se podía subir, conversar y oír; después quedaron tierra y cielo separados.

El archivo de 1924 añade juicios, castigos y purificaciones del alma que reflejan una fuerte mediación católica. Esta página se concentra en la escalera y declara esa capa en lugar de representarla como doctrina Katío sin disputa.

Las flores no son decoración. Sostienen materialmente el paso y muestran su fragilidad. El niño no vence a un guardián ni destruye el cielo; un toque mínimo modifica la relación entre mundos. Desde entonces, la música puede recordarse, pero la subida ya no está disponible como antes.`,
    history: {
      sourceFocus:
        "La escalera está documentada en 1924 y 1929, con una geografía más precisa en las notas que la sitúan en Gioró, cerca de Quibdó.",
      evidenceDetail:
        "Ambas fuentes conservan cristal, flores y caída; la síntesis de 1924 añade una larga interpretación cristiana sobre pecado, purgación e infierno.",
      editorialDecision:
        "La revisión concentra el relato, hace visible la mediación y reemplaza la imagen de aparición mariana por la escalera floral transparente.",
    },
    versions: {
      mainVariant:
        "La escalera de Caragabí descansa sobre flores y cae cuando un niño toca una de ellas.",
      contrastVariant:
        "Otra secuencia cuenta que la gente construye su propia escalera y Caragabí la derriba antes de alejar el cielo.",
      boundary:
        "Las dos se presentan como variantes relacionadas y no como una cronología segura.",
    },
    leccion:
      "Un vínculo entre mundos puede perderse por un gesto mínimo y no reconstruirse por fuerza.",
    similarities: {
      internalComparison:
        "la escalera dialoga con Ancastor y Herupotoarra por el viaje celeste, aunque aquí el paso es colectivo, transparente y floral.",
      broaderComparison:
        "Escaleras y árboles que comunican cielos aparecen en muchas tradiciones; Gioró, las flores y la música preservan esta versión.",
    },
    excerpt:
      "Una escalera transparente apoyada en flores unía tierra y cielo hasta que un niño tocó su base y el paso se rompió.",
    seoTitle: "La escalera del cielo: relato Katío",
    seoDescription:
      "Lee el relato histórico Katío de la escalera transparente de Caragabí, sostenida por flores en Gioró.",
    focusKeywords: [
      "escalera del cielo Katío",
      "Caragabí",
      "Gioró",
      "flores sagradas",
      "mitología Emberá",
    ],
    tags: ["conexión divina", "desobediencia", "cielo", "Caragabí"].filter(
      (tag) => tag !== "cielo",
    ).concat("espiritualidad"),
    imagePromptHorizontal:
      "Ilustración panorámica full paper cut y paper quilling, no fotografía: una escalera transparente hecha de capas de papel cristalino asciende desde dos grandes flores en la selva de Gioró hacia un cielo musical; una familia se aproxima y un niño roza una flor mientras la estructura comienza a separarse, sin Virgen, santo, ángel, iglesia ni iconografía cristiana, sin texto, sin maqueta física, diorama ni 3D.",
    imagePromptVertical:
      "Ilustración vertical full paper cut y paper quilling, no fotografía: composición ascendente de una escalera transparente con barandas brillantes apoyada sobre dos flores de papel, cielo distante y figuras humanas pequeñas; el gesto de un niño toca una flor, sin aparición mariana, santo, aureola o templo, sin texto, sin maqueta física, diorama ni 3D.",
    researchNotes: `FUENTES: Severino 1924 y notas de 1929.
GEOGRAFÍA: Gioró cerca de Quibdó, aproximación regional.
REEMPLAZO VISUAL: par completo; retirar lectura mariana.
${archiveResearch}`,
  }),
  archiveRecord({
    slug: "los-bibidigomias",
    title: "Los Bibidigomia",
    mito: `Los Bibidigomia vivían dentro de árboles enormes, tan altos y gruesos que la gente decía que ya no existían otros semejantes. Sus manos cortaban como cuchillos y su jefe se llamaba Juratsarra. Salían del bosque para capturar mujeres, hombres y niños, y se los llevaban a sus viviendas.

Varios cazadores desaparecieron. Un grupo que caminaba detrás alcanzó a ver cómo unos seres extraños apresaban a sus compañeros y regresó para avisar. La comunidad envió a Atamía como explorador. Él siguió el rastro y descubrió un árbol hueco con una abertura en la parte alta. Dentro vivían los Bibidigomia. También comprobó que las personas capturadas ya habían muerto.

La gente se preparó para atacar, pero no intentó subir. Volvió a los bohíos, reunió ají, barbasco y anamú, y quemó las plantas en la base del tronco. El humo entró por la cavidad. Los Bibidigomia perdieron fuerza y fueron cayendo uno por uno. Abajo los esperaban las macanas.

El último que salió era muy fuerte. Aunque recibió un golpe, alcanzó a matar a uno de los atacantes y escapó. Después saltó un tigre que vigilaba el árbol y también fue muerto. Una tigra preñada consiguió huir; por eso, dice la historia, quedaron tigres en el mundo.

Al revisar el interior encontraron muchas calaveras. También hallaron a una niña Bibidigomia y decidieron llevarla con ellos. No querían matarla por pertenecer al grupo enemigo; esperaban que pudiera crecer dentro de otra relación.

Un día la dejaron cuidando a un niño en una hamaca. Cuando regresaron, ella dijo que dormía, pero le había abierto la cabeza. La autoridad pidió no matarla todavía. Esa misma noche atacó a una persona adulta de la misma manera. Entonces la comunidad decidió darle muerte.

El relato no presenta una victoria limpia. Los Bibidigomia desaparecen, pero mueren cazadores, escapa un adversario, sobrevive la tigra y fracasa el intento de criar a la niña. La respuesta colectiva combina observación, plantas, humo y combate; aun así no borra el daño ni convierte la diferencia en algo fácilmente domesticable.`,
    history: {
      sourceFocus:
        "Los Bibidigomia aparecen en el capítulo histórico de 1924 y en la compilación de 1993 con una secuencia extensa y reconocible.",
      evidenceDetail:
        "El archivo sostiene árbol hueco, Juratsarra, Atamía, humo de plantas, tigres, calaveras y la niña llevada a la comunidad.",
      editorialDecision:
        "La revisión elimina el lenguaje sensacionalista y racial del editor histórico sin ocultar la violencia que estructura la narración.",
    },
    versions: {
      mainVariant:
        "Los Bibidigomia capturan cazadores, son expulsados del árbol mediante humo y dejan una tigra sobreviviente.",
      contrastVariant:
        "El relato de los yaedé también incluye seres que comen niños, pero termina en el origen del ñame y no comparte el árbol ni la guerra colectiva.",
      boundary:
        "La semejanza no autoriza a unificar ambos nombres ni sus desenlaces.",
    },
    leccion:
      "La defensa colectiva puede detener una amenaza sin borrar las pérdidas ni sus consecuencias.",
    similarities: {
      internalComparison:
        "los Bibidigomia se relacionan con Costé por las desapariciones de cazadores y con los yaedé por el consumo de personas.",
      broaderComparison:
        "Viviendas de seres peligrosos en árboles aparecen en otros cuentos, pero el humo de ají, barbasco y anamú fija este episodio.",
    },
    excerpt:
      "La comunidad localiza a los Bibidigomia dentro de un árbol hueco y usa humo de plantas para detener sus ataques.",
    seoTitle: "Los Bibidigomia: relato histórico Katío",
    seoDescription:
      "Lee el relato de los Bibidigomia, habitantes de un árbol hueco enfrentados con humo de ají, barbasco y anamú.",
    focusKeywords: [
      "Bibidigomia",
      "Juratsarra",
      "mito Katío del árbol",
      "seres del monte",
      "tradición Emberá",
    ],
    tags: ["Juratsarra", "canibalismo", "bosque", "resistencia"],
    researchNotes: `FUENTE PRINCIPAL: Severino 1924.
CORRECCIÓN: se conserva violencia narrativa y se retira racialización editorial.
IMAGEN: par existente reutilizable.
${archiveResearch}`,
  }),
  archiveRecord({
    slug: "los-domicoes",
    title: "Los Domicó y los linajes",
    mito: `Caragabí quiso que la gente reconociera sus linajes y evitara uniones dentro del mismo grupo de parentesco. Durante una gran fiesta pidió que las familias se reunieran alrededor de sus autoridades. Recorrió cada conjunto y fue entregando nombres que funcionarían como apellidos.

Nombró Carupia, Celis, Chavarí, Bailarín, Guaseruca, Sinigüí, Domicó y otros. Desde entonces las personas podían saber a qué linaje pertenecían y recordar con quiénes no debían casarse. El apellido no era adorno individual: organizaba relaciones entre grupos.

Entre esos linajes, la fuente histórica destaca a los Domicó. Cuenta que tres de sus integrantes murieron junto al mar Caribe durante un ataque de los Cuna. El jefe Domicó reunió a sus guerreros y durante varios días los entrenó en el uso del arco hasta que podían acertar sin fallar.

Cuando estuvieron preparados, caminaron hacia el lugar del conflicto. Se enfrentaron con los Cuna y vencieron. La narración antigua describe una represalia extrema: cortaron las cabezas de quienes habían caído y las llevaron al bohío como trofeos.

Las cabezas quedaron suspendidas. Cada vez que se aproximaba un nuevo ataque, se movían solas y el cabello se levantaba. Funcionaban como centinelas que avisaban a la gente antes de una incursión. La memoria de los muertos del enemigo se convirtió en alarma para el territorio.

El editor de 1924 celebra la guerra y afirma una exterminación casi total. Esta página no repite esa voz como si fuera una enseñanza Katío. Conserva lo que el relato dice sobre linaje, preparación, venganza y vigilancia, y reconoce que la historia fue escrita en una región marcada por conflictos antiguos y por la mirada colonial.

Los Domicó reaparecen en otros relatos, incluido Herupotoarra, cuyo origen materno se vincula con ese linaje. Así, el nombre no pertenece solo a una batalla. Conecta parentesco, memoria, prohibiciones matrimoniales y narraciones que atraviesan generaciones.

La fiesta de los nombres y la guerra quedaron juntas en la fuente porque ambas hablan de distinguir grupos. Una organiza alianzas y límites para vivir; la otra muestra lo que ocurre cuando la diferencia se convierte en una cadena de muerte y venganza.`,
    history: {
      sourceFocus:
        "La síntesis de 1924 une la asignación de apellidos por Caragabí con un episodio bélico atribuido al linaje Domicó.",
      evidenceDetail:
        "La fuente conserva varios apellidos y relaciona la regla matrimonial con parentesco; luego narra entrenamiento, combate y cabezas centinela.",
      editorialDecision:
        "La edición no celebra el exterminio ni usa la guerra como prueba literal de historia; presenta el episodio como memoria narrada bajo mediación.",
    },
    versions: {
      mainVariant:
        "Caragabí distribuye nombres de linaje y la narración destaca después a los Domicó en un conflicto con los Cuna.",
      contrastVariant:
        "La memoria contemporánea de Humántahu y Gedeco también trata una unión prohibida, pero procede del Alto Andágueda y conserva otra secuencia.",
      boundary:
        "Las reglas de parentesco se contextualizan sin inferir su aplicación actual desde una fuente de hace un siglo.",
    },
    leccion:
      "Los nombres pueden organizar el parentesco, pero también cargar memorias difíciles de conflicto.",
    similarities: {
      internalComparison:
        "los Domicó se conectan con Herupotoarra por linaje y con Séver por memorias históricas de guerra en la región.",
      broaderComparison:
        "Clanes y apellidos regulan matrimonios en muchas sociedades, aunque los nombres enumerados por Caragabí pertenecen a este archivo.",
    },
    excerpt:
      "Caragabí entrega nombres a los linajes; el relato sigue a los Domicó en una memoria de guerra y vigilancia.",
    seoTitle: "Los Domicó y los linajes Katío",
    seoDescription:
      "Conoce el relato histórico de los apellidos dados por Caragabí y la memoria de los Domicó en el occidente.",
    focusKeywords: [
      "Domicó",
      "linajes Katío",
      "apellidos Emberá",
      "Caragabí",
      "memoria de guerra",
    ],
    tags: ["linajes", "Caragabí", "conflicto", "ancestralidad"],
    researchNotes: `FUENTE: Severino 1924.
TRATAMIENTO: memoria narrativa de conflicto, no crónica literal.
LÍMITE: no inferir reglas contemporáneas desde el archivo.
${archiveResearch}`,
  }),
  archiveRecord({
    slug: "sever",
    title: "Séver y sus hijos",
    mito: `Caragabí dejó caer una gota de agua, la cubrió con una totuma y al día siguiente encontró a una persona. De otra gota hizo una mujer. Cuando ella intentó repetir la acción, dispersó el agua como llovizna y aparecieron muchas personas que la fuente identifica como Cuna.

Más adelante, Caragabí creó de otra gota a Séver y le enseñó a usar el arco. También le dio recursos para ver y moverse de noche. Séver tuvo cinco hijos, que heredaron sus capacidades. Juntos vivían hacia las cabeceras del Atrato y recorrían el río en una canoa hecha con Genené.

La historia se convierte en una larga memoria de guerra. Séver y sus hijos enfrentan una y otra vez a expediciones Cuna. El río funciona como camino, frontera y lugar de emboscada. Chiano, uno de los hijos, muere durante una exploración. Emágai, el menor, es herido y capturado.

Séver sigue rastros de sangre hasta el poblado enemigo y quema viviendas durante la noche. Entre quienes retienen a Emágai hay desacuerdo: unos quieren matarlo; otros, conservarlo como prisionero. El joven termina desafiando al jefe, lo vence con el arco y escapa aprovechando la oscuridad.

La familia celebra su regreso, pero el ciclo de represalias continúa. En otro momento, Séver se baña lejos de casa. Una expedición se aproxima por la vegetación de la orilla y dispara al mismo tiempo. El héroe muere atravesado por flechas y su cabeza es llevada como trofeo.

Los hijos vuelven a combatir en nombre del padre. El relato asegura que obligaron a sus enemigos a retirarse hacia el Darién y que los descendientes de Séver ocuparon el territorio. Esa conclusión no puede leerse como relato histórico neutral: fue transmitida por una fuente Katío y editada por un misionero dentro de una época de regionalización y colonización.

La página conserva la dureza sin convertirla en celebración. Séver es creado, enseña y protege a su familia, pero su potencia no rompe la cadena. Cada muerte justifica otra expedición; cada victoria prepara una venganza. Incluso el hueso convertido en flauta se rompe, como si el muerto todavía resistiera ser usado por sus adversarios.`,
    history: {
      sourceFocus:
        "Séver ocupa uno de los capítulos más extensos de la síntesis de 1924 y tiene fragmentos paralelos en 1929.",
      evidenceDetail:
        "El archivo sostiene creación desde gotas, habilidades nocturnas, cinco hijos, canoa de Genené, captura de Emágai, muerte de Séver y continuación del conflicto.",
      editorialDecision:
        "La revisión trata la pieza como memoria de guerra, no como crónica verificable ni justificación contemporánea de hostilidad entre pueblos.",
    },
    versions: {
      mainVariant:
        "El libro de 1924 organiza una saga lineal de Séver, sus hijos y múltiples campañas por el Atrato.",
      contrastVariant:
        "Las notas de 1929 conservan partes y diferencias entre grupos; otros relatos atribuyen conflictos semejantes a linajes Domicó.",
      boundary:
        "La edición no armoniza todos los episodios ni adopta la conclusión territorial del misionero como hecho histórico.",
    },
    leccion:
      "La fuerza heredada no termina una guerra cuando cada pérdida alimenta la siguiente venganza.",
    similarities: {
      internalComparison:
        "Séver se relaciona con los Domicó y las tradiciones de conquista como memoria de conflicto, pero conserva personajes y geografía del Atrato.",
      broaderComparison:
        "Sagas familiares de guerra existen en muchos repertorios, aunque Emágai, Genené y la visión nocturna distinguen esta secuencia.",
    },
    excerpt:
      "Séver y sus cinco hijos recorren el Atrato en una memoria de guerra, cautiverio, muerte y venganza continuada.",
    seoTitle: "Séver y sus hijos: memoria Katío",
    seoDescription:
      "Lee el ciclo histórico de Séver, Emágai y sus hermanos en el Atrato, presentado como memoria de guerra y no como crónica literal.",
    focusKeywords: [
      "Séver",
      "Emágai",
      "mito Katío del Atrato",
      "hijos de Séver",
      "memoria de guerra",
    ],
    tags: ["Séver", "río Atrato", "conflicto", "venganza"],
    researchNotes: `FUENTES: Severino 1924 y fragmentos de 1929.
TRATAMIENTO: memoria de guerra, no historia literal.
IMAGEN: par existente reutilizable.
${archiveResearch}`,
  }),
  archiveRecord({
    slug: "tradicion-del-cerro",
    title: "El Cerro Plateado de Musinga",
    mito: `Cerca de Musinga había un cerro al que la historia terminó llamando Plateado. Allí vivían seres que el registro misionero nombra como diablos y ladrones. Atacaban a la gente vecina y podían adoptar formas de aves o animales.

Uno de ellos, descrito como un ladrón oscuro, intentó llevarse a dos hermanos. El niño consiguió escapar, pero la niña quedó cautiva en el cerro. La obligaban a obedecer y la castigaban con una culebra verde.

El hermano regresó para buscarla. Encontró una fiesta dentro del cerro: había luces, bebida, música y figuras con cuernos y colas según la descripción ya cristianizada de la fuente. El niño pronunció “Ave María Purísima”. Las luces se apagaron y la reunión quedó en silencio. Cuando alguien volvió a encenderlas, repitió la frase y produjo el mismo efecto.

Los habitantes del cerro lo capturaron. Lo colocaron en el borde de un precipicio, sostenido en una posición de caída que nunca terminaba. La niña no fue liberada y el rescate quedó incompleto.

La luz de la fiesta se reflejaba sobre una parte de la roca. Vista desde afuera, la superficie parecía plata. Ese resplandor dio nombre al Cerro Plateado. La geografía conservó así una escena ocurrida dentro de una montaña que podía abrirse como vivienda y prisión.

La narración añade que la gente de Musinga buscó una salida subterránea hacia Urrao y abandonó el lugar por miedo. También atribuye a los habitantes del cerro prácticas que después aprenderían los jaibanás, como retirar una espina por succión. Esos detalles muestran un mundo de intercambios, no una oposición simple entre humanos buenos y demonios absolutos.

El lenguaje cristiano no puede retirarse sin borrar la forma en que el relato fue registrado, pero tampoco debe tratarse como capa originaria indiscutible. La exclamación mariana, el nombre diablo y la anatomía con cuernos revelan una mediación intensa.

El niño permanece suspendido en la memoria del cerro. Su valentía interrumpe la fiesta, pero no produce un final victorioso. El brillo que nombra el lugar es al mismo tiempo señal del cautiverio y recuerdo de una comunidad que se alejó.`,
    history: {
      sourceFocus:
        "La tradición del cerro aparece en las páginas finales de las notas de 1929 y está localizada en Musinga, cerca de Frontino.",
      evidenceDetail:
        "La fuente sostiene hermanos cautivos, fiesta, exclamación mariana, precipicio, brillo de la roca, salida hacia Urrao y aprendizaje atribuido a jaibanás.",
      editorialDecision:
        "La revisión corrige la coordenada a Musinga de manera aproximada y declara la cristianización en lugar de inventar una versión precristiana.",
    },
    versions: {
      mainVariant:
        "El niño interrumpe dos veces una fiesta dentro del cerro y queda suspendido al borde del precipicio.",
      contrastVariant:
        "No existe en el archivo consultado una variante acreditada sin la fórmula mariana; reemplazarla por un conjuro indígena sería invención.",
      boundary:
        "La página conserva el nombre Cerro Plateado y no generaliza sus Antomiá a todo el territorio.",
    },
    leccion:
      "Interrumpir una fuerza temida puede revelar su lugar sin garantizar el rescate buscado.",
    similarities: {
      internalComparison:
        "el Cerro Plateado dialoga con Antomiá por seres traducidos como diablos y con Costé por montañas que albergan presencias peligrosas.",
      broaderComparison:
        "Montañas que se abren para fiestas sobrenaturales aparecen en relatos regionales, pero Musinga y el brillo plateado fijan esta tradición.",
    },
    excerpt:
      "Un niño entra al Cerro Plateado de Musinga para buscar a su hermana e interrumpe una fiesta con una frase mariana.",
    seoTitle: "El Cerro Plateado de Musinga",
    seoDescription:
      "Lee la tradición histórica del Cerro Plateado de Musinga, su fiesta interior y la fuerte mediación cristiana del registro.",
    focusKeywords: [
      "Cerro Plateado",
      "Musinga",
      "mito Katío de Frontino",
      "tradición del cerro",
      "relatos de 1929",
    ],
    tags: ["Cerro Plateado", "diablo negro", "sobrenatural", "rescate"],
    latitude: 6.75611,
    longitude: -76.18528,
    researchNotes: `FUENTE PRINCIPAL: notas de 1929, pp. 100-101.
GEOGRAFÍA: Musinga, coordenada aproximada.
MEDIACIÓN: cristianización estructural explícita.
${archiveResearch}`,
  }),
  archiveRecord({
    slug: "tradiciones-relativas-a-la-conquista",
    title: "Memorias Katío de la conquista",
    mito: `La fuente de 1929 conserva dos fragmentos sobre la llegada y la guerra. No forman una crónica continua. Son memorias breves en las que la conquista se explica mediante reyes, riqueza, engaño, muerte y resistencia.

En el primer fragmento había un rey y una reina del otro lado del mar y una pareja de soberanos indígenas en esta tierra. Los gobernantes de aquí poseían cuatro casas adornadas con oro. Cuando la noticia llegó al reino extranjero, se organizó una expedición para obtener la riqueza.

El rey indígena no aceptó entregarla. La negociación se convirtió en ataque. Las armas de quienes venían del mar decidieron el combate; el rey murió y fue decapitado. La reina quedó prisionera. Una parte de los invasores regresó con la cabeza y la cautiva, mientras otra permaneció buscando los tesoros.

El relato dice que el soberano extranjero se indignó al conocer lo ocurrido y ordenó volver. Ese giro puede reflejar una forma de narrar la violencia mediante reyes justos y soldados codiciosos; no debe usarse para disminuir la responsabilidad de la conquista ni como prueba de un hecho puntual.

El segundo fragmento nombra a Ambeu. Él resistía a los españoles y resultaba difícil de vencer. Sus adversarios prepararon un foso oculto en el camino. Durante la persecución cayó en la trampa y allí fue atacado hasta morir.

La memoria no termina con su cuerpo. Sus hijos Corpus y Umucumia heredaron el reconocimiento de su valor. El archivo no ofrece una saga completa de ellos ni permite reconstruir batallas adicionales. Sus nombres funcionan como continuidad después de la emboscada.

Estas dos piezas no se fusionan para inventar un único héroe o un reino Katío de oro. Se presentan juntas porque así llegaron en las notas y porque comparten una pregunta: cómo recordar una invasión cuando las voces escritas pertenecen en gran parte a los vencedores.

El oro aparece como motivo de avance, pero la narración no celebra su posesión. La riqueza atrae violencia; el foso muestra que la resistencia es derrotada mediante engaño; los hijos recuerdan que la muerte del jefe no borra la memoria. La conquista queda contada desde fragmentos, no desde una certeza total.`,
    history: {
      sourceFocus:
        "Las notas de 1929 registran dos fragmentos distintos: reyes y casas de oro, y Ambeu con sus hijos Corpus y Umucumia.",
      evidenceDetail:
        "El texto es una memoria narrada bajo fuerte mediación y no permite verificar literalmente soberanos, diálogos, campañas ni tesoros.",
      editorialDecision:
        "La revisión elimina la prosa épica, evita justificar al rey extranjero y conserva las dos piezas como fragmentos de memoria de conquista.",
    },
    versions: {
      mainVariant:
        "La primera pieza narra rechazo, guerra, decapitación, cautiverio y búsqueda de cuatro casas ricas.",
      contrastVariant:
        "La segunda concentra la resistencia en Ambeu, su muerte dentro de un foso y la continuidad nominal de Corpus y Umucumia.",
      boundary:
        "No se combinan como cronología ni se leen como registro factual sin contraste histórico.",
    },
    leccion:
      "Una memoria fragmentaria puede conservar la resistencia sin fingir certeza sobre toda la conquista.",
    similarities: {
      internalComparison:
        "estas memorias se relacionan con Séver y los Domicó por guerra y herencia, aunque aquí el adversario nombrado es español.",
      broaderComparison:
        "Relatos de riqueza que atrae invasores aparecen en varias crónicas americanas; la comparación debe estudiar el archivo, no homologar pueblos.",
    },
    excerpt:
      "Dos fragmentos recuerdan casas de oro, una reina cautiva y la resistencia de Ambeu frente a la conquista.",
    seoTitle: "Memorias Katío de la conquista",
    seoDescription:
      "Lee dos fragmentos históricos sobre reyes, casas de oro, Ambeu, Corpus y Umucumia, presentados con sus límites documentales.",
    focusKeywords: [
      "memorias Katío de la conquista",
      "Ambeu",
      "Corpus y Umucumia",
      "casas de oro",
      "relatos de 1929",
    ],
    tags: ["Ambeu", "conquista", "resistencia", "oro"],
    imagePromptHorizontal:
      "Ilustración panorámica full paper cut y paper quilling, no fotografía: composición en dos escenas conectadas por selva y río, a la izquierda cuatro casas indígenas luminosas observadas desde muy lejos por una expedición marítima, a la derecha Ambeu evita una emboscada junto a un foso; énfasis en territorio y resistencia, sin guerrero con regalia dorada genérica, sin tocados mesoamericanos, sin violencia gráfica, sin texto, sin maqueta física, diorama ni 3D.",
    imagePromptVertical:
      "Ilustración vertical full paper cut y paper quilling, no fotografía: Ambeu en sendero de selva frente a un foso oculto, con sombras lejanas de invasores y, arriba, cuatro casas doradas como memoria y no como tesoro espectacular; dignidad y tensión, sin regalia panindígena, conquistador heroico, violencia gráfica o texto, sin maqueta física, diorama ni 3D.",
    researchNotes: `FUENTE: notas de 1929, p. 91.
TRATAMIENTO: dos fragmentos de memoria, no crónica literal.
REEMPLAZO VISUAL: par completo; retirar estereotipos de regalia dorada.
${archiveResearch}`,
  }),
];

export const katioMythsBySlug = Object.fromEntries(
  records.map((record) => [record.slug, record]),
);

if (Object.keys(katioMythsBySlug).length !== records.length) {
  throw new Error("Hay expedientes Katío duplicados.");
}

export default records;
