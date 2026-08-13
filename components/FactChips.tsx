"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

// Outlined pills carrying the concrete facts a parent wants before deciding to
// read on: schedule, group size, price, support. Hairline outlines only — the
// accent stays reserved for the CTA.
export function FactChips({ className = "" }: { className?: string }) {
  const { t } = useLanguage();
  return (
    <ul className={`flex flex-wrap justify-center gap-2 ${className}`}>
      {content.facts.map((f, i) => (
        <li
          key={i}
          className="rounded-full border border-ink/25 px-3.5 py-1.5 text-[0.8125rem] font-medium text-body/85"
        >
          {t(f)}
        </li>
      ))}
    </ul>
  );
}
