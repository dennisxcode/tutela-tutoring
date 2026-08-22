import type { Metadata } from "next";
import { content } from "@/lib/content";
import { ProsePage } from "@/components/ProsePage";
import { JsonLd } from "@/components/JsonLd";
import { pageJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: `${content.contactPage.title.zh} · Tutela 识途学辅`,
  description: content.contactPage.lede.zh,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `${content.contactPage.title.zh} | Tutela`,
    description: content.contactPage.lede.zh,
    url: "/contact",
    type: "website",
  },
};

// The contact area, given its own page. The WeChat QR itself stays in the
// footer, which is on every page, so this explains how to use it and what to
// say — the personal touchpoint, and the only place Dennis is named.
export default function ContactPage() {
  return (
    <>
      <ProsePage
        tag={content.contactPage.tag}
        title={content.contactPage.title}
        lede={content.contactPage.lede}
        sections={content.contactPage.sections}
        napTitle={content.contactPage.napTitle}
      />
      <JsonLd
        data={pageJsonLd({
          type: "ContactPage",
          path: "/contact",
          name: content.contactPage.title.zh,
          description: content.contactPage.lede.zh,
        })}
      />
    </>
  );
}
