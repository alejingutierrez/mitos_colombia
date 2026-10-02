// Keyframes de Bochica, el viajero que enseñaba — 18 bloques × 2 escenas × 2
// cuadros = 72 imágenes ≈ 180 s.
// Guion: guion-bochica-v1.json (N=18) · Acta: acta-bochica.json (25 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _muisca-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · ESTE NO ES EL BOCHICA DEL TEQUENDAMA. Aquel mito —la inundación de
//   Chibchacum, la vara de oro, la peña abierta— tiene su propio canon
//   (`el-tequendama`) y su propio guion. Aquí NO hay diluvio, ni castigo, ni
//   arco iris: hay un hombre que camina y enseña a tejer. Confundirlos es el
//   error que este corpus ya cometió una vez, y la versión anterior de este
//   mismo archivo lo cometía (usaba salto_tequendama, rocas_tequendama y
//   vara_dorada). Ninguna de esas tres fichas vuelve a aparecer aquí.
// · NO conquista ni funda. La fuente lo dice de entrada: no traía casa ni
//   anunciaba ejércitos. Todo lo que deja son oficios, caminos y marcas en
//   piedra.
// · LOS TRES NOMBRES SE CONSERVAN LOS TRES —Chimizapagua, Nemterequeteba,
//   Xué—. Que él respondiera a todos y siguiera caminando es el nudo: escoger
//   uno lo convierte en un personaje con identidad fija, que es justo lo que
//   la fuente evita. En cuadro son TRES BOCAS distintas nombrándolo, no un
//   rótulo.
// · El telar pintado en la piedra NO es una firma ni un milagro: es un método
//   contra el olvido, y la fuente da la razón con todas las letras. Por eso es
//   la cita (b9).
// · La fuente NO decide cómo se fue. Subió al cielo, o el camino se lo llevó
//   de vuelta a la luz: las dos versiones quedan en el mismo bloque (b17) y
//   el guion no escoge.
// · Lo único material que queda de su cuerpo es la huella del pie en la piedra
//   de Iza. Todo lo demás que permanece es DE LA GENTE: mantas, telares,
//   camino, el nudo de la manta al hombro.
//
// DESLINDE CONTRA `camino-bochica` (los-dioses-civilizadores) Y `nompanem`:
// los tres cuentan del mismo viajero. Allí el mito es EL ITINERARIO y el ancla
// es un lugar; AQUÍ el mito es EL HOMBRE Y EL OFICIO, así que el ancla son su
// cara, sus manos y el hilo, y la cámara hace retratos y planos de trabajo
// donde la otra hacía recorridos.
//
// GUION DE LUZ: amanecer en los llanos → mañana de Pasca → luz plana del
// retrato → tarde de Bosa → atardecer de los tres nombres → frío gris del
// algodón mal atado → luz lateral de taller → telar a media mañana → piedra
// bruñida al sol → caminos abiertos en el monte → mediodía de Cota → noche de
// cueva y amanecer → piedras de Guane → tarde del valle de Sogamoso → mañana
// vacía → búsqueda gris → huella en la piedra → última luz sobre las mantas.

