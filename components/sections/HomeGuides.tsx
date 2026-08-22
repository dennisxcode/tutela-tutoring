"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { guides } from "@/lib/guides";
import { EditorialSection } from "@/components/EditorialSection";

// The guides, named and described on the landing page rather than left to the
// nav. They are what a parent can take away without contacting anyone, and the
// pages most likely to be found by search — linking them from here is how a
// visitor who arrived at the home page finds them at all.
export function HomeGuides({ num = "04" }: { num?: string }) {
  const { t } = useLanguage();
  return (
    <EditorialSection
      id="guides"
      num={num}
      title={t(content.homeGuides.title)}
      intro={t(content.homeGuides.intro)}
      surface
    >
      <ul className="divide-y divide-ink/10 border-y border-ink/10">
        {guides.map((g) => (
          <li key={g.slug}>
            <Link href={`/guides/${g.slug}`} className="group block py-5">
              <h3 className="font-serif text-lg font-semibold text-ink transition group-hover:text-accent-deep">
                {t(g.title)}
              </h3>
              <p className="mt-1.5 text-base leading-relaxed text-body/80">{t(g.description)}</p>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/guides"
        className="mt-6 inline-block text-sm font-medium text-accent-deep hover:underline"
      >
        {t(content.homeGuides.more)} →
      </Link>
    </EditorialSection>
  );
}
