/* eslint-disable @next/next/no-img-element */
/**
 * SlideV10 · render de producción del sistema editorial v10 (acabado A+C).
 * Puerto 1:1 de las 60 láminas aprobadas en el lienzo "Generador de carruseles";
 * cada valor viene de la maqueta (360×450) multiplicado por 3 → 1080×1350.
 *
 * Fuentes: --font-display (Asimovian · nombres y numerales),
 *          --font-grotesk (Space Grotesk 700 · frases),
 *          --font-body (Noto Sans Display · cuerpo y etiquetas).
 */

import {
  CANVAS,
  GRID,
  TYPE,
  PALETTES_V10,
  colX,
  colW,
  getV10Template,
} from "../../lib/instagram-v10.js";

const M = GRID.margin;
const DISPLAY = "var(--font-display), ui-sans-serif, sans-serif";
const GROTESK = "var(--font-grotesk), ui-sans-serif, sans-serif";
const BODY = "var(--font-body), ui-sans-serif, sans-serif";
const MOTIFS = "/motifs/carousel/v3";
const PATTERNS = "/motifs/carousel/v2/patterns";

// ---------------------------------------------------------------------------
// primitivas
// ---------------------------------------------------------------------------

function Label({ children, color, style }) {
  return (
    <div
      style={{
        fontFamily: BODY,
        fontSize: TYPE.lb,
        fontWeight: 700,
        letterSpacing: "0.28em",
        textTransform: "uppercase",
        lineHeight: 1,
        color,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Name({ children, size, color, style }) {
  return (
    <div
      style={{
        fontFamily: DISPLAY,
        fontSize: size,
        lineHeight: 1,
        letterSpacing: "-0.01em",
        color,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Phrase({ children, size, color, style }) {
  return (
    <div
      style={{
        fontFamily: GROTESK,
        fontWeight: 700,
        fontSize: size,
        lineHeight: 1.05,
        letterSpacing: "-0.025em",
        color,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Body({ children, size = TYPE.b2, color, style }) {
  return (
    <div style={{ fontFamily: BODY, fontSize: size, lineHeight: 1.48, color, ...style }}>
      {children}
    </div>
  );
}

const Hair = ({ color, width = "100%", height = 3, style }) => (
  <div style={{ width, height, background: color, flex: "none", ...style }} />
);

const Accent = ({ color, width = GRID.col, height = 18 }) => (
  <div style={{ width, height, background: color, flex: "none" }} />
);

function Ghost({ children, color, size = 174, opacity = 0.4, style }) {
  return (
    <div style={{ fontFamily: DISPLAY, fontSize: size, lineHeight: 1, color, opacity, ...style }}>
      {children}
    </div>
  );
}

const Panel = ({ top, bottom, left = 0, right = 0, width, height, color }) => (
  <div
    style={{
      position: "absolute",
      left,
      right: width == null ? right : undefined,
      top,
      bottom,
      width,
      height,
      background: color,
    }}
  />
);

const Bleed = ({ src, position = "50% 34%", zoom }) => (
  <img
    src={src}
    alt=""
    style={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: position,
      transform: zoom ? `scale(${zoom})` : undefined,
    }}
  />
);

const Band = ({ src, top, bottom, height, position }) => (
  <div
    style={{
      position: "absolute",
      left: 0,
      right: 0,
      top,
      bottom,
      height,
      overflow: "hidden",
    }}
  >
    <Bleed src={src} position={position} />
  </div>
);

const Duotone = ({ src, shadow = "#0E2226", light = "#E2C782", position = "50% 38%" }) => (
  <div style={{ position: "absolute", inset: 0, overflow: "hidden", background: shadow, isolation: "isolate" }}>
    <img
      src={src}
      alt=""
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: position,
        filter: "grayscale(1) contrast(1.34) brightness(1.03)",
        mixBlendMode: "screen",
      }}
    />
    <div style={{ position: "absolute", inset: 0, background: light, mixBlendMode: "multiply", opacity: 0.9 }} />
  </div>
);

const Motif = ({ name, size, x, y, right, bottom, opacity = 1, flip }) => (
  <img
    src={`${MOTIFS}/${name}.png`}
    alt=""
    style={{
      position: "absolute",
      left: right == null ? x : undefined,
      right,
      top: bottom == null ? y : undefined,
      bottom,
      width: size,
      height: size,
      objectFit: "contain",
      opacity,
      transform: flip ? "scaleX(-1)" : undefined,
    }}
  />
);

const Divider = ({ name, x = M, y, bottom, width }) => (
  <img
    src={`${MOTIFS}/${name}.png`}
    alt=""
    style={{
      display: "block",
      position: "absolute",
      left: x,
      top: bottom == null ? y : undefined,
      bottom,
      width,
      objectFit: "contain",
    }}
  />
);

function CtaBand({ background, color, cta, height = 138 }) {
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height,
        background,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: `0 ${M}px`,
      }}
    >
      <span style={{ fontFamily: GROTESK, fontWeight: 700, fontSize: 38, letterSpacing: "-0.01em", color }}>
        {cta}
      </span>
      <span style={{ fontFamily: GROTESK, fontWeight: 700, fontSize: 39, color }}>→</span>
    </div>
  );
}

/** Marca de la casa. Única concesión de degradado: la reserva bajo el folio en foto. */
function Mark({ palette, folio, onPhoto = false, side = "bottom" }) {
  const p = palette;
  const c = onPhoto
    ? "rgba(246,241,228,.82)"
    : p.dark
      ? "rgba(244,239,226,.56)"
      : "rgba(20,31,29,.5)";
  const a = onPhoto ? "rgba(230,213,166,.95)" : p.ac;
  return (
    <>
      {onPhoto ? (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            [side]: 0,
            height: 174,
            pointerEvents: "none",
            background: `linear-gradient(${side === "top" ? "to bottom" : "to top"}, rgba(8,14,13,.6), rgba(8,14,13,0))`,
          }}
        />
      ) : null}
      <div
        style={{
          position: "absolute",
          left: M,
          right: M,
          [side]: M - 24,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <span
          style={{
            fontFamily: BODY,
            fontSize: 19.5,
            fontWeight: 700,
            letterSpacing: "0.26em",
            textTransform: "uppercase",
            color: c,
          }}
        >
          Mitos de Colombia
        </span>
        <span style={{ fontFamily: DISPLAY, fontSize: 30, color: a }}>{folio}</span>
      </div>
    </>
  );
}

// ---------------------------------------------------------------------------
// cartografía real (mosaico de teselas OSM, como el sistema anterior)
// ---------------------------------------------------------------------------

const TILE = 256;

function tilePosition(latitude, longitude, zoom) {
  const latRad = (Math.max(-85.0511, Math.min(85.0511, latitude)) * Math.PI) / 180;
  const scale = 2 ** zoom;
  return {
    x: ((longitude + 180) / 360) * scale,
    y: ((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2) * scale,
    scale,
  };
}

function MapField({ latitude = 4.711, longitude = -74.0721, zoom = 11, radius = 3, marker = "#9B4530", veil }) {
  const { x, y, scale } = tilePosition(latitude, longitude, zoom);
  const cx = Math.floor(x);
  const cy = Math.floor(y);
  const ox = x - cx;
  const oy = y - cy;
  const tiles = [];
  for (let row = -radius; row <= radius; row += 1) {
    for (let col = -radius; col <= radius; col += 1) {
      const tx = (cx + col + scale) % scale;
      const ty = Math.max(0, Math.min(scale - 1, cy + row));
      tiles.push(
        <img
          key={`${zoom}-${tx}-${ty}`}
          src={`https://tile.openstreetmap.org/${zoom}/${tx}/${ty}.png`}
          alt=""
          loading="lazy"
          decoding="async"
          style={{ width: TILE, height: TILE, display: "block" }}
        />
      );
    }
  }
  const count = radius * 2 + 1;
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", background: "#DDE3D8" }}>
      <div
        style={{
          position: "absolute",
          display: "grid",
          gridTemplateColumns: `repeat(${count}, ${TILE}px)`,
          left: `calc(50% - ${(radius + ox) * TILE}px)`,
          top: `calc(50% - ${(radius + oy) * TILE}px)`,
        }}
      >
        {tiles}
      </div>
      {veil ? <div style={{ position: "absolute", inset: 0, background: veil }} /> : null}
      <span
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 40,
          height: 40,
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          border: `7px solid ${marker}`,
          background: "rgba(255,255,255,.55)",
          boxSizing: "border-box",
        }}
      />
      <span
        style={{
          position: "absolute",
          right: 12,
          bottom: 8,
          fontFamily: BODY,
          fontSize: 18,
          color: "rgba(20,31,29,.6)",
        }}
      >
        © OpenStreetMap
      </span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// bloques compuestos
// ---------------------------------------------------------------------------

function Cluster({ lb, kind = "phrase", title, size = TYPE.d3, body, bodySize = TYPE.b2, p, align = "left", width }) {
  const Title = kind === "name" ? Name : Phrase;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: align,
        alignItems: align === "center" ? "center" : undefined,
        maxWidth: width,
      }}
    >
      {lb ? <Label color={p.ac}>{lb}</Label> : null}
      {title ? (
        <Title size={size} color={p.fg} style={{ paddingTop: lb ? 27 : 0 }}>
          {title}
        </Title>
      ) : null}
      {body ? (
        <Body size={bodySize} color={p.mu} style={{ paddingTop: 39 }}>
          {body}
        </Body>
      ) : null}
    </div>
  );
}

function DataGrid({ rows, p }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `${colW(2)}px 1fr`,
        gap: `15px ${GRID.gutter}px`,
      }}
    >
      {rows.map(([key, value]) => (
        <FragmentRow key={key} k={key} v={value} p={p} />
      ))}
    </div>
  );
}

