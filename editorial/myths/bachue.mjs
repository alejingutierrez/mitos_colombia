const keySources = [
  {
    title:
      "Fray Pedro Simón, Noticias historiales, vol. II, Cuarta noticia, cap. II (ed. 1882; original de 1627)",
    summary:
      "Testimonio colonial más antiguo usado para fijar el núcleo del relato: Iguaque, la mujer llamada Bachué o Farachogua, el niño sin nombre, la descendencia, la exhortación final y el retorno como serpientes.",
    url: "https://archive.org/details/tierrafirmeindias02simbrich/page/n299/mode/2up",
  },
  {
    title:
      "Medicina Tradicional y Partería de la Comunidad Muisca de Bosa",
    summary:
      "Memoria viva construida con sabedores, parteras y médicos tradicionales. Vincula a madre Bachué con la ley de origen y con el cuidado del cuerpo, la comunidad, el territorio y los elementos.",
    url: "https://www.saludcapital.gov.co/Documents/com_etnias/Med_Trad_Com_Muisca_Bosa.pdf",
  },
  {
    title:
      "Sánchez, Martínez Celis y Vinasco Téllez, Cosmological Relations in the Muisca Myth of Bachue (2024)",
    summary:
      "Estudio académico reciente que propone relaciones entre el relato, el paisaje, la Vía Láctea, el Sol, las Pléyades y vasijas muiscas con serpientes. Se presenta como hipótesis interpretativa, no como consenso cerrado.",
    url: "https://doi.org/10.1558/jsa.29614",
  },
  {
    title:
      "Juan F. Cobo Betancourt, The Coming of the Kingdom, cap. 1 (Cambridge, 2024)",
    summary:
      "Revisión histórica de las fuentes coloniales y de sus categorías. Sustenta una lectura cauta de la supuesta religión muisca homogénea y describe grupos de parentesco matrilineal con liderazgos generalmente masculinos.",
    url: "https://doi.org/10.1017/9781009314046.003",
  },
  {
    title:
      "Fray Alonso de Zamora, Historia de la provincia de San Antonino del Nuevo Reino de Granada (1701)",
    summary:
      "Segunda crónica colonial contrastada para el núcleo narrativo. Nombra a la mujer Bacuche, conserva al niño de tres años, los partos múltiples, la despedida ante la descendencia y el ingreso a la laguna como serpientes.",
    url: "https://www.cervantesvirtual.com/obra/historia-de-la-provincia-de-san-antonino-del-nuevo-reino-de-granada-tomo-i-1072975/",
  },
];

const sources = [
  {
    title: "Santuario de Fauna y Flora Iguaque — Parques Nacionales Naturales",
    summary:
      "Contexto territorial actual de la laguna sagrada: ubicación, coordenadas oficiales, ecosistemas de páramo y bosque altoandino, función hídrica y memoria cultural asociada a Bachué.",
    url: "https://www.parquesnacionales.gov.co/nuestros-parques/santuario-de-fauna-y-flora-iguaque/",
  },
  {
    title:
      "Sandra Turbay Ceballos, Las familias indígenas de Santafé según los testamentos de los siglos XVI y XVII (2012)",
    summary:
      "Evidencia histórica de rasgos matrilineales en herencias y sucesión de cacicazgos. Ayuda a no confundir matrilinealidad con matriarcado.",
    url: "https://revistas.unal.edu.co/index.php/achsc/article/view/34162",
  },
  {
    title: "Pueblo Muisca — Instituto Colombiano de Antropología e Historia",
    summary:
      "Síntesis institucional sobre territorio, actividades históricas y presencia contemporánea del pueblo muisca a través de sus cabildos y procesos de recuperación cultural y lingüística.",
    url: "https://colecciones.icanh.gov.co/articulos/pueblos/MUISCA.php",
  },
  {
    title: "Lago Titicaca — Portal del Inca Garcilaso, Biblioteca Virtual Miguel de Cervantes",
    summary:
      "Referencia para comparar, sin afirmar parentesco directo, el surgimiento lacustre de Manco Cápac y Mama Ocllo y su papel como pareja fundadora.",
    url: "https://www.cervantesvirtual.com/portales/inca_garcilaso_de_la_vega/imagenes_motivos/imagen/imagenes_motivos_01_inca_garcilaso_lago/",
  },
  {
    title: "Ovidio, Metamorfosis I: Deucalión y Pirra — University of Virginia",
    summary:
      "Fuente clásica para contrastar otra pareja que repuebla el mundo. La comparación destaca diferencias de contexto: un nuevo comienzo después del diluvio, no una aparición primordial desde una laguna.",
    url: "https://ovid.lib.virginia.edu/book1.html",
  },
  {
    title: "Stories of the Creation of Japan — Library of Congress",
    summary:
      "Referencia institucional sobre Izanagi e Izanami como pareja creadora de las islas y deidades de Japón; sirve para comparar la función de las parejas primordiales sin borrar las diferencias culturales.",
    url: "https://www.loc.gov/exhibits/world/accounts.html#obj13",
  },
];

