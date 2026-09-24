/** @type {import('next').NextConfig} */
const nextConfig = {
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
