import Seo from "../components/Seo";
import { pageSeo } from "../seo/pages";
import Hero from "../components/home/Hero";
import TrustBar from "../components/home/TrustBar";
import Audiences from "../components/home/Audiences";
import Services from "../components/home/Services";
import HowItWorks from "../components/home/HowItWorks";
import TeamStoresStrip from "../components/home/TeamStoresStrip";
import WorkGallery from "../components/home/WorkGallery";
import Reviews from "../components/home/Reviews";
import AboutTeaser from "../components/home/AboutTeaser";
import FinalCta from "../components/home/FinalCta";
import "../components/home/home.css";

export default function Home() {
  return (
    <div className="-mt-8 bg-[#F4EFE8] text-[#1C1412]">
      <Seo {...pageSeo.home} />
      <Hero />
      <TrustBar />
      <Audiences />
      <Services />
      <HowItWorks />
      <TeamStoresStrip />
      <WorkGallery />
      <Reviews />
      <AboutTeaser />
      <FinalCta />
    </div>
  );
}
