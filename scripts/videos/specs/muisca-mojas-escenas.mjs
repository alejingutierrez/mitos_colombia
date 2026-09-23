// Keyframes de Los mojas — 12 bloques × 2 escenas × 2 cuadros = 48 imágenes ≈ 120 s.
// Guion: guion-los-mojas-v2.json (N=12) · Acta: acta-los-mojas.json (24 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _muisca-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · El Sol NUNCA PIDE LA VIDA. La fuente lo dice sin rodeos. El sacrificio lo
//   decide la gente, y el relato dice por qué: los mayores esperaban palabras
//   y el silencio se volvió respuesta peligrosa.
// · LOS CUIDADOS SON EL ENCIERRO: buena comida, el cabello lavado, no dejarlo
//   caminar. El privilegio y la prisión son UNA SOLA COSA y la imagen no
//   puede separarlas — se ven en el mismo plano, siempre.
// · El último canto NO es una plegaria por otros: canta su propio camino, los
//   brazos que lo cargaron, los pasos que no pudo dar, y el miedo sin
//   esconderlo.
// · El amanecer NO CONFIRMA NADA: la misma luz cae sobre el muchacho, los
//   sacerdotes y los caciques. Ninguna imagen puede iluminarlo a él de manera
//   especial. Sin haz, sin aureola, sin rayo.
// · La pregunta QUEDA SIN RESPUESTA y la nota sigue flotando. No cerrar.
//
// TRATO: el sacrificio NO se muestra. Lo que se ve es el antes y lo que quedó
// —la manta doblada y las vasijas vacías—. No hay cuchillo, ni sangre, ni
// cuerpo. La fuente tampoco lo describe.
//
// GUION DE LUZ: llegada desde los Llanos → hombros y mantas limpias → esteras
// del santuario → cantos hacia el Oriente → luz sobre los cerros → silencio
// que pesa → mañana de las piernas largas → frío del cerro antes del alba →
// canto propio → la pregunta → el sol sobre todos por igual → nota que queda.

