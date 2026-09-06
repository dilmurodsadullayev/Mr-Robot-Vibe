import { useCallback, useState } from "react";

import IntroLoader from "./components/IntroLoader/IntroLoader";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/Home/HomePage";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
  }, []);

  return (
    <>
      {showIntro && (
        <IntroLoader
          onComplete={handleIntroComplete}
        />
      )}

      <MainLayout>
        <HomePage />
      </MainLayout>
    </>
  );
}

export default App;