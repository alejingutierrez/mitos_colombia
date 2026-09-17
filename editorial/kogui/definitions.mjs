function myth({
  title,
  summary,
  tags,
  sourceMode = "corpus",
  ...definition
}) {
  const seoTitle = `${title} | Kogui`;
  const focusKeywords = [title, "mitos Kogui", ...tags.slice(0, 3)];
  return {
    ...definition,
    title,
    summary,
    tags,
    sourceMode,
    excerpt: summary,
    seoTitle,
    seoDescription: summary,
    focusKeywords,
  };
}

export const koguiDefinitions = [
  myth({
    slug: "creacion-koguis",
    title: "La Madre y las nueve tierras",
    summary:
      "La Madre existía en Aluna antes del amanecer y preparó nueve tierras hasta que la tierra negra y fértil pudo sostener la vida Kogui.",
    tags: ["creación", "Madre", "Aluna", "nueve tierras"],
    mito: `Al principio solo estaba la Madre. No había Sol, Luna, gente, animales ni plantas. Todo existía en pensamiento, dentro de Aluna, y alrededor había oscuridad y agua. La Madre era memoria y posibilidad antes de que el mundo tuviera una forma visible. El relato no comienza con una batalla: comienza con un orden que primero debe ser pensado.

En ese tiempo aparecieron padres antiguos cuyos nombres varían en las transcripciones: Sintana, Seukukui, Seraira y Kimaku figuran entre quienes intervienen en la formación del mundo. Ellos fueron preparando espacios, palabras y relaciones. En una secuencia, el agua todavía no podía beberse y la tierra carecía de la firmeza necesaria para caminar. Los padres trabajaron hasta separar lugares y disponer lo que después sería visible.

La Madre tenía nueve hijas vinculadas con nueve tierras. No todas servían de la misma manera para sembrar y vivir. Los padres buscaron la tierra negra y fértil, pero la Madre no la entregó de inmediato. El episodio se cuenta como una obtención mediante canto y música: los padres hicieron sonar sus instrumentos, atrajeron a las hijas y lograron llevar la tierra adecuada. No se trata de conquistar una mujer ni de robar un territorio histórico; en el lenguaje del relato, las tierras aparecen como hijas de la Madre y como cualidades del suelo.

Cuando la tierra negra quedó dispuesta, pudo comenzar la vida cultivada. El agua encontró caminos, el suelo se volvió habitable y las palabras permitieron reconocer lo creado. Las demás fichas de esta colección desarrollan episodios que pertenecen al mismo ciclo —el primer hombre y la primera mujer, Kimaku, los alimentos y el Sol—, pero no se funden aquí porque cada uno conserva una secuencia propia.

La versión revisada evita presentar los nueve niveles como planetas, infiernos o una pirámide universal. La fuente habla desde una cosmología Kogui situada en la Sierra Nevada. Aluna no se reduce a “vacío”: es el ámbito de pensamiento y origen desde el cual la Madre prepara la existencia. La tierra fértil no es un decorado; expresa que crear el mundo también significa volverlo apto para sostener relaciones, cultivos y generaciones.`,
    historyCore:
      "La ficha reúne el comienzo del ciclo cosmogónico y el episodio de las nueve tierras sin convertirlos en una cronología científica. Los nombres y la secuencia cambian entre relatores, de modo que la redacción atribuye los detalles al corpus y conserva su carácter oral.",
    versionCore:
      "Algunas síntesis hablan de nueve mundos superpuestos; otras destacan nueve hijas o tierras y la búsqueda de suelo negro. Son formulaciones conectadas, pero no idénticas. Aquí se mantiene la versión agrícola sin dibujar una arquitectura cósmica que la fuente no describe.",
    similarityCore:
      "La existencia pensada antes de hacerse visible puede recordar otras cosmogonías. En el relato Kogui, Aluna, la Madre, los padres antiguos y la tierra negra forman una secuencia propia vinculada con la Sierra y con la posibilidad de cultivar.",
    leccion:
      "La vida visible comienza en el pensamiento y necesita una tierra preparada para sostenerla.",
    sceneHorizontal:
      "la Madre en Aluna dispone nueve franjas de tierra alrededor de una tierra negra fértil, mientras ríos y cumbres apenas empiezan a tomar forma",
    sceneVertical:
      "una corriente desciende desde las cumbres hacia la tierra negra recién preparada, acompañada por nueve capas de color sobrio",
    researchNotes:
      "CORRECCIÓN: Aluna no se traduce como vacío ni sueño genérico. ESTRUCTURA: se separan los episodios posteriores para evitar una cosmogonía sintética.",
  }),
  myth({
    slug: "el-primer-hombre-y-la-primera-mujer",
    title: "El primer hombre y la primera mujer",
    summary:
      "Sintana transforma a Naowa y protege por separado a un niño y una niña, de quienes comienzan las primeras generaciones humanas.",
    tags: ["antropogénesis", "Sintana", "Naowa", "primera pareja"],
    mito: `Antes del amanecer, cuando la gente todavía no vivía sobre la tierra, Sintana y otros padres antiguos trabajaban dentro del orden de la Madre. Naowa daba a luz seres sin huesos y animales que no llegaban a establecer una descendencia humana. Algunas versiones dicen que ella devoraba a sus crías. La narración presenta así un tiempo incompleto: había nacimientos, pero todavía no existía la forma corporal y social de la gente.

Sintana esperó a que Naowa durmiera. Puso piedras dentro de su cuerpo o junto a él, según la traducción, para que aquello que naciera adquiriera firmeza. Después nació un niño. Sintana no lo dejó con Naowa, sino que lo llevó a una casa ceremonial y lo mantuvo oculto. Más adelante nació una niña y también fue llevada a otra casa. Ambos crecieron separados, bajo el cuidado de los padres.

Cuando alcanzaron la edad adecuada, el hombre y la mujer se encontraron. De su unión comenzaron las generaciones humanas. El relato continúa con la formación de parejas y grupos que darían origen a distintas gentes. No ofrece una lista única de linajes ni afirma que toda la humanidad contemporánea proceda de una sola pareja biológica; habla en el lenguaje de una primera organización del cuerpo, el parentesco y la vida colectiva.

La separación inicial importa. El niño y la niña no aparecen simplemente juntos en un jardín, sino que son protegidos en espacios ceremoniales antes de iniciar la reproducción. Las piedras también tienen una función precisa: introducir dureza y estructura en seres que antes nacían blandos. La ficha “Madre Wastora” conserva otra antropogénesis relacionada, con la creación de un hombre y una piedra de gente. Mantener ambas páginas permite reconocer la variación del corpus.

La revisión retira escenas románticas, nombres inventados para la pareja y comparaciones automáticas con Adán y Eva. Tampoco convierte la acción sobre Naowa en un procedimiento médico literal. El núcleo documentado es el paso entre nacimientos incompletos y humanidad organizada: Sintana interviene, los primeros niños adquieren cuerpo, crecen en casas distintas y después abren la continuidad de la gente.`,
    historyCore:
      "El episodio pertenece al ciclo de Naowa y Sintana y funciona como antropogénesis, no como descripción histórica del poblamiento de la Sierra. Su lenguaje sobre cuerpos blandos, piedras y casas ceremoniales requiere una lectura narrativa y ritual.",
    versionCore:
      "La creación del primer ser humano también se cuenta en la ficha Madre Wastora. Una versión destaca a Sintana y los dos niños separados; la otra, la materia con que la Madre forma al hombre y la piedra que posibilita la descendencia.",
    similarityCore:
      "Una primera pareja aparece en numerosos relatos de origen, pero aquí la semejanza termina pronto. Los niños nacen después de intervenir sobre Naowa, reciben firmeza mediante piedras y crecen por separado en casas ceremoniales antes de encontrarse.",
    leccion:
      "La continuidad humana requiere cuerpo, cuidado, tiempo y reglas para relacionar a las generaciones.",
    sceneHorizontal:
      "Sintana conduce por senderos separados a un niño y una niña hacia dos casas ceremoniales entre montañas y ríos",
    sceneVertical:
      "dos casas ceremoniales se miran desde laderas opuestas mientras la primera pareja adulta se encuentra en el valle",
    researchNotes:
      "CORRECCIÓN: se eliminan nombres de la pareja y romance inventados. VARIACIÓN: no se fusiona con Madre Wastora.",
  }),
  myth({
    slug: "madre-wastora",
    title: "Madre Wastora y la piedra de gente",
    summary:
      "La Madre forma al primer hombre con pensamiento, sangre y espíritu, y una piedra de gente permite que comiencen las generaciones.",
    tags: ["Madre Wastora", "origen humano", "piedra", "fertilidad"],
    mito: `Madre Wastora, llamada también Haba Naowa en las transcripciones, tenía hijas pero todavía no había un hombre con quien pudiera comenzar la descendencia humana. Entonces decidió formarlo. El relato enumera materias que no deben confundirse con una receta física: pensamiento o aluna, sangre menstrual y espíritu intervienen en la preparación del primer cuerpo.

Al comienzo el hombre era blando y carecía de huesos. La Madre continuó su trabajo hasta que pudo crecer y sostenerse. Cuando estuvo formado, lo unió con una de sus hijas. De esa pareja vendrían personas y pueblos, pero la continuidad no empezó de inmediato. Para hacer posible la generación, la Madre entregó o activó una piedra llamada ragaba-kuitse, descrita en la fuente como “piedra de gente”.

La piedra no aparece como estatua ni como amuleto genérico. Forma parte del paso entre una primera creación corporal y la capacidad de multiplicarse. Después se diferencian pueblos y lenguas. La narración no proporciona una tabla estable con todos sus nombres, y por eso la ficha no inventa una genealogía completa. Su interés está en la relación entre la Madre, las sustancias de origen, una hija, el primer hombre y la piedra que abre la reproducción.

Este relato se conecta con “El primer hombre y la primera mujer”, donde Sintana interviene sobre Naowa y protege por separado a dos niños. Las dos páginas no son contradictorias que deban corregirse entre sí. El corpus conserva más de una manera de hablar del surgimiento de la gente: una resalta casas ceremoniales y una primera pareja; esta destaca la fabricación del cuerpo y el poder generativo.

La revisión también evita convertir la sangre menstrual en impureza o en símbolo universal de sacrificio. Dentro de la secuencia es una materia creadora procedente de la Madre. Tampoco traduce ragaba-kuitse como piedra filosofal, semilla mineral o aparato mágico. La expresión se mantiene cercana a la fuente porque señala una categoría Kogui que no tiene equivalencia exacta en castellano.

Así, el nacimiento de la humanidad no ocurre mediante un gesto instantáneo. El cuerpo debe adquirir forma, la relación debe establecerse y la capacidad de dar continuidad a la gente debe ser habilitada.`,
    historyCore:
      "La ficha conserva una de las antropogénesis registradas en el tomo II. La traducción mezcla términos Kogui y explicaciones españolas; por eso mantiene Haba Naowa, Wastora y ragaba-kuitse visibles en vez de reemplazarlos por categorías religiosas externas.",
    versionCore:
      "Madre Wastora puede identificarse dentro del amplio ciclo de la Madre y Naowa, pero las grafías y funciones no son uniformes. La página sigue el episodio de la creación corporal y no afirma que todos los nombres maternos sean siempre intercambiables.",
    similarityCore:
      "Los seres humanos hechos con materias del cuerpo o con piedra tienen paralelos amplios. Aquí la combinación de aluna, sangre, espíritu, cuerpo inicialmente blando y ragaba-kuitse define una versión Kogui específica sobre la capacidad de generar gente.",
    leccion:
      "Crear humanidad no es solo formar cuerpos, sino hacer posible la continuidad entre generaciones.",
    sceneHorizontal:
      "Madre Wastora prepara la silueta del primer hombre con capas de pensamiento, sangre y espíritu junto a una piedra de gente",
    sceneVertical:
      "la piedra ragaba-kuitse ocupa el centro mientras una primera familia y varios caminos de pueblos aparecen alrededor",
    researchNotes:
      "LENGUAJE: la sangre menstrual se presenta como materia creadora, no como impureza. TÉRMINO: se conserva ragaba-kuitse.",
  }),
  myth({
    slug: "kimaku",
    title: "Kimaku y la búsqueda de compañía",
    summary:
      "Kimaku atraviesa encuentros peligrosos y transformaciones hasta hallar una compañera con quien puede comenzar la vida humana en la Sierra.",
    tags: ["Kimaku", "compañía", "transformación", "poblamiento"],
    mito: `Kimaku aparece en el corpus como un primer hombre relacionado con la preparación del mundo y de los cultivos. Estaba solo y necesitaba una compañera para que pudiera comenzar la gente. La búsqueda no avanza como un romance lineal. Distintas mujeres son puestas en su camino por un ser adverso, y cada encuentro encierra un peligro.

En una versión, una de esas figuras tiene dientes en los genitales; en otra, las amenazas aparecen como animales feroces o seres capaces de matarlo. La imagen pertenece a la fuente, pero no necesita ampliarse con detalles sensacionalistas. Expresa que la unión todavía no es segura ni fecunda y que Kimaku debe reconocer aquello que pone en riesgo su vida.

Terana interviene mediante engaño, disfraz o transformación, según la secuencia registrada. Kimaku consigue escapar de los encuentros que podían destruirlo. El relato acumula pruebas y sustituciones hasta que finalmente aparece una mujer con quien sí puede convivir. Entonces se abre la posibilidad de poblar la Sierra y de ordenar una vida que hasta ese momento permanecía incompleta.

La historia enlaza antropogénesis, sexualidad y territorio, pero no autoriza a presentar a las mujeres como peligrosas por naturaleza. Las figuras hostiles pertenecen a una fase primordial creada o manipulada por un adversario. La compañera final tampoco recibe en todas las versiones un nombre estable. Por eso la revisión no inventa una boda ceremonial, descendientes específicos ni una victoria masculina sobre un género entero.

Kimaku se menciona también en relatos sobre la creación y los alimentos. Esas conexiones explican por qué su búsqueda tiene consecuencias colectivas: no se trata solo de resolver la soledad de un personaje, sino de permitir que haya personas capaces de habitar el mundo preparado. Aun así, la página conserva este episodio como unidad propia.

La versión anterior del sitio convirtió las escenas en aventura épica y añadió emociones, diálogos y monstruos no documentados. Aquí se mantiene una narración sobria: un primer hombre, compañías engañosas, peligros corporales, la intervención de Terana, la salida de esas pruebas y una unión que hace posible la continuidad humana.`,
    historyCore:
      "El episodio de Kimaku fue transmitido con variantes internas y lenguaje sexual que las ediciones tempranas interpretaron desde categorías propias. La revisión conserva el motivo indispensable, pero evita convertirlo en espectáculo o diagnóstico sobre las mujeres Kogui.",
    versionCore:
      "Las amenazas pueden describirse como dientes corporales o como animales feroces, y la actuación de Terana cambia entre secuencias. Se mantienen ambas posibilidades declaradas sin fabricar una versión unificada que cierre todos los detalles.",
    similarityCore:
      "Las parejas peligrosas y las pruebas antes del poblamiento aparecen en otras tradiciones. La versión Kogui se reconoce por Kimaku, la intervención de Terana y su pertenencia a un ciclo donde crear cultivos, cuerpos y relaciones son tareas conectadas.",
    leccion:
      "La vida compartida solo puede comenzar cuando se distinguen el engaño, el peligro y la reciprocidad.",
    sceneHorizontal:
      "Kimaku cruza varios senderos de la Sierra mientras Terana desvía figuras animales amenazantes y al fondo aparece una compañera segura",
    sceneVertical:
      "Kimaku y su compañera final observan un valle habitable después de dejar atrás siluetas oscuras y caminos cerrados",
    researchNotes:
      "TRATAMIENTO: se conserva el motivo sexual sin detalle gráfico ni generalización misógina. VARIANTES: Terana y los peligros no se sintetizan artificialmente.",
  }),
  myth({
    slug: "incesto-de-padre-hija",
    title: "La unión prohibida que endureció la tierra",
    summary:
      "En un tiempo de suelo blando, una unión entre padre e hija precede al endurecimiento de la tierra y origina una prohibición para las generaciones.",
    tags: ["prohibición", "parentesco", "tierra", "origen"],
    mito: `En el tiempo primordial, la tierra todavía era blanda. No ofrecía la firmeza actual y la gente apenas aprendía las palabras y las reglas que ordenarían la vida. Los padres antiguos buscaban cómo establecer esas relaciones. En ese contexto ocurre una unión entre un padre y su hija.

La fuente no presenta el hecho como romance ni como ejemplo permitido. Después de la unión, la tierra se endurece. Nace una criatura descrita como blanda, enferma o incompleta, y la consecuencia sirve para mostrar que aquella relación no puede repetirse. Los mamas establecen desde entonces la prohibición entre padre e hija.

La secuencia combina dos cambios: el suelo adquiere consistencia y el parentesco adquiere una regla. No significa que el incesto haya sido una práctica histórica del pueblo Kogui ni que la dureza geológica de la Sierra dependa literalmente de un acto humano. Es un relato de un tiempo anterior al orden, donde una acción inaugural permite explicar por qué el presente debe ser diferente.

El título heredado reducía toda la página a “incesto” y podía atraer una lectura sensacionalista. La revisión hace visible la función narrativa: se trata de una unión que queda prohibida y de la formación simultánea de tierra y norma. Tampoco añade castigos sobrenaturales, persecuciones o culpabilidad psicológica que la transcripción no desarrolla.

El episodio conversa con otros relatos sobre cuerpos blandos. En “El primer hombre y la primera mujer” y “Madre Wastora”, los primeros seres también necesitan adquirir huesos o consistencia antes de continuar la humanidad. Aquí la blandura reaparece en la criatura nacida de una relación inadecuada. Esa resonancia no convierte las tres fichas en un solo mito; muestra que la firmeza corporal, territorial y social se piensa mediante imágenes relacionadas.

La palabra de los mamas cierra el episodio. Su prohibición no es una moraleja añadida por el editor, sino la explicación que ofrece el propio relato. Lo que pertenece al comienzo no se convierte en permiso para el presente. Al contrario, recordar la transgresión permite formular un límite preciso para proteger el parentesco y las generaciones futuras.`,
    historyCore:
      "La ficha procede de una narración breve cuyo asunto exige distinguir origen mítico y conducta social. Se conserva porque documenta cómo la fuente relaciona consistencia del mundo y regulación del parentesco, no porque describa una costumbre Kogui.",
    versionCore:
      "Las traducciones oscilan al describir a la criatura como blanda, enferma o mal formada. La variación no altera el desenlace: los mamas prohíben la unión y la etapa primordial queda separada del orden vigente.",
    similarityCore:
      "Los relatos de transgresiones fundadoras suelen explicar prohibiciones posteriores. En esta versión, la regla de parentesco se enlaza con la tierra antes blanda y con un cuerpo que no logra consolidarse, rasgos que deben leerse juntos.",
    leccion:
      "El recuerdo de una transgresión puede establecer límites que protegen el parentesco y las generaciones.",
    sceneHorizontal:
      "una tierra primordial pasa de capas blandas a suelo firme mientras dos senderos familiares se separan bajo la orientación de los mamas",
    sceneVertical:
      "un bastón de autoridad marca un límite entre generaciones sobre un suelo que acaba de adquirir consistencia",
    researchNotes:
      "TÍTULO: se evita el gancho sensacionalista. CONTEXTO: el relato origina una prohibición y no describe una práctica histórica.",
  }),
  myth({
    slug: "seiskwisbuche-y-yangauki",
    title: "Seiskwisbuche y Yanguaki",
    summary:
      "Nunula escapa de la explotación de Seiskwisbuche y Yanguaki permite derrotar al hombre que había quebrado las reglas de parentesco.",
    tags: ["Seiskwisbuche", "Yanguaki", "Nunula", "transgresión"],
    mito: `Seiskwisbuche había matado a su padre y vivía con su hermana. La transcripción sitúa desde el comienzo dos transgresiones graves: homicidio y ruptura del parentesco. Para poner fin a esa situación, los padres antiguos prepararon a Yanguaki, cuyo nombre aparece escrito Yangauki en algunas adaptaciones del sitio.

Antes del enfrentamiento, el relato cuenta la experiencia de Nunula. Seiskwisbuche lo invitó a vivir como esposo o compañero, pero no lo trató como pariente: lo obligó a trabajar y buscó matarlo. Nunula comprendió el peligro y preparó una salida. En la huida utilizó una piedra asociada con agua o sangre para dejar una señal engañosa y escapar del perseguidor.

Yanguaki concentra después siete figuras femeninas en una sola apariencia. El recurso sirve para atraer y engañar a Seiskwisbuche. Él cree acercarse a mujeres separadas, pero entra en una trampa preparada por quienes ya conocen sus actos. Finalmente es vencido. La fuente no necesita una batalla larga ni describe una celebración posterior; el desenlace restablece un límite que el personaje había quebrado.

La historia reúne varias escenas difíciles de reducir a una moraleja simple. Nunula no es un ayudante secundario: su fuga demuestra cómo una persona sometida a explotación puede observar, engañar al agresor y sobrevivir. Yanguaki tampoco debe representarse como monstruo genérico. Es una figura creada con un propósito dentro del orden de los padres.

La revisión conserva la grafía Yanguaki porque es la que aparece en el encabezado del corpus consultado, aunque el slug histórico no cambia. Retira diálogos, armas y transformaciones visuales añadidas por expansiones anteriores. También evita erotizar a las siete mujeres: el punto narrativo es la apariencia múltiple usada para conducir al transgresor hacia su derrota.

Este episodio se relaciona con la ficha sobre la unión prohibida, pero no la duplica. Allí una acción primordial da origen a una regla; aquí un personaje ya ha violado parentesco y convivencia, explota a Nunula y debe ser detenido. La página conserva esa diferencia entre fundar una prohibición y responder a quien la quebranta.`,
    historyCore:
      "El encabezado Seiskwisbuche y Yanguaki y la atribución a Seye Ababi Makó aparecen en el corpus de 1951. La complejidad del episodio exige no borrar a Nunula ni convertir el desenlace en una aventura independiente de sus transgresiones iniciales.",
    versionCore:
      "Yangauki es la grafía heredada por el slug y Yanguaki la forma visible usada en la fuente localizada. Las versiones condensadas cambian el orden de Nunula y de las siete mujeres, pero conservan la derrota de Seiskwisbuche.",
    similarityCore:
      "El engaño mediante una apariencia múltiple recuerda trampas de otros ciclos míticos. Aquí responde a homicidio, incesto y explotación ya nombrados, y se combina con la fuga autónoma de Nunula y una figura creada por los padres.",
    leccion:
      "Quien rompe el parentesco y explota a otros puede ser vencido por inteligencia compartida.",
    sceneHorizontal:
      "Nunula huye por un río de montaña dejando una señal en una piedra mientras Yanguaki prepara siete siluetas planas para la trampa",
    sceneVertical:
      "Yanguaki reúne siete formas en una sola figura frente a Seiskwisbuche, con Nunula ya a salvo en la distancia",
    researchNotes:
      "GRAFÍA: título visible Yanguaki; slug histórico se conserva. ESTRUCTURA: Nunula mantiene su agencia y no se erotiza el engaño.",
  }),
  myth({
    slug: "el-sol-mama",
    title: "El Sol — Mama",
    summary:
      "Después de una luz insuficiente, un hombre y una mujer son elevados como Sol y Luna, y una nube de ceniza disminuye el brillo lunar.",
    tags: ["Sol", "Luna", "Kakaraviku", "ofrendas"],
    mito: `Antes del Sol, el mundo permanecía oscuro. Una luz pequeña, comparada con la del cocuyo, no bastaba para organizar el día. Los padres necesitaban una claridad más amplia y prepararon a un hombre para que ocupara el cielo. La narración lo llama Sol y también Mama, vinculando el astro con una autoridad masculina.

El Sol tenía dos mujeres. Una de ellas fue escogida para acompañarlo como Luna. Ambos recibieron adornos de oro o un brillo dorado. Kakaraviku, nombrado junto con Sekukue en algunas secuencias, sopló para elevarlos. Desde entonces el Sol iluminó el día y la mujer convertida en Luna acompañó la noche.

La otra esposa no subió. Al ver a la nueva Luna, lanzó ceniza hacia ella. La ceniza cubrió parte de su resplandor y explica por qué la Luna no brilla con la misma intensidad que el Sol. El relato no describe una guerra celeste ni afirma que las manchas lunares sean una mujer castigada; habla de un brillo disminuido después de un acto de rivalidad.

La instauración de los astros también aparece ligada a una casa ceremonial. Allí se ofrecen o preparan sustancias relacionadas con la yuca y con su espíritu. El Sol no es solo un disco lejano: participa del orden ritual mediante el cual la gente mantiene relaciones con fuerzas del mundo. La ficha conserva esa mención sin reconstruir una ceremonia completa a partir de una línea de la fuente.

Otras páginas del corpus hablan de Susabanka, enviado del Sol, y de Gotzé, asociado con el fuego después del nacimiento solar. Son episodios conectados, pero no deben fusionarse. En esta secuencia el problema central es cómo la luz suficiente llega al mundo y cómo se diferencian el Sol y la Luna.

La revisión retira pirámides, templos de oro y un romance astral que no figuran en la fuente. Tampoco representa objetos rituales específicos cuya forma o uso no está documentado para esta escena. Quedan la oscuridad inicial, la luz de cocuyo, el hombre elevado como Sol, una esposa elevada como Luna, la ceniza que reduce su brillo y la continuidad de las ofrendas.`,
    historyCore:
      "El relato solar aparece dentro de un corpus donde Mama puede designar autoridad y donde el astro participa de relaciones ceremoniales. La puntuación del título conserva esa doble referencia sin afirmar que todo mama sea una encarnación del Sol.",
    versionCore:
      "Kakaraviku y Sekukue cambian de posición entre versiones, y las sustancias ofrecidas se traducen de maneras distintas. El núcleo estable es la elevación de Sol y Luna, el oro o brillo, y la ceniza que disminuye la luz lunar.",
    similarityCore:
      "La pareja solar y lunar y las manchas causadas por ceniza tienen paralelos en otros relatos. La versión Kogui se distingue por la luz previa del cocuyo, las dos esposas, el soplo elevador y el vínculo del Sol con la casa ceremonial.",
    leccion:
      "La luz que ordena el mundo también establece relaciones y responsabilidades entre cielo y comunidad.",
    sceneHorizontal:
      "Kakaraviku eleva con su soplo a un Sol masculino y una Luna femenina sobre la Sierra, mientras una nube de ceniza toca el disco lunar",
    sceneVertical:
      "la pequeña luz de un cocuyo queda abajo y los dos grandes astros dorados ocupan el cielo sobre una casa ceremonial sobria",
    researchNotes:
      "CORRECCIÓN: no se inventan templos, pirámides ni romance. RITUAL: la ofrenda se menciona sin reconstruir objetos o gestos desconocidos.",
  }),
  myth({
    slug: "namaku",
    title: "Namaku y el hombre jaguar",
    summary:
      "Namaku, hijo de Magri, vive entre prescripciones, parentescos y el riesgo de transformarse en jaguar cuando rompe su disciplina.",
    tags: ["Namaku", "jaguar", "Magri", "prescripción"],
    mito: `Namaku era hijo de Magri y vivía en un cerro. El relato lo presenta rodeado por nueve mujeres y dice que tomaba también las esposas de otros hombres. Esas acciones no se celebran como modelo de conducta: forman parte de un tiempo peligroso en el que parentesco, deseo y transformación todavía no estaban del todo ordenados.

Su padre tenía una condición doble. De día aparecía como ser humano y de noche podía convertirse en jaguar. La transformación no era un disfraz externo, sino una capacidad ligada a alimentos, lugares y prescripciones. Namaku heredaba ese riesgo. En una parte del relato, el mama de San Miguel había sido criado por un padrastro y se movía entre vínculos familiares que la transcripción no termina de explicar.

Cuando Namaku debía curar o permanecer en San Andrés, observaba una dieta estricta. Podía consumir coca y ambil, pero debía evitar otros alimentos. Si comía fuera de lo permitido, corría el peligro de volverse jaguar. La restricción no se presenta como ayuno universal para toda persona Kogui ni como receta de salud disponible al público. Corresponde a un personaje y una tarea dentro de la narración.

En otro momento, Namaku come en el páramo. La altura no funciona como paisaje decorativo: marca un espacio donde cambian las relaciones entre cuerpo, alimento y seres no humanos. El cuento enlaza así el cerro de origen, San Miguel, San Andrés y el páramo sin convertirlos en una ruta turística.

La versión anterior expandía la figura del jaguar como “animal de poder” y añadía iniciaciones genéricas. La revisión evita esa etiqueta. Dentro de este episodio, volverse jaguar puede ser consecuencia de quebrar una prescripción y también una capacidad heredada del padre. Es una relación ambivalente, no una medalla espiritual.

Namaku aparece conectado con Magri, nombre que vuelve en historias sobre alimentos y primeros seres. La ficha conserva esa red sin intentar resolverla en una genealogía única. Su núcleo es el de una figura primordial cuyo comportamiento, dieta y movilidad muestran que las capacidades extraordinarias están sujetas a reglas y que infringirlas altera el cuerpo.`,
    historyCore:
      "La narración de Namaku combina genealogía, conducta sexual, curación, dieta y transformación en una secuencia difícil de separar con categorías occidentales. La revisión no llena sus transiciones con una biografía inventada y mantiene los topónimos como parte del relato.",
    versionCore:
      "Las traducciones varían entre tabaco, ambil y sustancias ceremoniales, y no siempre distinguen con claridad al padre, al mama y al padrastro. Se conserva la ambigüedad donde la fuente no permite identificar a cada figura con seguridad.",
    similarityCore:
      "La transformación en jaguar aparece ampliamente en la Sierra y en América. Aquí se enlaza con Magri, una conducta de parentesco problemática, una dieta durante la tarea de curar y lugares Kogui concretos como San Andrés y el páramo.",
    leccion:
      "Las capacidades extraordinarias exigen disciplina, porque romper una prescripción puede transformar a quien actúa.",
    sceneHorizontal:
      "Namaku cruza entre un cerro, San Andrés y el páramo mientras una silueta de jaguar emerge de su sombra sin violencia",
    sceneVertical:
      "Namaku mantiene coca y ambil junto a un sendero de altura, con alimentos apartados y un jaguar nocturno en la distancia",
    researchNotes:
      "CORRECCIÓN: se elimina la etiqueta animal de poder. AMBIGÜEDAD: no se inventa una genealogía para resolver pasajes fragmentarios.",
  }),
  myth({
    slug: "kasauge-el-padre-arbol",
    title: "Kasaugé, el padre árbol",
    summary:
      "Tras la derrota de Kasaugé, su cuerpo y su fuerza se distribuyen en árboles, palmas, bejucos y monos del bosque.",
    tags: ["Kasaugé", "árboles", "transformación", "bosque"],
    mito: `Kasaugé era descrito como un hombre cubierto de pelo y barba que devoraba gente. Su presencia impedía que los padres antiguos completaran la primera casa. Sintana y Serawi tuvieron que enfrentarlo para hacer posible un espacio donde pudiera comenzar el orden de la comunidad.

Después de vencerlo, no dejaron su cuerpo como un cadáver separado del mundo. Lo repartieron o dispersaron. De sus partes surgieron árboles, palmas y bejucos. El relato convierte así la fuerza peligrosa de Kasaugé en materiales vivos del bosque. La casa y la vegetación no son elementos opuestos: aquello que amenazaba la construcción pasa a formar parte del entorno con el que se construye y se vive.

La transformación continúa. Kasaugé vuelve a aparecer en formas animales, especialmente monos capuchinos. La transcripción añade que fueron enviados a España. Esa frase corresponde a una capa histórica marcada por la experiencia colonial y por el traslado de personas, animales y objetos. No debe adornarse como viaje fantástico ni tomarse como dato zoológico literal.

Algunas ediciones tempranas interpretaron a Kasaugé como ejemplo de un ser “salvaje” vencido por la cultura. Esa oposición simplifica el episodio y reproduce categorías coloniales. El texto conserva una relación más compleja: el personaje es peligroso y debe ser detenido, pero su cuerpo no se elimina. Se convierte en árboles y animales que permanecen dentro del mundo.

La revisión tampoco lo presenta como antepasado directo de cada especie vegetal. La fuente enumera transformaciones y asociaciones, no una taxonomía botánica. Se mantienen el pelo, la barba, el canibalismo, la imposibilidad inicial de levantar la casa, la intervención de Sintana y Serawi y la dispersión corporal.

El subtítulo heredado “padre árbol” ayuda a reconocer la ficha, aunque Kasaugé no es un árbol único que sostiene el cielo. Su relación con el bosque nace de la multiplicación de su cuerpo en muchas formas. La historia muestra cómo una fuerza destructiva puede ser contenida y reubicada sin desaparecer por completo del universo.`,
    historyCore:
      "El relato conserva una referencia explícita a España que revela contacto y memoria colonial dentro del corpus. La revisión la atribuye a la fuente y evita convertirla en prueba de que el episodio completo sea posterior o de que todos sus motivos tengan un único origen.",
    versionCore:
      "Kasaugé puede aparecer como hombre caníbal, ser peludo, padre de árboles o figura ligada a monos. Esas formas pertenecen a una misma cadena de transformación, pero no autorizan a identificar cualquier árbol o primate con el personaje.",
    similarityCore:
      "Los cuerpos que se convierten en plantas recuerdan relatos de origen vegetal de muchos pueblos. Aquí la transformación ocurre después de impedir la primera casa y se prolonga en palmas, bejucos, capuchinos y una referencia colonial a España.",
    leccion:
      "Una fuerza peligrosa puede ser contenida y transformada en relaciones que permanecen dentro del mundo.",
    sceneHorizontal:
      "Sintana y Serawi levantan la primera casa mientras la silueta de Kasaugé se transforma en árboles, palmas y bejucos del bosque",
    sceneVertical:
      "un gran tronco se abre en hojas, lianas y monos capuchinos, sin cadáver ni violencia gráfica",
    researchNotes:
      "CONTEXTO: la mención de España se atribuye y no se vuelve aventura. INTERPRETACIÓN: se evita la oposición colonial entre salvaje y civilizado.",
  }),
  myth({
    slug: "kashindukwe",
    title: "Kashindukwe y las piedras de jaguar",
    summary:
      "Kashindukwe y Nuánashe usan piedras para transformarse en jaguares, devoran gente y quedan ligados a la destrucción y renovación del mundo.",
    tags: ["Kashindukwe", "Nuánashe", "jaguar", "renovación"],
    mito: `En San Andrés y Tucurinca vivía gente que durante el día parecía humana y durante la noche podía convertirse en jaguar. La transformación dependía de piedras descritas como azules o verdes. Kashindukwe y Nuánashe pertenecían a ese ciclo y usaban su capacidad para atacar y devorar personas.

La gente preparó trampas para detenerlos. El relato no presenta una cacería deportiva, sino una respuesta a seres que habían puesto en peligro la continuidad de las familias. Nuánashe recibió en algún momento la instrucción de comer únicamente a quienes estuvieran enfermos. Sin embargo, no respetó el límite y terminó devorando incluso a miembros de su propia familia.

Después de esos hechos, su fuerza o espíritu quedó dormido. La fuente no afirma que el peligro haya desaparecido para siempre. Kashindukwe y Nuánashe permanecen asociados con una futura transformación del mundo: el Sol dejará de alumbrar, las personas se volverán animales y el agua limpiará la tierra. Esa secuencia no se ofrece como fecha de un apocalipsis ni como profecía para calcular.

La destrucción por oscuridad, animalización y agua forma parte de una concepción cíclica. Un orden que ha sido quebrado puede terminar y dar paso a otra condición del mundo. La ficha no añade supervivientes elegidos, castigos cristianos ni una batalla final. Se limita a los elementos registrados y señala que otras narraciones del corpus desarrollan los ataques de Nuánashe con más detalle.

“Núnkasha y Kashindukwe” conserva precisamente ese episodio extendido. Mantener ambas páginas evita cargar esta ficha con todos los nombres y muertes del ciclo. Aquí el centro es la transformación mediante piedras, la transgresión del límite alimentario y la posibilidad de un retorno que altere el mundo entero.

La imagen del jaguar tampoco se presenta como mal absoluto. En otros relatos Kogui la transformación puede estar vinculada con conocimiento o prescripción. Lo que vuelve peligrosos a Kashindukwe y Nuánashe es el uso de esa capacidad para devorar sin medida. La revisión sustituye el lenguaje de “bestias primitivas” por una descripción atribuida y sobria.`,
    historyCore:
      "Kashindukwe pertenece a un conjunto de relatos que el corpus distribuye en varias secciones. Esta ficha conserva el resumen cosmológico del personaje y remite a Núnkasha para la secuencia de ataques, advertencias y derrota de Nuánashe.",
    versionCore:
      "Las piedras aparecen azules, verdes o simplemente como objetos de transformación. Las versiones tampoco coinciden en si el espíritu duerme en una piedra, un cerro o un lugar nombrado. Se mantiene el motivo sin fijar una geografía falsa.",
    similarityCore:
      "Hombres jaguar, inundaciones renovadoras y edades del mundo tienen paralelos regionales. En este ciclo Kogui se conectan mediante Kashindukwe, Nuánashe, piedras de transformación, una prohibición alimentaria quebrada y un futuro sin Sol.",
    leccion:
      "Una capacidad sin límite puede destruir el parentesco y poner en riesgo el orden del mundo.",
    sceneHorizontal:
      "dos figuras humanas proyectan sombras de jaguar junto a piedras azules y verdes, mientras una aldea se protege entre los ríos",
    sceneVertical:
      "una piedra de transformación permanece dormida bajo una montaña, con el Sol oscurecido y una corriente limpiando el valle",
    researchNotes:
      "CORRECCIÓN: no se trata como profecía fechable ni como mal absoluto. CICLO: se mantiene separada la secuencia extensa de Núnkasha.",
  }),
  myth({
    slug: "nunkasha-y-kashindukwe",
    title: "Núnkasha y Kashindukwe",
    summary:
      "Núnkasha advierte repetidamente sobre Nuánashe y ayuda a detener al devorador después de ataques que casi acaban con la gente.",
    tags: ["Núnkasha", "Kashindukwe", "Nuánashe", "advertencia"],
    mito: `Núnkasha era mayor que Nuánashe y conocía el peligro que acompañaba a su capacidad de transformarse. Le advirtió que no devorara gente y trató de imponerle límites. Nuánashe no escuchó. Junto con Kashindukwe comenzó a atacar asentamientos hasta dejar a la población al borde de desaparecer.

Las advertencias se repiten porque el relato no presenta la violencia como un accidente aislado. Cada ataque demuestra que Nuánashe ha elegido ignorar una regla. Los sobrevivientes se desplazan, se ocultan y vuelven a formar familias. La continuidad de la gente depende de que algunos logren escapar y repoblar los lugares devastados.

En una parte del ciclo aparece Ambu-Ambu. La fuente conserva el nombre dentro de una secuencia fragmentaria, pero las adaptaciones anteriores le añadieron funciones y diálogos que no están comprobados. Aquí se menciona sin convertirlo en héroe central. El conflicto vuelve a concentrarse en Nuánashe cuando este mata a su propia mujer, confirmando que su hambre ya ha roto incluso el vínculo más cercano.

Núnkasha decide engañarlo. Aprovecha la confianza o el cansancio de Nuánashe y crea la oportunidad para que la gente pueda atacarlo. Finalmente lo matan. Su cuerpo no queda disponible como trofeo: es guardado en un cerro o vinculado con un lugar de montaña, señal de que la fuerza peligrosa continúa contenida y no simplemente borrada.

El episodio conversa con la ficha “Kashindukwe y las piedras de jaguar”. Allí se resume la transformación y el posible retorno cosmológico; aquí se desarrolla la cadena social de advertencia, desobediencia, ataques, supervivencia y respuesta colectiva. No son dos copias del mismo texto.

La revisión evita contar las muertes como espectáculo. Tampoco afirma que las personas atacadas merecieran el daño ni convierte a Núnkasha en guerrero invencible. Su papel principal es advertir, observar y encontrar una estrategia que permita actuar a la comunidad. El relato termina con una amenaza contenida en el territorio y con gente que ha sobrevivido mediante memoria y cooperación.`,
    historyCore:
      "La secuencia extensa permite ver que el ciclo no trata solo de metamorfosis, sino de parentesco y supervivencia colectiva. Los nombres presentan variaciones ortográficas, y el corpus no siempre separa con claridad las intervenciones de Kashindukwe y Nuánashe.",
    versionCore:
      "Algunas síntesis condensan a los dos devoradores en una sola figura; otras conservan a Núnkasha como hermano mayor y a Nuánashe como transgresor. Esta página retiene la distinción porque las advertencias y la estrategia final dependen de ella.",
    similarityCore:
      "La amenaza guardada en una montaña recuerda seres contenidos de otros relatos. Aquí llega después de ataques reiterados, repoblamiento de sobrevivientes, muerte de la esposa y una trampa colectiva guiada por el mayor Núnkasha.",
    leccion:
      "Advertir no siempre basta; una comunidad debe organizarse cuando alguien insiste en destruir sus vínculos.",
    sceneHorizontal:
      "Núnkasha guía a familias sobrevivientes por un valle mientras una sombra de jaguar queda contenida detrás de una montaña",
    sceneVertical:
      "la entrada de un cerro guarda la fuerza de Nuánashe y la comunidad reconstruye sus casas en primer plano",
    researchNotes:
      "ESTRUCTURA: se preserva la distinción Núnkasha/Nuánashe. TRATAMIENTO: se evita representar ataques o cuerpos con violencia gráfica.",
  }),
  myth({
    slug: "canibalismo",
    title: "Nuánashe y el hambre sin límite",
    summary:
      "Nuánashe y Kashindukwe transforman su cuerpo y atacan comunidades hasta que los mamas reconocen una amenaza nacida de romper los límites.",
    tags: ["Nuánashe", "Kashindukwe", "Magri", "límite"],
    mito: `El mundo de la primera Magri era todavía acuoso. Para que la gente pudiera vivir, pidió árboles y espacios firmes. Dentro de ese tiempo de formación aparecen Nuánashe y Kashindukwe, figuras capaces de modificar su cuerpo mediante una sustancia o poder nombrado maluteyauye en la transcripción.

La transformación les permitía acercarse a las personas y devorarlas. Los ataques alcanzaron aldeas y casas ceremoniales. Una de las escenas se sitúa en San Miguel, donde la comunidad se reunía mientras el peligro ya circulaba entre los asentamientos. La fuente no describe una costumbre alimentaria humana ni usa el episodio para caracterizar al pueblo Kogui. El canibalismo pertenece a estos personajes transgresores.

Némkardi, Námsiku y distintos mamas observan lo ocurrido. Reconocen señales, nombran la amenaza y la reprenden. Su conocimiento no impide automáticamente cada ataque, pero permite distinguir a los seres que han roto la medida. Esa tarea de reconocimiento conecta este relato con otros del ciclo, donde Núnkasha advierte y la comunidad prepara una respuesta.

La edición antropológica propuso leer a los devoradores como expresión de una dualidad cósmica. Esa interpretación puede mencionarse como hipótesis del investigador, pero no sustituye el argumento. El texto habla de un mundo acuoso, la petición de árboles, una capacidad de transformación y una secuencia de violencia que debe ser limitada.

La ficha se conserva separada de “Núnkasha y Kashindukwe” porque aquí aparecen la primera Magri, maluteyauye, San Miguel y los mamas que detectan el peligro. La otra página desarrolla parentesco, advertencias, supervivientes y derrota. Unificarlas haría perder esas diferencias y produciría una narración excesivamente lineal.

El título revisado desplaza la palabra “canibalismo” a un segundo plano. El slug permanece para no romper la dirección pública, pero la lectura ya no usa el término como atractivo morboso. El centro es un hambre sin límite que destruye comunidades y parentesco. Tampoco se ilustra a personas siendo comidas: la transformación puede representarse mediante sombras, piedras, huellas y asentamientos protegidos.`,
    historyCore:
      "El término canibalismo fue usado con frecuencia por la antropología para clasificar alteridades. En esta ficha se limita a la conducta de Nuánashe y Kashindukwe y nunca se presenta como descripción cultural del pueblo Kogui.",
    versionCore:
      "Maluteyauye recibe traducciones inciertas y no se convierte aquí en poción, piedra o hechizo definido. Némkardi y Námsiku también cambian de función entre secuencias; se conservan como mamas o figuras que reconocen y amonestan.",
    similarityCore:
      "El hambre monstruosa puede compararse con numerosos devoradores míticos. La versión Kogui la sitúa en el mundo acuoso de Magri, la enlaza con el origen de los árboles y hace que autoridades reconozcan la ruptura antes de contenerla.",
    leccion:
      "Cuando el hambre pierde toda medida, amenaza a la comunidad y exige reconocimiento y respuesta colectiva.",
    sceneHorizontal:
      "Némkardi y Námsiku observan huellas humanas que cambian en huellas de jaguar alrededor de San Miguel, sin mostrar violencia",
    sceneVertical:
      "un árbol nacido sobre el antiguo mundo acuoso separa a una comunidad de dos sombras transformadas",
    researchNotes:
      "TÍTULO: se evita usar canibalismo como gancho. TÉRMINO: maluteyauye se conserva sin equivalencia inventada.",
  }),
  myth({
    slug: "naowa-entrega-el-gobierno-a-su-hijo",
    title: "Naowa entrega el gobierno a su hijo",
    summary:
      "Naowa forma a un hijo, le entrega poporo, bastón y autoridad, y el relato distribuye tareas dentro de un orden primordial.",
    tags: ["Naowa", "gobierno", "poporo", "autoridad"],
    mito: `Naowa aparece en esta narración relacionada con el poporo y con Kansa María, nombre que la fuente usa para una sustancia, recipiente o principio femenino según el pasaje. Antes de establecer el gobierno, intenta producir rasgos masculinos como barba y bigote. La secuencia expresa que las funciones todavía no estaban diferenciadas.

Naowa había tenido hijos en condiciones incompletas. En un momento, los niños son cocinados o preparados mientras las mujeres permanecen vinculadas con la casa ceremonial. El lenguaje es difícil y no debe reproducirse como escena doméstica literal. Pertenece al tiempo primordial en que cuerpos, géneros y responsabilidades están siendo formados.

Finalmente Naowa crea o hace crecer a un hijo capaz de recibir autoridad. Le entrega el poporo, un bastón y la barba como señales de gobierno. Desde entonces, dice la versión registrada, los hombres quedan asociados con Kansa María, haiu y la administración de justicia, mientras las mujeres quedan ligadas a la preparación de alimentos.

La ficha no presenta esa distribución como mandato contemporáneo, universal e inmutable para toda persona Kogui. Es una explicación de origen recogida en una época determinada y mediada por un investigador. Las sociedades cambian, las voces internas no son idénticas y una página pública no debe usar un relato antiguo para justificar desigualdad actual.

Al mismo tiempo, borrar la distribución haría desaparecer el argumento documentado. La revisión la conserva con atribución y contexto. El poporo no se reduce a accesorio visual ni se describe como objeto recreativo. Dentro de la narración señala una responsabilidad de pensamiento, palabra y autoridad. El bastón tampoco es un cetro monárquico.

Esta historia se conecta con las antropogénesis de Naowa y Madre Wastora, pero su centro es distinto. Allí se forman cuerpos y primeras generaciones; aquí se explica cómo un hijo recibe signos de gobierno y cómo se reparten tareas. El título heredado sigue siendo preciso.

La versión anterior agregó una ceremonia de coronación y una jerarquía estatal. Se eliminan. Lo que queda es un traspaso primordial de responsabilidades expresado mediante objetos y rasgos corporales, junto con una nota crítica sobre los límites de aplicar esa distribución al presente.`,
    historyCore:
      "El episodio permite documentar una explicación Kogui temprana sobre género y autoridad, pero fue registrado por un investigador hombre dentro de condiciones históricas desiguales. La revisión conserva el texto sin convertirlo en reglamento contemporáneo.",
    versionCore:
      "Kansa María y haiu no tienen traducción estable en todos los pasajes, y el poporo reúne dimensiones materiales y de pensamiento. La ficha evita reducir esos términos a tabaco, cal, esposa o insignia cuando la fuente no lo permite.",
    similarityCore:
      "Los relatos donde una madre entrega insignias de autoridad aparecen en muchas sociedades. Aquí barba, bastón, poporo y Kansa María se enlazan con una distribución primordial de tareas que debe leerse como versión situada, no como ley universal.",
    leccion:
      "La autoridad se recibe con responsabilidades, pero ningún relato antiguo debe cerrar las voces del presente.",
    sceneHorizontal:
      "Naowa entrega a su hijo un bastón y un poporo ante una casa ceremonial sobria, sin trono ni coronación",
    sceneVertical:
      "el hijo sostiene bastón y poporo mientras varios caminos de responsabilidad se abren hacia la comunidad",
    researchNotes:
      "CONTEXTO: la distribución de género se atribuye y no se prescribe. OBJETOS: poporo y bastón no se vuelven accesorios exóticos.",
  }),
  myth({
    slug: "los-primeros-indios",
    title: "La madre de los primeros alimentos",
    summary:
      "Una mujer es madre de los alimentos: sus hijas son yuca, plátano y malanga, mientras Ñiwiwe y Dugunawi preparan la primera siembra.",
    tags: ["alimentos", "siembra", "Ñiwiwe", "Dugunawi"],
    mito: `En el comienzo, la fuente llama “padre de los alimentos” a una figura que después identifica como mujer. La aparente contradicción no necesita corregirse: el término padre puede señalar origen o autoridad, mientras el relato deja claro que se trata de una madre con hijas.

Sus hijas eran alimentos. La yuca, el plátano y la malanga aparecen como seres vinculados por parentesco antes de ser cultivos disponibles para la gente. El maíz ocupa una posición diferente y se describe como masculino. La narración organiza así las plantas por relaciones y género sin afirmar que cada variedad contemporánea tenga una única personalidad.

Ñiwiwe y Dugunawi recibieron la tarea de preparar la tierra. Limpiaron el terreno, abrieron el espacio de cultivo y sembraron. Por ese trabajo son nombrados padres de la agricultura y también de la gente en la formulación del corpus. Su acción no crea las semillas desde la nada: establece la práctica necesaria para que los alimentos puedan multiplicarse y sostener comunidades.

El título heredado, “Los primeros indios”, usa una palabra histórica y demasiado amplia. Se conserva el slug para no romper enlaces, pero el título visible se concentra en la madre de los alimentos. La página habla de una secuencia Kogui y no de un origen general de todos los pueblos indígenas del continente.

El relato conversa con las fichas sobre algodón y maíz. Allí Magri, Námsiku, Mamagakue y Niwalui explican entregas y conservaciones específicas. Aquí el interés es más general: los alimentos aparecen como familia y la siembra comienza mediante el trabajo de dos figuras. Mantener las tres páginas permite que yuca, plátano, malanga, maíz y algodón conserven historias distintas.

La versión anterior añadió una gran aldea, hambre colectiva y una ceremonia de agradecimiento sin respaldo. La revisión no los necesita. El núcleo es suficiente: una madre originaria, hijas convertidas o identificadas con alimentos, un maíz masculino y dos preparadores de la primera parcela.

La agricultura queda presentada como relación entre parentesco vegetal y trabajo humano. Las plantas no son objetos pasivos y las personas no son dueñas absolutas de su existencia. Sembrar supone recibir, preparar, cuidar y dar continuidad a una familia de alimentos.`,
    historyCore:
      "La frase padre de los alimentos aplicada a una mujer muestra los límites de traducir categorías Kogui con parentescos castellanos. La revisión conserva la tensión y no cambia automáticamente padre por diosa o madre tierra.",
    versionCore:
      "Las listas de cultivos varían entre transcripciones y pueden incorporar ñame o batata. Esta página mantiene yuca, plátano, malanga y maíz porque son los elementos centrales del episodio heredado, sin pretender un inventario exhaustivo.",
    similarityCore:
      "Plantas entendidas como hijas o parientes aparecen en muchas agriculturas indígenas. La versión Kogui diferencia una madre de alimentos, hijas cultivadas, maíz masculino y dos figuras que preparan el suelo para que la relación se vuelva siembra.",
    leccion:
      "Cultivar significa recibir alimentos como relaciones vivas y sostenerlos mediante trabajo cuidadoso.",
    sceneHorizontal:
      "una madre central está rodeada por formas vegetales de yuca, plátano y malanga mientras Ñiwiwe y Dugunawi preparan una parcela",
    sceneVertical:
      "manos siembran yuca, plátano, malanga y maíz en franjas que descienden por una ladera de la Sierra",
    researchNotes:
      "TÍTULO: se sustituye el genérico primeros indios en la vista pública. TRADUCCIÓN: se conserva la tensión padre/mujer de la fuente.",
  }),
  myth({
    slug: "el-algodon-koguis",
    title: "El algodón entregado a Mamagakue",
    summary:
      "Magri entrega el algodón a Mamagakue por medio de Námsiku, y un primer semillero permite distribuirlo entre la gente.",
    tags: ["algodón", "Mamagakue", "Námsiku", "semillas"],
    mito: `Los hijos y las hijas de Magri estaban relacionados con los alimentos y con las materias necesarias para vivir. Entre ellos se encontraba el algodón. La planta no aparece como descubrimiento casual ni como mercancía llegada de fuera: forma parte de una familia de origen.

Magri entregó el algodón a Mamagakue. Para hacer llegar esa entrega intervino Námsiku, figura que el corpus relaciona en otros pasajes con Sintana. La relación exacta entre ambos nombres cambia según la versión y no se resuelve diciendo que son idénticos en todo contexto. Aquí Námsiku actúa como mediador de la semilla.

Mamagakue preparó un primer semillero. El algodón creció allí y después pudo distribuirse entre la gente. El relato no describe paso a paso el hilado, el tejido o la confección de mochilas y vestidos, aunque esas prácticas dan hoy una importancia visible a la fibra. Su argumento se concentra en el tránsito desde Magri hasta una cuidadora, desde la semilla hasta el semillero y desde allí hacia la comunidad.

La ficha anterior añadió telares celestes, vestidos ceremoniales específicos y una competencia entre tejedoras. Esos elementos no pertenecen a esta narración. Existen estudios Kogui donde el tejido funciona como modelo del universo, pero no deben usarse para llenar un episodio que habla principalmente de entregar y multiplicar una planta.

El algodón conserva, sin embargo, una dimensión mayor que la de simple recurso. Al proceder de los hijos de Magri y pasar por relaciones nombradas, llega con una historia y una responsabilidad. El semillero indica que recibir una materia no basta: alguien debe plantarla, cuidarla y producir la cantidad necesaria para compartirla.

Esta página se mantiene separada de “El maíz Kogui”. Las dos historias incluyen semillas, mediadores y distribución, pero el maíz llega con Regina o Luitsama y queda ligado a Niwalui, mientras el algodón pasa a Mamagakue mediante Námsiku. Unificarlas borraría nombres y funciones.

La revisión ofrece así una secuencia breve sin adornos: origen en la familia de Magri, entrega, mediación, primer cultivo y reparto. La vida material aparece sostenida por cadenas de cuidado, no por la aparición instantánea de bienes terminados.`,
    historyCore:
      "El algodón tiene una presencia central en la vestimenta y el tejido Kogui, pero la ficha solo incorpora esos contextos cuando una fuente los declara. El relato de origen documenta ante todo personas, semilla y circulación.",
    versionCore:
      "Námsiku puede asociarse con Sintana en comentarios del corpus, mientras Mamagakue presenta variaciones ortográficas. La revisión conserva los dos nombres y evita fusionarlos con otras madres o padres de alimentos.",
    similarityCore:
      "Las plantas útiles entregadas por seres de origen tienen paralelos extensos. Esta versión se distingue por Magri, Mamagakue, la mediación de Námsiku y un semillero que convierte una sola entrega en fibra disponible para la comunidad.",
    leccion:
      "Una semilla se vuelve bien colectivo cuando alguien la recibe, la cuida y la comparte.",
    sceneHorizontal:
      "Námsiku entrega semillas de algodón a Mamagakue frente a un semillero blanco que crece en la Sierra",
    sceneVertical:
      "Mamagakue cuida plantas de algodón y distribuye semillas a varias familias sin mostrar textiles inventados",
    researchNotes:
      "CORRECCIÓN: no se añaden telares celestes ni ceremonias. DISTINCIÓN: algodón y maíz conservan mediadores y secuencias propios.",
  }),
  myth({
    slug: "el-maiz-koguis",
    title: "Niwalui y las semillas del maíz",
    summary:
      "Regina o Luitsama trae semillas de alimento y su hijo Niwalui las siembra, las conserva y permanece como piedra blanca.",
    tags: ["maíz", "Niwalui", "Regina", "semillas"],
    mito: `Magri es nombrada Regina o Luitsama en esta secuencia. Vivía con Seraira y trajo de otro lugar las semillas que la gente necesitaba: maíz, fríjol, malanga, ñame y papa aparecen entre los alimentos enumerados. La fuente no identifica ese otro lugar como país ni autoriza a reconstruir una migración histórica.

Regina entregó las semillas a su hijo. El episodio se sitúa en Takina y San Miguel, lugares que organizan el territorio narrado. El hijo se llama Niwalui. Recibió la responsabilidad de sembrar y de preservar las plantas para que no se perdieran después de la primera cosecha.

Niwalui terminó convertido o establecido como una piedra blanca. Los mamos podían comunicarse con él y mantener la relación con las semillas. La piedra no es un monumento público ni una figura que deba copiarse visualmente. Dentro del relato señala que el guardián permanece en el territorio y que el conocimiento de los alimentos continúa accesible mediante autoridades preparadas.

La historia destaca tanto la llegada como la conservación. Conseguir una semilla no garantiza alimento futuro. Niwalui debe sembrar todas las especies, reconocerlas y asegurar su continuidad. Por eso el maíz del título no está solo: pertenece a un conjunto agrícola y ocupa una posición visible dentro de él.

La página anterior convirtió a Niwalui en héroe viajero y añadió una gran fiesta de cosecha. La revisión retira esas escenas. También evita identificar a Regina con una reina europea o a Seraira con un esposo en sentido doméstico moderno. Los nombres se mantienen dentro de la relación que ofrece la fuente.

Este relato conversa con “La madre de los primeros alimentos”, donde Ñiwiwe y Dugunawi preparan la primera parcela, y con “El algodón entregado a Mamagakue”. No se fusionan porque cada ficha responde una pregunta distinta: quién prepara la agricultura, cómo se distribuye el algodón y quién conserva el conjunto de semillas.

La secuencia termina con una presencia mineral y una tarea que sigue viva. Niwalui no desaparece después de sembrar. La piedra blanca permite pensar la semilla como memoria territorial: algo que debe guardarse, consultarse y volver a poner en la tierra para alimentar a nuevas generaciones.`,
    historyCore:
      "El relato fue registrado en un contexto donde los topónimos y nombres de semillas podían tener significados rituales no traducidos por completo. La revisión conserva Takina, San Miguel y Niwalui sin convertir la ficha en itinerario geográfico verificable.",
    versionCore:
      "Regina y Luitsama aparecen como nombres alternativos, y las listas de semillas cambian levemente. La piedra blanca puede describirse como transformación o permanencia de Niwalui; se mantienen ambas lecturas abiertas.",
    similarityCore:
      "Guardianes de semillas convertidos en piedra tienen paralelos regionales, pero esta versión articula a Magri-Regina, Seraira, Niwalui, Takina, San Miguel y la comunicación de los mamos con un custodio mineral.",
    leccion:
      "Conservar semillas es mantener una memoria viva capaz de alimentar a quienes todavía no han nacido.",
    sceneHorizontal:
      "Regina entrega a Niwalui semillas de maíz, fríjol, malanga, ñame y papa entre Takina y San Miguel",
    sceneVertical:
      "una piedra blanca de Niwalui permanece junto a una parcela diversa mientras un mama se acerca con respeto",
    researchNotes:
      "CORRECCIÓN: se retiran viaje heroico y fiesta inventados. VARIACIÓN: Regina/Luitsama y piedra-transformación permanecen abiertos.",
  }),
  myth({
    slug: "el-arco-iris-susabanka",
    title: "Susabanka, enviado del Sol",
    summary:
      "Susabanka nace del Sol, busca alimentos y personas para él y permanece como piedra dentro de un ciclo de luz, enfermedad y muerte.",
    tags: ["Susabanka", "Sol", "alimentos", "piedra"],
    mito: `Susabanka nació de Mama o del Sol y fue enviado a la tierra. La fuente lo llama arco iris en el título heredado, pero el episodio no se limita a explicar una franja de colores en el cielo. Su tarea principal era buscar para el Sol alimentos y seres humanos.

Entre los alimentos aparecen plátano, yuca y malanga. Susabanka también debía llevar mujeres y niños. El lenguaje expresa una relación de entrega y consumo difícil de trasladar a categorías contemporáneas. La revisión no la presenta como secuestro aventurero ni como rito histórico practicado por el pueblo Kogui; mantiene la acción dentro del tiempo y los personajes del relato.

El Sol figura acompañado por la Luna menguante, una estrella y varias esposas según la versión atribuida al mama Julián. Desde el cielo puede enviar enfermedad y devorar después de la muerte. Esas capacidades hacen que la luz no sea únicamente benéfica. El astro participa de un orden donde alimentar, enfermar y recibir a los muertos forman parte de relaciones que requieren mediación.

Susabanka no muere de manera ordinaria. Se convierte o permanece como piedra. Como en la historia de Niwalui, la forma mineral indica una presencia que continúa en el territorio. No se identifica aquí la piedra concreta ni se reproduce como objeto ritual. La fuente permite conservar la transformación, no localizar un sitio para visitantes.

La versión anterior mezcló esta secuencia con un relato universal sobre un puente de arco iris y añadió siete colores, tesoros y reconciliación. Ninguno de esos recursos es necesario. El núcleo documentado reúne nacimiento solar, encargo, alimentos, personas, enfermedad, muerte y piedra.

La ficha tampoco se fusiona con “El Sol — Mama”. Aquella explica cómo Sol y Luna fueron elevados y por qué la Luna perdió brillo; esta muestra a un enviado del astro y la ambivalencia de su relación con la gente. Juntas forman parte de un ciclo solar sin ser episodios repetidos.

El título visible nombra a Susabanka y su función para evitar que la página prometa una leyenda genérica del arco iris. La imagen puede sugerir una banda de color, pero su centro debe ser el recorrido entre el Sol, los cultivos y la piedra que conserva al enviado.`,
    historyCore:
      "La atribución al mama Julián es importante porque sitúa la versión y evita presentarla como doctrina uniforme. Las categorías solares de la transcripción fueron interpretadas por el editor temprano y requieren distinguir narración e hipótesis.",
    versionCore:
      "Susabanka puede escribirse Susabánka y su identificación con arco iris no aparece con el mismo énfasis en todas las síntesis. La página conserva el slug histórico y hace visible la función de enviado que organiza el episodio.",
    similarityCore:
      "Arcos iris como caminos o mensajeros son frecuentes, pero aquí Susabanka nace del Sol, recoge alimentos y personas, se relaciona con enfermedad y muertos y queda como piedra. Esa combinación define la versión Kogui.",
    leccion:
      "La luz sostiene relaciones ambivalentes que deben comprenderse, no reducirse a bondad o amenaza.",
    sceneHorizontal:
      "Susabanka desciende desde el Sol por una banda curva de color hacia cultivos de plátano, yuca y malanga en la Sierra",
    sceneVertical:
      "la trayectoria solar termina en una piedra de Susabanka junto a los cultivos, con Luna menguante y una estrella arriba",
    researchNotes:
      "TÍTULO: se prioriza Susabanka sobre una leyenda genérica del arco iris. CONTEXTO: no se literaliza el consumo de personas.",
  }),
  myth({
    slug: "la-enfermedad-hiwiha",
    title: "Hiwihá, madre de las enfermedades",
    summary:
      "Hiwihá llega a Palomino, participa en la distribución del territorio y queda allí como madre de enfermedades y de cuatro Mulkokókwi.",
    tags: ["Hiwihá", "enfermedad", "Palomino", "territorio"],
    mito: `Hiwihá es presentada como madre de las enfermedades. La fuente dice que tenía madre, pero no padre, y sitúa su llegada en Palomino. No aparece como una nube anónima ni como castigo enviado contra la gente: es una figura con parentesco, lugar y descendencia.

Cuando llegó, el territorio fue distribuido entre figuras como Alwawiku, Sintana y Dukinawi. San Miguel y otros lugares aparecen dentro de esa organización. Hatleja acompañaba a Hiwihá o compartía parte de su recorrido, aunque la relación exacta cambia en las transcripciones. La narración combina así enfermedad y orden territorial sin afirmar que una comunidad concreta sea origen de una epidemia.

Hiwihá tuvo cuatro hijos llamados Mulkokókwi. La fuente no ofrece en esta sección una lista segura de cuatro enfermedades equivalentes ni autoriza a nombrarlas con diagnósticos médicos modernos. Los hijos permanecen como grupo dentro del relato. Asignar a cada uno viruela, fiebre, hambre o locura, como hacía una expansión anterior, sería inventar correspondencias.

Después de la distribución, Hiwihá quedó en Palomino. Su permanencia vincula la enfermedad con un lugar que forma parte del territorio de la Sierra y de sus conexiones hacia el mar. La página no convierte Palomino en sitio maldito ni sugiere que deba evitarse. Los lugares sagrados y narrados cumplen funciones que no se reducen a una etiqueta turística.

El episodio es breve y no incluye una cura. Otras fichas del sitio pueden hablar de plantas, mamas o prácticas de cuidado, pero pegarlas aquí produciría un desenlace tranquilizador sin fuente. La revisión acepta que la narración se concentre en el origen y la ubicación de Hiwihá.

La palabra enfermedad también requiere cautela. En el corpus puede abarcar relaciones y alteraciones que no coinciden exactamente con la biomedicina. La página no ofrece diagnóstico ni consejo de salud. Presenta una explicación cosmológica histórica y la contrasta con fuentes actuales solo para reconocer el territorio y la continuidad del pueblo Kogui.

El núcleo queda delimitado: una madre sin padre, llegada a Palomino, distribución entre seres antiguos, compañía de Hatleja, cuatro hijos y permanencia territorial. No se añaden epidemias coloniales ni moralejas sobre equilibrio que el relato no formula.`,
    historyCore:
      "La narración fue registrada antes de que la antropología médica distinguiera con cuidado categorías locales de enfermedad. La traducción se conserva con cautela y no se usa para diagnosticar, estigmatizar lugares ni sustituir conocimiento sanitario.",
    versionCore:
      "Alwawiku, Dukinawi y Hatleja presentan grafías variables y relaciones difíciles de reconstruir. Las cuatro Mulkokókwi permanecen sin equivalentes médicos porque la fuente consultada no proporciona una identificación segura.",
    similarityCore:
      "Las enfermedades personificadas como madres o descendencias aparecen en muchas tradiciones. Esta versión se define por Hiwihá, su ausencia de padre, Palomino, la distribución territorial y cuatro Mulkokókwi sin diagnóstico moderno.",
    leccion:
      "Nombrar una enfermedad dentro del territorio no significa estigmatizar un lugar ni reemplazar el cuidado.",
    sceneHorizontal:
      "Hiwihá llega a Palomino entre río, bosque y mar mientras varios caminos territoriales se distribuyen hacia la Sierra",
    sceneVertical:
      "Hiwihá permanece junto al río Palomino con cuatro formas Mulkokókwi abstractas y no médicas a su alrededor",
    researchNotes:
      "CAUTELA: no se asignan diagnósticos a Mulkokókwi ni se estigmatiza Palomino. ALCANCE: la ficha no ofrece consejo médico.",
  }),
  myth({
    slug: "la-candela-gotze",
    title: "Gotzé y las cuatro flechas de fuego",
    summary:
      "Después del nacimiento del Sol, Gotzé entrega el fuego a Sintana y cuatro flechas lo distribuyen hacia las direcciones del mundo.",
    tags: ["Gotzé", "fuego", "Sintana", "cuatro direcciones"],
    mito: `Antes de que existieran el Sol y la candela, la gente buscaba calor en piedras tibias y en palo blanco podrido que conservaba un resplandor. Esa luz débil permitía apenas enfrentar el frío. El mundo todavía no tenía el fuego distribuido que después serviría para cocinar y sostener la vida.

Magri dio nacimiento al Sol. Después aparecieron Sintana y Gotzé dentro de la secuencia que forma montañas, árboles y seres humanos. Gotzé poseía la candela. Sintana se la pidió para entregarla a la gente y completar un mundo que ya tenía relieve y vida, pero necesitaba calor controlado.

El fuego no fue llevado en una antorcha única. Gotzé preparó cuatro flechas y las lanzó hacia cuatro direcciones. Cada una extendió la candela por una parte del territorio. La narración une así orientación y distribución: el fuego llega a todos los lados porque sigue trayectorias marcadas desde un centro.

Gotzé no desapareció después de entregar las flechas. La fuente afirma que todavía vive. No identifica públicamente el lugar ni describe cómo invocarlo, de modo que la ficha no inventa una cueva sagrada ni propone una ruta. Su permanencia indica que el origen del fuego sigue relacionado con un ser y no se reduce a una tecnología sin memoria.

El relato tiene conexiones con la historia de Sol — Mama, pero no la repite. Allí la luz grande es elevada al cielo y la Luna pierde parte de su brillo; aquí el problema es el calor terrestre y su reparto por las cuatro direcciones. Mantener ambas fichas conserva la diferencia entre astro y candela.

La versión anterior añadió un robo, una persecución y un héroe que guardaba una chispa dentro del pecho. Esos motivos pertenecen a otros relatos del fuego y se retiran. Tampoco se importa al sapo Huhum del corpus Ette Ennaka, aunque su historia haya servido para reutilizar una pareja visual en otra comunidad.

La secuencia Kogui es clara: piedras y madera luminosa antes del fuego, nacimiento solar, aparición de Gotzé y Sintana, petición, cuatro flechas y permanencia del dueño de la candela. El don se vuelve un orden espacial que alcanza el territorio completo.`,
    historyCore:
      "La ficha se apoya en un relato donde fuego, Sol y creación se suceden sin formar una explicación física. Las cuatro direcciones tienen función cosmológica y territorial, pero la fuente no permite asignarles colores, pueblos o rituales específicos.",
    versionCore:
      "Gotzé también aparece escrito Gotze y la madera inicial se traduce como palo blanco o madera podrida luminosa. Las variantes conservan la petición de Sintana y las cuatro flechas como centro del episodio.",
    similarityCore:
      "El fuego distribuido mediante proyectiles recuerda otras tradiciones americanas. La versión Kogui se distingue por el calor previo de piedras y palo blanco, el nacimiento del Sol, Gotzé como poseedor y cuatro flechas lanzadas para repartirlo.",
    leccion:
      "Un bien esencial se vuelve común cuando alcanza todas las direcciones y permanece bajo cuidado.",
    sceneHorizontal:
      "Gotzé entrega a Sintana cuatro flechas encendidas que parten hacia los cuatro lados sobre montañas, bosques y ríos",
    sceneVertical:
      "una flecha de fuego asciende desde piedras tibias y palo blanco luminoso mientras el Sol nace sobre la Sierra",
    researchNotes:
      "CORRECCIÓN: no hay robo ni persecución. DIRECCIONES: no se inventan colores, pueblos o correspondencias rituales.",
  }),
  myth({
    slug: "guateovan",
    title: "Gauteován y la memoria de las máscaras",
    summary:
      "Una compilación antigua relacionó a Gauteován con la Madre, el Sol, cuatro padres, máscaras ceremoniales y los cerros de los muertos.",
    tags: ["Gauteován", "máscaras", "Sol", "recepción"],
    sourceMode: "gauteovan",
    mito: `La página de Gauteován no conserva una transcripción oral continua con narrador identificado. Procede de una compilación antigua que reunió datos atribuidos a Karl Theodor Preuss y los presentó como una sola leyenda. Por eso esta revisión cuenta lo que afirma esa síntesis y, al mismo tiempo, hace visible su mediación.

La compilación nombra a Gauteován como Madre creadora y madre de la gente. Otras fuentes escriben Guateovan o Nebulwe y confirman la importancia de una Gran Madre en el pensamiento Kogui. El texto también habla de casas del Sol o de una relación ceremonial con el astro. Esos elementos tienen respaldo general, aunque no formen en todas las fuentes la misma secuencia.

Después aparecen cuatro padres masculinos que establecen un pacto con espíritus. Según la compilación, los espíritus les quitan o retiran el rostro y de ese hecho proceden máscaras usadas en ceremonias. La formulación no autoriza a reproducir diseños rituales ni a inventar cuatro máscaras decorativas. Los objetos Kogui tienen custodios, usos y restricciones que una ilustración editorial debe respetar.

La síntesis añade que los muertos permanecen en cerros elevados. Ese vínculo entre ancestros, alturas y territorio resulta compatible con la centralidad de la Sierra, pero la fuente termina comparándolo con el Olimpo y con México. Tales analogías dicen más sobre el marco intelectual del compilador que sobre el relato Kogui y se eliminan de la narración principal.

La ficha heredada amplificó esas comparaciones: convirtió a Gauteován en reina de un panteón, describió templos solares monumentales y presentó las máscaras como trofeos. Ninguna de esas expansiones se conserva. Tampoco se fusiona la página con “La Madre y las nueve tierras” o “El Sol — Mama”, porque aquí el asunto central es cómo una fuente secundaria organizó materiales dispersos.

Esta forma de publicación permite conservar una pieza de la historia editorial sin confundirla con voz comunitaria actual. Gauteován, el Sol, cuatro padres, el pacto, los rostros, las máscaras y los cerros son datos atribuidos. Las comparaciones evolucionistas se identifican y se retiran.

Las devoluciones recientes de máscaras y objetos ceremoniales desde colecciones externas al pueblo Kogui refuerzan una precaución: narrar su existencia no equivale a apropiarse de su forma. La imagen de esta ficha reutiliza una escena astral abstracta y evita representar una máscara específica.`,
    historyCore:
      "La página se conserva porque permite corregir una pieza existente y explicar cómo se fabricó una síntesis editorial. No se eleva esa compilación al mismo nivel que un relato con relator, lengua, fecha y contexto de registro identificados.",
    versionCore:
      "Gauteován es la grafía del documento base; Guateovan y Nebulwe aparecen en otras fuentes. Es posible relacionarlas con la Gran Madre, pero no reconstruir desde ellas un relato único sobre cuatro padres y máscaras.",
    similarityCore:
      "La compilación comparó los cerros con el Olimpo y con centros mexicanos. Esas equivalencias se rechazan: las semejanzas externas no prueban parentesco. La relación relevante está entre Madre, Sol, ancestros, máscaras y territorio dentro de fuentes Kogui diferenciadas.",
    leccion:
      "Una fuente secundaria puede conservar memoria, pero debe mostrar sus mediaciones y límites con honestidad.",
    sceneHorizontal:
      "una Gran Madre abstracta conecta el Sol, cuatro figuras ancestrales y cerros altos mediante bandas planas, sin representar máscaras rituales",
    sceneVertical:
      "cuatro siluetas ascienden hacia cerros de la Sierra bajo un Sol sobrio, con el rostro resuelto como espacio abstracto y no como máscara",
    researchNotes:
      "FUENTE SECUNDARIA: no hay relator identificado. ÉTICA VISUAL: no se reproduce ninguna máscara u objeto ceremonial específico.",
  }),
];

export default koguiDefinitions;
