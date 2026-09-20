import { definePananMyth } from "./define-editorial-myth.mjs";
import { canonicalPananSlugs } from "./universe.mjs";

const visualRule =
  "IMÁGENES: se reutiliza la pareja existente salvo en Guamurran. Toda regeneración futura debe ser ilustración editorial 2D full paper cut y paper quilling; nunca fotografía de papel, objeto físico, maqueta, diorama, CGI ni render 3D.";




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
    mito: `El duende de Panán no baja de arriba: sube. Habita el mundo de abajo, que es el agua, y por eso se lo encuentra en las chorreras, en los remansos y en los rincones oscuros del monte, donde la luz no alcanza a secar la piedra.

Nadie lo describe igual. Unos lo vieron de rojo, otros de verde, de amarillo, hasta de negro, porque toma el color de las flores y de las plantas del sitio donde se deja ver. Lo que no cambia es el oficio. Es músico y prefiere las cuerdas, y quienes lo han oído en la quebrada dicen que su tambor es el agua misma: con ese golpe llama a los curiosos y los va acercando al borde.

Se enamora de las mujeres que bajan a lavar la ropa. A la que escoge la persigue todo el día haciéndose el niño bueno, y de noche le manda pesadillas hasta que no duerme y cae enferma.

Con los caballos la cosa es travesura. El animal se planta en mitad del camino, no quiere seguir, empieza a recular como asustándose, y al otro día amanece con la crin del cuello y la cola bien carnejadas y enredadas, como si alguien hubiera trabajado en ellas toda la noche.

En lo que se cuenta ahora sale por las alcantarillas. Se vuelve otro niño del sector y juega con los menores de cinco años sin ofenderlos; deja la tarea programada para continuarla al día siguiente y no permite que lo miren los adultos, de modo que cuando el mayor se asoma, el compañero que el niño describe ya no está en ninguna parte.

Al que cae así se le dice enduendado, y hay quien lo levante. La médica arma una escoba con tarta negra, pillo, anamú y marco, le suma ruda, lana de oveja negra y estiércol de animales negros, y con eso sahúma, sopla y azota. Mientras tanto llama hacia el mundo de arriba: «Asoma, asoma, asoma, Usata, Usata, Usata», y en el nombre del padre, del hijo y el Espíritu Santo. Son tres sopladas con aguardiente, tres barridos y tres bendiciones. Después le da a tomar un poquito de pólvora, lo baña con zumo de ruda y hierbabuena y cierra con agua de acero. Otras curaciones trabajan con flor de guanto, hojas de albarrecín, ramas de marco y chapil, para la limpia y para la purga.

Al duende no se lo mata ni se lo vence. Se lo despega del cuerpo y se lo devuelve al agua de donde salió.`,
    historia: `El apartado «Al duende» está en el capítulo cuarto de la investigación etnoliteraria que Ernesto Ramiro Estacio y Luis Ulpiano Tatamués García presentaron en noviembre de 2016 a la Maestría en Etnoliteratura de la Universidad de Nariño, con asesoría de Dumer Mamián Guzmán. De ahí vienen los colores cambiantes, la música de cuerdas, las lavanderas, el juego con los niños en las alcantarillas y la limpia con guanto, albarrecín, marco y chapil.

El caballo tiene dueño de voz. José Tarapues, comunero de Panán, se lo contó a esos investigadores en marzo de 2014, y el episodio ocurre en la Cangagua, el cucho de la vereda la Merced donde una cascada se pierde entre los matorrales.

La curación es lo mejor documentado y lo más antiguo. Andrea Ojeda Guerrero la publicó en 2006, en su estudio de medicina tradicional del resguardo, hecho con los cinco médicos tradicionales y la partera de Panán: allí el duende «habita en el mundo de abajo en el agua, en chorreras y lugares oscuros de los montes», y el «Asoma, asoma, asoma, Usata» con las tres sopladas, los tres barridos y las tres bendiciones se atribuye a Eudocia Calpa, médica tradicional y partera del resguardo. Erica Susana Quiroz Malte volvió a registrar el mismo procedimiento casi una década más tarde, en su trabajo de 2015 sobre las mujeres y la medicina tradicional de Panán; allí el enduendamiento lo explica Martha Quiroz, médica tradicional del resguardo, entrevistada el 18 de septiembre de 2014.

Panán es resguardo del pueblo de los Pastos, en el municipio de Cumbal, Nariño, sobre el filo fronterizo con el Ecuador. El duende que aquí se cuenta es el suyo: los que se citan de otros resguardos y del otro lado de la línea aparecen señalados como lo que son, vecindad.`,
    versiones: `Las dos vertientes de Panán no se contradicen, se turnan. La del agua lo ata a chorreras y lugares oscuros y lo trata como causa de enfermedad; la del juego lo trae al pueblo, a las alcantarillas y a los niños de menos de cinco años, y lo vuelve compañero que los adultos no alcanzan a ver.

Fuera del resguardo la figura se endurece. En un resguardo pasto vecino, Nelson Mejía Putacuar recogió en 2014 un duende que cuida el agua de la quebrada, que llama con un tambor hecho de agua y que castiga con la mirada a quienes tumban el monte y queman la paja. Ese oficio de guardián que sanciona no lo traen las narraciones de Panán, donde enamora, enreda caballos y juega, pero no vigila el monte. La misma investigación, con la narradora Magdalena Pinchao, lo describe con tamborcitos chiquitos y sombreros grandes, hasta el punto de que al comunero de sombrero ancho le dicen que lleva sombrero de duende.

En el Carchi ecuatoriano, que es otro país, los narradores de Tufiño que reunió Édison Ávalos en 2020 distinguen dos: «el duende claro es trabajador, el duende negro que es mudo». Son dos seres, no uno cambiante.

Hay además una costura visible en el propio corpus de 2016: al lado de la palabra de los mayores se intercala una cita de libro sobre duendes «perversos, impertinentes y traviesos» que no viene de Panán, y que el texto adjudica a un autor mientras la nota al pie acredita a otro.`,
    leccion:
      "Lo que enferma en el agua también se devuelve al agua para sanar.",
    similitudes: `El paralelo más cercano está a pocas horas de camino y en el mismo pueblo. La monografía que Escobar Morillo y Mejía Putacuar escribieron en 2009 sobre Yaramal, resguardo pasto de Ipiales, le dedica capítulos enteros: el duende como ser protector del agua, la magia de su música, sus dualismos y los remedios contra el entundamiento. Es el mismo músico de quebrada, con una función de guardián más marcada que en Panán.

El segundo paralelo cruza la frontera. En el Carchi, Édison Ávalos documentó en 2020 que sólo pueden narrar a estos seres quienes los han visto, y que el duende figura junto a la viuda, el guagua auca y los cueches en ese repertorio compartido; sus informantes se apellidan Chiles, Tarapués, Paspuezán o Malte, los mismos linajes de este lado de la línea. Es vecindad binacional, no creencia de Panán.

Dentro del resguardo, el chutún también es pequeño y también enferma, pero su terreno es la chagra y el barbecho, no la chorrera; y el cueche comparte el agua sin compartir la música. Ojeada de duende, ojeada de chutún y pisado de cueche son categorías separadas en la misma consulta.`,
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
    sourceKeys: [
      "memoriaTerritorial2016",
      "medicinaTradicional2006",
      "espiralAndino2014",
      "yaramal2009",
      "quiroz2015",
      "avalos2020",
      "mamian1996",
      "puenayan2011",
    ],
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
    mito: `En Panán entundar es un verbo. Entundarse es perderse en un campo, dormirse en un monte, en una zanja, en un páramo. El borracho da varias vueltas en el mismo lugar y no encuentra la salida ni el camino de la casa; el que está cuerdo se pierde en un sitio determinado y se desvía, e igual da vueltas y no halla por dónde salir. Después vienen el dolor fuerte de cabeza, el malestar del cuerpo y la fiebre.

Quien entunda tiene cara de mujer. La Vieja se les presenta a los borrachos, los aturde —eso es entundar— y se los quiere llevar adonde ella vive: ríos, puentes, casas abandonadas, chorreras. No hay que internarse lejos para que ocurra; basta el callejón, el pozo, la quebrada, la orilla del cementerio, el matorral de espinas.

Cuando el enfermo llega, el médico tradicional lo mira y dice que está quedado. El espíritu se le quedó en el otro lugar y hay que ir por él. Se conoce en el cuerpo: dolor de cabeza, sueño excesivo, diarrea, adelgazamiento, pérdida de apetito, la piel de color amarillento. Y se distingue del espanto, que viene de una impresión violenta, de un ruido escandaloso o de una caída, y que se diagnostica por el pulso, midiéndole los pies, mirándole la contextura de los ojos y tocándole la cabeza: si está quemando, es fuerte mal aire o fuerte espanto.

Ir por el quedado es un viaje. Cuando el quedado es un niño, se lleva la última prenda que tenía puesta, ruda, trago y peinilla, y se va con la madre hasta el sitio exacto donde se cayó o se asustó. Allí se echa el trago, se golpea duro el suelo y se llama: ¡vení, vení, vení, levanta, levanta, vamos, vamos, a tu casa, a tu casa! Se recoge lo que se halle, con yerbas, con tierra, se envuelve todo con la ruda y se abraza. Y de ahí se sale corriendo sin voltear a ver, porque si se voltea el espíritu se regresa y, como dicen las curanderas, «es más jodido volver a traerlo»; el acompañante viene atrás con la peinilla echando juete. En el camino no se habla, no se saluda a nadie, se pasa no más a la carrera. El saco pesa como si llevara el niño adentro, y uno va sudando, y parece que se lo quisieran quitar. Al llegar se le dice: ¡toma tu quedado!

Después se coge ruda y se le friegan las piernitas, y se dice: le voy a sentar el espíritu. Se le toman los nudos de las piernas hasta sentir el pulso normal, que es la seña de que ya se está sentando. Esa noche el niño duerme, y que duerma es buena señal, porque quiere decir que el espíritu llegó. La traída es una sola vez; las otras dos veces ya es sólo fregarle las piernitas y los bracitos, y así el niño se va mejorando.

También se usan ovillos de lana roja, negra y verde, esencias de plantas, chapil, cigarrillo y ruda. Y quién lo llama entundado, quién quedado y quién espantado, lo decide el que cura.`,
    historia: `El quedado no es una metáfora: tiene registro. Erica Susana Quiroz Malte publicó en 2015 el informe del puesto de salud del resguardo correspondiente a marzo de ese año, firmado por el auxiliar de medicina tradicional Franco Calpa. De cincuenta consultas, las más frecuentes fueron mal aire con veintiocho, espanto con doce, quedado con cinco y cueche con tres. En el mismo trabajo, con entrevistas fechadas, están las definiciones: el espanto por Rosario Ipial, médica tradicional, el 29 de septiembre de 2014, y el quedado, con toda la traída del espíritu, por Herminia Malte, médica tradicional, el 21 de julio de 2014.

Que entundar sea verbo y no criatura lo dejó escrito Byron Danilo Ruiz Puetate en el glosario de su libro de 2015, hecho desde los montes de Panán: «Entundarse: perderse en un campo; dormirse en un monte, una zanja, un páramo». Y quién entunda lo dice Quiroz en su entrada sobre la Vieja: «los aturde (entunda) y les hace perder el conocimiento».

El apartado 4.2.7 de la tesis de 2016 de Ernesto Ramiro Estacio y Luis Ulpiano Tatamués García aporta lo demás: el borracho que da vueltas, el que se pierde estando cuerdo, los síntomas, el momento en que el médico alude que está quedado, la lista de ovillos de lana roja, negra y verde, esencias de plantas, chapil, cigarrillo y ruda, y la advertencia de que cada comunidad tiene síntomas distintos y formas distintas de controlar el malestar.

Andrea Ojeda Guerrero, en 2006, ya había clasificado en Panán «el espanto o quedado» como una sola entrada entre las enfermedades naturales y culturales, las que se contraen al entrar en lugares sagrados, solitarios, con encanto, en quebradas, puentes y bosques.`,
    versiones: `Tres desacuerdos, y ninguno es menor.

El primero es quién entunda. En Quiroz es la Vieja, con nombre y definición. En el corpus de 2016 la Vieja entunda a los borrachos, pero la Viuda produce el mismo efecto sin que se use la palabra: «a medida que avanza en el camino se va perdiendo el conocimiento hasta que se olvida todo». En un resguardo pasto vecino, Nelson Mejía Putacuar recogió en 2014 un tercer culpable: el duende, que «con el poder de sus ojos entunda a los que tumban el monte y queman la paja».

El segundo es si hace falta que haya alguien. En Yaramal, resguardo pasto del municipio de Ipiales, Robinson Escobar Morillo y Nelson Mejía Putacuar glosaron en 2009 el entunde como «señal de desequilibrio y trastorno tanto físico como mental que presenta la victima que ha sido tocada por cualquier espíritu sobrenatural», y agregaron que «el entunde puede pegar en los sitios huacas o pesados». Allí no se necesita figura: basta el lugar.

El tercero es si son tres nombres o uno. Ojeda, en 2006, escribe «el espanto o quedado» como una sola cosa. Quiroz, en 2015, los separa con síntomas y curaciones distintas, y en la tabla del puesto de salud son dos renglones. El corpus de 2016 se queda en el medio y deja la decisión donde está de hecho: depende del médico, y depende de la comunidad.`,
    leccion:
      "Perder el rumbo es aquí un verbo, no una criatura, y tiene diagnóstico propio.",
    similitudes: `El paralelo mejor documentado viene del resguardo de Yaramal, en el municipio de Ipiales. Robinson Escobar Morillo y Nelson Mejía Putacuar dedicaron allí, en 2009, secciones al entundamiento dentro del capítulo del duende y dentro del capítulo de la viuda, y su glosario define el entunde como el desequilibrio de quien fue tocado por cualquier espíritu, con una precisión que aquí hace falta: «el entunde puede pegar en los sitios huacas o pesados». Eso ata esta categoría con la de las huacas, y explica por qué en Panán la pérdida del camino ocurre en callejones, pozos, quebradas y orillas de cementerio, que son exactamente los sitios que se llaman pesados.

El segundo paralelo es de consulta. En Túquerres, otro resguardo pasto, los diecinueve médicos tradicionales que entrevistaron Portilla, Madroñero y Getial en 2016 encabezan su lista de enfermedades espirituales con el espanto y el mal viento, los mismos dos que encabezan el informe del puesto de salud de Panán, y sostienen que la medicina occidental no puede sanarlas. Dos resguardos distintos, el mismo orden de frecuencia.

Al otro lado de la frontera, en el Carchi, el verbo cambia de raíz: allí dicen enduendar. Es vecindad, no Panán.`,
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
    sourceKeys: [
      "memoriaTerritorial2016",
      "quiroz2015",
      "ruiz2015",
      "espiralAndino2014",
      "yaramal2009",
      "medicinaTradicional2006",
      "tuquerres2016",
      "mamian1996",
    ],
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
    mito: `Antes que tesoro, en Panán la huaca es un hueco. Enguacarse es caerse en uno, y del ganado que caía en una huaca se decía que se moría. Por eso la primera noticia de una huaca casi nunca la da el oro: la da el terreno que cede.

Guillermo Tatamués estaba arando con la yunta en el Afilador, la finca de un terrateniente, preparando para sembrar papas. Iban a ser las tres de la tarde, hora de soltar, cuando uno de los bueyes se hundió la pata y, si no es por el otro que lo jaló, no sale del hueco. Tanteó con la puya y notó el terreno muy blando. Dejó señalando el sitio con unas ramas, soltó la yunta y se fue. Al otro día volvió con el patrón a cavar y la tierra estaba tan dura que fue imposible encontrar nada.

La otra vez la huaca vino andando. Un comunero volvía de noche a la casa de sus padres después de unos hervidos y tenía que pasar por la puerta del cementerio. Frente a la casa de don Fernando Canacuán había una puerca recién parida con toda la manada de puerquitos. La miró y siguió; la puerca gruñía detrás. Apuró el paso, cogió un atajo de dos metros de alto pensando que por ahí no subía, y al voltear ahí estaba, con todas las crías. Corrió los últimos trescientos metros con el cuerpo que ya no le resistía y la borrachera pasada, abrió la puerta de la casa y cayó. La madre sólo alcanzó a oír aullar a los perros. Al otro día le dijeron que eso era la huaca y que era para él, y que por miedo y por desconocimiento la había perdido: la huaca es para el que le quiere dar, no es para todos.

El tres de mayo se sale a velarlas. A la medianoche empiezan a brillar en forma de llamaradas, y quien sale tiene que estar muy atento, aunque los que han ido cuentan que a esa hora siempre les da sueño y no alcanzan a ver nada. El mes entero es así: el año termina en mayo, el mes de las revelaciones, los misterios y las huacas.

Los que las buscan tienen reglas. Se va de a dos, uno cava y el otro vigila. Hay que ir tomado unos aguardientes y fumado un chilca sin filtro, no tener ambición ni pensar en lo que se va a hacer con esa plata. El que cava tiene apenas unos minutos. El que está arriba no puede ser nervioso, no puede hablar ni hacer ruido, porque va a ver animales, fantasmas y peligros; si no resiste y pronuncia algo, la tierra se endura y ya no sale.

Cerca, a trescientos metros del poblado, está el cementerio de la Tuta, donde aparecen cerámicas y figuras de los antepasados. Y en una loma hay un camino de piedra por el que el finado Eustorgio entró unos quince metros y vio una casa que brillaba; mientras más se acercaba, más ventarrón, y el cuerpo se le amortiguaba. Nadie pudo entrar nunca. Con el tiempo hubo un derrumbo y el túnel se tapó. Dicen que ahí está el cacique con todas sus prendas de oro, y que nadie las saca porque es encantado: él mismo se enterró.`,
    historia: `Los dos testimonios tienen nombre y fecha en el apartado 4.2.5 de la tesis etnoliteraria de Ernesto Ramiro Estacio y Luis Ulpiano Tatamués García (Universidad de Nariño, 2016). El de la yunta lo firma Guillermo Tatamués, comunero de Panán, en entrevista de junio de 2013. El de la puerca con crías lo firma Ulpiano Tatamués García, exgobernador del cabildo de Panán, en agosto de 2015. De ese mismo apartado salen la velación del tres de mayo, la frase «la huaca es para el que le quiere dar» y las reglas de los buscadores.

Que la huaca sea antes que nada un accidente del terreno lo fija el glosario de Byron Danilo Ruiz Puetate, de 2015: «Enguacarse: caerse en un hueco; el ganado cuando se caía en una huaca se moría». En ese mismo libro está el relato del cacique de oro, con el finado Eustorgio, la casa que brillaba y el derrumbo que tapó el túnel.

La fecha del tres de mayo no queda suelta en el calendario. Andrea Ojeda Guerrero publicó en 2006, con los médicos tradicionales del resguardo, el cómputo pasto de trece lunas de veintiocho días: el año nuevo empieza entre junio y julio y se cierra en mayo, «mes de las revelaciones, los misterios y las huacas». La velación no cae en cualquier día, cae en el mes en que el año se acaba.

El cementerio de la Tuta, a trescientos metros del centro poblado y al suroccidente del resguardo, con restos de cerámica y figuras de los antepasados, está descrito en el mismo capítulo de 2016.`,
    versiones: `La huaca se anuncia de tres maneras distintas y ninguna fuente las unifica: un hueco bajo la pata de un buey, un animal que persigue de noche, una llamarada a medianoche. La primera es un accidente del terreno, la segunda es una aparición y la tercera es una luz; en el mismo apartado conviven las tres.

También se discrepa sobre por qué no se deja sacar. El corpus de 2016 lo explica por defensa: están protegidas con conjuros y oraciones en lengua de los antepasados por médicos tradicionales o chamanes, y la huaca es celosa, se cambia de lugar y endura el terreno. El cacique de oro de Ruiz lo explica de otro modo: ahí no hay conjuro ajeno, sino un muerto que se enterró a sí mismo, y lo que aparta al que se acerca es el ventarrón y el cuerpo que se amortigua.

Fuera del resguardo la llamarada se lee distinto, y conviene marcarlo. En Catambuco, que es corregimiento del municipio de Pasto y no resguardo pasto, Jaqueline Benavides Vallejo y Édgar Daza Pardo reunieron en 2004 catorce testimonios de huaqueros sobre el arder de huacas, donde el fuego dice qué hay debajo: «Eso que arde cuando es oro y plata, la plata arde blanco, el oro amarillo». Allí se le suma el viernes santo al tres de mayo. En Panán la llamarada avisa que hay algo, pero no se le lee el color, y el que sale a velar casi nunca llega a verla.`,
    leccion:
      "Lo enterrado se anuncia con un hueco, una llamarada o un animal, y rara vez se deja sacar.",
    similitudes: `El paralelo más cercano es de fecha y no de lugar. En Catambuco, corregimiento del municipio de Pasto, los catorce huaqueros que entrevistaron Benavides Vallejo y Daza Pardo en 2004 salen también el tres de mayo, hablan también de huacas que alumbran y que se enduran, y añaden dos cosas que aquí no aparecen: la lectura del color de la llama y el par de varillas, una hembra y otra macho, que se mueven solas hacia el entierro. Ese corregimiento no es resguardo pasto, y por eso sirve para separar lo regional de lo propio.

El segundo paralelo explica una rareza de la velación. Quien sale la noche del tres de mayo, en Panán, cuenta que siempre le da sueño y que no alcanza a ver nada. La monografía de 2009 sobre el vecino resguardo de Yaramal, en Ipiales, glosa el entunde como algo que pega en los lugares huacas y en los sitios pesados: allí la huaca no sólo esconde, también aturde a quien se le acerca. El sueño del velador no es descuido, es el mismo efecto que en Panán tiene un lugar pesado.

Que la fecha sea de todo el pueblo, y no sólo de este resguardo, lo registra además el volumen sobre lugares sagrados del Instituto Colombiano de Antropología e Historia de 2018.`,
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
    sourceKeys: [
      "memoriaTerritorial2016",
      "ruiz2015",
      "medicinaTradicional2006",
      "lugaresSagradosIcanh",
      "huacaCatambuco2004",
      "mamian1996",
      "planVida2005",
      "capuliIles2023",
    ],
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
    mito: `A tres horas de camino, en la parte más alta del páramo de Panán, el suelo se abre en una laguna verde a casi cuatro mil metros. El agua es cristalina y fría, y está quieta de un modo que obliga a bajar la voz. Quien llega le pone nombres: sitio de encantos, laguna de neblinas, nido de cóndores de páramo, jardín botánico, aguas encantadas, aguas de páramo, lugar de purificación de bastones de mando.

Antes de la laguna hubo otra. Cuentan las abuelas que en el resguardo había una gran laguna donde la gente iba a coger agua, y que un día el agua se volvió de una sola tonalidad. Entre los desplazamientos de la tierra, entre los temblores, el agua subió un poco y de ella emergió una matriz que iba creciendo como un vientre, cubierta por una capa transparente, en medio de un remolino de piedras hermosas. Después el agua de la laguna se fue, desapareció, y ahí sólo quedó la matriz. De ella salieron dos espíritus, que se hicieron macho y hembra, y de esos dos nació María Panana. Desde entonces vienen los pananes.

A la laguna se sube cada año. En enero el cabildo sale temprano, con el avío y con ropa de abrigo, porque el camino es largo a pie y hay muchas quebradas que cruzar. Antes de entrar, el cabildo abre sesión en la orilla y pide permiso a los espíritus para entrar a su laguna. Si los taitas hacen bien el ritual, el día amanece bueno; si no, el cielo se nubla del todo y empieza a lloviznar. Allí se posesionan las nuevas autoridades y allí se purifican los bastones de mando.

El agua cura y el agua cobra. Quien se adentra en ella sale con el cuerpo, el alma y el espíritu limpios, curado de los males que lo aquejaban. Pero quien se queda o se espanta corre el riesgo de enfermarse y hasta de perder la vida, y el quedado no se cura con pastillas: hay que ir a recoger el espíritu donde se quedó y traerlo de vuelta.

Por eso a la laguna no se llega de cualquier modo. Es un santuario y se entra con seriedad y con fe: a palabrear, a armonizar el pensamiento, a descansar. El agua, mientras tanto, baja cada año un poco: los mayores señalan hasta dónde llegaba antes y hasta dónde llega ahora.`,
    historia: `El apartado 4.1.5 de la tesis de Ernesto Ramiro Estacio y Luis Ulpiano Tatamués García, presentada en 2016 a la Maestría en Etnoliteratura de la Universidad de Nariño, describe las tres horas de camino, el agua cristalina y fría, la lista de nombres, la purificación de los bastones de mando, el palabreo y el doble desenlace: la purificación para quien entra bien, la enfermedad para quien se queda o se espanta.

El relato del nacimiento lo recogió Alejandro Ruiz Puetate en Nostalgia de chutún, trabajo de grado de la Universidad de Nariño de 2015: según el relato que las abuelas le contaron a Priscila, de la matriz que emergió de la laguna salieron dos espíritus y de ellos nació María Panana.

La subida del cabildo está fechada. Zonia Patricia Puenayán Irua, comunera de Panán, escribe en 2011 que el único ritual del agua que se conserva se celebra en enero en la laguna verde del páramo de Panán, y transcribe a David Cuasquer, mayor curandero de la vereda La Poma, que cuenta la salida a las siete de la mañana, el permiso pedido en la orilla y la señal del clima. Ese año el ritual se hizo el 3 de enero de 2009.

La laguna está medida: el diagnóstico del páramo de Chiles publicado por Corponariño con el Instituto Humboldt y WWF en 2009 registra Laguna Verde a 3.982 metros sobre el nivel del mar, en la cuenca alta del río que aguas abajo es el Carchi.

El quedado no es una figura literaria. El informe mensual del puesto de salud de Panán de marzo de 2015, recogido en el trabajo de Quiroz Malte sobre las médicas y parteras del resguardo, registra cincuenta consultas, y entre las más frecuentes están el mal aire, el espanto y el quedado.

Mamián Guzmán, en 1996, anotó que en Panán la filiación de origen se hace sólo de María Panana, como en Cumbal sólo del cacique Cumbe.`,
    versiones: `Aquí está el desacuerdo mayor del corpus, y no se alisa. Joanne Rappaport, en Cumbe renaciente, edición del ICANH de 2005, escribe en su nota 14: «María Panana fue la cacica mítica de Panán, aunque no aparece en el registro documental». En el cuerpo la llama la cacica más conocida en la tradición oral, y recuerda que en los papeles legales de la Colonia sí se cita a Juan Chiles, que también es figura mítica.

La tesis de 2016 sostiene lo contrario. Reproduce una fotografía con el pie «Firma de Doña María Panám» y otra de un testimonio suyo firmado en los años 1775 y 1776, habla de los documentos escritos que dejó en defensa de su gente y de sus tierras, y los cita desde el archivo del cabildo de Panán. Benavides Játiva y Burbano Lucero, en 2004, citan un documento que María Panana dirigió a la Real Audiencia de San Francisco de Quito pidiendo «amparar las tierras que se llaman panalas… por ser heredadas de nuestros antepasados de panal», y de ahí derivan que Panán viene de «panal».

Las dos posiciones se sostienen a la vez y conviene leerlas juntas: la etnohistoria coloca a María Panana entre las figuras míticas de los Pastos, al lado de Juan Chiles; el archivo del cabildo y los estudios hechos en el resguardo la colocan entre quienes firmaron papeles para defender tierras.

Cambia también el origen de la laguna. La tesis de 2016 la presenta como lugar de armonización y de riesgo, sin relato fundacional; Ruiz 2015 cuenta que de una laguna anterior salió la matriz de la que nació la cacica. Y varía la grafía: María Panana en la tradición oral, María Panám en los documentos citados.`,
    leccion:
      "Un agua que armoniza puede enfermar también a quien llega sin pedir permiso.",
    similitudes: `La cacica que deja huella en la piedra tiene un paralelo vecino documentado. En Muellamués, resguardo pasto vecino, se conserva «la piedra de la cacica», donde ella salía a peinarse, hoy convertida en mojón de límite con Guachucal, y la cacica quedó legitimada como Santa Rosa, entre otras cosas la santa de las parteras. En Panán la fundadora no dejó piedra sino laguna.

El segundo paralelo es el del antepasado que vive en el adentro del agua o de la montaña. En Cumbal, resguardo vecino, el cacique Cumbe está en el centro interior del volcán. En el resguardo de Chiles se cuenta que Juan Chiles se convirtió en toro al sumergirse en la laguna verde, y que su espíritu, el ruani colorado, quedó suspendido en un bastón en el centro de esa laguna: la misma imagen del bastón y el agua que en Panán sostiene la purificación de las varas de mando.

El tercero es de representación y tiene fecha. En el Carnaval de la Epifanía de Panán del 5 y 6 de enero de 1987, la comparsa ganadora, «Los Caciques y sus Descendientes», puso a un hombre representando al cacique Cumbe de Cumbal y a una mujer representando a María Panana, y con ellos dos niños; la escena decía que los comuneros de hoy son renacientes de esos dos.

Lagunas andinas que curan y que cobran hay muchas; el rasgo propio aquí es que la laguna guarda a la fundadora y recibe cada enero los bastones del cabildo.`,
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
    sourceKeys: [
      "rappaport2005",
      "memoriaTerritorial2016",
      "mamian1996",
      "benavidesBurbano2004",
      "ruiz2015",
      "paramoChiles2009",
      "mujeresPastos2021",
      "planVida2005",
    ],
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
    mito: `Cuchicuelan es un rincón húmedo del territorio de Panán, misterioso y de mucha energía, donde las lechuzas anidan y descansan sazonadamente. Es lugar de culebras, nacedero de aguas profundas, rinconcito de sapos, ranas, lagartijas y mariposas. La lechuza que cruza el aire y se posa en los pastizales apartados le avisa al leñador cuando vienen animales peligrosos o gente desconocida.

La Lechuza es también el nombre de una hacienda. Fue de los terratenientes que explotaban a los comuneros de la vereda Puscuelán y del resto de Panán, y los vecinos de la finca sirvieron allí de peones. El nombre del sitio guarda las dos cosas: el ave y el trabajo ajeno.

En ese mismo rincón se asienta el cueche, que en Panán se escribe también cuichi. Se le ve como un arco perfecto, lleno de colores, que nace y termina en sitios húmedos y sale cuando llueve y hace sol al mismo tiempo. Acompaña a las personas en sus recorridos y se va posando de quebrada en quebrada. Los mayores lo cuentan también de otra manera: un espíritu de las montañas con cabeza de buey y el pelo como una cascada, que nace de un hoyo subterráneo y se pierde entre las plantas; donde se lo ve, aconsejan no tomar agua.

El cueche mea. Las mujeres se cubren la cabeza para que no las alcance su llovizna, porque el meado del cueche blanquea el cabello, saca granos en el cuerpo y deja fiebre y malestar. El ojeado cae sobre todo en las mujeres: se les inflama el estómago y parece un embarazo, y sólo los yerbateros y las parteras pueden curarlo.

Contra el arco hay un gesto que se hace rápido. La mujer saca el machete y corta el cueche en cruz, trazando la cruz en la tierra, y dice tres veces: «Santo Dios, santo fuerte, santo inmortal, quítate de mi vista y desaparécete de aquí». También se hace con la peinilla, frente a la casa, apenas el arco aparece. Y como por arte de magia el cueche se desaparece.

Del lado de la lechuza queda el silencio y el aviso; del lado del arco, el color y el daño. Los dos ocupan el mismo nacedero de Cuchicuelan, y ninguno se convierte en el otro.`,
    historia: `El apartado 4.1.7 de la tesis de Ernesto Ramiro Estacio y Luis Ulpiano Tatamués García, presentada en 2016 a la Maestría en Etnoliteratura de la Universidad de Nariño, reúne en una sola sección el sitio de la Lechuza —las aves, las culebras, el agua profunda, los sapos y las mariposas— y la memoria de la hacienda con los peones de Puscuelán, y luego describe el arco, el meado que blanquea el cabello y la cruz trazada con el machete, repetida tres veces.

De esa tesis viene también la grafía «cuichi», que es local. La forma regional es «cueche»: así lo escriben Mamián, así lo escribe la comunera Puenayán Irua y así aparece en las investigaciones de Yaramal, Túquerres y Muellamués, y así se emparenta con el kichwa kuychi del otro lado de la frontera. Son el mismo ser, y aquí se los nombra juntos.

La descripción del cueche como espíritu con cabeza de buey y cabello de varios colores está en el glosario y en las narraciones de mayores de Panán que Alejandro Ruiz Puetate publicó en Nostalgia de chutún en 2015, con la advertencia de no tomar agua donde se lo ve.

Zonia Patricia Puenayán Irua, comunera de Panán, escribió en 2011 que el cueche se asienta de quebrada en quebrada, que tiene siete colores, que los mayores temen los daños que causa en la chagra y que la práctica para hacerlo desaparecer consiste en hacer una cruz en el suelo con la peinilla frente a la casa.

El ojeado no es sólo relato. El informe del puesto de salud de Panán de marzo de 2015, recogido por Quiroz Malte, cuenta cincuenta consultas ese mes y registra tres por cueche, después del mal aire, el espanto y el quedado; el mismo trabajo define el pisado del cueche blanco o negro como espíritu del agua y del aire que inflama el vientre.`,
    versiones: `El desacuerdo empieza en la letra. «Cuichi» aparece sólo en la tesis de 2016 y de ahí pasó al nombre del lugar; toda la literatura regional escribe «cueche». No son dos seres: es una grafía local frente a la forma extendida.

Sobre cuántos cueches hay y cuál es peor, las fuentes no coinciden. La tesis de 2016 dice que los hay de varios colores, pero que el colorado, el negro y el blanco son los más comunes y a la vez los más bravos. En el territorio pasto de Túquerres, diecinueve médicos tradicionales afirman que el negro se pega siempre en quebradas y el blanco en ríos pequeños, y que este último es el más peligroso. En el trabajo sobre tiempo y clima del pueblo de los Pastos se distinguen tres clases con horario y efecto: el blanco, que sale nublado entre las ocho y media y las nueve de la mañana y deja un aro amarillo en los potreros; el negro, espíritu maligno de las ciénagas que puede tomar forma de toro; y el colorado, que vuela con llovizna ligera y produce granos y rasquiña.

Ese mismo trabajo trae una versión narrada por Manuel Tepud Usamá, de sesenta y cinco años, de la vereda Guacuan, en 1990: su papá le prohibía bañarse cuando aparecía el cueche, porque persigue el agua, seca los cultivos y se enrosca en lo hondo de los pozos, y le enseñó a cortarlo con el machete. Es palabra pasto, pero recogida en Ipiales y no en Panán.

En Muellamués, resguardo vecino, se dice en cambio que el cueche es el guardián de los lugares húmedos: allí cuida, aquí enferma.`,
    leccion:
      "Un arco de colores puede ser al mismo tiempo adorno del cielo y enfermedad del cuerpo.",
    similitudes: `El paralelo más cercano está en Túquerres, territorio pasto vecino, donde los médicos tradicionales clasifican el cueche por colores y por el agua en que se pega, y coinciden con Panán en el nombre del mal: el miado del cueche, peligroso sobre todo para niños, ancianos y mujeres embarazadas. La diferencia vale la pena: en Túquerres el más temido es el blanco; en Panán se nombran bravos el colorado, el negro y el blanco por igual.

El segundo paralelo es de oficio. En Muellamués, también resguardo pasto, el cueche es el guardián de los lugares húmedos. Cuchicuelan es exactamente eso, un nacedero de aguas profundas, y ahí el arco se asienta; lo que cambia es el papel que se le atribuye, protector allá y ojeador aquí.

El tercero es el gesto del machete. Cortar el arco en cruz sobre la tierra y rezar está documentado dentro de Panán con la peinilla frente a la casa, y también, con oración distinta, en la versión de un mayor de la vereda Guacuan recogida en Ipiales en 1990. La herramienta de trabajo se vuelve la defensa contra el cielo en los dos casos.

La lechuza, en cambio, no es aquí presagio de muerte como en tantas tradiciones: en las narraciones de mayores de Panán avisa al leñador que se acercan animales peligrosos o personas desconocidas.`,
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
    sourceKeys: [
      "memoriaTerritorial2016",
      "ruiz2015",
      "tuquerres2016",
      "mamian1996",
      "historiaResguardo",
      "planVida2005",
      "puenayan2011",
      "medicinaTradicional2006",
    ],
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
    mito: `A diez minutos del centro poblado de Panán, entre las veredas El Placer Alto y La Merced, dos senderos bajan hasta la boca de una gruta. Al pie hubo una laguna que con los años se fue secando, y el caserío quedó asentado sobre terreno cenagoso. En la parte alta brota un arroyo que atraviesa el poblado y separa El Placer Bajo del centro.

Allí viven tres caciques: Nasate, Juaspuezán y Puenayán. No se los recuerda con figura de hombre sino de dragón, tres dragones metidos en la cueva sagrada del centro del resguardo, y de ellos bajan los pananes, raíces, troncos y retoños de familias luchadoras. Las tres familias se asentaron en ese punto porque desde ahí se rendía culto a las fuerzas que daban el trigo, la cebada, las habas y el maíz.

A pocos pasos afloran fragmentos de cerámica, señal de un cementerio o de un primer asentamiento. Tuta es donde madruga el sol y donde el sol se despide: al lugar llegan los primeros rayos y sobre él cae la sombra antes que sobre el resto del territorio.

Al caer la noche la gruta se llena de minacuros. Las luciérnagas avanzan en procesión y desde lejos aclaran tanto que parece gente de Panán caminando, una ciudad encendida dentro del monte. La cueva conversa con la luna llena, con las estrellas y con el amanecer.

Tuta quiere decir noche, oscuridad, profundidad, túnel. Quiere decir también ojo del mar, mar adentro, cordón umbilical que llega hasta el centro del agua salada. Es la puerta y el inicio del camino: por ahí se entra al adentro, donde el agua y la tierra se encuentran y se engendra la vida. El agua da la existencia, la tierra es la mujer que produce hombres que saben luchar, y de esa pareja vienen los de Panán.

Es un lugar pesado. Hay horas en que no se transita, porque donde está el bien puede estar el mal, y donde está la luz está la oscuridad. La misma boca que refugia acerca la vida y la muerte.

Alrededor de la gruta hay tres nacimientos de agua que se juntan en una acequia y bajan por el centro del resguardo. Tres caciques, tres troncos, tres nacimientos: el agua se repartió por las veredas igual que se repartieron los linajes. Por eso los mayores repiten que son de aquí mismo, que nacieron en esta tierra y que será ella la que los albergue en sus últimos días.`,
    historia: `El apartado 4.1.1 de la tesis de Ernesto Ramiro Estacio y Luis Ulpiano Tatamués García, presentada en noviembre de 2016 a la Maestría en Etnoliteratura de la Universidad de Nariño con asesoría de Dumer Mamián Guzmán, es la descripción más extensa de la gruta: los dos senderos, la laguna seca, los minacuros, el cementerio y la unión del agua y la tierra.

El registro más antiguo que la nombra es de Mamián Guzmán, en «Los Pastos», dentro del tomo IV de la Geografía humana de Colombia, publicado en 1996. Allí se lee que en Panán uno u otro grupo familiar tiene su legitimidad en tres caciques, Nasate, Juaspuezan y Puenayán, que bajo la figura extraordinaria de tres dragones viven en la Tuta, una cueva sagrada en el centro del resguardo, caciques y troncos familiares luchadores desde 1500. Mamián enumera además los linajes de Panán —los Tupue, Puenayán, Tatamués o Cuasquer— y recuerda que los nasates fueron en tiempos prehispánicos un cacicazgo autónomo desalojado por encomenderos y hacendados.

La palabra de la propia comunidad está publicada desde 2011. Zonia Patricia Puenayán Irua, comunera de Panán, escribió para el libro Perspectivas culturales del clima, editado por Astrid Ulloa para la Universidad Nacional y el ILSA, una sección titulada «Leyenda de la cueva de La Tuta»: sitúa el lugar a unos trescientos metros del poblado, en el camino a la vereda Placer Alto, recuerda los minacuros en procesión que aclaraban «que parecía la gente de Panán» y transcribe a Gilberto Puenayán Cuaical, exgobernador, entrevistado en julio de 2009: «Tuta es la puerta, ojo de mar, inicio del camino donde se puede llegar a la unión del agua y la tierra donde se engendra vida».

El profesor José Chalparizán, de Panán, dejó otra versión escrita, recogida por Alejandro Ruiz Puetate en Nostalgia de chutún, trabajo de grado de la Universidad de Nariño de 2015. Y el taita Efrén Tarapués, del Gran Cumbal, al enumerar los sitios donde está la espiral o churo cósmico, dice que «está en la Tuta en Panan», y que a esos lugares hay que entrar con plantas; su testimonio lo reproduce Viveros en 2014.`,
    versiones: `El desacuerdo está en la forma del ser. Mamián, en 1996, escribe tres dragones: uno por cada cacique, tres cuerpos en la misma cueva. La tesis de 2016 escribe un dragón con tres cabezas, y con ella lo repitió el sitio durante años. Las dos lecturas circulan en Panán y ninguna anula a la otra.

La segunda versión tiene autor y fecha. El profesor José Chalparizán la ancla en el terremoto de Cumbal de 1923: en tiempos de glaciaciones y temblores los habitantes quedaron atrapados dentro de un túnel por el hielo, sobrevivieron de los efluvios de sus propios cuerpos y de la madre tierra, se volvieron gente de pequeña estatura que no comía ni defecaba, y al descongelarse el bloque salieron del adentro al afuera. De esa salida nace el dualismo —lo oscuro y lo claro, lo negro y lo blanco, el frío y lo caliente— y se estructura por ley natural el dragón de tres cabezas, entendido no como animal maligno sino como fuerzas energéticas que dan origen a las tres primeras familias.

También cambian los nombres. Mamián lista Nasate, Juaspuezán y Puenayán; Chalparizán lista Tarapués, Puenayán y Nazate; la tesis de 2016 recoge las dos series y añade que algunos hablan de caciques y otros de dueños o líderes de vereda. El tres, en cambio, no se mueve: tres troncos, tres cabezas o cuerpos, tres nacimientos de agua.

El apellido se corrige: es Puenayán. «Puednayán» es una grafía de la tesis de 2016 que el sitio heredó y que ni Mamián ni el archivo de linajes de Panán sostienen.`,
    leccion:
      "Una comunidad puede contar su origen como el encuentro del agua con la tierra.",
    similitudes: `El molde es regional y está documentado. Mamián describe para los Pastos un patrón de comunidades que se identifican con un fundador o una fundadora: Cumbal con el cacique Cumbe, Panán con María Panana, Ipiales con el cacique Ipial, Mayasquer con el cacique Maiker. Panán es el caso en que ese tronco vive dentro de una cueva y se multiplica por tres.

El paralelo más cercano es Cumbal, resguardo vecino: allí el cacique Cumbe está en el centro interior del volcán, y se atribuye prestigio a quienes tuvieron la capacidad de entrar hasta ese centro y hablarle. En Chiles, también vecino, la filiación se hace indistintamente de Graciana Yaquarana, Micaela Chiles o Juan Chiles. Cueva, volcán y laguna cumplen la misma función: guardan al antepasado vivo y en el adentro.

La segunda coincidencia es la espiral. El taita Efrén Tarapués enumera los lugares donde está el churo cósmico y pone juntos Nazate, Chiles y la Tuta de Panán, y los describe como sitios a los que cuesta entrar. La gruta no es entonces un accidente aislado sino un punto de una serie de sitios sagrados que atraviesa varios resguardos del Nudo de los Pastos.

Grutas de origen y animales de varias cabezas existen en muchas mitologías, y el parecido de forma es sólo eso, una coincidencia de imagen: lo que aquí se cuenta es un dragón que sostiene apellidos vivos y reparte veredas.`,
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
    sourceKeys: [
      "memoriaTerritorial2016",
      "mamian1996",
      "puenayan2011",
      "rappaport2005",
      "ruiz2015",
      "medicinaTradicional2006",
      "planVida2005",
      "historiaResguardo",
    ],
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
    mito: `En Panán salen de noche tres, y los nombres se cambian de boca en boca.

A una la llaman la Vieja. Camina jorobada y hasta cotuda, flaca y cadavérica, con follones de bayetilla de colores oscuros, pañolón de riata, los pies descalzos, el cabello enredado y sucio bajo un sombrero que casi le tapa la cara, y los pechos tan grandes que los lleva echados al hombro. No conviene hacerla llorar: el estruendo despierta a los perros y empiezan a aullar. Sale a los borrachos, los entunda y los deja sin norte; cuando despiertan están en el pantano, revolcados como si hubieran trabajado, con fiebre y con dolor de cuerpo, de cabeza y de huesos. Al que le salió se le manda rezar un novenario y pagar la promesa de no volver a emborracharse, y si no la paga, dicen, se lo come y le vacía los intestinos.

A otra la llaman la Viuda. Esa es joven, hermosa, sonriente, elegante, y se presenta con la ropa de la novia o de la mujer en la que el hombre está pensando. Pasa junto a las cantinas y sólo se deja ver del que trae malos pensamientos. Lo saca, lo invita a jugar y a correr, y nunca se deja alcanzar. Mientras avanza, el que la sigue va perdiendo el conocimiento hasta olvidarlo todo, y ella lo lleva hacia una chorrera, un río o un lago para derrumbarlo. El que no está muy borracho se da cuenta y forcejea; el que sí, se desmaya, y si entra al agua muere o despierta sin memoria. Nunca muestra la cara: los ojos son como rayos de luz o carbones encendidos.

Y hay una tercera que no persigue a nadie. El ánima es altísima y completamente delgada, vestida de seda blanca, y anda en el aire muy despacio. Es preferible no mirarle la cara, porque es una calavera, o cabellos largos y blancos. Al encontrarla hay que recostarse en cruz, boca abajo, y dejarla pasar. Después conviene seguirla: es presagio de buena suerte, y a la tumba donde llega se le manda una misa de honras.

Y hay un punto, cerca del monte del Rosario, que se llama la Moledora. Allí había una vieja que se llevaba a los niños y los metía en una piedra plancha gigante, y se los iba comiendo. Con una trampa la atraparon y la quemaron.`,
    historia: `Las tres figuras están en el apartado 4.2.3 de la tesis etnoliteraria de Ernesto Ramiro Estacio y Luis Ulpiano Tatamués García (Universidad de Nariño, 2016), que las agrupa bajo un solo título y les dedica la descripción más larga de todo su capítulo de espíritus.

La segunda fuente es de un año antes y de otro oficio. Erica Susana Quiroz Malte publicó en 2015 su trabajo sobre las mujeres y la medicina tradicional del resguardo, con entrevistas fechadas a Rosario Ipial el 29 de septiembre de 2014, a Herminia Malte el 21 de julio de 2014 y a Martha Quiroz el 18 de septiembre de 2014. Allí la Vieja y la Viuda no son cuentos sino diagnósticos: están clasificadas como enfermedades del monte, junto a la mala hora, y la manera de prevenirlas es no caminar a las doce de la noche por sitios solitarios, por el monte o por casas abandonadas. Doña Esperanza le contó a Quiroz lo de don Luis, que en el sitio que llaman el hueco vio de lejos a una señorita muy bonita y de cerca le alcanzó a mirar la cara horrible, y se salvó gritando y llorando.

El ánima tiene también registro médico y registro ritual. Andrea Ojeda Guerrero describió en 2006 el mal del ánima como el espíritu de un muerto que penetra en el cuerpo de un vivo, con asco, decaimiento y piel amarilla, y la curación con cuero de borrego negro. Byron Danilo Ruiz Puetate recogió en 2015 el mal de cementerio, y también, de boca del taita Carlos Chalparizán, médico tradicional de Panán, los rituales de noviembre en que las familias reunían comida, cuyes y gallinas y ponían la ofrenda al familiar muerto ese año, porque al año vienen las ánimas.

La Moledora es de Panán y está en ese mismo libro de Ruiz: un punto cerca del monte del Rosario.`,
    versiones: `Aquí está el desacuerdo más grande del corpus, y no se resuelve: los dos nombres tienen los atributos cruzados.

Para Quiroz, en 2015, la hermosa es la Vieja. Escribe que esos malos espíritus se encuentran en callejones, pozos, ríos, cementerios y quebradas, que atacan a los borrachos y se les presentan «en forma de una mujer hermosa, vestida toda de negro», que los entunda hasta dejarlos sin conocimiento y que trata de llevárselos a ríos, puentes, casas abandonadas o chorreras. Y la fea es la Viuda: de faldas largas y anchas, chal ancho, sombrero grande, «las uñas largas, su cara alargada, fruncida y sus dientes sobresalidos», que sale a los hombres con malos pensamientos y a los borrachos y los hace aparecer sin ropa, en lugares misteriosos, con mordeduras, chupados y quemaduras.

El corpus de 2016 reparte exactamente al revés: la Vieja es la cadavérica y jorobada, la Viuda es la joven hermosa. El mismo testimonio de doña Esperanza, en Quiroz, no cabe en ninguna de las dos casillas: la mujer era bonita de lejos y horrible de cerca.

La Moledora tiene su propio doble filo. Ruiz la sitúa en Panán, cerca del monte del Rosario. En el resguardo vecino de Chiles, el estudio de Corponariño, el Instituto Humboldt y WWF de 2009 registra una microcuenca del río Moledora que recibe aguas de la quebrada el Rosario y anota que el sector «tiene gran significancia mítica en la región». Y existe un libro entero sobre ella, La Moledora. El último mito de los Pastos, de Édison Ávalos y Ana Vásquez, publicado por Abya-Yala en 2017 y recogido en la comuna La Esperanza del Carchi y en el resguardo de Chiles, que limita con Panán; no es de acceso abierto y aquí se cita por su existencia y su procedencia.`,
    leccion:
      "Dos nombres pueden intercambiar rostro sin que la aparición deje de reconocerse por lo que hace.",
    similitudes: `El paralelo mejor documentado viene otra vez de Yaramal, resguardo pasto del municipio de Ipiales, donde la monografía de 2009 de Escobar Morillo y Mejía Putacuar dedica un capítulo a la vieja del monte y otro, el sexto, a la viuda; ese capítulo se organiza en historia, entundamiento en el territorio y visiones y transformaciones de la viuda, de modo que allí también la aparición seductora y la pérdida del conocimiento van juntas, y allí también son dos figuras y no una.

El segundo paralelo cruza la frontera y conviene leerlo como tal. En Tufiño, provincia del Carchi, los narradores que reunió Édison Ávalos en 2020 dicen que «la viuda se distingue por vestir una follera negra» y que «les sale a los hombres mujeriegos»: el vestido negro coincide con la mujer de Quiroz y el motivo con el de Panán, pero el nombre está puesto en la otra de las dos. El cruce, entonces, no es un error de una tesis: es cómo circula la pareja en toda la frontera.

Dentro del resguardo, la Vieja es quien entunda, y la palabra tiene página propia. El ánima, en cambio, no entunda a nadie: pide ser reconocida, y su respuesta no es la limpia sino la misa.`,
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
    sourceKeys: [
      "memoriaTerritorial2016",
      "quiroz2015",
      "ruiz2015",
      "yaramal2009",
      "medicinaTradicional2006",
      "paramoChiles2009",
      "mamian1996",
      "espiralAndino2014",
    ],
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
    mito: `Waka es una palabra, y la palabra pesa más que el metal que nombra. En Panán sirve para decir a la vez la riqueza enterrada y la relación con ella: fe y esperanza de los pueblos aborígenes, riqueza cultural, poder económico y social, y el modo en que los espíritus de la madre tierra y la gente siguen tratándose.

Las guacas no se imaginan como cajas. Se dice que son cofres llenos de poder espiritual, y que están figurados en pieles de animales: el buey, la gallina con sus pollos, el cerdo, el perro, la culebra. Por eso, cuando una de esas figuras se le atraviesa a alguien en el camino, lo que se le atravesó no es un animal perdido. Es la forma que tomó lo enterrado para dejarse ver. Cada una trae su oficio encima: el buey el trabajo, la gallina con los pollos la cría, el cerdo la comida guardada, el perro el umbral de la casa, la culebra lo que corre por debajo. Están reservadas para un reencuentro, y mientras ese reencuentro no llega, siguen ahí.

A los enterrados se les dice también los infieles: son la gente antigua, la de antes. Y tienen su día. En la madrugada del tres de mayo se manifiestan con más fuerza que nunca, y salir a buscarlos no es profanar: es la forma que tiene el año de cerrar.

Los mayores recorren el territorio por eso. No van a sacar nada: van a proteger de la usurpación la riqueza que está hecha tierra. Porque una guaca abierta por manos ajenas ya no es guaca. En el antiguo cementerio, donde abundaron tumbas de familias antiguas, se ve lo que queda cuando pasan los saqueadores: un lugar despojado, y la memoria de que ahí había gente.

Así, la waka no termina donde alguien extrae. Al contrario: la waka es lo que sostiene el trato entre los que están debajo y los que siembran encima, para que la madre tierra siga brindando los alimentos de los que vive la gente. El poder no está en lo que se saca. Está en lo que se deja quieto, y en saber que sigue ahí, bajo el pie, cargado de colores, de aromas y de nombres que todavía se reconocen.`,
    historia: `En su apartado 4.2.6, la tesis de Ernesto Ramiro Estacio y Luis Ulpiano Tatamués García, sustentada en Pasto en 2016, separa deliberadamente la waka de las huacas: una recoge las experiencias, la otra las interpreta. De ese apartado vienen el lenguaje simbólico «cargado de aromas, colores y variedades», la fe y la esperanza, la riqueza cultural y el poder económico y social, los cofres llenos de poder espiritual figurados en pieles de animales, los mayores que recorren el territorio para proteger de la usurpación la riqueza «enterrada echa tierra», y la lista de figuras: el buey, la gallina y los pollos, los cerdos, los perros, las culebras.

El cementerio despojado está en el libro de Byron Danilo Ruiz Puetate de 2015, que al recorrer las huellas del territorio de Panán anota, cerca del antiguo cementerio, un «lugar despojado por saqueadores de huacas, donde abundaron tumbas de familias antiguas».

La palabra «infieles» y la fecha vienen del Instituto Colombiano de Antropología e Historia. En el volumen sobre lugares sagrados que editaron Marta Saade Granados y Carlos Páramo Bonilla en 2018 se lee que el pueblo pasto tiene fechas, «como la madrugada del 3 de mayo, en la que la procura de la sacralidad justamente se sanciona mediante la búsqueda y extracción de "infieles", o sea, de "guacas" (entierros de la gente antigua), ya que estos se manifiestan con particular vehemencia en esa jornada». Es el mismo volumen que discute cuándo la guaquería tiene lugar cultural legítimo y cuándo es despojo.

El título conserva la grafía del corpus. Las tres formas —waka, guaca, huaca— aparecen mezcladas en las fuentes de Panán y no se uniforman aquí.`,
    versiones: `Las tres grafías no son un descuido: son tres alcances de la misma palabra. Huaca es el hueco y el entierro, guaca es lo que arde y se busca, waka es lo que la comunidad decide que esas cosas significan. El corpus de 2016 usa las tres en dos apartados seguidos y no las jerarquiza.

Hay también dos lecturas opuestas de la extracción. Para el apartado de la waka, la riqueza está para ser protegida de la usurpación y los mayores caminan el territorio con ese oficio. Para el volumen del Instituto Colombiano de Antropología e Historia de 2018, en cambio, la búsqueda del tres de mayo es ella misma un acto de sacralidad sancionado por el pueblo pasto: no la profanación de la fecha sino su cumplimiento. Sacar y cuidar no se oponen tan limpiamente como parece.

Y debajo de la palabra hay un piso material que ninguna de las dos lecturas menciona. Óscar Mendoza Acosta y Henry Marín publicaron en 2023 la excavación de cuarenta y siete contextos funerarios inalterados en la vereda El Porvenir del municipio de Iles, con cerámica del complejo Capulí fechada en los siglos IV y V de nuestra era, hallados porque el terreno los había protegido de la guaquería. Iles no es Cumbal ni es Panán: es la misma región, y es lo que hay literalmente debajo de esta palabra.`,
    leccion:
      "La riqueza enterrada se nombra distinto según se la busque, se la cuide o se la excave.",
    similitudes: `El primer paralelo es la grieta que abre el volumen del Instituto Colombiano de Antropología e Historia de 2018. Allí el capítulo de Luis Alberto Suárez Guava describe cerros del centro del país que la gente tiene por guacas: «la han visto alumbrar… la saben hueca por dentro y la han oído bramar». Es otra región, y sin embargo coincide en lo esencial con lo que dice el corpus de Panán: la guaca no es un contenido sino una potencia con voluntad, que se manifiesta, se mueve y escoge. El mismo volumen documenta la madrugada del tres de mayo como práctica del pueblo pasto.

El segundo paralelo es arqueológico y regional. Las cuarenta y siete tumbas Capulí de El Porvenir, en Iles, excavadas por Mendoza Acosta y Marín en 2023, muestran qué contienen de hecho estos entierros: ajuares cerámicos, cámaras con lajas, más de un entierro por tumba, y vínculos con los grupos prehispánicos del norte del Ecuador. Iles es del mismo departamento y del mismo complejo cultural; no es Cumbal ni es resguardo de Panán.

Dentro del resguardo, esta página nombra lo que la página de las huacas cuenta. Allí un buey se hunde y una puerca persigue; aquí el buey y el cerdo vuelven convertidos en las figuras que toma lo enterrado.`,
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
    sourceKeys: [
      "memoriaTerritorial2016",
      "lugaresSagradosIcanh",
      "capuliIles2023",
      "ruiz2015",
      "mamian1996",
      "huacaCatambuco2004",
      "rappaport2005",
      "medicinaTradicional2006",
    ],
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
    mito: `En lo alto del páramo de Panán, en el sector que llaman Ciénaga Larga, el terreno se hunde en un vaso poco profundo y el agua se queda. El talud que lo cierra no lo levantó nadie: fue la morrena lateral de una lengua de hielo, y el hueco que dejó aquella lengua al retirarse es hoy la ciénaga. Guamurrán es, literalmente, la huella de un glaciar llena de agua.

Arriba no hay árboles. Hay pajonal, cortadera, turba, y un nivel freático tan alto que lo que parece pasto firme cede bajo el pie. La neblina entra por la mañana y se queda; la lluvia no corre, se guarda en el suelo esponjoso y sale despacio.

Por eso a Guamurrán le dicen madre de agua: no porque una mujer viva dentro, sino porque de allí sale lo que beben otros. El agua no se queda en la ciénaga. Alimenta a Panán y sigue bajando hasta el resguardo de Chiles, y más abajo se junta con el río Carchi, que recoge las aguas de todo el resguardo y sigue hacia los municipios de la zona. La quebrada que sale de la ciénaga se llama Guamurrán, y también Tambillo, y termina en el río Nazate.

El reparto tiene una vuelta que los mayores conocen bien. La bocatoma que surte a la vereda Nazate, que es de Chiles, está parada en territorio de Panán. El agua nace de este lado y se bebe del otro: cientos de familias vecinas toman de un nacimiento que no queda en su resguardo.

También se intentó guardar el agua. En la ciénaga se levantó un embalse para un distrito de riego que iba a inundar doce hectáreas y repartir el caudal a las veredas del resguardo. La obra se hizo, el agua se represó, y los resultados fueron muy pocos: los predios que iban a reverdecer siguieron esperando la lluvia.

El páramo, en cambio, no dejó de trabajar. Cada enero el cabildo sube a estos lugares altos a pedir permiso y a tomar posesión, y del agua que nace aquí dicen que es agua bendita, que se puede beber sin tratarla porque sale limpia. La ciénaga sigue soltando, gota a gota, lo que el hielo le dejó guardado.`,
    historia: `El apartado 4.1.3 de la tesis de Ernesto Ramiro Estacio y Luis Ulpiano Tatamués García, presentada en 2016 a la Maestría en Etnoliteratura de la Universidad de Nariño, describe Guamurran en pocas líneas: el lugar donde nace el agua que alimenta a Panán y al resguardo de Chiles, que más abajo se hace afluente del río Carchi, y una represa de riego con muy pocos resultados.

La explicación de por qué ahí nace el agua está en un trabajo de ingeniería. William Martín Calpa Tupue presentó en 2010 a la Universidad de Nariño el apoyo técnico a la construcción del distrito de riego de Guamorran, y allí escribe que el embalse se encuentra en un área de vaso natural donde, por su alto nivel freático, se presume que hubo un embalse natural formado por acción glaciar, y que el terraplén existente «fue una morrena lateral de una lengua glaciar». El mismo informe registra las doce hectáreas a inundar, los 376.259 metros cúbicos de capacidad, las once veredas del resguardo que se iban a beneficiar y la constancia del gobernador del cabildo de que el sector Ciénaga Larga pertenece al resguardo.

El dato del reparto sale de una fuente institucional. El estudio del estado del páramo de Chiles que Corponariño publicó con el Instituto Humboldt y WWF en 2009 describe la quebrada Guamurrán o Tambillo como afluente del río Nazate y anota que la bocatoma del acueducto de la vereda Nazate, que beneficia a 435 familias, se encuentra, según el reconocimiento de campo, «en territorio de Panán, aspecto que se debe verificar en próximos estudios».

Zonia Patricia Puenayán Irua, comunera de Panán, escribió en 2011 que las fuentes del páramo, la ciénaga larga y la laguna verde son las mayores del resguardo, que su agua se llama agua bendita y se bebe sin tratamiento, y que el cabildo sube cada enero a posesionarse en la laguna.`,
    versiones: `El nombre no está fijo. La tesis de 2016 titula el apartado «Guamurran: madre de agua»; el informe de riego de 2010 escribe Guamorran en la portada y en el cuerpo; el estudio de páramos de 2009 escribe Guamurrán y añade que la misma quebrada se conoce también como Tambillo; el listado de planadas del páramo de Panán de 2004 registra Guamorrán. La dirección pública usa Guamurran.

Tampoco coinciden los límites. La tesis de 2016 cuenta el agua desde Panán hacia Chiles y el Carchi, sin discutir de quién es el nacimiento. El estudio de 2009, que es un diagnóstico del resguardo de Chiles, ubica la bocatoma del acueducto de una de sus veredas dentro de Panán y deja el asunto por verificar. No es un desacuerdo mitológico sino de linderos, y la etnografía regional muestra que es viejo: entre los enfrentamientos intercomunales de los Pastos figura el de Chiles y Panán por Nasate, justamente ese sector.

Sobre la represa las cifras son de un solo trabajo, el de 2010, y el juicio sobre sus resultados es de otro, el de 2016. Lo que las fuentes sostienen del lugar es el nombre —madre de agua— y el reparto: la ciénaga guarda lo que cae y lo suelta despacio hacia abajo, y de ese oficio le viene el nombre.`,
    leccion:
      "El agua que nace en un territorio muchas veces se bebe en otro.",
    similitudes: `Llamar madre a un nacimiento es un uso registrado dentro del propio resguardo. En el relato de la fuente de agua cristalina, los mayores de Panán decían que aquella fuente era «la mamá de las fuentes de agua» y que, si desaparecía, existía la posibilidad de que las otras fuentes del resguardo también se secaran. Guamurrán hereda esa manera de nombrar: la maternidad está en la dependencia, no en una figura.

El segundo paralelo es de linderos y está documentado en la etnohistoria de los Pastos. Entre las confrontaciones intercomunales por límites que todavía laten, la que se nombra para este sector es la de Chiles y Panán por Nasate. La bocatoma que un resguardo tiene en el páramo del otro es la forma cotidiana de ese mismo pleito, y es también lo que obliga a los dos cabildos a cuidar el mismo pajonal.

Dentro de Panán hay otros nacimientos con oficios distintos: el Cucho de Cuaichala surte el acueducto y la devoción, el Cualchio se asocia con el granizo y con recuperar caudal, el Chuchun con el baño y la unión de tres quebradas. Guamurrán es el único que se mide en hectáreas inundadas y en familias de otro resguardo.

Ciénagas de páramo convertidas en embalses hay en toda la cordillera; aquí lo específico es que el vaso ya existía y lo dejó el hielo.`,
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
    sourceKeys: [
      "memoriaTerritorial2016",
      "calpaTupue2010",
      "paramoChiles2009",
      "puenayan2011",
      "planVida2005",
      "historiaResguardo",
      "planDesarrolloNarino2024",
      "mamian1996",
    ],
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
    mito: `Chuchun quiere decir seno en quichua, y el nombre le viene del nacedero. Allí el agua brota templada, propicia para el baño, y no sale por un solo sitio: brota entre los terrenos cubiertos de chaparros pequeños, en distintos puntos, de modo que cada persona escogía el suyo. Mucha gente de la comunidad subía a bañarse a campo abierto, y el lugar no tenía una poza sino muchas.

Lo grande de Chuchun, sin embargo, es lo que se junta debajo. Ahí se unen las tres quebradas que recorren buena parte del territorio: Aucué, Lájaro y Guacales. Vienen cada una por su lado y se encuentran en el mismo punto, y en esa unión está guardada la memoria histórica de los pananes.

Por los valles de esas quebradas se caminaba a diario. Hombres y mujeres bajaban de peones a trabajar al otro lado del río, en Ecuador, y volvían con lo que se podía llevar a la casa para alimentar a los hijos. Esos hijos son hoy parte del nuevo liderazgo de la comunidad. Las mismas aguas que servían para el baño marcaban el camino del jornal.

Chuchun es además el lugar donde se enterraban las placentas de las madres que acababan de dar a luz. Ese saber lo guardan las parteras y los médicos tradicionales de la comunidad, y en él se juntan varios conocimientos a la vez.

El sitio tiene su hora. Los mayores de Panán advierten que a malas horas no hay que andar cerca del chuchun, porque a ciertos momentos de la noche la malhora flota sobre esas aguas. El baño es de día; la quebrada de noche es otra cosa.

Todo lo que pasa por Chuchun termina yéndose junto. Las tres quebradas siguen bajando de occidente a oriente y desembocan, como el resto de las aguas del resguardo, en el río Carchi, que es el límite con el otro país y el mismo que cruzaban los peones. El agua que se usó para nacer, para bañarse y para trabajar sale del territorio por una sola puerta.`,
    historia: `El apartado 4.1.8 de la tesis de Ernesto Ramiro Estacio y Luis Ulpiano Tatamués García, presentada en 2016 a la Maestría en Etnoliteratura de la Universidad de Nariño, es la fuente del conjunto: la etimología quichua de chuchun como seno, el nacedero de aguas templadas y los baños a campo abierto entre chaparros, la unión de las tres quebradas Aucué, Lájaro y Guacales, el paso diario de los peones al otro lado del río y el entierro de las placentas bajo el cuidado de parteras y médicos tradicionales.

Los topónimos están confirmados fuera de la tesis. El estudio de dinámica poblacional del resguardo que Benavides Játiva y Burbano Lucero presentaron a la Universidad de Nariño en 2004 registra entre las quebradas que bañan la población a Puscuelán y Aucué, describe los valles que forman las quebradas del resguardo y anota que todas las aguas de Panán corren de occidente a oriente y desembocan en el río Carchi, que es el límite con Ecuador.

El aviso sobre la hora está en Nostalgia de chutún, el trabajo que Alejandro Ruiz Puetate presentó en 2015 a la misma universidad con narraciones de mayores de Panán: allí se escribe que la malhora flota en el chuchun a ciertas horas de la noche y que por eso no se debe andar a malhoras cerca del chuchun.

Sobre el nacimiento y el cuidado del cuerpo, el trabajo de Quiroz Malte de 2015 sobre las médicas y parteras de Panán, con entrevistas fechadas entre septiembre y octubre de 2014 a Rosario Ipial, Herminia Malte, Martha Quiroz y Carlos Chalparizán, documenta el embarazo, el parto, el posparto y el cuidado del ombligo del recién nacido en el resguardo.`,
    versiones: `La tesis de 2016 arma el lugar con cuatro capas y no con dos relatos rivales: el nombre, el baño, la confluencia de las quebradas y el entierro de las placentas. Están puestas una junto a otra, como rasgos simultáneos del sitio, y cada una podría leerse sola.

La lista de las tres quebradas varía según quién escriba. La tesis nombra Aucué, Lájaro y Guacales, y las junta en un punto. El estudio de dinámica poblacional de 2004 registra Aucué y Puscuelán entre las quebradas que bañan la población y sitúa Guacales dentro de la hidrografía del resguardo, repartidas por el territorio en vez de reunidas. La tríada pertenece al relato; los cauces, al mapa.

La etimología queda como la da la fuente. Chuchun se traduce del quichua como seno, y el propio texto explica que el nombre honra el nacedero de aguas templadas: la traducción va unida al agua que brota, no a una figura materna.

Del entierro de las placentas queda la formulación de la tesis, que es breve y conviene conservar tal cual: allí se enterraban las de las madres que acababan de dar a luz, y es un sincretismo que guarda un cúmulo de saberes en las parteras y los médicos tradicionales de la comunidad.`,
    leccion:
      "Tres corrientes que se juntan pueden guardar el baño, el jornal y el nacimiento de un pueblo.",
    similitudes: `Dentro del propio resguardo hay otro lugar de tres nacederos con relato propio. En un bosque nativo de la vereda La Esperanza salían tres nacimientos de agua muy limpia; a don Félix, que daba de beber a las vacas, se le apareció un anciano muerto que había cuidado ese lugar en vida y le contó que todo aquello había sido monte y que debían preservarlo. Cuando don Félix lo contó al gobernador, el cabildo y la comunidad empezaron a cuidar esos nacederos, y desde entonces se cuidan otros. El tres, el agua y el mandato de cuidado se repiten; Chuchun añade el baño y el trabajo.

El segundo paralelo es la frontera. El río que recoge todas las aguas del resguardo es el mismo que cruzaban los peones para ir a jornalear al Ecuador: el límite internacional y el desagüe del territorio son la misma línea. Esa coincidencia está registrada en la hidrografía del resguardo y explica por qué el camino del trabajo iba pegado al camino del agua.

Frente a los otros lugares de agua de Panán, Chuchun es el único templado. Guamurrán guarda el agua de dos resguardos, el Cualchio la reparte desde el frío, el Cucho de Cuaichala surte el acueducto. Aquí el agua no se recoge: se entra en ella.`,
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
    sourceKeys: [
      "memoriaTerritorial2016",
      "puenayan2011",
      "benavidesBurbano2004",
      "quiroz2015",
      "historiaResguardo",
      "planVida2005",
      "mamian1996",
      "paramoChiles2009",
    ],
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
    mito: `El chutún no llegó solo al monte de Panán: lo sembraron. La gente de adelante lo puso ahí para cuidar la casa y para tener buena comida, y desde entonces vive donde crían las moras y sobre todo los chercheres, esa fruta que se parece al capulí y que crece en las hileras y en los cercos naturales de la chagra.

Nadie sabe bien qué forma tiene. Se lo ha visto como un ovillo de lana roja, como un montón de ramas, como un animal de no muy buena apariencia. De él se dice que es un espíritu grande de los alimentos, que no se sabe dónde tiene la boca ni por dónde desfoga plantas y quindes, y que camina con pies de gallo. Lo que sí se reconoce es el aviso: por donde pasa deja una fragancia muy rica. Donde huele así, está.

Al chutún se lo respeta. Se puede comer del checher todo lo que se quiera mientras la mata quede viva; ahí no hay inconveniente, porque para eso lo sembraron, para que hubiera comida. El trato se rompe cuando alguien arranca las ramas, pisa los brotes o acaba con la planta después de recoger: entonces el cuidador sale en defensa de su comida preferida, se deja ver en la figura desagradable y hace que la persona se retire.

Y cobra. A los papás se les oyó siempre la misma advertencia: no te vayas tarde a los chercheres y a las moras, porque te sale el shutún. Hace chandas. Levanta granos en la cara de aquel a quien se aparece, y esos granos no se le quitan nunca. A los niños los deja con síntomas de espanto, y hay que llevarlos donde el médico tradicional para que les cure el ojeado. Y si llega a morder a quien robó comida o lo maltrató, le puede podrir la mano.

Por eso, cuando la tierra se deja descansar y el barbecho se llena de matorral, nadie dice que el lote esté abandonado. Ese es el espacio del chutún, y de los tiesos, y de los lagartijos verdes, y de todo lo que está del lado de los muertos. Ahí ellos cargan el suelo de energía germinal para la siembra que vendrá. El cerco vivo no es un límite entre lo cultivado y lo silvestre: es el sitio donde vive el que fue puesto a cuidar.`,
    historia: `La corrección de fondo la trae Byron Danilo Ruiz Puetate en el libro que lleva el nombre de este ser, Nostalgia de chutún, presentado en 2015 a la Universidad de Nariño y escrito desde los montes del resguardo. Allí quien habla es doña Herminia Malte, médica tradicional de Panán: «Espíritu que habita en las montañas cerca de donde crían muchas moras y sobre todo chercheres; la gente de adelante lo sembró para cuidar la casa y para tener buena comida; al Chutún se lo respeta, no se lo maltrata si se lo llega a ver; el bota una fragancia muy rica; puede ser un ovillo de lana o un montón de ramas, protege los cultivos y, si lo llega a morder por robar comida o maltratarlo, le puede podrir la mano». En el mismo pasaje está la advertencia de los papás, las chandas y los granos en la cara que no se quitan nunca.

El resto sale del apartado 4.2.4 de la tesis que firmaron en 2016 Ernesto Ramiro Estacio y Luis Ulpiano Tatamués García: el checher, los cercos naturales, el permiso de comer sin destruir, la figura animal que aparta al agresor y el ojeado que enferma a los niños.

Que el chutún sea dueño del barbecho lo escribió Dumer Mamián Guzmán en 1996, en su estudio de los Pastos para la Geografía humana de Colombia: en el sistema de rotación, el período de descanso «es el espacio del Chutún, los Tiesos, los lagartijos verdes y otras entidades ligadas a los muertos y el más allá que llenan de su energía germinal para la vida posterior».

Andrea Ojeda Guerrero ya lo había registrado en 2006 dentro de Panán, en la lista corta de espíritus con capacidad de enfermar del resguardo: el cueche, el chutún, el llorón o chuzo y la mala hora.`,
    versiones: `La diferencia grande es si es silvestre o sembrado. El corpus de 2016 lo presenta como espíritu cuidador que estaba ahí y que reacciona; la palabra de Herminia Malte, en Ruiz, lo vuelve un guardián puesto por los antiguos con un encargo doble, cuidar la casa y asegurar la comida. Eso cambia la figura: no es un dueño del monte que tolera la cosecha, es un trabajador contratado hace generaciones que cobra cuando lo maltratan.

Tampoco coinciden en cómo castiga. En 2016 asusta y hace retirarse; en Ruiz muerde y pudre la mano, hace chandas y deja granos permanentes; en los dos enferma a los niños con espanto.

La forma es lo más suelto de todo: duendecillo, animal feo, ovillo de lana roja, montón de ramas, espíritu grande sin boca reconocible y con pies de gallo. La escritura también baila entre chutún y shutún.

Y hay una lectura que no es de Panán y que conviene marcar. Entre los chagreros del resguardo de Yaramal, en el municipio de Ipiales, la monografía de Escobar Morillo y Mejía Putacuar anotó en 2009 esto: «El chutún es como abono, como el humus que devuelve la misma planta, da la humedad y nutre el suelo, por eso no se debe hacer correr al chutún porque donde está él hay bastante producto y en las partes que se ha ido todo se pierde ya no se da nada». Allí no es un guardián que castiga: es una fuerza fertilizadora que se pierde si la espantan.`,
    leccion:
      "Un guardián sembrado por los antiguos sigue cobrando lo que se le arranca al cultivo.",
    similitudes: `El paralelo más útil es una inversión, no una copia. Al otro lado de la cordillera, en un resguardo del municipio de Ipiales, los chagreros leen al chutún como abono y humedad y sostienen que hacerlo correr empobrece el lote; en Panán el mismo ser muerde, pudre la mano y deja granos que no se quitan. Guardián que cobra y fuerza que fertiliza son dos maneras pasto de explicar por qué el cultivo rinde donde rinde. Yaramal no es Panán, y la diferencia entre las dos lecturas es justamente lo que vale mirar.

El segundo paralelo es de escala regional y lo firma Dumer Mamián en 1996 para todo el pueblo de los Pastos: el chutún pertenece al tiempo de descanso de la tierra, junto a los tiesos, los lagartijos verdes y las entidades ligadas a los muertos. El barbecho no es tierra vacía sino tierra en manos de otros; eso explica por qué el cerco natural y la orilla del cultivo son su sitio en las dos versiones.

Dentro del resguardo, el duende también es pequeño y también ojea, pero se lo cura con agua y su mundo es el de abajo; el chutún es de arriba de la tierra, del surco y de la mata. En la consulta del resguardo son dos entradas distintas.`,
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
    sourceKeys: [
      "memoriaTerritorial2016",
      "ruiz2015",
      "mamian1996",
      "yaramal2009",
      "medicinaTradicional2006",
      "tuquerres2016",
      "medicinaMujerTerritorio2020",
      "quiroz2015",
    ],
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
    mito: `Arriba, donde el páramo se quiebra en alturas cubiertas de arbustos, el terreno se hunde en una olla. También le dicen ojo de agua, porque de ese fondo sale el río Cualchio, que baja al río Blanco y con él al Carchi. La olla no es una vasija enterrada ni el caldero de nadie: es la forma del suelo, un hueco entre laderas donde el agua se junta antes de irse.

Los mayores dicen que ahí nace la precipitación. Que el granizo aparece en ese punto y de ahí sale a caer sobre el resto del territorio. En invierno la olla graniza casi siempre, y de granizar se hacen las grandes fuentes de agua: el hielo golpea la vegetación, se derrite entre la paja y engruesa los arroyos.

El monte que la rodea todavía tiene lo suyo. Arrayán, cerote, león, encino, cuaza, amarillo, caspimote. El suelo es pantanoso y no hay entrada fácil; los montes están cerrados y la gente no sube por gusto.

Sube cuando hace falta. Cuando los arroyos que recorren el territorio bajan de caudal, se va a la olla del granizo, que es el sitio que se visita cada vez que se requiere aumentar el agua que corre por Panán. No se sube a mirar: se sube a que vuelva a bajar.

El granizo que nace ahí también hace daño. Los mayores se acuerdan de granizadas que duraban hasta seis horas, con piedras grandes que destruían los cultivos y los objetos, cubrían varios centímetros del suelo y demoraban cerca de quince días en derretirse. Contra eso hay un oficio corto: cuando la tormenta con granizo apenas empieza, se echa ceniza de leña. Y cuando llueve demasiado, se riega ceniza afuera de la casa y se le pide a la madre naturaleza que pare.

El nombre está sembrado en todo el páramo alrededor. Hay una quebrada Granizo, hay una planada Granizo entre Ciénaga Larga, Guamorrán y Mundo Nuevo, y hay una loma que también se llama El Granizo, junto al Tambillo, en la zona pantanosa de donde salen varias corrientes. El río que baja de la olla se nombra de las dos maneras a la vez: Cualchio–Granizo.

Así que el mismo lugar da el agua y el hielo. Lo que arruina la cosecha en marzo es lo que llena la acequia en junio, y ambas cosas empiezan en el mismo hueco del páramo.`,
    historia: `El apartado 4.1.4 de la tesis de Ernesto Ramiro Estacio y Luis Ulpiano Tatamués García, presentada en 2016 a la Maestría en Etnoliteratura de la Universidad de Nariño, describe el sitio: la olla u ojo de agua entre alturas con arbustos exuberantes, el nacimiento del río Cualchio, la afirmación —atribuida a la oralidad de los mayores— de que ahí nace la precipitación o aparece el granizo, la lista de plantas nativas y la costumbre de visitarlo cuando se requiere aumentar el caudal de los arroyos.

Los topónimos están confirmados fuera de ella. El estudio de dinámica poblacional del resguardo que Benavides Játiva y Burbano Lucero presentaron a la Universidad de Nariño en 2004 registra el río Cualchio–Granizo, que desemboca en el río Blanco y este en el Carchi, y enumera entre las planadas más sobresalientes de la zona de páramo a Ciénaga Larga, Guamorrán, Granizo y Mundo Nuevo. El diagnóstico del páramo de Chiles publicado por Corponariño con el Instituto Humboldt y WWF en 2009 nombra la extensa zona pantanosa situada entre las lomas El Granizo y El Tambillo.

Lo que la gente hace con el granizo lo escribió una comunera. Zonia Patricia Puenayán Irua, en el capítulo sobre Panán del libro Perspectivas culturales del clima editado por Astrid Ulloa en 2011, recoge a Carlos Puenayán, indígena agricultor del resguardo, que recuerda granizadas de unas seis horas, con granizos grandes que destruían objetos y cultivos, cubrían varios centímetros de la superficie y tardaban cerca de quince días en derretirse. La misma autora registra las estrategias del resguardo frente al granizo: echar ceniza de leña cuando la tormenta apenas comienza, y regar ceniza afuera de la casa cuando llueve demasiado.`,
    versiones: `La fuente principal duda de su propia formulación y conviene conservar esa duda. La tesis de 2016 dice que, según la oralidad de los mayores, es el sitio por donde nace la precipitación, «o el punto donde aparece el granizo». Nacer y aparecer no son lo mismo: una versión hace del hueco el origen del fenómeno, la otra apenas el lugar donde se deja ver primero.

Las dos palabras del topónimo también compiten. Olla nombra la forma del terreno; ojo de agua nombra lo que sale de ella. La tesis las usa como equivalentes en la misma frase, y el nombre oficial del río arrastra las dos cosas a la vez: Cualchio–Granizo.

Sobre el granizo hay una explicación paralela que circula en el pueblo de los Pastos y que no coincide exactamente con la de Panán. En el trabajo de Tupaz Pastás y Guzmán sobre tiempo y clima en la visión andina, publicado en 2011, se predice el granizo por la forma irregular de las nubes y se advierte que no se deben perturbar los lugares míticos, cerros o lagunas, porque puede ocasionarse una granizada; allí algunos cerros sagrados son portadores del granizo, es decir, lo cargan, no lo paren. En Panán la olla lo hace nacer.

Sobre la visita para aumentar el caudal, lo que queda escrito es el hecho desnudo: se sube a la olla cada vez que se requiere que crezcan los arroyos que recorren el territorio.`,
    leccion:
      "Un mismo hueco de altura puede dar a la vez el agua y el hielo.",
    similitudes: `El paralelo más cercano es de escala regional y está documentado para el pueblo de los Pastos a ambos lados de la frontera: perturbar cerros o lagunas puede ocasionar una granizada, y algunos cerros sagrados son tenidos por portadores del granizo. La Olla del Granizo pertenece a esa familia de lugares que regulan el tiempo, con una diferencia que conviene no borrar: allá los cerros llevan el granizo, aquí el hueco lo produce.

El segundo paralelo está dentro de Panán y es práctico. La ceniza de leña que se echa cuando arranca la tormenta y la ceniza que se riega afuera de la casa cuando llueve demasiado son gestos del mismo repertorio que la subida a la olla cuando bajan los arroyos: en los tres casos la comunidad interviene sobre el clima con un acto corto y doméstico, no con una ceremonia mayor.

Dentro del territorio, la olla se distingue de los otros nacimientos por su oficio. Guamurrán guarda agua para dos resguardos, el Cucho de Cuaichala surte el acueducto y la devoción, el Chuchun junta tres quebradas y sirve para bañarse. El Cualchio es el único al que se sube a pedir caudal y el único emparentado con el hielo.

Ollas, calderas y ojos de agua asociados con la lluvia hay en muchos páramos andinos; lo que aquí está escrito con nombre propio es la lista de plantas del monte y la ruta del agua hasta el río fronterizo.`,
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
    sourceKeys: [
      "memoriaTerritorial2016",
      "puenayan2011",
      "paramoChiles2009",
      "planVida2005",
      "historiaResguardo",
      "planDesarrolloNarino2024",
      "mamian1996",
    ],
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
    mito: `Al pie del páramo, entre los sitios El Colorado y El Vicundo y conectado con Agua Blanca, está el Cucho de Cuaichala. Cucho viene del quichua cuchu: rincón, apartado, cima, el fondo de algo; en Panán la palabra sigue viva en el habla de todos los días, cuando se le dice a alguien que se acueste al cucho de la cama. Cuaichala nombra el monte oscuro, el lugar donde nacen las fuentes de agua.

Hace cuatro décadas era un monte entero y hermoso. De ahí nacía la quebrada Guacales, que recorre el resguardo de occidente a oriente, y de ahí se recogieron las aguas que hoy abastecen el acueducto de cinco veredas.

En uno de esos bosques trabajaba un leñador. Vio un árbol perfecto para el fuego y le dio un hachazo, y en la corteza abierta le apareció sangre. Soltó el hacha y salió a buscar paisanos para que vinieran a ver el árbol. De ese madero se sacó la madera que se bajó del cucho y se mandó a tallar a San Antonio de Ibarra, del otro lado de la frontera, y de allá volvió hecha imagen: la Virgen de las Mercedes, hoy patrona del resguardo.

En Panán ese árbol tiene otro nombre en la memoria. Se cuenta que en los bosques de Cuaichala renació María Panana, la cacica, la Cuaichaleña, la mujer de los páramos, la dueña del agua, y que es ella la que quedó mitificada en la patrona. La madera que sangró y la mujer que gobernó son la misma historia contada dos veces.

Alrededor de la bajada del palo santo creció lo que en Panán llaman «tradición santificada»: la música, la danza, los sanjuanes, los danzantes, el negro, la mula, los sacrificios, los pagamentos. El monte quedó atado a la fiesta, y la fiesta al agua.

Del monte de entonces no queda casi nada. Los habitantes lo fueron tumbando y hoy son potreros para los animales y para sembrar. El ojo de agua, en cambio, se mantiene y sigue surtiendo el acueducto de la comunidad. Por el mismo cucho por donde bajó el madero sigue bajando el agua.`,
    historia: `El apartado 4.1.2 de la tesis de Ernesto Ramiro Estacio y Luis Ulpiano Tatamués García, presentada en 2016 a la Maestría en Etnoliteratura de la Universidad de Nariño, fija la geografía del lugar —El Colorado, El Vicundo, Agua Blanca, la quebrada Guacales, el acueducto de cinco veredas—, la etimología quichua de «cucho», el envío del madero a San Antonio de Ibarra y la deforestación posterior. Lo que no da es la causa: dice que ahí encontraron el madero, sin explicar por qué ese árbol y no otro.

La causa está en Nostalgia de chutún, el trabajo de grado que Alejandro Ruiz Puetate presentó en 2015 a la Universidad de Nariño con narraciones de mayores de Panán, entre ellos Herminia Malte y los Chalparizán. Su glosario define Cuaichala como «monte oscuro, lugar donde nacen las fuentes de agua», y en el cuerpo aparece el leñador que al hachar el árbol percibe sangre en la corteza y sale a buscar paisanos; de ese árbol, escribe Ruiz, se extrajo la madera para tallar la Virgen de Mercedes. Ruiz enmarca el episodio como el renacimiento de María Panana en los bosques de Cuaichala.

Ese enlace no es suyo solo. La misma tesis de 2016 escribe que María Panám es «la Cuaichaleña, la mujer de los páramos, dueña del agua», y que la cacica principal se mitificó entre las últimas generaciones como la Virgen de las Mercedes, patrona del territorio.

San Antonio de Ibarra queda en la provincia de Imbabura, en Ecuador: la talla se encargó al otro lado de la frontera, y la imagen volvió al resguardo. Ruiz enumera además el «árbol sagrado en cuaichala» entre los sitios donde se aparece el ruani colorado, junto con su puntal en la Laguna Verde.`,
    versiones: `Sobre el hallazgo del madero hay dos relatos. El de la tesis de 2016 es devocional y sin causa: en el sector se comenta la visión de la Virgen de las Mercedes y ahí encontraron el palo santo que después fue tallado. El de Ruiz 2015 es un relato de trabajo: un leñador buscaba leña, escogió el mejor árbol, lo hachó y vio sangre. El primero empieza por la aparición; el segundo, por el hacha.

Cambia también quién queda en el centro. En la tesis de 2016 el episodio pertenece a la religiosidad popular y a la patrona. En Ruiz, el mismo bosque es el lugar donde renace María Panana, y la Virgen es la forma en que esa cacica siguió existiendo. Las dos lecturas conviven en las mismas páginas: la tesis, que cuenta la versión devocional, es también la que llama a María Panám «la Cuaichaleña».

La glosa del topónimo varía de una línea a otra dentro de la propia obra de Ruiz: en el glosario, Cuaichala es «monte oscuro, lugar donde nacen las fuentes de agua»; en el cuerpo, «origen del agua, monte oscuro, origen de la vida».

Del mismo monte salen dos aguas y la tesis las nombra casi seguidas: la quebrada Guacales, que recorre el resguardo de occidente a oriente, y el ojo de agua que todavía abastece el acueducto de cinco veredas. Una atraviesa el territorio; la otra entra en la tubería.`,
    leccion:
      "Lo que abastece de agua a un pueblo puede sostener también su devoción.",
    similitudes: `La operación que convierte a una cacica en santa está descrita para los Pastos. Mamián registra en Muellamués, resguardo vecino, que el poder de los caciques fue legitimado según los códigos de la dominación: el cacique Diego Muellamués sigue siendo legítimo como San Diego Muellamués, antes San Sebastián, y la cacica como Santa Rosa, entre otras cosas la santa de las parteras. Que en Panán la dueña del agua se recuerde en la Virgen de las Mercedes es el mismo procedimiento en otro resguardo.

El segundo paralelo es el de los nombres. Ruiz enumera los ayllus de los que toman nombre los pueblos del Nudo de la Huaca: el cacique Tulcanaza en Tulcán, que es Ecuador; Juan Chiles en el resguardo de Chiles; el cacique Cumbe en Cumbal; y María Panana en Panán. Cuaichala es el punto donde ese nombre se vuelve madera y después imagen.

Dentro del propio territorio, Cuaichala se parece a Guamurrán, al Cualchio y al Chuchun en que todos son nacimientos de agua, pero es el único que reparte acueducto y fiesta al mismo tiempo. El árbol sagrado de Cuaichala aparece además emparejado con el puntal de la Laguna Verde entre los sitios donde se deja ver el ruani colorado.

Imágenes halladas en árboles o en piedras hay en muchas devociones americanas; aquí lo que se documenta es la sangre en la corteza y el nombre de la mujer que renace.`,
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
    sourceKeys: [
      "memoriaTerritorial2016",
      "ruiz2015",
      "quiroz2015",
      "mamian1996",
      "planVida2005",
      "turismoCumbal",
      "historiaResguardo",
      "benavidesBurbano2004",
    ],
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
    mito: `El cueche es hijo del agua y del sol. Sale cuando los dos coinciden, después de un rocío en pleno verano, y engalana el filo del páramo con un arco perfecto que acompaña a quien lo mira mientras camina. Los mayores lo leen como anuncio: viene invierno, y con el invierno un páramo cosechero, tiempo de abundancia y de buena cosecha.

Pero el arco es sólo una de sus caras. En sueños se lo ha visto con cabeza de buey y el pelo como una cascada. Nace de un hoyo subterráneo, se pierde entre las plantas y arma una neblina que lo envuelve y en la que alcanzan a verse luces, una amarilla, otra blanca. En las ciénagas y en los nacederos donde se junta con sus iguales se reúnen los siete cueches, y en esos sitios los mayores aconsejan no tomar agua.

Los hay de varios colores. El colorado, el negro y el blanco son los más comunes y al mismo tiempo los más bravos. Del cueche no se recibe un golpe sino un ojeado o un meado: blanquea el cabello, levanta granos en el cuerpo, deja fiebre y malestar. A las mujeres las busca de otro modo. Si una se baña en el río con el periodo, o sale mientras llueve y escampa a la vez, el cueche la preña, pero de agua: el vientre se inflama, duele la cadera y el estómago se llena hasta parecer un embarazo que dura años.

Por eso, cuando el arco se abre sobre la quebrada, las mujeres se cubren la cabeza para no ser meadas. Y las que no alcanzan a cubrirse sacan el machete, cortan una cruz en la tierra y dicen: «santo dios, santo fuerte, santo inmortal, quítate de mi vista y desaparécete de aquí». Lo repiten tres veces y el arco, como arte de magia, se desaparece.

Al pisado del cueche lo atienden los yerbateros y las parteras. Se hacen fahumentos —compresas calientes— de ruda, marco, romero y ramas de laurel con aguardiente, y del mismo cocido se aparta una toma a la que se agrega una pizca mínima de pólvora para que el vientre vaya desinflamando; algunos añaden cacho de borrego. Y hay todavía otro cueche, el que crece: siete variedades de una planta que sólo el médico tradicional sabe encontrar y que guarda para estas curaciones, como si el espíritu del agua se repitiera siete veces en el cielo, siete en la ciénaga y siete en el monte.`,
    historia: `La caracterización general viene del apartado 4.2.2 de la tesis que Ernesto Ramiro Estacio y Luis Ulpiano Tatamués García entregaron en 2016 a la Maestría en Etnoliteratura de la Universidad de Nariño: hijo del agua y del sol, anuncio de invierno, páramo cosechero, colorado, negro y blanco como los más bravos, y el ojeado que se presenta sobre todo en mujeres. El gesto del machete está en otro apartado del mismo capítulo, el de la Lechuza y Cuchicuelan, que fue tierra de hacienda donde sirvieron de peones los comuneros de la vereda Puscuelán.

La cabeza de buey, el pelo de cascada, el hoyo subterráneo, la neblina con luces y los siete cueches reunidos los recogió Byron Danilo Ruiz Puetate en Panán en 2015, en el mismo libro donde su glosario define el cueche como «un arco en las nubes, de muchos colores» y también como «un espíritu de las montañas con cabeza de buey y cabello de varios colores».

La curación es anterior. Andrea Ojeda Guerrero la publicó en 2006 con los médicos tradicionales del resguardo, bajo el nombre de «pisado del Cueche Blanco o Negro», con los fahumentos de ruda, marco, romero y laurel y la pizca de pólvora; en su inventario de plantas del resguardo aparecen además «los cueches», siete variedades de una especie que no logró identificar, reservadas al médico. Erica Susana Quiroz Malte repitió la definición en 2015 y añadió el dato administrativo: en el informe de marzo de 2015 del puesto de salud de Panán, de cincuenta consultas de medicina tradicional, tres fueron por cueche, detrás del mal aire, el espanto y el quedado.

Sobre la escritura del nombre: en la literatura de la región —Cumbal, Yaramal, Túquerres, Muellamués— se escribe cueche, y así se publica aquí.`,
    versiones: `Las fuentes no se ponen de acuerdo en cuál es el peor. El corpus de Panán de 2016 nombra tres —colorado, negro y blanco— y los da por igual de bravos. En Túquerres, resguardo pasto vecino, Juan Portilla, Mario Madroñero y Carlos Getial recogieron en 2016 de diecinueve médicos tradicionales una jerarquía distinta: «hay varios tipos de Cueche, el negro que siempre se pega en quebradas, el blanco en ríos pequeños, este último es el más peligroso y maligno». Andrea Ojeda, dentro de Panán, sólo registra dos, blanco y negro, y los trata como un solo diagnóstico.

Tampoco coinciden en a quién busca. En Panán se dice que se presenta especialmente en las mujeres y que el vientre inflamado se confunde con embarazo; en Túquerres se le teme sobre todo por los niños, los ancianos y las embarazadas, y los síntomas que allí se cuentan son fiebre alta, llagas, comezón y sueños de animales enfurecidos.

Y cambia según lo que se esté nombrando. Para Ruiz es un espíritu de las montañas con cuerpo, cabeza y madriguera; para el corpus de 2016 es a la vez arco, presagio y enfermedad. En Muellamués, otro resguardo pasto, Diana Moreno Quenán lo resume en 2016 de una sola manera: «el cueche es el guardián de los lugares húmedos». En cada versión el arco cambia de oficio sin cambiar de sitio: siempre donde el agua se queda.`,
    leccion:
      "Lo que embellece el cielo después de la lluvia también deja huella en los cuerpos.",
    similitudes: `El primer paralelo es de vecindad pasto y está bien fechado. En Túquerres, los diecinueve médicos tradicionales entrevistados por Portilla, Madroñero y Getial en 2016 llaman «miado del cueche» a lo mismo que en Panán se llama pisado, lo ponen entre las enfermedades espirituales junto al espanto y al mal viento, y afirman que la medicina occidental no las cura. En Muellamués, Moreno Quenán lo vuelve guardián de los lugares húmedos. Son tres resguardos del mismo pueblo con tres acentos.

El segundo paralelo no sale del resguardo. Los siete cueches que Ruiz oyó reunirse en el hoyo subterráneo y las siete variedades de planta llamada cueche que Ojeda inventarió con los médicos de Panán comparten número y nombre, y sostienen el mismo tránsito: el espíritu está en el cielo, en la ciénaga y en la mata con la que se cura lo que él causó.

Más allá, el nombre viaja. Al otro lado de la línea, en kichwa, el arco se dice kuychi, y los narradores del Carchi que reunió Ávalos en 2020 cuentan cueches junto a duendes y viudas. Esa es frontera compartida, no creencia de Panán.`,
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
    sourceKeys: [
      "memoriaTerritorial2016",
      "medicinaTradicional2006",
      "tuquerres2016",
      "ruiz2015",
      "muellamues2016",
      "mamian1996",
      "puenayan2011",
      "quiroz2015",
    ],
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
    mito: `El Espino queda hacia el oriente del resguardo, en la franja de valles y llanuras donde está asentada la gente de Panán. Dentro de esa vereda hay un sector llamado El Paraíso, y en El Paraíso, en una de las fincas que la comunidad recuperó, está lo que en Panán llaman la Basílica encantada.

No es una iglesia. Son construcciones hechas en piedra, y al que entra le parecen una capilla: la forma se reconoce antes de que nadie la explique. Adentro está muy oscuro. Lo que hay en cantidad son murciélagos, y hay que esperar a que la vista se acostumbre para separar la piedra del hueco.

Lo que más llama la atención son las particiones. La piedra está dividida en espacios pequeños, del tamaño justo para encerrar a dos o tres personas. No hay altar, ni torre, ni campana. Hay compartimentos, uno al lado del otro, y una oscuridad que los iguala.

Han entrado pocos, y son esos pocos los que cuentan. Nadie ha establecido para qué se hizo, ni quién la levantó, ni cuándo, y el predio en el que está terminó dado en usufructo a un comunero, que es quien hoy lo trabaja.

Aun así el nombre camina. Cuando en Panán se enumeran las huellas del territorio, los lugares a los que hay que ir para conocerlos, se dicen cuatro seguidos: la Baciica, la Tuta, la piedra de los siete aljueros y la huaca. La Basílica va en esa lista, al lado de la gruta de origen y de los entierros de los antiguos. Conforme se camina, se conoce, y con ella lo único que se puede hacer es caminarla.

El encanto está justamente en eso. La piedra sigue en su sitio, oscura, dividida y llena de murciélagos, dentro de una finca recuperada, y lleva el nombre de una basílica que nunca fue basílica.`,
    historia: `El apartado 4.1.9 de la tesis de Ernesto Ramiro Estacio y Luis Ulpiano Tatamués García, presentada en noviembre de 2016 a la Maestría en Etnoliteratura de la Universidad de Nariño, describe el sitio. Lo ubica en la vereda El Espino, sector El Paraíso, en una de las fincas recuperadas por los habitantes de Panán, y recoge lo que dicen quienes han podido ingresar: que es un lugar muy oscuro donde habita cantidad de murciélagos, que son construcciones hechas en piedra que se asemejan a una capilla y que tiene particiones pequeñas como para encerrar a dos o tres personas. Añade que no se ha podido encontrar su finalidad, atribuyéndolo al desinterés de las autoridades indígenas de la comunidad —un juicio de los autores, no una posición del cabildo—, y que en ese momento el predio había sido dado en usufructo a un comunero.

La segunda mención existe y es de Panán. En Nostalgia de chutún, trabajo de grado que Alejandro Ruiz Puetate presentó en 2015 a la misma universidad, hecho con narraciones de mayores del resguardo, el sitio aparece escrito «La Baciica» dentro de una lista de las huellas del territorio, junto con la Tuta, la piedra de los siete aljueros y la huaca, en un pasaje dedicado a los recorridos: nutrirse el pensamiento con los páramos y las montañas, y conocer conforme se camina.

La ubicación del sector concuerda con la geografía del resguardo: el estudio de dinámica poblacional de Benavides Játiva y Burbano Lucero, de 2004, sitúa El Espino entre los valles y llanuras de la zona oriental de Panán donde se ubican los asentamientos humanos.`,
    versiones: `Son dos registros y cada uno mira el lugar desde un sitio distinto. El de 2016 describe la estructura desde adentro, con la voz de quienes entraron, y el de 2015 la nombra desde afuera, en una lista de lugares que se recorren.

Esa diferencia importa porque cambia lo que el sitio es. En la tesis de 2016 la Basílica es una construcción de piedra en pie, con su forma de capilla y sus divisiones pequeñas, y su finalidad sigue abierta. En las narraciones de mayores recogidas por Ruiz, en cambio, la Baciica ya es otra cosa, una huella, un punto del territorio que se camina junto con la Tuta, la piedra de los siete aljueros y la huaca. Nombrarla al lado de la gruta de origen y de los entierros la coloca en una serie de lugares con carga, no en un inventario de curiosidades.

También difiere la grafía. El nombre corriente es la Basílica encantada; la forma escrita por los mayores es «La Baciica», que es como suena.

De los compartimentos se transmite lo que se ve al entrar: la oscuridad, la piedra partida en espacios para dos o tres personas y los murciélagos. Ni tesoro, ni procesión, ni aparición viajan con el nombre.`,
    leccion:
      "Un lugar puede entrar en la memoria de un pueblo sin que nadie sepa para qué sirvió.",
    similitudes: `La compañía que la propia comunidad le da es el mejor paralelo disponible. Los mayores de Panán la nombran junto con la Tuta, la piedra de los siete aljueros y la huaca: son lugares de piedra, oscuridad y adentro, a los que se llega caminando y de los que se aprende recorriéndolos. La Basílica comparte con la Tuta la cueva y la sombra, y con la huaca el hueco y los antiguos.

El segundo paralelo es de forma y viene del centro del país. En la reflexión sobre lugares sagrados publicada por el ICANH en 2018 se describe cómo cerros enteros se tienen por guacas: la gente los ha visto alumbrar, los sabe «hueca por dentro» y los ha oído bramar. Allí, como en El Paraíso, la certeza de que un sitio guarda algo no depende de que alguien haya entrado a comprobarlo; depende de su forma, su oscuridad y su fama.

Lo que sí está excavado queda cerca y no es lo mismo. En El Porvenir, municipio de Iles, en el mismo departamento, una investigación de 2023 documentó cuarenta y siete tumbas prehispánicas de tradición Capulí. Iles no es Panán, y lo que allá se excavó son tumbas bajo tierra, no compartimentos de piedra al nivel del suelo.

Formaciones y construcciones de piedra llamadas capillas o basílicas hay en muchos paisajes; aquí lo propio es la finca recuperada y las divisiones pequeñas.`,
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
    sourceKeys: [
      "memoriaTerritorial2016",
      "ruiz2015",
      "capuliIles2023",
      "lugaresSagradosIcanh",
      "planVida2005",
      "mujeresPastos2021",
      "turismoCumbal",
      "mamian1996",
    ],
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
    mito: `En la vereda La Merced, por el camino que sigue hacia El Romerillo, El Vicundo, La Montañuela y El Tambillo, hay un sitio llamado la Cangagua. Cangagua es la roca blanda del lugar, y ahí el camino se mete en un cucho con una chorrera que se pierde entre los matorrales. Antes la cascada era muy grande y estaba cubierta de ramas; hoy está más despejada. Por ese punto era imposible pasar a ciertas horas de la noche: ahí salía el duende y no dejaba seguir.

José Tarapues, comunero de Panán, contó lo que le pasó. Tenía el ganado en el Monte Oscuro y lo cuidaba con su papá. El papá ya había subido; él se quedó con unos amigos tomándose un hervido y se le hizo tarde. Cuando se dio cuenta eran las once de la noche. Se despidió, cogió el caballo, que ya lo tenía listico, y se fue.

Al ir llegando a la cangagua el caballo no quiso andar más. Pensó que le había dado la chaqué. Se bajó, y el animal empezó a correr para atrás, como asustándose. Entonces le empezó a dar miedo, y con la chuma encima no sabía para dónde iría a parar. Lo amarró en unas matas y se devolvió.

Al otro día madrugó a ver si el caballo seguía ahí. Le preocupaba la montura; pensaba que no se la fueran a haber robado. Cuando llegó, el caballo estaba amarrado donde lo había dejado. Pero la crin del cuello y la cola, todita, estaba bien carnejada y enredada. Subió a conversarle a su papá, y su papá le dijo que era el duende el que le había salido.

El duende habita en el mundo de abajo, en el agua, en chorreras y lugares oscuros de los montes. Nadie lo vio esa noche; se supo por el caballo que no pasó y por las trenzas que aparecieron. Al que sí queda enduendado hay que curarlo: el médico tradicional hace la limpia con estiércol de animales negros, ruda, lana, tarta negra con pillo, anamú y marco, sahúma, sopla y azota al enfermo con una escoba de esas plantas mientras reza «Asoma, asoma, asoma, Usata, Usata, Usata, Usata», y remata con tres sopladas de aguardiente, tres barridos y tres bendiciones.

La Cangagua sigue ahí, en el mismo camino, y sigue siendo sitio de historias, de conversas y de reflexiones.`,
    historia: `El testimonio tiene nombre y fecha, y es de los pocos del corpus que los tiene. La tesis de Ernesto Ramiro Estacio y Luis Ulpiano Tatamués García, presentada en 2016 a la Maestría en Etnoliteratura de la Universidad de Nariño, transcribe el relato en su apartado 4.1.6 y lo acredita en nota al pie a José Tarapues, comunero de Panán, entrevistado en marzo de 2014. De él son el hervido, las once de la noche, la chaqué, la chuma, el caballo que retrocede y la crin carnejada.

El mismo apartado ubica el sitio en la vereda La Merced, vía al Romerillo, El Vicundo, La Montañuela y El Tambillo, y lo describe como un lugar pesado, un cucho con una cascada que se pierde entre matorrales. La palabra cangagua aparece en la misma tesis, unas páginas después, como nombre de las rocas blandas del territorio.

Lo que el duende es y cómo se cura viene de la etnobotánica médica del resguardo. Ojeda Guerrero presentó en 2006 a la Universidad de Nariño un trabajo sobre la medicina tradicional de Panán, hecho con los cinco médicos tradicionales y la partera del resguardo, entre ellas Eudocia Calpa: allí se define el enduendamiento como enfermedad producida por el duende, «que habita en el mundo de abajo en el agua, en chorreras y lugares oscuros de los montes», y se transcriben las plantas de la limpia y la fórmula «Asoma, asoma, asoma, Usata, Usata, Usata, Usata».

En el mismo resguardo, Zonia Patricia Puenayán Irua escribió en 2011 que las fuentes de agua están protegidas por los espíritus —entre ellos el duende, el cueche y la vieja—, que viven en las orillas de las quebradas y en los nacederos, y que los lugares pesados son conocidos, de modo que hay que ir a determinadas horas del día para no encontrárselos.`,
    versiones: `El relato de 2014 es una versión y se reconoce como tal: el duende no se ve, se deduce. Quien nombra al causante no es el jinete sino su padre, al día siguiente y arriba, después de oír el cuento. La prueba son el caballo que no pasa y la crin enredada; la primera explicación que el propio narrador se dio fue veterinaria, la chaqué.

El apartado general del duende en la misma tesis lo pinta de otro modo: alegre, enamorado de las mujeres que lavan en las quebradas, travieso con los animales y sobre todo con los caballos, músico de profesión y aficionado a los instrumentos de cuerda. Ahí las trenzas son un hábito del ser; en la Cangagua son un hecho de una noche concreta.

En los resguardos pastos vecinos la figura cambia de oficio. En Yaramal, en Ipiales, se cuenta que el duende es un hombrecillo que cuida el agua de la quebrada, que sale en las chorreras y los remansos, que su tambor es el agua y que con él llama a los curiosos, y que con el poder de sus ojos entunda a los que tumban el monte y queman la paja. Allí el duende castiga con criterio ecológico; en Panán, el testimonio de la Cangagua no le atribuye motivo alguno.

También varía el remedio. El trabajo de medicina tradicional de Panán describe la limpia con plantas y la fórmula rezada; la tesis de 2016, en su apartado del duende, menciona flores de guanto, hojas de albarrecín y ramas de marco con chapil.`,
    leccion:
      "Cuando un animal se niega a seguir, el camino ya dijo algo antes que el jinete.",
    similitudes: `El paralelo más desarrollado está en Yaramal, resguardo pasto del municipio de Ipiales, donde una investigación de maestría dedicó capítulos enteros al duende, al entundamiento y al territorio como espacio sagrado del duende. Allí el duende es protector del agua, su tambor es el agua, forma bailes en círculo en los remansos y entunda con la mirada a quien tumba el monte. Es la misma familia de relatos, en otro resguardo y con más detalle: Yaramal no es Panán y conviene leerlo como vecindad, no como creencia local.

El segundo paralelo está dentro del propio resguardo. Puenayán Irua registra en Panán que el duende, la vieja y el cueche protegen las fuentes de agua, que viven en las orillas de las quebradas y los nacederos, y que causan problemas a quien entra sin pedir permiso. La Cangagua es un caso puntual de esa regla general: un punto de agua que no se cruza a cualquier hora.

El tercero es lingüístico y está en el glosario de mayores de Panán, donde entundarse se define como perderse en un campo, dormirse en un monte, una zanja o un páramo. El jinete de la Cangagua no llegó a entundarse porque el caballo se detuvo antes.

Caballos que amanecen con la crin trenzada aparecen en relatos de duendes de varias regiones; lo que aquí está fechado y firmado es una noche de marzo contada por su protagonista.`,
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
    sourceKeys: [
      "memoriaTerritorial2016",
      "medicinaTradicional2006",
      "espiralAndino2014",
      "yaramal2009",
      "quiroz2015",
      "avalos2020",
      "planVida2005",
      "ruiz2015",
    ],
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
