/**
 * Business facts below are copied from the repo only:
 * - src/App.js footer: (931) 455-0079, orders@threadstn.com,
 *   106 W. Ogee Street, Tullahoma, TN, Facebook, and Instagram
 * - Footer and page copy: embroidery, screen printing, branded apparel,
 *   and service "across Tennessee"
 *
 * TODO(owner): postal code is not in the repo. Add address.postalCode
 *   for 106 W. Ogee Street, Tullahoma, TN.
 * TODO(owner): opening hours are not in the repo. Add openingHoursSpecification
 *   with the real weekly hours. Do not guess.
 * TODO(owner): Google Business Profile URL is not in the repo. The homepage
 *   only links to https://www.google.com/search?q=Threads+TN+Reviews which is
 *   a search page, not a profile. Add the real profile URL to sameAs
 *   (a maps.google.com?cid= or g.page link).
 * TODO(owner): do not add aggregateRating or review until the rating value,
 *   review count, and review text are copied from that profile. The Elfsight
 *   widget does not put those numbers in the repo.
 * TODO(owner): latitude and longitude are not in the repo. Add geo if you
 *   want map coordinates beyond the street address.
 */

export const SITE_ORIGIN = "https://www.threadstn.com";

export const BUSINESS_DESCRIPTION =
  "Custom embroidery, screen printing, and branded apparel for teams, schools, events, and businesses across Tennessee.";

export const SHARE_IMAGE = {
  path: "/og-image.jpg",
  width: 1200,
  height: 630,
  type: "image/jpeg",
  alt: "Threads TN logo for screen printing and embroidery in Tullahoma, Tennessee",
};

export const BUSINESS = {
  name: "Threads TN",
  slogan: "Custom Apparel That Represents Your Brand",
  description: BUSINESS_DESCRIPTION,
  email: "orders@threadstn.com",
  telephone: "+1-931-455-0079",
  streetAddress: "106 W. Ogee Street",
  addressLocality: "Tullahoma",
  addressRegion: "TN",
  addressCountry: "US",
  facebook: "https://www.facebook.com/ThreadsTN",
  instagram: "https://www.instagram.com/threads_tn",
};

const PRODUCTION_HOSTS = new Set(["www.threadstn.com", "threadstn.com"]);

export function absoluteUrl(path) {
  if (!path || path === "/") return `${SITE_ORIGIN}/`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${normalized}`;
}

export function robotsForHost(hostname) {
  if (PRODUCTION_HOSTS.has(hostname)) return "index, follow";
  // Vercel previews, localhost, and any other host should not be indexed.
  return "noindex, nofollow";
}

export function buildJsonLd({ title, description, path, crumb }) {
  const pageUrl = absoluteUrl(path);
  const businessId = `${SITE_ORIGIN}/#business`;
  const websiteId = `${SITE_ORIGIN}/#website`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;

  const business = {
    "@type": "ClothingStore",
    "@id": businessId,
    name: BUSINESS.name,
    slogan: BUSINESS.slogan,
    description: BUSINESS.description,
    url: absoluteUrl("/"),
    image: absoluteUrl(SHARE_IMAGE.path),
    logo: absoluteUrl("/Threadsmagnet.jpg"),
    email: BUSINESS.email,
    telephone: BUSINESS.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      addressCountry: BUSINESS.addressCountry,
    },
    areaServed: {
      "@type": "State",
      name: "Tennessee",
    },
    sameAs: [BUSINESS.facebook, BUSINESS.instagram],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS.telephone,
      email: BUSINESS.email,
      contactType: "customer service",
      areaServed: "Tennessee",
      availableLanguage: "English",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Custom apparel decoration",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Embroidery" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Screen Printing" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Hats & Headwear" },
        },
      ],
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": websiteId,
    url: absoluteUrl("/"),
    name: BUSINESS.name,
    description: BUSINESS.description,
    publisher: { "@id": businessId },
    inLanguage: "en-US",
  };

  const webpage = {
    "@type": path === "/contact" ? "ContactPage" : "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: title,
    description,
    isPartOf: { "@id": websiteId },
    about: { "@id": businessId },
    inLanguage: "en-US",
    primaryImageOfPage: absoluteUrl(SHARE_IMAGE.path),
  };

  const graph = [business, website, webpage];

  if (path !== "/") {
    webpage.breadcrumb = { "@id": breadcrumbId };
    graph.push({
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: crumb,
          item: pageUrl,
        },
      ],
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
