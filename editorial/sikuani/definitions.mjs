function myth({ title, summary, tags, ...definition }) {
  const seoTitle = `${title} | Sikuani`;
  const focusKeywords = [title, "relatos Sikuani", ...tags.slice(0, 3)];
  return {
    ...definition,
    title,
    summary,
    tags,
    excerpt: summary,
    seoTitle,
    seoDescription: summary,
    focusKeywords,
  };
}

const ortizContext = [
  "villaRecord",
  "icbfEnsani",
  "cnmh",
  "ucla",
  "onic",
  "baquero",
];

export const sikuaniDefinitions = [
  myth({
    slug: "historia-de-un-brujo",
    title: "El brujo y el águila enorme",
    summary:
      "Dos enemigos envían a un brujo hacia una laguna peligrosa; su conocimiento y sus transformaciones le permiten volver con vida.",
    tags: ["brujo", "águila", "yopo", "prueba"],
    narrativeSource: "villaPdf",
    contextSources: ortizContext,
    mito: `Dos hombres querían librarse de un brujo. Le hablaron de una laguna desconocida y lo enviaron a pescar allí, seguros de que no regresaría. El brujo aceptó el viaje. Al llegar encontró peces y preparó su jornada, pero antes consumió yopo para reconocer el peligro que lo rodeaba.

Cuatro serpientes Kueima aparecieron cerca del agua. El brujo no se dejó sorprender. Después vio un águila de tamaño extraordinario, tan grande que la versión la compara con un avión. El ave se lanzó sobre él. Para escapar, el hombre cambió sucesivamente de forma: fue picure, después lapa y luego lombriz. Cada transformación le permitió evitar el ataque y buscar una posición desde la cual responder.

El brujo disparó sus flechas. Las dos primeras no terminaron la lucha. La tercera alcanzó al águila y la derribó. Con la caída del ave se levantó un viento feroz, parecido a un huracán. El hombre volvió a recurrir a su conocimiento: primero se hizo paja y después gusano, formas pequeñas que podían resistir sin ser arrancadas por la fuerza del aire.

Cuando el viento cesó, regresó a su casa. La maraca que había dejado comenzó a bailar y anunció su retorno. La gente dudó de lo ocurrido, de modo que fue a comprobarlo. Encontró el águila enorme y entendió que el viajero había superado la prueba que sus enemigos prepararon.

Hubo una reunión con yopo y kapi. Quienes habían enviado al brujo se embriagaron y quedaron expuestos ante los demás. Él no necesitó vengarse de la misma manera: afirmó que había vuelto porque conocía su oficio y tenía fuerza para afrontar aquello que buscaba destruirlo.

Esta página sigue la narración de Pedro Martínez registrada en 1974. No convierte sus transformaciones en una doctrina general sobre especialistas Sikuani ni añade iniciaciones, espíritus tutelares o discursos que la transcripción no ofrece.`,
    historyCore:
      "Historia de un brujo fue relatada por Pedro Martínez en 1974 y publicada por Francisco Ortiz en Literatura oral Sikuani, páginas 172 a 188 del conjunto citado por Villa Posse. En la compilación de 1993 aparece en las páginas 279 y 280.",
    versionCore:
      "La ficha conserva una sola versión identificada. El término «brujo» pertenece al título y traducción publicados; no se reemplaza por un nombre Sikuani que la fuente no proporciona ni se usa para definir a todos los especialistas rituales.",
    similarityCore:
      "Las pruebas contra aves enormes y las metamorfosis para escapar tienen paralelos amplios. Aquí la combinación específica incluye la laguna, cuatro Kueima, tres flechas, el huracán, las formas de picure, lapa, lombriz y paja, y una maraca que anuncia el regreso.",
    leccion:
      "El conocimiento probado en la dificultad puede deshacer una trampa sin repetir la traición.",
    sceneHorizontal:
      "un águila enorme desciende sobre una laguna llanera mientras un viajero sostiene arco y flechas entre serpientes simbólicas",
    sceneVertical:
      "una maraca se mueve frente a una casa al regresar el viajero, con pequeñas siluetas de picure, lapa y lombriz como memoria de sus transformaciones",
    researchNotes:
      "RELATOR: Pedro Martínez, 1974. GÉNERO: la compilación lo presenta entre modalidades de literatura oral distintas del mito.",
  }),
  myth({
    slug: "historia-de-un-tigre",
    title: "El jaguar y los dos hermanos",
    summary:
      "Una disputa familiar empuja a una mujer al camino; el regreso de su esposo revela una pérdida causada por el jaguar y por la hostilidad.",
    tags: ["jaguar", "familia", "camino", "duelo"],
    narrativeSource: "villaPdf",
    contextSources: ortizContext,
    mito: `Dos hermanos vivían con sus familias. El menor se ausentó para intercambiar yopo y lancetas. Su esposa quedó con un hijo pequeño en casa de la suegra. Durante esos días surgió una disputa entre los niños de las dos mujeres. La esposa del hermano mayor reprochó con dureza a su cuñada y la hizo sentir que ya no podía permanecer allí.

La mujer tomó al niño y emprendió el camino para buscar a su esposo. En el trayecto apareció un jaguar. El animal la mató y se la comió. El pequeño quedó vivo por un momento. En la narración, el jaguar incluso le habla antes de alejarse, una escena que acentúa la indefensión del niño sin convertir al felino en un personaje idéntico en todos los relatos Sikuani.

Cuando el esposo regresaba, escuchó el llanto. Encontró al niño y le dio agua, pero ya era demasiado tarde y el pequeño murió. El hombre siguió las huellas, halló al jaguar y lo mató. Después volvió para sepultar juntos a su esposa y a su hijo.

El duelo no terminó allí. Al llegar a la casa preguntó por qué la mujer había salido sola. La cuñada reconoció que su reproche había provocado la partida. El hombre la mató, cerrando la historia con otra violencia. La página no presenta ese desenlace como justicia recomendada ni como norma Sikuani: narra una cadena trágica en la que una agresión verbal, el aislamiento del camino y la venganza multiplican la pérdida.

Esta es Historia de un tigre, relatada por Rita Gaitán en 1974. La palabra «tigre» de la edición se muestra como jaguar para orientar al lector colombiano, sin cambiar el título documental en las notas. No debe confundirse con Cuento del tigre: allí una mujer rescata a sus hijos desde una casa Tsorueto y el conflicto tiene protagonistas y desenlace distintos.`,
    historyCore:
      "Historia de un tigre fue relatada por Rita Gaitán en 1974. Villa Posse la reproduce en la página 281 y remite al corpus publicado por Francisco Ortiz en 1982.",
    versionCore:
      "La colección conserva por separado este relato y Cuento del tigre. Compartir un jaguar no basta para fusionarlos: uno sigue una partida, una muerte y una venganza; el otro ocurre en una casa Tsorueto y termina con el rescate de una mujer y sus hijos.",
    similarityCore:
      "Los felinos depredadores y las cadenas de venganza aparecen en muchas literaturas. La identidad de esta versión depende del intercambio de yopo y lancetas, el conflicto entre cuñadas, el niño encontrado en el camino y el reconocimiento final de la causa de la partida.",
    leccion:
      "Una hostilidad que expulsa a alguien del cuidado común puede convertir el daño en una cadena irreparable.",
    sceneHorizontal:
      "un sendero atraviesa la sabana y el bosque de galería, con una mujer cargando a un niño y la silueta distante de un jaguar entre los árboles",
    sceneVertical:
      "dos hermanos se encuentran junto a un camino marcado por huellas de jaguar, con una casa llanera al fondo y atmósfera de duelo",
    researchNotes:
      "RELATORA: Rita Gaitán, 1974. CAUTELA: la violencia final se presenta como desenlace narrativo, nunca como práctica cultural normativa.",
  }),
  myth({
    slug: "kawiri-monae",
    title: "Kawiri Monae y la mujer ausente",
    summary:
      "Una mujer recién parida desaparece con los Kawiri Monae y vuelve años después, cuando su nueva familia la conduce hasta los suyos.",
    tags: ["Kawiri Monae", "retorno", "familia", "bachacos"],
    narrativeSource: "villaPdf",
    contextSources: ortizContext,
    mito: `Una mujer acababa de tener un hijo y permanecía apartada en una casa separada, como indica la situación inicial de la versión. Mientras estaba allí llegaron los Kawiri Monae, llamados «caribes» en la traducción publicada. Se la llevaron con el niño y su familia no supo dónde encontrarla.

Los parientes salieron a buscarla. Recorrieron lugares cercanos y llamaron, pero no obtuvieron respuesta. La mujer podía verlos durante esas búsquedas; sin embargo, no conseguía hablarles ni hacerse reconocer. Permaneció con uno de los Kawiri Monae y vivió en su territorio. Allí comía bachacos y cuidaba al niño, que fue creciendo.

Pasaron los años. El hombre con quien vivía decidió llevarla de regreso. Durante el trayecto le indicó que cerrara los ojos. Cuando pudo abrirlos otra vez, estaba cerca de su antigua familia. Quienes la habían buscado descubrieron que seguía viva y que el niño ya no era el bebé desaparecido, sino un muchacho crecido.

La mujer explicó que había visto a sus parientes mientras la buscaban, pero que entonces no podía responder. Su retorno reúne dos tiempos: para la familia había sido una ausencia sin señales; para ella había transcurrido una vida completa en otro ámbito, con alimentación, pareja y crianza.

La fuente no desarrolla una guerra entre pueblos ni describe a los Kawiri Monae como almas que comen emociones. Esas expansiones pertenecían a la versión heredada del sitio y se eliminan. La nota léxica de la compilación relaciona Kawiri Monae con «caribes» y Kawiri con duende o caribe, pero esa glosa no resuelve por sí sola si los personajes deben entenderse como un grupo humano, seres de otro ámbito o ambas cosas en la perspectiva narrativa.

Rita Gaitán relató Kawiri Monae en septiembre de 1980. La página conserva su ambigüedad y evita convertir una palabra traducida en una descripción etnográfica de personas contemporáneas.`,
    historyCore:
      "Kawiri Monae fue relatado por Rita Gaitán en septiembre de 1980 y reproducido en la página 282 de la compilación. Es el registro más tardío de los siete cuentos seleccionados.",
    versionCore:
      "La traducción glosa Kawiri Monae como «caribes» y Kawiri como duende o caribe. En lugar de escoger una equivalencia total, la ficha conserva el nombre Sikuani y describe solo las acciones del relato.",
    similarityCore:
      "El retorno desde un ámbito inaccesible y el tiempo vivido de manera distinta recuerdan otros relatos de ausencia. Son propios de esta pieza la casa posparto separada, los bachacos, la imposibilidad de responder durante la búsqueda y la instrucción de cerrar los ojos antes de volver.",
    leccion:
      "Reconocer la experiencia de quien regresa exige escuchar el tiempo que vivió fuera de nuestra vista.",
    sceneHorizontal:
      "una familia busca junto al bosque de galería mientras una mujer con un niño los observa desde un sendero separado por capas de vegetación",
    sceneVertical:
      "una mujer cierra los ojos guiada de regreso por una figura discreta, y al fondo aparece su familia cerca de una casa llanera",
    researchNotes:
      "RELATORA: Rita Gaitán, septiembre de 1980. LÉXICO: se mantiene Kawiri Monae y se registra la glosa sin imponer una ontología única.",
  }),
  myth({
    slug: "la-mujer-sarnosa",
    title: "La mujer y el áinawi",
    summary:
      "Abandonada por su esposo, una mujer recibe ayuda de un áinawi invisible, sana y elige no volver con quien la dejó.",
    tags: ["áinawi", "abandono", "sanación", "mundo subterráneo"],
    narrativeSource: "villaPdf",
    contextSources: ortizContext,
    mito: `Un hombre abandonó a su esposa en la cabecera de un caño. La mujer padecía sarna y quedó sola, sin medios para regresar. Desde el bosque llegó otro hombre. Le llevó jabón, vestido, perfume y peine. Con esos elementos ella se limpió, se curó y recuperó su apariencia.

El visitante era un áinawi, un ser invisible en la glosa de la edición. Permaneció con la mujer y se convirtió en su compañero. Cuando el primer esposo volvió, la encontró sana y quiso que regresara con él. Ella se negó: recordó que la había dejado enferma y escogió quedarse con quien la había auxiliado.

La nueva unión alteró el ritmo ordinario. La mujer quedó embarazada y dio a luz en apenas seis días. El niño creció. Más adelante, su padre lo llevó consigo debajo de la tierra. La narración vincula así la ayuda recibida en el bosque con un ámbito que no es visible para las demás personas.

El cierre ofrece una explicación sobre dónde viven los seres humanos. Si la mujer hubiera acompañado al áinawi, dice el cuento, las personas vivirían debajo. Como decidió no seguirlo y permaneció arriba, la humanidad vive sobre la tierra. La elección no borra la relación: el hijo sí cruza hacia el lugar de su padre.

Rita Gaitán relató La mujer sarnosa en 1977. El título histórico describe una enfermedad y puede sonar despectivo fuera del relato; por eso la página pública se titula «La mujer y el áinawi», mientras conserva el nombre documental en la historia de la fuente.

La versión heredada había añadido ceremonias de sanación, consejos comunitarios y un romance idealizado. Aquí se retiran. El núcleo documentado es más preciso: abandono, objetos de cuidado, recuperación, rechazo del primer esposo, una gestación extraordinaria y la separación entre el mundo de arriba y el mundo de abajo.`,
    historyCore:
      "La mujer sarnosa fue relatada por Rita Gaitán en 1977 y ocupa las páginas 282 y 283 de la compilación. El nuevo título visible centra a la protagonista y al áinawi, sin ocultar cómo aparece registrada la pieza.",
    versionCore:
      "La glosa define áinawi como invisible, pero no ofrece una clasificación exhaustiva de estos seres. La ficha evita describirlo como dios, chamán o espíritu protector universal.",
    similarityCore:
      "Las parejas de otro mundo y las gestaciones aceleradas tienen paralelos extendidos. Esta versión se reconoce por jabón, vestido, perfume y peine; la negativa a volver con el hombre que abandonó a la protagonista; los seis días y la explicación final sobre vivir encima de la tierra.",
    leccion:
      "Recibir cuidado no obliga a volver con quien abandonó, y una decisión puede abrir mundos distintos.",
    sceneHorizontal:
      "una mujer junto a la cabecera de un caño recibe un peine, una tela y jabón de una figura apenas visible entre árboles llaneros",
    sceneVertical:
      "una madre permanece sobre la tierra mientras un niño sigue a su padre hacia un sendero subterráneo sugerido por capas planas",
    researchNotes:
      "RELATORA: Rita Gaitán, 1977. TÍTULO: se moderniza el nombre visible sin borrar el título de archivo.",
  }),
  myth({
    slug: "el-tigre",
    title: "El jaguar en la casa Tsorueto",
    summary:
      "Una mujer descubre un jaguar dentro de una casa Tsorueto, salva a sus hijos por el techo y avisa a los hermanos de su esposo.",
    tags: ["jaguar", "Tsorueto", "rescate", "casa"],
    narrativeSource: "villaPdf",
    contextSources: ortizContext,
    mito: `Un hombre viajó con su esposa y sus hijos para visitar a sus familiares. Llegaron a una casa Tsorueto, llamada «casa de sueño» en la traducción. Estaba cerrada para impedir que entraran insectos y parecía vacía.

Dentro había un jaguar. En la oscuridad brillaban sus ojos, pero el hombre no aceptó la advertencia. Restó importancia a lo que veía y permaneció en la casa. El animal se acercó a la mujer y comenzó a lamerla. Entonces ella comprendió que el peligro era real.

Sin enfrentarlo de inmediato, buscó una salida para los niños. Los hizo pasar por la parte alta del techo, cerca del caballete, y salió con ellos. Desde afuera escuchó lo que ocurría. El jaguar atacó y se comió a su esposo.

La mujer y los niños pidieron ayuda. Los hermanos del muerto oyeron los gritos y llegaron a la casa. Cerraron sus entradas para que el animal no escapara y prendieron fuego a la construcción. El jaguar murió dentro.

La historia no termina con una venganza entre parientes, sino con el rescate de quienes lograron salir y la respuesta colectiva frente al depredador. El detalle decisivo es que la mujer reconoce aquello que su esposo había rechazado: observa los ojos, siente al animal y actúa antes de que sea demasiado tarde para sus hijos.

Pedro Martínez relató Cuento del tigre en 1972. La página heredada se llamaba «El tigre» y conserva su slug por estabilidad, pero el título visible especifica el jaguar y la casa Tsorueto.

No se unifica con Historia de un tigre. Allí el felino mata a una mujer en un camino y el relato sigue el duelo de su esposo; aquí la protagonista está dentro de una vivienda, evacua a los niños por el techo y consigue que la ayuda llegue. Las dos piezas comparten animal, no argumento.`,
    historyCore:
      "Cuento del tigre fue relatado por Pedro Martínez en 1972 y aparece en las páginas 283 y 284 del volumen compilado. Es uno de los registros más tempranos del conjunto.",
    versionCore:
      "Tsorueto se traduce como «casa de sueño» en el texto. La fuente describe su cierre contra insectos, pero no ofrece información suficiente para convertirla en modelo general de vivienda o ceremonia.",
    similarityCore:
      "El depredador oculto en una casa recuerda cuentos de amenaza doméstica. Esta pieza se distingue por los ojos brillantes, la advertencia desoída, el gesto de lamer, la salida de los niños por el caballete y el incendio de la casa sellada.",
    leccion:
      "Atender una señal concreta y proteger primero a quienes dependen de nosotros puede salvar vidas.",
    sceneHorizontal:
      "una casa Tsorueto cerrada al anochecer con dos ojos de jaguar visibles en el interior y una mujer guiando niños hacia el techo",
    sceneVertical:
      "niños descienden desde el caballete mientras familiares se acercan por la sabana y la silueta del jaguar queda dentro de la casa",
    researchNotes:
      "RELATOR: Pedro Martínez, 1972. DISTINCIÓN: este cuento no se fusiona con Historia de un tigre.",
  }),
  myth({
    slug: "la-danta-y-el-terecay",
    title: "La danta y el terecay",
    summary:
      "Tras la muerte de una anciana, un terecay sigue durante años el rastro de la danta hasta encontrar una forma de vengarla.",
    tags: ["danta", "terecay", "anciana", "rastreo"],
    narrativeSource: "villaPdf",
    contextSources: ortizContext,
    mito: `Una anciana cuidaba animales. En una conversación comentó que el hígado de danta era sabroso. La danta escuchó y decidió engañarla. Se tendió de manera que la mujer creyera que podía alcanzar el órgano desde una abertura de su cuerpo. Cuando ella introdujo el brazo, el animal la atrapó, la mató y se la llevó.

Un terecay comenzó a buscar a su abuela. Preguntó por ella y siguió indicios a través del territorio. Un excremento le reveló que la danta la había matado. El terecay no encontró de inmediato al responsable. Pasaron años mientras continuaba rastreándolo, una duración que vuelve la búsqueda más importante que una reacción instantánea.

Cuando finalmente se acercó a la danta, no la atacó de frente. Le pidió orina para beber y para calentar su caparazón. La petición redujo la distancia entre ambos. Entonces el terecay mordió los genitales del animal y no soltó.

La danta corrió hacia el agua. Se lanzó con la tortuga todavía aferrada y trató de escapar bajo la superficie. Durante la lucha metió la cabeza entre una horqueta sumergida. Quedó atrapada y se ahogó. El terecay pudo salir.

Después regresó con los nietos humanos de la anciana. Les contó que había encontrado a quien la mató y que la había vengado. El vínculo de parentesco no se limita aquí a personas de una sola especie: el pequeño terecay llama abuela a la mujer y asume una obligación que sus nietos también reconocen.

Rita Gaitán relató La danta y el terecay en 1973. La página conserva el desenlace sin presentarlo como enseñanza zoológica ni como descripción del comportamiento real de dantas y tortugas. Tampoco añade una resurrección de la anciana o una transformación final ausentes de la fuente. La búsqueda concluye con el retorno y el anuncio a los demás nietos, no con una recompensa nueva.`,
    historyCore:
      "La danta y el terecay fue relatada por Rita Gaitán en 1973 y ocupa las páginas 284 y 285 de la compilación. Terecay designa en el texto a una tortuga pequeña vinculada por parentesco con la anciana.",
    versionCore:
      "La ficha mantiene la secuencia de esta transcripción y no la mezcla con otros relatos de tortugas astutas. La fuente no explica si el parentesco debe leerse como filiación literal, tratamiento afectivo o relación entre especies.",
    similarityCore:
      "Un animal pequeño que vence a otro más fuerte mediante astucia es un motivo extendido. Aquí son distintivos la búsqueda durante años, el excremento que informa, la petición de orina, la mordida sostenida y la horqueta sumergida que detiene a la danta.",
    leccion:
      "La constancia y la inteligencia pueden sostener una obligación de memoria frente a una fuerza mayor.",
    sceneHorizontal:
      "una danta corre hacia un caño con un pequeño terecay aferrado, entre raíces y una horqueta visible bajo el agua",
    sceneVertical:
      "un terecay sigue huellas por la sabana y regresa ante dos niños junto a la casa de una anciana ausente",
    researchNotes:
      "RELATORA: Rita Gaitán, 1973. CAUTELA: el parentesco interespecie se conserva sin imponer una explicación exterior.",
  }),
  myth({
    slug: "historia-de-un-viejo",
    title: "Los hermanos y la mujer del monte",
    summary:
      "Dos hermanos abandonados recuperan la vista, sobreviven a una mujer caníbal y reciben cuatro perros surgidos de su cabeza.",
    tags: ["hermanos", "abandono", "pajuil", "cuatro perros"],
    narrativeSource: "villaPdf",
    contextSources: ortizContext,
    mito: `Un viudo vivía con su hijo y su hija. Cuando volvió a casarse, la nueva esposa rechazó a los niños y presionó al padre para que los abandonara. En el primer intento, la niña dejó granos de maíz a lo largo del camino. Los hermanos siguieron el rastro y regresaron a casa.

La segunda vez, el padre evitó que pudieran volver. Les quitó los ojos y los dejó en el monte. Allí escucharon la voz de su madre muerta, que los orientó hacia un pajuil. El ave les indicó dónde encontrar una savia capaz de devolverles la vista. Con ella pudieron ver otra vez y continuar juntos.

Un sueño les advirtió que encontrarían a una anciana caníbal. Los niños prepararon plátano frito y un palo para engañarla. A pesar de sus precauciones, la mujer los capturó y comenzó a alimentarlos para engordarlos. Los hermanos observaron lo que hacía y esperaron una oportunidad.

Cuando la anciana preparó una gran vasija hirviendo, lograron invertir la trampa. La hicieron caer en el recipiente y la mataron. Al abrir o partir su cabeza salieron cuatro perros. La versión los nombra como pantera, tigre, león y onca, y afirma que de allí proceden los tigres actuales. Los animales quedaron con el muchacho.

Más adelante, seres del monte se llevaron a la hermana. El niño siguió su camino acompañado por los cuatro perros y llegó hasta el mar, que cruzó con ellos. La transcripción termina sin ofrecer el reencuentro de los hermanos.

Rita Gaitán relató Historia de un viejo en 1973. El nuevo título visible centra a los niños, que sostienen la acción principal. La ficha no la presenta como versión Sikuani de Hansel y Gretel: hay semejanzas estructurales con cuentos de abandono, pero la voz de la madre, el pajuil, la recuperación de los ojos, los cuatro perros y la travesía final forman una secuencia propia.`,
    historyCore:
      "Historia de un viejo fue relatada por Rita Gaitán en 1973 y es la pieza más extensa de las siete, reproducida en las páginas 285 a 288. El título de archivo alude al padre, aunque los protagonistas narrativos son sus hijos.",
    versionCore:
      "Los nombres pantera, tigre, león y onca reflejan la traducción publicada. No se convierten en taxonomía zoológica Sikuani ni se corrigen a especies modernas sin una fuente lingüística adicional.",
    similarityCore:
      "El abandono de hermanos y una captora que pretende comerlos puede recordar cuentos europeos, pero eso no demuestra derivación. Esta versión incluye ojos retirados y restituidos con savia, la guía de un pajuil, la madre muerta, cuatro perros felinos y una salida por el mar.",
    leccion:
      "La cooperación entre hermanos y la atención a quienes orientan puede abrir salida incluso después del abandono.",
    sceneHorizontal:
      "dos hermanos avanzan por el monte guiados por un pajuil hacia un árbol de savia luminosa, con granos de maíz en el sendero",
    sceneVertical:
      "un muchacho cruza un agua extensa acompañado por cuatro perros de siluetas felinas mientras su hermana queda sugerida entre árboles lejanos",
    researchNotes:
      "RELATORA: Rita Gaitán, 1973. COMPARACIÓN: se reconoce una semejanza estructural sin proponer dependencia de un cuento europeo.",
  }),
  myth({
    slug: "el-creador-del-cosmos",
    title: "Kuwei, Kuemi y el comienzo del mundo",
    summary:
      "Kuwei ordena el mundo frente a Kuemi, señor de la oscuridad, y ensaya distintos materiales antes de formar una humanidad duradera.",
    tags: ["Kuwei", "Kuemi", "creación", "Vía Láctea"],
    narrativeSource: "baquero",
    contextSources: [
      "icbfEnsani",
      "cnmh",
      "ucla",
      "onic",
      "icbfBibliography",
      "villaRecord",
    ],
    mito: `Antes del orden de Kuwei, el universo estaba ocupado por Kuemi, señor de la oscuridad. La fuente lo relaciona con una anaconda gigantesca y con la Vía Láctea. Kuwei, llamado también Phurnaminali en el ensayo consultado, pensó el mundo: cielo, agua, árboles, animales y personas comenzaron a adquirir forma.

Para apartar a Kuemi, Kuwei preparó una trampa con hormigas cortadoras de hojas. El señor de la oscuridad acudió atraído por ellas. Unas águilas enormes lo levantaron y lo llevaron hacia el cielo. Allí quedó asociado con la franja luminosa que atraviesa la noche. La escena no presenta una destrucción total de la oscuridad, sino una reorganización de su lugar en el cosmos.

Crear personas tampoco ocurrió en un solo intento. Kuwei modeló primero una figura de barro. Cuando llegó la lluvia, el cuerpo se deshizo. Probó después con cera de abejas, pero el calor del Sol la derritió. La materia debía resistir tanto el agua como la luz.

El tercer intento fue una mujer de madera dura. Permaneció entera, aunque todavía faltaba hacer posible la reproducción. Diferentes animales intentaron relacionarse con ella y no lo lograron. Finalmente un kinkajú consiguió abrir el camino para la unión sexual. A partir de entonces pudo continuar la humanidad.

La página heredada mezclaba a Furnaminali con un diluvio, un arca, un personaje llamado Yoe y una yuca entregada después de la inundación. Esa secuencia no aparece en la fuente revisada y se retira. Conservar el slug «el-creador-del-cosmos» evita romper la URL, pero el título visible nombra a Kuwei y Kuemi y la narración se limita a la versión documentada por Álvaro Baquero.

No se afirma que este sea el único origen Sikuani. La amplitud del corpus y las variaciones de grafía muestran que existen más secuencias, voces locales, interpretaciones situadas y otras mediaciones documentales.`,
    historyCore:
      "La secuencia se toma del ensayo de Álvaro Baquero sobre tradición oral guahíba. El texto sintetiza materiales etnográficos y vincula a Kuwei o Phurnaminali con la creación y a Kuemi con la oscuridad y la Vía Láctea.",
    versionCore:
      "Kuwei también aparece escrito Kuwai; Phurnaminali y Furnaminali son otras formas presentes en bibliografía. La ficha no decide que todos sean idénticos en cada variante: registra la asociación hecha por la fuente principal.",
    similarityCore:
      "Los intentos fallidos de creación con barro, cera y madera recuerdan cosmogonías de materiales sucesivos. La versión aquí consultada se distingue por Kuemi como anaconda y Vía Láctea, las hormigas cortadoras, las águilas y el papel final del kinkajú.",
    leccion:
      "Crear un mundo durable exige reconocer los límites de cada materia y volver a intentar.",
    sceneHorizontal:
      "Kuwei contempla un mundo naciente de agua, árboles y animales mientras una gran anaconda oscura cruza el cielo como Vía Láctea",
    sceneVertical:
      "tres figuras simbólicas de barro, cera y madera aparecen bajo lluvia y sol, acompañadas por un kinkajú entre ramas",
    researchNotes:
      "CORRECCIÓN MAYOR: se retira una mezcla bíblica sin respaldo y se conserva la URL histórica con contenido documentado.",
  }),
  myth({
    slug: "la-comida-para-los-muertos",
    title: "Tsamani y el camino de la luz",
    summary:
      "Tsamani y sus cinco hermanos danzan, siguen una alimentación rigurosa y se vuelven livianos hasta ocupar un lugar entre las estrellas.",
    tags: ["Tsamani", "estrellas", "danza", "Itomo"],
    narrativeSource: "icbfTsamani",
    mito: `Tsamani vivía con sus cinco hermanos. El canto registrado en Caño Ovejas cuenta que la familia danzó durante años. Mientras sostenían ese movimiento cuidaron estrictamente lo que comían: se alimentaron de danana y mana, según los términos conservados por la versión bilingüe.

La danza y la alimentación cambiaron sus cuerpos. Poco a poco se volvieron livianos. Ya no pesaban como antes sobre la tierra y pudieron elevarse. La familia ascendió hasta ocupar un lugar entre las estrellas, donde su presencia quedó visible en el firmamento.

El registro no describe una canoa que recorre un río para llevar comida a niños muertos. Tampoco presenta a un personaje llamado Kanoá ni una receta funeraria. Esos elementos formaban la página heredada, pero no tenían respaldo entre las fuentes localizadas. Se conserva su slug para no romper enlaces; el título y el contenido se corrigen con una voz comunitaria identificada.

Álvaro Baquero describe otra mediación del ciclo de Tsamani. Allí el ascenso ocurre después de la llegada de los alimentos asociados con Kaliwirnae y se relaciona con continencia, dieta, danza Jalekuma, yopo y kapi. El ensayo enlaza esa danza con la muerte y con el viaje al cielo. La presente narración no incorpora esos detalles dentro del canto de Jairo Chipiaje Cavares: los registra como variante y contexto.

El mismo estudio menciona el Itomo, segundo entierro realizado aproximadamente un año después de la muerte. Esa información ayuda a entender que memoria funeraria, danza y viaje celeste pueden estar relacionados en la documentación Sikuani. No permite afirmar que el canto sea una explicación completa del rito ni que todas las comunidades lo practiquen igual.

La página nombra «camino de la luz» al movimiento central del canto: una familia que, mediante años de disciplina compartida, se vuelve ligera y queda reunida para siempre entre las estrellas.`,
    historyCore:
      "Canto de la familia Tsamani fue interpretado por Jairo Chipiaje Cavares, traducido por José Quintero Campo y publicado por la Audioteca Digital ICBF con procedencia del Resguardo Caño Ovejas, Meta.",
    versionCore:
      "La versión sonora menciona a Tsamani, cinco hermanos, años de danza, danana y mana. El ensayo de Baquero agrega Jalekuma, yopo, kapi, continencia y una relación con el Itomo; esos detalles se mantienen fuera del cuerpo principal del canto.",
    similarityCore:
      "Los ascensos colectivos y las figuras humanas convertidas en estrellas aparecen en muchas tradiciones. Aquí son específicos el nombre Tsamani, los cinco hermanos, la danza prolongada, la dieta de danana y mana y el hacerse livianos como condición del ascenso.",
    leccion:
      "Una disciplina compartida durante largo tiempo puede transformar la memoria familiar en orientación para quienes quedan.",
    sceneHorizontal:
      "Tsamani y cinco hermanos danzan en círculo sobre la sabana nocturna mientras sus siluetas se vuelven ligeras bajo un cielo estrellado",
    sceneVertical:
      "seis figuras ascienden como capas de luz desde la tierra hasta una agrupación de estrellas sobre el horizonte llanero",
    researchNotes:
      "CORRECCIÓN MAYOR: la página inventada se reemplaza por un registro comunitario identificado. VARIANTE: Itomo y Jalekuma se explican solo como contexto de Baquero.",
  }),
  myth({
    slug: "kaliwirnae-el-arbol-de-los-alimentos",
    title: "Kaliwirnae, el árbol de los alimentos",
    summary:
      "El mono nocturno oculta el gran árbol que reúne los alimentos, pero el picure y la lapa siguen el aroma de la piña y descubren su secreto.",
    tags: ["Kaliwirnae", "alimentos", "mono nocturno", "lapa"],
    narrativeSource: "icbfKaliwirnae",
    mito: `Una planta de yuca nacida de un niño creció hasta convertirse en Kaliwirnae, un árbol que reunía todos los alimentos. En sus ramas había piña, ají, caña y muchas frutas. La gente todavía no conocía ese lugar.

El mono nocturno, Kutsikutsi en la narración, llegaba con olor a piña. El picure percibió el aroma e intentó seguirlo, pero no consiguió descubrir el camino. La lapa tuvo más éxito. Siguió al mono y cruzó con él el Orinoco hasta encontrar el árbol cargado.

Desde arriba, el mono dejó caer una piña. También le quitó la cola a la lapa y la arrojó al río; allí la cola se transformó en anguila. La lapa regresó con la noticia y con la prueba del alimento que había visto.

La gente invitó al mono nocturno a consumir yopo. Bajo su efecto, el secreto se volvió difícil de guardar. El mono vomitó y el olor a piña lo delató. Entonces confesó dónde estaba Kaliwirnae.

El picure y el mono se enfrentaron con tizones encendidos. Las quemaduras dejaron marcas en sus cuerpos, explicación narrativa de rasgos que aún pueden observarse en esos animales. El relato publicado se detiene en ese punto.

Carmen Rojas Amaya, narradora de la versión de Corocito en el Resguardo Caño Ovejas, advierte que la historia es larga y que solo cuenta hasta allí. La página respeta ese final abierto. Otras fuentes describen el derribo del árbol, la dispersión de alimentos y consecuencias territoriales, pero esas escenas no se insertan como si hubieran sido pronunciadas en este registro.

Kaliwirnae se añade porque faltaba un relato Sikuani fundamental con voz, traducción y procedencia identificadas. No reemplaza ninguna URL existente. Su pareja horizontal y vertical reutiliza imágenes ya aprobadas de ilustración digital plana full paper cut, requisito necesario para aparecer correctamente en la landing y el detalle.`,
    historyCore:
      "La narración fue realizada por Carmen Rojas Amaya, traducida por José Quintero Campo y registrada en la comunidad de Corocito, Resguardo Caño Ovejas, Meta. La Audioteca Digital ICBF la publica con audio y texto bilingüe.",
    versionCore:
      "El registro termina antes del derribo de Kaliwirnae y lo dice expresamente. El ensayo de Baquero y otros corpus conocen desarrollos posteriores; esta ficha los reconoce sin completar el relato comunitario.",
    similarityCore:
      "Árboles que concentran cultivos y animales que descubren alimentos aparecen en diversas tradiciones amazónicas y orinocenses. Esta versión se distingue por Kutsikutsi, el cruce del Orinoco, la piña, la cola de lapa convertida en anguila, el yopo y la pelea con tizones.",
    leccion:
      "Compartir el conocimiento de los alimentos cambia la vida común, pero exige respetar quién contó cada parte.",
    sceneHorizontal:
      "un gran árbol de capas planas sostiene piña, ají, caña y frutas junto al Orinoco, observado por mono nocturno, picure y lapa",
    sceneVertical:
      "una lapa cruza el río siguiendo al mono nocturno mientras una piña cae desde Kaliwirnae y una anguila aparece bajo el agua",
    researchNotes:
      "NUEVA FICHA: fuente comunitaria localizada. LÍMITE: se respeta el corte explícito de la narradora y no se inventa la caída del árbol.",
  }),
];

export default sikuaniDefinitions;
