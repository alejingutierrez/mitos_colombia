function myth({ title, summary, tags, ...definition }) {
  const seoTitle = `${title} | Makaguán`;
  const focusKeywords = [title, "relatos Makaguán", ...tags.slice(0, 3)];
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

export const makaguanDefinitions = [
  myth({
    slug: "creacion-makawanes",
    title: "Los hijos del venado",
    summary:
      "Tacu llama a un venado y de su grito nacen cuatro mujeres y cuatro hombres, antepasados que se reconocen como hijos del venado.",
    tags: ["origen", "Tacu", "venado", "Wachirajua"],
    mito: `Antes de que hubiera gente, Tacu hizo la tierra. En la versión del Proyecto Educativo Comunitario de El Vigía se le llama Padre Sol; en la narración de David González aparece su nombre Makaguán, Tacu. La tierra estaba poblada por animales enormes: los que volaban, los que corrían y los que nadaban.

David González agregó que el cielo y la tierra estaban muy cerca. Tacu hizo sonar una gran trompeta y convocó a los Wachirajua, seres en forma de humo o almas. Llegaron cantando y rodearon al creador. Aunque ya existían animales y espíritus, todavía no había personas sobre la tierra.

Tacu llamó a un venado grande. Le propuso retirarle los dientes y las muelas. Si soportaba el dolor, recibiría una dentadura de oro y de su boca saldrían personas asociadas con numerosos inventos. Si gritaba, nacerían personas Makaguanas, descritas en la narración como caminadoras, recolectoras y cazadoras.

El venado resistió mientras Tacu sacaba cada pieza. Cuando quedaba la última muela, no pudo contener el grito. En ese momento salieron de su boca cuatro mujeres y cuatro hombres. Ellos fueron los primeros Makaguanes antiguos. Buscaron carne, pepas y raíces; recogieron plátano de monte y caracoles; fabricaron capuzas de macana para cazar y pescar; caminaron por montes y esteros; y con el paso de las generaciones se multiplicaron.

Tacu repitió la prueba con un araguato grande. El mono soportó el dolor, recibió dientes de oro y de su boca salió la gente que el relato llama blancos, vinculada con carros, aviones y otros inventos. Esa oposición pertenece a una versión transmitida después de siglos de contacto colonial. La página la conserva porque forma parte de la fuente, pero no la convierte en una jerarquía verdadera entre pueblos ni describe a los Makaguanes como menos inteligentes.

Gregorio Flórez narró la versión recogida por el PEC de 2005. David González, capitán de El Vigía, aportó en 2010 a Tacu y los Wachirajua; José Darío Cuenza y Arístides Tocaria participaron en la reconfirmación. El propio corpus concluye que el venado es el abuelo del pueblo porque de él salieron los primeros antepasados.

El nombre visible cambia de “Creación” a “Los hijos del venado”, título usado por la investigación y por la divulgación de la Universidad Nacional. Así se evita presentar una expansión literaria como cosmogonía completa y se recupera la autodenominación vinculada con el venado.`,
    historyCore:
      "La versión más temprana del expediente procede del PEC de El Vigía de 2005 y fue atribuida a Gregorio Flórez. En 2010, David González agregó el nombre Tacu y la reunión de los Wachirajua; José Darío Cuenza y Arístides Tocaria ayudaron a revisar la secuencia.",
    versionCore:
      "Padre Sol y Tacu designan al creador en dos momentos del registro. La segunda versión no reemplaza la primera: amplía el comienzo con cielo y tierra cercanos, trompeta y espíritus. Las grafías Makawan y Makaguan también corresponden a capas documentales distintas.",
    similarityCore:
      "El nacimiento de personas desde un animal puede recordar otros orígenes totémicos, pero aquí el venado es nombrado abuelo y su grito produce ocho antepasados caminadores. El araguato y la oposición tecnológica reflejan además una historia de contacto particular.",
    leccion:
      "Reconocer al venado como abuelo enlaza origen, movilidad, alimento y responsabilidad con el territorio.",
    sceneHorizontal:
      "Tacu como Sol sobrio observa un venado rodeado por ocho siluetas humanas que emergen simbólicamente entre animales del bosque y los esteros",
    sceneVertical:
      "un venado ocupa el centro bajo el Sol mientras cuatro mujeres y cuatro hombres avanzan hacia el bosque de galería de Arauca",
    researchNotes:
      "TÍTULO: se restituye Los hijos del venado. CAUTELA: la oposición con los blancos se contextualiza como capa de contacto y nunca como inferioridad.",
  }),
  myth({
    slug: "la-gran-inundacion",
    title: "La gran inundación y Wiri",
    summary:
      "Tras la muerte accidental de Wiri, Tacu desata una inundación; una pareja sobrevive y una variante comunitaria restituye al samuro.",
    tags: ["inundación", "Wiri", "Tacu", "samuro"],
    mito: `Varias generaciones después de Los hijos del venado, Tacu envió a la tierra un Wiri, palabra que la investigación traduce como perro. Llevaba un collar de oro y debía observar cómo vivía la gente. Una familia Makaguán lo encontró, lo llevó a su choza y trató de alimentarlo durante varios días, pero Wiri no recibió la comida.

La familia lo llevó después al conuco. Allí otras personas estaban derribando una palma grande para preparar vino. La palma cayó sobre Wiri y lo mató. La fuente presenta el hecho como accidente, no como sacrificio deliberado ni como desprecio consciente hacia el animal.

Al ver la muerte, Tacu envió una ardita o ardilla. En instantes derribó árboles grandes y montañas. El cielo se oscureció y comenzó una lluvia que no se detuvo durante varios días. La gente intentó contenerla, pero no pudo. Solo un guerrero y su compañera alcanzaron un monte que la ardilla no había derribado. Allí sobrevivieron hasta que la lluvia terminó.

La transcripción de David González registrada el 15 de agosto de 2010 decía que Tacu envió una paloma para comprobar si la tierra se había secado. También enviaba un cangrejo gigante que recogía los huesos de los muertos mientras llevaba y tocaba un tambor. Sin embargo, cuando Manuel Sánchez revisó el texto en 2023, corrigió el ave: según la versión de los abuelos no era una paloma, sino un samuro enviado para limpiar la tierra y comer la materia que había quedado después de la inundación.

La página adopta el samuro en la narración principal y conserva la paloma en Versiones para mostrar cómo cambió el registro. El cangrejo y su tambor permanecen porque la corrección comunitaria no los eliminó. No se añade una reconciliación celestial, un nuevo mundo perfecto ni una ceremonia detallada.

Al final, Tacu reclamó a los sobrevivientes: había enviado a Wiri para que lo cuidaran y el animal había muerto. Los Makaguanes respondieron que volverían a realizar una ceremonia o práctica cultural para recibir a Wiri y permitir que los acompañara en sus vidas. La fuente no describe sus pasos, por lo que el sitio no los inventa ni los ofrece como ritual reproducible.

La inundación enlaza un accidente en el conuco, la pérdida de un enviado, la destrucción del paisaje, la supervivencia de una pareja y la obligación de recordar. El relato fue recreado por estudiantes de El Vigía mediante dibujos aprobados por los sabedores para conservar su continuidad educativa.`,
    historyCore:
      "David González narró el mito el 15 de agosto de 2010 para el diario de campo de la investigación. Estudiantes y sabedores lo leyeron y dibujaron en la escuela. En 2023, Manuel Sánchez pidió corregir la paloma por el samuro de la versión de los abuelos.",
    versionCore:
      "La paloma pertenece a la transcripción de 2010 y el samuro a la revisión comunitaria de 2023. La ficha hace visible el cambio, conserva al cangrejo con el tambor y evita decidir que una versión invalida la experiencia de quien narró la otra.",
    similarityCore:
      "La lluvia destructiva y una pareja en altura recuerdan otros diluvios, pero Wiri, la palma para vino, la ardilla que derriba el mundo, el samuro corrector y el cangrejo con tambor forman una secuencia Makaguán singular.",
    leccion:
      "Cuidar a quien llega y escuchar las correcciones de los mayores sostienen la memoria colectiva.",
    sceneHorizontal:
      "una palma derribada libera corrientes entre el bosque de Arauca mientras Wiri queda sugerido por su collar, una pareja alcanza terreno alto y un samuro vuela arriba",
    sceneVertical:
      "un samuro recorre la tierra después de la lluvia mientras un cangrejo lleva un tambor junto a los esteros y la pareja sobreviviente observa",
    researchNotes:
      "CORRECCIÓN COMUNITARIA: samuro, no paloma, en la variante de Manuel Sánchez de 2023. RITUAL: no se inventan pasos ceremoniales.",
  }),
  myth({
    slug: "el-alma",
    title: "Wuachirajua, la leyenda de El Alma",
    summary:
      "Wuachirajua aparece entre la laguna del Lipa y El Vigía como una presencia cambiante ligada al acompañamiento de los muertos.",
    tags: ["Wuachirajua", "El Alma", "El Vigía", "memoria"],
    mito: `La investigación clasifica El Alma como leyenda, no como mito de origen. Su nombre Makaguán aparece escrito Wuachirajua, con variantes cercanas a Wachirajua. Los sabedores y miembros del cabildo de El Vigía la relacionan con lugares y encuentros situados desde mediados del siglo XX.

Según el relato consolidado en 2011, la presencia comenzó a verse aproximadamente desde 1948, cuando varias familias estaban en la laguna del Lipa. Se vinculó con la pérdida de una práctica para acompañar a los familiares muertos: llevar una vela de cera de abeja, cerca de dos litros de agua y permanecer con la persona durante un tiempo.

En los recuerdos más antiguos, Wuachirajua era un ser grande, negro y peludo, de estatura comparable con un oso y con uñas largas. En versiones posteriores tenía el tamaño de un niño de unos diez años, pero conservaba una fuerza extraordinaria. Podía tomar forma de ave o de otros animales y perseguía especialmente a personas descritas como de mala voluntad.

La leyenda reúne encuentros en el bosque, los caminos, el cementerio y la escuela del resguardo. Un hombre contó que lo vio comiendo corozo en el bosque de El Vigía y se enfrentó a la presencia con un machete. Un profesor recordó que, después de la muerte de un compañero y durante una falla eléctrica, vio una sombra pequeña atravesar las habitaciones de la escuela. Cuando compartió lo ocurrido, otras personas narraron experiencias semejantes.

La revisión de Manuel Sánchez en 2023 agregó otra memoria. Dijo haber estado presente, siendo niño, cuando el sabedor Arístides Tocaria encontró a Wuachirajua durante una jornada de caza. La presencia estaba acompañada por su pareja. Arístides y el ser dialogaron sobre poderes y rezos antiguos; después se enfrentaron y el sabedor logró ocultarse en una casa.

Estos relatos no convierten a Wuachirajua en guardián genérico del bosque ni autorizan a afirmar que castiga siempre a quien abandona una tradición. La relación con los muertos y con la pérdida de la ceremonia es parte de la explicación comunitaria, mientras los testimonios muestran que la figura cambia de tamaño, forma y situación.

El nombre heredado “El alma” permanece en el título para reconocer la URL y la traducción del corpus, pero Wuachirajua ocupa ahora el primer lugar. La ficha retira los adornos espectaculares y las equivalencias externas añadidas por la expansión anterior. Quedan una presencia Makaguán, sus lugares, las voces que la recuerdan y la necesidad de acompañar a los muertos.`,
    historyCore:
      "El relato fue transcrito en 2011 a partir de entrevistas individuales y colectivas y de una conversación con el gobernador Manuel Sánchez. El texto se socializó con cabildo, comunidad y estudiantes. Sánchez añadió en 2023 la memoria del encuentro de Arístides Tocaria.",
    versionCore:
      "El tamaño cambia de una figura semejante a un gran oso a un ser de estatura infantil; también puede aparecer como sombra, ave u otro animal. Wuachirajua y Wachirajua son grafías cercanas, pero el corpus usa la primera en el título de la leyenda.",
    similarityCore:
      "Las presencias asociadas con muertos y caminos existen en muchas tradiciones. Aquí la leyenda se ancla en la laguna del Lipa, El Vigía, una ceremonia abandonada, el cementerio, la escuela y testimonios comunitarios fechados.",
    leccion:
      "Acompañar a los muertos y escuchar a quienes recuerdan mantiene vínculos que el olvido debilita.",
    sceneHorizontal:
      "una sombra Wuachirajua pequeña y cambiante cruza entre bosque, camino, cementerio y escuela de El Vigía sin rasgos terroríficos explícitos",
    sceneVertical:
      "una vela de cera de abeja y agua acompañan una memoria ancestral mientras Wuachirajua aparece como sombra entre los árboles del Lipa",
    researchNotes:
      "GÉNERO: leyenda contemporánea, no mito cosmogónico. NOMBRE: Wuachirajua se prioriza; se eliminan comparaciones externas sin respaldo comunitario.",
  }),
];

export default makaguanDefinitions;
