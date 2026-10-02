// Keyframes de Tomagata, el Cacique Rabón — 12 bloques × 2 escenas × 2 cuadros
// = 48 imágenes ≈ 120 s.
// Guion: guion-tomagata-v2.json (N=12) · Acta: acta-tomagata.json (24 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _muisca-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · Tomagata NO TRANSFORMA A NADIE en todo el relato. Lo dice él mismo. EL
//   LAGARTO DE LA PIEDRA SIGUE SIENDO UN LAGARTO al ir y al volver, y es el
//   mismo plano las dos veces. El poder existe SÓLO COMO CREENCIA.
// · El monstruo está CANSADO: cuatro orejas, cola de tigre y un ojo, y a la
//   vez diez caminatas, la respiración honda y los pies heridos. Las dos
//   cosas a la vez, sin que una desmienta a la otra — y en el mismo plano
//   siempre que se pueda.
// · El joven NO DESOBEDECE: el zaque le ORDENA mirarlo, y él obedece contra
//   la prohibición. Esa trampa es del relato y hay que sostenerla.
// · Su respuesta NO es insolencia ni valentía: cuando le preguntan si no
//   teme, dice que SÍ. Ve el cansancio y tiene miedo al mismo tiempo.
// · Lo que el zaque pide en el templo NO SE OYE ni se insinúa.
//
// GUION DE LUZ: paso del zaque con todas las cabezas bajas → cola en el polvo
// → confirmación del cacicazgo → salida nocturna → lámpara apagada → orden de
// mirar → los pies heridos → el lagarto quieto → adoratorios → primer sol en
// el templo → el mismo lagarto al volver → piedra vacía.

