import Image from "next/image";
import { INSTAGRAM_EDITORIAL_PALETTES } from "../../lib/instagram-editorial-library.js";
import styles from "./InstagramTemplateCanvas.module.css";
import v9Styles from "./InstagramTemplateCanvasV9.module.css";
import { MotifMask } from "../atoms/Motif";

const ASSETS = Object.freeze({
  cover: "/design-system/instagram/bachue-vertical.jpg",
  secondary: "/design-system/instagram/bachue-horizontal.jpg",
  tertiary: "/design-system/instagram/bachue-tertiary.png",
});

const STORY_STRIP_INDEXES = Object.freeze([0, 1, 2]);
const MAP_TILE_SIZE_CQW = (256 / 1080) * 100;

const DEFAULT_META_BY_FAMILY = Object.freeze({
  cover: { sequence: 1, total: 12 },
  map: { sequence: 3, total: 12 },
  secondary: { sequence: 5, total: 12 },
  tertiary: { sequence: 10, total: 12 },
  typographic: { sequence: 7, total: 12 },
});

const SAMPLE_COPY = Object.freeze({
  cover: {
    title: "Bachué",
    kicker: "Cultura muisca",
  },
  typographic: {
    title: "Una casa se volvió un pueblo.",
    kicker: "El origen",
    body: "Los hijos crecieron y formaron nuevas familias. Cada valle sumó un fogón, una casa y un nombre hasta convertir el origen en comunidad.",
    shortTitle: "Pueblo",
    words: ["Una casa", "se volvió", "un pueblo"],
    keywords: ["Familia", "Fogón", "Nombre"],
    call: "¿De dónde venimos?",
    response: "Del agua.",
  },
  secondary: {
    title: "Primero apareció una mano.",
    kicker: "Laguna de Iguaque",
    body: "Después, Bachué salió del agua con un niño sujeto a sus dedos.",
  },
  tertiary: {
    title: "Volvieron al agua.",
    kicker: "El regreso",
    body: "La pareja entró de nuevo a la laguna y se transformó.",
    shortTitle: "Regreso",
  },
  map: {
    title: "Laguna de Iguaque",
    kicker: "Boyacá · Región Andina",
    body: "5.6906° N · 73.4623° O",
    latitude: 5.6906,
    longitude: -73.4623,
    originLatitude: 4.711,
    originLongitude: -74.0721,
    country: "Colombia",
  },
});

const TYPOGRAPHIC_SAMPLE_COPY = Object.freeze({
  short: SAMPLE_COPY.typographic,
  medium: {
    title: "Bachué recorrió los valles para enseñar a vivir en comunidad.",
    kicker: "La enseñanza",
    body: "En cada lugar dejó una forma de convivir: cuidar el agua que sostenía la vida, respetar los límites del territorio, resolver las disputas sin destruir la casa vecina y transmitir esas obligaciones a las familias que seguían creciendo.",
    shortTitle: "Convivir",
    words: ["Cuidar", "Compartir", "Convivir"],
    keywords: ["Agua", "Límites", "Familias"],
    call: "¿Qué sostiene un pueblo?",
    response: "El cuidado.",
  },
  narrative: {
    title: "Cuando el pueblo ya ocupaba los valles, comenzó otra tarea.",
    kicker: "La vida en común",
    body: "El relato no termina con el nacimiento de una comunidad. Bachué recorre el territorio y convierte el origen en enseñanza: vivir juntos implica reconocer límites, compartir el agua, resolver las disputas y cuidar aquello que permite que cada nueva familia encuentre un lugar. Esa responsabilidad no pertenece sólo a los primeros habitantes; pasa de una generación a la siguiente. El origen se vuelve entonces una práctica diaria, sostenida por la memoria y por el territorio compartido.",
    shortTitle: "Comunidad",
    words: ["Origen", "Enseñanza", "Territorio"],
    keywords: ["Límites", "Agua", "Cuidado"],
    call: "¿Qué viene después del origen?",
    response: "Aprender a convivir.",
  },
});

function paletteStyle(paletteId) {
  const palette =
    INSTAGRAM_EDITORIAL_PALETTES[paletteId] ||
    INSTAGRAM_EDITORIAL_PALETTES.laguna;
  return {
    "--ig-bg": palette.background,
    "--ig-fg": palette.foreground,
    "--ig-accent": palette.accent,
    "--ig-muted": palette.muted,
    "--ig-paper": palette.paper,
  };
}

function formatFolio(value) {
  return String(value || 1).padStart(2, "0");
}

