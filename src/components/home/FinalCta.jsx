import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { SHOP, PrimaryLink, PhoneButton, displayFont } from "./ui";

export default function FinalCta() {
  return (
    <section
      id="visit"
      aria-labelledby="final-heading"
      className="scroll-mt-24 bg-[#231816] text-white"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
            Start an order
          </p>
          <h2
            id="final-heading"
            className="mt-3 max-w-xl text-balance text-3xl leading-tight sm:text-4xl"
            style={displayFont}
          >
            Send the idea. We’ll help you make the call on apparel, decoration,
            and timing.
          </h2>
          <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-white/75 sm:text-lg">
            Call the shop or send a quote request. We’ll follow up with pricing
            and production details.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryLink to="/contact" tone="ink">
              Get a Quote
            </PrimaryLink>
            <PhoneButton />
          </div>
        </div>

        <div className="rounded-3xl bg-[#F4EFE8] p-6 text-[#1C1412]">
          <h3 className="text-2xl" style={displayFont}>
            Reach the shop
          </h3>
          <ul className="mt-4 space-y-3 text-sm sm:text-base">
            <li>
              <a
                href={SHOP.phoneHref}
                className="inline-flex items-center gap-2 font-semibold hover:text-[#8C1515] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C1515] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4EFE8]"
              >
                <Phone size={16} aria-hidden="true" />
                {SHOP.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={SHOP.emailHref}
                className="inline-flex items-center gap-2 hover:text-[#8C1515] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C1515] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4EFE8]"
              >
                <Mail size={16} aria-hidden="true" />
                {SHOP.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} aria-hidden="true" className="mt-1 shrink-0" />
              <span>
                {SHOP.street}
                <br />
                {SHOP.city}
              </span>
            </li>
          </ul>

          <div className="mt-5 flex items-center gap-3">
            <a
              href={SHOP.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Threads TN on Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1C1412] ring-1 ring-[#1C1412]/10 hover:bg-[#8C1515] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C1515] focus-visible:ring-offset-2"
            >
              <Facebook size={18} />
            </a>
            <a
              href={SHOP.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Threads TN on Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1C1412] ring-1 ring-[#1C1412]/10 hover:bg-[#8C1515] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C1515] focus-visible:ring-offset-2"
            >
              <Instagram size={18} />
            </a>
            <a
              href={SHOP.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#8C1515] underline decoration-[#8C1515]/30 underline-offset-4 hover:decoration-[#8C1515] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C1515] focus-visible:ring-offset-2"
            >
              Directions
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-16">
        <iframe
          title="Map showing 106 W. Ogee Street, Tullahoma, TN"
          src={SHOP.mapEmbed}
          referrerPolicy="no-referrer-when-downgrade"
          className="h-64 w-full rounded-3xl border-0 bg-[#E7D9CC] sm:h-72"
        />
      </div>
    </section>
  );
}
