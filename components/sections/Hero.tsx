"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { CtaButton } from "@/components/CtaButton";
import { SegmentedArch } from "@/components/SegmentedArch";
import { FactChips } from "@/components/FactChips";

export function Hero() {
  const { t } = useLanguage();
  return (
    <section className="blueprint relative overflow-hidden bg-cream">
      {/* drafting registration ticks */}
      <span className="absolute left-5 top-5 h-3.5 w-3.5 border-l border-t border-ink/20" aria-hidden />
      <span className="absolute right-5 top-5 h-3.5 w-3.5 border-r border-t border-ink/20" aria-hidden />
      <span className="absolute bottom-5 left-5 h-3.5 w-3.5 border-b border-l border-ink/20" aria-hidden />
      <span className="absolute bottom-5 right-5 h-3.5 w-3.5 border-b border-r border-ink/20" aria-hidden />

      {/* Sized to its content rather than 92vh: the facts below the headline are
          the reason to keep reading, so they have to be on screen with it. */}
      <div className="relative mx-auto flex max-w-content flex-col items-center justify-center px-5 py-20 text-center sm:py-24">
        {/* the arch, drawn on load, framing the headline */}
        <SegmentedArch
          trigger="load"
          strokeWidth={3}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[38rem] w-auto -translate-x-1/2 -translate-y-[54%] text-ink/[0.28]"
        />

        <div className="relative">
          <p
            className="rise mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-accent-deep"
            style={{ animationDelay: "300ms" }}
          >
            {t(content.hero.tag)}
          </p>
          <h1
            className="rise mx-auto max-w-[14ch] font-serif text-[clamp(2.4rem,7vw,4rem)] font-semibold leading-[1.08] tracking-tight text-ink"
            style={{ animationDelay: "450ms" }}
          >
            {t(content.hero.title)}
          </h1>
          <p
            className="rise mx-auto mt-6 max-w-md text-lg leading-relaxed text-body/80"
            style={{ animationDelay: "600ms" }}
          >
            {t(content.hero.subtitle)}
          </p>

          <div
            className="rise mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6"
            style={{ animationDelay: "750ms" }}
          >
            <CtaButton className="!px-6 !py-3 !text-base" />
            <Link
              href="/program"
              className="group inline-flex items-center gap-1.5 text-base font-semibold text-ink underline-offset-4 transition hover:text-accent-deep hover:underline"
            >
              {t(content.ui.seePricing)}
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </div>

          <p
            className="rise mx-auto mt-5 max-w-sm text-sm leading-relaxed text-body/85"
            style={{ animationDelay: "820ms" }}
          >
            {t(content.hero.trialPromise)}
          </p>

          <div className="rise" style={{ animationDelay: "900ms" }}>
            <FactChips className="mt-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
