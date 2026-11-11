import { SHOP, displayFont, PrimaryLink, SecondaryLink } from "./ui";

const chips = [
  "Locally owned in Tullahoma",
  `${SHOP.street}`,
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#F4EFE8]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('/fabric-texture.png')",
          backgroundSize: "140px",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pb-14 pt-12 sm:pt-16 lg:grid-cols-2 lg:gap-14 lg:pb-20 lg:pt-16">
        <div className="home-rise">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8C1515]">
            Screen printing · Embroidery · Team stores
          </p>
          <h1
            className="mt-4 text-balance text-[1.9rem] leading-[1.05] text-[#1C1412] sm:text-5xl lg:text-[3.15rem]"
            style={displayFont}
          >
            Custom apparel for Tullahoma teams, schools, and businesses.
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-[#4A433E] sm:text-lg">
            Locally owned on Ogee Street in Tullahoma. Embroidery, screen
            printing, and online team stores for schools, sports teams,
            businesses, and organizations — with the details handled, so you
            can focus on your students, your team, and your community.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <PrimaryLink to="/contact">Get a Quote</PrimaryLink>
            <SecondaryLink to="/team-stores">Shop Team Stores</SecondaryLink>
          </div>
          <p className="mt-4 text-sm text-[#5c534c]">
            Or call{" "}
            <a
              href={SHOP.phoneHref}
              className="font-semibold text-[#8C1515] underline decoration-[#8C1515]/30 underline-offset-4 hover:decoration-[#8C1515] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C1515] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4EFE8]"
            >
              {SHOP.phoneDisplay}
            </a>
          </p>

          <ul className="mt-8 flex flex-wrap gap-2">
            {chips.map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-[#1C1412]/10 bg-white/80 px-3 py-1.5 text-sm text-[#3F3832]"
              >
                {chip}
              </li>
            ))}
          </ul>
        </div>

        <div className="home-rise-late grid items-stretch gap-3 sm:grid-cols-[1.35fr_0.8fr]">
          <figure className="overflow-hidden rounded-[1.6rem] bg-[#E7D9CC] shadow-[0_24px_50px_-28px_rgba(28,20,18,0.55)]">
            <img
              src="/tullys.jpg"
              alt="Two folded terracotta Comfort Colors t-shirts with a Tully’s Coffee Co. screen print, on a wood floor."
              width="2048"
              height="1608"
              fetchPriority="high"
              decoding="async"
              className="aspect-[5/4] h-full w-full object-cover"
            />
          </figure>
          <figure className="flex h-full flex-col rounded-[1.6rem] bg-white p-3 shadow-[0_18px_40px_-28px_rgba(28,20,18,0.45)] ring-1 ring-[#1C1412]/5">
            <img
              src="/hats.jpg"
              alt="Three Richardson caps: a white Wildcats trucker hat, a gray hat with an Elite Roofing patch, and a tan hat with a bull logo."
              width="1200"
              height="800"
              decoding="async"
              className="h-36 w-full object-contain sm:h-auto sm:min-h-0 sm:flex-1"
            />
            <figcaption className="px-1 pb-1 pt-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#5c534c]">
              Hats & headwear
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
