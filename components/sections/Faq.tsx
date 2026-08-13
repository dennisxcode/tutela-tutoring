"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { EditorialSection } from "@/components/EditorialSection";

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonId = useId();

  return (
    <div className="border-b border-ink/10">
      <h3>
        <button
          type="button"
          id={buttonId}
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-3 py-5 text-left font-semibold text-ink"
        >
          <span>{q}</span>
          <ChevronDown
            size={18}
            className={`shrink-0 text-ink/60 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            aria-hidden
          />
        </button>
      </h3>
      {/* The collapsed panel stayed in the accessibility tree, so screen-reader
          users heard every answer whether or not they opened it. `inert` takes
          it out of the tree and the tab order while keeping the height
          transition and leaving the text in the HTML for crawlers.

          React 18 doesn't know `inert`: a boolean gets dropped and an empty
          string reads as false, so only a non-empty string sets it. React 18.3
          warns about the string form while confirming it works — the warning
          disappears under React 19, which accepts `inert={true}`. Never pass
          the string "false" here, which would read as true. */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!open}
        {...({ inert: open ? undefined : "true" } as Record<string, unknown>)}
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <p className="pb-5 text-base leading-relaxed text-body/85">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function Faq({ num = "06" }: { num?: string }) {
  const { t, locale } = useLanguage();
  const title = locale === "zh" ? "常见问题" : "FAQ";
  return (
    <EditorialSection id="faq" num={num} title={title}>
      <div className="border-t border-ink/10">
        {content.faq.map((item, i) => (
          <FaqItem key={i} q={t(item.q)} a={t(item.a)} />
        ))}
      </div>
    </EditorialSection>
  );
}
