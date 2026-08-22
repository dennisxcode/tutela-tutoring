import type { Metadata } from "next";
import { Noto_Sans_SC, Noto_Serif_SC, Fraunces } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { content } from "@/lib/content";
import { LanguageProvider } from "@/lib/LanguageContext";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { SiteNav } from "@/components/SiteNav";
import { FinalCta } from "@/components/sections/FinalCta";
import { ScrollArch } from "@/components/ScrollArch";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { JsonLd } from "@/components/JsonLd";
import { siteJsonLd } from "@/lib/schema";
import { SITE_URL as siteUrl } from "@/lib/site";

// CJK fonts: do NOT pass `subsets` and set `preload: false`, otherwise
// next/font errors ("Missing selected font subset") at build.
const noto = Noto_Sans_SC({
  weight: ["400", "500", "700"],
  display: "swap",
  preload: false,
  variable: "--font-noto-sans-sc",
});

// Editorial Chinese serif for headlines — the "prospectus" gravitas.
// Same CJK rules: no subset, preload false.
const notoSerif = Noto_Serif_SC({
  weight: ["500", "600", "700"],
  display: "swap",
  preload: false,
  variable: "--font-noto-serif-sc",
});

// Kept for decorative italic accents (section numbers, pull-quotes).
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: content.meta.title.zh,
  description: content.meta.description.zh,
  // The site is reachable on both the custom domain and the vercel.app
  // subdomain; the canonical keeps them from competing as duplicates.
  alternates: {
    canonical: "/",
    // Every page has a Markdown twin (see middleware.ts); advertising it lets a
    // crawler find it without guessing at the Accept header.
    types: { "text/markdown": "/index.md" },
  },
  // "Tutela" alone is a common Latin word, so the searchable name is stated in
  // both scripts wherever a search engine reads one.
  applicationName: "Tutela 识途学辅",
  // app/opengraph-image.png is picked up automatically as og:image.
  openGraph: {
    title: content.meta.title.zh,
    description: content.meta.description.zh,
    url: "/",
    siteName: "Tutela",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: content.meta.title.zh,
    description: content.meta.description.zh,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="zh-CN"
      className={`${noto.variable} ${notoSerif.variable} ${fraunces.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased">
        <LanguageProvider>
          <div className="sticky top-0 z-50">
            <AnnouncementBar />
            <SiteNav />
          </div>
          <main>{children}</main>
          <FinalCta />
          <ScrollArch />
          <MobileCtaBar />
        </LanguageProvider>
        <Analytics />
        <JsonLd data={siteJsonLd} />
      </body>
    </html>
  );
}
