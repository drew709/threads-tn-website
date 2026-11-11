import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionHeading, displayFont } from "./ui";

const audiences = [
  {
    title: "Schools & teams",
    body: "Spirit wear, uniforms, booster gear, and team stores — built around tight budgets and tighter calendars.",
  },
  {
    title: "Local businesses",
    body: "Polos, hats, workwear, and event shirts that actually represent your brand.",
  },
  {
    title: "Events & fundraisers",
    body: "Runs, tournaments, and community events, planned backward from your date.",
  },
];

export default function Audiences() {
  return (
    <section
      id="who-we-work-with"
      aria-labelledby="audiences-heading"
      className="scroll-mt-24 bg-[#F4EFE8]"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Who it’s for"
          title="Schools, businesses, and the events in between."
          titleId="audiences-heading"
        >
          Coaches, boosters, local businesses, and community events.
        </SectionHeading>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {audiences.map((audience) => (
            <Link
              key={audience.title}
              to="/contact"
              className="group flex flex-col border-t-4 border-[#8C1515] bg-white p-6 shadow-sm ring-1 ring-[#1C1412]/5 transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C1515] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4EFE8] motion-safe:transition-shadow"
            >
              <h3 className="text-2xl text-[#1C1412]" style={displayFont}>
                {audience.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#4A433E] sm:text-base">
                {audience.body}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#8C1515]">
                Start a quote
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="motion-safe:transition-transform motion-safe:group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
