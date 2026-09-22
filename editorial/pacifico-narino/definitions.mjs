import { definePacificoNarinoMyth } from "./define-editorial-myth.mjs";

const records = [
  definePacificoNarinoMyth({
    slug: "chiles-y-cumbal",
    fuentesAgotadas: "AGOTADO: se buscó el relato en el repositorio de la Universidad de Nariño (sired.udenar.edu.co: la tesis de 2004 sobre mitos de la región andina de Nariño no lo trae), en Corponariño, en páginas de los resguardos de Cumbal y Chiles y en la prefectura del Carchi (página del volcán Chiles caída, 404). Autorretrato del Carchi de Luis Rosero Mora no tiene texto abierto; la nota nueva de La Hora (lahora.com.ec/noticia/1000206634) responde 404; las demás apariciones son slideshare y copias vetadas. Los boletines del Servicio Geológico Colombiano y el artículo geológico de SciELO describen los volcanes pero no el relato.",
    sourceKeys: [
      {
        key: "lahoraEmbilpud",
        summary:
          "El registro más antiguo que se puede leer: Chiles varón y Cumbal hembra, hijos del Dios Sol; la lava que llega al Voladero y a la laguna de Cumbal; Embiput y Embilquer, «Luz del Pueblo»; el encuentro cerca de Túquerres; nueve pueblos pastos; muerte de los ancianos y cuerpos convertidos en cóndores.",
        limitation:
          "Nota breve sin narrador ni fuente declarada; el archivo digital ha perdido las letras acentuadas y el nombre de la autora se lee a medias.",
      },
      "rLeyenda2018",
      {
        key: "boellEmbilpud",
        summary:
          "Una comunera de Muellamués cuenta el relato como uno de los orígenes de su gente: Embilpud, «luz de las alturas», hijo del Chiles; Embilquer, «luz del pueblo», hija del Cumbal; su unión pobló el territorio Pasto. Trae además los tigres Chispas y Guangas, paralelo de Similitudes.",
        limitation:
          "Un párrafo dentro de un ensayo sobre mujeres y territorio; no cuenta el encuentro ni el final.",
      },
      "webAmor2023",
      "culturaBachue",
      "moraMitos2004",
    ],
    title: "Chiles y Cumbal",
    excerpt:
      "De Chiles y Cumbal nacen Embilpud y Embilquer, cuya unión puebla montañas, riberas y llanuras del territorio Pasto.",
    tags: ["origen", "montaña", "memoria", "tradición oral"],
    mito: `Chiles era el varón y Cumbal la hembra. Los dos cerros de la frontera eran hijos del Sol y amos de la cordillera de los Andes. El Chiles imponía respeto y fortaleza, como si fuera un dios; el Cumbal reflejaba ternura, unión y fertilidad. Por dentro les ardían las entrañas, y la lava que botaban hacia las partes bajas cambiaba cada día la cara de la tierra.

Así llegó la lava del Chiles hasta la laguna del Voladero, y la del Cumbal hasta la laguna que lleva su mismo nombre. De cada cerro brotó entonces un hijo, empujado desde el fondo del agua por la energía que rugía dentro de los volcanes. Del Voladero salió un varón, Embilpud, luz de las alturas. De la laguna del Cumbal surgió una doncella hermosa, Embilquer, luz del pueblo.

Tardaron diez meses solares en salir de aquellas aguas heladas. Después echaron a andar, cada uno desde su monte, porque la fuerza de sus padres los atraía, y se encontraron muy cerca de Túquerres. Llevaban una energía que daba vida a cuanto los rodeaba. Bastó que se miraran para quedar unidos, y se enamoraron perdidamente.

Aquel amor traía una tarea. Habían nacido del vientre de la tierra, sus espíritus eran de fuego, y les tocaba la misión sagrada de fecundar y poblar las regiones altas de las montañas. De ellos tenía que salir una estirpe guerrera y solidaria, respetada por siglos. Desde arriba, los volcanes cuidarían de sus hijos.

Los dos se amaron, y de ellos descendieron los Pastos. Sus hijos se repartieron por las riberas de los ríos, las montañas y las llanuras, y a cada pueblo nuevo le dieron nombre: Tusa, Puntal, Huaca, El Ángel, Tulcán, Tulcanquer, Pupiales, Gualmatán, Muellamués, Funes, Túquerres, Piedra Ancha y Pasto. Eran tierras fértiles, de muchos climas, y su gente se dio a la agricultura: fuerte en la guerra y sabia en la paz.

Con los años la misión quedó cumplida, y Embilpud y Embilquer envejecieron. Ya muy ancianos, antes de irse, aconsejaron a su gente que se mantuviera unida para que la respetaran. Luego volvieron a las aguas de donde habían salido y se hundieron en ellas. Salieron otra vez, pero por el cráter de los volcanes, convertidos en dos cóndores fuertes. Desde entonces vuelan sobre la gran nación Pasto y la cuidan.`,
    historia: `El relato circula en la prensa de Tulcán, en el Carchi ecuatoriano, y en la voz de las comunidades pastos del lado colombiano. La versión escrita más antigua que se puede leer hoy es una nota firmada por Verónica Ibarra en el diario La Hora el 19 de noviembre de 2003, con el título «Leyenda Pasto: Embilput y Embilquer». Es breve: los dos cerros como pareja, hijos del Dios Sol; la lava que alcanza la laguna del Voladero y la de Cumbal; el nacimiento de los dos hijos; el encuentro cerca de Túquerres; la descendencia de los Pastos, y la muerte de los ancianos, cuyos cuerpos se vuelven cóndores.

Una versión más larga apareció en el portal carchense TulcánOnline en 2018, firmada por Luis A. Ibarra R., que da como fuente el segundo volumen de Autorretrato del Carchi, obra del cronista tulcaneño Luis Rosero Mora. Añade el carácter de cada volcán, el macho fuerte y la hembra fértil, los diez meses solares bajo el agua, la misión de fundar una nación que dure milenios, una lista más larga de pueblos y un final distinto: los ancianos regresan a las aguas y salen por el cráter convertidos en cóndores.

En 2025 Yasmir del Carmen Cuastumal Taramuel, comunera del Resguardo Indígena de Muellamués, en Guachucal, escribió para la Fundación Heinrich Böll un texto sobre las mujeres de su resguardo. En el apartado «Origen de Muellamués» cuenta varias explicaciones del origen de su gente, y una de ellas es esta: «otros dicen que somos hijos de los cerros». Para ella Chiles y Cumbal son hijos de la tierra, el agua y el sol, y la unión de sus hijos pobló el territorio Pasto del que vienen los Muellamueses. El resguardo queda cerca del Chiles, entre el Cumbal y el Azufral.`,
    versiones: `Los tres registros no escriben igual el nombre del varón. La Hora trae Embiput y, dos párrafos después, Embipult; el titular y TulcánOnline dicen Embilput; Cuastumal escribe Embilpud. Tampoco coinciden en los significados: La Hora sólo traduce el de ella, «Luz del Pueblo»; TulcánOnline dice que Embilquer significa «luz»; Cuastumal da los dos, «luz de las alturas» para él y «luz del pueblo» para ella.

El origen de los padres cambia de uno a otro. En la prensa del Carchi los volcanes son hijos del Sol; en Muellamués son hijos de la tierra, el agua y el sol. En la prensa los hijos nacen de las lagunas a las que llegó la lava; en Cuastumal, sencillamente, cada cerro tuvo un hijo.

La descendencia también se cuenta distinta. La Hora enumera nueve pueblos, de Tusa a Pasto, a los dos lados de la frontera. TulcánOnline añade Huaca, Tulcanquer, Túquerres y Piedra Ancha, y habla de una Gran Nación Pasto. Cuastumal no hace lista: la unión pobló las riberas, las montañas y las llanuras, y de ahí vienen los Muellamueses.

El final sólo está en la prensa y no es el mismo. En La Hora los ancianos mueren aconsejando la unión y sus cuerpos se transforman en cóndores. En TulcánOnline vuelven a sumergirse en el agua y salen por el cráter de los volcanes ya convertidos en aves, para cuidar a su nación. En Muellamués la historia se detiene en el origen y convive con otras: el lago Nalnao y el dios Iboag, los tigres Chispas y Guangas, las perdices blanca y negra, y la pareja del cacique Diego Mollamás y la cacica Aurora Cerbatana.`,
    similitudes: `La pareja que sale del agua de una laguna de altura, puebla la tierra y, ya vieja, vuelve al agua transformada, tiene su pariente más cercano en Bachué, el relato muisca de la laguna de Iguaque. En la versión que publica la Secretaría de Cultura de Bogotá, Bachué sale de la laguna con un niño, se casa con él cuando crece, van de un lugar a otro fundando territorios y dejando hijos, y ya ancianos regresan a Iguaque, se despiden de su gente y al pisar el agua se convierten en dos serpientes. Allí son serpientes; aquí, cóndores que salen por el cráter.

La otra familia es la de los volcanes enamorados del norte andino ecuatoriano. El Telégrafo publicó la versión de Taita Imbabura y Mama Cotacachi que la Casa de la Cultura de Imbabura sacó de un manuscrito de 1946: el Imbabura, padre sabio que vigila que cada cual cumpla su oficio, le declara su amor a la Cotacachi, y desde entonces se dejan nieve en las cumbres cuando se visitan. Como Chiles y Cumbal, son un varón y una hembra que cuidan la tierra y las lagunas de alrededor.

Y la pareja de principios opuestos que ordena el territorio vuelve en el mismo resguardo de Muellamués, donde Cuastumal cuenta que el Chispas, dualidad masculina, y el Guangas, femenina, pelearon convertidos en tigres. En Cumbal, la historia de la Moledora que recoge una tesis de la Universidad de Nariño de 2004 enfrenta también a un hermano de la sección de arriba con una cacica de la de abajo.`,
    leccion:
      "Un pueblo que se sabe hijo de sus montañas mide su fuerza por la unión que guarda.",
    sceneHorizontal:
      "los cerros Chiles y Cumbal ocupan extremos de la cordillera mientras Embilpud y Embilquer emergen de dos lagunas y avanzan hacia su encuentro",
    sceneVertical:
      "Embilpud y Embilquer ya ancianos observan desde una altura a sus descendientes distribuidos entre riberas, montañas y llanuras, con dos cóndores elevándose al fondo",
    researchNotes:
      "REEMPLAZO DOCUMENTAL: la creación original de agua y fuego se retira. La URL conserva el ciclo Pasto de Embilpud y Embilquer con voz contemporánea de Muellamués y circulación fronteriza atribuida.",
    seoTitle: "Embilpud y Embilquer | Chiles y Cumbal",
    seoDescription:
      "Relato Pasto sobre Embilpud y Embilquer, hijos de los volcanes Chiles y Cumbal, cuya unión da origen a pueblos de la cordillera fronteriza.",
    focusKeywords: [
      "Embilpud y Embilquer",
      "leyenda de Chiles y Cumbal",
      "origen del pueblo Pasto",
      "mitos de Nariño",
      "volcanes Chiles y Cumbal",
    ],
  }),
  definePacificoNarinoMyth({
    slug: "el-diablo-chivo-de-rumichaca",
    fuentesAgotadas: "AGOTADO: la entrada «Rumichaca» de la Enciclopedia Banrepcultural está tras un captcha antibots; la versión nueva de La Hora (lahora.com.ec/noticias/mitos-el-diablo-desafi-a-dios-en-rumichaca) responde 404; la página de turismo de la Alcaldía de Ipiales no trae la leyenda; ruta0.com y los blogs de leyendas de Ipiales son agregadores vetados; no se halló registro en la Universidad de Nariño. Fuera de La Hora, Carchi al Día, Osejo y Flores, Lima Armas y El Telégrafo no hay otro registro abierto.",
    sourceKeys: [
      {
        key: "lahoraRumichaca",
        summary:
          "La apuesta de los puentes tal como la transmitió Miche Higuera a través de sus hijos y de Marciza Guadalupe: el cañón del Güaitara sin paso, el puente espinoso del Diablo a la izquierda y el de Dios con escaleras a la derecha, las aguas curativas entre ambos y las figuras diabólicas de la roca.",
        limitation:
          "Nota de prensa sin firma; mezcla el relato con la lectura de un geólogo y de un sacerdote cuyos nombres no se han podido comprobar.",
      },
      "erazoRumichaca2016",
      "coralRituales",
      "armasAlternativa2017",
      {
        key: "telegrafoRumichaca",
        summary:
          "El rumor de hace un siglo de que el diablo vivía en el fondo de la gruta, y la mujer que vio salir por las gradas un cerdo con lechones de fuego; traduce Rumichaca como puente de piedra y fecha los baños en 1939.",
        limitation:
          "Crónica sobre el balneario, no sobre la leyenda; no nombra al chivo ni cuenta la apuesta.",
      },
      "espanolatrio",
    ],
    title: "El Diablo Chivo de Rumichaca",
    excerpt:
      "Dios y el Diablo compiten por construir dos puentes sobre el Güaitara; otra versión sitúa un chivo junto a las termales.",
    tags: ["diablo", "montaña", "peligro", "tradición oral"],
    mito: `Hubo un tiempo en que ningún puente cruzaba el cañón del río Güaitara. El agua corría más de ochenta metros abajo, entre paredes de roca, y los indígenas de la frontera no tenían por dónde pasar de un lado al otro.

Una noche el Diablo le propuso a Dios un desafío: cada uno levantaría un puente sobre el cañón, y así se vería quién sabía más de construir. Dios cayó en la tentación de derrotarlo y aceptó. La contienda empezó en la oscuridad, y ganaría el que acabara primero y con más destreza. Mientras trabajaban, Dios animaba a los suyos con una orden que se oyó toda la noche: arrume piedra, arrume piedra.

Entrada la madrugada, hacia las cinco, cantó un gallo, y con su canto el trabajo se detuvo. Al Diablo le faltó poner una piedra. Todavía se ve allí, grande, colgando de una peña en el centro de una cueva sobre el río, donde la dejó.

Al día siguiente los indígenas se levantaron y encontraron, asombrados, dos puentes sobre el abismo. El de la izquierda, el del Diablo, era agreste y estrecho, enmarañado de matas espinosas que no dejaban pasar. El de la derecha era amplio y despejado, y hasta tenía escaleras para bajar con comodidad a la orilla. Cuando miraron la obra de los dos, vieron que había triunfado el bien: el puente de Dios era el más hermoso y el más firme. Y de aquella orden de amontonar piedra le quedó al lugar su nombre, Rumichaca.

Abajo, en el fondo del cañón, justo entre los dos puentes, brotan aguas calientes que curan. Quienes se bañan en ellas dicen que salen como nuevos, con menos dolor en los huesos. Pero en la pared de enfrente las rocas dibujan figuras diabólicas, porque el Diablo nunca se fue del todo. Desde esas aguas puede subir en sus muchas formas a llevarse a los suyos. Aguas arriba, entre los recodos y las cuevas, vive el chivo de Rumichaca, que es él mismo con otra cara, y todavía espera a los humanos para cambalachar riquezas por almas.

Por eso hay quienes llegan a pedir posada en la casa del predio y, a las doce de la noche, bajan hasta los baños a hacerse lamer del chivo, para volverse millonarios. Una madrugada, la dueña de una casa vieja vio salir de la gruta, por las gradas, un cerdo seguido de dos o tres lechones que echaban fuego y se iban hacia el norte. Y hay quien jura que por ese lado del río todavía se pasea una serpiente enorme.`,
    historia: `Rumichaca es el puente natural de piedra —eso quiere decir el nombre en quichua— sobre el río que los colombianos llaman Güaitara y los ecuatorianos Carchi, entre Ipiales y Tulcán. Junto a él se levantaron las casas de aduana y el puente internacional, y debajo quedan unos baños de agua termal. De ese paisaje salen dos relatos que la gente del lugar cuenta juntos.

El de los dos puentes lo publicó el diario La Hora, en su sección de Imbabura y Carchi, el 14 de agosto de 2006, con el título «Mitos: El Diablo desafió a Dios en Rumichaca». La nota dice que lo contaba Miche Higuera, una de las primeras pobladoras del sector, muerta hacía más de un siglo; que sus hijos lo pasaron a Marciza Guadalupe, encargada en comodato de los baños, y que ella se lo dio al periódico. La misma nota recoge el informe de un geólogo alemán que atribuye los puentes a derrumbes por temblores, y la opinión de un sacerdote de que la historia nació en la Conquista como lección de doctrina.

En noviembre de 2016 el medio tulcaneño Carchi al Día publicó la versión de Dimas Alfredo Tenganán, bañista de 75 años, que la había oído de su abuelo: la carrera nocturna, el «arrume piedra», el gallo de las cinco y la piedra que el Diablo no alcanzó a poner.

El chivo aparece en Rituales y sincretismos en el Resguardo de Ipiales, de Edmundo Osejo Coral y Álvaro Flores Rosero, publicado en Quito por Abya-Yala, dentro de un recorrido por el río y sus seres. La tesis de maestría de Stalin Andrés Lima Armas en la Universidad Técnica del Norte (2017), sobre el Qhapaq Ñan en la parroquia Urbina, recoge el testimonio de José Arellano, dueño del predio de los baños, sobre quienes bajan a medianoche a buscar al chivo.`,
    versiones: `Las dos versiones de la apuesta no cuentan la misma carrera. En la de La Hora, que viene de Miche Higuera, Dios y el Diablo compiten por quién sabe más de arquitectura y la prueba es la calidad: un puente agreste y espinoso a la izquierda, otro amplio y con escaleras a la derecha, y los indígenas que al amanecer encuentran los dos. En la de Tenganán compiten por velocidad: Dios arenga a sus ayudantes con el «arrume piedra», el gallo canta a las cinco, el trabajo se detiene y queda colgando la piedra que el Diablo no puso. La tesis de Lima Armas copia casi palabra por palabra la versión de La Hora y le añade el desenlace: Dios ganó con la obra más hermosa y resistente.

El nombre también se explica de dos maneras. Carchi al Día llama «versión colombiana» a la que lo saca del grito de Dios, arrume piedra; El Telégrafo y el glosario de Osejo y Flores lo traducen del quichua como puente de piedra.

El Diablo que se queda en el cañón tiene varias caras. Para Osejo y Flores es un chivo que espera entre recodos y cuevas para cambiar riquezas por almas. En el relato de José Arellano la gente baja a medianoche a que el chivo la lama y la haga millonaria. En la crónica de Carlos Jiménez para El Telégrafo (2015) no hay chivo: un hombre de Córdoba, en Colombia, dijo hace un siglo que el diablo vivía en el fondo de la gruta, y una dueña de casa vio salir un cerdo con lechones de fuego. Tenganán habla de una serpiente, y Lima Armas de un duende elegante que se aparece en las aguas termales y al que alguien bajó a pedirle riqueza y vida eterna.`,
    similitudes: `La obra que el diablo levanta en una noche y deja sin terminar por una piedra es la misma de Cantuña, la leyenda más conocida de Quito. En ella el indígena Cantuña pacta con el diablo para que el atrio de San Francisco quede hecho antes del amanecer a cambio de su alma, y los diablillos trabajan toda la noche; pero una piedra queda sin poner, el pacto no se cumple y Cantuña salva el alma. La iglesia, como la peña de Rumichaca, conserva el hueco.

El diablo que cambia riquezas por almas y al que se vence con astucia es también el del «Relato del diablo» que Osejo Coral y Flores Rosero recogieron en Guachucal en 1991 de boca de Roberto González: un hombre pobre que cuida el maizal de un señor tiene que adivinarle la edad o irse con él, y su mujer, cubierta de miel, plumas y musgo y caminando en cuatro patas, asusta al dueño, que resulta ser el diablo y confiesa sus trescientos años.

Y el diablo que vive en las aguas bajas de un río y sube a llevarse a sus escogidos tiene vecino en el mismo Güaitara: los mismos autores ponen junto al de Rumichaca al diablo de la Humeadora, y aguas abajo la chorrera de la Descomulgada, donde se dice que está el demonio.`,
    leccion:
      "Lo que se construye de noche y a la carrera siempre deja una piedra sin poner.",
    sceneHorizontal:
      "dos puentes de piedra distintos cruzan el cañón del Güaitara durante una competencia nocturna, con Dios y el Diablo trabajando en lados opuestos y el río al fondo",
    sceneVertical:
      "al amanecer un gallo canta sobre la peña mientras una piedra queda suspendida antes de cerrar el puente del Diablo, sin repetir la vista doble de la portada",
    researchNotes:
      "REESCRITURA DOCUMENTAL: elimina pacto, contrabando, sombra y viajero inventado. Separa el desafío de los puentes, el motivo del gallo y la variante del chivo en las termales.",
    seoTitle: "El Diablo Chivo y los puentes de Rumichaca",
    seoDescription:
      "Leyendas de Rumichaca sobre la competencia entre Dios y el Diablo para construir dos puentes y la aparición de un chivo junto a las aguas termales.",
    focusKeywords: [
      "Diablo Chivo de Rumichaca",
      "puentes de Rumichaca",
      "leyendas del río Güaitara",
      "aguas termales Rumichaca",
      "mitos de Nariño",
    ],
  }),
  definePacificoNarinoMyth({
    slug: "guagua-rayo",
    fuentesAgotadas: "El Plan de salvaguarda de Jenoy sólo circula en Scribd; la tesis de FLACSO de Rodríguez Valencia (2020) responde 403; Ceballos 2010 no está en abierto; el fonolibro de Radioteca es audio sin transcripción; el enlace de la Universidad de Nariño «El espíritu de la naturaleza indómita» (sired 16295) da 404. Fuera de las monografías y artículos de Jenoy, la búsqueda sólo devuelve blogs y agregadores.",
    sourceKeys: [
      "pantojarugir2010",
      "roserocaminos2014",
      "roseromayores2018",
      "sanchezmodern2024",
      "corponarinoDocumento2017",
      "inguilanSaberes2023",
      "cAJARJuan2021",
    ],
    title: "Guagua Rayo",
    excerpt:
      "En Jenoy, una pareja sin hijos recoge al Guagua Rayo durante las lluvias; siete años después, el niño regresa a la tormenta.",
    tags: ["niño", "transformación", "montaña", "memoria"],
    mito: `Hubo un tiempo en que los ricos llegaron a hacerse dueños de la tierra de Jenoy. Los lotes de abajo, los de El Edén, los cambiaban por una pierna de buey que se había derrumbado, y la gente se quedaba trabajándoles. Vivía allí un matrimonio muy pobre, tan pobre que en un año entero no alcanzaba a descontar ni un real de su deuda. No tenían nada, ni para la lata.

Un día empezó a llover. A la lluvia siguió una tempestad de truenos, dura y cerrada, y en la mitad de la tempestad cayó un trueno más fuerte que todos. Con él cayó el Guagua Rayo, un niño chiquito.

El hombre no se quedó mirando. Lo envolvió en una camisita de lienzo que tenía y lo metió en un wilque, que así llamaban a la olla, y allí lo guardó mientras pasaban los rayos. Cuando amainó, se fue con el niño donde el cura.

—Su reverencia, bautíceme este niño.
—¿Y por qué?
—Porque vino un trueno y nos dejó este niño.

Lo voltearon de frente y en el pecho encontraron algo escrito: adonde naciera el Guagua Rayo nadie sería dueño; los ricos y los blancos tendrían que salir, y el propio Guagua Rayo sería el dueño del territorio de Jenoy. El cura lo volteó de espaldas y allí leyó lo demás: donde cae el Guagua Rayo, a su gente jamás la moverán de su tierra, porque son raíces antiguas. El niño se llamaría Juan Solarte Criollo.

Así lo bautizaron. Tenía una colita, como de perrito. Los antiguas lo criaron con chullita de mazamorra, con agüita de panela, con cafecito y con caldos de lo que hubiera, y el niño fue creciendo.

Cuando tenía como año y medio, cada vez que llovía y tronaba salía gateando, se paraba en una piernita y se sentaba en el umbral de la puerta. Entonces sonaban los rayos, ¡chas!, ¡shilin!, y era la plata que le bajaba su papá, el rayo. Le dejaba bastante. El niño volvía brincando en una pierna, diciendo ¡achala, achala!, y le entregaba toda esa plata a la señora que lo estaba criando.

Con eso los ricos tuvieron que dejar el territorio. Se fueron yendo de uno en uno. El Guagua Rayo nació en Jenoy, y de él viene el apellido Criollo que llevan tantas familias del pueblo.

Su figura quedó tallada en una piedra del sitio Tomates, en Aguapamba, subiendo hacia el Galeras. Le dicen el Mantel de Piedra, y allí, cuentan los mayores, están sus escrituras.`,
    historia: `El relato pertenece a Jenoy, o Genoy, corregimiento de Pasto recostado en la falda norte del volcán Galeras, donde un cabildo quillasinga volvió a constituirse en 2008. Su registro más completo está en «Al rugir del Galeras», monografía de Víctor Javier Erazo Pantoja presentada en la Universidad de Nariño en 2010. En las páginas 52 y 53 transcribe la entrevista que le hizo a Pascuala Criollo el 27 de abril de 2008. Ella cierra diciendo que quien contaba esa historia era Dioselina Criollo, y Erazo la presenta como uno de los mitos fundamentales de los jenoyes: el que explica el apellido Criollo y el derecho del pueblo a su tierra.

La misma narradora ya lo había contado el 26 de agosto de 2007, en una reunión comunitaria convocada para decidir si Jenoy recuperaba el cabildo. Esa versión la publicaron Franco Ceballos Rosero, Martha Isabel Rosas y Darío Tupaz Coral en 2014, en la revista Procesos Históricos de la Universidad de los Andes de Mérida (p. 169), dentro de un artículo sobre el Derecho Mayor. Los autores explican el contexto: en 2005 el Estado declaró zona de amenaza volcánica alta el área vecina al Galeras (decreto 4106) y ordenó reasentar a sus habitantes; los jenoyes respondieron con su memoria. Para Ceballos, el niño que trae escrito en el cuerpo que el dueño de la tierra es Jenoy funciona como un discurso jurídico.

El petroglifo del sitio Tomates, que la comunidad llama Mantel de Piedra o Mantel de la Vida, aparece en el Documento étnico de la cuenca del Juanambú (Corponariño, 2017) como el lugar donde los antepasados tallaron la figura del guagua rayo. John J. Sánchez y William A. Posada lo fotografiaron para Andean Geology en 2024 bajo el nombre de Piedra de Guagua Rayo o de Vuelta Larga.`,
    versiones: `Pascuala Criollo cuenta dos veces la historia y cambia poco. En 2007 los protagonistas son «unos pobres cuidadores», conciertos de unos ricos, y el niño va en un lienzo dentro de una olla; en 2008 son un matrimonio pobre despojado de El Edén, el niño va en una camisita dentro de un wilque, y aparecen la colita, la crianza de los antiguas y la plata que le baja su padre el rayo. En las dos el nombre es Juan Solarte Criollo.

En 2018 Ceballos Rosero publica, en Universitas Humanística, la versión de una mayor que la oyó de su abuela. Allí el rayo cae en el centro del pueblo, se oye llorar a un niño de pecho y es una mujer indígena quien corre a recogerlo, seguida por la gente. El niño crece rápido y se vuelve el líder que saca a la gente de la esclavitud de las haciendas y hace nombrar Cabildo; se llama Juan Criollo. La narradora dice que esa historia está escrita en la piedra que descubrió el profesor Romualdo Criollo en Aguapamba.

Otros mayores, según el artículo de 2014, dicen que Juan Rayo fue hijo del Rayo y de la Virgen del Rosario Chiquita, y que el agua lo trajo al mundo para que el fuego del volcán no lo destruyera todo. En Mapachico, vereda vecina, Sánchez y Posada recogen que el niño del rayo se transforma en el Galeras y es patriarca de toda la gente de la región.`,
    similitudes: `El paralelo más cercano está en el Cauca. Los nasa cuentan que Juan Tama, hijo de la estrella, apareció flotando en una balsa de bejucos sobre las aguas crecidas de la quebrada El Lucero, que los médicos tradicionales lo sacaron y lo criaron, y que llegó a ser el cacique que defendió el territorio; el Colectivo de Abogados José Alvear Restrepo recoge ese relato al lado del hecho documentado de que en 1700 Juan Tama obtuvo títulos de resguardo. Como el Guagua Rayo, es un niño que no nace de mujer sino de un fenómeno del cielo o del agua, que la comunidad recibe y cría, y cuya llegada funda un derecho sobre la tierra.

Dentro del mismo Galeras, el niño del rayo tiene un destino distinto en cada vereda: en Jenoy expulsa a los ricos y deja un apellido; en Mapachico, según Sánchez y Posada, se convierte en el volcán y en el abuelo de todos. Y en la versión que recogen Ceballos, Rosas y Tupaz, su madre es la Virgen del Rosario Chiquita, la misma imagen que los jenoyes subieron al cráter en 2005 para aplacar al Taita Galeras. El rayo como padre y la Virgen como madre dejan al niño a medio camino entre el volcán y el templo.`,
    leccion:
      "Lo que cae del cielo en tiempos de despojo puede devolverle la tierra a quien la trabaja.",
    sceneHorizontal:
      "Juan y Telma avanzan bajo la lluvia de abril hacia un llanto que surge junto a una piedra y recogen al Guagua Rayo con una sábana",
    sceneVertical:
      "siete años después, el niño se despide de sus padres adoptivos y camina hacia una tormenta sobre Jenoy, con Galeras distante y sin repetir la captura",
    researchNotes:
      "TRANSFERENCIA A QUILLACINGAS: restituye dos versiones de Jenoy y las mantiene separadas. Se eliminan Guagua Auca, violencia doméstica y una falsa síntesis presentada como cuento único.",
    seoTitle: "Guagua Rayo, el niño de la tormenta | Jenoy",
    seoDescription:
      "Relatos de Jenoy sobre el Guagua Rayo: un niño recogido por una pareja sin hijos y Juan Rayo, presencia territorial vinculada con Galeras.",
    focusKeywords: [
      "Guagua Rayo de Jenoy",
      "Juan Rayo Nariño",
      "leyendas de Jenoy",
      "mitos Quillacingas",
      "Taita Galeras y Guagua Rayo",
    ],
  }),
  definePacificoNarinoMyth({
    slug: "la-totuma-de-la-cocha",
    fuentesAgotadas: "no se localizó el texto de Enrique Herrera Enríquez en la revista Reto de Diario del Sur ni la página del SINIC que cita la tesis de 2009; fuera de las dos tesis de la Universidad de Nariño y la página de la SCRD, el relato de Pucara y Tamia sólo circula en blogs, tiendas de artesanía y agregadores de noticias que lo copian. El enlace heredado de Ramsar (rsis.ramsar.org/es/ris/1047) no devuelve contenido.",
    sourceKeys: [
      "guerreromito2009",
      {
        key: "moraMitos2004",
        summary:
          "Cita «El encantamiento de La Cocha» de Enrique Herrera Enríquez (revista Reto, Diario del Sur): Pucara muere y se hace tábano, pica a Tamia, que vomita el agua; Munani queda cerro y La Corota es la cabeza de Tamia. Añade el relato del terremoto de Ana Aurelia Bastidas (1999).",
        limitation:
          "Trabajo de informática educativa: transcribe sin fecha de la revista y con lectura simbólica breve.",
      },
      "culturaLeyenda2",
      "arteagamitos2023",
      {
        key: "parquesCorota",
        summary:
          "Sitúa la isla La Corota en la laguna de La Cocha o lago Guamuez, en el corregimiento de El Encano, con familias campesinas e indígenas quillasingas en sus orillas: la geografía en la que cierran todas las versiones.",
        limitation:
          "No menciona la leyenda: sólo sostiene los topónimos.",
      },
    ],
    title: "La Totuma de la Cocha",
    excerpt:
      "Tamia abandona a Pucara por Munani; un pilche derramado crece hasta cubrir el valle y formar la laguna de La Cocha.",
    tags: ["laguna", "amor", "traición", "origen"],
    mito: `Pucara, cuyo nombre quiere decir fortaleza, estaba enamorado de la princesa Tamia, Lluvia de Estrellas, y al fin logró conquistarla. Formaron un hogar y tuvieron tres hijos: Chasca, el Lucero; Coyllur, la Estrella; y Waira, el Viento. Vivían en un valle de los Andes que albergaba siete ciudades, lleno de ríos y manantiales que regaban las parcelas, con caza y pesca de sobra.

Pucara era un cacique corpulento que trabajaba sin descanso por su gente. Tamia era joven, de cabello negro y liso. Cuando paseaban juntos por las siete ciudades, despertaban más de una envidia.

Cuando los hijos ya se valían solos llegaron las fiestas del Inti Raimi, el Baile del Sol. Pucara llevó a su esposa a una de las ciudades donde se festejaba al dios Inti, y allí se divirtieron hasta el amanecer. El danzante principal de la comparsa se llamaba Munani. Le pidió permiso al cacique para bailar con Tamia, y mientras bailaban le dijo al oído cuánto lo habían impresionado sus ojos oscuros. Al terminar se la devolvió a Pucara con una sonrisa.

Desde esa noche Tamia no volvió a ser la misma. Un día en que Pucara no estaba, Munani llegó a buscarla; ella salió a recibirlo y los dos se confesaron lo que sentían. Siguieron viéndose a escondidas, hasta que decidieron decirlo delante de todo el pueblo.

Pucara se entristeció. Dejó el mando y, para no estorbarles el camino, se fue a la montaña con sus tres hijos. Allá se puso a criar tábanos.

Tamia y Munani anduvieron sin freno por las siete ciudades, y la gente, escandalizada, prohibió prestarles cualquier servicio. Un día tuvieron sed. Fueron de puerta en puerta pidiendo un pilche con agua, y nadie les abrió. Al fin dieron con un niño y lo engañaron: un pedazo de pan a cambio del pilche.

Se tendieron en un potrero cercano con el pilche a los pies. En pleno amor, el hombre regó el agua y se quedó dormido boca arriba. No vio que el agua derramada crecía y crecía hasta casi ahogarlo. Llegó entonces uno de los tábanos de Pucara, le picó la nalga y lo hizo vomitar agua por la boca y la nariz. Fue tanta que en poco tiempo cubrió el valle entero, y las siete ciudades quedaron en el fondo. Lo último que se oyó fue una campana. Así nació el lago Guamuez, la laguna de La Cocha.

Desde la montaña Pucara lo vio todo. Lloró su desgracia, abrazó a sus hijos y se quedó petrificado para siempre en el cerro que lleva el nombre del insecto: el Tábano. Allí se distinguen todavía él, sus tres hijos y la mascota.

Cuando Pucara se acuerda de la traición llora entre rayos y centellas, y sus lágrimas hacen crecer la laguna y causan estragos en las orillas. Y hay quienes cuentan que el Viernes Santo, por la tarde, suena una campana, y que alrededor de La Corota navega una balsa de totora con un pilche, un peine y una gallina clueca con sus pollitos. Quien los recoja desencantará La Cocha, y las siete ciudades volverán a salir del agua.`,
    historia: `Esta leyenda de la laguna de La Cocha, en el corregimiento de El Encano, en Pasto, no procede de un narrador identificado sino de un texto literario que circula en Nariño desde hace décadas. La referencia escrita más antigua que se ha localizado es «El encantamiento de La Cocha», de Enrique Herrera Enríquez, publicado en Reto, la revista cultural del periódico Diario del Sur de Pasto (pp. 7-10). Ese texto lo reproducen en 2004 John Harvey Benavides Mora, Carmenza Janeth Espinoza Rosero y Sonia Alejandra Portilla Melo en su trabajo de grado de la Universidad de Nariño, «Mitos y leyendas de la región andina de Nariño para el imaginario infantil» (pp. 79-80), acompañado de una lectura de sus símbolos: la pareja, el pilche, el insecto, el rechazo y el agua.

La forma más extensa es la que Mario Enrique Sarasty Guerrero y Sonia Rocío Ramírez Barco incluyen en 2009 en su tesis de Maestría en Etnoliteratura de la misma universidad, dedicada a los mitos entre los estudiantes de El Encano. Su capítulo 4, «Mito y agua templos de vida» (pp. 76-80), trae el relato con los nombres quechuas de los tres hijos, el Inti Raimi, el Tábano y la tradición de la balsa de totora del Viernes Santo, y lo toma, según su nota 38, del Sistema Nacional de Información Cultural del Ministerio de Cultura. Los autores lo trabajaron con los estudiantes del corregimiento como uno de los textos de su propia laguna.

La Secretaría de Cultura, Recreación y Deporte de Bogotá publica en su sección infantil Bogotanitos una versión resumida que conserva casi las mismas frases y traduce los nombres de los hijos.`,
    versiones: `Las tres versiones escritas cuentan la misma traición y separan el castigo de manera distinta. En la de Sarasty y Ramírez, y en la de la Secretaría de Cultura de Bogotá, Pucara se aparta vivo a la montaña, cría tábanos y uno de ellos pica al amante, que vomita el agua que inunda el valle; Pucara queda petrificado en el cerro Tábano con sus hijos. En la de Herrera Enríquez que citan Benavides y sus coautoras, el cacique enferma de pena, muere jurando venganza y se convierte él mismo en tábano; la picada es para Tamia, que vomita el agua sin parar, mientras Munani huye y termina hecho un cerro. La isla La Corota, en esa versión, es un rastro de la cabeza de Tamia.

Los nombres también se mueven: el amante aparece como Munani y como Munami, y los hijos se llaman Chasca, Coyllur y Waira en la tesis de 2009, y Lucero, Estrella y Viento en la página de Bogotá. El recipiente es pilche, totuma o mate. Sólo la tesis de 2009 trae la balsa de totora que desencantaría la laguna.

En el mismo trabajo de 2004 aparece un relato muy distinto que contó Ana Aurelia Bastidas en Pasto en 1999: hubo un terremoto, un pueblito se hundió y se formó la laguna, y sólo quedó en pie la casita donde se estaba velando al Niño Jesús.`,
    similitudes: `Los mayores del resguardo quillasinga Refugio del Sol, en la orilla de la misma laguna, cuentan el origen de La Cocha con piezas parecidas y otra trama. Según el trabajo de Jeison Benavides Arteaga, Tatiana Muñoz Araujo y Diana Muñoz Botina (Universidad de Nariño, 2023), el taita Carlos Erazo narra a una mujer que abandona a su esposo y a sus dos hijos para irse con otro hombre; cruzan siete pueblos, nadie les da posada, y es una señora quien le presta a la joven un pilche con agua para mirarse. El llanto rebosa el pilche, la mujer lo arroja con rabia y el agua ya no para: ella queda sirena y el esposo se vuelve el cerro Tábano. El taita William Jojoa pone el agua en manos de unos niños que desobedecen la orden de no dársela a la pareja, y el pilche volteado queda como la isla de La Corota.

Lo que en la versión escrita de Pasto es una historia de cacique, princesa y danzante del Inti Raimi, en la voz del resguardo es la historia de una mujer y un vecindario que le cierra las puertas. El recipiente pequeño que desata una inundación enorme, el pueblo que niega el agua y el marido abandonado convertido en montaña se repiten en todas.

El hundimiento que salva sólo la casa donde se vela al Niño Jesús, en el relato de Ana Aurelia Bastidas, pertenece a otra familia de cuentos: la del pueblo sumergido con su campana, que la versión de Pucara también conserva en su último sonido.`,
    leccion:
      "La sed que nadie quiso calmar terminó convertida en un agua que ya nadie puede secar.",
    sceneHorizontal:
      "Tamia y Munani descansan en un potrero mientras el agua derramada de un pequeño pilche comienza a extenderse por el valle de siete ciudades",
    sceneVertical:
      "Pucara y sus tres hijos observan desde la montaña el valle convertido en laguna, con una campana apenas visible bajo capas azules planas",
    researchNotes:
      "TRANSFERENCIA A QUILLACINGAS SIN FUSIÓN: conserva la versión popular Pucara-Tamia-Munani. Declara que las dos versiones directas del Refugio del Sol permanecen en Cualanquizan.",
    seoTitle: "Pucara, Tamia y el pilche de La Cocha",
    seoDescription:
      "Versión popular Quillacinga sobre Pucara, Tamia y Munani: el agua de un pilche crece hasta cubrir siete ciudades y formar La Cocha.",
    focusKeywords: [
      "Pucara y Tamia",
      "pilche de La Cocha",
      "origen de la laguna La Cocha",
      "leyenda Quillacinga",
      "Munani Lluvia de Estrellas",
    ],
  }),
  definePacificoNarinoMyth({
    slug: "la-sirena-del-arco",
    fuentesAgotadas: "Ningún registro con informante nombra a la Sirena del Arco; Pedrosa y Vanín (1992) y el libro completo de Garrido (1980) no tienen texto abierto.",
    sourceKeys: [
      "vlietColombia1997",
      "culturaLeyenda",
      {
        key: "corponarinoSirena",
        summary:
          "Reproduce casi literalmente la página de Bogotanitos sobre la Sirena del Arco.",
        limitation:
          "Copia sin fuente propia.",
      },
      "tiempoCuentos2004",
      "caroNoticias1975",
      "ibagueFolclor2013",
      "homeroOdyssey1900",
    ],
    relatoCorto:
      "El registro fechado (1997) tiene tres frases y la ampliación de Bogotá una descripción sin caso; llegar a 300 palabras exigiría inventar.",
    title: "La sirena del arco",
    excerpt:
      "La Sirena del Arco recorre de noche las costas de Tumaco; su canto atrae navegantes y, bajo la luna, convoca bailes en la playa.",
    tags: ["sirena", "mar", "noche", "peligro"],
    mito: `En el puerto de Tumaco dicen que el mar tiene reina. Es la Sirena del Arco, que sale por las noches de su palacio marino a recorrer las costas y a mirar de cerca a los hombres. Nada como un fantasma. Tiene cabeza y busto de mujer, cuerpo de pez y cola de ave; lleva una máscara, en una mano un puñal y en la otra un cetro de oro. Los buzos más atrevidos cuentan que sus palacios del fondo del mar están hechos de cristales, joyas y piedras preciosas.

Los marinos y los pescadores dicen que a veces canta cantos sagrados y poesías de amor, y que con su voz dulce enloquece a los navegantes, que se van hundiendo en el mar, adormecidos, sin darse cuenta de que se ahogan. En las noches de luna llena aparece en las playas, y con su canto hace que las parejas de enamorados salgan a bailar en la arena. Otros la han visto con las ballenas jorobadas que pasan por el Pacífico: de pronto se juntan, arrastran las embarcaciones ancladas a su lado y se llevan a los marinos y a los pescadores al fondo del océano.

Los que la han visto dicen que es la tristeza y el remordimiento de quienes se dejan atrapar por su belleza y por su voz. Y algunos pescadores dicen que la han visto sola, en la playa.`,
    historia: `El registro más antiguo de la Sirena del Arco es una página infantil de la Biblioteca Virtual del Banco de la República, «Niños de las regiones de Colombia», de Esmeralda Van Vliet para el ICAN, que se imprimió el 12 de enero de 1997 dentro de un informe del programa Fulbright-Hays compilado por Ana María Alfaro y conservado en la base ERIC. En tres frases, Anita, una niña de Pasto, cuenta que es la reina del mar, que en el puerto de Tumaco sale de noche de su palacio marino y recorre las costas, y que los pescadores dicen haberla visto sola en la playa.

La descripción larga está en la serie Bogotanitos de la Secretaría de Cultura, Recreación y Deporte de Bogotá, sin firma ni fecha, que la atribuye a «la gente de la región de Tumaco» y termina casi con la misma frase de 1997. Esa página le añade la cola de ave, la máscara, el puñal y el cetro, los palacios de piedras preciosas con un lapidario de once gemas, los cantos, las parejas que bailan en luna llena y las ballenas jorobadas. La Corporación Autónoma Regional de Nariño la reprodujo casi literalmente en 2024, en su caracterización cultural del Pacífico nariñense. Las dos coinciden en el lugar, el puerto de Tumaco, y en la imagen final de la sirena sola en la playa.`,
    versiones: `La Sirena del Arco de 1997 es breve y serena: una reina del mar que recorre la costa y se deja ver sola. La de Bogotá es peligrosa: su canto ahoga a los navegantes y las ballenas que la acompañan hunden los barcos. Entre las dos, la figura pasa de ser un ser del paisaje de Tumaco a ser una sirena de los relatos de marinos.

Algunos detalles de la página de Bogotá tienen otro origen: el lapidario de once piedras, cada una con su virtud —ágata para el espíritu, amatista para la castidad, esmeralda para la belleza—, es un tópico de los lapidarios europeos, no un dato de la costa nariñense.

El libro de 2004 Cuentos de espantos y otros seres fantásticos del folclor colombiano, que se declara «recopilación de documentos imaginarios», le dedica una entrada en la costa Pacífica con cola de delfín, palacios submarinos y la carta en una botella de un biólogo que convive con los delfines cerca de la isla del Gallo. Es composición del libro.`,
    similitudes: `La sirena que atrae con su canto a los navegantes hasta ahogarlos es la de la tradición grecolatina, las sirenas de la Odisea, y la de los relatos de marinos europeos. La Sirena del Arco de Bogotá conserva ese oficio, y le suma la máscara, el cetro y el lapidario de la imaginería europea.

En el Pacífico y la Amazonia colombianos, los seres del agua que se llevan a las personas son otros. El bufeo o delfín de río de Leticia, que José Joaquín Montes Giraldo recogió en 1975, toma figura de hombre para llevarse a las mujeres; la entrada del libro de 2004 sobre la Sirena del Arco mezcla a la sirena con los delfines, y menciona que los nativos del Pacífico dicen que los delfines poblaron el mar tras la erupción de un volcán en la isla Gorgona.

Y en la región andina, la Madre de Agua del Tolima, que Misael Devia recogió en 1962, es otra reina de las aguas que llama a sus víctimas desde la orilla, aunque en su caso las víctimas son niños.`,
    leccion:
      "La belleza que canta en la noche también puede ser la que arrastra hacia el fondo.",
    sceneHorizontal:
      "la Sirena del Arco emerge de un mar nocturno frente a Tumaco con cuerpo compuesto, máscara, cetro y puñal, mientras una embarcación mantiene distancia",
    sceneVertical:
      "bajo la luna llena, la Sirena canta desde la orilla y varias parejas adultas bailan en la playa, sin repetir la embarcación de la portada",
    researchNotes:
      "RESTAURACIÓN DOCUMENTAL: elimina a Antonio, una explicación psicológica y asesinatos industriales no respaldados. Conserva el núcleo atribuido a gente de Tumaco y marca ornamentos como versión divulgada.",
    seoTitle: "Sirena del Arco | Reina del mar de Tumaco",
    seoDescription:
      "Leyenda de Tumaco sobre la Sirena del Arco, reina marina de cuerpo compuesto cuyo canto atrae navegantes y convoca bailes bajo la luna.",
    focusKeywords: [
      "Sirena del Arco",
      "leyenda de Tumaco",
      "sirena del Pacífico colombiano",
      "mitos del mar en Nariño",
      "reina del mar Tumaco",
    ],
  }),
  definePacificoNarinoMyth({
    slug: "taita-galeras",
    sourceKeys: [
      {
        key: "pantojarugir2010",
        summary:
          "Reúne el núcleo del relato: Delfín Yaqueno sobre el volcán que no tolera gritos ni chiflidos, José Francisco Yaqueno sobre el hallazgo de la Virgen Chiquita en Sachapamba, las fiestas de mayo y octubre y la caminata de 2005 a los cráteres con la imagen para aplacar al Taita-Mama Galeras.",
        limitation:
          "Monografía de pregrado; la caminata de 2005 se registra sólo en una nota al pie.",
      },
      "portillaRepresentaciones2023",
      {
        key: "roserocaminos2014",
        summary:
          "Recoge que algunos mayores leen el rayo caído en Jenoy como presagio enviado por la Virgen Chiquita del Rosario contra el decreto de reasentamiento, y que Juan Rayo es hijo del Rayo y de esa Virgen.",
        limitation:
          "Artículo de antropología jurídica; el relato llega parafraseado por los autores.",
      },
      {
        key: "roseromayores2018",
        summary:
          "Voces de mayores sobre la ceniza de 2005, la negativa a salir de la zona de desastre, el espíritu Manuel que cuida la ciudad de oro bajo el Galeras y el Himno al Galeras de Los Amigos de Jenoy.",
        limitation:
          "Relato etnoliterario que funde varias voces sin identificar a los hablantes.",
      },
      {
        key: "sanchezmodern2024",
        summary:
          "Describe al Taita Galeras o Urcunina como entidad poderosa y temperamental pero benigna, y a la Virgen del Rosario como la figura capaz de calmarlo: aunque el Guagua Rayo esté furioso, la Virgen está del lado de la gente.",
        limitation:
          "Artículo de geología: el relato llega en síntesis, sin narradores.",
      },
      "ojedaErasoRepresentaciones2018",
      "robertsdeconstruction2015",
      {
        key: "corponarinoDocumento2017",
        summary:
          "El cabildo de Jenoy nombra al taita Urkunina «padre y madre» de cuyos pajonales nacen las aguas de sus seis acueductos, y señala Sachapamba como el lugar donde apareció la Virgen del Rosario, patrona que «en varias ocasiones nos ha defendido».",
        limitation:
          "Documento de ordenamiento de cuenca: la voz del cabildo llega en forma de inventario de sitios.",
      },
      {
        key: "inguilanSaberes2023",
        summary:
          "Presenta al Taita Galeras o Taita Urcunina como espíritu mayor de la comunidad y describe su doble espiritualidad: fiestas ancestrales y fiesta de la Virgen del Rosario.",
        limitation:
          "Trabajo de administración pública; descripción general, sin relato.",
      },
    ],
    title: "Taita Galeras",
    excerpt:
      "Cuando Taita Galeras se enoja, la Virgen del Rosario sale desde Jenoy para calmar la fuerza de la montaña.",
    tags: ["montaña", "respeto", "memoria", "tradición oral"],
    mito: `Arriba de Jenoy está el Taita Galeras, al que los antiguos llamaban Urcunina. Para la gente del pueblo es padre y madre a la vez: en sus faldas se da el mortiño que suben a coger, y de sus pajonales bajan las aguas que beben las casas. Pero es un taita bravo. No le gusta que le conversen duro, ni que le griten, ni que le chiflen. Allá arriba se habla despacito. El que sube cantando fuerte se gana de inmediato un aguacerón con granizada, y hasta puede quedarse muerto en el páramo.

Abajo, en el pueblo, vive la Virgen Chiquita del Rosario. Es pequeñita. Un señor andaba buscando unos bueyes que se le habían salido y no los hallaba; subió hasta Sachapamba, a medio kilómetro de Jenoy, y allí la vio sobre una piedra grande. Bajó a la carrera a avisar, y la gente fue a traerla a la iglesia. Desde entonces es la patrona del pueblo, y la festejan el 30 de mayo y a finales de octubre.

Entre los dos hay un trato viejo. Cuando el Galeras se enoja, cuando retumba, relampaguea y llueve sin parar, la gente acude a ella. La pasan de casa en casa, le arman altares, rezan en el templo para que el volcán vuelva a su sosiego. Y cuando el peligro es grande, la suben a verlo.

Así pasó en 2005. El Galeras se sacudió y dejó a Pasto cubierto de ceniza. Los de afuera dijeron que todo aquello era zona de desastre y llegaron con policías y soldados para sacar a la gente. Los mayores no se fueron: ellos sabían cómo es el Galeras. Organizaron en cambio una caminata hasta los cráteres, cargando la imagen pequeña de la Virgen. Los que fueron recuerdan haber llegado a las bocas, que echaban humo, en un sitio plano lleno de piedras. Allí dejaron a la mamita chiquita para que detuviera al volcán, para que le tendiera un mantel encima cuando decían que iba a reventar.

Más de un mayor asegura que el rayo que cayó por esos días sobre Jenoy lo mandó la Virgen Chiquita, como aviso de que nada malo les iba a pasar. El Guagua Rayo, el niño del trueno, podrá estar furioso; la Virgen del Rosario está del lado de su gente.

Y el Galeras no es sólo fuego. Hay quien cuenta que en lo más alto vive un espíritu llamado Manuel, que cuida una ciudad de oro escondida debajo del territorio, y que la zona de desastre no fue más que un pretexto para ir a buscar esas riquezas. Los músicos del pueblo le cantan al taita: dicen que no hay tierra mejor para vivir, que hasta sus aguas son medicinales, y que cuando el viento sopla duro él hace lindos cantares.`,
    historia: `Jenoy es un corregimiento de Pasto asentado en la ladera norte del Galeras. Tras la reactivación del volcán en 2004 y 2005, el decreto 4106 declaró zona de amenaza alta buena parte de su territorio y ordenó el reasentamiento; la comunidad se negó a salir y en 2008 volvió a nombrar cabildo indígena quillasinga. En ese pulso se escribió casi todo lo que hoy se sabe de su relación con el volcán.

El registro base es la monografía de Víctor Javier Erazo Pantoja, «Al rugir del Galeras», presentada en la Universidad de Nariño en 2010. Allí Delfín Yaqueno explica, en entrevista de julio de 2008, por qué no se puede gritar ni chiflar en el volcán (p. 28); José Francisco Yaqueno cuenta en abril de 2008 el hallazgo de la Virgen en Sachapamba (p. 53); y una nota al pie (p. 69) registra la caminata de 2005 hasta los cráteres con una imagen pequeña de la Virgen, y los rezos en el templo para que el volcán volviera a la normalidad. Erazo llama al volcán taita-mama Galeras y documenta que los estudios de la Cámara de Comercio de Pasto de 2007 tildaban esa devoción de obstáculo para la prevención.

Roxana Cruz Portilla y Camilo Yaqueno Yaqueno, en la revista Imagonautas (2023), entrevistaron a adultos mayores de la vereda Aguapamba: dos de ellos recuerdan la subida con la Virgen hasta las bocas humeantes. Franco Ceballos Rosero, en artículos de 2014 y 2018, recoge la lectura de la Virgen Chiquita como protectora y la negativa de los mayores al desalojo; John J. Sánchez y William A. Posada, desde la geología, describen en 2024 la pareja Taita Galeras y Virgen del Rosario como el equilibrio que sostiene a las comunidades de la montaña.`,
    versiones: `Los testimonios coinciden en lo esencial y se separan en los detalles. Para Delfín Yaqueno el volcán castiga el ruido con aguacero y granizo; los líderes de Genoy que entrevistó Jessica Roberts para su tesis de la Universidad de York (2015) lo describen, en cambio, como padre y protector que en otras erupciones los salvó dejando pasar la lava por ambos lados. La devoción a la Virgen tiene dos formas en las fuentes: una vecina de Genoy entrevistada por Nasly Ojeda-Eraso y sus colegas (Boletín de Geología, 2018) cuenta que, cuando el volcán erupciona y relampaguea, la Virgen se pasa por cada casa y se reza ante altares; en Erazo y en Imagonautas, la imagen sube al cráter.

Sobre quién hizo esa subida tampoco hay una sola voz. Un mayor de Aguapamba dice que la cargaban dos vecinos del lugar; otro atribuye la subida a los de Charguayaco, y dice que pusieron allá arriba a la mamita chiquita para que tendiera un mantel sobre el volcán.

Ceballos (2014) recoge dos lecturas del rayo que cayó en Jenoy en tiempos del decreto: para algunos fue presagio de la Virgen, para otros el momento en que llegó el cabildo para quedarse. Sánchez y Posada, desde Mapachico, hacen del Guagua Rayo el que se enfurece y de la Virgen la que lo calma, mientras en Jenoy el niño del rayo es hijo de la Virgen misma. El espíritu Manuel y la ciudad de oro sólo aparecen en la voz que recoge Ceballos en 2018.`,
    similitudes: `La idea de una imagen católica que se opone a la furia de un volcán tiene un pariente cercano en el propio Galeras: el Guagua Rayo de Jenoy, el niño del trueno, es según algunos mayores hijo del Rayo y de la misma Virgen del Rosario Chiquita, como recogen Ceballos, Rosas y Tupaz; y en Mapachico, según Sánchez y Posada, el niño del rayo termina convertido en el volcán. Madre e hijo quedan así a lado y lado de la montaña.

El hallazgo de la imagen sobre una piedra del monte, por un hombre que buscaba su ganado, lo pone el mismo José Francisco Yaqueno al lado de la Virgen santísima de Pasto, la Merceditas: cada pueblo con su imagen hallada y su patrona. Y la regla de callar en la montaña tiene su eco en otros seres del páramo que Erazo recoge en Jenoy: el gringo que «entunda» a quien pasa por los lugares de respeto, o la vieja y el diablo que salen de noche en el camino alto. En la tesis de Jessica Roberts (2015) un funcionario de cultura de la región resume la mezcla: los indígenas miran el volcán como los católicos miran a la Virgen; y un líder de Genoy dice que el Taita Galeras es como el padre.`,
    leccion:
      "Una montaña que puede matar también puede ser padre, si se le habla en voz baja.",
    sceneHorizontal:
      "Taita Galeras domina el horizonte sobre Jenoy con una presencia serena pero poderosa mientras la comunidad se reúne alrededor de la Virgen del Rosario Chiquita",
    sceneVertical:
      "una procesión asciende con la pequeña imagen de la Virgen hacia la montaña durante lluvia y rayos, y la agitación comienza a calmarse",
    researchNotes:
      "TRANSFERENCIA A QUILLACINGAS: restituye la relación de Jenoy con Taita Galeras y la Virgen del Rosario. Elimina cuatro ojos de agua, Telpis, carnaval y barniz inventados.",
    seoTitle: "Taita Galeras y la Virgen del Rosario | Jenoy",
    seoDescription:
      "Memoria de Jenoy sobre Taita Galeras, montaña protectora y temperamental, y la Virgen del Rosario Chiquita que puede calmar su enojo.",
    focusKeywords: [
      "Taita Galeras de Jenoy",
      "Virgen del Rosario Chiquita",
      "leyendas de Galeras",
      "mitos Quillacingas",
      "Juan Rayo y Galeras",
    ],
  }),
  definePacificoNarinoMyth({
    slug: "el-padre-mera",
    fuentesAgotadas: "El estudio de FLACSO sobre «Manuel María Mera» da 403 y el informe de la Comisión de la Verdad no abrió; el artículo de González (1995) está en ResearchGate, vetado. Garrido 1980 es el único registro con testimonios.",
    sourceKeys: [
      "investigacionMitos1993",
      {
        key: "rayaMarimba",
        summary:
          "Llama al padre Manuel María Mera y lo sitúa en Guapi en 1908 preguntando quién tenía marimba en casa.",
        limitation:
          "Divulgación; el nombre difiere del de los libros parroquiales.",
      },
      "uNESCOMusica2015",
    ],
    title: "El padre Mera",
    excerpt:
      "En Guapi y el Pacífico sur, Manuel María Mera fue recordado como sacerdote milagroso y también como perseguidor de marimbas y bailes.",
    tags: ["música", "memoria", "respeto", "tradición oral"],
    mito: `Por los ríos de la costa sur anduvo, hace más de un siglo, un padre al que nadie le vio nunca los pies. Decían que había salido de un guadual en la costa, y en Salahonda el síndico juraba que era San Antonio. Llamaba a la oración por las tardes, y si la gente no acudía, salía con el látigo que llevaba prendido en la correa.

Cuando iba camino de Guapi, todo el pueblo salió a recibirlo. Una mujer que lavaba en el río lo vio pasar y dijo para sí: «¿Padre? El diablo será». Días después fue a confesarse, y él le preguntó: «¿Te vas a confesar con el diablo?». Desde entonces lo tuvo por santo. Otra mujer habló mal de él, y él anunció un incendio: una chispa cayó en esa casa y el fuego arrasó dos terceras partes del pueblo.

En tiempo de escasez bendijo las semillas de los labradores, y donde se sembraron siguen dando. A una señora que le negó un poco de leche porque no tenía ni para ella le mandó poner una vasija más grande, y la vaca la llenó: bebió la familia, bebió él y sobró. A los del trapiche que no le quisieron vender panela, la panela se les puso dura como piedra. Unos huevos que le regalaron los devolvió: eran robados.

En San José, viendo que no le hacían caso, se volvió a la imagen del Señor del Amparo y le dijo: «Señor del Amparo, levántate para que estos vean que mis palabras son verdad». La imagen empezó a moverse, y el pueblo entero pidió perdón. En Payán, el párroco no quería dejarlo celebrar; se fueron al cementerio, el Padre Mera desapareció en la puerta, y junto a la cruz mayor el párroco encontró un Cristo crucificado que derramaba sangre por todos los vellos. En Salahonda apagó las luces de la iglesia y se oyeron ruidos que venían de lo hondo de la tierra, del otro mundo, hasta que la gente se le abrazó a los pies y cesaron. Otra vez anunció lluvia: se apagaron las luces, sonó un aguacero con truenos, y al salir de la iglesia el suelo estaba seco.

En Balsita, cerca de Iscuandé, encontró a una señora llorando en el entierro de su única hija. Mandó hacer una toldada sobre la sepultura, pidió un vaso de agua y despidió a todos. Desenterró a la niña, se quedó a solas con la muerta, y al rato salió con la niña viva.

Comía unas pocas lentejitas que él mismo cocinaba, bebía agua de coco y dormía con un tronco de balsa por almohada: al terminar las misiones, la cama que le preparaban estaba intacta. Una noche unas mujeres lo espiaron y lo vieron a oscuras, crucificado boca abajo. Al día siguiente preguntó quién lo había visto. Por las noches cargaba descalzo una gran cruz y cantaba: «Mira, mira, pecador, que si vives en pecado puedes anochecer bueno y amanecer condenado».

En Bocagrande pidió que lo llevara el buque Tumaquito, y no quisieron llevarlo. El Tumaquito se hundió. Y en las velaciones del viernes santo todavía se canta: «si no viene el Padre Mera, nos íbamos a acabar».`,
    historia: `La leyenda la recogió el carmelita José Miguel Garrido, párroco en el Vicariato de Tumaco, en el último capítulo de su libro Tras el alma de un pueblo (Folclor religioso del Vicariato de Tumaco, 1980, pp. 191-201). Eugenia Villa Posse lo reprodujo en el segundo tomo de Mitos y leyendas de Colombia (IADAP, Quito, 1993), sección 27, pp. 345-358, y lo presenta como la «leyenda viva» que la población negra construyó sobre un sacerdote que vivió en la región.

Garrido cuenta cómo llegó a ella. El síndico de Salahonda, de más de setenta años, le habló del padre al que no se le veían los pies; en la velación del viernes santo oyó un alabao que lo nombraba; y salió por los pueblos a buscar testimonios. Los transcribe sin juzgarlos: una anciana de San José que lo conoció de muchacha, un antiguo monaguillo nacido en la guerra de los Mil Días, un hombre de más de noventa años, un señor de 78 y una señora nacida en 1889, además de alabaos, décimas y coplas de los ríos Patía, Telembí e Ispí.

Después buscó en los archivos parroquiales. Encontró a Jesús María Mera, bautizado en Florida (Valle) en 1872, coadjutor en Pradera en 1909, en Guapi en la Semana Santa de 1910, bautizando en misiones en Chimbuza en octubre de ese año, en Salahonda, Payán y Barbacoas en 1911, y muerto de tisis en Palmira en 1926. Garrido cree que una clave de su impacto fue que el padre era descendiente de esclavos.`,
    versiones: `Los testimonios que reúne Garrido no concuerdan en el itinerario. Unos dicen que llegó del Ecuador por Cabo Manglares, otros que bajó de la sierra por Balsitas hacia Guapi, otros que apareció en el río Nansalbí, y una señora dice que venía «de la costa». Garrido reconstruye un recorrido que no pretende ser cronológico, y lo contrasta con los libros parroquiales, que lo sitúan en el Vicariato entre 1910 y 1912.

Dentro de los prodigios hay variantes: en Payán, el que derramaba sangre en el cementerio era el Cristo según el monaguillo, y el propio Padre Mera según otra versión de la costa; en Salahonda, los ruidos del otro mundo se oyeron en la iglesia o en el cementerio junto a la Peña del Señor.

El nombre también cambia. Los libros parroquiales dicen Jesús María Mera, y las coplas lo llaman «el padre Jesús María». La revista Raya, en un artículo sobre la persecución de la marimba en el Pacífico, lo llama Manuel María Mera y lo sitúa en Guapi en 1908, preguntando a los guapireños si tenían marimba en casa. Las coplas que recoge Garrido conservan esa prédica: la marimba, la sonaja, el baile y el cununo son lo que hay que olvidar para enmendarse.`,
    similitudes: `El Padre Mera pertenece a la tradición de los santos populares del catolicismo latinoamericano, sacerdotes o laicos a los que la gente atribuye milagros en vida sin que la Iglesia los reconozca. Garrido mismo señala el paralelo bíblico del milagro de la leche: la escena del profeta Elías con la viuda de Sarepta, cuya harina y aceite no se acabaron.

La marimba que el Padre Mera mandaba olvidar es hoy patrimonio. La UNESCO inscribió en su lista representativa la música de marimba y los cantos y bailes tradicionales del Pacífico sur colombiano y de Esmeraldas, en Ecuador, la misma tradición de alabaos y arrullos con la que la gente del Vicariato canta todavía al padre que la combatía. El alabao que Garrido oyó en la velación del viernes santo es parte de ese repertorio.

Y el sacerdote que llega de ninguna parte, hace prodigios, castiga al que lo desprecia y se va sin que se sepa adónde tiene su contrapartida en los relatos del diablo disfrazado: la mujer de Guapi que lo toma por el diablo y la variante en que él mismo derrama sangre muestran que la frontera entre el santo y el espanto se cruzaba en las dos direcciones.`,
    leccion:
      "Un pueblo puede hacer santo a quien le prohíbe lo que ama si siente que ese alguien es de los suyos.",
    sceneHorizontal:
      "el Padre Mera camina por la ribera de Guapi mientras una lavandera lo observa con temor y, al otro lado, músicos protegen una marimba y tambores",
    sceneVertical:
      "una marimba, cununos y bombos permanecen junto al río después de una prohibición, mientras la comunidad vuelve a reunirse alrededor de la música",
    researchNotes:
      "TRANSFERENCIA A AFROCOLOMBIANOS: integra las memorias fuente del libro base y estudios del Pacífico sur. Equilibra prodigios y violencia cultural sin canonizar ni demonizar a la persona histórica.",
    seoTitle: "Padre Mera: milagro, miedo y marimba | Guapi",
    seoDescription:
      "Memorias del Pacífico sur sobre Manuel María Mera: sacerdote tenido por milagroso y recordado también por perseguir marimbas, tambores y bailes.",
    focusKeywords: [
      "Padre Mera Guapi",
      "Manuel María Mera",
      "marimba del Pacífico",
      "memoria afrocolombiana",
      "mitos del Pacífico sur",
    ],
  }),
];

export default records;
