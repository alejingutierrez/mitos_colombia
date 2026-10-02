function entries(group, rows) {
  return rows.map(([slug, title, core, boundary = ""]) => ({
    slug,
    title,
    group,
    core,
    boundary,
  }));
}

const martinez = entries("martinez", [
  ["castellano-viejo", "Castellano viejo", "El marqués de Villalta intenta decidir el futuro de Mariana; la pareja altera las apariencias para forzar una boda y el desenlace convierte los celos de Manuel en ruina.", "El engaño amoroso, el control paterno y la posterior violencia celosa no se romantizan."],
  ["por-la-boca-muere-el-pez", "Por la boca muere el pez", "Domingo da Cunha, zapatero portugués de lengua irreverente, enfrenta un proceso inquisitorial después de que bromas y blasfemias atribuidas llegan a sus acusadores.", "El proceso y la condena pertenecen a la reconstrucción literaria mientras no exista un expediente colonial identificado."],
  ["a-dios-rogando-y-con-el-mazo-dando", "A Dios rogando y con el mazo dando", "Juan Pérez parece morir y revive cuando el hisopo de una disputa devocional lo golpea, en una sátira de rivalidades religiosas y explicaciones milagrosas.", "La recuperación no se presenta como evidencia médica ni milagro comprobado."],
  ["el-fantasma-del-teatro-azul", "El fantasma del Teatro Azul", "La trayectoria teatral de Estrellita y la compañía de Arcadio Azuaga termina asociada con una presencia que conserva en el Teatro Azul la memoria de pérdidas y cambios culturales."],
  ["macu-y-el-collar-de-camarones-de-oro", "Macú y el collar de camarones de oro", "Macú, vendedor de camarones, queda atrapado en una disputa de devociones y ofrece un collar de camarones de oro para expresar su promesa religiosa."],
  ["zequiel", "Zequiel", "Ezequiel Ramos, lechero de Caimán, vive una trama de amor, traición y represalia alrededor de Simonita y de relaciones desiguales de poder."],
  ["folklore-macabro", "Folklore macabro", "Una mujer que muele maíz oye cascos en el Playón del Blanco y ve pasar un caballo sin cabeza, aparición nocturna que transforma un recorrido cotidiano."],
  ["la-muerte-de-los-ojos-verdes", "La muerte de los ojos verdes", "Un hombre interpreta los ojos verdes de una niña como prueba de infidelidad y desencadena una tragedia fundada en celos, ignorancia genética y violencia doméstica.", "La sospecha no excusa maltrato ni convierte el color de ojos en prueba de parentesco."],
  ["el-talisman-funebre", "El talismán fúnebre", "Patricio guarda un objeto funerario después de un encuentro en el antiguo barrio de Pekín; deseo, fiesta y muerte quedan unidos por el supuesto talismán."],
  ["marineritis-sentimental", "Marineritis sentimental", "Lina y Carmelita idealizan a los marineros que llegan al puerto mientras el vecindario juzga sus decisiones y convierte el deseo en diagnóstico social."],
  ["mona-mona", "Mona, Mona", "La pieza atribuye a una revelación sobrenatural un conflicto de muerte, secreto y justicia en un entorno palenquero representado por el autor.", "No se usa la voz literaria como etnografía de Palenque ni se repiten generalizaciones raciales del original."],
  ["la-abadesa-arrodillada", "La abadesa arrodillada", "Sor Ana protege documentos y a un familiar durante la represión de la Independencia; su figura arrodillada queda convertida en emblema de sacrificio político y religioso."],
  ["de-cuando-fue-regalado-el-castillo-de-san-felipe-y-la-popa", "Cuando regalaron San Felipe y La Popa", "Un título de propiedad supuestamente entrega el Castillo de San Felipe y La Popa a un particular durante una coyuntura política, y el absurdo alimenta la leyenda.", "La escritura y la cesión no se consideran auténticas sin archivo independiente."],
  ["el-milagro-de-la-candelaria", "El milagro de La Candelaria", "Candelaria López teme que una embarcación contrabandista use el nombre de la Virgen; una fuga exitosa es interpretada dentro del cuento como intervención de la patrona."],
  ["celos-de-esclavo", "Celos de esclavo", "Una fiesta de La Popa exhibe joyas sobre personas esclavizadas y una rivalidad afectiva desemboca en violencia dentro del orden colonial.", "La esclavitud se nombra como violencia y las personas esclavizadas no se reducen a decoración ni propiedad."],
  ["el-mal-del-mar", "El mal del mar", "Un marinero busca una relación en cada puerto y nunca encuentra satisfacción; el relato convierte su deseo repetitivo en un supuesto mal ligado al oficio."],
  ["el-heroe", "El héroe", "Sabino, pescador de La Boquilla, enfrenta un peligro marino para proteger a otras personas y su sacrificio se vuelve una historia local de heroísmo."],
  ["maldito-sea-napoleon", "Maldito sea Napoleón", "La destitución del gobernador Montes en julio de 1810 se enlaza con un conflicto familiar y amoroso que interpreta la política desde una casa cartagenera."],
  ["templo-de-santo-domingo-y-el-cristo-de-la-expiracion", "Santo Domingo y el Cristo de la Expiración", "La imagen del Cristo de la Expiración queda rodeada por relatos de encargo, traslado y protección milagrosa en el templo de Santo Domingo."],
  ["el-auriga-a-quien-mato-el-pasado", "El auriga a quien mató el pasado", "Diego Soria ve desaparecer los coches de alquiler ante el automóvil; un recuerdo no resuelto convierte la modernización del transporte en tragedia personal."],
  ["la-imagen-de-san-antonio", "La imagen de San Antonio", "Eulalia busca ayuda ante una imagen de San Antonio después de un desengaño; fortuna, devoción y matrimonio se cruzan en un giro irónico."],
  ["al-convento", "Al convento", "En la Cartagena de 1811, una joven enfrenta la imposición del convento mientras afecto, honor familiar y causa política compiten por decidir su vida.", "La reclusión impuesta y el control del matrimonio no se presentan como decisiones libres."],
  ["la-sombra", "La sombra", "Ximena sigue una sombra gris que conduce a un tesoro; el hallazgo modifica su destino y desplaza la pregunta desde la aparición hacia el uso de la riqueza."],
  ["despues-del-sitio", "Después del sitio", "Isabel idealiza a don Blas después del sitio de Cartagena y luego debe confrontar la distancia entre el héroe imaginado y la persona real."],
  ["la-casa-de-don-benito", "La casa de don Benito", "Una casa vinculada con Benito de Paz Pinto conserva rumores de aparición y tensiones religiosas que el cuento combina con nombres del pasado cartagenero."],
  ["doce-en-punto-de-la-noche", "Doce en punto de la noche", "A medianoche, ruidos y apariciones en la casa de Roberto conducen a un tesoro y enfrentan la interpretación sobrenatural con explicaciones interesadas."],
  ["un-quejido-una-luz", "Un quejido, una luz", "En Los Rosales, un quejido y una luz convierten una noche ordinaria en episodio de miedo; la percepción de quienes observan organiza el misterio."],
  ["una-reunion-clandestina", "Una reunión clandestina", "Miguel y Dolores participan en una reunión secreta por la libertad y exponen su relación, su seguridad y su futuro a la represión política."],
  ["en-el-once", "En el once", "La jornada de independencia del 11 de noviembre sirve de marco para una relación que debe escoger entre deber público, afecto y libertad personal."],
  ["viva-la-libertad", "Viva la libertad", "Henriqueta y Luis Felipe atraviesan la movilización independentista; el cuento hace coincidir el triunfo político de Cartagena con su desenlace amoroso."],
  ["un-anonimo", "Un anónimo", "Antonio recibe un mensaje anónimo y entra con Carlota en actividades revolucionarias vinculadas a la causa de Bolívar, entre secreto, afecto y riesgo."],
  ["en-el-sitio-de-morillo", "En el sitio de Morillo", "Durante el sitio de Morillo, pescadores participan en un engaño para abrir paso a embarcaciones patriotas; la astucia ocupa el lugar de una victoria frontal."],
  ["la-clave-de-la-felicidad", "La clave de la felicidad", "Un piano que parece tocarse solo conduce a Isabelita hacia un mensaje de amor; música, ausencia y fantasma forman la clave del desenlace."],
]);

