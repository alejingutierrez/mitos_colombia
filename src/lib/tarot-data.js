const MAJOR_ARCANA = [
  "El Loco",
  "El Mago",
  "La Sacerdotisa",
  "La Emperatriz",
  "El Emperador",
  "El Hierofante",
  "Los Enamorados",
  "El Carro",
  "La Fuerza",
  "El Ermitaño",
  "La Rueda de la Fortuna",
  "La Justicia",
  "El Colgado",
  "La Muerte",
  "La Templanza",
  "El Diablo",
  "La Torre",
  "La Estrella",
  "La Luna",
  "El Sol",
  "El Juicio",
  "El Mundo",
];

const CARD_LIST = [
  { card: "El Loco", myth: "Los meneses" },
  { card: "El Mago", myth: "Pedro, el mago travieso" },
  { card: "La Sacerdotisa", myth: "Unámarai, padre de Yajé" },
  { card: "La Emperatriz", myth: "Bachué" },
  { card: "El Emperador", myth: "El primero de los reyes" },
  { card: "El Hierofante", myth: "El Chuchun y las tres quebradas." },
  { card: "Los Enamorados", myth: "Kimaku" },
  { card: "El Carro", myth: "Tradiciones relativas a la conquista" },
  { card: "La Fuerza", myth: "El Indio Kuriruputá" },
  { card: "El Ermitaño", myth: "El ermitaño iracundo" },
  { card: "La Rueda de la Fortuna", myth: "Rambao" },
  { card: "La Justicia", myth: "Yepá castiaga a los animales" },
  { card: "El Colgado", myth: "Los cojines del Zaque" },
  { card: "La Muerte", myth: "El Indio Pushalna" },
  { card: "La Templanza", myth: "Los delfines dorados" },
  { card: "El Diablo", myth: "El diablo del puente del Común" },
  { card: "La Torre", myth: "El trueno" },
  { card: "La Estrella", myth: "La puerta del perdón" },
  { card: "La Luna", myth: "Los animales" },
  { card: "El Sol", myth: "El sol - Mama" },
  { card: "El Juicio", myth: "A Dios rogando y con el mazo dando\u0020" },
  { card: "El Mundo", myth: "El universo" },
  { card: "As de Bastos", myth: "La candela - Gotze" },
  { card: "Dos de Bastos", myth: "Yepá abandona la tierra" },
  { card: "Tres de Bastos", myth: "El hijo de Tuhixana" },
  { card: "Cuatro de Bastos", myth: "El paisa y el gringo" },
  { card: "Cinco de Bastos", myth: "La competencia\u0020" },
  { card: "Seis de Bastos", myth: "Yarokamena" },
  { card: "Siete de Bastos", myth: "En el sitio de Morillo" },
  { card: "Ocho de Bastos", myth: "El poblamiento" },
  { card: "Nueve de Bastos", myth: "El gran verano" },
  { card: "Diez de Bastos", myth: "El talismán fúnebre" },
  { card: "Paje de Bastos", myth: "La visita del joven desconocido" },
  { card: "Caballero de Bastos", myth: "El viaje al cielo" },
  { card: "Reina de Bastos", myth: "Un libertador piedecuestano" },
  { card: "Rey de Bastos", myth: "Nemequene" },
  { card: "As de Copas", myth: "La madre agua" },
  { card: "Dos de Copas", myth: "Amanecer llanero" },
  { card: "Tres de Copas", myth: "Los tres cachacos y la cantara de Ron Ñeque" },
  { card: "Cuatro de Copas", myth: "El mal del mar" },
  { card: "Cinco de Copas", myth: "La llorona" },
  { card: "Seis de Copas", myth: "El llano, ayer, hoy" },
  { card: "Siete de Copas", myth: "La Majayura que pierde a los hombres" },
  { card: "Ocho de Copas", myth: "Las Wanulus y el Valle de la Muerte" },
  { card: "Nueve de Copas", myth: "El Dominguez" },
  { card: "Diez de Copas", myth: "La clave de la felicidad\u0020" },
  { card: "Paje de Copas", myth: "El niño serpiente" },
  { card: "Caballero de Copas", myth: "Marineritis sentimental" },
  { card: "Reina de Copas", myth: "El origen del agua" },
  { card: "Rey de Copas", myth: "Este era un rey que tenía dos hijas bonitas" },
  { card: "As de Espadas", myth: "La mala mujer" },
  { card: "Dos de Espadas", myth: "Moe e Ipi" },
  { card: "Tres de Espadas", myth: "Jitoma y Fiboi" },
  { card: "Cuatro de Espadas", myth: "El brujo de la Costa del Pauto" },
  { card: "Cinco de Espadas", myth: "La venganza de los brujos" },
  { card: "Seis de Espadas", myth: "El auriga a quien mató el pasado" },
  { card: "Siete de Espadas", myth: "Mico y Nansi" },
  { card: "Ocho de Espadas", myth: "La sombra" },
  { card: "Nueve de Espadas", myth: "Los caníbales" },
  { card: "Diez de Espadas", myth: "Leal hasta la muerte" },
  { card: "Paje de Espadas", myth: "Los animales hablan" },
  { card: "Caballero de Espadas", myth: "El castellano de San Juan" },
  { card: "Reina de Espadas", myth: "El costeño y los cachacos" },
  { card: "Rey de Espadas", myth: "El burro y la policía" },
  { card: "As de Oros", myth: "El maíz" },
  { card: "Dos de Oros", myth: "El origen del hombre" },
  { card: "Tres de Oros", myth: "Tío conejo y Morrocoy" },
  { card: "Cuatro de Oros", myth: "El chenche" },
  { card: "Cinco de Oros", myth: "La piedra del muerto" },
  { card: "Seis de Oros", myth: "El algodón" },
  { card: "Siete de Oros", myth: "Pedro y Tomás Dimales" },
  { card: "Ocho de Oros", myth: "Campos Elíseos" },
  { card: "Nueve de Oros", myth: "En el once" },
  { card: "Diez de Oros", myth: "El toro negro Patorreal" },
  { card: "Paje de Oros", myth: "María Centeno" },
  { card: "Caballero de Oros", myth: "In illo tempore" },
  { card: "Reina de Oros", myth: "El Origen del Maguaré" },
  { card: "Rey de Oros", myth: "Nompanem" },
];