import { DIRECCION, AVOID_BASE, ref, esc, escp, armar } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-bochica-escenas";
export const OUT_DIR = "muiscas/videos/bochica/keyframes";
export { DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; inundacion, diluvio, valle anegado, agua desbordada; pena partida, cascada, salto de agua, arco iris; vara de oro, baston resplandeciente, rayos saliendo de las manos; aureola, halo o resplandor sobre el viajero; milagros, transformaciones magicas, particulas brillantes; ejercitos, conquista, fundacion de ciudades, banderas; templos monumentales de piedra labrada, columnas, escalinatas; adoracion, arrodillarse, procesiones, cruces; escritura, alfabeto, tablas o rotulos de nombres";
export const PALETTE =
  "crema de algodon crudo y blanco de copo sin hilar, pardos de barro y paja, verdes apagados de sabana y monte, gris mineral de piedra bruniida, ocre de llano seco al amanecer; los hilos de color solo en las cenefas que se van tejiendo; sin saturacion";

const BO =
  "EL MISMO viajero de la referencia (hombre mayor de barba blanca hasta la cintura, cabello largo recogido con una cinta tejida estrecha, cara curtida y tranquila, túnica sin cuello de algodón crudo y manta anudada por sus dos puntas sobre el hombro derecho, descalzo, sin bastón ni objeto de metal)";

export const ITEMS = armar([
  // b1 — Vino del oriente, por los llanos donde nace la luz. Entró por Pasca.
  escp("b1a", [ref("bochica_anciano"), ref("casa_tierras_llanas"), ref("sendero_territorio")], {
    comun: `Amanecer en los llanos del oriente, el horizonte bajo y casi todo el cuadro de cielo. ${BO} llegando desde donde nace la luz. Capa de primer plano: hierba alta de llano. Objeto ancla: el punto que avanza.`,
    camara: {
      a: "GRAN PLANO GENERAL del llano al amanecer, con un punto oscuro moviéndose muy lejos sobre la línea del horizonte.",
      b: "la cámara ha AVANZADO en un travelling largo a ras de hierba y ha bajado hasta el suelo: PLANO DETALLE de sus pies descalzos y el bajo de la manta pasando por delante.",
    },
    ini: "en el llano inmenso no hay más que un punto oscuro que avanza desde el lado por donde sale el sol.",
    fin: "a ras de tierra pasan sus pies descalzos y el borde de la manta, ya encima de la cámara: el punto lejano era un hombre andando.",
  }, "caballos, carros, ejercito, comitiva, resplandor, aureola"),
  escp("b1b", [ref("familias_muiscas"), ref("poblado_nuevo"), ref("bochica_anciano")], {
    comun: `Mañana en el poblado de Pasca. Nadie lo conoce: lo miran sin acercarse y sin apartarse. No hay recibimiento ni alarma. Objeto ancla: las caras que se vuelven.`,
    camara: {
      a: "PLANO MEDIO CORTO de tres caras del poblado volviéndose a la vez hacia un lado, mirando algo que está fuera de cuadro.",
      b: "la cámara ha GIRADO al otro lado y ha retrocedido subiendo: PLANO GENERAL desde detrás del caserío con él entrando por el camino, pequeño, y la gente parada a media distancia mirándolo.",
    },
    ini: "tres caras se vuelven a la vez hacia algo que todavía no se ve.",
    fin: "desde arriba y por detrás del caserío se ve lo que miraban: un desconocido entrando solo por el camino, y todos quietos donde estaban.",
  }, "recibimiento triunfal, aclamacion, arrodillarse, miedo teatral, armas"),

  // b2 — Hombre mayor, barba hasta la cintura, pelo con cinta. Descalzo.
  escp("b2a", [ref("bochica_anciano")], {
    comun: `Luz plana de mañana. El retrato: barba blanca hasta la cintura y el pelo sujeto con una cinta tejida estrecha. Objeto ancla: la cinta del pelo.`,
    camara: {
      a: "PLANO MACRO de la cinta tejida apretando el pelo blanco en la nuca, tan cerca que se ven los hilos.",
      b: "la cámara ha RETROCEDIDO y ha rodeado hasta ponerse de frente: PLANO MEDIO de él entero de cintura para arriba, con la barba cayéndole hasta donde se anuda la manta.",
    },
    ini: "los hilos de la cinta aprietan el pelo blanco, muy de cerca.",
    fin: "de frente y a media distancia se le ve la cara entera y la barba bajando hasta la cintura: un hombre mayor, nada más.",
  }, "corona, diadema de metal, aureola, barba estilizada de santo, tunica europea"),
  escp("b2b", [ref("bochica_anciano"), ref("sendero_territorio")], {
    comun: `Luz plana. Andaba descalzo: la planta del pie endurecida por el camino, sin calzado de ninguna clase. Objeto ancla: el pie descalzo sobre la tierra.`,
    camara: {
      a: "PLANO MACRO de un pie descalzo posándose sobre la tierra del sendero, con el polvo levantándose.",
      b: "la cámara ha RETROCEDIDO y se ha elevado en diagonal: PLANO GENERAL del sendero con él pequeño, de espaldas, ya varios pasos más allá.",
    },
    ini: "el pie descalzo se posa en la tierra y levanta polvo.",
    fin: "desde lejos y desde arriba se le ve de espaldas en mitad del sendero, con la huella de sus pies quedando detrás en la tierra.",
  }, "sandalias, botas, calzado de correas, alfombra, sendero empedrado europeo"),

  // b3 — Manta atada por las dos puntas y túnica sin cuello. Sin casa ni ejércitos.
  escp("b3a", [ref("bochica_anciano"), ref("manta_horqueta")], {
    comun: `Luz plana de mañana. El nudo: la manta atada por SUS DOS PUNTAS sobre el hombro derecho, encima de una túnica sin cuello. Ése es el gesto que después copiará todo el reino. Objeto ancla: el nudo en el hombro.`,
    camara: {
      a: "PLANO MACRO del nudo de las dos puntas de la manta apretado sobre el hombro derecho, con la trama del algodón a la vista.",
      b: "la cámara ha RETROCEDIDO y ha girado al perfil: PLANO MEDIO LARGO de él de pie, con la manta cayéndole del hombro y la túnica sin cuello debajo.",
    },
    ini: "el nudo de las dos puntas está apretado sobre el hombro, tan cerca que se ve la trama.",
    fin: "de perfil y a media distancia se ve cómo cuelga la manta entera desde ese nudo, sobre la túnica sin cuello.",
  }, "capa con broche, fibula de metal, manto hasta el suelo, capucha, velo"),
  escp("b3b", [ref("bochica_anciano"), ref("sendero_territorio"), ref("poblado_nuevo")], {
    comun: `Luz de mañana. No traía casa ni anunciaba ejércitos: detrás de él el camino está vacío. Lo que se muestra es la AUSENCIA de comitiva. Objeto ancla: el camino vacío a su espalda.`,
    camara: {
      a: "PLANO MEDIO de él de frente, ocupando el centro del cuadro, con el fondo desenfocado.",
      b: "la cámara ha RETROCEDIDO muchísimo por encima de su hombro hasta un GRAN PLANO GENERAL en picado del camino entero, con él solo en un extremo y nadie detrás en toda su longitud.",
    },
    ini: "está de frente y cerca, y no se ve qué hay detrás de él.",
    fin: "desde muy arriba se ve el camino completo hasta el horizonte: él es la única figura, no viene nadie más.",
  }, "ejercito, comitiva, carros, tiendas de campana, banderas, estandartes"),

  // b4 — Hablaba la lengua de cada pueblo. En Bosa tardaron en nombrarlo.
  escp("b4a", [ref("bochica_anciano"), ref("familias_muiscas"), ref("mercado_bacata")], {
    comun: `Tarde en Bosa. Hablaba la lengua de cada pueblo por donde iba: se le ve ESCUCHANDO primero y contestando después, en corro y a la altura de todos. Objeto ancla: las bocas y las manos que hablan.`,
    camara: {
      a: "PLANO MEDIO CORTO de una mujer hablándole muy cerca, con las manos explicando algo.",
      b: "la cámara ha RETROCEDIDO girando alrededor del corro: PLANO GENERAL del corro entero visto desde el lado contrario, con él sentado entre ellos y seis personas alrededor.",
    },
    ini: "una mujer le habla de cerca y mueve las manos explicando.",
    fin: "desde el otro lado del corro se ve que está sentado en el suelo entre todos, a la misma altura, contestando a otro que le pregunta.",
  }, "predica, pulpito, sermon, texto, libros, traduccion escrita"),
  escp("b4b", [ref("familias_muiscas"), ref("mercado_bacata")], {
    comun: `Tarde en Bosa. La gente tarda en decidir qué nombre darle: discuten entre ellos, no con él. Él no está en el centro del cuadro. Objeto ancla: el grupo discutiendo.`,
    camara: {
      a: "PLANO MEDIO de cuatro personas discutiendo entre ellas, con él fuera de cuadro.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL en picado de la plaza con tres corros distintos discutiendo a la vez, y él pequeño y sentado aparte, esperando.",
    },
    ini: "cuatro personas discuten entre ellas, apiñadas.",
    fin: "desde arriba se ve que no es un corro sino tres, discutiendo cada uno por su lado, mientras él espera sentado en un borde de la plaza.",
  }, "rotulos, nombres escritos, votacion, asamblea europea, texto"),

  // b5 — Chimizapagua, Nemterequeteba, Xué. Respondía a todos y seguía.
  escp("b5a", [ref("familias_muiscas"), ref("bochica_anciano"), ref("mercado_bacata")], {
    comun: `Atardecer. LOS TRES NOMBRES A LA VEZ: tres personas distintas nombrándolo, cada una desde un sitio distinto de la plaza. No se resuelve cuál es el suyo. Objeto ancla: tres bocas que hablan al mismo tiempo.`,
    camara: {
      a: "PLANO MEDIO CORTO de una boca y una cara diciendo un nombre, de perfil contra la luz de la tarde.",
      b: "la cámara ha hecho un PANORÁMICO rápido a lo largo de la plaza y ha retrocedido: PLANO GENERAL con las otras dos personas visibles en dos puntos alejados, las tres con la boca abierta a la vez.",
    },
    ini: "una cara dice un nombre, de cerca y a contraluz.",
    fin: "desde lejos se ve que no es una sino tres personas nombrándolo al mismo tiempo, cada una en un extremo de la plaza, y ninguna oye a las otras.",
  }, "rotulos, nombres escritos, subtitulos, coronacion, aclamacion"),
  escp("b5b", [ref("bochica_anciano"), ref("sendero_territorio")], {
    comun: `Última luz de la tarde. Él responde a todos los nombres y sigue caminando: el gesto es asentir sin detenerse. Objeto ancla: su espalda alejándose.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara de tres cuartos asintiendo una vez, sin abrir la boca.",
      b: "la cámara se ha QUEDADO QUIETA mientras él se aleja y luego ha subido: PLANO GENERAL en picado del camino con él ya pequeño, de espaldas, saliendo del pueblo.",
    },
    ini: "asiente una sola vez, de cerca, sin decir nada.",
    fin: "desde arriba se le ve ya lejos y de espaldas en el camino: contestó a los tres nombres y no se quedó.",
  }, "despedida teatral, adioses, multitud llorando, aureola, resplandor"),

  // b6 — Antes de él se tapaban con planchas de algodón atadas con fique.
  esc("b6a", [ref("algodon_planchas"), ref("casa_barro_paja")], {
    comun: `Mañana gris y fría. El abrigo de antes: PLANCHAS de algodón en rama sin hilar, amarradas unas con otras con cordeles de fique. Objeto ancla: el cordel de fique mordiendo el algodón.`,
    camara: {
      a: "PLANO MACRO del cordel de fique apretando dos planchas de algodón en rama, con las fibras saliéndose por el borde.",
      b: "la cámara ha RETROCEDIDO y ha girado: PLANO MEDIO de la prenda entera colgada de una horqueta dentro de la casa, vista como lo que es, un apaño de planchas atadas.",
    },
    ini: "el cordel de fique aprieta dos planchas de algodón y las fibras se escapan por los bordes.",
    fin: "colgada entera de la horqueta se ve la prenda completa: cinco o seis planchas amarradas entre sí, sin tejer.",
  }, "tela tejida, telas modernas, lana, pieles, cuero, ropa europea"),
  escp("b6b", [ref("familias_muiscas"), ref("algodon_planchas"), ref("casa_barro_paja")], {
    comun: `Mañana gris y fría. La gente tapándose del frío con esas planchas, encogida en el patio. Objeto ancla: los hombros cubiertos de algodón en rama.`,
    camara: {
      a: "PLANO MEDIO de dos personas de espaldas con las planchas de algodón sobre los hombros, encogidas por el frío.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del patio con ocho personas repartidas, todas con el mismo apaño encima y el vaho saliéndoles de la boca.",
    },
    ini: "dos personas de espaldas se tapan con planchas de algodón y se encogen.",
    fin: "desde arriba se ve el patio entero: ocho personas con el mismo apaño de algodón sobre los hombros, y el aire frío visible.",
  }, "miseria explotada, llanto teatral, ninos, harapos europeos, mendicidad"),

  // b7 — El abrigo se deshacía con el trabajo. Él tomó el algodón y lo hiló.
  escp("b7a", [ref("familias_muiscas"), ref("algodon_planchas"), ref("sabana_cultivos")], {
    comun: `Luz plana de mañana. El abrigo mal unido que el trabajo deshace: al agacharse a trabajar, los cordeles ceden y las planchas se abren. Objeto ancla: el cordel que se suelta.`,
    camara: {
      a: "PLANO MACRO de un cordel de fique cediendo y una plancha de algodón empezando a descolgarse del hombro.",
      b: "la cámara ha RETROCEDIDO y ha bajado al surco: PLANO MEDIO de la persona agachada trabajando con la prenda ya medio caída y las planchas sueltas en la tierra.",
    },
    ini: "el cordel cede y una plancha empieza a resbalar del hombro.",
    fin: "a la altura del surco se ve a la persona agachada trabajando con el abrigo deshecho y dos planchas ya en la tierra.",
  }, "burla, humillacion, castigo, dramatismo, ninos"),
  escp("b7b", [ref("bochica_anciano"), ref("copo_algodon"), ref("familias_muiscas")], {
    comun: `Luz lateral de taller entrando por el vano. ${BO} toma el algodón y muestra cómo hilarlo: el copo en una mano y el hilo naciendo entre los dedos de la otra. Objeto ancla: el hilo que sale del copo.`,
    camara: {
      a: "PLANO GENERAL del interior con él sentado en el suelo y cuatro personas alrededor, todavía sin ver qué hace.",
      b: "la cámara ha AVANZADO hasta sus manos y ha bajado a la altura del regazo: PLANO MACRO del copo de algodón y del hilo fino saliendo de él entre dos dedos.",
    },
    ini: "está sentado en el suelo con gente alrededor y aún no se ve qué tiene en las manos.",
    fin: "de muy cerca se ve lo que hacía: del copo de algodón sale un hilo fino y parejo entre sus dedos.",
  }, "rueca europea, torno de hilar, maquinaria, magia, resplandor"),

  // b8 — Enseñó a tejer mantas. Al salir dejaba un telar pintado en una piedra.
  escp("b8a", [ref("telar_marco"), ref("bochica_anciano"), ref("familias_muiscas")], {
    comun: `Media mañana, luz lateral. El telar de marco tensado y las manos aprendiendo: no es él quien teje, son ellos, y él corrige. Objeto ancla: la trama que crece en el telar.`,
    camara: {
      a: "PLANO MACRO de la trama del telar con dos hilos cruzándose y la mano de una tejedora empujando la trama.",
      b: "la cámara ha RETROCEDIDO y ha subido en diagonal: PLANO GENERAL del patio con tres telares de marco a la vez, gente tejiendo en los tres y él de pie detrás de uno, mirando.",
    },
    ini: "dos hilos se cruzan en el telar y una mano empuja la trama, muy de cerca.",
    fin: "desde arriba se ve el patio con tres telares funcionando a la vez y él detrás de uno, sin tocarlo, sólo mirando cómo lo hacen.",
  }, "telar industrial, maquinaria, rueca europea, magia, aureola"),
  esc("b8b", [ref("piedra_telar"), ref("poblado_nuevo")], {
    comun: `Luz de mediodía. Al salir de cada pueblo deja la figura de un telar pintada sobre una piedra lisa. Es un dibujo a lo tosco, no una firma. Objeto ancla: la figura del telar en la piedra.`,
    camara: {
      a: "PLANO MACRO del dibujo del telar sobre la piedra lisa, con la pintura todavía húmeda en los trazos.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la piedra al borde del camino de salida del pueblo, con el caserío pequeño al fondo y nadie alrededor.",
    },
    ini: "los trazos del telar pintados en la piedra están todavía húmedos, vistos muy de cerca.",
    fin: "desde lejos se ve la piedra sola al borde del camino por donde se sale del pueblo, con el dibujo mirando hacia quien pasa.",
  }, "firma, inicial, alfabeto, escritura, simbolos magicos, cruces"),

  // b9 — Bruñido y a la vista. «Para que el olvido no pudiera con lo aprendido». (CITA)
  esc("b9a", [ref("piedra_telar"), ref("sendero_territorio")], {
    comun: `Sol alto sobre la piedra bruñida. La piedra está PULIDA y el dibujo puesto A LA VISTA, en el sitio por donde pasa todo el mundo: eso es lo que lo hace un método y no un adorno. Objeto ancla: la superficie bruñida devolviendo la luz.`,
    camara: {
      a: "PLANO MACRO en rasante de la superficie bruñida de la piedra devolviendo la luz del sol, con el dibujo cruzándola.",
      b: "la cámara se ha ELEVADO en vertical hasta un GRAN PLANO GENERAL en picado del cruce de caminos, con la piedra en el centro y tres senderos saliendo de ella.",
    },
    ini: "la luz resbala sobre la piedra pulida y deja ver el dibujo del telar.",
    fin: "desde muy arriba se ve por qué está ahí: la piedra está justo en el cruce de tres caminos, donde pasa todo el que va a cualquier parte.",
  }, "altar, ofrendas, culto, cruces, texto, inscripciones"),
  escp("b9b", [ref("familias_muiscas"), ref("piedra_telar"), ref("telar_marco")], {
    comun: `Sol alto. CITA: lo dejaba así para que el olvido no pudiera con lo aprendido. Se demuestra: alguien que no lo vio hacerlo mira la piedra y vuelve al telar. Objeto ancla: la mirada que va de la piedra al telar.`,
    camara: {
      a: "PLANO MEDIO CORTO de una mujer joven agachada delante de la piedra, mirando el dibujo con atención.",
      b: "la cámara la ha SEGUIDO en travelling mientras se levanta y camina, y ha retrocedido: PLANO GENERAL del patio con ella ya sentada al telar repitiendo el cruce de hilos que vio dibujado.",
    },
    ini: "está agachada delante de la piedra, leyendo el dibujo con los ojos.",
    fin: "desde el otro lado del patio se la ve ya sentada al telar, cruzando los hilos igual que en el dibujo, sin que nadie se lo haya enseñado.",
  }, "texto en pantalla, subtitulos, libros, escuela europea, aureola"),

  // b10 — Fontibón, Funza, Zipacón; al norte por la sierra, abriendo caminos.
  escp("b10a", [ref("bochica_anciano"), ref("piedras_funza"), ref("sabana_cultivos")], {
    comun: `Luz de mañana sobre la sabana. El recorrido: Fontibón, Funza y Zipacón, y luego el giro al norte por las faldas de la sierra. Objeto ancla: el sendero que tuerce.`,
    camara: {
      a: "PLANO MEDIO de él de espaldas parado en una bifurcación del sendero, mirando hacia el norte.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado de la sabana con el sendero torciendo hacia las faldas de la sierra y él ya diminuto en el tramo nuevo.",
    },
    ini: "de espaldas y cerca, está parado donde el sendero se bifurca.",
    fin: "desde muy arriba se ve la sabana entera y el camino torciendo hacia el norte, con él diminuto ya metido en la curva.",
  }, "mapas, brujulas, banderas, hitos de conquista, ejercito"),
  escp("b10b", [ref("bochica_anciano"), ref("sendero_territorio"), ref("familias_muiscas")], {
    comun: `Luz de mañana en el monte. Iba abriendo caminos donde antes sólo había monte: apartando ramas a mano, y detrás de él otros ensanchando lo abierto. NO hay tala ni herramientas de metal. Objeto ancla: las ramas apartadas.`,
    camara: {
      a: "PLANO MACRO de dos manos apartando ramas y hojas de monte hacia los lados.",
      b: "la cámara ha ATRAVESADO el hueco abierto y ha retrocedido subiendo: PLANO GENERAL de la trocha ya abierta monte abajo, con cuatro personas detrás de él ensanchándola a mano.",
    },
    ini: "dos manos apartan las ramas hacia los lados, muy de cerca.",
    fin: "desde arriba y desde el otro lado se ve la trocha abierta bajando por el monte, con cuatro personas detrás de él ensanchándola.",
  }, "hachas de metal, sierras, tala, incendio, maquinaria, ejercito"),

  // b11 — En Cota le hicieron un foso de dos mil pasos para que no lo atropellaran.
  escp("b11a", [ref("familias_muiscas"), ref("bochica_anciano"), ref("valle_iraca")], {
    comun: `Mediodía en Cota. Se juntó tanta gente para oírlo que el gentío apretaba. La multitud es de gente común y no adora: escucha. Objeto ancla: los cuerpos apretados.`,
    camara: {
      a: "PLANO MEDIO CORTO dentro del gentío, con hombros y caras muy juntos ocupando todo el cuadro.",
      b: "la cámara se ha ELEVADO en vertical saliendo del gentío: GRAN PLANO GENERAL en picado de la explanada con cientos de personas apiñadas y él en un punto pequeño del centro.",
    },
    ini: "dentro del gentío no se ve más que hombros y caras muy juntos.",
    fin: "desde muy arriba se ve la explanada entera llena de gente apiñada, con él como un punto en el medio.",
  }, "adoracion, arrodillarse, procesion, estandartes, panico, estampida"),
  esc("b11b", [ref("acequia_bosa"), ref("valle_iraca")], {
    comun: `Mediodía. Le hicieron un foso de más de dos mil pasos para que la multitud no lo atropellara. Es una obra de tierra, larga y práctica: una zanja abierta a azada. Objeto ancla: el borde del foso.`,
    camara: {
      a: "PLANO MACRO del borde de tierra recién abierta del foso, con las marcas de la azada en la pared de la zanja.",
      b: "la cámara ha RETROCEDIDO siguiendo la zanja y se ha elevado: GRAN PLANO GENERAL en picado del foso entero cruzando la explanada de lado a lado, con la gente a un lado y el espacio vacío al otro.",
    },
    ini: "la tierra del borde del foso está recién abierta y se ven las marcas de la azada.",
    fin: "desde muy arriba se ve el foso entero de punta a punta: la multitud a un lado de la zanja y al otro lado un pasillo vacío.",
  }, "muralla, fortificacion, empalizada, foso con agua, castillo"),

  // b12 — De noche, a una cueva; al amanecer seguía. En Guane lo retrataron.
  escp("b12a", [ref("cueva_sierra"), ref("bochica_anciano"), ref("altiplano_noche")], {
    comun: `Noche cerrada con estrellas en la falda de la sierra. De noche se recogía a una cueva, solo, sin fuego grande ni compañía. Objeto ancla: la boca de la cueva.`,
    camara: {
      a: "PLANO GENERAL del altiplano de noche con la boca de la cueva pequeña y oscura en la falda de la sierra.",
      b: "la cámara ha AVANZADO hasta entrar en la cueva y se ha vuelto hacia fuera: PLANO MEDIO desde dentro con él sentado contra la pared y el cielo estrellado recortado en la boca.",
    },
    ini: "desde lejos, la boca de la cueva es un hueco oscuro en la falda de la sierra bajo las estrellas.",
    fin: "desde dentro se le ve sentado contra la pared, con el recorte estrellado de la entrada detrás: pasa la noche solo.",
  }, "fuego grande, hoguera ritual, ermita, altar, aureola, vision"),
  esc("b12b", [ref("piedras_funza"), ref("piedra_telar"), ref("sendero_territorio")], {
    comun: `Amanecer y luego luz plana en Guane. Lo retrataron en las piedras, A LO TOSCO: figuras esquemáticas picadas en la roca, toscas a propósito, para que quedara memoria. Objeto ancla: la figura picada en la roca.`,
    camara: {
      a: "PLANO MACRO de una figura humana esquemática recién picada en la roca, con el polvo de piedra todavía en los surcos.",
      b: "la cámara ha RETROCEDIDO y ha girado siguiendo la pared: PLANO GENERAL del farallón entero con siete u ocho figuras toscas repartidas por la roca y el valle abajo.",
    },
    ini: "la figura esquemática recién picada conserva el polvo de piedra en los surcos.",
    fin: "desde lejos se ve el farallón completo con siete u ocho figuras toscas repartidas por la pared, todas de la misma mano.",
  }, "retrato realista, escultura clasica, relieve europeo, escritura, alfabeto"),

  // b13 — A lo tosco, para que quedara memoria. Volvió al oriente por Tunja.
  escp("b13a", [ref("familias_muiscas"), ref("piedras_funza")], {
    comun: `Luz plana. Lo hicieron a lo tosco a propósito: lo que importa no es el parecido sino que dure. Se ve a quien pica la roca y por qué le basta con eso. Objeto ancla: la piedra que golpea la roca.`,
    camara: {
      a: "PLANO MACRO de una piedra de mano golpeando la roca y saltando esquirlas del surco.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO LARGO de dos personas trabajando la pared, una picando y otra señalando dónde sigue la línea.",
    },
    ini: "la piedra de mano golpea la roca y saltan esquirlas del surco.",
    fin: "a media distancia se ve a los dos trabajando la pared: uno pica y el otro le señala por dónde debe seguir la línea.",
  }, "cinceles de metal, martillos de hierro, escultores clasicos, andamios"),
  escp("b13b", [ref("bochica_anciano"), ref("valle_iraca"), ref("sendero_territorio")], {
    comun: `Tarde. Volvió hacia el oriente, pasó por la provincia de Tunja y llegó al valle de Sogamoso. Objeto ancla: el valle abriéndose al final del camino.`,
    camara: {
      a: "PLANO MEDIO de él de espaldas subiendo el último tramo de una loma, cortado por el borde del cuadro.",
      b: "la cámara ha PASADO por encima de él y se ha elevado al otro lado de la loma: GRAN PLANO GENERAL del valle de Sogamoso abriéndose entero abajo, con él diminuto en el borde de arriba.",
    },
    ini: "de espaldas y muy cerca, sube el último tramo de la loma.",
    fin: "desde el otro lado de la loma se ve el valle entero abierto abajo y él diminuto arriba, parado en el borde.",
  }, "ciudad monumental, templos de piedra, murallas, conquista, banderas"),

  // b14 — Habló de la vida común: las almas siguen, el trato sea justo.
  escp("b14a", [ref("bochica_anciano"), ref("familias_muiscas"), ref("valle_iraca")], {
    comun: `Tarde en el valle. Habló de la vida común: que las almas no se acaban con el cuerpo. Lo dice sentado y en corro, sin sermón y sin altura. Objeto ancla: el corro sentado.`,
    camara: {
      a: "PLANO GENERAL del corro sentado en la hierba al atardecer, todos a la misma altura, él entre ellos.",
      b: "la cámara ha AVANZADO por dentro del corro hasta su cara y ha bajado al nivel del suelo: PLANO MEDIO CORTO de él hablando bajo, con las cabezas de los otros desenfocadas delante.",
    },
    ini: "el corro está sentado en la hierba y él es uno más dentro de él.",
    fin: "de cerca y desde el suelo se le ve hablar bajo, con las nucas de los que escuchan cruzando el primer término.",
  }, "pulpito, sermon, aureola, resplancor, cruces, cielo abierto, angeles"),
  escp("b14b", [ref("familias_muiscas"), ref("mercado_bacata"), ref("manta_reparto")], {
    comun: `Última luz. Que el trato entre gentes sea justo: se demuestra con un intercambio, dos manos midiendo lo mismo de cada lado. Objeto ancla: las dos manos que reparten.`,
    camara: {
      a: "PLANO MACRO de dos manos repartiendo un montón de grano en dos partes iguales sobre una manta extendida.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la plaza con seis parejas haciendo tratos a la vez sobre sus mantas, todas de la misma manera.",
    },
    ini: "dos manos parten un montón de grano en dos mitades iguales sobre la manta.",
    fin: "desde arriba se ve la plaza con seis tratos en marcha a la vez, cada uno sobre su manta y todos repartiendo igual.",
  }, "monedas, balanzas europeas, mercaderes, oro, contratos, texto"),

  // b15 — Al cacique le mostró cómo gobernar con suavidad. Y una mañana no estaba.
  escp("b15a", [ref("sogamoso_cacique"), ref("bochica_anciano"), ref("valle_iraca")], {
    comun: `Tarde. Al cacique del valle le mostró la forma de gobernar con suavidad: no le da una orden, le señala algo y espera. El cacique conserva su rango y su manta con cenefa. Objeto ancla: la mano que señala sin tocar.`,
    camara: {
      a: "PLANO MEDIO de los dos de perfil, el viajero señalando hacia el valle con la mano abierta y el cacique siguiendo esa dirección con la mirada.",
      b: "la cámara ha GIRADO al otro lado y ha cerrado: PRIMER PLANO del cacique solo, mirando todavía hacia allá, con el viajero ya desenfocado detrás.",
    },
    ini: "los dos de perfil: uno señala el valle con la mano abierta y el otro sigue la dirección con los ojos.",
    fin: "de cerca queda sólo la cara del cacique, todavía mirando hacia donde le señalaron, y el viajero borroso detrás.",
  }, "trono, coronacion, investidura, cetro, arrodillarse, juramento"),
  escp("b15b", [ref("casa_barro_paja"), ref("sogamoso_cacique"), ref("valle_iraca")], {
    comun: `Mañana temprano, luz limpia. Una mañana, en Sogamoso, ya no estaba: el sitio donde dormía está vacío y ordenado, sin nada dejado atrás. Objeto ancla: la estera vacía.`,
    camara: {
      a: "PLANO MACRO de una estera vacía en el suelo de la casa, con la marca de un cuerpo todavía en la fibra.",
      b: "la cámara ha RETROCEDIDO saliendo por el vano y se ha elevado: PLANO GENERAL del caserío al amanecer con dos personas asomándose a mirar dentro y el valle vacío detrás.",
    },
    ini: "la estera está vacía y todavía guarda la marca de un cuerpo en la fibra.",
    fin: "desde fuera y desde arriba se ve a dos personas asomándose al vano a comprobarlo, y detrás el valle sin nadie en los caminos.",
  }, "cuerpo, cadaver, tumba, sepultura, luto teatral, aureola"),

  // b16 — Lo buscaron y no hallaron rastro. La tierra guardó la huella en Iza.
  escp("b16a", [ref("familias_muiscas"), ref("valle_iraca"), ref("sendero_territorio")], {
    comun: `Mañana gris. Lo buscaron y no hallaron rastro que seguir: gente repartida mirando el suelo por caminos distintos. La búsqueda es tranquila, no angustiada. Objeto ancla: el suelo sin huellas.`,
    camara: {
      a: "PLANO MACRO del polvo del camino liso y sin ninguna huella, con la luz gris encima.",
      b: "la cámara ha RETROCEDIDO y se ha elevado mucho: GRAN PLANO GENERAL en picado del valle con siete personas repartidas por cuatro caminos distintos, todas mirando el suelo.",
    },
    ini: "el polvo del camino está liso: no hay ninguna huella en él.",
    fin: "desde muy arriba se ve a siete personas repartidas por cuatro caminos distintos, todas con la cabeza baja buscando el rastro que no está.",
  }, "llanto teatral, desesperacion, batidas con antorchas, perros, armas"),
  esc("b16b", [ref("piedra_huella_iza")], {
    comun: `Luz plana. La tierra conservó su huella en una piedra de Iza: la forma de UN PIE hundida en la roca, del tamaño de un pie y nada más. Objeto ancla: la huella en la piedra.`,
    camara: {
      a: "PLANO GENERAL de la piedra sola en el campo, sin que se vea todavía qué tiene encima.",
      b: "la cámara ha AVANZADO y se ha puesto en cenital sobre ella: PLANO MACRO en picado de la huella de un pie descalzo hundida en la roca, con agua de lluvia acumulada dentro.",
    },
    ini: "desde lejos no es más que una piedra grande en mitad del campo.",
    fin: "desde arriba y muy cerca se ve lo que tiene: la forma de un pie descalzo hundida en la roca, con un poco de agua de lluvia dentro.",
  }, "huella gigante, pie descomunal, resplandor, altar, ofrendas, cruces"),

  // b17 — El pie estampado, y el resto fue silencio. Las dos versiones.
  escp("b17a", [ref("piedra_huella_iza"), ref("familias_muiscas")], {
    comun: `Luz plana. El pie estampado como única señal de su paso, y el resto fue silencio: la gente alrededor de la piedra sin decir nada. Objeto ancla: el silencio alrededor de la huella.`,
    camara: {
      a: "PLANO MACRO de una mano posándose dentro de la huella de la piedra, midiéndola con la palma.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL con cinco personas de pie alrededor de la piedra, separadas entre sí y calladas, mirándola.",
    },
    ini: "una mano se posa dentro de la huella y la mide con la palma.",
    fin: "desde arriba se ve a cinco personas de pie alrededor de la piedra, sin tocarla y sin hablarse: no hay nada más que decir.",
  }, "adoracion, arrodillarse, ofrendas, culto, cruces, procesion"),
  esc("b17b", [ref("altiplano_noche"), ref("sendero_territorio"), ref("casa_tierras_llanas")], {
    comun: `Última luz sobre el llano. LAS DOS VERSIONES EN EL MISMO CUADRO y sin escoger: unos dijeron que subió al cielo; otros, que el camino ancho que abrió desde los llanos se lo llevó de vuelta a la luz. Se muestran las dos a la vez, cielo arriba y camino abajo, sin figura en ninguno. Objeto ancla: el camino vacío bajo el cielo abierto.`,
    camara: {
      a: "PLANO ENTERAMENTE DE CIELO al atardecer, sin tierra en cuadro, con una franja de luz abriéndose en lo alto.",
      b: "la cámara ha BASCULADO hacia abajo y ha retrocedido: PLANO GENERAL del camino ancho que cruza el llano hacia el oriente, vacío de punta a punta, con el cielo ocupando sólo la franja de arriba.",
    },
    ini: "el cuadro es sólo cielo de atardecer con una franja de luz abriéndose.",
    fin: "al bajar la cámara aparece el camino ancho cruzando el llano hacia el oriente, vacío entero: las dos salidas están en cuadro y ninguna se cierra.",
  }, "figura ascendiendo, cuerpo en el cielo, rayos de luz divinos, angeles, aureola, nubes doradas"),

  // b18 — Quedaron las mantas, los telares, el camino y el nudo al hombro.
  escp("b18a", [ref("familias_muiscas"), ref("telar_marco"), ref("manta_reparto")], {
    comun: `Última luz cálida. Lo que quedó es DE LA GENTE: mantas tejidas en uso, telares trabajando, y el oficio pasando de unas manos a otras. Objeto ancla: la manta terminada saliendo del telar.`,
    camara: {
      a: "PLANO MACRO de una manta terminada saliendo del telar, con la cenefa tejida del borde a la vista.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del patio con varias personas tejiendo, otras con la manta ya puesta, y ningún forastero en cuadro.",
    },
    ini: "la manta terminada sale del telar y se le ve la cenefa tejida del borde.",
    fin: "desde arriba se ve el patio entero: unos tejiendo, otros con la manta ya encima, y nadie enseñándoles nada.",
  }, "aureola, monumento, estatua, altar, culto, cruces, texto"),
  escp("b18b", [ref("familias_muiscas"), ref("sendero_territorio"), ref("piedra_telar")], {
    comun: `Última luz. El gesto final es EL NUDO: alguien que no es él anuda su manta por las dos puntas sobre el hombro, igual que él la llevaba, y sale al camino. Objeto ancla: el nudo en el hombro de otro.`,
    camara: {
      a: "PLANO MACRO de dos manos anudando las dos puntas de una manta sobre un hombro.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL en picado del camino al atardecer con esa persona ya andando por él, la piedra del telar pintado al borde y el valle entero detrás.",
    },
    ini: "dos manos que no son las suyas anudan las dos puntas de la manta sobre el hombro.",
    fin: "desde muy arriba se ve a esa persona andando por el camino con la manta anudada igual, pasando al lado de la piedra del telar pintado.",
  }, "aureola, reencarnacion, aparicion, fantasma, resplandor, monumento"),
]);
