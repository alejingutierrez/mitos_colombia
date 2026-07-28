function myth({ title, summary, tags, ...definition }) {
  const seoTitle = `${title} | Kuiva`;
  const focusKeywords = [title, "relatos Kuiva", ...tags.slice(0, 3)];
  return {
    ...definition,
    title,
    summary,
    tags,
    excerpt: summary,
    seoTitle,
    seoDescription: summary,
    focusKeywords,
  };
}

export const kuivaDefinitions = [
  myth({
    slug: "creacion-kuibas",
    title: "La sangre del cielo y Boupé",
    summary:
      "Una herida luminosa abre el cielo y sus fragmentos de sangre se vuelven personas; Boupé y Daimú les enseñan a vivir juntos.",
    tags: ["origen", "Boupé", "cielo", "Daimú"],
    narrativeSource: "idartes2015",
    mito: `Al comienzo no había personas. En la tierra vivían únicamente los animales. Un día se escuchó un trueno y después apareció un relámpago que, en lugar de caer hacia el suelo, subió. La luz abrió una hendidura en el cielo.

De aquella herida comenzó a salir sangre. Otro relámpago la alcanzó, la absorbió o la secó, y la convirtió en una costra. La costra se quebró. Sus fragmentos cayeron sobre la tierra y cada uno se transformó en una persona. Así presenta el origen humano la versión Kuiva publicada en la antología Mitos de creación.

Quienes acababan de llegar se reunieron. Al caer la noche buscaron refugio en una cueva y durmieron allí. Cuando amaneció, vieron por primera vez al Sol, que iluminaba la tierra. Sintieron hambre, pero todavía no sabían qué podían comer.

Observaron entonces a los pájaros. Las aves se acercaban a los árboles, picoteaban sus frutos y seguían volando. Las personas imitaron lo que veían. Probaron los frutos y encontraron unos mangos, con los que pudieron alimentarse.

El grupo escogió a Boupé como primer jefe. En la versión impresa, Boupé distribuyó espacios para vivir y enseñó a respetar los límites asignados. También mostró cómo fabricar arcos y flechas, cazar, cocinar la carne y cultivar. Enseñó a bañarse, a compartir y a organizar la vida con otras personas.

Después apareció Daimú, llamada diosa del sueño en esa edición. Daimú cerró los ojos de las personas y les enseñó a dormir. El aprendizaje del sueño completó una secuencia que había comenzado con el cielo herido: nacer no bastaba; también era necesario reconocer alimento, descanso, herramientas y reglas para convivir.

La antología no dice quién contó esta versión, cuándo fue recogida ni en qué comunidad Kuiva circuló. Tampoco permite saber si las enseñanzas agrícolas y la figura de Boupé pertenecen a todas las variantes. La página conserva la secuencia documentada y evita ampliarla con guerras celestes, nombres de clanes, ceremonias o discursos que la fuente no ofrece.

El título heredado «Creación» se vuelve «La sangre del cielo y Boupé» para nombrar los dos movimientos centrales del relato: la llegada de las primeras personas y el comienzo de una vida colectiva.`,
    historyCore:
      "El texto puede rastrearse a la antología Mitos de creación, publicada inicialmente en 2008 y reeditada por Idartes en 2015. La versión ocupa dos páginas, pero no presenta ficha de narrador, fecha, comunidad local ni referencia etnográfica específica.",
    versionCore:
      "El índice de Folk Literature of the Cuiva Indians registra varios relatos distintos sobre Namon o Namun creando personas, objetos y a los primeros Jiwi. Esta ficha no los mezcla con la secuencia de sangre celeste porque sus textos completos no fueron consultados.",
    similarityCore:
      "El motivo de humanidad surgida de una sustancia celeste puede recordar otros relatos de origen, pero aquí la secuencia propia enlaza trueno ascendente, herida, sangre endurecida, pájaros que muestran alimento, Boupé y Daimú.",
    leccion:
      "Aprender de otros seres y organizar el cuidado común vuelve habitable el mundo compartido.",
    sceneHorizontal:
      "una abertura luminosa cruza el cielo y fragmentos rojos simbólicos descienden hacia personas reunidas en la sabana, con aves y árboles frutales al fondo",
    sceneVertical:
      "Boupé acompaña a un pequeño grupo cerca de una cueva mientras aves muestran frutos y Daimú sugiere el descanso bajo un cielo sereno",
    researchNotes:
      "ATRIBUCIÓN: la narración se presenta como versión de la antología, no como cosmogonía única. CAUTELA: no se oculta la posible intervención misionera advertida por fuentes de contexto.",
  }),
  myth({
    slug: "namon-y-la-inundacion",
    title: "Namon y la inundación",
    summary:
      "Namon anuncia una inundación que pocos creen; quienes preparan balsas sobreviven y reciben alimentos cuando las aguas descienden.",
    tags: ["inundación", "Namon", "balsas", "alimentos"],
    narrativeSource: "flood28",
    mito: `Namon avisó a la gente que una gran inundación estaba por llegar. Les dijo que construyeran canoas y balsas para mantenerse sobre el agua. Algunas personas se rieron. Pensaban que Namon estaba mintiendo y no tomaron en serio la advertencia.

Namon disponía de una montaña pequeña que permanecería seca. Allí había un árbol llamado naxaerabo y también alimento. Cuando el agua comenzó a subir, cubrió la tierra. Quienes habían preparado canoas no lograron sobrevivir; en la versión publicada, fueron las personas que estaban sobre balsas quienes quedaron con vida.

El agua estaba por todas partes. Los niños sentían hambre y los sobrevivientes no encontraban tierra donde buscar comida. Namon les dijo que el nivel bajaría, que el mundo volvería a secarse y que una inundación tan grande no ocurriría de nuevo.

Poco a poco las aguas retrocedieron. Los árboles y las hojas habían quedado podridos. Un pavo de monte comenzó a escarbar y encontró gusanos. Ese gesto mostró que la tierra empezaba a ofrecer alimento otra vez, aunque el paisaje había cambiado y la gente aún no sabía qué podía comer.

Namon hizo aparecer sime, descrito en la traducción como un tubérculo silvestre, y jojomo, fruto de palma. Los creó porque las personas no conocían esos alimentos. Así, la supervivencia no terminó al mantenerse a flote: fue necesario aprender de nuevo a comer en una tierra afectada por el agua.

El cierre de la versión menciona otra subida futura. Esta vendría de una calabaza pequeña y no causaría la muerte de todas las personas. La frase se conserva sin convertirla en profecía fechada, doctrina universal ni explicación completa de las crecientes estacionales.

Este relato corresponde al número 28 de Folk Literature of the Cuiva Indians, atribuido en el índice a la recopilación de Isabel Kerr. La versión en línea consultada reproduce las páginas 55 y 56 de la edición de 1991; no es una fuente oral independiente.

El mismo volumen registra por lo menos otras siete entradas tituladas como relatos de inundación. La página no funde sus argumentos, porque el índice por sí solo no muestra quién construye cada embarcación, qué seres aparecen ni cómo concluyen. «Namon y la inundación» nombra únicamente la versión que sí puede leerse completa.`,
    historyCore:
      "Namon and the Flood es el relato 28 del corpus editado por Johannes Wilbert y Karin Simoneau en 1991. La tabla de contenidos lo vincula con la recopilación de Isabel Kerr; la copia abierta consultada reproduce el texto y debe entenderse como una mediación secundaria.",
    versionCore:
      "El índice del volumen reúne por lo menos ocho títulos explícitos de inundación, además de otros relatos cercanos. Se unifican como ciclo documental para evitar páginas repetidas, pero no se combinan sus escenas ni se afirma que una versión invalide las demás.",
    similarityCore:
      "Balsas, advertencias ignoradas y una altura seca aparecen en muchos diluvios. La versión Kuiva consultada se distingue por Namon, el contraste entre canoas y balsas, el naxaerabo, el pavo de monte, sime, jojomo y la pequeña calabaza final.",
    leccion:
      "Escuchar una advertencia y aprender de nuevo del territorio puede sostener la vida colectiva.",
    sceneHorizontal:
      "una balsa con familias atraviesa una sabana cubierta de agua mientras una pequeña altura con un árbol permanece seca bajo el cielo abierto",
    sceneVertical:
      "el agua retrocede entre hojas caídas; un pavo de monte escarba y aparecen un tubérculo silvestre y frutos de palma como señales de alimento",
    researchNotes:
      "UNIFICACIÓN: el ciclo de inundación contiene al menos ocho entradas, pero solo se narra la número 28. MEDIACIÓN: la copia abierta es secundaria y se contrasta con el índice del libro.",
  }),
];

export default kuivaDefinitions;
