import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import sharp from "sharp";
import {
  INSTAGRAM_CANVAS,
  PALETTES,
  getTemplate,
} from "./lib/templates.mjs";

function arg(name, fallback) {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : fallback;
}

function xml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function words(text) {
  return String(text || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

function wrap(text, maxChars) {
  const lines = [];
  let current = "";
  for (const word of words(text)) {
    if (!current) {
      current = word;
      continue;
    }
    if (`${current} ${word}`.length <= maxChars) {
      current += ` ${word}`;
    } else {
      lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function textLines({
  text,
  x,
  y,
  size,
  color,
  maxChars,
  lineHeight = 1.12,
  weight = 400,
  family = "Arial, sans-serif",
  anchor = "start",
  italic = false,
  maxLines = 12,
}) {
  const lines = wrap(text, maxChars).slice(0, maxLines);
  return `<text x="${x}" y="${y}" text-anchor="${anchor}" font-family="${family}" font-size="${size}" font-weight="${weight}" ${
    italic ? 'font-style="italic"' : ""
  } fill="${color}">${lines
    .map(
      (line, index) =>
        `<tspan x="${x}" dy="${
          index === 0 ? 0 : Math.round(size * lineHeight)
        }">${xml(line)}</tspan>`
    )
    .join("")}</text>`;
}

function motifSvg(motif, palette) {
  const stroke = palette.accent;
  if (motif === "double_curve" || motif === "ripples") {
    return `<g fill="${stroke}" opacity=".34">
      <rect x="0" y="1080" width="290" height="16"/>
      <rect x="180" y="1120" width="520" height="10"/>
      <rect x="620" y="1060" width="460" height="22"/>
    </g>`;
  }
  if (motif === "cut_blocks") {
    return `<g opacity=".18">
      <rect x="940" y="0" width="140" height="250" fill="${palette.accent}"/>
      <rect x="0" y="1180" width="260" height="170" fill="${palette.secondary}"/>
    </g>`;
  }
  if (motif === "contours" || motif === "field_grid") {
    return `<g fill="none" stroke="${palette.secondary}" stroke-width="2" opacity=".32">
      <path d="M760 0 H1040 V120 H860 V250 H1080"/>
      <path d="M820 0 V70 H990 V190 H910 V330 H1080"/>
    </g>`;
  }
  if (motif === "orbit" || motif === "moon") {
    return `<g fill="none" stroke="${stroke}" stroke-width="2" opacity=".48">
      <circle cx="910" cy="170" r="82"/><circle cx="910" cy="170" r="112"/>
    </g>`;
  }
  if (motif === "pulse" || motif === "sound_lines") {
    return `<path d="M0 1090 H220 L260 1010 L310 1180 L370 1060 L430 1090 H1080" fill="none" stroke="${stroke}" stroke-width="3" opacity=".5"/>`;
  }
  if (motif === "layers" || motif === "horizon" || motif === "vertical_path") {
    return `<g opacity=".25">
      <path d="M0 1220 L220 1080 L390 1180 L610 1010 L810 1130 L1080 970 V1350 H0 Z" fill="${palette.secondary}"/>
      <path d="M0 1280 L260 1160 L470 1250 L700 1120 L900 1210 L1080 1100 V1350 H0 Z" fill="${stroke}"/>
    </g>`;
  }
  return `<g stroke="${stroke}" stroke-width="2" opacity=".35">
    <path d="M90 90 h120"/><path d="M90 90 v120"/>
    <path d="M990 1260 h-120"/><path d="M990 1260 v-120"/>
  </g>`;
}

function footerSvg({ myth, slide, total, palette }) {
  return `<g font-family="Arial, sans-serif" fill="${palette.ink}">
    <text x="72" y="1290" font-size="18" font-weight="700" letter-spacing="2.4">MITOS DE COLOMBIA</text>
    <text x="1008" y="1290" text-anchor="end" font-size="18">${String(
      slide.sequence
    ).padStart(2, "0")} / ${String(total).padStart(2, "0")}</text>
    <text x="72" y="1258" font-size="14" opacity=".68">${xml(myth.title)} · ${xml(
      myth.community || myth.region
    )}</text>
  </g>`;
}

function baseSvg({
  palette,
  template,
  myth,
  slide,
  total,
  extra = "",
  transparent = false,
  footerInk,
}) {
  const footerPalette = footerInk ? { ...palette, ink: footerInk } : palette;
  return Buffer.from(`<svg width="1080" height="1350" xmlns="http://www.w3.org/2000/svg">
    ${transparent ? "" : `<rect width="1080" height="1350" fill="${palette.background}"/>`}
    <filter id="paper"><feTurbulence type="fractalNoise" baseFrequency=".78" numOctaves="2" seed="7"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 .045 0"/></filter>
    <rect width="1080" height="1350" filter="url(#paper)" opacity=".42"/>
    ${motifSvg(template.motif, palette)}
    ${extra}
    ${footerSvg({ myth, slide, total, palette: footerPalette })}
  </svg>`);
}

function positionFromFocus(focus) {
  if (focus === "top") return "top";
  if (focus === "bottom") return "bottom";
  if (focus === "attention") return sharp.strategy.attention;
  return "centre";
}

async function cropImage(bytes, width, height, focus) {
  return sharp(bytes)
    .resize(width, height, {
      fit: "cover",
      position: positionFromFocus(focus),
    })
    .jpeg({ quality: 92, chromaSubsampling: "4:4:4" })
    .toBuffer();
}

async function roundedImage(bytes, width, height, focus, radius = 34) {
  const image = await cropImage(bytes, width, height, focus);
  const mask = Buffer.from(
    `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg"><rect width="${width}" height="${height}" rx="${radius}" fill="#fff"/></svg>`
  );
  return sharp(image)
    .composite([{ input: mask, blend: "dest-in" }])
    .png()
    .toBuffer();
}

async function circleImage(bytes, diameter, focus) {
  const image = await cropImage(bytes, diameter, diameter, focus);
  const mask = Buffer.from(
    `<svg width="${diameter}" height="${diameter}" xmlns="http://www.w3.org/2000/svg"><circle cx="${
      diameter / 2
    }" cy="${diameter / 2}" r="${diameter / 2}" fill="#fff"/></svg>`
  );
  return sharp(image)
    .composite([{ input: mask, blend: "dest-in" }])
    .png()
    .toBuffer();
}

async function archImage(bytes, width, height, focus) {
  const image = await cropImage(bytes, width, height, focus);
  const radius = Math.round(width / 2);
  const mask = Buffer.from(
    `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg"><path d="M0 ${radius} A${radius} ${radius} 0 0 1 ${width} ${radius} V${height} H0 Z" fill="#fff"/></svg>`
  );
  return sharp(image)
    .composite([{ input: mask, blend: "dest-in" }])
    .png()
    .toBuffer();
}

function imageCopySvg({ slide, palette, mode = "light", cover = false }) {
  const ink = mode === "dark" ? "#FFF8E8" : palette.ink;
  const headline = slide.headline || slide.image_overlay || "";
  const body = slide.body || slide.image_overlay || "";
  const headlineSize = cover ? 94 : 58;
  return `${textLines({
    text: headline,
    x: 72,
    y: cover ? 940 : 1035,
    size: headlineSize,
    color: ink,
    maxChars: cover ? 18 : 28,
    lineHeight: 1.02,
    weight: 700,
    family: "Georgia, serif",
    maxLines: 3,
  })}${textLines({
    text: body,
    x: 72,
    y: cover ? 1175 : 1170,
    size: 26,
    color: ink,
    maxChars: 56,
    lineHeight: 1.28,
    family: "Arial, sans-serif",
    maxLines: 4,
  })}`;
}

async function renderImageSlide({
  bytes,
  slide,
  layout,
  palette,
  template,
  myth,
  total,
}) {
  const cover = slide.sequence === 1;
  const overlays = [];
  let extra = "";

  if (layout === "cover_identity") {
    overlays.push({
      input: await cropImage(bytes, 1080, 1350, slide.crop_focus),
      left: 0,
      top: 0,
    });
    extra = `<rect x="0" y="0" width="430" height="1350" fill="#102E35" opacity=".96"/>
      <rect x="0" y="0" width="430" height="34" fill="${palette.accent}"/>
      <text x="64" y="105" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="17" letter-spacing="4" fill="#FFF8E8">MITO DE ORIGEN · 01</text>
      ${textLines({ text: myth.title.toUpperCase(), x: 52, y: 300, size: 126, color: "#FFF8E8", maxChars: 8, lineHeight: .86, weight: 700, family: "Bodoni 72, Didot, Georgia, serif", maxLines: 3 })}
      <rect x="52" y="445" width="220" height="18" fill="${palette.accent}"/>
      ${textLines({ text: slide.headline, x: 58, y: 610, size: 46, color: "#FFF8E8", maxChars: 15, lineHeight: 1.02, weight: 700, family: "Bodoni 72, Didot, Georgia, serif", maxLines: 5 })}
      ${textLines({ text: slide.body, x: 60, y: 970, size: 23, color: "#FFF8E8", maxChars: 28, lineHeight: 1.3, family: "Avenir Next, Helvetica Neue, Arial, sans-serif", maxLines: 6 })}
      <rect x="370" y="1080" width="60" height="160" fill="${palette.accent}"/>`;
  } else if (layout === "image_editorial_block") {
    overlays.push({
      input: await cropImage(bytes, 1080, 1350, slide.crop_focus),
      left: 0,
      top: 0,
    });
    extra = `<rect x="0" y="850" width="870" height="390" fill="${palette.paper}" opacity=".97"/>
      <rect x="0" y="850" width="30" height="390" fill="${palette.accent}"/>
      <rect x="795" y="88" width="285" height="58" fill="${palette.background}" opacity=".95"/>
      <text x="822" y="125" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="17" letter-spacing="3" fill="${palette.ink}">APARICIÓN · ${String(slide.sequence).padStart(2, "0")}</text>
      ${textLines({ text: slide.headline, x: 74, y: 965, size: 72, color: "#172B2D", maxChars: 22, lineHeight: .98, weight: 700, family: "Bodoni 72, Didot, Georgia, serif", maxLines: 3 })}
      ${textLines({ text: slide.body, x: 74, y: 1155, size: 25, color: "#172B2D", maxChars: 54, lineHeight: 1.25, family: "Avenir Next, Helvetica Neue, Arial, sans-serif", maxLines: 3 })}`;
  } else if (layout === "image_climax_clean") {
    overlays.push({
      input: await cropImage(bytes, 1080, 1350, slide.crop_focus),
      left: 0,
      top: 0,
    });
    extra = `<rect x="500" y="70" width="520" height="300" fill="#102E35" opacity=".94"/>
      <text x="540" y="122" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="16" letter-spacing="4" fill="${palette.accent}">EL REGRESO</text>
      ${textLines({ text: slide.headline, x: 540, y: 205, size: 58, color: "#FFF8E8", maxChars: 19, lineHeight: .98, weight: 700, family: "Bodoni 72, Didot, Georgia, serif", maxLines: 3 })}
      <rect x="0" y="1070" width="760" height="190" fill="#102E35" opacity=".92"/>
      ${textLines({ text: slide.body, x: 70, y: 1140, size: 25, color: "#FFF8E8", maxChars: 56, lineHeight: 1.27, family: "Avenir Next, Helvetica Neue, Arial, sans-serif", maxLines: 3 })}`;
  } else if (layout === "image_full") {
    overlays.push({
      input: await cropImage(bytes, 1080, 1350, slide.crop_focus),
      left: 0,
      top: 0,
    });
    extra = `<defs><linearGradient id="shade" x1="0" y1="0" x2="0" y2="1"><stop offset=".35" stop-color="#071515" stop-opacity="0"/><stop offset="1" stop-color="#071515" stop-opacity=".88"/></linearGradient></defs><rect width="1080" height="1350" fill="url(#shade)"/>${imageCopySvg(
      { slide, palette, mode: "dark", cover }
    )}`;
  } else if (layout === "image_split") {
    overlays.push({
      input: await cropImage(bytes, 610, 1350, slide.crop_focus),
      left: 0,
      top: 0,
    });
    extra = `<rect x="610" width="470" height="1350" fill="${palette.background}"/>
      ${textLines({ text: slide.headline, x: 665, y: 260, size: 60, color: palette.ink, maxChars: 15, lineHeight: 1.04, weight: 700, family: "Georgia, serif", maxLines: 5 })}
      ${textLines({ text: slide.body, x: 665, y: 650, size: 25, color: palette.ink, maxChars: 27, lineHeight: 1.34, maxLines: 9 })}`;
  } else if (layout === "image_horizon" || layout === "image_strip") {
    const top = layout === "image_strip" ? 330 : 0;
    const height = layout === "image_strip" ? 650 : 760;
    overlays.push({
      input: await cropImage(bytes, 1080, height, slide.crop_focus),
      left: 0,
      top,
    });
    extra =
      layout === "image_strip"
        ? `${textLines({ text: slide.headline, x: 72, y: 185, size: 58, color: palette.ink, maxChars: 28, weight: 700, family: "Georgia, serif", maxLines: 2 })}${textLines({ text: slide.body, x: 72, y: 1090, size: 27, color: palette.ink, maxChars: 60, lineHeight: 1.3, maxLines: 4 })}`
        : `${textLines({ text: slide.headline, x: 72, y: 900, size: 66, color: palette.ink, maxChars: 25, weight: 700, family: "Georgia, serif", maxLines: 3 })}${textLines({ text: slide.body, x: 72, y: 1090, size: 27, color: palette.ink, maxChars: 60, lineHeight: 1.3, maxLines: 4 })}`;
  } else if (layout === "image_circle") {
    overlays.push({
      input: await circleImage(bytes, 790, slide.crop_focus),
      left: 145,
      top: 105,
    });
    extra = `<circle cx="540" cy="500" r="407" fill="none" stroke="${palette.accent}" stroke-width="5"/>
      ${textLines({ text: slide.headline, x: 72, y: 1000, size: 62, color: palette.ink, maxChars: 26, weight: 700, family: "Georgia, serif", maxLines: 2 })}
      ${textLines({ text: slide.body, x: 72, y: 1135, size: 26, color: palette.ink, maxChars: 62, lineHeight: 1.3, maxLines: 3 })}`;
  } else if (layout === "image_arch") {
    overlays.push({
      input: await archImage(bytes, 884, 980, slide.crop_focus),
      left: 98,
      top: 75,
    });
    extra = `<path d="M98 517 A442 442 0 0 1 982 517 V1055 H98 Z" fill="none" stroke="${palette.accent}" stroke-width="5"/>
      <rect x="48" y="840" width="984" height="390" rx="22" fill="${palette.background}" opacity=".94"/>
      ${textLines({ text: slide.headline, x: 90, y: cover ? 920 : 940, size: cover ? 74 : 62, color: palette.ink, maxChars: cover ? 21 : 25, lineHeight: 1.02, weight: 700, family: "Georgia, serif", maxLines: 3 })}
      ${textLines({ text: slide.body, x: 90, y: 1145, size: 25, color: palette.ink, maxChars: 62, lineHeight: 1.28, maxLines: 3 })}`;
  } else if (layout === "image_postcard") {
    const image = await roundedImage(bytes, 820, 820, slide.crop_focus, 8);
    const tilted = await sharp(image)
      .extend({
        top: 25,
        bottom: 72,
        left: 25,
        right: 25,
        background: palette.paper,
      })
      .rotate(-2, { background: palette.background })
      .png()
      .toBuffer();
    overlays.push({ input: tilted, left: 105, top: 110 });
    extra = `${textLines({ text: slide.headline, x: 72, y: 1055, size: 62, color: palette.ink, maxChars: 27, weight: 700, family: "Georgia, serif", maxLines: 2 })}${textLines({ text: slide.body, x: 72, y: 1170, size: 25, color: palette.ink, maxChars: 62, lineHeight: 1.28, maxLines: 3 })}`;
  } else {
    overlays.push({
      input: await roundedImage(bytes, 890, 830, slide.crop_focus, 26),
      left: 95,
      top: 100,
    });
    extra = `<rect x="82" y="87" width="916" height="856" rx="34" fill="none" stroke="${palette.accent}" stroke-width="4"/>
      ${textLines({ text: slide.headline, x: 72, y: 1045, size: 60, color: palette.ink, maxChars: 28, weight: 700, family: "Georgia, serif", maxLines: 2 })}
      ${textLines({ text: slide.body, x: 72, y: 1165, size: 25, color: palette.ink, maxChars: 62, lineHeight: 1.28, maxLines: 3 })}`;
  }

  return sharp({
    create: {
      width: INSTAGRAM_CANVAS.width,
      height: INSTAGRAM_CANVAS.height,
      channels: 3,
      background: palette.background,
    },
  })
    .composite([
      ...overlays,
      {
        input: baseSvg({
          palette,
          template,
          myth,
          slide,
          total,
          extra,
          transparent: true,
          footerInk: ["image_full", "cover_identity", "image_climax_clean"].includes(layout)
            ? "#FFF8E8"
            : undefined,
        }),
        left: 0,
        top: 0,
      },
    ])
    .jpeg({ quality: 94, chromaSubsampling: "4:4:4" })
    .toBuffer();
}

function houseSvg(x, y, scale, fill, roof = "#C89A3D") {
  const width = 120 * scale;
  const height = 92 * scale;
  const roofHeight = 55 * scale;
  return `<g>
    <path d="M${x} ${y + roofHeight} L${x + width / 2} ${y} L${x + width} ${y + roofHeight} Z" fill="${roof}"/>
    <rect x="${x + 12 * scale}" y="${y + roofHeight}" width="${width - 24 * scale}" height="${height}" fill="${fill}"/>
    <rect x="${x + 48 * scale}" y="${y + roofHeight + 42 * scale}" width="${28 * scale}" height="${50 * scale}" fill="#102E35" opacity=".72"/>
  </g>`;
}

function typeSlideExtra({ slide, layout, palette }) {
  const headline = slide.headline || "";
  const body = slide.body || "";
  if (layout === "location_poster") {
    return `<rect x="0" y="0" width="1080" height="215" fill="${palette.ink}"/>
      <text x="-16" y="390" font-family="Bodoni 72, Didot, Georgia, serif" font-size="176" font-weight="700" letter-spacing="-5" fill="${palette.ink}">IGUAQUE</text>
      <rect x="72" y="470" width="270" height="18" fill="${palette.accent}"/>
      <text x="395" y="735" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="235" font-weight="800" letter-spacing="-12" fill="${palette.ink}">3.599</text>
      <text x="965" y="565" transform="rotate(90 965 565)" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="22" letter-spacing="4" fill="${palette.secondary}">METROS SOBRE EL MAR</text>
      <rect x="0" y="870" width="760" height="300" fill="${palette.ink}"/>
      <text x="72" y="930" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="17" letter-spacing="4" fill="${palette.accent}">PÁRAMO · BOYACÁ</text>
      ${textLines({ text: body, x: 72, y: 1010, size: 29, color: palette.paper, maxChars: 43, lineHeight: 1.28, family: "Avenir Next, Helvetica Neue, Arial, sans-serif", maxLines: 5 })}
      <rect x="820" y="900" width="188" height="188" fill="${palette.accent}"/>
      <rect x="888" y="968" width="52" height="52" fill="${palette.ink}"/>`;
  }
  if (layout === "identity_stack") {
    return `<rect x="0" y="0" width="1080" height="1350" fill="${palette.background}"/>
      <text x="45" y="290" font-family="Bodoni 72, Didot, Georgia, serif" font-size="246" font-weight="700" letter-spacing="-14" fill="${palette.ink}">FARA</text>
      <text x="285" y="560" font-family="Bodoni 72, Didot, Georgia, serif" font-size="246" font-weight="700" letter-spacing="-14" fill="${palette.ink}">CHO</text>
      <text x="70" y="825" font-family="Bodoni 72, Didot, Georgia, serif" font-size="246" font-weight="700" letter-spacing="-14" fill="${palette.ink}">GUA</text>
      <rect x="0" y="885" width="720" height="105" fill="${palette.ink}"/>
      <text x="70" y="954" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="32" font-weight="700" letter-spacing="4" fill="${palette.accent}">LA MUJER BUENA</text>
      ${textLines({ text: body, x: 635, y: 1035, size: 25, color: palette.ink, maxChars: 27, lineHeight: 1.3, family: "Avenir Next, Helvetica Neue, Arial, sans-serif", maxLines: 5 })}
      <text x="1010" y="820" transform="rotate(-90 1010 820)" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="18" letter-spacing="5" fill="${palette.secondary}">OTRO NOMBRE DE BACHUÉ</text>`;
  }
  if (layout === "community_grid") {
    const smallHouses = [
      [550, 205], [710, 205], [870, 205],
      [550, 385], [710, 385], [870, 385],
    ]
      .map(([x, y], index) =>
        houseSvg(x, y, .82, index % 2 ? palette.paper : palette.secondary, palette.accent)
      )
      .join("");
    return `<rect x="0" y="0" width="1080" height="1350" fill="${palette.background}"/>
      ${houseSvg(80, 105, 2.6, palette.paper, palette.accent)}
      ${smallHouses}
      <rect x="500" y="590" width="508" height="12" fill="${palette.accent}"/>
      <text x="68" y="820" font-family="Bodoni 72, Didot, Georgia, serif" font-size="100" font-weight="700" fill="${palette.ink}">UNA CASA</text>
      <text x="420" y="930" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="46" font-weight="700" letter-spacing="4" fill="${palette.accent}">SE VOLVIÓ</text>
      <text x="150" y="1085" font-family="Bodoni 72, Didot, Georgia, serif" font-size="122" font-weight="700" fill="${palette.ink}">UN PUEBLO.</text>
      ${textLines({ text: body, x: 650, y: 1165, size: 22, color: palette.ink, maxChars: 32, lineHeight: 1.25, family: "Avenir Next, Helvetica Neue, Arial, sans-serif", maxLines: 3 })}`;
  }
  if (layout === "principles_triptych") {
    return `<rect x="0" y="0" width="1080" height="1350" fill="${palette.background}"/>
      ${textLines({ text: headline, x: 70, y: 170, size: 82, color: palette.ink, maxChars: 24, lineHeight: .98, weight: 700, family: "Bodoni 72, Didot, Georgia, serif", maxLines: 2 })}
      <rect x="0" y="390" width="360" height="560" fill="#C89A3D"/>
      <rect x="360" y="390" width="360" height="560" fill="#A94F3C"/>
      <rect x="720" y="390" width="360" height="560" fill="#193B2D"/>
      <text x="75" y="520" transform="rotate(90 75 520)" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="24" letter-spacing="5" fill="#172B2D">01</text>
      <text x="180" y="790" text-anchor="middle" font-family="Bodoni 72, Didot, Georgia, serif" font-size="90" font-weight="700" fill="#172B2D">PAZ</text>
      <text x="540" y="735" text-anchor="middle" transform="rotate(-90 540 735)" font-family="Bodoni 72, Didot, Georgia, serif" font-size="66" font-weight="700" fill="#FFF2DA">LÍMITES</text>
      <text x="900" y="790" text-anchor="middle" font-family="Bodoni 72, Didot, Georgia, serif" font-size="82" font-weight="700" fill="#F4EBDD">AGUA</text>
      <text x="430" y="930" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="17" letter-spacing="4" fill="#FFF2DA">02</text>
      <text x="790" y="930" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="17" letter-spacing="4" fill="#F4EBDD">03</text>
      ${textLines({ text: body, x: 70, y: 1045, size: 27, color: palette.ink, maxChars: 58, lineHeight: 1.3, family: "Avenir Next, Helvetica Neue, Arial, sans-serif", maxLines: 5 })}`;
  }
  if (layout === "return_vertical") {
    const letters = "REGRESAR"
      .split("")
      .map(
        (letter, index) =>
          `<text x="${65 + (index % 2) * 44}" y="${170 + index * 120}" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="102" font-weight="800" fill="${index === 7 ? palette.accent : palette.ink}">${letter}</text>`
      )
      .join("");
    return `<rect x="0" y="0" width="1080" height="1350" fill="${palette.background}"/>
      <rect x="0" y="0" width="235" height="1350" fill="${palette.secondary}" opacity=".42"/>
      ${letters}
      <rect x="355" y="130" width="653" height="24" fill="${palette.accent}"/>
      ${textLines({ text: headline, x: 355, y: 345, size: 86, color: palette.ink, maxChars: 18, lineHeight: .98, weight: 700, family: "Bodoni 72, Didot, Georgia, serif", maxLines: 4 })}
      <text x="355" y="760" font-family="Bodoni 72, Didot, Georgia, serif" font-size="154" font-weight="700" fill="none" stroke="${palette.secondary}" stroke-width="2">IGUAQUE</text>
      ${textLines({ text: body, x: 565, y: 890, size: 29, color: palette.ink, maxChars: 34, lineHeight: 1.34, family: "Avenir Next, Helvetica Neue, Arial, sans-serif", maxLines: 6 })}
      <rect x="355" y="1110" width="110" height="110" fill="${palette.accent}"/>
      <rect x="487" y="1142" width="78" height="78" fill="${palette.secondary}"/>`;
  }
  if (layout === "closing_keyword") {
    return `<rect x="0" y="0" width="1080" height="1350" fill="${palette.background}"/>
      <rect x="0" y="0" width="1080" height="360" fill="${palette.accent}"/>
      <text x="-30" y="330" font-family="Bodoni 72, Didot, Georgia, serif" font-size="260" font-weight="700" letter-spacing="-14" fill="${palette.ink}">ORIGEN</text>
      <text x="72" y="500" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="18" letter-spacing="5" fill="${palette.ink}">NO ES UN LUGAR LEJANO</text>
      ${textLines({ text: headline, x: 72, y: 665, size: 80, color: palette.ink, maxChars: 22, lineHeight: .98, weight: 700, family: "Bodoni 72, Didot, Georgia, serif", maxLines: 3 })}
      <rect x="600" y="770" width="408" height="14" fill="${palette.accent}"/>
      ${textLines({ text: body, x: 405, y: 900, size: 31, color: palette.ink, maxChars: 38, lineHeight: 1.32, family: "Avenir Next, Helvetica Neue, Arial, sans-serif", maxLines: 6 })}
      <text x="72" y="1115" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="22" font-weight="700" letter-spacing="2" fill="${palette.accent}">MITOSDECOLOMBIA.COM / BACHUÉ</text>`;
  }
  if (layout.startsWith("location_")) {
    const label = headline || "El lugar";
    return `<text x="72" y="160" font-family="Arial, sans-serif" font-size="18" letter-spacing="4" fill="${palette.accent}">TERRITORIO</text>
      ${textLines({ text: label, x: 72, y: 340, size: 94, color: palette.ink, maxChars: 18, lineHeight: 1.02, weight: 700, family: "Georgia, serif", maxLines: 4 })}
      <path d="M72 680 H1008" stroke="${palette.accent}" stroke-width="3"/>
      ${textLines({ text: body, x: 72, y: 780, size: 32, color: palette.ink, maxChars: 48, lineHeight: 1.34, maxLines: 6 })}
      <circle cx="920" cy="220" r="72" fill="none" stroke="${palette.accent}" stroke-width="3"/><circle cx="920" cy="220" r="9" fill="${palette.accent}"/>`;
  }
  if (layout === "type_giant") {
    return `${textLines({ text: headline, x: 72, y: 230, size: 112, color: palette.ink, maxChars: 13, lineHeight: .96, weight: 700, family: "Georgia, serif", maxLines: 5 })}<path d="M72 780 H430" stroke="${palette.accent}" stroke-width="5"/>${textLines({ text: body, x: 72, y: 885, size: 30, color: palette.ink, maxChars: 51, lineHeight: 1.34, maxLines: 6 })}`;
  }
  if (layout === "type_center") {
    return `${textLines({ text: headline, x: 540, y: 360, size: 76, color: palette.ink, maxChars: 23, lineHeight: 1.05, weight: 700, family: "Georgia, serif", anchor: "middle", maxLines: 4 })}<circle cx="540" cy="710" r="8" fill="${palette.accent}"/>${textLines({ text: body, x: 540, y: 800, size: 30, color: palette.ink, maxChars: 52, lineHeight: 1.38, anchor: "middle", maxLines: 6 })}`;
  }
  if (layout === "type_quote") {
    return `<text x="66" y="330" font-family="Georgia, serif" font-size="260" fill="${palette.accent}" opacity=".7">“</text>${textLines({ text: headline, x: 150, y: 410, size: 68, color: palette.ink, maxChars: 23, lineHeight: 1.08, weight: 700, family: "Georgia, serif", italic: true, maxLines: 4 })}${textLines({ text: body, x: 150, y: 805, size: 29, color: palette.ink, maxChars: 50, lineHeight: 1.36, maxLines: 6 })}`;
  }
  if (layout === "type_split") {
    return `<path d="M540 150 V1170" stroke="${palette.accent}" stroke-width="3"/>${textLines({ text: headline, x: 72, y: 300, size: 72, color: palette.ink, maxChars: 15, lineHeight: 1.04, weight: 700, family: "Georgia, serif", maxLines: 6 })}${textLines({ text: body, x: 600, y: 300, size: 30, color: palette.ink, maxChars: 29, lineHeight: 1.38, maxLines: 12 })}`;
  }
  if (layout === "type_margin" || layout === "type_index") {
    return `<text x="70" y="330" font-family="Georgia, serif" font-size="210" font-weight="700" fill="${palette.accent}" opacity=".28">${String(
      slide.sequence
    ).padStart(2, "0")}</text><path d="M330 150 V1160" stroke="${palette.accent}" stroke-width="3"/>${textLines({ text: headline, x: 385, y: 300, size: 64, color: palette.ink, maxChars: 19, lineHeight: 1.04, weight: 700, family: "Georgia, serif", maxLines: 5 })}${textLines({ text: body, x: 385, y: 695, size: 29, color: palette.ink, maxChars: 36, lineHeight: 1.38, maxLines: 8 })}`;
  }
  if (layout === "type_wave" || layout === "type_stair") {
    return `<rect x="0" y="405" width="650" height="22" fill="${palette.accent}" opacity=".78"/><rect x="690" y="340" width="390" height="90" fill="${palette.secondary}" opacity=".32"/>${textLines({ text: headline, x: 72, y: 260, size: 74, color: palette.ink, maxChars: 22, lineHeight: 1.02, weight: 700, family: "Georgia, serif", maxLines: 4 })}${textLines({ text: body, x: 220, y: 760, size: 31, color: palette.ink, maxChars: 45, lineHeight: 1.4, maxLines: 7 })}`;
  }
  if (layout.startsWith("closing_")) {
    return `<text x="72" y="180" font-family="Arial, sans-serif" font-size="18" letter-spacing="4" fill="${palette.accent}">PARA VOLVER</text>${textLines({ text: headline, x: 72, y: 410, size: 84, color: palette.ink, maxChars: 20, lineHeight: 1.04, weight: 700, family: "Georgia, serif", maxLines: 5 })}<path d="M72 850 H1008" stroke="${palette.accent}" stroke-width="3"/>${textLines({ text: body, x: 72, y: 955, size: 29, color: palette.ink, maxChars: 53, lineHeight: 1.36, maxLines: 5 })}`;
  }
  return `${textLines({ text: headline, x: 72, y: 300, size: 78, color: palette.ink, maxChars: 22, lineHeight: 1.04, weight: 700, family: "Georgia, serif", maxLines: 5 })}<path d="M72 710 H260" stroke="${palette.accent}" stroke-width="5"/>${textLines({ text: body, x: 72, y: 820, size: 30, color: palette.ink, maxChars: 52, lineHeight: 1.38, maxLines: 7 })}`;
}

async function renderTypeSlide({
  slide,
  layout,
  palette,
  template,
  myth,
  total,
}) {
  return sharp(baseSvg({
    palette,
    template,
    myth,
    slide,
    total,
    extra: typeSlideExtra({ slide, layout, palette }),
  }))
    .jpeg({ quality: 94, chromaSubsampling: "4:4:4" })
    .toBuffer();
}

async function localOrRemote(value) {
  if (/^https?:\/\//.test(value)) {
    const response = await fetch(value, { signal: AbortSignal.timeout(20_000) });
    if (!response.ok) throw new Error(`HTTP ${response.status} al leer ${value}`);
    return Buffer.from(await response.arrayBuffer());
  }
  return readFile(path.resolve(value));
}

async function contactSheet(buffers) {
  const thumbWidth = 270;
  const thumbHeight = 338;
  const columns = 4;
  const rows = Math.ceil(buffers.length / columns);
  const thumbs = await Promise.all(
    buffers.map((buffer) =>
      sharp(buffer)
        .resize(thumbWidth, thumbHeight, { fit: "cover" })
        .jpeg({ quality: 88 })
        .toBuffer()
    )
  );
  return sharp({
    create: {
      width: thumbWidth * columns,
      height: thumbHeight * rows,
      channels: 3,
      background: "#D6CEBF",
    },
  })
    .composite(
      thumbs.map((input, index) => ({
        input,
        left: (index % columns) * thumbWidth,
        top: Math.floor(index / columns) * thumbHeight,
      }))
    )
    .jpeg({ quality: 92 })
    .toBuffer();
}

const planArg = arg("--plan");
if (!planArg) {
  throw new Error(
    "Uso: npm run instagram:render -- --plan <plan.json> --generated <imagen.png>"
  );
}
const planPath = path.resolve(planArg);
const outputDir = path.resolve(
  arg("--out", path.join(path.dirname(planPath), "slides"))
);
const generatedThird = arg("--generated");

const payload = JSON.parse(await readFile(planPath, "utf8"));
const plan = payload.plan;
const template = getTemplate(plan.template_id);
if (!template) throw new Error(`Plantilla desconocida: ${plan.template_id}`);
const basePalette = PALETTES[plan.palette_id] || PALETTES[template.palette];
const assetSources = {
  existing_landscape: payload.source_assets.existing_landscape,
  existing_portrait: payload.source_assets.existing_portrait,
  ...(generatedThird
    ? { generated_third: path.resolve(generatedThird) }
    : {}),
};
const requiredAssets = [
  ...new Set(
    plan.slides
      .map((slide) => slide.asset_id)
      .filter((assetId) => assetId && assetId !== "none")
  ),
];
for (const assetId of requiredAssets) {
  if (!assetSources[assetId]) {
    throw new Error(`Falta la fuente del activo ${assetId}.`);
  }
}
const assets = new Map(
  await Promise.all(
    requiredAssets.map(async (assetId) => [
      assetId,
      await localOrRemote(assetSources[assetId]),
    ])
  )
);

await mkdir(outputDir, { recursive: true });
const buffers = [];
const files = [];
for (const slide of plan.slides) {
  const hasImage = slide.asset_id && slide.asset_id !== "none";
  const paletteId =
    slide.palette_id ||
    template.paletteSequence?.[(slide.sequence - 1) % template.paletteSequence.length] ||
    plan.palette_id ||
    template.palette;
  const slidePalette = PALETTES[paletteId] || basePalette;
  const buffer = hasImage
    ? await renderImageSlide({
        bytes: assets.get(slide.asset_id),
        slide,
        layout: slide.layout,
        palette: slidePalette,
        template,
        myth: payload.myth,
        total: plan.sequence_count,
      })
    : await renderTypeSlide({
        slide,
        layout: slide.layout,
        palette: slidePalette,
        template,
        myth: payload.myth,
        total: plan.sequence_count,
      });
  const filename = `${String(slide.sequence).padStart(2, "0")}-${slide.kind}.jpg`;
  await writeFile(path.join(outputDir, filename), buffer);
  buffers.push(buffer);
  files.push(filename);
}

await writeFile(
  path.join(outputDir, "contact-sheet.jpg"),
  await contactSheet(buffers)
);
await writeFile(
  path.join(outputDir, "caption.txt"),
  `${plan.caption}\n\n${plan.hashtags.join(" ")}\n`
);
await writeFile(
  path.join(outputDir, "alt-text.txt"),
  `${plan.slides
    .filter((slide) => slide.asset_id !== "none")
    .map(
      (slide) =>
        `${String(slide.sequence).padStart(2, "0")}: ${slide.alt_text}`
    )
    .join("\n\n")}\n`
);
await writeFile(
  path.join(outputDir, "manifest.json"),
  `${JSON.stringify(
    {
      schema_version: 1,
      canvas: INSTAGRAM_CANVAS,
      myth: payload.myth,
      template_id: plan.template_id,
      palette_id: plan.palette_id,
      palette_sequence: plan.slides.map(
        (slide) =>
          slide.palette_id ||
          template.paletteSequence?.[
            (slide.sequence - 1) % template.paletteSequence.length
          ] ||
          plan.palette_id ||
          template.palette
      ),
      sequence_count: plan.sequence_count,
      files,
      source_assets: assetSources,
      generated_by: {
        planner: payload.provider,
        model_id: payload.model_id,
        renderer: "sharp-svg-v2",
      },
    },
    null,
    2
  )}\n`
);

console.log(
  JSON.stringify({
    status: "rendered",
    output: outputDir,
    canvas: `${INSTAGRAM_CANVAS.width}x${INSTAGRAM_CANVAS.height}`,
    slides: files.length,
    contact_sheet: path.join(outputDir, "contact-sheet.jpg"),
  })
);
