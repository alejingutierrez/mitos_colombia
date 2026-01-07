import "./globals.css";
import { Fraunces, Sora } from "next/font/google";

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
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
