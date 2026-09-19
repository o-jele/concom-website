import type { Metadata, Viewport } from "next";
import { Newsreader, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import { Header } from "@/components/chrome/Header";
import { Footer } from "@/components/chrome/Footer";
import { MotionInit } from "@/components/chrome/MotionInit";
import { Cursor } from "@/components/chrome/Cursor";
import { Preloader } from "@/components/chrome/Preloader";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex",
  display: "swap",
});

const themeInit = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;var r=document.documentElement;r.classList.toggle("dark",d);r.style.colorScheme=d?"dark":"light";}catch(e){}})();`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "ConCom PR & Publicity — We turn what institutions know into what people hear.",
    template: "%s · ConCom PR & Publicity",
  },
  description: site.intro,
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.intro,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${site.name} — ${site.tagline}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.intro,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FCFBF8" },
    { media: "(prefers-color-scheme: dark)", color: "#0F1512" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${newsreader.variable} ${plex.variable}`}
    >
      <body className="bg-paper font-sans text-ink antialiased">
        {/* Runs before anything paints — prevents dark-mode flash. */}
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <Preloader />
        <Cursor />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MotionInit />
      </body>
    </html>
  );
}