const EXPLANATIONS = {
  "El Loco": {
    meaning:
      "Apertura al viaje, fe en lo desconocido y libertad para empezar sin garantías.",
    reason:
      "Lo elegí porque tuvo mayoría simple (2/4) y su tema libertad/viaje es el corazón de El Loco.",
  },
  "El Mago": {
    meaning:
      "Voluntad y habilidad para convertir una idea en realidad usando lo que ya tienes.",
    reason:
      "Lo elegí porque, entre cuatro opciones distintas, su tema transformación/renovación refleja mejor el corazón de El Mago.",
  },
  "La Sacerdotisa": {
    meaning:
      "Intuición y conocimiento oculto: escuchar lo que no se dice.",
    reason:
      "Lo elegí porque, entre cuatro opciones distintas, su tema protección/sabiduría refleja mejor el corazón de La Sacerdotisa.",
  },
  "La Emperatriz": {
    meaning:
      "Fertilidad, abundancia y creación que nutre y hace crecer.",
    reason:
      "Lo elegí porque, en el empate 2–2, su tema creación/fertilidad refleja mejor el corazón de La Emperatriz.",
  },
  "El Emperador": {
    meaning:
      "Orden, autoridad y estructura: poner límites y sostener un reino.",
    reason:
      "Lo elegí porque, entre cuatro opciones distintas, su tema origen divino/legitimidad refleja mejor el corazón de El Emperador.",
  },
  "El Hierofante": {
    meaning:
      "Tradición, enseñanza y guía espiritual: aprender dentro de una comunidad.",
    reason:
      "Lo elegí porque tuvo mayoría simple (2/4) y su tema fertilidad/tradición es el corazón de El Hierofante.",
  },
  "Los Enamorados": {
    meaning:
      "Amor y elección: alinear el deseo con los valores.",
    reason:
      "Lo elegí porque tuvo mayoría simple (2/4) y su tema creación/tentación es el corazón de Los Enamorados.",
  },
  "El Carro": {
    meaning:
      "Determinación y avance: tomar el control y ganar terreno.",
    reason:
      "Lo elegí porque tuvo consenso fuerte (3/4) y su tema resistencia/conquista es el corazón de El Carro.",
  },
  "La Fuerza": {
    meaning:
      "Coraje sereno: dominar el impulso con compasión y autocontrol.",
    reason:
      "Lo elegí porque tuvo mayoría simple (2/4) y su tema valentía/superación es el corazón de La Fuerza.",
  },
  "El Ermitaño": {
    meaning:
      "Retiro e introspección para encontrar luz propia y sabiduría.",
    reason:
      "Lo elegí porque tuvo consenso fuerte (3/4) y su tema misterio/búsqueda es el corazón de El Ermitaño.",
  },
  "La Rueda de la Fortuna": {
    meaning:
      "Cambio de ciclo: lo que sube baja y el destino gira.",
    reason:
      "Lo elegí porque tuvo consenso fuerte (3/4) y su tema transformación/destino es el corazón de La Rueda de la Fortuna.",
  },
  "La Justicia": {
    meaning:
      "Verdad y consecuencias: equilibrio entre lo que haces y lo que recibes.",
    reason:
      "Lo elegí porque, entre cuatro opciones distintas, su tema castigo/equilibrio refleja mejor el corazón de La Justicia.",
  },
  "El Colgado": {
    meaning:
      "Pausa y nueva perspectiva: soltar para ver distinto.",
    reason:
      "Lo elegí porque tuvo mayoría simple (2/4) y su tema sacrificio/devoción es el corazón de El Colgado.",
  },
  "La Muerte": {
    meaning:
      "Cierre inevitable y transformación profunda: morir a lo viejo para renacer.",
    reason:
      "Lo elegí porque, entre cuatro opciones distintas, su tema transformación/muerte refleja mejor el corazón de La Muerte.",
  },
  "La Templanza": {
    meaning:
      "Armonía y sanación: mezclar opuestos hasta lograr equilibrio.",
    reason:
      "Lo elegí porque, en el empate 2–2, su tema reconciliación/sanación refleja mejor el corazón de La Templanza.",
  },
  "El Diablo": {
    meaning:
      "Ataduras y tentación: ver la cadena para poder quitarla.",
    reason:
      "Lo elegí porque tuvo mayoría simple (2/4) y su tema misterio/transformación es el corazón de El Diablo.",
  },
  "La Torre": {
    meaning:
      "Crisis que derrumba lo falso: un rayo de verdad que rompe estructuras.",
    reason:
      "Lo elegí porque, entre cuatro opciones distintas, su tema naturaleza/transformación refleja mejor el corazón de La Torre.",
  },
  "La Estrella": {
    meaning:
      "Esperanza y guía: volver a creer y a respirar.",
    reason:
      "Lo elegí porque tuvo consenso fuerte (3/4) y su tema redención/sanación es el corazón de La Estrella.",
  },
  "La Luna": {
    meaning:
      "Sombras, intuición y espejismos: navegar lo incierto sin perderse.",
    reason:
      "Lo elegí porque, entre cuatro opciones distintas, su tema sobrenatural/naturaleza refleja mejor el corazón de La Luna.",
  },
  "El Sol": {
    meaning:
      "Claridad, vitalidad y éxito: lo verdadero queda a la vista.",
    reason:
      "Lo elegí porque tuvo mayoría simple (2/4) y su tema revelación/cotidianidad es el corazón de El Sol.",
  },
  "El Juicio": {
    meaning:
      "Despertar y llamado: rendir cuentas y renacer con otra vida.",
    reason:
      "Lo elegí porque tuvo consenso fuerte (3/4) y su tema resurrección/conflicto es el corazón de El Juicio.",
  },
  "El Mundo": {
    meaning:
      "Culminación e integración: cerrar el ciclo y habitar la totalidad.",
    reason:
      "Lo elegí porque, entre cuatro opciones distintas, su tema creación/equilibrio refleja mejor el corazón de El Mundo.",
  },
  "As de Bastos": {
    meaning:
      "Chispa creativa y arranque de energía: la semilla de una acción.",
    reason:
      "Lo elegí porque tuvo consenso fuerte (3/4) y su tema creación/luz es el corazón de As de Bastos.",
  },
  "Dos de Bastos": {
    meaning:
      "Visión y planificación: elegir rumbo antes de expandirte.",
    reason:
      "Lo elegí porque, entre cuatro opciones distintas, su tema liderazgo/alianza refleja mejor el corazón de Dos de Bastos.",
  },
  "Tres de Bastos": {
    meaning:
      "Expansión y exploración: ver resultados iniciales y mirar más lejos.",
    reason:
      "Lo elegí porque, entre cuatro opciones distintas, su tema exploración/ingenio refleja mejor el corazón de Tres de Bastos.",
  },
  "Cuatro de Bastos": {
    meaning:
      "Celebración y hogar: estabilidad compartida y fiesta de comunidad.",
    reason:
      "Lo elegí porque tuvo consenso fuerte (3/4) y su tema integración/comunicación es el corazón de Cuatro de Bastos.",
  },
  "Cinco de Bastos": {
    meaning:
      "Competencia y fricción: choque de voluntades que puede afinarte.",
    reason:
      "Lo elegí porque tuvo mayoría simple (2/4) y su tema amor/competencia es el corazón de Cinco de Bastos.",
  },
  "Seis de Bastos": {
    meaning:
      "Victoria y reconocimiento: el logro se vuelve visible.",
    reason:
      "Lo elegí porque, entre cuatro opciones distintas, su tema orgullo/venganza refleja mejor el corazón de Seis de Bastos.",
  },
  "Siete de Bastos": {
    meaning:
      "Defensa y coraje: sostener tu posición bajo presión.",
    reason:
      "Lo elegí porque tuvo mayoría simple (2/4) y su tema amor/resistencia es el corazón de Siete de Bastos.",
  },
  "Ocho de Bastos": {
    meaning:
      "Movimiento rápido: noticias, impulsos y cambios acelerados.",
    reason:
      "Lo elegí porque tuvo mayoría simple (2/4) y su tema origen/guía es el corazón de Ocho de Bastos.",
  },
  "Nueve de Bastos": {
    meaning:
      "Resistencia: seguir de pie aunque estés cansado.",
    reason:
      "Lo elegí porque, entre cuatro opciones distintas, su tema resiliencia/naturaleza refleja mejor el corazón de Nueve de Bastos.",
  },
  "Diez de Bastos": {
    meaning:
      "Carga y responsabilidad: demasiado peso en la espalda.",
    reason:
      "Lo elegí porque tuvo consenso fuerte (3/4) y su tema dilema moral/responsabilidad familiar es el corazón de Diez de Bastos.",
  },
  "Paje de Bastos": {
    meaning:
      "Curiosidad y entusiasmo: el mensaje que enciende una aventura.",
    reason:
      "Lo elegí porque, entre cuatro opciones distintas, su tema sobrenatural/amor refleja mejor el corazón de Paje de Bastos.",
  },
  "Caballero de Bastos": {
    meaning:
      "Acción impulsiva y viaje: moverse con fuego y audacia.",
    reason:
      "Lo elegí porque tuvo consenso fuerte (3/4) y su tema cooperación/aventura es el corazón de Caballero de Bastos.",
  },
  "Reina de Bastos": {
    meaning:
      "Carisma y creatividad madura: liderar inspirando a otros.",
    reason:
      "Lo elegí porque tuvo consenso fuerte (3/4) y su tema libertad/sacrificio es el corazón de Reina de Bastos.",
  },
  "Rey de Bastos": {
    meaning:
      "Visión y liderazgo: mando creativo, firme y expansivo.",
    reason:
      "Lo elegí porque, entre cuatro opciones distintas, su tema liderazgo/guerra refleja mejor el corazón de Rey de Bastos.",
  },
  "As de Copas": {
    meaning:
      "Nacimiento emocional: amor, intuición y apertura del corazón.",
    reason:
      "Lo elegí porque tuvo consenso fuerte (3/4) y su tema amor/tragedia es el corazón de As de Copas.",
  },
  "Dos de Copas": {
    meaning:
      "Vínculo y reciprocidad: encuentro que se vuelve pacto.",
    reason:
      "Lo elegí porque tuvo consenso fuerte (3/4) y su tema amor/sacrificio es el corazón de Dos de Copas.",
  },
  "Tres de Copas": {
    meaning:
      "Amistad y celebración: gozo compartido y apoyo social.",
    reason:
      "Lo elegí porque tuvo consenso fuerte (3/4) y su tema amistad/resiliencia es el corazón de Tres de Copas.",
  },
  "Cuatro de Copas": {
    meaning:
      "Apatía y desencanto: mirar el regalo sin verlo.",
    reason:
      "Lo elegí porque tuvo mayoría simple (2/4) y su tema deseo insaciable/búsqueda es el corazón de Cuatro de Copas.",
  },
  "Cinco de Copas": {
    meaning:
      "Pérdida y duelo: aceptar lo que se fue sin negar lo que queda.",
    reason:
      "Lo elegí porque tuvo mayoría simple (2/4) y su tema culpa/pérdida es el corazón de Cinco de Copas.",
  },
  "Seis de Copas": {
    meaning:
      "Nostalgia y memoria: lo tierno del pasado vuelve.",
    reason:
      "Lo elegí porque tuvo mayoría simple (2/4) y su tema decadencia/nostalgia es el corazón de Seis de Copas.",
  },
  "Siete de Copas": {
    meaning:
      "Fantasías y confusión: demasiadas opciones, poca realidad.",
    reason:
      "Lo elegí porque, entre cuatro opciones distintas, su tema ilusión/transformación refleja mejor el corazón de Siete de Copas.",
  },
  "Ocho de Copas": {
    meaning:
      "Dejar atrás: irse de lo que ya no llena y buscar algo más verdadero.",
    reason:
      "Lo elegí porque, entre cuatro opciones distintas, su tema búsqueda/renacimiento refleja mejor el corazón de Ocho de Copas.",
  },
  "Nueve de Copas": {
    meaning:
      "Satisfacción y deseo cumplido: placer por lo conseguido.",
    reason:
      "Lo elegí porque tuvo consenso fuerte (3/4) y su tema deseo/naturaleza es el corazón de Nueve de Copas.",
  },
  "Diez de Copas": {
    meaning:
      "Plenitud afectiva: hogar, comunidad y alegría duradera.",
    reason:
      "Lo elegí porque tuvo consenso fuerte (3/4) y su tema amor/sobrenatural es el corazón de Diez de Copas.",
  },
  "Paje de Copas": {
    meaning:
      "Mensaje del corazón: sensibilidad nueva, sorpresa emocional.",
    reason:
      "Lo elegí porque tuvo mayoría simple (2/4) y su tema transformación/amor es el corazón de Paje de Copas.",
  },
  "Caballero de Copas": {
    meaning:
      "Romance e idealismo: una propuesta emocional en movimiento.",
    reason:
      "Lo elegí porque, entre cuatro opciones distintas, su tema amor/libertad refleja mejor el corazón de Caballero de Copas.",
  },
  "Reina de Copas": {
    meaning:
      "Compasión e intuición: sostener emociones propias y ajenas.",
    reason:
      "Lo elegí porque, entre cuatro opciones distintas, su tema cooperación/transformación refleja mejor el corazón de Reina de Copas.",
  },
  "Rey de Copas": {
    meaning:
      "Madurez emocional: gobernar el sentimiento sin reprimirlo.",
    reason:
      "Lo elegí porque tuvo mayoría simple (2/4) y su tema aceptación/identidad es el corazón de Rey de Copas.",
  },
  "As de Espadas": {
    meaning:
      "Claridad mental: verdad que corta y decide.",
    reason:
      "Lo elegí porque tuvo mayoría simple (2/4) y su tema justicia/transformación es el corazón de As de Espadas.",
  },
  "Dos de Espadas": {
    meaning:
      "Indecisión y bloqueo: sostener dos verdades a la vez.",
    reason:
      "Lo elegí porque, entre cuatro opciones distintas, su tema dualidad/creación refleja mejor el corazón de Dos de Espadas.",
  },
  "Tres de Espadas": {
    meaning:
      "Dolor y ruptura: verdad que hiere, pero libera.",
    reason:
      "Lo elegí porque tuvo consenso fuerte (3/4) y su tema traición/reconciliación es el corazón de Tres de Espadas.",
  },
  "Cuatro de Espadas": {
    meaning:
      "Reposo y recuperación: silencio para sanar la mente.",
    reason:
      "Lo elegí porque, entre cuatro opciones distintas, su tema brujería/curación refleja mejor el corazón de Cuatro de Espadas.",
  },
  "Cinco de Espadas": {
    meaning:
      "Conflicto y victoria vacía: ganar perdiendo algo importante.",
    reason:
      "Lo elegí porque, entre cuatro opciones distintas, su tema venganza/destrucción refleja mejor el corazón de Cinco de Espadas.",
  },
  "Seis de Espadas": {
    meaning:
      "Transición y salida: mover la mente hacia aguas más calmadas.",
    reason:
      "Lo elegí porque, entre cuatro opciones distintas, su tema modernidad/familia refleja mejor el corazón de Seis de Espadas.",
  },
  "Siete de Espadas": {
    meaning:
      "Estrategia y sigilo: actuar con astucia (o con trampa).",
    reason:
      "Lo elegí porque tuvo consenso fuerte (3/4) y su tema engaño/justicia es el corazón de Siete de Espadas.",
  },
  "Ocho de Espadas": {
    meaning:
      "Prisión mental: límites autoimpuestos por miedo.",
    reason:
      "Lo elegí porque, entre cuatro opciones distintas, su tema miedo/redención refleja mejor el corazón de Ocho de Espadas.",
  },
  "Nueve de Espadas": {
    meaning:
      "Ansiedad y pesadillas: la mente se vuelve tormento.",
    reason:
      "Lo elegí porque tuvo consenso fuerte (3/4) y su tema miedo/culpa es el corazón de Nueve de Espadas.",
  },
  "Diez de Espadas": {
    meaning:
      "Final abrupto: tocar fondo para terminar de una vez.",
    reason:
      "Lo elegí porque tuvo mayoría simple (2/4) y su tema lealtad/traición es el corazón de Diez de Espadas.",
  },
  "Paje de Espadas": {
    meaning:
      "Curiosidad y vigilancia: investigar, preguntar, aprender.",
    reason:
      "Lo elegí porque, entre cuatro opciones distintas, su tema comunicación/naturaleza refleja mejor el corazón de Paje de Espadas.",
  },
  "Caballero de Espadas": {
    meaning:
      "Ataque frontal: acción rápida y sin filtro.",
    reason:
      "Lo elegí porque, entre cuatro opciones distintas, su tema defensa/ingenio refleja mejor el corazón de Caballero de Espadas.",
  },
  "Reina de Espadas": {
    meaning:
      "Lucidez y límites: decir la verdad aunque duela.",
    reason:
      "Lo elegí porque tuvo mayoría simple (2/4) y su tema honestidad/cultura es el corazón de Reina de Espadas.",
  },
  "Rey de Espadas": {
    meaning:
      "Autoridad intelectual: juicio frío, lógica y ley.",
    reason:
      "Lo elegí porque tuvo mayoría simple (2/4) y su tema humor/autoridad es el corazón de Rey de Espadas.",
  },
  "As de Oros": {
    meaning:
      "Semilla de prosperidad: oportunidad material que puede crecer.",
    reason:
      "Lo elegí porque tuvo mayoría simple (2/4) y su tema sabiduría/perseverancia es el corazón de As de Oros.",
  },
  "Dos de Oros": {
    meaning:
      "Equilibrio práctico: manejar dos cosas sin caerte.",
    reason:
      "Lo elegí porque tuvo mayoría simple (2/4) y su tema creación/adaptación es el corazón de Dos de Oros.",
  },
  "Tres de Oros": {
    meaning:
      "Trabajo en equipo: maestría que se construye colaborando.",
    reason:
      "Lo elegí porque tuvo consenso fuerte (3/4) y su tema astucia/colaboración es el corazón de Tres de Oros.",
  },
  "Cuatro de Oros": {
    meaning:
      "Control y apego: miedo a perder lo que tienes.",
    reason:
      "Lo elegí porque, entre cuatro opciones distintas, su tema ambición/advertencia refleja mejor el corazón de Cuatro de Oros.",
  },
  "Cinco de Oros": {
    meaning:
      "Carencia y exclusión: sentirte fuera, pedir ayuda.",
    reason:
      "Lo elegí porque tuvo mayoría simple (2/4) y su tema castigo/hospitalidad es el corazón de Cinco de Oros.",
  },
  "Seis de Oros": {
    meaning:
      "Dar y recibir: generosidad con medida y justicia.",
    reason:
      "Lo elegí porque, en el empate 2–2, su tema reconciliación/intercambio refleja mejor el corazón de Seis de Oros.",
  },
  "Siete de Oros": {
    meaning:
      "Paciencia y evaluación: esperar la cosecha sin sabotearla.",
    reason:
      "Lo elegí porque tuvo mayoría simple (2/4) y su tema paciencia/amistad es el corazón de Siete de Oros.",
  },
  "Ocho de Oros": {
    meaning:
      "Oficio y práctica: mejorar con disciplina.",
    reason:
      "Lo elegí porque tuvo consenso fuerte (3/4) y su tema inmortalidad/trabajo es el corazón de Ocho de Oros.",
  },
  "Nueve de Oros": {
    meaning:
      "Autonomía y disfrute: abundancia propia y buen vivir.",
    reason:
      "Lo elegí porque tuvo consenso fuerte (3/4) y su tema libertad/amor es el corazón de Nueve de Oros.",
  },
  "Diez de Oros": {
    meaning:
      "Legado y estabilidad: riqueza que se vuelve familia e historia.",
    reason:
      "Lo elegí porque, entre cuatro opciones distintas, su tema muerte/legado refleja mejor el corazón de Diez de Oros.",
  },
  "Paje de Oros": {
    meaning:
      "Aprendizaje material: estudiar, iniciar y cultivar habilidades.",
    reason:
      "Lo elegí porque, entre cuatro opciones distintas, su tema codicia/protección refleja mejor el corazón de Paje de Oros.",
  },
  "Caballero de Oros": {
    meaning:
      "Constancia: avanzar lento pero seguro.",
    reason:
      "Lo elegí porque tuvo mayoría simple (2/4) y su tema lealtad/amor es el corazón de Caballero de Oros.",
  },
  "Reina de Oros": {
    meaning:
      "Cuidado y abundancia: crear bienestar tangible.",
    reason:
      "Lo elegí porque tuvo mayoría simple (2/4) y su tema amor/abundancia es el corazón de Reina de Oros.",
  },
  "Rey de Oros": {
    meaning:
      "Prosperidad y gestión: liderazgo material con sabiduría.",
    reason:
      "Lo elegí porque, entre cuatro opciones distintas, su tema prosperidad/sabiduría refleja mejor el corazón de Rey de Oros.",
  },
};