function titleLength(value) {
  const length = String(value || "").trim().length;
  if (length > 52) return "long";
  if (length > 38) return "medium";
  return "short";
}

function splitEditorialBody(body, density) {
  const value = String(body || "").trim();
  if (density !== "narrative") {
    return { lead: "", rest: value };
  }
  const sentenceEnd = value.search(/[.!?](?:\s|$)/);
  if (sentenceEnd < 0 || sentenceEnd > 150) {
    return { lead: "", rest: value };
  }
  return {
    lead: value.slice(0, sentenceEnd + 1),
    rest: value.slice(sentenceEnd + 1).trim(),
  };
}

function OriginSeal() {
  return (
    <svg
      aria-hidden="true"
      className={styles.originSeal}
      data-editorial-slot="chrome-seal"
      viewBox="0 0 64 64"
    >
      <circle cx="32" cy="32" r="27" />
      <path d="M14 30c6-7 12-7 18 0s12 7 18 0" />
      <path d="M16 38c5-5 10-5 16 0s11 5 16 0" />
      <path d="M25 23c2-4 5-6 7-6s5 2 7 6" />
      <path d="M32 17v27" />
    </svg>
  );
}

function EditorialChrome({ meta }) {
  const sequence = formatFolio(meta.sequence);
  const territory = [meta.community, meta.region].filter(Boolean).join(" · ");

  return (
    <div
      aria-hidden="true"
      className={`${styles.brandChrome} ${v9Styles.chrome}`}
    >
      <header className={v9Styles.chromeHeader}>
        <span data-editorial-slot="chrome-publication">Mitos de Colombia</span>
        <small data-editorial-slot="chrome-territory">{territory}</small>
      </header>
      <div className={v9Styles.chromeSeal}>
        <OriginSeal />
      </div>
      <footer className={v9Styles.chromeFooter}>
        <i />
        <span data-editorial-slot="chrome-folio">{sequence}</span>
        <i />
      </footer>
    </div>
  );
}

function templateClassName(template, ...classNames) {
  return [
    styles.canvas,
    v9Styles.system,
    ...classNames,
    styles[template.layout],
    styles[`brand_${template.brandMode}`],
  ]
    .filter(Boolean)
    .join(" ");
}

function CoverCanvas({ template, copy, meta, assets }) {
  const imageSource = assets?.cover || ASSETS.cover;
  return (
    <article
      className={templateClassName(template, styles.cover)}
      data-brand-mode={template.brandMode}
      data-family={template.family}
      data-instagram-template={template.id}
      data-layout={template.layout}
      data-revision={template.designRevision}
      data-sequence={meta.sequence}
      data-source-quality="native"
      style={paletteStyle(template.palette)}
    >
      <div className={styles.coverMedia} data-editorial-slot="media-primary">
        <Image
          alt={copy.altText || `${meta.mythTitle}, imagen vertical del mito.`}
          className={styles.coverImage}
          fill
          priority
          sizes="1080px"
          src={imageSource}
          unoptimized
        />
      </div>
      <div className={styles.coverShade} data-editorial-slot="media-shade" />
      <div className={styles.coverFrame} data-editorial-slot="media-frame" />
      <p
        className={styles.coverCommunity}
        data-editorial-slot="content-kicker"
      >
        {template.shortKicker || copy.kicker}
      </p>
      <h2 className={styles.coverTitle} data-editorial-slot="content-title">
        {copy.title}
      </h2>
      <span aria-hidden="true" className={styles.surfaceTexture} />
      <EditorialChrome meta={meta} />
    </article>
  );
}

