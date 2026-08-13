"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { SegmentedArch } from "@/components/SegmentedArch";

// Without this, a mistyped URL served Next's default English 404 — off-brand and
// in the wrong language for the audience.
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
    </div>
  );
}
