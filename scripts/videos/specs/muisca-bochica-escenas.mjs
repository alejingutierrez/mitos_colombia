// Keyframes de escena del video de Bochica (2 por bloque; b1a reusa
// muiscas/biblia/sabana_cultivos). Doctrina aplicada: cada escena declara
// ESCALA + LUZ + OBJETO ANCLA + CAPA DE PRIMER PLANO.
// Guion de luz: amanecer fértil → lluvia plomiza → tormenta → noche de ofrenda
// → tarde dorada húmeda (aparición) → oro y espuma → luz limpia → verde renacido.

export const SPEC_NAME = "muisca-bochica-escenas";
export const OUT_DIR = "muiscas/videos/bochica/keyframes";

export const SHARED_AVOID =
  "texto, letras, logos, marcas de agua, marcos o bordes; CGI, render 3D o ilustracion digital pulida; coronas, templos europeos, cruces; piramides o penachos ajenos; joyeria u oro en el cuerpo; desnudez o dramatismo excesivo; rasgos europeos en cualquier persona; cambiar rostros, mantas o materiales de los personajes de referencia; ninos o bebes";

export const PALETTE =
  "verde frio de paramo, azul gris de agua, ocres minerales, crema de algodon crudo, blanco de niebla; acento de oro batido SOLO donde aparece la vara y la luz de la aparicion";

const B = "muiscas/biblia";

