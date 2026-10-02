import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const faviconSource = path.join(root, "public/favicon.svg");
const logoSource = path.join(root, "public/brand/monogram-m.svg");
const maskableSource = path.join(root, "public/brand/icon-maskable-m.svg");

const assets = [
  [faviconSource, "public/favicon-48x48.png", 48],
  [faviconSource, "public/favicon.png", 512],
  [faviconSource, "public/apple-icon.png", 180],
  [faviconSource, "public/icon-192.png", 192],
  [faviconSource, "public/icon-512.png", 512],
  [faviconSource, "src/app/icon.png", 512],
  [maskableSource, "public/icon-maskable-512.png", 512],
  [logoSource, "public/brand/monogram-m.png", 512],
  [logoSource, "public/logo_mitos.png", 512],
];

await Promise.all(
  assets.map(([source, output, size]) =>
    sharp(source)
      .resize(size, size)
      .png({ compressionLevel: 9 })
      .toFile(path.join(root, output))
  )
);

console.log(`Generated ${assets.length} brand assets.`);
