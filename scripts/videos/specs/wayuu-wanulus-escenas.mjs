// Keyframes de El valle que no se cruza dos veces — 12 bloques × 2 escenas × 2
// cuadros = 48 imágenes ≈ 120 s.
// Guion: guion-las-wanulus-y-el-valle-de-la-muerte-v2.json (N=12)
// Acta: acta-las-wanulus-y-el-valle-de-la-muerte.json (24 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _wayuu-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · NO HAY APARICIÓN DEL WANÜLÜÜ. El canon es explícito: NADA APARECIÓ DE
//   MANERA ABIERTA. Lo que queda es EL MIEDO, y LA DIRECCIÓN DE ARTE NO PUEDE
//   DARLE CUERPO AL COBRO. Del bloque 9 al 12 no entra ni una figura, ni una
//   sombra, ni un par de ojos.
// · LA SERPIENTE SE MATA POR DEFENSA, NO POR MALDAD, y por eso el relato NO
//   condena a los hermanos: COBRA, que es distinto.
// · EL FINAL ES ABIERTO Y ASÍ SE DEJA: nunca supieron si algo los había
//   seguido. NO SE CIERRA CON CASTIGO NI CON SALVACIÓN. El acta lo marca como
//   lo único «sin resolver» del mito y esa indeterminación NO se cierra en la
//   imagen.
// · DEJAR UNA PARTE DE LA COSECHA SIN TOCAR es el gesto que el mito guarda para
//   el final: NO ES ABANDONO, ES PAGO.
// · LAS SEÑALES EN EL SUELO DEL VALLE NO SE EXPLICAN porque el canon no las
//   explica. SE MUESTRAN Y NO SE DESCIFRAN: el espectador tampoco debe poder
//   leerlas.
// · EL WANÜLÜÜ DE ESTA FICHA ES UNA CULEBRA, no el Malinot de «ulepala» ni el
//   wanurü que negocia en «jirairay». Misma familia, TRES FICHAS QUE NO SE
//   CRUZAN.
// · EL VIAJE NOCTURNO GUIADO POR LAS ESTRELLAS ABRE Y CIERRA EL RELATO, EN
//   ESPEJO. Ese rimado se conserva: b2–b3 y b12 comparten tipo de plano.
// · NO HAY MUERTES: es el único mito de este lote donde nadie muere ni se
//   vuelve piedra. EL PELIGRO SE MIDE EN LO QUE NO PASA.
//
// GUION DE LUZ: jagüey seco al mediodía → salida de noche sin luna → días
// tendidos bajo el trupillo → suelo del valle a pleno sol → primer verde al
// salir → días buenos de la parcela → tarde en que cambian los cantos → noche
// del fuego y los dos ojos → noche del sueño → días de casa reforzada → luz
// gris del miedo instalado → amanecer de la partida, otra vez por estrellas.

import { CONTEXTO, DIRECCION, AVOID_BASE, PALETTE_BASE, ref, esc, escp, armar } from "./_wayuu-comun.mjs";

