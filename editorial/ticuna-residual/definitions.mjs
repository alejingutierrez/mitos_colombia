import { defineTicunaResidualMyth } from "./define-editorial-myth.mjs";

const records = [
  defineTicunaResidualMyth({
    slug: "origen-del-sol",
    fuentesAgotadas: "El registro propio, «El sol» en Rodríguez de Montes 1981, no está en abierto; de él sólo queda una frase del ABC del bibliotecario (2010, p. 72). Se buscó además en la monografía de González Galante (2018), en el portal del Caro y Cuervo, en todos los primarios del repo (achiote, ceniza, sol) y por WebSearch, que sólo devuelve copias de este mismo catálogo. Las demás fuentes tratan el motivo del hombre que se vuelve Sol, no esta versión.",
    sourceKeys: [
      {
        key: "colombiabibliotecario2010",
        summary:
          "P. 72, recuadro «Leyendas ticunas»: el único rastro escrito de la versión leticiana de «El sol». Dice que cierto hombre, compadecido de las personas de su tribu, sube al cielo para alumbrar y calentar el mundo; sostiene la compasión como motivo del viaje que se discute en Versiones.",
        limitation:
          "Una sola frase, sin autor ni página del libro de 1981: no menciona la madre, el achiote, las cenizas ni el regreso. La URL original da 404 y la copia del Internet Archive responde de forma intermitente (se descargó y leyó el 2026-09-22).",
      },
      {
        key: "moruapu2000",
        summary:
          "Dos versiones colombianas del origen solar: «Origen del Sol», de Dolores Noé (Ventura, 1993), en que el Sol bebe el zumo de achiote que cocina su suegra y la esposa se vuelve árbol de algodón; y «Otra versión de Sol y Luna», de Julia del Águila (1994), con la prueba de brillo que gana el Sol porque permite secar la ropa y la chambira. Son la base de Versiones.",
        limitation:
          "Son registros del trapecio amazónico y del Putumayo, no la versión de Leticia de 1981; ninguno trae a la madre quemada ni su resurrección.",
      },
      {
        key: "hohenthalTukuna19522",
        summary:
          "P. 142: el sol quema hasta carbonizar a quien se le acerca y lleva una corona de plumas rojas de la cola del guacamayo, como la de la muchacha en la fiesta de pubertad; Nimuendajú vio tres máscaras del sol con rostro humano. Transcribe el fragmento de «The Canoe of the Sun», paralelo de Similitudes. Explica además el uso del urucú (achiote) en la pintura corporal.",
        limitation:
          "Etnografía del lado brasileño, traducida al inglés; no trae un relato del origen del Sol.",
      },
      "galloMitos1993",
      {
        key: "faulhabericonografia2020",
        summary:
          "Muestra que el par Sol-Luna organiza la iconografía ticuna como oposición y complementariedad entre día y noche, claridad y oscuridad, y que los astros nacen de rupturas de reglas sociales. Da el marco de la rivalidad entre el Sol y la Luna que el relato pone en boca de la gente.",
        limitation:
          "Trabajo del lado brasileño sobre dibujos y cosmología; no transcribe un origen del Sol ni menciona Leticia.",
      },
      {
        key: "almeidaAnimalidad2018",
        summary:
          "Estudio del libro de Rodríguez de Montes en que se registra «El sol»: describe el corpus leticiano y cita con página los relatos del gavilán, los micos, Díjoma y el bufeo. Sirve para fijar qué es el registro de este relato.",
        limitation:
          "No cita ni analiza el relato del Sol.",
      },
      {
        key: "carobufeo2024",
        summary:
          "Referencia institucional del libro de 1981 que contiene «El sol»: lo presenta como corpus de literatura oral de Leticia con mitos ticuna y uitoto.",
        limitation:
          "Sólo reproduce «El bufeo»; no trae este relato.",
      },
    ],
    title: "Origen del sol",
    excerpt:
      "Un hombre bebe achiote hirviendo para llevar una luz más fuerte al cielo; el calor alcanza a su madre y después vuelve para restaurarla.",
    tags: ["ticuna", "Sol", "luz", "transformación"],
    mito: `No se distinguían bien el día y la noche, porque en el cielo sólo alumbraba la Luna. Su luz pálida no alcanzaba. La gente vivía en una penumbra que no se acababa, el cumare recogido nunca secaba del todo y las artesanías de chambira seguían húmedas y frías al tacto.

Entre esa gente andaba un hombre que iba a ser el Sol. Llevaba dentro un ardor que sólo él sentía, y lo decía en voz baja: «Yo voy a alumbrar mejor que la Luna». Los demás se reían. «¡Qué va! La Luna es diosa, nadie puede brillar más que ella».

Una noche habló con su madre, una anciana que lo quería más que a su propia vida.

—Madre, me voy de cacería. Prepáreme achiote y hiérvalo bien, para tomármelo cuando vuelva.

La madre, con miedo de perderlo en el cielo, le rogó que no se fuera.

—No me deje sola. No se aparte de este mundo.

Pero él, con su corona de plumas de guacamayo, insistió:

—Si yo voy al cielo, madre, alumbraré más que la Luna.

Llorando, ella aceptó. Preparó el achiote y lo mantuvo hirviendo, como él le había pedido. Cuando el hijo regresó de la cacería, el achiote, rojo, hervía con fuerza. Él llenó un totumo con el líquido y miró a su madre.

—Escóndase, madre. No quiero que mi calor la queme.

—No —dijo ella en voz baja, y se quedó a su lado.

Entonces él se bebió el achiote hirviendo. El calor le subió por el cuerpo y el mundo entero vaciló ante aquel resplandor. Sus plumas se volvieron rayos.

—Me voy, madre. Algún día volveré.

La madre, que no se había escondido, se volvió ceniza.

Así subió el Sol al cielo por primera vez. Llegó el día, y con él la gente pudo trabajar a la luz y al calor.

Pasó el tiempo, uno o dos años, y el Sol cumplió su promesa: bajó a la tierra a buscar a su madre. En el lugar donde la había dejado sólo encontró cenizas. Pisó con fuerza el suelo y gritó:

—¡Levántate, madre!

Las cenizas se agitaron, se alzaron en un remolino y tomaron otra vez la forma de la anciana, que se levantó sonriendo y lo miró con el mismo amor de antes.

Al verla viva, el Sol se despidió de ella sin palabras y subió al cielo para no volver a bajar.`,
    historia: `Este relato no tiene un registro publicado que se pueda consultar. Su versión propia es «El sol», uno de los relatos de Leticia que María Luisa Rodríguez de Montes reunió en Muestra de literatura oral en Leticia, Amazonas (Instituto Caro y Cuervo, 1981), y ese libro no está en abierto: el Caro y Cuervo sólo publica en línea el relato del bufeo, y ni la monografía de Andrés González Galante sobre el libro (Universidad de los Andes, 2018) ni los repositorios de tradición oral ticuna traen el pasaje del hombre que bebe achiote hirviendo, de la madre reducida a cenizas o de su regreso. Lo único que queda escrito de esa versión es una frase del ABC del bibliotecario promotor de lectura (Biblioteca Nacional y SINIC, 2010, p. 72), en el recuadro de leyendas ticunas: cierto hombre, compadecido de la gente de su tribu, sube al cielo para alumbrar y calentar el mundo.

Los elementos del relato, en cambio, sí tienen apoyo en la etnografía ticuna. Curt Nimuendajú anota en The Tukuna (1952, p. 142) que el sol, le dijeron, era caliente hasta el punto de carbonizar a quien se le acercara, y que llevaba por tocado una corona de plumas rojas de la cola del guacamayo, igual a la que usa la muchacha en su fiesta de pubertad; vio tres veces máscaras del sol talladas en madera, con rostro humano. El achiote es el urucú, el colorante rojo con que los ticuna pintan al niño cuando empieza a gatear y que, junto con el genipapo, aparece en las historias de los héroes culturales.

El origen solar por un trago de achiote tiene un registro colombiano abierto: el que narró Dolores Noé, de la comunidad de Ventura, en el río Putumayo, publicado en Historias de los abuelos de Moruapü (Asociación Eware, 2000). Allí el achiote lo cocina la suegra, no la madre, y la mujer que se queda en la tierra es la esposa. El detalle del cumare y la chambira que no secan con la sola luz de la Luna tiene su eco en el mismo libro, en la versión de Julia del Águila, donde el Sol gana la prueba de brillo porque con él la gente puede secar la ropa y la chambira.`,
    versiones: `Las versiones ticuna del origen del Sol que se pueden leer no coinciden en quién prepara el achiote ni en quién paga el precio de la subida. En la de Dolores Noé, el Sol pasa de regreso de cacería por la casa de su suegra, que está cocinando zumo de achiote; la olla se rompe, parte del zumo se le riega por el cuerpo y él se toma el resto, y a la vuelta, con una danta al hombro, recoge en una totuma lo que quedó en el suelo y se lo bebe todo. Recibe entonces un gran poder y se eleva. El suegro lo despide sin drama y la que sufre es la esposa, que no puede dormir de tristeza y termina convertida en árbol de algodón, sembrado por la suegra en un extremo de la chagra. En el relato de Leticia, en cambio, es la madre quien hierve el achiote por encargo del hijo, se niega a esconderse, queda hecha ceniza y es resucitada por él.

Cambia también el motivo del viaje. La frase que resume la versión de Leticia habla de un hombre que sube compadecido de su gente, para darle luz y calor. En la versión de Julia del Águila, en el mismo libro de Moruapü, no hay achiote ni madre: el Sol, que es de la nación guacamayo, y la Luna son primos que se tienen rabia, y se enfrentan en una prueba para ver quién brilla más. Gana el Sol porque alumbra de día y calienta.

Las tres versiones comparten un rasgo menor que dice mucho: el Sol sirve para secar. La chambira y el cumare de Leticia, la chambira que las mujeres ponen a secar desde que el Sol brilla sobre el árbol de algodón, en Dolores Noé, la ropa y la chambira de Julia del Águila. Y la corona de plumas de guacamayo del relato leticiano coincide con la que Nimuendajú describe en las máscaras del sol.`,
    leccion:
      "Quien se vuelve luz para todos no puede quedarse cerca de los que más quiere.",
    similitudes: `Entre los propios ticuna, el paralelo más curioso es el único fragmento que Nimuendajú logró grabar de «La canoa del Sol», porque ya nadie sabía contarla entera. Un muchacho que pesca solo recibe la visita del Sol, que llega en canoa y lo invita a subir. El Sol lo vuelve insensible a su calor, y el joven sigue creyendo que reman por la tierra cuando ya van por el cielo. Allí el Sol asa un pirarucú con su solo calor y, después de comer, recoge las espinas y las escamas, rearma el pez y lo devuelve vivo al agua. Es el mismo astro que carboniza a quien se le acerca, pero que puede proteger a quien él elige; en el relato de Leticia, en cambio, la madre se niega a esconderse y el calor la alcanza.

En los Andes colombianos, las crónicas recogidas por fray Pedro Simón y resumidas por Mariano Izquierdo Gallo en el panteón muisca que reproduce Eugenia Villa Posse cuentan que el primer cacique de Ramiriquí se transformó en el sol y que su tío materno, primer cacique de Sogamoso, se transformó en la luna, y que juntos crearon a los hombres. Como en el relato ticuna, el Sol fue antes un hombre con parientes en la tierra, y su subida es una transformación, no un nacimiento.

La diferencia está en el precio. El cacique muisca sube con su tío para crear; el hombre del relato de Leticia sube solo y deja atrás a una madre que tiene que resucitar.`,
    sceneHorizontal:
      "un hombre bebe de una vasija de achiote rojo humeante y comienza a elevarse sobre una chagra todavía en penumbra mientras su madre observa desde una distancia segura, sin alas, coronas ni plumas",
    sceneVertical:
      "el Sol desciende como una silueta cálida frente a un pequeño remolino de cenizas que recupera la forma de su madre, con la casa y las fibras secándose al fondo",
    researchNotes:
      "VARIANTE DECLARADA: conserva la ruta leticiana y la diferencia de origen-del-sol-tikuna; elimina alas, corona, designio estelar y deificación inventada.",
    seoTitle: "El Sol y el achiote | Variante Ticuna de Leticia",
    seoDescription:
      "Variante Ticuna de Leticia: un hombre bebe achiote, asciende como Sol, pierde a su madre por el calor y regresa para restaurarla.",
    focusKeywords: [
      "origen del Sol Ticuna Leticia",
      "Sol y achiote",
      "variante solar Ticuna",
      "madre del Sol",
      "literatura oral de Leticia",
    ],
  }),
  defineTicunaResidualMyth({
    slug: "origen-de-la-luna",
    sourceKeys: [
      "colombiabibliotecario2010",
      {
        key: "hohenthalTukuna19522",
        summary:
          "Pp. 142-143, «The Spots on the Moon»: la versión ticuna más próxima al resumen leticiano. El hermano entra de noche en la hamaca de la hermana en una maloca oscura; ella, que pinta a su hijo con genipapo, le unta la cara; él se limpia con hojas que se vuelven pájaros negros, se lava en el igarapé de São Jerônimo, que queda negro, y sube al cielo como luna.",
        limitation:
          "Es la versión del alto Solimões (Brasil), traducida al inglés; trata el motivo, no el relato de Leticia, y no trae a la madre que idea la trampa.",
      },
      {
        key: "moruapu2000",
        summary:
          "Trae dos versiones colombianas del motivo grabadas en 1994: «Origen de la Luna» de Augusto Coello (la wocha, la esposa boruga, el huito mezclado con wone) y «Otra versión de Sol y Luna» de Julia del Águila, donde la madre aconseja preparar el huito, el joven no logra quitarse la mancha en la quebrada y sube por el interior de un árbol de algodón. Es la versión que más se parece al texto leticiano en la madre y el lavado inútil.",
        limitation:
          "Son versiones del trapecio amazónico, no la de Leticia de 1981; la paginación del índice y la del cuerpo del libro no siempre coinciden en la digitalización.",
      },
      {
        key: "faulhaberestrelas2004",
        summary:
          "Documenta el incesto primordial de la Luna como origen de los astros con rostro humano, parientes de la Luna aislados en el mundo de arriba, y cita una canción de la Luna registrada en Enepü (Évare II, Brasil) en la que la muchacha, orientada por su abuela, le echa jugo de jenipapo en la cara al hermano. Sostiene la versión de la abuela y el primer paralelo de Similitudes.",
        limitation:
          "Trabajo sobre los ticuna del Brasil, centrado en iconografía y constelaciones; trata el motivo, no esta versión.",
      },
      {
        key: "faulhabericonografia2020",
        summary:
          "Asocia al Sol y a la Luna con un episodio de incesto en que la Luna, masculina, tiene relaciones con su hermana y engendra a los hermanos Woramacuri, estrellas que vistas cerca de la luna pueden anunciar el nacimiento de una mujer, y liga a la Luna con el ciclo menstrual.",
        limitation:
          "Análisis iconográfico del lado brasileño; no transcribe un relato completo ni menciona Leticia.",
      },
      {
        key: "almeidaAnimalidad2018",
        summary:
          "El único estudio abierto sobre el libro de Rodríguez de Montes en que se registra esta versión: describe el corpus leticiano y cita con página otros relatos del libro. Sirve para situar el registro y su contexto de recolección.",
        limitation:
          "No analiza ni cita el relato de la Luna; se usa sólo para fijar qué es el libro de 1981.",
      },
      "carobufeo2024",
      "boasCentral1888",
    ],
    relatoCorto:
      "El texto que se conserva es casi todo adorno: quitados los nombres que no tienen fuente, las fórmulas y las imágenes de relleno, la historia se reduce a siete pasos (el visitante nocturno, la confesión a la madre, la tintura, la marca, el lavado inútil, la subida y la luna manchada). Alargarlo obligaría a inventar escenas que ningún registro consultable sostiene.",
    title: "Origen de la luna",
    excerpt:
      "Una joven marca con tinte oscuro al visitante nocturno; al amanecer reconoce a su hermano, que no puede borrar el rostro y asciende como Luna.",
    tags: ["ticuna", "Luna", "desenmascaramiento", "ascensión"],
    mito: `Una muchacha vivía en un pueblo rodeado de selva con su madre y con su hermano mayor. Desde hacía algunas lunas, alguien la visitaba de noche. Llegaba en silencio hasta su hamaca, se acostaba junto a ella en la oscuridad y se iba antes de que pudiera saber quién era.

La muchacha vivía inquieta con ese secreto. Una noche se lo contó a su madre, y entre las dos decidieron averiguar quién era el visitante. La madre preparó una tintura negra y se la dio a la hija para que se la untara en la cara al que llegaba.

El visitante volvió. En la oscuridad, la muchacha le pasó la tintura por el rostro.

Al amanecer, con la luz, se supo todo: el hermano se despertó con la cara manchada de negro. Lleno de vergüenza, corrió al río y se lavó una y otra vez, pero la mancha no salía. La tintura se le había metido en la piel.

Cuando el pueblo despertó, él ya entendía que no había vuelta atrás. Empezó a subir, despacio, hasta perderse en el cielo, y allá arriba se convirtió en la Luna.

Desde entonces, en las noches claras, la luna sale con las manchas de aquella tintura en la cara, y desde lejos alumbra la hamaca donde duerme su hermana.`,
    historia: `Este relato no tiene un registro publicado que se pueda consultar. Su versión de Leticia forma parte de Muestra de literatura oral en Leticia, Amazonas, de María Luisa Rodríguez de Montes (Instituto Caro y Cuervo, 1981), un libro de 262 páginas que no está digitalizado en abierto: el portal de lenguas y literaturas nativas del Caro y Cuervo sólo reproduce de él el relato del bufeo, y la monografía que Andrés González Galante dedicó en 2018 a ese mismo libro, en la Universidad de los Andes, analiza otros relatos y no éste. Lo único que se puede leer de la versión leticiana son dos líneas del ABC del bibliotecario promotor de lectura, que la Biblioteca Nacional y el Sistema Nacional de Información Cultural publicaron en 2010: en la página 72, bajo el título «Leyendas ticunas», resumen que un joven comete incesto con su hermana y sube al cielo mostrando en la cara las manchas de las tinturas negras que lo delataron.

El motivo, en cambio, está bien documentado entre los ticuna, a los dos lados de la frontera. Curt Nimuendajú lo recogió en el alto Solimões y lo publicó en The Tukuna (Universidad de California, 1952), en las páginas 142 y 143, con el título «The Spots on the Moon». Lo sitúa en una de las grandes malocas antiguas, cerradas de noche por los mosquitos y por eso completamente oscuras, y el tinte es el genipapo con que las madres pintaban de negro a los recién nacidos. En el lado colombiano, Historias de los abuelos de Moruapü (Asociación Eware, 2000), compilado por Hugo Armando Camacho, Federico José Huaines y Sergio Ramos del Águila, publica dos versiones grabadas en 1994 en un taller de tradición oral, con el huito como tintura y la wocha, la hoja que ennegrece los dientes, en el origen del enredo.

Priscila Faulhaber, que estudió la cosmología ticuna del lado brasileño, muestra que el incesto de la Luna no es un episodio aislado: de él nacen los hermanos Woramacuri, dos estrellas que, cuando se ven cerca de la luna, pueden anunciar el nacimiento de una mujer.`,
    versiones: `El detalle que cambia entre los registros es quién idea la trampa. En la página de Nimuendajú la hermana está sola: duerme tan profundo que no siente nada, sólo por la mañana sabe lo que ha pasado, intenta sin éxito quedarse despierta, queda embarazada y da a luz un hijo. Es la costumbre de pintar al niño con genipapo la que le pone el tinte a mano, y una noche mete la mano en la olla y se la pasa por la cara al que llega. En la versión de Julia del Águila publicada en Moruapü, la idea es de la madre: le aconseja rallar huito, exprimirlo y dejar el zumo listo dentro del toldillo. En una canción de la Luna registrada en Enepü, en el Brasil, que recoge Faulhaber, es la abuela quien orienta a la muchacha para echarle el jugo de jenipapo en la cara.

También cambia lo que el hermano deja en la tierra al huir. Con Nimuendajú, las hojas con que se limpia se vuelven pavas de monte, anúes y otros pájaros negros, y el igarapé de São Jerônimo, donde se lava, queda negro para siempre. En Moruapü las hojas dan los pájaros bocamuchacha y locheros, en la versión de Augusto Coello, y el bocamonchado y el cuervo, en la de Julia del Águila; en las dos el joven no sube por el aire sino por el hueco del tronco de un árbol que ha mandado cortar a su cuñado.

La versión leticiana resumida en 2010 conserva lo esencial y nada más: el incesto, la tintura negra que lo descubre y la subida al cielo con las manchas en la cara. La madre que prepara el tinte y el lavado inútil en el agua coinciden con Julia del Águila; los pájaros, el árbol y el hijo no aparecen.`,
    leccion:
      "Lo que se hace a oscuras termina escrito en la cara, a la vista de todos.",
    similitudes: `El paralelo más cercano está en el mismo pueblo y trae una genealogía. Faulhaber documenta que los ticuna presentan a los cuerpos celestes con rostro humano como consanguíneos, primos, hermanos o hijos de la Luna, y que su origen evoca un incesto primordial: como castigo por la vergüenza, las divinidades aislaron a los hermanos en el mundo de arriba, donde vigilan para que la falta no se repita. La luna manchada no es un final sino el comienzo de un cielo poblado de parientes.

Lejos del Amazonas, entre los inuit de la tierra de Baffin, Franz Boas recogió en The Central Eskimo (1888) un relato casi calcado. Una muchacha es violentada de noche en la casa de cantos, con las lámparas apagadas; se ennegrece las manos con hollín y, cuando vuelve a pasar, embadurna la espalda del hombre. Al encender las luces ve que es su hermano. Huye con una tea encendida y él la persigue con otra que se apaga al caer y queda brillando apenas; los dos suben al cielo, ella convertida en el sol y él en la luna.

La estructura es la misma que en las versiones ticuna: un visitante sin rostro, una marca negra puesta a oscuras, el descubrimiento con la luz y la subida del hermano como astro menor. Lo que cambia es el papel de la mujer. En el relato inuit ella también sube y se vuelve el sol que él persigue; en las versiones ticuna se queda en la tierra y es él quien se va solo, llevando la marca.`,
    sceneHorizontal:
      "una joven junto a su hamaca acerca un cuenco de pigmento oscuro al rostro apenas visible de un visitante nocturno, con la madre observando desde la entrada y sin representar contacto sexual",
    sceneVertical:
      "un joven de rostro marcado intenta lavarse junto al río mientras sobre él un disco lunar conserva manchas oscuras, escena anterior al ascenso y distinta de la portada",
    researchNotes:
      "VARIANTE DECLARADA: elimina Ayara, Mayari, esencia de sombras y destino cósmico; conserva la ruta breve de Leticia separada de los testimonios de Moruapü.",
    seoTitle: "La marca que reveló a la Luna | Ticuna",
    seoDescription:
      "Variante Ticuna de Leticia: una joven marca al visitante nocturno, reconoce a su hermano y la huella imborrable acompaña su ascenso lunar.",
    focusKeywords: [
      "origen de la Luna Ticuna Leticia",
      "marca oscura de la Luna",
      "variante lunar Ticuna",
      "literatura oral de Leticia",
      "Luna y pigmento Ticuna",
    ],
  }),
  defineTicunaResidualMyth({
    slug: "origen-del-agua",
    sourceKeys: [
      "fonsecaContra2022",
      "hohenthalTukuna19522",
      "filhoFesta2015",
      "castroMadre2016",
      "faulhabericonografia2020",
      {
        key: "santos2010",
        summary:
          "Narra, con la voz del profesor Marcelino Noé y de los abuelos de Santa Lucía (río Cotuhé), el derribo del árbol Wone por Yoí e Ípi con ayuda de todos los inmortales, y cómo el tronco se volvió el canal del Amazonas, las ramas gruesas los afluentes y las delgadas las quebradas. Es la versión colombiana del mismo paisaje hidrográfico, sin el episodio de la ardilla.",
        limitation:
          "No incluye la ardilla, el perezoso ni el ají: el obstáculo que resuelve es otro (el corazón del árbol). Ya sostiene la ficha de la comunidad ticuna «Wone, Eware y la pesca»; aquí sólo se usa como contraste.",
      },
      "colombiaBamachiga2014",
      {
        key: "pulgarinRasgos2012",
        summary:
          "Su catálogo de corpus registra, del lado colombiano, otras grabaciones del mismo episodio con narrador: «Wone, árbol secreto», de Augusto Coello, y «Yoí e Ípi matan al tigre que devoró a Ngutapa y tumban la ceiba», transcrito y traducido por Javier Pinto Coello en 2006.",
        limitation:
          "Sólo cataloga esos relatos (título, narrador, transcriptor); no publica su texto, así que no se sabe si traen la ardilla y el perezoso.",
      },
      "gonzalezHistorias2000",
      "pulgarinmitos2011",
      {
        key: "rangelpalabras2010",
        summary:
          "Menciona el gran mito uitoto de «El árbol de la abundancia», que narra el origen de la Amazonia a partir de la tala y la múltiple resiembra del gran árbol de la vida: el paralelo de un paisaje entero salido de un árbol derribado.",
        limitation:
          "Es mitología uitoto y el libro sólo lo resume; no hay ardillas, perezoso ni formación de ríos, y la comparación no implica influencia entre los dos pueblos.",
      },
    ],
    title: "Origen del agua",
    excerpt:
      "Un árbol cubre el mundo y resiste los cortes; dos ardillas descubren al perezoso que lo sostiene y ayudan a liberar ríos y quebradas.",
    tags: ["ticuna", "agua", "árbol", "ardilla"],
    mito: `El mundo era un lugar oscuro. Una lupuna gigante, la que en lengua ticuna se llama Wochine, abría su copa por encima de todo y tapaba el cielo. Debajo de esa sombra no había muchos ríos como ahora.

Yoí quiso tumbarla para que hubiera luz. Llamó a dos especies de pájaros carpinteros y los puso a picar el tronco. Los picos golpearon la corteza, las astillas cayeron al pie de la raíz y el corte fue entrando en la madera. Pero el árbol no caía.

Algo lo sujetaba desde lo alto. Primero subió la ardilla grande, y no logró llegar hasta arriba. Después trepó la ardilla pequeña. Pasó el lugar donde se había detenido la otra, se metió entre las ramas y alcanzó la copa. Allí encontró lo que desde abajo nadie podía ver: un pelejo gigante, dormido, que tenía agarrada la copa de la lupuna con las patas de abajo y con las de arriba se agarraba del cielo. Mientras él siguiera colgado así, nadie iba a tumbar el árbol desde el suelo.

Por indicación del abuelo Yoí, la pequeña volvió a subir, esta vez con un preparado de ají picante. Llegó hasta el pelejo, le tocó la pierna para despertarlo y, cuando despertó, le echó ají en los ojos. Bajó y volvió a subir con más. Subió como cuatro veces. Cuando le echó ají en el ojo por cuarta vez, el pelejo ya no se sostenía con las patas: sólo sujetaba la lupuna con las uñas.

Abajo dijeron que ya se iba a caer. Le gritaron a la ardilla que se bajara. Ella corrió tronco abajo tan rápido como pudo, y la lupuna gigante se vino a tierra. No alcanzó a salvarse entera: las raíces le cogieron la cola, y por eso la tiene levantada hacia arriba.

Al caer, las ramas se clavaron hasta el fondo de la tierra. De allí salieron varios ríos y quebradas, como la quebrada Callarú. El tronco abrió el río Amazonas, y las ramas, las quebradas del territorio. Todos los ríos son las huellas que dejó la rama de la lupuna gigante.`,
    historia: `Este relato es ticuna y lo narró don José Aparicio Fonseca, de la comunidad Yahuma Primera Zona, en el lado peruano de la frontera que el pueblo ticuna comparte con Colombia y Brasil. Lo recogió en lengua ticuna la antropóloga Paula Letts, que trabajó para el Ministerio de Cultura del Perú en comunidades de la triple frontera, y lo tradujo al castellano Ling Cándido Serra. Se publicó primero en Woxrexcüchiga, el ritual de la pubertad en el pueblo Ticuna, libro del Ministerio de Cultura del Perú de 2016, en la página 239.

El texto que se lee en abierto está en Contra el silencio. Lenguas originarias y justicia lingüística, de Agustín Panizo, que publicó la Biblioteca Bicentenario en Lima en 2022. Ocupa las páginas 111 y 112 del capítulo La infinita mitología de los ticuna, dentro de una entrevista a Paula Letts hecha el 17 de septiembre de 2021. Letts no lo cuenta como un relato suelto sino como un eslabón: lo trae para explicar el origen de la pelazón, el baño con huito que se hace a los niños y a la muchacha que llega a la pubertad. Antes de citar al narrador resume ella el comienzo, los carpinteros y el pelejo dormido; después de la cita añade que el tronco formó el río Amazonas y las ramas las quebradas del territorio ticuna. Esas dos glosas son de Letts; la subida con el ají, las cuatro veces, la cola levantada y la quebrada Callarú son palabras de Aparicio Fonseca.

Ninguna de las fuentes consultadas habla de mezcla de tradiciones: es un episodio del ciclo de Yoí e Ípi, los héroes gemelos ticuna, y el narrador lo dijo en su lengua.`,
    versiones: `Curt Nimuendajú anotó el mismo episodio entre los ticuna del Solimões, en Brasil, y lo publicó en The Tukuna en 1952, páginas 123 y 124, con el título de la adquisición de la luz del día. Allí el árbol es una sumaúma que tapa el cielo, y Yoí la tumba con su hermano Ípi, ayudados por hormigas y comejenes. Promete a la hermana de Ípi en matrimonio a quien suba a soltarlo. La ardilla grande apenas llega a la altura del techo de una casa; la pequeña encuentra arriba a un perezoso de dos dedos y le arroja a los ojos hormigas de fuego que carga sobre su cola aplanada. El rebote del árbol le dobla la cola sobre el lomo, y la ardilla se casa con la muchacha. En esa versión la caída no forma ríos: lo que se gana es la luz.

Otra versión, reproducida sin nombre de narrador en el proyecto de danza Madre Selva de Leidy Constanza Duarte Castro (Universidad Distrital, 2016), a partir de mitos que niños de un colegio de Bogotá preguntaron a sus familias, cambia el remedio: el ají en la boca no le hace nada al perezoso y lo que lo obliga a soltar son unas hormigas llamadas twnw. El árbol cae entre relámpagos y truenos, del tronco sale el Amazonas y de las ramas lagunas y afluentes, y Yoí se mete al agua y sus salpicaduras se vuelven peces.

Edson Tosta Matarezio Filho, en su tesis de 2015 sobre la Fiesta de la Moza Nueva entre los ticuna de Brasil, trae una versión con dos obstáculos. Primero el tronco se regenera cada vez que Yoí lo corta, porque en él vive un sapo gigante, dueño del árbol, y sólo deja de crecer cuando Yoí alimenta al sapo con caza. Después está el perezoso real, agarrado al cielo desde la copa, y la ardillita le mete pimienta molida con papa roja en las uñas, las orejas, la nariz y los ojos. La caída trae la alternancia del día y la noche, y el tronco, las ramas y las hojas se vuelven el Solimões, los igarapés y los lagos.

Del lado brasileño, Priscila Faulhaber resume en 2020 un relato en que es el cielo lo que el perezoso gigante sostiene, acurrucado en la Wone: Yoí le lanza una hormiga de fuego a los ojos, el perezoso suelta el cielo, el cielo cae sobre el árbol y su peso le derrite el corazón, que se vuelve el río Amazonas.

Paula Letts sigue más allá del final: la lupuna tenía un corazón que palpitaba, un añuje lo robó y lo sembró, o lo sembró Yoí según otros, y de él creció el humarí, de cuyo fruto nació Techi, la mujer de Yoí.`,
    leccion:
      "Lo que sostiene un peso inmenso puede estar escondido donde sólo alcanza el más pequeño.",
    similitudes: `El paralelo más cercano es ticuna y está al otro lado de la frontera: la versión de Nimuendajú en el Solimões tiene la misma ardilla pequeña que sube donde la grande no llega y el mismo perezoso colgado de la copa, pero lo hace soltar con hormigas y no con ají, y el premio es una esposa y no un río.

Entre los uitoto, Fernando Urbina recuerda en Las palabras del origen (2010) el mito de El árbol de la abundancia, que narra el origen de la Amazonia a partir de la tala y la múltiple resiembra del gran árbol de la vida. También allí el paisaje entero sale de un árbol derribado; lo que cambia es que no hay una ardilla ni un guardián dormido en la copa.

Y Gómez Pulgarín, en Mundo Amazónico (2011), compara la geografía mítica ticuna con la uitoto: entre los uitoto el paisaje sale de un líquido que no cesa hasta que se inventa la arena para absorberlo; entre los ticuna, de árboles primigenios que se quemaron. En los dos casos la forma actual de la selva es el rastro de un exceso.`,
    sceneHorizontal:
      "dos ardillas ascienden por lados distintos de un árbol gigantesco que cubre el cielo mientras abajo personas y animales observan el corte del tronco, sin mostrar herramientas ceremoniales inventadas",
    sceneVertical:
      "la pequeña ardilla se aproxima con ají a un gran perezoso que une la copa con el cielo, justo antes de que el árbol caiga y se abran cintas de agua",
    researchNotes:
      "VENTANA DE CICLO: conserva el sapo como rasgo leticiano y separa las variantes de ají y hormigas; remite al expediente de Wone y Eware sin duplicarlo como certeza.",
    seoTitle: "Las ardillas y el árbol del agua | Ticuna",
    seoDescription:
      "Relato Ticuna del árbol que retenía las aguas: dos ardillas descubren al perezoso de la copa y su caída forma el Amazonas y sus afluentes.",
    focusKeywords: [
      "origen del agua Ticuna",
      "árbol de agua grande",
      "ardilla y perezoso Ticuna",
      "Wone y los ríos",
      "lupuna del Amazonas",
    ],
  }),
  defineTicunaResidualMyth({
    slug: "origen-de-los-vegetales-cultivaldos",
    fuentesAgotadas: "El registro propio, Rodríguez de Montes 1981, no está en abierto; de él sólo se lee el resumen del ABC del bibliotecario (2010, p. 72). Las demás fuentes tratan el motivo ticuna del alimento guardado en un canasto y robado para sembrarlo, no esta versión.",
    sourceKeys: [
      {
        key: "colombiabibliotecario2010",
        summary:
          "P. 72, recuadro «Leyendas ticunas», entrada «Los vegetales»: una mujer muere después de que le roban su canasta mágica, de la que sacaba yuca y plátano, y así los vegetales empiezan a nacer de manera espontánea. Es el único rastro consultable de la versión leticiana.",
        limitation:
          "Dos líneas sin autor ni página del libro de 1981; no dice nada de cáscaras, pesca, garabato, robos sucesivos ni colinos, y habla de nacimiento espontáneo. La URL original da 404 y la copia del Internet Archive responde de forma intermitente (se descargó y leyó el 2026-09-22).",
      },
      {
        key: "hohenthalTukuna19522",
        summary:
          "P. 21, la expresión «vino primero en el vatu' del venado» para las plantas antiguas; pp. 130-131, «The Acquisition of Cultivated Plants»: la anciana del árbol de yuca dulce que los hombres arrasan, el venado que guarda brotes en su canasto y Dyoi que se lo roba durante una pesca con timbó, convertido en árbol a la orilla. Es el paralelo más cercano en la escena de la pesca.",
        limitation:
          "Versión del alto Solimões (Brasil), en inglés; trata el motivo, no el relato de Leticia, y en ella la dueña del alimento no muere.",
      },
      {
        key: "moruapu2000",
        summary:
          "Dos relatos colombianos del motivo: «El venado y la historia de los alimentos», de Augusto Coello (Boyahuazú, 1993), con las cáscaras de caimo que delatan al anciano y el robo de la mochila durante la pesca con barbasco; y «El hombre Gau», de Rafael Cayetano (San Francisco, 1994), donde un joven emplumado le arrebata el canasto al dueño de los alimentos.",
        limitation:
          "Son otras historias del mismo motivo, no la versión de Leticia; en ninguna muere la dueña de la comida.",
      },
      "nacionalBamachiga2014",
      "trujilloRaices2025",
      {
        key: "almeidaAnimalidad2018",
        summary:
          "Estudio del libro de Rodríguez de Montes en que se registra «Los vegetales»: describe el corpus y su recolección en Leticia. Sirve para fijar qué es el registro de este relato.",
        limitation:
          "No cita ni analiza el relato de la canasta.",
      },
      {
        key: "carobufeo2024",
        summary:
          "Referencia institucional del libro de 1981 que contiene la versión leticiana de «Los vegetales», presentado como corpus de mitos ticuna y uitoto y de narraciones de Leticia.",
        limitation:
          "Sólo reproduce «El bufeo»; no trae este relato.",
      },
    ],
    title: "Origen de los vegetales cultivaldos",
    excerpt:
      "Una mujer obtiene alimentos de una pequeña canasta; después de sucesivos robos, ya no caen frutos listos sino brotes que deberán sembrarse.",
    tags: ["ticuna", "agricultura", "alimentos", "chagra"],
    mito: `Hubo un tiempo en que la tierra no daba de comer a la gente. No había plátano ni yuca, y ni siquiera las pepas del monte alcanzaban para calmar el hambre. La gente vivía esperando que algún día brotara a su alrededor algo que comer.

Por esos días andaba una santa que cargaba una canastica. Por los caminos donde ella pasaba, la gente encontraba cáscaras de plátano maduro, restos de un alimento que nadie había probado. Ella comía de lo que salía de su canasta, que era pequeña pero no se agotaba nunca.

«¡Ah, si pudiéramos tener de esos frutos! Qué sabroso sería», decía la gente cada vez que recogía una cáscara. Empezaron a seguirla para descubrir su secreto, y un día la encontraron sentada en silencio, sacando la comida de la canastica con unos golpecitos.

Los hombres decidieron quitársela. Uno de ellos, más avispado que los demás, se la arrebató de las manos. Sin su canasta, la santa se fue apagando de hambre hasta que murió.

El que se había quedado con la canastica la guardaba con celo. La sacudía y de ella caían plátanos, yucas, ñames y caimos, sin fin. Pero no le daba a nadie, y los demás seguían pasando hambre.

Entonces los otros tramaron robársela a él. Un día que salieron a pescar, el dueño de la canasta se entretuvo con el río lleno de peces y dejó de vigilarla. En ese momento uno de ellos la alcanzó con un garabato y escapó con ella.

Pero el nuevo dueño hizo lo mismo que el anterior: tampoco quiso compartir, y los demás volvieron a desear la canasta. Hasta que un día, al sacudirla, lo que cayó ya no fue comida sino colinos. Esos colinos se echaron al monte, y de ellos nacieron la yuca, el plátano, la caña y todas las plantas que desde entonces alimentan a la gente.`,
    historia: `Este relato no tiene un registro publicado que se pueda consultar. Su versión de Leticia está en Muestra de literatura oral en Leticia, Amazonas, de María Luisa Rodríguez de Montes (Instituto Caro y Cuervo, 1981), un libro que no se ha digitalizado en abierto: el Caro y Cuervo sólo publica en su portal el relato del bufeo, y la monografía de Andrés González Galante sobre ese corpus (Universidad de los Andes, 2018) no se ocupa de éste. Lo único legible de la versión leticiana es una frase del ABC del bibliotecario promotor de lectura (Biblioteca Nacional y SINIC, 2010, p. 72), que lo titula «Los vegetales»: una mujer muere después de que le roban la canasta mágica de la que sacaba yuca, plátano y otros alimentos, y desde entonces los vegetales empiezan a nacer de manera espontánea.

El motivo del alimento guardado en un recipiente y robado para sembrarlo, en cambio, es uno de los mejor documentados de la tradición ticuna. Curt Nimuendajú lo registró en The Tukuna (1952), en la página 21, al explicar que los ticuna llaman precolombina a una planta diciendo que «vino primero en el vatu' del venado», el canasto donde el venado guardó los brotes y semillas; y lo cuenta entero en las páginas 130 y 131, «The Acquisition of Cultivated Plants». En el lado colombiano, el abuelo Augusto Coello, de Boyahuazú, contó la historia de Iya Iya, el hombre venado dueño de la mochila de semillas, en dos libros: Historias de los abuelos de Moruapü (Asociación Eware, 2000), con una grabación de 1993, y Bamachigà. Historias del bama, que el Ministerio de Educación publicó en 2014 en edición bilingüe, escrita y traducida por Mariano Morán. El mismo libro de Moruapü trae «El hombre Gau», de Rafael Cayetano, de San Francisco (1994), y la Fundación Omacha recogió en Puerto Nariño, en Raíces sumergidas (2025), «Jau y el robo de las semillas».

En todas esas versiones el dueño del alimento es un venado con forma de hombre o un caminante que lleva la comida a cuestas, y ninguno muere por el robo: la mujer que se apaga de hambre al perder su canasta sólo aparece en la versión de Leticia.`,
    versiones: `Los registros ticuna coinciden en el robo y difieren en quién guarda la comida y en cómo se la quitan. En Nimuendajú la historia tiene dos tiempos: primero una anciana descubre un árbol que da frutos de yuca dulce, los hombres lo encuentran, lo arrasan y el árbol muere; sólo el venado, que había visto todo, guarda ramas con brotes en su canasto. Después Dyoi y sus compañeros pescan con timbó en un igarapé; Dyoi se convierte en árbol a la orilla, el venado cuelga el canasto de una de sus ramas para meterse al agua a recoger los peces muertos, y Dyoi se lo lleva. El venado, burlado, le grita que siembre en una roza nueva.

En la versión de Augusto Coello, Iya Iya es un anciano con forma de venado a quien Yoí manda para dar alimentos a los ticuna. Pide por esposa a una huérfana que lo rechaza por viejo y llagado. Cada día se sienta sobre un tronco atravesado a comer de su mochila, un caimo, luego caña, luego piña, y deja las cáscaras y los restos, que la gente prueba al volver. Un joven lo espía, y el grupo lo invita a barbasquear la quebrada; le piden que saque la mochila del agua para que no se moje, y en la edición de 2014 el ladrón se ha fabricado una horqueta para engancharla. Iya Iya les manda hacer una chagra y una fiesta, y avisa que vendrá con los animales a comer las hojas.

«El hombre Gau» y el relato de Omacha cambian la trampa: un joven se cubre de plumas y se tiende en el camino del dueño del canasto, que se detiene a examinarlo, y en el descuido se lo arrebata. El relato de Leticia es el único en que la dueña muere, el único con una cadena de robos, y el único en que la canasta termina dando colinos en lugar de comida.`,
    leccion:
      "El alimento que nadie comparte termina repartido en la tierra, al alcance de todos.",
    similitudes: `El paralelo más cercano es interno y está en el Brasil. En la versión que recogió Nimuendajú en el alto Solimões aparecen dos piezas que el relato de Leticia también tiene: el árbol o la persona que da comida y muere por la codicia de los hombres, y el robo durante una pesca, cuando el dueño cuelga su canasto y se distrae con los peces. La anciana de Nimuendajú no muere, pero el árbol de la yuca dulce sí, arrancado de raíz; y el canasto del venado lo roba Dyoi con un brazo convertido en rama, como el garabato del relato leticiano.

En Puerto Nariño, la Fundación Omacha recogió de los abuelos del resguardo la historia de Jau, un antiguo hechicero que se disfraza con plumas y se hace pequeño para tenderse en el camino de Petapeta, un hombre encantado que se vuelve venado y lleva en el lomo un costal con ñame, batata, camote, plátano, estacas de yuca y semillas de frutales. Cuando Jau le roba el costal, Petapeta le grita que siembre todo lo que hay en la bolsa, y de ahí viene el sustento de los ticuna.

En todas estas historias el alimento no se inventa: existe desde el principio, pero guardado por alguien, y tiene que ser robado para que llegue a todos. Lo que distingue a la versión de Leticia es que el robo no resuelve nada: cada ladrón repite el egoísmo del anterior, hasta que la canasta deja de dar comida y da colinos para sembrar.`,
    sceneHorizontal:
      "una mujer sentada junto a un camino de selva abre una pequeña canasta de la que aparecen yuca, plátano y caimo como formas planas, mientras varias cáscaras permiten a la gente descubrir el rastro",
    sceneVertical:
      "brotes, estacas y colinos caen de la canasta sobre una chagra recién abierta y varias manos los colocan en la tierra, sin repetir los frutos listos de la portada",
    researchNotes:
      "RESTITUCIÓN: elimina el nombre Ariana y la identidad divina; conserva la palabra santa solo como problema de transmisión castellana y separa el relato del venado.",
    seoTitle: "La canasta y los primeros cultivos | Ticuna",
    seoDescription:
      "Relato Ticuna de Leticia sobre una mujer, una canasta disputada y el momento en que los alimentos listos se convierten en brotes para sembrar.",
    focusKeywords: [
      "origen de los cultivos Ticuna",
      "mujer de la canasta",
      "vegetales cultivados Ticuna",
      "chagra y alimentos",
      "literatura oral de Leticia",
    ],
  }),
  defineTicunaResidualMyth({
    slug: "origen-del-gavilan",
    fuentesAgotadas: "Se buscaron el texto íntegro de Rodríguez de Montes 1981 (sólo hay la ficha del Caro y Cuervo y la cita de González Galante; el ABC del bibliotecario de la Biblioteca Nacional da 404), la tesis de Ramos Valenzuela 2010 sobre la pelazón en Arara (repositorio UNAL con API cerrada: no se pudo leer el texto) y Goulard 2009 en OpenEdition (desafío antibots). Ocho fuentes leídas; no se rellenó con catálogos.",
    sourceKeys: [
      {
        key: "almeidaAnimalidad2018",
        summary:
          "En las pp. 34-36 analiza «Origen del gavilán» y copia con número de página (119-121) sus pasajes: la pelazón que se prepara y la cacería con el hermano, la advertencia «algo le va a pasar», el viento que quiebra ramas, los animales que gritan «¡mi hígado!», el pedido del herido de que lo dejen «botao» y la madrugada en que se vuelve pajarito y gavilán. Resume con sus palabras la caza robada, el plato de hígado frito, la pierna arrancada, las vueltas al árbol, la chicha perdida y el empujón. Discute la lectura de la editora como castigo.",
        limitation:
          "Es una lectura académica que cita y parafrasea: no reproduce el relato entero ni nombra al informante. Lo que va entre citas es resumen del autor, con alguna ambigüedad sobre quién empuja a quién.",
      },
      "hohenthalTukuna19523",
      "caroMuestra1981",
      {
        key: "filhoFesta2015",
        summary:
          "Documenta lo que el relato da por sabido: el dueño de la fiesta, padre de la muchacha, tiene que cazar y pescar mucho, moquear y guardar la comida, y la cacería para juntar el moqueado dura semanas mientras se prepara la bebida fermentada (pp. 362-363 y 369-370). Explica por qué la demora de los hermanos arruina la fiesta y la chicha.",
        limitation:
          "Etnografía de comunidades ticuna de Brasil; no menciona este relato ni al hombre de una pierna.",
      },
      "angaritaCantos2010",
      {
        key: "gonzalezHistorias2000",
        summary:
          "En el «Origen de Metare» (atribuido a Dolores Noé, Ventura, 1993, y a Jorge Santamaría Fidelis, Caña Brava, 1996) aparece un gavilán pollero que es uno de los dos maridos de una señora y le aconseja a su esposa que no regañe a su hermana: el ave actúa como pariente con voz dentro de la casa.",
        limitation:
          "Es otro relato, del río Putumayo y de Puerto Nariño; no cuenta el origen del gavilán ni la pierna perdida. Se usa sólo como paralelo.",
      },
      "lettsContra20222",
      "faulhaberestrelas2004",
    ],
    title: "Origen del gavilán",
    excerpt:
      "Dos hermanos cazan antes de una pelazón; una comida ajena cuesta una pierna, el árbol inicia su reparación y una interrupción conduce al gavilán.",
    tags: ["ticuna", "ave", "cacería", "transformación"],
    mito: `Un hombre estaba haciendo una pelazón. Ya había cercado el sitio donde se iba a bailar, y en la casa la chicha estaba preparada para la fiesta. Faltaba la carne. Salió entonces de cacería con un hermano suyo.

Cazaron varios animales y los dejaron para seguir al otro día. En la noche casi todos desaparecieron. Uno de los hermanos quiso averiguar quién se los estaba robando, y no lo pudo descubrir.

Al día siguiente salieron otra vez. Anduvieron mucho rato por el monte y de pronto encontraron un plato de hígado frito, servido, como si alguien lo hubiera puesto allí para ellos. Uno de los hermanos tenía hambre. Tomó el plato y se comió el hígado.

—¡Ah, hermano! —le dijo el otro—. Yo creo que usted ya no está haciendo cosa buena. Algo le va a pasar.

Cuando fue de noche, como a las diez, se oyó venir algo que sonaba como un viento, quebrando ramas. Venían toda clase de animales. Ya venían unos diablos. Gritaban por el monte:

—¡Mi hígado, mi hígado!

El que había comido estaba dormido, y mientras dormía le arrancaron una pierna.

Su hermano lo cargó hasta un árbol y se puso a darle vueltas alrededor, una vuelta y otra, para que la pierna le volviera a crecer. Y la pierna creció.

Entonces llegó la mujer, enfurecida. Había estado esperando en la casa, y la chicha que tenía preparada para la pelazón ya no servía. Con la rabia empujó, y la pierna que acababa de nacer se rompió.

El hermano ya no sabía qué hacer ni adónde llevarlo. El herido le dijo:

—Déjame aquí. La única forma es que me dejes botado. Algún día me he de ir para alguna parte.

Así lo hizo, y se fue a buscar alimento. Cuando volvió de la cacería ya no lo encontró donde lo había dejado. Lo buscaba y no lo encontraba.

Hasta que una madrugada lo oyó cantar. Estaba en el aire, pero ya con plumas: se había vuelto pajarito, se había vuelto gavilán.

—Bueno, ¿qué hiciste, hermano? —le preguntó.

—No —le dijo—, es que yo ya me voy.`,
    historia: `Este relato está en Muestra de literatura oral en Leticia, Amazonas, el libro que María Luisa Rodríguez de Montes publicó con el Instituto Caro y Cuervo en 1981 a partir de grabaciones hechas en Leticia. Se titula Origen del gavilán y ocupa las páginas 119 a 121. La autora transcribió con la ortografía corriente pero conservando el habla de quienes contaban, y por eso el texto dice «taba», «cercao» y «botao»: es un relato de la selva contado en el castellano de la frontera.

El impreso no circula en línea. Lo que se puede leer de él está en la monografía de grado de Andrés González Galante, Animalidad y otredad en una muestra de literatura oral de Leticia, Amazonas, presentada en la Universidad de los Andes en 2018, que dedica sus páginas 34 a 36 a este relato: copia literalmente el arranque, la advertencia del hermano, la llegada de los animales, el pedido del herido y la metamorfosis, y resume con sus palabras lo que queda entre esas citas.

González Galante recoge también la lectura de la editora. En su introducción, Rodríguez de Montes ve en este relato la estructura de prohibición, violación y consecuencia: comer carne durante la cacería para la pelazón, comerse el hígado, perder la pierna y volverse ave. Él discute esa lectura: la transformación no llega como castigo, porque el castigo ya se cumplió y la pierna volvió a crecer; llega cuando el herido queda inválido y pide que lo dejen. Un cuerpo que no puede ir a ninguna parte se cambia por uno que puede irse a cualquiera.

La pelazón es el rito ticuna de iniciación de las muchachas, y el mismo relato lo registró Nimuendajú entre los ticuna del Solimões. Es, por tanto, un relato ticuna que en Leticia se contaba en castellano.`,
    versiones: `Curt Nimuendajú lo oyó entre los ticuna del Solimões, en Brasil, a informantes de 1941 y 1942, y lo publicó en The Tukuna en 1952, páginas 146 y 147, como El hombre de una pierna. Allí los dos hermanos cazan para una fiesta y encuentran bajo un árbol un envoltorio de hojas de asaí con un cuarto de cerdo asado y ñames cocidos. El mayor dice que debe ser comida de un demonio; el menor se come un ñame a escondidas. De noche el demonio llega preguntando por su comida y el ñame le contesta «aquí estoy» desde la barriga del que duerme. El mayor se esconde en la cumbrera, y el demonio corta la pierna con uñas como cuchillos.

La curación es más larga: el mayor unta la herida con el jugo de un árbol llamado gaütine y baila alrededor de él con el hermano a cuestas, las manos en el tronco, cantándole que le haga crecer la pierna, y repite eso con otros árboles durante semanas. Es la esposa del mayor quien, pasada la fecha de la fiesta, lo encuentra bailando y lo empuja. El menor no vuelve a casa: le aconseja a la cuñada sembrar maíz, porque la caza ya se pudrió, y se queda en una plataforma en el monte, cada vez más pequeño, hasta que le salen plumas y se vuelve vá'e, un gavilán que grita al empezar el verano. Se despide gritándole a la cuñada que siembre.

En 1929 el Capitán Félix le contó a Nimuendajú otro desenlace para el mismo comienzo: el que perdió la pierna caza con un garrote saltando en un pie y termina subiendo al cielo con los gallinazos, donde se ve todavía como Orión.`,
    leccion:
      "Un cuerpo que ya no puede volver a casa todavía puede encontrar otra manera de irse.",
    similitudes: `El paralelo más próximo es la variante que Nimuendajú oyó en 1929 al Capitán Félix: el mismo robo de comida ajena, el mismo dueño que llega de noche a llevarse una pierna, pero el mutilado no se vuelve ave sino constelación, y la pierna que le falta es la que se echa de menos en Orión. El mismo tronco narrativo da un gavilán en una casa y una estrella en otra.

En el mismo libro de Leticia, según González Galante, el origen de los micos boquiblancos también nace de la comida: unos niños a quienes les niegan la carne y les untan harina en la boca terminan convertidos en micos. En los dos relatos el alimento tomado o negado abre la puerta a la metamorfosis, pero allí la huella queda en el cuerpo del animal y aquí en su partida.

Y en Historias de los abuelos de Moruapü (2000), en el origen de Metare, que el libro atribuye a Dolores Noé y a Jorge Santamaría Fidelis, el gavilán pollero es uno de los dos maridos de una señora y le aconseja a su esposa que no regañe a la hermana: el ave es allí gente de la casa, con parentesco y con voz, como el hermano de Leticia antes de irse.

Y dentro del rito mismo: en los cantos de la pelazón que transcribió y tradujo Abel Santos en 2010, a la muchacha iniciada le cantan que se está emplumando, como cría de gavilán. La fiesta para la que cazaban los hermanos celebra con esa imagen el cambio de edad.`,
    sceneHorizontal:
      "dos hermanos en un campamento de cacería observan un trozo de hígado junto a una humareda de carne, mientras sombras no humanas permanecen entre árboles sin violencia explícita",
    sceneVertical:
      "un hermano sostiene al otro mientras rodean un gran árbol y una pierna de formas recortadas empieza a recomponerse, con la silueta de un gavilán apenas visible arriba",
    researchNotes:
      "RECOMPOSICIÓN: une dos fragmentos consecutivos de la base, elimina espíritus gritones, hechicero y libertad moral inventada, y limita la pelazón a contexto documentado.",
    seoTitle: "La pierna reparada y el gavilán | Ticuna",
    seoDescription:
      "Relato Ticuna de dos hermanos: una comida ajena cuesta una pierna, un árbol inicia su reparación y la interrupción conduce al origen del gavilán.",
    focusKeywords: [
      "origen del gavilán Ticuna",
      "hermanos y árbol reparador",
      "cacería antes de la pelazón",
      "transformación en gavilán",
      "literatura oral de Leticia",
    ],
  }),
  defineTicunaResidualMyth({
    slug: "origen-de-los-micos-boquiblancos",
    sourceKeys: [
      "almeidaAnimalidad2018",
      "ortizMuestra1981",
      {
        key: "abcBibliotecario",
        summary:
          "P. 72, bajo «Leyendas ticunas»: «Los micos boquiblancos. En un principio eran niños huérfanos a quienes nadie cuidaba y por esto se convierten en micos». Es la base de la atribución ticuna.",
        limitation:
          "Una sola línea de síntesis, sin cuñada ni harina ni hermano; no cita fuente ni informante.",
      },
      {
        key: "hohenthalTukuna1952",
        summary:
          "P. 112: la historia de aria'na, huérfana a la que el tío y su mujer no querían, llevada al cielo por ta-e'. Es el paralelo ticuna de un huérfano maltratado por el pariente que lo recibe.",
        limitation:
          "El enlace es la ficha de la editorial; el texto se consultó en la copia extraída del proyecto. Es otra historia, recogida en Brasil.",
      },
      {
        key: "moruapu2000",
        summary:
          "Publica «El mico boquiblanco y el Abuelo Hongo», narrado por Jairo Ramos Manduca en Nazareth en 1993: un mico boquiblanco va a una pelazón y rehúsa la carne de mico volador porque es su primo. Muestra el mico boquiblanco como pariente de la gente en otra historia ticuna.",
        limitation:
          "No cuenta el origen de los micos a partir de niños huérfanos; es otro relato.",
      },
      "pulgarinRasgos2012",
      "jacobGrimms1812",
      {
        key: "lopez2002",
        summary:
          "Describe la presencia ticuna en torno a Leticia y la frontera de tres países, contexto de un libro grabado en esa ciudad con informantes de orígenes mezclados.",
        limitation:
          "Es contexto; no trata este relato.",
      },
      {
        key: "icanhProfile",
        summary:
          "Sitúa al pueblo tikuna en el trapecio amazónico.",
        limitation:
          "Síntesis general sin fecha; no trata este relato.",
      },
    ],
    relatoCorto:
      "El texto de 1981 no está en abierto; se conoce por dos citas literales y la paráfrasis de una tesis de 2018. Todo lo que dan cabe en unas 160 palabras: el informante no narra la transformación ni pone diálogos, y alargarlo obligaría a inventar la escena que él calla.",
    title: "Origen de los micos boquiblancos",
    excerpt:
      "Tres niños huérfanos reciben solo caldo y harina en los labios; al abandonar la casa, la señal del engaño permanece en los micos boquiblancos.",
    tags: ["ticuna", "micos", "huérfanos", "transformación"],
    mito: `Quedaron tres niños huérfanos al cuidado de un hermano grande, que ya tenía mujer e hijos también grandes. La cuñada les tenía rabia a los pequeños y no les daba de comer.

El hermano salía de cacería. Cuando volvía con la presa, la mujer la cocinaba para sus propios hijos, y a los cuñados les daba sólo el caldo. Además hacía harina de maíz y se la untaba a los niños en la boca, para que el marido creyera que sí habían comido.

Los niños se fueron aburriendo cada vez más. Empezaron a irse de la casa, y un día ya no volvieron.

El hermano mayor comenzó a sospechar de su mujer. Cuando vio que los niños no aparecían, salió a buscarlos adonde se encontraban. Pero cuando llegó allá, ya eran micos, micos de boca blanca.

Desde ahí se formaron esos micos. Desde ahí existe el mico boquiblanco.`,
    historia: `El relato se publicó con el título «Origen de los micos boquiblancos» en Muestra de literatura oral en Leticia, Amazonas, el libro que María Luisa Rodríguez de Montes sacó en 1981 con el Instituto Caro y Cuervo. Está en las páginas 100 y 101. El libro reúne relatos grabados a habitantes de Leticia: mitos uitoto y ticuna y narraciones de la población de habla española del casco urbano y sus alrededores, ordenados por secciones temáticas.

Ese volumen no se puede leer en abierto. El texto se conoce por la tesis de Andrés González Galante, Animalidad y otredad en una muestra de literatura oral de Leticia, Amazonas, presentada en la Universidad de los Andes en 2018 bajo la dirección de María Cândida Ferreira de Almeida. En las páginas 32 y 33 González Galante copia dos pasajes del informante —el comienzo y el final— y resume lo que queda entre ellos. En los pasajes copiados se oye el castellano de quien habla: «tres niño así huérfano», «entonce», «cuando él yegó allá». La tesis no da el nombre de esa persona.

González Galante lee la historia como un mito en sentido estricto, porque desde el título promete explicar el origen de algo. Señala que la transformación nunca se cuenta: cuando el hermano llega, los niños ya son micos, y lo que une a unos y otros es la boca blanca, la misma que dejaba la harina de la cuñada. Advierte también que Rodríguez de Montes describe Leticia como un lugar de «continuo proceso de transculturación», donde conviven gentes de varias regiones de Colombia, de Perú y de Brasil.

La Biblioteca Nacional de Colombia, en el ABC del bibliotecario promotor de lectura publicado con el SINIC en 2010, pone «Los micos boquiblancos» en una lista titulada «Leyendas ticunas». De ahí viene la atribución a ese pueblo; el informante de Leticia no queda identificado.`,
    versiones: `De este relato de Leticia sólo hay dos maneras de leerlo hoy, y dicen cosas distintas. La síntesis de la Biblioteca Nacional lo reduce a una línea: en un principio eran niños huérfanos a quienes nadie cuidaba, y por eso se convierten en micos. No hay cuñada, ni caldo, ni harina, ni un hermano que salga a buscarlos. La tesis de González Galante, en cambio, recupera justo eso: la rabia de la cuñada, la presa que se queda con sus propios hijos, el caldo para los pequeños, la harina de maíz en la boca y el hermano que empieza a sospechar y llega tarde. Donde la síntesis habla de un descuido general, la cita del informante señala a una persona y un engaño.

Otros micos ticuna tienen su propia historia y no son éste. En Historias de los abuelos de Moruapü, del año 2000, Jairo Ramos Manduca, de Nazareth, contó en 1993 la de un mico boquiblanco que se va con el Abuelo Hongo a una fiesta de pelazón y, borracho de masato, se niega a recibir carne ahumada de mico volador porque es igual a la suya: es su primo. Ahí el mico boquiblanco ya existe y es tratado como pariente de la gente. En el mismo libro, otra historia termina con una tropa de micos que cae al río cuando un hombre les corta el bejuco por el que cruzaban. Ninguna de las dos cuenta cómo llegaron a ser micos los niños huérfanos.`,
    leccion:
      "Cuando el cuidado se finge, los que pasan hambre terminan por irse a otra forma de vida.",
    similitudes: `Curt Nimuendajú recogió entre los ticuna del Solimões, y publicó en 1952, la historia de una niña huérfana desde la infancia a la que el tío y la mujer de éste no querían; lloraba sola por un camino del monte hasta que una figura celeste la abrazó, la subió al cielo, la lavó y le dio el nombre de aria'na. Como los tres hermanos de Leticia, es una huérfana maltratada por el pariente que la recibe y su pareja, y sale de la casa hacia otro modo de existir; pero ella es acogida y crece, mientras que los niños se quedan para siempre en el cuerpo de un animal. En los cuentos reunidos por los hermanos Grimm, Hansel y Gretel también pasan hambre en su casa: en tiempo de escasez, la madrastra convence al padre de dejarlos en el bosque para que la comida alcance a los adultos. La diferencia es que ellos vuelven con riquezas y encuentran que la madrastra ha muerto, mientras que aquí el hermano llega cuando ya no hay regreso. El parecido está en la figura de la mujer que no alimenta a los hijos ajenos, no en el desenlace, y no indica contacto entre esas tradiciones.`,
    sceneHorizontal:
      "tres niños sentados junto a cuencos casi vacíos mientras una mano adulta marca discretamente sus labios con harina de maíz y la carne queda apartada, sin gesto caricaturesco ni violencia gráfica",
    sceneVertical:
      "tres micos boquiblancos avanzan entre ramas altas mientras abajo el hermano cazador reconoce la marca clara alrededor de sus bocas, sin convertir la escena en celebración",
    researchNotes:
      "RESTITUCIÓN: elimina montañas, sauce, bambú, Madre Tierra y final feliz; recupera caldo, harina y engaño familiar citados del corpus de 1981.",
    seoTitle: "Los niños y los micos boquiblancos | Ticuna",
    seoDescription:
      "Relato Ticuna de tres huérfanos: la cuñada oculta su hambre con harina en los labios y esa marca permanece al transformarse en micos.",
    focusKeywords: [
      "micos boquiblancos Ticuna",
      "niños huérfanos Ticuna",
      "harina en los labios",
      "transformación en micos",
      "literatura oral de Leticia",
    ],
  }),
  defineTicunaResidualMyth({
    slug: "moe-e-ipi",
    sourceKeys: [
      "lettsContra2022",
      {
        key: "santos2010",
        summary:
          "Mundo Amazónico 1, pp. 303-313: la versión del profesor Marcelino Noé (Puerto Nuevo, resguardo Putumayo-Cotuhé) del mismo episodio: el tintín siembra el corazón de Wone en el cerro Woruapü, la mujer del umarí escondida en una flauta de hueso, el hongo en el tronco del huito, el afrecho arrojado a la quebrada que pasa a llamarse Eware y la pesca con coquillos y con yuca.",
        limitation:
          "Es otro registro, del lado colombiano, y es la base de la ficha comunitaria «el-combate-del-sueno-y-la-palabra»; aquí se usa sólo para las diferencias. Llama Ariana a la mujer, nombre que no aparece en Panizo.",
      },
      "filhoamadurecimento2017",
      "goulardColores2013",
      {
        key: "moruapu2000",
        summary:
          "Publica «La canoa de Moe», narrada por Remigio Santos en San Martín de Amacayacu: el único Moe de los primarios ticuna es un joven que se casa con una lora y hace una canoa de un árbol de pescado. Sirve para mostrar que Moe no es otro nombre de Yoí.",
        limitation:
          "No contiene el episodio de Techi e Ipi; se cita sólo para separar a Moe de este relato.",
      },
      "hohenthalTukuna1952",
      "rangelpalabras2010",
      "garciaTiempo2024",
      {
        key: "lopez2002",
        summary:
          "Explica cómo el pueblo ticuna quedó repartido entre tres Estados, lo que da contexto a que un mismo episodio se cuente en Yahuma y Bufeococha (Perú), en Puerto Nuevo (Colombia) y en el Solimões (Brasil).",
        limitation:
          "Es contexto histórico y territorial; no narra este relato.",
      },
      {
        key: "icanhProfile",
        summary:
          "Sitúa al pueblo tikuna en el trapecio amazónico y su territorio transfronterizo.",
        limitation:
          "Síntesis general sin fecha; no trata este episodio.",
      },
    ],
    title: "Moe e Ipi",
    excerpt:
      "Del corazón del gran árbol nace un umarí y de su fruto aparece Techi; el conflicto de Yoí e Ípi conduce al huito, los peces y la gente.",
    tags: ["ticuna", "hermanos", "umarí", "transformación"],
    mito: `Cuando por fin cayó la lupuna gigante que tapaba el cielo, su tronco se volvió el río Amazonas y sus ramas las quebradas. Pero Yoí se dio cuenta de que el árbol derribado tenía corazón y que ese corazón seguía palpitando. Un añuje se lo robó y lo sembró; otros dicen que lo sembró el propio Yoí. De allí creció un humarí, y de un fruto del humarí nació una mujer. Se llamaba Techi, y fue la mujer de Yoí.

Un día Yoí le avisó que se iba a cazar y que ella se quedaría en la casa. Antes de salir la sopló dentro de una bocinita, un tururí, y la mujer quedó metida allí. Guardó el tururí bien escondido, para que su hermano no lo encontrara, y se fue al monte.

Apenas se fue, llegó Ipi preguntando dónde tenía Yoí escondida a su mujer. La buscó por todas partes y no daba con ella. Entonces se quitó la camisa y el pantalón y se puso a hacer morisquetas: se echaba al suelo, se levantaba, alzaba la pierna, jugaba con su propio cuerpo. Techi no aguantó y se rió. Por la risa supo Ipi dónde estaba. La sopló, ella quedó de pie en la casa, y él se acostó con su cuñada en la hamaca. Techi quedó embarazada.

Yoí se molestó. Cuando nació el niño, le mandó a Ipi buscar huito para rallarlo y sacar la pintura con que se baña el cuerpo del recién nacido. Fue como un castigo: tuvo que ir lejísimos y no lo podía conseguir. Cuando al fin subió a un árbol de huito, el árbol crecía y crecía, y ya con el fruto en la mano no sabía cómo bajar. Se metió dentro del huito y cayó con él, y siguió cayendo hasta el fondo de la tierra, donde conoció el mundo de abajo y a los seres que viven allí.

Logró volver con el fruto. Pero al rallarlo para pintar al bebé ralló también su propio cuerpo, y con esa pintura, que llevaba mezclado a Ipi, bañaron al niño. Techi botó al río lo que sobró. El afrecho del huito, apenas tocó el agua, se volvió peces: mijano de sábalo.

Yoí fue a pescarlos. Primero puso de carnada astillas de fierro y no sacó nada: sólo picaron huanganas. Por eso a la gente no le duran los dientes, porque no la pescaron con fierro. Después cebó el anzuelo con yuca blanca, y cada pescado que sacaba, al caer en tierra, se volvía persona. Esa gente llegó a ser la gente ticuna.

Entre los peces pasaba uno solo, lejos de los demás, con una mancha de color oro en la frente. Era Ipi. Yoí lo quiso pescar, pero no mordía su carnada. Amargado, le dijo a su mujer que Ipi iba a querer la carnada de ella, porque era su marido. Techi agarró la caña, echó el anzuelo y a las justas Ipi mordió. Así salió del agua.

Ya en tierra, Ipi también se puso a pescar, y los peces que él sacaba tomaban forma de gente. Todavía no había clanes. Así apareció Ipi, el que vive río arriba, y así se separaron los dos hermanos.`,
    historia: `Esta parte de la historia de Yoí e Ipi se lee en Contra el silencio. Lenguas originarias y justicia lingüística, de Agustín Panizo, que el Ministerio de Cultura del Perú publicó en diciembre de 2022 en su Biblioteca Bicentenario. Está en el capítulo «La infinita mitología de los ticuna», páginas 111 a 115, armado como una entrevista a la antropóloga Paula Letts, que trabajó para ese ministerio en comunidades ticuna del Amazonas peruano. Letts cuenta con sus palabras los pasos de la historia, y el libro intercala tres citas de narradores con nombre y comunidad, tomadas de una publicación anterior del mismo ministerio: Woxrexcüchiga, el ritual de la pubertad en el pueblo Ticuna, de 2016.

Don José Aparicio Fonseca, de la comunidad Yahuma Primera Zona, narra en ticuna la caída de la lupuna y, al final, la pesca de Ipi y la separación de los hermanos; la traducción al castellano es de Ling Cándido Serra. Don Humberto Yumbato, de la comunidad Bufeococha, cuenta en castellano cómo Yoí guarda a su mujer en el tururí y cómo Ipi la hace reír. Lo que une una cita con otra —el humarí, el castigo del huito, la caída al mundo de abajo, la pesca con yuca— es la voz de Letts. El libro no da fecha de grabación.

Letts trae el episodio porque explica un origen. La primera pintura con huito, la primera pelazón, se le hizo al hijo que Ipi tuvo con la mujer de su hermano, y esa pintura llevaba dentro el cuerpo de Ipi. Añade que algunos ven en el baño una limpieza de la falta cometida, y que otros dicen que al niño también le arrancaron el cabello. Panizo, al preguntar, compara las pruebas de Ipi con las de los héroes de las sagas nórdicas; la comparación es suya, no de los narradores.

El relato es ticuna. Lo dice el título del capítulo, y lo dicen los narradores, que hablan en primera persona del plural cuando cuentan cómo fue pescada la gente. El libro recuerda que ese pueblo vive a los dos lados de la frontera entre Perú, Colombia y Brasil.`,
    versiones: `Abel Antonio Santos publicó en 2010, en la revista Mundo Amazónico, el mismo episodio tal como lo cuenta el profesor Marcelino Noé, de Puerto Nuevo, en el resguardo Putumayo-Cotuhé, del lado colombiano. Allí el corazón del árbol lo arrebata un tintín, que lo siembra en la cima del cerro Woruapü. La mujer del fruto cae al subsuelo antes de que Yoí la recoja, y el escondite es una flauta de hueso hecha con el fémur de un enemigo inmortal. Santos le da otro nombre: Ariana. Cuando Yoí vuelve y la encuentra fuera de la flauta, la castiga mandándola a asearse con hojas de chonta, y por eso esas palmas engordan por la mitad. El obstáculo del huito no es un árbol que crece sin fin sino un hongo gigantesco en medio del tronco. Y la pesca se ordena de otro modo: con coquillos salen pecaríes y huanganas; con yuca, la gente ticuna; e Ípi, ya en tierra, pesca a las demás naciones del mundo.

En la cita de José Aparicio Fonseca la carnada fallida es de astillas de fierro, y de ese fracaso sale una explicación que la versión de Puerto Nuevo no trae: los dientes que no duran. La mancha de la frente de Ipi es de color oro en Yahuma; en Puerto Nuevo es el brillo de haberse golpeado con oro en la desembocadura del Amazonas.

Letts misma advierte que hay diferentes versiones sobre cuándo se hizo por primera vez la pintura con huito, y que sobre el sentido del baño unos dicen una cosa y otros otra. En su resumen no tienen nombre ni el árbol del que cae Ipi ni el mundo al que llega; Santos, en cambio, sí nombra la quebrada donde se arroja el afrecho, que desde entonces se llama Eware.

Del lado brasileño, Edson Matarezio Filho resume en 2017 el mismo encadenamiento —la samaumeira, la hija del umarí, Ipi que se ralla con el jenipapo, la borra que se vuelve peces— y cierra con la separación que registró Nimuendajú: los hermanos se reparten los lados del mundo, Yoí invierte la tierra de noche, e Ipi termina río abajo por el Solimões mientras Yoí se queda río arriba. En Yahuma es al revés: Ipi es el que vive río arriba. Jean-Pierre Goulard, en 2013, recuerda otra pesca: Yoí saca pecaríes de labios blancos, Ipi pecaríes de collar, y todos toman figura humana al tocar el suelo.`,
    leccion:
      "Del agravio entre hermanos y de un cuerpo deshecho en el agua puede salir gente nueva.",
    similitudes: `En el Popol Vuh de los quiché, los gemelos Hunahpú e Ixbalanqué bajan a Xibalbá, se dejan quemar, sus huesos molidos se arrojan al río y a los cinco días reaparecen en el agua con apariencia de hombres-peces antes de recobrar su figura. Como Ipi, pasan por el mundo de abajo, se deshacen en una materia que va a dar al río y regresan desde ella; la diferencia está en lo que se gana, porque allá la vuelta sirve para vencer a los señores de la muerte y aquí de esa materia sale la gente. Entre los uitoto, el mito del árbol de la abundancia que publicó Fernando Urbina cuenta que hubo que derribar un árbol inmenso y que su tronco formó el gran Amazonas y sus ramas la red de afluentes, igual que la lupuna de Yahuma. Y Panizo, al oír a Letts, pensó en los héroes nórdicos que enfrentan al dragón para ganar el favor de un rey: el parecido está en la prueba impuesta, no en su sentido, porque la de Ipi es un castigo de su propio hermano. Ninguno de estos parecidos prueba contacto entre esas tradiciones.`,
    sceneHorizontal:
      "un gran umarí crece del corazón luminoso de un árbol caído y Techi aparece junto al fruto mientras Yoí e Ípi observan desde lados distintos, sin desnudez ni símbolos ceremoniales",
    sceneVertical:
      "restos de huito caen al río y se convierten en peces, mientras una línea con yuca eleva uno que toma forma humana al tocar la orilla, sin mostrar pintura corporal",
    researchNotes:
      "CORRECCIÓN DE IDENTIDAD Y VENTANA DE CICLO: sustituye Moé y loco por Yoí e Ípi, distingue la canoa de Moe y elimina dualismo cristiano, fin del mundo e instrucciones rituales.",
    seoTitle: "Yoí, Ípi y la mujer del umarí | Ticuna",
    seoDescription:
      "Relato Ticuna de Techi, Yoí e Ípi: el corazón del árbol se vuelve umarí, el huito se transforma en peces y la pesca da origen a personas.",
    focusKeywords: [
      "Yoí Ípi y Techi",
      "mujer del umarí Ticuna",
      "huito y origen de la gente",
      "ciclo de Wone y Eware",
      "mitología Ticuna",
    ],
  }),
];

export default records;
