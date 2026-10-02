// Keyframes de El Bermejo aspira a gobernar — 14 bloques × 2 escenas × 2 cuadros
// = 56 imágenes ≈ 140 s.
// Guion: guion-el-bermejo-aspira-a-ser-rey-v2.json (N=14)
// Acta:  acta-el-bermejo-aspira-a-ser-rey.json (27 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _muisca-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · El relato NO dice que tuviera razón ni que no la tuviera. Su queja era
//   legítima —también pertenecía a esa tierra— y la manera en que la defendió
//   lo destruyó. LAS DOS COSAS A LA VEZ, y ninguna imagen puede inclinar la
//   balanza: ni villano ni mártir.
// · Gámeza NO lo insulta ni lo humilla: le da una razón y le ofrece una
//   salida. Él confundió la vergüenza con una amenaza. La escena de Gámeza se
//   filma tranquila, con público y sin un solo gesto hostil.
// · Los pueblos NO se unen contra el extranjero: se unen contra quien eliminó
//   una voz porque no pudo convencerla. Esa distinción NO se difumina.
// · NO hay muerte heroica: un proyectil lo alcanza cuando sus líneas ya se
//   deshacen. No hay duelo, ni último discurso, ni cámara lenta.
// · El cierre NO es condena ni perdón: una piedra del camino de Toca por la
//   que el tránsito sigue pasando sin desviarse. Y la elección continuó.
//
// DESLINDE CONTRA `la-historia-del-bermejo`: allí el mito es cómo se quedó.
// Aquí es la caída, y el primer bloque la engancha recordando lo que costó.
//
// GUION DE LUZ: duelo por el zaque muerto → puerta cerrada → aviso de Hisca →
// regalos que reparte → regalos que vuelven → luz limpia de Gámeza → sombra
// del arresto → madrugada de la muerte → noticia que corre → guerreros que se
// van → llanura → última advertencia → líneas deshechas → piedra en el camino.

