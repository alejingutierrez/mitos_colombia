// Keyframes de Cuchavira — 9 bloques × 2 escenas × 2 cuadros = 36 imágenes ≈ 90 s.
// Guion: guion-cuchavira-v2.json (N=9) · Acta: acta-cuchavira.json
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _muisca-comun.mjs).
//
// DESLINDE DURO: Cuchavira NO TIENE ROSTRO. La fuente lo dice expresamente: es
// el aire mismo volviéndose luz mientras dura el agua en el aire. NINGUNA
// escena le da cara, cuerpo ni silueta. El personaje del video ES EL ARCO.
//
// · Pero el arco SE VE, y grande: ésta es la ficha del prodigio y no se apaga.
// · El arco NO es puro buen augurio: hubo quien bajó la vista. Esa
//   ambivalencia va en cuadro (b6b).
// · Lo que reciben la mujer y el enfermo NO es un milagro: es alivio.
// · Los ríos NO se quitan: en los tiempos secos harán falta.
// · No se cruza con `el-tequendama` ni con `chibchacum`.

import { DIRECCION, AVOID_BASE, ref, esc, escp, armar } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-cuchavira-escenas";
export const OUT_DIR = "muiscas/videos/cuchavira/keyframes";
export { DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; cualquier rostro, cara, ojos, boca, silueta o cuerpo dentro del arco o formado por el arco; dios antropomorfo en el cielo; angeles; manos saliendo de las nubes; arco palido, lechoso o descolorido; milagro visible, curacion instantanea, resplandor sobre los enfermos";
export const PALETTE =
  "gris plomo de invierno, pardo de agua turbia, verde apagado de loma, crema de algodon crudo; EL ARCO es la unica fuente de color saturado del video y lleva sus franjas enteras; el oro solo en la vara y en las figuras de ofrenda; sin neones";

export const ITEMS = armar([
  // b1 — La sabana se llenó. El agua no hallaba salida.
  esc("b1a", [ref("sabana_anegada"), ref("casa_tierras_llanas")], {
    comun: "Luz gris plomo sin sol, llovizna fina. LA MISMA sabana anegada de la referencia y LOS MISMOS bohíos de la referencia con el agua a media pared. Objeto ancla: una franja de tierra alta todavía seca.",
    camara: {
      a: "GRAN PLANO GENERAL en picado muy alto: el valle entero visto desde arriba, los caminos ya borrados bajo la lámina turbia y los bohíos diminutos.",
      b: "la cámara ha BAJADO en diagonal hasta quedar a un palmo del agua, junto a una cerca medio hundida: PLANO MEDIO BAJO casi a ras de la lámina, con la cerca grande en primer término y los bohíos ahora a media distancia.",
    },
    ini: "la franja de tierra alta sigue entera y seca y en ella hay hierba fuera del agua.",
    fin: "el agua la ha tomado del todo: sólo queda una línea oscura de hierba doblada bajo la lámina, y los travesaños de la cerca del primer término están ya sumergidos hasta el segundo.",
  }, "personas, botes, cadaveres, dramatismo moderno, sol, arcoiris"),
  esc("b1b", [ref("rocas_tequendama"), ref("sabana_anegada")], {
    comun: "Luz plana y fría. LAS MISMAS peñas de la referencia cerrando el valle, con el agua llegando a su pie sin encontrar por dónde salir. Objeto ancla: el pie de las peñas.",
    camara: {
      a: "PLANO GENERAL FRONTAL a la altura del agua, a media distancia: se ven las dos peñas enteras y el remolino que gira contra la roca.",
      b: "la cámara ha AVANZADO sobre el agua hasta casi tocar la pared y ha basculado a CONTRAPICADO: la roca sube ahora fuera de cuadro y el remolino pasa enorme por el borde inferior.",
    },
    ini: "el agua gira despacio contra la roca y la niebla está detenida a media pared.",
    fin: "el remolino se ha abierto y acelerado hasta arrastrar ramas contra la pared, el agua ha subido un palmo dejando una línea de espuma sucia en la piedra y la niebla ha bajado hasta el agua.",
  }, "cascada, salto de agua, espuma gloriosa, grieta abierta, personas, vara"),

  // b2 — Subieron a las lomas. Aflojó la lluvia y se tendió un arco.
  escp("b2a", [ref("familias_muiscas"), ref("loma_pelada_noche"), ref("sabana_anegada")], {
    comun: "Lluvia fina que afloja. Gente de LAS MISMAS familias de la referencia en lo alto de LA MISMA loma de la referencia, DE ESPALDAS, con el agua crecida allá abajo. Objeto ancla: las cabezas.",
    camara: {
      a: "PLANO GENERAL desde atrás y desde el barro de la loma: el grupo entero de espaldas y el valle inundado abriéndose delante de ellos.",
      b: "la cámara los ha RODEADO por un costado hasta ponerse casi de perfil y ha subido a la altura de las cabezas: PLANO MEDIO LARGO en el que se ven las caras de tres cuartos y, al fondo y desenfocado, el otro lado del cielo.",
    },
    ini: "todos miran hacia abajo, al agua que sigue creciendo, y sólo dos han empezado a girar la cabeza.",
    fin: "casi todos se han girado hacia el otro lado del cielo y han dejado de mirar el agua; la lluvia ha parado y en el valle de abajo la lámina brilla.",
  }, "rostros de frente, panico, llanto, multitud desbordada, arcoiris ya visible"),
  esc("b2b", [ref("valle_anegado_arco"), ref("sabana_anegada")], {
    comun: "El cielo abriéndose con la lluvia todavía cayendo al fondo. EL MISMO valle anegado de la referencia, todo él en grises. Objeto ancla: el arco.",
    camara: {
      a: "PLANO GENERAL desde entre los juncos de la orilla, cámara baja: sólo se ve un tercio del cielo y el pie del arco apoyado en el agua.",
      b: "la cámara ha SUBIDO muy alto y ha retrocedido hasta un GRAN PLANO GENERAL: el valle entero debajo y el arco cruzándolo de lado a lado, entero dentro del cuadro.",
    },
    ini: "el arco es todavía un pie de color apoyado en el agua y apenas arranca hacia arriba: es lo único con color en un mundo gris.",
    fin: "el arco ha cerrado los dos extremos y cruza el cielo entero, ENORME y luminoso con sus franjas rojo, ocre, verde y azul, con su reflejo armado sobre el agua de abajo.",
  }, "rostro en el arco, figura, angel, personas, arco palido o descolorido, sol"),

  // b3 — Del arco vino una voz. (CITA: no quitaría los ríos)
  esc("b3a", [ref("valle_anegado_arco")], {
    comun: "Cielo que se despeja. EL MISMO arco de la referencia con sus franjas de color. Sobre él NO HAY NADIE: la voz no tiene cuerpo y el encuadre está hecho para que esa ausencia se note. Objeto ancla: la cumbre vacía del arco.",
    camara: {
      a: "PLANO GENERAL CERRADO sobre la cumbre del arco, con nubes bajas cruzando por delante y tapando parte de las franjas.",
      b: "la cámara ha hecho un TRAVELLING LATERAL siguiendo el arco hasta la mitad de su caída y se ha acercado: ahora el arco entra en diagonal por una esquina y se sale por la otra, y se le ve el grosor.",
    },
    ini: "las nubes tapan parte de las franjas y el color está apagado.",
    fin: "las nubes han quedado atrás, las franjas se leen enteras y saturadas en toda la diagonal del cuadro, y sigue sin haber nadie ni nada encima del arco.",
  }, "figura de pie en el arco, rostro, silueta, mano, ojos, boca, angel, Bochica"),
  escp("b3b", [ref("familias_muiscas"), ref("loma_pelada_noche")], {
    comun: "Luz dorada baja que llega de lado. Un grupo de LAS MISMAS familias de la referencia en la loma; a quien oyen está fuera de cuadro y nadie se arrodilla. Objeto ancla: las caras.",
    camara: {
      a: "PLANO MEDIO LARGO lateral, el grupo en fila irregular contra la ladera.",
      b: "la cámara se ha metido ENTRE ellos y ha basculado a CONTRAPICADO desde abajo: ahora las caras se recortan contra el cielo y el grupo llena el cuadro por arriba.",
    },
    ini: "unos pocos tienen la cara alzada y los demás están empezando a levantar la cabeza, a destiempo.",
    fin: "todos tienen la cara alzada hacia el mismo punto del cielo, las bocas entreabiertas de escuchar y las mantas ondeando; ninguno se ha arrodillado.",
  }, "arrodillarse, manos juntas, adoracion, llanto, figura divina en cuadro"),

  // b4 — Arrojó una vara de oro y las peñas se partieron.
  esc("b4a", [ref("vara_dorada"), ref("rocas_tequendama")], {
    comun: "Luz dorada de tarde. LA MISMA vara dorada de la referencia en vuelo sobre el agua represada, con LAS MISMAS peñas de la referencia al fondo. Objeto ancla: la vara.",
    camara: {
      a: "PLANO GENERAL desde el nivel del agua, la vara pequeña a mitad de camino y las peñas enteras al fondo.",
      b: "la cámara ha VOLADO detrás de la vara y se ha plantado junto a la junta de las peñas: PLANO MEDIO de la roca, con la vara entrando por el borde y la pared ocupando todo el fondo.",
    },
    ini: "la vara vuela horizontal dejando una estela fina de luz y la roca del fondo está entera.",
    fin: "la vara se ha clavado en la junta de las peñas y de la piedra sale ya una grieta fina y oscura, con esquirlas saltando y la estela de luz deshaciéndose detrás.",
  }, "personas, mano que lanza, cascada ya formada, espuma, explosion, fuego"),
  esc("b4b", [ref("sabana_cultivos"), ref("sabana_anegada")], {
    comun: "La luz aclarando. LA MISMA sabana de la referencia con el légamo marcando franjas de hasta dónde llegó el agua y los surcos de LOS MISMOS cultivos de la referencia. Objeto ancla: el borde del agua.",
    camara: {
      a: "PLANO DETALLE cenital muy cerrado sobre el légamo agrietado y el filo del agua, que se retira de un surco.",
      b: "la cámara se ha ELEVADO muchísimo hasta un GRAN PLANO GENERAL en picado del valle entero, donde el mismo borde de agua se lee ahora como una línea que atraviesa todo el fondo.",
    },
    ini: "el agua cubre el surco que tenemos delante y sólo asoma la cresta del légamo.",
    fin: "el agua se ha retirado hasta el fondo del valle y desde arriba se ven los surcos descubiertos casi hasta el horizonte, con las franjas de légamo marcando por dónde pasó.",
  }, "personas, celebracion, banderas, sol pleno"),

  // b5 — Abogado de parturientas y enfermos. Cintillos y figuras de oro bajo.
  escp("b5a", [ref("mujer_parto_ofrenda"), ref("templo_ofrendas")], {
    comun: "Luz cálida y escasa de lámpara de sebo. LA MISMA mujer encinta de la referencia ante el borde de una estera de ofrendas donde ya hay otras puestas. Objeto ancla: el cintillo tejido.",
    camara: {
      a: "PLANO MEDIO de perfil: se la ve de cintura para arriba y la estera entra por el borde inferior.",
      b: "la cámara ha DESCENDIDO hasta la altura de la estera y se ha girado a cenital: PLANO DETALLE de las ofrendas desde arriba, con las manos de ella entrando por el borde y su cara fuera de cuadro.",
    },
    ini: "sostiene con las dos manos un cintillo tejido y una figurilla pequeña de oro bajo, a un palmo de la estera.",
    fin: "el cintillo y la figurilla están ya sobre la estera, colocados entre las demás ofrendas, y sus manos se retiran hacia el borde del cuadro.",
  }, "parto en curso, sangre, dolor, desnudez, cruces, sacerdotes, oro macizo"),
  escp("b5b", [ref("enfermo_calenturas"), ref("casa_barro_paja")], {
    comun: "Penumbra de interior con una abertura de luz en la pared de barro. EL MISMO enfermo de calenturas de la referencia, envuelto en su manta y sentado contra la pared. Nadie lo toca. Objeto ancla: la abertura de luz.",
    camara: {
      a: "PLANO MEDIO frontal desde la penumbra: él sentado, la abertura fuera de cuadro a un lado y sólo su reflejo en la pared.",
      b: "la cámara ha RODEADO hasta ponerse junto a la abertura y mirar hacia dentro a contraluz: PRIMER PLANO de su cara recibiendo la claridad, con el resto del cuarto negro detrás.",
    },
    ini: "tiene la cara vuelta hacia la sombra y suda, respirando corto.",
    fin: "ha girado la cara hacia la luz y la claridad le da de lleno en la frente, con el polvo flotando en el haz; sigue enfermo y no hay resplandor ni curación.",
  }, "curacion, resplandor sobre el cuerpo, manos sanadoras, milagro, sacerdote, muerte"),

  // b6 — Cuentas de la costa y esmeraldinas. No todos se alegraban.
  esc("b6a", [ref("esmeralda_algodones"), ref("manta_reparto")], {
    comun: "Luz lateral fría. LA MISMA esmeralda sobre algodones de la referencia junto a sartas de cuentas de concha traídas de la costa, sobre una manta. Objeto ancla: la esmeralda.",
    camara: {
      a: "PLANO MACRO cenital: la esmeralda llena medio cuadro y se le ven las vetas y los algodones que la envuelven.",
      b: "la cámara se ha ALEJADO y ha basculado a tres cuartos: PLANO MEDIO de la manta entera sobre el suelo del templo, con la esmeralda pequeña en el centro y las sartas repartidas alrededor.",
    },
    ini: "una mano entra por el borde acercando otra cuenta al montón, sin haberla soltado.",
    fin: "la cuenta ha quedado con las demás y la mano ha salido del cuadro; desde esta distancia se ve que la manta está cubierta de ofrendas de concha y algodón.",
  }, "oro macizo, joyeria moderna, monedas, tesoro, personas de cuerpo entero"),
  escp("b6b", [ref("familias_muiscas"), ref("valle_anegado_arco")], {
    comun: "Un grupo de LAS MISMAS familias de la referencia PARTIDO EN DOS ante la misma luz, con el arco de color al fondo. La misma señal y dos lecturas opuestas, sin que ninguna se vea mejor. Objeto ancla: la línea entre los dos grupos.",
    camara: {
      a: "PLANO MEDIO frontal de los cuatro, dos a cada lado del eje del cuadro.",
      b: "la cámara ha hecho un TRAVELLING LATERAL hacia la derecha siguiendo a los que se apartan: ahora los dos de la izquierda han quedado al borde del cuadro y los de la derecha ocupan el centro, de espaldas, con el arco encima de ellos.",
    },
    ini: "los dos de la izquierda tienen la cara alzada hacia el arco; los de la derecha están bajando la vista y empezando a girarse.",
    fin: "los dos de la derecha se han girado del todo y ya se alejan dando la espalda al arco, mientras los de la izquierda siguen con la cara alzada al fondo del cuadro.",
  }, "miedo teatral, gritos, huida en panico, una actitud claramente buena y otra mala"),

  // b7 — Una mujer que iba a parir apretó una esmeraldina. Un enfermo pidió.
  escp("b7a", [ref("mujer_parto_ofrenda"), ref("valle_anegado_arco")], {
    comun: "Luz de tarde de lado con el color del arco al fondo, fuera de foco. LA MISMA mujer encinta de la referencia, con una mano sosteniendo el vientre. Objeto ancla: el puño sobre la piedra.",
    camara: {
      a: "PLANO MEDIO CORTO de tres cuartos: se la ve del pecho para arriba y la mano del vientre entra por abajo.",
      b: "la cámara ha DESCENDIDO y se ha acercado hasta la mano: PLANO DETALLE del puño cerrado y del vientre, con su cara cortada por el borde superior y el arco convertido en manchas de color detrás.",
    },
    ini: "la mano se está cerrando sobre una esmeraldina pequeña y ella empieza a levantar los ojos.",
    fin: "el puño está cerrado del todo sobre la piedra y se le marcan los nudillos; la otra mano ha subido a juntarse con ella sobre el vientre.",
  }, "parto, sangre, dolor extremo, desnudez, milagro, resplandor"),
  escp("b7b", [ref("enfermo_calenturas"), ref("mujer_parto_ofrenda")], {
    comun: "Misma luz lateral de tarde. EL MISMO enfermo de la referencia al lado y algo más atrás de LA MISMA mujer de la referencia; los dos piden a la vez y ninguno mira al otro. Objeto ancla: su mano.",
    camara: {
      a: "PLANO MEDIO de los dos en profundidad: ella delante y desenfocada, él detrás y nítido.",
      b: "la cámara ha RETROCEDIDO y se ha abierto a un PLANO GENERAL del interior: los dos pequeños, cada uno en su rincón del cuarto, con el espacio vacío entre ellos ocupando el centro del cuadro.",
    },
    ini: "él está abriendo la boca para pedir y la mano le sube apenas desde la manta.",
    fin: "él ha terminado de hablar y la mano le ha caído sobre la manta; desde lejos se ve que los dos han pedido lo mismo sin mirarse ni saberlo.",
  }, "curacion, milagro, resplandor, muerte, sangre, sacerdote"),

  // b8 — No vieron un rostro: el arco es el aire volviéndose luz.
  esc("b8a", [ref("valle_anegado_arco")], {
    comun: "EL MISMO arco de la referencia visto tan cerca que se ve de qué está hecho: capas de papel translúcido de color superpuestas, con el aire y la llovizna pasando ENTRE ellas, sin borde duro ni superficie sólida. No hay rostro, no hay cara, no hay forma. Objeto ancla: el color que se arma entre las capas.",
    camara: {
      a: "PLANO MACRO pegado al cuerpo del arco: sólo capas de color y hilos de lluvia cruzándolas.",
      b: "la cámara ha ATRAVESADO el arco y ha salido por el otro lado retrocediendo: ahora se ve desde detrás y a media distancia, con el valle gris al fondo a través de él.",
    },
    ini: "la llovizna cruza las capas y los colores están revueltos y sin orden.",
    fin: "vistas desde el otro lado las capas se han recompuesto en franjas limpias y a través de ellas se transparenta el valle; sigue sin haber ningún borde sólido ni ninguna figura.",
  }, "rostro, ojos, boca, silueta humana, figura en las nubes, animal, simbolo"),
  escp("b8b", [ref("mujer_parto_ofrenda")], {
    comun: "Luz suave y baja. LA MISMA mujer de la referencia con los ojos cerrados y la mano cerrada sobre la piedra. No se ha curado nada; sólo respira mejor. Objeto ancla: los hombros.",
    camara: {
      a: "PRIMER PLANO de tres cuartos, la cara llenando el cuadro.",
      b: "la cámara ha RETROCEDIDO y ha bajado hasta un PLANO MEDIO LARGO lateral: se la ve sentada entera contra la pared, pequeña en el cuarto, con la luz cayéndole de un lado.",
    },
    ini: "tiene los hombros altos y está empezando a tomar aire despacio.",
    fin: "ha soltado el aire, los hombros le han bajado y el cuerpo se ha aflojado contra la pared; sigue igual de encinta y no hay resplandor alguno.",
  }, "milagro, resplandor, lagrimas, exaltacion, parto, dolor"),

  // b9 — El arco no se queda. La señal se repite donde el agua se despide.
  esc("b9a", [ref("valle_anegado_arco"), ref("sabana_cultivos")], {
    comun: "Luz de tarde que empieza a irse. EL MISMO arco de la referencia sobre el valle ya sembrado, con los cultivos recuperados debajo. Objeto ancla: el arco que se apaga.",
    camara: {
      a: "PLANO MEDIO del pie del arco donde toca la tierra sembrada, con mazorcas nuevas en primer término.",
      b: "la cámara ha SUBIDO siguiendo el arco hasta muy alto y ha retrocedido: GRAN PLANO GENERAL en el que se ve el arco entero sobre el valle y lo poco que le queda.",
    },
    ini: "el color está entero en el pie del arco y apenas empieza a perder fuerza.",
    fin: "desde arriba se ve que el arco se ha apagado desde un extremo hasta pasada la cumbre y está deshecho en más de la mitad; sólo el otro pie sigue vivo sobre los cultivos.",
  }, "personas, rostro, sol, noche cerrada"),
  esc("b9b", [ref("salto_tequendama"), ref("valle_anegado_arco")], {
    comun: "Luz húmeda de tarde. EL MISMO salto de la referencia con la niebla de espuma subiendo. Objeto ancla: el arco pequeño que nace en la espuma.",
    camara: {
      a: "PLANO GENERAL en contrapicado desde el fondo del cañón, helechos a contraluz en el borde y el salto entero cayendo.",
      b: "la cámara ha AVANZADO hacia la niebla y se ha metido dentro de ella, subiendo: PLANO MEDIO dentro del vapor, con el agua cayendo desenfocada al fondo y el arco pequeño ocupando el centro.",
    },
    ini: "dentro de la niebla empieza a formarse un arco pequeño de los mismos colores, todavía incompleto y débil.",
    fin: "dentro del vapor el arco pequeño se ha cerrado entero y se ve nítido y saturado a un brazo de la cámara: la señal ha vuelto donde el agua se despide.",
  }, "personas, turistas, barandas, rostro en el arco"),
]);
