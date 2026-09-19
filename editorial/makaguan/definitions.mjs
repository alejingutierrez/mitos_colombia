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
    mito: `Al principio no había nacido nadie. El padre Tacu hizo esta tierra grande donde hoy se vive, y la pobló de animales enormes: los que vuelan, los que corren o tienen patas, y los que nadan. El cielo y la tierra estaban tan cerca que casi se tocaban. Tacu tocó la gran trompeta y convocó una reunión, y acudieron los wachirajua, la gente que todavía no era gente, en forma de humo o de almas. Llegaron cantando, adorando y llorando de felicidad al ver al creador, y lo rodearon formando un círculo. Tacu miró alrededor: sólo había animales y wachirajua, y personas no había ninguna.

Entonces llamó a un venado grande, que salió del bosque, y le propuso un trato. Venado mañoso, si usted aguanta el dolor de que le saque los dientes y las muelas, le pongo toda la dentadura de oro puro y de su boca saldrán personas inteligentes, dueñas más adelante de muchos inventos. Pero si grita del dolor, de su boca saldrán personas makaguanas, muy caminadoras, que se irán a coger pepas, raíces y animales de monte.

Con una fuerza que no se mira, Tacu empezó a sacarle los dientes y las muelas de la carraca de abajo. El venado sudaba y hacía todo lo imposible por soportar aquel dolor indeseable. Tacu siguió sacando, y ya iba a terminar: le faltaba la última muela. Cuando la iba a sacar, el venado no soportó y gritó por primera vez, muy fuertemente.

En ese mismo instante, de la boca del venado salieron cuatro mujeres y cuatro hombres. Ésos fueron los primeros makaguanes antiguos. Cogían carne, pepas de monte, raíces y plátano de monte; hicieron capuzas de macana, que les servían para matar samulia, maja, matiwi y mesa, y para pescar; recolectaban kiwi en los montes y esteros. Vivían caminando para arriba y para abajo. Así salieron los hijos, que se juntaron entre primos, y poco a poco se fueron multiplicando: todo salió como el padre Tacu había dicho.

Después Tacu llamó al araguato, el mono grande, y le dijo lo mismo que le había dicho al venado. El araguato sí soportó, y le pusieron dientes y muelas de oro puro. De su boca salió mucha gente, hombres y mujeres. Ésos son los que hoy se llaman blancos, y salieron con la maña de hacer carros, aviones y muchas cosas.

Por eso el venado es, culturalmente, el abuelo de los makaguanes: de su boca salieron. Y por eso andan. De ese venado les viene el nombre que ellos mismos se dan, los hijos del venado, y con él la peregrinación y el encargo de cuidar la madre naturaleza.`,
    historia: `El texto que sostiene esta página nació de un encargo escolar. En 2005, el Proyecto Educativo Comunitario que la comunidad de El Vigía elaboró con la Secretaría de Educación Municipal de Arauquita necesitaba saber de dónde venía el pueblo makaguán, y la búsqueda dio con este relato. Lo narró Gregorio Flórez, sabedor de El Vigía, y lo transcribieron profesionales de ASCATIDAR, la Asociación de Cabildos y Autoridades Tradicionales Indígenas del Departamento de Arauca. En esa transcripción el creador se llama todavía padre sol y el pueblo se escribe makawan.

El proyecto venía de una gestión política concreta. Entre 2004 y 2007, el concejal German Tocaria Herrera, primer concejal indígena de Arauquita y del departamento, priorizó la educación propia y habló con el director encargado de la escuela indígena de El Vigía para sacar adelante el PEC, que se ejecutó en 2005. Durante su desarrollo, después de escuchar al cabildo y a la comunidad, la coordinadora Rosalba Jiménez dejó dicho que en la historia de los antepasados a los indígenas se los vio como animales, menores de edad y seres sin pensamiento. La investigación relaciona esa frase con lo que el mito dice del araguato y de los blancos.

Flórez es uno de los sobrevivientes de los desplazamientos de la guerra entre liberales y conservadores. En el registro de la investigación aparece hablándole a un muñeco y explicando por qué le habla a un muñeco: los niños del resguardo ya no lo escuchan, y él, cansado de las burlas, había preferido callar.

El 10 de agosto de 2010, para reconfirmar la versión e identificar lo que faltaba o sobraba, se entrevistó al sabedor David González, capitán de El Vigía, junto con José Darío Cuenza y Arístides Tocaria. De ahí salieron el nombre del dios en idioma makaguán, Tacu, y el pasaje del cielo bajo, la trompeta y los wachirajua. Los estudiantes de séptimo dibujaron después el relato, y uno de esos dibujos acompañó una prueba de lectura del segundo plan decenal de educación.

Ese detalle importa porque la lengua ya no se habla. El Instituto Caro y Cuervo situó el makaguán en el tronco lingüístico guahibo, emparentado con el sikuani y el hitnü, pero para 2021 no quedaba en El Vigía ningún hablante: sólo palabras sueltas en boca de algunos sabedores, sin conversación posible. Tacu, wachirajua, kiwi, samulia, maja y capuza son restos de esa lengua dentro de un relato que hoy se narra en castellano.`,
    versiones: `Hay dos transcripciones y no dicen lo mismo. En la del PEC de 2005, narrada por Gregorio Flórez, el creador es el padre sol, sin nombre propio, y el pueblo se escribe makawan. En la de 2010, narrada por el capitán David González, el creador se llama Tacu y aparece un pasaje entero que la primera no tiene: el cielo y la tierra casi unidos, la gran trompeta y los wachirajua, la gente que aún no era gente, llegando en forma de humo o de almas. La segunda no corrige a la primera; le añade un comienzo y le devuelve al dios su nombre en lengua propia.

El desenlace del araguato es igual en las dos y es el más incómodo: el mono aguanta, recibe dientes de oro y de su boca salen los blancos con los carros y los aviones. Pertenece a una versión transmitida después de siglos de despojo y de apodos impuestos, y se conserva con su procedencia en lugar de limarse.

Hay además una pieza que no encaja. En el glosario de términos makaguanes que levantó la misma investigación, la entrada de los monos —sambo, chuco, choroy— los define como el animal sagrado que da origen al pueblo makaguán, mientras la narración se lo atribuye al venado y reserva al araguato el origen de los blancos.

Entre los vecinos el nombre del creador cambia del todo. El pueblo hitnü, de la misma familia lingüística y de resguardos contiguos en Arauca, cuenta que el mundo está hecho de varias tierras superpuestas y que Nakanü, dueño de la primera, hizo a los animales y a los humanos y luego los dejó al lado de los ríos Ele y Lipa; quien hizo la tierra fue Marat, el papá de los otros dioses. Es un relato hitnü, no makaguán: se cita como variación vecina documentada y nunca como otra manera de decir Tacu.`,
    similitudes: `El paralelo más cercano está a pocos kilómetros y no coincide. Los hitnü de Arauca, de la misma familia lingüística guahibo, cuentan que Nakanü hizo a los animales y a los humanos y los dejó junto a los ríos Ele y Lipa: nadie nace de la boca de un animal ni se juega la dentadura. Lo que sí comparten es el hábito de pensar la vida humana en relación con los animales. Los hitnü dedican a animales la mayoría de sus rituales, con cantos para el jaguar, la tortuga, la iguana, el gabán huesito, el cachicamo, el perro de agua, el oso hormiguero, el pavo, el caimán y el terecay.

El otro paralelo es de nombres, y es propio. El relato explica por qué este pueblo anda: salió de un venado, y por eso peregrina y se llama a sí mismo los hijos del venado. El nombre con que lo llaman los demás llegó por otra vía; Gregorio Flórez recordaba en 2004 que los colonos les decían con desprecio guaiparos o makaguanes, y que antiguamente nadie se llamaba así. Ese nombre ajeno acabó en la geografía: la selva de Arauca donde vivían figura en la literatura como la gran selva del Macaguane, el Airico de Macaguane.`,
    leccion:
      "El origen de un pueblo puede estar en el cuerpo de un animal que resistió hasta gritar.",
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
    mito: `Los makaguanes se habían multiplicado y habían pasado varias generaciones desde que salieron de la boca del venado. Entonces el padre Tacu mandó a la tierra un wiri, un perro, con un collar de oro, para que mirara la tierra y viera cómo estaba viviendo la gente.

Una familia makaguán lo encontró y se lo llevó a su choza. Le pusieron comida. Al otro día volvieron a ponerle comida, y al otro, y durante varios días quisieron alimentarlo, pero el wiri no recibió bocado alguno. Entonces lo llevaron con ellos al conuco. Allí estaban tumbando una palma gigante para hacer vino, de esas que se derriban y se dejan unos días hasta que el jugo fermenta. La palma cayó encima del wiri y lo mató en el acto.

Tacu, el padre, vio aquello. Mandó una ardita, una ardilla, para que derribara en instantes todos los árboles grandes y las montañas, y así fue: quedó el mundo tumbado. Después oscureció todo y de repente empezó a caer una lluvia que no paraba, y siguió cayendo durante varios días. La gente quiso detener la lluvia y no pudo. Sólo un guerrero de la tribu, junto con su compañera, alcanzó a subir a un monte que la ardita y el padre Tacu no habían hecho derribar, y allí esperaron. Los demás murieron, y después cesó la lluvia.

Cuando cesó, el señor Tacu envió un samuro a comerse la podredumbre que había quedado y a mirar si la tierra ya se había secado. Envió también un cangrejo gigante a recoger los huesos de las personas muertas. El cangrejo iba recogiendo los huesos y llevaba consigo un tambor, que iba tocando mientras recogía.

Después de todo esto el señor Tacu habló y reclamó: yo les envié al wiri, el perro, para que ustedes lo cuidaran, y lo mataron. Los makaguanes que sobrevivieron, arrepentidos, respondieron que de ahora en adelante iban a volver una ceremonia, una cultura para ellos, para cuando viniera el wiri y los acompañara en sus vidas.`,
    historia: `Quien narró este mito fue el capitán David González, sabedor de El Vigía, el 15 de agosto de 2010. Lo hizo, según la investigación que lo recogió, movido por la necesidad de que lo oral quedara escrito, y la narración entró ese día al diario de campo. Cinco días antes, el 10 de agosto, González había reconfirmado con otros sabedores el relato del origen del pueblo: las dos piezas se registraron casi juntas y con el mismo narrador principal.

El relato volvió después al aula. Los sabedores pidieron que se recreara con dibujos y resúmenes escritos, y pusieron una condición: los resúmenes de los estudiantes se quedaban en los cuadernos, para no cambiar la versión original. Sólo salió el dibujo, y lo eligió el propio grupo, que propuso al que mejor dibujaba. La imagen escogida, firmada por David E. Gonzáles en 2013, muestra a la pareja sobreviviente; se dibujó una pareja para decir que, pese al suceso catastrófico, el pueblo makaguán permanece.

En 2023, cuando ya los estudiantes de sexto y séptimo declaraban no conocer ninguno de estos relatos, el investigador le leyó los tres textos al exgobernador Manuel Sánchez, que ha sido varias veces gobernador del resguardo. Sánchez escuchó éste sin objeciones hasta la paloma, y ahí se detuvo: dijo que la versión de los abuelos no hablaba de una paloma, y que al texto le faltaba el motivo, que por la cantidad de muertos Tacu buscaba limpiar la tierra. Pidió reescribir y corregir ese punto.

Conviene saber por qué había una palma cayendo. En El Vigía las festividades propias se hacen con vino de palma o vinete, y el vinete obliga a tumbar la palma y esperar unos días a que fermente. La muerte del wiri ocurre dentro de ese trabajo, en el conuco y en plena faena, no fuera de la vida ordinaria.`,
    versiones: `El cambio documentado es el ave. La transcripción del 15 de agosto de 2010 dice que Tacu envió una paloma para ver si la tierra se había secado. En 2023, Manuel Sánchez corrigió: la versión de los abuelos no decía paloma sino samuro, y el texto se había saltado la razón, que era la cantidad de muertos y la necesidad de limpiar la tierra. Esta página narra el samuro y deja la paloma a la vista, porque las dos están fechadas y las dos tienen quien responda por ellas.

Lo que la corrección no tocó se queda tal cual. El cangrejo gigante que recoge los huesos mientras suena un tambor sigue en el relato, igual que la ardita que derriba árboles y montañas y la pareja que alcanza el único monte en pie.

La ceremonia prometida al final es el punto ciego. Los sobrevivientes dicen que volverán una ceremonia o una cultura propia para recibir al wiri, pero ninguna transcripción describe sus pasos, y aquí no se completan.

De esa misma conversación de 2023 salió una propuesta que esta página no sigue: el investigador y Manuel Sánchez concluyeron que las tres narraciones deberían quedar reunidas en un solo texto escrito. Se publican separadas porque así fueron narradas y fechadas. Y la comparación con el diluvio cristiano, que aparece en las conclusiones del trabajo, es una lectura del investigador sobre el relato, no algo que dijeran los sabedores al narrarlo.`,
    similitudes: `La corrección de 2023 tiene un eco vecino. En el abecedario que el Centro Educativo Indígena Hitnü Las Vegas publicó en 2022, la entrada kán, el rey zamuro, dice que en el origen cumplió con liberarlos de la muerte y que así sobrevivió el pueblo hitnü. Es un relato hitnü y no makaguán, pero muestra que en esta esquina de Arauca un ave carroñera puede tener papel fundador, y no sólo el de mensajera que comprueba si ya hay tierra seca.

El perro también aparece del otro lado: awil, en hitnü, es el más fiel compañero. Y los demás animales de este mito son en esa lengua vecina palabras corrientes del monte y del agua: jaknit el cangrejo, mátir la ardilla, em la lluvia que llega cuando se acaba el verano y hace crecer los ríos.

Un diluvio con una pareja salvada en un monte se parece a muchos otros, y la propia investigación anota el parecido con el diluvio cristiano. Pero el encadenamiento es de aquí: un perro enviado que no come, una palma de vino que cae, una ardilla que derriba el mundo y un cangrejo que recoge huesos al son de un tambor.`,
    leccion:
      "Un enviado que muere sin haber sido reconocido puede costarle al mundo entero su forma.",
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
    mito: `Cuentan los abuelos que desde hace tiempo, aproximadamente desde 1948, cuando las familias se encontraban en la laguna del Lipa, apareció Wuachirajua. Apareció porque se perdió la costumbre: antes, cuando alguien moría, los suyos le llevaban una vela hecha con cera de abeja y unos dos litros de agua, y lo acompañaban durante un tiempo. Cuando dejaron de acompañar a sus muertos, empezaron a verlo.

En sus comienzos era un ser grande y peludo, con la estatura de un gran oso y las mismas trazas de ese animal: negro, peludo, con las uñas bien largas y afiladas. Ahora dicen que es como de la estatura de un niño de diez años, negro y peludo, pero con la fuerza de muchos hombres; es difícil pelear con él, porque con la sola presencia asusta. Tiene la facultad de transformarse en ave o en cualquier animal. Anda por los montes persiguiendo y asustando a niños, jóvenes y adultos, y persigue más que todo a las personas de mala voluntad. Se le ve por los caminos en forma de sombra, y se ubica en el cementerio del resguardo y en la escuela, sobre todo cuando no acompañan al familiar muerto.

Un makaguán lo encontró comiendo corozo en el bosque de El Vigía, hará unos veinte años, y se le enfrentó a machete; desde entonces dejó de perseguirlo. Un profesor indígena, recién llegado a trabajar al resguardo, se quedó durmiendo en una de las piezas de la escuela. Por esos días había muerto un compañero indígena. No había luz, por problemas eléctricos, y el profesor iba hacia el baño con una linterna de buena luz cuando vio pasar la sombra de un niño corriendo, que se metió en la pieza contigua. Corrió a ver si era un muchacho que lo quería asustar, alcanzó a mirar otra vez la sombra corriendo y por un instante sintió a alguien mirándolo por la espalda y tocándolo. Reaccionó asustado y lanzó un puño que fue a dar contra uno de los archivadores, y todavía volvió a verlo metros más adelante, corriendo y atravesando una pared, hasta desaparecer al instante. Al día siguiente lo contó en la cancha de fútbol, donde se jugaba todas las tardes, y los compañeros empezaron a contar los suyos: cómo habían escapado del alma en el monte y en los caminos, desde que se creó el internado.

También lo encontró el sabedor Arístides Tocaria, un día de cacería. El ser esperó a que estuvieran apartados de las demás personas y apareció como un niño negro y peludo; no estaba solo, lo acompañaba su pareja. El sabio y el alma empezaron un diálogo, y ambos manifestaron manejar los poderes de los rezos de los antiguos; de ahí pasaron a una lucha cuerpo a cuerpo. Por la habilidad que tenía para correr, el abuelo Arístides logró ocultarse en la casa.`,
    historia: `Ésta no es una historia de origen ni se registró como mito. Apareció dentro del proyecto de gobierno propio del resguardo, cuando se identificó un personaje que causaba terror en el pueblo makaguán, y la investigación la clasificó como leyenda: sus hechos tienen fechas, lugares y testigos vivos.

El texto se levantó en 2011, a partir de entrevistas individuales y colectivas con los sabedores y de una conversación directa con Manuel Sánchez, entonces gobernador de la comunidad. Quedó consignado en el diario de campo y después se socializó con miembros del cabildo y parte de la comunidad, que de forma corta iban agregando elementos al personaje. Uno de los testimonios es de un profesor indígena recién llegado al resguardo; otro, de un hombre que se enfrentó a machete con la presencia en el bosque de El Vigía unos veinte años antes de la transcripción.

La última capa es de 2023. Al releerle los textos, Manuel Sánchez contó que él estuvo presente, siendo muy pequeño, en la lucha entre el sabedor Arístides Tocaria y este ser. Tocaria no es un nombre cualquiera en El Vigía: la investigación lo incluye entre los fundadores del resguardo, entre los niños y adolescentes que llegaron caminando con sus padres y sobrevivieron para quedarse. Ese mismo Tocaria había participado en 2010 en la revisión del relato del origen del pueblo.

Las fechas de esta leyenda son recientes y coinciden con las de la violencia en Arauca. La presencia se empieza a ver hacia 1948, con las familias todavía en la laguna del Lipa, adonde iban a cazar lo justo y a esconderse de los colonos que los perseguían. La escuela y el internado donde vuelve a aparecer son muy posteriores. El asentamiento de El Vigía se fundó en 1915 con las familias Tocaria, Sánchez, Cuenza y Fernández, y en el censo del resguardo de 2009 tenía 500 habitantes en 72 familias.`,
    versiones: `La figura no se estabiliza, y la fuente tampoco la estabiliza. En los recuerdos más viejos es un ser grande y peludo con la estatura de un gran oso, negro, de uñas largas y afiladas. En los recientes es del tamaño de un niño de diez años, con la fuerza de muchos hombres. Entre unos y otros aparece como sombra en los caminos, como ave o como cualquier animal.

El nombre también cambia. El relato de 2011 se tituló El Alma (Wuachirajua); el glosario de la investigación y las láminas escolares escriben Wachirajua; y ese mismo término, en el relato del origen del pueblo, no nombra a esta presencia sino a los espíritus de humo que existían antes de que hubiera gente. En castellano el corpus la llama simplemente el alma.

Las dos imágenes que la comunidad aprobó en 2013 no coinciden entre sí. Los estudiantes de séptimo la dibujaron con cabello largo, traje largo negro, rostro muy particular, garras y la facultad de volar. En el dibujo de David González tiene un solo ojo y un pico largo. Los sabedores aprobaron la congruencia de ambas con lo narrado, sin unificarlas.

Queda una lectura que no es de los narradores. En las conclusiones del trabajo, el investigador sugiere que el alma podría interpretarse en el contexto de la persecución, el desplazamiento y las matanzas que sufrieron los antepasados. Es una hipótesis suya. La explicación que dan los sabedores es otra: la presencia empezó a verse cuando se dejó de acompañar a los muertos.`,
    similitudes: `El paralelo más fuerte no es makaguán. Entre los hitnü de Arauca está documentado Roménu, descrito en los diarios de campo de Miguel Lobo-Guerrero de 1978 a 1982 y otra vez en 2023 y 2024: de baja estatura, frente grande, dientes largos y afilados, cuerpo negro y cubierto de pelo, que raspa y saca la grasa de los corazones para comérsela con su esposa y sus hijos. Para el cacique hitnü actual no es un ser tan malvado: se encarga de recoger a las personas y prepararlas para llevarlas al mundo de abajo, el de los muertos. Los hitnü lo asocian con la epidemia de sarampión de 1964 y con el asesinato del mítsenü Akír a manos de un grupo de blancos armados.

Los rasgos coinciden casi punto por punto —la estatura pequeña, el pelo negro, la pareja que lo acompaña, el trato con los muertos— y las fechas también, las de las llamadas guahibadas. Es una figura hitnü, no makaguán, y vale como vecindad documentada, nunca como la misma creencia.

Hay una coincidencia menor y muy concreta. La ceremonia que se dejó de hacer pedía una vela de cera de abeja; en el abecedario hitnü, la entrada vélap aclara que hay velas blancas de tienda, pero que las de cera de abeja son mejores. Y setseri, en hitnü, es la palabra para espíritu.`,
    leccion:
      "Cuando se deja de acompañar a los muertos, algo empieza a aparecer en los caminos.",
    sceneHorizontal:
      "una sombra Wuachirajua pequeña y cambiante cruza entre bosque, camino, cementerio y escuela de El Vigía sin rasgos terroríficos explícitos",
    sceneVertical:
      "una vela de cera de abeja y agua acompañan una memoria ancestral mientras Wuachirajua aparece como sombra entre los árboles del Lipa",
    researchNotes:
      "GÉNERO: leyenda contemporánea, no mito cosmogónico. NOMBRE: Wuachirajua se prioriza; se eliminan comparaciones externas sin respaldo comunitario.",
  }),
];

export default makaguanDefinitions;