const zapata = entries("zapata", [
  ["rambao", "Rambao", "Rambao pasa de la pobreza a la fortuna después de encontrarse con figuras divinas y con la Muerte; cada don obtenido abre una nueva prueba moral."],
  ["tia-zorra-en-el-maizal-de-tio-conejo", "Tía Zorra en el maizal de Tío Conejo", "Conejo evita el trabajo y compromete a Zorra en un robo de maíz; el engaño redistribuye el castigo y vuelve inestable la alianza."],
  ["la-vieja-el-burro-y-los-huevos", "La vieja, el burro y los huevos", "Una mujer interpreta con sorpresa lo que ve alrededor de un burro y pierde los huevos que transporta; el malentendido sostiene el remate."],
  ["el-costeno-y-los-cachacos", "El costeño y los cachacos", "Un encuentro de pesca enfrenta hablas y expectativas de costeños y cachacos; la broma depende de quién controla la explicación."],
  ["tio-conejo-y-morrocoy", "Tío Conejo y Morrocoy", "Conejo confía en su velocidad, pero Morrocoy y su familia coordinan posiciones para vencerlo en una carrera."],
  ["este-era-un-tipo-que-tenia-una-novia", "El tipo que tenía una novia", "Un hombre visita a su novia y una conducta corporal inapropiada se convierte en equívoco y vergüenza dentro del cuento jocoso."],
  ["los-tres-cachacos-y-la-cantara-de-ron-neque", "Los tres cachacos y la cántara de ron ñeque", "Tres viajeros comparten una cántara de ron ñeque y convierten sus malestares, su apetito y sus excusas en una competencia verbal."],
  ["la-muerte-de-tio-conejo", "La muerte de Tío Conejo", "Conejo intenta imitar la conducta de Gallo sin comprender sus condiciones y la copia termina en muerte dentro de una versión deliberadamente áspera."],
  ["juan-bobo-y-sus-hermanos", "Juan Bobo y sus hermanos", "Los actos aparentemente torpes de Juan Bobo alteran los planes de sus hermanos y terminan produciendo un resultado que nadie anticipaba."],
  ["juan-bobo-y-la-vieja", "Juan Bobo y la Vieja", "Juan Bobo interpreta de forma literal las órdenes de una mujer mayor; sus decisiones encadenan torpeza, pérdida y un desenlace oscuro."],
  ["este-era-un-rey-que-tenia-dos-hijas-bonitas", "El rey que tenía dos hijas bonitas", "Un vendedor de flores entra en una apuesta relacionada con las hijas del rey y revela una verdad que el poder quería mantener oculta."],
  ["tio-sapo-y-cangrejo", "Tío Sapo y Cangrejo", "Sapo y Cangrejo disputan desde capacidades y temperamentos distintos; el conflicto muestra cómo la apariencia de ventaja puede invertirse."],
  ["el-viaje-al-cielo", "El viaje al cielo", "Un grupo emprende un ascenso imposible al cielo y la cooperación se rompe cuando los personajes confunden fuerza, jerarquía y oportunidad."],
  ["el-mocho-y-el-tigre", "El Mocho y el Tigre", "Un hombre conocido como el Mocho enfrenta a un tigre mediante velocidad, cálculo y engaño, no por superioridad física."],
  ["quien-manda-mas-en-casa", "Quién manda más en casa", "Una discusión sobre autoridad doméstica termina demostrando que las decisiones reales no coinciden con las declaraciones públicas de poder.", "La pieza se lee como sátira de roles de género, no como regla sobre todos los hogares costeños."],
]);

