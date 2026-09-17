import fs from "node:fs/promises";
import path from "node:path";
import { Space_Grotesk } from "next/font/google";
import { SlideV10 } from "../../../components/instagram/SlideV10";
import {
  V10_TEMPLATES,
  V10_SCREEN_TYPES,
  getV10Template,
  CANVAS,
} from "../../../lib/instagram-v10.js";

export const metadata = {
  title: "Sistema editorial v10 · acabado A+C | Sistema de diseño",
  robots: { index: false, follow: false },
};

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

// ---------------------------------------------------------------------------
// copia de muestra (Bachué) para la galería y el modo ?slide=<templateId>
// ---------------------------------------------------------------------------

const SAMPLE_ASSETS = Object.freeze({
  cover: "/design-system/instagram/bachue-vertical.jpg",
  secondary: "/design-system/instagram/bachue-horizontal.jpg",
  tertiary: "/design-system/instagram/bachue-tertiary.png",
});

const SAMPLE_COPY = Object.freeze({
  portada: {
    name: "Bachué",
    kicker: "Muiscas · Laguna de Iguaque",
    promise: "Salió del agua con un niño de la mano. Volvió convertida en serpiente.",
    community: "Muiscas",
    dataRows: [
      ["Comunidad", "Muiscas · Andina"],
      ["Lugar", "Iguaque, Boyacá"],
      ["Crónicas", "Simón 1627 · Zamora 1701"],
    ],
  },
  territorio: {
    title: "Laguna de Iguaque",
    kicker: "Muiscas · región Andina",
    coordinates: "5.6873° N · 73.4368° O",
    latitude: 5.6873,
    longitude: -73.4368,
    note: "Páramo de Iguaque, cuenca alta.",
    dataRows: [
      ["Latitud", "5.6873° N"],
      ["Longitud", "73.4368° O"],
      ["Altitud", "3.150 m s. n. m."],
    ],
  },
  tipografica: {
    kicker: "El giro",
    title: "Ella lo crió. Después se casó con él.",
    body: "Los cronistas anotaron el detalle sin explicarlo. En las dos versiones el niño tiene tres años cuando sale del agua.",
    titleParts: ["Ella lo crió.", "Después", "se casó con él."],
    bodyColumns: [
      "Los cronistas anotaron el detalle sin explicarlo.",
      "En las dos versiones el niño tiene tres años cuando sale del agua.",
    ],
  },
  secundaria: {
    kicker: "La aparición",
    title: "Del agua salieron dos.",
    body: "Una mujer adulta y un niño de tres años tomado de su mano.",
  },
  climax: {
    kicker: "El regreso",
    title: "Entraron al agua tomados de la mano.",
    body: "Sobre la superficie aparecieron dos serpientes. Dieron una vuelta a la laguna y se hundieron.",
  },
  cierre: {
    kicker: "El relato continúa",
    title: "¿Qué comunidad sabe dejar ir a quien la fundó?",
    lee: "Lee la historia completa, sus fuentes y otras versiones en",
    cta: "mitosdecolombia.com",
    sources: "Fray Pedro Simón, 1627 · Alonso de Zamora, 1701",
  },
});

const SAMPLE_SEQUENCE = Object.freeze({
  portada: 1,
  territorio: 3,
  tipografica: 5,
  secundaria: 4,
  climax: 9,
  cierre: 11,
});

async function readComposition(slug, edition) {
  if (!/^[a-z0-9-]+$/.test(slug || "")) return null;
  if (!/^v[0-9a-z-]+$/.test(edition || "")) return null;
  try {
    const file = path.join(process.cwd(), "artifacts", "instagram", slug, `composition-${edition}.json`);
    return JSON.parse(await fs.readFile(file, "utf8"));
  } catch {
    return null;
  }
}

function ExportFrame({ children }) {
  return (
    <main
      className={grotesk.variable}
      style={{ width: CANVAS.width, height: CANVAS.height, overflow: "hidden", background: "#000" }}
    >
      {children}
    </main>
  );
}