function FragmentRow({ k, v, p }) {
  return (
    <>
      <Label color={p.mu}>{k}</Label>
      <Body size={TYPE.b3} color={p.fg}>
        {v}
      </Body>
    </>
  );
}

function LinkBlock({ p, lee, cta, align = "left" }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18, textAlign: align, alignItems: align === "center" ? "center" : undefined }}>
      <Body size={TYPE.b3} color={p.mu}>
        {lee}
      </Body>
      <div style={{ fontFamily: BODY, fontWeight: 600, fontSize: TYPE.b2, color: p.fg }}>{cta}</div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// layouts por tipo de pantalla
// ---------------------------------------------------------------------------

function Portada({ template, p, copy, assets, folio }) {
  const photo = assets.portrait;
  const name = copy.name || copy.title;
  const promise = copy.promise || copy.body;
  const kicker = copy.kicker;

  switch (template.variant) {
    case "panel_bajo":
      return (
        <>
          <Bleed src={photo} position="50% 14%" />
          <Panel bottom={0} height={438} color={p.bg} />
          <div style={{ position: "absolute", left: colX(0), right: M, top: CANVAS.height - 438 + 54 }}>
            <Label color={p.ac}>{kicker}</Label>
            <Name size={TYPE.d1} color={p.fg} style={{ paddingTop: 30 }}>
              {name}
            </Name>
            <Body size={TYPE.b3} color={p.mu} style={{ paddingTop: 30, maxWidth: colW(4) }}>
              {promise}
            </Body>
          </div>
          <Mark palette={p} folio={folio} onPhoto side="top" />
        </>
      );
    case "panel_alto":
      return (
        <>
          <Panel top={0} height={420} color={p.bg} />
          <div style={{ position: "absolute", left: 0, right: 0, top: 420, bottom: 0, overflow: "hidden" }}>
            <Bleed src={photo} position="50% 22%" />
          </div>
          <div style={{ position: "absolute", left: colX(0), right: M, top: 114 }}>
            <Label color={p.ac}>{kicker}</Label>
            <Name size={TYPE.d2} color={p.fg} style={{ paddingTop: 27 }}>
              {name}
            </Name>
            <Body size={TYPE.b3} color={p.mu} style={{ paddingTop: 27, maxWidth: colW(4) }}>
              {promise}
            </Body>
          </div>
          <Mark palette={p} folio={folio} side="top" />
        </>
      );
    case "banda_baja":
      return (
        <>
          <Band src={photo} top={0} height={696} position="50% 18%" />
          <div style={{ position: "absolute", left: 0, right: 0, top: 696, bottom: 0, background: p.bg }} />
          <div style={{ position: "absolute", left: colX(0), right: M, top: 696 + 60, display: "flex", flexDirection: "column" }}>
            <Accent color={p.ac} />
            <Label color={p.mu} style={{ paddingTop: 30 }}>
              {kicker}
            </Label>
            <Name size={TYPE.d2} color={p.fg} style={{ paddingTop: 24 }}>
              {name}
            </Name>
            <Body size={TYPE.b3} color={p.mu} style={{ paddingTop: 27, maxWidth: colW(4) }}>
              {promise}
            </Body>
          </div>
          <Mark palette={p} folio={folio} side="bottom" />
        </>
      );
    case "placa": {
      const paper = PALETTES_V10.hueso;
      return (
        <>
          <Bleed src={photo} position="50% 12%" />
          <Panel left={0} bottom={0} width={756} height={414} color={paper.bg} />
          <div style={{ position: "absolute", left: colX(0), bottom: 60, width: 612 }}>
            <Label color={paper.ac}>{kicker}</Label>
            <Name size={TYPE.d2} color={paper.fg} style={{ paddingTop: 27 }}>
              {name}
            </Name>
            <Body size={TYPE.b3} color={paper.mu} style={{ paddingTop: 27 }}>
              {promise}
            </Body>
          </div>
          <Mark palette={p} folio={folio} onPhoto side="top" />
        </>
      );
    }
    case "ficha":
      return (
        <>
          <Band src={photo} top={0} height={558} position="50% 12%" />
          <div style={{ position: "absolute", left: colX(0), right: M, top: 558 + 60, display: "flex", flexDirection: "column", gap: 30 }}>
            <Name size={TYPE.d3} color={p.fg}>
              {name}
            </Name>
            <Hair color="rgba(20,31,29,.26)" />
            <DataGrid rows={copy.dataRows || []} p={p} />
          </div>
          <Mark palette={p} folio={folio} side="bottom" />
        </>
      );
    case "media_pagina": {
      const photoW = colX(3) - GRID.gutter;
      return (
        <>
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: photoW, overflow: "hidden" }}>
            <Bleed src={photo} position="50% 16%" />
          </div>
          <div style={{ position: "absolute", left: colX(3), right: M, top: M * 2, display: "flex", flexDirection: "column" }}>
            <Label color={p.ac}>{copy.community || kicker}</Label>
            <Name size={TYPE.d3} color={p.fg} style={{ paddingTop: 27 }}>
              {name}
            </Name>
            <Hair color="rgba(22,29,28,.24)" height={3} style={{ marginTop: 27 }} />
            <Body size={TYPE.b3} color={p.mu} style={{ paddingTop: 36 }}>
              {promise}
            </Body>
          </div>
          <Divider name="div-agua" x={colX(3)} bottom={174} width={colW(3)} />
          <Mark palette={p} folio={folio} onPhoto side="bottom" />
        </>
      );
    }
    case "franja":
      return (
        <>
          <Bleed src={photo} position="50% 10%" />
          <Panel top={756} height={234} color={p.bg} />
          <div
            style={{
              position: "absolute",
              left: colX(0),
              right: M,
              top: 756 + 39,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: GRID.gutter,
            }}
          >
            <div>
              <Label color={p.ac}>{kicker}</Label>
              <Name size={TYPE.d2} color={p.fg} style={{ paddingTop: 18 }}>
                {name}
              </Name>
            </div>
            <Body size={TYPE.b3} color={p.mu} style={{ maxWidth: 396 }}>
              {promise}
            </Body>
          </div>
          <Mark palette={p} folio={folio} onPhoto side="top" />
        </>
      );
    case "columna":
      return (
        <>
          <div style={{ position: "absolute", left: 450, right: 0, top: 0, bottom: 0, overflow: "hidden" }}>
            <Bleed src={photo} position="50% 18%" />
          </div>
          <Panel left={0} top={0} bottom={0} width={450} color={p.bg} />
          <div style={{ position: "absolute", left: M, top: M - 24, width: 318 }}>
            <span
              style={{
                fontFamily: BODY,
                fontSize: 19.5,
                fontWeight: 700,
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "rgba(244,239,226,.56)",
              }}
            >
              Mitos de Colombia
            </span>
          </div>
          <div style={{ position: "absolute", left: M, top: 258, width: 318, display: "flex", flexDirection: "column" }}>
            <Label color={p.ac}>{copy.community || kicker}</Label>
            <Name size={TYPE.d3} color={p.fg} style={{ paddingTop: 27 }}>
              {name}
            </Name>
            <Body size={TYPE.b3} color={p.mu} style={{ paddingTop: 36 }}>
              {promise}
            </Body>
          </div>
          <div style={{ position: "absolute", left: M, bottom: M - 24, fontFamily: DISPLAY, fontSize: 30, color: p.ac }}>
            {folio}
          </div>
        </>
      );
    case "duotono":
      return (
        <>
          <Duotone src={photo} position="50% 12%" />
          <Panel bottom={0} height={390} color={p.bg} />
          <div style={{ position: "absolute", left: colX(0), right: M, top: CANVAS.height - 390 + 51 }}>
            <Label color={p.ac}>{kicker}</Label>
            <Name size={TYPE.d2} color={p.fg} style={{ paddingTop: 27 }}>
              {name}
            </Name>
            <Body size={TYPE.b3} color={p.mu} style={{ paddingTop: 27, maxWidth: colW(4) }}>
              {promise}
            </Body>
          </div>
          <Mark palette={p} folio={folio} onPhoto side="top" />
        </>
      );
    case "ventana":
    default:
      return (
        <>
          <Ghost color={p.ac} size={132} opacity={0.4} style={{ position: "absolute", left: M, top: 126 }}>
            {folio}
          </Ghost>
          <div style={{ position: "absolute", left: colX(1), right: -M, top: 132, height: 708, overflow: "hidden" }}>
            <Bleed src={photo} position="50% 14%" />
          </div>
          <div style={{ position: "absolute", left: colX(0), right: M, top: 132 + 708 + 66 }}>
            <Label color={p.ac}>{kicker}</Label>
            <Name size={TYPE.d2} color={p.fg} style={{ paddingTop: 24 }}>
              {name}
            </Name>
            <Body size={TYPE.b3} color={p.mu} style={{ paddingTop: 24, maxWidth: colW(4) }}>
              {promise}
            </Body>
          </div>
          <Mark palette={p} folio={folio} side="bottom" />
        </>
      );
  }
}

