import { defineWayuuMyth } from "../define-editorial-myth.mjs";

const mito = `Siki, el Fuego, vivía como un joven que no quería trabajar. Pasaba los días tendido en el chinchorro mientras su mujer recorría los ranchos buscando comida. La suegra lo reprendía, pero él prefería guardar su fuerza y su luz.

Nadie más conocía el fuego. La comida se comía cruda y en las noches la oscuridad entraba hasta las hamacas. Siki ocultaba lo que llevaba dentro.

Mareiwa decidió que aquel bien no podía permanecer encerrado. Envió primero a varios animales para descubrir el secreto. Unos se acercaron demasiado pronto y huyeron; otros no entendieron dónde estaba escondida la llama.

Junuunay, un joven de movimientos rápidos, observó con paciencia. Supo que Siki guardaba el fuego en su cuerpo y que solo lo mostraba cuando creía estar a salvo. Esperó el momento en que la brasa quedó al alcance y la tomó.

Siki despertó sobresaltado. Corrió detrás del ladrón, pero Junuunay ya había entregado la llama a quienes aguardaban. Cada persona buscó una rama seca. El fuego pasó de mano en mano y encendió muchos fogones.

La península cambió. La carne pudo asarse. La luz mantuvo lejos la noche alrededor de los ranchos. Las familias aprendieron a conservar una brasa bajo la ceniza para no empezar de nuevo cada mañana.

Siki, furioso por la pérdida, persiguió a quienes habían participado. En unas versiones, Maleiwa lo castigó y distribuyó su energía entre maderas capaces de producirla por fricción. En otras, animales como el conejo o el junco intervienen en el robo y reciben marcas sobre el cuerpo. Ninguno sale intacto.

La mujer de Siki lo buscó por los montes. Lo llamó una y otra vez, pero el fuego ya no podía volver a ser posesión de una sola casa. Estaba escondido en dos varitas, esperando el roce preciso; dormía en la leña y despertaba con aire y cuidado.

Desde entonces, encender un fogón repite aquella disputa. La llama alimenta y reúne, pero también quema si se la abandona. Lo que fue arrancado del secreto se convirtió en responsabilidad compartida.`;

const historia = `José Enrique Finol transcribe y analiza tres versiones del origen del fuego. Dos proceden de Ramón Paz Ipuana y otra de Michel Perrin. Finol eligió una para su análisis principal, pero conservó las demás para mostrar que cambian protagonista, auxiliares, forma del robo y desenlace. La ficha anterior mezclaba nombres y acciones de esas versiones sin advertir al lector.

Paz Ipuana era escritor e investigador Wayuu y dominaba la lengua de su pueblo. Finol defiende su posición privilegiada para recopilar y traducir, pero reconoce el “embellecimiento” literario de sus textos. Perrin, por su parte, registró en wayuunaiki, realizó una traducción yuxtalineal con jóvenes bilingües y después produjo su versión francesa. Las dos líneas tienen mediaciones distintas; ninguna es una voz sin edición.

El motivo del fuego se relaciona con una necesidad material evidente: cocer alimentos, producir luz y organizar el espacio nocturno. Sin embargo, el mito no es un manual técnico ni una cronología de la primera combustión. Convierte la circulación de un bien en problema social. Mientras Siki acapara, los demás viven en carencia; al repartirse la llama, aparecen beneficios y peligros.

La prosa revisada conserva el núcleo común —fuego personificado, posesión exclusiva, robo o distribución y permanencia en maderas— y evita convertir a Junuunay en un Prometeo local. Los nombres y papeles que cambian quedan atribuidos en Versiones.

No ubicamos el episodio en una ranchería precisa. El punto cartográfico representa de manera aproximada la península Wayuu.`;

