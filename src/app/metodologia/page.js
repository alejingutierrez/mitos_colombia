import { DocumentTemplate } from "../../components/templates";
import { TextLink } from "../../components/atoms";
import {
  getDiverseMyths,
  getFeaturedMythsWithImages,
  getSourceCoverageStats,
} from "../../lib/myths";
import { buildSeoMetadata, getSeoEntry } from "../../lib/seo";

export async function generateMetadata() {
  const seo = await getSeoEntry("page", "metodologia");
  return buildSeoMetadata({
    fallback: {
      title: "Metodología editorial",
      description:
        "Así investigamos, contrastamos, reescribimos y publicamos cada mito colombiano: fuentes, antropología, narrativa, SEO y verificación pública.",
      keywords: [
        "metodología editorial",
        "investigación de mitos",
        "fuentes",
        "antropología",
        "reescritura literaria",
        "SEO",
        "mitos de Colombia",
      ],
    },
    seo,
    canonicalPath: "/metodologia",
  });
}

export const revalidate = 86400;

function getDailySeed() {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const diff = now - startOfYear;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

const sections = [
  {
    title: "Estado y unidad de trabajo",
    body: (
      <>
        <p>
          Esta es la metodología completa de Mitos de Colombia. Bachué abrió la
          validación y la colección de 41 mitos muiscas permitió probar el
          método en serie, medir sus costos y corregir las reglas que todavía no
          funcionaban en la página pública.
        </p>
        <p>
          La unidad de trabajo es un mito completo. Revisamos Relato, Historia,
          Versiones, Lección y Similitudes, pero también fuentes, comunidad,
          taxonomía, imagen, mapa, SEO, datos y publicación. Antes de cambiar
          nada conservamos una copia del registro vigente y medimos su estado
          inicial.
        </p>
        <p>
          El proceso avanza por etapas: alcance, investigación, matriz de
          evidencia, reescritura, capas documentales, clasificación, geografía,
          imagen, SEO y prueba pública. Una etapa no se considera cerrada si
          deja una contradicción importante para que la resuelva la siguiente.
        </p>
      </>
    ),
  },
  {
    title: "Definir el universo antes de investigar",
    body: (
      <>
        <p>
          La ficha de alcance identifica el núcleo narrativo, el pueblo o las
          comunidades atribuidas, los periodos históricos, el territorio, las
          prácticas y objetos relacionados, la cosmogonía, las versiones
          conocidas y los posibles paralelos de otras mitologías.
        </p>
        <p>
          Así evitamos medir la investigación sobre un universo cambiante y
          confundir una región actual, una familia lingüística, una categoría
          colonial y una comunidad viva como si fueran la misma cosa.
        </p>
        <p>
          También registramos nombres alternativos, cambios de grafía y lugares
          homónimos. Una coincidencia de palabras no basta para atribuir un
          relato a un pueblo: la clasificación debe sostenerse en territorio,
          transmisión y fuentes identificables.
        </p>
      </>
    ),
  },
  {
    title: "Cinco fuentes útiles, no cinco enlaces repetidos",
    body: (
      <>
        <p>
          Cada dossier reúne al menos cinco fuentes consultables, distintas y
          útiles. Siempre que existan, deben cubrir cinco funciones: voz
          comunitaria o memoria viva; fuente primaria o versión histórica
          temprana; investigación académica reciente; fuente territorial o
          institucional; y referencia directa para cada comparación universal.
        </p>
        <p>
          Cada fuente conserva título, autor o institución, fecha, enlace,
          tipo, función, resumen de lo que respalda y limitaciones. Cinco páginas
          que copian una misma crónica no forman cinco evidencias. Si no se
          alcanza un respaldo creíble, el mito queda pendiente: no rellenamos el
          expediente con fuentes débiles.
        </p>
        <p>
          No todas las fuentes cumplen la misma función. Una crónica puede
          conservar la versión temprana; un estudio lingüístico puede aclarar
          un nombre; una autoridad ambiental puede precisar el paisaje; y una
          voz comunitaria puede mostrar el sentido que el relato conserva hoy.
          Las usamos juntas sin fingir que dicen lo mismo.
        </p>
      </>
    ),
  },
  {
    title: "Cómo leemos las crónicas coloniales",
    body: (
      <>
        <p>
          Muchas narraciones indígenas llegaron a la escritura mediante
          cronistas, religiosos y funcionarios coloniales. Sus textos son
          indispensables, pero no transparentes: fueron redactados después de
          la invasión, desde lenguas, intereses y categorías ajenas a quienes
          contaban las historias.
        </p>
        <p>
          Por eso registramos quién escribió, cuándo, con qué propósito, qué
          palabras tradujo y qué episodios interpretó desde su propia religión.
          Conservamos lo que la fuente permite conocer y señalamos sus límites.
          No convertimos la fecha del libro en la fecha de origen del mito.
        </p>
        <p>
          Cuando una fuente posterior repite a otra, no la contamos como
          evidencia independiente. Cuando corrige, amplía o contradice el
          registro temprano, indicamos esa relación para que el lector pueda
          seguir la historia de la versión.
        </p>
      </>
    ),
  },
  {
    title: "Matriz de evidencia y tratamiento de la duda",
    body: (
      <>
        <p>
          Antes de redactar, cada afirmación se clasifica como núcleo
          documentado, variante identificada, memoria contemporánea, hipótesis
          académica, lectura editorial o duda. La matriz indica qué fuente
          sostiene cada decisión y qué contradicciones permanecen.
        </p>
        <p>
          Las categorías no se mezclan. Una voz actual no se proyecta
          automáticamente al pasado; una hipótesis conserva el grado de certeza
          de sus autores; una versión tardía se atribuye. Cuando dos versiones
          no pueden conciliarse, se presentan por separado.
        </p>
        <p>
          La duda no es un defecto que deba ocultarse. Si desconocemos el nombre
          de un personaje, la fecha de una variante o el significado exacto de
          un objeto, lo decimos o lo omitimos. La fluidez del relato nunca
          justifica convertir una posibilidad en tradición confirmada.
        </p>
      </>
    ),
  },
  {
    title: "Lectura antropológica sin convertir a una gente en fórmula",
    body: (
      <>
        <p>
          Preguntamos qué necesidad humana organiza el relato y cómo relaciona
          personas, antepasados, animales, paisaje y fuerzas no humanas. También
          observamos parentesco, autoridad, trabajo, intercambio, convivencia,
          ecología, muerte y continuidad.
        </p>
        <p>
          Distinguimos comunidad, pueblo, territorio y periodo. Una crónica
          colonial puede conservar un relato y deformarlo al mismo tiempo. Los
          conceptos se usan con precisión: matrilinealidad, por ejemplo, no
          demuestra por sí sola un matriarcado.
        </p>
        <p>
          Un mito puede iluminar necesidades de origen, alimento, duelo,
          autoridad, cuidado o pertenencia, pero no resume una sociedad entera.
          Separamos lo que ocurre en el relato, lo que sabemos de su contexto y
          la interpretación filosófica que proponemos al lector.
        </p>
        <p>
          La enseñanza profunda se ofrece como posibilidad de pensamiento, no
          como doctrina total de una comunidad ni como moraleja para obedecer.
          Se escribe en una sola frase filosófica de 8 a 22 palabras,
          comprensible fuera del argumento y sin nombres propios ni resumen de
          la trama.
        </p>
      </>
    ),
  },
  {
    title: "El contrato de la narración literaria",
    body: (
      <>
        <p>
          En Relato solo ocurre la historia. No aparecen cronistas, citas,
          fechas, hipótesis ni discusiones entre versiones. La investigación la
          sostiene desde fuera y queda visible en las demás capas.
        </p>
        <p>
          La voz es seria, clara e imaginativa. Un niño puede seguir la acción y
          un adulto encontrar profundidad, sin que el texto infantilice a
          ninguno. La fantasía procede de hechos extraordinarios respaldados; el
          paisaje, el clima, los materiales, los cuerpos y el trabajo la anclan
          en la realidad.
        </p>
        <p>
          Usamos escenas, verbos precisos, detalles sensoriales necesarios,
          ritmo y silencio. La emoción nace de decisiones, pérdidas, cuidados y
          despedidas. Evitamos grandilocuencia, adjetivos acumulados, metáforas
          repetidas y fórmulas intercambiables como “misterio ancestral”.
        </p>
        <p>
          Antes de redactar ordenamos acciones, espacios, cambios y silencios.
          Cada párrafo debe ayudar a ver, escuchar o comprender una decisión. La
          explicación histórica no entra al Relato; aparece después, donde el
          lector puede distinguir con claridad narración y documentación.
        </p>
      </>
    ),
  },
  {
    title: "Libertad literaria y límites",
    body: (
      <>
        <p>
          La reescritura puede ordenar escenas, comprimir el tiempo, construir
          transiciones y añadir detalles sensoriales compatibles con el entorno.
          No puede inventar nombres tradicionales, símbolos culturales,
          vestuarios ceremoniales, parentescos, doctrinas, objetos sagrados ni
          certezas históricas.
        </p>
        <p>
          La extensión orientativa es de 300 a 650 palabras, aunque manda la
          respiración de la historia. El borrador pasa por continuidad,
          precisión y economía, y lectura en voz alta. Una frase solemne que no
          aporta imagen, acción o emoción se elimina.
        </p>
        <p>
          Podemos construir una transición o escoger el punto de vista más claro,
          pero no fabricar un episodio central para completar una ficha débil.
          Cuando la fuente solo conserva un motivo o una descripción ritual, la
          adaptación declara sus elementos literarios en Historia.
        </p>
      </>
    ),
  },
  {
    title: "Comparar sin borrar las diferencias",
    body: (
      <>
        <p>
          Las similitudes con otras mitologías ayudan a situar preguntas humanas
          recurrentes: el origen desde el agua, el descenso al mundo de los
          muertos, el fuego obtenido con riesgo o la transformación de una
          persona en paisaje. La comparación parte de fuentes directas para cada
          tradición.
        </p>
        <p>
          Junto a la semejanza explicamos la diferencia. Dos relatos pueden
          compartir una pareja fundadora y responder a territorios, relaciones
          sociales y desenlaces completamente distintos. Sin evidencia
          histórica no afirmamos préstamo, copia ni contacto entre culturas.
        </p>
        <p>
          El paralelo universal no reemplaza la especificidad colombiana. Su
          función es ampliar la lectura y devolver después la atención a aquello
          que solo este mito, en este lugar, puede decir.
        </p>
      </>
    ),
  },
  {
    title: "Historia, Versiones, Lección y Similitudes",
    body: (
      <>
        <p>
          Historia sitúa transmisión, territorio y contexto social. Versiones
          atribuye las diferencias sin fundirlas. Lección propone, en una sola
          frase breve, una tensión humana que pueda pensarse más allá del
          argumento; no resume escenas, nombra personajes ni da una orden moral.
          Similitudes presenta al menos dos paralelos documentados cuando sean
          pertinentes y explica tanto la resonancia como la diferencia.
        </p>
        <p>
          Una semejanza nunca prueba copia o influencia directa por sí sola. El
          contenido compuesto de la base de datos debe coincidir exactamente con
          los cinco campos editoriales.
        </p>
      </>
    ),
  },
  {
    title: "Clasificación y etiquetas existentes",
    body: (
      <>
        <p>
          Podemos corregir categorías y etiquetas equivocadas, pero únicamente
          reutilizamos las que ya existen. No creamos taxonomías para resolver
          un caso aislado.
        </p>
        <p>
          La decisión sigue el territorio narrado, la atribución cultural y el
          tipo de relato. Si ninguna opción es exacta, elegimos la más cercana
          sin deformar el mito y registramos la limitación. Los campos antiguos
          y las tablas normalizadas deben quedar sincronizados.
        </p>
        <p>
          Una etiqueta sirve para encontrar relatos relacionados; no certifica
          por sí sola una identidad histórica. Por eso revisamos el conjunto
          antes de mover una ficha y dejamos constancia cuando una categoría
          existente es apenas la aproximación menos imprecisa.
        </p>
      </>
    ),
  },
  {
    title: "El punto geográfico pertenece a la historia",
    body: (
      <>
        <p>
          Verificamos las coordenadas con una fuente oficial, territorial o
          cartográfica confiable. El punto debe representar la laguna, cerro,
          río, piedra, cueva o asentamiento del relato, no la cabecera municipal
          ni el acceso turístico más cercano.
        </p>
        <p>
          Si la localización solo puede ser aproximada, se declara. Muchos
          decimales no deben fingir una precisión histórica que las fuentes no
          permiten.
        </p>
        <p>
          Una coordenada correcta no basta si el mapa no se renderiza. La prueba
          en navegador confirma que carguen las teselas y los estilos
          cartográficos globales, y que marcador, controles y atribución queden
          bien posicionados en escritorio y móvil.
        </p>
        <p>
          El mapa orienta, no reemplaza la complejidad territorial. Cuando un
          relato pertenece a una cuenca, una sierra o un territorio amplio,
          evitamos fijarlo artificialmente en un edificio o punto turístico
          moderno.
        </p>
      </>
    ),
  },
  {
    title: "La imagen debe contar el mismo mito",
    body: (
      <>
        <p>
          El enriquecimiento editorial no regenera imágenes por defecto.
          Primero inventariamos lo que ya existe y revisamos pertinencia,
          consistencia, proporción y uso público. Solo las imágenes ausentes o
          expresamente desaprobadas entran en una lista de generación
          autorizada.
        </p>
        <p>
          La horizontal 16:9 es la portada, la imagen social y la representación
          en listados. La vertical es una segunda escena narrativa y aparece una
          sola vez dentro de Relato; nunca es una repetición de la portada. Las
          verticales aprobadas en 2:3 se muestran completas, sin recorte, y la
          horizontal no se reutiliza para rellenar el interior.
        </p>
        <p>
          Antes de gastar en reemplazos auditamos las parejas existentes en
          hojas de contacto. Si una imagen debe cambiar, generamos únicamente el
          mito y la orientación aprobados dentro del sistema visual de maqueta
          artesanal y papel trabajado. Revisamos diferencia entre escenas,
          móvil, peso, formato, texto alternativo y Open Graph.
        </p>
        <p>
          La imagen debe respetar paisaje, escala, materiales y acción. No
          añadimos coronas, ornamentos, templos o símbolos tomados de otras
          culturas para hacerla parecer más “mítica”. El texto alternativo
          describe la escena sin convertir la ilustración en prueba histórica.
        </p>
      </>
    ),
  },
  {
    title: "SEO profesional y específico",
    body: (
      <>
        <p>
          Cada página define una intención de búsqueda principal. El título SEO
          nombra el mito y su rasgo distintivo; el H1 puede ser más literario sin
          ocultar la identidad. La descripción cuenta qué encontrará el lector,
          sin clickbait ni promesas genéricas de misterio.
        </p>
        <p>
          Verificamos título con marca, descripción de aproximadamente 120 a 160
          caracteres, canonical único, palabras clave, Open Graph, Twitter,
          imagen social, datos estructurados de artículo y migas de pan, fecha
          de revisión y citas. Los nombres alternativos solo se usan si están
          documentados.
        </p>
        <p>
          Las palabras clave nacen del contenido investigado. No repetimos
          términos de búsqueda de forma artificial ni prometemos versiones
          “secretas” o “definitivas”. Una página fácil de encontrar debe seguir
          siendo fiel a lo que sus fuentes permiten afirmar.
        </p>
      </>
    ),
  },
  {
    title: "Integridad del registro y posibilidad de corregir",
    body: (
      <>
        <p>
          La publicación empieza con un ensayo sin escritura. El validador
          comprueba fuentes y URLs, campos obligatorios, extensión, enseñanza de
          una sola frase y 8 a 22 palabras, límites SEO, contenido compuesto,
          taxonomía y coordenadas.
        </p>
        <p>
          Antes de modificar la base de datos guardamos una copia durable del
          mito, expediente, fuentes, palabras clave, etiquetas y SEO. Una sola
          transacción actualiza todas las capas; si algo falla, la ficha no queda
          a medias. El respaldo y el registro de decisiones permiten restaurar
          la versión anterior.
        </p>
      </>
    ),
  },
  {
    title: "Correcciones, comunidad y derecho de respuesta",
    body: (
      <>
        <p>
          El archivo está abierto a correcciones documentadas. Una persona o
          comunidad vinculada puede señalar una atribución equivocada, aportar
          una versión local, pedir mayor precisión o advertir que una imagen,
          nombre o explicación resulta inadecuada.
        </p>
        <p>
          La corrección se registra, contrasta y responde. No exigimos que una
          memoria viva coincida con una crónica para reconocer su valor, pero
          tampoco mezclamos ambas épocas como si fueran un único testimonio. Si
          el cambio afecta la interpretación central, la ficha vuelve a revisión
          completa.
        </p>
        <p>
          Una versión consistente del archivo nunca tiene prioridad sobre una
          evidencia mejor. La revisión permanece abierta porque las fuentes, las
          comunidades y nuestra propia comprensión pueden cambiar.
        </p>
      </>
    ),
  },
  {
    title: "Pruebas locales y verdad de producción",
    body: (
      <>
        <p>
          El expediente debe superar pruebas automáticas, lint, compilación de
          producción, reconstrucción del contenedor y lectura de las rutas
          locales. Después registramos commit y despliegue y esperamos el estado
          exitoso del proveedor.
        </p>
        <p>
          Finalmente abrimos la URL canónica en un navegador real. Allí
          revisamos texto, fuentes y enlaces, portada horizontal, vertical única
          dentro del Relato, etiquetas, mapa completo, metadatos, datos
          estructurados, consola y errores de ejecución. Código correcto en el
          repositorio no equivale a contenido publicado correctamente.
        </p>
        <p>
          También comprobamos lectura en móvil, enlaces externos, texto
          alternativo, recortes, ubicación del marcador y ausencia de errores
          visibles. Publicar no es el final: una regresión técnica o una fuente
          rota puede reabrir una ficha ya aprobada.
        </p>
      </>
    ),
  },
  {
    title: "Rúbrica, bloqueos y entregables",
    body: (
      <>
        <p>
          Cada mito aprueba cinco dimensiones: Evidencia, Narrativa, Lectura
          cultural, Edición y descubrimiento, y Operación. Son bloqueos: respaldo
          insuficiente, nombres o doctrinas inventados, variantes convertidas en
          una falsa certeza, taxonomías nuevas, campos desincronizados, ausencia
          de copia recuperable, escritura parcial o falta de verificación
          pública.
        </p>
        <p>
          El cierre deja dossier, matriz, cinco textos, fuentes, decisiones de
          clasificación, imagen, geografía y SEO, respaldo, informe de pruebas,
          URL pública, commit, despliegue, fecha de revisión y dudas pendientes.
        </p>
      </>
    ),
  },
  {
    title: "Aprendizajes del piloto y escala",
    body: (
      <>
        <p>
          El piloto muisca confirmó que primero debemos definir el universo
          canónico, investigar y editar; la generación visual es un flujo
          posterior y optativo. También dejó reglas durables: una función por
          orientación, enseñanza filosófica breve, sincronía exacta entre
          campos y contenido, y revisión real de mapas, imágenes y consola.
        </p>
        <p>
          La colección entregó 41 expedientes documentados, 41 enseñanzas
          breves y una pareja visual por mito. Veinte verticales se conservaron
          literalmente en 2:3 por decisión editorial. Las correcciones se hacen
          por lotes auditables y orientaciones puntuales: no se repite un lote
          completo para resolver un fallo aislado.
        </p>
      </>
    ),
  },
];

export default async function MetodologiaPage() {
  const seed = getDailySeed();
  const [featuredMyths, diverseMyths, sourceCoverage] = await Promise.all([
    getFeaturedMythsWithImages(6, seed),
    getDiverseMyths(6, seed),
    getSourceCoverageStats(),
  ]);

  const sourceCoverageSection = {
    title: "Fuentes, adaptación y estado del archivo",
    body: (
      <>
        <p>
          Región y comunidad sitúan un relato, pero no reemplazan una referencia
          documental. Hoy, {sourceCoverage.mythsWithSources} de{" "}
          {sourceCoverage.totalMyths} fichas públicas tienen fuentes editoriales
          enlazadas; las demás indican que su bibliografía está pendiente.
        </p>
        <p>
          Los textos son adaptaciones editoriales para lectura digital. Cada
          ficha separa la narración de su contexto, atribuye sus versiones,
          registra las decisiones de clasificación y conserva enlaces que
          permiten regresar a los documentos. Las fuentes no deben confundirse
          con nuestra narración.
        </p>
        <p>
          Si perteneces a una comunidad vinculada, conservas una versión local o
          encuentras un error, puedes enviar la referencia desde{" "}
          <TextLink href="/contacto">Contacto</TextLink>. Una corrección
          documentada tiene prioridad sobre la consistencia aparente del
          archivo.
        </p>
      </>
    ),
  };

  const relatedPool =
    (featuredMyths || []).length >= 6 ? featuredMyths : diverseMyths;
  const related = (relatedPool || []).slice(0, 6).map((myth) => ({
    slug: myth.slug,
    title: myth.title,
    excerpt: myth.excerpt,
    region: myth.region,
    community: myth.community,
    imageUrl: myth.image_url,
  }));

  return (
    <DocumentTemplate
      eyebrow="Metodología editorial · versión 1.2"
      title="Investigar antes de volver a contar"
      description="El estándar completo para documentar, narrar y publicar cada mito con imaginación, respeto cultural y evidencia verificable."
      breadcrumb={[{ label: "Inicio", href: "/" }, { label: "Metodología" }]}
      updated="27 de julio de 2026"
      sections={[sourceCoverageSection, ...sections]}
      related={related}
      accent="river"
    />
  );
}
