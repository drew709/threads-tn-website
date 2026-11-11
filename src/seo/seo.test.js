import fs from "fs";
import path from "path";
import React, { act } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import Seo from "../components/Seo";
import { pageSeo } from "./pages";
import { BUSINESS, buildJsonLd, robotsForHost } from "./site";

const ROOT = path.join(__dirname, "../..");
const FORBIDDEN = [
  "openingHours",
  "openingHoursSpecification",
  "aggregateRating",
  "review",
  "postalCode",
  "priceRange",
  "37388",
];

function renderSeo(page) {
  globalThis.IS_REACT_ACT_ENVIRONMENT = true;
  const container = document.createElement("div");
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(
      <HelmetProvider>
        <Seo {...page} />
      </HelmetProvider>
    );
  });
  return {
    unmount() {
      act(() => root.unmount());
      container.remove();
    },
  };
}

afterEach(() => {
  document.head.innerHTML = "";
  document.title = "";
});

test("production hosts are indexable and every other host is not", () => {
  expect(robotsForHost("www.threadstn.com")).toBe("index, follow");
  expect(robotsForHost("threadstn.com")).toBe("index, follow");
  expect(robotsForHost("localhost")).toBe("noindex, nofollow");
  expect(robotsForHost("threads-tn.vercel.app")).toBe("noindex, nofollow");
});

test("each route has unique title, description, and canonical", () => {
  const titles = new Set();
  const descriptions = new Set();

  Object.values(pageSeo).forEach((page) => {
    const { unmount } = renderSeo(page);

    expect(document.title).toBe(page.title);
    expect(page.title.length).toBeLessThanOrEqual(70);
    expect(page.description.length).toBeGreaterThanOrEqual(80);
    expect(page.description.length).toBeLessThanOrEqual(170);

    const description = document.querySelector('meta[name="description"]');
    expect(description.getAttribute("content")).toBe(page.description);

    const canonical = document.querySelector('link[rel="canonical"]').getAttribute("href");
    const expected =
      page.path === "/" ? "https://www.threadstn.com/" : `https://www.threadstn.com${page.path}`;
    expect(canonical).toBe(expected);

    expect(document.querySelector('meta[property="og:url"]').getAttribute("content")).toBe(expected);
    expect(document.querySelector('meta[property="og:image"]').getAttribute("content")).toBe(
      "https://www.threadstn.com/og-image.jpg"
    );
    expect(document.querySelector('meta[name="twitter:card"]').getAttribute("content")).toBe(
      "summary_large_image"
    );

    const data = JSON.parse(document.querySelector('script[type="application/ld+json"]').textContent);
    const business = data["@graph"].find((node) => node["@type"] === "ClothingStore");
    expect(business.name).toBe("Threads TN");
    expect(business.telephone).toBe(BUSINESS.telephone);
    expect(business.address.streetAddress).toBe("106 W. Ogee Street");
    expect(business.address.addressLocality).toBe("Tullahoma");
    expect(business.sameAs).toEqual([
      "https://www.facebook.com/ThreadsTN",
      "https://www.instagram.com/threads_tn",
    ]);

    const serialized = JSON.stringify(data);
    FORBIDDEN.forEach((token) => {
      expect(serialized).not.toContain(token);
    });

    if (page.path === "/contact") {
      expect(data["@graph"].some((node) => node["@type"] === "ContactPage")).toBe(true);
    }
    if (page.path !== "/") {
      const crumbs = data["@graph"].find((node) => node["@type"] === "BreadcrumbList");
      expect(crumbs.itemListElement.map((item) => item.name)).toEqual(["Home", page.crumb]);
    }

    titles.add(page.title);
    descriptions.add(page.description);
    unmount();
    document.head.innerHTML = "";
  });

  expect(titles.size).toBe(Object.keys(pageSeo).length);
  expect(descriptions.size).toBe(Object.keys(pageSeo).length);
});

test("static fallback, robots, and sitemap match the route table", () => {
  const html = fs.readFileSync(path.join(ROOT, "public/index.html"), "utf8");
  const robots = fs.readFileSync(path.join(ROOT, "public/robots.txt"), "utf8");
  const sitemap = fs.readFileSync(path.join(ROOT, "public/sitemap.xml"), "utf8");

  expect(html).toContain('lang="en-US"');
  expect(html).toContain('name="theme-color" content="#8C1515"');
  expect(html).toContain(pageSeo.home.title.replace(/&/g, "&amp;"));
  expect(html).toContain(pageSeo.home.description);
  expect(html).toContain("https://www.threadstn.com/og-image.jpg");
  expect(html).toContain('rel="canonical"');
  expect(html).toContain(BUSINESS.telephone);
  expect(html).toContain(BUSINESS.streetAddress);

  FORBIDDEN.forEach((token) => {
    expect(html).not.toContain(token);
  });

  expect(robots).toContain("Sitemap: https://www.threadstn.com/sitemap.xml");
  expect(robots).toContain("Allow: /");

  Object.values(pageSeo).forEach((page) => {
    const loc = page.path === "/" ? "https://www.threadstn.com/" : `https://www.threadstn.com${page.path}`;
    expect(sitemap).toContain(`<loc>${loc}</loc>`);
  });

  const homeLd = buildJsonLd(pageSeo.home);
  expect(homeLd["@graph"].some((node) => node["@type"] === "BreadcrumbList")).toBe(false);
});
