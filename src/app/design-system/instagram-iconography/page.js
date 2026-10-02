import Link from "next/link";
import { MotifMask } from "../../../components/atoms/Motif";
import { INSTAGRAM_ICONOGRAPHY } from "../../../lib/instagram-iconography";
import styles from "./page.module.css";

export const metadata = {
  title: "Iconografía de carruseles | Sistema de diseño",
  robots: { index: false, follow: false },
};

const GROUPS = [
  ["territory", "Territorio", "Clima, paisaje y fuerzas naturales."],
  ["narrative", "Narrativa", "Movimientos recurrentes dentro de un relato."],
  [
    "community",
    "Comunidad",
    "Prácticas compartidas, sin atribuir emblemas culturales inventados.",
  ],
  ["region", "Regiones", "Brújulas geográficas del territorio colombiano."],
  ["atmosphere", "Atmósfera", "Clima, materia y estados del paisaje."],
  ["time", "Tiempo", "Ciclos, pausas, generaciones y continuidad."],
  ["presence", "Presencias", "Seres sugeridos sin convertirlos en emblemas."],
  ["signal", "Señales", "Huellas, testigos, umbrales y encuentros."],
];

function AssetCard({ asset }) {
  const repeatingPattern =
    asset.kind === "pattern"
      ? {
          maskRepeat: "repeat",
          maskSize: "72px",
          WebkitMaskRepeat: "repeat",
          WebkitMaskSize: "72px",
        }
      : undefined;
  return (
    <article className={styles.card}>
      <MotifMask
        alt={asset.label}
        className={styles.glyph}
        data-kind={asset.kind}
        src={asset.src}
        style={repeatingPattern}
      />
      <strong>{asset.label}</strong>
      <code>{asset.id}</code>
    </article>
  );
}

export default function InstagramIconographyPage() {
  const dividers = INSTAGRAM_ICONOGRAPHY.filter(
    (asset) => asset.kind === "divider"
  );
  const corners = INSTAGRAM_ICONOGRAPHY.filter(
    (asset) => asset.kind === "corner"
  );
  const frames = INSTAGRAM_ICONOGRAPHY.filter(
    (asset) => asset.kind === "frame"
  );
  const ornaments = INSTAGRAM_ICONOGRAPHY.filter(
    (asset) => asset.kind === "ornament"
  );
  const patterns = INSTAGRAM_ICONOGRAPHY.filter(
    (asset) => asset.kind === "pattern"
  );

  return (
    <main id="contenido" className={styles.page}>
      <header className={styles.header}>
        <div>
          <p>Sistema editorial · carruseles · v2</p>
          <h1>Una gramática visual para orientar cada relato.</h1>
        </div>
        <div className={styles.summary}>
          <span>48 símbolos</span>
          <span>12 separadores · 12 esquinas</span>
          <span>8 marcos · 12 ornamentos</span>
          <span>8 patrones · 100 piezas</span>
          <span>PNG transparente</span>
        </div>
        <p className={styles.intro}>
          Cada pieza comparte peso de línea, terminaciones redondeadas y un
          maestro monocromático. En composición funciona como máscara para
          heredar el color de cualquier paleta sin duplicar archivos.
        </p>
        <Link className={styles.back} href="/design-system/instagram-library">
          Ver biblioteca de carruseles
        </Link>
      </header>

      <section className={styles.palette} aria-label="Prueba de paletas">
        {["paper", "forest", "gold"].map((tone) => (
          <div className={styles[tone]} key={tone}>
            <MotifMask
              alt="Transformación"
              className={styles.paletteGlyph}
              src="/motifs/carousel/v2/glyphs/transformation-1024.png"
            />
            <span>Un PNG · distintas paletas</span>
          </div>
        ))}
      </section>

      {GROUPS.map(([id, title, description]) => {
        const assets = INSTAGRAM_ICONOGRAPHY.filter(
          (asset) => asset.group === id
        );
        return (
          <section className={styles.section} key={id}>
            <header className={styles.sectionHeader}>
              <p>{String(assets.length).padStart(2, "0")}</p>
              <div>
                <h2>{title}</h2>
                <span>{description}</span>
              </div>
            </header>
            <div className={styles.grid}>
              {assets.map((asset) => (
                <AssetCard asset={asset} key={asset.id} />
              ))}
            </div>
          </section>
        );
      })}

      <section className={styles.section}>
        <header className={styles.sectionHeader}>
          <p>12</p>
          <div>
            <h2>Separadores</h2>
            <span>Ritmo, pausa y continuidad entre bloques de información.</span>
          </div>
        </header>
        <div className={styles.dividerGrid}>
          {dividers.map((asset) => (
            <AssetCard asset={asset} key={asset.id} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <header className={styles.sectionHeader}>
          <p>12</p>
          <div>
            <h2>Esquinas</h2>
            <span>Marcos parciales para portadas, citas y fichas de archivo.</span>
          </div>
        </header>
        <div className={styles.grid}>
          {corners.map((asset) => (
            <AssetCard asset={asset} key={asset.id} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <header className={styles.sectionHeader}>
          <p>08</p>
          <div>
            <h2>Marcos</h2>
            <span>Andamios abiertos 4:5 para organizar sin encerrar el texto.</span>
          </div>
        </header>
        <div className={styles.frameGrid}>
          {frames.map((asset) => (
            <AssetCard asset={asset} key={asset.id} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <header className={styles.sectionHeader}>
          <p>12</p>
          <div>
            <h2>Ornamentos</h2>
            <span>Pequeños acentos para dar respiración, ritmo y continuidad.</span>
          </div>
        </header>
        <div className={styles.grid}>
          {ornaments.map((asset) => (
            <AssetCard asset={asset} key={asset.id} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <header className={styles.sectionHeader}>
          <p>08</p>
          <div>
            <h2>Patrones</h2>
            <span>Texturas continuas siempre por debajo de 8% de opacidad.</span>
          </div>
        </header>
        <div className={styles.patternGrid}>
          {patterns.map((asset) => (
            <AssetCard asset={asset} key={asset.id} />
          ))}
        </div>
      </section>

      <aside className={styles.policy}>
        <strong>Regla cultural</strong>
        <p>
          La colección usa territorio y prácticas humanas comunes.
          Un símbolo propio de una comunidad solo se incorpora con referencias
          documentadas y revisión, nunca como decoración genérica.
        </p>
      </aside>
    </main>
  );
}
