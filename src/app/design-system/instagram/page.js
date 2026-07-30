import Image from "next/image";
import styles from "./page.module.css";

const BACHUE_IMAGE = "/design-system/instagram/bachue-vertical.jpg";

function CoverImage({ className = "" }) {
  return (
    <Image
      alt="Bachué y un niño emergen de la laguna de Iguaque."
      className={className}
      fill
      priority
      sizes="(max-width: 900px) 92vw, 432px"
      src={BACHUE_IMAGE}
    />
  );
}

function ImmersiveCover() {
  return (
    <div
      className={`${styles.cover} ${styles.immersive}`}
      data-instagram-cover="immersive"
    >
      <CoverImage className={styles.immersiveImage} />
      <div className={styles.immersiveShade} />
      <div className={styles.immersiveText}>
        <span>Mito muisca</span>
        <strong>Bachué</strong>
      </div>
    </div>
  );
}

function ArchiveCover() {
  return (
    <div
      className={`${styles.cover} ${styles.archive}`}
      data-instagram-cover="archive"
    >
      <div className={styles.archiveFrame}>
        <CoverImage className={styles.archiveImage} />
      </div>
      <div className={styles.archiveTopline}>
        <span>Cultura muisca</span>
      </div>
      <div className={styles.archiveText}>
        <strong>Bachué</strong>
      </div>
    </div>
  );
}

function FolioCover() {
  return (
    <div
      className={`${styles.cover} ${styles.folio}`}
      data-instagram-cover="folio"
    >
      <aside className={styles.folioRail}>
        <strong>Bachué</strong>
        <span>Muisca</span>
      </aside>
      <div className={styles.folioImage}>
        <CoverImage />
      </div>
    </div>
  );
}

const EXPORT_COVERS = {
  immersive: <ImmersiveCover />,
  archive: <ArchiveCover />,
  folio: <FolioCover />,
};

export const metadata = {
  title: "Exploración de portada para Instagram | Sistema de diseño",
  robots: { index: false, follow: false },
};

export default async function InstagramStyleStudyPage({ searchParams }) {
  const { cover } = await searchParams;

  if (cover && EXPORT_COVERS[cover]) {
    return (
      <main className={styles.exportPage}>
        <div className={styles.exportCover}>{EXPORT_COVERS[cover]}</div>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <p className={styles.kicker}>Dirección de arte · exploración 01</p>
        <h1>La imagen primero.</h1>
        <p>
          Tres portadas 4:5 construidas únicamente con la imagen vertical
          canónica, Metamorphous y Readex Pro.
        </p>
      </header>

      <section aria-label="Direcciones de portada" className={styles.grid}>
        <article className={styles.study}>
          <ImmersiveCover />
          <div className={styles.caption}>
            <span>01</span>
            <div>
              <strong>Inmersiva</strong>
              <p>Encuadre completo y tipografía dentro de la atmósfera.</p>
            </div>
          </div>
        </article>

        <article className={styles.study}>
          <ArchiveCover />
          <div className={styles.caption}>
            <span>02</span>
            <div>
              <strong>Archivo vivo</strong>
              <p>La imagen completa, contenida como una pieza de colección.</p>
            </div>
          </div>
        </article>

        <article className={styles.study}>
          <FolioCover />
          <div className={styles.caption}>
            <span>03</span>
            <div>
              <strong>Folio vertical</strong>
              <p>Una sola tensión editorial; la obra se conserva casi íntegra.</p>
            </div>
          </div>
        </article>
      </section>

      <footer className={styles.footer}>
        Sin sinopsis · sin numeración del carrusel · sin ilustración añadida
      </footer>
    </main>
  );
}
