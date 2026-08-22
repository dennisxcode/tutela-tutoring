import type { Metadata } from "next";
import { content } from "@/lib/content";
import { ProsePage } from "@/components/ProsePage";
import { JsonLd } from "@/components/JsonLd";
import { pageJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: `${content.about.title.zh} · Tutela 识途学辅`,
  description: content.about.lede.zh,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `${content.about.title.zh} | Tutela`,
    description: content.about.lede.zh,
    url: "/about",
    type: "website",
  },
};

// One of the three pages a parent — or an agent checking whether a business is
// real — looks for before trusting anything else on the site: who we are, what
// we teach, how classes run, and what we deliberately don't claim.
export default function AboutPage() {
  return (
    <>
      <ProsePage
        tag={content.about.tag}
        title={content.about.title}
        lede={content.about.lede}
        sections={content.about.sections}
        ctas={[
          { href: "/program", label: content.about.programCta },
          { href: "/contact", label: content.about.contactCta },
        ]}
      />
      <JsonLd
        data={pageJsonLd({
          type: "AboutPage",
          path: "/about",
          name: content.about.title.zh,
          description: content.about.lede.zh,
        })}
      />
    </>
  );
}
