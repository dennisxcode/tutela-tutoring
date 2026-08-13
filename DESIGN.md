# Tutela — Design System & Brief

> **Hand this file to an AI (or a designer) before any visual work on Tutela.**
> It defines the brand, the look, the rules, and the things to never do. Paste it
> in full, then describe the specific screen/section you want.

---

## 0. The one-line brief
Tutela is admission-exam tutoring for Quebec secondary schools, run by students
who *just passed those exams*. The site should feel like a **prestigious printed
prospectus crossed with an architect's drawing** — warm, calm, editorial,
trustworthy. Premium through **typography, whitespace, and restraint**, not
through effects.

## 1. The core idea — "Le Passage"
The brand symbol is a **pointed arch = the threshold a child passes through into
secondary school.** Lean into it: the arch frames the hero, draws itself like a
blueprint, and recurs as a quiet motif. Every design decision should feel
*intentional and architectural*, never decorative or random.

## 2. Audience & language
- Chinese-speaking **parents** of primary grades 3–5 in **Montreal / Quebec**.
- **Simplified Chinese is the primary language** (default); English is a courtesy
  via a 中文 / EN toggle. Write Chinese that sounds native, warm, and clear — not
  translated. Every string is a `{ zh, en }` pair in `lib/content.ts`.

## 3. Logo & brand marks
- **Logo:** a single, unbroken **pointed-arch stroke** — nothing inside it, no
  dot, no keystone. Path (32×32 viewBox): `M7 26 Q7 10 16 5 Q25 10 25 26`,
  ~2.2 stroke, round caps, deep-green (`currentColor`). See `components/Logo.tsx`.
- **Wordmark:** "Tutela" in **Fraunces italic 600** (Latin display serif). The
  arch + wordmark sit together in the top bar and footer.
- **Favicon / app icon:** the arch in cream on a deep-green rounded tile
  (`app/icon.svg`).
- **Hero motif:** a large version of the arch that *draws itself on load* and
  frames the headline (`components/ArchDraw.tsx`).
- Never add extra elements to the mark to "make it mean more." The arch alone is
  the meaning. Keep it clean.

## 4. Colour (warm, one accent)
- **Cream `#faf7f2`** — primary background (the paper).
- **Deep Green Ink `#1f4733`** — text, headings, the logo, dark sections. This is
  the near-black; **never use `#000000`.**
- **Warm Charcoal `#2b2b28`** — body copy (often at 70–90% opacity).
- **Terracotta `#c0532b`** — the **only** accent hue. Reserved for the primary
  CTA, section numbers, and active/focus states. Muted, never neon. Do not spread
  it across dots, bullets, and rules — when accent is everywhere it means nothing.
- The accent ships as **three values of the same hue** (a tonal ramp, not a second
  accent). Pick by surface, for contrast:
  - `accent #c0532b` — CTA fills only (white on it = 4.65:1).
  - `accent-deep #b44a24` — small accent **text on cream/white** (4.98:1; the base
    accent is 4.35:1 there and fails AA).
  - `accent-light #e69a70` — accent text **on the deep-green panels** (4.59:1; the
    base accent is 2.25:1 there and fails badly).
- Borders/hairlines: deep-green ink at low alpha (`ink/10`–`ink/20`), never grey.
- **Body text minimum:** `text-body/70` on cream and `text-white/75` on ink. Below
  that, small text drops under WCAG AA — `body/60` and `white/40` measured 3.87:1
  and 3.07:1 before they were raised.

## 5. Typography (the biggest lever)
- **Headlines → `Noto Serif SC`** (Chinese serif, weight 500–700). This is what
  makes the site feel prestigious and literary. Use it for hero + every section
  title + key numbers/prices/dates.
- **Body → `Noto Sans SC`** (400/500/700). Readable, calm, ~comfortable measure
  inside a 42rem column.
- **Wordmark & section numbers (01, 02…) → `Fraunces` italic** (Latin only).
- **Hierarchy comes from weight, serif/sans contrast, and colour — not giant
  sizes.** Hero headline ~clamp(2.6rem, 7.5vw, 4.25rem); section titles ~2.5rem.
- **Banned fonts:** `Inter`; generic serifs (`Times New Roman`, `Georgia`,
  `Garamond`). Don't set Chinese text in Fraunces (Latin-only — keep it to
  "Tutela" and numerals).

## 6. Layout & structure
- One **42rem editorial column** (`max-w-content`), generous side padding,
  big vertical rhythm (`py-20`→`py-28`). One idea per section.
