import React from "react";
import { Helmet } from "react-helmet-async";
import { SHARE_IMAGE, absoluteUrl, buildJsonLd, robotsForHost } from "../seo/site";

export default function Seo({ title, description, path, crumb }) {
  const url = absoluteUrl(path);
  const image = absoluteUrl(SHARE_IMAGE.path);
  const hostname = typeof window === "undefined" ? "www.threadstn.com" : window.location.hostname;
  const jsonLd = JSON.stringify(buildJsonLd({ title, description, path, crumb })).replace(
    /</g,
    "\\u003c"
  );

  return (
    <Helmet prioritizeSeoTags defer={false}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robotsForHost(hostname)} />
      <link rel="canonical" href={url} />
      <meta property="og:site_name" content="Threads TN" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:type" content={SHARE_IMAGE.type} />
      <meta property="og:image:width" content={String(SHARE_IMAGE.width)} />
      <meta property="og:image:height" content={String(SHARE_IMAGE.height)} />
      <meta property="og:image:alt" content={SHARE_IMAGE.alt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={SHARE_IMAGE.alt} />
      <script type="application/ld+json">{jsonLd}</script>
    </Helmet>
  );
}
