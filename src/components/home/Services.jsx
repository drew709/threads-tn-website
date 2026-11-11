import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionHeading, displayFont } from "./ui";

const services = [
  {
    title: "Embroidery",
    body: "Sharp stitching for polos, caps, towels, and staff gear — the finish that still looks right up close.",
    image: "/embroidery.png",
    imageAlt:
      "Embroidered gray Tullahoma Wildcats towel, a blue polo, and a black vest.",
    width: 503,
    height: 231,
    fit: "object-contain",
    frame: "bg-white",
  },
  {
    title: "Screen printing",
    body: "Bold prints for tees and spirit wear that hold up season after season.",
    image: "/tullys.jpg",
    imageAlt:
      "Terracotta t-shirts with a large circular Tully’s Coffee Co. screen print.",
    width: 2048,
    height: 1608,
    fit: "object-cover",
    frame: "bg-[#F7F1EA]",
  },
  {
    title: "Hats & headwear",
    body: "Team caps and branded hats, ready for schools, crews, and businesses.",
    image: "/hats.jpg",
    imageAlt:
      "Three Richardson caps with Wildcats lettering, a leather patch, and a bull logo.",
    width: 1200,
    height: 800,
    fit: "object-contain",
    frame: "bg-white",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-24 bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <SectionHeading
          eyebrow="What we do"
          title="Embroidery, screen printing, hats, and the store link."
          titleId="services-heading"
        >
          A short offer for each path. When you know which one you need, start
          a quote and tell us the garment, the quantity, and the date.
        </SectionHeading>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex flex-col overflow-hidden rounded-3xl bg-[#F4EFE8] ring-1 ring-[#1C1412]/10"
            >
              <div className={`flex h-44 items-center justify-center ${service.frame}`}>
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  width={service.width}
                  height={service.height}
                  loading="lazy"
                  decoding="async"
                  className={`h-full w-full ${service.fit} ${
                    service.fit === "object-contain" ? "p-3" : "object-center"
                  }`}
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-2xl text-[#1C1412]" style={displayFont}>
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#4A433E]">
                  {service.body}
                </p>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#8C1515] underline decoration-[#8C1515]/30 underline-offset-4 hover:decoration-[#8C1515] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C1515] focus-visible:ring-offset-2"
                >
                  Start a quote
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}

          <article className="flex flex-col justify-between rounded-3xl bg-[#231816] p-6 text-white ring-1 ring-[#231816]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                A different way to order
              </p>
              <h3 className="mt-3 text-2xl" style={displayFont}>
                Online team stores
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                We build and manage the store. Your group shares the link, and
                people order their own gear.
              </p>
            </div>
            <div className="mt-8 flex flex-col items-start gap-3">
              <Link
                to="/team-stores"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#231816]"
              >
                Shop team stores
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="text-sm font-semibold text-white/80 underline decoration-white/30 underline-offset-4 hover:text-white hover:decoration-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#231816]"
              >
                Want a store? Start a quote
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
