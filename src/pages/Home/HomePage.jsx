import HeroSection from "../../sections/Hero/HeroSection";
import IdentitySection from "../../sections/Identity/IdentitySection";
import CharactersSection from "../../sections/Characters/CharactersSection";
import ArchiveSection from "../../sections/Archive/ArchiveSection";
import TerminalSection from "../../sections/Terminal/TerminalSection";

function HomePage() {
  return (
    <>
      <HeroSection />

      <IdentitySection />

      <CharactersSection />

      <ArchiveSection />

      <TerminalSection />
    </>
  );
}

export default HomePage;