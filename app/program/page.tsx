import type { Metadata } from "next";
import { content } from "@/lib/content";
import { ProgramHero } from "@/components/sections/ProgramHero";
import { Subjects } from "@/components/sections/Subjects";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhoItsFor } from "@/components/sections/WhoItsFor";
import { Tutors } from "@/components/sections/Tutors";
import { Manifesto } from "@/components/sections/Manifesto";
import { Faq } from "@/components/sections/Faq";

export const metadata: Metadata = {
  title: `${content.program.title.zh} · 课程 | Tutela`,
  description: content.program.intro.zh,
  alternates: { canonical: "/program" },
  openGraph: {
    title: `${content.program.title.zh} | Tutela`,
    description: content.program.intro.zh,
    url: "/program",
    type: "website",
  },
};

// Nine answers to the questions parents actually type into a search box, marked
// up so they can surface as rich results. Chinese is the indexed language, in
// line with the rest of the page metadata.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: content.faq.map((item) => ({
    "@type": "Question",
    name: item.q.zh,
    acceptedAnswer: { "@type": "Answer", text: item.a.zh },
  })),
};

// The deep page: what we teach in each class, how classes run, pricing, who it's
// for, the tutors, why students improve, and the FAQ.
export default function ProgramPage() {
  return (
    <>
      <ProgramHero />
      <Subjects num="01" />
      <HowItWorks num="02" />
      <WhoItsFor num="03" />
      <Tutors num="04" />
      <Manifesto num="05" />
      <Faq num="06" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd)
            .replace(/</g, "\\u003c")
            .replace(/>/g, "\\u003e")
            .replace(/&/g, "\\u0026"),
        }}
      />
    </>
  );
}
