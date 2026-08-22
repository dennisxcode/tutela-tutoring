import { NextResponse, type NextRequest } from "next/server";
import { markdownFor, notFoundMarkdown } from "@/lib/agent";
import { prefersMarkdown } from "@/lib/accept";

// Content negotiation for automated readers. An agent that asks for
// `text/markdown` — or fetches `<path>.md` — gets the Markdown twin of the page
// from lib/agent.ts instead of a React-rendered document it would have to strip
// tags out of. A path that doesn't exist gets Markdown too, with a real 404
// status, so a crawler can tell a typo from a page.
//
// Every response that goes through here is negotiable on Accept, so every
// response advertises `Vary: Accept, Accept-Encoding`. Without it a CDN can
// hand the cached HTML to an agent asking for Markdown, or the reverse,
// depending on which variant happened to land in the cache first.

const VARY = "Accept, Accept-Encoding";

function markdownResponse(body: string, status: number, distinctUrl: boolean) {
  const headers = new Headers({
    "content-type": "text/markdown; charset=utf-8",
    vary: VARY,
    "cache-control": status === 200 ? "public, max-age=0, must-revalidate" : "no-store",
  });
  // A "<path>.md" URL is a second address for a page that already has one, so
  // it stays out of the index; the negotiated response at the canonical URL is
  // the same page in another form and carries no such header.
  if (distinctUrl) headers.set("x-robots-tag", "noindex");
  return new NextResponse(body, { status, headers });
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const explicitMd = pathname.endsWith(".md");
  // "/index.md" is the conventional Markdown twin of the home page.
  const path = explicitMd ? pathname.slice(0, -3).replace(/\/index$/, "/") || "/" : pathname;

  if (explicitMd || prefersMarkdown(request.headers.get("accept") ?? "")) {
    const doc = markdownFor(path);
    return doc
      ? markdownResponse(doc, 200, explicitMd)
      : markdownResponse(notFoundMarkdown(path), 404, explicitMd);
  }

  // The HTML variant. Appended rather than assigned, because Next varies its
  // document routes on their own RSC headers and dropping those would let a
  // cache answer a document request with a React payload. Next has the last
  // word on Vary for prerendered documents and currently overwrites this — the
  // negotiation is still safe, because middleware runs ahead of any shared
  // cache, so a Markdown request is answered here and never reaches a cached
  // HTML entry.
  const response = NextResponse.next();
  response.headers.append("Vary", VARY);
  return response;
}

export const config = {
  // Every document route, including paths that resolve to the 404 page. Next's
  // own assets and the static files in /public are left alone — they are not
  // negotiable, and adding Vary to them would only fragment the CDN cache.
  matcher: [
    "/((?!_next/|.*\\.(?:png|jpe?g|gif|svg|ico|webp|avif|css|js|mjs|map|txt|xml|json|webmanifest|woff2?|ttf)$).*)",
  ],
};
