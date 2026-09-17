// Keyframes de Nencatacoa — 12 bloques × 2 escenas × 2 cuadros = 48 imágenes ≈ 120 s.
// Guion: guion-nencatacoa-v2.json (N=12) · Acta: acta-nencatacoa.json (22 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _muisca-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · Nencatacoa NO HACE LA FUERZA. Lo dice él mismo: las manos son de ustedes,
//   yo pongo el paso. El madero se mueve porque cantan y tiran juntos, no por
//   magia. NINGUNA imagen puede mostrarlo empujando ni tocando el tronco.
// · NO PIDE OFRENDA: esa noche no hubo ofrenda y le bastaba hartarse de
//   chicha con la gente. Bebe de la MISMA vasija, no de una aparte.
// · La manta es su rasgo, no un disfraz: le cubre lomo y cabeza y deja fuera
//   la cola. Al final la deja colgada de una horqueta, seca, como si siguiera
//   dentro. Esa imagen es el cierre y no se cambia.
// · La fuente NO DECIDE si es oso o zorra: unos dicen una cosa y otros la
//   otra, y las dos versiones quedan en pie. NO resolverlo en imagen.
// · La fiesta NO interrumpe el trabajo: lo desatasca. Primero se mueve el
//   madero, después se baila. El orden importa y el guion lo respeta.
//
// GUION DE LUZ: bosque de la mañana → cuesta con las cuerdas → tarde parada
// del atasco → borde del bosque → paso del oso → canto y barro que suelta →
// noche de la misma vasija → pinceles y telares → hoguera y viento → zorra en
// la trocha → vasijas secas antes del alba → manta en la horqueta.

