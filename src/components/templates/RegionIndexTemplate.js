import canvas from "../editorial/archive-canvas.module.css";
import { Container } from "../atoms";
import { Header } from "../organisms";
import { RegionExplorer } from "../organisms/RegionExplorer";

export function RegionIndexTemplate({ title, description, regions = [], active = "/regiones", children }) {
  return <><Header active={active} /><main id="contenido" className={canvas.canvas}>
    <Container size="atlas" className="pb-6 pt-8"><h1 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-tight text-jungle-700">{title}</h1>{description ? <p className="mt-3 max-w-2xl text-sm text-ink-700">{description}</p> : null}</Container>
    <Container size="atlas" className="pb-10"><RegionExplorer regions={regions} /></Container>{children}
  </main></>;
}