const versiones = `En una versión de Paz Ipuana, Siki es un joven ocioso sostenido por su mujer. La acción revela que el fuego, aunque personificado, puede quedar contenido y luego liberarse para uso humano. El desenlace explica la presencia de Siki en maderas que producen llama al frotarse.

Otra versión amplía la intervención de Mareiwa y de animales. El ladrón, los perseguidores y las marcas corporales cambian. En la versión recopilada por Perrin, la secuencia se organiza con otros nombres y una relación distinta entre quien posee el fuego y quienes logran repartirlo. Finol muestra que todas trabajan oposiciones entre posesión y carencia, crudo y cocido, secreto y distribución.

La ficha anterior unía las tres como si fueran capítulos consecutivos: un joven holgazán, un robo heroico, castigos animales y una persecución final. Esta edición construye un Relato legible a partir del núcleo coincidente y conserva las divergencias aquí. No atribuye a una versión detalles tomados de otra.

“Creación Wayuu” se relaciona con esta página porque ambos relatos explican bienes necesarios para habitar el mundo. No se fusionan: el fuego posee un ciclo narrativo propio, con tres versiones publicadas y un conflicto específico sobre quién puede guardar un recurso.`;

const leccion =
  "Un bien que sostiene a todos deja de ser privilegio y se convierte en cuidado compartido.";

const similitudes = `El paralelo más conocido es Prometeo, narrado por Hesíodo: el fuego llega a los humanos mediante una disputa con el poder divino y desencadena consecuencias. La semejanza está en la transferencia de una capacidad decisiva; la diferencia, en que Siki puede ser a la vez persona, energía y presencia vegetal, dentro de relaciones propias del mundo Wayuu.

El Popol Vuh presenta a los primeros seres enfrentando la oscuridad y el problema de conservar el fuego bajo lluvia intensa. Allí el acceso a la llama también organiza alianzas y dependencia. No hay evidencia de que una tradición derive de la otra; el motivo permite comparar cómo cocinar, iluminar y vivir juntos se vuelven preguntas cosmológicas.

Dentro del corpus Wayuu, “Serranías de La Guajira” explica la distribución de semillas y alimentos. Ambos relatos rechazan un mundo donde un recurso esencial queda inmóvil: aves reparten frutos y la llama pasa a muchas casas. “Los dominios de Juyá” vuelve sobre la abundancia y la obligación de compartir la caza. En cada caso, la escasez no se resuelve con acumulación ilimitada, sino mediante circulación, alternancia y responsabilidad.`;

export default defineWayuuMyth({
  slug: "el-origen-del-fuego",
  title: "El origen del fuego",
  mito,
  historia,
  versiones,
  leccion,
  similitudes,
  excerpt:
    "Siki guarda el fuego mientras los demás viven sin luz ni comida cocida. Su secreto es descubierto y la llama pasa a todas las casas.",
  seoTitle: "El origen del fuego: mito Wayuu de Siki",
  seoDescription:
    "Lee el mito Wayuu del origen del fuego: Siki, el robo de la llama y las versiones de Paz Ipuana y Michel Perrin sobre un bien compartido.",
  focusKeywords: [
    "origen del fuego Wayuu",
    "mito de Siki",
    "Siki fuego",
    "mitología Wayuu",
    "Ramón Paz Ipuana",
    "Michel Perrin",
  ],
  tags: ["Maleiwa", "Wayúu", "fuego", "origen", "transformación"],
  sourceKeys: [
    "finol2007",
    "pazIpuana",
    "perrin1980",
    "perrin1979",
    "minculturaWayuu",
    "hesiod",
    "popolVuh",
  ],
  researchNotes: `NÚCLEO: fuego personificado y acaparado; intervención para transferirlo a los humanos; permanencia de su energía en maderas; consecuencias para participantes.

VERSIONES: Finol publica tres versiones, dos de Paz Ipuana y una de Perrin. Se retira la falsa continuidad de la ficha anterior.

CAUTELA: Junuunay no se presenta como “Prometeo Wayuu”; la comparación se limita al motivo de transferencia del fuego.

IMAGEN: se conserva la imagen actual; no se generaron activos.

GEOGRAFÍA: punto aproximado en territorio Wayuu. Las fuentes no asignan el episodio a una coordenada verificable.`,
});
