import { definePananMyth } from "./define-editorial-myth.mjs";
import { canonicalPananSlugs } from "./universe.mjs";

const visualRule =
  "IMÁGENES: se reutiliza la pareja existente salvo en Guamurran. Toda regeneración futura debe ser ilustración editorial 2D full paper cut y paper quilling; nunca fotografía de papel, objeto físico, maqueta, diorama, CGI ni render 3D.";

const commonSourceKeys = [
  "memoriaTerritorial2016",
  "planVida2005",
  "mujeresPastos2021",
  "medicinaTradicional2006",
  "turismoCumbal",
  "planDesarrolloNarino2024",
  "historiaResguardo",
];

function history(specific, editorialBoundary) {
  return `${specific}

La fuente narrativa principal es la investigación etnoliteraria de Ernesto Ramiro Estacio y Luis Ulpiano Tatamues García, presentada en 2016 a la Universidad de Nariño. El trabajo organiza la palabra de comuneros y mayores alrededor de lugares y espíritus del territorio, e identifica a sus narradores cuando se trata de un testimonio personal. El Plan de Vida y las memorias de mujeres Pastos aportan contexto territorial independiente; no se usan para fabricar una segunda versión cuando no la contienen.

Panán es una comunidad y resguardo del pueblo Pastos en el municipio de Cumbal. La taxonomía histórica del sitio usa “Pananes” y se conserva para no romper la navegación, pero el texto público evita presentar a los Pananes como un pueblo indígena separado. También distingue memoria oral, interpretación de los investigadores, práctica vigente y referencia geográfica.

${editorialBoundary}

La coordenada señala aproximadamente el centro de Panán. No pretende ubicar una aparición, un entierro, un nacimiento de agua ni un sendero cuya posición exacta no publican las fuentes.`;
}

function versions(primary, related, limit) {
  return `${primary}

${related}

Las fuentes complementarias confirman el marco territorial Pastos, los lugares sagrados, la medicina propia y la centralidad del agua, pero no siempre repiten el episodio. Se citan como contexto y se diferencia su función de la del corpus oral de 2016. Las expresiones de los comuneros se conservan con explicación cuando pueden resultar opacas fuera de Panán.

Cuando una fuente guarda silencio sobre un detalle, la edición mantiene ese límite visible en vez de llenar el vacío con una escena plausible.

${limit}`;
}

function similarities(specific, localRelation, boundary) {
  return `${specific}

${localRelation}

${boundary}

Las coincidencias se presentan por función, paisaje o estructura narrativa y no como equivalencias de identidad entre seres, lugares o prácticas.

La comparación sirve para orientar la lectura, no para afirmar un origen común ni reducir la memoria de Panán a una versión regional de personajes más conocidos. Los nombres del lugar, las acciones atribuidas y las relaciones con agua, chagra, páramo y medicina propia conservan prioridad.`;
}

