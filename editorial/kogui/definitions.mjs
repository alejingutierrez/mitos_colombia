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
    sourceKeys: [
      "chaves1947",
      "reichel1950",
      "preuss1993",
      "reichel1987",
      "pes2017",
      "gonzalezinterpretacion2009",
      "mahechareencuentro2010",
      "garcialiteratura2021",
      "reichelDolmatoffTemplos1975",
      "vargasmotivo2022",
      "wittestructure2020",
      "cuencatierras2018",
      "molinaresNumeros2019",
    ],
    title: "La Madre y las nueve tierras",
    summary:
      "La Madre existía en Aluna antes del amanecer y preparó nueve tierras hasta que la tierra negra y fértil pudo sostener la vida Kogui.",
    tags: ["creación", "Madre", "Aluna", "nueve tierras"],
    mito: `Al principio de todo hubo una madre. Mucho después nacieron Sekukue y Kakarabiku, que fueron los primeros habitantes de estas tierras, y mucho después todavía Seyunkue, Seraira, Sintana y Kimaku. La madre de Sintana fue Naowa.

Cuando nació Sekukue no había cerros, no había ríos, no había árboles: sólo había agua. Sekukue, Kakarabiku y Sintana se pusieron a hacer una casa con espuma de agua, pero se dieron cuenta de que no había cómo sembrar y se pusieron a secar el agua, con aparatos mejores que los motores que ahora tienen los civilizados, pues todo lo tenían los padres de ese tiempo. Cuando Sekukue terminó de secar el agua, vio que el barro aún estaba blando. Entonces vino Kimaku y trajo un idioma con palabras para secar la tierra, una lengua que todavía saben los mamas. Para habitar la tierra debía inventarse otro idioma, y Kimaku lo hizo: el idioma de ahora, con el que se saluda y se pide. Movió todo y secó todo, y la tierra comenzó a endurecer. Pero no era tierra buena: era tierra blanca, era como piedra y no se podía cultivar.

Había una madre de la tierra que tenía guardadas nueve clases de tierra, y de todas ellas sólo una podía producir: la tierra negra. Seraira, Seyunkwe y Kimaku fueron a pedírsela. Ella tenía nueve hijas. Entregó la primera, la tierra blanca; la tomaron, la regaron por todo el mundo, la sembraron y no produjo nada. Regresaron a pedir y les entregó otra hija, una tierra arenosa y blanca, que tampoco produjo. Regresaron, y la Magri les dio una hija que era tierra como roja y negra, que tampoco dio resultados; volvieron y les entregó una tierra amarillosa, que al sembrarla no producía bien; pidieron otra y les dio tierra roja, que no dio nada; regresaron y entregó una tierra amarillosa revuelta con negra, que no producía bien. Siguieron luchando sin cansarse. La Magri tenía a la hija buena, a la Tierra Negra, que era la madre del cultivo, y no quería entregarla: la tenía escondida en un cuarto al que se llegaba después de atravesar ocho, y allí la tenía encerrada para que no saliera.

Seraira y Kimaku entonces hicieron música de carrizo, música de trompa, música de caja, y tocaron y cantaron lo más lindo que pudieron. La madre dijo que ya había entregado a todas sus hijas y que no tenía más. Abrió un cuarto y mostró que no tenía nada; abrió otro y también mostró, y así todos los cuartos, hasta que llegó al último. Pero en éste había un hoyito por la pared, y por allí la hija oyó la música y salió ella misma sin que la Magri se diera cuenta. Seraira y Kimaku la cogieron y se fueron.

Cuando la Magri se dio cuenta de que se la habían llevado, fue a buscarla, pero ya la habían regado por todo el mundo, y la sembraron, y produjo buenos frutos. Si no fuera por Seraira y Kimaku no hubiera buena tierra.`,
    historia: `Este relato lo contó Seye Ababi Makó, de veinticinco años, cabo del mama Ignacio Abiguí de Tucurinca, en el alto río Sevilla. Lo recogió Milcíades Chaves Ch. durante el mes de noviembre de 1946, entre el grupo de San Andrés de la Sierra Nevada de Santa Marta, adonde viajó con Gerardo Reichel-Dolmatoff y Alicia de Reichel-Dolmatoff. Chaves lo publicó al año siguiente en Mitología kágaba, dentro del Boletín de Arqueología, encabezado con el rótulo «Informador: Seye Ababi Makó». Es el primero de los veintidós relatos del conjunto, y los veintidós llevan ese rótulo: ninguno se publicó anónimo.

El propio Chaves declara de qué está hecha esa traducción. No hablaba kogui y tuvo que verificar los interrogatorios en castellano, lengua que sus interlocutores no manejaban con destreza, de modo que —escribe— hay ideas confusas y es posible que muchos conceptos vertidos a esa lengua hayan quedado deformados. Después del texto añade dos aparatos suyos, una lista de «Personajes de la leyenda» y una «Síntesis de la leyenda», y páginas más adelante una interpretación en la que lee el episodio como memoria de la migración desde el páramo estéril hacia las tierras templadas, donde la agricultura es más fructífera. Esa lectura es de Chaves, no de quien narró.

Hasta esta revisión, esta página atribuía el relato al segundo tomo de Los Kogi de Reichel-Dolmatoff, a través de un PDF que no es ese libro sino la reimpresión de 1993 preparada por Eugenia Villa Posse, y no nombraba a nadie. El tomo II sigue cerrado. El tomo I, de 1950, está en acceso abierto y ninguna ficha lo citaba: no contiene este episodio, pero nombra ocho veces a la Madre Gaulchováng, de la que descendían los cuatro Padres del Mundo, y llama a la casa ceremonial «cansamaría», es decir «casa de María».

Las demás fuentes de la lista no narran este relato: lo rodean, y conviene saber por dónde. Juan Carlos Alonso González transcribe en 2009 la versión de los nueve mundos tomada de una edición divulgativa de Reichel-Dolmatoff, con marco junguiano que hay que separar del texto. Leydi Johanna Pinto García recoge en 2021 la palabra del Mama José Gil sobre qué son los nueve en la práctica: nueve madres, nueve cerros, nueve suelos, nueve meses de embarazo. Falk Parra Witte define aluna trabajando con mamas vivos. José Vicente Rodríguez Cuenca excava en 2018 suelos negros antrópicos en el río Ranchería y los pone junto al episodio. Y en el Plan Especial de Salvaguardia los cuatro pueblos de la Sierra declaran que el uso y manejo de sus espacios sagrados «no concibe la necesidad de su divulgación externa». Lo que aquí se publica llegó por terceros, en 1946, y así hay que leerlo.`,
    versiones: `En el mismo conjunto hay un segundo relato titulado también La creación, y no cuenta lo mismo. Lo narró Benito Sontinkama, de treinta y ocho años, cabo del mama Julián, respetado por todas las personas del grupo de San Andrés; sabía las narraciones de memoria, pero su traducción al castellano se dificultaba demasiado. En su versión no hay nueve tierras ni música. Antes no había tierra, sólo existía el mar, y Luitsama vivía en el cielo; su hijo Seyuko vio que todo era mar, le pidió tierra y aparecieron los cerros. Luitsama le dio tres clases de tierra, blanca, amarillosa y negra. El mar se apartó y quedó la laguna, que por eso es la madre del agua y se llama Mainbankokwi. Seyuko y su padre Seraira hicieron la tierra, y fue Seraira quien cogió del cielo un varoncito y una mujer y les buscó plátano, ñame, batata, auyama, fríjol y wandul. Al final Luitsama entrega la tierra a los mamas para que la cuiden vestidos con máscaras. Chaves comenta que esa segunda versión «presenta el mismo tema con pequeñas variantes»: cambian los nombres de la madre y del hijo, el número de tierras pasa de nueve a tres y desaparecen el engaño y la música. No son pequeñas, y las dos no se funden.

Fuera del conjunto circulan otras formas del episodio de la tierra negra. En la transcripción que publica Alonso, la Madre pare nueve hijas que son las nueve tierras, las entrega todas menos la negra, y quien la saca es Sintána: «cuando Sintána bailó y cantó, la Tierra Negra salió». En el resumen que hace Rodríguez Cuenca apoyándose en Preuss y en Reichel-Dolmatoff, Sintaná busca la hija negra con ayuda de su compañero el Viento, y no hay canto. En el relato de Seye Ababi Makó quienes tocan y cantan son Seraira y Kimaku, y Sintana no interviene en ese tramo.

También cambian las grafías, y cambian dentro de una misma página: Chaves escribe Sekukue y Sekukwe, Seyunkue y Seyunkwe, Kakarabiku y Kakaribiku, y encabeza el segundo relato como «Sontincama» aunque en su introducción escriba «Sontinkama». La reimpresión de 1993 conserva todas las atribuciones —cambia el rótulo «Informador» por «Relator»—, normaliza algunas grafías y suprime los aparatos de Chaves. Conviene además retirar una confusión que esta página venía arrastrando en un bloque compartido: Kansa María no es una sustancia ni un principio femenino, sino la casa ceremonial.`,
    similitudes: `Dos comparaciones cercanas ayudan, y las dos marcan una diferencia. La primera está dentro de la propia Sierra. Eugenio de la Hoz Molinares, José Pacheco Fernández y Orlando Trujillo Varilla recogieron en 2019, con voces de los cuatro pueblos, qué significa el número nueve, y separaron las respuestas: los koguis contestan que la madre naturaleza tuvo nueve hijas y que de ellas sólo la tierra era fértil, mientras arhuacos y wiwas leen el nueve como nueve tipos de suelo. Es el mismo número y no es la misma idea. Aquí las tierras son hijas, tienen madre, y hay que arrancárselas.

La segunda es de escala continental. Juan Camilo Niño Vargas estudió en 2022 el motivo del gran árbol en las tradiciones chibchas —bribri, cabécar, barí, maleku, ette, iku, kuna— y registra del lado kogui que los cuatro hijos de la Madre Universal construyeron el mundo a manera de templo alrededor de una inmensa ceiba surgida del mar, después de alejar el agua de la que brotaba. El comienzo coincide con este relato: primero agua, y sólo después un lugar donde estar. El final no coincide, porque aquí el mundo no se organiza alrededor de un árbol sino alrededor de un suelo que produce.

Un tercer paralelo hay que mirarlo con cuidado, porque enseña un error. Luis Eduardo Wilches Mahecha reprodujo en 2010 el mito kogui de la creación dentro de una tesis sobre los ika o arhuacos, hablando de un «pensamiento Ika-Kaggaba» como si los dos pueblos tuvieran uno solo, y copiando el texto de Alonso en vez de acudir a un registro. Sirve para ver cómo se lee este relato desde afuera. No sirve para atribuirlo a dos pueblos a la vez.`,
    leccion:
      "La tierra que alimenta no se entrega a la primera: se pide muchas veces y se gana cantando.",
    sceneHorizontal:
      "la Madre en Aluna dispone nueve franjas de tierra alrededor de una tierra negra fértil, mientras ríos y cumbres apenas empiezan a tomar forma",
    sceneVertical:
      "una corriente desciende desde las cumbres hacia la tierra negra recién preparada, acompañada por nueve capas de color sobrio",
    researchNotes:
      "CORRECCIÓN: Aluna no se traduce como vacío ni sueño genérico. ESTRUCTURA: se separan los episodios posteriores para evitar una cosmogonía sintética.",
  }),
  myth({
    slug: "el-primer-hombre-y-la-primera-mujer",
    sourceKeys: [
      "chaves1947",
      "reichel1950",
      "preuss1993",
      "reichel1987",
      "pes2017",
      "ortizMitologia2023",
      {
        key: "cuencatierras2018",
        summary:
          "Trae una variante distinta del origen de la pareja: de la tierra negra obtenida por Sintaná \"surgió la primera pareja de humanos en un templo construido por los cuatro señores (que representan los cuatro grupos indígenas)\", y de allí Sintaná salió a poblar el mundo. Confirma que la primera pareja aparece en un espacio ceremonial construido, no en un paisaje abierto.",
        limitation:
          "El artículo es de arqueología de suelos y resume el mito en dos párrafos apoyándose en Preuss 1993 y Reichel-Dolmatoff 1985. No habla de Naowa, ni de los seres sin huesos, ni de las piedras introducidas en el cuerpo, ni de la crianza separada. Texto completo verificado en la copia de Redalyc.",
      },
      "cardonajaguar2020",
      {
        key: "gonzalezinterpretacion2009",
        summary:
          "Su transcripción del mito contiene los dos eslabones que la ficha necesita: la gente del segundo mundo que \"no tenían huesos, ni fuerza. Eran como gusanos y lombrices\", y el nacimiento de Sintána —primero el dedo grande del pie, por fin la cabeza— en el mar y en la oscuridad. Documenta además que antes de las nueve hijas \"aún no había mujeres\" y cada hijo estaba casado con una cosa: la olla, el telar, la piedra de moler.",
        limitation:
          "La interpretación es junguiana y hay que separarla del texto. No aparecen Naowa ni la crianza separada en casas ceremoniales; la secuencia que transcribe es la de la creación, no la del ciclo de Naowa y Sintana que sostiene esta ficha.",
      },
      {
        key: "garcialiteratura2021",
        summary:
          "Describe la casa ceremonial donde ocurre la crianza y la transmisión: el nuhue o casa del Jate kaggui, llamado cansamaría por sincretismo, \"templo principal en forma de montaña, donde duermen los hombres\", y donde la literatura oral se aviva de noche. Registra también el par ritual que abre la vida adulta —el poporo para el hombre, la mochila para la mujer, que los hacen Naba Jate y Naba Jaba— y la frase \"Seyankua metió a Sintána en su poporo y se lo puso en su mochila\".",
        limitation:
          "No narra el episodio del niño y la niña criados por separado: aporta el marco ritual de las casas y de la iniciación, no el relato. Marco teórico literario europeo; sitio de la revista sólo accesible por HTTP.",
      },
    ],
    title: "El primer hombre y la primera mujer",
    summary:
      "Sintana transforma a Naowa y protege por separado a un niño y una niña, de quienes comienzan las primeras generaciones humanas.",
    tags: ["antropogénesis", "Sintana", "Naowa", "primera pareja"],
    mito: `Antes del amanecer, antes de que existieran el sol y la luna, la madre Solsewan y el padre Sintana hicieron el primer acto sexual. Entonces sólo existían Sintana, Sekúkwe, Soaluiku, Búnkuase y su cabo Mandalawó Manawi. Después existió Kasaugue y Monsawi; después Sábi y Gulchawi; después Napita y Tawatitoná; y mucho después el padre Natuna, Andoé, Kalawakó, Sangolomená, Salasukuitá, Salase, Mensehele, Seyúnkawa y Seiyeleukwe. Todos existieron antes del amanecer. Cuando nació el mundo vinieron también Ñuba, Buibán, Mulkakukué, que fue la madre del sol, y Anurtsama Dosama. Todas eran madres. Antes del amanecer había siete padres en el mundo. El dueño del mundo era Búnkuase, con su cabo Duguwé y con Sivalikukue, que era su madre: él fue el rey del mundo y él lo gobernaba.

La madre Naowa existió antes del amanecer. Ella fue la madre de la culebra, del gusano, de la lombriz de tierra, de la culebra ciega, de todo animal que no tenía hueso. En ese tiempo no paría gente, sólo animales sin huesos. Después parió pájaros, la pava y todo pájaro, pero no paría gente porque se los comía. Más tarde tuvo perico ligero, león y tigre, pero no quería hacer gente.

Entonces el padre Sintana cogió una piedra de muchas facetas y otra agujerada, le rezó para que durmiera mucho y no despertara, y se las apegó al ombligo. Apenas se las aplicó ya estaba preñada, porque los padres no hacían como nosotros: apegaban dos piedras al ombligo y ya. Naowa se sintió preñada y se preguntó qué iría a parir. Sentía muchos dolores y estaba asustada, porque parir animales había sido apenas como hacer sus necesidades. A Sintana le daba rabia que sólo trajera animales. Él, Seraira y Búnkuase se fijaban en todo lo que ella hacía, y mandaron al cabo Bahavé para que la espiara: todo lo que Naowa hacía y todo lo que decía se iba escribiendo, como doce libros. Sintana iba contando las lunas. A la séptima le hizo dar sueño, le tanteó la barriga y se dio cuenta de que era un niñito. El último mes la santiguaron para que le doliera más, como castigo, para que no tuviera más culebras. Naowa se pasaba el día gritando que quería parir y no podía. Entonces Sintana hizo una cajita de paja, la hizo dormir y ella parió. Tomó al niñito, lo metió en la cajita y lo llevó a Kansa María, la casa ceremonial, sin que Naowa lo viera, porque se lo comía. Cuando despertó sólo encontró la ropa del niño y se la comió, y también la sangre que botaba.

Pero Sintana, Seraira y Búnkuase dijeron que había que hacer también una niña. La hicieron dormir, cogieron dos cuentas, una grande y otra pequeña, y se las apegaron al lado izquierdo del ombligo, con el calamutza, el palo del poporo; la otra vez había sido al lado derecho. Contaron otra vez las lunas, y a la séptima Sintana le tocó la barriga y vio que era una niñita. En la novena luna la santiguó para que le doliera mucho y el parto demorara, porque la estaba castigando, y Búnkuase mandó a Antwakukwe para que la vigilara. Sintana le hizo dar sueño, sacó a la niña, le cortó el ombligo, la metió en una caja de paja y la llevó a una casa de mujer. Naowa despertó, buscó y buscó, y se comió la ropa de la niña y la sangre.

Los dos niños se criaron aparte. Cuando él ya fue un hombrecito, Sintana le dio poporo; cuando a la mujercita le vino la primera menstruación, hizo el mama. Como no había otros hombres, Sintana mandó al joven que hiciera hijos con su hermana, y así fue como vinieron los kogui. Después Naowa siguió pariendo, pero ya era tribu, tribu y tribu: hombre y mujer, iban haciendo un par, hombre y mujer, y así vienen todas las gentes.`,
    historia: `Lo narró Seye Ababi Makó, el mismo cabo del mama Ignacio Abiguí de Tucurinca que contó la primera creación, y Milcíades Chaves lo recogió en noviembre de 1946 entre el grupo de San Andrés, en castellano y por interrogatorio, sin hablar kogui. Salió publicado en 1947 como el tercer relato de Mitología kágaba, con el rótulo «Informador: Seye Ababi Makó» encima del texto. La reimpresión que preparó Eugenia Villa Posse en 1993 lo reproduce completo y cambia el rótulo a «Relator». Ninguna de las dos lo publicó anónimo; quien perdió el nombre fue este sitio, que hasta esta revisión atribuía el relato al segundo tomo de Los Kogi de Reichel-Dolmatoff a través de un PDF que era, en realidad, esa reimpresión.

Dos cosas que el texto dice conviene no suavizarlas. La primera es que el niño y la niña son hermanos y que la unión es una orden: «Como no había otros hombres, Sintana mandó al joven que hiciera hijos con su hermana; así fue como vinieron los Kogui». Esta página venía contando que los dos «se encontraron» cuando alcanzaron la edad adecuada, lo que borra el parentesco y borra el mandato. La segunda es que Kansa María no es un objeto ni un principio: el propio Chaves lo traduce entre paréntesis, «Kansa María (Casa Ceremonial)», y Reichel-Dolmatoff explica en el tomo I que los kogui comparan a veces a la Madre Universal con la Virgen María y por esa razón llaman a la casa ceremonial «cansamaría», es decir «casa de María».

Chaves acompaña el relato de una lectura propia, hecha con Kardiner y con el vocabulario psicoanalítico de su momento: habla de impulso sexual, de complejo de castración, de acto mágico. Es su marco, de 1947, y no la voz de quien narró. Y hay un detalle del texto que ninguna de las fuentes de esta lista explica: Búnkuase escribe y escribe libros mientras Naowa pare, «como 1, como 2, como 3, como 12 libros», en un relato que se transmitía de memoria.

De las demás fuentes, ninguna narra este episodio. El portal del Instituto Caro y Cuervo reproduce en 2023 otra antropogénesis, de los Mamas Arregocés Pinto, Miguel Gil y Santo Mojica; Fabio Gómez Cardona y José Vicente Rodríguez Cuenca resumen versiones distintas del origen de la primera pareja; Alonso transcribe la gente sin huesos del segundo mundo; Pinto García describe la casa ceremonial donde ocurriría la crianza. Todas se citan abajo por lo que aportan, no como respaldo de esta escena.`,
    versiones: `Hay al menos cuatro maneras documentadas de contar el paso a la humanidad, y no coinciden.

La de este relato es la de Seye Ababi Makó: una madre que sólo pare animales sin huesos, unas piedras aplicadas al ombligo, dos partos vigilados, dos casas distintas y una pareja de hermanos. En el mismo conjunto, Benito Sontinkama cuenta otra cosa en su versión de la creación: allí no hay Naowa ni piedras, y es Seraira quien simplemente coge del cielo un varoncito y una mujer y los pone en la tierra, junto con el bastimento. Dos relatores del mismo mes, del mismo grupo, con dos orígenes distintos de la gente.

El portal de lenguas del Instituto Caro y Cuervo publica, a partir de la recopilación de Coronado Conchala de 1993 y con palabra de los Mamas Arregocés Pinto, Miguel Gil y Santo Mojica, una tercera: Aluna Java hace primero un ser humano «sin huesos, sin ojos, sin pies, sin manos… era como gelatina», después uno con huesos que no hablaba ni trabajaba, y sólo al tercer intento el hombre completo. Coincide con este relato en que el problema es la falta de hueso, y difiere en todo lo demás: no aparecen Sintana ni Naowa, ni las piedras, ni la crianza separada.

Fabio Gómez Cardona, siguiendo a Reichel-Dolmatoff, sostiene una cuarta: los primeros dioses son nueve hombres y nueve mujeres, hijos directos de la Madre Universal, y Sintana engendra a los primeros hombres y mujeres en relación incestuosa con la propia Madre. Ahí el incesto fundador es de madre e hijo, no de hermano y hermana. Y José Vicente Rodríguez Cuenca, resumiendo a Preuss y a Reichel-Dolmatoff, escribe que de la tierra negra «surgió la primera pareja de humanos en un templo construido por los cuatro señores». Coincide con este relato en que la pareja aparece dentro de un espacio ceremonial construido, y no dice nada de Naowa.

Las grafías tampoco son estables. Chaves escribe «Neowa» la primera vez y «Naowa» después; en el texto pone Duguwé, Sivalikukue, Seyúnkawa y Seiyeleukwe, y en su propia lista de personajes Dukuwe, Sibalikukwe, Seyankakua y Seiyelenkue. La reimpresión de 1993 escribe Bahawé donde Chaves escribe Bahavé, y cierra con «ya era gente, tribu, tribu y tribu» donde Chaves había impreso «ya era grande».`,
    similitudes: `El paralelo más cercano viene del pueblo vecino y del mismo equipo de trabajo. Gerardo Reichel-Dolmatoff publicó en 1945 los mitos y cuentos chimila, y el primero cuenta que Papá Grande amasó un pedazo de greda como quien moldea loza, fue añadiendo hasta tener la tierra, hizo un tigre grande y después hizo a los hombres, que eran aruacos, guajiros y motilones; al ver que no podían vivir sólo de guerra y de palabras, hizo una mujer para cada uno. La diferencia salta: entre los chimila el creador es masculino, la materia se amasa y las mujeres llegan como remedio a un problema de convivencia; en este relato la que pare es una madre, la materia es su propio cuerpo y el problema es que lo que nace no tiene huesos. El propio Reichel-Dolmatoff advierte allí que la idea del barro como materia prima podría deberse a influencia cristiana, y esa advertencia sirve también aquí.

El segundo paralelo está más lejos y es más revelador. En las nociones sobre los catíos que publicaron Henri Rochereau y Paul Rivet en 1929, Caragabí modela un par de muñecos de piedra que abren los ojos y se sonríen pero no pueden levantarse, tiene que pedirle barro a Tutruicá, sopla al muñeco con un pedacito de costilla propia y sólo entonces el hombre se levanta; diez años después le quita al hombre una costilla del lado derecho para hacer a la mujer. El motivo de la costilla y la bendición delatan la mano del misionero que recogió el relato. En el relato kágaba no hay costilla ni bendición: hay dos piedras, nueve lunas contadas y un castigo.

Dentro del mismo conjunto de 1947 hay un tercer eco, y es un contraste. En el sexto relato, también de Seye Ababi Makó, los padres ordenan a un hombre tener relaciones con su hija para endurecer la tierra; nace un hijo blandito, sin huesos, y los mamas prohíben el incesto hasta el fin. Aquí la unión entre hermanos funda a los kogui; allí la unión entre padre e hija queda prohibida para siempre.`,
    leccion:
      "Hubo que endurecer el cuerpo y criar aparte antes de que naciera una descendencia humana.",
    sceneHorizontal:
      "Sintana conduce por senderos separados a un niño y una niña hacia dos casas ceremoniales entre montañas y ríos",
    sceneVertical:
      "dos casas ceremoniales se miran desde laderas opuestas mientras la primera pareja adulta se encuentra en el valle",
    researchNotes:
      "CORRECCIÓN: se eliminan nombres de la pareja y romance inventados. VARIACIÓN: no se fusiona con Madre Wastora.",
  }),
  myth({
    slug: "madre-wastora",
    relatoCorto:
      "El registro completo de este relato ocupa doscientas catorce palabras en la única fuente que lo narra, y ninguna otra fuente de la lista cuenta el episodio. Alargarlo habría significado inventarlo.",
    sourceKeys: [
      "chaves1947",
      "reichel1950",
      "preuss1993",
      "reichel1987",
      "pes2017",
      {
        key: "gonzalezinterpretacion2009",
        summary:
          "Transcribe el pasaje exacto de la fabricación del primer cuerpo: \"La Madre se arrancó un pelo del pubis y lo untó con la sangre de su mes. Así formó al primer hombre. Soplando le dio vida\". Y transcribe también el gesto que habilita la descendencia: Sintána pone en el ombligo de la Madre \"un pelo, una uña de ella y una piedra chiquita\", y así la Madre pare nueve hijas. Es el respaldo textual de las dos piezas centrales de la ficha: las materias de origen y la piedra que abre la generación.",
        limitation:
          "No usa los nombres Wastora ni ragaba-kuitse, ni llama Haba Naowa a la Madre: la piedra es sólo \"una piedra chiquita\". La lectura junguiana convierte la sangre en símbolo universal, justo lo que la ficha quiere evitar; hay que quedarse con la transcripción.",
      },
      {
        key: "garcialiteratura2021",
        summary:
          "Es la única fuente hallada que nombra la piedra en lengua: al glosar el párrafo siete del mito escribe \"un pelo, una uña de ella y una piedra kággaba-kuítsiy. Así estuvo en cinta, parió nueve hijas\". La grafía kággaba-kuítsiy corrobora que ragaba-kuitse no es un nombre suelto de la traducción de 1951 sino una categoría con forma reconocible, ligada a la palabra kággaba (gente).",
        limitation:
          "Lo dice de pasada, dentro de un análisis de símbolos rituales del poporo, y no explica el término ni cita la fuente de esa grafía. No trata el episodio de Wastora ni la unión del primer hombre con una de las hijas. Revista venezolana accesible sólo por HTTP.",
      },
      "preciadoCompilacion2012",
      {
        key: "ortizMitologia2023",
        summary:
          "Confirma con otra cadena de transmisión —Mamas Arregocés Pinto, Miguel Gil y Santo Mojica, vía Coronado Conchala 1993— el rasgo del cuerpo blando: el primer ser humano hecho por Aluna Java era \"sin huesos, sin ojos, sin pies, sin manos… como gelatina\" y hubo que rehacerlo dos veces hasta que hablara y trabajara. Muestra que la dureza del cuerpo es un problema narrativo recurrente y no un detalle de una sola traducción.",
        limitation:
          "Aquí quien forma al hombre es Aluna Java y no una Madre Wastora, y no hay sangre, ni pensamiento como materia, ni piedra de gente. Ficha divulgativa breve, sin análisis.",
      },
      {
        key: "cardonajaguar2020",
        summary:
          "Ordena los nombres de la Madre —Haba Gaulchovang, Haba Kasumma, Haba-sé— como aspectos distintos de una misma deidad, y explica que ciertos rasgos del relato inducen a pensar en un principio hermafrodita o aun asexuado, de modo que \"la sexualidad debió de ser inventada, creada, o lograda por los primeros dioses en un trabajo arduo\". Da también Haba-sé como \"Madre-pene\" y la Madre con barba y bigote. Encuadra por qué la generación necesita ser habilitada y no sale sola del cuerpo.",
        limitation:
          "No recoge el nombre Wastora ni la piedra ragaba-kuitse, y su interés declarado es lo masculino y el jaguar; lo femenino entra como contrapunto. Se apoya casi por completo en Reichel-Dolmatoff 1985, así que no es un testimonio independiente.",
      },
    ],
    title: "Madre Wastora y la piedra de gente",
    summary:
      "La Madre forma al primer hombre con pensamiento, sangre y espíritu, y una piedra de gente permite que comiencen las generaciones.",
    tags: ["Madre Wastora", "origen humano", "piedra", "fertilidad"],
    mito: `Madre Wastora nació de otra madre. Ahora Wastora se llama Haba-Naowa. Ella fue la que hizo a los indios. Al principio solamente tenía hijas, pero no había hombres, y para que existiéramos nosotros inventó al primer hombre.

Se arrancó una aluna-hala, un vello genital; recogió un poco de sangre de menstruación; sacó de su cuerpo un punto de espíritu. Así hizo a la primera gente, pero nació blando, no tenía huesos. Con el pelito, la sangre y el punto de espíritu nació un hombre; nació y comenzó a crecer, y a crecer, y a crecer. Cuando estuvo grande lo casó con una mujer.

Haba-Naowa hizo primero a los indígenas: kogui, aruaco, atanquero, marocazo, chimila, guajiro. Después hizo a los civilizados: francés, chino. Toda la gente que vive en el mundo.

Pero los primeros no podían hacer hijos. Entonces Haba-Naowa cogió una piedra larguita y se la puso en la barriga a la hija, y le enseñó a hacer coito. Esa piedrita se llama Kagaba-Kuitse, piedra de gente. Se la puso a la hija y entonces ella concibió hijos, porque antes tenían relaciones sexuales hombre con hombre y así no tenían hijos; por eso se la dio a la mujer.

Así la mujer ya quedó preñada, y salieron hijos, y se pobló el mundo. A cada uno le enseñó su idioma.`,
    historia: `Lo narró Seye Ababi Makó, de veinticinco años, cabo del mama Ignacio Abiguí de Tucurinca, y lo recogió Milcíades Chaves Ch. en noviembre de 1946 entre el grupo de San Andrés. Salió publicado en 1947 como el cuarto relato de Mitología kágaba, con el rótulo «Informador: Seye Ababi Makó». Es breve: poco más de doscientas palabras, seguidas de una lista de personajes con una sola entrada y de una síntesis del propio Chaves. Cuando páginas más adelante lo comenta, Chaves lo llama «el tercer mito, Madre Wastora», aunque lo había impreso como el cuarto.

Hay un error de lectura que esta página venía repitiendo y que ahora se puede corregir con los textos delante. La piedra se llama, en Chaves, «Kagaba-Kuitse = Piedra de gente». La reimpresión de 1993 preparada por Eugenia Villa Posse imprime «ragaba-kuitse (piedra de gente)», y de ahí, no del original, salió la forma que el sitio publicaba. Que la buena es la de Chaves lo confirma el tomo I de Los Kogi, que ninguna ficha citaba: Reichel-Dolmatoff explica allí que kágaba es «palabra que en su lengua significa "gente"», y registra kággaba-kuítsi entre las cuentas ceremoniales de un linaje, junto a shiváldu-kuítsi, nyí-kuítsi, gául-kuítsi y hayu-kuítsi, donde la terminación designa la cuenta de collar. Leydi Johanna Pinto García escribe la misma forma, kággaba-kuítsiy, al glosar el mito de la creación. De modo que «piedra de gente» no es una glosa libre del traductor: es la traducción palabra por palabra de un término compuesto que existe fuera de este relato.

Lo mismo vale para la primera materia. Chaves traduce «aluna-hala» entre comas como «vello genital», y ésa es la única vez que la palabra aluna aparece en todo su volumen. Esta página la venía presentando como «pensamiento o aluna», que es el concepto de aluna tal como lo desarrolla Reichel-Dolmatoff en otra obra, superpuesto sobre una palabra que aquí significa otra cosa.

Ninguna otra fuente de la lista narra este episodio. Juan Carlos Alonso González transcribe un pasaje muy próximo —«La Madre se arrancó un pelo del pubis y lo untó con la sangre de su mes. Así formó al primer hombre. Soplando le dio vida»— pero sin los nombres Wastora ni Haba-Naowa y con la piedra reducida a «una piedra chiquita». El portal del Instituto Caro y Cuervo confirma el cuerpo blando en otra cadena de transmisión. Fabio Gómez Cardona ordena los nombres de la Madre y discute su carácter no sexuado. Zulma Martínez Preciado y Liliana Moreno Muñoz analizan su facultad de autofecundarse, aunque desembocan en la Magna Mater euroasiática. Todas ellas rodean el relato; ninguna lo sustituye.`,
    versiones: `Este relato no tiene variantes registradas con otro narrador: es un testimonio único, de una sola persona, en una sola tarde de noviembre de 1946. Eso significa que no hay con qué contrastarlo dentro del propio corpus, y conviene decirlo antes que tratarlo como la versión kogui del origen humano.

Lo que sí hay son relatos vecinos que cuentan el mismo paso de otra manera. Juan Carlos Alonso González transcribe una secuencia en la que la Madre hace al primer hombre con un pelo del pubis y la sangre de su mes y le da vida soplando, y en la que después es Sintána quien le pone en el ombligo «un pelo, una uña de ella y una piedra chiquita» y así ella pare nueve hijas. Ahí la piedra no habilita la generación de la hija sino la de la Madre misma, y quien la aplica es un hijo, no ella. El portal del Instituto Caro y Cuervo publica, con palabra de los Mamas Arregocés Pinto, Miguel Gil y Santo Mojica, una tercera forma: es Aluna Java quien hace un primer ser humano «sin huesos, sin ojos, sin pies, sin manos… era como gelatina», y hay que rehacerlo dos veces. El cuerpo blando reaparece; el nombre Wastora, la sangre y la piedra, no.

La identificación de la Madre es otro asunto que cambia según quién escriba. Chaves la trata como una sola figura con muchos nombres: «el primer dios, o la primera fuerza sobrenatural, el origen de todo lo que existe, es una mujer, personificada en Luitsama, Naowa, Wastora o la primera Magri». Reichel-Dolmatoff, en el tomo I, la llama Gaulchováng y también Hába Kasúmma. Gómez Cardona ordena Haba Gaulchovang, Haba Kasumma y Haba-sé como aspectos de una misma deidad y advierte que ciertos rasgos inducen a pensar en un principio hermafrodita, de modo que —escribe— «la sexualidad debió de ser inventada, creada, o lograda por los primeros dioses en un trabajo arduo».

Queda una divergencia de grafía que ya está corregida en la narración, pero que conviene dejar anotada: la piedra es Kagaba-Kuitse en el original de 1947 y ragaba-kuitse en la reimpresión de 1993. El sitio venía publicando la segunda.`,
    similitudes: `El paralelo más útil está a un día de camino. Gerardo Reichel-Dolmatoff publicó en 1945 los mitos y cuentos chimila, recogidos entre un pueblo que este mismo relato nombra como una de las gentes que hizo Haba-Naowa. Allí el primero de los cuentos dice que Papá Grande tomó un pedazo de greda y lo amasó como quien moldea loza, fue añadiendo pedazos hasta tener la tierra, hizo un tigre y después hizo a los hombres; y sólo cuando vio que no podían vivir de guerra y de palabras hizo una mujer para cada uno. La inversión es completa: entre los chimila crea un padre, con materia ajena a su cuerpo, y la mujer llega al final; aquí crea una madre, con su propio vello, su propia sangre y un punto de su espíritu, y lo que falta al final es el hombre. El propio Reichel-Dolmatoff observa allí que la idea del barro como materia prima podría delatar influencia cristiana.

El segundo paralelo enseña a reconocer esa clase de influencia. En las nociones sobre los catíos que publicaron Henri Rochereau y Paul Rivet en 1929, Caragabí hace primero un par de muñecos de piedra que abren los ojos y se sonríen pero no logran levantarse, debe pedirle barro a Tutruicá, sopla al muñeco con un pedacito de costilla propia para que se levante, y diez años más tarde le quita al hombre una costilla del lado derecho para hacer a la mujer. La costilla, la bendición y el arrodillarse vienen del misionero que tomó el dictado. En este relato no hay costilla ni bendición, y la mujer no sale del hombre: el hombre sale de ella.

Dentro del mismo conjunto de 1947 hay un contraste que conviene no perder. En el tercer relato, del mismo narrador, la humanidad empieza porque Sintana aplica dos piedras al ombligo de Naowa y luego manda unir a los dos hermanos. Aquí empieza porque una madre se fabrica un hijo y después le entrega a su hija la piedra que permite concebir. Son dos antropogénesis distintas contadas por la misma persona, y no se corrigen entre sí.`,
    leccion:
      "Hacer un cuerpo no bastó: la capacidad de engendrar hubo que enseñarla y entregarla aparte.",
    sceneHorizontal:
      "Madre Wastora prepara la silueta del primer hombre con capas de pensamiento, sangre y espíritu junto a una piedra de gente",
    sceneVertical:
      "la piedra ragaba-kuitse ocupa el centro mientras una primera familia y varios caminos de pueblos aparecen alrededor",
    researchNotes:
      "LENGUAJE: la sangre menstrual se presenta como materia creadora, no como impureza. TÉRMINO: se conserva ragaba-kuitse.",
  }),
  myth({
    slug: "kimaku",
    sourceKeys: [
      "chaves1947",
      "reichel1950",
      "preuss1993",
      "reichel1987",
      "pes2017",
      {
        key: "mellconcepcion2013",
        summary:
          "Sitúa a Kimáku por su nombre dentro de la cosmogonía: al formarse el octavo mundo nacen 36 Padres y Dueños del Mundo, cuatro veces nueve, y los primeros nueve son 'Seihukúkui, Seyankua, Sintána, Kimáku, Kuncha-vitauéya, Alkíndue, Jantána y Duesángui'. Confirma que Kimáku no es un personaje menor de un episodio suelto sino uno de los Padres primordiales, lo que sostiene la afirmación de la ficha de que su búsqueda tiene consecuencias colectivas.",
        limitation:
          "Menciona a Kimáku sólo en la enumeración de los Padres: no narra su soledad, ni las mujeres peligrosas, ni a Terana. Ensayo de concurso, no arbitrado, y trabaja la versión de Reichel-Dolmatoff.",
      },
      {
        key: "lLinajes1995",
        summary:
          "Da el modelo que el relato de Kimáku dramatiza. Muestra los cuatro túxe con sus animales ancestrales y los dáke con los que forman grupos endógamos, y explica que el matrimonio kogui se concibe como la unión de un predador con su presa favorita: hombre jaguar con mujer venado, hombre búho con mujer culebra. La compañera de un primer hombre no puede ser cualquiera: hay una sola categoría correcta, y toda otra unión es peligrosa o estéril. Eso sostiene, sin sensacionalismo, por qué cada encuentro de Kimáku encierra un riesgo.",
        limitation:
          "No nombra a Kimáku ni analiza ningún mito: es parentesco comparado, con la sección kogui apoyada enteramente en Reichel-Dolmatoff 1985. Buena parte del texto trata a u'wa y muiscas. Copia alojada en un repositorio de la Universidad Nacional.",
      },
      {
        key: "cardonajaguar2020",
        summary:
          "Documenta el motivo de la mujer con dientes en los genitales con nombre propio y sin morbo: 'Teimu, la dueña de los pescados, que tenía dientes en la vagina y comía hombres', dentro de una serie de diosas evaluadas negativamente (Haba Nabobá, las Kumigua, Semangaya). Y precisa el lugar estructural del motivo: la Madre terrible de la vagina dentada es 'un peligro constante para los héroes en su viaje'. Confirma que la imagen de la ficha pertenece al repertorio kogui documentado y que es un obstáculo de trayecto heroico, no un juicio sobre las mujeres.",
        limitation:
          "No nombra a Kimáku ni a Terana: el motivo aparece atribuido a otras figuras. Es crítica literaria sobre el corpus de Reichel, no sobre el de Preuss, y el propio autor advierte que la mitología kogui tiene pocas figuras femeninas protagónicas, lo que condiciona su lectura.",
      },
      {
        key: "mogollonGonzalezCreacion2024",
        summary:
          "Explica por qué en las genealogías koguis la entrega del poporo y el matrimonio de Kimáku se cuentan juntos: el poporo (sugi) se entrega en un ritual de cuatro días al joven de 13 a 18 años y marca la entrada en la vida reproductiva; el mamo instruye al joven para que dialogue con el poporo sobre lo que espera de la vida. La búsqueda de compañera aparece entonces como un paso institucional y no como romance.",
        limitation:
          "No menciona a Kimáku ni ningún relato de origen con nombres propios. Trata a la vez a kogui, iku, wiwa y kankuamo, y se basa en conversaciones de los últimos cinco años: describe la práctica actual, no el relato de 1915.",
      },
      {
        key: "rangelResena1990",
        summary:
          "Justifica la cautela de la ficha ante las versiones divergentes. Señala que el corpus disponible son en realidad tres —Preuss (1915), Fischer (1986-87) y Reichel (1985)—, recogidos con un lapso generacional entre cada uno, lo que permite ver cambios internos de la mitología; y cita a Fischer diciendo que los mitos recogidos sesenta años después de Preuss habían mantenido su función, su integridad y su complejidad narrativa. Es el argumento para conservar variantes en vez de fundirlas en una versión única.",
        limitation:
          "Reseña de dos páginas: no menciona a Kimáku ni analiza relato alguno. Su valoración de Preuss es opinión del reseñista.",
      },
    ],
    title: "Kimaku y la búsqueda de compañía",
    summary:
      "Kimaku atraviesa encuentros peligrosos y transformaciones hasta hallar una compañera con quien puede comenzar la vida humana en la Sierra.",
    tags: ["Kimaku", "compañía", "transformación", "poblamiento"],
    mito: `Al principio hubo un hombre, Kimaku. Vio todo el mundo y compuso todos los cultivos.

Entonces vino uno de los padres malos e inventó una mujer, y la puso en el camino por donde Kimaku pasaba todos los días. La mujer estaba desnuda, mostrando toda su belleza, para que Kimaku hiciera cosas con ella. Kimaku la vio, pero no hizo nada; la vio muy bonita, pero no le dijo nada.

Siguió su camino y se dio cuenta de que la mujer lo seguía. Cuando pasó la primera quebrada ya eran dos mujeres, y en cada quebrada que pasaba aparecía otra. Kimaku iba corre que corre, y le costó mucho trabajo no esperarlas.

Entonces encontró al padre Terana, el Tairona, y le avisó lo que pasaba. Terana se quitó la ropa y se la puso a Kimaku, que quedó como si fuera Terana, y le dijo: quédate, que yo sigo puesto tu ropa.

Kimaku se quedó un rato sentado y vio como diez mujeres, que le preguntaron: ¿no viste a un señor que debió pasar por aquí? Él contestó: adelante va. Ellas iban desnudas y provocativas, y Kimaku pensó: qué bonitas están. Ellas regresaron y le dijeron: tú eres el que estás pensando. No, yo no soy, ya pasó adelante, contestó.

Las mujeres alcanzaron a Terana, que llevaba el vestido de Kimaku, en una laguna. Estaba sentado en una piedra grande. Ellas pensaron: ya lo tenemos cogido. Salieron como quince mujeres y lo arrinconaron.

Terana cogió un bastoncito de oro que llevaba bajo el brazo, se frotó las manos, y la candela surgió por todas partes. El siguate hervía como miel, y todas las mujeres se quemaron.

Si Kimaku hubiera accedido a los deseos de las mujeres, habría perdido su órgano viril, porque esas mujeres tenían dientes en el sexo y eran muy malas.`,
    historia: `Es el quinto relato de «Mitología kágaba». Lo narró Seye Ababi Makó, cabo del mama Ignacio Abiguí de Tucurinca, y lo recogió Milcíades Chaves Ch. en noviembre de 1946 en el grupo de San Andrés, en la Sierra Nevada de Santa Marta, durante una estadía que compartió con Gerardo Reichel-Dolmatoff y Alicia Dussán de Reichel-Dolmatoff. Se publicó en 1947 en el Boletín de Arqueología, volumen II, números 5 y 6, bajo el encabezado «Informador: Seye Ababi Makó». Chaves lo cierra, como a casi todos, con un índice de «Personajes de la leyenda» y una «Síntesis de la leyenda» escritos por él, donde llama al protagonista «hombre bueno que cuida sus cultivos», a Terana «padre bondadoso» y a las mujeres «la tentación». Esas tres etiquetas son suyas, y llevan encima la moral de su época; no son palabras del narrador.

Conviene decir qué clase de personaje es Kimaku en el resto del corpus, porque esta página sólo cuenta un episodio suyo. En el primer relato de la serie es quien trae un idioma con palabras para secar la tierra, cuando todo era barro blando, e inventa después el idioma de ahora, con el que se saluda y se pide. En otro relato bajó los cerros, que alcanzaban el azul del cielo, y los reventó por la mitad para hacer planos. Aquí no hace nada de eso: aquí sólo camina, mira y no se detiene.

El título con el que esta página se publicaba, «Kimaku y la búsqueda de compañía», no corresponde a lo que narra la fuente. En el texto de Chaves, Kimaku no busca compañera, no la encuentra, y no funda con nadie una descendencia; huye de unas mujeres fabricadas para perderlo y se salva porque otro ocupa su lugar. Tampoco hay en este relato poblamiento de la Sierra ni comienzo de la gente, que son asunto de otros episodios del mismo corpus. Por eso se propone corregir el título.

Sobre la traducción hay que ser prudente. Chaves advierte que no hablaba kogui y que tuvo que verificar los interrogatorios en castellano, lengua que sus interlocutores no manejaban con destreza, de modo que los conceptos pueden haber quedado deformados. Dos rastros de eso quedan en la página: «hacer cosas», que es el eufemismo con que la transcripción vierte el acto sexual en varios relatos, y «siguate», palabra del desenlace que el volumen no glosa en ninguna parte y que no vuelve a aparecer.`,
    versiones: `De este episodio existe un solo testimonio: el de Seye Ababi Makó, tal como Chaves lo escribió en noviembre de 1946. No hay una segunda versión narrada por Benito Sontinkama, como sí la hay para otros episodios del mismo corpus, y el nombre Kimaku no aparece ni una sola vez en el tomo I de Los Kogi que Reichel-Dolmatoff publicó en 1950, mientras que en Chaves aparece más de cincuenta veces. Eso significa algo concreto: todo lo que esta página cuenta descansa en una conversación, sostenida en castellano, con un hombre de veinticinco años, hace casi ochenta años. Si el relato tenía otras formas, no quedaron escritas aquí, y esta página no puede decir cuáles eran.

Lo que sí tiene otros testimonios es el motivo, no el relato. En el corpus kogui que Reichel-Dolmatoff publicó en el tomo II, Fabio Gómez Cardona identifica en 2020 «la Madre terrible de la vagina dentada, cuya sexualidad castradora es un peligro constante para los héroes en su viaje por la ruta del sol», y la localiza en cuatro relatos numerados de ese volumen. Uno de ellos es el de Teimú y Andu: allí la mujer persigue al héroe hasta un árbol que él hace crecer cuatro veces con un bastón mágico y que ella derriba otras tantas con ayuda de varios roedores, hasta que él escapa hacia arriba llevado por el gallinazo. Coinciden los dientes y el bastón; se separan el desenlace y el salvador, porque allí el héroe huye hacia arriba y aquí lo salva un padre que se cambia de ropa con él y quema a las perseguidoras.

Las grafías de este relato también se mueven. El propio Chaves escribe Terana y lo glosa «Tairona», pero en una línea de la misma página la composición tipográfica lo vuelve «Terena». La reimpresión de «Mitos y leyendas de Colombia», compilada por Eugenia Villa Posse y publicada en 1993, conserva el texto y al relator, y encabeza el relato KIMAKU como Chaves; pero en su índice el mismo relato aparece como «Kimayu», con una ye que no está en ninguna parte del texto. En ese índice «El Sol – Mama» se convierte además en «El sol Mana» y «La enfermedad – Hiwihá» en «Hiwika». Quien llegue al relato por el índice buscará un nombre que no existe.`,
    similitudes: `El motivo de los dientes tiene un testimonio vecino y casi contemporáneo. En «La India Worunka», que Chaves recogió en la Guajira y publicó en 1946, un año antes que el corpus de la Sierra, se cuenta que «en tiempos antiguos las mujeres tenían dientes en la vulva», y que por eso el hombre no podía hacer el coito por miedo a que se lo mordiera y se lo cortara; para tener hijos se hacía por el ombligo. Mareiwa le tiró una piedra a Worunka, le rompió los dientes y dijo que por allí nacerían los hijos. La diferencia decide el sentido de cada relato: en la Guajira los dientes son una condición del principio del mundo que una divinidad corrige de una vez y para todas, y desde entonces las relaciones son normales; en la Sierra no son una condición sino un arma, puesta a propósito por un padre malo en un cuerpo fabricado para un solo hombre, y al final nada queda corregido, porque lo que arde son las mujeres y no los dientes.

Entre los chamí, en el material que el mismo Chaves publicó en 1945, «La india Pixaawina» pone la trampa en forma de invitación. Una india se acercaba a los hombres que iban de pesca y los convidaba, y cuando ya estaban solos los mataba o los llevaba donde su gente, que los amarraba, los engordaba «como a marranitos», los castraba y se los comía. La coincidencia con Kimaku es exacta en el peligro —la pérdida del órgano— y opuesta en la salida: allí el muchacho sobrevive porque la propia captora se cansa, se fuga con él y termina cazando para la casa que formaron, mientras que aquí el hombre se salva sin hablarle a ninguna y sin que ninguna sobreviva.

Los tres relatos los publicó el mismo etnólogo en tres años seguidos y en tres pueblos distintos, lo que explica en parte el aire de familia y aconseja no leerlo como prueba de un fondo común.`,
    leccion:
      "Mirar sin detenerse salvó a quien no podía vencer por la fuerza lo que lo perseguía.",
    sceneHorizontal:
      "Kimaku cruza varios senderos de la Sierra mientras Terana desvía figuras animales amenazantes y al fondo aparece una compañera segura",
    sceneVertical:
      "Kimaku y su compañera final observan un valle habitable después de dejar atrás siluetas oscuras y caminos cerrados",
    researchNotes:
      "TRATAMIENTO: se conserva el motivo sexual sin detalle gráfico ni generalización misógina. VARIANTES: Terana y los peligros no se sintetizan artificialmente.",
  }),
  myth({
    slug: "incesto-de-padre-hija",
    relatoCorto:
      "El dictado de 1946 ocupa nueve renglones y no narra nada más: no hay nombres propios, no hay castigo, no hay persecución, no hay desenlace posterior. Todo lo que se sabe del sistema de normas al que pertenece está en otras partes del mismo trabajo y en otras fuentes, y va en las capas documentales y no aquí.",
    sourceKeys: [
      "chaves1947",
      "reichel1950",
      "reichel1987",
      "pes2017",
      "decreto2018",
      {
        key: "cardonajaguar2020",
        summary:
          "Es la fuente que mejor hace lo que pide este encargo: sitúa el incesto padre-hija dentro del sistema de normas y no en el escándalo. Documenta que en el corpus kogui hay un incesto primordial explícitamente padre-hija, el del Sol Mulkuexe con su hija Enduksama (la estrella Venus), y que de él nace Nurlitaba, el primer murciélago, un hijo sietemesino —prematuro, incompleto— que en la ficha resuena con la criatura blanda. Lo decisivo es la función: el episodio no termina en castigo sino en norma; de esa trampa que le tiende Sintana 'se instituye la prohibición del incesto en el plano social-sexual', y queda establecida 'desde entonces la ley de la exogamia que rige los matrimonios y las uniones entre los linajes masculinos y femeninos'. El propio Sintana formula la acusación de manera indirecta —'me dicen que muchos hombres duermen con sus hijas'— lo que muestra que el relato trata una posibilidad social y no una anomalía monstruosa. Además, todo el apartado sobre Noána-sé se titula 'Organización social, incesto y exogamia', y el autor sostiene que ese ciclo trata centralmente las condiciones para establecer alianzas entre clanes y linajes.",
        limitation:
          "La versión que analiza es la del ciclo solar (Mulkuexe y Enduksama), no la del suelo blando que endurece y la criatura blanda que trae la ficha: son dos episodios distintos del mismo corpus y no deben fundirse. No menciona a los mamas estableciendo la prohibición en esos términos. El libro es análisis literario-semiótico sobre versiones publicadas, sin campo propio, y algunas lecturas (el cambio de sexo de Enduksama como doble aspecto de Venus) las marca el autor como hipotéticas.",
      },
      {
        key: "reichelDolmatoffTemplos1975",
        summary:
          "Demuestra que este no es un asunto arqueológico cerrado en el tiempo primordial, que es justo lo que la ficha necesita para no tratarlo como anécdota. Al describir los peligros que encierra el poder del Sol, Reichel-Dolmatoff enumera las preguntas que se hacen los mamas: qué ocurriría si el sol se cansara y se durmiera, si se demorara demasiado en un mismo lugar, y '¿cuáles serían las consecuencias de un nuevo incesto entre el sol y su hija Venus?'. El adjetivo 'nuevo' es la clave: la transgresión inaugural es una posibilidad que sigue abierta y que el trabajo ritual mantiene a raya. Añade el caso análogo del eclipse, káldabauku, una mujer-astro 'muy bella y toda negra y azul' que seduce al sol y lo hace perderse, ante lo cual los mamas mandan apagar todos los fogones y producir fuego nuevo con berbiquí ritual para inducir al sol a volver en sí.",
        limitation:
          "Trata el incesto solar, no la versión del suelo blando. Es una mención dentro de un artículo sobre arquitectura y astronomía del templo; no analiza el parentesco ni las reglas de matrimonio. El PDF del ICANH es un escaneo sin capa de texto y no pude leerlo ahí; verifiqué el contenido en la copia con texto extraíble del mismo artículo en Semantic Scholar (pdfs.semanticscholar.org/0682/93f396cb970445fdd68b1059044378dd06fd.pdf). Categorías y transcripción de 1975.",
      },
      {
        key: "witteLiving2018",
        summary:
          "Describe el sistema de parentesco vivo dentro del cual la prohibición tiene sentido, que es exactamente el encuadre que este mito pide y que hoy la ficha no ofrece. Explica que los kogui se organizan en linajes masculinos (tuxe) y femeninos (dahke) en un sistema de descendencia bilateral: los niños quedan en el linaje del padre y las niñas en el de la madre, y siguen ahí después del matrimonio. Las uniones deben darse entre ciertas combinaciones de linajes según la compatibilidad cosmológica de los elementos naturales asociados a cada uno, y cada linaje se vincula a un colectivo cósmico (kalguasha) que organiza un elemento —agua, jaguar, palma, trueno, matrimonio, alimentos— y se origina en un sitio sagrado de media altura, la ezwama. La prohibición padre-hija deja así de ser una regla aislada y aparece como un caso dentro de una arquitectura donde cada unión legítima está definida por posición cósmica.",
        limitation:
          "No menciona este mito ni la palabra incesto en ningún punto: el encuadre lo aporto yo desde su descripción del parentesco. Está en inglés, con ortografía kogui propia del autor. El sistema descrito es el ideal expuesto por sus interlocutores en comunidades concretas, y él mismo remite a Reichel-Dolmatoff 1950 para la compatibilidad de linajes.",
      },
      {
        key: "wittestructure2020",
        summary:
          "Aporta lo que le falta al relato para no quedar en pura interdicción: qué se hace cuando la norma se rompe. Documenta la confesión, aluna ishguashi, como pagamento común a los cuatro pueblos, en el que la persona descarga mentalmente pensamientos, emociones, sueños, acciones y memorias que el mama convierte en pagamento; el nombre i'kʉ equivalente, gʉn'gawʉn, denota alimentar, limpiar y renovar relaciones. Registra también, en versión abreviada, los linajes tuhke y dahke que definen los matrimonios compatibles según los elementos naturales asociados, y la complementariedad entre mamas (el sol) y sahas (la luna), que pagan respectivamente a las madres y a los padres espirituales. Permite presentar la prohibición como parte de un sistema con mecanismos de reparación, no como un tabú suelto.",
        limitation:
          "No menciona el mito ni el incesto. Es etnografía de pagamentos y confesiones, con eje comparativo andino, y buena parte del material sobre la confesión procede de los i'kʉ (arhuacos) y no de los kogui, lo cual hay que decir si se usa ese punto.",
      },
      {
        key: "vargasBajo2025",
        summary:
          "Explica por qué en este corpus una transgresión de parentesco puede ir acompañada de un cambio en la consistencia de la tierra, sin tener que recurrir a una moraleja. El artículo sostiene que entre los chibchas los humanos ocupan un lugar central en el mundo y que su conducta sostiene o degrada la tierra: las catástrofes estallan cuando pierden el rumbo, se alejan de esa posición central y evaden sus responsabilidades, y cita a los kogui, vía Reichel-Dolmatoff, diciendo que el mundo llegará a su final 'si el código moral y religioso se olvidara o no se obedeciera'. Que el suelo se endurezca al mismo tiempo que se formula la norma deja de ser un capricho narrativo y pasa a ser el modo chibcha de pensar la relación entre conducta humana y estado del mundo.",
        limitation:
          "No menciona el incesto ni este episodio; el material de primera mano del autor es ette y los kogui aparecen en referencias puntuales tomadas de literatura secundaria. Es etnología comparada de alcance regional: sirve como marco conceptual, no como fuente del relato ni de sus detalles.",
      },
      "tkogi1987",
    ],
    title: "La unión prohibida que endureció la tierra",
    summary:
      "En un tiempo de suelo blando, una unión entre padre e hija precede al endurecimiento de la tierra y origina una prohibición para las generaciones.",
    tags: ["prohibición", "parentesco", "tierra", "origen"],
    mito: `Cuando por vez primera existió el mundo, la tierra era blandita y todo se enterraba.

Entonces los padres tuvieron que buscar un idioma, y mandaron a un hombre que hiciera cosas con su hija.

La tierra entonces se endureció. Pero la hija dio a luz con la cabeza blandita, y las manos, y los brazos, y las piernas también blanditas, como si no tuviera huesos. Salió enfermo.

Entonces los mamas dijeron: eso es muy malo, no hay que hacerlo más. Y lo prohibieron hasta el fin.`,
    historia: `Lo contó Seye Ababi Makó, de veinticinco años, cabo del mama Ignacio Abiguí de Tucurinca, en el alto río Sevilla, identificado en la lámina XI del mismo trabajo como Miguel Antonio Niño. Lo contó en castellano, en San Andrés, sobre la vertiente occidental de la Sierra Nevada, en noviembre de 1946, y lo anotó Milcíades Chaves Ch., que lo publicó en 1947 en «Mitología kágaba», Boletín de Arqueología, volumen II, números 5 y 6. Es el mito número 6 y en el impreso se titula INCESTO DE PADRE HIJA. El titular está compuesto con interletraje abierto y la extracción digital lo parte letra por letra, de modo que no puede buscarse ni citarse como grafía; el cuerpo del relato, en cambio, está limpio.

Lo decisivo para leer esta página está unas treinta páginas antes, en el capítulo que Chaves dedica al ciclo vital, y no es mitología sino descripción de lo que ocurría en 1946. Escribe que el incesto entre padre e hija y entre hermanos es de los pecados capitales y de mayor trascendencia, que todos están convencidos de que trae la pérdida de las cosechas, el hambre y las enfermedades, y añade, sin rodeos, «sin embargo todavía se comete». Describe después el procedimiento: el remordimiento obliga a confesarse, el mama aconseja fuertemente e impone castigos de nueve días arrodillados y sin alimento, a veces desnudos y frente a la Casa Ceremonial para que todos lo sepan; y cumplido el castigo obliga a los transgresores a repetir el hecho en el mismo sitio y recoger el semen en un algodón que entregan al mama, con el cual éste adquiere poder para aplacar el invierno, el verano y la enfermedad. Anota además que el castigo es proporcional a la preparación del transgresor: a quien sabe mejor la ley de los antiguos se le castiga más fuerte. Es decir: no es un asunto cerrado en el tiempo primordial, es un riesgo presente y hay un trabajo ritual que lo repara.

Reichel-Dolmatoff confirma el contenido de la regla en el tomo I de Los Kogi: «Como incesto se considera entre los Kógi las uniones entre padres e hijos y entre hermanos y hermanas y tales uniones se prohíben estrictamente», y añade que una o dos generaciones atrás también estaba prohibido el matrimonio entre primos cruzados o paralelos. En su artículo Templos kogi (1975) aparece la pieza que mejor sostiene esta ficha: al enumerar los peligros del poder del Sol, escribe entre las preguntas que se hacen los mamas «¿cuáles serían las consecuencias de un nuevo incesto entre el sol y su hija Venus?». El adjetivo es nuevo.

Falk Xué Parra Witte, en su tesis de Cambridge Living the Law of Origin (2018), describe la arquitectura dentro de la cual esa prohibición tiene sentido: linajes masculinos y femeninos en descendencia bilateral, los niños en el linaje del padre y las niñas en el de la madre, y uniones que deben darse entre combinaciones compatibles según el elemento natural asociado a cada linaje. No menciona este mito ni la palabra incesto. Y el Decreto 1500 de 2018, construido con los cuatro pueblos, deja la norma inscrita en derecho vigente: al describir el sitio Jaba Naxkuldzindue, en la zona del río Tapias, recoge que allí «es el sitio del matrimonio, y practicar formas de matrimonio que no son permitidas dañan este sitio».

Chaves no consigna ningún permiso para publicar nada de esto, y llama «interrogatorios» a sus sesiones. El Plan Especial de Salvaguardia firmado por los cuatro pueblos declara que el uso y manejo de su conocimiento «no concibe la necesidad de su divulgación externa».`,
    versiones: `No hay un segundo dictado de este episodio: sólo lo contó Seye Ababi Makó y sólo una vez. Lo que sí hay, en el mismo corpus, son otros incestos que no deben fundirse con este.

El primero está en el propio trabajo de 1947, en el relato de la creación, y está dicho sin eufemismo: «Como no había otros hombres, Sintana mandó al joven que hiciera hijos con su hermana; así fue como vinieron los Kogui». Chaves añade en su capítulo de comentarios que la iniciación de la primera mujer se produce por el incesto entre el padre, Sintana, y la hija, y después el incesto entre hermanos para la procreación del género humano. No son versiones de este mito: son los mitos 2 y 3, con otros protagonistas y con otro efecto. El séptimo del mismo conjunto, Seiskwisbuche y Yangauki, trata un incesto entre hermanos agravado por el parricidio, y allí sí hay castigo y muerte, mientras aquí no hay ninguno.

El segundo está en el ciclo solar. Fabio Gómez Cardona, en El jaguar en la literatura Kogi (Universidad del Valle, 2020), documenta un incesto primordial padre-hija entre el Sol Mulkuexe y su hija Enduksama, la estrella Venus, del que nace un hijo sietemesino, prematuro e incompleto, el primer murciélago. La resonancia con la criatura sin huesos es evidente, pero es otro episodio: allí la trampa la tiende Sintana, y de ella «se instituye la prohibición del incesto en el plano social-sexual» y queda establecida «desde entonces la ley de la exogamia que rige los matrimonios y las uniones entre los linajes masculinos y femeninos». El mismo autor subraya un rasgo que importa: la acusación se formula de modo indirecto, «me dicen que muchos hombres duermen con sus hijas», de manera que lo que está en juego es una posibilidad social y no una anomalía monstruosa. Es un análisis literario sobre versiones publicadas, sin campo propio, y así debe citarse.

El tercero no es un incesto narrado sino una genealogía. El tomo I de Reichel-Dolmatoff anota que los cuatro Padres del Mundo descendían de una misma Madre, Gaulchováng, «insistiendo así en el tema del incesto original». El mismo tomo registra además que los descendientes directos de Kashindúkua no observaban ninguna restricción matrimonial y se casaban con mujeres de cualquier grupo femenino, es decir, que el corpus tiene un linaje explícitamente exento de la regla.

Y hay un punto donde el impreso de 1947 se desvía del relato: la lista de personajes que Chaves añade debajo dice «El Hijo = Hijo del incesto, nace enfermo», mientras que el texto dictado no asigna sexo a la criatura y sólo dice que «salió enfermo». La síntesis del recopilador, además, invierte el orden del relato al decir que la tierra se endurece después de que nace el niño, cuando el dictado dice que se endureció antes del parto.`,
    similitudes: `Entre los wayú de La Guajira, el mismo Milcíades Chaves recogió un año antes, en «Mitos, leyendas y cuentos de la Guajira» (Boletín de Arqueología, volumen II, número 4, 1946), un relato titulado sencillamente «El Incesto», con informantes nombrados: Ana Isolina Ipuana, de veintidós años, con Ana Ofelia Ortíz como intérprete, y Enrique Epinayú, de cincuenta, con Roberto Iguarán. Allí una majayura sale del encierro embarazada de su hermano y se tira al mar, y Mareiwa le dice que se volverá piedra y que el mundo seguirá su ejemplo; y otra, embarazada por su padre, se ahorca ante la burla de todos, y Mareiwa la convierte en un cerro llamado Katetamana, mujer colgada. El método de recolección es el mismo, la región es vecina y el año es el anterior, lo que hace la comparación especialmente limpia. La diferencia está en el mecanismo: allí la sanción es la vergüenza y el suicidio, y la norma se explica por lo que le pasa al cuerpo de ellas, mientras que en la Sierra la unión la ordenan los padres, sirve para endurecer el suelo y la prohibición llega después, decidida por los mamas.

Entre los desana del Vaupés, Antonio Guzmán narró a Gerardo Reichel-Dolmatoff el mito de la creación publicado en Desana (Universidad de los Andes, 1968). Allí el Sol vivía con su hija como con su mujer, y en el raudal de Wainabí cometió incesto con ella y derramó su sangre: desde entonces las mujeres deben derramar su sangre cada mes, en recuerdo de ese hecho y para que no se olvide. La estructura coincide en lo esencial —de la transgresión inaugural sale una regla que ordena la vida de todos— y difiere en el saldo: allí lo que queda instituido es un ciclo del cuerpo que se repite cada mes, y aquí lo que queda instituido es una prohibición dicha en voz alta y una tierra que ya no se hunde.`,
    leccion:
      "La regla más dura del parentesco nació de una orden que salió mal.",
    sceneHorizontal:
      "una tierra primordial pasa de capas blandas a suelo firme mientras dos senderos familiares se separan bajo la orientación de los mamas",
    sceneVertical:
      "un bastón de autoridad marca un límite entre generaciones sobre un suelo que acaba de adquirir consistencia",
    researchNotes:
      "TÍTULO: se evita el gancho sensacionalista. CONTEXTO: el relato origina una prohibición y no describe una práctica histórica.",
  }),
  myth({
    slug: "seiskwisbuche-y-yangauki",
    sourceKeys: [
      "chaves1947",
      "reichel1950",
      "preuss1993",
      "reichel1987",
      "pes2017",
      {
        key: "cardonajaguar2020",
        summary:
          "Único capítulo académico dedicado a este relato, y cambia varios puntos de la ficha. Da los nombres en otra grafía —Sekuisbuchi, Nurlita, Jangauli— y nombra al padre asesinado: Kuncha-Vitaueya, uno de los nueve Padres. Nurlita no es un compañero: es el cuñado, casado con la hermana de Sekuisbuchi, obligado a trabajar en exceso más allá del servicio nupcial acostumbrado. Y es Nurlita, no los padres antiguos, quien reúne siete mujeres en una para vengarse. El desenlace también difiere: Jangauli abandona a Sekuisbuchi porque no le da comida, se desdobla y se eleva en el aire; él intenta alcanzarla apoyado en su bastón de oro, descubre que ha perdido su poder, sus cosas se vuelven piedras, se le inflaman los genitales y muere en su casa; al amanecer no quedan ni huesos ni rastro. Explica además el valor del número siete (asociado al mal y a la sexualidad aberrada, frente al nueve y el cuatro) y la fórmula 'comer mucho' como acusación encubierta de adulterio.",
        limitation:
          "Es la versión de Reichel-Dolmatoff, que además trae dos variantes del mito; el sitio sigue la del corpus Preuss/Fischer, donde Yanguaki sí es preparado por los padres antiguos. Hay que presentarlo como variante documentada, no como enmienda. Aparato greimasiano del autor, no categorías koguis.",
      },
      {
        key: "lLinajes1995",
        summary:
          "Documenta con precisión la regla que Seiskwisbuche quebranta. Cita a Reichel: el hombre llama con el mismo término, nánma, al hermano de su esposa y al esposo de su hermana; es un término de respeto, el mismo que se usa para los 'Mayores' de la organización política, y entre cuñados existe 'una relación de respeto y colaboración obligatoria' que forma una unidad muy estrecha. Añade que el intercambio de hermanas era práctica corriente y que en las genealogías míticas se dice que hasta hace poco los hermanos se casaban con hermanas. El maltrato a Nunula no es abuso doméstico: es la ruptura del vínculo político más estrecho que reconoce el sistema.",
        limitation:
          "No nombra a Seiskwisbuche ni analiza el relato: es parentesco comparado. La sección kogui se apoya enteramente en Reichel-Dolmatoff 1985, sin campo propio. Copia alojada en un repositorio de la Universidad Nacional, no en el sitio del Boletín.",
      },
      {
        key: "rangelResena1990",
        summary:
          "Da el argumento editorial para conservar la grafía Yanguaki y para no resolver las divergencias. Explica que los mitos de Preuss se publicaron en edición bilingüe kogi-alemán dentro de una obra con etnografía y gramática, que la edición en español los entresacó perdiendo el marco de referencias, y que se suprimieron notas de la traductora. Pide expresamente revisar el texto en kogi para traducir desde el kogi y no desde el alemán: toda grafía de estos nombres es provisional y depende de una cadena de traducción.",
        limitation:
          "Reseña de dos páginas: no menciona a Seiskwisbuche ni ningún relato en particular. La crítica al método de Preuss es valoración del reseñista, no evidencia documentada.",
      },
    ],
    title: "Seiskwisbuche y Yanguaki",
    summary:
      "Nunula escapa de la explotación de Seiskwisbuche y Yanguaki permite derrotar al hombre que había quebrado las reglas de parentesco.",
    tags: ["Seiskwisbuche", "Yanguaki", "Nunula", "transgresión"],
    mito: `Los padres inventaron a Yangauki para matar a Seiskwisbuche, que había dado muerte a su padre y vivía con su hermana.

Había también un hombre que sabía mucho, Nunula, a quien Seiskwisbuche invitó a casarse con la hermana, pero sólo con el fin de matarlo. Cuando fue a vivir con ellos, siempre lo tenía trabajando: lo mandaba a hacer Casa María, a sembrar, a cazar, y por ninguna cosa le permitía llevar a la hermana, mientras Seiskwisbuche seguía haciendo cosas con ella. Cuando reclamaba, le decían que sólo se la pasaba hablando, y querían matarlo.

Un día Nunula se fue a la quebrada y se subió a una piedra. Seiskwisbuche vino a matarlo, pero Nunula se escondió dentro del agua, bajo una piedra, y el otro lo hurgaba con palos y con las manos. Nunula tenía una piedra, Anguiskuitse, que botaba agua como sangre; la sacó y el agua salió como sangre. Cuando vio eso, Seiskwisbuche dijo: ya lo maté.

Se regresó y se metió a su Casa María siete años, como en colegio. Un día sintió que venía algo y mandó a su cabo a vigilar.

Nunula inventó siete mujeres en una sola. El cabo avisó que por la colina venía una mujer vestida de blanco, con ropa limpia. Seiskwisbuche dijo: esa mujer me la manda mi Magri para mí. Ella llegó y dijo: vengo en busca del Mama. Él contestó: yo también soy Mama; tú vas a ser para mí. Cuando iba a entrar no cupo por la puerta y tuvo que arrancar como siete horcones; le puso cuatro bancos y todavía no alcanzaba. Echó de la casa a sus mujeres cucarachas, regañándolas por golosas, y sólo dejó dos para lavar y asear.

La mujer sacudió su gran cabellera y de ella salieron plátano, maíz y frijol. Pasados algunos días le dijo: allá en mi casa como carne todos los días, y si tú no me das me regreso. Él puso una trampa de machucón y cayó una chucha. Ella le dijo que no la pelara, que apenas la chamuscara, le enterrara las tripas sin hondura y no le sacara el corazón. Después se oyó como un canto; ella le dijo que no fuera, pero él fue y vio la chucha sentada en la boca de la olla. Fue a cogerla, la chucha brincó y corrió, y él la alcanzó del rabo debajo de una piedra, pero apenas se desolló: por eso la chucha tiene el rabo sin pelo. Regresó sin nada.

La mujer dijo: me regreso a mi casa. Él dijo que la acompañaba, y llevó piedras y un banco de regalo. Llegaron a una quebrada, y ella le dijo: no mires, que me voy a bañar. Se oyó como un pito, y de ella salió una mujer; otro pito, y salió otra, y así hasta seis. Quedó una mujer común y corriente. Él le preguntó por qué se volvía tan delgadita, pero ella se fue para arriba. Seiskwisbuche cogió un bastón y se cayó. Buscó los vestidos y se habían vuelto piedra, y ya no pudo brincar como hombre.

Al anochecer se le hincharon los testículos, y se puso a gritar a las cucarachas, a llorar y a rogar que lo llevaran a su Kansa María. Lo llevaron y allí lo dejaron, y sólo se quedó una mujer cucaracha. Él fue hundiéndose y se murió. Cuando llegó la noche aparecieron animales de toda clase, perros, gatos, tigres y leones, y todos peleaban y lamían la sangre. La cucaracha, cuando la sangre iba llenando la Kansa María, se subió al último estrado con siete chipi-chipi, y cada vez que los animales olían algo arriba dejaba caer uno. Echó el último cuando ya aclaraba. Al amanecer bajó y miró que en el suelo no había una gota de sangre: todo era polvo y rastros de animales.

Así terminó Seiskwisbuche.`,
    historia: `Es el séptimo relato de «Mitología kágaba», narrado por Seye Ababi Makó, de veinticinco años, cabo del mama Ignacio Abiguí de Tucurinca, y recogido por Milcíades Chaves Ch. en noviembre de 1946 en el grupo de San Andrés. Se publicó en 1947 en el Boletín de Arqueología, volumen II, números 5 y 6, encabezado «Informador: Seye Ababi Makó». Es el más largo de los veintidós y el único que sigue a un solo personaje desde su crimen hasta el amanecer siguiente a su muerte.

El título de esta página escribía «Yanguaki», y el corpus no usa esa forma. Chaves titula el relato «SEISKWISBUCHE Y YANGAUKI» y escribe Yangauki las seis veces que el nombre aparece en el artículo; el slug de la dirección ya lo traía bien. La única vez que se lee «Yanguaki» es en la reimpresión de 1993, en la primera línea del relato. De modo que la grafía correcta es la que el sitio tenía en la dirección y no la que tenía en el encabezado.

Del aparato que Chaves pone al pie salen tres datos que la narración no dice con todas sus letras: que Nunula es «cuñado de Seiskwisbuche», que la mujer corpulenta fue «creada por Nunula para dar muerte a Seiskwisbuche», y que las cucarachas son sus mujeres. Ese mismo aparato lo llama «malo, parricida e incestuoso». En el índice general del artículo, además, Chaves atribuye a un cuarto personaje, Núnkasa, hermano mayor de Nuánashe y Kashindukue, el haber hecho «una trampa para dar muerte a Seiskusbuche»; esa trampa no está en la narración de este relato.

El nombre del protagonista se escribe de dos maneras dentro del mismo artículo: Seiskwisbuche diecinueve veces en el relato, y Seiskuisbuche o Seiswuisbuche en los índices. Lo mismo ocurre con el cuñado, Nunula en el relato y Nulula en el índice. Y lo mismo con la casa, que en tres momentos del mismo texto se llama Casa María, Kansa María y Casa Ceremonial. Chaves explica esa casa por sí mismo en el cuerpo del trabajo: «la Casa Ceremonial que ellos designan Kansa María o Iglesia del Mama es el centro de gravedad de toda la comunidad». Reichel-Dolmatoff daría en 1950 el origen del nombre: los Kógi comparan a veces a la Madre Universal con la Virgen María «y llaman por esta razón a la casa ceremonial "cansamaría", es decir "casa de María"». No es una sustancia ni un principio femenino: es el edificio donde este personaje se encierra siete años y donde termina muriendo.`,
    versiones: `El relato tiene una costura visible y conviene dejarla a la vista. Su primera línea dice que «Yangauki lo inventaron los padres para matar a Seiskwisbuche», y el índice de personajes repite que «Yangauki = da muerte a Seiskwisbuche». Pero en la narración quien fabrica a la mujer múltiple es Nunula, el cuñado explotado —«Nunula inventó siete mujeres en una sola»—, y Yangauki no se vuelve a nombrar en ninguna línea. Y Seiskwisbuche no cae en ninguna trampa: la mujer se deshace ante sus ojos, él se cae al apoyarse en un bastón, se le hinchan los testículos, pide que lo carguen, y muere solo en su casa ceremonial mientras los animales lamen la sangre. El que arma una trampa, según el índice general del propio Chaves, es Núnkasa, y eso ocurre en otro relato.

Fabio Gómez Cardona, que en 2020 analizó la versión de este mismo mito recogida por Reichel-Dolmatoff en el tomo II de Los Kogi, encuentra allí las piezas repartidas de otro modo y con otros nombres. El cuñado no se llama Nunula sino Nurlita, y no es invitado a casarse con la hermana: es Seiskwisbuche quien «casa a su hermana con Nurlita» y luego lo obliga a trabajar y a convivir con su grupo más allá de lo acostumbrado. El padre asesinado tiene nombre, Kuncha-Vitaueya, y fue acusado de comer mucho. Y la mujer múltiple es la que en Chaves se llama Yangauki: Nurlita «consigue siete mujeres y conforma una sola mujer de siete vulvas y la envía donde Sekuisbuchi para que esta mujer lo mate», y esa mujer se llama Jangauli. Gómez Cardona advierte además que Reichel-Dolmatoff trae dos versiones del mito, que coinciden en lo que narran y difieren en la precisión con que nombran a quienes actúan.

Las dos lecturas se dejan juntas, con su atribución, y no se elige entre ellas. La de Chaves reparte el nombre en dos figuras: una invención de los padres que sólo existe en el título, y una invención del cuñado que es la que actúa. La del tomo II las junta en una sola, porque la mujer de siete vulvas es Jangauli y el cuñado es quien la manda. También difiere el desenlace tal como cada fuente lo cuenta: en Chaves, Seiskwisbuche muere de un desamparo que se le viene encima sin que nadie lo toque; el analista del tomo II habla, en cambio, de una trampa en la que cae.

El nombre tiene además un eco en el tomo I de 1950: entre los antepasados de los Kurcha figura Kuncha-vitauéya, y una tal Jangáuli aparece casada con el Padre del Zorro, con remisión a Hába Shangaulyé, «Madre del Zorro e hija de Kuncha-vitauéya».`,
    similitudes: `Chaves había publicado un año antes, entre los guajiros, un relato titulado «El incesto» que resuelve lo mismo por la vía de la piedra. Dos hermanos, hombre y mujer, y ella sale del encierro embarazada del hermano; se arroja al mar, y Mareiwa le dice que se volverá piedra, «has cometido una mala acción y ahora el mundo seguirá tu ejemplo». En el segundo tramo, una muchacha a quien embarazó su padre se ahorca de vergüenza y queda convertida en el cerro Katetamana, que quiere decir mujer colgada. Coinciden la transgresión y la piedra —a Seiskwisbuche se le vuelven piedra los vestidos justo antes de que el cuerpo deje de responderle—, pero el sentido se invierte: allí la piedra es el castigo y funda una costumbre que sigue ocurriendo, y aquí es apenas la señal de que ya no podrá brincar como hombre, y lo que queda al final no es un cerro con nombre sino polvo y huellas de animales.

Entre los chimila, en la colección que Reichel-Dolmatoff publicó en 1945, «La mala mujer» cuenta el abuso doméstico desde el otro lado. Una mujer obliga a su marido viejo y enfermo a irse a la roza; él se sienta bajo un árbol y se muere. Los hijos lo encuentran después pintado de achiote, con hilos en los tobillos y corona de plumas amarillas y rojas, camino de una fiesta, y él les entrega su macana con el encargo de darle dos golpes en la cabeza a la madre. Cumplen, y el relato cierra: «Era una mala mujer.» La semejanza está en que un pariente tratado como fuerza de trabajo termina causando la muerte de quien lo explotaba. La diferencia está en el procedimiento y en el tiempo: en el llano la sentencia la dicta el muerto y se ejecuta en una línea, mientras que en la Sierra el explotado sobrevive, finge su propia sangre, deja pasar siete años y necesita una mujer entera para cobrarla.`,
    leccion:
      "Quien hace sirviente a un pariente prepara sin saberlo la mano que habrá de perderlo.",
    sceneHorizontal:
      "Nunula huye por un río de montaña dejando una señal en una piedra mientras Yanguaki prepara siete siluetas planas para la trampa",
    sceneVertical:
      "Yanguaki reúne siete formas en una sola figura frente a Seiskwisbuche, con Nunula ya a salvo en la distancia",
    researchNotes:
      "GRAFÍA: título visible Yanguaki; slug histórico se conserva. ESTRUCTURA: Nunula mantiene su agencia y no se erotiza el engaño.",
  }),
  myth({
    slug: "el-sol-mama",
    sourceKeys: [
      "chaves1947",
      "reichel1950",
      "preuss1993",
      "reichel1987",
      "pes2017",
      {
        key: "cardonajaguar2020",
        summary:
          "Es el análisis más detallado disponible del mito del origen del Sol. Da la carencia inicial con las palabras de la fuente —'antes no había sol, sólo los palos podridos alumbraban en el monte'—, que es el equivalente de la luz de cocuyo de la ficha; nombra al Sol Mulkuéxe o Búnkua-sé (raíz mu femenina + se masculina) y a la Luna Namshaya; explica que las constelaciones que el Sol recorre en su ruta anual son concebidas como sus 'esposas' y que eclipses, fases lunares y lluvias se explican como lucha del Sol y la Luna contra esposas celosas. Precisa también que una esposa, el sapo Selda-Bauku, es castigada por 'comer mucho', fórmula que en el código kogui significa adulterio.",
        limitation:
          "Trabaja la versión de Reichel-Dolmatoff, no la de Preuss: no aparecen Kakaraviku ni Sekukue ni el episodio de la ceniza arrojada a la Luna, y el protagonista solar se llama Mulkuéxe, no 'Sol-Mama'. Es crítica literaria, con categorías analíticas del autor superpuestas al relato.",
      },
      "reichelDolmatoffAnalisis1987",
      {
        key: "mellconcepcion2013",
        summary:
          "Transcribe el arranque cosmogónico del que depende la ficha —'Primero estaba el mar. Todo estaba obscuro. No había sol ni luna, ni gente'— y sigue la formación de los nueve mundos hasta el octavo, donde nacen los 36 Padres y Dueños del Mundo. Sitúa así el nacimiento del Sol dentro de una secuencia de mundos y no como un episodio suelto, y desarrolla el fuego (terrestre, vegetal) como principio femenino previo a la luz solar, que es el contraste que la ficha necesita para no confundir el Sol con Gotzé.",
        limitation:
          "Ensayo de concurso, no arbitrado. No llega al episodio de la elevación del Sol y la Luna ni a la ceniza: se detiene en la cosmogonía previa. Interpreta con categorías filosóficas occidentales que no están en el relato.",
      },
      {
        key: "wittestructure2020",
        summary:
          "Explica por qué la ficha puede llamar Mama al Sol sin forzar la fuente: los mamas son el sol y trabajan de día, complementados por sus esposas las sajas, que son la luna y tienen poderes nocturnos. Describe además el nujué recreando los nueve niveles cósmicos y dividido en mitades y cuadrantes, que es el marco ritual en el que la ficha sitúa las ofrendas asociadas a la yuca sin reconstruir la ceremonia.",
        limitation:
          "Es material etnográfico reciente y escrito en clave de defensa del pensamiento kogui; no cita ningún relato con nombres propios ni menciona a Kakaraviku, Sekukue ni la ceniza. No distingue siempre lo observado de lo que los mamas enuncian como doctrina.",
      },
      {
        key: "zapataMujicaMascaras2025",
        summary:
          "Aporta el dato que ata el mito solar a una práctica verificable: los centros sagrados que controlan los mamas (nuhu/nujuai) funcionan como observatorios solares y regulan los ciclos agrícolas y la redistribución de la producción. Es el sustento para decir, como hace la ficha, que el Sol 'no es sólo un disco lejano' sino que participa de un orden ritual, sin tener que inventar templos de oro.",
        limitation:
          "No trata el mito del origen del Sol ni ningún relato: su objeto son las máscaras y la danza Tani-Cansamaría. El archivo base es misionero (1973-1981) y las inferencias astronómicas se apoyan en Reichel-Dolmatoff, no en medición propia.",
      },
      {
        key: "reichelDolmatoffTemplos1975",
        summary:
          "Es el estudio fundacional sobre la astronomía del espacio sagrado kogui y la referencia a la que remiten todos los trabajos posteriores sobre el Sol y el templo (Reichel-Dolmatoff se cita a sí mismo en 1987 para el término nuhué, 'casa-mundo'). Es la fuente obligada para el vínculo entre el astro y la casa ceremonial que la ficha menciona.",
        limitation:
          "No pude leer el texto completo: la ficha editorial y el registro bibliográfico se abren, pero el PDF no llegó a cargar en ninguno de los dos intentos (la descarga devolvió la página HTML del visor, no el archivo). Todo lo que afirmo arriba procede de la ficha del artículo y de las citas que Reichel-Dolmatoff hace de él en su texto de 1987; el contenido interno no está verificado.",
      },
    ],
    title: "El Sol — Mama",
    summary:
      "Después de una luz insuficiente, un hombre y una mujer son elevados como Sol y Luna, y una nube de ceniza disminuye el brillo lunar.",
    tags: ["Sol", "Luna", "Kakaraviku", "ofrendas"],
    mito: `Cuando el sol no nacía, todo era oscuro. El sol nació con Kakaraviku, Sekukue, Seyunkue, Seraira, Sintana y Kimaku. Había madre de sol y había madre de luna. El sol era un hombre y la luna una mujer. El sol tenía otra mujer, pero también vivía con la Luna.

Para que hubiera sol, la Madre comenzó a inventarlo. Primero hizo un animalito como un cocuyo, Kándutu. El animalito existió, pero no alumbraba bien y seguía de noche. Entonces inventó el sol.

El sol era como un hombrecito feo, mal hecho. Le preguntaron: ¿tú quieres ser como padre del mundo? Y él dijo que sí. Entonces lo vistieron de puro oro: vestido de oro, mochila de oro, gorro de oro, todo de oro. Karaviku y Sekukue lo soplaron y lo levantaron al cielo, y cuando se levantó se acabó la noche.

El sol tenía una mujer fea. Le preguntaron si quería ser madre del mundo, y ella dijo que sí. Entonces la vistieron de oro y la levantaron, y se fue tras el sol porque Kakariviku la sopló. Iba a alcanzar a su marido.

La otra mujer del sol, cuando la vio irse detrás de él, corrió para alcanzarla, pero ya iba muy lejos. Entonces cogió un puñado de ceniza y se lo tiró. Así la ensombreció, y por eso la luna no alumbra tanto como el sol. Si no le hubiera tirado ceniza, alumbraría como él.

El sol tiene su madre, y hay que darle comida. El sol come espíritu de plátano, espíritu de malanga y de ñame, y todo se le da en espíritu de piedra: por eso se reúnen las piedras en un montón, se les pone el espíritu y ya son alimento, y se entrega allá donde está la Magri. Lo que más le gusta al sol es bollo de yuca y almidón de yuca. Arriba, en la Casa Ceremonial, hay una piedra que es para pagar, para dar de comer al sol. Se le da de comer en calavera de sol y en calavera de tigre, y es el espíritu el que le da de comer.`,
    historia: `Lo narró Seye Ababi Makó y es el noveno de los veintidós relatos de «Mitología kágaba», de Milcíades Chaves Ch., recogido en noviembre de 1946 en el grupo de San Andrés y publicado en 1947 en el Boletín de Arqueología, volumen II, números 5 y 6. Va encabezado «Informador: Seye Ababi Makó», y el título que Chaves le pone lleva un signo igual: «EL SOL = Mama». No es una ocurrencia del compilador. En el mismo trabajo había escrito que «la palabra mama tiene su traducción en castellano –Sol–» y que el Mama es quien reúne el poder religioso y el civil al frente de cada poblado, de los que enumera una larga lista: Tucurinca, San Miguel, Makutama, Takina, Chendukue, Taminaka, Palomino y otros. El título de esta página viene de ahí: no es un apodo poético del astro, sino la palabra con la que el corpus nombra a la vez al sol y al sacerdote.

Reichel-Dolmatoff confirma el uso en el tomo I de Los Kogi, publicado en 1950 y que ninguna ficha de este sitio citaba: «Al referirse al sol se usa la palabra máma como título honorífico», y la mujer de un máma se designa saxa, palabra que significa abuela y que es también el título de la luna, la mujer del sol. Ese mismo volumen, en cambio, no contiene ninguno de los nombres de este relato —Kakaraviku, Sekukue, Kándutu, Seyunkue—, lo que confirma por la vía de las grafías que lo que aquí se publica viene de Chaves y no de él.

Lo que la fuente no da conviene decirlo, porque las expansiones anteriores lo llenaron: no explica por qué el sol era feo y mal hecho antes de ser vestido, no nombra a la otra mujer, no dice dónde estaban los que soplaron ni desde qué altura, y no describe pirámide, templo ni ceremonia alguna de coronación. Chaves declara además que trabajó por interrogatorio en castellano y que los conceptos vertidos a esa lengua pueden haber quedado deformados, de manera que palabras como «espíritu» y «pagar», que sostienen todo el último tramo, son las que encontró la traducción y no necesariamente las del idioma kogui.

Sobre ese último tramo, el de las ofrendas, corresponde decir en qué condición se publica. El Plan Especial de Salvaguardia firmado por los cuatro pueblos de la Sierra sostiene que el carácter del uso y manejo de su conocimiento «no concibe la necesidad de su divulgación externa», y que su salvaguardia «tiene que ser completa, no puede ser parcial». Este sitio no recoge nada de primera mano: reproduce lo que un etnólogo transcribió en 1946 y publicó al año siguiente un instituto del Estado.`,
    versiones: `Chaves imprime dos textos bajo el mismo número y no dicen lo mismo. La narración de Seye Ababi Makó dice que «Karaviku y Sekukue lo soplaron y lo levantaron al cielo». La «Síntesis de la leyenda» que Chaves escribe al pie dice que «un día Kakaraviku y Kimaku lo convirtieron en el Sol resplandeciente». Donde el narrador pone a Sekukue, el resumen del etnólogo pone a Kimaku. Y el nombre del soplador aparece escrito de tres maneras en esa única página —Kakaraviku, Karaviku, Kakariviku—, y en otros relatos del mismo artículo como Kakarabiku y Sealaviku.

El tomo I de Los Kogi trae una versión del mismo suceso que no coincide en casi nada salvo en la ceniza. Allí el sol es un hijo de la Madre y, como todo hombre, está casado, y se le atribuye una cadena de matrimonios sucesivos: primero cohabitó con Seldabáuiku, que desde entonces lo persigue; después se casó con el Sapo, y cuando ésta lo engañó con otros hombres se casó con la Culebra; como tampoco le sirvió, se casó por fin con la Luna. Es entonces cuando Seldabáuiku se enfurece y le bota ceniza a la cara de la Luna. Después el sol se casa con otras mujeres —el Jaguar Azul, el Jaguar Grande, el Cangrejo, el Alacrán—, y las estrellas son sus mujeres o sus hijos, que regresan a casa por la Vía Láctea. No hay allí cocuyo, ni oro, ni pregunta de aceptación, ni sopladores: hay una rival con nombre propio, una lista de esposas animales y la misma ceniza. Las dos versiones se dejan una al lado de la otra, con su atribución, sin elegir entre ellas; el relato de esta página es el de Chaves, porque es el que trae las grafías del corpus.

Hay además una diferencia de efecto que conviene no borrar. En Chaves la ceniza explica la intensidad: la luna «no alumbra tanto como el sol», y si no se la hubieran tirado alumbraría como él. En el tomo I la ceniza va a la cara, y lo que queda explicado es la mancha. Son dos explicaciones distintas del mismo gesto.

La reimpresión de 1993 compilada por Eugenia Villa Posse conserva el relato y a su relator, pero altera el título en el índice, donde aparece como «El sol Mana», y cambia el orden de la serie: pone «El Sol – Mama» antes de «Namaku», al revés de como Chaves los numeró.`,
    similitudes: `A pocos días de camino de la Sierra Nevada, el mismo esquema se reparte al revés. En «Sol y Luna», que Reichel-Dolmatoff recogió entre los chimila y publicó en 1945, el Sol es mujer y la Luna es su hermano mayor, mucho más viejo que ella; hubo dos soles antes que ya no sirvieron cuando envejecieron y se murieron cuando se acabó su familia, de modo que el que alumbra ahora es el tercero. El relato cierra explicando que «de noche el Sol duerme porque es mujer», y que a veces está enferma y no quiere salir, y entonces los indios tienen mucho miedo. No hay allí esposa rival, ni ceniza, ni oro: hay un parentesco de hermanos y una sucesión de soles gastados.

La mancha de la luna, que en la Sierra queda del lado de la ceniza, se explica entre los katíos por un golpe. En las notas que Rochereau y Rivet publicaron en 1929, un muchacho que busca al culpable de la muerte de su madre acaba trepando por un sauce que crece a su voz —uari, uari, crece, crece— hasta la cara de la luna, que es una hermosa mujer, y le da una bofetada: ésa es la mancha que se le observa. Coinciden el punto del cuerpo, la cara, y el resultado visible; se separan el móvil y el agente, porque allí golpea un hijo que venga a su madre y aquí arroja ceniza una esposa que ve partir a la otra.

Las tres explicaciones sirven para lo mismo y no pueden reducirse a una: en la Sierra el astro nocturno pierde brillo por celos, entre los chimila cambia de sexo y se cansa, y entre los katíos recibe una bofetada por una averiguación equivocada.`,
    leccion:
      "La luz que alumbra el día se pagó con el brillo que perdió la noche.",
    sceneHorizontal:
      "Kakaraviku eleva con su soplo a un Sol masculino y una Luna femenina sobre la Sierra, mientras una nube de ceniza toca el disco lunar",
    sceneVertical:
      "la pequeña luz de un cocuyo queda abajo y los dos grandes astros dorados ocupan el cielo sobre una casa ceremonial sobria",
    researchNotes:
      "CORRECCIÓN: no se inventan templos, pirámides ni romance. RITUAL: la ofrenda se menciona sin reconstruir objetos o gestos desconocidos.",
  }),
  myth({
    slug: "namaku",
    relatoCorto:
      "El texto de Benito Sontinkama tiene ciento veinte palabras en el original y consta de tres afirmaciones sin escena: quién es Námaku, qué es su padre, y qué le pasa al Mama de San Miguel si come en San Andrés. No hay más narración que ésa. Alargarlo exigiría traer el relato del tomo II, que cuenta otra historia con otros padres, o inflar con atributos de jaguar que la fuente no menciona.",
    sourceKeys: [
      "chaves1947",
      "reichel1950",
      "preuss1993",
      "reichel1987",
      "pes2017",
      {
        key: "cardonajaguar2020",
        summary:
          "Es un capítulo entero dedicado a Námaku, dividido en diecisiete secuencias, y trae una versión que no coincide con la de la ficha: allí Námaku no es hijo de Magri sino hijo adulterino de Nabia y de Noána-sé, el mama de la Gente del Tigre; Ambuámbu, el marido engañado, es su padre de crianza. Explica la etimología —nab/nam, jaguar, más makú, jefe—, el ayuno de nueve días exigido a quienes visitan a la Gente de Kashindúkua, la escena en que Námaku pide comida y Ambuámbu convierte dos piedras en armadillos, y el final: huye, y al volver encuentra a sus padres convertidos en columnas de piedra. Registra además la fórmula narrativa que une a Kashindúkua, Noána-sé y Námaku, que 'viven aún en la cueva, en el páramo'.",
        limitation:
          "Es la versión de Reichel-Dolmatoff, no la de Preuss que sigue la ficha: no aparecen Magri, San Miguel ni San Andrés, y la genealogía es otra. Hay que presentarla como variante y no como corrección. Es crítica literaria con aparato greimasiano; las secuencias y oposiciones son del autor.",
      },
      "rangelResena1990",
      "lLinajes1995",
    ],
    title: "Namaku y el hombre jaguar",
    summary:
      "Namaku, hijo de Magri, vive entre prescripciones, parentescos y el riesgo de transformarse en jaguar cuando rompe su disciplina.",
    tags: ["Namaku", "jaguar", "Magri", "prescripción"],
    mito: `Námaku es hijo de la Magri, a quien también llaman Luitsama. Vive arriba, en un cerro. Siempre se encuentra mujereando: tiene como nueve mujeres, y además es muy pícaro y les quita las mujeres a los demás para vivir con ellas.

Námaku tiene su padre en la quebrada del Bollo. Ese padre es indio durante el día y tigre durante la noche, y es gente muy mala.

El Mama de San Miguel, que cura varias enfermedades, fue criado por el padrastro de Námaku. Por eso, cuando viene a curar a los enfermos y tiene que quedarse en San Andrés, no come ninguna clase de comida, porque se vuelve tigre. No come ni bebe agua: sólo come coca y embil. Tiene que ir a comer al Páramo, y allá ya no se vuelve tigre.`,
    historia: `Es el octavo relato de «Mitología kágaba» y lo narró Benito Sontinkama, hombre de treinta y ocho años, cabo del mama Julián, respetado por todas las personas del grupo de San Andrés. Chaves anota de él que sabía las narraciones de memoria pero que su traducción al castellano se le dificultaba demasiado, y la dificultad se nota: éste es el más breve de los veintidós textos y avanza por afirmaciones sueltas más que por escenas encadenadas. Lo recogió en noviembre de 1946 y lo publicó en 1947 en el Boletín de Arqueología, volumen II, números 5 y 6, encabezado «Informador: Benito Sontinkama».

Del propio aparato de Chaves salen tres precisiones que el relato no dice con todas sus letras. Námaku figura como «hijo de la Magri (Luitsama), muy enamorado y mujeriego»; la Magri es Luitsama, y esa Luitsama es, en el índice general del artículo, la primera mujer, a la que Chaves iguala con Naowa y con Wastora y da por casada con Seraira; y el Mama de San Miguel queda identificado como «médico de varias enfermedades». Es decir que, en la lectura del propio Chaves, Námaku resulta hermano de Sintana.

El tomo I de Los Kogi, que Reichel-Dolmatoff publicó en 1950 y que ninguna ficha de este sitio citaba, dice otra cosa y aporta el dato más útil. Allí Námaku no es el personaje de un relato sino el nombre de un grupo de descendencia, y su etimología está anotada: «De nébbi-jaguar; makú-jefe, dueño». El nombre significa jefe o dueño del jaguar, de modo que la figura queda atada al tigre por la lengua y no sólo por la anécdota del padre nocturno. En el árbol genealógico de los Hukuméiji, ese mismo volumen lo sitúa como hijo de Sintána y de Hába Tungexa, junto con Kashindúkua, Dyíuamályi, Noána-sé y la hija Námukalye.

Lo que este texto no dice, y no conviene completar: no nombra al padre tigre, no explica qué es el embil, no dice quién es el padrastro ni por qué crió al Mama de San Miguel, y en ningún momento cuenta que Námaku mismo se transforme. La prescripción alimentaria del final corresponde a un personaje concreto en una tarea concreta, la de curar en San Andrés, y no es una regla dietética de aplicación general ni un consejo de salud.`,
    versiones: `El parentesco de Námaku está en disputa entre tres fuentes serias, y no hay manera honesta de elegir una.

Chaves, en 1947, lo hace hijo de la Magri o Luitsama, la primera Madre, y le da un padre sin nombre que vive en la quebrada del Bollo. Reichel-Dolmatoff, en el tomo I de 1950, lo hace hijo de Sintána y de Hába Tungexa, es decir nieto de la Madre y hermano de Kashindúkua; y ese mismo volumen deja constancia de que sus propios informadores no se ponían de acuerdo en estas listas, porque una y otra vez anota «según otro informador» o «según algunos otros informadores» antes de dar una ascendencia distinta. Fabio Gómez Cardona, que en 2020 analizó el relato de Námaku tal como aparece en el tomo II del mismo Reichel-Dolmatoff, encuentra allí una tercera filiación y bastante más grave: Námaku «es producto del adulterio de Nabia con Noána-sé y la Gente del Tigre». Nabia es la mujer de Ambuámbu, a quien Námaku cree su padre, y Noána-sé ha heredado el cargo de Mama de la gente del tigre a la muerte de Kashindúkua.

Esa tercera versión no es una variante menor del texto breve de Sontinkama, sino otra historia entera y mucho más larga: el niño oye y sabe todo desde antes de nacer, su madre le revela el origen al nacer y él lo olvida al crecer, lo descubre después, viaja al pueblo de los tigres, interrumpe el juicio contra el hombre que lo crió, golpea a su verdadero padre y le usurpa el mando, siente el llamado de la sangre, devora a la gente que lo protegía y termina buscando a sus padres ya convertidos en columnas de piedra. Allí la transformación en tigre le ocurre a Námaku mismo y sin necesidad de los objetos mágicos de sus antecesores; en el texto de Chaves el que es tigre de noche es el padre, y lo único que se cuenta de la transformación es cómo se la evita, con ayuno.

Coinciden, en cambio, en la etimología. Gómez Cardona señala que el nombre viene de la raíz nab-nam, jaguar, y de makú, jefe; Reichel-Dolmatoff había escrito lo mismo setenta años antes. Las grafías sí se separan: esta página escribe Namaku sin tilde, Chaves escribe Námaku trece veces y Namaku una sola, y la reimpresión de 1993 compilada por Eugenia Villa Posse conserva al relator pero retira los «Personajes» y la «Síntesis» con que Chaves cerraba el relato, que es donde estaba escrito que la Magri es Luitsama.`,
    similitudes: `En los mismos años, Reichel-Dolmatoff publicaba entre los chimila un relato brevísimo sobre lo mismo. En «Los brujos», de 1945, se distingue entre brujos buenos y malos: los buenos curan y llaman la lluvia, y cuando mueren se van como se va cualquiera, pero los malos «no se van cuando mueren; vuelven para hacer daño y como no se pueden volver como hombre porque uno los reconoce, se vuelven como tigre». Sigue la escena de unos hombres que encuentran de noche una gran casa redonda con un muerto enterrado dentro, y del que se atreve a dormir allí no queda nada. La diferencia con la Sierra es de tiempo y de cuerpo: allí el tigre es un muerto que regresa y a quien no hay modo de reconocer, y aquí es un vivo que alterna, indio de día y tigre de noche, a quien todo el mundo ubica en un lugar preciso, la quebrada del Bollo.

Entre los chamí, en el material que el propio Chaves publicó en 1945, «La mujer de Karagabi» reúne los dos asuntos de este relato —el adulterio y el tigre— y los resuelve al revés. Karagabi, enfermo y llagoso, manda a su mujer a la bebeta, se quita el vestido llagoso, se viste de particular, se acuesta con ella sin que lo reconozca y la araña «para dejarle señas»; cuando ella niega, él le abre la boca por mentirosa y la convierte en lechuza. Al final llama a todos los indios, y al capitán, que gritó jar, jar, jar, le dice: «Usted va a ser Imaná. Váyase para el monte», y se volvió tigre. En la Sierra el mujeriego no recibe castigo alguno dentro del relato, y ser tigre no es una sentencia sino una condición de familia; entre los chamí la infidelidad se paga con una transformación, y el tigre es el resultado de una orden.

Las tres historias tratan al tigre como una posición más que como un animal: brujo muerto, capitán degradado, padre nocturno.`,
    leccion:
      "Quien hereda la capacidad de volverse fiera hereda también el ayuno que la mantiene dormida.",
    sceneHorizontal:
      "Namaku cruza entre un cerro, San Andrés y el páramo mientras una silueta de jaguar emerge de su sombra sin violencia",
    sceneVertical:
      "Namaku mantiene coca y ambil junto a un sendero de altura, con alimentos apartados y un jaguar nocturno en la distancia",
    researchNotes:
      "CORRECCIÓN: se elimina la etiqueta animal de poder. AMBIGÜEDAD: no se inventa una genealogía para resolver pasajes fragmentarios.",
  }),
  myth({
    slug: "kasauge-el-padre-arbol",
    sourceKeys: [
      "chaves1947",
      "reichel1950",
      "pes2017",
      "decreto2018",
      "witteLiving2018",
      {
        key: "witteecologia2025",
        summary:
          "Da en castellano y en una frase la síntesis que la ficha necesita, y aporta la clave interpretativa que hoy le falta: 'había una tribu de gente abusiva (kaxksouggi) que se comía a los kogi, pero que finalmente fue acabada y convertida en árboles'. Y sigue: en la mitología kogui es común que personajes cuyas acciones son inapropiadas o destructivas muestren el camino correcto, y que gracias a otros personajes 'positivos' esos infractores se vuelvan dadores de vida, maestros o elementos clave en el funcionamiento del mundo. Eso sostiene con fuente lo que la ficha hoy solo afirma: que el cuerpo de Kasaugé no se elimina sino que se reubica. Añade que los árboles eran 'personas como nosotros' y que ahora dependemos de intercambios con ellos.",
        limitation:
          "Es una mención de dos líneas dentro de un artículo sobre ecología política y Antropoceno; no desarrolla el relato. Usa 'tribu'. No menciona a Sintana ni a Serawi en ese pasaje, ni los micos, ni España. Para la narración completa hay que ir a la tesis de 2018 del mismo autor.",
      },
      {
        key: "reichelDolmatoffTemplos1975",
        summary:
          "Aporta las dos piezas que faltan para entender por qué la casa y la vegetación no son opuestas. Primera: el fogón noroccidental del templo corresponde a Seilánkua, segundo hijo de la Madre, Dueño de la Tierra y de las Plantas, 'especialmente de los árboles de la selva', a quien incumbe todo lo referente al mundo vegetal no cultivado por el hombre; es decir, existe un padre de los árboles silvestres con asiento fijo en el templo, y el bosque que nace de Kasaugé cae bajo su dominio. Segunda: la ceiba, llamada ulúa, se personifica con el nombre del mítico Máma Zinkala y fue el primer árbol de la Creación (según otros datos, un cedro). Registra además que Sintána nació en uyi-dulúma, agua-espuma, un ambiente uterino en el fondo del mar, casa que en algunos textos se designa como templo.",
        limitation:
          "No menciona a Kasaugé ni el episodio de la primera casa inconclusa. El PDF del ICANH es un escaneo sin capa de texto y no pude leerlo ahí; verifiqué el contenido en la copia con texto extraíble del mismo artículo en Semantic Scholar (pdfs.semanticscholar.org/0682/93f396cb970445fdd68b1059044378dd06fd.pdf). Ortografía y categorías de 1975; el autor escribe 'Seilánkua' y 'Seizánkua' de forma alterna.",
      },
      {
        key: "vargasBajo2025",
        summary:
          "Ofrece la categoría que evita repetir la oposición colonial 'salvaje vencido por la cultura' que la ficha denuncia pero no reemplaza. El artículo organiza el pensamiento chibcha en torno a procesos de humanización y deshumanización que los humanos protagonizan para volver el mundo habitable: los seres que devoran gente no son 'primitivos', son gente que perdió su humanidad definitoria, y acabarlos es parte del trabajo de hacer la tierra habitable. Aporta además la distinción entre un régimen temporal de humanidad-semilla (circular) y otro de humanidad-árbol (lineal), que da un marco propiamente chibcha para pensar por qué el cuerpo del devorador se vuelve precisamente árbol.",
        limitation:
          "No menciona a Kasaugé ni a los kogui en ese punto; el material de primera mano del autor es ette. La conexión entre la 'humanidad-árbol' y la transformación de Kasaugé es una lectura mía, no una afirmación del artículo. Es etnología comparada de amplio alcance, útil como marco y no como fuente del relato.",
      },
      {
        key: "wittestructure2020",
        summary:
          "Explica por qué un ser que se comía a la gente termina convertido en el material con el que se vive. El artículo muestra que entre los kogi la reciprocidad es un asunto de alimento: todo el sistema es una red de nutrición mutua entre seres, sitios y elementos, mediada por pagamentos. Que el cuerpo de Kasaugé pase a ser árboles, palmas y bejucos —material de techos, casas y fuego— lo inscribe en esa red en vez de sacarlo del mundo. El artículo documenta también que los kogi pagan por los árboles y por los alimentos, y que el mama convierte descargas personales en pagamentos a los Padres y Madres espirituales del Agua y los Alimentos.",
        limitation:
          "No menciona a Kasaugé ni ningún episodio mítico de transformación corporal; el vínculo lo hago yo. Es etnografía de pagamentos y confesiones. El eje comparativo es andino y parte del material sobre confesión es i'kʉ (arhuaco), no kogui.",
      },
    ],
    title: "Kasaugé, el padre árbol",
    summary:
      "Tras la derrota de Kasaugé, su cuerpo y su fuerza se distribuyen en árboles, palmas, bejucos y monos del bosque.",
    tags: ["Kasaugé", "árboles", "transformación", "bosque"],
    mito: `Kasaugue existió después de Sintana, mucho antes que los indios. Era un hombre con mucha barba y mucho pelo, y era muy malo: se comía a los indígenas. Tenía guardado para sí el principio de la vegetación y no quería darlo, y por eso el mundo estaba árido y no había con qué techar. Para hacer la primera casa lo necesitaban a él.

Entonces los padres Sintana y Serawi lucharon contra él y comenzaron a pelear contra Kasaugue. Los dos le ganaron. Le cogieron el espíritu y lo regaron por todo el mundo, y en todas partes nacieron árboles: las canillas, los brazos y las costillas fueron árboles diferentes; los cabellos se volvieron palmas de toda clase, palma que sirve para empajar; y las barbas se convirtieron en bejuco de toda clase. Si Kasaugue no hubiera existido, la tierra fuera limpia.

Después de esto, Sintana y Serawi cogieron nuevamente el espíritu de Kasaugue y lo volvieron gente. Gente de Kasaugue son los capuchinos. Como era malo le dijeron Sintana y Serawi: usted no debe estar entre indígenas, usted va a vivir en otro país, en otra tierra. Era muy malo y lo mandaron para España.

Por eso los capuchinos quieren matar a los mamas, ahora mismo, siempre los matan. Ahora mismo son así. Eran gente de palo.

Después de Kasaugue vino el padre del bastimento, que era una mujer y tenía muchas hijas: la yuca era su hija, el plátano era su hija, la malanga era su hija, y el único hombre era el maíz. Entonces vinieron Ñiwiwe y Dugunawi, que eran hombres y comenzaron a sembrar: Dugunawi limpiaba, desmontaba y socalaba, y Ñiwiwe sembraba. Ellos fueron los padres del cultivo, los padres de los indígenas. Todo esto sucedió mucho después de que existiera Kasaugue.

Kasaugue no quedó terminado. Cuando se acabe el sol, los que fueron gente de día y fiera de noche se volverán fieras otra vez; vendrán Kashindukwe, vendrá Nuánashe y también vendrá Kasaugue, para acabar con todo. Y nuevamente el mundo quedará limpio: no habrá árboles y no habrá cerros, y el mar llenará todo y solamente habrá agua.`,
    historia: `Lo contó Seye Ababi Makó, de veinticinco años, cabo del mama Ignacio Abiguí de Tucurinca, en el alto río Sevilla, a quien el mismo trabajo identifica en el pie de la lámina XI como Miguel Antonio Niño. Lo contó en castellano, en San Andrés, sobre la vertiente occidental de la Sierra Nevada, en noviembre de 1946, y lo anotó Milcíades Chaves Ch., que lo publicó al año siguiente en «Mitología kágaba», Boletín de Arqueología, volumen II, números 5 y 6, hoy en el catálogo abierto del ICANH. En el impreso es el mito número 10 y el título completo es «KASAUGUE = El Padre del Arbol». La grafía del original es Kasaugue, con u.

Hay aquí un punto que el corpus publicado venía leyendo al revés. El texto dice «gente de Kasaugue son los capuchinos» y remata «por eso los capuchinos quieren matar a los Mamas, ahora mismo, siempre los matan». No se trata de monos capuchinos: son los misioneros capuchinos, y la lista de personajes del propio Chaves lo confirma al anotar «Capuchinos = Son gente que se identifica con Kasaugue». Es decir, el cierre del relato no es un dato zoológico sino una acusación contemporánea, dicha en 1946 en presente, contra la misión. Convertirla en monos borra exactamente lo que el narrador estaba diciendo.

La antología de Eugenia Villa Posse de 1993, que es el PDF que esta página citaba creyendo que era el tomo II de Reichel-Dolmatoff, reimprime el relato palabra por palabra y conserva el crédito bajo el rótulo «Relator».

El tomo I de Reichel-Dolmatoff no contiene este episodio y ni siquiera el nombre: buscado en el texto completo, Kasaugé no aparece ninguna vez. Lo que sí aporta el mismo autor, en Templos kogi (Revista Colombiana de Antropología 19, 1975), es que el fogón noroccidental del templo corresponde a Seilánkua, segundo hijo de la Madre, Dueño de la Tierra y de las Plantas, «especialmente de los árboles de la selva», a quien incumbe el mundo vegetal no cultivado; y que la ceiba se personifica con el nombre de un mama mítico y fue el primer árbol de la Creación. Existe, pues, un padre de los árboles silvestres con asiento fijo en el templo, bajo cuyo dominio cae el bosque que aquí nace de un cuerpo.

Y hay un hallazgo reciente que cambia la lectura: el nombre está vivo. Falk Xué Parra Witte, en su tesis doctoral de la Universidad de Cambridge, Living the Law of Origin (2018), basada en unos veintidós meses de campo en 2012 y 2013, dedica la sección 5.4 a «Kaxsouggi: Kogi relations to trees», y su glosario define Kaxsouggi como un árbol sagrado especial y, a la vez, «la gente que engañó y se comió a los kogi». Los árboles así llamados marcan sitios sagrados, son pocos, se consideran todavía «personas», están rodeados de piedras haxsʉnkalda y está absolutamente prohibido cortarlos. En su artículo en castellano La ecología kogi en el devenir del mundo (2025), el mismo autor resume: «había una tribu de gente abusiva (kaxksouggi) que se comía a los kogi, pero que finalmente fue acabada y convertida en árboles», y añade que en esta mitología es común que los infractores terminen volviéndose dadores de vida o piezas clave del funcionamiento del mundo.

Lo que ninguna fuente da: consentimiento. Chaves no consigna permiso y llama «interrogatorios» a sus sesiones; el Plan Especial de Salvaguardia firmado por los cuatro pueblos declara que el uso y manejo de su conocimiento «no concibe la necesidad de su divulgación externa» y que su salvaguardia no puede ser parcial.`,
    versiones: `La versión de 1946 y la que se narra hoy no son la misma, y no deben fundirse.

En el dictado de San Andrés, Kasaugue es uno solo: un hombre peludo y barbudo que retiene el principio vegetativo, al que Sintana y Serawi vencen, reparten y luego devuelven a la vida para desterrarlo a España, dejando a los capuchinos como su descendencia.

En la versión que el Mama Shibulata narró en campo a Parra Witte, con Alejo como intérprete, los Kaxsouggi son un pueblo, no un individuo: nacieron de Kaldakshé y Kaldāwiā, Padre y Madre de los Árboles, en un lugar llamado Tashízhua, eran indígenas como los kogi y vivían en sociedades aparte, y eran autorizados, sabios y poderosos, pero no usaban esas facultades para el bien. Su método de engaño es preciso y no tiene equivalente en 1946: interceptaban a los hombres kogi que subían a las ezwamas a confesarse, les ofrecían descargar allí mismo sus pensamientos, y mientras el otro se inclinaba le «abrían» la cabeza por el punto donde el cuerpo se amarra como una mochila, le sacaban el contenido y lo convertían en cultivos —plátano, yuca, papa—, dejando la piel vacía para vestirse con ella y suplantarlo en su propio pueblo. Y hay una causa que el texto de 1946 no da: el Mama Shibulata explica que lo hacían en represalia porque los humanos venían rechazando a los árboles cuando se los ofrecían a las ezwamas, llamándolos innecesarios, peludos y feos.

La derrota también ocurre de otro modo. Aquí basta una pelea de dos padres contra uno. Allí Sintana hace viajes de siete días entre las ezwamas de Seizhua y Sʉxdzibake, se confiesa arriba y recibe protección espiritual para no ser convertido en comida, mata siete cabos en cada viaje, vence al Comisario Kaxsouggi en una pelea de palabras y le hace lo mismo que ellos hacían, y finalmente los va disminuyendo quitándoles sus objetos sewá hasta que se convierten en árboles y en madera, «como son ahora». De ahí, explica, viene que hoy los humanos puedan cortar árboles, y los mamas de Tungeka insisten en que debe hacerse con medida, pidiendo permiso y pagando a los padres de los árboles.

El cierre es el que la versión antigua no tiene y el que más pesa: el Mama Shibulata advierte que los humanos están repitiendo ahora la conducta de los Kaxsouggi, talando en cantidad y sin respeto, y los mamas Manuel y Luntana añaden que si se sigue así, un día los árboles volverán a ser personas y devolverán todo el daño.

Ni los capuchinos ni España ni Serawi aparecen en la versión contemporánea, y el hombre peludo y barbudo tampoco: allí lo peludo y lo feo es el reproche que los humanos hacían a los árboles. Son dos relatos del mismo nombre, separados por setenta años, y se presentan como tales.`,
    similitudes: `Entre los ufaina del río Caquetá, el «Origen del mundo según los Ufaina», recogido por Martín von Hildebrand y publicado en la Revista Colombiana de Antropología, volumen XVIII, en 1975, empieza igual de cerca del suelo: los primeros vivían bajo un gran palo bombona y no sabían hacer casa; hicieron un ranchito y fueron donde el abuelo, que era dueño de las hojas, y él les dijo que eso no era maloca sino ranchito para dormir, que no duraba nada, y les dio hoja de milpesos y los llevó a hacer el rancho; por eso hay varios tipos de rancho. El arranque es el mismo problema —la primera casa no se puede terminar sin obtener de alguien el material vegetal— y la diferencia lo dice todo: allí el dueño de las hojas enseña y entrega, y el relato no necesita una pelea; aquí el dueño del principio vegetativo lo retiene, devora gente y hay que repartirlo por el mundo para que existan la palma de empajar y el bejuco.

El segundo paralelo lo propone el propio Parra Witte al comentar las fases de la humanidad kogui: el relato maya del Popol Vuh, donde los creadores pasan por tres intentos de formar una humanidad, haciéndola de barro, de madera y finalmente de maíz. En los dos casos madera y humanidad se intercambian. Pero el sentido va en direcciones opuestas: entre los mayas los hombres de madera son un ensayo fallido que hay que destruir, mientras aquí el pueblo abusivo convertido en árboles no es un desecho sino la materia con la que después se techa, se cocina y se vive, y por eso se le sigue pidiendo permiso.`,
    leccion:
      "Lo que devoraba puede terminar sosteniendo el techo bajo el que se duerme.",
    sceneHorizontal:
      "Sintana y Serawi levantan la primera casa mientras la silueta de Kasaugé se transforma en árboles, palmas y bejucos del bosque",
    sceneVertical:
      "un gran tronco se abre en hojas, lianas y monos capuchinos, sin cadáver ni violencia gráfica",
    researchNotes:
      "CONTEXTO: la mención de España se atribuye y no se vuelve aventura. INTERPRETACIÓN: se evita la oposición colonial entre salvaje y civilizado.",
  }),
  myth({
    slug: "kashindukwe",
    sourceKeys: [
      "chaves1947",
      "reichel1950",
      "reichel1987",
      "pes2017",
      "decreto2018",
      {
        key: "cardonajaguar2020",
        summary:
          "Capítulo 3 dedica un apartado entero (pp. 76-88) a Kashindúkua y segmenta el relato en secuencias narrativas. Corrige y precisa lo que la ficha deja vago: la bola de piedra azul tiene nombre kogui, nébbis-kuái, y se glosa como 'testículo de tigre/jaguar'; no actúa sola sino junto con una máscara de tigre, y ambas se las entregó la Madre con la advertencia expresa de no dañar a nadie. Kashindúkua era hijo de la Madre y hermano de Noána-sé, Búnkua-sé y Ambú-ámbu, y fue enviado a la tierra como mama y médico con la misión de devorar las enfermedades (cucarrones grandes y negros que extraía del cuerpo del enfermo). El abuso del poder consiste en dejar de distinguir entre enfermedad y mujer. Vivía al oeste de la Sierra, sobre la Quebrada Bollo, debajo del Cerro Mico, y su gente se llamaba Kogi y era Gente del Tigre. Al morir ocurre un desdoblamiento: el espíritu jaguar sobrevive oculto en las grutas de la montaña 'aguardando el momento del fin del mundo'.",
        limitation:
          "Es análisis literario-semiótico (esquemas actanciales, estructura profunda) sobre versiones ya publicadas por Reichel-Dolmatoff y Preuss, no trabajo de campo propio: no aporta narradores nuevos ni verificación con comunidades actuales. Usa 'tigre' y 'tribu' en el registro de las fuentes que cita. No trata a Kasaugé ni a Susabanka, y no menciona San Andrés ni Tucurinca, los topónimos que trae la ficha.",
      },
      {
        key: "mogollonGonzalezCreacion2024",
        summary:
          "Lee el castigo de Kashindúkua desde el objeto con el que se ejecuta. Búnkuasé lo reprende valiéndose de la sukalda, el madero con que se saca la cal del poporo, y lo golpea dos veces: el primer golpe lo desmaya, el segundo lo mata; al ver los huesos de tigre, Búnkuasé lo revive. Los autores sacan de ahí una lectura que la ficha no tiene: el poporo contiene el equilibrio entre vida y muerte —la vida está en el calabazo y la sukalda da la muerte—, de modo que la sanción al jaguar desbordado no es una ejecución sino una operación con el mismo instrumento que sostiene el pensamiento y la creación. Sirve para explicar por qué la fuerza queda contenida y no borrada.",
        limitation:
          "Es filosofía comparada sobre los poporos de los cuatro pueblos de la Sierra (kogui, arhuaco, wiwa, kankuamo) tratados en conjunto, no una etnografía kogui; las categorías 'metafísica/epistemología/ética' son de los autores. El episodio de Kashindúkua lo toma explícitamente de Gómez (2010), así que no es testimonio independiente. No menciona la piedra azul, ni a Nuánashe, ni el fin del mundo.",
      },
      "witteecologia2025",
      "vargasBajo2025",
      "garciaReyesIconografias2017",
    ],
    title: "Kashindukwe y las piedras de jaguar",
    summary:
      "Kashindukwe y Nuánashe usan piedras para transformarse en jaguares, devoran gente y quedan ligados a la destrucción y renovación del mundo.",
    tags: ["Kashindukwe", "Nuánashe", "jaguar", "renovación"],
    mito: `Kashindukwe de día era gente y de noche se volvía fiera. De San Andrés para abajo, hacia Tucurinca, todos eran indios que durante el día trabajaban y al caer la noche se volvían león, tigre. Cogían una piedra azul o verde y con ella se volvían tigres. Así lo hacían Kashindukwe, Nuánashe y Námaku: cada uno tenía su piedra azul, y cuando se sentían tigres querían matar gente y comérsela.

Cuando comenzaron a comer indígenas, existió un padre que les iba a castigar. Le tiraron con flecha y no le pegaban. Hicieron machete de piedra y tampoco.

Entonces Núnkasha puso a hacer una trampa de machucón, como de veinte metros, y le pusieron mucha piedra. Así cogieron a Kashindukwe, que iba a comer indígenas, y allí murió.

Nuánashe también comía gente. Magri le había dado libro para que comiera únicamente enfermo, pero después se enseñó a comer gente. A lo último se comió a su hija y a su mujer. Las llevó a la roza y las iba aguaitando, aguaitando. Se puso una calavera de tigre y se volvió tigre; se la quitó y fue gente. Con piedra azulita se convertía en tigre. Cogió a la hija y la comió; más adelante cogió a la mujer y también se la comió, porque la vio como una piña y le pareció muy dulce.

Después siguió comiendo toda clase de gente, y ya iba a acabar con todos los indios. Entonces Aluseiye y Mulkwehe mataron a Nuánashe. Lo mataron y no lo mataron, porque el espíritu está únicamente como dormido.

Los mamas son como Núnkasha, como Aluseiye y como Mulkwehe. Cuando se acaben todos los mamas vivirá nuevamente Kashindukwe, y vivirá Nuánashe, y se acabará el sol, y se terminará todo.

Por eso, cuando viene oscureciendo, viene Ubatáshi, y hay que llevar idioma de antiguo, del que hablan los mamas, para conversar con él.

Cuando se acabe el sol se volverán fieras. Vendrán Kashindukwe y Nuánashe, y también Kasaugue, para acabar con todo, y nuevamente el mundo quedará limpio: no habrá árboles, no habrá cerros, el mar llenará todo y solamente habrá agua.`,
    historia: `Lo contó Seye Ababi Makó, hombre de veinticinco años, cabo del mama Ignacio Abiguí de Tucurinca, en el alto río Sevilla; en el pie de la lámina XI del mismo trabajo se le identifica también como Miguel Antonio Niño. Lo contó en castellano, lengua que no manejaba con destreza, en el pueblo de San Andrés, sobre la vertiente occidental de la Sierra Nevada, durante el mes de noviembre de 1946. Quien lo anotó fue Milcíades Chaves Ch., que andaba por allí con Gerardo Reichel-Dolmatoff y Alicia Dussán de Reichel, y que publicó el conjunto al año siguiente como «Mitología kágaba», en el Boletín de Arqueología, volumen II, números 5 y 6, hoy accesible en el catálogo del ICANH; el artículo abre en la página 421 del volumen encuadernado, aunque suele citarse por la paginación del fascículo. Este es el mito número 11 y se titula, en el impreso, KASHINDUKWE.

Dos advertencias son del propio Chaves y no de una lectura posterior. La primera: llama «interrogatorios» a lo que hizo, y escribe que por no hablar el idioma kogui y tener que trabajar en castellano «haya ideas confusas» y conceptos «deformados». La segunda: su capítulo de comentarios está armado sobre un esquema evolucionista hoy insostenible, que es suyo y no de quien narró.

La reimpresión que durante años sostuvo esta página —la antología de Eugenia Villa Posse, Mitos y leyendas de Colombia, tomo I, IADAP, 1993— conserva la atribución y cambia el rótulo por «Relator: Seye Ababi Makó». El PDF que se citaba como tomo II de Reichel-Dolmatoff es esa antología, no ese libro.

El tomo I de Reichel-Dolmatoff, de 1949-1950, no trae este relato pero sí su entorno: llama a Kashindúkua «el Padre del Jaguar», dice que los Antiguos eran jaguares y tenían todos su secreto y se convertían al caer la noche, que junto a la puerta de la casa ceremonial se colgaba una calavera de jaguar como tributo, que la bola azul se la dio la Madre Universal, y que en las colinas bajas «de noche salen los Antiguos en forma de jaguares y matan a la gente». También dice que el fin del mundo será obra del jaguar.

Fabio Gómez Cardona, en El jaguar en la literatura Kogi (Universidad del Valle, 2020), transcribe y segmenta una versión mucho más larga, tomada de material ya publicado: es análisis literario, sin trabajo de campo propio, y no menciona San Andrés ni Tucurinca. Falk Parra Witte, en La ecología kogi en el devenir del mundo (2025), aporta lo que ninguna fuente de 1947 podía aportar: que los ubatashi siguen nombrándose hoy, que llegarán con el trueno y el fuego, y que sus interlocutores reconocen que los kogi están incumpliendo la Ley. El posible cataclismo, dice, no es un apocalipsis fechado.

Falta lo más importante: no hay una línea sobre permiso. En el Plan Especial de Salvaguardia, los cuatro pueblos de la Sierra declaran que el uso y manejo de su conocimiento «no concibe la necesidad de su divulgación externa» y que su salvaguardia «tiene que ser completa, no puede ser parcial». Reichel-Dolmatoff escribe en su propio libro que los mayores no querían que los jóvenes aprendieran castellano por temor a que divulgaran los secretos. Esto se publica sabiendo eso.`,
    versiones: `El parentesco no está resuelto y no se resuelve aquí. En el tomo I de Reichel-Dolmatoff, la mujer de Sintána fue Tungexa y sus primeros descendientes eran «Kashindúkua, Dyíuamályi, Noána-sé, Námaku y la hija Námukalye»: hermanos entre sí, hijos de Sintána. En la versión que reproduce Gómez Cardona, en cambio, Kashindúkua es hijo de la Madre y hermano de Noána-sé, Búnkua-sé y Ambú-ámbu, mientras que otro relato del mismo libro hace a Noána-sé hijo suyo, heredero del cargo de mama, de la bola azul y de la máscara. Y el propio Chaves, en su índice de personajes, escribe «Kashindukue = Hombre, hijo de la primera Madre», da a Nuánashe como hermano suyo, y atribuye a tres figuras distintas el mismo puesto de hermano mayor: Núnkasa, Námsiku y Nemkardi. Las tres cadenas son serias y dicen cosas distintas.

El objeto cambia de nombre y de naturaleza. Aquí es «una piedra azul o verde» y «piedra azulita», y la transformación se completa poniéndose una calavera de tigre. En el tomo I es una «bola azul» que dio la Madre Universal. En la versión larga es nébbis-kuái, glosado como testículo de tigre, acompañado de una máscara de jaguar, entregado con la advertencia expresa de no dañar a nadie. El mismo tomo I anota que el azul es el color del Norte y se considera malo, y que del Norte viene la enfermedad.

La muerte también difiere. Aquí a Kashindukwe lo mata una trampa de machucón cargada de piedra, mandada hacer por Núnkasha, y a Nuánashe lo matan Aluseiye y Mulkwehe. En la versión larga es Búnkua-sé quien lo aconseja y lo golpea con el palito del poporo dentro de la cansamaría, lo hace caer privado y lo revive soplándolo, hasta que del suelo sólo quedan los huesos blancos de un tigre grande, y soplándolos lo revive otra vez. La duplicidad ya está en el impreso de 1947: «lo mataron y no lo mataron, porque el espíritu está únicamente como dormido».

Las grafías no son estables ni dentro del mismo artículo: el mito 11 se titula KASHINDUKWE y el 12 KASHINDUKUE, doce y veintitrés apariciones respectivamente. Reichel-Dolmatoff escribe Kashindúkua. En su artículo de 1975 sobre los templos, el nombre reaparece entre «los hijos de la Madre» junto a Namsíku, con otra transcripción que el escaneo degrada y que por eso no conviene fijar.

Y hay dos narradores, no uno. Este es el relato de Seye Ababi Makó. Los mitos 12 y 13 del mismo conjunto son de Benito Sontinkama y cuentan otra cosa: allí el devorador es Nuánashe, no hay trampa de piedra, y la bolita azul se llama Maluteyauye y se la dio la primera Magri.

Conviene además no leer estos nombres sólo como individuos. El tomo I registra Noána-sé —que es el Nuánashe de aquí— como nombre de un Túxe, es decir de un linaje masculino, con su etimología, su habitat en Mamaróngo, sobre el río Ranchería, y su grupo femenino complementario, las Noanamá; y anota que algunos informadores decían que tal Túxe no existe. Námaku, en el mismo volumen, se glosa como nebbi makú, jaguar jefe. Son nombres de gente viva, no rótulos de monstruos.`,
    similitudes: `Entre los nasa de la parcialidad de Calderas, en Tierradentro, Segundo Bernal recogió en 1953, para la Revista Colombiana de Antropología, un relato titulado «El hombre tigre»: antes había gente tigre, igual que el tigre de monte; cuando los hombres no lograron cazar a uno con escopeta y perro, convidaron a un hombre tigre para que lo cazara, y él lo mató. Una versión añadida en el mismo texto dice que los ladrones se vuelven tigres y van a traer vacas a Garzón y a Neiva, y al regresar a su casa vuelven a ser hombres; y remata que los hombres tigres son ladrones y que los blancos mismos son tigres. El parecido es el cuerpo que cambia al caer la noche. La diferencia es todo lo demás: allí la transformación es una acusación sobre el robo y sobre el blanco, sin antepasado fundador, sin piedra en la boca y sin final del mundo colgando de ella.

Entre los desana del Vaupés, Antonio Guzmán narró a Gerardo Reichel-Dolmatoff el mito de la creación que se publicó en Desana (Universidad de los Andes, 1968). Allí el Sol creó al jaguar para que lo representara en este mundo, le dio el color de su poder y la voz del trueno, que es la voz del Sol, y le encargó proteger la Creación y cuidarla, ante todo las malocas. Es el mismo animal con el oficio invertido: guardián de la casa en el Vaupés, devorador de quienes viven en ella en la Sierra. Y la vía es otra: allí el jaguar es criatura del Sol desde el principio, no un hombre que llega a serlo metiéndose una piedra en la boca.`,
    leccion:
      "Un poder entregado para curar se vuelve hambre cuando deja de distinguir a quién cura.",
    sceneHorizontal:
      "dos figuras humanas proyectan sombras de jaguar junto a piedras azules y verdes, mientras una aldea se protege entre los ríos",
    sceneVertical:
      "una piedra de transformación permanece dormida bajo una montaña, con el Sol oscurecido y una corriente limpiando el valle",
    researchNotes:
      "CORRECCIÓN: no se trata como profecía fechable ni como mal absoluto. CICLO: se mantiene separada la secuencia extensa de Núnkasha.",
  }),
  myth({
    slug: "nunkasha-y-kashindukwe",
    sourceKeys: [
      "chaves1947",
      "reichel1950",
      "reichel1987",
      "pes2017",
      "decreto2018",
      {
        key: "cardonajaguar2020",
        summary:
          "El apartado 'Noána-sé: organización social, incesto y exogamia' (pp. 88-93) es, de todo lo que encontré, lo único que desarrolla este episodio completo, y obliga a corregir la ficha en dos puntos de fondo. Primero, Nukasá (la Núnkasha de la ficha) no es un hermano mayor que aconseja: es la hermana de Noána-sé, quien le pide que le mande dos muchachas al sembrado, las mata y las devora; ella lo ve todo por clarividencia y lo denuncia ante Búnkua-sé, y él, al descubrirlo, la mata y la devora también. Segundo, Noána-sé es hijo de Kashindúkua y heredó de él tanto el cargo de mama como la bola azul y la máscara. El castigo lo ejecuta Búnkua-sé mediante pruebas: se transforma sucesivamente en pava, guatinaja, zahíno y ñeque para enseñarle qué animal le corresponde como presa; lo lleva por un sembrado de maíz donde lo esperaba gente armada; y finalmente le señala una piña grande y madura que en realidad era una mujer. Al agarrarla, la gente lo mata, pero la bola azul se le escapa de la boca con el primer golpe: muere solo el hombre, y el jaguar huye y se oculta en una cueva del cerro, donde hay cuatro tinajas con huesos y una calavera de tigre.",
        limitation:
          "Análisis literario sobre versiones publicadas, sin campo propio. No menciona a Ambu-Ambu en este episodio (lo sitúa como hermano de Kashindúkua en el relato anterior), de modo que no respalda la mención que hace la ficha. La lectura de que Noána-sé además 'tendría relaciones sexuales prohibidas con mujeres de su propio grupo' es interpretación del autor, no del relato. Traduce 'tigre'.",
      },
      {
        key: "reichelDolmatoffTemplos1975",
        summary:
          "Sirve para lo que la ficha necesita y no tiene: dónde queda este ciclo dentro del orden kogui, y no solo dentro de una lista de relatos. Al describir los cuatro fogones del templo, Reichel-Dolmatoff asigna el fogón noroccidental a Seilánkua, Dueño de la Tierra y de las Plantas, y enumera entre los personajes míticos asociados a 'los hijos de la Madre, Kalindúkua y Namsíku'. Es decir, los antepasados jaguar tienen un asiento fijo en la cosmografía del templo y en la estructura matrilineal que allí se recita, no son solo protagonistas de un cuento de ataques. Aporta además la variante ortográfica Kalindúkua, útil para la sección de versiones.",
        limitation:
          "No narra el episodio: ni Nukasá, ni las advertencias, ni la muerte de Noána-sé aparecen. El PDF que publica el ICANH es un escaneo sin capa de texto y no pude leerlo desde ahí; verifiqué el contenido en una copia del mismo artículo con texto extraíble alojada en Semantic Scholar (pdfs.semanticscholar.org/0682/93f396cb970445fdd68b1059044378dd06fd.pdf). La transcripción del kogui es la de 1975 y el artículo tiene los sesgos de época del autor.",
      },
      {
        key: "wittestructure2020",
        summary:
          "Explica qué institución kogui está detrás del 'aconsejar y castigar' de Búnkua-sé, que la ficha menciona sin nombrar. Describe la confesión, aluna ishguashi, como un tipo de pagamento común a los cuatro pueblos: la persona descarga mentalmente pensamientos, emociones, sueños, acciones y memorias en materiales que el mama convierte en pagamento. El relato de Noána-sé —que se niega repetidamente a aceptar consejo— es legible entonces como la figura que rechaza el mecanismo mismo por el cual una comunidad repara lo roto, y no solo como un devorador. Aporta también el marco de la reciprocidad como alimento, que da sentido a que el conflicto se dirima en términos de quién come a quién.",
        limitation:
          "No menciona a Noána-sé, Nukasá ni Kashindúkua; es etnografía contemporánea de pagamentos y confesiones, no de mitología. El paralelo con el relato es mío, no del autor. La comparación central del artículo es con los Andes, y parte del material sobre confesión proviene de los i'kʉ (arhuacos), no de los kogui.",
      },
      {
        key: "mogollonGonzalezCreacion2024",
        summary:
          "Da un modelo del castigo en este ciclo que la ficha describe solo como 'engaño' y 'ataque'. En la reprensión de Kashindúkua, Búnkuasé golpea con la sukalda, el madero del poporo: primer golpe, desmayo; segundo, muerte; luego lo revive al ver los huesos de tigre. La conclusión —vida en el calabazo, muerte en la sukalda— ayuda a leer la derrota de Noána-sé no como victoria militar sino como una corrección ejecutada desde el orden, y explica por qué su fuerza queda guardada en un cerro y no destruida.",
        limitation:
          "El episodio que analiza es el del padre, no el del hijo: no dice nada de Noána-sé ni de Nukasá. Trata los cuatro pueblos de la Sierra juntos y toma el mito de Gómez (2010), no de campo propio.",
      },
      {
        key: "garciaReyesIconografias2017",
        summary:
          "Respalda la decisión de la ficha de no contar las muertes como espectáculo. Documenta que los kogui relatan que sus ancestros directos, la gente-jaguar, descendían de grandes felinos creados al inicio de los tiempos, y que existen mitos sobre distintas personificaciones del jaguar como grandes chamanes que mudaban de hombre a animal, establecían rituales y ejercían dominio por las montañas. Las personas encargadas de las técnicas curativas están embebidas en esa simbología. Permite presentar a Noána-sé como heredero de un cargo, no como monstruo.",
        limitation:
          "Panorama nacional desde la conservación biológica; lo kogui son unos pocos párrafos apoyados en literatura secundaria. No narra este episodio ni nombra a ninguno de sus personajes.",
      },
      {
        key: "vargasBajo2025",
        summary:
          "Explica por qué este relato termina con una amenaza contenida y no con una victoria. Muestra que entre los chibchas del norte de Colombia el fin del mundo es periódico y retrasable, invade la conversación diaria, las plegarias y los sueños, y que su causa es moral: la renuncia humana a su humanidad definitoria. Cita expresamente a los kogui (Reichel-Dolmatoff 1985, II: 81-82) entre los pueblos donde esta inquietud es cotidiana. La cueva del cerro con las tinajas y la calavera deja de ser un detalle pintoresco y se vuelve el modo normal de guardar un peligro latente.",
        limitation:
          "Comparativo de toda la estirpe chibcha, con material de primera mano ette. No menciona a Noána-sé ni el episodio. Sirve como marco, no como fuente del relato.",
      },
    ],
    title: "Núnkasha y Kashindukwe",
    summary:
      "Núnkasha advierte repetidamente sobre Nuánashe y ayuda a detener al devorador después de ataques que casi acaban con la gente.",
    tags: ["Núnkasha", "Kashindukwe", "Nuánashe", "advertencia"],
    mito: `Nuánashe tenía un hermano mayor que se llamaba Núnkasha. Cuando Nuánashe se comió al primer indio, su hermano mayor lo llamó para darle consejo, regañarlo e imponerle un castigo: durante una noche y un día no le dio comida. Pero Nuánashe se comió otro indio, y entonces su hermano mayor lo llamó y lo aconsejó durante dos días y dos noches. A pesar de esto los indios seguían perdiéndose, y lo aconsejó durante tres días y tres noches.

Esa vez Nuánashe se fue con rabia y, en compañía de Kashindukue, se fueron a un pueblo de tigres y se comieron varios indios. Llegaron después a Mamaluwi, que es un pueblo grande, y los dos comieron tanta gente que sólo quedaron un viejo y una viejita, un niño y una niña.

Pasado un tiempo hubo mucha gente, porque tanto la vieja como la joven dieron a luz muchos pelados; como en el espacio de dos años la gente ya era numerosa, y como en sesenta años el pueblo estaba lleno otra vez. Pero Nuánashe y Kashindukue vinieron por segunda vez y comieron mucha gente. Núnkasha los llamó y los tuvo siete noches con los brazos cruzados sin comer. Entonces Nuánashe se insubordinó y le dijo: yo también tengo mi libro y mi Casa Ceremonial.

Cuando Nuánashe estuvo en su Casa Ceremonial, en su pueblo las mujeres iban a la quebrada por agua o leña; él se convertía en tigre y las asustaba. Ellas venían a avisar, pero él las regañaba diciéndoles que quizá estaban haciendo cosas malas.

Ambu-Ambu vino a visitar a Nuánashe y le compró todas las mujeres y toda la gente. Después Nuánashe lo invitó a que se fueran a bañar y a caminar, pero Ambu-Ambu no aceptó ir en su compañía. Después lo invitó a jugar y luego a pelear, y entonces Nuánashe le mordió el pescuezo y lo mató; él ganó la pelea. Se puso a descansar un buen rato y ya Ambu-Ambu hedía; Nuánashe lo miraba y le pareció que estaba dulce, sabroso como ají picante, y se lo comió. Fue así como Nuánashe aprendió a comer gente.

Por último se comió a su propia mujer. Se fueron para la roza y él iba detrás; la miraba y le parecía como una piña bien madura y muy sabrosa; puso una bolita azul en la boca, se convirtió en tigre y se la comió.

Entonces Núnkasha, su hermano mayor, ya no pensó en darle consejos sino en actuar en otra forma. Lo llamó y le dijo: tengo mucha hambre, déme comida cocida. Nuánashe, para disimular, hablaba solo como si estuviera su mujer; después le pidió agua, y Nuánashe llamó y se contestó él mismo, y trajo agua para su hermano mayor. Núnkasha lo invitó para que fuera a pasear a la roza, y Nuánashe vio mucho maíz, muchas palomas, pavas y zorras: todo esto lo hacía aparecer Núnkasha. Nuánashe quiso coger maíz para comer y puso la bolita azul en la mochila, y apareció mucha gente lista a dispararle flechas; tragó nuevamente la bolita azul y ya todo fue maíz.

Entonces lo llevó a un piñal. Nuánashe tuvo muchas ganas, guardó la bolita en la mochila y fue a comer piñas; en el momento vino mucha gente armada de macana y le dieron en la nuca y lo mataron.

Le quitaron la mochila y la entregaron a Núnkasha; le quitaron el vestido y lo entregaron a Núnkasha; le quitaron todo lo que tenía y lo entregaron a Núnkasha. Entonces cogió a Nuánashe y lo guardó en un cerro, y hasta ahora se encuentra allí.`,
    historia: `Este no lo contó el mismo hombre que contó el anterior, y conviene saberlo antes de leerlo. Lo contó Benito Sontinkama —el impreso también escribe Sontincama—, hombre de treinta y ocho años, cabo del mama Julián, descrito como respetado por todas las personas del grupo de San Andrés. Es el mito número 12 del conjunto que Milcíades Chaves Ch. publicó en 1947 como «Mitología kágaba», en el Boletín de Arqueología, volumen II, números 5 y 6, recogido en San Andrés, en la vertiente occidental de la Sierra Nevada, en noviembre de 1946, en castellano, durante una campaña de cuatro semanas en la que Chaves iba acompañado de Gerardo Reichel-Dolmatoff y Alicia Dussán de Reichel. En el impreso el título es NUNKASHA Y KASHINDUKUE. El volumen está en el catálogo del ICANH bajo licencia abierta.

Vale anotar una particularidad de esta página: el aparato que Chaves pone debajo del texto no coincide con el texto. El relato hace a Núnkasha el hermano mayor que aconseja y a Nuánashe el que devora; la lista de personajes que sigue llama a Núnkasha «hermano mayor de Kashindukwe» y a «Kashingukwe» hermano de Nuánashe; y la síntesis traslada a Kashindukwe la compra de las mujeres y la muerte final. En el índice general de personajes del mismo artículo, la trampa de Núnkasa ya no es para el jaguar sino para Seiskusbuche. El dictado es una cosa y el resumen del recopilador es otra.

Un detalle que el corpus publicado venía entendiendo mal: la «Casa Ceremonial» que Nuánashe reclama como suya es la que el propio Chaves glosa en el capítulo de generalidades, «la Casa Ceremonial que ellos designan Kansa María o Iglesia del Mama es el centro de gravedad de toda la comunidad», y la que Reichel-Dolmatoff llama «cansamaría» explicando que los kogi comparan a veces a la Madre Universal con la Virgen María y por eso la llaman «casa de María». No es una sustancia ni un principio femenino.

La antología de Eugenia Villa Posse de 1993 reimprime este relato conservando el crédito, con el rótulo «Relator». El PDF que la ficha citaba como tomo II de Reichel-Dolmatoff es esa antología.

Lo que las fuentes nuevas aportan y lo que no. Fabio Gómez Cardona dedica a este episodio el apartado «Noána-sé: organización social, incesto y exogamia» de El jaguar en la literatura Kogi (Universidad del Valle, 2020), y es lo único que lo desarrolla completo, aunque sobre versiones ya publicadas y sin campo propio. Falk Parra Witte, en The structure that sustains life (Tabula Rasa 36, 2020), describe la confesión, aluna ishguashi, como un pagamento en el que el mama convierte lo que la persona descarga en ofrenda: es la institución detrás del «aconsejar y castigar», aunque el artículo no menciona a ninguno de estos personajes y parte de su material sobre confesión es i'kʉ y no kogui. Reichel-Dolmatoff, en Templos kogi (1975), sitúa a los hijos de la Madre en el fogón noroccidental del templo, de modo que estos antepasados tienen asiento fijo en la cosmografía y no sólo papel de cuento. Y el Decreto 1500 de 2018, hecho con los cuatro pueblos, registra sitios donde los padres están representados en forma de tigres como cuidadores del territorio.

Sobre la condición en que se obtuvo todo esto: Chaves no consigna permiso alguno y llama «interrogatorios» a sus sesiones. El Plan Especial de Salvaguardia firmado por los cuatro pueblos declara que el manejo de su conocimiento «no concibe la necesidad de su divulgación externa».`,
    versiones: `Hay dos cadenas y no cuentan lo mismo, ni siquiera en quién denuncia.

En este dictado, Núnkasha es el hermano mayor: aconseja, ayuna al menor, y al final le tiende la celada del maizal y del piñal, recoge su mochila, su vestido y todo lo que tenía, y lo guarda en un cerro. En la versión que reproduce Gómez Cardona, el personaje equivalente es Nukasá, y es la hermana: Noána-sé le pide que le mande dos muchachas al sembrado, las mata y las devora, ella lo ve todo de lejos por clarividencia y lo denuncia ante Búnkua-sé; cuando él lo descubre, la encuentra sola en la casa y también la mata y la come. Quien aconseja y castiga allí no es un hermano sino Búnkua-sé, que se transforma sucesivamente en pava, guatinaja, zahíno y ñeque para mostrarle qué animal le corresponde, lo lleva al maizal que era gente armada y le señala una piña grande y madura que en realidad era una mujer. Y el desenlace se desdobla: con el primer golpe la bola azul se le cae de la boca, de modo que muere sólo el hombre, y el tigre huye a una cueva del cerro donde hay cuatro tinajas con huesos y una calavera de tigre. De ahí saldrá, con Kashindúkua y Námaku, cuando se acabe el mundo.

El parentesco tampoco coincide. Aquí Núnkasha es hermano mayor de Nuánashe. En el tomo I de Reichel-Dolmatoff, Kashindúkua, Dyíuamályi, Noána-sé, Námaku y Námukalye son todos hijos de Sintána y Tungexa, es decir hermanos. En la versión larga, Noána-sé es hijo de Kashindúkua y hereda de él el cargo de mama, la bola azul y la máscara. No se elige entre las tres.

El truco de la comida también aparece invertido en otro punto del corpus. Aquí Núnkasha hace aparecer maíz, palomas, pavas y zorras que en verdad son gente armada. El tomo I, hablando del soplo, dice en cambio que el mama que protegió a Námaku sopló contra los enemigos atacantes y los convirtió en frutos del campo, que Námaku comió. La misma operación en sentido contrario: allí la gente se vuelve comida, aquí la comida se vuelve gente.

Ambu-Ambu es el punto más frágil. En este dictado compra todas las mujeres y toda la gente, y Nuánashe lo mata en una pelea y se lo come, y de ahí aprende a comer gente. En la versión larga, Ambú-ámbu no interviene en este episodio: figura como hermano de Kashindúkua en el relato anterior. Y la síntesis del propio impreso de 1947 le adjudica la compra a Kashindukwe, no a Nuánashe.

En las grafías, el título del mito 12 se imprime KASHINDUKUE y el del 11 KASHINDUKWE; el cuerpo del texto alterna además «Núakasha» y «Kashingukwe». La antología de 1993 reimprime las mismas formas. Y el tomo I registra Noána-sé, que es este Nuánashe, como nombre de un Túxe, un linaje masculino con habitat en Mamaróngo, sobre el río Ranchería, y grupo femenino complementario, las Noanamá: gente viva y no un monstruo.`,
    similitudes: `Entre los ufaina del río Caquetá, Martín von Hildebrand recogió el «Origen del mundo según los Ufaina», publicado en la Revista Colombiana de Antropología, volumen XVIII, en 1975. Allí el Kurupira comía gente de noche y dormía de día, parado y recostado contra un árbol, porque no tenía coyunturas y no podía caer al suelo; los Imarikakana fabricaron un trocero, cortaron su cama de palo de corazón por debajo dejándola aparentemente sana, y cuando el devorador llegó de madrugada la cama se partió, él cayó y ya no pudo pararse, y lo mataron a garrote. Después le sacaron los huesos y con ellos hicieron el barril de una escopeta de cacería. El parecido es exacto en el método: al devorador no se le vence de frente sino con una trampa hecha de lo que él confía. La diferencia está en el vínculo y en el destino de los restos: allí el devorador es un extraño, el engaño es técnico y no una comida disfrazada, y sus huesos pasan a ser herramienta de caza, mientras aquí el devorador es el hermano menor y su cuerpo se guarda entero dentro de un cerro.

Entre los nasa de la parcialidad de Calderas, en Tierradentro, Segundo Bernal recogió en 1953 el relato «El hombre tigre», publicado en la Revista Colombiana de Antropología: allí los hombres, que no lograban cazar al tigre de monte con escopeta y perro, convidaron a un hombre tigre para que lo cazara, y el hombre tigre lo mató y lo entregó. El contraste vale la pena: el que puede volverse tigre es contratado por la comunidad como su agente, y a nadie se le ocurre acabar con él, mientras aquí el que se transforma es un pariente al que primero hay que aconsejar y después matar.`,
    leccion:
      "Quien aconseja mucho tiempo sin ser oído acaba corrigiendo con una trampa en vez de palabras.",
    sceneHorizontal:
      "Núnkasha guía a familias sobrevivientes por un valle mientras una sombra de jaguar queda contenida detrás de una montaña",
    sceneVertical:
      "la entrada de un cerro guarda la fuerza de Nuánashe y la comunidad reconstruye sus casas en primer plano",
    researchNotes:
      "ESTRUCTURA: se preserva la distinción Núnkasha/Nuánashe. TRATAMIENTO: se evita representar ataques o cuerpos con violencia gráfica.",
  }),
  myth({
    slug: "canibalismo",
    sourceKeys: [
      "chaves1947",
      "reichel1950",
      "reichel1987",
      "pes2017",
      {
        key: "cardonajaguar2020",
        summary:
          "Es la fuente decisiva para este slug y desarma el rótulo. Dedica un capítulo entero a los tres relatos del devorador —Kashindúkua, Noána-sé y Námaku— y en ninguno aparece la palabra «canibalismo» como título: los titula por el personaje y por el tema («el chamanismo y la concepción de la enfermedad», «organización social, incesto y exogamia», «la lucha contra el destino»). Reconstruye el relato de Noána-sé, hijo de Kashindúkua, que hereda de su padre la bola de piedra azul y la máscara de jaguar, mata y devora a dos muchachas camino del río, es denunciado por su hermana Nukasá, desoye los consejos de Búnkua-sé y muere en una trampa donde la gente se le aparece como maizal y una mujer como piña madura; muere el hombre y escapa el tigre, que se oculta en una cueva del páramo. Lee el devoramiento como abuso del poder chamánico y como código de exogamia —qué presa corresponde a qué linaje, es decir con qué mujeres puede y no puede casarse—, no como costumbre alimentaria. Confirma textualmente lo que la ficha sostiene: el canibalismo pertenece a estos personajes transgresores.",
        limitation:
          "La grafía es Noána-sé y no Nuánashe, y en esta versión es hijo de Kashindúkua, no su compañero, ni aparecen Magri, maluteyauye, Némkardi, Námsiku ni San Miguel: es otra transcripción y quizá otra secuencia, así que no puede usarse para reescribir el episodio, solo para situarlo. El marco es de historia de las religiones (Eliade) y semiótica narrativa, con interpretaciones psicoanalíticas del devoramiento y la sexualidad que son del autor. Trabaja sobre traducciones al castellano, no sobre la lengua kogui, y el propio autor lo advierte al discutir el juego koggi/kaggi.",
      },
      {
        key: "rangelResena1990",
        summary:
          "Da la pista bibliográfica que explica de dónde puede venir el rótulo. Documenta que los textos kogui recogidos por Preuss circulan en castellano en una compilación editada por Manuela Fischer, «Mitos Kogi», publicada por Abya-Yala en la Colección 500 Años, cuya declarada intención editorial es divulgar el conocimiento de los pueblos indígenas de América. Es decir: entre el cuaderno alemán de Preuss (1915-1926) y una ficha web hay al menos una capa editorial que agrupó y tituló los relatos en castellano, y es ahí —no en la narración— donde hay que buscar el origen de un encabezado como «canibalismo». Esto respalda la decisión de la ficha de conservar el slug pero desplazar la palabra del título.",
        limitation:
          "Solo pude leer la ficha bibliográfica de la reseña en el portal del Banco de la República; el archivo de la galerada devuelve 404, de modo que no verifiqué el cuerpo del texto de Urbina ni pude confirmar si menciona cómo están titulados los relatos. Que la compilación de Fischer sea la fuente del rótulo es una hipótesis razonable, no un hecho comprobado: para cerrarlo haría falta el índice de «Mitos Kogi» (Abya-Yala, 1989) o el del tomo II de Reichel-Dolmatoff, ninguno de los dos consultable en línea. Son dos páginas, no un estudio.",
      },
      {
        key: "zapataMujicaMascaras2025",
        summary:
          "Explica por qué la máscara es el centro del relato y no un accesorio, que es lo que permite contar el episodio sin ilustrar a nadie siendo comido. Documenta, con fotografías y diarios de campo de 1973 y 1981, que las máscaras concentran autoridad política y que solo los mamas formados pueden portarlas en los bailes del Tani-Cansamaría, una serie de danzas solemnes de cerca de una semana con las que las comunidades buscan incidir en el curso de los acontecimientos a favor de la madre universal y restablecer el equilibrio cósmico. Leído contra el relato, esto convierte la transformación del devorador en lo que es: el uso indebido de un objeto de gobierno por parte de quien debía custodiarlo, y explica que quienes lo reconocen y amonestan sean mamas.",
        limitation:
          "No menciona a Kashindúkua, a Noána-sé, a San Miguel ni el episodio del devoramiento; el vínculo es la institución de la máscara, no la narración. La fuente primaria es un archivo misionero católico (USEMI) y los autores trabajan sobre ese archivo, con los sesgos de la mirada misional, no sobre campo propio. Su caracterización de los kogui como «el último cacicazgo teocrático sobreviviente del continente» es una tesis discutida que no conviene repetir como dato.",
      },
      {
        key: "reichelDolmatoffTemplos1975",
        summary:
          "Documenta el escenario que el relato nombra. Describe los tipos de templo kogui (nuhué) y sitúa entre los centros ceremoniales de la vertiente norte a Seízua, arriba de San Miguel, y entre los centros mayores a Takina y Makotama, en las cabeceras del río San Miguel, aclarando que estos últimos no son templos públicos abiertos a todos los hombres kogui sino santuarios exclusivos donde se conservan objetos de culto. Eso da densidad a la escena de la ficha —la comunidad reunida mientras el peligro circula— y respalda la elección de representar el episodio con asentamientos, piedras y huellas. Aporta además un dato de vocabulario directamente pertinente: aclara en nota que «cansamaría», la palabra que la ficha hereda para nombrar la casa ceremonial, es una expresión española de origen misional colonial que sigue en uso entre la población mestiza, no un término kogui.",
        limitation:
          "El PDF de ICANH es un facsímil escaneado sin capa de texto: verifiqué las primeras páginas leyéndolas como imagen y no comprobé una por una las secciones astronómicas posteriores. No trata el relato del devorador ni menciona a Nuánashe o Kashindúkua. Texto de 1975, con lenguaje de la época («sacerdote-templo-ídolo», «tribus») y con un encuadre de los kogui como supervivencia de los cacicazgos taironas que hoy se discute.",
      },
    ],
    title: "Nuánashe y el hambre sin límite",
    summary:
      "Nuánashe y Kashindukwe transforman su cuerpo y atacan comunidades hasta que los mamas reconocen una amenaza nacida de romper los límites.",
    tags: ["Nuánashe", "Kashindukwe", "Magri", "límite"],
    mito: `Antes, Nuánashe se volvía tigre y se comía a la gente. Se ponía en la boca una bolita azul y quedaba convertido en tigre. Un día fue a la roza con su mujer, se metió la bolita en la boca y la fue aguaitando; ella se le pareció como una piña, le pareció muy sabrosa y se la comió. La bolita con la que se vuelve tigre se llama Maluteyauye, y se la había dado la primera Magri. Mucho después se enseñó a comer hombres, mujeres y niños.

De día Nuánashe es como un indio. De noche toma la bolita entre la boca, se vuelve tigre y entonces ya quiere comer a los hombres. La primera Magri le había dado su libro, y tiene su Casa Ceremonial en San Miguel. Antes vivían allí los indios Navikue, que son gente de tigre.

Nuánashe y Kashindukue nacieron cuando aún no había tierra: todo se encontraba cubierto por agua, no había cerros, no había nada. Fueron ellos dos los que pidieron que hubiera árboles en la tierra.

La Magri le dijo a Kashindukue: ve y anda como Jefe. Él tenía su Casa Ceremonial allá en el cerro. Pero Kashindukue también se vuelve como tigre y se come a la gente. Una vez llamó a su hermano Nuánashe y se fueron a caminar; visitaron tres pueblos y se comieron a la gente. Llegaron al pueblo de Mamalowi y acabaron con toda la gente: solamente quedaron una vieja y un viejo, una niña y un niño.

El Mama fue a adivinar y a examinar en compañía de Námsiku; mandó a conversar y poner una moha y varias muchachas. Todo le avisó que era Kashindukue: la sangre, la piel y la Casa Ceremonial lo denunciaron como autor. Él se va y regresa como hombre pobrecito, con la camisa remendada, y por la noche permanece conversando para que no adivinen, mientras va terminando con la gente. Námsiku vuelve y dice: ya puse el moha. Cuando ya está amaneciendo se va el Mama y viene Kashindukue a la Casa Ceremonial, pide un pelado, cava allí mismo, lo entierra y lo guarda como en el estómago; como a eso de las cuatro le da comida, le da tierra, y Kashindukue come. Al Mama le avisa la brisa, le avisa todo lo que se habla aunque él se encuentre ausente, y por eso supo que Nuánashe y su hermano se estaban comiendo la gente.

Entonces el hermano mayor Némkardi los llamó y les dio consejos durante toda la noche, y después durante dos días, y no hicieron caso y siguieron comiendo gente. Los castigó durante cuatro días y cuatro noches, y no prestaron oído. El castigo se hizo durante cinco días y cinco noches, y entonces Kashindukue se enojó y dijo que tenía tanto poder como su hermano Némkardi, porque también la Magri le había dado su libro. Némkardi les dio consejos durante días y nueve noches, y ya Kashindukue tenía rabia como un tigre y temblaba de la rabia como un tigre. Kashindukue tiene poporo y embil, que es tabaco molido y cocinado con ceniza.

Después hicieron una trampa de machucón para castigarlo. Le quitaron primero la gorra, después el poporo y luego todo lo que tenía; entonces quedó como un perfecto tigre Maluteyan, quedó sólo como un tigre. Cuando lo mataron quedó la cabeza, y la guardaron los viejos.`,
    historia: `Lo narró Benito Sontinkama, hombre de treinta y ocho años que ejercía las funciones de cabo del mama Julián y era respetado por todas las personas del grupo de San Andrés, en la vertiente occidental de la Sierra Nevada. Lo recogió Milcíades Chaves Ch. en noviembre de 1946, en San Andrés, en compañía de Gerardo Reichel-Dolmatoff y Alicia Dussán de Reichel, y lo publicó en 1947 en «Mitología kágaba», dentro del Boletín de Arqueología, volumen II, números 5 y 6, hoy en acceso abierto en el ICANH. Chaves acredita narrador en los veintidós relatos del artículo: la línea «Informador:» aparece veintidós veces, y esta es una de las diez que llevan el nombre de Sontinkama. La reimpresión de Eugenia Villa Posse de 1993 conservó esas atribuciones y las rotuló «Relator:». Quien perdió los nombres fue este sitio, que durante años publicó el corpus sin narrador y se lo atribuyó al tomo II de Reichel-Dolmatoff a través de un PDF que no es ese libro.

El rótulo «canibalismo» no está en la narración. Es el título número trece que puso Chaves, y viene de su propia clasificación: en el capítulo introductorio anuncia cuatro clases de mitos, y una de ellas es la de «los mitos relacionados con los espíritus malos y el canibalismo». En el capítulo de comentarios, construido sobre Jung, Charles Baudouin y Julio C. Tello, escribe que «el canibalismo se presenta motivado por la necesidad de alimentos» y llama a Nuánashe uno de «los hombres caníbales». Lo que dice el narrador es otra cosa: que se volvía tigre y se comía a la gente. El propio Chaves advierte en su primera página que trabajó por interrogatorios en castellano y que muchos conceptos pudieron quedar deformados al verterse a esa lengua.

La etnografía más extensa del pueblo no registra antropofagia kogui. El tomo I de Reichel-Dolmatoff, de 1949-1950, llama a Kashindúkua «el Padre del Jaguar», dice que poseía el secreto de convertirse en jaguar metiéndose en la boca la bola azul que le dio la Madre Universal, que los Antiguos eran jaguares y tenían todos ese mismo secreto, que junto a la puerta de la casa ceremonial se colgaba una calavera de jaguar y que los kogui son la Gente del Jaguar. Ese mismo volumen registra Noána-sé, la grafía con que allí aparece Nuánashe, como nombre de un Túxe, es decir de un linaje de gente viva, con su grupo femenino complementario, las Noanamá.

Dos estudios sitúan el escenario sin tocar la narración. Juan Sebastián Zapata-Mujica y Santiago Forero Bedoya, en el Boletín de Antropología de la Universidad de Antioquia, muestran con fotografías y diarios de campo de 1973 y 1981 que las máscaras concentran autoridad y se usan en los bailes del Tani-Cansamaría; leído contra el relato, el devoramiento aparece como uso indebido de un objeto de gobierno por parte de quien debía custodiarlo. Reichel-Dolmatoff, en su artículo de 1975 sobre los templos kogui, describe los centros ceremoniales de la vertiente norte y advierte en nota que «cansamaría» es una expresión española de origen misional, no una palabra kogui.

El Plan Especial de Salvaguardia firmado por el Consejo Territorial de Cabildos de la Sierra declara que el sistema de conocimiento ancestral «no concibe la necesidad de su divulgación externa». Lo que aquí se publica no es enseñanza reservada de mamas: es lo que un hombre de San Andrés contó en castellano a dos forasteros durante cuatro semanas, y conviene leerlo sabiéndolo.`,
    versiones: `Hay un solo testimonio de este episodio y es el de Benito Sontinkama. El relato inmediatamente anterior del mismo artículo, «Nunkasha y Kashindukue», lo narró el otro informador, Seye Ababi Makó, de veinticinco años, cabo del mama Ignacio Abiguí de Tucurinca, a quien Chaves identifica además en el pie de una lámina como Miguel Antonio Niño. Allí los devoradores no mueren en una trampa de machucón sino en una celada que les tiende Núnkasha, que guarda el cuerpo y la ropa de Kashindukwe dentro de un cerro, y antes de eso Ambu-Ambu le compra las mujeres que le quedan y termina comido por él. Son dos desenlaces distintos dichos por dos bocas distintas, y no se funden en uno.

Quién reprende también cambia dentro de estas mismas páginas. En la narración, Námsiku acompaña al Mama a adivinar y es Némkardi quien da los consejos durante nueve noches; en la lista de personajes que Chaves pone debajo del relato, los dos figuran como hermano mayor que los reprende; y en el índice general del artículo el hermano mayor que arma la trampa se llama Núnkasa. La grafía del nombre principal es inconsistente en el propio impreso: el título del relato once dice Kashindukwe y el del doce dice Kashindukue.

El parentesco está en disputa entre fuentes serias y no se resuelve eligiendo una. El tomo I de Reichel-Dolmatoff hace a Kashindúkua, Dyíuamályi, Noána-sé, Námaku y la hija Námukalye hermanos, primeros descendientes de Sintána. Fabio Gómez Cardona, en su libro sobre el jaguar en la literatura kogi, reconstruye en cambio un relato donde Noána-sé es hijo de Kashindúkua y hereda de él la bola de piedra azul y la máscara de jaguar: mata y devora a dos muchachas camino del río, lo denuncia su hermana Nukasá, desoye los consejos de Búnkua-sé y muere en una trampa donde la gente se le aparece como maizal y una mujer como piña madura; muere el hombre y escapa el tigre, que se oculta en una cueva del páramo. Ahí no hay Magri, ni maluteyauye, ni Némkardi, ni San Miguel: es otra transcripción y quizá otra secuencia, y sirve para situar el episodio, no para reescribirlo.

La palabra maluteyauye tampoco queda fija en el impreso. Nombra la bolita al comienzo y al final califica al animal en que Kashindukue queda convertido, «un perfecto tigre Maluteyan», sin que el texto explique el cambio ni traduzca la palabra.`,
    similitudes: `En este mismo archivo hay dos relatos que llegaron con una etiqueta parecida y ninguno sostiene una costumbre detrás. El primero es ette ennaka: «Los caníbales», número quince de los veintiún textos que Gerardo Reichel-Dolmatoff publicó en 1945 y que le narró el cacique Tangrutaya Mutsu. Allí dos hombres matan a un vecino a macanazos y se lo comen para que no quede cuerpo que reconocer; el recopilador tituló el relato con esa palabra porque creía ver en él recuerdos de antropofagia, pero un año después describió armas, entierros y organización social chimila sin mencionar antropofagia en ninguna parte. La diferencia con el relato kogui es de posición: allí comer es un recurso para borrar un homicidio y ocurre una sola vez, mientras que aquí es el centro de la acción y lo comete, en forma de tigre, alguien que tiene libro y Casa Ceremonial.

El segundo es emberá: «Los Burumia», narrado por Odilia Dogiramá y publicado en 1984 dentro de Zrõarã Nẽburã. Allí el cautiverio y el devoramiento se atribuyen a un pueblo vecino y enemigo que vive sobre la quebrada Usagará, y la respuesta es una expedición que sube de noche a contar las casas. La diferencia es de quién devora: en el Alto Baudó el peligro viene de afuera y lleva otro nombre colectivo, mientras que en San Andrés los que se vuelven tigre son dos hermanos del propio origen, uno de ellos enviado a andar como Jefe, y quienes los reconocen y los castigan son los suyos.

Un tercer contraste está dentro del propio corpus kogui y lo dijo el mismo narrador en las páginas siguientes. En el relato del arco iris se afirma que el Sol manda las enfermedades, que los indios se mueren y que entonces se los come, y se añade que así lo dice el mama Julián. Devorar gente no es allí la transgresión de un hermano díscolo sino una función del astro, dicha sin escándalo y atribuida a una autoridad viva.`,
    leccion:
      "El poder que se entrega para gobernar se vuelve peligro cuando se usa contra los gobernados.",
    sceneHorizontal:
      "Némkardi y Námsiku observan huellas humanas que cambian en huellas de jaguar alrededor de San Miguel, sin mostrar violencia",
    sceneVertical:
      "un árbol nacido sobre el antiguo mundo acuoso separa a una comunidad de dos sombras transformadas",
    researchNotes:
      "TÍTULO: se evita usar canibalismo como gancho. TÉRMINO: maluteyauye se conserva sin equivalencia inventada.",
  }),
  myth({
    slug: "naowa-entrega-el-gobierno-a-su-hijo",
    relatoCorto:
      "El relato de Chaves ocupa menos de doscientas palabras y no admite más sin inventar: la narración es una sola secuencia de comprobaciones —el poporo, la cocina, el bautizo, el bastón, la barba— y no hay una segunda escena. Lo que falta no es extensión sino episodios, y los episodios sólo existirían si se fundiera con la versión de Benito Sontinkama o con la del tomo II, que cuentan otra cosa.",
    sourceKeys: [
      "chaves1947",
      "reichel1950",
      "preuss1993",
      "reichel1987",
      "pes2017",
      {
        key: "gonzalezinterpretacion2009",
        summary:
          "Transcribe íntegro el pasaje paralelo del Poema de la Creación recogido por Reichel-Dolmatoff: la Madre 'parecía entonces como un hombre. Tenía barba y bigote y llevaba poporo, como los hombres', ordenaba a sus hijos hacer oficios de mujer y por eso no la respetaban, hasta que 'entregó sus poporos a sus hijos y también bigote y barba' y ella misma se puso a traer agua, cocinar y lavar. Es el mismo movimiento del relato de Naowa —intento de barba y bigote, entrega del poporo, reparto de tareas— en otra versión y en otro registro, lo que muestra que no es un episodio aislado de la transcripción de Preuss.",
        limitation:
          "La lectura interpretativa es junguiana (arquetipos, inconsciente colectivo) y no etnográfica: sirve por la transcripción del mito, no por el análisis. Trabaja la versión de Reichel-Dolmatoff, no la de Preuss, y no nombra a Naowa en ningún momento.",
      },
      "mellconcepcion2013",
      "mogollonGonzalezCreacion2024",
      {
        key: "zapataMujicaMascaras2025",
        summary:
          "Es lo más cercano que existe a un estudio del Tani-Cansamaría, el conjunto de bailes solemnes de una semana que da nombre a la casa ceremonial que el relato llama 'Kansa María'. Muestra que la autoridad allí es estrictamente jerárquica y heredada —no cualquier mama puede portar las máscaras— y que los centros ceremoniales funcionan como observatorios y como puntos de redistribución de la producción. Sirve para que la ficha explique qué clase de gobierno es el que Naowa entrega.",
        limitation:
          "La base documental son fotografías y notas de campo de misioneros seglares entre 1973 y 1981, un archivo con sus propios sesgos evangelizadores que los autores discuten pero no eliminan. No analiza ningún relato mítico ni nombra a Naowa.",
      },
      {
        key: "cardonajaguar2020",
        summary:
          "Muestra el poporo en funciones de gobierno dentro de los propios relatos: Búnkua-sé llama al transgresor 'al templo o cansamaría', lo aconseja y lo castiga golpeándolo con el palito del poporo, que aparece como instrumento de sanción junto con el soplo vital. Registra además a 'Haba Kasumma' o 'Haba-sé' (Madre-pene) como una diosa descrita con barba y bigote y desempeñando roles masculinos, el mismo rasgo que la ficha atribuye a Naowa.",
        limitation:
          "Analiza el corpus de Reichel-Dolmatoff y no el de Preuss, de modo que no comenta el episodio de Naowa. Es un trabajo de crítica literaria con aparato greimasiano; las 'secuencias' e 'isotopías' son categorías del autor, no de los narradores koguis.",
      },
      {
        key: "wittestructure2020",
        summary:
          "Da la lectura interna del reparto que la ficha se cuida de no presentar como mandato: los mamas son el sol y trabajan de día, y son complementados por el conocimiento de sus esposas las sajas, que son la luna y tienen poderes nocturnos. La distribución aparece así como complementariedad cosmológica y no como jerarquía doméstica, lo que permite conservar el argumento documentado sin convertirlo en justificación de desigualdad.",
        limitation:
          "El autor trabaja desde el Tairona Heritage Trust y escribe en clave de defensa del pensamiento kogui, con poca distancia crítica. No menciona a Naowa ni ningún relato de origen con nombres propios; el material es de trabajo reciente, no del registro de 1915.",
      },
    ],
    title: "Naowa entrega el gobierno a su hijo",
    summary:
      "Naowa forma a un hijo, le entrega poporo, bastón y autoridad, y el relato distribuye tareas dentro de un orden primordial.",
    tags: ["Naowa", "gobierno", "poporo", "autoridad"],
    mito: `Sintana era hijo de Naowa, pero Búnkuase se lo había quitado.

Al principio Naowa llevaba poporo y comía haiu, que es la coca. Tenía también su Kansa María, la casa ceremonial, y era ella quien hacía justicia: reunía en sus manos todas las funciones que después cumplirían los Mamas. Le habían salido barba y bigote. En aquel tiempo el reparto del trabajo iba al revés del de ahora, porque los hijos cocinaban mientras las mujeres estaban en la casa ceremonial, y los hombres desempeñaban los quehaceres que hoy son de las mujeres.

Un día Naowa se miró y vio que aquello no le lucía. Vio que el poporo sí luce en el hombre. Vio que la barba y el bigote tampoco le quedaban bien a ella.

Entonces Madre Naowa hizo un invento: hizo un hijo. Le entregó su poporo, y vio que al hijo sí le lucía. Ella se fue a cocinar, y vio que cocinar sí le quedaba bien. El hijo bautizó su poporo, y desde el bautizo le lució todavía mejor. Naowa le dio después un bastón, y con el bastón quedó mejor aún.

Naowa tenía bigote y barba. Se los quitó y se los entregó también al hijo, y el hijo quedó muy bien.

Ése fue el invento de Madre Naowa. Desde entonces los hombres tienen Kansa María, poporo y haiu, y son ellos quienes hacen justicia. Las mujeres cocinan.`,
    historia: `Este relato lo narró Seye Ababi Makó, de veinticinco años, cabo del mama Ignacio Abiguí de Tucurinca, en el Alto Río Sevilla. Lo recogió Milcíades Chaves Ch. en noviembre de 1946, durante una estadía en el grupo de San Andrés, en la Sierra Nevada de Santa Marta, adonde viajó con Gerardo Reichel-Dolmatoff y Alicia Dussán de Reichel-Dolmatoff. Salió publicado al año siguiente como el decimocuarto de los veintidós relatos de «Mitología kágaba», en el Boletín de Arqueología, volumen II, números 5 y 6, con el encabezado «Informador: Seye Ababi Makó» sobre el texto. Chaves advierte de entrada en qué condiciones obtuvo el material: no hablaba kogui y tuvo que verificar los interrogatorios en castellano, lengua que sus interlocutores no manejaban con destreza, de modo que, escribe, «muchas veces los conceptos vertidos al castellano hayan sido deformados».

Dos cosas del aparato de Chaves conviene separar de lo que dijo el narrador. La primera es el nombre de la casa: Chaves glosa «Kansa-María» entre paréntesis como «Casa Ceremonial» cada vez que aparece, y en el cuerpo de su trabajo lo escribe sin paréntesis, «la Casa Ceremonial que ellos designan Kansa María o Iglesia del Mama es el centro de gravedad de toda la comunidad»; Reichel-Dolmatoff explica en 1950, en el tomo I de Los Kogi, de dónde viene el nombre: «Los Kógi comparan a veces a la Madre Universal con la Virgen María y llaman por esta razón a la casa ceremonial "cansamaría", es decir "casa de María"». Añade allí mismo que esas comparaciones sólo las hacen informadores que quieren complacer al investigador. No es una sustancia, ni un recipiente, ni un principio femenino: es el edificio donde se hace justicia y se mambea. La segunda cosa es la lectura del episodio: en su índice de personajes, Chaves escribe que Naowa «delegó todas sus funciones gubernativas en la persona de su hijo» y apostilla «Posible paso del Matriarcado al Patriarcado». Esa es la hipótesis de un etnólogo de 1946, no una frase del narrador.

El mismo índice identifica con Sintana al hijo que recibe el poporo, aunque la narración deja sin nombre al hijo que Naowa hace y sólo menciona a Sintana en la primera línea, para decir que Búnkuase se lo había quitado. Y equipara a la Madre bajo tres nombres que el sitio publica por separado: «Luitsama = Naowa, Wastora, la primera mujer, Reina Madre», casada con Seraira.

Queda por decir en qué condición se publica todo esto. En el Plan Especial de Salvaguardia firmado por los mamos de los cuatro pueblos de la Sierra se declara que el carácter del uso y manejo de ese conocimiento «no concibe la necesidad de su divulgación externa», y que la salvaguardia «tiene que ser completa, no puede ser parcial». Reichel-Dolmatoff, por su parte, anotó en 1950 que los mayores consideraban indeseable que los jóvenes aprendieran castellano porque temían que así divulgaran los grandes «secretos» de la tribu. Lo que aquí se lee es material recogido por terceros en esas condiciones y publicado por un instituto del Estado.`,
    versiones: `El mismo corpus trae este episodio contado dos veces, una por cada narrador, y las dos versiones no coinciden. La de Seye Ababi Makó es la de esta página. La de Benito Sontinkama está dentro del relato número quince, «La coca = Haiu», y allí la Madre no se llama Naowa sino la Magri, a quien Chaves identifica con Luitsama: fue la primera que comió poporo, tenía su Casa Ceremonial y también tenía bigote. Lo que desencadena el cambio no es mirarse, sino una prueba de cocina: Sintana fue a cocinar por mandato de la Magri y no quedó bueno; fue a coger coca, volvió a cocinar y tampoco; la Magri fue a coger coca, cocinó y todo quedó muy bueno. «Ella antes de que cogiera coca tenía bigote, pero vio que no le quedaba bien y se lo quitó.» Ahí no hay hijo fabricado, ni entrega de bastón, ni barba, y la consecuencia es otra: Sintana ordena que sólo las mujeres cojan coca, porque la mata se seca si la cogen los hombres, y que las mujeres no la coman.

Quien lea la reimpresión más circulada no encontrará esa segunda versión. En «Mitos y leyendas de Colombia», investigación y compilación de Eugenia Villa Posse, publicada en Quito en 1993, los relatos kogui de Chaves se reproducen con el rótulo «Relator» en lugar de «Informador», pero de los veintidós se omite exactamente uno, y es «La coca = Haiu». Desaparecen también los «Personajes de la leyenda» y la «Síntesis de la leyenda» que Chaves ponía al pie, cosa que el propio volumen anuncia al advertir que presenta los textos «sin notas explicativas», y la bibliografía registra dos veces el mismo artículo, una como «Mitología Kogui, No. 6» y otra como «Mitología Kabaga, Vol. II, No. 5 y 6».

Hay una tercera transcripción, y es la más citada fuera de Chaves. Procede del tomo II de Los Kogi, de Reichel-Dolmatoff, y dos estudios posteriores la reproducen desde su página 19: «La Madre parecía entonces como un hombre. Tenía barba y bigote y llevaba mochilas y poporo, como los hombres. Ella ordenó a sus hijos a hacer oficios de mujer como traer agua, cocinar, y lavar ropa. Eso no estaba bien. Así los hijos no la respetaban. Se burlaban de ella. Pero un día, la Madre entregó su poporo sus mochilas a sus hijos y también bigote y barba. Se puso a traer agua ella misma, a cocinar y a lavar ropa.» Los hijos son varios y ninguno fue fabricado para el caso, lo que entrega incluye las mochilas, y el motivo aparece dicho: la burla y la falta de respeto.

También se mueven las grafías. Búnkuase alterna con Búnkwase dentro del propio texto de Chaves, que escribe la primera forma veintidós veces y la segunda una; y la casa aparece como Kansa-María, Kansa María y Casa María en un mismo artículo, frente al «cansamaría» del tomo I.`,
    similitudes: `El mismo Milcíades Chaves había recogido un año antes, en la Guajira, un relato que da vuelta a la misma cuestión por otro camino. En «La India Worunka», publicado en 1946, se cuenta que «en aquel tiempo de Worunka las mujeres eran quienes compraban a los hombres por marido; era ellas quienes iban a sus casas a buscarlos», hasta que Mareiwa «se dio cuenta de que eso era muy feo» y dispuso que fuera el hombre quien buscara a la mujer y mandara en el hogar. El desenlace se parece y el mecanismo no: en la Guajira la inversión la decreta una divinidad exterior que juzga fea la costumbre, y viene acompañada de la ley del pago al padre; en la Sierra es la propia Madre quien se mira, decide y entrega, y nadie la juzga desde afuera.

Entre los chamí, en el material que Chaves publicó en 1945, «Awena» funciona con la misma gramática y en sentido contrario. Encerraron a la india en su primera menstruación, ella creció hasta hundirse en la tierra, y su hermana quedó de la cintura para abajo convertida en pescado y se declaró madre de los peces. El relato termina así: «Las dos muchachas nunca más volvieron y por eso ahora, durante la menstruación, no encierran a las indias.» También allí un episodio del tiempo antiguo explica una regla que hoy rige sobre las mujeres, pero lo que funda es el fin de un encierro y no el comienzo de un reparto de oficios y de objetos.

La coincidencia de forma entre las tres tiene una explicación menos mítica que ellas: los tres textos salieron del mismo etnólogo, en años seguidos, trabajando por interrogatorio en castellano con intérpretes bilingües, y el «por eso ahora» con que los tres cierran es a la vez una figura de los narradores y un hábito de quien transcribía.`,
    leccion:
      "Una insignia cambia de manos y con ella cambia el reparto entero del trabajo.",
    sceneHorizontal:
      "Naowa entrega a su hijo un bastón y un poporo ante una casa ceremonial sobria, sin trono ni coronación",
    sceneVertical:
      "el hijo sostiene bastón y poporo mientras varios caminos de responsabilidad se abren hacia la comunidad",
    researchNotes:
      "CONTEXTO: la distribución de género se atribuye y no se prescribe. OBJETOS: poporo y bastón no se vuelven accesorios exóticos.",
  }),
  myth({
    slug: "los-primeros-indios",
    relatoCorto:
      "El único registro de este relato tiene setenta y nueve palabras y no hay otro: es de los tres más cortos de los veintidós del conjunto y ninguna otra fuente narra el episodio. Lo que sigue es todo lo que se contó.",
    sourceKeys: [
      "chaves1947",
      "reichel1950",
      "preuss1993",
      "pes2017",
      {
        key: "cardonajaguar2020",
        summary:
          "Es el estudio más extenso que existe sobre Duginavi (Dugunawi) y lo define como \"el héroe cultural de tipo agrícola\": amo del fuego, conquistador del agua, que \"raptó en beneficio de los hombres el secreto de la fertilidad\". Analiza el relato completo: el conflicto con el suegro Nyíueldue por la mujer y por los alimentos, la bajada del cielo, y sobre todo la escena en que Duginavi aprende a trabajar observando a la Gente Makú, corta los árboles con rayo y trueno y donde cae su semilla el campo queda sembrado. Explica la siembra como aprendizaje y robo, no como donación.",
        limitation:
          "No trata a la madre de los alimentos ni a la yuca, el plátano y la malanga como hijas: esa parte del episodio heredado queda fuera. Tampoco aparece Ñiwiwe. El libro trabaja sobre el corpus publicado por Reichel-Dolmatoff, no sobre registros propios.",
      },
      {
        key: "wittestructure2020",
        summary:
          "Documenta con palabra de mamas vivos la figura que gobierna los alimentos: el Mama Luntana explica que la Madre enseñó que hay que pedir permiso para obtener comida pagándole a Húgukui, \"dueño y organizador de todos los alimentos y semillas del mundo\", y que sin ese permiso y ese pago no se puede cortar ni comer. Da el sustento etnográfico actual a la idea de que los alimentos son relaciones con dueño y no objetos disponibles.",
        limitation:
          "Húgukui no es la \"madre de los alimentos\" del episodio ni sus hijas son cultivos: es otra figura, masculina en la formulación recogida. El artículo trata el pagamento y la confesión; no narra ningún mito de origen de la siembra ni menciona a Ñiwiwe o Dugunawi.",
      },
      "gilDugunawi2025",
      {
        key: "garcialiteratura2021",
        summary:
          "Muestra los mismos cultivos del episodio funcionando como práctica diaria y como texto: el fogón como corazón de la casa y el trabajo colectivo que empieza cortando leña y sigue pelando \"la papa, la yuca, la malanga y el guineo\". Recoge además la palabra del Mama sobre el mar como Madre que da la vida y sobre la semilla: \"de ahí nació la tierra para que pudiéramos mantener nuestra semilla\".",
        limitation:
          "No narra el episodio de la madre de los alimentos ni el parentesco entre las plantas: los cultivos aparecen en la cocina, no en la genealogía. Enfoque literario-hermenéutico; revista accesible sólo por HTTP.",
      },
      {
        key: "cuencatierras2018",
        summary:
          "Aporta la contraparte agrícola del episodio: la buena tierra para la siembra es \"la hija negra de la Madre\", y el artículo verifica arqueológicamente la existencia de esos suelos negros antrópicos en la vertiente sureste. Añade el matiz que impide leer el mito como manual: los koguis actuales no siembran en la tierra negra pese a su fertilidad, porque es tierra de los antiguos.",
        limitation:
          "No trata la madre de los alimentos, ni las hijas-cultivo, ni a Ñiwiwe y Dugunawi: sólo el suelo donde se siembra. El resto del artículo es análisis de suelos y comparación amazónica. Texto completo verificado en la copia de Redalyc.",
      },
    ],
    title: "La madre de los primeros alimentos",
    summary:
      "Una mujer es madre de los alimentos: sus hijas son yuca, plátano y malanga, mientras Ñiwiwe y Dugunawi preparan la primera siembra.",
    tags: ["alimentos", "siembra", "Ñiwiwe", "Dugunawi"],
    mito: `Los primeros indios tuvieron una madre. Después de Kasaugue vino el padre del bastimento, que era una mujer. Ella tenía muchas hijas. La yuca era su hija. El plátano era su hija. La malanga era su hija. El único hombre era el maíz.

Entonces vinieron Ñiwiwe y Dugunawi. Ambos eran hombres y comenzaron a sembrar. Dugunawi comenzó a limpiar, a desmontar, a socalar, y Ñiwiwe a sembrar. Ellos fueron los padres del cultivo, los padres de los indígenas.`,
    historia: `Lo narró Seye Ababi Makó, cabo del mama Ignacio Abiguí de Tucurinca, y lo recogió Milcíades Chaves Ch. en noviembre de 1946 entre el grupo de San Andrés. Chaves lo publicó en 1947 como el decimosexto relato de Mitología kágaba, bajo el título «Los primeros indios» y con el rótulo «Informador: Seye Ababi Makó». Ocupa setenta y nueve palabras, y sólo dos de los veintidós relatos son más breves. Chaves lo acompaña de una lista de tres personajes —Kasaugue, Dugunawi, Ñiwiwe— y de una síntesis que repite el texto casi entero. Cuando lo comenta, lo lee dentro de un grupo de mitos «cuyo fondo es la preocupación del grupo por la alimentación» y dice que el relato «sitúa a la madre como dispensadora de protección y alimentos». La reimpresión de 1993 de Eugenia Villa Posse lo reproduce íntegro y cambia el rótulo por «Relator».

Conviene decirlo con todas las letras: fuera de Chaves y de esa reimpresión, ninguna fuente de esta lista trata a la madre de los alimentos con sus hijas. Ella no tiene nombre en ningún registro; el texto la presenta como «el padre del bastimento, que era una mujer», y esa es toda su identificación. Ñiwiwe no aparece en ninguna otra de las fuentes consultadas, ni en el tomo I de Los Kogi. La yuca, el plátano y la malanga como hijas, y el maíz como el único hombre, tampoco. El segundo tomo de Reichel-Dolmatoff, al que este sitio atribuía el relato, sigue sin acceso: si hay más sobre esta figura, está ahí o no está.

Lo que sí hay alrededor es otro material. Fabio Gómez Cardona dedica el estudio más extenso que existe a Duginavi, al que define como «el héroe cultural de tipo agrícola», pero en un relato distinto, donde aprende a trabajar observando a la Gente Makú y donde la siembra es aprendizaje y robo, no herencia. Falk Parra Witte documenta con el Mama Luntana que el dueño y organizador de todos los alimentos y semillas del mundo es Húgukui, figura masculina, y que hay que pedirle permiso y pagarle antes de cortar o comer. Cenexan Nacogui Gil, autor kogui-wiwa, publicó en 2025 un cuento sobre Dugunawi que termina en el cuidado de los pozos «porque morirían los padres que sostienen los alimentos». Leydi Johanna Pinto García muestra los mismos cultivos en la cocina y no en la genealogía. Son buenas fuentes para el marco; ninguna es un segundo testimonio de este episodio.`,
    versiones: `De este relato no hay una segunda versión: hay un solo testimonio, de un solo narrador, y todo lo demás que circula bajo estos nombres cuenta otra cosa. Decirlo importa, porque la ficha nombra a dos figuras que sí tienen literatura propia, y esa literatura no confirma este episodio sino que lo desplaza.

Dugunawi es el caso claro. En el tomo I de Los Kogi, Reichel-Dolmatoff escribe Duginávi, traduce el nombre como «hermano jaguar» y afirma que «el mito de Duginávi no es otra cosa que el relato del héroe solar bajo otro nombre»: allí es una figura solar, emparentada con Kashindúkua y con Námaku dentro del complejo del jaguar. Fabio Gómez Cardona desarrolla esa línea y lo presenta como héroe cultural agrícola que raptó en beneficio de los hombres el secreto de la fertilidad, que corta los árboles con rayo y trueno y donde cae su semilla el campo queda sembrado, después de aprender el trabajo espiando a la Gente Makú. Cenexan Nacogui Gil, en 2025 y en voz kogui-wiwa, cuenta un Dugunawi que sale cada día a la parcela pero en realidad fabrica máscaras, y a quien descubre su mujer Kaldikukui. En el relato de Seye Ababi Makó, en cambio, Dugunawi no roba, no vuela, no engaña a nadie: limpia, desmonta y socala, y Ñiwiwe siembra detrás de él. Son cuatro Dugunawi distintos y no deben fundirse en uno.

También cambia el nombre de la comunidad de origen. El relato es kágaba y así lo publicó Chaves; el cuento de 2025 se presenta como kogui-wiwa y mezcla deliberadamente las dos tradiciones de la Sierra.

Queda una tensión gramatical dentro del propio texto que ninguna edición ha resuelto y que no hay que resolver por ellas: «el padre del bastimento, que era una mujer». El término padre marca aquí origen o autoridad y no sexo, y el relato aclara enseguida que tiene hijas. La reimpresión de 1993 conserva la frase tal cual, con el paréntesis explicativo de Chaves, «(alimento)», intacto.`,
    similitudes: `El paralelo más exacto viene del mismo etnólogo y del año anterior. Milcíades Chaves publicó en 1946 sus mitos y cuentos guajiros, recogidos con el mismo método y con las atribuciones igual de completas —«Informador de los anteriores cuentos: Juancito Iguarán, de 70 años, perteneciente a la casta Pushiana; no habla castellano. Intérprete, Roberto Iguarán»—. Allí el origen del cultivo también se resuelve encargándoselo a alguien: Mareiwa manda a dos hombres a traer semillas y se las entrega todas a Worunka para que las sembrara y los indios pudieran mantenerse. Pero el relato guajiro sigue y castiga: los indios hicieron chicha, se emborracharon, y Mareiwa ordenó que se secaran las matas y que los veranos fueran largos, y por eso hay hambre y sed. En el relato kágaba no hay transgresión ni castigo. Los alimentos son hijas de una madre, dos hombres limpian y siembran, y el relato termina ahí.

El segundo paralelo está en la sierra vecina. En los mitos y cuentos chimila que Reichel-Dolmatoff publicó en 1945, la creación empieza justamente por la ausencia de cultivos —«Entonces no había árboles, ni maíz, ni yuca»— y el vacío lo llena Papá Grande haciendo un tigre y después a los hombres. Los alimentos no son parientes de nadie y nadie los siembra: aparecen como carencia y se resuelven creando otras criaturas. La diferencia mide bien lo que este relato hace, que es poner a las plantas en una genealogía antes de ponerlas en una roza.

Dentro del propio conjunto de 1947 hay un tercer contraste. En el relato del algodón, que narró Benito Sontinkama, la Magri tiene muchos niñitos que son como las plantas que dan alimento y entrega el algodón a Mamagakue por medio de Námsiku, que lo reparte. Allí los cultivos también son hijos, pero llegan por entrega y con intermediario. Aquí no los entrega nadie: ya están, y lo que empieza es el trabajo.`,
    leccion:
      "Los alimentos llegaron emparentados entre sí y la siembra fue un trabajo aprendido, no un regalo.",
    sceneHorizontal:
      "una madre central está rodeada por formas vegetales de yuca, plátano y malanga mientras Ñiwiwe y Dugunawi preparan una parcela",
    sceneVertical:
      "manos siembran yuca, plátano, malanga y maíz en franjas que descienden por una ladera de la Sierra",
    researchNotes:
      "TÍTULO: se sustituye el genérico primeros indios en la vista pública. TRADUCCIÓN: se conserva la tensión padre/mujer de la fuente.",
  }),
  myth({
    slug: "el-algodon-koguis",
    relatoCorto:
      "La narración de Benito Sontinkama ocupa setenta y cinco palabras en el impreso de 1947 y es la más breve de los veintidós relatos del artículo. El texto de arriba la cuenta entera y añade sólo las identificaciones de los personajes que el propio Chaves da en la misma página y en el índice de su capítulo. No hay otra versión de este episodio con la que alargarlo sin inventar.",
    sourceKeys: [
      "chaves1947",
      "reichel1950",
      "reichel1987",
      "pes2017",
      "loom1978",
      {
        key: "wittestructure2020",
        summary:
          "Da el marco contemporáneo exacto del episodio: existe Jugukui, descrito por los propios kogi como dueño y organizador de todos los alimentos y las semillas del mundo, y los sitios sagrados funcionan como jaba (madres) y jate (padres) de cada especie. El artículo insiste en que no se puede tomar una cosecha sin pedir permiso y pagar —cita al Mama Luntana diciendo que cuando las cosechas están listas no se puede ir, cortar y comer sin más—, que es la misma lógica de la ficha: recibir la semilla no basta, hay que cuidarla y responder por ella. Además documenta el uso material del algodón en las confesiones (aluna ishguashi): se descargan los pensamientos en trozos de algodón sostenidos entre dos dedos y se depositan en sitios sagrados como pago. El algodón aparece así como materia ritual viva, no solo como fibra textil.",
        limitation:
          "Es trabajo de campo contemporáneo (Tairona Heritage Trust) y no menciona a Magri, Mamagakue ni Námsiku; no puede usarse para reconstruir el relato de origen, solo para explicar qué hace hoy el algodón. El sitio del editor (revistas.universidadmayor.edu.co) responde con una pantalla de verificación anti-bots, así que la lectura se hizo en Redalyc, que reproduce el texto completo con la paginación original.",
      },
      "knowledgemochila2025",
    ],
    title: "El algodón entregado a Mamagakue",
    summary:
      "Magri entrega el algodón a Mamagakue por medio de Námsiku, y un primer semillero permite distribuirlo entre la gente.",
    tags: ["algodón", "Mamagakue", "Námsiku", "semillas"],
    mito: `La Magri tiene muchos niñitos que son como las plantas que dan alimento. Ella es la primera mujer y la madre de todo ser viviente, y también la llaman Luitsama. Uno de esos hijos suyos es el algodón.

Un buen día la Magri le dio el algodón a Mamagakue. El algodón era un indio. Mamagakue es un mama, y desciende también de la Magri.

Pero ella no se lo llevó en persona: se lo mandó a entregar con Námsiku, que es hijo suyo y hermano mayor de Nuánashe y de Kashindukue. Námsiku fue quien trajo el algodón a la tierra para beneficio de los indios.

Y lo repartió a todos los indios, porque hizo un semillero de algodón y regaló a todos los indios que había, para que lo cultivaran. Mamagakue recibió el algodón y lo cultivó.

Námsiku está ahora con Sintana, que es su hermano.`,
    historia: `Lo narró Benito Sontinkama, cabo del mama Julián en el grupo de San Andrés, y es el relato número dieciocho de los veintidós que Milcíades Chaves Ch. recogió allí en noviembre de 1946 y publicó al año siguiente en «Mitología kágaba», dentro del Boletín de Arqueología, volumen II, números 5 y 6. La narración ocupa setenta y cinco palabras: es la más breve de todo el artículo, y por eso este relato es corto. Casi todo lo que se sabe de los personajes no está en esas setenta y cinco palabras sino en las dos glosas que Chaves añade: la lista de personajes bajo el texto, donde Námsiku es «hijo de la Magri (Luitsama)» y Namagakue un «mama (sacerdote) descendiente de la Magri», y el índice de su capítulo de mitología, donde escribe que Námsiku «fue quien trajo el algodón a la tierra para beneficio de los indios».

Lo que el relato resume en la palabra «semillero» está descrito paso a paso en el tomo I de Reichel-Dolmatoff, que ninguna ficha de este sitio citaba y que ahora está en acceso abierto en el ICANH. Allí se lee que los kogui cultivan el algodón y lo elaboran como hilos y telas para vestidos y mochilas, que lo limpian con la mano sacando la semilla, y sobre todo dos cosas que la ficha anterior no decía. La primera: «Tanto los hombres como las mujeres hilan, pero el trabajo de tejer es privilegio exclusivo de los hombres». La segunda: que la torsión del hilo depende del sexo de quien hila, porque los hombres tuercen hacia la izquierda, de la rodilla hacia el cuerpo, y las mujeres hacia la derecha, del cuerpo hacia la rodilla. El mismo volumen añade que el hilo de coser es siempre doble y se tuerce sólo dentro de la casa ceremonial.

Ese volumen trae además un dato que ata el cultivo a un linaje con nombre. En la descripción del Túxe de los Hukuméiji dice que ellos «poseen» los cantos y bailes relacionados con la fruta kandjí y con el jaguar, y también con el cultivo del algodón. Los cantos del algodón no son de cualquiera: pertenecen a un grupo determinado, y el propio texto anota que hoy quedan muy pocos individuos de ese grupo. Las grafías kogui de ese volumen no se citan aquí porque el reconocimiento óptico del escaneo pierde tildes con frecuencia.

De lo que el algodón hace hoy hay testimonio reciente. Falk Parra Witte, en Tabula Rasa número 36 de 2020, documenta que los kogui descargan mentalmente pensamientos, emociones, sueños, acciones y recuerdos en trozos de algodón sostenidos entre dos dedos, que el mama los sacude y habla a esas esencias, y que después el algodón se deposita en un sitio sagrado: es la práctica que llaman aluna ishguashi. El mismo artículo recoge, de boca del mama Luntana, del eizuama alto de Takina, que hay que pedir permiso y pagar a Húgukui, «dueño y organizador de todos los alimentos y semillas del mundo», antes de cortar y comer una cosecha. Nada de eso nombra a Magri, a Mamagakue ni a Námsiku: explica qué hace el algodón, no de dónde vino.

Chaves advierte al abrir el artículo que trabajó por interrogatorios en castellano y que los conceptos pudieron quedar deformados, y el Plan Especial de Salvaguardia firmado por el Consejo Territorial de Cabildos declara que este sistema de conocimiento «no concibe la necesidad de su divulgación externa». Lo que aquí se publica llegó por esa vía y conviene leerlo sabiéndolo.`,
    versiones: `De este episodio hay un solo testimonio, el de Benito Sontinkama en 1946, y la reimpresión de Eugenia Villa Posse de 1993 lo reproduce sin añadir narrador nuevo. Un testimonio único de setenta y cinco palabras deja sin respuesta casi todo: no se dice dónde queda el semillero, ni cuánto tardó, ni qué pasó con el algodón que era un indio después de ser entregado.

Dentro de esas mismas dos páginas impresas hay dos lecturas que no coinciden y que conviene no resolver. La narración dice que la Magri le dio el algodón a Mamagakue pero se lo mandó a entregar con Námsiku, «quien lo repartió a todos los indios porque hizo un semillero de algodón»: ahí el semillero es obra de Námsiku. La síntesis que Chaves escribe debajo dice en cambio que «Mamagakue recibe el algodón y lo cultiva», y es esa segunda lectura la que esta página venía publicando, con el semillero en manos de Mamagakue. Las dos frases están en la misma fuente y a una página de distancia. La redacción de arriba conserva las dos seguidas, como están.

El nombre del que recibe cambia de grafía entre una frase y otra: Mamagakue en la narración, Namagakue en la lista de personajes. El lugar de Námsiku también se mueve de relato a relato dentro del mismo artículo: aquí es hijo de la Magri y hermano de Sintana, y en el relato del canibalismo es hermano mayor de Nuánashe y Kashindukue que acompaña al Mama a adivinar. La Magri es llamada además Luitsama en este texto y Magri Regina en el del maíz, narrado por el mismo hombre.

Ninguno de los tres nombres de este relato aparece en el tomo I de Reichel-Dolmatoff. Lo comprobé buscándolos en el texto completo: Námsiku, Mamagakue y Namagakue dan cero coincidencias en ese volumen, igual que Magri y Luitsama. El corpus del que sale esta página es el de Chaves, no el de Reichel-Dolmatoff, y el volumen que sí traería sus versiones, el tomo II, sigue sin acceso abierto.`,
    similitudes: `El paralelo más cercano de este archivo es ette ennaka y es casi una imagen invertida. En «Cómo los Chimila regalaron el algodón a los Aruacos», décimo de los veintiún relatos que el cacique Tangrutaya Mutsu le narró a Gerardo Reichel-Dolmatoff y que se publicaron en 1945, el algodón también baja con la gente: Papá Grande le dio al primer Ette una mochilita con semilla. Pero lo que el relato cuenta después es una transacción entre enemigos: un Aruaco llega a la casa de un Ette, pide semilla, recibe la advertencia de que si siembra algodón los suyos sabrán que estuvo allí y lo matarán, insiste, y se lleva un poco. Allí la semilla cruza una frontera hostil, beneficia a un solo hombre y no funda nada; aquí sale de la madre, pasa por un hijo y llega de una vez a todos los indios que había, convertida en semillero.

El segundo paralelo es wayuu y sirve para marcar quién trabaja la fibra. «Waleker, el origen del tejido», en la versión del autor wayuu Ramón Paz Ipuana, cuenta que de la boca de la tejedora nocturna salían hilos de colores, que Irunúu rompió la promesa y la perdió, y que los tejidos quedaron para que las mujeres los miraran de cerca, contaran los hilos, imitaran los dibujos y se los enseñaran unas a otras: el saber queda en manos de ellas. Entre los kogui, según el registro que Reichel-Dolmatoff levantó en los mismos años en que Chaves recogía este relato, ambos sexos hilan pero tejer es privilegio exclusivo de los hombres, y hasta la torsión del hilo se hace en sentido contrario según quién lo tuerza. La misma fibra reparte el trabajo en direcciones opuestas a un lado y otro de la Sierra.

La diferencia de fondo con los dos está en el mediador. En el relato ette el bien pasa de mano en mano y el riesgo lo corre quien pide; en el wayuu el don se pierde por una indiscreción y sobrevive copiado; aquí no hay pérdida ni riesgo, sino un encargo que se cumple: la madre manda, el hijo entrega y siembra, y el mama recibe y cultiva.`,
    leccion:
      "Una semilla repartida alimenta a más gente que un regalo ya terminado.",
    sceneHorizontal:
      "Námsiku entrega semillas de algodón a Mamagakue frente a un semillero blanco que crece en la Sierra",
    sceneVertical:
      "Mamagakue cuida plantas de algodón y distribuye semillas a varias familias sin mostrar textiles inventados",
    researchNotes:
      "CORRECCIÓN: no se añaden telares celestes ni ceremonias. DISTINCIÓN: algodón y maíz conservan mediadores y secuencias propios.",
  }),
  myth({
    slug: "el-maiz-koguis",
    relatoCorto:
      "La narración de Benito Sontinkama ocupa ciento diez palabras en el impreso de 1947. El texto de arriba la cuenta entera y le suma sólo las identificaciones de los personajes que Chaves da en la misma página. No existe otra versión publicada de este episodio con la que alargarlo: el volumen que las traería, el tomo II de Reichel-Dolmatoff, no está en acceso abierto en ninguna parte.",
    sourceKeys: [
      "chaves1947",
      "reichel1950",
      "reichel1987",
      "pes2017",
      {
        key: "wittestructure2020",
        summary:
          "Es la fuente que explica, en términos kogui actuales, por qué el mito pone el acento en conservar y no solo en conseguir. Describe a Jugukui como dueño y organizador de todos los alimentos y semillas del mundo, y los sitios sagrados como jaba y jate (madres y padres) de cada especie: hay un responsable nombrado detrás de cada planta, igual que Niwalui responde por las semillas. Documenta que la cosecha exige permiso y pago previos y que la adivinación (íltueld) determina qué pago y qué confesión corresponde a cada caso, lo que da contenido concreto a la frase de la ficha sobre los mamos que «podían comunicarse con él y mantener la relación con las semillas».",
        limitation:
          "No menciona a Regina, Luitsama, Seraira ni Niwalui, ni Takina ni San Miguel como escenarios del relato; el paralelo entre Jugukui y Niwalui es una analogía funcional, no una identificación que la fuente autorice. Trabajo de campo reciente, leído en Redalyc porque el sitio del editor está tras verificación anti-bots.",
      },
      {
        key: "cardonajaguar2020",
        summary:
          "El capítulo «Duginavi, el héroe cultural» analiza el otro relato kogui de origen agrícola y aporta el paralelo más pertinente para el final de esta ficha. Duginavi sube al cielo, quiere aprender a sembrar con la Gente Makú —los amos de la agricultura—, aprende a desbrozar con el rayo y el trueno, pelea por sus sembrados, huye hacia la Guajira y termina convertido en una inmensa columna de piedra a la orilla de una laguna. Es decir: en el corpus kogui, el personaje que trae o asegura el cultivo termina como piedra permanente en el territorio, que es exactamente lo que la ficha dice de Niwalui sin poder explicarlo. El autor incluso propone que el relato juega con koggi (hombre) y kaggi (piedra). El libro también reúne y clasifica los relatos kogui publicados y su índice temático de motivos («héroe que viaja al reino lejano», «amo de la agricultura») permite ubicar este episodio sin fundirlo con los demás.",
        limitation:
          "Analiza a Duginavi, no a Niwalui: la fuente no dice que sean el mismo personaje ni la misma historia, y usarla para completar el episodio de Regina sería precisamente la operación que la ficha evita. El aparato teórico es de historia de las religiones (Eliade, Propp, semiótica narrativa) y las conclusiones simbólicas son del autor; trabaja sobre traducciones al castellano de Preuss y Reichel-Dolmatoff, no sobre la lengua kogui.",
      },
      {
        key: "zapataMujicaMascaras2025",
        summary:
          "Explica la máquina social que hay detrás de «conservar y repartir las semillas». Muestra que la casa ceremonial (nuhué/cansamaría) funciona como observatorio astronómico y que el mama sigue en ella el movimiento solar para gobernar los ciclos agrícolas y redistribuir la producción entre los miembros de la sociedad, y que los bailes solemnes del Tani-Cansamaría, que duran cerca de una semana, buscan renovar los ciclos de fertilidad. Nombra a Takina —uno de los dos lugares donde la ficha sitúa el episodio— entre los asentamientos kogui de mayor jerarquía, junto con Makotama y Saizhua. Da así un anclaje documentado, con archivo fotográfico y diarios de campo de 1973 y 1981, para que Takina no quede como un topónimo decorativo.",
        limitation:
          "No trata el relato de Regina ni de Niwalui ni menciona el maíz por su nombre; lo que aporta es contexto institucional, no narrativo. La fuente primaria es un archivo misionero (USEMI), producido por seglares católicas, con los sesgos propios de la mirada misional, y los autores trabajan sobre ese archivo, no sobre campo propio. La caracterización de los kogui como «el último cacicazgo teocrático sobreviviente del continente» es una tesis discutida que conviene no repetir como dato.",
      },
      {
        key: "witteecologia2025",
        summary:
          "Sostiene que la ecología kogui no es una metáfora sino un sistema con principios cosmológicos explícitos para sostener la vida, y organiza esos principios como equilibrio, deterioro y renovación. Sirve para la última idea de la ficha —la semilla como memoria territorial que debe guardarse, consultarse y volver a la tierra— sin tener que recurrir a lenguaje de espiritualidad genérica: el texto ubica esas prácticas en el marco de las amenazas ambientales y presiones actuales sobre el territorio, y en la discusión académica sobre el Antropoceno en el área ístmico-colombiana.",
        limitation:
          "Solo pude leer la ficha del artículo y su resumen en el sitio del editor; el enlace directo al PDF que ofrece el portal entra en un bucle de redirecciones, así que no verifiqué el cuerpo del texto. No menciona el maíz, ni a Niwalui, ni el episodio de las semillas: es un marco conceptual general sobre ecología kogui y debe citarse solo para eso.",
      },
    ],
    title: "Niwalui y las semillas del maíz",
    summary:
      "Regina o Luitsama trae semillas de alimento y su hijo Niwalui las siembra, las conserva y permanece como piedra blanca.",
    tags: ["maíz", "Niwalui", "Regina", "semillas"],
    mito: `Magri Regina, que en lengua de indios se llama Luitsama, es mujer de Seraira. Los dos son los primeros seres vivientes, y ella es la primera mujer, la Reina Madre.

Ella trajo de otra parte del mundo toda clase de semillas en una mochila: maíz, fríjol, malanga, ñame y papa.

Se las entregó a su hijo, que vive en Takina de San Miguel. Ese hijo no se murió, sino que se volvió piedra de blanco. Se llama Niwalui, y no se pierde nunca.

Solamente los Mamas de la Casa Ceremonial, la que llaman Kansa María, se ponen en comunicación con él.

Él fue quien sembró todas las semillas. No perdió ninguna de ellas, y se las dejó a su hijo, para que las cultivara y tuviera alimento para él y para los suyos.`,
    historia: `Lo narró Benito Sontinkama, cabo del mama Julián en el grupo de San Andrés, y es el relato número diecinueve de los veintidós que Milcíades Chaves Ch. recogió en la vertiente occidental de la Sierra Nevada en noviembre de 1946 y publicó en 1947 en el Boletín de Arqueología, volumen II, números 5 y 6. La narración ocupa ciento diez palabras, y por eso este relato es corto: todo lo que se cuenta arriba está en esas líneas y en la lista de personajes que Chaves pone debajo.

Hay una palabra del relato que este sitio venía explicando mal en las veinte fichas kogui. Chaves escribe «los Mamas de la Casa Ceremonial (Kansa María)», y el bloque compartido de estas páginas decía que era «una sustancia, recipiente o principio femenino según el pasaje». No lo es. El tomo I de Reichel-Dolmatoff, que ninguna ficha citaba, lo dice sin ambigüedad: los kogui comparan a veces a la Madre Universal con la Virgen María y llaman por esa razón a la casa ceremonial «cansamaría», es decir «casa de María». El mismo autor, en su artículo de 1975 sobre los templos kogui, precisa en nota que es una expresión española de origen misional colonial que sigue usándose entre la población mestiza, y no un término kogui.

Takina tampoco es un topónimo decorativo. El artículo de 1975 sitúa a Takina y Makotama entre los centros mayores, en las cabeceras del río San Miguel, y aclara que esos no son templos públicos abiertos a todos los hombres kogui sino santuarios donde se conservan objetos de culto. Juan Sebastián Zapata-Mujica y Santiago Forero Bedoya, en el Boletín de Antropología de la Universidad de Antioquia, nombran a Takina entre los asentamientos kogui de mayor jerarquía junto con Makotama y Saizhua, y describen la casa ceremonial como el lugar desde donde el mama sigue el movimiento solar para gobernar los ciclos agrícolas. Y el mama Luntana, a quien Falk Parra Witte entrevista en Tabula Rasa número 36 de 2020, es presentado como mama del eizuama alto de Takina: el lugar del relato sigue habitado y sigue teniendo autoridades.

De ese mismo artículo sale el único apoyo contemporáneo para lo que el relato dice del encargo. Parra Witte documenta que hay que pedir permiso y pagar a Húgukui, «dueño y organizador de todos los alimentos y semillas del mundo», antes de cortar y comer una cosecha, y que la adivinación determina qué pago y qué confesión corresponden en cada caso. Es una analogía de función con Niwalui, no una identificación: ninguna fuente dice que sean el mismo.

Un dato sobre el maíz, que pertenece al cultivo y no a la narración. El tomo I de Reichel-Dolmatoff registra cinco variedades de maíz entre los kogui: una blanca, que los colombianos vecinos llaman «maíz puya»; una amarilla; una roja de tierra fría y mazorcas pequeñas; una roja que se come sólo en las ceremonias; y una «casada», blanca y negra o morada. Las grafías kogui de esa página no se reproducen aquí porque el reconocimiento óptico del escaneo las dañó.

Chaves advierte al abrir el artículo que trabajó por interrogatorios en castellano y que los conceptos pudieron quedar deformados; y el Plan Especial de Salvaguardia firmado por el Consejo Territorial de Cabildos de la Sierra declara que este sistema de conocimiento «no concibe la necesidad de su divulgación externa».`,
    versiones: `De este episodio hay un solo testimonio, el de Benito Sontinkama, y la reimpresión de Eugenia Villa Posse de 1993 lo reproduce sin añadir narrador nuevo. Con ciento diez palabras queda fuera casi todo: no se dice de qué parte del mundo vino la mochila, ni cómo se volvió piedra el hijo, ni quién es el hijo del hijo a quien le deja las semillas.

El nombre del guardián aparece con tres grafías en el mismo artículo: Niwalui en la narración, Niwalwi en la lista de personajes que va debajo, y Niwali en el índice general del capítulo de mitología. No hay manera de decidir entre ellas desde este impreso, y el volumen que traería otras versiones, el tomo II de Reichel-Dolmatoff, sigue sin acceso abierto.

El nombre de la madre también viene doble y conviene no maquillarlo. Chaves escribe «Magri Regina, que se llama en lengua de indios, Luitsama», y la glosa debajo dice «la primera mujer o Reina Madre». Regina es palabra castellana, y su presencia en la transcripción es un hecho del interrogatorio de 1946, hecho en castellano con hombres que no manejaban esa lengua con destreza, no necesariamente un nombre kogui. El otro relato del mismo narrador llama a la misma figura simplemente la Magri.

Hay un detalle del final que esta página había perdido: Niwalui no sólo siembra y se queda, sino que «las dejó a su hijo». El relato no termina en la piedra, termina en una herencia. Y convertirse en piedra no es aquí un rasgo exclusivo suyo: en el relato inmediatamente siguiente, narrado por el mismo hombre y en la misma página, Susabanka nace del Sol y tampoco se muere, sino que se hace piedra. Es un desenlace recurrente en esta serie, no una marca propia del maíz.

Sobre el episodio de Dugunawi, que aparece dos relatos antes limpiando y preparando la tierra con Ñiwiwe, y que Fabio Gómez Cardona analiza en su libro de 2020 como héroe cultural que termina convertido en una inmensa columna de piedra a la orilla de una laguna en la Guajira: es otro relato y otro personaje. Ninguna fuente los identifica, y aquí no se los junta.`,
    similitudes: `El paralelo más cercano de este archivo es ette ennaka y opone dos maneras de conseguir lo mismo. En «La ceiba que guardaba el maíz», octavo de los veintiún relatos que el cacique Tangrutaya Mutsu le narró a Gerardo Reichel-Dolmatoff y que se publicaron en 1945, la semilla está guardada arriba, en algo como una tusa en lo más alto de una ceiba, y el árbol se compone solo cada noche y crece más, hasta que los hombres deciden no volver a sus casas y lo tumban a medianoche. Allí el maíz hay que arrancárselo a un árbol con trabajo colectivo y sin ayuda de nadie. Aquí no hay obstáculo: la madre trae las semillas en una mochila desde otra parte del mundo y se las entrega a su hijo, y todo el peso del relato cae sobre lo que viene después, que es no perderlas.

El segundo es yukpa: «Mé, el dueño del maíz», publicado en yukpa y español dentro de Territorios Narrados con autorización de los mayores. Una ardilla lleva el maíz cariaco al hijo de Mé, el cazador Atántocha reconoce el alimento donde otros lo despreciaron, y Mé sólo deja que el maíz llegue a la comunidad después de explicar que no se puede consumir todo, porque los mejores granos deben guardarse para una nueva siembra. La regla de conservar semilla está dicha allí en voz alta y enseñada; en el relato kogui cabe en una sola cláusula, sin explicación: sembró todas las semillas, no perdió ninguna y se las dejó a su hijo.

La diferencia de fondo con los dos está en quién queda a cargo. En la ceiba no queda nadie: se corta la tusa, se siembra el grano y el cuento se acaba. En el yukpa, Mé se retira y el cuidado pasa a las familias. Aquí el guardián no se va ni muere: se vuelve piedra en un lugar con nombre, y el acceso a él queda restringido a los mamas de la casa ceremonial. El maíz no se asegura con una regla ni con una fiesta, sino con una presencia fija y un canal estrecho.`,
    leccion:
      "Traer una semilla no alimenta a nadie si no queda alguien encargado de no perderla.",
    sceneHorizontal:
      "Regina entrega a Niwalui semillas de maíz, fríjol, malanga, ñame y papa entre Takina y San Miguel",
    sceneVertical:
      "una piedra blanca de Niwalui permanece junto a una parcela diversa mientras un mama se acerca con respeto",
    researchNotes:
      "CORRECCIÓN: se retiran viaje heroico y fiesta inventados. VARIACIÓN: Regina/Luitsama y piedra-transformación permanecen abiertos.",
  }),
  myth({
    slug: "el-arco-iris-susabanka",
    relatoCorto:
      "En el impreso de 1947 el relato ocupa nueve renglones y no tiene más episodios que estos. No hay otra fuente que narre a Susabanka: ninguna de las publicaciones posteriores, ni las etnografías contemporáneas hechas con mamas, lo nombran siquiera. Alargarlo sería inventarlo.",
    sourceKeys: [
      "chaves1947",
      "reichel1950",
      "pes2017",
      "decreto2018",
      {
        key: "reichelDolmatoffTemplos1975",
        summary:
          "Es la fuente más importante que encontré para esta ficha y obliga a matizarla en dos frentes. Primero, el Sol come, y lo alimentan mujeres: al penetrar con sus rayos al templo 'el sol come dos veces al día, como lo hacen todos los hombres', desayuna en un fogón y come en otro hasta llegar al equinoccio, y en los cuatro fogones son las mujeres de los cuatro Señores de las esquinas del universo las que le preparan la comida y lo atienden durante su visita. Eso da respaldo directo al núcleo de la ficha: que haya quien le busque y le lleve alimentos al Sol no es una rareza del episodio, es cómo funciona el Sol. Segundo, el Sol no es fiable: a veces se esconde, otras trata de quemar la tierra, hay eclipses, y por eso los mamas deben llamarle la atención sobre sus fallas y apaciguarlo cuando pone en peligro a la gente; los templos no son observatorios sino 'puestos de control del sol'. Y un dato que tensiona el título heredado: aquí el Arco Iris no pertenece a la casa del Sol, sino que es hija del dios del Trueno Kuabángui, junto con el Granizo, y vive con él y su mujer el Aguacero en un cerro cerca de San Francisco.",
        limitation:
          "No menciona a Susabanka por ese ni por otro nombre, y no narra el episodio del enviado, ni los alimentos concretos (plátano, yuca, malanga), ni la conversión en piedra. La atribución del arco iris al Trueno procede de otro punto del corpus y no cancela la versión del tomo II: son variantes, y la ficha debería decirlo así en la sección de versiones en vez de fundirlas. El PDF del ICANH es un escaneo sin capa de texto y no pude leerlo desde ahí; verifiqué el contenido en la copia con texto extraíble del mismo artículo en Semantic Scholar (pdfs.semanticscholar.org/0682/93f396cb970445fdd68b1059044378dd06fd.pdf).",
      },
      {
        key: "wittestructure2020",
        summary:
          "Traduce a práctica actual lo que el relato pone en tiempo mítico, y ayuda a que la ficha no presente la entrega de alimentos y personas como una excentricidad antigua. Documenta que se hacen pagamentos al sol, y que el mama convierte lo recogido de la gente en pagamentos a los Padres y Madres espirituales del Agua y los Alimentos para llamar la lluvia, hacer crecer los cultivos, 'impedir que el sol los queme' y prevenir enfermedad. Registra además que mama significa 'sol' y que estos hombres trabajan como el sol, alumbrando y calentando todas las cosas, lo que explica por qué el astro es al mismo tiempo modelo de autoridad y potencia peligrosa. La reciprocidad, muestra el artículo, es en términos kogui un asunto de alimentación mutua.",
        limitation:
          "No menciona a Susabanka, ni el arco iris, ni la entrega de mujeres y niños. Es etnografía contemporánea de pagamentos y confesiones, no mitología: el puente con el relato lo hago yo. El eje comparativo del artículo es andino y parte de su material sobre confesión proviene de los i'kʉ (arhuacos), no de los kogui.",
      },
      {
        key: "cardonajaguar2020",
        summary:
          "El capítulo 4 abre con 'Sintana el héroe solar' (pp. 105-117) y reúne el ciclo solar kogui al que pertenece este episodio. Caracteriza a Mulkuexe como el Sol, mama, dueño de mucho oro, 'como un sol pero malo', que quema la tierra o la oscurece y no quiere oír consejo, y a quien Sintana debe aconsejar y castigar: eso da a la ambivalencia solar de la ficha —alumbrar, enfermar, devorar a los muertos— un respaldo narrativo concreto. Aporta además una imagen que es casi el reverso de Susabanka: Enduksama, la estrella Venus, 'sale más temprano que el sol' y 'en su mochila trae bollos de maíz y al mediodía cuando el sol descansa, le da de comer'. Recoge también las esposas del Sol como mujeres míticas que son las constelaciones que debe atravesar en su ruta por el cielo.",
        limitation:
          "No menciona a Susabanka ni el arco iris; el libro está dedicado al complejo del jaguar y lo solar entra por la vía de Sintana. La identificación de las esposas del Sol con constelaciones y con un calendario etnoastronómico tairona la presenta el autor como probable, no como dato firme. Es análisis literario sobre versiones publicadas, sin campo propio.",
      },
      {
        key: "witteLiving2018",
        summary:
          "Sostiene, con campo reciente, que el Sol kogui es una persona y no una metáfora, lo que permite mantener en la ficha el lenguaje de encargo y obediencia sin pedir disculpas. La sección 3.2.3 'The sun and water' explica que el sol (ñiuwî, Padre Mokuákukui) es una persona con independencia de cómo se le represente, que agua (ñi) y sol (ñiuwî) están emparentados etimológicamente, y que mama significa 'sol' y también 'doble calor', de modo que estos hombres trabajan como el sol. Documenta que el Mama Shibulata convierte confesiones en pagamentos para asegurar que el sol no queme los cultivos, y describe la orientación de los bancos del nuhué respecto a la posición del sol al mediodía del 21 de junio. Sirve para no leer el episodio como astronomía disfrazada.",
        limitation:
          "No menciona a Susabanka ni el arco iris, y no narra ningún episodio del ciclo solar. Está en inglés y con ortografía kogui propia del autor. Es una tesis sobre política ambiental: el material cosmológico está subordinado a ese argumento, y procede de comunidades concretas, no de todo el pueblo kogui.",
      },
    ],
    title: "Susabanka, enviado del Sol",
    summary:
      "Susabanka nace del Sol, busca alimentos y personas para él y permanece como piedra dentro de un ciclo de luz, enfermedad y muerte.",
    tags: ["Susabanka", "Sol", "alimentos", "piedra"],
    mito: `Susabanka es el arco iris. Nació de Mama, que es el Sol, y no se murió sino que se hizo piedra.

Cuando el Sol tiene hambre lo manda a pedir comida. A Susabanka le gusta comer plátano, yuca y malanga, y también mujeres. Es casi como Námaku: les hace hijos y ellas dan a luz de él. Obedece los mandatos del Sol.

El Sol camina con la menguante y lleva también una estrella. Tiene muchas mujeres allá arriba, y de muchas de ellas tiene hijos.

El Sol manda las enfermedades. Los indios se mueren y entonces se los come. El Sol come gente.`,
    historia: `Lo contó Benito Sontinkama —también impreso Sontincama—, hombre de treinta y ocho años, cabo del mama Julián, respetado por todas las personas del grupo de San Andrés. Es el mito número 20 del conjunto que Milcíades Chaves Ch. recogió en San Andrés, sobre la vertiente occidental de la Sierra Nevada, en noviembre de 1946, en castellano, y publicó al año siguiente como «Mitología kágaba» en el Boletín de Arqueología, volumen II, números 5 y 6, hoy en el catálogo abierto del ICANH. El título impreso es «EL ARCO IRIS = SUSABANKA». Hay una línea que no debe perderse porque declara un eslabón más de la cadena: el narrador cierra diciendo «así lo dice el Mama Julián», es decir, atribuye lo que cuenta a su propio mama. Son cuatro manos, no dos.

Esta es la ficha más frágil del conjunto kogui, y conviene decirlo con todas las letras. Ninguna de las fuentes nuevas nombra a Susabanka. En el texto completo del tomo I de Los Kogi, de Reichel-Dolmatoff, el nombre aparece cero veces. No lo mencionan la tesis de Cambridge de Falk Xué Parra Witte, ni su artículo de 2025, ni su artículo de 2020 sobre nutrición e intercambio, ni el libro de Fabio Gómez Cardona sobre el jaguar, que sí reúne el ciclo solar. Tampoco hay fuente que trate el arco iris kogui como un enviado del Sol. De modo que lo que se publica aquí descansa en un solo testimonio, de un solo hombre, en una sola tarde de 1946, y así debe leerse.

Lo que las demás fuentes sí sostienen es el marco, no el episodio. Reichel-Dolmatoff, en Templos kogi (Revista Colombiana de Antropología 19, 1975), explica que al penetrar con sus rayos al templo «el sol come dos veces al día, como lo hacen todos los hombres», que desayuna en un fogón y come en otro hasta llegar al equinoccio, y que en los cuatro fogones son las mujeres de los cuatro Señores de las esquinas del universo las que le preparan la comida y lo atienden durante su visita. Que alguien le busque y le lleve alimentos al Sol no es, por tanto, una rareza de este episodio: es cómo funciona el Sol. El mismo artículo añade que el Sol no es del todo fiable, que a veces se esconde y otras trata de quemar la tierra, y que los templos son «puestos de control del sol». Parra Witte, en The structure that sustains life (Tabula Rasa 36, 2020), documenta que hoy se hacen pagamentos al sol y que mama significa sol, de modo que estos hombres trabajan como él, alumbrando y calentando; y Gómez Cardona reúne en su capítulo cuarto el ciclo solar kogui, donde aparece Enduksama, la estrella Venus, que sale más temprano que el sol y trae bollos de maíz en la mochila para darle de comer al mediodía, cuando descansa. Ninguno de los dos menciona el arco iris.

Un detalle interno que vale anotar: los tres alimentos que aquí pide el Sol —plátano, yuca y malanga— son exactamente los tres que el mito 16 del mismo conjunto, contado por el otro narrador, llama hijas del padre del bastimento, siendo el maíz el único hombre.`,
    versiones: `No hay variantes de este relato, porque no hay un segundo testimonio suyo. Lo que hay son otras cosas que las fuentes kogui dicen del arco iris, y que no coinciden con esta, y que por eso tensionan incluso el título heredado.

Reichel-Dolmatoff, en el tomo I de Los Kogi, recoge que hay dos arcos iris, hombre y mujer, que se distinguen por el tamaño, siendo la mujer más grande; que a veces aparecen juntos en el cielo y entonces están copulando, y que cuando aparecen así se dice que vendrá pronto el invierno. Es una pareja, no un enviado, y no se menciona al Sol. En el mismo pasaje sitúa al trueno como un gran jefe y señor que coge su machete y tumba los árboles del monte cuando tiene rabia, y al aguacero como una mujer que baila con él.

En Templos kogi, el mismo autor va más lejos y le da otro padre: el dios del Trueno es Kuabángui, y con su mujer, el Aguacero, y sus hijas, el Granizo y el Arco Iris, vive en un cerro alto cerca de la población de San Francisco. Ahí el arco iris no pertenece a la casa del Sol sino a la del Trueno, y es hija y no hijo.

Las tres versiones son de fuentes serias y no dicen lo mismo. Ni se funden ni se elige entre ellas: este dictado hace a Susabanka hijo del Sol y varón, el tomo I hace del arco iris una pareja de dos, y el artículo de 1975 lo hace hija del Trueno. Conviene recordar además que el nombre Susabanka aparece cinco veces en el impreso de 1947 y ninguna en el tomo I, lo que indica que las dos cadenas no están recogiendo el mismo material ni en los mismos años ni con las mismas personas.

Sobre las grafías, una advertencia: el escaneo del tomo I y el del artículo de 1975 pierden y alteran tildes con frecuencia —Kógi frente a Kogi, Séi frente a Sei—, de modo que ninguna palabra en lengua debe fijarse desde ellos. Las formas que esta página usa son las del impreso de 1947, que conserva sus acentos.

Una última precisión sobre lo que este relato no dice: no dice que Susabanka se lleve niños, ni que rapte mujeres para el Sol. Dice que le gusta comer plátano, yuca, malanga y también mujeres, y que les hace hijos.`,
    similitudes: `Entre los embera del Chocó, la misionera Hermana María de Betania recogió en Mitos, leyendas y costumbres de las tribus suramericanas (Madrid, 1964) que Tutricá, el dios de abajo, tiró al espacio un poco de agua que se convirtió en el arco iris; que cuando está oculto es un burro sediento que toma forma de arco para beber en las quebradas y los ríos; y que cuando aparecen varios arcos va a morir pronto un jaibaná. Otra versión del mismo material dice que el arco iris era un niño desmesuradamente grande, que creció tanto que no cabía en ninguna casa y resolvió enterrarse. El parecido está en que el arco no es allí una franja de colores sino un ser con hambre y con apetito de agua, y en que su aparición anuncia algo. La diferencia es de quién depende: ese arco es criatura del dios de abajo y su señal es la muerte de un jaibaná, no un encargo del Sol ni un cobro de comida. Conviene advertir que la compiladora era misionera y que ella misma declara haber reelaborado literariamente los textos.

Entre los murui del Amazonas, en el mito que Fernando Urbina publicó en Maguaré en 1986 sobre la crianza de Yarocamena, el hijo que se despide de su padre le anuncia que si algo le pasa lloverá mientras hace sol y el arco iris se verá rojo, y así será como el padre lo sepa; y cuando lo despedazan arriba, en este mundo llueve con sol y el arco iris se empaña, y el padre entiende. También ahí el arco iris trabaja como mensajero entre dos planos. La diferencia es el sentido del recado: allí sube un aviso de muerte desde quien la sufre hasta quien quedó abajo, mientras que en la Sierra el enviado baja a pedir de comer para quien lo mandó.`,
    leccion:
      "Lo que alumbra también pide de comer y a veces cobra en enfermedad.",
    sceneHorizontal:
      "Susabanka desciende desde el Sol por una banda curva de color hacia cultivos de plátano, yuca y malanga en la Sierra",
    sceneVertical:
      "la trayectoria solar termina en una piedra de Susabanka junto a los cultivos, con Luna menguante y una estrella arriba",
    researchNotes:
      "TÍTULO: se prioriza Susabanka sobre una leyenda genérica del arco iris. CONTEXTO: no se literaliza el consumo de personas.",
  }),
  myth({
    slug: "la-enfermedad-hiwiha",
    relatoCorto:
      "La narración de Benito Sontinkama ocupa unas noventa palabras en el impreso de 1947. El texto de arriba la cuenta entera, con las identificaciones que Chaves da debajo, y no la alarga: la ficha anterior llegaba a extensión completando el episodio con cuatro hijos que la fuente no tiene y con advertencias sobre sí misma, que es lo que esta revisión retira.",
    sourceKeys: [
      "chaves1947",
      "reichel1950",
      "reichel1987",
      "pes2017",
      "decreto2018",
      "carbonoDelahozPlantas2013",
      {
        key: "cardonajaguar2020",
        summary:
          "El capítulo «Kashindúkua: el chamanismo y la concepción de la enfermedad» reconstruye cómo el corpus kogui explica el origen de las enfermedades y muestra que hay más de una figura fundadora, no solo Hiwihá. Kashindúkua es enviado por la Madre como gran médico —sabía curar toda enfermedad, «comía» las enfermedades—, con una bola de piedra azul y una máscara que le permiten transformarse en tigre y cambiar de visión; abusa del poder, es castigado por Búnkua-sé y de ese castigo, dice el análisis, nacen las enfermedades y la muerte. La enfermedad aparece así como consecuencia de romper una medida, no como agente externo, que es la lectura con la que el relato de Hiwihá puede conversar sin forzarse.",
        limitation:
          "No menciona a Hiwihá ni a los Mulkokókwi ni a Palomino; es otro relato del mismo corpus, y la ficha no debe fundir ambos orígenes de la enfermedad. La reconstrucción de la «concepción kogui de la enfermedad» es del autor, apoyada en Eliade y en análisis narrativo, no una formulación kogui; trabaja sobre traducciones al castellano de Preuss y Reichel-Dolmatoff.",
      },
      {
        key: "wittestructure2020",
        summary:
          "Describe el sistema kogui de prevención y reparación en términos actuales y con nombres propios, que es el marco en el que hoy se entiende la enfermedad sin pasar por la biomedicina ni por el exotismo: los pagamentos (zubihi) y las confesiones (aluna ishguashi) como prácticas de conocimiento, y la adivinación (íltueld) como el mecanismo que determina qué pago y qué confesión corresponden, dónde, cuándo, por quién y a qué padres espirituales. Documenta también el gesto material de la confesión, descargando los pensamientos en algodón que luego se deposita en un sitio sagrado. Permite explicar que en el corpus kogui «enfermedad» nombra relaciones dañadas, tal como advierte la ficha.",
        limitation:
          "No trata el relato de Hiwihá ni el origen mítico de la enfermedad; su objeto es el intercambio alimentario. Es trabajo de campo contemporáneo y no puede proyectarse sobre los textos de 1915 o 1951. Leído en Redalyc porque el portal del editor responde con una pantalla de verificación anti-bots.",
      },
      {
        key: "witteecologia2025",
        summary:
          "Organiza el pensamiento kogui sobre el mundo en tres términos —equilibrio, deterioro y renovación— y trata el deterioro como categoría propia y no como metáfora prestada. Es el apoyo más limpio para la advertencia de la ficha sobre que «enfermedad» en este corpus puede abarcar alteraciones que no coinciden con la biomedicina: el artículo sitúa esas nociones en una ecología con principios cosmológicos explícitos y en la movilización política kogui frente a las amenazas ambientales sobre el territorio.",
        limitation:
          "Solo verifiqué la ficha y el resumen en el portal del editor; el enlace directo al PDF entra en un bucle de redirecciones y no leí el cuerpo. No menciona a Hiwihá, a Palomino ni el relato: es marco conceptual general. Su inscripción en el debate sobre el Antropoceno acerca el texto a un uso programático de las ontologías indígenas que conviene citar con distancia.",
      },
    ],
    title: "Hiwihá, madre de las enfermedades",
    summary:
      "Hiwihá llega a Palomino, participa en la distribución del territorio y queda allí como madre de enfermedades y de cuatro Mulkokókwi.",
    tags: ["Hiwihá", "enfermedad", "Palomino", "territorio"],
    mito: `La madre de las enfermedades vive en Palomino. Se llama Hiwihá, y solamente tiene mamá: no tiene papá.

Cuando Hiwihá vino a este mundo, la tierra se repartió en varias partes. Primero le dieron una parte a Alwawiku, que es gente. A Sintana le dieron todo Palomino. A Dukinawi, que vive en San Miguel, le dieron la parte de San Miguel, y a Hatleja, que lo acompaña, la otra parte.

La madre de estos cuatro indios se llama Mulkokókwi.

Hiwihá todavía vive en Palomino.`,
    historia: `Lo narró Benito Sontinkama, cabo del mama Julián en el grupo de San Andrés, y es el relato número veintiuno de los veintidós que Milcíades Chaves Ch. recogió en noviembre de 1946 y publicó en 1947 en «Mitología kágaba», dentro del Boletín de Arqueología, volumen II, números 5 y 6. La narración ocupa unas noventa palabras y es de las más breves del artículo; por eso este relato es corto.

Hay un parentesco que esta página tenía invertido y conviene corregirlo con la fuente delante. El texto dice que Hiwihá «solamente tiene mamá, no tiene papá», sin nombrar a esa madre, y dice después que «la madre de estos cuatro indios se llama Mulkokókwi», refiriéndose a Alwawiku, Sintana, Dukinawi y Hatleja, que son quienes reciben las partes de la tierra. Mulkokókwi es, pues, la madre de los cuatro que reparten, no cuatro hijos de Hiwihá; y la lista de personajes que Chaves pone debajo lo repite en los mismos términos. La versión anterior de esta ficha decía que Hiwihá tuvo cuatro hijos llamados Mulkokókwi, y sobre esa lectura advertía además, con razón, contra el reparto de cuatro enfermedades entre ellos. No había cuatro hijos que repartir.

El lugar del relato no es un sitio maldito, y hay con qué demostrarlo. Eduino Carbonó-Delahoz y Juan Carlos Dib-Diazgranados publicaron en Caldasia, volumen 35 número 2 de 2013, páginas 333 a 350, un inventario de las plantas medicinales usadas por los cogui en el río Palomino: ciento ochenta y nueve especies, incluidas en ciento sesenta y dos géneros y setenta y siete familias, con su modo de uso y su preparación, levantado en entrevistas con los mamos durante recorridos por zonas silvestres, cultivadas y huertas en los distintos pisos térmicos de la cuenca, y con el ochenta y nueve por ciento de las plantas obtenido de espacios silvestres. Palomino es una cuenca habitada, cultivada y conocida planta por planta, y quienes la conocen así son las mismas autoridades que el relato presupone.

De cómo se atiende hoy la enfermedad dentro del sistema kogui hay descripción con nombres propios. Falk Parra Witte, en Tabula Rasa número 36 de 2020, documenta los pagamentos y las confesiones —aluna ishguashi, donde se descargan pensamientos, emociones, sueños, acciones y recuerdos en trozos de algodón sostenidos entre dos dedos que luego se depositan en un sitio sagrado— y la adivinación como el procedimiento que determina qué pago y qué confesión corresponden, dónde, cuándo, por quién y a qué padres espirituales. No es un repertorio de remedios: es un modo de reparar relaciones, y explica por qué en este corpus «enfermedad» no se deja traducir sin más a un diagnóstico.

Y hay otro origen de la enfermedad en el mismo corpus, que no se funde con este. Fabio Gómez Cardona, en su libro de 2020 sobre el jaguar en la literatura kogi, reconstruye el relato de Kashindúkua, enviado por la Madre como gran médico que sabía curar toda enfermedad, que abusa del poder y es castigado, y sostiene que de ese castigo nacen las enfermedades y la muerte. Esa lectura es del autor y pertenece a otro relato: aquí la madre de las enfermedades tiene nombre, río y una sola madre, y nadie la castiga.

Chaves advierte al abrir el artículo que trabajó por interrogatorios en castellano, y el Plan Especial de Salvaguardia firmado por el Consejo Territorial de Cabildos de la Sierra declara que este sistema de conocimiento «no concibe la necesidad de su divulgación externa».`,
    versiones: `De este episodio hay un solo testimonio, el de Benito Sontinkama, y la reimpresión de Eugenia Villa Posse de 1993 lo reproduce sin narrador nuevo. Noventa palabras dejan fuera casi todo lo que querríamos saber: quién repartió la tierra, si Hiwihá recibió parte, por qué no tiene padre y qué relación hay entre su llegada y el reparto, que el texto pone seguidos sin unirlos con ninguna causa.

El nombre principal no está fijado ni siquiera dentro de esas dos páginas. El título lo escribe Hiwihá; la narración lo escribe Hiwihá, Hiwibá y Hiwila en tres frases distintas; y la lista de personajes lo escribe Hiwilá. Cuatro formas del mismo nombre en un texto de noventa palabras, y con ellas viaja una ambigüedad que no se puede resolver: la última frase del impreso dice «Hiwila todavía viven en Palomino», con el verbo en plural, de modo que no queda claro si el nombre designa a un ser o a un grupo. Lo mismo pasa con los demás: Alwawiku y Alawawiku, Hatleja y Hatleha, Mulkokókwi y Mulkukokwi, todos con dos grafías a una página de distancia. Es la huella de nombres tomados de oído en castellano, la lengua que, según el propio recopilador, sus interlocutores no manejaban con destreza.

Dukinawi merece una nota aparte porque el mismo artículo lo escribe de otro modo cinco relatos antes: allí es Dugunawi, y con Ñiwiwe limpia y prepara la tierra. El tomo I de Reichel-Dolmatoff escribe Duginávi y traduce el nombre como «hermano jaguar». Son tres grafías y probablemente la misma figura, pero la identificación no la hace ninguna de las tres fuentes y aquí no se da por hecha.

Del tomo I no se puede esperar ayuda para este relato: Hiwihá no aparece allí ninguna vez, como tampoco Mulkokókwi ni Alwawiku. El corpus del que sale esta página es el de Chaves, y el volumen que traería otras versiones del mismo material, el tomo II, sigue sin acceso abierto en ninguna parte.`,
    similitudes: `El paralelo más útil de este archivo es ette ennaka y muestra una enfermedad que funciona como cuenta. En «La enfermedad después de la guerra», número dieciséis de los veintiún relatos que el cacique Tangrutaya Mutsu le narró a Gerardo Reichel-Dolmatoff y que se publicaron en 1945, el cacique de los indios del Gran Río oye que van a atacarlo y anuncia que por cada hombre que maten morirá uno de los suyos de enfermedad, y por cada niño, un niño. No dice cuándo, ni de qué enfermedad, ni a quiénes. Allí la enfermedad es retribución, llega después de un acto y se cobra uno por uno. Aquí no hay culpa ni castigo: la madre de las enfermedades simplemente llega, hay un reparto de tierra y ella se queda donde se queda.

El segundo es wayuu y lo recogió el mismo hombre un año antes. «El Piache Umaralá» se publicó en 1946 en el Boletín de Arqueología, dentro de «Mitos, leyendas y cuentos de la Guajira», y se lo contó a Milcíades Chaves un informante nombrado, Juan Manuel Iguarán, de cuarenta y seis años, que dominaba el guajiro y el castellano. Allí una epidemia azota la Guajira, un muchacho empeora hasta perder el habla y el conocimiento, y su tía, que es piache, lo piacha día y noche hasta que entiende que la vida del sobrino exige una pérdida y entrega la suya, poniendo la maraca sobre el pecho del enfermo. La enfermedad tiene allí quien la cante, quien la discuta y quien la pague. En el texto kogui no hay cura, no hay curandero y no hay muerto: el relato se detiene antes de que la enfermedad haga nada.

La diferencia que los tres comparten y que conviene retener es la forma. Uno hace de la enfermedad una aritmética de guerra, otro un intercambio de una vida por otra, y este una geografía: una madre, un río y una permanencia. Que el nombre de un daño esté anclado a un lugar no dice nada malo del lugar, y el inventario botánico levantado en esa misma cuenca con los mamos lo confirma del modo más terrenal posible.`,
    leccion:
      "Nombrar el lugar donde vive una enfermedad no convierte ese lugar en un sitio maldito.",
    sceneHorizontal:
      "Hiwihá llega a Palomino entre río, bosque y mar mientras varios caminos territoriales se distribuyen hacia la Sierra",
    sceneVertical:
      "Hiwihá permanece junto al río Palomino con cuatro formas Mulkokókwi abstractas y no médicas a su alrededor",
    researchNotes:
      "CAUTELA: no se asignan diagnósticos a Mulkokókwi ni se estigmatiza Palomino. ALCANCE: la ficha no ofrece consejo médico.",
  }),
  myth({
    slug: "la-candela-gotze",
    relatoCorto:
      "La narración de Benito Sontinkama ocupa doscientas quince palabras en el impreso de 1947, y es todo lo que el primario da. La otra versión disponible, la que el ensayo de 2013 cita del tomo II de Reichel-Dolmatoff, contradice a esta en el nacimiento de Gotzé y en su destino final, de modo que mezclarlas para alargar habría fabricado un relato que nadie contó. Se cuenta entera la versión con narrador acreditado y la divergencia queda en Versiones.",
    sourceKeys: [
      "chaves1947",
      "reichel1950",
      "reichel1987",
      "pes2017",
      {
        key: "mellconcepcion2013",
        summary:
          "Es la única fuente nueva que reproduce el mito completo del fuego y lo comenta, y cambia la lectura del episodio. En la versión que cita (Reichel-Dolmatoff, tomo I, pp. 64-65), Sintána vive en la playa y pide fuego tres veces; la Madre se niega dos veces diciendo que el fuego hace daño, y a la tercera pare un niño al que llama Guxtsé-Fuego. Sintána sube al monte, halla árboles y piedras con algo de fuego «pero no era buen fuego», y pasa hambre. Entonces baja Guxtsé, quema el monte donde pisa, toma su arco y sus flechas y dispara al Norte, al Este, al Sur y al Oeste, y donde caen las flechas hay fuego; después vuelve a subir donde la Madre y se queda con ella. El ensayo añade el análisis etimológico que liga gaulcho/kulcha (semilla, semen) con gauksé/gukse (fuego), del que deriva el nombre Guxtsé.",
        limitation:
          "Cambia dos afirmaciones de la ficha y conviene decirlo: aquí Gotzé/Guxtsé no es un dueño que entrega la candela a Sintana, sino un hijo nacido a petición de Sintana, y es él mismo quien dispara las flechas; y no «sigue viviendo» en un lugar indeterminado, sino que vuelve con la Madre. Puede ser otra versión o una traducción distinta del mismo texto, pero la discrepancia no debe ocultarse. Además: es un ensayo presentado a un concurso, firmado con un nombre que no corresponde a un autor académico rastreable, sin filiación ni proceso de pares; su marco es filosófico y esencializante («herencia filosófica amerindia») y todos sus datos primarios provienen de Reichel-Dolmatoff.",
      },
      {
        key: "cardonajaguar2020",
        summary:
          "Confirma y documenta la escena inicial de la ficha: cita el relato kogui que dice que antes no había sol y «sólo los palos podridos alumbraban en el monte», y trabaja sistemáticamente la relación entre el fuego de procedencia vegetal (los palos podridos), el fuego celeste (el sol) y el oro como imagen mineral de ambos. En el capítulo «Sintana el héroe solar» señala que Sintana funciona en otros relatos como Padre del fuego, y en «Duginavi, el héroe cultural» lo presenta como amo del fuego, capaz de producir chispas frotándose las manos y de salir ileso de él. Aporta además un tercer nombre que el corpus asocia al fuego: Hirvuixa, hijo de Sintana y hermano de Bunkuéiji, llamado «el padre del fuego».",
        limitation:
          "No analiza el episodio de las cuatro flechas ni usa la grafía Gotzé; la abundancia de nombres —Guxtsé, Hirvuixa, Sintana como padre del fuego, Duginavi como amo del fuego— muestra que el corpus reparte la función del fuego entre varias figuras y que ninguna fuente autoriza a fundirlas. Lectura literaria y simbólica, con marco de Eliade y semiótica narrativa; trabaja sobre traducciones, no sobre la lengua kogui.",
      },
      {
        key: "reichelDolmatoffTemplos1975",
        summary:
          "Es el estudio que muestra dónde vive el fuego repartido del relato. Describe cuatro tipos de templo kogui (nuhué): el de aldea, el de los centros ceremoniales de la vertiente norte —nombra Noavaka arriba de Hukuméiji, Seízua arriba de San Miguel, Sekarino, Guinelake, Cerúa, Surlibaka y Mamarongo—, el de los centros mayores como Takina y Makotama en las cabeceras del río San Miguel, y el templo privado que algunos mámas construyen al llegar a cierta edad. Consigna que en cada templo hay varios fogones, junto con hamacas y bancas, y que el templo es un espacio sagrado delimitado en todas sus dimensiones. Sirve para hablar de fuego, orientación y espacio sin inventar cuevas ni rutas.",
        limitation:
          "El PDF de ICANH es un facsímil escaneado sin capa de texto; verifiqué las primeras páginas leyéndolas como imagen, de modo que las secciones astronómicas posteriores no las he comprobado una por una. No menciona a Gotzé, ni las cuatro flechas, ni el relato del origen del fuego: el vínculo con esta ficha es el espacio ritual y las direcciones, no la narración. Es un texto de 1975 con lenguaje de la época («sacerdote», «idolo») —aunque el propio autor aclara en nota que los mámas pueden designarse sacerdotes y no chamanes—, y anota que «cansamaría» es una expresión de origen misional colonial, no una palabra kogui.",
      },
    ],
    title: "Gotzé y las cuatro flechas de fuego",
    summary:
      "Después del nacimiento del Sol, Gotzé entrega el fuego a Sintana y cuatro flechas lo distribuyen hacia las direcciones del mundo.",
    tags: ["Gotzé", "fuego", "Sintana", "cuatro direcciones"],
    mito: `Cuando aún no había sol, no había nacido la candela. Sólo existían piedras de poco calor, y en el monte sólo había palo blanco podrido, de ese que de noche parece candela. Entonces Magri parió el sol y amaneció.

Después nació Sintana y también nació Gotzé. Más tarde hubo montes y árboles, y vinieron los indios: gente de toda gente pobló la tierra.

Sintana era vasallo de Magri. Antes tenía candela con piedra de calor, y eso era todo lo que había para asar y cocinar. Fue entonces donde Gotzé para que le diera un poco y traerlo a la tierra, para su comida y para la comida de los indios.

Se lo pidió una vez, y otra, y otra. Cuando ya le hubo pedido varias veces, Gotzé tiró cuatro flechas en cuatro direcciones: arriba, abajo, a la derecha y a la izquierda. Y así hubo candela en todas partes.

En ese tiempo Gotzé era un hombre. Después de que disparó sus cuatro flechas hay candela en todas partes, y él aún vive.`,
    historia: `Lo narró Benito Sontinkama, cabo del mama Julián en el grupo de San Andrés, y es el último de los veintidós relatos que Milcíades Chaves Ch. recogió en noviembre de 1946 en la vertiente occidental de la Sierra Nevada y publicó en 1947 como «Mitología kágaba», en el Boletín de Arqueología, volumen II, números 5 y 6. La narración ocupa doscientas quince palabras en el impreso: es de las más breves del conjunto, y por eso el relato de esta página es corto. Chaves acredita a su informador debajo del título, como hace en los veintiún relatos restantes, y advierte al comenzar el artículo que trabajó por interrogatorios en castellano y que los conceptos vertidos a esa lengua pudieron quedar deformados.

Dos frases que esta página venía publicando no vienen de la narración sino del índice de personajes que Chaves puso al frente de su capítulo de mitología. Ahí escribe: «Gotzé = Individuo que posee el fuego y lo entrega a los indígenas disparando cuatro flechas en la dirección de los puntos cardinales». Esa glosa convierte a Gotzé en un dueño que hace entrega de algo. La narración no dice eso: dice que nació, igual que Sintana, después de que Magri pariera el sol; que Sintana le pidió varias veces; que fue él mismo quien disparó las flechas; y que aún vive. La palabra «aún vive» es lo único que el texto dice de su paradero, y no nombra ningún lugar.

Hay una segunda versión y conviene decir de dónde sale. El ensayo de Hasury Mell «La concepción del fuego como principio femenino en la cosmogonía kaggaba», presentado al Premio Nacional de Crítica de la Universidad de los Andes y el Ministerio de Cultura en 2013, cita el mito completo y lo atribuye en su nota a Reichel-Dolmatoff, «Los Kogi», tomo II, edición de Procultura de 1985, páginas 64 y 65. Ese tomo II es el que diecinueve fichas de este sitio decían estar citando a través de un PDF que resultó ser otra obra; aquí sí es la fuente de algo, y sigue sin existir en acceso abierto en ninguna parte. El tomo I, que sí está abierto y que la revisión bajó del ICANH, no contiene el nombre Gotzé ni una sola vez.

Fabio Gómez Cardona documenta la escena de apertura en su libro de 2020 sobre el jaguar en la literatura kogi: cita el relato que dice que antes no había sol y que «sólo los palos podridos alumbraban en el monte», y trabaja la relación entre el fuego de procedencia vegetal, el fuego celeste y el oro. El mismo libro muestra que el corpus reparte la función del fuego entre varias figuras: Sintana funciona en otros relatos como padre del fuego, Duginavi aparece como amo del fuego capaz de sacar chispas frotándose las manos, y Hirvuixa, hijo de Sintana, es llamado padre del fuego. Ninguna fuente autoriza a fundir esos nombres en uno.

Del lugar donde vive el fuego repartido habla el artículo de Reichel-Dolmatoff de 1975 sobre los templos kogui: describe los tipos de nuhué, sitúa Takina y Makotama en las cabeceras del río San Miguel, consigna que en cada templo hay varios fogones y aclara en nota que «cansamaría», la palabra que este corpus hereda para nombrar la casa ceremonial, es una expresión española de origen misional colonial y no un término kogui.`,
    versiones: `Hay dos versiones de este episodio y no dicen lo mismo. La que sostiene el relato de esta página es la de Benito Sontinkama, recogida en San Andrés en 1946: Gotzé nace después del sol, igual que Sintana; Sintana, que es vasallo de Magri, le pide varias veces un poco de candela; Gotzé tira cuatro flechas arriba, abajo, a la derecha y a la izquierda; y al final era un hombre y aún vive.

La otra la reproduce el ensayo de Hasury Mell de 2013, citándola del tomo II de Reichel-Dolmatoff en la edición de Procultura, páginas 64 y 65. Allí Sintána vive en la playa del mar y no tiene fuego; pide a la Madre que le dé fuego para preparar su comida y ella responde: «No te daré fuego porque hace daño»; pide otra vez y ella vuelve a negarse; y por fin, cuando pide otra vez, la Madre pare un niño y lo llama Guxtsé-Fuego. Sintána sube de la playa hacia la montaña, encuentra muchos árboles pero no comida, mucha piedra pero no fuego, y algunas piedras finas y algunos árboles tienen algo de fuego «pero no era buen fuego»; pasa hambre, y el árbol de guayabo y la macana le dicen que no se los coma. Entonces baja Guxtsé a la tierra, donde pisa se quema el monte, coge su arco y sus flechas y dispara hacia el Norte, el Este, el Sur y el Oeste, y donde caen las flechas hay fuego. Después vuelve a subir donde la Madre y se queda con ella.

Tres cosas cambian y ninguna es menor. En la primera versión Gotzé ya está ahí cuando Sintana pide; en la segunda nace a causa de la petición, al tercer intento. En las dos es él quien dispara, pero los rumbos se nombran distinto: arriba, abajo, derecha e izquierda en una, y los cuatro puntos cardinales en la otra. Y el final se invierte: en una se queda entre los vivos, en la otra sube y se queda con la Madre. Pueden ser dos versiones o dos traducciones del mismo material, y aquí quedan las dos con su procedencia.

Sobre la fuente de la segunda conviene ser explícito. Es un ensayo presentado a un concurso, firmado con un nombre que no corresponde a un autor académico rastreable, sin filiación ni evaluación por pares, con un marco filosófico que habla de «herencia filosófica amerindia», y todos sus datos primarios vienen de Reichel-Dolmatoff. Suya, y no de ningún narrador, es también la etimología que liga gaulcho o gulcho con kulcha, semilla o semen, y kulcha con gauksé o gukse, fuego, para derivar de ahí el nombre Guxtsé. El mismo ensayo escribe en otra página la grafía Götze. Entre Gotzé, Götze y Guxtsé no hay forma de decidir desde estos textos, porque el tomo II no está disponible y las grafías del tomo I quedaron dañadas en el reconocimiento óptico.`,
    similitudes: `El paralelo más cercano de este archivo es ette ennaka y lo recogió el mismo año que este relato el compañero de campo de Chaves. En «Cómo los Chimila consiguieron el fuego», narrado por el cacique Tangrutaya Mutsu y publicado por Gerardo Reichel-Dolmatoff en 1945, el fuego lo tienen unos indios del otro lado del Gran Río y el brujo Huhum se cambia en el sapo Mamu para cruzar a nado, espanta a la gente que comía pescado alrededor de la candela, se traga una braza y la escupe en la otra orilla, y ya no vuelve a ser hombre. La arquitectura es opuesta: allí hay un río, un robo y un precio que paga el mediador; en San Andrés no hay río que cruzar, no se roba nada, y quien tiene el fuego lo dispara a los cuatro lados sin que nadie sea castigado.

El segundo es chamí: «Hímo, la iguana y la candela», en la transcripción de Río Frío de 1945. Allí el guardián esconde el fuego en su madriguera y lo niega, y por negarlo queda convertido en animal mientras los hombres gozan del fuego. Es el tipo de historia en que el acaparador pierde la forma humana. En la kogui no hay acaparamiento que castigar: Gotzé no niega nada, sólo hay que pedírselo varias veces, y al final sigue siendo un hombre.

El contraste vale también con el catálogo que el propio recopilador de 1945 puso al pie de su cuento del fuego, donde lista quién roba el fuego en otros pueblos: el colibrí entre los jívaros y los okaima, el ratón entre los matako, el buitre negro entre los tapieté, el sapo entre los chiriguano, los gemelos míticos entre los bakairi. En todos ellos el fuego se arrebata. En este relato el fuego se pide y se reparte por el aire, y lo que queda fundado no es la posesión de una cosa sino una orientación: cuatro direcciones, cuatro flechas y candela en todas partes.`,
    leccion:
      "Un bien esencial sólo es de todos cuando alcanza los cuatro rumbos y no un solo fogón.",
    sceneHorizontal:
      "Gotzé entrega a Sintana cuatro flechas encendidas que parten hacia los cuatro lados sobre montañas, bosques y ríos",
    sceneVertical:
      "una flecha de fuego asciende desde piedras tibias y palo blanco luminoso mientras el Sol nace sobre la Sierra",
    researchNotes:
      "CORRECCIÓN: no hay robo ni persecución. DIRECCIONES: no se inventan colores, pueblos o correspondencias rituales.",
  }),
  myth({
    slug: "guateovan",
    relatoCorto:
      "Esta ficha no procede de una narración oral sino de una síntesis de dos páginas que resume a un tercero; lo anterior es todo lo que esa síntesis afirma, una vez retirado su vocabulario evolucionista. No existe un relato continuo que contar, y llenarlo con material de otras fichas habría fabricado un mito que nadie narró.",
    sourceKeys: [
      "gauteovanCompilation",
      "preuss1993",
      "reichel1987",
      "pes2017",
      {
        key: "cardonajaguar2020",
        summary:
          "Resuelve de dónde viene el nombre de esta ficha: \"Haba Gaulchovang es el nombre de la Madre Primordial… Gaulchovang es el nombre más usado\", y reproduce la etimología de Reichel-Dolmatoff —gaulcho o gulcho de kulcha, semilla o semen; la terminación -vang de mangui, envolver— que da \"envoltorio, recipiente de la semilla\". Gauteován, Guateovan y Gualchován son grafías de este nombre, no de un personaje aparte. Además documenta que fue Duginavi el \"inventor y constructor de las máscaras rituales\", lo que sitúa el motivo de las máscaras dentro del corpus y no en el pacto que inventa la compilación.",
        limitation:
          "No comenta la compilación titulada Mitos y leyendas ni el supuesto pacto de los cuatro padres con espíritus que les quitan el rostro. Todo su material proviene de Reichel-Dolmatoff 1985, así que confirma el nombre pero no aporta un registro independiente.",
      },
      "gavilanEnsamblando2016",
      "zapataMujicaMascaras2025",
      "museumRestitution2023",
      {
        key: "gilDugunawi2025",
        summary:
          "Voz comunitaria actual sobre el origen de las máscaras, contra la que se puede medir la síntesis editorial: \"La Madre le enseñó, en pensamiento, a hacer las máscaras. Y él, con esa enseñanza, creó las leyes de cómo debemos vivir\". En el relato las máscaras son de agua y de colores, sirven para ver lo que hay detrás del río, y de su destrucción y recuperación sale la ley que sana las faltas. Nada de rostros arrebatados por espíritus ni de trofeos.",
        limitation:
          "El autor se identifica como kogui-wiwa y el texto es una composición literaria contemporánea, no un registro con narrador, lengua y fecha de recolección. No menciona a Gauteován, ni a los cuatro padres, ni los cerros de los muertos.",
      },
      {
        key: "garcialiteratura2021",
        summary:
          "Recoge la posición kogui sobre los objetos ceremoniales retenidos, en palabras del Mama Luis: \"Para nosotros es muy importante que nos regresen las piedras. Las Piedras del sol, del agua… Los materiales que están en el museo, porque sin ellos no podemos hacer el trabajo\". Es el argumento vivo detrás de la precaución de la ficha sobre no reproducir formas rituales, y viene de la misma comunidad y no de un curador.",
        limitation:
          "Habla de piedras y cuarzos, no de máscaras, y la cita procede de un documental (Madre Agua, 2016) citado de segunda mano. El artículo no trata a Gauteován ni la compilación que originó la ficha. Revista accesible sólo por HTTP.",
      },
    ],
    title: "Gauteován y la memoria de las máscaras",
    summary:
      "Una compilación antigua relacionó a Gauteován con la Madre, el Sol, cuatro padres, máscaras ceremoniales y los cerros de los muertos.",
    tags: ["Gauteován", "máscaras", "Sol", "recepción"],
    sourceMode: "gauteovan",
    mito: `En las estribaciones de la Sierra Nevada, al norte de Colombia, vive el pueblo de los kágabas, y entre ellos la deidad femenina se llama Gauteován. Ella figura como creadora de todas las cosas y como madre prístina de los hombres.

Sin embargo, en sus cultos el primer puesto lo ocupa el dios solar. Por eso los templos, o casas de fiesta, se llaman casas de sol y llevan en la cúspide del techo un símbolo solar compuesto con varitas. El dios solar es mirado como el mayor y más poderoso de los espíritus de la naturaleza.

Hubo un tiempo remotísimo, adonde no alcanza la memoria de los kágabas, en que existieron cuatro varones taumaturgos. Fueron los cuatro padres prístinos de las dinastías de sacerdotes y quedaron como los héroes máximos que civilizaron a sus antepasados.

Lo más trascendental que hicieron fue un pacto. Los hombres sólo pueden tener influencia sobre la naturaleza si logran identificarse con los espíritus que la regulan a su beneplácito; y esos cuatro patriarcas celebraron con el dios solar y con los demás espíritus un pacto irrompible en favor de los hombres. Para sellarlo, los espíritus, presididos por el sol, convinieron en quitarse el rostro, y llegó tan allá su afabilidad que les cedieron sus caras a los hombres. Desde aquellos tiempos inmemorables los kágabas llevan en sus danzas las caras de los espíritus a modo de máscaras. Las máscaras son de madera, tallas toscas de tipo extrañamente arcaico y de gran antigüedad.

Otra cosa tienen los kágabas de la Sierra Nevada por cierta: que los muertos habitan en los cerros más elevados. Los cerros más altos son el símbolo del cielo.`,
    historia: `Esta página no viene de un relator kogui ni de un registro de campo. Viene de una cadena de cuatro eslabones, y ninguno de los tres primeros es kággaba.

El primero es Konrad Theodor Preuss, que estuvo en la Sierra Nevada hacia 1915 durante su expedición a Colombia. El segundo es el etnólogo alemán Walter Krickeberg, que resumió a Preuss en su Etnología de América; la compilación que sostiene esta ficha cita exactamente «Etnología de América, III-4, p. 373, Méjico, año 1946». El tercero es esa compilación colombiana, Mitos y leyendas de Colombia, cuyo volumen III trae «Gauteován» como apartado 2.2, precedido por un capítulo sobre los chibchas y seguido, dos páginas después, por «Dobaida», el Dorado de Dabaiba. El cuarto eslabón fue esta ficha. La entrada de catálogo que el sitio citaba como fuente devuelve hoy un error 403; el texto se pudo leer porque el mismo volumen está archivado en este repositorio entre las fuentes primarias de la comunidad katía.

De qué está hecha esa síntesis se ve en su propia redacción. Presenta al pueblo kágaba como algo que «ha perdurado hasta nuestros días, en estado primitivo de cultura», llama a la Madre «por el estilo de la diosa Bachué de los Chibchas», habla de «demonios o espíritus de la naturaleza», y cierra comparando los cerros de los muertos con el Olimpo de Homero y con México. Ese vocabulario es del compilador y de su época, y no se reproduce aquí como voz comunitaria. También conviene saber qué opinaba del eslabón inicial quien trabajó con el mismo pueblo poco después: Reichel-Dolmatoff escribe en 1950 que en la obra de Preuss «los demás capítulos que tratan de religión, mitos y condiciones sociales» contienen errores fundamentales «tan frecuentes que sería casi imposible tratar de corregirlos uno por uno», y salva de ella justamente las descripciones de fiestas y las fotografías de máscaras. Es decir: la parte que este resumen amplificó es la que el otro etnógrafo consideraba inservible, y la parte que salvó es la de los objetos.

Y hay una cosa que esta ficha no es: una cadena documental aparte. Gauteován es otra grafía de Gaulchováng, la Madre. El tomo I de Los Kogi la nombra ocho veces y dice que los cuatro Padres del Mundo «descendían de una misma Madre, es decir, de la Madre Gaulchováng». Fabio Gómez Cardona reúne las grafías —Gauteován, Guateovan, Gualchován— y recoge la etimología de Reichel-Dolmatoff, que descompone el nombre en gaulcho o gulcho, de kulcha, semilla o semen, y la terminación -vang, de mangui, envolver: «envoltorio, recipiente de la semilla». Y Chaves, en 1947, ya escribía que la primera fuerza sobrenatural «es una mujer, personificada en Luitsama, Naowa, Wastora o la primera Magri». La Madre de esta página es la misma de la página de la creación, y el vínculo con el incesto original está en la fuente, no en la interpretación.

Sobre las máscaras, la ficha narra que existen y no reproduce su forma. El Museo Etnológico de Berlín declaró al devolverlas que Preuss obtuvo dos máscaras en 1915 «del heredero de un mama fallecido», que datan de mediados del siglo XV y que su venta «siempre fue inadmisible» según la ley religiosa kogui, porque sólo los mamas pueden tratar con esos objetos; fueron entregadas al presidente Gustavo Petro el 16 de junio de 2023. Con esa declaración sobre la mesa, describir diseños rituales sería seguir haciendo lo mismo con palabras.`,
    versiones: `Lo primero que hay que separar es qué parte de esta síntesis tiene respaldo y qué parte no lo tiene.

El nombre lo tiene, y abundante: Gauteován, Guateovan, Gualchován y Gaulchováng son grafías de la misma Madre, y las cuatro se documentan. Que sea creadora y madre de la gente lo confirman tanto Reichel-Dolmatoff como Chaves. Que los muertos se asocien con las alturas es compatible con todo lo que se sabe del territorio, aunque el resumen lo formule comparándolo con Grecia.

El pacto es otra cosa. Que cuatro padres celebraran un acuerdo con el sol y con los espíritus, y que éstos se quitaran el rostro y cedieran sus caras a los hombres, no aparece en ninguna otra fuente consultada. Y donde el corpus sí explica el origen de las máscaras, lo explica distinto. Gómez Cardona documenta que fue Duginavi el inventor y constructor de las máscaras rituales, y el tomo I de Los Kogi nombra a Séijakaxa, «Padre de las Máscaras». Cenexan Nacogui Gil, autor kogui-wiwa, lo cuenta en 2025 en primera persona comunitaria: «La Madre le enseñó, en pensamiento, a hacer las máscaras. Y él, con esa enseñanza, creó las leyes de cómo debemos vivir»; en su relato las máscaras son de agua y de colores, sirven para ver lo que hay detrás del río, y de su destrucción y recuperación sale la ley que sana las faltas. Nadie arrebata rostros y nadie los cede.

También chocan las dos fuentes en cómo se llama la casa. La síntesis dice que «los templos o casas de fiesta se llaman casas de sol» y llevan un símbolo solar de varitas en la cúspide. El tomo I dice que los kogui comparan a veces a la Madre con la Virgen María y por eso llaman a la casa ceremonial «cansamaría», «casa de María». No se funden: son dos afirmaciones de dos fuentes distintas y aquí se citan las dos.

Sobre las máscaras hay además un trabajo reciente que no existía cuando se escribió esta ficha. Juan Sebastián Zapata-Mujica y Santiago Forero Bedoya reconstruyeron en 2025, con fotografías y diarios de campo inéditos de 1973 y 1981 del archivo de la Unión de Seglares Misioneros, el uso ritual de las máscaras y la danza del Tani-Cansamaría oficiada por el mama-cacique enmascarado. Ellos mismos advierten que la información es escasa y que buena parte sigue dependiendo de las descripciones y fotografías de Preuss, es decir, del mismo eslabón que esta página examina.`,
    similitudes: `El paralelo más instructivo está en el mismo libro. Dos páginas después de Gauteován, el volumen III de Mitos y leyendas de Colombia presenta «Dobaida», el Dorado de Dabaiba de los katíos, con el mismo procedimiento: un compilador que no estuvo allí resume a un autor europeo, cierra con una referencia bibliográfica y entrega el resultado como leyenda indígena. En este sitio, la ficha katía construida sobre ese pasaje ya tuvo que corregirse por la misma razón. Cuando dos pueblos que no se tocan aparecen contados con idéntico molde, el molde es del libro y no de los pueblos.

El segundo paralelo lo propone la propia síntesis y por eso conviene desactivarlo. El texto presenta a Gauteován «por el estilo de la diosa Bachué de los Chibchas, pero más notable aún que ella». La comparación con Bachué no viene de ningún relator kogui ni de ningún registro de campo: es el recurso de Krickeberg para hacer inteligible a un lector europeo una figura que no conocía, y arrastra consigo la idea de que una deidad se explica midiéndola contra otra más famosa. La Madre de este relato no necesita esa vara: tiene etimología propia, «envoltorio, recipiente de la semilla», y una genealogía documentada en la que los cuatro Padres del Mundo descienden de ella.

El tercer contraste es de voz, no de motivo. Frente al resumen de 1946, el cuento que publicó en 2025 Cenexan Nacogui Gil trata el mismo asunto —de dónde vienen las máscaras— desde dentro y sin pacto ni rostros arrebatados: la Madre enseña a hacerlas en pensamiento y de ellas sale la ley. Poner los dos textos uno al lado del otro es la mejor manera de ver qué añade un intermediario cuando no ha estado en el lugar del que habla.`,
    leccion:
      "Un resumen hecho lejos puede conservar un nombre verdadero y perder todo lo demás.",
    sceneHorizontal:
      "una Gran Madre abstracta conecta el Sol, cuatro figuras ancestrales y cerros altos mediante bandas planas, sin representar máscaras rituales",
    sceneVertical:
      "cuatro siluetas ascienden hacia cerros de la Sierra bajo un Sol sobrio, con el rostro resuelto como espacio abstracto y no como máscara",
    researchNotes:
      "FUENTE SECUNDARIA: no hay relator identificado. ÉTICA VISUAL: no se reproduce ninguna máscara u objeto ceremonial específico.",
  }),
];

export default koguiDefinitions;
