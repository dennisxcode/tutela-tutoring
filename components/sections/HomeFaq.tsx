"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { EditorialSection } from "@/components/EditorialSection";

// The questions a parent asks before clicking anything — price, group size,
// online or in person, which grades. The full set is on /program behind an
// accordion; here the answers are open, because a parent skimming the landing
// page shouldn't have to tap six times to learn what this costs.
const featured = content.homeFaq.featured
  .map((fragment) => content.faq.find((item) => item.q.zh.includes(fragment)))
  .filter((item): item is (typeof content.faq)[number] => item !== undefined);

export function HomeFaq({ num = "05" }: { num?: string }) {
  const { t } = useLanguage();
  return (
    <EditorialSection
      id="questions"
      num={num}
      title={t(content.homeFaq.title)}
      intro={t(content.homeFaq.intro)}
    >
      <dl className="border-t border-ink/10">
        {featured.map((item, i) => (
          <div key={i} className="border-b border-ink/10 py-5">
            <dt className="font-semibold text-ink">{t(item.q)}</dt>
            <dd className="mt-2 text-base leading-relaxed text-body/85">{t(item.a)}</dd>
          </div>
        ))}
      </dl>
      <Link
        href="/program#faq"
        className="mt-6 inline-block text-sm font-medium text-accent-deep hover:underline"
      >
        {t(content.homeFaq.more)} →
      </Link>
    </EditorialSection>
  );
}
