// Keyframes de El viaje a Jepira — 18 bloques × 2 escenas × 2 cuadros
// = 72 imágenes ≈ 180 s.
// Guion: guion-el-viaje-del-mas-alla-v2.json (N=18) · Acta: acta-el-viaje-del-mas-alla.json (36 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _wayuu-comun.mjs).
// ÚLTIMO de los 27 specs wayúu.
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · ELLA NO LO ENGAÑA NI LO ARRASTRA: viene POR PIEDAD, le advierte que es una
//   sombra, y aun así lo lleva PORQUE ÉL LLORA. LA CULPA NUNCA ES SUYA, y
//   ningún plano puede hacerla siniestra ni seductora.
// · ÉL DESOBEDECE TRES VECES ANTES DEL FINAL: bebe antes de tiempo donde
//   Alcaraván, entra primero por la puerta que se abre sola, y VA A LA YONNA
//   PESE AL RUEGO. Las tres están en cuadro y se cuentan como tres.
// · JEPIRA NO ES CASTIGO: los muertos lo saludan COMO CUÑADO, AMIGO Y PRIMO,
//   comen melón y patilla y galopan borrachos. LO RARO ALLÍ ES ÉL, PORQUE ESTÁ
//   VIVO.
// · LO QUE LO HACE IRSE SON CELOS: ve a los jóvenes besar a su mujer y después
//   llegar al hombre que la tuvo antes del matrimonio. SE VA CONTRARIADO, NO
//   ASUSTADO.
// · LA CACERÍA DONDE JUYÁ repite el aprendizaje de «los-dominios-de-juya»: los
//   animales son gente vista de otro modo. FICHAS DISTINTAS, no se cruzan: allá
//   el tema es aprender un oficio, aquí es una etapa de un viaje.
// · PULOWI LO MATA POR MIRAR, NO POR TOCAR. Y JUYÁ NO LO DEFIENDE: le dice a su
//   mujer que se lo coma si quiere.
// · ALEKERÜ, LA ARAÑA, LO SALVA y pone la condición final: que no lo lloren y
//   QUE NO CUENTE NADA. Él rompe la segunda y muere.
// · EL FINAL ES CERRADO: al terminar de contarlo murió y se fue derecho a
//   Jepira. EL RELATO QUE OÍMOS ES EL QUE LO MATÓ, y el último par lo dice.
//
// La `yonna_de_los_muertos` está marcada sensible y el inventario da la única
// indicación cromática del canon: TODO ERA ROJO. Y avisa: NO DESCRIBE EL PASO
// DE BAILE, así que NO SE RECONSTRUYE LA COREOGRAFÍA — se resuelve con el rojo,
// el polvo y las figuras, sin el círculo exacto de las otras dos yonnas.
//
// GUION DE LUZ: llanto al amanecer → alba de la advertencia → mar cruzado a
// espaldas → sed y agua ajena → puerta que se abre sola → montaña de los
// ebrios → melón entre muertos → hamaca que se deshace → rojo de la yonna →
// celos y partida → bifurcación → vacas de Juyá → banco que es boa → cacería
// que es gente → lluvia y prohibición → grito de Pulowi → reparto negado →
// hilo de la Araña y la palabra que mata.

import { CONTEXTO, DIRECCION, AVOID_BASE, PALETTE_BASE, ref, esc, escp, armar } from "./_wayuu-comun.mjs";