const mito = `Antes de que hubiera caminos en el altiplano, la laguna de Iguaque ya tenía orillas. Los frailejones recogían gotas en sus hojas, los venados doblaban la hierba al pasar y el viento bajaba frío entre las piedras. No se oían todavía voces humanas.

Al amanecer, la superficie de la laguna se movió desde el centro. Primero apareció una mano. Luego, una mujer de cabello oscuro salió del agua con un niño sujeto a sus dedos. Él tendría unos tres años y apoyó los pies desnudos en la orilla como si acabara de aprender el peso de la tierra.

La mujer se llamaba Bachué. También la llamaban Farachogua, la Mujer Buena.

Los dos descendieron por la montaña. Caminaban despacio: el niño porque sus piernas eran cortas; Bachué porque miraba con atención el lugar al que habían llegado. En la parte menos fría de Iguaque levantaron una casa. Encendieron un fuego. El humo que salió del techo fue la primera señal humana sobre aquellos montes.

Pasaron muchas lluvias. El niño creció, su voz se hizo grave y sus pasos alcanzaron los de Bachué. Cuando fue adulto, unieron sus vidas. La casa, que durante años había guardado solo dos respiraciones, empezó a llenarse.

Nacieron cuatro hijos en un parto; en otro, seis. Dormían donde hubiera un rincón tibio. Gateaban bajo las mantas, se perseguían alrededor del fuego y aprendían a reconocer el sonido del agua contra el barro. Después llegaron más.

Cuando ya no cupieron en una sola casa, Bachué y su compañero emprendieron camino con ellos. Cruzaron laderas, valles y sabanas. En cada lugar quedaba una familia y se encendía un fogón. Los hijos tuvieron hijos; los senderos se encontraron unos con otros; la tierra comenzó a llenarse de nombres.

Bachué enseñó a su descendencia que vivir juntos requería algo más difícil que construir casas. Escuchó disputas, puso límites y dejó preceptos para conservar la paz. Les recordó que una familia no prospera destruyendo la casa vecina y que nadie puede guardar el agua solo para sí.

Los años también alcanzaron a los primeros padres. El cabello de Bachué perdió su color y su compañero necesitó un bastón para subir las pendientes. Cuando comprendieron que su trabajo estaba cumplido, llamaron a sus hijos, a los hijos de sus hijos y a quienes habían nacido después.

La multitud los siguió hasta Iguaque. El camino de regreso fue más lento que el primero. Al llegar, Bachué se detuvo frente a la laguna. Pidió a todos que conservaran la paz, respetaran las leyes recibidas y cuidaran aquello que hacía posible la vida en común.

Luego se despidió.

Lloraron quienes iban a quedarse y lloraron los dos ancianos. Bachué tomó la mano de su compañero y entraron juntos en el agua. El cambio ocurrió en silencio: sus cuerpos se alargaron, sus brazos se recogieron y sobre la superficie aparecieron dos grandes serpientes. Nadaron una vez alrededor de la laguna y se hundieron.

El agua se cerró detrás de ellos. Durante un largo rato, nadie se movió de la orilla.

Desde entonces se dice que Bachué puede aparecer donde su gente necesita recordarla. A veces no se ve una mujer ni una serpiente: solo una línea que cruza el agua cuando no sopla el viento. Quienes la reconocen miran hacia Iguaque y saben que allí no termina el camino. Allí comenzó la primera casa.`;

