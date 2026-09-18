function source({ title, author, year, type, url, summary, limitation }) {
  return {
    title,
    author,
    ...(year ? { year } : {}),
    type,
    url,
    summary,
    limitation,
  };
}

export const huitotoSources = {
  urbinaBook: source({
    title:
      "Las palabras del origen: breve compendio de la mitología de los uitotos",
    author:
      "Fernando Urbina Rangel; relatos de Jitoma Naïre, Félix Kuegajima, José García, Jitoma Zafiama, Moisés Tejada, Julio Ribera, Pablo Bigïdïma, Eudocio Becerra, Juvenal Flaviano Castilla y Filomena Tejada",
    year: 2010,
    type: "compendio narrativo con relatores, lugares y fechas identificados",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll8/id/4",
    summary:
      "Publica dieciséis relatos con introitos, créditos de narración o traducción y notas comparativas. Es la fuente directa de Nofïdeño, Uuikï, los ciclos de Jitoma, Dïïjoma, Nofïzazima, Buinaima, Yiida Buinama, Yarokamena, Juma, Kanifaido, Kugï y Nokuerai, Guyataiba y Konago.",
    limitation:
      "Es una selección y edición de Fernando Urbina, no el canon total Murui-Muina. La revisión conserva el nombre de cada relator y no convierte los comentarios del editor en voz comunitaria.",
  }),
  jirayaumaCycle: source({
    title: "La Mujer Jaguar y el Cerbatanero",
    author: "José Octavio García y Fernando Urbina Rangel",
    year: 2016,
    type: "adaptación ilustrada de un ciclo narrado en 1971",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2730/",
    summary:
      "Identifica a Jirayauma como el Cerbatanero del ciclo de la Mujer-Jaguar y enumera sus ocho episodios, incluidos Cangrejo, chontaduro, Caimán y el encuentro con Dïïjoma.",
    limitation:
      "La publicación es una adaptación didáctica de episodios del ciclo; la ficha no rellena sus transiciones con escenas nuevas.",
  }),
  hugoNino: source({
    title: "Primitivos relatos contados otra vez: héroes y mitos amazónicos",
    author: "Hugo Niño",
    year: 1979,
    type: "reelaboración literaria (tercera edición, Carlos Valencia Editores)",
    url: "https://openlibrary.org/books/OL38211858M/Primitivos_relatos_contados_otra_vez",
    summary:
      "Su índice documenta los capítulos «Jutíñamúi modela el universo», «Unámarai, padre de Yajé» y «En el principio fueron los Yoria a la sombra de la ortiga». El propio Niño explicó después dónde oyó cada uno y llamó reescritura a su trabajo.",
    limitation:
      "Hugo Niño reelabora relatos y no es un narrador indígena; declara que quiso dialogar con los textos «a su riesgo». El registro citado es la tercera edición de 1979; el autor sitúa la primera en 1976 en Casa de las Américas, y las fichas del sitio decían 1977, que no sostiene ninguna de las dos. La vista abierta confirma edición y paginación, no el texto, que exige préstamo.",
  }),
  rabbitCatalog: source({
    title: "Mitos y leyendas colombianos",
    author: "Educar Editores; catálogo del Ministerio de Educación Nacional",
    year: 2009,
    type: "registro de antología escolar",
    url: "https://mineducacion.gov.co/1780/articles-137611_recurso_10.pdf",
    summary:
      "Registra Peleas y aventuras entre el sobrino conejo y el tío tigre dentro de una sección conjunta de Llanos Orientales y Amazonía.",
    limitation:
      "No atribuye el cuento específicamente al pueblo Huitoto. La ficha permanece publicada, pero declara esa incertidumbre.",
  }),
  preussOne: source({
    title: "Religión y mitología de los uitotos, primera parte",
    author:
      "Konrad Theodor Preuss; traducción de Ricardo Castañeda Nieto con asesoría de Gabriele Petersen de Piñeros",
    year: 1994,
    type: "edición académica de investigación y textos recopilados en 1914",
    url: "https://repositorio.unal.edu.co/handle/unal/3113",
    summary:
      "Aporta contexto histórico sobre religión, fiestas, palabra, territorio y organización narrativa uitoto.",
    limitation:
      "La recopilación se hizo a comienzos del siglo XX bajo condiciones históricas específicas y no representa todas las comunidades ni dialectos actuales.",
  }),
  preussTwo: source({
    title: "Religión y mitología de los uitotos, segunda parte",
    author:
      "Konrad Theodor Preuss; transcripción y traducción revisadas por Eudocio Becerra y Gabriele Petersen de Piñeros",
    year: 1994,
    type: "corpus bilingüe de mitos, cantos y diccionario",
    url: "https://repositorio.unal.edu.co/handle/unal/3114",
    summary:
      "Ofrece textos en lengua uitoto con traducción y un repertorio léxico para comparar nombres sin tratar grafías distintas como personajes nuevos.",
    limitation:
      "Es un corpus de la variedad mika y no prueba por sí solo los episodios recogidos después en otras zonas y dialectos.",
  }),
  onic: source({
    title: "Muina Murui",
    author: "Organización Nacional Indígena de Colombia",
    type: "perfil comunitario, lingüístico e histórico",
    url: "https://www.onic.org.co/muinane/",
    summary:
      "Sitúa las variedades mika, minika, búe y nipode, la dispersión causada por la Casa Arana y la recuperación territorial y cultural.",
    limitation:
      "El encabezado y algunas denominaciones condensan identidades relacionadas. Se usa para contexto, no para homologar todas las versiones.",
  }),
  icanhMurui: source({
    title: "Murui (uitoto)",
    author: "Instituto Colombiano de Antropología e Historia; curaduría de Margarita Reyes",
    type: "ficha institucional de pueblo, con colección de referencia",
    url: "https://colecciones.icanh.gov.co/articulos/pueblos/MURUI.php",
    summary:
      "Ficha institucional vigente sobre el pueblo Murui: nombre propio, territorio en los ríos Caraparaná, Igaraparaná y Putumayo, la esclavización durante el auge cauchero y la situación actual.",
    limitation:
      "Es una síntesis de museo, no un registro narrativo: no publica versiones de los relatos ni nombra a quienes los narran.",
  }),
  aggaOrigen2019: source({
    title: "Murui - Naie Jiyakɨno - El lugar de origen",
    author:
      "Lucio Agga Calderón «Kaziya Buinaima», Katarzyna I. Wojtylak y Juan Álvaro Echeverri",
    year: 2019,
    type: "texto murui con traducción, narrado por un sabedor y editado con lingüistas",
    url: "https://revistas.ufrj.br/index.php/rl/article/view/25563",
    summary:
      "Relato del lugar de origen narrado por el sabedor Lucio Agga Calderón y publicado en murui con traducción. Es la fuente que impide dar por cerrada la lectura de Juziñamui como puro antagonista: aquí el narrador dice que el Padre Juziñamui creó esta tierra.",
    limitation:
      "Es un testimonio de 2016, no un comentario al corpus de 1914 ni a la edición de Urbina, y recoge la voz de un solo sabedor: registra un uso vigente del nombre, no zanja la discusión sobre la figura.",
  }),
  mythEthics: source({
    title:
      "Mito y ética: una lectura del pensamiento mítico de los Uitoto y Muinane",
    author: "Franklin Giovanni Púa Mora",
    year: 2010,
    type: "artículo académico de interpretación (Franciscanum LII, núm. 154)",
    url: "https://dialnet.unirioja.es/servlet/articulo?codigo=3703226",
    summary:
      "Explica cómo relatos amazónicos relacionan perspectiva, dueños de animales, cuidado y consecuencias sin reducirlos a moralejas universales.",
    limitation:
      "Es interpretación académica posterior. No sustituye la narración ni autoriza a presentar una lectura como significado único.",
  }),

  // ——— Búsqueda profunda 2026-09-17 ———
  rangelmujer1999: source({
    title: "La mujer en el mito",
    author: "Fernando Urbina Rangel",
    year: 1999,
    type: "articulo_revista",
    url: "https://repositorio.unal.edu.co/items/f12bcc4b-c556-4567-bbf8-2d50255aae8b",
    summary:
      "Es el artículo al que el propio Urbina remite desde el introito del capítulo «Nofïdeño: los nombres de la madre» cuando anuncia que allí profundiza el principio femenino. Reúne los fragmentos que sostienen la misma tesis de la ficha: la Madre existía cuando no existía nada, engendró de su primer suspiro al Padre Creador (Unámarai), lo sostiene con sus manos y es Dueña de las Palabras míticas, a las que llama «madre de la palabra / madre de la voz». Incluye «La gran historia» del abuelo Rafael Núñez (Enókayi), recogida por Blanca Vargas de Corredor, donde la maloca es ícono de la Madre generadora, y el mito de Añɨraima del abuelo Noé Rodríguez, en el que la Madre le arrebata al Padre las palabras que retenía y revive al hijo.",
    limitation:
      "Es un ensayo comparativo de divulgación (kogi, uitoto, muinane, mitologías del mundo) publicado en una revista del grupo Mujer y Género, sin transcripción bilingüe ni aparato etnográfico. No comenta los temblores, ni la lista de nombres funcionales (Komuidaño, Moziraño, Bagïdaño), ni la versión concreta de Jitoma Naïre: trabaja con fragmentos versificados y editados por el propio Urbina.",
  }),
  kneraTabaco2008: source({
    title: "Tabaco frío, coca dulce: palabras del anciano Kɨneraɨ de la tribu Cananguchal para sanar y alegrar el corazón de sus huérfanos",
    author: "Hipólito Candre (Kɨneraɨ) y Juan Álvaro Echeverri",
    year: 2008,
    type: "libro",
    url: "https://repositorio.unal.edu.co/items/ceb2b31c-e4ff-4b0e-81d4-70838a8e74b2",
    summary:
      "Aporta el paralelo vivo más exacto de lo que la ficha llama «sus muchos nombres». El texto 7, «Palabra de la Madre Cosechadora», muestra a la Madre acumulando en su canasto yuca brava, yuca dulce, piña, ají, maní y semillas para sembrar, y la nombra La Amontonadora, La Recogedora, Madre de las cosechas. El texto 6 y su comentario despliegan una oración de enfriamiento que recorre la letanía Eiño jáibikɨiño, Eiño rɨero buinaiño, Eiño nozeko buinaiño, Eiño jírueiño, Eiño zúuiyaiño, Eiño jɨfaiya buinaiño, Eiño fareka buinaiño, Eiño mázakaiño, glosada por Echeverri como madre de la albahaca, del rocío fresco, del alivio, de la yuca dulce, del maní. Es el mismo mecanismo de una sola Madre desplegada en nombres-función y la misma herencia de cultivos que enumera esta página, en boca de otro sabedor y de otro río.",
    limitation:
      "Es palabra de curación de Kɨneraɨ (ocaina-uitoto del Igaraparaná), no relato cosmogónico: no cuenta que la Madre cargue la tierra, no explica los temblores y no menciona a Nofïdeño. Buinaiño aparece como epíteto dentro de oraciones, no como personaje narrado. El PDF del repositorio transcribe la ortografía uitoto con guiones (i- por ɨ), lo que dificulta el cotejo de nombres.",
  }),
  berrioMoncadaMonifue2023: source({
    title: "Monifue rɨngo: sembrío y sabiduría entre las murui-muina",
    author: "Maribel Berrío-Moncada",
    year: 2023,
    type: "articulo_revista",
    url: "https://revistas.unal.edu.co/index.php/imanimundo/article/view/106577",
    summary:
      "Es el trabajo reciente que cita literalmente el capítulo de Nofïdeño: toma de la página 47 de Las palabras del origen la fórmula «madre de la palabra / madre de la voz» y la usa para sostener que Eiño —el territorio y la tierra entendidos como madre-vientre cósmica— «nombrada también como Buinaiño», se materializa en el vientre de cada mujer murui-muina. Permite leer la ficha no como cosmogonía cerrada sino como fundamento actual del trabajo de chagra (jakafaɨ) y del canto danzado (aiyaɨa), y nombra las cuatro carreras ceremoniales (yuaɨ, zɨkɨi, menizaɨ, yadiko) como fundadas en ese saber femenino.",
    limitation:
      "Artículo decolonial centrado en la huerta, el canto y la resistencia de las mujeres; Buinaiño aparece en un solo pasaje y no discute los temblores, el cargar la tierra ni la serie de nombres de Jitoma Naïre. Lee a Urbina como fuente secundaria y no vuelve al registro de 1971.",
  }),
  echeverriPeople1997: source({
    title: "The People of the Center of the World: A Study in Culture, History, and Orality in the Colombian Amazon",
    author: "Juan Álvaro Echeverri",
    year: 1997,
    type: "tesis_doctoral",
    url: "https://repositorio.unal.edu.co/items/fbca7240-d2c8-4f3a-a4e1-6774bcc2fc6e",
    summary:
      "Dedica una sección entera, «Topology of the Mother's Womb», y dos capítulos («The Axe and the Mother», «Cooling Down the Mother's Vessel») a la figura de la Madre en el rafue de Kɨneraɨ. Su conclusión es la que sostiene esta ficha por otra vía: la Madre no es una diosa entre otras sino un principio irreducible y común —«a principle of common» pertenencia— del que proceden los productos cultivados, el aliento del vientre y la curación de la comunidad, y al que se vuelve cuando la palabra del Padre se queda sin respaldo.",
    limitation:
      "Está en inglés y su corpus es el de Kɨneraɨ y los cacicazgos del Caquetá medio, no el de La Samaritana; no menciona a Nofïdeño ni los temblores, y el argumento es histórico-filosófico (la filosofía del hacha, el contacto con los blancos) más que mitográfico. Son 600 páginas sin índice analítico en el PDF del repositorio.",
  }),
  castrofuerza2019: source({
    title: "La fuerza de la manicuera: acciones de resistencia de las mujeres uitoto de La Chorrera-Amazonas durante la explotación del caucho - Casa Arana",
    author: "Fany Kuiru Castro",
    year: 2019,
    type: "tesis_maestria",
    url: "https://repository.urosario.edu.co/handle/10336/19447",
    summary:
      "Escrita por una mujer uitoto de La Chorrera, documenta la manicuera (juiñoi), bebida sagrada obtenida de la yuca dulce (fareka), entregada a las mujeres como fuerza y poder, y sitúa a la mujer como protectora del territorio, la comunidad y la chagra. Sostiene con material propio el nudo de esta ficha donde la Madre deja yuca brava, yuca dulce, piña y maní como herencia y deja a las mujeres la capacidad de alimentar.",
    limitation:
      "Su marco es histórico y político —la Casa Arana y la resistencia femenina durante el auge cauchero—, no mitológico. Atribuye el don de la manicuera al creador moo, no a la Madre, y no toca a Nofïdeño, los temblores ni la serie de nombres. Es un trabajo de maestría en Estudios Políticos, no en etnografía amazónica.",
  }),
  sernaEik2015: source({
    title: "Eikɨ jɨkanote: preguntar por el canto-adivinanza",
    author: "Laura Tattiana Areiza Serna",
    year: 2015,
    type: "articulo_revista",
    url: "https://revistas.unal.edu.co/index.php/imanimundo/article/view/54059",
    summary:
      "Es la investigación específica sobre el uikɨ rafue, es decir sobre el Baile del Uuikï con que cierra esta ficha. Presenta cinco eikɨ (cantos-adivinanza) recogidos, transcritos y traducidos en ese marco, explica que el juego de pelota pertenece a la carrera ceremonial de yuaɨ (frutas) y que la ceremonia está sellada y no se realiza desde los años setenta, de modo que lo que hoy existe es memoria reconstruida. Aclara además qué clase de canto es el que el relato dice que Hombre de frutas compuso antes de iniciar el baile.",
    limitation:
      "Trabaja los cantos y su pedagogía, no el mito del corazón del Padre: no aparecen Hombre de yuca, Hombre de frutas, el robo de la esfera por los cuñados, ni el canasto sin rendijas. Tampoco cita a Félix Kuegajima ni la versión de El Encanto de 1974. La tesis de maestría de la que sale el artículo (Uikɨ: Moroma komekɨ..., 2016, mención laureada) no aparece en acceso abierto en el repositorio de la UNAL.",
  }),
  cardonaRituales2019: source({
    title: "Rituales de la Gente de Centro. El caso del ritual del baile de las frutas Yuakɨ y la construcción del cuerpo como territorio",
    author: "Carlos Ricardo Mojica Cardona",
    year: 2019,
    type: "tesis_maestria",
    url: "https://repositorio.unal.edu.co/handle/unal/76065",
    summary:
      "Explica, apoyado en Preuss y en Gasché, qué cosa es materialmente el Uuikï: «el nombre de la pelota fabricada con la savia del árbol de caucho blanco», que simboliza a la vez su fruto, al padre creador y la luna nueva, y por medio de cuyo juego se teje la relación con la abundancia de los frutos. Añade que la fiesta de uuikɨ se celebraba cuando el dueño estaba en la cumbre de su carrera ceremonial y que hoy ya no se observa en la práctica. Es lo que permite entender por qué un relato llama «corazón del Padre» a una esfera y por qué esa esfera se guarda envuelta como a un niño.",
    limitation:
      "Su objeto es el baile de frutas yuakɨ en el contexto urbano de Leticia; el uuikɨ aparece en el repaso de las carreras ceremoniales, sin narrar el mito. Además su identificación de la esfera con el caucho blanco tensiona la lectura de esta ficha, que vincula la forma esférica con el ambil: la fuente no reconcilia las dos cosas.",
  }),
  hurtadoKirigaiai2012: source({
    title: "Kirigaiai: los géneros poéticos de la cultura minika",
    author: "Selnich Vivas Hurtado",
    year: 2012,
    type: "articulo_revista",
    url: "https://revistas.uniandes.edu.co/index.php/antipoda/article/view/1894",
    summary:
      "Da el marco conceptual exacto de la lección de esta ficha. Define el rafue como el kirigai (canasto) mayor de la cultura minika, el género del que se desprenden todos los otros y donde intervienen narración, canto, danza, tejido y medicina; enumera el uikɨ, «el de la pelota de caucho», como uno de los tipos de rafue en que un clan puede especializarse, junto a yadiko y yuakɨ; y recoge de Jitoma Zafiama —el mismo traductor que firma esta página— la advertencia de que la palabra que no se lleva a la ceremonia puede quedar perjudicando en el ambiente, precisamente en el caso del uikɨ rafue. Es decir: la palabra que no se concreta en obra hace daño.",
    limitation:
      "Es teoría de géneros poéticos, no etnografía del baile: el uikɨ se menciona en dos pasajes breves y el artículo no analiza el capítulo del Uuikï ni el ciclo de custodios. Discute críticamente a Urbina y sostiene que éste no ha mostrado con claridad cómo se relaciona la palabra-acción del rafue con los demás canastos, de modo que conviene leerlo como contrapunto y no como confirmación.",
  }),
  ninoepopeya2009: source({
    title: "La epopeya secreta de Gitoma: narración, territorio y conflicto en la Amazonia, del siglo XIX a la actualidad",
    author: "Hugo Niño",
    year: 2009,
    type: "articulo_revista",
    url: "https://revistas.udistrital.edu.co/index.php/enunc/article/view/3277",
    summary:
      "Es el propio autor de Primitivos relatos contados otra vez explicando de dónde salió este capítulo y qué hizo con él. Declara que el primer episodio que conoció fue «la modelación del universo por parte de Juttíñamui, según la versión de Monochoa, cerca de Araracuara», escuchada a partir de su encuentro inicial de 1965, y nombra a sus narradores uitoto (Gitoma Safiama, Custodio y Genaro Joinama, Querubín Joinama). Resume además el relato: Juttíñamui, Padre Principal, «esencia yuca, era sólo aliento», dio forma al mundo y creó su descendencia, les dio el señorío sobre la selva a cambio de que cuidaran su memoria y sus enseñanzas; cuando rompieron el pacto los deshizo, confiscó coca, tabaco y yagé y puso a Tigre Gáimoi de carcelero. Y declara su método: quiso dialogar «a mi riesgo» con los textos, introduciendo en ellos su propia visión. Da procedencia, contenido y estatuto a un capítulo que la ficha declaraba incomprobable.",
    limitation:
      "Es un ensayo autobiográfico publicado treinta y tres años después del trabajo de campo, sin transcripción en lengua, sin fecha ni nombre del narrador de ese episodio concreto y sin cotejo con otras versiones. Su foco es el ciclo de Gitoma, no la cosmogonía; el resumen de la creación ocupa un párrafo y cita su propia reedición de 2008, no el texto de 1976.",
  }),
  garciamito1973: source({
    title: "Un mito cosmogónico de los Murui-Muinane",
    author: "Jitoma Safiama (Octavio García) y Fernando Urbina Rangel",
    year: 1973,
    type: "articulo_revista",
    url: "https://revistas.unal.edu.co/index.php/idval/article/view/29124",
    summary:
      "Es el mito cosmogónico murui publicado más antiguo de la serie de Urbina, y en él Jutsiñamuy aparece con un papel muy distinto al de esta página: no modela el universo, sino que es «el Señor» al que Buinaima invoca de noche y en sueños para que le indique cómo hacer resucitar a la gente con achiote y luego con tabaco, cómo ir a buscar la candela y cómo curar a los enfermos. El narrador comenta: «Por eso en la actualidad creemos en Jutsiñamuy y en el poder del tabaco que vence al mal». Sirve para situar a la figura dentro de un relato murui recogido en castellano hacia 1970, y para ver que su función allí es la de un dios invocado desde arriba, no la de un demiurgo que piensa y nombra el mundo.",
    limitation:
      "La recopilación es en castellano, hecha por el propio Jitoma Safiama sin transcripción en lengua, y Urbina advierte que no contaba con otras versiones para fundamentarla mejor. El capítulo es el del diluvio y el origen de los bailes: Jutsiñamuy aparece como invocado, nunca como sujeto de una cosmogonía, de modo que la fuente muestra una ausencia tanto como una presencia. El PDF es un escaneo con OCR defectuoso.",
  }),
  gonzalezesencia2013: source({
    title: "La esencia de Naainuema",
    author: "Jorge Alberto Vásquez González",
    year: 2013,
    type: "articulo_revista",
    url: "https://revistas.udea.edu.co/index.php/elc/article/view/16299",
    summary:
      "Examina el nombre del padre creador en el relato de la creación uitoto recogido por Preuss («Kai moo nanie komuitajagai», narrado por Roziyue, del río Orteguaza) y muestra que Naainuema aparece una sola vez en todo el corpus, pospuesto a mooma, padre. Lo traduce como la Nada existente, sin forma especial: ni selva ni árbol ni fruto ni piedra ni agua, sino fondo o principio amorfo (jiyaki) y plenitud del vacío (jinade). Da contenido preciso a lo que esta ficha describe como pensar, buscar fundamento y convertir esa reflexión en palabra: el creador no organiza un mundo previo porque él mismo es lo que aún no es.",
    limitation:
      "Es una nota filosófica de cinco páginas sobre un solo término, no un estudio del relato ni de sus versiones. Trabaja el creador llamado Naainuema en el registro de Preuss, no el Jutíñamúi de Hugo Niño: la equivalencia entre ambas figuras no la hace esta fuente y no debe darse por sentada.",
  }),
  cardenalrelato1963: source({
    title: "El relato de la creación de los indios uitotos de Colombia",
    author: "Ernesto Cardenal",
    year: 1963,
    type: "articulo_revista",
    url: "https://www.revistadelauniversidad.mx/articles/d739a677-caf2-4834-99aa-84a1bde4c4b0/el-relato-de-la-creacion-de-los-indios-uitotos-de-colombia",
    summary:
      "Es el precedente que ayuda a situar el estatuto de esta página: catorce años antes que Hugo Niño, un poeta vuelve a contar y comentar la creación uitoto a partir de Preuss. Recoge la fórmula «En el principio la palabra (naikino) dio origen al Padre», explica que Nainuema significa el que es o tiene algo no existente, que la tierra se llama Nikarani, «lo soñado», y que el Padre asió su sueño con un hilo soñado y un sueño iseike, vago y vaporoso como humo de tabaco. Documenta que la cadena de reelaboraciones literarias de la cosmogonía uitoto es anterior y más larga que Primitivos relatos contados otra vez.",
    limitation:
      "No es etnografía ni crítica literaria: es una glosa devocional que abre comparando el naikino con el Verbo del Evangelio de Juan y llama «primitivismo» a la cultura uitoto, y que lee la trascendencia de Dios en Nainuema. No menciona a Jutíñamúi ni a Hugo Niño, trabaja sobre la traducción alemana de Preuss y su valor aquí es de contexto, no de fundamento del relato.",
  }),
  torregrozapueblo2020: source({
    title: "El pueblo del río: el valor simbólico del mito de origen en el pueblo uitoto",
    author: "Lorena Santos de Torregroza",
    year: 2020,
    type: "articulo_revista",
    url: "https://www.urosario.edu.co/revista-nova-et-vetera/omnia/el-pueblo-del-rio-el-valor-simbolico-del-mito-de-origen-en-el-pueblo-uitoto",
    summary:
      "Lee en detalle el episodio del fuego de este mismo ciclo, y sobre la misma versión: declara que toma el mito recogido por Fernando Urbina de labios del abuelo Jitoma Zafiama. Sigue a Buinaima cuando toma el nombre de Jitoma, a su hermano Fïzido que va a robar la candela a Muinájema en el extremo oriental del mundo inundado, la maldición del guardián y el regreso con las brasas, y el ají con que Buinaima hace hablar a la gente. Su aporte propio es leer esa geografía —el mundo inundado, el rincón de oriente, quién vive arriba y quién abajo— como clave de la organización espacial y social uitoto, donde murui y muina no son lugares fijos sino direcciones sagradas sobre el río.",
    limitation:
      "Es un artículo de divulgación universitaria, breve y sin aparato crítico; se concentra en el fuego y no cubre ni la causa del diluvio, ni la resurrección con tabaco, ni el conflicto entre las dos mujeres, ni el reparto de las ramas de yuca entre los bailes. No discute a Buinaiño.",
  }),
  garciaDanzando2016: source({
    title: "Danzando fakariya: los bailes uitotos como modelo de organización social en la Amazonía",
    author: "Oscar Iván García",
    year: 2016,
    type: "articulo_revista",
    url: "https://journals.openedition.org/bifea/7805",
    summary:
      "Sostiene y explica el nudo final de esta ficha. Afirma que entre las carreras ceremoniales uitoto cuatro son las más importantes —Yadiko, Menizaɨ, Zɨkɨi y Yuakɨ— precisamente «por haber sido heredadas directamente del Padre Creador llamado en este caso Moo Buinaima», que es lo que el relato narra cuando reparte las ramas de la yuca. Desarrolla después el yuakɨ, el baile de frutas, como modelo de organización social: la fiesta no es adorno del mito sino la forma en que se ordenan alianzas, intercambio y trabajo colectivo, que es lo que la ficha resume al decir que la reconstrucción culmina en formas colectivas de trabajo y celebración.",
    limitation:
      "Su objeto es la organización social contemporánea y el yuakɨ; no narra el diluvio ni analiza la mitología de origen de los otros tres bailes más allá de atribuirlos a Moo Buinaima. No usa la versión de Jitoma Zafiama ni discute la diferencia entre Buinaima y Juziñamui.",
  }),
  yamacuriMooma2011: source({
    title: "Mooma Mogorotoɨ yoga rafue: yuaɨ buinama uai ikakɨ monifuena arɨ kaɨmo monaiya, okaina imakɨ dɨbenedo (Historia de mi padre Mogorotoɨ 'Guacamayo azul': palabras del ritual de las frutas)",
    author: "Anastasia Candre Yamacuri",
    year: 2011,
    type: "articulo_revista",
    url: "https://revistas.unal.edu.co/index.php/imanimundo/article/view/18965",
    summary:
      "Es un texto bilingüe en dialecto buue, escrito por una mujer ocaina-uitoto desde lo que su padre hablaba en el mambeadero, sobre el origen y las etapas del ritual yuakɨ, el baile de frutas que este relato funda al repartir la tercera rama de la yuca. Aporta la voz interna que falta en la ficha: no un resumen etnográfico de la fiesta, sino la palabra con que se transmite de padre a hija, y por el lado okaina, no murui.",
    limitation:
      "No cuenta el diluvio ni menciona a Buinaima ni a Gerofaikoño: entra por el ritual, no por el mito de origen. Está escrito en buue con traducción al castellano, y su valor depende de leerlo como testimonio situado de una sola casa y no como descripción general del yuakɨ.",
  }),
  rangelMitos1991: source({
    title: "Mitos y petroglifos en el río Caquetá",
    author: "Fernando Urbina Rangel",
    year: 1991,
    type: "artículo de revista",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/view/7026",
    summary:
      "Es la pieza que discute de frente si la figura solar uitoto se leyó como sol o como luna. Urbina reconstruye el marco con que Preuss llegó a Colombia en 1913 -el panlunarismo de Siecke, Hüsing y Ehrenreich, para quienes «la experiencia del fenómeno lunar es el fundamento último de las mitologías de todos los pueblos»- y muestra que Preuss aplicó esa reducción al material uitoto «con una finura tal que aún convence» pese a que la escuela ya está muerta. Explica además la bifurcación naturalista entre semitistas de código lunar e indoeuropeístas de figura solar: justo el debate que una ficha sobre Jitoma-Sol y Fïboi-Luna necesita declarar, en vez de dar por natural que el Sol persiga a la Luna. Deja claro, de paso, que las interpretaciones de Preuss están «prisioneras de la teoría panlunarista» aunque su recopilación siga siendo la mejor publicada.",
    limitation:
      "No narra el episodio de Jitoma y Fïboi: no hay chagra de piñas, ni tronco-piedra, ni traición de la mujer. Es historia de la teoría, no de la versión de José García, y la discusión sol/luna aparece como crítica al intérprete alemán, no como una lectura alternativa de este relato concreto. Urbina es parte interesada: defiende su propio trabajo frente al de Preuss.",
  }),
  wojtylakgrammar2017: source({
    title: "A grammar of Murui (Bue): a Witotoan language of Northwest Amazonia",
    author: "Katarzyna Izabela Wojtylak",
    year: 2017,
    type: "tesis doctoral",
    url: "https://researchonline.jcu.edu.au/51983/",
    summary:
      "Da el piso lingüístico que la ficha da por supuesto: en murui (bue), jitoma es el sustantivo común 'sol' y fɨvui el sustantivo común 'luna' (§§3.1.1, 8, 10). Es decir, los dos hermanos del relato no llevan nombres propios que aludan a los astros: llevan los nombres de los astros. Wojtylak además documenta que el repetidor -toma, de jitoma 'sol', deriva nombres de períodos del día y del año, y que tanto jitoma como fɨvui son de los pocos nombres sin distinción de número: hay un solo Sol y una sola Luna. El corpus proviene de trabajo de campo 2013-2016 en El Encanto, San José, San Rafael y Tercera India, sobre el Caraparaná.",
    limitation:
      "No contiene el relato de Jitoma y Fïboi. Las menciones de Fɨvui son estrictamente léxicas y gramaticales; los pasajes narrativos que cita pertenecen al ciclo de Jitoma y Kechatoma, no al del Sol y la Luna. Es una gramática de 800 páginas: hay que ir a secciones puntuales, y la grafía (fɨvui) no coincide con la de Urbina (Fïboi).",
  }),
  torresResena1992: source({
    title: "Reseña de «Mitología y cultura huitoto», de Lino Tagliani",
    author: "William Torres",
    year: 1992,
    type: "reseña de libro en revista",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/view/7024",
    summary:
      "Torres reseña el único libro cuya segunda parte se titula precisamente «Historia del Sol», y desmonta lo que allí circula: Tagliani anuncia la historia de Jitoma pero «no se presenta toda la gesta demiúrgica de este héroe cultural»; lo que hay son fragmentos mezclados con la historia de la creación y con la de Díjoma, recogidos en Cuemaní entre 1983 y 1986 de boca de estudiantes uitotos del centro Mama-Bué, es decir «versiones de quienes han escuchado de oídas» y no de iniciados en el mambe y la palabra. Señala también los errores de transcripción (Jitoma/Giitoma). Es el aviso concreto de por qué esta ficha debe declarar relator y lugar en vez de citar cualquier «Historia del Sol» publicada.",
    limitation:
      "Son dos páginas de reseña: no narra el mito ni ofrece una versión propia de Jitoma y Fïboi, y su valor es negativo (qué no usar). Torres escribe desde la órbita de Urbina y Blanca de Corredor, de modo que su juicio sobre Tagliani conviene leerlo como posición en una disputa de autoridad etnográfica, no como veredicto neutral.",
  }),
  silvaCapitulo: source({
    title: "Capítulo 5. Oralidad y territorio en la cultura uitoto. El origen de los ríos: relatos sobre los orígenes de los ríos Igará Paraná -Kotue- y Caraparaná -Uyokue-",
    author: "Pedro Tulio Marín Silva y Eudocio Becerra Bigïdïma",
    type: "capítulo de libro en repositorio universitario",
    url: "https://repositorio.unal.edu.co/bitstreams/4d74dbd0-cd12-4a6f-a78d-f9b9d898772a/download",
    summary:
      "Es la segunda versión publicada, bilingüe bue-español y verso a verso, del recorrido de Jitoma tras Nokaido, el hombre Tucán: la enemistad por el gesto de rechazo, el flechazo, la muerte del ave, el traslado del cuerpo río arriba de la «olla del sol» (Jitoma nogorai), la descomposición del Tucán, la caída de Jitoma a mitad de camino y la nominación sucesiva de todos los afluentes del Caraparaná -incluido el tramo llamado miqui onodozi, 'pata de tintín'-. Confirma con el texto en lengua la afirmación central de la ficha, que la venganza funciona como memoria territorial, y aporta el contraste con el relato hermano de Jidoroma y Guami sobre el Igaraparaná. El epígrafe recoge la frase de Urbina sobre la «rica toponimia» que produce este mito.",
    limitation:
      "El capítulo digitalizado no declara el libro que lo contiene ni el año (los titulillos dicen «Competencias y proyectos de aula» y «Culturas y escolaridad»); por las obras que cita es posterior a 1997. La versión no es la de Jitoma Zafiama en La Samaritana ni parte de La Chorrera: es la del clan Jidorueni del Caraparaná, narrada a Becerra por su abuelo Pablo Bigïdïma, y omite los episodios del muchacho llagado, los pájaros-parientes y la anciana que revela el engaño. El OCR separa letras y estropea varios topónimos.",
  }),
  kneraJaeni2015: source({
    title: "Jaɨeni Jitoma iaɨyinoɨ ikakɨ = Historia de los huérfanos del Sol",
    author: "Hipólito Candre (Kɨneraɨ), narrador; presentación y edición de Juan Álvaro Echeverri; transcripción y traducción de Blas Candre y Juan Álvaro Echeverri",
    year: 2015,
    type: "artículo de revista",
    url: "https://revistas.unal.edu.co/index.php/imanimundo/article/view/51447",
    summary:
      "La presentación de Echeverri (pp. 178-179) es la única clasificación publicada que separa las tres historias que se confunden bajo el nombre «mito de Jitoma», y su punto 2 es exactamente esta ficha: «La historia de la contienda entre Jitoma y Picón (Nokaido)», la del héroe padre de los Huérfanos del Sol, «a partir de las cuales reciben nombres muchos sitios de la región del Caquetá-Putumayo». Remite a la versión de Jitoma Zafiama en Urbina 2010 (pp. 98-106) y señala una segunda, la narrada por Horacio Olaya (1995, 16-19) y recopilada por el P. Daniel Restrepo en La Chorrera: es decir, existe otra versión localizada en el punto de partida que la ficha menciona. También aclara que la historia de los huérfanos es la continuación de esta.",
    limitation:
      "El cuerpo del artículo no narra la contienda con Nokaido: narra la historia siguiente, la de los hijos. Lo aprovechable para esta ficha son dos páginas de presentación. La versión de Horacio Olaya que cita no está disponible en línea, así que la pista queda abierta pero no verificable desde aquí.",
  }),
  echeverriInforme1991: source({
    title: "Informe de correrías por los ríos Putumayo, Caraparaná e Igaraparaná. Segundo semestre de 1991",
    author: "Juan Álvaro Echeverri, Olga Lucía Montenegro Díaz, María del Pilar Rivas y Diego Luis Muñoz",
    year: 1991,
    type: "informe de investigación en repositorio universitario",
    url: "https://repositorio.unal.edu.co/handle/unal/9720",
    summary:
      "Muestra que los nombres que deja la persecución no son literarios sino cartográficos y vigentes. El apéndice 22, «Lugares mitológicos de la serranía Adofikɨ (río Igaraparaná)», inventaria en lengua y con ubicación las huellas, la piscina y el manguaré de Jitoma; y en el cuerpo del informe aparece, entre los proyectos de una comunidad del Igaraparaná, un varadero en la vuelta del río «llamada pozo Picón (Nokaidoji)»: el Tucán del mito nombrando todavía un recodo por el que la gente calcula horas de viaje. Es la comprobación de campo de la frase de la ficha sobre la ruta de la venganza como memoria territorial.",
    limitation:
      "No narra el mito: es un informe de recorrido para el Proyecto Coama y la Fundación Puerto Rastrojo, con censos, proyectos productivos y cartografía. El apéndice recoge sobre todo lugares de los dos huérfanos del Sol, no del padre, y no traza la ruta completa entre La Chorrera y el punto donde Jitoma alcanza al ave. El registro no dice quién nombró cada sitio ni con qué versión del relato.",
  }),
  nevakeUruia2019: source({
    title: "Uruiaɨ Uifikɨmo Komuinafue. Niños creciendo en los llanos",
    author: "Wendi Andrea Kuetagje Muñoz; relato de Santiago Clodualdo Kuetgaje Nevake, uitoto del clan Fɨeraiaɨ",
    year: 2019,
    type: "trabajo de grado en repositorio universitario",
    url: "https://repository.urosario.edu.co/handle/10336/30435",
    summary:
      "Trae, contada por un mayor uitoto y publicada por su nieta, una variante en la que Nokaido no es el raptor sino uno de los cuatro espíritus del mal -danta (jiguema), tucán (nokaido riama), tigre mariposa (jiko janayari) y paujil colorado (ferebeki)- que chupan ambil en una cueva para impedir que broten monte, animales y gente, y a quienes Jitoma vence transformándose en la serpiente subterránea degira jitoma. Sirve para no fijar a Nokaido como un personaje único: en la memoria murui actual el Tucán es también un nombre de lo adverso, y el Jitoma que lo enfrenta es el que abre el mundo, no el marido agraviado.",
    limitation:
      "No es el relato de esta ficha: no hay mujer que huye, ni muchacho llagado, ni persecución ni toponimia. Es un trabajo de homologación de idioma de pregrado, no una edición filológica: no hay texto en lengua enfrentado, ni fecha ni lugar de grabación del relato, ni discusión de variantes. Úsese como testimonio contemporáneo de un narrador nombrado, no como versión de referencia.",
  }),
  rangelhombre1994: source({
    title: "El hombre sentado: mitos, ritos y petroglifos en el río Caquetá",
    author: "Fernando Urbina Rangel",
    year: 1994,
    type: "artículo de revista",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/view/6989",
    summary:
      "Condensa, trece años después, para qué sirve este mito dentro del sistema: Dïïjoma es «el personaje que da origen a la Boa-de-los-nombres», el ser al que se le ofrenda masa de yuca, que lleva en el vientre esquejes y almidón y que termina identificándose con el tronco de la yuca, simbolizado en el Palo de Yadiko, ícono del Baile-de-la-serpiente. Es la clave que explica por qué la ficha puede decir que Dïïjoma «enfrenta a su propio espíritu-serpiente»: el almidón con que la hija alimenta a la boa y con que el padre se deja tragar no es un detalle, es lo que vuelve horticultor al relato y lo enlaza con el reparto de los nombres de los pueblos.",
    limitation:
      "No narra el mito: lo cita en dos párrafos para fechar los petroglifos en un horizonte hortícola. No dice nada del viaje dentro del cuerpo de la boa, de la transformación en águila ni del final comunitario, y toda la discusión es arqueológica. Urbina se autocita de forma densa (1980, 1986, 1992, 1993) sin repetir los textos.",
  }),
  sandovalFernando2010: source({
    title: "Fernando Urbina: el arte de la sabiduría indígena",
    author: "Sergio Andrés Sandoval",
    year: 2010,
    type: "artículo de revista",
    url: "https://revistas.javeriana.edu.co/index.php/cualit/article/view/6302",
    summary:
      "Es la única lectura crítica publicada del libro de Urbina sobre este mito, y sitúa el relato en su género: Dïïjoma es un bakaki, «la narración de un error, de un mal engendrado que afecta al individuo y a la comunidad, de una historia negativa y prohibida». Desarrolla el punto que la ficha resume en una línea -que ninguna de las dos perspectivas garantiza un uso justo del poder- como una regla de la tradición: hay que ser responsables «no dejando cabos sueltos», y Dïïjoma convoca fuerzas que no puede cerrar. Describe además cómo Urbina compone el libro (el poema «Anaconda ancestral», las palabras dispuestas formando el cuerpo ondulado de la serpiente, las fotografías de petroglifos) y cómo allí se narra el principio del baile y del palo de yadiko.",
    limitation:
      "No narra el mito ni discute variantes: es un ensayo sobre la obra de Urbina como literatura, y todo lo que dice de Dïïjoma pasa por la edición de 2004 del Convenio Andrés Bello, que no está en línea. No menciona a Moisés Tejada ni a Nibagïeño. La versión del editor exige navegar hasta la galerada; el PDF íntegro también está espejado en Redalyc.",
  }),
  rangelNotas1987: source({
    title: "Notas sobre un relato de curanderismo de la gente de Murui",
    author: "Fernando Urbina Rangel",
    year: 1987,
    type: "artículo de revista",
    url: "https://revistas.udea.edu.co/index.php/boletin/article/view/337272",
    summary:
      "Registra, en boca del relator murui Juvenal (río Caraparaná, diciembre de 1979), un origen del Yadiko que compite con el de Dïïjoma: Buinaigïema engendraba culebra y no gente cada vez, y al ver que su criatura era serpiente la convirtió en Yadiko, «o sea que en la tradición de nosotros lo pintan en forma de boa»; el baile de Yadiko es un arrullar al hijo, y los bailarines hacen cimbrar el tronco hueco. Urbina anota además que el Yadiko «es un ícono ritual que simboliza la Serpiente del Origen» y da nombre al baile más pesado, la ceremonia donde se renueva el establecimiento de los grupos salidos de los segmentos de la serpiente. Sirve para no dar por única la cadena Dïïjoma-águila-yáadiko.",
    limitation:
      "No narra Dïïjoma en ningún momento: el relato analizado es «La copa de los espíritus del bosque», sobre curación y brujería. La conexión con esta ficha es indirecta -el objeto ritual en que desemboca el mito- y el propio Urbina advierte que no pidió explicaciones sobre varios puntos del episodio. El escaneo tiene OCR muy deteriorado en algunas páginas.",
  }),
  rangelmito1986: source({
    title: "Un mito de la gente Murui: de cómo se crió Yarocamena",
    author: "Fernando Urbina Rangel",
    year: 1986,
    type: "artículo de revista académica",
    url: "https://revistas.unal.edu.co/index.php/maguare/article/view/47-65",
    summary:
      "Publicación del mismo capítulo veinticuatro años antes que «Las palabras del origen», y más larga: además del árbol y del gusano Yarocaigüiro llega a la derrota a manos de Jitoma y al destino de sus partes —el mazo arrojado al agua se vuelve temblón, el espejo raya, la cabeza danta y la cola vaca marina—, al huevo de picaflor del que renace el hermano con el nombre Fïsido Jizuma, y a un episodio final con Guïbokï y la maloca de algodón incendiada que la ficha publicada no recoge. Trae además veintitrés notas de Urbina que clasifican el relato como ïïgaï, «historia de castigo», y explican por qué el abuelo Belisario Jichamón prohibió contarlo: por ser estímulo para la brujería amatoria.",
    limitation:
      "Es versión en castellano, no transcripción en lengua. Fecha el registro en junio de 1972 —«el contacto con Eudoxio se hizo en 1972 en la Samaritana»—, no en 1971 como declara la ficha, y acredita a Eudocio Becerra como informante y a Becerra y Octavio García como traductores. La grafía difiere de la de 2010 (Jitobeo / Jitobene por Kïtobeo / Kïtobeni) y el OCR del escaneo deforma varios nombres propios.",
  }),
  camachoHistoria1989: source({
    title: "Historia oral de una maloca sitiada en el Amazonas: aspectos de la rebelión de Yarocamena contra la Casa Arana, en 1917",
    author: "Roberto Pineda Camacho",
    year: 1989,
    type: "artículo de revista académica",
    url: "https://revistas.unal.edu.co/index.php/achsc/article/view/36089",
    summary:
      "Reconstruye con fuentes mayoritariamente orales el combate de Atenas de 1917: el jefe que tomó el nombre Yarokamena, la convocatoria a otros jefes, el sitio de la maloca blindada con bultos de caucho y su incendio por tropa peruana y caucheros. Es el suceso histórico al que Urbina ata el relato del árbol y el gusano, y lo que permite a la ficha sostener, sin inventarlo, que pronunciar ese nombre equivalía a «destapar la olla» de la violencia.",
    limitation:
      "Es historia de la rebelión, no lectura del mito: no analiza el árbol, el gusano ni la intervención de los dos Jitoma. Su reconstrucción descansa en testimonios recogidos décadas después del hecho, y los nombres y papeles de los jefes aliados (Gurai, Zogaima, Toidimïe) varían entre versiones.",
  }),
  castrofuerza2024: source({
    title: "La fuerza de la manicuera. Resistencia de las mujeres uitoto en la época del caucho",
    author: "Fany Kuiru Castro",
    year: 2024,
    type: "libro institucional de acceso abierto",
    url: "https://www.mincultura.gov.co/despacho/Documents/grupo-de-divulgacion-y-prensa/publicaciones-micasa/Impreso_La%20fuerza%20de%20la%20manicuera_completo.pdf",
    summary:
      "El capítulo «La rebelión de Yarokamena» (pp. 152-156), escrito por una autora uitoto, sitúa al jefe en el clan Bofaizaɨ con maloca en la sección de Atenas, reproduce en lengua el canto que entonaban al matar a un cauchero, describe el ambil preparado para convocar a otros jefes y recoge del jefe del clan Jitomagaro que los bofaizaɨ «se valieron de la brujería para secar el río». Cierra diciendo que los abuelos siguen analizando hoy en el mambeadero por qué fracasó. Es la lectura interna de por qué esa fuerza no debía liberarse, que la ficha atribuye hoy sólo a Urbina.",
    limitation:
      "No comenta el relato mítico del árbol ni del gusano: trata la rebelión histórica. Procede de La Chorrera, en el Igará-Paraná, no de La Samaritana ni del Caraparaná, y su foco declarado es la resistencia de las mujeres, que la propia autora advierte que no aparece en los relatos de esta rebelión.",
  }),
  carlevarinoMemorias2017: source({
    title: "Memorias del bosque humano: historias abismales de violencia colonial durante la época del caucho",
    author: "Wilton Martínez Carlevarino",
    year: 2017,
    type: "artículo de revista académica",
    url: "https://revistas.cultura.gob.pe/index.php/memorias/article/view/13",
    summary:
      "Reúne testimonios del lado peruano sobre el mismo combate y recoge, citando a Pineda, la explicación de Mariano Muinane: «Yarocamena pensaba que solamente con la brujería acabaría con los peruanos, pero en medio de éstos había también indígenas y brujos que atajaban la brujería del rayo». Es el eslabón que une el rayo con que los Jitoma vencen al gusano en el mito con la derrota histórica del jefe que tomó su nombre.",
    limitation:
      "Artículo de memoria y museografía sobre la cauchería en conjunto; Yarocamena ocupa unos pocos pasajes y notas al pie, siempre citados de Pineda y de compilaciones del CAAAP, no de trabajo de campo propio sobre el relato.",
  }),
  pauResena2017: source({
    title: "Reseña de Rojas Paredes, R. y Acuña, Á.; Chirif, A. (ed.), «La historia jamás contada sobre la época del caucho. Dos testimonios indígenas»",
    author: "Stefano Pau",
    year: 2017,
    type: "reseña en revista académica",
    url: "https://revistas.pucp.edu.pe/index.php/anthropologica/article/view/16122",
    summary:
      "Compara el testimonio del bora Ramiro Coregoitsi sobre la rebelión de Gurai con «el conocido relato de la rebelión de Yarocamena, la historia del levantamiento de un jefe huitoto que mezcla la realidad histórica con el mito», y señala que su memoria se difundió no sólo entre los uitoto sino también entre boras y andoques. Sirve para que la ficha diga que el ciclo desbordó los límites de una comunidad.",
    limitation:
      "Es una reseña de cuatro páginas: no aporta versión del mito ni análisis propio, y su comparación se apoya enteramente en Pineda (1988/1989). Fecha ese artículo en 1988, mientras la revista lo publica con año 1989.",
  }),
  garciamujer2016: source({
    title: "La mujer jaguar",
    author: "José Octavio García y Fernando Urbina Rangel",
    year: 2016,
    type: "libro digital en biblioteca institucional",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2721/",
    summary:
      "Episodio que define al personaje que la ficha nombra sin explicar: «La Mujer-Jaguar es la divinidad encargada de cuidar a los animales de la selva. Los protege, les comunica la fuerza para multiplicarse, pero también los devora pues necesita compensar la fuerza que gasta en semejante trabajo». Ahí está, dicho por la fuente, el porqué de que al final del ciclo no desaparezca sino que quede como dueña y protectora de los animales.",
    limitation:
      "Texto breve y muy simplificado; no narra el enfrentamiento con Jirayauma ni cita fuentes propias. Presenta a la Mujer-Jaguar como «divinidad», categoría del adaptador y no necesariamente del relator.",
  }),
  garciacanto2016: source({
    title: "El canto de la perdiz",
    author: "José Octavio García y Fernando Urbina Rangel",
    year: 2016,
    type: "libro digital en biblioteca institucional",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2729/",
    summary:
      "Da el contenido concreto del intercambio que la ficha sólo enuncia: Perdiz se niega al principio porque el hermano de Jirayauma «había matado un montón de sus familiares, cuando la ley del monte ordena que no se deben cazar más de cinco aves de cada tropa», y acepta a cambio de un regalo que le permitirá advertir del peligro a su grupo. Es la fuente publicada de la lección sobre desperdicio y medida que la ficha atribuye al cierre del ciclo.",
    limitation:
      "Adaptación didáctica: la cifra de cinco aves aparece como norma sin más respaldo, y el episodio no indica de qué parte del registro de 1971 procede.",
  }),
  garciacangrejo2016: source({
    title: "El cangrejo y el chontaduro",
    author: "José Octavio García y Fernando Urbina Rangel",
    year: 2016,
    type: "libro digital en biblioteca institucional",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2722/",
    summary:
      "Desarrolla el episodio que la ficha menciona de pasada: Cangrejo corta con sus tenazas los bejucos en que Jirayauma queda enredado tras cruzar el río, y le cuenta a cambio la historia de la deuda impaga —la palma de chontaduro robada a la gente del agua, la inundación con que los peces la recuperaron y el trabajo por el que nunca le pagaron.",
    limitation:
      "En esta versión el encuentro con Cangrejo ocurre después de cruzar con Caimán, no antes, y no aparece el baile que la ficha asocia a esa ayuda: la cadena de episodios no coincide punto por punto con lo publicado.",
  }),
  garciahombre2016: source({
    title: "El hombre serpiente",
    author: "José Octavio García y Fernando Urbina Rangel",
    year: 2016,
    type: "libro digital en biblioteca institucional",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2727/",
    summary:
      "Es el episodio del cruce, y da la formulación exacta de los dos puntos que la ficha resume: Dïïjoma, ocupado en buscar la planta que lo volvería Anaconda, le dice a Jirayauma que la transformación «requería algún tiempo» y lo remite al Caimán; y el banco de contar historias del padre, entregado como pasaje, «quedó dándole forma a la cabeza del Caimán». Añade la moraleja explícita: la ley de los ancianos dice que lo que se empieza hay que llevarlo a término.",
    limitation:
      "Resume en dos páginas un mito que Urbina publicó aparte como libro entero («Dïïjoma, el hombre-serpiente-águila», 2004): la muerte del brujo y de su hija queda apenas apuntada y no puede usarse como versión del ciclo de Dïïjoma.",
  }),
  rangelmariposas2007: source({
    title: "Las mariposas amarillas y el banco de contar historias",
    author: "Fernando Urbina Rangel",
    year: 2007,
    type: "artículo de revista académica",
    url: "https://revistas.javeriana.edu.co/index.php/cualit/article/view/6641",
    summary:
      "Segunda versión publicada del mismo relato, con otra narradora: la abuela Filomena Tejada, oída por Urbina en 1979 cerca de El Encanto, río Uyukoe (Urbina anota que José Octavio García, yerno de doña Filomena, le había dado una versión mucho más extensa en 1971). Aporta lo que la adaptación ilustrada no trae: cómo mata la Mujer-Jaguar a sus pretendientes en el vano de la puerta, cómo Jirayauma esquiva el golpe, el salado donde ella atrae a los animales y por qué eso la hace Dueña-de-animales, los dardos en el centro de su poder, y el pago a Perdiz, Caracol, Culebra-cazadora y Hormiga-arriera. Cierra con Naïma, el primer Caimán, y el banco que le queda en la cabeza.",
    limitation:
      "Urbina declara que es una recreación literaria escrita en homenaje a García Márquez, con marco de conversación entre la abuela y sus nietos; la escena del salado incluye detalles sexuales explícitos que la ficha resume sin reproducir. No coincide con la adaptación del Museo del Oro en el orden de los animales ayudantes.",
  }),
  bigidimaRiaki2008: source({
    title: "Riaki rafue: palabra de consejo sobre la cacería",
    author: "Eudocio Becerra Bigidima",
    year: 2008,
    type: "artículo de revista académica",
    url: "https://revistas.unal.edu.co/index.php/formayfuncion/article/view/9484",
    summary:
      "Texto bilingüe murui-castellano sobre la palabra de consejo que regula la cacería. Documenta desde dentro lo que en el mito es escena: el salado es «la caguana de los animales», «los senos de la madre, la dueña del salado», y sobre él se coloca al jaguar; de ahí las prohibiciones de despresar allí al animal y de cazar en exceso. Permite a la ficha sostener que la Mujer-Jaguar del salado no es una invención narrativa sino una figura con norma asociada.",
    limitation:
      "No nombra a Jirayauma ni al Cerbatanero, y llama a la dueña «madre Jaire», no Mujer-Jaguar: la identificación entre una y otra es inferencia, no afirmación del texto. Advierte además que «la historia de los salados se cuenta de manera superficial» porque se considera materia reservada.",
  }),
  bidigimaOralidad1997: source({
    title: "Oralidad y territorio en la cultura Uitoto",
    author: "Eudocio Becerra Bidïgïma y Pedro Marín Silva",
    year: 1997,
    type: "artículo de revista académica",
    url: "https://revistas.unal.edu.co/index.php/formayfuncion/article/view/17083",
    summary:
      "Publica «Juma Yuema Ikakï», una versión bilingüe completa del mismo relato con otro narrador: don Jacinto Bigïdïma, clan jidorueni, grabado en San José del Encanto. Confirma y precisa lo que la ficha resume: Jidïma roba los atuendos —ïniroi, la «sotana» de plumas de garza— mientras Juma atiende sus objetos de pesca; Juma, que había emergido del inframundo erguido como la garza real, castiga a los pobladores que encuentra convirtiéndolos en raudales y hundiéndolos; al hallar sus vestidos donde los Jidïmafo, se los prueba fuera de la maloca y se hunde con ayuda del trueno, hundiendo con él a la tribu. Da las etimologías (Jidïma = jidï, pez dormilón, + ma; Juma Yuema = hombre con plumaje de garza blanca) y cita expresamente la versión de Urbina narrada por Juvenal Castillo sobre el robo en el chorro de Jidïma.",
    limitation:
      "Es una versión distinta, no la de la ficha: aquí el desenlace es el hundimiento de tribus enteras y la creación de los raudales, no un baile que petrifica a los danzantes, y los autores subrayan que Preuss no recoge este relato y que los clanes nombrados ya no existen. El petroglifo con la huella del héroe y las piedras que dibujan el ruedo del baile los sitúan en el raudal de La Chorrera, no en Jidïma.",
  }),
  acevedoRemembranzas2021: source({
    title: "Remembranzas de mis ancestros",
    author: "Jimmy Alexis Ramírez Rojas; directora de tesis Laura Juliana Acevedo",
    year: 2021,
    type: "trabajo de grado universitario",
    url: "https://repository.unad.edu.co/handle/10596/42405",
    summary:
      "Proyecto de grado en Artes Visuales que construye un libro-arte a partir del mito Juma Yuema Ikakï, trabajado con el cabildo uitoto de Solano (Caquetá). Analiza el relato como mapa: los símbolos, los personajes y su relación con el territorio, y reconoce que hoy tiene vacíos por el desconocimiento de algunos de sus personajes y lugares. Es la recepción contemporánea del relato fuera del Caraparaná.",
    limitation:
      "No es investigación etnográfica ni filológica: se apoya enteramente en Becerra y Marín (1997), a quienes cita en bloque, y su objetivo es plástico, no documental. Trabaja con una comunidad uitoto distinta (Solano, Caquetá) de la del raudal de Jidïma.",
  }),
  silvahabitantes2006: source({
    title: "Los habitantes del mundo sub-acuático. Ritual y mítica Murui Iye Fia Rafue",
    author: "Pedro Marín Silva y Eudocio Becerra Bigidima",
    year: 2006,
    type: "artículo de revista académica",
    url: "https://revistas.unal.edu.co/index.php/formayfuncion/article/view/18120",
    summary:
      "Describe el mundo acuático murui al que van a parar, en la versión de Juma Yuema, los pobladores hundidos: el anabaïno o inframundo y los buinai urukï, seres que habitan el agua. Registra además, en la nomenclatura de peces del alto Caraparaná, jidima como el dormilón (Hoplias malabaricus) y lo menciona entre los que «cuidan el recinto», lo que apoya la etimología del topónimo del raudal.",
    limitation:
      "El artículo trata la pesca colectiva con barbasco, no el relato de Juma: nunca lo nombra. Su aporte es léxico y cosmológico, y la conexión con el hundimiento de los Jidïmafo hay que hacerla desde Becerra y Marín (1997), no desde este texto.",
  }),

  // ——— Búsqueda profunda 2026-09-17 ———

  // ——— Búsqueda profunda 2026-09-17 ———
  revisadaNofizazinama1994: source({
    title: "13. Nofizazinama igaí — La elevación de Nofizazinama al cielo y el rayo domado (capítulo 13 de Religión y mitología de los uitotos, II parte)",
    author: "Konrad Theodor Preuss; transcripción revisada y traducción de Eudocio Becerra Bigïdïma y Gabriele Petersen de Piñeros",
    year: 1994,
    type: "capítulo de libro (texto bilingüe uitoto-español) en repositorio institucional",
    url: "https://bffrepositorio.unal.edu.co/server/api/core/bitstreams/8dadfee9-fa73-4894-9a50-f5c611b16271/content",
    summary:
      "Es la versión más antigua conocida del mismo relato, recogida hacia 1914, y corrige la lectura de la ficha en dos puntos verificados en el texto: Monayagona no es sólo «brujería» difusa sino un personaje con nombre y con motivo (el padre del protagonista, Nofigireima, le había absorbido los ojos con la cerbatana, y la elevación al cielo es la represalia); y el pájaro que socorre al hombre es explícitamente el faido, el mochilero, mascota criada por el padre, que le trae uvas de monte (jírikorei) de su propia chagra y le da de beber el jugo, hasta hacerle un nido y poner allí su corazón. Confirma además que la mujer se levanta de la hamaca en la madrugada y cae, y que quienes lo van devorando mientras cuelga son avispas del cielo que le lamen los ojos.",
    limitation:
      "Es una traducción de 1994 de un corpus grabado en 1914 en variedad dialectal mika y en otro territorio que el de José García (Takana, Leticia, 1986): la secuencia guama–uva–caímo–plátano de la ficha no aparece así, aquí sólo hay uva de monte, y el relato continúa en un segundo bloque (el rayo domado, Amenakuduma) que la ficha no cubre. El volumen ya está citado en bloque en la ficha por otras dos URL; lo nuevo es el texto del capítulo, consultable por sí solo. Es un PDF escaneado con OCR imperfecto en los pasajes en lengua.",
  }),
  nietoCapitulo1994: source({
    title: "Capítulo III: Análisis de los mitos (Religión y mitología de los uitotos, I parte)",
    author: "Konrad Theodor Preuss; traducción de Ricardo Castañeda Nieto",
    year: 1994,
    type: "capítulo de libro (estudio) en repositorio institucional",
    url: "https://bffrepositorio.unal.edu.co/server/api/core/bitstreams/4498ce9b-db54-4cdd-ab38-4bbbf843f14b/content",
    summary:
      "Trae, en las páginas dedicadas a «La elevación al cielo y el rayo domado (13)», la sinopsis completa del relato más la interpretación de Preuss: Junuduño es la mujer-piña que llega de la cueva de los antepasados, se casa primero con Monayagona y luego es persuadida de casarse con Nofizazinama; los ratones que arrasan la chagra son los espíritus auxiliadores de Monayagona; los dos pájaros que advierten a la pareja en la hamaca son los ojos robados de Monayagona convertidos en aves. Preuss lee toda la cadena en clave lunar: Nofigireima y Nofizazinama derivan de nofiki, 'piedra', y la pareja elevada en la hamaca sería la luna menguante devorada por los Riai. Da al conflicto inicial de la chagra una causa concreta —un adulterio y un robo de ojos— que la ficha deja como brujería sin motivo.",
    limitation:
      "La interpretación astral es de Preuss y refleja el comparatismo alemán de principios del siglo XX; no es exégesis indígena y no debe trasladarse a la ficha como si lo fuera. La sinopsis resume el texto mika, no la versión de José García, y difiere de ella (no hay secuencia de cuatro frutos, y la mujer se convierte en arena).",
  }),
  nietoCapitulo19942: source({
    title: "Capítulo II: El padre creador, los antepasados y los demonios (Religión y mitología de los uitotos, I parte)",
    author: "Konrad Theodor Preuss; traducción de Ricardo Castañeda Nieto",
    year: 1994,
    type: "capítulo de libro (estudio) en repositorio institucional",
    url: "https://bffrepositorio.unal.edu.co/server/api/core/bitstreams/30669726-4d7d-437a-a25c-42c5643576bc/content",
    summary:
      "Usa el episodio de Nofizazinama como caso ejemplar para explicar el joria o yoneri, el espíritu protector que habla: cita el pasaje en que, apenas la pareja ha sido elevada, la voz le dice a Nofizazinama que está perdido, le explica por qué (el error del padre al absorber los ojos de Monayagona), le informa que su mujer «se estrelló contra nuestra tierra y se convirtió en arena» y le anuncia que los Riai y los Yurugui Riai del cielo lo devorarán. Sirve para entender qué clase de ser es la voz que informa y no ayuda, un matiz que la ficha resuelve hoy como simple búsqueda de la madre y los hijos.",
    limitation:
      "Es un capítulo de teoría religiosa, no una versión del relato: sólo cita el fragmento del espíritu protector y lo hace para sostener una tipología general de almas y demonios. Nada dice de la reconstrucción del cuerpo con frutos cultivados, que es el centro de la ficha.",
  }),
  revisadaFifieiruireye1994: source({
    title: "14. Fifieiruireye igai — El adulterio y la elevación al cielo (capítulo 14 de Religión y mitología de los uitotos, II parte)",
    author: "Konrad Theodor Preuss; transcripción revisada y traducción de Eudocio Becerra Bigïdïma y Gabriele Petersen de Piñeros",
    year: 1994,
    type: "capítulo de libro (texto bilingüe uitoto-español) en repositorio institucional",
    url: "https://bffrepositorio.unal.edu.co/server/api/core/bitstreams/0dbd2cfd-a1c0-440c-b595-9c868b0d14d4/content",
    summary:
      "Es el relato inmediatamente siguiente en el mismo corpus y comparte con el de Nofïzazima el armazón: una falta conyugal (aquí el adulterio de Iyokoremui con la mujer en la hamaca), un cuerpo que queda a merced de otros seres, y una elevación al cielo llevada a cabo por un ave —al final, un gallinazo carga a Binïkïï entre las alas y la lleva «hasta el punto donde tierra y cielo se dividen». Muestra que la elevación al cielo y el ave que transporta o alimenta no son un rasgo único del relato de la ficha sino un motivo con forma propia dentro del corpus, lo que respalda el cuidado de la ficha al no leerlo como caso aislado.",
    limitation:
      "No es una variante de Nofïzazima: cambian los personajes, el ave y el desenlace, y no hay reconstrucción del cuerpo con frutos. Sirve como comparanda interna del mismo corpus, no como segunda versión del relato, y así debe citarse. Verifiqué el texto del capítulo; la interpretación asociada está en la p. 124 y ss. del volumen I, que no revisé para este punto.",
  }),
  kuegakuritransmision2013: source({
    title: "La transmisión de los conocimientos tradicionales del hongo Ekuiruaɨ (Lentinula raphanica) bajo la orientación de algunos mayores del clan Jifikuenɨ de la etnia Uitoto en La Chorrera, Amazonas-Colombia",
    author: "Fidelia Dimas Martínez (Kuegakuri), clan Jifikuenɨ; directora Martha Angélica Segura Jiménez",
    year: 2013,
    type: "trabajo de grado (licenciatura en Biología) en repositorio institucional",
    url: "https://repositorio.upn.edu.co/items/cfd3ef61-5843-457f-aced-7407ad09e248",
    summary:
      "Contiene, transcrita de la voz de un mayor del clan Jifikuenɨ y narrada en mɨnɨka delante de los niños, una versión viva del mismo relato en La Chorrera: la pareja que duerme en el chinchorro en medio del cultivo para vigilar las trampas contra los ratones, el chinchorro que sube invisible, el frío de la madrugada, la mujer que se levanta a atizar el fogón y cae al vacío. Aporta tres cosas que la ficha no tiene: el nombre propio del antagonista y de su hermano (Fɨedamona y Kɨbaziema) y el robo de los ojos como causa; la explicación de que la plaga de la chagra fue mandada «en forma de maleficio» desde el cielo; y el destino del cuerpo caído, que se esparce y da origen a los hongos, siendo el cerebro el ekuirogó. Además obliga a mirar de nuevo la grafía: aquí Monayagona es la mujer que cae, no el brujo que manda los animales.",
    limitation:
      "Es un trabajo de grado de biología, no una edición filológica: la transcripción tiene erratas, no hay aparato crítico ni glosa línea a línea, y el relato se presenta al servicio de una tesis etnomicológica sobre el hongo. Es una versión de La Chorrera y no del quebradón Takana; en ella no aparecen ni el pájaro mochilero ni la reconstrucción del cuerpo con frutos, y el papel que la ficha da a Nofïzazima lo ocupa aquí Kɨbaziema. El PDF es texto extraíble, pero está sin paginar de forma estable.",
  }),
  bigidimaAnexo1994: source({
    title: "Anexo: Diccionario uitoto-español (Religión y mitología de los uitotos, II parte)",
    author: "Konrad Theodor Preuss; revisión léxica de Eudocio Becerra Bigïdïma y Gabriele Petersen de Piñeros",
    year: 1994,
    type: "anexo léxico (diccionario) en repositorio institucional",
    url: "https://bffrepositorio.unal.edu.co/server/api/core/bitstreams/712dddbf-7379-4981-869d-267974144d68/content",
    summary:
      "Fija con precisión lo que la ficha nombra como «Faido, el pájaro mochilero»: faido es la oropéndola o pájaro mochilero, faibe y faigibe sus plumas, faiyu su nido, fairei el árbol en que anida (el más alto de tierra firme) y Faiñuei un clan histórico llamado «Gente Árbol Mochilero». Registra también la entrada de Nofizazinama como personaje mítico con las referencias exactas a los pasajes del mito 13. Permite decir con fundamento que Faido no es un ave genérica sino una especie con nombre, nido y clan asociados, y remite a los lugares del texto donde aparece.",
    limitation:
      "Es un repertorio léxico: define y remite, no narra ni interpreta. La grafía es la del corpus mika de Preuss y no coincide con la grafía publicada en la ficha (Nofïzazima / Nofï Zazime). No cubre los frutos de la secuencia guama–uva–caímo–plátano como conjunto.",
  }),
  revisadaKanifaido1994: source({
    title: "18. Kanifaido igai — De cómo Kanifaido fue devorado (capítulo 18 de Religión y mitología de los uitotos, II parte)",
    author: "Konrad Theodor Preuss; transcripción revisada y traducción de Eudocio Becerra Bigïdïma y Gabriele Petersen de Piñeros",
    year: 1994,
    type: "capítulo de libro (texto bilingüe uitoto-español) en repositorio institucional",
    url: "https://bffrepositorio.unal.edu.co/server/api/core/bitstreams/a9df8241-da85-4724-9fee-d4ccbc92f099/content",
    summary:
      "Es una versión de hacia 1914 del mismo personaje y el hallazgo que más cambia la lectura de esta ficha: el relato no empieza con una mujer que rechaza pretendientes ni con una casa-trampa, sino con una visita de intercambio entre jefes Muinani a la maloca de Kanifaido, donde el sirviente Zekjigidama rompe la tembetá que traían de regalo; ofendidos, los Muinani lo devoran. En cambio el desenlace sí es el de la ficha: el padre —aquí Kanijogei, nombrado en las notas como dueño de los poderes mágicos— rescata al hijo con ayuda de la gente zorro, y la nota 25 del propio capítulo explica que el alma estaba «en un proceso de reconstrucción para adquirir nuevamente carácter corpóreo, pero el afán de la mujer por realizar el acto sexual lo echa todo a perder».",
    limitation:
      "Es otra versión, no la de Eudocio Becerra Bigïdïma en La Samaritana (1979) que parafrasea la ficha: aquí no hay avispas, ni prueba de pretendiente, ni viaje a embellecerse. Lo que la ficha llama «gente zorro» son los Jitidi Muinajoni, que en esta versión son aliados-pagados y a la vez devoran el loro rojo de Kanifaido. Traducción de 1994 sobre corpus de 1914 en variedad mika; PDF escaneado con OCR ruidoso en la columna en lengua. El volumen ya está citado en bloque en la ficha por otras URL.",
  }),
  revisadaIanirei1994: source({
    title: "24. Ianirei igai — El zorro pretendiente y otros pretendientes demoníacos (capítulo 24 de Religión y mitología de los uitotos, II parte)",
    author: "Konrad Theodor Preuss; transcripción revisada y traducción de Eudocio Becerra Bigïdïma y Gabriele Petersen de Piñeros",
    year: 1994,
    type: "capítulo de libro (texto bilingüe uitoto-español) en repositorio institucional",
    url: "https://bffrepositorio.unal.edu.co/server/api/core/bitstreams/9fd8dac2-1a8e-444d-8649-9cd49fefce3f/content",
    summary:
      "Es el otro relato del mismo corpus donde se cruzan los dos ingredientes de esta ficha, el pretendiente y los zorros, pero invertidos: aquí el pretendiente es el espíritu de los zorros, que se hace pasar por humano, y son los zorros quienes se llevan a la mujer para devorarla. Leído junto al mito 18 muestra que en este corpus la gente zorro no es un auxiliar fijo sino una figura ambivalente, que tan pronto rescata un alma como devora a quien llega. Da apoyo textual a la decisión de la ficha de no convertir el episodio en una regla moral sobre el deseo.",
    limitation:
      "No es una variante de Kanifaido: cambian los personajes y el argumento, y no hay reconstrucción del cuerpo ni prohibición rota. Sólo sirve como comparanda interna y así debe citarse. Verifiqué el texto del capítulo por sus menciones a zorros y pretendientes; no lo leí íntegro.",
  }),
  revisadaJoyareno1994: source({
    title: "25. Joyareño igai — La odisea de las dos hermanas (capítulo 25 de Religión y mitología de los uitotos, II parte)",
    author: "Konrad Theodor Preuss; transcripción revisada y traducción de Eudocio Becerra Bigïdïma y Gabriele Petersen de Piñeros",
    year: 1994,
    type: "capítulo de libro (texto bilingüe uitoto-español) en repositorio institucional",
    url: "https://bffrepositorio.unal.edu.co/server/api/core/bitstreams/53f91b2c-4aea-46cb-b0eb-2f21dae9c7c1/content",
    summary:
      "Es una versión de hacia 1914 de la segunda línea de esta ficha, la del extravío de las muchachas, y contiene casi todos sus eslabones: dos hermanas que salen de casa y siguen a un falso tío, las mariposas que las engañan sobre el camino, Kanimani que las esconde y las toma por esposas, el insulto de la cuñada sobre el trasero del hijo, el pariente jaguar que devora a la hermana equivocada, el hacha convertida en perseguidor, los animales pequeños que demoran al perseguidor y, al final, el cuerpo de la sobreviviente que «se convirtió en loro» y se posa en la punta del guamo imitando su voz. Confirma que la transformación en lora no es un remate de la edición sino parte antigua del relato.",
    limitation:
      "Cambian los nombres y, sobre todo, los papeles: aquí las hermanas son Rükoño y Joyareño, y es Rükoño la devorada mientras Joyareño sobrevive y se transforma —al revés de lo que dice la ficha, donde Rikoño es la sobreviviente. El tío jaguar no se llama Moifenirai sino Komizudarama, y no aparece por ningún lado la línea paralela de los patos, Kugï y Nokuerai, que en la ficha es la mitad del título. Traducción de 1994 sobre corpus mika de 1914; PDF escaneado con OCR ruidoso.",
  }),
  kneraDoboyi1992: source({
    title: "62. Doboyi ie ikakɨ (Cuento del oso hormiguero doboyi)",
    author: "Narración de Hipólito Candre Kɨneraɨ, clan Kɨnerenɨ; grabación, transcripción y traducción de Juan Álvaro Echeverri",
    year: 1992,
    type: "grabación sonora con transcripción y traducción, en archivo digital de lenguas indígenas",
    url: "https://repositorio.unal.edu.co/handle/unal/83444",
    summary:
      "Es una versión independiente del mismo relato, grabada el 22 de junio de 1992 en el río Igaraparaná a un narrador distinto y por un investigador distinto, con audio de 5:39 y transcripción, traducción y análisis lingüístico asociados. El resumen del ítem enuncia el núcleo exacto de la ficha: es la historia del pequeño oso hormiguero doboyi, a quien su suegro convirtió en esa forma. Confirma que el nudo del relato no es la pereza de una mujer sino un castigo aplicado por el suegro dentro de la relación de afinidad, y que el desenlace zoológico —el oso hormiguero— es estable entre narradores y décadas.",
    limitation:
      "Es una versión donde el transformado aparece en masculino y a quien la ficha llama Jadomacuriño, mujer, mientras que Jidobe, el suegro, no se nombra en el resumen del ítem. No pude escuchar el audio ni leer la transcripción completa: verifiqué la ficha del ítem, no el contenido íntegro del relato, de modo que no puedo afirmar si aparecen el milpés, la mano soplada ni el canasto equivocado. La colección está bajo custodia de la familia Candre Guzmán y de Juan Álvaro Echeverri, y su uso exige atender esa condición.",
  }),
  echeverriKnera1992: source({
    title: "Kɨneraɨ: Índice y sumario de la colección (Murui: Palabra de consejo de Kɨneraɨ y otras grabaciones del río Igaraparaná)",
    author: "Juan Álvaro Echeverri y Olga Lucía Montenegro (recolección); transcripciones de Juan Álvaro Echeverri y Blas Candre",
    year: 1992,
    type: "documento índice (PDF) de una colección de archivo sonoro",
    url: "https://repositorio.unal.edu.co/handle/unal/85058",
    summary:
      "Es la tabla de las 63 grabaciones de la colección y la que permite situar el relato del oso hormiguero con precisión documental: entrada 62, «Doboyi ie ikakɨ», traducida como «Cuento del oso hormiguero doboyi», fechada el 22 de junio de 1992, narrada por Hipólito Candre, de 5:39 de duración, transcrita y traducida por Juan Álvaro Echeverri. Explica también el marco de la colección —grabada en 1992 y 1993 con apoyo de la Fundación Puerto Rastrojo dentro del programa COAMA— y que dieciséis de esas grabaciones son la base de Tabaco frío, coca dulce. Para esta ficha vale como prueba de que el relato existe fuera de la publicación de origen.",
    limitation:
      "Es un índice: consigna título, fecha, narrador y duración, pero no el texto del relato ni un resumen del argumento más allá del título traducido. No permite comparar episodio por episodio con la versión de Filomena Tejada, ni verificar los nombres Jadomacuriño, Guyataiba o Jidobe.",
  }),

  // ——— Búsqueda profunda 2026-09-17 ———
  echeverriMambear2024: source({
    title: "'Mambear Coca no Es Pintarse de Verde la Boca'. Notas sobre el uso ritual de la coca amazónica",
    author: "Juan Álvaro Echeverri y Edmundo Pereira",
    year: 2024,
    type: "artículo de revista académica (Anthropológicas, UFPE, acceso abierto)",
    url: "https://periodicos.ufpe.br/revistas/index.php/revistaanthropologicas/article/view/265181",
    summary:
      "Es la única fuente nueva que resume y analiza EXACTAMENTE este relato: en las pp. 43-46 recuenta la versión que Fernando Urbina recogió en 1971 —'Las hojas de coca nacieron de Buinaiño, hija de Buinaima'—, cita los intentos fallidos de Buinaima de mambear cocas silvestres, el nacimiento de las hojas verdaderas de las liendres del cabello de la hija, la frase de Buinaima 'Yo no soy el dueño de la coca; la verdadera dueña es mi hija […]. Si vienen a llevar [coca] entonces tendrán que llevar[se] a ella', y el desenlace que la ficha hoy no publica: el pretendiente Buruziema se lleva a la hija-coca, rompe el consejo de no mirarla ni jugar con ella en el camino, ella regresa donde el padre, él cambia de nombre a Juma, se convierte en garza y queda sólo con el afrecho —de ahí la costumbre de botar el afrecho 'para el abuelo'. Además sitúa el relato dentro de una serie comparada (Nuiomaraɨ/Nuiyomaroi entre los murui; Nyake barasana; Kanumá yucuna) y formula la clave interpretativa: en los relatos murui la relación de los hombres con la coca es de AFINIDAD (suegro-yerno), no de consanguinidad, y aquí se trata de una afinidad rota. Es el argumento exacto que la ficha intuye cuando dice que la coca 'llega unida a la hija, a la escucha y a la responsabilidad'.",
    limitation:
      "Atribuye la narración a 'Octavio García' y cita la edición de Urbina de 1992 (Las hojas del poder, pp. 57-62), no Las palabras del origen; hay que saber que José Octavio García y Jitoma Zafiama son la misma persona (Urbina lo declara en Las palabras del origen) para no leerlo como un narrador distinto. El artículo es sobre el mambeo en general, no un estudio monográfico de este mito: el recuento ocupa cuatro páginas. No comenta el episodio del yarumo ni el del jefe que envía ayudantes con el detalle de la ficha.",
  }),
  recopilacionHistoria2010: source({
    title: "Historia de la coca: el manejo y sus consecuencias (Mito de la coca, uitoto mɨnɨka - español)",
    author: "Narrador: Óscar Román Enókakuiodo; recopilación y presentación: Juan Álvaro Echeverri; transcripción y traducción: Simón Román y Juan Á. Echeverri",
    year: 2010,
    type: "texto bilingüe con presentación, en revista académica (Mundo Amazónico 1, UNAL, acceso abierto)",
    url: "https://revistas.unal.edu.co/index.php/imanimundo/article/view/9408",
    summary:
      "Da la variante murui del mismo motivo —la coca como muchacha, hija de un personaje antiguo— pero con signo invertido: aquí la hija-coca es hija de Nuiomaraɨ, que recibió bien la coca del Creador pero cuyo pensamiento se cambió, y usa a su hija-coca como trampa para atraer a jóvenes incautos a su mambeadero de perdición; el joven Jumayuema debe transformar y enfriar esas trampas para volver la 'coca de perdición' en 'coca de vida'. Sirve para mostrar que en la tradición murui la coca-hija puede ser don o cebo según cómo se la reciba, que es lo que la ficha de Buinaiño plantea desde el lado positivo. La presentación de Echeverri además trae, con nombre y fecha (grabado el 28 de octubre de 2003), la lectura que los ancianos uitoto hacen hoy del relato frente al narcotráfico —'la coca tiene un espíritu dócil, que se vuelve así como uno la enseñe'—, que es el argumento que la ficha necesita para su advertencia de no equiparar la planta del relato con la cocaína.",
    limitation:
      "No es el relato de Buinaiño: ni Buinaiño ni Buinaima aparecen. Es otra versión del origen de la coca, de otro narrador, otro clan (enokayɨ) y otro río (medio Caquetá, cerca de Araracuara), no del Putumayo. Leerla como 'la misma historia' borraría la diferencia que las dos versiones justamente marcan.",
  }),
  echeverricoca2014: source({
    title: "La coca en el Amazonas: una perspectiva botánica, cultural e histórica. 'Mambear coca no es pintarse la boca de verde'",
    author: "Juan Álvaro Echeverri",
    year: 2014,
    type: "capítulo de libro (Museo Nacional de Colombia, VIII Cátedra Anual de Historia 'Ernesto Restrepo Tirado'), depositado en acceso abierto",
    url: "https://zenodo.org/records/15061875",
    summary:
      "Verifica y explica dos cosas concretas del texto publicado. Primera, el detalle del yarumo: documenta que los grupos uitoto, bora y andoque del interfluvio Caquetá-Putumayo consumen la coca como polvo de hojas tostadas mezclado con cenizas de Cecropia sciadophylla (yarumo), y que el dueño de esa planta silvestre es el gavilán —de modo que la indicación de Buinaiño sobre el yarumo no es un adorno narrativo sino el gesto que instituye la técnica real. Segunda, delimita el universo del que habla el mito: la variedad ipadu de Erythroxylum coca sólo la usan grupos del Gran Vaupés y del interfluvio Caquetá-Putumayo, con un uso radicalmente distinto del andino y del de la cocaína. Es la fuente más útil para sostener la advertencia de la ficha sin recurrir a la ONIC.",
    limitation:
      "Es un texto de síntesis botánica, histórica y etnográfica: no analiza el relato de Buinaiño ni lo menciona. Publicado por un museo a partir de una cátedra de 2003, con formato de conferencia y no de artículo arbitrado; el PDF depositado incluye el volumen entero, hay que ir al capítulo de Echeverri.",
  }),
  echeverriJiibina2003: source({
    title: "Jiibina rafue (Palabra de la coca) — colección 'Murui: Discurso de la sal (Enokakuiodo)', Archivo Digital de Lenguas Indígenas de la Amazonia (ARDILIA)",
    author: "Narrador: Óscar Romualdo Román Jitdutjaaño (Enokakuiodo); archivo curado por Juan Álvaro Echeverri, Universidad Nacional de Colombia sede Amazonia",
    year: 2003,
    type: "registro sonoro primario con transcripción y traducción, en repositorio institucional",
    url: "https://repositorio.unal.edu.co/handle/unal/82723",
    summary:
      "Es la grabación misma detrás del mito de la coca murui: audio de la narración en lengua, transcripción, traducción y archivos anotados, todo descargable, con narrador, clan y fecha declarados. Para esta ficha vale como prueba de que el origen de la coca no es sólo un texto publicado sino palabra que se dice en ocasión precisa —se cuenta cuando un joven empieza a mambear por primera vez—, lo que respalda la insistencia de la página en que la planta llega junto con la escucha y el consejo, no como mercancía.",
    limitation:
      "Corresponde a la versión de Nuiomaraɨ, no a la de Buinaiño; y es el mismo registro publicado en Mundo Amazónico 2010, de modo que como fuente añade el soporte sonoro y los archivos anotados, no un contenido nuevo. La descripción del ítem y los metadatos son consultables en abierto, pero yo no escuché el audio.",
  }),
  kneraTabaco20082: source({
    title: "Tabaco frío, coca dulce: palabras del anciano Kɨneraɨ de la Tribu Cananguchal para sanar y alegrar el corazón de sus huérfanos = Jírue diona riérue jííbina",
    author: "Hipólito Candre Kɨneraɨ y Juan Álvaro Echeverri",
    year: 2008,
    type: "libro bilingüe uitoto mɨnɨka - español (2ª ed., Universidad Nacional de Colombia), en repositorio institucional",
    url: "https://repositorio.unal.edu.co/handle/unal/70116",
    summary:
      "Muestra que Buinaiño y moo Buinaima no son sólo personajes de un relato de origen recogido por Urbina sino figuras vivas de la palabra ritual de la coca y el tabaco: en los discursos de Kɨneraɨ aparecen recurrentemente ('keiño zúuiya buinaiño', 'moo buinaima diona jiibina jagɨyɨ' — el aliento de tabaco y coca del padre Buinaima). Permite que la ficha diga que Buinaiño es 'aspecto de una fuerza materna más amplia' apoyándose en un texto indígena de primera mano y no sólo en la glosa del compilador.",
    limitation:
      "No cuenta el origen de la coca ni nombra a Buinaiño como dueña de la planta: es palabra de consejo y curación, de otro género (rafue) y de otro río (Igaraparaná). Verifiqué las apariciones de Buinaiño y Buinaima en el PDF completo; el libro es extenso y la correspondencia entre línea en lengua y traducción exige cotejar páginas enfrentadas.",
  }),
  rangelmetamorfosis2000: source({
    title: "La metamorfosis de Yiida Buinaima. Versiones de los uitotos y muinanes sobre el origen mítico y la hechura del maguaré",
    author: "Fernando Urbina Rangel, Blanca de Corredor, María Cecilia López y Tomás Román",
    year: 2000,
    type: "artículo de revista académica (Boletín Museo del Oro 46, Banco de la República, acceso abierto)",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/view/4853",
    summary:
      "Es la fuente primaria completa de este mito y no estaba citada: 37 páginas con la transcripción extensa del relato, las notas técnicas sobre hechura y uso del maguaré, los toques y sus frases onomatopéyicas, y un apéndice con dos mitos relacionados. Contiene textualmente los nudos que la ficha resume —el kuio (lombriz) escondido bajo el tiesto, los dos cuñados que se lo comen, el ambil fuerte servido en el fondo del recipiente, el vómito que devuelve loros y luego los fragmentos que se vuelven maguaré, el loro kuiodo que queda como cría y adorno de la maloca— y aporta el eslabón que la ficha no tiene: el relato es una variante del mito del Árbol de la abundancia y arranca de Monaya Tïriza, hija del jefe Monaya Jurama, amante de Kuio Buinaima, la lombriz que fecunda la tierra. También corrige tres datos de la procedencia declarada: el narrador es el Abuelo Julio RIVERA (Kúgaï Únuba), de la Nación Muinane, la grabación se hizo el 8 de junio de 1986 en la Reserva MONOCHOA (medio río Caquetá), no en Araracuara en 1985, y él narró en dialecto nïpode (uitoto) por comodidad de los traductores, aunque su lengua paterna es el muinane; Ismael Mendoza, su sobrino, hizo la traducción básica y la versión castellana se fijó en Bogotá en la última semana de marzo de 1987. El maguaré grande se nombra juaraï.",
    limitation:
      "Los autores advierten que no lograron presenciar la hechura de un maguaré ni los ritos de su uso inaugural, porque sólo ocurren cada dos generaciones entre quienes tienen ese derecho: la parte técnica se reconstruyó con dos sabedores consultados en 1986 (Octavio Guaroke y Marcelo Buinaje) y no con observación directa. El texto incorpora glosas y ordenamiento del equipo coordinador, no es una transcripción bilingüe con la lengua al frente.",
  }),
  alcocersiglo2015: source({
    title: "Un siglo de estudios sobre la literatura y los cantos rituales uitotos",
    author: "Paulina Alcocer",
    year: 2015,
    type: "artículo de revista académica (Latinoamérica. Revista de Estudios Latinoamericanos 61, UNAM, acceso abierto)",
    url: "https://latinoamerica.unam.mx/index.php/latino/article/view/53166",
    summary:
      "Recupera, desde Preuss, una hipótesis que cambia cómo se lee este mito: el toque del maguaré está concebido como las PALABRAS del maguaré, y Preuss registra que el Padre creó la lluvia con el toque de maguaré. Eso vuelve legible la insistencia del relato en que el instrumento no se inventa ni se encuentra sino que regresa desde abajo tras deuda, ingestión y devolución: lo que vuelve del agua no es un tambor sino una voz. Es la única fuente nueva que sitúa el maguaré dentro del debate sobre el estatuto ontológico de la palabra entre los uitoto.",
    limitation:
      "El maguaré ocupa dos líneas en un balance historiográfico de un siglo; no es un estudio del instrumento ni del mito de Yiida Buinaima. Es también la fuente que obliga a leer con más cuidado toda la colección de la que sale esta ficha: Alcocer recoge de Selnich Vivas Hurtado el reparo de que Urbina 'entrega algunas versiones libres y a veces bastante creativas' y 'se basa más en las traducciones que en las transcripciones de grabaciones'.",
  }),
  seifartReducing2018: source({
    title: "Reducing language to rhythm: Amazonian Bora drummed language exploits speech rhythm for long-distance communication",
    author: "Frank Seifart, Julien Meyer, Sven Grawunder y Laure Dentel",
    year: 2018,
    type: "artículo de revista académica revisada por pares (Royal Society Open Science 5(4), art. 170354, acceso abierto)",
    url: "https://royalsocietypublishing.org/doi/10.1098/rsos.170354",
    summary:
      "Aporta la prueba acústica de lo que la ficha llama 'cuerpos sonoros': el manguaré no imita vagamente la voz, transmite lengua. El análisis de un corpus de comunicación tamborileada bora del noroccidente amazónico muestra que en la duración de las pausas entre golpes se codifican cuatro unidades rítmicas que corresponden a intervalos de vocal a vocal, y que el ritmo —más que los dos tonos— es lo que hace inteligible el bora tamborileado. Justifica que el relato trate el maguaré como algo que habla y no como un objeto de percusión.",
    limitation:
      "Es sobre los bora, no sobre muinane ni uitoto, aunque son vecinos inmediatos del mismo complejo cultural, y sobre el funcionamiento acústico del instrumento, no sobre su origen mítico ni su hechura. No pude abrir el texto completo: el sitio del editor devuelve 403 a mi lector, así que verifiqué título, autores, revista, volumen, número de artículo, año y resumen contra el registro de Crossref y la página del editor, y el resumen habla de 'Bora drum communication', que es el manguaré, sin usar esa palabra.",
  }),
  cLiana2000: source({
    title: "Liana del ver, cordón del universo: el yagé",
    author: "William Torres C.",
    year: 2000,
    type: "artículo de revista académica (Boletín Museo del Oro 46, Banco de la República, acceso abierto)",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/view/4852",
    summary:
      "Es el hallazgo que saca a esta ficha del limbo bibliográfico: aporta un registro etnográfico —no literario— del mismo motivo, con nombre de sabedor. Según el abuelo Óscar Román, de la gente enókayi de la comunidad uitoto de Araracuara, el yagé se nombra unao y es a la vez un hombre, un sabio ancestral, UNAMARAI, 'en cuyo nombre está el yagé (unao)'; el dedo índice de su mano es entregado en forma de liana a los primeros hombres para hacer de ellos hombres-sabios, y bebiendo ese bejuco-índice encontraron la sabiduría y el conocimiento para gestar la cultura. Por eso sembraron una parte del bejuco y en homenaje a él lo nombraron unao, de donde salieron dos variedades, yaduma (masculina) y medora (femenina). El artículo añade la concepción del yagé como cordón umbilical del universo y el hilo invisible (níkaɨ ígaɨ) por el que se viaja a todos los espacios del cosmos. Todo esto confirma, desde fuera de Hugo Niño, el arco que la ficha declara con prudencia: Unámarai vinculado al origen del yajé y el conocimiento como lo que permite reconocer lo oculto y reorganizar relaciones.",
    limitation:
      "No comenta la reelaboración de Hugo Niño ni el capítulo 'Unámarai, padre de Yajé': trata el motivo, no el texto. Torres escribe en clave ensayística y comparada, mezcla en el mismo párrafo las prescripciones del abuelo Óscar Román con las de 'don Juan Matus' de Castaneda, lo que obliga a leerlo con reserva; no indica fecha de registro ni cita transcripción en lengua. Y no hay en él ningún enfrentamiento con un adversario: el núcleo narrativo que la ficha resume de Niño sigue sin verificación externa.",
  }),
  buinaimaMurui2019: source({
    title: "Murui - Naie Jiyakɨno - El lugar de origen",
    author: "Lucio Agga Calderón 'Kaziya Buinaima', Katarzyna I. Wojtylak y Juan Álvaro Echeverri",
    year: 2019,
    type: "texto bilingüe murui-español con glosa e introducción, en revista académica (Revista Linguíʃtica 15(1), UFRJ, acceso abierto)",
    url: "https://revistas.ufrj.br/index.php/rl/article/view/25563",
    summary:
      "Es el registro etnográfico del comienzo que Niño reelabora, narrado por un anciano y autoridad tradicional murui con transcripción en lengua, traducción y notas. Muestra que el relato de origen murui-muina no empieza por un clan sino por un lugar —el 'Hueco de la humanidad', naie jiyakɨno— de donde emergen los seres con cola como micos, a los que la avispa Kuegoma corta la cola para volverlos humanos; luego viene la anaconda Agaro formada de las placentas, derrotada por Jitoma y Kechatoma, y sólo después la humanidad recibe coca, tabaco e instrucciones para vivir bien y los clanes se dispersan por el territorio. Ese último movimiento —clanes que emergen y se subdividen— es el marco dentro del cual un clan como el yoria puede ser 'de formación posterior'. Los autores señalan además otra versión bilingüe publicada por Pereira (2012), narrada por el anciano Ángel Ortiz del clan naɨmenɨ, de San Rafael, río Caraparaná.",
    limitation:
      "En esta versión publicada los Yoriaɨ no se nombran: el texto se detiene antes del tramo de diferenciación clánica. Es la historia del clan ereiaɨ (gente de oso hormiguero), narrada desde ese clan, y los propios autores advierten que es una versión entre varias. No hay ortiga en ningún punto.",
  }),
  wojtylakgrammar20172: source({
    title: "A grammar of Murui (Bue): a Witotoan language from Northwest Amazonia (tesis doctoral, con apéndice de textos murui glosados)",
    author: "Katarzyna Izabela Wojtylak",
    year: 2017,
    type: "tesis doctoral (James Cook University), acceso abierto en el repositorio institucional",
    url: "https://researchonline.jcu.edu.au/51983/6/51983-wojtylak-2017-thesis.pdf",
    summary:
      "Contiene, en el texto T1 del apéndice (el mito de origen murui narrado por Lucio Agga Calderón), el pasaje donde aparecen los YORIAɨ, con lengua, glosa morfema a morfema y traducción: llegan cuando ya se comió la carne de Agaro y sólo alcanzan a lamer el interior de las hojas; aparecen las avispas y les pican la lengua, que queda hinchada, y desde entonces 'otros hablan de manera extraña, no pronuncian bien'. La nota del texto lo dice sin rodeos: 'El clan Yoriaɨ llegó tarde, después de que la carne de Arago había sido comida'. Es el registro documental que la ficha decía no tener: los Yoria existen en un relato murui de origen, no sólo en el índice de un libro literario, y su rasgo distintivo es haber llegado tarde al reparto y hablar distinto. La tesis también documenta el sistema de clanes con tótem y el género narrativo en que estos relatos circulan.",
    limitation:
      "Aquí los Yoriaɨ no aparecen bajo la ortiga ni ligados a ella de ningún modo: el episodio es de reparto de carne y de diferenciación dialectal. No es lo mismo que cuenta Niño, y usar este pasaje para completar su capítulo sería justamente el relleno que la ficha se prohibió. Es además una gramática: el relato aparece como corpus de ejemplo, sin análisis etnográfico. La página de registro del repositorio devuelve 403 a mi lector; verifiqué el contenido sobre el PDF institucional completo, que sí abre.",
  }),
  corsinoortiga2013: source({
    title: "La ortiga 'jakɨaɨ-yorebai': uso y manejo tradicional del clan 'eimenɨ' de La Chorrera (Amazonas)",
    author: "Walter Rogelio Buinaje Corsino",
    year: 2013,
    type: "trabajo de grado de Licenciatura en Biología (Universidad Pedagógica Nacional), acceso abierto",
    url: "https://repositorio.upn.edu.co/items/7f3251e5-0671-4da6-906c-6d9f0bfaa6ef",
    summary:
      "Escrito por un miembro del clan eimenɨ (gente de garza) de La Chorrera, documenta la ortiga uitoto en sus tres dimensiones: biológica (Urera baccifera y Urera caracasana), espiritual (mito de origen, espíritus y simbología, relación ortiga-cultura) y de manejo. El dato que más importa a esta ficha es el nombre: la ortiga se llama jakɨaɨ-yorebai, y YOREBAI es el término que está detrás del nombre colectivo Yoria. Es decir, el vínculo entre la gente y la planta que el título de Niño enuncia poéticamente tiene un fundamento léxico verificable. Trae además un relato de origen de la ortiga engarzado con el del tabaco verdadero, y consigna que la ortiga se siembra al lado de la maloca, con lo que 'a la sombra de la ortiga' deja de ser una imagen y pasa a ser una ubicación.",
    limitation:
      "Es sobre el clan eimenɨ, no sobre el yoria, y en ningún momento nombra a los Yoria ni cita a Hugo Niño: la conexión yorebai-Yoria la establezco yo por el nombre de la planta, no la afirma la fuente. Es un trabajo de pregrado con finalidad pedagógica, no una etnobotánica arbitrada, y su parte espiritual recoge la versión de un solo clan de un solo río.",
  }),
  tobonAnimalizar2010: source({
    title: "Animalizar para distinguir. Narraciones y experiencias del conflicto político armado entre la Gente de centro",
    author: "Marco Alejandro Tobón",
    year: 2010,
    type: "artículo de revista académica (Revista Colombiana de Antropología 46(1), ICANH, acceso abierto)",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/view/995",
    summary:
      "Muestra que la categoría con la que trabaja este relato sigue viva y sigue siendo clasificatoria. Documenta, con testimonios de hablantes uitoto del medio Caquetá recogidos en 2007, cómo los actores armados son nombrados con un repertorio de animales de monte —úrubui 'perro de monte', rubi/rubiniai 'gente de monte, como los tigres, gente que sabe combatir', jirárobi 'los pintados'— mientras la Gente de centro se concibe a sí misma como humanidad verdadera. Eso confirma que 'gente jaguar' no es una figura decorativa del pasado sino una manera de nombrar a quien depreda confiando sólo en su fuerza, que es justamente la moraleja con que la tortuga cierra el relato.",
    limitation:
      "El artículo es sobre el conflicto armado contemporáneo, no sobre narrativa mítica: no trata a Konago, ni a los jaguares del relato, ni cita ninguna versión del cuento. El paralelo entre la 'gente jaguar' del mito y los 'tigres de monte' del testimonio lo establezco yo; la fuente no lo formula.",
  }),
  koveyJeedo1992: source({
    title: "32. Jeedo ikakɨ / Cuento de la chucha Jeedo — colección 'Murui: Palabra de consejo de Kɨneraɨ', Archivo Digital de Lenguas Indígenas de la Amazonia (ARDILIA)",
    author: "Narrador: Vicente Cobete (Koveyɨ), del clan Izɨkɨfoɨ; archivo curado por Juan Álvaro Echeverri, Universidad Nacional de Colombia sede Amazonia",
    year: 1992,
    type: "registro sonoro primario con transcripción en lengua murui, en repositorio institucional",
    url: "https://repositorio.unal.edu.co/handle/unal/82785",
    summary:
      "Es el paralelo de género que le faltaba a esta ficha: un ikakɨ murui breve sobre animales —la historia de Zibunaiforo y su hermano Jeedo, la chucha—, grabado el 24 de agosto de 1992, con narrador, clan, audio, texto en lengua y clasificación explícita como jagaɨ / narrativa mitológica. Demuestra que relatos cortos de animales como el de Konago no son material menor ni infantil en sentido devaluado, sino una categoría reconocida y archivada del corpus murui, con los mismos requisitos de autoría que un relato de origen. Respalda la observación de la ficha de que Filomena Tejada contaba este relato 'como parte de un repertorio compartido'.",
    limitation:
      "Es otro cuento, con otro protagonista y otro narrador: no toca a Konago, ni a los jaguares, ni a la tortuga. Sirve como término de comparación de género y de tratamiento documental, no como versión del relato. Verifiqué los metadatos y el fragmento de transcripción publicados en el registro; no escuché el audio ni leí la narración completa.",
  }),
};

export function pickHuitotoSources(...entries) {
  const seen = new Set();
  const picked = [];
  for (const entry of entries) {
    const key = typeof entry === "string" ? entry : entry?.key;
    const selected = huitotoSources[key];
    if (!selected) throw new Error(`Fuente Huitoto desconocida: ${key}`);
    if (seen.has(key)) continue;
    seen.add(key);
    if (typeof entry === "string") {
      picked.push(selected);
      continue;
    }
    picked.push({
      ...selected,
      ...(entry.summary ? { summary: entry.summary } : {}),
      ...(entry.limitation ? { limitation: entry.limitation } : {}),
    });
  }
  return picked;
}
