function myth({ title, summary, tags, mito, ...definition }) {
  const seoTitle = `${title} | Andoque`;
  const focusKeywords = [title, "relatos Andoque", ...tags.slice(0, 3)];
  return {
    ...definition,
    title,
    summary,
    tags,
    mito,
    excerpt: summary,
    seoTitle,
    seoDescription: summary,
    focusKeywords,
  };
}

export const andoqueDefinitions = [
  myth({
    slug: "el-sol-que-nace-en-araracuara",
    title: "Sol, Luna y el tronco",
    summary:
      "Sol encierra a Luna en un tronco; animales y cortadores lo liberan antes de que una disputa separe sus caminos.",
    tags: ["Sol", "Luna", "tronco", "animales"],
    sourceKeys: [
      "tradiciones1984",
      "diluvio1981",
      "arazi2024",
      "ortizGomez1986",
      "misionLinguistica1970",
      "guyot1979",
      "genteDelHacha1975",
      "minCultura",
      "puebloAndoke",
    ],
    mito: `Una torcaza puso un huevo y el huevo se partió. De la yema salió Sol, que es el hermano mayor; de la clara, que es la materia sin forma que rodea a la yema, salió Luna, el menor. Sol tomó por mujer a Tortuga-redonda y con ella vivía.

De noche alguien entraba donde la mujer de Sol. Era Luna, que venía a visitar a su cuñada cuando no había luz para reconocerlo. Sol le dijo a su mujer lo que tenía que hacer, y ella guardó un tinte negro; cuando el visitante volvió, le marcó el rostro con la mano. Al amanecer la señal estaba puesta y ya no hizo falta preguntar quién había venido.

Entonces Sol preparó una trampa. En la chagra puso dos piñas, una macho y otra hembra, dentro del hueco de un tronco, y de ahí salieron dos guacamayas. Llamó a Luna para que fueran a cogerlas. Luna trepó detrás de ellas y se metió en el tronco; Sol retiró el apoyo por donde había subido y lo dejó encerrado.

Adentro Luna llamaba, y los animales del monte lo fueron oyendo. Los carpinteros golpearon la madera con el pico. Los murciélagos y otros que llegaban le pasaban frutas, y de las semillas y los restos que se iban juntando creció un higuerón encima del tronco. Uno tras otro lo intentaron sin poder abrirlo, hasta que llegó Cortador con su hacha y, con los que lo acompañaban, hizo una abertura por donde Luna pudo salir.

Ya afuera, Luna cortó madera de balso y empezó a formar con ella una mujer. Cortador lo ayudó a terminarla. Las astillas y los pedazos que iban cayendo no se perdieron: unos se volvieron aves, otros piedras, y de las virutas del balso salieron peces que antes no existían.

Después Sol y Luna fueron juntos a una pesca con barbasco. Los dos quisieron el mismo pescado y se pelearon por él, y con la pelea el agua se levantó. Sol dejó a su hermano y se fue hacia el oriente, que es hacia la bocana. La madre reprendió a Luna por lo que había hecho, y Luna salió detrás de su hermano sin alcanzarlo. Desde entonces los caminos de los dos quedaron separados, y el uno no vuelve a encontrarse con el otro.`,
    historia: `El ciclo del que sale este relato se grabó casi todo de noche, durante la preparación y el consumo de la coca, en la maloca del capitán Yiñeko, en presencia de su asistente Doikoa. Lo narraron el propio Yiñeko, Plumón-de-Fiebre, y su hermano Yiñejoke, Plumón-de-Gavilán, ninguno de los dos hablante de castellano; la transcripción y la traducción se hicieron con Físi, el hijo bilingüe del capitán. En el libro que Jon Landaburu y Roberto Pineda Camacho publicaron en 1984, Tradiciones de la gente del hacha, la guerra de Sol y Luna ocupa las páginas 43 a 55.

El orden de ese libro no es el de los sucesos sino el del territorio. Los autores descartaron repartir los relatos en antediluvianos, diluvianos y posdiluvianos y los ordenaron sobre el eje del río —Cabecera al occidente, Centro, Bocana al oriente—, más el cenit y el nadir, porque la lengua está llena de esquemas de orientación y la geografía local se estructura así. Por eso el final no es un detalle: cuando Sol se retira hacia el oriente está ocupando una posición en ese mapa, la de la bocana, y deja a su hermano en la otra.

El índice temático de los mismos autores separa gente, linajes, ritos, bailes y especies en rojos y blancos. Los rojos son bravos, crueles y engañosos, se adornan con achiote y plumas de guacamayo rojo, y sus animales son los predadores; los blancos son bondadosos, pacíficos y veraces, se adornan con plumas de garza y pulmón blanco de chontaduro, y sus animales son los pajaritos, las palomas y las garzas. El sol es rojo y la luna es blanca, y la misma oposición vuelve en el huevo de donde salen: la yema definida del mayor y la clara informe del menor.

Araracuara es el sitio donde pelearon los dos hermanos y donde nació el Sol de la historia. De ahí viene un linaje: el capitán Yiñeko, que narró el corpus, creó el clan del Sol —que no existía antes en el sistema andoque— al ponerle nombre a un muchacho llamándolo Sol-quieto en un baile del armadillo, y le explicó al padre que la afiliación al sol protegería mejor a su familia porque el sol es el único que nunca muere. Los miembros de ese clan llevan nombres sacados de los episodios de esta pelea entre hermanos y de las maneras en que los dos astros se manifiestan a lo largo del día y del año.`,
    versiones: `De esta historia no hay una sola forma. Además de la que se imprimió en 1984, cinco ancianos andoque la narraron entre 2018 y 2021 a un investigador que trabajó con Físi, el hijo del capitán, y ninguna de esas cinco coincide del todo con la publicada. Un miembro del clan del Sol sostiene además un episodio que no está ni en el libro ni en ninguna de las cinco: que Sol le compró a su hermano Luna la mujer pagándole con oro, oro que alguien tuvo que haber sacado antes de la tierra. Ese episodio se usa hoy para sostener un derecho, y muestra para qué sirve un relato de origen cuando hay algo que decidir.

Un relato de origen también se usa hacia adentro. Una mujer cuyos hijos pertenecen al clan del Sol contaba que, con uno de ellos preso, rezaba apoyándose en el episodio en que Luna se zafa de la trampa que le puso su hermano: sabía que su hijo no podía morir en la cárcel porque su origen tampoco había muerto allí. Y se usa hacia afuera: un extraño que conozca la historia puede sembrar pleito entre hermanos de ese clan por una mujer, que es exactamente lo que la historia cuenta. Por eso la gente es cuidadosa con a quién le cuenta su mito de origen.

Dentro del corpus, la luna vuelve a aparecer en un registro distinto. Hay un grupo de personajes protohumanos, las Sombras, cuyas historias no se cuentan como serias sino como chistes, y en una de ellas las Sombras tratan de agarrar la luna porque confunden su reflejo en el agua con el astro mismo. La misma luna que aquí pelea con su hermano, la abre el tronco y talla a la primera mujer, allá es un reflejo que unos torpes intentan recoger del río. El corpus sabe contar dos veces lo mismo y cambiar de género.`,
    similitudes: `La oposición que separa a estos dos hermanos no es de ellos solos. El índice de los editores la extiende a los linajes, a los ritos y a los animales: el gavilán frente al pajarito, el predador frente a la paloma. Vuelve, sobre todo, en los dos hijos de la madre creadora: el águila arpía, «gavilán-de-pluma-blanca», y el jaguar, «tigre-de-pluma-blanca», hermano mayor del hombre y dueño del monte así como el hombre es dueño del anti-monte, la chagra y la maloca. Dos hermanos que se reparten dominios en vez de compartirlos, y un mayor que guarda la esencia del grupo mientras el menor es lo que queda después de él: esa es la figura de base, y la pelea de los astros es su caso más visible.

El segundo paralelo es de género y está en el mismo corpus. Las Sombras, que son gente protohumana de tierra adentro, intentan pescar la luna confundiéndola con su reflejo; sus historias se llaman chistes y no son ni serias como las historias de capitanía ni peligrosas como las de animales. El mismo cuerpo celeste sostiene un relato de origen de clan y una tontería para reírse, según quién lo mire y desde dónde.

El tercero es de herramienta. Quien abre el tronco es Cortador con su hacha, y es él quien ayuda a terminar la mujer de balso. Los andoque se llaman gente del Hacha; antes del acero abastecían de hachas de piedra a huitotos, muinanes, boras y mirañas, que las tenían por imprescindibles y las cambiaban por coca y ambil. El instrumento que en el relato abre y talla es el que en la historia del grupo lo definía frente a sus vecinos.`,
    leccion:
      "Lo que queda encerrado no sale por su propia fuerza sino por las muchas manos que lo escuchan.",
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
    sourceKeys: [
      "arazi2024",
      "diluvio1981",
      "urbina1991",
      "vonHildebrand1975",
      "arroyoKalin2019",
      "jara1996",
      "guyot1979",
      "tradiciones1984",
      "puebloAndoke",
    ],
    mito: `Después del diluvio, cuando la humanidad primera había perdido su forma, vino gente que podía atravesar la piedra y la madera con las manos desnudas. Se los llama los Perforadores, que quiere decir el tiempo de perforar. Vivían en la franja que bordea el Caquetá. Tierra adentro, alrededor de Sitio-de-llanto, vivían otros, las Sombras, y entre los dos pueblos se repartieron el territorio: las Sombras nombraron las quebradas pequeñas y los sitios de adentro; los Perforadores, las corrientes que desaguan en el Caquetá y los lugares de sus orillas.

Los Perforadores fueron los primeros que hablaron. Conocieron el fuego, conocieron el tiesto de tostar y los palos con que se levanta una casa, empezaron a ponerle nombre a las cosas y empezaron a construir; antes de ellos las casas eran montones de hojas y espinas. Encontraron los depósitos de hachas de piedra enterrados en el territorio. Sanaron la tierra quitándoles sus fuerzas primordiales a los seres que la hacían invivible, y a la gente de su tiempo, que hacía mal todo lo que intentaba hacer bien, la convirtieron en animales, en puercos de monte y cerrillos, en venados y dantas, para que sirviera de algo.

Lo que hicieron fue caminar y nombrar. Uno arrancó desde un tronco de árbol madi y desde el cerro de la palma de milpeso, y fue bajando y mirando lo que había en cada lugar. Cerca de una bocana oyó un trueno, y ese río quedó llamándose el río de Trueno. Donde vio cananguchos, el nombre le vino de esa palma. Así fueron quedando el río de Dedo, el río Azul, el río de Lobo y los demás. En la bocana de uno mataron una anaconda que estaba bien pintada, y por eso ese quedó siendo el río del Dibujo. En la bocana de otro vieron un pájaro en la punta de un árbol alto y preguntaron qué era; era una guacamaya roja, y ese quedó siendo el río de la Guacamaya. Fueron poniéndole nombre a todas las quebradas que hay entre el uno y el otro.

Y donde nombraban dejaban la marca. Grababan en la piedra de la orilla lo que acababan de hacer y lo que acababan de vencer, y esos grabados son la memoria de sus hazañas: enseñan hasta dónde llegaba su fuerza, que era atravesar lo duro con la mano.

Hablaban la lengua de ahora, pero la pronunciaban mal, y por eso se acabaron. Los más se volvieron puercos de monte, que andan en manada y pelean como gente. Las Sombras se volvieron chuchas y grillos. De los Perforadores quedó la lengua, quedaron las hachas y quedaron los dibujos en las piedras del río.`,
    historia: `En castellano se les dice los Gigantes, pero las historias que se cuentan de ellos no hablan de su tamaño sino de su capacidad de atravesar rocas y árboles. Su nombre andoque, Yɒ'nnkń, significa literalmente «el tiempo de perforar», y el castellano lo cambió por una talla que el relato nunca menciona. De ahí sale el título heredado de esta página.

Que las piedras del río guardan su trabajo no es una conjetura de esta ficha. La introducción con que Jon Landaburu y Roberto Pineda Camacho abren su transcripción de 1981 registra que las riberas del Caquetá, abajo de donde desemboca el Caguán, están inundadas de petroglifos y de sitios arqueológicos, que en las playas del verano aparecen artefactos de piedra y cerámica sin identificar, y que la gente andoque cuenta que ese territorio lo habitaron antes unos gigantes, antecesores de los indios actuales y hacedores de aquellos testimonios. La etnografía posterior lo repite: los andoque y sus vecinos asocian los petroglifos de la angostura de Araracuara a gigantes ligados al pasado mítico andoque.

Lo que hay en esas piedras se ha medido. Entre La Pedrera y Araracuara, en cuatrocientos kilómetros de río, el levantamiento de 1975 registró unos dos mil quinientos grabados repartidos en catorce sitios. En 1978, entrando por Puerto Arturo al cañón de Araracuara y siguiendo hasta los roquedos del raudal de Guaimaraya, Fernando Urbina encontró mil quinientos de los que no se tenía noticia, y en 1980 y 1981 alrededor de mil más, en ocho localidades que van del internado de Araracuara a la boca del quebradón de Amefa. Casi todos pasan el año bajo el agua y sólo asoman entre diciembre y marzo; algunos, unos pocos días y sólo en las bajantes excepcionales. La cota más grabada es la intermedia, aunque al lado hay rocas apropiadas que nunca se inundan y que nadie usó. En Puerto Santander, sobre bloques de arenisca, la arqueología reciente ha registrado junto a los grabados los negativos característicos de un taller donde se fabricaban y afilaban hachas de piedra. Y los andoque de hoy siguen visitando los huecos de excavación del sitio que llaman Hacha, donde se sacaban esas piedras: uno de ellos, sentado al borde de uno, dijo que eso era una mina y que la historia del hallazgo ya anunciaba que el territorio lo tiene todo.`,
    versiones: `Los que nombraron el territorio fueron dos pueblos y no uno, y el reparto sigue vivo en la manera de decir de quién se desciende. Las Sombras vivían tierra adentro, alrededor de Sitio-de-llanto, y de ellas se reclama descendiente el clan del Águila y los demás clanes que sobrevivieron; los Perforadores vivían en la orilla del Caquetá, y de ellos se reclama descendiente el clan del Sol. Se habla más de los Perforadores que de las Sombras, entre otras cosas porque la gente de hoy vive donde ellos vivieron y ve lo que ellos dejaron. Las Sombras no dejaron marcas visibles en el paisaje y sus historias ni siquiera se cuentan como serias: se llaman chistes, y no son ni graves como las historias de capitanía ni peligrosas como las de animales. En una de ellas las Sombras intentan agarrar la luna porque confunden su reflejo en el agua con el astro. No modificaban las cosas: actuaban sobre sus imágenes, igual que una sombra depende de un cuerpo sin cambiarlo.

De las aventuras de los Perforadores hay más de una salida. En la versión que una mujer andoque narró en julio de 2019, los tres que sobrevivieron —dos hermanos y una hermana— remontan el río nombrando quebradas hasta que la hermana, con vergüenza de estar menstruando, sigue cocinándoles en vez de apartarse; los hermanos comen, se meten al agua a pelear con los monstruos, y un pez tijera los parte por la mitad río arriba. La narradora cerró marcando la diferencia: otros dicen que siguen viviendo de otra forma, dentro del agua, pero ella sabe que se acabaron así, porque así se lo contó Yiñejoke.

De las mismas piedras hay además lecturas que no son andoque. Urbina, que levantó los petroglifos del cañón, advierte que las oleadas sucesivas de pobladores se fueron topando con las obras de pueblos más antiguos, que a veces rehicieron los glifos o superpusieron los suyos, y que cada conglomerado humano interpretó lo que iba encontrando y dejó esas opiniones en su mitología. Los mitos con que él explica las figuras del Caquetá son uitotos y muinanes, no andoque.`,
    similitudes: `El paralelo mejor sostenido lo propone la propia fuente de los petroglifos. Urbina, discutiendo cómo se ha leído el arte rupestre del país, observa que las interpretaciones que los muiscas dieron a pinturas anteriores a ellos las pudieron fraguar sobre la base de sus propias realizaciones culturales, sin relación de sentido con lo que quisieron decir quienes las hicieron, y añade que todo pueblo lo hace. La explicación andoque de las piedras del Caquetá y la explicación muisca de las rocas del altiplano son el mismo procedimiento aplicado a herencias distintas: una obra sin dueño encontrada en el camino se vuelve relato de antepasados.

El segundo paralelo está a pocos kilómetros. Los vecinos uitoto y muinane miran los mismos grabados y los explican con mitos propios, recogidos y transcritos en los años ochenta, donde no aparece ningún pueblo que vaya nombrando ríos. Y la etnografía de los años noventa encontró que los andoque y sus vecinos coincidían, en cambio, en atribuir los petroglifos de la angostura a gigantes del pasado mítico andoque. Sobre una misma pared de piedra hay tantas historias como pueblos han pasado por la orilla, y a veces una se presta a los de al lado.

El tercer paralelo es material y está en el suelo. En Puerto Santander, los bloques de arenisca que llevan grabados llevan también las huellas de un taller de pulimento de hachas líticas. Los andoque se llaman gente del Hacha, tenían en su territorio los depósitos de esas hachas y se las cambiaban a los mirañas por coca y ambil. La roca que en el relato sirve para escribir es la misma en la que, sobre el terreno, se fabricaba la herramienta que le dio nombre al pueblo.`,
    leccion:
      "Lo que quedó grabado en la piedra no fue el tamaño de nadie sino la fuerza de atravesarla.",
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
    sourceKeys: [
      "arazi2024",
      "tradiciones1984",
      "cicloDelCaucho1988",
      "guyot1979",
      "ortizGomez1986",
      "misionLinguistica1970",
      "genteDelHacha1975",
      "minCultura",
      "puebloAndoke",
    ],
    mito: `En la quebrada Huevo-de-pescado, debajo de un chorro y al lado de una cerca, hay una playa que se llama Sitakara. Allí iban los niños a bailar.

Un día, mientras bailaban, llegaron otros y se metieron entre ellos. No eran niños de la casa ni gente conocida: eran gente de otra clase. Bailaron con ellos un rato y después se fueron. Los niños subieron y contaron en la casa que cuando bailaban llegaba alguien.

Los grandes les dijeron lo que tenían que hacer. Si esa gente volvía, que siguieran el baile sin pararlo y que no los soltaran; y que uno de ellos se viniera corriendo a avisar. Los niños dijeron que sí y volvieron a la playa.

Volvieron también los otros y entraron otra vez en la rueda. Entonces uno de los niños se salió sin que lo notaran y subió a la casa. Los padres bajaron con arcos y flechas y se acercaron por la orilla, callados, hasta donde se veía el baile.

Los vieron de cerca. No llevaban taparrabos y tenían el pelo largo hasta la cintura. Uno de los hombres levantó el arco y disparó. El hombre de esa gente quedó herido y se fue al agua, y al otro día lo encontraron flotando en la bocana del río. La mujer alcanzó a soltarse y se metió también, y esa se quedó a vivir en un remanso de la bocana del Duché, y de ahí no salió más.

Del baile quedó la canción. Es la que se cantaba cuando ellos llegaban, y se sigue cantando.

Lo que se cuenta de esta gente es que no hacía daño. Los niños que estuvieron con ella no se enfermaron después, que es lo que pasa con otras apariciones del monte y del agua. Vinieron a bailar y bailaron. Lo que acabó con el encuentro no fue el encuentro: fue la flecha.`,
    historia: `La pieza pertenece al corpus que Jon Landaburu y Roberto Pineda Camacho grabaron en lengua andoque en la maloca del capitán Yiñeko, Plumón-de-Fiebre, de noche y durante la coca, y publicaron en 1984 como Tradiciones de la gente del hacha. Los narradores fueron el propio capitán y su hermano Yiñejoke, Plumón-de-Gavilán, ninguno hablante de castellano; la traducción se hizo después con Físi, el hijo del capitán. «Sirena» es palabra de esa traducción: lo que el texto describe es gente de otra clase.

Para saber qué clase de gente sale del agua en este río hay que ver qué dicen los andoque del delfín. En el habla corriente se lo llama ama̰na; en el registro mítico, «gente del placer». Se lo asocia con los blancos y con la seducción peligrosa de las mercancías que traen y de la vida que se consigue entrando en su mundo. Se aparece al atardecer, o a los borrachos, como un grupo de personas vestidas de blanco con sombrero, cinturón y reloj, que intentan llevarse a los suyos al río; cuando el que los vio vuelve al sitio en pleno día, o cuando recobra los sentidos, encuentra los accesorios en el suelo, y el sombrero es una raya, el cinturón una anguila eléctrica y el reloj un cangrejo. Puede atacar a hombres y a mujeres tomando forma de persona atractiva, y deja al que lo trató afiebrado, alucinando y enfermo. La palabra misma es reciente: ama̰na̰ es un préstamo del tupí que estos pueblos de tierra adentro tomaron probablemente en el siglo XIX, cuando se acercaron a los ríos grandes a comerciar con los blancos y descubrieron al mismo tiempo la fuerza seductora de las mercancías y estos animales nuevos.

Ese acercamiento está fechado. Desde Tefé, sobre el Amazonas y frente a la desembocadura del Caquetá, subían las lanchas de los comerciantes; centenares de indígenas del Caquetá fueron cambiados por herramientas y bajados al Solimões, y en 1850 Tefé estaba habitada por gente de dieciséis agrupaciones distintas, muchos vendidos cuando niños. Los comerciantes fluviales quedaron simbolizados en la figura del bufeo, y los andoque cuentan que algunos de los linajes que vivían en las riberas del Caquetá desaparecieron durante el siglo XIX «engañados» por los delfines que «simulaban» ser comerciantes.`,
    versiones: `El corpus andoque tiene un relato propio sobre de dónde salieron los delfines, y ocupa las páginas 113 a 117 del libro de 1984. Tapir-verde vivía en la maloca de su suegro, sobre el río Verde, y estaba preparando un baile cuando su hermana, Rana-blanca, le dijo que su mujer, Doña Puerco, dormía con su propio hermano, Bonito. Tapir-verde dejó a su gente alistando la fiesta y fue donde su hermano a pedirle achiote; el hermano se lo dio advirtiéndole que ponerse achiote no es un juego. De regreso cortó un palo y le sacó punta. En la maloca no quiso el mambe del suegro ni la comida de su mujer, y en vez de acostarse con ella le tocó el pecho con los dedos untados y le dejó una cruz roja. El día del baile la gente comentaba que los dos hermanos estaban pegados y no podían separarse. Tapir-verde acabó de repartir la caguana a sus trabajadores, bajó a la orilla, los encontró todavía pegados, los atravesó a los dos con la lanza y los echó al río, donde se volvieron delfines. Les dijo: vayan por su camino y enloquezcan a quien no sepa el origen del delfín. El agua que salpicaron le dio escalofríos, y ese es el origen de la enfermedad del delfín. Los bailarines que estaban mirando se volvieron piedras y cananguchos.

La versión larga de ese relato es el origen de un baile, el de la charapa y el carrizo, y hay quien añade que después Tapir-verde anduvo de casa en casa golpeando las puertas con su bastón de carrizo para hacerles daño a las mujeres que vivían adentro.

Los vecinos usaron otras figuras para el mismo tramo de agua. Los mirañas describen minuciosamente el «Mar de la Danta» —que es como llaman al Caquetá— desde Tefé hasta Araracuara, donde localizan el «hueco del Guacamayo», que tienen por pieza de brujería. Ese mapa no es andoque y no se le puede atribuir, pero muestra que el mismo río estaba nombrado peligro por peligro desde varias lenguas a la vez.`,
    similitudes: `El primer paralelo es el baile, y lo sostiene el corpus mismo. En toda la Amazonia se dice que los delfines seducen a la gente, sobre todo a las mujeres, en los bailes; el relato andoque del origen del delfín se cuenta, en su versión larga, como el origen de una danza, y el episodio que lo desencadena ocurre mientras se prepara una fiesta y termina con los bailarines vueltos piedra. La escena de Sitakara —unos que bailan y otros que llegan del agua a meterse en la rueda— cae exactamente sobre ese molde regional.

El segundo paralelo es el del comerciante. El bufeo es la figura con la que la gente del medio Caquetá simbolizó a los que llegaban por el río: seres con apariencia de persona, vestidos de blanco, con sombrero, cinturón y reloj, que tratan con los de la orilla y se llevan a los suyos. Del lado de la historia, eso tiene fecha y nombre: linajes de las riberas del Caquetá que desaparecieron en el siglo XIX engañados por delfines que simulaban ser comerciantes, en los mismos años en que la palabra para decir delfín entró al andoque prestada del tupí.

El tercero es de traducción, y es el que más deforma. «Sirena» trae consigo el canto que atrae y mata, y esta narración afirma lo contrario: que estos visitantes no enfermaban a quienes estuvieron con ellos, a diferencia de otras apariciones. En un río donde lo que sale del agua suele dejar fiebre y locura, lo excepcional de este relato es precisamente que el daño no vino del agua.`,
    leccion:
      "Un encuentro que a nadie enfermaba terminó en muerte apenas llegaron las armas de los que temían.",
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
    sourceKeys: [
      "arazi2024",
      "diluvio1981",
      "verdadAndoque1976",
      "ortizGomez1986",
      "misionLinguistica1970",
      "tradiciones1984",
      "lenguaAndoque",
      "minCultura",
    ],
    mito: `A ese lugar llegó un visitante, y lo primero que hicieron los de la casa fue advertirle. Le dijeron que allí había fantasmas. Le señalaron por dónde no se andaba de noche sin cuidado, cuáles eran los sitios, y le contaron lo que le pasaba al que no hacía caso.

El hombre se rió. Dijo que a él no le iban a venir con esas. Dijo que si el fantasma lo agarraba, él también lo agarraba a él; que lo iba a coger y lo iba a traer cargado hasta la casa para mostrárselo a los que lo querían asustar; que así se vería si era cierto o no era cierto. Lo dijo una vez y lo repitió.

Llegó la noche y le tocó probarlo. Salió, y allí donde le habían dicho se le apareció. El hombre hizo lo que había prometido: se le fue encima para agarrarlo.

Pero el fantasma no era una sombra que se deja coger, ni se quedó callado. Habló. Le contestó. Se movió, se le soltó de las manos, se le apareció por otro lado. Y cuando el hombre creyó que ya lo tenía, el fantasma llamó a los suyos. Llamó a Mariposa-cara-de-fantasma y le pidió que le trajera un machete para despedazar al hombre. Dijo por dónde lo iba a partir y qué pedazo iba a quedar de cada corte, y lo fue diciendo delante de él, como quien reparte lo que ya tiene cogido.

Al que había venido a coger fantasmas le tocó oírse repartido en la cuenta del otro. La bravata con que llegó —yo lo agarro y lo traigo— se le vino encima entera: el que iba a agarrar resultó agarrado, y el que iba a mostrar un fantasma en la casa se quedó allá afuera, en la oscuridad, oyendo cómo lo iban a trozar.`,
    historia: `En andoque, una misma palabra, ká'hɵi, dice imagen, sombra y espectro. Lo que aparece no es el muerto sino su doble. Unos tres días antes de que alguien muera, el componente de la persona que media entre lo que piensa y lo que es su cuerpo puede desprender una figura sin cuerpo, idéntica a él, que anda por ahí anunciando la muerte que viene; se le llama «alma sin dueño». Y después de muerto, esa misma alma puede aparecérseles a sus parientes alrededor de la sepultura o en los lugares que el difunto frecuentaba, para ahondarles el duelo, confundirles los sentidos y acabar convenciéndolos de irse con él. Hay además seres que toman la forma de cualquier persona conocida; el que responde a su llamado y los sigue, o el que da por buena la aparición, queda con el alma tomada y la muerte le llega poco después.

Contra eso hay una defensa, y es hablar. Se dice que contarles a los demás que la cosa intentó llevárselo a uno, o incluso gritar en el momento para que otros oigan, asegura que no vuelva; el que se guarda el encuentro le está diciendo que le gustó, y entonces vuelve. La fuerza del espíritu de cada quien decide si cuenta lo que le pasó y se salva, o se lo calla y queda perdido. El visitante de este relato hace justamente lo contrario de callarse: anuncia a gritos, antes de que ocurra nada, lo que piensa hacer.

Los fantasmas tienen además una jerarquía, y el índice temático que Jon Landaburu y Roberto Pineda Camacho pusieron al final de su transcripción de 1981 la deja ver. Del cometa dice tres cosas seguidas: que se observa en los cielos desde los tiempos antiguos y se llama «esfera-de-luz-giratoria» y también «oropéndola-de-fuego»; que es el último de los fantasmas; y que es un enviado de Sindi para avisar a los sabios. Donde se le ve y se le oye —al desaparecer suena como un gong— se sabe que no acaecerán ni enfermedades ni peligro alguno. La serie que abajo asusta, arriba avisa.

La narración viene del corpus que esos dos autores grabaron en lengua andoque con el capitán Yiñeko, Plumón-de-Fiebre, y su hermano Yiñejoke, Plumón-de-Gavilán, y tradujeron con Físi, el hijo del capitán; se publicó en 1984 como Tradiciones de la gente del hacha. Mariposa-cara-de-fantasma es uno de los nombres que quedaron en traducción.`,
    versiones: `Hay una variación que en andoque no es de contenido sino de gramática, y que afecta de lleno a un relato como este. Landaburu describió en 1976 la clase de palabras que la lengua obliga a poner en casi todo enunciado que afirma algo: el asertivo. Una de sus piezas declara de dónde viene lo que se dice. Sin marca, el hablante afirma lo que conoció directamente —«el árbol se cayó, lo vi caer»—; con una marca, lo que sabe por testimonio ajeno; con otra, lo que dedujo de lo que vio, que es lo que se dice al encontrar el árbol ya tumbado. Contar que un fantasma habló y pidió un machete no es, en esta lengua, la misma operación que contar que uno lo vio.

Para el relato mítico, el mismo trabajo anota que la elección del sufijo revela la actitud del narrador sobre la validez de lo que cuenta. Con uno sitúa los hechos en una temporalidad cercana a la nuestra y los da por absolutamente seguros. Con otro indica que, siendo indudables, le fueron revelados por otros sabios, y aun así los asume. Con un tercero los deja en un pasado transmitido por tradición oral y no se compromete: el mito se vuelve entonces semejante a un relato histórico y queda sometido a la duda que soporta cualquier testimonio no verificable. El profesor de andoque de Landaburu se lo explicó con un ejemplo de su propia casa: una es palabra de narrador seguro, y su papá, el capitán de la tribu, decía ya a menudo la otra, «pero es porque la gente no pone el mismo cuidado». Ese capitán es Yiñeko, el mismo que narró el corpus.

De modo que una historia de aparecidos puede contarse con tres grados distintos de compromiso, y el andoque obliga a escoger uno. Al pasar al español la elección desaparece y queda «dicen que». Los nombres, en cambio, se multiplican: el cometa tiene tres —«esfera-de-luz-giratoria», «oropéndola-de-fuego» y, antiguamente, «mochilero de fuego»— y Sindi, que lo manda, es a la vez Trueno-Sindi, el Trueno-carnívoro, el Caníbal y, después del diluvio, Príncipe de los tigres.`,
    similitudes: `El primer paralelo está en la lengua. Landaburu subraya que la preocupación por fundamentar lo que se afirma —haberlo visto, haberlo oído de otro, haberlo inferido— ocupa el centro del andoque y está mucho menos gramaticalizada en las lenguas europeas. Lo que el español resuelve con una muletilla, el andoque lo resuelve con una palabra obligatoria en cada frase. Un relato de aparecidos contado en andoque lleva pegada su propia advertencia sobre de dónde viene; contado en español, la pierde por el camino.

El segundo es de vocabulario y abre una puerta inesperada. La palabra que nombra al espectro, ká'hɵi, es la misma que nombra el reflejo en el agua, y es la que da nombre a las Sombras, un pueblo protohumano cuyas historias se cuentan como chistes y que en una de ellas intentan agarrar la luna confundiéndola con su reflejo. Sombra, imagen y aparecido son en esta lengua una sola cosa: aquello que depende de un cuerpo sin ser el cuerpo, y con lo cual no se puede forcejear. El hombre de este relato pretende agarrar precisamente eso.

El tercero lo da el nombre del aliado. Quien acude cuando el fantasma llama es Mariposa-cara-de-fantasma, y en el índice de 1981 las mariposas ya venían nombradas en otra parte: el manguaré corto, el tambor de señales que crea la gente y la hace levantarse, «es el que viene rodando del cielo, acompañado por las mariposas». El mismo insecto acompaña, en un sitio, al instrumento que llama a la vida, y en otro, al que pide un machete.`,
    leccion:
      "La noche devuelve agrandado el desafío que alguien lanzó creyendo que nada podía agarrarlo.",
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
    sourceKeys: [
      "tradiciones1984",
      "diluvio1981",
      "ortizGomez1986",
      "misionLinguistica1970",
      "verdadAndoque1976",
      "arazi2024",
      "genteDelHacha1975",
      "lenguaAndoque",
    ],
    mito: `Canoa-de-Piedra vivía en la cabecera del Aduche. Era de los mayores de su grupo y había aprendido de oído: en los viajes se sentaba a escuchar a los sabedores huitoto y se traía lo que decían. Tenía dos hijos, un varón y una mujer.

La hija salió a arrancar yuca como cualquier día. Volvió con la carga, se sintió mal de repente y se murió esa misma vez. No hubo enfermedad larga ni aviso: estaba viva por la mañana y por la tarde ya no estaba.

Al padre lo cogió el dolor entero y no quiso quedarse a vivir con eso. Tomó caldo de yuca para irse detrás de ella, y no se fue: el caldo no lo mató. Lo que le dio fue un sueño que no era sueño. Así, como dormido y andando, se metió al monte.

Anduvo hasta llegar a un sitio señalado por una piedra. Ahí se le acabó el camino de arriba y empezó el otro. Debajo de esa tierra vivía gente, y esa gente lo recibió.

Le preguntaron a qué venía. Antes de que él alcanzara a contar, ellos ya sabían de la muerta: le dijeron que la hija no se había muerto sola, que el daño venía de gente del río Quinché, y le dijeron de quiénes. Después le entregaron hierbas y le explicaron para qué servía cada una y cómo se usaban. No lo devolvieron consolado. Lo devolvieron sabiendo quién había hecho el daño y con qué se responde.

Canoa-de-Piedra volvió arriba y habló con sus hermanos. Les contó lo que había visto: que debajo de la tierra estaban los parientes muertos, que allá no faltaba nada, que había comida y gente y casa como aquí. Él fue el primero que avisó de ese lado; antes de él nadie había subido a decirlo. Los hermanos lo oyeron y lo dejaron pasar, como se oye lo que cuenta un hombre que viene de lejos.

Uno solo no lo dejó pasar. Gavilán-del-diablo se le arrimó y se quedó con él, y de su boca aprendió lo que a él le habían enseñado abajo: el camino, la piedra, el nombre de los que hacen el daño y el uso de cada hierba. Fue el único que aprendió directamente de él. Lo demás se quedó en lo que los otros hermanos alcanzaron a oír aquella vez.`,
    historia: `Los relatos de la gente del Hacha se grabaron casi todos de noche, en la maloca de Yiñeko, durante la preparación y el consumo de la coca, con Doikoa, el asistente del capitán, presente. Después se transcribieron, se leyeron y se tradujeron con Físi, el hijo bilingüe de Yiñeko, porque ni el capitán —Yiñeko, Plumón-de-Fiebre— ni su hermano Yiñejoke, Plumón-de-Gavilán, que contaron entre los dos la mayor parte del corpus, hablaban castellano. Jon Landaburu y Roberto Pineda Camacho trabajaron así en la comunidad del Aduche, abajo de Araracuara, y publicaron el conjunto en 1984 como «Tradiciones de la gente del hacha».

Ese libro no está ordenado por tiempo sino por espacio. Los autores dejaron de lado el esquema que habría repartido los relatos en antediluvianos, diluvianos y posdiluvianos, y los ordenaron sobre el eje del río: Cabecera al occidente, Centro, Bocana al oriente; a esas direcciones les sumaron el cenit y el nadir. A cada una le corresponden fuerzas propias, y es la interacción de todas ellas con el centro la que va construyendo el mundo. El abajo al que baja Canoa-de-Piedra es una de esas direcciones, no un más allá al que se va.

El reparto tiene consecuencias precisas. En el mapa fluvial andoque la cabecera queda del lado del cielo y de las estrellas y está poblada de predadores, tigres y águilas; la bocana queda del lado del suelo y de lo que hay debajo del suelo, y es donde están los animales del monte, los seres del agua y los muertos. Bajar, aquí, es irse hacia ese costado sin salir del río.

El Quinché, de donde le dicen que viene el daño, tampoco queda fuera del mapa: en andoque se llama Hḭ'ḭse, «río del Dibujo», y marca el límite oriental del territorio ancestral. Sus cabeceras, con las del Aduche y las del Ipanché, son los tres ríos donde estaban repartidos los linajes antes del caucho. El daño le llega, entonces, desde el borde de su propio país.

Hay por último algo que la traducción no alcanza a mostrar. En andoque, toda frase que afirma algo lleva obligatoriamente una palabra que dice de dónde le viene al hablante lo que afirma: sin marca, lo vio; con el afijo -há, se lo contaron; con -ni, lo dedujo de otra cosa observada. Una historia cuyo asunto es que uno bajó y los demás oyeron se cuenta en una lengua que obliga a declarar eso en cada frase.`,
    versiones: `«Ultratumba» es palabra de traductor. El corpus no tiene un más allá: tiene un abajo habitado y vigilado, y habla de él con vocabulario de lugar. El maguaré largo, măkokã, es «el dios de aquí abajo». De los que quedaron en la maloca después del diluvio, Tomirepa «quedó aquí abajo», y las notas glosan su nombre como Doakoa, «el que mira»: es el vigilante de esta tierra. Doña Cucarrón-de-vida, la madre que hizo la gente, vivió dentro de la tierra cuando se derrumbó la casa que llegaba al cielo, y bajó dos veces a traer tierra para reponer la que se había quemado; su nombre viene de una ninfa de cigarra que, para la gente del Hacha, no muere nunca.

De la muerte, el corpus distingue dos cosas dentro de una misma persona. Lo más concreto y corporal queda peligroso y se mantiene lejos. Lo otro, más abstracto, se va al sitio de origen de la brujería; pero si el muerto era sabio, sus parientes pueden retenerlo, y entonces un adulto o un niño hereda el conocimiento que ese muerto juntó en vida. Se consigue contando en el mambeadero el mito de origen del difunto y los relatos de capitanía que le tocaban. El hermano que se queda pegado al que volvió de abajo y aprende de su boca está haciendo eso mismo, sin esperar a que se muera.

El caldo de yuca tiene nombre en la etnografía reciente: el líquido que suelta la yuca brava al exprimirla, el que lleva cianuro. Es el que se bebe para pasar a forma de predador, y de Yiñeko se cuenta que fue el último que lo hizo. Quien lo toma para morirse y no se muere queda, justamente, del otro lado.

«Gavilán», en este corpus, tampoco es una especie: reúne a los predadores del aire, y el gavilán por excelencia es el águila arpía, «gavilán-de-pluma-blanca», hijo de la madre creadora. Los propios autores anotan que la historia de los andoques actuales se confunde con la del linaje de los gavilanes.`,
    similitudes: `Lo de abajo, en este corpus, se anuncia sonando, y no todos lo oyen. En el ciclo que Landaburu y Pineda transcribieron en 1981, un padre se va debajo de la tierra por un regaño y desde allá empieza a sonar, una noche y a la siguiente más duro, hasta que los hijos lo encuentran vuelto mata de coca y se pone a enseñarles dónde va a quedar el mambeadero; las notas advierten que el consumo de la coca es fuente de sabiduría. En el relato del hacha de piedra que recogió Pineda en 1975 ocurre lo mismo con otro oído: un hombre que no había hecho uso de mujer oye bajo sus pies un tun, tun, tun que otros dos no alcanzan a oír, y lo tratan de mentiroso. Sólo cuando los brujos se reúnen, huelen y toman yajé se sabe dónde está el depósito y cuántas lunas hay que escarbar, y el dueño de abajo exige antes que le cocinen y le den caguana, coca y ambil.

El aviso que llega de otro orden tiene además una forma reconocida. El índice temático de 1981 define el cometa —«esfera-de-luz-giratoria», «oropéndola-de-fuego»— como «el último de los fantasmas» y «un enviado de Sindi para avisar a los sabios»: al desaparecer suena como un gong, y donde se le ve se sabe que no habrá enfermedades ni peligro. Un hombre que baja, oye lo que le dicen y sube a repetirlo hace ese mismo oficio de enviado.`,
    leccion:
      "Debajo de la tierra no sólo hay muertos: hay parientes, abundancia y noticias que alguien tiene que traer.",
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
    sourceKeys: [
      "tradiciones1984",
      "diluvio1981",
      "arazi2024",
      "ortizGomez1986",
      "misionLinguistica1970",
      "genteDelHacha1975",
      "cicloDelCaucho1988",
      "sanchezBotero2002",
    ],
    mito: `Eran dos y sabían cambiar de cuerpo. Podían salir de la maloca como hombres y llegar a la otra orilla hechos tigre, o boa, o culebra verrugosa, o águila, o gavilán. Otros también sabían algo de eso, pero no como ellos: ellos entraban y salían de una forma a otra como quien se cambia el remo de mano.

Nunca usaron ese saber para cuidar a nadie. Andaban. Iban de un sitio a otro, y del sitio por donde pasaban salía siempre alguien lastimado. Si alguien les respondía, volvían y cobraban. Así vivían: haciendo daño, y cobrando después el daño que les hacían por el daño que habían hecho.

Cuando llegaban a una comunidad, la gente no alcanzaba a saber quién había llegado. Se aparecía el animal grande, se comía a alguien y ya no estaba. Salían a buscarlo y encontraban rastro de tigre que se acababa, o de boa que se metía al agua, o no encontraban nada. Los que iban detrás nunca alcanzaban a ver a los dos hombres: veían al animal, y el animal ya iba siendo otra cosa.

Los que sabían, en esos sitios, trataron de responderles. Eran especialistas también y pusieron su saber contra el de ellos, y no pudieron. Para agarrar a alguien hay que reconocerlo primero, y a esos dos no se les podía fijar una forma el tiempo que hace falta para cercarlos.

Una vez estuvieron cerca. Los rodearon, les metieron humo y les tiraron con lo que tenían. Los dos contestaron por otro lado: no pelearon con armas, movieron el tiempo. Se vino un aguacero encima del cerco, el agua apagó lo que ardía y desbarató a los que rodeaban, y por el hueco que abrió la lluvia se fueron los dos. No fue que la lluvia cayera de casualidad a favor de ellos. La lluvia era la respuesta.

Entre ellos dos tampoco había buena compañía. Uno se asustaba, y el otro se le reía del susto y lo obligaba a seguir. No andaban juntos por quererse: andaban juntos porque ninguno de los dos podía parar. Y juntos pesaban más, porque donde llegaban no se salvaba ni el grande ni el chiquito, y a los que quedaban les tocaba aprender a vivir mirando el monte.`,
    historia: `El corpus lo contaron dos hermanos: el capitán Yiñeko, Plumón-de-Fiebre, y Yiñejoke, Plumón-de-Gavilán. Ninguno de los dos hablaba castellano, y la traducción se hizo con Físi, el hijo del capitán; Jon Landaburu y Roberto Pineda Camacho publicaron el conjunto en 1984 como «Tradiciones de la gente del hacha». Entre lo que Landaburu registró en el Aduche hay un género propio, que él describió como relatos parahistóricos sobre las hazañas de un gran payé. Éste es uno de ellos.

El título dice «brujos», y esa palabra nombra un oficio. Pineda anotó en 1975, traduciendo un mito de Jiñeke, del clan Gavilán, que el término andoque que se vierte «brujo» quiere decir «el que ve, el que sabe»; las notas de 1981 glosan al sabio y guía de la comunidad como «el que hace dar confianza al corazón», el que enseña, el que piensa. La etnografía reciente confirma que la lengua no separa oficios: una sola categoría cubre al que organiza los bailes, al que cura y al que ataca, y designa a quien ha obtenido acceso al espíritu auxiliar.

Esa misma etnografía describe con precisión lo que hacen los dos de esta historia. La expresión máxima del poder de un brujo es transformarse él mismo en un predador poderoso —tigre, águila arpía o boa— para devorar a la víctima. De Yiñeko, el capitán que narró el corpus, se cuenta que fue el último que lo hizo: cansado de los ataques de un brujo murui contra su gente, se quedó sentado en el mambeadero gruñendo y rugiendo como tigre, y el rival murió esa noche o poco después. Hay todavía un ataque mayor, que consiste en pedirle al dios carnívoro que se coma el alma del otro, y que mata en pocos días. Quien llega a ese punto queda expuesto por dos lados: a los brujos que vengan a sus víctimas, y al propio dios, que si deja de recibir su comida termina comiéndose a quien lo llamó. Como un perro al que uno deja de alimentar, se lo explicaron al etnógrafo: tarde o temprano se lo come a uno.`,
    versiones: `El corpus se reparte en capas que los mayores distinguen por nombre. Las «historias de gente», también llamadas historias de capitanía, giran alrededor de tres garzas que se visitan y de vez en cuando chocan, y son las que los ancianos acreditan como su sabiduría. Las «historias de animales» son la otra capa: allí los héroes son animales que se tratan con engaño, con lascivia o con agresión, y están asociadas precisamente a los brujos y a los embaucadores. Queda un tercer registro, el de los relatos que se llaman «chistes», que no son serios como los primeros ni peligrosos como los segundos. Ésta es, sin discusión, una historia de animales.

La serie de formas tampoco es una lista de especies. Las notas de 1981 registran que kádánãi describe a las aves rapaces en general, y que el gavilán por excelencia es el águila arpía, ñedándei, «gavilán de almidón», hijo de la madre creadora. Decir que se volvían águila o gavilán es nombrar el lado predador del aire, entero.

Y hay una clasificación que los narradores aplican a sus propios personajes y no a los ajenos: rojos y blancos. Los rojos son gente cruel, brava y engañosa, se adornan con achiote y plumas de guacamayo rojo, y sus animales son los predadores, el gavilán y el tigre; los blancos son bondadosos, pacíficos y veraces, se adornan con plumas de garza, y sus animales son los pajaritos, las palomas, las garzas, los cucarrones. Un padre de familia escoge entre sus hijos cuáles van a ser rojos y cuáles blancos. Con ese reparto a la vista, dos hombres que andan de tigre y de gavilán quedan colocados sin que haya que llamarlos malos.`,
    similitudes: `Un devorador que no se deja alcanzar ya está en el primer ciclo de fundación. En la sección del águila caníbal que Landaburu y Pineda transcribieron en 1981, el gavilán se pone a comer gente, aprovecha a quien baja a bañarse, y la gente tiene que ir al puerto escondida dentro de un canasto. No lo vencen persiguiéndolo: lo vencen con una trampa y una mentira, y aun así se va volando, y de la sangre que le cae salen los linajes.

El engaño de forma tiene además su propio relato de origen, en las páginas 113 a 117 del libro de 1984. Danta-verde se entera de que su mujer se acuesta con el hermano de ella, los deja pegados con achiote, los atraviesa con una lanza y los echa al río, donde se vuelven delfines; les dice que se vayan por su camino y enloquezcan a quien no sepa el origen del delfín, y el agua que le salpicaron le deja escalofríos, que es el origen de la enfermedad del delfín. Contra esa clase de daño lo que protege es saber de dónde salió el que lo hace.

De ahí se entiende lo otro que anotó Pineda en 1988: que los andoque cuentan que algunos de los linajes que habitaban las riberas del Caquetá desaparecieron durante el siglo XIX «engañados» por los delfines, que «simulaban» ser comerciantes. El mismo ser que toma otra apariencia para acercarse, esta vez con la cara del que sube el río a negociar.`,
    leccion:
      "El mismo saber que da seguridad al corazón puede volverse, en otras manos, la forma del miedo.",
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
    sourceKeys: [
      "tradiciones1984",
      "arazi2024",
      "diluvio1981",
      "ortizGomez1986",
      "genteDelHacha1975",
      "misionLinguistica1970",
      "sanchezBotero2002",
      "guyot1979",
    ],
    mito: `A Trueno-de-piedra le salió al camino un sabedor huitoto que también cambiaba de cuerpo. No llegó como hombre a saludar: llegó hecho tigre y se le puso atrás. Lo siguió por el monte sin apurarse, como sigue el tigre, dejándose oír para que el otro supiera que iba ahí.

Trueno-de-piedra no era hombre a quien se le hiciera eso. Él también sabía cambiar. Se volvió tigre para que el otro no fuera el único tigre; se volvió boa; se volvió danta; y por el monte fueron los dos pasando de un cuerpo al otro, cada uno tratando de dejar al otro sin dónde ponerse. Ninguno alcanzaba a rematar al otro, porque el que iba perdiendo se volvía otra cosa y empezaba de nuevo. Así estuvieron, y así se habrían quedado.

No se mataron. Lo que pasó fue que en una de esas Trueno-de-piedra le quitó el guayuco. La prenda no era adorno. Era del huitoto, y sin ella el huitoto no podía volver a lo que era ni pasar a lo que quería ser. Ahí se acabó la pelea. El que había llegado persiguiendo quedó del lado del que pide.

Y vino a pedir. Dijo que le devolviera lo suyo. Trueno-de-piedra no se lo devolvió por nada. El otro ofreció lo que tenía: una hierba, y el modo de usarla. Con esa hierba, dijo, se le daba a alguien una enfermedad que le cambiaba la cabeza por un tiempo; el enfermo no se moría, pero mientras le durara no era el mismo y no hacía lo que siempre había hecho.

Trueno-de-piedra le hizo decir lo demás, porque media enseñanza no sirve: le hizo decir también cómo se quita. El huitoto enseñó las dos mitades, la de causar y la de curar, y con eso recuperó su guayuco y se fue por donde había venido.

Así terminó aquello. Empezó como una pelea entre dos que podían ser tigre, y acabó en un trato: una prenda devuelta, y a cambio un saber que sirve para enfermar a alguien y para levantarlo. El que se quedó con el saber se quedó también con lo que ese saber puede hacer.`,
    historia: `Físi, el hijo del capitán Yiñeko que tradujo el corpus en 1970 —el que puso en castellano lo que su padre, Plumón-de-Fiebre, y su tío Yiñejoke, Plumón-de-Gavilán, contaban en andoque—, siguió después siendo el intérprete de su propia tradición: entre 2018 y 2021 trabajó con el etnógrafo Eliran Arazi, y varios relatos andoque pueden leerse hoy con narrador y fecha porque los contó él.

Lo que esa etnografía aclara es de qué habla un título como éste. La brujería andoque se hace de dos maneras. Una consiste en infligirle a alguien el daño que ya ocurrió en un relato, nombrándolo dentro de esa historia, y puede ir metida en una sustancia que se le entrega a la víctima: mambe, ambil, agua. La otra, la que llaman propiamente brujería, no necesita sustancia; consiste en enlistar seres no humanos para que hagan la hostilidad, y uno de sus modos corrientes es mandar animales grandes a rondar el asentamiento de la víctima y dejar dolores y enfermedades en los caminos por donde la gente pasa. Un anciano contaba que en los años setenta le quedaron dolores de talón por haber caminado sobre huellas de puercos de monte mandadas por un brujo murui. Eso es, literalmente, la brujería de un animal.

Del protagonista hay más de lo que parece. Los andoque nombran a un brujo llamado Fisidú'dɨ, Trueno de Piedra, y le atribuyen dos cosas: haber adquirido la capacidad de transformarse él mismo en predadores, y haber traído a los andoque las hierbas de la brujería. Las trajo de Tatoañei, una formación rocosa en las cabeceras del río Guacamayo, cerca del Sitio-de-llanto, que es el lugar de origen de la brujería y de las hierbas que la hacen posible, y adonde va el alma del brujo cuando muere. El relato heredado cuenta esa misma adquisición por otra vía: no traída de un cerro, sino ganada en un pulso a un rival que tuvo que pagar el rescate de su prenda. El rival, por lo demás, está donde le corresponde: los linajes huitoto fueron siempre los vecinos occidentales, y en la memoria reciente el brujo murui es el adversario típico.`,
    versiones: `La danta le da nombre al río. En andoque el Caquetá se llama Ḭtɵse, «río de la Danta», y marca el borde norte del territorio ancestral; el Quinché es el «río del Dibujo» y el Cahuinarí el «río Verde». Río abajo, los vecinos dicen algo parecido en su propia lengua: el relato mirana que recogió Guyot en 1979 —y que Pineda cita en 1988 atribuyéndolo a los bora— llama al Caquetá «mar de danta» y lo remonta nombrando al dueño de cada sitio hasta llegar al «hueco de guacamayo» de Araracuara, «pieza de brujería». Ese último es nombre de los vecinos, no de los andoque.

Hay además un relato andoque en el que la danta se hace con prendas, y se puede leer entero con narrador y fecha: lo contó Físi el 8 de diciembre de 2018. Un suegro le dañaba de noche la chagra a su nuera, pisándole las piñas y mordiendo las frutas, y ella se enfermaba con dolores cada vez que se comía una de las frutas mordidas. El marido le puso una trampa siguiendo el consejo del propio suegro, y a la mañana siguiente lo encontró adentro, en cuatro patas. El viejo le mandó traer de su hamaca el talego de coca, el guayuco y la corona: el talego, al llevárselo a la boca, se le volvió trompa de danta; la corona se le volvió la giba del lomo; y el guayuco, al ponérselo, se le volvió los testículos inflados de la danta. De ahí, dicen, vienen los daños que las dantas hacen a las mujeres.

Y la danta es también nombre del que llega. En «La llegada de las boas y las dantas», que Sánchez Botero imprime desde el libro de 1984, entraron las boas y las dantas y trajeron con ellas el hacha de metal; los hombres-danta son, en ese mismo texto, los que hay que separar porque pisan sembrados.`,
    similitudes: `El monte donde se persiguen los dos tiene dueño, y no es ninguno de ellos. El índice temático de 1981 explica que iño, la palabra que se traduce «tigre», significa más exactamente «predador terrestre» y engloba perros, zorros, nutrias, ocelotes y jaguares; el tigre por excelencia es el jaguar, «tigre-de-pluma-blanca», hermano mayor del hombre e hijo de la madre creadora, dueño del monte así como el hombre es dueño del anti-monte, la chagra y la maloca. Dos hombres que se vuelven tigre para pelear se van a pelear al terreno de un tercero, y por eso la cosa no se resuelve allá sino de vuelta, en un trato.

Sobre si una prenda basta para cambiar de cuerpo, el corpus se contradice de un modo instructivo. En el relato de la danta que contó Físi, el talego, la corona y el guayuco son literalmente lo que le hace al suegro la trompa, la giba y los testículos: sin las prendas no hay danta. En cambio, al describir los bailes, Sánchez Botero insiste en que lo que permite hacerse realmente boa o danta no está en la perfección del vestido y los adornos sino en el corazón, y que sin eso el vestido es «un mero disfraz» y el hombre «un mero comediante». Entre esas dos cosas queda el guayuco de esta historia: quitárselo a alguien no es desnudarlo, es dejarlo sin el cuerpo que sabía ponerse.

Los vecinos cuentan un pulso parecido por el otro lado. En el relato mirana de Guyot, quien manda en el hueco de donde salen las hachas de piedra es un anciano andoque, y los que llegan a pedirle pedazos tienen que ofrecerle coca y ambil; de uno que se portó mal se dice que le quedaron dientes como de tigre. También allí, el que rompe un trato queda marcado con la forma del predador.`,
    leccion:
      "Una pelea entre iguales termina cuando uno pierde la prenda y el otro hereda su peligro.",
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
    sourceKeys: [
      "tradiciones1984",
      "ortizGomez1986",
      "arazi2024",
      "diluvio1981",
      "genteDelHacha1975",
      "misionLinguistica1970",
      "cicloDelCaucho1988",
      "guzman1971",
      "guyot1979",
      "jara1996",
    ],
    mito: `Los muchachos que andaban con mi padre eran de él. Sus huérfanos y sus trabajadores habían salido todos de un mismo sitio, y él los hizo gente: los recogió, los reconoció, les dio puesto y les dio en qué trabajar. Vivíamos debajo de Sitio-de-llanto, en esa loma de donde viene la gente del gavilán, arribita de donde estuvo el tronco del palo hablador.

A mi padre le decían Gavilán-de-piriri, y era capitán. No es que él hiciera la gente del mundo; hizo la suya, que es otra cosa. Hacer gente quiere decir que cada quien sepa de dónde vino, que tenga dónde dormir y con quién trabajar, y que haya una voz que hable por todos. Esa voz es la del capitán, y el que no la tiene anda suelto.

Río Duché abajo y río Duché arriba había otros. A cada grupo se le decía por su nombre, y los nombres eran de animales, de plantas, de cosas que a uno le pasan. Estaba la gente de Hormiga arriera. Estaba la gente de Guacamayo rojo. Estaba la gente de Borugo. Estaba la gente de Fantasma. Cada uno tenía su capitán y su sitio, y en el sitio su casa, y en la casa su mambeadero. En una casa de esas cabía mucha gente: toda la del grupo, y no hacía falta más.

Uno no se casaba adentro. Las mujeres venían de otro grupo y las nuestras se iban para otro, y por ahí quedaban emparentadas las casas que por el otro lado se flechaban. En los bailes se juntaban, y en los bailes también se cambiaba: lo que a uno le sobraba por lo que al otro le faltaba. El río los comunicaba sin volverlos uno solo. Por el río se iba a bailar donde el vecino y por el río se iba a pelear con él.

Todo eso yo lo alcancé. Por eso digo los grupos de mi juventud: no estoy contando lo que me contaron, estoy contando lo que vi cuando era muchacho. Después le cuento de los capitanes, que es otra lista y más larga.

Hoy los voy nombrando y los cuento con la mano. De algunos queda el sitio; de otros queda el puro nombre, porque el capitán se murió y la gente se regó. Pero mientras yo pueda decir quién vivía en cada vuelta del río, ahí están todavía. Eso es lo que yo tengo: el Duché con su gente puesta encima.`,
    historia: `El hombre que habla aquí tiene nombre. Los textos del libro de Jon Landaburu y Roberto Pineda Camacho, publicado en 1984, se contaron todos en andoque, y la mayoría los narraron el capitán Yiñeko, Plumón-de-Fiebre, y su hermano Yiñejoke, Plumón-de-Gavilán —el Yiñefoque de otras transcripciones—, ninguno de los dos hablante de castellano; la traducción se hizo con Físi, el hijo del capitán. Yiñefoque era el superviviente de más edad cuando se recogió su testimonio: uno de los pocos que alcanzaron la vida tribal anterior a los caucheros. De él es el bloque de páginas donde está esta pieza, la 232, seguida dos páginas después por «Los capitanes de mi juventud».

Su padre se llamaba Yobidi Kadanni, y kádánni es en andoque el gavilán, el nombre que reúne a los predadores del aire y da su nombre al linaje del que salen los dos hermanos. En ese testimonio la autoridad del padre se describe largamente, y su maloca era la que recibía las mercancías cuando empezaron a llegar.

Lo que el relato enumera se puede describir también por fuera de su voz. La gente andoque estaba repartida en veinticinco o treinta linajes, en las partes altas de los ríos Quinché, Aduche e Ipanché —el Monochoa—, tributarios del Caquetá al este de los Chorros de Angosturas, y en las riberas del Flecha, el Yacapeché y el Duché, que desaguan en el alto Cahuinarí. Cada linaje vivía por lo general en una sola maloca de sesenta a doscientos habitantes, apartada de las demás. Los linajes eran exogámicos, patrilineales y patrilocales, y el capitán tenía a su cargo promover el ritual, organizar los trabajos, articular el comercio y propiciar las cosechas, la cacería y la salud de la comunidad.

De ahí salen las dos palabras con que arranca. Los miembros de una maloca se dividían entre los «propios» de la casa y los «trabajadores»; y la gente que estaba bajo la responsabilidad —cósmica— de un capitán eran sus huérfanos, i'hara. Por eso un hombre que recuerda la gente de su padre la cuenta así, por sus huérfanos y sus trabajadores, y no por el número.`,
    versiones: `El territorio que este relato enumera lo describieron varios investigadores y las descripciones no coinciden del todo. Landaburu, en 1970, dijo que los viejos andoque conservaban una toponimia muy precisa de su hábitat tradicional y lo situó al sur del Caquetá, al norte de una línea trazada entre la desembocadura del Nocaimaní y la del Quinché, con los witoto al occidente, los muinane y los nonuya al sur, los bora y los miraña al oriente y los carijona al norte del río. Pineda, en 1975, lo puso en las cabeceras del feikece —afluente del Aduche—, del Quinché y del Aduche, y a lo largo del Duce y el Jakapace, que desembocan en el Cahuinarí. Manuel José Guzmán había reconstruido en 1971 ese territorio antiguo a partir de los relatos de los ancianos andoque y de la toponimia, con la misma clase de memoria que ordena esta página.

Cuántos grupos eran es lo que más varía. Las notas de 1981 listan, entre otros, gente del pájaro mochilero, gente de la pava, gente del venado, gente de la boa, gente borugo, gente canangucho, gente murciélago, gente hormiga arriera, gente cucarrón, gente águila arpía, gente piedra dura, gente arenisca, gente rana, gente guacamayo tricolor, gente guara, gente chontaduro y gente verde; y precisan que la gente del gavilán proviene de Sitio-de-llanto y se divide a su vez en gente de Piedra, gente de Agua, gente de Gavilán y gente de piedra arenisca. En 1992 el capitán Hernando Fixioi Andoque nombró treinta y cinco grupos de filiación patrilineal. Hoy quedan cinco: gente del Águila, del Sol, del Venado, del Cucarrón y de la Hormiga arriera, más unos pocos individuos de los linajes de la pava, el canangucho y la boa, que por la regla patrilineal ya no transmitirán el nombre.

De la población hay cuatro cuentas y ninguna cuadra con las demás: Von Hassel calculó de dos mil a tres mil en 1905; Whiffen, diez mil en 1915; Guzmán, seis mil doscientos cincuenta adultos en 1971; y Landaburu y Pineda rehicieron el cálculo en 1981 por el lado de la residencia, con un promedio de ciento treinta habitantes por maloca, y obtuvieron tres mil doscientos cincuenta con veinticinco linajes y tres mil novecientos con treinta.`,
    similitudes: `Los vecinos tenían el mismo mapa y lo decían desde el otro lado. En los relatos miraña que Mireille Guyot recogió de Luis Miraña, los andoque aparecen como los dueños del hacha de piedra, y los miraña se la cambiaban por coca y por ambil. Whiffen había descrito para toda la región ese comercio, con cada grupo en lo suyo: los menimehe —yukuna— famosos por su cerámica, los bora por las esteras y las cerbatanas, los huitoto por las hamacas, los carijona por sus venenos. Los andoque entraban como proveedores de hachas, sacadas de depósitos antiguos concentrados en los montes del Hacha y del Gallinazo y en las cabeceras del Quinché; de ahí les viene el nombre con que se llaman a sí mismos, y también el que les daban los muinane de Sabana, hi-gaimena, «los del hacha».

La arquitectura social que el relato enumera se repetía igual en los pueblos de al lado. En los bajos Caquetá y Putumayo, bora, andoque, witoto, muinane, resígaro y okaina estaban divididos en linajes locales que residían en una o más malocas, cada una presidida por un capitán cuya función fundamental era promover la actividad ritual, y los miembros de la casa se distinguían entre los propios de la maloca y los trabajadores. Un mapa de grupos con capitán y sitio, dicho río abajo y río arriba, era la forma normal de la región entera.

Lo que aquí no se repite es la primera persona: la de un hombre que alcanzó ese orden, que lo cuenta desde la casa de su padre y que sabe cuáles de esos sitios tienen todavía gente encima.`,
    leccion:
      "Una geografía se sostiene mientras alguien pueda decir qué grupo vivía en cada recodo del río.",
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
    sourceKeys: [
      "tradiciones1984",
      "arazi2024",
      "genteQuemadora1979",
      "ortizGomez1986",
      "diluvio1981",
      "misionLinguistica1970",
      "cicloDelCaucho1988",
      "sanchezBotero2002",
      "guzman1971",
    ],
    mito: `Esto no pasó en el tiempo de antes. Esto pasó cuando yo ya estaba en el mundo.

El peruano llegó primero a tierra muinane. Allá lo recibió el capitán Flor-de-guacamayo, y de allá mandó razón a los otros grupos: que bajaran, que había mercancía para repartir. Y bajó gente. Bajó gente de Fantasma. Bajaron capitanes: Plumón-de-guacamayo, Plato, Cría-de-peine. Cada uno llegó con los suyos, como se llega a un baile, porque así se había dicho.

La mercancía estaba puesta como se pone un regalo. Hacha, machete, olla, tela, anzuelo. Uno alargaba la mano y recibía, y al recibir quedaba adentro de una cuenta que no había visto empezar. Porque aquello no era regalo. Era el primer renglón. Después venía el caucho: había que meterse al monte, rayar el palo, recoger la leche, cuajarla y traerla; y había una cantidad fija que entregar, y el que no la completaba quedaba debiendo. La deuda no se pagaba con más trabajo. Se pagaba con el cuerpo.

Así empezaron los amarres. Amarraban al hombre que llegaba corto. Amarraban al que se quería devolver a su tierra. Al capitán lo amarraban delante de su gente, que es la manera de acabar con un capitán sin matarlo todavía. Y después sí mataban. Se murieron capitanes, se murieron viejos, se murió gente que no tenía nada que ver con la cuenta; unos de golpes, otros de hambre, otros de la enfermedad que vino con ellos y que también era de ellos.

A los blancos les decimos los Quemadores. No es un apodo que se nos ocurrió. Es lo que traían y es lo que hacían.

Esto no es una historia de guerreros que no se dejan. Nosotros nos dejamos, porque no había cómo. La casa se quedó sin gente, la chagra sin quien la limpiara, el mambeadero sin quien hablara en él. A los que se llevaron río abajo no se les volvió a ver. Los que alcanzaron a meterse al monte anduvieron años sin saber unos de otros, viviendo como vive el que no tiene grupo, que es como no ser nadie.

Yo estoy aquí contando. Otros no. Ésa es toda la diferencia, y no la puse yo.

Y lo cuento para que quede el orden en que pasó, que es lo primero que se olvida. Primero la mercancía. Después la cuenta. Después el amarre. Después el muerto. Ése fue el orden, y no fue otro.`,
    historia: `El que cuenta esto es Yiñefoque, Plumón-de-Gavilán, hermano del capitán Yiñeko y el superviviente de más edad cuando Landaburu y Pineda recogieron su testimonio; el mismo que cierra la guerra del palo hablador diciendo que su tierra quedaba lejos, que allá lo cogieron, lo amarraron y lo encerraron, y que acabaron con el personal de su padre. La pieza está en la página 236 del libro de 1984, dentro del bloque de su testimonio, y su padre, Yobidi Kadanni, era el dueño de la maloca a la que llegaban las mercancías.

Detrás hay una cronología que se puede seguir por fechas. En 1902 el capitán de navío peruano Enrique de Espinar cita a los andoque como una de las cinco grandes agrupaciones indígenas al servicio de la compañía cauchera de Arana, que por entonces tenía bajo su control a más de doce mil indígenas; en 1905 el ingeniero Jorge Von Hassel los describe por primera vez —tribu del alto Putumayo e Igará-Paraná, con lanzas y hachas de piedra, hostiles a los blancos—. La Casa Arana se funda en 1903, y ese mismo año había ya cerca de medio centenar de centros de acopio en los ríos Igará-Paraná y Cara-Paraná. En 1907 la empresa se convierte en la Peruvian Amazon Company, de matrícula inglesa. En 1911 el látex asiático hunde el precio del caucho amazónico, pero la casa sigue en la región explotando otras gomas con la misma mano de obra.

El mecanismo que el relato describe está documentado en las denuncias de la época: cada indígena debía entregar una cuota fija y, si no la extraía, era castigado con severidad. Roger Casement anotó en 1910 que los ancianos se habían vuelto raros en el Caquetá-Putumayo, y en especial entre los andoque, porque Armando Normand, el capataz de la zona, mató a los viejos que no podían recoger caucho y de quienes se sospechaba que aconsejaban a los jóvenes no recogerlo. Jon Landaburu lo resumió en 1970 sin matices: todos los andoke son supervivientes o hijos de supervivientes del genocidio perpetrado de 1900 a 1930 por los hombres de mano de la Casa Arana.

De ese tiempo vienen dos palabras del relato. A los blancos los llamaron desde entonces /di-iehe/, «gente quemadora». Y «personal», que aquí nombra a la gente de un capitán, era el término con que los caucheros llamaban a sus trabajadores: la lengua del campamento entró en la memoria junto con el campamento.`,
    versiones: `Hay otra matanza contada desde afuera y no coincide en casi nada. En 1978, en Guaymaraya, Fernando Urbina recogió de Chúumu Gúio —dentro de la biografía de un muinane— lo que a él le había contado su cuñado Bartolo, muerto a los noventa y dos años, que a los dieciocho fue tulero del ejército y lo vio. Según ese relato, dos caucheros colombianos llegaron de buen modo, mandaron sacar el caucho de dos bodegas llenas, hicieron levantar una maloca grande que en tres días estuvo lista y convocaron un baile para la fecha en que tenían acordada la llegada de la tropa. La víspera mandaron a toda la tribu, mujeres incluidas, a traer leña; la amontonaron en el patio, la prendieron con gasolina, cerraron la puerta y ordenaron rodear la maloca y disparar contra ella. Un hombre llamado Mukutí sacó a ocho o quince andoque diciendo que eran sus parientes; los demás, entre hombres, mujeres y niños, eran cerca de mil. A eso se le llamó «la librada de matanza». Aquí los autores no son peruanos sino colombianos, y la fecha sólo se sitúa «antes del Conflicto».

Las cifras generales tampoco concuerdan. La introducción del ciclo de 1981 habla de más de sesenta mil nativos asesinados por la Casa Arana en toda la región; Esther Sánchez Botero, en 2002 y sobre los mismos textos de 1984, habla de una masacre en la que murieron doce mil indígenas.

Y de la respuesta andoque hay tres versiones. Pineda escribió en 1988 que en 1903 una comunidad andoke, según algunas fuentes, tendió una celada a un grupo de caucheros: las cabezas fueron cortadas y exhibidas sobre los manguarés, y los brazos y las piernas se conservaron en agua para atemorizar a los invasores. Del levantamiento del capitán murui-muina Yarocamena, en 1917, Eliran Arazi recoge que sólo se sumaron tres linajes andoque y que el capitán Dóñékɒi rechazó el tabaco con que se invitaba a la revuelta; Guzmán, en 1971, había contrastado ese levantamiento con narraciones de los viejos andoque sobre un hecho semejante. Sánchez Botero, en cambio, cuenta que hacia 1930 los andoque pusieron fin a la guerra con flechas envenenadas y que los caucheros pidieron la paz.`,
    similitudes: `El nombre no es sólo andoque. Los bora y los muinane llaman al blanco de la misma manera, gente que quema, y el nombre admite dos lecturas que las fuentes no deciden: las notas de 1981 lo explican probablemente por los fusiles, y el relato de la maloca incendiada lo explica al pie de la letra. Que los tres pueblos vecinos coincidieran en la palabra dice que lo nombrado era lo mismo para todos.

Tampoco fue la primera vez que la mercancía subió por el río y se llevó gente. Los andoque cuentan que algunos de los linajes que habitaban las riberas del Caquetá desaparecieron durante el siglo XIX engañados por los delfines, que simulaban ser comerciantes: en toda la región los comerciantes fluviales quedaron simbolizados por la figura del bufeo, y aquel tráfico de esclavos y de epidemias es el que medio siglo después vuelve con hachas y anzuelos. El relato del caucho repite la forma del otro: el visitante que reparte y la gente que se va con él.

Y el desenlace fue regional, no andoque solamente. En 1928 un funcionario enviado por el gobierno colombiano a censar las poblaciones del río Caquetá encontró la mayor parte de las localidades sujetas a la Casa Arana totalmente desocupadas, la población indígena deportada y no pocos indios huyendo hacia el norte, al Orteguaza o al Mirití-Paraná, para escapar de la diáspora.`,
    leccion:
      "La mercancía que se recibe primero como regalo se cobra después en cuerpos.",
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
    sourceKeys: [
      "tradiciones1984",
      "arazi2024",
      "ortizGomez1986",
      "misionLinguistica1970",
      "genteDelHacha1975",
      "diluvio1981",
      "guzman1971",
      "cicloDelCaucho1988",
    ],
    mito: `Cuando acabaron con nosotros no quedó un pueblo: quedaron pedazos de pueblo, regados por el monte, cada uno con su miedo. Un hombre solo en la selva no es un hombre. Es un animal que habla.

Plumón-amarillo fue el que los juntó. No los hizo de nuevo ni los levantó de muertos: fue a buscarlos donde estaban y los trajo. Al que encontró lejos lo llamó. Al que venía de un linaje del que ya no quedaba nadie más, lo recibió igual, aunque antes esos dos linajes se hubieran flechado. Así se fue armando otra vez una gente, de a uno, de a dos, de a familia entera.

No era de los capitanes grandes de antes. Se hizo capitán cuando ya el caucho estaba andando, y los del caucho le dieron arma para que respondiera por la entrega de los suyos. Después soltó el arma y se puso a organizar bailes, que es el otro modo de responder por la gente. A los cautivos que le tocaron no se los comió: los puso a trabajar.

Se instalaron en un río que entra al Caquetá; no en el de siempre, en otro, más al norte. Eso lo arregló el patrón, un blanco que había sido de la Casa Arana y que se había hecho a su propia gente; años antes había mandado abrir chagras por allá, para que hubiera con qué comer cuando llegaran. Con él la cosa era menos brava que con los de antes, y aun así era eso: se rayaba el monte, se entregaba la goma, se recibía la comida del patrón y se quedaba debiendo.

Ahí volvió a haber casa, y siembra, y baile, porque donde hay más de un grupo hay con quién bailar, y donde hay baile hay gente. Y fueron siendo hartos, más de los que nadie habría apostado después de lo que pasó.

Pero arriba del patrón había otros, y esos otros se dieron cuenta. Llegaron por el río y encontraron la casa y encontraron la gente junta, y se la llevaron. Casi toda. Río abajo, al Perú, a una ciudad de allá. Al patrón también se lo llevaron preso, aunque él se les voló. Plumón-amarillo no se voló: se fue con su gente y no volvió a pisar esta tierra nunca más.

Se salvaron los que alcanzaron a correr: unos pocos, un puñado. Entre ellos iba un muchacho, casi un niño, que era hijo del que los había reunido.

Por eso este retorno no se cuenta como una fiesta. Juntarse fue lo que había que hacer y estuvo bien hecho. Pero juntarse también es dejarse ver: la gente regada no la encuentra nadie, y la gente junta cabe en una lista y cabe en una canoa. Eso se aprendió ahí, y costó lo que costó.`,
    historia: `Plumón-amarillo es Dóñékɒi, padre del capitán Yiñeko, y ésta es la página 239 del libro de 1984: el primero de los dos reagrupamientos andoque del siglo XX.

No venía de una casa grande. Su padre, Padamnta, no figura entre los capitanes de linaje del tiempo anterior al genocidio, y Yiñefoque, que sí era hijo de uno de ellos, contó que Dóñékɒi llegó a ser uno de los dos capitanes cuando la extracción de caucho ya estaba en marcha; le cedió el mando, según los andoque, porque él mismo se había formado en una especialización medicinal y no le gustaba mandar. Dóñékɒi ya era capitán en 1917, cuando rechazó el tabaco con que el capitán murui-muina Yarocamena invitaba a los capitanes a su revuelta. Los agentes de la compañía le dieron armas para asegurar la entrega de caucho de su gente, y esa colaboración se lee hoy como el cálculo de quien intentaba reducir la tortura y el exterminio; sus nietos recuerdan que prefería poner a trabajar a los cautivos que recibía, y que después dejó el arma para hacerse cacique y organizar bailes.

Bajo su autoridad se reunieron supervivientes de varios clanes, unas trescientas personas. El traslado al río Metá, pequeño afluente izquierdo del Caquetá, aguas arriba del puesto de policía de La Pedrera, fue iniciativa de Miguel Zumaeta, antiguo empleado de Arana que trabajaba ya por su cuenta y que años antes les había hecho abrir chagras allá: quería sacarlos del alcance de la compañía, que planeaba deportarlos. Zumaeta había tomado mujeres andoque y hablaba la lengua; bajo su mando la gente pudo cultivar para comer y celebrar bailes.

El plan se supo. En 1928, cuando los superiores de Zumaeta lo descubrieron, el grupo fue deportado al Perú: trescientas sesenta y una personas, según la cifra registrada. Zumaeta fue hecho prisionero y logró escapar. Una veintena huyó al bosque; entre ellos el hijo del capitán, que tenía trece años. Dóñékɒi no volvió nunca a su tierra. La comunidad de hoy es producto de esa veintena.`,
    versiones: `Del capitán de este primer retorno hay cuatro nombres. Eliran Arazi, leyendo el libro de 1984, traduce Dóñékɒi como Plumón-amarillo y lo identifica como padre de Yiñeko: ésa es la equivalencia que sostiene esta página. Pineda, en 1975, llama Trueno de Piedra al capitán que reunió a algo más de trescientas personas en el Metá; Landaburu, en 1970, dice que la unidad se reconstituyó alrededor de Fitsidoudeu, antiguo jefe de maloca del clan del gavilán, y que el que huyó al monte era su hijo; Landaburu y Pineda escriben en 1981 que a finales del treinta subsistía un pequeño grupo de unas doscientas personas reagrupadas bajo la autoridad del capitán Doñekoi. La relación padre-hijo se repite en todas; la equivalencia de los nombres entre sí no la declara ninguna.

Las fechas y las cifras tampoco coinciden. Landaburu sitúa el grupo del Metá hacia 1925 y la deportación hacia 1930; Arazi la fecha en 1928; Pineda y Landaburu, en 1975 y 1981, dicen sólo que fue antes del conflicto de 1932. El grupo tiene trescientas personas en 1970 y 1975, doscientas en 1981, y trescientas sesenta y una deportadas en la cuenta que recoge Arazi. Y sobre quién se los llevó hay dos respuestas: una brigada o destacamento militar peruano que dio con la comunidad, o la Casa Arana ejecutando una deportación planeada.

De Zumaeta hay dos memorias opuestas. Para Fisi y Nestor, los nietos del capitán, fue el salvador que los sacó de manos de Normand; Guzmán apunta que la Casa Arana sólo lo envió a reorganizar el trabajo andoque en 1925, y Levy Andoke escribe que al volver del cautiverio nunca dio explicación alguna sobre la gente capturada con él, y que aun así los andoque lo aceptaron de nuevo.`,
    similitudes: `Un capitán que absorbe la gente de los otros capitanes es una figura que el propio corpus ya tenía escrita. En el libro de 1984 se lee, del dueño del palo multiplicador, que recogió todo el personal de los otros capitanes para personal de él, que los otros se quedaron callados porque ya no tenían personal, y que por todas partes se oía su voz, la única que se oía: sonido de manguaré, sonido de palo multiplicador, sonido de pilón de coca; y que ése era el capitán más nombrado. Juntar bajo una sola voz a los que andaban repartidos no es una invención del tiempo del caucho: es lo que en esta mitología significa ser capitán, y el relato del retorno lo repite en condiciones nuevas.

El otro paralelo lo da el vocabulario andoque para clasificar a la gente. El índice temático de 1981 describe la oposición entre rojos y blancos, que separa especies animales, linajes, ritos e individuos: los rojos son gente cruel, brava y engañosa, se adornan con achiote y plumas de guacamayo rojo, y sus animales son los predadores. Al final de esa entrada hay una línea que ordena esta ficha entera: a los peruanos se les llama los rojos. Los que se llevaron a la gente del Metá no entran en la memoria como una novedad sin categoría; entran ya clasificados.

Lo que distingue a esta pieza de cualquier otra historia de dispersión y regreso es que el regreso sale mal, y que la página siguiente del libro tiene que contar el segundo.`,
    leccion:
      "Reunir a los que quedaron vuelve posible la vida común, y también la vuelve visible.",
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
    sourceKeys: [
      "tradiciones1984",
      "ortizGomez1986",
      "arazi2024",
      "misionLinguistica1970",
      "diluvio1981",
      "genteDelHacha1975",
      "sanchezBotero2002",
      "guzman1971",
    ],
    mito: `Después de que se llevaron a la gente quedó el monte con personas adentro, que no es lo mismo que quedar gente. Cada uno donde lo agarró la corrida. Unos bajaron el río y se quedaron en un sitio donde había miraña y yucuna, viviendo entre gente que no era la suya. Y allá se siguió muriendo gente, ya no de bala sino de sarampión, de viruela, de gripa.

Tu papá fue el que nos unió, aquí. Era joven, era del linaje de las águilas, y a él también le habían quitado a los suyos. Lo que hizo no fue pelear ni cobrar: se puso a buscar. Caminó preguntando, fue sacando a uno de un campamento de caucho y a otro de un caño, y nos trajo. Nos reunió en un solo sitio. No había ningún otro que nos reuniera.

Nosotros de verdad parecíamos muertos. Cuando tu papá llegó aquí, enseguida nos fuimos con él, a un solo sitio, y ahí volvimos a ser gente. De nuevo nos volvimos gente, de nuevo crecimos; pero antes no éramos nada.

Uno, solo, es como un muerto. Es cuando varios se reúnen con un capitán cuando empiezan a volverse humanos otra vez. Por eso lo primero que hizo no fue sembrar: fue levantar maloca. Una casa de pilotes guarda de la lluvia pero no hace ritual. En la maloca hay mambeadero, y hay instrumentos, y por los instrumentos habla el capitán, y esa voz se oye lejos y le llega a todos al tiempo. Donde se oye esa voz hay pueblo. Donde no se oye hay gente perdida.

No llegaron andoque solamente. Llegaron los últimos de linajes que ya no tenían a nadie más, y llegaron algunos de otras tribus que también andaban sueltos. A ésos se les dice huérfanos, y no porque se les hubiera muerto el padre: porque no tenían capitán. El que se acoge a un capitán deja de andar suelto, y el capitán responde por él; y no responde solamente por lo de comer: responde por él arriba, en lo que no se ve.

Y volvieron los bailes. Se bailó la fruta sembrada y la fruta del monte; se bailó el armadillo, para bautizar a los que iban naciendo; se bailó la charapa, el murciélago, el pájaro piriri. Para bailar se necesitan dos, uno que invita y otro que llega, y como quedábamos tan pocos nos repartimos nosotros mismos en grupos para poder invitarnos. Así, de a poco, volvió a haber con quién.

Y desde entonces la cuenta va para arriba: primero fuimos los que él encontró, después fuimos más, y después ya nacían niños que no habían visto nada de aquello y que preguntaban. A ésos hay que contarles. Por eso te estoy contando a ti.`,
    historia: `Plumón-de-Fiebre es Yiñeko, el capitán que narró la mayor parte del libro de 1984, y quien habla aquí es su hermano, Yiñefoque, dirigiéndose a Físi, el hijo del capitán y traductor del corpus. Eso explica el «tu papá» con que empieza la página 242.

Yiñeko era un muchacho de diez a trece años cuando se llevaron al grupo de su padre. Escapó con un puñado de gente y pasó los años siguientes en La Palma, río Caquetá abajo, cerca de La Pedrera, donde vivían también miraña y yucuna; en ese tiempo la población andoque siguió menguando por las epidemias que azotaron la región a finales de los años veinte y comienzos de los treinta, sarampión, viruela y gripa. Hacia mediados de los años treinta —Landaburu fecha el regreso hacia 1938— tomó la iniciativa de volver al territorio tradicional con los andoque que pudo reencontrar: doce hombres, contándose a él, y catorce mujeres.

Bajo la protección del linaje de las águilas arpías se agruparon indígenas de linajes casi extinguidos y de otras tribus; esos huérfanos se acogieron a la protección cósmica que el joven capitán ofrecía y levantaron maloca nueva para celebrar el ritual y disponer de la voz de un capitán, expresada a través de los instrumentos rituales. Se asentaron primero cerca del río Armadillo, apartados del Caquetá, y con los años fueron acercándose al río grande. El caucho volvió con ellos: Miguel Zumaeta regresó en los años treinta a trabajarlo con los supervivientes.

La cuenta sube despacio. El grupo tenía setenta y cinco miembros cuando Landaburu lo visitó, en 1969 y 1970; unos ciento treinta en 1975, en la desembocadura del caño Aduche, abajo de Araracuara; y se estimaba en ciento cincuenta en 1981. Los relatos del corpus se grabaron de noche, mientras se preparaba y se consumía la coca, en la maloca de ese capitán, con su asistente Doikoa al lado. La memoria del reagrupamiento se contó dentro de la casa que el reagrupamiento levantó.`,
    versiones: `El nombre del capitán cambia con la grafía de cada autor: Jiñeko en 1981, Jiñeke en 1975, Djiñeko en 1970, Yiñékɒ en la transcripción de Arazi. Que todos sean Plumón-de-Fiebre lo establece la reseña que Francisco Ortiz Gómez publicó del libro en 1986, donde nombra al capitán Yiñeko, Plumón-de-Fiebre, y a su hermano Yiñejoke, Plumón-de-Gavilán, como narradores del corpus. Lo que sigue variando es la edad a la que escapó —trece años para Landaburu, de diez a doce para Arazi— y la fecha del regreso: la década del treinta en 1981, mediados de esa década en Arazi, hacia 1938 en Landaburu.

También cambia lo que se entiende por reunir. En 1981 la reunión se describe en términos rituales: protección cósmica bajo el ala del linaje de las águilas arpías, maloca nueva, voz de capitán. En 1970 se describe en términos sociales: es el hombre que permitió que los individuos perdidos en el bosque volvieran a ser gente, porque uno no es humano, hoihoi, sino viviendo en grupo. Landaburu sostuvo además que Yiñeko rehízo la mitología, desplazando al dios caníbal Ñe'ñefi y a los héroes de los clanes hacia el cielo y poniendo en el centro a las garzas del eje del río; Arazi matiza que ese giro puede ser anterior y venir ya de la capitanía de su padre.

Y hay una diferencia de forma. Sánchez Botero, que trabaja sobre los mismos textos, los imprime como los dice el potsoa, el hombre del banquito cuya misión es pensar y hacer pensar lo que se ha vivido, con la maloca entera mascando coca y repitiendo la última estrofa. Ortiz Gómez explica por su parte el principio que ordena el libro: no es temporal sino espacial —Cabecera al occidente, Centro, Bocana al oriente, más cenit y nadir—, porque así está estructurada la lengua y así la geografía del Caquetá.`,
    similitudes: `La palabra huérfano hace en esta memoria el mismo trabajo que hacía en la mitología. La introducción del ciclo de 1981 advierte que esa categoría ocupa un papel central en la religión andoque, como fundadores de la cultura, y que antes del caucho los huérfanos servían de medio de cambio con el blanco y aun con otras tribus. Quienes se acogen al capitán del segundo retorno son llamados con esa misma palabra: los que no tienen quién responda por ellos, que es justamente la gente con la que en este corpus se empieza algo. Landaburu observó que fue el propio Yiñeko quien introdujo figuras de huérfano en varios mitos, y que en ellas se reconocía su propio origen humilde.

El segundo paralelo está en los tambores. El índice temático de 1981 describe los dos maguaré: el corto es el que viene rodando del cielo acompañado por las mariposas, y de él se dice que crea la gente, que hace levantarse a la gente; el largo llega después, cuando ya hay gente, para que la gente se aumente, y es el dios de aquí abajo. Levantar primero y aumentar después es la secuencia exacta de este retorno, y explica por qué lo primero que se hizo fue una maloca donde sonaran los instrumentos.

Hay un tercer eco, más discreto. Landaburu observó en 1970 que, pese a ser tan pocos, los andoque se dividieron enseguida en subgrupos distintos para que los intercambios ceremoniales pudieran reanudarse. No se agruparon en bloque: se agruparon de manera que hubiera con quién. Reconstruir un pueblo consistió, muy literalmente, en fabricarse vecinos.`,
    leccion:
      "Nadie es gente a solas: hace falta alguien que junte a los que quedaron sueltos.",
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
    sourceKeys: [
      "diluvio1981",
      "lenguaAndoque",
      "sanchezBotero2002",
      "ortizGomez1986",
      "verdadAndoque1976",
      "genteDelHacha1975",
      "urbina1991",
      "guyot1979",
      "tradiciones1984",
    ],
    mito: `Garza-de-bocana llegó a la casa de Garza-de-centro y le dijo que venía a conocerlo porque era muy famoso. Charlaron un día entero y una noche. Cuando el visitante se iba le dieron casabe, piña, caimo, maní, panguana y coca; él lo echó todo en su catarijano y se fue.

Camino del puerto vio a la mujer de su anfitrión bajando a bañarse y le dieron deseos de ella. Quiso esconderse para mirarla mejor, se subió a un puente, resbaló, cayó al agua y murió. Garza-de-centro bajó al puerto, encontró el cuerpo y se rió; después lo hizo respirar de nuevo y le preguntó qué le había pasado. «No, nada», dijo el otro. Se fue para su tierra y, para vengarse, preparó la guerra del palo hablador.

Dos hijos de Nenefi fueron al río a buscar camarones y vieron dos gusanos encima del tronco de un árbol grande. Corrieron a avisar. Cada vez que alguien bajaba a mirar había más, y cuando bajó toda la gente de la casa el árbol estaba lleno desde la cepa hasta la primera rama. El gusano se puso a hablarles: les preguntó si les gustaba aquello y los llamó a pelear, y mientras hablaba les disparaba flechas hechas de astilla del mismo palo. Los armadillos escarbaron la cepa para derribarlo, pero se llenó de avispas, de hormigas que pican y de gusanos. Llegaron el pájaro bruja, el garrapatero, la cacambra, el tente y el picón, cada uno a comerse lo suyo, y tampoco pudieron.

El capitán Nenefi fue entonces a la casa de Trueno a pedirle su arma. Trueno se la dejó, pero no era la verdadera: no era de corazón de palo sino de balso, y su propio hijo lo sabía y se quedó callado. Nenefi alumbró el arma con el espejo, dio el golpe y el arma se quebró sobre el palo. «Qué, ya me mató?», se burló el gusano.

Garza-de-centro mandó a los murciélagos Noé y Sre donde la abuela Doña Sueño, en la cabecera, con ambil y coca. Ella les sacó el sueño de los dos párpados, lo echó en una hoja doblada y les dijo que no miraran. En el camino desconfiaron porque la hoja iba muy liviana, la abrieron y cayeron dormidos. Mandó entonces a Mochilero-de-candela, que llegó por el aire, rompió la pared de la maloca por detrás y le sopló el sueño en la nuca a Trueno mientras mambeaba. Trueno bostezó, dejó al hijo cuidando y se acostó.

El hijo, Trueno-de-piedra, era sobrino de Garza-de-centro. Por dos caimos le quitó a su padre el arma verdadera, la cambió por la de balso y se la entregó al tío. «Maneje usted el arma, yo no sé», le dijo Garza-de-centro, y bajaron donde el palo. Trueno-de-piedra relampagueó con el espejo y temblaron el palo, los gusanos, las avispas y las hormigas congas. Levantó el arma, el golpe llegó sonando y cayeron todos los gusanos, y el palo quedó callado. Con el segundo golpe lo partió en dos: una parte cayó al río y otra al centro, y las hojas se regaron y se volvieron las ranas que se comen. Al que se burle y se haga el guapo le pasará lo mismo.

Trueno despertó y no encontró su arma buena. Le preguntó al hijo si la había entregado a esa gente y amenazó con acabar con todos ellos. Trueno-de-piedra le contestó que él estaría ahí, porque sale a favor de su gente aquí y en todas partes.

No era el palo el que hablaba sino el gusano, el gusano Cuero-negro. Al lugar donde cayó se le dice Remanso-de-trueno, en el río Duché, y allí el palo se volvió piedra: no de la clase oscura y dura, sino de la arenosa. Arribita de donde estuvo el tronco está la loma de Sitio-de-llanto, y su gente y la del tronco se la pasaban lanzándose flechas.`,
    historia: `Este relato se recogió en la comunidad andoque del Aduche, abajo de Araracuara y cerca del río Caquetá, y lo cerró su propio narrador diciendo su nombre: «Ya yo te conté, yo, Yiñefoke, ya que soy un hombre de mucho tiempo». Yiñefoque, Plumón-de-Gavilán, era hermano del capitán Yiñeko y el superviviente de más edad de la época de los caucheros. Así lo dijo a continuación: que él no era de esa tierra, que la suya quedaba lejos, que allá estaba cuando llegaron los Quemadores —los blancos—, que allí lo cogieron, lo amarraron y lo encerraron, y que acabaron con la gente de su padre. Por eso se vino, trabajando en una parte y en otra, hasta llegar al Aduche. Contó el mito, dijo, como se lo contó su papá, y sin mentira.

Jon Landaburu y Roberto Pineda Camacho publicaron la transcripción en 1981, en Maguaré. Los relatos se grabaron de noche, durante la preparación y el consumo de la coca, en la maloca del capitán, con su asistente Doikoa presente, y se transcribieron y tradujeron con Fisi, el hijo bilingüe del capitán; ni Yiñefoque ni su hermano hablaban castellano. Va numerada párrafo a párrafo y lleva detrás un índice temático y ciento treinta y una notas con la ortografía andoque, las especies y las variantes de los otros narradores. De ahí salen los nombres propios de los dos protagonistas: Kéyo'fi, el que vive en la bocana, hacia el oriente, y dityo'fi, el que vive en el centro del mundo, arriba del río Duché, debajo de las formaciones rocosas de Sitio-de-llanto. Y de ahí sale también una precisión sobre el arma: lo que la traducción llama espada es sode, la macana o mazo de guerra.

El texto publicado no es de una sola pieza. Los editores advierten que a partir del párrafo dieciocho y hasta el treinta y dos el relato viene de otra fuente oral, y que en ella el personaje principal ya no se llama Nenefi sino Garza-de-centro. Por eso el capitán que va a pedirle el arma a Trueno y el que la maneja al final llevan nombres distintos: es la costura entre dos maneras de contarlo.

Landaburu recogió además una versión más corta del mismo arranque, en andoque y glosada palabra por palabra, que titula hanidytaky, «el árbol hablador». Ahí se ve algo que la traducción corrida no deja ver: el relato empieza con la fórmula de quien lo pide —«así como te lo dije entonces, no te vamos a contestar, por eso lo sigues derecho»—, y aun así la transcripción conserva las preguntas que un asistente intercala mientras se cuenta. «¿La gente habló con ellos?», pregunta alguien. «No —responde el narrador—: la oruga tadé es la que habla con la gente».

Hay además una manera andoque de decir cuánto se responde por lo que se cuenta. Toda oración que afirma algo lleva en esta lengua una palabra obligatoria que señala de dónde le viene al hablante lo que afirma: si lo vio, si se lo contaron o si lo dedujo. Quien recogió estos relatos anotó que el mundo del mito no admite la marca del pasado concluido, porque no es un mundo lejano sino uno que vuelve a actualizarse, y que un narrador seguro usa -háñé, que dice que los hechos, indudables, le fueron revelados por otros sabios. Quien se lo explicó fue Fisiói, hijo del capitán Yiñeko: «-háñé es palabra de narrador seguro. Mi papá dice ahora a menudo -hápé. Pero es porque la gente no pone el mismo cuidado».`,
    versiones: `El artículo de 1981 distingue tres fuentes orales y las numera. La principal sostiene el hilo; la segunda añade que los gusanos no aparecieron solos, sino que Garza-de-bocana los mandó para vengarse y que habían subido el río bajo la forma del pescado táde, y precisa que el gusano es ñe'tasi, «cuerpo negro», el mismo al que el epílogo llama Cuero-negro. Para la tercera, Garza-de-centro y Nenefi son un solo personaje con dos nombres. La página no funde esas versiones en una sola: las deja verse.

La versión glosada de Landaburu corrige de paso una identificación: lo que habla en el árbol es la oruga tadé, y el narrador lo dice expresamente cuando un oyente pregunta. Esa versión guarda también la marca gramatical con que el andoque señala lo que se cuenta de oídas: cuando dice que el árbol les lanzó flechas, el verbo lleva el citativo, «según cuentan».

La edición de 1984 imprime el relato de otra manera. Ahí no va en prosa seguida sino como lo dice el potsoa, el hombre del banquito cuya misión es pensar y hacer pensar lo que la comunidad ha vivido: cada verso lo repite la maloca entera, sentada en buena posición y mascando coca. «M'hija haga casabe para el amigo que se va», dice el narrador; «para el amigo que se va», responden.

El índice temático de 1981 ofrece además la clave que ordena el relato entero. Los andoque separan a la gente, los linajes, los ritos y los animales en rojos y blancos: los rojos son bravos, crueles y engañosos, y sus animales son los predadores; los blancos son pacíficos y veraces, y sus animales son los pajaritos, las palomas y las garzas. Un padre de familia escoge cuáles de sus hijos serán rojos y cuáles blancos. En la tabla que los autores levantaron, el palo hablador enfrenta a Trueno, rojo, con Garza-de-centro, blanco. El arma prestada que se quiebra y el sobrino que entrega la verdadera dejan de ser un episodio suelto y pasan a ser esa oposición en marcha.`,
    similitudes: `El relato termina señalando una piedra. El palo cayó en un lugar del río Duché que desde entonces se llama Remanso-de-trueno, y allí quedó convertido en piedra arenosa, no en la oscura y dura. Ese gesto —fijar un episodio en una roca del río— tiene vecinos documentados. Los levantamientos del medio Caquetá contaron unos dos mil quinientos grabados repartidos en catorce sitios a lo largo de cuatrocientos kilómetros, entre La Pedrera y Araracuara, y quien los recorrió después encontró que cada pueblo que fue llegando rehizo los glifos anteriores, superpuso los suyos y dejó consignada en su propia mitología la lectura de lo que iba encontrando. Los relatos que se recogieron junto a esos sitios son uitoto y muinane; los andoque leen su tramo del río con el mismo procedimiento y con otros nombres.

Los bora, río abajo, llaman al Caquetá el Mar de la Danta y sitúan en Araracuara el hueco del Guacamayo, que tienen por pieza de brujería. Tres pueblos vecinos, un mismo río, y en cada uno una cartografía distinta hecha de episodios.

La otra semejanza no está afuera sino en el uso. La partición entre rojos y blancos que ordena esta guerra ordena también cómo se leyó la historia reciente: a los peruanos que llegaron con el caucho los andoque los contaron entre los rojos, que es donde estaban ya el sol, las estrellas y los predadores. La misma rejilla sirvió para pensar una guerra entre capitanes y para pensar la que vino después.`,
    leccion:
      "La guerra no la ganó el arma prestada sino el sobrino que estaba dentro de la casa enemiga.",
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
    sourceKeys: [
      "diluvio1981",
      "sanchezBotero2002",
      "ortizGomez1986",
      "genteDelHacha1975",
      "arroyoKalin2019",
      "cicloDelCaucho1988",
      "misionLinguistica1970",
      "tradiciones1984",
    ],
    mito: `Cuando acabó la violencia del palo hablador, su raíz se volvió sapo y empezó a decir que el sitio había quedado barrido por el soplo. El pajuil real sabudui lo oyó y se puso a cantar que Huevo-de-chupaflor era tuerto. Él decía que el ojo se lo chuzaron en la guerra, y era mentira.

Su nacimiento había sido otro. A las hijas de Príncipe-de-la-Ilusión las tomaban en la chagra las culebras, hijas de Guacamayo-rojo, y ellas ponían huevos de los que salían chupaflores. La hermana menor recogió uno y el papá le dijo que lo criara. Lo tuvo al pie del fogón, envuelto en algodón de hormiga. Una mañana el huevo chilló; ella lo chuzó con una espina para mirar y le dio en un ojo. Al otro día salió un humano tuerto, y le decían huerfanito.

Ya hombre, armó trampas y a cada pájaro que caía le preguntaba cómo cantaba, y lo soltaba. Cuando agarró a sabudui le exigió el canto entero; el ave repitió que a Huevo-de-chupaflor lo había vuelto tuerto su propia gente. Él se rió, le pidió que lo cantara otra vez y, antes de que acabara, le quebró la nuca.

En esa casa mandaba Buen-mando, llamado también Fuente-de-abundancia y Garza-de-centro, el que tumbó el palo hablador. Su mujer, Doña Hoja-amarilla, le tenía rabia porque se la pasaba sentado pensando, y un día que él le pidió casabe lo regañó por el casabe. Él dijo que no comería más, que tenía que pensar con qué vivirían sus hijos cuando él desapareciera, y se fue debajo de la tierra. Los hijos le reclamaron a la madre y ella también se les desapareció.

Debajo de ellos empezó a sonar algo, cada noche más duro. Al pie del chontaduro vieron salir una hoja como una aguja. El menor la nombró: es la coca, no la vaya a tocar. Era el padre, vuelto eso para enseñarles. Les mostró dónde iba a quedar el mambeadero y dijo que viviría arriba. Ese es Sindi, dijo el menor, el Trueno-carnívoro, y avisa que viene agua de fuego desde el oriente.

En la casa del centro cocinaron el ave y mandaron a los huérfanos a botar los huesos al río sin chuparlos. El menor dijo que cómo iban a botar unos huesos que tenían carne. Partieron una punta, se les fue el agua a la boca y bebieron hasta llenarse. Soltaron el hueso y siguió derramando; lo clavaron en la tierra y seguía brotando. Se oscureció el cielo, llovió, y el águila represó el agua con sus alas en la bocana. La casa del centro estaba revestida de barro y aun así se hundió toda la tierra.

Los huérfanos llegaron a la loma de Sitio-del-llanto; allí pisaron la semilla del palo tona y el palo germinó. Se sentaron en ramas opuestas y subieron con él, comiendo de lo que les venía del cielo, donde estaba su madre.

Pasó Canoa-de-opái en su canoa de hojas y fue quien los reconoció; con él venía Huevo-de-chupaflor. Los dos iban a la bocana a buscar el fuego. Una niña lo recogió creyendo que era hijo de un pajarito, pero sus padres sabían a qué venía y taparon la puerta con una atarraya. Él agarró un tizón, la quemó y salió volando. En el camino el pajuil se lo tragó, y lo que cagó se lo tragó el pescado pejedulce: de ahí salió la piedra tetee de hacer fuego.

Los huérfanos seguían en el palo sin luz. El pescado caloche rompió por dentro el cerco del águila y el agua empezó a secarse. Cayó del palo tona una semilla: es la sardina del amanecer. Se despegó una vaina hacia la bocana y otra hacia la cabecera: las pavas del amanecer. Vieron la claridad en el oriente y germinó la semilla del ají de su madre. Ya amanece para nosotros, se dijeron; ya vamos a ser hombres.`,
    historia: `Esta es la segunda parte del primer ciclo de fundación del mundo andoque, recogida en la comunidad del Aduche, abajo de Araracuara y cerca del río Caquetá, y publicada por Jon Landaburu y Roberto Pineda Camacho en 1981 en la revista Maguaré. El ciclo lo contaron dos hermanos que no hablaban castellano: el capitán Yiñeko, Plumón-de-Fiebre, del linaje de las Águilas, y Yiñefoque, Plumón-de-Gavilán, el superviviente de más edad de la época de los caucheros. Se grabó de noche, durante la coca, en la maloca del capitán, y se tradujo con Fisi, su hijo.

La transcripción va numerada del uno al cincuenta y ocho y está dividida en tramos. Uno de ellos, «Los huerfanitos», cuenta quiénes eran los dos hermanos que muerden el hueso y de dónde viene la coca. El padre es Buen-mando, mánoěidi, el mismo capitán que tumbó el palo hablador, y su desaparición se dice en andoque con una palabra que significa literalmente «se volvió carencia»: por eso los hijos son los carentes. La mata que sale al pie del chontaduro es la coca, y los editores anotan que su consumo es fuente de sabiduría; el sitio que el padre les señala es el mambeadero, donde se quema la ceniza que se mezcla con la hoja.

Los nombres vienen de la traducción publicada y de las notas: Fuente-de-abundancia es toěid; la mujer que regaña por el casabe es Doña Hoja-amarilla, dópuka, llamada también Doña Yuca-de-manicuera; la piedra tetee es el guijarro de río con el que los antiguos andoques hacían fuego.`,
    versiones: `El artículo trabaja con tres fuentes orales numeradas y anota dónde discrepan, en vez de fundirlas. La discrepancia mayor afecta al personaje que da título a la ficha: para la segunda fuente hay dos Huevo-de-chupaflor y no uno. El que llega con el fuego desde la bocana sería el verdadero, y el tuerto —el del huevo que la hermana chuzó con la espina— sería otro, que se ahogó con la creciente. Esta página cuenta la versión seguida en el cuerpo de la transcripción, que es la de la primera fuente, y deja dicho que la otra existe.

La misma fuente cambia también la lista de los pájaros atrapados en las trampas: donde la principal nombra la panguana, la panguanita, el tente y la pava colorada, el relato paralelo trae otros nombres andoque y añade la gallineta. Y los editores advierten que Fuente-de-abundancia, el capitán de la casa del centro, es el mismo Garza-de-centro que ganó la guerra del palo hablador, mientras que Nenefi, Sindi y Tomirepa son los habitantes del centro en la era siguiente, la del diluvio. Las eras no se superponen por descuido: el corpus las ordena así.

El ciclo entero va numerado del uno al cincuenta y ocho en la transcripción de 1981, con los cantos de cada ave en andoque, los diálogos completos y las notas de los editores. La edición de 1984 imprime estos relatos de otra manera: no en prosa seguida, sino como los dice el potsoa, el hombre del banquito cuya misión es pensar y hacer pensar lo que la comunidad ha vivido, con la maloca entera repitiendo cada última estrofa, sentada en buena posición y mascando coca.`,
    similitudes: `Todo lo que amenaza en este ciclo viene del mismo punto cardinal. El agua de fuego que anuncia Sindi llega «desde el oriente», y el oriente es la bocana, río abajo; allí está el cerco donde el águila represa las aguas y allí hay que ir a buscar el fuego. La partición andoque entre rojos y blancos pone al sol, a las estrellas y a los predadores del lado rojo, y de ese mismo lado quedaron después los que llegaron por el río: los relatos del comercio cuentan que fue la Garza de la Bocana quien se llevó a la madre de las mercancías y con ella todos los instrumentos de trabajo, que «se quedaron sin madre».

La historia registrada repitió el trazo. Los andoque cuentan que linajes enteros de las riberas del Caquetá desaparecieron durante el siglo XIX engañados por los delfines que simulaban ser comerciantes, y quien recogió ese testimonio anota que los comerciantes fluviales quedaron simbolizados en la figura del bufeo. La amenaza que sube por el río y se disfraza de trato es una forma que este corpus usa tanto para el diluvio como para el siglo XIX.

Del lado de lo que salva, la piedra. El fuego robado se pierde dos veces —se lo traga el pajuil, se lo traga el pejedulce— y termina alojado en la piedra tetee, el guijarro de río con el que los antiguos andoque encendían. En ese mismo tramo del Caquetá, en Puerto Santander, junto a Araracuara, la arqueología ha documentado un taller donde se fabricaban y afilaban hachas de piedra. El relato guarda el fuego donde la región guardó su tecnología.`,
    leccion:
      "Bastó un hueso que no se debía chupar para que se hundiera la tierra entera.",
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
    sourceKeys: [
      "diluvio1981",
      "ortizGomez1986",
      "sanchezBotero2002",
      "genteDelHacha1975",
      "jara1996",
      "arazi2024",
      "misionLinguistica1970",
      "puebloAndoke",
    ],
    mito: `La mujer de Nenefi cogió masa de su almidón de yuca dulce e hizo dos peloticas. Las puso en la horqueta de su palo de yuca, una a cada lado, y eso se volvió águila: macho a un lado, hembra al otro. Ahí estaba el nido, y ahí tuvieron hijos.

El papá gavilán comía lagartija, iguana, toda clase de animales, y al hijo le daba las tripas. Cuando el hijo creció se puso a comer gente: por el hijo comía gente. Aprovechaba cuando alguien bajaba a bañarse para agarrarlo. Para ir al puerto la gente tenía que esconderse dentro de un canasto.

Para castigarlo, Nenefi hizo una trampa. Le dijo que no se comiera a la gente de su casa, que se comiera ese mico de allá. El gavilán vio al mico volador atrapado en un chinchorro, se bajó y jaló, pero el mico estaba bien amarrado. Mientras tanto Nenefi cogió a su hijo para llevárselo. El hijo chilló, el gavilán soltó al mico y se vino: qué le está haciendo a mi hijo. Le estoy sacando una mosca que le lame la nariz. Bueno, cuídelo bien. Y se devolvió donde el mico.

Ahí sí Nenefi se llevó al hijo para su casa y se lo comieron. Después revistieron la maloca de pura piedra arenosa, y sólo cuando terminaron pudo el gavilán soltar al mico. Volvió al nido y no encontró a su hijo; preguntó y le dijeron que no sabían. Como no lo veía, se sentó a oír. Debajo de la tierra sonaba el hueso de su hijo: Nenefi había hecho con él la flauta siíru.

Ahí está mi hijo, dijo, démelo. Le contestaron que rompiera la cumbrera y se lo pasaban, y que metiera la pata por el lado derecho. En cuanto la metió se la amarraron con una piola y jalaron todos hasta arrancarle la pierna, que cayó en la mitad de la casa. El gavilán se fue volando con dolor, goteando sangre, dando vueltas por encima de la maloca y por toda la tierra. Su sangre, al caer, se volvía piedra, se volvía arenisca, se volvía agua: de ahí sale la gente Piedra, la gente Agua, la gente Gavilán y la gente Piedra arenisca. Por la piedra no pudo romper la maloca. Se fue a la bocana del río, se sentó, desplegó las alas y represó el agua.

En esa casa vivía Doña Cucarrón-de-vida, nuestra madre, la que existió primero antes de nosotros. Ella hizo todo, hizo la gente. En tiempos de la creciente revistió la casa de barro. Su segundo hijo se la llevó adentro de la tierra: se fue por debajo y salió en una loma que se llama Loma de los Andoques, cerca del río Igará-Paraná. Entonces se hizo ese cerro, y desde la punta empezó ella a construir la casa hacia arriba hasta hacerla llegar al cielo. Por dentro subió Nenefi, y ella subió los alimentos: tubérculos, frutas, yuca, piña, caimo.

Cuando la creciente mermó, bajó por el mismo camino. Ya se había secado todo, y al llegar se derrumbó la casa que iba hasta el cielo; entonces ella vivía dentro de la tierra. Dos veces fue a buscar tierra abajo para cambiar la quemada: primero un poquito y después más, y la segunda vez estuvo moldeando lo que iba a ser el mundo para vivir todos, plantas, animales, gente. Ella no se alimenta sino de pura agua, y no siente hambre ni arriba ni abajo.

De los que quedaron en la maloca, Sindi se volvió príncipe de los tigres y Pepai de las boas y los pescados; Tomirepa quedó abajo, y es quien mira, el vigilante de esta tierra. Nenefi se fue al cielo con su madre y allá está, vigilando desde arriba; ella se regresó. Los dos huerfanitos que quedaron en la tierra tuvieron hijos después del diluvio: esos son los gigantes que vienen después.`,
    historia: `Esta sección cierra el primer ciclo de fundación del mundo andoque tal como lo transcribieron Jon Landaburu y Roberto Pineda Camacho en «Cuentos del diluvio de fuego», publicado en Maguaré en 1981. Los relatos se recogieron en la comunidad andoque del Aduche, abajo de Araracuara, y los narraron dos hermanos: el capitán Yiñeko, Plumón-de-Fiebre, del clan del Gavilán, y Yiñefoque, Plumón-de-Gavilán. Que los narradores fueran de ese clan no es un dato menor para este relato en particular: el índice temático de los autores anota que la historia de los andoques actuales se confunde con la historia del linaje de los gavilanes.

Dos detalles que las notas explican y que el relato da por sabidos. El primero es la flauta: siíru es una flauta de hueso de tres orificios, el instrumento musical del ritual antropofágico, que se elaboraba con los huesos del antebrazo de la víctima. El ave que comía gente termina sonando, por el hueso de su hijo, en ese instrumento. El segundo es el reparto de la sangre: los cuatro nombres que salen de ella —gente Piedra, gente Agua, gente Gavilán, gente Piedra arenisca— son linajes andoque, no metáforas. La categoría «gavilán» reúne en andoque a los predadores del aire, y el gavilán por excelencia es el águila arpía, «gavilán-de-pluma-blanca», hijo de la madre creadora, Doña Yuca.

La loma donde sale la madre bajo tierra queda cerca del río Igará-Paraná. Los autores anotan que es una altillanura al este de La Chorrera y que la gente de la región, huitoto, la llama efectivamente «Loma de los Andoques».`,
    versiones: `El corpus tiene dos figuras maternas y conviene no confundirlas, porque las dos hacen. La mujer de Nenefi —que según las notas era también su hermana— es la que amasa el almidón de yuca dulce y de ahí salen las águilas; el índice temático la llama Doña Yuca, la madre creadora, y le atribuye además al jaguar, «tigre-de-pluma-blanca», hermano mayor del hombre. Doña Cucarrón-de-vida es la madre de los andoques, la que existió primero, la que revistió la casa de barro, subió los alimentos al cielo y volvió dos veces por tierra para rehacer el mundo quemado. Su nombre viene de una ninfa de cigarra que, para la gente del Hacha, no muere nunca: pasa de cucarrón a chicharra y de chicharra a cucarrón.

Los autores registran también que los andoques que sabían algo de cristianismo comparaban a veces a Nenefi con Cristo y a su madre con la Virgen. La comparación es de los narradores, no de esta página, y no convierte al ciclo en una versión local del Génesis: la creciente aquí es agua de fuego que viene del oriente, la casa se salva revestida de barro y quien rehace el mundo lo rehace trayendo tierra dos veces desde abajo.

Los mismos investigadores reunieron este corpus en «Tradiciones de la gente del hacha», publicado en 1984 por el Instituto Caro y Cuervo y la Unesco, donde el ciclo aparece repartido en capítulos: el cuento del canibalismo o el nacimiento del águila, la madre de los andoques, Nenefi, los dioses de los andoques. La transcripción de 1981, que es la que aquí se sigue, los da corridos y numerados, tal como se grabaron.`,
    similitudes: `La sangre del gavilán no produce metáforas: produce apellidos. De las gotas que caen salen la gente Piedra, la gente Agua, la gente Gavilán y la gente Piedra arenisca, que son linajes andoque y no figuras de estilo. Quienes recogieron el corpus contaron veinticuatro de esos nombres de gente —gente del mochilero, de la pava, del venado, del palo tonan, de la boa, del borugo, del canangucho, del murciélago, de la hormiga arriera, del cucarrón, del águila arpía, de la piedra dura, de la arenisca—, y la comunidad del Aduche sigue presentándose hoy por sus linajes familiares. El episodio explica de dónde vienen unos nombres que todavía se usan.

Los dos grandes predadores del corpus son hermanos por la madre. El águila arpía, «gavilán-de-pluma-blanca», es hija de la madre creadora Doña Yuca; el jaguar, «tigre-de-pluma-blanca», es hijo de la misma madre y hermano mayor del hombre. Uno es dueño del aire y el otro del monte, y frente a los dos el hombre es dueño del anti-monte: la chagra y la maloca. Quien recogió estos relatos escribió que la historia de los andoques actuales se confunde con la historia del linaje de los gavilanes, y este relato es donde esa historia empieza.

La escena del hueso convertido en flauta tiene un referente material preciso. La siíru es una flauta de hueso de tres orificios que se elaboraba con los huesos del antebrazo de la víctima y era el instrumento del ritual antropofágico. El ave que se comía a la gente termina sonando en el instrumento con que se cerraba ese rito, y el relato no necesita decir nada más para que las dos cosas queden atadas.`,
    leccion:
      "La sangre del ave que comía gente cayó en piedra y en agua, y de ahí salieron los linajes.",
    sceneHorizontal:
      "un águila enorme vuela sobre una maloca de piedra arenosa mientras gotas se vuelven piedra, agua y linajes",
    sceneVertical:
      "Doña Cucarrón-de-vida asciende por una casa hasta el cielo llevando tubérculos y frutas sobre el diluvio",
    researchNotes:
      "RELATORES DEL CICLO: Yiñeko y Yiñefoque según la introducción; no se atribuye cada párrafo por separado.",
  }),
];

export default andoqueDefinitions;
