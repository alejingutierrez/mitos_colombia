// Keyframes de Chía — 9 bloques × 2 escenas × 2 cuadros = 36 imágenes ≈ 90 s.
// Guion: guion-chia-v2.json (N=9) · Acta: acta-chia.json
// DOCTRINA v3: cada escena es un par A→B (ver _muisca-comun.mjs).
//
// DESLINDES DEL ACTA:
// · Chía NO HABLA. La fuente lo dice: no respondió con una voz, hizo algo más
//   difícil de olvidar, CAMBIÓ. La enseñanza es la fase lunar, no un
//   parlamento, y ninguna escena le da cara, boca ni cuerpo a la luna.
// · El muchacho NO recibe un poder: recibe un RITMO. No hay investidura.
// · La herencia NO es de padre a hijo: la autoridad viene por la familia
//   materna. Nada de coronación ni de entrega de insignias.
// · MENGUAR NO ES PERDER: es devolver lo recibido, y el ciclo se cierra
//   volviendo a nacer delgada. No narrarlo como muerte ni como pérdida.
// · El reflejo en Tíquiza NO es una visión: es su propia cara mezclada con la
//   luna en agua fría. De ahí sale un límite, no una revelación.
//
// GUION DE LUZ: última claridad sin fuego → luna subiendo → plata sobre las
// vasijas → luna llena → luna casi ausente → plata sobre el agua → reflejo
// partido → noche con y sin luna → luna nueva volviendo.

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
    comun: "GRAN PLANO GENERAL. EL MISMO altiplano de la referencia con LA MISMA cuca de la referencia recortada abajo; la claridad que queda no viene de ningún fuego ni del sol, viene de arriba. Capa de primer plano: el filo del muro de la cuca. Objeto ancla: el borde de cielo que se apaga.",
    ini: "por un borde queda todavía el último resto naranja de sol y el resto del cielo ya está azul profundo; la claridad de arriba es débil.",
    fin: "el resto de sol se fue del todo y el cielo quedó azul parejo, con la claridad de arriba ya ganada sobre el paisaje y una brasa latiendo abajo.",
  }, "hoguera grande, antorchas, sol visible, luna ya alta, personas"),
  escp("b1b", [ref("muchacho_cuca"), ref("patio_cuca")], {
    comun: "PLANO MEDIO, luz azul de anochecer sin fuego. EL MISMO muchacho de la cuca de la referencia sentado en el patio de LA MISMA cuca de la referencia, con las manos sobre las rodillas y la postura de quien lleva rato esperando. Capa de primer plano: el borde de la estera. Objeto ancla: su cara.",
    ini: "tiene la cara baja, mirando el suelo, y está empezando a levantarla hacia el cielo.",
    fin: "terminó de levantar la cara del todo hacia el cielo, con el pelo movido y la claridad de arriba dándole en la frente.",
  }, "corona, baston de mando, insignias, adoracion, resplandor sobre el, rostro extatico"),

  // b2 — Creía que gobernar era recordar cada respuesta. Apareció la luna.
  escp("b2a", [ref("muchacho_cuca"), ref("patio_cuca"), ref("vasija_gacha")], {
    comun: "PLANO MEDIO CORTO, luz azul. EL MISMO muchacho de la referencia de perfil, repasando de memoria con los labios moviéndose sin sonido, frente a una fila de vasijas alineadas. Capa de primer plano: la primera vasija. Objeto ancla: la mano sobre la fila.",
    ini: "la mano está tocando la primera vasija de la fila, como quien cuenta respuestas aprendidas.",
    fin: "la mano avanzó hasta la última vasija de la fila, los labios siguen moviéndose y la luz azul subió un punto.",
  }, "libros, escritura, tablillas, maestro, aula, corona"),
  esc("b2b", [ref("madre_chia"), ref("altiplano_noche")], {
    comun: "GRAN PLANO GENERAL, cielo azul profundo. LA MISMA luna de la referencia saliendo por detrás del filo del MISMO altiplano de la referencia, sin prisa. Capa de primer plano: la cresta de la loma. Objeto ancla: el disco.",
    ini: "la luna está a medio salir, con la mitad del disco todavía oculta por la loma.",
    fin: "la luna acabó de salir entera y se despegó de la cresta, subiendo por el cielo con nubes bajas cruzando por delante.",
  }, "rostro en la luna, diosa, figura femenina, luna roja, eclipse, personas"),

  // b3 — Su luz se detuvo en las vasijas. «¿Qué debo aprender de ti?» (CITA)
  esc("b3a", [ref("vasija_gacha"), ref("fuente_tiquiza")], {
    comun: "PLANO DETALLE, luz de luna plateada y rasante. LA MISMA vasija de barro de la referencia en el suelo del patio con la luz entrando por su boca y bajando por la panza, y al lado el agua de LA MISMA fuente de la referencia. Capa de primer plano: el canto de la vasija. Objeto ancla: la línea de plata sobre el agua.",
    ini: "la línea de plata apenas empieza a formarse en un borde del agua.",
    fin: "la línea de plata cruzó el agua entera de borde a borde y luego un rizo la quebró en pedazos temblando.",
  }, "personas, manos, rostro en el agua, simbolos, texto"),
  escp("b3b", [ref("muchacho_cuca"), ref("madre_chia")], {
    comun: "PLANO MEDIO en contrapicado, plata de luna de frente. EL MISMO muchacho de la referencia de pie con la cara alzada; arriba y al fondo, LA MISMA luna de la referencia, redonda y sin ningún rasgo, sin cara ni ojos ni boca. Él pregunta y arriba no hay a quién mirarle la cara. Capa de primer plano: su hombro en sombra. Objeto ancla: la boca.",
    ini: "la boca se le está abriendo en la pregunta y el aire todavía no se le ve.",
    fin: "terminó de preguntar y cerró la boca, con el aliento hecho vaho en el frío y la luna algo más alta detrás.",
  }, "rostro en la luna, diosa, voz visible, rayos, resplandor sobre el, arrodillarse"),

  // b4 — Chía no respondió con una voz: cambió.
  esc("b4a", [ref("madre_chia"), ref("altiplano_noche")], {
    comun: "PLANO GENERAL CERRADO del cielo, azul profundo, con nubes finas de papel pasando por delante sin taparla. LA MISMA luna de la referencia creciendo hacia el lleno. Capa de primer plano: una nube fina. Objeto ancla: la uña de sombra que le falta.",
    ini: "el disco está casi completo y a un borde le queda todavía una uña de sombra.",
    fin: "la uña de sombra se cerró y la luna quedó redonda del todo, entera y llena, con las nubes finas cruzando.",
  }, "rostro, ojos, boca, diosa, personas, luna roja, eclipse"),
  esc("b4b", [ref("madre_chia"), ref("altiplano_noche")], {
    comun: "PLANO GENERAL CERRADO del cielo, EL MISMO encuadre y la misma distancia que la escena anterior. LA MISMA luna de la referencia retirándose por el borde contrario, borde por borde y sin drama. Capa de primer plano: la misma nube fina. Objeto ancla: la franja de sombra.",
    ini: "el disco está lleno menos una franja fina que ya se ha ido por un borde.",
    fin: "la franja de sombra avanzó y se comió casi un tercio del disco, que ha quedado claramente mordido por ese lado.",
  }, "eclipse dramatico, luna roja, sangre, rostro, personas, tormenta"),

  // b5 — Casi desapareció, y volvió a nacer delgada.
  esc("b5a", [ref("altiplano_noche")], {
    comun: "GRAN PLANO GENERAL, noche casi sin luna. EL MISMO altiplano de la referencia bajo un cielo lleno de estrellas de papel perforado; el paisaje se lee por las estrellas, no por la luna. Capa de primer plano: una loma en negro. Objeto ancla: la raya de luna.",
    ini: "en un borde alto del cuadro hay apenas una raya finísima de luna, tan delgada que casi no está.",
    fin: "la raya de luna bajó hasta rozar el borde del cuadro y la niebla corrió por el fondo del valle, con las estrellas más marcadas.",
  }, "oscuridad total sin estrellas, luna llena, personas, muerte, calaveras, luto"),
  escp("b5b", [ref("muchacho_cuca"), ref("patio_cuca")], {
    comun: "PLANO MEDIO, luz de estrellas, muy poca. EL MISMO muchacho de la referencia sentado en el patio; no hay gesto de derrota, sólo el cuerpo que se acomoda a una noticia: sabe que no heredará el oficio de su padre. Capa de primer plano: la brasa en el suelo. Objeto ancla: su cabeza.",
    ini: "está empezando a bajar la cabeza, con la espalda todavía recta.",
    fin: "terminó de bajar la cabeza y respiró hondo, con los hombros sueltos y la brasa del suelo latiendo más viva a su lado.",
  }, "llanto, rabia, gritos, corona rota, insignias, resplandor"),

  // b6 — La autoridad pasaba como la luz sobre el agua. Lo llevaron a Tíquiza.
  esc("b6a", [ref("fuente_tiquiza"), ref("madre_chia")], {
    comun: "PLANO DETALLE cenital del agua de LA MISMA fuente de la referencia, plata de luna. Sólo agua y luz: la autoridad se parece a una franja que se desplaza y deja atrás lo que ya iluminó. Capa de primer plano: el canto de piedra de la fuente. Objeto ancla: la franja de luz.",
    ini: "la franja de luz está entrando por un borde del agua y apenas ha empezado a cruzar.",
    fin: "la franja de luz cruzó al borde contrario y está saliendo del cuadro, dejando el agua que ya recorrió otra vez oscura y rizada.",
  }, "rostro en el agua, personas, manos, peces, simbolos, texto"),
  escp("b6b", [ref("muchacho_cuca"), ref("companero_anciano"), ref("sendero_territorio")], {
    comun: "PLANO GENERAL, noche con luna baja. EL MISMO muchacho de la referencia caminando DE ESPALDAS por EL MISMO sendero de la referencia, un paso por detrás de UN MISMO anciano de la referencia que lo guía. Capa de primer plano: pasto del borde en sombra. Objeto ancla: el camino que les queda.",
    ini: "van a media subida y les queda todavía un buen trecho hasta el filo donde está la fuente.",
    fin: "subieron hasta cerca del filo y ya se ven pequeños contra el cielo, con las mantas ondeando y la luna corrida entre las nubes.",
  }, "procesion ceremonial, antorchas, multitud, insignias, corona"),

  // b7 — Vio su rostro mezclado con el de Chía.
  escp("b7a", [ref("fuente_tiquiza"), ref("muchacho_cuca"), ref("madre_chia")], {
    comun: "PLANO DETALLE cenital del agua fría de LA MISMA fuente de la referencia. En la superficie se arma un reflejo doble: la cara del MISMO muchacho de la referencia, inclinado sobre el agua, y el disco de LA MISMA luna de la referencia superpuestos en el mismo trozo de agua. No es una visión: es agua fría. Capa de primer plano: el canto de piedra. Objeto ancla: el reflejo doble.",
    ini: "las dos imágenes tiemblan y todavía no terminan de cuajar una sobre la otra.",
    fin: "el temblor se calmó y la cara y el disco quedaron asentados uno sobre el otro, nítidos, mientras una onda entra por un borde a romperlos.",
  }, "vision sobrenatural, rostro de diosa, fantasmas, resplandor, simbolos, texto"),
  esc("b7b", [ref("altiplano_noche"), ref("madre_chia")], {
    comun: "GRAN PLANO GENERAL en contrapicado, cielo enorme: nueve décimas partes de cuadro para el cielo y una para la tierra, porque nadie puede ordenarle que pare. LA MISMA luna de la referencia alta y pequeña sobre EL MISMO altiplano de la referencia. Capa de primer plano: una cresta de loma en negro. Objeto ancla: la luna pequeña en el cielo grande.",
    ini: "una nube larga se acerca a la luna por un lado sin haberla alcanzado.",
    fin: "la nube cruzó por delante de la luna y ya sale por el otro lado, y la luna siguió su curso sin alterarse en nada.",
  }, "personas, manos alzadas, rostro, diosa, rayos, tormenta"),

  // b8 — No recibió una respuesta: recibió un ritmo.
  esc("b8a", [ref("madre_chia"), ref("patio_cuca")], {
    comun: "PLANO GENERAL del patio de LA MISMA cuca de la referencia en una noche de luna llena. Es una de las noches de mostrarse. Capa de primer plano: el borde del muro. Objeto ancla: la sombra dura en el suelo.",
    ini: "todo el suelo y los muros están bañados de plata y las sombras se dibujan duras y enteras.",
    fin: "una nube entró por un borde y se comió la mitad de la luz del patio: media sombra dura sigue dibujada y la otra media se ha borrado.",
  }, "personas, fiesta, fuego, rostro en la luna, texto"),
  esc("b8b", [ref("patio_cuca"), ref("altiplano_noche")], {
    comun: "PLANO GENERAL, EL MISMO encuadre y la misma distancia que la escena anterior, pero en noche sin luna: el patio de LA MISMA cuca de la referencia apenas se adivina por la luz de una brasa baja y por las estrellas. La misma casa y la otra mitad del ritmo: una noche para dejar espacio. Capa de primer plano: la brasa. Objeto ancla: el patio a oscuras.",
    ini: "la brasa está baja y el patio se lee apenas en sus contornos.",
    fin: "la brasa creció un punto y alcanza a marcar el borde del muro, mientras la niebla entró por el patio y las estrellas se afirmaron arriba.",
  }, "oscuridad total sin nada, personas, miedo, luna visible, antorchas"),

  // b9 — La luna recorre la oscuridad entera. Crecer, menguar y volver.
  esc("b9a", [ref("madre_chia"), ref("altiplano_noche")], {
    comun: "GRAN PLANO GENERAL, noche cerrada sobre EL MISMO altiplano de la referencia. LA MISMA luna de la referencia, ya sólo una uña delgada, empezando otra vuelta: no huye de la oscuridad, la atraviesa. Capa de primer plano: una loma en negro. Objeto ancla: la uña de luna.",
    ini: "la uña de luna está entrando apenas por el borde bajo del cielo.",
    fin: "la uña de luna subió y avanzó un buen trecho sobre el cielo negro, con la niebla corriendo abajo por el valle.",
  }, "luna llena, eclipse, rostro, muerte, luto, personas"),
  escp("b9b", [ref("muchacho_cuca"), ref("patio_cuca"), ref("madre_chia")], {
    comun: "PLANO MEDIO, primera plata de una luna nueva y delgada. EL MISMO muchacho de la referencia de pie en el patio; no lleva ninguna insignia ni objeto nuevo, porque se va con un ritmo y no con un poder. Capa de primer plano: el umbral de la casa. Objeto ancla: su cara.",
    ini: "está empezando a girarse hacia la casa con la cara todavía medio vuelta hacia el cielo.",
    fin: "terminó de girarse y dio el primer paso hacia el umbral, con la manta ondeando y la luna delgada subiendo detrás.",
  }, "corona, baston, insignias, investidura, aclamacion, resplandor, multitud"),
]);