export const SPEC_NAME = "wayuu-viaje-escenas";
export const OUT_DIR = "wayuu/videos/el-viaje-del-mas-alla/keyframes";
export { CONTEXTO, DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; espectro, figura translucida, alma flotando, calavera, esqueleto, zombi, cuerpo en descomposicion; inframundo de fuego, castigo, condenados, demonios, iconografia cristiana del infierno; barca de caronte, puerta de perla, tunel de luz, angeles, aureola; seduccion, insinuacion erotica, desnudez, escena de intimidad; monstruo femenino, arpia, sirena, criatura con garras; canibalismo a la vista, carne humana, despiece, sangre, visceras, gore; arana gigante, telaraña que atrapa, presa envuelta; final feliz, reencuentro, apoteosis, monumento, texto";
export const PALETTE =
  PALETTE_BASE + "; JEPIRA NO ES FRIA NI VERDE: va en los mismos ocres y pardos calientes del corpus, porque los muertos viven como los vivos; el UNICO rojo pleno es el de la yonna de los muertos, y es instruccion literal del canon";

const VI =
  "EL MISMO viudo de la referencia (hombre wayúu adulto, manta corta terciada de algodón crudo, faja tejida, descalzo), que es el ÚNICO que se ve enteramente vivo en todo el tramo de Jepira";
const EM =
  "LA MISMA esposa muerta de la referencia (mujer wayúu joven, manta larga hasta el tobillo con cenefa tejida, pelo negro recogido, cara serena), ENTERAMENTE HUMANA Y SÓLIDA: nunca translúcida, nunca pálida, nunca siniestra";
const JY =
  "EL MISMO Juyá de la referencia (hombre muy alto y panzudo, de rostro bellamente feo, cabellera blanca como espuma), de trato burlón";

export const ITEMS = armar([
  // b1 — Lloró tanto a su esposa muerta que ella tuvo piedad. Vino a su sueño.
  escp("b1a", [ref("viudo_del_viaje"), ref("chinchorro"), ref("enramada")], {
    comun: `Amanecer. UN HOMBRE LLORÓ TANTO A SU ESPOSA MUERTA QUE ELLA TUVO PIEDAD: el llanto es largo y doméstico, no teatral. ${VI}. Objeto ancla: el chinchorro vacío al lado del suyo.`,
    camara: {
      a: "PLANO MACRO de un chinchorro vacío colgado y quieto, con el polvo asentado en los flecos.",
      b: "la cámara ha RETROCEDIDO y ha girado: PLANO MEDIO de él sentado en el suelo contra el horcón, de perfil, con la cara gastada de llorar.",
    },
    ini: "un chinchorro vacío colgado y quieto, con el polvo asentado en los flecos.",
    fin: "está sentado en el suelo contra el horcón, de perfil, con la cara gastada de llorar.",
  }, "cadaver, tumba, cruces, llanto teatral, fantasma, resplandor"),
  escp("b1b", [ref("esposa_muerta"), ref("viudo_del_viaje"), ref("chinchorro")], {
    comun: `Noche. VINO A SU SUEÑO Y ÉL CORRIÓ: ella aparece ENTERA Y SÓLIDA, como en vida. ${EM}. NADA DE TRANSLÚCIDO. Objeto ancla: ella de pie en el vano.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara dormida en el chinchorro, con los ojos abriéndose de golpe.",
      b: "la cámara ha GIRADO al vano y ha retrocedido: PLANO MEDIO de ella de pie ahí, entera y sólida, con la manta puesta, esperando.",
    },
    ini: "su cara dormida en el chinchorro, con los ojos abriéndose de golpe.",
    fin: "en el vano está ella de pie, entera y sólida, con la manta puesta, esperando.",
  }, "espectro, translucida, palida, resplandor, niebla, calavera, terror"),

  // b2 — «Soy una sombra en la noche. Pero ven conmigo, ya que lloras». (CITA)
  escp("b2a", [ref("esposa_muerta"), ref("viudo_del_viaje"), ref("rancheria")], {
    comun: `Alba. SOY UNA SOMBRA EN LA NOCHE, LE DIJO AL ALBA: ELLA LE ADVIERTE, y por eso la culpa nunca es suya. Objeto ancla: su cara diciéndolo con la primera luz.`,
    camara: {
      a: "PLANO GENERAL de los dos de pie en el patio al alba, separados por dos pasos.",
      b: "la cámara ha AVANZADO hasta ella: PLANO MEDIO CORTO de su cara con la primera luz dándole de lado, diciéndolo sin dramatismo.",
    },
    ini: "los dos están de pie en el patio al alba, separados por dos pasos.",
    fin: "de cerca, la primera luz le da de lado y lo dice sin dramatismo.",
  }, "translucida, desvaneciendose, resplandor, humo, texto en pantalla"),
  escp("b2b", [ref("esposa_muerta"), ref("viudo_del_viaje"), ref("llanura_cardonal")], {
    comun: `Alba. LA CITA, y es lo que ABRE EL VIAJE ENTERO: pero ven conmigo, ya que lloras. LO LLEVA PORQUE ÉL LLORA, no para arrastrarlo. Objeto ancla: la mano que se ofrece, no que agarra.`,
    camara: {
      a: "PLANO MACRO de una mano abierta y quieta, ofrecida, con la palma hacia arriba.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL con los dos ya andando hacia el norte por la llanura, uno al lado del otro.",
    },
    ini: "una mano abierta y quieta, ofrecida, con la palma hacia arriba.",
    fin: "desde arriba, los dos ya andan hacia el norte por la llanura, uno al lado del otro.",
  }, "arrastre, forcejeo, cadenas, seduccion, resplandor, portal"),

  // b3 — Lo llevó sobre sus espaldas por el mar, rápida como pelícano.
  esc("b3a", [ref("costa_penascos"), ref("gavilan_del_mar")], {
    comun: `Mañana. EL MAR HACIA JEPIRA: el agua abierta que hay que cruzar, y un ave marina pasando rasante. Sin figuras. Objeto ancla: el agua abierta hacia el norte.`,
    camara: {
      a: "PLANO MACRO de la superficie del mar con el sol bajo encendiéndola en escamas.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado de la costa con el agua abriéndose hacia el norte y un ave marina cruzando rasante, diminuta.",
    },
    ini: "la superficie del mar con el sol bajo encendiéndola en escamas.",
    fin: "desde muy arriba, el agua se abre hacia el norte y un ave marina la cruza rasante, diminuta.",
  }, "barca de caronte, barcos fantasma, monstruos marinos, tunel de luz, niebla"),
  escp("b3b", [ref("esposa_muerta"), ref("viudo_del_viaje"), ref("costa_penascos")], {
    comun: `Mañana. LO LLEVÓ SOBRE SUS ESPALDAS POR EL MAR, RÁPIDA COMO PELÍCANO: ella carga, él va encima, y el mar pasa debajo. Objeto ancla: los dos cuerpos sobre el agua.`,
    camara: {
      a: "PLANO MACRO de dos manos agarradas a unos hombros, apretadas, con la espuma saltando alrededor.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL en picado del mar con las dos figuras juntas cruzándolo, minúsculas, y una estela larga detrás.",
    },
    ini: "dos manos agarradas a unos hombros, apretadas, con la espuma saltando alrededor.",
    fin: "desde muy arriba, las dos figuras cruzan el mar, minúsculas, con una estela larga detrás.",
  }, "vuelo, alas, resplandor, transformacion en ave, monstruo marino, ahogamiento"),

  // b4 — Tuvo sed. Bebió primero donde Alcaraván. Entró primero por la puerta.
  escp("b4a", [ref("alcaravan_guardian"), ref("cercado_del_agua"), ref("viudo_del_viaje")], {
    comun: `Mediodía. PRIMERA DESOBEDIENCIA DE TRES: ella le dijo que esperara, PERO ÉL BEBIÓ PRIMERO DONDE ALCARAVÁN, guardián del agua de los yoluja. Objeto ancla: la totuma que coge sin permiso.`,
    camara: {
      a: "PLANO MACRO de una mano cogiendo una totuma del borde del cercado, deprisa.",
      b: "la cámara ha RETROCEDIDO y ha girado: PLANO GENERAL del terreno cercado con él bebiendo a un lado y el alcaraván parado enfrente, mirándolo fijo.",
    },
    ini: "una mano coge una totuma del borde del cercado, deprisa.",
    fin: "desde lejos, él toma agua a un lado del cercado y el alcaraván está parado enfrente, mirándolo fijo.",
  }, "ave monstruosa, ojos brillantes, guardian demoniaco, resplandor, castigo"),
  esc("b4b", [ref("cercado_del_agua"), ref("jepira")], {
    comun: `Tarde. SEGUNDA DESOBEDIENCIA: DESPUÉS ENTRÓ PRIMERO POR UNA PUERTA que se abre sola. Sin figuras: la puerta y el vano. Objeto ancla: la puerta abriéndose sin mano.`,
    camara: {
      a: "PLANO MACRO del canto de una puerta de varas separándose del marco, sin que nadie la empuje.",
      b: "la cámara ha ATRAVESADO el vano y ha retrocedido: PLANO GENERAL del otro lado con el camino siguiendo y la puerta ya abierta de par en par detrás.",
    },
    ini: "el canto de una puerta de varas se separa del marco, sin que nadie la empuje.",
    fin: "al otro lado, el camino sigue y la puerta queda abierta de par en par detrás.",
  }, "portal magico, luz, resplandor, puerta de perla, runas, niebla"),

  // b5 — Al amanecer llegaron a la montaña. Galopaban yoluja sobre caballos.
  escp("b5a", [ref("jepira"), ref("esposa_muerta"), ref("viudo_del_viaje")], {
    comun: `Amanecer. LLEGARON A LA MONTAÑA DONDE ELLA VIVÍA, Y SE OÍA GENTE EBRIA: JEPIRA NO ES CASTIGO —va en los mismos ocres calientes del corpus, no en frío ni en verde—. Objeto ancla: la montaña con vida dentro.`,
    camara: {
      a: "PLANO MEDIO de los dos parados al pie de la subida, de espaldas, mirando arriba.",
      b: "la cámara ha SUBIDO por la ladera y se ha elevado: GRAN PLANO GENERAL de la montaña al amanecer con enramadas y corrales repartidos por ella, habitada y corriente.",
    },
    ini: "los dos están parados al pie de la subida, de espaldas, mirando arriba.",
    fin: "desde arriba, la montaña tiene enramadas y corrales repartidos: está habitada y es corriente.",
  }, "inframundo, fuego, condenados, calaveras, niebla, azules de ultratumba"),
  esc("b5b", [ref("muertos_ebrios"), ref("caballo"), ref("jepira")], {
    comun: `Amanecer. GALOPABAN YOLUJA SOBRE CABALLOS MUERTOS: son gente montando, borrachos y alegres. Los caballos son caballos. Objeto ancla: el galope y el polvo.`,
    camara: {
      a: "PLANO DETALLE de cascos golpeando el suelo en carrera, con el polvo saltando.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la explanada con seis jinetes cruzándola a galope, riéndose y gritando.",
    },
    ini: "cascos golpeando el suelo en carrera, con el polvo saltando.",
    fin: "desde arriba, seis jinetes cruzan la explanada a galope, riéndose y gritando.",
  }, "esqueletos a caballo, caballos putrefactos, jinetes del apocalipsis, fuego, calaveras"),

  // b6 — Lo saludaron como cuñado, amigo y primo. Sólo él parecía vivo.
  escp("b6a", [ref("yolujaa"), ref("viudo_del_viaje"), ref("enramada")], {
    comun: `Mañana. LOS MUERTOS LO SALUDARON COMO CUÑADO, AMIGO Y PRIMO: la acogida es cálida y de familia. Son gente corriente. Objeto ancla: las manos que le palmean la espalda.`,
    camara: {
      a: "PLANO MACRO de una mano palmeando un hombro con confianza, y otra agarrando un antebrazo.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la enramada con ocho personas alrededor de él, saludándolo a la vez y hablándole.",
    },
    ini: "una mano palmea un hombro con confianza y otra agarra un antebrazo.",
    fin: "desde arriba, ocho personas lo rodean bajo la enramada, saludándolo a la vez y hablándole.",
  }, "espectros, calaveras, manos huesudas, translucidos, resplandor, terror"),
  escp("b6b", [ref("viudo_del_viaje"), ref("huerta_melones"), ref("yolujaa")], {
    comun: `Mañana. SÓLO ÉL TENÍA ASPECTO DE VIVIENTE, Y COMÍA MELÓN: LO RARO ALLÍ ES ÉL. Se cuenta con el contraste de piel y de gesto, no con efectos sobre los demás. Objeto ancla: el melón que come.`,
    camara: {
      a: "PLANO MACRO de una mano partiendo un melón y el jugo escurriéndose entre los dedos.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del corro comiendo con él en el centro, el único que suda y que se limpia la boca.",
    },
    ini: "una mano parte un melón y el jugo se escurre entre los dedos.",
    fin: "desde arriba, el corro come y él está en el centro: el único que suda y se limpia la boca.",
  }, "zombis comiendo, carne humana, sangre, calaveras, resplandor sobre el vivo"),

  // b7 — De noche ella colgaba hamaca, pero al acercarse desaparecía.
  escp("b7a", [ref("esposa_muerta"), ref("chinchorro"), ref("jepira")], {
    comun: `Noche. DE NOCHE SU MUJER COLGABA HAMACA: todo parece normal hasta que él se acerca. Objeto ancla: la hamaca colgada con ella dentro.`,
    camara: {
      a: "PLANO MACRO del cabo de un chinchorro amarrándose al horcón, con las manos de ella trabajando.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO del chinchorro colgado con ella ya dentro, entera, de perfil.",
    },
    ini: "el cabo de un chinchorro se amarra al horcón, con las manos de ella trabajando.",
    fin: "el chinchorro cuelga con ella ya dentro, entera y de perfil.",
  }, "espectro, translucida, resplandor, niebla, cadaver, calavera"),
  esc("b7b", [ref("chinchorro"), ref("jepira")], {
    comun: `Noche. PERO AL ACERCARSE DESAPARECÍA: el corte es limpio —el chinchorro ocupado y luego el chinchorro vacío—, SIN desvanecimiento dibujado. Sin figuras en el segundo cuadro. Objeto ancla: la tela que se queda lisa.`,
    camara: {
      a: "PLANO MEDIO del chinchorro con el peso de un cuerpo hundiéndolo por el medio.",
      b: "la cámara ha AVANZADO un paso: PLANO MACRO de la misma tela, ya lisa y sin peso, balanceándose apenas.",
    },
    ini: "el chinchorro está hundido por el medio por el peso de un cuerpo.",
    fin: "un paso más cerca, la misma tela está lisa y sin peso, balanceándose apenas.",
  }, "desvanecimiento dibujado, humo, particulas, resplandor, fantasma, transparencia"),

  // b8 — La vinieron a buscar para una yonna. Él insistió: todo era rojo.
  escp("b8a", [ref("esposa_muerta"), ref("viudo_del_viaje"), ref("enramada")], {
    comun: `Tarde. UN DÍA LA VINIERON A BUSCAR PARA UNA YONNA Y ELLA LE PIDIÓ QUE SE QUEDARA, PORQUE ALLÁ VERÍA COSAS QUE NO LE GUSTARÍAN: SEGUNDA ADVERTENCIA de ella, y él no la oye. Objeto ancla: su cara pidiéndoselo.`,
    camara: {
      a: "PLANO MEDIO CORTO de ella hablándole de frente, seria, con la mano en su brazo.",
      b: "la cámara ha RETROCEDIDO y ha girado: PLANO GENERAL con ella yéndose ya hacia el ruido y él andando detrás, sin hacerle caso.",
    },
    ini: "ella le habla de frente, seria, con la mano en su brazo.",
    fin: "desde lejos, ella ya va hacia el ruido y él camina detrás, sin hacerle caso.",
  }, "amenaza, terror, presagios, resplandor, sombras, texto"),
  esc("b8b", [ref("yonna"), ref("jepira")], {
    comun: `Tarde. TERCERA DESOBEDIENCIA: ÉL INSISTIÓ, Y TODO ERA ROJO. ES LA ÚNICA INDICACIÓN CROMÁTICA DEL CANON y el único rojo pleno del spec. EL CANON NO DESCRIBE EL PASO DE BAILE: NO SE RECONSTRUYE LA COREOGRAFÍA — se resuelve con el rojo, el polvo y las figuras. Objeto ancla: el rojo que lo llena todo.`,
    camara: {
      a: "PLANO MACRO del polvo levantado, teñido de rojo entero, con la luz atravesándolo.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: GRAN PLANO GENERAL en picado de la explanada con decenas de figuras en el polvo y todo el cuadro en rojo, de un extremo al otro.",
    },
    ini: "el polvo levantado está teñido de rojo entero, con la luz atravesándolo.",
    fin: "desde arriba, decenas de figuras se mueven en el polvo y todo el cuadro está en rojo, de un extremo al otro.",
  }, "infierno, fuego, condenados, demonios, circulo exacto de yonna, coreografia reconstruida"),

  // b9 — Los jóvenes la besaban y le chocó. Quiso bailar y todos se fueron.
  escp("b9a", [ref("esposa_muerta"), ref("yolujaa"), ref("yonna")], {
    comun: `Tarde, en rojo. LOS JÓVENES LA ABRAZABAN Y LA BESABAN EN LA BOCA, Y LE CHOCÓ: es lo normal de allí y a él le duele. Se cuenta a media distancia y sin nada explícito. Objeto ancla: la cara de él viéndolo.`,
    camara: {
      a: "PLANO GENERAL en el polvo rojo con ella entre varios jóvenes, todos cerca, a media distancia.",
      b: "la cámara ha GIRADO 180 grados y ha avanzado: PLANO MEDIO CORTO de la cara de él mirándolo, con la mandíbula apretada.",
    },
    ini: "en el polvo rojo, ella está entre varios jóvenes, todos cerca, a media distancia.",
    fin: "al girar, la cara de él lo mira con la mandíbula apretada.",
  }, "beso explicito, insinuacion erotica, desnudez, orgia, violencia"),
  escp("b9b", [ref("viudo_del_viaje"), ref("yolujaa"), ref("yonna")], {
    comun: `Tarde, en rojo. QUISO BAILAR Y TODOS SE FUERON: SE VAN PORQUE ÉL ESTÁ VIVO, y eso es lo que lo deja solo. Objeto ancla: el círculo que se vacía a su alrededor.`,
    camara: {
      a: "PLANO MEDIO de él entrando en el polvo rojo con los brazos ya levantados para bailar.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL en picado con un trecho de suelo vacío alrededor de él y todas las figuras apartándose hacia los bordes.",
    },
    ini: "entra en el polvo rojo con los brazos ya levantados para bailar.",
    fin: "desde arriba, hay un trecho de suelo vacío alrededor de él y todas las figuras se apartan hacia los bordes.",
  }, "panico, huida, terror, monstruos, resplandor sobre el vivo, gritos"),

  // b10 — Vio llegar al hombre que la tuvo antes, y partió contrariado.
  escp("b10a", [ref("yolujaa"), ref("esposa_muerta"), ref("jepira")], {
    comun: `Última luz. VIO LLEGAR AL HOMBRE QUE LA TUVO ANTES: LO QUE LO HACE IRSE SON CELOS, no miedo. Objeto ancla: el hombre que llega y ella que lo recibe.`,
    camara: {
      a: "PLANO MEDIO CORTO de la cara de él viendo acercarse a alguien, cambiando de gesto.",
      b: "la cámara ha GIRADO siguiendo su mirada y ha retrocedido: PLANO GENERAL con un hombre llegando por el camino y ella saliendo a recibirlo con naturalidad.",
    },
    ini: "la cara de él ve acercarse a alguien y le cambia el gesto.",
    fin: "en esa dirección, un hombre llega por el camino y ella sale a recibirlo con naturalidad.",
  }, "pelea, violencia, celos dibujados, monstruo, espectro, resplandor"),
  escp("b10b", [ref("viudo_del_viaje"), ref("jepira"), ref("llanura_cardonal")], {
    comun: `Alba. Y PARTIÓ CONTRARIADO AL ALBA: SE VA CONTRARIADO, NO ASUSTADO, y ésa es la diferencia. Objeto ancla: su espalda bajando la montaña.`,
    camara: {
      a: "PLANO MEDIO de él de espaldas empezando a bajar, con el paso rápido y la cabeza baja.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL al alba con la montaña habitada arriba y él diminuto bajando por la ladera, solo.",
    },
    ini: "de espaldas, empieza a bajar con el paso rápido y la cabeza baja.",
    fin: "desde muy arriba, la montaña habitada queda arriba y él baja diminuto por la ladera, solo.",
  }, "huida aterrorizada, persecucion, monstruos, niebla, portal, resplandor"),

  // b11 — El camino se bifurcaba y tomó el que llevaba a Juyá.
  esc("b11a", [ref("llanura_cardonal"), ref("del_camino")], {
    comun: `Mañana. EL CAMINO SE BIFURCABA: dos trochas iguales y hay que escoger. Sin figuras. Objeto ancla: la bifurcación.`,
    camara: {
      a: "PLANO CENITAL MACRO del punto exacto donde la trocha se parte en dos, con la arena marcada.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado con las dos trochas abriéndose hacia horizontes distintos, igual de largas.",
    },
    ini: "el punto exacto donde la trocha se parte en dos, con la arena marcada.",
    fin: "desde muy arriba, las dos trochas se abren hacia horizontes distintos, igual de largas.",
  }, "señales, carteles, flechas, mapas, portales, resplandor"),
  escp("b11b", [ref("viudo_del_viaje"), ref("huerta_melones"), ref("llanura_cardonal")], {
    comun: `Una luna entera. TOMÓ EL QUE LLEVABA A JUYÁ Y CAMINÓ UNA LUNA COMIENDO AUYAMAS Y FRUTAS: el tiempo se cuenta con la barba crecida y las cáscaras que deja. Objeto ancla: la barba crecida.`,
    camara: {
      a: "PLANO MACRO de una barba de semanas y una boca comiendo fruta, muy de cerca.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: GRAN PLANO GENERAL en picado del camino con él diminuto y un rastro de cáscaras marcando por dónde vino.",
    },
    ini: "una barba de semanas y una boca comiendo fruta, muy de cerca.",
    fin: "desde muy arriba va diminuto por el camino, con un rastro de cáscaras marcando por dónde vino.",
  }, "agonia, hambre extrema, cadaver, buitres, espejismos, dunas"),

  // b12 — Pasaban las vacas de Juyá. Se agarró de la cola de una vieja.
  esc("b12a", [ref("ganado_vacuno"), ref("llanura_cardonal")], {
    comun: `Cada mañana. PASABAN LAS VACAS DE JUYÁ Y UNA MUY VIEJA SE QUEDABA ATRÁS: la observación es de pastor, y de ahí sale la idea. Objeto ancla: la res rezagada.`,
    camara: {
      a: "PLANO MACRO de las patas traseras de una vaca vieja, flacas y lentas, quedándose.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la manada cruzando en fila y esa única res muy atrás, descolgada.",
    },
    ini: "las patas traseras de una vaca vieja, flacas y lentas, quedándose.",
    fin: "desde arriba, la manada cruza en fila y esa única res queda muy atrás, descolgada.",
  }, "ganado fantasma, esqueletos, resplandor, manada mitica, magia"),
  escp("b12b", [ref("viudo_del_viaje"), ref("ganado_vacuno"), ref("dominio_de_juya")], {
    comun: `Mañana. SE AGARRÓ DE SU COLA: es el truco entero, y es de puro oficio. Objeto ancla: la mano cerrada en la cola.`,
    camara: {
      a: "PLANO MACRO de una mano cerrándose sobre el mechón de una cola de vaca, apretando.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL con la res tirando de él y los dos entrando en terreno verde, detrás de la manada.",
    },
    ini: "una mano se cierra sobre el mechón de una cola de vaca, apretando.",
    fin: "desde arriba, la res tira de él y los dos entran en terreno verde detrás de la manada.",
  }, "vuelo, resplandor, portal, magia, arrastre violento, sangre"),

  // b13 — Juyá lo llamó nieto y le ofreció un banco que era boa.
  escp("b13a", [ref("juya"), ref("viudo_del_viaje"), ref("dominio_de_juya")], {
    comun: `Luz verde. JUYÁ LO LLAMÓ NIETO: ${JY}, y la acogida es la misma broma buena de siempre. Objeto ancla: la diferencia de tamaño.`,
    camara: {
      a: "PLANO MACRO de una mano enorme posándose sobre una cabeza, cubriéndola entera.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL con Juyá altísimo de pie y él pequeño a su lado, en el pasto alto.",
    },
    ini: "una mano enorme se posa sobre una cabeza y la cubre entera.",
    fin: "desde arriba, Juyá está de pie altísimo y él pequeño a su lado, en el pasto alto.",
  }, "trono, aureola, rayos, ogro, monstruo, adoracion"),
  esc("b13b", [ref("banco_boa"), ref("dominio_de_juya")], {
    comun: `Luz verde. LE OFRECIÓ UN BANCO QUE ERA BOA: el mismo chiste que en «los-dominios-de-juya», y se cuenta igual — POR CORTE, banco y luego animal en el mismo sitio. Objeto ancla: el mismo punto, dos cosas.`,
    camara: {
      a: "PLANO MACRO de la madera de un banco bajo, con la veta y las marcas de uso.",
      b: "la cámara ha RETROCEDIDO de golpe: PLANO MEDIO de una boa gruesa enroscada en ese mismo punto de la hierba, con las escamas brillando.",
    },
    ini: "la madera de un banco bajo, con la veta y las marcas de uso.",
    fin: "en ese mismo punto de la hierba hay una boa gruesa enroscada, con las escamas brillando.",
  }, "transformacion dibujada, humo, resplandor, serpiente monstruosa, colmillos"),

  // b14 — Lo mandó por corzos y trajo corzos. Cada presa era gente.
  escp("b14a", [ref("caza_que_es_gente"), ref("indio_rico"), ref("dominio_de_juya")], {
    comun: `Luz verde. CADA PRESA ERA GENTE: un indio rico, jugadores de lianas, hombres ventrudos. AQUÍ YA NO APRENDE —ya sabe—, y ésa es la diferencia con «los-dominios-de-juya». Objeto ancla: el grupo de gente en el claro.`,
    camara: {
      a: "PLANO MEDIO CORTO de un hombre de manta con cenefas, de aspecto acomodado, parado en el monte.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del claro con tres grupos distintos de gente: unos jugando con lianas y otros de vientre grande, todos corrientes.",
    },
    ini: "un hombre de manta con cenefas, de aspecto acomodado, parado en el monte.",
    fin: "desde arriba, en el claro hay tres grupos distintos de gente: unos jugando con lianas y otros de vientre grande.",
  }, "hibridos, personas con rasgos animales, transformacion, resplandor, sangre"),
  esc("b14b", [ref("venado"), ref("dominio_de_juya")], {
    comun: `Luz verde. JUYÁ DECÍA SON ELLOS, Y VOLVÍA CARGADO: el corte va de la gente al animal, limpio y sin sangre. Objeto ancla: las piezas cobradas.`,
    camara: {
      a: "PLANO MACRO del pelaje de un animal tendido en la hierba, entero y sin herida a la vista.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del claro con tres animales distintos tendidos donde estaban los tres grupos.",
    },
    ini: "el pelaje de un animal tendido en la hierba, entero y sin herida a la vista.",
    fin: "desde arriba, tres animales distintos están tendidos donde estaban los tres grupos.",
  }, "sangre, despiece, agonia, hibridos, caras humanas en los animales, gore"),

  // b15 — Juyá partió a hacer llover y le prohibió acercarse a Pulowi.
  escp("b15a", [ref("juya"), ref("chubasco"), ref("dominio_de_juya")], {
    comun: `Luz que cambia. JUYÁ PARTIÓ A HACER LLOVER Y LE PROHIBIÓ ACERCARSE A LA ENRAMADA DE PULOWI: la prohibición es clara y él la oye bien. Objeto ancla: la mano que señala la enramada prohibida.`,
    camara: {
      a: "PLANO MACRO de una mano enorme señalando hacia un lado, con el índice extendido.",
      b: "la cámara ha GIRADO siguiendo el brazo y ha retrocedido: PLANO GENERAL de una enramada apartada al fondo del terreno, cerrada, y Juyá ya alejándose por el otro lado.",
    },
    ini: "una mano enorme señala hacia un lado, con el índice extendido.",
    fin: "en esa dirección hay una enramada apartada al fondo, cerrada, y Juyá ya se aleja por el otro lado.",
  }, "amenaza, rayos, ira divina, aureola, trono, texto"),
  escp("b15b", [ref("viudo_del_viaje"), ref("enramada_de_pulowi"), ref("dominio_de_juya")], {
    comun: `Tarde. QUISO VERLA, Y LA VIO: LO MATA POR MIRAR, NO POR TOCAR. El plano es él asomándose y NADA de lo que ve. Objeto ancla: sus ojos en la rendija.`,
    camara: {
      a: "PLANO MEDIO de él acercándose a la enramada de espaldas, agachado, contra la pared de palma.",
      b: "la cámara ha AVANZADO hasta su cara y ha cerrado: PLANO MACRO de un ojo pegado a una rendija de la palma, mirando adentro.",
    },
    ini: "se acerca a la enramada de espaldas, agachado, contra la pared de palma.",
    fin: "de muy cerca, un ojo pegado a la rendija de la palma mira adentro.",
  }, "monstruo femenino, arpia, criatura, desnudez, seduccion, resplandor, garras"),

  // b16 — Ella estalló en un grito y él cayó tieso, el vientre hinchado.
  esc("b16a", [ref("enramada_de_pulowi"), ref("dominio_de_juya")], {
    comun: `Tarde. ELLA ESTALLÓ EN UN GRITO: PULOWI NO SE MUESTRA NUNCA. El grito se cuenta con lo que hace afuera —el polvo, las hojas, las aves que se van—. Sin figuras. Objeto ancla: la palma sacudida desde dentro.`,
    camara: {
      a: "PLANO MACRO de la pared de palma de la enramada vibrando de golpe, con el polvo saltando de las fibras.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del terreno con las hierbas aplastándose en círculo alrededor de la enramada y una bandada saliendo en desbandada.",
    },
    ini: "la pared de palma de la enramada vibra de golpe y el polvo salta de las fibras.",
    fin: "desde arriba, las hierbas se aplastan en círculo alrededor de la enramada y una bandada sale en desbandada.",
  }, "monstruo, arpia, cara gritando, boca gigante, resplandor, ondas dibujadas"),
  escp("b16b", [ref("viudo_del_viaje"), ref("dominio_de_juya")], {
    comun: `Tarde. Y ÉL CAYÓ TIESO, EL VIENTRE HINCHADO: QUÉ DESGRACIA EL HOMBRE QUE NO ESCUCHA. Se cuenta con el cuerpo de espaldas y a media distancia, sin detalle ni deformidad. Objeto ancla: la figura caída en la hierba.`,
    camara: {
      a: "PLANO MACRO de una mano abierta y quieta sobre la hierba, con los dedos rígidos.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL en picado del terreno con la figura tendida boca arriba, pequeña, junto a la enramada cerrada.",
    },
    ini: "una mano abierta y quieta sobre la hierba, con los dedos rígidos.",
    fin: "desde muy arriba, la figura está tendida boca arriba, pequeña, junto a la enramada cerrada.",
  }, "vientre deformado, cadaver, agonia, sangre, ojos, gore, body horror"),

  // b17 — Pulowi dijo que estaba muerto. Juyá decidió partirlo en dos.
  esc("b17a", [ref("enramada_de_pulowi"), ref("juya"), ref("dominio_de_juya")], {
    comun: `Anochecer. PULOWI DIJO QUE ESTABA MUERTO POR HABER VISTO, Y JUYÁ LE DIJO QUE COMIERA: JUYÁ NO LO DEFIENDE. Ella sigue sin verse: la conversación pasa de un lado a otro de la pared de palma. Objeto ancla: la pared entre los dos.`,
    camara: {
      a: "PLANO MEDIO de Juyá de pie fuera de la enramada, de perfil, hablando hacia la palma.",
      b: "la cámara ha GIRADO al otro lado de la pared y ha retrocedido: PLANO GENERAL de la enramada por fuera, cerrada, con él parado al lado y la figura caída más allá.",
    },
    ini: "Juyá está de pie fuera de la enramada, de perfil, hablando hacia la palma.",
    fin: "al otro lado se ve la enramada cerrada por fuera, con él parado al lado y la figura caída más allá.",
  }, "monstruo visible, arpia, garras, canibalismo, sangre, gore"),
  esc("b17b", [ref("juya"), ref("armas"), ref("dominio_de_juya")], {
    comun: `Noche. DECIDIÓ PARTIRLO EN DOS: el reparto NO llega a ocurrir. El cuadro se queda en el gesto detenido y en la noche. Objeto ancla: la hoja levantada que no baja.`,
    camara: {
      a: "PLANO MACRO de una hoja grande de metal levantada contra el cielo del anochecer, quieta.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL nocturno del terreno con las dos figuras minúsculas y todo lo demás a oscuras.",
    },
    ini: "una hoja grande de metal levantada contra el cielo del anochecer, quieta.",
    fin: "desde muy arriba, las dos figuras son minúsculas y todo lo demás está a oscuras.",
  }, "cuerpo partido, sangre, visceras, despiece, canibalismo, gore"),

  // b18 — Alekerü lo bajó por su hilo. Lo contó, y al terminar murió.
  esc("b18a", [ref("alekeru"), ref("dominio_de_juya"), ref("llanura_cardonal")], {
    comun: `Noche y amanecer. ALEKERÜ, LA ARAÑA, LO BAJÓ POR SU HILO Y LE PROHIBIÓ CONTARLO: es una araña real, y el hilo es un hilo. Sin figura humana colgando en primer plano. Objeto ancla: el hilo bajando.`,
    camara: {
      a: "PLANO MACRO de una araña soltando hilo desde una rama, con la hebra brillando a contraluz.",
      b: "la cámara ha SEGUIDO el hilo hacia abajo y se ha elevado al otro lado: GRAN PLANO GENERAL al amanecer con la hebra larguísima llegando hasta la llanura seca y una figura diminuta al final de ella.",
    },
    ini: "una araña suelta hilo desde una rama, con la hebra brillando a contraluz.",
    fin: "desde muy arriba, la hebra larguísima llega hasta la llanura seca y hay una figura diminuta al final de ella.",
  }, "arana gigante, monstruo, telaraña que atrapa, presa envuelta, resplandor"),
  escp("b18b", [ref("viudo_del_viaje"), ref("primeros_wayuu"), ref("enramada")], {
    comun: `Última luz. LO CONTÓ, Y AL TERMINAR MURIÓ: EL RELATO QUE OÍMOS ES EL QUE LO MATÓ, y ahí cierra el mito y cierran los 27. La muerte NO se muestra: la boca que acaba de hablar y después el sitio vacío. Objeto ancla: la boca que termina de contar.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara en el corro, con la barba crecida, diciendo la última frase.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL final en picado de la enramada al atardecer con el corro entero callado y un sitio vacío en el medio, donde él estaba sentado.",
    },
    ini: "su cara en el corro, con la barba crecida, dice la última frase.",
    fin: "desde muy arriba, el corro entero está callado y en el medio queda un sitio vacío, donde él estaba sentado.",
  }, "cadaver, alma subiendo, resplandor, reencuentro, aureola, apoteosis, texto"),
]);
