export const muiscaLessons = {
  bachue:
    "Lo que nace del agua vuelve al agua, y entre un abrazo y otro queda la vida entera.",
  bochica:
    "Todo maestro termina por desaparecer, pero la huella de lo aprendido sigue abriendo camino.",
  "campos-eliseos":
    "La muerte cambia la forma de los vínculos, no necesariamente su peso.",
  chaquon:
    "La libertad pierde sentido cuando sus huellas destruyen el mundo compartido.",
  chia:
    "Madurar también consiste en saber cuándo ocupar espacio y cuándo devolverlo.",
  chibchacum:
    "Todo poder termina cargando el peso de sus actos, y hasta los hombros divinos se cansan de sostener lo que provocaron.",
  chiminigagua:
    "Toda claridad viaja dentro de lo que parece oscuridad, porque la noche es su envoltura, no su contrario.",
  "creacion-muiscas":
    "Habitar el mundo no es poseerlo, sino aprender a continuarlo.",
  cuchavira:
    "La esperanza no resuelve el peligro: abre un lugar interior desde el cual actuar.",
  "el-bermejo-aspira-a-ser-rey":
    "Una causa justa se corrompe cuando convierte a los demás en instrumentos.",
  "el-castigo-de-chaquen":
    "Ninguna norma es justa si necesita borrar la voz de quien la quebranta.",
  "el-dorado":
    "Lo que entregamos puede revelar mejor nuestra riqueza que aquello que acumulamos.",
  "el-hijo-del-sol-goranchacha":
    "Ningún origen extraordinario absuelve la responsabilidad de una vida ordinaria.",
  "el-origen-del-lago-tota":
    "Cuidar un lugar comienza por aceptar que nunca nos pertenece por completo.",
  "el-pozo-de-hunzahua":
    "El valor de algo no depende de que pueda extraerse, venderse o poseerse.",
  "el-primero-de-los-reyes":
    "La autoridad también está hecha de relatos, y todo relato puede ser examinado.",
  "el-sol-y-la-luna":
    "La noche no es el fracaso del día, sino la otra mitad de la misma luz.",
  "el-tequendama":
    "La fuerza que inunda y la que alimenta son la misma; solo cambia el cauce que se le abre.",
  "en-el-principio-fue-el-maiz":
    "La riqueza que alimenta exige más paciencia que la riqueza que deslumbra.",
  "fu-el-dios-de-la-torpeza":
    "Equivocarse puede abrir una posibilidad, pero no cancela la responsabilidad.",
  huitaca:
    "Todo orden guarda lo que la fiesta derrama, y toda fiesta celebra lo que el orden protege.",
  hunzahua:
    "El deseo no se vuelve justo por venir acompañado de poder.",
  idacanzas:
    "Prever solo importa cuando transforma la manera en que cuidamos lo posible.",
  "la-aparicion-del-hombre":
    "La humanidad comienza cuando alguien responde a la presencia de otro.",
  "la-cacica-de-guatavita":
    "La memoria permanece viva cuando puede corregirse sin perder sus raíces.",
  "la-competencia":
    "Medir una capacidad nunca equivale a medir el valor de una persona.",
  "la-herencia":
    "Heredar no es recibir el pasado intacto, sino decidir qué futuro permite.",
  "la-historia-del-bermejo":
    "Pertenecer no exige dejar de ser, sino aprender a responder por otros.",
  "la-madre-de-los-hombres":
    "Quien verdaderamente enseña prepara a los demás para continuar sin su presencia.",
  "los-cojines-del-zaque":
    "Observar es reconocer un orden que ninguna autoridad ha creado.",
  "los-dioses-civilizadores":
    "Enseñar empieza por reconocer que ningún lugar está vacío de saber.",
  "los-mojas":
    "El honor deja de serlo cuando exige renunciar a la propia voz.",
  meicuchuca:
    "Amar a alguien no concede el derecho de definirlo por completo.",
  nemequene:
    "Una ley pierde legitimidad cuando quien la impone se declara excepción.",
  nencatacoa:
    "La alegría compartida no interrumpe el trabajo: también lo sostiene.",
  nompanem:
    "Gobernar bien exige recordar que la inteligencia siempre está distribuida.",
  pacanchique:
    "El dolor explica nuestros actos, pero no los vuelve inocentes.",
  popon:
    "La verdad necesita coraje para decirse y responsabilidad para ser escuchada.",
  tomagata:
    "El miedo completa por dentro el poder que apenas se insinúa afuera.",
  "toquecha-y-toquilla":
    "Toda creación nos vuelve responsables de aquello que hacemos posible.",
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
