import Link from "next/link";
import { Container } from "../atoms";
import { Header } from "../organisms";
import { VisualIndex } from "../organisms/VisualIndex";
import { ArchivePageHeader } from "../editorial/ArchivePageHeader";
import canvas from "../editorial/archive-canvas.module.css";

export function TaxonomyIndexTemplate({ eyebrow, title, description, items = [], active, mythIndex = [], footer, children }) {
  return <><Header active={active} /><main id="contenido" className={canvas.canvas}>
    <ArchivePageHeader eyebrow={eyebrow} title={title} description={description} />
    <Container size="atlas" className="pb-12"><VisualIndex items={items} label={active === "/categorias" ? "categorías" : "el archivo"} />{footer ? <div className="mt-8 flex justify-center">{footer}</div> : null}</Container>
    {mythIndex.length ? <Container size="atlas" className="border-t border-line-200 py-10"><details><summary className="atlas-title-md cursor-pointer py-3">Mitos para empezar</summary><div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{mythIndex.map((group) => <div key={group.href}><Link href={group.href} className="atlas-title-sm">{group.title}</Link><ul className="mt-3 space-y-2">{group.myths.slice(0,4).map((myth) => <li key={myth.slug}><Link href={`/mitos/${myth.slug}`} className="text-sm text-ink-700 hover:text-jungle-700">{myth.title}</Link></li>)}</ul></div>)}</div></details></Container> : null}{children}
  </main></>;
}
