import { SectionHeading, NeedsConfirm, PrimaryLink, displayFont } from "./ui";

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
          first time. Where the shop hasn’t published a number, it stays blank.
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

        <div
          id="not-posted-yet"
          className="mt-10 rounded-3xl border border-dashed border-[#8C1515]/45 bg-white/70 p-5 sm:p-6"
        >
          <p>
            <span className="inline-block rounded bg-[#8C1515] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
              Not posted yet
            </span>
          </p>
          <h3 className="mt-3 text-xl text-[#1C1412]" style={displayFont}>
            Details the shop still needs to confirm
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#4A433E]">
            Left blank on purpose. These are not estimates, and they are not
            promises.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <NeedsConfirm>
              <span className="font-semibold">Proofs.</span> Whether a proof is
              always sent before we produce, and whether that proof is free.
            </NeedsConfirm>
            <NeedsConfirm>
              <span className="font-semibold">Turnaround.</span> A typical
              timeline, and whether rush orders are possible.
            </NeedsConfirm>
            <NeedsConfirm>
              <span className="font-semibold">Shipping and delivery.</span>{" "}
              Options beyond the shop at 106 W. Ogee Street, including whether
              pickup is the usual way to get an order.
            </NeedsConfirm>
            <NeedsConfirm>
              <span className="font-semibold">Replies.</span> How soon a quote
              request gets an answer.
            </NeedsConfirm>
            <NeedsConfirm>
              <span className="font-semibold">Hours.</span> When the shop is
              open.
            </NeedsConfirm>
            <NeedsConfirm>
              <span className="font-semibold">Walk-ins.</span> Whether you can
              stop by without an appointment.
            </NeedsConfirm>
          </ul>
        </div>
      </div>
    </section>
  );
}
