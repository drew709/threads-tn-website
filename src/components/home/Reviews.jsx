import { useEffect } from "react";
import { SectionHeading, SHOP } from "./ui";

export default function Reviews() {
  useEffect(() => {
    if (document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      return undefined;
    }

    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="scroll-mt-24 bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Reviews"
          title="Google reviews"
          titleId="reviews-heading"
        >
          Real Google reviews for the Tullahoma shop, not quotes we wrote
          ourselves.
        </SectionHeading>

        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-[#1C1412]/10 bg-white p-4 shadow-sm sm:p-6">
          <div
            className="elfsight-app-7852b421-f557-483d-a93d-027c757f0fa0"
            data-elfsight-app-lazy
          />
        </div>

        <a
          href={SHOP.googleReviews}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-[#8C1515] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#5c0e0e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C1515] focus-visible:ring-offset-2"
        >
          Read more reviews on Google
        </a>
      </div>
    </section>
  );
}
