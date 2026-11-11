import { SectionHeading, displayFont } from "./ui";

const services = [
  {
    title: "Embroidery",
    body: "Polos, caps, and staff gear.",
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
    body: "Tees and spirit wear.",
    image: "/tullys.jpg",
    imageAlt: "Terracotta t-shirts with a Tully’s Coffee Co. screen print.",
    width: 1400,
    height: 1099,
    fit: "object-cover",
    frame: "bg-[#F7F1EA]",
  },
  {
    title: "Hats & headwear",
    body: "Team caps and branded hats.",
    image: "/hats.jpg",
    imageAlt:
      "Three Richardson caps: a white Wildcats trucker hat, a gray hat with an Elite Roofing patch, and a tan hat with a bull logo.",
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
          title="Screen printing, embroidery, and branded apparel."
          titleId="services-heading"
        >
          For schools, teams, businesses, and events.
        </SectionHeading>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
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
              <div className="p-5">
                <h3 className="text-2xl text-[#1C1412]" style={displayFont}>
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4A433E]">
                  {service.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
