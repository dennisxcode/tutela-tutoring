"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { CtaButton } from "@/components/CtaButton";

// On phones the only CTA after the hero used to be inside the burger menu, so a
// parent reading the middle of the page had nothing to act on. This bar appears
// once the hero is behind them and hides again when the real contact section is
// on screen, so it never doubles up with the footer CTA.
export function MobileCtaBar() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("join");
    let footerVisible = false;

    const io =
      footer && typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver(
            ([entry]) => {
              footerVisible = entry.isIntersecting;
              update();
            },
            { rootMargin: "0px 0px -20% 0px" },
          )
        : null;
    io?.observe(footer!);

    let raf = 0;
    function update() {
      setVisible(window.pageYOffset > 500 && !footerVisible);
    }
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
      io?.disconnect();
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-ink/15 bg-cream/95 backdrop-blur transition-transform duration-300 ease-out sm:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      // Hidden from assistive tech and the tab order while it's off screen.
      aria-hidden={!visible}
      {...({ inert: visible ? undefined : "true" } as Record<string, unknown>)}
    >
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-5 py-3">
        <span className="text-sm font-medium leading-snug text-body/85">
          {t(content.dates.trial.title)}
        </span>
        <CtaButton className="shrink-0 !px-5 !py-2.5" />
      </div>
    </div>
  );
}
