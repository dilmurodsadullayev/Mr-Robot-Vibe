import HeroSection from "../../sections/Hero/HeroSection";
import IdentitySection from "../../sections/Identity/IdentitySection";
import CharactersSection from "../../sections/Characters/CharactersSection";
import SeriesStatsSection from "../../sections/SeriesStats/SeriesStatsSection";
import TerminalSection from "../../sections/Terminal/TerminalSection";

function HomePage() {
  return (
    <>
      <HeroSection />

      <IdentitySection />

      <CharactersSection />

      <SeriesStatsSection />

      <TerminalSection />
    </>
  );
}

export default HomePage;