"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

// The same four facts — where we serve, how classes run, which languages, how
// to reach us — rendered identically in the footer and on /about and /contact.
// Directories and crawlers reward a name/area/contact block that reads the same
// everywhere; a parent skimming for "is this near me" gets it in one glance.
export function NapCard({ tone = "light" }: { tone?: "light" | "dark" }) {
  const { t } = useLanguage();
  const o = content.org;
  const rows = [
    { label: o.areaServedLabel, value: t(o.areaServed) },
    { label: o.formatLabel, value: t(o.format) },
    { label: o.languagesLabel, value: t(o.languages) },
    { label: o.contactLabel, value: t(o.contactLine) },
  ];
  const dark = tone === "dark";

  return (
    <dl
      className={`grid gap-x-6 gap-y-2 text-sm sm:grid-cols-[auto_1fr] ${
        dark ? "text-white/75" : "text-body/80"
      }`}
    >
      {rows.map((r, i) => (
        <div key={i} className="contents">
          <dt className={`font-medium ${dark ? "text-white/90" : "text-ink"}`}>{t(r.label)}</dt>
          <dd className="mb-2 leading-relaxed sm:mb-0">{r.value}</dd>
        </div>
      ))}
    </dl>
  );
}
