/**
 * Ruta · Ritos del mar
 *
 * Los mitos se declaran por SLUG: es la identidad estable de un relato en el
 * archivo. `label` es sólo la manera en que la curaduría nombra el relato dentro
 * de la ruta; si alguien corrige el título del mito, la ruta no lo pierde.
 *
 * Contrato completo del objeto: content/rutas/model.mjs
 */
export const ruta = {
  slug: "ritos-del-mar",
  title: "Ritos del mar",
  description:
    "Mareas, sirenas y guardianes costeros en el litoral colombiano.",
  detail: "Cantos de marea, barcos y pactos marinos.",
  tone: "Mareas y sal",
  accent: "river",
  keywords: [
    "mar",
    "playa",
    "barco",
    "fantasma",
    "caribe",
    "marea",
    "costero",
  ],

  /* Prosa editorial. Admite string o array de párrafos. */
  intro: [
    "Casi todos los relatos de esta ruta tratan de gente que vive del mar y de lo que el mar le cobra por ello. No es una ruta de sirenas: es una ruta de oficio.",
    "El primer tramo es el del deseo que no encuentra dónde asentarse. La marineritis sentimental describe el atractivo que los marineros ejercían sobre las jóvenes porteñas y el choque entre esa aspiración y las presiones sociales que la rodeaban. El mal del mar cuenta lo mismo desde el otro lado: un marinero que busca amor en cada puerto y queda atrapado en un ciclo de insatisfacción. Y la Madre de Playa —mitad mujer, mitad pez— canta a medianoche y se lleva a quien la escucha. Puestos juntos, los tres relatos dejan ver que la figura de la sirena es la forma narrativa de un problema muy concreto: una vida que se pasa yéndose.",
    "El segundo tramo es el del mar como frontera política. El castellano de San Juan defiende la fortaleza del ataque del pirata Hanspater en 1629, y lo hace con astucia más que con fuerza. En el sitio de Morillo, un engaño montado con pescadores permite la salida de las embarcaciones de los combatientes. El barco fantasma y el padre Mera aportan la otra cara, la de las apariciones que la costa fue acumulando: un reino sumergido, unas luces inmortales, un cura con mensajes apocalípticos.",
    "Y el tercer tramo cambia de escala. Sabino, pescador de La Boquilla, enfrenta al monstruo marino con el valor de quien sale a trabajar. Ngutapa recibe en sus rodillas a Yoí, Mowacha, Ípi y Aüküná, que crecerán para ordenar el mundo y formar a la gente Tikuna, en el único relato de la página que cuenta un origen. Y «El incesto» cierra con dos episodios de parentesco prohibido que quedan inscritos en el mar y en el cerro Katetamana, con una advertencia que conviene leer despacio: las responsabilidades entre los dos episodios no son equivalentes, y los límites familiares solo protegen cuando también se reconoce quién tenía poder y quién necesitaba amparo.",
  ],
  galleryIntro:
    "Diez relatos de costa donde el mar es trabajo, frontera y, al final, origen.",
  closing: [
    "Ocho de estos diez relatos vienen sin comunidad atribuida, en el registro literario con que se recogió buena parte de la tradición costeña. Los dos restantes —Ticuna y Wayúu— llegan con fuente declarada, y son los que le dan a la ruta su otra mitad.",
  ],

  /* Mito de portada. Debe estar en `myths`. */
  cover: "marineritis-sentimental",

  /* Censo de la ruta: única fuente de pertenencia. Orden = orden de lectura. */
  myths: [
    { slug: "marineritis-sentimental", label: "Marineritis sentimental", featured: true },
    { slug: "madre-de-playa", label: "Madre de playa", featured: true },
    { slug: "el-barco-fantasma", label: "El barco fantasma", featured: true },
    { slug: "el-padre-mera", label: "El padre Mera" },
    { slug: "creacion", label: "Creación" },
    { slug: "el-heroe", label: "El héroe" },
    { slug: "el-castellano-de-san-juan", label: "El castellano de San Juan" },
    { slug: "el-mal-del-mar", label: "El mal del mar" },
    { slug: "en-el-sitio-de-morillo", label: "En el sitio de Morillo" },
    { slug: "el-incesto", label: "El Incesto" },
  ],

  /* Etapas del recorrido. `myths` referencia slugs ya declarados arriba.
     Migradas desde los `highlights` originales: conservan título y resumen,
     y esperan prosa larga y reparto de mitos por parte de la curaduría. */
  momentos: [
    {
      slug: "cantos-y-sirenas",
      title: "Una vida que se pasa yéndose",
      summary: "El canto, el puerto y la espera: tres versiones de un mismo desasosiego.",
      prose: [
        "La marineritis sentimental nombra el atractivo de los marineros para las jóvenes porteñas y el conflicto entre esa aspiración y las presiones sociales que la cercaban. El mal del mar da la vuelta a la escena y muestra al marinero que busca amor en cada puerto, encerrado en un ciclo de insatisfacción que el relato trata como una compulsión y no como una hazaña. Entre los dos aparece la Madre de Playa, mitad mujer y mitad pez, cantando a medianoche para quien esté despierto. Leídos seguidos, los tres explican por qué la costa fabricó una figura que llama desde el agua.",
      ],
      myths: ["marineritis-sentimental", "el-mal-del-mar", "madre-de-playa"],
    },
    {
      slug: "guardianes-costeros",
      title: "El mar como frontera",
      summary: "Piratas, bloqueos y apariciones: la costa como línea que hay que defender o cruzar.",
      prose: [
        "En 1629 el pirata Hanspater ataca la fortaleza de San Juan y su defensor responde con astucia, que en este archivo suele valer más que la fuerza. En el sitio de Morillo, la salida de las embarcaciones se consigue con un engaño montado con pescadores: quienes conocen el agua son los que hacen posible la maniobra. Y de esa misma costa salen las apariciones que la fueron poblando —un barco fantasma ligado a un reino sumergido y a unas luces inmortales, y el padre Mera con sus cualidades sobrenaturales y sus mensajes apocalípticos—.",
      ],
      myths: [
        "el-castellano-de-san-juan",
        "en-el-sitio-de-morillo",
        "el-barco-fantasma",
        "el-padre-mera",
      ],
    },
    {
      slug: "tempestades",
      title: "Lo que el mar funda",
      summary: "Del pescador que sale a trabajar al origen de un pueblo entero.",
      prose: [
        "Sabino, pescador de La Boquilla, enfrenta al monstruo marino, y su valor no es el de un héroe de leyenda sino el de alguien que salió a trabajar. Después el registro cambia por completo: Ngutapa recibe en sus rodillas a Yoí, Mowacha, Ípi y Aüküná, que crecerán para ordenar el mundo y formar a la gente Tikuna —la formación del mundo, dice la ficha, comienza cuando el daño recibe respuesta—. Y el cierre wayúu deja dos episodios de parentesco prohibido inscritos en el mar y en el cerro Katetamana, con la salvedad de que las responsabilidades entre uno y otro no son equivalentes.",
      ],
      myths: ["el-heroe", "creacion", "el-incesto"],
    },
  ],
};

export default ruta;
