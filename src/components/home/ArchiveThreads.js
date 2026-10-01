import Link from "next/link";
import { MotifMask } from "../atoms/Motif";
import styles from "./home-journey.module.css";

function motifFor(slug) {
  if (/agua|rio|mar|diluvio/.test(slug)) return "agua";
  if (/animal|criatura|guardian/.test(slug)) return "jaguar";
  if (/muerte|noche|espiritu/.test(slug)) return "luna";
  if (/origen|creacion|luz/.test(slug)) return "sol";
  if (/piedra|lugar|territorio/.test(slug)) return "montana";
  if (/persona|cultural|tradicion/.test(slug)) return "sol";
  return "hoja";
}

/** Los motivos pertenecen al sistema existente. El hilo une temas del archivo
 * y cada cifra conserva el conteo real; no se inventan categorías del mockup. */
export function CategoryCloud({ categories = [] }) {
  if (!categories.length) return null;
  const ordered = [...categories].sort((a,b) => (Number(b.count)||0) - (Number(a.count)||0));
  return (
    <ul className={styles.archiveThread}>
      {ordered.map((category) => <li key={category.slug}>
        <Link href={`/categorias/${category.slug}`} aria-label={`${category.name} · ${category.count} relatos`} className={styles.archiveNode}>
          <span className={styles.archiveGlyph}><MotifMask src={`/motifs/${motifFor(category.slug)}-128.png`} width={40} /></span>
          <span className={styles.archiveName}>{category.name}</span>
          <span className={styles.archiveCount}>{category.count} relatos</span>
        </Link>
      </li>)}
    </ul>
  );
}
