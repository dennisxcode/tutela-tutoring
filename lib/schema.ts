import { content } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

// Structured data, in one place. The site-wide graph names the organisation and
// the website; each trust-anchor page adds a WebPage node pointing back at it.
// The identity node is typed as both Organization and EducationalOrganization:
// the specific type is the accurate one, and the general type is what parsers
// look for when deciding what kind of thing a site is.

export const ORG_ID = `${SITE_URL}/#organization`;
export const SITE_ID = `${SITE_URL}/#website`;

const organization = {
  "@type": ["Organization", "EducationalOrganization"],
  "@id": ORG_ID,
  name: "Tutela",
  alternateName: ["识途学辅", "Tutela MTL"],
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/icon.svg`,
  description: content.meta.description.en,
  // No street address: classes are online, so the honest signal is the region
  // we serve rather than a place a parent could turn up at.
  address: {
    "@type": "PostalAddress",
    addressLocality: "Montréal",
    addressRegion: "QC",
    addressCountry: "CA",
  },
  areaServed: [
    { "@type": "City", name: "Montréal" },
    { "@type": "AdministrativeArea", name: "Quebec, Canada" },
  ],
  knowsLanguage: ["zh-Hans", "en", "fr"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "admissions",
    url: `${SITE_URL}/contact`,
    availableLanguage: ["zh-Hans", "en", "fr"],
  },
  makesOffer: content.pricing.rows.map((row) => ({
    "@type": "Offer",
    name: row.label.en,
    price: row.price.replace("$", ""),
    priceCurrency: "CAD",
    url: `${SITE_URL}/program`,
  })),
};

const website = {
  "@type": "WebSite",
  "@id": SITE_ID,
  url: `${SITE_URL}/`,
  name: "Tutela",
  alternateName: "识途学辅",
  description: content.meta.description.zh,
  inLanguage: ["zh-CN", "en"],
  publisher: { "@id": ORG_ID },
};

export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [organization, website],
};

/** A WebPage node for one of the trust-anchor pages. */
export function pageJsonLd(opts: {
  type: "AboutPage" | "ContactPage";
  path: string;
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": opts.type,
    "@id": `${SITE_URL}${opts.path}#page`,
    url: `${SITE_URL}${opts.path}`,
    name: opts.name,
    description: opts.description,
    inLanguage: "zh-CN",
    isPartOf: { "@id": SITE_ID },
    about: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
  };
}