function TypographicCanvas({
  template,
  copy,
  meta,
  graphicMotif,
  graphicDecoration,
}) {
  const body = splitEditorialBody(copy.body, template.textDensity);
  return (
    <article
      className={templateClassName(
        template,
        styles.typographic,
        styles[`density_${template.textDensity}`]
      )}
      data-brand-mode={template.brandMode}
      data-density={template.textDensity}
      data-family={template.family}
      data-instagram-template={template.id}
      data-layout={template.layout}
      data-has-cta={copy.cta ? "true" : "false"}
      data-revision={template.designRevision}
      data-sequence={meta.sequence}
      style={paletteStyle(template.palette)}
    >
      <div
        aria-hidden="true"
        className={styles.typeDevice}
        data-editorial-slot="decorative-device"
      />
      <p className={styles.typeKicker} data-editorial-slot="content-kicker">
        {copy.kicker}
      </p>
      <h2 className={styles.typeTitle} data-editorial-slot="content-title">
        {copy.title}
      </h2>
      {copy.body ? (
        <p className={styles.typeBody} data-editorial-slot="content-body">
          {body.lead ? (
            <span className={styles.typeBodyLead}>{body.lead}</span>
          ) : null}
          <span className={styles.typeBodyRest}>{body.rest}</span>
        </p>
      ) : null}
      {copy.cta ? (
        <aside
          className={v9Styles.closingCta}
          data-editorial-slot="closing-cta"
        >
          <span className={v9Styles.closingCtaEyebrow}>
            {copy.cta.eyebrow}
          </span>
          <strong className={v9Styles.closingCtaDomain}>
            {copy.cta.label}
          </strong>
          <p className={v9Styles.closingCtaBody}>{copy.cta.body}</p>
        </aside>
      ) : null}
      {template.designRevision === "v9" && graphicMotif ? (
        <MotifMask
          className={v9Styles.graphicMotif}
          data-editorial-slot="graphic-motif"
          data-motif-group={graphicMotif.group}
          data-motif-id={graphicMotif.id}
          data-motif-kind={graphicMotif.kind}
          src={graphicMotif.src}
        />
      ) : null}
      {template.designRevision === "v9" &&
      graphicDecoration &&
      !graphicMotif ? (
        <MotifMask
          className={v9Styles.graphicDecoration}
          data-decoration-group={graphicDecoration.group}
          data-decoration-id={graphicDecoration.id}
          data-decoration-kind={graphicDecoration.kind}
          data-editorial-slot="graphic-decoration"
          src={graphicDecoration.src}
          style={
            graphicDecoration.kind === "pattern"
              ? {
                  maskRepeat: "repeat",
                  maskSize: "18cqw",
                  WebkitMaskRepeat: "repeat",
                  WebkitMaskSize: "18cqw",
                }
              : undefined
          }
        />
      ) : null}
      <p
        aria-hidden="true"
        className={styles.typeInitial}
        data-editorial-slot="decorative-initial"
      >
        {copy.title.slice(0, 1)}
      </p>
      <p
        className={styles.typeShortTitle}
        data-editorial-slot="content-short-title"
      >
        {copy.shortTitle}
      </p>
      <div
        className={styles.typeWordStack}
        data-editorial-group="word-stack"
      >
        {copy.words.map((word, index) => (
          <span data-editorial-slot="content-word" key={`${word}-${index}`}>
            {word}
          </span>
        ))}
      </div>
      <div
        className={styles.typeKeywords}
        data-editorial-group="keywords"
      >
        {copy.keywords.map((word, index) => (
          <span data-editorial-slot="content-keyword" key={`${word}-${index}`}>
            {word}
          </span>
        ))}
      </div>
      <div
        className={styles.typeDialogue}
        data-editorial-slot="content-dialogue"
      >
        <span>{copy.call}</span>
        <strong>{copy.response}</strong>
      </div>
      <span
        aria-hidden="true"
        className={styles.typeNumber}
        data-editorial-slot="decorative-number"
      >
        01
      </span>
      <span aria-hidden="true" className={styles.surfaceTexture} />
      <EditorialChrome meta={meta} />
    </article>
  );
}

