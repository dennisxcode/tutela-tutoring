"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { EditorialSection } from "@/components/EditorialSection";
import { PricingTable } from "@/components/PricingTable";

export function HowItWorks({ num = "02" }: { num?: string }) {
  const { t } = useLanguage();
  return (
    <EditorialSection
      id="how"
      num={num}
      title={t(content.howItWorks.title)}
      intro={t(content.howItWorks.body)}
      surface
    >
      <div>
        <h3 className="font-serif text-xl font-semibold text-ink">{t(content.pricing.title)}</h3>
        <p className="mt-2 text-base leading-relaxed text-body/80">{t(content.pricing.intro)}</p>
        <PricingTable className="mt-5" />
      </div>

      <div className="mt-14">
        <h3 className="mb-5 font-serif text-xl font-semibold text-ink">
          {t(content.enrol.title)}
        </h3>
        <ol className="space-y-5">
          {content.enrol.steps.map((step, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="font-display text-lg italic text-accent-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="pt-0.5 text-base leading-relaxed text-body/90">{t(step)}</span>
            </li>
          ))}
        </ol>
      </div>
    </EditorialSection>
  );
}
