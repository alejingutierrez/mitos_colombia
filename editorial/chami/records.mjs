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
    sourceKeys: [
      "reichel1953",
      "redAprendeMetadata",
      "chaves1945",
      "cardona2026",
      {
        key: "cardonaMitologia2013",
        summary:
          "Nombra al protagonista del ciclo en lengua emberá y lo caracteriza: «Kuriva, el humilde y astuto ñeque o guatín, decide darle su merecido» a Imamá, el tigre que «se cree dueño del mundo, oponiendo inteligencia a fuerza». Enumera tres de los engaños que el relato chamí también encadena: hacerle comer a sus propios hijos, burlarlo en un baile ante todos y hacerle «golpear con su manaza de tigre sus propias guevas». Aporta además la lectura que los autores oyeron de los narradores: es una historia contra la «importancia personal», no contra la fuerza en abstracto.",
        limitation:
          "El trabajo de campo es de 2012 en Jawa (río Chorí), Tandó, Nuquí arriba y Yucal, golfo de Tribugá, Chocó: emberá del Pacífico, no chamí. Los autores declaran un método «un poco lejos de la academia»: notas rápidas de campo y memorización, sin transcripción literal ni nombre del narrador de este episodio, así que los detalles no pueden citarse como versión fijada. Publicada en Bioetnia 10 (2013), pp. 88-94, revista del IIAP; el PDF descargable es la única forma de leerla.",
      },
      "seleccionbabea2010",
      "iNDEITradicion2006",
      "uribeFloresmiro1986",
      "raceroCasarrubiaReconocimiento2023",
    ],
    title: "El guatín astuto",
    mito: `El guatín era gente y era muy pícaro. Se veía chiquito, pero molestaba hasta a la gente grande.

Un día comía frutas en el monte cuando llegó el tigre y le dijo que iba a matarlo para comérselo. El guatín respondió que no valía la pena, que estaba flaco porque tenía muy poca comida. El tigre le preguntó qué estaba comiendo. Entonces el guatín cogió una fruta de corozo, se la puso entre las piernas y le pegó con una piedra. «Estoy comiendo mis testículos, ¿quieres probar?». El tigre probó y dijo que era muy sabroso. «Tú eres tan grande, los tuyos deben estar mucho más sabrosos. ¿Por qué no vamos a comer uno?». El tigre aceptó, el guatín le cogió los testículos y les pegó con la piedra. El tigre pegó un grito, saltó y salió corriendo, y el guatín se quedó con mucha risa.

El tigre se sentó en el monte a llorar y vino el oso a preguntarle por qué estaba triste. Cuando supo, dijo que fueran a matar al guatín. Se escondieron los dos, pero el guatín llegó corriendo y les ofreció un venado que tenía bien amarrado allá arriba. Se fueron los tres, el guatín se adelantó y soltó una piedra grande que se derrumbó sobre el león y el tigre. «¡Allí va el venado, cójanlo!», gritó, y se fue corriendo con mucha risa mientras los otros quedaban casi muertos.

Otro día les dijo que había visto un animal grande, muy manso, que no se defendía, y que cuando paraba las orejas quería decir que ya se entregaba. Fueron a verlo. Era un burro, y al verlos paró las orejas. «¡Ya quiere entregarse, mátenlo!». El tigre y el león se le fueron encima, y el burro los aporreó, los mordió y los dejó casi muertos.

Después los otros hicieron una roza y sembraron maíz, pero el oso comía tanto que casi acaba la cosecha. El guatín dijo que había que castigarlo y le ofreció enseñarle a ensillar una bestia. Le puso riendas de bejuco, se montó en su espalda, le dio espuelas y lo dejó muerto de cansancio y de garrotazos. Cuando el tigre fue a defenderlo, cayó en una trampa que le lanzó una flecha.

Entonces prepararon una fiesta para emborracharlo y matarlo. El guatín llegó con su tambor, tomaron chicha por la noche y él tocaba y cantaba: pakuru-de usi-má, con un palo me pegaron. El tigre y el oso se lanzaron sobre él, y detrás todos los demás animales, hasta hacer un montón con el guatín por debajo. «¡Ya lo tengo cogido!», gritó el tigre, que lo tenía por la pierna. «Ja, ja, sólo tienes un pelo mío cogido», dijo el guatín. El tigre le soltó la pierna y el guatín se fue corriendo.

Se escondió en una cueva. Mandaron a la ardita a sacarlo, pero entró con los ojos cerrados del miedo. El guatín le dijo que los abriera, que así no podía verlo, y le echó tierra en los ojos. Mientras ella se limpiaba la cara llegó el zorro con su hacha, pegó un hachazo para abrir la cueva y le dio a la ardita en la cola. Con el llanto y el alboroto, el guatín salió y se fue.

La última vez lo esperaron escondidos junto al río, pero él los había observado. Se revolcó en un colmenar y después en las hojas, hasta parecer un animal grande, y llegó gritando: «¡Apártense, aquí viene el animal más grande del mundo!». El oso y el tigre se asustaron y prefirieron irse. El guatín tomó agua tranquilo, subió a una altura y gritó desde allá: «Fui yo, el guatín, a mí no me pueden matar». Por fin los otros dijeron que no podían matarlo, que él sabía más que ellos y que sería mejor hacer la paz con él.`,
    historia: `Este es el primer relato de «Algunos mitos de los indios Chamí», que Gerardo Reichel-Dolmatoff publicó en 1953 en la Revista de Folklore, pp. 148-150 del artículo. Lo recogió en 1945, durante un reconocimiento corto a un grupo de unos sesenta chamí asentados en la vereda de Corozal, municipio de Río Frío, Valle del Cauca, llegados poco antes de la hoya del río San Juan, de Antioquia y de Caldas. Quien lo narró no quedó nombrado: Reichel-Dolmatoff anota que las personas narraron en castellano y que él transcribió el texto original sin cambio alguno, y admite en la misma página que carecía de perspectiva sobre el contexto cultural de lo que recogía. Lo primero da valor a la transcripción, lo segundo obliga a no leer sus notas como explicación.

Sus notas al pie son suyas, de 1953, y aquí una desafina: identifica al guatín como Coelogynis paca, que es la guagua, mientras que el nombre guatín o ñeque designa en la región al Dasyprocta punctata. Racero-Casarrubia y sus coautores registran en 2023 ese animal en el resguardo Jaikerazavi de Mutatá, con su nombre en lengua, Kuriwa, entre las presas de cacería más consumidas, aunque con emberá katío y no chamí. El relato de Río Frío, en cambio, nunca le da nombre en lengua: sólo conserva el verso que el guatín canta con el tambor, pakuru-de usi-má, que la transcripción traduce «con un palo me pegaron».

El nombre sí está del lado chamí en la otra fuente primaria. Milcíades Chaves, que viajó en la misma expedición de 1945, publica en el Boletín de Arqueología I-3 un cuarto relato titulado «Kurijía (Conejo de monte)», y advierte en la página 134 que los cuatro primeros de los nueve que transcribe se los narró Nicolás Henao, indio chamí de unos treinta años, llegado a Calima quince años antes desde Balboa, en Caldas, hermano del cacique y cuñado del curandero, que tradujo él mismo sus palabras. Los cinco últimos son de Rafael Bailarín, katío. Kurijía es, pues, chamí con narrador y procedencia. Antonio María Cardona y Jairo Guerra escriben Kuriva y describen al «humilde y astuto ñeque o guatín» que le da su merecido a Imamá, el tigre que se cree dueño del mundo, aunque su trabajo es de 2012 en el golfo de Tribugá, con emberá del Pacífico y por notas rápidas de campo.

Ninguna de las fuentes disponibles conserva esta cadena de engaños narrada en emberá bedea, ni un registro chamí posterior que la repita completa.`,
    versiones: `De esta cadena entera hay un solo testimonio, el de Río Frío de 1945, y su narrador quedó sin nombre. Todo lo que se puede comparar son relatos del mismo personaje recogidos en otras zonas emberá, y conviene decir de cuál es cada uno.

El Kurijía que Nicolás Henao narró a Chaves es chamí y es el mismo embaucador, pero no cuenta nada de esto. Allí Kurijía pide prestada plata al sapo, al león, al tigre, al venado, al zorro y al mono, se la bebe en una fiesta, y cuando los acreedores llegan a cobrar les dice que se suban a un árbol mientras él almuerza y le vende sus cueros a un cazador. La segunda mitad ya no es suya sino del sapo, que se esconde en la maleta de Aguilonte para llegar volando a la fiesta de arriba y termina derrengado, y de ahí en adelante todos los sapos quedaron brincando así. Es decir: el corpus chamí conserva al personaje, con nombre, y no estos episodios.

La cadena sí reaparece entre los emberá katío. «El ñeque y el tigre», que Joaquín Conde narró en Miácora y Mauricio Pardo recogió para Zrõarã Nẽburã, comparte tres eslabones exactos: el tigre que se machuca los testículos con una piedra creyendo comer táparo, donde Río Frío pone corozo; el perseguidor que suelta lo que creía tener agarrado porque le dicen que es otra cosa, donde Río Frío pone el pelo de la pierna; y la piedra enorme que rueda en lugar del animal prometido, allí una danta y aquí un venado. En cambio trae la muerte de las crías del tigre y el intento de ahogarlo con piedras, que Río Frío no tiene, y le faltan el burro, la roza, la fiesta con chicha y tambor, la ardita y el disfraz de miel y hojas.

Entre los emberá eyábida de Polines, Ezequiel Domicó narró a la maestra Ligia Domicó Bailarín «Tigre con su mujer», donde el embaucador es el conejo, el guardián de la cueva es una lechuza y no una ardita, la fruta se llama tonaba y el tigre muere de comer lo que creía comida. En Río Frío no muere nadie y el ciclo se cierra con una paz negociada.

La grafía del protagonista cambia con la fuente: guatín, ñeque, conejo, Kurijía, Kuriva, Kuriwa.`,
    leccion:
      "La fuerza acorrala al pequeño hasta que el ingenio obliga a los grandes a negociar la paz.",
    similitudes: `El paralelo más cercano y mejor documentado está entre los emberá katío del alto Baudó: «El ñeque y el tigre», narrado por Joaquín Conde en Miácora, encadena engaños que Río Frío también encadena, incluidos el de los testículos machucados con una piedra y la piedra que rueda ladera abajo en vez del animal prometido. La diferencia es el saldo. Allí el ñeque cocina a las crías del tigre, mata a la tigresa y deja al tigre sin sentido; en Río Frío nadie muere y los perseguidores acaban reconociendo que no pueden con él y proponiendo la paz.

El segundo paralelo es emberá eyábida: «Tigre con su mujer», narrado por Ezequiel Domicó en el resguardo de Polines, en Chigorodó, y recogido por la maestra Ligia Domicó Bailarín. Es la misma secuencia de la tierra en el ojo del guardián y de la fruta falsa, pero el pequeño es un conejo, el guardián una lechuza y el tigre muere. Que el papel del embaucador lo ocupe el conejo, el ñeque o el guatín según la zona muestra que lo que viaja es la trama, no la especie.

Conviene marcar un límite. Historias del tigre y el ñeque circulan también publicadas como guna de Panamá, y compartir protagonista no las vuelve emberá ni sirven para esta página: el pueblo guna aparece en la mitología emberá del lado de los enemigos antiguos, no de los narradores. Dentro del propio corpus chamí, el guatín se deja leer junto a Kurijía, aunque son dos tramas distintas del mismo personaje, y no junto a las metamorfosis de otras fichas, porque aquí nadie cambia de cuerpo: el guatín se disfraza de miel y hojas y sigue siendo el guatín.`,
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
    sourceKeys: [
      "reichel1953",
      "redAprendeMetadata",
      "chaves1945",
      "cardona2026",
      "vascoChami",
      "ferrariJinu2023",
      {
        key: "rojasescalera1986",
        summary:
          "Cotejo directo de variantes del relato, hecho por quien trabajó en campo. Pardo lo llama «uno de los mitos más populares entre los emberá y uno de los que se conserva en casi todas las zonas», da el nombre en lengua —/jerúpotó uarra/, de /jerúpotó/ pantorrilla y /uarra/ hijo— y precisa que «nació de la pierna de una mujer (en algunas zonas se cuenta que fué un hombre)», lo que sitúa la paternidad masculina de Río Frío como variante documentada y no como rareza. Reconstruye la secuencia luna-guadua-pájaro carpintero-caída y nombra el mundo de abajo /atau aramora/, «ano tapado», comparándolo expresamente con /aramuko/ de Chaves (1945:145) y /aremuko/ de Reichel (1953:165). Añade que en varias versiones el personaje trae del mundo de abajo el chontaduro, el caimito, el ají y flores de adorno, y que «las diferentes versiones… coinciden en relatar que las manchas de la luna fueron hechas por este personaje».",
        limitation:
          "Casi todos los datos vienen del alto Baudó (Santa María de Condoto, Miácora, La Felicia), con campañas de campo entre 1980 y 1983: emberá de río, no chamí. Lo chamí aparece solo de segunda mano, al citar un relato que «Reichel recogió entre unos emberá procedentes del Chamí (Risaralda)». El artículo es un informe de etnoastronomía: el ciclo de la pantorrilla entra como apoyo para describir los niveles cósmicos, no como objeto de estudio. Maguaré 4 (1986); el PDF es un escaneo con OCR defectuoso, lo que obliga a citar con cuidado las transcripciones fonéticas.",
      },
      {
        key: "gomezMitos1997",
        summary:
          "Recopilación hecha en Risaralda con maestros y jaibanás chamí nombrados uno por uno. Trata el ciclo bajo los nombres «Los Gemelos» o «Jiropotuarra» y establece la variación interna del propio corpus chamí: «en algunas versiones se hace alusión a los gemelos que nacen de la pantorrilla y en otras, sólo se hace alusión a un niño, igualmente nacido de una pantorrilla». Conserva además una variante que Zuluaga oyó en 1990 de boca del jaibaná Mario Restrepo Siágama, donde el episodio del mundo de abajo aparece resumido desde dentro: «Cuando el santo escapó de los hombres que lo perseguían por haberle hecho el ano a un indio del mundo de abajo, se encontró con el jefe de las Berea», y de ahí sale el origen de las abejas. Es el respaldo chamí más concreto que encontré para el episodio que el texto de Río Frío narra sin explicar.",
        limitation:
          "Es un libro de un historiador, no una edición crítica: el autor advierte en la introducción que trabaja «sin documentos escritos» y reelabora lo oído, y no siempre separa su prosa de la del narrador. El volumen mezcla material de distinta procedencia: los capítulos sobre los Burumia, el Bojayá, Lloró y Usaragá son del Chocó, no del Chamí, y hay que distinguirlos al citar. Ejemplar escaneado sin capa de texto en el repositorio de la UTP (Pereira, agosto de 1997), de modo que solo se lee por imágenes y no admite búsqueda; la ficha debe citar página.",
      },
      {
        key: "seleccionbabea2010",
        summary:
          "Trae «Jinopotabar» dentro de una sección de literatura emberá chamí titulada «El Hijo de la pierna y relatos afines», y el texto empieza donde el de Río Frío termina: la luna alumbraba tanto que no dejaba dormir, el joven sube por una guadua que crece hasta el cielo, pelea con la luna y «le cogió la cara con las uñas… y le dañó los ojos», la gente de abajo corta la guadua por envidia, él baja diciendo ¡Mompará! pesado como piedra, atraviesa la tierra y llega donde los Dojura, que duermen de día. La nota editorial es explícita sobre la procedencia: «Jinopotabar es la versión Chamí del relato de Jerupotouarra. Los chamíes de Mistrató y Pueblo Rico, en el noroccidente del Departamento de Risaralda…», con base en relatos de Clemente Nengarabe.",
        limitation:
          "La misma nota admite que a los textos «les dimos la forma de expresión que pensamos necesaria para la unidad del trabajo»: es una versión literaria reelaborada sobre el material de Nengarabe y Vasco, no una transcripción nueva, y en parte se solapa con una fuente que la ficha ya cita. Omite por completo la nutria, la ballena, el nacimiento desde el padre y la avispa final que sí trae Río Frío, así que sirve para comparar el tramo lunar y subterráneo, no el ciclo entero.",
      },
      {
        key: "iNDEITradicion2006",
        summary:
          "Contiene la versión más cercana al arranque de Río Frío que encontré fuera de Reichel: un emberá pesca en un pozo, «llegó un animal parecido a una nutria y se pegó de la pantorrilla del hombre», la pantorrilla se hincha, revienta a los nueve meses y el padre muere en el parto; el hijo crece deprisa, pregunta quién mató a su padre y busca a las mujeres en su periodo. Una nota al pie declara la inestabilidad del nombre —«uno de los relatos más variados en la representación escritural… no hay un consenso o acuerdo de escritura»— y registra que un maestro chamí, Óscar Cano, lo escribe «Juropotowarra», lo que documenta la grafía chamí frente a la eyábida «Jeropotobarra».",
        limitation:
          "La versión transcrita es de José Bernardo Domicó, emberá eyábida del Centro Educativo Rural Indígena Juradó Alto: katío, no chamí; de lo chamí solo queda la variante ortográfica registrada en nota. Material escolar reescrito por los maestros para enseñar castellano, con dibujos y sin texto en lengua, de modo que el orden de los episodios refleja tanto la tradición como la necesidad didáctica. Aquí el padre muere y la madre no aparece, al revés que en varias versiones del ciclo.",
      },
    ],
    title: "El hijo de la nutria",
    mito: `Un día un hombre se fue al río a pescar, con luna llena. Vino una nutria, lo llamó y le habló, pero él no hizo caso, y entonces ella se le pegó a la pierna. El hombre la sacó y en la casa contó que el animal no lo había mordido sino abrazado. Un mes después la pantorrilla se le hinchó por demás, se reventó y apareció un niño, y el hombre se murió. Lo crió una mujer, pero el único alimento que quiso fue la sangre menstrual, y ella tuvo que darle la suya.

Cuando creció preguntó por su madre. De noche iba al pueblo a beber la sangre de las mujeres dormidas, que quedaban como privadas y no lo oían, y ellas le cogieron mucho odio. Un hombre le dijo por fin que a su madre se la había tragado la gran ballena que come gente, allá en el charco.

Fue al lago con su lanza y tocó un carrizo para llamar a la ballena, que salió y se lo tragó con todo y balsa. Adentro encontró gente vivita, animales, aves y quebradas. Le dijeron que el río grande salía por debajo de la cola: puso la lanza como tranca en la salida, salió con su balsa y volvió a entrar a buscar el corazón, que era una gran ahumaya, y lo mató. Después hizo asientos de balso y puso uno en cada casa. Vino una gran tempestad, y cada relámpago se llevaba un asiento, hasta que se acabaron y se acabó la tempestad. El animal quedó muerto en la orilla y el río corría rojo de sangre.

Pero lo odiaban. Le dijeron que no había sido la ballena sino otro animal del río, nusi ur. Botó al agua un muñeco grande de balso, el animal se lo tragó, y él se metió detrás y lo cogió del pescuezo. La boca era como una flor de granadilla y las aletas como hoja de palma real. Lo mató, y los indios lloraron mucho porque ese animal era su dios.

La gente se fue y él la siguió molestando a las mujeres. Una muchacha le dijo que detrás de la montaña vivía el animal que sí la había matado. Se llamaba unangaramia y no era uno solo: era la mata de los animales, y salía humo. Mató a muchos, pero siempre quedó viva la mitad, y se fue diciendo que si los mataba a todos no habría más animales en el mundo.

En el camino agarró a unas mujeres de otra tribu para beber su sangre. Preguntó otra vez, y le dijeron que la había matado la luna. Cortó guadua, la fue amarrando y subió como por una escalera. Se quedó esperando en el camino de la luna, pero vino el pájaro carpintero y le trozó la escalera. Al caer dijo mofódda, pluma, y bajó lento, lento como una pluma, hasta otro mundo debajo de la tierra. Allí había indios muy bajitos que botaban los pescados y comían sólo el humo, porque no tenían ano. Él se puso a comer los pescados y dijo que eso lo podía arreglar: cogió un palo de chontaduro y los chuzó. Muchos se murieron. Le preguntaron si no sabía de otro modo, dijo que no, y lo echaron: el cacique le mandó montarse en un animal y no abrir los ojos hasta llegar.

Llegó al monte de este mundo, donde no había gente, cogió un venado y al segundo día llegó al pie de su casa. Allá contó todo, y así los indios supieron del mundo subterráneo. Siguió molestando a las mujeres y sólo lo soportaban porque era un gran cazador: cuando unos quisieron echarle agua caliente mientras dormía, otros lo defendieron. Un día lo picó una avispa grande y lo mató. No lo enterraron: lo lloraron dos días, y al tercero los indios se durmieron, y cuando despertaron el muerto había desaparecido.`,
    historia: `Es el segundo y el más largo de los catorce relatos que Gerardo Reichel-Dolmatoff publicó en 1953 como «Algunos mitos de los indios Chamí», pp. 150-153, recogidos en 1945 en la vereda de Corozal, municipio de Río Frío, Valle del Cauca. El protagonista no recibe nombre, ni tampoco quien lo narró: sólo consta que narraron en castellano y que el recopilador transcribió sin cambio alguno, y que él mismo declaró no haber tenido perspectiva del contexto cultural. Las glosas en latín de sus notas al pie —la ahumaya como Cucurbita maxima, el chontaduro como Socratea durissima, el nusi ur como tiburón— son suyas, de 1953.

Mauricio Pardo le da el nombre que el texto no trae: /jerúpotó uarra/, de pantorrilla e hijo, y lo llama uno de los mitos más populares entre los emberá, conservado en casi todas las zonas. Precisa además que nació de la pierna de una mujer y que en algunas zonas se cuenta que fue un hombre, con lo cual el parto paterno de Río Frío queda como variante documentada y no como rareza. Su trabajo, sin embargo, es del alto Baudó entre 1980 y 1983, y lo chamí le llega de segunda mano por este mismo artículo de 1953.

Simone Ferrari estudia el ciclo en dos versiones embera dóbida grabadas en 2022 —Graciliano, de la comunidad de Yucal, a orillas del río Panguí, y Lizandro, de Boca de Jagua, sobre el río Chorí— y sostiene que las aventuras del personaje integran la mitopoiética de distintos pueblos embera, «entre ellos los embera dóbida, los embera catío y los embera chamí». Una nota suya es decisiva para esta ficha: «El padre de Jinu Potó difiere según las versiones. Algunas lo mencionan como Picario, el primer jaibaná, otros como una nutria o un murciélago, otro más como un espíritu o como la luna».

Del lado chamí hay dos apoyos concretos. Milcíades Chaves publicó en 1945 «Arrumia», narrado por Nicolás Henao, chamí de Balboa —uno de los cuatro relatos que Chaves declara en su página 134 como chamí, frente a los cinco de Rafael Bailarín, katío—, con el mismo mundo de abajo de los Aremuko que sólo comen vapor. Y el libro de maestros emberá de Chigorodó de 2006, que la lista de esta página cita sólo por una nota de grafía, contiene una versión completa narrada por Óscar Cano, maestro embera chamí del Centro Educativo Rural Indígena Guapa Alto, escrita Jerupotowarra.

Lo que ninguna fuente alcanza: no hay registro en emberá bedea del relato de Río Frío, ni manera de saber quién lo narró.`,
    versiones: `La versión de esta página es la de Río Frío de 1945 y es anónima, pero el ciclo es el mejor atestiguado del corpus emberá, y conviene ver qué se mueve de una versión a otra.

La nutria no es un rasgo propio de Río Frío. En la versión emberá eyábida que José Bernardo Domicó escribió en Juradó Alto, un animal parecido a una nutria se pega de la pantorrilla del hombre que pesca, la pierna se hincha, revienta a los nueve meses y el padre muere en el parto, exactamente como aquí. Ferrari registra en cambio versiones donde la nutria o un murciélago son el padre, junto a Picario el primer jaibaná, un espíritu o la luna, y donde quien pare y muere desangrada es la madre.

Quién da a luz cambia con la versión. La única versión chamí completa que encontré, la de Óscar Cano, no tiene nutria: allí una mujer joven tiene la vagina en el dedo gordo, al dar a luz se le raja la pierna y se muere de dolor, y a la criatura la crían un viejito y una viejita. Zuluaga recoge en Risaralda que en unas versiones nacen gemelos de la pantorrilla y en otras un solo niño.

El mundo de abajo se resuelve distinto en cada relato, y esto se ve dentro del mismo corpus chamí. En Río Frío el visitante chuza con un palo de chontaduro y muchos mueren; en el relato trece de la misma recolección, el hijo de Karagabí les corta las nalgas con un cuchillo y mueren todos; en el Jerupotowarra de Óscar Cano unos mueren y otros quedan con el ano abierto; y en «Arrumia», narrado por Nicolás Henao, el hombre emborracha con chicha, corta un huequito con una navajita de macana y la operación funciona hasta fundar descendencia.

El final cambia por completo. Aquí lo mata una avispa grande y el cuerpo desaparece al tercer día sin ser enterrado. En la versión eyábida de Juradó Alto muere de un flechazo cuando busca a Ambuima y su cuerpo se vuelve moscas, mosquitos, tábanos y murciélago, los que se alimentan de sangre. Ferrari enumera además la fiera, el aberrojo, el tronco de guayacán, la sanción de un espíritu y el indio brujo.

El episodio lunar apenas se insinúa en Río Frío: el protagonista nunca llega a la luna, porque el carpintero le troza la escalera antes. En la versión de Óscar Cano alcanza a arañarle la cara, y Pardo señala que las distintas versiones coinciden en atribuirle a este personaje las manchas de la luna. Río Frío no dice nada de las manchas.

Las grafías se multiplican: Jinu Potó, Jeru Poto Oarra, Jinopotabar, Jerupotowarra y Juropotowarra en escritura chamí, Jeropotobarra entre los eyábida. En Río Frío el personaje no tiene nombre.`,
    leccion:
      "Quien nace de una herida busca culpables toda su vida y hiere a quienes lo acogen.",
    similitudes: `El paralelo más útil está dentro del propio corpus chamí. «Arrumia», que Nicolás Henao narró a Milcíades Chaves en 1945, lleva a otro hombre —el marido de la hormiga arriera— al mismo mundo de abajo, donde los Aremuko tienen figura de hombres pero el ano tapado y sólo comen el vapor de la comida. La diferencia está en el resultado: allí la operación se hace con cuidado y con chicha, funciona, y el visitante queda como médico y deja hijos; aquí mata a muchos y lo expulsan. Dos narraciones chamí recogidas el mismo año resuelven al revés el mismo problema.

El segundo paralelo es emberá dóbida: las versiones que Graciliano, de Yucal, y Lizandro, de Boca de Jagua, narraron en 2022. Comparten el nacimiento por la pantorrilla, el je que lo traga y el mundo de los seres sin ano que se nutren por el olfato, pero allí es la madre quien pare y muere, y el héroe termina convertido en los insectos que chupan sangre. En Río Frío el cuerpo simplemente desaparece.

Hay un tercer eco interior que conviene marcar como diferencia y no como parecido: el relato trece de la misma recolección de Río Frío manda al hijo de Karagabí al mundo de los aramúko dohurá con la misma intención de abrirles el ano, y allí mueren todos. Es el mismo episodio en dos relatos vecinos, con dos protagonistas distintos y sin ningún vínculo declarado entre ellos.

Los descensos a mundos inferiores abundan en muchas tradiciones, y el propio Chaves los comparó en 1945 con los polinesios. Esa clase de coincidencia no prueba parentesco: lo que distingue a este relato es la balsa de balso, el carrizo con que llama a la ballena, el palo de chontaduro y la guadua amarrada.`,
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
    fuentesAgotadas: "se buscó Horchibarí/Horchíbarí, Dumío, Kokoró, tiumía y «negro chipote» en abierto (buscador general, luguiva.net —incluido el PDF completo de Jaibanás, sin ninguna aparición—, Redalyc/Boletín de Antropología de Rubiano Carvajal 2023, que ya está en el pool) y se volvió a abrir Castrillón Caviedes 2010 en Uniclaretiana: los seis PDF del catálogo son prefacio, índice y la nota «Para acceder a todo el contenido de este libro puede dirigirse a las bibliotecas físicas de Uniclaretiana en Quibdó y Medellín». Las únicas páginas web que dan la entrada de tiumía de Puerto de Oro son blogs de leyendas que reproducen a Zuluaga sin citarlo (vetados). No hay obra nueva que trate este relato: queda en 7.",
    sourceKeys: [
      "reichel1953",
      "redAprendeMetadata",
      "chaves1945",
      "gomezDioses1991",
      "uribeResena1993",
      {
        key: "uribeJaibanas1985",
        summary:
          "Estudio de referencia sobre los chamí de Risaralda, en PDF completo. Es la fuente que permite situar a los antagonistas del relato sin inventarles nada: describe el complejo antomiá / antumiá / tumí («los espíritus del mal, sean de la tierra o del agua», «dueños de la noche, señores de la oscuridad»), documenta que Antomiá puede ser de ambos géneros y que el jaibaná se apoya en él sin que la separación bueno/malo funcione, y reúne las versiones de los seres que roban, huelen y devoran gente. Da el marco chamí en el que un anfitrión caníbal que alimenta, juega y persigue no es una contradicción.",
        limitation:
          "Horchíbarí no aparece en el libro. La asociación entre el «negro chipote» dueño del tiumía y el complejo antomiá es una lectura de contexto, no una identificación de la fuente; la ficha no debe convertirla en dato.",
      },
      "caviedesMitos2010",
    ],
    title: "Horchíbarí",
    mito: `En una lucha cogieron presos a dos jóvenes y se los llevaron bien amarrados. Ellos alcanzaron a escaparse y llegaron a su casa, y el padre los escondió en una bóveda profunda. Pero los enemigos volvieron de noche, los buscaron y no los encontraron. Al otro día le dijeron al padre que si no decía dónde estaban lo mataban. «Para no morir te lo voy a decir», contestó, y los llevó a la bóveda. Cogieron a los hermanos y se los llevaron, y la madre les dio comida y mantas.

En el camino encontraron un derrumbe. Enemigos y presos se caían en él, y los dos hermanos llegaron muy aporreados y sin sentidos, casi muertos. Fueron a una quebrada y se bebieron una totuma de harina con agua. «¿Qué haremos? Si vamos a la casa nos buscarán», dijeron, y siguieron río abajo un día.

Por la mañana encontraron a tiumía. Cogió a uno y lo ensartó, pero el otro se escondió detrás de un balso y la lanza sólo entró en el palo ese. «Ve, hermano, ya me mató el animal», alcanzó a decir el herido. El que se salvó salió a matar al animal y siguió río abajo. Entonces vino un negro chipote, el dueño del animal, con su arco para matarlo. El hombre se escondió bajo las piedras mientras el negro tiraba flechas, y cuando el negro se devolvió se escondió en el agua, y así no lo encontró.

En el río el hombre encontró a Horchíbarí y le pidió que lo protegiera. «¡Que venga! Escóndete detrás de esta piedra», le dijo. El negro llegó como para luchar y preguntó si por ahí no había pasado gente. «¿Por qué?» «Porque mató mi animal.» «Tú eres un pícaro», le dijo Horchíbarí, y se pusieron a pelear, y ganó Horchíbarí. El negro corrió.

Horchíbarí se llevó al hombre a la casa y le daba carne de tatabro, pescado y plátano maduro. Pero Horchíbarí acostumbraba comer brea, y comía brea también su mujer, y le dieron brea al hombre, que la comió y la escupió porque era tan amarga. «¿Por qué no comes eso?» «Porque no tengo costumbre.» Le siguió dando carne y plátano, y así Horchíbarí no lo molestó nada.

Pero el juego de Horchíbarí era rodarse por los derrumbes monte abajo, y un día se lo llevó a jugar. «¿Cómo te parece ese juego?» «¡Hágalo otra vez!», dijo el hombre, y cuando lo repitió añadió: «Si yo hago eso me muero.» Así Horchíbarí se rodó y se rodó, y después tomó figura humana y dijo: «Voy a enseñarte.» Pero cuando se rodó por tercera vez, el hombre se fue corriendo.

Corriendo por el monte cayó en una trampa de chinchorro que había hecho Dumío. «Estoy corriendo de Horchíbarí», dijo. «Escóndete en el zarzo, en la olla grande.» Vino Horchíbarí con una maza grande, pero Dumío cogió su asientico y con él lo mató. Allá donde estaba quedó sólo un montón de brea, que recogieron en un canasto, y el hombre se quedó allá para vivir.

Dumío tiraba pitas delgadas a una cuadra con bodoquera y el hombre no podía. «Falta mucho para enseñarlo», dijo el viejo, y lo bañó con pita hasta que acertó. Fueron a matar zahíno al monte, y el viejo mataba tominejos y los estiraba del pescuezo hasta volverlos zahínos grandes. Cuando el hombre le pidió que le enseñara, le mostró una yerba.

Dumío vivía con su hija, y el hombre se casó con ella. Con el tiempo se aburrió y quiso ir adonde sus padres, y Dumío lo dejó ir. Caminó dos días hasta la casa de Kokoró, que le enseñó el camino y le dijo: «No cojas la mano de tu madre.» El hombre llegó a la casa de sus padres, pero cogió la mano de su madre. Así tuvo que quedarse para siempre en la casa de Kokoró, porque se le olvidó todo.`,
    historia: `Este es el relato número 3 de «Algunos mitos de los indios Chamí (Colombia)», de Gerardo Reichel-Dolmatoff, publicado en la Revista de Folklore de Bogotá en 1953, pp. 153-156. Lo recogió en 1945, durante un reconocimiento corto a un grupo chamí de unos sesenta habitantes asentado en la vereda Corozal, municipio de Río Frío, Valle del Cauca, gente llegada en migración reciente desde la hoya del río San Juan y desde Antioquia y Caldas. Reichel-Dolmatoff advierte dos cosas en su primera página: que los relatos fueron narrados en castellano por los propios indios y que él los transcribió «en su texto original, sin cambio alguno», y que carecía de una perspectiva del contexto cultural del que forman parte. Lo primero da valor a la transcripción; lo segundo obliga a no leer sus notas como explicación.

Quién narró este relato en particular no se sabe: Reichel-Dolmatoff numera los catorce textos y no nombra a nadie. La comparación duele, porque Milcíades Chaves, que viajó en la misma campaña y publicó ese mismo año en el Boletín de Arqueología, sí separó a sus narradores en la página 134 y dijo cuál era chamí, Nicolás Henao, de Balboa, y cuál katío, Rafael Bailarín. Aquí esa restitución no es posible.

Las glosas entre paréntesis son notas al pie de Reichel-Dolmatoff, de 1953, y no palabras del narrador: tiumía es «animal mítico, armado con una lanza y que come gente», Horchibarí «caníbal mítico», Dumío y Kokoró «un ser mítico», el negrochipote se explica sólo como «grande», «se volvió cristiano» se aclara como «tomó figura humana» y el zahíno se identifica en latín.

Fuera de esa publicación el relato está agotado. No existe versión independiente: lo único publicado fuera del primario es una transcripción literal que además lo atribuye mal. Víctor Zuluaga lo reproduce entero, con la grafía Hórchibarí, en el capítulo «Mitos de los Chamí de Río Frío» de Dioses, demonios y brujos de la comunidad indígena Chamí, de 1991; dice tomarlo de Reichel-Dolmatoff, pero da como referencia el Boletín de Arqueología I-3, pp. 133-159, que es el artículo de Chaves, y su libro no tiene bibliografía. Luis Guillermo Vasco, al reseñarlo en el Boletín Museo del Oro 34-35, pp. 199-200, documenta que Zuluaga «transcribe en toda su extensión, sin ningún comentario ni análisis, varios de los relatos que publicaron los antropólogos Milcíades Chávez y Gerardo Reichel-Dolmatoff en los años 40, contados por los chamí que habitaban en Riofrío, Valle del Cauca». La reseña sirve para calificar la fuente y nada más: no nombra a Horchíbarí.

Las demás fuentes acompañan sin narrar. Jaibanás. Los verdaderos hombres, de Vasco, trabaja con chamí de Risaralda y no conoce a Horchíbarí, aunque documenta el complejo antomiá, antumiá o tumí de los seres que huelen, roban y devoran gente. Mitos y tradiciones Chamí, de Héctor Castrillón Caviedes, sería el lugar donde buscar, porque dedica un apartado entero a «las entidades maléficas agresivas», pero el editor sólo publica en línea la tabla de contenido.`,
    versiones: `Hay un solo testimonio y una sola escucha. Este relato se narró una vez, en Corozal en 1945, y nadie lo ha vuelto a recoger de otra boca ni en otro lugar. No hay segundo narrador, no hay variante regional y no hay episodio que una versión traiga y otra no.

Lo que sí se puede confrontar son dos transcripciones del mismo texto. Zuluaga, en 1991, acentúa el nombre y escribe Hórchibarí donde el original escribe Horchibarí, pone berea por brea y tatabra por tatabro, separa en dos palabras el negrochipote y, en el mismo párrafo final, escribe primero Kojoró y después dos veces Kokoró, mientras el original mantiene Kokoró las tres veces. Dos diferencias pesan más que las grafías. Zuluaga atribuye a Horchíbarí la frase «Si yo hago eso, me muero» poniéndola en boca del animal, cuando en el texto de 1953 la dice el hombre y es la razón por la que el anfitrión insiste en enseñarle; y funde en una sola frase las dos del original, «se quedó solo un montón de brea» y «recogieron la brea en un canasto», con lo que se pierde que alguien guardó los restos. Son errores de copia, no otra manera de contarlo.

El antagonista, en cambio, sí tiene registro propio. Zuluaga recogió por su cuenta, entre chamí de Puerto de Oro, corregimiento de Mistrató, en Risaralda, una entrada de tiumía sin ninguna relación con Río Frío: un animal con arpón que lo disparaba sobre quien pasaba por el río, lo atraía hacia sí y se lo comía, y al que mataron echando al agua un muñeco grande de balso para que le clavara el arpón. Eso confirma que tiumía vive como figura chamí fuera de este texto y explica por qué el hermano que sobrevive se salva justamente detrás de un balso. Horchíbarí, Dumío y Kokoró no reaparecen en ninguna parte.`,
    leccion:
      "Quien logra escapar de todos sus perseguidores puede perder de todos modos el camino de regreso.",
    similitudes: `El paralelo más cercano está en el mismo campamento y en el mismo año. En «Erubidá y Siebidá», que Nicolás Henao, chamí de Balboa, narró a Milcíades Chaves en Corozal en 1945, dos jóvenes siebidá que bajan a pescar se topan con los erubidá, huyen, avisan y no les creen; en el ataque nocturno reconocen a uno y lo matan, y el otro se salva brincando al río y atravesando al otro lado. La misma pareja de hermanos sorprendidos río abajo, el mismo muerto y el mismo sobreviviente que se salva metiéndose al agua. La diferencia es el final: allí el sobreviviente vuelve, la guerra termina en un pacto y el mandón erubidá regala un cacique de oro en señal de amistad; aquí el sobreviviente no regresa nunca.

El segundo paralelo es emberá pero no chamí. En el origen del jaibanismo que Donungubí Domicó, katío de Urabá, narró al padre Severino de Santa Teresa, dos niños robados por una diabla que los cría y los instruye se libran de ella pidiéndole que les enseñe cómo hay que asomarse a las ollas hirviendo, y la empujan mientras hace la demostración. Es el mismo mecanismo con que el hombre se libra de Horchíbarí: pedirle al ser peligroso que repita el gesto que iba a servir para matarlo. La diferencia es que allí la treta viene dictada en sueños y funda un oficio, y aquí no hay sueño ni oficio, sólo un «hágalo otra vez» y una carrera.

El tercer paralelo es de objeto. La entrada de tiumía que Zuluaga recogió entre chamí de Puerto de Oro, en Mistrató, mata al animal con un muñeco de balso preparado por la comunidad; en Río Frío el balso salva por azar, porque el hermano se esconde detrás de un tronco y la lanza se queda clavada en la madera. La misma propiedad del balso, una vez como estrategia colectiva y otra como accidente.`,
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
    sourceKeys: [
      "reichel1953",
      "redAprendeMetadata",
      "chaves1945",
      "cardona2026",
      "vascoChami",
      {
        key: "teresaindios1959",
        summary:
          "Es la fuente que más se acerca a una mujer que es hormiga: Gentzerá vive dentro de una peña cerrada con puerta de piedra, llena de agua y de peces; Caragabí sueña «que Gentzerá era una mujer mezquina y miserable que se negaría a prestarle agua», le derriba la puerta, la echa de su palacio de agua y la parte por la cintura, «pero ella no murió por eso, sino que se convirtió en hormiga negra y grande que carga continuamente agua en la boca». Da a la ficha un antecedente emberá explícito de mujer-hormiga, de casa oculta y de expulsión, sin necesidad de decidir si la mujer embijada «es» una hormiga.",
        limitation:
          "Es emberá katío de Urabá, no chamí, y la lógica es inversa a la de Río Frío: allí la mujer es la mezquina y el castigo viene de Caragabí; aquí la mujer es generosa, trabaja la roza y es el marido quien rompe la relación. El autor es misionero y escribe en clave de castigo divino. El ejemplar en línea es la edición de Medellín de 1959; los materiales se publicaron primero en Bogotá en 1924.",
      },
      {
        key: "rosiqueGraciaTodos2020",
        summary:
          "Da la clave de lectura que la ficha necesita. Por un lado nombra a «Jenzerá (hormiga conga Paraponera clavata)» como quien escondió el agua en tiempos antiguos, y hace del colibrí que la buscó la metáfora de su propia investigación. Por otro —y esto es lo decisivo— describe cómo los emberá tratan a la entidad poderosa del sitio sagrado «como una parienta afín sometida a reglas de reciprocidad», bajo un modelo explícito suegra-yerno. El relato de Río Frío deja de ser una historia de amor perdido y pasa a ser un caso de alianza rota: la suegra es la que defiende a la nuera, y cuando la reciprocidad se corta, el trabajo compartido —las hormigas que sembraban— se vuelve destrucción.",
        limitation:
          "Es emberá eyábida de Chigorodó (Urabá antioqueño), no chamí, y no contiene ningún relato de mujer embijada, tambos invisibles ni caballete de hormigas: aporta el marco de parentesco y el nombre de la hormiga, no una variante del mito. La entidad afín que analiza es Pãkõré, madre de los animales, no una hormiga.",
      },
      {
        key: "iNDEITradicion2006",
        summary:
          "Trae dos versiones seguidas de «Gesera», y la segunda abre con la frase que más importa aquí: «Esto era una vez una mujer, que es gesera», dueña del agua, que «sabía cómo abrir y cerrar ese lugar» y tenía las llaves. Karagabí se convierte en pescado grande, se deja pescar, entra a su casa colgado para ahumar y desde allí observa cómo ella saca y controla el agua. Confirma que en la tradición emberá la hormiga puede ser una mujer con casa, con oficio y con un secreto doméstico, exactamente el tipo de ser cuyo caballete se rompe al matar una hormiga.",
        limitation:
          "Es emberá eyábida de Chigorodó, no chamí. La mujer-gesera es dueña del agua, no una esposa que entra en un hogar humano, y el intruso es Karagabí, no el marido. Es un texto escolar editado por maestros, con normalización ortográfica y notas al pie (allí se aclara que gesera es «hormiga conga»).",
      },
      "historicaCaragabi2018",
    ],
    title: "La mujer hormiga",
    mito: `Una mujer vivía sola en el monte con su hijo, porque el padre se había muerto. Un día el joven fue al río a pescar. Mientras pescaba vio un puerco de agua y al mismo tiempo oyó una voz de mujer que gritaba: corre, corre. El joven se fue corriendo a la casa y tenía mucho miedo.

Al día siguiente volvió al mismo río. Entonces salió de golpe de la tierra una india muy bonita y toda embijada, y le dijo: venga a mi casa. El hombre se asustó, pero después le dijo: venga más cerquita. Como la mujer no quiso acercarse, él dio un paso adelante, como para abrazarla. Entonces ella le puso una condición: tienes que bañarte con flores del monte, y si haces eso llegaré a tu casa esta noche.

En la casa el hombre se bañó con flores y le contó a su madre lo de la mujer. A medianoche la india entró por la puerta. Allí viene, dijo el hombre. Dónde está, dijo la madre, yo no veo a nadie. Así estuvieron hasta la mañana y después la mujer se fue. Dos noches más tarde el hombre le preguntó dónde vivía. Cerquita, dijo ella, somos muchos. Entonces él le preguntó por qué no venía a vivir a su casa, y la mujer aceptó. Y por qué no te puede ver también mi madre, preguntó él. Ella tiene que bañarse también con flores del monte, dijo la mujer. Así lo hicieron, y así la madre también pudo ver a la mujer, que se quedó en la casa.

Tuvieron dos niños. Un día el hombre se fue a visitar a una gente vecina, encontró allá otra mujer y se casó con ella. Pero la mujer de su casa supo de eso. Cuando el hombre volvió la castigó y le dijo: vete, ya conseguí otra mujer. Pero la madre de él no quiso que se fuera. Entonces la mujer le dijo a la madre: ven conmigo a conocer a mi gente.

Así se fueron, y la mujer le mostró a la madre los tambos en la orilla del río. La madre, que conocía bien ese río, se asombró mucho, porque nunca había visto antes esos tambos. Entonces hizo en el suelo, debajo de una casa, una seña para reconocer el lugar. Luego se devolvió a su casa y allá le preguntó el hombre dónde había estado. En la casa de mi nuera, dijo la madre. Muéstrame la casa, dijo el hombre, quiero que venga otra vez porque la quiero mucho. Así los dos se fueron a buscar los tambos, pero no encontraron nada: sólo había monte allá en la orilla del río. Entonces la madre mostró el lugar donde había hecho la seña y dijo: aquí estaba la casa.

Al día siguiente el hombre volvió adonde la seña y lloraba mucho. Entonces oyó la voz de la mujer embijada: vete a tu casa, tú me echaste y mi familia ya está muy brava. Cuando el hombre oyó eso cogió un palo y se puso a cavar la tierra por donde había salido la voz. Pero entonces salieron muchas hormigas y le picaron duro. El hombre mató una hormiga y gritó otra vez la voz de su mujer: no dañes el caballete de mi casa, mi familia está muy brava. Entonces el hombre se fue otra vez para su casa.

Se fue a ver sus cultivos. Había sembrado mucho, porque su mujer le había ayudado y con ella habían venido muchas hormigas que también ayudaron en el sembrado. Entonces vio el hombre que todos sus sembrados estaban destrozados por las hormigas. Su trabajo ya no rindió y él se quedó solo.`,
    historia: `Este es el relato número 4 de «Algunos mitos de los indios Chamí (Colombia)», que Gerardo Reichel-Dolmatoff publicó en la Revista de Folklore de Bogotá en 1953, en las páginas 148 a 165. Viene de un reconocimiento corto hecho en 1945 entre unas sesenta personas chamí de la vereda de Corozal, municipio de Río Frío, Valle del Cauca, llegadas poco antes, según ellas mismas, en parte de la hoya del río San Juan y en parte de Antioquia y Caldas. Reichel-Dolmatoff advierte dos cosas al abrir el artículo: que los relatos fueron narrados en castellano por los indios y que él los transcribió «en su texto original, sin cambio alguno», y que carecía de una perspectiva del contexto cultural del que forman parte. Quién narró esto no aparece: en las catorce transcripciones no hay un solo nombre de narrador, y ese silencio es del recopilador. La única nota al pie de estas páginas explica que los tambos son «casas indígenas sobre pilotes».

Lo que el registro no dice pesa tanto como lo que dice. En ninguna parte se afirma que la mujer embijada sea una hormiga. Sale de la tierra, se hace visible con baños de flores, dice «somos muchos», y las hormigas sólo aparecen al final, cuando el hombre cava y cuando los sembrados quedan destrozados. El título de esta página es una lectura posterior y no una palabra de la transcripción.

Milcíades Chaves Ch. publicó ese mismo año, en el Boletín de Arqueología I-3, páginas 133 a 159, un relato de mujer hormiga que sí la nombra: «Arrumia (La hormiga arriera)», el segundo de los nueve. Chaves declara en la página 134 que de los nueve cuentos los cuatro primeros se los narró Nicolás Henao, indio chamí llegado a Calima desde Balboa, en Caldas, hermano del cacique y cuñado del curandero, que tradujo él mismo sus palabras. Es, por tanto, testimonio chamí con narrador nombrado. La frontera importa: los cinco últimos relatos del mismo artículo los narró Rafael Bailarín, indio katío.

Para nombrar la relación que aquí se rompe hay lenguaje propio documentado. Javier Rosique-Gracia, Aída Gálvez-Abadía y Sandra Turbay firman en Tabula Rasa 36 (2020), páginas 201 a 222, junto con Nataly Domicó, Arnulfo Domicó, Plinio Chavarí y Justico Domicó, del Cabildo Mayor Indígena de Chigorodó, y otros tres investigadores. Allí escriben que Pãkõré «es tratada como una parienta afín sometida a reglas de reciprocidad» y precisan que con ella «hay una reciprocidad directa que sigue el modelo suegra-yerno»: la suegra entrega a su hija «para beneficio y alegría del hombre» y a cambio recibe del yerno respeto y obediencia. Con esa gramática, la suegra que defiende a la nuera y la roza destruida dejan de ser sentimiento y pérdida y pasan a ser una alianza rota. Hay que decir de dónde viene: el trabajo se hizo en los resguardos de Polines y Yaberaradó, sobre todo con comunidades embera eyabida, aunque Yaberaradó incluye la comunidad embera chamí de Dojura. Es lenguaje de vecinos, no una glosa chamí de esta transcripción.

Ana Lucía Cardona Colorado, en Estudios de Literatura Colombiana 58 (2026), páginas 91 a 111, trabaja el motivo de la transformación en la oraliteratura embera chamí, pero su corpus son las recopilaciones de Zuluaga, Pardo y Pinto: da marco de lectura y no contiene esta narración. Y la medida con que hay que juzgar el anonimato de 1953 la dio Luis Guillermo Vasco al republicar los relatos que recogió en 1978 de Clemente Nengarabe Siágama, de Purembará, Risaralda, y escribir que entonces «fue impensable que un indio apareciera como autor».`,
    versiones: `De Río Frío hay un solo testimonio de esta historia y su narrador quedó sin nombre. No hay fecha de la sesión, no hay grabación, no hay texto en embera bedea: hay una transcripción en castellano hecha durante un viaje de 1945 y publicada ocho años después.

La otra narración chamí de una mujer hormiga es «Arrumia», de Nicolás Henao, y no es la misma historia. Allí la mujer tiene nombre y el nombre es el del insecto: la arriera, «que se volvía una mujer muy bonita». Llega primero donde la madre del joven y le lleva chaquiras y albahacas. El encuentro con el muchacho ocurre junto a una raíz, sobre un hormiguero de arrieras. Los hermanos de ella rozan y los cuñados le levantan la casa en un día. El hombre le pega por irse una semana donde su madre sin permiso. La rival no es una vecina cualquiera sino Bokoró, la sapa, gordita y bonita pero perezosa, por la cual él pasa hambre. Cuando quiere volver, lo muerde una hormiga grande que al rato se vuelve la muchacha. Ella se lo lleva a su tierra, «en otro mundo, bien debajo», donde hacen chicha y se emborrachan. Arrumía mata a la sapa haciéndola brincar de un árbol. Después el hombre se va donde los Aremuko, gente con el ano tapado que sólo come vapor, y les abre el ano con una navajita de macana. Arrumía le borra el camino con una piedra azul. El final es opuesto al de Río Frío: la madre termina casada entre los Aremuko y de esa gente todavía hay allá abajo, en el otro mundo.

Las dos no se pueden fundir. Una termina en pérdida, con la roza destrozada y el hombre solo; la otra termina con la familia instalada en el mundo de abajo. Y los mismos Aremuko circulan por el corpus recogido en ese viaje: Chaves los engancha al desenlace de Arrumia, mientras que en Río Frío aparecen aparte, como aramúko dohurá, en una narración propia sobre el hijo de Karagabí que les corta las nalgas y los mata.

Las grafías tampoco coinciden: Arrumia y Arrumía en Chaves, sin nombre en Reichel-Dolmatoff; Aremuko en uno, aramúko dohurá en el otro. Y lo que en Río Frío son tambos que aparecen y desaparecen en la orilla, en Chaves es un viaje declarado a otro mundo debajo de la tierra.`,
    leccion:
      "Quien rompe una alianza pierde también las manos que hacían rendir su trabajo.",
    similitudes: `El paralelo más cercano está en el mismo corpus de 1945 y con narrador chamí nombrado: «Arrumia», de Nicolás Henao, donde la esposa es explícitamente la hormiga arriera y su gente vive en un mundo de abajo al que el marido llega y vuelve. La diferencia es el desenlace. En Río Frío la familia de la mujer se cierra y las hormigas que habían ayudado a sembrar destruyen la roza; en Arrumia la puerta queda abierta y la suegra se queda a vivir del otro lado.

Un segundo paralelo, esta vez emberá katío, está en el relato de Caragabí que el Centro Nacional de Memoria Histórica publicó con la comunidad del resguardo Tahamí-Alto Andágueda: allí Caragabí espera a que la mujer salga del árbol jenené, la coge por la cintura y la parte en dos, y «Gensterá se convirtió en una hormiga grande y negra». Fray Severino de Santa Teresa recoge lo mismo en 1959 entre los catíos, donde Caragabí convierte a Gentzerá en hormiga «para castigarle su mezquindad». La diferencia es de dirección: allá la mujer se vuelve hormiga como castigo por acaparar el agua, aquí las hormigas son la familia de una mujer que trabajó y fue echada.

Un tercero viene de la recopilación que hicieron en 2006 los maestros de los resguardos de Yaberaradó y Polines con la Organización Indígena de Antioquia y WWF: «Hormiga Arriera», narrada por Gilberto Domicó Domicó, embera eyábida, y recogida por la maestra Alba Luz Vergara Casama, embera dóbida. Allí también hay un mundo de arrieras bajo una peña que se abre como puerta, pero es una ciudad con tesoro a la que entran un rey pobre y un rey rico, y los propios compiladores marcan ese grupo de narraciones como sincréticas. Coincide el mundo subterráneo de las hormigas; no coincide nada de lo que allí se juega.`,
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
    sourceKeys: [
      "reichel1953",
      "redAprendeMetadata",
      "chaves1945",
      "cardona2026",
      "vascoChami",
      "loaizaoralidad2002",
      "arnoldJukumarinti2001",
      "gonzalezJuan2009",
      {
        key: "rosiqueGraciaTodos2020",
        summary:
          "Muestra que entre los emberá la relación con los dueños de los animales se piensa en términos de parentesco por alianza: Imamá-Pãkõré, «tigre-suegra», madre o patrona de los animales de presa, entrega la caza siguiendo el modelo suegra-yerno. Eso da un lenguaje propio para el vínculo forzado del oso con la mujer y para el hijo que nace de él, distinto de la alegoría occidental de lo humano y lo salvaje que la ficha rechaza: lo que está en juego es una afinidad mal hecha, no una metáfora de la naturaleza.",
        limitation:
          "La entidad analizada es un tigre-suegra, no un oso, y el marco es el de los sitios sagrados de las cabeceras de los ríos de Chigorodó (emberá eyábida), no el del Chamí. No contiene ningún relato de mujer raptada ni de descendencia mixta: aporta el modelo de relación, no la historia.",
      },
      {
        key: "teresaindios1959",
        summary:
          "Sitúa al oso dentro del ritual y no sólo del cuento: en la recolección de jaguas para los baños de pubertad, quien está en el árbol va señalando ramas hacia los cuatro rumbos —«por aquí va un águila... por aquí va un mono. Y por último hacia el Sur, diciendo: por aquí va un oso»— antes de recoger las ocho frutas. El oso figura así entre los cuatro animales que orientan el mundo en un rito de paso, lo que da peso propio a su aparición como padre de un hijo que crece de manera anormal y pasa de la montaña al poblado.",
        limitation:
          "Es emberá katío de Urabá, no chamí, y el dato es ritual, no narrativo: no hay allí relato de rapto ni de hijo del oso. La descripción viene de un misionero que interpreta el rito desde fuera. El ejemplar en línea es la edición de Medellín de 1959; los materiales se publicaron primero en Bogotá en 1924.",
      },
    ],
    title: "La mujer y el oso",
    mito: `Era una mujer recién casada. El marido se fue lejos para trabajar y ella quedó cerca de la montaña. Un día, estando lavando ropa, vino un oso, la agarró, la cargó y se la llevó. Subió con ella a la montaña, muy lejos.

Allá arriba la dejó. Le hizo una cama de bejucos en un árbol alto, para que la mujer no se cayera, e hizo encima un rancho para que pudiera dormir. Pero el oso durmió solo, con los otros osos. Vivió con ella un año.

Por fin la mujer quedó embarazada. El oso le trajo ropita que robó de la gente, y también maíz y otra comida. Así vivieron un año. Por fin se crió el niño y el oso le traía pájaros, pero siempre muertos, para que no cantaran y no le encontraran su lugar. Una vez trajo un pájaro vivo y la mujer lo mantuvo con maíz.

Después de unos seis meses el niño ya andaba, y el oso le trajo muchas cosas que robó a la gente. Después de un año el niño ya trepaba hasta la mitad del árbol. De la cintura para abajo tenía mucho pelo, como un oso. Después de año y medio ya podía bajar hasta el suelo, y se ponía a jugar en el suelo y luego se subía. La madre se preocupaba de que se cayera el niño.

Después de dos años el niño ya era grande y le preguntó a su madre: de dónde vienes tú, vamos allá adonde vive gente. Un día el niño cogió a la mujer y la llevó adonde vive gente.

Al día siguiente el oso también bajó y cogió mucho maíz como comida. Por fin el oso los alcanzó, agarró al niño y le dio garrote por dos horas. Por fin el niño le pegó al oso y este se fue.

Por fin llegaron a unas casas de gente. Allá contaron todo lo que había pasado.`,
    historia: `Este es el relato número 5 de «Algunos mitos de los indios Chamí (Colombia)», de Gerardo Reichel-Dolmatoff, Revista de Folklore, Bogotá, 1953, páginas 148 a 165. Viene del reconocimiento corto que el autor hizo en 1945 entre unas sesenta personas chamí de la vereda de Corozal, municipio de Río Frío, Valle del Cauca. Él mismo declara que los relatos fueron narrados en castellano por los indios y que los transcribió «en su texto original, sin cambio alguno», y también que carecía de una perspectiva del contexto cultural del que forman parte y por eso se limitaba a presentar el material. Quien narró este relato quedó sin nombre, como los otros trece. Es la transcripción más escueta del conjunto y termina de golpe, en el momento en que madre e hijo llegan a las casas y cuentan lo que pasó: no se dice si el marido volvió, cómo recibieron al niño ni qué fue del oso.

Hay un detalle revelador en el aparato del propio recopilador. La única nota al pie de estas páginas glosa la palabra chichaké como «embarazada». El oso, en cambio, no lleva nota: no se identifica la especie, no se da un nombre en embera bedea, no se propone comparación alguna. El animal entra al relato sin explicación y sale igual.

Esta narración no tiene contraparte en el otro registro de 1945. Milcíades Chaves Ch., en «Mitos, tradiciones y cuentos de los indios Chamí», Boletín de Arqueología I-3, páginas 133 a 159, declara en la página 134 que de sus nueve cuentos los cuatro primeros se los narró Nicolás Henao, indio chamí de Balboa, y los cinco últimos Rafael Bailarín, indio katío. Los cuatro de Henao son Erubida y Siebida, Arrumia, Surranabe y Kurijia: ninguno es este. De modo que aquí no hay segundo testimonio chamí con el cual contrastar.

Y hay que decirlo con todas sus letras: no existe otra narración emberá documentada del rapto de una mujer por el oso. Fray Severino de Santa Teresa, en «Los indios catíos, los indios cunas» (1959), una etnografía extensa que recoge buena parte de la mitología catía, no trae nada semejante. Lo que sí está documentado es el oso como personaje de otros relatos. En el mismo artículo de 1953, el relato número 1 lo pone de compañero del tigre frente al guatín astuto. Fernando Romero Loaiza, en su ponencia de 2002 sobre oralidad y escritura entre los embera-chamí, transcribe un texto escrito por un maestro indígena en el que un hombre ve pelear toda la noche a un oso con una mujana, y al amanecer los dos quedan muertos; en la versión en embera del mismo maestro, la mujana es un aribada. En la recopilación que los maestros de Yaberaradó y Polines hicieron en 2006 con la Organización Indígena de Antioquia y WWF, el oso aparece sólo como comparación: un aribamia al que las flechas no matan «se parecía a un oso (tabudu)».

Las dos fuentes comparativas de esta lista no son emberá y no deben presentarse como respaldo. Roberto Martínez González y Francisco Lugo Silva, en Desacatos 29 (2009), estudian el cuento de Juan Oso como relato europeo que «acompañó a los europeos en la conquista del nuevo Mundo», con registros en Cuba, Colombia, Perú, Puerto Rico y Mesoamérica. Denise Y. Arnold y Ricardo López, en Revista Ciencia y Cultura 9 (2001), estudian el jukumari andino. Sirven para situar un motivo de amplia difusión; no prueban de dónde viene lo que se contó en Corozal.`,
    versiones: `De esta historia hay un solo testimonio, y conviene decirlo con esas palabras: una transcripción en castellano, sin nombre de narrador, sin fecha de sesión y sin texto en embera bedea, recogida en 1945 en Río Frío y publicada en 1953. No hay una segunda narración emberá con la cual compararla, ni en el artículo de Chaves del mismo viaje, ni en la etnografía catía de Santa Teresa, ni en las recopilaciones comunitarias posteriores. Eso significa que aquí no se puede corregir una lectura con otra, ni reconstruir un desenlace: lo que falta, falta.

Lo que sí se puede comparar es el tratamiento del oso dentro del propio repertorio emberá, y ahí el contraste es claro. Cuando el oso aparece en otros relatos lo hace como uno más entre los animales que hablan, aliado del tigre y víctima del guatín, o como término de comparación para describir a otro ser, el aribamia que las flechas no matan. En ninguno de esos casos rapta a nadie. Aquí, en cambio, es él quien se lleva a la mujer, le construye un lecho y un rancho, le roba ropa y comida a la gente, mata los pájaros para que no canten y termina peleando a garrote contra su propio hijo.

Fuera del mundo emberá sí hay versiones próximas, y son de otra genealogía. En el cuento hispanoamericano de Juan Oso una mujer raptada por un oso pare un hijo que hereda la fuerza del padre, desplaza la roca que tapa la cueva y a veces mata al oso en la huida; en el repertorio andino del jukumari, el hijo «le salían pelos como a su padre oso». Arnold y López discuten si el relato es ibérico o andino y concluyen que se nutre también del encuentro con el oso andino. Martínez González y Lugo Silva lo tratan directamente como cuento español difundido con la conquista y registran su presencia en Colombia. Nada de eso permite afirmar que la narración de Corozal derive de allí, ni lo contrario: sólo señala que el episodio, único entre los emberá, es corriente en el repertorio de habla hispana con el que ese grupo llevaba décadas conviviendo.

Un detalle de forma: el pelo del niño va «de la cintura para abajo», no de la cintura para arriba, y la pelea final la gana el hijo, no la madre ni la gente de las casas.`,
    leccion:
      "La salida de un encierro puede llegar de la mano de quien nació dentro de él.",
    similitudes: `El paralelo más honesto no está en otro relato emberá sino en un ciclo ajeno, y por eso hay que nombrarlo con su origen. Roberto Martínez González y Francisco Lugo Silva muestran que el cuento de Juan Oso es un relato español que viajó con la conquista y quedó entre nahuas de la sierra de Puebla, tepecanos, huaves y tepehuanes, y también en Cuba, Perú, Puerto Rico y Colombia: un oso rapta a una mujer, la encierra en una cueva, nace un hijo que «logra desplazar la enorme roca que obstruye la entrada de la gruta» y en algunas versiones «mata a su padre-oso en la huida». Coinciden el rapto, el hijo de fuerza desmedida y la salida forzada. No coinciden la cueva y la roca, que aquí son un árbol alto con cama de bejucos, ni el largo segundo tramo en que Juan Oso recluta compañeros y vence al diablo, que aquí no existe.

El segundo paralelo es andino y lo estudian Denise Y. Arnold y Ricardo López: el jukumari rapta a una pastora, tienen un hijo al que «le salían pelos como a su padre oso» y que hereda fuerza e inteligencia. Los autores discuten el origen ibérico y sostienen que el relato se nutre además del encuentro real con el oso andino. La diferencia decisiva es el marco: allá el hijo queda cristianizado y enfrentado a la Iglesia, aquí no hay bautizo, ni cura, ni diablo, y la historia se detiene en cuanto madre e hijo cuentan lo sucedido.

Dentro del mundo emberá el rapto interespecífico sí está documentado, pero al revés. En el trabajo de Rosique-Gracia y otros con el Cabildo Mayor Indígena de Chigorodó se recoge, citando a Hernández, que Imamá-Pãkõré, la tigre-suegra, «rapta los cazadores para unirlos conyugalmente con una mujer Yambéra». Allí quien se lleva es una dueña de animales y quien es llevado es un hombre; aquí quien se lleva es un macho y quien es llevada es una mujer casada.`,
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
    sourceKeys: [
      "reichel1953",
      "redAprendeMetadata",
      "chaves1945",
      "cardona2026",
      "vascoChami",
      {
        key: "uribeplata2001",
        summary:
          "Es el hallazgo que más cambia esta ficha. Vasco resume una versión del mismo conflicto —«Una historia sobre la guerra entre los embera del valle y los de la montaña, Erubidá y Siebidá»— y añade un episodio que ni Reichel ni el resumen de la ficha registran: después de la victoria «hicieron una fiesta para pactar la paz. En ella, el viejo Erubidá regaló a los Siebidá un cacique de oro como señal de amistad y, entonces, se apaciguaron y dijeron que no hay más guerra entre nosotros». La paz deja de ser sólo palabra entre jefes y pasa a sellarse con un objeto: una figura de oro que cambia de manos.",
        limitation:
          "Vasco no dice de qué narrador ni de qué localidad tomó esa versión ni la transcribe completa: la cita es un resumen dentro de un artículo sobre metales. No se puede afirmar que sea chamí de Río Frío ni fecharla; sólo que circula en el área emberá donde él trabajó (Risaralda y Chocó). Tampoco permite saber si el 'cacique de oro' es una pieza real o una figura del relato.",
      },
      "isacssonGentilicios1980",
      "ogariHistoria2018",
      "guamuezjaibana2015",
      "vargasemberas1991",
      "uribeAlgunas1986",
    ],
    title: "Erubidá y Siebidá",
    mito: `Los Erubidá eran la gente del valle y los Siebidá eran los de la montaña. Un día diez hombres de los Siebidá fueron al monte a cazar y a pescar, y allá hicieron unos ranchos. Llevaban bodoquera y miasú. Por la noche se acostaron a dormir. Su jefe era Sikóna.

Al día siguiente fueron río abajo pescando, y allá dos hombres se encontraron de golpe con los Erubidá, sus enemigos. Entonces los dos Siebidá silbaron para avisar a sus compañeros. Cuando vieron que los Erubidá eran quince y ellos sólo dos, regresaron al campamento. Llegaron con mucho afán y dijeron: encontramos a los enemigos. Mentiras, dijeron los otros. Pero uno de ellos no quiso dormir durante la noche, para vigilar. Se disfrazó de Erubidá, y aun así sus compañeros no le hicieron caso.

Entonces, en la noche, vinieron los Erubidá y mataron a todos. Pero el hombre que vigilaba disfrazado se defendió bien, mató a ocho Erubidá con su lanza y por fin se salvó. Entonces los Erubidá se retiraron, y el hombre regresó a su pueblo y le contó todo a su jefe. El jefe dijo: ya lo sabía todo, porque así me soñé.

Pero el hombre que se había salvado era un brujo. Entonces se murió el hijo de él y lo pusieron en un hueco debajo de la casa, pero sin enterrarlo. Allá lo dejaron, y a veces se oyeron ruidos allá.

El jefe dijo: vamos a hacer guerra con los Erubidá. Se fueron al pueblo de los Erubidá, que estaban en fiesta. Los Erubidá cantaban: ni, nina nína, ni-na-ni-na-nína. Los Siebidá los atacaron y quemaron diez de las sesenta casas del pueblo de los Erubidá. Entonces dijeron: los dejamos vivir o morir. Pero el jefe de los Siebidá dijo que había que matarlos. Y el jefe de los Erubidá ofreció amistad.

Los Siebidá se fueron otra vez a sus casas, y desde entonces fueron amigos.`,
    historia: `Esta página sigue el relato número 6 de «Algunos mitos de los indios Chamí (Colombia)», de Gerardo Reichel-Dolmatoff, Revista de Folklore, Bogotá, 1953, páginas 148 a 165, recogido en 1945 en la vereda de Corozal, municipio de Río Frío, Valle del Cauca. El recopilador declara que los relatos fueron narrados en castellano por los indios y transcritos «en su texto original, sin cambio alguno», y también que carecía de una perspectiva del contexto cultural del que forman parte. No nombra a ningún narrador. Sus dos notas aquí traducen miasú como lanza y nada más.

El otro registro del mismo viaje de 1945 sí tiene nombre. Milcíades Chaves Ch. publicó «Mitos, tradiciones y cuentos de los indios Chamí» en el Boletín de Arqueología I-3, páginas 133 a 159, y declara en la página 134 que de los nueve cuentos los cuatro primeros se los narró Nicolás Henao, indio chamí de unos treinta años llegado a Calima desde Balboa, en Caldas, hermano del cacique y cuñado del curandero, que tradujo él mismo las palabras que decía en su idioma, y que los cinco últimos se los narró Rafael Bailarín, indio katío. «Erubida y Siebida (Los indios del valle y los indios de la montaña)» es el primero de los nueve: aquí no hay problema de pueblo, el narrador es chamí y está nombrado. Vale anotar que Henao habla desde uno de los dos bandos: su relato empieza diciendo que los indios del valle «eran enemigos de los de acá». Y que los docentes de la comunidad emberá chamí de Argelia glosan en su libro bilingüe de 2015 que chamí quiere decir cordillera, y que los emberá chamí son «la gente de la cordillera».

Chaves añade dos cosas que Reichel-Dolmatoff no trae. La primera es Aribadá, el muchacho muerto y revivido con baños de la yerba beké, que mata al murciélago inká y obtiene el poder de dormir a la gente, se disfraza de Erubidá, canta como ellos y los va sacando uno a uno al patio. La segunda es el cierre: «el viejo Erubidá regaló a los Siebidá un cacique de oro como señal de amistad». En su nota comparativa Chaves llama a todo esto «una tradición, al parecer reciente, de cuando los indios de la montaña eran enemigos de los que poblaban el valle».

Ese episodio del oro reaparece cuarenta años después. Luis Guillermo Vasco Uribe, en «El oro y la plata entre los embera y waunaan», Boletín Museo del Oro 48 (2001), lo cuenta casi con las mismas palabras, pero sin citar de dónde lo toma: Chaves no está en su bibliografía. El mismo artículo explica por qué el oro cabe ahí, al sostener «el carácter originario del oro y su lugar natural» en los mundos de arriba y de abajo, con sus tronos de oro, el bohío de oro del trueno y los primeros jaibanás con banco, bastón y tambor de oro.

Dos trabajos más sostienen la ficha. Mario Ogarí, autoridad tradicional emberá chamí, y David Marulanda publicaron en 2018 «Historia del Aribada» y allí registran que «Chávez (1945) escuchó otra historia en la que el aribada pelea del lado de los indios de montaña, los siebidá, en la guerra contra los indios del llano, los erubidá». Y Patricia Vargas, en Boletín Museo del Oro 29 (1991), defiende leer juntas la historia oral y la documental, porque «las historias que tradicionalmente se han conocido como mitos, refieren según convenciones culturales acontecimientos y procesos históricos». Lo que ninguna fuente permite es fechar esta guerra ni localizar a Erubidá y Siebidá en un mapa.`,
    versiones: `Hay dos transcripciones de 1945, recogidas en el mismo viaje y publicadas por separado, y no dicen lo mismo.

La de Reichel-Dolmatoff es corta y nombra al jefe: Sikóna. Diez cazadores salen, dos se topan con quince enemigos, nadie les cree, el vigilante disfrazado mata a ocho Erubidá y se salva, el jefe dice que ya lo había soñado, el hijo del brujo muerto queda en un hueco bajo la casa haciendo ruidos, los Siebidá atacan una fiesta y queman diez de sesenta casas, el jefe Erubidá ofrece amistad y desde entonces fueron amigos.

La de Nicolás Henao en Chaves es mucho más larga y no coincide casi en ninguna cifra. Allí van diez personas pero con mujeres y niños, y los matan a todos menos a uno que brinca al río; los Siebidá disfrazados con majagua blanca matan como diez Erubidá; el viejo sueña con sangre antes de que llegue la noticia; un muchacho enfermo muere, lo dejan bajo un cajón, a los ocho días está volteado boca abajo y lo reviven con baños de la yerba beké y le ponen el nombre de Aribadá. Después bajan como cincuenta en cinco canoas, entierran a sus muertos, y Aribadá, vestido y pintado como los Erubidá, entra a la bebeta, bebe chicha, toca tambor y va sacando enemigos al patio para que los maten afuera. Matan también a la vieja que lo reconoce, y a tres de cuatro muchachas. Sólo entonces dos muchachas Erubidá proponen hablar con el mandón, y los dos viejos beben juntos, y el viejo Erubidá regala un cacique de oro. El relato sigue todavía con una segunda parte en que Aribadá preña dormidas a las muchachas del propio pueblo y terminan matándolo con agua hirviendo, y sus hijos Fronchí y Pononó cantan que son hijos de Aribadá.

No hay que fundirlas. Reichel-Dolmatoff no nombra a Aribadá ni menciona el oro; Chaves no nombra a Sikóna ni cuenta la quema de diez de sesenta casas. El sueño del jefe está en las dos, pero en una llega después del ataque y en la otra antes de la noticia.

Las grafías varían: Erubida y Siebida sin tilde en el título de Chaves, Erubidá y Siebidá con tilde en el cuerpo de ambos textos; Aribadá en Chaves, Aripadá en la lectura que él mismo cita de Wassén, Aribamia en la de Rochereau. Ogarí y Marulanda llaman a los Erubidá «los indios del llano» donde Chaves y Reichel-Dolmatoff dicen valle.`,
    leccion:
      "Una guerra termina cuando el bando atacado ofrece amistad y el vencedor acepta oírla.",
    similitudes: `Dentro del propio corpus chamí de 1945 la comparación obligada es entre las dos transcripciones, y ya está hecha arriba: la de Nicolás Henao trae a Aribadá y el cacique de oro, la de Río Frío trae a Sikóna y las sesenta casas.

Un segundo paralelo, documentado y emberá, está en la memoria de otras guerras. Patricia Vargas recoge que «los emberas recuerdan la guerra con los carautas y/o callos, los distinguen por ser los dueños del oro, por vivir en árboles inmensos y por tener reglas de parentesco flexibles», y cita la versión que Constancio Pinto registró entre los katíos, según la cual los carautas fueron castigados y convertidos en animales. Sven-Erik Isacsson documenta lo mismo con los burumiá, enemigos antropófagos y ricos en oro que vivían en los huecos de los árboles jenené y que acabaron quemados dentro de ellos. El parecido es el enemigo dueño del oro; la diferencia es el desenlace, porque allá el enemigo desaparece o se vuelve animal, y aquí los dos bandos se apaciguan y quedan de amigos.

Un tercero está en el mismo personaje que Chaves añade. Mario Ogarí y David Marulanda registran que Dogiramá y Pardo recogieron en 1985 un aribada que pelea en la guerra contra los juras, enemigos de los embera, y que Vasco recogió el de un niño hecho aribada por un brujo «para matar a soldados y capitanes que intentan robar la tierra». El aribada como arma de guerra circula, entonces, entre relatos distintos y contra enemigos distintos: unos internos, otros españoles. En el relato de Henao el enemigo no es ni animal ni extranjero, sino gente con jefe, casas, fiesta y chicha, con quien al final se pacta.`,
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
    relatoCorto:
      "El original de 1945 tiene poco más de doscientas cincuenta palabras y es el único testimonio de esta historia. Contarla entera, en su orden y sin añadirle nada, da un texto apenas más largo. Las demás configuraciones emberá del sol y la luna son incompatibles con esta, porque en ellas los astros son parientes y no pueblos, así que usarlas para alargar habría fabricado un relato que nadie narró.",
    sourceKeys: [
      "reichel1953",
      "redAprendeMetadata",
      "chaves1945",
      "procuraduriaChami",
      "vascoChami",
      {
        key: "rojasescalera1986",
        summary:
          "Es la única fuente localizada que cita este relato por su nombre y lo pone a competir con otros: «Reichel recogió entre unos emberá procedentes del Chamí (Risaralda) esta curiosa historia: la gente del sol y la gente de la luna eran muy ricos, tenían mucho oro. Un hombre quiso matar a los astros y los encerró en un talego...» (Reichel 1953: 161). Luego lo ordena junto a otras configuraciones emberá del sol y la luna —hermanos castigados por incesto, esposos, marido engañado, hijo de la pierna que mancha la luna— y muestra que la versión chamí es la excepción: en ella los astros no son parientes sino pueblos con jefes y riqueza.",
        limitation:
          "Pardo trabaja de segunda mano sobre Reichel en este punto (su campo fue alto Baudó y Guanguí) y da la página como 161, no 148-165; su resumen omite el desenlace del jefe que se mata. Las demás variantes que compara son de Ituango, Urabá, Córdoba y el Baudó: emberá eyábida y dóbida, no chamí.",
      },
      "uribeplata2001",
      "teresaindios1959",
      {
        key: "campoperdida2024",
        summary:
          "Trata el otro extremo del mismo problema: en el relato chamí la riqueza está del lado del sol y la luna, y aquí se analiza un mito emberá en el que Karagabí reparte tareas y la riqueza se pierde porque el indígena cede o cumple mal. Sirve para leer la acumulación de los pueblos celestes y el saber concentrado en un solo hombre como variantes de una misma pregunta emberá por quién tiene qué y por qué, sin convertir el relato en una fábula sobre el egoísmo.",
        limitation:
          "El mito analizado es de los emberá eyábida de Jaikerazabi (Mutatá, Antioquia), no chamí, y no menciona el sol, la luna ni el encierro de los astros: la relación es de tema, no de versión. Se consultó la reproducción en Redalyc; no se abrió la edición original en el portal de la revista.",
      },
      {
        key: "cardonaMitologia2013",
        summary:
          "Documenta el uso social de un relato sobre los astros: «Para prevenir el incesto, se le cuenta a los niños, que el sol y la luna eran dos hermanos que se amaban y Karagabí, en castigo los volvió astros y los separó para siempre en el firmamento». Es el contraste más útil para esta ficha: donde otras versiones emberá usan al sol y la luna para enseñar una regla de parentesco, la de Río Frío los usa para plantear un problema de poder y de sucesión, y no cierra con moraleja.",
        limitation:
          "Es emberá del municipio de Nuquí (Chocó) y del Sinú, no chamí. Los autores declaran un método de campo informal y admiten que amplían los relatos con el contexto que el narrador da por sabido; la función pedagógica que atribuyen al mito es su interpretación, no una cita de los narradores.",
      },
    ],
    title: "El hombre que atrapó al Sol y a la Luna",
    mito: `La Gente del Sol tenía mucho oro. Los de la Luna también. Sus jefes eran sabios, y un día dijeron: quién de nosotros sabe más.

Entonces dijo un hombre: voy a matar al Sol y a la Luna. Hizo un talego rojo, y otro talego azul para la Luna. Hizo maíz caliente para el Sol y hojaldres para la Luna. Los puso en los talegos, y eso olía tan bueno. El Sol y la Luna se acercaban y decían: qué bien. Así el hombre los cogió en el talego, al Sol a mediodía y a la Luna de noche.

Y así todo quedó oscuro, todo el mundo. Todo se murió. Toda la Gente de la Luna y la del Sol.

Entonces dijo el jefe que hablaran con ese hombre para que soltara a los dos. Pero él no quiso. Por fin soltó a los dos, porque todos le pidieron así. Entonces dijeron: este hombre sabe mucho.

Entonces dijeron: vamos a hacer una fiesta. Pero el hombre se quedó borracho. Allí le pegaron duro, con lanzas y todo, pero él no se murió. No podemos matarlo, dijeron los hombres.

Entonces dijo el hombre: quiero ver al jefe. Entonces el jefe se mató a él mismo, y el otro se volvió jefe.`,
    historia: `Este es el relato número 7 de «Algunos mitos de los indios Chamí (Colombia)», de Gerardo Reichel-Dolmatoff, Revista de Folklore, Bogotá, 1953, páginas 148 a 165; Mauricio Pardo lo cita como página 161. Fue recogido en 1945 entre unas sesenta personas chamí de la vereda de Corozal, municipio de Río Frío, Valle del Cauca, llegadas poco antes, según ellas mismas, en parte de la hoya del río San Juan y en parte de Antioquia y Caldas. El recopilador declara que los relatos fueron narrados en castellano y transcritos «en su texto original, sin cambio alguno», y que carecía de una perspectiva del contexto cultural del que forman parte. No nombra al narrador y aquí no puso una sola nota al pie: ni una glosa, ni una comparación, ni una identificación. Es de las transcripciones más desnudas del artículo. Chaves no publicó nada equivalente: sus cuatro relatos chamí de 1945 son Erubida y Siebida, Arrumia, Surranabe y Kurijia.

Lo que hace singular a esta narración sólo se ve al ponerla junto a las demás, y ese trabajo está hecho. Mauricio Pardo Rojas, en «La escalera de cristal: términos y conceptos cosmológicos de los indígenas Emberá», Maguaré 4 (1986), páginas 21 a 46, reúne las menciones del sol y la luna que circulan en comunidades emberá distintas y las ordena en seis situaciones: una pareja de hermanos castigados a causa del incesto; dos hermanos, uno de los cuales era engañado por su mujer con el otro; un hombre y una mujer que se vuelven astros al caer las palmas sembradas por sus hijos gemelos; una pareja en la cual la mujer trata de conquistarlo a él y lo persigue en su camino; el sol como dios que en la noche viaja por otro mundo; y, en sexto lugar, esta: «el sol y la luna eran dos territorios habitados por gente muy rica». En las cinco primeras el sol y la luna son parientes o cónyuges, o son una deidad. Sólo en la chamí son pueblos, con jefes, con oro y con gente que muere cuando los encierran. Pardo lo resume así: «Reichel recogió entre unos emberá procedentes del Chamí (Risaralda) esta curiosa historia», y añade que «es evidente que las variantes no son consistentes las unas con las otras».

El oro del arranque tiene explicación documentada. Luis Guillermo Vasco Uribe, en «El oro y la plata entre los embera y waunaan», Boletín Museo del Oro 48 (2001), recuenta esta misma historia y sostiene el «carácter originario del oro y su lugar natural» en los mundos de arriba y de abajo: en el cielo se vive en un continuo baile sentados en tronos de oro, el trueno vivía en un tambo de oro y los primeros jaibanás tenían banco, bastón y tambor de oro. Que el Sol y la Luna sean pueblos ricos no es adorno: es el lugar donde el oro pertenece.

Una advertencia sobre las fuentes de contexto. La caracterización institucional del pueblo emberá chamí presenta a Karagabí como «la luna y padre de Jinopotabar», y la entrada enciclopédica de Vasco dice que «los mitos remiten a Carabí, la luna, como el dador de la cultura». En esta transcripción la Luna no es Karagabí ni ningún dios: es un pueblo con jefe y con oro, y Karagabí no aparece. Son planos distintos y no deben superponerse.`,
    versiones: `De esta historia hay un solo testimonio, sin narrador nombrado y sin texto en embera bedea. No hay segunda versión chamí con la cual contrastarla.

Hay, en cambio, dos recuentos posteriores que no coinciden con el registro y conviene señalar en qué. Mauricio Pardo la resume diciendo que «un hombre quiso matar a los astros y los encerró en un talego», lo cual es fiel, pero la sitúa entre «unos emberá procedentes del Chamí (Risaralda)», mientras el propio Reichel-Dolmatoff dice que el grupo de Río Frío venía en parte de la hoya del río San Juan y en parte de Antioquia y Caldas. Luis Guillermo Vasco, que la recuenta en 2001, escribe que «los jefes de ambos bandos tendieron una trampa para capturar a estos astros»; en la transcripción la trampa la hace un hombre solo, y los jefes intervienen después, para pedirle que los suelte. Vasco además cierra el recuento con la captura del Sol en el talego rojo y no sigue hasta la fiesta, la paliza que no lo mata ni el suicidio del jefe.

Ese final es lo que más se pierde en los resúmenes. La historia no termina cuando vuelve la luz. Termina con una fiesta que es una emboscada, con un hombre al que no matan las lanzas y con un jefe que se mata a sí mismo para que el otro ocupe su puesto. Ningún recuento posterior de los consultados conserva esas tres cosas juntas.

Las otras configuraciones emberá del sol y la luna no son variantes de esta y no deben mezclarse con ella: en unas son hermanos castigados por incesto, en otras marido y mujer, en otras el resultado de la caída de dos palmas. Aquí no hay parentesco entre los astros, ni castigo divino, ni transformación: hay dos pueblos ricos, un hombre que sabe más que sus jefes y una oscuridad que mata a todos.

Las grafías varían fuera de esta transcripción: Humántahu y Gedeco en Santa Teresa, umadau y jedeko en la anotación fonética de Pardo, Ewandama o Ewandana para el sol en los relatos wounaan y katío. La transcripción de Río Frío no da nombre a ninguno de los dos: dice el Sol y la Luna, y la Gente del Sol y la Gente de la Luna.`,
    leccion:
      "La luz vuelve cuando quien la retiene cede al pedido de todos, y no antes.",
    similitudes: `El paralelo más útil es el que marca la diferencia. Fray Severino de Santa Teresa, entre los catíos, escribe que «el sol y la luna eran dos hermanos que por incesto los convirtió Caragabí en astros», y precisa que Gedeco, la luna, quiere mucho a Humántahu, el sol, pero no lo puede alcanzar, mientras él no la quiere por las enfermedades propias de la mujer. Antonio María Cardona y Jairo Miguel Guerra recogen lo mismo en comunidades emberá del golfo de Tribugá y de Córdoba, y añaden para qué se cuenta: «para prevenir el incesto, se le cuenta a los niños, que el sol y la luna eran dos hermanos que se amaban y Karagabí, en castigo los volvió astros y los separó para siempre en el firmamento». En Río Frío no hay parentesco, ni incesto, ni castigo, ni Karagabí: hay dos pueblos con jefes y oro, y un hombre que decide encerrarlos.

El segundo paralelo toca el oro y no los astros. Andrés Ricardo Restrepo Campo y Sandra Turbay, con trabajo de campo en la comunidad de Jaikerazabi, municipio de Mutatá, Antioquia, estudian un mito emberá sobre la pérdida de la riqueza y el origen de las razas, y reportan una versión registrada por Vélez en 1982 en la cual «Ewandana, el sol, se había casado con la luna y habían tenido muchos hijos», y el reparto de la riqueza y del color de la piel sale de una laguna. Allí el sol y la luna son cónyuges y la riqueza se pierde ante los blancos. En Río Frío la riqueza no se pierde: sigue siendo de la Gente del Sol y de la Gente de la Luna, y lo que se pierde, por un rato, es la luz.

Dentro del propio corpus de 1945, el vecino inmediato es el relato número 10, donde el mundo se oscurece sin que nadie lo provoque y la gente rompe piedras dentro de la casa hasta que vuelve el día. Misma oscuridad, causa opuesta: allá nadie es responsable, aquí hay un autor con nombre de oficio, un hombre que sabe mucho.`,
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
    sourceKeys: [
      "reichel1953",
      "redAprendeMetadata",
      "chaves1945",
      "cardona2026",
      "rojasescalera1986",
      "uribeJaibanas1985",
      "kreutzercruces2001",
      {
        key: "cardonaMitologia2013",
        summary:
          "Aporta dos datos que obligan a matizar quién es el Karagabí de esta página. Primero: registra a Dobeiba, semidiosa de las artes y los oficios, como «hija de Karagabí con una mortal», es decir, que las uniones de Karagabí con mujeres humanas son parte del repertorio y no un rasgo excepcional de esta historia. Segundo, y más importante: los autores constatan que en las comunidades donde trabajaron (Jawa, Tandó, Nuquí arriba, Yucal) Karagabí y Tutruicá «tienen poco peso» y que algunos llegan a afirmar que «Karagabí es un dios de los katíos», mientras los vigentes son Ankoré y Pakoré wera. Eso advierte contra tratar a Karagabí como figura homogénea de todo el mundo emberá.",
        limitation:
          "El trabajo es de la costa pacífica chocoana (golfo de Tribugá, ríos Chorí, Nuquí y Panguí) y del Sinú, no del Chamí. No contiene el episodio de la mujer, ni la lorita, ni la lechuza. El texto es una síntesis teologizante redactada por los autores a partir de relatos de jaibanás y docentes bilingües —ellos mismos advierten que el relato de los hijos de Ankoré lo escribió el etnolingüista Baltazar Mecha y circuló por escrito en las escuelas—, de modo que no puede leerse como transcripción de tradición oral.",
      },
      {
        key: "gutierrezpensamiento2017",
        summary:
          "Escrito por un autor emberá chamí en Pueblo Rico (Risaralda) a partir de entrevistas de 2017 con mayores del propio pueblo (Jaime Wazorna, Carlina Guasiruma, el líder Mario Restrepo). Documenta cómo los chamí de hoy entienden a Karagabí: no como dios supremo sino como un ser creado por Dachiakore para gobernar el mundo del medio, dotado de poderes pero con carencias reconocidas —no creó el agua y por eso fue derrotado por Tutriaka en la creación humana—. Sirve para no convertir el castigo que Karagabí impone en esta historia en una sentencia divina inapelable: la propia comunidad lo describe como un personaje con límites y con debilidades.",
        limitation:
          "No narra ningún episodio del ciclo: no hay mujer, ni baile, ni transformación en ave. Es un trabajo de grado de Licenciatura en Filosofía, no una investigación etnográfica, y el autor equipara de forma explícita las «normas divinas» de Karagabí con las del cristianismo, un encuadre confesional que él mismo señala como problema abierto entre los líderes chamí. Registra el habla de un puñado de mayores de Pueblo Rico y Purembará, no de Río Frío.",
      },
    ],
    title: "La mujer de Karagabí",
    mito: `Karagabí tenía mujer y estaba bien enfermo. Llegó el día de un baile, y en la casa la mujer se acercó a él con la totuma y le dijo: «Itua do-de uái», tomá chicha. Karagabí contestó que él estaba muy enfermo y no podía acompañarla, pero que ella sí podía ir al baile.

Entonces ella se arregló bien y se fue. El marido se quedó en la casa, quejándose.

Por la noche Karagabí pensó: voy a ver qué hace allá. Y se arregló bien bonito, a ver si la mujer era honrada. Desde el camino oyó cómo tocaban el tambor. Al baile llegó entonces un forastero joven, y se enamoró con la mujer de Karagabí. Los dos conversaron largo rato entre la gente que bailaba, y ella no sabía quién era él.

Al amanecer Karagabí se fue para la casa, y al rato llegó su mujer. Él le preguntó si en el baile había habido gente forastera. La mujer dijo que sí.

Así hizo Karagabí tres veces. Tres veces la mandó al baile.

En el segundo baile pasó lo mismo. La mujer se arregló y se fue sola, y de noche llegó el mismo joven que nadie conocía, y otra vez conversaron sin que ella lo reconociera. Karagabí volvió primero a la casa y se quejaba de su dolor, y cuando ella llegó la volvió a interrogar, y la respuesta fue la misma.

Por fin, para el tercer baile también se fue la mujer, bien arreglada. Él se quedó en la casa, pero por la noche enjovenció y se fue al baile, y de nuevo estuvo con ella como si fuera otro. Por la mañana se fue para la casa y se quejó mucho de sus dolores.

Entonces preguntó otra vez: «¿Había gente forastera?». «Sí», dijo la mujer, «había un joven allá, pero no sabían de dónde era».

A Karagabí no le gustó todo eso. Cogió a la mujer, la tiró y la arrastró. Y la volvió animal.

La volvió lorita: esa que grita huakuá cuando hay luna llena.`,
    historia: `Esta narración se recogió en 1945, en la vereda de Corozal, municipio de Río Frío, en el Valle del Cauca, durante un reconocimiento corto a un grupo chamí de unos sesenta integrantes, migrantes recientes de la hoya del río San Juan y de Antioquia y Caldas. Gerardo Reichel-Dolmatoff la publicó ocho años después, en 1953, como el octavo de los catorce relatos de «Algunos mitos de los indios Chamí (Colombia)», Revista de Folklore, páginas 148 a 165; este relato ocupa las páginas 161 y 162. Las personas narraron en castellano y él transcribió, según declara, «sin cambio alguno»; también declara que no tuvo tiempo de comprender el contexto cultural de las historias y que por eso se limita a presentar el material. No dejó el nombre de quien narró.

Las notas al pie son suyas, de 1953: la que llama a Karagabí «héroe cultural principal de las tribus del Chocó», la que traduce «Itua do-de uái» como «¡Toma chicha!» y la que aclara que «enjovenció» quiere decir rejuveneció. Hay una cuarta nota que dice sólo «texto sin traducir»: una frase larga en emberá bedea que Karagabí pronuncia después del primer baile quedó sin verter al castellano y hoy no puede leerse. La ficha institucional del Ministerio de Educación y la Biblioteca Nacional acredita el facsímil, el rango de páginas y la licencia, y no añade testimonio narrativo.

La confusión que hay que deshacer viene de Milcíades Chaves, que participó en el mismo viaje y publicó en 1945 «Mitos, tradiciones y cuentos de los indios Chamí». Su relato VII, páginas 153 a 155, se titula también «La mujer de Karagabí», pero Chaves advierte en la página 134 que de sus nueve cuentos sólo los cuatro primeros son de Nicolás Henao, chamí de Balboa, y que los cinco últimos los recogió «de boca de Rafael Bailarín, indio katío». Este es uno de esos cinco. Son dos narraciones distintas de dos pueblos distintos con el mismo título.

De las demás fuentes, Mauricio Pardo narra el episodio con datos del alto Baudó, no chamí; Luis Guillermo Vasco lo coteja en «Jaibanás. Los verdaderos hombres» a partir de Chaves y de Wassén; Ana Lucía Cardona Colorado lo lee como caso de moralización cristiana de la transformación; Guillermo D'Abbraccio, Antonio María Cardona con Jairo Miguel Guerra, y Leonardo Fabio Siágama Gutiérrez sitúan a Karagabí, pero ninguno narra el episodio. Ninguna fuente explica por qué en Río Frío el animal es una lorita ni qué significa huakuá.`,
    versiones: `El relato de Rafael Bailarín, narrador katío, que Chaves publicó en 1945, coincide en el armazón y difiere en casi todo lo demás. Allí Karagabí no está enfermo sino llagoso, la mujer tiene nombre, Barakoko, y él le advierte «Andá, pero bebé con juicio». Al amanecer se quita el vestido llagoso, se viste «de particular» y va a la bebeta; la mujer le dice que está buen mozo y que su marido tiene muchas llagas, y lo invita a hacer kenone. Karagabí la araña para dejarle señas, y al día siguiente la interroga por los arañazos; ella miente y él le abre la boca por mentirosa y la vuelve barakoko, lechuza. Después convierte al cuñado en pájaro obitétede, toma a la cuñada por mujer, reúne a todos los indios, los hace gritar y los convierte en animales empezando por el capitán Imaná, y de los que quedaron buenos sólo sobreviven al aguacero un indio y una india en una canoa.

En su nota comparativa, Chaves copia la versión que fray Severino de Santa Teresa transmitió y que Henry Wassén reprodujo en «Cuentos de los indios Chocó», Journal de la Société des Américanistes, nueva serie, tomo XXV, página 131: allí Caragabi se finge leproso, la mujer va sola vestida de oro, la escena se repite en tres convites, en el tercero se hacen doce promesas de amor y él le araña la cara, y al final la convierte en baracoco y sube al cielo con la hermana de ella. Chaves señala además el paralelismo con «La esposa de la Luna», recogido por Nordenskiöld.

Mauricio Pardo oyó en el alto Baudó una variante en la que el amante no es Karagabí disfrazado sino Trítuku, variante dialectal de Tutruiká, que en algunas versiones es su hermano; el ave es /barákoko/, que Pardo identifica como el pájaro luna o gallina ciega, Nyctibius griseus, y como Trítuku llevaba la luna en la cabeza a manera de flor blanca, la mujer quedó condenada a mirarla para siempre. Víctor Zuluaga Gómez, en Risaralda, recoge otra en la que Karaví hace aparecer su cuerpo lleno de llagas y convierte a la mujer en una lechuza que chilla «kua, kua, kua».

Río Frío conserva rasgos que ninguna otra trae: tres bailes y no tres convites, ningún arañazo, ninguna mujer con nombre, ningún cuñado, ninguna cuñada, ningún diluvio, y un ave que no es lechuza ni nictibio sino una lorita que grita huakuá con luna llena. Al comparar hay que decir siempre cuál versión es chamí y cuál katío: bibliografía posterior cita páginas de Chaves como emberá del Chamí sin advertir que corresponden a los relatos de Bailarín.`,
    leccion:
      "Quien prepara una prueba para el otro decide de antemano lo que va a encontrar en ella.",
    similitudes: `El paralelo más cercano y el más engañoso es el relato VII de Chaves, narrado por Rafael Bailarín, jaibaná katío casado con Pola Henao, mujer chamí: mismo título, misma trampa del marido enfermo, mismo castigo por transformación, pero allí la mujer se llama Barakoko, queda marcada con arañazos y termina convertida en lechuza, y el relato sigue hasta el diluvio y la pareja salvada en una canoa. Río Frío se detiene en la lorita y no cuenta nada más.

El segundo paralelo documentado es la versión que fray Severino de Santa Teresa transmitió entre chocoes y que Wassén publicó a partir de la expedición de Nordenskiöld al istmo de Panamá: allí la prueba se repite en tres convites, como en Río Frío se repite en tres bailes, pero el marido finge lepra en vez de enfermedad, la mujer va vestida de oro, y el desenlace suma lo que Río Frío no tiene, el ascenso de Caragabi al cielo con la cuñada. En la misma nota, Chaves señala que el cuento «La esposa de la Luna» de Nordenskiöld repite el vestido de enfermedad, la fiesta, el galán y los arañazos.

Dentro del propio corpus de Corozal, el noveno relato, el de Hímo la iguana y la candela, muestra a Karagabí usando otra vez el cambio de figura para conseguir lo que quiere: se vuelve pescado grande para entrar a la casa ajena, y al final convierte a Hímo en hormiga chiquita «así como para castigo». La diferencia es que allí el disfraz sirve para robar el fuego y aquí para someter a prueba a alguien de la propia casa, y que allí el narrador dice que fue castigo mientras aquí no dice nada.

Compartir el motivo del marido disfrazado no prueba parentesco histórico entre estos pueblos: lo que se puede sostener es que el episodio circula por el mundo emberá con desenlaces distintos y que cada narración decide en qué ave termina la mujer.`,
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
    relatoCorto:
      "La única narración chamí de este episodio es la transcripción de Río Frío, que en el original tiene menos de trescientas palabras. Contarla entera y en su orden, sin añadirle nada que la fuente no diga, da un texto de la misma extensión. Las otras versiones disponibles son de Nuquí y de Chigorodó, de otros pueblos emberá, y reparten los papeles de otro modo: mezclarlas para alargar habría fabricado un relato que nadie contó.",
    sourceKeys: [
      "reichel1953",
      "redAprendeMetadata",
      "chaves1945",
      "cardona2026",
      "vascoChami",
      {
        key: "cardonaMitologia2013",
        summary:
          "Da a Hímo un lugar en un sistema: Pakoré wera reparte los elementos vitales entre tres custodios —Genserá el agua, Jimo el fuego, Kumbarrá las semillas— y el relato de la candela es uno de tres episodios paralelos de acaparamiento. Dice literalmente que «Jimo escondió el fuego en su madriguera debajo de la tierra donde tenía su tambo» y que, por negarlo, los dioses «a Jimo lo volvieron lagarto y los hombres gozaron del fuego». Confirma que la transformación final del guardián es parte estable del motivo, no un añadido de Río Frío.",
        limitation:
          "Es emberá del golfo de Tribugá (Nuquí, Chocó) y del Sinú, no chamí: allí Hímo es lagarto, no iguana, y quien le quita el fuego no es Karagabí convertido en pez sino una intervención genérica de los dioses. Los autores declaran un método deliberadamente alejado de la etnografía clásica («notas rápidas de campo», historias aprendidas de memoria y luego escritas), y admiten que amplían los relatos con contexto para el lector no indígena; hay que leerlo como síntesis de antropólogo, no como transcripción.",
      },
      {
        key: "iNDEITradicion2006",
        summary:
          "Trae, en «Visita de Karagabí al mundo», el episodio del fuego contado por los propios maestros emberá: «Karagabí... fue donde gimo (lagartija) a buscar fuego», y consigue la candela porque el paletón se acerca y se le prende la cola; después, en el juicio final de los acaparadores, «llamó a gimo y le dijo que los antepasados decían que era él que negaba el fuego y lo tiró y éste se convirtió en gimo». Da el nombre en lengua (gimo) y confirma que el robo se hace por un tercero-señuelo, no por combate.",
        limitation:
          "Es emberá eyábida de Chigorodó (Urabá antioqueño), no chamí; el guardián es lagartija y no iguana, y el motivo de Karagabí convertido en pescado aparece allí en otro relato (el del agua y Gesera), no en el del fuego. Es material etnoeducativo escrito por maestros para la escuela, con edición y glosario de por medio: la forma publicada ya pasó por una decisión ortográfica y pedagógica.",
      },
      {
        key: "rojasescalera1986",
        summary:
          "Registra /jimó/ como el nombre emberá del lagarto dentro del vocabulario recogido en campo, y documenta el mito hermano: «cómo Karabagí logró el agua para los hombres arrebatándosela a /jasara/, la hormiga conga, quien la guardaba en un gran árbol», recogido en distintas zonas. Sirve para mostrar que la candela de Hímo pertenece a una serie emberá de bienes acaparados por un animal y arrebatados por Karagabí, y que la serie tiene incluso un cierre escatológico (un río de fuego que arrasará y renovará la tierra).",
        limitation:
          "Los datos son del alto Baudó y de Guanguí (emberá del Chocó y del San Juan), no del Chamí; el artículo es un informe de etnoastronomía y no transcribe el relato del fuego, sólo el del agua. Pardo trabaja con traducciones y transcripciones fonéticas propias, y la digitalización del PDF tiene errores de OCR en los términos en lengua.",
      },
      "uribeEmbera",
      "carvajalReichelDolmatoff2023",
    ],
    title: "Hímo, la iguana y la candela",
    mito: `Hímo, la iguana, tenía la candela. No se la mostró a nadie. Los indios no tenían y se calentaban en el sol.

Un día Hímo dio comida cocida a los indios y ellos comieron muy sabroso. Regresaron y dijeron: Hímo nos dio comida muy buena. Y se pusieron a pensar en cómo quitarle la candela.

Un día Hímo iba a pescar al río. Cuando volvía trajo pescado ahumado. Encontró a Karagabí, le regaló pescado y le dijo: Mú Karagabí bé-ita betá doí-bú. Karagabí miró el pescado y lo olió, y no pudo averiguar qué era el asunto.

Otro día Hímo fue a pescar al norte y Karagabí al este. Karagabí encontró un charco grande cuando venía Hímo. Pero antes de que Hímo pudiera verlo, Karagabí se volvió un pescado grande y se escondió en el agua. Entonces Hímo vio un pescado grande en el agua y dijo: voy a coger este pescado. Casi se rompió la red cuando Hímo cogió al pescado. Entonces le dijo a su hijo: pártelo con tu machete. Después se fueron para la casa y pusieron los pescados en la casa. Pero el pescado más grande era el mismo Karagabí, que se había vuelto pescado.

Ahora, en la casa, Karagabí miraba y miraba, y vio allí escondida la candela. Hímo la sacó y preparó los pescados chiquitos. Karagabí pensó y pensó cómo coger la candela. Por fin Hímo había comido todos los pescados chiquitos y ahora iba a coger al pescado grande. Pero este se defendió, y saltó, y cogió la candela, y salió de la casa.

Hímo se volvió animal, una hormiga chiquita. Karagabí lo hizo así como para castigo.

Karagabí sí tenía fuego siempre. A mediodía lo hizo con un serrucho, pero no servía.`,
    historia: `Este es el relato número 9 de «Algunos mitos de los indios Chamí (Colombia)», de Gerardo Reichel-Dolmatoff, Revista de Folklore, Bogotá, 1953, páginas 148 a 165, recogido en 1945 entre unas sesenta personas chamí de la vereda de Corozal, municipio de Río Frío, Valle del Cauca. El recopilador declara que los relatos fueron narrados en castellano por los indios y que los transcribió «en su texto original, sin cambio alguno», y también que carecía de una perspectiva del contexto cultural del que forman parte, de modo que se limitaba a presentar el material. No nombra a quien narró.

Sus notas al pie de estas páginas son tres y dicen mucho. Una traduce candela como fuego. Otra presenta a Karagabí como «héroe cultural principal de las tribus del Chocó», que es una caracterización comparativa del recopilador y no una palabra del narrador. La tercera se limita a advertir que la frase que Hímo le dice a Karagabí es «texto sin traducir»: quedó registrada en embera bedea y sin versión castellana, y así sigue. Es el punto donde más se nota lo que el propio Reichel-Dolmatoff admitía, que transcribía sin entender el contexto.

En el otro registro del mismo viaje no hay contraparte. Milcíades Chaves Ch., en el Boletín de Arqueología I-3, páginas 133 a 159, declara en la página 134 que de sus nueve cuentos los cuatro primeros los narró Nicolás Henao, chamí de Balboa, y los cinco últimos Rafael Bailarín, katío. Los cuatro chamí son Erubida y Siebida, Arrumia, Surranabe y Kurijia, y ninguno trata del fuego. El relato de Chaves sobre cómo consiguieron los indios el maíz y el chontaduro, con el ave Ancastor, es el quinto, es decir de Bailarín y por tanto katío: comparte el tema de un bien vital que llega de otro, pero no es una variante de este ni puede citarse como chamí.

Las variantes sí existen, en otros pueblos emberá y con otro reparto de papeles. Antonio María Cardona y Jairo Miguel Guerra Gutiérrez, en Bioetnia 10 (2013), páginas 88 a 94, con tradición oral de jaibanás y mayores de Jawa, Tandó, Nuquí arriba y Yucal, en el golfo de Tribugá, Chocó, y de comunidades de Córdoba, cuentan que Pakoré wera repartió los elementos de la vida entre custodios: «Genserá fue custodia del agua. Jimo del fuego y Kumbarrá de las semillas», que Jimo «escondió el fuego en su madriguera debajo de la tierra donde tenía su tambo», y que al final «a Jimo lo volvieron lagarto» mientras a Genserá «la volvieron hormiga negra». Ahí el lagarto es el destino y no el punto de partida, y la hormiga le toca a quien acaparaba el agua.

La recopilación que los maestros de los resguardos de Yaberaradó y Polines hicieron en 2006 con la Organización Indígena de Antioquia y WWF trae otras dos piezas. En una, Karagabí manda al gêguarâ, el paletón, donde gimo, la lagartija, a buscar fuego, y el pájaro consigue la candela porque se le prende la cola. En otra, la de Gesera, dueña del agua, Karagabí se vuelve pescado grande, se deja pescar y ahumar y observa desde el fogón dónde esconde ella la llave. Es el mismo ardid de Río Frío, aplicado al agua y no al fuego, y lo narró Luis Ángel Domicó, embera eyábida, recogido por los maestros Ángela María Tascón, embera chamí, e Illán Torres Domicó, embera eyábida, del Centro Educativo Rural Indígena Chigorodocito.`,
    versiones: `De Río Frío hay un solo testimonio de este relato y su narrador quedó sin nombre. Tampoco hay texto en embera bedea, salvo la frase que Hímo dirige a Karagabí, que se publicó sin traducir y sigue sin traducción.

El reparto de papeles es lo primero que cambia de una comunidad a otra. Aquí Hímo es la iguana y termina convertido en hormiga chiquita como castigo. En la versión de Nuquí y Córdoba recogida por Cardona y Guerra, Jimo es custodio del fuego, lo esconde en su madriguera bajo tierra y termina convertido en lagarto, mientras la hormiga negra es el castigo de Genserá, la custodia del agua. En Chigorodó, gimo es ya una lagartija y no es despojada por engaño: Karagabí manda al paletón, que consigue el fuego porque se le prende la cola, y la propia gimo le advierte que se va a quemar. Fray Severino de Santa Teresa, entre los catíos, recuerda que «Caragabí convirtió a Gentzerá en hormiga para castigarle su mezquindad», sin que el fuego intervenga.

También cambia el modo del robo. El ardid del pescado grande, que en Río Frío sirve para ver dónde está la candela, en Chigorodó sirve para ver dónde está la llave del agua: Karagabí se deja pescar y ahumar y no se seca, y desde el fogón mira lo que hace Gesera. El mismo episodio viaja entre dos relatos sobre dos bienes distintos, y eso conviene decirlo sin fundirlos: en Río Frío el agua se consigue de otra manera, tumbando el árbol jenéne entre ocho días de trabajo, y quien guarda el agua se llama Héntserá.

Queda un resto que ninguna versión aclara. El relato de Río Frío cierra con una frase suelta: Karagabí siempre tuvo fuego, y a mediodía lo hizo con un serrucho, pero no servía. No hay nota, ni glosa, ni paralelo en las otras versiones consultadas. Puede ser el eco de otra manera de encender, o una frase que perdió su contexto al pasar al castellano. La dejamos como está, porque inventarle sentido sería peor.

Las grafías varían según la comunidad y el recopilador: Hímo en Río Frío, Jimo en Nuquí, gimo en Chigorodó; Héntserá, Genserá, Gentzerá y Gesera para quien guarda el agua; Karagabí, Caragabí y Carabí para el mismo personaje.`,
    leccion:
      "El fuego deja de ser secreto el día en que alguien logra mirarlo desde adentro de la casa.",
    similitudes: `El paralelo más exacto está en la recopilación de 2006 de los maestros de Yaberaradó y Polines, y no trata del fuego sino del agua: en el relato de Gesera, Karagabí se convierte en pescado grande, se deja pescar, se deja ahumar sin secarse y observa desde el fogón el lugar donde ella esconde la llave. Coincide el ardid entero, paso por paso, con el de Río Frío. La diferencia es qué se roba, y quién queda castigado: allí Karagabí descubre cómo la conga sacaba y controlaba el agua, aquí sale corriendo con la candela y convierte a la iguana en hormiga.

El segundo paralelo es el de Antonio María Cardona y Jairo Miguel Guerra, con jaibanás y mayores del golfo de Tribugá y de Córdoba, donde Jimo es el custodio del fuego que lo esconde en su madriguera bajo la tierra. Ahí el castigo de los dioses lo convierte en lagarto, es decir en lo que en Río Frío ya era desde la primera línea, y la hormiga le toca a Genserá, que había escondido el agua. La misma sanción, cambiada de destinatario.

Un tercero, emberá katío, lo trae Fray Severino de Santa Teresa en 1959: «Caragabí convirtió a Gentzerá en hormiga para castigarle su mezquindad». El mismo castigo, sin fuego de por medio, y por la misma falta: haber guardado para sí un bien que los demás necesitaban.

Dentro del propio corpus de Río Frío, el vecino más cercano es el relato de Héntserá, único dueño del agua, a quien Karagabí no engaña con una transformación sino mandando a un muchacho a seguirlo, y cuyo desenlace es la caída del árbol jenéne y el nacimiento del mar, el Cauca y el Magdalena. Dos bienes, dos métodos, dos finales.`,
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
    relatoCorto:
      "La transcripción de Río Frío de 1953 es la única narración que existe de este episodio y ocupa quince líneas; ninguna otra fuente revisada, ni Chaves, ni Vasco, ni Zuluaga, ni las grabaciones de 2025, trae una versión de la que tomar algo. Alargar el Relato exigiría inventar causas, objetos o personajes que el registro no da.",
    sourceKeys: [
      "reichel1953",
      "redAprendeMetadata",
      "chaves1945",
      "cardona2026",
      "onicChami",
      "procuraduriaChami",
      "vascoChami",
      {
        key: "gomezMitos1997",
        summary:
          "Es la única fuente localizada que reúne los tres elementos de esta ficha en un mismo libro chamí. Primero, el estado inicial: Karaví divisa desde su cielo «una cosa oscura, como un globo envuelto en sombras» y baja y «vio esta tierra a oscuras porque no había luz». Segundo, el apartado «El sol y la luna», donde Humántahu y Gedeco eran hermanos que se unieron y fueron convertidos en astros como castigo, y donde ambos, que al principio tenían dos ojos y calentaban demasiado, son alejados hasta su distancia actual: es decir, la luz aparece regulada, no regalada. Tercero, dentro del derribo del jenené, Karaví frota sus manos y produce «una luz clarísima» para poder trabajar de noche «sin necesidad de suspender el trabajo en fuerza de la oscuridad». Permite leer el relato de Río Frío —romper piedras para romper la oscuridad— dentro de un corpus donde la luz se fabrica y se ajusta.",
        limitation:
          "En ninguna de estas versiones la oscuridad se rompe golpeando piedras, ni hay dos periodos oscuros, ni «primer hombre», ni la frase «Hóbai homa kini burúa». Las versiones del sol y la luna que Zuluaga sintetiza vienen de los misioneros Severino de Santa Teresa, María de Betania y Constancio Pinto, sobre material katío, y el propio libro señala que el castigo del incesto y la imposición de apellidos pueden llevar marca misionera. El PDF del repositorio es un escaneo sin capa de texto y el sitio exige pasar una verificación antirrobot.",
      },
      "risaraldaHistoria2025",
      {
        key: "cardonaMitologia2013",
        summary:
          "Da el marco que impide leer este relato como una victoria de la perseverancia. Formula, desde los mitos emberá, que «la luz existe porque vino de la oscuridad, la oscuridad también es luz, porque en ella está implícita. Nunca habrá eterna luz, ni eterna oscuridad», y abre la mitología con un estado inicial de «soledad, oscuridad y vacío» del que brota Ankoré. Cierra sosteniendo que el emberá antepone el orden desordenado del universo «para no sucumbir a la oscuridad y al vacío». Es útil para la ficha porque nombra como principio lo que el relato de Río Frío escenifica: que el día vuelve pero la oscuridad no queda derrotada.",
        limitation:
          "Es glosa antropológica, no relato: la formulación luz/oscuridad es de los autores y no palabra de un narrador, y en ningún punto documentan un episodio de mundo oscurecido y piedras rotas. El corpus es de Nuquí, río Chorí y río Panguí (Chocó) y de Córdoba, no chamí. El artículo intercala referencias a Frazer, Einstein y Hawking que no pertenecen a la tradición que describe.",
      },
    ],
    title: "La oscuridad",
    mito: `Un día el mundo se oscureció. Todos se ahogaron.

La gente que quedaba se puso a romper todas las piedras que había, para romper la oscuridad. Pero la gente se murió.

Entonces vino el primer hombre. Preguntaron qué iban a hacer, porque todo estaba oscuro. Se pusieron a romper las piedras, ahora dentro de la casa, dando y dando. Por fin rompieron las piedras y el día se volvió. El resto se murió.

Entonces volvieron a vivir. Pero después de un rato otra vez todo se puso oscuro. Ellos lloraban y decían: Hóbai homa kini burúa.

Por fin rompieron las piedras y volvió el día, pero muchos se morían.

Entonces se pusieron a tumbar monte y a sembrar. Como no tenían herramientas, no cortaban los palos: solo les pelaban la cáscara, hasta que los palos se morían. Vivían así y manejaban solo maíz chiquito. Le sacaban harina y lo comían con agua como sola cosa.`,
    historia: `Este episodio es el número 10 de los catorce que Gerardo Reichel-Dolmatoff recogió en 1945 en la vereda de Corozal, municipio de Río Frío, Valle del Cauca, y publicó en 1953. Ocupa quince líneas de imprenta y es la única narración conocida de lo que cuenta. El autor declara que el material fue narrado en castellano por los indios y que él lo transcribió en su texto original, sin cambio alguno, y declara también que carecía de una perspectiva del contexto cultural del que forman parte estos mitos, de modo que se limitaba a presentarlo para que otros lo usaran. Ese doble aviso pesa aquí más que en ninguna otra página del corpus: no hay nota al pie que identifique las piedras, ni comentario que diga quién apagó el mundo.

La única nota es la 36, y dice tres palabras: texto sin traducir. Se refiere a la frase que la gente lloraba, Hóbai homa kini burúa, que quedó sin verter al castellano y que esta página no inventa.

Milcíades Chaves, que viajó en la misma expedición y publicó nueve relatos el mismo año de 1945, no trae este episodio ni entre los cuatro de Nicolás Henao, chamí de Balboa, ni entre los cinco de Rafael Bailarín, katío. Su Awena, de Bailarín, relaciona temblores con el mundo subterráneo, pero no es una versión de la oscuridad.

Víctor Zuluaga, que dedicó a los mitos de origen chamí el capítulo más largo de su libro de 1997, tampoco recoge nada semejante: la única tierra a oscuras que aparece allí está en la reconstrucción katía de Luis Fernando Vélez, donde Karaví divisa desde su cielo una cosa oscura, como un globo envuelto en sombras, y baja y ve esta tierra a oscuras porque no había luz. Es una oscuridad de antes del comienzo, no un mundo que se apaga dos veces.

Las fuentes panorámicas sirven aquí para ubicar lengua, territorio y jaibanismo, y para leer las transformaciones sin reducirlas a moraleja, pero ninguna prueba ni corrige un solo episodio de esta secuencia.`,
    versiones: `Este mito no tiene variante documentada. Ninguna fuente narra el mundo oscurecido dos veces ni las piedras rotas. Lo que hay es una sola transcripción, la de Río Frío de 1953, y en torno a ella un vacío que conviene nombrar en vez de disimularlo con comparaciones.

Se revisaron los lugares donde cabría esperarla. Los nueve relatos de Chaves de 1945, recogidos en el mismo viaje y de dos narradores identificados, no la traen. Los cinco relatos que Vasco escuchó a Clemente Nengarabe Siágama en Purembará tampoco. El capítulo de mitos de origen de Zuluaga, que reúne material chamí propio y ajeno y llega hasta las versiones de jaibanás como Avelino Nacávera y Mario Restrepo Siágama, tampoco. Y las grabaciones contemporáneas de la Oraliteca de Risaralda, publicadas en noviembre de 2025, narran el nacimiento del sol y de la luna, que es otro mito.

Lo más cercano son tres cosas parecidas que no son lo mismo. Una es la tierra a oscuras de la reconstrucción katía de Vélez, anterior a la luz y no posterior a ella. Otra es Karaví frotándose las manos para producir una luz clarísima y poder seguir tumbando el jenené de noche, en el mito del agua: allí la oscuridad es un estorbo de trabajo, no una catástrofe. La tercera es la página del mismo corpus de Río Frío sobre el hombre que atrapó al sol y a la luna, donde los astros están encerrados en talegos: hay oscuridad, pero tiene causa y culpable, y aquí no.

La frase Hóbai homa kini burúa se conserva tal como quedó, sin traducción, porque ninguna edición posterior la ha vertido y ponerle sentido sería inventarlo.`,
    leccion:
      "La luz vuelve por trabajo repetido y aun así deja muertos y hambre detrás.",
    similitudes: `El paralelo más cercano está en el propio corpus de Río Frío de 1953: en El hombre que atrapó al Sol y a la Luna los astros quedan encerrados en talegos y el mundo se queda sin día. La semejanza es el mundo apagado; la diferencia es decisiva, porque allí hay alguien que encierra la luz y un objeto donde está guardada, mientras que aquí la oscuridad llega sin autor y lo que se rompe son piedras que nadie explica.

En la reconstrucción katía de Luis Fernando Vélez que Zuluaga transcribe, Karaví divisa desde arriba una cosa oscura, como un globo envuelto en sombras, y baja a ver esta tierra a oscuras porque no había luz. Es también un mundo sin día, pero es el estado anterior a que el dios ponga sol, luna y estrellas en el firmamento: una oscuridad de origen, no una que vuelve. Nadie golpea piedras allí, y nadie se muere por la falta de luz.

Entre los emberá chamí de la vereda Alto Cielo, en Pueblo Rico, Aider y Carolina Borocuara narraron en 2025 el nacimiento del sol y de la luna, umada y jedeko, a partir de dos niños robados a su madre. Allí la luz del mundo tiene cuerpo y parentesco y sale de un crimen doméstico; aquí sale de un trabajo colectivo sobre la piedra y no hay quien responda por la noche.

La última diferencia es de desenlace. En muchos ciclos de destrucción y recomienzo el mundo restaurado mejora. Este termina en el monte descortezado a mano, en el maíz chiquito y en la harina con agua como sola cosa.`,
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
    relatoCorto:
      "La transcripción de Río Frío de 1953 es la única que narra esta versión, ocupa veinte líneas y termina en el detalle de las narigueras reventadas. Las demás versiones del jenené disponibles no son continuaciones sino variantes incompatibles, en las que el dueño del agua es una mujer mezquina castigada por Karaví, y sumarlas al Relato sería fundirlas.",
    sourceKeys: [
      "reichel1953",
      "redAprendeMetadata",
      "chaves1945",
      "cardona2026",
      "onicChami",
      "procuraduriaChami",
      {
        key: "gomezMitos1997",
        summary:
          "Su apartado «El origen del agua» es la versión larga de lo que Río Frío cuenta en veinte líneas, y resuelve el punto que la ficha deja abierto —qué pasa con Héntserá—. Aquí Gentzerá es una indígena que había encerrado el agua en la concavidad de una gran peña «para castigar a unos pescadores que se negaron a darle algún pescado»; un tominejo, que acaso era el propio Karaví, la sigue hasta la gruta; Karaví pide agua cuatro veces y ella se la niega; él derriba la puerta, la parte por la cintura y la deja «convertida en hormiga negra y grande, en una conga, en una gentzerá», y desde entonces todas las congas cargan una gota de agua en la boca. El texto añade que en otras versiones el agua no está en la peña sino «en la inmensa concavidad de un árbol gigantesco... era el árbol de jenené», que Karaví tumba con su gente, con hachas de piedra que se gastan, durante nueve meses, y de cuya concavidad proceden los mares, de sus ramas los ríos y de sus renuevos los charcos. Y anota la distinción clave: «La conquista del agua se le atribuye usualmente a Karaví, pero entre los Chamí, el proveedor del agua es un antiguo jaibaná».",
        limitation:
          "La versión larga no es chamí: Zuluaga la transcribe de la síntesis de Luis Fernando Vélez sobre material katío, y usa la grafía Karaví/Gentzerá. Faltan aquí las ocho ardillas, las narigueras monsimá y el muchacho espía de Río Frío; sobran el tominejo, el sapo y los nueve meses. La transformación en hormiga, que la ficha registra como ausente en Reichel, aparece en esta fuente pero como castigo de Karaví, no como metamorfosis propia. El PDF del repositorio es un escaneo sin capa de texto y el sitio exige pasar una verificación antirrobot.",
      },
      {
        key: "cardonaMitologia2013",
        summary:
          "Da al episodio un lugar dentro de un sistema: Pakoré wera reparte los elementos esenciales entre animales custodios bajo el principio de que «a nadie se les podía negar», y «Genserá fue custodia del agua. Jimo del fuego y Kumbarrá de las semillas». Cuando los hombres hacen mal uso, los custodios violan la ley y niegan: «Genzerá escondió el agua en la comba de un jenené gigante», Jimo el fuego en su madriguera y Kumbarrá las semillas. Los dioses intervienen: «a genserá la volvieron hormiga negra, y del árbol sagrado del agua brotó el mar, los ríos, ciénagas, lagunas y demás fuentes de agua; a Jimo lo volvieron lagarto». Explica por qué en el corpus chamí de Río Frío el relato de Héntserá y el de Hímo la iguana y la candela son piezas gemelas.",
        limitation:
          "Material de Nuquí, río Chorí y río Panguí (Chocó) y de Córdoba, no chamí, y los autores advierten que allí Karagabí «es un dios de los katíos». Aquí Genserá es animal custodio desde el principio y no dueña humana del agua, el acaparamiento tiene una causa moral que Río Frío no menciona, y no aparecen ni el muchacho espía, ni las ocho ardillas, ni el Cauca y el Magdalena. El pasaje es síntesis de los autores, no transcripción de un narrador.",
      },
      "vargasDevenir2014",
      {
        key: "rosiqueGraciaTodos2020",
        summary:
          "Identifica al acaparador con nombre y especie —«el agua escondida por Jenzerá (hormiga conga Paraponera clavata) en tiempos antiguos»— y da al episodio un papel que ninguna otra fuente le atribuye: el vuelo del colibrí que la buscó fue la metáfora escogida por el Semillero Krincha U Numua del Cabildo Mayor de Chigorodó para nombrar su propia forma de investigar. Y fija la consecuencia cosmológica: «luego de la intensa actividad cumplida en la generación de su pueblo y en la ordenación del paisaje a partir de la caída en tierra del árbol jenené, Karagabí se fue al mundo de arriba y se alejó definitivamente de los humanos». Permite leer la caída del jenené no solo como el origen de los ríos sino como el momento en que el creador se retira.",
        limitation:
          "Es emberá eyábida de Chigorodó (Antioquia), no chamí, y el mito aparece como referencia, no como relato: no hay transcripción, ni el muchacho espía, ni las ocho ardillas, ni el reparto del Cauca y el Magdalena. La identificación entomológica de Jenzerá con Paraponera clavata es de los investigadores. La versión de Río Frío no dice que Karagabí se retire tras derribar el árbol, así que el desenlace no puede trasladarse.",
      },
      "domicomito2006",
      "turbayNotas2021",
    ],
    title: "Héntserá y el agua",
    mito: `El único dueño del agua era Héntserá. Él siempre tomaba agua buena, pero Karagabí no tenía.

Un día Héntserá le regaló a Karagabí un poco de agua, y a Karagabí le gustó mucho.

Otro día Héntserá se fue para la montaña a traer agua. Encontró y tomó mucha. Karagabí, que también fue a buscar, no encontró nada, y tuvo que tomar agua de aguacero.

Karagabí tenía un muchacho como sirviente en la casa. Le dijo que pusiera atención a dónde se conseguía el agua Héntserá.

Un día Héntserá se fue a buscar agua y el muchacho lo siguió. Vio cómo Héntserá se encontró un gran árbol, llamado jenéne. El muchacho volvió y se lo dijo a Karagabí.

Karagabí reunió a su gente. Reunió además muchas hachas y ocho arditas, y se fueron todos a tumbar el palo.

Trabajaron ocho días y al fin lo tumbaron.

Pero como cayó el palo, la raíz se volvió el mar. Las ramas quebradas se volvieron ríos, y las más grandes fueron el Cauca y el Magdalena. Así todos tenían agua.

Las arditas tenían todas narigueras, monsimá. Y cuando cayó el árbol, esas narigueras se reventaron.`,
    historia: `Este pasaje es el número 11 de los catorce que Gerardo Reichel-Dolmatoff recogió en 1945 en la vereda de Corozal, municipio de Río Frío, Valle del Cauca, y publicó en 1953. Es una transcripción de veinte líneas hecha, según su propia declaración, sobre lo que los indios narraron en castellano y sin cambio alguno, por un autor que reconocía carecer de una perspectiva del contexto cultural de estos mitos. Sólo puso dos notas: la 37 dice de Héntserá que es un ser mítico, y nada más; monsimá aparece entre paréntesis en el cuerpo del texto, sin explicación. Nadie dice por qué las arditas llevaban nariguera ni qué significa que se reventaran.

Milcíades Chaves no trae este relato ni entre los cuatro de Nicolás Henao, chamí de Balboa, ni entre los cinco de Rafael Bailarín, katío, de modo que la versión de Río Frío no tiene doble registro en 1945.

Fuera de Río Frío, el jenéne aparece por todas partes, pero el dueño del agua cambia de figura. Víctor Zuluaga lo resume así en 1997: la mayor parte de los relatos que dan cuenta del origen del agua están relacionados con el árbol Jenené, la conquista del agua se le atribuye usualmente a Karaví, pero entre los chamí el proveedor del agua es un antiguo jaibaná. En su capítulo sobre animales recoge el testimonio del indígena y jaibaná Avelino Nacávera, de la vereda de Kundumí, en el año de 1996: la hormiga negra y grande llamada Gentzerá era antes una indígena que guardaba en secreto el sitio en donde existía agua, y por negarse a revelarlo Karaví la convirtió en hormiga conga. Junto a ella registra a la hormiga jaburrá, otra mujer que sabía dónde estaba el agua y a la que Karaví aplastó con el pie.

En Pueblo Rico, el mismo mito sirve de fundamento jurídico. Leonardo Fabio Siagama Gutiérrez anota que el derecho mayor emberá chamí se apoya en la historia del Jenené, en la cual una hormiga mezquinó el agua, y que de ahí sale la norma propia de que está prohibido mezquinar los recursos de uso común.`,
    versiones: `Lo que Río Frío narra en 1953 es una excepción dentro del ciclo del jenéne, y conviene verlo contra las otras versiones antes de dar por hecho que todas cuentan lo mismo.

Aquí Héntserá es el dueño del agua y además la comparte: le regala un poco a Karagabí, y ese regalo es lo que pone en marcha la historia. No hay mezquindad, no hay negativa, no hay castigo y no hay metamorfosis. Héntserá no se vuelve hormiga en esta transcripción.

En las versiones chamí que reúne Zuluaga, el eje es exactamente el contrario. En la que le dio Avelino Nacávera en 1996, en la vereda de Kundumí, Gentzerá guarda el secreto del agua, se niega a darla y por eso Karaví la convierte en hormiga conga. En la reconstrucción de Luis Fernando Vélez que Zuluaga transcribe, Gentzerá había encerrado el agua en la concavidad de una gran peña para castigar a unos pescadores que le negaron pescado; Karaví, convertido en tominejo, la sigue hasta la gruta, derriba la puerta de piedra, la expulsa y en castigo la coge de la cintura y la parte en dos, y las dos mitades quedan unidas por un hilito. Desde entonces las hormigas congas cargan una gotita de agua en la boca. En esa misma versión se dice también que el agua no estaba en la peña sino en la inmensa concavidad de un jenené capaz de albergar a más de cien personas. El corpus publicado de Vélez son los Relatos tradicionales de la cultura catía, de modo que esa reconstrucción no es chamí.

La tala también cambia. En Río Frío bastan muchas hachas, ocho arditas y ocho días. En la versión de Vélez, el árbol se recompone todas las noches durante nueve meses, Karaví se frota las manos para producir luz y trabajar de noche, y cuando por fin cae queda enredado en bejucos: suben a cortarlos el mico Yerré, el mono Zrúa, el mono Amisurrá, una ardilla, el tigre, el oso, el perico ligero y el zorro, y todos fracasan, hasta que sube la ardilla más pequeña y ágil, Chidima, que lo logra. Allí los ríos que nacen se llaman Amparradó, Ampurrumiandó, Chigorodó, Jiguamiandó y Truandó, nombres del Chocó y de Urabá, no el Cauca y el Magdalena.

La grafía del árbol y del personaje varía entre ediciones y conviene no leerla como personajes distintos: jenéne en Río Frío, jenené en Zuluaga y en Pueblo Rico, Genserá y Genzerá en el Chocó, Gentzerá en los registros chamí, Jenzerá entre los katío del Sinú y Jentzerá entre los eyábida de Antioquia.`,
    leccion:
      "El agua deja de ser de uno solo cuando alguien mira, muchos trabajan y algo cae.",
    similitudes: `Entre los emberá katío del alto Sinú, en el relato del origen del agua que publicaron Kimy Pernía Domicó, Luis Ángel Domicó y Efraín Jaramillo con el colectivo Jenzerá, un indio misterioso guarda el agua en una laguna dentro del cerro Kugurú, y Karagabí lo sentencia diciéndole que por mezquino se convertirá en Jenzerá, la hormiga. Cuando el árbol cae, sus raíces hacen el mar y de sus ramas salen el Keradó, que es el Sinú, el Iwagadó, que es el Verde, el Kuranzadó, que es el Esmeralda, el Manso y el Kiparadó. La estructura es la misma que en Río Frío, pero los ríos que nacen son los del territorio de quien narra, y el guardián recibe un castigo que aquí no existe.

Entre los emberá del golfo de Tribugá y del Chocó, en la mitología que recogieron Cardona y Guerra, Genserá es la custodia del agua por encargo de Pakoré wera, y la esconde en la comba de un jenené gigante sólo después de que los hombres le negaran agua a una anciana sedienta. Los dioses la vuelven hormiga negra y del árbol sagrado brota el agua. La diferencia es de culpa: allí el agua se esconde como respuesta a la falta de los hombres, y aquí nunca se dice por qué el agua estaba en un solo lugar.

Dentro del propio corpus de Río Frío, la pareja más cercana es Hímo y la candela, donde otro ser retiene un bien común y termina convertido en hormiga chiquita por castigo de Karagabí. Que allí sí haya castigo y transformación, y aquí no, es la señal de que Héntserá no es un mezquino: es un dueño que reparte poco y al que nadie condena.`,
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
    sourceKeys: [
      "reichel1953",
      "redAprendeMetadata",
      "chaves1945",
      "cardona2026",
      "onicChami",
      "procuraduriaChami",
      "vascoChami",
      "gutierrezpensamiento2017",
      "gomezMitos1997",
      "cardonaMitologia2013",
      "campoperdida2024",
    ],
    title: "La creación de la gente",
    mito: `Karagabí tomó su hacha y se fue a tumbar una palma barrigona. No dio un solo golpe: hizo cortes en el tronco, diez, veinte o más, y fue tapando cada corte con hojas grandes de rascadera. Cuando acabó se marchó y dejó pasar unos días.

Volvió después a ver el árbol. Destapó uno de los huecos y allí dentro había mucha gente. Salieron muchos de una vez, y era como un chorro.

Pero aquella gente no duraba, no era de aguante. Bastaba que la picara una hormiga para que se muriera. Sus mujeres tampoco criaban a los hijos en el vientre: los criaban en la pantorrilla, y por eso a esos hijos los llamaban híno-pota uára.

Así era el nacimiento en aquel tiempo. La mujer quedaba embarazada en la pantorrilla y no en el vientre; cuando llegaba la hora paría al niño por la pantorrilla y luego se moría. Al ver ese sufrimiento de las mujeres se decidió que de ahí en adelante el hijo se formara en el vientre, en el estómago de la madre.

La gente de la palma se fue acabando y Karagabí tuvo que hacer gente nueva. De esa que hizo después venimos nosotros.

Del niño criado en la pantorrilla sí se sabe lo que hizo cuando creció. A los ocho años no aceptaba que su madre estuviera muerta y la buscaba a lo largo y por todas partes del universo. Como al muchacho le gustaba lamer sangre, sus tíos le decían, para que se fuera lejos de ellos, que su madre se había ido detrás de tal o cual animal.

Así fue enfrentándose con las madres de casi todos los animales de la tierra, y a todas las venció. Mató monstruos, pescados enormes, cangrejos descomunales, arañas grandísimas, caimanes interminables. Pero de cada especie dejaba siempre dos, un macho y una hembra, para que se reprodujeran y no se acabaran.

Un día peleó con una culebra, la boa gigante y sagrada. La venció, y al ser vencida la boa se deshizo en el agua de todos los ríos. Por eso podemos vivir en la tierra.`,
    historia: `El pasaje de la palma es el número 12 de los catorce que Gerardo Reichel-Dolmatoff recogió en 1945 en la vereda de Corozal, municipio de Río Frío, Valle del Cauca, entre unos sesenta chamí llegados poco antes de la hoya del San Juan, de Antioquia y de Caldas, y que publicó ocho años más tarde, en 1953. Él mismo advierte dos cosas: que la gente narró en castellano y que transcribió el texto original sin cambio alguno, y que carecía de una perspectiva del contexto cultural de estos mitos. Su nota 38 traduce híno-pota uára como Hijos de la Pantorrilla y arriesga que el concepto tal vez se relacione con la deformación artificial de las pantorrillas practicada por tribus karíb: es una hipótesis suya, de 1953, no palabra de quien narró. La transcripción termina en dos frases —Karagabí tuvo que hacer nueva gente, de estos venimos nosotros— y no dice cómo hizo esa segunda gente.

Milcíades Chaves, que viajó en la misma expedición, no incluye este pasaje: sus cuatro relatos chamí son los de Nicolás Henao, de Balboa, y los cinco restantes los de Rafael Bailarín, katío. Pero sí cita, al comentar el viaje al mundo de abajo, el relato Geru-poto-uarra, El hijo de la Pantorrilla, del padre Rochereau.

Lo que la transcripción de Río Frío calla lo dice una mayora. Leonardo Fabio Siagama Gutiérrez hizo en 2017 entrevistas abiertas en el resguardo Unificado Chamí de Pueblo Rico, Risaralda, y el 14 de abril de ese año recogió de Guillermina Gutiérrez Arcila el relato que ella llama El hijo de la pantorrilla, Jirupotawar: la mujer quedó embarazada en la pantorrilla, no en el vientre, parió al bebé y luego murió, y Dios, al ver el sufrimiento de las mujeres, decidió que el bebé se formara en el vientre del estómago. De ella viene también lo que hace el muchacho después, y la boa que al ser vencida se deshace en el agua de los ríos.

Luis Guillermo Vasco devolvió a Clemente Nengarabe Siágama, gobernador y jaibaná de Purembará, la autoría de los relatos que le escuchó y que en 1978 salieron sin su nombre, porque entonces fue impensable que un indio apareciera como autor. En esos relatos Jinopotabar nació de la pierna de una mujer, sin que se cuente la palma.`,
    versiones: `Río Frío, 1953, es la única transcripción que hace salir a la primera gente de los cortes tapados de una palma barrigona, y es también la que menos explica: no dice por qué esa palma, no dice qué mató a esa humanidad más allá de su poca resistencia y no describe la segunda creación.

Pueblo Rico, 2017, no tiene palma ni hacha. Allí hay una mujer sola, un parto por la pantorrilla y una muerte, y de esa muerte sale la decisión de cambiar el lugar donde se forma el hijo. Quien decide no se llama allí Karagabí sino Dios, y esta página no los identifica entre sí ni los separa, porque el testimonio no lo aclara. Las dos versiones se tocan exactamente en el punto que a la de Río Frío le falta.

Víctor Zuluaga transcribe en 1997 otra creación distinta, y la marca como reconstrucción de Luis Fernando Vélez: Karaví hace dos muñecos de piedra fina, mompahuará, y Tutriaka hace los suyos de barro; los de barro se levantan, hablan y caminan, los de piedra no, y Karaví tiene que pedirle barro a su rival tres veces y sacarse un pedacito de costilla. El corpus que Vélez publicó son los Relatos tradicionales de la cultura catía, de Medellín, de modo que esa versión es emberá katía y no chamí.

Antonio María Cardona y Jairo Miguel Guerra, trabajando en Nuquí y en comunidades del Chocó y Córdoba, traen una tercera: Ankoré talla al primer hombre en palo de oquendo, se hiere un dedo con la hoja y deja la obra inconclusa, y por eso el hombre no es completo ni inmortal; después lo hace de barro de la playa del primer río.

El nombre del hijo cambia de grafía en cada registro y conviene no tomarlo por personajes distintos: híno-pota uára en Río Frío, Geru-poto-uarra en Rochereau, Jerupotouarra y Jirupotouarra en el padre Pinto, Herupotoarra en Severino, Jirupotawar en Pueblo Rico y Jinopotabar en Purembará.`,
    leccion:
      "La primera humanidad no duró, y de su fracaso quedó la manera de nacer que aún nos sostiene.",
    similitudes: `Entre los emberá del golfo de Tribugá y del alto Sinú, la creación del hombre que recogieron Cardona y Guerra empieza con Ankoré tallando un muñeco en palo de oquendo: la hoja resbala sobre la madera dura, el dios se corta un dedo y abandona la figura casi terminada, y de ahí viene que el hombre sea incompleto y mortal. La diferencia con Río Frío es de culpa: allí la falla es del dios y queda explicada; aquí la fragilidad está en los cuerpos que salen de la palma y nadie dice de dónde viene.

En la reconstrucción katía de Vélez que Zuluaga transcribe, hacer gente es un pulso entre dos dioses que se miden, Karaví con la piedra y Tutriaka con el barro, y el que pierde tiene que ir a pedirle material al que gana. En la palma barrigona no hay rival ni competencia: hay una tanda que no aguanta y otra que se hace después sin que se cuente cómo.

Más al norte, entre los emberá de Jaikerazabi, en Mutatá, el mito de la pérdida de la riqueza hace que Karagabí reparta habilidades y explique así el origen de las razas y la pobreza indígena frente a los blancos. Allí la creación se usa para dar cuenta de la diferencia entre pueblos; aquí sirve para contar el relevo entre dos humanidades del mismo pueblo.

Dentro del corpus de Río Frío, esta página se toca con El hijo de la nutria por el nacimiento desde la pantorrilla y con El hijo de Karagabí encerrado en el árbol por los cuerpos que se forman dentro de un vegetal.`,
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
    relatoCorto:
      "El único registro de este episodio con el hijo de Karagabí por protagonista es el relato número 13 de Río Frío, de unas cien palabras. Los demás testimonios chamí del mismo episodio tienen otro protagonista y otro desenlace, y fundirlos aquí sería inventar una versión que nadie narró.",
    sourceKeys: [
      "reichel1953",
      "redAprendeMetadata",
      "chaves1945",
      "vascoChami",
      "uribeemberachami1993",
      {
        key: "rojasescalera1986",
        summary:
          "Es el único trabajo que alinea las denominaciones del mundo de los seres sin ano en todas las fuentes y las coteja: /armukurá/ (Santa Teresa, Dabeiba), /aramuko/ (Reichel, Chamí), /aremuko/ (Chaves, Chamí), /aramora/ (Guangul) —que Pardo descompone como /atau/ ano + /aramora/ tapado—, /yháberá/ (Baudó) y /chiapérera/ (Wassén, Chocó). Describe el nivel como aquel donde «la gente no tenía ano y se alimentaba con el olor de las cosas cocinadas», y hace la advertencia metodológica decisiva: agrupar todos esos lugares en un solo esquema «es sólo un artificio», y puede que /armakurá/, /aramuko/ o /aramïrá/ no tengan nada que ver entre sí salvo el estar por debajo del nivel humano.",
        limitation:
          "Los datos de primera mano son del alto Baudó y de Guangul (Timbiquí); lo chamí llega citado de Reichel y de Chaves, sin trabajo de campo propio. No narra el episodio de la operación ni menciona al hijo de Karagabí: en la versión que Pardo resume, quien cae al mundo sin ano es el hijo de la pantorrilla. El propio autor presenta el esquema de niveles como hipótesis provisional. OCR deficiente en el PDF.",
      },
      {
        key: "uribeJaibanas1985",
        summary:
          "Confronta directamente las dos transcripciones chamí de Río Frío: señala que «los informantes de Reichel llaman aramuko dohurá a los habitantes del mundo de abajo» y que Milcíades Chaves, «quien trabajó con los mismos indígenas que Reichel», los llama Aremuko, seres que sólo comían el humo de cocinar y no tenían ano. Resume además el relato de Chaves (1945: 145-146) de un hombre que bajó allá, se casó con una mujer aremuko y volvió con ella montado sobre su cuerpo a través de un charco. Aporta también la clave que impide leer a los aramúko como carentes: los seres del mundo de abajo, los dohura, son jaibanás, y de allá vienen el maíz y el chontaduro.",
        limitation:
          "Es análisis, no transcripción; no reproduce el relato número 13 de Reichel ni comenta la intervención del hijo de Karagabí. La lectura del cuerpo «cerrado» y del jaibaná como mediador es un marco estructuralista del autor, no de los narradores. Mezcla en una misma página fuentes chamí (Reichel, Chaves), del alto Baudó y del istmo de Panamá (Nordenskiöld/Wassén) sin separarlas siempre con nitidez.",
      },
      {
        key: "cardonaMitologia2013",
        summary:
          "Da la versión inversa de la que trae Río Frío: aquí el mundo de los seres sin ano no es una anomalía corregible sino una creación deliberada y un privilegio. Tutruika, hermano de Karagabí y de Pakoré wera, «creó el mundo de los inmortales, los sin culo, llamado Armukurá», y desde el origen se lo describe como «un mundo de hombres grises, que no tienen boca ni tienen culo y son inmortales». Leído junto al relato chamí, obliga a no presentar la condición de los aramúko como una carencia: en esta cosmogonía es exactamente lo que los hace inmortales, y por tanto lo que la operación destruye.",
        limitation:
          "Comunidades del golfo de Tribugá (Nuquí) y del Sinú, no chamí. No narra el encuentro ni la operación, sólo la creación del mundo Armukurá. Es un texto de síntesis redactado por los antropólogos a partir de relatos de jaibanás, mayores y docentes bilingües, con una ordenación escolar («Ley de Origen», «Creación del hombre») que no proviene de una narración única; los propios autores señalan que el relato base circuló primero por escrito en las escuelas del Chocó.",
      },
      {
        key: "kreutzercruces2001",
        summary:
          "Da la ubicación chamí del lugar: «Debajo de nuestro mundo están los mundos inferiores. El más alto de los mundos inferiores es el mundo de Tutriaka, el mundo plano que se llama Armucurá». Es decir, para los chamí del alto San Juan el mundo subterráneo de los sin ano no está en el fondo del cosmos sino inmediatamente debajo del nuestro, el primero de cuatro mundos inferiores, y su señor es Tutriaka, no Karagabí —lo que sitúa al hijo de Karagabí como extranjero en territorio de otro señor.",
        limitation:
          "No narra el episodio ni menciona a los aramúko ni la ausencia de ano; sólo el nombre y la posición del mundo. El pasaje es una cita de compilaciones anteriores, no de trabajo de campo del autor, y usa las grafías Karaví, Tutriaka y Armucurá. El PDF está escaneado con OCR pobre.",
      },
      "ferrariletteratura2025",
    ],
    title: "El hijo de Karagabí y la gente subterránea",
    mito: `El hijo de Karagabí era un sabio.

Debajo de la tierra había otro estado, y allí vivía una gente que se llamaba aramúko dohurá. Los aramúko comían, pero comían solamente el jugo de la comida, y no defecaban.

El hijo de Karagabí los miró comer y les dijo: «Como ustedes no saben defecar, voy a hacerles un ano a cada uno, para que puedan comer de todo».

Los aramúko dijeron: «Bien».

El hijo dijo: «Eso es fácil». Se fue, trajo un cuchillo y cortó a cada uno las nalgas.

Pero los aramúko se murieron de eso.`,
    historia: `El relato lo recogió Gerardo Reichel-Dolmatoff en 1945 en la vereda de Corozal, municipio de Río Frío, Valle del Cauca, y lo publicó en 1953 como el número 13 de «Algunos mitos de los indios Chamí (Colombia)», en la página 165 de la Revista de Folklore. Es de los más breves de la serie y uno de los dos únicos a los que el recopilador no añadió ninguna nota al pie: no identifica especie, no propone comparación, no traduce nada. Quien narró no quedó nombrado. La advertencia que el propio Reichel-Dolmatoff pone al frente del artículo pesa aquí más que en ningún otro sitio: dice que carece de perspectiva del contexto cultural del que forman parte estas narraciones y que por eso se limita a presentar el material recogido.

Milcíades Chaves, que viajó con él, publicó en 1945 el mismo episodio dentro de otro relato: en «Arrumia», segundo de sus nueve cuentos y por tanto uno de los cuatro que narró Nicolás Henao, chamí de Balboa, un hombre baja al mundo de los Aremuko, que tienen figura de hombres pero «tenían tapado el ano» y sólo comen el vapor de lo que cocinan. Allí la operación no mata: el hombre emborracha a su mujer aremuko, le corta con una navajita de macana «un huequito», le da comida poquita, la cura, repite con cinco mujeres, y todos dicen que era médico. Está en las páginas 145 y 146.

Mauricio Pardo alinea en 1986 las denominaciones del lugar en todas las compilaciones y observa que Reichel y Chaves lo llaman /aramuko/ y /aremuko/ respectivamente; advierte además que ordenar esos mundos en un solo esquema «es sólo un artificio» y que puede que no tengan nada que ver entre sí salvo el estar por debajo del nivel humano. Vasco confronta en «Jaibanás. Los verdaderos hombres» las dos transcripciones de Río Frío y recuerda que los dohura del mundo de abajo son jaibanás y que de allá vienen el maíz y el chontaduro. Los relatos de Clemente Nengarabe Siágama traen el episodio completo con otro protagonista, y el capítulo de Vasco sobre los chamí del Garrapatas trae la cosmología de Rosa Elvira. Simone Ferrari documenta el mismo mundo entre los emberá dóbida del Chocó.

Lo que ninguna fuente dice: por qué baja el hijo de Karagabí, qué le pasa después, y si los chamí de Corozal tenían a los aramúko por inmortales.`,
    versiones: `El mismo corpus de Corozal trae el episodio dos veces con protagonistas distintos. En el relato número 2, el muchacho nacido de la pantorrilla cae en otro mundo bajo la tierra donde hay indios muy bajitos que sólo comen el humo de su comida; ellos mismos le explican «no tenemos ano», él contesta «eso yo puedo arreglar», y los chuza con un palo de chontaduro. Ahí el resultado es mixto: «muchos se murieron. Otros se alentaron», y le preguntan si no sabe de otro modo. Como no sabe, el cacique lo despacha montado en un animal con los ojos cerrados. En el relato número 13, el instrumento es un cuchillo, el protagonista es el hijo de Karagabí y no queda nadie vivo.

Entre los chamí de Purembará, Mistrató y Pueblo Rico, el jaibaná Clemente Nengarabe Siágama narró el episodio con un tercer reparto: la gente de abajo se llama Dojura, duerme de día, caza y roza de noche, y de la comida «no más aire comían, la carne botaban pa' fuera»; son ellos quienes piden la operación tras espiar al visitante; el instrumento es un machete; muere un solo muchacho, que tenía una sola tripa gruesa por la que sólo salió viento; y el operador se va con el pretexto de traer una yerba y no vuelve. El vocabulario del propio narrador define Dojura como «de do = río y jura = contrario. Habitante del mundo de abajo», lo que empareja el nombre con el dohurá de Río Frío.

El motivo de esa huida lo da otra voz chamí. En 1990, el jaibaná Mario Restrepo Siágama le contó a Víctor Zuluaga Gómez una variante en la que el protagonista «escapó de los hombres que lo perseguían por haberle hecho el ano a un indio del mundo de abajo» y se encontró con el jefe de la Berea. Es decir: en Purembará y en Risaralda la operación fallida tiene consecuencia y persecución; en Río Frío, no.

En la versión del padre Constancio Pinto que Zuluaga transcribe, el visitante opera a un muchacho con un cuchillo, el muchacho muere y los habitantes deciden matarlo con el juego del rodadero. Entre los emberá dóbida de Boca de Jagua, Lizandro narró en 2021 que el héroe sacó el ano a punta de cuchillo y «casi la mayoría por el dolor se murieron», hasta que cambió de método y sólo rajó para abrir. La escala del daño, el instrumento y el desenlace cambian en cada testimonio, y no se pueden sumar.`,
    leccion:
      "Llamar carencia a la diferencia del otro puede ser el primer paso de un daño irreparable.",
    similitudes: `El paralelo más fuerte está dentro del mismo libro de 1945 y viene de un narrador chamí nombrado: en «Arrumia», que Nicolás Henao, chamí de Balboa, contó a Milcíades Chaves, un hombre llega donde los Aremuko, que cocinan tatabro y gurre pero sólo comen el humo porque tienen tapado el ano, y allí la misma operación sale bien. Cura primero a su mujer con una navajita de macana, después a cinco mujeres más, y los hijos que nacen cerrados se los llevan para que se los corte. El episodio es el mismo y el juicio es el contrario: allí el visitante se queda, forma familia y es llamado médico.

El segundo paralelo documentado invierte el sentido de la ayuda. En su nota comparativa, Chaves copia al padre Henri Rochereau, que recogió entre los katíos de occidente de Antioquia el relato «Geru-Poto-Uarra», el hijo de la pantorrilla, y describe las tierras de Tutruica como un lugar de piedras azules y chontaduros donde «las gentes no morían ni comían», se alimentaban del vapor «y por tanto no tenían órganos de defecación»; allí, tres que cedieron a la curiosidad de comer chontaduros rogaron al extranjero que los rompiera «de resultas de lo cual murieron». Entre los emberá del golfo de Tribugá y del Sinú, Antonio María Cardona y Jairo Miguel Guerra recogieron que Tutruika «creó el mundo de los inmortales, los sin culo, llamado Armukurá», un mundo «de hombres grises, que no tienen boca ni tienen culo y son inmortales». En esas dos fuentes el cuerpo cerrado no es defecto sino condición de no morir, y la operación destruye exactamente eso.

La diferencia que conviene no borrar es que ninguna de esas dos fuentes es chamí, y que el relato de Corozal no dice que los aramúko fueran inmortales: sólo dice que se murieron.`,
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
    relatoCorto:
      "El relato número 14 de Río Frío es el más breve del corpus chamí publicado, unas setenta palabras, y es el único testimonio conocido de este episodio. Ninguna otra compilación emberá narra al hijo encerrado vivo en el tronco, el dedo afuera ni al fabricante del ataúd convertido en pájaro carpintero, de modo que no hay nada verificado con que alargarlo.",
    sourceKeys: [
      "reichel1953",
      "redAprendeMetadata",
      "chaves1945",
      "cardona2026",
      {
        key: "rojasescalera1986",
        summary:
          "Su apartado «b. Los Temblores» es el único inventario comparado de las explicaciones emberá del temblor, y contiene el paralelo exacto del dedo. En Guangul le narraron que una joven recluida demasiado tiempo en el encierro de la menarquia engordó hasta hundirse en la tierra y quedar en una cueva profunda, acostada con los brazos extendidos: «en ocasiones llega un ratón y le muerde la mano, entonces ella mueve algún dedo y la tierra tiembla». Pardo anota que «una historia casi idéntica fue recogida por Chaves entre emberás del Chamí» (p. 152). Registra también la versión de María de Betania en la que el mundo tiembla «porque Carabagí que tiene la tierra en una mano la pasa a la otra para descansar», y la del alto Sinú recogida por Pinto. Y trae, en el ciclo del hijo de la pantorrilla, al pájaro carpintero que troza la guadua por la que el héroe subía a la luna.",
        limitation:
          "Ninguna de estas versiones es la de Río Frío: en todas el causante del temblor es una mujer hundida o el propio Carabagí, nunca un hijo encerrado vivo en un árbol, y el carpintero corta una escalera, no talla un ataúd. El dato chamí es de segunda mano, tomado de Chaves. Además Pardo atribuye ese relato de Chaves a «emberás del Chamí», mientras la ficha lo clasifica —siguiendo la distinción de narradores del propio Chaves— como katío de Rafael Bailarín: la discrepancia debe resolverse yendo a Chaves 1945, pp. 152-153, y no darse por zanjada. OCR del PDF defectuoso.",
      },
      {
        key: "uribeJaibanas1985",
        summary:
          "Analiza el mito de Awena (Chaves, 1945: 152-153) como el reverso exacto de lo que este relato pone en juego: la muchacha engorda en el encierro ritual, va perdiendo la ligereza que distingue a los humanos de los seres de abajo, se hunde y «cuando se mueve allí, produce los temblores de tierra». La explicación emberá del temblor sería, entonces, el movimiento de un cuerpo que perdió su lugar. Aporta también el otro extremo del motivo del cuerpo dentro del tronco: los jenené, árboles gigantescos huecos, «cuevas de madera» donde vivían los bibidigomiá, que sacaban gente de noche para comérsela, y el jenené originario que hubo que derribar para liberar el agua.",
        limitation:
          "No comenta el relato número 14 de Reichel: no aparecen el hijo encerrado, el ataúd, el dedo afuera ni el artesano convertido en pájaro carpintero. Awena, su ejemplo, es la narración que la ficha atribuye a Rafael Bailarín, narrador katío, aunque Pardo la dé como chamí. La lectura de la «pesadez» como marcador de humanidad es un desarrollo analítico del propio Vasco, no una explicación de los narradores.",
      },
      {
        key: "kreutzercruces2001",
        summary:
          "Trae una tercera explicación chamí del temblor, distinta tanto de la de Río Frío como de la de Awena: «según los chamí, Karaví sostiene entre los tres dedos de la mano los nueve mundos (los cuatro de arriba, el del medio y los cuatro de abajo), y cuando se cansa los pasa a la otra mano, produciéndose así los temblores o los sismos». Aquí también el sismo nace del movimiento de unos dedos, pero de los de Karagabí y no de los del hijo. Añade, además, el otro relato chamí de cuerpos dentro de árboles: los burumiáes, antropófagos e incestuosos, fueron quemados vivos por Karaví dentro de los jenenés, árboles gigantes que habitaban, sin huir porque eran perezosos y dormilones.",
        limitation:
          "No narra el episodio del hijo encerrado. Los dos pasajes van entrecomillados y provienen de compilaciones anteriores (Vasco 1978, Pardo, Zuluaga 1997), no de campo propio del autor; el artículo es de enfoque jurídico-filosófico y usa la grafía Karaví. El PDF es un escaneo con OCR pobre («Carabagl», «jencn~s»).",
      },
      {
        key: "cardonaMitologia2013",
        summary:
          "Documenta, entre los emberá del Pacífico chocoano, el estatuto del árbol como continente de lo vivo: el jenené gigante es donde Genserá, custodia del agua, la esconde, y del árbol sagrado del agua brotan luego el mar, los ríos y las ciénagas. En esa misma serie, el castigo de los custodios es la conversión en animal —Genserá en hormiga negra, Jimo en lagarto, Kumbarrá en pájaro mochilero u oropéndola—, un procedimiento idéntico al que convierte al artesano en pájaro carpintero, y presentado sin premio ni castigo explícito como en Río Frío.",
        limitation:
          "No hay hijo encerrado, ni ataúd, ni dedo, ni temblor, ni pájaro carpintero: el paralelo es del motivo (cuerpo dentro del árbol; oficio convertido en ave), no del episodio. El trabajo es del golfo de Tribugá y el Sinú, no chamí. El texto es una síntesis redactada por los antropólogos, con jerarquía de dioses y nomenclatura escolar que no procede de una narración única.",
      },
      {
        key: "ferrariletteratura2025",
        summary:
          "Es el único trabajo que muestra el pájaro carpintero como personaje nombrado y variable en la narración emberá viva: al comparar dos versiones recogidas en 2022 registra que el mismo agente es «señor carpintero» para Lizandro y «carpinterito» para Graciliano, y transcribe el pasaje en que troza la guadua por la que se subía a tumbar la luna. Sirve para no tratar al carpintero de Río Frío como un detalle zoológico incidental: en el repertorio emberá es una figura que interviene sobre la madera en momentos decisivos y que cada narrador dimensiona a su manera.",
        limitation:
          "Es otro episodio y otro pueblo: el carpintero corta la escalera de Jinu Potó, no talla el ataúd del hijo de Karagabí, y los narradores son emberá dóbida de Yucal y Boca de Jagua (Chocó), no chamí. El artículo está en italiano —sólo las citas de los narradores van en castellano— y es la versión ampliada del artículo de Ferrari 2023 que las fichas ya citan.",
      },
    ],
    title: "El hijo de Karagabí encerrado en el árbol",
    mito: `Karagabí mandó a un hombre a cavar un árbol.

Le dijo que cavara el tronco por dentro, hasta dejarlo hueco como un ataúd, y que su hijo se metiera en ese árbol, pero que le quedara un dedo afuera.

El hombre cavó el árbol y el hijo se metió. Así lo dejó tapado, con el dedo por fuera.

Al hombre que hizo el ataúd, Karagabí lo volvió pájaro carpintero.

Pero el hijo quedó vivo dentro del árbol. Y cuando mueve el dedo, hay temblor.`,
    historia: `Es el último de los catorce relatos que Gerardo Reichel-Dolmatoff recogió en 1945 en la vereda de Corozal, municipio de Río Frío, Valle del Cauca, y publicó en 1953 en la Revista de Folklore. Ocupa el final de la página 165, junto a los relatos 12 y 13, y como el 13 no lleva ninguna nota al pie: el recopilador no identifica el árbol, no da el nombre del ave en emberá bedea, no propone comparación alguna y no traduce nada, porque no hay nada en lengua que traducir. Tampoco quedó el nombre de quien narró. Vale aquí su declaración de entrada: narraron en castellano, él transcribió sin cambio alguno, y no tuvo tiempo de comprender el contexto cultural de lo que recogía.

La palabra «ataúd» es del castellano de la transcripción y no autoriza por sí sola a reconstruir una ceremonia funeraria chamí; la ficha del Ministerio de Educación y la Biblioteca Nacional acredita el facsímil y el rango de páginas, y nada más.

Ninguna de las demás fuentes de la lista narra este episodio, y conviene decir qué aporta cada una y dónde se detiene. Mauricio Pardo reúne en 1986, bajo el epígrafe «Los Temblores», el único inventario comparado de las explicaciones emberá del sismo, y allí está el paralelo del dedo: en Guangul, Timbiquí, le contaron que una joven recluida demasiado tiempo en el encierro de la menarquia engordó hasta hundirse en la tierra, y que «en ocasiones llega un ratón y le muerde la mano, entonces ella mueve algún dedo y la tierra tiembla». Pardo anota que «una historia casi idéntica fué recogida por Chaves entre emberás del Chamí» y remite a la página 152 de Chaves; pero esa página es el relato «Awena», sexto de los nueve, y por el reparto que el propio Chaves declara en su página 134 pertenece a los cinco que narró Rafael Bailarín, indio katío. La atribución de Pardo no debe repetirse.

Vasco analiza «Awena» como pérdida de la ligereza que distingue a los humanos de los seres de abajo, y aporta el otro extremo del motivo del cuerpo dentro del tronco: los jenené, árboles gigantescos huecos donde vivían los bibidigomiá. Guillermo D'Abbraccio recoge una tercera explicación chamí del temblor —Karaví sostiene los nueve mundos entre tres dedos y los pasa a la otra mano cuando se cansa— tomada de compilaciones anteriores, entre ellas la de Víctor Zuluaga Gómez, donde aparece con esas mismas palabras. Cardona y Guerra documentan en el Pacífico chocoano la conversión de custodios en animales, y Ferrari documenta al carpintero como personaje nombrado en la narración dóbida viva. Ninguno registra este relato.`,
    versiones: `De este episodio hay un solo testimonio. Nadie más lo ha publicado: ni otra transcripción chamí, ni una versión katío o dóbida, ni una reelaboración escolar. Eso significa que no hay con qué corregir sus vacíos y que cada detalle depende de una sola noche de 1945 en Corozal y de una transcripción hecha ocho años después. No se sabe por qué Karagabí encierra a su hijo, qué árbol es, si el hijo consintió, ni si los chamí de Corozal contaban una continuación.

Lo que sí tiene variantes es la pregunta que el relato responde. Las explicaciones emberá del temblor son varias y no coinciden. En «Awena», que Rafael Bailarín narró a Chaves, una muchacha encerrada por su primera menstruación engorda hasta hundirse en la tierra, y desde abajo «cualquier movimiento pequeño suyo hace estremecer la tierra». En Guangul, Timbiquí, Pardo oyó lo mismo con un detalle que aquí resuena: un ratón le muerde la mano y ella mueve un dedo. María de Betania registró que el mundo tiembla porque Carabagí, que tiene la tierra en una mano, la pasa a la otra para descansar. En el alto Sinú, según Pinto, tiembla al moverse una muchacha que se hundió por comer mucho. Y en la compilación de Zuluaga, Karaví sostiene los nueve mundos entre tres dedos y los cambia de mano. En cinco explicaciones, el temblor lo produce el movimiento de una mujer enterrada o de la mano de un dios; en Río Frío lo produce el dedo de un hijo encerrado vivo por su padre.

También cambia el oficio del pájaro carpintero. En todo el ciclo del hijo de la pantorrilla el carpintero corta: troza la guadua o el palo por el que el héroe sube a la luna, y con ese nombre aparece en la versión que Zuluaga transcribe del padre Pinto, donde un truenené perfora el palo, y en las dos narraciones dóbida que Ferrari recogió en 2022, donde es «señor carpintero» para Lizandro y «carpinterito» para Graciliano. En Río Frío el carpintero no corta: es hecho, y lo hacen a partir del hombre que ahuecó la madera.

Conviene además no tomar el esquema de nueve mundos como si fuera la cuenta chamí. Procede de compilaciones que se apoyan en material katío; Rosa Elvira, maestra chamí del alto Garrapatas, sostiene tres.`,
    leccion:
      "Lo que se guarda vivo dentro de un encierro sigue moviendo el mundo que lo rodea.",
    similitudes: `El paralelo más cercano y mejor documentado es «Awena», el sexto relato que Milcíades Chaves publicó en 1945 y que le narró Rafael Bailarín, jaibaná katío: a la muchacha la encierran por su primera menstruación, se demoran en sacarla, engorda tanto que hay que desestantillar la casa, se hunde con su propio peso hasta el otro mundo, y allí abajo cualquier movimiento pequeño suyo estremece la tierra. La diferencia es doble y no se puede pasar por alto: allí el cuerpo se hunde por exceso de un rito mal medido, aquí lo encierra deliberadamente un padre; allí no hay ningún artesano ni ninguna ave, y aquí el que abre la madera queda convertido en pájaro carpintero.

El segundo paralelo está en el mismo corpus de Corozal. En el relato número 11, el agua del mundo está encerrada dentro de un árbol, el jenéne, y Karagabí reúne su gente, sus hachas y ocho arditas y trabaja ocho días para tumbarlo; al caer, la raíz se vuelve el mar y las ramas más grandes el Cauca y el Magdalena. Los dos relatos ponen vida dentro de un tronco y trabajo humano sobre esa madera, pero en sentidos opuestos: allí el árbol se abre para soltar lo que guarda, aquí se cava para retener a alguien adentro. Vasco registra además, en el mismo repertorio, los jenené huecos como «cuevas de madera» donde vivían los bibidigomiá.

Un tercer eco, más lejano, está en el Pacífico chocoano: Cardona y Guerra recogen que los custodios que niegan un bien quedan convertidos en animales, Genserá en hormiga negra, Jimo en lagarto, Kumbarrá en oropéndola. El procedimiento es el mismo que convierte al artesano en carpintero, pero allí la conversión es castigo declarado y aquí el narrador no dice si lo es.`,
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
      "ferrariJinu2023",
      "chaves1945",
      "vascoChami",
      "cardona2026",
      {
        key: "uribeemberachami1993",
        summary:
          "Trae dos narraciones chamí vivas de Jinopotabar, contadas por Rosa Elvira —maestra chamí del alto río Garrapatas (Valle del Cauca), originaria del alto San Juan— a los niños de su escuela y transcritas en el momento. En la primera, Jinopotabar enseña a los emberá a hacer lanzas y pelea contra los cangrejos, y las rayitas del lomo de los cangrejos son sus marcas. En la segunda, su madre lo concibe en la pantorrilla izquierda y nace entre los dedos del pie; la luna le revela quién mató a su madre (la mamá del tigre) y dónde está enterrada; sube a la luna en un palo de balso en noche de luna llena; cae luego al mundo de abajo, donde vive; enseñó la rocería con machete; y —dato decisivo— «su papá es Carabí, por eso él viene cuando es luna llena». Es decir: en esta versión chamí Jinopotabar es hijo de Karagabí.",
        limitation:
          "Advertencia importante: esta URL ya figura en las veintidós fichas, pero rotulada con otro título («Chamí: Literatura de Colombia aborigen, en pos de la palabra», 1978). La página sirve en realidad este capítulo, publicado en Correa Rubio (ed.), «Encrucijadas de Colombia amerindia» (ICAN, 1993) y reimpreso en «Entre selva y páramo» (ICANH, 2002). En cuanto al contenido: aquí la luna es aliada y no culpable, la madre es humana y no hay nutria, no aparecen la ballena ni el mundo sin ano, y la sistematización de los tres mundos está redactada por Vasco resumiendo lo que Rosa Elvira piensa, no citada en su voz. Son chamí de Garrapatas, migrantes desde el Chamí hace unos sesenta años.",
      },
      {
        key: "uribeJaibanas1985",
        summary:
          "Es el cotejo más detallado del ciclo anterior a Ferrari, y usa las dos grafías, «Jinú Potó o Jinopotabar». Enumera versión por versión qué cambia: quién concibe al héroe (una mujer, o un hombre fecundado por una nutria, que según el doctor Julián Cadavid sería Picario, el primer jaibaná), si la fecundación es por entre los dedos del pie y el nacimiento por la pantorrilla o al revés, con qué se enfrenta antes de la luna (ballena, ancumiá, una gran jepá, cuatro nusí, la mata de los animales unangaramiá), qué ave troza su soporte —el pájaro truenené—, cómo se llama el mundo de abajo (Armucurá, reino de Tutruicá, o tierra de los Dojura donde el día y la noche están invertidos) y de cuántas maneras distintas muere. Identifica además a los narradores de dos versiones publicadas en 1978: Pascasio Chamorro, en Catrú (Chocó), recogida por Fernando Urbina, y Clemente Nengarabe.",
        limitation:
          "Es síntesis comparativa, no transcripción: no reproduce entera ninguna de las versiones que resume, y muchas llegan de segunda mano (María de Betania, Santa Teresa, Rochereau, Pinto). La lectura estructuralista del héroe como mediador entre niveles es del autor. Mezcla en el mismo recuento versiones chamí, katío, dóbida y del istmo de Panamá, y no siempre marca a cuál pueblo pertenece cada variante.",
      },
      {
        key: "rojasescalera1986",
        summary:
          "Da la etimología del nombre en la lengua: «el de las aventuras del hijo de la pierna /jerúpotó oarra/ (/jerúpotó/: pantorrilla; /oarra/: hijo)», y lo califica como «uno de los mitos más populares entre los emberá y uno de los que se conserva en casi todas las zonas». Resume la secuencia mínima que Pardo encontró: nacimiento de la pierna de una mujer —o de un hombre, según la zona—, que muere al rajársele la pierna; el niño crece rápido y pregunta quién mató a su madre; le dicen que fue la luna; sube y un pájaro carpintero le troza la guadua; al caer traspasa la tierra y sale al mundo de la gente sin ano, /atau aramora/ («ano tapado»), que se alimenta con el olor de lo cocinado.",
        limitation:
          "Datos de primera mano del alto Baudó y de Guangul (Timbiquí, Cauca); lo chamí llega sólo citado de Reichel y Chaves. No transcribe ninguna versión completa: es un resumen de motivos dentro de un artículo de etnoastronomía, cuyo objeto principal son astros, fases lunares y vocabulario. No usa la grafía Jinopotabar. OCR del PDF defectuoso.",
      },
      {
        key: "ferrariletteratura2025",
        summary:
          "Registra explícitamente la serie de nombres del ciclo —«Jinu Potó, Jeru Poto Oarra, Jinu-Poto-Wuarra o Jinopotabar»— y compara motifema por motifema dos narraciones dóbida recogidas en 2022: la de Graciliano, mayor y dinamizador espiritual de Yucal (río Panguí), y la de Lizandro, de Boca de Jagua (río Chorí). Muestra qué comparten (la serpiente Je, el desafío a la luna, el pájaro carpintero, el mundo de los seres sin ano) y en qué divergen: Graciliano inscribe la muerte de la madre en los esfuerzos cosmogónicos de Ankore por estabilizar la reproducción humana, mientras Lizandro la deja como opacidad epistémica y desarrolla el deterioro de la relación del héroe con su comunidad. En nota recoge que el padre es, según la versión, nutria, murciélago, espíritu, la luna o Picario.",
        limitation:
          "Versión ampliada en italiano del artículo de Ferrari de 2023 que las fichas ya citan: aporta análisis y transcripciones nuevas, pero sobre el mismo terreno. Es dóbida del Chocó en contexto de desplazamiento forzado, no chamí, y no discute la transcripción de Río Frío. El cuerpo del texto está en italiano; sólo las citas de los narradores van en castellano.",
      },
      "ferrarimito2025",
      {
        key: "cardonaMitologia2013",
        summary:
          "Aporta una medición de vigencia que ninguna otra fuente da: en las comunidades donde los autores trabajaron (Jawa en el río Chorí, Tandó y Nuquí arriba, Yucal en el Panguí), «los mitos y leyendas más populares y vivos son: origen del hombre, las historias de Jinú-Potó-Warra, las de Jé o Jepá, la serpiente gigante...», mientras que Karagabí y Tutruicá «tienen poco peso» y algunos afirman que Karagabí es un dios de los katíos. Confirma que el ciclo del hijo de la pantorrilla sigue circulando como narración viva y añade una grafía más al inventario de nombres.",
        limitation:
          "No narra ninguna aventura del personaje: sólo lo lista entre los relatos vigentes. Trabajo en la costa pacífica chocoana y el Sinú, no entre chamí. El resto del artículo es una síntesis cosmogónica redactada por los antropólogos, en parte a partir de un texto escrito que circuló por las escuelas del Chocó, y no debe leerse como transcripción oral.",
      },
    ],
    mito: `Contaban los antiguos que la luna se brillaba mucho, que alumbraba casi como de día y que de noche no dejaba dormir a la gente. Entonces Jinopotabar, el hombre que nació de la pierna de una mujer, aborreció a la luna y le dijo: «Si no deja de brillar tanto, la voy a tumbar». Ella no hizo caso y siguió brillando.

Pidió que le cortaran una guadua. La pusieron en una olla, él se subió y le dijo: «Súbase hasta el cielo». La guadua creció y creció hasta llegar a la luna.

Arriba pelearon. La luna era como una mujer gruesa, casi tan grande como la tierra, y no se dejó tumbar. Al fin él le cogió la cara y le dijo: «Por alumbrar más, voy a dañar tu ojo», y con las uñas se los dañó. Por eso ya casi no brilla.

Abajo la gente le envidiaba haber subido. Él pidió que esperaran, que al bajar él mismo cortaría la guadua, pero la cortaron, y quedó sentado en la luna con hambre. Dijo «mojaupuda», lana de balso, y se brincó, pero el viento lo devolvió al puesto de la luna. Dijo entonces «monpará», piedra, y cayó disparado, traspasó la tierra y fue a dar al otro mundo de abajo.

Allá vive otra gente, que duerme de día y sale a cazar y a rozar de noche: los Dojura. Lo recibieron y le pidieron que se quedara cuatro días. Bajaban olladas llenas de carne de monte, zaino, venado, pero cuando comían no más aire comían y la carne la botaban para fuera. Él dijo que no comía ese viento, y le sirvieron carne.

Más tarde salió a hacer sus necesidades y un muchacho lo siguió y lo vio. Volvió a la casa y le rogó a su padre que le pidieran al forastero que los curara. Un mayor se lo pidió.

Antes de contestar, Jinopotabar preguntó por dónde se iba hasta los vecinos, y le indicaron todo: atravesar la cordillera, que al otro lado vivía alguien con mucho remedio. Entonces dijo que podía curar, pero que necesitaba una yerbita de aquella montaña alta, y señaló el mismo camino que le habían enseñado.

Le dijeron que curara primero. Trajeron un muchacho, lo puso en cuatro patas y lo chuzó por detrás con un machete. Le abrió un hueco: tenía una sola tripa gruesa, como de un brazo de larga, y apenas se rompió salió aire no más, y cayó muerto sin respiración.

Jinopotabar se fue corriendo por el camino y les dijo: «Aguarden, mijitos, yo me voy ahora ligerito a traer remedio». No volvió.

Pasó la montaña y en un derrumbe se encontró con un pescador que le dio posada y echó al caldo, como si fuera maíz, pura berea. Él no comió. El otro lo invitó a rodar por el volcán a ver quién llegaba primero, y se tiró él, se despedazó en el río y volvió a subir armando su cuerpo. Cuando se tiró de nuevo, Jinopotabar corrió.

Llegó donde Chokorró, la gallineta, y le contó que aquel hombre quería matarlo. Ella lo escondió debajo de su banquito y se sentó encima con un sentadero en la mano. El perseguidor llegó a palos, ella le dio en la espalda y lo despedazó, y su cuerpo quedó hecho berea, condenado a vivir en el hueco de un palo para que la gente lo tumbe y haga velas. Sus pedazos se fueron como moscos a un palo grueso.

Chokorró le dio carne de tatabra y le dijo que más allá vivía Surrú, la tórtola, y que de allí ya quedaba cerca su tierra. Durmió donde Surrú y madrugó. A las doce en punto quedó como loco, y al abrir el ojo vio su propio chorro y su casita, y oyó hablar a su familia. La mujer se asustó y le preguntó de dónde venía. Él dijo que estaba muy perdido.`,
    historia: `Esta narración la contó el jaibaná Clemente Nengarabe Siágama, nacido en Purembará, Risaralda, y durante décadas gobernador del grupo chamí del alto San Juan, en los municipios de Mistrató y Pueblo Rico. Se titula «Jinopotabar en la luna y en la tierra de abajo». La recogió Luis Guillermo Vasco Uribe y se publicó en 1978 dentro de un volumen de Colcultura sin el nombre del narrador. Al republicarla en su sitio, Vasco explica que le resultaba obvio que los relatos «deberían aparecer a su nombre, siendo mi papel el de simple recolector», que no lo fue para el editor y que «fue impensable que un indio apareciera como autor», y aprovecha «para devolver a Clemente la autoría de estos relatos». Esa restitución es parte del documento y hay que sostenerla. La narración es en castellano; la página no está fechada ni paginada.

El vocabulario que cierra la serie es del propio narrador y define las palabras que el relato usa: «Jinopotabar: Héroe cultural. De hinopitu = pantorrilla»; «Dojura: De do = río y jura = contrario. Habitante del mundo de abajo»; «Mojaupuda: Lana de balso»; «Monpará: Piedra»; «Chokorró: Gallineta de monte, especie de perdiz»; «Surrú: Tórtola arrulladora, codorniz». Eso desmiente que «Jinopotabar» sea una castellanización sin respaldo: está en boca de un narrador chamí nombrado y con etimología dada por él.

El nombre sí aparece en la transcripción de Río Frío de 1953, pero no para este héroe. En el relato número 12, página 165, Karagabí hace cortes en una palma barrigona y de allí sale mucha gente que no duraba, que se moría cuando la picaba una hormiga, y cuyas mujeres «no criaban sus hijos en el vientre sino en la pantorrilla y por eso los llamaban: híno-pota uára», que Gerardo Reichel-Dolmatoff glosa «Hijos de la Pantorrilla» y sobre los que especula, en la nota 38 y por su cuenta, una relación con la deformación artificial de las pantorrillas entre pueblos karíb. Es decir: en Corozal el nombre designa a una humanidad fallida, no a un héroe. La narración de Río Frío emparentada con este ciclo es el relato número 2, cuyo protagonista no recibe nombre y que el sitio conserva aparte.

Las demás fuentes aportan por partes. Mauricio Pardo da la etimología en lengua, /jerúpotó oarra/, y dice que es «uno de los mitos más populares entre los emberá y uno de los que se conserva en casi todas las zonas». Vasco, en «Jaibanás. Los verdaderos hombres», enumera qué cambia versión por versión. Su capítulo sobre los chamí del alto Garrapatas transcribe dos narraciones que Rosa Elvira, maestra chamí originaria del alto San Juan, contó a los niños de su escuela. Simone Ferrari compara dos narraciones dóbida recogidas en 2021 y 2022 en Yucal, río Panguí, y Boca de Jagua, río Chorí, a Graciliano y a Lizandro, y depositó las transcripciones completas en acceso abierto. Cardona y Guerra constatan que el ciclo sigue vivo en el Pacífico chocoano.`,
    versiones: `Ninguna versión de este ciclo coincide con otra, y la primera divergencia está en por qué el héroe sube a la luna. En Purembará, Clemente Nengarabe Siágama dice que la aborreció porque brillaba como el sol y no dejaba dormir a la gente, y que le dañó los ojos con las uñas y por eso ya casi no brilla; la guadua no la corta ningún ave, la cortan los vecinos por envidia mientras él está arriba. En Río Frío, el joven sube por una escalera de guaduas amarradas a matar a la luna porque le dijeron que ella había matado a su madre, y es el pájaro carpintero quien casi le troza la escalera. En el alto Garrapatas, Rosa Elvira cuenta lo contrario: la luna es aliada, le revela de noche que a su mamá la mató la mamá del tigre y dónde está enterrada, y él sube en un palo de balso en noche de luna llena.

También cambia el nacimiento. En Río Frío una nutria abraza la pierna de un pescador, al mes la pantorrilla revienta, nace el niño y muere el hombre. En Rosa Elvira, la madre lo concibe en la pantorrilla izquierda y él nace por entre el dedo gordo del pie y el siguiente. En la versión que Víctor Zuluaga Gómez transcribe del padre Constancio Pinto bajo el nombre «Jiropotuarra», vuelve la nutria y el padre pescador; allí el héroe planta un ciprés que crece al conjuro de su voz, un truenené se lo perfora, él se vuelve liviano como mojaubuda y después pesado como la piedra azul, y cae en el mundo de Tutriaka. Zuluaga anota que en algunas versiones los nacidos de la pantorrilla son gemelos, y que en la variante de María de Betania los dos mueren y de sus cuerpos salen los insectos chupadores de sangre.

El mundo de abajo y lo que allí ocurre cambia con cada narrador. En Nengarabe son los Dojura, comen aire, el instrumento es un machete y muere un solo muchacho. En Río Frío son indios bajitos que comen humo, el instrumento es un palo de chontaduro y mueren muchos, pero otros se alientan. En Pinto son chontaduros y vapor, y el muchacho operado muere. Entre los dóbida, Lizandro narró en 2021 que sacó el ano a punta de cuchillo y que casi la mayoría murió de dolor, hasta que cambió de método.

La huida tiene motivo en una sola fuente, y es chamí. En 1990, el jaibaná Mario Restrepo Siágama le contó a Zuluaga que «cuando el santo escapó de los hombres que lo perseguían por haberle hecho el ano a un indio del mundo de abajo, se encontró con el jefe de la Berea», que lo invitó a comer pescado con berea y a tirarse por un rodadero, y que una abuela lo escondió, cogió a palos al perseguidor y lo condenó a producir berea. Es el mismo encadenamiento que Nengarabe narra sin nombrar la causa.

Un punto último, que la separación entre este ciclo y el hijo de Karagabí no resiste: Rosa Elvira, narradora chamí, dice de Jinopotabar que «su papá es Carabí, por eso él viene cuando es luna llena», y coloca en el mundo de abajo a los dojura, a Tutruica y a Jinopotabar juntos.`,
    leccion:
      "Una fuerza que no se mide destruye igual cuando quiere ayudar que cuando quiere vengarse.",
    similitudes: `El paralelo interno más directo es el relato número 13 de Corozal, donde el hijo de Karagabí baja donde los aramúko dohurá, que comen sólo el jugo y no defecan, les corta las nalgas con un cuchillo y los mata a todos. Es el mismo episodio con otro protagonista, otro instrumento y ningún sobreviviente, y sin la persecución ni la huida que aquí lo siguen. El otro paralelo interno es el relato número 2 del mismo corpus, el del hijo de la nutria: allí el héroe entra en el vientre de una ballena, deja viva la mitad de los animales para que no se acaben en el mundo, cae al mundo de abajo, vuelve montado en un venado y muere picado por una avispa.

Fuera del corpus chamí, el paralelo mejor documentado es el relato katío «Geru-Poto-Uarra», el hijo de la pantorrilla, que el padre Henri Rochereau recogió en el occidente de Antioquia y que Milcíades Chaves cita en 1945: el muchacho cae con el árbol a las tierras de Tutruica, tierras planas sembradas de chontaduros y con piedras azules de amolar, donde «las gentes no morían ni comían» y se alimentaban del vapor de los chontaduros cocidos. Comparte con Purembará la caída al mundo de abajo, el chontaduro y el cuerpo cerrado, y se separa en el desenlace: allí son tres los que piden ser abiertos, y mueren.

El tercer paralelo es contemporáneo y de otro pueblo emberá. Entre los dóbida del Chocó, Graciliano y Lizandro narraron en 2021 y 2022 un ciclo que comparte la serpiente, el desafío a la luna, el pájaro carpintero y el mundo de los seres sin ano, y que difiere en el juicio: uno subraya la función reguladora del héroe y el otro las consecuencias de no poder controlar su propia fuerza. La coincidencia de episodios no autoriza a tratar estas narraciones como una sola: cambian la lengua, el territorio, los nombres y la evaluación moral del protagonista.`,
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
      {
        key: "gomezMitos1997",
        summary:
          "Es la publicación original de la versión que la ficha cita de segunda mano. Zuluaga escribe: «La versión más conocida en el Chamí sobre el origen del agua, en donde el personaje principal es un jaibaná, la obtuve del indígena Jaime Wasorna en el año de 1991, indígena que vivía en la vereda de Similitó», y sitúa los hechos en Jeguadas, en la hondonada llamada «La Batea». El texto íntegro trae los gusanitos pintados recogidos bajo el aguacero, la totuma, el cantarito, el hoyo junto a La Batea, el «arreo» cantando jais desde Jeguada por Jebanía y Geté hasta el Agüita y el San Juan, y las tijeras —cangrejos gigantes— puestas donde el Tatamá se junta con el San Juan, que dejan pasar a las jepás sin delito y cortan en tres a la culpable. Además Zuluaga compara su versión con la que Vasco recogió de Clemente Nengarabe, donde el cangrejo se coloca en un sitio llamado Burité, y anota que cerca de Jeguadas hay una quebrada llamada Sikuepa, «sitio de cangrejos».",
        limitation:
          "Corrige dos datos que la ficha da por buenos: el narrador Jaime Wasorna vivía en la vereda Similitó, no en Santa Cecilia, y la publicación es de 1997, no de 1991 —1991 es el año de la recolección—. Zuluaga no conserva el audio ni publica el original en emberá bedea: es su propia transcripción en castellano. El PDF del repositorio es un escaneo sin capa de texto y el sitio exige pasar una verificación antirrobot.",
      },
      {
        key: "gutierrezpensamiento2017",
        summary:
          "Recoge de la mayora Guillermina Gutiérrez Arcila (2017) un desenlace distinto para la boa: el hijo de la pantorrilla va venciendo a las madres de los animales —monstruos, pescados enormes, cangrejos descomunales— dejando siempre una pareja para que la especie no se acabe, y «un día peleó con una culebra, la boa gigante y sagrada, que, vencida por el hijo de pantorrilla, se deshizo en el agua de todos los ríos y hace posible que podamos vivir en la tierra». Es la formulación más explícita hallada de la ecuación que esta ficha necesita: la jepá vencida no desaparece, se convierte en los ríos. Y el cangrejo descomunal está entre sus adversarios, como las tijeras del relato de Jeguada.",
        limitation:
          "No nombra Jeguada, Jebanía, Geté ni el San Juan, y no hay jaibaná que críe al animal en recipientes: el que la vence es el héroe, no un consejo de caciques, y no hay juicio ni castigo diferenciado entre jepás con delito y sin delito. El relato llega resumido por el autor en dos párrafos, dentro de un trabajo de grado en filosofía, y su marco alinea a Karagabí con el Dios cristiano.",
      },
      {
        key: "cardonaMitologia2013",
        summary:
          "Al inventariar qué está vivo y qué se está perdiendo en la tradición emberá, sitúa «las de Jé, o Jepá, la serpiente gigante» entre «los mitos y leyendas más populares y vivos», junto al origen del hombre y las historias de Jinú-Potó-Warra. Para esta ficha es la constancia de que el ciclo de la jepá no se limita al alto San Juan ni a Risaralda, sino que sigue narrándose en el Chocó pacífico, y que se le nombra en la misma serie que al hijo de la pantorrilla, que en las versiones chamí es justamente quien la vence.",
        limitation:
          "No transcribe ninguna versión de la jepá ni da nombres de narradores para ella: es una mención en una lista. El corpus es del golfo de Tribugá y del Chocó, no chamí, y allí la jepá no aparece ligada a Jeguada, La Batea ni a ningún juicio con cangrejos. El artículo no distingue entre Jé y Jepá ni discute las variantes regionales del episodio.",
      },
    ],
    mito: `El jaibaná o cacique que vivía antes en la vereda de Jeguada fue un día a traer leña. Mientras recogían la leña comenzó a llover muy fuerte y de pronto aparecieron unos gusanitos muy bonitos, como pintaditos. El cacique se preguntó qué animales serían y dijo: vamos a sembrar los gusanitos en una totuma con un poco de agua.

Al otro día los gusanitos amanecieron en la totuma y la totuma estaba llena de agua. Entonces los pasaron a unos cantaritos más grandes, también con un poquito de agua, y al otro día el cantarito estaba lleno. Entonces los pusieron en un hoyo que abrieron cerca de La Batea.

A los pocos meses los gusanos crecieron mucho, mucho, y se volvieron unas jepás muy tragonas, y toda La Batea quedó como una laguna grande.

La esposa del cacique trabajaba moliendo maíz para darles de comer. En un día se molía una carga de maíz. El cacique tocaba un tambor para llamarlas; a la primera tocada no salían, pero a la tercera se asomaban, y entonces les hacían bolas de maíz y se las colocaban en la boca. Después el cacique les decía que ya no había más comida y ellas metían la cabeza en el lago, porque estiraban la cabeza cuando iban a comer y la cabeza llegaba hasta la casa.

A los años las culebras crecieron bastante y el agua creció con ellas, y metieron pescado, sabaletas, y el cacique y su familia estaban muy contentos porque ya no tenían que bajar hasta el río San Juan a pescar ni ir a una quebrada lejana a traer agua.

Un día el cacique y la señora se fueron a barequear al San Juan y él les dijo a los hijos que no le fueran a molestar el tambor. Los hijos, cuando estuvieron solos, comenzaron a darle golpes, y a la tercera las jepás acercaron las cabezas hasta la casa pidiendo comida. Como no les dieron, se llenaron de rabia. Los muchachos volvieron a tocar y ellas volvieron furiosas, con las bocas abiertas, y tampoco les dieron. Una jepá cogió mucha rabia, comenzó a revolcarse, llenó toda la casa de agua y se comió todo lo que había, y a los niños también se los comió.

Un loro educado se fue a avisarle al cacique diciéndole: ehhh mii, ehh mii. Cuando llegaron no encontraron nada. El cacique, con rabia, se fue al lago con machete para que la culebra también se lo comiera y matarla desde adentro, y la molestaba desde una balsa como toriándola, pero la jepá quedó resabiada y no quiso tragárselo.

Entonces llamó a los otros jaibanás y caciques que había por allí y les dijo que había que arriar a todas las jepás del lago, porque si no se comerían a todas las familias. Se reunieron y, cantando jais, las llevaron arriando desde Jeguada hasta Jebanía y Geté, y salieron por el río Agüita hasta el San Juan. Las jepás no querían bajar por las quebradas y hubo que cantar mucho.

En el punto donde el río Tatamá se encuentra con el San Juan colocaron unas tijeras para mochar jepá, que son una especie de cangrejos gigantes. Las que no tenían delitos ni deudas pendientes pasaron sin problema. La que tenía delito, la que se había devorado a los hijos del cacique, se quedó de última porque estaba resabiada; los caciques la empujaron, pasó por las tijeras y quedó mochada en tres partes. Pero los hijos ya estaban muertos.`,
    historia: `La procedencia de esta narración estaba mal puesta en la ficha y hay que corregirla con lo que dice el propio recopilador. Víctor Zuluaga Gómez escribe, al presentarla en Mitos y leyendas de los Embera-chamí, Pereira, agosto de 1997, que la versión más conocida en el Chamí sobre el origen del agua, en donde el personaje principal es un jaibaná, la obtuvo del indígena Jaime Wasorna en el año de 1991, indígena que vivía en la vereda de Similitó. Es decir: 1991 es el año en que la recogió, Similitó es donde vivía el narrador, y 1997 es el año de publicación. La ficha decía Santa Cecilia y daba 1991 como fecha de la publicación. Santa Cecilia es, en el mismo libro, la pequeña población donde se localiza un grupo negro procedente del Chocó, no la vereda de Wasorna.

El error viene por la cadena de transmisión. Óscar Fernández Sánchez reproduce el relato completo y lo cita como Zuluaga 1991, páginas 40 a 42, refiriéndose a Dioses, demonios y brujos de la comunidad indígena Chamí, de Gráficas Olímpica, y es él quien sitúa la narración en la vereda Santa Cecilia. El texto que aquí se sigue es el de 1997, páginas 56 a 59.

Zuluaga añade dos datos de lugar. La Batea, donde el cacique abrió el hoyo, es una hondonada hoy cubierta de maleza en la que antiguamente se formó una laguna, en la parte alta del trazado que va de la vereda de Jeguada al caserío de Puerto de Oro. Y cerca de Jeguadas existe una quebrada que desemboca en el San Juan y se llama Sikuepa, que significa sitio de cangrejos.

Que hoy tres veredas lleven nombres derivados de jepá, Jebanía, Jete y Jeguada, como recuerdo de los tres hijos del cacique, es comentario de Fernández Sánchez sobre el mito, no parte de lo narrado.

La otra voz viva es la de Jhon Jairo Siágama, docente de la vereda Río Mistrató, en el resguardo unificado emberá chamí, que narró y tradujo para la Oraliteca de Risaralda una versión publicada el 3 de noviembre de 2025, grabada por Daliana Chavarro y situada en Jeguada y Alto Jebanía. En ella Jepá no es pez ni serpiente sino un ser mítico de esos ríos.`,
    versiones: `Hay tres registros chamí de esta historia y difieren en cosas que importan.

El de Jaime Wasorna, de 1991, empieza con un aguacero: los gusanitos aparecen mientras el cacique recoge leña bajo la lluvia, sin aviso previo. El de Clemente Nengarabe Siágama, que Vasco escuchó en Purembará y atribuye a lo que le contó de joven un viejo llamado Paulino Viejo, empieza con un sueño: el jaibaná Aba Bibisamá sueña un animalito que chilla entre la rastrojera, su mujer se burla, y al día siguiente lo encuentra rajando leña. En esa versión el animalito es de una cuarta, pintado de azules y rojos, y el hombre lo prueba en un cantarito para saber si se ahoga o si es jepá.

Los dos tienen tambor, pero de distinto modo. En la de Wasorna el tambor llama a varias jepás y el cacique tiene hijos que lo tocan a escondidas mientras los padres barequean oro. En la de Nengarabe el tambor es de cuero de guatín, los hijos son cuatro, el aviso lo da una lorita y el animal se traga la casa entera con ropa, cántaros, marranos y gallinas.

El desenlace se separa más. Wasorna: los jaibanás cantan jais y arrean las jepás desde Jeguada por Jebanía y Geté y el río Agüita hasta el San Juan, y las tijeras están donde el Tatamá se encuentra con el San Juan; la culpable queda mochada en tres partes. Nengarabe: el viejo compra una olla de aguardiente, canta toda la noche y llama a Antumiá, llegan unos diez hombres silbando que no tenían cuerpo de gente, arrastran al animal por encima de la cordillera y lo echan al río Anquima, de donde baja al San Juan hasta el punto Conondó, ya en el Chocó, donde llega otro río; allí se ponen tres tijeras y la culpable se corta en la mitad. Y el viejo va nombrando en voz alta los lugares: Jeguada, Jeguada, Chata, Chata, Jebanía, Jebanía, Umaca, Umaca.

Zuluaga, al comparar las dos, escribe que en la versión de Nengarabe el sitio del cangrejo se llama Burité; en la republicación que Vasco hizo del mismo relato el punto que se nombra es Conondó. La divergencia queda anotada y no se resuelve aquí.

La tercera es la de Jhon Jairo Siágama, de 2025, localizada en Jeguada, con una familia de nombres propios, Florentino y Ritalina y tres hijos, y con una definición explícita: Jepá no es pez ni es serpiente.`,
    leccion:
      "Criar en casa un poder que sólo obedece al tambor termina costando lo que más se quiere.",
    similitudes: `Entre los emberá del Chocó, en la historia de la Jepá de la laguna de Boroboro que recogieron Cardona y Guerra, la serpiente gigante también se vuelve una amenaza que hay que resolver, pero allí una poderosa chamán salva al protagonista y encierra a la serpiente. La diferencia está en el final y en quién decide: allí hay encierro y rescate; en Jeguada hay juicio, un cangrejo puesto como tijera en una confluencia y una condena que llega tarde, porque los niños ya están muertos.

En el mismo corpus chamí, el origen del agua se cuenta de otra manera en el relato de la hormiga: Gentzerá guarda el agua encerrada en la concavidad de una peña, o del árbol jenené, y Karaví tiene que derribar la puerta para que el agua se derrame y forme mares, ríos y arroyos. Allí el agua ya existe y está retenida por alguien que la mezquina. En la Jepá el agua no está escondida: crece con el animal, llena la totuma, el cantarito y después toda La Batea, y sube hasta tapar la casa cuando la culebra se enfurece.

La diferencia con Héntserá y el agua, que es la página vecina, es de la misma clase. Allí un árbol contiene el agua del mundo entero y al caer reparte mar y ríos para todos. Aquí el agua no se reparte: se queda en un lugar con nombre, La Batea, y su exceso es el problema, no la solución.

Lo propio de esta narración, y lo que no se repite en ninguna de las otras, es la cadena doméstica: un sueño o un aguacero, una totuma, un cantarito, un tambor, una carga de maíz molida cada día y una prohibición dicha a unos hijos antes de salir.`,
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
      "kreutzercruces2001",
      "vascoChami",
      "cardona2026",
      "onicChami",
      "procuraduriaChami",
      "minInteriorPlan",
      {
        key: "gomezMitos1997",
        summary:
          "Tiene un apartado titulado «El Universo» que es la fuente escrita más cercana a lo que la ficha resume: «Dachisesé, el dios preexistente, que hizo brotar a Karaví de su saliva, creó ocho mundos: cuatro superiores y cuatro inferiores», con nuestro mundo como el más bajo de los superiores, el firmamento cóncavo como un plato, Ntré encima y Armucurá —el mundo de Tutriaka— como el más alto de los inferiores; y añade que en versiones recogidas por Severino los mundos son nueve, encajados como platos de diámetro decreciente, y que Karaví los sostiene en tres dedos y provoca los temblores al cambiarlos de mano. Explica así, con nombres y cifras, de dónde sale la oscilación «ocho o nueve mundos» que la ficha señala sin poder documentar, y confirma el motivo de la saliva creadora que la puesta en escena de Pueblo Rico y Mistrató atribuye a Dachicore.",
        limitation:
          "Zuluaga no recogió esta cosmografía en el Chamí: la transcribe de la reconstrucción de Luis Fernando Vélez y de las versiones de los misioneros Severino de Santa Teresa y Constancio Pinto, hechas sobre material katío, y la nomenclatura es la de ellos (Karaví, Tutriaka, Dachisesé, Orré). Él mismo deja abierto de cuál de los dos pisos es Orré y anota que sobre los mundos «nada más sabemos ahora». No usar sus cifras como si fueran la cosmología chamí de Pueblo Rico y Mistrató.",
      },
      {
        key: "gutierrezpensamiento2017",
        summary:
          "Recoge del anciano Jaime Wazorna (10 de mayo de 2017) una cosmografía chamí de tres mundos: arriba habita el Dios universal Dachiakore, de quien se origina Karagabí, encargado de gobernar a los emberá; abajo, en el subterráneo, gobierna Tutriaka; y del enfrentamiento de esas dos fuerzas surge el mundo medio donde vive la gente. Es la fuente que ata el nombre Dachicore/Dachiakore —que la ficha solo tiene por una nota de prensa sobre una obra de teatro— a un mayor chamí nombrado, y que muestra la variante de tres pisos conviviendo con las de ocho y nueve.",
        limitation:
          "Son tres mundos, no ocho: contradice frontalmente la cifra de la puesta en escena de las sabedoras y la del libro de Zuluaga, y el propio trabajo recoge esa discrepancia sin resolverla. Aquí Dachiakore es traducido sin más como «Dios» y Tutriaka como «dios del mal», lectura cristianizada que el autor discute pero no separa del testimonio. No hay relato de creación de los mundos por el pensamiento, ni figura formada con saliva.",
      },
      {
        key: "cardonaMitologia2013",
        summary:
          "Documenta otra arquitectura del universo emberá y, sobre todo, otro reparto de la tarea creadora: Dayi-Ankoré designa a sus tres hijos —Karagabí, Tutruika y Pakoré wera— para que creen «los cinco mundos que existen», y Karagabí hace el mundo de los hombres y Nentre, Tutruika el de los inmortales sin ano (Armukurá) y Pakoré wera la naturaleza y el mundo de los jai; más adelante el mismo texto habla de «nueve mundos principales, divididos en los cuatro mundos de arriba, los cuatro de abajo y el del centro». Aporta a esta ficha el dato de que la variación de cifras no es descuido sino que convive dentro de un mismo corpus, y añade el detalle de que ese universo se genera de un salivazo de Ankoré.",
        limitation:
          "El material es de Nuquí, río Chorí y río Panguí (Chocó) y de investigaciones de los años ochenta en Chocó y Córdoba; no es chamí, y los propios autores registran que allí «Karagabí y Tutruika tienen poco peso» y que los nombres fuertes son Ankoré y Pakoré wera. El texto mezcla transcripción, síntesis del autor y glosa filosófica sin marcar los límites, y nombra fuentes orales (Baltazar Mecha, Milton Cabrera) sin transcribirlas completas.",
      },
      "rosiqueGraciaTodos2020",
    ],
    mito: `Antes de que hubiera mundos existían dos a los que nadie hizo. Uno es Dachiakore, al que también nombran Dachisesé, padre de todos, que no tuvo principio y no tendrá fin. El otro es Tutriaka, que se hizo solo y no reconoce antepasados.

De un salivazo de Dachiakore salió Karagabí. No lo sacó para tenerlo quieto: le dio un poder espiritual destinado a gobernar a los emberá, a defender su comportamiento y a enseñarles a respetar la madre naturaleza y a hablar con el padre que lo había hecho. A Tutriaka le quedó la sabiduría del daño y el gobierno de abajo.

Karagabí y Tutriaka son fuerzas opuestas y están midiéndose siempre. Del pulso entre los dos quedó, en medio, el mundo donde viven los emberá y el resto de la humanidad.

Arriba está bajía. Allí están Carabí, que es la luna y padre de Jinopotabar, y Ba, que es el trueno, y allí vive Dachiakore con los seres buenos.

En medio está egoró, la tierra, donde los emberá siembran, cazan, se enferman y se mueren.

Abajo está aremuko, que también llaman chiapera, y a ese mundo se llega por el agua. Allí vive gente distinta, los dojura, que duermen de día y salen de noche a cazar y a rozar. Allí está Tutriaka. Allí están Jinopotabar y los antepasados, y de allí se originan los jaibaná.

En el mundo de abajo están también los animales que hacen daño a las personas y los que se alimentan de sangre: culebras, alacranes, zancudos, tábanos. Y allí está la fuerza de los jais, repartida en dos energías que nunca dejan de oponerse. Cuando gana la que defiende, la tierra produce y hay prosperidad arriba. Cuando gana la otra, la tierra no da, y al mundo del medio llegan el hambre y la miseria. Muchas veces ganan las negativas, y por eso hay temporadas en que la tierra emberá no produce.

Karagabí vivió primero en el mundo de los emberá. Después subió al suyo por una guadua, y cuando estuvo arriba tumbó la guadua para que nadie más pudiera subir por ahí.

Jinopotabar sí pasa de un mundo a otro con su trabajo, porque es cure, sabio, jaibaná, y es él quien los une a todos.`,
    historia: `Esta página no transcribe un relato único: ordena lo que sobre los mundos dicen mayores chamí con nombre, fecha y lugar, y deja fuera de la narración las cuentas que vienen de otros pueblos emberá.

La columna vertebral son dos testimonios. El primero es el del anciano Jaime Wazorna, entrevistado el 10 de mayo de 2017 por Leonardo Fabio Siagama Gutiérrez en el resguardo Unificado Chamí de Pueblo Rico, Risaralda, dentro de un trabajo hecho con entrevistas abiertas y grabadora de celular: Wazorna explica la existencia de tres mundos, sitúa a Dachiakore arriba, a Karagabí gobernando el del medio y a Tutriaka abajo, y describe los jais repartidos en dos energías que se oponen. El segundo es el de Rosa Elvira, maestra chamí, esposa de Celso, que enseña en la sala de su casa convertida en salón de escuela y que en el relato publicado por Luis Guillermo Vasco en 2002 piensa que hay tres mundos y los nombra en lengua: bajía, egoró y aremuko o chiapera.

Los nombres de los dojura y la manera en que se llega abajo vienen del relato Jinopotabar en la luna y en la tierra de abajo, que Vasco escuchó de Clemente Nengarabe Siágama, jaibaná y durante décadas gobernador de los chamí de Purembará, y que republicó devolviéndole la autoría. Que Karagabí subiera por una guadua y la tumbara después lo cuenta Víctor Zuluaga, que pasó cinco años entre los chamí.

Zuluaga aporta además el arranque: para los emberá chamí existen dos divinidades preexistentes, Dachisesé y Tutriaka, y el primero creó a Karaví, que a su vez creó cuanto existe.

Lo que ninguna de estas fuentes entrega es una cosmografía cerrada. No hay un mapa chamí con distancias, puertas y número fijo de pisos, y las cuentas altas que circulan en la bibliografía no salen de estos testimonios sino de material de otros pueblos emberá, como se detalla aparte.`,
    versiones: `La cuenta de mundos es el punto donde más se ha mezclado material de pueblos distintos, y conviene separarlo.

Tres es lo que dicen los mayores chamí documentados con nombre: Jaime Wazorna en Pueblo Rico el 10 de mayo de 2017, y Rosa Elvira en el relato que Vasco publicó en 2002. Zuluaga asocia a esos tres mundos los tres niveles del tambo tradicional: abajo los animales, en medio la vida diaria, arriba el zarzo.

Ocho aparece dos veces. Una es chamí y muy breve: la obra Naveraida, llevada a escena en 2015 en emberá bedea por Alicia Guasorna, Noralba Siagama y Delfina Wazorna, de Pueblo Rico y Mistrató, con dramaturgia y dirección de Emilio Sierra, empieza diciendo que Dachicore, con su pensamiento, creó los ocho mundos y con una saliva de su boca creó a Karabi. De la obra sólo se publicó ese comienzo en una nota de prensa.

La otra es la que ha viajado más y no es chamí. Zuluaga la transcribe en 1997 anunciándola así: vamos a transcribir la versión reconstruida por Luis Fernando Vélez. Dice que sobre nuestro mundo hay cuatro mundos y debajo cuatro, que el primero de abajo es el de Tutriaka y que de otro, el de Orré, no se sabe si es de arriba o de abajo. Vélez publicó su corpus de tradición oral como Relatos tradicionales de la cultura catía, es decir emberá katío de Antioquia.

Nueve sale de ahí mismo por aritmética. Guillermo D'Abbraccio reproduce la reconstrucción de Vélez y en la misma página escribe que Karaví sostiene entre tres dedos los nueve mundos, los cuatro de arriba, el del medio y los cuatro de abajo, y que cuando cambia de mano hay temblores. La diferencia entre ocho y nueve es si se cuenta o no el mundo del medio.

Antonio María Cardona y Jairo Miguel Guerra, que trabajaron en Jawa del río Chorí, Tandó, Nuquí arriba y Yucal del río Panguí, y en otras comunidades del Chocó y Córdoba, oscilan dentro de un mismo artículo: en la narración, Dayi-Ankoré encarga a sus tres hijos los cinco mundos que existen; en el análisis, Karagabí creó los nueve mundos principales. Ellos mismos anotan que en esas comunidades Karagabí y Tutruika pesan poco y que algunos llegan a afirmar que Karagabí es un dios de los katíos.

Hay además una divergencia interna que no se resuelve: Zuluaga registra que en los mitos chamí Karaví luchó contra su padre y que el padre salió derrotado, mientras que en el testimonio de Pueblo Rico Karagabí es siervo y gobernador por encargo.`,
    leccion:
      "Un universo de pocos pisos se sostiene en el pulso de quienes pueden cruzarlos.",
    similitudes: `En la reconstrucción katía de Vélez, el mundo de abajo se llama Armucurá y se define por la inmortalidad: allí la única vegetación es la palma de chontaduro, la gente vive del olor de los chontaduros cocidos y no come ni defeca porque carece de ano. En las tres capas que describen los mayores de Pueblo Rico el mundo de abajo se define por otra cosa: por el daño, por los animales que pican y chupan sangre, y por ser el lugar de donde se originan los jaibaná. La misma planta baja, dos razones distintas para nombrarla.

Entre los emberá del golfo de Tribugá, en la mitología de Nuquí, los dioses se retiran a Nentre, el mundo azul, después de ordenar el universo y ya no vuelven a intervenir, y por eso allí no se les rinde culto ni se les levantan altares: el hombre queda a libre albedrío. En la cuenta chamí de tres mundos ocurre casi lo contrario, porque Karagabí sigue gobernando el del medio y las cosechas dependen del pulso diario entre dos energías de jais.

Dentro del corpus de Río Frío, los mundos dejan de ser un esquema y se vuelven trayecto en El hijo de Karagabí y la gente subterránea, donde el sabio baja a hacerles ano a los aramúko dohurá y los mata, y en Jinopotabar, que sube a la luna por una guadua y cae atravesando la tierra. Esas páginas narran el tránsito; esta sólo describe el escenario que ellas cruzan.`,
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
      "kreutzercruces2001",
      "vascoChami",
      "cardona2026",
      "reichel1953",
      {
        key: "gomezMitos1997",
        summary:
          "Es la única fuente que encontré con un apartado chamí dedicado al asunto: «Los animales y su origen», que abre diciendo que en casi todos los mitos emberá donde se alude a los animales se señala que ellos al principio eran otra cosa. Ordena los casos en dos grupos —quienes fueron castigados por mezquindad y quienes quebrantaron una norma impuesta por Karaví— y da ejemplos con narrador: las hormigas arrieras «eran anteriormente indios muy trabajadores» a los que Karaví condenó a trabajar sin descanso; el cangrejo «era un hombre que vivía cerca de un río»; la rana Pocoró era un hombre presente cuando Karaví derribó el árbol de Jenené; el origen del mico fue reconstruido en 1992 por los maestros chamí Rodrigo Nacávera, Benilda Nequitiragama, Ángel Arce y Adriano Siágama; y el siu, la lagartija de monte, «conocía el secreto del fuego cuando era hombre» hasta que Karaví se volvió sábalo para robárselo.",
        limitation:
          "No hay aquí un relato único del origen de los animales: son casos sueltos, y el propio libro los presenta como reconstrucciones hechas con maestros en talleres de los años noventa, no como una narración escuchada de corrido. Zuluaga es historiador y reelabora lo oído sin marcar siempre dónde acaba el narrador; algunos capítulos del volumen son del Chocó y no del Chamí. Escaneo sin capa de texto en el repositorio de la UTP: se lee por imágenes, no admite búsqueda.",
      },
      "rojasIntercambios2020",
      {
        key: "rosiqueGraciaTodos2020",
        summary:
          "Da nombre y parentesco a los dueños. Describe a Imamá-Pãkõré, «tigre-suegra», como «madre o patrona de los animales de presa del mundo de abajo», que entrega animales a los cazadores a cambio de respeto, y a oangano como dueño de los oangaramia; recoge además que en el Chocó «Vidowuandra, madre del puerco de monte, se relaciona activamente con otras madres de animales», y usa wãndra como término genérico para los dueños de los bosques. Registra también el paso en los dos sentidos: «hombres solos se convierten en animales con hábitos solitarios y grupos de hombres se convierten en manadas de cerdos salvajes». Es lo más cercano a una etnografía actual de la relación cazador-dueño.",
        limitation:
          "El trabajo es en Polines y Yaberaradó, Chigorodó (Antioquia), con población eyábida y también chamí, pero el texto no separa siempre qué dato viene de cuál: hay que citarlo como emberá de esos resguardos, no como chamí. Su objeto son los sitios sagrados y su defensa jurídica, no la narrativa, de modo que las madres de animales aparecen descritas en presente etnográfico y no dentro de un relato fechado. Tabula Rasa 36 (2020), pp. 201-222; leído por la copia de Redalyc porque el sitio de la revista interpone una verificación.",
      },
      {
        key: "campoperdida2024",
        summary:
          "Documenta un relato de origen donde los animales de monte aparecen por transformación y reparto, no por creación: los blancos encierran el ganado, y cuando los indígenas cogen a las reses por la cola «se reventaba… De ahí surgieron la guagua y el conejo, que se escaparon para el monte»; «cuando cogían las vaquitas de la cola y estas se reventaban, se volvían guaguas que quedaron en el monte». La narradora cierra con la frase que reordena la lección: la riqueza indígena «es el animalito», y «si quiere comer cerdo, vaya mate guagua». Sirve para mostrar que en el corpus emberá el origen de las especies puede ser al mismo tiempo una explicación de la desigualdad.",
        limitation:
          "El mito se recogió en octubre de 2018 en lengua emberá eyábida, de Arelys Domicó, en Jaikerazabi (Mutatá, Antioquia), y la narradora procedía del alto Sinú: es katío, no chamí, y el propio artículo contrapone eyábida y chamí como situaciones distintas. Es además un relato marcado por la colonización y el desplazamiento —aparecen Cristóbal Colón, los blancos, «Diosito»—, de modo que no puede usarse como estrato antiguo. Antípoda 55 (2024), pp. 65-87.",
      },
      {
        key: "cardonaMitologia2013",
        summary:
          "Expone la versión en que los animales aparecen como custodios y no como criaturas: «al inicio del mundo los animales eran como los hombres y los humanos podían hablar con ellos»; Pakoré wera entrega a los animales los elementos de la vida para que los administren, «Genserá fue custodia del agua, Jimo del fuego y Kumbarrá de las semillas». Cuando la gente abusa, los custodios niegan y esconden, y los dioses los castigan convirtiéndolos: «A genserá la volvieron hormiga negra… a Jimo lo volvieron lagarto… y a kumbarrá, pájaro mochilero u oropéndola». Añade que la primera generación humana fracasó y «los dioses los convierten en animales», y ejemplos de etiología menor: por qué la tortuga chivigí tiene hundido el caparazón y por qué el mono cotudo Amisurrá tiene la nariz chata.",
        limitation:
          "Trabajo de campo de 2012 en el golfo de Tribugá, costa pacífica chocoana, con refuerzo de investigaciones de los años ochenta en Chocó y Córdoba: emberá del Pacífico, no chamí, y los autores advierten que «Karagabí es un dios de los katíos» en la zona donde trabajaron. El método declarado —notas rápidas y memorización— y la ausencia de narrador identificado obligan a citarlo como síntesis de los investigadores, no como versión. Bioetnia 10 (2013), pp. 88-94.",
      },
      {
        key: "rojasescalera1986",
        summary:
          "Sitúa el origen de los animales en el tiempo, no en un relato: en la época de los seres creadores «los mitos cuentan que los animales eran personas y por distintas circunstancias fueron reducidos a su estado actual, casi siempre por desacatos a Karagabí, el creador de los hombres», y los tiempos actuales empiezan con la ruptura del contacto con ese mundo superior. Precisa además que Karagabí y Tutruicá quedan confinados a la época de los orígenes y que los emberá no les rinden culto: con quien se trata, por medio del jaibaná, es con los espíritus, entre ellos «algunos dueños de especies» del nivel inferior. Da la jerarquía que la ficha necesita para no convertir a Karagabí en un dios providente.",
        limitation:
          "Los datos son del alto Baudó (Santa María de Condoto, Miácora, La Felicia), recogidos entre 1980 y 1983, con algún material comparativo de Ituango y el Urabá antioqueño: emberá de río, no chamí. Es un informe de etnoastronomía, de modo que el origen de los animales aparece en una frase de contexto y no como investigación. Maguaré 4 (1986); PDF escaneado con OCR defectuoso.",
      },
    ],
    mito: `Los primeros que hubo, antes que los catíos, se llamaban burumiáes. Tenían mucho de animales, pero se hacían entender. Comían carne humana, y Karaví, irritado con ellos, hizo que los quemaran vivos dentro de los jenenés, los árboles gigantes que habitaban. No huyeron del fuego porque eran muy perezosos y dormilones, y el fuego los sorprendió aletargados adentro.

Entre los burumiáes estaban los carautas, que tenían uniones carnales entre padres e hijos y entre hermanos y hermanas. Por eso Karaví los castigó convirtiéndolos en animales. Algunos se enfurecieron por tamaño castigo, y esos quedaron convertidos en animales feroces, tigres y leones. Los que nada dijeron quedaron convertidos en animales mansos, que no hacen daño. Así se repartió el monte entre los que muerden y los que huyen.

Después vinieron los que se quedaron con lo que no era suyo. La hormiga negra y grande, la que llaman Gentzerá, era antes una indígena que guardaba en secreto el sitio donde había agua. Cuando Karaví le pidió agua, ella no quiso revelar el secreto, y él la convirtió en hormiga conga. El agua estaba guardada en un árbol jenené, y cuando por fin lo tumbaron su raíz se volvió el mar y sus ramas quebradas los ríos grandes.

El siu, la lagartija de monte, conocía el secreto del fuego cuando todavía era hombre, y no lo daba. Karaví se volvió sábalo para entrar donde él y robárselo, y desde entonces el fuego es de la gente y el siu anda escondido entre las hojas.

Las hormigas arrieras eran antes indios muy trabajadores, y Karaví las condenó a trabajar sin descanso: por eso se las ve siempre cargando hoja, de día y de noche, sin parar nunca.

El cangrejo era un hombre que vivía cerca de un río, y allí se quedó, metido entre las piedras de la orilla.

La rana Pocoró era un hombre que estaba allí cuando Karaví tumbó el árbol de Jenené, del que salieron las aguas.

Así, casi todos los animales fueron antes otra cosa. El que es feroz lo es porque protestó, el que carga sin descanso lo hace porque fue laborioso, el que se esconde en la piedra o debajo de la hoja se esconde desde que dejó de ser gente. Cada uno lleva en el cuerpo la forma de aquello que hizo o que negó, y por eso en el monte se reconoce todavía quién fue cada cual antes de quedar con esa figura.`,
    historia: `No existe una narración chamí titulada «El origen de los animales» que cuente de corrido el nacimiento de todas las especies, y ninguna de las catorce transcripciones de Río Frío de 1953 la trae. Lo que sí existe es un apartado con ese nombre, «Los animales y su origen», en «Mitos y leyendas de los Embera-chamí» de Víctor Zuluaga Gómez, publicado por la Universidad Tecnológica de Pereira en 1997 con maestros y jaibanás chamí de Risaralda nombrados uno por uno. De allí vienen los casos que arriba se narran: las hormigas arrieras, el cangrejo, la rana Pocoró y el siu, la lagartija que conocía el secreto del fuego. El origen del mico lo reconstruyeron en 1992 los maestros chamí Rodrigo Nacávera, Benilda Nequitiragama, Ángel Arce y Adriano Siágama, y ese dato dice tanto del relato como del modo en que se rehízo: en taller y en los años noventa, no escuchado de corrido.

El pasaje de los burumiáes y los carautas lo cita Guillermo D'Abbraccio Kreutzer de la página 25 de ese mismo libro, en un artículo que la lista de esta página titula «La mitología Chamí: el origen» pero que se llama «Los cruces del sendero. Cosmovisiones y sistema jurídico de los emberá-chamí». D'Abbraccio conserva también la versión que el jaibaná Avelino Nacávera, de la vereda de Kundumí, dio a Zuluaga en 1996 sobre Gentzerá y el agua. Y atribuye a Patricia Vargas, no a los narradores, dos cosas que conviene no confundir con el relato: la clasificación de los convertidos en dos grupos, los castigados por mezquindad y los que quebrantaron una norma de Karaví, y la lectura de que los burumiáes y carautas serían, en la mitología emberá, los cunas.

El nombre del creador cambia de una tradición escrita a otra: Karaví en Zuluaga, Karagabí en Reichel-Dolmatoff y en Chaves.

Las demás fuentes de la lista no son chamí y hay que decirlo donde se usan. Mauricio Pardo, con emberá del alto Baudó, sostiene que en la época de los seres creadores los animales eran personas «reducidos a su estado actual, casi siempre por desacatos a Karagabí», y en su trabajo de 2020 en el Chocó describe a los uãdra o madres de los animales, que no son de la variante chamí. Rosique, Gálvez, Turbay y sus coautores documentan en Chigorodó a Imamá-Pãkõré como madre de los animales de presa. Antonio Cardona y Jairo Guerra trabajaron en el golfo de Tribugá. Ninguno de ellos narra un origen chamí.

Lo que falta: no hay grabación en emberá bedea ni narración chamí de este asunto registrada en contexto, y el libro de Zuluaga sólo se consulta como escaneo sin capa de texto.`,
    versiones: `Las dos maneras chamí de contar el origen de los animales no son la misma, y no conviene fundirlas. Una convierte a un pueblo entero de una vez: los burumiáes que comían carne humana arden dentro de sus árboles, y los carautas quedan repartidos entre fieras y mansos según cómo reaccionaron al castigo. La otra explica una especie por vez, y siempre por algo negado: el agua que Gentzerá escondió, el fuego que el siu no daba, el trabajo que no cesa de las arrieras. La primera es una historia del mundo, la segunda es una colección de casos.

Los nombres oscilan. Gentzerá en la versión que Avelino Nacávera dio a Zuluaga en 1996, Genserá y Genzerá en el trabajo de Cardona y Guerra en el Pacífico, Héntserá en la transcripción de Río Frío de 1953, donde no es una india mezquina sino el único dueño del agua y no hay conversión ninguna: allí el árbol jenéne cae y su raíz se vuelve el mar y sus ramas el Cauca y el Magdalena, sin que nadie quede convertido en hormiga.

En el Pacífico chocoano la misma escena está organizada como un sistema: Pakoré wera reparte los elementos entre custodios, Genserá el agua, Jimo el fuego y Kumbarrá las semillas, y cuando los tres niegan lo que guardan los dioses los vuelven hormiga negra, lagarto y pájaro mochilero. El apartado chamí conserva a dos de esos tres, la del agua y el del fuego, pero no la tríada ni el reparto inicial.

Una conversión masiva aparece también en Chaves, pero es katío: en «La mujer de Karagabí», que narró Rafael Bailarín, Karagabí reúne a todos los indios, los hace gritar, le dice al capitán Imaná que será tigre y lo manda al monte, y convierte en animales a todos los demás, dejando sólo a los que no eran pícaros. No es chamí y no debe leerse como tal.

Y hay un origen que no es castigo ni creación. Arelys Domicó, emberá eyábida, narró en Mutatá en 2018 que el ganado encerrado por los blancos se reventaba cuando los indígenas lo cogían de la cola, y que de ahí salieron la guagua y el conejo, que se escaparon para el monte. Es un origen moderno, atravesado por la colonización, y no puede tomarse como estrato antiguo.`,
    leccion:
      "Cada especie del monte guarda la memoria de una negativa, un exceso o una orden desobedecida.",
    similitudes: `El paralelo más próximo y mejor identificado es emberá katío: «La mujer de Karagabí», narrada por Rafael Bailarín a Milcíades Chaves en 1945. También allí los primeros indios se vuelven animales por orden del creador, y el jefe, Imaná, se vuelve tigre. La diferencia es de causa y de escala: en el relato katío la conversión es el remate de un juicio matrimonial y termina en un diluvio del que se salvan un indio y una india en una canoa, mientras que en el apartado chamí el castigo cae sobre pueblos enteros por antropofagia e incesto y no hay canoa ni pareja salvada.

El segundo paralelo es emberá del Pacífico, en el relato de los custodios que recogieron Antonio Cardona y Jairo Guerra en el golfo de Tribugá: Genserá, Jimo y Kumbarrá esconden el agua, el fuego y las semillas y son convertidos en hormiga negra, lagarto y oropéndola. El parecido con Gentzerá y con el siu es literal, pero allí la negativa es de custodios que administraban un bien común y aquí es de personas que guardaban un secreto para sí.

Conviene marcar una diferencia dentro del propio corpus de Río Frío. En el relato del hijo nacido de la pantorrilla aparece la unangaramia, «la mata de los animales», y el protagonista deja de matarla a la mitad para que no se acaben los animales del mundo. Eso no es un origen: las especies ya existen y lo que se narra es su conservación. Son dos asuntos distintos y las páginas no deben confundirlos.

Muchos pueblos cuentan que los animales fueron antes gente. Lo propio de este corpus no es la idea, sino la contabilidad: cada figura conserva el rastro de un acto, y la ferocidad o la mansedumbre de una especie se explica por lo que dijo o calló quien la habitó.`,
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
      "kreutzercruces2001",
      "camachoPalabras2025",
      {
        key: "uribeFloresmiro1986",
        summary:
          "Contiene la formulación más nítida del punto que esta página defiende: clasificar los relatos por el tipo de protagonista no funciona «dado el papel que las transformaciones de unos seres en otros y la antropomorfización de la naturaleza juegan en el pensamiento emberá». Vasco añade que en el mito «los personajes, sus actuaciones y condiciones de vida son sólo materializaciones narrativas de conceptos muy abstractos y fundamentales», y que los mitos «no se fijan, no cobran forma definitiva… existen en un proceso de permanente creación y recreación en cada narrador, en cada circunstancia». Es un argumento interno al debate colombiano para sostener que la metamorfosis no es un adorno ni un castigo, sino la forma en que el relato piensa.",
        limitation:
          "Son dos páginas de reseña (Boletín Museo del Oro 16, 1986, pp. 92-93), no un estudio de las transformaciones: no analiza ningún caso. Comenta una colección recogida en el alto Baudó, emberá de río, no chamí. Y su reparo de fondo —que tratar el mito como «literatura» lo «desnaturaliza»— es una posición en polémica con el compilador, no un consenso: hay que citarla como postura, sobre todo porque la ficha chamí sí trabaja con una fuente contemporánea que habla de oraliteratura.",
      },
      {
        key: "gomezMitos1997",
        summary:
          "Aporta el único intento de tipología de las metamorfosis hecho sobre material chamí de Risaralda: los casos se ordenan entre quienes fueron «castigados por su mezquindad» y quienes «sufrieron el castigo por quebrantar alguna norma impuesta por su dios Karaví», con un epígrafe expreso, «Otros hombres y mujeres convertidos en animales». Los ejemplos son concretos y variados: indios trabajadores vueltos hormigas arrieras y condenados a no descansar; una mujer vuelta lechuza «que chilla así: kua, kua, kua»; la hija de Karaví vuelta serpiente por tener relaciones con un indio a espaldas de sus padres; un hombre que «se convirtió en un pequeño gusanito que se llama viringo y se escondió en un grano de maíz»; un indio que queda atrapado en la roca y «se convirtió en oro»; y el propio Karaví que se vuelve sábalo para robar el fuego a la lagartija siu.",
        limitation:
          "Zuluaga es historiador, no etnógrafo del relato: reelabora lo oído y no siempre separa su prosa de la del narrador, y buena parte del material procede de talleres con maestros de los años 1990-1992 más que de narraciones escuchadas en contexto. La tipología castigo/mezquindad es del autor y arrastra un marco moral que la ficha ya se propone no repetir: hay que citarla como lectura de Zuluaga, no como criterio chamí. El volumen mezcla además capítulos del Chocó con los del Chamí. Escaneo sin capa de texto en el repositorio de la UTP.",
      },
      {
        key: "rojasescalera1986",
        summary:
          "Registra metamorfosis de escala y de cuerpo con nombre y lugar, que es justo lo que esta página inventaría. La mujer infiel de Karagabí es castigada «convirtiéndola en /barákoko/ (pájaro luna, sacaparado o gallina ciega; Nyctibius griseus)» y condenada a mirar eternamente la luna que Tritukú lleva en la cabeza como flor blanca. En San Matías (Ituango) una vieja «se convirtió en un tigre grandísimo y se ahogó», y dos palmas de don pedrito caídas en direcciones opuestas se vuelven el sol y la luna. Entre los emberá del Urabá antioqueño sol y luna son dos hermanos «convertidos… por haber incurrido en incesto». Y en el marco general: los animales eran personas «reducidos a su estado actual… por desacatos a Karagabí».",
        limitation:
          "El grueso del material es del alto Baudó, con casos de Ituango y Urabá: emberá de río y de montaña antioqueña, no chamí. Lo chamí entra solo en un relato que Pardo cita de Reichel sobre gente del sol y de la luna, tomado de segunda mano. Como es un informe de etnoastronomía, las transformaciones que registra son las ligadas a astros y aves, no el abanico completo. Maguaré 4 (1986); escaneo con OCR defectuoso, sobre todo en las transcripciones fonéticas.",
      },
      {
        key: "riosAdaza2020",
        summary:
          "Ofrece una manera de leer el cambio de cuerpo sin reducirlo a premio o castigo: «el cuerpo es energía y espíritu, y puede transformarse y ser transformada en la interconexión energética con las plantas, los animales o con la raíz del río: como castigo, voluntad propia o consecuencia ecogénica». Los tres motivos en una sola frase es exactamente la distinción que la página quiere sostener. Añade el caso de Do Karrá, donde la incompletud de los cuerpos «se expresa en los cuerpos de los seres creados por la divinidad Karagabí», y recuerda que en los zrõarã neburã abundan los relatos de creación, jaibanás, trueno, animales, guerras, espíritus y clanes.",
        limitation:
          "Trabajo de campo de septiembre de 2019 en Frontino, Antioquia, con êbêra eyábida del resguardo Chaquenodá, y el material de Do Karrá viene traducido de Pardo: no hay aporte chamí. El artículo compara dos mundos indígenas (murui muina y êbêra) alrededor de la noción de «discapacidad», de modo que su marco es decolonial y contemporáneo, no una descripción del sistema de transformaciones emberá. Nómadas 52 (2020), pp. 81-95.",
      },
      {
        key: "campoperdida2024",
        summary:
          "Documenta una transformación que no cabe en la casilla del castigo: el ganado encerrado por los blancos se revienta al ser agarrado por la cola y de ahí salen la guagua y el conejo, que «se escaparon para el monte». Los autores señalan además que «es en el contacto de la mujer con los animales donde estos se transforman», y leen el episodio como una operación con la que el relato vuelve inteligible la desigualdad histórica. Sirve a esta página para mostrar que en el corpus emberá hay metamorfosis modernas, producidas por el contacto colonial, y no solo un estrato de tiempos primordiales.",
        limitation:
          "El mito se recogió en 2018 en lengua emberá eyábida, de Arelys Domicó, en Jaikerazabi (Mutatá, Antioquia), con la narradora originaria del alto Sinú: es katío, no chamí, y el artículo contrapone expresamente la situación de eyábidas y chamíes. Al ser un relato atravesado por la colonización, no debe usarse para hablar de las transformaciones «antiguas» que la página inventaría. Antípoda 55 (2024), pp. 65-87.",
      },
    ],
    mito: `Karagabí tenía mujer y estaba bien enfermo. En un baile ella le dijo que fuera a tomar chicha, y él contestó que estaba muy enfermo, pero que ella sí podía ir. La mujer se arregló bien y se fue. Por la noche Karagabí pensó que iría a ver qué hacía allá, se arregló bonito y enjovenció, y llegó al baile como un forastero joven. La mujer, que no sabía quién era, se enamoró de él y conversaron hasta el amanecer. Karagabí se devolvió antes y se quedó quejándose de su dolor. Cuando ella llegó le preguntó si en el baile había habido gente forastera, y ella dijo que sí. Así lo hizo tres veces, y las tres la mandó al baile. En la tercera, cuando la mujer volvió a decir que había un joven del que nadie sabía de dónde era, Karagabí la cogió, la tiró, la arrastró y la volvió animal: una lorita que grita huakuá cuando hay luna llena.

Hímo la Iguana tenía la candela y no se la mostraba a nadie. Los indios se calentaban al sol y comían crudo, hasta que un día Hímo les dio comida cocida y ellos empezaron a pensar cómo quitársela. Un día en que Hímo salió a pescar al norte, Karagabí se fue al este y encontró un charco grande. Antes de que Hímo pudiera verlo, Karagabí se volvió un pescado grande y se escondió en el agua. Hímo lo vio y dijo que iba a cogerlo, y casi se le rompe la red. Se lo llevó a la casa junto con los pescados chiquitos, y allí el pescado grande, que era Karagabí, miraba y miraba hasta que vio dónde estaba escondida la candela. Cuando Hímo acabó de comerse los pescados chiquitos y fue por el grande, el pescado se defendió, saltó, cogió la candela y salió de la casa. A Hímo lo volvieron animal, una hormiga chiquita, y así quedó de castigo.

Otro día Karagabí mandó a un hombre a cavar un árbol para meter adentro a su hijo, y le dijo que le dejara un dedo afuera. Así lo dejó tapado. Al hombre que hizo el ataúd, Karagabí lo volvió pájaro carpintero. El hijo quedó vivo dentro del árbol, y cuando mueve el dedo hay temblor.

No todos los cambios los ordena alguien. Horchibarí, el caníbal que come brea, jugaba a rodarse por los derrumbes monte abajo, y después de rodar y rodar se volvió cristiano, es decir, tomó figura de hombre, para enseñarle el juego a su huésped. Y cuando Dumío lo mató de un golpe con su asientico, allá donde estaba él no quedó un cuerpo sino un montón de brea, que recogieron en un canasto. El mismo Dumío mataba tominejos, los cogía del pescuezo para estirarlos y se volvían zahinos grandes, y al final le mostró la yerba con que lo hacía.

También se cambia de forma sin cambiar de cuerpo. El guatín, cuando los otros animales lo esperaban junto al río para matarlo, se revolcó en un colmenar y después en las hojas hasta parecer un animal desconocido, y llegó gritando que ahí venía el animal más grande del mundo: el oso y el tigre se apartaron con miedo, y él tomó agua tranquilo y después les gritó desde una altura que era él. Y un hombre de los Siebidá, la noche en que los enemigos cayeron sobre el campamento, se disfrazó de Erubidá para vigilar, y fue el único que se salvó.`,
    historia: `Las escenas de arriba están todas en «Algunos mitos de los indios Chamí», los catorce relatos que Gerardo Reichel-Dolmatoff recogió en 1945 en la vereda de Corozal, municipio de Río Frío, Valle del Cauca, y publicó en 1953. La mujer vuelta lorita es el relato ocho; Hímo y la candela, el nueve; el hijo encerrado en el árbol y el carpintero, el catorce; Horchibarí y Dumío, el tres; el guatín disfrazado, el uno; el Siebidá disfrazado, el seis. Quienes narraron no quedaron nombrados. Dos aclaraciones del texto son del recopilador y no de los narradores: la nota que glosa «se volvió cristiano» como «tomó figura humana» y la que glosa «enjovenció» como «rejuveneció». Él mismo advierte que no tuvo tiempo de comprender el contexto cultural de lo que recogía.

Milcíades Chaves publicó en 1945, del mismo viaje, otra versión del castigo de la mujer de Karagabí, pero ésa es katío: la narró Rafael Bailarín, y Chaves declara en su página 134 que sólo los cuatro primeros de sus nueve relatos son de Nicolás Henao, chamí. En la versión de Bailarín la mujer ya se llama Barakoko, lechuza, Karagabí le abre la boca por mentirosa, vuelve pájaro obitétede al cuñado que le reclama y se queda con la cuñada. Chaves añade una nota comparativa suya donde copia, a través de Henry Wassén, la versión de fray Severino de Santa Teresa, en la que la mujer queda convertida en baracoco y canta jua, jua. Esa nota es de 1945 y es del compilador.

Mauricio Pardo le pone especie y castigo astronómico al ave: /barákoko/, pájaro luna o sacaparado, Nyctibius griseus, condenada a mirar la luna. Su material es del alto Baudó y de Ituango, no chamí. Víctor Zuluaga, que sí trabajó con maestros y jaibanás chamí de Risaralda, reúne casos que ninguna otra fuente de esta lista trae: una mujer vuelta lechuza que chilla kua, kua, kua, la hija de Karaví vuelta serpiente, un hombre vuelto gusanito viringo escondido en un grano de maíz, un indio atrapado en la roca vuelto oro, y el propio Karaví volviéndose sábalo para robarle el fuego a la lagartija siu. Su ordenamiento de los casos en castigados por mezquindad y castigados por quebrantar una norma es una lectura, y D'Abbraccio la cita de Patricia Vargas.

Alexander Yarza de los Ríos, trabajando con êbêra eyábida de Chaquenodá en 2019, formula la distinción que esta página necesita: el cuerpo puede transformarse «como castigo, voluntad propia o consecuencia ecogénica». Luis Guillermo Vasco, reseñando en 1986 la colección del alto Baudó, sostiene que clasificar los relatos por su protagonista no funciona por el papel que tienen las transformaciones en el pensamiento emberá. Son dos páginas de reseña y una postura en polémica, no un estudio de casos. La única monografía que hace de la transformación su eje, la de Sven-Erik Isacsson, no está en acceso abierto y aquí sólo consta por la reseña de Alejandro Alzate.

Falta lo esencial: ninguna de estas escenas chamí se registró en emberá bedea.`,
    versiones: `Conviene seguir una sola escena por todas sus versiones, porque es ahí donde se ve lo que cambia. Tómese el castigo de la mujer de Karagabí.

En Río Frío, versión chamí de 1945, el marido enfermo rejuvenece, va tres veces al baile como forastero, y al final la arrastra y la vuelve lorita que grita huakuá cuando hay luna llena. En la versión katío que Rafael Bailarín narró a Chaves ese mismo año, la mujer se llama Barakoko desde el comienzo, el marido se quita el vestido llagoso y la araña para dejarle señas, y al descubrirla le abre la boca y la vuelve lechuza; además vuelve pájaro al cuñado y se lleva a la cuñada. En la versión que fray Severino de Santa Teresa recogió y que Chaves copia, hay doce promesas de amor, la cara arañada, la conversión en baracoco y un canto, jua, jua, y Caragabí sube al cielo con la hermana de su mujer. Pardo, en el alto Baudó, identifica al ave como Nyctibius griseus y la condena a mirar eternamente la luna. Zuluaga, en Risaralda, tiene una mujer vuelta lechuza que chilla kua, kua, kua.

Es decir: no es el mismo pájaro ni el mismo grito. Lorita, lechuza, sacaparado. Y el motivo de la conversión se desplaza de la mentira a la infidelidad según quién narre.

La dirección del cambio también varía y no siempre va de persona a animal. En Río Frío el creador se transforma a sí mismo dos veces, en joven y en pescado grande, y en Risaralda se vuelve sábalo; un ser mítico toma figura de hombre para jugar; unos tominejos estirados del pescuezo se vuelven zahinos; un cuerpo muerto se deshace en un montón de brea. Frente a eso, en la lista de Zuluaga predominan los castigos definitivos, sin retorno.

Y hay dos escenas que parecen transformaciones y no lo son: el guatín cubierto de miel y hojas y el vigía Siebidá disfrazado de enemigo. El mismo corpus que narra metamorfosis sabe narrar también su imitación, y no conviene contarlas juntas.`,
    leccion:
      "Cambiar de cuerpo puede ser castigo, disfraz o decisión propia según quién ordene el cambio.",
    similitudes: `El primer paralelo es emberá katío y está en la misma expedición de 1945: «La mujer de Karagabí», narrada por Rafael Bailarín a Milcíades Chaves. Es la misma escena del marido que se finge enfermo y prueba a su mujer en la fiesta, pero allí la señal es el arañazo, la conversión es en lechuza y el castigo se extiende al cuñado y termina con la conversión de todos los indios en animales. En Río Frío el castigo se detiene en ella y el relato termina en el grito de la lorita.

El segundo es emberá del alto Baudó y de Ituango, en el trabajo de Mauricio Pardo: allí el ave castigada tiene nombre científico y queda mirando para siempre la luna que Tritukú lleva en la cabeza como flor blanca, y entre los emberá del Urabá antioqueño el sol y la luna son dos hermanos convertidos por haber incurrido en incesto. Río Frío no astronomiza el castigo: la lorita grita cuando hay luna llena y nada más.

El tercero muestra que estas metamorfosis no pertenecen todas a un tiempo primordial. Arelys Domicó, emberá eyábida, narró en Mutatá en 2018 que las reses encerradas por los blancos reventaban al cogerlas de la cola y de ahí salieron la guagua y el conejo. Es una transformación producida por el contacto colonial, con Colón y los blancos dentro del relato, y no puede leerse junto a las anteriores como si fuera del mismo estrato.

La metamorfosis es un motivo extendido en el mundo, y por eso mismo la comparación fácil no dice nada. Lo que distingue a estas escenas es quién manda el cambio: aquí casi siempre es el creador, y cuando no lo es, el que cambia es él mismo.`,
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
    relatoCorto:
      "La única versión publicada es un párrafo de doce líneas. No existe transcripción más extensa, ni segundo narrador, ni episodio adicional que permita alargar la narración sin inventarla.",
    title: "La culebra de siete cabezas de El Salado",
    sourceKeys: [
      "acunaSevenHeads2015",
      "improntaLomaprieta2009",
      {
        key: "teresaindios1959",
        summary:
          "Es la respuesta a la pregunta de si la culebra de siete cabezas es emberá. En el capítulo V, «Del jaibanismo. I. Su origen», el misionero transcribe lo que le narró Donungubí Domicó (bautizado Severiano): tras matar a la diabla que los crió, los dos hermanos «llegaron a una caverna donde había tres hijas de un rey, bajo la tutela de una culebra de siete cabezas»; el perro Toma, sacado del vientre de la diabla, mata al monstruo, el indio concierta boda con una de las tres, una hermana traidora lo mata clavándole un hueso de la sierpe y el perro lo resucita lamiéndolo. Es el esquema completo del cuento europeo del matador de dragones (tres hijas del rey, sierpe de siete cabezas, animal auxiliar, muerte y resurrección), injertado en un mito de origen del jaibanismo. El registro es de 1924 y KATÍO, no chamí.",
        limitation:
          "Es fuente katío de Urabá, no chamí de Caldas, y está escrita por un misionero que ordena el material con categorías cristianas («supersticiones», «ridículo oficio»). No dice nada de El Salado, Supía ni del Cauca: prueba que el motivo de las siete cabezas circula entre los emberá como préstamo hispano, no que la leyenda de El Salado lo sea. La copia consultada es la reimpresión de Medellín; la paginación no coincide con la edición de 1924 que citan Vasco y otros.",
      },
      {
        key: "uribeJaibanas1985",
        summary:
          "Reproduce el mito de Donungubí Domicó (citando Santa Teresa 1924: 28-30) dentro del corpus de origen del jaibanismo y, sobre todo, ofrece el único análisis publicado de la serpiente emberá y el agua: «En toda la mitología la serpiente jepá y otras aparecen ligadas a la producción o abundancia del agua, sea esta de lagunas o ríos», con el inventario de casos (la jepá de Jeguadas que va produciendo agua hasta formar una gran laguna y que al ser expulsada da origen al río San Juan; los mellizos que secan una laguna tirando sus bastones). Es el marco exacto para leer una culebra que sale de una laguna, quiebra la tierra y lleva el agua hasta el Supía y el Cauca: la ecuación serpiente = dueña del agua = curso de los ríos está documentada, y no hace falta el número siete para sostenerla.",
        limitation:
          "Trabaja con los chamí de Risaralda (Purembará, río San Juan) y con fuentes katío del Chocó y Antioquia. No conoce El Salado, ni el resguardo La Montaña, ni versión alguna con siete cabezas entre los chamí: la conexión con la ficha es de motivo, no de lugar.",
      },
      {
        key: "vascoChami",
        summary:
          "Abre con la «Historia de la culebra Jepá» contada por un jaibaná chamí nombrado. Es la culebra chamí por antonomasia: boa gigante ligada al charco y al agua. Sirve para el contraste que la ficha necesita: la serpiente de la tradición chamí documentada con narrador tiene una cabeza, vive en el agua y se relaciona con el jaibaná que la alimenta; la de siete cabezas no aparece en este corpus.",
        limitation:
          "Risaralda, no Caldas; no menciona El Salado ni el Supía. La página del sitio personal de Vasco reproduce los relatos pero no indica con claridad el dato bibliográfico de la publicación original.",
      },
      {
        key: "gomezMitos1997",
        summary:
          "Trae la versión más cercana estructuralmente a la leyenda de El Salado: la «Culebra Jepá» recogida en 1991 de boca de Jaime Wasoma, de la vereda Similitó. En ella el cacique siembra unos gusanitos pintados en una totuma, cada recipiente amanece lleno de agua, los gusanos crecen hasta volverse jepás tragonas «y entonces toda La Batea quedó como una laguna grande»; cuando los hijos tocan el tambor sin permiso, las culebras se enfurecen y el agua se va. Misma gramática que en El Salado: un ser serpentino hace y deshace una laguna y deja la marca en el terreno; aquí, además, el lugar se nombra (La Batea, vereda de Jeguadas) y se puede señalar.",
        limitation:
          "Es una leyenda distinta, de Risaralda, sin siete cabezas y sin traslado del agua hacia otros ríos. La transcripción tiene erratas de digitalización. La edición consultada es la digital de la Colección VZG del autor, en Drive.",
      },
      "gomezHistoria1988",
      "caldasInformacion2014",
      "paulinoleyenda2018",
    ],
    mito: `En las altas cumbres que delimitan El Salado existió en tiempos antiguos un lago. De allí salió una monstruosa serpiente de siete cabezas.

Se vino culebreando lomas abajo, cuarteando toda la tierra, rajándola y resquebrajándola, aflojándola y dejándola a merced de los hundimientos.

Abajo, la gran culebra cogió el río Supía y se embarcó hacia el Cauca. Sus huesos han sido hallados cerca de estos dos ríos.

Desde aquel entonces los predios de El Salado han sido víctimas de peligrosa erosión, caracterizada por derrumbes y hundimientos.`,
    historia: `El texto completo de esta leyenda cabe en un párrafo y llega por una cadena de tres manos. Lo publicó en 2015 el artículo «De la conservación del suelo al cuidado de la tierra: una propuesta ético-afectiva», de Isaías Tobasura Acuña, Franco Humberto Obando Moncayo, Fred Alberto Moreno Chávez, Carmen Soledad Morales Londoño y Angélica María Henao Castaño, en la revista brasileña Ambiente & Sociedade. Allí se presenta como «la Leyenda de la serpiente de las siete cabezas, mito de la erosión, que conservan los indígenas Embera Chamí de la parcialidad de La Montaña en el departamento de Caldas», y se cita como fuente a Bueno R., J., «La culebra de las siete cabezas», en Creencias del occidente caldense, Universidad de Caldas, Manizales, 1988. Los autores son profesores de agronomía y desarrollo rural de la Universidad de Caldas, no etnógrafos, y usan la leyenda para argumentar que también las comunidades ancestrales pueden poner en riesgo la calidad de sus tierras. Esa lectura es suya. El nombre de quien narró la leyenda no aparece en ninguna parte.

Aquí empieza el problema serio de esta ficha, y hay que decirlo con todas sus letras: no hay evidencia de que sea un mito emberá chamí. El registro emberá más antiguo del motivo es katío y de 1924. Lo recogió el padre Severino de Santa Teresa de boca de Donungubí Domicó, bautizado Severiano, en el capítulo sobre el origen del jaibanismo: dos niños criados por una diabla la matan, sacan de su vientre al perro Toma y «llegaron a una caverna donde había tres hijas de un rey, bajo la tutela de una culebra de siete cabezas». Toma mata al monstruo, el muchacho concierta boda con una de las tres, su propia hermana lo mata clavándole un hueso de la sierpe en la cama y el perro lo resucita lamiéndolo. Tres hijas de un rey, sierpe de siete cabezas, animal auxiliar, muerte y resurrección: es el cuento europeo del matador de dragones, injertado entero en un mito de origen del jaibanismo.

La serpiente chamí documentada es otra. Se llama jepá, tiene una cabeza, vive en el agua y se relaciona con el jaibaná que la alimenta. Así la cuenta Clemente Nengarabe Siágama, jaibaná chamí de Risaralda, en la «Historia de la culebra Jepá» que recogió Luis Guillermo Vasco, y así la recogió Víctor Zuluaga de Jaime Wasoma en 1991. Ni Vasco en Jaibanás. Los verdaderos hombres, ni Zuluaga en sus tres libros chamí, conocen El Salado, ni el resguardo La Montaña, ni versión alguna chamí con siete cabezas.`,
    versiones: `Hay un solo testimonio impreso, sin narrador acreditado, y llega por una obra secundaria de 2015 que cita a otra de 1988 que ya no se consulta directamente. No hay variante, no hay segunda recolección y no hay nada que autorice a repartir funciones entre las siete cabezas, a convertirlas en siete guardianes o a narrar un combate.

Lo que sí se puede contrastar es el motivo, y el contraste cambia la lectura. La culebra de siete cabezas emberá está documentada una sola vez, en 1924, en Urabá, y es katío: la que Donungubí Domicó le contó al padre Severino de Santa Teresa, con la caverna, las tres hijas del rey y el perro Toma. Luis Guillermo Vasco la reproduce citando esa fuente en 1985 y la trata como mito de origen del jaibanismo, no como figura del agua. En cambio, la serpiente del agua chamí no lleva ese número: en la versión de Clemente Nengarabe Siágama la jepá nace de un gusanito pintado, crece en un cántaro, llena de agua toda una hondonada en Jeguadas y termina llevada al río, y en la de Jaime Wasoma, en Similitó, los gusanitos crecen hasta volverse jepás y «toda La Batea quedó como una laguna grande».

Hay además una ausencia que pesa. El inventario oficial de mitos y leyendas del municipio de Riosucio, publicado por la Gobernación de Caldas, no incluye la culebra de siete cabezas: lista Duende, Patasola, Mohán, Llorona, Piedra Herrada, la Mula de Quiebralomo y las minas de Gavia y Vendecabezas, todo repertorio hispano-mestizo minero. El mismo documento certifica que El Salado es la sede del resguardo de Nuestra Señora Candelaria de La Montaña y que ese resguardo se constituyó a finales del siglo XVI con familias Ipá y Turzaga. Que no figure en el registro municipal no prueba que no exista en la tradición local, pero sí que la zona es de mestizaje minero colonial y que su folclor escrito lo refleja.`,
    leccion:
      "El suelo que se desmorona guarda la forma de algo que pasó por allí antes.",
    similitudes: `La comparación decisiva es interna al mundo emberá y separa dos serpientes que suelen confundirse. La de siete cabezas, en el único registro emberá que existe, es la que custodia a tres hijas de un rey en una caverna, y la mata un perro: la narró Donungubí Domicó, katío de Urabá, y es el cuento europeo del matador de dragones. La jepá chamí, en cambio, no tiene número de cabezas ni caverna ni princesas: es dueña del agua. Luis Guillermo Vasco lo formula así al estudiar los chamí de Risaralda: «En toda la mitología la serpiente jepá y otras aparecen ligadas a la producción o abundancia del agua, sea esta de lagunas o ríos», y pone el caso de la jepá de Jeguadas, que al crecer va produciendo agua hasta formar una gran laguna y, al ser expulsada, da origen al río San Juan. La culebra de El Salado hace exactamente eso, hacer y mover agua, sin necesitar el siete.

El segundo paralelo viene de otro continente lingüístico y sirve de método, no de parentesco. En San Bernardo, Oaxaca, Carlos Gerardo Hernández Paulino recogió en 2017 siete relatos de culebras de agua y transcribe uno donde un arriero abre sus canastos y «vio salir tres culebras. Esas culebras tenían siete cabezas», y desde entonces hubo agua en el pueblo. El autor muestra que allí conviven un sustrato mítico zapoteco y «relatos de estrato cultural panhispánico e incluso europeo» sin que uno anule al otro. Es la manera correcta de decir lo de El Salado: la serpiente que hace el paisaje puede ser sustrato local, el número siete es capa hispana, y la leyenda es las dos cosas a la vez. La diferencia con Oaxaca es que allí las culebras traen el agua y aquí se la llevan.`,
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
    relatoCorto:
      "La única versión publicada es un párrafo citado. No hay narración con personajes, acción ni desenlace que permita extenderla sin agregarle lo que la fuente no dice.",
    title: "Los espíritus de las gotas de Lomaprieta",
    sourceKeys: [
      "improntaLomaprieta2009",
      "acunaSevenHeads2015",
      {
        key: "teresaindios1959",
        summary:
          "Contiene un apartado titulado exactamente «III. Los ángeles», y es la prueba directa de que la angelología cristiana entre los emberá se documentó por otra vía: «Aseguran que el demonio (Antomiá) en sus principios era bueno, pero dejó de serlo porque un día Caragabí se embriagó quedándose desnudo y Antomiá se burló de él. Cuando Caragabí volvió en sí y supo lo ocurrido, lo convirtió en demonio y lo sepultó en Edaa (infierno)», y el misionero cierra: «Esto es lo único que he podido recoger en sus tradiciones respecto a los ángeles». El ángel emberá documentado en 1924 es un ángel caído, no una gota de las manos de Dios. La ficha puede decir con respaldo que la versión de Lomaprieta es una elaboración posterior y local, no la cosmología emberá heredada.",
        limitation:
          "Es katío de Urabá, 1924, y está escrita por un carmelita que busca precisamente equivalencias con la doctrina católica. No habla de Lomaprieta, ni de Caldas, ni de gotas, ni de espíritus repartidos por ámbitos.",
      },
      {
        key: "gomezDioses1991",
        summary:
          "Es la única obra que plantea de frente el problema que la ficha declara. Tras el inventario de «Animales míticos o fabulosos» escribe que la tarea del rescate mitológico chamí no podrá hacerse sino comparando subgrupos «y se puedan detectar las influencias cristianas que existen en muchas de ellas», y añade: «Un caso típico de dicha influencia es la que encontramos en el texto de Severino al referirse a los Angeles», citando a continuación el pasaje de Antomiá. El libro trae además los capítulos «Dioses y demonios de los Chamí» (p. 119) y «Entidades benéficas», y la advertencia de que entre los chamí la separación radical entre seres «malos» y «buenos» no existe.",
        limitation:
          "No conoce la tradición de Lomaprieta ni la versión de las gotas. Vasco Uribe le reprocha, con razón, que el vocabulario («dioses», «demonios», «brujos») es etnocéntrico y que el libro no tiene bibliografía: la clasificación es del autor, no de los narradores. Edición digital de la Colección VZG en Drive.",
      },
      {
        key: "uribeJaibanas1985",
        summary:
          "Documenta, con trabajo de campo chamí, la categoría que la versión cristianizada de Lomaprieta desplazó: los jai, «seres del agua y del monte» que se identifican con la energía vital de las cosas, y los antumiá/antomiá/tumí, a los que los informantes describen como «los espíritus del mal, sean de la tierra o del agua» y «dueños de la noche, señores de la oscuridad». Es decir: la idea de presencias repartidas por ámbitos (agua, monte, oscuridad) sí tiene soporte chamí; lo que no lo tiene es su origen en un lavado de manos divino ni su conversión en vengadores de la naturaleza.",
        limitation:
          "Chamí de Risaralda, no de Caldas. El libro no cita Lomaprieta ni el trabajo de Julián Bueno Rodríguez de 1988, y su interés central es el jaibanismo, no un catálogo de espíritus territoriales.",
      },
      {
        key: "uribeEmbera",
        summary:
          "Panorámica emberá que incluye la variante chamí y que aporta la corrección conceptual que esta ficha necesita: los jai no son «espíritus» en el sentido occidental sino fuerzas invisibles, la esencia de las cosas, los fenómenos naturales, los animales y las personas, entendidas como energías materiales. Ayuda a que la página no traduzca automáticamente «ángel» y «espíritu» por la categoría cristiana que el propio relato de Lomaprieta ya arrastra.",
        limitation:
          "Es una síntesis general sin narradores ni lugares concretos, publicada en el sitio personal del autor sin dato claro de la publicación original. No trata la tradición de Lomaprieta ni ninguna versión de las gotas.",
      },
      "uNEPWCMCResguardo2023",
      {
        key: "caviedesMitos2010",
        summary:
          "Su tabla de contenido, abierta en el sitio del editor, es el mapa de lo que habría que consultar para esta ficha: «Chi Vandrá (Las madres de los animales)» (p. 55), «Entidades benéficas» (p. 74), «Cosmología chamí: los círculos cósmicos y los canales de comunicación» (p. 83) y una séptima parte entera titulada «El catolicismo de los Chamí» (pp. 137-162), con apartados sobre evolución de la práctica religiosa, doctrina católica, símbolos y oraciones. Es el único trabajo que trata el sincretismo chamí como objeto propio y no como una nota al pie.",
        limitation:
          "No se pudo leer. El editor publica en línea sólo prefacio, introducción y tabla de contenido; el texto completo remite a las bibliotecas físicas de Uniclaretiana. Además es obra de un misionero claretiano que vivió treinta años en la comunidad: la mediación cristiana está también en el recopilador.",
      },
    ],
    mito: `Dios se lavó las manos y, al extenderlas para secarse, comenzó a chorrear de ellas el agua. Y de cada gota que caía al desprenderse de sus dedos mojados se formaba un ángel. De cada gota salía un ángel. Cada gota se volvía ángel.

Y fueron cayendo y cayendo, y de las manos de Dios brotaban y brotaban ángeles que caían y caían sin cesar.

Y cuando Dios dijo detente, los ángeles se quedaron detenidos en el punto donde iban en ese instante preciso. Y quedaron penetrados en la naturaleza, constituidos en su esencia y en su defensa.

Unos cayeron en la tierra: son los espíritus terrestres. Otros cayeron al agua: son los espíritus aguales. Unos quedaron en el aire: son los espíritus airales. Otros quedaron en la montaña: son los espíritus selváticos.`,
    historia: `Esta tradición se conoce por una sola cita, y conviene saber de quién es cada eslabón. La reproduce Jorge Eliécer Zapata Bonilla en «Occidente de Caldas. Su composición étnica y su presencia en la formación de la república», revista Impronta de la Academia Caldense de Historia, número 7 de 2009, pp. 77-88. En la página 79 el autor escribe: «Una leyenda de Lomaprieta dice como surgieron las deidades tutelares o los guardianes tutelares de la naturaleza», y a continuación cita el párrafo entero. En nota al pie da la referencia: Bueno Rodríguez, Julián, Creencias del occidente caldense, Cuadernos de investigación y cultura, Talleres litográficos Universidad de Caldas, Manizales, 1988, p. 107. No aparece por ningún lado el nombre de quien la narró, ni la fecha ni el lugar exacto de la escucha.

Eso obliga a una precisión sobre el nombre de esta página. La palabra guardianes no es invención del sitio: está en la frase con que Zapata Bonilla presenta la leyenda, y el propio texto dice que los ángeles quedaron en la naturaleza «constituidos en su esencia y en su defensa». Lo que no está en ninguna fuente es «vengadores». Tampoco hay nombres propios, ni jerarquía, ni combate, ni los Yaveranas.

La otra cosa que hay que decir es que Dios y la palabra ángeles marcan una mediación cristiana, y que esa mediación tiene historia documentada. La angelología emberá que sí se recogió en campo va por otro camino: en 1924 el padre Severino de Santa Teresa, en el apartado «Los ángeles» de su etnografía katía, sólo consiguió esto: «Aseguran que el demonio (Antomiá) en sus principios era bueno, pero dejó de serlo porque un día Caragabí se embriagó quedándose desnudo y Antomiá se burló de él», y lo sepultó en Edaa con sus compañeros. Y cierra: «Esto es lo único que he podido recoger en sus tradiciones respecto de los Angeles». Víctor Zuluaga, en Dioses, demonios y brujos de la comunidad indígena Chamí, cita ese mismo pasaje como «un caso típico» de influencia cristiana y advierte que el rescate mitológico chamí sólo podrá hacerse comparando subgrupos para detectar esas influencias. El ángel emberá documentado es un ángel caído, no una gota de las manos de Dios.`,
    versiones: `Un solo testimonio, sin narrador, sin fecha de escucha y por doble cita. No hay otra versión de las gotas ni en Caldas ni en Risaralda ni en el Chocó, y no se encontró ninguna fuente que la recoja de boca de alguien.

La transcripción misma tiene un punto oscuro que conviene no maquillar. Donde se enumeran los ámbitos, el texto impreso dice «Otros quedaron en la montaña ariaza. Son los espíritus selváticos». La palabra ariaza no aparece en ningún vocabulario emberá consultado ni se repite en el resto del artículo, y todo indica una errata de la revista o del original de 1988. Aquí se conserva la enumeración y se deja fuera esa palabra suelta en lugar de traducirla por algo que nadie escribió.

Lo que sí tiene versiones es la idea de presencias repartidas por ámbitos, y no se parecen a esta. Luis Guillermo Vasco documenta entre los chamí de Risaralda los jai, esencia de las cosas, los fenómenos, los animales y las personas, y el complejo antomiá, antumiá o tumí, del que sus informantes dicen que son «los espíritus del mal, sean de la tierra o del agua». Roberto Pineda y Virginia Gutiérrez, citados por él, precisan que los que viven en la tierra se dibujan de color negro y los que viven en el agua de color rojo. Ninguno de ellos nace de un gesto divino ni defiende la naturaleza. Y hoy el propio resguardo Cañamomo Lomaprieta, en su ficha del registro internacional de territorios de vida, describe la coexistencia de agua, tierra, aire y fuego en palabras de sus médicos tradicionales, sin ángeles, sin gotas y sin guardianes.`,
    leccion:
      "El territorio deja de parecer vacío cuando se nombra lo que habita cada uno de sus ámbitos.",
    similitudes: `El paralelo más útil es el que marca la diferencia. En la etnografía katía que el padre Severino de Santa Teresa levantó en Urabá, el apartado titulado «Los ángeles» contiene un solo relato: Antomiá era bueno al principio, se burló de Caragabí borracho y desnudo, y Caragabí lo convirtió en demonio y lo sepultó en Edaa con sus compañeros. Es el único ángel emberá recogido en campo, y es un ángel caído, expulsado hacia abajo, no una gota que se detiene en el aire. Los dos relatos traducen la doctrina cristiana al mundo emberá, pero en direcciones opuestas: allí la angelología entra como caída y castigo, aquí entra como reparto pacífico del territorio.

El segundo paralelo es chamí y contemporáneo. En Risaralda, Vasco documenta que los jai no son espíritus en el sentido occidental sino fuerzas o energías materiales, la esencia de las cosas, los fenómenos naturales, los animales y las personas, y que los antumiá, dueños de la noche, se reparten entre la tierra y el agua sin que la separación entre buenos y malos funcione. Ahí también el mundo está poblado por ámbitos, pero nadie los creó de un manotazo y nadie los puso a defender nada. Y en el propio Cañamomo Lomaprieta, los médicos tradicionales del resguardo describen hoy el territorio como ciclo donde coexisten agua, tierra, aire y fuego: el mismo reparto por elementos, dicho por la comunidad, sin la mediación de las gotas y con fuego en lugar de selva.`,
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
    fuentesAgotadas: "tras la única obra nueva hallada se buscó «Surranabe» en abierto (CVC, luguiva.net, IIAP, Persée, salacela.net), la lista de plantas de Cayón y Aristizábal en Cespedesia 9 (1980) y la fuente del paralelo de «otros mellizos» que secan la laguna con sus bastones (Pinto 1978, Wassén 1933); ninguna de las dos últimas tiene copia abierta consultable. Queda en 8 con la nueva.",
    relatoCorto:
      "El relato tal como fue narrado ocupa nueve líneas. No hay segunda versión que lo amplíe, y todo lo que se añadiera para llegar a trescientas palabras sería invención.",
    title: "Surranabe, el gusano gigante",
    sourceKeys: [
      "chaves1945",
      "reichel1953",
      {
        key: "uribeJaibanas1985",
        summary:
          "La fuente clave, y la única que trata a Surranabe dos veces y de frente. Primero lo transcribe citando la página exacta del original —«Chaves (1945: 148) narra lo siguiente: Surranabe (el gusano grande) era un gusano muy grande que se comía a los hombres y a los animales... Una vez se juntaron entre 4 mellizos y lo mataron con una lanza. Allí se formó una gran laguna y de allí en adelante no hay ya gusanos grandes... Los mellizos sabían mucha cosa; eran como gente de médico»— y añade entre corchetes la glosa «[es decir, jaibanás]». Después lo integra en su análisis: «En toda la mitología la serpiente jepá y otras aparecen ligadas a la producción o abundancia del agua... Surranabe (gusano grande) se comía a la gente; cuatro mellizos lo mataron y allí se formó una gran laguna. Al contrario, otros mellizos secaron el agua de una laguna en donde vivía una culebra que devoraba a los hombres, tirando en ella sus bastones». La laguna deja de ser un detalle y pasa a ser la clave: el cuerpo del devorador es agua.",
        limitation:
          "Vasco no recogió el relato: lo cita de Chaves. Su glosa «[es decir, jaibanás]» es interpretación suya, exactamente la que la ficha decidió no hacer suya; conviene citarla como lectura de un antropólogo, no como dato del relato. El libro trabaja con chamí de Risaralda y katío, no con los chamí del occidente de Caldas de donde Chaves tomó el episodio.",
      },
      {
        key: "gomezDioses1991",
        summary:
          "Da la llave lingüística del nombre. En la lista alfabética de plantas chamí que el libro reproduce (tomada de Cayón y Aristizábal, revista Cespedesia de la Universidad del Valle), la entrada AINSURRAKA se traduce como «la planta sin gusanos (ain: fuera, sin; surra: gusanos)». Surra es «gusano» en lengua chamí: Surranabe no es un nombre opaco, lleva la palabra gusano dentro. El mismo libro, en «Animales míticos o fabulosos», documenta a la JEPA o boa —«antes vivían en los charcos y atraían a sus víctimas desde dos leguas... Una especie de boa monstruo producía los remolinos desde el asiento de los ríos, tragándose todo lo que en el remolino cayera»—, que es la otra figura chamí de la bestia devoradora ligada al agua.",
        limitation:
          "El libro no trae el relato de Surranabe. La etimología se apoya en una lista de plantas de Risaralda transcrita sin comentarios ni notas, y Vasco Uribe señala en su reseña que Zuluaga la copió íntegra de Cespedesia sin anotaciones propias; conviene atribuirla a Cayón y Aristizábal, no a Zuluaga. Edición digital de la Colección VZG en Drive.",
      },
      {
        key: "gomezMitos1997",
        summary:
          "Trae el único paralelo chamí publicado del par gusano-laguna, recogido de Jaime Wasoma en la vereda Similitó en 1991: unos «gusanitos muy bonitos, como pintados» aparecen bajo la lluvia, el cacique los siembra en una totuma con agua y cada recipiente amanece lleno; trasladados a un hoyo cerca de La Batea, «a los pocos meses los gusanos crecieron mucho, mucho, y se volvieron unas jepás muy tragonas y entonces toda La Batea quedó como una laguna grande». Gusano que crece, se vuelve devorador y donde queda hay laguna: la misma cadena de Surranabe, en otro lugar y con narrador y fecha.",
        limitation:
          "Es otro relato: aquí no hay mellizos ni lanza, el gusano no muere, y la laguna nace del crecimiento y no de la muerte. Es de Risaralda, no del occidente de Caldas. Sirve como comparación declarada, nunca para rellenar los silencios del episodio de Chaves.",
      },
      {
        key: "gomezHistoria1988",
        summary:
          "Muestra que estas lagunas de relato tienen dirección postal. Al describir una tumba saqueada que el autor alcanzó a documentar, escribe que está «en la vereda de Jeguadas, cerca de La Batea (sitio en donde según una leyenda, existió una laguna y vivía una gran culebra, llamada Jepa)», con nariguera de oro, ollas, alcarrazas y hachas de piedra talladas. Respalda el punto que la ficha ya hace: la laguna que queda tras la bestia es una forma del paisaje que la gente puede señalar, no un final decorativo.",
        limitation:
          "Mención de una sola línea, incidental dentro de un libro de historia de archivo y arqueología. No habla de Surranabe, ni de mellizos, ni del occidente de Caldas.",
      },
      {
        key: "cardonaMitologia2013",
        summary:
          "Artículo del Instituto de Investigaciones Ambientales del Pacífico (IIAP), en PDF abierto, que ordena los mitos emberá por función social y ecológica. Aporta un tercer caso del mismo esquema: «la historia de la Jepá de la laguna de Boroboro», una serpiente gigante «que lo succiona todo en el fondo de la laguna», junto con el relato del árbol jenené de cuya caída «brotó el mar, los ríos, ciénagas, lagunas y demás fuentes». Confirma que en el sistema emberá la criatura devoradora y el cuerpo de agua son dos estados de lo mismo, que es justamente lo que pasa con Surranabe.",
        limitation:
          "El trabajo de campo es del golfo de Tribugá, Nuquí, con comunidades emberá del Chocó: no es chamí. No menciona a Surranabe, ni mellizos, ni el occidente de Caldas. Úsese sólo como comparación explícitamente marcada como de otro subgrupo.",
      },
      "arauzPanama1980",
    ],
    mito: `Surranabe, el gusano grande, era bastante grande y se comía hasta los hombres y los animales. Era muy bravo. Todo lo que arrimaba donde él, se lo comía, y por eso la gente de indio, todos, todos, le tenían mucho miedo.

Pero una vez lo mataron los mellizos con la lanza. Se juntaron entre cuatro mellizos y lo mataron.

En el lugar donde lo mataron se formó una gran laguna. De entonces en adelante no se encuentran gusanos grandes y ya no hay más cría de ellos: allí hay sí los gusanos pequeños.

Los mellizos sabían mucha cosa. Eran como gente de médico.`,
    historia: `Surranabe es el relato III de «Mitos, tradiciones y cuentos de los indios Chamí», de Milcíades Chaves Ch., publicado en el Boletín de Arqueología, vol. I, núm. 3, pp. 133-159, Bogotá, 1945. El texto ocupa el final de la página 147 y el comienzo de la 148, y lleva el subtítulo que el propio recopilador tradujo: El Gusano Grande.

Aquí sí hay narrador con nombre, y este corpus obliga a decirlo, porque en el mismo artículo no todos los relatos son chamí. Chaves lo aclara en la página 134: «Los nueve cuentos que a continuación transcribo, me fueron narrados, los cuatro primeros, por Nicolás Henao, indio chami […] Los cinco últimos los recogí de boca de Rafael Bailarín, indio katío». Surranabe es el tercero, de modo que es de Nicolás Henao y es chamí. Chaves da además sus datos: tenía unos treinta años, era hermano del cacique del grupo y cuñado del curandero, hablaba su lengua y un castellano defectuoso pero claro, y él mismo tradujo al castellano las palabras que pronunciaba en emberá. Dijo que le habían narrado esos cuentos cuando era joven, antes de salir de Balboa, en el entonces departamento de Caldas. La escucha ocurrió en la vereda Corozal, municipio de Río Frío, Valle del Cauca, donde ese grupo llevaba unos quince años tras migrar desde Antioquia y Caldas.

La única obra que vuelve sobre el episodio es Jaibanás. Los verdaderos hombres, de Luis Guillermo Vasco, de 1985, y lo hace dos veces. Primero lo transcribe citando la página exacta, «Chaves (1945: 148) narra lo siguiente», y le añade entre corchetes una glosa que conviene no adoptar: donde el relato dice que los mellizos «eran como gente de médico», Vasco escribe «[es decir, jaibanás]». Es su lectura de antropólogo, no palabra del narrador, y se cita como tal. Después lo integra en su análisis sobre la serpiente y el agua, y ahí la laguna deja de ser un detalle final.

El nombre, además, no es opaco. En la lista de plantas chamí que Zuluaga reproduce en su libro de 1991, tomada de Edgardo Cayón y Silvio Aristizábal en la revista Cespedesia de la Universidad del Valle, la entrada AINSURRAKA se traduce «la planta sin gusanos (ain: fuera, sin; surra: gusanos)», y otras dos entradas confirman la raíz: surrajunkara, «sura: gusano», y surratupu, «leña del gusano». Surranabe lleva dentro la palabra gusano.`,
    versiones: `Un solo testimonio, y muy breve: Nicolás Henao lo contó una vez en Corozal, en 1945, y nadie lo ha vuelto a recoger de otra boca. No hay variante, no hay nombres para los mellizos, no hay veneno en las puntas ni espíritus convocados, y nada de eso puede añadirse sin fabricarlo.

Lo que sí existe es una reaparición y una lectura. La reaparición es la transcripción de Vasco en 1985, fiel salvo dos diferencias menores respecto al impreso de Chaves: escribe «Por eso la gente de indio le tenía miedo» donde el original insiste, «por eso la gente de indio, todos, todos, tenían mucho miedo», y «sólo hay gusanos pequeños» donde el original dice «allí hay sí los gusanos pequeños». La lectura es la glosa entre corchetes con que Vasco identifica a los mellizos como jaibanás. El relato no los llama así, y la diferencia importa: «gente de médico» es lo que dijo el narrador traduciéndose a sí mismo.

Fuera de esto, el corpus chamí tiene el mismo par gusano y laguna en otro lugar y con otros narradores, y por eso no se puede fundir con este. Clemente Nengarabe Siágama, jaibaná chamí de Risaralda, cuenta que un viejo encontró un gusanito pintado, lo puso en un cántaro que amanecía lleno de agua, lo pasó a un charquito en Jeguadas y allí creció hasta volverse jepá. Jaime Wasoma, en la vereda Similitó, se lo contó a Zuluaga en 1991 con gusanitos «muy bonitos, como pintados» sembrados en una totuma, y «a los pocos meses los gusanos crecieron mucho, mucho, y se volvieron unas jepás muy tragonas y entonces toda La Batea quedó como una laguna grande». Son otros relatos: allí el gusano no muere y la laguna nace del crecimiento, no de la muerte.`,
    leccion:
      "Lo que devoraba la vida de un lugar puede quedar convertido en el agua que lo sostiene.",
    similitudes: `El paralelo más cercano está dentro del mismo pueblo, en la otra punta de su territorio. En la «Historia de la culebra Jepá» que contó Clemente Nengarabe Siágama, jaibaná chamí de Risaralda, un gusanito pintado crece en un cántaro que amanece lleno de agua, pasa a un charco en Jeguadas y se vuelve una jepá que el jaibaná alimenta llamándola con un tambor, hasta que sus hijos tocan el tambor sin permiso y el agua se lo traga todo. Jaime Wasoma, en la vereda Similitó, contó lo mismo en 1991 con varios gusanitos sembrados en una totuma, y La Batea quedó como una laguna grande. La cadena es idéntica a la de Surranabe, gusano y agua, pero corre al revés: allí el gusano vive y la laguna nace de su crecimiento, aquí el gusano muere y la laguna nace de su cuerpo.

Luis Guillermo Vasco pone al lado el caso simétrico, también emberá: otros mellizos secaron el agua de una laguna donde vivía una culebra que devoraba a los hombres tirando en ella sus bastones, y la serpiente, al quedarse sin agua, tuvo que irse al mundo de abajo. Mellizos otra vez, devorador otra vez, y el agua funcionando como el cuerpo mismo del animal, pero quitándola en lugar de producirla.

El tercer paralelo es emberá y no chamí, y hay que decirlo al citarlo. Entre las comunidades del golfo de Tribugá, en Nuquí, Antonio María Cardona y Jairo Miguel Guerra recogieron la historia de la Jepá de la laguna de Boroboro, «una poderosa chamán salva al protagonista y encierra a la serpiente gigante que lo succiona todo en el fondo de la laguna». Allí el devorador queda encerrado bajo el agua en vez de convertirse en ella.`,
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
