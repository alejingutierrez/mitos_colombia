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
    "El gobernante que se desprende del oro vuelve a la orilla más entero que cuando brillaba.",
  "el-hijo-del-sol-goranchacha":
    "Un origen de luz no garantiza que el camino vuelva a ser luz.",
  "el-origen-del-lago-tota":
    "El agua que da de beber no se vence: se aprende a convivir con lo que descansa bajo la superficie.",
  "el-pozo-de-hunzahua":
    "Lo que nace de una falta no se agota en manos de quien solo busca llenarlas.",
  "el-primero-de-los-reyes":
    "El origen anuncia el mando; el mando respira solo en quien interpreta la señal.",
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
    "El deseo que cruza un límite no borra la marca: la deja flotando en el agua y en el viento.",
  idacanzas:
    "Quien aprende a leer el cielo comprende que la verdadera mirada no pide obediencia, sino cuidado.",
  "la-aparicion-del-hombre":
    "Toda humanidad comienza no al ser formada, sino al escuchar y responder a otra voz.",
  "la-cacica-de-guatavita":
    "El agua guarda a quien se atreve a entregarlo todo, y de esa entrega nace la luz que otros persiguen.",
  "la-competencia":
    "Quien corre con el cuerpo de otro en la memoria llega a una meta que nadie ve.",
  "la-herencia":
    "Nadie hereda solo; lo que se reparte vuelve a unir lo que la posesión quiso dividir.",
  "la-historia-del-bermejo":
    "Pertenecer no exige dejar de ser, sino aprender a responder por otros.",
  "la-madre-de-los-hombres":
    "Quien reúne a su gente termina por entregarle el camino que abrió.",
  "los-cojines-del-zaque":
    "El poder no posee el amanecer: solo puede arrodillarse ante lo que no controla.",
  "los-dioses-civilizadores":
    "Enseñar es entrar en conversación con lo que ya existe, y lo que se comparte permanece solo si muchas manos lo continúan.",
  "los-mojas":
    "Quien llama sagrada una voz puede estar callando, sin saberlo, a quien la pronuncia.",
  meicuchuca:
    "Amar a alguien no concede el derecho de definirlo por completo.",
  nemequene:
    "La norma termina en el cuerpo de quien la dicta, y hasta el poder más alto aprende a herirse.",
  nencatacoa:
    "La alegría que celebra lo terminado es la misma fuerza que arrastra lo que todavía pesa.",
  nompanem:
    "El poder que se entrega para aprender regresa a manos que ya saben soltarlo.",
  pacanchique:
    "Quien atraviesa la muerte por amor regresa dueño de una fuerza que no elige dónde se detiene.",
  popon:
    "La advertencia no cambia el destino; solo enciende un instante de luz sobre el agua.",
  tomagata:
    "El poder se sostiene menos en lo que el soberano hace y más en lo que todos imaginan que podría hacer.",
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
