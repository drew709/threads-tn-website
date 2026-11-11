import { Link } from "react-router-dom";
import { GOOGLE_SNAPSHOT } from "./ui";

const partners = ["SanMar", "S&S Activewear", "Momentec Brands", "Richardson"];

export default function TrustBar() {
  return (
    <section aria-label="Shop facts" className="border-y border-[#1C1412]/10 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
        <a
          href="#reviews"
          className="shrink-0 text-sm text-[#3F3832] underline decoration-[#1C1412]/20 underline-offset-4 hover:text-[#8C1515] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C1515] focus-visible:ring-offset-2"
        >
          <span className="font-semibold text-[#1C1412]">
            {GOOGLE_SNAPSHOT.score} on Google
          </span>
          <span> · {GOOGLE_SNAPSHOT.count} reviews</span>
        </a>
        <p className="text-sm leading-relaxed text-[#4A433E]">
          We decorate blanks from{" "}
          {partners.map((name, index) => (
            <span key={name}>
              {index > 0 && index < partners.length - 1 ? ", " : null}
              {index === partners.length - 1 ? ", and " : null}
              <span className="font-semibold text-[#1C1412]">{name}</span>
            </span>
          ))}
          .
        </p>
        <Link
          to="/products"
          className="shrink-0 text-sm font-semibold text-[#8C1515] underline decoration-[#8C1515]/30 underline-offset-4 hover:decoration-[#8C1515] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C1515] focus-visible:ring-offset-2"
        >
          Browse suppliers
        </Link>
      </div>
    </section>
  );
}
