import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { teamStores } from "../../pages/TeamStores";
import { SectionHeading } from "./ui";

function storeTitle(name) {
  // The Team Stores page still spells this "McNNabb Company Store".
  // The logo and the Printavo URL use McNabb, so the home card does too.
  return name.replace("McNNabb", "McNabb").replace(" Company Store", "");
}

export default function TeamStoresStrip() {
  return (
    <section
      id="team-stores"
      aria-labelledby="stores-heading"
      className="scroll-mt-24 bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Team stores"
            title="Official stores for local teams and organizations."
            titleId="stores-heading"
          >
            Share a link and skip the size-chart spreadsheet. We build and
            manage the store. Your group orders their own gear.
          </SectionHeading>
          <Link
            to="/team-stores"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-[#8C1515] underline decoration-[#8C1515]/30 underline-offset-4 hover:decoration-[#8C1515] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C1515] focus-visible:ring-offset-2"
          >
            See the Team Stores page
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <p className="mt-4 max-w-2xl text-sm text-[#5c534c]">
          Open now. These are the stores on the Team Stores page — not a full
          list of who the shop has worked with.
        </p>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {teamStores.map((store) => {
            const title = storeTitle(store.name);
            return (
              <li key={store.link}>
                <a
                  href={store.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${title} (opens in a new tab)`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl bg-[#F4EFE8] ring-1 ring-[#1C1412]/10 transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C1515] focus-visible:ring-offset-2 motion-safe:hover:-translate-y-0.5 motion-safe:transition"
                >
                  <div className="flex h-48 items-center justify-center bg-white p-5">
                    <img
                      src={store.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="max-h-full w-full object-contain"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="text-base font-semibold leading-snug text-[#1C1412]">
                      {title}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#8C1515]">
                      Shop store
                      <ArrowRight
                        size={16}
                        aria-hidden="true"
                        className="motion-safe:transition-transform motion-safe:group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 rounded-3xl bg-[#F4EFE8] px-5 py-5">
          <p className="max-w-2xl text-base text-[#3F3832]">
            <span className="font-semibold text-[#1C1412]">
              Want a store for your team?
            </span>{" "}
            Tell us who it’s for and we’ll follow up from the quote form.
          </p>
          <Link
            to="/contact"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#8C1515] underline decoration-[#8C1515]/30 underline-offset-4 hover:decoration-[#8C1515] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C1515] focus-visible:ring-offset-2"
          >
            Start a quote
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
