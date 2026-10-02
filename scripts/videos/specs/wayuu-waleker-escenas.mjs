// Keyframes de Waleker, la que tejía de noche — 16 bloques × 2 escenas × 2
// cuadros = 64 imágenes ≈ 160 s.
// Guion: guion-waleker-el-origen-del-tejido-v2.json (N=16) · Acta: acta-waleker-el-origen-del-tejido.json (32 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _wayuu-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · LA NIÑA ES APARTADA POR TENER EL CUERPO DISTINTO, y Irunúu la recoge del
//   suelo. EL RELATO EMPIEZA EN UN RECHAZO, no en un hallazgo afortunado. El
//   inventario es tajante: el canon dice «su cuerpo era distinto del de los
//   otros» Y NO EXPLICA CÓMO. NO SE INVENTA LA DIFERENCIA: se cuenta POR EL
//   APARTAMIENTO DE LA GENTE, nunca por el cuerpo.
// · LA CONDICIÓN ES DE ELLA Y ES UNA SOLA: guardar el secreto. A cambio se
//   queda y enseña. NO HAY PRUEBA, NI PLAZO, NI CASTIGO ANUNCIADO.
// · IRUNÚU NO LA VENDE POR AMBICIÓN SINO POR HALAGO: lo rodean, lo elogian y le
//   prometen reconocimiento, y él suelta el nombre MAREADO.
// · WALEKER NO GRITA NI MALDICE: le recuerda la condición y se va. LA PÉRDIDA
//   ES UNA CONSECUENCIA, NO UNA VENGANZA.
// · EL SABER NO SE VA CON ELLA. Dejó los tejidos, y LAS MUJERES CONTARON LOS
//   HILOS, IMITARON LOS DIBUJOS Y ENSEÑARON A OTRAS.
// · WALEKER TAMPOCO INVENTÓ SOLA: aprendió de tejedoras anteriores, de ATÍA la
//   del arco iris y de KANASPI. EL TEJIDO VIENE DE UNA CADENA, no de un don.
// · EL CIERRE CONTRAPONE DOS DESTINOS: él lamenta la pérdida el resto de sus
//   días, ELLAS AFINAN LAS TÉCNICAS HILO POR HILO.
//
// El inventario llama a la lámina de las tejedoras «la que el corpus le debe al
// pueblo wayúu: MUCHAS MANOS TRABAJANDO, no una donadora sobrenatural». Y fija
// de dónde salen los dibujos: EL CANON NOMBRA CINCO FUENTES —mariposa, espuma,
// nube, flor, arco iris— y SE DISEÑAN DESDE AHÍ, no copiando kanas existentes.
//
// GUION DE LUZ: suelo y hormigas al mediodía → casa al atardecer → noche de los
// hilos de colores → tejidos a la luz de la brasa → noche del descubrimiento →
// mañana de la promesa → reunión a pleno sol → penumbra falsa del velorio →
// halagos a media luz → despertar solo → mañana de la despedida → jirón en las
// manos → tejidos dejados al sol → tejedoras contando hilos → años del lamento
// → rincón de la araña y patio de muchas manos.

import { CONTEXTO, DIRECCION, AVOID_BASE, PALETTE_BASE, ref, esc, escp, armar } from "./_wayuu-comun.mjs";

