import { SectionHeading } from "./ui";

const pieces = [
  {
    src: "/tullys.jpg",
    alt: "Two folded terracotta Comfort Colors t-shirts with a Tully’s Coffee Co. screen print, on a wood floor.",
    width: 2048,
    height: 1608,
    label: "Screen printing",
    caption: "Finished tees.",
    frame: "bg-[#E7D9CC]",
  },
  {
    src: "/hats.jpg",
    alt: "Three Richardson caps: a white Wildcats trucker hat, a gray hat with an Elite Roofing patch, and a tan hat with a bull logo.",
    width: 1200,
    height: 800,
    label: "Hats & headwear",
    caption: "Caps and branded hats.",
    frame: "bg-white",
  },
  {
    src: "/embroidery.png",
    alt: "Embroidered gray Tullahoma Wildcats towel, a blue polo, and a black vest with a stitched mark.",
    width: 503,
    height: 231,
    label: "Embroidery",
    caption: "Polos, towels, and outerwear.",
    frame: "bg-white",
  },
];

export default function WorkGallery() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-24 bg-[#F4EFE8]"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <SectionHeading
          eyebrow="From the shop"
          title="Real jobs, not stock photos."
          titleId="work-heading"
        >
          Screen printing, embroidery, and headwear from jobs this shop has
          already done.
        </SectionHeading>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {pieces.map((piece) => (
            <figure
              key={piece.src}
              className="overflow-hidden rounded-3xl ring-1 ring-[#1C1412]/10"
            >
              <div className={`flex h-56 items-center justify-center sm:h-64 ${piece.frame}`}>
                <img
                  src={piece.src}
                  alt={piece.alt}
                  width={piece.width}
                  height={piece.height}
                  loading="lazy"
                  decoding="async"
                  className={`h-full w-full ${
                    piece.src.endsWith("tullys.jpg")
                      ? "object-cover object-center"
                      : "object-contain p-4"
                  }`}
                />
              </div>
              <figcaption className="bg-white px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8C1515]">
                  {piece.label}
                </p>
                <p className="mt-1 text-sm text-[#3F3832]">{piece.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