export default async function InstagramV10Page({ searchParams }) {
  const query = await searchParams;

  // --- modo producción: ?composition=<slug>&edition=<vN>&slide=<sequence> ---
  if (query.composition && query.slide) {
    const composition = await readComposition(query.composition, query.edition || "v10");
    const slide = composition?.slides?.find((item) => item.sequence === Number(query.slide));
    if (!slide) {
      return (
        <ExportFrame>
          <div style={{ color: "#fff", padding: 40, fontFamily: "monospace" }}>
            Composición o lámina no encontrada.
          </div>
        </ExportFrame>
      );
    }
    return (
      <ExportFrame>
        <SlideV10
          templateId={slide.template_id}
          copy={slide.copy}
          assets={composition.assets}
          meta={{ sequence: slide.sequence, total: composition.slides.length }}
        />
      </ExportFrame>
    );
  }

  // --- modo muestra exacta: ?slide=<templateId> (1080×1350 para captura) ---
  if (query.slide) {
    const template = getV10Template(query.slide);
    if (template) {
      return (
        <ExportFrame>
          <SlideV10
            templateId={template.id}
            copy={SAMPLE_COPY[template.screenType]}
            assets={SAMPLE_ASSETS}
            meta={{ sequence: SAMPLE_SEQUENCE[template.screenType], total: 11 }}
          />
        </ExportFrame>
      );
    }
  }

  // --- galería: las 60 a escala 0.24, agrupadas por tipo ---
  const scale = 0.24;
  return (
    <main
      className={grotesk.variable}
      style={{ background: "#0E1413", minHeight: "100vh", padding: "48px 40px 80px", color: "#F3EDDE" }}
    >
      <header style={{ maxWidth: 1280, margin: "0 auto 8px" }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#C5A45D" }}>
          Sistema editorial v10 · acabado A+C
        </p>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 40, margin: "10px 0 6px" }}>
          60 plantillas de producción
        </h1>
        <p style={{ color: "#93A19A", fontSize: 14, maxWidth: 760 }}>
          Render real de las láminas aprobadas. Añade <code>?slide=&lt;id&gt;</code> para la lámina exacta a 1080×1350,
          o <code>?composition=&lt;slug&gt;&amp;edition=&lt;vN&gt;&amp;slide=&lt;n&gt;</code> para una composición de producción.
        </p>
      </header>
      {V10_SCREEN_TYPES.map((screenType) => (
        <section key={screenType} style={{ maxWidth: 1280, margin: "40px auto 0" }}>
          <h2 style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: "#C5A45D", borderBottom: "1px solid rgba(243,237,222,.16)", paddingBottom: 10 }}>
            {screenType}
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 20, paddingTop: 20 }}>
            {V10_TEMPLATES.filter((template) => template.screenType === screenType).map((template) => (
              <figure key={template.id} style={{ margin: 0, width: CANVAS.width * scale }}>
                <a href={`?slide=${template.id}`} style={{ display: "block", textDecoration: "none" }}>
                  <div
                    style={{
                      width: CANVAS.width * scale,
                      height: CANVAS.height * scale,
                      overflow: "hidden",
                      outline: "1px solid rgba(243,237,222,.12)",
                    }}
                  >
                    <div style={{ width: CANVAS.width, height: CANVAS.height, transform: `scale(${scale})`, transformOrigin: "top left" }}>
                      <SlideV10
                        templateId={template.id}
                        copy={SAMPLE_COPY[template.screenType]}
                        assets={SAMPLE_ASSETS}
                        meta={{ sequence: SAMPLE_SEQUENCE[template.screenType], total: 11 }}
                      />
                    </div>
                  </div>
                </a>
                <figcaption style={{ fontSize: 11, color: "#8A968F", paddingTop: 8 }}>
                  {template.variant.replace(/_/g, " ")} · modo {template.mode}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
