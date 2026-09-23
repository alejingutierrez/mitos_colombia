import {
  defineJuanLaraTransfer,
  defineZenuMyth,
} from "./define-editorial-myth.mjs";

const records = [
  defineZenuMyth({
    slug: "mexion-y-manexca",
    sourceKeys: [
      {
        key: "onicLeyOrigen",
        summary:
          "Su apartado de Ley de Origen zenú abre la genealogía un paso antes que las cartillas: Ixitoco crea a Mexión y Manexka, y de la pareja nacen Momíl, Arachi, Chimá, Betancí y Tuchín, de quienes salen los caciques de Panzenú, Finzenú y Zenufana. Aporta también el esquema de tres mundos que la síntesis toma del tomo I del Plan de Vida del resguardo (Tuchín, 2015).",
        limitation:
          "Es una síntesis de segunda mano, no una transcripción: resume el Plan de Vida y apoya la genealogía de Ixitoco en una entrada de blog de 2009 (nota 46). No narra la primera luz ni la primera noche.",
      },
      {
        key: "drexler2002",
        summary:
          "Documenta en el resguardo que los zenúes veneraban al Sol como Ninha, a la Luna como Thi y a la estrella matutina como Uhrira, y que la gente conservaba los nombres de mohamay, molemdero y los ojos de la Santa Lucía. Un curioso de Chuzo le contó que reza al sol al recolectar plantas y las ceteras que trabajan con la luna: los astros del mito siguen operando en la práctica médica.",
        limitation:
          "El libro no menciona ni una vez a Mexión ni a Manexca en 169 páginas: sostiene los nombres de los astros, no la pareja creadora ni la secuencia de la primera noche. El PDF sólo se abre en navegador; el servidor devuelve 403 a otros clientes.",
      },
      {
        key: "defensoria2022",
        summary:
          "Su capítulo territorial afirma que San Andrés de Sotavento fue fundado por el cacique Mexión, esposo de Manexca, «los padres mitológicos de la raza zenú», y que al refundarse hacia 1600 el lugar se llamó San Andrés de Mexión antes de constituirse en resguardo.",
        limitation:
          "Es una cartilla de divulgación sobre resolución de conflictos, no un estudio de tradición oral: da la pareja en una frase, sin relato, sin narradores y con fechas que no coinciden con las de otras fuentes.",
      },
      {
        key: "faoAgriculturaAnfibia",
        summary:
          "Recoge, citando a Drexler, que en la cosmología zenú se veneraba al Sol (Ninha), a la Luna (Thi) y a la Estrella Matutina (Uhrira) como dioses, y enlaza esos nombres con el calendario lunar de siembra que las familias del sistema anfibio siguen usando.",
        limitation:
          "Es un informe técnico sobre agricultura y no una fuente de tradición oral: reproduce el pasaje de Drexler y no añade registro propio del mito ni narradores.",
      },
      {
        key: "zenuPlan",
        summary:
          "Confirma que los nombres del relato siguen nombrando instituciones vivas del resguardo: el centro artesanal Mexión de Tuchín, la emisora comunitaria Mexión Stereo y la IPS indígena Manexka. Trae además una fórmula de tres líneas donde Mexión es «el dios creador del mundo».",
        limitation:
          "El documento es un plan de salvaguardia del trenzado, no un corpus de mitos: menciona a Mexión de pasada y no narra la creación de la luz ni la descendencia.",
      },
      {
        key: "nietoCambios1988",
        summary:
          "Fija el marco material del poblamiento que el relato reparte entre los hijos: la depresión momposina, hoy inundada la mayor parte del año, estuvo densamente poblada por los zenúes y sus antecesores, que levantaron más de quinientas mil hectáreas de canales artificiales entre Tierra Santa y la desembocadura del San Jorge.",
        limitation:
          "Es arqueología y paleoecología, no tradición viva: sirve para no confundir la ocupación prehispánica del territorio con los episodios del mito y no aporta ningún personaje.",
      },
      {
        key: "minCulturaZenu",
        summary:
          "Sitúa al pueblo zenú de hoy en Córdoba y Sucre y señala que las fábulas, los mitos, las leyendas y los cuentos configuran su sistema de creencias, junto a los oficios del trenzado y la agricultura que el relato reparte entre los descendientes.",
        limitation:
          "Es un perfil institucional que resume fuentes anteriores: no transcribe ningún mito ni nombra a Mexión, Manexca, Ninha o Thi.",
      },
      {
        key: "communityCreation",
        summary:
          "Es el único texto que trae la secuencia completa: la oscuridad y el frío, la pareja, la lista larga de hijos con sus nombres de lugar, el hijo enviado al cielo que se vuelve Ninha, el reparto de oficios, la gente agotada por la luz continua, el sol mandado a dormir, la primera noche y Mexión convertido en Thi.",
        limitation:
          "Cartilla etnoeducativa sin pie de imprenta, sin año y sin narradores: su única copia abierta está alojada en un sitio comunitario de WordPress. No debe usarse como fuente clave mientras no aparezca una edición del resguardo; aquí va en último lugar y sostiene sólo el hilo narrativo.",
      },
    ],
    title: "Mexión y Manexca: la primera luz",
    excerpt:
      "En un mundo oscuro y frío, Mexión y Manexca pueblan el Gran Zenú; Ninha sube como Sol y Thi acompaña la primera noche.",
    tags: ["creación", "sol", "luna", "origen humano"],
    mito: `Al principio la tierra del Gran Zenú estaba húmeda, fría y sin luz. No había astros, ni plantas, ni animales, y nadie caminaba sobre las sabanas. En esa oscuridad vivían Mexión y Manexca: él, comparado con un sol que todavía no salía; ella, recordada como una mujer de un solo seno.

De la pareja nacieron hijos, y los nombres de esos hijos se quedaron pegados a lugares que hoy se nombran en Córdoba y en Sucre. Con ellos aparecieron también los animales y los árboles. La obra no se hizo de un golpe: llevó tiempo extender la vida por la llanura.

Mexión repartió a sus descendientes. A cada uno lo puso en una zona distinta y distante, y a cada uno lo dotó de una inteligencia propia para que desarrollara un arte en su sitio.

Como el mundo seguía a oscuras, tomó a uno de sus hijos y lo mandó al cielo. Allí se convirtió en Ninha, el sol. Su claridad calentó y endureció la tierra, separó las aguas dulces de las saladas, levantó lomas y cerros, y dejó ver los ríos, las quebradas y los arroyos por donde corre el agua.

La gente que fue poblando aquella primera tierra aprendió oficios distintos. Unos modelaron tinajas, múcuras, platos y vasijas de barro; otros trabajaron el oro; otros trenzaron fibras blandas y duras, la iraca, la caña flecha, la enea y el bejuco. Hubo quienes sembraron yuca y maíz, quienes aprendieron a curar y quienes aprendieron a conducir el agua por la sabana. El saber no fue de uno solo: quedó repartido entre los hijos.

Pero Ninha alumbraba sin parar. Bajo aquella luz continua la gente trabajó largo tiempo sin descanso y terminó agotada. Los hijos le pidieron ayuda al padre. Mexión, que estaba contento con su obra y quería que sus seres estuvieran contentos también, mandó entonces a Ninha a dormir unas horas.

El sol cayó en un sueño profundo. La claridad se acabó y todo volvió a oscurecerse: ésa fue la primera noche. Enseguida Mexión subió al cielo y se convirtió en Thi, la luna.

Desde entonces el padre y el hijo se reparten la misma tarea de alumbrar: uno la hace de día y el otro de noche. La oscuridad dejó de ser el estado anterior a todo y pasó a ser la mitad de un turno.

Junto a Ninha y a Thi, los antiguos nombraron también a Uhrira, la estrella matutina, y guardaron los nombres de otros astros que salen a horas fijas: al lucero del día lo llamaban molemdero, y a tres estrellas pequeñas que siempre nacen juntas, los ojos de la Santa Lucía, que asoman cada 13 de diciembre.`,
    historia: `Ninguna pieza de este relato llega al presente por la misma vía, y conviene seguir cada una por separado.

La pareja creadora está fijada en documentos oficiales del municipio y del resguardo. La cartilla que la Defensoría del Pueblo publicó en Bogotá en 2022 sobre San Andrés de Sotavento, Tuchín y San Antero abre su capítulo territorial diciendo que el pueblo fue fundado por el cacique Mexión, esposo de Manexca, los padres mitológicos de la etnia, y recordando que al refundarse hacia 1600 el lugar se llamó San Andrés de Mexión. Los nombres siguen circulando fuera del relato: el centro artesanal de Tuchín, la emisora comunitaria y una de las IPS indígenas del resguardo se llaman Mexión y Manexka, según el Plan Especial de Salvaguardia que el Cabildo Mayor Regional del Pueblo Zenú presentó al Ministerio de Cultura.

Los nombres de los astros vienen de otro lado. El etnólogo Josef Drexler trabajó con curanderos, rezanderos y familias del antiguo resguardo de San Andrés de Sotavento y de San Pedro Alcántara de Sabaneta, y publicó el resultado en Quito en 2002, en un libro de 169 páginas. En su página 37 anota que los zenúes veneraban al Sol como Ninha, a la Luna como Thi y a la estrella matutina como Uhrira, y que la gente todavía conservaba los nombres de otros astros: mohamay para la estrella matutina del occidente, molemdero para el lucero del día, ojos de la Santa Lucía para las tres que salen juntas el 13 de diciembre. Un curioso de Chuzo le contó que le reza al sol cuando recolecta sus plantas medicinales; las ceteras le dijeron que ellas trabajan con la luna. Ese mismo par reaparece en 2021 en el estudio que la FAO hizo con el Ministerio de Agricultura sobre la agricultura anfibia zenú, que cita a Drexler para explicar por qué el calendario de siembra se lee en el cielo.

La genealogía tiene un tercer camino. El Documento madre de leyes de origen que la ONIC publicó en 2023 reconstruye la Ley de Origen zenú apoyándose en el tomo I del Plan de Vida del resguardo, fechado en Tuchín en 2015.

La secuencia completa, de la oscuridad a la primera noche, circula en las cartillas etnoeducativas del resguardo, que la presentan como lo que narran los viejos nativos de San Andrés de Sotavento y de Tuchín.`,
    versiones: `El comienzo no es el mismo en todos los registros.

La cartilla etnoeducativa arranca con Mexión y Manexca ya presentes en la oscuridad y despliega una lista larga de hijos: Tuchínzunga, Sajú, Panaguá, Colosiná, Pinchorroy, Momy, Tolú, Orica, Chimá, Mapurincé, Morroy, Sampuí, Chinchelejo, Mochá, Chalé y Colosó, con los dos últimos como hermanos guerreros, tío y padre del indio Bactazá. Allí las aguas se las lleva Mexión a sus hijos Orica y Tolú, y la parte seca recibe el nombre de resguardo.

El Documento madre de la ONIC empieza un paso antes: Ixitoco crea a Mexión y a Manexka, los llama sus hijos, y de esa pareja nacen Momíl, Arachi, Chimá, Betancí y Tuchín. De esos cinco salen Panzenú, Finzenú y Zenufana, caciques de sus territorios, repartidos entre los sistemas de riego, los sombreros y la cerámica. De las dos listas de descendientes sólo coincide Chimá.

La ortografía se mueve con la fuente: Manexca en la cartilla y en la Defensoría, Manexka en la ONIC y en los nombres institucionales del resguardo.

El reparto del cielo también cambia. La cartilla deja a Ninha como sol y a Thi como luna, y añade que hoy Ninha-Thi nombra una divinidad doble que representa al hombre y a la mujer zenú. Drexler recogió un tercer nombre que la cartilla no trae, Uhrira, y encontró que en la práctica de los curanderos el sol y la luna no son personajes de un relato antiguo sino fuerzas con hora fija: las plantas solares se cortan a mediodía, las lunares a las seis de la tarde, y la luna del día, Venus, tiene su hora y su planta.

El Plan Especial de Salvaguardia da un cuarto arranque, de tres líneas: Mexión es el dios creador que construyó la base del mundo tejiendo, sin pareja y sin hijos nombrados.`,
    similitudes: `El paso de una claridad sin interrupción a la alternancia de día y noche organiza muchos relatos de origen. Éste se reconoce por nombres y lugares propios: Mexión, Manexca, Ninha, Thi, Uhrira y una descendencia que se queda pegada a los pueblos del Sinú y del San Jorge.

Drexler dejó dos parentescos por escrito. El primero es caribe y andino: entre coyaimas y natagaimas del Tolima, según registró Franz Faust en 1986, la iglesia más antigua de la región se asienta sobre un agua capaz de hundir la tierra, exactamente como en San Andrés de Sotavento. El segundo es amazónico: la idea de que los astros son transformaciones de sabios muertos, que Drexler encontró entre los curiosos zenúes, la documentó Norman Whitten entre los canelos quichuas del Ecuador.

Dentro de este mismo corpus hay un vecino que conviene no confundir. El relato del sombrero que ordenó el universo comparte la figura de Mexión y la idea de poner cada cosa en su lugar, pero no cuenta la primera noche: allí no hay sol que se duerma ni padre que suba a la luna, sino una capa tejida que se aplana bajo el peso de la vida. Uno explica un turno; el otro, una estructura.

Y la red de canales artificiales que cubrió más de quinientas mil hectáreas de la depresión momposina, levantada por el equipo del Museo del Oro, explica el poblamiento de esa llanura por vía arqueológica. Es el mismo territorio, no el mismo tipo de relato.`,
    leccion:
      "La luz que no cesa agota lo que sostiene, y el descanso es parte del orden que hace vivible el mundo.",
    sceneHorizontal:
      "Mexión y Manexca permanecen en primer plano mientras Ninha asciende como disco solar y revela gradualmente agua, lomas, árboles y pequeños grupos humanos en el Gran Zenú",
    sceneVertical:
      "Thi aparece como luna clara sobre un territorio ya poblado donde personas adultas dejan sus labores y descansan, mientras el disco de Ninha baja detrás de las sabanas",
    researchNotes:
      "FICCIÓN HEREDADA REEMPLAZADA: elimina el bastón, la trenza cosmogónica, el maíz con nombres y los camellones creados por Mexión. Restituye una secuencia comunitaria y declara la variante de Ixitoco.",
    seoTitle: "Mexión y Manexca: creación y primera luz",
    seoDescription:
      "Mito Zenú documentado sobre Mexión y Manexca, el poblamiento del Gran Zenú, Ninha como Sol, Thi como Luna y el origen de la primera noche.",
    focusKeywords: [
      "Mexión y Manexca",
      "mito de creación Zenú",
      "Ninha Sol Zenú",
      "Thi Luna Zenú",
      "primera noche Zenú",
    ],
  }),
  defineZenuMyth({
    slug: "la-noche-mas-larga",
    sourceKeys: [
      {
        key: "onicLeyOrigen",
        summary:
          "Reproduce entre comillas, citando a W. Mendoza (2010), el núcleo del relato: Mexión y Manexka viven en el cielo con sus hijos, su hijo Tarra construye con los mensajeros una capa inmensa de caña flecha, Mexión le da forma cónica para observar la tierra, los descendientes suben y el peso aplana el cono hasta dejar el ala. Asigna plantilla, copa, pintas y ala a cielo, naturaleza, flora y fauna y abundancia.",
        limitation:
          "Cita a Mendoza en un párrafo y no reproduce el original completo: no hay narrador, ni lugar, ni fecha de recolección detrás del pasaje.",
      },
      {
        key: "zenuPlan",
        summary:
          "Da la versión que el propio cabildo escribió: en su capítulo histórico el sombrero nace de la cestería y del maíz, sin Tarra ni mensajeros, y en la ficha del centro artesanal de Tuchín aparece la fórmula corta en que Mexión teje solo una alfombra inmensa de caña flecha y le pone un techo cónico de fibra de pitahaya.",
        limitation:
          "Documento de política patrimonial, no de tradición oral: recoge el origen técnico como historia oficial de la manifestación y deja el relato mítico reducido a tres líneas en un recuadro turístico.",
      },
      "villadiegosombrero1984",
      "argelFortalecimiento2026",
      {
        key: "drexler2002",
        summary:
          "Aporta las tres capas superpuestas del cosmos zenú —el cielo, el mundo del medio y el mundo de abajo— que el relato distribuye entre plantilla, copa y ala, y registra la frase del maestro trenzador Jesús Medardo de Suárez, de Tuchín: «¡La cultura Zenú es chicha de masato, babilla y sombrero vueltiao!».",
        limitation:
          "No conoce el relato del sombrero: en 169 páginas no aparecen Tarra ni la capa de caña flecha. Sostiene la estructura del cosmos, no el episodio.",
      },
      {
        key: "artesaniasHeritage",
        summary:
          "Documenta la declaratoria de 2022 del trenzado en caña flecha como Patrimonio Cultural Inmaterial y explica que la manifestación reúne conocimientos, identidad y lectura del universo en el resguardo.",
        limitation:
          "Nota de prensa institucional: no narra el mito ni identifica fuentes orales, y la declaratoria no autoriza a leer cada pinta como símbolo del relato.",
      },
      {
        key: "artesaniasCanaFlecha",
        summary:
          "Describe la materia prima y el procedimiento del trenzado —corte, raspado, secado, teñido, trenza— que el relato convierte en la hechura de la capa que Tarra encarga a los mensajeros.",
        limitation:
          "Ficha de oficio sin contenido narrativo: sirve para no representar el trenzado con materiales o técnicas inventados y para nada más.",
      },
      {
        key: "severichecanales2022",
        summary:
          "Repasa la red de canales ancestrales de la depresión momposina como sistema hidráulico y como ícono cultural, que es el tercer material —junto a la orfebrería y la cerámica— en el que se lee la misma noción de trama que el relato pone en el sombrero.",
        limitation:
          "Artículo de revisión sobre ingeniería hidráulica y cambio climático: la analogía con el tejido es interpretativa y no procede de ninguna fuente oral.",
      },
    ],
    title: "El sombrero que ordenó el universo",
    excerpt:
      "Tarra encarga una gran capa de caña flecha; Mexión le da forma y el peso de la vida la extiende como sombrero y mundo.",
    tags: ["universo", "cosmos", "tradición", "creación"],
    mito: `Mexión y Manexka vivían en el cielo con sus hijos. Desde allá arriba no alcanzaban a seguir bien lo que pasaba abajo, en la tierra que ya empezaba a poblarse.

Tarra, uno de los hijos, llamó a los mensajeros y les encargó una obra grande. Cortaron caña flecha, la rajaron, la secaron y la trenzaron hasta formar una capa inmensa, con las fibras entrelazadas en espiral, cada vuelta apoyada en la anterior.

Mexión recibió la capa y le levantó el centro hasta dejarla en forma de cono, de modo que desde la punta se pudiera observar lo que ocurría en la tierra. Sobre esa forma quedó repartido el mundo. En lo más alto, donde la trenza se cierra, se quedaron Mexión, Manexka y sus primeros hijos. En la parte del medio quedaron la flora y la fauna, todo lo que crece y todo lo que camina. Y en las vueltas de abajo, las más anchas, quedaron los descendientes.

Los de abajo se dieron cuenta de que había otra parte, más alta, y empezaron a subir. Subieron por las espirales, una tras otra, buscando el cielo. El cono no resistió tanto peso: se fue abriendo, se fue aplanando, hasta que la punta se venció y las vueltas de arriba cayeron hacia afuera.

Lo que se vino abajo no aplastó a los que se habían quedado en las últimas espirales. La parte que cedió se desplegó por encima de ellos y quedó extendida en forma de ala, dándoles sombra en lugar de sepultarlos.

Así quedó el sombrero que se conoce hoy. La plantilla, que es el fondo, es el cielo. La copa, que es el cuerpo, es donde está la naturaleza, y las pintas que la recorren son la flora y la fauna. El ala es el lugar de la abundancia, porque allí fueron a parar las materias vegetales cuando el cono cayó.

Nada de eso quedó suelto. Una fibra sola no sostiene nada: se dobla y se parte. Sostiene la vuelta, y la vuelta sostiene porque está trabada con la de arriba y con la de abajo. El mundo no se sostiene sobre un pilar sino sobre un entrecruzamiento, y por eso tiene la forma que tiene: ancho abajo, cerrado arriba, y con un borde que da sombra a quien se quedó al final de la trenza.

El sombrero no es un retrato del mundo. Es lo que quedó del mundo después de que la vida se le subiera encima.`,
    historia: `El texto que sostiene esta página tiene autor con nombre y lugar. Wilfrido Manuel Mendoza Romero, maestro y gestor cultural zenú de Tuchín, publicó «Ordenando el universo zenú (ORUZEN)» con el Cabildo Mayor Regional del Pueblo Zenú. El libro aparece citado con año 2010 en el documento de la ONIC y con año 2011 en la bibliografía del artículo que E. Ruiz Argel y A. M. Posada publicaron en 2026 en la Revista Científica de Salud y Desarrollo Humano sobre el museo escolar zenú.

La vía por la que el relato llega hasta aquí es indirecta y conviene decirla. El Consejo Mayor de Gobierno y el Sistema de Monitoreo Territorial de la ONIC recogieron el pasaje en el «Documento madre: leyes de origen de los pueblos indígenas de Colombia», publicado en 2023, dentro del apartado sobre la concepción del territorio ancestral zenú. Allí se cita a Mendoza entre comillas para la capa de caña flecha y la forma cónica, y se apoya el resto del apartado en el tomo I del Plan de Vida del resguardo de San Andrés de Sotavento, fechado en Tuchín en 2015, y en Drexler para las tres capas del cosmos.

El propio resguardo escribió sobre el sombrero por otro camino. El Plan Especial de Salvaguardia del trenzado en caña flecha, que el Cabildo Mayor Regional presentó al Ministerio de Cultura para la Lista Representativa de Patrimonio Cultural Inmaterial, dedica su capítulo histórico a un origen técnico: la trenza nace de la cestería, la cestería crece con el maíz en la cuenca del Sinú y el sombrero aparece cuando hace falta cubrirse del sol en las jornadas de siembra y recolección. El mismo documento abre una segunda hipótesis, la del tocado del mohán representado en los remates de bastón de mando, y cita para las pintas los hallazgos cerámicos en zigzag.

El ingeniero monteriano Benjamín Puche Villadiego (1923-2013) había sostenido ese argumento en una conferencia dictada en la Universidad Nacional, sede Medellín, publicada en abril de 1984 y reeditada en el número 60 de la Revista de Extensión Cultural, donde midió vueltas, pies y rombos para defender el origen colombiano del sombrero. En 2022 Artesanías de Colombia y el Ministerio de Cultura anunciaron la inclusión del trenzado en la lista de patrimonio inmaterial.`,
    versiones: `Las dos versiones que circulan no se contradicen tanto como se ignoran.

La que recogió Mendoza y reprodujo la ONIC es un relato con personajes: Mexión y Manexka viven en el cielo, su hijo Tarra manda a los mensajeros, la capa se levanta en cono para vigilar la tierra, los de abajo suben y el peso la aplana. Cada parte del sombrero queda explicada: plantilla, copa, pintas y ala.

La del Plan Especial de Salvaguardia, escrita por el propio Cabildo Mayor Regional, cuenta otra cosa y en otro registro. En su capítulo histórico no hay ni Tarra ni mensajeros: hay canastos, maíz y sol, y una segunda hipótesis chamánica que hace del tocado del mohán el antecesor del sombrero. En la ficha del centro artesanal de Tuchín, el mismo documento trae una tercera fórmula de tres líneas donde Mexión teje solo una alfombra inmensa de caña flecha y le pone encima un techo cónico hecho con fibra de pitahaya, sin que nadie suba ni nada se aplane.

Hay además una lectura que no es narrativa y que el propio Plan de Salvaguardia cita del Museo del Oro: la noción de tejido reaparece en la filigrana de las orejeras, en la trama de los canales de drenaje y en la cerámica. Es un argumento sobre una forma de pensar, no una segunda versión del episodio.

Sobre las pintas conviene una precisión de Puche: en su descripción técnica los dibujos se colocan en vueltas determinadas de la copa y del ala y obedecen a reglas de conteo por rombos y por «pies». La correspondencia entre cada pinta y un ser vivo funciona en el relato; en el taller, lo que manda es el número de vueltas.`,
    similitudes: `Objetos trenzados que valen por el cosmos aparecen en muchas partes. Lo que distingue a éste es que la explicación cubre pieza por pieza un sombrero que todavía se fabrica, se vende y se pone.

Dos paralelos están documentados dentro del propio pensamiento zenú. El primero lo levantó el Museo del Oro y lo recoge el Plan Especial de Salvaguardia: la misma noción de trama organiza la filigrana de las orejeras de oro, la cerámica y la red de canales de drenaje, de modo que tejer y ordenar el territorio resultan el mismo gesto en tres materiales distintos. El segundo es la lectura del cosmos en tres capas superpuestas —el cielo, el mundo del medio y el mundo de abajo—, que Josef Drexler documentó entre curanderos del resguardo y que la ONIC coloca al lado del sombrero: son las mismas tres franjas que el relato reparte entre plantilla, copa y ala.

Dentro de este corpus el relato más cercano es el de la primera luz, porque comparte a Mexión, y se separa en lo esencial: allí el problema es que la claridad no se apaga nunca y se resuelve mandando al sol a dormir; aquí el problema es el peso de la vida sobre una trama y se resuelve con una forma nueva.

Los canales prehispánicos del bajo San Jorge, medidos por el equipo del Museo del Oro y releídos en 2022 por investigadores de la Universidad de Antioquia, se parecen a un tejido visto desde el aire. Son obra de ingeniería fechada, no un episodio del relato.`,
    leccion:
      "Una trama sostiene el peso sólo mientras cada fibra siga enlazada con las que tiene al lado.",
    sceneHorizontal:
      "Tarra observa a varios mensajeros adultos que extienden una enorme capa plana de caña flecha, mientras Mexión levanta su centro y distribuye cielo, agua, plantas y animales",
    sceneVertical:
      "la gran capa ya transformada en sombrero ocupa toda la composición; corona, vueltas y ala sostienen tres ámbitos conectados por agua, raíces y aves sin signos rituales inventados",
    researchNotes:
      "REUTILIZACIÓN DOCUMENTAL DEL SLUG: la Babilla Antigua, la Ceiba Primera y la luz de insectos eran ficción. La ficha presenta ahora el sombrero-universo registrado por SMT-ONIC y distingue contexto arqueológico de narración.",
    seoTitle: "El sombrero que ordenó el universo Zenú",
    seoDescription:
      "Relato Zenú documentado donde Tarra encarga una capa de caña flecha, Mexión organiza la vida y el peso del mundo forma un gran sombrero.",
    focusKeywords: [
      "sombrero universo Zenú",
      "Tarra y Mexión",
      "cosmovisión Zenú",
      "caña flecha universo",
      "mito del sombrero Zenú",
    ],
  }),
  defineZenuMyth({
    slug: "el-caiman-de-oro",
    sourceKeys: [
      {
        key: "drexler2002",
        summary:
          "Es la fuente central: registra en el resguardo la versión donde la cabeza y el corazón del caimán quedan bajo la iglesia de San Andrés de Sotavento, la cola mira hacia la ciénaga de Oro y las patas llegan a Chimá y Palmito; la variante en que la cabeza está en el cerro Tofeme; la del cerro de Bomba y el cerro Vidales; la escena del gringo que cava en la iglesia y se ahoga en el mar subterráneo; y las lecturas políticas de los años setenta. Cita por nombre a Ana-Isabel Martínez Roja, de Cruz del Guayabo, y a Santa Eustoquia, de Los Vidales, y fecha el trasfondo en la llegada de la SAGOC en 1920.",
        limitation:
          "Libro de 2002 en derechos: su ejemplar completo está en el UNM Digital Repository pero el servidor sólo lo entrega a un navegador. El autor trabajó en el sector del bajo Sinú y de Sabaneta, no en todo el resguardo, y sus informantes son mayoritariamente curanderos y campesinos del área de San Andrés.",
      },
      "zenuPlan",
      {
        key: "onicLeyOrigen",
        summary:
          "Aporta, citando a Drexler, la arquitectura en la que el caimán descansa: el mundo de abajo subacuático, los «ojos de agua viva» que nunca se secan y los túneles que según la tradición los comunican por debajo del territorio.",
        limitation:
          "Es una síntesis de tercera mano en este punto: repite a Drexler sin añadir registro propio y no menciona al caimán de oro.",
      },
      {
        key: "faoAgriculturaAnfibia",
        summary:
          "Recoge, también citando a Drexler, que debajo de la tierra hay «agua viva» imaginada como un pozo inmenso, un río caudaloso o un gran mar, y que esa agua se mantiene estable haya invierno o no porque la sostienen los encantos: la capa sobre la que reposa el caimán.",
        limitation:
          "Informe técnico sobre agricultura anfibia: usa la cosmología como contexto y no documenta el relato del caimán.",
      },
      "nietoCambios1988",
      "bordaResistencia2002",
      "larrainRelaciones2024",
      "colombiaResguardo2013",
    ],
    title: "El caimán de oro bajo el resguardo",
    excerpt:
      "Un caimán de oro se extiende bajo San Andrés de Sotavento; su cuerpo sostiene el territorio y no puede extraerse sin hundirlo.",
    tags: ["caimán", "oro", "territorio", "guardián"],
    mito: `Debajo de la iglesia más antigua del resguardo, la de San Andrés de Sotavento, pasa un río que nadie ha visto. No es un caño ni un arroyo: es un mar de agua viva que corre bajo la tierra y que no se seca ni en el peor verano. Sobre esa capa de agua descansa un caimán de oro.

El animal no sale. No se asoma a las ciénagas ni se deja ver en los caminos. Está tendido bajo el suelo, con el cuerpo repartido entre lugares que en la superficie parecen separados: la cabeza y el corazón bajo la iglesia, la cola mirando hacia la Ciénaga de Oro, las patas llegando hasta Chimá y hasta Palmito. Otros lo cuentan al revés y dicen que la cabeza está en el cerro Tofeme y que lo que llega bajo la iglesia es la cola. En lo que nadie discute es en la función: mientras el caimán esté completo y en su sitio, el mundo no se hunde.

La iglesia está levantada encima de un cerro que los antiguos llamaban Peñón Colorado y que era santuario. Por eso el punto donde reposa el corazón del animal es también el corazón del mundo.

Al caimán no se le reza ni se le pide nada. Se le deja quieto. El peligro no viene de él sino de quien quiera sacarlo, porque debajo está el agua y encima está todo lo demás.

Cuentan en Los Vidales que un día llegaron a la iglesia de San Andrés unos hombres de afuera con herramientas. Uno se tiró a cavar en la mitad del templo para sacar el oro. Cavó hasta que el piso cedió y se fue al mar subterráneo, y con él se ahogaron los que lo acompañaban. El agua subió por el hueco y llenó la iglesia hasta arriba. Ésa fue la seña: no cavaron más.

Cuentan también que a la dueña india del cerro Vidales le fueron a proponer que vendiera, y que ella no pudo, porque en ese cerro está el caimán que se extiende desde San Andrés hasta el cerro de Bomba, y sacarlo sería inundar la región entera.

En Sabaneta hubo otro caimán, uno que atravesaba el caserío de naciente a poniente y que jamás nadie vio. Por donde pasaba, las casas se mantenían húmedas. Hace unos años la humedad desapareció de las viviendas: el caimán se fue de Sabaneta.

El oro, entonces, no es premio para quien cave más hondo. Es la medida de lo que se perdería el día en que alguien consiga sacarlo.`,
    historia: `De los relatos zenúes publicados, éste es el mejor documentado y el único con narradoras identificadas por nombre.

El etnólogo Josef Drexler lo recogió en el antiguo resguardo de San Andrés de Sotavento y en Sabaneta, y lo publicó en Quito en 2002 dentro de un libro de 169 páginas sobre cosmología y medicina tradicional. Ana-Isabel Martínez Roja, campesina indígena de la vereda Cruz del Guayabo, le dijo que cuando el blanco consiga sacar el caimán la región quedará inundada y sin luz: «Esto es para la muerte de nosotros». La escena de la iglesia que se llena de agua se la contó una anciana de Los Vidales, y Drexler la cierra con la frase de Santa Eustoquia, de la misma vereda: «¡Ese caimán de oro no lo saquen!». La historia del caimán invisible de Sabaneta y de la humedad que se fue con él se la contaron los abuelos del pueblo.

Drexler fecha además el trasfondo. En 1920 llegaron al resguardo ingenieros norteamericanos e ingleses de la South American Gulf Oil Company a buscar petróleo, y abrieron una carretera de San Andrés a Coveñas pasando por Sabaneta. Para la gente del resguardo no eran petroleros sino guaqueros: venían por el caimán. A esos hombres los relatos los llaman chumpos o chumecas, y una de las versiones atribuye la aparición del encanto a un míster americano al que llaman Mister Gallo.

El caimán no se quedó en el libro. El Cabildo Mayor Regional del Pueblo Zenú lo incluyó en el Plan Especial de Salvaguardia del trenzado en caña flecha que presentó al Ministerio de Cultura: allí se reproduce un mapa dibujado por el propio pueblo zenú, rotulado como interpretación mítica del resguardo, en el que San Andrés ocupa el corazón del caimán y los oficios artesanales de cada lugar se reparten por las extremidades. El mismo documento recuerda que en 1909, amparándose en la ley 55 de 1905, el distrito de San Andrés tomó posesión de las tierras que consideró deshabitadas y empezó a venderlas, y que el resguardo quedó reducido a 5.835 hectáreas.`,
    versiones: `Drexler advirtió que del caimán de oro existen muchas versiones, y él mismo recogió cuatro que no encajan entre sí.

En la más repetida, la cabeza y el corazón están bajo la iglesia de San Andrés, la cola mira hacia la Ciénaga de Oro y las patas llegan a Chimá y a Palmito. En otra, dentro del mismo capítulo, la que llega bajo la iglesia es la cola y la cabeza está en el cerro Tofeme. Una tercera sólo afirma que el corazón del mundo está en la iglesia y no reparte el resto del cuerpo. En la cuarta el animal se extiende de San Andrés al cerro de Bomba, y el conflicto ya no es una excavación sino la venta del cerro Vidales.

El caimán tampoco vive siempre en el mismo sitio. Drexler lo encuentra en las cuevas de Tofeme, Vidales, Peñón Petaca, Cristo, Mohán y Sierra Chiquita, donde comparte espacio con el mohán, con una palma de oro y con un sol de oro que los indígenas escondieron huyendo de los españoles.

El desenlace cambia con quien cuente: para unos, sacarlo es el fin del mundo; para otros, la inundación de toda la región; para otros, que todo quede en tinieblas.

Y hay una capa reciente. Desde los años setenta, con el movimiento de recuperación de tierras, Drexler documenta una lectura política: profesores de etnoeducación contaban que lo que se derrumbaría al salir el caimán sería la parte alta de San Andrés, donde viven los ricos, y que entonces los zenúes recuperarían sus tierras. Bachilleres de Tuchín le dieron otra vuelta: la profecía significaría que esta tierra iba a tener mucha plata, y que había que cuidar que los blancos no se apoderaran de los proyectos.

La variante que reparte el pecho en San Andrés, la cola en Tofeme y las patas hacia Sampués, Palmito, Ciénaga de Oro, Chimá y Momil circula en recopilaciones escolares del resguardo.`,
    similitudes: `Drexler dejó los paralelos por escrito, y son dos, precisos.

El primero es amazónico. Que un caimán o un animal acuático sostenga el cosmos es frecuente en la Amazonía, según el repertorio comparativo de Peter Roe; entre los campa ese caimán está además relacionado con los blancos que invaden el territorio indígena por la laguna del dragón. Drexler concluye que el caimán-encanto zenú ocupa, por gusto costeño, el lugar que en los pueblos amazónicos ocupa la serpiente cósmica, casi siempre una anaconda.

El segundo está más cerca. Entre coyaimas y natagaimas del Tolima, según Franz Faust, debajo de la iglesia más antigua de la región, en Coyaima, hay un remolino de la laguna grande que va a hundir la tierra. La coincidencia no es sólo el hundimiento: es el templo colonial puesto encima de un agua que amenaza.

Dentro de este corpus hay otros dos guardianes y no son el mismo ser. El del Corcovao vigila desde una altura que se ve desde el río y avisa con truenos; éste no avisa, sostiene, y nadie lo ha visto nunca. La canoa de la ciénaga de La Sierpe guarda un tesoro que alguien podría abrir; el caimán no guarda nada, es el suelo.

Conviene separar también al Hombre Caimán del bajo Magdalena, que Orlando Fals Borda convirtió en tótem del hombre anfibio de la costa: allí un hombre se vuelve animal. Aquí el animal nunca fue hombre, y su cuerpo no es una metamorfosis sino un mapa.`,
    leccion:
      "Un territorio se sostiene como un cuerpo: lo que se arranca en un extremo se siente en todos.",
    sceneHorizontal:
      "un gran caimán dorado estilizado se extiende bajo un corte transversal abstracto del resguardo, conectando agua, sabana y varios asentamientos sin marcas de excavación ni mapa literal",
    sceneVertical:
      "cabeza y corazón simbólicos del caimán permanecen bajo capas de tierra y agua, mientras arriba caminos y viviendas dependen de su continuidad, sin representar una iglesia específica",
    researchNotes:
      "FICCIÓN HEREDADA REEMPLAZADA: retira el buscador de guacas, la anciana, la ofrenda y el reflejo de Betancí. Expone dos orientaciones atribuidas sin convertirlas en coordenadas de tesoro.",
    seoTitle: "El caimán de oro | Leyenda Zenú",
    seoDescription:
      "Leyenda Zenú documentada sobre el caimán de oro que se extiende bajo San Andrés de Sotavento y sostiene el territorio del resguardo.",
    focusKeywords: [
      "caimán de oro Zenú",
      "leyenda San Andrés de Sotavento",
      "caimán bajo el resguardo",
      "mitología Zenú caimán",
      "Tofeme caimán de oro",
    ],
  }),
  defineZenuMyth({
    slug: "trono-corcovao",
    sourceKeys: [
      {
        key: "sINICColombia",
        summary:
          "Publica la «Leyenda del Corcovao de Tofeme» completa: la sombra azul del cerro vista desde el río San Jorge, el Mocán Tofán o Tofeme ñato y tuerto puesto a vigilar en la cima, el totumo de oro que nadie puede coger, las lauras y águilas que suben a desovar, las tempestades cada doce años, el trueno de voz ronca, el grito «¡Tronó Corcovao!», la isla flotante y el cierre con los vecinos de hoy preparando la siembra. Atribuye el acopio a Zully Torres y Oswaldo Villera.",
        limitation:
          "Ficha departamental de Sucre publicada por el Ministerio de Cultura y hoy retirada del portal: se consulta por copia archivada del 17 de abril de 2023. No fecha la recolección, no nombra narradores y no adscribe el relato a una comunidad indígena concreta.",
      },
      {
        key: "defensoria2022",
        summary:
          "Conserva viva la cita del texto de SINIC: en su nota 3 reproduce casi literalmente el pasaje del Mocán Tofán o Tofeme y del totumo de oro, y en el cuerpo del texto registra que San Andrés de Sotavento reconoce «la leyenda del cerro Tofeme» entre sus manifestaciones culturales.",
        limitation:
          "Es una cartilla sobre resolución de conflictos: cita el relato en una nota al pie y enlaza a una URL de SINIC que hoy devuelve 404. No añade variantes ni contexto de recolección.",
      },
      {
        key: "bordaResistencia2002",
        summary:
          "Sitúa el cerro en la literatura antes que cualquier ficha institucional: al describir Jegua, sobre el San Jorge, enumera entre lo que allí se encuentra «la amenaza permanente del mohán del cerro del Corcovado», junto a los túmulos zenúes y las inundaciones periódicas.",
        limitation:
          "Lo menciona en una sola frase y escribe Corcovado, no Corcovao; no narra la leyenda ni nombra a Tofeme. El ejemplar disponible es una selección de 55 páginas, no el libro completo.",
      },
      {
        key: "drexler2002",
        summary:
          "Documenta la otra mitad del complejo en el resguardo de Córdoba: las cuevas de los cerros Tofeme, Vidales, Peñón Petaca, Cristo, Mohán y Sierra Chiquita generan truenos largos, aguaceros y huracanes porque albergan encantos; dentro hay un totumo de oro y una palma de oro cuyo fruto no se puede coger; y los abuelos tiraban jabón de monte a las cuevas para provocar lluvia.",
        limitation:
          "No usa nunca el nombre Corcovao ni la figura del guerrero vigía: su Tofeme es un cerro del resguardo de San Andrés de Sotavento, no el cerro que se ve desde el San Jorge, y no se pudo establecer si son el mismo.",
      },
      {
        key: "fernandezLiteratura2015",
        summary:
          "Relee el pasaje de Fals Borda y lo convierte en imagen de cierre de su descripción de Jegua: quien mire con cuidado escuchará, en el silencio que sigue al ruido del mundo, «la amenaza susurrante del mohán del cerro de Corcovado».",
        limitation:
          "Artículo de crítica literaria e historiográfica sobre los archivos de Fals Borda: no recoge tradición oral propia y no trata la leyenda como tal.",
      },
      {
        key: "zenuPlan",
        summary:
          "Define el cerro Tofeme desde la autoridad indígena: cerro mitológico y sitio sagrado, punto de referencia geográfico y límite del polígono territorial del resguardo, sitio de pagamento espiritual y reserva de fauna y flora nativa.",
        limitation:
          "Describe el cerro como bien territorial, no como escenario narrativo: no cuenta la leyenda del vigía ni menciona el totumo de oro.",
      },
      "sotaventoPlan2020",
      {
        key: "minCulturaZenu",
        summary:
          "Sitúa el sistema de creencias en el que la leyenda funciona: señala que las fábulas, los mitos, las leyendas y los cuentos configuran el sistema de creencias del pueblo zenú de Córdoba y Sucre.",
        limitation:
          "Perfil institucional que resume fuentes previas: no recoge esta leyenda ni ninguna otra en concreto.",
      },
    ],
    title: "Corcovao de Tofeme, guardián del cerro",
    excerpt:
      "Tofeme o Mocán vigila desde el Corcovao; el trueno anuncia peligro y las tormentas protegen el totumo de oro y el territorio.",
    tags: ["cerro", "tormenta", "guardián", "oro"],
    mito: `Desde la orilla del río San Jorge, en las mañanas despejadas o después de un aguacero fuerte, se alcanza a ver la sombra azul del cerro del Corcovao.

Allí vive el Mocán, un guerrero al que llaman Tofán o Tofeme. Quedó ñato y tuerto de tanto guerrear. Cuando ya estaba viejo y no podía pelear al paso de los demás, lo pusieron a vigilar al enemigo desde lo más alto del cerro, debajo de un árbol de totumo de oro que nadie puede coger, porque el que lo intenta se pierde en la manigua.

Tofeme es bueno. Conduce a las lauras y a las águilas que suben al cerro a desovar, y cuida lo que hay arriba. Pero vive solo, y cuando se fastidia de vivir solo entra en ira: cada doce años desata tempestades e inundaciones, y el agua baja a la llanura.

Cuando ve acercarse a un enemigo hace otra cosa. Truena con voz ronca y suelta relámpagos en seco, sin nube que los explique. «¡Tronó Corcovao!», gritaban los indios, y salían a esconderse en una isla flotante que nadie jamás ha conocido.

El aviso sigue sonando. Los que hoy viven cerca del río San Jorge siguen creyendo en él, pero ya no corren a esconderse: cuando suena Corcovao se apuran a preparar las tierras fértiles para sus cultivos y a alistar la madera de los tambos, porque detrás de los truenos vienen las lluvias.

Más al norte, en los cerros del resguardo, la gente cuenta cosas parecidas de otra manera. Dicen que los truenos largos, los aguaceros fuertes y los huracanes salen de las cuevas, y que las cuevas los sueltan porque adentro viven encantos. En una de esas cuevas está un totumo de oro, y en otra una palma de oro, y a quien se atreva a coger una fruta se le cierra la entrada, se le oscurece el cielo y le caen encima tempestades muy duras. Cuando el verano apretaba, los abuelos tiraban jabón de monte a las cuevas de la Sierra Chiquita para que saliera agua y llegaran los aguaceros.

El cerro no da órdenes ni pide nada a cambio. Truena. Lo que se hace después del trueno depende de quién lo oiga: unos corrieron a esconderse y otros salieron a sembrar, y el trueno fue el mismo.`,
    historia: `El texto que fija este relato es institucional y tiene recolectores con nombre. El Sistema Nacional de Información Cultural del Ministerio de Cultura publicó en su módulo Colombia Cultural la lista de mitos y leyendas del departamento de Sucre, y al pie de ese conjunto se lee la atribución: «Acopio: Zully Torres y Oswaldo Villera». La «Leyenda del Corcovao de Tofeme» aparece allí entre la leyenda de las Mohanas y la de Torcorá, dentro de un grupo de relatos anclados en San Marcos, Caimito y los caseríos de la ribera del San Jorge.

De esa página salió el texto que circula hoy. La Defensoría del Pueblo lo reprodujo casi palabra por palabra en 2022, en la nota 3 de su cartilla sobre San Andrés de Sotavento, Tuchín y San Antero, citando expresamente el enlace de SINIC. El Plan de Desarrollo Territorial 2020-2023 del municipio de San Andrés de Sotavento incluye «la leyenda del cerro Tofeme» entre los bienes culturales que el municipio reconoce, junto al tejido trenzado y al festival del pito atravesao. Y el Plan Especial de Salvaguardia del Cabildo Mayor Regional describe el cerro Tofeme como cerro mitológico, sitio sagrado de pagamento espiritual y punto de referencia del polígono territorial del resguardo.

El cerro estaba en la literatura mucho antes. Orlando Fals Borda, al presentar el caserío de Jegua en el tomo tercero de Historia doble de la Costa, publicado en 1984, enumera lo que aparece al acercar la lupa de la historia a ese punto del mapa de Sucre: túmulos zenúes, canales antiguos por los lados de Moguán, Cholén y Cuiba, pectorales de oro en los playones, cédulas reales de resguardos, revueltas de indios y blancos, «la amenaza permanente del mohán del cerro del Corcovado» y las inundaciones periódicas que han ido minando al pueblo. Treinta años después Nohora Alejandra Arrieta Fernández releyó ese pasaje en Tabula Rasa y lo describió como lo que se escucha en Jegua en el silencio que sigue al ruido del mundo.

La parte del cerro que corresponde a las cuevas, los truenos y el totumo la levantó Josef Drexler en el resguardo de San Andrés de Sotavento y la publicó en 2002.`,
    versiones: `El nombre del guardián no está fijado. Mocán funciona como oficio o categoría —guerrero—, y el personaje aparece como Tofán en una línea y como Tofeme en la siguiente dentro del mismo párrafo de SINIC. Fals Borda no lo nombra: habla del mohán del cerro, y escribe Corcovado, con d, donde la tradición oral dice Corcovao.

El cerro tampoco está en un solo departamento. La leyenda de SINIC pertenece a Sucre y se ve desde el río San Jorge; el Tofeme que el resguardo reconoce como sitio sagrado y límite de su polígono está en San Andrés de Sotavento, Córdoba, y es el mismo nombre que Drexler encuentra en la serranía de San Jerónimo junto a Vidales, Peñón Petaca, Cristo, Mohán y Sierra Chiquita.

El intervalo de las tempestades sólo aparece en la versión de SINIC: cada doce años. Drexler no da periodicidad y atribuye huracanes y aguaceros a los encantos de las cuevas sin calendario; recuerda que un huracán enterró casas en Tuchín y que el rezandero Clemente lo explicó diciendo «era el encanto».

La isla flotante aparece sólo en el texto de Sucre, que en la misma frase aclara que nadie la ha conocido. El final tampoco es único: la versión institucional cierra con los vecinos de hoy preparando la siembra en lugar de esconderse, mientras las recopilaciones escolares del resguardo prolongan el relato con un cazador que se extravía en el llamado encanto de Tofeme.

Y el totumo cambia de sitio. En SINIC está en la cima, bajo el puesto de vigilancia. En Drexler está dentro de las cuevas, junto a una palma de oro y a un sol de oro escondidos de los españoles.`,
    similitudes: `Cerros que avisan y castigan hay en muchas partes; lo que aquí se puede documentar son dos parentescos concretos.

El primero lo estableció Drexler para el propio Caribe zenú apoyándose en la etnología comparada: que los espíritus del monte estén relacionados con fenómenos atmosféricos devastadores es un rasgo que Otto Zerries encontró extendido entre pueblos amerindios, y que las cuevas de los cerros sean el lugar donde se generan truenos y huracanes lo documentaron Robert Murphy entre los mundurucú y Peter Roe entre los shipibo. El cerro que suelta tormenta no es una rareza local sino una pieza de un repertorio continental.

El segundo es de oficio y está dentro del San Jorge. El mohán que Fals Borda pone en el Corcovado y que SINIC llama mocán es, en el resguardo, el dueño de los animales silvestres que los guarda en las cuevas de los cerros; Drexler lo compara con Vaí-maxsë, que entre los desana vive con sus animales en cuevas que sólo el payé puede visitar durante su éxtasis.

Dentro de este corpus el guardián más próximo es el caimán de oro, y la diferencia es de posición: el caimán está debajo y sostiene, Tofeme está encima y vigila. El totumo de oro que crece bajo el árbol del cerro es el mismo objeto que en otra página extravía a quien lo arranca, pero allí el castigo es el sendero que se repite y aquí es la tormenta. Y el tesoro de la canoa de La Sierpe, según el mismo acopio de Sucre, lo cuida este mismo mocán: no son dos guardianes, es uno con dos puestos.`,
    leccion:
      "Un aviso que se repite cada cierto tiempo termina convertido en calendario de trabajo.",
    sceneHorizontal:
      "Tofeme como figura adulta pequeña vigila desde la silueta del cerro Corcovao mientras un trueno seco cruza el cielo y un totumo dorado permanece unido a su árbol",
    sceneVertical:
      "una tormenta rodea el cerro y las aguas crecen en la llanura; a lo lejos aparece una isla flotante abstracta, sin escenas de desastre ni personas en peligro",
    researchNotes:
      "FICCIÓN HEREDADA REEMPLAZADA: elimina discursos sobre camellones, órdenes contemporáneas y un calendario afirmado como exacto. Restituye guardián, trueno, totumo, tormenta y variantes atribuidas.",
    seoTitle: "Corcovao de Tofeme | Leyenda Zenú",
    seoDescription:
      "Leyenda Zenú sobre Tofeme o Mocán, guardián del Corcovao, el trueno que anuncia peligro, el totumo de oro y las tormentas del cerro.",
    focusKeywords: [
      "Corcovao de Tofeme",
      "leyenda Zenú Corcovao",
      "Mocán guardián",
      "totumo de oro Tofeme",
      "trueno Corcovao",
    ],
  }),
  defineZenuMyth({
    slug: "el-ojo-de-la-canoa",
    sourceKeys: [
      "sINICColombia",
      {
        key: "drexler2002",
        summary:
          "Explica el mundo en el que la canoa flota: el mundo de abajo es un mar subterráneo de agua viva que no se seca haya invierno o verano; los encantos que lo habitan se llevan a las personas y les roban la sombra; culebras, murciélagos y avispas se consideran transformaciones de la mohana, y los pescadores ponen cobre en las atarrayas para que el mohán no se enrede.",
        limitation:
          "No menciona a Torcorá, ni la ciénaga de La Sierpe, ni ninguna canoa encantada: su trabajo de campo es del bajo Sinú y del resguardo de San Andrés, no del San Jorge. Aporta el marco, no el episodio.",
      },
      {
        key: "bordaResistencia2002",
        summary:
          "Da la textura del territorio: a Jegua sólo se llega en yonson o en canoa, en bestias o a pie, y la vida del ribereño se organiza alrededor de ciénagas que crecen y se secan, con un mundo sobrenatural de mohanes, santos y espíritus al que el riano apela a diario.",
        limitation:
          "Selección de 55 páginas del tomo tercero; describe la cuenca del San Jorge y no esta leyenda, que no aparece en el texto disponible.",
      },
      "severichecanales2022",
      {
        key: "nietoCambios1988",
        summary:
          "Documenta que la depresión momposina, hoy poco poblada e inundada la mayor parte del año, fue un sistema de ciénagas intensamente manejado, con canales artificiales que reordenaban el agua en más de quinientas mil hectáreas: la razón material de que caminos y orillas cambien de un mes a otro.",
        limitation:
          "Arqueología y paleoecología: no aporta nada sobre la leyenda y su área de estudio es el bajo San Jorge en conjunto, no la ciénaga de La Sierpe.",
      },
      {
        key: "faoAgriculturaAnfibia",
        summary:
          "Recoge, citando a Drexler, que toda el agua de la superficie es «agua viva porque viene de abajo» y que se mantiene estable haya invierno o no porque la sostienen los encantos, los chimpines y las visiones acuáticas: la definición del agua sobre la que flota la canoa.",
        limitation:
          "Informe técnico sobre agricultura anfibia: reproduce a Drexler y no documenta ninguna leyenda de la ciénaga de La Sierpe.",
      },
      {
        key: "zenuPlan",
        summary:
          "Aporta la categoría con la que el resguardo nombra estas aguas: las fuentes llamadas aguas vivas —como Las Tinas— enriquecen la biodiversidad ecológica, ambiental y espiritual del pueblo zenú y se cuentan entre sus sitios sagrados.",
        limitation:
          "Documento de la autoridad indígena de Córdoba y Sucre centrado en el trenzado: no recoge esta leyenda ni cubre el área de La Sierpe.",
      },
      "fernandezLiteratura2015",
    ],
    title: "Torcorá y la canoa de La Sierpe",
    excerpt:
      "En La Sierpe permanece una canoa encantada vigilada por Torcorá; un limón de acero sella su ojo y protege lo que guarda.",
    tags: ["leyenda", "serpiente", "tesoro", "agua"],
    mito: `En la ciénaga de La Sierpe aparece de pronto una canoa.

No llega remando ni viene de ningún puerto. Está ahí, quieta sobre el agua, y adentro lleva un tesoro. Ese tesoro tiene dueño: lo cuida el mocán del Corcovao, el mismo guerrero viejo que vigila desde el cerro.

La canoa tiene un ojo. En el ojo hay puesto un limón de acero. Mientras esa pieza no se mueva, la canoa sigue siendo apenas una canoa varada en el agua. El que la ve ya está perdido si quita el limón de acero, porque encima del tesoro duerme Torcorá.

Torcorá es una serpiente y es una bruja. Tiene patas, y tiene plumas en las orejas. Duerme mientras nadie la toque. Si alguien saca el sello del ojo, despierta y ataca.

La ciénaga donde ocurre esto no es un espejo quieto. Es agua viva: agua que viene de abajo, de un mar subterráneo que no se seca ni en el verano más duro, y por eso la gente dice que está viva. En ese mundo de abajo residen los encantos, y los encantos se llevan a quien se confía. Las culebras que uno cruza en la orilla no siempre son culebras.

El agua sube y baja, y con ella cambian los caminos. Lo que un mes es playón al otro es ciénaga; lo que parecía orilla firme amanece convertido en caño. En esa llanura una canoa que aparece y desaparece no llama la atención de nadie. Lo que llama la atención es el ojo.

Porque el ojo mira. La canoa no es un objeto que se encuentra: es algo que devuelve la mirada. Quien se acerca a calcular cuánto oro cabe adentro está siendo contado también.

Nadie ha dicho de dónde vino la canoa, ni quién la hizo, ni quién metió el tesoro. Tampoco hace falta saberlo para entender la advertencia, que es corta: lo que está sellado lo selló alguien, y el sello no es una cerradura que se fuerza sino un aviso que se lee.

El que quita el limón de acero no abre un cofre. Despierta a la que estaba durmiendo encima.`,
    historia: `Ésta es la ficha más corta del corpus zenú por una razón sencilla: el registro que la sostiene tiene cinco renglones y es el único que existe en una fuente institucional.

La «Leyenda de Torcorá» se publicó en el módulo Colombia Cultural del Sistema Nacional de Información Cultural del Ministerio de Cultura, dentro de la lista de mitos y leyendas del departamento de Sucre, entre la leyenda del Corcovao de Tofeme y el encanto de la ciénaga de Pajaral. Al pie de ese conjunto figura la atribución del acopio a Zully Torres y Oswaldo Villera. El texto sitúa la escena en la ciénaga de La Sierpe y dice que el tesoro de la canoa lo cuida el mocán del Corcovao: en el registro original, Torcorá y Tofeme no son dos leyendas vecinas sino dos piezas encajadas.

El entorno del relato sí está documentado con amplitud. Josef Drexler describió en 2002 el mundo de abajo de la cosmología zenú como un mar subterráneo de agua viva que no se seca haya invierno o verano, poblado por encantos que se llevan a las personas y roban la sombra; anotó que culebras, murciélagos y avispas se consideran transformaciones de la mohana, y que los pescadores arman sus atarrayas con piecitas de cobre para que el mohán no se enrede en ellas.

Orlando Fals Borda había descrito en 1984 la geografía en la que eso ocurre: al caserío de Jegua, en la depresión momposina, sólo se llega en yonson o en canoa, en bestias o a pie, y la vida entera se reordena con las crecientes y los estiajes. El equipo del Museo del Oro dirigido por Clemencia Plazas de Nieto y Ana María Falchetti calculó que esa llanura cenagosa, hoy poco poblada e inundada la mayor parte del año, estuvo cubierta por más de quinientas mil hectáreas de canales artificiales prehispánicos; investigadores de la Universidad de Antioquia volvieron sobre esos canales en 2022.

La ciénaga de La Sierpe pertenece a ese sistema de ciénagas de Sucre, y en el mismo acopio comparte territorio con las mohanas de la poza de la Litika, en San Marcos, y con el bagre inmune al arpón de la ciénaga de Pajaral.`,
    versiones: `El nombre cambia dentro de un mismo párrafo. El título de la ficha institucional dice Torcorá; el cuerpo del texto, tres renglones más abajo, escribe Torcerá. Las reproducciones posteriores eligen una u otra forma y ninguna advierte la variación.

Lo que la entidad es tampoco está resuelto. En una sola frase se la llama serpiente y bruja: la serpiente que es una bruja y duerme sobre el tesoro. Y el retrato añade dos rasgos que no son de culebra: tiene patas y tiene plumas en las orejas.

El sello se nombra de una manera que desconcierta. El texto oficial dice «limón de acero» y las reproducciones lo repiten; en una canoa, sin embargo, la pieza que se pone y se quita se llama timón, y esa lectura circula también en compilaciones regionales. La página conserva la forma publicada por el Ministerio de Cultura y deja anotada la otra.

La pertenencia del tesoro es lo que más se pierde al recontar. En el registro de SINIC el tesoro lo cuida el mocán del Corcovao, el mismo guerrero tuerto del cerro. Las versiones que circulan por fuera sueltan ese hilo y dejan a Torcorá como guardiana única, con lo cual el relato pierde su anclaje en el San Jorge.

Hay además un apéndice que aparece en compilaciones regionales y no en la ficha institucional: que el 2 de noviembre crece en el centro de la ciénaga un totumo de frutos de oro, a cuyo tronco queda amarrada una canoa que navega sola hacia el lugar donde la gran mama enterró sus riquezas. No se incorporó al relato.`,
    similitudes: `Guardianes de tesoros bajo el agua abundan en la llanura caribe. Dos paralelos se pueden documentar sin salir de las fuentes de esta página.

El primero es interno al pensamiento zenú y lo levantó Josef Drexler: la mohana, dueña de lo que hay en el agua, se transforma en culebra, y las culebras que se cruzan en la orilla se leen como esas transformaciones. Los pescadores le ponen cobre a las atarrayas precisamente para no enredar al mohán. La serpiente que duerme sobre un tesoro y la mujer que se aparece en la poza son, en ese repertorio, dos caras del mismo tipo de ser.

El segundo lo formuló el propio acopio de Sucre al poner a Torcorá y al Corcovao en la misma página: el tesoro de la ciénaga y el totumo de oro del cerro tienen un solo dueño. No son dos encantos que se parecen; es un encanto con dos puestos, uno en la altura y otro en el agua.

Fuera del agua, el pariente más cercano dentro de este corpus es el caimán de oro, y la distancia es clara: el caimán no guarda un tesoro, es el suelo, y nadie lo ha visto nunca; la canoa se deja ver, y por eso es peligrosa. El totumo de oro castiga con extravío a quien arranca el fruto y admite la devolución; aquí no hay extravío ni segunda oportunidad, hay ataque.`,
    leccion:
      "Lo que aparece sellado tiene dueño, y abrirlo despierta a quien lo estaba cuidando.",
    sceneHorizontal:
      "una canoa encantada flota inmóvil en aguas de La Sierpe; su proa tiene un gran ojo gráfico sellado por una esfera metálica semejante a un limón, mientras Torcorá serpentina rodea el agua",
    sceneVertical:
      "Torcorá emerge como serpiente estilizada detrás de la canoa vista desde arriba; el ojo permanece cerrado y el tesoro solo se sugiere con un resplandor apagado bajo el agua",
    researchNotes:
      "FICCIÓN HEREDADA REDUCIDA A FUENTE: elimina al muchacho, los diálogos y las visiones añadidas. Conserva la secuencia breve pública y evita señalar un punto de tesoro o una forma de acceso.",
    seoTitle: "Torcorá y la canoa de La Sierpe | Zenú",
    seoDescription:
      "Relato Zenú de La Sierpe sobre Torcorá, la canoa encantada, el ojo sellado por un limón de acero y el límite impuesto al tesoro.",
    focusKeywords: [
      "Torcorá",
      "canoa de La Sierpe",
      "limón de acero",
      "leyenda Zenú de Torcorá",
      "ojo de la canoa",
    ],
  }),
  defineZenuMyth({
    slug: "el-totumo-de-oro",
    sourceKeys: [
      {
        key: "goldenTotumo",
        summary:
          "Trae la versión del leñador: un hombre que entra al bosque buscando madera encuentra un árbol con un fruto de oro, lo arranca emocionado y el árbol lo obliga a devolverlo. La nota sitúa el oficio del totumo tallado en Córdoba y Sucre, heredado del trabajo zenú.",
        limitation:
          "Nota de divulgación del centro de documentación de una entidad de fomento artesanal: no identifica narrador, lugar ni fecha, presenta el relato como leyenda regional y no lo adscribe al pueblo zenú.",
      },
      {
        key: "drexler2002",
        summary:
          "Registra la versión subterránea: en las cuevas de los cerros sagrados, donde los indígenas escondieron sus tesoros huyendo de los españoles, hay un totumo de oro y una palma de oro, y a quien se atreva a coger una fruta se le cerrará la entrada, se le oscurecerá el cielo y habrá tempestades muy duras. Añade la totuma de oro con que la mohana se bañaba en un ojo de agua viva de la Sierra Chiquita, en Sabaneta.",
        limitation:
          "El pasaje ocupa pocas líneas dentro de un capítulo sobre cerros sagrados; no hay relato con personaje ni desenlace, y la única voz citada en ese punto es la de Ana-Isabel Martínez Roja hablando del caimán, no del totumo.",
      },
      {
        key: "sINICColombia",
        summary:
          "Coloca el totumo de oro en la cima del cerro del Corcovao, bajo el puesto de vigilancia del Mocán Tofeme, y da la fórmula del castigo: «nadie puede coger» el fruto «porque se pierde en la manigua».",
        limitation:
          "Es una cláusula dentro de otra leyenda, no una entrada propia; la página está retirada del portal del Ministerio de Cultura y se consulta por copia archivada.",
      },
      {
        key: "defensoria2022",
        summary:
          "Mantiene accesible esa cláusula en una publicación viva: su nota 3 reproduce la frase del árbol de totumo de oro que nadie puede coger porque se pierde en la manigua.",
        limitation:
          "Cita al pie dentro de una cartilla sobre resolución de conflictos; reenvía a una URL de SINIC que hoy devuelve 404 y no añade versión propia.",
      },
      {
        key: "faoAgriculturaAnfibia",
        summary:
          "Sitúa el fruto en la vida corriente: registra el totumo (Crescentia cujete) entre las plantas de uso medicinal del sistema zenú, lo que explica por qué el objeto del relato es un fruto cotidiano y no una joya.",
        limitation:
          "Informe técnico agroecológico: no recoge la leyenda y menciona el totumo sólo en tablas de especies útiles.",
      },
      {
        key: "zenuPlan",
        summary:
          "Confirma que el totumo pertenece al repertorio de objetos de uso doméstico del resguardo y que su transformación está entre las técnicas tradicionales asociadas al conocimiento sobre el manejo de recursos naturales.",
        limitation:
          "Expediente patrimonial centrado en la caña flecha: el totumo aparece como material secundario y la leyenda no figura.",
      },
      {
        key: "larrainRelaciones2024",
        summary:
          "Aporta el marco social del acto que el relato castiga: describe cómo en el territorio zenú los celos y la envidia atraviesan las relaciones entre indígenas y vecinos, en clave de reciprocidad negativa.",
        limitation:
          "Etnografía de relaciones interétnicas contemporáneas: no trata leyendas de encantos ni el totumo de oro.",
      },
      {
        key: "artesaniasCanaFlecha",
        summary:
          "Sirve de control sobre los materiales del monte que el relato nombra: describe qué es la caña flecha, cómo se corta y se prepara, junto al repertorio de fibras y frutos con que trabaja la artesanía zenú.",
        limitation:
          "Ficha de materia prima sin ningún contenido narrativo; no menciona el totumo.",
      },
    ],
    title: "El totumo de oro y el camino perdido",
    excerpt:
      "Quien toma el fruto dorado vuelve una y otra vez al mismo lugar; solo al devolverlo recupera el camino fuera del monte.",
    tags: ["totumo", "oro", "camino", "avaricia"],
    mito: `En el monte hay un totumo que no es como los otros. Su fruto es de oro.

Un hombre que trabajaba cortando madera lo encontró. Nadie se lo dio ni él preguntó de quién era: bastó el brillo para que lo arrancara y se lo echara al hombro.

Después quiso volver a su casa. Tomó el camino que conocía y caminó, y el camino lo devolvió al mismo árbol. Cambió de rumbo y volvió a llegar al tronco. Las señales que siempre lo habían orientado dejaron de servirle. El monte no lo atacó, no le salió ningún animal, no se oyó ninguna voz: sencillamente no había salida mientras el fruto estuviera fuera de su rama.

Caminó hasta entender dónde había empezado el extravío. Devolvió el totumo al árbol. Entonces el camino apareció y pudo salir. No se llevó nada: lo que recuperó fue el regreso.

Otros cuentan la prueba con el cerro por escenario. Arriba, en lo más alto, hay un árbol de totumo de oro que nadie puede coger, porque el que lo intenta se pierde en la manigua. El árbol no está solo: está justo debajo del sitio donde vigila el guerrero viejo, y hace parte de lo que él cuida. Ahí no hay devolución posible ni camino que vuelva a aparecer.

Y hay una tercera manera, que ocurre bajo tierra. En las cuevas de los cerros, esas de donde salen los truenos y los aguaceros, hay un totumo de oro y hay también una palma de oro. A quien se atreva a coger una fruta se le cierra la entrada, se le oscurece el cielo y le caen encima tempestades muy duras. No se pierde el camino: se pierde la salida.

En las tres versiones el oro está en un fruto, y un fruto es algo que se da o no se da. Colgado de la rama sirve de recipiente, de sonaja, de vasija, de cuchara; arrancado por quien no debía, deja de ser fruto y se vuelve deuda.

Por eso la gente que entra al monte a buscar madera, a cazar o a recoger plantas no toma lo que brilla. Toma lo que fue a buscar y sale por donde entró.`,
    historia: `Tres registros distintos sostienen esta página, y ninguno viene del mismo sitio.

El primero es una publicación institucional viva. El Centro de Información y Documentación de Artesanías de Colombia publica, en su nota sobre el trabajo del totumo, la versión del leñador: un hombre que se interna en el bosque buscando madera, encuentra el árbol con el fruto de oro y lo arranca, y a quien el árbol obliga a devolverlo. El texto acompaña una descripción del oficio en Córdoba y en Sucre, donde los artesanos siguen tallando el fruto del Crescentia cujete.

El segundo es el cerro. La «Leyenda del Corcovao de Tofeme», que el Ministerio de Cultura publicó en su Sistema Nacional de Información Cultural dentro del acopio de Zully Torres y Oswaldo Villera para el departamento de Sucre, coloca al viejo guerrero Tofeme en lo alto del cerro «debajo del árbol de totumo de oro que nadie puede coger, porque se pierde en la manigua». La Defensoría del Pueblo reprodujo esa frase en 2022, en la nota 3 de su cartilla sobre San Andrés de Sotavento, Tuchín y San Antero.

El tercero está bajo tierra y lo recogió Josef Drexler en el resguardo de San Andrés de Sotavento. En su libro de 2002 escribe que, huyendo de los españoles, los indígenas escondieron sus tesoros en las cuevas de los cerros sagrados, y que a quien se atreva a coger una fruta del totumo de oro o de la palma de oro que están dentro de esas cuevas se le cerrará la entrada, se le oscurecerá el cielo y habrá tempestades muy duras. La frase con la que cierra ese pasaje se la dio Ana-Isabel Martínez Roja, campesina indígena de la vereda Cruz del Guayabo. En el mismo libro aparece otra pieza dorada hecha del mismo fruto: la totuma de oro con la que la mohana se bañaba, durante la semana santa, en un ojo de agua viva de la Sierra Chiquita, en Sabaneta.

El fruto no es exótico en esa cocina ni en esa farmacopea. El estudio que la FAO hizo con el Ministerio de Agricultura en 2021 sobre la agricultura anfibia zenú registra el totumo entre las plantas de uso corriente, y el Plan Especial de Salvaguardia del Cabildo Mayor Regional lo cuenta entre las materias de los objetos de uso doméstico.`,
    versiones: `Las tres versiones no cuentan el mismo castigo.

En la de Artesanías de Colombia hay restitución: el hombre arranca, el árbol lo obliga a devolver, y ahí termina. Es la única en la que el árbol actúa por sí mismo.

En la del cerro no hay devolución ni segunda oportunidad: el que intenta coger el totumo de oro se pierde en la manigua, y punto. El fruto tampoco está suelto en el monte: está bajo el puesto de vigilancia de Tofeme, de modo que tomarlo es meterse con lo que el guerrero cuida.

En la de Drexler el escenario es una cueva y el castigo es meteorológico: la entrada se cierra, el cielo se oscurece, caen tempestades muy duras. Allí el totumo comparte lugar con una palma de oro, con un sol de oro y con el caimán, y todos son tesoros escondidos de los españoles: el relato trae dentro una fecha histórica.

Cambia también quién es el visitante. Leñador en la versión artesanal; enemigo o curioso en la del cerro; en Drexler, cualquiera que se atreva.

Y cambia el objeto. En dos versiones es el fruto del árbol; en el pasaje de la mohana de la Sierra Chiquita ya no es un fruto sino una totuma, el recipiente hecho con él, que ella usa para bañarse en el ojo de agua viva durante la semana santa. El oro se desplaza del fruto al utensilio sin dejar de ser intocable.

Recopilaciones escolares del resguardo prolongan la prueba con un cazador que llena las mochilas de ajíes y totumos y sólo encuentra la salida cuando los suelta, y que al llegar a casa descubre que lo poco que conservó se volvió oro. Esa variante no se incorporó.`,
    similitudes: `Perderse es un castigo frecuente en los montes del Caribe, y en este caso hay dos paralelos que las propias fuentes documentan.

El primero está dentro del repertorio zenú y lo registró Drexler: existen «palos aparatosos» —el caraño, el canime, el bálsamo de oló, la matamba, la maturanga— de los que se dice que cuando uno los pisa se pierde en la montaña. El extravío no es exclusivo del oro: es la respuesta del monte a quien lo trata mal, y el totumo dorado es el caso en que además hay codicia. La maturanga, agrega, mantiene relación con la mohana, que suele enredarse con el cabello en sus espigas.

El segundo es comparativo y Drexler lo tomó de la etnología: que los espíritus selváticos extravíen o seduzcan a la gente es un motivo que Otto Zerries encontró extendido entre pueblos suramericanos, y que sean dueños de lo que hay en el monte lo documentó Gerardo Reichel-Dolmatoff entre los desana con Vaí-maxsë, que guarda sus animales en las cuevas de los cerros.

Dentro de este corpus el totumo comparte cerro con Tofeme y cueva con el caimán de oro, y conviene no fundirlos. El caimán no castiga a nadie: sostiene. Tofeme avisa con truenos antes de que pase nada. El totumo no avisa ni sostiene: deja que la persona se dé cuenta sola, caminando en círculo, de que el error fue suyo. Y a diferencia de la canoa de La Sierpe, donde quitar el sello despierta a una guardiana, aquí no despierta nadie.`,
    leccion:
      "La salida se cierra para quien toma sin que le ofrezcan y se abre cuando suelta lo tomado.",
    sceneHorizontal:
      "un visitante adulto vuelve por tercera vez al mismo árbol de totumo dorado mientras tres senderos curvos se pliegan visualmente hasta el tronco, sin armas ni herramientas",
    sceneVertical:
      "dos manos adultas devuelven un único totumo dorado a una rama y, detrás, el sendero antes circular se abre hacia la salida del monte",
    researchNotes:
      "FICCIÓN HEREDADA REEMPLAZADA: elimina el pacto inventado, el árbol que controlaba el agua y sus diálogos. Separa la prueba breve del ciclo mayor de Corcovao y declara dos variantes.",
    seoTitle: "El totumo de oro | Leyenda Zenú",
    seoDescription:
      "Leyenda Zenú y cordobesa sobre un totumo de oro que extravía a quien intenta llevárselo y devuelve el camino cuando el objeto es soltado.",
    focusKeywords: [
      "totumo de oro",
      "leyenda Zenú del totumo",
      "encanto de Tofeme",
      "camino perdido",
      "fruto de oro Córdoba",
    ],
  }),
  defineJuanLaraTransfer({
    slug: "juan-lara-y-la-trenza-del-aire",
    fuentesAgotadas: "se buscó «Juan Lara» y «fantasma de Juan Lara» con espíritu, leyenda, mohán, encantos, Sucre, Córdoba, San Marcos, Caimito, Sahagún, zenú y San Andrés de Sotavento; se revisaron por texto completo dos artículos recientes sobre oralidad zenú (Actividad Física y Ciencias, UPEL, art. 5815; Espirales, art. 858): ninguno nombra a Juan Lara ni al mohán. Lo único que aparece fuera de las siete fuentes ya citadas son blogs (cordobamitosyleyendasdidacticavirtual, identidadculturalzenu), Scribd, Studocu, YouTube e Instagram, todos vetados y que reproducen el texto de SINIC o la variante de Sahagún con el corte de pelo, sin pie de imprenta. El acopio de Zully Torres y Oswaldo Villera no se localizó en línea. Queda con 7.",
    sourceKeys: [
      {
        key: "sINICColombia",
        summary:
          "Publica «El fantasma de Juan Lara» con los tres episodios que sostienen esta página: la mujer casada de Caimito a quien no dejaba criar los hijos, la niña de cabellos rubios de la vereda de Platero salvada por un exorcismo en San Marcos, y la muchacha de San Felipe a la que arañó y de cuya casa provocó el incendio, con la familia mudándose a Santa Inés. Describe el patrón: regalos y piedras preciosas primero, pedradas en el techo y risotadas en el aire después. Acopio de Zully Torres y Oswaldo Villera.",
        limitation:
          "Ficha departamental de Sucre hoy retirada del portal, consultada por copia archivada; no fecha la recolección, no nombra a los narradores y no adscribe el personaje a ninguna comunidad indígena.",
      },
      {
        key: "drexler2002",
        summary:
          "Incluye a Juan Lara en su tabla de categorías de espíritus del resguardo de San Andrés de Sotavento, entre el mohán, el caimán de oro, los palos aparatosos, el guacavó, el puerquero y la ninfa eco: su lugar son los montes y su actividad se describe con las mismas palabras que la del mohán, «puede encantar», «se lleva a las personas», «se enamora».",
        limitation:
          "Es una sola línea de una tabla, sin relato, sin narrador y sin episodio: prueba que el nombre circula dentro del sistema de creencias del resguardo, no cómo se cuenta allí.",
      },
      "sINICColombia2",
      {
        key: "bordaResistencia2002",
        summary:
          "Describe el mundo en el que este espíritu opera: el riano de la depresión momposina apela a un mundo superior habitado por mohanes, santos y espíritus de grandes poderes, los considera humanos, los hace intervenir en la vida diaria y los castiga cuando no responden.",
        limitation:
          "No menciona a Juan Lara; aporta la lógica regional de lo sobrenatural y no el personaje. El ejemplar disponible es una selección de 55 páginas.",
      },
      {
        key: "fernandezLiteratura2015",
        summary:
          "Muestra con ejemplos de los archivos de Fals Borda cómo los habitantes de Jegua naturalizan lo extraordinario sin sobresaltarse, que es exactamente el tono con que se cuentan las pedradas y las risas.",
        limitation:
          "Crítica literaria e historiográfica; no recoge tradición oral propia ni trata a Juan Lara.",
      },
      {
        key: "larrainRelaciones2024",
        summary:
          "Aporta el clima de relaciones locales en el que el relato circula hoy: celos y envidia explícitos en las relaciones entre indígenas zenú y vecinos blancos y mestizos, documentados por etnografía prolongada en el territorio.",
        limitation:
          "Etnografía de 2024 sobre relaciones interétnicas: no menciona a Juan Lara ni a los encantos del monte.",
      },
      {
        key: "zenuPlan",
        summary:
          "Nombra a los portadores de la tradición oral zenú por apodo y apellido —Climaco «El Curvo» Talaigua, Etelvina «La Galloleta» Estrada, Adalberto «Cuenta Máxima» Talaigua y otros— y describe el deterioro de esas formas de contar.",
        limitation:
          "Los nombra como portadores en general, sin asociarlos a ningún relato: no documenta a Juan Lara y su ámbito es el resguardo de Córdoba y Sucre, no el San Jorge.",
      },
    ],
    title: "Juan Lara",
    excerpt:
      "En pueblos de Córdoba, piedras sobre el techo y una risa sin cuerpo anuncian a Juan Lara, espíritu burlón y perseguidor nocturno.",
    tags: ["espíritu", "noche", "persecución", "tradición oral"],
    mito: `Juan Lara aparece de vereda en vereda y de pueblo en pueblo. No llega de visita: llega enamorado de alguna muchacha, y se queda.

El asedio empieza suave. Le tira regalos, le hace llegar flores, le deja piedras preciosas. Nadie lo ve entrar ni salir. Cuando la muchacha no responde, o responde que no, el cortejo se vuelve guerra.

Entonces caen piedras sobre el techo. Los de la casa salen a buscar quién las tira y no encuentran a nadie en el patio ni en el camino. Vuelven a entrar y los golpes empiezan otra vez, desde otro lado. Después se oyen las risotadas, que se oyen en el aire y de las que no se sabe de dónde vienen.

Se dice que en vida fue un hombre libidinoso y que por algún pecado quedó condenado a vagar libre de enamorarse, pero con la desdicha de no ser correspondido y de no tener pretendientes. La condena no lo ablanda: lo que no consigue, lo cobra.

En Caimito asedió a una mujer casada y hermosa. Le tiraba regalos y piedras preciosas, y cuando ella lo rechazó y lo repudió pasó a odiarla, hasta el punto de que a cada hijo que la señora iba teniendo no se lo dejaba criar.

En la vereda de Platero, cerca de Caimito y de San Marcos, se dedicó a una niña de cabellos rubios y la puso al borde de la locura. Pudo salvarse porque sus padres la llevaron a San Marcos para que el cura la exorcizara, y después de eso el espíritu se retiró.

En la vereda de San Felipe, también cerca de San Marcos, se enamoró de una muchacha de cabellos rubios y ojos verdes, y otra vez las flores, las piedras preciosas y los regalos. Como ella no cedió, empezó por arañarle el rostro y siguió por todo el cuerpo, con pellizcos y chupones, y por último provocó el incendio de la casa. La muchacha y su familia tuvieron que irse a vivir a Santa Inés.

En el resguardo lo nombran de otra manera, sin biografía y sin pecado: Juan Lara es uno de los encantos que viven en los montes, de los que se enamoran y se llevan a las personas, igual que el mohán y la mohana.

El miedo no está en verlo. Está en oír una voluntad que insiste y no tener dónde ponerle un cuerpo.`,
    historia: `El registro más detallado de este personaje es institucional y está fechado por su acopio. El Sistema Nacional de Información Cultural del Ministerio de Cultura publicó «El fantasma de Juan Lara» en la lista de mitos y leyendas del departamento de Sucre, dentro de un conjunto recogido por Zully Torres y Oswaldo Villera. Los tres episodios que se conservan aquí —Caimito, la vereda de Platero y la vereda de San Felipe, con salida hacia Santa Inés— están todos en la órbita de San Marcos, sobre el río San Jorge, y comparten página con las mohanas de la poza de la Litika, con el Corcovao de Tofeme y con Torcorá.

Hay un segundo registro, más breve y de otra naturaleza. Josef Drexler, al cerrar su estudio sobre la cosmología del resguardo de San Andrés de Sotavento, publicado en Quito en 2002, levantó una tabla de categorías de espíritus con tres columnas: el encanto, el lugar donde vive y lo que hace. En esa tabla, entre el mohán, el caimán de oro, los palos aparatosos, el guacavó, el puerquero y la ninfa eco, figura Juan Lara. Su lugar son los montes, y su actividad está descrita con las mismas palabras que la del mohán: «puede encantar», «se lleva a las personas», «se enamora». Es el único inventario etnográfico que lo sitúa dentro del sistema de creencias del resguardo.

Fals Borda había descrito el suelo donde eso ocurre. En el tomo tercero de Historia doble de la Costa, publicado en 1984, escribe que el riano de la depresión momposina apela a un mundo superior donde habitan mohanes, santos y espíritus dotados de grandes poderes, que considera humanos a esos seres, los hace intervenir en la vida diaria como si fueran de la familia y los castiga cuando no se comportan bien. Nohora Alejandra Arrieta Fernández, releyendo ese tomo en Tabula Rasa en 2015, mostró hasta qué punto los jeguanos han naturalizado lo extraordinario: no se inmutan si los muertos bogan inundados en el cementerio.

América Larraín, que hizo etnografía prolongada en territorio zenú y publicó en Jangwa Pana en 2024, describe además el clima de celos y envidia que atraviesa las relaciones entre indígenas y población blanca y mestiza en la región.`,
    versiones: `Lo que cambia entre versiones es el mapa y el desenlace.

El acopio del Ministerio de Cultura lo pone en Sucre, en la ribera del San Jorge, con topónimos precisos: Caimito, Platero, San Felipe, San Marcos, Santa Inés. La misma entidad publicó la lista de mitos y leyendas de Córdoba, y allí Juan Lara no figura: están el Gritón, el duende, la Llorona, el agüero del yacabó, los animes y la aguja del muerto. Las compilaciones turísticas y periodísticas que lo sitúan en Lorica, en Montería o en Sahagún son posteriores y no coinciden con ese reparto.

El final tampoco es uno solo. En Platero el espíritu se retira después de un exorcismo en San Marcos; en San Felipe no se retira y la familia se muda; en Caimito no hay salida y el asedio se convierte en daño sostenido sobre los hijos de la mujer. En versiones que circulan por fuera del registro oficial, el remedio consiste en cortarle el cabello a la mujer asediada.

El grado de violencia también se mueve. Las piedras en el techo y las risotadas en el aire son el motivo constante; los arañazos, los pellizcos y el incendio sólo aparecen en el episodio de San Felipe, y los regalos sólo en dos de los tres.

Y cambia lo que es. En el acopio de Sucre es un fantasma con biografía, un hombre condenado por un pecado sexual. En el resguardo de San Andrés de Sotavento, según la tabla de Drexler, es un encanto del monte sin historia previa, clasificado junto al mohán y con su misma descripción.`,
    similitudes: `Los aparecidos que asedian de noche abundan en el Caribe, pero aquí hay dos paralelos que las fuentes ponen por escrito.

El primero es una equivalencia explícita, no una impresión. En el inventario de Drexler, Juan Lara y el mohán comparten fila, lugar y descripción literal: viven en los montes, se enamoran y se llevan a las personas. No es una semejanza que haya que deducir: está tabulada por el etnólogo que levantó el inventario.

El segundo viene del mismo acopio de Sucre, que unas líneas más abajo describe al duendecillo mohán, un indiecito que molesta a la gente dormida y le corta el sueño hasta el fastidio, y del que se dice que se le quita mandándolo a traer agua del mar en un catabre, porque el agua se le pierde antes de llegar. Juan Lara y el duendecillo resuelven lo mismo de dos maneras: una presencia que no se ve pero deja rastro, y un procedimiento doméstico para sacarla de la casa.

Dentro de este corpus la distancia con los demás es de escala. El caimán de oro y el Corcovao operan sobre territorios enteros; Torcorá custodia un tesoro en una ciénaga. Juan Lara se concentra en una sola persona y en una sola casa, y lo que rompe no es el orden del mundo sino el sueño de una familia. Las piedras que caen sobre el techo son el punto exacto donde algo que no se ve toca algo que sí se oye.`,
    leccion:
      "La insistencia que no se puede ver sigue siendo asedio aunque se cuente como enamoramiento.",
    sceneHorizontal:
      "una vivienda rural cordobesa bajo cielo nocturno recibe pequeñas piedras en el techo mientras tres adultos observan un patio vacío y una curva gráfica representa una risa lejana",
    sceneVertical:
      "una mujer adulta permanece acompañada dentro de la casa mientras fuera solo se ven piedras suspendidas y ondas de risa en el aire, sin mostrar un agresor ni un amuleto",
    researchNotes:
      "RECLASIFICACIÓN SIN DESPUBLICAR: elimina trenza del aire, amuleto, pinta, sombrero flotante y diálogos inventados. Conserva el núcleo cordobés y pasa la ruta de Zenú a Caribe Mestizo.",
    seoTitle: "Juan Lara | Leyenda de Córdoba",
    seoDescription:
      "Leyenda del folclor cordobés sobre Juan Lara, espíritu burlón o enamorado que anuncia su asedio con pedradas en los techos y risas en el aire.",
    focusKeywords: [
      "Juan Lara leyenda",
      "mitos de Córdoba",
      "espíritu Juan Lara",
      "pedradas en el techo",
      "folclor cordobés",
    ],
  }),
];

export default records;
