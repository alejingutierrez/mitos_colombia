import "./globals.css";
import { Fraunces, Sora } from "next/font/google";
import Script from "next/script";
import Footer from "../components/Footer";
import Analytics from "../components/Analytics";
import { GA_MEASUREMENT_ID } from "../lib/analytics";

const RAW_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "");
const SITE_URL = RAW_SITE_URL.replace(/\/$/, "");

const display = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  metadataBase: SITE_URL ? new URL(SITE_URL) : undefined,
  title: {
    default: "Mitos de Colombia",
    template: "%s | Mitos de Colombia",
  },
  description:
    "Archivo editorial de mitos colombianos, organizado por region, origen y tema.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body className="font-body text-ink-900 antialiased">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });`}
        </Script>
        <Analytics />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
