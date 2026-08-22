"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { notFoundMarkdown } from "@/lib/agent";
import { SegmentedArch } from "@/components/SegmentedArch";

// Without this, a mistyped URL served Next's default English 404 — off-brand and
// in the wrong language for the audience.
//
// The route also answers automated readers. Next already gives this page a real
// 404 status (a 200 would tell a crawler every path on the site exists), and
// middleware.ts serves the Markdown version below to anything asking for
// `text/markdown`. The same Markdown is folded into the HTML, so a crawler that
// only ever parses HTML still gets pointed at the sitemap and llms.txt.
export default function NotFound() {
  const { t } = useLanguage();
  return (
    <div className="mx-auto flex max-w-content flex-col items-center px-5 py-28 text-center sm:py-36">
      <SegmentedArch trigger="load" strokeWidth={2} className="mb-8 h-16 w-auto text-ink/30" />
      <h1 className="font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {t(content.notFound.title)}
      </h1>
      <p className="mt-4 max-w-sm text-base leading-relaxed text-body/80">
        {t(content.notFound.body)}
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
      >
        {t(content.notFound.home)}
      </Link>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-accent-deep">
        <Link href="/program" className="hover:underline">
          {t(content.nav.program)}
        </Link>
        <span aria-hidden className="text-body/30">
          ·
        </span>
        <Link href="/guides" className="hover:underline">
          {t(content.nav.guides)}
        </Link>
        <span aria-hidden className="text-body/30">
          ·
        </span>
        <Link href="/about" className="hover:underline">
          {t(content.nav.about)}
        </Link>
        <span aria-hidden className="text-body/30">
          ·
        </span>
        <Link href="/contact" className="hover:underline">
          {t(content.nav.contactPage)}
        </Link>
      </div>

      <details className="mt-14 w-full max-w-lg text-left">
        <summary className="cursor-pointer text-xs text-body/50 transition hover:text-body/80">
          {t(content.notFound.agentsTitle)}
        </summary>
        <pre className="mt-3 overflow-x-auto rounded-xl border border-ink/10 bg-white/60 p-4 text-left font-mono text-[11px] leading-relaxed text-body/70">
          {notFoundMarkdown()}
        </pre>
      </details>
    </div>
  );
}