const list = entries("list", [
  ["conejo-y-caiman", "Tío Conejo y Tío Caimán", "Conejo roba y come huevos de Caimán, luego usa palabras y movimientos calculados para evitar la represalia."],
  ["las-orejas-del-tio-conejo", "Las orejas de Tío Conejo", "Conejo pide un cuerpo mayor y recibe pruebas peligrosas; su ingenio le consigue orejas largas, pero no el tamaño que deseaba."],
  ["conejo-y-los-hijos-de-tia-tigra", "Tío Conejo y los siete hijos de Tía Tigra", "Conejo acepta cuidar a siete cachorros de Tigra, los engaña uno a uno y desata una persecución de venganza.", "La fuente de George List registra siete hijos, no cinco como decía la versión heredada."],
]);

const unresolved = entries("unresolved", [
  ["la-mina-de-oro-en-el-infierno", "La mina de oro en el infierno", "La versión heredada hace que Jaime Restrepo, presentado como hombre de Marinilla, engañe a varios cachacos en el cielo con la noticia de una mina de oro en el infierno.", "No apareció una fuente que sostenga la adscripción a Córdoba; los estereotipos regionales se atribuyen al chiste."],
  ["los-tres-curas-enamorados", "Los tres curas enamorados", "La versión heredada muestra a una mujer y a su esposo engañando a tres sacerdotes enamorados y ocultándolos mediante nombres simbólicos y un árbol.", "Se documenta una familia internacional de cuentos semejantes, no esta versión cordobesa exacta."],
  ["el-desayuno-del-indio", "El desayuno del indio", "La versión heredada enfrenta a un hombre llamado de forma genérica “el indio” con un sacerdote; el primero resuelve mediante agudeza una prueba ligada al desayuno.", "La etiqueta racializante se conserva solo para explicar el título heredado y no identifica un pueblo indígena."],
  ["la-confesion", "La confesión", "La versión heredada lleva a una joven al confesionario, donde un sacerdote usa eufemismos corporales con intención sexual y abusa de su autoridad.", "El acoso clerical no se trata como seducción ni se reproduce con detalle explícito."],
  ["este-era-un-joven-que-estaba-estudiando", "El joven que estaba estudiando", "La versión heredada sigue a un joven y a Clara en un internado, donde palabras coloquiales y dobles sentidos producen un malentendido."],
  ["veinte-para-el-bollo", "Veinte para el bollo", "La versión heredada hace circular veinte centavos entre una necesidad inmediata y una decisión ingeniosa, hasta que el pequeño monto organiza el remate."],
  ["el-burro-y-la-policia", "El burro y la policía", "La versión heredada sitúa a un burro y a un muchacho cerca de una iglesia; la intervención policial depende de una observación literal que desarma la autoridad."],
  ["el-paisa-y-el-gringo", "El paisa y el gringo", "La versión heredada ocurre en Antioquia y construye una broma entre un paisa y un extranjero a partir de expresiones locales durante una fiesta.", "El propio escenario contradice una procedencia cordobesa segura; la ruta se conserva sin trasladarla hasta hallar su fuente exacta."],
  ["tio-conejo-y-los-platanos", "Tío Conejo y los plátanos", "La versión heredada hace que Conejo obtenga los plátanos de Tigre mediante engaños sucesivos y evite pagar las consecuencias."],
  ["conejo-y-la-fiesta-de-toro", "Conejo y la fiesta de Toro", "La versión heredada sitúa a Conejo y Tigre alrededor de una fiesta de Toro en Cotorra, donde la astucia del pequeño explota la confianza del fuerte."],
  ["conejo-y-la-mona-de-cera", "Conejo y la mona de cera", "La versión heredada presenta una figura de cera colocada como trampa; Conejo queda pegado, escapa mediante engaño y deja a Zorra en su lugar."],
  ["lo-justo-y-lo-legal", "Lo justo y lo legal", "La versión heredada enfrenta a dos campesinos que discuten si lo permitido por la ley coincide siempre con aquello que consideran justo."],
  ["el-hijo-desobediente", "El hijo desobediente", "La versión heredada contrapone a una madre que pide madrugar con un hijo que responde mediante refranes para justificar su pereza."],
]);

