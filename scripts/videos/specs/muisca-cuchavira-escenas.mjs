// Keyframes de Cuchavira — 9 bloques × 2 = 18 cuadros ≈ 90 s.
// Guion: guion-cuchavira-v2.json (N=9) · Acta: acta-cuchavira.json
//
// DESLINDE DURO: Cuchavira NO TIENE ROSTRO. La fuente lo dice expresamente: es
// el aire mismo volviéndose luz mientras dura el agua en el aire. NINGUNA
// escena le da cara, cuerpo ni silueta. El personaje del video ES EL ARCO.
//
// · Pero el arco SE VE, y grande: ésta es la ficha del prodigio y no se apaga.
//   Lleva sus franjas de color sobre un mundo que está en grises.
// · El arco NO es puro buen augurio: hubo quien bajó la vista porque un arco
//   también anuncia desgracia. Esa ambivalencia va en cuadro (b6b).
// · Lo que reciben la mujer y el enfermo NO es un milagro: es alivio. Ella
//   respira despacio; él sabe que su fiebre tendrá un final. Nada de curación.
// · Los ríos NO se quitan: en los tiempos secos harán falta.
// · No se cruza con `el-tequendama` ni con `chibchacum`: allá el tema es el
//   salto y la carga de la tierra; aquí es el arco y a quién ampara.
//
// GUION DE LUZ: gris de agua sin salida → lluvia aflojando → EL ARCO como
// único color → oro de la vara → tarde de ofrendas → cielo partido en dos
// lecturas → luz de esmeralda → aire volviéndose luz → colores apagándose.

