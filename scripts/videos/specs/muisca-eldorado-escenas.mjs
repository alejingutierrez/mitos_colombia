// Keyframes de escena del video de EL DORADO (17 clips de 5 s).
// Guion: docs/videos/muiscas/mvp-guiones/guion-el-dorado-v1.json
// Canon: DB, slug `el-dorado`.
//
// MODELO: gpt-image-2.5-sunburst en calidad high (decisión del usuario 2026-09-12).
//   IMAGE_GENERATION_MODEL=gpt-image-2.5-sunburst node scripts/videos/generate-keyframes.mjs --spec …
//
// CANDADO ANTI-MODERACIÓN, que aquí es el riesgo principal: el canon documenta un
// cuerpo cubierto de polvo de oro, así que el guardarraíl del sitio («sin joyería u
// oro corporal») no aplica — El Dorado es su excepción explícita. Pero el filtro de
// Seedance reacciona a la IMAGEN de inicio, y ya bloqueó 3/3 una escena de madre y
// niño en el agua. Por eso: el heredero SIEMPRE con guayuco blanco descrito, SIEMPRE
// de espaldas o a media distancia, NUNCA un primer plano del torso, y varias escenas
// resueltas con manos u objetos en vez de con el cuerpo.
//
// Los refs con "/" apuntan a la biblia: content/videos/muiscas/biblia/<id>.jpg

export const SPEC_NAME = "muisca-eldorado-escenas";
export const OUT_DIR = "muiscas/videos/el-dorado/keyframes";

export const SHARED_AVOID =
  "texto, letras, logos, marcas de agua, marcos o bordes; CGI, render 3D o ilustracion digital pulida; coronas, tronos, templos o carabelas europeas; piramides, penachos o iconografia mesoamericana; simbolos espirituales inventados; ciudad de oro, edificios dorados, montanas de tesoro o cofres; desnudez total, torsos en primer plano, sexualizacion o dramatismo excesivo; cambiar los rostros, mantas o materiales de los personajes de referencia";

export const PALETTE =
  "verde frio de paramo, azul gris de laguna honda, ocres minerales, crema de algodon crudo, blanco de niebla; el oro SOLO como polvo mate sobre la piel y como figuras pequenas, nunca brillante ni saturado";

const B = "muiscas/biblia";

// Descripción byte-idéntica del heredero en todas las escenas donde aparece: es la
// regla de continuidad de personaje de la biblia, y a la vez el candado de pudor.
const HEREDERO =
  "EL MISMO heredero de la referencia: hombre joven muisca de rasgos andinos, pelo negro liso recogido, con GUAYUCO BLANCO DE ALGODON bien visible en la cadera; visto de espaldas o a media distancia, nunca en primer plano";