function StoryImageCanvas({ template, copy, meta, assets }) {
  const asset = assets?.[template.family] || ASSETS[template.family];
  const isV9 = template.designRevision === "v9";
  const alt =
    copy.altText ||
    (template.family === "secondary"
      ? `Segunda escena canónica de ${meta.mythTitle}.`
      : `Tercera escena creada para ${meta.mythTitle}.`);
  return (
    <article
      className={templateClassName(
        template,
        styles.storyImage,
        styles[template.family]
      )}
      data-brand-mode={template.brandMode}
      data-family={template.family}
      data-instagram-template={template.id}
      data-layout={template.layout}
      data-revision={template.designRevision}
      data-sequence={meta.sequence}
      data-source-quality="native"
      data-title-length={titleLength(copy.title)}
      style={paletteStyle(template.palette)}
    >
      <div className={styles.storyMedia} data-editorial-slot="media-primary">
        <Image
          alt={alt}
          className={styles.storyImageAsset}
          fill
          priority
          sizes="1080px"
          src={asset}
          unoptimized
        />
      </div>
      {!isV9 ? (
        <>
          <div className={styles.storyDetail} data-editorial-slot="media-detail">
            <Image
              alt=""
              aria-hidden="true"
              className={styles.storyImageAsset}
              fill
              sizes="1080px"
              src={asset}
              unoptimized
            />
          </div>
          <div className={styles.storyStrips} data-editorial-slot="media-strips">
            {STORY_STRIP_INDEXES.map((index) => (
              <div key={index}>
                <Image
                  alt=""
                  aria-hidden="true"
                  className={styles.storyImageAsset}
                  fill
                  sizes="1080px"
                  src={asset}
                  unoptimized
                />
              </div>
            ))}
          </div>
          <div
            aria-hidden="true"
            className={styles.storyShade}
            data-editorial-slot="media-shade"
          />
          <div
            aria-hidden="true"
            className={styles.storyFrame}
            data-editorial-slot="media-frame"
          />
        </>
      ) : null}
      <p className={styles.storyKicker} data-editorial-slot="content-kicker">
        {copy.kicker}
      </p>
      <h2 className={styles.storyTitle} data-editorial-slot="content-title">
        {copy.title}
      </h2>
      <p className={styles.storyBody} data-editorial-slot="content-body">
        {copy.body}
      </p>
      <span
        className={styles.storyWord}
        data-editorial-slot="content-display-word"
      >
        {copy.shortTitle || copy.title}
      </span>
      <span
        className={styles.storyIndex}
        data-editorial-slot="decorative-index"
      >
        02
      </span>
      <span aria-hidden="true" className={styles.surfaceTexture} />
      <EditorialChrome meta={meta} />
    </article>
  );
}

function mapTilePosition(latitude, longitude, zoom) {
  const latitudeRadians =
    (Math.max(-85.0511, Math.min(85.0511, latitude)) * Math.PI) / 180;
  const scale = 2 ** zoom;
  const x = ((longitude + 180) / 360) * scale;
  const y =
    ((1 -
      Math.log(Math.tan(latitudeRadians) + 1 / Math.cos(latitudeRadians)) /
        Math.PI) /
      2) *
    scale;

  return { x, y, scale };
}

function MapTiles({
  latitude,
  longitude,
  zoom,
  topographic = false,
  tileRadius = 2,
  className = "",
}) {
  const { x, y, scale } = mapTilePosition(latitude, longitude, zoom);
  const centerX = Math.floor(x);
  const centerY = Math.floor(y);
  const offsetX = x - centerX;
  const offsetY = y - centerY;
  const tiles = [];

  for (let row = -tileRadius; row <= tileRadius; row += 1) {
    for (let column = -tileRadius; column <= tileRadius; column += 1) {
      const tileX = (centerX + column + scale) % scale;
      const tileY = Math.max(0, Math.min(scale - 1, centerY + row));
      const tileUrl = topographic
        ? `https://a.tile.opentopomap.org/${zoom}/${tileX}/${tileY}.png`
        : `https://tile.openstreetmap.org/${zoom}/${tileX}/${tileY}.png`;
      tiles.push(
        <span
          aria-hidden="true"
          className={styles.mapTile}
          key={`${zoom}-${tileX}-${tileY}`}
          style={{ backgroundImage: `url("${tileUrl}")` }}
        />
      );
    }
  }

  const tileCount = tileRadius * 2 + 1;

  return (
    <div className={`${styles.mapTiles} ${className}`}>
      <div
        className={styles.mapTileGrid}
        style={{
          "--map-tile-count": tileCount,
          "--map-tile-size": `${MAP_TILE_SIZE_CQW}cqw`,
          left: `calc(50% - ${(tileRadius + offsetX) * MAP_TILE_SIZE_CQW}cqw)`,
          top: `calc(50% - ${(tileRadius + offsetY) * MAP_TILE_SIZE_CQW}cqw)`,
        }}
      >
        {tiles}
      </div>
    </div>
  );
}