function Territorio({ template, p, copy, folio }) {
  const lat = Number(copy.latitude) || 4.711;
  const lng = Number(copy.longitude) || -74.0721;
  const kicker = copy.kicker;
  const title = copy.title;
  const coords = copy.coordinates || copy.body;

  switch (template.variant) {
    case "atlas":
      return (
        <>
          <MapField latitude={lat} longitude={lng} zoom={11} />
          <Panel bottom={0} height={384} color={p.bg} />
          <div style={{ position: "absolute", left: colX(0), top: CANVAS.height - 384 + 48, width: colW(5) }}>
            <Cluster lb={kicker} title={title} size={TYPE.d3} body={coords} p={p} />
          </div>
          <Mark palette={p} folio={folio} onPhoto side="top" />
        </>
      );
    case "banda":
      return (
        <>
          <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: 846, overflow: "hidden" }}>
            <MapField latitude={lat} longitude={lng} zoom={11} />
          </div>
          <div style={{ position: "absolute", left: 0, right: 0, top: 846, bottom: 0, background: p.bg }} />
          <div style={{ position: "absolute", left: colX(0), top: 846 + 72, width: colW(5) }}>
            <Cluster lb={kicker} title={title} size={TYPE.d3} body={coords} p={p} />
          </div>
          <Mark palette={p} folio={folio} side="bottom" />
        </>
      );
    case "franja_media":
      return (
        <>
          <Ghost color={p.ac} size={162} opacity={0.4} style={{ position: "absolute", right: M, top: M * 2 - 18 }}>
            {folio}
          </Ghost>
          <div style={{ position: "absolute", left: 0, right: 0, top: 450, height: 540, overflow: "hidden" }}>
            <MapField latitude={lat} longitude={lng} zoom={11} />
          </div>
          <div style={{ position: "absolute", left: colX(0), top: M * 2, width: colW(4) }}>
            <Label color={p.ac}>{kicker}</Label>
            <Phrase size={TYPE.d3} color={p.fg} style={{ paddingTop: 30 }}>
              {title}
            </Phrase>
          </div>
          <div style={{ position: "absolute", left: colX(0), top: 450 + 540 + 72, width: colW(4) }}>
            <Body size={TYPE.b2} color={p.mu}>
              {coords}
            </Body>
          </div>
          <Mark palette={p} folio={folio} side="bottom" />
        </>
      );
    case "motivo":
      return (
        <>
          <MapField latitude={lat} longitude={lng} zoom={11} />
          <Panel bottom={0} height={384} color={p.bg} />
          <Motif name="curvas" right={M} y={M * 2} size={156} />
          <div style={{ position: "absolute", left: colX(0), top: CANVAS.height - 384 + 48, width: colW(5) }}>
            <Cluster lb={kicker} title={title} size={TYPE.d3} body={coords} p={p} />
          </div>
          <Mark palette={p} folio={folio} onPhoto side="top" />
        </>
      );
    case "doble_escala":
      return (
        <>
          <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: 774, overflow: "hidden" }}>
            <MapField latitude={lat} longitude={lng} zoom={11} />
          </div>
          <div
            style={{
              position: "absolute",
              left: colX(4),
              top: M,
              width: colW(2),
              height: 336,
              overflow: "hidden",
              border: "3px solid rgba(20,31,29,.35)",
            }}
          >
            <MapField latitude={lat} longitude={lng} zoom={5} radius={2} />
          </div>
          <div style={{ position: "absolute", left: colX(0), top: 774 + 72, width: colW(5) }}>
            <Cluster lb={kicker} title={title} size={TYPE.d4} body={coords} p={p} />
          </div>
          <Mark palette={p} folio={folio} side="bottom" />
        </>
      );
    case "lamina":
      return (
        <>
          <div style={{ position: "absolute", left: M, right: M, top: 180, height: 648, overflow: "hidden" }}>
            <MapField latitude={lat} longitude={lng} zoom={12} />
          </div>
          <div style={{ position: "absolute", left: colX(0), right: M, top: 180 + 648 + 72, display: "flex", flexDirection: "column", gap: 30 }}>
            <Phrase size={TYPE.d4} color={p.fg}>
              {title}
            </Phrase>
            <Hair color="rgba(22,29,28,.24)" />
            <DataGrid rows={copy.dataRows || []} p={p} />
          </div>
          <Mark palette={p} folio={folio} side="top" />
        </>
      );
    case "margen_campo": {
      const mapW = colX(3) - GRID.gutter;
      return (
        <>
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: mapW, overflow: "hidden" }}>
            <MapField latitude={lat} longitude={lng} zoom={11} radius={3} />
          </div>
          <div style={{ position: "absolute", left: colX(3), right: M, top: M * 2, display: "flex", flexDirection: "column", gap: 36 }}>
            <Label color={p.ac}>Territorio</Label>
            <Phrase size={TYPE.d4} color={p.fg}>
              {title}
            </Phrase>
            <Hair color="rgba(20,31,29,.26)" />
            <Body size={TYPE.b3} color={p.mu}>
              {coords}
            </Body>
            {copy.note ? (
              <Body size={TYPE.b3} color={p.mu}>
                {copy.note}
              </Body>
            ) : null}
          </div>
          <Mark palette={p} folio={folio} side="bottom" />
        </>
      );
    }
    case "asiento":
      return (
        <>
          <MapField latitude={lat} longitude={lng} zoom={11} veil="rgba(233,226,210,.62)" />
          <div style={{ position: "absolute", left: colX(0), top: M * 2, width: colW(6), display: "flex", flexDirection: "column", gap: 42 }}>
            <Label color={p.ac}>{kicker}</Label>
            <Phrase size={TYPE.d3} color={p.fg}>
              {title}
            </Phrase>
            <Hair color="rgba(22,29,28,.26)" />
            <DataGrid rows={copy.dataRows || []} p={p} />
          </div>
          <Divider name="div-montana" x={colX(0)} bottom={198} width={colW(4)} />
          <Mark palette={p} folio={folio} side="bottom" />
        </>
      );
    case "bloque_ventana":
      return (
        <>
          <div
            style={{
              position: "absolute",
              left: colX(1),
              right: -M,
              top: 216,
              height: 594,
              overflow: "hidden",
              borderTop: `6px solid ${p.ac}`,
              borderBottom: `6px solid ${p.ac}`,
            }}
          >
            <MapField latitude={lat} longitude={lng} zoom={11} />
          </div>
          <div style={{ position: "absolute", left: colX(0), right: M, top: 216 + 594 + 72 }}>
            <Cluster lb={kicker} title={title} size={TYPE.d3} body={coords} p={p} />
          </div>
          <Mark palette={p} folio={folio} side="top" />
        </>
      );
    case "duotono":
    default:
      return (
        <>
          <MapField latitude={lat} longitude={lng} zoom={11} veil="rgba(14,34,38,.45)" />
          <div style={{ position: "absolute", inset: 0, background: "#C9A85E", mixBlendMode: "color", pointerEvents: "none" }} />
          <Panel bottom={0} height={378} color={p.bg} />
          <div style={{ position: "absolute", left: colX(0), top: CANVAS.height - 378 + 51, width: colW(5) }}>
            <Cluster lb={kicker} title={title} size={TYPE.d4} body={coords} p={p} />
          </div>
          <Mark palette={p} folio={folio} onPhoto side="top" />
        </>
      );
  }
}

