import "leaflet/dist/leaflet.css";
import "./globals.css";
import { Cormorant_Garamond, Manrope, Inter } from "next/font/google";
import { Footer } from "../components/organisms/Footer";
import {
  buildDirectGaBootstrap,
  buildGtmBootstrap,
  GA_MEASUREMENT_ID,
  GTM_CONTAINER_ID,
} from "../lib/google-tags";
import { WebsiteJsonLd } from "../components/StructuredData";

const RAW_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "");
const SITE_URL = RAW_SITE_URL.trim().replace(/\/+$/, "");

const display = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const editorial = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-editorial",
  display: "swap",
});

export const metadata = {
  metadataBase: SITE_URL ? new URL(SITE_URL) : undefined,
  title: "Mitos de Colombia",
  description:
    "Archivo editorial de mitos colombianos, organizado por region, origen y tema.",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }) {
  const gaId = GA_MEASUREMENT_ID;
  const gtmId = GTM_CONTAINER_ID;
  const tagBootstrap = gtmId
    ? buildGtmBootstrap(gtmId)
    : buildDirectGaBootstrap(gaId);

  return (
    <html
      lang="es"
      className={`${display.variable} ${body.variable} ${editorial.variable}`}
    >
      <head>
        <WebsiteJsonLd siteUrl={SITE_URL} />
        {tagBootstrap ? (
          <script
            id={gtmId ? "google-tag-manager" : "google-analytics"}
            dangerouslySetInnerHTML={{ __html: tagBootstrap }}
          />
        ) : null}
      </head>
      <body className="font-body text-ink-900 antialiased">
        {gtmId ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              className="hidden invisible"
              title="Google Tag Manager"
            />
          </noscript>
        ) : null}
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        <div className="page-bg" aria-hidden="true">
          <div className="page-bg-ambient">
            <span className="page-bg-b1" />
            <span className="page-bg-b2" />
            <span className="page-bg-b3" />
          </div>
          <div className="page-bg-grain" />
        </div>
        <div className="page-shell min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