const RANK_ORDER = {
  As: 1,
  Dos: 2,
  Tres: 3,
  Cuatro: 4,
  Cinco: 5,
  Seis: 6,
  Siete: 7,
  Ocho: 8,
  Nueve: 9,
  Diez: 10,
  Paje: 11,
  Caballero: 12,
  Reina: 13,
  Rey: 14,
};

const SUIT_BASE = {
  Bastos: 100,
  Copas: 200,
  Espadas: 300,
  Oros: 400,
};

function getCardMeta(cardName) {
  if (MAJOR_ARCANA.includes(cardName)) {
    return {
      arcana: "major",
      suit: null,
      rank_label: null,
      order_index: MAJOR_ARCANA.indexOf(cardName),
    };
  }

  const [rankLabel, suitLabel] = cardName.split(" de ");
  const suit = suitLabel || null;
  const rankValue = RANK_ORDER[rankLabel] || 0;
  const base = SUIT_BASE[suit] || 900;
  return {
    arcana: "minor",
    suit,
    rank_label: rankLabel,
    order_index: base + rankValue,
  };
}

export const TAROT_CARDS = CARD_LIST.map((entry) => {
  const meta = getCardMeta(entry.card);
  const explanation = EXPLANATIONS[entry.card] || {};
  return {
    card_name: entry.card,
    myth_title: entry.myth,
    arcana: meta.arcana,
    suit: meta.suit,
    rank_label: meta.rank_label,
    order_index: meta.order_index,
    meaning: explanation.meaning || "",
    selection_reason: explanation.reason || "",
  };
});

export const TAROT_MAJOR_ARCANA = MAJOR_ARCANA;