- **Numbered editorial sections (01–0N):** a Fraunces number + serif title + a
  hairline rule that *draws across* on entry. See `components/EditorialSection.tsx`.
- **Alternate surfaces** cream ↔ white between sections; one **full-bleed
  deep-green "manifesto"** section for the philosophy (the bold colour moment).
- **De-box everything.** Stats are big serif numbers on hairline dividers;
  subjects / pricing / dates / tutors are clean editorial lists with `divide-y`
  hairlines — *not* a grid of bordered cards.
- Hero uses a faint **blueprint grid** (`.blueprint`) + corner **registration
  ticks** for the architect's-drawing feel.
- Mobile-first: single column < 768px, no horizontal scroll, touch targets ≥44px.

## 7. Motion (restrained & meaningful — this matters most)
The signature is **the arch drawing itself** on load (one stroke), then the hero
text rising. Section headers reveal by **drawing their hairline rule**. The FAQ
**eases open**. That's it.
- **Banned:** generic "everything fades up on scroll" stagger stacks — that is the
  #1 AI-slop tell and must not be used. No bouncy springs, no parallax overload.
- Animate only `transform` / `opacity` (GPU). Always honour
  `prefers-reduced-motion` (show content immediately, no animation).
- **Anything that starts at `opacity: 0` needs a fallback that reveals it.**
  `IntersectionObserver` does not fire in backgrounded or prerendered tabs, and
  much of our traffic arrives through in-app browsers we can't test — without a
  timeout, that copy is invisible, not merely un-animated. See
  `EditorialSection.tsx`.

## 8. Components
- **CTA:** one repeated action — `联系我 / Contact me` — terracotta fill, rounded,
  flat (no glow). It appears in the nav, hero, and final section. It is the *only*
  terracotta button.
- **Chips:** outlined pills for quick facts (class size, subjects, 24/7 support).
- **FAQ:** accordion, chevron rotates, body height animates.
- **Contact:** WeChat QR (no backend) + a long-press/scan hint for mobile, since a
  parent on their phone can't scan their own screen.
- **Announcement ribbon:** slim deep-green bar pinned at top for time-sensitive
  dates. It reads from `content.dates.items`, shows the soonest **upcoming** event,
  and falls back to a standing line when nothing is scheduled.
- **Time-sensitive content never hardcodes a date in the markup.** Events carry an
  ISO date and expire on their own (`lib/dates.ts`); the clock comes from the
  client via `useNow`, because a statically-built page freezes `new Date()` at
  build time and would keep advertising a date that has passed.
- **Mobile CTA bar:** on phones the nav CTA is inside the burger menu, so a fixed
  bottom bar carries the action after the hero scrolls away, and hides again when
  the footer contact block is on screen.

## 9. Voice & content rules
- Speak as **"we"** everywhere. The founder, **Dennis**, appears **only** in the
  contact area; the CTA is the single personal touchpoint.
- We promise **24/7 question support** for kids — surface it (hero chip +
  credibility + FAQ).
- Trust comes from **specificity + honesty**, not hype: name real schools
  (Collège Jean-de-Brébeuf) and contests (AMC, Waterloo/CEMC), the exact schedule,
  the free trial (免费试听), and limited spots (名额有限).

## 10. Claim-safety (never break — enforced by tests)
- Math tutor: name **AMC** + **Waterloo (CEMC)** only; **no "#1" / 第一** superlatives.
- Location: keep **"确认中" / "being finalized"** — never claim a named school or imply
  institutional affiliation.
- Mock exams: **"即将推出" / "coming soon"** — not presented as finished.
- **Never fabricate** student results, enrolment numbers, testimonials, or **photos
  of real people.** No stock "tutor" faces. If there's no track record yet, lean on
  the tutors' own verifiable credentials.

## 11. Anti-patterns (the AI-slop checklist — avoid all)
- Generic fade-up scroll reveals · card-soup (3 equal bordered cards) ·
  random decorative shapes/blobs · `Inter` · pure black · neon/glow shadows ·
  gradient headlines · a second accent colour · emojis · fabricated stats/metrics ·
  fake testimonials · stock people photos · "Elevate / Seamless / Next-Gen" copy ·
  "Scroll to explore" / bouncing chevrons · generic placeholder names.

## 12. Stack (for implementers)
Next.js 14 (App Router) · TypeScript · Tailwind (tokens above) · Lucide (sparingly)
· fonts via `next/font` · Vitest. All copy in `lib/content.ts` as `{zh,en}`;
locale state in `lib/LanguageContext.tsx` (zh default, localStorage). No backend.
Deploy: Vercel (`webtutela.vercel.app`). Commits attributed to Dennis only.
