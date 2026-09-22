import {
  defineAbundanceTransfer,
  defineYucunaMyth,
} from "./define-editorial-myth.mjs";

const records = [
  defineYucunaMyth({
    slug: "kanuma",
    sourceKeys: [
      {
        key: "herreraKanuma",
        summary:
          "Publica el relato completo tal como se lo contó en castellano un narrador matapí del medio Mirití: el robo del yuruparí a las Iyamátuna con ayuda de Yévari, la salida de las mujeres, la creación de los chorros del Mirití uno por uno, el hambre, y el encuentro de Chuurumi con Inérukaná y He'echúmeru hasta la captura de la segunda.",
        limitation:
          "La autora declara haber modificado conjunciones, artículos, géneros y tiempos verbales, y haber armado la sección I reordenando frases dichas en otro orden; no nombra al narrador; y el propio narrador dijo que el cuento continuaba más allá de donde lo dejó.",
      },
      {
        key: "vanDerHammen1992",
        summary:
          "Recoge en el resguardo de Puerto Córdoba, bajo Caquetá, otra versión del mismo ciclo, con ñamatu en lugar de Iyamátuna, el martín pescador en lugar de Chuurumi y Mairero en lugar de He'echúmeru, y lo distingue explícitamente del mito de Kari'irimi, la otra explicación yucuna del origen de la comida cultivada.",
        limitation:
          "Presenta el relato como fragmento dentro de un análisis sobre chagra, parentesco y territorio; no publica la narración íntegra ni nombra al narrador de la versión que resume.",
      },
      {
        key: "registroCorpus",
        summary:
          "Registra una «Historia de Kanumá» de cinco horas narrada por Mario Matapi en La Pedrera el 27 de enero de 2005, con transcripción de 67 páginas, y resume su argumento: Kanumá como primer hombre entre las Namatu, el robo de las flautas, la persecución río abajo hasta el delta del Amazonas y el encuentro con las dos hijas de Je'chú.",
        limitation:
          "Aquí se consultaron la ficha del corpus y el resumen público, no la transcripción; el material está en yucuna con aparato en francés e inglés.",
      },
      {
        key: "hildebrandOrigen1975",
        summary:
          "Publica en el mismo volumen la versión tanimuka (ufaina) a la que Herrera remite cuando anota que variantes de Kanumá son contadas por los tanimuka como mito propio; sirve aquí para sostener el paralelo vecino que se nombra en Similitudes.",
        limitation:
          "Es el corpus de otro pueblo, no de los yucuna; se usa como paralelo documentado y no para completar episodios de esta ficha.",
      },
      {
        key: "herreraMatapi",
        summary:
          "En su introducción Herrera sitúa el mito de Kanumá dentro del conjunto yukuna-matapí y explica que es el relato que da cuenta del origen de varios cultígenos, frente a otros mitos que explican la noche o la maloca; también fija el dato de población y filiación arawak que se usa en Historia.",
        limitation:
          "Su objeto es otro relato; sobre Kanumá sólo aporta el encuadre del conjunto y una referencia cruzada, no episodios.",
      },
      {
        key: "jacopin1972",
        summary:
          "Describe maloca, territorio y ocupación del Mirití-Paraná con trabajo de campo de 1969-1971, y da el marco geográfico del recorrido río abajo que el relato convierte en cadena de chorros.",
        limitation:
          "Está en francés, se sirve en Persée como imágenes de página, y no contiene esta narración: se usa sólo para el contexto territorial.",
      },
      {
        key: "fontainelagentivite2013",
        summary:
          "Documenta el método de trabajo con los narradores yucuna que sostiene los registros citados aquí: versiones fechadas y atribuidas de un mismo mito, con Mario Matapi en 2008 y Horacio Matapi en 1970, y la relación entre relato y encantamiento.",
        limitation:
          "Está en francés y trata de otro ciclo, el de Kawáirimi; no aporta episodios de Kanumá.",
      },
      "narradorMythe2005",
      "yucunaMythe2015",
    ],
    title: "Kanumá y el regreso de los alimentos",
    excerpt:
      "Kanumá toma el Yuruparí de las primeras mujeres; su partida deja hambre y abre un largo camino para recuperar los cultivos.",
    tags: ["Kanumá", "alimentos", "río", "transformación"],
    mito: `Las mujeres a las que llamaban Iyamátuna llegaron cuando el mundo se abrió. Vivían Mirití arriba, solas en su maloca, y no necesitaban hombres: sabían bailar, sabían brujear, sabían más que ellos. Tenían el yuruparí guardado afuera de la casa.

Kanumá llegó diciendo que no tenía dónde vivir. Lo dejaron quedarse con una sola orden: no mirar aquello que guardaban. Estuvo cinco días oyéndolo sonar. Después habló con Yévari, abuelo de la lagartija que vive en las orillas del río, y le pidió que lo robara mientras ellas comían casabe. Yévari lo robó.

Cuando las mujeres salieron al claro del monte y no encontraron nada, discutieron largo rato y volvieron llamándolo. «Usted robó el yuruparí de nosotras», le dijeron. Él contestó que no había mirado, porque ellas mismas se lo habían prohibido. La capitana le advirtió que, si no lo entregaba, todas se irían y se secaría la yuca brava. Le preguntaron tres veces. Tres veces dijo que no.

Entonces rayaron almidón y piña durante cuatro días y bailaron toda la noche el baile de piña. Al amanecer formaron fila entre las dos puertas de la maloca y cantaron. La menor cantó mal, y por eso hay enfermedades en este mundo; la segunda la corrigió y cantó para que uno viva hasta que le llegue su muerte. La capitana salió con la macana, trazó un círculo en el aire y recogió el pensamiento de la yuca brava. Después bajaron el Mirití.

A Kanumá le dio lástima. Recuperó el yuruparí de manos de Yévari y salió detrás de ellas. Les fue tapando el río con piedras, que ese día todavía estaban blandas. Hizo el primer chorro, Meesí, donde quedaron marcados los pies y las nalgas de la capitana y donde otra mujer le dibujó a él la cara en la roca. Ellas abrieron un brazuelo y pasaron. Hizo Suri'i, que tapaba el río entero, y lo cruzaron convertidas en una pepa. Hizo Kaapú, el chorro del casabe, y allí se voltearon y dejaron el casabe mojado, que todavía se ve como montones de piedra. Hizo el último chorro y siguió detrás. Cuando por fin les ofreció devolverles el yuruparí, le contestaron que se quedara con él y que no las siguiera más. Bajaron al Caquetá, cogieron el Amazonas y, donde el río se abre, pasaron al mundo de abajo.

Kanumá se quedó en el Río Negro. Se secó la comida de todo el que tenía chagra y la gente se murió de hambre. Tomó por mujer al carpintero chiquito, después a un pajarito verde, después al lorito, después a la mujer ratón: ninguna le trajo comida.

Con él vivía Chuurumi, un pescador pequeñito. Una medianoche bajó al río a tomar agua y encontró dos mujeres que subían en canoa con casabe para sus hijos: Inérukaná, la madre de la cacería, y He'echúmeru, la madre de las pirañas. Le regalaron casabe con la condición de que no dijera nada. Chuurumi lo enterró junto a las cenizas del fogón.

Un día Kanumá se acostó en la hamaca de él y vio hormigas que sacaban pedacitos de la tierra. Agarró una, le quitó el grano de la boca, lo olió y escarbó. Esa tarde obligó a Chuurumi a contarle. Hizo un anzuelo de bejuco, esperaron la medianoche y enganchó por el cabello a la primera que pasó. Ella le pidió que la soltara y que cogiera mejor a su hermana menor, que esa sí le servía. Media hora después pasó He'echúmeru y Kanumá la agarró.`,
    historia: `El registro publicado viene del río Mirití, en lo que entonces era la Comisaría del Amazonas. Leonor Herrera Ángel lo recogió entre 1974 y 1975 de un narrador matapí que se lo contó directamente en castellano, y lo publicó como «Kanuma: un mito de los Yukuna Matapí» en el volumen 18 de la Revista Colombiana de Antropología, en 1975.

El punto de partida fue una fiesta. Herrera asistió a un guarapo de piña en la maloca de su interlocutor y después le pidió la letra del baile Lumá'ala. Casi ninguna estrofa tenía significado para él, pero hacia el final la canción se volvía inteligible y nombraba a Iyamatu. Al preguntar quién era, el narrador empezó a resumirle este relato. Cuando ella le pidió que volviera al principio, él entendió que quería los orígenes del yuruparí, que no se imparten a las mujeres, y se negó; siguió desde donde iban. Herrera anotó palabra por palabra a partir de la sección II y armó la sección I con aclaraciones que pidió después. Declaró los cambios que hizo al castellano: conjunciones, artículos, géneros y tiempos verbales, puntos en lugar de «entonces» y «bueno», comillas en lugar de «dijo», términos yukuna llevados a notas al pie, y una división en párrafos y secciones.

Los yukuna-matapí eran entonces unas quinientas personas del medio Mirití-Paraná y hablan una lengua de la familia arawak. Herrera anotó que no sabría decir si había recogido un cuento yukuna contado por un matapí o una versión matapí del cuento de Kanumá, y que, por transcurrir el relato en el Mirití y a partir de los chorros, se puede llamar yukuna.

Hay otros dos registros. María Clara van der Hammen publicó en 1992, desde el resguardo de Puerto Córdoba en el bajo Caquetá, el episodio final del mismo ciclo. Y Laurent Fontaine grabó en La Pedrera, el 27 de enero de 2005, una «Historia de Kanumá» de más de cinco horas narrada por Mario Matapi, depositada con su transcripción en el corpus yucuna de la colección Pangloss del CNRS.`,
    versiones: `Los nombres cambian de registro en registro. Herrera escribe Iyamátuna, nombre colectivo cuyo plural está en la partícula -na, y anota que a las mujeres de hoy se les dice inaána. Van der Hammen escribe ñamatu; Fontaine, Ña'matu. La presentación del corpus Pangloss las describe como mujeres sobrenaturales que se comportaban como hombres y que hacían cocinar a Kanumá, y presenta a Kanumá como el primer hombre.

Cambian los personajes del reencuentro. En Herrera, el que baja al río a medianoche es el pescador pequeñito Chuurumi, y las dos hermanas son Inérukaná, madre de la cacería, y He'echúmeru, madre de las pirañas. En la versión de Puerto Córdoba que recogió van der Hammen, quien las encuentra es el martín pescador, abuelo de Kanumá, y la segunda hermana se llama Mairero, la mamá del pescado.

Cambia la extensión. El narrador de Herrera dijo que el cuento continuaba y que él lo conocía sólo hasta donde llegó, y la publicación se cierra con esa advertencia. La versión de Puerto Córdoba sigue mucho más allá: Kanumá mata a su mujer por celos del guacure, la entierra en la mitad de la maloca y después sube a buscarla al cielo. La de Mario Matapi dura cinco horas.

Y cambia la propiedad. Herrera advirtió, con información de Martín von Hildebrand, que los tanimuka cuentan variantes de este mito como propio, y que probablemente también otros grupos.`,
    similitudes: `El paralelo más cercano está en el mismo volumen de 1975: Martín von Hildebrand publicó allí «Origen del mundo según los Ufaina», una versión tanimuka, y Herrera anotó que los tanimuka cuentan variantes de Kanumá como suyas. Es vecindad, no identidad: son otro pueblo y el recorrido no es el del Mirití.

El segundo paralelo lo establece van der Hammen, que compara este relato con registros de grupos vecinos —los makuna de François Correa, los tanimuka de Martín von Hildebrand y los barasana de Stephen Hugh-Jones— y encuentra en todos un mismo tema mínimo: la yuca queda como hermana de la mujer y la coca como hermano del hombre. Esa correspondencia describe quién trabaja qué, no una misma narración.

El tercer parentesco es más amplio. La salida de unas mujeres que se llevan las flautas pertenece al complejo del yuruparí, extendido por el noroeste amazónico; Herrera remite, para la prohibición, al Desana de Gerardo Reichel-Dolmatoff.

Lo que identifica a esta versión y no se puede intercambiar es la cadena de chorros del medio Mirití nombrados uno por uno, las huellas que quedaron en la piedra cuando todavía estaba blanda, el abuelo de la lagartija Yévari, el pescador Chuurumi y el anzuelo de bejuco que sigue llevando el nombre de Kanumá. Dentro del propio corpus yucuna, van der Hammen separa este relato del de Kari'irimi, donde el pensamiento de la comida cultivada lo entrega un abuelo anaconda y no un suegro.`,
    leccion:
      "Quien toma a escondidas lo que otros guardan se queda con el objeto y sin la comida.",
    sceneHorizontal:
      "varias mujeres avanzan en canoas por un río Mirití de capas azules mientras rápidos y huellas dibujadas en roca marcan su camino; Kanumá queda lejos en la orilla, sin mostrar instrumentos ceremoniales",
    sceneVertical:
      "He'echúmeru abre con un gesto circular una chagra donde aparecen yuca, piña y chontaduro, mientras Kanumá observa desde el borde y una fila de hormigas lleva una vena de casabe",
    researchNotes:
      "CORRECCIÓN INTEGRAL: restituye el ciclo publicado, declara su final inconcluso, evita romantizar coerción y no reproduce el manejo operativo del Yuruparí o la coca.",
    seoTitle: "Kanumá y los alimentos | Mito Yucuna",
    seoDescription:
      "Ciclo Yucuna-Matapí documentado sobre Kanumá, la salida de las primeras mujeres, los rápidos del Mirití y el regreso de cultivos y coca.",
    focusKeywords: [
      "mito de Kanumá",
      "Kanumá Yucuna",
      "primeras mujeres Yucuna",
      "origen de los alimentos Yucuna",
      "río Mirití",
    ],
  }),
  defineYucunaMyth({
    slug: "el-nacimiento-de-los-matapi",
    sourceKeys: [
      {
        key: "herreraMatapi",
        summary:
          "Es la fuente del relato: publica íntegro el «Nacimiento de la Gente» narrado en castellano por Horacio Matapi en el Mirití en octubre de 1974, con el nacimiento conjunto en Yuinata, el muchacho con rabo que se llamó Wihimi, la disputa por la precedencia en el baile entre Ka'amari y Himuri, y la cadena de guerras hasta la emboscada final contra la gente de Kerámoa. Trae además el colofón en que el narrador se identifica y nombra a sus padres.",
        limitation:
          "La introducción dice dos partes y 16 capítulos, pero los impresos son dieciocho; la edición divide, resume y pule un continuo oral; y las menciones de brujería quedaron oscuras por decisión del narrador.",
      },
      {
        key: "vanDerHammen1992",
        summary:
          "Publica la memoria kamejeya (yukuna) de la llegada de los matapí: Yuinata como su tierra, el capitán Kajmari de los upichiya, el hermano menor que se mete con las mujeres de los murerúa durante una exhibición de yuruparí y la guerra de venganzas hasta que el nieto de Kajmari es incorporado entre los kamejeya. Explica también por qué los upichía son «gente con nacimiento» y qué derechos da poder recitar el origen.",
        limitation:
          "Es la versión del grupo receptor y no la de los matapí; llega en fragmentos dentro de un análisis de parentesco y territorio, sin nombre de narrador.",
      },
      {
        key: "herreraKanuma",
        summary:
          "Es el otro mito del mismo conjunto y la referencia cruzada que la introducción de 1976 usa para decir qué explica cada relato: Kanumá da cuenta de los cultígenos, el «Nacimiento de la Gente» trata específicamente de personas. Aporta además el dato de población y de filiación arawak de los yukuna-matapí.",
        limitation:
          "No contiene episodios del nacimiento de los matapí; sirve para encuadrar y para distinguir los dos relatos, no para completarlos.",
      },
      "hildebrandOrigen1975",
      "registroCorpus",
      "fontainelagentivite2013",
      {
        key: "jacopin1972",
        summary:
          "Aporta la descripción del territorio y de la maloca del Mirití-Paraná con trabajo de campo de 1969-1971, contemporáneo de la recolección de este relato, y da el marco de las sabanas y quebradas en que se sitúa Yuinata.",
        limitation:
          "Está en francés, se sirve en Persée como imágenes de página, y no contiene esta narración ni los nombres de sus personajes.",
      },
      "yucunaHistoire2015",
      "robayoIdeologias2012",
      "huaiHistoria1997",
      "reichelYukuna1994",
    ],
    title: "El nacimiento de los Matapí / Upichiya",
    excerpt:
      "Los Matapí y los Yukuna nacen cerca de Yuinata; Ka'amarí e Himuri heredan una relación que el conflicto transforma.",
    tags: ["origen humano", "poblamiento", "tradición oral", "territorio"],
    mito: `Primerito, cuando todavía no había gente, el nacimiento de los matapí vino junto con el de los yukuna. Nació primero el canangucho y después salieron personas. Uno era Ureyu, el capitán; Kana'apé era el gavilán; Rimákuté era el mandadero. Eso fue en Yuinata, una sabana Mirití arriba, por la quebrada de Pilumíchari. Los yukuna nacieron en Hewaíta, también del canangucho. Por eso no se puede pelear con los yukuna, y por eso nadie corta el canangucho: si lo corta, llueve, truena y se le hace mal, se le hace camino de danta.

Uno de los que nacieron vino con rabo y con manos de tigre. La madre dijo que iba a matar a ese muchacho. Otro, que se llamaba Luariya, dijo que el muchacho había nacido con buen pensamiento y que con brujería se podía arreglar. Brujió tabaco, lo prendió, sopló, y el rabo desapareció. Como había nacido debajo de un árbol wiri, la madre le puso Wihimi.

Después nacieron muchos. Los menores se llamaron Himuri y levantaron casa junto a la gente de aquel muchacho, que ya de grande cambió de nombre y se llamó Ka'amari. Ka'amari dijo que ellos eran los mayores y que por eso bailaban primero, y que los otros bailaran después. Así duraron mucho tiempo, bien.

Un día Himuri pensó por qué siempre tenía que bailar de último. Brujió, y mandó dos hombres a avisar que esta vez bailaba él primero. Ka'amari se disgustó, pero dijo que hiciera como quisiera. Su gente fue a ayudar a recoger la pepa de yecha y él les advirtió que se manejaran bien con ellos. En el camino algunos pasaron con el yuruparí por en medio de las mujeres, para asustarlas. Himuri mandó castigarlos sin matarlos. No se dejaron: mataron a uno de los hombres de Himuri, y la gente de Himuri mató a Kalahima, hermano menor de Ka'amari, e hirió a otro en la cabeza.

Ahí empezó la guerra. Ka'amari llegó con su gente a la maloca de Himuri, peleó y la quemó. Himuri hizo otra maloca y, cuando la terminó, Ka'amari volvió y la quemó. Hizo una tercera y también la perdió, y allí le mataron a su hermano menor. Entonces Himuri dejó esa tierra y se fue a buscar aliados: llegó donde Parámina, donde Makúruwa, donde Yechámina y donde Namaná, que eran otra gente, y ellos le dieron chagras y le construyeron maloca.

De ahí en adelante la guerra no paró. Ka'amari, ya viejo, perdió dos hijos en un ataque de noche; quedó Maka'u, el que había huido. Cuando Ka'amari se estaba muriendo ofreció tres veces sus piedras y su camisa de tigre, y nadie las quiso; sopló con tabaco y se le perdieron en el cuerpo. Después vinieron Maka'u y Tupía peleando por el pago de una hermana; vino la fiebre, que secó la comida y mató gente; vinieron Papukúa, Kerahipo y Kerámoa, y las emboscadas en los caminos de cacería.

Al final, la gente de Kerámoa salió a traer chontaduro. Los otros esperaron acostados a lado y lado del camino, con la flecha en la mano, y los mataron a todos. Se llevaron el chontaduro y a unas muchachas, volvieron tocando las flautas y con ese chontaduro hicieron baile.`,
    historia: `El narrador tiene nombre y firma su relato al terminarlo. «Hasta ahí se acaba este cuento que yo oí cuando estaba niño y contó para mí mi padre», dice el cierre, «en tiempo en que no había blancos. Es que estoy contando para señorita Leonor Herrera. Que tengo años cuarenta y ocho y es recuerdo mío. Mi padre llamaba Wepána Matapi. Mi madre era Wa'ahiru Yukuna». Y fecha: mes de octubre de 1974.

Se llama Horacio Matapi. Leonor Herrera Ángel recogió con él, en el río Mirití de la Comisaría del Amazonas, la versión matapí del mito que en yukuna se llama inau'ké kerato'okó, «Nacimiento de la Gente», y la publicó en 1976 en el volumen 20 de la Revista Colombiana de Antropología. El título despista, advierte ella: sólo el primer episodio trata de la génesis de la gente, y el resto es una narración épica, las aventuras de Ka'amari y su descendencia. Otros mitos del mismo conjunto explican lo demás; el de Kanumá, los cultígenos; el de los Karipulakena, la noche y la maloca.

El relato se recogió textualmente en varias sesiones, y Herrera cuenta que la dificultad no estaba en retomar el hilo sino en pararlo: el narrador seguía adelante aunque supiera que ya no se anotaba. Ella dividió el continuo en dos partes y en capítulos, puso al frente de cada uno un resumen que se puede ignorar, y armó un cuadro de personajes porque hay cuatro Ka'amari distintos. Pulió la conjugación y la persona de los verbos sólo donde lo consideró indispensable. Las frases entre paréntesis son aclaraciones del narrador a preguntas suyas. Las menciones de brujería quedaron oscuras por voluntad de él. Entre quienes leyeron y comentaron el borrador del artículo, Herrera nombra a Faustino Matapi. Y anota que los yukuna tienen un «Nacimiento de la Gente» de contenido completamente distinto.`,
    versiones: `Hay dos memorias del mismo comienzo y no dicen lo mismo.

La de Horacio Matapi, en Herrera, hace nacer juntos a matapí y yukuna —ellos en Yuinata, los yukuna en Hewaíta, unos y otros del canangucho— y deriva de ahí la norma de no pelear entre sí. El conflicto arranca por la precedencia en el baile, y la ofensa la cometen los hombres de Ka'amari al pasar con el yuruparí entre las mujeres de Himuri. Herrera anota al pie que en otras versiones del «Nacimiento de la Gente» la causa del conflicto es el manejo irresponsable del yuruparí por parte del menor de Ka'amari.

La otra la recogió van der Hammen en Puerto Córdoba, de boca kamejeya, es decir yukuna. Allí los matapí llegan huyendo de las guerras; su tierra es Yuinata; el capitán de una de sus divisiones, los upichiya, se llama Kajmari; y el que se mete con las mujeres durante una exhibición de yuruparí es el hermano menor de Kajmari, que va donde la otra división, los murerúa, y muere por eso. La guerra de venganzas corre hasta que el nieto de Kajmari queda como único sobreviviente y llega a vivir entre los kamejeya, que le dan mujer. Mismos nombres, ofensa invertida y final distinto: incorporación en vez de victoria.

El nombre upichiya también se usa de dos maneras. En el texto de Herrera aparece una sola vez, en boca del enemigo Kerámoa, con la glosa del propio narrador: «Kerámoa puso nombre a nosotros». En van der Hammen, upichía es el nombre de una división matapí, y los yukuna los consideran «gente con nacimiento» —con derecho a recitar su origen, a tener maloca y capitanes—, frente a otros incorporados que llaman «gente sin nacimiento».`,
    similitudes: `Dos paralelos están documentados por la propia edición.

El primero es tanimuka. Herrera anota al pie que entre los tanimuka los «mayores» nacieron del tigre, el animal de mayor importancia en la mitología y el ritual de muchos grupos amazónicos, y sugiere que por eso tenían el privilegio de bailar primero; remite para ello a Martín von Hildebrand, que publicó en 1975 el origen del mundo según los ufaina, es decir los tanimuka. Aquí el privilegio recae en Ka'amari, que se volvía tigre, y la ruptura de ese orden desata la guerra. Es un pueblo vecino y una explicación prestada, no la misma narración.

El segundo es una comparación que van der Hammen hace y descarta. Los grupos de habla tukano del Vaupés recitan su dispersión desde las partes de una anaconda mítica, y los sibs mayores quedan río abajo y los menores en las cabeceras. Para los yukuna ese modelo no se presenta, aunque hay versiones que insinúan algo parecido: en una versión matapí del mito de los Karipulakena, al caer el árbol-río salen del agua los abuelos yukuna, que fueron los primeros, y por eso los grupos vecinos los llaman abuelos.

Lo propio de este relato es otra cosa. No explica el mundo: recita personas. Fija un lugar de nacimiento, una filiación, una norma entre dos pueblos y una cadena de generaciones con nombre, y es esa recitación la que sostiene el derecho a hablar desde una memoria propia.`,
    leccion:
      "Un nacimiento compartido no impide la guerra, pero deja una medida para reconocer cuándo se rompió.",
    sceneHorizontal:
      "en una sabana de Yuinata rodeada de cananguchos, pequeños brotes se transforman simbólicamente en grupos de adultos y aparecen Ureyu, Kana'apé y Rimákuté como tres siluetas centrales",
    sceneVertical:
      "dos malocas vecinas intercambian frutos por un sendero, mientras Ka'amarí e Himuri permanecen a lados distintos y una línea quebrada anuncia la ruptura sin mostrar armas ni violencia",
    researchNotes:
      "CORRECCIÓN DOCUMENTAL: centra nacimiento, filiación y quiebre de reciprocidad; resume sin espectacularizar la extensa historia de guerra y descendencia.",
    seoTitle: "Nacimiento de los Matapí / Upichiya",
    seoDescription:
      "Relato Yukuna-Matapí sobre el nacimiento Upichiya en Yuinata, el vínculo con los Yukuna y la historia ancestral de Ka'amarí e Himuri.",
    focusKeywords: [
      "nacimiento de los Matapí",
      "historia Upichiya",
      "Ka'amarí e Himuri",
      "Yuinata",
      "mito Yukuna-Matapí",
    ],
  }),
  defineYucunaMyth({
    slug: "karipu-lakena-y-la-primera-noche",
    title: "Los Karipú Lakena y la primera noche",
    excerpt:
      "Cuatro hermanos buscan una medida para el tiempo; la noche que reciben de Tapurinami trae descanso, peligro y aprendizaje.",
    tags: ["creación", "noche", "oscuridad", "origen"],
    mito: `Después de crear la tierra, los cuatro Karipú Lakena vieron que todavía faltaban condiciones para vivir juntos. Buscaron casas comunales, agua, animales y otras cosas entre los antiguos dueños. Algunas las obtuvieron mediante intercambio; otras salieron al mundo después de descubrir que alguien las guardaba.

El tiempo era uno de los problemas. Todo parecía ocurrir bajo una claridad continua. La gente podía comer a cualquier hora y quienes preparaban los alimentos no encontraban descanso ni medida. Los hermanos decidieron buscar la noche.

En la versión de Píteru visitaron primero a Ñaminami, dueño de la oscuridad que nunca dormía. Él podía dar sombra, pero no sueño ni sueños. Los envió a la casa de Tapurinami. En la versión de Túwemi, el camino se concentra directamente en este Señor de los Sueños. Los Karipú Lakena llevaron coca como forma de petición e intercambio.

Tapurinami mostró cuatro nueces de distintos tamaños. Cada una contenía una noche de intensidad diferente. Los hermanos descartaron las mayores porque podían vencerlos y escogieron la más pequeña. El dueño les advirtió que la noche era útil y peligrosa: debían regresar sin detenerse y no abrir la nuez durante el camino.

Lajmuchí, el menor, quiso saber cómo algo tan pequeño podía transformar el mundo. Abrió apenas el recipiente. La oscuridad escapó de inmediato. Sonaron voces de animales y seres que antes no se escuchaban; los viajeros sintieron sueño y cayeron bajo aquello que todavía no sabían manejar.

Tapurinami llegó bajo forma de murciélago y tomó los ojos de tres hermanos dormidos. Lajmuchí había cubierto los suyos con pequeños fragmentos y conservó la vista. Después recuperó los ojos de los demás, aunque una versión explica que al devolverlos no todos quedaron colocados de la misma manera.

La primera noche también alcanzó a quienes estaban trabajando, pescando o caminando. Algunas versiones vinculan ese momento con transformaciones y peligros posteriores. La narración no dice que la oscuridad fuera simplemente mala: había llegado como fuerza sin medida y debía aprenderse a vivir bajo ella.

Los Karipú Lakena continuaron hasta la mañana y trabajaron para dejar la noche a sus descendientes de una forma habitable. Desde entonces claridad y oscuridad marcaron comidas, descanso, conversación y aprendizaje. La página no reproduce las palabras usadas para manejarla; conserva la decisión narrativa: una vida ordenada necesitaba la noche, pero recibirla también exigía responsabilidad.`,
    historyCore:
      "NUEVA FICHA: recupera un ciclo creador central ausente del sitio. Fontaine compara una versión de Mario Matapí/Píteru y otra de Milciades Yucuna/Túwemi; la adaptación nombra sus diferencias y se limita al episodio público de la noche.",
    versionCore:
      "Píteru incluye a Ñaminami y el paso previo por su casa; Túwemi concentra la petición en Tapurinami. Cambian el recipiente, los consejos, las transformaciones y la forma de proteger los ojos. La página no produce una tercera versión compuesta sin atribución.",
    similarityCore:
      "Recipientes que liberan la noche circulan por el noroeste amazónico. El ciclo Ufaina también cuenta cómo una pequeña esfera oscurece el mundo durante el viaje; las versiones Baniwa cambian dueño, objeto y consecuencias. La secuencia Yucuna se reconoce por los cuatro Karipú Lakena, Tapurinami, las nueces de distinta intensidad y la pérdida de los ojos. El parentesco regional permite comparar, pero no demuestra que todas las narraciones sean una sola ni autoriza a copiar episodios ausentes. Cada pueblo organiza de manera propia la medida entre claridad, sueño y peligro.",
    leccion:
      "Toda fuerza necesaria exige medida: la curiosidad abre caminos, pero también obliga a responder por sus consecuencias.",
    sceneHorizontal:
      "cuatro hermanos adultos reciben de Tapurinami cuatro nueces de tamaños distintos dentro de una maloca abierta al paisaje; la nuez menor emite una franja azul oscura, sin mostrar coca ni objetos ceremoniales",
    sceneVertical:
      "Lajmuchí sostiene una pequeña nuez entreabierta mientras una noche de estrellas, murciélagos dibujados y siluetas de animales se extiende sobre un paisaje que aún conserva luz en el horizonte",
    researchNotes:
      "NUEVA FICHA CENTRAL: usa dos versiones atribuidas, evita copiar el ciclo Ufaina y excluye conjuros y procedimientos nocturnos.",
    seoTitle: "Karipú Lakena y la primera noche | Yucuna",
    seoDescription:
      "Mito Yucuna documentado sobre los cuatro Karipú Lakena, la visita a Tapurinami y la nuez que libera la primera noche sobre el mundo.",
    focusKeywords: [
      "Karipú Lakena",
      "origen de la noche Yucuna",
      "Tapurinami",
      "mitología Yukuna",
      "Lajmuchí",
    ],
  }),
  defineAbundanceTransfer({
    slug: "el-origen-de-las-frutas",
    title: "El origen de las frutas",
    excerpt:
      "El don de Yiida Buinama es rechazado; durante la hambruna una hormiga revela la yuca y comienza a crecer el árbol de los frutos.",
    tags: ["abundancia", "agricultura", "árbol", "frutos"],
    mito: `Monalla Jurama era el cacique de una familia numerosa. Su hija, Monalla Tirisa, era bonita y trabajadora como nadie, y todos los jóvenes la pretendían. Ella los despreciaba a todos, y nadie, ni su propio padre, sabía por qué.

Ella quería a Cullo Buinayma, que no vivía entre la gente. Era el dueño de las frutas y tenía el oficio de traer al mundo cosas buenas. No la visitaba como hombre: llegaba cada noche en forma de lombriz. Así pasaron varios meses, hasta que ella quedó en cinta.

Entonces empezaron las burlas.

—Si hubiera vivido conmigo, no le habría pasado —decía uno.

Jurama reunió a todos los jóvenes para saber quién era el padre, y nadie lo supo. La muchacha tampoco lo dijo.

Una mañana, entre oscuro y claro, la madre la mandó a la quebrada a traer agua con un colador. Mientras la hija se afanaba con el agua que se le escurría, la madre barrió el fogón, levantó cuanto había en el suelo y alzó el asiento donde su hija se sentaba siempre. Debajo encontró una lombriz muy fea. Puso agua a calentar y, cuando hirvió, se la derramó encima despacio. La lombriz no murió: se hundió hasta el centro de la tierra.

La muchacha volvió recelosa, fue derecho al asiento y no encontró nada.

—Estuvo muy mal quemar a ese hombre —le dijo a su madre—. Él es el dueño de todas las frutas y pensaba traer abundancia de comidas.

Esa noche, dormida en el chinchorro, lo oyó en sueños:

—Me llamo Cullo Buinayma. Pensaba traer frutas a este mundo, pero tu mamá me quemó. De ahora en adelante no habrá comida. Tú serás la única que no padezca hambre. Mañana temprano mira la quebrada: si la espuma está abajo, lo que llevas es mujer, y harás llomenico; si está arriba, es hombre, y harás fuare. No le des a nadie, aunque tu padre o tu madre se estén muriendo de hambre.

Al amanecer la espuma estaba arriba. Monalla Tirisa la recogió a escondidas e hizo fuare. En ese momento empezó el hambre para todos. La gente desenterraba el juki, la primera yuca, que se había quedado en el monte vuelta raíz de bejuco. Comían soñeki, una pepa que sólo comen los animales, cogollos de palma y, al final, tierra asada.

Un día Jurama, agonizante, vio en la puerta de la maloca una hormiga que jalaba una vena de yuca. La olió, buscó por toda la casa y encontró yuca en las canasticas de su hija.

—¿Por qué comes sola? Vamos a morir todos de hambre.

—Más malos son ustedes —contestó ella—. Lo quemaron, y por eso él se llevó todas las frutas.

La espuma era pura yuca. Pasados unos días brotó de ella un palo en la quebrada, que floreció y dio frutas de muchas clases: Monilla Amena, el Palo de la Abundancia. Al fin la muchacha se compadeció y dio de comer a sus padres, que revivieron. Cada mañana traía una yuquita, la ponía a madurar junto al fogón, y al otro día había bastante yuca.

Jurama, contento, cantaba burlándose de los vecinos que seguían comiendo cogollos. Ellos fueron a visitarlo con cacería y pescado, y él les dio casabe y masa de yuca. Nadie volvió a morir de hambre.

Pero el palo creció tanto, en medio del agua, que ya nadie alcanzaba las frutas. Sólo Iga subía, por un bejuco que colgaba, a chuparlas sin permiso. Cercaron el árbol con estacas afiladas para descubrir al ladrón. Un día Jurama, sin saber que había alguien arriba, cortó el bejuco. El bejuco se balanceó, volvió y le dio en el ojo. El ojo salió hasta el oriente y quedó como estrella de la mañana, Monalla Okudo, con el nombre de Jurama. Él fue el primer tuerto que hubo.`,
    historia: `Este texto se publicó en castellano en Mitos de creación, el número 44 de la colección Libro al Viento de Idartes, en Bogotá, con selección de Julio Paredes Castro. Allí aparece bajo el título «El origen de las frutas» con una sola indicación de procedencia: Putumayo. No se nombra narrador, traductor ni fecha de recolección, y el texto trae marcas de haber sido adaptado para lectores escolares, como la frase según la cual Dios dispuso que el novio llegara en forma de lombriz.

La lengua de los nombres permite situarlo. Monalla Jurama, Monalla Tirisa, Monilla Amena, el fuare y el llomenico corresponden a las formas uitoto que Fernando Urbina transcribe como Monaya Jurama, Monaya Tïrizaï, Moniya Amena y fuare, y Urbina explica que kuio es lombriz y que el dueño de las frutas figura con más frecuencia en las variantes de este ciclo como Kuio Buinaima. Por eso aquí se lee Cullo Buinayma como la misma figura, y el relato como parte de la tradición uitoto-muinane del Caquetá y el Putumayo, no de otro pueblo amazónico.

La variante con narrador identificado es la que Urbina publicó en 2010 en Las palabras del origen, un compendio de mitos uitoto editado por el Ministerio de Cultura. La narró en Araracuara, en 1985, el abuelo Julio Ribera, Kúgaï Únuba, de 85 años, miembro de la nación muinane, cuyo último territorio tradicional fue La Sabana, en el alto río Cahuinarí. La contó en uitoto, y su sobrino Ismael Mendoza la tradujo en Bogotá dos años después. Urbina la acompaña de notas: el aroma de las frutas es el lenguaje con que el visitante ofrece su don y la madre no lo entiende; la yuca es el fruto modelo del que los demás son variaciones; la hambruna que sigue a la muerte del dueño de las frutas es un rasgo de las variantes de Moniya Amena reseñadas por Beatriz Yépez en 1982 y por él mismo.

Urbina señala también la dimensión mayor del ciclo. En su resumen de otra variante, el árbol crece tanto que hay que tumbarlo, el hacha se obtiene de Muinájema, antepasado de los muinanes, y al caer el árbol se forma la Amazonia. Él mismo publicó una versión de «El árbol de la abundancia» en la revista Tablero del Convenio Andrés Bello en 2003.`,
    versiones: `Hay dos cadenas documentales distintas, y no se funden.

La de Idartes, que es la que sigue el Relato, arranca con el novio ya convertido en lombriz y con el pueblo entero burlándose de la muchacha. Trae detalles que no están en la otra: la espuma de la quebrada que indica si la criatura es hombre o mujer, el juki, el soñeki y la tierra asada que se comen durante la hambruna, el canto burlón de Jurama y el final con Iga, el ladrón de frutas, el bejuco cortado y el ojo del cacique convertido en la estrella de la mañana.

La de Julio Ribera, en la traducción de Ismael Mendoza, llama al visitante Yiida Buinaima, y también Yinaka Buinaima y Kuio; es hijo de Okïnuiema, a quien el narrador también llama Kïneiyama y Nuikïniyama, hermano de Monaya Jurama. Su padre le entrega las palabras de abundancia y le advierte que vaya de frente, pero él va a escondidas. La muchacha, Monayakono, lo esconde bajo su banco; los pajaritos que la habían pretendido cantan su embarazo; la madre culpa al padre de haber embarazado a la hija. Cuando la madre lo descubre, él sonríe y sólo se siente olor de piña, de uva, de maraca. El agua hirviendo lo devuelve abajo con un sonido como de trueno lejano. La hormiga jímuitino se lleva la vena de yuca cantando, y es el sabedor Pïdïma quien explica a Jurama que el hijo que quedó es el palo o semilla de yuca, Moniya Amena, que da maraca, guama, uva, yuca y caimo. Esa narración continúa con el corazón del muerto encontrado como huevecillo de lombriz, y ese tramo se cuenta en «El origen del maguaré».

Una tercera variante, que Urbina resume sin transcribir, lleva la historia hasta la tala del árbol con el hacha de Muinájema y el nacimiento de la Amazonia de su caída. El Relato se detiene donde se detiene el texto de Idartes.`,
    similitudes: `El paralelo más cercano está en los Llanos y está firmado. Al reseñar la compilación de tradición oral sikuani de Francisco Queixalós, William Torres pone a Kaliawiri, el árbol de los alimentos de los sikuani, al lado de Moniya Amena, el árbol de la abundancia uitoto y muinane. Los dos árboles concentran lo que después se cultiva, y en ambos el alimento empieza siendo de alguien que no lo reparte. La diferencia es de origen y de final: el árbol sikuani se tumba y su caída reparte el mundo, mientras que aquí el palo nace de la espuma de una quebrada, por el hijo de un amante quemado, y el final no es la tala sino el ojo de Jurama vuelto estrella.

El segundo paralelo lo propone Fernando Urbina en sus notas a la variante de Julio Ribera. Compara al dueño de las frutas, cuya muerte trae la hambruna, con el complejo de Deméter y Core, o Perséfone, entre los griegos, con Telepinu entre los hititas y con Osiris en el Nilo: dioses de la vegetación que desaparecen y cuya ausencia deja la tierra sin fruto. La resonancia está en la ausencia que produce hambre. La diferencia es clara: Cullo Buinayma no vuelve. Lo que vuelve es su hijo, en forma de palo, y la comida pasa primero por las manos de una muchacha que la guarda para sí. Urbina añade que en varias culturas la agricultura aparece ligada a uniones entre parientes muy cercanos, y cita a Perséfone y Hades; en la variante de Ribera el visitante es hijo del hermano de Jurama.

Dentro del mismo corpus uitoto, «El origen del maguaré» comparte el comienzo: la visita escondida, el agua hirviendo y el don de las frutas que no se entiende. Allí la historia sigue hacia el tambor; aquí se queda en el hambre, la yuca y el árbol.`,
    leccion:
      "Un regalo que no se sabe reconocer se pierde, y el hambre enseña tarde a compartir lo que queda.",
    sceneHorizontal:
      "Moniya Amena crece desde una quebrada como un árbol plano de ramas repletas de guama, uva, yuca y caimo, mientras una pequeña hormiga lleva una vena de yuca hacia la maloca",
    sceneVertical:
      "una joven levanta su asiento y encuentra solo un remolino de aromas de frutas que desciende hacia la tierra, mientras arriba una semilla comienza a brotar, sin mostrar agua hirviendo ni heridas",
    researchNotes:
      "RECLASIFICACIÓN SIN DESPUBLICAR: conserva el slug, reemplaza la atribución Yucuna por Huitoto-Muinane y separa la versión atribuida de la adaptación escolar.",
    seoTitle: "Moniya Amena, árbol de la abundancia",
    seoDescription:
      "Relato Huitoto-Muinane sobre Yiida Buinama, la hambruna, la hormiga que revela la yuca y el crecimiento de Moniya Amena.",
    focusKeywords: [
      "Moniya Amena",
      "árbol de la abundancia Huitoto",
      "Yiida Buinama",
      "origen de las frutas Putumayo",
      "mitología Muinane",
    ],
  }),
];

export default records;