const buenaventura = entries("buenaventura", [
  ["tio-conejo-zapatero", "Tío Conejo zapatero", "En Sábado de Gloria, Conejo promete zapatos que no entrega y desvía cada reclamo hacia otro personaje hasta formar una cadena de persecución.", "La adaptación documentada de Enrique Buenaventura se vincula con tradición oral del Pacífico; la localización heredada en Cotorra sigue sin fuente exacta."],
]);

const otero = entries("otero", [
  ["el-castellano-de-san-juan", "El castellano de San Juan", "Otero D’Costa sitúa en 1629 el ataque de Hanspater al castillo de San Juan; Nufio de los Santos engaña a los sitiadores arrojando comida para fingir abundancia.", "Crónicas y nombres históricos crean el marco, pero los diálogos y la estratagema requieren corroboración separada."],
  ["las-clavelinas", "Las clavelinas", "Una joven esclavizada llamada Yariva ofrece clavelinas a Pedro Claver; después de la muerte del jesuita, la flor pierde su aroma dentro de la explicación legendaria.", "La esclavitud se nombra como violencia y el episodio no prueba una propiedad botánica de la flor."],
  ["genus-irritable-vatum", "Genus irritabile vatum", "Una campaña colonial contra habitantes de El Carbón termina convertida en intercambio de versos y sátira entre Pedro Chiquillo y los expedicionarios.", "La voz de Otero reproduce lenguaje colonial ofensivo y no constituye testimonio indígena ni crónica neutral."],
]);

