import fs from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import { InstagramTemplateCanvas } from "../../../components/instagram/InstagramTemplateCanvas";
import {
  getEditorialTemplate,
  getEditorialTemplatesByFamily,
} from "../../../lib/instagram-editorial-library.js";
import styles from "./page.module.css";

export const metadata = {
  title: "Biblioteca editorial de Instagram | Sistema de diseño",
  robots: { index: false, follow: false },
};

async function readComposition(slug, edition = "v8") {
  if (!/^[a-z0-9-]+$/.test(slug || "")) return null;
  if (!/^v[0-9]+$/.test(edition)) return null;
  try {
    const file = path.join(
      process.cwd(),
      "artifacts",
      "instagram",
      slug,
      `composition-${edition}.json`
    );
    return JSON.parse(await fs.readFile(file, "utf8"));
  } catch {
    return null;
  }
}

export default async function InstagramLibraryPage({ searchParams }) {
  const query = await searchParams;
  const edition = query.edition || "v8";
  const composition = query.composition
    ? await readComposition(query.composition, edition)
    : null;
  const compositionSlide = composition?.slides?.find(
    (slide) => slide.sequence === Number(query.slide)
  );
  const compositionTemplate = compositionSlide
    ? getEditorialTemplate(compositionSlide.template_id)
    : null;

  if (compositionSlide && compositionTemplate) {
    return (
      <main id="contenido" className={styles.exportPage}>
        <div className={styles.exportCanvas}>
          <InstagramTemplateCanvas
            assets={composition.assets}
            copy={compositionSlide.copy}
            meta={{
              mythTitle: composition.myth?.title,
              role: compositionSlide.narrative_role,
              sequence: compositionSlide.sequence,
              total: composition.slides.length,
            }}
            template={compositionTemplate}
          />
        </div>
      </main>
    );
  }

  if (composition) {
    return (
      <main id="contenido" className={styles.page}>
        <header className={styles.header}>
          <p>Carrusel resuelto · semilla {composition.seed}</p>
          <h1>
            {composition.myth?.title || query.composition} ·{" "}
            {composition.slides.length} secuencias
          </h1>
          <span>
            La narración define la función de cada lámina; el compositor escoge
            una plantilla aprobada, compatible y no repetida.
          </span>
        </header>

        <section className={styles.grid}>
          {composition.slides.map((slide) => {
            const item = getEditorialTemplate(slide.template_id);
            if (!item) return null;
            return (
              <article className={styles.item} key={slide.sequence}>
                <InstagramTemplateCanvas
                  assets={composition.assets}
                  copy={slide.copy}
                  meta={{
                    mythTitle: composition.myth?.title,
                    role: slide.narrative_role,
                    sequence: slide.sequence,
                    total: composition.slides.length,
                  }}
                  template={item}
                />
                <div className={styles.meta}>
                  <span>{String(slide.sequence).padStart(2, "0")}</span>
                  <div>
                    <strong>{slide.template_name}</strong>
                    <code>{slide.template_id}</code>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </main>
    );
  }

  const template = query.template
    ? getEditorialTemplate(query.template)
    : null;

  if (template) {
    return (
      <main id="contenido" className={styles.exportPage}>
        <div className={styles.exportCanvas}>
          <InstagramTemplateCanvas template={template} />
        </div>
      </main>
    );
  }

  const family = query.family || "cover";
  const density =
    family === "typographic" &&
    ["short", "medium", "narrative"].includes(query.density)
      ? query.density
      : "all";
  const familyTemplates = getEditorialTemplatesByFamily(family);
  const templates =
    density === "all"
      ? familyTemplates
      : familyTemplates.filter((item) => item.textDensity === density);

  return (
    <main id="contenido" className={styles.page}>
      <header className={styles.header}>
        <p>Biblioteca editorial · {family}</p>
        <h1>{templates.length} plantillas aprobadas</h1>
        <span>
          Cada plantilla se prueba con contenido acorde a su capacidad para
          comparar composición, encuadre, jerarquía y legibilidad.
        </span>
        {family === "typographic" ? (
          <nav aria-label="Densidad tipográfica" className={styles.filters}>
            {[
              ["all", "Todas"],
              ["short", "Breves"],
              ["medium", "Medias"],
              ["narrative", "Narrativas"],
            ].map(([value, label]) => (
              <Link
                aria-current={density === value ? "page" : undefined}
                className={density === value ? styles.activeFilter : undefined}
                href={`/design-system/instagram-library?family=typographic${
                  value === "all" ? "" : `&density=${value}`
                }`}
                key={value}
              >
                {label}
              </Link>
            ))}
          </nav>
        ) : null}
      </header>

      <section className={styles.grid}>
        {templates.map((item, index) => (
          <article className={styles.item} key={item.id}>
            <InstagramTemplateCanvas
              meta={{
                mythTitle: "Bachué",
                role: item.role,
                sequence: (index % 12) + 1,
                total: 12,
              }}
              template={item}
            />
            <div className={styles.meta}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <strong>{item.name}</strong>
                <code>{item.id}</code>
                {item.textDensity ? (
                  <em>
                    {item.textDensity} · hasta {item.maxWords} palabras
                  </em>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