const historia = `Las dos crónicas coloniales contrastadas son las Noticias historiales de Fray Pedro Simón, publicadas en 1627, y la Historia de la provincia de San Antonino de Alonso de Zamora, publicada en 1701. Coinciden en la secuencia esencial, pero fueron escritas mucho después de la invasión española y desde proyectos evangelizadores. Conservan nombres, lugares y acciones; no registran una voz muisca de manera neutral. Son fuentes históricas necesarias, no autoridades únicas.

La investigación reciente también corrige dos fórmulas comunes. Los pueblos que hoy agrupamos bajo el nombre muisca no formaban un imperio uniforme. Eran comunidades diversas, organizadas en grupos de parentesco y unidades políticas compuestas. Había transmisión matrilineal de pertenencias y cargos —a menudo de un hombre al hijo de su hermana—, pero eso no prueba un “matriarcado”. La centralidad de Bachué puede dialogar con el linaje materno sin explicar por sí sola toda la sociedad.

Iguaque aporta otra clave. La laguna está a 3.599 metros, en un territorio de páramo y bosque altoandino que regula y distribuye agua hacia poblaciones vecinas. El paisaje hace visible una necesidad material y social: la vida del altiplano depende del agua. El mito convierte esa dependencia en parentesco. La comunidad no solo bebe de la laguna; dice que viene de ella.

Desde una lectura antropológica, Bachué responde varias preguntas: de dónde venimos, qué debemos a los antepasados y cómo convivir en un territorio frágil. El regreso como serpientes enlaza nacimiento, muerte y renovación. Para la Comunidad Muisca de Bosa, Bachué sigue vinculada a la ley de origen y al cuidado del ser, la familia, la comunidad y el territorio. Esa voz contemporánea impide tratar el relato como una reliquia sin descendientes.`;

const versiones = `En el núcleo narrado por Fray Pedro Simón, Bachué también recibe el nombre Farachogua, “mujer buena”. Sale de Iguaque con un niño de unos tres años; el pasaje no le asigna nombre. La pareja puebla la tierra, vuelve anciana a la laguna, exhorta a la paz y se transforma en dos grandes serpientes.

Alonso de Zamora la llama Bacuche, con el mismo sentido de “mujer buena”. Escribe que ella sacó al niño de las aguas, lo crió y tuvo cuatro o seis hijos en cada parto. Al final, los dos reúnen a su descendencia, se despiden entre lágrimas y entran como serpientes en la laguna. Tampoco da nombre al compañero.

Relatos posteriores amplían su papel: Bachué enseña a tejer, levantar casas, trabajar el barro, cultivar y transformar metales. Algunas versiones llaman al compañero Iguaque o Sugunsua. La Comunidad Muisca de Bosa la integra a una ley de origen centrada en el cuidado. Conservamos estas variantes como capas identificadas; no fingimos que todas aparecen en las dos crónicas.

“Labaque” aparece en una síntesis del siglo XX entre los nombres atribuidos a la mujer, no como nombre del niño o del compañero. Los pasajes coloniales revisados directamente usan Bachué, Farachogua o Bacuche. Por eso retiramos “Labaque” del papel que ocupaba en la versión anterior de esta página.

Una investigación arqueoastronómica de 2024 relaciona el mito con Iguaque, El Infiernito, la Vía Láctea, el Sol, las Pléyades y vasijas muiscas con serpientes. Es una hipótesis contemporánea, no una “versión secreta” ni un hecho demostrado.`;

const similitudes = `Bachué pertenece a una familia amplia de relatos sobre parejas fundadoras. Comparar no significa afirmar que una cultura copió a otra.

En la tradición inca narrada por el Inca Garcilaso, Manco Cápac y Mama Ocllo salen del lago Titicaca y fundan un orden social. También aquí una pareja aparece desde agua sagrada. Pero Bachué explica la descendencia del pueblo y regresa a la laguna; la pareja inca funda una ciudad y una dinastía entre poblaciones existentes.

En las Metamorfosis de Ovidio, Deucalión y Pirra restauran la humanidad después de un diluvio: las piedras que arrojan se vuelven personas. La pareja garantiza la continuidad humana, pero el relato griego habla de supervivencia después de un castigo; Bachué habla de un comienzo.

Izanagi e Izanami, en la tradición japonesa del Kojiki, forman las islas y engendran deidades. Comparten la imagen de una pareja primordial que une genealogía y geografía. Su historia organiza el archipiélago y el linaje divino japonés; Iguaque ancla el parentesco muisca en una laguna andina concreta.

Las comparaciones muestran una pregunta humana recurrente: imaginar el origen como relación y no como acto solitario. Lo propio de Bachué es la forma de esa relación: agua de páramo, descendencia común, consejo de convivencia y retorno serpentino.`;