import { DIRECCION, AVOID_BASE, ref, esc, escp, armar } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-bermejo-rey-escenas";
export const OUT_DIR = "muiscas/videos/el-bermejo-aspira-a-ser-rey/keyframes";
export { DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; conquistadores, armaduras, cascos, cruces, carabelas; muerte heroica, ultimo discurso, camara lenta epica, martir, aureola; villano caricaturizado, risa malvada, ojos de maldad; xenofobia dibujada, insultos al extranjero, turbas de linchamiento; ejecucion explicita, decapitacion, sangre abundante, cadaveres amontonados; coronacion, trono, corona, cetro";
export const PALETTE =
  "gris de duelo y de llanura, pardo de camino, crema de algodon crudo, ocre y verde de las cenefas, polvo de llanura; el cobre apagado del cabello del Bermejo; sin saturacion ni neones";

const BERMEJO =
  "EL MISMO Bermejo de la referencia (hombre de unos treinta años, fuerte de espalda, rostro atento de rasgos que no son del altiplano, piel más clara y quemada por el camino, cabello de un cobre apagado y rojizo recogido en la nuca, manta de algodón crudo anudada al hombro al modo muisca)";
const HISCA =
  "EL MISMO Hisca de la referencia (hombre de unos treinta y cinco años, de constitución media y cara franca, rasgos que no son del altiplano, piel quemada por el camino, cabello castaño oscuro recogido, manta de algodón crudo anudada al hombro al modo muisca)";
const GAMEZA =
  "EL MISMO cacique de Gámeza de la referencia (hombre de unos cincuenta años, de porte tranquilo y firme, rostro sereno, pelo negro con canas recogido bajo una cinta tejida, manta de algodón crudo de tejido fino anudada al hombro con cenefa)";

export const ITEMS = armar([
  // b1 — Murió el zaque. Recordó lo que costó quedarse.
  esc("b1a", [ref("cercado_bacata"), ref("manta_vasijas"), ref("familias_muiscas")], {
    comun: "Luz gris de duelo. Murió el zaque de Hunsa: la estera vacía y la gente reuniéndose. Objeto ancla: la estera del zaque.",
    camara: {
      a: "PLANO MACRO de la estera vacía del zaque, con la manta doblada al lado y sin nadie encima.",
      b: "la cámara ha RETROCEDIDO y ha subido: PICADO del recinto con gente reunida en semicírculo alrededor de esa estera, todos callados.",
    },
    ini: "la estera está vacía y la manta doblada a un lado.",
    fin: "desde arriba, el semicírculo se ha cerrado alrededor de la estera vacía y nadie se sienta en ella.",
  }, "cadaver, funeral europeo, cruces, llanto teatral, corona"),
  escp("b1b", [ref("bermejo_forastero"), ref("tronco_prueba"), ref("familias_muiscas")], {
    comun: `${BERMEJO} recordando lo que costó quedarse: la lengua, la familia y pruebas que todavía le duelen en los hombros. En las reuniones su palabra ES escuchada. Objeto ancla: su hombro.`,
    camara: {
      a: "PLANO MACRO de su hombro, con la marca vieja del roce del tronco todavía en la piel.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO LARGO del semicírculo con él hablando y las caras vueltas hacia él, escuchándolo de verdad.",
    },
    ini: "en el hombro se ve la marca vieja de lo que cargó.",
    fin: "en la reunión está hablando y todas las caras del semicírculo están vueltas hacia él: su palabra pesa.",
  }, "aureola, desprecio, insultos, burla, expulsion"),

  // b2 — El nuevo zaque saldría de otros pueblos. Otra puerta cerrada.
  escp("b2a", [ref("familias_muiscas"), ref("bermejo_forastero"), ref("salon_jeques")], {
    comun: `Luz de interior. Oye que el nuevo zaque será elegido entre hombres de OTROS pueblos. Objeto ancla: la lista de los nombres que sí entran.`,
    camara: {
      a: "PLANO MEDIO de los que hablan enumerando nombres con los dedos, sin mirarlo.",
      b: "la cámara ha hecho un PANEO LATERAL hasta él y se ha acercado: PLANO MEDIO CORTO de su cara oyéndolo, con la enumeración siguiendo fuera de cuadro.",
    },
    ini: "van diciendo nombres y contándolos con los dedos.",
    fin: "de cerca se le ve la cara mientras siguen contando: ninguno de los nombres es el suyo y nadie se ha vuelto a mirarlo.",
  }, "insultos, señalar con desprecio, expulsion, burla, aureola"),
  escp("b2b", [ref("bermejo_forastero"), ref("familias_muiscas"), ref("valle_iraca")], {
    comun: `Él dice que TAMBIÉN pertenece a esa tierra. Su queja es legítima y la imagen no la ridiculiza. Objeto ancla: lo que ha construido.`,
    camara: {
      a: "PLANO MEDIO CORTO de él diciéndolo, serio y sin levantar la voz.",
      b: "la cámara ha RETROCEDIDO y ha subido hasta un GRAN PLANO GENERAL del valle con la casa que levantó, el surco que trabaja y el camino que anda, todo a la vista.",
    },
    ini: "lo dice mirando al frente, sin alzar la voz.",
    fin: "desde arriba se ve lo que respalda lo que dijo: su casa, su surco y su camino, todos dentro del mismo valle.",
  }, "aureola, pose heroica, banderas, multitud aclamando"),

  // b3 — «Pertenecer no significa que toda función te corresponda».
  escp("b3a", [ref("hisca_companero"), ref("bermejo_forastero")], {
    comun: `${HISCA} respondiéndole que pertenecer no significa que toda función te corresponda. Es un amigo diciéndole algo incómodo, no un consejero sabio. Objeto ancla: las dos caras.`,
    camara: {
      a: "PLANO MEDIO de los dos sentados uno junto al otro, mirando los dos al frente y no entre ellos.",
      b: "la cámara ha AVANZADO hasta Hisca y ha girado: PLANO MEDIO CORTO de su cara hablando, ya vuelta hacia el Bermejo, que sigue mirando al frente.",
    },
    ini: "están sentados hombro con hombro, los dos mirando al frente.",
    fin: "Hisca se ha vuelto hacia él para decírselo a la cara, y el Bermejo sigue mirando al frente sin girarse.",
  }, "pelea, gritos, empujones, sermon, aureola"),
  escp("b3b", [ref("bermejo_forastero"), ref("hisca_companero")], {
    comun: `Él NO quiso oírlo. Se dice con el cuerpo: se levanta y se va. Objeto ancla: el sitio vacío que deja.`,
    camara: {
      a: "PLANO MEDIO de él levantándose del banco mientras Hisca sigue hablando.",
      b: "la cámara se ha QUEDADO con Hisca: PLANO MEDIO del banco con Hisca solo y el sitio de al lado vacío, y él ya saliendo por el borde del cuadro.",
    },
    ini: "se levanta del banco con Hisca todavía a media frase.",
    fin: "Hisca ha quedado solo en el banco con el sitio de al lado vacío y la frase sin terminar, mientras él sale por el borde.",
  }, "portazo, gritos, violencia, llanto, aureola"),

  // b4 — Prometió tierras por apoyo. Unos recibieron, otros devolvieron.
  escp("b4a", [ref("bermejo_forastero"), ref("familias_muiscas"), ref("manta_reparto"), ref("cercado_bacata")], {
    comun: `Luz de tarde. Visita al cacique de Pesca y promete tierras, mantas y alianzas si apoya su nombre. Es compra de votos y la imagen no lo disimula. Objeto ancla: los presentes sobre la manta.`,
    camara: {
      a: "PLANO MACRO de dos mantas finas y un canasto puestos sobre una manta extendida, con una mano empujándolos.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO LARGO de los dos sentados con el montón entre ellos y él hablando bajo, inclinado hacia adelante.",
    },
    ini: "la mano empuja los presentes hacia el otro lado de la manta.",
    fin: "desde más lejos se ve la escena entera: los presentes en medio y él inclinado hacia el otro, hablando bajo y deprisa.",
  }, "oro, monedas, sobornos con dinero, aureola, violencia"),
  escp("b4b", [ref("familias_muiscas"), ref("regalos_devueltos"), ref("camino_carrera")], {
    comun: `Mensajeros a los demás electores: algunos reciben los regalos sin comprometerse y OTROS LOS DEVUELVEN. Las dos cosas en el mismo cuadro. Objeto ancla: los dos destinos de los mismos presentes.`,
    camara: {
      a: "PLANO MEDIO de un mensajero entregando un fardo en una puerta, que lo recibe.",
      b: "la cámara ha hecho un TRAVELLING LATERAL hasta otra puerta del mismo camino: PLANO MEDIO con LOS MISMOS regalos devueltos de la referencia puestos en el umbral, intactos y ordenados, y el mensajero recogiéndolos.",
    },
    ini: "en una puerta reciben el fardo y lo meten dentro.",
    fin: "en la puerta siguiente los presentes están devueltos en el umbral, ordenados y sin abrir, y el mensajero se agacha a recogerlos.",
  }, "insultos, violencia, portazos, burla, dramatismo"),

  // b5 — Gámeza pidió hablar frente a testigos. (CITA)
  escp("b5a", [ref("gameza_cacique"), ref("bermejo_forastero"), ref("familias_muiscas"), ref("salon_jeques")], {
    comun: `Luz limpia de día. ${GAMEZA} pidiendo hablar con él FRENTE A TESTIGOS. No hay emboscada ni humillación: es a la vista de todos. Objeto ancla: los testigos.`,
    camara: {
      a: "PLANO MEDIO de los dos frente a frente, a la misma altura.",
      b: "la cámara ha RETROCEDIDO y ha subido: PICADO del recinto con los dos en el centro y un semicírculo de testigos alrededor, callados y sin tomar partido.",
    },
    ini: "los dos están frente a frente, a la misma altura.",
    fin: "desde arriba se ve por qué lo pidió así: hay quince testigos alrededor, todos callados, y nada de lo que se diga va a poder negarse después.",
  }, "emboscada, humillacion publica, burla, gritos, violencia"),
  escp("b5b", [ref("gameza_cacique"), ref("bermejo_forastero")], {
    comun: `${GAMEZA} diciéndole que no votará por él, porque la regla no cambia porque un candidato se considere excepcional. Lo dice TRANQUILO: no lo insulta ni lo humilla. Objeto ancla: su cara.`,
    camara: {
      a: "PLANO MEDIO CORTO de la cara de Gámeza diciéndolo, serena y sin dureza.",
      b: "la cámara ha RODEADO hasta detrás de él: PLANO MEDIO de la cara del Bermejo escuchando, con la nuca de Gámeza en primer término y la mandíbula ya apretada.",
    },
    ini: "Gámeza lo dice con la cara tranquila, sin subir la voz.",
    fin: "al otro lado, la cara del Bermejo se ha endurecido: está oyendo una razón y la está recibiendo como un golpe.",
  }, "insultos, dedo acusador, gritos, burla, escupir, violencia"),

  // b6 — «Discútelas sin comprar votos». Confundió la vergüenza con amenaza.
  escp("b6a", [ref("bermejo_forastero"), ref("gameza_cacique"), ref("familias_muiscas")], {
    comun: `Él contesta que las reglas también pueden ser injustas —y eso NO es absurdo— y le responden que entonces convoque a discutirlas SIN COMPRAR a quienes deciden. Le están ofreciendo una salida. Objeto ancla: las manos abiertas de quien le ofrece la salida.`,
    camara: {
      a: "PLANO MEDIO CORTO del Bermejo contestando, con argumento y sin gritar.",
      b: "la cámara ha hecho un PANEO LATERAL hasta uno de los testigos y se ha acercado: PLANO MEDIO de ese testigo hablándole con las dos manos abiertas, ofreciéndole el camino.",
    },
    ini: "él contesta con un argumento, sin levantar la voz.",
    fin: "uno de los testigos le está ofreciendo la salida con las dos manos abiertas: convocar y discutir, sin comprar a nadie.",
  }, "burla, humillacion, risas, expulsion, violencia"),
  escp("b6b", [ref("bermejo_forastero"), ref("familias_muiscas"), ref("salon_jeques")], {
    comun: `Siente que los demás ya escogieron un lado, y CONFUNDE LA VERGÜENZA CON UNA AMENAZA. El error está en cómo lee las caras, y eso se ve en el encuadre. Objeto ancla: las caras que él mira.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara recorriendo el semicírculo con la mirada.",
      b: "la cámara ha girado y ha hecho un PANEO por el semicírculo tal como él lo ve: PLANO GENERAL de quince caras que lo miran con incomodidad y vergüenza ajena, ninguna con hostilidad.",
    },
    ini: "recorre el corro con la mirada, buscando de qué lado están.",
    fin: "lo que hay alrededor son quince caras incómodas, apartando la vista y sin mirarlo de frente: es vergüenza, no amenaza, y él lee lo contrario.",
  }, "caras hostiles, turba, gritos, armas, linchamiento"),

  // b7 — Ordenó detener a Gámeza. Hisca se interpuso.
  escp("b7a", [ref("bermejo_forastero"), ref("gameza_cacique"), ref("familias_muiscas")], {
    comun: `Sombra de la tarde. Ordena detener a ${GAMEZA}. Objeto ancla: las manos que lo agarran.`,
    camara: {
      a: "PLANO MEDIO CORTO del Bermejo dando la orden, seco, con un gesto mínimo de la barbilla.",
      b: "la cámara ha hecho un PANEO LATERAL hasta Gámeza: PLANO MEDIO de dos hombres tomándolo por los brazos, sin golpearlo, y él sin resistirse.",
    },
    ini: "la orden sale con un gesto pequeño de la barbilla.",
    fin: "dos hombres lo tienen ya por los brazos; él no se resiste ni dice nada y nadie lo ha golpeado.",
  }, "golpes, sangre, arrastrar, gritos, cadenas, tortura"),
  escp("b7b", [ref("hisca_companero"), ref("bermejo_forastero")], {
    comun: `${HISCA} interponiéndose y advirtiendo que si lo mata nadie discutirá su derecho: sólo recordarán su miedo. Objeto ancla: el cuerpo de Hisca en medio.`,
    camara: {
      a: "PLANO MEDIO de Hisca poniéndose físicamente delante, con el brazo extendido.",
      b: "la cámara ha RODEADO hasta detrás de Hisca: PLANO MEDIO CORTO de la cara del Bermejo por encima de su hombro, oyendo la advertencia sin contestar.",
    },
    ini: "Hisca se pone delante con el brazo extendido, cortando el paso.",
    fin: "por encima del hombro de Hisca se ve la cara del Bermejo escuchando la advertencia entera y sin contestar nada.",
  }, "pelea entre ellos, golpes, sangre, gritos, aureola"),

  // b8 — Antes del amanecer, Gámeza había muerto.
  escp("b8a", [ref("bermejo_forastero"), ref("hisca_companero"), ref("altiplano_noche")], {
    comun: `Noche. Aparta a su compañero. Se cuenta con el gesto de apartar, no con lo que pasa después. Objeto ancla: la mano que aparta.`,
    camara: {
      a: "PLANO MACRO de su mano apartando el brazo de Hisca del camino, sin violencia.",
      b: "la cámara se ha QUEDADO con Hisca y ha retrocedido: PLANO GENERAL nocturno con Hisca solo en el patio y el Bermejo ya entrando en la oscuridad del fondo.",
    },
    ini: "la mano aparta el brazo del otro, con firmeza y sin golpearlo.",
    fin: "Hisca ha quedado solo en el patio a oscuras y él ya se metió en la sombra del fondo: lo que pase ahora no se ve.",
  }, "ejecucion explicita, sangre, decapitacion, cadaver, gritos"),
  esc("b8b", [ref("cercado_bacata"), ref("manta_vasijas"), ref("altiplano_noche")], {
    comun: "Primera luz. Antes del amanecer, Gámeza había muerto. La muerte NO se muestra: se muestra lo que queda. Objeto ancla: la estera vacía de Gámeza.",
    camara: {
      a: "PLANO MACRO de una manta de cenefa doblada sobre una estera, sin nadie.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del recinto al amanecer, vacío, con esa estera en un extremo y la puerta abierta al fondo.",
    },
    ini: "la manta con cenefa está doblada sobre la estera, quieta.",
    fin: "desde lejos, el recinto está vacío al amanecer y esa estera es lo único que queda en él: nadie ha entrado ni ha salido.",
  }, "cadaver, sangre, violencia, funeral, llanto teatral"),

  // b9 — La noticia viajó rápido. Pueblos que reñían se unieron.
  esc("b9a", [ref("camino_carrera"), ref("sabana_cultivos"), ref("poblado_nuevo")], {
    comun: "Luz de mañana. La noticia viajó más rápido que cualquier mensajero. Objeto ancla: los caminos.",
    camara: {
      a: "PLANO MEDIO de un correo pasando a la carrera muy cerca del objetivo.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado del territorio con cinco correos distintos corriendo a la vez por cinco caminos, todos alejándose del mismo punto.",
    },
    ini: "un correo pasa corriendo junto a la cámara.",
    fin: "desde muy arriba se ve que van cinco a la vez, en cinco direcciones, saliendo todos del mismo sitio.",
  }, "texto, letreros, mapas, banderas, dramatismo"),
  escp("b9b", [ref("familias_muiscas"), ref("gameza_cacique"), ref("otga_encuentro")], {
    comun: `Pueblos que discutían entre sí se unen. NO se unen contra el extranjero: se unen CONTRA QUIEN ELIMINÓ UNA VOZ PORQUE NO PUDO CONVENCERLA. Esa distinción tiene que verse: los que se juntan estaban peleados entre ellos. Objeto ancla: los que antes discutían y ahora se sientan juntos.`,
    camara: {
      a: "PLANO MEDIO de dos hombres de pueblos distintos que se dan la espalda, cada uno con los suyos.",
      b: "la cámara ha RETROCEDIDO y ha subido: PICADO del puesto de encuentro con esos mismos dos ahora sentados en el mismo corro, con las esteras juntas.",
    },
    ini: "los dos grupos se dan la espalda, cada uno en su lado de la explanada.",
    fin: "desde arriba están sentados en el mismo corro y con las esteras juntas: lo que los unió no fue de dónde viene él.",
  }, "turba, linchamiento, insultos al extranjero, armas en alto, banderas"),

  // b10 — Reunió guerreros. Cada orden lo dejaba más solo.
  escp("b10a", [ref("bermejo_forastero"), ref("familias_muiscas"), ref("campo_pelado")], {
    comun: `Luz plana. Reúne guerreros y dice que defenderá su derecho. Objeto ancla: cuántos hay.`,
    camara: {
      a: "PLANO MEDIO CORTO de él hablando a los suyos, decidido.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del campo con el grupo reunido, que es notablemente más pequeño de lo que la primera imagen sugería.",
    },
    ini: "habla de cerca a los que tiene delante, con firmeza.",
    fin: "desde lejos se ve cuántos son en realidad: un grupo modesto en mitad de un campo grande, con mucho espacio vacío alrededor.",
  }, "ejercito enorme, banderas, armaduras, epica, aureola"),
  escp("b10b", [ref("familias_muiscas"), ref("campo_pelado"), ref("altiplano_noche")], {
    comun: `Cada orden lo deja más solo: los que lo apoyaron por los regalos se retiran, y los que dudaban vieron en la muerte de Gámeza una advertencia. Objeto ancla: los huecos que quedan.`,
    camara: {
      a: "PLANO MEDIO de dos hombres recogiendo sus cosas de noche y saliendo del campamento.",
      b: "la cámara ha RETROCEDIDO y ha subido: PICADO del campamento al amanecer con la mitad de los fuegos apagados y huecos de esteras vacías por todas partes.",
    },
    ini: "dos hombres recogen sus cosas y se van en la oscuridad.",
    fin: "al amanecer, desde arriba, la mitad de los fuegos están apagados y hay huecos de esteras vacías por todo el campamento.",
  }, "deserciones dramatizadas, gritos, violencia, castigos"),

  // b11 — La confrontación llegó a una llanura cerca de Sogamoso.
  esc("b11a", [ref("campo_pelado"), ref("valle_iraca")], {
    comun: "Luz gris de llanura. La confrontación llega a una llanura cerca de Sogamoso: dos masas enfrentadas y una franja de tierra vacía entre ellas. Objeto ancla: la franja vacía.",
    camara: {
      a: "PLANO MACRO de la hierba seca de la franja vacía, con el viento moviéndola y ni una huella encima.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado de la llanura con las dos masas a los lados y la franja vacía cruzando el cuadro entre ellas, mucho más grande una que otra.",
    },
    ini: "la hierba de la franja vacía se mueve con el viento, sin una huella.",
    fin: "desde arriba se ve la desproporción: una masa ocupa un tercio del cuadro y la otra apenas un puñado, con la franja vacía en medio.",
  }, "batalla en curso, sangre, cadaveres, banderas, armaduras"),
  escp("b11b", [ref("hisca_companero"), ref("bermejo_forastero"), ref("campo_pelado")], {
    comun: `${HISCA} volviendo a buscarlo antes de avanzar y diciéndole que todavía puede responder por lo que hizo. Objeto ancla: las dos caras.`,
    camara: {
      a: "PLANO GENERAL de la llanura con Hisca cruzando la franja vacía hacia él, solo.",
      b: "la cámara ha AVANZADO con él hasta los dos: PLANO MEDIO CORTO de las dos caras enfrentadas, con la masa desenfocada detrás.",
    },
    ini: "Hisca cruza solo la franja vacía, a la vista de los dos lados.",
    fin: "de cerca están los dos frente a frente, y Hisca le está diciendo que todavía hay una salida.",
  }, "pelea, golpes, llanto, abrazo, aureola, camara lenta"),

  // b12 — «Ya no luchas por aspirar». Entró en la batalla. (CITA)
  escp("b12a", [ref("bermejo_forastero"), ref("hisca_companero")], {
    comun: `Él contesta que si retrocede dirán que nunca debió aspirar, y le responden que YA NO LUCHA POR ASPIRAR, SINO PARA NO ADMITIR EN QUÉ SE CONVIRTIÓ. Objeto ancla: su cara sin mirarlo.`,
    camara: {
      a: "PLANO MEDIO CORTO del Bermejo contestando SIN MIRARLO, con la cara vuelta hacia la llanura.",
      b: "la cámara ha RODEADO hasta ponerse delante de él, entre él y la llanura: PLANO MEDIO CORTO frontal, con Hisca cortado por el borde diciéndole la frase.",
    },
    ini: "contesta sin girar la cara, mirando hacia la llanura.",
    fin: "visto de frente, está recibiendo la frase entera sin apartar los ojos del horizonte: la ha oído y no la va a contestar.",
  }, "aureola, pose heroica, camara lenta, discurso, aplausos"),
  escp("b12b", [ref("bermejo_forastero"), ref("campo_pelado"), ref("familias_muiscas")], {
    comun: `${BERMEJO} entrando en la batalla. Sin épica y sin plano de gloria. Objeto ancla: su espalda entrando en la franja.`,
    camara: {
      a: "PLANO MEDIO por detrás de él dando el primer paso hacia la franja vacía.",
      b: "la cámara se ha QUEDADO ATRÁS y ha subido: PLANO GENERAL en picado con él y los suyos ya dentro de la franja, pequeños, avanzando hacia una masa mucho mayor.",
    },
    ini: "da el primer paso hacia la franja, de espaldas.",
    fin: "desde arriba, el grupo entero está ya en mitad de la franja vacía, pequeño, avanzando hacia algo tres veces más grande.",
  }, "carga epica, camara lenta, gritos de guerra, banderas, aureola"),

  // b13 — Un proyectil lo alcanzó cuando sus líneas se deshacían.
  esc("b13a", [ref("campo_pelado")], {
    comun: "Polvo y gris. Las líneas deshaciéndose. NO hay duelo ni combate heroico: hay desorden. Objeto ancla: el polvo y las direcciones cruzadas.",
    camara: {
      a: "PLANO MACRO del suelo con pisadas cruzadas en todas direcciones y un asta de caña clavada.",
      b: "la cámara se ha ELEVADO hasta un PICADO ALTO: desde arriba las líneas ya no son líneas, sino manchas deshechas moviéndose sin orden.",
    },
    ini: "en el suelo hay pisadas cruzadas sin dirección y un asta clavada.",
    fin: "desde arriba no queda ninguna formación: sólo grupos deshechos moviéndose en direcciones contrarias entre el polvo.",
  }, "duelo heroico, cadaveres amontonados, sangre abundante, banderas, camara lenta"),
  escp("b13b", [ref("bermejo_forastero"), ref("campo_pelado"), ref("familias_muiscas")], {
    comun: `Un proyectil lo alcanza cuando sus líneas ya se deshacen. NO hay muerte gloriosa, ni último discurso, ni nadie mirándolo. Murió antes de poder regresar a la casa que había construido. Objeto ancla: el suelo donde cae.`,
    camara: {
      a: "PLANO MEDIO lateral de él avanzando entre el polvo, sin nadie alrededor mirándolo.",
      b: "la cámara ha BAJADO al suelo y ha retrocedido: PLANO GENERAL a ras de tierra con él caído en el polvo, pequeño, mientras la gente sigue moviéndose alrededor sin detenerse por él.",
    },
    ini: "avanza entre el polvo y nadie a su alrededor lo está mirando.",
    fin: "está caído en la tierra, visto desde lejos y a ras de suelo, mientras el resto sigue moviéndose alrededor sin parar ni mirar.",
  }, "muerte heroica, ultimo discurso, camara lenta, aureola, martir, sangre"),

  // b14 — Hisca puso una piedra del camino de Toca.
  escp("b14a", [ref("hisca_companero"), ref("campo_pelado"), ref("sendero_territorio")], {
    comun: `Luz gris. NO lo enterraron como a un gobernante. ${HISCA} tomando una piedra del camino de Toca —el pueblo donde el Bermejo conoció a su mujer— y poniéndola sobre la tierra. Objeto ancla: la piedra.`,
    camara: {
      a: "PLANO MACRO de una mano levantando una piedra corriente del borde del camino de Toca.",
      b: "la cámara ha SEGUIDO la piedra y ha bajado al sitio: PLANO MEDIO de esa piedra puesta sobre la tierra, sola, sin túmulo y sin ninguna marca.",
    },
    ini: "la mano levanta del camino una piedra corriente, sin nada especial.",
    fin: "la piedra ha quedado puesta sobre la tierra removida, sola: no hay túmulo, ni ofrendas, ni nada escrito.",
  }, "tumba monumental, lapida, texto, cruces, funeral de estado, aureola"),
  esc("b14b", [ref("sendero_territorio"), ref("familias_muiscas"), ref("salon_jeques")], {
    comun: "Luz de mañana, después de las lluvias. La elección continuó: el mundo no se detuvo por él. Y la piedra sigue en su lugar, con el camino de Toca pasando por ella todos los días SIN DESVIARSE. Ni condena ni perdón. Objeto ancla: la piedra en el camino.",
    camara: {
      a: "PLANO MEDIO del recinto donde la elección sigue: el semicírculo reunido, gente hablando y contando nombres con los dedos.",
      b: "la cámara ha SALIDO del recinto y ha hecho un travelling largo hasta el camino de Toca, bajando a ras de tierra: PLANO MACRO final de la piedra medio hundida, con pies descalzos pasando a su lado sin apartarse ni detenerse.",
    },
    ini: "en el recinto la elección continúa igual que antes, con nombres y dedos.",
    fin: "en el camino de Toca la piedra sigue puesta y medio hundida por las lluvias, y la gente pasa a su lado todos los días sin desviarse ni mirarla.",
  }, "monumento, lapida con texto, ofrendas, flores, aureola, culto"),
]);
