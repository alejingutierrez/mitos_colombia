import canvas from "../editorial/archive-canvas.module.css";
import { Header } from "../organisms";
import { TarotExplorer } from "../tarot/TarotExplorer";

export function TarotTemplate({ cards = [], daily, title = "Tarot de Colombia" }) {
  return <><Header active="/tarot" /><main id="contenido" className={canvas.canvas}><TarotExplorer cards={cards} daily={daily} title={title} /></main></>;
}
