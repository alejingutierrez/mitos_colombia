import { defineChamiMyth } from "./define-editorial-myth.mjs";
import {
  composeRegionalHistory,
  composeRegionalVersions,
  composeRioFrioHistory,
  composeRioFrioVersions,
  composeSimilarities,
} from "./compose-sections.mjs";

const commonResearch =
  "IMÁGENES: par auditado como ilustración full paper cut/paper quilling; no es fotografía ni maqueta física.";

const records = [
  defineChamiMyth({
    slug: "el-guatin-astuto",
    title: "El guatín astuto",
    mito: `El guatín era pequeño, pero los demás animales sabían que su tamaño no medía su ingenio. Un día comía frutos de corozo cuando llegó el jaguar decidido a matarlo. El guatín puso una fruta entre sus piernas, la golpeó con una piedra y fingió que estaba comiendo una parte de su propio cuerpo. Convenció al jaguar de imitarlo; el dolor hizo huir al felino mientras el guatín reía.

El jaguar buscó al oso y al puma para vengarse. El guatín les prometió un venado amarrado, pero desde lo alto soltó una piedra que bajó por la ladera y golpeó a sus perseguidores. En otra ocasión les señaló un burro y aseguró que sus orejas levantadas significaban rendición. Los animales se acercaron confiados y recibieron coces y mordiscos. Más tarde, cuando el oso consumía demasiado maíz de una roza común, el guatín lo ensilló con bejucos y lo montó hasta dejarlo agotado.

Los animales prepararon entonces una fiesta. Esperaban emborrachar al guatín con chicha y atraparlo mientras tocaba el tambor. Todos se lanzaron sobre él y el jaguar creyó sujetarlo por una pierna. El guatín aseguró que solo tenía cogido uno de sus pelos; el felino aflojó la garra y su adversario escapó. Después se refugió en una cueva, arrojó tierra a los ojos de la ardilla y aprovechó la confusión causada por el hachazo de un zorro para huir de nuevo.

La última emboscada fue junto al río. El guatín se cubrió de miel y hojas hasta parecer un animal desconocido y enorme. El oso y el jaguar se apartaron con miedo. Entonces bebió sin peligro, subió a una altura y reveló su identidad. Los otros aceptaron que no podían vencerlo y prefirieron hacer la paz. El relato no convierte su astucia en inocencia: sus engaños lastiman, pero también le permiten sobrevivir frente a animales mucho más fuertes.`,
    historia: composeRioFrioHistory({
      number: 1,
      sourceFocus:
        "La transcripción conserva una cadena de episodios protagonizados por un guatín que engaña al jaguar, al oso, al puma, a una ardilla y a un zorro. Los nombres zoológicos anotados por el editor ayudan a identificar el paisaje, pero la lógica del relato depende de relaciones de parentesco y rivalidad entre animales-persona.",
      chavesRelation:
        "Chaves publicó en 1945 otro cuento de Nicolás Henao titulado “Kurijía”, también protagonizado por un pequeño animal astuto, pero con deudas, una fiesta celeste y un sapo. Es una narración distinta y no se incorpora aquí.",
      editorialDecision:
        "La ficha anterior resumía al guatín como un héroe moral; esta revisión conserva también su crueldad, sus mentiras y el pacto final.",
    }),
    versiones: composeRioFrioVersions({
      primaryVariant:
        "Su estructura es acumulativa: cada intento de venganza abre una nueva trampa y el ciclo termina cuando los adversarios reconocen que la fuerza no basta.",
      comparativeVariant:
        "El “Kurijía” de Chaves comparte el arquetipo del animal pequeño que manipula a otros mayores, pero cambia acciones, personajes y desenlace. No es una versión corta del mismo cuento.",
      boundary:
        "La página tampoco identifica automáticamente al guatín con los conejos embaucadores de otras tradiciones americanas.",
    }),
    leccion:
      "La inteligencia protege al pequeño, pero la paz llega cuando termina la cadena de venganzas.",
    similitudes: composeSimilarities({
      internalComparison:
        "el guatín dialoga con Kurijía, relato documentado por Chaves, y con animales que hablan o cambian de forma en Hímo y La mujer hormiga.",
      broaderComparison:
        "Los ciclos del conejo o del coyote embaucador en otras regiones de América también enfrentan debilidad física y rapidez mental. Aquí, sin embargo, el corozo, la roza, la chicha, el tambor y las relaciones entre guatín, jaguar y oso pertenecen a esta narración de Río Frío.",
    }),
    excerpt:
      "Un guatín pequeño encadena engaños contra animales más fuertes hasta que sus perseguidores aceptan hacer la paz.",
    seoTitle: "El guatín astuto: relato Chamí",
    seoDescription:
      "Lee el relato Chamí del guatín que engaña al jaguar, al oso y al puma, según la transcripción de Río Frío publicada en 1953.",
    focusKeywords: [
      "el guatín astuto",
      "mito Chamí del guatín",
      "cuentos de Río Frío",
      "animales embaucadores",
      "tradición oral Emberá Chamí",
    ],
    tags: ["Guatín", "astucia", "bosque", "supervivencia"],
    researchNotes: `FUENTE PRIMARIA: Reichel-Dolmatoff 1953, relato 1.
DECISIÓN: conservar todos los episodios y no fusionar con Kurijía.
GEOGRAFÍA: punto municipal aproximado de Río Frío; la vereda histórica de Corozal no se geocodifica como sitio exacto.
${commonResearch}`,
  }),
  defineChamiMyth({
    slug: "el-hijo-de-la-nutria",
    title: "El hijo de la nutria",
    mito: `Durante una noche de luna llena, un hombre pescaba en el río. Una nutria se acercó, le habló y terminó abrazada a su pierna. El pescador se desprendió del animal y volvió a su casa. Un mes después la pantorrilla comenzó a hincharse; al abrirse, nació un niño y el hombre murió. Una mujer crió al recién nacido, que solo aceptaba sangre menstrual como alimento.

Cuando creció, el joven preguntó quién había matado a su madre. La comunidad, cansada de sus visitas nocturnas a las mujeres, señaló primero a una gran ballena del charco. El muchacho construyó una balsa, hizo salir al animal y se dejó tragar. Dentro encontró personas, aves, animales y ríos. Localizó el corazón con forma de ahuyama, lo atravesó y consiguió salir. Después protegió las casas con asientos de balso durante la tormenta que siguió a la muerte de la ballena.

Le dijeron luego que el responsable era otro ser acuático. El joven fabricó un muñeco de balso como señuelo, se lanzó detrás y mató al animal. La gente lloró porque lo consideraba su dios. Más tarde lo enviaron contra una multitud de animales reunidos como si fueran la matriz de las especies. Mató muchos, pero dejó algunos vivos para que no desaparecieran del mundo.

La última acusada fue la luna. El joven amarró guaduas para subir hasta su camino, pero un pájaro carpintero cortó la escalera. Al caer pronunció una palabra que lo hizo descender lentamente y llegó al mundo subterráneo. Allí vivían personas pequeñas que se alimentaban del vapor y no tenían ano. Intentó abrirles uno con un palo de chontaduro; algunos murieron y los demás lo expulsaron.

Un animal lo devolvió a este mundo y un venado lo condujo hasta su casa. Continuó incomodando a las mujeres, aunque su habilidad para cazar hacía que algunos lo defendieran. Finalmente una avispa grande lo mató. No lo enterraron; al tercer día, mientras todos dormían, el cuerpo desapareció.`,
    historia: composeRioFrioHistory({
      number: 2,
      sourceFocus:
        "Este es el relato Chamí de Río Frío más extenso del artículo de 1953. El protagonista no recibe nombre en la transcripción, pero sus episodios corresponden al ciclo de Jinu Potó o Hijo de la Pantorrilla.",
      chavesRelation:
        "Chaves publicó “Arrumia”, narrado por Nicolás Henao, con un viaje al mundo inferior y personas alimentadas por vapor. Ferrari muestra que nacimiento, enemigos, luna, mundo subterráneo y muerte cambian entre regiones Emberá.",
      editorialDecision:
        "La página se concentra en la versión anónima de Río Frío y remite el panorama comparativo a Jinopotabar, sin añadirle el nombre de otra variante dentro del relato.",
    }),
    versiones: composeRioFrioVersions({
      primaryVariant:
        "El padre da a luz por la pantorrilla después del encuentro con una nutria; el protagonista busca a quien supuestamente mató a su madre y muere por la picadura de una avispa.",
      comparativeVariant:
        "Ferrari documenta nacimientos desde una mujer, padres variables, juicios éticos opuestos y desenlaces en fieras, árboles, espíritus o insectos. Chaves conserva además otro itinerario de descenso y regreso.",
      boundary:
        "Jinopotabar queda como página del ciclo; esta no incorpora el petroglifo, Betenabe ni un romance que la fuente de 1953 nunca menciona.",
    }),
    leccion:
      "Una fuerza sin medida puede proteger al mundo y al mismo tiempo herir a la comunidad.",
    similitudes: composeSimilarities({
      internalComparison:
        "El hijo de la nutria se relaciona directamente con Jinopotabar y con El hijo de Karagabí y la gente subterránea por el viaje a un mundo cuyos habitantes no pueden defecar.",
      broaderComparison:
        "Los descensos a mundos inferiores aparecen en muchas tradiciones, pero aquí el paso mediante agua, la balsa, el chontaduro, la guadua y la disputa con la luna forman una trayectoria propia del ciclo Emberá.",
    }),
    excerpt:
      "Nacido de una pantorrilla, un joven combate seres acuáticos, desafía a la luna y viaja al mundo subterráneo.",
    seoTitle: "El hijo de la nutria: Jinu Potó Chamí",
    seoDescription:
      "Conoce la versión Chamí de Río Frío sobre el hijo de la pantorrilla, sus combates, la luna y el viaje al mundo subterráneo.",
    focusKeywords: [
      "el hijo de la nutria",
      "Jinu Potó Chamí",
      "hijo de la pantorrilla",
      "mitos de Río Frío",
      "mundo subterráneo Emberá",
    ],
    tags: ["el hijo de la nutria", "transformación", "venganza", "luna"],
    researchNotes: `FUENTE PRIMARIA: Reichel-Dolmatoff 1953, relato 2.
UNIFICACIÓN: versión íntegra de Río Frío; Jinopotabar funciona como expediente del ciclo.
ELIMINADO: petroglifo, Betenabe, romance y final conciliador sin apoyo en la fuente.
${commonResearch}`,
  }),
  defineChamiMyth({
    slug: "horchibari",
    title: "Horchíbarí",
    mito: `Dos jóvenes capturados durante una lucha consiguieron escapar, pero sus enemigos los siguieron hasta la casa familiar. El padre trató de ocultarlos en una bóveda; amenazado de muerte, terminó revelando el escondite. Los captores se los llevaron de nuevo. En el camino, un derrumbe los golpeó y los dejó casi sin sentido. Cuando pudieron moverse, bebieron harina con agua y continuaron río abajo.

Un ser armado con lanza atacó a los hermanos. Uno murió ensartado y el otro logró ocultarse detrás de un árbol de balso, matar al agresor y huir. El dueño de aquella criatura, descrito como un hombre negro y enorme, lo persiguió con arco y flechas. El joven se escondió entre piedras y bajo el agua hasta llegar al territorio de Horchíbarí, un ser caníbal. Le pidió protección. Horchíbarí enfrentó al perseguidor y lo hizo retroceder.

En su casa, Horchíbarí alimentó al viajero con tatabro, plátano maduro y pescado. Él y su mujer comían también brea, pero el huésped la escupió por amarga. El anfitrión no lo castigó. Después lo invitó a su juego favorito: dejarse rodar por los derrumbes. Horchíbarí bajó una vez y luego otra. A la tercera tomó figura humana para enseñar el movimiento; el joven aprovechó la repetición y escapó.

Durante la fuga cayó en una red preparada por Dumío. Este lo escondió y, cuando Horchíbarí llegó con una maza, lo mató con un pequeño asiento. Del cuerpo solo quedó un montón de brea. Dumío acogió al joven, le enseñó a disparar pitas con bodoquera y a transformar colibríes en zahínos mediante una hierba. El viajero se casó con la hija de su protector.

Tiempo después quiso regresar con sus padres. Dumío le permitió partir, pero Kokoró le advirtió que no tomara la mano de su madre. Al llegar, olvidó el consejo. En el instante del contacto perdió la memoria del camino y tuvo que quedarse para siempre en la casa de Kokoró. La historia termina sin retorno completo: sobrevivir a los monstruos no bastó para recuperar el mundo anterior.`,
    historia: composeRioFrioHistory({
      number: 3,
      sourceFocus:
        "La narración encadena cautiverio, fuga, hospitalidad peligrosa, aprendizaje y un retorno fallido. Reichel anota funciones mínimas para Tiumía, Horchíbarí, Dumío y Kokoró sin convertirlas en una genealogía completa.",
      chavesRelation:
        "Chaves no publica este itinerario entre sus cuatro relatos de Nicolás Henao. Su ausencia evita presentar cualquier monstruo Emberá parecido como una versión equivalente.",
      editorialDecision:
        "La ficha anterior reducía a Horchíbarí a una criatura reptil; el texto lo presenta como un anfitrión caníbal capaz de proteger, alimentar, jugar y perseguir.",
    }),
    versiones: composeRioFrioVersions({
      primaryVariant:
        "El título editorial toma el nombre del personaje más visible, aunque la historia sigue a un joven anónimo que pasa por varios dueños y mundos.",
      comparativeVariant:
        "El motivo del huésped que escapa reaparece en relatos Emberá de seres del monte, pero aquí la brea, el juego del derrumbe, Dumío y la prohibición de tocar a la madre forman una secuencia específica.",
      boundary:
        "No se identifica a Horchíbarí con una serpiente, un dragón o un guardián natural.",
    }),
    leccion:
      "Cruzar muchos peligros no garantiza el regreso si se olvida la última advertencia.",
    similitudes: composeSimilarities({
      internalComparison:
        "Horchíbarí dialoga con El hijo de la nutria por los desplazamientos entre ámbitos extraños y con La mujer hormiga por la imposibilidad de volver plenamente a una relación perdida.",
      broaderComparison:
        "Historias de regreso condicionado existen en numerosos repertorios, pero la regla de no tocar la mano de la madre, el aprendizaje con Dumío y la brea que queda tras la muerte de Horchíbarí no deben separarse de esta versión.",
    }),
    excerpt:
      "Un joven escapa del cautiverio, recibe ayuda de seres peligrosos y pierde el regreso al tocar la mano de su madre.",
    seoTitle: "Horchíbarí: relato Chamí de Río Frío",
    seoDescription:
      "Lee el relato Chamí de Horchíbarí, Dumío y el joven que cruza cautiverios, aprende a cazar y pierde el camino de regreso.",
    focusKeywords: [
      "Horchíbarí",
      "mito Chamí Horchíbarí",
      "relatos de Río Frío",
      "Dumío y Kokoró",
      "tradición oral Emberá Chamí",
    ],
    tags: ["Horchibari", "héroe", "supervivencia", "sabiduría"],
    imagePromptHorizontal:
      "Ilustración panorámica full paper cut y paper quilling: un joven Emberá Chamí huye por una ladera andina mientras Horchíbarí, figura humanoide fuerte con maza y rastros de brea negra, desciende tras él; Dumío espera junto a un pequeño banco de madera, bosque húmedo y río al fondo, capas de papel recortado, sin fotografía, sin maqueta física, sin reptil ni monstruo europeo, sin texto.",
    imagePromptVertical:
      "Ilustración vertical full paper cut y paper quilling: Dumío protege a un joven en un bosque andino y enfrenta con un pequeño asiento de madera a Horchíbarí, figura humanoide asociada a brea negra; una red de fibras, bodoquera y colibríes sugieren los episodios siguientes, profundidad en capas de papel, sin fotografía, sin maqueta física, sin serpiente, sin texto.",
    researchNotes: `FUENTE PRIMARIA: Reichel-Dolmatoff 1953, relato 3.
CORRECCIÓN: Horchíbarí es un ser humanoide/caníbal en la narración, no el reptil de las imágenes anteriores.
IMAGEN: par anterior rechazado por representar una criatura reptil; se reemplaza con dos escenas full paper cut.`,
  }),
  defineChamiMyth({
    slug: "la-mujer-hormiga",
    title: "La mujer hormiga",
    mito: `Una mujer vivía en el monte con su hijo después de la muerte del padre. El joven acostumbraba pescar en el río. Un día vio un puerco de agua y escuchó una voz femenina que le ordenaba correr. Volvió asustado a la casa. Al día siguiente regresó al mismo lugar. De la tierra salió una mujer hermosa, cubierta de bija roja, y lo invitó a acompañarla.

El joven quiso acercarse, pero ella puso una condición: debía bañarse con flores del monte. Esa noche, después del baño, la mujer llegó a la casa. El hijo podía verla; su madre no. Para hacerse visible ante ella, la visitante pidió que también se bañara con las flores. Cuando las dos personas cumplieron la indicación, la mujer quedó integrada al hogar.

La pareja tuvo dos hijos. Tiempo después, el hombre visitó una comunidad vecina, encontró otra mujer y se casó con ella. Al regresar trató mal a su primera compañera y la expulsó. La madre se opuso, porque la quería y reconocía todo lo que había aportado. La mujer embijada invitó entonces a su suegra a conocer su gente.

Caminaron hasta la orilla del río. Allí aparecieron tambos que la mayor nunca había visto, aunque conocía bien el lugar. Para recordar el sitio, dejó una señal bajo una de las casas. Luego volvió y contó a su hijo. Él, arrepentido, pidió que lo guiara. Al regresar no encontraron viviendas, solo monte, aunque la marca continuaba en el suelo.

El hombre volvió solo y oyó la voz de su antigua compañera. Ella le dijo que se marchara: él la había echado y su familia estaba enojada. Desesperado, cavó donde nacía la voz. Salieron hormigas que lo picaron. Cuando mató una, la mujer gritó que estaba dañando el caballete de su casa. El hombre se retiró.

La pérdida alcanzó también sus cultivos. Las hormigas que habían llegado con la mujer ayudaban antes a sembrar; ahora destruyeron la roza. Sin su compañera, sin la relación con su familia invisible y sin el trabajo compartido, quedó solo y su esfuerzo dejó de rendir.`,
    historia: composeRioFrioHistory({
      number: 4,
      sourceFocus:
        "El título moderno destaca las hormigas, pero la transcripción no afirma que la mujer sea literalmente una hormiga. Ella sale de la tierra, se vuelve visible mediante baños de flores y pertenece a una comunidad cuyos tambos aparecen y desaparecen.",
      chavesRelation:
        "Chaves publicó “Arrumia”, también sobre una mujer vinculada a otro mundo y un regreso por el agua, pero narrada por Nicolás Henao con personajes y desenlace diferentes.",
      editorialDecision:
        "La edición elimina la lectura romántica de una unión armoniosa y recupera expulsión, parentesco, trabajo agrícola y daño causado al caballete de una casa invisible.",
    }),
    versiones: composeRioFrioVersions({
      primaryVariant:
        "La mujer embijada no se transforma al final; son las hormigas asociadas a su familia las que emergen, pican y dejan de colaborar con los cultivos.",
      comparativeVariant:
        "Relatos posteriores sobre jepá, madres de animales y habitantes subterráneos comparten el paso entre mundos, pero no permiten identificar sin más a esta mujer con una entidad nombrada en otra fuente.",
      boundary:
        "El título se conserva por estabilidad de la URL y se explica su carácter interpretativo.",
    }),
    leccion:
      "Romper una relación de reciprocidad puede destruir también el trabajo que esa relación sostenía.",
    similitudes: composeSimilarities({
      internalComparison:
        "La mujer hormiga se acerca a El hijo de la nutria por el acceso a mundos no visibles y a La mujer y el oso por una unión que cruza la frontera entre sociedad humana y seres del monte.",
      broaderComparison:
        "Los relatos de esposas provenientes de otro ámbito suelen incluir una condición y una pérdida, pero aquí el baño con flores, los tambos junto al río y el caballete convertido en hormiga sitúan el conflicto en una red propia.",
    }),
    excerpt:
      "Una mujer embijada entra en un hogar, ayuda a sembrar y desaparece con su familia invisible después de ser expulsada.",
    seoTitle: "La mujer hormiga: relato Chamí",
    seoDescription:
      "Conoce el relato Chamí de la mujer embijada, los baños de flores, los tambos invisibles y las hormigas que dejan de cuidar la roza.",
    focusKeywords: [
      "la mujer hormiga",
      "mujer embijada Chamí",
      "mitos de Río Frío",
      "hormigas y reciprocidad",
      "tradición oral Emberá Chamí",
    ],
    tags: ["amor", "pérdida", "naturaleza", "transformación"],
    researchNotes: `FUENTE PRIMARIA: Reichel-Dolmatoff 1953, relato 4.
PRECISIÓN: la narración no dice que la mujer se transforme en hormiga; el título es un rótulo editorial heredado.
DECISIÓN: conservar la URL y explicar la relación entre hormigas, familia invisible y cultivos.
${commonResearch}`,
  }),
  defineChamiMyth({
    slug: "la-mujer-y-el-oso",
    title: "La mujer y el oso",
    mito: `Una mujer recién casada quedó sola cuando su marido se fue lejos a trabajar. Mientras lavaba ropa cerca de la montaña, un oso la tomó y la llevó hacia las alturas. Allí construyó para ella una cama de bejucos en un árbol alto y un refugio donde pudiera dormir sin caer. El oso no compartía ese lecho: permanecía aparte, junto a otros osos.

La mujer vivió en la montaña durante un año. El oso le llevaba ropa y alimentos que obtenía entre la gente. Con el tiempo ella quedó embarazada y nació un niño. El oso traía pájaros muertos para que sus cantos no revelaran el escondite. Una vez llegó con uno vivo; la mujer lo alimentó con maíz y conservó aquella presencia sonora dentro del refugio.

El niño creció con una rapidez extraordinaria. A los pocos meses caminaba; después trepaba por el árbol. De la cintura hacia abajo tenía abundante pelo, como el oso. Su madre temía que cayera, pero pronto pudo bajar solo al suelo, jugar y volver a subir. Alrededor de los dos años preguntó de dónde venía ella. Quería conocer el lugar donde vivía la gente.

El hijo tomó a su madre y emprendió el descenso. Al día siguiente el oso bajó también, llevando maíz. Finalmente los alcanzó y trató de detener al muchacho. Durante mucho tiempo lo golpeó con un garrote. El hijo, que reunía fuerza humana y rasgos de oso, resistió y respondió hasta obligar a su padre animal a retirarse.

La madre y el hijo continuaron hacia las casas. Cuando llegaron, contaron lo ocurrido. La transcripción termina allí: no informa si el marido regresó, cómo fue recibido el niño ni qué pasó con el oso. Ese silencio deja el desenlace abierto. Lo seguro es el paso desde el refugio de la montaña hasta el poblado y la decisión del hijo de acompañar a su madre al mundo del que había sido separada.`,
    historia: composeRioFrioHistory({
      number: 5,
      sourceFocus:
        "La historia registra un secuestro, una convivencia forzada, el nacimiento de un hijo híbrido y el regreso al poblado. No presenta la relación como un romance ni atribuye a la mujer una aceptación libre del cautiverio.",
      chavesRelation:
        "El relato no aparece entre los cuatro cuentos de Nicolás Henao publicados por Chaves. Su forma en Reichel es breve y no incluye una nota comparativa.",
      editorialDecision:
        "La ficha anterior suavizaba la violencia y añadía una reconciliación sentimental del oso; la nueva versión conserva el conflicto y el final abierto.",
    }),
    versiones: composeRioFrioVersions({
      primaryVariant:
        "El niño tiene pelo de oso de la cintura hacia abajo, crece muy rápido y es quien conduce a su madre hacia las casas.",
      comparativeVariant:
        "Historias de uniones entre mujeres y osos existen en Europa, Asia y América, pero la fuente de Río Frío no aporta una genealogía ni una relación histórica entre esos repertorios.",
      boundary:
        "La página no convierte la captura en una alegoría de armonía entre lo humano y lo salvaje.",
    }),
    leccion:
      "El regreso comienza cuando quien nació entre dos mundos reconoce la voluntad de su madre.",
    similitudes: composeSimilarities({
      internalComparison:
        "La mujer y el oso se relaciona con La mujer hormiga por la convivencia entre ámbitos distintos y por un hijo que hace posible el tránsito.",
      broaderComparison:
        "El motivo de descendencia humana y animal aparece en repertorios muy distantes. Aquí se diferencia por el refugio de bejucos, los pájaros silenciados, el crecimiento acelerado y el regreso decidido por el niño.",
    }),
    excerpt:
      "Un oso mantiene a una mujer en la montaña; el hijo nacido allí crece, la defiende y la conduce de regreso al poblado.",
    seoTitle: "La mujer y el oso: relato Chamí",
    seoDescription:
      "Lee el relato Chamí de una mujer llevada a la montaña por un oso y del hijo que la acompaña de regreso a la comunidad.",
    focusKeywords: [
      "la mujer y el oso",
      "mito Chamí del oso",
      "relatos de Río Frío",
      "hijo del oso",
      "tradición oral Emberá Chamí",
    ],
    tags: ["oso", "coexistencia", "supervivencia", "naturaleza"],
    researchNotes: `FUENTE PRIMARIA: Reichel-Dolmatoff 1953, relato 5.
CORRECCIÓN: no romantizar el secuestro ni inventar una reconciliación final.
FINAL: la fuente termina cuando madre e hijo llegan a las casas y cuentan lo sucedido.
${commonResearch}`,
  }),
  defineChamiMyth({
    slug: "la-historia-de-erubida-y-siebida",
    title: "Erubidá y Siebidá",
    mito: `Los Erubidá eran la gente del valle y los Siebidá la gente de la montaña. Diez cazadores Siebidá salieron con bodoqueras y lanzas y levantaron un campamento. Dos bajaron por el río para pescar y encontraron a quince enemigos. Regresaron con prisa y avisaron al grupo, pero nadie creyó su relato. Uno decidió permanecer despierto y se disfrazó de Erubidá.

Durante la noche llegó el ataque. Los Erubidá mataron a casi todos. El vigilante se defendió con su lanza, abatió a varios adversarios y consiguió escapar gracias al disfraz. Al regresar informó al jefe. Este respondió que ya conocía la desgracia porque la había visto en un sueño.

La narración introduce entonces otro episodio. El hijo del superviviente, descrito como brujo, murió. No lo enterraron: lo dejaron en un hueco bajo la casa, desde donde a veces se oían ruidos. El jefe convocó una expedición contra los Erubidá. Los guerreros encontraron al otro pueblo en una fiesta, cantando. Atacaron y quemaron parte de las casas.

Cuando la destrucción ya había comenzado, los Siebidá discutieron si debían dejar vivir a sus enemigos. El jefe quería continuar, pero el jefe Erubidá ofreció amistad. La propuesta detuvo la matanza. Los atacantes regresaron a su territorio y, según la versión de Río Frío, desde entonces los dos grupos quedaron en paz.

El relato no presenta a uno de los pueblos como criatura sobrenatural. Habla de colectivos humanos definidos por su posición territorial —valle y montaña—, de una guerra alimentada por incredulidad y represalia, y de una negociación final entre autoridades. Tampoco borra la violencia previa: la amistad llega después de muertes y casas quemadas. La paz no revierte lo sucedido, pero interrumpe una cadena que podía terminar con ambos grupos. El disfraz, la vigilancia y la palabra entre jefes determinan quién sobrevive y cuándo puede detenerse la guerra.`,
    historia: composeRioFrioHistory({
      number: 6,
      sourceFocus:
        "Reichel publica una versión abreviada de una tradición sobre enemistad entre gente del valle y gente de la montaña. La oposición es territorial y política, no una división entre humanos y monstruos.",
      chavesRelation:
        "Chaves conserva una versión mucho más extensa narrada por Nicolás Henao, con Aribadá, disfraces, resurrección mediante beké, nuevas matanzas, muchachas cautivas y una bebeta de reconciliación.",
      editorialDecision:
        "Esta página toma la secuencia de Reichel como relato base y usa a Chaves para mostrar variación, sin mezclar las dos extensiones en una narración única.",
    }),
    versiones: composeRioFrioVersions({
      primaryVariant:
        "La versión de 1953 condensa el ataque inicial, el sueño, la represalia y la oferta de amistad.",
      comparativeVariant:
        "La de Chaves nombra a Nicolás Henao como narrador y desarrolla a Aribadá, el murciélago que induce sueño, el uso de beké y varias negociaciones antes del acuerdo final.",
      boundary:
        "Las diferencias se publican como variantes de un mismo conflicto y no como hechos históricos comprobados.",
    }),
    leccion:
      "La paz no borra las pérdidas, pero puede detener una venganza destinada a destruir a todos.",
    similitudes: composeSimilarities({
      internalComparison:
        "Erubidá y Siebidá se acerca a Horchíbarí por cautiverio, fuga y persecución, aunque aquí el centro es un conflicto colectivo y una negociación entre jefes.",
      broaderComparison:
        "Las tradiciones sobre guerras entre valle y montaña son frecuentes, pero los nombres Erubidá y Siebidá, el sueño del jefe y la doble versión de 1945 pertenecen a esta memoria localizada.",
    }),
    excerpt:
      "Gente del valle y gente de la montaña pasan de una emboscada a la represalia, hasta que sus jefes acuerdan detener la guerra.",
    seoTitle: "Erubidá y Siebidá: relato Chamí",
    seoDescription:
      "Conoce las versiones Chamí del conflicto entre la gente del valle y la montaña, su represalia y el acuerdo final de amistad.",
    focusKeywords: [
      "Erubidá y Siebidá",
      "relato Chamí de guerra",
      "gente del valle y montaña",
      "mitos de Río Frío",
      "tradición oral Emberá Chamí",
    ],
    tags: ["Sikóna", "conflicto", "paz", "reconciliación"],
    researchNotes: `FUENTES PRIMARIAS: Reichel-Dolmatoff 1953, relato 6; Chaves 1945, relato I de Nicolás Henao.
DECISIÓN: relato base de Reichel y variantes extensas de Chaves separadas.
LÍMITE: no presentar la tradición como crónica histórica comprobada.
${commonResearch}`,
  }),
  defineChamiMyth({
    slug: "el-hombre-que-atrapo-al-sol-y-a-la-luna",
    title: "El hombre que atrapó al Sol y a la Luna",
    mito: `La Gente del Sol poseía mucho oro. La Gente de la Luna también. Sus jefes eran sabios y discutían cuál de los dos pueblos sabía más. En medio de esa competencia, un hombre afirmó que podía matar al Sol y a la Luna.

Preparó dos talegos: uno rojo para el Sol y otro azul para la Luna. En el primero puso maíz caliente; en el segundo, hojaldres. El olor de la comida atrajo a los dos astros. Al mediodía el hombre encerró al Sol. Durante la noche hizo lo mismo con la Luna.

Sin ellos, el mundo quedó completamente oscuro. Murieron la Gente del Sol y la Gente de la Luna, y la pérdida alcanzó a todos los seres. El jefe pidió que hablaran con el captor y le ordenaran soltar a los astros. El hombre se negó durante un tiempo. Solo cedió cuando todos insistieron. Al abrir los talegos, la luz volvió.

La comunidad reconoció que aquel hombre sabía mucho. Organizaron una fiesta, pero el reconocimiento escondía un nuevo conflicto. Lo dejaron embriagarse y trataron de matarlo con lanzas y golpes. Ninguna herida consiguió acabar con él. Quienes lo atacaban tuvieron que admitir que tampoco podían vencerlo por la fuerza.

El hombre pidió entonces ver al jefe. La transcripción registra un desenlace abrupto: el jefe se mató y el hombre ocupó su lugar. No explica por qué la autoridad tomó esa decisión ni qué ocurrió después. La historia conserva así una ambivalencia incómoda. El protagonista demuestra conocimiento y devuelve la luz, pero antes la había retenido hasta provocar muerte. Luego sobrevive a una emboscada y alcanza el mando, sin que la narración lo declare justo.

El Sol y la Luna tampoco aparecen como simples objetos celestes. Tienen pueblos, riqueza, jefes y capacidad de acercarse a la comida. El encierro de ambos interrumpe relaciones completas. La oscuridad no es aquí una noche ordinaria: es la consecuencia de concentrar en una sola persona el poder sobre aquello que permite vivir a todos.`,
    historia: composeRioFrioHistory({
      number: 7,
      sourceFocus:
        "La transcripción ofrece un relato breve sobre conocimiento, captura de los astros, oscuridad y cambio de autoridad. No traduce la riqueza solar y lunar como una metáfora ni explica el suicidio final del jefe.",
      chavesRelation:
        "Chaves no incluye esta narración entre los cuatro cuentos atribuidos a Nicolás Henao, por lo que no existe allí una segunda versión de control.",
      editorialDecision:
        "La ficha revisada conserva la ambivalencia del protagonista y elimina la presentación automática como héroe benévolo que salva al mundo.",
    }),
    versiones: composeRioFrioVersions({
      primaryVariant:
        "El hombre atrae a cada astro con un alimento distinto y un talego de color propio; después de liberarlos sobrevive a un intento de asesinato.",
      comparativeVariant:
        "El hijo de la nutria también asciende hacia la luna, pero allí busca a una supuesta responsable de la muerte de su madre y cae al mundo inferior. Son episodios distintos.",
      boundary:
        "La página no fusiona a este hombre con Jinu Potó ni con Karagabí.",
    }),
    leccion:
      "El conocimiento se vuelve peligroso cuando alguien retiene para sí lo que sostiene la vida común.",
    similitudes: composeSimilarities({
      internalComparison:
        "el cautiverio del Sol y la Luna dialoga con La oscuridad y con el ascenso lunar de El hijo de la nutria, aunque cambian protagonista, causa y desenlace.",
      broaderComparison:
        "Encerrar o liberar astros aparece en otros repertorios indígenas y campesinos, pero los talegos rojo y azul, el maíz, los hojaldres y la sucesión del jefe pertenecen a esta versión.",
    }),
    excerpt:
      "Un hombre encierra al Sol y a la Luna en talegos, oscurece el mundo y termina ocupando el lugar del jefe.",
    seoTitle: "El hombre que atrapó al Sol y la Luna",
    seoDescription:
      "Lee el relato Chamí del hombre que encerró al Sol y a la Luna, dejó al mundo oscuro y sobrevivió al intento de matarlo.",
    focusKeywords: [
      "hombre que atrapó al Sol y la Luna",
      "mito Chamí del Sol",
      "mito Chamí de la Luna",
      "relatos de Río Frío",
      "oscuridad en mitología Chamí",
    ],
    tags: ["sol y luna", "héroe", "sabiduría", "oscuridad"],
    researchNotes: `FUENTE PRIMARIA: Reichel-Dolmatoff 1953, relato 7.
DECISIÓN: conservar el desenlace abrupto y la ambivalencia del protagonista.
NO FUSIONAR: el ascenso de Jinu Potó a la luna pertenece a otro relato.
${commonResearch}`,
  }),
  defineChamiMyth({
    slug: "la-mujer-de-karagabi",
    title: "La mujer de Karagabí",
    mito: `Karagabí tenía mujer y se mostraba muy enfermo. Cuando llegó el momento de un baile, ella lo invitó a beber chicha. Él respondió que no podía acompañarla, pero le dio permiso para asistir. La mujer se arregló y salió; el marido quedó en la casa quejándose de sus dolores.

Durante la noche, Karagabí cambió su apariencia. Rejuveneció, se adornó y llegó a la fiesta como un forastero. La música del tambor llenaba el lugar. El joven desconocido se acercó a la mujer y conversó con ella. Ella no reconoció a su propio marido bajo aquel aspecto.

Antes del amanecer, Karagabí regresó a la casa y retomó la figura enferma. Cuando la mujer volvió, le preguntó si había visto gente de afuera. Ella respondió que sí: un joven cuyo origen nadie conocía. Karagabí repitió la prueba en un segundo baile y después en un tercero. Cada vez, la mujer salía sola; cada vez, él se presentaba rejuvenecido; cada vez, volvía primero para recibirla como el esposo enfermo.

La transcripción conserva una frase en emberá bedea que el editor dejó sin traducir. Al tercer regreso, Karagabí volvió a preguntar por el forastero. La respuesta confirmó que la mujer había tratado con aquel joven sin descubrir quién era. Entonces Karagabí la tomó, la arrastró y la convirtió en un animal.

La versión de Río Frío dice que se volvió una lorita que grita cuando hay luna llena. No habla de una lechuza ni reproduce la extensión moralizante de otras compilaciones. El relato termina con esa transformación y no cuenta qué ocurrió luego con Karagabí.

La repetición de los tres bailes hace visible que no se trata de un descubrimiento casual. Karagabí prepara y controla la prueba, modifica su cuerpo y administra la información. La mujer actúa sin conocer la identidad del forastero. Esta edición conserva esos hechos sin convertir la transformación en una sentencia editorial sobre todas las relaciones Chamí ni presentar la violencia del personaje como una norma vigente.`,
    historia: composeRioFrioHistory({
      number: 8,
      sourceFocus:
        "La versión de Río Frío presenta tres pruebas organizadas por Karagabí y termina con la conversión de la mujer en una lorita asociada a la luna llena. Una frase quedó sin traducción en el artículo.",
      chavesRelation:
        "Chaves publica entre los relatos de Rafael Bailarín, narrador Katío, una versión más extensa en la que la mujer se llama Barakoko, se vuelve lechuza y Karagabí transforma después a muchas personas en animales.",
      editorialDecision:
        "La revisión atribuye cada variante a su narrador y retira de la versión Chamí los episodios Katío que la ficha anterior había incorporado sin frontera.",
    }),
    versiones: composeRioFrioVersions({
      primaryVariant:
        "La mujer se convierte en lorita después de tres bailes y la fuente no añade una creación general de los animales.",
      comparativeVariant:
        "La versión Katío de Bailarín, publicada por Chaves, nombra a Barakoko, describe arañazos y amplía el desenlace. Cardona muestra que la moralización sexual de estas transformaciones requiere una lectura crítica.",
      boundary:
        "La diferencia entre lorita y lechuza se conserva; no se corrige una forma con la otra.",
    }),
    leccion:
      "Ninguna prueba secreta justifica borrar la agencia de quien actúa sin conocer el engaño.",
    similitudes: composeSimilarities({
      internalComparison:
        "La mujer de Karagabí se relaciona con Las transformaciones y El origen de los animales, pero esta página conserva solo la prueba de los bailes y la conversión final.",
      broaderComparison:
        "El motivo de una divinidad disfrazada que pone a prueba a otra persona aparece en múltiples tradiciones. Aquí la enfermedad fingida, los tres bailes, la frase sin traducir y la lorita de luna llena establecen una versión localizada.",
    }),
    excerpt:
      "Karagabí finge enfermedad, se presenta rejuvenecido en tres bailes y transforma a su mujer en una lorita.",
    seoTitle: "La mujer de Karagabí: relato Chamí",
    seoDescription:
      "Lee la versión Chamí de los tres bailes en que Karagabí cambia de apariencia y transforma a su mujer en una lorita.",
    focusKeywords: [
      "la mujer de Karagabí",
      "mito Chamí de Karagabí",
      "lorita de luna llena",
      "relatos de Río Frío",
      "transformaciones Emberá Chamí",
    ],
    tags: ["Karagabí", "engaño", "transformación", "fidelidad"],
    researchNotes: `FUENTE PRIMARIA CHAMÍ: Reichel-Dolmatoff 1953, relato 8.
FRONTERA: Chaves 1945 atribuye su versión extensa a Rafael Bailarín, narrador Katío.
CORRECCIÓN: lorita en Río Frío; lechuza/Barakoko en la variante Katío.
${commonResearch}`,
  }),
  defineChamiMyth({
    slug: "himo-la-iguana-y-la-candela",
    title: "Hímo, la iguana y la candela",
    mito: `Hímo, la iguana, era quien guardaba la candela. No mostraba a nadie dónde estaba. Los demás se calentaban únicamente bajo el sol y desconocían la comida preparada con fuego.

Un día Hímo ofreció alimentos cocidos a los indígenas. El sabor les pareció extraordinario. Regresaron hablando de aquello que habían comido y comenzaron a preguntarse cómo conseguir la candela. Hímo siguió ocultando el secreto.

Cuando iba a pescar, volvía con pescado ahumado. En una ocasión encontró a Karagabí y le regaló una pieza. Karagabí la observó, la olió y trató de comprender qué la había transformado, pero no descubrió el procedimiento. En la transcripción pronuncia una frase en emberá bedea que quedó sin traducción.

Otro día, Hímo tomó un rumbo para pescar y Karagabí fue por otro. Karagabí llegó primero a un gran charco. Antes de ser visto, se convirtió en un pescado enorme y permaneció dentro del agua. La iguana encontró aquella presa, la atrapó con dificultad y pidió a su hijo que la partiera con machete. Llevaron los pescados a la casa.

Karagabí seguía vivo bajo la forma del pez. Desde allí miró hasta descubrir el lugar donde Hímo escondía la candela. La familia cocinó y comió los pescados pequeños. Cuando finalmente se dispusieron a preparar al más grande, este saltó, tomó el fuego y escapó.

Hímo intentó impedirlo, pero Karagabí lo transformó en una hormiga pequeña como respuesta. Desde entonces Karagabí tuvo candela. La narración añade una última prueba: al mediodía intentó producirla con un serrucho, pero no funcionó.

El relato no dice que Karagabí inventara el fuego. Lo obtiene mediante engaño después de que Hímo se negara a compartirlo. Tampoco presenta a la iguana solo como enemiga: es pescadora, cocinera y poseedora de un conocimiento que los demás desean. La transformación final resuelve la disputa a favor de Karagabí, pero la fuente conserva la memoria de quién dominaba antes la candela.`,
    historia: composeRioFrioHistory({
      number: 9,
      sourceFocus:
        "La transcripción registra el acceso a la candela mediante una secuencia de comida, observación, metamorfosis y sustracción. Hímo aparece como iguana y luego como hormiga pequeña.",
      chavesRelation:
        "Chaves publica una narración Katío distinta sobre la obtención de maíz y chontaduro mediante Ancastor. Compartir el tema de recursos esenciales no convierte una historia en variante de la otra.",
      editorialDecision:
        "La edición reemplaza el resumen moral sobre avaricia por una reconstrucción que conserva el conocimiento técnico de Hímo y el engaño de Karagabí.",
    }),
    versiones: composeRioFrioVersions({
      primaryVariant:
        "Karagabí se vuelve pez, observa la casa desde la captura y roba la candela cuando van a cocinarlo.",
      comparativeVariant:
        "Otros relatos Emberá sitúan el fuego en lagartijas o personajes con nombres diferentes. Cardona advierte que compartir recursos y transformarse no siempre debe leerse como un castigo moral simple.",
      boundary:
        "La página no incorpora la versión de Siu ni la de Boicaimía como si fueran nombres intercambiables de Hímo.",
    }),
    leccion:
      "Un conocimiento indispensable cambia a la comunidad cuando deja de pertenecer a una sola persona.",
    similitudes: composeSimilarities({
      internalComparison:
        "Hímo se relaciona con Héntserá y el agua porque una figura controla un recurso vital que Karagabí busca distribuir.",
      broaderComparison:
        "El fuego robado es un motivo muy extendido, pero la pesca, el pescado ahumado, la transformación de Karagabí y el escondite dentro de la casa diferencian esta narración.",
    }),
    excerpt:
      "Hímo guarda la candela hasta que Karagabí se convierte en pez, descubre el escondite y escapa con el fuego.",
    seoTitle: "Hímo, la iguana y la candela",
    seoDescription:
      "Conoce el relato Chamí en que Hímo guarda el fuego y Karagabí se transforma en pez para descubrirlo y llevarse la candela.",
    focusKeywords: [
      "Hímo la iguana",
      "origen del fuego Chamí",
      "candela de Karagabí",
      "mitos de Río Frío",
      "tradición oral Emberá Chamí",
    ],
    tags: ["Hímo", "fuego", "Karagabí", "transformación"],
    researchNotes: `FUENTE PRIMARIA: Reichel-Dolmatoff 1953, relato 9.
FRONTERA: no fusionar Hímo con Siu, Boicaimía u otros poseedores regionales del fuego.
LECTURA: acceso y redistribución del recurso; evitar reducir el relato a una moraleja sobre avaricia.
${commonResearch}`,
  }),
  defineChamiMyth({
    slug: "la-oscuridad",
    title: "La oscuridad",
    mito: `Un día el mundo se oscureció por completo. La transcripción dice que todos se ahogaron. Quienes quedaban buscaron una manera de romper la oscuridad y comenzaron a golpear las piedras. El esfuerzo no los salvó: la gente murió.

Entonces llegó el primer hombre. Miró alrededor y preguntó qué podían hacer, porque todo continuaba oscuro. Dentro de una casa retomaron la misma tarea. Golpearon las piedras una y otra vez. Finalmente lograron quebrarlas y el día volvió.

La luz no resolvió la pérdida. Parte de la gente había muerto, pero la narración afirma que después volvieron a vivir. El mundo apenas recuperaba su ritmo cuando otra oscuridad cayó. Los sobrevivientes lloraron y pronunciaron una frase que Reichel-Dolmatoff transcribió como “Hóbai homa kini burúa”, sin ofrecer traducción.

De nuevo trabajaron sobre las piedras. Al romperlas regresó el día, aunque muchas personas siguieron muriendo. La comunidad tuvo que empezar otra forma de subsistencia. Se internó en el monte para abrir terrenos y sembrar.

No contaban con herramientas. En lugar de cortar los árboles, pelaban la corteza hasta que los troncos morían. El maíz que manejaban era pequeño. Lo molían para sacar harina y la mezclaban con agua; aquella preparación sencilla era su único alimento.

La versión termina en esa vida precaria. No explica qué eran las piedras, por qué contenían o interrumpían la claridad, ni quién provocó los dos periodos oscuros. Tampoco identifica al primer hombre con Karagabí. La secuencia une catástrofe, repetición y aprendizaje: ahogarse, morir, regresar, volver a romper la noche y comenzar a cultivar sin instrumentos.

Esta edición no convierte la historia en una victoria total de la perseverancia. La luz regresa, pero deja muertos y escasez. La humanidad aprende a sostenerse con lo disponible mientras todavía carece de herramientas y de una cosecha abundante. El día se recupera como condición para trabajar, no como promesa de que el sufrimiento haya terminado.`,
    historia: composeRioFrioHistory({
      number: 10,
      sourceFocus:
        "El relato enlaza dos ciclos de oscuridad con la apertura del monte, la falta de herramientas y una alimentación de harina de maíz con agua. La frase en emberá bedea quedó sin traducir.",
      chavesRelation:
        "Chaves no incluye esta narración en su selección de 1945. Su texto sobre Awena, atribuido al narrador Katío Rafael Bailarín, relaciona temblores y mundo subterráneo, pero no es una versión de la oscuridad.",
      editorialDecision:
        "La ficha anterior añadía paralelos con Sísifo y Ragnarök como si explicaran el relato; la revisión devuelve el centro a la luz, las piedras y la subsistencia.",
    }),
    versiones: composeRioFrioVersions({
      primaryVariant:
        "La oscuridad ocurre dos veces, se rompe golpeando piedras y desemboca en una agricultura sin herramientas.",
      comparativeVariant:
        "El hombre que atrapó al Sol y a la Luna ofrece otra causa de oscuridad: allí los astros están encerrados en talegos. Las páginas se conectan, pero no se fusionan.",
      boundary:
        "La frase no traducida se conserva como límite documental y no recibe una traducción inventada.",
    }),
    leccion:
      "Recuperar la luz exige trabajo común, aunque el día nuevo no repare todas las pérdidas.",
    similitudes: composeSimilarities({
      internalComparison:
        "La oscuridad dialoga con El hombre que atrapó al Sol y a la Luna y con Creación Emberá por el paso desde un mundo incompleto hacia condiciones de vida humana.",
      broaderComparison:
        "Ciclos de destrucción y recomienzo aparecen en muchas cosmogonías, pero aquí las piedras quebradas, la corteza de los árboles y el maíz pequeño sostienen una memoria concreta.",
    }),
    excerpt:
      "La gente rompe piedras para recuperar el día y luego aprende a sembrar sin herramientas en un mundo todavía precario.",
    seoTitle: "La oscuridad: relato Chamí de origen",
    seoDescription:
      "Lee el relato Chamí sobre dos periodos de oscuridad, las piedras que devuelven el día y el inicio de una agricultura sin herramientas.",
    focusKeywords: [
      "la oscuridad Chamí",
      "mito Chamí de la luz",
      "primer hombre Emberá",
      "relatos de Río Frío",
      "origen de la agricultura Chamí",
    ],
    tags: ["oscuridad", "primer hombre", "resiliencia", "supervivencia"],
    researchNotes: `FUENTE PRIMARIA: Reichel-Dolmatoff 1953, relato 10.
LÍMITE: “Hóbai homa kini burúa” quedó sin traducción en la fuente.
NO FUSIONAR: la oscuridad causada por el encierro del Sol y la Luna pertenece al relato 7.
${commonResearch}`,
  }),
  defineChamiMyth({
    slug: "hentsera-y-el-agua",
    title: "Héntserá y el agua",
    mito: `Héntserá era el único dueño del agua. Bebía agua buena, mientras Karagabí no sabía dónde encontrarla y debía recoger la que caía con la lluvia.

En una ocasión, Héntserá compartió un poco. Karagabí probó el agua y quiso saber de dónde venía. Siguió buscando por su cuenta, pero no halló la fuente. Entonces pidió ayuda a un muchacho que trabajaba en su casa. Le encargó observar el camino de Héntserá.

El joven lo siguió hasta la montaña. Allí vio que llegaba a un árbol enorme llamado jenené. Regresó y reveló el lugar. Karagabí reunió a su gente, llevó muchas hachas y convocó a ocho ardillas para participar en la tarea.

Durante ocho días trabajaron alrededor del tronco. La narración no describe una batalla con Héntserá ni una negociación posterior. El esfuerzo se concentra en el árbol y en el tiempo necesario para derribarlo. Finalmente el jenené cayó.

En el instante de la caída, su raíz se convirtió en el mar. Las ramas mayores formaron el Cauca y el Magdalena; otras extensiones del árbol abrieron el agua hacia el mundo. Desde entonces todos pudieron tenerla.

Las ocho ardillas llevaban narigueras, llamadas monsimá. Cuando el árbol golpeó la tierra, las narigueras se reventaron. La fuente conserva ese detalle sin explicar por qué las usaban ni qué significado tenía su ruptura.

El relato presenta el agua como algo ya existente, concentrado y oculto, no como una sustancia creada de la nada. Karagabí accede a ella mediante observación, trabajo colectivo y la caída de un ser vegetal que conecta montaña, mar y ríos. Héntserá no desaparece del relato por una metamorfosis explícita: la versión de Río Frío no dice aquí que se vuelva hormiga.

Por eso esta página se mantiene separada de La Jepá de Jeguada. Ambas historias explican relaciones con el agua, pero una gira alrededor de Héntserá, el muchacho espía y el árbol jenené; la otra sigue gusanos sembrados en recipientes, serpientes acuáticas y el recorrido hacia el río San Juan.`,
    historia: composeRioFrioHistory({
      number: 11,
      sourceFocus:
        "La versión de Río Frío nombra a Héntserá como dueño del agua, localiza el depósito en el árbol jenené y atribuye a la caída del tronco el mar, el Cauca y el Magdalena.",
      chavesRelation:
        "Chaves no incluye este relato entre los cuatro de Nicolás Henao. Vasco y Cardona muestran que Jentserá, jenené, agua y transformación poseen variantes regionales que no deben comprimirse en una sola versión.",
      editorialDecision:
        "La revisión separa este relato de La Jepá de Jeguada y elimina de su secuencia la roca, los gusanos, el cangrejo y las serpientes pertenecientes a otras fuentes.",
    }),
    versiones: composeRioFrioVersions({
      primaryVariant:
        "Héntserá comparte primero un poco de agua; un muchacho descubre el jenené y la comunidad lo derriba durante ocho días con ayuda de ardillas.",
      comparativeVariant:
        "Versiones posteriores nombran a Jentserá como hormiga conga o incorporan transformaciones de Karagabí. La transcripción de Río Frío no incluye esos episodios.",
      boundary:
        "La Jepá conserva una genealogía acuática distinta y permanece en otra URL.",
    }),
    leccion:
      "El agua se vuelve común mediante observación, cooperación y una transformación que alcanza todo el territorio.",
    similitudes: composeSimilarities({
      internalComparison:
        "Héntserá y el agua se conecta con Hímo y la candela por la concentración de un recurso, y con La Jepá de Jeguada por el agua que organiza el territorio.",
      broaderComparison:
        "Los árboles que contienen ríos aparecen en otras mitologías, pero el jenené, las ocho ardillas y los nombres Cauca y Magdalena localizan esta versión de manera precisa.",
    }),
    excerpt:
      "Karagabí descubre el jenené de Héntserá y lo derriba con su gente; la raíz se vuelve mar y las ramas, ríos.",
    seoTitle: "Héntserá y el agua: mito Chamí",
    seoDescription:
      "Conoce la versión Chamí de Héntserá, el árbol jenené y el trabajo colectivo que libera el mar, el Cauca y el Magdalena.",
    focusKeywords: [
      "Héntserá y el agua",
      "árbol jenené",
      "origen del agua Chamí",
      "Karagabí y los ríos",
      "mitos de Río Frío",
    ],
    tags: ["Héntserá", "agua", "compartir", "Karagabí"],
    researchNotes: `FUENTE PRIMARIA: Reichel-Dolmatoff 1953, relato 11.
UNIFICACIÓN: esta es la versión canónica del jenené en Río Frío.
SEPARACIÓN: El origen del agua se reconstruye como La Jepá de Jeguada.
${commonResearch}`,
  }),
  defineChamiMyth({
    slug: "creacion-embera",
    title: "La creación de la gente",
    mito: `Karagabí tomó su hacha y caminó hasta una palma barrigona. Comenzó a hacer cortes en el tronco. No fue un solo golpe: abrió diez, veinte o más cavidades. Después cubrió cada una con hojas grandes de rascadera y se marchó.

La narración no dice cuánto esperaba encontrar ni explica por qué escogió aquella palma. Solo cuenta que dejó pasar varios días antes de regresar. Cuando volvió, retiró las hojas que tapaban uno de los huecos. Del interior salió gente en abundancia, como un chorro.

Aquellas primeras personas no resistían. La picadura de una hormiga bastaba para matarlas. Las mujeres no llevaban a sus hijos en el vientre: los criaban en la pantorrilla. Por esa forma de nacimiento recibían el nombre de híno-pota uára, que el artículo traduce como “hijos de la pantorrilla”.

La población terminó por acabarse. La fuente no describe una guerra, un diluvio ni una falta moral que causara su desaparición. La fragilidad está en su cuerpo y en una manera de reproducirse que la narración diferencia de la humanidad posterior.

Karagabí tuvo que hacer nueva gente. El relato concluye con una afirmación directa: de esa creación venimos nosotros. No explica el segundo procedimiento, no enumera materiales y no dice si abrió de nuevo la palma. El silencio marca la frontera de lo conservado.

Esta versión breve une vegetal, cuerpo y generación. La palma no es solo escenario; guarda dentro de sí una multitud posible. Las hojas protegen los cortes durante el tiempo de formación. La pantorrilla, que en el ciclo de Jinu Potó también puede dar a luz, aparece aquí como rasgo de una humanidad anterior.

La edición mantiene el título histórico de la URL, pero evita presentar el relato como explicación única del origen de todos los pueblos Emberá. Reichel lo escuchó dentro de un grupo Chamí localizado en Río Frío. “De estos venimos nosotros” pertenece a esa voz narrada y no autoriza a homogeneizar las cosmogonías Chamí, Katío, Dóbida y Eperara Siapidara.`,
    historia: composeRioFrioHistory({
      number: 12,
      sourceFocus:
        "La transcripción ocupa un pasaje muy breve: cortes en una palma barrigona, personas que salen como un chorro, una primera humanidad frágil y una segunda creación no descrita.",
      chavesRelation:
        "Chaves no publica este episodio entre los cuentos de Nicolás Henao. Su artículo contiene otros orígenes atribuidos a un narrador Katío que no se incorporan como continuación.",
      editorialDecision:
        "La nueva edición conserva los vacíos de la fuente y cambia el título visible para no presentar una versión Chamí local como creación indiferenciada de todo el pueblo Emberá.",
    }),
    versiones: composeRioFrioVersions({
      primaryVariant:
        "La gente surge de los cortes cubiertos de una palma y la primera generación lleva hijos en la pantorrilla.",
      comparativeVariant:
        "El hijo de la nutria desarrolla un nacimiento individual desde una pantorrilla; Ferrari documenta variantes del mismo motivo, pero no las convierte en una segunda parte de esta creación colectiva.",
      boundary:
        "La página no añade el árbol jenené, agua, fuego ni un adversario de Karagabí.",
    }),
    leccion:
      "La humanidad surge de una relación vegetal y corporal que ninguna versión agota por completo.",
    similitudes: composeSimilarities({
      internalComparison:
        "La creación de la gente dialoga con El hijo de la nutria por el nacimiento desde la pantorrilla y con El hijo encerrado en el árbol por cuerpos que permanecen dentro de vegetales.",
      broaderComparison:
        "Los seres humanos nacidos de árboles aparecen en relatos muy diversos, pero la palma barrigona, las hojas de rascadera y el término híno-pota uára pertenecen a este registro.",
    }),
    excerpt:
      "Karagabí abre una palma barrigona: de sus cortes sale una primera humanidad frágil y luego crea la gente actual.",
    seoTitle: "La creación de la gente: mito Chamí",
    seoDescription:
      "Lee el relato Chamí en que Karagabí abre una palma barrigona, deja salir una humanidad frágil y crea después a la gente actual.",
    focusKeywords: [
      "creación de la gente Chamí",
      "palma barrigona Karagabí",
      "hijos de la pantorrilla",
      "mitos de Río Frío",
      "origen Emberá Chamí",
    ],
    tags: ["Karagabí", "creación", "origen del hombre", "identidad"],
    researchNotes: `FUENTE PRIMARIA: Reichel-Dolmatoff 1953, relato 12.
TÍTULO: se conserva el slug creacion-embera, pero el título visible precisa “La creación de la gente”.
LÍMITE: no generalizar una versión localizada a todos los pueblos Emberá.
${commonResearch}`,
  }),
  defineChamiMyth({
    slug: "el-hijo-de-karagabi-y-la-gente-subterranea",
    title: "El hijo de Karagabí y la gente subterránea",
    mito: `Debajo de la tierra había otro estado. Allí vivía una gente llamada aramúko dohurá. La versión de Río Frío no explica cómo se llegaba hasta ese lugar ni describe sus casas. Su diferencia principal estaba en el cuerpo y en la alimentación: comían solo el jugo de los alimentos y no defecaban.

El hijo de Karagabí era reconocido como sabio. Al encontrar a la gente subterránea, observó su condición y ofreció modificarla. Les dijo que, como no sabían defecar, podía abrir a cada persona un ano para que comiera de todo.

Los aramúko aceptaron. El hijo aseguró que la operación era sencilla. Buscó un cuchillo y cortó las nalgas de cada uno. El resultado contradijo su promesa: las personas murieron.

La transcripción termina inmediatamente. No registra castigo para el hijo de Karagabí, regreso al mundo de arriba ni supervivientes que expliquen lo sucedido. Tampoco afirma que los habitantes fueran inferiores por alimentarse de jugo. El encuentro muestra una intervención presentada como ayuda que destruye a quienes pretendía cambiar.

El pasaje forma parte de un conjunto de relatos Emberá sobre personas de mundos inferiores que se nutren mediante vapor, olor o líquido y carecen de ano. Las versiones no coinciden en quién llega, qué instrumento usa, cuántas personas mueren ni cómo termina el visitante. En este relato particular, el protagonista no es Jinu Potó: es el hijo de Karagabí.

La brevedad de la fuente exige no rellenar el desenlace. Esta edición conserva lo que el texto sí permite ver: existe una sociedad con un cuerpo adecuado a su propia forma de comer; un extranjero poderoso juzga esa diferencia como carencia; la comunidad consiente en la transformación; el procedimiento causa la muerte.

Leído desde el presente, el episodio puede advertir sobre los riesgos de imponer una solución sin comprender la vida ajena. Esa es una interpretación editorial, no una moraleja pronunciada por el narrador. La historia permanece abierta precisamente porque el registro no explica cómo la comunidad recordó después aquella pérdida.`,
    historia: composeRioFrioHistory({
      number: 13,
      sourceFocus:
        "La transcripción de 1953 contiene solo el ofrecimiento, la aceptación y la muerte de la gente aramúko dohurá. La denominación “otro estado” y el nombre del grupo se conservan.",
      chavesRelation:
        "Chaves publica pasajes comparativos sobre Aremuko y personas que se alimentan del vapor, mientras El hijo de la nutria de Reichel atribuye un procedimiento parecido a otro protagonista.",
      editorialDecision:
        "La revisión evita presentar a la gente subterránea como defectuosa y separa la acción del hijo de Karagabí de las versiones de Jinu Potó.",
    }),
    versiones: composeRioFrioVersions({
      primaryVariant:
        "El hijo de Karagabí usa un cuchillo y mueren todos los aramúko intervenidos.",
      comparativeVariant:
        "En El hijo de la nutria el visitante usa un palo de chontaduro, algunos mueren y otros se alivian antes de expulsarlo. Chaves y Ferrari registran todavía más variaciones.",
      boundary:
        "La semejanza establece un ciclo de motivos, no identidad entre los protagonistas.",
    }),
    leccion:
      "Una ayuda impuesta sin comprender otro modo de vida puede convertirse en destrucción.",
    similitudes: composeSimilarities({
      internalComparison:
        "El hijo de Karagabí se relaciona directamente con El hijo de la nutria por la gente subterránea que no defeca, pero cambia protagonista, instrumento y número de sobrevivientes.",
      broaderComparison:
        "Los encuentros con sociedades de cuerpos distintos aparecen en relatos de viaje, aunque el aramúko, la alimentación líquida y la intervención del hijo de Karagabí pertenecen a esta versión.",
    }),
    excerpt:
      "El hijo de Karagabí ofrece cambiar el cuerpo de la gente subterránea, pero el procedimiento que presenta como ayuda la mata.",
    seoTitle: "El hijo de Karagabí y los aramúko",
    seoDescription:
      "Conoce el relato Chamí del hijo de Karagabí, la gente aramúko que vive bajo tierra y una transformación corporal mortal.",
    focusKeywords: [
      "hijo de Karagabí",
      "gente aramúko",
      "mundo subterráneo Chamí",
      "mitos de Río Frío",
      "relatos Emberá Chamí",
    ],
    tags: ["Karagabí", "sabiduría", "consecuencias", "transformación"],
    researchNotes: `FUENTE PRIMARIA: Reichel-Dolmatoff 1953, relato 13.
FRONTERA: no identificar al hijo de Karagabí con Jinu Potó.
LECTURA: la crítica a la ayuda impuesta es editorial y se presenta como tal.
${commonResearch}`,
  }),
  defineChamiMyth({
    slug: "el-hijo-de-karagabi-encerrado-en-el-arbol",
    title: "El hijo de Karagabí encerrado en el árbol",
    mito: `Karagabí dio una orden a un hombre: debía abrir un árbol para que su hijo entrara en el tronco. La versión no explica por qué quería encerrarlo, qué clase de árbol era ni cuál era la edad del hijo.

El hombre obedeció. Cavó la madera y preparó el espacio como un ataúd. Karagabí indicó que el cuerpo quedara cubierto, pero que un dedo permaneciera afuera. Esa pequeña parte visible mantuvo un vínculo entre quien estaba dentro y el mundo exterior.

Cuando terminó el trabajo, Karagabí transformó al hombre que había fabricado el ataúd en pájaro carpintero. La narración no dice que la metamorfosis fuera premio o castigo. La relación entre su labor sobre la madera y el ave que golpea los troncos queda registrada sin una explicación adicional.

El hijo de Karagabí no murió. Permaneció vivo dentro del árbol. Cada vez que mueve el dedo que quedó afuera, la tierra tiembla. Así concluye la transcripción.

El relato es mínimo, pero reúne cuatro movimientos: una orden, la apertura del tronco, la transformación del artesano y la persistencia del hijo dentro de la madera. El temblor no procede de una lucha entre dioses ni del traslado de mundos entre manos; nace del movimiento de un cuerpo confinado.

La fuente llama “ataúd” al espacio tallado. Esa palabra pertenece al castellano de la transcripción y no permite reconstruir por sí sola una ceremonia funeraria Chamí. Del mismo modo, el pájaro carpintero no recibe nombre en emberá bedea y el dedo no se identifica con una montaña o un lugar cartografiable.

Esta edición conserva la brevedad documental mediante una narración comentada: distingue las acciones transmitidas de las preguntas que quedaron abiertas. No añade una madre, una desobediencia del hijo ni una promesa de liberación. Tampoco presenta los terremotos como castigo.

El árbol sostiene simultáneamente encierro y vida. Quien lo abrió continúa vinculado a la madera bajo otra forma, y quien quedó dentro mantiene contacto por un solo dedo. En ese contacto reducido, un movimiento íntimo adquiere escala territorial y hace temblar el mundo humano.`,
    historia: composeRioFrioHistory({
      number: 14,
      sourceFocus:
        "Es el cierre del artículo de 1953 y ocupa pocas líneas. Reichel registra árbol, ataúd, dedo, pájaro carpintero y temblor sin ofrecer nombres propios ni comentario comparativo.",
      chavesRelation:
        "Chaves no publica este episodio entre las narraciones de Nicolás Henao. Su relato Katío de Awena atribuye los temblores a una mujer hundida bajo tierra, una explicación diferente.",
      editorialDecision:
        "La revisión elimina una historia familiar inventada y convierte los silencios de la fuente en límites explícitos, no en espacios para completar libremente.",
    }),
    versiones: composeRioFrioVersions({
      primaryVariant:
        "El hijo queda vivo en el árbol y solo su dedo visible produce los temblores; el artesano se vuelve pájaro carpintero.",
      comparativeVariant:
        "Awena, atribuida por Chaves a Rafael Bailarín, causa movimientos de tierra desde el mundo subterráneo, pero no comparte árbol, dedo ni protagonista.",
      boundary:
        "La página no fusiona ambas explicaciones sísmicas ni reclasifica la versión Katío como Chamí.",
    }),
    leccion:
      "Un vínculo mínimo entre cuerpo y territorio puede mover aquello que parecía inmóvil.",
    similitudes: composeSimilarities({
      internalComparison:
        "El hijo encerrado se relaciona con La creación de la gente por cuerpos dentro de vegetales y con El universo por otra explicación Chamí de los temblores.",
      broaderComparison:
        "Seres confinados cuyo movimiento sacude la tierra aparecen en otras tradiciones, pero el dedo exterior y el artesano vuelto pájaro carpintero distinguen esta narración.",
    }),
    excerpt:
      "Karagabí encierra vivo a su hijo en un árbol, transforma al artesano en pájaro carpintero y deja un dedo que causa temblores.",
    seoTitle: "El hijo de Karagabí en el árbol",
    seoDescription:
      "Lee el breve relato Chamí del hijo de Karagabí encerrado en un árbol, el pájaro carpintero y el dedo que hace temblar la tierra.",
    focusKeywords: [
      "hijo de Karagabí en el árbol",
      "mito Chamí de los temblores",
      "pájaro carpintero Chamí",
      "relatos de Río Frío",
      "mitología Emberá Chamí",
    ],
    tags: ["Karagabí", "transformación", "naturaleza", "consecuencias"],
    researchNotes: `FUENTE PRIMARIA: Reichel-Dolmatoff 1953, relato 14.
LÍMITE: la fuente no explica motivo del encierro, tipo de árbol ni identidad del hijo.
FRONTERA: Awena es una narración Katío distinta en Chaves 1945.
${commonResearch}`,
  }),
  defineChamiMyth({
    slug: "jinopotabar",
    title: "Jinu Potó, el Hijo de la Pantorrilla",
    sourceKeys: [
      "reichel1953",
      "ferrari2023",
      "chaves1945",
      "vascoChami",
      "cardona2026",
      "onicChami",
      "procuraduriaChami",
    ],
    mito: `Jinu Potó no designa una sola historia idéntica en todos los territorios Emberá. Es el nombre de un ciclo de relatos cuyo protagonista nace de una pantorrilla o de una pierna, crece con una fuerza extraordinaria y emprende la búsqueda de quien habría causado la muerte de su madre. En algunas versiones su nombre cambia; en la transcripción Chamí de Río Frío publicada en 1953, el joven ni siquiera recibe un nombre propio.

Esa versión comienza cuando una nutria abraza la pierna de un pescador. La pantorrilla se hincha, nace un niño y el hombre muere. El joven pregunta quién mató a su madre y la comunidad lo envía sucesivamente contra una gran ballena de río, otro ser acuático, una reunión de animales y la luna. En su recorrido entra en el cuerpo de un animal inmenso, preserva ejemplares para que las especies no desaparezcan, cae al mundo subterráneo y regresa guiado por animales. Finalmente lo mata una avispa.

Otras narraciones Dóbida y Katío estudiadas por Simone Ferrari organizan de manera diferente el nacimiento, el parentesco, los enemigos y el desenlace. Algunas valoran al protagonista como defensor; otras subrayan la violencia que ejerce. El nombre Jinopotabar usado antes en esta página parece una castellanización o una forma regional cercana a Jinu Potó, pero no aparece en la fuente de Río Frío. Por eso el título conserva la URL conocida y adopta la grafía comparativa más documentada.

Esta página funciona como expediente del ciclo. No reemplaza la narración completa de Río Frío, que permanece en “El hijo de la nutria”, ni copia episodios de versiones Dóbida para completar sus silencios. Su propósito es mostrar qué elementos viajan entre relatos y cuáles cambian cuando una comunidad vuelve a contar la historia.

El núcleo persistente no es una biografía fija. Es la pregunta por el origen, la relación difícil con la comunidad, el tránsito entre mundos y una potencia que puede salvar y destruir. Cada versión toma posiciones propias frente a esa fuerza. Leerlas en paralelo permite reconocer una memoria compartida sin borrar la voz localizada de cada narrador.`,
    historia: composeRegionalHistory({
      sourceFocus:
        "La base Chamí es el segundo relato de Reichel-Dolmatoff, registrado en Río Frío en 1945. El protagonista nace de la pantorrilla tras el encuentro con una nutria, pero la transcripción no lo llama Jinu Potó ni Jinopotabar.",
      evidenceChain:
        "Simone Ferrari reúne versiones Dóbida, Katío y Chamí y muestra que el ciclo circula con nombres y evaluaciones distintas. Milcíades Chaves aporta el relato Chamí de Arrumia, que comparte el paso por un mundo inferior, aunque no constituye otra transcripción completa del Hijo de la Pantorrilla. Vasco y Cardona ayudan a situar el movimiento entre mundos y la transformación sin convertir las coincidencias en una versión sintética.",
      editorialDecision:
        "La ficha se reconstruye como dossier comparativo: conserva el slug por continuidad editorial, corrige el título, identifica la fuente primaria Chamí y remite la narración extensa a El hijo de la nutria. No se presenta como una segunda historia autónoma.",
    }),
    versiones: composeRegionalVersions({
      versionDetail:
        "En Río Frío, un pescador varón da a luz y muere; el joven busca a quien habría matado a su madre, enfrenta seres acuáticos y animales, intenta alcanzar la luna, cae al mundo subterráneo y muere por una avispa. Ferrari documenta otras versiones en las que cambian el sexo del progenitor, los auxiliares, los culpables, el juicio moral y la forma de morir.",
      boundaryDetail:
        "El nombre Jinu Potó es útil para reconocer el ciclo, pero no se inserta retroactivamente en las palabras anónimas de Río Frío. Jinopotabar se conserva solo como huella del antiguo título y de la URL.",
      editorialRelation:
        "El hijo de la nutria contiene la narración primaria completa; esta página ofrece el mapa de variantes. Arrumia aporta un paralelo Chamí del viaje inferior, no una continuación del mismo personaje.",
    }),
    leccion:
      "Una memoria compartida conserva su fuerza cuando también preserva las diferencias entre versiones.",
    similitudes: composeSimilarities({
      internalComparison:
        "Jinu Potó se vincula de manera directa con El hijo de la nutria y, por el viaje inferior, con El hijo de Karagabí y la gente subterránea. También dialoga con Las transformaciones, porque su identidad se define mediante cambios corporales y desplazamientos entre mundos.",
      broaderComparison:
        "Los héroes de nacimiento extraordinario y búsqueda de parentesco aparecen en muchas tradiciones. En este ciclo, sin embargo, la pantorrilla, los seres de río, el mundo de quienes viven del vapor y las relaciones con comunidades Emberá establecen una configuración propia y variable.",
    }),
    excerpt:
      "Un expediente del ciclo Emberá de Jinu Potó: nacimiento de la pantorrilla, búsqueda de la madre, viaje entre mundos y versiones regionales.",
    seoTitle: "Jinu Potó: ciclo del Hijo de la Pantorrilla",
    seoDescription:
      "Conoce el ciclo Emberá de Jinu Potó y su versión Chamí de Río Frío, sin confundir las variantes Dóbida, Katío y Chamí.",
    focusKeywords: [
      "Jinu Potó",
      "Hijo de la Pantorrilla",
      "Jinopotabar",
      "ciclo Emberá Chamí",
      "mitos de Río Frío",
    ],
    tags: ["Jinopotabar", "búsqueda", "transformación", "viajero"],
    researchNotes: `TIPO DE PÁGINA: expediente comparativo de un ciclo, no transcripción oral autónoma.
FUENTE CHAMÍ: Reichel-Dolmatoff 1953, relato 2, publicado también como El hijo de la nutria.
FRONTERA: las narraciones centrales estudiadas por Ferrari son Dóbida; se citan para comparar, no para rellenar la versión Chamí.
IMÁGENES: se conserva el par paper cut existente porque representa de forma compatible el ciclo, no un episodio refutado.`,
  }),
  defineChamiMyth({
    slug: "el-origen-del-agua",
    title: "La Jepá de Jeguada y el origen del agua",
    sourceKeys: [
      "fernandezJepa",
      "oralitecaJepa2025",
      "vascoChami",
      "cardona2026",
      "onicChami",
      "procuraduriaChami",
      "minInteriorPlan",
    ],
    mito: `En una versión Chamí atribuida a Jaime Wasorna, un jaibaná y cacique de Jeguada salió a buscar leña durante un aguacero. Encontró unos seres pequeños, parecidos a gusanos hermosos y pintados, y los llevó a su casa dentro de una totuma con agua. Al día siguiente el recipiente estaba lleno. Los trasladó a cantaritos mayores y, cuando crecieron de nuevo, abrió un hueco cerca de La Batea para guardarlos.

Los animales continuaron creciendo hasta convertirse en jepás. No eran peces corrientes ni serpientes comunes. Pertenecían al agua y podían desplazarse por ella con una fuerza peligrosa. La narración recuerda que una de las jepás devoró a los hijos del cacique. Él intentó enfrentarla desde una balsa y herirla con un machete, pero no pudo vencerla solo.

Pidió ayuda a otros jaibanás. Reunidos, cantaron a los jais y condujeron a las jepás fuera de Jeguada. Los seres siguieron el curso de Jebanía y Geté, pasaron hacia el río Agüita y llegaron al San Juan. En la confluencia con el Tatamá, los jaibanás pusieron como prueba una gran cangreja que funcionaba como tijera.

Las jepás que no habían cometido la muerte pudieron pasar. La culpable quedó atrapada y fue cortada en tres partes. El castigo no devolvió la vida a los niños. La versión asocia además los nombres de Jeguada, Jebanía y Geté con los hijos perdidos, una memoria territorial que la publicación presenta como explicación legendaria.

En 2025, la Oraliteca de Risaralda publicó otra versión local narrada y traducida por el docente Jhon Jairo Siágama, de Jeguadas de Mistrató. Su descripción vuelve a situar a Jepá en Alto Jebanía y Jeguadas y advierte que no es simplemente pez ni serpiente, sino un ser mítico de esos ríos.

Esta página conserva el antiguo título sobre el agua, pero corrige su contenido. La Jepá no sustituye a Héntserá ni al árbol Jenené, que poseen una página propia. Aquí el agua aparece como territorio vivo: puede crecer dentro de recipientes, unir lugares, alojar seres poderosos y exigir mediación colectiva cuando la relación se rompe.`,
    historia: composeRegionalHistory({
      sourceFocus:
        "Oscar Fernández reproduce la narración de Jaime Wasorna, Chamí de Santa Cecilia, publicada por Víctor Zuluaga en 1991. Esa cadena permite identificar narrador y procedencia, aunque no conserva el audio original.",
      evidenceChain:
        "La versión sigue lugares nombrados de Risaralda y Chocó: Jeguada, Jebanía, Geté, Agüita, San Juan y Tatamá. La Oraliteca de Risaralda aporta una voz comunitaria contemporánea de Jeguadas de Mistrató. Vasco contextualiza la jepá y el agua dentro del pensamiento Chamí; las caracterizaciones institucionales se limitan a territorio y organización.",
      editorialDecision:
        "La ficha anterior duplicaba el episodio de Héntserá y Jenené. La revisión mantiene la URL, cambia el título y reconstruye únicamente la Jepá de Jeguada, con su cadena de transmisión y sus topónimos declarados.",
    }),
    versiones: composeRegionalVersions({
      versionDetail:
        "La versión de Jaime Wasorna comienza con pequeños seres pintados recogidos durante la lluvia, describe su crecimiento en recipientes y concluye con una conducción fluvial y el juicio de una gran cangreja. La versión de Jhon Jairo Siágama vuelve a localizar a Jepá en los ríos de Mistrató.",
      boundaryDetail:
        "La jepá no se representa como una anaconda zoológica, una hidra europea o un dragón. Tampoco se confunde con Jenené, el árbol que retiene el agua en el relato de Héntserá.",
      editorialRelation:
        "Héntserá y el agua conserva el relato primario de Río Frío. Esta página documenta otra relación Chamí con el agua, localizada en Jeguadas y conectada con un recorrido fluvial hacia el San Juan.",
    }),
    leccion:
      "El agua enlaza memoria y territorio, y su cuidado exige responsabilidad colectiva.",
    similitudes: composeSimilarities({
      internalComparison:
        "la Jepá de Jeguada dialoga con Héntserá y el agua porque ambos relatos relacionan seres poderosos, mediación y liberación del agua. La culebra de siete cabezas también transforma un paisaje acuático, pero pertenece a La Montaña, Caldas, y conserva otra secuencia.",
      broaderComparison:
        "Seres acuáticos juzgados o contenidos aparecen en distintas tradiciones. Aquí la singularidad está en los recipientes que se llenan, el recorrido por ríos con nombre, la acción conjunta de los jaibanás y la cangreja situada en una confluencia.",
    }),
    excerpt:
      "En Jeguada, pequeños seres del agua crecen hasta volverse jepás; los jaibanás deben conducirlos por los ríos y juzgar a la culpable.",
    seoTitle: "La Jepá de Jeguada y el origen del agua",
    seoDescription:
      "Lee la versión Chamí de Jepá narrada por Jaime Wasorna y una voz contemporánea de Jeguadas de Mistrató.",
    focusKeywords: [
      "Jepá de Jeguada",
      "mito Chamí del agua",
      "Jaime Wasorna",
      "Jeguadas de Mistrató",
      "Oraliteca de Risaralda",
    ],
    tags: ["Yepá", "agua", "chamán", "ríos"],
    imagePromptHorizontal:
      "Ilustración full paper cut y paper quilling, composición horizontal 16:9, sin fotografía, sin maqueta física y sin diorama: varios jaibanás Emberá Chamí cantan junto a un río montañoso y conducen jepás míticas aguas abajo hacia una enorme cangreja de papel situada como tijera en una confluencia; las jepás son seres acuáticos fantásticos, alargados y pintados, no peces comunes, no serpientes zoológicas, no dragones ni hidras; capas de papel recortado, filigrana de papel, colores selváticos y fluviales, escena respetuosa, sin texto.",
    imagePromptVertical:
      "Ilustración full paper cut y paper quilling, composición vertical 4:5, sin fotografía, sin maqueta física y sin diorama: bajo una lluvia de montaña, un jaibaná Emberá Chamí sostiene una totuma donde pequeños seres acuáticos pintados hacen crecer el agua, y al fondo esos seres se transforman en jepás míticas dentro de un estanque junto a La Batea; no peces comunes, no serpientes zoológicas, no dragón, capas planas de papel cortado y filigrana, sin texto.",
    researchNotes: `TIPO DE PÁGINA: reconstrucción localizada de la Jepá de Jeguada.
CADENA: Jaime Wasorna > Víctor Zuluaga 1991 > Oscar Fernández; contraste contemporáneo con Jhon Jairo Siágama y Oraliteca de Risaralda 2025.
DECISIÓN: retirar la duplicación con Héntserá y Jenené.
IMÁGENES: reemplazo obligatorio; el par anterior representaba el árbol Jenené, no la Jepá.`,
  }),
  defineChamiMyth({
    slug: "el-universo",
    title: "Los mundos del universo Chamí",
    sourceKeys: [
      "kienykeUniverse2015",
      "dabraccioChami",
      "vascoChami",
      "cardona2026",
      "onicChami",
      "procuraduriaChami",
      "minInteriorPlan",
    ],
    mito: `Antes de que hubiera tierra visible, Dachicore existía por sí mismo. Una versión llevada a escena por tres sabedoras Emberá Chamí de Pueblo Rico y Mistrató cuenta que pensó los mundos y con ese pensamiento los creó. Eran ocho espacios. Luego escupió en la palma de su mano, formó una figura y la arrojó hacia el mundo que había preparado. De ese gesto nació Karabi.

La nota que conserva esa puesta en escena no publica la obra completa. Otros estudios Chamí hablan de ocho o nueve mundos y organizan el universo en niveles relacionados: lugares de arriba, el ámbito en que viven las personas y espacios inferiores o acuáticos. Las cifras y los nombres no coinciden siempre. Esa variación impide dibujar un único mapa como si todas las comunidades compartieran una cosmografía idéntica y cerrada.

Karagabí o Karabi interviene en muchos relatos como creador, transformador o mediador, pero tampoco tiene una biografía única. En el corpus de Río Frío forma personas dentro de una palma, entrega maíz, se relaciona con Héntserá, pierde a su mujer y envía a uno de sus hijos a otros mundos. En la versión de las sabedoras, su aparición ocurre después del pensamiento creador de Dachicore.

Los mundos no son pisos inmóviles. Animales, jaibanás, espíritus y protagonistas narrativos atraviesan sus fronteras. El Hijo de la Pantorrilla cae al espacio subterráneo; otro hijo de Karagabí sostiene por un tiempo un mundo pequeño en sus manos; seres del agua siguen cursos que conectan territorios. Las relaciones entre niveles explican responsabilidades, peligros y posibilidades de intercambio.

Esta página es una síntesis comparativa, no la transcripción de un mito único. Su comienzo procede de una obra narrada en emberá bedea por Alicia Guasorna, Noralba Siagama y Delfina Wazorna; el resto reúne convergencias y diferencias identificadas por estudios posteriores. Mantener esa estructura visible evita atribuir a las sabedoras frases que la nota periodística no registró.

El universo Chamí aparece así como una red de espacios relacionados. Pensar su origen no consiste solo en contar cuántos mundos existen, sino en observar quién puede atravesarlos, qué debe respetar en cada uno y cómo las acciones humanas repercuten más allá del lugar inmediatamente visible.`,
    historia: composeRegionalHistory({
      sourceFocus:
        "KienyKe documentó en 2015 una obra de teatro en emberá bedea preparada por Alicia Guasorna, Noralba Siagama y Delfina Wazorna, sabedoras de Pueblo Rico y Mistrató. La nota conserva el inicio con Dachicore, ocho mundos y el nacimiento de Karabi.",
      evidenceChain:
        "D'Abbraccio, Vasco y las caracterizaciones institucionales permiten comparar estructuras de ocho o nueve mundos y relaciones entre arriba, tierra y espacios inferiores. Cardona advierte que las narraciones cambian al pasar por registros escritos, traducciones y marcos coloniales.",
      editorialDecision:
        "La página deja de presentar una cosmología total sin procedencia. Separa el fragmento narrativo acreditado de la síntesis editorial y reconoce que número, nombres y organización de los mundos varían.",
    }),
    versiones: composeRegionalVersions({
      versionDetail:
        "La puesta en escena de Pueblo Rico y Mistrató habla de ocho mundos creados por el pensamiento de Dachicore y de Karabi formado con saliva. Estudios basados en otros registros Chamí describen ocho o nueve niveles y distribuyen de forma distinta seres y funciones.",
      boundaryDetail:
        "Las cifras no se corrigen unas a otras. Tampoco se reemplaza Dachicore por Karagabí ni se afirma que ambos nombres designen necesariamente una sola entidad.",
      editorialRelation:
        "Los relatos de Río Frío muestran movimientos concretos entre mundos, pero esta página los usa como ejemplos internos y no los une para fabricar una narración de creación ausente.",
    }),
    leccion:
      "Cada mundo se sostiene mediante relaciones que desbordan lo inmediatamente visible.",
    similitudes: composeSimilarities({
      internalComparison:
        "El universo se conecta con La creación Emberá, El hijo de Karagabí y la gente subterránea y Jinu Potó. En esas páginas, los niveles cósmicos se vuelven espacios narrados mediante cuerpos, viajes y consecuencias.",
      broaderComparison:
        "Los universos estratificados aparecen en numerosos pueblos. El pensamiento creador de Dachicore, la formación de Karabi en la mano y la variación Chamí entre ocho y nueve mundos requieren conservar aquí sus fuentes y nombres específicos.",
    }),
    excerpt:
      "Tres sabedoras Chamí narran a Dachicore pensando ocho mundos y formando a Karabi; otras fuentes conservan cosmologías variables.",
    seoTitle: "Los mundos del universo Chamí",
    seoDescription:
      "Conoce la versión de Dachicore y los ocho mundos narrada por sabedoras Chamí, junto con variantes de ocho y nueve niveles.",
    focusKeywords: [
      "universo Chamí",
      "Dachicore",
      "ocho mundos Emberá",
      "Karabi",
      "cosmología Emberá Chamí",
    ],
    tags: ["Karagabí", "universo", "cosmogonía", "creación"],
    researchNotes: `TIPO DE PÁGINA: síntesis comparativa con fragmento narrativo acreditado.
VOZ COMUNITARIA: Alicia Guasorna, Noralba Siagama y Delfina Wazorna.
LÍMITE: la nota de 2015 no publica la obra completa; ocho y nueve mundos se conservan como variantes.
${commonResearch}`,
  }),
  defineChamiMyth({
    slug: "el-origen-de-los-animales",
    title: "El origen de los animales en relatos Chamí",
    sourceKeys: [
      "dabraccioChami",
      "vascoChami",
      "cardona2026",
      "reichel1953",
      "onicChami",
      "procuraduriaChami",
      "minInteriorPlan",
    ],
    mito: `No existe en las fuentes revisadas una sola narración Chamí titulada “El origen de los animales” que reúna en orden el nacimiento de todas las especies. La página anterior convertía fragmentos diversos en una fábula continua. Esta revisión conserva la URL, pero la presenta como un ciclo editorial construido a partir de relatos en los que animales, personas y espíritus comparten un mundo transformable.

Una línea documentada por estudios basados en Víctor Zuluaga relaciona a Karagabí con la aparición y distribución de animales. Algunos se vinculan con madres, dueños o espacios propios y forman parte de relaciones de intercambio. No son únicamente recursos creados para servir a las personas. Cazar, sembrar, criar o atravesar el monte exige reconocer límites y devolver algo a la red que sostiene la vida.

El corpus de Río Frío muestra esa cercanía mediante episodios concretos. El guatín, el jaguar, el oso y el puma hablan, planean venganzas y hacen la paz. Hímo guarda la candela bajo su cuerpo de iguana. Una mujer puede transformarse en animal y un artesano en pájaro carpintero. El Hijo de la Pantorrilla encuentra una reunión que concentra numerosas especies; mata algunas, pero deja ejemplares vivos para que el mundo no quede vacío.

Esos episodios no forman una cronología única. Tampoco permiten concluir que toda transformación sea castigo. Ana Lucía Cardona muestra que, en la oraliteratura Chamí, cambiar de cuerpo puede expresar relaciones entre seres, memoria y territorio; las lecturas moralizantes o patriarcales pertenecen a capas históricas que deben examinarse, no repetirse como esencia.

La categoría “animal” tampoco separa de manera absoluta naturaleza y sociedad. Los relatos presentan parentescos, negociaciones, peligros y reciprocidades. Un animal puede ser alimento, adversario, aliado, guía o forma asumida por otro ser. Su significado depende del episodio y de la relación que establece.

Por eso esta página ofrece un itinerario, no un mito inventado. Reúne las preguntas que atraviesan el corpus —cómo aparecen las especies, quién las cuida, qué ocurre cuando una desaparece y cómo se relacionan con las personas— y remite cada escena a su narración localizada.`,
    historia: composeRegionalHistory({
      sourceFocus:
        "D'Abbraccio sintetiza materiales Chamí publicados por Víctor Zuluaga sobre creación, animales, reciprocidad y control social. Vasco aporta relaciones entre madres de animales, agua y territorio; Reichel ofrece catorce relatos concretos de Río Frío.",
      evidenceChain:
        "Cardona permite distinguir la transformación relacional de la moraleja añadida. ONIC, Procuraduría y el plan de salvaguarda sitúan lengua, territorio y riesgos contemporáneos, pero no se usan como prueba de una escena de creación.",
      editorialDecision:
        "La ficha se declara ciclo temático. Retira un relato continuo sin respaldo y enlaza episodios verificables sin afirmar que fueron narrados juntos ni en ese orden.",
    }),
    versiones: composeRegionalVersions({
      versionDetail:
        "Las fuentes académicas describen relaciones de Karagabí con animales y dueños, mientras los relatos de Río Frío conservan encuentros particulares: animales que deliberan, cuerpos que cambian y especies preservadas por el Hijo de la Pantorrilla.",
      boundaryDetail:
        "No se incorporan episodios Dóbida o Katío para completar un supuesto origen común. Tampoco se traduce toda metamorfosis como castigo moral.",
      editorialRelation:
        "Las transformaciones ofrece el marco temático complementario; El guatín astuto, Hímo y la candela y El hijo de la nutria contienen las secuencias narrativas primarias.",
    }),
    leccion:
      "La diversidad permanece cuando cada relación reconoce límites, cuidado y reciprocidad.",
    similitudes: composeSimilarities({
      internalComparison:
        "El origen de los animales se recorre junto a Las transformaciones, El guatín astuto, Hímo la iguana y la candela y El hijo de la nutria. Cada página conserva un episodio que esta síntesis solo pone en relación.",
      broaderComparison:
        "Muchos relatos de origen explican especies mediante actos creadores o metamorfosis. El corpus Chamí revisado resalta además agencia animal, dueños, viajes entre mundos y obligaciones recíprocas, sin formar un catálogo cerrado.",
    }),
    excerpt:
      "Un recorrido documentado por relatos Chamí sobre animales que hablan, cambian de forma, guían, enfrentan y sostienen relaciones con las personas.",
    seoTitle: "El origen de los animales en relatos Chamí",
    seoDescription:
      "Explora el ciclo Chamí de animales y transformaciones sin convertir relatos distintos en una narración oral única.",
    focusKeywords: [
      "origen de los animales Chamí",
      "animales en relatos Emberá",
      "Karagabí y los animales",
      "transformaciones Chamí",
      "reciprocidad Emberá",
    ],
    tags: ["animales", "transformación", "naturaleza", "equilibrio"],
    researchNotes: `TIPO DE PÁGINA: ciclo editorial, no transcripción oral única.
DECISIÓN: retirar la fábula continua anterior y remitir a episodios primarios localizados.
LÍMITE: no fusionar versiones Dóbida o Katío.
${commonResearch}`,
  }),
  defineChamiMyth({
    slug: "las-transformaciones",
    title: "Las transformaciones en los relatos Chamí",
    sourceKeys: [
      "cardona2026",
      "reichel1953",
      "chaves1945",
      "vascoChami",
      "dabraccioChami",
      "onicChami",
      "procuraduriaChami",
    ],
    mito: `Las transformaciones aparecen una y otra vez en los relatos Chamí, pero las fuentes revisadas no contienen una sola historia con ese título. Esta página es un mapa editorial de escenas dispersas. Su objetivo no es unirlas en una fábula nueva, sino observar qué relaciones se vuelven visibles cuando un cuerpo cambia, un ser atraviesa mundos o una acción modifica el territorio.

En Río Frío, Karagabí transforma al hombre que abre un árbol en pájaro carpintero. Hímo conserva la candela bajo forma de iguana. Un hombre pide convertirse en animal para huir de su suegra, pero la transcripción no precisa qué especie llega a ser. La mujer de Karagabí cambia después de comer hormigas. En otro relato, la mujer cubierta de embijá muere y las hormigas ocupan el lugar donde escondía la comida.

Los cambios no admiten una explicación moral única. Algunos siguen una orden; otros aparecen tras una ruptura, un alimento, un engaño o un deseo de escapar. Incluso cuando el relato vincula transformación y consecuencia, no siempre dice que se trate de un castigo. Llamar “pecado” a cada episodio impondría una lectura ajena y ocultaría cómo personas, animales, plantas y espíritus pueden compartir capacidades.

Ana Lucía Cardona propone entender la oraliteratura Chamí como un tejido de memoria y transformación. Su lectura también muestra que las versiones escritas cargan mediaciones: traducción al castellano, selección del investigador, cristianización y marcos patriarcales. Reconocerlas no invalida los relatos; permite distinguir la voz narrada de la explicación agregada.

Las metamorfosis se conectan además con movimientos de escala. Un dedo dentro de un árbol hace temblar la tierra; cuerpos nacen en una palma; un ser acuático crece desde una totuma hasta recorrer ríos; gotas se convierten en espíritus territoriales en una leyenda cristianizada de Lomaprieta. La transformación puede cambiar un cuerpo y, al mismo tiempo, reorganizar el mundo que lo rodea.

Esta página invita a recorrer esas historias una por una. No decide que todos los pájaros fueron personas, que todos los animales son castigos ni que existe una doctrina Chamí única sobre la metamorfosis. Conserva diferencias, procedencias y silencios para que el tema común no borre los relatos.`,
    historia: composeRegionalHistory({
      sourceFocus:
        "Cardona estudia transformaciones en oraliteratura y oralitegrafía Chamí y ofrece el marco contemporáneo principal. Reichel-Dolmatoff aporta escenas primarias de Río Frío; Chaves conserva otras narraciones Chamí de Nicolás Henao.",
      evidenceChain:
        "Vasco y D'Abbraccio relacionan cuerpos, animales, agua, mundo y reciprocidad desde corpus anteriores. ONIC y Procuraduría ayudan a evitar la idea de una comunidad homogénea, pero no autorizan a generalizar cada escena.",
      editorialDecision:
        "La página se reconstruye como índice temático declarado. Elimina la falsa apariencia de un mito oral unitario y enlaza relatos con fuente propia.",
    }),
    versiones: composeRegionalVersions({
      versionDetail:
        "Río Frío conserva metamorfosis en pájaro carpintero, iguana, animal no identificado y cambios asociados con hormigas. Otros registros Chamí incorporan transformaciones distintas y las interpretan desde relaciones locales.",
      boundaryDetail:
        "La edición no atribuye un significado universal de premio o castigo. Cuando la transcripción no nombra la especie, el motivo o la voz Emberá original, mantiene la incertidumbre.",
      editorialRelation:
        "El origen de los animales aborda relaciones interespecie; esta página se concentra en el cambio de cuerpo, estado o escala y remite cada caso a su relato completo.",
    }),
    leccion:
      "Cambiar de forma revela relaciones que una mirada rígida deja fuera.",
    similitudes: composeSimilarities({
      internalComparison:
        "Las transformaciones enlaza El hijo de Karagabí encerrado en el árbol, Hímo la iguana y la candela, La mujer de Karagabí, La mujer hormiga y el ciclo del Hijo de la Pantorrilla. Cada vínculo conserva un mecanismo distinto.",
      broaderComparison:
        "La metamorfosis es un motivo extendido en narraciones del mundo, pero sus sentidos dependen de quién cambia, ante quién y en qué territorio. Las mediaciones coloniales y cristianas del archivo Chamí exigen especial cautela comparativa.",
    }),
    excerpt:
      "Un mapa de metamorfosis Chamí documentadas: cuerpos que cambian, seres que atraviesan mundos y acciones que transforman el territorio.",
    seoTitle: "Las transformaciones en los relatos Chamí",
    seoDescription:
      "Recorre metamorfosis documentadas en relatos Chamí y conoce por qué no deben reducirse a una sola moraleja.",
    focusKeywords: [
      "transformaciones Chamí",
      "metamorfosis Emberá",
      "oraliteratura Chamí",
      "animales y personas Emberá",
      "relatos de Río Frío",
    ],
    tags: ["transformación", "metamorfosis", "memoria", "animales"],
    researchNotes: `TIPO DE PÁGINA: índice temático, no narración oral única.
MARCO: Cardona 2026; casos primarios en Reichel-Dolmatoff 1953.
LÍMITE: no traducir automáticamente transformación como castigo.
${commonResearch}`,
  }),
  defineChamiMyth({
    slug: "la-culebra-de-las-siete-cabezas",
    title: "La culebra de siete cabezas de El Salado",
    sourceKeys: [
      "acunaSevenHeads2015",
      "improntaLomaprieta2009",
      "onicChami",
      "procuraduriaChami",
      "minInteriorPlan",
      "cardona2026",
    ],
    mito: `En el territorio Emberá Chamí de La Montaña, en Caldas, existía en El Salado una laguna grande. Allí vivía una culebra enorme de siete cabezas. La tradición publicada no la describe como guardiana, diosa ni enemiga enviada para castigar a la comunidad. Su presencia está ligada al lugar y al cambio violento del paisaje.

Cuando la culebra salió, rompió la tierra. Abrió un camino desde El Salado y arrastró consigo el agua hasta encontrar el río Supía. Desde allí siguió hacia el Cauca. La grieta dejada por su paso transformó la forma del terreno y explicó una huella que la comunidad reconocía en su propio territorio.

La narración recuerda que después se encontraron huesos de la culebra. Ese detalle conecta la memoria del ser con evidencias visibles en el paisaje, aunque la fuente no ofrece una identificación zoológica ni una fecha. Tampoco precisa quién vio primero los restos o en qué colección se conservaron.

El artículo que reproduce la leyenda la relaciona con la erosión en El Salado. Esa lectura ambiental pertenece a los investigadores y se apoya en una versión publicada previamente por Julián Bueno Rodríguez en 1988. El relato y la interpretación dialogan, pero no son la misma voz: la culebra explica una transformación territorial; el estudio utiliza esa memoria para pensar el cuidado de la tierra.

La versión anterior de esta página añadía un ritual, siete guardianes, una misión de protección y una batalla con estructura de hidra europea. Ninguno de esos episodios aparece en la fuente localizada. Esta revisión los retira y conserva la secuencia comprobable: laguna, salida de la culebra, tierra quebrada, traslado del agua, conexión con los ríos y huesos recordados.

Las siete cabezas no necesitan convertirse en siete personajes. Intensifican el carácter extraordinario de un ser cuyo movimiento reorganiza aguas y suelos. La historia queda así anclada en El Salado y en los ríos Supía y Cauca, no en un paisaje genérico. Es una memoria de cómo un lugar llegó a tener la forma que la comunidad observa.`,
    historia: composeRegionalHistory({
      sourceFocus:
        "Acuña Navarro y colaboradores publicaron en 2015 la leyenda conservada por Emberá Chamí de La Montaña, Caldas. La tomaron de Julián Bueno Rodríguez, quien la había registrado en 1988.",
      evidenceChain:
        "La secuencia narrativa está localizada en El Salado y conecta la laguna con el Supía y el Cauca. El artículo añade una lectura sobre erosión y cuidado de la tierra. La revista Impronta aporta contexto regional, mientras ONIC y las caracterizaciones institucionales sitúan al pueblo Chamí sin completar la historia.",
      editorialDecision:
        "La revisión elimina guardianes, ceremonia y combate añadidos, conserva el arraigo territorial y distingue el relato reproducido de la interpretación ambiental del artículo.",
    }),
    versiones: composeRegionalVersions({
      versionDetail:
        "La versión disponible describe una culebra de siete cabezas que sale de una laguna, quiebra la tierra y lleva el agua por el Supía hasta el Cauca. También recuerda el hallazgo posterior de huesos.",
      boundaryDetail:
        "No hay evidencia para convertirla en hidra, asignar una función separada a cada cabeza ni narrar una batalla ritual. El artículo tampoco acredita el nombre del narrador original.",
      editorialRelation:
        "La Jepá de Jeguada comparte el motivo de un ser acuático que recorre ríos, pero pertenece a Risaralda y conserva jaibanás, hijos, cangreja y juicio. Son relatos distintos.",
    }),
    leccion:
      "El territorio conserva en sus formas la memoria de cambios y fuerzas antiguas.",
    similitudes: composeSimilarities({
      internalComparison:
        "la culebra de siete cabezas dialoga con La Jepá de Jeguada por el movimiento de un ser acuático a través de ríos y con los guardianes de Lomaprieta por su localización en el occidente de Caldas.",
      broaderComparison:
        "Serpientes de varias cabezas aparecen en relatos de otros continentes, pero usar el nombre hidra trasladaría un marco europeo. Aquí importan la laguna de El Salado, la grieta y el recorrido Supía-Cauca.",
    }),
    excerpt:
      "Una culebra de siete cabezas sale de la laguna de El Salado, quiebra la tierra y lleva sus aguas hasta los ríos Supía y Cauca.",
    seoTitle: "La culebra de siete cabezas de El Salado",
    seoDescription:
      "Lee la leyenda Emberá Chamí de La Montaña sobre la culebra que abrió la tierra desde El Salado hasta el río Cauca.",
    focusKeywords: [
      "culebra de siete cabezas",
      "El Salado Caldas",
      "mitos Emberá Chamí",
      "río Supía",
      "leyendas de La Montaña",
    ],
    tags: ["culebra", "agua", "montaña", "ríos"],
    researchNotes: `PROCEDENCIA: La Montaña, Caldas; versión publicada por Bueno Rodríguez 1988 y reproducida por Acuña et al. 2015.
DECISIÓN: retirar hidra, ritual y siete guardianes añadidos.
LÍMITE: la lectura sobre erosión pertenece a los investigadores.
${commonResearch}`,
  }),
  defineChamiMyth({
    slug: "los-guardianes-vengadores-de-la-naturaleza",
    title: "Los espíritus de las gotas de Lomaprieta",
    sourceKeys: [
      "improntaLomaprieta2009",
      "acunaSevenHeads2015",
      "onicChami",
      "procuraduriaChami",
      "minInteriorPlan",
      "cardona2026",
    ],
    mito: `Una tradición de Lomaprieta, en el occidente de Caldas, cuenta que Dios terminó una tarea y se lavó las manos. Al sacudirlas, las gotas de agua cayeron sobre el mundo. Cada gota se convirtió en un ángel o en un espíritu. Desde entonces esos seres ocuparon distintos ámbitos: la tierra, el agua, el aire, las montañas y la selva.

La versión es breve. No enumera nombres propios, jerarquías ni poderes individuales. Tampoco narra una batalla de guardianes contra quienes destruyen la naturaleza. Su centro está en la multiplicación de presencias: un gesto cotidiano produce seres que habitan todos los espacios del territorio.

El nombre anterior de la página, “Los guardianes vengadores de la naturaleza”, imponía una función que la fuente no menciona. También mezclaba esta tradición con los Yaveranas, seres asociados a otro corpus Emberá y atribuidos en publicaciones a narradores Katío. Esa fusión borraba la procedencia de Lomaprieta. La revisión conserva la URL por continuidad, pero cambia el título y retira la historia inventada.

La figura de Dios y la palabra “ángeles” muestran una mediación cristiana. No es posible saber con la documentación disponible qué elementos existían antes del contacto, cuáles se transformaron durante la evangelización o cómo nombró originalmente los espíritus la persona que contó la historia. La versión publicada por Albeiro Valencia en 2009 procede de un trabajo de Julián Bueno Rodríguez de 1988 y no acredita al narrador.

Reconocer esa capa cristianizada no vuelve falsa la tradición. Las comunidades también reelaboran imágenes llegadas de fuera y las vinculan con su territorio. Lo importante es no presentarla como una cosmología Chamí antigua y sin cambios. Esta página la conserva como relato regional, con su historia de transmisión visible.

Las gotas unen ámbitos que a menudo se estudian por separado. Agua, aire, suelo, montaña y selva quedan poblados por presencias nacidas de un mismo movimiento. No se afirma que castiguen ni que protejan de una manera específica. La narración basta para recordar que el territorio no aparece vacío: está habitado por seres cuya existencia exige atención.`,
    historia: composeRegionalHistory({
      sourceFocus:
        "Albeiro Valencia reprodujo en la revista Impronta de 2009 una tradición de Lomaprieta tomada de Julián Bueno Rodríguez, 1988. La fuente localizada conserva el episodio de las manos, las gotas y los espíritus territoriales.",
      evidenceChain:
        "La cadena es secundaria y no identifica al narrador original. Las caracterizaciones de ONIC, Procuraduría y Ministerio del Interior aportan contexto Chamí. Cardona ayuda a leer la mediación cristiana sin suponer que el archivo escrito conserva una forma precolonial intacta.",
      editorialDecision:
        "La revisión elimina los Yaveranas, la venganza ecológica y una genealogía inexistente. Cambia el título visible, conserva la URL y declara tanto la localización de Lomaprieta como la cristianización de la versión.",
    }),
    versiones: composeRegionalVersions({
      versionDetail:
        "La única versión localizada para esta página narra gotas convertidas en ángeles o espíritus terrestres, acuáticos, aéreos, montañosos y selváticos. No ofrece nombres, enfrentamientos ni desenlace.",
      boundaryDetail:
        "Los Yaveranas quedan fuera porque pertenecen a fuentes con otra atribución regional. La palabra ángeles se conserva como parte del registro cristianizado y no se reemplaza por una categoría Emberá no documentada.",
      editorialRelation:
        "La culebra de siete cabezas comparte el territorio regional de Caldas, pero narra una transformación física de El Salado. Ninguno de los dos relatos completa al otro.",
    }),
    leccion:
      "El territorio deja de parecer vacío cuando reconocemos las presencias que lo habitan.",
    similitudes: composeSimilarities({
      internalComparison:
        "los espíritus de las gotas dialogan con El universo por la distribución de seres entre distintos ámbitos y con la culebra de siete cabezas por su arraigo en el occidente de Caldas.",
      broaderComparison:
        "Relatos cristianizados de ángeles y espíritus aparecen en muchas regiones de América. La particularidad aquí está en el gesto de lavar las manos y en la distribución de las gotas por agua, aire, tierra, montaña y selva de Lomaprieta.",
    }),
    excerpt:
      "En una tradición cristianizada de Lomaprieta, las gotas de las manos de Dios se convierten en espíritus del agua, aire, tierra y monte.",
    seoTitle: "Los espíritus de las gotas de Lomaprieta",
    seoDescription:
      "Conoce la tradición Chamí de Lomaprieta en la que gotas de agua se vuelven espíritus de la tierra, el agua, el aire y la selva.",
    focusKeywords: [
      "espíritus de Lomaprieta",
      "mitos Chamí de Caldas",
      "gotas convertidas en espíritus",
      "tradición de Lomaprieta",
      "cosmología cristianizada Chamí",
    ],
    tags: ["espíritus", "agua", "montaña", "sincretismo"],
    imagePromptHorizontal:
      "Ilustración full paper cut y paper quilling, composición horizontal 16:9, sin fotografía, sin maqueta física y sin diorama: en la parte superior unas manos simbólicas y no realistas dejan caer gotas de papel luminosas; cada gota se transforma en una silueta espiritual abstracta que ocupa tierra, río, aire, montaña y selva de Lomaprieta; capas planas de papel recortado, filigrana, paleta verde, azul y dorada, sin rostros europeos, sin escena de batalla, sin texto.",
    imagePromptVertical:
      "Ilustración full paper cut y paper quilling, composición vertical 4:5, sin fotografía, sin maqueta física y sin diorama: cinco franjas de un territorio montañoso de papel —cielo, monte, selva, tierra y agua— reciben gotas luminosas que se vuelven espíritus abstractos de papel, unidos por un movimiento descendente; referencia cristianizada tratada de forma simbólica, sin ángeles europeos, sin venganza, sin texto.",
    researchNotes: `PROCEDENCIA: Lomaprieta, Caldas; Valencia 2009 reproduce a Bueno Rodríguez 1988.
DECISIÓN: retirar Yaveranas Katío y la narrativa inventada de venganza.
MEDIACIÓN: versión explícitamente cristianizada; narrador original no acreditado.
IMÁGENES: reemplazo obligatorio; el par anterior mostraba Jenené y raíces, una escena ajena.`,
  }),
  defineChamiMyth({
    slug: "el-gusano-gigante",
    title: "Surranabe, el gusano gigante",
    sourceKeys: [
      "chaves1945",
      "reichel1953",
      "redAprendeMetadata",
      "cardona2026",
      "onicChami",
      "procuraduriaChami",
      "minInteriorPlan",
    ],
    mito: `Surranabe era un gusano de tamaño extraordinario. Se movía por el territorio devorando a las personas y a los animales que encontraba. Su hambre no distinguía entre quienes caminaban por el monte, quienes vivían cerca ni los demás seres: la presencia del gusano hacía imposible sostener la vida sin miedo.

La gente no encontraba una manera de detenerlo. El cuerpo enorme de Surranabe parecía resistir los ataques y cada nueva pérdida aumentaba la urgencia. Entonces cuatro mellizos decidieron enfrentarlo. La fuente no conserva sus nombres ni una genealogía detallada; los presenta como un grupo capaz de actuar de manera coordinada.

Los cuatro prepararon una lanza. No la cubrieron con un veneno especial ni buscaron un arma distinta para cada parte del cuerpo. Esperaron el momento en que podían alcanzar al gusano y lo hirieron con aquella lanza hasta matarlo.

La muerte de Surranabe cambió el lugar. Donde había quedado su cuerpo se formó una gran laguna. El agua ocupó el espacio de la criatura y conservó en el paisaje la memoria del enfrentamiento. La laguna no aparece como premio ni como castigo añadido: es la transformación que sigue a la caída del gusano.

El relato dice que los mellizos eran “como gente de médico”. La comparación sugiere una capacidad de intervenir frente a una amenaza que consumía cuerpos y animales, pero la fuente no los llama jaibanás ni describe una curación ceremonial. Esta edición conserva la expresión y no la convierte en un sistema de poderes inventado.

La ficha anterior había agregado neará en las puntas de las lanzas, nombres propios, espíritus convocados y una batalla extensa. Nada de eso pertenece al episodio atribuido por Milcíades Chaves. La narración documentada es más concentrada: un ser devorador, cuatro mellizos, una lanza, la muerte y una laguna.

Esa brevedad no vuelve menor la historia. El grupo vence donde una sola persona no podía, y el cuerpo peligroso no desaparece sin huella: se vuelve agua. Surranabe deja de comer la vida del territorio, pero permanece inscrito en una forma del paisaje que la gente puede señalar y recordar.`,
    historia: composeRegionalHistory({
      sourceFocus:
        "Milcíades Chaves publicó el episodio de Surranabe en 1945 y lo atribuyó expresamente a los Chamí del occidente de Caldas. La compilación de 1993 mantiene esa frontera, aunque lo ubicó después de un capítulo Katío y facilitó la clasificación errónea del sitio.",
      evidenceChain:
        "Chaves es la fuente narrativa de control. Reichel-Dolmatoff y su ficha archivística permiten distinguir el corpus Chamí de Río Frío, mientras ONIC, Procuraduría y el diagnóstico del Ministerio aportan contexto territorial. Cardona ayuda a leer la transformación sin añadir una moraleja universal.",
      editorialDecision:
        "La revisión traslada la página de Katío a Chamí sin despublicarla, elimina neará, nombres y espíritus no acreditados, y conserva el par de imágenes porque ya representa un gusano en full paper cut.",
    }),
    versiones: composeRegionalVersions({
      versionDetail:
        "La versión localizada es muy breve: Surranabe devora personas y animales; cuatro mellizos lo matan con una lanza; una gran laguna se forma y los mellizos son comparados con gente de médico.",
      boundaryDetail:
        "No se encontró una segunda versión independiente que autorice a añadir el veneno neará, asignar nombres a los mellizos o convertirlos en cuatro espíritus. Esos elementos se retiran en vez de presentarse como tradición oral.",
      editorialRelation:
        "La culebra de siete cabezas también transforma el agua y el relieve en el occidente de Caldas, pero procede de La Montaña y conserva otros personajes, recorrido y desenlace.",
    }),
    leccion:
      "La acción coordinada puede detener una amenaza y transformar su huella en paisaje.",
    similitudes: composeSimilarities({
      internalComparison:
        "Surranabe dialoga con la culebra de siete cabezas porque un ser enorme queda unido al origen o movimiento de una masa de agua en Caldas.",
      broaderComparison:
        "Seres serpentinos o vermiformes vencidos por grupos heroicos aparecen en numerosos relatos, pero la laguna, los cuatro mellizos y la expresión gente de médico pertenecen a esta versión Chamí.",
    }),
    excerpt:
      "Cuatro mellizos matan con una lanza al gusano Surranabe y una gran laguna se forma donde cae su cuerpo.",
    seoTitle: "Surranabe, el gusano gigante Chamí",
    seoDescription:
      "Lee el relato Chamí de Surranabe, el gusano devorador vencido por cuatro mellizos, y la laguna formada tras su muerte.",
    focusKeywords: [
      "Surranabe",
      "gusano gigante Chamí",
      "cuatro mellizos",
      "mitos de Caldas",
      "laguna de Surranabe",
    ],
    tags: ["Surranabe", "bestias", "transformación", "agua"],
    researchNotes: `FRONTERA: transferido de Katío a Chamí por atribución explícita de Chaves 1945.
CORRECCIÓN: retirar neará, nombres y espíritus añadidos.
IMÁGENES: par existente reutilizado; ya cumple full paper cut.
${commonResearch}`,
  }),
];

export const chamiMyths = records;
export const chamiMythsBySlug = Object.fromEntries(
  records.map((record) => [record.slug, record]),
);
