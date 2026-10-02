import Link from "next/link";
import { Container, Icon } from "../atoms";
import { Header, MythWall } from "../organisms";
import { ArchivePageHeader } from "../editorial/ArchivePageHeader";
import canvas from "../editorial/archive-canvas.module.css";

export function UnattributedTemplate({ label, lead, sections = [], territories = [], total = 0, bucketNames = [] }) {
  const populated = territories.filter((territory) => territory.myths?.length);
  return <><Header active="/comunidades" /><main id="contenido" className={canvas.canvas}>
    <ArchivePageHeader eyebrow="Otras voces de Colombia" title={label} description="Relatos mestizos y mixtos, reunidos por los territorios donde se cuentan." meta={`${total} relatos`} breadcrumb={[{label:"Comunidades",href:"/comunidades"},{label}]} />
    <Container size="atlas"><nav aria-label="Territorios del archivo" className="flex flex-wrap gap-2 pb-4">{populated.map((territory) => <a key={territory.slug} href={`#territorio-${territory.slug}`} className="min-h-11 inline-flex items-center border border-line-200 px-3 text-sm text-jungle-700">{territory.name} · {territory.myths.length}</a>)}</nav></Container>
    {populated.map((territory) => <section key={territory.slug} id={`territorio-${territory.slug}`} className="scroll-mt-24"><MythWall myths={territory.myths} heading={territory.name} meta={`${territory.myths.length} relatos`} /><Container size="atlas" className="pb-8"><Link href={`/regiones/${territory.slug}`} className="atlas-link inline-flex min-h-11">Todo el territorio {territory.name}<Icon name="arrow-right" size={17} /></Link></Container></section>)}
    <Container size="atlas" className="border-t border-line-200 py-10"><details><summary className="atlas-title-md cursor-pointer py-3">Sobre las tradiciones mestizas y mixtas</summary>{lead ? <p className="mt-4 max-w-prose leading-relaxed text-ink-700">{lead}</p> : null}<p className="mt-3 text-sm text-ink-700">{bucketNames.length ? `Etiquetas del archivo: ${bucketNames.join(" · ")}.` : ""} Estas etiquetas no identifican un pueblo específico.</p><div className="mt-6 grid gap-8 md:grid-cols-2">{sections.map((section) => <section key={section.title}><h2 className="atlas-title-sm">{section.title}</h2>{String(section.body || "").split(/\n+/).filter(Boolean).map((paragraph,index) => <p key={index} className="mt-3 leading-relaxed text-ink-700">{paragraph}</p>)}</section>)}</div></details><Link href="/comunidades" className="atlas-link mt-8 inline-flex min-h-11">Volver a las comunidades<Icon name="arrow-right" size={17} /></Link></Container>
  </main></>;
}
