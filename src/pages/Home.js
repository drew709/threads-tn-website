import Seo from "../components/Seo";
import { pageSeo } from "../seo/pages";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import TeamStoresStrip from "../components/home/TeamStoresStrip";
import Reviews from "../components/home/Reviews";
import AboutTeaser from "../components/home/AboutTeaser";
import FinalCta from "../components/home/FinalCta";
import "../components/home/home.css";

/*
  Owner-only. Do not render this list until Drew confirms it:

  - Proofs. Whether a proof is always sent before production, and whether it is free.
  - Turnaround. A typical timeline, and whether rush orders are possible.
  - Shipping and delivery. Options beyond 106 W. Ogee Street, including whether pickup is usual.
  - Replies. How soon a quote request gets an answer.
  - Hours. When the shop is open.
  - Walk-ins. Whether someone can stop by without an appointment.

  Also unpublished, because they are not in the repo: years in business,
  order counts, schools served, minimums, a city-by-city service area, and ZIP.
  The Google line “4.8 · 37 reviews” is a 11 Nov 2026 snapshot of the live widget.
*/

export default function Home() {
  return (
    <div className="bg-[#F4EFE8] text-[#1C1412]">
      <Seo {...pageSeo.home} />
      <Hero />
      <Services />
      <TeamStoresStrip />
      <Reviews />
      <AboutTeaser />
      <FinalCta />
    </div>
  );
}
