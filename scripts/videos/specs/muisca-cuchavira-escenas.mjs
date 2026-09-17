// Keyframes de Cuchavira — 9 bloques × 2 escenas × 2 cuadros = 36 imágenes ≈ 90 s.
// Guion: guion-cuchavira-v2.json (N=9) · Acta: acta-cuchavira.json
// DOCTRINA v3: cada escena es un par A→B (ver _muisca-comun.mjs).
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
    comun: "GRAN PLANO GENERAL en picado, luz gris plomo sin sol. LA MISMA sabana anegada de la referencia y LOS MISMOS bohíos de la referencia con el agua a media pared; por el borde del cuadro queda una franja de tierra alta. Capa de primer plano: una cerca medio hundida. Objeto ancla: la franja de tierra alta.",
    ini: "el agua turbia ya tapó los caminos, pero la franja de tierra alta sigue entera y seca y la llovizna cae fina.",
    fin: "el agua subió y tomó la franja de tierra alta, que ya sólo asoma como una línea oscura bajo la lámina, y la cerca del primer plano quedó más hundida.",
  }, "personas, botes, cadaveres, dramatismo moderno, sol, arcoiris"),
  esc("b1b", [ref("rocas_tequendama"), ref("sabana_anegada")], {
    comun: "PLANO GENERAL FRONTAL a la altura del agua, luz plana y fría. LAS MISMAS peñas de la referencia al fondo cerrando el valle, con el agua llegando a su pie; el encuadre está hecho para que se entienda el encierro. Capa de primer plano: el agua arremolinada. Objeto ancla: el pie de las peñas.",
    ini: "el agua gira en remolinos lentos contra la roca sin encontrar por dónde salir y la niebla está detenida a media pared.",
    fin: "el agua subió un palmo sobre la roca y los remolinos se abrieron más anchos y más lentos, con la niebla bajada y deslizándose pegada a la pared.",
  }, "cascada, salto de agua, espuma, grieta abierta, personas, vara"),

  // b2 — Subieron a las lomas. Aflojó la lluvia y se tendió un arco.
  escp("b2a", [ref("familias_muiscas"), ref("loma_pelada_noche"), ref("sabana_anegada")], {
    comun: "PLANO GENERAL, lluvia fina. Gente de LAS MISMAS familias de la referencia de pie en lo alto de LA MISMA loma de la referencia, DE ESPALDAS, con el agua crecida allá abajo. Capa de primer plano: el barro de la loma. Objeto ancla: las cabezas.",
    ini: "todos miran hacia abajo, al agua que sigue creciendo, y sólo dos han empezado a girar la cabeza hacia el otro lado del cielo.",
    fin: "casi todas las cabezas se giraron ya hacia ese otro lado del cielo, la lluvia amainó y el agua de abajo brilla.",
  }, "rostros de frente, panico, llanto, multitud desbordada, arcoiris ya visible"),
  esc("b2b", [ref("valle_anegado_arco"), ref("sabana_anegada")], {
    comun: "GRAN PLANO GENERAL, el cielo abriéndose con la lluvia todavía cayendo al fondo. EL MISMO valle anegado de la referencia, todo él en grises. Capa de primer plano: juncos a contraluz. Objeto ancla: el arco.",
    ini: "un arco ENORME de bandas de papel de color —rojo, ocre, verde, azul— apoyó un extremo en el agua y se tiende hasta media altura del cielo, sin cerrar todavía por el otro lado; es el único color del cuadro.",
    fin: "el arco cerró el otro extremo y cruza el cielo entero de lado a lado, enorme y luminoso, con su reflejo ya armado sobre el agua.",
  }, "rostro en el arco, figura, angel, personas, arco palido o descolorido, sol"),

  // b3 — Del arco vino una voz. (CITA: no quitaría los ríos)
  esc("b3a", [ref("valle_anegado_arco")], {
    comun: "PLANO GENERAL CERRADO sobre la cumbre del MISMO arco de la referencia contra un cielo que se despeja. El arco llena el cuadro con sus franjas de color y sobre él NO HAY NADIE: la cumbre está vacía y el encuadre está hecho para que esa ausencia se note, porque la voz no tiene cuerpo. Capa de primer plano: una nube baja cruzando. Objeto ancla: la cumbre vacía del arco.",
    ini: "las nubes todavía tapan parte de las franjas y el color está apagado.",
    fin: "las nubes se retiraron por detrás y las franjas quedaron enteras y firmes, con la cumbre igual de vacía que antes.",
  }, "figura de pie en el arco, rostro, silueta, mano, ojos, boca, angel, Bochica"),
  escp("b3b", [ref("familias_muiscas"), ref("loma_pelada_noche")], {
    comun: "PLANO MEDIO LARGO, luz dorada baja que llega de lado. Un grupo de LAS MISMAS familias de la referencia en la loma; a quien oyen está fuera de cuadro y nadie se arrodilla. Capa de primer plano: hombros en sombra. Objeto ancla: las caras.",
    ini: "unos pocos ya tienen la cara alzada hacia el cielo y los demás están empezando a levantar la cabeza, a destiempo unos de otros.",
    fin: "todos tienen ya la cara alzada hacia el mismo punto del cielo y las mantas ondean; ninguno se arrodilló.",
  }, "arrodillarse, manos juntas, adoracion, llanto, figura divina en cuadro"),

  // b4 — Arrojó una vara de oro y las peñas se partieron.
  esc("b4a", [ref("vara_dorada"), ref("rocas_tequendama")], {
    comun: "PLANO GENERAL desde el nivel del agua, luz dorada de tarde. LA MISMA vara dorada de la referencia en vuelo horizontal sobre el agua represada, con LAS MISMAS peñas de la referencia al fondo cerrando el valle. Capa de primer plano: la superficie del agua. Objeto ancla: la vara en vuelo.",
    ini: "la vara va a mitad de camino y deja tras de sí una estela fina de luz; la roca del fondo está entera.",
    fin: "la vara alcanzó la junta de las peñas y quedó clavada en ella, la estela cruza ahora el cuadro entero y en la roca se abrió una grieta fina y oscura.",
  }, "personas, mano que lanza, cascada ya formada, espuma, explosion, fuego"),
  esc("b4b", [ref("sabana_cultivos"), ref("sabana_anegada")], {
    comun: "GRAN PLANO GENERAL en picado, la luz aclarando. LA MISMA sabana de la referencia con el légamo marcando franjas de hasta dónde llegó el agua y los surcos de LOS MISMOS cultivos de la referencia por debajo. Capa de primer plano: légamo agrietado. Objeto ancla: el borde del agua.",
    ini: "el agua todavía cubre medio valle y junto al légamo asoman apenas los primeros surcos.",
    fin: "el agua se retiró hasta el fondo del valle y los surcos quedaron descubiertos casi hasta el horizonte, con la luz más clara.",
  }, "personas, celebracion, banderas, sol pleno, valle ya seco del todo"),

  // b5 — Abogado de parturientas y enfermos. Cintillos y figuras de oro bajo.
  escp("b5a", [ref("mujer_parto_ofrenda"), ref("templo_ofrendas")], {
    comun: "PLANO MEDIO, luz cálida y escasa de lámpara de sebo. LA MISMA mujer encinta de la referencia de perfil, ante el borde de una estera de ofrendas donde ya hay otras ofrendas puestas. Capa de primer plano: la estera en sombra. Objeto ancla: el cintillo tejido.",
    ini: "sostiene todavía con las dos manos un cintillo tejido y una figurilla pequeña de oro bajo, a un palmo de la estera.",
    fin: "el cintillo y la figurilla quedaron dejados sobre la estera y sus manos se retiraron hacia el vientre, con la llama de sebo latiendo.",
  }, "parto en curso, sangre, dolor, desnudez, cruces, sacerdotes, oro macizo"),
  escp("b5b", [ref("enfermo_calenturas"), ref("casa_barro_paja")], {
    comun: "PLANO MEDIO, penumbra de interior con una abertura de luz en la pared de barro. EL MISMO enfermo de calenturas de la referencia, envuelto en su manta y sentado contra la pared. Nadie lo toca. Capa de primer plano: el borde de la manta. Objeto ancla: su cara.",
    ini: "tiene la cara vuelta hacia la sombra y está empezando a girarla hacia la abertura; suda y respira corto.",
    fin: "terminó de girar la cara hacia la luz y la claridad le da de lleno en la frente, con el polvo flotando en el haz; sigue enfermo y no hay resplandor ni curación.",
  }, "curacion, resplandor sobre el cuerpo, manos sanadoras, milagro, sacerdote, muerte"),

  // b6 — Cuentas de la costa y esmeraldinas. No todos se alegraban.
  esc("b6a", [ref("esmeralda_algodones"), ref("manta_reparto")], {
    comun: "PLANO DETALLE cenital, luz lateral fría. LA MISMA esmeralda sobre algodones de la referencia junto a sartas de cuentas de concha traídas de la costa, dispuestas sobre una manta. Capa de primer plano: el canto de la manta. Objeto ancla: la esmeralda.",
    ini: "una mano entra por el borde del cuadro acercando otra cuenta al montón, sin haberla soltado.",
    fin: "la cuenta quedó dejada junto a las demás y la mano salió del cuadro, con las sartas rodadas un poco.",
  }, "oro macizo, joyeria moderna, monedas, tesoro, personas de cuerpo entero"),
  escp("b6b", [ref("familias_muiscas"), ref("valle_anegado_arco")], {
    comun: "PLANO MEDIO de un grupo de LAS MISMAS familias de la referencia PARTIDO EN DOS ante la misma luz, con el arco de color al fondo. La misma señal y dos lecturas opuestas en el mismo cuadro, sin que ninguna se vea mejor que la otra. Capa de primer plano: el hombro de uno de los de la derecha. Objeto ancla: la línea entre los dos grupos.",
    ini: "en la mitad izquierda dos personas tienen la cara alzada hacia el arco; en la derecha otras dos están bajando la vista y empezando a girarse hacia otro lado.",
    fin: "los dos de la derecha se giraron del todo y le dan la espalda al arco, mientras los dos de la izquierda siguen con la cara alzada exactamente igual.",
  }, "miedo teatral, gritos, huida en panico, una actitud claramente buena y otra mala"),

  // b7 — Una mujer que iba a parir apretó una esmeraldina. Un enfermo pidió.
  escp("b7a", [ref("mujer_parto_ofrenda"), ref("valle_anegado_arco")], {
    comun: "PLANO MEDIO CORTO, luz de tarde que entra de lado con el color del arco al fondo, fuera de foco. LA MISMA mujer encinta de la referencia, de tres cuartos, con una mano sosteniendo el vientre. Capa de primer plano: su mano sobre el vientre. Objeto ancla: el puño sobre la piedra.",
    ini: "la otra mano se está cerrando sobre una esmeraldina pequeña y ella empieza a levantar los ojos.",
    fin: "el puño quedó cerrado del todo sobre la piedra y los ojos terminaron de subir; tomó aire y tiene el pecho alto.",
  }, "parto, sangre, dolor extremo, desnudez, milagro, resplandor"),
  escp("b7b", [ref("enfermo_calenturas"), ref("mujer_parto_ofrenda")], {
    comun: "PLANO MEDIO, misma luz lateral de tarde. EL MISMO enfermo de la referencia al lado y algo más atrás de LA MISMA mujer de la referencia; los dos piden a la vez y ninguno mira al otro. Capa de primer plano: la manta del enfermo. Objeto ancla: su mano.",
    ini: "él está abriendo la boca para pedir y la mano le sube apenas desde la manta.",
    fin: "terminó de hablar, tiene la boca cerrada y la mano le cayó sobre la manta, mientras ella sigue con los ojos arriba igual que estaba.",
  }, "curacion, milagro, resplandor, muerte, sangre, sacerdote"),

  // b8 — No vieron un rostro: el arco es el aire volviéndose luz.
  esc("b8a", [ref("valle_anegado_arco")], {
    comun: "PLANO CERRADÍSIMO sobre el cuerpo del MISMO arco de la referencia, tan cerca que se ve de qué está hecho: capas de papel translúcido de color superpuestas, con el aire y la llovizna pasando ENTRE ellas, sin borde duro ni superficie sólida. No hay rostro, no hay cara, no hay forma: hay aire volviéndose luz. Capa de primer plano: hilos de lluvia. Objeto ancla: el color que se arma entre las capas.",
    ini: "la llovizna cruza las capas y los colores están revueltos y sin orden.",
    fin: "la llovizna pasó y los colores se recompusieron detrás en franjas limpias, sin que aparezca ningún borde sólido ni ninguna figura.",
  }, "rostro, ojos, boca, silueta humana, figura en las nubes, animal, simbolo"),
  escp("b8b", [ref("mujer_parto_ofrenda")], {
    comun: "PRIMER PLANO, luz suave y baja. LA MISMA mujer de la referencia de tres cuartos, con los ojos cerrados y la mano cerrada sobre la piedra. No se ha curado nada; sólo respira mejor. Capa de primer plano: su mano cerrada. Objeto ancla: los hombros.",
    ini: "tiene los hombros altos y está empezando a tomar aire despacio.",
    fin: "soltó el aire y los hombros le bajaron, con los párpados temblando y la cara más suelta; sigue igual de encinta y no hay resplandor alguno.",
  }, "milagro, resplandor, lagrimas, exaltacion, parto, dolor"),

  // b9 — El arco no se queda. La señal se repite donde el agua se despide.
  esc("b9a", [ref("valle_anegado_arco"), ref("sabana_cultivos")], {
    comun: "GRAN PLANO GENERAL, luz de tarde que empieza a irse. EL MISMO arco de la referencia tendido sobre el valle ya sembrado, con los cultivos recuperados debajo. Capa de primer plano: mazorcas nuevas en sombra. Objeto ancla: el extremo del arco que se apaga.",
    ini: "las franjas están enteras salvo por un extremo, donde el color empieza a perder fuerza.",
    fin: "el color se apagó desde ese extremo hasta pasada la cumbre y el arco está deshecho en más de la mitad; sólo el otro pie sigue vivo y la luz de la tarde bajó.",
  }, "personas, rostro, arco intacto y quieto, sol, noche cerrada"),
  esc("b9b", [ref("salto_tequendama"), ref("valle_anegado_arco")], {
    comun: "PLANO GENERAL en contrapicado, luz húmeda de tarde. EL MISMO salto de la referencia con la niebla de espuma subiendo. Capa de primer plano: helechos a contraluz. Objeto ancla: el arco pequeño que nace en la espuma.",
    ini: "dentro de la niebla empieza a formarse un arco pequeño de los mismos colores, todavía incompleto y débil.",
    fin: "el arco pequeño terminó de formarse dentro de la niebla, completo y nítido, mientras el agua sigue cayendo: la señal volvió donde el agua se despide.",
  }, "personas, turistas, barandas, rostro en el arco"),
]);
