/**
 * Ruta · Montañas y páramos
 *
 * Los mitos se declaran por SLUG: es la identidad estable de un relato en el
 * archivo. `label` es sólo la manera en que la curaduría nombra el relato dentro
 * de la ruta; si alguien corrige el título del mito, la ruta no lo pierde.
 *
 * Contrato completo del objeto: content/rutas/model.mjs
 */
export const ruta = {
  slug: "montanas-paramos",
  title: "Montañas y páramos",
  description:
    "Alturas sagradas, lagunas de cima y guardianes del frío.",
  detail: "Cumbres sagradas, lagunas de altura y viento frío.",
  tone: "Alturas y viento",
  accent: "river",
  keywords: [
    "cerro",
    "paramo",
    "laguna",
    "tesoro",
    "encantado",
    "montana",
    "sierra",
  ],

  /* Prosa editorial. Admite string o array de párrafos. */
  intro: [
    "La altura, en este archivo, no es una vista: es un régimen. Las cumbres y las lagunas de páramo tienen protocolo de entrada, y buena parte de estos relatos consiste en describirlo o en contar qué pasó cuando alguien no lo cumplió.",
    "El texto de Panán lo dice de la manera más práctica. La laguna de María Panana es una laguna fría de páramo donde se palabrea, se armonizan los bastones y se entra con respeto para no quedar ni espantarse. Ahí está todo: un uso, una práctica de gobierno propio —los bastones de mando— y un riesgo concreto y nombrado. Los lugares que armonizan, dice la ficha, también establecen límites para quien los visita.",
    "El segundo tramo trata de la disciplina que la altura exige a quien la habita. Namaku, hijo de Magri, vive entre prescripciones y parentescos con el riesgo permanente de transformarse en jaguar si rompe su ayuno; la ficha aclara con cuidado que no se trata de una regla general para toda persona Kogui sino de la tarea de un personaje. Fu tenía que cerrar el boquerón de Tausa y el sonido de una piedra lo distrajo: del tropiezo salieron una chispa y, sin buscarlo, el primer tejo. Entre los dos hay una idea compartida y poco solemne: en la altura, lo que se hace mal también ordena.",
    "El tercer tramo es el de la altura como lugar donde algo se guarda. Un niño entra al Cerro Plateado de Musinga a buscar a su hermana e interrumpe una fiesta con una frase mariana; interrumpir una fuerza temida, apunta la ficha, puede revelar su lugar sin garantizar el rescate buscado. Las lagunas encantadas entrelazan creencias indígenas y coloniales; el cerro encantado nace en la Conquista, en Piedecuesta; el tesoro de Buzaga sobrevive en versiones que difieren tanto en detalle como en tono. Y tres relatos cierran la página por el lado del parentesco: una joven que visita a un desconocido y desaparece con su hijo entre las lagunas de Calderas y Santa Rosa, la Chama que cambia de apariencia y pierde a los suyos, y dos episodios wayúu de parentesco prohibido cuyas responsabilidades, advierte el archivo, no son equivalentes.",
  ],
  galleryIntro:
    "Diez relatos de altura donde entrar tiene condiciones y quedarse tiene consecuencias.",
  closing: [
    "«Namaku y el hombre jaguar» y «El incesto» llegan con salvaguardas escritas dentro de la propia ficha: la primera aclara que la prescripción es la de un personaje y no una regla para todo un pueblo; la segunda, que las responsabilidades entre sus dos episodios no son equivalentes. Conviene leerlas con esas advertencias puestas.",
  ],

  /* Mito de portada. Debe estar en `myths`. */
  cover: "lagunas-encantadas",

  /* Censo de la ruta: única fuente de pertenencia. Orden = orden de lectura. */
  myths: [
    { slug: "lagunas-encantadas", label: "Lagunas encantadas", featured: true },
    { slug: "la-laguna-de-maria-panana", label: "La laguna de María Panana.", featured: true },
    { slug: "tradicion-del-cerro", label: "Tradición del cerro", featured: true },
    { slug: "fu-el-dios-de-la-torpeza", label: "Fu, el dios de la torpeza" },
    { slug: "namaku", label: "Namaku" },
    { slug: "el-tesoro-de-buzaga", label: "El tesoro de Buzaga" },
    { slug: "el-cerro-encantado", label: "El cerro encantado" },
    { slug: "la-visita-del-joven-desconocido", label: "La visita del joven desconocido" },
    { slug: "el-incesto", label: "El Incesto" },
    { slug: "la-chama", label: "La chama" },
  ],

  /* Etapas del recorrido. `myths` referencia slugs ya declarados arriba.
     Migradas desde los `highlights` originales: conservan título y resumen,
     y esperan prosa larga y reparto de mitos por parte de la curaduría. */
  momentos: [
    {
      slug: "lagunas-de-altura",
      title: "Cómo se entra",
      summary: "La laguna de páramo no se visita: se palabrea, se saluda y se sale a tiempo.",
      prose: [
        "La laguna de María Panana es el mejor manual de esta ruta: laguna fría donde se palabrea, se armonizan los bastones de mando y se entra con respeto para no quedar ni espantarse. Es una práctica de gobierno propio y a la vez una advertencia con nombre —quedar, espantarse— que la ficha no traduce a otro vocabulario. Al lado, las lagunas encantadas muestran lo que pasa cuando esa gramática se mezcla con la colonial: creencias indígenas y europeas entrelazadas en un mismo cuerpo de agua, difíciles de separar y por eso mismo interesantes de leer juntas.",
      ],
      myths: ["la-laguna-de-maria-panana", "lagunas-encantadas"],
    },
    {
      slug: "guardianes-de-la-sierra",
      title: "La disciplina de la altura",
      summary: "Vivir arriba exige prescripciones; romperlas transforma, y a veces el tropiezo también ordena.",
      prose: [
        "Namaku, hijo de Magri, vive entre prescripciones y parentescos, y su ayuno no es una costumbre general sino su tarea: si come fuera de lo permitido corre el riesgo de volverse jaguar. La ficha marca expresamente que eso no describe una regla para toda persona Kogui, y conviene conservar la distinción. Fu, en cambio, aporta el reverso ligero: tenía que cerrar el boquerón de Tausa, el sonido de una piedra lo distrajo y del tropiezo salió una chispa y, sin buscarlo, el primer tejo. Del paso en falso nace una chispa, dice la lección, y el mundo se ordena de nuevo en lo que no se planeó.",
      ],
      myths: ["namaku", "fu-el-dios-de-la-torpeza"],
    },
    {
      slug: "viento-frio",
      title: "Lo que el cerro guarda",
      summary: "Tesoros, fiestas interrumpidas y encantamientos: la altura como depósito.",
      prose: [
        "Un niño entra al Cerro Plateado de Musinga a buscar a su hermana e interrumpe una fiesta con una frase mariana; el resultado es exacto y austero: interrumpir una fuerza temida puede revelar su lugar sin garantizar el rescate buscado. El cerro encantado nace con la Conquista en Piedecuesta, y el tesoro de Buzaga llega en versiones que difieren tanto en el detalle como en el tono, lo que ya dice algo sobre lo que la promesa de oro le hace a la memoria de un lugar.",
      ],
      myths: ["tradicion-del-cerro", "el-cerro-encantado", "el-tesoro-de-buzaga"],
    },
    {
      slug: "lo-que-la-altura-separa",
      title: "Lo que la altura separa",
      summary: "Tres relatos donde la cumbre y la laguna guardan un vínculo que se rompió.",
      prose: [
        "Una joven de Calderas visita a un desconocido, tiene un hijo con marcas que nadie debía tocar y termina desapareciendo con él entre las lagunas de Calderas y Santa Rosa. La Chama cambia de apariencia, protege a un hombre de su propia familia y después enfrenta la pérdida de él y de su hijo; reconocer su ambivalencia, dice la ficha, impide reducirla a monstruo, remedio o propiedad disponible. Y el relato wayúu del incesto deja dos episodios de parentesco prohibido inscritos en el mar y en el cerro Katetamana, con la salvedad expresa de que las responsabilidades entre uno y otro no son equivalentes.",
      ],
      myths: ["la-visita-del-joven-desconocido", "la-chama", "el-incesto"],
    },
  ],
};

export default ruta;
