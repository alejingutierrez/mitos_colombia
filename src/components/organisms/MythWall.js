import { Container } from "../atoms";
import { ArtworkLink } from "../molecules/ArtworkLink";
export function MythWall({ myths = [], heading, meta }) {
  if (!myths.length) return null;
  return <section className="py-5 md:py-7"><Container size="atlas">
    <div className="mb-5 flex flex-wrap items-end justify-between gap-3"><h2 className="atlas-section-heading">{heading}</h2>{meta ? <p className="atlas-kicker">{meta}</p> : null}</div>
    <ul className="grid grid-cols-1 gap-[2px] sm:grid-cols-2 lg:grid-cols-3">{myths.map((myth,index) => <li key={myth.slug}><ArtworkLink myth={myth} priority={index === 0} loading={index < 3 ? "eager" : undefined} /></li>)}</ul>
  </Container></section>;
}
