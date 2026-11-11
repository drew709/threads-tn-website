import { useLayoutEffect } from "react";

/**
 * public/index.html includes homepage title, social tags, and JSON-LD so
 * crawlers that do not run JavaScript still see them. Helmet then writes
 * the tags for the current route. Removing the static copies avoids
 * duplicate descriptions, which search engines may treat as the first one.
 */
export default function DropStaticSeoFallback() {
  useLayoutEffect(() => {
    document.querySelectorAll("[data-seo-fallback]").forEach((node) => node.remove());
  }, []);

  return null;
}
