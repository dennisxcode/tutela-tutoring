import { describe, it, expect } from "vitest";
import { prefersMarkdown } from "@/lib/accept";
import { markdownFor, notFoundMarkdown, llmsTxt } from "@/lib/agent";
import { SITE_URL } from "@/lib/site";
import { siteJsonLd } from "@/lib/schema";
import { content } from "@/lib/content";
import { guides } from "@/lib/guides";
import sitemap from "@/app/sitemap";

describe("Accept negotiation", () => {
  it("serves HTML unless Markdown was actually asked for", () => {
    // A browser, and the wildcard curl and crawlers send: neither is a request
    // for Markdown, and answering either with Markdown would break the site.
    expect(prefersMarkdown("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")).toBe(false);
    expect(prefersMarkdown("*/*")).toBe(false);
    expect(prefersMarkdown("")).toBe(false);
  });

  it("serves Markdown when it is asked for by name", () => {
    expect(prefersMarkdown("text/markdown")).toBe(true);
    expect(prefersMarkdown("text/markdown, */*;q=0.1")).toBe(true);
    expect(prefersMarkdown("text/x-markdown")).toBe(true);
    expect(prefersMarkdown("text/markdown;q=0.9, text/plain;q=0.5")).toBe(true);
  });

  it("respects an explicit preference for HTML over Markdown", () => {
    expect(prefersMarkdown("text/html;q=1.0, text/markdown;q=0.9")).toBe(false);
    expect(prefersMarkdown("text/markdown;q=0, text/html")).toBe(false);
  });
});

describe("Markdown twins", () => {
  const paths = ["/", "/program", "/guides", "/about", "/contact", "/privacy", "/terms"];

  it("covers every page linked from the site", () => {
    for (const path of paths) {
      const doc = markdownFor(path);
      expect(doc, path).toBeTruthy();
      expect(doc!.startsWith("# "), path).toBe(true);
      expect(doc, path).toContain(`${SITE_URL}/sitemap.xml`);
    }
  });

  it("covers every guide, and normalises trailing slashes", () => {
    for (const g of guides) {
      expect(markdownFor(`/guides/${g.slug}`)).toContain(g.title.zh);
      expect(markdownFor(`/guides/${g.slug}/`)).toContain(g.title.zh);
    }
  });

  it("returns nothing for a path that has no page", () => {
    expect(markdownFor("/not-a-page")).toBeNull();
    expect(markdownFor("/guides/not-a-guide")).toBeNull();
  });

  it("carries both languages, since the site is bilingual", () => {
    const home = markdownFor("/")!;
    expect(home).toContain(content.hero.title.zh);
    expect(home).toContain(content.hero.title.en);
  });
});

describe("404 body", () => {
  // A 404 is where crawlers land most often; it has to say where the real
  // content is rather than just that this isn't it.
  it("points at the sitemap, llms.txt and the main sections", () => {
    const body = notFoundMarkdown("/typo");
    expect(body).toContain("/typo");
    expect(body).toContain(`${SITE_URL}/sitemap.xml`);
    expect(body).toContain(`${SITE_URL}/llms.txt`);
    expect(body).toContain(`${SITE_URL}/guides`);
  });

  it("works without a path, for the prerendered HTML 404", () => {
    expect(notFoundMarkdown()).toContain(`${SITE_URL}/sitemap.xml`);
  });
});

describe("llms.txt", () => {
  const txt = llmsTxt();

  it("tells an agent when to reach for this site", () => {
    expect(txt).toContain("## When to use this");
    // Specific jobs, not marketing copy: the exam, the grades, the city.
    expect(txt).toMatch(/grade 3, 4, or 5|grades 3–5/);
    expect(txt).toContain("Montreal");
    expect(txt).toContain("admission exam");
  });

  it("says when NOT to send someone here", () => {
    expect(txt).toMatch(/Do \*\*not\*\* send someone here/);
  });

  it("explains how to call the site and where to stop", () => {
    expect(txt).toContain("Accept: text/markdown");
    expect(txt).toContain("There is no API");
    expect(txt).toContain(SITE_URL);
  });

  it("links every page a reader should know about", () => {
    for (const path of ["/", "/program", "/guides", "/about", "/contact"]) {
      expect(txt).toContain(`${SITE_URL}${path}`);
    }
    for (const g of guides) expect(txt).toContain(g.slug);
  });
});

describe("identity", () => {
  const org = siteJsonLd["@graph"][0] as Record<string, unknown>;

  it("declares an identity type a parser can recognise", () => {
    expect(org["@type"]).toContain("Organization");
    expect(org.name).toBe("Tutela");
    expect(org.url).toBe(`${SITE_URL}/`);
    expect(org.description).toBeTruthy();
  });

  it("carries the brand's other name, so either half of it resolves", () => {
    expect(org.alternateName).toContain("识途学辅");
  });

  // "Tutela" on its own is a common Latin word. If the page title never says
  // the brand name, a search for it has nothing of ours to rank.
  it("names the brand in the page title and description", () => {
    expect(content.meta.title.zh).toContain("Tutela");
    expect(content.meta.title.en).toContain("Tutela");
    expect(content.meta.description.zh).toContain("Tutela");
    expect(content.meta.description.en).toContain("Tutela");
  });
});

describe("trust anchors", () => {
  const pages = { about: content.about, contact: content.contactPage };

  it("gives /about and /contact real content in both languages", () => {
    for (const [name, page] of Object.entries(pages)) {
      for (const locale of ["zh", "en"] as const) {
        const text = [
          page.lede[locale],
          ...page.sections.flatMap((s) => [s.heading[locale], ...s.body.map((b) => b[locale])]),
        ].join(" ");
        expect(text.length, `${name}.${locale}`).toBeGreaterThan(500);
      }
    }
  });

  it("states the same name, area and contact everywhere", () => {
    const details = markdownFor("/contact")!;
    expect(details).toContain(content.org.areaServed.zh);
    expect(details).toContain(content.org.contactLine.zh);
    expect(markdownFor("/about")!).toContain(content.org.areaServed.zh);
  });

  it("keeps the trust-anchor pages in the sitemap", () => {
    const urls = sitemap().map((entry) => entry.url);
    expect(urls).toContain(`${SITE_URL}/about`);
    expect(urls).toContain(`${SITE_URL}/contact`);
  });

  // Claim safety (spec §5) reaches the new pages too.
  it("promises no outcome and no classroom", () => {
    for (const page of Object.values(pages)) {
      const all = page.sections
        .flatMap((s) => s.body.flatMap((b) => [b.zh, b.en]))
        .join(" ");
      expect(all).not.toMatch(/保证录取|guarantee[d]? admission|包过/i);
    }
    expect(content.about.sections.some((s) => s.body.some((b) => b.zh.includes("Zoom")))).toBe(true);
  });
});

describe("home page FAQ preview", () => {
  // Selected by matching the Chinese question, so a reorder or reword of the
  // FAQ would drop an entry here silently rather than loudly.
  it("finds every featured question in the FAQ", () => {
    for (const fragment of content.homeFaq.featured) {
      expect(content.faq.some((item) => item.q.zh.includes(fragment)), fragment).toBe(true);
    }
  });

  it("matches each fragment to a different question", () => {
    const matched = content.homeFaq.featured.map(
      (fragment) => content.faq.findIndex((item) => item.q.zh.includes(fragment)),
    );
    expect(new Set(matched).size).toBe(matched.length);
  });
});