export const ITEMS = [
  {
    id: "b1b_mazorca_gotas",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/sabana_cultivos`],
    scene:
      "PLANO DETALLE a ras de cultivo, luz de amanecer que se va apagando en gris. Mazorcas jóvenes de papel del MISMO maizal de la referencia, con las PRIMERAS gotas de lluvia de papel brillando sobre las hojas; al fondo desenfocado, el valle y el río de la referencia. Capa de primer plano: hojas de maíz en sombra. Objeto ancla: una mazorca con su gota.",
    avoid: "personas, inundacion, sol pleno",
  },
  {
    id: "b2a_lluvia_valle",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/sabana_cultivos`, `${B}/casa_tierras_llanas`],
    scene:
      "PLANO GENERAL, luz plomiza de aguacero. EL MISMO valle de la referencia bajo cortinas de lluvia de hilos de papel; el río ya crecido y ancho, brillando gris; los bohíos de paja con sus humos apagándose. Capa de primer plano: el borde de un techo de paja goteando. Objeto ancla: el río crecido. Sin personas.",
    avoid: "personas, rayos, dramatismo excesivo",
  },
  {
    id: "b2b_agua_sube",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/casa_tierras_llanas`, `${B}/familias_muiscas`],
    scene:
      "PLANO MEDIO desde dentro del patio, luz plomiza. Una pareja adulta de LAS MISMAS familias de la referencia, DE ESPALDAS bajo el alero del bohío de referencia, mirando el agua gris que ya entra al patio y rodea las piedras del fogón; lluvia fina; sus mantas quietas y pesadas de humedad. Capa de primer plano: el poste del alero. Objeto ancla: el agua tocando las tres piedras del fogón.",
    avoid: "rostros de frente, ninos, llanto, agua violenta",
  },
  {
    id: "b3a_cenital_inundacion",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/sabana_cultivos`],
    scene:
      "PLANO CENITAL, luz de tormenta oscura. LA MISMA sabana de la referencia convertida en un espejo de agua gris-azul de capas de papel: los techos cónicos de paja emergen como islas pequeñas, los surcos de maíz se adivinan ahogados bajo el agua, el río ya no se distingue del valle. Niebla baja cruzando. Sin personas visibles. Objeto ancla: un techo-isla con su humo apagado.",
    avoid: "personas, botes, dramatismo de catastrofe moderna",
  },
  {
    id: "b3b_cultivos_ahogados",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/sabana_cultivos`],
    scene:
      "PLANO DETALLE bajo lluvia, luz oscura de tormenta. LAS MISMAS mazorcas de la referencia ahora dobladas y medio hundidas en agua turbia de papel gris; hojas vencidas flotando; círculos de lluvia en la superficie. Capa de primer plano: una hoja doblada en sombra. Objeto ancla: la mazorca vencida bajo el agua.",
    avoid: "personas, peces, barro excesivo",
  },
  {
    id: "b4a_subida_lomas",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/sendero_territorio`, `${B}/familias_muiscas`],
    scene:
      "PLANO GENERAL, lluvia fina y luz plomiza. Una fila de adultos de LAS MISMAS familias de la referencia, DE ESPALDAS y a media distancia, sube la loma verde del sendero de referencia de izquierda a derecha, con bultos tejidos AL HOMBRO y las mantas pesadas y dignas bajo el aguacero; abajo, el valle inundado apenas se insinúa entre niebla. Capa de primer plano: pastos de páramo en sombra. Objeto ancla: el último bulto de la fila.",
    avoid: "ninos, bebes en brazos, rostros de frente, panico",
  },
  {
    id: "b4b_fuego_protegido",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/familias_muiscas`],
    scene:
      "PLANO MEDIO cerrado, atardecer plomizo. Bajo una manta de algodón tendida como techo improvisado, dos pares de manos adultas de papel de LAS MISMAS familias de la referencia protegen un fuego pequeño recién prendido que ilumina cálido; alrededor cae la lluvia en hilos finos; el vapor sube. Capa de primer plano: el borde de la manta-techo goteando. Objeto ancla: la primera llama protegida.",
    avoid: "rostros, ninos, fogata grande",
  },
  {
    id: "b5a_ofrendas",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/semillas_bolsita`, `${B}/familias_muiscas`],
    scene:
      "PLANO DETALLE nocturno, luz de fuego cálida contra noche azul. Manos adultas de papel dejan sobre una piedra plana, ante un fuego de ofrenda, un tejido de algodón doblado con franja ocre y un puñado de semillas como las de la referencia; el humo fino sube derecho. Capa de primer plano: el resplandor desenfocado de la llama. Objeto ancla: el tejido doblado.",
    avoid: "rostros, sangre, sacrificio animal, cruces",
  },
  {
    id: "b5b_cerro_ofrenda",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/sendero_territorio`],
    scene:
      "GRAN PLANO GENERAL nocturno, noche azul lluviosa. El cerro de la referencia como silueta oscura de capas de papel; en su cima, UN punto de fuego cálido con su columna fina de humo subiendo; abajo, el valle inundado refleja apenas la noche; figuras humanas diminutas apenas insinuadas junto al fuego. Capa de primer plano: pastos oscuros. Objeto ancla: el punto de fuego en la inmensidad.",
    avoid: "luna con rostro, rayos, multitud visible",
  },
  {
    id: "b6a_sol_lluvia",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/rocas_tequendama`],
    scene:
      "PLANO GENERAL, la luz cambia: sol dorado abriéndose paso entre cortinas de lluvia que se retiran. LAS MISMAS rocas cerradas del Tequendama de la referencia a lo lejos, y sobre ellas un ARCOÍRIS SOBRIO y tenue de bandas de papel desaturadas, apenas presente entre la niebla dorada. El agua represada brilla abajo. Sin personas. Capa de primer plano: vegetación de niebla a contraluz. Objeto ancla: el arcoíris tenue sobre las rocas.",
    avoid: "arcoiris saturado o grueso, personas, figuras en el cielo",
  },
  {
    id: "b6b_bochica_roca",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/rocas_tequendama`, `${B}/bochica_anciano`, `${B}/vara_dorada`],
    scene:
      "PLANO CONTRAPICADO MEDIO, luz dorada húmeda de atardecer entre lluvia. EL MISMO Bochica anciano de la referencia de pie en lo alto de una de LAS MISMAS rocas del Tequendama, visto desde abajo a media distancia: rostro sereno visible, cabello gris movido por el viento, la manta ondeando pesada, LA MISMA vara dorada de la referencia firme en su mano derecha contra el cielo dorado-tormenta. Capa de primer plano: el borde húmedo de la roca en sombra. Objeto ancla: el remate de oro de la vara. ESTE ES EL RETRATO DEL VIDEO.",
    avoid: "aspecto europeo, barba larga, tunica, aureola, volar, arcoiris tocandolo",
  },
  {
    id: "b7a_vara_alzada",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/vara_dorada`, `${B}/bochica_anciano`],
    scene:
      "PLANO DETALLE contrapicado, luz dorada intensa de tormenta abriéndose. LA MISMA vara dorada de la referencia alzada al cielo por la mano curtida del MISMO anciano de la referencia (solo se ve el brazo y la mano): el remate de oro batido recoge toda la luz; gotas de lluvia suspendidas brillan alrededor como semillas de agua; nubes de papel en espiral detrás. Capa de primer plano: gotas desenfocadas. Objeto ancla: el oro de la vara.",
    avoid: "rayos electricos, rostro, simbolos en el cielo",
  },
  {
    id: "b7b_lanzamiento",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/rocas_tequendama`, `${B}/vara_dorada`],
    scene:
      "PLANO GENERAL épico, el instante del mito: LA MISMA vara dorada de la referencia vuela horizontal como una línea de oro sobre el agua represada, dejando una estela fina de luz de papel, directo hacia LAS MISMAS rocas cerradas de la referencia que empiezan a AGRIETARSE con líneas de luz entre las capas de papel; primeras láminas de roca desprendiéndose; spray de agua de papel saltando en la base. Luz dorada y gris a la vez. Sin personas en cuadro. Capa de primer plano: superficie del agua represada. Objeto ancla: la vara en vuelo. EL PLANO MÁS AMBICIOSO DEL VIDEO.",
    avoid: "explosion de fuego, personas, rayos, humo negro",
  },
  {
    id: "b8a_salto_nace",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/salto_tequendama`],
    scene:
      "CONTRAPICADO GRAN GENERAL, luz limpia recién lavada. EL MISMO Salto del Tequendama de la referencia en su primer instante: la cascada enorme de capas de papel blanco-azul rompiendo entre las rocas recién abiertas, niebla de espuma de algodón subiendo desde el vacío, las paredes húmedas brillando. Sin personas. Capa de primer plano: vegetación de niebla en sombra enmarcando. Objeto ancla: la columna de agua naciendo.",
    avoid: "personas, arcoiris, aves",
  },
  {
    id: "b8b_agua_baja",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/sabana_cultivos`],
    scene:
      "PLANO CENITAL, luz limpia de después de la lluvia. LA MISMA sabana de la referencia DRENÁNDOSE: el espejo de agua se retira en canales brillantes hacia el estrecho, y la tierra verde-ocre reaparece en parches húmedos alrededor de los techos de paja; los surcos vuelven a insinuarse. Eco visual del cenital de la inundación, pero en reversa. Sin personas. Objeto ancla: el primer surco reapareciendo.",
    avoid: "personas, sol con rayos, arcoiris",
  },
  {
    id: "b9a_siembra",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/semillas_bolsita`, `${B}/familias_muiscas`],
    scene:
      "PLANO DETALLE a ras de tierra, luz cálida de mañana nueva. Manos adultas de papel siembran semillas de maíz como las de la referencia en un surco de tierra húmeda y oscura; gotas todavía brillan en los terrones; al fondo desenfocado, más surcos y un bohío. Capa de primer plano: terrones en sombra. Objeto ancla: la semilla entrando a la tierra (la mazorca del inicio, cerrando el círculo).",
    avoid: "rostros, herramientas de metal, ninos",
  },
  {
    id: "b9b_sabana_arcoiris",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/sabana_cultivos`, `${B}/salto_tequendama`],
    scene:
      "GRAN PLANO GENERAL final, luz serena de tarde limpia. LA MISMA sabana de la referencia otra vez verde y sembrada, bohíos con humos finos vivos, el río corriendo tranquilo hacia el estrecho donde a lo lejos se insinúa la niebla del MISMO salto de la referencia; arriba, un ARCOÍRIS SOBRIO y tenue de papel cruzando discreto el cielo lavado. Sin personas o figuras diminutas lejanas. Capa de primer plano: mazorcas nuevas en sombra. Objeto ancla: el arcoíris tenue como promesa.",
    avoid: "arcoiris saturado, figuras sobre el arcoiris, sol con rostro",
  },
];
