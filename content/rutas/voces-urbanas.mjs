/**
 * Ruta · Voces urbanas
 *
 * Los mitos se declaran por SLUG: es la identidad estable de un relato en el
 * archivo. `label` es sólo la manera en que la curaduría nombra el relato dentro
 * de la ruta; si alguien corrige el título del mito, la ruta no lo pierde.
 *
 * Contrato completo del objeto: content/rutas/model.mjs
 */
export const ruta = {
  slug: "voces-urbanas",
  title: "Voces urbanas",
  description:
    "Leyendas coloniales y rumores actuales que siguen vivos en la ciudad.",
  detail: "Callejones, plazas y memorias urbanas.",
  tone: "Ciudad y eco",
  accent: "ink",
  keywords: [
    "bogota",
    "tranvia",
    "ascensor",
    "teatro",
    "ciudad",
    "urbano",
    "plaza",
  ],

  /* Prosa editorial. Admite string o array de párrafos. */
  intro: [
    "La ciudad de esta ruta no produce criaturas: produce personajes. Y lo que el archivo conserva de ellos casi nunca es el susto, sino el lugar que la ciudad les dio.",
    "Antonín, «el bobo del tranvía», era un personaje querido en Bogotá por su vestimenta y por el papel que se inventó de agente vial. El Mono de la Pila sobrevive convertido en expresión popular: quejarse al Mono de la Pila es decir que no hay a quién quejarse. Estrellita, del teatro azul, atraviesa una vida marcada por el cambio cultural del lugar donde trabajaba. Los tres son la misma operación: una ciudad que convierte a alguien en figura y después la conserva sin recordar del todo por qué. Vale leerlos preguntándose qué le debía el barrio a la persona que volvió personaje.",
    "El segundo tramo es el de las ciudades portuarias y su memoria política. En Cartagena, Miguel y Dolores encarnan valentía y sacrificio por la libertad frente a las estructuras de poder de su tiempo; en el sitio de Morillo, un engaño montado con pescadores permite la salida de las embarcaciones de los combatientes. La Sombra Gris transforma a Ximena cuando encuentra un tesoro escondido. Son relatos de asedio, de clandestinidad y de riqueza súbita: la ciudad contándose a sí misma en el momento en que se estaba jugando algo.",
    "El tercer tramo reúne lo que la ciudad hace con el deseo y con la autoridad. El toro en el ascensor pone la tradición taurina dentro del caos urbano, y en el choque entre las dos cosas está toda la gracia. La confesión juega con los eufemismos de un cura y el cuerpo de una joven, en un registro que la ciudad conserva porque se ríe. Servio Cruz descubre con el Chenche el precio de los deseos desmedidos. Y Anansi, la araña akan que cruzó el Atlántico, aparece de sacristana en una iglesia de Istmina: es la pieza más antigua de esta ruta y la que recuerda que lo urbano en Colombia no empieza en Bogotá.",
  ],
  galleryIntro:
    "Diez relatos de ciudad leídos por lo que dicen de quienes los protagonizan.",
  closing: [
    "Toda esta ruta llega sin comunidad atribuida y en registro literario: es el corpus urbano y costeño que el archivo recogió sin poder documentar del todo su procedencia. Se conserva así, con la marca de su origen a la vista.",
  ],

  /* Mito de portada. Debe estar en `myths`. */
  cover: "el-bobo-del-tranvia",

  /* Censo de la ruta: única fuente de pertenencia. Orden = orden de lectura. */
  myths: [
    { slug: "el-bobo-del-tranvia", label: "El bobo del tranvía", featured: true },
    { slug: "el-toro-en-el-ascensor", label: "El toro en el ascensor", featured: true },
    { slug: "anansi", label: "Anansi", featured: true },
    { slug: "el-chenche", label: "El chenche" },
    { slug: "la-confesion", label: "La confesión" },
    { slug: "la-sombra", label: "La sombra" },
    { slug: "en-el-sitio-de-morillo", label: "En el sitio de Morillo" },
    { slug: "el-mono-de-la-pila", label: "El mono de la pila" },
    { slug: "el-fantasma-del-teatro-azul", label: "El fantasma del teatro azul" },
    { slug: "una-reunion-clandestina", label: "Una reunión clandestina" },
  ],

  /* Etapas del recorrido. `myths` referencia slugs ya declarados arriba.
     Migradas desde los `highlights` originales: conservan título y resumen,
     y esperan prosa larga y reparto de mitos por parte de la curaduría. */
  momentos: [
    {
      slug: "rumores-de-barrio",
      title: "La ciudad hace personajes",
      summary: "Gente real convertida en figura, y conservada después sin recordar del todo por qué.",
      prose: [
        "Antonín se hizo querer en Bogotá por su vestimenta y por el papel de agente vial que él mismo se asignó; la ciudad lo llamó «el bobo del tranvía» y con ese nombre lo guardó. El Mono de la Pila terminó convertido en frase hecha: quejarse al Mono de la Pila es una manera de decir que no hay a quién quejarse, y esa es toda la vida que le quedó a la figura. Estrellita, en el teatro azul, atraviesa una vida marcada por los cambios del lugar donde trabajaba. Conviene leerlos preguntándose qué le debía el barrio a cada uno de ellos.",
      ],
      myths: ["el-bobo-del-tranvia", "el-mono-de-la-pila", "el-fantasma-del-teatro-azul"],
    },
    {
      slug: "sombras-coloniales",
      title: "La ciudad en juego",
      summary: "Asedio, clandestinidad y riqueza súbita en las ciudades portuarias.",
      prose: [
        "Miguel y Dolores se reúnen a escondidas en Cartagena encarnando valentía y sacrificio frente a las estructuras de poder de su tiempo. En el sitio de Morillo, un engaño montado con pescadores permite que salgan las embarcaciones de los combatientes: son los que conocen el agua quienes hacen posible la maniobra. Y la Sombra Gris transforma a Ximena en el momento en que encuentra un tesoro oculto, en un destino que la ciudad no le tenía previsto. Los tres relatos comparten escenario y comparten pregunta: quién arriesga y quién decide.",
      ],
      myths: ["una-reunion-clandestina", "en-el-sitio-de-morillo", "la-sombra"],
    },
    {
      slug: "mitos-contemporaneos",
      title: "El deseo y la autoridad",
      summary: "Lo que la ciudad hace con la ambición, con el cuerpo y con quien manda.",
      prose: [
        "El toro en el ascensor mete la tradición taurina dentro del caos urbano de Bogotá, y en ese choque está toda la gracia del relato. La confesión juega con los eufemismos que un cura usa para referirse al cuerpo de una joven; la ciudad lo conservó porque se ríe, y esa risa también es un dato sobre la autoridad. Servio Cruz descubre con el Chenche el precio de los deseos desmedidos. Y Anansi, la araña de tradición akan que llegó por el Caribe, se instala de sacristana en una iglesia de Istmina: es la pieza más antigua de la ruta y la que recuerda que lo urbano en Colombia no empieza en Bogotá.",
      ],
      myths: ["el-toro-en-el-ascensor", "la-confesion", "el-chenche", "anansi"],
    },
  ],
};

export default ruta;
