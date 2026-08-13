"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { CtaButton } from "@/components/CtaButton";
import { EditorialSection } from "@/components/EditorialSection";
import { useNow } from "@/lib/useNow";
import { upcoming } from "@/lib/dates";

// Upcoming dated events when there are any; otherwise the standing free-trial
// offer plus the two enrolment steps. Either way the section says something
// true and actionable — it never shows an event that has already happened.
export function KeyDates({ num = "03" }: { num?: string }) {
  const { t } = useLanguage();
  const now = useNow();
  const events = now ? upcoming(content.dates.items, now) : [];
  const hasEvents = events.length > 0;

  return (
    <EditorialSection
      id="dates"
      num={num}
      title={t(hasEvents ? content.dates.title : content.dates.standingTitle)}
      surface
    >
      {hasEvents ? (
        <ul className="divide-y divide-ink/10 border-y border-ink/10">
          {events.map((d) => (
            <li key={d.iso} className="grid gap-1 py-6 sm:grid-cols-[9rem_1fr] sm:gap-6">
              <time dateTime={d.iso} className="font-serif text-2xl font-semibold text-ink">
                {t(d.date)}
              </time>
              <div>
                <p className="font-semibold text-ink">{t(d.label)}</p>
                <p className="mt-1 text-sm leading-relaxed text-body/75">{t(d.note)}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="border-y border-ink/10 py-6">
          <h3 className="font-serif text-2xl font-semibold text-ink">
            {t(content.dates.trial.title)}
          </h3>
          <p className="mt-2 max-w-xl text-base leading-relaxed text-body/85">
            {t(content.dates.trial.body)}
          </p>
        </div>
      )}

      <ol className="mt-10 space-y-5">
        {content.enrol.steps.map((step, i) => (
          <li key={i} className="flex items-start gap-4">
            <span className="font-display text-lg italic text-accent-deep">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="pt-0.5 text-base leading-relaxed text-body/90">{t(step)}</span>
          </li>
        ))}
      </ol>

      <div className="mt-10">
        <CtaButton className="!px-6 !py-3 !text-base" />
      </div>
    </EditorialSection>
  );
}
