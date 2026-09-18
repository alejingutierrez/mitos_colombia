const narrativeBoundary = `Esta reconstrucción mantiene la secuencia documentada y separa narración, contexto y lectura editorial. Los nombres traducidos se conservan como aparecen en las publicaciones consultadas. No añade vestuario, diálogos, ceremonias, parentescos ni explicaciones espirituales que la fuente no ofrece. Cuando la vista de la monografía es fragmentaria, el límite se declara: una frase comprobable no se expande hasta parecer una transcripción completa. La página sigue pública porque existe un núcleo documental identificable, no porque toda incertidumbre haya desaparecido.`;

function myth({ title, summary, tags, mito, ...definition }) {
  const seoTitle = `${title} | Andoque`;
  const focusKeywords = [title, "relatos Andoque", ...tags.slice(0, 3)];
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

const inheritedContext = [
  "tradicionesOpenLibrary",
  "diluvioPdf",
  "diluvioRecord",
  "minCultura",
  "puebloAndoke",
  "igac",
];

const primaryContext = [
  "diluvioRecord",
  "tradicionesGoogle",
  "tradicionesOpenLibrary",
  "minCultura",
  "puebloAndoke",
  "igac",
];

export const andoqueDefinitions = [
  myth({
    slug: "el-sol-que-nace-en-araracuara",
    title: "Sol, Luna y el tronco",
    summary:
      "Sol encierra a Luna en un tronco; animales y cortadores lo liberan antes de que una disputa separe sus caminos.",
    tags: ["Sol", "Luna", "tronco", "animales"],
    narrativeSource: "tradicionesGoogle",
    contextSources: inheritedContext,
    mito: `Una torcaza puso un huevo. Al romperse, una parte se volvió Sol y la otra Luna. Sol tenía por esposa a Tortuga-redonda. Luna visitaba a su cuñada durante la noche, de modo que ella siguió la indicación de su esposo: guardó un tinte negro y marcó el rostro del visitante. Al amanecer la señal permitió reconocerlo.

Después Sol preparó una trampa. En la chagra colocó dos piñas, una macho y otra hembra, en el hueco de un tronco; de allí salieron dos guacamayas. Llevó a Luna a buscarlas. Mientras este trataba de alcanzarlas, entró en el tronco. Sol retiró el apoyo y lo dejó encerrado.

Distintos animales escucharon a Luna. Carpinteros golpearon la madera, murciélagos y otros visitantes le llevaron frutas, y de los residuos acumulados creció un higuerón. Los intentos continuaron hasta que llegó Cortador con su hacha y, junto con otros, hizo una abertura por la que Luna pudo salir.

Luna tomó madera de balso y comenzó a formar una mujer; Cortador le ayudó a terminarla. Las astillas y partes sobrantes se transformaron en aves, piedras y peces. Más adelante Sol y Luna participaron en una pesca con barbasco. Disputaron por un pez y el conflicto levantó agua. Sol se retiró hacia el oriente. La madre reprendió a Luna, quien partió tras su hermano. Desde entonces sus caminos quedaron separados en la secuencia del relato.`,
    historyCore:
      "La monografía sitúa esta pieza al comienzo del corpus. La versión heredada conservaba una secuencia reconocible, pero estaba cubierta de prosa añadida; la revisión vuelve a las acciones verificables.",
    versionCore:
      "Los fragmentos confirman la relación de Sol y Luna con el agua, el tronco y los gigantes. No se afirma que la pieza explique por sí sola todos los astros o el origen completo del mundo.",
    similarityCore:
      "Hermanos celestes enfrentados y personajes encerrados en árboles aparecen en otros corpus. Aquí la identidad está en Tortuga-redonda, el tinte, las guacamayas, los animales que alimentan a Luna, Cortador y la mujer hecha de balso.",
    leccion:
      "La ayuda sostenida puede abrir una salida donde la rivalidad había cerrado el camino.",
    sceneHorizontal:
      "Sol observa un gran tronco mientras aves carpinteras y murciélagos abren un paso para Luna",
    sceneVertical:
      "Luna sale del tronco junto a una figura de balso, con astillas convertidas en aves, piedras y peces",
    researchNotes:
      "FUENTE DIRECTA: Tradiciones de la gente del hacha, vista fragmentaria. Se eliminan afirmaciones no verificables de la redacción heredada.",
  }),
  myth({
    slug: "los-gigantes",
    title: "Los gigantes que nombraron los ríos",
    summary:
      "Un recorrido de gigantes nombra ríos y deja dibujos en piedra que guardan una geografía difícil de leer desde el presente.",
    tags: ["gigantes", "ríos", "petroglifos", "territorio"],
    narrativeSource: "tradicionesGoogle",
    contextSources: inheritedContext,
    mito: `El relato responde a preguntas sobre los dibujos grabados en las piedras junto a los ríos. Antes de la gente actual vivieron gigantes. Uno de ellos inició un recorrido desde un tronco de árbol madi y el cerro de la palma de milpeso. Mientras avanzaba observaba lo que había en cada lugar y daba nombre a las corrientes.

Un trueno oído cerca de una bocana quedó unido al río de Trueno. La presencia de cananguchos dio nombre a otro curso. También aparecen el río de Dedo, el río Azul, el río Dibujo y el río de Lobo, entre otros nombres traducidos en la versión publicada. El viajero no solo pronunciaba palabras: dibujaba aquello que nombraba sobre la piedra, dejando señales para quienes venían detrás.

Otros gigantes podían reconocer ese lenguaje. La narración recuerda que hablaban de una manera que ya no se entiende por completo. No eran un único coloso que fabricaba el paisaje a golpes, sino gente anterior, con grupos propios y una forma de nombrar ligada a recorridos, bocanas, animales, plantas y marcas visibles.

La introducción de Cuentos del diluvio de fuego explica que las riberas del Caquetá tienen petroglifos, sitios arqueológicos y artefactos de piedra, y registra que la gente Andoque atribuía esos testimonios a gigantes anteriores a los indígenas actuales. Lo que permanece en la piedra permite recordar su existencia, aun cuando su habla y parte de sus nombres ya no se comprenden.`,
    historyCore:
      "Landaburu y Pineda indican que el texto nació de preguntas al capitán sobre petroglifos regionales. El volumen lo ubica en las páginas 203 a 211, según índice y fragmentos.",
    versionCore:
      "La introducción de 1981 llama a los gigantes antecesores y hacedores de testimonios de piedra. El texto de 1984 desarrolla un itinerario de nombres; se relacionan sin tratarlos como transcripciones idénticas.",
    similarityCore:
      "Antepasados de gran tamaño y paisajes nombrados por caminantes son motivos extendidos. La versión Andoque se reconoce por su pregunta sobre petroglifos, ríos nombrados desde sus bocanas y un lenguaje que los actuales ya no descifran.",
    leccion:
      "Nombrar un territorio también es conservar la memoria de quienes aprendieron a recorrerlo.",
    sceneHorizontal:
      "figuras gigantes recorren bocanas amazónicas y señalan ríos mientras dejan signos planos sobre grandes piedras",
    sceneVertical:
      "una piedra con dibujos junto al río, observada por descendientes que siguen una ruta entre palmas y bocanas",
    researchNotes:
      "PÁGINAS: 203-211. El texto está ligado explícitamente a preguntas sobre petroglifos.",
  }),
  myth({
    slug: "las-sirenas",
    title: "Los seres del agua de Sitakara",
    summary:
      "Unos niños bailan con seres del agua en Sitakara; la llegada armada de los adultos rompe el encuentro.",
    tags: ["seres del agua", "Sitakara", "danza", "Duché"],
    narrativeSource: "tradicionesGoogle",
    contextSources: inheritedContext,
    mito: `Un grupo de niños iba a bailar a una playa de la quebrada Huevo-de-pescado. El lugar, debajo de un chorro y cerca de una cerca, era conocido como Sitakara. Durante uno de esos bailes llegaron otras personas y se mezclaron con los niños. La traducción publicada las llama sirenas, pero el propio texto las describe como gente de otra clase.

Los niños contaron en casa que alguien llegaba cuando bailaban. Los adultos les pidieron que, si volvía, siguieran la danza y no soltaran a los visitantes. También acordaron que uno regresaría a avisar. Cuando el encuentro se repitió, el mensajero cumplió y los padres se acercaron con arcos y flechas.

Vieron figuras sin taparrabos y con cabello largo hasta la cintura. Uno de los adultos disparó. El ser masculino fue alcanzado y al día siguiente lo encontraron flotando en la bocana del río. La figura femenina consiguió volver al agua y permaneció, según el núcleo transmitido, en un remanso de la bocana del Duché.

La narración conserva una canción asociada al encuentro. El fragmento consultable también hace una distinción importante: estos seres no enfermaban a quienes estaban con ellos, a diferencia de lo que se decía de otras apariciones. Por eso la ficha no los presenta como monstruos que seducen y matan ni como equivalentes automáticos de la sirena europea. El nombre «sirena» permanece en la URL heredada; el título visible prefiere «seres del agua» y conserva Sitakara.`,
    historyCore:
      "El relato ocupa las páginas 212 a 215 de Tradiciones de la gente del hacha. Los fragmentos confirman el baile, el ataque, la canción y que el contacto no causaba enfermedad.",
    versionCore:
      "«Sirena» es la traducción de la edición y no prueba identidad con el ser europeo de cola de pez. La descripción habla de personas de otra clase y diferencia sus efectos de otros espíritus.",
    similarityCore:
      "Seres acuáticos que participan en música o danza tienen paralelos amplios. Sitakara, la quebrada Huevo-de-pescado, el cabello largo, la flecha y la afirmación de que el encuentro no enfermaba distinguen esta narración.",
    leccion:
      "El miedo puede convertir un encuentro compartido en una pérdida que ya no tiene regreso.",
    sceneHorizontal:
      "niños bailan en la playa de Sitakara con dos figuras humanas que emergen del agua al atardecer",
    sceneVertical:
      "una figura regresa al remanso del Duché mientras un arco queda abajo y la danza se interrumpe",
    researchNotes:
      "TÍTULO: se conserva el slug histórico, pero se evita imponer iconografía europea de cola de pez.",
  }),
  myth({
    slug: "los-fantasmas",
    title: "El visitante que desafió al fantasma",
    summary:
      "Un visitante desoye las advertencias, enfrenta a un fantasma y descubre que la bravata no basta para dominarlo.",
    tags: ["fantasma", "visitante", "noche", "advertencia"],
    narrativeSource: "tradicionesGoogle",
    contextSources: inheritedContext,
    mito: `Un visitante llegó a un lugar cuyos habitantes le advirtieron sobre los fantasmas. Le señalaron sitios por los que no debía andar sin cuidado. Él respondió con desafío: decía que, si el fantasma lo agarraba, también él lo agarraría y lo llevaría para mostrárselo a quienes intentaban asustarlo.

La noche convirtió esa seguridad en una prueba. El visitante se encontró con la aparición y el enfrentamiento comenzó. La narración publicada no presenta una sombra silenciosa ni un alma que pida misas. El fantasma actúa, habla y convoca ayuda. En uno de los pasajes consultables llama a Mariposa-cara-de-fantasma y le pide un machete para despedazar al hombre.

La amenaza se representa como si el cuerpo del visitante fuera trozado. El texto juega con lo que el hombre cree poder sujetar y con la capacidad de la aparición para invertir esa pretensión. La bravata inicial —agarrar al fantasma— deja de ser una prueba sencilla de valor cuando el adversario multiplica gestos, voces y aliados.

La vista digital disponible no ofrece el relato completo. Por esa razón esta página no conserva la promesa heredada de «actualizar cuando haya más información», pero tampoco inventa desenlace, ceremonia de protección o teoría general sobre la muerte. Expone el arco verificable: advertencia, desafío, encuentro y amenaza. Tradiciones de la gente del hacha identifica la pieza en sus páginas 216 a 221 y permite recuperar fragmentos decisivos, no todos sus movimientos.`,
    historyCore:
      "La ficha heredada no tenía relato. La monografía permite confirmar título y pasajes de las páginas 216 a 221; la revisión publica ese núcleo sin fingir acceso integral.",
    versionCore:
      "La versión visible incluye visitante, advertencias, un fantasma activo y Mariposa-cara-de-fantasma. No se añade que sea un difunto familiar, castigo cristiano o clase universal de espíritu Andoque.",
    similarityCore:
      "El viajero que se burla de una advertencia es un motivo frecuente. Aquí importan la respuesta literal de agarrar al fantasma, la ayuda de Mariposa-cara-de-fantasma y el machete solicitado para trozar al visitante.",
    leccion:
      "Desoír una advertencia por orgullo puede dejarnos sin respuesta frente a un peligro real.",
    sceneHorizontal:
      "un visitante avanza de noche junto al río mientras una figura fantasmal y una mariposa aparecen entre capas de selva",
    sceneVertical:
      "Mariposa-cara-de-fantasma sostiene la silueta de un machete sobre el camino, sin violencia explícita",
    researchNotes:
      "LÍMITE: la vista fragmentaria no permite afirmar el desenlace. La transparencia reemplaza el texto de relleno heredado.",
  }),
  myth({
    slug: "el-mundo-de-ultratumba",
    title: "Canoa-de-Piedra y la gente de abajo",
    summary:
      "Tras la muerte de su hija, Canoa-de-Piedra entra al monte y conoce a la gente que vive debajo de la tierra.",
    tags: ["Canoa-de-Piedra", "mundo subterráneo", "duelo", "Aduche"],
    narrativeSource: "tradicionesGoogle",
    contextSources: inheritedContext,
    mito: `Canoa-de-Piedra vivía en la cabecera del Aduche. Era uno de los mayores de su grupo y había aprendido escuchando a especialistas huitoto mientras viajaba. Tenía un hijo y una hija. Un día la hija volvió de arrancar yuca, enfermó de manera repentina y murió.

El padre quedó dominado por el dolor. Tomó caldo de yuca con intención de morir, pero no murió. Cayó en un estado semejante al sueño y se internó en el monte. Llegó a un sitio señalado por una piedra. Allí encontró a gente que vivía debajo de la tierra.

Los habitantes de abajo le preguntaron por qué había llegado. Le hablaron de la muerte de su hija y atribuyeron el daño a gente del río Quinché. También le entregaron hierbas y le explicaron cómo usarlas. El viaje no queda reducido a una visita consoladora a la muchacha: combina duelo, conocimiento, acusación y la posibilidad de responder a un daño.

Cuando regresó, Canoa-de-Piedra habló con sus hermanos. Contó que debajo de la tierra vivían familiares muertos y que allí había abundancia. La versión lo presenta como el primero que avisó de ese ámbito. Uno de sus hermanos, Gavilán-del-diablo, fue el único que aprendió directamente de él.

La página heredada llamaba al destino «mundo de ultratumba». El título público nombra a Canoa-de-Piedra y a la gente de abajo para evitar una equivalencia automática con cielo, infierno o reino europeo de los muertos. La piedra, el sueño, el monte y el aprendizaje entre pueblos sostienen esta versión.`,
    historyCore:
      "Los fragmentos de las páginas 227 y 228 identifican a Canoa-de-Piedra, su aprendizaje entre gente huitoto, su descendencia y a Gavilán-del-diablo como único hermano que aprendió de él.",
    versionCore:
      "La expresión heredada «ultratumba» orientaba al lector, pero imponía una categoría externa. La revisión conserva la URL y usa el vocabulario espacial del relato: debajo de la tierra y gente fallecida.",
    similarityCore:
      "Viajes al mundo de los muertos y saberes obtenidos en sueños aparecen ampliamente. Esta pieza se distingue por la cabecera del Aduche, el caldo de yuca, la piedra de entrada, la acusación al Quinché y Gavilán-del-diablo.",
    leccion:
      "El duelo puede abrir una búsqueda de conocimiento, pero no borra el riesgo de la venganza.",
    sceneHorizontal:
      "Canoa-de-Piedra entra al monte hasta una gran piedra abierta en capas que revela una comunidad bajo tierra",
    sceneVertical:
      "el viajero regresa desde la piedra con hojas medicinales mientras sus hermanos lo esperan en Aduche",
    researchNotes:
      "PÁGINAS: 227-228. El título visible evita convertir el ámbito subterráneo en una escatología importada.",
  }),
  myth({
    slug: "la-venganza-de-los-brujos",
    title: "Los dos transformadores",
    summary:
      "Dos especialistas que se convierten en jaguar, boa y águila atacan poblados y escapan de quienes intentan detenerlos.",
    tags: ["transformación", "jaguar", "boa", "águila"],
    narrativeSource: "tradicionesGoogle",
    contextSources: inheritedContext,
    mito: `Dos hombres tenían la capacidad de cambiar de forma. Podían volverse jaguar, boa, culebra verrugosa, águila o gavilán. No empleaban ese poder para proteger a quienes encontraban. La versión los presenta recorriendo otros lugares, haciendo daño y tomando represalias.

Cuando llegaban a una comunidad atacaban a la gente. En forma de grandes depredadores podían comer personas y luego desaparecer antes de que quienes los perseguían lograran alcanzarlos. Otros especialistas intentaban responder, pero las transformaciones volvían difícil reconocerlos y cercarlos.

En uno de los episodios la persecución recurre al humo y a las armas. Los dos transformadores contestan alterando el tiempo: producen un aguacero que apaga o dispersa el ataque y les abre una salida. La lluvia no aparece como simple castigo de la naturaleza, sino como parte de la disputa entre conocimientos.

La relación entre los dos tampoco es tranquila. Uno se burla del temor del otro y lo obliga a continuar. La alianza, sostenida por el daño y la venganza, no se convierte por ello en ejemplo de cooperación. Su fuerza aumenta el peligro para niños y adultos de los asentamientos por donde pasan.

El fragmento público confirma la serie de formas —jaguar, boa, culebra verrugosa, águila o gavilán— y dice que los otros brujos no podían con ellos. La ficha evita describir a todos los especialistas rituales Andoque como agresores. Son dos personajes definidos por lo que hacen en un relato específico.`,
    historyCore:
      "La pieza comienza en la página 228 de Tradiciones de la gente del hacha. El fragmento accesible enlaza directamente el final de Canoa-de-Piedra con «La venganza de los brujos».",
    versionCore:
      "La fuente emplea términos traducidos como brujo y tigre. La página usa especialista y jaguar para orientar, pero mantiene el título documental y no redefine el vocabulario original.",
    similarityCore:
      "La metamorfosis de agresores en animales aparece en muchas narrativas. La combinación propia reúne jaguar, boa colorada, culebra verrugosa y águila, junto con persecuciones frustradas y lluvia para escapar.",
    leccion:
      "El poder usado para dañar convierte incluso una alianza fuerte en amenaza para todos.",
    sceneHorizontal:
      "dos siluetas humanas se transforman en jaguar, boa y águila mientras una lluvia intensa cruza la selva",
    sceneVertical:
      "un poblado se protege bajo el aguacero y observa huellas que cambian de animal a persona",
    researchNotes:
      "PÁGINA INICIAL: 228. La ficha evita generalizar la conducta de los protagonistas a especialistas contemporáneos.",
  }),
  myth({
    slug: "la-brujeria-de-la-danta",
    title: "Trueno-de-piedra y el guayuco de transformación",
    summary:
      "Trueno-de-piedra enfrenta a un rival transformado, toma su guayuco y negocia la devolución por un conocimiento peligroso.",
    tags: ["Trueno-de-piedra", "danta", "guayuco", "transformación"],
    narrativeSource: "tradicionesGoogle",
    contextSources: inheritedContext,
    mito: `Trueno-de-piedra se encontró con un especialista huitoto que podía adoptar formas animales. El rival se presentó como jaguar y lo siguió por la selva. Trueno-de-piedra también conocía transformaciones: podía convertirse en jaguar, boa u otros seres para resistir y cambiar las condiciones del enfrentamiento.

La lucha no terminó con la muerte de uno de los dos. Trueno-de-piedra consiguió quitarle al visitante su guayuco. La prenda era necesaria para recuperar o ejercer su capacidad de transformación. Sin ella, el adversario quedó obligado a buscar un acuerdo.

El dueño pidió que se la devolvieran. A cambio ofreció enseñar el uso de una hierba. La planta podía causar una enfermedad que alteraba temporalmente la conducta de quien la sufría. El intercambio incluyó también conocimiento sobre la manera de contrarrestarla. Así, una confrontación entre figuras animales pasó a ser una negociación sobre objetos, enfermedad y saber.

El título heredado pone a la danta en primer plano porque esa forma participa en la secuencia transmitida. Sin embargo, el núcleo no describe una danta ordinaria que embruja a una comunidad. Se trata de especialistas que se reconocen y desafían mediante transformaciones, y de un guayuco que permite recuperar una posición perdida.

La revisión no afirma que esa hierba sea una práctica actual ni que el intercambio represente todas las relaciones entre Andoque y huitoto. Conserva lo narrado: persecución, cambio de forma, pérdida de la prenda y transmisión ambigua de un conocimiento capaz de causar y curar daño.`,
    historyCore:
      "La ficha pertenece a la secuencia de relatos sobre especialistas y transformaciones. El núcleo heredado se mantiene porque coincide con personajes, objetos y acciones identificables del corpus.",
    versionCore:
      "Los nombres traducidos de animales y la palabra «brujo» pertenecen a la mediación editorial. No se sustituye al rival por una entidad maligna universal ni se presenta la hierba como receta.",
    similarityCore:
      "Prendas que permiten cambiar de forma recuerdan relatos de pieles o capas mágicas. Aquí la identidad depende de Trueno-de-piedra, el rival huitoto, el guayuco y el intercambio por una hierba que causa y cura enfermedad.",
    leccion:
      "Un conocimiento obtenido en disputa conserva la responsabilidad por el daño que puede causar.",
    sceneHorizontal:
      "Trueno-de-piedra sostiene un guayuco entre siluetas planas de danta, jaguar y boa en la selva",
    sceneVertical:
      "dos especialistas intercambian una prenda y una hoja, con las formas animales separadas al fondo",
    researchNotes:
      "CAUTELA: no se describe una práctica medicinal contemporánea ni se ofrece instrucción de uso de plantas.",
  }),
  myth({
    slug: "los-grupos-de-mi-juventud",
    title: "Los grupos de mi juventud",
    summary:
      "Un narrador recuerda los grupos y capitanes vinculados al Duché y a Sitio-del-llanto antes de la dispersión.",
    tags: ["linajes", "capitanes", "Duché", "Sitio-del-llanto"],
    narrativeSource: "tradicionesGoogle",
    contextSources: inheritedContext,
    mito: `El narrador habla de los jóvenes de su padre: sus huérfanos y trabajadores procedían de un mismo lugar y él los hizo gente. El sitio se ubicaba debajo de Sitio-del-llanto, cerca de donde antes habían salido cosas y personas de los ciclos de origen.

Su padre era recordado con el nombre traducido Gavilán-de-piriri y como capitán. No aparece simplemente como creador sobrenatural de toda la humanidad. Su acción consiste en reunir, reconocer y organizar gente dentro de una memoria de territorio y autoridad.

A lo largo del río Duché vivían grupos cuyos nombres se relacionaban con animales, plantas o condiciones particulares. La enumeración heredada incluye gente de Hormiga arriera, Guacamayo rojo, Borugo y Fantasma. Cada grupo tenía capitán y lugar. El río conectaba asentamientos sin borrar sus diferencias.

La narración usa «mi juventud» porque es recuerdo de un orden conocido por quien habla. El detalle de capitanes fallecidos, gente dispersa y sitios nombrados la acerca a una memoria social, no a un catálogo abstracto de clanes. La monografía continúa esta sección con «Los capitanes de mi juventud» antes de pasar al testimonio sobre los caucheros.

La revisión evita convertir al padre del narrador en dios creador. «Hacer gente» puede nombrar reagrupamiento, reconocimiento y vida común dentro de este corpus; no se traduce automáticamente como fabricar cuerpos. El núcleo es una geografía humana del Duché: quiénes estaban, de dónde venían, quién hablaba por ellos y cómo el narrador los recuerda desde un tiempo posterior.`,
    historyCore:
      "El índice sitúa «Los grupos de mi juventud» en la página 232 y «Los capitanes de mi juventud» en la 234. Un fragmento confirma jóvenes, huérfanos, trabajadores y Sitio-del-llanto.",
    versionCore:
      "La ficha mantiene solo el primero de los dos títulos porque es la URL heredada. Reconoce la continuación sobre capitanes sin fusionarla ni crear otra página a partir de fragmentos.",
    similarityCore:
      "Listas de linajes y fundadores pueden parecer genealogías de otros pueblos. Aquí importan la primera persona, el padre Gavilán-de-piriri, Sitio-del-llanto, el Duché y los nombres de grupos concretos.",
    leccion:
      "Recordar nombres, lugares y autoridades protege una historia colectiva frente a la dispersión.",
    sceneHorizontal:
      "varios grupos se distribuyen en las riberas del Duché mientras un capitán señala Sitio-del-llanto",
    sceneVertical:
      "un narrador mayor recuerda capitanes y jóvenes cuyas rutas convergen junto a una maloca",
    researchNotes:
      "GÉNERO: memoria territorial y social dentro del corpus. «Hacer gente» no se expande como creación biológica.",
  }),
  myth({
    slug: "los-caucheros-de-la-casa-arana",
    title: "La Casa Arana en la memoria Andoque",
    summary:
      "Un testimonio recuerda mercancías, deudas impuestas, cautiverio y asesinatos durante la explotación cauchera.",
    tags: ["Casa Arana", "caucho", "testimonio", "violencia"],
    narrativeSource: "tradicionesGoogle",
    contextSources: inheritedContext,
    mito: `Esta pieza no ocurre en un tiempo indeterminado. El narrador recuerda la llegada del peruano a tierra muinane y el comienzo de relaciones alrededor de mercancías. El capitán Flor-de-guacamayo recibió al visitante y avisó a otros grupos para que fueran a recoger bienes.

Acudieron personas de Fantasma y capitanes nombrados como Plumón-de-guacamayo, Plato y Cría-de-peine. Las mercancías no fueron un regalo. Quedaron ligadas a la obligación de entregar caucho. Cuando los recolectores no completaban la cantidad exigida, la deuda se convertía en castigo.

Hombres fueron atados. Capitanes, ancianos y otras personas murieron. El relato identifica a los Quemadores —los blancos— como responsables de las matanzas. La voz que cuenta sobrevivió y distingue su suerte de la de quienes fueron asesinados o desaparecieron. No es una aventura sobre guerreros invencibles: es memoria de explotación, encierro y pérdida.

La introducción de Cuentos del diluvio de fuego sitúa el contexto. A comienzos del siglo XX compañías caucheras controlaban a miles de indígenas; la mayoría de la gente Andoque fue asesinada, y quienes sobrevivieron sufrieron nuevas deportaciones antes de 1932. Esos datos acompañan el testimonio, pero no reemplazan sus nombres ni su perspectiva.

La revisión mantiene la URL porque retirarla borraría una memoria central. El título y el texto declaran su género: testimonio histórico. Tampoco suavizan la Casa Arana como intercambio fallido. La secuencia de mercancía, cuota, amarre y muerte muestra un sistema de coerción.`,
    historyCore:
      "Tradiciones de la gente del hacha ubica el texto en la página 236. El artículo de 1981 vincula a Yiñefoque con la vida anterior a los caucheros y explica colapso demográfico y deportaciones.",
    versionCore:
      "La memoria oral y la síntesis histórica de los investigadores se presentan en capas separadas. Cifras y fechas contextualizan, pero no se ponen en boca del narrador.",
    similarityCore:
      "Relatos de peonaje por deuda y extracción violenta existen en toda la Amazonía. Flor-de-guacamayo, los grupos convocados, la mercancía, el caucho y los Quemadores anclan esta memoria Andoque.",
    leccion:
      "Nombrar víctimas, responsables y mecanismos de coerción impide que la violencia se vuelva abstracción.",
    sceneHorizontal:
      "una comunidad junto al río observa mercancías y fardos de caucho separados por una línea oscura de coerción",
    sceneVertical:
      "un sobreviviente recuerda capitanes ausentes ante una maloca y un sendero marcado por ataduras rotas",
    researchNotes:
      "GÉNERO: testimonio histórico, no cosmogonía. Se mantiene por relevancia documental y memoria comunitaria.",
  }),
  myth({
    slug: "el-retorno-de-plumon-amarillo",
    title: "Plumón-amarillo vuelve a reunir a la gente",
    summary:
      "Después de la devastación cauchera, Plumón-amarillo reúne a sobrevivientes antes de una nueva deportación.",
    tags: ["Plumón-amarillo", "reagrupamiento", "deportación", "memoria"],
    narrativeSource: "tradicionesGoogle",
    contextSources: inheritedContext,
    mito: `Después de los asesinatos y la dispersión provocados por el sistema cauchero, quedó la pregunta de cómo la gente volvió a reunirse en un solo lugar. La respuesta de la narración es directa: Plumón-amarillo fue quien juntó a quienes habían quedado.

No los creó desde la nada ni los resucitó como muertos. Reunió sobrevivientes dispersos. La introducción histórica explica que, al terminar la década de 1920, apenas subsistía un grupo de alrededor de doscientas personas bajo una autoridad Andoque. Un fragmento de la monografía asocia a Plumón-amarillo con ese reagrupamiento y con trabajo impuesto bajo Miguel Zumaeta, empleado de la Casa Arana.

La reunión no significó seguridad definitiva. Poco antes del conflicto colombo-peruano de 1932, la mayoría de esa gente fue deportada hacia el Perú por agentes de la Casa Arana. En el territorio quedaron muy pocas personas. El retorno del título es por ello frágil: juntar a la gente vuelve posible la vida común, pero el régimen extractivo todavía conserva poder para separarla.

La fuente disponible permite recuperar ese núcleo, aunque no ofrece todo el texto en vista abierta. La revisión no añade discursos ceremoniales, profecías ni milagros de resurrección. Explica qué se puede sostener: hubo sobrevivientes, una autoridad los reunió, trabajaron bajo continuidad cauchera y fueron expuestos a otra deportación.

«Volver gente» en este marco nombra reagrupamiento político y social. Después de la violencia, tener capitán, maloca, trabajo compartido y voz común hacía posible reconocerse otra vez como colectivo.`,
    historyCore:
      "El índice ubica la pieza en la página 239. Fragmentos de las páginas 32 y 239 confirman reagrupamiento, unas doscientas personas, Miguel Zumaeta y deportación previa a 1932.",
    versionCore:
      "La introducción de 1981 llama Doñekoi a una autoridad del reagrupamiento y luego atribuye otra reunión a Yiñeko. La ficha no declara equivalencias onomásticas sin evidencia.",
    similarityCore:
      "Otros pueblos amazónicos narran dispersión y retorno tras el caucho. Esta pieza se distingue por Plumón-amarillo, la Casa Arana, Miguel Zumaeta, el grupo de sobrevivientes y la deportación hacia Perú.",
    leccion:
      "Reunir a quienes sobrevivieron es una forma de continuidad aun bajo una amenaza persistente.",
    sceneHorizontal:
      "Plumón-amarillo convoca familias dispersas hacia una maloca junto al río después de la explotación cauchera",
    sceneVertical:
      "un grupo reunido mira dos caminos, uno hacia la maloca y otro impuesto hacia el río y la deportación",
    researchNotes:
      "PÁGINA: 239. La ficha diferencia reagrupamiento histórico de resurrección sobrenatural.",
  }),
  myth({
    slug: "el-retorno-de-plumon-de-fiebre",
    title: "Plumón-de-fiebre y el regreso de la gente",
    summary:
      "Una segunda memoria atribuye a Plumón-de-fiebre la reunión que permitió a un grupo volver a vivir como gente.",
    tags: ["Plumón-de-fiebre", "retorno", "reagrupamiento", "memoria"],
    narrativeSource: "tradicionesGoogle",
    contextSources: inheritedContext,
    mito: `La monografía conserva una segunda pieza de retorno después de la narración sobre Plumón-amarillo. Su título es «El retorno de Plumón-de-fiebre» y el índice la sitúa en la página 242. La ficha heredada retenía un núcleo breve: personas que parecían acabadas o dispersas volvieron a reunirse por la acción de una figura a la que la voz se refiere también como «tu papá».

Esa figura las juntó en un lugar y les permitió volver a ser gente. La expresión no obliga a imaginar cadáveres físicamente resucitados. Dentro del contexto histórico presentado por Landaburu y Pineda, la población Andoque había sido asesinada, deportada y fragmentada por el sistema cauchero. Reunirse, construir vida común y quedar bajo una autoridad podía ser descrito como un nuevo comienzo colectivo.

La vista digital no expone las páginas completas. Por eso la revisión conserva la pieza separada, pero no fabrica asentamientos, fechas, rituales o combates. Tampoco la fusiona con Plumón-amarillo: el índice dedica títulos y páginas diferentes a ambos retornos, evidencia suficiente para respetar su individualidad mientras no exista una edición completa que demuestre duplicación.

El contenido anterior convertía la incertidumbre en una revivificación casi cósmica. Aquí la incertidumbre se muestra. Sabemos que la pieza trata de reunión, paternidad o autoridad y recuperación de la condición de gente; sabemos también que sigue al testimonio cauchero. Lo que no sabemos queda sin adornos. Mantener la página conserva un título documentado y evita llenar el vacío bibliográfico con una historia ajena.`,
    historyCore:
      "El índice coloca esta pieza en la página 242, inmediatamente después del retorno de Plumón-amarillo. La versión heredada aportaba un núcleo compatible con reagrupamiento.",
    versionCore:
      "No se fusiona con Plumón-amarillo porque la fuente los trata como textos distintos. Tampoco se afirma quién es «tu papá» sin poder consultar la transcripción completa.",
    similarityCore:
      "Renacer como pueblo después de una catástrofe recuerda relatos de restitución colectiva. Aquí la prudencia es parte de la identidad: nombre propio, página separada y secuencia histórica posterior al caucho.",
    leccion:
      "Volver a reunirse puede restaurar la vida común sin borrar las pérdidas que la precedieron.",
    sceneHorizontal:
      "familias separadas atraviesan senderos de selva y convergen alrededor de Plumón-de-fiebre y una maloca",
    sceneVertical:
      "una figura paterna recibe a un grupo que vuelve junto al río, con espacios vacíos que recuerdan a los ausentes",
    researchNotes:
      "LÍMITE: el texto completo de la página 242 no está abierto. Se conserva la distinción documental y se elimina la expansión cósmica.",
  }),
  myth({
    slug: "la-guerra-del-palo-hablador",
    title: "La guerra del Palo Hablador",
    summary:
      "Un gusano oculto en un gran tronco desafía a la gente; Trueno-de-piedra consigue la espada capaz de vencerlo.",
    tags: ["Palo Hablador", "Trueno-de-piedra", "Doña Sueño", "guerra"],
    narrativeSource: "diluvioPdf",
    contextSources: primaryContext,
    mito: `Garza-de-bocana visitó a Garza-de-centro y fue recibido con comida. Cuando partía vio a la esposa de su anfitrión mientras se bañaba, trató de ocultarse, cayó al agua y murió. Garza-de-centro lo encontró y lo hizo respirar de nuevo. El visitante ocultó lo sucedido y preparó una venganza: la guerra del Palo Hablador.

Dos hijos de Nenefi vieron gusanos sobre un gran tronco. Cada persona que acudía encontraba más, hasta que el árbol quedó cubierto. Cuero-negro hablaba desde allí y lanzaba flechas de astilla. Armadillos, aves y combatientes intentaron acercarse, pero avispas, hormigas y gusanos protegían la cepa.

Nenefi pidió a Trueno su espada. Trueno le entregó una falsa, hecha de balso, que se quebró. Garza-de-centro envió dos murciélagos a buscar el sueño donde Doña Sueño. Ellos abrieron el paquete en el camino y quedaron dormidos. Mochilero-de-candela hizo un segundo viaje, obedeció y sopló el sueño sobre la nuca de Trueno.

Trueno-de-piedra, hijo de Trueno y sobrino de Garza-de-centro, cambió la espada verdadera por la falsa después de recibir dos caimos. Con el arma y el espejo produjo un relámpago, derribó los gusanos y partió el tronco. Sus hojas se convirtieron en ranas comestibles.

Yiñefoque cerró aclarando que no hablaba el palo sino Cuero-negro. Identificó el Remanso-de-trueno en el Duché y dijo haber visto el tronco vuelto piedra arenosa. También enlazó la pieza con su vida: los Quemadores destruyeron la gente de su padre y lo obligaron a abandonar su tierra.`,
    historyCore:
      "Cuentos del diluvio de fuego publica la transcripción completa y la atribuye a Yiñefoque dentro de relatos recogidos en Aduche. Su epílogo une lugar mítico, guerra y desplazamiento cauchero.",
    versionCore:
      "La fuente aclara expresamente que el palo no habla: lo hace el gusano Cuero-negro. La página conserva la corrección y no transforma el tronco en divinidad vegetal.",
    similarityCore:
      "Árboles hostiles, armas del trueno y viajes para conseguir sueño tienen paralelos. La secuencia Andoque reúne gusanos crecientes, espada falsa de balso, mensajeros dormidos, Mochilero-de-candela, dos caimos y Remanso-de-trueno.",
    leccion:
      "La victoria depende de escuchar, corregir el engaño y defender a la gente propia.",
    sceneHorizontal:
      "un tronco cubierto de gusanos dispara astillas mientras Trueno-de-piedra alza una espada de relámpago",
    sceneVertical:
      "Mochilero-de-candela lleva en una hoja el sueño de la abuela hacia la maloca de Trueno",
    researchNotes:
      "RELATOR: Yiñefoque. LUGAR: el epílogo ubica el tronco petrificado en el río Duché.",
  }),
  myth({
    slug: "huevo-de-chupaflor-el-diluvio-y-el-fuego",
    title: "Huevo-de-chupaflor, el diluvio y el fuego",
    summary:
      "Huevo-de-chupaflor busca al ave que se burla; después un hueso libera el diluvio y comienza la recuperación del fuego.",
    tags: ["Huevo-de-chupaflor", "diluvio", "fuego", "huérfanos"],
    narrativeSource: "diluvioPdf",
    contextSources: primaryContext,
    mito: `Después de la guerra del Palo Hablador, un sapo surgió de su raíz. El pajuil real oyó su voz y cantó que Huevo-de-chupaflor era tuerto. El origen del personaje explica ese ojo: las hijas del Príncipe-de-la-Ilusión ponían huevos que se volvían colibríes; una hermana menor recogió uno, lo mantuvo caliente en algodón de hormiga y, al pincharlo, hirió el ojo del humano que salió.

Ya adulto, Huevo-de-chupaflor hizo trampas para identificar al ave. Interrogó a panguanas, tente, pava y pajuiles hasta escuchar la burla completa. Mató a sabudui y llevó el ave a la casa del centro, donde fue cocinada.

Dos huérfanos debían botar los huesos al río sin chuparlos. Desobedecieron. De un hueso salió agua sin fin. Llovió, el Águila represó la desembocadura y la maloca revestida de barro quedó sumergida. Los hermanos llegaron a Sitio-del-llanto, pisaron una semilla de tona entre los dedos y subieron con el árbol mientras crecía.

Canoa-de-opái y Huevo-de-chupaflor viajaron hacia la bocana para buscar fuego. Una niña encontró al segundo mojado y lo protegió junto a la candela. Cuando tomó un tizón, los adultos cerraron la salida con una atarraya; él la quemó y escapó. El pajuil tragó el fuego y luego lo expulsó. Un pez pejedulce hizo lo mismo, y aquello se volvió piedra tetee.

El caloche rompió el cerco del Águila y el agua bajó. Semillas, sardinas y pavas anunciaron la claridad. Los huérfanos, todavía en el tona, se dijeron que volverían a ser hombres.`,
    historyCore:
      "La transcripción encadena nacimiento, cacería del pajuil, huérfanos, diluvio, robo del fuego y amanecer. La ficha los conserva juntos porque el artículo los presenta como secuencia continua.",
    versionCore:
      "El título resume un ciclo largo y no reemplaza sus subtítulos. Huevo-de-chupaflor no causa solo el diluvio: la desobediencia de los huérfanos y el represamiento del Águila son decisivos.",
    similarityCore:
      "Diluvios por transgresión y robos del fuego son motivos extendidos. Aquí distinguen el hueso de sabudui, la semilla de tona, la niña que protege al colibrí, la atarraya, el pajuil, el pejedulce y la piedra tetee.",
    leccion:
      "Una transgresión puede desbordar el mundo, y la recuperación exige muchas ayudas distintas.",
    sceneHorizontal:
      "dos huérfanos ascienden con un árbol tona sobre el diluvio mientras el Águila represa la bocana",
    sceneVertical:
      "Huevo-de-chupaflor escapa con un tizón a través de una red quemada junto a la casa del fuego",
    researchNotes:
      "CICLO: páginas 63-70 del artículo. Se mantiene como una ficha por continuidad interna.",
  }),
  myth({
    slug: "el-aguila-canibal-y-la-madre-de-los-andoques",
    title: "El Águila Caníbal y la madre de los Andoque",
    summary:
      "Nenefi enfrenta a un águila que come gente; después Doña Cucarrón-de-vida resguarda alimentos y restaura el mundo.",
    tags: ["Águila Caníbal", "Cucarrón-de-vida", "Nenefi", "restauración"],
    narrativeSource: "diluvioPdf",
    contextSources: primaryContext,
    mito: `La esposa de Nenefi formó dos bolas con almidón de yuca dulce y las puso en la horqueta de una mata. Se volvieron águilas, macho y hembra, y tuvieron un hijo. Cuando el joven creció, su padre dejó de cazar solo animales y empezó a llevarle gente.

Nenefi preparó una trampa con un mico volador amarrado en un chinchorro. Mientras el águila forcejeaba, tomó al hijo y lo llevó a la maloca, donde fue comido. La casa quedó revestida de piedra arenosa. Nenefi hizo una flauta con el hueso del joven. Al oírla, el padre pidió que le devolvieran a su hijo y metió una pata por la cumbrera. La gente la amarró y la arrancó.

El águila voló herida. Las gotas de sangre se volvieron piedra, arenisca y agua, y de ellas surgieron nombres de gente. Luego el ave extendió sus alas en la bocana y represó el río, conectando el episodio con el diluvio.

En la misma casa vivía Doña Cucarrón-de-vida, llamada madre de los Andoque y primera antes de la gente. Su segundo hijo la condujo bajo tierra hasta la Loma de los Andoque. Desde allí construyó una casa que llegaba al cielo y subió por dentro alimentos, tubérculos y frutas para protegerlos de la creciente.

Cuando el agua bajó, regresó. Dos veces trajo tierra desde abajo para restaurar el mundo quemado. Moldeó plantas, animales y gente. Se alimentaba de agua y era sembradora. Nenefi quedó arriba; Sindi fue príncipe de jaguares, Pepai de boas y peces, y Tomirepa vigilante de abajo. Los huérfanos sobrevivientes tuvieron descendencia: los gigantes posteriores al diluvio.`,
    historyCore:
      "El artículo transcribe consecutivamente «El Águila Caníbal», «La madre de los Andoques» y la distribución final de vigilantes. La ficha los mantiene unidos por esa continuidad explícita.",
    versionCore:
      "El subtítulo impreso «Los dioses de los Andoques» pertenece a la mediación de 1981. La página describe funciones y parentescos sin convertir automáticamente a cada figura en dios.",
    similarityCore:
      "Aves caníbales, casas que alcanzan el cielo y madres restauradoras tienen paralelos. Aquí importan almidón de yuca dulce, mico volador, flauta de hueso, pata arrancada, sangre transformada y tierra traída dos veces.",
    leccion:
      "Restaurar el mundo requiere proteger alimento, traer tierra y volver a sembrar después del desastre.",
    sceneHorizontal:
      "un águila enorme vuela sobre una maloca de piedra arenosa mientras gotas se vuelven piedra, agua y linajes",
    sceneVertical:
      "Doña Cucarrón-de-vida asciende por una casa hasta el cielo llevando tubérculos y frutas sobre el diluvio",
    researchNotes:
      "RELATORES DEL CICLO: Yiñeko y Yiñefoque según la introducción; no se atribuye cada párrafo por separado.",
  }),
];

export default andoqueDefinitions;
