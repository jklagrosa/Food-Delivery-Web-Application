import TopNav from "../components/TopNav";
import Navigation from "../components/Nav";
import Hero from "../components/Hero";
import Services from "../components/Services";
import TodaySpecial from "../components/TS";
import Featured from "../components/Featured";
import Promo from "../components/Promo";

export default function Home() {
  return (
    <>
      {/* ========================== */}

      <TopNav />
      <Navigation />
      <Hero />
      <Services />
      <TodaySpecial />
      <Featured />
      <Promo />
    </>
  );
}