import { DIRECCION, VESTUARIO, AVOID_BASE, ref, mkKf, mkKfp } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-cuchavira-escenas";
export const OUT_DIR = "muiscas/videos/cuchavira/keyframes";
export { DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; cualquier rostro, cara, ojos, boca, silueta o cuerpo dentro del arco o formado por el arco; dios antropomorfo en el cielo; angeles; manos saliendo de las nubes; arco palido, lechoso o descolorido; milagro visible, curacion instantanea, resplandor sobre los enfermos";
export const PALETTE =
  "gris plomo de invierno, pardo de agua turbia, verde apagado de loma, crema de algodon crudo; EL ARCO es la unica fuente de color saturado del video y lleva sus franjas enteras; el oro solo en la vara y en las figuras de ofrenda; sin neones";

const kf = mkKf(), kfp = mkKfp();

export const ITEMS = [
  // b1 — La sabana se llenó. El agua no hallaba salida.
  kf("b1a", [ref("sabana_anegada"), ref("casa_tierras_llanas")],
    "GRAN PLANO GENERAL en picado, luz gris plomo sin sol. LA MISMA sabana anegada de la referencia con el agua todavía SUBIENDO: los caminos ya desaparecidos bajo la lámina turbia y LOS MISMOS bohíos de la referencia con el agua a media pared. Queda una franja de tierra alta que el agua aún no ha tomado. SE MOVERÁ: el agua sigue subiendo y va tomando la franja alta, la llovizna cae. Capa de primer plano: una cerca medio hundida. Objeto ancla: la franja de tierra que va a perderse.",
    "personas, botes, cadaveres, dramatismo moderno, sol, arcoiris"),
  kf("b1b", [ref("rocas_tequendama"), ref("sabana_anegada")],
    "PLANO GENERAL FRONTAL a la altura del agua, luz plana y fría. LAS MISMAS peñas de la referencia al fondo cerrando el valle, con el agua llegando a su pie y girando en remolinos lentos sin encontrar por dónde salir. El encuadre está hecho para que se entienda el encierro. SE MOVERÁ: el agua gira contra la roca y sube, la niebla se desliza por la pared. Capa de primer plano: el agua arremolinada. Objeto ancla: el pie de las peñas.",
    "cascada, salto de agua, espuma, grieta abierta, personas, vara"),

  // b2 — Subieron a las lomas. Aflojó la lluvia y se tendió un arco.
  kfp("b2a", [ref("familias_muiscas"), ref("loma_pelada_noche"), ref("sabana_anegada")],
    "PLANO GENERAL, lluvia fina aflojando. Gente de LAS MISMAS familias de la referencia de pie en lo alto de LA MISMA loma de la referencia, DE ESPALDAS y mirando hacia abajo el agua que sigue creciendo; algunos se están girando hacia el otro lado del cielo, donde algo empieza a pasar. SE MOVERÁ: más cabezas se giran hacia el mismo lado, la lluvia amaina, el agua de abajo brilla. Capa de primer plano: el barro de la loma. Objeto ancla: las cabezas que empiezan a girarse.",
    "rostros de frente, panico, llanto, multitud desbordada, arcoiris ya visible"),
  kf("b2b", [ref("valle_anegado_arco"), ref("sabana_anegada")],
    "GRAN PLANO GENERAL, el cielo abriéndose con la lluvia todavía cayendo al fondo. EL MISMO valle anegado de la referencia y, TENDIÉNDOSE sobre él, un arco ENORME y luminoso de bandas de papel de color —rojo, ocre, verde, azul— que ya apoyó un extremo en el agua y está creciendo hacia el otro lado, donde aún le falta cerrar. Es el único color del cuadro; todo lo demás es gris. SE MOVERÁ: el arco termina de cerrarse y su reflejo se arma en el agua. Capa de primer plano: juncos a contraluz. Objeto ancla: el extremo del arco que avanza.",
    "rostro en el arco, figura, angel, personas, arco palido o descolorido, sol"),

  // b3 — Del arco vino una voz. (CITA: no quitaría los ríos)
  kf("b3a", [ref("valle_anegado_arco")],
    "PLANO GENERAL CERRADO sobre la cumbre del MISMO arco de la referencia, contra un cielo que se despeja. El arco llena el cuadro con sus franjas de color, y sobre él NO HAY NADIE: la cumbre está vacía y el encuadre está construido para que esa ausencia se note, porque la voz no tiene cuerpo. SE MOVERÁ: las franjas del arco vibran y se afirman, las nubes se retiran por detrás. Capa de primer plano: una nube baja cruzando. Objeto ancla: la cumbre vacía del arco.",
    "figura de pie en el arco, rostro, silueta, mano, ojos, boca, angel, Bochica"),
  kfp("b3b", [ref("familias_muiscas"), ref("loma_pelada_noche")],
    "PLANO MEDIO LARGO, luz dorada baja que llega de lado. Un grupo de LAS MISMAS familias de la referencia en la loma, ALZANDO la cara hacia el cielo a destiempo unos de otros: unos ya miran arriba y otros están empezando a levantar la cabeza. Nadie se arrodilla. A quien oyen está fuera de cuadro. SE MOVERÁ: el resto termina de alzar la cara, las mantas ondean. Capa de primer plano: hombros en sombra. Objeto ancla: las caras alzándose.",
    "arrodillarse, manos juntas, adoracion, llanto, figura divina en cuadro"),

  // b4 — Arrojó una vara de oro y las peñas se partieron.
  kf("b4a", [ref("vara_dorada"), ref("rocas_tequendama")],
    "PLANO GENERAL desde el nivel del agua, luz dorada de tarde. LA MISMA vara dorada de la referencia EN VUELO horizontal sobre el agua represada, a mitad de camino hacia LAS MISMAS peñas de la referencia que están al fondo, dejando tras de sí una estela fina de luz. Todavía no ha llegado. SE MOVERÁ: la vara sigue volando y alcanza la junta de las peñas, la estela se alarga. Capa de primer plano: la superficie del agua. Objeto ancla: la vara en vuelo.",
    "personas, mano que lanza, peñas ya partidas, cascada, espuma, explosion"),
  kf("b4b", [ref("sabana_cultivos"), ref("sabana_anegada")],
    "GRAN PLANO GENERAL en picado, la luz aclarando. LA MISMA sabana de la referencia VACIÁNDOSE: el agua retrocede y deja ver los surcos de LOS MISMOS cultivos de la referencia, con el légamo marcando franjas de hasta dónde llegó; todavía queda medio valle bajo el agua. SE MOVERÁ: el agua sigue retirándose y descubre más surcos, la luz aclara. Capa de primer plano: légamo agrietado. Objeto ancla: el borde del agua retirándose.",
    "personas, celebracion, banderas, sol pleno, valle ya seco"),

  // b5 — Abogado de parturientas y enfermos. Cintillos y figuras de oro bajo.
  kfp("b5a", [ref("mujer_parto_ofrenda"), ref("templo_ofrendas")],
    "PLANO MEDIO, luz cálida y escasa de lámpara de sebo. LA MISMA mujer encinta de la referencia, de perfil, DEJANDO con las dos manos un cintillo tejido y una figurilla pequeña de oro bajo en el borde de una estera de ofrendas, sin haberlos soltado todavía. Alrededor, otras ofrendas ya puestas. SE MOVERÁ: las manos sueltan la ofrenda y se retiran hacia el vientre, la llama late. Capa de primer plano: la estera en sombra. Objeto ancla: el cintillo que aún no se suelta.",
    "parto en curso, sangre, dolor, desnudez, cruces, sacerdotes, oro macizo"),
  kfp("b5b", [ref("enfermo_calenturas"), ref("casa_barro_paja")],
    "PLANO MEDIO, penumbra de interior con una abertura de luz. EL MISMO enfermo de calenturas de la referencia, envuelto en su manta y sentado contra la pared de barro, EMPEZANDO a girar la cara hacia la abertura por donde entra la claridad. Suda, respira corto. Nadie lo toca. SE MOVERÁ: termina de girar la cara hacia la luz, el pecho sube y baja, el polvo flota en el haz. Capa de primer plano: el borde de la manta. Objeto ancla: la cara girándose hacia la luz.",
    "curacion, resplandor sobre el cuerpo, manos sanadoras, milagro, sacerdote, muerte"),

  // b6 — Cuentas de la costa y esmeraldinas. No todos se alegraban.
  kf("b6a", [ref("esmeralda_algodones"), ref("manta_reparto")],
    "PLANO DETALLE cenital, luz lateral fría. LA MISMA esmeralda sobre algodones de la referencia junto a sartas de cuentas de concha traídas de la costa, dispuestas sobre una manta; una mano entra por el borde y está ACERCANDO otra cuenta al montón sin haberla dejado. SE MOVERÁ: la mano deja la cuenta y se retira, las sartas ruedan un poco. Capa de primer plano: el canto de la manta. Objeto ancla: la esmeralda.",
    "oro macizo, joyeria moderna, monedas, tesoro, personas de cuerpo entero"),
  kfp("b6b", [ref("familias_muiscas"), ref("valle_anegado_arco")],
    "PLANO MEDIO de un grupo PARTIDO EN DOS ante la misma luz: en la mitad izquierda, dos personas de LAS MISMAS familias de la referencia con la cara alzada hacia el arco de color que se ve al fondo; en la derecha, otras dos BAJANDO la vista y girándose hacia otro lado. La misma señal y dos lecturas opuestas en el mismo cuadro, sin que ninguna se vea mejor. SE MOVERÁ: los de la derecha terminan de girarse y se van, los de la izquierda siguen mirando. Capa de primer plano: el hombro de uno de los que se apartan. Objeto ancla: la línea entre los dos grupos.",
    "miedo teatral, gritos, huida en panico, una actitud claramente buena y otra mala"),

  // b7 — Una mujer que iba a parir apretó una esmeraldina. Un enfermo pidió.
  kfp("b7a", [ref("mujer_parto_ofrenda"), ref("valle_anegado_arco")],
    "PLANO MEDIO CORTO, luz de tarde que entra de lado con el color del arco al fondo, fuera de foco. LA MISMA mujer encinta de la referencia, de tres cuartos, CERRANDO la mano sobre una esmeraldina pequeña mientras EMPIEZA a levantar los ojos hacia arriba. La otra mano sostiene el vientre. SE MOVERÁ: la mano termina de cerrarse, los ojos acaban de subir, ella toma aire. Capa de primer plano: su mano sobre el vientre. Objeto ancla: el puño cerrándose sobre la piedra.",
    "parto, sangre, dolor extremo, desnudez, milagro, resplandor"),
  kfp("b7b", [ref("enfermo_calenturas"), ref("mujer_parto_ofrenda")],
    "PLANO MEDIO, misma luz lateral. A su lado y algo más atrás, EL MISMO enfermo de la referencia ABRIENDO la boca para pedir lo mismo que ella, la mano subiendo apenas desde la manta. Los dos piden a la vez y ninguno mira al otro. SE MOVERÁ: él termina de hablar y la mano cae, ella sigue con los ojos arriba. Capa de primer plano: la manta del enfermo. Objeto ancla: su mano subiendo.",
    "curacion, milagro, resplandor, muerte, sangre, sacerdote"),

  // b8 — No vieron un rostro: el arco es el aire volviéndose luz.
  kf("b8a", [ref("valle_anegado_arco")],
    "PLANO GENERAL CERRADÍSIMO sobre el cuerpo del MISMO arco de la referencia, tan cerca que se ve de qué está hecho: capas de papel translúcido de color superpuestas con el aire y la llovizna pasando ENTRE ellas, sin borde duro ni superficie sólida. No hay rostro, no hay cara, no hay forma: hay aire volviéndose luz. SE MOVERÁ: la llovizna sigue cruzando las capas y los colores se recomponen detrás. Capa de primer plano: hilos de lluvia. Objeto ancla: el color que se arma entre las capas.",
    "rostro, ojos, boca, silueta humana, figura en las nubes, animal, simbolo"),
  kfp("b8b", [ref("mujer_parto_ofrenda")],
    "PRIMER PLANO, luz suave y baja. LA MISMA mujer de la referencia de tres cuartos con los ojos cerrados, EMPEZANDO a tomar aire despacio: los hombros bajan, la mano sigue cerrada sobre la piedra. No se ha curado nada; sólo respira mejor. SE MOVERÁ: el pecho sube y baja una vez entera, los párpados tiemblan. Capa de primer plano: su mano cerrada. Objeto ancla: los hombros que bajan.",
    "milagro, resplandor, lagrimas, exaltacion, parto, dolor"),

  // b9 — El arco no se queda. La señal se repite donde el agua se despide.
  kf("b9a", [ref("valle_anegado_arco"), ref("sabana_cultivos")],
    "GRAN PLANO GENERAL, luz de tarde que empieza a irse. EL MISMO arco de la referencia todavía tendido sobre el valle ya sembrado, pero con las franjas de color EMPEZANDO a perder fuerza por un extremo, mientras el otro sigue vivo. Debajo, los cultivos recuperados. SE MOVERÁ: el color se apaga de un extremo al otro y el arco se deshace, la luz de la tarde baja. Capa de primer plano: mazorcas nuevas en sombra. Objeto ancla: el extremo que se apaga.",
    "personas, rostro, arco intacto y quieto, sol, noche cerrada"),
  kf("b9b", [ref("salto_tequendama"), ref("valle_anegado_arco")],
    "PLANO GENERAL en contrapicado, luz húmeda de tarde. EL MISMO salto de la referencia con la niebla de espuma subiendo y, EMPEZANDO A FORMARSE dentro de esa niebla, un arco pequeño de los mismos colores, todavía incompleto. La señal vuelve donde el agua se despide. SE MOVERÁ: el arco pequeño termina de formarse en la niebla mientras el agua sigue cayendo. Capa de primer plano: helechos a contraluz. Objeto ancla: el arco naciendo en la espuma.",
    "personas, turistas, barandas, rostro en el arco, arco ya completo y quieto"),
];
