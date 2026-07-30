import "./globals.css";
import { Metamorphous, Readex_Pro } from "next/font/google";
import Script from "next/script";
import { Footer } from "../components/organisms/Footer";
import Analytics from "../components/Analytics";
import { GA_MEASUREMENT_ID } from "../lib/analytics";
import {
  APPLE_ICON_PATH,
  FAVICON_PNG_PATH,
  FAVICON_SVG_PATH,
  SITE_DESCRIPTION,
  SITE_NAME,
} from "../lib/brand";
import { WebsiteJsonLd } from "../components/StructuredData";

const RAW_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "");
const SITE_URL = RAW_SITE_URL.trim().replace(/\/+$/, "");

const display = Metamorphous({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const body = Readex_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  metadataBase: SITE_URL ? new URL(SITE_URL) : undefined,
  applicationName: SITE_NAME,
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  creator: SITE_NAME,
  publisher: SITE_NAME,
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  icons: {
    icon: [
      { url: FAVICON_SVG_PATH, type: "image/svg+xml" },
      { url: FAVICON_PNG_PATH, type: "image/png", sizes: "48x48" },
    ],
    shortcut: [{ url: FAVICON_PNG_PATH, type: "image/png", sizes: "48x48" }],
    apple: [
      { url: APPLE_ICON_PATH, type: "image/png", sizes: "180x180" },
    ],
  },
};

export default function RootLayout({ children }) {
  const gaId = GA_MEASUREMENT_ID.trim();

  return (
    <html
      lang="es"
      className={`${display.variable} ${body.variable}`}
      data-scroll-behavior="smooth"
    >
      <head>
        <WebsiteJsonLd siteUrl={SITE_URL} />
      </head>
      <body className="font-body text-ink-900 antialiased">
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="lazyOnload"
            />
            <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
window.gtag = function(){dataLayer.push(arguments);};
window.gtag('js', new Date());
window.gtag('config', '${gaId}', { send_page_view: false });`}
            </Script>
          </>
        ) : null}
        <Analytics />
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
