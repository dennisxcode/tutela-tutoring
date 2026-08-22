"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { content, type Bi } from "@/lib/content";
import { NapCard } from "@/components/NapCard";

type Section = { heading: Bi; body: Bi[] };

// Shared shell for the two trust-anchor pages, /about and /contact: a tag, a
// title, a lede, bilingual prose sections, and then either the name/area/
// contact block or a couple of onward links.
export function ProsePage({
  tag,
  title,
  lede,
  sections,
  napTitle,
  ctas = [],
}: {
  tag: Bi;
  title: Bi;
  lede: Bi;
  sections: Section[];
  napTitle?: Bi;
  ctas?: { href: string; label: Bi }[];
}) {
  const { t } = useLanguage();
  return (
    <article className="mx-auto max-w-content px-5 py-14 sm:py-20">
      <Link href="/" className="text-sm font-medium text-accent-deep hover:underline">
        ← {t(content.nav.home)}
      </Link>
      <p className="mt-6 font-serif text-sm italic text-accent-deep">{t(tag)}</p>
      <h1 className="mt-2 font-serif text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-[2.5rem]">
        {t(title)}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-body/70">{t(lede)}</p>

      <div className="mt-12 space-y-10">
        {sections.map((s, i) => (
          <section key={i}>
            <h2 className="font-serif text-xl font-semibold text-ink sm:text-2xl">{t(s.heading)}</h2>
            <div className="mt-3 space-y-4">
              {s.body.map((p, j) => (
                <p key={j} className="text-base leading-relaxed text-body/85">
                  {t(p)}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* The footer carries these details on every page, so a page only
          repeats them when they are the reason someone came — /contact does,
          /about doesn't. */}
      {napTitle && (
        <section className="mt-12 rounded-2xl border border-ink/10 bg-white/60 p-6">
          <h2 className="font-serif text-lg font-semibold text-ink">{t(napTitle)}</h2>
          <div className="mt-4">
            <NapCard />
          </div>
        </section>
      )}

      {ctas.length > 0 && (
        <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-ink/10 pt-6 text-sm font-medium text-accent-deep">
          {ctas.map((cta) => (
            <Link key={cta.href} href={cta.href} className="hover:underline">
              {t(cta.label)} →
            </Link>
          ))}
        </div>
      )}
    </article>
  );
}
