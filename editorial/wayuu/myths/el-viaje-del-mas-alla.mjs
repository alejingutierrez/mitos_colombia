import { defineWayuuMyth } from "../define-editorial-myth.mjs";

const mito = `Un hombre lloró durante mucho tiempo a su esposa muerta. Una noche ella apareció en sueño con forma humana. Él intentó alcanzarla, pero siempre quedaba a unos pasos.

Al amanecer la mujer le preguntó por qué la perseguía. Le recordó que ya era una sombra y lo invitó a seguirla si no podía dejar de llorar.

Lo cargó sobre la espalda y caminó sobre el mar en dirección a Jepira. Avanzaba con la rapidez de un pelícano. En la otra orilla encontraron al alcaraván que guardaba el agua de los yolujaa.

El hombre tenía sed y bebió. Después continuaron hacia el lugar de los muertos. Allí reconoció parientes y asistió a reuniones cuya apariencia no coincidía con el mundo de los vivos.

Quiso permanecer junto a su esposa, pero ella participaba en una vida que él no podía controlar. En una danza, el viudo sintió celos y comprendió que el parentesco y las relaciones se reorganizaban en Jepira.

Intentó regresar. Tomó un camino equivocado y caminó durante una luna hasta llegar al dominio de Juyá. Una vaca vieja lo condujo hacia la casa.

Juyá lo recibió como nieto y le ofreció un banco que al hombre le parecía boa. Luego le pidió cazar. Cuando buscaba corzos veía a una persona con arco; cuando buscaba venados veía a un hombre rico; cuando buscaba conejos encontraba gente jugando.

Juyá le enseñó a disparar. Después de caer, aquellas figuras tomaban apariencia animal. Las patillas hablaban y parecían familias; las auyamas parecían personas de grandes vientres. El visitante tuvo que aprender otra manera de ver.

Pülowi marcaba un límite que no debía cruzar. El hombre desobedeció o miró lo que no podía sostener y cayó. Una anciana araña lo ayudó a regresar al mundo humano.

Volvió envejecido. Su madre y su hermana apenas lo reconocieron. Debía guardar silencio sobre lo visto.

Durante un tiempo cumplió. Después habló. Al revelar el viaje, perdió la vida y volvió al mundo que había intentado abandonar.

La esposa no regresa como premio del duelo. Ella abre el camino y sigue perteneciendo a los muertos. El viaje transforma al viudo, pero no revoca su muerte ni le devuelve autoridad sobre ella.`;

const historia = `Michel Perrin recogió esta versión en wayuunaiki y trabajó con traducciones sucesivas antes de publicarla. Finol la reproduce en castellano como “El viaje al más allá” y la llama “Eurídice guajira”, comparación que ayuda a identificar un motivo, pero puede subordinar la historia Wayuu a un modelo griego.

La versión comienza con duelo, sueño y decisión de la esposa muerta. A diferencia de Ulépala, el hombre no sale a reunir una dote ni encuentra a la joven muerta durante su ausencia. Ella tiene piedad de su llanto y lo carga hasta Jepira.

Perrin estudió Jepira, yolujaa, Juyá, Pülowi y el tránsito de los muertos. Su trabajo preserva una proximidad mayor con la lengua que muchas recopilaciones castellanas, aunque pasó por ayudantes bilingües, traducción francesa y edición. No existe acceso transparente a una voz sin mediación.

La ficha anterior mezclaba ambas versiones y atribuía a una sola todos los episodios. La revisión reserva aquí el inicio Perrin —persecución, carga sobre el mar, alcaraván— y mantiene en Ulépala el rapto, dote, algodón y cardenal.

Las escenas de caza convierten personas en animales desde la perspectiva del visitante. Se narran sin celebrar violencia humana real: pertenecen al cambio de apariencia entre dominios.

La esposa muerta conserva voluntad propia durante el recorrido. Esa agencia impide leer la historia únicamente como aventura masculina de conquista, rescate o recuperación de una pareja.`;

