"use client";

import { useEffect, useState } from "react";

/**
 * The current time, or `null` until the component has mounted.
 *
 * Server render and first client render both see `null`, so hydration matches;
 * components show their evergreen state and upgrade to date-aware content a tick
 * later. That also means the statically-generated HTML never carries a baked-in
 * date, which is what keeps expired events off the page between deploys.
 */
export function useNow(): Date | null {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => setNow(new Date()), []);
  return now;
}
