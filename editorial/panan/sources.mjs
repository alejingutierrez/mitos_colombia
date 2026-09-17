export const pananSources = {
  memoriaTerritorial2016: {
    title:
      "La memoria territorial y el encanto de la palabra de los indígenas de Panán",
    authors: "Ernesto Ramiro Estacio y Luis Ulpiano Tatamues García",
    publication: "Maestría en Etnoliteratura, Universidad de Nariño",
    year: 2016,
    url: "https://sired.udenar.edu.co/7937/1/91914.pdf",
    summary:
      "Corpus principal construido con testimonios de comuneros. Dedica apartados propios a los dieciséis lugares, seres y experiencias que forman esta colección.",
  },
  planVida2005: {
    title:
      "La visión económica del Plan de Vida del Resguardo de Panán, municipio de Cumbal",
    authors: "Luis Aníbal Puenayán Nazate",
    publication: "Universidad de Nariño",
    year: 2005,
    url: "https://sired.udenar.edu.co/14535/1/66105.pdf",
    summary:
      "Investigación concertada con la comunidad que documenta La Tuta, los tres caciques, la unión de agua y tierra, los lugares sagrados y la memoria territorial.",
  },
  mujeresPastos2021: {
    title: "Mujeres pastos en la lucha por la recuperación de tierras",
    authors:
      "Iniciativa de memoria de mujeres del pueblo Pastos y Centro Nacional de Memoria Histórica",
    publication: "Centro Nacional de Memoria Histórica",
    year: 2021,
    url: "https://centrodememoriahistorica.gov.co/wp-content/uploads/2021/12/MujeresPastos.pdf",
    summary:
      "Memoria colectiva sobre territorio, recuperación de tierras y mujeres Pastos. Registra a María Panana, los lugares pesados, el Cueche y la experiencia de entundarse.",
  },
  medicinaTradicional2006: {
    title:
      "Medicina tradicional en el Resguardo Indígena de Panán, municipio de Cumbal",
    authors: "Andrea Ojeda Guerrero",
    publication: "Universidad de Nariño",
    year: 2006,
    url: "https://sired.udenar.edu.co/14318/",
    summary:
      "Investigación de campo aprobada por autoridades del resguardo. Sitúa a Panán dentro del pueblo Pastos y documenta medicina propia, plantas y categorías comunitarias de enfermedad.",
  },
  turismoCumbal: {
    title: "Cumbal",
    authors: "Gobernación de Nariño",
    publication: "Sistema de Información Turística de Nariño",
    url: "https://turismo.narino.gov.co/municipios/cumbal/",
    summary:
      "Fuente institucional actual que ubica a Panán entre los resguardos de Cumbal y describe el paisaje altoandino de páramos, lagunas y nacimientos de agua.",
  },
  planDesarrolloNarino2024: {
    title: "Plan de Desarrollo Departamental Nariño 2024–2027",
    authors: "Gobernación de Nariño",
    publication: "Gobernación de Nariño",
    year: 2024,
    url: "https://plandedesarrollo.narino.gov.co/wp-content/uploads/2024/12/PLAN-DESARROLLO-NARINO-_REGION_PAIS_PARA_EL_MUNDO.pdf",
    summary:
      "Documento público que ubica el resguardo de Panán en la zona Gran Cumbal y dentro del territorio del pueblo Pastos.",
  },
  historiaResguardo: {
    title: "Historia del Resguardo Indígena de Panán",
    authors: "Memoria digital comunitaria de Panán",
    publication: "Archivo web comunitario",
    url: "https://historiaresguardoindigenapanan.blogspot.com/",
    summary:
      "Archivo local sobre veredas, hidrografía y lugares del resguardo. Nombra Chuchún, Guamorran, Cualchio y otros cursos que organizan la memoria del territorio.",
  },
  origenPananes: {
    title: "El origen de los Pananes: La Tuta",
    authors: "Memoria digital comunitaria de Panán",
    publication: "Archivo web comunitario",
    year: 2010,
    url: "https://origendelospananes.blogspot.com/2010/10/el-origen.html",
    summary:
      "Versión comunitaria contemporánea del origen en La Tuta, los tres caciques y la relación entre linajes, agua, tierra y territorio.",
  },
  medicinaMujerTerritorio2020: {
    title:
      "Medicina ancestral, mujer y territorio en el Resguardo Indígena de Panán",
    authors: "Investigación de la Universidad del Cauca",
    publication: "Repositorio RedCol, Ministerio de Ciencia",
    year: 2020,
    url: "https://redcol.minciencias.gov.co/Record/REPOCAUCA2_68afc64fe1dcfd59ab712e278c517cbf/Details",
    summary:
      "Registro académico sobre medicina ancestral, mujeres y territorio en Panán; aporta contexto para leer sanación y lugares sagrados sin convertirlos en folclor.",
  },
  lugaresSagradosIcanh: {
    title: "Lugares sagrados: definiciones y amenazas",
    authors: "Instituto Colombiano de Antropología e Historia",
    publication: "ICANH",
    url: "https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/32/337/4494?inline=1",
    summary:
      "Marco comparativo colombiano sobre lugares sagrados y territorialidad; referencia trabajos Pastos y ayuda a diferenciar documentación de un sitio y prueba de un episodio narrativo.",
  },
};

export function pickPananSources(...keys) {
  return keys.map((key) => {
    const source = pananSources[key];
    if (!source) throw new Error(`Fuente de Panán desconocida: ${key}.`);
    return source;
  });
}
