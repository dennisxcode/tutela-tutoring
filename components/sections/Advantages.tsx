"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { EditorialSection } from "@/components/EditorialSection";

// Section 01 — our advantages as editorial entries (serif label + a line of
// explanation each). The headline numbers that used to sit on top of this
// section are now chips in the hero, where a skimming parent actually sees them.
export function Advantages({ num = "01" }: { num?: string }) {
  const { t } = useLanguage();
  return (
    <EditorialSection
      id="advantages"
      num={num}
      title={t(content.advantages.title)}
      intro={t(content.advantages.intro)}
    >
      <ul className="divide-y divide-ink/10 border-y border-ink/10">
        {content.advantages.items.map((it, i) => (
          <li key={i} className="flex flex-col gap-1 py-5 sm:flex-row sm:gap-6">
            <h3 className="font-serif text-lg font-semibold text-ink sm:w-44 sm:shrink-0">
              {t(it.title)}
            </h3>
            <p className="text-base leading-relaxed text-body/80">{t(it.body)}</p>
          </li>
        ))}
      </ul>
    </EditorialSection>
  );
}