const independent = [
  ...entries("morgan", [["el-tesoro-de-morgan", "El tesoro de Morgan", "Luces, mapas y escondites conducen hacia un supuesto tesoro de Henry Morgan en el archipiélago; cada búsqueda amplía el relato sin producir una prueba material concluyente.", "La actividad histórica del corsario no demuestra que enterrara un tesoro en la Cueva de Morgan o Providencia."]]),
  ...entries("francisco", [["francisco-el-hombre", "Francisco el Hombre", "Un juglar se encuentra de noche con un adversario sobrenatural y vence el duelo de acordeón al cantar una oración; la leyenda se asocia con Francisco Antonio Moscote.", "La identidad, las fechas y el Credo invertido varían; no se ofrecen como ritual de protección."]]),
];

export const caribeMestizoFinalCatalog = [
  ...martinez,
  ...zapata,
  ...list,
  ...unresolved,
  ...buenaventura,
  ...otero,
  ...independent,
];

export const caribeMestizoFinalCatalogBySlug = Object.fromEntries(
  caribeMestizoFinalCatalog.map((entry) => [entry.slug, entry]),
);

/**
 * Corpus conocido sin ficha.
 *
 * Al abrir el primario de este ciclo —Manuel Zapata Olivella, «Tradición oral y
 * conducta en Córdoba», Incora 1972; 3.ª ed. Univalle 2021, «Género: cuento y
 * leyenda», pp. 237-267— apareció que el bloque imprime 44 piezas y el sitio
 * publica 32. Estas once son las que faltan.
 *
 * No se publican: el encargo de 2026-09-19 era reescribir lo publicado, no
 * ampliarlo (DECISIONES.md, decisión G). Quedan aquí con su página porque el
 * primario ya está abierto y extraído en
 * `content/editorial/caribe-mestizo-final/primarias/`, y encontrarlas otra vez
 * costaría lo que costó la primera.
 */
export const caribeMestizoFinalCorpusSinFicha = [
  { titulo: "El montuno y el radio", pagina: 247 },
  { titulo: "La muerte de Tía Zorra (Tercera versión)", pagina: 255 },
  { titulo: "Un día estaba un caimán asoleándose", pagina: 257 },
  { titulo: "El diablo haciendo palomitas", pagina: 257 },
  { titulo: "La receta", pagina: 257 },
  { titulo: "El burro y el puerco", pagina: 264 },
  { titulo: "El panadero y el perro", pagina: 264 },
  { titulo: "El indio y el negro", pagina: 265 },
  { titulo: "Los ladrones", pagina: 265 },
  { titulo: "Tío Conejo y Tío Gallo (Segunda versión)", pagina: 265 },
  { titulo: "La misa del testamento", pagina: 266 },
];
