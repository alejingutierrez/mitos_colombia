/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  assetPrefix: process.env.MITOS_AWS_ASSETS === "1" && process.env.MITOS_DEPLOYMENT_SHA ? `https://media.mitosdecolombia.com/static/${process.env.MITOS_DEPLOYMENT_SHA}` : undefined,
  deploymentId: process.env.MITOS_DEPLOYMENT_SHA || undefined,
  cacheMaxMemorySize: process.env.MITOS_AWS_BUILD === "1" ? 0 : undefined,
  cacheHandler: process.env.MITOS_AWS_BUILD === "1" ? require.resolve("./cache-handler.cjs") : undefined,
  serverExternalPackages: ["pg", "better-sqlite3"],
  allowedDevOrigins: ["127.0.0.1"],
  reactStrictMode: true,
  devIndicators: false,
  experimental: {
    cpus: 1,
    staticGenerationMaxConcurrency: 1,
  },
  // El estudio de carruseles lee el archivo visual con fs y sólo responde en
  // local: en producción devuelve 404. Sin esto el trazado mete content/ entero
  // en la función y Vercel la rechaza por pasar de 250 MB.
  outputFileTracingExcludes: {
    "/*": ["./content/**/*", "./docs/**/*", "./output/**/*", "./artifacts/**/*", "./editorial/**/*", "./.git/**/*", "./.env*", "./build-input/**/*", "./infra/**/*", "./scripts/**/*"],
    "/api/instagram/**": ["./content/**/*", "./docs/**/*", "./output/**/*", "./public/**/*"],
    "/design-system/instagram*": ["./content/**/*", "./docs/**/*", "./output/**/*", "./public/**/*"],
  },
  async headers() {
    return [
      {
        source: "/admin/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive",
          },
        ],
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [68, 75, 90],
    remotePatterns: [
      { protocol: "https", hostname: "media.mitosdecolombia.com" },
      ...(process.env.MITOS_MEDIA_HOST ? [{ protocol: "https", hostname: process.env.MITOS_MEDIA_HOST }] : []),
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "*.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "images.openai.com",
      },
    ],
  },
};

module.exports = nextConfig;
