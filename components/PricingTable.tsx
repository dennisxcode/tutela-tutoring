"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

// The price list as an editorial table — hairline rows, serif figures, no cards.
// Shared by the home page and /program so the number is stated identically in
// both places.
export function PricingTable({ className = "" }: { className?: string }) {
  const { t } = useLanguage();
  return (
    <div className={className}>
      <ul className="divide-y divide-ink/10 border-y border-ink/10">
        {content.pricing.rows.map((row, i) => {
          const isBundle = i === content.pricing.rows.length - 1;
          return (
            <li key={i} className="flex items-baseline justify-between gap-4 py-4">
              <span className={`text-body/90 ${isBundle ? "font-semibold text-ink" : ""}`}>
                {t(row.label)}
              </span>
              <span className="flex items-baseline gap-1.5">
                <span className="font-serif text-xl font-semibold text-ink">{row.price}</span>
                <span className="text-xs text-body/70">{t(content.pricing.unit)}</span>
              </span>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 text-sm leading-relaxed text-body/75">{t(content.pricing.note)}</p>
    </div>
  );
}
