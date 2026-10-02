// Keyframes de Los mellizos y los hombres-tigres — 18 bloques × 2 escenas × 2
// cuadros = 72 imágenes ≈ 180 s.
// Guion: guion-los-mellizos-transformadores-v2.json (N=18) · Acta: acta-los-mellizos-transformadores.json (36 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _wayuu-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · EL EMBARAZO NO ES UNIÓN NI VIOLACIÓN NARRADA: Simirriuu TROPIEZA CON SU
//   SENO DANZANDO, y desde ese instante ella queda encinta. El canon lo cuenta
//   así y NO LO EXPLICA; la imagen tampoco.
// · LOS HIJOS ACTÚAN DESDE EL VIENTRE: hablan, consuelan, piden armas, hacen
//   brotar manantiales y TAMBIÉN CASTIGAN. Son agentes antes de nacer, y nunca
//   se les dibuja dentro del cuerpo.
// · LA REPRESALIA DE LOS NIÑOS CONTRA SU PROPIA MADRE ESTÁ EN EL CANON Y NO SE
//   SUAVIZA: ella les da una manotada y ELLOS LE BORRAN EL VERDOR.
// · KALAMANTUUNAY RECIBE A MANNA CON AFECTO Y LE DA AGUA. EL HORROR VIENE DE
//   QUE CAMBIA DE IDEA: pensaba comérsela a solas y prefiere compartirla.
// · LOS MELLIZOS NACEN DE RESIDUOS escupidos entre las muelas, igual que
//   Maleiwa en su ficha. ACTÚAN COMO UNO SOLO.
// · LA VIEJA LOS CRÍA PARA ENGORDARLOS: el canasto de mimbre y los pellizcos
//   nocturnos SON CEBO, NO CUIDADO.
// · QUIENES REVELAN EL ORIGEN SON ANIMALES OFENDIDOS —la paloma a la que le
//   roban y un guacamayo—, y LOS NIÑOS LLORAN ANTES DE VENGARSE.
// · LAS ETIOLOGÍAS QUEDAN: las uñas contráctiles de los tigres y las almas de
//   los felinos esparcidas como alientos de Wanülüü.
//
// SENSIBILIDADES Y CÓMO SE RESUELVEN:
// · `manna` (sensible): su despedazamiento NO SE MUESTRA. El plano corta de la
//   seña de la vieja al claro vacío y después al algodón.
// · `tumajule` (restringida): se viste con el cuero cabelludo de la vieja. EL
//   INVENTARIO OBLIGA: «se representa EL DISFRAZ POR LA SILUETA Y EL ALGODÓN,
//   NUNCA EL DESPOJO».
// · `hombres_tigres` (restringida): son tigres, y sólo tigres. Nada de híbridos.
// · `yonna_de_juya` (sensible): SEGUNDA YONNA DEL CANON. «POLVAREDA, NO SALÓN.
//   LA LUZ SALE DEL POLVO», y con la coreografía exacta de la biblia.
//
// El inventario destaca DOS PARES: el del VERDOR —«verde con agua contra ocre
// de tolvanera, la escena que mejor enseña la paleta del corpus»— y el de
// FLECHAR LA LUNA, «la imagen más ambiciosa del corpus y la más nocturna».
// También manda diferenciar las CINCO especies del haz de varas: curarire,
// caujaro, albarico, carrizo y ceibote.

import { CONTEXTO, DIRECCION, AVOID_BASE, PALETTE_BASE, ref, esc, escp, armar } from "./_wayuu-comun.mjs";

