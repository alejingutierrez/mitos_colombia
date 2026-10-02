// Keyframes de escena del video de Bachué (2 por bloque; b1a reusa laguna_iguaque_A
// y b2a reusa kf_b2_emerge de la biblia). Guion: docs/videos/muiscas/bachue-guion.md
// Los refs con "/" apuntan a la biblia: content/videos/muiscas/biblia/<id>.jpg

export const SPEC_NAME = "muisca-bachue-escenas";
export const OUT_DIR = "muiscas/videos/bachue/keyframes";

export const SHARED_AVOID =
  "texto, letras, logos, marcas de agua, marcos o bordes; CGI, render 3D o ilustracion digital pulida; coronas, tronos o templos europeos; piramides, penachos o iconografia mesoamericana; simbolos espirituales inventados; joyeria inventada u oro en el cuerpo; desnudez, sexualizacion o dramatismo excesivo; cambiar los rostros, mantas o materiales de los personajes de referencia";

export const PALETTE =
  "verde frio de paramo, azul gris de laguna, ocres minerales, crema de algodon crudo, blanco de niebla; acentos discretos, sin saturacion ni neones";

const B = "muiscas/biblia";

export const ITEMS = [
  {
    id: "b1b_semillas_orilla",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/laguna_iguaque_A`, `${B}/semillas_bolsita`],
    scene:
      "Primer plano de la orilla lodosa de LA MISMA laguna de la referencia: semillas de maíz, fríjol y quinua (las mismas de la bolsita de referencia) dormidas, semienterradas en el lodo oscuro junto a la piedra ancha y plana; un velo fino de niebla roza el agua al fondo; frailejones desenfocados. Sin personas. Luz fría de amanecer.",
    avoid: "personas, brotes verdes, insectos",
  },
  {
    id: "b2b_salida_agua",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/laguna_iguaque_A`, `${B}/bachue_adulta`, `${B}/companero_nino`],
    scene:
      "Plano general desde atrás: LA MISMA Bachué y EL MISMO niño de las referencias, ya en la orilla y completamente vestidos con sus mantas secas, caminan tomados de la mano alejándose del agua de la laguna de referencia, vistos de espaldas a media distancia; sus primeras huellas quedan marcadas en el lodo detrás de ellos; niebla baja. Luz fría de amanecer.",
    avoid: "desnudez, ropa mojada, primeros planos de rostros, dramatismo",
  },
  {
    id: "b2c_huellas",
    kind: "keyframe",
    preset: "vertical",
    refs: ["muiscas/biblia/laguna_iguaque_A", "muiscas/biblia/semillas_bolsita"],
    scene:
      "Plano picado cerrado de la orilla lodosa de LA MISMA laguna de la referencia, SIN personas: dos hileras de huellas humanas frescas —unas grandes y unas muy pequeñas— avanzan juntas sobre el lodo oscuro alejándose del agua; junto a ellas, algunas semillas dormidas como las de la referencia; ondas suaves en el borde del agua; niebla baja. Luz fría de amanecer.",
    avoid: "personas, pies visibles, animales",
  },
  {
    id: "b3a_construccion_casa",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/casa_tierras_llanas`, `${B}/bachue_adulta`, `${B}/companero_nino`],
    scene:
      "Plano general amplio del MISMO valle de la referencia: el bohío a medio construir a media distancia; LA MISMA Bachué de la referencia, pequeña en el encuadre, teje la paja del techo subida en la estructura, mientras EL MISMO niño, también pequeño en el encuadre y completo, apila leña junto al fogón de tres piedras que humea fino. Figuras lejanas integradas al paisaje. Cielo de nubes bajas.",
    avoid: "herramientas metálicas, andamios",
  },
  {
    id: "b3b_fogon_nocturno",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/casa_tierras_llanas`, `${B}/bachue_adulta`, `${B}/companero_nino`, `${B}/semillas_bolsita`],
    scene:
      "Plano general nocturno del MISMO bohío de la referencia visto desde fuera: luz cálida del fogón iluminando la entrada; a media distancia y DE ESPALDAS, LA MISMA Bachué y EL MISMO niño sentados mirando el fuego, cuyas llamas son capas de papel naranja y ocre; arriba un cielo estrellado de papel perforado; LA MISMA bolsita de semillas cuelga de un poste junto a la entrada. Ambiente sereno.",
    avoid: "luna con rostro, fogata grande, chispas excesivas",
  },
  {
    id: "b4a_semillas_pareja",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/casa_tierras_llanas`, `${B}/bachue_adulta`, `${B}/companero_adulto`, `${B}/semillas_bolsita`],
    scene:
      "Plano medio frente al bohío de la referencia: EL MISMO compañero adulto de la referencia carga un tronco al hombro hacia la casa mientras LA MISMA Bachué vierte semillas en LA MISMA bolsita tejida; se miran con complicidad serena; humo fino del fogón.",
    avoid: "romance explícito, beso, poses teatrales",
  },
  {
    id: "b4b_valle_atardecer",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/casa_tierras_llanas`, `${B}/familias_muiscas`],
    scene:
      "Plano general alto del MISMO valle de la referencia al atardecer: ahora hay varias casas circulares de paja nuevas, cada una con su columna fina de humo; LAS MISMAS familias de la referencia caminan entre las casas, algunas con pequeños de la mano; luz dorada suave sobre el papel.",
    avoid: "ciudad, calles rectas, multitud densa",
  },
  {
    id: "b5a_fila_sendero",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/sendero_territorio`, `${B}/bachue_adulta`, `${B}/familias_muiscas`, `${B}/semillas_bolsita`],
    scene:
      "Plano general del MISMO sendero de la referencia: una fila de LAS MISMAS familias avanza entre las lomas; LA MISMA Bachué va al frente señalando un valle con agua a lo lejos, con LA MISMA bolsita de semillas colgada al hombro; nubes bajas.",
    avoid: "caravanas con animales de carga, banderas",
  },
  {
    id: "b5b_pies_arroyo",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/sendero_territorio`, `${B}/bachue_adulta`],
    scene:
      "Primer plano de los pies descalzos de papel de LA MISMA Bachué cruzando el pequeño arroyo del sendero de referencia, pisando piedras planas; el agua de papel azul-gris ondula alrededor de cada paso; el borde de su manta cruda roza el agua.",
    avoid: "sandalias, uñas pintadas, agua salpicando fuerte",
  },
  {
    id: "b6a_ensenanza_semillas",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/poblado_nuevo`, `${B}/bachue_adulta`, `${B}/vasija_ceramica`, `${B}/semillas_bolsita`],
    scene:
      "Plano medio en el patio del MISMO poblado de la referencia: LA MISMA Bachué muestra a una joven muisca (manta cruda con franja azul apagado, cabello negro recogido) cómo guardar semillas de LA MISMA bolsita dentro de LA MISMA vasija de cerámica; el telar de la referencia al fondo.",
    avoid: "pizarras, gestos de sermón, multitud",
  },
  {
    id: "b6b_compartir_agua",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/poblado_nuevo`, `${B}/vasija_ceramica`],
    scene:
      "Plano cerrado de cuatro manos de papel vertiendo agua de UNA vasija de cerámica como la de referencia hacia otra igual, compartiéndola; gotas de papel azul-gris; al fondo, un sendero abierto entre cultivos jóvenes del MISMO poblado de la referencia.",
    avoid: "rostros en primer plano, derrames",
  },
  {
    id: "b7a_rostro_anciana",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/poblado_nuevo`, `${B}/bachue_anciana`],
    scene:
      "Primer plano del rostro de LA MISMA Bachué anciana de la referencia: arrugas serenas de papel, trenza gris, mirada tranquila hacia el horizonte; detrás, desenfocados, muchos techos de paja del MISMO poblado ahora extenso, con humos finos; niebla suave.",
    avoid: "lágrimas, tristeza, decrepitud",
  },
  {
    id: "b7b_reunion_descendientes",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/poblado_nuevo`, `${B}/bachue_anciana`, `${B}/familias_muiscas`, `${B}/semillas_bolsita`],
    scene:
      "Plano medio en el patio del MISMO poblado: LOS MISMOS descendientes de la referencia reunidos en semicírculo alrededor de LA MISMA Bachué anciana; sobre una manta en el suelo, vasijas de cerámica con semillas; ella levanta la mano señalando hacia unas montañas lejanas entre niebla.",
    avoid: "personas arrodilladas, adoración, antorchas",
  },
  {
    id: "b8a_ascenso_multitud",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/laguna_iguaque_B`, `${B}/bachue_anciana`, `${B}/companero_anciano`, `${B}/familias_muiscas`],
    scene:
      "Plano general del pajonal alto de LA MISMA laguna de la referencia: un grupo sereno de adultos de LAS MISMAS familias de la referencia, vistos DE ESPALDAS y a media distancia, asciende entre frailejones y niebla llevando bultos tejidos al hombro; adelante van LA MISMA Bachué anciana y EL MISMO compañero anciano, tomados del brazo, también de espaldas.",
    avoid: "niños, bebés en brazos, rostros de frente, procesión religiosa, velas",
  },
  {
    id: "b8b_entrega_semillas",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/laguna_iguaque_A`, `${B}/bachue_anciana`, `${B}/semillas_bolsita`],
    scene:
      "Plano cerrado junto al agua de LA MISMA laguna: LA MISMA Bachué anciana pone LA MISMA bolsita de semillas en las manos de una joven muisca (manta cruda con franja azul apagado) que la recibe con ambas manos; ambas se miran con serenidad; niebla baja sobre el agua detrás.",
    avoid: "llanto, dramatismo, abrazo teatral",
  },
  {
    id: "b9a_entrada_agua",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/laguna_iguaque_B`, `${B}/bachue_anciana`, `${B}/companero_anciano`],
    scene:
      "Plano medio desde la orilla de LA MISMA laguna: LA MISMA Bachué anciana y EL MISMO compañero anciano, tomados de la mano y de espaldas a cámara, entran al agua oscura hasta la cintura; círculos concéntricos de papel se abren alrededor; al fondo, la otra orilla entre niebla.",
    avoid: "rostros de frente, hundimiento dramático, ahogo",
  },
  {
    id: "b9b_serpientes",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/laguna_iguaque_B`, `${B}/serpientes_laguna`],
    scene:
      "Plano cenital suave del agua oscura de LA MISMA laguna de la referencia: LAS MISMAS dos SERPIENTES (culebras) de la referencia — una verde oscuro y una ocre, cuerpos largos y delgados que ondulan en S, cabeza redondeada de serpiente, SIN aletas ni cola de pez ni branquias (no son peces) — se deslizan serenas en un círculo amplio sobre la superficie, dejando estelas de círculos concéntricos de papel; niebla cerrándose por los bordes. Majestuosas y tranquilas.",
    avoid: "peces, koi, aletas, colas de pez, branquias, colmillos, personas visibles",
  },
];