function MapCanvas({ template, copy, meta }) {
  const isLocator = template.layout === "map_locator";
  const isTopographic = template.layout === "map_topographic";
  const usesFocusedV9Map = isLocator && template.designRevision === "v9";
  const detailZoom = template.layout === "map_coordinates" ? 12 : 11;

  return (
    <article
      className={templateClassName(template, styles.map)}
      data-brand-mode={template.brandMode}
      data-family={template.family}
      data-instagram-template={template.id}
      data-layout={template.layout}
      data-map-provider={isTopographic ? "opentopomap" : "openstreetmap"}
      data-revision={template.designRevision}
      data-sequence={meta.sequence}
      style={paletteStyle(template.palette)}
    >
      <div className={styles.mapMain} data-editorial-slot="map-primary">
        <MapTiles
          latitude={isLocator && !usesFocusedV9Map ? 4.4 : copy.latitude}
          longitude={isLocator && !usesFocusedV9Map ? -73.8 : copy.longitude}
          tileRadius={
            (isLocator && !usesFocusedV9Map) || template.layout === "map_route"
              ? 3
              : 2
          }
          topographic={isTopographic}
          zoom={isLocator ? (usesFocusedV9Map ? 13 : 5) : detailZoom}
        />
      </div>
      {isLocator ? (
        <div className={styles.mapInset} data-editorial-slot="map-inset">
          <MapTiles
            latitude={copy.latitude}
            longitude={copy.longitude}
            tileRadius={2}
            zoom={11}
          />
          <span className={styles.mapInsetMarker} />
        </div>
      ) : null}
      <div
        aria-hidden="true"
        className={styles.mapTint}
        data-editorial-slot="map-tint"
      />
      <div
        aria-hidden="true"
        className={styles.mapGrid}
        data-editorial-slot="map-grid"
      />
      <span
        aria-hidden="true"
        className={styles.mapMarker}
        data-editorial-slot="map-marker"
      >
        <i />
      </span>
      {template.layout === "map_route" ? (
        <svg
          aria-hidden="true"
          className={styles.mapRouteLine}
          viewBox="0 0 100 125"
        >
          <path d="M20 101 C29 90 37 92 45 75 S61 60 72 49 S81 37 83 24" />
          <circle cx="20" cy="101" r="1.6" />
          <circle cx="83" cy="24" r="2.2" />
        </svg>
      ) : null}
      <p className={styles.mapKicker} data-editorial-slot="content-kicker">
        {copy.kicker}
      </p>
      <h2 className={styles.mapTitle} data-editorial-slot="content-title">
        {copy.title}
      </h2>
      <p
        className={styles.mapCoordinates}
        data-editorial-slot="content-coordinates"
      >
        {copy.body}
      </p>
      <span className={styles.mapCountry} data-editorial-slot="content-country">
        {copy.country}
      </span>
      <span className={styles.mapLegend} data-editorial-slot="content-legend">
        {template.layout === "map_route"
          ? `Bogotá → ${copy.title}`
          : "Lugar de origen"}
      </span>
      <small
        className={styles.mapAttribution}
        data-editorial-slot="utility-attribution"
      >
        {isTopographic
          ? "© OpenStreetMap · OpenTopoMap"
          : "© OpenStreetMap"}
      </small>
      <span aria-hidden="true" className={styles.surfaceTexture} />
      <EditorialChrome meta={meta} />
    </article>
  );
}

function PlaceholderCanvas({ template, copy }) {
  return (
    <article
      className={`${styles.canvas} ${styles.placeholder}`}
      data-instagram-template={template.id}
      style={paletteStyle(template.palette)}
    >
      <span>{template.family}</span>
      <h2>{copy.title}</h2>
      <p>{template.name}</p>
    </article>
  );
}

export function InstagramTemplateCanvas({
  template,
  copy,
  meta,
  assets,
  graphicMotif,
  graphicDecoration,
}) {
  const defaultCopy =
    template.family === "typographic"
      ? TYPOGRAPHIC_SAMPLE_COPY[template.textDensity]
      : SAMPLE_COPY[template.family];
  const resolvedCopy = {
    ...defaultCopy,
    ...copy,
  };
  const resolvedMeta = {
    mythTitle: "Bachué",
    community: "Muiscas",
    region: "Región Andina",
    role: template.role,
    ...DEFAULT_META_BY_FAMILY[template.family],
    ...meta,
  };
  if (template.family === "cover") {
    return (
      <CoverCanvas
        assets={assets}
        copy={resolvedCopy}
        meta={resolvedMeta}
        template={template}
      />
    );
  }
  if (template.family === "typographic") {
    return (
      <TypographicCanvas
        copy={resolvedCopy}
        graphicDecoration={graphicDecoration}
        graphicMotif={graphicMotif}
        meta={resolvedMeta}
        template={template}
      />
    );
  }
  if (template.family === "secondary" || template.family === "tertiary") {
    return (
      <StoryImageCanvas
        assets={assets}
        copy={resolvedCopy}
        meta={resolvedMeta}
        template={template}
      />
    );
  }
  if (template.family === "map") {
    return (
      <MapCanvas copy={resolvedCopy} meta={resolvedMeta} template={template} />
    );
  }
  return <PlaceholderCanvas copy={resolvedCopy} template={template} />;
}

export { SAMPLE_COPY };