export const SPEC_NAME = "wayuu-mellizos-escenas";
export const OUT_DIR = "wayuu/videos/los-mellizos-transformadores/keyframes";
export { CONTEXTO, DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; hibrido hombre-tigre, licantropo, cara humana en el felino, garras en una persona, transformacion a medias; canibalismo a la vista, despedazamiento, carne humana, restos, huesos, sangre, visceras, gore; cuero cabelludo, despojo, piel arrancada, mascara de piel, cabeza cortada; vientre abierto, feto, anatomia, parto, ecografia, voces dibujadas en el vientre; violacion, acto sexual, desnudez, insinuacion erotica; bebes monstruosos, niños demoniacos, ojos brillantes, resplandor; bruja de cuento, caldero con cuerpos, pentagramas, velas negras";
export const PALETTE =
  PALETTE_BASE + "; el PAR DEL VERDOR es el eje cromatico del mito: verde con agua contra ocre de tolvanera, uno al lado del otro; la noche de flechar la luna es el unico azul profundo del corpus wayuu";

const MN =
  "LA MISMA Manna de la referencia (mujer wayúu joven, manta larga hasta el tobillo con cenefa tejida, pelo negro suelto, descalza), SIEMPRE vestida y a media distancia";
const KL =
  "LA MISMA Kalamantuunay de la referencia (mujer muy anciana y enjuta, pelo blanco, manta oscura, sentada casi siempre DESMOTANDO ALGODÓN), de trato amable y sin un solo rasgo monstruoso";
const TG =
  "LOS MISMOS hombres-tigres de la referencia, que en cuadro son TIGRES REALES: pelaje ocre con rosetas, cuerpo pesado, enteramente animales";

export const ITEMS = armar([
  // b1 — Manna era hija del Corazón de la Tierra. La pretendía Simirriuu.
  escp("b1a", [ref("manna"), ref("costa_penascos"), ref("serrania_baja")], {
    comun: `Mañana de niebla. MANNA ERA HIJA DEL CORAZÓN DE LA TIERRA Y DEL ROCÍO DE LAS NIEBLAS: los padres están EXCLUIDOS del inventario y no aparecen. Se cuenta con ella y con la niebla que la nombra. ${MN}. Objeto ancla: la niebla sobre los morros.`,
    camara: {
      a: "PLANO MACRO de gotas de rocío colgando del canto de una piedra, con la niebla detrás.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de los morros junto al mar con ella pequeña de pie entre ellos y la niebla bajando.",
    },
    ini: "gotas de rocío cuelgan del canto de una piedra, con la niebla detrás.",
    fin: "desde arriba, ella está pequeña de pie entre los morros junto al mar y la niebla baja.",
  }, "dioses antropomorfos, aureola, resplandor, panteon, trono"),
  escp("b1b", [ref("simirriuu"), ref("llanura_cardonal")], {
    comun: `Mediodía de polvo. LA PRETENDÍA SIMIRRIUU, EL INVIERNO: es un hombre viejo y grande, y viene envuelto en su propia polvareda. Objeto ancla: la polvareda que lo trae.`,
    camara: {
      a: "PLANO MACRO de una tolvanera cerrada, con la arena girando y sin nada visible dentro.",
      b: "la cámara ha RETROCEDIDO y ha bajado: PLANO MEDIO de un hombre viejo y corpulento saliendo de la polvareda, con la manta batiéndole.",
    },
    ini: "una tolvanera cerrada, con la arena girando y sin nada visible dentro.",
    fin: "de la polvareda sale un hombre viejo y corpulento, con la manta batiéndole.",
  }, "monstruo de viento, tornado, cara en el polvo, resplandor, demonio"),

  // b2 — Era viejo y de voz terrible. En una fiesta de Juyá tropezó con su seno.
  escp("b2a", [ref("simirriuu"), ref("manna"), ref("yonna")], {
    comun: `Tarde de polvo. ERA VIEJO Y DE VOZ TERRIBLE Y ELLA LE TEMÍA: el miedo se cuenta con la distancia que ella mantiene. SEGUNDA YONNA DEL CANON: POLVAREDA, NO SALÓN, y con la coreografía exacta —círculo de arena, descalzos, LA MUJER AVANZA Y EL HOMBRE RETROCEDE, ella abre la manta a dos manos, el tamborero FUERA del círculo—. Objeto ancla: el círculo de arena.`,
    camara: {
      a: "PLANO MACRO de dos pies descalzos en la arena del círculo, uno avanzando y otro retrocediendo a un palmo.",
      b: "la cámara ha RETROCEDIDO y se ha elevado a cenital: PLANO EN PICADO del pioi entero con varias parejas, el tamborero fuera del trazo y el polvo levantándose de todo.",
    },
    ini: "dos pies descalzos en la arena del círculo, uno avanzando y otro retrocediendo a un palmo.",
    fin: "desde arriba se ve el círculo entero con varias parejas, el tamborero fuera del trazo y el polvo levantándose de todo.",
  }, "salon, fogata en el centro, tambor en el centro, plumas, hombre persiguiendo a la mujer"),
  escp("b2b", [ref("simirriuu"), ref("manna"), ref("yonna")], {
    comun: `Tarde. EN UNA FIESTA DE JUYÁ TROPEZÓ CON SU SENO: NO ES UNIÓN NI VIOLACIÓN. Es un tropiezo en la danza, y el canon no lo explica. Se cuenta con el roce del brazo y el paso en falso, sin nada más. Objeto ancla: el instante del tropiezo.`,
    camara: {
      a: "PLANO MACRO de un antebrazo rozando la tela de una manta al pasar, un instante.",
      b: "la cámara ha RETROCEDIDO de golpe: PLANO MEDIO de los dos separándose en el polvo, ella dando un paso atrás y él ya de espaldas, sin mirarse.",
    },
    ini: "un antebrazo roza la tela de una manta al pasar, un instante.",
    fin: "los dos se separan en el polvo: ella da un paso atrás y él ya va de espaldas, sin mirarse.",
  }, "acto sexual, violacion, forcejeo, desnudez, insinuacion, resplandor"),

  // b3 — Quedó encinta. Se encerró, y una noche sintió dos seres adentro.
  escp("b3a", [ref("manna"), ref("llanura_cardonal")], {
    comun: `Tarde. DESDE ESE INSTANTE QUEDÓ ENCINTA Y SINTIÓ UNA VIBRACIÓN EXTRAÑA: se cuenta con su cara y con la mano quieta sobre la manta, nunca con el cuerpo. Objeto ancla: la mano que se detiene.`,
    camara: {
      a: "PLANO MACRO de una mano parándose de golpe sobre la tela de la manta, a la altura de la cintura.",
      b: "la cámara ha SUBIDO hasta su cara: PLANO MEDIO CORTO de ella quieta, con los ojos abiertos, entendiendo algo.",
    },
    ini: "una mano se para de golpe sobre la tela de la manta, a la altura de la cintura.",
    fin: "de cerca está quieta, con los ojos abiertos, entendiendo algo.",
  }, "vientre desnudo, anatomia, feto, ecografia, resplandor, luz en el vientre"),
  esc("b3b", [ref("casa_del_encierro"), ref("chinchorro")], {
    comun: `Noche. CORRIÓ A ENCERRARSE, Y UNA NOCHE SINTIÓ DOS SERES ADENTRO: SON DOS, y ése es el dato. Se cuenta con el encierro, sin mostrarla. Objeto ancla: el chinchorro cerrado en la penumbra.`,
    camara: {
      a: "PLANO MACRO del cabo de un chinchorro amarrado muy arriba, tenso, con la tela cerrada sobre sí misma.",
      b: "la cámara ha BAJADO al suelo y ha retrocedido: PLANO GENERAL del cuarto a oscuras con el chinchorro cerrado allá arriba y una rendija de luna en la pared.",
    },
    ini: "el cabo del chinchorro, amarrado muy arriba y tenso, con la tela cerrada sobre sí misma.",
    fin: "desde el suelo, el cuarto está a oscuras con el chinchorro cerrado allá arriba y una rendija de luna en la pared.",
  }, "figura visible, vientre, anatomia, dos siluetas dentro del cuerpo, resplandor"),

  // b4 — Lloró pecados que no cometió y huyó donde su abuela. Siete lunas.
  escp("b4a", [ref("manna"), ref("casa_del_encierro"), ref("llanura_cardonal")], {
    comun: `Amanecer. LLORÓ PECADOS QUE NO HABÍA COMETIDO Y HUYÓ POR ATAJOS SIN HUELLA: la culpa no es suya y el relato lo dice. Objeto ancla: el atajo sin camino.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara al amanecer, con los ojos hinchados y la cara ya seca.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL en picado con ella diminuta cruzando terreno virgen, sin ninguna trocha por delante.",
    },
    ini: "su cara al amanecer, con los ojos hinchados y la cara ya seca.",
    fin: "desde muy arriba, ella cruza diminuta un terreno virgen, sin ninguna trocha por delante.",
  }, "llanto teatral, culpa dibujada, monstruos, persecucion, resplandor"),
  escp("b4b", [ref("manna"), ref("wayantuunay"), ref("constelaciones")], {
    comun: `Noches. SIETE LUNAS VAGÓ, camino de Wayantuunay, donde vive la abuela: el tiempo se cuenta con la luna cambiando sobre el mismo camino. Objeto ancla: las fases de la luna sobre la trocha.`,
    camara: {
      a: "PLANO MACRO de una luna delgada recortada en el cielo nocturno, sola.",
      b: "la cámara ha RETROCEDIDO y ha bajado: GRAN PLANO GENERAL nocturno del camino con la luna ya llena arriba y ella diminuta mucho más adelante en el mismo trazo.",
    },
    ini: "una luna delgada recortada en el cielo nocturno, sola.",
    fin: "más abajo, la luna ya está llena y ella va diminuta mucho más adelante en el mismo camino.",
  }, "relojes, calendarios, numeros, magia, resplandor, monstruos"),

  // b5 — Hablaba con los hijos. Le hicieron brotar manantiales.
  escp("b5a", [ref("manna"), ref("llanura_cardonal"), ref("constelaciones")], {
    comun: `Noche sin luna. EN LAS NOCHES SIN LUNA HABLABA CON LOS HIJOS, Y LE PEDÍAN QUE NO LLORARA: LOS HIJOS ACTÚAN DESDE EL VIENTRE, y se cuenta con ella escuchando, nunca con nada dentro del cuerpo. Objeto ancla: su cara hablando sola en la oscuridad.`,
    camara: {
      a: "PLANO GENERAL nocturno de ella sentada sola en la arena, muy pequeña bajo el cielo.",
      b: "la cámara ha AVANZADO hasta su cara: PLANO MEDIO CORTO de ella hablando hacia abajo, en voz baja, y después asintiendo a algo.",
    },
    ini: "de noche está sentada sola en la arena, muy pequeña bajo el cielo.",
    fin: "de cerca habla hacia abajo, en voz baja, y después asiente a algo.",
  }, "vientre luminoso, voces dibujadas, resplandor, dos siluetas, anatomia"),
  esc("b5b", [ref("verdor"), ref("llanura_cardonal")], {
    comun: `Amanecer. LE HICIERON BROTAR MANANTIALES: PRIMERA MITAD DEL PAR CROMÁTICO que el inventario llama «la escena que mejor enseña la paleta del corpus» — VERDE CON AGUA. Objeto ancla: el agua saliendo de la arena.`,
    camara: {
      a: "PLANO MACRO de un hilo de agua clara brotando de la arena seca y empapando el suelo alrededor.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL en picado del terreno con una mancha verde y húmeda abriéndose alrededor del manantial, en mitad de lo seco.",
    },
    ini: "un hilo de agua clara brota de la arena seca y empapa el suelo alrededor.",
    fin: "desde arriba, una mancha verde y húmeda se abre alrededor del manantial, en mitad de lo seco.",
  }, "oasis, cascada, selva, arcoiris, resplandor, magia, particulas"),

  // b6 — Le pidieron armas y cortó varas. Cortando caña brava se puyó el ojo.
  esc("b6a", [ref("haz_de_varas"), ref("trupillo")], {
    comun: `Luz plana. DESDE EL VIENTRE LE PIDIERON ARMAS Y CORTÓ VARAS SIN PARAR: el inventario obliga a DIFERENCIAR LAS CINCO ESPECIES —curarire, caujaro, albarico, carrizo y ceibote—, y es el mejor dato botánico del corpus. Objeto ancla: el haz con las cinco maderas distintas.`,
    camara: {
      a: "PLANO MACRO de cinco varas cortadas puestas en paralelo, cada una con corteza, grosor y color distintos.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del monte con un haz grande ya atado en el suelo y más varas cortadas repartidas alrededor.",
    },
    ini: "cinco varas cortadas puestas en paralelo, cada una con corteza, grosor y color distintos.",
    fin: "desde arriba, hay un haz grande ya atado en el suelo y más varas cortadas repartidas alrededor.",
  }, "armas modernas, magia, resplandor, arsenal, runas"),
  escp("b6b", [ref("manna"), ref("haz_de_varas"), ref("trupillo")], {
    comun: `Luz plana. CORTANDO CAÑA BRAVA SE PUYÓ EL OJO DERECHO: EL ACCIDENTE NO SE MUESTRA EN LA CARA. Se cuenta con la caña que salta y después con ella parada, quieta, sin detalle. Objeto ancla: la caña partida saltando.`,
    camara: {
      a: "PLANO MACRO de una caña brava partiéndose bajo el corte, con la punta astillada saltando hacia la cámara.",
      b: "la cámara ha RETROCEDIDO de golpe y ha subido: PLANO MEDIO de ella parada en seco entre las cañas, con una mano en la cara, de perfil y a contraluz.",
    },
    ini: "una caña brava se parte bajo el corte y la punta astillada salta hacia la cámara.",
    fin: "ella está parada en seco entre las cañas, con una mano en la cara, de perfil y a contraluz.",
  }, "ojo reventado, sangre en la cara, herida, grito, gore, primer plano del dano"),

  // b7 — Se golpeó la barriga y le borraron el verdor. Vio un rancho.
  escp("b7a", [ref("manna"), ref("llanura_cardonal")], {
    comun: `Luz plana. SE GOLPEÓ LA BARRIGA: es la manotada del canon, de rabia y dolor. El golpe NO se muestra: se ve el puño y después la cara. Objeto ancla: el puño cerrado.`,
    camara: {
      a: "PLANO MACRO de un puño cerrándose con fuerza a la altura de la cintura, sobre la tela.",
      b: "la cámara ha SUBIDO hasta su cara: PLANO MEDIO CORTO de ella con la mano en la cara todavía y el gesto cambiado, entre el dolor y la rabia.",
    },
    ini: "un puño se cierra con fuerza a la altura de la cintura, sobre la tela.",
    fin: "de cerca sigue con la mano en la cara y el gesto cambiado, entre el dolor y la rabia.",
  }, "golpe en el vientre, sangre, aborto, anatomia, violencia, gore"),
  esc("b7b", [ref("verdor"), ref("llanura_cardonal"), ref("chubasco")], {
    comun: `Luz plana. Y LE BORRARON EL VERDOR: SEGUNDA MITAD DEL PAR CROMÁTICO, y es el mismo encuadre de b5b con todo cambiado —OCRE DE TOLVANERA donde había verde y agua—. LA REPRESALIA DE LOS HIJOS NO SE SUAVIZA. Objeto ancla: el manantial seco.`,
    camara: {
      a: "PLANO MACRO del mismo sitio del manantial, ahora con la arena seca cerrándose sobre el hilo de agua hasta taparlo.",
      b: "la cámara ha RETROCEDIDO y se ha elevado, EXACTAMENTE COMO EN b5b: PLANO GENERAL en picado del mismo terreno, ya sin una mancha verde, con la tolvanera pasando por encima.",
    },
    ini: "en el mismo sitio del manantial, la arena seca se cierra sobre el hilo de agua hasta taparlo.",
    fin: "desde el mismo sitio de antes, el terreno ya no tiene una mancha verde y la tolvanera pasa por encima.",
  }, "desierto de arabia, dunas, cadaveres de plantas, fuego, maldicion dibujada"),

  // b8 — «Menos mal que llegas cuando mis hijos no están». Le dio agua. (CITA)
  escp("b8a", [ref("manna"), ref("palaa_puloina"), ref("piichi")], {
    comun: `Tarde. VIO UN RANCHO: ALLÍ VIVÍA LA MADRE DE LOS TIGRES. Desde fuera es una casa cualquiera y por eso entra. Objeto ancla: la casa que parece segura.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara aliviada al ver algo, con los hombros bajando.",
      b: "la cámara ha GIRADO siguiendo su mirada y ha retrocedido: PLANO GENERAL de un rancho corriente al final del terreno, con humo de fogón y nada raro.",
    },
    ini: "su cara se alivia al ver algo y los hombros le bajan.",
    fin: "en esa dirección hay un rancho corriente al final del terreno, con humo de fogón y nada raro.",
  }, "casa siniestra, huesos, calaveras, sombras, presagios, monstruos"),
  escp("b8b", [ref("kalamantuunay"), ref("manna"), ref("recipientes")], {
    comun: `Tarde. LA CITA, y es lo que HACE CREER A MANNA QUE ESTÁ A SALVO: menos mal que llegas cuando mis hijos no están. ${KL} LA RECIBE CON AFECTO Y LE DA AGUA: el horror vendrá de que cambia de idea. Objeto ancla: la totuma de agua que le pasa.`,
    camara: {
      a: "PLANO MACRO de una totuma de agua pasando de unas manos viejas a unas manos jóvenes.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO de las dos sentadas juntas, la vieja desmotando algodón y Manna bebiendo, tranquilas.",
    },
    ini: "una totuma de agua pasa de unas manos viejas a unas manos jóvenes.",
    fin: "las dos están sentadas juntas: la vieja desmotando algodón y Manna bebiendo, tranquilas.",
  }, "bruja, sonrisa siniestra, colmillos, caldero, veneno, ojos brillantes"),

  // b9 — Hizo señas y los tigres la devoraron. Escupieron partículas.
  escp("b9a", [ref("kalamantuunay"), ref("hombres_tigres"), ref("palaa_puloina")], {
    comun: `Anochecer. HIZO SEÑAS: EL HORROR VIENE DE QUE CAMBIA DE IDEA. La seña es pequeña y se ve bien. ${TG} llegando. Objeto ancla: la mano que hace la seña.`,
    camara: {
      a: "PLANO MACRO de una mano vieja haciendo una seña corta y disimulada por detrás del cuerpo.",
      b: "la cámara ha GIRADO al vano y ha retrocedido: PLANO GENERAL del exterior con tres tigres llegando al rancho al anochecer, pesados y tranquilos.",
    },
    ini: "una mano vieja hace una seña corta y disimulada por detrás del cuerpo.",
    fin: "desde fuera, tres tigres llegan al rancho al anochecer, pesados y tranquilos.",
  }, "hibrido, hombres con cabeza de tigre, licantropo, colmillos, sangre, gore"),
  esc("b9b", [ref("cordeleria"), ref("palaa_puloina")], {
    comun: `Noche. LOS TIGRES DESPEDAZARON A MANNA Y AL LIMPIARSE LAS MUELAS ESCUPIERON PARTÍCULAS DE CARNE: NADA DE ESO SE MUESTRA. El plano corta del rancho por fuera al ALGODÓN del suelo, blanco y limpio. Objeto ancla: el copo de algodón.`,
    camara: {
      a: "PLANO GENERAL del rancho por fuera, de noche, quieto, con la luz baja del fogón dentro.",
      b: "la cámara ha ENTRADO y ha bajado hasta el suelo: PLANO MACRO de un copo de algodón blanco y limpio en la arena, moviéndose apenas, sin nada más en cuadro.",
    },
    ini: "el rancho por fuera, de noche y quieto, con la luz baja del fogón dentro.",
    fin: "dentro, en el suelo, hay un copo de algodón blanco y limpio que se mueve apenas, y nada más.",
  }, "carne, restos, sangre, huesos, saliva, muelas, canibalismo, gore"),

  // b10 — Tumajü'le barrigón y Peeliyuu cabezón. Los puso a engordar.
  escp("b10a", [ref("tumajule"), ref("peeliyuu"), ref("cordeleria")], {
    comun: `Luz plana. TUMAJÜ'LE ERA BARRIGÓN Y PEELIYUU CABEZÓN: los dos nacidos de los residuos, y ACTÚAN COMO UNO SOLO. Van a media distancia y siempre juntos. Objeto ancla: los dos, distintos y a la par.`,
    camara: {
      a: "PLANO MACRO de dos manos pequeñas, una a cada lado de un mismo nido de algodón.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO de los dos a media distancia, uno de barriga grande y otro de cabeza grande, sentados juntos.",
    },
    ini: "dos manos pequeñas, una a cada lado de un mismo nido de algodón.",
    fin: "a media distancia, los dos están sentados juntos: uno de barriga grande y otro de cabeza grande.",
  }, "bebes monstruosos, deformidad grotesca, caricatura, ojos brillantes, resplandor"),
  esc("b10b", [ref("cordeleria"), ref("palaa_puloina")], {
    comun: `Luz plana. LA VIEJA LOS PUSO A ENGORDAR EN UN CANASTO PARA COMÉRSELOS DESPUÉS: EL CANASTO ES CEBO, NO CUIDADO. Sin figuras en plano cerrado. Objeto ancla: el canasto de mimbre.`,
    camara: {
      a: "PLANO MACRO del tejido de mimbre de un canasto grande, apretado y nuevo.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del interior del rancho con el canasto colgado del techo y comida amontonada al lado, mucha más de la que dos necesitan.",
    },
    ini: "el tejido de mimbre de un canasto grande, apretado y nuevo.",
    fin: "desde arriba, el canasto cuelga del techo y al lado hay comida amontonada, mucha más de la que dos necesitan.",
  }, "jaula, barrotes, cadenas, tortura, niños encerrados sufriendo, gore"),

  // b11 — De noche les pellizcaba las costillas. Pero aprendieron a cazar.
  escp("b11a", [ref("kalamantuunay"), ref("cordeleria")], {
    comun: `Noche. DE NOCHE LES PELLIZCABA LAS COSTILLAS: comprueba si ya están gordos, y es lo que delata su intención. El gesto se ve en la mano de la vieja: los pequeños quedan fuera de cuadro o a media distancia y de espaldas, nunca en primer plano. Objeto ancla: los dedos que pellizcan el aire.`,
    camara: {
      a: "PLANO MACRO de dos dedos viejos haciendo el gesto de pellizcar, muy cerca del borde del canasto.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO de ella de perfil junto al canasto colgado, de noche, comprobando y volviendo a su sitio.",
    },
    ini: "dos dedos viejos hacen el gesto de pellizcar, muy cerca del borde del canasto.",
    fin: "ella está de perfil junto al canasto colgado, de noche, comprobando y volviendo a su sitio.",
  }, "niños sufriendo, llanto, tortura, sangre, caricatura, primer plano de menores"),
  escp("b11b", [ref("tumajule"), ref("peeliyuu"), ref("arco_flechas")], {
    comun: `Luz plana. PERO APRENDIERON A CAZAR Y LES GANABAN A LOS TIGRES EN LISTEZA: el cebo les salió al revés. Objeto ancla: las presas que traen ellos y no los tigres.`,
    camara: {
      a: "PLANO MACRO de un arco pequeño y bien hecho apoyado contra el canasto.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del patio con los dos a media distancia dejando tres piezas de caza en el suelo y los tigres echados aparte, sin nada.",
    },
    ini: "un arco pequeño y bien hecho apoyado contra el canasto.",
    fin: "desde arriba, los dos dejan tres piezas de caza en el suelo y los tigres están echados aparte, sin nada.",
  }, "niños demoniacos, ojos brillantes, resplandor, poderes dibujados, sangre"),

  // b12 — Los retaron a flechar la luna. De noche les falsearon las puntas.
  esc("b12a", [ref("flechar_la_luna"), ref("constelaciones")], {
    comun: `NOCHE PROFUNDA, EL ÚNICO AZUL DEL CORPUS. LOS TIGRES LOS RETARON A FLECHAR LA LUNA: el inventario lo llama «la imagen más ambiciosa del corpus y la más nocturna». Objeto ancla: el disco de la luna y las flechas subiendo.`,
    camara: {
      a: "PLANO MACRO de una punta de flecha recortada contra el disco de la luna, apuntando.",
      b: "la cámara ha RETROCEDIDO y ha bajado: GRAN PLANO GENERAL nocturno con cuatro flechas subiendo en el aire azul hacia la luna, muy pequeñas, y las figuras diminutas abajo.",
    },
    ini: "una punta de flecha recortada contra el disco de la luna, apuntando.",
    fin: "cuatro flechas suben por el aire azul hacia la luna, muy pequeñas, con las figuras diminutas abajo.",
  }, "luna con cara, simbolos, resplandor, magia, luna roja, eclipse"),
  escp("b12b", [ref("tumajule"), ref("peeliyuu"), ref("arco_flechas")], {
    comun: `Noche. DE NOCHE LES FALSEARON LAS PUNTAS, SEGUROS COMO ESTABAN LOS TIGRES DE ACERTAR: la trampa es de oficio, no de magia. Los dos van siempre a media distancia y de espaldas, y el primer cuadro es un plano sin personas. Objeto ancla: la punta limada a escondidas.`,
    camara: {
      a: "PLANO MACRO de una punta de flecha siendo limada con una piedra hasta quedar roma.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO de los dos a media distancia devolviendo las flechas al carcaj de los tigres, en la oscuridad.",
    },
    ini: "una punta de flecha es limada con una piedra hasta quedar roma.",
    fin: "los dos, a media distancia, devuelven las flechas al carcaj de los tigres en la oscuridad.",
  }, "magia, resplandor, niños demoniacos, sonrisa malvada, caricatura"),

  // b13 — Se arañaron con las puntas: uñas fuertes. La paloma los corrió.
  esc("b13a", [ref("hombres_tigres"), ref("arco_flechas"), ref("llanura_cardonal")], {
    comun: `Amanecer. FURIOSOS SE ARAÑARON CON LAS PUNTAS: DESDE ENTONCES TIENEN UÑAS FUERTES. ETIOLOGÍA Y DEBE VERSE: las garras del tigre, sin sangre. Objeto ancla: las uñas saliendo de la almohadilla.`,
    camara: {
      a: "PLANO MACRO de una zarpa de tigre con las uñas saliendo de las almohadillas, curvas y fuertes.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del claro con los tres tigres y varias flechas de puntas romas tiradas por el suelo.",
    },
    ini: "una zarpa de tigre con las uñas saliendo de las almohadillas, curvas y fuertes.",
    fin: "desde arriba, los tres tigres están en el claro con varias flechas de puntas romas tiradas por el suelo.",
  }, "sangre, heridas, carne, hibridos, manos humanas con garras, gore"),
  escp("b13b", [ref("aaner"), ref("tumajule"), ref("peeliyuu")], {
    comun: `Mañana. ROBANDO MELONCILLOS, LA PALOMA AÁNER LOS CORRIÓ: es un ave real, defendiendo su sembrado, y de ahí sale la revelación. Objeto ancla: la paloma echándolos.`,
    camara: {
      a: "PLANO MACRO de una paloma con las alas abiertas y el pico abierto, gritando desde una guía.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del sembrado con los dos saliendo a media distancia y el ave detrás, persiguiéndolos.",
    },
    ini: "una paloma con las alas abiertas y el pico abierto grita desde una guía.",
    fin: "desde arriba, los dos salen del sembrado a media distancia y el ave los persigue.",
  }, "ave monstruosa, gigante, ojos brillantes, resplandor, violencia"),

  // b14 — Los niños lloraron. Preguntaron a la madre-abuela por su origen.
  escp("b14a", [ref("guacamayo_reprochador"), ref("tumajule"), ref("peeliyuu")], {
    comun: `Mañana. QUIENES REVELAN EL ORIGEN SON ANIMALES OFENDIDOS: el guacamayo les grita que nacieron del sucio de sus muelas. Objeto ancla: el guacamayo reprochando.`,
    camara: {
      a: "PLANO MACRO de la cabeza de un guacamayo con el pico abierto, muy cerca, gritando.",
      b: "la cámara ha GIRADO y ha retrocedido: PLANO GENERAL con los dos parados en seco a media distancia, oyéndolo, sin moverse.",
    },
    ini: "la cabeza de un guacamayo con el pico abierto, muy cerca, gritando.",
    fin: "al girar, los dos están parados en seco a media distancia, oyéndolo, sin moverse.",
  }, "texto en pantalla, subtitulos, flashback dibujado, resplandor"),
  escp("b14b", [ref("tumajule"), ref("peeliyuu"), ref("kalamantuunay")], {
    comun: `Mañana. LOS NIÑOS LLORARON Y LE PREGUNTARON A LA MADRE-ABUELA: LLORAN ANTES DE VENGARSE, y eso los humaniza. Van a media distancia. Objeto ancla: los dos preguntando.`,
    camara: {
      a: "PLANO MEDIO de los dos a media distancia, de espaldas, delante de la vieja sentada.",
      b: "la cámara ha GIRADO a ella y ha avanzado: PLANO MEDIO CORTO de la cara de la vieja, sin dejar de desmotar algodón, oyendo la pregunta.",
    },
    ini: "los dos, de espaldas y a media distancia, están delante de la vieja sentada.",
    fin: "de cerca, la cara de la vieja oye la pregunta sin dejar de desmotar algodón.",
  }, "primer plano de menores llorando, lastima explotada, caricatura"),

  // b15 — «Falso, son mis nietos». Le pidieron que cocinara un matacán.
  escp("b15a", [ref("kalamantuunay"), ref("cordeleria")], {
    comun: `Mañana. FALSO, SON MIS NIETOS, DIJO LA VIEJA: miente sin pestañear y sigue con el algodón. Objeto ancla: las manos que no paran de desmotar.`,
    camara: {
      a: "PLANO MACRO de dos manos viejas desmotando algodón, sacando las semillas una a una, sin temblar.",
      b: "la cámara ha SUBIDO hasta su cara: PLANO MEDIO CORTO de ella hablando tranquila, mintiendo, sin mirar a nadie.",
    },
    ini: "dos manos viejas desmotan algodón sacando las semillas una a una, sin temblar.",
    fin: "de cerca habla tranquila, mintiendo, sin mirar a nadie.",
  }, "bruja, sonrisa malvada, ojos brillantes, colmillos, caricatura"),
  escp("b15b", [ref("tumajule"), ref("peeliyuu"), ref("recipientes")], {
    comun: `Tarde. ENTONCES LE PIDIERON QUE LES MOSTRARA CÓMO COCINAR UN MATACÁN: la trampa es doméstica y se prepara a la vista. Objeto ancla: el caldero puesto al fuego.`,
    camara: {
      a: "PLANO MACRO de un caldero grande de barro llenándose de agua, con el fuego prendiendo debajo.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del fogón con los dos a media distancia, esperando, y la vieja acercándose al caldero.",
    },
    ini: "un caldero grande de barro se llena de agua, con el fuego prendiendo debajo.",
    fin: "desde arriba, los dos esperan a media distancia y la vieja se acerca al caldero.",
  }, "caldero de bruja, humo verde, pentagramas, cuerpos dentro, gore"),

  // b16 — Cuando se inclinó la golpearon y cayó. Tumajü'le se vistió.
  esc("b16a", [ref("recipientes"), ref("fuego_y_cocina"), ref("palaa_puloina")], {
    comun: `Tarde. CUANDO SE INCLINÓ AL CALDERO LA GOLPEARON Y CAYÓ EN EL SANCOCHO: EL ACTO NO SE MUESTRA. El plano es el caldero y el vapor, sin nada dentro que se distinga. Objeto ancla: el caldero hirviendo.`,
    camara: {
      a: "PLANO MACRO del borde del caldero con el vapor subiendo espeso, sin que se vea el fondo.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del fogón con el caldero tapado, el vapor escapándose y el sitio de la vieja vacío, con el algodón caído.",
    },
    ini: "el borde del caldero con el vapor subiendo espeso, sin que se vea el fondo.",
    fin: "desde arriba, el caldero está tapado, el vapor se escapa y el sitio de la vieja está vacío, con el algodón caído.",
  }, "cuerpo en el caldero, carne, sangre, huesos, cabeza, canibalismo, gore"),
  esc("b16b", [ref("tumajule"), ref("cordeleria"), ref("palaa_puloina")], {
    comun: `Tarde. TUMAJÜ'LE SE VISTIÓ CON SUS ROPAS: EL INVENTARIO OBLIGA — SE REPRESENTA EL DISFRAZ POR LA SILUETA Y EL ALGODÓN, NUNCA EL DESPOJO. Se ve la manta oscura de la vieja, el pelo blanco de algodón y la silueta sentada en su sitio. Objeto ancla: el algodón blanco en la cabeza.`,
    camara: {
      a: "PLANO MACRO de un puñado de algodón blanco colocándose sobre una cabeza, como pelo.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO de una figura pequeña sentada de espaldas en el sitio de la vieja, con su manta oscura puesta y el algodón en la cabeza.",
    },
    ini: "un puñado de algodón blanco se coloca sobre una cabeza, como pelo.",
    fin: "en el sitio de la vieja hay una figura pequeña sentada de espaldas, con su manta oscura puesta y el algodón en la cabeza.",
  }, "cuero cabelludo, piel arrancada, mascara de piel, sangre, despojo, gore"),

  // b17 — Los tigres comieron y sus muelas hablaron: es su madre.
  escp("b17a", [ref("hombres_tigres"), ref("recipientes"), ref("palaa_puloina")], {
    comun: `Anochecer. LOS TIGRES LLEGARON CON HAMBRE Y ÉL LES DIJO QUE COMIERAN: comen sin sospechar, en su propia casa. Objeto ancla: los tigres alrededor del caldero.`,
    camara: {
      a: "PLANO MACRO de una lengua áspera de tigre lamiendo el borde de una totuma.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del rancho con tres tigres alrededor del caldero y la figura de la manta oscura sentada aparte, de espaldas.",
    },
    ini: "una lengua áspera de tigre lame el borde de una totuma.",
    fin: "desde arriba, tres tigres rodean el caldero y la figura de la manta oscura está sentada aparte, de espaldas.",
  }, "carne humana, restos, sangre, huesos, canibalismo, gore"),
  esc("b17b", [ref("hombres_tigres"), ref("recipientes")], {
    comun: `Noche. COMIERON, Y SUS MUELAS HABLARON: ES SU MADRE. El aviso viene de sus propias muelas, igual que en el mito de Maleiwa. Se cuenta con los tigres parándose en seco. Objeto ancla: las tres cabezas que se levantan a la vez.`,
    camara: {
      a: "PLANO MACRO de una boca de tigre parándose a medio masticar, quieta.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL con los tres animales con la cabeza levantada a la vez, inmóviles alrededor del caldero.",
    },
    ini: "una boca de tigre se para a medio masticar, quieta.",
    fin: "desde arriba, los tres animales tienen la cabeza levantada a la vez, inmóviles alrededor del caldero.",
  }, "carne humana, restos, sangre, voces dibujadas, texto, gore"),

  // b18 — Vieron la cabeza y corrieron a matarlo. Se volvió nube.
  esc("b18a", [ref("recipientes"), ref("fuego_y_cocina")], {
    comun: `Noche. VIERON LA CABEZA EN EL FONDO: NO SE MUESTRA. El plano es el caldero destapado con el vapor abriéndose y la cámara que se aparta antes de ver nada. Objeto ancla: la tapa que se levanta.`,
    camara: {
      a: "PLANO MACRO de la tapa del caldero levantándose y el vapor saliendo de golpe, tapándolo todo.",
      b: "la cámara se ha APARTADO y ha retrocedido: PLANO GENERAL del rancho con el caldero destapado humeando y los tres tigres ya lanzados hacia la puerta.",
    },
    ini: "la tapa del caldero se levanta y el vapor sale de golpe, tapándolo todo.",
    fin: "desde lejos, el caldero humea destapado y los tres tigres ya van lanzados hacia la puerta.",
  }, "cabeza, cara, huesos, sangre, carne, canibalismo, gore"),
  esc("b18b", [ref("chubasco"), ref("costa_penascos"), ref("llanura_cardonal")], {
    comun: `Amanecer. CORRIERON A MATARLO, PERO SE VOLVIÓ NUBE, Y SUS ALMAS ANDAN ESPARCIDAS: DOS ETIOLOGÍAS a la vez. La nube es una nube de verdad, y las almas de los felinos son aliento disperso, sin figura. Objeto ancla: la nube que se escurre.`,
    camara: {
      a: "PLANO MACRO de un jirón de nube baja escurriéndose entre dos piedras, deshaciéndose al pasar.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL final con la nube cruzando la llanura al amanecer y, abajo, el viento moviendo la hierba en varios sitios a la vez.",
    },
    ini: "un jirón de nube baja se escurre entre dos piedras y se deshace al pasar.",
    fin: "desde muy arriba, la nube cruza la llanura al amanecer y abajo el viento mueve la hierba en varios sitios a la vez.",
  }, "figuras en las nubes, caras, fantasmas, tigres espectrales, resplandor, texto"),
]);
