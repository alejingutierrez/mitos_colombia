import { variosMestizoFinalSources } from "./sources.mjs";

export const variosMestizoFinalEvidenceMatrix = {
  "la-viudita": [
    {
      claim:
        "El núcleo más consistente localiza a La Viudita en Nariño y Pasto, con vestido negro, mantilla verde y andar rápido.",
      evidenceClass: "circulación regional documentada",
      sourceKeys: [
        "rinconViudita",
        "compartoViudita",
        "colombianStorytellers",
      ],
    },
    {
      claim:
        "La aparición puede anunciar muerte cerca de sacristías o casas de enfermos y, en otra secuencia, conducir a hombres ebrios hasta el cementerio.",
      evidenceClass: "motivo narrativo documentado",
      sourceKeys: ["rinconViudita", "compartoViudita", "ericColombia"],
    },
    {
      claim:
        "Repertorios bibliográficos colombianos publican La Viudita como entrada propia y no como nombre de la Viuda Alegre o la Dama Verde.",
      evidenceClass: "control bibliográfico",
      sourceKeys: ["colombianBestiary", "molinaCatalog", "rinconViudita"],
    },
    {
      claim:
        "Nuquí y Cali conservan relatos homónimos con argumentos distintos que no deben insertarse en una sola biografía nariñense.",
      evidenceClass: "variante regional documentada",
      sourceKeys: ["nuquiEot", "caliEntreRios"],
    },
    {
      claim:
        "Las fuentes seleccionadas no contienen a Clemente Vidal, Clara ni Del Castillo como origen comprobado de La Viudita.",
      evidenceClass: "descarte editorial",
      sourceKeys: [
        "rinconViudita",
        "compartoViudita",
        "colombianStorytellers",
        "colombianBestiary",
      ],
    },
    {
      claim:
        "La ruta se conserva y se transfiere de Varios a Andina > Nariño > Mestizo sin fusionarla ni despublicarla.",
      evidenceClass: "decisión editorial",
      sourceKeys: [
        "rinconViudita",
        "compartoViudita",
        "colombianStorytellers",
      ],
    },
  ],
  "el-judio-errante": [
    {
      claim:
        "Cartaphilus en la noticia de 1228 y Ahasuerus en el impreso de 1602 son capas textuales distintas, no una biografía continua.",
      evidenceClass: "historia textual documentada",
      sourceKeys: ["jewishEncyclopedia", "conwayWandering"],
    },
    {
      claim:
        "El motivo fue construido desde el cristianismo antijudío y convirtió una identidad colectiva en signo de culpa y conversión obligatoria.",
      evidenceClass: "contexto de prejuicio documentado",
      sourceKeys: ["hasanRokem", "hessCursed"],
    },
    {
      claim:
        "La fórmula del judío eterno fue reutilizada por propaganda nazi para deshumanizar a las personas judías.",
      evidenceClass: "recepción histórica documentada",
      sourceKeys: ["ushmmEternalJew", "hessCursed"],
    },
    {
      claim:
        "Tunja adaptó la leyenda alrededor de las tallas de Santo Domingo, la Semana Santa y el encuentro entre un viajero, el Padre Luis y la estatua.",
      evidenceClass: "circulación regional documentada",
      sourceKeys: ["boyacaFolklore", "elTiempoTunja", "ensstTunja"],
    },
    {
      claim:
        "La talla procesional es patrimonio material, pero la visita y el diálogo sobrenatural no quedan demostrados como hechos del siglo XVI.",
      evidenceClass: "límite documental",
      sourceKeys: ["elTiempoTunja", "boyacaFolklore", "ensstTunja"],
    },
    {
      claim:
        "Celos de María Magdalena e identidades como Demetrios, Ragnar, Hiuan-tsang, Ibn Battuta o el Sombrerón carecen de respaldo y se retiran.",
      evidenceClass: "descarte editorial",
      sourceKeys: [
        "hasanRokem",
        "jewishEncyclopedia",
        "conwayWandering",
        "boyacaFolklore",
      ],
    },
    {
      claim:
        "La URL se conserva, el título visible señala el estigma y la ruta se transfiere a Andina > Boyacá > Mestizo por su recepción tunjana.",
      evidenceClass: "decisión editorial",
      sourceKeys: ["hasanRokem", "boyacaFolklore", "elTiempoTunja"],
    },
  ],
  "el-bus-fantasma": [
    {
      claim:
        "Un ciclo publicado narra un accidente en carretera montañosa, un asiento libre y la orden de bajar sin mirar a los pasajeros muertos.",
      evidenceClass: "motivo narrativo documentado",
      sourceKeys: ["colombianBestiary", "espantosBus"],
    },
    {
      claim:
        "El nombre Bus Fantasma también aparece en una investigación de memoria narrativa intergeneracional sin versión suficiente para identificar el ciclo exacto.",
      evidenceClass: "circulación intergeneracional documentada",
      sourceKeys: ["libertadoresOrality"],
    },
    {
      claim:
        "La G66 es una creepypasta bogotana sobre una ruta inexistente que circula digitalmente desde aproximadamente 2014.",
      evidenceClass: "recepción digital documentada",
      sourceKeys: ["ugcCartography", "elTiempoG66", "infobaeG66"],
    },
    {
      claim:
        "Horarios, oferta y color del sistema contradicen la literalidad del relato y ningún expediente presentado demuestra la desaparición atribuida.",
      evidenceClass: "límite documental",
      sourceKeys: ["elTiempoG66", "infobaeG66"],
    },
    {
      claim:
        "La difusión en Mi Señal muestra que la G66 ya integra un repertorio público contemporáneo de leyendas urbanas de Colombia.",
      evidenceClass: "recepción pública documentada",
      sourceKeys: ["miSenalUrban", "ugcCartography"],
    },
    {
      claim:
        "El bus wayuu que transporta almas a Jepira pertenece a otra geografía funeraria y se usa solo como comparación directa.",
      evidenceClass: "frontera cultural documentada",
      sourceKeys: ["perrinWayuu"],
    },
    {
      claim:
        "Marcel Laforet, el manuscrito de tinta plateada y la terminal del cementerio no aparecen en las ocho fuentes seleccionadas.",
      evidenceClass: "descarte editorial",
      sourceKeys: [
        "colombianBestiary",
        "espantosBus",
        "ugcCartography",
        "elTiempoG66",
      ],
    },
    {
      claim:
        "La URL permanece en Varios > Varios > Mestizo y conserva separados el ciclo de carretera y la G66.",
      evidenceClass: "decisión editorial",
      sourceKeys: [
        "colombianBestiary",
        "espantosBus",
        "ugcCartography",
        "elTiempoG66",
      ],
    },
  ],
};