export const SPEC_NAME = "wayuu-waleker-escenas";
export const OUT_DIR = "wayuu/videos/waleker-el-origen-del-tejido/keyframes";
export { CONTEXTO, DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; deformidad, cuerpo monstruoso, miembros de araña en una persona, hibrido mujer-araña, patas, quelíceros, ocho ojos; nina con rasgos de insecto, cuerpo alterado, enfermedad dibujada, lastima explotada; arana gigante, arana monstruosa, telaraña que atrapa, presa envuelta; resplandor, humo, particulas, transformacion dibujada, magia, hilos luminosos; maldicion, grito, ira, venganza, castigo, llanto teatral; hada, ninfa, diosa con aureola, donadora celestial, trono; primer plano de menor sola posando";
export const PALETTE =
  PALETTE_BASE + "; ESTE ES EL UNICO MITO DEL CORPUS CON COLOR PLENO: los hilos de Waleker traen el rojo, el naranja, el amarillo y el verde de la mariposa, la nube, la flor y el arco iris, y ese color se gana en el bloque tres y se queda hasta el final";

const IR =
  "EL MISMO Irunúu de la referencia (hombre wayúu adulto, manta corta terciada de algodón crudo, faja tejida, waireñas de suela plana, cara honrada y algo blanda)";
const WK =
  "LA MISMA Waleker de la referencia (mujer wayúu joven, manta larga hasta el tobillo, pelo negro suelto, cara tranquila), ENTERAMENTE HUMANA: sin una sola patа, sin ojos de más y sin nada de araña en el cuerpo";

export const ITEMS = armar([
  // b1 — Irunúu encontró a una niña abandonada. Su cuerpo era distinto.
  esc("b1a", [ref("hormigas"), ref("llanura_cardonal")], {
    comun: `Mediodía, a ras de suelo. UNA NIÑA ABANDONADA QUE JUGABA ENTRE LAS HORMIGAS: el cuadro empieza en el suelo, con las hormigas y una mano pequeña. Objeto ancla: la fila de hormigas.`,
    camara: {
      a: "PLANO MACRO de una fila de hormigas cruzando la arena caliente, en orden.",
      b: "la cámara ha RETROCEDIDO un poco y ha subido: PLANO DETALLE de una mano pequeña apoyada en la arena junto a la fila, dejándolas pasar por encima sin espantarlas.",
    },
    ini: "una fila de hormigas cruza la arena caliente, en orden.",
    fin: "junto a la fila hay una mano pequeña apoyada en la arena, que las deja pasar por encima sin espantarlas.",
  }, "insectos gigantes, plaga, picaduras, sangre, deformidad, primer plano del menor"),
  escp("b1b", [ref("wokoloonat"), ref("primeros_wayuu"), ref("rancheria")], {
    comun: `Mediodía. SU CUERPO ERA DISTINTO Y LA APARTABAN: EL CANON NO EXPLICA CÓMO ERA Y NO SE INVENTA. SE CUENTA POR EL APARTAMIENTO DE LA GENTE: ella a media distancia, de espaldas, y todos los demás lejos. El relato empieza en un rechazo. Objeto ancla: el trecho vacío alrededor de la niña.`,
    camara: {
      a: "PLANO MEDIO CORTO de dos caras adultas apartando la mirada y girando el cuerpo hacia otro lado.",
      b: "la cámara ha GIRADO y se ha elevado: PLANO GENERAL en picado del patio con la figura pequeña sentada sola en el suelo y un círculo ancho de arena vacía a su alrededor.",
    },
    ini: "dos caras adultas apartan la mirada y giran el cuerpo hacia otro lado.",
    fin: "desde arriba, la figura pequeña está sentada sola en el suelo y a su alrededor hay un círculo ancho de arena vacía.",
  }, "deformidad, cuerpo alterado, patas, insecto, enfermedad, burla, lastima explotada"),

  // b2 — Él la levantó del suelo y la llamó Wokoloonat. De día callaba.
  escp("b2a", [ref("irunuu"), ref("wokoloonat"), ref("llanura_cardonal")], {
    comun: `Tarde. ÉL LA LEVANTÓ DEL SUELO Y LA LLEVÓ A SU CASA: el gesto es recoger a alguien que nadie recoge. ${IR}. Objeto ancla: las manos que la levantan.`,
    camara: {
      a: "PLANO MACRO de dos manos de adulto pasando bajo unos brazos pequeños para levantarla del suelo.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del camino con él andando hacia su casa y la niña en brazos, de espaldas los dos.",
    },
    ini: "dos manos de adulto pasan bajo unos brazos pequeños para levantarla del suelo.",
    fin: "desde arriba, él camina hacia su casa con la niña en brazos, los dos de espaldas.",
  }, "deformidad, cuerpo visible, lastima explotada, llanto, primer plano del menor"),
  escp("b2b", [ref("wokoloonat"), ref("piichi"), ref("enramada")], {
    comun: `Luz plana del día. LA LLAMÓ WOKOLOONAT, Y DE DÍA LA NIÑA CALLABA: el silencio es el dato. Va a media distancia y de espaldas, haciendo algo. Objeto ancla: la boca cerrada mientras alrededor se habla.`,
    camara: {
      a: "PLANO MEDIO de la casa por dentro con dos adultos hablando y una figura pequeña sentada aparte, de espaldas.",
      b: "la cámara ha AVANZADO hasta ella y ha girado al perfil: PLANO MEDIO CORTO de su cara de lado, callada, con los ojos en el suelo.",
    },
    ini: "dentro de la casa, dos adultos hablan y una figura pequeña está sentada aparte, de espaldas.",
    fin: "de perfil y cerca, tiene la cara callada y los ojos en el suelo.",
  }, "deformidad, rasgos de insecto, mudez dibujada, lastima, primer plano del menor"),

  // b3 — De noche se convertía en Waleker. De su boca salían hilos de colores.
  escp("b3a", [ref("waleker"), ref("piichi"), ref("chinchorro")], {
    comun: `Noche. DE NOCHE, CUANDO TODOS DORMÍAN, SE CONVERTÍA EN UNA JOVEN LLAMADA WALEKER. ${WK}. El cambio NO se dibuja: el plano corta de los chinchorros dormidos a ella ya sentada, entera y humana. Objeto ancla: ella sentada en la penumbra.`,
    camara: {
      a: "PLANO GENERAL del cuarto de noche con los chinchorros ocupados y todo quieto.",
      b: "la cámara ha AVANZADO hasta el suelo del rincón y ha girado: PLANO MEDIO de una joven sentada en la estera, entera y humana, con las manos ya trabajando.",
    },
    ini: "el cuarto de noche tiene los chinchorros ocupados y todo está quieto.",
    fin: "en el rincón hay una joven sentada en la estera, entera y humana, con las manos ya trabajando.",
  }, "transformacion dibujada, humo, resplandor, patas, hibrido, metamorfosis, arana"),
  esc("b3b", [ref("waleker"), ref("tejidos_de_waleker")], {
    comun: `Noche. DE SU BOCA SALÍAN HILOS DE COLORES: AQUÍ ENTRA EL COLOR DEL MITO y ya no se va. El hilo sale de la boca como hilo de verdad, sin brillo mágico. Objeto ancla: el hilo de color naciendo.`,
    camara: {
      a: "PLANO MACRO de un hilo rojo fino saliendo de entre unos labios y siendo recogido por dos dedos.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO MEDIO del regazo con cuatro o cinco hilos de colores distintos ya enrollados y el trabajo empezado encima.",
    },
    ini: "un hilo rojo fino sale de entre unos labios y dos dedos lo recogen.",
    fin: "en el regazo hay ya cuatro o cinco hilos de colores distintos enrollados y el trabajo empezado encima.",
  }, "hilos luminosos, resplandor, particulas, telaraña, baba, quelíceros, gore"),

  // b4 — Tejía fajas, chinchorros y telas con dibujos. Irunúu la vio.
  esc("b4a", [ref("tejidos_de_waleker"), ref("telar")], {
    comun: `Noche, luz de brasa. TEJÍA FAJAS, CHINCHORROS, TELAS CON DIBUJOS DE MARIPOSAS, NUBES Y ARCO DEL CIELO: LOS DIBUJOS SE DISEÑAN DESDE ESAS FUENTES —mariposa, espuma, nube, flor, arco iris—, no copiando patrones existentes. Objeto ancla: el dibujo creciendo en la trama.`,
    camara: {
      a: "PLANO MACRO de la trama de una faja con un dibujo de alas de mariposa saliendo de los hilos de color.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del cuarto con cinco piezas terminadas extendidas por el suelo, cada una con un dibujo distinto.",
    },
    ini: "la trama de la faja muestra un dibujo de alas de mariposa saliendo de los hilos de color.",
    fin: "desde arriba, cinco piezas terminadas están extendidas por el suelo, cada una con un dibujo distinto.",
  }, "patrones industriales, estampados, telas modernas, resplandor, magia"),
  escp("b4b", [ref("irunuu"), ref("waleker"), ref("chinchorro")], {
    comun: `Noche. UNA NOCHE IRUNÚU LA VIO TEJER: despierta y mira, y ella no lo nota enseguida. Objeto ancla: sus ojos abiertos en la oscuridad.`,
    camara: {
      a: "PLANO MACRO de unos ojos abriéndose despacio en la penumbra, desde dentro de un chinchorro.",
      b: "la cámara ha GIRADO siguiendo esa mirada y ha retrocedido: PLANO GENERAL del cuarto con ella sentada en el suelo trabajando y él incorporado en el chinchorro, mirándola.",
    },
    ini: "unos ojos se abren despacio en la penumbra, desde dentro de un chinchorro.",
    fin: "desde arriba, ella está sentada en el suelo trabajando y él, incorporado en el chinchorro, la mira.",
  }, "terror, susto, monstruo, arana, resplandor, huida, grito"),

  // b5 — «Guarda el secreto y seguiré a tu lado, y te enseñaré». (CITA)
  escp("b5a", [ref("waleker"), ref("irunuu"), ref("piichi")], {
    comun: `Noche. WALEKER NO HUYÓ: se vuelve y habla, tranquila. LA CITA es LO ÚNICO QUE ELLA PIDE, y no hay prueba, ni plazo, ni castigo anunciado. Objeto ancla: su cara diciéndolo, sin miedo.`,
    camara: {
      a: "PLANO MEDIO de ella volviéndose despacio hacia él, sin soltar el trabajo.",
      b: "la cámara ha AVANZADO hasta su cara: PLANO MEDIO CORTO de ella terminando la frase, tranquila, mirándolo de frente.",
    },
    ini: "ella se vuelve despacio hacia él, sin soltar el trabajo.",
    fin: "de cerca termina la frase, tranquila y mirándolo de frente.",
  }, "amenaza, maldicion, ojos brillantes, arana, resplandor, texto en pantalla"),
  escp("b5b", [ref("irunuu"), ref("waleker"), ref("piichi")], {
    comun: `Noche. IRUNÚU LO PROMETIÓ: el trato queda hecho entre los dos, sin ceremonia. Objeto ancla: el gesto corto de la promesa.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara asintiendo una sola vez, despacio.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del cuarto con los dos en sus sitios, ella otra vez tejiendo y él tumbado mirando el techo.",
    },
    ini: "su cara asiente una sola vez, despacio.",
    fin: "desde arriba, los dos están en sus sitios: ella otra vez tejiendo y él tumbado mirando el techo.",
  }, "juramento ritual, sangre, pacto dibujado, simbolos, resplandor"),

  // b6 — Desde entonces recibió tejidos como no se habían visto nunca.
  esc("b6a", [ref("tejidos_de_waleker"), ref("enramada")], {
    comun: `Mañana. DESDE ENTONCES RECIBIÓ TEJIDOS COMO NO SE HABÍAN VISTO NUNCA EN TODA LA GUAJIRA: el color es la novedad y se ve de lejos. Sin figuras. Objeto ancla: los tejidos tendidos al sol.`,
    camara: {
      a: "PLANO MACRO del fleco de un chinchorro con cuatro colores distintos en la urdimbre, a pleno sol.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la enramada con seis piezas colgadas de las vigas, todas de colores, moviéndose con el aire.",
    },
    ini: "el fleco de un chinchorro con cuatro colores distintos en la urdimbre, a pleno sol.",
    fin: "desde arriba, seis piezas de colores cuelgan de las vigas de la enramada y se mueven con el aire.",
  }, "telas industriales, estampados modernos, mercado, dinero, resplandor"),
  escp("b6b", [ref("irunuu"), ref("primeros_wayuu"), ref("manta_wayuu")], {
    comun: `Mañana. Y LA GENTE LOS VE: las mismas personas que apartaban a la niña ahora se acercan a mirar la tela. Objeto ancla: las manos ajenas tocando el tejido.`,
    camara: {
      a: "PLANO MACRO de dos manos ajenas palpando el borde de una manta de colores, con cuidado.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del patio con seis personas alrededor de las piezas colgadas y él a un lado, callado.",
    },
    ini: "dos manos ajenas palpan el borde de una manta de colores, con cuidado.",
    fin: "desde arriba, seis personas rodean las piezas colgadas y él está a un lado, callado.",
  }, "mercado, dinero, subasta, avaricia, caricatura, envidia dibujada"),

  // b7 — En una reunión le preguntaban quién los hacía. Irunúu aguantó.
  escp("b7a", [ref("primeros_wayuu"), ref("irunuu"), ref("pago_y_fiesta")], {
    comun: `Sol alto. EN UNA REUNIÓN LE PREGUNTABAN QUIÉN LOS HACÍA Y DE DÓNDE VENÍAN ESOS COLORES: la presión es social y a plena luz. Objeto ancla: las caras que preguntan a la vez.`,
    camara: {
      a: "PLANO MEDIO CORTO de tres caras inclinadas hacia él, preguntando al mismo tiempo.",
      b: "la cámara ha GIRADO 180 grados y ha retrocedido: PLANO GENERAL del corro con él en el centro, sentado, y todos vueltos hacia él.",
    },
    ini: "tres caras inclinadas hacia él preguntan al mismo tiempo.",
    fin: "al girar, él está sentado en el centro del corro y todos se han vuelto hacia él.",
  }, "interrogatorio, violencia, amenaza, tortura, caricatura"),
  escp("b7b", [ref("irunuu"), ref("primeros_wayuu"), ref("pago_y_fiesta")], {
    comun: `Sol alto. IRUNÚU CALLABA, Y AGUANTÓ: ESTA VEZ CUMPLE, y por eso duele más lo que viene. Objeto ancla: la boca cerrada bajo la presión.`,
    camara: {
      a: "PLANO MACRO de unos labios apretados y la mandíbula tensa, sin abrirse.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del corro deshaciéndose, la gente levantándose sin respuesta y él todavía sentado en el sitio.",
    },
    ini: "unos labios apretados y la mandíbula tensa, sin abrirse.",
    fin: "desde arriba, el corro se deshace, la gente se levanta sin respuesta y él sigue sentado en su sitio.",
  }, "tortura, violencia, amenaza, mordaza, caricatura, sufrimiento teatral"),

  // b8 — Entró en una casa donde parecía haber un velorio. Era de Wanurü.
  esc("b8a", [ref("piichi"), ref("rancheria"), ref("constelaciones")], {
    comun: `Anochecer. UN DÍA ENTRÓ EN UNA CASA DONDE PARECÍA HABER UN VELORIO: desde fuera todo parece normal —gente reunida, fuego bajo, silencio—. Sin figuras identificables. Objeto ancla: la casa con gente dentro al anochecer.`,
    camara: {
      a: "PLANO MACRO del vano de una casa al anochecer, con luz baja dentro y sombras que se mueven despacio.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la ranchería al anochecer con esa casa iluminada y las demás ya oscuras.",
    },
    ini: "el vano de una casa al anochecer, con luz baja dentro y sombras moviéndose despacio.",
    fin: "desde arriba, esa casa está iluminada y las demás de la ranchería ya están oscuras.",
  }, "cadaver, ataud, cruces, monstruos, calaveras, espectros, niebla"),
  escp("b8b", [ref("servidores_de_wanuru"), ref("piichi")], {
    comun: `Penumbra. NO LO ERA: ERA DE LOS DE WANURÜ. El inventario los marca `+"`restringida`"+`: son GENTE, vestida de oscuro, sin nada monstruoso. Lo raro es cómo se comportan, no cómo son. Objeto ancla: el corro que se cierra alrededor.`,
    camara: {
      a: "PLANO MEDIO CORTO de dos caras de perfil, de aspecto corriente, mirando hacia la puerta con demasiada atención.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del cuarto con ocho personas de oscuro formando un corro cerrado alrededor de él, sin tocarlo.",
    },
    ini: "dos caras de perfil, de aspecto corriente, miran hacia la puerta con demasiada atención.",
    fin: "desde arriba, ocho personas de oscuro forman un corro cerrado a su alrededor, sin tocarlo.",
  }, "monstruos, calaveras, ojos brillantes, garras, demonios, encapuchados, niebla"),

  // b9 — Lo halagaron y prometieron reconocimiento. Mareado, dijo el nombre.
  escp("b9a", [ref("servidores_de_wanuru"), ref("irunuu"), ref("recipientes")], {
    comun: `Penumbra. LO RODEARON, LO HALAGARON Y LE PROMETIERON RECONOCIMIENTO Y BUENA CAZA: NO LA VENDE POR AMBICIÓN SINO POR HALAGO. Objeto ancla: las manos que le palmean el hombro y le llenan la totuma.`,
    camara: {
      a: "PLANO MACRO de una totuma llenándose hasta el borde y una mano ajena palmeando un hombro al mismo tiempo.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO de él en el centro con tres de ellos inclinados hacia su cara, hablándole muy cerca.",
    },
    ini: "una totuma se llena hasta el borde y una mano ajena palmea un hombro al mismo tiempo.",
    fin: "él está en el centro con tres de ellos inclinados hacia su cara, hablándole muy cerca.",
  }, "hipnosis, espiral, resplandor, humo, magia, tortura, violencia"),
  escp("b9b", [ref("irunuu"), ref("servidores_de_wanuru")], {
    comun: `Penumbra. MAREADO, DIJO EL NOMBRE DE WALEKER Y PROMETIÓ ENTREGARLA: el momento exacto de la falta. Objeto ancla: la boca que se abre.`,
    camara: {
      a: "PLANO GENERAL del corro con él en el centro, la cabeza yéndosele hacia un lado.",
      b: "la cámara ha AVANZADO hasta su cara: PRIMER PLANO de su boca abriéndose y diciendo el nombre, con los ojos fuera de foco.",
    },
    ini: "en el corro, él tiene la cabeza yéndosele hacia un lado.",
    fin: "de muy cerca, la boca se abre y dice el nombre, con los ojos fuera de foco.",
  }, "posesion, ojos en blanco, humo saliendo de la boca, resplandor, texto"),

  // b10 — Despertó solo. Volvió a su casa y Waleker ya sabía.
  esc("b10a", [ref("piichi"), ref("llanura_cardonal")], {
    comun: `Amanecer. CUANDO RECUPERÓ EL SENTIDO ESTABA SOLO: la casa del velorio ya no existe. Sin figuras. Objeto ancla: el sitio vacío donde estuvo la casa.`,
    camara: {
      a: "PLANO MACRO de ceniza fría de un fogón en la arena, con las piedras desplazadas y ninguna huella alrededor.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL al amanecer del terreno con un rectángulo de arena pisada y ni una casa ni una persona en toda la extensión.",
    },
    ini: "ceniza fría de un fogón en la arena, con las piedras desplazadas y ninguna huella alrededor.",
    fin: "desde arriba, al amanecer, hay un rectángulo de arena pisada y ni una casa ni una persona en toda la extensión.",
  }, "ruinas, fantasmas, niebla, resplandor, portal, monstruos"),
  escp("b10b", [ref("waleker"), ref("irunuu"), ref("piichi")], {
    comun: `Mañana. VOLVIÓ A SU CASA, Y WALEKER YA SABÍA LO OCURRIDO: no hace falta que se lo diga. Objeto ancla: las dos caras que se encuentran y no hablan.`,
    camara: {
      a: "PLANO MEDIO de él entrando por el vano, todavía con el paso torpe.",
      b: "la cámara ha GIRADO al interior y ha cerrado: PLANO MEDIO CORTO de ella de pie, ya con la manta puesta para salir, mirándolo sin reproche.",
    },
    ini: "él entra por el vano, todavía con el paso torpe.",
    fin: "dentro, ella está de pie con la manta ya puesta para salir, mirándolo sin reproche.",
  }, "ira, grito, maldicion, llanto teatral, ojos brillantes, resplandor"),

  // b11 — Le recordó la condición y echó a andar. Él la tomó de la manta.
  escp("b11a", [ref("waleker"), ref("irunuu"), ref("piichi")], {
    comun: `Mañana. LE RECORDÓ LA CONDICIÓN, SIN GRITAR: NO MALDICE, y la pérdida es una consecuencia, no una venganza. Objeto ancla: su cara diciéndolo bajo.`,
    camara: {
      a: "PLANO MEDIO CORTO de ella hablándole de frente, en voz baja, sin dureza.",
      b: "la cámara ha RETROCEDIDO y ha girado: PLANO GENERAL del cuarto con ella ya de espaldas saliendo por el vano y él parado donde estaba.",
    },
    ini: "ella le habla de frente, en voz baja y sin dureza.",
    fin: "desde lejos, ella sale de espaldas por el vano y él se queda parado donde estaba.",
  }, "grito, maldicion, ira, lagrimas, resplandor, transformacion, arana"),
  escp("b11b", [ref("irunuu"), ref("waleker"), ref("cardon")], {
    comun: `Mañana. ECHÓ A ANDAR HACIA EL MONTE E IRUNÚU LA TOMÓ DE LA MANTA: es el último gesto suyo, y llega tarde. Objeto ancla: la mano cerrándose sobre la tela.`,
    camara: {
      a: "PLANO MEDIO de ella alejándose entre los cardones, de espaldas, sin volverse.",
      b: "la cámara ha AVANZADO y ha bajado a las manos: PLANO MACRO de una mano de hombre cerrándose sobre el borde de la manta, agarrándola.",
    },
    ini: "ella se aleja entre los cardones, de espaldas y sin volverse.",
    fin: "una mano de hombre se cierra sobre el borde de la manta, agarrándola.",
  }, "forcejeo, violencia, transformacion a la vista, resplandor, patas, arana"),

  // b12 — En sus manos quedó un jirón de telaraña. Desapareció entre los cardones.
  esc("b12a", [ref("irunuu"), ref("cardon")], {
    comun: `Mañana. EN SUS MANOS QUEDÓ UN JIRÓN DE TELARAÑA: el inventario lo llama LA HUELLA DEL MITO, UN SOLO PLANO: LAS MANOS Y EL JIRÓN. Sin transformación a la vista. Objeto ancla: el jirón entre los dedos.`,
    camara: {
      a: "PLANO MACRO de dos manos abriéndose con un jirón de telaraña gris enredado entre los dedos, y nada más.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO de él parado solo entre los cardones, con las manos todavía abiertas delante.",
    },
    ini: "dos manos se abren con un jirón de telaraña gris enredado entre los dedos, y nada más.",
    fin: "está parado solo entre los cardones, con las manos todavía abiertas delante.",
  }, "transformacion, patas, cuerpo de arana, resplandor, humo, particulas"),
  esc("b12b", [ref("waleker"), ref("cardon"), ref("llanura_cardonal")], {
    comun: `Mañana. WALEKER ERA YA UNA ARAÑA, Y DESAPARECIÓ ENTRE LOS CARDONES: una araña real, del tamaño de una araña, metiéndose en el matorral. Objeto ancla: la araña entre las espinas.`,
    camara: {
      a: "PLANO MACRO de una araña de patas finas caminando por el canto espinoso de un cardón.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL del cardonal entero con él pequeño y parado en el borde, y ella ya invisible de tan pequeña.",
    },
    ini: "una araña de patas finas camina por el canto espinoso de un cardón.",
    fin: "desde muy arriba se ve el cardonal entero con él pequeño y parado en el borde, y ella ya no se distingue de tan pequeña.",
  }, "arana gigante, monstruo, ojos, telaraña que atrapa, resplandor, terror"),

  // b13 — Había dejado los tejidos. Las mujeres contaron los hilos.
  esc("b13a", [ref("tejidos_de_waleker"), ref("enramada")], {
    comun: `Mediodía. ANTES DE IRSE HABÍA DEJADO LOS TEJIDOS: EL SABER NO SE VA CON ELLA, y ésa es la tesis del mito. Sin figuras. Objeto ancla: las piezas dejadas, extendidas.`,
    camara: {
      a: "PLANO MACRO del reverso de una faja con la trama a la vista, donde se ve cómo está hecha.",
      b: "la cámara ha RETROCEDIDO y se ha elevado a cenital: PLANO EN PICADO de seis piezas extendidas en el suelo, ordenadas, todas del derecho y del revés.",
    },
    ini: "el reverso de una faja con la trama a la vista, donde se ve cómo está hecha.",
    fin: "desde arriba, seis piezas están extendidas en el suelo, ordenadas, todas del derecho y del revés.",
  }, "resplandor, magia, telas flotando, museo, vitrina, etiquetas"),
  escp("b13b", [ref("tejedoras"), ref("telar"), ref("enramada")], {
    comun: `Mediodía. LAS MUJERES CONTARON LOS HILOS, IMITARON LOS DIBUJOS Y ENSEÑARON A OTRAS: ES EL DESENLACE DEL MITO Y ES COLECTIVO Y FEMENINO. Objeto ancla: el dedo que cuenta hilos.`,
    camara: {
      a: "PLANO MACRO de un dedo recorriendo la trama hilo por hilo, contándolos, con la boca contando al lado.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la enramada con seis mujeres repartidas, cada una con una pieza delante, todas estudiándolas.",
    },
    ini: "un dedo recorre la trama hilo por hilo, contándolos, con la boca contando al lado.",
    fin: "desde arriba, seis mujeres están repartidas por la enramada, cada una con una pieza delante, todas estudiándolas.",
  }, "donadora sobrenatural, aureola, resplandor, magia, escuela europea, texto"),

  // b14 — El saber no se quedó con quien rompió la promesa. Ella aprendió de otras.
  escp("b14a", [ref("irunuu"), ref("tejidos_de_waleker"), ref("enramada")], {
    comun: `Tarde. EL SABER NO SE QUEDÓ CON QUIEN ROMPIÓ LA PROMESA: él tiene las piezas y no sabe hacerlas. Objeto ancla: sus manos torpes sobre el telar.`,
    camara: {
      a: "PLANO MACRO de unas manos de hombre enredando los hilos de un telar, sin conseguir el cruce.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la enramada con él solo en un extremo delante de un telar parado, y las mujeres trabajando al otro extremo.",
    },
    ini: "unas manos de hombre enredan los hilos del telar sin conseguir el cruce.",
    fin: "desde arriba, él está solo en un extremo delante de un telar parado y las mujeres trabajan al otro extremo.",
  }, "castigo dibujado, burla, caricatura, humillacion, maldicion"),
  escp("b14b", [ref("atia"), ref("kanaspi"), ref("tejedoras")], {
    comun: `Luz plana. WALEKER TAMPOCO LO INVENTÓ SOLA: APRENDIÓ DE OTRAS —de ATÍA, la del arco iris, y de KANASPI—. EL TEJIDO VIENE DE UNA CADENA, no de un don único. Objeto ancla: las tres generaciones de manos.`,
    camara: {
      a: "PLANO MACRO de tres pares de manos de edades distintas trabajando el mismo tejido, una al lado de otra.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL con Atía y Kanaspi sentadas con sus telares y tejedoras más jóvenes alrededor, todas en lo mismo.",
    },
    ini: "tres pares de manos de edades distintas trabajan el mismo tejido, una al lado de otra.",
    fin: "desde arriba, Atía y Kanaspi están sentadas con sus telares y hay tejedoras más jóvenes alrededor, todas en lo mismo.",
  }, "aureola, diosas, resplandor, magia, panteon, trono"),

  // b15 — Él lamentó la pérdida. Ellas afinaron las técnicas.
  escp("b15a", [ref("irunuu"), ref("piichi"), ref("llanura_cardonal")], {
    comun: `Años, última luz. IRUNÚU LAMENTÓ LA PÉRDIDA EL RESTO DE SUS DÍAS: EL CIERRE CONTRAPONE DOS DESTINOS y éste es el suyo. Objeto ancla: el jirón de telaraña guardado.`,
    camara: {
      a: "PLANO MACRO del mismo jirón de telaraña, ya viejo y gris, guardado dentro de un trozo de tela doblada.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la casa al atardecer con él sentado solo en el umbral, mucho mayor, mirando los cardones.",
    },
    ini: "el mismo jirón de telaraña, ya viejo y gris, guardado dentro de un trozo de tela doblada.",
    fin: "desde arriba, él está sentado solo en el umbral de la casa al atardecer, mucho mayor, mirando los cardones.",
  }, "llanto teatral, castigo divino, ruina, locura, fantasma, aparicion"),
  escp("b15b", [ref("tejedoras"), ref("telar"), ref("tejidos_de_waleker")], {
    comun: `Luz plana. ELLAS AFINARON LAS TÉCNICAS Y CORRIGIERON LOS ERRORES: el trabajo mejora porque son muchas. Objeto ancla: el error deshecho y vuelto a hacer.`,
    camara: {
      a: "PLANO MACRO de unos dedos deshaciendo una vuelta mal dada y volviéndola a pasar bien.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del patio con ocho telares funcionando a la vez y mujeres de todas las edades trabajando en ellos.",
    },
    ini: "unos dedos deshacen una vuelta mal dada y la vuelven a pasar bien.",
    fin: "desde arriba, ocho telares funcionan a la vez en el patio y hay mujeres de todas las edades trabajando en ellos.",
  }, "fabrica, maquinaria, telares industriales, uniformes, escuela europea"),

  // b16 — La araña quedó tejiendo en los rincones. El don se volvió trabajo.
  esc("b16a", [ref("waleker"), ref("piichi")], {
    comun: `Penumbra de un rincón. LA ARAÑA QUEDÓ TEJIENDO EN LOS RINCONES, COMO UNA MEMORIA: una araña corriente de casa, en su tela, y nada más. Objeto ancla: la telaraña del rincón.`,
    camara: {
      a: "PLANO MACRO de una telaraña en el ángulo de dos vigas, con el polvo y la luz atravesándola.",
      b: "la cámara ha RETROCEDIDO y ha girado: PLANO MEDIO del rincón entero de la casa, con la telaraña arriba y la vida de la casa siguiendo abajo, desenfocada.",
    },
    ini: "una telaraña en el ángulo de dos vigas, con el polvo y la luz atravesándola.",
    fin: "en el rincón entero de la casa, la telaraña está arriba y la vida de la casa sigue abajo, desenfocada.",
  }, "arana gigante, monstruo, ojos, presa envuelta, terror, resplandor"),
  escp("b16b", [ref("tejedoras"), ref("tejidos_de_waleker"), ref("enramada")], {
    comun: `Última luz. EL DON DE UNA NOCHE SE VOLVIÓ TRABAJO COLECTIVO: es la lámina que el corpus le debe al pueblo wayúu, MUCHAS MANOS TRABAJANDO. Objeto ancla: el patio entero tejiendo.`,
    camara: {
      a: "PLANO MACRO de una manta terminada saliendo del telar, con los colores del arco iris en la cenefa.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL final en picado de la ranchería al atardecer con telares y tejidos de colores en varios patios a la vez, y gente en todos ellos.",
    },
    ini: "una manta terminada sale del telar, con los colores del arco iris en la cenefa.",
    fin: "desde muy arriba, hay telares y tejidos de colores en varios patios a la vez y gente trabajando en todos ellos.",
  }, "aureola, aparicion, monumento, museo, texto, moraleja dibujada"),
]);
