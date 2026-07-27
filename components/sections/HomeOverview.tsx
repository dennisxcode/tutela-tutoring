"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { EditorialSection } from "@/components/EditorialSection";

// Home-page overview of what we offer, with the two structured tracks (systematic exam prep and general tutoring)
// keeping admission-exam prep visually first and primary, and general tutoring clearly visible as second.
export function HomeOverview({ num = "02" }: { num?: string }) {
  const { t } = useLanguage();
  const track1 = content.whatWeOffer.tracks[0];
  const track2 = content.whatWeOffer.tracks[1];

  return (
    <EditorialSection
      id="offer"
      num={num}
      title={t(content.whatWeOffer.title)}
      intro={t(content.whatWeOffer.body)}
    >
      <div className="space-y-12">
        {/* Track 1: Admission Exam Prep (Primary, visually prominent) */}
        <div className="rounded-lg border border-ink/10 bg-white/50 p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-serif text-2xl font-semibold text-ink">
              {t(track1.name)}
            </span>
            <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
              {t(track1.badge)}
            </span>
          </div>
          <p className="text-base leading-relaxed text-body/80 mb-6">
            {t(track1.desc)}
          </p>

          <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-ink/60 mb-3">
            {t({ zh: "备考科目与方向", en: "Exam Subjects & Focus" })}
          </h4>
          <ul className="divide-y divide-ink/10 border-t border-ink/10">
            {content.subjects.list.map((s, i) => (
              <li key={i} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6">
                <span className="font-serif text-lg font-semibold text-ink sm:w-24 sm:shrink-0">
                  {t(s.name)}
                </span>
                <span className="text-sm leading-relaxed text-body/75">{t(s.blurb)}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Track 2: General Tutoring (Secondary, clearly visible, not buried, but less heavy) */}
        <div className="rounded-lg border border-ink/10 p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-serif text-xl font-semibold text-ink">
              {t(track2.name)}
            </span>
            <span className="rounded-full bg-ink/5 px-3 py-1 text-xs font-semibold text-body/60">
              {t(track2.badge)}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-body/75">
            {t(track2.desc)}
          </p>
        </div>
      </div>

      <div className="mt-8">
        <Link
          href="/program"
          className="group inline-flex items-center gap-2 font-serif text-lg font-semibold text-ink transition hover:text-accent"
        >
          {t(content.ui.viewProgram)}
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden
          />
        </Link>
      </div>
    </EditorialSection>
  );
}