import { DIRECCION, AVOID_BASE, ref, esc, escp, armar } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-tomagata-escenas";
export const OUT_DIR = "muiscas/videos/tomagata/keyframes";
export { DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; transformacion de una persona en animal, cuerpo mutando, magia visible, resplandor, particulas; demonio, monstruo de terror, colmillos, garras, ojos encendidos; tortura, ejecuciones, sangre, cadaveres; aureola, rayos, poderes dibujados; templo monumental de piedra labrada, columnas, escalinatas";
export const PALETTE =
  "pardo de polvo de camino, crema de algodon crudo, ocre y verde de las cenefas, negro azulado de noche de altiplano, naranja corto de la lampara de sebo, ocre de paja del templo al amanecer; sin saturacion";

const TOMA =
  "EL MISMO Tomagata de la referencia (hombre mayor de unos sesenta años, enjuto y de espalda algo encorvada, rostro sereno y MUY CANSADO, con CUATRO OREJAS —dos en su lugar y dos más pequeñas justo encima— y una COLA larga como de tigre que arrastra por el polvo; es tuerto de un ojo)";
const MUCHACHO =
  "EL MISMO muchacho de la lámpara de la referencia (joven de unos dieciséis años, rostro despierto y algo asustado, pelo negro liso corto, manta corta de algodón crudo sin cenefas ceñida a la cintura, descalzo)";
const LAGARTO =
  "EL MISMO lagarto de la referencia (lagarto pequeño de papel, cuerpo pardo verdoso con escamas recortadas una a una, patas abiertas y cola larga, completamente inmóvil sobre una piedra plana y gris de borde de camino con liquen claro en las grietas)";

export const ITEMS = armar([
  // b1 — Nadie alzaba los ojos. Cuatro orejas y una cola.
  escp("b1a", [ref("tomagata_zaque"), ref("familias_muiscas"), ref("cercado_bacata")], {
    comun: `Luz de día en Hunza. ${TOMA} pasando, y NADIE alzando los ojos. Objeto ancla: las cabezas bajas.`,
    camara: {
      a: "PLANO MACRO de una cara con los ojos clavados en el suelo mientras algo pasa por delante, desenfocado.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL de la calle con veinte personas a los lados, todas con la cabeza baja, y él cruzando en medio.",
    },
    ini: "una cara mira al suelo mientras algo cruza por delante sin que se vea qué es.",
    fin: "desde arriba, las veinte personas de los dos lados de la calle tienen la cabeza baja a la vez y él cruza por el medio sin que nadie lo mire.",
  }, "arrodillarse, adoracion, latigos, guardias, aureola, terror teatral"),
  esc("b1b", [ref("tomagata_zaque")], {
    comun: `Sus rasgos: cuatro orejas, una cola como de tigre que arrastra por el polvo y un solo ojo abierto. Se enseñan enteros y sin terror. Objeto ancla: las cuatro orejas y la cola.`,
    camara: {
      a: "PLANO MACRO del lado de su cabeza con las dos orejas de arriba, más pequeñas, sobre las de su sitio.",
      b: "la cámara ha hecho un PANEO LATERAL descendente a lo largo del cuerpo hasta el suelo: PLANO MACRO de la cola arrastrando por el polvo y dejando una raya continua detrás.",
    },
    ini: "las cuatro orejas se ven juntas, las dos de arriba más pequeñas que las de abajo.",
    fin: "al final del recorrido, la cola larga arrastra por el polvo y va dejando una raya continua detrás de él.",
  }, "monstruo de terror, colmillos, garras, ojos encendidos, demonio, sangre"),

  // b2 — El Cacique Rabón. Decían que volvía lagarto a quien lo miraba.
  escp("b2a", [ref("familias_muiscas"), ref("tomagata_zaque"), ref("mercado_bacata")], {
    comun: `Por la cola le dicen el Cacique Rabón, y dicen también que oye una burla dicha en voz baja al otro lado del valle. Lo que se ve es la gente cuidándose de hablar. Objeto ancla: las bocas que se tapan.`,
    camara: {
      a: "PLANO MEDIO CORTO de dos personas hablando muy bajo, una tapándose la boca con la mano.",
      b: "la cámara ha RETROCEDIDO y ha subido: GRAN PLANO GENERAL del valle entero con el mercado pequeño a un lado y, muy lejos al otro, la silueta del zaque en un camino.",
    },
    ini: "dos hablan tapándose la boca con la mano.",
    fin: "desde arriba se ve la distancia entera del valle entre el mercado donde susurran y el camino donde él va: eso es lo que creen que oye.",
  }, "aureola, poderes dibujados, ondas de sonido, magia visible"),
  escp("b2b", [ref("familias_muiscas"), ref("lagarto_piedra")], {
    comun: `Y decían que a quien lo miraba de frente o lo enojaba lo volvía serpiente, lagarto u otra bestia. ES UNA CREENCIA: lo que se ve es gente contándolo y un lagarto normal en una piedra. Objeto ancla: el lagarto del cuento.`,
    camara: {
      a: "PLANO MEDIO CORTO de alguien contándolo con los ojos muy abiertos, señalando hacia el camino.",
      b: "la cámara ha girado y AVANZADO en la dirección que señala: PLANO MACRO de un lagarto pequeño y corriente quieto sobre una piedra del borde del camino, con líquen en las grietas.",
    },
    ini: "alguien lo cuenta con los ojos muy abiertos y señala hacia el camino.",
    fin: "adonde señalaba hay un lagarto pequeño y corriente, quieto sobre una piedra: eso es todo lo que hay.",
  }, "transformacion visible, cuerpo mutando, magia, resplandor, gritos"),

  // b3 — Un poder que el Sol le dio. Cruzaba diez veces a Sugamuxi.
  escp("b3a", [ref("tomagata_zaque"), ref("idacansas_sacerdote"), ref("santuario_moja")], {
    comun: `Era un poder que Idacansás y el Sol le habían dado a él y a sus herederos cuando le confirmaron el cacicazgo. Se cuenta como un acto entre dos hombres, sin efectos. Objeto ancla: las dos manos.`,
    camara: {
      a: "PLANO MACRO de dos manos viejas apoyadas sobre las de él, sin ningún resplandor.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO LARGO del recinto con los dos de pie frente a frente y unos pocos testigos alrededor.",
    },
    ini: "unas manos viejas se apoyan sobre las suyas, sin que pase nada visible.",
    fin: "desde más lejos, los dos están de pie frente a frente con unos pocos testigos: no hay fuego, ni rayo, ni nada en el aire.",
  }, "rayos, resplandor, aureola, magia visible, fuego, coronacion"),
  escp("b3b", [ref("tomagata_zaque"), ref("sendero_territorio"), ref("altiplano_noche")], {
    comun: `Cada noche sale de Hunza hacia Sugamuxi, donde el Templo del Sol, y regresa DIEZ VECES antes del amanecer, rezando en cada adoratorio del camino. Objeto ancla: el camino repetido.`,
    camara: {
      a: "PLANO MEDIO por detrás de él saliendo de Hunza de noche, con la cola arrastrando.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado del camino de Hunza a Sugamuxi, larguísimo, con la raya de la cola marcada en el polvo de ida y de vuelta muchas veces.",
    },
    ini: "sale de Hunza de noche y la cola empieza a marcar el polvo.",
    fin: "desde muy arriba, el camino entero está cruzado de rayas de cola en los dos sentidos, unas encima de otras: ha ido y vuelto muchas veces.",
  }, "vuelo, levitacion, magia, aureola, caballos, carros"),

  // b4 — Nadie sabía cuándo dormía. La lámpara se apagó.
  escp("b4a", [ref("tomagata_zaque"), ref("familias_muiscas"), ref("cercado_bacata")], {
    comun: `La gente lo ve partir con la cabeza baja y lo ve volver al alba, y NADIE SABE CUÁNDO DUERME. Objeto ancla: la misma puerta a dos horas distintas.`,
    camara: {
      a: "PLANO MEDIO del vano del cercado de noche, con él saliendo y la cola pasando por el umbral.",
      b: "la cámara se ha QUEDADO EN EL VANO y ha esperado hasta el alba: PLANO MEDIO del mismo vano con la primera luz y él entrando de vuelta, con los mismos pies y la misma cola.",
    },
    ini: "sale por el vano de noche y la cola cruza el umbral detrás de él.",
    fin: "en el mismo vano, ya con la primera luz, está entrando de vuelta: entre las dos imágenes no ha habido una en la que durmiera.",
  }, "cama, alcoba, aureola, magia, insomnio dibujado"),
  escp("b4b", [ref("muchacho_lampara"), ref("tomagata_zaque"), ref("sendero_territorio")], {
    comun: `Noche. ${MUCHACHO}, que carga la lámpara detrás del zaque, TROPIEZA y la llama se apaga. Objeto ancla: la llama de la lámpara.`,
    camara: {
      a: "PLANO MACRO de la llama pequeña de sebo dentro de la lámpara de barro, moviéndose con el paso.",
      b: "la cámara ha RETROCEDIDO deprisa y ha bajado al camino: PLANO MEDIO BAJO con la lámpara volcada en el suelo, apagada, y el muchacho de rodillas junto a ella en la oscuridad.",
    },
    ini: "la llama pequeña se mueve dentro de la lámpara al ritmo del paso.",
    fin: "la lámpara ha quedado volcada y apagada en el camino y él está de rodillas a su lado, a oscuras.",
  }, "incendio, explosion, castigo, golpes, gritos"),

  // b5 — «Mírame», ordenó. La orden era la orden.
  escp("b5a", [ref("tomagata_zaque"), ref("muchacho_lampara"), ref("altiplano_noche")], {
    comun: `${TOMA} ORDENÁNDOLE que lo mire. La orden es lo que crea la trampa: mirarlo está prohibido. Objeto ancla: la orden.`,
    camara: {
      a: "PLANO MEDIO BAJO desde el suelo, junto al muchacho arrodillado, con los pies y la cola del zaque entrando por el borde superior.",
      b: "la cámara ha SUBIDO despacio a la altura de la cara del zaque: PLANO MEDIO CORTO de Tomagata dando la orden, con el ojo abierto y el otro cerrado.",
    },
    ini: "desde el suelo sólo se ven los pies del zaque y la cola parada en el polvo.",
    fin: "arriba está su cara dando la orden, con el ojo abierto fijo y sin levantar la voz.",
  }, "amenaza con arma, guardias, castigo, magia, resplandor"),
  escp("b5b", [ref("muchacho_lampara"), ref("tomagata_zaque")], {
    comun: `El muchacho conoce la prohibición —ningún hunza mira el rostro de su cacique— pero LA ORDEN ES LA ORDEN, y levanta los ojos. NO desobedece: obedece. Objeto ancla: sus ojos subiendo.`,
    camara: {
      a: "PLANO MACRO de sus ojos clavados en el suelo, dudando, con la cara todavía baja.",
      b: "la cámara ha SUBIDO con su mirada: PLANO MEDIO en contrapicado del zaque visto desde donde él está, entero y de cerca por primera vez.",
    },
    ini: "los ojos siguen clavados en el suelo y la cara todavía baja.",
    fin: "la mirada ha subido: desde abajo se ve al zaque entero y de cerca, con las cuatro orejas y el ojo abierto, por primera vez en el video.",
  }, "transformacion, magia, rayos, terror teatral, gritos, desmayo"),

  // b6 — Lo observó en silencio. Le preguntó qué veía.
  escp("b6a", [ref("tomagata_zaque"), ref("muchacho_lampara")], {
    comun: `${TOMA} observándolo EN SILENCIO: las cuatro orejas parecen escuchar hasta el miedo, y la cola traza una raya sobre el polvo. Objeto ancla: la raya en el polvo.`,
    camara: {
      a: "PLANO MEDIO CORTO de la cara del zaque mirándolo, callado, con las cuatro orejas en cuadro.",
      b: "la cámara ha DESCENDIDO hasta el suelo: PLANO MACRO de la punta de la cola trazando despacio una raya sobre el polvo del camino, de un lado al otro.",
    },
    ini: "la cara lo mira en silencio y las cuatro orejas quedan enteras en el cuadro.",
    fin: "abajo, la punta de la cola ha trazado una raya larga y limpia sobre el polvo, de un lado al otro del camino.",
  }, "aureola, poderes, magia, ondas, terror teatral, gritos"),
  escp("b6b", [ref("tomagata_zaque"), ref("muchacho_lampara")], {
    comun: `Y le pregunta QUÉ VE. Objeto ancla: las dos caras.`,
    camara: {
      a: "PLANO MEDIO CORTO del zaque haciendo la pregunta, tranquilo.",
      b: "la cámara ha RODEADO hasta el muchacho: PLANO MEDIO CORTO de su cara, que no sabe qué contestar todavía, con el zaque cortado por el borde.",
    },
    ini: "el zaque hace la pregunta sin ningún énfasis.",
    fin: "enfrente, la cara del muchacho está buscando la respuesta y todavía no ha abierto la boca.",
  }, "amenaza, arma, magia, resplandor, terror teatral"),

  // b7 — Quiso decir poder, santidad, terror. Venía de diez caminatas.
  escp("b7a", [ref("muchacho_lampara"), ref("familias_muiscas"), ref("tomagata_zaque")], {
    comun: `Quiere responder LO QUE TODOS DICEN: poder, santidad, terror. Eso está en su cabeza, no delante de él. Objeto ancla: las caras que lo dijeron antes.`,
    camara: {
      a: "PLANO MEDIO CORTO de la cara del muchacho con la boca empezando a abrirse.",
      b: "la cámara ha RETROCEDIDO y ha girado hacia el camino de Hunza: PLANO GENERAL nocturno del poblado lejano donde la gente cuenta esas cosas, desenfocado y pequeño al fondo.",
    },
    ini: "la boca empieza a abrirse para decir lo aprendido.",
    fin: "el cuadro se ha ido a Hunza, lejos y borroso al fondo del valle: ahí es donde se dicen esas tres palabras, y aquí no hay nadie diciéndolas.",
  }, "texto, letreros, voces dibujadas, aureola, magia"),
  escp("b7b", [ref("tomagata_zaque"), ref("muchacho_lampara")], {
    comun: `Pero la cercanía de la noche le muestra otra cosa: el zaque VIENE DE DIEZ CAMINATAS, respira hondo y TIENE LOS PIES HERIDOS. El monstruo y el cansancio, en el mismo plano. Objeto ancla: sus pies.`,
    camara: {
      a: "PLANO MEDIO CORTO del pecho del zaque subiendo y bajando hondo, con la cola quieta detrás.",
      b: "la cámara ha DESCENDIDO hasta el suelo: PLANO MACRO de sus pies descalzos sobre el polvo, con las plantas agrietadas y dos rozaduras abiertas en los talones.",
    },
    ini: "el pecho sube y baja hondo, de alguien que lleva toda la noche andando.",
    fin: "abajo, los pies descalzos tienen las plantas agrietadas y dos rozaduras abiertas: la cola pasa junto a ellos y las dos cosas están en el mismo cuadro.",
  }, "sangre abundante, herida explicita, agonia, aureola, magia"),

  // b8 — «Veo a alguien cansado». El lagarto se quedó quieto. (CITA)
  escp("b8a", [ref("muchacho_lampara"), ref("tomagata_zaque")], {
    comun: `${MUCHACHO} diciendo que ve a ALGUIEN CANSADO. Es lo que ve, no un desafío. Objeto ancla: su cara.`,
    camara: {
      a: "PLANO MEDIO CORTO de la cara del muchacho diciéndolo, con la voz pequeña.",
      b: "la cámara ha RODEADO hasta el zaque: PLANO MEDIO CORTO de la cara de Tomagata oyéndolo, sin que cambie nada en ella.",
    },
    ini: "lo dice con la voz pequeña, sin apartar los ojos.",
    fin: "la cara del zaque lo ha recibido sin cambiar de expresión: ni se ofende ni se ablanda.",
  }, "insolencia, desafio, sonrisa, aureola, magia, transformacion"),
  esc("b8b", [ref("lagarto_piedra"), ref("sendero_territorio")], {
    comun: `En la piedra del camino ${LAGARTO} se queda quieto; el muchacho piensa que ésa es su forma y espera la transformación, Y NADA OCURRE. Objeto ancla: el lagarto.`,
    camara: {
      a: "PLANO MEDIO del borde del camino con la piedra plana y el lagarto encima, pequeño.",
      b: "la cámara ha AVANZADO hasta la piedra y se ha puesto casi cenital: PLANO MACRO del lagarto inmóvil, con las escamas y el líquen de la piedra a la vista, sin que pase absolutamente nada.",
    },
    ini: "en la piedra del borde hay un lagarto pequeño y quieto.",
    fin: "de muy cerca sigue igual de quieto y sigue siendo un lagarto: ni brilla, ni cambia, ni se mueve. No ocurre nada.",
  }, "transformacion, cuerpo humano, magia, resplandor, particulas, gritos"),

  // b9 — «¿No temes que ese seas tú?». «Sí». Siguió andando y rezó.
  escp("b9a", [ref("tomagata_zaque"), ref("muchacho_lampara"), ref("lagarto_piedra")], {
    comun: `El zaque le pregunta si no teme que ése sea él, y el muchacho responde que SÍ. Ve el cansancio y tiene miedo al mismo tiempo. Objeto ancla: su cara diciendo que sí.`,
    camara: {
      a: "PLANO MEDIO de los dos con la piedra y el lagarto entre ellos, abajo.",
      b: "la cámara ha AVANZADO hasta el muchacho: PRIMER PLANO de su cara contestando que sí, con miedo visible y sin retirar lo que dijo antes.",
    },
    ini: "los dos están de pie con la piedra y el lagarto en el suelo entre ellos.",
    fin: "de cerca, su cara dice que sí con miedo de verdad: las dos cosas caben en la misma respuesta.",
  }, "valentia heroica, desafio, sonrisa, aureola, burla"),
  escp("b9b", [ref("tomagata_zaque"), ref("sendero_territorio"), ref("altiplano_noche")], {
    comun: `${TOMA} sigue andando: se detiene en el primer adoratorio, reza, continúa, y en el segundo hace igual. La repetición es el personaje. Objeto ancla: los adoratorios del camino.`,
    camara: {
      a: "PLANO MEDIO de él parado ante un adoratorio pequeño de piedra al borde del camino, con la cabeza baja.",
      b: "la cámara ha RETROCEDIDO a lo largo del camino y ha subido: PLANO GENERAL nocturno con tres adoratorios más adelante en el mismo sendero, esperando, y él ya andando hacia el siguiente.",
    },
    ini: "está parado ante un adoratorio pequeño con la cabeza baja.",
    fin: "desde arriba se ve que quedan tres adoratorios más adelante en el mismo camino y él ya va hacia el siguiente, con la cola arrastrando.",
  }, "templos monumentales, columnas, altares de oro, sacrificios, aureola"),

  // b10 — Diez veces cruzó la noche. Pidió algo que nadie oyó.
  escp("b10a", [ref("tomagata_zaque"), ref("muchacho_lampara"), ref("sendero_territorio")], {
    comun: `DIEZ VECES cruza la noche el camino de Hunza a Sugamuxi, y el muchacho lo acompaña hasta el primer sol. Objeto ancla: las rayas de la cola acumulándose.`,
    camara: {
      a: "PLANO MACRO del polvo del camino con una sola raya de cola marcada en él.",
      b: "la cámara se ha ELEVADO en vertical hasta un CENITAL ALTO: el camino entero visto desde arriba con diez rayas paralelas de ida y vuelta, unas sobre otras, y dos figuras diminutas todavía andando.",
    },
    ini: "en el polvo hay una sola raya de cola.",
    fin: "desde muy arriba hay diez rayas superpuestas en el mismo camino, de ida y de vuelta, y las dos figuras siguen andando en él.",
  }, "vuelo, magia, aureola, resplandor, camara lenta epica"),
  escp("b10b", [ref("tomagata_zaque"), ref("valle_iraca"), ref("santuario_moja")], {
    comun: `Cuando el templo enciende su techo de paja con el primer sol, el zaque se inclina y PIDE ALGO QUE NADIE MÁS OYÓ. La imagen NO insinúa qué era: la cámara se va antes. Objeto ancla: su espalda inclinada.`,
    camara: {
      a: "PLANO MEDIO por detrás de él inclinándose ante el templo, con el techo de paja encendido de naranja por el primer sol.",
      b: "la cámara se ha ALEJADO hacia atrás y ha subido: GRAN PLANO GENERAL del valle al amanecer con el templo pequeño y él minúsculo delante, demasiado lejos para oír nada.",
    },
    ini: "se inclina de espaldas ante el templo, cuyo techo de paja se ha encendido con el primer sol.",
    fin: "desde muy lejos y muy arriba, él es una figura minúscula inclinada ante el templo: a esta distancia no se puede oír nada de lo que pide.",
  }, "texto, subtitulos, voz dibujada, aureola, milagro, resplandor"),

  // b11 — El lagarto seguía en la piedra. «Todos creen que puede».
  esc("b11a", [ref("lagarto_piedra"), ref("sendero_territorio")], {
    comun: `En el regreso EL LAGARTO SIGUE EN LA PIEDRA. Es el MISMO plano de la escena b8b, repetido exacto, con la luz de la mañana. Objeto ancla: el lagarto, otra vez.`,
    camara: {
      a: "PLANO MEDIO del borde del camino con la piedra plana y el lagarto encima, EL MISMO encuadre de la escena b8b.",
      b: "la cámara ha AVANZADO hasta la piedra y se ha puesto casi cenital: PLANO MACRO del mismo lagarto, en la misma postura, con la luz de la mañana en vez de la de la lámpara.",
    },
    ini: "en la piedra está el lagarto, igual que anoche.",
    fin: "de cerca es exactamente el mismo lagarto en la misma postura: no se ha transformado en nada y nadie se ha transformado en él.",
  }, "transformacion, cuerpo humano, magia, resplandor, gritos"),
  escp("b11b", [ref("tomagata_zaque"), ref("muchacho_lampara"), ref("lagarto_piedra")], {
    comun: `${TOMA} dice que NO TRANSFORMÓ A NADIE; el muchacho responde que todos creen que puede hacerlo, y el zaque dice que a veces eso basta. El poder existe sólo como creencia. Objeto ancla: las dos caras y el lagarto.`,
    camara: {
      a: "PLANO MEDIO CORTO del zaque diciéndolo, con la piedra desenfocada abajo.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del camino con los dos parados, el lagarto minúsculo en su piedra y el valle entero alrededor.",
    },
    ini: "el zaque lo dice de cerca, sin darle importancia.",
    fin: "desde lejos están los dos parados en mitad del camino, con el lagarto diminuto en su piedra: en todo el valle no ha cambiado nada.",
  }, "magia, aureola, transformacion, resplandor, texto, moraleja"),

  // b12 — El miedo llegaba más lejos que él. Ya no había lagarto.
  escp("b12a", [ref("familias_muiscas"), ref("tomagata_zaque"), ref("valle_iraca")], {
    comun: `El miedo llegaba MÁS LEJOS QUE ÉL. Se ve en la distancia entre donde está él y donde la gente ya baja la cabeza. Objeto ancla: las cabezas que se bajan antes de que llegue.`,
    camara: {
      a: "PLANO MEDIO de gente en un camino bajando la cabeza a la vez, sin que se vea a nadie delante.",
      b: "la cámara ha RETROCEDIDO y ha subido: GRAN PLANO GENERAL del valle con esa gente en un extremo y la figura del zaque todavía lejísimos, en el otro, sin haber llegado.",
    },
    ini: "en el camino, la gente baja la cabeza a la vez sin que haya nadie delante.",
    fin: "desde arriba se ve por qué: el zaque está todavía lejísimos, en el otro extremo del valle, y ya han bajado la cabeza.",
  }, "aureola, poderes, magia, terror teatral, arrodillarse, latigos"),
  esc("b12b", [ref("lagarto_piedra"), ref("sendero_territorio"), ref("muchacho_lampara")], {
    comun: "Al morir, el reino pasó a su hermano, y en la piedra junto al camino YA NO HABÍA LAGARTO. La última imagen es la piedra vacía, y no explica nada. Objeto ancla: la piedra sin el lagarto.",
    camara: {
      a: "PLANO MACRO de la piedra plana del borde del camino, con el líquen en las grietas y SIN el lagarto encima.",
      b: "la cámara ha RETROCEDIDO y ha subido hasta un GRAN PLANO GENERAL final del camino de Hunza a Sugamuxi, con el polvo liso y sin una sola raya de cola marcada en él.",
    },
    ini: "la piedra está igual que siempre, con su líquen, pero encima no hay nada.",
    fin: "desde arriba el camino entero está liso: no queda ni una raya de cola en el polvo, y nadie lo cruza diez veces por la noche.",
  }, "cadaver, funeral, tumba, fantasma, transformacion, texto, aureola"),
]);