import { DIRECCION, AVOID_BASE, ref, esc, escp, armar } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-mojas-escenas";
export const OUT_DIR = "muiscas/videos/los-mojas/keyframes";
export { DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; cuchillos, hachas, armas rituales, sangre, heridas, cuerpo sacrificado, altar de sacrificio; sol con cara, rayos dibujados, haz de luz sobre una persona, aureola, resplandor; dios que señala o exige; iconografia mesoamericana de sacrificio, piramides escalonadas, corazones; llanto teatral, gritos, forcejeo, atar o amordazar; menor en primer plano llorando o en peligro explicito";
export const PALETTE =
  "blanco crudo de la manta del moja, ocre de estera y de barro, verde apagado de cultivo, gris de niebla de paramo, azul frio de antes del alba; el naranja del amanecer cae por igual sobre todo; sin saturacion";

const MOJA =
  "EL MISMO moja de la referencia (joven de unos quince años, delgado, rostro serio y despierto, pelo negro liso y muy limpio hasta los hombros, manta de algodón crudo blanquísima y sin cenefas ceñida con un cordón, descalzo y con las plantas de los pies limpias y sin callos)";

export const ITEMS = armar([
  // b1 — Llegó de los Llanos siendo niño. Lo llamaron moja.
  escp("b1a", [ref("moja_muchacho"), ref("camino_carrera"), ref("familias_muiscas")], {
    comun: `Luz de camino. Llegó de los Llanos cuando todavía necesitaba alzar la cara para mirar a los adultos. Se cuenta a media distancia y de espaldas. Objeto ancla: la diferencia de alturas.`,
    camara: {
      a: "PLANO GENERAL a media distancia del camino, con un grupo de adultos llegando y una figura pequeña entre ellos, de espaldas.",
      b: "la cámara ha AVANZADO hasta media distancia y ha bajado a la altura de la cintura de los adultos: PLANO MEDIO en el que las mantas de los mayores ocupan el cuadro y la coronilla de él queda por debajo de todas.",
    },
    ini: "a lo lejos llega un grupo y entre ellos va alguien mucho más bajo.",
    fin: "a la altura de las cinturas de los adultos, su cabeza queda por debajo de todas las demás: es lo único que se ve de él.",
  }, "niño en primer plano llorando, rapto, cuerdas, violencia, aureola"),
  escp("b1b", [ref("moja_muchacho"), ref("santuario_moja"), ref("familias_muiscas")], {
    comun: `Luz del amanecer entrando por el vano. Lo llamaron moja y dijeron que podía hablar con el Sol. La decisión es de ellos y se ve en quién habla. Objeto ancla: las bocas de los mayores.`,
    camara: {
      a: "PLANO MEDIO de tres mayores hablando entre ellos, decidiendo, con la figura pequeña fuera de cuadro.",
      b: "la cámara ha hecho un PANEO LATERAL hasta él y ha retrocedido: PLANO MEDIO LARGO a media distancia con él sentado solo en una estera limpia y los tres mayores señalándolo desde el otro lado.",
    },
    ini: "los tres mayores hablan entre ellos y deciden algo.",
    fin: "a media distancia se ve a quién señalaban: él sentado solo en una estera limpia, sin haber dicho nada todavía.",
  }, "aureola, resplandor, vision, dios que señala, ceremonia con fuego"),

  // b2 — No lo dejaron caminar. Le lavaban el cabello.
  escp("b2a", [ref("moja_muchacho"), ref("familias_muiscas"), ref("santuario_moja")], {
    comun: `Luz de día. Desde ese día NO le permiten caminar: lo llevan sobre los hombros y lo bajan únicamente sobre mantas limpias. El cuidado y el encierro son la misma cosa. Objeto ancla: sus pies, que nunca tocan el suelo.`,
    camara: {
      a: "PLANO MACRO de sus pies descalzos colgando en el aire, con las plantas limpias y sin un callo, a la altura del hombro de alguien.",
      b: "la cámara ha RETROCEDIDO y ha bajado al suelo: PLANO MEDIO BAJO del piso de tierra con una manta blanca extendida justo debajo de esos pies, para que no toquen nada.",
    },
    ini: "los pies cuelgan en el aire, limpísimos y sin una marca de camino.",
    fin: "en el suelo, una manta blanca se ha extendido debajo de él antes de bajarlo: en toda la escena su pie no llega a tocar la tierra.",
  }, "cuerdas, ataduras, jaula, celda, llanto, violencia"),
  escp("b2b", [ref("moja_muchacho"), ref("familias_muiscas"), ref("vasija_gacha")], {
    comun: `Le dan buena comida, le lavan el cabello y escuchan cada sonido que sale de su boca. El privilegio y la prisión en el MISMO plano. Objeto ancla: las manos que lo cuidan.`,
    camara: {
      a: "PLANO MACRO de unas manos vertiendo agua sobre su cabello, lavándolo con cuidado.",
      b: "la cámara ha RETROCEDIDO y ha subido: PICADO del recinto con él sentado en el centro y seis personas alrededor —una lavando, otra con comida, otras tres escuchando— ninguna a más de dos pasos.",
    },
    ini: "unas manos le vierten agua en el pelo con cuidado.",
    fin: "desde arriba se ve el cerco: seis personas alrededor de él, ninguna a más de dos pasos, todas atendiéndolo y ninguna dejándole sitio para moverse.",
  }, "cadenas, jaula, celda, golpes, hambre, maltrato explicito"),

  // b3 — Creyó que era un honor. Nadie le preguntaba adónde quería ir.
  escp("b3a", [ref("moja_muchacho"), ref("santuario_moja"), ref("valle_iraca")], {
    comun: `Luz del vano. Al principio creyó que era un honor; después comprendió que NADIE le preguntaba adónde quería ir. Objeto ancla: el vano por el que se ve el afuera.`,
    camara: {
      a: "PLANO MEDIO de él sentado en la estera mirando hacia el vano abierto.",
      b: "la cámara ha girado y AVANZADO hasta el vano sin cruzarlo: PLANO GENERAL del valle visto desde dentro, enmarcado por el hueco de barro, con los caminos saliendo hacia todas partes.",
    },
    ini: "está sentado mirando hacia el vano abierto del santuario.",
    fin: "por el vano se ve el valle entero con sus caminos saliendo en todas direcciones, y el marco de barro recortándolo: se ve, pero desde dentro.",
  }, "cadenas, rejas, jaula, llanto, gritos, violencia"),
  escp("b3b", [ref("moja_muchacho"), ref("santuario_moja")], {
    comun: `Aprende los cantos del santuario: la voz empieza grave, sube hasta volverse delgada y luego encuentra una nota que hace callar a todos. Objeto ancla: su garganta y las caras que callan.`,
    camara: {
      a: "PLANO MACRO de su garganta y su mandíbula mientras canta, sin verle los ojos.",
      b: "la cámara ha RETROCEDIDO y ha girado hacia los que escuchan: PLANO MEDIO de cinco caras de mayores quedándose quietas a la vez, con la boca cerrada.",
    },
    ini: "la garganta vibra en una nota grave que va subiendo.",
    fin: "enfrente, las cinco caras se han quedado paradas a la vez, todas con la boca cerrada: la nota las hizo callar.",
  }, "aureola, resplandor, trance, magia, particulas, texto"),

  // b4 — Cantaba por los que llegaban con culpa. Le preguntaban.
  escp("b4a", [ref("moja_muchacho"), ref("familias_muiscas"), ref("santuario_moja")], {
    comun: `Luz del amanecer por el vano. Quienes llegan con culpa se sientan cerca, y él canta por ellos hacia el ORIENTE. Objeto ancla: el vano del oriente.`,
    camara: {
      a: "PLANO MEDIO de tres personas sentadas con la cabeza baja, esperando.",
      b: "la cámara ha girado y RETROCEDIDO hasta detrás de él: PLANO MEDIO desde su espalda con él cantando hacia el vano abierto y el amanecer entrando de frente.",
    },
    ini: "los tres esperan sentados con la cabeza baja.",
    fin: "desde su espalda se ve adónde canta: al vano abierto por donde entra el amanecer, no a la gente que tiene detrás.",
  }, "confesionario, cruces, sacerdote catolico, arrodillarse, aureola"),
  escp("b4b", [ref("familias_muiscas"), ref("moja_muchacho"), ref("santuario_moja")], {
    comun: `Le preguntan qué responde el Sol. La pregunta viene de ellos y se repite. Objeto ancla: las caras que esperan respuesta.`,
    camara: {
      a: "PLANO MEDIO CORTO de una cara preguntándole, inclinada hacia él.",
      b: "la cámara ha RETROCEDIDO y ha girado sobre sí misma: PLANO GENERAL del recinto con todas las caras vueltas hacia él a la vez, esperando.",
    },
    ini: "una cara se inclina hacia él y le pregunta.",
    fin: "dando la vuelta se ve que todas las caras del recinto están vueltas hacia él esperando lo mismo, y él todavía no ha dicho nada.",
  }, "aureola, trance, vision, resplandor, dios visible"),

  // b5 — Él miraba la luz sobre los cerros. Nunca oyó que pidiera una vida.
  esc("b5a", [ref("valle_iraca"), ref("sabana_cultivos")], {
    comun: "Luz de mañana sobre los cerros. Lo que él ve cuando mira: calor en los cultivos, sombras que cambian, pájaros despertando. Es el mundo, no una revelación. Objeto ancla: la luz trabajando sobre el valle.",
    camara: {
      a: "PLANO MACRO del aire temblando de calor sobre las hojas de un cultivo.",
      b: "la cámara ha RETROCEDIDO y ha subido: GRAN PLANO GENERAL del valle al amanecer con las sombras de los cerros acortándose y tres pájaros cruzando el cuadro.",
    },
    ini: "el aire tiembla de calor justo encima de las hojas.",
    fin: "desde arriba se ve el valle entero despertando: las sombras se acortan, los pájaros cruzan y la luz avanza. No hay nada más.",
  }, "sol con cara, rayos dibujados, dios en el cielo, voces, texto, aureola"),
  escp("b5b", [ref("moja_muchacho"), ref("santuario_moja")], {
    comun: `NUNCA oyó que el Sol pidiera una vida. Lo que hay es silencio, y el silencio se ve en su cara antes de hablar. Objeto ancla: su boca cerrada.`,
    camara: {
      a: "PLANO MEDIO de él de perfil contra el vano, escuchando el amanecer.",
      b: "la cámara ha RODEADO hasta ponerse frontal y se ha acercado: PLANO MEDIO CORTO de su cara con la boca cerrada y los ojos abiertos, sin nada que decir.",
    },
    ini: "escucha de perfil, con la cara vuelta al vano.",
    fin: "visto de frente tiene la boca cerrada y los ojos abiertos: no ha oído nada y no tiene qué contestar.",
  }, "trance, ojos en blanco, vision, resplandor, voces dibujadas, aureola"),

  // b6 — El silencio podía volverse peligroso. Sus piernas ya no eran de niño.
  escp("b6a", [ref("familias_muiscas"), ref("moja_muchacho"), ref("santuario_moja")], {
    comun: `Los mayores esperan palabras, y el silencio también puede convertirse en una respuesta peligrosa. El peligro está en ellos, no en el Sol. Objeto ancla: las caras que se cansan de esperar.`,
    camara: {
      a: "PLANO MEDIO de tres mayores esperando, con las caras todavía abiertas.",
      b: "la cámara ha RETROCEDIDO y ha girado: PLANO MEDIO de los mismos tres un rato después, ya hablando entre ellos en voz baja y sin mirarlo.",
    },
    ini: "los tres esperan con la cara abierta, atentos.",
    fin: "los mismos tres se han juntado a hablar bajo entre ellos y ninguno lo está mirando ya: el silencio empezó a decidirse por él.",
  }, "amenazas con armas, gritos, violencia, demonios, aureola"),
  escp("b6b", [ref("moja_muchacho"), ref("familias_muiscas"), ref("manta_vasijas")], {
    comun: `Una mañana nota que sus piernas ya no son las de un niño; los encargados también lo notan, hablan en voz baja y preparan mantas y vasijas. Objeto ancla: sus piernas y las vasijas que se preparan.`,
    camara: {
      a: "PLANO MACRO de sus espinillas y rodillas asomando por debajo de la manta, que se le ha quedado corta.",
      b: "la cámara ha RETROCEDIDO y ha girado hacia el otro lado del recinto: PLANO MEDIO de dos personas doblando mantas blancas y alineando tres vasijas pequeñas, sin mirarlo.",
    },
    ini: "las piernas asoman por debajo de la manta, que se le ha quedado corta.",
    fin: "al otro lado del recinto están doblando mantas y alineando tres vasijas vacías: la medida de sus piernas ya puso en marcha otra cosa.",
  }, "cuchillos, altar, armas, sangre, atar, amordazar, llanto"),

  // b7 — Entendió el final guardado en sus cuidados. Pidió cantar.
  escp("b7a", [ref("moja_muchacho"), ref("manta_vasijas"), ref("santuario_moja")], {
    comun: `${MOJA} entendiendo el final que habían guardado dentro de todos sus cuidados. Lo entiende mirando los preparativos, no porque se lo digan. Objeto ancla: su mirada y las vasijas.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara girándose hacia algo que está fuera de cuadro.",
      b: "la cámara ha girado y AVANZADO en la dirección de su mirada: PLANO MACRO de las tres vasijas pequeñas alineadas y vacías, con la boca hacia arriba, y la manta blanca doblada al lado.",
    },
    ini: "gira la cara hacia algo que todavía no vemos.",
    fin: "lo que miraba son tres vasijas vacías alineadas y una manta doblada en un cuadrado perfecto: todo lo que lo cuidaba estaba preparando esto.",
  }, "cuchillo, altar, sangre, armas, forcejeo, llanto teatral"),
  escp("b7b", [ref("moja_muchacho"), ref("familias_muiscas"), ref("santuario_moja")], {
    comun: `Pide cantar una última vez. Es lo único que pide y lo pide él. Objeto ancla: su voz pidiendo.`,
    camara: {
      a: "PLANO MEDIO de él de pie en el centro del recinto, hablando por primera vez en mucho rato.",
      b: "la cámara ha RETROCEDIDO y ha subido: PICADO del recinto con todos los mayores quietos alrededor, escuchando una petición que no esperaban.",
    },
    ini: "está de pie en el centro y empieza a hablar.",
    fin: "desde arriba, los mayores se han quedado quietos alrededor de él: es la primera vez que pide algo y nadie lo interrumpe.",
  }, "suplica, llanto, arrodillarse, forcejeo, atar, gritos"),

  // b8 — Lo llevaron a un cerro. No cantó para borrar culpas ajenas.
  escp("b8a", [ref("moja_muchacho"), ref("loma_pelada_noche"), ref("familias_muiscas")], {
    comun: `Antes del alba, frío en el cerro. La tierra está fría bajo la manta y abajo las viviendas parecen pequeñas semillas oscuras. Se cuenta a media distancia y de espaldas. Objeto ancla: el valle allá abajo.`,
    camara: {
      a: "PLANO MACRO de la hierba escarchada del cerro con el borde de la manta blanca encima.",
      b: "la cámara ha RETROCEDIDO y ha subido: GRAN PLANO GENERAL desde el cerro con las figuras pequeñas y de espaldas en el filo y, muy abajo, las viviendas como semillas oscuras en el valle.",
    },
    ini: "la escarcha cruje bajo el borde de la manta blanca.",
    fin: "desde arriba se ve el cerro entero con el grupo pequeño en el filo, de espaldas, y abajo el valle con las casas convertidas en puntos oscuros.",
  }, "altar de sacrificio, cuchillos, piramide, fuego ritual, sangre, atar"),
  escp("b8b", [ref("moja_muchacho"), ref("loma_pelada_noche")], {
    comun: `NO canta para borrar culpas ajenas: canta SU camino desde los Llanos, los brazos que lo cargaron y los pasos que no pudo dar. El canto es suyo. Objeto ancla: sus pies sobre la tierra.`,
    camara: {
      a: "PLANO MEDIO de él empezando a cantar de espaldas, a media distancia, con el valle delante.",
      b: "la cámara ha DESCENDIDO hasta el suelo, detrás de él: PLANO MACRO de sus plantas limpias apoyadas por fin en la tierra fría del cerro, sin manta debajo.",
    },
    ini: "empieza a cantar de espaldas, con el valle delante.",
    fin: "sus pies están apoyados directamente en la tierra, sin ninguna manta debajo: es la primera vez en todo el video que tocan el suelo.",
  }, "cuchillos, sangre, altar, sacerdotes con armas, llanto, forcejeo"),

  // b9 — Cantó el miedo. «¿Por qué nadie escucha lo que digo?» (CITA)
  escp("b9a", [ref("moja_muchacho"), ref("loma_pelada_noche")], {
    comun: `Canta el miedo SIN ESCONDERLO. No es una plegaria serena: es miedo dicho en voz alta. Objeto ancla: su garganta.`,
    camara: {
      a: "PLANO MACRO de su garganta y su mandíbula cantando, tensas.",
      b: "la cámara ha RETROCEDIDO y ha subido hasta un PLANO GENERAL en contrapicado con él pequeño en el filo del cerro y el cielo de antes del alba ocupando casi todo el cuadro.",
    },
    ini: "la garganta está tensa y la nota sale forzada, no serena.",
    fin: "desde lejos se le ve chiquito en el filo del cerro bajo un cielo enorme, cantando hacia el oriente sin que nada le conteste.",
  }, "aureola, resplandor, trance, angeles, voces dibujadas"),
  escp("b9b", [ref("moja_muchacho"), ref("familias_muiscas"), ref("loma_pelada_noche")], {
    comun: `La pregunta que deja suspendida sobre la montaña: si su voz es sagrada, por qué nadie escucha lo que dice. NINGUNA PERSONA RESPONDE. Objeto ancla: las caras de los que no contestan.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara terminando la pregunta, vuelta hacia ellos por primera vez.",
      b: "la cámara ha girado ciento ochenta grados: PLANO MEDIO LARGO de las caras de los sacerdotes y los caciques, todas mirando al suelo o al horizonte, ninguna contestando.",
    },
    ini: "termina la pregunta con la cara vuelta hacia ellos.",
    fin: "enfrente, todas las caras están mirando al suelo o al horizonte y ninguna le contesta ni le sostiene la mirada.",
  }, "respuesta divina, voz del cielo, texto, aureola, llanto colectivo"),

  // b10 — El Sol iluminó a todos por igual.
  esc("b10a", [ref("loma_pelada_noche"), ref("valle_iraca")], {
    comun: "El Sol apareciendo por el oriente. Es un amanecer normal: NO señala a nadie. Objeto ancla: el borde del sol.",
    camara: {
      a: "PLANO MACRO del primer borde del sol asomando por el filo de los cerros, sin nada delante.",
      b: "la cámara ha RETROCEDIDO y ha subido: GRAN PLANO GENERAL del amanecer sobre el valle, con la luz repartiéndose pareja sobre los cerros, los cultivos y las casas.",
    },
    ini: "el primer borde del sol asoma por el filo, solo.",
    fin: "desde arriba la luz baja sobre el valle entero a la vez, pareja, sin detenerse en ningún punto.",
  }, "sol con cara, rayos dibujados, haz de luz, aureola, dios visible"),
  escp("b10b", [ref("moja_muchacho"), ref("familias_muiscas"), ref("loma_pelada_noche")], {
    comun: `La misma luz cae sobre el muchacho, los sacerdotes, los caciques y los que subieron a mirar. NINGUNA imagen puede iluminarlo a él de manera especial: la luz es exactamente igual en todas las caras. Objeto ancla: la luz repartida.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara recibiendo la primera luz.",
      b: "la cámara ha RETROCEDIDO y ha hecho un PANEO LATERAL por todo el grupo: PLANO GENERAL con veinte personas en el filo del cerro, todas con la misma luz naranja en la misma mitad de la cara.",
    },
    ini: "la primera luz le da en la cara igual que a cualquiera.",
    fin: "recorrido el grupo, las veinte caras tienen exactamente la misma luz en el mismo lado: no hay ninguna más iluminada que las demás.",
  }, "haz de luz sobre el, aureola, resplandor, señalar, dios, rayos"),

  // b11 — No señaló víctima ni culpable. El viento se llevó la nota.
  esc("b11a", [ref("loma_pelada_noche"), ref("valle_iraca"), ref("familias_muiscas")], {
    comun: "Luz del amanecer ya entera. NO señaló a una víctima ni escogió a un culpable. Se dice con las sombras: todas iguales y en la misma dirección. Objeto ancla: las sombras.",
    camara: {
      a: "PLANO MACRO de una sombra larga sobre la hierba escarchada, una entre muchas.",
      b: "la cámara se ha ELEVADO hasta un PICADO ALTO sobre el cerro: veinte sombras largas y paralelas sobre la ladera, todas del mismo largo y hacia el mismo lado.",
    },
    ini: "una sombra larga sobre la escarcha, igual que cualquier otra.",
    fin: "desde arriba, las veinte sombras del grupo caen paralelas y del mismo largo sobre la ladera: ninguna se distingue de las demás.",
  }, "haz de luz, rayo, señalar, dios, aureola, texto"),
  esc("b11b", [ref("loma_pelada_noche"), ref("altiplano_noche")], {
    comun: "Cuando el canto termina, el viento baja por el cerro y se lleva la última nota. Objeto ancla: el viento en la hierba.",
    camara: {
      a: "PLANO MACRO de la hierba escarchada empezando a doblarse con una racha que llega de arriba.",
      b: "la cámara ha ACOMPAÑADO a la racha ladera abajo y ha subido: GRAN PLANO GENERAL del cerro entero con la oleada de viento bajando por la ladera hacia el valle.",
    },
    ini: "la hierba empieza a doblarse con la racha que baja.",
    fin: "desde lejos se ve la oleada de viento recorriendo la ladera entera de arriba abajo y perdiéndose en el valle.",
  }, "personas, sacrificio, cuerpo, sangre, espiritus, aureola"),

  // b12 — La manta doblada y las vasijas en orden. La nota sigue.
  esc("b12a", [ref("manta_vasijas"), ref("loma_pelada_noche")], {
    comun: "Luz de mañana en el cerro vacío. Lo que quedó: LA MISMA manta de la referencia doblada con cuidado en un cuadrado perfecto sobre la hierba escarchada, y tres vasijas pequeñas alineadas y vacías con la boca hacia arriba. NO se muestra nada más: ni cuerpo, ni sangre, ni señales. Objeto ancla: la manta doblada.",
    camara: {
      a: "PLANO MACRO del pliegue perfecto de la manta blanca sobre la hierba con escarcha.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del cerro vacío con la manta y las tres vasijas juntas en el centro y nadie alrededor en toda la ladera.",
    },
    ini: "el pliegue de la manta está perfecto, con la escarcha alrededor.",
    fin: "desde lejos, en el cerro no queda nadie: sólo la manta doblada y las tres vasijas vacías en el centro de una ladera entera.",
  }, "cuerpo, sangre, cuchillo, tumba, huesos, personas, aureola"),
  esc("b12b", [ref("loma_pelada_noche"), ref("valle_iraca"), ref("altiplano_noche")], {
    comun: "Sobre la niebla del alba, hacia el ORIENTE, sigue flotando una nota delgada, como si la voz todavía esperara que alguien la escuchara hasta el final. El final NO se cierra. Objeto ancla: la niebla hacia el oriente.",
    camara: {
      a: "PLANO MEDIO de la niebla del alba deslizándose sobre la ladera, con la manta doblada pequeña en el borde del cuadro.",
      b: "la cámara ha AVANZADO sobre la niebla hacia el oriente y ha subido: GRAN PLANO GENERAL final con el valle entero debajo, la niebla extendiéndose hacia el este y el cielo abierto delante, sin nada que lo cierre.",
    },
    ini: "la niebla se desliza sobre la ladera y la manta queda atrás, en el borde.",
    fin: "avanzando sobre la niebla hacia el oriente, el cuadro termina en un valle abierto y un cielo sin nada al fondo: no hay figura, ni señal, ni respuesta.",
  }, "personas, fantasma, aureola, figura en el cielo, texto, simbolos"),
]);
