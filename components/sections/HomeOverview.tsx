"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { EditorialSection } from "@/components/EditorialSection";
import { PricingTable } from "@/components/PricingTable";

// The two tracks, with admission-exam prep first and primary and general
// tutoring clearly visible as second. Price sits underneath: it's a top-three
// parent question and $20 a class is competitive, so putting it behind a click
// cost more than it protected.
export function HomeOverview({ num = "02" }: { num?: string }) {
  const { t } = useLanguage();
  const [track1, track2] = content.whatWeOffer.tracks;

  return (
    <EditorialSection
      id="offer"
      num={num}
      title={t(content.whatWeOffer.title)}
      intro={t(content.whatWeOffer.body)}
      surface
    >
      <div className="space-y-10">
        {/* Track 1 — admission exam prep, the lead product */}
        <div>
          <div className="mb-3 flex flex-wrap items-baseline gap-3">
            <h3 className="font-serif text-2xl font-semibold text-ink">{t(track1.name)}</h3>
            <span className="rounded-full border border-accent-deep/40 px-2.5 py-0.5 text-xs font-semibold text-accent-deep">
              {t(track1.badge)}
            </span>
          </div>
          <p className="text-base leading-relaxed text-body/80">{t(track1.desc)}</p>

          <ul className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
            {content.subjects.list.map((s, i) => (
              <li
                key={i}
                className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6"
              >
                <span className="font-serif text-lg font-semibold text-ink sm:w-24 sm:shrink-0">
                  {t(s.name)}
                </span>
                <span className="text-base leading-relaxed text-body/80">{t(s.blurb)}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Track 2 — foundations, lighter weight but not buried */}
        <div className="border-t border-ink/10 pt-8">
          <div className="mb-3 flex flex-wrap items-baseline gap-3">
            <h3 className="font-serif text-xl font-semibold text-ink">{t(track2.name)}</h3>
            <span className="rounded-full border border-ink/25 px-2.5 py-0.5 text-xs font-semibold text-body/80">
              {t(track2.badge)}
            </span>
          </div>
          <p className="text-base leading-relaxed text-body/80">{t(track2.desc)}</p>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="font-serif text-xl font-semibold text-ink">{t(content.pricing.title)}</h3>
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
