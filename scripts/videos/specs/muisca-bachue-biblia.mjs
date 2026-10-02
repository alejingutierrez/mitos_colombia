// Biblia visual muisca para video — especificación de assets (Bachué, piloto).
// Documentación: docs/videos/muiscas/biblia-visual-video.md
// Cada item: id (nombre de archivo), kind, preset (vertical|square),
// scene (identidad/escena), avoid (exclusiones extra), refs (ids previos que se
// pasan como imágenes de referencia vía images.edit para consistencia).

export const SPEC_NAME = "muisca-bachue-biblia";
export const OUT_DIR = "muiscas/biblia";

export const SHARED_AVOID =
  "texto, letras, logos, marcas de agua, marcos o bordes; CGI, render 3D o ilustracion digital pulida; coronas, tronos o templos europeos; piramides, penachos o iconografia mesoamericana; simbolos espirituales inventados; joyeria inventada u oro en el cuerpo; desnudez, sexualizacion o dramatismo excesivo";

export const PALETTE =
  "verde frio de paramo, azul gris de laguna, ocres minerales, crema de algodon crudo, blanco de niebla; acentos discretos, sin saturacion ni neones";

export const ITEMS = [
  // ── Personajes (fichas de identidad, cuerpo entero, fondo mate liso) ──
  {
    id: "bachue_adulta",
    kind: "personaje",
    preset: "vertical",
    scene:
      "Bachué, madre de los seres humanos del mito muisca: mujer andina de unos treinta años, rostro sereno y fuerte de rasgos indígenas, piel morena, cabello negro liso en trenza suelta. Viste una manta rectangular de algodón crudo envuelta del pecho a la pantorrilla y anudada en el hombro derecho, con una segunda manta pequeña sobre los hombros que lleva UNA sola franja tejida geométrica sobria en ocre y verde oscuro. Descalza, de pie, gesto calmado de guía.",
    avoid: "flores en el pelo, maquillaje, pose de modelo, sonrisa amplia",
  },
  {
    id: "bachue_anciana",
    kind: "personaje",
    preset: "vertical",
    refs: ["bachue_adulta"],
    scene:
      "LA MISMA mujer de la imagen de referencia (Bachué), ahora anciana de unos setenta años: el mismo rostro reconocible con arrugas serenas, la misma trenza ahora gris, exactamente la misma manta de algodón crudo con la misma franja ocre y verde oscuro. De pie con dignidad, apenas encorvada, gesto sabio y tranquilo.",
    avoid: "decrepitud, tristeza, bastón, encorvamiento exagerado",
  },
  {
    id: "companero_nino",
    kind: "personaje",
    preset: "vertical",
    scene:
      "Niño pequeño muisca de unos tres años, el acompañante de Bachué en el mito: manta corta de algodón crudo anudada al hombro, cabello negro corto y liso, expresión curiosa y tranquila, de pie con los brazos relajados.",
    avoid: "tristeza, llanto, juguetes, ropa moderna",
  },
  {
    id: "companero_adulto",
    kind: "personaje",
    preset: "vertical",
    scene:
      "El compañero de Bachué ya adulto: hombre andino fornido y calmado de unos treinta años, cabello negro recogido, manta de algodón crudo anudada al hombro izquierdo dejando un brazo libre, con una franja tejida ocre sencilla. Descalzo, porte sereno de apoyo.",
    avoid: "musculatura exagerada, armas, pose heroica, barba abundante",
  },
  {
    id: "companero_anciano",
    kind: "personaje",
    preset: "vertical",
    refs: ["companero_adulto"],
    scene:
      "EL MISMO hombre de la imagen de referencia (el compañero de Bachué), ahora anciano de unos setenta años: mismo rostro reconocible, cabello gris recogido, exactamente la misma manta de algodón crudo con franja ocre. De pie, sereno y digno.",
    avoid: "decrepitud, bastón, tristeza",
  },
  {
    id: "familias_muiscas",
    kind: "personaje",
    preset: "vertical",
    scene:
      "Grupo pequeño de familias muiscas diversas (los descendientes de Bachué): dos mujeres, dos hombres y dos jóvenes de distintas edades, con mantas de algodón crudo y franjas tejidas discretas en ocre, verde oscuro y azul apagado; mochilas tejidas al hombro y una vasija de cerámica sencilla en manos de una mujer. De pie en grupo cálido y sobrio.",
    avoid: "multitud, uniformidad militar, poses rígidas, jerarquías visibles",
  },

  // ── Paisajes (tableau completo, SIN personas) ──
  {
    id: "laguna_iguaque_A",
    kind: "paisaje",
    preset: "vertical",
    scene:
      "La laguna de Iguaque al amanecer, vista frontal desde la orilla: agua oscura y quieta, orilla de pajonal con frailejones construidos en capas de papel, niebla baja entre cumbres suaves de páramo, y una piedra ancha y plana en la orilla como objeto ancla en primer plano. Sin personas.",
    avoid: "sol visible con rayos, colores cálidos saturados, personas",
  },
  {
    id: "laguna_iguaque_B",
    kind: "paisaje",
    preset: "vertical",
    refs: ["laguna_iguaque_A"],
    scene:
      "LA MISMA laguna de Iguaque de la imagen de referencia (mismos frailejones, misma agua oscura, misma niebla), ahora vista desde el pajonal alto en un picado suave hacia el agua: la orilla curva abajo, frailejones grandes en primer plano, cumbres al fondo. Sin personas. Es otro ángulo de cámara del mismo lugar.",
    avoid: "personas, cambiar la paleta o la vegetación del lugar de referencia",
  },
  {
    id: "casa_tierras_llanas",
    kind: "paisaje",
    preset: "vertical",
    scene:
      "Valle verde y llano del altiplano con un bohío circular de bahareque y techo cónico de paja en el centro; a un lado, un fogón de tres piedras con humo fino de papel; cultivos jóvenes y lomas suaves al fondo, cielo de nubes bajas. Sin personas.",
    avoid: "personas, arquitectura colonial o moderna",
  },
  {
    id: "sendero_territorio",
    kind: "paisaje",
    preset: "vertical",
    scene:
      "Camino de tierra que serpentea entre lomas verdes del altiplano y cultivos jóvenes; un arroyo pequeño de papel azul-gris cruza el sendero en primer plano; cielo amplio de nubes bajas con luz fría. Sin personas.",
    avoid: "personas, señales, cercas modernas",
  },
  {
    id: "poblado_nuevo",
    kind: "paisaje",
    preset: "vertical",
    scene:
      "Poblado muisca nuevo: varias casas circulares de paja alrededor de un patio de tierra, un telar de marco de madera apoyado contra una casa como objeto ancla, cultivos y lomas al fondo, humo fino de un fogón. Sin personas.",
    avoid: "personas, plazas de piedra, templos, murallas",
  },

  // ── Props ──
  {
    id: "semillas_bolsita",
    kind: "prop",
    preset: "square",
    scene:
      "Una bolsita tejida de fibra cruda con una sola franja ocre, abierta, mostrando semillas de maíz, fríjol y quinua hechas como pequeñas piezas de papel de colores tierra; objeto único centrado sobre fondo mate liso color crema.",
    avoid: "manos, mesa decorada, oro",
  },
  {
    id: "serpientes_laguna",
    kind: "prop",
    preset: "square",
    scene:
      "Dos SERPIENTES (culebras) de agua, largas y delgadas, nadando serenas en un círculo suave sobre agua oscura de laguna: una verde oscuro y otra ocre profundo. Cuerpos cilíndricos que ondulan en forma de S, cabeza redondeada de serpiente pegada al agua, escamas como pequeñas capas de papel recortado. ABSOLUTAMENTE SIN aletas, SIN cola de pez, SIN branquias, SIN forma de pez koi: son culebras, no peces. Solemnes y tranquilas, nunca amenazantes.",
    avoid: "peces, koi, aletas, colas de pez, branquias, amenaza, colmillos, dragones",
  },

  // ── Keyframe piloto (bloque 2, plano 2 del guion) ──
  {
    id: "kf_b2_emerge",
    kind: "keyframe",
    preset: "vertical",
    refs: ["laguna_iguaque_A", "bachue_adulta", "companero_nino"],
    scene:
      "Plano medio frontal: Bachué emerge serena del agua oscura de la laguna de Iguaque, sumergida hasta la cintura, llevando de la mano al niño pequeño que emerge a su lado. Es LA MISMA mujer y EL MISMO niño de las imágenes de referencia, con sus mismas mantas ahora empapadas y modestas, dentro DEL MISMO paisaje de laguna de la referencia. Círculos concéntricos de papel en el agua alrededor de ambos, niebla baja, frailejones suavemente desenfocados en la orilla del fondo. Luz fría de amanecer.",
    avoid:
      "desnudez, transparencias en la ropa mojada, dramatismo, sol dorado, cambiar los rostros o las mantas de los personajes de referencia",
  },
];