export const ITEMS = [
  {
    id: "c01_laguna_antes_del_alba",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/laguna_guatavita`],
    scene:
      "Plano general de LA MISMA laguna de la referencia antes del amanecer: crater circular de agua oscura y completamente quieta encajado entre laderas empinadas; una franja fina de niebla baja roza la superficie; frailejones y juncos recortados en primer plano. SIN personas. Cielo todavia sin sol, luz azul fria.",
    avoid: "personas, balsas, sol visible, reflejos dorados",
  },
  {
    id: "c02_sendero_al_alba",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/laguna_guatavita`, `${B}/sendero_territorio`],
    scene:
      "Plano general del sendero que sube al borde del crater de LA MISMA laguna de la referencia: UNA sola figura pequena y lejana, de espaldas, envuelta en una manta blanca de algodon, sube por el sendero de piedra hacia el filo; la laguna se adivina abajo entre la niebla. Figura integrada al paisaje, nunca protagonista del encuadre. Luz azul fria de antes del amanecer.",
    avoid: "rostros, primeros planos, grupos, antorchas",
  },
  {
    id: "c03_consejo_en_el_cercado",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/cercado_bacata`, `${B}/familias_muiscas`],
    scene:
      "Plano general del patio de tierra del MISMO cercado de la referencia al atardecer: un hombre joven sentado DE ESPALDAS en una estera, con manta blanca, escucha a DOS mayores sentados frente a el que hablan con las manos abiertas; entre ellos un fogon de tres piedras que humea fino. Figuras a media distancia, completas, sin primeros planos. Luz calida y baja.",
    avoid: "rostros en primer plano, gestos dramaticos, armas",
  },
  {
    id: "c04_reparto_del_trabajo",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/mercado_bacata`, `${B}/vasija_gacha`],
    scene:
      "Plano cenital cerrado sobre una estera de fique, SIN rostros: cuatro manos reparten mazorcas de maiz, panes de sal y madejas de algodon entre LOS MISMOS canastos de caña del mercado de la referencia; una vasija de barro a un lado. Solo manos y antebrazos con mangas de manta blanca. Luz lateral suave de taller.",
    avoid: "rostros, cuerpos completos, dinero, metales",
  },
  {
    id: "c05_mayores_y_balsa",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/balsa_juncos`, `${B}/laguna_guatavita`, `${B}/familias_muiscas`],
    scene:
      "Plano general de la orilla de LA MISMA laguna de la referencia: CUATRO mayores muiscas con mantas blancas, de pie y de perfil, esperan junto a LA MISMA balsa de juncos de la referencia, varada en el agua baja; la balsa lleva remos y unas figuritas de metal sobre los juncos. Detras, la ladera humeda del crater y nada mas: ningun edificio. Primeros rayos todavia sin salir.",
    avoid: "ciudad, construcciones, oro en grandes cantidades, rostros en primer plano",
  },
  {
    id: "c06_comunidad_en_el_filo",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/laguna_guatavita`, `${B}/familias_muiscas`],
    scene:
      "Plano contrapicado desde el agua hacia el filo del crater de LA MISMA laguna: una hilera larga de figuras pequenas de la comunidad, hombres, mujeres y ninos con mantas blancas, de pie y en silencio contra el cielo del amanecer, mirando hacia abajo. Todas lejanas y completas, como siluetas recortadas. Ladera de papel verde frio.",
    avoid: "rostros reconocibles, brazos en alto, gestos de multitud, banderas",
  },
  {
    id: "c07_resina_en_la_espalda",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/heredero_dorado`],
    scene:
      "Plano medio DE ESPALDAS en la orilla: " +
      HEREDERO +
      ", de pie y quieto, visto exactamente desde atras; dos manos de un mayor extienden una resina fragante y espesa sobre su espalda y sus hombros con una espatula de madera. Se ve la manta blanca doblada sobre una piedra al lado. Fondo de juncos y niebla, fuera de foco.",
    avoid: "torso de frente, pecho, rostro, primeros planos de piel, desnudez",
  },
  {
    id: "c08_soplo_de_oro",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/heredero_dorado`],
    scene:
      "Plano cerrado y lateral de UN HOMBRO Y UN BRAZO vistos desde atras: un mayor sopla polvo de oro por una cana hueca sobre EL MISMO heredero de la referencia, y el polvo se posa en una nube fina sobre la piel ya resinosa, que queda mate y granulada, nunca brillante. Se ve solo el hombro y el brazo, jamas el pecho ni el rostro. Luz fria de amanecer, fondo de agua oscura desenfocada.",
    avoid: "rostro, pecho, torso completo, cuerpo entero, brillo metalico intenso",
  },
  {
    id: "c09_mira_sus_brazos",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/heredero_dorado`, `${B}/laguna_guatavita`],
    scene:
      "Plano general DE ESPALDAS: " +
      HEREDERO +
      ", ahora con la piel cubierta de polvo de oro mate, de pie en la orilla y visto desde atras, con los dos brazos ligeramente separados del cuerpo, mirandose las manos. Delante de el, la laguna quieta y la ladera del crater. Figura completa y a media distancia, pequena dentro del paisaje.",
    avoid: "rostro, torso de frente, primer plano, pose heroica, brazos en alto",
  },
  {
    id: "c10_manos_de_orfebre",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/templo_ofrendas`, `${B}/balsa_juncos`],
    scene:
      "Plano cenital cerrado SIN rostros: dos manos de orfebre, con hollin en los dedos, sostienen un cuenco de barro con LAS MISMAS figuritas planas de oro y esmeraldas en bruto que van sobre la balsa de la referencia; alrededor, sobre una estera, herramientas sencillas de piedra y madera y un poco de arena de rio. Luz lateral de taller, oro mate.",
    avoid: "rostros, cuerpos, montanas de oro, joyas modernas, brillo metalico intenso",
  },
  {
    id: "c11_sube_a_la_balsa",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/balsa_juncos`, `${B}/heredero_dorado`, `${B}/laguna_guatavita`],
    scene:
      "Plano general de la orilla: " +
      HEREDERO +
      ", con la piel de polvo de oro mate, sube DE ESPALDAS a LA MISMA balsa de juncos de la referencia mientras dos mayores la sostienen por los bordes; el agua le llega a las pantorrillas. A los pies de la balsa, las figuritas de metal y las esmeraldas. Figuras completas y a media distancia. Luz de amanecer bajo.",
    avoid: "rostro, torso de frente, primeros planos, ceremonia teatral",
  },
  {
    id: "c12_remos_y_circulos",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/balsa_juncos`, `${B}/laguna_guatavita`],
    scene:
      "Plano cenital cerrado del agua oscura junto al borde de LA MISMA balsa de juncos: dos remos de madera entran en la laguna sin salpicar y abren circulos concentricos que se alejan; el reflejo de la balsa se quiebra en el agua. SIN personas visibles salvo un pie y una mano lejanos en el borde del encuadre. Luz fria.",
    avoid: "salpicaduras, espuma, personas completas, rostros, peces",
  },
  {
    id: "c13_balsa_en_el_centro",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/laguna_guatavita`, `${B}/balsa_juncos`],
    scene:
      "Plano general muy abierto de LA MISMA laguna: la balsa de juncos, diminuta, en el centro exacto del agua, con cuatro figuras pequenisimas de pie; el borde del crater ocupa el fondo y justo sobre el filo asoma el primer arco del sol. La niebla se abre en el centro. Todo el peso de la imagen esta en el paisaje, no en las figuras.",
    avoid: "primeros planos, rostros, rayos de sol dramaticos, destellos, lens flare",
  },
  {
    id: "c14_reflejo_duplicado",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/heredero_dorado`, `${B}/balsa_juncos`],
    scene:
      "Plano general DE ESPALDAS desde la balsa: " +
      HEREDERO +
      ", de pie sobre los juncos y visto desde atras, con la primera luz del sol dandole en los hombros dorados; justo debajo, en el agua quieta, su reflejo completo e invertido, algo mas oscuro. Dos imagenes del mismo hombre, una de juncos y otra de agua. Figura completa, nunca en primer plano.",
    avoid: "rostro, torso de frente, brillo cegador, destellos, pose de estatua",
  },
  {
    id: "c15_la_primera_ofrenda",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/balsa_juncos`, `${B}/templo_ofrendas`],
    scene:
      "Plano cerrado y picado sobre el agua oscura: UNA sola mano DEL MISMO heredero de la referencia, con polvo de oro en los dedos, suelta una de LAS MISMAS figuritas planas de oro de la balsa que ya va cayendo hacia la laguna; debajo, el circulo que se abre en la superficie. En el borde superior del encuadre, los juncos de la balsa. Solo la mano y el antebrazo, nada mas del cuerpo.",
    avoid: "rostro, cuerpo, lluvia de oro, muchas piezas a la vez, brillo intenso",
  },
  {
    id: "c16_el_oro_se_desprende",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/heredero_dorado`, `${B}/laguna_guatavita`],
    scene:
      "Plano general submarino y sereno, visto desde un lado: " +
      HEREDERO +
      ", sumergido hasta el pecho y de espaldas, con los brazos abajo; del polvo de oro de su piel se desprenden granos finos que bajan despacio hacia el fondo oscuro en hilos dorados. Arriba, la superficie del agua con la luz del amanecer. Figura de espaldas y a media distancia.",
    avoid: "rostro, torso de frente, primeros planos, ahogamiento, dramatismo, burbujas grandes",
  },
  {
    id: "c17_laguna_vacia",
    kind: "keyframe",
    preset: "vertical",
    refs: [`${B}/laguna_guatavita`],
    scene:
      "Plano general de LA MISMA laguna de la referencia ya con el sol afuera y el agua otra vez quieta: la superficie devuelve entero el reflejo del borde del crater. SIN personas, SIN balsa, sin rastro de la ceremonia; solo unos circulos muy debiles que terminan de cerrarse en el centro. Juncos y frailejones en primer plano. Luz clara y llana.",
    avoid: "personas, balsas, oro, barcos, ruinas, ciudades",
  },
];
