import Link from "next/link";
import { cn } from "../../lib/utils";
import { Motif } from "../atoms/Motif";
import { Icon } from "../atoms/Icon";

/**
 * Molécula · TarotCard — objeto de baraja (registro oscuro y dorado)
 * Carta 2:3 con marco dorado doble, numeral romano (mayores) o rango (menores),
 * motivo del palo como medallón de crema, y pie ceremonial. Enlaza a su mito.
 * `card` = { card_name, arcana, suit, rank_label, order_index, roman?,
 *            reading_summary?, meaning?, myth_title?, myth_slug?, image_url? }
 */

const GOLD = "#bd8642";
const CREAM = "#f6e9cf";

const MAJOR_ROMAN = [
  "0", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X",
  "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", "XXI",
];

const SUIT_MOTIF = {
  Bastos: "sol",
  Copas: "agua",
  Espadas: "condor",
  Oros: "montana",
};

// Motivos variados para los arcanos mayores (no comparten palo).
const MAJOR_MOTIFS = ["luna", "sol", "jaguar", "condor", "anaconda", "agua", "montana", "hoja", "rana", "tucan", "delfin"];

function cardMark(card) {
  if (card.arcana === "major") {
    return card.roman || (typeof card.order_index === "number" ? MAJOR_ROMAN[card.order_index] : "") || "·";
  }
  return card.rank_label || (card.suit ? card.suit.slice(0, 3) : "·");
}

function cardMotif(card) {
  if (card.suit && SUIT_MOTIF[card.suit]) return SUIT_MOTIF[card.suit];
  if (card.arcana === "major") {
    const i = typeof card.order_index === "number" ? card.order_index : 0;
    return MAJOR_MOTIFS[i % MAJOR_MOTIFS.length];
  }
  return "jaguar";
}

export function TarotCard({ card, tilt = 0, className }) {
  const { card_name, arcana, suit, reading_summary, meaning, myth_title, myth_slug, image_url } = card || {};
  const mark = cardMark(card || {});
  const motif = cardMotif(card || {});
  const desc = reading_summary || meaning;

  return (
    <Link
      href={myth_slug ? `/mitos/${myth_slug}` : "#"}
      className={cn(
        "group block transition-transform duration-500 ease-editorial hover:!rotate-0 hover:-translate-y-2",
        className
      )}
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <div
        className="relative flex aspect-[2/3] flex-col overflow-hidden rounded p-3.5 transition-shadow duration-500"
        style={{
          background: "#12100b",
          border: `1px solid rgba(189,134,66,0.55)`,
          boxShadow: "0 18px 40px -22px rgba(0,0,0,0.75)",
        }}
      >
        {/* Marco dorado interior */}
        <span className="pointer-events-none absolute inset-[7px] rounded-sm" style={{ border: "1px solid rgba(189,134,66,0.35)" }} aria-hidden="true" />

        {/* Cabecera: numeral romano / rango */}
        <div className="relative z-10 flex items-center gap-2">
          <span className="font-display text-sm font-semibold tabular-nums" style={{ color: GOLD }}>
            {mark}
          </span>
          <span className="h-px flex-1" style={{ background: "rgba(189,134,66,0.25)" }} aria-hidden="true" />
        </div>

        {/* Ilustración: imagen o medallón de crema con el motivo */}
        <div className="relative z-10 flex flex-1 items-center justify-center py-2">
          {image_url ? (
            <img
              src={image_url}
              alt={card_name || ""}
              className="h-full w-full rounded-sm object-cover"
            />
          ) : (
            <span
              className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full transition-transform duration-500 ease-editorial group-hover:scale-105"
              style={{ background: CREAM, boxShadow: `0 0 0 1px ${GOLD}, 0 0 0 6px rgba(189,134,66,0.12)` }}
            >
              <Motif name={motif} size={46} />
            </span>
          )}
        </div>

        {/* Nombre + mito */}
        <div className="relative z-10 text-center">
          <p className="font-display text-sm font-bold leading-tight" style={{ color: CREAM }}>
            {card_name}
          </p>
          {myth_title ? (
            <p className="mt-0.5 truncate text-[0.65rem] uppercase tracking-[0.14em]" style={{ color: "rgba(246,233,207,0.5)" }}>
              {myth_title}
            </p>
          ) : null}
        </div>

        {/* Pie ceremonial */}
        <div className="relative z-10 mt-3 flex items-center justify-between border-t pt-2.5" style={{ borderColor: "rgba(246,233,207,0.12)" }}>
          <span className="text-[0.62rem] font-medium uppercase tracking-[0.16em]" style={{ color: "rgba(246,233,207,0.55)" }}>
            Descubrir
          </span>
          <Icon name="arrow-up-right" size={15} className="mc-arrow" style={{ color: GOLD }} />
        </div>
      </div>
      {desc ? <span className="sr-only">{desc}</span> : null}
    </Link>
  );
}
