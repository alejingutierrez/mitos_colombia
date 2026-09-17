/**
 * Ruta · El primer fuego, la primera semilla
 *
 * Los mitos se declaran por SLUG. Contrato: content/rutas/model.mjs
 */
export const ruta = {
  slug: "el-primer-fuego-la-primera-semilla",
  title: "El primer fuego, la primera semilla",
  description:
    "Cinco pueblos sin contacto entre sí cierran su relato del fuego con la misma idea: un bien esencial se vuelve mundo habitable el día en que deja de ser privilegio.",
  detail: "Cómo el fuego, el agua y la semilla dejaron de tener un solo dueño.",
  tone: "Brasa, minga y chagra",
  accent: "ember",
  keywords: [
    "fuego",
    "candela",
    "semilla",
    "maíz",
    "yuca",
    "chagra",
    "minga",
  ],

  intro: [
    "Nada de lo que sostiene la vida llega gratis en este archivo. El fuego lo guarda una iguana, un sapo, una anciana o alguien que lo lleva escondido en el cuerpo. El agua está encerrada dentro de un árbol que hay que derribar entre todos. La yuca vive dentro de una persona antes de vivir en la chagra. Estos relatos no explican de dónde salió la comida: explican por qué el alimento obliga.",
    "El hallazgo que ordena la ruta no es temático sino textual. Cinco pueblos que no comparten familia lingüística cierran su mito del fuego casi con la misma frase. Los Wayúu: un bien que sostiene a todos deja de ser privilegio y se convierte en cuidado compartido. Los Nasa: el fuego sostiene a todos cuando deja de ser privilegio y se conserva responsablemente. Los Emberá Chamí: un conocimiento indispensable cambia a la comunidad cuando deja de pertenecer a una sola persona. Los Ette Ennaka: un bien conseguido con riesgo colectivo solo perdura cuando alguien lo cuida cada noche. Los Kogui: un bien esencial se vuelve común cuando alcanza todas las direcciones y permanece bajo cuidado. Eso no es una etiqueta que alguien puso encima: es un argumento que el archivo ya escribió cinco veces.",
    "El segundo movimiento repite la estructura a escala de paisaje. Un árbol enorme retiene toda el agua y hay que tumbarlo en minga. Los Barí cuentan que un anciano apoyó el oído en el tronco y escuchó un gorgoteo; cuando el árbol cae, el tronco se vuelve caimán, las astillas peces, y de allí salen el Catatumbo y el Río de Oro. Los Eperara Siapidara cuentan que el árbol se convirtió en río, quebradas, lagunas y mar. Los Ette Ennaka cuentan una ceiba que guardaba el maíz y se reparaba cada noche, hasta que la gente entendió que había que trabajar sin interrumpir. En el Amazonas, una ficha sin comunidad atribuida conserva la misma escena con un sapo que cada noche cierra las heridas del hacha.",
    "El tercer movimiento es el más incómodo y por eso está aquí. El alimento no siempre nace de un regalo: a veces sale de una muerte. Un padre vence al gigante yaedé y de sus fragmentos brotan los primeros ñames. De la sepultura de una anciana Wounaan salen raíces blancas y rojas. Ninguno de esos textos celebra el golpe. Y el cierre devuelve la carga al presente: quien recibe queda encargado. Niwalui responde por las semillas, Waleker deja el tejido a las mujeres wayúu, y una reserva pequeña de maíz guardada en una mochila de fique alcanza para volver a empezar después de años de sequía.",
  ],
  galleryIntro:
    "Veinte relatos sobre bienes que existían antes en manos de uno solo y que el trabajo colectivo volvió comunes.",
  closing: [
    "Vale anotar de dónde viene cada pieza. La mayoría de estos relatos llega con narrador identificado y fuente declarada; «Origen del agua» es una ficha del Amazonas sin comunidad atribuida, y entra aquí porque narra el mismo motivo del árbol que retiene el agua, no porque se le pueda asignar un pueblo.",
  ],

  cover: "el-fuego",

  myths: [
    { slug: "el-fuego", label: "Huhum, el sapo que trajo el fuego", featured: true },
    { slug: "el-gran-arbol-que-hizo-los-rios", label: "El gran árbol que hizo los ríos", featured: true },
    { slug: "el-gran-verano", label: "La semilla guardada durante el gran verano", featured: true },
    { slug: "el-origen-del-fuego", label: "El origen del fuego" },
    { slug: "la-candela", label: "La candela" },
    { slug: "himo-la-iguana-y-la-candela", label: "Hímo, la iguana y la candela" },
    { slug: "la-candela-gotze", label: "Gotzé y las cuatro flechas de fuego" },
    { slug: "tachi-akhore-y-la-palabra-de-mangle", label: "Pania Pak’uru: el árbol del agua" },
    { slug: "origen-del-agua", label: "Origen del agua" },
    { slug: "el-palo-de-agua", label: "El palo que abrió el agua" },
    { slug: "el-origen-de-la-mandioca-desana", label: "Baaribo y el origen de la mandioca" },
    { slug: "la-semilla-de-la-yuca-tucano", label: "Yepá Vejkeó y la semilla de la yuca" },
    { slug: "el-maiz", label: "La ceiba que guardaba el maíz" },
    { slug: "kaliwirnae-el-arbol-de-los-alimentos", label: "Kaliwirnae, el árbol de los alimentos" },
    { slug: "gainpaya-y-el-origen-del-chontaduro", label: "Gãïpayã y el origen del chontaduro" },
    { slug: "icades-name", label: "Los yaedé y el origen del ñame" },
    { slug: "madre-name", label: "Madre Ñame" },
    { slug: "el-maiz-koguis", label: "Niwalui y las semillas del maíz" },
    { slug: "waleker-el-origen-del-tejido", label: "Waleker, el origen del tejido" },
    { slug: "la-sal-del-weguer", label: "Ewandam, Dosat y la creación del wérregue" },
  ],

  momentos: [
    {
      slug: "el-fuego-estaba-en-manos-ajenas",
      title: "El fuego estaba en manos ajenas",
      summary:
        "Cinco versiones del mismo problema: alguien tiene la candela y no la suelta. Cambia el guardián, no el desenlace.",
      prose: [
        "Vale leerlos seguidos, porque el efecto está en la repetición. Entre los Wayúu, Siki guarda el fuego mientras los demás comen crudo, hasta que su secreto se descubre y la llama pasa a todas las casas. Entre los Ette Ennaka, el brujo Huhum se vuelve sapo, cruza el Gran Río, guarda una brasa en la boca y pide que la cuiden para que nunca se apague. Entre los Nasa, una anciana entrega tizones tan pequeños que se apagan antes de llegar, y el lugar donde por fin prendió se llamó Plan de la Candela. Entre los Chamí, Karagabí se hace pez para descubrir el escondite de la iguana. Y entre los Kogui, Gotzé no roba: lanza cuatro flechas hacia las cuatro direcciones.",
      ],
      myths: [
        "el-origen-del-fuego",
        "el-fuego",
        "la-candela",
        "himo-la-iguana-y-la-candela",
        "la-candela-gotze",
      ],
    },
    {
      slug: "tumbar-el-arbol-para-que-corra-el-agua",
      title: "Tumbar el árbol para que corra el agua",
      summary:
        "El agua estaba adentro de un tronco. Sacarla exige trabajo colectivo y, sobre todo, no interrumpirlo.",
      prose: [
        "El motivo viaja del Perijá al Baudó y al Amazonas sin perder su detalle técnico. En el relato Barí, el árbol cede después de varias lunas de trabajo y su caída forma las cuencas del Catatumbo y del Río de Oro. En el Pacífico, una minga derriba el árbol que guardaba toda el agua y de sus partes nacen ríos, lagunas y mar. En la versión amazónica, el hachazo del día se cierra de noche hasta que alguien entiende que hay que golpear por relevos. Y entre los Ette Ennaka hay una variante seca y perfecta: un padre prueba la fuerza de sus tres hijos, y cuando el menor arranca el palo clavado en la tierra, el agua sube por el hueco.",
      ],
      myths: [
        "el-gran-arbol-que-hizo-los-rios",
        "tachi-akhore-y-la-palabra-de-mangle",
        "origen-del-agua",
        "el-palo-de-agua",
      ],
    },
    {
      slug: "la-semilla-que-alguien-llevaba-adentro",
      title: "La semilla que alguien llevaba adentro",
      summary:
        "El cultivo no se descubre: se recibe de un cuerpo, de una copa alta o de una maloca bajo el agua.",
      prose: [
        "Recibir una semilla abre una relación, no una propiedad. Baaribo guardaba dentro de su cuerpo plantas que todavía no crecían en las chagras. Yepá Vejkeó lleva los tallos de yuca hasta una huerta preparada, y el traslado tiene protocolo: hay quien recibe y hay quien no debe interrumpir. La tusa del maíz Ette estaba en lo alto de una ceiba que se reparaba sola cada noche. Kaliwirnae reunía todos los alimentos y el mono nocturno lo mantenía oculto, hasta que el picure y la lapa siguieron el aroma de la piña. Y Gãïpayã, para sacar de la maloca subacuática la palma que daba cuatro chontaduros, tuvo que ocultarla dentro de su propio cuerpo.",
      ],
      myths: [
        "el-origen-de-la-mandioca-desana",
        "la-semilla-de-la-yuca-tucano",
        "el-maiz",
        "kaliwirnae-el-arbol-de-los-alimentos",
        "gainpaya-y-el-origen-del-chontaduro",
      ],
    },
    {
      slug: "lo-que-costo-el-don",
      title: "Lo que costó el don",
      summary:
        "Tres relatos que se niegan a ser bonitos: el alimento carga memoria de una pérdida.",
      prose: [
        "En el relato Katío, un padre vence con una macana al gigante yaedé y los fragmentos de su cuerpo dejan de ser cuerpo y se convierten en ñame; la propia lección dice que una comunidad puede transformar la fuente del miedo en alimento y continuidad, que es distinto de decir que el miedo estuvo bien. En el Chocó, una anciana trae ñames cuando todavía no existían y, tras una pérdida que el texto no adorna, de su sepultura brotan raíces blancas y rojas. Y en la Sierra, después de años de sequía, no queda semilla: la salva un puñado guardado en una mochila de fique, sembrado sobre un tronco todavía húmedo porque el suelo seguía caliente.",
      ],
      myths: ["icades-name", "madre-name", "el-gran-verano"],
    },
    {
      slug: "desde-ahora-hay-que-cuidarlo",
      title: "Desde ahora hay que cuidarlo",
      summary:
        "Quien recibe queda encargado. Aquí la lección deja de hablar del origen y empieza a hablar del presente.",
      prose: [
        "El último tramo cambia de tiempo verbal. Niwalui siembra las semillas que su madre trajo, las conserva y permanece como piedra blanca junto a ellas: conservar semillas, dice la ficha, es mantener una memoria viva capaz de alimentar a quienes todavía no han nacido. Waleker teje de noche con hilos de colores y, cuando pierde su forma humana porque Irunúu rompe una promesa, deja su saber a las mujeres wayúu, que lo sostienen como práctica paciente. Y Ewandam y Dosat, compitiendo por crear plantas y salar el mar, terminan mostrando que cada planta encuentra su valor en las manos que aprenden a trabajarla.",
      ],
      myths: ["el-maiz-koguis", "waleker-el-origen-del-tejido", "la-sal-del-weguer"],
    },
  ],
};

export default ruta;
