export const muiscaLessons = {
  bachue:
    "Lo que nace del agua vuelve al agua, y entre un abrazo y otro queda la vida entera.",
  bochica:
    "Todo maestro termina por desaparecer, pero la huella de lo aprendido sigue abriendo camino.",
  "campos-eliseos":
    "La muerte cambia la forma de los vínculos, no necesariamente su peso.",
  chaquon:
    "El límite no separa: nombra lo que la tierra guarda para todos.",
  chia:
    "Madurar también consiste en saber cuándo ocupar espacio y cuándo devolverlo.",
  chibchacum:
    "Todo poder termina cargando el peso de sus actos, y hasta los hombros divinos se cansan de sostener lo que provocaron.",
  chiminigagua:
    "Toda claridad viaja dentro de lo que parece oscuridad, porque la noche es su envoltura, no su contrario.",
  "creacion-muiscas":
    "El mundo se vuelve visible para ser habitado, y todo lo que emerge de las aguas regresa a ellas.",
  cuchavira:
    "El arco no abre el cielo: enseña el punto exacto donde la tormenta termina.",
  "el-bermejo-aspira-a-ser-rey":
    "Una causa justa se corrompe cuando convierte a los demás en instrumentos.",
  "el-castigo-de-chaquen":
    "Todo límite cruzado deja en el paisaje la memoria de un orden que ya no vuelve a juntarse.",
  "el-dorado":
    "Lo que entregamos puede revelar mejor nuestra riqueza que aquello que acumulamos.",
  "el-hijo-del-sol-goranchacha":
    "Ningún origen extraordinario absuelve la responsabilidad de una vida ordinaria.",
  "el-origen-del-lago-tota":
    "El agua que da de beber no se vence: se aprende a convivir con lo que descansa bajo la superficie.",
  "el-pozo-de-hunzahua":
    "El valor de algo no depende de que pueda extraerse, venderse o poseerse.",
  "el-primero-de-los-reyes":
    "La autoridad también está hecha de relatos, y todo relato puede ser examinado.",
  "el-sol-y-la-luna":
    "La noche no es el fracaso del día, sino la otra mitad de la misma luz.",
  "el-tequendama":
    "La fuerza que inunda y la que alimenta son la misma; solo cambia el cauce que se le abre.",
  "en-el-principio-fue-el-maiz":
    "La riqueza que se oculta bajo la tierra no se pierde: cambia de forma y regresa multiplicada.",
  "fu-el-dios-de-la-torpeza":
    "Del paso en falso nace una chispa, y el mundo se ordena de nuevo en lo que no se planeó.",
  huitaca:
    "Todo orden guarda lo que la fiesta derrama, y toda fiesta celebra lo que el orden protege.",
  hunzahua:
    "El deseo no se vuelve justo por venir acompañado de poder.",
  idacanzas:
    "Prever solo importa cuando transforma la manera en que cuidamos lo posible.",
  "la-aparicion-del-hombre":
    "Toda humanidad comienza no al ser formada, sino al escuchar y responder a otra voz.",
  "la-cacica-de-guatavita":
    "La memoria permanece viva cuando puede corregirse sin perder sus raíces.",
  "la-competencia":
    "Quien corre con el cuerpo de otro en la memoria llega a una meta que nadie ve.",
  "la-herencia":
    "Nadie hereda solo; lo que se reparte vuelve a unir lo que la posesión quiso dividir.",
  "la-historia-del-bermejo":
    "Pertenecer no exige dejar de ser, sino aprender a responder por otros.",
  "la-madre-de-los-hombres":
    "Quien reúne a su gente termina por entregarle el camino que abrió.",
  "los-cojines-del-zaque":
    "Observar es reconocer un orden que ninguna autoridad ha creado.",
  "los-dioses-civilizadores":
    "Enseñar es entrar en conversación con lo que ya existe, y lo que se comparte permanece solo si muchas manos lo continúan.",
  "los-mojas":
    "El honor deja de serlo cuando exige renunciar a la propia voz.",
  meicuchuca:
    "Amar a alguien no concede el derecho de definirlo por completo.",
  nemequene:
    "Una ley pierde legitimidad cuando quien la impone se declara excepción.",
  nencatacoa:
    "La alegría que celebra lo terminado es la misma fuerza que arrastra lo que todavía pesa.",
  nompanem:
    "Gobernar bien exige recordar que la inteligencia siempre está distribuida.",
  pacanchique:
    "El dolor explica nuestros actos, pero no los vuelve inocentes.",
  popon:
    "La verdad necesita coraje para decirse y responsabilidad para ser escuchada.",
  tomagata:
    "El miedo completa por dentro el poder que apenas se insinúa afuera.",
  "toquecha-y-toquilla":
    "Lo que se modela con paciencia puede arrebatarse en un instante y no volver jamás.",
  "veneracion-a-los-soberanos":
    "La autoridad se vuelve más humana cuando puede soportar una mirada.",
};

function composeContent({ mito, historia, versiones, leccion, similitudes }) {
  return [
    ["Mito", mito],
    ["Historia", historia],
    ["Versiones", versiones],
    ["Lección", leccion],
    ["Similitudes", similitudes],
  ]
    .map(([heading, body]) => `${heading}\n${body}`)
    .join("\n\n");
}

export function withMuiscaLesson(myth) {
  const leccion = muiscaLessons[myth.slug];
  if (!leccion) {
    throw new Error(`${myth.slug}: falta la enseñanza breve del piloto muisca.`);
  }

  return {
    ...myth,
    leccion,
    content: composeContent({
      ...myth,
      leccion,
    }),
  };
}