function Tipografica({ template, p, copy, folio }) {
  const kicker = copy.kicker;
  const title = copy.title;
  const body = copy.body;

  switch (template.variant) {
    case "monumento":
      return (
        <>
          <div style={{ position: "absolute", left: colX(0), top: M * 2, width: colW(5), display: "flex", flexDirection: "column" }}>
            <Accent color={p.ac} />
            <Label color={p.ac} style={{ paddingTop: 36 }}>
              {kicker}
            </Label>
            <Phrase size={TYPE.d2} color={p.fg} style={{ paddingTop: 36 }}>
              {title}
            </Phrase>
          </div>
          <div style={{ position: "absolute", left: colX(0), bottom: M * 2 + 24, width: colW(4) }}>
            <Body size={TYPE.b2} color={p.mu}>
              {body}
            </Body>
          </div>
          <Mark palette={p} folio={folio} side="bottom" />
        </>
      );
    case "lectura":
      return (
        <>
          <div style={{ position: "absolute", left: colX(0), top: M * 2, width: colW(5), display: "flex", flexDirection: "column", gap: 42 }}>
            <Label color={p.ac}>{kicker}</Label>
            <Phrase size={TYPE.d4} color={p.fg}>
              {title}
            </Phrase>
            <Hair color="rgba(22,29,28,.24)" />
            <Body size={TYPE.b1} color={p.mu}>
              {body}
            </Body>
          </div>
          <Mark palette={p} folio={folio} side="bottom" />
        </>
      );
    case "escalera": {
      const parts = copy.titleParts && copy.titleParts.length === 3 ? copy.titleParts : [title, "", ""];
      const step = GRID.col + GRID.gutter;
      return (
        <>
          <div style={{ position: "absolute", left: colX(0), top: M * 2, right: M }}>
            <Label color={p.ac}>{kicker}</Label>
            <div style={{ paddingTop: 42 }}>
              {parts.map((part, index) =>
                part ? (
                  <Phrase key={index} size={TYPE.d3} color={p.fg} style={{ paddingLeft: step * index }}>
                    {part}
                  </Phrase>
                ) : null
              )}
            </div>
          </div>
          <div style={{ position: "absolute", left: colX(2), bottom: M * 2 + 24, width: colW(4) }}>
            <Body size={TYPE.b2} color={p.mu}>
              {body}
            </Body>
          </div>
          <Mark palette={p} folio={folio} side="bottom" />
        </>
      );
    }
    case "capitular":
      return (
        <>
          <Motif name={copy.motif || "espiral"} x={colX(0)} y={M * 2} size={132} />
          <div style={{ position: "absolute", left: colX(0), top: M * 2 + 180, width: colW(5), display: "flex", flexDirection: "column", gap: 39 }}>
            <Label color={p.ac}>{kicker}</Label>
            <Phrase size={TYPE.d3} color={p.fg}>
              {title}
            </Phrase>
          </div>
          <div style={{ position: "absolute", left: colX(0), bottom: M * 2 + 24, width: colW(4) }}>
            <Body size={TYPE.b2} color={p.mu}>
              {body}
            </Body>
          </div>
          <Mark palette={p} folio={folio} side="bottom" />
        </>
      );
    case "contracolor": {
      const counter = PALETTES_V10[template.counterPalette] || PALETTES_V10.oro;
      const cut = 552;
      return (
        <>
          <Panel top={cut} bottom={0} color={counter.bg} />
          <div style={{ position: "absolute", left: colX(0), top: M - 18 }}>
            <Label color={p.ac}>{kicker}</Label>
          </div>
          <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 0 ${CANVAS.height - cut}px 0)` }}>
            <Phrase size={TYPE.d3} color={p.fg} style={{ position: "absolute", left: colX(0), top: 450, width: colW(5) }}>
              {title}
            </Phrase>
          </div>
          <div style={{ position: "absolute", inset: 0, clipPath: `inset(${cut}px 0 0 0)` }}>
            <Phrase size={TYPE.d3} color={counter.fg} style={{ position: "absolute", left: colX(0), top: 450, width: colW(5) }}>
              {title}
            </Phrase>
          </div>
          <div style={{ position: "absolute", left: colX(0), bottom: M * 2 + 24, width: colW(4), display: "flex", flexDirection: "column", gap: 30 }}>
            <Hair color={counter.ac} width={colW(1)} height={6} />
            <Body size={TYPE.b2} color={counter.mu}>
              {body}
            </Body>
          </div>
          <Mark palette={counter} folio={folio} side="bottom" />
        </>
      );
    }
    case "columnas": {
      const [first = body, second = ""] = copy.bodyColumns || [];
      return (
        <>
          <div style={{ position: "absolute", left: colX(0), top: M * 2, width: colW(6), display: "flex", flexDirection: "column", gap: 39 }}>
            <Label color={p.ac}>{kicker}</Label>
            <Phrase size={TYPE.d4} color={p.fg}>
              {title}
            </Phrase>
          </div>
          <Divider name="div-agua" x={colX(0)} y={630} width={colW(3)} />
          <div
            style={{
              position: "absolute",
              left: colX(0),
              top: 786,
              width: colW(6),
              display: "grid",
              gridTemplateColumns: `${colW(3)}px ${colW(3)}px`,
              gap: GRID.gutter,
            }}
          >
            <Body size={TYPE.b2} color={p.mu}>
              {first}
            </Body>
            <Body size={TYPE.b2} color={p.mu}>
              {second}
            </Body>
          </div>
          <Mark palette={p} folio={folio} side="bottom" />
        </>
      );
    }
    case "registro":
      return (
        <>
          <Ghost color={p.ac} size={192} opacity={0.38} style={{ position: "absolute", right: M, top: M * 2 }}>
            {folio}
          </Ghost>
          <div style={{ position: "absolute", left: colX(0), top: M * 2 + 30, width: colW(4), display: "flex", flexDirection: "column", gap: 39 }}>
            <Label color={p.ac}>{kicker}</Label>
            <Phrase size={TYPE.d3} color={p.fg}>
              {title}
            </Phrase>
          </div>
          <div style={{ position: "absolute", left: colX(0), bottom: M * 2 + 24, width: colW(4), display: "flex", flexDirection: "column", gap: 30 }}>
            <Hair color="rgba(22,29,28,.24)" />
            <Body size={TYPE.b2} color={p.mu}>
              {body}
            </Body>
          </div>
          <Mark palette={p} folio={folio} side="bottom" />
        </>
      );
    case "voz":
      return (
        <>
          <div style={{ position: "absolute", left: colX(0), top: M * 2 }}>
            <Label color={p.ac}>{`La voz · ${kicker}`}</Label>
          </div>
          <div style={{ position: "absolute", left: colX(1), right: M, top: M * 2 + 108, display: "flex", flexDirection: "column", gap: 42 }}>
            <Phrase size={TYPE.d3} color={p.fg}>
              {title}
            </Phrase>
            <Hair color={p.ac} width={colW(1)} height={6} />
            <Body size={TYPE.b2} color={p.mu}>
              {body}
            </Body>
          </div>
          <Divider name="div-tejido" x={colX(1)} bottom={174} width={colW(3)} />
          <Mark palette={p} folio={folio} side="bottom" />
        </>
      );
    case "lateral":
      return (
        <>
          <Motif name={copy.motif || "manos"} right={-48} y={276} size={204} opacity={0.95} />
          <div style={{ position: "absolute", left: colX(0), top: M * 2, width: colW(4), display: "flex", flexDirection: "column", gap: 39 }}>
            <Label color={p.ac}>{kicker}</Label>
            <Phrase size={TYPE.d3} color={p.fg}>
              {title}
            </Phrase>
          </div>
          <div style={{ position: "absolute", left: colX(0), bottom: M * 2 + 24, width: colW(4) }}>
            <Body size={TYPE.b2} color={p.mu}>
              {body}
            </Body>
          </div>
          <Mark palette={p} folio={folio} side="bottom" />
        </>
      );
    case "manifiesto":
    default:
      return (
        <>
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${PATTERNS}/${template.pattern || "pattern-water"}-256.png)`,
              backgroundSize: GRID.col,
              backgroundRepeat: "repeat",
              opacity: 0.07,
            }}
          />
          <div style={{ position: "absolute", left: colX(0), top: M - 18 }}>
            <Label color={p.ac}>{kicker}</Label>
          </div>
          <div style={{ position: "absolute", left: colX(0), top: M * 2 + 66, width: colW(5) }}>
            <Phrase size={TYPE.d2} color={p.fg}>
              {title}
            </Phrase>
          </div>
          <div style={{ position: "absolute", left: colX(0), bottom: M * 2 + 24, width: colW(4), display: "flex", flexDirection: "column", gap: 30 }}>
            <Accent color={p.ac} />
            <Body size={TYPE.b2} color={p.mu}>
              {body}
            </Body>
          </div>
          <Mark palette={p} folio={folio} side="bottom" />
        </>
      );
  }
}