const leccion =
  "Venimos de un mundo que nos sostiene: pertenecer exige cuidar el agua, la comunidad y la continuidad de la vida.";

const content = [
  ["Mito", mito],
  ["Historia", historia],
  ["Versiones", versiones],
  ["Lección", leccion],
  ["Similitudes", similitudes],
]
  .map(([heading, body]) => `${heading}\n${body}`)
  .join("\n\n");

const editorialMyth = {
  slug: "bachue",
  title: "Bachué",
  category_path: "Andina > Varios > Muiscas",
  tags: [
    "Bachué",
    "agua",
    "cosmogonía",
    "creación",
    "laguna",
    "muiscas",
    "origen del hombre",
    "serpiente",
    "transformación",
  ],
  latitude: 5.68728,
  longitude: -73.43681,
  mito,
  historia,
  versiones,
  leccion,
  similitudes,
  content,
  excerpt:
    "Una mujer y un niño salen de la laguna de Iguaque. Su descendencia llena el altiplano y ambos regresan al agua transformados en serpientes.",
  seo_title: "Mito de Bachué: origen en Iguaque",
  seo_description:
    "Lee el mito de Bachué, madre del pueblo muisca: su aparición en la laguna de Iguaque, su descendencia y el regreso al agua como serpiente.",
  seo: {
    meta_title: "Mito de Bachué: origen en Iguaque",
    meta_description:
      "Lee el mito de Bachué, madre del pueblo muisca: su aparición en la laguna de Iguaque, su descendencia y el regreso al agua como serpiente.",
    meta_keywords:
      "mito de Bachué, leyenda de Bachué, Bachué, laguna de Iguaque, origen muisca, mitología muisca, pueblo muisca",
    og_title: "Bachué: el relato del origen muisca",
    og_description:
      "Bachué sale de la laguna de Iguaque, puebla el mundo muisca y regresa al agua como serpiente. Lee el relato y consulta sus fuentes.",
    twitter_title: "Mito de Bachué: origen en Iguaque",
    twitter_description:
      "Una narración literaria del origen muisca, acompañada de contexto, versiones históricas y once fuentes consultables.",
    canonical_path: "/mitos/bachue",
  },
  methodologySeo: {
    meta_title: "Metodología editorial en prueba",
    meta_description:
      "Conoce el método piloto para investigar, contrastar y reescribir mitos colombianos con fuentes visibles, contexto cultural y una prosa más clara.",
    meta_keywords:
      "metodología editorial, investigación de mitos, fuentes, antropología, reescritura, Bachué",
    og_title: "Investigar antes de volver a contar",
    og_description:
      "Un método editorial en prueba para separar fuentes, versiones e interpretaciones y narrar los mitos de Colombia con claridad y evidencia.",
    twitter_title: "Investigar antes de volver a contar",
    twitter_description:
      "Así funciona el piloto editorial de Mitos de Colombia: investigación, matriz de evidencia, reescritura y verificación pública.",
    canonical_path: "/metodologia",
  },
  focus_keyword: "mito de Bachué",
  focus_keywords: [
    "mito de Bachué",
    "Bachué",
    "laguna de Iguaque",
    "leyenda de Bachué",
    "origen del pueblo muisca",
    "mitología muisca",
    "pueblo muisca",
    "madre Bachué",
    "Boyacá",
    "serpientes de Iguaque",
  ],
  image_prompt: `Fotografía editorial horizontal 16:9 de una maqueta artesanal hecha a mano con papel cortado, fibras y cartón, no una ilustración digital. Laguna de Iguaque entre páramo frío, montañas y neblina; Bachué, mujer adulta, emerge del agua y lleva de la mano a un niño pequeño. Vestuario sobrio de fibras tejidas, sin coronas ni fantasía europea. Dos formas de serpiente apenas insinuadas bajo el agua anticipan el retorno final. Composición frontal de un solo tableau, relieve bajo, bordes de papel visibles, pequeñas imperfecciones humanas, luz de estudio suave, verde páramo, azul profundo y tierra húmeda. Tratamiento respetuoso del pueblo muisca. Sin texto, sin logos, sin oro ornamental inventado, sin símbolos aztecas o mayas, sin aspecto CGI ni 3D renderizado.`,
  image_prompt_horizontal: `Maqueta horizontal 16:9 de papel artesanal fotografiada de frente: la laguna de Iguaque, páramo con neblina, Bachué emergiendo del agua y tomando de la mano a un niño. Dos serpientes acuáticas muy sutiles bajo la superficie conectan origen y retorno. Paleta verde páramo, azul profundo y tierra. Relieve bajo, fibras visibles, luz natural suave. Sin texto, coronas, iconografía mesoamericana ni apariencia CGI.`,
  image_prompt_vertical: `Maqueta vertical 2:3 de papel artesanal fotografiada de frente: Bachué adulta sale de la laguna de Iguaque con un niño de la mano; el agua ocupa el primer plano y el páramo nublado se eleva detrás. Una curva serpentina discreta aparece bajo la superficie. Texturas manuales, sobriedad, respeto cultural, sin texto, sin joyería inventada y sin aspecto de render digital.`,
  keySources,
  sources,
  researchNotes: `ESTADO: segunda revisión del piloto editorial, con relato literario separado de la discusión documental y con revisión histórica, académica, territorial, comparativa y de memoria comunitaria.

NÚCLEO DE ALTA CONFIANZA: Iguaque; Bachué/Farachogua o Bacuche; niño de unos tres años sin nombre en Simón ni Zamora; unión al llegar él a la adultez; descendencia múltiple; recorrido para poblar; regreso en la vejez; exhortación a paz y leyes; transformación de ambos en serpientes. Este núcleo coincide en Pedro Simón (1627) y Alonso de Zamora (1701).

CAPAS QUE NO SE FUSIONAN: la enseñanza detallada de tejido, bohíos, barro, agricultura y metales aparece en reelaboraciones posteriores y memoria comunitaria, no en el núcleo citado de Simón o Zamora. Los nombres Iguaque y Sugunsua pertenecen a versiones posteriores o contemporáneas. “Labaque” aparece en una síntesis del siglo XX como posible nombre de la mujer, pero no respalda el uso anterior como nombre del compañero.

CAUTELAS: Pedro Simón escribe desde una mirada colonial y evangelizadora. No describir al conjunto muisca como un imperio homogéneo. No convertir matrilinealidad en matriarcado. No presentar la propuesta arqueoastronómica de 2024 como hecho establecido.

LECTURA EDITORIAL: el agua funciona como origen, parentesco, sustento territorial y lugar de retorno. La serpiente permite hablar de continuidad y transformación. Esta es una interpretación declarada, no una traducción literal de una doctrina muisca única.

CRITERIO LITERARIO: el campo mito contiene solo la historia y no menciona fuentes, versiones, hipótesis ni historia de transmisión. Usa escenas concretas, verbos claros, detalles sensoriales propios del páramo y espacio para que el lector complete la emoción. La fantasía se concentra en la salida del agua, la fecundidad extraordinaria y la transformación final; la realidad que la sostiene es Iguaque, su clima, el descenso, la casa, los fogones y la convivencia.

DECISIONES DE DATOS: se conserva la categoría existente Andina > Varios > Muiscas porque no existe una categoría Boyacá > Muiscas y no se crearán taxonomías nuevas. Se reemplaza la etiqueta fertilidad por etiquetas existentes más precisas: cosmogonía, laguna, muiscas, serpiente y transformación. La coordenada se corrige al punto oficial publicado por Parques Nacionales para la laguna: 5°41'14.2"N, 73°26'12.5"W, expresado como 5.68728, -73.43681. La imagen horizontal ya existe y se conserva; los prompts quedan preparados para una futura regeneración más sobria.`,
};

export default editorialMyth;
