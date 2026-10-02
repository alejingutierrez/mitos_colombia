// Keyframes de Chía — 9 bloques × 2 escenas × 2 cuadros = 36 imágenes ≈ 90 s.
// Guion: guion-chia-v2.json (N=9) · Acta: acta-chia.json
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _muisca-comun.mjs).
//
// DESLINDES DEL ACTA:
// · Chía NO HABLA: no respondió con una voz, CAMBIÓ. La enseñanza es la fase
//   lunar, y ninguna escena le da cara, boca ni cuerpo a la luna.
// · El muchacho NO recibe un poder: recibe un RITMO. No hay investidura.
// · La herencia viene por la familia materna: nada de coronación.
// · MENGUAR NO ES PERDER: es devolver lo recibido. No es muerte.
// · El reflejo en Tíquiza NO es una visión: es agua fría. De ahí sale un
//   límite, no una revelación.

import { DIRECCION, AVOID_BASE, ref, esc, escp, armar } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-chia-escenas";
export const OUT_DIR = "muiscas/videos/chia/keyframes";
export { DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; rostro, cara, ojos o boca en la luna; diosa antropomorfa en el cielo; figura femenina flotando; coronacion, investidura, entrega de baston o insignia; resplandor magico sobre el muchacho; luna de sangre o roja; eclipse dramatico; lobos, brujas, simbolos lunares inventados";
export const PALETTE =
  "azul profundo de noche de altiplano, plata de luna, crema de algodon crudo, pardos de barro y paja, gris de agua fria; el naranja tenue solo en una brasa; sin saturacion ni neones";

export const ITEMS = armar([
  // b1 — Bajó el sol y quedó una claridad que no era del fuego.
  esc("b1a", [ref("altiplano_noche"), ref("patio_cuca")], {
    comun: "EL MISMO altiplano de la referencia con LA MISMA cuca de la referencia abajo; la claridad que queda no viene de ningún fuego ni del sol, viene de arriba. Objeto ancla: el borde de cielo que se apaga.",
    camara: {
      a: "GRAN PLANO GENERAL en picado desde encima del altiplano: el valle entero y la cuca chiquita en un pliegue.",
      b: "la cámara ha DESCENDIDO en picado hasta el patio de la cuca y se ha girado hacia arriba: CONTRAPICADO desde el suelo del patio, con el muro entrando por abajo y casi todo el cuadro ocupado por cielo.",
    },
    ini: "por un borde queda el último resto naranja de sol y el resto del cielo ya está azul profundo.",
    fin: "el sol se ha ido del todo y desde el patio el cielo se lee azul parejo y lleno de claridad sin fuente, con una brasa latiendo en el suelo del primer término.",
  }, "hoguera grande, antorchas, sol visible, luna ya alta, personas"),
  escp("b1b", [ref("muchacho_cuca"), ref("patio_cuca")], {
    comun: "Luz azul de anochecer sin fuego. EL MISMO muchacho de la cuca de la referencia sentado en el patio de LA MISMA cuca de la referencia, con la postura de quien lleva rato esperando. Objeto ancla: su cara.",
    camara: {
      a: "PLANO MEDIO frontal a su altura, sentado, con las manos sobre las rodillas y la estera entrando por el borde.",
      b: "la cámara ha RODEADO hasta su espalda y ha subido: PLANO GENERAL desde detrás y desde arriba, en el que él queda pequeño en el patio y se ve hacia dónde mira.",
    },
    ini: "tiene la cara baja, mirando el suelo, y está empezando a levantarla.",
    fin: "se ha puesto de pie y tiene la cara vuelta hacia el cielo: desde atrás se le ve entero en mitad del patio vacío, mirando arriba.",
  }, "corona, baston de mando, insignias, adoracion, resplandor sobre el, rostro extatico"),

  // b2 — Creía que gobernar era recordar cada respuesta. Apareció la luna.
  escp("b2a", [ref("muchacho_cuca"), ref("patio_cuca"), ref("vasija_gacha")], {
    comun: "Luz azul. EL MISMO muchacho de la referencia repasando de memoria con los labios moviéndose sin sonido, frente a una fila de vasijas alineadas. Objeto ancla: la fila de vasijas.",
    camara: {
      a: "PLANO DETALLE a la altura de las vasijas: la primera enorme en primer término y su mano tocándola.",
      b: "la cámara ha hecho un TRAVELLING LATERAL a lo largo de toda la fila y ha retrocedido: PLANO MEDIO LARGO en el que se ven las ocho vasijas y él de perfil detrás de ellas.",
    },
    ini: "la mano toca la primera vasija de la fila como quien cuenta respuestas aprendidas.",
    fin: "la mano ha llegado a la última vasija de la fila y desde esta distancia se ve cuántas eran y lo pequeño que él queda al final de la cuenta.",
  }, "libros, escritura, tablillas, maestro, aula, corona"),
  esc("b2b", [ref("madre_chia"), ref("altiplano_noche")], {
    comun: "Cielo azul profundo. LA MISMA luna de la referencia saliendo por detrás del filo del MISMO altiplano de la referencia, sin prisa. Objeto ancla: el disco.",
    camara: {
      a: "PLANO MEDIO pegado a la cresta de la loma: la hierba del filo en primer término y el disco asomando detrás de ella.",
      b: "la cámara ha RETROCEDIDO mucho y ha bajado al valle: GRAN PLANO GENERAL en el que la loma es una línea baja y el cielo ocupa casi todo el cuadro.",
    },
    ini: "la luna está a medio salir, con la mitad del disco oculta por la loma.",
    fin: "la luna se ha despegado de la cresta y ha subido un buen trecho: ahora es un disco entero y pequeño en mitad de un cielo enorme, con nubes bajas cruzando por delante.",
  }, "rostro en la luna, diosa, figura femenina, luna roja, eclipse, personas"),

  // b3 — Su luz se detuvo en las vasijas. «¿Qué debo aprender de ti?» (CITA)
  esc("b3a", [ref("vasija_gacha"), ref("fuente_tiquiza")], {
    comun: "Luz de luna plateada y rasante. LA MISMA vasija de barro de la referencia en el suelo del patio y, al lado, el agua de LA MISMA fuente de la referencia. Objeto ancla: la línea de plata sobre el agua.",
    camara: {
      a: "PLANO DETALLE dentro de la boca de la vasija: la luz entrando por el borde y bajando por la panza de barro.",
      b: "la cámara ha SALIDO de la vasija y ha basculado a cenital sobre el agua de la fuente: PLANO CENITAL del agua, con la vasija asomando por una esquina.",
    },
    ini: "la luz apenas ha entrado en la vasija y el agua de al lado está oscura.",
    fin: "la línea de plata ha cruzado el agua entera de borde a borde y luego un rizo la ha quebrado en pedazos temblando.",
  }, "personas, manos, rostro en el agua, simbolos, texto"),
  escp("b3b", [ref("muchacho_cuca"), ref("madre_chia")], {
    comun: "Plata de luna de frente. EL MISMO muchacho de la referencia de pie con la cara alzada; arriba, LA MISMA luna de la referencia, redonda y sin ningún rasgo, sin cara ni ojos ni boca. Él pregunta y arriba no hay a quién mirarle la cara. Objeto ancla: la luna.",
    camara: {
      a: "PLANO MEDIO en contrapicado desde muy abajo: él ocupando el tercio inferior y la luna arriba, pequeña.",
      b: "la cámara ha SUBIDO en vertical hasta quedar por encima de él y ha basculado a picado: ahora se le ve desde arriba, pequeño en el patio, con la cara vuelta hacia el objetivo y la luna fuera de cuadro.",
    },
    ini: "la boca se le está abriendo en la pregunta.",
    fin: "ha terminado de preguntar y se ha quedado con la cara vuelta hacia arriba y los brazos caídos: desde este ángulo lo que se ve es que no hay nadie con él en el patio.",
  }, "rostro en la luna, diosa, voz visible, rayos, resplandor sobre el, arrodillarse"),

  // b4 — Chía no respondió con una voz: cambió.
  esc("b4a", [ref("madre_chia"), ref("altiplano_noche")], {
    comun: "Cielo azul profundo, nubes finas de papel pasando por delante. LA MISMA luna de la referencia creciendo hacia el lleno. Objeto ancla: la uña de sombra que le falta.",
    camara: {
      a: "GRAN PLANO GENERAL del altiplano con la luna pequeña y alta sobre el valle.",
      b: "la cámara ha hecho un ACERCAMIENTO larguísimo hasta la luna misma: PLANO CERRADO del disco llenando el cuadro, con su textura de papel y sus cráteres de relieve bajo.",
    },
    ini: "vista pequeña sobre el valle, el disco está casi completo y a un borde le queda una uña de sombra.",
    fin: "de cerca se ve que la uña de sombra se ha cerrado y el disco ha quedado redondo del todo, entero y lleno, con una nube fina cruzándolo.",
  }, "rostro, ojos, boca, diosa, personas, luna roja, eclipse"),
  esc("b4b", [ref("madre_chia"), ref("altiplano_noche")], {
    comun: "LA MISMA luna de la referencia retirándose por el borde contrario, borde por borde y sin drama. Objeto ancla: la franja de sombra.",
    camara: {
      a: "PLANO CERRADO del disco llenando el cuadro, igual de cerca que el final de la escena anterior.",
      b: "la cámara se ha ALEJADO y ha bajado hasta el altiplano: GRAN PLANO GENERAL del valle nocturno con la luna arriba y pequeña, ya mordida.",
    },
    ini: "de cerca, el disco está lleno menos una franja fina que ya se ha ido por un borde.",
    fin: "desde lejos se ve la luna claramente mordida por un lado sobre el valle entero, y el altiplano abajo recibe menos plata que antes.",
  }, "eclipse dramatico, luna roja, sangre, rostro, personas, tormenta"),

  // b5 — Casi desapareció, y volvió a nacer delgada.
  esc("b5a", [ref("altiplano_noche")], {
    comun: "Noche casi sin luna. EL MISMO altiplano de la referencia bajo un cielo lleno de estrellas de papel perforado; el paisaje se lee por las estrellas, no por la luna. Objeto ancla: la raya de luna.",
    camara: {
      a: "GRAN PLANO GENERAL frontal del valle con el cielo estrellado encima y la raya de luna arriba a un lado.",
      b: "la cámara ha basculado hacia arriba hasta dejar la tierra en una franja mínima abajo: PLANO CASI ENTERAMENTE DE CIELO, con la raya de luna cerca del borde y las estrellas ocupándolo todo.",
    },
    ini: "hay apenas una raya finísima de luna en un borde alto, tan delgada que casi no está.",
    fin: "en un cielo que ahora es casi todo el cuadro la raya de luna ha bajado hasta rozar el borde y está a punto de salirse; abajo, en la franja de tierra, corre la niebla.",
  }, "oscuridad total sin estrellas, luna llena, personas, muerte, calaveras, luto"),
  escp("b5b", [ref("muchacho_cuca"), ref("patio_cuca")], {
    comun: "Luz de estrellas, muy poca. EL MISMO muchacho de la referencia en el patio; no hay gesto de derrota, sólo el cuerpo que se acomoda a una noticia: sabe que no heredará el oficio de su padre. Objeto ancla: la brasa del suelo.",
    camara: {
      a: "PLANO GENERAL del patio a oscuras, él pequeño y sentado a un lado, con la brasa en el suelo.",
      b: "la cámara ha AVANZADO hasta la brasa y se ha quedado a ras de suelo junto a ella: PLANO DETALLE de la brasa en primer término con él desenfocado y grande detrás.",
    },
    ini: "está empezando a bajar la cabeza, con la espalda todavía recta.",
    fin: "ha bajado la cabeza del todo y ha respirado hondo, con los hombros sueltos, mientras la brasa de delante se ha avivado y lo ilumina de naranja por debajo.",
  }, "llanto, rabia, gritos, corona rota, insignias, resplandor"),

  // b6 — La autoridad pasaba como la luz sobre el agua. Lo llevaron a Tíquiza.
  esc("b6a", [ref("fuente_tiquiza"), ref("madre_chia")], {
    comun: "Plata de luna sobre el agua de LA MISMA fuente de la referencia. Sólo agua y luz: la autoridad se parece a una franja que se desplaza y deja atrás lo que ya iluminó. Objeto ancla: la franja de luz.",
    camara: {
      a: "PLANO DETALLE cenital muy cerrado del agua, con el canto de piedra de la fuente entrando por un borde.",
      b: "la cámara ha ACOMPAÑADO a la franja de luz cruzando el agua y ha subido: PLANO GENERAL cenital de la fuente entera, con la franja saliendo ya por el borde contrario.",
    },
    ini: "la franja de luz está entrando por un borde del agua y apenas ha empezado a cruzar.",
    fin: "vista desde arriba, la franja ha cruzado la fuente entera y sale por el otro lado, dejando detrás el agua que ya recorrió otra vez oscura y rizada.",
  }, "rostro en el agua, personas, manos, peces, simbolos, texto"),
  escp("b6b", [ref("muchacho_cuca"), ref("companero_anciano"), ref("sendero_territorio")], {
    comun: "Noche con luna baja. EL MISMO muchacho de la referencia caminando por EL MISMO sendero de la referencia, un paso por detrás de UN MISMO anciano de la referencia que lo guía. Objeto ancla: el camino.",
    camara: {
      a: "PLANO MEDIO por detrás de ellos, pegado a sus espaldas, con el pasto del borde cruzando el primer término.",
      b: "la cámara se ha QUEDADO ATRÁS y ha subido mucho: GRAN PLANO GENERAL en picado en el que los dos son dos figuras diminutas a media ladera y se ve todo el sendero que les falta.",
    },
    ini: "van juntos y muy cerca del objetivo, subiendo.",
    fin: "desde arriba se ve que han subido un buen trecho y que el sendero sigue serpenteando hasta el filo donde está la fuente; la luna se ha corrido entre las nubes.",
  }, "procesion ceremonial, antorchas, multitud, insignias, corona"),

  // b7 — Vio su rostro mezclado con el de Chía.
  escp("b7a", [ref("fuente_tiquiza"), ref("muchacho_cuca"), ref("madre_chia")], {
    comun: "Agua fría de LA MISMA fuente de la referencia. En la superficie se arma un reflejo doble: la cara del MISMO muchacho de la referencia, inclinado sobre el agua, y el disco de LA MISMA luna de la referencia superpuestos en el mismo trozo de agua. No es una visión: es agua fría. Objeto ancla: el reflejo doble.",
    camara: {
      a: "PLANO MEDIO lateral del muchacho inclinado sobre el brocal, con el agua abajo y el reflejo pequeño.",
      b: "la cámara ha BAJADO hasta el agua y se ha puesto cenital: PLANO DETALLE del reflejo doble llenando el cuadro, con el borde de piedra en una esquina.",
    },
    ini: "él se está inclinando y el reflejo tiembla sin terminar de cuajar.",
    fin: "de cerca, la cara y el disco se han asentado uno sobre el otro, nítidos y superpuestos, mientras una onda entra por un borde a romperlos.",
  }, "vision sobrenatural, rostro de diosa, fantasmas, resplandor, simbolos, texto"),
  esc("b7b", [ref("altiplano_noche"), ref("madre_chia")], {
    comun: "LA MISMA luna de la referencia sobre EL MISMO altiplano de la referencia. Nadie puede ordenarle que pare. Objeto ancla: la luna.",
    camara: {
      a: "PLANO MEDIO de la cresta de una loma en negro con la luna justo encima de ella, grande por la cercanía del primer término.",
      b: "la cámara ha RETROCEDIDO y ha basculado a CONTRAPICADO EXTREMO: nueve décimas de cuadro para el cielo y una franja mínima de tierra abajo, con la luna pequeña en mitad de todo ese vacío.",
    },
    ini: "una nube larga se acerca a la luna por un lado sin haberla alcanzado.",
    fin: "la nube ha cruzado por delante y ya sale por el otro lado; en el cielo enorme la luna ha seguido su curso sin alterarse en nada.",
  }, "personas, manos alzadas, rostro, diosa, rayos, tormenta"),

  // b8 — No recibió una respuesta: recibió un ritmo.
  esc("b8a", [ref("madre_chia"), ref("patio_cuca")], {
    comun: "Noche de luna llena sobre el patio de LA MISMA cuca de la referencia. Es una de las noches de mostrarse. Objeto ancla: la sombra dura en el suelo.",
    camara: {
      a: "PLANO GENERAL del patio a media altura, todo el suelo y los muros bañados de plata y las sombras dibujadas duras.",
      b: "la cámara ha DESCENDIDO hasta el suelo y se ha acercado a una sola sombra: PLANO DETALLE del filo de esa sombra sobre la tierra del patio.",
    },
    ini: "las sombras se dibujan duras y enteras en todo el patio.",
    fin: "de cerca se ve cómo el filo de esa sombra se deshace y se vuelve gris: una nube ha entrado y se ha comido la mitad de la luz del patio.",
  }, "personas, fiesta, fuego, rostro en la luna, texto"),
  esc("b8b", [ref("patio_cuca"), ref("altiplano_noche")], {
    comun: "El mismo patio de LA MISMA cuca de la referencia, pero en noche sin luna: apenas se adivina por la luz de una brasa baja y por las estrellas. La misma casa y la otra mitad del ritmo: una noche para dejar espacio. Objeto ancla: la brasa.",
    camara: {
      a: "PLANO DETALLE de la brasa en el suelo, casi negro alrededor.",
      b: "la cámara se ha ELEVADO y ha retrocedido hasta EL MISMO PLANO GENERAL del patio con que empezaba la escena anterior, ahora sin plata: sólo los contornos y las estrellas encima.",
    },
    ini: "la brasa está baja y alrededor no se ve nada.",
    fin: "desde la misma distancia que la noche de luna, el patio se lee apenas en sus contornos, sin una sola sombra dibujada, con la niebla entrando y las estrellas afirmadas arriba.",
  }, "oscuridad total sin nada, personas, miedo, luna visible, antorchas"),

  // b9 — La luna recorre la oscuridad entera. Crecer, menguar y volver.
  esc("b9a", [ref("madre_chia"), ref("altiplano_noche")], {
    comun: "Noche cerrada sobre EL MISMO altiplano de la referencia. LA MISMA luna de la referencia, ya sólo una uña delgada, empezando otra vuelta: no huye de la oscuridad, la atraviesa. Objeto ancla: la uña de luna.",
    camara: {
      a: "PLANO GENERAL con una loma en negro ocupando la mitad inferior y la uña de luna asomando por el borde bajo del cielo.",
      b: "la cámara ha hecho un PANEO ASCENDENTE largo siguiendo a la luna: ahora la loma ha salido del cuadro por abajo y sólo hay cielo negro con la uña en el centro.",
    },
    ini: "la uña de luna está entrando apenas por el borde bajo del cielo, con la loma debajo.",
    fin: "la luna ha subido hasta el centro de un cielo enteramente negro y la tierra ya no está en el cuadro: la atraviesa sola.",
  }, "luna llena, eclipse, rostro, muerte, luto, personas"),
  escp("b9b", [ref("muchacho_cuca"), ref("patio_cuca"), ref("madre_chia")], {
    comun: "Primera plata de una luna nueva y delgada. EL MISMO muchacho de la referencia en el patio; no lleva ninguna insignia ni objeto nuevo, porque se va con un ritmo y no con un poder. Objeto ancla: el umbral de la casa.",
    camara: {
      a: "PLANO MEDIO frontal de él en mitad del patio, con la cara medio vuelta hacia el cielo.",
      b: "la cámara se ha desplazado hasta DENTRO de la casa y mira hacia fuera por el umbral: PLANO GENERAL enmarcado por el vano oscuro, con él entrando y el patio y la luna delgada detrás.",
    },
    ini: "está empezando a girarse hacia la casa con la cara todavía vuelta hacia arriba.",
    fin: "ha cruzado el umbral y entra en la casa, visto desde dentro y a contraluz, con el patio vacío y la luna delgada al fondo del vano.",
  }, "corona, baston, insignias, investidura, aclamacion, resplandor, multitud"),
]);
