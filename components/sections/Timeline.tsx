"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { EditorialSection } from "@/components/EditorialSection";
import { useNow } from "@/lib/useNow";
import { currentStage } from "@/lib/dates";

// Why now matters. The exam lands early in Grade 6 and tests Grade 5 material,
// so the useful window is the year before — a parent who doesn't know that has
// no reason to act today. The current stage is marked from the viewer's own
// clock; before mount nothing is marked, which is a valid, quieter state.
export function Timeline({ num = "03" }: { num?: string }) {
  const { t } = useLanguage();
  const now = useNow();
  const active = now ? currentStage(now) : -1;

  return (
    <EditorialSection
      id="timeline"
      num={num}
      title={t(content.timeline.title)}
      intro={t(content.timeline.intro)}
    >
      <ol className="divide-y divide-ink/10 border-y border-ink/10">
        {content.timeline.stages.map((s, i) => {
          const isActive = i === active;
          return (
            <li
              key={i}
              aria-current={isActive ? "step" : undefined}
              className="grid gap-1 py-6 sm:grid-cols-[11rem_1fr] sm:gap-6"
            >
              <div className="flex items-baseline gap-3">
                <span
                  className={`text-sm font-semibold ${isActive ? "text-accent-deep" : "text-body/70"}`}
                >
                  {t(s.when)}
                </span>
                {isActive && (
                  <span className="rounded-full border border-accent px-2 py-0.5 text-[0.6875rem] font-semibold uppercase tracking-wider text-accent-deep">
                    {t(content.timeline.nowLabel)}
                  </span>
                )}
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-ink">{t(s.title)}</h3>
                <p className="mt-1 text-base leading-relaxed text-body/80">{t(s.body)}</p>
              </div>
            </li>
          );
        })}
      </ol>
      <p className="mt-6 text-sm leading-relaxed text-body/75">{t(content.timeline.note)}</p>
    </EditorialSection>
  );
}
