import { describe, it, expect } from "vitest";
import { toLocalIso, upcoming, nextUpcoming, currentStage } from "@/lib/dates";

const events = [
  { iso: "2026-09-05" },
  { iso: "2026-07-10" },
  { iso: "2026-12-01" },
];

describe("event expiry", () => {
  it("drops events whose date has passed", () => {
    const now = new Date(2026, 7, 13); // 13 Aug 2026
    expect(upcoming(events, now).map((e) => e.iso)).toEqual(["2026-09-05", "2026-12-01"]);
  });

  it("keeps an event for the whole of its own day", () => {
    const morning = new Date(2026, 8, 5, 8, 0);
    const night = new Date(2026, 8, 5, 23, 30);
    expect(nextUpcoming(events, morning)?.iso).toBe("2026-09-05");
    expect(nextUpcoming(events, night)?.iso).toBe("2026-09-05");
  });

  it("returns null once everything is in the past, so callers fall back", () => {
    expect(nextUpcoming(events, new Date(2027, 0, 1))).toBeNull();
  });

  it("returns null for an empty schedule rather than throwing", () => {
    expect(nextUpcoming([], new Date(2026, 7, 13))).toBeNull();
  });

  it("orders by date regardless of how events are listed", () => {
    const now = new Date(2026, 0, 1);
    expect(upcoming(events, now).map((e) => e.iso)).toEqual([
      "2026-07-10",
      "2026-09-05",
      "2026-12-01",
    ]);
  });

  it("compares in local time, so an event never expires a day early", () => {
    // 23:00 local on the 4th is already the 5th in UTC. Parsing the ISO string
    // with `new Date()` would have made this event look like it was over.
    const lateEve = new Date(2026, 8, 4, 23, 0);
    expect(toLocalIso(lateEve)).toBe("2026-09-04");
    expect(nextUpcoming(events, lateEve)?.iso).toBe("2026-09-05");
  });
});

describe("prep stage", () => {
  it("maps the calendar onto the four prep stages", () => {
    expect(currentStage(new Date(2026, 2, 1))).toBe(0); // March — foundations
    expect(currentStage(new Date(2026, 7, 13))).toBe(1); // August — format practice
    expect(currentStage(new Date(2026, 9, 2))).toBe(2); // October — exam window
    expect(currentStage(new Date(2026, 11, 20))).toBe(3); // December — results
  });

  it("covers every month", () => {
    for (let m = 0; m < 12; m++) {
      const stage = currentStage(new Date(2026, m, 15));
      expect(stage).toBeGreaterThanOrEqual(0);
      expect(stage).toBeLessThan(4);
    }
  });
});
