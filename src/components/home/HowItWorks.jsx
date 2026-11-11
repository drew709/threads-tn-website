import { SectionHeading, PrimaryLink, displayFont } from "./ui";

/*
  Owner-only. Do not render this list. Drew still needs to confirm it
  before any of it is published:

  - Proofs. Whether a proof is always sent before production, and whether it is free.
  - Turnaround. A typical timeline, and whether rush orders are possible.
  - Shipping and delivery. Options beyond 106 W. Ogee Street, including whether pickup is the usual way to get an order.
  - Replies. How soon a quote request gets an answer.
  - Hours. When the shop is open.
  - Walk-ins. Whether someone can stop by without an appointment.

  Also not published, because they are not in the repo: years in business,
  order counts, schools served, minimums, a city-by-city service area, and ZIP.
*/

const steps = [
  {
    number: "01",
    title: "Tell us what you need",
    body: "Garment, quantity, sizes, the date you need it, and a logo or a rough idea. A photo of a sample is enough to start.",
  },
  {
    number: "02",
    title: "Get a price and a recommendation",
    body: "We’ll suggest a decoration method and reply with pricing before anything is produced.",
  },
  {
    number: "03",
    title: "We produce the order",
    body: "Embroidery and screen printing for the order you requested. If the date is tight, call and we’ll tell you what’s possible.",
  },
  {
    number: "04",
    title: "The shop is on Ogee Street",
    body: "Threads TN is at 106 W. Ogee Street, Tullahoma, TN. Ask us how you want to receive the order when you request the quote.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="process-heading"
      className="scroll-mt-24 bg-[#EFE6DA]"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <SectionHeading
          eyebrow="How an order works"
          title="What happens after you hit Get a Quote."
          titleId="process-heading"
        >
          A plain path for a booster, a coach, or a business ordering for the
          first time.
        </SectionHeading>

        <ol className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.number}
              className="flex flex-col rounded-3xl bg-white p-5 ring-1 ring-[#1C1412]/10"
            >
              <span className="font-mono text-xs font-semibold tracking-[0.18em] text-[#8C1515]">
                {step.number}
              </span>
              <h3
                className="mt-3 text-2xl leading-tight text-[#1C1412]"
                style={displayFont}
              >
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#4A433E]">
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-8">
          <PrimaryLink to="/contact">Get a Quote</PrimaryLink>
        </div>
      </div>
    </section>
  );
}
