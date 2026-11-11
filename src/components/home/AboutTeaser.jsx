import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { displayFont } from "./ui";

export default function AboutTeaser() {
  return (
    <section
      id="our-story"
      aria-labelledby="story-heading"
      className="scroll-mt-24 bg-[#F4EFE8]"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:gap-14">
        <figure className="overflow-hidden rounded-[1.6rem] bg-white shadow-sm ring-1 ring-[#1C1412]/10">
          <img
            src="/about/family.jpg"
            alt="Threads TN family standing together in front of a painted brick wall"
            width="1440"
            height="1389"
            loading="lazy"
            decoding="async"
            className="h-[320px] w-full object-cover object-top sm:h-[420px]"
          />
          <figcaption className="px-5 py-4 text-center text-sm text-[#5c534c]">
            Three families, one mission — serving our community through custom
            apparel.
          </figcaption>
        </figure>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8C1515]">
            The shop
          </p>
          <h2
            id="story-heading"
            className="mt-3 text-balance text-3xl leading-tight text-[#1C1412] sm:text-4xl"
            style={displayFont}
          >
            Built by teachers, coaches, and former educators.
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-[#4A433E] sm:text-lg">
            We’re a family-rooted shop in Tullahoma. We know what schools and
            teams need — and what they don’t have time for.
          </p>
          <Link
            to="/about"
            className="mt-6 inline-flex items-center gap-1.5 font-semibold text-[#8C1515] underline decoration-[#8C1515]/30 underline-offset-4 hover:decoration-[#8C1515] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C1515] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4EFE8]"
          >
            Read our story
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