import { DIRECCION, AVOID_BASE, ref, esc, escp, armar } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-nencatacoa-escenas";
export const OUT_DIR = "muiscas/videos/nencatacoa/keyframes";
export { DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; el oso empujando, cargando o tocando el madero; magia visible, resplandor, particulas, levitacion del tronco; ofrendas al oso, altar, adoracion, arrodillarse; oso feroz, garras, colmillos, ataque, sangre; disfraz humano evidente, cremallera, persona dentro del oso; borrachera degradante, vomito, cuerpos tirados, peleas";
export const PALETTE =
  "pardo oscuro de pelaje y de madera, ocre de barro y de vasija, crema de algodon crudo, verde apagado de bosque y de pasto, naranja de hoguera; los colores de los pintores solo en las mantas nuevas; sin saturacion";

const OSO =
  "EL MISMO Nencatacoa de la referencia (un OSO de papel de tamaño mediano, pelaje pardo oscuro de mechones recortados, de pie sobre las patas traseras, con una manta de algodón crudo salpicada de espuma de chicha echada como capucha que le cubre el lomo y la cabeza, de modo que sólo se le ven el hocico y la COLA, que queda fuera)";

export const ITEMS = armar([
  // b1 — Los maderos no se cargaban: se arrastraban. Treinta manos.
  escp("b1a", [ref("madero_atascado"), ref("familias_muiscas"), ref("sendero_territorio")], {
    comun: "Luz de mañana en el monte. Para levantar un bohío grande antes de las lluvias el trabajo empieza lejos, en el bosque: los maderos más gruesos NO se cargan, se arrastran. Objeto ancla: las cuerdas de fique.",
    camara: {
      a: "PLANO MACRO de una cuerda gruesa de fique tensándose alrededor del tronco, con las fibras chirriando.",
      b: "la cámara ha RETROCEDIDO a lo largo de la cuerda y ha subido: PLANO GENERAL con veinte o treinta personas en fila tirando de dos cuerdas y el tronco avanzando detrás de ellas.",
    },
    ini: "la cuerda se tensa alrededor de la madera y las fibras crujen.",
    fin: "desde lejos se ve de dónde viene esa tensión: treinta personas en fila tirando a la vez de dos cuerdas, con el tronco arrastrándose detrás.",
  }, "grua, poleas modernas, animales de tiro, magia, levitacion"),
  escp("b1b", [ref("familias_muiscas"), ref("madero_atascado")], {
    comun: "Veinte o treinta manos tiran de las cuerdas mientras otros CANTAN para que el tirón llegue parejo. El canto es una herramienta de trabajo. Objeto ancla: las bocas que cantan y las manos que tiran.",
    camara: {
      a: "PLANO MEDIO CORTO de tres bocas abiertas cantando a la vez, marcando el tiempo.",
      b: "la cámara ha hecho un PANEO LATERAL por toda la fila hasta el tronco: PLANO MEDIO con las manos agarradas a la cuerda tirando todas en el mismo instante del canto.",
    },
    ini: "tres bocas cantan marcando el mismo tiempo.",
    fin: "al final de la fila, todas las manos dan el tirón en el mismo golpe de voz: el canto es lo que las sincroniza.",
  }, "musica moderna, instrumentos europeos, capataz, latigos, esclavitud"),

  // b2 — La chicha viajaba con la cuadrilla. El madero se atascó.
  esc("b2a", [ref("vasija_gacha"), ref("sendero_territorio")], {
    comun: "Luz de media mañana. La chicha viaja con la cuadrilla en vasijas de barro, y quien empuja la cuesta arriba toma primero. Objeto ancla: la vasija que pasa de mano en mano.",
    camara: {
      a: "PLANO MACRO del borde de una vasija de barro inclinándose hacia una boca.",
      b: "la cámara ha RETROCEDIDO siguiendo la vasija de mano en mano por la fila: PLANO MEDIO LARGO con la vasija ya cuatro puestos más allá y todos tirando entre trago y trago.",
    },
    ini: "el borde de barro se inclina hacia una boca y no se ve nada más.",
    fin: "la vasija ha ido pasando por cuatro manos distintas de la cuadrilla, que sigue tirando de la cuerda entre trago y trago.",
  }, "borrachera degradante, vomito, cuerpos tirados, botellas, alcohol moderno"),
  esc("b2b", [ref("madero_atascado"), ref("familias_muiscas")], {
    comun: "Tarde, con el sol bajando. El madero se atasca y la cuadrilla se sienta en la hierba. Objeto ancla: el extremo hundido en el barro.",
    camara: {
      a: "PLANO MACRO del extremo del tronco hundido en el barro ocre, con las cuerdas tensas sin resultado.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del claro con la cuadrilla entera sentada en la hierba, las cuerdas caídas y el tronco quieto donde estaba.",
    },
    ini: "las cuerdas están tensas y el extremo sigue hundido en el barro.",
    fin: "desde lejos, las cuerdas han quedado caídas en el suelo, todos están sentados en la hierba y el tronco no se ha movido un palmo.",
  }, "accidente, heridos, sangre, peleas, capataz, latigos"),

  // b3 — «Hora de llamar a Nencatacoa». Del bosque salió un oso.
  escp("b3a", [ref("familias_muiscas"), ref("madero_atascado")], {
    comun: `Un tejedor diciendo que es hora de llamar a Nencatacoa, porque ese palo no se mueve con gritos. Objeto ancla: su cara diciéndolo.`,
    camara: {
      a: "PLANO MEDIO de la cuadrilla sentada, cansada, mirando el tronco.",
      b: "la cámara ha AVANZADO hasta uno de ellos: PLANO MEDIO CORTO del tejedor hablando, con los demás girando la cabeza hacia él.",
    },
    ini: "todos están sentados mirando el tronco sin decir nada.",
    fin: "uno de ellos ha hablado y las cabezas se han girado hacia él: no propone tirar más fuerte.",
  }, "invocacion magica, conjuro, humo, circulos, aureola, trance"),
  esc("b3b", [ref("nencatacoa_oso"), ref("sendero_territorio")], {
    comun: `Del borde del bosque sale CAMINANDO ${OSO}. No aparece por arte de magia: sale andando. Objeto ancla: el borde del bosque.`,
    camara: {
      a: "PLANO GENERAL del borde del bosque en penumbra, con la maleza quieta y nada dentro.",
      b: "la cámara ha AVANZADO hasta el borde mismo: PLANO MEDIO del oso saliendo de entre los troncos sobre las patas traseras, con la manta como capucha y la cola por fuera.",
    },
    ini: "en el borde del bosque no hay nada y la maleza está quieta.",
    fin: "de cerca ha salido andando de entre los troncos: un oso de pie con la manta cubriéndole lomo y cabeza y la cola moviéndose fuera de ella.",
  }, "aparicion magica, resplandor, humo, rayos, oso feroz, garras, ataque"),

  // b4 — Lo conocieron por la manta. Se paró frente al madero.
  esc("b4a", [ref("nencatacoa_oso")], {
    comun: `Lo conocen por LA MANTA: le cubre el lomo y la cabeza, y sólo le queda por fuera la COLA, que va y viene con el paso. Objeto ancla: la cola.`,
    camara: {
      a: "PLANO MACRO de la manta echada como capucha, con las salpicaduras de espuma de chicha secas en el tejido.",
      b: "la cámara ha hecho un PANEO LATERAL a lo largo del lomo hasta el final: PLANO MEDIO de la cola parda saliendo por debajo del borde de la manta y balanceándose con el paso.",
    },
    ini: "la manta le cubre la cabeza y se le ven las manchas secas de chicha.",
    fin: "al final del lomo, por debajo del borde de la manta, sale la cola y se mueve de un lado a otro con cada paso.",
  }, "disfraz evidente, persona dentro, cremallera, mascara, garras, colmillos"),
  esc("b4b", [ref("nencatacoa_oso"), ref("madero_atascado")], {
    comun: `No dice nada: se acerca al madero, LE DA LA VUELTA y se para AL FRENTE, como quien espera que empiece la música. NO lo toca. Objeto ancla: el sitio donde se coloca.`,
    camara: {
      a: "PLANO MEDIO lateral del oso rodeando el tronco, sin tocarlo.",
      b: "la cámara ha RODEADO con él hasta el otro extremo y ha retrocedido: PLANO GENERAL con el oso parado delante del madero, de espaldas a él y de cara a la cuadrilla, esperando.",
    },
    ini: "camina alrededor del tronco, mirándolo, sin ponerle una pata encima.",
    fin: "se ha parado al frente del madero, de espaldas a la madera y de cara a la gente, esperando a que empiecen ellos.",
  }, "el oso empujando, cargando o tocando el madero, magia, resplandor"),

  // b5 — «Canten; las manos son de ustedes, yo pongo el paso». (CITA)
  esc("b5a", [ref("nencatacoa_oso"), ref("familias_muiscas")], {
    comun: `No dice nada hasta que está listo, y entonces dice que canten: LAS MANOS SON DE ELLOS, él pone el paso. Ahí declara que la fuerza no es suya. Objeto ancla: el hocico.`,
    camara: {
      a: "PLANO MACRO del hocico asomando por debajo de la capucha, abriéndose para hablar.",
      b: "la cámara ha RETROCEDIDO y ha girado hacia la cuadrilla: PLANO MEDIO de las caras de ellos oyéndolo, incorporándose de la hierba.",
    },
    ini: "el hocico asoma bajo la manta y se abre.",
    fin: "enfrente, la cuadrilla se está levantando de la hierba y volviendo a las cuerdas: lo que les pidió es que trabajen ellos.",
  }, "aureola, resplandor, voz atronadora, rayos, arrodillarse, adoracion"),
  escp("b5b", [ref("familias_muiscas"), ref("madero_atascado")], {
    comun: `La cuadrilla volviendo a las cuerdas. Las manos son suyas y eso se ve. Objeto ancla: las manos en la cuerda.`,
    camara: {
      a: "PLANO MACRO de una mano cerrándose otra vez sobre la cuerda de fique, con la palma ya marcada.",
      b: "la cámara ha RETROCEDIDO a lo largo de la cuerda: PLANO GENERAL con las treinta personas otra vez en pie y agarradas, y el oso pequeño al fondo, sin cuerda en las patas.",
    },
    ini: "una mano se cierra sobre la cuerda y la palma ya está marcada del día entero.",
    fin: "desde lejos están los treinta en pie y agarrados a las dos cuerdas, y el oso está al fondo sin tocar ninguna.",
  }, "el oso tirando de la cuerda, magia, resplandor, capataz"),

  // b6 — Cantaron. El madero se despegó del barro.
  esc("b6a", [ref("nencatacoa_oso"), ref("familias_muiscas")], {
    comun: `Cantan y el oso camina PESADO Y SUELTO de un lado a otro; la cuadrilla se ríe por primera vez en todo el día. Objeto ancla: el paso del oso.`,
    camara: {
      a: "PLANO MEDIO BAJO de las patas traseras del oso marcando el paso sobre la hierba, pesadas y sueltas.",
      b: "la cámara ha SUBIDO y ha girado hacia la fila: PLANO MEDIO LARGO de las caras de la cuadrilla riéndose mientras tiran, con el oso desenfocado delante.",
    },
    ini: "las patas marcan el paso sobre la hierba, una y otra.",
    fin: "en la fila, media docena de caras se están riendo por primera vez en todo el día, sin dejar de tirar.",
  }, "magia, resplandor, particulas, levitacion, el oso empujando"),
  esc("b6b", [ref("madero_atascado"), ref("familias_muiscas")], {
    comun: "El madero, que pesa como pesan las cosas que salen del monte, se asienta, SE DESPEGA DEL BARRO y avanza. Se mueve por las cuerdas, no por magia. Objeto ancla: el extremo saliendo del barro.",
    camara: {
      a: "PLANO MACRO del extremo hundido, con el barro empezando a ceder y a soltar la madera.",
      b: "la cámara ha RETROCEDIDO a lo largo del surco y ha subido: PLANO GENERAL con el tronco ya fuera del hoyo y avanzando por el camino, y el surco fresco quedando detrás.",
    },
    ini: "el barro empieza a ceder alrededor del extremo hundido.",
    fin: "desde lejos, el tronco está fuera del hoyo y avanza por el camino con las treinta personas tirando delante y un surco nuevo detrás.",
  }, "levitacion, resplandor, explosion, magia, el oso cargando el tronco"),

  // b7 — No hubo ofrenda. Bebió en la misma vasija.
  escp("b7a", [ref("nencatacoa_oso"), ref("familias_muiscas"), ref("vasija_gacha")], {
    comun: `Noche. Esa noche NO HUBO OFRENDA: no las pedía, le bastaba hartarse de chicha con la gente. Toma de la MISMA vasija que todos. Objeto ancla: la vasija compartida.`,
    camara: {
      a: "PLANO MACRO del borde de la vasija de barro con el hocico del oso inclinándose sobre él.",
      b: "la cámara ha RETROCEDIDO y ha girado siguiendo la vasija: PLANO MEDIO con la misma vasija pasando de las patas del oso a las manos de un hombre, que toma a continuación.",
    },
    ini: "el hocico se inclina sobre el borde de la vasija de todos.",
    fin: "la misma vasija ha pasado de sus patas a las manos de un hombre, que toma del mismo borde: no hay ninguna vasija aparte.",
  }, "altar, ofrendas, arrodillarse, adoracion, vasija especial, aureola"),
  esc("b7b", [ref("nencatacoa_oso"), ref("plaza_fiesta_noche")], {
    comun: `La manta salpicada de espuma y la COLA golpeando el suelo al ritmo de los cantos. Objeto ancla: la cola contra el suelo.`,
    camara: {
      a: "PLANO MACRO de la cola parda golpeando la tierra apisonada, marcando el ritmo.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del patio con el oso sentado entre la gente y todos siguiendo ese mismo ritmo con las palmas.",
    },
    ini: "la cola golpea la tierra marcando un compás.",
    fin: "desde lejos, el patio entero está siguiendo ese compás con las palmas y el oso está sentado en medio, uno más.",
  }, "adoracion, altar, ofrendas, aureola, danza frenetica, borrachera degradante"),

  // b8 — Los pintores pintaron mantas. El oso bailó con todos.
  escp("b8a", [ref("familias_muiscas"), ref("manta_reparto"), ref("telar_marco")], {
    comun: "Noche de fogón. Los pintores mojan los pinceles y pintan mantas nuevas, y los tejedores sueltan el hilo. Los colores de las mantas nuevas son lo único vivo del video. Objeto ancla: el pincel sobre el algodón.",
    camara: {
      a: "PLANO MACRO de un pincel de fibra dejando una línea de pigmento sobre el algodón crudo.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del patio con cuatro mantas nuevas extendidas a la vez y gente pintando en todas.",
    },
    ini: "el pincel deja una sola línea de color sobre la tela cruda.",
    fin: "desde arriba hay cuatro mantas nuevas extendidas por el patio y gente pintando en todas a la vez, con los pigmentos en cuencos.",
  }, "pinturas modernas, lienzos, caballetes, oro, aureola"),
  esc("b8b", [ref("nencatacoa_oso"), ref("familias_muiscas"), ref("plaza_fiesta_noche")], {
    comun: `El oso baila con todos: primero con las manos del telar y después con las manos del barro, hasta que encienden la hoguera en mitad del patio. Objeto ancla: con quién baila.`,
    camara: {
      a: "PLANO MEDIO del oso girando con dos tejedoras, con las manos marcadas por el hilo.",
      b: "la cámara ha hecho un GIRO por el patio hasta el otro grupo: PLANO MEDIO del mismo oso girando ahora con dos alfareros de manos manchadas de barro, y la hoguera encendiéndose al fondo.",
    },
    ini: "gira con dos tejedoras, cuyas manos tienen las marcas del hilo.",
    fin: "al otro lado del patio gira con dos alfareros de manos embarradas, y detrás acaban de prender la hoguera del centro.",
  }, "danza frenetica, trance, borrachera degradante, vomito, peleas"),

  // b9 — El viento movió las llamas. Algunos decían que era zorra.
  esc("b9a", [ref("plaza_fiesta_noche"), ref("nencatacoa_oso"), ref("altiplano_noche")], {
    comun: "Noche. Cuando el viento mueve las llamas, la cuadrilla sabe que Nencatacoa sigue bailando con ellos, y nadie quiere dormir. Objeto ancla: las llamas movidas por el viento.",
    camara: {
      a: "PLANO MACRO de las llamas de la hoguera doblándose de golpe con una racha.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL nocturno del patio con la gente despierta alrededor del fuego y ninguna estera ocupada.",
    },
    ini: "las llamas se doblan de golpe con una racha de viento.",
    fin: "desde arriba, el patio entero sigue despierto alrededor del fuego y no hay ni una estera con nadie tumbado.",
  }, "espiritus dibujados, fantasmas, caras en el fuego, aureola, magia"),
  esc("b9b", [ref("nencatacoa_oso"), ref("familias_muiscas")], {
    comun: `Algunos decían que NO era oso: que a veces se aparecía como zorra, y por eso lo llamaban Fo. La fuente NO decide, y la imagen tampoco: se muestra la discusión, no la respuesta. Objeto ancla: los dos que discuten.`,
    camara: {
      a: "PLANO MEDIO CORTO de dos hombres discutiendo junto al fuego, uno dibujando una silueta ancha con las manos y el otro una estrecha.",
      b: "la cámara ha hecho un PANEO LATERAL hasta el oso y se ha acercado: PLANO MEDIO del oso sentado con la manta puesta, en el que NO se distingue si debajo hay un oso o una zorra.",
    },
    ini: "uno dibuja en el aire una silueta ancha y el otro una estrecha, discutiendo.",
    fin: "al otro lado del fuego, bajo la manta echada como capucha, sólo se ven el hocico y la cola: no se puede saber cuál de los dos tiene razón.",
  }, "transformacion visible, dos criaturas a la vez, magia, resplandor"),

  // b10 — En figura de zorra corría adelante. La manta no se la quitaba.
  esc("b10a", [ref("nencatacoa_oso"), ref("madero_atascado"), ref("sendero_territorio")], {
    comun: `LA VERSIÓN DE LA ZORRA: en esa figura era más liviano y corría ADELANTE de la fila, marcando el camino de los maderos. Se cuenta sin enseñarla entera. Objeto ancla: las huellas que van delante.`,
    camara: {
      a: "PLANO MACRO de unas huellas pequeñas y ligeras en el barro del camino, delante del surco del tronco.",
      b: "la cámara ha SEGUIDO esas huellas camino adelante y ha subido: PLANO GENERAL del sendero con la fila y el madero atrás y, mucho más adelante, una silueta baja y rápida con una manta encima.",
    },
    ini: "en el barro hay huellas pequeñas y ligeras por delante del surco del tronco.",
    fin: "muy por delante de la fila corre una silueta baja y rápida con la manta encima, marcando el camino; no se le ve la forma.",
  }, "zorra en primer plano, transformacion visible, magia, resplandor"),
  esc("b10b", [ref("nencatacoa_oso")], {
    comun: `LA OTRA VERSIÓN: otros decían que era lo mismo con distinta piel, y que LA MANTA NO SE LA QUITABA NUNCA. Las dos versiones quedan en pie. Objeto ancla: la manta que nunca se quita.`,
    camara: {
      a: "PLANO MACRO del borde de la manta pegado al pelaje, sin que se vea dónde acaba una cosa y empieza la otra.",
      b: "la cámara ha RETROCEDIDO y ha rodeado la figura entera: PLANO MEDIO en el que se ve el bulto completo con la manta puesta y, otra vez, sólo el hocico y la cola por fuera.",
    },
    ini: "el borde de la manta y el pelaje se confunden y no se sabe dónde acaba cada uno.",
    fin: "dando la vuelta entera al bulto, la manta sigue puesta por todos lados: sólo el hocico y la cola quedan fuera, y nada más se deja ver.",
  }, "quitarse la manta, revelacion, cara humana, disfraz, magia"),

  // b11 — Vasijas secas. El oso se levantó y entró al bosque.
  esc("b11a", [ref("vasija_gacha"), ref("plaza_fiesta_noche"), ref("familias_muiscas")], {
    comun: "Antes del amanecer. Las vasijas quedan secas y los músicos duermen contra los maderos. Objeto ancla: las vasijas volcadas.",
    camara: {
      a: "PLANO MACRO del fondo de una vasija volcada, seco y con el poso pegado.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del patio al alba con las vasijas tiradas, los músicos dormidos apoyados contra los maderos y la hoguera en brasas.",
    },
    ini: "el fondo de la vasija está seco, con el poso pegado al barro.",
    fin: "desde arriba, el patio está en calma: las vasijas volcadas, los músicos dormidos contra los troncos y la hoguera reducida a brasas.",
  }, "vomito, cuerpos tirados, degradacion, peleas, basura"),
  esc("b11b", [ref("nencatacoa_oso"), ref("sendero_territorio"), ref("plaza_fiesta_noche")], {
    comun: `El oso se levanta y NO SE DESPIDE: cruza el patio con la cola por fuera y entra al bosque por la trocha de los animales. Objeto ancla: la trocha.`,
    camara: {
      a: "PLANO MEDIO BAJO de sus patas cruzando el patio entre los durmientes, sin despertar a nadie.",
      b: "la cámara se ha QUEDADO en el patio y ha subido: PLANO GENERAL con él ya en el borde del bosque, de espaldas, entrando por una trocha estrecha de animales.",
    },
    ini: "las patas cruzan el patio pasando entre los que duermen.",
    fin: "desde el patio se le ve entrar al bosque de espaldas por una trocha estrecha, sin girarse y sin decir nada.",
  }, "despedida, abrazos, aclamacion, aureola, desaparicion magica"),

  // b12 — Dejó la manta colgada, como si siguiera dentro.
  esc("b12a", [ref("manta_horqueta"), ref("sendero_territorio")], {
    comun: `Primera luz en el borde del bosque. Dejó LA MISMA manta de la referencia colgada de una horqueta, seca y salpicada de manchas de chicha, conservando EL VOLUMEN de unos hombros y una cabeza, como si todavía hubiera alguien dentro. Objeto ancla: la manta con volumen.`,
    camara: {
      a: "PLANO MACRO del tejido de la manta con las manchas secas de chicha y el bulto que hace en el hombro.",
      b: "la cámara ha RETROCEDIDO y ha bajado: PLANO MEDIO de la manta entera colgando de la horqueta, con el bosque en penumbra detrás y el volumen de unos hombros y una cabeza todavía dentro.",
    },
    ini: "el tejido conserva el bulto de un hombro, con las manchas secas encima.",
    fin: "desde más lejos, la manta cuelga de la horqueta con la forma de unos hombros y una cabeza dentro, pero no hay nadie: está vacía y se sostiene sola.",
  }, "persona dentro, cara, ojos, fantasma, resplandor, aureola"),
  esc("b12b", [ref("manta_horqueta"), ref("sendero_territorio"), ref("poblado_nuevo")], {
    comun: "Luz de mañana. Hay quien jura que una cola asoma todavía. La fuente lo deja en «hay quien jura», y la imagen también: no confirma. Objeto ancla: el borde inferior de la manta.",
    camara: {
      a: "PLANO MACRO del borde inferior de la manta colgada, con algo pardo asomando que puede ser una sombra o puede ser pelo.",
      b: "la cámara ha RETROCEDIDO y ha subido hasta un GRAN PLANO GENERAL final con el bohío nuevo ya levantado en el valle, la cuadrilla trabajando en él y la manta pequeñísima colgada en el borde del bosque, al fondo.",
    },
    ini: "por debajo del borde asoma algo pardo que no se sabe si es sombra o es pelo.",
    fin: "desde muy lejos, el bohío está levantado y la cuadrilla trabaja en él; la manta es un punto claro colgado en el borde del bosque y ya no se puede saber qué hay debajo.",
  }, "cola evidente, animal visible, fantasma, aureola, texto, personas"),
]);
