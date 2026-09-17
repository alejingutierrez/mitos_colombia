/**
 * Ficha editorial de cada pueblo.
 *
 * Vivía dentro de `src/app/comunidades/[slug]/page.js`. Se saca aquí para que
 * el índice y la ficha compartan la misma fuente.
 *
 * `sections` es opcional: cuando existe, la ficha reparte el texto en bloques
 * con título en vez de servir un único párrafo corrido. Cuando no existe, cae
 * al par description + longDescription de siempre.
 *
 * ── LA CLAVE ES EL SLUG DE LA BASE, NO EL NOMBRE DEL PUEBLO ──────────────
 *
 * Once claves de este archivo no correspondían a ninguna comunidad de la base,
 * así que su texto —escrito, revisado, terminado— no se pintaba en ninguna
 * página: la ficha caía al párrafo de respaldo, que es el mismo para todos.
 * Casi todas eran diferencias de grafía de una letra. Verificadas una a una
 * contra `communities.slug`, se resolvieron así:
 *
 *   yukuna    → yucuna        (Yucuna, Amazonas)
 *   tanimuka  → ufaina        (Ufaina / Tanimuka, Amazonas)
 *   nukak     → nukak-maku    (Nɨkak, Amazonas)
 *   kuiva     → kuibas        (Kuiva (Wamonae), Orinoquía)
 *
 * Otras cuatro eran la segunda grafía de un pueblo que YA tenía su ficha con
 * la clave correcta y con `sections` escritas —`catios`/katios,
 * `uitoto`/huitotos, `kogui`/koguis, `nasa`/nasa-paeces—: se retiraron porque
 * duplicaban, con menos texto, lo que la clave buena ya sirve.
 *
 * Las tres restantes —macuna, kurripaco, yanacona— no tienen comunidad en la
 * base con ningún slug ni nombre. Se conservan al final, apartadas y marcadas,
 * porque el texto es bueno y sirve el día que esos relatos entren; hasta
 * entonces no hay página que las pueda pintar.
 *
 * Antes de añadir una clave: compruébala contra la base, no contra el nombre
 * que te suena. Una clave que no existe no falla — sencillamente no se ve.
 */

