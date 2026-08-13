import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent, within } from "@testing-library/react";
import { LanguageProvider } from "@/lib/LanguageContext";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { KeyDates } from "@/components/sections/KeyDates";
import { Timeline } from "@/components/sections/Timeline";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { content } from "@/lib/content";
import { upcoming } from "@/lib/dates";

function withProvider(ui: React.ReactNode) {
  return render(<LanguageProvider>{ui}</LanguageProvider>);
}

// These assert the branch that matches the shipped schedule, so adding a real
// future event to content.ts changes which branch runs without failing the
// suite — a content edit should never break a test that isn't about content.
const scheduled = upcoming(content.dates.items, new Date());

describe("time-sensitive content", () => {
  beforeEach(() => localStorage.clear());

  it("shows the next event, or the standing line when nothing is scheduled", () => {
    withProvider(<AnnouncementBar />);
    const expected = scheduled.length
      ? new RegExp(scheduled[0].date.zh)
      : new RegExp(content.announcement.evergreen.zh);
    expect(screen.getByText(expected)).toBeInTheDocument();
  });

  it("never shows an event whose date has passed", () => {
    withProvider(<AnnouncementBar />);
    const past = content.dates.items.filter((i) => !scheduled.includes(i));
    past.forEach((p) => {
      expect(screen.queryByText(new RegExp(p.label.zh))).not.toBeInTheDocument();
    });
  });

  it("always offers a route forward, dated or not", () => {
    withProvider(<KeyDates />);
    if (scheduled.length) {
      expect(screen.getByText(content.dates.title.zh)).toBeInTheDocument();
    } else {
      expect(screen.getByText(content.dates.trial.title.zh)).toBeInTheDocument();
      expect(screen.getByText(content.dates.standingTitle.zh)).toBeInTheDocument();
    }
    content.enrol.steps.forEach((s) => {
      expect(screen.getByText(s.zh)).toBeInTheDocument();
    });
  });

  it("marks exactly one timeline stage as current", () => {
    const { container } = withProvider(<Timeline />);
    expect(container.querySelectorAll('[aria-current="step"]')).toHaveLength(1);
  });
});

describe("hero", () => {
  beforeEach(() => localStorage.clear());

  it("puts the concrete facts on screen with the headline", () => {
    withProvider(<Hero />);
    content.facts.forEach((f) => {
      expect(screen.getByText(f.zh)).toBeInTheDocument();
    });
  });
});

describe("faq accessibility", () => {
  beforeEach(() => localStorage.clear());

  it("hides collapsed answers from assistive tech and reveals them on open", () => {
    const { container } = withProvider(<Faq />);
    const first = content.faq[0];
    const button = screen.getByRole("button", { name: new RegExp(first.q.zh) });

    expect(button).toHaveAttribute("aria-expanded", "false");
    const panel = container.querySelector(`#${CSS.escape(button.getAttribute("aria-controls")!)}`)!;
    expect(panel).toHaveAttribute("aria-hidden", "true");
    expect(panel).toHaveAttribute("inert");
    // The answer stays in the HTML for crawlers even while hidden.
    expect(within(panel as HTMLElement).getByText(first.a.zh)).toBeInTheDocument();

    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(panel).not.toHaveAttribute("inert");
    expect(panel).toHaveAttribute("aria-hidden", "false");
  });

  it("gives every answer panel a label pointing back at its question", () => {
    const { container } = withProvider(<Faq />);
    const panels = container.querySelectorAll('[role="region"]');
    expect(panels).toHaveLength(content.faq.length);
    panels.forEach((p) => expect(p.getAttribute("aria-labelledby")).toBeTruthy());
  });
});