function horizontalPrompt(scene) {
  return `Ilustración panorámica editorial 2D full paper cut y paper quilling, sin fotografía de papel: ${scene}; composición en capas planas recortadas, sin texto, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

function verticalPrompt(scene) {
  return `Ilustración vertical 9:16 editorial 2D full paper cut y paper quilling, sin fotografía de papel: ${scene}; segunda escena en capas planas recortadas, sin texto, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

const recordList = [
  definePananMyth({
    slug: "al-duende",
    title: "El duende de Panán",
    mito: `En Panán se habla del duende como un ser alegre, travieso y difícil de fijar en una sola apariencia. Puede vestir con los colores de las plantas y flores del lugar donde se deja ver: algunas personas lo recuerdan de rojo, otras de verde, amarillo o negro. Su presencia no se reconoce por un uniforme, sino por lo que altera a su alrededor.

Le gusta la música, en especial la de instrumentos de cuerda. También se acerca a las quebradas y chorreras donde las mujeres lavan ropa. Los mayores dicen que puede enamorarse de una muchacha y perseguirla durante el día. Por la noche la inquieta con sueños y pesadillas hasta debilitarla. La persona afectada no queda reducida a una víctima de cuento: su familia busca a un médico tradicional para una limpia y una purga con guanto, albarrecín, marco y chapil.

Los caballos conocen otra forma de su travesura. El duende puede enredar o trenzar la crin y la cola, cambiar el ánimo del animal y hacer que se resista a pasar por ciertos lugares. Por eso una trenza inesperada no se mira solamente como desorden; puede ser la señal de que durante la noche alguien jugó con el caballo.

En relatos más recientes aparece cerca de alcantarillas y se convierte en un niño del sector. Busca a menores de cinco años, juega con ellos y deja la actividad dispuesta para continuar al día siguiente. No se muestra agresivo mientras juega y evita que los adultos lo vean. Cuando una persona mayor se acerca, ya no encuentra al visitante que el niño describe.

El duende reúne así varias relaciones: música y enamoramiento, juego y enfermedad, agua y caminos, infancia y animales. No actúa siempre del mismo modo ni en el mismo sitio. Se le reconoce por el cambio que deja: una pesadilla repetida, un caballo trenzado, un niño que conversa con alguien invisible o una melodía que parece venir de la quebrada.`,
    historia: history(
      `La página anterior convertía estas menciones en una aventura extensa con escenas y diálogos no atribuidos. La revisión vuelve al apartado “Al duende” del corpus de Panán: colores variables, música de cuerdas, cercanía con lavanderas, juego infantil, caballos y tratamiento del enduendado.`,
      `No se presenta una fórmula medicinal como recomendación clínica ni se identifica el ser con el duende europeo. Se registra una categoría comunitaria de afectación y el papel documentado del médico tradicional, sin enseñar dosis, reemplazar atención sanitaria o romantizar el sufrimiento.`,
    ),
    versiones: versions(
      `Una línea de la memoria destaca al duende músico y enamorado que frecuenta quebradas y chorreras. Cuando persigue a una joven, aparecen pesadillas y enfermedad. Otra línea se concentra en los caballos: el animal se asusta, se niega a avanzar y amanece con la crin o la cola trenzadas.`,
      `El corpus registra además una actualización del motivo: el duende sale en alcantarillas, toma la forma de otro niño y juega con menores sin dejarse mirar por adultos. La Cangagua conserva una experiencia situada de José Tarapues y por eso tiene página propia, aunque allí se atribuya al duende el caballo trenzado.`,
      `No se funden en una biografía única ni se afirma que toda trenza, pesadilla o juego infantil pruebe su presencia. Son señales interpretadas dentro de relatos distintos.`,
    ),
    leccion:
      "Escuchar las señales del territorio también exige cuidar a quienes resultan afectados.",
    similitudes: similarities(
      `Los duendes traviesos, músicos y escondedores aparecen en muchas tradiciones de Colombia y otros países. La propia fuente reconoce esa circulación amplia. La versión de Panán se distingue por los lugares y prácticas que la sostienen: chorreras, caballos, plantas de limpia, chapil y la actualización hacia alcantarillas.`,
      `La Cangagua ofrece el paralelo interno más directo porque allí un caballo se resiste a cruzar y amanece trenzado. El Chutún también puede parecer un duendecillo, pero su ámbito es la chagra y reacciona ante la destrucción del checher. No deben convertirse en un mismo ser.`,
      `El juego con niños recuerda relatos domésticos de duendes; el enamoramiento se aproxima a apariciones seductoras. Sin embargo, La Viuda conduce a hombres hacia el agua y El Cueche se relaciona con clima y enfermedad: las funciones no son intercambiables.`,
    ),
    excerpt:
      "Músico, travieso y cambiante, el duende de Panán juega con niños, trenza caballos y ronda quebradas.",
    seoTitle: "El duende de Panán: memoria del pueblo Pastos",
    seoDescription:
      "Conoce las versiones de Panán sobre el duende músico, los caballos trenzados, el juego infantil y el cuidado tradicional.",
    focusKeywords: [
      "duende de Panán",
      "mitos de Panán",
      "pueblo Pastos",
      "caballos trenzados",
      "medicina tradicional",
    ],
    tags: ["duende", "juego", "música", "tradición oral"],
    sourceKeys: [...commonSourceKeys, "medicinaMujerTerritorio2020"],
    imagePromptHorizontal: horizontalPrompt(
      "junto a una quebrada altoandina, un pequeño duende músico apenas sugerido entre hojas observa un caballo cuya crin empieza a trenzarse, sin sombrero europeo ni fantasía de bosque genérico",
    ),
    imagePromptVertical: verticalPrompt(
      "al amanecer una familia encuentra la crin trenzada de un caballo junto a la quebrada; al fondo se desvanece una silueta infantil entre vegetación de Panán",
    ),
    researchNotes: `NÚCLEO: apartado 4.2.1 del corpus principal.
LÍMITE: la cura se documenta como práctica cultural, no como consejo médico.
RELACIÓN: el testimonio de Cangagua permanece en su propia página.
${visualRule}`,
  }),

  definePananMyth({
    slug: "la-entundada-el-quedado-el-espanto",
    title: "La entundada, el quedado y el espanto",
    mito: `Una persona sale por un camino conocido y, sin que el paisaje cambie, deja de encontrar la salida. Da varias vueltas por el mismo punto, pierde la dirección de la casa o se separa de quienes la acompañaban. En Panán esa experiencia puede llamarse entundada.

La fuente menciona dos situaciones frecuentes. Alguien que ha bebido camina en círculos y no logra regresar. Otra persona, aun estando sobria, puede entundarse mientras destruye la naturaleza o atraviesa un sitio determinado sin el cuidado necesario. El extravío no siempre consiste en internarse muy lejos: el mismo lugar parece repetirse hasta impedir el paso.

Después aparecen dolor fuerte de cabeza, fiebre, cansancio y malestar del cuerpo. Cuando el médico tradicional revisa a la persona puede decir que está “quedada”: su espíritu permaneció en el lugar del susto mientras el cuerpo logró volver. También puede clasificar la afectación como espanto o entundamiento según los síntomas y lo ocurrido.

Para buscar al quedado se llevan prendas de la persona afectada. El médico emplea elementos como ovillos de lana roja, negra y verde, esencias de plantas, chapil, cigarrillo y ruda. La fuente no fija una receta única; señala que el procedimiento depende de quien cura y de la comunidad.

La recuperación supone volver hacia el lugar donde se produjo la ruptura. La ropa representa a la persona ausente y las plantas acompañan el llamado. El camino que antes no permitía avanzar se recorre ahora con conocimiento y compañía.

Entundada, quedado y espanto no son tres monstruos. Son nombres relacionados, pero no idénticos, para describir pérdida de orientación, separación espiritual y malestar. La clasificación corresponde a especialistas de la medicina propia.

El relato advierte sobre borrachera y destrucción, pero también ofrece una forma de recomponer el vínculo. Quien vuelve no lo hace solo: familia, médico, prendas, plantas y territorio participan en la restauración.`,
    historia: history(
      `El apartado 4.2.7 explica los tres términos desde la pérdida de conocimiento y de camino. Define entundarse, describe síntomas, presenta la idea de que el espíritu “se quedó” y enumera objetos usados por médicos tradicionales para ir por él.`,
      `La página heredada añadió una protagonista llamada Lina y una selva que no pertenecen al registro de Panán. Ambos elementos se retiran. Los procedimientos se documentan como práctica cultural; no se convierten en instrucciones médicas ni se presentan como sustituto de atención profesional.`,
    ),
    versiones: versions(
      `La entundada se asocia tanto con personas ebrias como con quienes destruyen la naturaleza. El quedado describe al espíritu que permanece en otro lugar. El espanto nombra otra clasificación de síntomas. La fuente indica que el médico decide cómo entender cada caso.`,
      `Las memorias de mujeres Pastos también emplean “entundarse” y hablan de lugares pesados, lo que confirma una categoría viva más amplia que una sola narración. No reproducen exactamente el procedimiento del corpus de Panán.`,
      `No se unifican los tres términos como sinónimos perfectos y no se enseña una receta. La lista de lanas, prendas, plantas y chapil se conserva como registro etnográfico atribuido.`,
    ),
    leccion:
      "Recuperar el rumbo requiere compañía, conocimiento y respeto por el lugar.",
    similitudes: similarities(
      `La pérdida repetida del camino aparece en relatos de encanto, niebla o monte de muchas regiones. En Panán, entundarse se enlaza con la noción de quedado y con una respuesta de medicina propia que busca el espíritu mediante prendas y plantas.`,
      `La Vieja puede entundar a borrachos y dejarlos en pantanos; La Viuda los desvía hacia el agua. Esos personajes narran encuentros particulares. Esta página explica la categoría de pérdida y restauración sin atribuirla siempre a una aparición.`,
      `El espanto posee equivalentes nominales en gran parte de América Latina, pero los objetos, especialistas y clasificaciones cambian. La comparación no debe universalizar un tratamiento.`,
    ),
    excerpt:
      "Entundarse es perder camino y orientación; el quedado y el espanto nombran afectaciones atendidas por medicina propia.",
    seoTitle: "Entundada, quedado y espanto en Panán",
    seoDescription:
      "Conoce cómo la memoria de Panán distingue entundarse, quedar el espíritu y espantarse, y el papel del médico tradicional.",
    focusKeywords: [
      "entundada Panán",
      "quedado y espanto",
      "medicina tradicional Pastos",
      "pérdida del camino",
      "mitos de Panán",
    ],
    tags: ["pérdida espiritual", "restauración", "rituales", "sanación"],
    sourceKeys: [...commonSourceKeys, "medicinaMujerTerritorio2020"],
    imagePromptHorizontal: horizontalPrompt(
      "una persona desorientada repite el mismo sendero altoandino de Panán mientras su familia y un médico tradicional preparan el regreso con prendas y plantas, sin selva tropical",
    ),
    imagePromptVertical: verticalPrompt(
      "un camino circular de páramo se abre cuando manos sostienen una prenda, ovillos de colores y ruda; la persona vuelve acompañada, sin ritual espectacular",
    ),
    researchNotes: `CORRECCIÓN: se retiran Lina y la selva inventadas.
NÚCLEO: entundada, quedado y espanto como categorías relacionadas.
SALUD: documentación cultural, no instrucciones clínicas.
${visualRule}`,
  }),

  definePananMyth({
    slug: "la-huacas",
    title: "Las huacas de Panán",
    mito: `En Panán, las huacas se recuerdan como entierros realizados por los mayores durante tiempos difíciles. Pueden contener cerámica, objetos valiosos o riquezas guardadas en la tierra. Cerca de La Tuta existe un cementerio donde aparecen restos de cerámica y figuras atribuidas a antepasados.

Los mayores dicen que “la huaca es para el que le quiere dar”; no se entrega a cualquiera. El tres de mayo algunas personas salen a velarlas, porque a medianoche pueden brillar como llamaradas. Sin embargo, el sueño, una distracción o algún cambio del lugar suele impedir que la señal sea observada con claridad.

Guillermo Tatamues contó que araba una finca llamada El Afilador con una yunta de bueyes. Una pata se hundió y al tantear descubrió tierra blanda. Marcó el punto y regresó al día siguiente con el patrón. Entonces el suelo estaba tan duro que no pudieron encontrar nada.

Luis Ulpiano Tatamues García narró otra experiencia. Al volver de noche después de beber, vio una cerda con crías cerca del cementerio. Los animales lo siguieron y subieron por donde él pensaba que no podrían pasar. Corrió hasta su casa y perdió el conocimiento. Después le dijeron que la aparición era una huaca destinada a él, pero el miedo le impidió recibirla.

Quienes buscan una huaca hablan de conjuros, oraciones ancestrales y pruebas. Se recomienda ir de a dos: una persona cava y otra vigila en silencio. Pueden aparecer animales, fantasmas o peligros. Si alguien habla, siente ambición o no resiste, la tierra se endurece y la huaca cambia de lugar.

Las huacas no son cofres disponibles para saqueo. En los testimonios el hallazgo depende de una relación que no controla el buscador. La tierra blanda se vuelve dura; el animal ofrece una señal que puede rechazarse; el tesoro se aparta de la ambición.

Cada experiencia mantiene su narrador y su incertidumbre. Juntas forman una memoria sobre objetos enterrados, miedo, antepasados y límites frente a la riqueza del territorio.`,
    historia: history(
      `El corpus conserva dos testimonios atribuidos: Guillermo Tatamues relata la yunta y el terreno cambiante; Luis Ulpiano Tatamues García, exgobernador, cuenta la cerda con crías. También describe la velación del tres de mayo y prácticas de buscadores.`,
      `La edición no promueve excavación ni guaquería. Los entierros y restos pueden involucrar patrimonio arqueológico protegido. Se conserva la memoria oral y se diferencia de la Waka, apartado interpretativo sobre poder espiritual y relación con la Madre Tierra.`,
    ),
    versiones: versions(
      `En El Afilador la huaca se anuncia mediante tierra blanda bajo la pata de un buey y se retira cuando el buscador vuelve. Cerca del cementerio aparece como una cerda con crías que persigue al narrador. En la velación del tres de mayo puede verse como una llamarada.`,
      `Los buscadores describen otro conjunto de pruebas: cavar en pareja, guardar silencio, contener la ambición y resistir visiones. La huaca puede endurecer la tierra o cambiar de lugar. Son experiencias recogidas dentro del mismo apartado.`,
      `La página no afirma que todas las huacas contengan oro ni que las figuras animales sean literalmente pieles con tesoros. Tampoco transforma los testimonios en instrucciones para localizar o extraer bienes.`,
    ),
    leccion:
      "La riqueza ancestral no se entrega a la ambición ni al saqueo.",
    similitudes: similarities(
      `Tesoros encantados que arden en fechas señaladas, cambian de lugar o adoptan forma animal circulan por los Andes y otras regiones colombianas. En Panán, las voces atribuidas y la cercanía de La Tuta y el cementerio sostienen una memoria local concreta.`,
      `La Waka es el paralelo más cercano, pero no una página duplicada. “Huacas” reúne experiencias de entierros, hallazgos y apariciones. “Waka” interpreta esas figuras como lenguaje de poder espiritual, protección territorial y relación entre mayores y Madre Tierra.`,
      `Los tunjos muiscas o entierros coloniales pueden ofrecer comparaciones históricas, pero no prueban qué contiene cada huaca de Panán. El expediente evita una equivalencia arqueológica automática.`,
    ),
    excerpt:
      "Testimonios de Panán recuerdan huacas que brillan, toman forma animal y endurecen la tierra ante la ambición.",
    seoTitle: "Las huacas de Panán: testimonios y memoria",
    seoDescription:
      "Lee testimonios sobre huacas de Panán: tierra que cambia, llamaradas, animales y límites frente a los entierros ancestrales.",
    focusKeywords: [
      "huacas de Panán",
      "tesoros enterrados Pastos",
      "cementerio de La Tuta",
      "Guillermo Tatamues",
      "memoria territorial",
    ],
    tags: ["guacas", "memoria", "tesoro oculto", "tradición oral"],
    sourceKeys: [...commonSourceKeys, "origenPananes"],
    imagePromptHorizontal: horizontalPrompt(
      "una yunta se detiene cuando una pata toca tierra blanda cerca de La Tuta; una pequeña llama nocturna sugiere la huaca sin mostrar cofre ni saqueo",
    ),
    imagePromptVertical: verticalPrompt(
      "una cerda y sus crías aparecen como siluetas de luz junto al camino del cementerio mientras el caminante retrocede, sin exotizar ni mostrar tesoro abierto",
    ),
    researchNotes: `TESTIMONIOS: Guillermo Tatamues y Luis Ulpiano Tatamues García.
LÍMITE: no se ofrecen instrucciones de excavación.
DISTINCIÓN: experiencias de huacas separadas de la lectura simbólica Waka.
${visualRule}`,
  }),

  definePananMyth({
    slug: "la-laguna-de-maria-panana",
    title: "Laguna de María Panana",
    mito: `A unas tres horas de camino, en el páramo de Panán, se encuentra la laguna asociada con María Panana. Sus aguas son frías y cristalinas. La quietud del lugar invita a bajar la voz, descansar y ordenar el pensamiento después del ascenso.

Quienes la conocen le dan varios nombres descriptivos: sitio de encantos, laguna de neblinas, nido de cóndores de páramo, jardín botánico, aguas encantadas y aguas de páramo. Cada expresión señala una experiencia del lugar; ninguna necesita reemplazar su nombre principal.

La laguna sirve para palabrear y armonizar el pensamiento. Allí se purifican bastones de mando y algunas personas entran al agua buscando limpiar cuerpo, alma y espíritu. La satisfacción que narran al salir no se presenta como una cura garantizada, sino como parte de una relación de serenidad, autoridad y medicina propia.

El mismo lugar puede ser peligroso. Se dice que quien “se queda” o se espanta corre riesgo de enfermar y hasta perder la vida. Llegar sin respeto, alterar la quietud o no reconocer la fuerza del páramo cambia la experiencia. La laguna no es un balneario abierto a cualquier comportamiento.

La memoria de María Panana también atraviesa la historia territorial del pueblo Pastos. Su nombre aparece ligado a títulos, tierras y luchas de recuperación. La laguna no debe convertirse en un retrato inventado de una reina solitaria; conserva una relación más amplia entre mujer, agua, gobierno y territorio.

Alrededor se mueven neblina, plantas y aves de altura. El agua permanece quieta, pero no vacía. Recibe bastones, palabras y visitantes; también marca cuándo detenerse.

El regreso exige recorrer nuevamente el páramo y llevar consigo la serenidad aprendida en la orilla.

Quien llega a la Laguna de María Panana entra a un santuario. La armonización y el riesgo no son contradicciones: expresan que un lugar capaz de cuidar exige a su vez cuidado, preparación y respeto.`,
    historia: history(
      `El apartado 4.1.5 describe el recorrido, el agua, los nombres atribuidos, la purificación de bastones, la armonización y el riesgo de quedar o espantarse. Las memorias de mujeres Pastos permiten contextualizar a María Panana dentro de la defensa territorial.`,
      `No se inventa una biografía de María Panana ni se afirma que viva físicamente dentro de la laguna. La purificación se registra como práctica cultural y espiritual, no como promesa terapéutica. El sitio exacto no se geolocaliza públicamente.`,
    ),
    versiones: versions(
      `La fuente reúne denominaciones que resaltan aspectos distintos: neblinas, cóndores, plantas, encantos, aguas frías y purificación. También registra dos resultados posibles de la visita: armonización para quien entra con respeto y enfermedad para quien queda o se espanta.`,
      `Las memorias de mujeres del pueblo Pastos presentan a María Panana como referente de título y recuperación de tierras. Esa dimensión histórica acompaña la página sin convertirse en una segunda leyenda sobre el origen de la laguna.`,
      `No se atribuye a María Panana una aparición, diálogo o transformación que las fuentes consultadas no narran. Tampoco se ofrecen baños o inmersiones como práctica recomendable para visitantes.`,
    ),
    leccion:
      "Los lugares que armonizan también establecen límites para quien los visita.",
    similitudes: similarities(
      `Lagunas de páramo vinculadas con sanación, autoridad y peligro aparecen en muchos territorios andinos. La de María Panana se distingue por la purificación de bastones, el palabreo, sus nombres locales y la memoria política de una mujer Pastos.`,
      `Cualchio y Guamurran son otros cuerpos de agua altos, pero funcionan como nacimientos y reguladores de caudal. La Tuta une agua y tierra en el origen. María Panana concentra armonización, gobierno y el riesgo de quedar.`,
      `Compararla con una “diosa de la laguna” simplificaría fuentes que no usan ese título. La relación con María Panana debe leerse desde la memoria territorial y no desde un panteón reconstruido.`,
    ),
    excerpt:
      "Laguna fría de páramo donde se palabrea, se armonizan bastones y se entra con respeto para no quedar o espantarse.",
    seoTitle: "Laguna de María Panana: santuario Pastos",
    seoDescription:
      "Conoce la laguna de María Panana, sus neblinas, bastones de mando, armonización y límites dentro del territorio Pastos.",
    focusKeywords: [
      "Laguna de María Panana",
      "santuario de Panán",
      "bastones de mando",
      "pueblo Pastos",
      "laguna de páramo",
    ],
    tags: ["agua", "laguna", "purificación", "santuario"],
    sourceKeys: [...commonSourceKeys, "medicinaMujerTerritorio2020"],
    imagePromptHorizontal: horizontalPrompt(
      "laguna fría y cristalina de páramo entre neblina, frailejones y cóndores distantes; autoridades armonizan bastones con sobriedad, sin chamán genérico",
    ),
    imagePromptVertical: verticalPrompt(
      "un bastón de mando se acerca al agua quieta mientras la neblina abre un jardín de páramo; una persona espera en silencio en la orilla",
    ),
    researchNotes: `NÚCLEOS: armonización, bastones, neblina, agua fría y riesgo.
MARÍA PANANA: contexto territorial, sin biografía inventada.
GEOGRAFÍA: no se publica el punto exacto del santuario.
${visualRule}`,
  }),

  definePananMyth({
    slug: "la-lechuza-y-el-cuichi-de-cuchicuelan",
    title: "La Lechuza y el Cuichi de Cuchicuelan",
    mito: `Cuchicuelan es un lugar húmedo del territorio de Panán. Allí anidan y descansan lechuzas. También hay serpientes, sapos, ranas, lagartijas y mariposas alrededor de aguas profundas. La memoria lo describe como un rincón misterioso y de mucha energía positiva.

La Lechuza fue además parte de una hacienda donde terratenientes explotaban a comuneros de Puscuelan y otras zonas de Panán. Habitantes cercanos trabajaban allí como peones. Por eso el nombre no remite únicamente a un ave: conserva una historia de trabajo, desigualdad y recuperación territorial.

En ese ambiente se asienta el Cuichi. Toma la forma de un arco perfecto de colores que aparece cuando llueve y sale el sol al mismo tiempo. Nace y termina en lugares húmedos, acompaña con su arco a quienes recorren el sector y conecta visualmente dos puntos del paisaje.

Las mujeres de Panán se cubren la cabeza para evitar el “meado” del Cueche, al que se atribuye blanquear el cabello. Algunas sacan un machete y trazan una cruz en la tierra. Mientras lo hacen repiten tres veces una invocación a Dios para que el arco se quite de la vista y desaparezca. La fuente dice que entonces se desvanece.

El gesto reúne elementos que no necesitan separarse: humedad, arco, machete, cruz y oración. Es una práctica transmitida dentro de una comunidad marcada por relaciones indígenas y católicas. El Cuichi no aparece como una figura humana ni exige inventar un sacerdote o ceremonia colectiva.

Lechuzas y Cuichi comparten lugar, pero no se transforman uno en otro. Las aves descansan allí; el arco se asienta sobre aguas profundas y animales pequeños. La antigua hacienda añade otra capa: debajo del paisaje encantado permanece la memoria de quienes trabajaron como peones.

Cuchicuelan guarda así biodiversidad, experiencia climática, protección cotidiana e historia social. Mirar el arco supone también mirar el agua y la tierra sobre las que aparece.`,
    historia: history(
      `El corpus presenta Lechuza y Cuichi en un mismo apartado porque comparten Cuchicuelan. Describe fauna, agua, energía, hacienda y trabajo de peones, luego registra el arco, la cobertura de la cabeza y la cruz trazada por mujeres.`,
      `La revisión retira una ceremonia colectiva y una figura espiritual inventadas. No confunde lechuza con mensajera sobrenatural ni representa al Cuichi como persona. La oración se documenta como práctica sin afirmar eficacia meteorológica.`,
    ),
    versiones: versions(
      `La primera capa del apartado describe el sitio de la Lechuza: aves, agua profunda, serpientes, anfibios, mariposas y memoria de una hacienda. La segunda se concentra en el Cuichi y en la respuesta de las mujeres cuando aparece.`,
      `La página general del Cueche amplía su relación con cosecha, colores bravos y ojeado. Cuchicuelan aporta un lugar, una acción y una memoria social específicas; por eso ambas páginas se enlazan sin fusionarse.`,
      `No se afirma que todas las mujeres realicen hoy el mismo gesto ni que el arco desaparezca por una causa demostrable. Se conserva la repetición triple porque así la registra la fuente.`,
    ),
    leccion:
      "Un paisaje guarda al mismo tiempo naturaleza, protección e historia social.",
    similitudes: similarities(
      `Aves nocturnas y arcos de colores reciben sentidos espirituales en muchas tradiciones, pero esta memoria no convierte a la lechuza en oráculo. Su especificidad está en Cuchicuelan, la hacienda, los peones y la práctica de las mujeres.`,
      `El Cueche general es el paralelo directo. La Laguna de María Panana también exige respeto en un sitio húmedo; Cualchio enlaza agua con clima. Ninguno comparte la memoria de explotación de La Lechuza.`,
      `Trazar una cruz y pronunciar una oración muestra sincretismo, no una prueba de que el Cuichi pertenezca al folclor católico. El nombre y el paisaje permanecen Pastos.`,
    ),
    excerpt:
      "Cuchicuelan reúne lechuzas, agua profunda, memoria de peones y el Cuichi que las mujeres apartan con una cruz.",
    seoTitle: "La Lechuza y el Cuichi de Cuchicuelan",
    seoDescription:
      "Conoce Cuchicuelan: lechuzas, agua, memoria de peones y el arco Cuichi ante el que mujeres de Panán trazan una cruz.",
    focusKeywords: [
      "Cuichi de Cuchicuelan",
      "Lechuza de Panán",
      "Cueche Pastos",
      "hacienda de Puscuelan",
      "mitos de Panán",
    ],
    tags: ["agua", "lechuzas", "naturaleza", "sincretismo"],
    sourceKeys: [...commonSourceKeys, "medicinaMujerTerritorio2020"],
    imagePromptHorizontal: horizontalPrompt(
      "Cuchicuelan húmedo con lechuzas, ranas, mariposas y agua profunda; un arco Cuichi aparece sobre el paisaje y una comunera se cubre la cabeza",
    ),
    imagePromptVertical: verticalPrompt(
      "una mujer traza una cruz pequeña en tierra con machete mientras el arco se desvanece sobre agua y lechuzas; sin oficiante ni ritual colectivo inventado",
    ),
    researchNotes: `NÚCLEOS: fauna, hacienda, peones, Cuichi y práctica de mujeres.
CORRECCIÓN: se retira una ceremonia inventada.
RELACIÓN: página general del Cueche enlazada, no duplicada.
${visualRule}`,
  }),

  definePananMyth({
    slug: "la-tuta",
    title: "La Tuta y el origen de Panán",
    mito: `Cerca del centro poblado de Panán, entre El Placer Alto y La Merced, se encuentra La Tuta. Dos senderos conducen al lugar. Al pie hubo una laguna que con el tiempo se secó, mientras en la parte alta nacen aguas que recorren el poblado y separan veredas.

La memoria recuerda tres familias y tres caciques. Sus nombres aparecen con grafías variables: Nazate o Nasate, Puenayán o Puednayán, y Tarapues o Juaspuezan. Se ubicaron allí por la tierra productiva y por la posibilidad de rendir culto a fuerzas que proveían trigo, cebada, habas y maíz.

Una figura sorprendente reúne a los tres: un dragón de tres cabezas que vivía en La Tuta. La investigación lo presenta como imagen de los caciques y como origen de los Pananes, raíces, troncos y retoños de familias luchadoras. Cerca se encuentran fragmentos de cerámica y señales de un posible cementerio o asentamiento.

Tuta es donde madruga el sol y también donde se despide. Al caer la noche, minacuros o luciérnagas forman caminos de luz que parecen una ciudad. La gruta se comunica con luna, estrellas y primeros rayos. Es oscuridad, profundidad y túnel, pero también chaquiñán, refugio y cercanía entre vida y muerte.

Los mayores dicen que La Tuta es ojo del mar, mar adentro y cordón umbilical que conecta con su centro. Agua y tierra se unen para producir la descendencia de Panán. Tres nacimientos forman una acequia que sostiene a la comunidad, como los tres primeros linajes se extendieron por las veredas.

La dualidad permanece: lugar de bien y de riesgo, luz y oscuridad, vida y muerte. Algunas horas son pesadas para transitar, pero la profundidad también guarda refugio y origen.

“Somos de aquí mismo”, afirman las voces recogidas. La tierra que parió a los Pananes los recibe, los alimenta y conservará a sus mayores. La Tuta no es solamente una cueva: es una manera de decir que comunidad, agua, linajes y territorio nacieron juntos.`,
    historia: history(
      `La Tuta es el núcleo de origen más desarrollado del corpus. La investigación y el Plan de Vida coinciden en la gruta, tres caciques, dragón de tres cabezas, nacimientos de agua, cementerio, minacuros y unión de agua y tierra.`,
      `Las grafías de los apellidos varían entre fuentes y se muestran sin escoger arbitrariamente una como antigua. El dragón se conserva porque está documentado, pero no se representa como criatura europea realista ni se usa para afirmar un culto prehispánico sin evidencia.`,
    ),
    versiones: versions(
      `Una versión nombra a Nasate, Juaspuezan y Puednayán; otra memoria comunitaria destaca a Tarapues, Puenayán y Nazate. El número tres se mantiene en caciques, cabezas y nacimientos de agua, aunque los nombres cambien.`,
      `La Tuta puede significar noche, oscuridad y profundidad; también camino, refugio, ojo del mar y cordón umbilical. Estas explicaciones no se reducen a una etimología única. Forman imágenes atribuidas a mayores.`,
      `La versión digital comunitaria amplía la memoria de los linajes y María Panana. Se usa con atribución contemporánea, sin desplazar el corpus investigado ni convertir cada detalle en consenso.`,
    ),
    leccion:
      "Agua, tierra y linajes sostienen juntos la continuidad de una comunidad.",
    similitudes: similarities(
      `Grutas de origen, ancestros múltiples y animales de varias cabezas aparecen en distintas mitologías. La Tuta se distingue por sus tres linajes, tres nacimientos, minacuros, ojo del mar y relación directa con veredas de Panán.`,
      `Chuchún también enlaza agua y nacimiento; María Panana vincula laguna y territorio; las Huacas sitúan cerámica y cementerio cerca de La Tuta. Son páginas relacionadas, no episodios que deban incorporarse todos al origen.`,
      `El dragón puede recordar iconografía europea o asiática, pero la fuente no explica su procedencia histórica. La comparación visual no autoriza a vestirlo con castillos, caballeros o fuego.`,
    ),
    excerpt:
      "La gruta de La Tuta, sus tres caciques, aguas y minacuros reúnen el origen territorial de Panán.",
    seoTitle: "La Tuta y el origen de Panán",
    seoDescription:
      "Conoce La Tuta: tres caciques, un dragón de tres cabezas, nacimientos de agua, minacuros y el origen territorial de Panán.",
    focusKeywords: [
      "La Tuta Panán",
      "origen de los Pananes",
      "tres caciques Pastos",
      "dragón de tres cabezas",
      "memoria territorial",
    ],
    tags: ["agua", "dualidad", "origen", "tradición oral"],
    sourceKeys: [...commonSourceKeys, "origenPananes", "lugaresSagradosIcanh"],
    imagePromptHorizontal: horizontalPrompt(
      "La Tuta como gruta altoandina con tres nacimientos de agua, tres linajes y minacuros luminosos; un dragón simbólico de tres cabezas se integra a la montaña, sin castillo ni fuego",
    ),
    imagePromptVertical: verticalPrompt(
      "desde una acequia que nace en La Tuta asciende un cordón de agua hacia luna, estrellas y primeros rayos del sol; tres siluetas de caciques permanecen en la entrada",
    ),
    researchNotes: `NÚCLEO DE ORIGEN: corpus 2016, Plan de Vida y memoria comunitaria.
VARIANTES: se conservan grafías distintas de los tres linajes.
DRAGÓN: figura documentada, sin iconografía europea añadida.
${visualRule}`,
  }),

  definePananMyth({
    slug: "la-vieja-la-viuda-y-el-anima",
    title: "La Vieja, la Viuda y el Ánima",
    mito: `Tres figuras femeninas recorren caminos y noches de Panán, pero no actúan de la misma manera.

La Vieja aparece pobre, muy delgada, jorobada, vestida con follones oscuros y pañolón. Lleva el cabello enredado, un sombrero bajo y los pechos echados al hombro. No conviene hacerla llorar: su estruendo despierta perros y provoca aullidos. Sale a quienes regresan borrachos, los entunda y los deja en pantanos, doloridos y con fiebre. La memoria recomienda un novenario y una promesa de no volver a embriagarse.

La Viuda adopta el aspecto de una joven hermosa. Se presenta con la ropa de la novia, amante o mujer en quien un hombre piensa. Pasa junto a cantinas, se deja ver solo por la persona elegida y la atrae hacia una chorrera, un río o un lago. Parece jugar y nunca se deja alcanzar. Mientras avanza, el seguidor pierde conocimiento. Si logra reconocer el peligro puede resistirse; si no, cae y despierta después sin comprender el recorrido. La Viuda nunca muestra el rostro. Sus ojos se recuerdan como carbones o rayos.

El Ánima es alta, delgada y vestida de blanco. Se mueve lentamente por el aire y puede aparecer en sueños o caminos. Su rostro es una calavera o queda cubierto por cabellos largos y blancos. Ante ella, algunas personas se tienden boca abajo en forma de cruz y dejan que continúe. Si llega a una tumba, se recomienda ofrecer una misa de honras.

Las tres figuras enlazan miedo, noche y lenguaje católico. La Vieja confronta la borrachera, la Viuda convierte el deseo en extravío y el Ánima pide reconocer a una persona muerta.

Los perros, el agua y los caminos ayudan a distinguir cuál presencia atraviesa cada experiencia.

Reunirlas en una sola página conserva la decisión del corpus, pero no las convierte en fases de una misma mujer. Cada aparición tiene aspecto, camino y respuesta propios.`,
    historia: history(
      `El corpus reúne las tres entradas bajo un mismo título y dedica una descripción extensa a cada figura. La edición respeta esa agrupación porque comparten estructura de aparición femenina nocturna, pero separa claramente sus rasgos y acciones.`,
      `El lenguaje sobre cuerpos femeninos, alcohol y castigo refleja contextos de transmisión y puede reproducir estereotipos. Se registra sin presentarlo como norma sobre mujeres reales. Las oraciones y misas pertenecen a versiones cristianizadas y no prueban antigüedad prehispánica.`,
    ),
    versiones: versions(
      `La Vieja cambia según el sitio donde aparece: monte, cañaveral, piedra o cangagua. La Viuda toma la ropa de la mujer que ocupa el pensamiento del hombre y lo conduce hacia agua. El Ánima puede aparecer como sueño, silueta blanca o calavera.`,
      `Las respuestas también varían: novenario y promesa frente a La Vieja; resistirse antes de entrar al agua frente a La Viuda; tenderse en cruz y ofrecer misa frente al Ánima. La fuente no propone una solución común.`,
      `No se afirma que las figuras existan como una sola entidad ni que toda mujer solitaria, viuda, anciana o fallecida corresponda al relato. La edición evita convertir sus descripciones en burla o sexualización.`,
    ),
    leccion:
      "El deseo, el miedo y el duelo pueden desviar un camino conocido.",
    similitudes: similarities(
      `Viejas que castigan, viudas seductoras y ánimas blancas circulan ampliamente en Colombia y América Latina. La propia fuente reconoce variantes internacionales. La memoria de Panán las sitúa en cantinas, chorreras, cangaguas, pantanos y prácticas católicas locales.`,
      `La Entundada explica la pérdida de camino sin exigir una figura. La Cangagua contiene una experiencia de duende con caballo. Estas páginas comparten extravío nocturno, pero conservan causas y respuestas distintas.`,
      `La Viuda puede recordar a la Sayona o la Llorona, aunque no busca hijos ni denuncia infidelidad en la versión publicada. La Vieja tampoco debe confundirse con Madremonte por el solo hecho de aparecer en montes.`,
    ),
    excerpt:
      "La Vieja entunda, la Viuda conduce hacia el agua y el Ánima recorre el aire: tres apariciones distintas de Panán.",
    seoTitle: "La Vieja, la Viuda y el Ánima de Panán",
    seoDescription:
      "Conoce las diferencias entre La Vieja, La Viuda y el Ánima en la memoria nocturna de Panán.",
    focusKeywords: [
      "La Vieja de Panán",
      "La Viuda de Panán",
      "Ánima de Panán",
      "apariciones Pastos",
      "mitos de Panán",
    ],
    tags: ["ánimas", "espectro", "miedo", "tradición oral"],
    sourceKeys: [...commonSourceKeys, "medicinaMujerTerritorio2020"],
    imagePromptHorizontal: horizontalPrompt(
      "tres senderos nocturnos de Panán muestran a distancia una anciana oscura, una joven sin rostro junto al agua y una silueta blanca aérea, sin sexualización ni terror gráfico",
    ),
    imagePromptVertical: verticalPrompt(
      "un caminante elige detenerse antes de una chorrera mientras tres presencias diferentes quedan separadas por capas de camino, agua y niebla",
    ),
    researchNotes: `AGRUPACIÓN: se conserva la estructura del corpus.
DIFERENCIA: tres figuras, no una entidad cambiante.
CONTEXTO: se explicita la transmisión cristiana y el sesgo de género.
${visualRule}`,
  }),

  definePananMyth({
    slug: "la-waka",
    title: "La Waka: poder espiritual de la tierra",
    mito: `Waka es una palabra para pensar la riqueza enterrada más allá del cofre o el metal. En el corpus de Panán aparece como lenguaje simbólico cargado de aromas, colores y formas. Expresa fe y esperanza, pero también poder económico, social y espiritual.

La Waka relaciona a los seres humanos con los espíritus de la Madre Tierra. Los mayores recorren el territorio y protegen una riqueza que podría ser usurpada. Lo enterrado no está separado del suelo que alimenta: forma parte de sitios mitológicos, memorias ancestrales y responsabilidades de cuidado.

Las guacas pueden figurarse como animales. Buey, gallina con pollos, cerdo, perro y culebra aparecen entre sus formas. No son un catálogo para identificar tesoros, sino imágenes mediante las cuales el territorio se comunica. Cada animal une vida doméstica, trabajo, peligro o fecundidad con aquello que permanece oculto.

La fuente habla de cofres llenos de poder espiritual y de pieles animales. Esa expresión no obliga a imaginar cajas europeas cubiertas por cuerpos reales. Puede leerse como una manera de decir que la riqueza adopta formas vivas y se reserva para un reencuentro entre seres naturales, espirituales y humanos.

La Waka también ayuda a cuidar la Madre Tierra para que continúe brindando alimentos. Su valor no termina cuando alguien extrae lo enterrado. Al contrario, la ambición y la usurpación rompen la relación que le da sentido.

Por eso esta página no cuenta una excavación particular. Los testimonios de la yunta, la cerda y los buscadores están en “Las huacas de Panán”. Aquí permanece la reflexión que el corpus separa: qué representan esas apariciones y por qué riqueza, mayores y territorio no pueden tratarse como objetos independientes.

La Waka nombra un poder que sigue dentro de la tierra. Reconocerlo no significa apropiárselo, sino entender que la memoria ancestral también protege la subsistencia de quienes viven en el presente.`,
    historia: history(
      `El apartado 4.2.6 es interpretativo y no contiene una trama autónoma. Define la Waka como lenguaje simbólico, vínculo espiritual, riqueza cultural, poder social y protección de la Madre Tierra. La edición mantiene esa forma ensayística.`,
      `La página heredada había convertido el concepto en una aventura con personajes genéricos y un cofre visible. Esa literalización se retira. Huacas y Waka no se fusionan: la primera página conserva testimonios; esta explica el marco simbólico que la fuente publica por separado.`,
    ),
    versiones: versions(
      `La fuente alterna Waka, guaca y huaca. En el apartado testimonial predominan entierros, señales y búsquedas. En el apartado simbólico aparecen poder espiritual, colores, aromas, animales, mayores y defensa frente a la usurpación.`,
      `Buey, gallina, cerdo, perro y culebra no forman cinco cuentos independientes. Son representaciones enumeradas dentro de una interpretación. La página no les asigna acciones que no estén documentadas.`,
      `No se afirma una etimología lingüística definitiva ni se equipara toda waka andina con la definición de Panán. La grafía del título conserva la elección del corpus y los otros términos aparecen como variantes.`,
    ),
    leccion:
      "La riqueza de la tierra vale por las relaciones que protege.",
    similitudes: similarities(
      `Waka o huaca posee sentidos amplios en los Andes: lugar, entidad, objeto o potencia sagrada según lengua y territorio. La página de Panán comparte esa amplitud, pero se basa en una interpretación local que destaca animales, mayores y protección ante usurpación.`,
      `“Las huacas de Panán” ofrece el complemento narrativo. Allí una yunta encuentra tierra blanda y una cerda persigue a un caminante. Aquí esos animales se leen como formas de un poder que vincula riqueza, territorio y seres espirituales.`,
      `Los tesoros encantados de tradición colonial pueden parecerse en cofres y pruebas. Reducir la Waka a oro oculto eliminaría precisamente la dimensión que justifica conservar esta segunda página.`,
    ),
    excerpt:
      "La Waka expresa la riqueza espiritual que une mayores, animales, seres humanos y Madre Tierra en Panán.",
    seoTitle: "La Waka de Panán: poder espiritual de la tierra",
    seoDescription:
      "Conoce la Waka como lenguaje simbólico de riqueza, animales, mayores y protección de la Madre Tierra en Panán.",
    focusKeywords: [
      "Waka de Panán",
      "poder espiritual Pastos",
      "huacas y Waka",
      "Madre Tierra",
      "memoria territorial",
    ],
    tags: ["espiritualidad", "guacas", "protección", "tierra"],
    sourceKeys: [...commonSourceKeys, "lugaresSagradosIcanh"],
    imagePromptHorizontal: horizontalPrompt(
      "capas de tierra de Panán enlazan siluetas de buey, gallina, cerdo, perro y culebra con semillas y mayores caminando el territorio, sin cofre europeo abierto",
    ),
    imagePromptVertical: verticalPrompt(
      "desde cultivos y animales descienden raíces hacia una luz espiritual enterrada; manos mayores protegen el suelo sin excavar ni mostrar oro",
    ),
    researchNotes: `FORMA: interpretación simbólica, no cuento.
DISTINCIÓN: Huacas conserva testimonios; Waka explica relación espiritual.
CORRECCIÓN: se retira cofre literal y aventura inventada.
${visualRule}`,
  }),

  definePananMyth({
    slug: "guamurran-madre-de-agua",
    title: "Guamurran, Madre de Agua",
    mito: `En la parte alta del territorio de Panán se encuentra Guamurran, una ciénaga de páramo donde nace agua para más de una comunidad. El corpus la llama Madre de Agua porque sus corrientes no permanecen encerradas en el humedal: salen, alimentan y conectan territorios.

El agua llega primero a Panán y también al resguardo de Chiles. Más abajo se incorpora al río Carchi y continúa hacia otros municipios de la zona. Una misma ciénaga sostiene así veredas, cultivos y poblaciones que no siempre se ven entre sí desde el nacimiento.

Guamurran no aparece en la fuente como una mujer sobrenatural ni como una criatura que emerge del agua. “Madre” expresa la capacidad de dar origen y sustento. El páramo retiene lluvia y neblina; los suelos húmedos liberan el caudal poco a poco; las corrientes llevan esa vida hacia abajo.

En el lugar se construyó una represa para un sistema de riego. La obra buscaba llevar agua a predios de diferentes veredas, pero obtuvo pocos resultados según la investigación. El dato introduce una tensión importante: reconocer a Guamurran como Madre de Agua no garantiza que cualquier intervención técnica comprenda su funcionamiento.

Quienes recorren la ciénaga encuentran vegetación baja, suelo saturado, espejos de agua y neblina. El paso debe ser cuidadoso porque lo que parece tierra firme puede ser parte del humedal. Cada salida de agua participa en una red mayor.

La memoria no inventa una ceremonia específica para visitar Guamurran. Su fuerza está en la relación comprobable y narrada: un nacimiento sostiene a Panán, Chiles, el Carchi y otros municipios. Protegerlo exige pensar más allá de un límite administrativo o de una sola parcela.

Madre de Agua es entonces un nombre territorial. No personifica para volver fantástico el páramo; recuerda que todo caudal tiene un origen vivo y que muchas comunidades dependen de cómo sea tratado.`,
    historia: history(
      `Guamurran era el único apartado del corpus principal ausente del sitio. La sección 4.1.3 la describe como ciénaga donde nace agua para Panán, Chiles y el río Carchi, y registra una represa de riego con resultados limitados.`,
      `La nueva página no inventa una aparición para compensar la brevedad de la fuente. El nombre Madre de Agua se explica desde su función territorial y no como prueba de una deidad antropomorfa. Recibe una pareja visual nueva, horizontal y vertical, ambas full paper cut.`,
    ),
    versiones: versions(
      `El corpus de 2016 usa la grafía Guamorran en el título de la sección y la identifica con Madre de Agua. La memoria digital del resguardo registra Guamorran dentro de la hidrografía local. La URL pública usa Guamurran, forma adoptada en la edición para facilitar lectura, y conserva las grafías en el expediente.`,
      `La versión documental se limita al nacimiento, los territorios abastecidos y la represa. No se encontraron relatos atribuidos sobre una mujer, guardiana, animal o ceremonia vinculada específicamente con la ciénaga.`,
      `Las fuentes institucionales confirman el paisaje de páramo y la posición de Panán dentro de Gran Cumbal, pero no publican coordenadas exactas del nacimiento. Por esa razón el mapa señala solo el centro aproximado de la comunidad.`,
    ),
    leccion:
      "Un nacimiento de agua obliga a cuidar también a quienes viven río abajo.",
    similitudes: similarities(
      `Llamar “madre” a un nacimiento de agua aparece en múltiples territorios porque el caudal alimenta y da continuidad. Guamurran se distingue por una red nombrada: Panán, Chiles, río Carchi y municipios aguas abajo.`,
      `Cualchio y Cuaichala son otros nacimientos de la colección. Cualchio se relaciona con granizo y recuperación de caudal; Cuaichala con Guacales, acueducto y devoción. Guamurran destaca por su alcance intercomunitario y por la intervención de una represa.`,
      `La Laguna de María Panana se asocia con armonización y bastones de mando. Aunque ambos son lugares altos de agua, no hay base para convertir a María Panana en la Madre de Agua de Guamurran ni fusionar las páginas.`,
    ),
    excerpt:
      "La ciénaga de Guamurran da origen al agua que conecta Panán, Chiles, el río Carchi y otros municipios.",
    seoTitle: "Guamurran, Madre de Agua de Panán",
    seoDescription:
      "Conoce Guamurran, la ciénaga de páramo que alimenta a Panán, Chiles, el río Carchi y comunidades aguas abajo.",
    focusKeywords: [
      "Guamurran Madre de Agua",
      "ciénaga de Panán",
      "río Carchi",
      "resguardo de Chiles",
      "agua del pueblo Pastos",
    ],
    tags: ["agua", "naturaleza", "protección", "tierra"],
    sourceKeys: [...commonSourceKeys, "lugaresSagradosIcanh"],
    imagePromptHorizontal: horizontalPrompt(
      "ciénaga altoandina de Guamurran con frailejones, neblina y varios nacimientos que fluyen hacia Panán, Chiles y el Carchi; comuneros observan sin personificar el agua",
    ),
    imagePromptVertical: verticalPrompt(
      "desde el humedal de páramo el agua baja por quebrada hacia chagras y comunidades; dos generaciones cuidan plantas junto al cauce, sin repetir la escena panorámica",
    ),
    researchNotes: `INCORPORACIÓN NUEVA: único apartado faltante del corpus principal.
FORMA: memoria de lugar; no se inventa una entidad antropomorfa.
IMÁGENES: pareja nueva horizontal 1536x864 y vertical 864x1536.
${visualRule}`,
  }),
  definePananMyth({
    slug: "el-chuchun-y-las-tres-quebradas",
    title: "Chuchún y las tres quebradas",
    mito: `Chuchún es un lugar de agua templada en el territorio de Panán. Su nombre se explica desde el quichua como “seno”, una palabra que relaciona el nacimiento de agua con abrigo y alimento. Entre pequeños chaparros brotaban varios manantiales, de modo que las personas podían escoger dónde bañarse al aire libre. No había una sola poza monumental: el agua aparecía en distintos puntos y formaba un espacio compartido.

Allí se encuentran tres quebradas que recorren buena parte del resguardo: Aucué, Lájaro y Guacales. Cada una llega con su propio trayecto y en Chuchún sus aguas se reconocen juntas. La unión no borra sus nombres; hace visible la red que atraviesa veredas, cultivos, pasos y casas.

Los valles de esas quebradas guardan una memoria de trabajo. Por ellos caminaban diariamente mujeres y hombres que cruzaban hacia Ecuador como peones. Iban al otro lado del río para conseguir el sustento de sus familias y volvían con lo necesario para alimentar a sus hijos. La investigación vincula a esos hijos con nuevas generaciones de liderazgo comunitario. El agua acompaña entonces una historia de movilidad fronteriza, esfuerzo y continuidad.

Chuchún conserva también un saber relacionado con el nacimiento. Las familias enterraban allí las placentas después del parto. El gesto unía el cuerpo recién nacido con la tierra y quedaba bajo el cuidado de parteras y médicos tradicionales, quienes conocían cuándo, dónde y cómo hacerlo. La fuente lo nombra como un sincretismo que reúne varios saberes, no como una ceremonia idéntica para todas las familias.

El lugar puede leerse desde esos tres movimientos: el agua sale de la tierra, tres quebradas se unen y la placenta regresa al suelo. Baño, trabajo y nacimiento no son episodios separados por completo. En Chuchún, la memoria de Panán fluye por los mismos caminos que sostuvieron a familias, trabajadores y nuevas generaciones.`,
    historia: history(
      `La fuente de 2016 dedica a Chuchún un apartado territorial, no un cuento con protagonista. Describe los nacimientos templados, la confluencia de Aucué, Lájaro y Guacales, los desplazamientos de peones hacia Ecuador y el entierro de placentas.`,
      `La edición conserva esa forma. No inventa un guardián de las quebradas, una primera madre ni un acontecimiento sobrenatural para darle “trama”. La referencia al entierro de placentas se presenta como memoria registrada y saber de parteras, sin afirmar que todas las familias lo practiquen hoy.`,
    ),
    versiones: versions(
      `El corpus principal explica Chuchún desde el agua y ofrece cuatro capas de memoria: el sentido de su nombre, los baños en nacimientos templados, la unión de tres quebradas y el entierro de placentas. Es una descripción compuesta del lugar, no cuatro versiones rivales.`,
      `La memoria digital del resguardo confirma la hidrografía y los nombres asociados al territorio. Los trabajos de medicina y mujeres aportan contexto sobre parteras, cuerpo y tierra, pero no narran un episodio distinto ocurrido en Chuchún.`,
      `No se atribuye una etimología lingüística definitiva más allá de la explicación publicada, ni se convierte el entierro de placenta en prueba de una práctica prehispánica intacta. Tampoco se fija un punto GPS exacto.`,
    ),
    leccion:
      "El agua enlaza nacimiento, trabajo familiar y continuidad comunitaria.",
    similitudes: similarities(
      `Los manantiales entendidos como lugares de nacimiento y cuidado aparecen en muchas sociedades andinas. El entierro de la placenta también posee paralelos amplios, pero aquí la comparación debe permanecer anclada en Chuchún y en los saberes atribuidos a parteras de Panán.`,
      `Guamurran, Cualchio y Cuaichala son otros núcleos de agua de la colección. Guamurran alimenta varias comunidades; Cualchio se relaciona con granizo y caudal; Cuaichala abastece el acueducto y la religiosidad popular. Chuchún se distingue por las tres quebradas, los baños y la memoria de parto y trabajo transfronterizo.`,
      `La unión de corrientes podría compararse con relatos de ríos hermanos, pero la fuente no personifica Aucué, Lájaro y Guacales. La edición mantiene su dimensión territorial e histórica.`,
    ),
    excerpt:
      "En Chuchún se unen Aucué, Lájaro y Guacales, junto a memorias de baño, trabajo y nacimiento.",
    seoTitle: "Chuchún y las tres quebradas de Panán",
    seoDescription:
      "Conoce Chuchún, la unión de Aucué, Lájaro y Guacales y sus memorias de agua, trabajo, partería y comunidad.",
    focusKeywords: [
      "Chuchún Panán",
      "tres quebradas",
      "Aucué Lájaro Guacales",
      "pueblo Pastos",
      "memoria territorial",
    ],
    tags: ["agua", "comunidad", "memoria", "tradición"],
    sourceKeys: [...commonSourceKeys, "medicinaMujerTerritorio2020"],
    imagePromptHorizontal: horizontalPrompt(
      "tres quebradas altoandinas llamadas Aucué, Lájaro y Guacales confluyen entre chaparros, caminos de familias y cultivos de Panán, sin personificar las corrientes",
    ),
    imagePromptVertical: verticalPrompt(
      "desde nacimientos de agua templada hasta la confluencia de tres quebradas, manos de una partera depositan simbólicamente una placenta bajo tierra sin mostrar parto",
    ),
    researchNotes: `FORMA: memoria de lugar, no cuento inventado.
NÚCLEOS: agua templada, tres quebradas, trabajo hacia Ecuador y placentas.
GEOGRAFÍA: coordenada comunitaria aproximada.
${visualRule}`,
  }),
  definePananMyth({
    slug: "el-chutun",
    title: "El Chutún, cuidador de la chagra",
    mito: `En las chagras de Panán crece el checher, una planta cuyo fruto se parece al capulí. Sus ramas pueden formar hileras o cercos naturales, y en ellas habita el Chutún. Los mayores lo describen como un espíritu cuidador de la chagra y, a veces, como un duendecillo que no necesita mostrarse mientras el equilibrio del lugar se mantiene.

Una persona puede acercarse al checher y comer sus frutos. Si toma solo lo necesario y deja viva la planta, el Chutún no causa inconveniente. La fruta es alimento y puede compartirse. El problema empieza cuando alguien arranca ramas, pisa los brotes o destruye la planta después de recoger.

Entonces el cuidador defiende su comida preferida. No aparece con una forma única ni con rasgos humanos definidos. Puede dejarse ver como un animal de aspecto desagradable, suficiente para asustar al visitante y hacerlo abandonar la chagra. La aparición no entrega un tesoro ni persigue a quien se marcha: interrumpe la destrucción.

El contacto con el Chutún también se relaciona con el espanto y el ojeado. La fuente señala especialmente a los niños, quienes pueden enfermar después de encontrarse con su presencia. La familia reconoce malestar y miedo, y acude a un médico tradicional para restablecer a la persona. El relato no describe una receta universal; pone el cuidado dentro de una relación comunitaria.

Así, el Chutún no prohíbe entrar a la chagra ni comer un fruto. La diferencia está en la manera de hacerlo. Tomar sin destruir conserva la convivencia. Dañar por descuido o exceso activa la defensa del lugar.

Entre cercos vivos, frutos oscuros y cultivos altoandinos, el pequeño cuidador recuerda que la chagra no es un depósito inerte. Tiene alimentos, límites y relaciones. Quien cosecha participa de ellas; quien destruye encuentra una presencia que lo obliga a retirarse. El cerco vivo conserva esa regla incluso cuando nadie observa.`,
    historia: history(
      `El apartado “El Chutun” del corpus principal es breve y preciso: lo identifica como espíritu cuidador de la chagra, lo sitúa en plantas de checher, permite comer sin destruir y describe su defensa mediante una apariencia animal que aparta al agresor.`,
      `La revisión elimina diálogos, nombres de niños y pruebas dramáticas que no aparecen en la fuente. La referencia al ojeado se documenta como categoría cultural y no como diagnóstico biomédico. La página no sustituye atención de salud ni ofrece una receta.`,
    ),
    versiones: versions(
      `La versión registrada alterna dos maneras de nombrarlo: espíritu cuidador y duendecillo. También admite distintas apariencias, pues puede manifestarse como un animal poco agradable. Esa variabilidad forma parte de un mismo núcleo ligado al checher.`,
      `El duende general de Panán comparte el tamaño pequeño y la capacidad de inquietar, pero se relaciona con música, caballos, quebradas y niños. El Chutún tiene una función más delimitada: protege la chagra y responde a la destrucción de una planta.`,
      `No se añade una especie zoológica concreta, no se afirma que cada planta tenga un Chutún individual y no se presenta la enfermedad infantil como castigo comprobable. La fuente permite hablar de una presencia protectora, no reconstruir una cosmología total.`,
    ),
    leccion:
      "Tomar alimento sin destruir mantiene la relación justa con la chagra.",
    similitudes: similarities(
      `Los guardianes de cultivos y plantas aparecen en muchas tradiciones rurales e indígenas. El Chutún comparte con ellos la defensa de un recurso vivo, pero su rasgo documentado es específico: habita cerca del checher y tolera la cosecha cuidadosa.`,
      `La colección lo acerca al duende por la palabra “duendecillo” y al Cueche por la posibilidad de causar una afectación que atiende medicina tradicional. Sin embargo, el primero ronda varios espacios y el segundo se manifiesta como arco y clima. Solo el Chutún cuida de manera explícita la chagra.`,
      `Puede recordar fábulas sobre castigo a la codicia, aunque el relato no opone pobreza y riqueza ni exige renunciar a la fruta. Su límite es más concreto: no destruir aquello de lo que se come.`,
    ),
    excerpt:
      "El Chutún habita junto al checher y protege la chagra de quien toma sus frutos destruyendo la planta.",
    seoTitle: "El Chutún: cuidador de la chagra de Panán",
    seoDescription:
      "Lee el relato Pastos del Chutún, espíritu que permite cosechar el checher sin destruir y protege la chagra.",
    focusKeywords: [
      "Chutún de Panán",
      "cuidador de la chagra",
      "checher",
      "mitos del pueblo Pastos",
      "espíritu protector",
    ],
    tags: ["agricultura", "naturaleza", "protección", "espíritu"],
    sourceKeys: [...commonSourceKeys, "medicinaMujerTerritorio2020"],
    imagePromptHorizontal: horizontalPrompt(
      "una chagra de Panán con cercos de checher cargados de frutos; una figura pequeña y discreta protege la planta mientras una persona cosecha sin quebrar ramas",
    ),
    imagePromptVertical: verticalPrompt(
      "un cerco vivo de checher intacto divide la chagra; tras las hojas se sugiere al Chutún como pequeño guardián, sin monstruo genérico ni escena de ataque",
    ),
    researchNotes: `NÚCLEO: apartado 4.2.4.
LÍMITE: se retiran nombres, diálogos y aventuras no documentadas.
SALUD: ojeado como categoría cultural, no consejo clínico.
${visualRule}`,
  }),

  definePananMyth({
    slug: "el-cualchio-y-la-olla-del-granizo",
    title: "El Cualchio y la Olla del Granizo",
    mito: `El Cualchio nace en una olla, también descrita como ojo de agua, rodeada por alturas cubiertas de arbustos. Las laderas forman un recinto húmedo y difícil de atravesar. Desde allí sale el río que lleva el mismo nombre y se incorpora a la red de aguas de Panán.

Los mayores relacionan ese punto con la precipitación. Dicen que allí nace o aparece el granizo. Durante las temporadas de invierno, la olla recoge niebla, lluvia y frío; el granizo golpea la vegetación y el agua aumenta. No se trata de una vasija enterrada ni de un personaje que arroja hielo: “olla” nombra la forma del terreno y “ojo” su condición de nacimiento.

Los montes conservan plantas nativas. La fuente enumera arrayán, cerote, león, encino, cuaza, amarillo y caspimote, entre otras. El suelo pantanoso y la cobertura espesa dificultan el acceso. Esa dificultad protege parcialmente el nacimiento, aunque no lo vuelve un lugar ajeno a la comunidad.

Cuando los arroyos que recorren el territorio pierden caudal, personas de Panán visitan el Cualchio. El texto no ofrece una ceremonia detallada ni palabras secretas. Registra que se va al lugar cuando se necesita aumentar el agua. La visita reconoce una relación entre la olla alta y las corrientes que llegan a veredas y cultivos.

El granizo puede dañar una cosecha, pero la fuente también lo sitúa dentro del ciclo que produce fuentes de agua. El Cualchio no queda reducido a amenaza ni a reserva utilitaria. Es monte, pantano, vegetación, precipitación y nacimiento.

La memoria del lugar enseña a mirar el clima desde su recorrido territorial. El agua no empieza en la llave o en la acequia: viene de una altura húmeda, de arbustos que la retienen y de una olla donde lluvia y granizo adquieren caudal. Visitar el Cualchio es volver hacia ese origen.`,
    historia: history(
      `“El Cualchio y la Olla del Granizo” es otro apartado descriptivo del corpus de 2016. Sus datos comprobables son el ojo de agua entre alturas, el origen del río Cualchio, la asociación oral con granizo, el monte nativo y las visitas cuando disminuye el caudal.`,
      `La versión heredada añadía una expedición ceremonial y acciones que la fuente no detalla. La nueva página no convierte el topónimo en un recipiente literal ni atribuye frases a mayores sin nombre. Mantiene la brevedad documental y explica el lugar sin rellenarlo con fantasía.`,
    ),
    versiones: versions(
      `La fuente usa de forma paralela “olla” y “ojo de agua”. También formula con cautela la relación con el granizo: según la oralidad de los mayores, es el sitio donde nace la precipitación o donde aparece el granizo. La edición conserva ambas expresiones.`,
      `La memoria territorial enumera especies vegetales y señala que se visita el lugar para aumentar el caudal. La memoria digital del resguardo confirma al Cualchio dentro de su hidrografía, pero no aporta un segundo relato de origen.`,
      `No se publica un ritual reconstruido, no se promete que una visita produzca lluvia y no se atribuye una localización exacta. El núcleo es una relación oral y territorial con agua y clima, no una explicación meteorológica.`,
    ),
    leccion:
      "Cuidar el nacimiento del agua es cuidar también los ciclos del clima.",
    similitudes: similarities(
      `Los ojos de agua vinculados con lluvia, granizo o regulación del clima forman parte de diversas territorialidades andinas. El Cualchio comparte esa asociación, pero la lista de plantas, el suelo pantanoso y su relación con los arroyos de Panán lo vuelven un lugar concreto.`,
      `Guamurran también es una ciénaga de origen y Cuaichala abastece el acueducto. A diferencia de ellos, Cualchio se identifica específicamente con la Olla del Granizo y con visitas orientadas a recuperar caudal. María Panana es una laguna de armonización, no el mismo sitio.`,
      `La palabra “olla” puede recordar calderas mágicas de cuentos, pero aquí designa una forma altoandina del terreno. Representarla como vasija o atribuirle un dueño fantástico alteraría el registro.`,
    ),
    excerpt:
      "En la Olla del Granizo nace el Cualchio, entre monte nativo, pantano, lluvia y memoria de los mayores.",
    seoTitle: "El Cualchio y la Olla del Granizo de Panán",
    seoDescription:
      "Conoce el ojo de agua del Cualchio, su relación con el granizo, las plantas nativas y el caudal del territorio de Panán.",
    focusKeywords: [
      "Olla del Granizo",
      "río Cualchio",
      "ojo de agua Panán",
      "pueblo Pastos",
      "lugares sagrados",
    ],
    tags: ["agua", "naturaleza", "rituales", "tradición oral"],
    sourceKeys: [...commonSourceKeys, "lugaresSagradosIcanh"],
    imagePromptHorizontal: horizontalPrompt(
      "una olla natural altoandina cubierta por arrayán, encino y arbustos recibe lluvia y granizo; de su ojo de agua nace el Cualchio hacia Panán, sin vasija literal",
    ),
    imagePromptVertical: verticalPrompt(
      "desde el granizo entre montes húmedos hasta un nacimiento pantanoso y el río Cualchio que baja hacia las veredas, sin ceremonia inventada",
    ),
    researchNotes: `FORMA: descripción territorial breve, sin trama añadida.
NÚCLEO: ojo de agua, granizo, monte nativo y aumento del caudal.
GEOGRAFÍA: no se publica una coordenada exacta.
${visualRule}`,
  }),

  definePananMyth({
    slug: "el-cucho-de-cuaichala-y-la-bajada-del-palo-santo",
    title: "Cucho de Cuaichala y el palo santo",
    mito: `Al pie del páramo, entre El Colorado y El Vicundo, se encuentra el Cucho de Cuaichala. El lugar se conecta con Agua Blanca y reúne nacimientos que han alimentado al poblado de Panán. “Cucho”, explica la fuente desde el uso local del quichua, nombra un rincón, un espacio apartado o una cima; la palabra sigue viva en el habla cotidiana.

Hace varias décadas Cuaichala era un monte espeso. Allí nacía la quebrada Guacales, que recorre el resguardo de occidente a oriente. Del mismo sector se tomaron aguas para el acueducto que abastece cinco veredas. El ojo de agua ha permanecido incluso después de que gran parte del monte fuera convertida en potreros y cultivos.

La memoria religiosa de Panán sitúa allí una aparición de la Virgen de las Mercedes. En el lugar se encontró el madero llamado palo santo. La comunidad bajó la madera del Cucho y la envió a San Antonio de Ibarra para que fuera tallada. De ella habría surgido la imagen que hoy se reconoce como patrona del resguardo y de sus habitantes católicos.

Alrededor de esa memoria se formó una “tradición santificada”. Música, danza, sanjuanes, danzantes, el personaje del Negro, la mula, sacrificios y pagamentos se encuentran en la religiosidad popular. El catolicismo y las prácticas territoriales no aparecen como dos bloques sin contacto; la fuente nombra expresamente su sincretismo.

La bajada del palo santo une monte, agua, trabajo comunitario y devoción. La madera pasa de un nacimiento del territorio a manos de talladores en Ibarra y regresa como imagen. La quebrada sigue otro trayecto: baja hacia las veredas y sostiene la vida diaria.

El relato no oculta el cambio ambiental. El monte que dio el madero fue deforestado y hoy predominan potreros. El ojo de agua que todavía abastece a la comunidad recuerda que la tradición religiosa depende también de conservar el lugar material del que nació.`,
    historia: history(
      `El corpus principal documenta Cuaichala como referente de religiosidad popular y abastecimiento. Registra la visión de la Virgen, el hallazgo y traslado del madero, la talla en San Antonio de Ibarra, la quebrada Guacales, el acueducto y la deforestación posterior.`,
      `La página no afirma que la talla sea un hecho arqueológicamente probado ni presenta el sincretismo como mezcla incompleta. Conserva la formulación comunitaria y diferencia la leyenda del palo, la infraestructura de agua observada y la interpretación académica sobre religiosidad.`,
    ),
    versiones: versions(
      `Una formulación del corpus pone el énfasis en la aparición de la Virgen de las Mercedes y en el madero enviado a Ibarra. Otra descripción del mismo apartado resalta que allí nace Guacales y que las aguas abastecen cinco veredas. Son dimensiones religiosas y territoriales de un núcleo, no relatos incompatibles.`,
      `La investigación llama “tradición santificada” al conjunto de música, danza, sanjuanes, danzantes, Negro, mula, sacrificios y pagamentos. La edición conserva esa lista como interpretación del trabajo, sin convertir cada práctica en episodio de la bajada.`,
      `No se atribuye una fecha exacta a la aparición o la talla. Tampoco se reconstruye el aspecto del árbol ni de la primera imagen. El cambio del monte a potreros se incluye porque la fuente lo documenta.`,
    ),
    leccion:
      "La devoción permanece ligada al agua, al monte y al cuidado del lugar.",
    similitudes: similarities(
      `Las imágenes católicas halladas en árboles, piedras o aguas aparecen en muchas leyendas latinoamericanas. Cuaichala comparte ese patrón, pero su memoria se sitúa en el palo bajado del páramo, la talla en Ibarra y la patrona de Panán.`,
      `Chuchún, Cualchio y Guamurran también describen nacimientos de agua; ninguno reúne del mismo modo acueducto y Virgen de las Mercedes. La Basílica encantada contiene una construcción que parece capilla, pero su función es desconocida y no debe integrarse a esta leyenda.`,
      `El término sincretismo permite reconocer contactos históricos, aunque no autoriza a dividir la historia entre una capa “pura” indígena y otra externa. La memoria actual pertenece a la comunidad que la transmite.`,
    ),
    excerpt:
      "Del Cucho de Cuaichala bajaron el palo santo asociado con la Virgen de las Mercedes y las aguas de Panán.",
    seoTitle: "Cuaichala y el palo santo de Panán",
    seoDescription:
      "Conoce la memoria del Cucho de Cuaichala, el palo santo de la Virgen de las Mercedes, la quebrada Guacales y el acueducto.",
    focusKeywords: [
      "Cucho de Cuaichala",
      "palo santo Panán",
      "Virgen de las Mercedes",
      "quebrada Guacales",
      "religiosidad Pastos",
    ],
    tags: ["agua", "fe", "sincretismo", "tradición"],
    sourceKeys: [...commonSourceKeys, "lugaresSagradosIcanh"],
    imagePromptHorizontal: horizontalPrompt(
      "comuneros bajan un madero sobrio desde el monte húmedo de Cuaichala junto al nacimiento de Guacales; al fondo Panán, sin aparición europea espectacular",
    ),
    imagePromptVertical: verticalPrompt(
      "el ojo de agua de Cuaichala baja hacia cinco veredas mientras un palo santo viaja hacia Ibarra para ser tallado, con música y danza apenas sugeridas",
    ),
    researchNotes: `NÚCLEO: lugar de agua y religiosidad popular.
TRANSMISIÓN: se explicita el sincretismo católico-Pastos.
AMBIENTE: se conserva el dato de la deforestación.
${visualRule}`,
  }),

  definePananMyth({
    slug: "el-cueche",
    title: "El Cueche, hijo del agua y el sol",
    mito: `Después de una llovizna, cuando el sol vuelve a iluminar el territorio, aparece el Cueche. Los mayores de Panán lo nombran como espíritu hijo del agua y del sol. Su arco engalana el paisaje y anuncia un cambio: puede indicar la llegada del invierno y un “páramo cosechero”, tiempo asociado con abundancia y buena cosecha.

No todos los Cueches se recuerdan iguales. Además del arco de muchos colores, se habla de Cueche colorado, negro y blanco. Esas formas son consideradas especialmente bravas. El ser reúne belleza y riesgo; mirar sus colores no significa que sea inofensivo ni que pueda cruzarse sin precaución.

La memoria habla del “ojeado” o “meado” del Cueche. Se le atribuyen cabello blanqueado, granos, fiebre y malestar. En mujeres puede relacionarse con inflamación del vientre que parece embarazo y se prolonga durante años. Dentro de la medicina propia, yerbateros y parteras son quienes reconocen y atienden esa afectación.

En ciertos lugares húmedos, las mujeres cubren su cabeza cuando aparece el arco. Algunas trazan una cruz en la tierra con el machete y repiten una invocación católica para apartarlo de la vista. El gesto revela una transmisión donde el espíritu del agua y el sol convive con palabras cristianas. La fuente no los separa en dos relatos.

El Cueche tampoco es solamente una enfermedad. Antes de la amenaza aparece como señal climática y promesa de cosecha. Su presencia recuerda que agua y sol actúan juntos: hacen visible el arco, alimentan cultivos y también exigen cuidado.

Cuando la lluvia y la luz coinciden sobre Panán, el paisaje abre un límite de colores. Quien lo observa puede leer temporada, abundancia, humedad o peligro. El Cueche mantiene todas esas posibilidades sin quedar reducido a un fenómeno físico ni a un monstruo. Su arco enlaza cielo, suelo húmedo y expectativa de cosecha.`,
    historia: history(
      `El corpus de 2016 dedica un apartado al Cueche y otro al sitio de la Lechuza y el Cuichi de Cuchicuelan. Esta página reúne la caracterización general: hijo del agua y el sol, anuncio de invierno, colores bravos, ojeado y atención por yerbateros y parteras.`,
      `Las dolencias se presentan como categorías de medicina tradicional, no como explicación médica validada ni diagnóstico. La edición tampoco sustituye al Cueche por la palabra “arcoíris”: registra la relación sin afirmar que sean conceptos equivalentes en todos sus sentidos.`,
    ),
    versiones: versions(
      `Una versión enfatiza al Cueche como señal favorable de invierno, abundancia y cosecha. Otra se concentra en el peligro del colorado, negro o blanco y en síntomas atribuidos al ojeado. La belleza climática y la afectación coexisten en el mismo apartado.`,
      `En Cuchicuelan aparece como Cuichi asentado en un lugar de agua profunda, serpientes, ranas, lagartijas y mariposas. Allí se documenta además cubrir la cabeza, cortar una cruz con machete y repetir una oración. Esa memoria situada conserva su propia página.`,
      `No se afirma que toda inflamación, fiebre o cambio de cabello provenga del Cueche. Tampoco se enseña el gesto ritual como tratamiento. Se atribuyen las afirmaciones a la memoria publicada y se remite la atención de salud al ámbito correspondiente.`,
    ),
    leccion:
      "La abundancia también pide respeto por las fuerzas que la hacen posible.",
    similitudes: similarities(
      `Arcos de colores asociados con lluvia, sol, puentes o seres poderosos aparecen en numerosas tradiciones. El Cueche de Panán se distingue por anunciar un páramo cosechero y por las categorías de ojeado atendidas por yerbateros y parteras.`,
      `El Cuichi de Cuchicuelan es su manifestación territorial más cercana. Cualchio también relaciona clima y agua, pero mediante granizo y un ojo de agua. La Laguna de María Panana comparte la doble condición de sanación y peligro sin ser una forma del Cueche.`,
      `La oración católica y la cruz trazada en tierra muestran una historia de contacto religioso. Compararlas con exorcismos genéricos borraría el lugar y la agencia de las mujeres que la fuente registra.`,
    ),
    excerpt:
      "Hijo del agua y el sol, el Cueche anuncia cosecha y también una afectación atendida por medicina propia.",
    seoTitle: "El Cueche de Panán: agua, sol y cosecha",
    seoDescription:
      "Conoce al Cueche del pueblo Pastos: señal de invierno y abundancia, colores bravos y memoria de cuidado tradicional.",
    focusKeywords: [
      "Cueche de Panán",
      "hijo del agua y el sol",
      "páramo cosechero",
      "medicina tradicional Pastos",
      "mitos de Panán",
    ],
    tags: ["agua", "espíritu", "naturaleza", "tradición oral"],
    sourceKeys: [...commonSourceKeys, "medicinaMujerTerritorio2020"],
    imagePromptHorizontal: horizontalPrompt(
      "un arco Cueche nace donde coinciden lluvia y sol sobre páramo, chagras y agua de Panán; comuneras se cubren la cabeza con sobriedad, sin figura ceremonial inventada",
    ),
    imagePromptVertical: verticalPrompt(
      "del agua asciende un arco de colores hacia el sol mientras abajo una partera observa cultivos y plantas medicinales, sin representar enfermedad corporal",
    ),
    researchNotes: `NÚCLEOS: señal climática, abundancia, colores bravos y ojeado.
SALUD: categorías culturales, no consejo clínico.
RELACIÓN: Cuchicuelan permanece como página territorial separada.
${visualRule}`,
  }),

  definePananMyth({
    slug: "la-basilica-encantada",
    title: "La Basílica encantada",
    mito: `En la vereda El Espino, sector El Paraíso, hay una formación de piedra conocida como la Basílica encantada. Se encuentra dentro de una finca recuperada por habitantes de Panán. El nombre sugiere un gran templo, pero el lugar no corresponde a una basílica construida y documentada con torres, altar o campanas.

Quienes han podido entrar hablan de oscuridad. Numerosos murciélagos ocupan el interior y el paso exige acostumbrar la vista. Las piedras forman espacios que se asemejan a una capilla. Hay particiones pequeñas, algunas con capacidad apenas para dos o tres personas.

La semejanza no resuelve su origen. La fuente no identifica quién organizó las piedras, cuándo lo hizo ni para qué se usaron los compartimentos. Tampoco registra una ceremonia, un tesoro o una aparición dentro. Su carácter “encantado” está en la combinación de forma, oscuridad, animales y preguntas aún abiertas.

El predio hace parte de la historia de recuperación territorial. Después quedó en usufructo de un comunero. La investigación lamenta el desinterés de autoridades indígenas por estudiar el lugar, una valoración de sus autores que debe distinguirse de una conclusión comunitaria definitiva.

Al acercarse, la vegetación y el relieve ocultan las entradas. Dentro, el aire cambia y el vuelo de los murciélagos amplifica cualquier sonido. Las pequeñas divisiones permiten imaginar usos, pero la memoria responsable se detiene antes de escoger uno sin pruebas.

La Basílica conserva así un misterio concreto. No necesita una procesión fantasma ni un sacerdote desaparecido para resultar significativa. Está ligada a una finca recuperada, a una arquitectura o formación pétrea no explicada y a la decisión pendiente de investigar sin dañar.

Los murciélagos continúan ocupando el espacio mientras la comunidad decide cómo conocerlo sin alterar sus condiciones.

El encanto no ofrece una respuesta cerrada. Obliga a mirar, proteger y reconocer cuánto se ignora sobre un lugar que forma parte del territorio de Panán.`,
    historia: history(
      `El apartado de 2016 aporta pocos datos y declara expresamente que no se conoce la finalidad del sitio. La versión anterior rellenaba ese vacío con una iglesia completa y una leyenda dramática. La revisión conserva oscuridad, murciélagos, piedra, particiones y finca recuperada.`,
      `No se llama “ruina prehispánica”, iglesia colonial ni cueva natural porque ninguna de esas clasificaciones está demostrada en las fuentes consultadas. La palabra basílica se mantiene como nombre local y la apreciación sobre desinterés se atribuye a la investigación.`,
    ),
    versiones: versions(
      `La memoria publicada coincide en que el lugar es oscuro, contiene murciélagos, está hecho o conformado por piedra y se parece a una capilla con divisiones pequeñas. No incluye versiones narrativas sobre su construcción o encantamiento.`,
      `La historia territorial de Panán permite situar la finca dentro de procesos de recuperación, pero no aclara la función de la estructura. Las fuentes institucionales ubican el resguardo y su paisaje; tampoco resuelven la pregunta.`,
      `La edición no presenta hipótesis como hechos. No añade túneles, altares, prisioneros, misas o tesoros. La ausencia de una explicación queda visible como parte esencial del expediente.`,
    ),
    leccion:
      "Proteger un lugar también significa admitir lo que aún no conocemos.",
    similitudes: similarities(
      `Cuevas y formaciones pétreas llamadas iglesias, capillas o basílicas aparecen en distintos paisajes colombianos. La semejanza formal suele producir relatos de encantamiento, pero en Panán la fuente solo documenta el nombre, la estructura y el misterio.`,
      `La Tuta también es un espacio oscuro de profundidad y conexión, aunque posee una memoria de origen mucho más desarrollada. Las Huacas involucran entierros y apariciones; no hay base para trasladar sus tesoros a la Basílica.`,
      `Compararla con arquitectura europea puede ayudar a entender el nombre, no a dibujar una catedral completa. La imagen futura debe representar una formación baja de piedra integrada al territorio.`,
    ),
    excerpt:
      "Una estructura oscura de piedra y murciélagos, parecida a una capilla, guarda una función todavía desconocida.",
    seoTitle: "La Basílica encantada de Panán",
    seoDescription:
      "Conoce la estructura de piedra llamada Basílica encantada, sus murciélagos, pequeñas divisiones y el misterio que aún conserva.",
    focusKeywords: [
      "Basílica encantada Panán",
      "El Espino El Paraíso",
      "lugar de piedra",
      "murciélagos",
      "memoria territorial Pastos",
    ],
    tags: ["misterio", "piedra", "memoria", "murciélagos"],
    sourceKeys: [...commonSourceKeys, "lugaresSagradosIcanh"],
    imagePromptHorizontal: horizontalPrompt(
      "una formación baja de piedra integrada a una finca recuperada de Panán, con entrada oscura y murciélagos; parece capilla sin ser iglesia europea completa",
    ),
    imagePromptVertical: verticalPrompt(
      "interior sobrio de piedra con pequeñas particiones y murciélagos que cruzan hacia la luz de una entrada vegetal, sin altar, campanas ni sacerdote",
    ),
    researchNotes: `FORMA: expediente de lugar con función desconocida.
LÍMITE: se retira la iglesia monumental y cualquier trama inventada.
PENDIENTE: la fuente reclama investigación, no ofrece una identificación.
${visualRule}`,
  }),

  definePananMyth({
    slug: "la-cangagua-o-la-chorrera-del-duende",
    title: "La Cangagua y la Chorrera del Duende",
    mito: `En la vereda La Merced, por el camino hacia Romerillo, El Vicundo, La Montañuela y El Tambillo, hay un rincón conocido como la Cangagua o la Chorrera del Duende. La cascada se pierde entre matorrales y el paso era considerado pesado, sobre todo a ciertas horas de la noche.

José Tarapues, comunero de Panán, contó una experiencia ocurrida cuando cuidaba ganado con su padre en Monte Oscuro. Su padre ya se encontraba arriba. Él se quedó tomando un hervido con amigos y, cuando miró la hora, eran cerca de las once de la noche.

Tenía listo el caballo y emprendió el camino. Al acercarse a la Cangagua, el animal se negó a avanzar. Tarapues pensó primero que le había dado chaqué. Bajó de la montura, pero el caballo empezó a retroceder como si algo lo asustara. El miedo del jinete creció mientras el lugar permanecía oscuro.

Decidió no forzarlo. Lo amarró a unas plantas y regresó por donde había venido. A la mañana siguiente volvió preocupado por el caballo y por la montura. Temía que alguien se los hubiera llevado.

El animal seguía exactamente donde lo había dejado. Sin embargo, la crin del cuello y toda la cola estaban cuidadosamente trenzadas y enredadas. Tarapues subió a contarle a su padre. Él interpretó lo ocurrido: el duende había salido en la Cangagua.

La experiencia no describe al ser ni afirma que el jinete lo viera. La presencia se reconoce por la conducta del caballo, el límite del camino y las trenzas aparecidas durante la noche. El relato conserva también el cambio del lugar: antes la chorrera era grande y estaba cubierta por muchas ramas; después quedó más despejada.

La Cangagua sigue siendo sitio de historias, conversaciones y reflexiones. El camino cotidiano, la cascada y el caballo convierten una noche de regreso en memoria compartida del territorio.`,
    historia: history(
      `A diferencia de otras entradas breves, esta página se apoya en un testimonio atribuido: José Tarapues fue entrevistado en marzo de 2014. La edición mantiene la secuencia del hervido, las once de la noche, el caballo que retrocede, el regreso matutino y las crines trenzadas.`,
      `No se afirma que el duende fuera visto ni se inventa su voz. La conclusión pertenece al padre del narrador. También se conserva la transformación ambiental de la chorrera, antes más cubierta, porque muestra que la memoria se vincula con un paisaje cambiante.`,
    ),
    versiones: versions(
      `El testimonio de Tarapues constituye la versión principal y situada. El caballo se niega a pasar, queda amarrado y al amanecer aparece con crin y cola trenzadas. La atribución al duende llega después, en la conversación con su padre.`,
      `El apartado general del duende confirma que las travesuras con caballos y las trenzas forman parte de su memoria en Panán. Aporta un patrón comunitario, pero no debe reemplazar los detalles personales de Cangagua.`,
      `La expresión chaqué se conserva como la primera explicación del narrador, sin definirla como diagnóstico. No se añaden luces, risas, música, persecución ni un encuentro cara a cara que el testimonio no contiene.`,
    ),
    leccion:
      "Detenerse ante una señal puede ser más sabio que forzar el camino.",
    similitudes: similarities(
      `Caballos que se detienen ante un lugar y amanecen trenzados aparecen en relatos de duendes de varias regiones. En Cangagua, el valor documental está en la voz de José Tarapues, el camino preciso y la interpretación transmitida por su padre.`,
      `La página del duende reúne otras apariciones en quebradas, alcantarillas y juegos infantiles. Cangagua no es un ser diferente, sino un lugar y un testimonio específico que merece conservar su atribución.`,
      `La Entundada también hace perder el camino y La Viuda conduce hacia chorreras, pero aquí nadie gira en círculos ni sigue una figura femenina. El caballo marca el límite antes de que el jinete se pierda.`,
    ),
    excerpt:
      "Un caballo se negó a cruzar la Cangagua y amaneció con crin y cola trenzadas: señal atribuida al duende.",
    seoTitle: "La Cangagua y la Chorrera del Duende",
    seoDescription:
      "Lee el testimonio de José Tarapues sobre el caballo que se negó a cruzar la Cangagua y amaneció trenzado.",
    focusKeywords: [
      "Cangagua Panán",
      "Chorrera del Duende",
      "caballo trenzado",
      "José Tarapues",
      "mitos del pueblo Pastos",
    ],
    tags: ["duende", "agua", "misterio", "tradición oral"],
    sourceKeys: [...commonSourceKeys, "origenPananes"],
    imagePromptHorizontal: horizontalPrompt(
      "de noche un caballo se detiene y retrocede ante una cascada cubierta de matorral en La Merced; el jinete baja sin ver al duende",
    ),
    imagePromptVertical: verticalPrompt(
      "al amanecer José encuentra su caballo aún amarrado junto a la chorrera, con crin y cola cuidadosamente trenzadas, sin mostrar un duende frontal",
    ),
    researchNotes: `TESTIMONIO: José Tarapues, marzo de 2014.
ATRIBUCIÓN: el padre interpreta la señal como obra del duende.
LÍMITE: no hubo avistamiento directo.
${visualRule}`,
  }),
];

export const pananMythsBySlug = Object.fromEntries(
  recordList.map((record) => [record.slug, record]),
);

if (Object.keys(pananMythsBySlug).length !== recordList.length) {
  throw new Error("Hay expedientes de Panán duplicados.");
}

const records = canonicalPananSlugs.map((slug) => {
  const record = pananMythsBySlug[slug];
  if (!record) throw new Error(`Falta el expediente canónico ${slug}.`);
  return record;
});

if (records.length !== recordList.length) {
  throw new Error("Hay expedientes de Panán fuera del universo canónico.");
}

export default records;
