import {
  bogotaMestizoMemorySourceKeysBySlug,
  bogotaMestizoMemorySources,
} from "./sources.mjs";

export const bogotaMestizoMemoryEvidenceMatrix = {
  "el-bobo-del-tranvia": [
    {
      claim:
        "La versión institucional conserva a Antonín vestido como agente multicolor, regulando el tránsito sin sueldo y acompañado por el afecto hacia su hermana.",
      evidenceClass: "leyenda urbana tardía",
      sourceKeys: ["bogotanitosBobo", "cuatroLocosStudy", "locotaBogota"],
    },
    {
      claim:
        "El tranvía de mulas operó desde 1884, el eléctrico desde 1910 y el sistema terminó en 1951; esas fechas contextualizan, pero no prueban la biografía.",
      evidenceClass: "contexto urbano documentado",
      sourceKeys: ["archivoTransporte", "bogotanitosBobo"],
    },
    {
      claim:
        "No existe en el expediente una historia clínica, archivo vital ni fuente temprana que autorice un diagnóstico o un desenlace celestial.",
      evidenceClass: "límite biográfico y exclusión editorial",
      sourceKeys: ["bogotanitosBobo", "cuatroLocosStudy", "locotaBogota"],
    },
  ],
  "el-loco-arias": [
    {
      claim:
        "La leyenda nombra a Eduardo Arias Jiménez y lo presenta como autodidacta, orador callejero, intérprete de figuras históricas y consumidor ocasional de chicha.",
      evidenceClass: "núcleo de leyenda institucional",
      sourceKeys: ["bogotanitosArias", "canalArias"],
    },
    {
      claim:
        "Las fuentes contemporáneas muestran su permanencia como personaje de memoria bogotana, pero dependen de la misma cadena divulgativa.",
      evidenceClass: "recepción cultural con dependencia",
      sourceKeys: ["cuatroLocosStudy", "locotaBogota", "fugaCuandoAmanezca"],
    },
    {
      claim:
        "El apodo histórico no acredita diagnóstico, genialidad universal ni una doctrina política coherente.",
      evidenceClass: "frontera de dignidad y atribución",
      sourceKeys: ["bogotanitosArias", "canalArias", "cuatroLocosStudy"],
    },
  ],
  "el-mono-de-la-pila": [
    {
      claim:
        "La primera conducción pública de agua y la fuente ornamentada conocida como Mono de la Pila pertenecen a etapas distintas.",
      evidenceClass: "historia material documentada",
      sourceKeys: ["monoUniandes", "idpcMuseoCielo", "acueductoHistory"],
    },
    {
      claim:
        "El original fue trasladado y hoy se conserva en el Museo Colonial, mientras una réplica posterior permanece en San Diego.",
      evidenceClass: "trayectoria patrimonial",
      sourceKeys: ["monoUniandes", "idpcMuseoCielo", "museoBogota"],
    },
    {
      claim:
        "La frase sobre ir a quejarse se explica como respuesta a niños que cargaban agua, pero esa procedencia es una tradición tardía y no un espíritu receptor de penas.",
      evidenceClass: "tradición explicativa con cautela",
      sourceKeys: ["monoUniandes", "bogotanitosMono", "acueductoHistory"],
    },
  ],
  "la-loca-margarita": [
    {
      claim:
        "Una crónica de 1924 registra a Margarita como figura callejera vestida de rojo, defensora del liberalismo y recluida temporalmente en un asilo.",
      evidenceClass: "testimonio periodístico temprano y sesgado",
      sourceKeys: ["margaritaChronicle", "asiloMujeres"],
    },
    {
      claim:
        "La crónica permite escuchar su voz mediada y su deseo de salir, pero su tono espectacular y estigmatizante impide usarla como diagnóstico transparente.",
      evidenceClass: "fuente temprana leída críticamente",
      sourceKeys: ["margaritaChronicle", "asiloMujeres", "cuatroLocosStudy"],
    },
    {
      claim:
        "La versión sobre esposo muerto, hijo desaparecido, casa quemada y desplazamiento se difundió en perfiles y una miniserie, sin quedar triangulada por la fuente temprana.",
      evidenceClass: "biografía tardía en disputa",
      sourceKeys: [
        "radioMargarita",
        "bogotanitosMargarita",
        "elTiempoMargarita",
      ],
    },
  ],
  "el-enigmatico-abogado": [
    {
      claim:
        "José Raimundo Russi fue abogado asociado con la causa artesana y fue procesado tras el asesinato de Manuel Ferro y acusaciones contra la banda del Molino del Cubo.",
      evidenceClass: "historia judicial y política",
      sourceKeys: ["russiTerritorio", "museoRussi", "signalRussiStreets"],
    },
    {
      claim:
        "El tribunal lo condenó y fue ejecutado en 1851, pero la documentación y la historiografía conservan interpretaciones contrapuestas sobre su responsabilidad.",
      evidenceClass: "veredicto documentado y culpabilidad disputada",
      sourceKeys: ["russiTerritorio", "signalCordovez", "museoRussi"],
    },
    {
      claim:
        "La voz espectral de Russi pertenece a rutas, literatura y teatro posteriores; es memoria cultural, no prueba retroactiva de inocencia.",
      evidenceClass: "reelaboración sobrenatural contemporánea",
      sourceKeys: ["idartesRussi", "fantasmasBook", "signalCordovez"],
    },
  ],
  "los-fantasmas-de-la-candelaria": [
    {
      claim:
        "El libro de Stella Monsalve reúne relatos distintos de la Calle del Fantasma, la Casaca Verde, Russi y otras presencias desde memoria oral y recorridos.",
      evidenceClass: "memoria urbana compilada",
      sourceKeys: ["fantasmasBook", "acaracuy", "fugaCuandoAmanezca"],
    },
    {
      claim:
        "La producción de rutas, esculturas y adaptaciones transforma la geografía histórica en un mapa fantasmal y puede introducir errores de identificación.",
      evidenceClass: "análisis académico de producción cultural",
      sourceKeys: ["fantasmagoriasStudy", "idpcCasas", "acaracuy"],
    },
    {
      claim:
        "Russi se mantiene como relato relacionado, pero esta ficha no repite su proceso ni fusiona varias apariciones en una sola entidad.",
      evidenceClass: "desfusión editorial",
      sourceKeys: ["fantasmasBook", "signalRussiStreets", "fantasmagoriasStudy"],
    },
  ],
  "la-leyenda-del-santuario-de-monserrate": [
    {
      claim:
        "La ermita dedicada a la Virgen de Monserrat antecedió a la centralidad del Señor Caído tallado por Pedro de Lugo y Albarracín.",
      evidenceClass: "historia de arte y devoción",
      sourceKeys: ["monserrateAcademic", "monserrateOfficial", "monserrateBic"],
    },
    {
      claim:
        "Cabello creciente, peso variable, sanaciones, promesas y superstición de novios se documentan como creencias vivas, no como propiedades comprobadas.",
      evidenceClass: "patrimonio oral y devoción contemporánea",
      sourceKeys: ["monserrateLegend", "monserrateIdpc", "radioMonserrate"],
    },
    {
      claim:
        "Un volcán dormido, espíritus muiscas silenciosos y detalles acrobáticos de Harry Warner carecen de corroboración suficiente para el relato central.",
      evidenceClass: "exclusión editorial por evidencia insuficiente",
      sourceKeys: ["monserrateLegend", "monserrateOfficial", "monserrateAcademic"],
    },
  ],
  "el-diablo-del-puente-del-comun": [
    {
      claim:
        "La leyenda presenta a Florentino, el pacto, la construcción nocturna, el sacerdote, el gallo, la última piedra y la huella del diablo.",
      evidenceClass: "núcleo folclórico impreso",
      sourceKeys: ["puenteOcampo", "puenteLegend"],
    },
    {
      claim:
        "La obra histórica fue diseñada y dirigida por Domingo Esquiaqui bajo el virrey Ezpeleta; Florentino no debe sustituirlo como constructor documentado.",
      evidenceClass: "historia de infraestructura",
      sourceKeys: ["puenteOcampo", "puenteRestoration", "puenteTransport"],
    },
    {
      claim:
        "El puente está en Chía, Cundinamarca, sobre el río Bogotá; su clasificación heredada como Bogotá confunde la sabana regional con el distrito.",
      evidenceClass: "corrección territorial oficial",
      sourceKeys: ["puenteIcomos", "chiaPot", "puenteOcampo"],
    },
  ],
};

export function assertBogotaMestizoMemoryEvidenceMatrix() {
  for (const [slug, rows] of Object.entries(
    bogotaMestizoMemoryEvidenceMatrix,
  )) {
    if (!rows.length) throw new Error(`${slug}: matriz vacía.`);
    const allowed = new Set(bogotaMestizoMemorySourceKeysBySlug[slug]);
    for (const row of rows) {
      if (!row.claim || !row.evidenceClass || !row.sourceKeys.length) {
        throw new Error(`${slug}: fila de evidencia incompleta.`);
      }
      for (const key of row.sourceKeys) {
        if (!allowed.has(key) || !bogotaMestizoMemorySources[key]) {
          throw new Error(`${slug}: evidencia fuera del expediente: ${key}.`);
        }
      }
    }
  }
  return true;
}