const FOTO_POSITIONS = Object.freeze({
  secundaria: { full: "50% 44%", low: "50% 58%", mid: "50% 44%", left: "52% 40%", detail: "46% 38%" },
  climax: { full: "50% 38%", low: "50% 52%", mid: "50% 40%", left: "50% 36%", detail: "50% 58%" },
});

function Foto({ template, p, copy, photo, folio }) {
  const pos = FOTO_POSITIONS[template.screenType] || FOTO_POSITIONS.secundaria;
  const kicker = copy.kicker;
  const title = copy.title;
  const body = copy.body;

  switch (template.variant) {
    case "sangre_total":
      return (
        <>
          <Bleed src={photo} position={pos.full} />
          <Panel bottom={0} height={414} color={p.bg} />
          <div style={{ position: "absolute", left: colX(0), top: CANVAS.height - 414 + 48, width: colW(5) }}>
            <Cluster lb={kicker} title={title} size={TYPE.d4} body={body} bodySize={TYPE.b3} p={p} />
          </div>
          <Mark palette={p} folio={folio} onPhoto side="top" />
        </>
      );
    case "panel_alto":
      return (
        <>
          <Panel top={0} height={414} color={p.bg} />
          <div style={{ position: "absolute", left: 0, right: 0, top: 414, bottom: 0, overflow: "hidden" }}>
            <Bleed src={photo} position={pos.low} />
          </div>
          <div style={{ position: "absolute", left: colX(0), top: M + 42, width: colW(5) }}>
            <Cluster lb={kicker} title={title} size={TYPE.d4} body={body} bodySize={TYPE.b3} p={p} />
          </div>
          <Mark palette={p} folio={folio} onPhoto side="bottom" />
        </>
      );
    case "banda_baja":
      return (
        <>
          <Band src={photo} top={0} height={864} position={pos.mid} />
          <div style={{ position: "absolute", left: 0, right: 0, top: 864, bottom: 0, background: p.bg }} />
          <div style={{ position: "absolute", left: colX(0), top: 864 + 66, width: colW(5) }}>
            <Cluster lb={kicker} title={title} size={TYPE.d4} body={body} bodySize={TYPE.b3} p={p} />
          </div>
          <Mark palette={p} folio={folio} side="bottom" />
        </>
      );
    case "banda_alta":
      return (
        <>
          <Panel top={0} height={522} color={p.bg} />
          <Band src={photo} bottom={0} height={828} position={pos.mid} />
          <div style={{ position: "absolute", left: colX(0), top: M * 2, width: colW(5) }}>
            <Cluster lb={kicker} title={title} size={TYPE.d4} body={body} bodySize={TYPE.b3} p={p} />
          </div>
          <Mark palette={p} folio={folio} side="top" />
        </>
      );
    case "franja_169":
      return (
        <>
          <Band src={photo} top={468} height={540} position={pos.mid} />
          <div style={{ position: "absolute", left: colX(0), top: M * 2, width: colW(5) }}>
            <Label color={p.ac}>{kicker}</Label>
            <Phrase size={TYPE.d4} color={p.fg} style={{ paddingTop: 36 }}>
              {title}
            </Phrase>
          </div>
          <div style={{ position: "absolute", left: colX(0), top: 1008 + 72, width: colW(4) }}>
            <Body size={TYPE.b3} color={p.mu}>
              {body}
            </Body>
          </div>
          <Mark palette={p} folio={folio} side="bottom" />
        </>
      );
    case "lamina_sangre":
      return (
        <>
          <Band src={photo} top={120} height={630} position={pos.mid} />
          <div style={{ position: "absolute", left: colX(0), top: 120 + 630 + 72, width: colW(6), display: "flex", flexDirection: "column", gap: 33 }}>
            <Label color={p.ac}>{kicker}</Label>
            <Phrase size={TYPE.d4} color={p.fg}>
              {title}
            </Phrase>
            <Hair color="rgba(22,29,28,.24)" />
            <Body size={TYPE.b3} color={p.mu}>
              {body}
            </Body>
          </div>
          <Mark palette={p} folio={folio} side="bottom" />
        </>
      );
    case "media_pagina": {
      const photoW = colX(3) - GRID.gutter;
      return (
        <>
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: photoW, overflow: "hidden" }}>
            <Bleed src={photo} position={pos.left} />
          </div>
          <div style={{ position: "absolute", left: colX(3), right: M, top: M * 2, display: "flex", flexDirection: "column", gap: 36 }}>
            <Label color={p.ac}>{kicker}</Label>
            <Phrase size={TYPE.d4} color={p.fg}>
              {title}
            </Phrase>
            <Hair color="rgba(20,31,29,.26)" />
            <Body size={TYPE.b3} color={p.mu}>
              {body}
            </Body>
          </div>
          <Mark palette={p} folio={folio} side="bottom" />
        </>
      );
    }
    case "detalle":
      return (
        <>
          <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
            <Bleed src={photo} position={pos.detail} zoom={template.zoom || 1.7} />
          </div>
          <Panel bottom={0} height={318} color={p.bg} />
          <div style={{ position: "absolute", left: colX(0), right: M, top: CANVAS.height - 318 + 48 }}>
            <Label color={p.ac}>{kicker}</Label>
            <Phrase size={TYPE.d4} color={p.fg} style={{ paddingTop: 24 }}>
              {title}
            </Phrase>
          </div>
          <Mark palette={p} folio={folio} onPhoto side="top" />
        </>
      );
    case "columna":
      return (
        <>
          <div style={{ position: "absolute", left: 450, right: 0, top: 0, bottom: 0, overflow: "hidden" }}>
            <Bleed src={photo} position={pos.left} />
          </div>
          <Panel left={0} top={0} bottom={0} width={450} color={p.bg} />
          <div style={{ position: "absolute", left: M, top: M - 24, width: 318 }}>
            <span
              style={{
                fontFamily: BODY,
                fontSize: 19.5,
                fontWeight: 700,
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "rgba(244,239,226,.56)",
              }}
            >
              Mitos de Colombia
            </span>
          </div>
          <div style={{ position: "absolute", left: M, top: 258, width: 318, display: "flex", flexDirection: "column" }}>
            <Label color={p.ac}>{kicker}</Label>
            <Phrase size={TYPE.d4} color={p.fg} style={{ paddingTop: 27 }}>
              {title}
            </Phrase>
            <Body size={TYPE.b3} color={p.mu} style={{ paddingTop: 36 }}>
              {body}
            </Body>
          </div>
          <div style={{ position: "absolute", left: M, bottom: M - 24, fontFamily: DISPLAY, fontSize: 30, color: p.ac }}>
            {folio}
          </div>
        </>
      );
    case "duotono":
    default:
      return (
        <>
          <Duotone src={photo} position={pos.mid} />
          <Panel bottom={0} height={396} color={p.bg} />
          <div style={{ position: "absolute", left: colX(0), top: CANVAS.height - 396 + 51, width: colW(5) }}>
            <Cluster lb={kicker} title={title} size={TYPE.d4} body={body} bodySize={TYPE.b3} p={p} />
          </div>
          <Mark palette={p} folio={folio} onPhoto side="top" />
        </>
      );
  }
}

