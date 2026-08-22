// Accept-header parsing for the Markdown/HTML negotiation in middleware.ts.
// Kept out of the middleware itself so it can be unit-tested without an edge
// runtime — getting this wrong in either direction is invisible in a browser
// and breaks every automated reader.

/**
 * Highest q-value the Accept header gives a media type. `wildcards` decides
 * whether a wildcard range counts: it does when asking how badly the caller
 * wants HTML, and it does not when asking whether Markdown was requested. A
 * bare wildcard Accept — curl's default, and what many crawlers send — is the
 * absence of a preference, not a request for Markdown.
 */
export function quality(accept: string, type: string, wildcards = false): number {
  const group = `${type.split("/")[0]}/*`;
  let best = 0;
  for (const part of accept.split(",")) {
    const [raw, ...params] = part.trim().split(";");
    const candidate = raw.trim().toLowerCase();
    const matches =
      candidate === type || (wildcards && (candidate === group || candidate === "*/*"));
    if (!matches) continue;
    const q = params
      .map((p) => /^\s*q=([0-9.]+)\s*$/i.exec(p))
      .find(Boolean)?.[1];
    best = Math.max(best, q === undefined ? 1 : Number(q) || 0);
  }
  return best;
}

/** True when the caller explicitly asked for Markdown, and wants it over HTML. */
export function prefersMarkdown(accept: string): boolean {
  const md = Math.max(quality(accept, "text/markdown"), quality(accept, "text/x-markdown"));
  return md > 0 && md >= quality(accept, "text/html", true);
}
