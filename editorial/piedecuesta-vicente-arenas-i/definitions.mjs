import { definePiedecuestaVicenteArenasIMyth } from "./define-editorial-myth.mjs";

const records = [
  definePiedecuestaVicenteArenasIMyth({
    slug: "la-mula-del-diablo",
    fuentesAgotadas: "Seis fuentes; ninguna trae el relato de Eumelia y el herrero Villamizar. Se buscó en el sumario de «Crónicas y romances» (Arenas Mantilla), en Villa Posse II, en Cuentos de espantos (2004, cuya lámina de la Mula Herrada falta en la copia digital) y en prensa con editor. «Estampas de mi tierra» (1941) no tiene copia abierta legítima.",
    sourceKeys: [
      "obregonMexico1909",
      "pastoEspantos2024",
      "compiladoraMitos19935",
      {
        key: "lopezpueblo19772",
        summary:
          "Sitúa a la mula entre los espantos andinos vecinos de Santander: al cerrar su repaso de los espantos de Tunja, Ocampo cuenta «la mula de tres patas» entre los mitos estudiados en Boyacá, junto al jinete negro, el ánima sola y la cabellona.",
        limitation:
          "Es una mención en una enumeración, sin descripción ni relato de la mula. Trata el motivo, no este relato.",
      },
      "tiempoCuentos20043",
      {
        key: "mantillaCronicas2012",
        summary:
          "Es la obra del cronista a quien el texto publicado atribuye el paseo que enmarca la leyenda. Su sumario de quince crónicas incluye «El circo Santander», uno de los lugares que nombra el preámbulo del relato, y la sinopsis describe el libro como cuadros de costumbres y hechos curiosos de Piedecuesta, Lebrija y Bucaramanga.",
        limitation:
          "La página dice «Disponible: No» y «La descarga de datos todavía no está disponible»: no hay texto. El sumario no trae ninguna crónica sobre la mula, así que la procedencia es una conjetura. Requiere curl -k por la cadena de certificados.",
      },
    ],
    title: "La mula del diablo",
    excerpt:
      "Un herrero acepta trabajar para un visitante nocturno y descubre que las monedas y la mula forman parte de una tragedia atribuida.",
    tags: ["Eumelia", "diablo", "tragedia", "transformación"],
    mito: `Pacho Villamizar era herrero en Piedecuesta y tenía el taller al borde de la bocatoma del agua. Trabajaba los domingos con la misma urgencia que cualquier martes, porque lo movía el brillo del oro. Vivía con Eumelia, una mujer tan bella que los hombres se peleaban por ella a puñetazos, y en más de una fiesta alguno quedó tendido para siempre en la calle.

Una noche de agosto, cuando Pacho ya dormía, unos golpes insistentes sonaron en la puerta de su rancho de Reyes. Afuera esperaba un hombre alto y sombrío con una mula. Necesitaba que se la herraran enseguida, a esa hora, con la prisa de quien huye.

El herrero, medio dormido todavía, no quería abrir el taller de madrugada. Entonces el forastero dejó caer sobre el mesón un puñado de monedas, que tintinearon en la madera. Pacho encendió la fragua. Maldiciendo su suerte, le fue clavando a la bestia las herraduras una por una, a golpe de martillo.

Terminado el trabajo, volvió a su cama con ganas de contarle a Eumelia la rareza de aquella noche. No pudo. Encontró el lecho convertido en un charco de sangre. Eumelia estaba muerta, y en sus pies y en sus manos tenía hundidos los mismos clavos que él acababa de meter en los cascos de la mula.

Al amanecer el pueblo entero supo lo ocurrido y se quedó inmóvil de espanto. Villamizar confesó lo que había hecho, y todos entendieron que su codicia había cargado con la vida de la mujer que amaba.

Desde entonces, cada septiembre, en las horas que preceden al alba, los vecinos del barrio despertaban con un ruido de cascos sobre el empedrado. Era Eumelia, convertida en la Mula del Diablo, que arrastraba su pena calle abajo con paso doloroso. Detrás de ella venía otro espanto, de cabello blanco, entre un estrépito de latas y tapas, y así seguían hasta que clareaba.

La gente de Piedecuesta tenía a las mulas por cosa del diablo. Se hablaba también de unos hombres temidos de Umpalá que montaban mulas y arrancaban a las piedras chispas del infierno.

Con los años llegó la luz eléctrica a las calles, y las noches dejaron de ser tan oscuras. El oficio de herrero fue desapareciendo, reemplazado por los montallantas y su repiqueteo. Los cascos de la Mula del Diablo dejaron de oírse.`,
    historia: `La historia de Eumelia y el herrero Villamizar no tiene registro publicado que pueda consultarse. Falta en las recopilaciones piedecuestanas de Germán Valenzuela Sánchez y de Vicente Arenas Mantilla, en la antología de Eugenia Villa Posse (Quito, 1993), en el boletín de la Academia Colombiana de Historia y en los periódicos locales fechables.

El texto que circula la enmarca en un paseo del cronista Vicente Arenas Mantilla por las esquinas del pueblo, y entre los lugares que nombra está el Circo Santander. Con ese mismo nombre figura una de las piezas de «Crónicas y romances», libro del cronista que la Biblioteca Mínima Santandereana recuperó en 2012. Sin embargo, entre esas quince crónicas no hay ninguna mula, y el volumen no circula en línea: su ficha dice «Disponible: No».

El motivo, en cambio, está documentado y es viejo. Luis González Obregón publicó en México viejo y anecdótico (1909) «La casa de la mujer herrada», que toma de una vida del jesuita José Vidal impresa en 1752: a un herrador lo despiertan de noche para herrar la mula de su compadre, un clérigo amancebado, y a la mañana siguiente la manceba aparece muerta con las mismas herraduras y los mismos clavos en manos y pies.

En Colombia la mula herrada es la mujer que tuvo amores con un sacerdote y de noche galopa convertida en mula. Diario del Sur la contaba en 2024 entre los espantos de Semana Santa de Pasto. Javier Ocampo López pone la mula de tres patas en su lista de mitos boyacenses (El pueblo boyacense y su folclor, 1977), y Enrique Otero D'Costa, en sus Leyendas de 1936, hace que una mula negra que echa fuego por los ojos se lleve al perulero de la Villa de Arma. El bestiario Cuentos de espantos y otros seres fantásticos del folclor colombiano (2004) reserva a la mula herrada una lámina entera, según su tabla de contenido.`,
    versiones: `Las formas registradas del motivo discrepan en quién es la mujer y en quién carga la culpa.

En la versión mexicana de González Obregón la falta es el amancebamiento. La mujer es la manceba de un clérigo; el herrador es un buen hombre que le había aconsejado a su compadre dejar esa vida, y los que traen la mula son dos negros que resultan ser demonios. La difunta aparece además con un freno en la boca y las marcas de los golpes. El clérigo huye, el cura de la parroquia entra en la Compañía de Jesús y a la mujer la entierran en secreto dentro de la casa. No hay aparición posterior: el castigo se cumple en una sola noche.

En Pasto, tal como lo recoge Diario del Sur, no hay herrero ni visitante. La mujer que se entregó a un sacerdote se vuelve mula cada noche y corre desbocada sacando chispas del pavimento; del espanto queda el galope y el resoplido bajo la ventana de un vecino que no podía dormir.

En Otero D'Costa la mula no es una mujer transformada sino la montura del enviado que viene a cobrar. El perulero Damián Vásquez Montiel había vendido su alma a cambio de riqueza, suerte en las pendencias y fortuna con las mujeres; un Viernes Santo, un jinete en una mula negrísima lo sube a la grupa y se lo lleva envuelto en fuego.

El relato de Piedecuesta toma piezas de las tres y mueve el centro. No hay clérigo: la falta es del herrero, que trabaja los domingos y abre el taller de madrugada por un puñado de monedas. Eumelia no ha hecho nada, y sin embargo es ella la que muere con los clavos y la que vuelve cada septiembre, seguida por otro espanto entre latas. Y el final no es un castigo cumplido sino un olvido: la luz eléctrica y los montallantas la borran de las calles.`,
    similitudes: `El pariente más cercano es mexicano. En «La casa de la mujer herrada», que Luis González Obregón recogió en 1909, un herrador es despertado a deshoras para herrar una mula que no es mula, y la mujer amanece muerta con las herraduras en manos y pies. La secuencia es la misma de Piedecuesta: golpes en la puerta, el trabajo hecho de mala gana, el regreso y el hallazgo. Allá el castigo cae sobre la pareja de un clérigo; aquí, sobre la mujer de un herrero codicioso.

El segundo paralelo está en las Leyendas de Enrique Otero D'Costa (1936), que Villa Posse reprodujo en 1993. En «No hay deuda que no se pague…», el perulero de la Villa de Arma cambia su alma por riqueza y buena suerte, y un Viernes Santo llega por él un jinete en una mula negrísima que echa fuego por los ojos. En los dos relatos el oro viene de un trato que no se discute, y la mula es el vehículo con que se cobra.

La imagen de las chispas también tiene registro. En el bestiario de 2004, que se declara ficción, el Jinete Negro monta un animal negro cuyas herraduras revientan contra las piedras en una lluvia de chispas; el libro lo ubica, entre otras regiones, en los dos Santanderes. Es la misma figura que en Piedecuesta se atribuía a los hombres de Umpalá.`,
    leccion:
      "La paga que se acepta sin preguntar de dónde viene puede cobrarse en lo que más se quiere.",
    sceneHorizontal:
      "fragua nocturna cerca de la bocatoma, un herrero frente a una mula oscura y un visitante vestido de negro que ofrece monedas",
    sceneVertical:
      "al amanecer, monedas sin valor junto a la fragua apagada y la silueta distante de una mula que se aleja por el camino",
    researchNotes:
      "ATRIBUCIÓN Y DAÑO: recupera el episodio de Estampas, mantiene dos cierres y evita representar heridas, probar una muerte o castigar a Eumelia mediante la voz editorial.",
    seoTitle: "La Mula del Diablo de Piedecuesta",
    seoDescription:
      "Leyenda atribuida a Vicente Arenas sobre Eumelia, un herrero, una mula nocturna y el pago engañoso de un visitante vestido de negro.",
    focusKeywords: [
      "Mula del Diablo de Piedecuesta",
      "Eumelia y el herrero",
      "leyendas de Vicente Arenas",
      "mulas encantadas de Santander",
      "Estampas de mi tierra",
    ],
  }),
  definePiedecuestaVicenteArenasIMyth({
    slug: "la-mula-maneada",
    fuentesAgotadas: "Cinco fuentes. Ninguna trae a doña Petra Agudelo. Se cotejó el índice y el texto completo de «Cuentos de espantos» (2004): su lámina «La Mula Herrada» (pp. 75-76) falta en la copia de Internet Archive y ninguna otra página nombra a Petra. La búsqueda web de los nombres propios sólo devuelve copias del texto publicado y una columna de opinión sobre una mula maneada venezolana sin fuentes folclóricas, que no se admite.",
    sourceKeys: [
      "hOYCuentos2004",
      "lopezpueblo19773",
      "lopezbrujas1989",
      "moureReminiscencias1899",
      "posadaFantasmas2008",
    ],
    title: "La mula maneada",
    excerpt:
      "Un romance recuerda una mula de medianoche y el rumor que la identificaba con Petra Agudelo, sin probar brujería ni transformación.",
    tags: ["bruja", "transformación", "misterio", "noche"],
    mito: `Cuando el reloj de la torre daba las doce, la calle empedrada se quedaba sola. Las ventanas estaban cerradas y la gente, que vivía de rezos y de costumbres fijas, sabía que las noches no eran seguras. Por los adoquines andaba la mula maneada, un espectro viejo. Era lo que quedaba de doña Petra Agudelo, la mujer de don Blas Plata.

Doña Petra había sido la bruja más temida de la comarca, y los ancianos todavía se estremecen al oír su nombre. Atacaba a los viejos. Con palabras mágicas volvía locos a los muchachos. Les chupaba la sangre a los niños. A las novias las engañaba con bebidas envenenadas. De noche se convertía en cuervo, silbaba sobre las casas y arañaba los tejados, y las dueñas de casa, asustadas, le rezaban a San Silvestre para aguantar hasta el día siguiente.

Un hombre no le tuvo miedo. Se llamaba don Juan Barbas, y no fue a buscarla con rezos sino con unas tijeras y mostaza bendita. Una noche entró en la casa de donde salían los lamentos de Petra.

Al amanecer la encontraron en el centro de la plaza. La gente se amontonó a mirarla, entre incrédula y asustada, y ella daba unos quejidos que parecían el balido de una cabra. La llevaron ante el cura. El sacerdote le echó agua bendita y le dijo, con voz de trueno:

—Te juro y te conjuro, Petra, bruja de la plaza, y en nombre de San Ciríaco voy a cortarte las alas.

Entonces la casa se llenó de un humo espeso. Unos pájaros negros entraron revoloteando, como una guardia que venía a defenderla, y todo se volvió un enredo de alas y maldiciones. Don Juan de Dios, que intentaba llevársela amarrada, peleó con todo el valor que tenía, y aun así las desgracias le cayeron encima.

Lo que pasó después nadie lo sabe bien. Unos dicen que don Juan terminó enloquecido por lo que vio aquella noche. Otros, que algo de doña Petra se quedó en el pueblo. Lo cierto es que en esas calles, cuando el reloj da la medianoche, algo de ella sigue ahí, como un eco.`,
    historia: `Ninguna obra que hoy pueda leerse registra la historia de doña Petra Agudelo. Se buscó su nombre, el de don Blas Plata y el de don Juan Barbas en el libro de leyendas de Valenzuela Sánchez (2009), en lo que circula de Arenas Mantilla, en la antología de Villa Posse que reúne a los folcloristas santandereanos, en la revista de la academia nacional de historia y en periódicos locales con fecha, sin resultado. Tampoco aparece su nombre en Cuentos de espantos y otros seres fantásticos del folclor colombiano, el libro de ficción declarada que El Tiempo y la Universidad Autónoma publicaron en 2004; su índice anuncia una Mula Herrada en las páginas 75 y 76, pero esa lámina falta en la única copia digital, y no se puede saber qué contaba.

Lo que sí está documentado son las piezas con que se arma el relato. Javier Ocampo López, en El pueblo boyacense y su folclor (1977), explica que la creencia en brujas llegó con los españoles y fue una profesión «muy socorrida» en la Colonia: unas se dedicaban a los maleficios, otras a los enyerbamientos y a dar bebidas, otras al negocio del amor. Pone en el origen a Juana García, la bruja de Santafé que Rodríguez Freyle retrató en El Carnero. La revista Semana resumió en 1989 el libro de Ocampo sobre supersticiones y agüeros colombianos: las brujas se transforman en gallinazos, en burras y en otros animales, y se las atrapa regando granos de mostaza o poniendo sal y agujas en las puertas. La nota nombra entre las más famosas a las de Floridablanca, en Santander, a pocos kilómetros de Piedecuesta.

La mula nocturna es un espanto viejo en las ciudades de los Andes. José María Cordovez Moure la registró en 1899 entre las conversaciones de atrio de la Santafé colonial: una mula herrada que recorría las calles a altas horas y nadie veía. El relato piedecuestano junta las dos figuras, la bruja que vuela y la bestia que ronda la calle, en una sola mujer.`,
    versiones: `La mula nocturna aparece con historias muy distintas según la ciudad. En la Santafé que recuerda Cordovez Moure es apenas un ruido: una mula herrada que pasa de noche y que nadie ve, sin dueño y sin culpa. Jorge Bayona Posada, en un texto que Stella Monsalve Gaitán transcribió en Fantasmas de ciudad (Archivo de Bogotá, 2008), le da un final: la mula sin jinete corre arrancando chispas al empedrado, y el galope cesa cuando aparece muerta, detrás de la ermita de Belén, una mujer conocida por su oficio de celestina, con herraduras clavadas en manos y pies. El mismo libro recoge en La Candelaria otra variante sin castigo, la de un jugador cuya mula va sola a buscarlo a la casa de juego.

La de Piedecuesta se aparta de las dos. Aquí la mujer no se vuelve mula a cambio de un pecado de alcoba: es una bruja con un catálogo de daños, que vuela en forma de cuervo, y la mula maneada es lo que queda de ella después de muerta. El nombre de la bestia no se explica; lo que sí se cuenta con detalle es la captura.

Esa captura coincide con la que describe la tradición recogida por Ocampo. Las armas de don Juan Barbas son la mostaza y las tijeras, las mismas que Semana enumera como remedios caseros contra las brujas convertidas en pájaro. Y el conjuro del cura, que promete cortarle las alas en nombre de San Ciríaco, trata a Petra como a un ave a la que hay que impedir que vuelva a volar.`,
    similitudes: `El paralelo más cercano está en Bogotá. En el texto de Bayona Posada que transcribe Monsalve Gaitán, el espanto de la mula herrada termina con una mujer muerta que lleva herraduras clavadas en las manos y en los pies: la bestia que corría de noche era ella. En Piedecuesta sucede algo parecido con doña Petra, que después de su captura queda como la mula maneada de las medianoches. En los dos casos el animal es el castigo o el residuo de una mujer que el vecindario señalaba.

El segundo paralelo es Juana García, la bruja de Santafé del siglo XVI, que Ocampo López pone al principio de todas las brujas colombianas y que Semana recuerda a partir de El Carnero. Como Petra, Juana García tiene nombre y apellido, vive en una ciudad que la conoce y termina llevada ante la autoridad. La diferencia está en el desenlace: a la bruja santafereña la juzgan, mientras que a Petra la conjuran con agua bendita y la casa se llena de pájaros negros que la defienden.

Por último, la mostaza. Los granos que se riegan para que la bruja convertida en ave se entretenga y pueda ser atrapada aparecen en el resumen que Semana hizo del libro de Ocampo, junto a la sal y a las agujas. Don Juan Barbas lleva mostaza bendita, la versión consagrada de ese remedio.`,
    leccion:
      "El miedo de un pueblo puede sobrevivir a la persona que lo causó y seguir rondando sus calles.",
    sceneHorizontal:
      "calle empedrada de Piedecuesta a medianoche, una mula de paso trabado vista desde lejos y vecinos observando desde puertas entreabiertas",
    sceneVertical:
      "tijeras y mostaza sobre una mesa junto a una ventana, mientras humo y pájaros negros atraviesan el cielo nocturno",
    researchNotes:
      "ESTIGMA Y AMBIGÜEDAD: restaura el romance de Crónicas y romances, atribuye las acusaciones y no convierte a Petra en bruja histórica ni en transformación comprobada.",
    seoTitle: "La Mula Maneada de Piedecuesta",
    seoDescription:
      "Romance de Vicente Arenas sobre una mula de medianoche y el rumor que la vinculaba con Petra Agudelo en las calles de Piedecuesta.",
    focusKeywords: [
      "Mula Maneada de Piedecuesta",
      "Petra Agudelo",
      "romances de Vicente Arenas",
      "leyendas de brujas de Santander",
      "Crónicas y romances",
    ],
  }),
  definePiedecuestaVicenteArenasIMyth({
    slug: "la-llorona-del-molino",
    title: "La Llorona del Molino",
    excerpt:
      "Cada Cuaresma, una figura llorosa sigue el canal del antiguo molino; la versión local nace de una tragedia familiar atribuida.",
    tags: ["La Llorona", "agua", "tragedia", "muerte"],
    mito: `Cerca de la plaza de Piedecuesta funcionaba un molino movido por agua del río de Oro. Un canal conducía la corriente entre huertas, árboles y la maquinaria. Ese paisaje sostiene la versión local de la Llorona del Molino.

La adaptación atribuida a Vicente Arenas dice que Don Vicente oyó o vio la figura cuando se encontraba atado a un árbol. La escena se presenta como recuerdo literario, no como testimonio corroborado.

En una casa cercana vivían Anselmo Aparicio y Natalia con sus hijos Servando, Adolfo y Dominga. La narración introduce una epidemia de viruela y afirma que Natalia y Servando murieron. No se localizaron registros que permitan confirmar nombres, parentescos, fechas o defunciones.

Después, Anselmo se une a Sinforiana. La fuente la describe desde una mirada hostil y atribuye sus acciones a celos frente al duelo que permanecía en la familia. Esta revisión no diagnostica su conducta ni presenta la violencia como rasgo natural de una mujer.

El relato cuenta que Sinforiana condujo a los niños restantes hacia el agua y provocó sus muertes. Luego murió dentro del molino. La página conserva esa secuencia de forma no gráfica, como parte de la adaptación, y no la convierte en reconstrucción criminal.

Desde entonces, durante la Cuaresma, una sombra femenina descendía por el canal. Su llanto se mezclaba con el ruido del agua y de las ruedas del molino. Jóvenes que regresaban de serenatas decían escucharla y huían antes de distinguir su rostro.

La figura no recorre ríos de toda Colombia ni pregunta por hijos sin nombre. Está ligada a este molino, a una familia nombrada por la obra y a un calendario religioso concreto. Esa especificidad justifica una página propia.

La ficha no usa la palabra locura para explicar a Sinforiana. Tampoco adopta etiquetas raciales que aparecen en algunas formas antiguas de narrar personajes. Esos recursos no aclaran el relato y pueden convertir prejuicios de época en descripción editorial actual.

El canal y el molino aportan un mecanismo sonoro plausible: agua, madera y piedra podían producir voces ambiguas durante la noche. Reconocerlo no invalida la tradición. Permite comprender por qué el llanto permanece unido al paisaje incluso cuando no se afirma una aparición real.

La nueva incorporación se apoya en la cadena de Estampas de mi tierra y en la adaptación académica. No llena los vacíos con fechas, expedientes o genealogías inventadas. También evita indicar un punto exacto para visitar, pues el entorno urbano y las obras hidráulicas han cambiado.

La Llorona del Molino queda así como una tragedia literaria sobre duelo, violencia y memoria del agua. Lo que vuelve cada Cuaresma no es una culpable demostrada, sino la manera en que un pueblo convirtió el sonido de un canal en recuerdo de pérdidas imposibles de reparar.`,
    historyCore:
      "Pérez presenta La Llorona del Molino como historia híbrida adaptada de Estampas de mi tierra, páginas 243 a 247, y la clasifica como ecoambiental. El libro atribuye a Don Vicente la experiencia y nombra a la familia; no se localizaron expedientes sobre epidemia, defunciones, violencia o molino que corroboren la secuencia.",
    versionCore:
      "El núcleo local conserva plaza, molino de agua, Anselmo, Natalia, Servando, Adolfo, Dominga, Sinforiana, pérdidas familiares y llanto cuaresmal en el canal. La revisión la incorpora sin fusionarla con Lloronas de otras regiones, sin diagnosticar a la mujer y sin representar o narrar gráficamente la muerte de los niños.",
    similarityCore:
      "La Llorona del Molino comparte con muchas Lloronas colombianas el agua, el llanto femenino y la memoria de niños muertos. Se distingue por el molino urbano, el canal del río de Oro, la familia nombrada y la aparición durante la Cuaresma. El ruido hidráulico la acerca a leyendas ecoambientales donde un paisaje produce sonidos interpretados como voces. La similitud temática no demuestra una genealogía común, no autoriza a importar frases o castigos de otras Lloronas y tampoco convierte a Sinforiana en una persona histórica culpable.",
    leccion:
      "Recordar una tragedia exige atribuirla con cuidado y no reproducir prejuicios contra sus personajes.",
    sceneHorizontal:
      "antiguo molino de agua junto a huertas de Piedecuesta al anochecer, con una figura femenina distante siguiendo el canal",
    sceneVertical:
      "canal del río de Oro durante la Cuaresma, rueda de molino detenida y ondas de sonido sugeridas sobre el agua sin mostrar daño",
    researchNotes:
      "INCORPORACIÓN SENSIBLE: recupera la variante faltante del molino, conserva la cadena de Estampas y evita diagnósticos, etiquetas raciales, violencia gráfica y ubicación privada.",
    seoTitle: "La Llorona del Molino de Piedecuesta",
    seoDescription:
      "Versión local de la Llorona ligada al antiguo molino de Piedecuesta, su canal de agua y una tragedia familiar atribuida a Vicente Arenas.",
    focusKeywords: [
      "Llorona del Molino de Piedecuesta",
      "molino del río de Oro",
      "leyendas de Vicente Arenas",
      "Llorona de Santander",
      "leyendas de Cuaresma",
    ],
  }),
  definePiedecuestaVicenteArenasIMyth({
    slug: "la-mechuda",
    fuentesAgotadas: "Seis fuentes. El candidato directo («El mechudo de \"Juan Rodríguez\"», en «Crónicas y romances») sólo existe como ficha editorial sin texto; «Estampas de mi tierra» (1941) no tiene copia abierta legítima. Villa Posse II y Cuentos de espantos (2004) no traen una mechuda de Piedecuesta. No se halló prensa santandereana digitalizada que la nombre.",
    sourceKeys: [
      {
        key: "mantillaCronicas2012",
        summary:
          "Es la única obra que nombra algo parecido al relato: la última de sus quince crónicas se titula «El mechudo de \"Juan Rodríguez\"». La sinopsis presenta el libro como cuadros de costumbres y hechos curiosos de Piedecuesta, Lebrija y Bucaramanga, el registro en que caben los nombres de vecinos, las fiqueras y el brujo de la mechuda.",
        limitation:
          "La página dice «Disponible: No» y «La descarga de datos todavía no está disponible»: no hay texto. El título dice «mechudo», en masculino, y nombra a un «Juan Rodríguez» que no está en el relato; la identidad es probable, no comprobada. Requiere curl -k.",
      },
      "compiladoraMitos19933",
      "compiladoraMitos19934",
      "moralesFolclor2013",
      "lopezpueblo19772",
      "tiempoCuentos20042",
    ],
    title: "La mechuda",
    excerpt:
      "Antoninito y Balbino oyen dos alaridos junto al Puente de Plata y huyen de un bulto apenas visible al lado de una palma.",
    tags: ["miedo", "amistad", "noche", "Piedecuesta"],
    mito: `Antoninito y Balbino iban una noche por Piedecuesta cuando el reloj de la iglesia vieja daba las nueve. Cruzaron la quebradita menuda que corre bajo el Puente de Plata, fumando sin prisa, con el paso descuidado de quien cree que el mundo le pertenece. Iban a un baile en casa de las fiqueras de Villanueva, donde una de ellas celebraba su matrimonio con ñor Ceferino Ríos, el brujo del Alto de Vacas.

Frente a la casa de Oviedo, Balbino se detuvo en seco. Se acomodó la corbata y murmuró, más para sí que para el amigo:

—Yo sí bailo es con Maruja, y esta noche una vaina ha de pasar.

Antoninito, que solía poner la cordura en aquella pareja, se apresuró a atajarlo:

—Deja esas chocheras malas. Ya sabes que si Segundo la pretende, tú mejor saludas, y bailas con Petronila, con Zoila o con Nicasia. No es de caballeros armar lío donde están las Garzas, las Muelalinda y las demás.

No alcanzó a convencerlo. Un aullido feroz rasgó la calma de repente, subiendo desde el fondo de la quebrada. Los dos se volvieron hacia la espesura. Contra una palma se recortaba un bulto oscuro, con los cabellos alborotados por un viento que ellos no sentían.

—Santo Dios, es la mechuda —susurró Balbino, como si temiera que el aire lo delatara—. Recemos, es lo mejor, si no, ese espanto nos traga.

El miedo fue más rápido que la oración. Echaron a correr por el camino y no pararon hasta caer sin aliento en la sala de las fiqueras, en medio de la fiesta.

El pánico se regó entre los invitados. Eulogia Plata, una anciana que sabía de remedios, hizo lo que pudo. Les dio fricciones de tuétano con albahaca, los besó en la frente, les puso fomentos calientes en el pecho y en la espalda y les hizo tragar hierbas. Nada les quitó el espanto de los ojos, abiertos y fijos.

Cuando el alba empezó a rayar sobre Piedecuesta, los dos amigos seguían tendidos bajo sábanas blancas, con la cabeza amarrada, más parecidos a difuntos que a muchachos de fiesta.

Al día siguiente, enterado todo el pueblo, un gentío llenó la casa de las fiqueras. Todos querían oír a los que habían vuelto del borde del otro mundo. Antoninito y Balbino, arrepentidos, contaron su encuentro con la mechuda con la voz todavía temblorosa.

Donde cayeron, la gente levantó una cruz alta con un letrero que decía: «Aquí, escapitas nos matan».`,
    historia: `Para este relato no hay registro publicado consultable, aunque sí un candidato con nombre. El sumario de «Crónicas y romances», del cronista piedecuestano Vicente Arenas Mantilla, cierra con una pieza titulada «El mechudo de "Juan Rodríguez"». La editorial de la Universidad Industrial de Santander lo volvió a imprimir hace poco más de una década y lo describe como cuadros de costumbres y hechos curiosos de Piedecuesta, Lebrija y Bucaramanga. Nadie puede leerlo hoy en línea, porque la casa editora no ofrece ni ejemplares ni descarga, y el otro título del autor, «Estampas de mi tierra» (1941), tampoco tiene copia abierta. No se sabe, por eso, si aquel mechudo es esta mechuda.

Bien documentado está, en cambio, el espanto greñudo de las aguas y los montes andinos. Juan de Dios Arias, en «Folclor santandereano» (1954), describe la Mancarita tal como la oyó de niño a los campesinos de Guanentá: una mujer salvaje de cabellera larga y desgreñada, cuerpo peludo, que de noche grita en tono lúgubre y hasta se arrima a las viviendas. Ese capítulo pasó en 1993 a la antología que Eugenia Villa Posse editó en Quito.

En esa misma antología, Misael Devia Morales registra la palabra: en el Tolima, cuando el Mohán se mezclaba con los pescadores tomando la forma de uno conocido, los campesinos decían «el mechudo estuvo con nosotros anoche, compadre». Javier Ocampo López cuenta la cabellona y la dama peluda entre los mitos estudiados en Boyacá (1977). Y el bestiario ilustrado de 2004, Cuentos de espantos, confesadamente ficticio, dibuja a la Llorona con una cabellera muy larga y desordenada, rondando quebradas y pozos, y dedica una lámina a la Cabellona.`,
    versiones: `El espanto de pelo largo tiene en los Andes colombianos varios cuerpos, y los registros no coinciden en su sexo, su lugar ni su amenaza.

En Santander, Arias recoge al menos tres Mancaritas. La de los campesinos de Guanentá es una mujer salvaje de una sola mama, pies vueltos hacia atrás y cabellera desgreñada, que grita de noche; unos dicen que es tímida y huye de la gente y de los perros, otros que se roba a los niños. La del anciano que habló con Manuel Ancízar en un páramo es un salvaje que remeda voces humanas, de hombre, de mujer o de niño, para arrastrar a quien lo sigue. Y la de Samuel Ortiz ni siquiera es un espanto: es Rita, una forastera manca, parlanchina y sin oficio, de los valles del Río Frío.

En el Tolima de Devia el mechudo es varón: es el Mohán, dueño de los charcos del Magdalena, que en Coyaima tiene espesa y larga pelambrera negra y en Ambalema barba y pelo rojizos. Su amenaza no es el grito sino la confusión: toma la forma de un pescador conocido y nadie sabe después quién estuvo dónde.

Los recuadros técnicos de Cuentos de espantos (2004) separan dos figuras. La Llorona tiene la cabellera muy larga y desordenada y el rostro de calavera, y su llanto y sus gritos producen escalofríos sin tocar a nadie. La Cabellona, en cambio, llega por una carta fechada en Frontino en 1971 y se ensaña con los violadores.

La mechuda de Piedecuesta queda cerca de la Mancarita de Arias: es un bulto oscuro de cabellos alborotados, junto a una quebrada, que se anuncia con un aullido. Como la Llorona del libro de 2004, no toca a nadie. El daño lo hace el susto, y la cruz se levanta donde cayeron los muchachos, no donde apareció ella.`,
    similitudes: `El paralelo más cercano está en Santander. La Mancarita que describe Juan de Dios Arias para la provincia de Guanentá es una mujer salvaje de cabellera larga y desgreñada que de noche se hace oír con un grito lúgubre y prolongado, y que a veces se acerca a las viviendas. La mechuda de Piedecuesta tiene los mismos rasgos esenciales: la cabellera suelta, la hora nocturna, el grito antes que el cuerpo. La diferencia es de escala: la Mancarita es un ser de selvas y páramos que roba niños; la mechuda asusta a dos muchachos junto a una quebrada del pueblo, camino de un baile.

El segundo paralelo es la Llorona tal como la dibuja el recuadro técnico de Cuentos de espantos (2004): figura de mujer con una cabellera muy larga y desordenada, que habita quebradas, pozos y orillas de los montes, y cuyo llanto y cuyos gritos producen escalofríos aunque no agreda físicamente a nadie. Las dos se aparecen junto al agua, las dos castigan con el miedo y no con la mano, y en las dos la víctima es el que anda de noche con malas intenciones: la Llorona espanta a borrachos e infieles, y Balbino iba decidido a que esa noche pasara algo con Maruja.

El nombre tiene su propia historia. En el Tolima, según Misael Devia, «mechudo» era el modo en que los campesinos llamaban al Mohán cuando se colaba entre ellos.`,
    leccion:
      "Un grito en la oscuridad basta para torcer una noche que prometía baile y conquista.",
    sceneHorizontal:
      "Antoninito y Balbino cruzan el Puente de Plata hacia Villanueva mientras un pequeño bulto se distingue junto a una palma y el arroyo",
    sceneVertical:
      "al amanecer, una cruz sencilla marca el borde del arroyo mientras los dos amigos relatan el susto desde una casa cercana",
    researchNotes:
      "RESTAURACIÓN ICONOGRÁFICA: vuelve al bulto y los alaridos del romance; retira cabellera, cuerpo gigante, ataque y transformación no documentados.",
    seoTitle: "La Mechuda de Piedecuesta",
    seoDescription:
      "Romance de Antoninito y Balbino, quienes oyeron dos alaridos y vieron un bulto junto al Puente de Plata camino a Villanueva.",
    focusKeywords: [
      "Mechuda de Piedecuesta",
      "Antoninito y Balbino",
      "Puente de Plata",
      "romances de Vicente Arenas",
      "leyendas de Villanueva",
    ],
  }),
  definePiedecuestaVicenteArenasIMyth({
    slug: "el-fantasma-de-el-horizonte",
    fuentesAgotadas: "Cinco fuentes. Ninguna trae el relato de Nepito, don Vicente y el burro. Se buscó en Villa Posse II, en el sumario de «Crónicas y romances», en la obra abierta de Valenzuela Sánchez (sólo cubiertas) y en prensa con editor. «Estampas de mi tierra» (1941) no tiene copia abierta legítima.",
    sourceKeys: [
      "lopezpueblo1977",
      "compiladoraMitos1993",
      "compiladoraMitos19932",
      "albarracinalma2023",
      "mantillaCronicas2012",
    ],
    title: "El fantasma de El Horizonte",
    excerpt:
      "Un supuesto penitente recorre la calle El Horizonte, hasta que una espera nocturna revela un burro cojo bajo una manta.",
    tags: ["fantasma", "burro", "engaño", "noche"],
    mito: `La calle de El Horizonte quedaba en el extremo de Piedecuesta, más allá del convento desde donde las monjas rezaban para ahuyentar las sombras. Allí, de noche, rondaba un fantasma. Era una figura envuelta en un manto de penitente que avanzaba en silencio, y los muchachos que tenían que pasar por esa calle se lo encontraban tan de cerca que el sudor frío les calaba los huesos. Juraban que lo oían golpear los muros con un rosario tan pesado que les cortaba el aliento.

Nepito, un joven de lengua suelta y ánimo alegre, pasaba las noches en los barrios de Hoyo Chiquito y Hoyo Grande. Allá vivía una muchacha de mirada hechicera que lo entretenía con promesas hasta el amanecer. Pero el amor y el miedo se le enredaban en el pecho, y al caer la noche el fantasma de El Horizonte nunca se le iba del pensamiento.

Una de esas noches, al despedirse de su dama, Nepito llegó con pasos sigilosos a la esquina temida. De repente tuvo el fantasma delante. Desesperado, trató de encaramarse en una ventana, pero se vino al suelo justo cuando la sombra avanzaba. Echó a correr, y el golpe y el susto lo tuvieron varios días sin sentido.

La noticia llegó a don Vicente, un periodista que no le temía a ningún hombre pero sí a los fantasmas, y a las lloronas que le contaban los viejos en los portales cuando era niño. Aun así decidió acabar con el espanto. No llevó armas. Se cargó de reliquias y oraciones, tomó un lazo, y esa noche se apostó en la esquina de El Horizonte invocando a los santos con los labios temblorosos.

Pasaron las horas. Al fin oyó un ruido extraño y vio acercarse la silueta. La enfrentó, y entonces entendió lo que era: un burro cansado y lastimado, que rengueaba bajo una manta oscura con la que su dueño lo abrigaba del sereno de la madrugada. El animal, adolorido, se dejaba ir contra las paredes, y los golpes sonaban como el rosario de un penitente.

Don Vicente contó en el pueblo lo que había descubierto, pero nadie quiso creerle. Sus palabras cayeron al suelo como hojas secas. Los piedecuestanos prefirieron quedarse con su espanto, y el burro de la manta terminó convertido en otro cuento de aparecidos que asustan a los que andan de noche.`,
    historia: `El fantasma de El Horizonte no figura en ningún registro publicado que pueda leerse. Lo buscaron sin éxito, entre otros lugares, las leyendas municipales de Germán Valenzuela Sánchez, la compilación quiteña de Eugenia Villa Posse y los periódicos de Piedecuesta y Bucaramanga que se conservan con fecha.

Sus rasgos apuntan a la crónica costumbrista. El protagonista es un periodista llamado don Vicente, Hoyo Chiquito aparece también en el paseo del cronista con que se abre otra leyenda del municipio, la de la Mula del Diablo, y la historia es una burla del miedo más que un cuento de miedo. Vicente Arenas Mantilla escribió justamente esa clase de estampas, en un volumen de 1941 y en otro que la universidad santandereana devolvió a las librerías en 2012 como «humorismo, pintura, retrato o caricatura del alma del pueblo». Ninguno de los quince títulos de este último habla de un penitente ni de un burro, y ningún ejemplar puede abrirse en línea.

El espanto que se describe, en cambio, tiene larga historia andina. Javier Ocampo López, en El pueblo boyacense y su folclor (1977), cuenta los espantos de monjes que en las casonas coloniales de Tunja recorren las piezas y los corredores y se detienen a dar golpes en ciertos sitios, con gran terror para quienes los oyen. Enrique Otero D'Costa, ambientando en Santander un relato de ánimas, pinta una procesión de ánimas envueltas en mortajas blancas, cada una con un grueso rosario en una mano y un cirio en la otra.

La historiadora Ana María Henao Albarracín estudió en 2023 un aparecido de parroquia rural decimonónica y lo leyó como herramienta pastoral para fijar normas. Y el escepticismo de don Vicente tampoco carece de antecedentes santandereanos: el viajero Ancízar ya sospechaba, un siglo antes, de quienes esparcían cuentos de encantamientos.`,
    versiones: `El penitente nocturno que golpea con su rosario aparece en los registros andinos de tres maneras, según quién lo vea y qué se haga con él.

En Tunja, según Ocampo López, los espantos de dominicos y franciscanos son reales y tienen propósito. Recorren las casas, dan golpes, se asoman a las ventanas y a veces piden que los saquen de penas o que alguien descubra un tesoro. El monje del Panóptico, en cambio, arroja al patio a quien se le interpone, y bajo su capucha hay una calavera. Aquí el valiente que se atreve no deshace el espanto: lo confirma.

En el cuento de Otero D'Costa la procesión de ánimas con rosarios también es verdadera. Ña Ulogia, que cosía un domingo por la noche, las ve salir del cacaotal rezando; una de ellas, la difunta Jovita, la castiga con un canillazo, y el cirio resulta ser un hueso. El narrador remata que la vieja le mostró la cicatriz.

El relato de Piedecuesta sigue esos pasos y luego los invierte. Hay manto de penitente, hay rosario contra los muros, hay un joven que cae sin sentido, y hay un hombre que se arma de reliquias para enfrentar al espanto. Pero lo que encuentra al final es un burro con una manta. La inversión tiene un segundo giro: la prueba no sirve de nada, y el pueblo se queda con su fantasma.

Esa última vuelta es la que separa este relato de la simple broma. Ancízar pensaba que bastaba con señalar al hombre detrás de la conseja; el relato de El Horizonte sugiere que la gente no quiere que se la señalen.`,
    similitudes: `El paralelo más cercano es el Toque de las Ánimas de Tunja, que Javier Ocampo López registró en 1977. Durante años los legos de San Francisco no se atrevían a tocar las campanas de ánimas porque en el altar aparecía un sacerdote con casulla roja, hasta que uno se armó de valor, se acercó y le ayudó la misa. La estructura es la de El Horizonte: un espanto que paraliza a todos, un hombre que decide enfrentarlo y una revelación. Pero en Tunja la revelación confirma lo sobrenatural, porque el sacerdote era un alma en pena, mientras que en Piedecuesta lo disuelve.

Otra comparación posible es con la Peregrinación de Alpha, en el pasaje que Arias trasladó a su libro de 1954: allí Ancízar escucha en Los Santos la historia de una laguna hechizada y la atribuye, sin ver nada, a la conveniencia de algunos vecinos. Don Vicente hace el mismo trabajo de viajero ilustrado, con una diferencia: no encuentra a ningún interesado, sino a un burro enfermo y a un dueño que sólo quería abrigarlo.

El rosario golpeando la noche resuena, por último, en las páginas de Otero D'Costa, donde las ánimas santandereanas pasan en procesión con un rosario grueso en la mano.`,
    leccion:
      "Un espanto desenmascarado sigue vivo mientras la gente prefiera seguir temiéndole.",
    sceneHorizontal:
      "calle El Horizonte de noche, una figura cubierta avanza junto a los muros mientras Nepito observa desde una ventana baja",
    sceneVertical:
      "Vicente levanta con cuidado una manta y descubre un burro cojo, con cuerda suelta y objetos religiosos guardados a un lado",
    researchNotes:
      "EXPLICACIÓN INTERNA Y CUIDADO ANIMAL: restaura el burro y la variante de broma, evita un fantasma residual y no presenta la cojera como monstruosidad.",
    seoTitle: "El Fantasma de El Horizonte",
    seoDescription:
      "Leyenda de la calle El Horizonte, donde un supuesto penitente nocturno resultó ser un burro cojo cubierto con una manta oscura.",
    focusKeywords: [
      "Fantasma de El Horizonte",
      "leyendas de la carrera 13",
      "burro del penitente",
      "Vicente Arenas Piedecuesta",
      "espantos urbanos de Santander",
    ],
  }),
  definePiedecuestaVicenteArenasIMyth({
    slug: "la-puerta-del-perdon",
    fuentesAgotadas: "Seis fuentes. Ninguna trae la puerta azul de Piedecuesta ni a sus curados. «Cuentos de espantos» (2004) no tiene lámina con este título ni con estos personajes. La búsqueda web de «Chato Pascasio», «Efraín Gutiérrez» y «mujer de Tona» sólo devuelve copias del texto publicado; la compilación UNAB de Pérez Pinzón (2016) sólo está en ResearchGate y no se admite.",
    sourceKeys: [
      "colaborativoPuerta2026",
      "artencordobaDoor2026",
      "plazasComo2025",
      "parradebe2024",
      "lopezpueblo19774",
      {
        key: "hOYCuentos2004",
        summary:
          "Se revisó porque otras fichas del ciclo resultaron ser láminas de este libro. Su índice de cincuenta entradas no incluye ninguna puerta, y el texto completo no nombra a don Vicente, a Efraín Gutiérrez, al Chato Pascasio ni a la mujer de Tona: queda descartado como origen del relato.",
        limitation:
          "Es ficción de autor; se cita sólo para dejar constancia de la búsqueda negativa. No trata este relato ni el motivo.",
      },
    ],
    title: "La puerta del perdón",
    excerpt:
      "Una puerta lateral de la parroquia San Francisco Javier reúne memorias de respeto, coerción, curaciones y milagros atribuidos.",
    tags: ["fe", "sanación", "tradición", "Piedecuesta"],
    mito: `Tenía un arco de piedra labrada y un portón de madera pintado de azul, y la llamaban la Puerta del Perdón. El camino que iba hacia la cabecera del llano pasaba por debajo de ella. Al amanecer, con el canto de los pájaros, llegaban los que buscaban consuelo, y las bisagras crujían con el paso de cada uno. Se decía que el alma atormentada que la cruzaba encontraba paz, siempre que su oración fuera sincera.

Los piedecuestanos la respetaban desde niños. Ningún muchacho pasaba frente a ella sin descubrirse la cabeza. Los mayores iban a buscarle alivio a los males del cuerpo y a los del alma, y cada quien tenía su caso.

Don Vicente, un viejo de cara arrugada, juraba que se le había quitado el dolor de muelas frotándose las mejillas contra las piedras lisas del arco. Efraín Gutiérrez, que sufría de unos mezquinos que no se le iban con nada, se curó metiendo los dedos en la cerradura. Una mujer de Tona, que cargaba con dolencias hondas y oscuras, recogió un día una astilla del quicio de la puerta, se la echó a la boca y la masticó. Quedó sana.

La puerta también cambiaba a la gente. El Chato Pascasio, que se había pasado la vida en parrandas, dejó de volver borracho a la casa y se volvió manso como un cordero. Se contaba además que a los que tenían las piernas tiesas por sus pecados les volvía el movimiento, pero sólo cuando el arrepentimiento era verdadero.

No todos creían. Para algunos, aquello no era más que madera y piedra, incapaz de cambiar a nadie. Pero con los años la puerta se volvió casi una persona del pueblo, una más en las historias de todos los días. El que pasaba bajo el arco dejaba ahí algo de lo que quería y algo de lo que le dolía, y la puerta seguía abierta, esperando al siguiente.`,
    historia: `De la puerta de madera azul que curaba el dolor de muelas y los mezquinos no se ha encontrado ningún texto impreso que se pueda leer. Ni los cronistas de Piedecuesta, ni el volumen de Valenzuela Sánchez sobre Santander, ni la antología de Villa Posse, ni las revistas de historia o la prensa del municipio la mencionan. Tampoco figura en el índice de Cuentos de espantos y otros seres fantásticos del folclor colombiano (2004). No se sabe, por eso, a qué edificio perteneció la puerta ni quiénes fueron don Vicente, Efraín Gutiérrez o el Chato Pascasio.

El nombre, en cambio, tiene una historia larga. En España se llama Puerta del Perdón a uno de los accesos de muchas catedrales e iglesias, ligado a las indulgencias que se ganaban en peregrinaciones y romerías; la de Santiago de Compostela sólo se abre en los años jacobeos, y la de la mezquita-catedral de Córdoba lleva una inscripción que la fecha en marzo de 1377, bajo Enrique II de Castilla. En América, la catedral de Puebla tiene la suya. La costumbre sigue viva en Colombia: en el Jubileo de 2025 la Catedral Primada, en Bogotá, abrió su puerta santa, y los franciscanos celebran cada 2 de agosto el Perdón de Asís, que Honorio III concedió en 1216 a quien visitara la Porciúncula.

La otra mitad del relato, las curaciones por contacto con un objeto sagrado, también está documentada en la región. Javier Ocampo López cuenta en El pueblo boyacense y su folclor (1977) que, según contaban los españoles, en Onzaga, población santandereana vecina de Boyacá, los campesinos adoraban un hueso de mohán colocado bajo un crucifijo, convencidos de que así tendrían salud y buena cosecha. En la Piedecuesta del relato la reliquia es más humilde: una astilla del quicio, la piedra del arco, el hueco de la cerradura.`,
    versiones: `No se conocen otras versiones de esta puerta piedecuestana. Lo que sí puede compararse es el sentido que el nombre tiene en cada tradición.

En las catedrales españolas la Puerta del Perdón es una entrada de peregrinos. El perdón que da es una indulgencia: la remisión de la pena de los pecados ya confesados, que la Iglesia concede a quien llega al final de un camino y cruza el umbral en las fechas señaladas. En Santiago y en Santo Toribio de Liébana la puerta permanece cerrada fuera de los años santos. Como recuerda la nota de El Tiempo de enero de 2025 sobre el Jubileo, la Iglesia exige para ese perdón arrepentimiento, confesión, comunión y oración por el papa.

La puerta de Piedecuesta invierte casi todo. Está siempre abierta y pertenece al camino. Nadie cuenta que se confiese o comulgue quien la cruza: el perdón se gana con una oración sincera, y en la práctica lo que la gente busca en ella son curaciones del cuerpo. El dolor de muelas, los mezquinos, las dolencias de la mujer de Tona se tratan tocando, frotando o masticando la puerta misma, como se hace con una reliquia. Sólo el Chato Pascasio y los de las piernas tiesas reciben lo que el nombre promete, un cambio del alma, y en su caso el milagro depende del arrepentimiento, igual que en la doctrina de las indulgencias.

El relato deja además un lugar a los incrédulos, que ven en ella madera y piedra y siguen de largo. En la doctrina de las indulgencias esa figura no tiene papel: el perdón sólo alcanza a quien lo pide.`,
    similitudes: `El paralelo evidente son las puertas del perdón de las catedrales españolas, como la de Córdoba, levantada en 1377 por orden de Enrique II, o la de Santiago de Compostela, que sólo se abre en año santo. En ellas, como en la de Piedecuesta, cruzar el umbral limpia algo del que pasa. La diferencia es que allí el perdón lo administra la Iglesia en fechas fijas, y aquí lo da la puerta todos los días a quien reza con sinceridad.

El segundo es el hueso de mohán de Onzaga que registra Ocampo López: un objeto que los campesinos veneraban junto al crucifijo para tener salud. La puerta azul y el hueso comparten la idea de que la santidad se transmite por contacto y de que una cosa vieja, puesta en el lugar justo, cura. En Onzaga lo que se adora es un resto indígena bajo una imagen cristiana; en Piedecuesta, la madera y la piedra de una construcción del pueblo.

El tercero es el Perdón de Asís, que El Tiempo explicaba a sus lectores en agosto de 2024: una capilla pequeña, la Porciúncula, sobre cuya puerta se lee que es «la puerta de la vida eterna». Allí también el perdón está atado a un umbral concreto. La puerta piedecuestana lo lleva a lo doméstico: nadie va a Asís, basta con pasar camino del llano.`,
    leccion:
      "Un lugar se vuelve sagrado cuando la gente le confía sus dolores y vuelve a él con fe.",
    sceneHorizontal:
      "puerta lateral azul cielo y arco de piedra de la parroquia San Francisco Javier, con habitantes que pasan respetuosamente por la plaza",
    sceneVertical:
      "detalle del umbral de madera y piedra iluminado al amanecer, con manos que se detienen antes de tocarlo y sin extraer materiales",
    researchNotes:
      "PATRIMONIO Y SEGURIDAD: distingue la puerta material de milagros atribuidos, reconoce coerción y evita recomendar raspado, ingestión o sustitución de responsabilidad.",
    seoTitle: "La Puerta del Perdón de Piedecuesta",
    seoDescription:
      "Leyenda de la puerta lateral de San Francisco Javier y sus relatos atribuidos de respeto, reconciliación, curaciones y milagros.",
    focusKeywords: [
      "Puerta del Perdón Piedecuesta",
      "parroquia San Francisco Javier",
      "leyendas religiosas de Santander",
      "patrimonio de Piedecuesta",
      "Estampas de mi tierra",
    ],
  }),
  definePiedecuestaVicenteArenasIMyth({
    slug: "la-sayona-del-cementerio",
    fuentesAgotadas: "Tres fuentes. Ninguna trae el episodio de Piedecuesta. «Cuentos de espantos» (2004) no tiene lámina de la Sayona. La búsqueda de «Carlos Vicente Gómez», «La Gran Luz» y «Elvira» sólo devuelve copias del texto publicado; las páginas que resumen la Sayona en la web son agregadores y blogs (El Rincón Colombiano, mitoyleyenda.com, soloenvenezuela.net), vetados.",
    sourceKeys: [
      "tovarMitos2015",
      "pastoleyenda2024",
      {
        key: "hOYCuentos2004",
        summary:
          "Se revisó porque otras tres fichas de Piedecuesta resultaron ser láminas casi literales de este libro. Sus cincuenta láminas incluyen espantos femeninos (la Llorona, la Viudita, la Dama Verde, la Niña de la Carta), pero ninguna Sayona, y el texto no nombra a Carlos Vicente Gómez ni a Elvira: queda descartado como origen.",
        limitation:
          "Es ficción de autor; se cita para dejar constancia de la búsqueda negativa. No trata este relato ni la Sayona.",
      },
    ],
    relatoCorto:
      "El texto publicado sólo cuenta un episodio en Piedecuesta: la noche de la tienda, la revelación de Elvira y el duelo de Carlos Vicente. Lo demás eran resúmenes de la Sayona venezolana y de figuras mexicanas, que no forman parte de este relato y van a historia y versiones. Alargarlo exigiría inventar.",
    title: "La sayona del cementerio",
    excerpt:
      "Carlos Vicente Gómez reconoce en una aparición vestida de negro a Elvira, su amor juvenil, y la sigue hasta el cementerio.",
    tags: ["La Sayona", "amor", "muerte", "memoria"],
    mito: `Piedecuesta todavía tenía abierta la herida de la última guerra civil. Era noviembre de 1896, y el pueblo se apagaba apenas caía el sol. Los que antes se sentaban en las gradas del atrio a conversar se encerraban temprano, y las calles se quedaban en silencio.

Sólo en una tienda, La Gran Luz, seguía habiendo gente de noche. Allí se reunía un grupo de revolucionarios, fieles a sus ideas como un náufrago a la esperanza de tocar tierra. Entre ellos estaba Carlos Vicente Gómez.

Una de esas noches la puerta se abrió despacio y entró una mujer. Llevaba un sayal oscuro, tenía la cara afilada como si la hubiera tallado el viento del páramo y en los ojos una pena que no le cabía. Era la Sayona. Habló, pero ninguno de los que estaban en la tienda pudo guardar después lo que dijo.

Carlos Vicente, en cambio, entendió algo que no había ido a buscar. Aquella aparición era Elvira, su novia, la que la fiebre blanca había matado lejos, sola, en el Alto Magdalena.

Desde entonces no volvió a ser el mismo. Se hizo escultor, buscando un consuelo que no iba a encontrar, y llenó el cementerio de monumentos de mármol donde se le iban también las lágrimas. Allí, noche tras noche, Elvira volvía a parecerse a la Sayona, y él seguía esperando una despedida.

Los niños del pueblo corrían asustados entre el monte cuando creían oír a lo lejos los gritos de la Sayona, y los repetían en sus juegos sin saber que estaban cantando la historia de Carlos Vicente y de su Elvira.`,
    historia: `El episodio de Carlos Vicente Gómez y la tienda La Gran Luz no consta en ninguna publicación al alcance del lector. Lo buscaron sin éxito, en distintos momentos, quienes revisaron las recopilaciones santandereanas de Valenzuela Sánchez y de Villa Posse, las estampas de Arenas Mantilla, las revistas de historia y los periódicos de la región. El libro de espantos que El Tiempo publicó en 2004, que inventa otros aparecidos de Santander, no tiene ninguna Sayona entre sus cincuenta láminas. La fecha del relato tampoco es firme: el texto que circula habla de noviembre de 1896 y, en otro pasaje, de 1910.

La figura, en cambio, está bien documentada, sobre todo del otro lado de la frontera. La Sayona es un espanto de los llanos venezolanos. La Fundación Empresas Polar publicó en Mitos y leyendas del estado Portuguesa los testimonios de varios narradores con nombre: Juan Francisco Tovar la describe como una mujer muy bonita y muy celosa que por sospechas de infidelidad mató a su marido y quedó convertida en Sayona, llamada así por la saya blanca con que sale, y que sólo asusta a los hombres infieles, parranderos y enamorados que andan a medianoche. Otros narradores de Portuguesa cuentan cómo la siguieron hasta una quebrada y le vieron los colmillos largos y los ojos en candela.

En Colombia la leyenda circula sobre todo por la frontera y los llanos. El Diario del Sur, de Pasto, la presentó en 2024 como leyenda venezolana extendida a esa región, con el nombre de Casilda para la mujer celosa que mató a su esposo y a su madre y fue maldecida por ésta al morir.

En Piedecuesta, el nombre de la Sayona se pone a un fantasma de otra clase: no el de una asesina celosa, sino el de una novia muerta de fiebre que vuelve a quien la lloraba.`,
    versiones: `Las versiones documentadas de la Sayona coinciden en el castigo y discrepan en el crimen. En los testimonios de Portuguesa la mujer mató al marido por celos y desde entonces persigue a los hombres que andan de noche buscando otras mujeres; su aparición es un escarmiento. Pedro Tovar la siguió hasta la quebrada de Araure y volvió con la advertencia de su esposa: eso le pasaba por andar de mujeriego. En la variante que publicó el Diario del Sur la culpa es doble —el esposo y la madre— y la condena viene de la maldición de la madre moribunda. En casi todas, la Sayona se deja seguir con una figura hermosa y al final muestra un rostro espantoso.

El relato piedecuestano rompe esa lógica. La Sayona entra en una tienda llena de hombres, pero no castiga a ninguno por infiel: habla, y nadie recuerda qué dijo. El único que entiende algo es Carlos Vicente, y lo que entiende es que la aparición es su propia novia, muerta de fiebre lejos de él. No hay crimen ni celos ni venganza; hay un duelo que no se cierra. El vestido también cambia: la saya blanca de los llanos se vuelve un sayal oscuro.

El escenario es otro rasgo propio. La Sayona venezolana sale en calles oscuras, carreteras y orillas de quebrada. La de Piedecuesta llega al pueblo en tiempo de guerra civil, se aparece a un grupo de revolucionarios y termina ligada al cementerio, donde el escultor levanta sus monumentos de mármol. De ahí le viene el nombre: la sayona del cementerio.`,
    similitudes: `El paralelo directo es la Sayona de los llanos venezolanos, tal como la cuentan los narradores de Portuguesa en el libro de la Fundación Empresas Polar: una mujer alta y elegante que aparece de noche a los hombres, se deja seguir y revela al final que no es de este mundo. La aparición en La Gran Luz conserva lo esencial —la mujer que entra de noche entre hombres, el traje que le da nombre, el espanto de quien la ve—, pero cambia el sentido: en Piedecuesta no castiga una falta.

El segundo paralelo está en el mismo libro. Antonio Angulo cuenta que en Los Palmares una mujer muy bonita se les subía a los choferes en los carros y que sólo él la veía transformarse en algo feo, mientras sus acompañantes no veían nada. Como en la tienda piedecuestana, la aparición se muestra a un grupo pero sólo uno de ellos comprende lo que tiene enfrente.

El tercero es la versión que difundió el Diario del Sur, con Casilda, la mujer que mató por celos a su esposo y a su madre. Casilda y Elvira están en extremos opuestos: una es culpable y la otra víctima de una enfermedad. Que el mismo nombre de espanto sirva para las dos muestra cómo la Sayona, al cruzar la frontera hacia el interior de Colombia, pudo quedar como una palabra para cualquier mujer muerta que vuelve.`,
    leccion:
      "El duelo que no encuentra despedida puede dar rostro de espanto a la persona amada.",
    sceneHorizontal:
      "tienda La Gran Luz durante una reunión de 1896, con una mujer vestida de negro que cruza silenciosamente la entrada",
    sceneVertical:
      "Carlos modela un retrato de Elvira junto a una ventana mientras una calle conduce simbólicamente hacia el cementerio al amanecer",
    researchNotes:
      "DESFUSIÓN Y DUELO: restaura a Carlos y Elvira, atribuye fechas y política, y retira la Sayona castigadora, la monstruosidad y cualquier tumba localizable.",
    seoTitle: "La Sayona del Cementerio de Piedecuesta",
    seoDescription:
      "Leyenda de Carlos Vicente Gómez, quien reconoció en una mujer de negro a Elvira, su amor juvenil, antes de verla ir al cementerio.",
    focusKeywords: [
      "Sayona del Cementerio",
      "Carlos Vicente Gómez",
      "Elvira de Piedecuesta",
      "leyendas de Vicente Arenas",
      "damas de negro de Santander",
    ],
  }),
  definePiedecuestaVicenteArenasIMyth({
    slug: "el-pollo-de-las-animas",
    fuentesAgotadas: "Seis fuentes. Ninguna trae a Ritornelio ni a la madrastra. Se buscó en Villa Posse II (cuyo «Cuento de ánimas» es otro relato), en el sumario de «Crónicas y romances», en Cuentos de espantos (2004) y en prensa con editor. La obra de Valenzuela Sánchez sólo tiene cubiertas abiertas.",
    sourceKeys: [
      {
        key: "compiladoraMitos1993",
        summary:
          "Es el texto que se confundió con éste y el que mejor explica su trasfondo: Otero dice que en las montañas de Santander las ánimas son seres traviesos que molestan a los campesinos sólo para corregirles los vicios, «cual cumple a madres solícitas», y lo ilustra con Laurián, curado del guarapo por una procesión de ánimas, y con ña Ulogia, castigada por coser en domingo. La madrastra de Ritornelio imita ese papel.",
        limitation:
          "Es otro relato, de autor y con estilo literario; no hay madrastra, pollo ni ánimas fingidas. Trata el motivo, no este relato. El número de página del PDF va dos por detrás del folio.",
      },
      {
        key: "albarracinalma2023",
        summary:
          "Da el marco histórico de la amenaza que usa la madrastra: estudia la aparición de un difunto en una parroquia rural colombiana del siglo XIX y concluye que las almas en pena permanecían en la órbita afectiva de los vivos y servían para inculcar normas y principios cristianos. Explica por qué la voz de un ánima podía mandar sobre un muchacho.",
        limitation:
          "Estudia un caso documentado y un ánima que pide sufragios, no la suplantación de un ánima ni Santander. Trata el motivo, no este relato.",
      },
      {
        key: "compiladoraMitos19932",
        summary:
          "Trae la lectura escéptica que los incrédulos de Piedecuesta hacen del teatro de la madrastra: Ancízar, ante un vecino de Los Santos que culpa al diablo de los prodigios de una laguna, responde que el diablo no se mete en eso «salvo en figura de ciertos hombres interesados en propagar semejantes consejas».",
        limitation:
          "Trata una laguna encantada y el diablo, no ánimas ni una madrastra; el comentario es de un viajero ilustrado del siglo XIX. Trata el motivo, no este relato. El número de página del PDF va seis por detrás del folio.",
      },
      {
        key: "lopezpueblo1977",
        summary:
          "Registra el alma en pena andina en su forma devota: el Toque de las Ánimas de San Francisco, en Tunja, donde un sacerdote difunto espera en el altar hasta que un lego se atreve a ayudarle la misa y pide comuniones por su redención. Sirve de contraste con el ánima fingida de Piedecuesta, que no pide oraciones sino obediencia.",
        limitation:
          "Es un espanto urbano de convento, de Boyacá, sin relación con el relato. Trata el motivo, no este relato.",
      },
      "tiempoCuentos2004",
      {
        key: "mantillaCronicas2012",
        summary:
          "Es la obra del cronista piedecuestano a cuyo nombre circula este grupo de relatos de espantos del municipio, y la única de ellas con ficha editorial abierta. Su sinopsis lo define como humorismo y caricatura del alma del pueblo, que es el tono de la farsa de la madrastra, pero su sumario de quince crónicas no incluye ninguna sobre ánimas ni sobre La Ladera.",
        limitation:
          "La página dice «Disponible: No» y no hay texto. La relación con el relato es sólo de corpus y de tono, no de contenido. Requiere curl -k.",
      },
    ],
    title: "El pollo de las ánimas",
    excerpt:
      "Ritornelio trabaja esperando recibir una gallina, pero su madrastra imita voces de ánimas para asustarlo y conservar el beneficio.",
    tags: ["engaño", "explotación", "miedo", "ánimas"],
    mito: `Ritornelio era el bobito del paraje de La Ladera. Su padre, el viejo Agapito, había sido un hombre rudo que lo crió a golpes y lo dejó con el entendimiento en sombras. Ahora vivía en manos de una madrastra astuta, que lo tenía a su servicio sin pagarle nada.

Cada vez que Ritornelio, cansado hasta el alma, pensaba en escaparse para Piedecuesta, la madrastra lo llevaba de la mano a la corraleja, entre las gallinas. Allí juntaba su cara con la de él y le decía con una dulzura fingida:

—¡Este pollo saraviado es para que se lo coma mi ratoncito, que tanto trabaja para ayudarle a su viejecita consentida!

Luego lo llenaba de mimos y lo abrazaba, y el bobito, como embrujado, volvía a sus tareas con la ilusión renovada. El pollo nunca fue suyo. Cuando llegaba el día prometido, la madrastra ya lo había llevado a la feria y lo había vendido con disimulo.

Si el muchacho reclamaba, ella tenía preparada otra función. Llegaba de noche con un estruendo tal que la familia corría a encerrarse en los cuartos, encendía velas y rezaba a Dios por el alboroto que se acercaba. La madrastra sabía que Ritornelio se escondía entre las faldas de la cocinera. Se ponía a golpear las puertas y a imitar las voces de las ánimas de los cuentos de miedo, lloriqueando como un alma en agonía:

—¡Ritornelio, venimos por vos a llevarte a donde el viejo Agapito!

Ese nombre bastaba. Temblando en su rincón, el muchacho le contestaba a la voz que lo llamaba desde el otro mundo:

—¡Díganle que yo me morí, más bien llévense mi pollito saraviado!

Y así volvía a empezar. Ritornelio regresaba a su servidumbre y aplazaba otra vez la huida, con miedo de que las ánimas volvieran por lo que creían suyo.

Desde afuera, los más incrédulos del pueblo miraban aquel teatro y murmuraban que tal vez todas esas historias de espantos no eran más que cuentos de los que mandan, para tener sujetos a los que obedecen.`,
    historia: `Ninguna obra consultable publica la historia de Ritornelio y su madrastra. Se la buscó en los libros de Germán Valenzuela Sánchez sobre Piedecuesta, en el índice de «Crónicas y romances» de Vicente Arenas Mantilla (Ediciones UIS, 2012) y en periódicos santandereanos con fecha. La antología de Eugenia Villa Posse (Quito, 1993) sí trae un «Cuento de ánimas» de Enrique Otero D'Costa ambientado en Santander, pero es otra historia: no hay en él madrastra, pollo ni Ritornelio.

Ese cuento sirve, en cambio, para situar el motivo. Otero escribe que en las montañas de Santander las ánimas benditas son seres traviesos, que conviven con los campesinos y los molestan sólo para corregirles los vicios, como madres cuidadosas. Sus dos ejemplos lo confirman: unas ánimas mantean en el aire a un borracho que vuelve de la feria de Rionegro hasta curarlo del guarapo, y otra le rompe la frente de un canillazo a una costurera que trabajaba en domingo.

Un artículo de Ana María Henao Albarracín, de 2023, examina cómo operaba esa devoción en la Colombia de la segunda mitad del siglo XIX. A partir de la aparición de un difunto en una parroquia rural, concluye que las almas en pena seguían en la órbita afectiva de los vivos y servían para inculcar normas cristianas.

Tampoco es nueva, en esta tierra, la sospecha de que alguien saca provecho del miedo a los muertos. A mediados del siglo XIX, en Los Santos, Manuel Ancízar desconfió de las consejas de encantamiento y las cargó en la cuenta de vecinos a quienes convenía difundirlas; Juan de Dios Arias transcribió esa conversación un siglo después.`,
    versiones: `En los registros del motivo el ánima castiga para enderezar, y quien la invoca cree en ella. El relato de Piedecuesta es el único en que el ánima es un disfraz.

En Otero D'Costa las ánimas santandereanas son reales y tienen buen humor. A Laurián lo levantan en vilo cantándole «¡por borrachito!», lo dejan enredado en la copa de un gualanday y lo curan para siempre de la bebeta; a ña Ulogia, que cosía un domingo, la difunta Jovita le pide que le recorte la mortaja y después la castiga con un canillazo por trabajar en día de fiesta. La corrección tiene destinatario y motivo, y el castigado sale mejor.

En Tunja, según Javier Ocampo López, el alma en pena del Toque de las Ánimas es un sacerdote que espera en el altar de San Francisco a que alguien le ayude la misa. Durante años los legos no se atreven, hasta que uno lo hace y el difunto pide comuniones por su redención. La aparición pide, no amenaza.

Un bestiario de 2004 que se presenta como colección de papeles imaginarios, Cuentos de espantos, trae en la lámina del Ánima Sola la figura del animero: un vecino de capa negra que en noviembre recorre las casas con un farol y una campanilla pidiendo oraciones por las ánimas. Es la voz humana que habla en nombre de los muertos, pero de buena fe.

En Piedecuesta esa voz está usurpada. La madrastra hace de ánima, y el castigo no endereza a nadie: sólo retiene a un muchacho sin paga. Lo que en Otero es una lección, aquí es un negocio, y los incrédulos del pueblo sacan la conclusión que Ancízar había sacado un siglo antes.`,
    similitudes: `El paralelo más útil está en el mismo departamento. Dentro del «Cuento de ánimas» de Otero D'Costa, que salió en sus Leyendas de 1936 y reproducido por Villa Posse, las ánimas de Santander se comportan como madres solícitas: aparecen de noche, en procesión, y castigan al borracho o a la que trabaja en domingo para corregirlos. La madrastra de Ritornelio usa exactamente ese papel. Se presenta como «viejecita consentida» de día y como ánima de noche, y en los dos casos habla de premio y de castigo. La diferencia es que en Otero el castigado se enmienda, y aquí el muchacho sólo obedece.

La otra comparación la da un viajero. Cuando un labriego de Los Santos le explicó que cierta laguna estaba embrujada, Ancízar replicó, según lo transcribe Arias, que el demonio no anda en esos oficios y que quienes andan son personas a las que les conviene el rumor. Los escépticos de Piedecuesta dicen lo mismo del teatro de la madrastra: que las historias de espantos son cuentos de los que mandan.

Un tercer eco, ya literario, es la lámina del Ánima Sola en Cuentos de espantos (2004). Allí un animero de pueblo, el hombre que pide oraciones por las ánimas tocando una campanilla, termina encontrándose con el ánima de verdad. En Piedecuesta nadie se encuentra con ninguna: la única ánima que golpea las puertas es la madrastra.`,
    leccion:
      "Quien administra los miedos de otro puede cobrarle trabajo sin pagarle nunca.",
    sceneHorizontal:
      "Ritornelio trabaja en La Ladera y mira con afecto una gallina moteada mientras su madrastra negocia a distancia",
    sceneVertical:
      "puerta de una casa en la noche con Ritornelio escuchando golpes, mientras una silueta humana oculta revela visualmente el engaño",
    researchNotes:
      "DIGNIDAD Y EXPLICACIÓN HUMANA: elimina insultos y diagnóstico, centra explotación y fraude, y no transforma la imitación de la madrastra en aparición real.",
    seoTitle: "El Pollo de las Ánimas de Piedecuesta",
    seoDescription:
      "Relato de Ritornelio, engañado con una gallina prometida y una falsa voz de ánimas para mantenerlo trabajando sin recibir pago.",
    focusKeywords: [
      "Pollo de las Ánimas",
      "Ritornelio de La Ladera",
      "leyendas de Vicente Arenas",
      "engaños en cuentos de Santander",
      "memoria de Piedecuesta",
    ],
  }),
];

export default records;
