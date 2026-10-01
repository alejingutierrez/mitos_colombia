import { Container, ImageFrame } from "../atoms";
import { Breadcrumb } from "../molecules";
import styles from "./archive-pages.module.css";

/** Una entrada compartida: el texto sobre papel y la ilustración sin velo. */
export function ArchivePageHeader({ eyebrow, title, description, breadcrumb, imageUrl, meta, children }) {
  return <Container size="atlas" className={styles.header}>
    {breadcrumb?.length ? <Breadcrumb items={breadcrumb} className="mb-4" /> : null}
    <div className={imageUrl ? styles.split : styles.intro}>
      <div>{eyebrow ? <p className="atlas-kicker">{eyebrow}</p> : null}<h1 className={styles.title}>{title}</h1>
        {description ? <p className={styles.description}>{description}</p> : null}
        {meta ? <p className={styles.meta}>{meta}</p> : null}{children}
      </div>
      {imageUrl ? <ImageFrame src={imageUrl} alt="" ratio="3 / 2" priority unoptimized sizes="(max-width: 767px) 100vw, 60vw" className={styles.leadImage} /> : null}
    </div>
  </Container>;
}