const allowedClasses = new Set([
  "circulación regional documentada",
  "motivo narrativo documentado",
  "control bibliográfico",
  "variante regional documentada",
  "descarte editorial",
  "decisión editorial",
  "historia textual documentada",
  "contexto de prejuicio documentado",
  "recepción histórica documentada",
  "límite documental",
  "circulación intergeneracional documentada",
  "recepción digital documentada",
  "recepción pública documentada",
  "frontera cultural documentada",
]);

export function assertVariosMestizoFinalEvidenceMatrix() {
  for (const [slug, claims] of Object.entries(variosMestizoFinalEvidenceMatrix)) {
    if (claims.length < 5) {
      throw new Error(`${slug}: se requieren cinco decisiones de evidencia.`);
    }
    for (const { claim, evidenceClass, sourceKeys } of claims) {
      if (
        !claim ||
        !allowedClasses.has(evidenceClass) ||
        !sourceKeys.length ||
        new Set(sourceKeys).size !== sourceKeys.length
      ) {
        throw new Error(`${slug}: entrada de evidencia incompleta.`);
      }
      for (const key of sourceKeys) {
        if (!variosMestizoFinalSources[key]) {
          throw new Error(`${slug}: fuente desconocida ${key}.`);
        }
      }
    }
  }
  return true;
}