const versiones = `Perrin ofrece la versión canónica de esta página. Paz Ipuana ofrece “La historia de Ulépala”. Finol compara ambas y encuentra una arquitectura compartida: tierra familiar, Jepira y dominio de Juyá.

Los nombres, el modo de morir de la mujer, el viaje hacia el mar, los trabajos y el final cambian. En Perrin, la esposa carga al viudo y aparece el alcaraván guardián del agua. En Paz, Ulépala viaja con la mujer y su corazón termina como cardenal.

La ficha previa llamaba a la araña “Alekerü”. Waleker es la araña vinculada con tejido en otra historia; las ortografías no bastan para afirmar identidad. Aquí se conserva “anciana araña” cuando la fuente no exige un nombre inequívoco.

“Los dominios de Juyá” no es una tercera versión. Es una página focal que explica el segmento compartido de formas humanas, caza, alimentos y aprendizaje.

Mantener dos páginas de versiones está plenamente justificado porque el sitio ya las publica y porque sus inicios distribuyen de manera muy distinta toda la agencia de la mujer muerta.`;

const leccion =
  "El duelo puede abrir caminos de memoria, pero no devuelve posesión sobre quien ya pertenece a otro mundo.";

const similitudes = `Orfeo y Eurídice ofrecen el paralelo más conocido: un vivo intenta atravesar la muerte por su pareja y una condición impide conservar el regreso. Finol usó esa semejanza, pero Jepira no es Hades y la esposa Wayuu guía activamente el trayecto.

Ulépala es la comparación interna imprescindible. Las dos versiones comparten espacios y transformaciones, pero una empieza con rapto y dote, la otra con llanto y piedad de la muerta. Las diferencias modifican la ética del relato.

“Los dominios de Juyá” expande la inversión de apariencias. “Jaichuasay” convierte a un cazador en venado; en el dominio de Juyá, un visitante debe aprender que una persona vista puede ser presa desde otra perspectiva.

Las geografías de Jepira relacionan mar, Cabo de la Vela, sueños y memoria funeraria. Comparar ese paisaje con otros inframundos puede orientar al lector, pero no debe transformar un lugar vivo y territorial en una decoración universal de “más allá”.`;

export default defineWayuuMyth({
  slug: "el-viaje-del-mas-alla",
  title: "El viaje del más allá",
  mito,
  historia,
  versiones,
  leccion,
  similitudes,
  excerpt:
    "Una mujer muerta carga a su esposo hasta Jepira; el viudo cruza el dominio de Juyá y vuelve con una condición de silencio.",
  seoTitle: "El viaje del más allá: versión Wayuu",
  seoDescription:
    "Lee la versión de Michel Perrin del viaje Wayuu a Jepira: esposa muerta, alcaraván, dominio de Juyá, formas cambiantes y regreso.",
  focusKeywords: [
    "El viaje del más allá Wayuu",
    "Jepira",
    "Michel Perrin",
    "Juyá y Pülowi",
    "yolujaa",
    "mitos de la muerte Wayuu",
  ],
  tags: ["Wayúu", "amor", "guajiro", "muerte"],
  sourceKeys: [
    "perrin1980",
    "finol2007",
    "perrin1979",
    "geografiasMiticas",
    "uisViaje",
    "pazIpuana",
    "ovidOrpheus",
  ],
  researchNotes: `CADENA: Perrin registra en wayuunaiki con traducción asistida; Finol reproduce y compara.

NÚCLEO: viudo, esposa en sueño, carga sobre el mar, Jepira, alcaraván, duelo/celos, camino de Juyá, aprendizaje y regreso condicionado.

RELACIÓN: versión distinta de Ulépala; Los dominios de Juyá es episodio focal compartido.

IMAGEN: se mantiene la imagen existente.

GEOGRAFÍA: punto aproximado en Jepira/Cabo de la Vela; el itinerario sobrenatural no se cartografía literalmente.`,
});
