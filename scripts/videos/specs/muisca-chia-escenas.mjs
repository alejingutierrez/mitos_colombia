// Keyframes de Chía — 9 bloques × 2 = 18 cuadros ≈ 90 s.
// Guion: guion-chia-v2.json (N=9) · Acta: acta-chia.json
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

import { DIRECCION, VESTUARIO, AVOID_BASE, ref, mkKf, mkKfp } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-chia-escenas";
export const OUT_DIR = "muiscas/videos/chia/keyframes";
export { DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; rostro, cara, ojos o boca en la luna; diosa antropomorfa en el cielo; figura femenina flotando; coronacion, investidura, entrega de baston o insignia; resplandor magico sobre el muchacho; luna de sangre o roja; eclipse dramatico; lobos, brujas, simbolos lunares inventados";
export const PALETTE =
  "azul profundo de noche de altiplano, plata de luna, crema de algodon crudo, pardos de barro y paja, gris de agua fria; el naranja tenue solo en una brasa; sin saturacion ni neones";

const kf = mkKf(), kfp = mkKfp();

export const ITEMS = [
  // b1 — Bajó el sol y quedó una claridad que no era del fuego.
  kf("b1a", [ref("altiplano_noche"), ref("patio_cuca")],
    "GRAN PLANO GENERAL, el último resto de sol yéndose por un borde y el cielo ya azul profundo en el resto. EL MISMO altiplano de la referencia con LA MISMA cuca de la referencia recortada abajo; la claridad que queda no viene de ningún fuego ni del sol, viene de arriba y todavía es débil. SE MOVERÁ: el resto de sol termina de irse, la claridad de arriba gana, una brasa late abajo. Capa de primer plano: el filo del muro de la cuca. Objeto ancla: el borde de cielo que se apaga.",
    "hoguera grande, antorchas, sol visible, luna ya alta, personas"),
  kfp("b1b", [ref("muchacho_cuca"), ref("patio_cuca")],
    "PLANO MEDIO, luz azul de anochecer sin fuego. EL MISMO muchacho de la cuca de la referencia sentado en el patio de LA MISMA cuca de la referencia, EMPEZANDO a levantar la cara del suelo hacia el cielo; tiene las manos sobre las rodillas y la postura de quien lleva rato esperando. SE MOVERÁ: termina de levantar la cara, el pelo se mueve, la claridad de arriba crece sobre él. Capa de primer plano: el borde de la estera. Objeto ancla: su cara subiendo.",
    "corona, baston de mando, insignias, adoracion, resplandor sobre el, rostro extatico"),

  // b2 — Creía que gobernar era recordar cada respuesta. Apareció la luna.
  kfp("b2a", [ref("muchacho_cuca"), ref("patio_cuca"), ref("vasija_gacha")],
    "PLANO MEDIO CORTO, luz azul. EL MISMO muchacho de la referencia de perfil, repasando de memoria: los labios se mueven sin sonido y la mano va TOCANDO una por una las vasijas alineadas frente a él como quien cuenta respuestas aprendidas. SE MOVERÁ: la mano avanza a la siguiente vasija, los labios siguen, la luz azul sube un punto. Capa de primer plano: la primera vasija. Objeto ancla: la mano tocando la fila.",
    "libros, escritura, tablillas, maestro, aula, corona"),
  kf("b2b", [ref("madre_chia"), ref("altiplano_noche")],
    "GRAN PLANO GENERAL, cielo azul profundo. LA MISMA luna de la referencia SUBIENDO por detrás del filo del MISMO altiplano de la referencia, todavía a medio salir y sin prisa, con la mitad del disco aún oculta por la loma. Le queda todo el cielo por delante. SE MOVERÁ: la luna termina de salir y sigue subiendo, las nubes bajas cruzan por delante. Capa de primer plano: la cresta de la loma. Objeto ancla: el disco a medio salir.",
    "rostro en la luna, diosa, figura femenina, luna roja, eclipse, personas"),

  // b3 — Su luz se detuvo en las vasijas. «¿Qué debo aprender de ti?» (CITA)
  kf("b3a", [ref("vasija_gacha"), ref("fuente_tiquiza")],
    "PLANO DETALLE, luz de luna plateada y rasante. LA MISMA vasija de barro de la referencia en el suelo del patio con la luz de la luna ENTRANDO por su boca y bajando por la panza, y al lado el agua de LA MISMA fuente de la referencia donde la misma luz está dejando una línea de plata que todavía se está formando. SE MOVERÁ: la línea de plata termina de cruzar el agua, el agua se riza y la deshace. Capa de primer plano: el canto de la vasija. Objeto ancla: la línea de plata naciendo.",
    "personas, manos, rostro en el agua, simbolos, texto"),
  kfp("b3b", [ref("muchacho_cuca"), ref("madre_chia")],
    "PLANO MEDIO en contrapicado, plata de luna de frente. EL MISMO muchacho de la referencia de pie con la cara alzada, la boca ABRIÉNDOSE en la pregunta; arriba y al fondo, LA MISMA luna de la referencia, redonda y sin ningún rasgo, sin cara ni ojos ni boca. Él pregunta y arriba no hay a quién mirarle la cara. SE MOVERÁ: él termina de preguntar, el aliento se ve en el frío, la luna sigue subiendo. Capa de primer plano: su hombro en sombra. Objeto ancla: la boca que se abre.",
    "rostro en la luna, diosa, voz visible, rayos, resplandor sobre el, arrodillarse"),

  // b4 — Chía no respondió con una voz: cambió.
  kf("b4a", [ref("madre_chia"), ref("altiplano_noche")],
    "PLANO GENERAL CERRADO del cielo, azul profundo. LA MISMA luna de la referencia CRECIENDO hacia el lleno: el disco está casi completo y a un borde le falta todavía una uña de sombra. Nubes finas de papel pasando por delante sin taparla. SE MOVERÁ: la uña de sombra se cierra y la luna queda redonda del todo, las nubes cruzan. Capa de primer plano: una nube fina. Objeto ancla: la uña de sombra que falta.",
    "rostro, ojos, boca, diosa, personas, luna roja, eclipse"),
  kf("b4b", [ref("madre_chia"), ref("altiplano_noche")],
    "PLANO GENERAL CERRADO del cielo, mismo encuadre que el cuadro anterior. LA MISMA luna de la referencia EMPEZANDO A RETIRARSE por el otro borde: el disco está lleno menos una franja fina que ya se ha ido. Se retira borde por borde, sin drama. SE MOVERÁ: la franja de sombra avanza y se come más disco, las nubes pasan. Capa de primer plano: la misma nube fina. Objeto ancla: la franja de sombra que avanza.",
    "eclipse dramatico, luna roja, sangre, rostro, personas, tormenta"),

  // b5 — Casi desapareció, y volvió a nacer delgada.
  kf("b5a", [ref("altiplano_noche")],
    "GRAN PLANO GENERAL, noche casi sin luna. EL MISMO altiplano de la referencia bajo un cielo lleno de estrellas de papel perforado, con apenas una raya finísima de luna en un borde alto del cuadro, tan delgada que casi no está. El paisaje se lee por las estrellas, no por ella. SE MOVERÁ: la raya de luna baja un poco más hacia el borde, las estrellas laten, la niebla corre por el valle. Capa de primer plano: una loma en negro. Objeto ancla: la raya de luna.",
    "oscuridad total sin estrellas, luna llena, personas, muerte, calaveras, luto"),
  kfp("b5b", [ref("muchacho_cuca"), ref("patio_cuca")],
    "PLANO MEDIO, luz de estrellas, muy poca. EL MISMO muchacho de la referencia sentado en el patio, EMPEZANDO a bajar la cabeza mientras entiende algo: no hay gesto de derrota, sólo el cuerpo que se acomoda a una noticia. Sabe que no heredará el oficio de su padre. SE MOVERÁ: la cabeza termina de bajar, respira hondo una vez, una brasa late a su lado. Capa de primer plano: la brasa en el suelo. Objeto ancla: su cabeza bajando.",
    "llanto, rabia, gritos, corona rota, insignias, resplandor"),

  // b6 — La autoridad pasaba como la luz sobre el agua. Lo llevaron a Tíquiza.
  kf("b6a", [ref("fuente_tiquiza"), ref("madre_chia")],
    "PLANO DETALLE cenital del agua de LA MISMA fuente de la referencia, plata de luna. Una franja de luz CRUZANDO la superficie de un borde al otro sin quedarse en ningún punto: se desplaza sobre el agua y va dejando atrás lo que ya iluminó. La autoridad se parece a eso y por eso el plano es sólo agua y luz. SE MOVERÁ: la franja de luz sigue cruzando y sale por el otro borde, el agua se riza. Capa de primer plano: el canto de piedra de la fuente. Objeto ancla: la franja de luz cruzando.",
    "rostro en el agua, personas, manos, peces, simbolos, texto"),
  kfp("b6b", [ref("muchacho_cuca"), ref("companero_anciano"), ref("sendero_territorio")],
    "PLANO GENERAL, noche con luna baja. EL MISMO muchacho de la referencia caminando DE ESPALDAS por EL MISMO sendero de la referencia, un paso por detrás de UN MISMO anciano de la referencia que lo guía; van a media subida y les queda camino hasta el filo donde está la fuente. SE MOVERÁ: los dos siguen subiendo por el sendero, las mantas ondean, la luna se mueve entre las nubes. Capa de primer plano: pasto del borde en sombra. Objeto ancla: el camino que les queda.",
    "procesion ceremonial, antorchas, multitud, insignias, corona"),

  // b7 — Vio su rostro mezclado con el de Chía.
  kfp("b7a", [ref("fuente_tiquiza"), ref("muchacho_cuca"), ref("madre_chia")],
    "PLANO DETALLE cenital del agua fría de LA MISMA fuente de la referencia. En la superficie se está armando un reflejo doble: la cara del MISMO muchacho de la referencia, inclinado sobre el agua, y el disco de LA MISMA luna de la referencia superpuestos en el mismo trozo de agua, todavía temblando y sin terminar de cuajar. No es una visión: es agua fría. SE MOVERÁ: el temblor se calma y las dos imágenes se asientan una sobre la otra, luego una onda las rompe. Capa de primer plano: el canto de piedra. Objeto ancla: el reflejo doble.",
    "vision sobrenatural, rostro de diosa, fantasmas, resplandor, simbolos, texto"),
  kf("b7b", [ref("altiplano_noche"), ref("madre_chia")],
    "GRAN PLANO GENERAL en contrapicado, cielo enorme. LA MISMA luna de la referencia alta y pequeña sobre EL MISMO altiplano de la referencia, con nubes cruzándola sin que ella se detenga por nada. El encuadre da nueve décimas partes al cielo y una a la tierra: nadie puede ordenarle que pare. SE MOVERÁ: las nubes cruzan por delante y la luna sigue su curso sin alterarse. Capa de primer plano: una cresta de loma en negro. Objeto ancla: la luna pequeña en el cielo grande.",
    "personas, manos alzadas, rostro, diosa, rayos, tormenta"),

  // b8 — No recibió una respuesta: recibió un ritmo.
  kf("b8a", [ref("madre_chia"), ref("patio_cuca")],
    "PLANO GENERAL del patio de LA MISMA cuca de la referencia en una noche de luna llena, con todo el suelo y los muros bañados de plata y las sombras duras y bien dibujadas. Es una de las noches de mostrarse. SE MOVERÁ: una nube empieza a entrar por un borde y a comerse la luz del patio. Capa de primer plano: el borde del muro. Objeto ancla: la sombra dura en el suelo.",
    "personas, fiesta, fuego, rostro en la luna, texto"),
  kf("b8b", [ref("patio_cuca"), ref("altiplano_noche")],
    "PLANO GENERAL, MISMO encuadre y misma distancia que el cuadro anterior, pero en noche sin luna: el patio de LA MISMA cuca de la referencia apenas se adivina por la luz de una brasa baja y por las estrellas. La misma casa y la otra mitad del ritmo: una noche para dejar espacio. SE MOVERÁ: la brasa late y crece un poco, las estrellas parpadean, la niebla entra por el patio. Capa de primer plano: la brasa. Objeto ancla: el patio a oscuras.",
    "oscuridad total sin nada, personas, miedo, luna visible, antorchas"),

  // b9 — La luna recorre la oscuridad entera. Crecer, menguar y volver.
  kf("b9a", [ref("madre_chia"), ref("altiplano_noche")],
    "GRAN PLANO GENERAL, noche cerrada sobre EL MISMO altiplano de la referencia. LA MISMA luna de la referencia, ya sólo una uña delgada, ENTRANDO por el borde bajo del cielo para empezar otra vuelta: no huye de la oscuridad, la atraviesa. SE MOVERÁ: la uña de luna sube y avanza sobre el cielo negro, la niebla corre abajo. Capa de primer plano: una loma en negro. Objeto ancla: la uña de luna entrando.",
    "luna llena, eclipse, rostro, muerte, luto, personas"),
  kfp("b9b", [ref("muchacho_cuca"), ref("patio_cuca"), ref("madre_chia")],
    "PLANO MEDIO, primera plata de una luna nueva y delgada. EL MISMO muchacho de la referencia de pie en el patio, EMPEZANDO a girarse hacia la casa para entrar, con la cara todavía medio vuelta hacia el cielo; no lleva ninguna insignia ni objeto nuevo. Se va con un ritmo, no con un poder. SE MOVERÁ: termina de girarse y da el primer paso hacia la casa, la manta ondea, la luna delgada sube detrás. Capa de primer plano: el umbral de la casa. Objeto ancla: su cara todavía vuelta al cielo.",
    "corona, baston, insignias, investidura, aclamacion, resplandor, multitud"),
];
