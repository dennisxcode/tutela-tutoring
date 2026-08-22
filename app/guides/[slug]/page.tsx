import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { guides, getGuide } from "@/lib/guides";
import { GuideArticle } from "@/components/guides/GuideArticle";
import { JsonLd } from "@/components/JsonLd";
import { ORG_ID } from "@/lib/schema";
import { SITE_URL as siteUrl } from "@/lib/site";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return {};
  return {
    title: `${g.title.zh} | Tutela`,
    description: g.description.zh,
    alternates: { canonical: `/guides/${g.slug}` },
    openGraph: {
      title: g.title.zh,
      description: g.description.zh,
      url: `/guides/${g.slug}`,
      type: "article",
    },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: g.title.zh,
    description: g.description.zh,
    inLanguage: "zh-CN",
    datePublished: g.updated,
    dateModified: g.updated,
    // Pointed at the organisation node in the site-wide graph rather than
    // repeating a bare name, so the guides, the site and the brand resolve to
    // one identity.
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: `${siteUrl}/guides/${g.slug}`,
  };

  return (
    <>
      <GuideArticle guide={g} />
      <JsonLd data={jsonLd} />
    </>
  );
}