function Cierre({ template, p, copy, folio }) {
  const kicker = copy.kicker || "El relato continúa";
  const question = copy.title;
  const lee = copy.lee || "Lee la historia completa, sus fuentes y otras versiones en";
  const cta = copy.cta || "mitosdecolombia.com";

  switch (template.variant) {
    case "monumento":
      return (
        <>
          <div style={{ position: "absolute", left: colX(0), top: M * 2, width: colW(5), display: "flex", flexDirection: "column" }}>
            <Accent color={p.ac} />
            <Label color={p.ac} style={{ paddingTop: 36 }}>
              {kicker}
            </Label>
            <Phrase size={TYPE.d2} color={p.fg} style={{ paddingTop: 36 }}>
              {question}
            </Phrase>
          </div>
          <div style={{ position: "absolute", left: colX(0), bottom: 138 + 66, width: colW(4) }}>
            <Body size={TYPE.b3} color={p.mu}>
              {lee}
            </Body>
          </div>
          <CtaBand background={p.ac} color="#15160F" cta={cta} />
          <Mark palette={p} folio={folio} side="top" />
        </>
      );
    case "umbral":
      return (
        <>
          <Motif name={copy.motif || "frame-3"} x={(CANVAS.width - 396) / 2} y={180} size={396} />
          <div style={{ position: "absolute", left: colX(0), right: M, top: 618 }}>
            <Cluster lb={kicker} title={question} size={TYPE.d4} p={p} align="center" />
          </div>
          <div style={{ position: "absolute", left: colX(1), right: colX(1), bottom: M * 2 + 24, display: "flex", justifyContent: "center" }}>
            <LinkBlock p={p} lee={lee} cta={cta} align="center" />
          </div>
          <Mark palette={p} folio={folio} side="bottom" />
        </>
      );
    case "contracolor": {
      const counter = PALETTES_V10[template.counterPalette] || PALETTES_V10.oro;
      const cut = 588;
      return (
        <>
          <Panel top={cut} bottom={0} color={counter.bg} />
          <div style={{ position: "absolute", left: colX(0), top: M - 18 }}>
            <Label color={p.ac}>{kicker}</Label>
          </div>
          <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 0 ${CANVAS.height - cut}px 0)` }}>
            <Phrase size={TYPE.d3} color={p.fg} style={{ position: "absolute", left: colX(0), top: 450, width: colW(5) }}>
              {question}
            </Phrase>
          </div>
          <div style={{ position: "absolute", inset: 0, clipPath: `inset(${cut}px 0 0 0)` }}>
            <Phrase size={TYPE.d3} color={counter.fg} style={{ position: "absolute", left: colX(0), top: 450, width: colW(5) }}>
              {question}
            </Phrase>
          </div>
          <div style={{ position: "absolute", left: colX(0), bottom: M * 2 + 24, width: colW(4) }}>
            <LinkBlock p={counter} lee={lee} cta={cta} />
          </div>
          <Mark palette={counter} folio={folio} side="bottom" />
        </>
      );
    }
    case "susurro":
      return (
        <>
          <Motif name={copy.motif || "luna"} x={(CANVAS.width - 180) / 2} y={252} size={180} />
          <div style={{ position: "absolute", left: colX(1), right: colX(1), top: 552 }}>
            <Cluster lb={kicker} title={question} size={TYPE.d4} p={p} align="center" />
          </div>
          <div style={{ position: "absolute", left: colX(1), right: colX(1), bottom: M * 2 + 24, display: "flex", justifyContent: "center" }}>
            <LinkBlock p={p} lee={lee} cta={cta} align="center" />
          </div>
          <Mark palette={p} folio={folio} side="bottom" />
        </>
      );
    case "eco":
      return (
        <>
          <div style={{ position: "absolute", left: colX(0), top: M * 2, width: colW(5) }}>
            <Label color={p.ac}>{kicker}</Label>
            <Phrase size={TYPE.d3} color={p.fg} style={{ paddingTop: 42 }}>
              {question}
            </Phrase>
          </div>
          <Divider name="div-horizonte" x={colX(0)} y={804} width={colW(4)} />
          <div style={{ position: "absolute", left: colX(0), bottom: M * 2 + 24, width: colW(5) }}>
            <LinkBlock p={p} lee={lee} cta={cta} />
          </div>
          <Mark palette={p} folio={folio} side="bottom" />
        </>
      );
    case "asiento":
      return (
        <>
          <div style={{ position: "absolute", left: colX(0), top: M * 2, width: colW(6), display: "flex", flexDirection: "column", gap: 42 }}>
            <Label color={p.ac}>{kicker}</Label>
            <Phrase size={TYPE.d4} color={p.fg}>
              {question}
            </Phrase>
            <Hair color="rgba(20,31,29,.26)" />
          </div>
          <div
            style={{
              position: "absolute",
              left: colX(0),
              bottom: M * 2 + 24,
              width: colW(6),
              display: "grid",
              gridTemplateColumns: `${colW(2)}px 1fr`,
              gap: `18px ${GRID.gutter}px`,
            }}
          >
            <Label color={p.mu}>Fuentes</Label>
            <Body size={TYPE.b3} color={p.fg}>
              {copy.sources || `${copy.community || ""}`}
            </Body>
            <Label color={p.mu}>Lee más</Label>
            <Body size={TYPE.b3} color={p.fg}>
              {cta}
            </Body>
          </div>
          <Mark palette={p} folio={folio} side="top" />
        </>
      );
    case "registro":
      return (
        <>
          <Ghost color={p.ac} size={192} opacity={0.38} style={{ position: "absolute", right: M, top: M * 2 }}>
            {folio}
          </Ghost>
          <div style={{ position: "absolute", left: colX(0), top: M * 2 + 30, width: colW(4), display: "flex", flexDirection: "column", gap: 39 }}>
            <Label color={p.ac}>{kicker}</Label>
            <Phrase size={TYPE.d3} color={p.fg}>
              {question}
            </Phrase>
          </div>
          <div style={{ position: "absolute", left: colX(0), bottom: M * 2 + 24, width: colW(4), display: "flex", flexDirection: "column", gap: 30 }}>
            <Hair color="rgba(22,29,28,.24)" />
            <LinkBlock p={p} lee={lee} cta={cta} />
          </div>
          <Mark palette={p} folio={folio} side="bottom" />
        </>
      );
    case "sello": {
      const motif = copy.motif || "circulo";
      return (
        <>
          <Motif name={motif} x={(CANVAS.width - 336) / 2} y={198} size={336} />
          <div style={{ position: "absolute", left: colX(1), right: colX(1), top: 570, textAlign: "center" }}>
            <Label color={p.mu}>{`${motif.replace(/-/g, " ")} · papel recortado`}</Label>
          </div>
          <div style={{ position: "absolute", left: colX(0), right: M, top: 660 }}>
            <Phrase size={TYPE.d4} color={p.fg} style={{ textAlign: "center" }}>
              {question}
            </Phrase>
          </div>
          <div style={{ position: "absolute", left: colX(1), right: colX(1), bottom: M * 2 + 24, display: "flex", justifyContent: "center" }}>
            <LinkBlock p={p} lee={lee} cta={cta} align="center" />
          </div>
          <Mark palette={p} folio={folio} side="bottom" />
        </>
      );
    }
    case "afiche":
      return (
        <>
          <div style={{ position: "absolute", left: colX(0), top: M - 18 }}>
            <Label color={p.ac}>{kicker}</Label>
          </div>
          <div style={{ position: "absolute", left: colX(0), top: M * 2 + 42, width: colW(5) }}>
            <Phrase size={TYPE.d2} color={p.fg}>
              {question}
            </Phrase>
          </div>
          <Motif name={copy.motif || "huella"} right={M} bottom={138 + 72} size={144} opacity={0.95} />
          <CtaBand background="#2A1B12" color="#F3DDB0" cta={cta} />
        </>
      );
    case "textura":
    default:
      return (
        <>
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${PATTERNS}/${template.pattern || "pattern-constellation"}-256.png)`,
              backgroundSize: GRID.col,
              backgroundRepeat: "repeat",
              opacity: 0.07,
            }}
          />
          <div style={{ position: "absolute", left: colX(1), right: colX(1), top: 468 }}>
            <Cluster lb={kicker} title={question} size={TYPE.d4} p={p} align="center" />
          </div>
          <div
            style={{
              position: "absolute",
              left: colX(1),
              right: colX(1),
              bottom: M * 2 + 24,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 27,
            }}
          >
            <Hair color={p.ac} width={colW(1)} height={6} />
            <LinkBlock p={p} lee={lee} cta={cta} align="center" />
          </div>
          <Mark palette={p} folio={folio} side="bottom" />
        </>
      );
  }
}

