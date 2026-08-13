"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { useNow } from "@/lib/useNow";
import { nextUpcoming } from "@/lib/dates";

// Slim ribbon at the top of every page. It shows the soonest upcoming dated
// event; once that date passes the event drops out on its own and the standing
// free-trial line takes over, so the bar can never advertise a dead date.
export function AnnouncementBar() {
  const { t } = useLanguage();
  const now = useNow();
  const next = now ? nextUpcoming(content.dates.items, now) : null;

  return (
    <div className="bg-ink text-cream">
      <a
        href="/#dates"
        className="mx-auto flex max-w-content items-center justify-center gap-2 px-5 py-2 text-center text-[13px] font-medium tracking-wide transition hover:opacity-90"
      >
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cream/60" aria-hidden />
        {next ? `${t(next.date)} · ${t(next.label)}` : t(content.announcement.evergreen)}
      </a>
    </div>
  );
}
