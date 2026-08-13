// Date logic for time-sensitive content.
//
// Two traps this avoids:
//
// 1. The site is statically generated, so a `new Date()` evaluated at build time
//    freezes forever — a page built in August believes it is August until the
//    next deploy. Everything here takes `now` as an argument; the caller passes
//    a client-side clock (see `useNow`).
//
// 2. Parsing "2026-09-05" with `new Date()` yields UTC midnight, which is the
//    previous evening in Montreal — events would expire a day early. So we never
//    parse: ISO dates sort and compare correctly as plain strings, and we
//    format `now` in the viewer's own timezone before comparing.

export type Dated = { iso: string };

/** `now` as a local-timezone YYYY-MM-DD string, comparable to an ISO date. */
export function toLocalIso(now: Date): string {
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

/** Events today or later, soonest first. An event stays up all day on its date. */
export function upcoming<T extends Dated>(items: readonly T[], now: Date): T[] {
  const today = toLocalIso(now);
  return items.filter((i) => i.iso >= today).sort((a, b) => a.iso.localeCompare(b.iso));
}

/** The soonest upcoming event, or null when nothing is scheduled. */
export function nextUpcoming<T extends Dated>(items: readonly T[], now: Date): T | null {
  return upcoming(items, now)[0] ?? null;
}

/**
 * Which prep stage the calendar is currently in, as an index into
 * `content.timeline.stages`. Mirrors the general pattern described in the
 * guides: foundation work through the school year, format practice over the
 * summer, exams in Sept–Oct, results around December.
 */
export function currentStage(now: Date): number {
  const month = now.getMonth() + 1;
  if (month >= 1 && month <= 6) return 0;
  if (month <= 8) return 1;
  if (month <= 10) return 2;
  return 3;
}