export const COMMUNITY_INFO = {
  "muiscas": {
    title: "Muiscas",
    description: "Pueblo indígena del altiplano cundiboyacense, conocido por su avanzada civilización, ceremonias en lagunas sagradas y la leyenda de El Dorado.",
    longDescription: "Los Muiscas o Chibchas fueron una de las civilizaciones más avanzadas de Colombia precolombina, habitantes del altiplano andino en lo que hoy es Cundinamarca y Boyacá en la región Andina. Su mitología es extraordinariamente rica e incluye relatos cosmogónicos sobre Chiminigagua, el ser supremo creador de la luz, y Bachué, la madre primordial que emergió de la laguna de Iguaque con un niño que luego se convirtió en su esposo, poblando la tierra de humanos. Bochica, el anciano sabio y héroe civilizador, enseñó a los chibchas a cultivar, tejer y organizarse socialmente, salvando su tierra de inundaciones y transformando oro en maíz para alimentar al pueblo. Los mitos muiscas narran el origen divino de Goranchacha, hijo del sol que se manifestó a través de una doncella, y el nacimiento del sol y la luna a través de los caciques que trajeron luz al mundo. La laguna de Guatavita fue escenario de ceremonias de ofrendas de oro que dieron origen a la leyenda de El Dorado, rituales que reflejaban la profunda conexión espiritual entre los Muiscas y sus lugares sagrados. Su tradición oral estableció códigos morales y sociales que rigieron una de las sociedades más complejas de los Andes colombianos.",
    // Ejemplo trabajado del reparto en bloques: es el mismo texto de
    // `longDescription`, partido por los tres asuntos que ya trataba seguidos.
    // Los demás pueblos siguen cayendo a un solo bloque hasta que se escriban.
    sections: [
      {
        title: "Quiénes son",
        body: "Los Muiscas o Chibchas fueron una de las civilizaciones más avanzadas de Colombia precolombina, habitantes del altiplano andino en lo que hoy es Cundinamarca y Boyacá en la región Andina.",
      },
      {
        title: "Su cosmogonía",
        body: "Su mitología es extraordinariamente rica e incluye relatos cosmogónicos sobre Chiminigagua, el ser supremo creador de la luz, y Bachué, la madre primordial que emergió de la laguna de Iguaque con un niño que luego se convirtió en su esposo, poblando la tierra de humanos. Bochica, el anciano sabio y héroe civilizador, enseñó a los chibchas a cultivar, tejer y organizarse socialmente, salvando su tierra de inundaciones y transformando oro en maíz para alimentar al pueblo. Los mitos muiscas narran el origen divino de Goranchacha, hijo del sol que se manifestó a través de una doncella, y el nacimiento del sol y la luna a través de los caciques que trajeron luz al mundo.",
      },
      {
        title: "Su territorio",
        body: "La laguna de Guatavita fue escenario de ceremonias de ofrendas de oro que dieron origen a la leyenda de El Dorado, rituales que reflejaban la profunda conexión espiritual entre los Muiscas y sus lugares sagrados. Su tradición oral estableció códigos morales y sociales que rigieron una de las sociedades más complejas de los Andes colombianos.",
      },
    ],
    imagePrompt: "Muisca golden ceremony at Guatavita lagoon, Bochica civilizer, Andean mountains, sacred offerings, El Dorado ritual"
  },
  // Clave alineada con la base: `yucuna`, no `yukuna`.
  "yucuna": {
    title: "Yucuna",
    description: "Pueblo amazónico del grupo lingüístico arawak, con una rica tradición de mitos cosmogónicos y relatos sobre la creación.",
    longDescription: "Los Yucuna habitan la región amazónica colombiana en el departamento del Amazonas. Pertenecen al grupo lingüístico arawak y han preservado una extensa tradición oral que incluye mitos sobre el origen del mundo, la creación de los seres humanos, y las transformaciones de héroes culturales. Su mitología está profundamente conectada con la selva, los ríos y los espíritus que habitan estos espacios. Los relatos yucuna transmiten conocimientos sobre la naturaleza, normas sociales y la relación entre humanos y el mundo sobrenatural.",
    imagePrompt: "Yucuna village in Amazon rainforest, sacred river, tropical mythology, ancestral spirits"
  },
  "wayuu": {
    title: "Wayúu",
    description: "Pueblo indígena de La Guajira, con cultura matrilineal y rica tradición oral sobre el viaje entre mundos, espíritus ancestrales y el equilibrio cósmico.",
        sections: [
      {
        title: "Quiénes son",
        body: "Los Wayúu son el pueblo indígena más numeroso de Colombia y Venezuela, habitantes ancestrales de la península de La Guajira en la región Caribe. Su sociedad matrilineal se refleja profundamente en su mitología, donde figuras femeninas como Pulowi (espíritu de la sequía y el viento) ocupan roles centrales.",
      },
      {
        title: "Su mitología",
        body: "Los mitos wayúu narran el origen del fuego a través de un joven audaz que lo robó de los dioses, desatando un ciclo de castigos y transformaciones que definió la relación de la humanidad con este elemento sagrado. Maleiwa (Mareigua), el dios creador, estableció el orden del cosmos y las normas que rigen la vida wayúu. El relato de Ulépala explora temas de amor, lealtad y el tránsito entre el mundo de los vivos y los muertos, mientras que los dominios de Juyá (la lluvia) representan una rica tradición sobre el viaje de autodescubrimiento y supervivencia. Los mitos wayúu sobre el viaje al más allá revelan complejas narrativas sobre la interacción con seres sobrenaturales y la continuidad de la existencia después de la muerte.",
      },
      {
        title: "Lo que enseña su tradición oral",
        body: "Su tradición oral enseña sobre la importancia del clan familiar, el respeto a los mayores, el sistema de justicia basado en compensación, y la armonía necesaria con el territorio desértico que habitan.",
      },
    ],
longDescription: "Los Wayúu son el pueblo indígena más numeroso de Colombia y Venezuela, habitantes ancestrales de la península de La Guajira en la región Caribe. Su sociedad matrilineal se refleja profundamente en su mitología, donde figuras femeninas como Pulowi (espíritu de la sequía y el viento) ocupan roles centrales. Los mitos wayúu narran el origen del fuego a través de un joven audaz que lo robó de los dioses, desatando un ciclo de castigos y transformaciones que definió la relación de la humanidad con este elemento sagrado. Maleiwa (Mareigua), el dios creador, estableció el orden del cosmos y las normas que rigen la vida wayúu. El relato de Ulépala explora temas de amor, lealtad y el tránsito entre el mundo de los vivos y los muertos, mientras que los dominios de Juyá (la lluvia) representan una rica tradición sobre el viaje de autodescubrimiento y supervivencia. Los mitos wayúu sobre el viaje al más allá revelan complejas narrativas sobre la interacción con seres sobrenaturales y la continuidad de la existencia después de la muerte. Su tradición oral enseña sobre la importancia del clan familiar, el respeto a los mayores, el sistema de justicia basado en compensación, y la armonía necesaria con el territorio desértico que habitan.",
    imagePrompt: "Wayuu matrilineal society in La Guajira desert, Pulowi and Juyá spirits, traditional patterns, journey between worlds"
  },
  // La clave `catios` se retiró: la comunidad de la base es `katios`, y su
  // ficha —la de aquí abajo— ya trae el mismo contenido repartido en bloques.
  "katios": {
    title: "Katíos",
    description: "Pueblo emberá de la región andina, guardianes de relatos sobre la creación del mundo y la resistencia cultural.",
        sections: [
      {
        title: "Quiénes son",
        body: "Los Katíos son parte de la familia lingüística emberá y habitan regiones del occidente colombiano, principalmente en Antioquia y Chocó, en la zona de transición entre los Andes y el Pacífico.",
      },
      {
        title: "Su cosmogonía",
        body: "Su mitología es rica en relatos cosmogónicos centrados en Caragabí, el creador que organizó el mundo y estableció el orden natural y social. Los mitos katíos narran la creación del universo, la aparición de figuras míticas como los Aribamias (seres transformados después de la muerte), y episodios de resistencia indígena como la liderada por Ambeu contra los conquistadores españoles.",
      },
      {
        title: "Lo que enseña su tradición oral",
        body: "La tradición oral katía también incluye relatos sobre el origen de alimentos como el ñame, la intervención de la serpiente desafiando la autoridad divina, y enseñanzas sobre el respeto a los espíritus de la selva y los ríos. Sus mitos preservan profundos conocimientos sobre plantas medicinales, técnicas de caza sostenible, y la importancia de mantener el equilibrio entre lo humano y lo natural.",
      },
    ],
longDescription: "Los Katíos son parte de la familia lingüística emberá y habitan regiones del occidente colombiano, principalmente en Antioquia y Chocó, en la zona de transición entre los Andes y el Pacífico. Su mitología es rica en relatos cosmogónicos centrados en Caragabí, el creador que organizó el mundo y estableció el orden natural y social. Los mitos katíos narran la creación del universo, la aparición de figuras míticas como los Aribamias (seres transformados después de la muerte), y episodios de resistencia indígena como la liderada por Ambeu contra los conquistadores españoles. La tradición oral katía también incluye relatos sobre el origen de alimentos como el ñame, la intervención de la serpiente desafiando la autoridad divina, y enseñanzas sobre el respeto a los espíritus de la selva y los ríos. Sus mitos preservan profundos conocimientos sobre plantas medicinales, técnicas de caza sostenible, y la importancia de mantener el equilibrio entre lo humano y lo natural.",
    imagePrompt: "Katío village in Andean-Pacific transition, Caragabí creation myth, resistance warriors, sacred forest spirits"
  },
  "embera": {
    title: "Emberá",
    description: "Pueblo indígena del Pacífico colombiano, con rica tradición oral sobre la naturaleza, espíritus del bosque y ceremonias ancestrales.",
    longDescription: "Los Emberá son uno de los pueblos indígenas más importantes de la región Pacífica colombiana, habitando los departamentos de Chocó, Valle del Cauca y Risaralda. Su mitología está profundamente conectada con la selva húmeda tropical, los ríos caudalosos y la extraordinaria biodiversidad de su territorio. Los mitos emberá incluyen relatos sobre la creación del mundo, espíritus guardianes de la selva, transformaciones entre humanos y animales, y la importancia de mantener el equilibrio con la naturaleza. Su tradición oral transmite conocimientos sobre el uso sostenible de recursos naturales, plantas medicinales, técnicas de pesca y navegación fluvial. Los Emberá han preservado su identidad cultural a pesar de presiones externas, manteniendo vivas ceremonias tradicionales, el uso de la lengua emberá, y prácticas artesanales como la cestería y la elaboración de tallas en tagua. Sus mitos enfatizan valores comunitarios, respeto a los mayores, y la responsabilidad de cuidar la selva para las futuras generaciones.",
    imagePrompt: "Emberá village on Pacific river, traditional palafitos, rainforest spirits, ceremonial gathering, artisan crafts"
  },
  "chimila": {
    title: "Chimila",
    description: "Pueblo indígena del Caribe colombiano, herederos de relatos sobre la creación, los primeros pobladores y las guerras ancestrales.",
        sections: [
      {
        title: "Quiénes son",
        body: "Los Chimila, originalmente conocidos como Paretare, son un pueblo indígena de la región Caribe colombiana, habitantes ancestrales del departamento del Cesar y áreas cercanas a la Sierra Nevada de Santa Marta.",
      },
      {
        title: "Su cosmogonía",
        body: "Su mitología preserva relatos fundamentales sobre la creación del mundo por Papá Grande, quien formó la tierra y los primeros pueblos, guiando a los Chimila con flechas de caña maná que marcaron lugares sagrados como San Ángel y Cartagena. Los mitos chimila narran el origen del sol y la luna en una danza cósmica que refleja la interacción entre lo divino y lo natural, personificando al sol con fragilidad y fuerza simultáneas.",
      },
      {
        title: "Lo que enseña su tradición oral",
        body: "La tradición oral chimila también incluye relatos sobre encuentros con caníbales que exploran el miedo y los conflictos comunitarios, así como las primeras guerras entre Aruacos, Chimilas y Karíbi, mostrando una historia de tensiones y reconciliaciones en un contexto de cambio sociocultural. Estos mitos transmiten enseñanzas sobre la importancia del territorio, la defensa de la identidad cultural y el mantenimiento de la memoria ancestral.",
      },
    ],
longDescription: "Los Chimila, originalmente conocidos como Paretare, son un pueblo indígena de la región Caribe colombiana, habitantes ancestrales del departamento del Cesar y áreas cercanas a la Sierra Nevada de Santa Marta. Su mitología preserva relatos fundamentales sobre la creación del mundo por Papá Grande, quien formó la tierra y los primeros pueblos, guiando a los Chimila con flechas de caña maná que marcaron lugares sagrados como San Ángel y Cartagena. Los mitos chimila narran el origen del sol y la luna en una danza cósmica que refleja la interacción entre lo divino y lo natural, personificando al sol con fragilidad y fuerza simultáneas. La tradición oral chimila también incluye relatos sobre encuentros con caníbales que exploran el miedo y los conflictos comunitarios, así como las primeras guerras entre Aruacos, Chimilas y Karíbi, mostrando una historia de tensiones y reconciliaciones en un contexto de cambio sociocultural. Estos mitos transmiten enseñanzas sobre la importancia del territorio, la defensa de la identidad cultural y el mantenimiento de la memoria ancestral.",
    imagePrompt: "Chimila people in Caribbean lowlands, Papá Grande creation myth, sacred arrows marking territory, ancestral gatherings"
  },
  "pananes": {
    title: "Pananes",
    description: "Comuneros de Panán, guardianes de tradiciones mestizas sobre lugares sagrados, espíritus de agua y sincretismo cultural.",
        sections: [
      {
        title: "Quiénes son",
        body: "Los Pananes o comuneros de Panán son habitantes de la región andina que han preservado una rica tradición oral que fusiona elementos indígenas prehispánicos con influencias católicas coloniales, creando un sincretismo cultural único. Su mitología está profundamente conectada con la geografía sagrada de su territorio, incluyendo lugares como el Ojo de Agua, la Laguna de María Panana, y la Chorrera del Duende.",
      },
      {
        title: "Su mitología",
        body: "Los mitos pananes narran el origen de su estirpe en La Tuta, donde la dualidad entre luz y sombra forjó una comunidad inmortal. El Cucho de Cuaichala representa el sincretismo cultural donde música y danza expresan la evolución espiritual del pueblo. Los relatos sobre el Cualchio y la Olla del Granizo explican fenómenos naturales como la precipitación, mientras que la Laguna de María Panana es venerada como lugar sagrado de encantos y purificación.",
      },
      {
        title: "Lo que enseña su tradición oral",
        body: "La tradición oral de Panán preserva historias sobre el duende de la Cangagua, entrelazando misterio y realidad en narrativas que mantienen viva la conexión entre los comuneros y su territorio ancestral.",
      },
    ],
longDescription: "Los Pananes o comuneros de Panán son habitantes de la región andina que han preservado una rica tradición oral que fusiona elementos indígenas prehispánicos con influencias católicas coloniales, creando un sincretismo cultural único. Su mitología está profundamente conectada con la geografía sagrada de su territorio, incluyendo lugares como el Ojo de Agua, la Laguna de María Panana, y la Chorrera del Duende. Los mitos pananes narran el origen de su estirpe en La Tuta, donde la dualidad entre luz y sombra forjó una comunidad inmortal. El Cucho de Cuaichala representa el sincretismo cultural donde música y danza expresan la evolución espiritual del pueblo. Los relatos sobre el Cualchio y la Olla del Granizo explican fenómenos naturales como la precipitación, mientras que la Laguna de María Panana es venerada como lugar sagrado de encantos y purificación. La tradición oral de Panán preserva historias sobre el duende de la Cangagua, entrelazando misterio y realidad en narrativas que mantienen viva la conexión entre los comuneros y su territorio ancestral.",
    imagePrompt: "Pananes highland community, sacred lagoons and water springs, Catholic-indigenous syncretism, mystical fog-covered landscapes"
  },
  // Clave alineada con la base: `ufaina`, no `tanimuka`. La comunidad se
  // registra como «Ufaina / Tanimuka», así que el título recoge las dos formas.
  "ufaina": {
    title: "Ufaina / Tanimuka",
    description: "Pueblo amazónico conocido por sus elaborados mitos de creación y transformación.",
    longDescription: "Los Ufaina o Tanimuka habitan la región amazónica colombiana en el departamento del Amazonas, cerca del río Apaporis. Su tradición oral es extremadamente rica en relatos cosmogónicos que explican el origen del mundo, los animales, las plantas y las prácticas culturales. Los mitos tanimuka frecuentemente presentan transformaciones entre humanos y animales, viajes entre mundos, y enseñanzas sobre el uso apropiado de los recursos naturales. Sus relatos preservan profundos conocimientos ecológicos sobre la selva amazónica.",
    imagePrompt: "Tanimuka cosmic creation, Amazon river spirits, transformation mythology, pristine rainforest"
  },
  // La clave `uitoto` se retiró: la comunidad de la base es `huitotos`, y su
  // ficha ya cubre lo mismo con `sections`.
  "huitotos": {
    title: "Huitotos",
    description: "Pueblo amazónico guardián de una rica tradición sobre la creación, la palabra sagrada y los ciclos de renovación.",
        sections: [
      {
        title: "Quiénes son",
        body: "Los Huitotos son un pueblo indígena de la región amazónica que ha preservado una de las mitologías más complejas y filosóficas de Colombia.",
      },
      {
        title: "Su cosmogonía",
        body: "Sus relatos cosmogónicos narran cómo Nofïdeño (la Madre) y Uuikï (el Padre) ordenaron el caos primordial y crearon el mundo a través de la palabra sagrada. Los mitos huitotos exploran temas de creación y restauración, transformación espiritual, y el profundo conocimiento sobre plantas sagradas como el tabaco y la yuca. Historias como la de Jirayauma revelan astucia y supervivencia, mientras que los relatos de Jitoma y Fïboi exploran la traición y las consecuencias de romper el equilibrio natural.",
      },
      {
        title: "Lo que enseña su tradición oral",
        body: "La tradición oral huitoto enfatiza la importancia de las ceremonias en maloca, el mambeadero como espacio de transmisión de conocimiento, y la relación sagrada entre pensamiento, palabra y creación del cosmos.",
      },
    ],
longDescription: "Los Huitotos son un pueblo indígena de la región amazónica que ha preservado una de las mitologías más complejas y filosóficas de Colombia. Sus relatos cosmogónicos narran cómo Nofïdeño (la Madre) y Uuikï (el Padre) ordenaron el caos primordial y crearon el mundo a través de la palabra sagrada. Los mitos huitotos exploran temas de creación y restauración, transformación espiritual, y el profundo conocimiento sobre plantas sagradas como el tabaco y la yuca. Historias como la de Jirayauma revelan astucia y supervivencia, mientras que los relatos de Jitoma y Fïboi exploran la traición y las consecuencias de romper el equilibrio natural. La tradición oral huitoto enfatiza la importancia de las ceremonias en maloca, el mambeadero como espacio de transmisión de conocimiento, y la relación sagrada entre pensamiento, palabra y creación del cosmos.",
    imagePrompt: "Huitoto ceremonial maloca, sacred tobacco and yuca, Amazon creation mythology, spiritual renewal"
  },
  // La clave `kogui` se retiró: la comunidad de la base es `koguis`.
  "koguis": {
    title: "Koguis",
    description: "Guardianes ancestrales de la Sierra Nevada de Santa Marta, el corazón del mundo y centro del equilibrio cósmico.",
        sections: [
      {
        title: "Quiénes son",
        body: "Los Koguis son uno de los cuatro pueblos indígenas que habitan la Sierra Nevada de Santa Marta en la región Caribe, considerada por ellos como el 'Corazón del Mundo' y centro del universo.",
      },
      {
        title: "Su cosmogonía",
        body: "Su mitología cosmogónica narra la creación del mundo a través de nueve mundos previos, cada uno habitado por seres espirituales que evolucionaron hasta formar la humanidad actual. Los mitos koguis hablan de la Madre Wastora (Haba-Naowa) quien creó la diversidad étnica de la humanidad a partir de transformaciones corporales y espirituales. El relato de Kimaku y otros héroes culturales explica el origen del sol y la luna, los rituales necesarios para mantener su luz, y la importancia del primer hombre y la primera mujer en establecer el orden social.",
      },
      {
        title: "Los Mamos, guardianes del conocimiento",
        body: "Los Mamos (líderes espirituales) son depositarios de este conocimiento sagrado y actúan como intermediarios entre lo material y lo espiritual, guiando a su pueblo en el cuidado del equilibrio ecológico del planeta.",
      },
    ],
longDescription: "Los Koguis son uno de los cuatro pueblos indígenas que habitan la Sierra Nevada de Santa Marta en la región Caribe, considerada por ellos como el 'Corazón del Mundo' y centro del universo. Su mitología cosmogónica narra la creación del mundo a través de nueve mundos previos, cada uno habitado por seres espirituales que evolucionaron hasta formar la humanidad actual. Los mitos koguis hablan de la Madre Wastora (Haba-Naowa) quien creó la diversidad étnica de la humanidad a partir de transformaciones corporales y espirituales. El relato de Kimaku y otros héroes culturales explica el origen del sol y la luna, los rituales necesarios para mantener su luz, y la importancia del primer hombre y la primera mujer en establecer el orden social. Los Mamos (líderes espirituales) son depositarios de este conocimiento sagrado y actúan como intermediarios entre lo material y lo espiritual, guiando a su pueblo en el cuidado del equilibrio ecológico del planeta.",
    imagePrompt: "Kogui mamos in Sierra Nevada, sacred mountain peaks, Mother Universal creation, cosmic balance guardianship"
  },
  // La clave `nasa` se retiró: la comunidad de la base es `nasa-paeces`.
  "nasa-paeces": {
    title: "Nasa - Páez",
    description: "Pueblo indígena del Cauca y Huila, conocido por su resistencia cultural y profunda conexión con la tierra ancestral.",
        sections: [
      {
        title: "Quiénes son",
        body: "Los Nasa o Páez son uno de los pueblos indígenas más emblemáticos de Colombia, habitantes ancestrales del departamento del Cauca y sur del Huila en la región Pacífica.",
      },
      {
        title: "Su mitología",
        body: "Su mitología es rica en relatos de resistencia, transformación y conexión con la naturaleza. Los mitos nasa narran historias de héroes culturales que enfrentan adversidades, la importancia de mantener el equilibrio con la Pachamama (madre tierra), y enseñanzas sobre la defensa del territorio.",
      },
      {
        title: "Lo que enseña su tradición oral",
        body: "Su tradición oral ha sido fundamental para preservar su identidad cultural a través de siglos de colonización y conflictos. Los relatos nasa transmiten valores de unidad comunitaria, lucha por la autonomía, respeto a los mayores y armonía con los ciclos naturales.",
      },
    ],
longDescription: "Los Nasa o Páez son uno de los pueblos indígenas más emblemáticos de Colombia, habitantes ancestrales del departamento del Cauca y sur del Huila en la región Pacífica. Su mitología es rica en relatos de resistencia, transformación y conexión con la naturaleza. Los mitos nasa narran historias de héroes culturales que enfrentan adversidades, la importancia de mantener el equilibrio con la Pachamama (madre tierra), y enseñanzas sobre la defensa del territorio. Su tradición oral ha sido fundamental para preservar su identidad cultural a través de siglos de colonización y conflictos. Los relatos nasa transmiten valores de unidad comunitaria, lucha por la autonomía, respeto a los mayores y armonía con los ciclos naturales.",
    imagePrompt: "Nasa people in Cauca mountains, traditional clothing, resistance symbols, sacred territory protection"
  },
  "desana": {
    description: "Pueblo amazónico del Vaupés con elaborados mitos sobre anacondas ancestrales y canoas de transformación.",
        sections: [
      {
        title: "Quiénes son",
        body: "Los Desano habitan la región del Vaupés en la Amazonía colombiana.",
      },
      {
        title: "Su mitología",
        body: "Su mitología es particularmente rica en simbolismo asociado con anacondas ancestrales que transportaron a los primeros humanos por los ríos amazónicos. Los mitos desano incluyen relatos sobre canoas de transformación, casas ceremoniales (malocas) y la organización del cosmos en múltiples niveles. Sus narraciones preservan conocimientos sobre parentesco, territorialidad y la relación sagrada con los ríos y la selva.",
      },
    ],
longDescription: "Los Desano habitan la región del Vaupés en la Amazonía colombiana. Su mitología es particularmente rica en simbolismo asociado con anacondas ancestrales que transportaron a los primeros humanos por los ríos amazónicos. Los mitos desano incluyen relatos sobre canoas de transformación, casas ceremoniales (malocas) y la organización del cosmos en múltiples niveles. Sus narraciones preservan conocimientos sobre parentesco, territorialidad y la relación sagrada con los ríos y la selva.",
    imagePrompt: "Desano anaconda mythology, sacred canoe, Vaupés rivers, Amazon cosmic order"
  },
  "andoque": {
    title: "Andoque",
    description: "Pueblo amazónico con tradiciones sobre la creación y el manejo de recursos naturales.",
        sections: [
      {
        title: "Quiénes son",
        body: "Los Andoque habitan la región amazónica colombiana, principalmente en el departamento del Caquetá.",
      },
      {
        title: "Su mitología",
        body: "Su tradición oral incluye mitos sobre la creación del mundo, el origen de los cultivos y animales, y prácticas ceremoniales relacionadas con la yuca y otros alimentos fundamentales. Los relatos andoque transmiten profundos conocimientos sobre agricultura de selva, manejo sostenible de recursos y la importancia de mantener relaciones armónicas con los espíritus de la naturaleza.",
      },
    ],
longDescription: "Los Andoque habitan la región amazónica colombiana, principalmente en el departamento del Caquetá. Su tradición oral incluye mitos sobre la creación del mundo, el origen de los cultivos y animales, y prácticas ceremoniales relacionadas con la yuca y otros alimentos fundamentales. Los relatos andoque transmiten profundos conocimientos sobre agricultura de selva, manejo sostenible de recursos y la importancia de mantener relaciones armónicas con los espíritus de la naturaleza.",
    imagePrompt: "Andoque village in Caquetá, sacred yuca cultivation, forest spirits, Amazon traditions"
  },
  "barasana": {
    title: "Barasana",
    description: "Pueblo del Vaupés con mitos sobre instrumentos sagrados y ceremonias de yurupary.",
        sections: [
      {
        title: "Quiénes son",
        body: "Los Barasana habitan la región del Vaupés en la Amazonía colombiana.",
      },
      {
        title: "Su mitología",
        body: "Su mitología está fuertemente vinculada a ceremonias de yurupary (instrumentos sagrados) y prácticas rituales masculinas. Los mitos barasana incluyen relatos sobre el origen de estos instrumentos sagrados, la organización social basada en clanes, y transformaciones míticas que establecieron el orden cultural. Su tradición oral preserva conocimientos sobre ceremonias de iniciación, uso de plantas sagradas y la estructura del cosmos.",
      },
    ],
longDescription: "Los Barasana habitan la región del Vaupés en la Amazonía colombiana. Su mitología está fuertemente vinculada a ceremonias de yurupary (instrumentos sagrados) y prácticas rituales masculinas. Los mitos barasana incluyen relatos sobre el origen de estos instrumentos sagrados, la organización social basada en clanes, y transformaciones míticas que establecieron el orden cultural. Su tradición oral preserva conocimientos sobre ceremonias de iniciación, uso de plantas sagradas y la estructura del cosmos.",
    imagePrompt: "Barasana sacred ceremony, yurupary instruments, maloca rituals, Vaupés mythology"
  },
  "guahibo-sikuani": {
    description: "Pueblo de los Llanos Orientales con mitos sobre héroes culturales y la transformación del paisaje.",
        sections: [
      {
        title: "Quiénes son",
        body: "Los Sikuani habitan los Llanos Orientales de Colombia y Venezuela.",
      },
      {
        title: "Su mitología",
        body: "Su mitología incluye relatos sobre Kuwai y otros héroes culturales que transformaron el paisaje llanero, crearon ríos y establecieron prácticas culturales. Los mitos sikuani explican el origen de animales de la sabana, la importancia de las ceremonias de rezo, y las relaciones entre humanos y espíritus de la naturaleza en el ecosistema llanero. Su tradición oral transmite conocimientos sobre navegación, pesca y vida en las sabanas inundables.",
      },
    ],
longDescription: "Los Sikuani habitan los Llanos Orientales de Colombia y Venezuela. Su mitología incluye relatos sobre Kuwai y otros héroes culturales que transformaron el paisaje llanero, crearon ríos y establecieron prácticas culturales. Los mitos sikuani explican el origen de animales de la sabana, la importancia de las ceremonias de rezo, y las relaciones entre humanos y espíritus de la naturaleza en el ecosistema llanero. Su tradición oral transmite conocimientos sobre navegación, pesca y vida en las sabanas inundables.",
    imagePrompt: "Sikuani plains landscape, cultural heroes, savanna spirits, Orinoco region"
  },
  // SIN COMUNIDAD EN LA BASE. Ningún registro de `communities` responde a
  // «macuna» ni por slug ni por nombre, así que esta ficha no se pinta en
  // ninguna página. Se conserva para el día que lleguen sus relatos.
  "macuna": {
    title: "Macuna",
    description: "Pueblo amazónico del Vaupés con tradiciones de pensamiento sagrado y creación.",
    longDescription: "Los Macuna habitan la región del Vaupés en la Amazonía colombiana. Su mitología comparte elementos con otros pueblos tukano, incluyendo relatos sobre anacondas ancestrales, la creación del mundo mediante el pensamiento, y la organización del cosmos. Los mitos macuna preservan conocimientos sobre parentesco, territorialidad y ceremonias sagradas que mantienen el equilibrio entre el mundo humano y espiritual.",
    imagePrompt: "Macuna sacred thought, Vaupés cosmology, ancestral anaconda, Amazon creation"
  },
  "misak-guambianos": {
    title: "Misak",
    description: "Pueblo del Cauca con profundas tradiciones sobre el agua y la tierra.",
        sections: [
      {
        title: "Quiénes son",
        body: "Los Guambianos, también conocidos como Misak, habitan el departamento del Cauca en la región andina.",
      },
      {
        title: "Su mitología",
        body: "Su mitología está profundamente conectada con el agua, considerada sagrada y fundamental para la vida. Los mitos guambianos incluyen relatos sobre el origen de lagunas, ríos y la importancia de mantener el equilibrio hídrico. Su tradición oral enfatiza la conexión espiritual con el territorio ancestral, particularmente con las altas montañas y páramos que habitan.",
      },
    ],
longDescription: "Los Guambianos, también conocidos como Misak, habitan el departamento del Cauca en la región andina. Su mitología está profundamente conectada con el agua, considerada sagrada y fundamental para la vida. Los mitos guambianos incluyen relatos sobre el origen de lagunas, ríos y la importancia de mantener el equilibrio hídrico. Su tradición oral enfatiza la conexión espiritual con el territorio ancestral, particularmente con las altas montañas y páramos que habitan.",
    imagePrompt: "Guambianos water ceremony, Cauca páramo, sacred lagoons, Misak traditions"
  },
  "ticuna": {
    description: "Pueblo amazónico de la triple frontera con elaborados mitos de creación y transformación.",
        sections: [
      {
        title: "Quiénes son",
        body: "Los Tikunas habitan la región amazónica en la frontera entre Colombia, Brasil y Perú.",
      },
      {
        title: "Su mitología",
        body: "Su mitología es extremadamente rica e incluye elaborados ciclos narrativos sobre la creación del mundo, el origen de los clanes, y transformaciones míticas. Los mitos tikuna presentan complejas cosmologías con múltiples niveles del universo, relatos sobre héroes gemelos, y enseñanzas sobre organización social. Su tradición oral es una de las más extensas de la Amazonía.",
      },
    ],
longDescription: "Los Tikunas habitan la región amazónica en la frontera entre Colombia, Brasil y Perú. Su mitología es extremadamente rica e incluye elaborados ciclos narrativos sobre la creación del mundo, el origen de los clanes, y transformaciones míticas. Los mitos tikuna presentan complejas cosmologías con múltiples niveles del universo, relatos sobre héroes gemelos, y enseñanzas sobre organización social. Su tradición oral es una de las más extensas de la Amazonía.",
    imagePrompt: "Tikuna creation myths, Amazon triple frontier, clan origins, cosmic levels"
  },
  // Clave alineada con la base: `nukak-maku`. El archivo registra el nombre en
  // la grafía del propio pueblo, «Nɨkak», y el título la respeta.
  "nukak-maku": {
    title: "Nɨkak",
    description: "Pueblo nómada amazónico con tradiciones sobre movilidad y conocimiento de la selva.",
    longDescription: "Los Nɨkak, registrados también como Nukak, son un pueblo de tradición nómada que habita la región amazónica entre el Guaviare y el Vaupés. Su mitología refleja su estilo de vida móvil y profundo conocimiento de la selva. Los mitos nukak incluyen relatos sobre los caminos ancestrales, la relación con espíritus de animales y plantas, y prácticas de caza y recolección sostenibles. Su tradición oral preserva un extraordinario conocimiento ecológico sobre la selva amazónica.",
    imagePrompt: "Nukak nomadic life, Amazon forest paths, hunting spirits, traditional mobility"
  },
  "u-wa": {
    title: "U'wa",
    description: "Pueblo de la Sierra Nevada del Cocuy con profunda conexión espiritual con el petróleo y el equilibrio terrestre.",
        sections: [
      {
        title: "Quiénes son",
        body: "Los U'wa habitan la Sierra Nevada del Cocuy en la región andina.",
      },
      {
        title: "Su mitología",
        body: "Su mitología enfatiza la profunda responsabilidad de mantener el equilibrio de la tierra. Los U'wa consideran el petróleo como la 'sangre de la tierra' y tienen mitos que advierten sobre las consecuencias de su extracción. Sus relatos incluyen enseñanzas sobre el origen del mundo, la importancia de las lagunas sagradas en los páramos, y el rol de los humanos como cuidadores del planeta.",
      },
    ],
longDescription: "Los U'wa habitan la Sierra Nevada del Cocuy en la región andina. Su mitología enfatiza la profunda responsabilidad de mantener el equilibrio de la tierra. Los U'wa consideran el petróleo como la 'sangre de la tierra' y tienen mitos que advierten sobre las consecuencias de su extracción. Sus relatos incluyen enseñanzas sobre el origen del mundo, la importancia de las lagunas sagradas en los páramos, y el rol de los humanos como cuidadores del planeta.",
    imagePrompt: "U'wa Sierra Nevada del Cocuy, sacred petroleum, earth balance, páramo spirituality"
  },
  // Clave alineada con la base: `kuibas`, registrada como «Kuiva (Wamonae)».
  "kuibas": {
    title: "Kuiva (Wamonae)",
    description: "Pueblo de los Llanos Orientales con tradiciones sobre la vida en las sabanas.",
    longDescription: "Los Kuiva habitan los Llanos Orientales de Colombia. Su mitología refleja la vida en las extensas sabanas llaneras e incluye relatos sobre el origen de animales característicos de la región, la importancia de los ríos y caños, y ceremonias relacionadas con los ciclos naturales de lluvia y sequía. Los mitos kuiva transmiten conocimientos sobre navegación por las sabanas inundables y la relación armónica con el ecosistema llanero.",
    imagePrompt: "Kuiva savanna life, llanos plains, river spirits, seasonal cycles"
  },
  // SIN COMUNIDAD EN LA BASE (ver la nota de `macuna`).
  "kurripaco": {
    title: "Kurripaco",
    description: "Pueblo arawak de la Orinoquía con tradiciones sobre Kuwai y transformaciones culturales.",
    longDescription: "Los Kurripaco pertenecen al grupo lingüístico arawak y habitan la región de la Orinoquía colombiana y venezolana. Su mitología incluye elaborados relatos sobre Kuwai, un héroe cultural transformador, y el origen de ceremonias sagradas. Los mitos kurripaco explican la creación de instrumentos musicales rituales, prácticas ceremoniales y la organización social. Su tradición oral preserva conocimientos sobre el manejo de recursos de ríos y selvas de galería.",
    imagePrompt: "Kurripaco Kuwai mythology, Orinoco region, sacred instruments, cultural transformation"
  },
  // SIN COMUNIDAD EN LA BASE (ver la nota de `macuna`).
  "yanacona": {
    title: "Yanacona",
    description: "Pueblo del Macizo Colombiano con tradiciones de resistencia y reconexión cultural.",
    longDescription: "Los Yanacona habitan el Macizo Colombiano en el departamento del Cauca. Su historia incluye procesos de pérdida y recuperación cultural, y sus mitos reflejan esta experiencia de resistencia. La tradición oral yanacona incluye relatos sobre el origen de su territorio, la importancia de las montañas y páramos, y narrativas que han permitido la reconexión con prácticas ancestrales. Sus mitos enfatizan la resiliencia y la importancia de mantener la identidad cultural.",
    imagePrompt: "Yanacona Macizo Colombiano, cultural resistance, mountain spirituality, ancestral recovery"
  },
  "tucano": {
    title: "Tucano",
    description: "Pueblo del Vaupés con complejos mitos sobre anacondas ancestrales y organización social.",
        sections: [
      {
        title: "Quiénes son",
        body: "Los Tucano habitan la región del Vaupés en la Amazonía colombiana y brasileña.",
      },
      {
        title: "Su mitología",
        body: "Su mitología es extremadamente elaborada e incluye ciclos narrativos sobre anacondas ancestrales que transportaron a los primeros humanos por los ríos amazónicos hasta sus territorios actuales. Los mitos tucano explican el origen de los clanes, la organización social basada en descendencia patrilineal, ceremonias de maloca y el uso de plantas sagradas. Su tradición oral preserva profundos conocimientos sobre territorialidad, parentesco y cosmología amazónica.",
      },
    ],
longDescription: "Los Tucano habitan la región del Vaupés en la Amazonía colombiana y brasileña. Su mitología es extremadamente elaborada e incluye ciclos narrativos sobre anacondas ancestrales que transportaron a los primeros humanos por los ríos amazónicos hasta sus territorios actuales. Los mitos tucano explican el origen de los clanes, la organización social basada en descendencia patrilineal, ceremonias de maloca y el uso de plantas sagradas. Su tradición oral preserva profundos conocimientos sobre territorialidad, parentesco y cosmología amazónica.",
    imagePrompt: "Tucano anaconda ancestry, Vaupés rivers, maloca ceremonies, clan origins"
  }
};

/** Devuelve la ficha del pueblo, o `null` si todavía no se ha escrito. */
export function communityInfo(slug) {
  return COMMUNITY_INFO[slug] || null;
}

/**
 * Bloques con título para la cédula. Si el pueblo no tiene `sections`
 * escritas, se sirve su texto largo como un solo bloque.
 */
export function communitySections(slug, fallbackLong) {
  const info = COMMUNITY_INFO[slug];
  if (info?.sections?.length) return info.sections;
  const texto = info?.longDescription || fallbackLong;
  return texto ? [{ title: "El pueblo", body: texto }] : [];
}