// ---------------------------------------------------------------------------
// componente raíz
// ---------------------------------------------------------------------------

export function SlideV10({ templateId, copy = {}, assets = {}, meta = {} }) {
  const template = getV10Template(templateId);
  if (!template) {
    return (
      <div style={{ width: CANVAS.width, height: CANVAS.height, background: "#7F3623", color: "#FFF4E2", display: "grid", placeItems: "center", fontFamily: BODY }}>
        Plantilla desconocida: {String(templateId)}
      </div>
    );
  }
  const p = PALETTES_V10[template.palette] || PALETTES_V10.laguna;
  const folio = String(meta.sequence || 1).padStart(2, "0");
  const photo =
    template.screenType === "climax"
      ? assets.tertiary || assets.third
      : template.screenType === "secundaria"
        ? assets.secondary || assets.landscape
        : assets.cover || assets.portrait;

  let content = null;
  if (template.screenType === "portada") content = <Portada template={template} p={p} copy={copy} assets={{ portrait: photo }} folio={folio} />;
  else if (template.screenType === "territorio") content = <Territorio template={template} p={p} copy={copy} folio={folio} />;
  else if (template.screenType === "tipografica") content = <Tipografica template={template} p={p} copy={copy} folio={folio} />;
  else if (template.screenType === "cierre") content = <Cierre template={template} p={p} copy={copy} folio={folio} />;
  else content = <Foto template={template} p={p} copy={copy} photo={photo} folio={folio} />;

  return (
    <article
      data-v10-slide={template.id}
      data-instagram-template={template.id}
      data-screen-type={template.screenType}
      data-mode={template.mode}
      style={{
        position: "relative",
        width: CANVAS.width,
        height: CANVAS.height,
        overflow: "hidden",
        background: p.bg,
        color: p.fg,
        fontFamily: BODY,
        WebkitFontSmoothing: "antialiased",
      }}
    >
      {content}
    </article>
  );
}
