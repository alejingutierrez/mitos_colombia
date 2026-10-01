import Link from "next/link";
import { ImageFrame } from "../atoms/ImageFrame";
import { getMythImage } from "../../lib/myth-images";
import styles from "./ArtworkLink.module.css";

/** La obra completa abre el relato; el texto queda sobre papel. */
export function ArtworkLink({ myth, compact = false, priority = false, loading }) {
  const imageUrl = myth.imageUrl || getMythImage(myth, "landscape");
  return <Link href={`/mitos/${myth.slug}`} className={`group ${styles.artwork}`}>
    <ImageFrame src={imageUrl} alt="" ratio="3 / 2" quality={90} priority={priority} loading={loading}
      sizes={compact ? "(max-width: 767px) 46vw, (max-width: 1023px) 30vw, 330px" : "(max-width: 767px) 94vw, (max-width: 1023px) 46vw, 440px"}
      className="rounded-none border-0" imgClassName="atlas-image-zoom object-cover" />
    <div className={styles.caption}><h3>{myth.title}</h3>{myth.region || myth.community ? <p>{[myth.region, myth.community].filter(Boolean).join(" · ")}</p> : null}</div>
  </Link>;
}
