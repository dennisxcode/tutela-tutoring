"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { EditorialSection } from "@/components/EditorialSection";
import { PricingTable } from "@/components/PricingTable";

// What we offer and what it costs, on the page most visitors land on. Price is a
// top-three parent question and $20/hour is competitive — putting it behind a
// click cost more than it protected.
export function HomeOverview({ num = "02" }: { num?: string }) {
  const { t } = useLanguage();
  return (
    <EditorialSection
      id="offer"
      num={num}
      title={t(content.whatWeOffer.title)}
      intro={t(content.whatWeOffer.body)}
      surface
    >
      <ul className="divide-y divide-ink/10 border-y border-ink/10">
        {content.subjects.list.map((s, i) => (
          <li key={i} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-6">
            <span className="font-serif text-xl font-semibold text-ink sm:w-24 sm:shrink-0">
              {t(s.name)}
            </span>
            <span className="text-base leading-relaxed text-body/80">{t(s.blurb)}</span>
          </li>
        ))}
      </ul>

      <div className="mt-12">
        <h3 className="font-serif text-xl font-semibold text-ink">{t(content.pricing.title)}</h3>
        <p className="mt-2 text-base leading-relaxed text-body/80">{t(content.pricing.intro)}</p>
        <PricingTable className="mt-5" />
      </div>

      <Link
        href="/program"
        className="group mt-8 inline-flex items-center gap-2 font-serif text-lg font-semibold text-ink transition hover:text-accent-deep"
      >
        {t(content.ui.viewProgram)}
        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden
        />
      </Link>
    </EditorialSection>
  );
}