export const SPEC_NAME = "wayuu-wanulus-escenas";
export const OUT_DIR = "wayuu/videos/las-wanulus-y-el-valle-de-la-muerte/keyframes";
export { CONTEXTO, DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; monstruo, demonio, espectro, figura encapuchada, sombra con forma humana, criatura acechando; ojos brillantes flotando fuera del bloque que los pide, garras, colmillos, baba; serpiente gigante fantastica, basilisco, dragon, serpiente con cara humana; sangre, visceras, animal despedazado, cadaveres, huesos humanos; simbolos legibles, runas, alfabetos, mapas, flechas, texto; resplandor, niebla siniestra, humo de colores, magia dibujada; final cerrado, castigo a la vista, salvacion, aureola, moraleja dibujada";
export const PALETTE =
  PALETTE_BASE + "; el VERDE de la tierra fertil es el unico verde pleno del corpus wayuu y por eso vale tanto; el valle va en blancos calcareos de hueso y sol, sin un solo calido";

const HH =
  "LOS MISMOS dos hermanos de la referencia (dos hombres wayúu adultos, mantas cortas terciadas de algodón crudo, fajas tejidas de kanas, waireñas de suela plana), parecidos entre sí y siempre juntos en cuadro";

export const ITEMS = armar([
  // b1 — Vivían donde el agua no alcanzaba. El jagüey se secaba.
  esc("b1a", [ref("jaguey"), ref("roza"), ref("llanura_cardonal")], {
    comun: `Mediodía. DOS HERMANOS VIVÍAN DONDE EL AGUA NO ALCANZABA PARA SEMBRAR: el problema es el agua y se cuenta con el jagüey. Sin figuras. Objeto ancla: el barro agrietado del fondo.`,
    camara: {
      a: "PLANO MACRO de las placas de barro agrietado del fondo del jagüey, levantadas por el sol.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del jagüey casi vacío con una parcela pequeña al lado y las matas amarillentas.",
    },
    ini: "las placas de barro agrietado del fondo del jagüey, levantadas por el sol.",
    fin: "desde arriba, el jagüey está casi vacío con una parcela pequeña al lado y las matas amarillentas.",
  }, "cadaveres de animales, esqueletos, buitres, desierto de arabia, dunas"),
  escp("b1b", [ref("dos_hermanos_del_valle"), ref("roza")], {
    comun: `Mediodía. EL JAGÜEY SE SECABA Y LAS MATAS SE DOBLABAN: ${HH} mirando su parcela perdida. Es constatación, no lamento. Objeto ancla: la mata doblada en la mano.`,
    camara: {
      a: "PLANO MACRO de una mano levantando una mata doblada y seca, que se quiebra al tocarla.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la parcela con los dos parados en medio, separados, mirando el mismo terreno.",
    },
    ini: "una mano levanta una mata doblada y seca, que se quiebra al tocarla.",
    fin: "desde arriba, los dos están parados en medio de la parcela, separados, mirando el mismo terreno.",
  }, "llanto, desesperacion, hambre explotada, miseria, caricatura"),

  // b2 — Sabían de una tierra húmeda al otro lado. Salieron de noche.
  escp("b2a", [ref("dos_hermanos_del_valle"), ref("piichi"), ref("enramada")], {
    comun: `Anochecer. SABÍAN DE UNA TIERRA HÚMEDA AL OTRO LADO DE UN VALLE QUE TODOS EVITABAN: la decisión se toma en casa y es práctica. Objeto ancla: las mochilas que se preparan.`,
    camara: {
      a: "PLANO MACRO de unas manos apretando el nudo de una mochila tejida ya cargada.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO de los dos bajo la enramada al anochecer, cada uno con su carga, mirando hacia el camino.",
    },
    ini: "unas manos aprietan el nudo de una mochila tejida ya cargada.",
    fin: "los dos están bajo la enramada al anochecer, cada uno con su carga, mirando hacia el camino.",
  }, "despedida teatral, llanto, presagios, sombras, monstruos, texto"),
  esc("b2b", [ref("constelaciones"), ref("llanura_cardonal")], {
    comun: `Noche sin luna. SALIERON DE NOCHE, SIN SOL: EL VIAJE GUIADO POR LAS ESTRELLAS ABRE EL RELATO, y este tipo de plano se repite al cerrarlo. Sin figuras o con ellas diminutas. Objeto ancla: el cielo estrellado sobre el camino.`,
    camara: {
      a: "PLANO ENTERAMENTE DE CIELO estrellado, sin tierra en cuadro, con las constelaciones bien marcadas.",
      b: "la cámara ha BASCULADO hacia abajo y ha retrocedido: GRAN PLANO GENERAL nocturno con la llanura oscura abajo y dos figuras diminutas andando, y el cielo ocupando dos tercios.",
    },
    ini: "el cuadro es sólo cielo estrellado, con las constelaciones bien marcadas.",
    fin: "al bajar la cámara aparece la llanura oscura con dos figuras diminutas andando, y el cielo ocupa dos tercios.",
  }, "luna llena dramatica, niebla, monstruos, ojos, resplandor, lobos"),

  // b3 — De día se tendían bajo un trupillo. Bebían el agua a sorbos contados.
  escp("b3a", [ref("dos_hermanos_del_valle"), ref("trupillo"), ref("llanura_cardonal")], {
    comun: `Sol alto. DE DÍA SE TENDÍAN BAJO UN TRUPILLO: viajan de noche y descansan de día, que es como se cruza esa tierra. Objeto ancla: la sombra del trupillo.`,
    camara: {
      a: "PLANO CENITAL MACRO de la sombra del trupillo sobre la arena con dos pares de pies dentro de ella.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado de la llanura a pleno sol con esa única mancha de sombra y los dos dentro, minúsculos.",
    },
    ini: "la sombra del trupillo sobre la arena, con dos pares de pies dentro de ella.",
    fin: "desde muy arriba, la llanura está a pleno sol y esa única mancha de sombra tiene a los dos dentro, minúsculos.",
  }, "agonia, sed extrema, espejismos, buitres, cadaveres, dunas"),
  esc("b3b", [ref("recipientes"), ref("trupillo")], {
    comun: `Sol alto. SE GUIABAN POR LAS ESTRELLAS Y BEBÍAN EL AGUA A SORBOS CONTADOS: la disciplina del agua es el dato. Objeto ancla: el sorbo medido.`,
    camara: {
      a: "PLANO MACRO del cuello de una calabaza de agua inclinándose apenas, dejando salir un hilo mínimo.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO de las dos calabazas colgadas de la rama, una casi vacía y la otra por la mitad.",
    },
    ini: "el cuello de una calabaza de agua se inclina apenas y deja salir un hilo mínimo.",
    fin: "las dos calabazas cuelgan de la rama: una está casi vacía y la otra por la mitad.",
  }, "agua abundante, cantimploras modernas, botellas de plastico, oasis"),

  // b4 — En el valle había huesos blancos y señales que no supieron leer.
  esc("b4a", [ref("valle_evitado"), ref("piedras_y_huesos")], {
    comun: `Sol duro, blanco de hueso. EN EL VALLE HABÍA HUESOS BLANCOS DE SOL: son huesos DE ANIMAL, blanqueados y dispersos, nunca humanos. Sin figuras. Objeto ancla: el hueso blanqueado en el suelo.`,
    camara: {
      a: "PLANO MACRO de un hueso largo de animal completamente blanqueado por el sol, medio hundido en la arena.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado del valle con manchas blancas repartidas por todo el suelo, muy separadas.",
    },
    ini: "un hueso largo de animal, completamente blanqueado por el sol y medio hundido en la arena.",
    fin: "desde muy arriba, el valle tiene manchas blancas repartidas por todo el suelo, muy separadas.",
  }, "huesos humanos, calaveras, esqueletos, cadaveres, gore, buitres"),
  esc("b4b", [ref("valle_evitado"), ref("llanura_cardonal")], {
    comun: `Sol duro. Y SEÑALES QUE NO SUPIERON LEER: SE MUESTRAN Y NO SE DESCIFRAN. Son marcas en el suelo sin forma reconocible —ni letras, ni símbolos, ni dibujos—, y el espectador tampoco debe poder leerlas. NO SE DETUVIERON A MIRARLAS. Objeto ancla: la marca en el suelo.`,
    camara: {
      a: "PLANO CENITAL MACRO de un surco irregular en la tierra dura, sin forma reconocible ni repetición.",
      b: "la cámara se ha ELEVADO y ha avanzado: GRAN PLANO GENERAL en picado del valle con varias marcas así repartidas y dos figuras diminutas cruzándolo sin detenerse.",
    },
    ini: "un surco irregular en la tierra dura, sin forma reconocible ni repetición.",
    fin: "desde muy arriba hay varias marcas así repartidas por el valle, y dos figuras diminutas lo cruzan sin detenerse.",
  }, "runas, simbolos, alfabetos, jeroglificos, mapas, flechas, texto, circulos rituales"),

  // b5 — Al salir del valle había verde. Levantaron casa y sembraron.
  esc("b5a", [ref("tierra_verde"), ref("valle_evitado")], {
    comun: `Luz de mañana. AL SALIR DEL VALLE LA TIERRA CAMBIÓ: HABÍA VERDE. Es EL ÚNICO VERDE PLENO DEL CORPUS WAYÚU, y por eso vale tanto. Sin figuras. Objeto ancla: la línea donde empieza el verde.`,
    camara: {
      a: "PLANO MACRO del canto exacto donde la arena blanca del valle da paso a la hierba verde, grano a grano.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado con el valle blanco a un lado, la tierra verde al otro y la línea entre los dos cruzando el cuadro.",
    },
    ini: "el canto exacto donde la arena blanca del valle da paso a la hierba verde, grano a grano.",
    fin: "desde muy arriba, el valle blanco queda a un lado, la tierra verde al otro, y la línea entre los dos cruza el cuadro.",
  }, "selva, jungla, cascadas, paraiso, oasis, resplandor, arcoiris"),
  escp("b5b", [ref("dos_hermanos_del_valle"), ref("piichi"), ref("roza")], {
    comun: `Luz de mañana. LEVANTARON UNA CASA, ABRIERON UNA PARCELA Y SEMBRARON: trabajo de instalación, con las manos. Objeto ancla: el horcón que se hinca.`,
    camara: {
      a: "PLANO MACRO de un horcón de madera hincándose en la tierra húmeda, con el barro cediendo alrededor.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del claro con la casa ya de pie, la parcela abierta en surcos y los dos trabajando en ella.",
    },
    ini: "un horcón de madera se hinca en la tierra húmeda y el barro cede alrededor.",
    fin: "desde arriba, la casa ya está de pie, la parcela abierta en surcos y los dos trabajando en ella.",
  }, "maquinaria, arado, cercas de alambre, colonos, banderas, caricatura"),

  // b6 — Creyeron que el peligro quedaba atrás. Cambiaron los cantos.
  escp("b6a", [ref("dos_hermanos_del_valle"), ref("roza"), ref("tierra_verde")], {
    comun: `Días buenos, luz plana. UNOS DÍAS CREYERON QUE EL PELIGRO QUEDABA ATRÁS, EN EL VALLE: están tranquilos y el cuadro también. Objeto ancla: la mata que crece.`,
    camara: {
      a: "PLANO MACRO de un brote verde y fuerte saliendo del surco, con la tierra oscura y húmeda alrededor.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la parcela ya verde con los dos trabajando cada uno en su tramo, sin prisa.",
    },
    ini: "un brote verde y fuerte sale del surco, con la tierra oscura y húmeda alrededor.",
    fin: "desde arriba, la parcela ya está verde y los dos trabajan cada uno en su tramo, sin prisa.",
  }, "presagios, sombras, monstruos, ojos, niebla, musica siniestra dibujada"),
  esc("b6b", [ref("aaner"), ref("tierra_verde"), ref("trupillo")], {
    comun: `Una tarde. CAMBIARON LOS CANTOS DE LOS PÁJAROS: el primer aviso es SONORO y se cuenta con las aves, no con una amenaza. Objeto ancla: los pájaros que callan y se van.`,
    camara: {
      a: "PLANO MACRO de dos pájaros pequeños posados en una rama, con el pico abierto cantando.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del árbol entero con las ramas ya vacías y una bandada alejándose al fondo, toda en la misma dirección.",
    },
    ini: "dos pájaros pequeños posados en una rama, con el pico abierto cantando.",
    fin: "desde arriba, las ramas del árbol están ya vacías y una bandada se aleja al fondo, toda en la misma dirección.",
  }, "aves de mal aguero, cuervos, buitres, ojos, monstruos, resplandor"),

  // b7 — Cerca del fuego aparecieron dos ojos. El mayor disparó.
  escp("b7a", [ref("dos_hermanos_del_valle"), ref("fuego_y_cocina"), ref("piichi")], {
    comun: `Noche. CERCA DEL FUEGO, ENTRE LA SOMBRA, APARECIERON DOS OJOS QUE BRILLABAN. ES EL ÚNICO BLOQUE DONDE SE PERMITEN LOS OJOS, y son OJOS DE ANIMAL a ras de suelo, nada más. Objeto ancla: los dos puntos en la sombra.`,
    camara: {
      a: "PLANO MEDIO de los dos hermanos junto al fogón, uno de perfil parándose a mitad de un gesto.",
      b: "la cámara ha GIRADO siguiendo su mirada hacia el borde de la luz: PLANO MACRO de dos puntos de reflejo a ras de suelo en la sombra, bajos y juntos, sin nada más visible.",
    },
    ini: "junto al fogón, uno de los dos se para a mitad de un gesto, de perfil.",
    fin: "en el borde de la luz, a ras de suelo, hay dos puntos de reflejo bajos y juntos, y no se ve nada más.",
  }, "monstruo, demonio, cara en la sombra, silueta humana, garras, colmillos, niebla"),
  escp("b7b", [ref("dos_hermanos_del_valle"), ref("armas"), ref("piichi")], {
    comun: `Noche. EL HERMANO MAYOR TOMÓ EL RIFLE Y DISPARÓ: ES POR DEFENSA, NO POR MALDAD, y el cuadro no lo condena. El disparo se cuenta con el arma y el humo. Objeto ancla: el cañón levantándose.`,
    camara: {
      a: "PLANO MACRO de las manos montando el rifle deprisa, con el fuego dándoles de lado.",
      b: "la cámara ha RETROCEDIDO y ha girado: PLANO GENERAL del claro de noche con el fogón, los dos de pie y el humo del disparo colgando entre ellos y la oscuridad.",
    },
    ini: "las manos montan el rifle deprisa, con el fuego dándoles de lado.",
    fin: "desde lejos, el fogón, los dos de pie y el humo del disparo colgando entre ellos y la oscuridad.",
  }, "sangre, animal herido, agonia, monstruo, explosion, western"),

  // b8 — Era una serpiente enorme. La arrastraron lejos. Uno soñó una voz.
  esc("b8a", [ref("culebras_guardianas"), ref("tierra_verde"), ref("constelaciones")], {
    comun: `Noche. ERA UNA SERPIENTE ENORME: una culebra grande y REAL, quieta en el suelo, sin sangre ni herida a la vista. Ni basilisco ni dragón. Objeto ancla: el cuerpo de la culebra en la hierba.`,
    camara: {
      a: "PLANO MACRO de las escamas de un cuerpo grueso de culebra tendido en la hierba, quieto.",
      b: "la cámara ha RETROCEDIDO en travelling siguiendo el cuerpo y se ha elevado: PLANO GENERAL en picado con la culebra entera extendida, mucho más larga de lo que parecía, y los dos hermanos pequeños a un extremo.",
    },
    ini: "las escamas de un cuerpo grueso de culebra tendido en la hierba, quieto.",
    fin: "desde arriba, la culebra entera está extendida y es mucho más larga de lo que parecía, con los dos hermanos pequeños a un extremo.",
  }, "sangre, herida, despedazado, dragon, basilisco, cara humana, ojos brillantes, gore"),
  escp("b8b", [ref("dos_hermanos_del_valle"), ref("chinchorro"), ref("piichi")], {
    comun: `Noche. LA ARRASTRARON LEJOS DE LA CASA Y ESA NOCHE UNO DE ELLOS SOÑÓ UNA VOZ: el sueño se cuenta DESDE FUERA, con él dormido. Objeto ancla: la cara dormida.`,
    camara: {
      a: "PLANO MACRO del rastro que deja el arrastre en la hierba, una franja aplastada que se aleja.",
      b: "la cámara ha RETROCEDIDO hasta la casa y ha entrado: PLANO MEDIO CORTO de una cara dormida en el chinchorro, con el ceño apretándose.",
    },
    ini: "el rastro del arrastre deja una franja aplastada en la hierba que se aleja.",
    fin: "dentro de la casa, una cara dormida en el chinchorro tiene el ceño apretándose.",
  }, "vision dibujada, espectro, figura flotando, resplandor, humo, calavera"),

  // b9 — «¿Por qué la mataron?». Era una wanurü, y otra vendría a cobrar. (CITA)
  esc("b9a", [ref("piichi"), ref("tierra_verde"), ref("constelaciones")], {
    comun: `Noche. LA CITA llega EN SUEÑOS y NADA APARECE DE MANERA ABIERTA: el cuadro es la casa por fuera, de noche, sin nadie. A partir de aquí NO ENTRA NINGUNA FIGURA hasta el final. Objeto ancla: la casa quieta bajo las estrellas.`,
    camara: {
      a: "PLANO MEDIO de la pared de la casa por fuera, con la luz del fogón filtrándose por una rendija.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL nocturno del claro con la casa pequeña abajo, la parcela alrededor y el monte oscuro cerrando por todos lados.",
    },
    ini: "la pared de la casa por fuera, con la luz del fogón filtrándose por una rendija.",
    fin: "desde muy arriba, la casa es pequeña en el claro, con la parcela alrededor y el monte oscuro cerrando por todos lados.",
  }, "figura, sombra, espectro, ojos, monstruo, serpiente gigante, niebla, texto"),
  esc("b9b", [ref("culebras_guardianas"), ref("tierra_verde")], {
    comun: `Amanecer. NO ERA UNA CULEBRA: ERA UNA WANURÜ, Y OTRA VENDRÍA A COBRAR LO DEBIDO. La otra NO aparece. El cuadro es el sitio donde dejaron a la primera, ya vacío. Objeto ancla: la hierba aplastada y sin nada encima.`,
    camara: {
      a: "PLANO MACRO de la hierba aplastada con la forma del cuerpo todavía marcada, y nada dentro.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del borde del monte al amanecer con esa marca en la hierba y ningún rastro que salga de ella.",
    },
    ini: "la hierba aplastada conserva la forma del cuerpo y no hay nada dentro.",
    fin: "desde arriba, en el borde del monte al amanecer sólo queda esa marca en la hierba, sin ningún rastro que salga de ella.",
  }, "serpiente gigante, monstruo, ojos, sangre, rastro brillante, resplandor"),

  // b10 — Reforzaron la casa y durmieron por turnos. Nada apareció.
  esc("b10a", [ref("piichi"), ref("maderas"), ref("cordeleria")], {
    comun: `Luz plana. REFORZARON LA CASA CON PALOS Y CUIDARON EL FUEGO: el miedo se mide en el trabajo que da. Sin figuras en plano cerrado. Objeto ancla: los palos atravesados en la puerta.`,
    camara: {
      a: "PLANO MACRO de un palo grueso atándose en cruz sobre el marco de la puerta, con el cordel apretando.",
      b: "la cámara ha RETROCEDIDO fuera y se ha elevado: PLANO GENERAL de la casa vista desde fuera con palos atravesados en todos los vanos y el fogón encendido delante, a plena luz del día.",
    },
    ini: "un palo grueso se ata en cruz sobre el marco de la puerta y el cordel aprieta.",
    fin: "desde fuera, la casa tiene palos atravesados en todos los vanos y el fogón encendido delante, a plena luz del día.",
  }, "fortaleza, trampas, puas, monstruo asediando, sombras, ojos"),
  esc("b10b", [ref("fuego_y_cocina"), ref("piichi"), ref("constelaciones")], {
    comun: `Noche. DURMIERON POR TURNOS y NADA APARECIÓ DE MANERA ABIERTA: el canon es explícito, y el cuadro lo respeta. Lo que se ve es el fuego cuidado toda la noche. Objeto ancla: el fuego que no se deja apagar.`,
    camara: {
      a: "PLANO MACRO de una mano echando otro palo al fogón sin mirar, en plena noche.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL nocturno del claro con el punto del fuego encendido abajo y todo el monte alrededor negro y quieto, sin nada en él.",
    },
    ini: "una mano echa otro palo al fogón sin mirar, en plena noche.",
    fin: "desde muy arriba, el punto del fuego arde abajo y todo el monte alrededor está negro y quieto, sin nada en él.",
  }, "monstruo, ojos, sombra, silueta, niebla, ataque, resplandor"),

  // b11 — El miedo se instaló como un tercer habitante.
  esc("b11a", [ref("piichi"), ref("chinchorro"), ref("armas")], {
    comun: `Luz gris. EL MIEDO SE INSTALÓ EN LA CASA COMO UN TERCER HABITANTE: se cuenta con las cosas de la casa cambiadas de sitio por el miedo. Sin figuras. Objeto ancla: el rifle apoyado junto al chinchorro.`,
    camara: {
      a: "PLANO MACRO de un rifle apoyado en el horcón, justo al alcance de la mano desde el chinchorro.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del interior con los dos chinchorros colgados muy juntos, uno vacío, y todo puesto de cara a la puerta.",
    },
    ini: "un rifle apoyado en el horcón, justo al alcance de la mano desde el chinchorro.",
    fin: "desde arriba, los dos chinchorros cuelgan muy juntos, uno vacío, y todo está puesto de cara a la puerta.",
  }, "figura sentada, tercer personaje, espectro, sombra, monstruo, ojos"),
  escp("b11b", [ref("dos_hermanos_del_valle"), ref("roza"), ref("tierra_verde")], {
    comun: `Luz gris. LA TIERRA FÉRTIL YA NO LES PARECÍA SUYA: el verde sigue ahí y ya no lo disfrutan. Objeto ancla: la parcela buena mirada desde lejos.`,
    camara: {
      a: "PLANO MEDIO CORTO de una cara de perfil mirando la parcela, sin ninguna alegría.",
      b: "la cámara ha GIRADO siguiendo esa mirada y se ha elevado: PLANO GENERAL de la parcela verde y cargada, perfecta, y los dos parados en el borde sin entrar en ella.",
    },
    ini: "una cara de perfil mira la parcela, sin ninguna alegría.",
    fin: "la parcela está verde y cargada, perfecta, y los dos parados en el borde sin entrar en ella.",
  }, "monstruo, sombra sobre la parcela, plaga, podredumbre, fuego, ruina"),

  // b12 — Recogieron, dejaron una parte y se fueron. Nunca supieron.
  esc("b12a", [ref("roza"), ref("tierra_verde"), ref("semillas_y_siembra")], {
    comun: `Amanecer. RECOGIERON LA COSECHA Y DEJARON UNA PARTE SOBRE LA PARCELA: NO ES ABANDONO, ES PAGO, y ése es el gesto que el mito guarda para el final. Sin figuras. Objeto ancla: la cosecha dejada en el surco.`,
    camara: {
      a: "PLANO MACRO de una pila de frutos puesta con cuidado sobre la tierra del surco, ordenada.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la parcela cosechada con tres pilas dejadas a propósito en sitios distintos, y la casa vacía al fondo.",
    },
    ini: "una pila de frutos puesta con cuidado sobre la tierra del surco, ordenada.",
    fin: "desde arriba, la parcela está cosechada con tres pilas dejadas a propósito en sitios distintos, y la casa vacía al fondo.",
  }, "destruccion, quema, saqueo, altar, ofrenda ritual, sangre, simbolos"),
  esc("b12b", [ref("constelaciones"), ref("valle_evitado"), ref("llanura_cardonal")], {
    comun: `Noche. SE FUERON, otra vez GUIADOS POR LAS ESTRELLAS: es el MISMO TIPO DE PLANO de b2b y cierra el espejo. Y NUNCA SUPIERON SI ALGO LOS HABÍA SEGUIDO: EL FINAL QUEDA ABIERTO y la imagen NO LO CIERRA — no hay nada detrás de ellos, y tampoco se muestra que no lo haya. Objeto ancla: el camino de vuelta bajo las estrellas.`,
    camara: {
      a: "PLANO ENTERAMENTE DE CIELO estrellado, el mismo del principio, sin tierra en cuadro.",
      b: "la cámara ha BASCULADO hacia abajo y ha retrocedido muchísimo: GRAN PLANO GENERAL final nocturno con los dos diminutos cruzando el valle de vuelta y, detrás de ellos, la oscuridad sin nada distinguible.",
    },
    ini: "el cuadro es sólo cielo estrellado, el mismo del principio.",
    fin: "al bajar, los dos cruzan diminutos el valle de vuelta y detrás de ellos la oscuridad no deja distinguir nada.",
  }, "monstruo siguiendolos, ojos, sombra, silueta, resplandor, salvacion, castigo, texto"),
]);
